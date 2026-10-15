"use client";

import React from "react";
import { LeadKind, Locale, SiteCopy, District } from "@/lib/types";
import { LeadFormData } from "./types";

interface KindFieldsProps {
  kind: LeadKind;
  locale: Locale;
  copy: SiteCopy;
  formData: LeadFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  errors: Record<string, string>;
}

export function KindFields({ kind, locale, copy, formData, handleChange, errors }: KindFieldsProps) {
  const isBn = locale === "bn";

  if (kind === "farmer") {
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="field-farmType" className="block text-sm font-semibold text-brand-navy mb-1.5">
              {isBn ? "কৃষিকাজের ধরন" : "Farming Activity"} <span className="text-danger">*</span>
            </label>
            <select
              id="field-farmType"
              name="farmType"
              value={formData.farmType}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-border text-ink bg-canvas/30 focus:bg-white text-base"
            >
              <option value="crops">{isBn ? "ফসল" : "Crops"}</option>
              <option value="vegetables-fruit">{isBn ? "সবজি ও ফল" : "Vegetables & Fruit"}</option>
              <option value="livestock-dairy">{isBn ? "গবাদিপশু ও দুগ্ধ" : "Livestock & Dairy"}</option>
              <option value="fish">{isBn ? "মাছ" : "Fish"}</option>
              <option value="mixed">{isBn ? "মিশ্র কৃষি" : "Mixed Farming"}</option>
              <option value="other">{isBn ? "অন্যান্য" : "Other"}</option>
            </select>
          </div>

          <div>
            <label htmlFor="field-upazila" className="block text-sm font-semibold text-brand-navy mb-1.5">
              {isBn ? "উপজেলা / এলাকা" : "Upazila / Area"} <span className="text-xs text-muted font-normal">({copy.common.optional})</span>
            </label>
            <input
              id="field-upazila"
              name="upazila"
              type="text"
              value={formData.upazila}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-border text-ink bg-canvas/30 focus:bg-white text-base"
              placeholder={isBn ? "উদা: শ্রীপুর" : "e.g. Sreepur"}
            />
          </div>
        </div>

        {formData.farmType === "other" && (
          <div>
            <label htmlFor="field-farmTypeOther" className="block text-sm font-semibold text-brand-navy mb-1.5">
              {isBn ? "অন্যান্য হলে বিস্তারিত জানান" : "Describe other activity"} <span className="text-danger">*</span>
            </label>
            <input
              id="field-farmTypeOther"
              name="farmTypeOther"
              type="text"
              value={formData.farmTypeOther}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-border text-ink bg-canvas/30 focus:bg-white text-base"
            />
          </div>
        )}

        <div>
          <label htmlFor="field-products" className="block text-sm font-semibold text-brand-navy mb-1.5">
            {isBn ? "পণ্য বা উৎপাদনের বিবরণ" : "Products or Produce Details"}
          </label>
          <input
            id="field-products"
            name="products"
            type="text"
            value={formData.products}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-border text-ink bg-canvas/30 focus:bg-white text-base"
            placeholder={isBn ? "উদা: আম, ধান, দুগ্ধ খামার" : "e.g. Mango, Rice, Dairy"}
          />
        </div>
      </>
    );
  }

  if (kind === "buyer") {
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="field-organization" className="block text-sm font-semibold text-brand-navy mb-1.5">
              {isBn ? "প্রতিষ্ঠানের নাম" : "Organization Name"} <span className="text-danger">*</span>
            </label>
            <input
              id="field-organization"
              name="organization"
              type="text"
              required
              value={formData.organization}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-border text-ink bg-canvas/30 focus:bg-white text-base"
            />
          </div>

          <div>
            <label htmlFor="field-buyerType" className="block text-sm font-semibold text-brand-navy mb-1.5">
              {isBn ? "ক্রেতার ধরন" : "Buyer Type"} <span className="text-danger">*</span>
            </label>
            <select
              id="field-buyerType"
              name="buyerType"
              value={formData.buyerType}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-border text-ink bg-canvas/30 focus:bg-white text-base"
            >
              <option value="restaurant">{isBn ? "রেস্টুরেন্ট" : "Restaurant"}</option>
              <option value="supermarket">{isBn ? "সুপারশপ" : "Supermarket"}</option>
              <option value="wholesaler">{isBn ? "পাইকার" : "Wholesaler"}</option>
              <option value="institution">{isBn ? "প্রাতিষ্ঠানিক ক্রেতা" : "Institution"}</option>
              <option value="other">{isBn ? "অন্যান্য" : "Other"}</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label htmlFor="field-productCategory" className="block text-sm font-semibold text-brand-navy mb-1.5">
              {isBn ? "পণ্যের বিভাগ" : "Product Category"} <span className="text-danger">*</span>
            </label>
            <select
              id="field-productCategory"
              name="productCategory"
              value={formData.productCategory}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-border text-ink bg-canvas/30 focus:bg-white text-base"
            >
              <option value="produce">{isBn ? "সবজি ও ফল" : "Vegetables & Fruit"}</option>
              <option value="grains">{isBn ? "শস্য" : "Grains"}</option>
              <option value="livestock-dairy">{isBn ? "গবাদিপশু ও দুগ্ধ" : "Livestock & Dairy"}</option>
              <option value="fish">{isBn ? "মাছ" : "Fish"}</option>
              <option value="inputs">{isBn ? "কৃষি উপকরণ" : "Agricultural Inputs"}</option>
              <option value="other">{isBn ? "অন্যান্য" : "Other"}</option>
            </select>
          </div>

          <div>
            <label htmlFor="field-quantity" className="block text-sm font-semibold text-brand-navy mb-1.5">
              {isBn ? "আনুমানিক পরিমাণ" : "Indicative Quantity"}
            </label>
            <input
              id="field-quantity"
              name="quantity"
              type="number"
              min="1"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-border text-ink bg-canvas/30 focus:bg-white text-base"
              placeholder="500"
            />
          </div>

          <div>
            <label htmlFor="field-quantityUnit" className="block text-sm font-semibold text-brand-navy mb-1.5">
              {isBn ? "পরিমাণের একক" : "Unit"}
            </label>
            <select
              id="field-quantityUnit"
              name="quantityUnit"
              value={formData.quantityUnit}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-border text-ink bg-canvas/30 focus:bg-white text-base"
            >
              <option value="kg">{isBn ? "কেজি" : "kg"}</option>
              <option value="tonne">{isBn ? "টন" : "tonne"}</option>
              <option value="litre">{isBn ? "লিটার" : "litre"}</option>
              <option value="piece">{isBn ? "পিস" : "piece"}</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="field-specification" className="block text-sm font-semibold text-brand-navy mb-1.5">
            {isBn ? "পণ্যের মান ও প্রয়োজনের বিবরণ" : "Product Specification & Requirements"} <span className="text-danger">*</span>
          </label>
          <textarea
            id="field-specification"
            name="specification"
            rows={3}
            required
            value={formData.specification}
            onChange={handleChange}
            aria-invalid={Boolean(errors.specification)}
            className="w-full px-4 py-2.5 rounded-lg border border-border text-ink bg-canvas/30 focus:bg-white text-base"
            placeholder={isBn ? "পণ্যের মান, গ্রেড, প্যাকেজিং ও ডেলিভারি এলাকার প্রয়োজনীয় তথ্য লিখুন..." : "Describe quality grade, packaging and delivery requirements..."}
          />
        </div>
      </>
    );
  }

  if (kind === "hub") {
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="field-organization" className="block text-sm font-semibold text-brand-navy mb-1.5">
              {isBn ? "প্রতিষ্ঠান / উদ্যোগের নাম" : "Business / Enterprise Name"} <span className="text-xs text-muted font-normal">({copy.common.optional})</span>
            </label>
            <input
              id="field-organization"
              name="organization"
              type="text"
              value={formData.organization}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-border text-ink bg-canvas/30 focus:bg-white text-base"
            />
          </div>

          <div>
            <label htmlFor="field-upazila" className="block text-sm font-semibold text-brand-navy mb-1.5">
              {isBn ? "উপজেলা / এলাকা" : "Upazila / Area"}
            </label>
            <input
              id="field-upazila"
              name="upazila"
              type="text"
              value={formData.upazila}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-border text-ink bg-canvas/30 focus:bg-white text-base"
            />
          </div>
        </div>

        <div>
          <label htmlFor="field-collaborationInterest" className="block text-sm font-semibold text-brand-navy mb-1.5">
            {isBn ? "সহযোগিতার আগ্রহ ও সক্ষমতা" : "Collaboration Interest & Capacity"} <span className="text-danger">*</span>
          </label>
          <textarea
            id="field-collaborationInterest"
            name="collaborationInterest"
            rows={3}
            required
            value={formData.collaborationInterest}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-border text-ink bg-canvas/30 focus:bg-white text-base"
            placeholder={isBn ? "আপনার গুদাম, স্টোরেজ বা পরিবহন সুবিধা সম্পর্কে সংক্ষেপে জানান..." : "Describe storage space, facilities or transport capabilities..."}
          />
        </div>
      </>
    );
  }

  if (kind === "partner" || kind === "sponsor") {
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="field-organization" className="block text-sm font-semibold text-brand-navy mb-1.5">
              {isBn ? "প্রতিষ্ঠানের নাম" : "Organization Name"} <span className="text-danger">*</span>
            </label>
            <input
              id="field-organization"
              name="organization"
              type="text"
              required
              value={formData.organization}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-border text-ink bg-canvas/30 focus:bg-white text-base"
            />
          </div>

          {kind === "partner" && (
            <div>
              <label htmlFor="field-partnerType" className="block text-sm font-semibold text-brand-navy mb-1.5">
                {isBn ? "পার্টনারশিপের ধরন" : "Partnership Type"} <span className="text-danger">*</span>
              </label>
              <select
                id="field-partnerType"
                name="partnerType"
                value={formData.partnerType}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-border text-ink bg-canvas/30 focus:bg-white text-base"
              >
                <option value="hub">{isBn ? "হাব / ডিলার" : "Hub / Dealer"}</option>
                <option value="logistics">{isBn ? "লজিস্টিকস" : "Logistics"}</option>
                <option value="technology">{isBn ? "উপকরণ / প্রযুক্তি" : "Inputs / Technology"}</option>
                <option value="finance">{isBn ? "অর্থায়ন সহযোগিতা" : "Funding Collaboration"}</option>
                <option value="sponsor">{isBn ? "স্পন্সরশিপ" : "Sponsorship"}</option>
                <option value="other">{isBn ? "অন্যান্য" : "Other"}</option>
              </select>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="field-collaborationInterest" className="block text-sm font-semibold text-brand-navy mb-1.5">
            {isBn ? "সহযোগিতার আগ্রহের বিবরণ" : "Collaboration Details"} <span className="text-danger">*</span>
          </label>
          <textarea
            id="field-collaborationInterest"
            name="collaborationInterest"
            rows={3}
            required
            value={formData.collaborationInterest}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-border text-ink bg-canvas/30 focus:bg-white text-base"
            placeholder={isBn ? "কী ধরনের যৌথ উদ্যোগ বা পার্টনারশিপে আলোচনা করতে চান লিখুন..." : "Describe potential areas of partnership..."}
          />
        </div>
      </>
    );
  }

  // Kind === "contact"
  return (
    <>
      <div>
        <label htmlFor="field-topic" className="block text-sm font-semibold text-brand-navy mb-1.5">
          {isBn ? "বিষয়" : "Subject"}
        </label>
        <select
          id="field-topic"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-lg border border-border text-ink bg-canvas/30 focus:bg-white text-base"
        >
          <option value="general">{isBn ? "সাধারণ অনুসন্ধান" : "General Enquiry"}</option>
          <option value="farmer">{isBn ? "কৃষক সংশ্লিষ্ট" : "Farmer Related"}</option>
          <option value="buyer">{isBn ? "ব্যবসায়িক ক্রেতা" : "Business Sourcing"}</option>
          <option value="hub">{isBn ? "হাব পার্টনার" : "Hub Partnership"}</option>
          <option value="partnership">{isBn ? "অন্যান্য পার্টনারশিপ" : "Other Partnership"}</option>
          <option value="sponsorship">{isBn ? "স্পন্সরশিপ" : "Sponsorship"}</option>
        </select>
      </div>

      <div>
        <label htmlFor="field-message" className="block text-sm font-semibold text-brand-navy mb-1.5">
          {isBn ? "বার্তা" : "Message"} <span className="text-danger">*</span>
        </label>
        <textarea
          id="field-message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          className="w-full px-4 py-2.5 rounded-lg border border-border text-ink bg-canvas/30 focus:bg-white text-base"
          placeholder={isBn ? "আপনার জিজ্ঞাসা বা প্রস্তাব সংক্ষেপে লিখুন..." : "Write your query or message..."}
        />
      </div>
    </>
  );
}