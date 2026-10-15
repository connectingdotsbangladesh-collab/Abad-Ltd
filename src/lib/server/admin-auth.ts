import { isSupabaseConfigured, supabaseUrl, supabaseAnonKey, supabaseServiceRoleKey } from "../config";
import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";

export type AdminRole = "admin" | "editor" | "viewer";

export interface AdminUser {
  id: string;
  email: string;
  role: AdminRole;
}

export async function verifyAdminSession(req: NextRequest): Promise<{
  authenticated: boolean;
  user: AdminUser | null;
  error?: string;
}> {
  // Demo mode without credentials:
  // Allows local preview access with explicit demo indicator
  if (!isSupabaseConfigured) {
    return {
      authenticated: true,
      user: {
        id: "demo-local-admin",
        email: "demo-admin@abad.local",
        role: "admin",
      },
    };
  }

  // Live Supabase Authentication
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.replace("Bearer ", "") || req.cookies.get("sb-access-token")?.value;

  if (!token) {
    return { authenticated: false, user: null, error: "AUTH_REQUIRED" };
  }

  const supabaseAuth = createClient(supabaseUrl, supabaseAnonKey);
  const { data: authData, error: authError } = await supabaseAuth.auth.getUser(token);

  if (authError || !authData.user) {
    return { authenticated: false, user: null, error: "INVALID_TOKEN" };
  }

  // Verify membership in admin_members table using service role
  const supabaseService = createClient(supabaseUrl, supabaseServiceRoleKey);
  const { data: memberData, error: memberError } = await supabaseService
    .from("admin_members")
    .select("role")
    .eq("user_id", authData.user.id)
    .single();

  if (memberError || !memberData) {
    return { authenticated: false, user: null, error: "NOT_AN_ADMIN_MEMBER" };
  }

  return {
    authenticated: true,
    user: {
      id: authData.user.id,
      email: authData.user.email || "",
      role: memberData.role as AdminRole,
    },
  };
}