import { NextRequest, NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/server/admin-auth";
import { getAdminLeads } from "@/lib/server/lead-repository";
import { sanitizeCsvCell } from "@/lib/server/crypto";

export async function GET(req: NextRequest) {
  const session = await verifyAdminSession(req);
  if (!session.authenticated) {
    return NextResponse.json({ ok: false, error: session.error || "UNAUTHORIZED" }, { status: 401 });
  }

  // Viewers cannot export data
  if (session.user?.role === "viewer") {
    return NextResponse.json({ ok: false, error: "EXPORT_FORBIDDEN" }, { status: 403 });
  }

  const { searchParams } = new URL(req.url);
  const kind = searchParams.get("kind") || undefined;
  const districtId = searchParams.get("districtId") || undefined;
  const status = searchParams.get("status") || undefined;

  const data = await getAdminLeads({ page: 1, limit: 1000, kind, districtId, status });

  // CSV Headers
  const headers = [
    "Reference",
    "Date",
    "Kind",
    "Name",
    "Phone",
    "Email",
    "District",
    "Organization",
    "Status",
    "Internal Notes",
  ];

  const rows = data.leads.map((lead) => [
    sanitizeCsvCell(lead.reference),
    sanitizeCsvCell(lead.created_at),
    sanitizeCsvCell(lead.kind),
    sanitizeCsvCell(lead.name),
    sanitizeCsvCell(lead.phone || ""),
    sanitizeCsvCell(lead.email || ""),
    sanitizeCsvCell(lead.district_id || ""),
    sanitizeCsvCell(lead.organization || ""),
    sanitizeCsvCell(lead.status),
    sanitizeCsvCell(lead.internal_notes || ""),
  ]);

  const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\r\n");

  return new NextResponse(csvContent, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="abad-leads-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}