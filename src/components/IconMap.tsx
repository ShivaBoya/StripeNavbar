import React from "react";
import * as Lucide from "lucide-react";

const map: Record<string, any> = {
  building: Lucide.Building2,
  rocket: Lucide.Rocket,
  crypto: Lucide.Wallet,
  mobile: Lucide.Smartphone,
  cart: Lucide.ShoppingCart,
  store: Lucide.Store,
  layers: Lucide.Layers,
  grid: Lucide.LayoutGrid,
  chart: Lucide.BarChart3,
  cloud: Lucide.Cloud,
  globe: Lucide.Globe,
  ai: Lucide.Sparkles,
  play: Lucide.Play,
  creator: Lucide.Lightbulb,
  heart: Lucide.Heart,
  plane: Lucide.Plane,
  bag: Lucide.ShoppingBag,
  umbrella: Lucide.Umbrella,
  marketplace: Lucide.Package,
  partners: Lucide.Users,
  "credit-card": Lucide.CreditCard,
};

export function Icon({ name, className = "w-5 h-5 text-slate-600" }: { name: string; className?: string }) {
  const Cmp = map[name] ?? Lucide.Sparkles;
  return <Cmp className={className} />;
}
