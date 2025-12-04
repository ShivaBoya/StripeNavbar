import React from "react";
import type { NavItem } from "../../types";
import { Icon } from "../IconMap";

export default function MobileMenu({ open, onClose, items }: { open: boolean; onClose: () => void; items: NavItem[]; }) {
  const [solutionsOpen, setSolutionsOpen] = React.useState(false);

  React.useEffect(() => { if (!open) setSolutionsOpen(false); }, [open]);

  return (
    <div className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}>
      <div onClick={onClose} className={`absolute inset-0 bg-black/30 transition-opacity ${open ? "opacity-100" : "opacity-0"}`} />
      <aside className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform ${open ? "translate-x-0" : "translate-x-full"}`} aria-hidden={!open}>
        <div className="p-4 flex items-center justify-between border-b">
          <div className="font-bold text-lg">Logo</div>
          <button aria-label="Close menu" onClick={onClose} className="p-2 rounded-md hover:bg-slate-100">
            <Icon name="credit-card" />
          </button>
        </div>

        {!solutionsOpen ? (
          <nav className="p-4 overflow-auto">
            <ul className="space-y-1">
              {items.map((it) =>
                it.menu === "Solutions" ? (
                  <li key="solutions">
                    <button onClick={() => setSolutionsOpen(true)} className="w-full text-left p-3 rounded-md hover:bg-slate-50 flex items-center justify-between">
                      <span>Solutions</span>
                      <span className="text-slate-400">›</span>
                    </button>
                  </li>
                ) : (
                  <li key={it.menu}>
                    <a href={it.url} className="block p-3 rounded-md hover:bg-slate-50">{it.menu}</a>
                  </li>
                )
              )}
            </ul>
          </nav>
        ) : (
          <div className="p-4 overflow-auto h-full">
            <div className="flex items-center gap-3 mb-4">
              <button onClick={() => setSolutionsOpen(false)} className="p-2 rounded-md hover:bg-slate-100">←</button>
              <h3 className="font-semibold">Solutions</h3>
            </div>

            <div className="space-y-6">
              {items.find(x => x.menu === "Solutions")?.sections?.map((sec) => (
                <div key={sec.title}>
                  <h4 className="text-sm font-semibold mb-2">{sec.title}</h4>
                  <ul className="space-y-2">
                    {sec.items.map(it => (
                      <li key={it.label}>
                        <a href={it.url} className="flex items-start gap-3 p-2 rounded-md hover:bg-slate-50">
                          <Icon name={it.icon} />
                          <div>
                            <div className="font-medium text-sm">{it.label}</div>
                            <div className="text-xs text-slate-500">Short description</div>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
              <div className="flex gap-2">
                <a href="/signup" className="flex-1 text-center py-2 rounded-md border">Start now</a>
                <a href="/contact" className="flex-1 text-center py-2 rounded-md bg-slate-900 text-white">Contact sales</a>
              </div>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
