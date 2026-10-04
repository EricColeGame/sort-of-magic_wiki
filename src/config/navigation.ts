type NavigationItem = {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "levels", path: "/levels", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "tips", path: "/tips", isContentType: true },
  { key: "controls", path: "/controls", isContentType: true },
  { key: "updates", path: "/updates", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
