import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shanghai week",
    short_name: "Shanghai",
    start_url: "/",
    display: "standalone",
    background_color: "#f3eee6",
    theme_color: "#f3eee6",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
