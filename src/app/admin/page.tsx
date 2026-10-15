"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { StoredLead } from "@/lib/types";
import { dataMode, isSupabaseConfigured } from "@/lib/config";
import {
  ShieldAlert,
  Search,
  Filter,
  Download,
  CheckCircle2,
  Clock,
  UserCheck,
  XCircle,
  FileText,
  X,
  ChevronRight,
  ArrowLeft,
  Info,
} from "lucide-react";

export default function AdminPage() {
  const [leads, setLeads] = useState<StoredLead[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<StoredLead | null>(null);
  const [statusFilter, setStatusFilter] = useState("");
  const [kindFilter, setKindFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [noteInput, setNoteInput] = useState("");
  const [savingNote, setSavingNote] = useState(false);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (statusFilter) params.set("status", statusFilter);
      if (kindFilter) params.set("kind", kindFilter);
      if (searchTerm) params.set("search", searchTerm);

      const res = await fetch(`/api/admin/leads?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setLeads(data.leads || []);
        setTotal(data.total || 0);
      }
    } catch {
      // Failed to load leads
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [statusFilter, kindFilter, searchTerm]);

  useEffect(() => {
    if (selectedLead) {
      setNoteInput(selectedLead.internal_notes || "");
    }
  }, [selectedLead]);

  const handleStatusChange = async (leadId: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/admin/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === leadId ? { ...l, status: newStatus as any } : l))
        );
        if (selectedLead && selectedLead.id === leadId) {
          setSelectedLead((prev) => (prev ? { ...prev, status: newStatus as any } : null));
        }
      }
    } catch {
      alert("Status update failed");
    }
  };

  const handleSaveNote = async () => {
    if (!selectedLead) return;
    try {
      setSavingNote(true);
      const res = await fetch(`/api/admin/leads/${selectedLead.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ internal_notes: noteInput }),
      });
      if (res.ok) {
        setSelectedLead((prev) => (prev ? { ...prev, internal_notes: noteInput } : null));
        setLeads((prev) =>
          prev.map((l) => (l.id === selectedLead.id ? { ...l, internal_notes: noteInput } : l))
        );
      }
    } catch {
      alert("Failed to save note");
    } finally {
      setSavingNote(false);
    }
  };

  const statusBadges: Record<string, { label: string; color: string }> = {
    new: { label: "নতুন", color: "bg-blue-100 text-blue-800 border-blue-200" },
    contacted: { label: "যোগাযোগকৃত", color: "bg-amber-100 text-amber-800 border-amber-200" },
    qualified: { label: "যাচাইকৃত", color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
    closed: { label: "সম্পন্ন", color: "bg-slate-100 text-slate-700 border-slate-200" },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Top Admin Navigation */}
      <header className="bg-brand-navy text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-4">
          <Link href="/bn" className="text-xs text-slate-300 hover:text-white flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>মূল ওয়েবসাইটে ফিরুন</span>
          </Link>
          <span className="text-slate-600">|</span>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-slate-700 bg-brand-navy-deep relative shrink-0">
              <Image
                src="/brand/abad-logo.jpg"
                alt="Abad Limited"
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-lg font-bold">আবাদ লিড অ্যাডমিনিস্ট্রেশন</h1>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <span className="px-2.5 py-1 rounded-md bg-white/10 text-slate-200 font-mono">
            ভুমিকা: অ্যাডমিন
          </span>
          <a
            href="/api/admin/leads/export"
            className="btn-secondary !min-h-[36px] !py-1.5 !px-3 !bg-white/10 !text-white !border-white/20 hover:!bg-white hover:!text-brand-navy flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            <span>CSV এক্সপোর্ট</span>
          </a>
        </div>
      </header>

      {/* Demo / Local Notice */}
      {!isSupabaseConfigured && (
        <div className="bg-amber-500/10 border-b border-amber-500/20 px-6 py-3 text-xs text-amber-900 flex items-center gap-2">
          <Info className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>লোকাল ডেমো প্রিভিউ:</strong> ডাটাবেজ ক্রেডেনশিয়াল সংযুক্ত না থাকায় সিস্টেমটি মেমোরি ডেটার ওপর চলছে। কোনো আসল ভিজিটর তথ্য এখানে প্রদর্শিত বা সংরক্ষিত নেই।
          </span>
        </div>
      )}

      {/* Main Admin Content */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto p-6 flex flex-col gap-6">
        {/* Filters and Search Bar */}
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-[280px]">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="নাম, প্রতিষ্ঠান বা রেফারেন্স খুঁজুন..."
                className="w-full pl-9 pr-4 py-1.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={kindFilter}
              onChange={(e) => setKindFilter(e.target.value)}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
            >
              <option value="">সব ক্যাটাগরি</option>
              <option value="farmer">কৃষক</option>
              <option value="buyer">ব্যবসায়িক ক্রেতা</option>
              <option value="hub">হাব পার্টনার</option>
              <option value="partner">পার্টনারশিপ</option>
              <option value="sponsor">স্পন্সর</option>
              <option value="contact">সাধারণ যোগাযোগ</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
            >
              <option value="">সব স্ট্যাটাস</option>
              <option value="new">নতুন</option>
              <option value="contacted">যোগাযোগকৃত</option>
              <option value="qualified">যাচাইকৃত</option>
              <option value="closed">সম্পন্ন</option>
            </select>
          </div>
        </div>

        {/* Lead Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="py-3 px-4">রেফারেন্স</th>
                  <th className="py-3 px-4">তারিখ</th>
                  <th className="py-3 px-4">ক্যাটাগরি</th>
                  <th className="py-3 px-4">নাম ও প্রতিষ্ঠান</th>
                  <th className="py-3 px-4">মোবাইল / জেলা</th>
                  <th className="py-3 px-4">স্ট্যাটাস</th>
                  <th className="py-3 px-4 text-right">কার্যক্রম</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr>
                    <td colSpan={7} className="py-10 text-center text-slate-400">
                      লোড হচ্ছে...
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-10 text-center text-slate-400">
                      কোনো অনুসন্ধান পাওয়া যায়নি
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => {
                    const badge = statusBadges[lead.status] || statusBadges.new;
                    return (
                      <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-4 font-mono font-bold text-xs text-brand-navy">
                          {lead.reference}
                        </td>
                        <td className="py-3 px-4 text-xs text-slate-500">
                          {new Date(lead.created_at).toLocaleDateString("bn-BD")}
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-700 capitalize">
                            {lead.kind}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-semibold text-slate-800">{lead.name}</div>
                          {lead.organization && (
                            <div className="text-xs text-slate-500">{lead.organization}</div>
                          )}
                        </td>
                        <td className="py-3 px-4 text-xs">
                          <div className="font-mono">{lead.phone || "-"}</div>
                          <div className="text-slate-400 capitalize">{lead.district_id || "-"}</div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${badge.color}`}>
                            {badge.label}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button
                            onClick={() => setSelectedLead(lead)}
                            className="text-xs font-bold text-brand-green hover:underline"
                          >
                            বিস্তারিত দেখুন →
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Detail Inspection Drawer Modal */}
      {selectedLead && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-end bg-black/40 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-lg h-full bg-white shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {selectedLead.reference}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {selectedLead.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status Update Quick Bar */}
              <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-slate-600 block mb-2">স্ট্যাটাস পরিবর্তন:</span>
                <div className="grid grid-cols-2 gap-2">
                  {(["new", "contacted", "qualified", "closed"] as const).map((st) => (
                    <button
                      key={st}
                      onClick={() => handleStatusChange(selectedLead.id, st)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                        selectedLead.status === st
                          ? "bg-brand-navy text-white border-brand-navy"
                          : "bg-white text-slate-700 border-slate-200 hover:border-brand-green"
                      }`}
                    >
                      {statusBadges[st].label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submission Fields */}
              <div className="space-y-4 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  জমা দেওয়া তথ্য:
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-50">
                    <span className="text-slate-400 block mb-0.5">ক্যাটাগরি</span>
                    <strong className="capitalize text-slate-800">{selectedLead.kind}</strong>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50">
                    <span className="text-slate-400 block mb-0.5">মোবাইল</span>
                    <strong className="font-mono text-slate-800">{selectedLead.phone || "-"}</strong>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50">
                    <span className="text-slate-400 block mb-0.5">ইমেইল</span>
                    <strong className="text-slate-800">{selectedLead.email || "-"}</strong>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50">
                    <span className="text-slate-400 block mb-0.5">জেলা</span>
                    <strong className="capitalize text-slate-800">{selectedLead.district_id || "-"}</strong>
                  </div>
                </div>

                {/* Additional Dynamic Fields */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-2">
                  {Object.entries(selectedLead.fields || {}).map(([k, v]) => {
                    if (!v || typeof v === "object") return null;
                    return (
                      <div key={k} className="flex justify-between border-b border-slate-200/50 pb-1.5">
                        <span className="text-slate-500 capitalize">{k}:</span>
                        <span className="font-medium text-slate-800 max-w-[260px] text-right truncate">
                          {String(v)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Internal Notes Editor */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  অভ্যন্তরীণ নোট:
                </h4>
                <textarea
                  rows={3}
                  value={noteInput}
                  onChange={(e) => setNoteInput(e.target.value)}
                  placeholder="এই লিড সম্পর্কিত অভ্যন্তরীণ নোট লিখুন..."
                  className="w-full p-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-green"
                />
                <button
                  onClick={handleSaveNote}
                  disabled={savingNote}
                  className="mt-2 btn-primary !min-h-[36px] !py-1.5 !px-4 text-xs font-bold"
                >
                  {savingNote ? "সংরক্ষণ হচ্ছে..." : "নোট সংরক্ষণ করুন"}
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 text-right">
              <button
                onClick={() => setSelectedLead(null)}
                className="btn-secondary !min-h-[36px] !py-1.5 !px-4 text-xs font-semibold"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}