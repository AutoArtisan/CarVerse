import { defineClientConfig } from "@vuepress/client";
import CodeTabs from "/Users/yeekit/Documents/workspace/VuePress/CarVerse/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_flowchart.ts@3.0.0_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/Users/yeekit/Documents/workspace/VuePress/CarVerse/node_modules/.pnpm/vuepress-shared@2.0.0-rc.5_vuepress@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/Users/yeekit/Documents/workspace/VuePress/CarVerse/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_flowchart.ts@3.0.0_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "/Users/yeekit/Documents/workspace/VuePress/CarVerse/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_flowchart.ts@3.0.0_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/yeekit/Documents/workspace/VuePress/CarVerse/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_flowchart.ts@3.0.0_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "/Users/yeekit/Documents/workspace/VuePress/CarVerse/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_flowchart.ts@3.0.0_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "/Users/yeekit/Documents/workspace/VuePress/CarVerse/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_flowchart.ts@3.0.0_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import { useHint } from "/Users/yeekit/Documents/workspace/VuePress/CarVerse/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_flowchart.ts@3.0.0_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "/Users/yeekit/Documents/workspace/VuePress/CarVerse/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_flowchart.ts@3.0.0_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Mermaid from "/Users/yeekit/Documents/workspace/VuePress/CarVerse/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_flowchart.ts@3.0.0_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "/Users/yeekit/Documents/workspace/VuePress/CarVerse/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_flowchart.ts@3.0.0_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import Tabs from "/Users/yeekit/Documents/workspace/VuePress/CarVerse/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_flowchart.ts@3.0.0_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("FlowChart", FlowChart);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});
