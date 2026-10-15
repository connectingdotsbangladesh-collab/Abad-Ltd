"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="py-4">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-desc-${item.id}`}
              className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-lg py-1"
            >
              <span className="text-lg font-semibold text-brand-navy group-hover:text-brand-green transition-colors">
                {item.title}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-muted shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-brand-green" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div
                id={`accordion-desc-${item.id}`}
                className="mt-3 text-muted text-base leading-relaxed pr-8"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}