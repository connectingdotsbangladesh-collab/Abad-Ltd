import { NextRequest, NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/server/admin-auth";
import { updateLeadStatusOrNote } from "@/lib/server/lead-repository";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await verifyAdminSession(req);
  if (!session.authenticated) {
    return NextResponse.json({ ok: false, error: session.error || "UNAUTHORIZED" }, { status: 401 });
  }

  // Viewers cannot modify leads
  if (session.user?.role === "viewer") {
    return NextResponse.json({ ok: false, error: "FORBIDDEN_READ_ONLY" }, { status: 403 });
  }

  const { id } = await params;
  const body = await req.json();

  const success = await updateLeadStatusOrNote(id, {
    status: body.status,
    internal_notes: body.internal_notes,
  });

  if (!success) {
    return NextResponse.json({ ok: false, error: "UPDATE_FAILED" }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}