import type { GetEntry, Prefetcher, Prerenderer } from "wakuwork/server";

export const getEntry: GetEntry = async (id) => {
  switch (id) {
    case "App":
      return import("./src/App.js");
    case "ProductCarousel":
      return import("./src/ProductCarousel.js");
    default:
      throw new Error(`Unknown entry id: ${id}`);
  }
};

export const prefetcher: Prefetcher = async (path) => {
  switch (path) {
    case "/":
      return {
        entryItems: [
          ["App", { name: "Wakuwork" }],
          ["ProductCarousel", { color: "green" }],
        ],
        clientModules: [],
      };
    default:
      return {};
  }
};

export const prerenderer: Prerenderer = async () => {
  return {
    entryItems: [["App", { name: "Customer" }]],
    paths: ["/"],
  };
};
