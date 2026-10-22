"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/lib/store/cart-context";
import { searchProducts, brands } from "@/lib/store/store-data";
import { Product, StoreBrand } from "@/lib/store/types";
import {
  Search,
  ShoppingCart,
  X,
  Menu,
  ArrowLeft,
  ChevronDown,
  Sparkles,
  Leaf,
  Wheat,
  Milk,
  Store,
} from "lucide-react";

interface StoreHeaderProps {
  locale: "bn" | "en";
}

export function StoreHeader({ locale }: StoreHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { totalCount, subtotal, openDrawer, mounted } = useCart();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);

  // Close search suggestions on route change or click outside
  useEffect(() => {
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
    setShowMobileSearch(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Live search filtering
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const results = searchProducts(searchQuery).slice(0, 6);
      setSearchResults(results);
      setIsSearchOpen(true);
    } else {
      setSearchResults([]);
      setIsSearchOpen(false);
    }
  }, [searchQuery]);

  // Focus mobile input when toggled
  useEffect(() => {
    if (showMobileSearch && mobileInputRef.current) {
      setTimeout(() => mobileInputRef.current?.focus(), 100);
    }
  }, [showMobileSearch]);

  const handleLocaleSwitch = (newLocale: "bn" | "en") => {
    if (newLocale === locale) return;
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] === "bn" || segments[0] === "en") {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }
    const targetUrl = "/" + segments.join("/");
    router.push(targetUrl);
  };

  const formatNumber = (num: number) => {
    if (locale === "bn") {
      const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
      return num.toString().replace(/\d/g, (d) => bnDigits[parseInt(d, 10)]);
    }
    return num.toLocaleString();
  };

  const navBrands: {
    id: StoreBrand | "all";
    name: string;
    english: string;
    href: string;
    icon: React.ReactNode;
  }[] = [
    {
      id: "all",
      name: locale === "bn" ? "সকল পণ্য" : "All Products",
      english: "Storefront",
      href: `/${locale}/store`,
      icon: <Store className="w-3.5 h-3.5" />,
    },
    {
      id: "soteja",
      name: locale === "bn" ? "সতেজা" : "Soteja",
      english: "Fresh Produce",
      href: `/${locale}/soteja`,
      icon: <Leaf className="w-3.5 h-3.5 text-emerald-600" />,
    },
    {
      id: "rosod",
      name: locale === "bn" ? "রসদ" : "Rosod",
      english: "Pantry Staples",
      href: `/${locale}/rosod`,
      icon: <Wheat className="w-3.5 h-3.5 text-amber-700" />,
    },
    {
      id: "sudha",
      name: locale === "bn" ? "সুধা" : "Sudha",
      english: "Pure Dairy",
      href: `/${locale}/sudha`,
      icon: <Milk className="w-3.5 h-3.5 text-sky-700" />,
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FCFBF8]/95 backdrop-blur-md border-b border-stone-200/80 shadow-2xs transition-colors">
      {/* Top Bar Announcement */}
      <div className="bg-emerald-950 text-emerald-50 text-[10px] sm:text-xs py-1 px-3 sm:px-4">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-2">
          {/* Promo */}
          <div className="flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap min-w-0">
            <span className="bg-emerald-700 px-1.5 py-0.2 rounded text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shrink-0">
              {locale === "bn" ? "অফার" : "PROMO"}
            </span>
            <span className="truncate">
              {locale === "bn"
                ? "৳১৫০০+ অর্ডারে ঢাকায় ফ্রি ডেলিভারি!"
                : "Free Dhaka delivery on ৳1500+!"}
            </span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            <Link
              href={`/${locale}`}
              className="text-emerald-200 hover:text-white flex items-center gap-1 transition-colors text-[10px] sm:text-[11px] whitespace-nowrap"
            >
              <ArrowLeft className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span className="hidden xs:inline">{locale === "bn" ? "কর্পোরেট সাইট" : "Corporate"}</span>
              <span className="xs:hidden">{locale === "bn" ? "আবাদ" : "Main"}</span>
            </Link>

            {/* Language Toggle */}
            <div className="flex items-center gap-0.5 font-semibold text-[10px] sm:text-[11px] bg-emerald-900/60 p-0.5 rounded-md">
              <button
                type="button"
                onClick={() => handleLocaleSwitch("bn")}
                className={`px-1.5 py-0.5 rounded transition-all min-h-[22px] flex items-center ${
                  locale === "bn" ? "bg-white text-emerald-950 font-bold shadow-2xs" : "text-emerald-200 hover:text-white"
                }`}
                aria-pressed={locale === "bn"}
              >
                বাং
              </button>
              <button
                type="button"
                onClick={() => handleLocaleSwitch("en")}
                className={`px-1.5 py-0.5 rounded transition-all min-h-[22px] flex items-center ${
                  locale === "en" ? "bg-white text-emerald-950 font-bold shadow-2xs" : "text-emerald-200 hover:text-white"
                }`}
                aria-pressed={locale === "en"}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1240px] mx-auto px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between gap-2 sm:gap-6">
        {/* Brand Lockup */}
        <Link
          href={`/${locale}/store`}
          className="flex items-center gap-2 sm:gap-3 group shrink-0"
          aria-label={locale === "bn" ? "আবাদ অনলাইন স্টোর" : "Abad Online Store"}
        >
          <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl overflow-hidden bg-emerald-950 border border-emerald-900/20 shadow-2xs relative shrink-0 group-hover:scale-105 transition-transform">
            <Image
              src="/brand/abad-logo.jpg"
              alt="Abad Limited Logo"
              width={44}
              height={44}
              priority
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-base sm:text-2xl font-black tracking-tight text-stone-900 group-hover:text-emerald-800 transition-colors leading-none">
                {locale === "bn" ? "আবাদ" : "Abad"}
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 tracking-wide uppercase leading-none">
                STORE
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] font-medium text-stone-500 leading-tight mt-0.5 truncate max-w-[120px] sm:max-w-none">
              {locale === "bn" ? "সতেজা • রসদ • সুধা" : "Soteja • Rosod • Sudha"}
            </span>
          </div>
        </Link>

        {/* Desktop Search Bar */}
        <div ref={searchContainerRef} className="hidden md:flex flex-1 max-w-xl relative">
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery.trim().length > 1 && setIsSearchOpen(true)}
              placeholder={
                locale === "bn"
                  ? "তাজা শাকসবজি, চাল, ডাল, সরিষার তেল, ঘি ও দুধ খুঁজুন..."
                  : "Search fresh vegetables, rice, lentils, pure ghee, milk..."
              }
              className="w-full bg-white pl-10 pr-9 py-2 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700 shadow-2xs transition-all placeholder:text-stone-400"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-0.5"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Desktop Search Dropdown Results */}
          {isSearchOpen && (
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-2xl shadow-xl border border-stone-200 p-2 z-50 animate-fadeIn">
              <div className="px-3 py-1.5 text-xs font-semibold text-stone-500 flex justify-between border-b border-stone-100">
                <span>{locale === "bn" ? "পণ্য ফলাফল" : "Search Results"}</span>
                <span>{searchResults.length} {locale === "bn" ? "টি পাওয়া গেছে" : "found"}</span>
              </div>

              {searchResults.length === 0 ? (
                <div className="p-4 text-center text-xs text-stone-500">
                  {locale === "bn"
                    ? "কোনো পণ্য পাওয়া যায়নি। অন্য বানান চেষ্টা করুন।"
                    : "No products found. Please try another query."}
                </div>
              ) : (
                <div className="max-h-80 overflow-y-auto py-1">
                  {searchResults.map((product) => {
                    const brand = brands[product.brand];
                    return (
                      <Link
                        key={product.id}
                        href={`/${locale}/product/${product.slug}`}
                        onClick={() => setIsSearchOpen(false)}
                        className="flex items-center gap-3 p-2 hover:bg-stone-50 rounded-xl transition-colors"
                      >
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-stone-100 shrink-0">
                          <Image
                            src={product.image}
                            alt={product.nameEn}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                                product.brand === "soteja"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : product.brand === "rosod"
                                  ? "bg-amber-100 text-amber-900"
                                  : "bg-sky-100 text-sky-900"
                              }`}
                            >
                              {locale === "bn" ? brand.nameBn : brand.nameEn}
                            </span>
                            <span className="text-[11px] text-stone-400">
                              {locale === "bn" ? product.categoryBn : product.categoryEn}
                            </span>
                          </div>
                          <h4 className="text-xs font-bold text-stone-900 truncate">
                            {locale === "bn" ? product.nameBn : product.nameEn}
                          </h4>
                          <span className="text-xs font-semibold text-emerald-800">
                            ৳{formatNumber(product.price)}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Actions on Mobile / Desktop */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Mobile Search Toggle */}
          <button
            type="button"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            className="md:hidden p-2 text-stone-700 hover:text-emerald-800 rounded-xl hover:bg-stone-100 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Toggle search"
          >
            {showMobileSearch ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
          </button>

          {/* Cart Drawer Button */}
          <button
            type="button"
            onClick={openDrawer}
            className="relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white transition-all shadow-xs min-h-[40px]"
            aria-label={`${locale === "bn" ? "কার্ট খুলুন" : "Open Cart"}, ${totalCount} items`}
          >
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              {mounted && totalCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-400 text-stone-900 font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-xs border-2 border-emerald-800">
                  {formatNumber(totalCount)}
                </span>
              )}
            </div>

            <div className="hidden sm:flex flex-col text-left">
              <span className="text-[10px] font-medium text-emerald-200 uppercase tracking-wider leading-none">
                {locale === "bn" ? "শপিং ব্যাগ" : "Cart"}
              </span>
              <span className="text-xs font-bold leading-tight mt-0.5">
                ৳{formatNumber(subtotal)}
              </span>
            </div>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-emerald-800 rounded-xl hover:bg-stone-100 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar Expandable */}
      {showMobileSearch && (
        <div className="md:hidden px-3.5 pb-3 pt-1 animate-fadeIn border-t border-stone-100 bg-white">
          <div className="relative">
            <input
              ref={mobileInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                locale === "bn"
                  ? "শাকসবজি, চাল, ডাল, তেল, ঘি খুঁজুন..."
                  : "Search fresh food and grocery..."
              }
              className="w-full bg-stone-50 pl-10 pr-9 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 p-1"
                aria-label="Clear"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {searchQuery.trim().length > 1 && (
            <div className="mt-2 bg-white rounded-xl shadow-lg border border-stone-200 p-2 max-h-64 overflow-y-auto divide-y divide-stone-100">
              {searchResults.length === 0 ? (
                <div className="p-3 text-center text-xs text-stone-500">
                  {locale === "bn" ? "কোনো পণ্য পাওয়া যায়নি।" : "No products found."}
                </div>
              ) : (
                searchResults.map((p) => (
                  <Link
                    key={p.id}
                    href={`/${locale}/product/${p.slug}`}
                    onClick={() => {
                      setShowMobileSearch(false);
                      setSearchQuery("");
                    }}
                    className="flex items-center gap-2.5 py-2.5 px-2 hover:bg-stone-50 rounded-lg text-xs"
                  >
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-stone-100 shrink-0">
                      <Image src={p.image} alt={p.nameEn} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-stone-900 truncate">
                        {locale === "bn" ? p.nameBn : p.nameEn}
                      </h4>
                      <span className="text-[10px] text-stone-400">
                        {locale === "bn" ? p.categoryBn : p.categoryEn}
                      </span>
                    </div>
                    <span className="text-emerald-800 font-bold shrink-0">
                      ৳{formatNumber(p.price)}
                    </span>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
      )}

      {/* Brand Navigation Tabs Bar */}
      <nav
        className="border-t border-stone-200/60 bg-white/90 overflow-x-auto scrollbar-none"
        aria-label="Brand Navigation"
      >
        <div className="max-w-[1240px] mx-auto px-3 sm:px-6 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 py-1.5 shrink-0 overflow-x-auto scrollbar-none w-full sm:w-auto">
            {navBrands.map((brand) => {
              const isActive =
                brand.id === "all"
                  ? pathname === `/${locale}/store`
                  : pathname === `/${locale}/${brand.id}`;

              return (
                <Link
                  key={brand.id}
                  href={brand.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[34px] ${
                    isActive
                      ? "bg-stone-900 text-white shadow-2xs font-bold"
                      : "text-stone-700 hover:bg-stone-100 hover:text-stone-950"
                  }`}
                >
                  {brand.icon}
                  <span>{brand.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-4 text-xs font-semibold text-stone-600">
            <Link
              href={`/${locale}/cart`}
              className="hover:text-emerald-800 transition-colors flex items-center gap-1"
            >
              <span>{locale === "bn" ? "কার্ট পেজ" : "View Cart"}</span>
            </Link>
            <span className="text-stone-300">•</span>
            <Link
              href={`/${locale}/checkout`}
              className="hover:text-emerald-800 transition-colors flex items-center gap-1 font-bold text-emerald-800"
            >
              <span>{locale === "bn" ? "চেকআউট" : "Checkout"}</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-stone-200 shadow-xl p-4 animate-fadeIn">
          <div className="space-y-1">
            {navBrands.map((brand) => (
              <Link
                key={brand.id}
                href={brand.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl text-sm font-bold text-stone-800 hover:bg-stone-50 min-h-[44px]"
              >
                <div className="flex items-center gap-2">
                  {brand.icon}
                  <span>{brand.name}</span>
                </div>
                <span className="text-xs text-stone-400">{brand.english}</span>
              </Link>
            ))}
          </div>

          <div className="pt-3 mt-3 border-t border-stone-200 flex flex-col gap-2">
            <Link
              href={`/${locale}/cart`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-stone-100 text-stone-800 text-xs font-bold text-center min-h-[44px] flex items-center justify-center"
            >
              {locale === "bn" ? "কার্ট পেজ দেখুন" : "View Cart Details"}
            </Link>
            <Link
              href={`/${locale}/checkout`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-emerald-700 text-white text-xs font-bold text-center min-h-[44px] flex items-center justify-center shadow-xs"
            >
              {locale === "bn" ? "সরাসরি চেকআউট" : "Direct Checkout"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
