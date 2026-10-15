import type { SiteConfig } from "./types";
import rawConfig from "../../site.config.json";

export const siteConfig: SiteConfig = rawConfig as SiteConfig;

export const dataMode: "demo" | "live" =
  (process.env.ABAD_DATA_MODE as "demo" | "live") || "demo";

export const isLiveMode = dataMode === "live";

export const requestHashSecret =
  process.env.ABAD_REQUEST_HASH_SECRET || "abad_default_dev_hash_secret_key_32bytes";

export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
export const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
export const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

export const isSupabaseConfigured =
  Boolean(supabaseUrl && supabaseServiceRoleKey);