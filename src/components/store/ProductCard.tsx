"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, PackSize } from "@/lib/store/types";
import { brands } from "@/lib/store/store-data";
import { useCart } from "@/lib/store/cart-context";
import { ShoppingCart, Check, Eye } from "lucide-react";

interface ProductCardProps {
  product: Product;
  locale: "bn" | "en";
}

export function ProductCard({ product, locale }: ProductCardProps) {
  const { addItem } = useCart();
  const [selectedPackIndex, setSelectedPackIndex] = useState(0);
  const [addedRecently, setAddedRecently] = useState(false);
  const [imageError, setImageError] = useState(false);

  const brandInfo = brands[product.brand];
  const activePack: PackSize = product.packSizes[selectedPackIndex] || {
    labelBn: product.unitBn,
    labelEn: product.unitEn,
    weight: product.unitEn,
    price: product.price,
    originalPrice: product.originalPrice,
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, activePack, 1);
    setAddedRecently(true);
    setTimeout(() => setAddedRecently(false), 1500);
  };

  const name = locale === "bn" ? product.nameBn : product.nameEn;
  const subtitle = locale === "bn" ? product.subtitleBn : product.subtitleEn;
  const brandName = locale === "bn" ? brandInfo.nameBn : brandInfo.nameEn;
  const badge = locale === "bn" ? product.badgeBn : product.badgeEn;

  // Bengali numerals helper
  const formatNumber = (num: number) => {
    if (locale === "bn") {
      const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
      return num.toString().replace(/\d/g, (d) => bnDigits[parseInt(d, 10)]);
    }
    return num.toLocaleString();
  };

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-stone-200/90 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Brand & Badge Header */}
      <div className="absolute top-3 inset-x-3 z-10 flex items-center justify-between pointer-events-none">
        <span
          className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs backdrop-blur-xs ${
            product.brand === "soteja"
              ? "bg-emerald-600 text-white"
              : product.brand === "rosod"
              ? "bg-amber-700 text-white"
              : "bg-sky-700 text-white"
          }`}
        >
          {brandName}
        </span>
        {badge && (
          <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-md bg-stone-900/80 text-white backdrop-blur-xs">
            {badge}
          </span>
        )}
      </div>

      {/* Product Image */}
      <Link
        href={`/${locale}/product/${product.slug}`}
        className="relative block w-full aspect-square bg-stone-100/60 overflow-hidden cursor-pointer"
      >
        <Image
          src={imageError ? "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80" : product.image}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="bg-white/90 text-stone-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all">
            <Eye className="w-3.5 h-3.5" />
            {locale === "bn" ? "বিস্তারিত" : "Details"}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="flex-1 flex flex-col p-3.5 sm:p-4 bg-stone-50/40">
        <div className="mb-1">
          <span className="text-[11px] font-medium text-stone-500">
            {locale === "bn" ? product.categoryBn : product.categoryEn}
          </span>
        </div>

        <Link
          href={`/${locale}/product/${product.slug}`}
          className="font-bold text-sm sm:text-base text-stone-900 hover:text-emerald-700 transition-colors line-clamp-1 mb-1"
          title={name}
        >
          {name}
        </Link>
        <p className="text-xs text-stone-500 line-clamp-1 mb-3">
          {subtitle}
        </p>

        {/* Pack Size Pills */}
        {product.packSizes && product.packSizes.length > 1 ? (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {product.packSizes.map((pack, idx) => (
              <button
                key={pack.weight}
                type="button"
                onClick={() => setSelectedPackIndex(idx)}
                className={`text-[11px] font-medium px-2 py-0.5 rounded-md border transition-all ${
                  selectedPackIndex === idx
                    ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                    : "bg-white text-stone-600 border-stone-200 hover:border-stone-400"
                }`}
              >
                {locale === "bn" ? pack.labelBn : pack.labelEn}
              </button>
            ))}
          </div>
        ) : (
          <div className="text-[11px] text-stone-500 mb-3">
            {locale === "bn" ? activePack.labelBn : activePack.labelEn}
          </div>
        )}

        {/* Pricing & Add to Cart */}
        <div className="mt-auto pt-2 border-t border-stone-200/60 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-bold text-stone-900">
                ৳{formatNumber(activePack.price)}
              </span>
              {activePack.originalPrice && activePack.originalPrice > activePack.price && (
                <span className="text-xs text-stone-400 line-through">
                  ৳{formatNumber(activePack.originalPrice)}
                </span>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              addedRecently
                ? "bg-emerald-600 text-white scale-95"
                : product.inStock
                ? "bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white shadow-xs"
                : "bg-stone-200 text-stone-400 cursor-not-allowed"
            }`}
            aria-label={`${locale === "bn" ? "কার্টে যোগ করুন" : "Add to Cart"}: ${name}`}
          >
            {addedRecently ? (
              <>
                <Check className="w-4 h-4 stroke-[2.5]" />
                <span className="hidden sm:inline">{locale === "bn" ? "যোগ হয়েছে" : "Added"}</span>
              </>
            ) : product.inStock ? (
              <>
                <ShoppingCart className="w-4 h-4" />
                <span>{locale === "bn" ? "কিনুন" : "Add"}</span>
              </>
            ) : (
              <span>{locale === "bn" ? "স্টক শেষ" : "Sold Out"}</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
