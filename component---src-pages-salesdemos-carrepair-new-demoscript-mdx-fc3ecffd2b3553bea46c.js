(window.webpackJsonp=window.webpackJsonp||[]).push([[35,59,61,62],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("NmYn"),r=a.n(o),c=a("Wbzz"),b=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),d=a.n(s),p=a("QH2O"),m=a.n(p),g=a("qKvR"),u=function(e){var t,a=e.title,n=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(g.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,o=i.baseUrl,r=i.subDirectory,b=o+"/edit/"+i.branch+r+"/src/pages"+t;return o?Object(g.b)("div",{className:"bx--row "+j.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:j.link,href:b},"Edit this page on GitHub"))):null},h=a("FCXl"),O=a("dI71"),A=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),o=a===i,b=new RegExp(i+"/?(#.*)?$"),l=n.replace(b,a);return Object(g.b)("li",{key:e,className:d()((t={},t[A.selectedItem]=o,t),A.listItem)},Object(g.b)(c.Link,{className:A.link,to:""+l},e))}));return Object(g.b)("div",{className:A.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:A.list},o))))))},t}(i.a.Component),y=a("MjG9"),x=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,s=void 0===o?{}:o,d=t.relativePagePath,p=t.titleType,m=s.tabs,j=s.title,O=s.theme,A=s.description,w=s.keywords,N=Object(x.a)().interiorTheme,k=Object(c.useStaticQuery)("2456312558").site.pathPrefix,I=k?n.pathname.replace(k,""):n.pathname,B=m?I.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",C=O||N;return Object(g.b)(l.a,{tabs:m,homepage:!1,theme:C,pageTitle:j,pageDescription:A,pageKeywords:w,titleType:p},Object(g.b)(u,{title:i?Object(g.b)(i,null):j,label:"label",tabs:m,theme:C}),m&&Object(g.b)(v,{title:j,slug:I,tabs:m,currentTab:B}),Object(g.b)(y.a,{padded:!0},a,Object(g.b)(f,{relativePagePath:d})),Object(g.b)(h.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:B}),Object(g.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},r3Y1:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return c})),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("013z"),c=(a("qKvR"),function(){return Object(o.b)("span",null,"Car Crash Repair - Demo Script")}),b={},l={Title:c,_frontmatter:b},s=r.a;function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(s,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"1 - Accessing your Environment"),Object(o.b)("details",null,Object(o.b)("summary",null,"1.1 - Log in CP4I"),Object(o.b)("br",null),Object(o.b)("table",{style:{borderSpacing:"10px",borderCollapse:"separate",padding:"10px"}},Object(o.b)("tr",null,Object(o.b)("td",{vlign:"top",width:"30%"},Object(o.b)("strong",null,"Actions")," "),Object(o.b)("td",{width:"60%"},"Open CP4I and click IBM provided credentials (admin only) and log in.")),Object(o.b)("tr",null,Object(o.b)("td",{vlign:"top"},Object(o.b)("strong",null,"Talking Points")),Object(o.b)("td",null,"In the road to digital transformation, every organization seeks to move faster than before. But going fast without the right approach, guided by real-world operational data, has caused 70% of digital transformations to fail. A new approach with automation and continuous improvement fed by AI algorithms is required. IBM Cloud Pak for Integration is a hybrid integration solution that provides an automated and closed-loop lifecycle across multiple styles of enterprise integration. With IBM Cloud Pak for Integration, companies can speed integration development, reduce costs and maintain enhanced security, governance and availability. Let's see IBM Cloud Pak for Integration in action. Here I have a cloud version of the product on IBM Cloud. Let me log in here.")),Object(o.b)("tr",null,Object(o.b)("td",{vlign:"top"},Object(o.b)("strong",null,"Screenshots")," "),Object(o.b)("td",null,"![login1](./images/demoscript-login1.png)",Object(o.b)("br",null),"![login2](./images/demoscript-login2.png)"))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"1.1 - Log in CP4I"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("strong",{parentName:"td"},"Actions")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Open CP4I and click IBM provided credentials (admin only) and log in.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("strong",{parentName:"td"},"Talking Points")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"In the road to digital transformation, every organization seeks to move faster than before. But going fast without the right approach, guided by real-world operational data, has caused 70% of digital transformations to fail. A new approach with automation and continuous improvement fed by AI algorithms is required. IBM Cloud Pak for Integration is a hybrid integration solution that provides an automated and closed-loop lifecycle across multiple styles of enterprise integration. With IBM Cloud Pak for Integration, companies can speed integration development, reduce costs and maintain enhanced security, governance and availability. Let’s see IBM Cloud Pak for Integration in action. Here I have a cloud version of the product on IBM Cloud. Let me log in here.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("strong",{parentName:"td"},"Screenshots")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("span",Object(n.a)({parentName:"td"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.333333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2klEQVQoz32S227aQBCG/QQIuLAxpcUY4911cHzANLIFDqAepPaieZm2ShsBQqrzALxGpEpR00doLsg7/d0dmtgtaS4+zWpm5985rFZ8W+P71RV+Xl/jx80Nft3eYrfbYXd3h+12i68XF1iv11itVlgul2Q3mw0uLwsURUFWxT9++owv5+fQ8tNT5JMJ8ukUE2mzLEOapkSe55jP51gsFpjNZkiSBFEUIY5jYjQaYTwe0zkIQ/i+D822bdzT7/clzh/bJ1+v1yMsy0Kz2USj0YBpmuh0Omi1WqjVaqjX62goZEzjnEMIQagzZ46E789c+ioxJdRut+E4DtHtvoBhGCSsrIIEXXcA5vZlsg8RzRFEYzASd6VfPcDAJCqxZT5D1+Z4bjkw2x3oJKSXgioxCCMM4xzDl+/ghROwIJUVMYjjDMOT97JC9ahLFep6mWwY+8qqPo3Ji9M3Z4jTV+BHUthzEcvBC9eC8BN4yVtqm1UFJXqFqihVeCRcBNkHeMcn1KLny41lZxAjKRbm4NKnWj6s0DisUM1QXWZqjtLSvIQHPnpNFbNBj5bzlGAVbb/Nv6EHBra0cilcPPiqgvo/bT+0fH+5FGQH4o8JPoaKlS0/wf5rlUv5H0r0Nyj/bO5CvB3fAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"login1",title:"login1",src:"/cp4i-demohub/static/f9e43bdbfed2c3559d007b7a44cf60cb/3cbba/demoscript-login1.png",srcSet:["/cp4i-demohub/static/f9e43bdbfed2c3559d007b7a44cf60cb/7fc1e/demoscript-login1.png 288w","/cp4i-demohub/static/f9e43bdbfed2c3559d007b7a44cf60cb/a5df1/demoscript-login1.png 576w","/cp4i-demohub/static/f9e43bdbfed2c3559d007b7a44cf60cb/3cbba/demoscript-login1.png 1152w","/cp4i-demohub/static/f9e43bdbfed2c3559d007b7a44cf60cb/0b3f2/demoscript-login1.png 1607w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")," ",Object(o.b)("br",null)," ",Object(o.b)("span",Object(n.a)({parentName:"td"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.333333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAACCklEQVQoz32S3W7aQBCFeQIKKDYGwq/B6zU4/sEUYYEDqG2k9qJ5mbZKGwFCKnkAXiNSpajpIzQX5J1OZ4cEEGl7cTTrWc+3Z2c2tfq+wI/bW/y6u8PP+3v8fnjAZrPB5vER6/Ua366vsVgsMJ/PMZvNOC6XS9zcrLBarTiq/U+fv+Dr1RVSyfk5kuEQyWiEIcU4jjEYDFhJkmAymWA6nWI8HiOKIgRBgDAMWd1uF71ej9ee78N1XaQajQaeZZomqfkUTc7V63VWrVZDLpdDNptFoVBAuVyGYRhIp9PIZDLIKtFeyrZtSClZam2LJsnerm3KHewpULFYZHilUmGo+lbgfD7PYqBltSAsk4pdyGACL+hBMNyivDpAQJBUQbVaQxBGkI4Dh9Rut1EqlaBp2haoCj0/QCdM0Hn9Ho4/hPAG5EhAnsXo9D+QQ3sLJCfVyikiTyAMfHieB596p5zugZaF0btLhIM3sNsEdiz6OYC0apBuBCe64GsLakNBz0Fv9HEyXkM7lchrWYIY0HWdYSqyw7a04MUf4Zz1+YqOSxOLLyG7BPMT2JRjoEGFJRMFeYFCucm9O4TteqiuI1QfKXK/pAO7+5Ydi1adhyOon2oounYCQ3sFg4dAw/gb8Fh8QKvBEGHLXY6BVKg/AQ7dvXC4B4oX8GPg8xM5Fvdw5+g/2j4ta+/wH1LQP0a+cCa6LinlAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"login2",title:"login2",src:"/cp4i-demohub/static/c0cc39729bf7193728fdd3d37837bd25/3cbba/demoscript-login2.png",srcSet:["/cp4i-demohub/static/c0cc39729bf7193728fdd3d37837bd25/7fc1e/demoscript-login2.png 288w","/cp4i-demohub/static/c0cc39729bf7193728fdd3d37837bd25/a5df1/demoscript-login2.png 576w","/cp4i-demohub/static/c0cc39729bf7193728fdd3d37837bd25/3cbba/demoscript-login2.png 1152w","/cp4i-demohub/static/c0cc39729bf7193728fdd3d37837bd25/0b3f2/demoscript-login2.png 1607w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-salesdemos-carrepair-new-demoscript-mdx-fc3ecffd2b3553bea46c.js.map