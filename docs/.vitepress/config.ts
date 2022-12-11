// 注释
import { defineConfig } from "vitepress";
import site from "./config/site";
import theme from "./config/theme";
import navbar from "./config/nav";
import mysidebar from "./config/sidebar";

const { base, lang, title, description, head, lastUpdated, markdown } = site(
  "/webpack5-docs/",
  "zh-CN",
  "尚硅谷 Web 前端之 Webpack5 教程",
  "",
  [
    // 增加一个自定义的 favicon
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  true,
  {
    theme: "material-palenight",
    lineNumbers: true,
  }
);
const { logo, nav, sidebar, outlineTitle, socialLinks, footer, editLink } =
  theme(
    "/logo.svg",
    navbar,
    mysidebar,
    "本页目录",
    [
      {
        icon: "github",
        link: "https://github.com/xiaomangjun",
      },
    ],
    {
      message: "MIT Licensed",
      copyright: "Copyright © 2022-present 尚硅谷",
    },
    {
      pattern: "https://github.com/xiaomangjun",
      text: "在 GitHub 上编辑此页面",
    }
  );
export default defineConfig({
  // 部署站点的基础路径
  base,
  // 站点的语言
  lang,
  // 站点的标题
  title,
  // 站点的描述
  description,
  // 头部
  head,
  // 最近更新时间
  lastUpdated,
  // 配置 Markdown 解析器选项
  markdown,

  themeConfig: {
    // 网站logo
    logo,
    // 导航栏配置
    nav,
    // 侧边栏配置
    sidebar,
    outline:[0,3],
    // 大纲标题
    outlineTitle,
    // 社交链接
    socialLinks,
    // 页脚配置
    footer,
    // 编辑链接
    editLink,
    // 最近更新时间的显示文本
    lastUpdatedText: "最近更新时间",
    // 搜索
    algolia: {
      appId: "V5OB9FQ1RB",
      apiKey: "72c9c195bbe0b4ac381d9da952bfe289",
      indexName: "patient-h5",
    },
    // search: true,
  },
});
