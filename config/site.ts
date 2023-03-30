import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
}

export const siteConfig: SiteConfig = {
  name: "Twie",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    // {
    //   title: "Home",
    //   href: "/",
    // },
  ],
  // links: {
  //   twitter: "https://twitter.com/shadcn",
  //   github: "https://github.com/shadcn/ui",
  //   docs: "https://ui.shadcn.com",
  // },
}
