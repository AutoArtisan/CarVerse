import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/CarVerse/",

  lang: "zh-CN",
  title: "CarVerse（车韵）",
  description: "vuepress-theme-hope 的文档演示",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      autoSuggestions: true,
    }),
  ],


}
);
