(window.webpackJsonp=window.webpackJsonp||[]).push([[18,41,42,43],{"013z":function(e,t,a){"use strict";var b=a("q1tI"),r=a.n(b),n=a("NmYn"),c=a.n(n),l=a("Wbzz"),i=a("Xrax"),o=a("k4MR"),s=a("TSYQ"),u=a.n(s),m=a("QH2O"),p=a.n(m),d=a("qKvR"),O=function(e){var t,a=e.title,b=e.theme,r=e.tabs,n=void 0===r?[]:r;return Object(d.b)("div",{className:u()(p.a.pageHeader,(t={},t[p.a.withTabs]=n.length,t[p.a.darkMode]="dark"===b,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:p.a.text},a)))))},j=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,b=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||b,n=r.baseUrl,c=r.subDirectory,i=n+"/edit/"+r.branch+c+"/src/pages"+t;return n?Object(d.b)("div",{className:"bx--row "+j.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},v=a("FCXl"),h=a("dI71"),g=a("I8xM"),P=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,b=e.slug,r=b.split("/").filter(Boolean).slice(-1)[0],n=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),n=a===r,i=new RegExp(r+"/?(#.*)?$"),o=b.replace(i,a);return Object(d.b)("li",{key:e,className:u()((t={},t[g.selectedItem]=n,t),g.listItem)},Object(d.b)(l.Link,{className:g.link,to:""+o},e))}));return Object(d.b)("div",{className:g.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:g.list},n))))))},t}(r.a.Component),f=a("MjG9"),T=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,b=e.location,r=e.Title,n=t.frontmatter,s=void 0===n?{}:n,u=t.relativePagePath,m=t.titleType,p=s.tabs,j=s.title,h=s.theme,g=s.description,I=s.keywords,N=Object(T.a)().interiorTheme,L=Object(l.useStaticQuery)("2456312558").site.pathPrefix,A=L?b.pathname.replace(L,""):b.pathname,y=p?A.split("/").filter(Boolean).slice(-1)[0]||c()(p[0],{lower:!0}):"",C=h||N;return Object(d.b)(o.a,{tabs:p,homepage:!1,theme:C,pageTitle:j,pageDescription:g,pageKeywords:I,titleType:m},Object(d.b)(O,{title:r?Object(d.b)(r,null):j,label:"label",tabs:p,theme:C}),p&&Object(d.b)(P,{title:j,slug:A,tabs:p,currentTab:y}),Object(d.b)(f.a,{padded:!0},a,Object(d.b)(x,{relativePagePath:u})),Object(d.b)(v.a,{pageContext:t,location:b,slug:A,tabs:p,currentTab:y}),Object(d.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},qphW:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return u}));var b=a("wx14"),r=a("zLVn"),n=(a("q1tI"),a("7ljp")),c=a("013z"),l=a("rl46"),i=(a("qKvR"),{}),o={_frontmatter:i},s=c.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)(s,Object(b.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(l.a,{name:"Ravi Katikala",lastUpdated:"October 2020",readTimeMinutes:"120",mdxType:"ArticleDetails"}),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"APIC Dev Jam Lab Instructions")),Object(n.b)("p",null,Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"APICDevJam/Lab1"}),"Lab 1 : Create and Secure an API to Proxy an Existing REST Web service")),Object(n.b)("p",null,Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"APICDevJam/Lab2"}),"Lab 2 : The Developer Portal Experience")),Object(n.b)("p",null,Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"APICDevJam/Lab3"}),"Lab 3 : Add OAuth Security to your API")),Object(n.b)("p",null,Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"APICDevJam/Lab4"}),"Lab 4 : Use Lifecycle Controls to Version Your API")),Object(n.b)("p",null,Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"APICDevJam/Lab5"}),"Lab 5: Advanced API Assembly")),Object(n.b)("p",null,Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"APICDevJam/Lab6"}),"Lab 6: Working with API Products")),Object(n.b)("p",null,Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"APICDevJam/Lab7"}),"Lab 7: The Consumer Experience")),Object(n.b)("p",null,Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"APICDevJam/Lab8"}),"Lab 8: Create and test GraphQL Proxy API")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"APIC Dev Jam Lab Resources")),Object(n.b)("p",null,Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"APICDevJam/resources/inventory.yaml"}),"inventory.yaml")),Object(n.b)("p",null,Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"APICDevJam/resources/logistics.yaml"}),"logistics.yaml")),Object(n.b)("p",null,Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"APICDevJam/resources/calculate.wsdl"}),"calculate.wsdl"),"  "))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-apic-dev-jam-index-md-97701f1629b2a5a8dc56.js.map