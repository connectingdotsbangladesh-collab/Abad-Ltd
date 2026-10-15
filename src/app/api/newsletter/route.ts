import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/config";

export async function POST(req: NextRequest) {
  // If newsletter feature flag is disabled
  if (!siteConfig.featureFlags.newsletter) {
    return NextResponse.json(
      { ok: false, message: "Newsletter subscription is currently disabled until provider configuration is finalized." },
      { status: 503 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Subscription pending double opt-in confirmation.",
  });
}