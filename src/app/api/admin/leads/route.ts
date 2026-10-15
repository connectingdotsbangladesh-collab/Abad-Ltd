import { NextRequest, NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/server/admin-auth";
import { getAdminLeads } from "@/lib/server/lead-repository";

export async function GET(req: NextRequest) {
  const session = await verifyAdminSession(req);
  if (!session.authenticated) {
    return NextResponse.json({ ok: false, error: session.error || "UNAUTHORIZED" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "20", 10);
  const kind = searchParams.get("kind") || undefined;
  const districtId = searchParams.get("districtId") || undefined;
  const status = searchParams.get("status") || undefined;
  const search = searchParams.get("search") || undefined;

  const data = await getAdminLeads({ page, limit, kind, districtId, status, search });
  return NextResponse.json({ ok: true, user: session.user, ...data });
}