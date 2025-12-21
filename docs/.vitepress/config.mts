import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CardEcho 虚拟信用卡",
  description: "虚拟信用卡使用指南与评测",
  
  // 你的 GitHub 仓库名称（如果是 cardecho-docs，这里可以删掉 base 行，或者保持默认）
  // 因为你绑定了自定义域名 blog.cardecho.com，通常不需要 base 配置，或者设为 '/'
  base: '/', 

	head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    ["meta", { name: "theme-color", content: "#FF6A00" }],
	],
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '新手教程', link: '/guide/getting-started' },
      { text: '常见问题', link: '/faq/' }
    ],

    sidebar: [
      {
        text: '新手入门',
        items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '什么是虚拟信用卡', link: '/guide/what-is-vcc' }
        ]
      },
      {
        text: '进阶使用',
        items: [
          { text: '如何使用支付宝、微信充值', link: '/guide/bind-alipay' },
          { text: 'ChatGPT 订阅教程', link: '/guide/chatgpt' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cardecho/cardecho-docs' }
    ]
  }
})
