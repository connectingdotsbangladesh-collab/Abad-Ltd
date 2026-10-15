import React from "react";
import { SiteCopy } from "@/lib/types";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ProblemsSectionProps {
  copy: SiteCopy;
}

export function ProblemsSection({ copy }: ProblemsSectionProps) {
  const items = copy.home.problemSolutions;

  return (
    <section className="py-20 bg-canvas">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
            চ্যালেঞ্জ ও সমাধান
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-2">
            {copy.home.problemsHeading}
          </h2>
          <p className="text-base text-muted mt-3">
            {copy.home.problemsIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-border shadow-soft flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-danger text-sm font-semibold mb-3">
                  <span className="w-2 h-2 rounded-full bg-danger" />
                  <span>বর্তমান সংকট:</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-ink mb-6">
                  {item.problem}
                </h3>
              </div>

              <div className="pt-5 border-t border-border/60">
                <div className="flex items-center gap-2 text-brand-green text-sm font-semibold mb-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  <span>আবাদ-এর পরিকল্পিত সমাধান:</span>
                </div>
                <p className="text-base font-semibold text-brand-navy">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}