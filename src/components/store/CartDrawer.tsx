"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/store/cart-context";
import { brands, deliveryConfig } from "@/lib/store/store-data";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Truck } from "lucide-react";

interface CartDrawerProps {
  locale: "bn" | "en";
}

export function CartDrawer({ locale }: CartDrawerProps) {
  const {
    items,
    isDrawerOpen,
    closeDrawer,
    updateQuantity,
    removeItem,
    subtotal,
    deliveryFee,
    total,
    totalCount,
    freeDeliveryRemaining,
  } = useCart();

  if (!isDrawerOpen) return null;

  const formatNumber = (num: number) => {
    if (locale === "bn") {
      const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
      return num.toString().replace(/\d/g, (d) => bnDigits[parseInt(d, 10)]);
    }
    return num.toLocaleString();
  };

  const freeDeliveryProgress = Math.min(
    100,
    Math.round((subtotal / deliveryConfig.freeDeliveryThreshold) * 100)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity"
        onClick={closeDrawer}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-stone-50 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-5 bg-white border-b border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-bold text-stone-900 text-base sm:text-lg">
                  {locale === "bn" ? "আপনার শপিং ব্যাগ" : "Your Shopping Bag"}
                </h2>
                <span className="text-xs text-stone-500 font-medium">
                  {formatNumber(totalCount)} {locale === "bn" ? "টি পণ্য" : "items"}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={closeDrawer}
              className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-xl transition-colors"
              aria-label={locale === "bn" ? "বন্ধ করুন" : "Close cart"}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Delivery Bar */}
          <div className="px-4 py-3 bg-emerald-50/80 border-b border-emerald-100 text-xs">
            <div className="flex items-center gap-2 mb-1.5 text-emerald-900 font-medium">
              <Truck className="w-4 h-4 text-emerald-700 shrink-0" />
              {freeDeliveryRemaining === 0 ? (
                <span className="font-bold text-emerald-800">
                  {locale === "bn"
                    ? "🎉 অভিনন্দন! আপনি ফ্রি ডেলিভারি পাচ্ছেন।"
                    : "🎉 Congratulations! You unlocked FREE delivery."}
                </span>
              ) : (
                <span>
                  {locale === "bn" ? (
                    <>
                      আর মাত্র <strong className="font-bold text-emerald-950">৳{formatNumber(freeDeliveryRemaining)}</strong> কেনাকাটা করলেই ফ্রি ডেলিভারি!
                    </>
                  ) : (
                    <>
                      Add <strong className="font-bold text-emerald-950">৳{formatNumber(freeDeliveryRemaining)}</strong> more to get FREE delivery!
                    </>
                  )}
                </span>
              )}
            </div>
            <div className="w-full bg-emerald-200/60 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-emerald-600 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${freeDeliveryProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-500">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-4">
                  <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                </div>
                <p className="font-bold text-stone-800 text-base mb-1">
                  {locale === "bn" ? "ব্যাগ বর্তমানে খালি আছে" : "Your cart is empty"}
                </p>
                <p className="text-xs text-stone-500 max-w-xs mb-5">
                  {locale === "bn"
                    ? "সতেজা, রসদ বা সুধার তাজা পণ্য নির্বাচন করে কেনাকাটা শুরু করুন।"
                    : "Explore fresh farm produce, pantry staples, and pure dairy to start shopping."}
                </p>
                <button
                  type="button"
                  onClick={closeDrawer}
                  className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs shadow-xs"
                >
                  {locale === "bn" ? "পণ্য দেখুন" : "Start Shopping"}
                </button>
              </div>
            ) : (
              items.map((item) => {
                const brand = brands[item.brand];
                const brandName = locale === "bn" ? brand.nameBn : brand.nameEn;
                const itemName = locale === "bn" ? item.nameBn : item.nameEn;
                const packLabel = locale === "bn" ? item.packSize.labelBn : item.packSize.labelEn;

                return (
                  <div
                    key={item.id}
                    className="flex gap-3 p-3 bg-white rounded-xl border border-stone-200 shadow-2xs hover:border-stone-300 transition-colors"
                  >
                    <div className="relative w-18 h-18 rounded-lg overflow-hidden bg-stone-100 shrink-0">
                      <Image
                        src={item.image}
                        alt={itemName}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-1">
                          <span
                            className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                              item.brand === "soteja"
                                ? "bg-emerald-100 text-emerald-800"
                                : item.brand === "rosod"
                                ? "bg-amber-100 text-amber-900"
                                : "bg-sky-100 text-sky-900"
                            }`}
                          >
                            {brandName}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                            aria-label={locale === "bn" ? "মুছুন" : "Remove"}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <h4 className="text-xs font-bold text-stone-900 truncate mt-0.5">
                          {itemName}
                        </h4>
                        <span className="text-[11px] text-stone-500">
                          {packLabel}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-1 border-t border-stone-100">
                        <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-stone-200 text-stone-600 rounded-l transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center text-xs font-bold text-stone-900">
                            {formatNumber(item.quantity)}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-stone-200 text-stone-600 rounded-r transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-xs font-bold text-stone-900">
                          ৳{formatNumber(item.unitPrice * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Calculations & Actions */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 bg-white border-t border-stone-200 space-y-3">
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>{locale === "bn" ? "উপমোট (Subtotal):" : "Subtotal:"}</span>
                  <span className="font-semibold text-stone-900">৳{formatNumber(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{locale === "bn" ? "ডেলিভারি চার্জ:" : "Delivery Fee:"}</span>
                  <span className="font-semibold text-stone-900">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-700 font-bold">{locale === "bn" ? "ফ্রি" : "FREE"}</span>
                    ) : (
                      `৳${formatNumber(deliveryFee)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm sm:text-base font-bold text-stone-900 pt-2 border-t border-stone-200">
                  <span>{locale === "bn" ? "সর্বমোট:" : "Total:"}</span>
                  <span className="text-emerald-800">৳{formatNumber(total)}</span>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <Link
                  href={`/${locale}/checkout`}
                  onClick={closeDrawer}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <span>{locale === "bn" ? "চেকআউট করুন" : "Proceed to Checkout"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href={`/${locale}/cart`}
                  onClick={closeDrawer}
                  className="w-full py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs flex items-center justify-center transition-colors"
                >
                  {locale === "bn" ? "পুরো কার্ট ও ভাউচার দেখুন" : "View Full Cart & Summary"}
                </Link>
              </div>

              <div className="text-[10px] text-center text-stone-400 font-medium">
                {locale === "bn"
                  ? "🔒 নিরাপদ ডেমো চেকআউট • ক্যাশ অন ডেলিভারি প্রযোজ্য"
                  : "🔒 Safe Demo Checkout • Cash on Delivery available"}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
