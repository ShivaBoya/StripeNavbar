export type NavSectionItem = {
  label: string;
  icon: string;
  url: string;
  external?: boolean;
};

export type NavSection = {
  title: string;
  items: NavSectionItem[];
};

export type NavItem = {
  menu: string;
  url?: string;
  sections?: NavSection[];
};
