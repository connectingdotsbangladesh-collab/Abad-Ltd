import React from "react";
import { SiteCopy } from "@/lib/types";
import { Target, Award, Cpu } from "lucide-react";

interface GoalStripProps {
  copy: SiteCopy;
}

export function GoalStrip({ copy }: GoalStripProps) {
  const cards = copy.home.objectiveCards;
  const icons = [Target, Award, Cpu];

  return (
    <section className="bg-brand-navy py-8 border-y border-slate-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = icons[i] || Target;
            return (
              <div
                key={card.id}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-green/20 border border-brand-green/40 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-accent-harvest" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {card.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium">
                    {card.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}