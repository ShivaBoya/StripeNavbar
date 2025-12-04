import React from "react";
import { navbarItems } from "../../data/navbarData";
import MegaMenu from "../MegaMenu/MegaMenu";
import MobileMenu from "../MobileMenu/MobileMenu";
import * as Icons from "lucide-react";
import useClickAway from "../../utils/useClickAway";

export default function Navbar() {
  const [open, setOpen] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  useClickAway(containerRef, () => setOpen(null));

  // keyboard: Esc to close
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(null); setMobileOpen(false); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // subtle morphing: track current sections for animation (simple crossfade)
  const currentSections = navbarItems.find(it => it.menu === open)?.sections ?? null;

  return (
    <header className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <div className="text-2xl font-bold text-white">Logo</div>
            <nav className="hidden md:flex gap-2 items-center" aria-label="Main navigation">
              {navbarItems.map(item => (
                <div key={item.menu} ref={item.menu === open ? containerRef : null} className="relative">
                  {item.menu === "Solutions" ? (
                    <button
                      onMouseEnter={() => setOpen("Solutions")}
                      onMouseLeave={() => setOpen(null)}
                      onFocus={() => setOpen("Solutions")}
                      onBlur={() => setOpen(null)}
                      aria-haspopup="true"
                      aria-expanded={open === "Solutions"}
                      className="px-3 py-2 rounded-md inline-flex items-center gap-1 bg-transparent text-white hover:bg-white/10 transition-smooth"
                    >
                      <span>{item.menu}</span>
                      <Icons.ChevronDown className={`w-4 h-4 transition-transform ${open === "Solutions" ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <a href={item.url} className="px-3 py-2 rounded-md text-white hover:bg-white/10">{item.menu}</a>
                  )}

                  {/* floating panel */}
                  {item.menu === "Solutions" && open === "Solutions" && item.sections && (
                    <div
                      onMouseEnter={() => setOpen("Solutions")}
                      onMouseLeave={() => setOpen(null)}
                      className="absolute left-0 mt-3 w-screen flex justify-center px-4"
                      style={{ pointerEvents: "auto" }}
                    >
                      {/* caret */}
                      <div className="menu-caret" />
                      <div className="mt-1">
                        <div className="transition-smooth transform origin-top">
                          <MegaMenu sections={item.sections} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex gap-2">
              <a href="/signin" className="text-white">Sign in</a>
              <a href="/signup" className="px-3 py-2 rounded-md bg-white text-slate-900">Start now</a>
              <a href="/contact" className="px-3 py-2 rounded-md border border-white/30 text-white">Contact sales</a>
            </div>

            <button className="md:hidden p-2 rounded-md text-white" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <Icons.Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} items={navbarItems} />
    </header>
  );
}
