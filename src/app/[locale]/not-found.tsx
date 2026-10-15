import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Store } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-36 text-center max-w-xl mx-auto px-4">
      <div className="w-16 h-16 rounded-2xl bg-canvas text-brand-green flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
        পেজটি পাওয়া যায়নি
      </h1>
      <p className="text-base text-muted mb-8 leading-relaxed">
        আপনার কাঙ্ক্ষিত পেজটি পাওয়া যায়নি বা ঠিকানাটি ভুল হতে পারে। দয়া করে হোম পেজে ফিরে যান অথবা আমাদের সেবাসমূহ দেখুন।
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="/bn" className="btn-primary text-sm font-bold flex items-center gap-2 w-full sm:w-auto justify-center">
          <Home className="w-4 h-4" />
          <span>হোম পেজে যান</span>
        </Link>
        <Link href="/bn/services" className="btn-secondary text-sm font-bold flex items-center gap-2 w-full sm:w-auto justify-center">
          <Store className="w-4 h-4 text-brand-green" />
          <span>সেবাসমূহ দেখুন</span>
        </Link>
      </div>
    </div>
  );
}