"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Locale, SiteCopy, District } from "@/lib/types";
import { MapPin, Search, ArrowRight, Info } from "lucide-react";

interface NetworkSectionProps {
  locale: Locale;
  copy: SiteCopy;
  districts: District[];
}

export function NetworkSection({ locale, copy, districts }: NetworkSectionProps) {
  const isBn = locale === "bn";
  const [selectedDivision, setSelectedDivision] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>("dhaka");

  const divisions = [
    { id: "all", nameBn: "সব বিভাগ", nameEn: "All Divisions" },
    { id: "dhaka", nameBn: "ঢাকা", nameEn: "Dhaka" },
    { id: "chattogram", nameBn: "চট্টগ্রাম", nameEn: "Chattogram" },
    { id: "rajshahi", nameBn: "রাজশাহী", nameEn: "Rajshahi" },
    { id: "khulna", nameBn: "খুলনা", nameEn: "Khulna" },
    { id: "barishal", nameBn: "বরিশাল", nameEn: "Barishal" },
    { id: "sylhet", nameBn: "সিলেট", nameEn: "Sylhet" },
    { id: "rangpur", nameBn: "রংপুর", nameEn: "Rangpur" },
    { id: "mymensingh", nameBn: "ময়মনসিংহ", nameEn: "Mymensingh" },
  ];

  const filteredDistricts = districts.filter((d) => {
    const matchesDiv = selectedDivision === "all" || d.divisionId === selectedDivision;
    const matchesSearch =
      d.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.nameEn.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDiv && matchesSearch;
  });

  const selectedDistrict = districts.find((d) => d.id === selectedDistrictId) || districts[0];

  return (
    <section className="py-20 bg-canvas border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
            জাতীয় নেটওয়ার্ক
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-2">
            {copy.home.networkHeading}
          </h2>
          <p className="text-base text-muted mt-3">
            {copy.home.networkIntro}
          </p>
        </div>

        {/* Division Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {divisions.map((div) => {
            const isSelected = selectedDivision === div.id;
            return (
              <button
                key={div.id}
                onClick={() => setSelectedDivision(div.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-brand-navy text-white shadow-soft"
                    : "bg-white text-ink/80 border border-border hover:border-brand-green"
                }`}
              >
                {isBn ? div.nameBn : div.nameEn}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* District Search & List (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-border shadow-soft">
            <div className="relative mb-4">
              <Search className="w-5 h-5 text-muted absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={isBn ? "জেলা খুঁজুন (উদা: বগুড়া, গাজীপুর)..." : "Search district..."}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-focus bg-canvas/30"
              />
            </div>

            <div className="max-h-80 overflow-y-auto pr-1 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {filteredDistricts.map((d) => {
                const isSelected = d.id === selectedDistrictId;
                return (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDistrictId(d.id)}
                    className={`p-2.5 rounded-xl text-left text-xs font-bold transition-all border ${
                      isSelected
                        ? "bg-brand-green text-white border-brand-green shadow-xs"
                        : "bg-canvas/40 text-ink border-border/80 hover:bg-canvas hover:border-brand-green/50"
                    }`}
                  >
                    <div>{isBn ? d.nameBn : d.nameEn}</div>
                    <div className={`text-[10px] ${isSelected ? "text-white/80" : "text-muted"}`}>
                      {isBn ? d.divisionBn : d.divisionEn}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected District Status Box (5 cols) */}
          <div className="lg:col-span-5 bg-brand-navy text-white rounded-2xl p-8 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-accent-harvest text-xs font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>{copy.network.selectedDistrict}</span>
              </div>

              <h3 className="text-3xl font-bold text-white mb-1">
                {isBn ? selectedDistrict.nameBn : selectedDistrict.nameEn}
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                বিভাগ: {isBn ? selectedDistrict.divisionBn : selectedDistrict.divisionEn}
              </p>

              <div className="p-4 rounded-xl bg-white/10 border border-white/15 mb-6 text-xs text-slate-200 flex items-start gap-3">
                <Info className="w-5 h-5 text-accent-harvest shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-1">{copy.network.legendPlanned}</span>
                  <p>{copy.network.status}</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/15 flex flex-col gap-3">
              <span className="text-xs text-slate-300">
                {isBn ? "এই এলাকার জন্য আপনার আগ্রহ জানান:" : "Express interest for this district:"}
              </span>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link
                  href={`/${locale}/farmers?district=${selectedDistrict.id}`}
                  className="btn-primary !min-h-[42px] !py-2 !px-4 text-xs font-bold flex-1 text-center"
                >
                  {copy.common.farmerCta}
                </Link>
                <Link
                  href={`/${locale}/partners?district=${selectedDistrict.id}&type=hub`}
                  className="btn-secondary !min-h-[42px] !py-2 !px-4 text-xs font-bold flex-1 text-center !bg-white/15 !text-white !border-white/30 hover:!bg-white hover:!text-brand-navy"
                >
                  হাব পার্টনার
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}