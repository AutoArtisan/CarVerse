<template><div><p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>
<p>你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>
<!-- more -->
<h2 id="markdown-介绍" tabindex="-1"><a class="header-anchor" href="#markdown-介绍" aria-hidden="true">#</a> Markdown 介绍</h2>
<p>如果你是一个新手，还不会编写 Markdown，请先阅读 <a href="https://theme-hope.vuejs.press/zh/cookbook/markdown/" target="_blank" rel="noopener noreferrer">Markdown 介绍<ExternalLinkIcon/></a> 和 <a href="https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html" target="_blank" rel="noopener noreferrer">Markdown 演示<ExternalLinkIcon/></a>。</p>
<h2 id="markdown-配置" tabindex="-1"><a class="header-anchor" href="#markdown-配置" aria-hidden="true">#</a> Markdown 配置</h2>
<p>VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>Frontmatter 是 VuePress 中很重要的一个概念，如果你不了解它，你需要阅读 <a href="https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#front-matter" target="_blank" rel="noopener noreferrer">Frontmatter 介绍<ExternalLinkIcon/></a>。</p>
</div>
<h2 id="markdown-扩展" tabindex="-1"><a class="header-anchor" href="#markdown-扩展" aria-hidden="true">#</a> Markdown 扩展</h2>
<p>VuePress 会使用 <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it<ExternalLinkIcon/></a> 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 <a href="https://github.com/markdown-it/markdown-it#syntax-extensions" target="_blank" rel="noopener noreferrer">语法扩展<ExternalLinkIcon/></a> 。</p>
<h3 id="vuepress-扩展" tabindex="-1"><a class="header-anchor" href="#vuepress-扩展" aria-hidden="true">#</a> VuePress 扩展</h3>
<p>为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。</p>
<p>关于这些扩展，请阅读 <a href="https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html" target="_blank" rel="noopener noreferrer">VuePress 中的 Markdown 扩展<ExternalLinkIcon/></a>。</p>
<h3 id="主题扩展" tabindex="-1"><a class="header-anchor" href="#主题扩展" aria-hidden="true">#</a> 主题扩展</h3>
<p>通过 <a href="https://plugin-md-enhance.vuejs.press/zh/" target="_blank" rel="noopener noreferrer"><code v-pre>vuepress-plugin-md-enhance</code><ExternalLinkIcon/></a>，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。</p>
<h4 id="提示容器" tabindex="-1"><a class="header-anchor" href="#提示容器" aria-hidden="true">#</a> 提示容器</h4>
<div v-pre>
<p>安全的在 Markdown 中使用 {{ variable }}。</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">自定义标题</p>
<p>信息容器，包含 <code v-pre>代码</code> 与 <a href="#%E6%8F%90%E7%A4%BA%E5%AE%B9%E5%99%A8">链接</a>。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<div class="hint-container tip">
<p class="hint-container-title">自定义标题</p>
<p>提示容器</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">自定义标题</p>
<p>警告容器</p>
</div>
<div class="hint-container caution">
<p class="hint-container-title">自定义标题</p>
<p>危险容器</p>
</div>
<details class="hint-container details"><summary>自定义标题</summary>
<p>详情容器</p>
</details>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/hint.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h4>
<CodeTabs id="89" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]' :active="2">
<template #title0="{ value, isActive }">pnpm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">npm</template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code-tabs.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="上下角标" tabindex="-1"><a class="header-anchor" href="#上下角标" aria-hidden="true">#</a> 上下角标</h4>
<p>19<sup>th</sup> H<sub>2</sub>O</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/sup-sub.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="自定义对齐" tabindex="-1"><a class="header-anchor" href="#自定义对齐" aria-hidden="true">#</a> 自定义对齐</h4>
<div style="text-align:center">
<p>我是居中的</p>
</div>
<div style="text-align:right">
<p>我在右对齐</p>
</div>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/align.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="attrs" tabindex="-1"><a class="header-anchor" href="#attrs" aria-hidden="true">#</a> Attrs</h4>
<p>一个拥有 ID 的 <strong id="word">单词</strong>。</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/attrs.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注" aria-hidden="true">#</a> 脚注</h4>
<p>此文字有脚注<a href="%E8%BF%99%E6%98%AF%E8%84%9A%E6%B3%A8%E5%86%85%E5%AE%B9">^first</a>.</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/footnote.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="标记" tabindex="-1"><a class="header-anchor" href="#标记" aria-hidden="true">#</a> 标记</h4>
<p>你可以标记 <mark>重要的内容</mark> 。</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/mark.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="任务列表" tabindex="-1"><a class="header-anchor" href="#任务列表" aria-hidden="true">#</a> 任务列表</h4>
<ul>
<li>
<p>[x] 计划 1</p>
</li>
<li>
<p>[ ] 计划 2</p>
</li>
<li>
<p><a href="https://theme-hope.vuejs.press/zh/guide/markdown/tasklist.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></p>
</li>
</ul>
<h3 id="图片增强" tabindex="-1"><a class="header-anchor" href="#图片增强" aria-hidden="true">#</a> 图片增强</h3>
<p>支持为图片设置颜色模式和大小</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/image.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h4>
<VPCard v-bind='{"title":"Mr.Hope","desc":"Where there is light, there is hope","logo":"https://mister-hope.com/logo.svg","link":"https://mister-hope.com","background":"rgba(253, 230, 138, 0.15)"}' /><ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/component.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="导入文件" tabindex="-1"><a class="header-anchor" href="#导入文件" aria-hidden="true">#</a> 导入文件</h4>
<!-- <AutoCatalog /> -->
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/include.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="样式化" tabindex="-1"><a class="header-anchor" href="#样式化" aria-hidden="true">#</a> 样式化</h4>
<p>向 Mr.Hope 捐赠一杯咖啡。 <Badge type="tip">Recommended</Badge></p>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="tex-语法" tabindex="-1"><a class="header-anchor" href="#tex-语法" aria-hidden="true">#</a> Tex 语法</h4>
<p>$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right}
$$</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/tex.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="图表" tabindex="-1"><a class="header-anchor" href="#图表" aria-hidden="true">#</a> 图表</h4>
<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/chartjs.html" width="100%" height="450"/>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chartjs.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts" aria-hidden="true">#</a> Echarts</h4>
<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/echarts.html" width="100%" height="800"/>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/echarts.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图" aria-hidden="true">#</a> 流程图</h4>
<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/flowchart.html" width="100%" height="450"/>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/flowchart.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="markmap" tabindex="-1"><a class="header-anchor" href="#markmap" aria-hidden="true">#</a> MarkMap</h4>
<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/markmap.html" width="100%" height="380"/>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/markmap.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid" aria-hidden="true">#</a> Mermaid</h4>
<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/mermaid.html" width="100%" height="620"/>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/mermaid.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="代码演示" tabindex="-1"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h4>
<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/code-demo.html" width="100%" height="450"/>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/demo.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="交互演示" tabindex="-1"><a class="header-anchor" href="#交互演示" aria-hidden="true">#</a> 交互演示</h4>
<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/playground.html" width="100%" height="480"/>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/playground.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="kotlin-交互演示" tabindex="-1"><a class="header-anchor" href="#kotlin-交互演示" aria-hidden="true">#</a> Kotlin 交互演示</h4>
<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/kotlin-playground.html" width="100%" height="220"/>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/kotlin-playground.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h4 id="vue-交互演示" tabindex="-1"><a class="header-anchor" href="#vue-交互演示" aria-hidden="true">#</a> Vue 交互演示</h4>
<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/vue-playground.html" width="100%" height="380"/>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/vue-playground.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="幻灯片" tabindex="-1"><a class="header-anchor" href="#幻灯片" aria-hidden="true">#</a> 幻灯片</h4>
<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/revealjs.html" width="100%" height="400"/>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/revealjs.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
</div></template>


