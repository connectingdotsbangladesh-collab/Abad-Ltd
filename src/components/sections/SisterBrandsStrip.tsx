"use client";

import React from "react";
import Link from "next/link";
import { Locale } from "@/lib/types";
import { ShoppingCart, ArrowRight, Leaf, Wheat, Milk, Sparkles } from "lucide-react";

interface SisterBrandsStripProps {
  locale: Locale;
}

export function SisterBrandsStrip({ locale }: SisterBrandsStripProps) {
  return (
    <section className="py-12 bg-gradient-to-b from-[#FAF7F2] to-white border-y border-stone-200/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>{locale === "bn" ? "নতুন সেবা সংযোজন" : "Direct Consumer Store"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
              {locale === "bn"
                ? "আবাদ অনলাইন স্টোর: ৩টি সিস্টার ব্র্যান্ড"
                : "Abad Online Store: Three Sister Brands"}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
              {locale === "bn"
                ? "কৃষকের মাঠ থেকে সরাসরি আপনার রান্নাঘরে—তাজা শাকসবজি, নিত্যদিনের খাঁটি মুদি ও বিশুদ্ধ দুগ্ধপণ্য।"
                : "From farm to table—discover fresh produce, everyday pantry staples, and pure dairy."}
            </p>
          </div>

          <Link
            href={`/${locale}/store`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>{locale === "bn" ? "সম্পূর্ণ স্টোর দেখুন" : "Visit Full Store"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Brand Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Soteja */}
          <Link
            href={`/${locale}/soteja`}
            className="group p-5 sm:p-6 rounded-2xl bg-white border-2 border-emerald-100 hover:border-emerald-600 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Leaf className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-800">
                  {locale === "bn" ? "তাজা শাকসবজি" : "Produce"}
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                {locale === "bn" ? "সতেজা (Soteja)" : "Soteja Produce"}
              </h3>
              <p className="text-xs text-stone-500 mt-1.5 leading-relaxed">
                {locale === "bn"
                  ? "মাঠের তাজা শাকসবজি, বিষমুক্ত সালাদ ও মৌসুমী রসালো ফল।"
                  : "Field-fresh vegetables, seasonal fruits, and greens without chemicals."}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-50 flex items-center justify-between text-xs font-bold text-emerald-800">
              <span>{locale === "bn" ? "সতেজা স্টোরফ্রন্ট" : "Shop Soteja"}</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Rosod */}
          <Link
            href={`/${locale}/rosod`}
            className="group p-5 sm:p-6 rounded-2xl bg-white border-2 border-amber-100 hover:border-amber-600 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
                  <Wheat className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-900">
                  {locale === "bn" ? "মুদি ও চাল-ডাল" : "Pantry"}
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                {locale === "bn" ? "রসদ (Rosod)" : "Rosod Pantry"}
              </h3>
              <p className="text-xs text-stone-500 mt-1.5 leading-relaxed">
                {locale === "bn"
                  ? "দিনাজপুরের সুগন্ধি চাল, মসুর ডাল, ঘানির সরিষার তেল ও খাঁটি মসলা।"
                  : "Indigenous aromatic rice, whole lentils, cold-pressed oil, and spices."}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-50 flex items-center justify-between text-xs font-bold text-amber-900">
              <span>{locale === "bn" ? "রসদ স্টোরফ্রন্ট" : "Shop Rosod"}</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Sudha */}
          <Link
            href={`/${locale}/sudha`}
            className="group p-5 sm:p-6 rounded-2xl bg-white border-2 border-sky-100 hover:border-sky-600 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-10 h-10 rounded-xl bg-sky-100 text-sky-900 flex items-center justify-center">
                  <Milk className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-50 text-sky-900">
                  {locale === "bn" ? "দুধ ও দুগ্ধপণ্য" : "Dairy"}
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 group-hover:text-sky-800 transition-colors">
                {locale === "bn" ? "সুধা (Sudha)" : "Sudha Dairy"}
              </h3>
              <p className="text-xs text-stone-500 mt-1.5 leading-relaxed">
                {locale === "bn"
                  ? "খাঁটি তরল দুধ, কাঠের ঘানির গাওয়া ঘি, টাটকা ছানা ও মিষ্টি দই।"
                  : "Pure grass-fed cow milk, traditional bilona ghee, and fresh paneer."}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-sky-50 flex items-center justify-between text-xs font-bold text-sky-900">
              <span>{locale === "bn" ? "সুধা স্টোরফ্রন্ট" : "Shop Sudha"}</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
