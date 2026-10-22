"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCart } from "@/lib/store/cart-context";
import { brands, deliveryConfig } from "@/lib/store/store-data";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ArrowLeft,
  Truck,
  ShieldCheck,
  Tag,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function CartPage() {
  const params = useParams();
  const locale = (params?.locale as "bn" | "en") || "bn";

  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    deliveryFee,
    total,
    totalCount,
    freeDeliveryRemaining,
    mounted,
  } = useCart();

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);

  const formatNumber = (num: number) => {
    if (locale === "bn") {
      const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
      return num.toString().replace(/\d/g, (d) => bnDigits[parseInt(d, 10)]);
    }
    return num.toLocaleString();
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError("");
    const clean = promoCode.trim().toUpperCase();
    if (clean === "ABAD10" || clean === "ABADFRESH") {
      const discount = Math.round(subtotal * 0.1);
      setDiscountAmount(discount);
      setPromoApplied(true);
    } else {
      setPromoError(
        locale === "bn"
          ? "ভাউচার কোডটি সঠিক নয়। ডেমো কোড হিসেবে 'ABAD10' ব্যবহার করুন।"
          : "Invalid voucher. Try demonstration code 'ABAD10'."
      );
    }
  };

  const finalTotal = Math.max(0, total - discountAmount);

  const freeDeliveryProgress = Math.min(
    100,
    Math.round((subtotal / deliveryConfig.freeDeliveryThreshold) * 100)
  );

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#FBF9F4] flex items-center justify-center p-6">
        <div className="text-stone-500 text-sm font-semibold animate-pulse">
          {locale === "bn" ? "কার্ট লোড হচ্ছে..." : "Loading cart..."}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-stone-900 pb-20">
      {/* Top Banner */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-stone-900 flex items-center gap-2.5">
              <ShoppingBag className="w-7 h-7 text-emerald-800" />
              <span>{locale === "bn" ? "শপিং কার্ট" : "Shopping Cart"}</span>
            </h1>
            <p className="text-xs text-stone-500 mt-1">
              {formatNumber(totalCount)} {locale === "bn" ? "টি পণ্য ব্যাগে সংরক্ষিত আছে" : "items in your cart"}
            </p>
          </div>

          <Link
            href={`/${locale}/store`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{locale === "bn" ? "আরও কেনাকাটা করুন" : "Continue Shopping"}</span>
          </Link>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-8">
        {items.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-16 text-center max-w-xl mx-auto shadow-sm">
            <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
            </div>
            <h2 className="text-xl font-black text-stone-900">
              {locale === "bn" ? "আপনার শপিং কার্ট বর্তমানে খালি" : "Your Shopping Cart is Empty"}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-2 leading-relaxed">
              {locale === "bn"
                ? "আমাদের সতেজা (শাকসবজি ও ফল), রসদ (চাল ও তেল), কিংবা সুধা (দুধ ও ঘি) থেকে পছন্দমতো পণ্য কার্টে যোগ করুন।"
                : "Explore our sister brands to find fresh vegetables, everyday pantry essentials, and farm dairy."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-stone-100">
              <Link
                href={`/${locale}/soteja`}
                className="p-3 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-bold text-xs transition-colors"
              >
                {locale === "bn" ? "সতেজা স্টোর →" : "Soteja Store →"}
              </Link>
              <Link
                href={`/${locale}/rosod`}
                className="p-3 rounded-xl bg-amber-50 text-amber-900 hover:bg-amber-100 font-bold text-xs transition-colors"
              >
                {locale === "bn" ? "রসদ স্টোর →" : "Rosod Store →"}
              </Link>
              <Link
                href={`/${locale}/sudha`}
                className="p-3 rounded-xl bg-sky-50 text-sky-900 hover:bg-sky-100 font-bold text-xs transition-colors"
              >
                {locale === "bn" ? "সুধা স্টোর →" : "Sudha Store →"}
              </Link>
            </div>

            <div className="mt-6">
              <Link
                href={`/${locale}/store`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md"
              >
                <span>{locale === "bn" ? "মূল স্টোরফ্রন্টে যান" : "Visit Main Store"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          /* Cart with Items */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Items Column */}
            <div className="lg:col-span-8 space-y-4">
              {/* Free Delivery Bar */}
              <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-2xs">
                <div className="flex items-center justify-between text-xs font-semibold mb-2">
                  <div className="flex items-center gap-2 text-stone-800">
                    <Truck className="w-4 h-4 text-emerald-700" />
                    {freeDeliveryRemaining === 0 ? (
                      <span className="text-emerald-800 font-bold">
                        {locale === "bn"
                          ? "🎉 অভিনন্দন! আপনি ফ্রি ডেলিভারি সুবিধা পাচ্ছেন।"
                          : "🎉 Congratulations! Free delivery unlocked."}
                      </span>
                    ) : (
                      <span>
                        {locale === "bn" ? (
                          <>
                            আর মাত্র <strong className="text-emerald-900">৳{formatNumber(freeDeliveryRemaining)}</strong> কেনাকাটা করলেই ফ্রি ডেলিভারি!
                          </>
                        ) : (
                          <>
                            Add <strong className="text-emerald-900">৳{formatNumber(freeDeliveryRemaining)}</strong> more for free delivery!
                          </>
                        )}
                      </span>
                    )}
                  </div>
                  <span className="text-stone-500 font-medium">{freeDeliveryProgress}%</span>
                </div>

                <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${freeDeliveryProgress}%` }}
                  />
                </div>
              </div>

              {/* Items Card */}
              <div className="bg-white rounded-2xl border border-stone-200 shadow-2xs overflow-hidden">
                <div className="p-4 border-b border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    {locale === "bn" ? "নির্বাচিত পণ্যের তালিকা" : "Selected Items"}
                  </span>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-xs font-semibold text-stone-400 hover:text-rose-600 transition-colors flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>{locale === "bn" ? "কার্ট খালি করুন" : "Clear Cart"}</span>
                  </button>
                </div>

                <div className="divide-y divide-stone-100">
                  {items.map((item) => {
                    const brand = brands[item.brand];
                    const brandName = locale === "bn" ? brand.nameBn : brand.nameEn;
                    const itemName = locale === "bn" ? item.nameBn : item.nameEn;
                    const packLabel = locale === "bn" ? item.packSize.labelBn : item.packSize.labelEn;

                    return (
                      <div
                        key={item.id}
                        className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-stone-50/50 transition-colors"
                      >
                        {/* Thumbnail & Name */}
                        <div className="flex items-center gap-3.5 flex-1 min-w-0">
                          <Link
                            href={`/${locale}/product/${item.slug}`}
                            className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-stone-200"
                          >
                            <Image
                              src={item.image}
                              alt={itemName}
                              fill
                              className="object-cover"
                            />
                          </Link>

                          <div className="min-w-0">
                            <span
                              className={`text-[9px] font-bold px-1.5 py-0.2 rounded inline-block ${
                                item.brand === "soteja"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : item.brand === "rosod"
                                  ? "bg-amber-100 text-amber-900"
                                  : "bg-sky-100 text-sky-900"
                              }`}
                            >
                              {brandName}
                            </span>
                            <Link
                              href={`/${locale}/product/${item.slug}`}
                              className="block font-bold text-sm sm:text-base text-stone-900 hover:text-emerald-800 transition-colors truncate mt-0.5"
                            >
                              {itemName}
                            </Link>
                            <span className="text-xs text-stone-500 block">
                              {packLabel} • ৳{formatNumber(item.unitPrice)}
                            </span>
                          </div>
                        </div>

                        {/* Quantity Controls & Line Total */}
                        <div className="flex items-center justify-between sm:justify-end gap-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                          {/* Stepper */}
                          <div className="flex items-center border border-stone-300 rounded-xl bg-white shadow-2xs">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 text-stone-600 hover:bg-stone-100 rounded-l-xl transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-10 text-center text-xs sm:text-sm font-bold text-stone-900">
                              {formatNumber(item.quantity)}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 text-stone-600 hover:bg-stone-100 rounded-r-xl transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Line Total */}
                          <div className="text-right min-w-[80px]">
                            <span className="text-base font-bold text-stone-900 block">
                              ৳{formatNumber(item.unitPrice * item.quantity)}
                            </span>
                          </div>

                          {/* Remove */}
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-stone-400 hover:text-rose-600 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Summary Sidebar */}
            <div className="lg:col-span-4 space-y-4">
              {/* Order Summary Card */}
              <div className="bg-white rounded-2xl border border-stone-200/90 p-5 shadow-xs space-y-4">
                <h3 className="font-bold text-stone-900 text-base pb-3 border-b border-stone-100">
                  {locale === "bn" ? "অর্ডার সারাংশ" : "Order Summary"}
                </h3>

                {/* Calculations */}
                <div className="space-y-2.5 text-xs sm:text-sm text-stone-600">
                  <div className="flex justify-between">
                    <span>{locale === "bn" ? "উপমোট (Subtotal):" : "Subtotal:"}</span>
                    <span className="font-semibold text-stone-900">৳{formatNumber(subtotal)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>{locale === "bn" ? "ডেলিভারি চার্জ:" : "Delivery Charge:"}</span>
                    <span className="font-semibold">
                      {deliveryFee === 0 ? (
                        <span className="text-emerald-700 font-bold">{locale === "bn" ? "ফ্রি" : "FREE"}</span>
                      ) : (
                        `৳${formatNumber(deliveryFee)}`
                      )}
                    </span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-800 font-semibold">
                      <span>{locale === "bn" ? "ভাউচার ডিসকাউন্ট (১০%):" : "Voucher Discount (10%):"}</span>
                      <span>-৳{formatNumber(discountAmount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-base sm:text-lg font-black text-stone-900 pt-3 border-t border-stone-200">
                    <span>{locale === "bn" ? "সর্বমোট প্রদেয়:" : "Grand Total:"}</span>
                    <span className="text-emerald-800">৳{formatNumber(finalTotal)}</span>
                  </div>
                </div>

                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="pt-2">
                  <div className="flex items-center gap-1.5">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder={locale === "bn" ? "ভাউচার কোড (যেমন: ABAD10)" : "Voucher code (e.g. ABAD10)"}
                      className="flex-1 text-xs px-3 py-2 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30 uppercase"
                    />
                    <button
                      type="submit"
                      className="px-3 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs"
                    >
                      {locale === "bn" ? "প্রয়োগ" : "Apply"}
                    </button>
                  </div>

                  {promoApplied && (
                    <p className="text-[11px] text-emerald-700 font-bold mt-1.5 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{locale === "bn" ? "ভাউচার সফলভাবে যোগ হয়েছে!" : "Promo applied successfully!"}</span>
                    </p>
                  )}

                  {promoError && (
                    <p className="text-[11px] text-rose-600 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{promoError}</span>
                    </p>
                  )}
                </form>

                {/* Checkout CTA */}
                <div className="pt-2">
                  <Link
                    href={`/${locale}/checkout`}
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                  >
                    <span>{locale === "bn" ? "চেকআউটে এগিয়ে যান" : "Proceed to Checkout"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="text-[11px] text-stone-400 text-center leading-relaxed">
                  {locale === "bn"
                    ? "🛡️ নিরাপদ চেকআউট • ক্যাশ অন ডেলিভারি প্রযোজ্য • কোনো অনলাইন চার্জ কাটা হবে না"
                    : "🛡️ Safe demo checkout • Cash on Delivery • No live card charge"}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
