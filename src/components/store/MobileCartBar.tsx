"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/store/cart-context";
import { ShoppingBag, ArrowRight } from "lucide-react";

interface MobileCartBarProps {
  locale: "bn" | "en";
}

export function MobileCartBar({ locale }: MobileCartBarProps) {
  const pathname = usePathname();
  const { totalCount, subtotal, openDrawer, mounted } = useCart();

  // Hide on dedicated cart or checkout pages, or when cart is empty
  const isCartOrCheckout = pathname?.includes("/cart") || pathname?.includes("/checkout");
  if (!mounted || totalCount === 0 || isCartOrCheckout) return null;

  const formatNumber = (num: number) => {
    if (locale === "bn") {
      const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
      return num.toString().replace(/\d/g, (d) => bnDigits[parseInt(d, 10)]);
    }
    return num.toLocaleString();
  };

  return (
    <aside
      aria-label={locale === "bn" ? "কার্ট সারসংক্ষেপ বার" : "Cart summary bar"}
      className="md:hidden fixed bottom-4 inset-x-3.5 z-40 animate-slideUp"
    >
      <div className="bg-stone-900/95 backdrop-blur-md text-white rounded-2xl p-3 shadow-2xl border border-stone-700/60 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={openDrawer}
          className="flex items-center gap-2.5 text-left flex-1 min-w-0"
          aria-label={locale === "bn" ? "কার্ট ড্রয়ার খুলুন" : "Open cart drawer"}
        >
          <div className="relative w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0">
            <ShoppingBag className="w-5 h-5 text-white" />
            <span className="absolute -top-1.5 -right-1.5 bg-amber-400 text-stone-900 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
              {formatNumber(totalCount)}
            </span>
          </div>

          <div className="min-w-0">
            <span className="text-[10px] text-emerald-300 font-semibold block leading-tight">
              {formatNumber(totalCount)} {locale === "bn" ? "টি পণ্য ব্যাগে আছে" : "items in cart"}
            </span>
            <span className="text-sm font-black text-white leading-tight">
              ৳{formatNumber(subtotal)}
            </span>
          </div>
        </button>

        <Link
          href={`/${locale}/checkout`}
          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shrink-0 active:scale-95 transition-all min-h-[42px]"
        >
          <span>{locale === "bn" ? "চেকআউট" : "Checkout"}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </aside>
  );
}
