export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Sort of Magic Wiki",
  shortName: "Sort of Magic",
  logoText: "SM",
  tagline: "Cozy Magic School Sorting Guides, Spells & Co-op Tips",
  description: "Explore Sort of Magic Wiki with guides, spell tips, room walkthroughs, co-op strategies, and sorting advice for this cozy magical organization adventure game.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sort-of-magic.wiki",
  supportEmail: "support@sort-of-magic.wiki",
  gameUrl: "https://store.steampowered.com/app/4398290/Sort_of_Magic/",
  heroVideoId: "tcarG5RGIXU", // Sort of Magic - Announcement Trailer (Riwon)
  social: {
    youtube: "https://www.youtube.com/@RiwonGames",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
