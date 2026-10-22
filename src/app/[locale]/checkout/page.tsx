"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useCart } from "@/lib/store/cart-context";
import { brands, deliveryConfig } from "@/lib/store/store-data";
import { CustomerOrderDetails } from "@/lib/store/types";
import {
  ShieldCheck,
  Truck,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  ShoppingBag,
  CreditCard,
  Banknote,
  Smartphone,
  Check,
  ArrowRight,
} from "lucide-react";

const BANGLADESH_DISTRICTS = [
  "ঢাকা (Dhaka)",
  "গাজীপুর (Gazipur)",
  "নারায়ণগঞ্জ (Narayanganj)",
  "চট্টগ্রাম (Chattogram)",
  "সিলেট (Sylhet)",
  "রাজশাহী (Rajshahi)",
  "রংপুর (Rangpur)",
  "দিনাজপুর (Dinajpur)",
  "বগুড়া (Bogura)",
  "খুলনা (Khulna)",
  "ময়মনসিংহ (Mymensingh)",
  "বরিশাল (Barishal)",
  "কুমিল্লা (Cumilla)",
];

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();
  const locale = (params?.locale as "bn" | "en") || "bn";

  const { items, subtotal, deliveryFee, total, totalCount, clearCart, mounted } = useCart();

  // Form State
  const [formData, setFormData] = useState<CustomerOrderDetails>({
    name: "",
    phone: "",
    district: "ঢাকা (Dhaka)",
    area: "",
    address: "",
    notes: "",
    paymentMethod: "cod",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CustomerOrderDetails, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [generatedOrderNumber, setGeneratedOrderNumber] = useState("");

  const formatNumber = (num: number) => {
    if (locale === "bn") {
      const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
      return num.toString().replace(/\d/g, (d) => bnDigits[parseInt(d, 10)]);
    }
    return num.toLocaleString();
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof CustomerOrderDetails, string>> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name =
        locale === "bn" ? "অনুগ্রহ করে আপনার পুরো নাম লিখুন।" : "Please enter your full name.";
    }

    // Bangladesh mobile number regex
    const phoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
    const cleanPhone = formData.phone.replace(/[\s-]/g, "");
    if (!cleanPhone) {
      newErrors.phone =
        locale === "bn" ? "মোবাইল নম্বর প্রদান আবশ্যক।" : "Mobile phone number is required.";
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone =
        locale === "bn"
          ? "সঠিক ১১ ডিজিটের বাংলাদেশী মোবাইল নম্বর দিন (যেমন: 01711234567)"
          : "Please enter a valid 11-digit Bangladesh phone (e.g. 01711234567)";
    }

    if (!formData.district.trim()) {
      newErrors.district = locale === "bn" ? "জেলা নির্বাচন করুন।" : "Please select your district.";
    }

    if (!formData.area.trim() || formData.area.trim().length < 2) {
      newErrors.area =
        locale === "bn" ? "এলাকা বা থানার নাম লিখুন।" : "Please specify your area or thana.";
    }

    if (!formData.address.trim() || formData.address.trim().length < 5) {
      newErrors.address =
        locale === "bn"
          ? "বাড়ি, রোড ও বিস্তারিত ঠিকানা প্রদান করুন।"
          : "Please enter house, road and full address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      const firstErr = document.querySelector(".input-error");
      if (firstErr) {
        firstErr.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsSubmitting(true);

    // Simulate order placement
    setTimeout(() => {
      const orderRef = `ABD-ORD-${Math.floor(100000 + Math.random() * 900000)}`;
      setGeneratedOrderNumber(orderRef);
      setOrderConfirmed(true);
      clearCart();
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 900);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#FBF9F4] flex items-center justify-center p-6">
        <div className="text-stone-500 text-sm font-semibold animate-pulse">
          {locale === "bn" ? "চেকআউট প্রস্তুত হচ্ছে..." : "Loading checkout..."}
        </div>
      </div>
    );
  }

  // If order is completed, show the confirmation screen
  if (orderConfirmed) {
    return (
      <div className="min-h-screen bg-[#FBF9F4] text-stone-900 py-16 px-4">
        <div className="max-w-xl mx-auto bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-lg text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-xs">
            <Check className="w-10 h-10 stroke-[3]" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              {locale === "bn" ? "অর্ডার নিশ্চিতকরণ (ডেমো)" : "Order Confirmation (Demo)"}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
              {locale === "bn" ? "ধন্যবাদ! আপনার ডেমো অর্ডার সফল হয়েছে" : "Thank you! Demo Order Placed"}
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 mt-2">
              {locale === "bn"
                ? "আপনার অর্ডার রেফারেন্স নম্বর সংরক্ষণ করে রাখুন।"
                : "Please note your demo order reference number."}
            </p>
          </div>

          {/* Reference Box */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-center">
            <span className="text-xs text-stone-500 uppercase tracking-wider block">
              {locale === "bn" ? "অর্ডার আইডি" : "Order Reference"}
            </span>
            <span className="text-xl sm:text-2xl font-black text-emerald-800 tracking-wider mt-1 block">
              {generatedOrderNumber}
            </span>
          </div>

          {/* Customer Summary */}
          <div className="p-4 rounded-2xl bg-stone-50/60 border border-stone-100 text-left text-xs space-y-1.5 text-stone-600">
            <div className="flex justify-between">
              <span className="text-stone-400">{locale === "bn" ? "গ্রাহক:" : "Customer:"}</span>
              <span className="font-bold text-stone-800">{formData.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">{locale === "bn" ? "মোবাইল:" : "Phone:"}</span>
              <span className="font-bold text-stone-800">{formData.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">{locale === "bn" ? "ঠিকানা:" : "Address:"}</span>
              <span className="font-bold text-stone-800 text-right max-w-xs truncate">
                {formData.address}, {formData.area}, {formData.district}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">{locale === "bn" ? "পেমেন্ট পদ্ধতি:" : "Payment:"}</span>
              <span className="font-bold text-emerald-800">
                {locale === "bn" ? "ক্যাশ অন ডেলিভারি (ডেমো)" : "Cash on Delivery (Demo)"}
              </span>
            </div>
          </div>

          {/* Clear Demonstration Notice */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs text-left leading-relaxed space-y-1">
            <div className="flex items-center gap-1.5 font-bold">
              <AlertCircle className="w-4 h-4 text-amber-800 shrink-0" />
              <span>{locale === "bn" ? "ডেমো স্টোরফ্রন্ট ঘোষণা" : "Demo Storefront Notice"}</span>
            </div>
            <p className="text-[11px] text-amber-800/90 pl-5">
              {locale === "bn"
                ? "এটি একটি ডেমো অনলাইন স্টোরফ্রন্ট। প্রদর্শনীর উদ্দেশ্যে এই অর্ডারটি সিমুলেট করা হয়েছে। কোনো আর্থিক লেনদেন সম্পন্ন হয়নি এবং কোনো পণ্য প্রেরণ করা হবে না।"
                : "This is a demonstration storefront. This order simulation was recorded for presentation purposes only. No financial charge was incurred and no parcel will be dispatched."}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Link
              href={`/${locale}/store`}
              className="flex-1 py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm text-center shadow-md transition-all"
            >
              {locale === "bn" ? "স্টোরফ্রন্টে ফিরে যান" : "Back to Store"}
            </Link>
            <Link
              href={`/${locale}`}
              className="flex-1 py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs sm:text-sm text-center transition-colors"
            >
              {locale === "bn" ? "কর্পোরেট হোমপেজ" : "Corporate Home"}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // If cart is empty and not confirmed, redirect notice
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FBF9F4] text-stone-900 py-16 px-4">
        <div className="max-w-md mx-auto bg-white rounded-3xl border border-stone-200 p-8 text-center space-y-4 shadow-sm">
          <ShoppingBag className="w-12 h-12 text-stone-400 mx-auto" />
          <h2 className="text-xl font-bold text-stone-900">
            {locale === "bn" ? "চেকআউটের জন্য কোনো পণ্য নেই" : "No items to checkout"}
          </h2>
          <p className="text-xs text-stone-500">
            {locale === "bn"
              ? "চেকআউট সম্পন্ন করার আগে অনুগ্রহ করে কার্টে পণ্য যোগ করুন।"
              : "Please add products to your bag before proceeding to checkout."}
          </p>
          <Link
            href={`/${locale}/store`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-xs"
          >
            <span>{locale === "bn" ? "কেনাকাটা করুন" : "Start Shopping"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-stone-900 pb-20">
      {/* Checkout Header */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              {locale === "bn" ? "নিরাপদ চেকআউট" : "Secure Checkout"}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-stone-900 mt-0.5">
              {locale === "bn" ? "ডেলিভারি ও পেমেন্ট তথ্য" : "Delivery & Payment"}
            </h1>
          </div>

          <Link
            href={`/${locale}/cart`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-emerald-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{locale === "bn" ? "কার্টে ফিরে যান" : "Return to Cart"}</span>
          </Link>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-8">
        <form onSubmit={handleSubmitOrder} noValidate>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Delivery Form & Payment Options */}
            <div className="lg:col-span-7 space-y-6">
              {/* Customer Information Card */}
              <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <h2 className="font-black text-stone-900 text-lg flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-800 text-white text-xs flex items-center justify-center font-bold">
                      ১
                    </span>
                    <span>{locale === "bn" ? "গ্রাহক ও ডেলিভারি ঠিকানা" : "Customer & Shipping Address"}</span>
                  </h2>
                  <span className="text-xs text-rose-600 font-semibold">* আবশ্যক</span>
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-stone-800">
                    {locale === "bn" ? "আপনার পুরো নাম *" : "Full Name *"}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder={locale === "bn" ? "যেমন: মোহাম্মদ আশরাফুল ইসলাম" : "e.g. Mohammad Ashraful"}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.name
                        ? "border-rose-400 bg-rose-50/30 focus:ring-rose-400/30 input-error"
                        : "border-stone-300 focus:border-emerald-700 focus:ring-emerald-700/20"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-600 font-semibold flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-stone-800">
                    {locale === "bn" ? "বাংলাদেশি মোবাইল নম্বর *" : "Bangladesh Mobile Number *"}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 text-xs font-bold">
                      +88
                    </span>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="017XXXXXXXX"
                      className={`w-full pl-12 pr-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.phone
                          ? "border-rose-400 bg-rose-50/30 focus:ring-rose-400/30 input-error"
                          : "border-stone-300 focus:border-emerald-700 focus:ring-emerald-700/20"
                      }`}
                    />
                  </div>
                  {errors.phone ? (
                    <p className="text-[11px] text-rose-600 font-semibold flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  ) : (
                    <p className="text-[10px] text-stone-400">
                      {locale === "bn"
                        ? "ডেলিভারি রাইডার এই নম্বরে যোগাযোগ করবেন।"
                        : "Our delivery personnel will contact this number upon arrival."}
                    </p>
                  )}
                </div>

                {/* District & Area */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-stone-800">
                      {locale === "bn" ? "জেলা *" : "District *"}
                    </label>
                    <select
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/20 bg-white"
                    >
                      {BANGLADESH_DISTRICTS.map((dist) => (
                        <option key={dist} value={dist}>
                          {dist}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-stone-800">
                      {locale === "bn" ? "এলাকা / থানা *" : "Area / Thana *"}
                    </label>
                    <input
                      type="text"
                      value={formData.area}
                      onChange={(e) => {
                        setFormData({ ...formData, area: e.target.value });
                        if (errors.area) setErrors({ ...errors, area: undefined });
                      }}
                      placeholder={locale === "bn" ? "যেমন: বনানী, গুলশান-২, ধানমন্ডি" : "e.g. Banani, Gulshan 2, Dhanmondi"}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.area
                          ? "border-rose-400 bg-rose-50/30 focus:ring-rose-400/30 input-error"
                          : "border-stone-300 focus:border-emerald-700 focus:ring-emerald-700/20"
                      }`}
                    />
                    {errors.area && (
                      <p className="text-[11px] text-rose-600 font-semibold flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.area}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Full Address */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-stone-800">
                    {locale === "bn" ? "পূর্ণ ডেলিভারি ঠিকানা (বাসা, রোড ও ব্লক) *" : "Full Street Address *"}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.address}
                    onChange={(e) => {
                      setFormData({ ...formData, address: e.target.value });
                      if (errors.address) setErrors({ ...errors, address: undefined });
                    }}
                    placeholder={
                      locale === "bn"
                        ? "বাড়ি নম্বর, রোড নম্বর, ফ্ল্যাট নম্বর, ব্লক বা ল্যান্ডমার্ক..."
                        : "House number, road number, flat/floor, landmark..."
                    }
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.address
                        ? "border-rose-400 bg-rose-50/30 focus:ring-rose-400/30 input-error"
                        : "border-stone-300 focus:border-emerald-700 focus:ring-emerald-700/20"
                    }`}
                  />
                  {errors.address && (
                    <p className="text-[11px] text-rose-600 font-semibold flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.address}</span>
                    </p>
                  )}
                </div>

                {/* Delivery Notes */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-stone-600">
                    {locale === "bn" ? "বিশেষ ডেলিভারি নির্দেশনা (ঐচ্ছিক)" : "Special Delivery Notes (Optional)"}
                  </label>
                  <input
                    type="text"
                    value={formData.notes || ""}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={
                      locale === "bn"
                        ? "যেমন: কলিংবেল না চেপে দরজায় টোকা দিন..."
                        : "e.g. Leave with security guard..."
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-700/20"
                  />
                </div>
              </div>

              {/* Payment Methods Card */}
              <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-4">
                <div className="pb-3 border-b border-stone-100">
                  <h2 className="font-black text-stone-900 text-lg flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-800 text-white text-xs flex items-center justify-center font-bold">
                      ২
                    </span>
                    <span>{locale === "bn" ? "পেমেন্ট পদ্ধতি নির্বাচন" : "Payment Method"}</span>
                  </h2>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {locale === "bn"
                      ? "ক্যাশ অন ডেলিভারি কার্যকর মোড। ডিজিটাল পেমেন্ট গেটওয়ে ইন্টিগ্রেশন পর্যায়ে রয়েছে।"
                      : "Cash on delivery is active. Digital gateways are integration placeholders."}
                  </p>
                </div>

                {/* Option 1: Cash on Delivery (ACTIVE DEMO) */}
                <label className="relative flex items-start gap-3.5 p-4 rounded-2xl border-2 border-emerald-600 bg-emerald-50/50 cursor-pointer shadow-xs">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={() => setFormData({ ...formData, paymentMethod: "cod" })}
                    className="mt-1 text-emerald-800 focus:ring-emerald-800 h-4 w-4"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-stone-900 text-sm flex items-center gap-2">
                        <Banknote className="w-4 h-4 text-emerald-700" />
                        <span>{locale === "bn" ? "ক্যাশ অন ডেলিভারি (Cash on Delivery)" : "Cash on Delivery"}</span>
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900 uppercase">
                        {locale === "bn" ? "সক্রিয় ডেমো" : "Active Demo"}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {locale === "bn"
                        ? "পণ্য হাতে পেয়ে গুণমান যাচাই করে মূল্য পরিশোধ করুন।"
                        : "Inspect and pay upon receipt at your door."}
                    </p>
                  </div>
                </label>

                {/* Option 2: bKash (PLACEHOLDER) */}
                <div className="relative flex items-start gap-3.5 p-4 rounded-2xl border border-stone-200 bg-stone-50/60 opacity-80 cursor-not-allowed">
                  <Smartphone className="w-4 h-4 text-pink-600 mt-1 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-stone-800 text-sm">
                        {locale === "bn" ? "বিকাশ (bKash Payment)" : "bKash Online Payment"}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-stone-200 text-stone-600 uppercase">
                        {locale === "bn" ? "ইন্টিগ্রেশন পেন্ডিং" : "Pending Gateway"}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 mt-1">
                      {locale === "bn"
                        ? "মার্চেন্ট একাউন্ট কনফিগারেশনের পর সরাসরি বিকাশ চেকআউট চালু হবে।"
                        : "Placeholder until official bKash merchant gateway is connected."}
                    </p>
                  </div>
                </div>

                {/* Option 3: Nagad (PLACEHOLDER) */}
                <div className="relative flex items-start gap-3.5 p-4 rounded-2xl border border-stone-200 bg-stone-50/60 opacity-80 cursor-not-allowed">
                  <Smartphone className="w-4 h-4 text-orange-600 mt-1 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-stone-800 text-sm">
                        {locale === "bn" ? "নগদ (Nagad Payment)" : "Nagad Payment"}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-stone-200 text-stone-600 uppercase">
                        {locale === "bn" ? "ইন্টিগ্রেশন পেন্ডিং" : "Pending Gateway"}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 mt-1">
                      {locale === "bn"
                        ? "মার্চেন্ট গেটওয়ে চালুকরণ প্রক্রিয়াধীন।"
                        : "Integration placeholder for Nagad checkout."}
                    </p>
                  </div>
                </div>

                {/* Option 4: Card Payment (PLACEHOLDER) */}
                <div className="relative flex items-start gap-3.5 p-4 rounded-2xl border border-stone-200 bg-stone-50/60 opacity-80 cursor-not-allowed">
                  <CreditCard className="w-4 h-4 text-sky-700 mt-1 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-stone-800 text-sm">
                        {locale === "bn" ? "ভিসা / মাস্টারকার্ড (Debit & Credit Cards)" : "Visa / Mastercard"}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-stone-200 text-stone-600 uppercase">
                        {locale === "bn" ? "ইন্টিগ্রেশন পেন্ডিং" : "Pending Gateway"}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 mt-1">
                      {locale === "bn"
                        ? "ব্যাংক পিজিএস সংযোগের পর সরাসরি কার্ড পেমেন্ট সক্রিয় হবে।"
                        : "Card processor connection placeholder."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Order Items Review & Submit */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white rounded-3xl border border-stone-200 p-5 sm:p-6 shadow-xs space-y-4 sticky top-28">
                <h3 className="font-bold text-stone-900 text-base pb-3 border-b border-stone-100 flex items-center justify-between">
                  <span>{locale === "bn" ? "অর্ডার সারাংশ" : "Order Summary"}</span>
                  <span className="text-xs text-stone-500 font-semibold">
                    {formatNumber(totalCount)} {locale === "bn" ? "টি পণ্য" : "items"}
                  </span>
                </h3>

                {/* Items Mini List */}
                <div className="max-h-60 overflow-y-auto space-y-2.5 pr-1 divide-y divide-stone-100">
                  {items.map((item) => (
                    <div key={item.id} className="pt-2 flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                          <Image src={item.image} alt={item.nameEn} fill className="object-cover" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-bold text-stone-900 truncate">
                            {locale === "bn" ? item.nameBn : item.nameEn}
                          </h4>
                          <span className="text-[10px] text-stone-500">
                            {item.quantity} × {item.packSize.weight}
                          </span>
                        </div>
                      </div>
                      <span className="font-bold text-stone-900 shrink-0">
                        ৳{formatNumber(item.unitPrice * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="pt-3 border-t border-stone-200 space-y-2 text-xs sm:text-sm text-stone-600">
                  <div className="flex justify-between">
                    <span>{locale === "bn" ? "উপমোট (Subtotal):" : "Subtotal:"}</span>
                    <span className="font-semibold text-stone-900">৳{formatNumber(subtotal)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>{locale === "bn" ? "ডেলিভারি চার্জ:" : "Delivery Fee:"}</span>
                    <span className="font-semibold">
                      {deliveryFee === 0 ? (
                        <span className="text-emerald-700 font-bold">{locale === "bn" ? "ফ্রি" : "FREE"}</span>
                      ) : (
                        `৳${formatNumber(deliveryFee)}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-base sm:text-lg font-black text-stone-900 pt-3 border-t border-stone-200">
                    <span>{locale === "bn" ? "সর্বমোট প্রদেয়:" : "Total Payable:"}</span>
                    <span className="text-emerald-800">৳{formatNumber(total)}</span>
                  </div>
                </div>

                {/* Delivery Notice */}
                <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 text-[11px] text-emerald-900 flex items-start gap-2">
                  <Truck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>
                    {locale === "bn" ? deliveryConfig.coverageNoteBn : deliveryConfig.coverageNoteEn}
                  </span>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        {locale === "bn" ? "অর্ডার সাবমিট হচ্ছে..." : "Submitting..."}
                      </span>
                    ) : (
                      <>
                        <ShieldCheck className="w-5 h-5 text-emerald-200" />
                        <span>
                          {locale === "bn"
                            ? `ডেমো অর্ডার নিশ্চিত করুন (৳${formatNumber(total)})`
                            : `Confirm Demo Order (৳${formatNumber(total)})`}
                        </span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-[10px] text-center text-stone-400 font-medium leading-relaxed">
                  {locale === "bn"
                    ? "🛡️ প্রদর্শনীর উদ্দেশ্যে তৈরি ডেমো চেকআউট। কোনো আসল আর্থিক ডেবিট বা চার্জ হবে না।"
                    : "🛡️ Demonstration checkout simulation. No live financial transaction occurs."}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
