"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  brands,
  categories,
  getAllProducts,
  getFeaturedProducts,
  getSeasonalProducts,
} from "@/lib/store/store-data";
import { StoreBrand, Product } from "@/lib/store/types";
import { ProductCard } from "@/components/store/ProductCard";
import {
  Sparkles,
  ArrowRight,
  Leaf,
  Wheat,
  Milk,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Truck,
  Layers,
} from "lucide-react";

export default function StoreFrontPage() {
  const params = useParams();
  const locale = (params?.locale as "bn" | "en") || "bn";

  const [activeBrandTab, setActiveBrandTab] = useState<StoreBrand | "all">("all");
  const [selectedCategory, setSelectedCategory] = useState<string | "all">("all");

  const allProducts = useMemo(() => getAllProducts(), []);
  const featuredProducts = useMemo(() => getFeaturedProducts(), []);
  const seasonalProducts = useMemo(() => getSeasonalProducts(), []);

  // Filter products based on active tab and category
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchBrand = activeBrandTab === "all" || product.brand === activeBrandTab;
      const matchCategory = selectedCategory === "all" || product.categoryId === selectedCategory;
      return matchBrand && matchCategory;
    });
  }, [allProducts, activeBrandTab, selectedCategory]);

  const formatNumber = (num: number) => {
    if (locale === "bn") {
      const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
      return num.toString().replace(/\d/g, (d) => bnDigits[parseInt(d, 10)]);
    }
    return num.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-stone-900 pb-20">
      {/* 1. Large Editorial Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-stone-900 text-white pt-12 pb-16 sm:pt-16 sm:pb-24">
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#A5D6A7_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-emerald-200 text-xs font-semibold backdrop-blur-xs shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>
                  {locale === "bn"
                    ? "আবাদ লিমিটেড অনুমোদিত ই-কমার্স"
                    : "Official Abad Limited Direct Store"}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
                {locale === "bn" ? (
                  <>
                    সতেজতা থেকে নিত্যপ্রয়োজন—<br />
                    <span className="text-emerald-300">সব এক ঠিকানায়।</span>
                  </>
                ) : (
                  <>
                    From Farm Freshness to Daily Essentials—<br />
                    <span className="text-emerald-300">All Under One Roof.</span>
                  </>
                )}
              </h1>

              <p className="text-stone-300 text-sm sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {locale === "bn"
                  ? "মাঠের তাজা শাকসবজি (সতেজা), খাঁটি চাল-ডাল ও তেল (রসদ), এবং বিশুদ্ধ দুগ্ধপণ্য (সুধা)—সরাসরি কৃষক ও খামারিদের থেকে আপনার পরিবারের দোরগোড়ায়।"
                  : "Harvested vegetables (Soteja), staple pantry grains (Rosod), and wholesome dairy (Sudha)—directly bridging trusted rural growers with conscious urban homes."}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href="#featured-products"
                  className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-sm sm:text-base transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2"
                >
                  <span>{locale === "bn" ? "কেনাকাটা শুরু করুন" : "Shop Now"}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#brand-stories"
                  className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-xs transition-colors"
                >
                  {locale === "bn" ? "ব্র্যান্ড পরিচিতি" : "Explore Brands"}
                </a>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-emerald-800/60 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span className="text-[11px] sm:text-xs text-stone-300 font-medium leading-tight">
                    {locale === "bn" ? "দ্রুত ডেলিভারি" : "Fast Delivery"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" />
                  <span className="text-[11px] sm:text-xs text-stone-300 font-medium leading-tight">
                    {locale === "bn" ? "ক্যাশ অন ডেলিভারি" : "Cash on Delivery"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0" />
                  <span className="text-[11px] sm:text-xs text-stone-300 font-medium leading-tight">
                    {locale === "bn" ? "শতভাগ খাঁটি" : "Verified Quality"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Mosaic */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80"
                    alt="Abad Fresh Produce"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-600 px-2 py-0.5 rounded">
                      {locale === "bn" ? "তাজা সংগ্রহ" : "Direct Harvest"}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold mt-1">
                      {locale === "bn" ? "মাঠের সেরা পুষ্টি আপনার টেবিলে" : "Farm-fresh goodness directly to your dining"}
                    </h3>
                  </div>
                </div>

                {/* Floating mini badge 1 */}
                <div className="absolute -top-4 -left-4 bg-white text-stone-900 rounded-2xl p-3 shadow-xl border border-stone-100 hidden sm:flex items-center gap-2.5 animate-bounce-subtle">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    🌿
                  </div>
                  <div>
                    <div className="text-xs font-bold">{locale === "bn" ? "সতেজা শাকসবজি" : "Soteja Produce"}</div>
                    <div className="text-[10px] text-stone-500">{locale === "bn" ? "কোনো রাসায়নিক প্রলেপ নেই" : "No harmful chemicals"}</div>
                  </div>
                </div>

                {/* Floating mini badge 2 */}
                <div className="absolute -bottom-4 -right-4 bg-white text-stone-900 rounded-2xl p-3 shadow-xl border border-stone-100 hidden sm:flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                    🌾
                  </div>
                  <div>
                    <div className="text-xs font-bold">{locale === "bn" ? "রসদ চাল ও তেল" : "Rosod Essentials"}</div>
                    <div className="text-[10px] text-stone-500">{locale === "bn" ? "খাঁটি দেশি ঘানি" : "Cold-pressed & authentic"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Three Prominent Sister Brand Cards */}
      <section id="brand-stories" className="max-w-[1240px] mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Soteja Card */}
          <Link
            href={`/${locale}/soteja`}
            className="group relative bg-white rounded-3xl p-6 border-2 border-emerald-100 hover:border-emerald-500 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-110" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shadow-xs">
                  <Leaf className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  {locale === "bn" ? "শাকসবজি ও ফল" : "Fresh Produce"}
                </span>
              </div>

              <h2 className="text-2xl font-black text-stone-900 group-hover:text-emerald-700 transition-colors">
                {locale === "bn" ? brands.soteja.nameBn : brands.soteja.nameEn}
              </h2>
              <p className="text-xs text-emerald-700 font-semibold mt-1">
                {locale === "bn" ? brands.soteja.taglineBn : brands.soteja.taglineEn}
              </p>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed line-clamp-2">
                {locale === "bn" ? brands.soteja.descriptionBn : brands.soteja.descriptionEn}
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-emerald-50 flex items-center justify-between text-xs font-bold text-emerald-800 group-hover:text-emerald-600">
              <span>{locale === "bn" ? "সতেজা স্টোর দেখুন" : "Explore Soteja Store"}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Rosod Card */}
          <Link
            href={`/${locale}/rosod`}
            className="group relative bg-white rounded-3xl p-6 border-2 border-amber-100 hover:border-amber-600 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-110" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center shadow-xs">
                  <Wheat className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-amber-100 text-amber-900">
                  {locale === "bn" ? "প্যান্ট্রি ও চাল-ডাল" : "Pantry Staples"}
                </span>
              </div>

              <h2 className="text-2xl font-black text-stone-900 group-hover:text-amber-800 transition-colors">
                {locale === "bn" ? brands.rosod.nameBn : brands.rosod.nameEn}
              </h2>
              <p className="text-xs text-amber-800 font-semibold mt-1">
                {locale === "bn" ? brands.rosod.taglineBn : brands.rosod.taglineEn}
              </p>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed line-clamp-2">
                {locale === "bn" ? brands.rosod.descriptionBn : brands.rosod.descriptionEn}
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-amber-50 flex items-center justify-between text-xs font-bold text-amber-900 group-hover:text-amber-700">
              <span>{locale === "bn" ? "রসদ স্টোর দেখুন" : "Explore Rosod Store"}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Sudha Card */}
          <Link
            href={`/${locale}/sudha`}
            className="group relative bg-white rounded-3xl p-6 border-2 border-sky-100 hover:border-sky-600 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-110" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-900 flex items-center justify-center shadow-xs">
                  <Milk className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-sky-100 text-sky-900">
                  {locale === "bn" ? "দুধ ও দুগ্ধপণ্য" : "Pure Dairy"}
                </span>
              </div>

              <h2 className="text-2xl font-black text-stone-900 group-hover:text-sky-800 transition-colors">
                {locale === "bn" ? brands.sudha.nameBn : brands.sudha.nameEn}
              </h2>
              <p className="text-xs text-sky-800 font-semibold mt-1">
                {locale === "bn" ? brands.sudha.taglineBn : brands.sudha.taglineEn}
              </p>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed line-clamp-2">
                {locale === "bn" ? brands.sudha.descriptionBn : brands.sudha.descriptionEn}
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-sky-50 flex items-center justify-between text-xs font-bold text-sky-900 group-hover:text-sky-700">
              <span>{locale === "bn" ? "সুধা স্টোর দেখুন" : "Explore Sudha Store"}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* 3. Shop by Category Section */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              {locale === "bn" ? "পণ্য বিভাগ" : "Categories"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-0.5">
              {locale === "bn" ? "বিভাগ অনুযায়ী কেনাকাটা করুন" : "Shop by Category"}
            </h2>
          </div>

          {selectedCategory !== "all" && (
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className="text-xs font-semibold text-emerald-800 hover:underline"
            >
              {locale === "bn" ? "সব বিভাগ দেখুন ✕" : "Clear filter ✕"}
            </button>
          )}
        </div>

        {/* Category horizontal scroll / grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(isSelected ? "all" : cat.id)}
                className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 group ${
                  isSelected
                    ? "bg-emerald-900 text-white border-emerald-950 shadow-md"
                    : "bg-white text-stone-800 border-stone-200/90 hover:border-emerald-600 hover:shadow-xs"
                }`}
              >
                <span className="text-2xl transform group-hover:scale-110 transition-transform">
                  {cat.icon}
                </span>
                <span className="text-xs font-bold line-clamp-1 leading-snug">
                  {locale === "bn" ? cat.nameBn : cat.nameEn}
                </span>
                <span
                  className={`text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.2 rounded ${
                    cat.brand === "soteja"
                      ? isSelected ? "bg-emerald-800 text-emerald-200" : "bg-emerald-50 text-emerald-800"
                      : cat.brand === "rosod"
                      ? isSelected ? "bg-amber-800 text-amber-200" : "bg-amber-50 text-amber-900"
                      : isSelected ? "bg-sky-800 text-sky-200" : "bg-sky-50 text-sky-900"
                  }`}
                >
                  {cat.brand}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. Featured Products with Brand Tabs */}
      <section id="featured-products" className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              {locale === "bn" ? "তাজা সংগ্রহ" : "Handpicked"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-0.5">
              {locale === "bn" ? "আবাদের বিশেষ পণ্যসমূহ" : "Featured Products"}
            </h2>
          </div>

          {/* Brand Tabs */}
          <div className="flex items-center gap-1.5 bg-stone-200/80 p-1 rounded-2xl overflow-x-auto max-w-full">
            <button
              type="button"
              onClick={() => setActiveBrandTab("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeBrandTab === "all"
                  ? "bg-white text-stone-900 shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {locale === "bn" ? "সব ব্র্যান্ড" : "All Brands"}
            </button>
            <button
              type="button"
              onClick={() => setActiveBrandTab("soteja")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeBrandTab === "soteja"
                  ? "bg-emerald-700 text-white shadow-xs"
                  : "text-stone-600 hover:text-emerald-800"
              }`}
            >
              <Leaf className="w-3 h-3" />
              <span>{locale === "bn" ? "সতেজা" : "Soteja"}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveBrandTab("rosod")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeBrandTab === "rosod"
                  ? "bg-amber-700 text-white shadow-xs"
                  : "text-stone-600 hover:text-amber-900"
              }`}
            >
              <Wheat className="w-3 h-3" />
              <span>{locale === "bn" ? "রসদ" : "Rosod"}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveBrandTab("sudha")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeBrandTab === "sudha"
                  ? "bg-sky-700 text-white shadow-xs"
                  : "text-stone-600 hover:text-sky-900"
              }`}
            >
              <Milk className="w-3 h-3" />
              <span>{locale === "bn" ? "সুধা" : "Sudha"}</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-stone-200">
            <Layers className="w-12 h-12 text-stone-400 mx-auto mb-3" />
            <h3 className="font-bold text-stone-800 text-base">
              {locale === "bn" ? "কোনো পণ্য পাওয়া যায়নি" : "No products found"}
            </h3>
            <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
              {locale === "bn"
                ? "নির্বাচিত ফিল্টারে এই মুহূর্তে কোনো পণ্য নেই। ফিল্টার পরিবর্তন করুন।"
                : "No items match your active filters. Try clearing category selection."}
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveBrandTab("all");
                setSelectedCategory("all");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-semibold"
            >
              {locale === "bn" ? "সব পণ্য দেখুন" : "Reset Filters"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} locale={locale} />
            ))}
          </div>
        )}
      </section>

      {/* 5. Seasonal Collection Banner */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-900 via-stone-900 to-amber-950 text-white p-6 sm:p-10 shadow-xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=800&q=80"
              alt="Harvest season"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 max-w-xl space-y-3">
            <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400 text-stone-950 inline-block">
              {locale === "bn" ? "মৌসুমী সংগ্রহ • সীমিত সময়" : "Seasonal Harvest • Fresh In"}
            </span>

            <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              {locale === "bn"
                ? "মাঠের খাঁটি মধু, নতুন ঘানির সরিষার তেল ও মৌসুমি শাকসবজি"
                : "Sundarban Wild Honey, Fresh Cold-Pressed Oil & Winter Greens"}
            </h3>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {locale === "bn"
                ? "মৌসুমী ফসলের প্রাকৃতিক স্বাদ ও গুণমান বজায় রাখতে মাঠ থেকে সংগ্রহের পরপরই প্যাকেটজাত করে পৌঁছে দেওয়া হচ্ছে আপনার টেবিলে।"
                : "Experience indigenous seasonal harvests at peak nutrition. Directly delivered with traceable harvest dates."}
            </p>

            <div className="pt-2">
              <Link
                href={`/${locale}/soteja`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-stone-900 hover:bg-stone-100 font-bold text-xs sm:text-sm transition-all shadow-md"
              >
                <span>{locale === "bn" ? "মৌসুমী সংগ্রহ দেখুন" : "Shop Seasonal Harvest"}</span>
                <ArrowRight className="w-4 h-4 text-emerald-800" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Short Abad Story Section (Farmer-to-Consumer Vision) */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-16">
        <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                {locale === "bn" ? "আমাদের দর্শন ও প্রতিশ্রুতি" : "Our Vision & Promise"}
              </span>

              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 leading-snug">
                {locale === "bn"
                  ? "মধ্যস্বত্বভোগীহীন আধুনিক কৃষি সরবরাহ ব্যবস্থার মাধ্যমে কৃষক ও ভোক্তার সেতুবন্ধন"
                  : "Bridging Farmers Directly With Consumers Through Modern Agri-Supply Chains"}
              </h2>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {locale === "bn"
                  ? "আবাদ লিমিটেড বিশ্বাস করে, কৃষি পণ্যের টেকসই ভবিষ্যৎ নির্ভর করে কৃষকের ন্যায্য পারিশ্রমিক ও ভোক্তার নির্ভেজাল পুষ্টি নিশ্চয়তার ওপর। আমাদের সতেজা, রসদ ও সুধা ব্র্যান্ডের মাধ্যমে আমরা গ্রাম ও শহরের মাঝে এক প্রত্যক্ষ, স্বচ্ছ খাদ্য-শৃঙ্খল গড়ে তুলছি।"
                  : "Abad Limited envisions a sustainable agricultural ecosystem where rural producers receive fair compensation and urban families receive genuine, farm-fresh nutrition without opaque supply middlemen."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                  <h4 className="font-bold text-emerald-950 text-xs sm:text-sm">
                    {locale === "bn" ? "কৃষকের ন্যায্য মূল্য" : "Fair Farmer Remuneration"}
                  </h4>
                  <p className="text-[11px] text-emerald-800 mt-1">
                    {locale === "bn"
                      ? "ফসল তোলার সাথে সাথে সরাসরি ক্রয় প্রক্রিয়ায় কৃষকের লাভ নিশ্চিতকরণ।"
                      : "Direct procurement ensuring stable farmer income."}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-100">
                  <h4 className="font-bold text-amber-950 text-xs sm:text-sm">
                    {locale === "bn" ? "ভোক্তার নিরাপদ খাদ্য" : "Safe Consumer Food"}
                  </h4>
                  <p className="text-[11px] text-amber-800 mt-1">
                    {locale === "bn"
                      ? "সতেজতা ও বিশুদ্ধতা বজায় রেখে দ্রুত ও পরিচ্ছন্ন ডেলিভারি।"
                      : "Unadulterated pantry and dairy delivered fresh."}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/${locale}/about`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-900 hover:underline"
                >
                  <span>{locale === "bn" ? "আবাদ লিমিটেড সম্পর্কে আরও জানুন" : "Learn more about Abad Limited"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg border border-stone-200">
                <Image
                  src="https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=800&q=80"
                  alt="Farmer harvesting crops"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
