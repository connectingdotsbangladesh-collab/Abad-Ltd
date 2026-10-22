"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Truck, RefreshCw, Heart } from "lucide-react";
import { deliveryConfig } from "@/lib/store/store-data";

interface StoreFooterProps {
  locale: "bn" | "en";
}

export function StoreFooter({ locale }: StoreFooterProps) {
  const formatNumber = (num: number) => {
    if (locale === "bn") {
      const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
      return num.toString().replace(/\d/g, (d) => bnDigits[parseInt(d, 10)]);
    }
    return num.toLocaleString();
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-8 border-t border-stone-800">
      {/* Top Value Propositions */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pb-10 border-b border-stone-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-stone-800/40 border border-stone-800">
            <div className="p-3 rounded-xl bg-emerald-900/60 text-emerald-400 shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">
                {locale === "bn" ? "নির্ধারিত শিডিউল ডেলিভারি" : "Scheduled Fresh Delivery"}
              </h4>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                {locale === "bn"
                  ? `৳${formatNumber(deliveryConfig.freeDeliveryThreshold)} এর বেশি অর্ডারে ফ্রি ডেলিভারি। ঢাকা মহানগরীতে নিয়মিত ডেলিভারি চালু রয়েছে।`
                  : `Free delivery over ৳${formatNumber(deliveryConfig.freeDeliveryThreshold)}. Serving Dhaka Metropolitan areas.`}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-stone-800/40 border border-stone-800">
            <div className="p-3 rounded-xl bg-amber-900/60 text-amber-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">
                {locale === "bn" ? "কৃষক ও ভোক্তার সরাসরি সংযোগ" : "Farmer-to-Consumer Model"}
              </h4>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                {locale === "bn"
                  ? "মধ্যস্বত্বভোগী হ্রাস করে কৃষককে ন্যায্য মূল্য এবং ভোক্তাকে সতেজ পুষ্টি পৌঁছে দেওয়ার আবাদ উদ্যোগ।"
                  : "Connecting verified rural growers directly with city tables through modern supply chain."}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-stone-800/40 border border-stone-800">
            <div className="p-3 rounded-xl bg-sky-900/60 text-sky-400 shrink-0">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">
                {locale === "bn" ? "ক্যাশ অন ডেলিভারি সুবিধা" : "Cash on Delivery Ready"}
              </h4>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                {locale === "bn"
                  ? "পণ্য হাতে পেয়ে মূল্য পরিশোধের সুবিধা। ডেমো চেকআউটে অর্ডার যাচাই করে দেখুন।"
                  : "Pay upon receiving your package. Order simulation available in demo mode."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/10 border border-white/20 p-0.5">
              <Image
                src="/brand/abad-logo.jpg"
                alt="Abad Limited"
                width={40}
                height={40}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div>
              <span className="text-lg font-black text-white tracking-tight">
                {locale === "bn" ? "আবাদ লিমিটেড" : "Abad Limited"}
              </span>
              <p className="text-[10px] text-emerald-400 uppercase tracking-widest font-bold">
                STOREFRONT
              </p>
            </div>
          </div>

          <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
            {locale === "bn"
              ? "সতেজা, রসদ ও সুধা—আবাদ লিমিটেডের তিনটি অঙ্গ প্রতিষ্ঠান। তাজা শাকসবজি, প্রতিদিনের মুদি ও খাঁটি দুগ্ধপণ্য এক ঠিকানায়।"
              : "Soteja, Rosod, and Sudha—three sister brands by Abad Limited uniting farm-fresh produce, pantry essentials, and pure dairy under one roof."}
          </p>

          <div className="pt-1 flex flex-col gap-2 text-xs text-stone-400">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+৮৮০ ১৭১১-০৫৮৮৯৯ / +880 1711-058899</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>store@abad.ltd</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                {locale === "bn" ? "বনানী, ঢাকা-১২১৩, বাংলাদেশ" : "Banani, Dhaka-1213, Bangladesh"}
              </span>
            </div>
          </div>
        </div>

        {/* Sister Brands */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
            {locale === "bn" ? "আমাদের ৩টি ব্র্যান্ড" : "Sister Brands"}
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link
                href={`/${locale}/soteja`}
                className="text-stone-400 hover:text-emerald-400 transition-colors flex items-center justify-between"
              >
                <span>{locale === "bn" ? "সতেজা (সবজি ও ফল)" : "Soteja (Produce)"}</span>
                <span className="text-[10px] text-emerald-500 font-semibold">Fresh</span>
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/rosod`}
                className="text-stone-400 hover:text-amber-400 transition-colors flex items-center justify-between"
              >
                <span>{locale === "bn" ? "রসদ (চাল, ডাল ও তেল)" : "Rosod (Pantry)"}</span>
                <span className="text-[10px] text-amber-500 font-semibold">Pantry</span>
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/sudha`}
                className="text-stone-400 hover:text-sky-400 transition-colors flex items-center justify-between"
              >
                <span>{locale === "bn" ? "সুধা (দুধ ও দুগ্ধপণ্য)" : "Sudha (Dairy)"}</span>
                <span className="text-[10px] text-sky-500 font-semibold">Dairy</span>
              </Link>
            </li>
            <li className="pt-1">
              <Link
                href={`/${locale}/store`}
                className="text-emerald-400 hover:underline font-semibold"
              >
                {locale === "bn" ? "সব ব্র্যান্ডের পণ্য →" : "All Products →"}
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Support & Delivery */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
            {locale === "bn" ? "গ্রাহক সেবা ও ডেলিভারি" : "Customer Support"}
          </h4>
          <ul className="space-y-2 text-xs text-stone-400">
            <li className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-stone-500" />
              <span>{locale === "bn" ? "সকাল ৮:০০ - রাত ১০:০০" : "8:00 AM - 10:00 PM"}</span>
            </li>
            <li>
              {locale === "bn"
                ? "ডেলিভারি চার্জ: ৳৬০ (৳১৫০০+ অর্ডারে ফ্রি)"
                : "Delivery charge: ৳60 (FREE over ৳1500)"}
            </li>
            <li>
              <Link href={`/${locale}/cart`} className="hover:text-white transition-colors">
                {locale === "bn" ? "শপিং কার্ট" : "Shopping Cart"}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/checkout`} className="hover:text-white transition-colors">
                {locale === "bn" ? "অর্ডার চেকআউট" : "Order Checkout"}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/faq`} className="hover:text-white transition-colors">
                {locale === "bn" ? "সাধারণ জিজ্ঞাসা (FAQ)" : "FAQ"}
              </Link>
            </li>
          </ul>
        </div>

        {/* Abad Corporate & Policies */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
            {locale === "bn" ? "কর্পোরেট ও নীতি" : "Corporate & Legal"}
          </h4>
          <ul className="space-y-2 text-xs text-stone-400">
            <li>
              <Link href={`/${locale}`} className="hover:text-white transition-colors">
                {locale === "bn" ? "আবাদ কর্পোরেট হোম" : "Abad Corporate Home"}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/about`} className="hover:text-white transition-colors">
                {locale === "bn" ? "আমাদের দর্শন ও পরিচালনা" : "About & Leadership"}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors">
                {locale === "bn" ? "গোপনীয়তা নীতি" : "Privacy Policy"}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/terms`} className="hover:text-white transition-colors">
                {locale === "bn" ? "ব্যবহারের শর্তাবলী" : "Terms & Conditions"}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/contact`} className="hover:text-white transition-colors">
                {locale === "bn" ? "যোগাযোগ" : "Contact Us"}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal & Demo Disclaimer */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-6 border-t border-stone-800 text-[11px] text-stone-500 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()}{" "}
          {locale === "bn"
            ? "আবাদ লিমিটেড। সর্বস্বত্ব সংরক্ষিত।"
            : "Abad Limited. All rights reserved."}
        </p>

        <p className="text-stone-400 text-center md:text-right">
          {locale === "bn"
            ? "⚠️ দ্রষ্টব্য: এটি প্রদর্শনীর উদ্দেশ্যে প্রস্তুতকৃত ডেমো ই-কমার্স স্টোরফ্রন্ট।"
            : "⚠️ Note: This is an illustrative demo e-commerce storefront for presentation."}
        </p>
      </div>
    </footer>
  );
}
