module.exports = {
    title: '余大钦的前端笔记',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', {
            rel: 'icon',
            href: '/logo.jpg'
        }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/vuepressBlog/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [ // 导航栏配置
            {
                text: '指南',
                items: [{
                        text: "首页",
                        link: '/'
                    },
                    {
                        text: "前端网址导航",
                        link: '/nav.md'
                    }
                ]
            },
            {
                text: '前端基础',
                link: '/accumulate/'
            },
            {
                text: '算法题库',
                link: '/algorithm/'
            },
            {
                text: '博客',
                link: 'https://yuqinweb.gitee.io/hexo-blogs/'
            },
            {
                text: 'Github',
                link: ''
            }
        ],
        sidebar: {
            '/': [{
                title: '指南',
                collapsable: false,
                children: [
                    '',
                    'nav'
                ]
            }]
        },
        sidebarDepth: 3, // 侧边栏显示2级
        lastUpdated: 'Last Updated', // string | boolean 最后更新时间
    }
};