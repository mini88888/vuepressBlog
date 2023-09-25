(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{404:function(t,a,_){"use strict";_.r(a);var s=_(52),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"【字节跳动】工作内容及总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#【字节跳动】工作内容及总结"}},[t._v("#")]),t._v(" 【字节跳动】工作内容及总结")]),t._v(" "),_("h2",{attrs:{id:"业务背景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#业务背景"}},[t._v("#")]),t._v(" 业务背景")]),t._v(" "),_("blockquote",[_("p",[t._v("将公司已有的内容和算法能力打包并做tob输出，为合作方提供个性化阅读场景。供其用户阅读，留存用户以及产生流量以及广告收益等。同时公司直接获得相应收益")])]),t._v(" "),_("ol",[_("li",[t._v("从合作方考虑，内容生态有较高的研发成本：\n"),_("ul",[_("li",[t._v("推荐算法搭建")]),t._v(" "),_("li",[t._v("内容积累")]),t._v(" "),_("li",[t._v("平台运营")])])]),t._v(" "),_("li",[t._v("厂商&定制内容")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("厂商")]),t._v(" "),_("th",[t._v("页面内容")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("oppo、vivo、华为、小米、小米MCC、小米视频、内容定制、其他")]),t._v(" "),_("td",[t._v("图文详情页、视频详情页、微头条、作者页、评论列表、评论详情、视屏分享页、热榜落地页、推荐列表、小视频播放页")])])])]),t._v(" "),_("h2",{attrs:{id:"项目架构-技术实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#项目架构-技术实现"}},[t._v("#")]),t._v(" 项目架构&技术实现")]),t._v(" "),_("h3",{attrs:{id:"_1-模板引擎-go服务-fis模板"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-模板引擎-go服务-fis模板"}},[t._v("#")]),t._v(" 1. 模板引擎(GO服务+fis模板)")]),t._v(" "),_("blockquote",[_("p",[t._v("本地开发的静态模板由fis打包上传至go_mobile_detail，由Go服务调用toutiao数据并渲染输入。")])]),t._v(" "),_("p",[t._v("开发痛点：")]),t._v(" "),_("ul",[_("li",[t._v("本地开发阶段需要的环境比较繁琐：\n"),_("ul",[_("li",[t._v("线上服务(IP)隔离限制，所以本地无法访问线上服务")]),t._v(" "),_("li",[t._v("对外信息流项目中，如文章详情模块，其依赖的部分下游服务并未在BOE环境中部署，导致本地无法从BOE环境中调用相关服务完成页面的渲染")]),t._v(" "),_("li",[t._v("需要为开发机申请访问线上服务权限，并借助Devbox开发机来搭建Host服务，完成相关页面的数据获取和SSR渲染。")])])]),t._v(" "),_("li",[t._v("通过Fis模板打包上传的耗时比较多，随着业务和模板的增加会越来越多")])]),t._v(" "),_("h3",{attrs:{id:"_2-vue-monorepo-详情页、作者页"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue-monorepo-详情页、作者页"}},[t._v("#")]),t._v(" 2. Vue+Monorepo（详情页、作者页）")]),t._v(" "),_("blockquote",[_("p",[t._v("简单来说Monorepo就是指将公司的多个子项目代码放到一个代码仓库中管理，目的是为了提高项目之间的代码复用能力，避免重复造轮。")])]),t._v(" "),_("h3",{attrs:{id:"_3-react-ts-热点专题落地页"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-react-ts-热点专题落地页"}},[t._v("#")]),t._v(" 3. React+TS (热点专题落地页)")]),t._v(" "),_("h3",{attrs:{id:"_4-工具库-封装业务常用的工具代码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-工具库-封装业务常用的工具代码"}},[t._v("#")]),t._v(" 4. 工具库(封装业务常用的工具代码)")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("日期格式工具\n")])])]),_("h3",{attrs:{id:"_5-常用组件抽离-如评论组件、建立在字节ui库-arco-design-的二次封装"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-常用组件抽离-如评论组件、建立在字节ui库-arco-design-的二次封装"}},[t._v("#")]),t._v(" 5. 常用组件抽离(如评论组件、建立在字节UI库(Arco Design)的二次封装)")]),t._v(" "),_("h2",{attrs:{id:"工具与调试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#工具与调试"}},[t._v("#")]),t._v(" 工具与调试")]),t._v(" "),_("h3",{attrs:{id:"_1-charles"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-charles"}},[t._v("#")]),t._v(" 1. Charles")]),t._v(" "),_("h2",{attrs:{id:"需求交付流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#需求交付流程"}},[t._v("#")]),t._v(" 需求交付流程：")]),t._v(" "),_("ol",[_("li",[t._v("创建需求工单 ->  Bits-Meego")]),t._v(" "),_("li",[t._v("编码与代码版本管理  -> Codebase")]),t._v(" "),_("li",[t._v("线下版本编译与发布版本管理  -> SCM")]),t._v(" "),_("li",[t._v("BOE功能环境的部署与测试  -> ENV")]),t._v(" "),_("li",[t._v("线上版本编译及发布版本管理   -> SCM")]),t._v(" "),_("li",[t._v("BOE基准环境的部署与上线前回归 -> ENV")]),t._v(" "),_("li",[t._v("TCE服务升级 -> TCE")])])])}),[],!1,null,null,null);a.default=v.exports}}]);