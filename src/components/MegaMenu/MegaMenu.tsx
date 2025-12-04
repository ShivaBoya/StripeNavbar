import React from "react";
import type { NavSection } from "../../types";
import { Icon } from "../IconMap";

export default function MegaMenu({ sections }: { sections: NavSection[] }) {
  return (
    <div
      role="menu"
      aria-label="Solutions"
      className="bg-white rounded-xl shadow-lg p-6 transition-smooth ring-0"
    >
      <div className="grid grid-cols-2 gap-8">
        {sections.map((sec) => (
          <div key={sec.title} className="">
            <h4 className="text-xs font-semibold text-slate-500 mb-4">{sec.title}</h4>

            {/* 2-column internal grid for items */}
            <ul className="grid grid-cols-2 gap-3">
              {sec.items.map((it) => (
                <li key={it.label}>
                  <a
                    href={it.url}
                    target={it.external ? "_blank" : "_self"}
                    rel={it.external ? "noreferrer" : undefined}
                    className="flex items-start gap-3 p-2 rounded-md hover:bg-slate-50 transition-smooth group"
                  >
                    <div className="flex-none text-slate-700 mt-0.5">
                      <Icon name={it.icon} className="w-5 h-5 group-hover:text-slate-800" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-slate-900">{it.label}</div>
                      <div className="text-xs text-slate-500 mt-0.5">Short description about {it.label}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
