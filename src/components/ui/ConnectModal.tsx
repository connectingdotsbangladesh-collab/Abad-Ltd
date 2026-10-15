"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Locale } from "@/lib/types";
import { X, Sprout, ShoppingBag, Handshake } from "lucide-react";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
}

export function ConnectModal({ isOpen, onClose, locale }: ConnectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isBn = locale === "bn";

  const options = [
    {
      title: isBn ? "কৃষক হিসেবে যুক্ত হোন" : "Connect as a Farmer",
      desc: isBn
        ? "নিজস্ব ব্র্যান্ড, সরাসরি বাজার এবং কৃষি তথ্য নিয়ে আবাদ-এর নেটওয়ার্কে আগ্রহ জানান।"
        : "Express interest in farmer brands, direct market connections and farm data.",
      href: `/${locale}/farmers`,
      icon: Sprout,
      color: "bg-brand-green/10 text-brand-green border-brand-green/30",
    },
    {
      title: isBn ? "ব্যবসায়িক পণ্যের চাহিদা" : "Business Sourcing Enquiry",
      desc: isBn
        ? "রেস্টুরেন্ট, সুপারশপ বা প্রতিষ্ঠানের জন্য কৃষিপণ্যের চাহিদা ও পরিমাণ জানান।"
        : "Describe product categories, volumes and schedules for institutional supply.",
      href: `/${locale}/buyers`,
      icon: ShoppingBag,
      color: "bg-accent-harvest/20 text-brand-navy border-accent-harvest/40",
    },
    {
      title: isBn ? "পার্টনারশিপ নিয়ে আলোচনা" : "Partnership Collaboration",
      desc: isBn
        ? "স্থানীয় হাব, লজিস্টিকস, প্রযুক্তি, অর্থায়ন বা স্পন্সরশিপ সহযোগিতার সুযোগ।"
        : "Explore collaboration for local hubs, logistics, technology or sponsorship.",
      href: `/${locale}/partners`,
      icon: Handshake,
      color: "bg-brand-navy/10 text-brand-navy border-brand-navy/30",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="connect-dialog-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-4 sm:p-8 border border-border max-h-[92vh] overflow-y-auto my-auto"
      >
        <div className="flex items-center justify-between pb-3.5 border-b border-border">
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-brand-navy shadow-soft border border-border relative shrink-0">
              <Image
                src="/brand/abad-logo.jpg"
                alt="Abad Limited"
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h2 id="connect-dialog-title" className="text-lg sm:text-2xl font-bold text-brand-navy leading-tight">
                {isBn ? "আবাদ-এর সঙ্গে যুক্ত হোন" : "Connect with Abad"}
              </h2>
              <p className="text-[11px] sm:text-sm text-muted mt-0.5">
                {isBn
                  ? "আপনার ভূমিকা নির্বাচন করে প্রাসঙ্গিক ফর্মে যান"
                  : "Choose your role to proceed to the relevant enquiry journey"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label={isBn ? "বন্ধ করুন" : "Close dialog"}
            className="p-1.5 sm:p-2 text-muted hover:text-brand-navy rounded-full hover:bg-canvas transition-colors shrink-0"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className="mt-4 sm:mt-6 grid grid-cols-1 gap-3 sm:gap-4">
          {options.map((opt, i) => {
            const Icon = opt.icon;
            return (
              <Link
                key={i}
                href={opt.href}
                onClick={onClose}
                className="group flex items-start gap-3 sm:gap-4 p-3.5 sm:p-5 rounded-xl border border-border hover:border-brand-green hover:shadow-soft transition-all duration-200 bg-canvas/40 hover:bg-white"
              >
                <div className={`p-3 rounded-lg border ${opt.color} group-hover:scale-105 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-green transition-colors">
                    {opt.title}
                  </h3>
                  <p className="text-sm text-muted mt-1 leading-relaxed">{opt.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-border flex justify-between items-center text-xs text-muted">
          <span>{isBn ? "সাধারণ জিজ্ঞাসার জন্য:" : "For general enquiries:"}</span>
          <Link
            href={`/${locale}/contact`}
            onClick={onClose}
            className="text-brand-green font-semibold hover:underline"
          >
            {isBn ? "যোগাযোগ পেজ দেখুন →" : "Visit Contact Page →"}
          </Link>
        </div>
      </div>
    </div>
  );
}