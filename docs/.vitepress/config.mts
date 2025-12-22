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
      { text: '关于我们', link: '/about' },
      { text: '新手教程', link: '/guide/getting-started' },
      { text: '常见问题', link: '/faq/' }
    ],

    sidebar: [
      {
        text: '新手入门',
        items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '什么是虚拟信用卡', link: '/guide/what-is-vcc' },
          { text: '实名认证教程', link: '/guide/kyc' }
        ]
      },
      {
        text: '进阶使用',
        items: [
          { text: '如何充值 (USDT)', link: '/guide/deposit' },
          { text: '如何在欧易购买USDT', link: '/guide/buyusdtatokx' },
          { text: 'USDT充值未到账怎么办', link: '/guide/depositissues' },
          { text: '如何解决支付被拒 (Card Declined)', link: '/guide/clean-ip' },
          { text: '风控规避与安全指南', link: '/guide/risk-control' },
          { text: 'OnlyFans 订阅教程', link: '/guide/onlyfans' },
          { text: 'ChatGPT 订阅教程', link: '/guide/chatgpt' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cardecho/cardecho-docs' }
    ],

    footer: {
      message: 'Powered by US Banking Infrastructure & Secure Payment Network.',
      copyright: 'Copyright © 2023-2025 CardEcho. All Rights Reserved.'
    }
  }
})
