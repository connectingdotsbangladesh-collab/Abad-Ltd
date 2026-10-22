"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { StoreBrand, Product } from "@/lib/store/types";
import { brands, categories, getProductsByBrand } from "@/lib/store/store-data";
import { ProductCard } from "@/components/store/ProductCard";
import {
  Filter,
  ArrowUpDown,
  RotateCcw,
  CheckCircle,
  Leaf,
  Wheat,
  Milk,
  Layers,
  ChevronDown,
  SlidersHorizontal,
  X,
} from "lucide-react";

interface BrandStoreViewProps {
  brandId: StoreBrand;
  locale: "bn" | "en";
}

type SortOption = "default" | "price-asc" | "price-desc" | "name-asc";

export function BrandStoreView({ brandId, locale }: BrandStoreViewProps) {
  const brand = brands[brandId];
  const brandProducts = useMemo(() => getProductsByBrand(brandId), [brandId]);
  const brandCategories = useMemo(
    () => categories.filter((c) => c.brand === brandId),
    [brandId]
  );

  // Filters state
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    let result = brandProducts.filter((p) => {
      // Category filter
      if (selectedCategory !== "all" && p.categoryId !== selectedCategory) {
        return false;
      }
      // Availability filter
      if (inStockOnly && !p.inStock) {
        return false;
      }
      // Price filter
      if (p.price > maxPrice) {
        return false;
      }
      return true;
    });

    // Sorting
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name-asc") {
      const nameKey = locale === "bn" ? "nameBn" : "nameEn";
      result.sort((a, b) => a[nameKey].localeCompare(b[nameKey]));
    }

    return result;
  }, [brandProducts, selectedCategory, inStockOnly, maxPrice, sortBy, locale]);

  const hasActiveFilters =
    selectedCategory !== "all" || inStockOnly || maxPrice < 2000;

  const resetFilters = () => {
    setSelectedCategory("all");
    setInStockOnly(false);
    setMaxPrice(2000);
    setSortBy("default");
  };

  const formatNumber = (num: number) => {
    if (locale === "bn") {
      const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
      return num.toString().replace(/\d/g, (d) => bnDigits[parseInt(d, 10)]);
    }
    return num.toLocaleString();
  };

  // Distinct brand styling configuration
  const brandThemes = {
    soteja: {
      gradient: "from-emerald-950 via-emerald-900 to-stone-900",
      accentBg: "bg-emerald-600",
      badgeText: "text-emerald-300",
      pillActive: "bg-emerald-700 text-white border-emerald-800",
      icon: <Leaf className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400" />,
    },
    rosod: {
      gradient: "from-amber-950 via-stone-900 to-amber-900",
      accentBg: "bg-amber-700",
      badgeText: "text-amber-300",
      pillActive: "bg-amber-700 text-white border-amber-800",
      icon: <Wheat className="w-4 h-4 sm:w-6 sm:h-6 text-amber-400" />,
    },
    sudha: {
      gradient: "from-sky-950 via-stone-900 to-sky-900",
      accentBg: "bg-sky-700",
      badgeText: "text-sky-300",
      pillActive: "bg-sky-700 text-white border-sky-800",
      icon: <Milk className="w-4 h-4 sm:w-6 sm:h-6 text-sky-400" />,
    },
  }[brandId];

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-stone-900 pb-20">
      {/* Brand Hero */}
      <section
        className={`relative overflow-hidden bg-gradient-to-r ${brandThemes.gradient} text-white pt-6 pb-10 sm:pt-14 sm:pb-20 shadow-md`}
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image
            src={brand.heroImage}
            alt={brand.nameEn}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-[1240px] mx-auto px-3.5 sm:px-6 relative z-10">
          <div className="max-w-2xl space-y-2 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-[11px] sm:text-xs font-bold tracking-wide">
              {brandThemes.icon}
              <span className={brandThemes.badgeText}>
                {locale === "bn" ? "আবাদ সিস্টার ব্র্যান্ড" : "Abad Sister Brand"}
              </span>
            </div>

            <h1 className="text-2xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {locale === "bn" ? brand.nameBn : brand.nameEn}
            </h1>

            <p className="text-xs sm:text-lg text-stone-200 font-medium">
              {locale === "bn" ? brand.taglineBn : brand.taglineEn}
            </p>

            <p className="text-[11px] sm:text-sm text-stone-300/90 leading-relaxed pt-0.5 line-clamp-3 sm:line-clamp-none">
              {locale === "bn" ? brand.descriptionBn : brand.descriptionEn}
            </p>

            {/* Breadcrumb back */}
            <div className="pt-2 sm:pt-3">
              <Link
                href={`/${locale}/store`}
                className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-white/80 hover:text-white underline font-semibold min-h-[36px]"
              >
                ← {locale === "bn" ? "সকল ব্র্যান্ডের স্টোরফ্রন্ট" : "All Brands Store"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area: Category Nav + Filters + Products */}
      <div className="max-w-[1240px] mx-auto px-3.5 sm:px-6 pt-5 sm:pt-8">
        {/* Category Navigation Pills */}
        <div className="mb-4 sm:mb-6 overflow-x-auto scrollbar-none pb-1">
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all whitespace-nowrap min-h-[36px] sm:min-h-[40px] ${
                selectedCategory === "all"
                  ? brandThemes.pillActive
                  : "bg-white text-stone-700 border-stone-200 hover:border-stone-400"
              }`}
            >
              {locale === "bn" ? `সব ${brand.nameBn}` : `All ${brand.nameEn}`} ({brandProducts.length})
            </button>

            {brandCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all whitespace-nowrap flex items-center gap-1.5 min-h-[36px] sm:min-h-[40px] ${
                  selectedCategory === cat.id
                    ? brandThemes.pillActive
                    : "bg-white text-stone-700 border-stone-200 hover:border-stone-400"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{locale === "bn" ? cat.nameBn : cat.nameEn}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filter and Sort Control Bar */}
        <div className="bg-white rounded-2xl border border-stone-200/90 p-3 sm:p-4 mb-5 shadow-2xs">
          {/* Mobile Filter Summary & Toggle */}
          <div className="flex items-center justify-between gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold min-h-[38px]"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-stone-600" />
              <span>{locale === "bn" ? "ফিল্টার" : "Filters"}</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
              )}
            </button>

            {/* Mobile Sort Dropdown */}
            <div className="flex items-center gap-1.5">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="text-xs font-semibold bg-stone-50 border border-stone-200 rounded-xl px-2.5 py-2 focus:outline-none min-h-[38px]"
              >
                <option value="default">{locale === "bn" ? "বাছাই: সাধারণ" : "Default"}</option>
                <option value="price-asc">{locale === "bn" ? "দাম: কম-বেশি" : "Price: Low"}</option>
                <option value="price-desc">{locale === "bn" ? "দাম: বেশি-কম" : "Price: High"}</option>
                <option value="name-asc">{locale === "bn" ? "নাম: ক-ঁ" : "Name: A-Z"}</option>
              </select>
            </div>
          </div>

          {/* Collapsible Mobile Filters / Always visible on Desktop */}
          <div
            className={`${
              mobileFilterOpen ? "block mt-3 pt-3 border-t border-stone-100" : "hidden"
            } md:flex flex-col md:flex-row md:items-center justify-between gap-4`}
          >
            {/* Left: Quick filters */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-stone-700">
              {/* Availability Filter */}
              <label className="flex items-center gap-2 cursor-pointer select-none min-h-[36px]">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="rounded text-emerald-700 focus:ring-emerald-700 h-4 w-4"
                />
                <span className="font-semibold text-xs">
                  {locale === "bn" ? "শুধুমাত্র স্টকে থাকা পণ্য" : "In Stock Only"}
                </span>
              </label>

              {/* Price Range Slider */}
              <div className="flex items-center gap-2">
                <span className="text-xs">{locale === "bn" ? "সর্বোচ্চ:" : "Max:"}</span>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="50"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="accent-stone-900 w-24 sm:w-32 cursor-pointer"
                />
                <span className="font-bold text-stone-900 text-xs">৳{formatNumber(maxPrice)}</span>
              </div>

              {/* Reset Action */}
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-bold text-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{locale === "bn" ? "মুছুন" : "Reset"}</span>
                </button>
              )}
            </div>

            {/* Desktop Sorting & Count */}
            <div className="hidden md:flex items-center justify-end gap-3">
              <span className="text-xs text-stone-500 font-medium">
                {formatNumber(filteredProducts.length)} {locale === "bn" ? "টি পণ্য" : "products"}
              </span>

              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-3.5 h-3.5 text-stone-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="text-xs font-semibold bg-stone-50 border border-stone-200 rounded-xl px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-stone-900"
                >
                  <option value="default">{locale === "bn" ? "বাছাই: সাধারণ" : "Sort: Default"}</option>
                  <option value="price-asc">{locale === "bn" ? "দাম: কম থেকে বেশি" : "Price: Low to High"}</option>
                  <option value="price-desc">{locale === "bn" ? "দাম: বেশি থেকে কম" : "Price: High to Low"}</option>
                  <option value="name-asc">{locale === "bn" ? "নাম: ক থেকে ঁ" : "Name: A to Z"}</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Product Collection Grid or Empty State */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-stone-200 my-6">
            <Layers className="w-10 h-10 sm:w-12 sm:h-12 text-stone-400 mx-auto mb-3 stroke-[1.5]" />
            <h3 className="font-bold text-stone-900 text-base sm:text-lg">
              {locale === "bn"
                ? "নির্বাচিত ফিল্টারে কোনো পণ্য পাওয়া যায়নি"
                : "No products match your filter"}
            </h3>
            <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
              {locale === "bn"
                ? "মূল্য সীমা বাড়ান অথবা বিভাগ পরিবর্তন করে পুনরায় চেষ্টা করুন।"
                : "Try increasing the price limit or resetting the category filter."}
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-4 px-5 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-bold shadow-xs hover:bg-stone-800 transition-colors min-h-[42px]"
            >
              {locale === "bn" ? "সকল ফিল্টার রিসেট করুন" : "Reset All Filters"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} locale={locale} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
