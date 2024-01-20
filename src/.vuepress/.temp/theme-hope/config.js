import { defineClientConfig } from "@vuepress/client";
import { VPLink } from "/Users/yeekit/Documents/workspace/VuePress/CarVerse/node_modules/.pnpm/vuepress-shared@2.0.0-rc.5_vuepress@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "/Users/yeekit/Documents/workspace/VuePress/CarVerse/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.5_flowchart.ts@3.0.0_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineAutoCatalogGetter } from "/Users/yeekit/Documents/workspace/VuePress/CarVerse/node_modules/.pnpm/vuepress-plugin-auto-catalog@2.0.0-rc.5_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-auto-catalog/lib/client/index.js"
import { h } from "vue"

import "/Users/yeekit/Documents/workspace/VuePress/CarVerse/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.5_flowchart.ts@3.0.0_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineAutoCatalogGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);
    // provide VPLink as global component
    app.component("VPLink", VPLink);


  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
});