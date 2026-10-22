"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Locale, SiteCopy } from "@/lib/types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StoreHeader } from "@/components/store/StoreHeader";
import { StoreFooter } from "@/components/store/StoreFooter";
import { CartDrawer } from "@/components/store/CartDrawer";
import { CartProvider } from "@/lib/store/cart-context";

interface LayoutShellProps {
  locale: Locale;
  copy: SiteCopy;
  children: React.ReactNode;
}

export function LayoutShell({ locale, copy, children }: LayoutShellProps) {
  const pathname = usePathname();

  // Check if current route is part of the store experience
  const isStore =
    pathname?.includes("/store") ||
    pathname?.includes("/soteja") ||
    pathname?.includes("/rosod") ||
    pathname?.includes("/sudha") ||
    pathname?.includes("/cart") ||
    pathname?.includes("/checkout") ||
    pathname?.includes("/product");

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <a href="#main-content" className="skip-link">
          {copy.common.skipToContent}
        </a>

        {isStore ? (
          <StoreHeader locale={locale} />
        ) : (
          <Header locale={locale} copy={copy} />
        )}

        <main id="main-content" className={`flex-1 ${isStore ? "bg-[#FAF7F2]" : ""}`}>
          {children}
        </main>

        {isStore ? (
          <StoreFooter locale={locale} />
        ) : (
          <Footer locale={locale} copy={copy} />
        )}

        <CartDrawer locale={locale} />
      </div>
    </CartProvider>
  );
}
