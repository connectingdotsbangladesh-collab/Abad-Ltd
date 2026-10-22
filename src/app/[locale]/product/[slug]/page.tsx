"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts, brands, deliveryConfig } from "@/lib/store/store-data";
import { useCart } from "@/lib/store/cart-context";
import { ProductCard } from "@/components/store/ProductCard";
import { PackSize } from "@/lib/store/types";
import {
  ShoppingCart,
  Check,
  Plus,
  Minus,
  Truck,
  ShieldCheck,
  MapPin,
  Clock,
  ArrowLeft,
  Share2,
  Leaf,
  Wheat,
  Milk,
  Info,
} from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const locale = (params?.locale as "bn" | "en") || "bn";
  const slug = params?.slug as string;

  const product = useMemo(() => getProductBySlug(slug), [slug]);
  const relatedProducts = useMemo(
    () => (product ? getRelatedProducts(product, 4) : []),
    [product]
  );

  const { addItem } = useCart();

  const [selectedPackIndex, setSelectedPackIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedRecently, setAddedRecently] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!product) {
    notFound();
  }

  const brand = brands[product.brand];
  const activePack: PackSize = product.packSizes[selectedPackIndex] || {
    labelBn: product.unitBn,
    labelEn: product.unitEn,
    weight: product.unitEn,
    price: product.price,
    originalPrice: product.originalPrice,
  };

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  const handleAddToCart = () => {
    addItem(product, activePack, quantity);
    setAddedRecently(true);
    setTimeout(() => setAddedRecently(false), 2000);
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const formatNumber = (num: number) => {
    if (locale === "bn") {
      const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
      return num.toString().replace(/\d/g, (d) => bnDigits[parseInt(d, 10)]);
    }
    return num.toLocaleString();
  };

  const name = locale === "bn" ? product.nameBn : product.nameEn;
  const subtitle = locale === "bn" ? product.subtitleBn : product.subtitleEn;
  const brandName = locale === "bn" ? brand.nameBn : brand.nameEn;
  const description = locale === "bn" ? product.descriptionBn : product.descriptionEn;
  const storageGuidance = locale === "bn" ? product.storageGuidanceBn : product.storageGuidanceEn;
  const origin = locale === "bn" ? product.originBn : product.originEn;
  const categoryName = locale === "bn" ? product.categoryBn : product.categoryEn;

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-stone-900 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-stone-200/80 bg-white/70">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-3 text-xs text-stone-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
          <Link href={`/${locale}/store`} className="hover:text-emerald-800 transition-colors">
            {locale === "bn" ? "অনলাইন স্টোর" : "Store"}
          </Link>
          <span>/</span>
          <Link
            href={`/${locale}/${product.brand}`}
            className="hover:text-emerald-800 font-semibold transition-colors"
          >
            {brandName}
          </Link>
          <span>/</span>
          <span className="text-stone-400">{categoryName}</span>
          <span>/</span>
          <span className="font-bold text-stone-800 truncate max-w-xs">{name}</span>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href={`/${locale}/${product.brand}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-emerald-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{locale === "bn" ? `${brandName} সংগ্রহে ফিরে যান` : `Back to ${brandName}`}</span>
          </Link>
        </div>

        {/* Product Details Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-white border border-stone-200 shadow-md">
              <Image
                src={images[selectedImageIndex] || product.image}
                alt={name}
                fill
                priority
                className="object-cover transition-all duration-300"
              />

              {/* Brand Tag Top Left */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full shadow-md text-white ${
                    product.brand === "soteja"
                      ? "bg-emerald-600"
                      : product.brand === "rosod"
                      ? "bg-amber-700"
                      : "bg-sky-700"
                  }`}
                >
                  {brandName}
                </span>
              </div>

              {/* Demo Badge Top Right */}
              <div className="absolute top-4 right-4 z-10">
                <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-stone-900/80 text-white backdrop-blur-xs">
                  {locale === "bn" ? "প্রদর্শনী ডেটা" : "Demo Data"}
                </span>
              </div>
            </div>

            {/* Thumbnail Gallery (if multiple) */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      selectedImageIndex === idx
                        ? "border-emerald-700 ring-2 ring-emerald-700/20 shadow-xs"
                        : "border-stone-200 hover:border-stone-400"
                    }`}
                  >
                    <Image src={img} alt={`${name} ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Sourcing / Origin Box */}
            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-2 text-xs text-stone-600">
              <div className="flex items-center gap-2 font-bold text-stone-900">
                <MapPin className="w-4 h-4 text-emerald-700" />
                <span>{locale === "bn" ? "উৎপাদন ও সংগ্রহ অঞ্চল" : "Origin & Harvest Region"}</span>
              </div>
              <p className="leading-relaxed pl-6">{origin}</p>
            </div>
          </div>

          {/* Right Column: Pricing, Pack selector, Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category & Title */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  {categoryName}
                </span>
                <h1 className="text-2xl sm:text-4xl font-black text-stone-900 mt-1 leading-tight">
                  {name}
                </h1>
                <p className="text-xs sm:text-sm text-stone-500 mt-1">
                  {subtitle}
                </p>
              </div>

              {/* Price Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-stone-900">
                    ৳{formatNumber(activePack.price)}
                  </span>
                  {activePack.originalPrice && activePack.originalPrice > activePack.price && (
                    <span className="text-lg text-stone-400 line-through">
                      ৳{formatNumber(activePack.originalPrice)}
                    </span>
                  )}
                  {activePack.originalPrice && activePack.originalPrice > activePack.price && (
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {locale === "bn" ? "সাশ্রয়ী অফার" : "Special Price"}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 mt-2 text-xs font-semibold">
                  <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    {locale === "bn" ? "স্টকে প্রস্তুত" : "In Stock"}
                  </span>
                  <span className="text-stone-300">•</span>
                  <span className="text-stone-500">
                    {locale === "bn" ? `প্যাক: ${activePack.labelBn}` : `Pack: ${activePack.labelEn}`}
                  </span>
                </div>
              </div>

              {/* Pack Size Selector - Updates displayed price correctly */}
              {product.packSizes && product.packSizes.length > 0 && (
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                    {locale === "bn" ? "প্যাকের সাইজ / ওজন নির্বাচন করুন:" : "Select Pack Size / Weight:"}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {product.packSizes.map((pack, idx) => {
                      const isSelected = selectedPackIndex === idx;
                      return (
                        <button
                          key={pack.weight}
                          type="button"
                          onClick={() => setSelectedPackIndex(idx)}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            isSelected
                              ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                              : "bg-white text-stone-800 border-stone-200 hover:border-stone-400"
                          }`}
                        >
                          <div className="text-xs font-bold">
                            {locale === "bn" ? pack.labelBn : pack.labelEn}
                          </div>
                          <div
                            className={`text-xs mt-0.5 font-semibold ${
                              isSelected ? "text-emerald-300" : "text-stone-600"
                            }`}
                          >
                            ৳{formatNumber(pack.price)}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Quantity Stepper & Add to Cart Action */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  {/* Quantity Stepper */}
                  <div className="flex items-center bg-white border border-stone-300 rounded-xl p-1 shadow-2xs">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 text-stone-600 hover:bg-stone-100 rounded-lg transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center text-sm font-bold text-stone-900">
                      {formatNumber(quantity)}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 text-stone-600 hover:bg-stone-100 rounded-lg transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className={`flex-1 py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-95 ${
                      addedRecently
                        ? "bg-emerald-600 text-white"
                        : "bg-emerald-700 hover:bg-emerald-800 text-white"
                    }`}
                  >
                    {addedRecently ? (
                      <>
                        <Check className="w-5 h-5 stroke-[2.5]" />
                        <span>{locale === "bn" ? "কার্টে যোগ হয়েছে!" : "Added to Cart!"}</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-5 h-5" />
                        <span>
                          {locale === "bn"
                            ? `কার্টে যোগ করুন (৳${formatNumber(activePack.price * quantity)})`
                            : `Add to Cart (৳${formatNumber(activePack.price * quantity)})`}
                        </span>
                      </>
                    )}
                  </button>

                  {/* Share button */}
                  <button
                    type="button"
                    onClick={handleShare}
                    className="p-3.5 bg-white border border-stone-200 hover:border-stone-300 text-stone-700 rounded-xl transition-colors shadow-2xs"
                    title={locale === "bn" ? "লিংক কপি করুন" : "Copy link"}
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>

                {copiedLink && (
                  <p className="text-xs text-emerald-700 font-semibold text-center">
                    {locale === "bn" ? "✓ লিংক ক্লিপবোর্ডে কপি হয়েছে!" : "✓ Link copied to clipboard!"}
                  </p>
                )}
              </div>

              {/* Delivery and Guarantee Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-3 text-xs text-stone-600">
                <div className="p-3 rounded-xl bg-white border border-stone-200 flex items-start gap-2.5">
                  <Truck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">
                      {locale === "bn" ? "ডেলিভারি সময়" : "Delivery Window"}
                    </span>
                    <span>{deliveryConfig.estimatedHours} {locale === "bn" ? "ঘণ্টা" : "hours"}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-stone-200 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">
                      {locale === "bn" ? "ক্যাশ অন ডেলিভারি" : "Cash on Delivery"}
                    </span>
                    <span>{locale === "bn" ? "পণ্য পেয়ে মূল্য পরিশোধ" : "Pay on arrival"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Storage Guidance Box */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 space-y-1">
              <div className="flex items-center gap-1.5 font-bold">
                <Info className="w-4 h-4 text-amber-800" />
                <span>{locale === "bn" ? "সঠিক সংরক্ষণ পদ্ধতি" : "Storage Guidance"}</span>
              </div>
              <p className="leading-relaxed pl-5 text-amber-800/90">{storageGuidance}</p>
            </div>
          </div>
        </div>

        {/* Product Detailed Description & Specifications */}
        <div className="mt-12 bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-10 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mb-4">
            {locale === "bn" ? "পণ্যের বিবরণ ও বৈশিষ্ট্য" : "Product Description & Details"}
          </h2>
          <div className="prose prose-stone max-w-none text-xs sm:text-sm text-stone-600 leading-relaxed space-y-4">
            <p>{description}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-stone-100 text-xs">
            <div>
              <span className="text-stone-400 block">{locale === "bn" ? "ব্র্যান্ড:" : "Brand:"}</span>
              <span className="font-bold text-stone-800">{brandName}</span>
            </div>
            <div>
              <span className="text-stone-400 block">{locale === "bn" ? "ক্যাটাগরি:" : "Category:"}</span>
              <span className="font-bold text-stone-800">{categoryName}</span>
            </div>
            <div>
              <span className="text-stone-400 block">{locale === "bn" ? "নির্বাচিত ওজন:" : "Weight:"}</span>
              <span className="font-bold text-stone-800">{activePack.weight}</span>
            </div>
            <div>
              <span className="text-stone-400 block">{locale === "bn" ? "স্টক স্থিতি:" : "Status:"}</span>
              <span className="font-bold text-emerald-700">
                {product.inStock ? (locale === "bn" ? "স্টকে প্রস্তুত" : "In Stock") : (locale === "bn" ? "স্টক শেষ" : "Sold Out")}
              </span>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  {brandName}
                </span>
                <h3 className="text-2xl font-black text-stone-900 mt-0.5">
                  {locale === "bn" ? "সম্পর্কিত অন্যান্য পণ্য" : "Related Products"}
                </h3>
              </div>
              <Link
                href={`/${locale}/${product.brand}`}
                className="text-xs font-bold text-emerald-800 hover:underline"
              >
                {locale === "bn" ? `সব ${brandName} পণ্য দেখুন →` : `View all ${brandName} →`}
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} locale={locale} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
