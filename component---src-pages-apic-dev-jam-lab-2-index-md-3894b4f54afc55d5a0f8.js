(window.webpackJsonp=window.webpackJsonp||[]).push([[20,41,42,43],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),b=a.n(i),l=a("NmYn"),n=a.n(l),o=a("Wbzz"),c=a("Xrax"),r=a("k4MR"),s=a("TSYQ"),p=a.n(s),d=a("QH2O"),m=a.n(d),u=a("qKvR"),g=function(e){var t,a=e.title,i=e.theme,b=e.tabs,l=void 0===b?[]:b;return Object(u.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=l.length,t[m.a.darkMode]="dark"===i,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},A=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,i=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||i,l=b.baseUrl,n=b.subDirectory,c=l+"/edit/"+b.branch+n+"/src/pages"+t;return l?Object(u.b)("div",{className:"bx--row "+A.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:A.link,href:c},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),w=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,b=i.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=n()(e,{lower:!0,strict:!0}),l=a===b,c=new RegExp(b+"/?(#.*)?$"),r=i.replace(c,a);return Object(u.b)("li",{key:e,className:p()((t={},t[w.selectedItem]=l,t),w.listItem)},Object(u.b)(o.Link,{className:w.link,to:""+r},e))}));return Object(u.b)("div",{className:w.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:w.list},l))))))},t}(b.a.Component),N=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,b=e.Title,l=t.frontmatter,s=void 0===l?{}:l,p=t.relativePagePath,d=t.titleType,m=s.tabs,A=s.title,O=s.theme,w=s.description,v=s.keywords,x=Object(y.a)().interiorTheme,k=Object(o.useStaticQuery)("2456312558").site.pathPrefix,I=k?i.pathname.replace(k,""):i.pathname,S=m?I.split("/").filter(Boolean).slice(-1)[0]||n()(m[0],{lower:!0}):"",C=O||x;return Object(u.b)(r.a,{tabs:m,homepage:!1,theme:C,pageTitle:A,pageDescription:w,pageKeywords:v,titleType:d},Object(u.b)(g,{title:b?Object(u.b)(b,null):A,label:"label",tabs:m,theme:C}),m&&Object(u.b)(j,{title:A,slug:I,tabs:m,currentTab:S}),Object(u.b)(N.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:p})),Object(u.b)(f.a,{pageContext:t,location:i,slug:I,tabs:m,currentTab:S}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},JROJ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return s}));var i=a("wx14"),b=a("zLVn"),l=(a("q1tI"),a("7ljp")),n=a("013z"),o=(a("qKvR"),{}),c={_frontmatter:o},r=n.a;function s(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(l.b)(r,Object(i.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"In this lab, we will take the API created in Lab 1 and publish it to a\nDeveloper Portal, ready for consumption by app developers. We will begin\nby creating a new catalog and configuring the developer portal for our\nInventory product. We will then define a new plan in the product and\npublish to our new developer portal."),Object(l.b)("p",null,"In this tutorial, you will explore the following key capabilities:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Configure the Developer Portal and publish the APIs.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Create a Portal Account.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Create App and Subscribe to Plan.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Test API in the Developer Portal"))),Object(l.b)("h2",null,"APIC Dev Jam Series"),Object(l.b)("p",null,"The APIC Dev Jam Series is a hands-on workshop with lab exercises that\nwalk you through designing, publishing, and securing APIs. This workshop\nis for API developers, architects, and line of business people who want\nto create a successful API strategy. There are 8 labs and each is 30\nminutes long. Make sure you choose enough time in your reservation to\nget through all the labs! "),Object(l.b)("p",null,"[NOTE: ]",Object(l.b)("strong",{parentName:"p"},"[This demo environment contains a\nfull API Connect installation in Cloud Pak for Integration. The login\ninformation to the APIC cluster will be sent in a separate email when\nyou reserve the instance. Use Google Chrome, Firefox or Microsoft Edge\nto access the cluster using the credentials supplied. Make sure you\nlogin using API Manager User Registry not Common Services\nregistry.]")),Object(l.b)("p",null,"Prerequisites: Labs 1"),Object(l.b)("h2",null,"Generate the developer portal"),Object(l.b)("p",null,"A developer portal for the sandbox catalog was already configured in\nthis environment. A consumer account “ibmuser” was also created to use\nthe Developer Portal server. In this section, login to Developer Portal\nusing the credentials provided in email."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Login to API Connect Developer Portal")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"API Connect Developer Portal provides consumers access to API\nCatalog information to explore and test APIs, register Applications\nand subscribe to Plans. Portal Administrator can customize the looks\nand feel to their organizational specifications. The default\nDeveloper Portal looks like below:"),Object(l.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.31944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACoklEQVQ4y52Sa0tUURSGz98pIpssyWYquipIQZcvXehDFARBFFgUZEUZRJEW3bAxnSGlwK4IFRFRmjWhKY1UllmTQ46WjnM7l31uT/vMKI31rQUP72bt/a619j5H2XSqn/W1A6w+9BrfnhC+vWF8+8LM2y+1Wmp1k6SRudUNlBxoYN7hIKVHrlFa00Dp0avMP1yP7+AZyqtPsmx/DUrgygRlF5MsuvQLfzBDIKQSuJFhwwOVzY80lt9Ls/Zxjp2dOXa9yrA9kmXViwkqIinWdCVY8fQTS+9HWNTykPJbD1GW1cVYfG4Yf30M//khApe+UBX6xo62r+y+N8jGmx+pvNHPlvsDbG0fYNuTr6x//JnK9qhs1sPyuxECLY8ob2zDH76DUnI8yqxjUWafeMfs2l7mnH5LydkellzuoyL8gQXBKGUXIlTVdrDuVAcr6zpY2NJFaetLFt5+w4K2Tnxyuvmt7VLvogSfxbnyNE7D8ziNnR7DNHYNE+z6zvXuEZp6R2l++4NQd1wSo7knRlNfjFD0O+H3w1KHaI4O0hT9QujDEIopBLZlg+NQCFeuXVwP28G1nILa7h+sAo7p5NUWLmrGxNQdlFRSZ6w9Q3LCIJ0Vsq5LVrdIqyZpbQr1L7SZZIpQsjkDM2kjDBvLm8aV3QyLrNz8H5ScJhCug2kVMEwbTRb0ik6rLmbmiteG3Cs+q9i2LaciXywjr+pNWIwXWTm9sJ38+xbnxZSnOJ8v6IUhHEaTBtMxbZLDEx/XSOXMf/Y0wyGRFDPy+YK67DKRVBkdmySbU+VbWlNNBD/HJ0kk0owkJplMZ/ImR/4Rum6QSmf5NZ4ip6qYZsGjCGnyPoYm31LTdYRp5g1eeIe8nKYLVE3Pr6evZslfTTeMgkf88fwGxoyFaQ2DNB0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html df45d2edf6f25ba8",title:"tutorial html df45d2edf6f25ba8",src:"/cp4i-demohub/static/d23815a33274d50aa2b60aeb8fad7337/3cbba/tutorial_html_df45d2edf6f25ba8.png",srcSet:["/cp4i-demohub/static/d23815a33274d50aa2b60aeb8fad7337/7fc1e/tutorial_html_df45d2edf6f25ba8.png 288w","/cp4i-demohub/static/d23815a33274d50aa2b60aeb8fad7337/a5df1/tutorial_html_df45d2edf6f25ba8.png 576w","/cp4i-demohub/static/d23815a33274d50aa2b60aeb8fad7337/3cbba/tutorial_html_df45d2edf6f25ba8.png 1152w","/cp4i-demohub/static/d23815a33274d50aa2b60aeb8fad7337/0b124/tutorial_html_df45d2edf6f25ba8.png 1728w","/cp4i-demohub/static/d23815a33274d50aa2b60aeb8fad7337/459f3/tutorial_html_df45d2edf6f25ba8.png 2248w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Some products are visible to all users without an account depending\non the Product visibility setting. Additional options are available\nwhen you login to the Portal Server."),Object(l.b)("p",{parentName:"li"},"Click ",Object(l.b)("strong",{parentName:"p"},"Sign in")," to login to the portal"),Object(l.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"438px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"28.819444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABE0lEQVQY052OS0sCURiGZ2eXTVpZRF6CNJszOjpzHLVM1IquYoHr6C/ZtEzT0H5ADP6vokXU4unMYBBBGz94eJ/D+3H4tKheYt2osJIpEtWdICNpm+UdqVIGHqDefre66xBReePssW86SN2iZEiksLmtVNHihRr5Rgv/44RVwzpsI4+vAnL1C8zGJflmC+uoTdKusybKbGQrnBarpJttjJMOW9UzwnaDc+cALbSps5jMMh8XLCQMlrYLhNVF4ZQV+M+Fvvv9XEwQiulcizymkFi5MiJTIJUy6eRsNLf/jNsb4/bHQd49jOhO+et+f6/2uyq94YhJf8BLb4D3OGSi8J7GaMw4n1O+frmP9vr+wSy8/cM3ysQx5TEai5MAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 279e27e5ac9b71cb",title:"tutorial html 279e27e5ac9b71cb",src:"/cp4i-demohub/static/aba5d919fcf2022eb8d7dd7dd30ff771/33837/tutorial_html_279e27e5ac9b71cb.png",srcSet:["/cp4i-demohub/static/aba5d919fcf2022eb8d7dd7dd30ff771/7fc1e/tutorial_html_279e27e5ac9b71cb.png 288w","/cp4i-demohub/static/aba5d919fcf2022eb8d7dd7dd30ff771/33837/tutorial_html_279e27e5ac9b71cb.png 438w"],sizes:"(max-width: 438px) 100vw, 438px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Login to portal user using the username and password supplied in the\nemail."),Object(l.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.40277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABYlAAAWJQFJUiTwAAABuElEQVQ4y6WTS0/bQBSF83fpAipAFUjddAULqCioSxb9DZWCAImHYNOWhofKAoqaBwqOHWyYODO25+HTO5PEoZIhSL3Sp7m2xufec8dTyfMcWmukWYZMSogkgVQKxhjoJxhHPpEKKJTSaHs+gm6IuN/H/4QTtN3d1Ju4bXu46wQOzx9gC3l+13Vowzp6CSdoLbNeDC4EhCNxcC4cfc7d5lHYtEys6NBabrU7eGAx7GtNzdA4CuxeYzS9l4SykqV2xx2SnbsgRMT6SKWBSNU/SCrYvWc4vajj/FcTzVaEMExp5hxBwOETWabHHWZSoX7roRsxyjUyZWgdkA431s58vHl7iNmFY7x7f4wPS98wt3iE6fkDTM3s4eo6Ggg6/8OWDVSpFUM7klTSPAcIoZAkyq0WLmgU2ow7jOMM1e0Gtnab2NppYHe/RXkDVcq/Vv/g90307NxKZ3gfJlj59NPxcaOGzS+XWPt8itX1GpZXfuD7ifeqX6awPLEyIZW9MXnx/Nx3lVHl4voMq9lc0lWMGJ1iFDse4sSJjsTKRCsvWbE/+yNjtPbAaH3scfToACYKlg33NQdQFn8BLdc4PUVyfcwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html d0807a5f400162a",title:"tutorial html d0807a5f400162a",src:"/cp4i-demohub/static/7ea5fb67256965000739709202b0c7a7/3cbba/tutorial_html_d0807a5f400162a.png",srcSet:["/cp4i-demohub/static/7ea5fb67256965000739709202b0c7a7/7fc1e/tutorial_html_d0807a5f400162a.png 288w","/cp4i-demohub/static/7ea5fb67256965000739709202b0c7a7/a5df1/tutorial_html_d0807a5f400162a.png 576w","/cp4i-demohub/static/7ea5fb67256965000739709202b0c7a7/3cbba/tutorial_html_d0807a5f400162a.png 1152w","/cp4i-demohub/static/7ea5fb67256965000739709202b0c7a7/620c0/tutorial_html_d0807a5f400162a.png 1198w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"After successful login, you will see a Get Started page. Proceed to\ncreate a new Test application."))),Object(l.b)("h2",null,"Register a test app"),Object(l.b)("p",null,"API Connect enforces entitlement rules to ensure that consumers are\nallowed to access the APIs that are being requested. The instructions\nbelow will guide you through registering your consumer application and\nsubscribing it to an API Product."),Object(l.b)("h3",null,"[Create A New Consumer Application]"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click [","[Create an\nApp]","] in\nthe ",Object(l.b)("em",{parentName:"p"},"Create a new App")," tile."),Object(l.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.06944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABa0lEQVQoz62SzUvDQBDF86crehDRemmpFwsKoohHwYMgincFQY9Vi9ViU3STbLKfec5uNjatVjwY+JHNvJ23M7OJDo7vsH90j27vEqtbXazM0+piaaNNdDzLDdz3emcHre09rLV72Nw9RMSFRJLnUNaiBDw2UH83n3Iu7vZJXaENEKW5RlZoJFwREoVU0KQ4hNQ+xjLhSWktlPaa0hq5UGDcFRSgNRkq1GSF8mdzaZAK7Stwh9V6HmKMa6rIwtoSzXxH5BLqJG9Y0iZhwArzzZAHw3duQGe6rSFPfzFnqGGMxTiOERNu7Uxqw4JcxvEEr6MRXgiWctLNjOmMoRNZmuFhMET/aQiWpNSmmbZMhh8sweDZGb6RJmeK+cGQBk5VXVw94+x8AKWsn5vTEkLQZeS5wcnpI65vxr59d5kLWtZ+hs4glwEx1eoqvB6ox1F5VO+o+l1mYYHftEV6pOj6F2L+GGsQ3fYn+E8+Aa2kiN6U8/kBAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 114ebdd6ef4988c",title:"tutorial html 114ebdd6ef4988c",src:"/cp4i-demohub/static/8ac0ee7f1995eddc272fe7318b9eb798/3cbba/tutorial_html_114ebdd6ef4988c.png",srcSet:["/cp4i-demohub/static/8ac0ee7f1995eddc272fe7318b9eb798/7fc1e/tutorial_html_114ebdd6ef4988c.png 288w","/cp4i-demohub/static/8ac0ee7f1995eddc272fe7318b9eb798/a5df1/tutorial_html_114ebdd6ef4988c.png 576w","/cp4i-demohub/static/8ac0ee7f1995eddc272fe7318b9eb798/3cbba/tutorial_html_114ebdd6ef4988c.png 1152w","/cp4i-demohub/static/8ac0ee7f1995eddc272fe7318b9eb798/0b124/tutorial_html_114ebdd6ef4988c.png 1728w","/cp4i-demohub/static/8ac0ee7f1995eddc272fe7318b9eb798/440c9/tutorial_html_114ebdd6ef4988c.png 2238w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Give your application the title ",Object(l.b)("strong",{parentName:"p"},"[IBM\nConsumer ]")," and then\nclick [","[Submit]","]."),Object(l.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"940px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"97.56944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAACD0lEQVQ4y51UyY7TQBDNH3NCHBAHPg0JgQY4wwUxSRzHjrNMbPe++FHVduKMxoFJWnqpTrv1ul5ts67rcMuKdD/GOIEO1nnMnHPYHZ6wLquEY92g2FSodntstntkeYGy2qVvZbWF8z4RTznifMDMWIsNEQghoJSGNgZCSkil0LRtekAIibYV6Zy9ubYSobYevx9zHBuFWhKZ9tCuI8RkjR/3bKUJEMaT9c9sIMmJ0IUOq+qIZbHHPN9iX5NnyhO5m0SjXPp+CT5nHs+ESmssKU7zbA1lLDgy/NqtOEsOIaIRGrVQUNqBQ3APOEk9IbFz3BitYri7EC8J+UAwBuJ7cOEhSZaW4CZxs4dcn55Ky4UePoz/eW9oo+2/IbVN9dnXIRXyn/kSy1VOXbHGIlvhcZFhtS7SnjtpaA3+mcSpa4YsBypqQZlWz9BKTZ0iqXNc6lEzgXROGWaiM2EKJhWlvYAhzYqkqCTn/wlh2WdC1p6vW5LcIhtQlNzX4xC4Bp4wcbDnLDPhKm8wX9Rn8ANa+xSf0+VrcRsCPBKOl/HiwskD3luWT2WkqEQ0DQPu27oxNI0MGrLxNByuyzpR9+vwpFM4FlmDurb4+WuPN28/4f3HL3j34TM2lWQ3esLXLI7p4WCw3Wny1CfSrw8FHr6X+PajhKGxxk1CE5vS/gp4mtRcYiGGfh8DRg00uoJP0+ovmUoWRfs/A2AAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html c4d9babec32568f9",title:"tutorial html c4d9babec32568f9",src:"/cp4i-demohub/static/4eadcb30bfba593c55cab6f0c22f0a13/7ef15/tutorial_html_c4d9babec32568f9.png",srcSet:["/cp4i-demohub/static/4eadcb30bfba593c55cab6f0c22f0a13/7fc1e/tutorial_html_c4d9babec32568f9.png 288w","/cp4i-demohub/static/4eadcb30bfba593c55cab6f0c22f0a13/a5df1/tutorial_html_c4d9babec32568f9.png 576w","/cp4i-demohub/static/4eadcb30bfba593c55cab6f0c22f0a13/7ef15/tutorial_html_c4d9babec32568f9.png 940w"],sizes:"(max-width: 940px) 100vw, 940px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(l.b)("h3",null,"Save the Consumer Application Credentials"),Object(l.b)("p",null,"When your consumer application is registered in the IBM API Connect\nsystem, it is assigned a unique set of client credentials. These\ncredentials must be provided on each API request in order for the system\nto validate your subscription entitlements."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click the [","[Show]","] box\nin both Key and Secret to reveal it. Copy the Key and Secret. Save\nit to a text editor. Then\nclick [","[Continue. ]","]You\ncan always come back to view the Key. However, if you lose the\nSecret, you will need to generate a new one in the app settings."),Object(l.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"938px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"76.7361111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB6klEQVQ4y5VTTY/TMBDd/y/BAW4c9sBPQOKExB9AC0Ks9sBC2W63bZoPJ2MnTpzYeYwnapttC4KRnsaOPW/ezDhXIQTsLYweAQP7E/A3H3oMF+H4bJB47wOuMALdUGNR3IBsDjIVdDOB6slXpkTXN+h9C8foT9A4ksQ+jBOh8w0W6hMqm0JRgdIw9BGKclhn4IaGk5+j7soZIRtpgzwnpLlCWbEirVESYZdlULwvSg4IHpdtxDiOs5LZTN1wcI5NkuJpkwi2uwzr7U6wSXZMTJI43jV1zUkNJ9dwrj9QHwgLVQqhNrWAWKE2RgJJAgmqrAQVaSFXrJo0wfUXCIWIM3ueeD/4izgWOFnbjyioRdd1zwlj/YFBuuEyoqJa/B5kGkHnBiYOrIifFjc/rVrcrwpYa88V5oWSvv3NYuI9IuHp2TOFcaGNZUxq9up0bWVvu57bAQx+ZJVT8Ea1+PI9gTH6XCFxD+M042QFaYYkzbFab7Fi5XFghar4WRXytKJPsgI7XmdcXZz82ZR//FpiuVrj58Oj+OXTWvz94gE5n3fOwbYtWh6Cta3Ae8flDgeFQySc/8v/ax8+PuL67R3eXN/i9i6Xb1exwfOG/wv2Q3n3foGXrz/jxasbfP2WHQnnk/oTyfzO6Xpe8m8D34sD3nUlYQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html aba0b5683b88b7d6",title:"tutorial html aba0b5683b88b7d6",src:"/cp4i-demohub/static/56ad92f778b238e9e67bf9ff6fd3d36e/7b24e/tutorial_html_aba0b5683b88b7d6.png",srcSet:["/cp4i-demohub/static/56ad92f778b238e9e67bf9ff6fd3d36e/7fc1e/tutorial_html_aba0b5683b88b7d6.png 288w","/cp4i-demohub/static/56ad92f778b238e9e67bf9ff6fd3d36e/a5df1/tutorial_html_aba0b5683b88b7d6.png 576w","/cp4i-demohub/static/56ad92f778b238e9e67bf9ff6fd3d36e/7b24e/tutorial_html_aba0b5683b88b7d6.png 938w"],sizes:"(max-width: 938px) 100vw, 938px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Now you\\‘ve entered the App Dashboard. Here you\\‘re able to see the\nanalytics of your APIs."))),Object(l.b)("h3",null,"Subscribe to the API Product"),Object(l.b)("p",null,"At this point, your registered consumer application has no entitlements.\nIn order to grant it access to an API resource, you must subscribe to a\nProduct and Plan."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click [","[API Products]","] at\nthe top of the screen.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click the [","[inventory auto product\n1.0.0]","] product."),Object(l.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"88.54166666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB7UlEQVQ4y5WUu27UQBSG5/FSBBAVFFykFKSho+IBaCIKCmoqOkQDEk+RCCkoQgiEWIV4jZ1dX+Y+vvw5M7vx7lqzi9bSpzMX+5/j8x+bnbw5xeu3Z3h1coYXLz/h/tPnuPfkGHcePcPdx8eBQxofLucHD49w8OBoESOw3vTgiYFrGsKgbVt0XR/w477vsc/F1B+H6ccKeTlHkmbIrmdIszzEq2mK2byAtRbOuXAA0IdDtsGkceBKQ5sG2rZQFMdI7aLrMVhRa0wLDaFbEnaol/ANmtF8O0wqC5v/hhCSRBtY18I2LaRZiPi1fWBSavTnHyDKGWy7Kq62K8F9hFnIiozUPjPCkJBxi7qNBddjjCBYS4uilltvGGcXE13fYwUnU/Iimv745s1D2mDWeI/FHhbaBfiWQwyVpqxrSMXBBQ9lGjLcVY+YGbV0wbSrZI7PX77hx89/YT60zbgO8Yw3Bbu+w+Sywrv3F/h6ntG304V1Pn5lvtbUu2paCkMCGtJZmhuU5MNQw2xe4/uvCf6mM1xOrzFJcnijYu0hIq7eGiOWbUZtQ6cJRX+abkHboRnoh7E3YnD1FrUaD43t003SnNxS1MwWnF7FI5ShaCAIvy6U3yPUbph/qKYWEEIEiqII+LFfr6oq/L6MsSH+jxuaSlOQfLmlFgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 38168de09ddc40f",title:"tutorial html 38168de09ddc40f",src:"/cp4i-demohub/static/1bb5ec284a0149128fd824fc568fa5a3/3cbba/tutorial_html_38168de09ddc40f.png",srcSet:["/cp4i-demohub/static/1bb5ec284a0149128fd824fc568fa5a3/7fc1e/tutorial_html_38168de09ddc40f.png 288w","/cp4i-demohub/static/1bb5ec284a0149128fd824fc568fa5a3/a5df1/tutorial_html_38168de09ddc40f.png 576w","/cp4i-demohub/static/1bb5ec284a0149128fd824fc568fa5a3/3cbba/tutorial_html_38168de09ddc40f.png 1152w","/cp4i-demohub/static/1bb5ec284a0149128fd824fc568fa5a3/db1bd/tutorial_html_38168de09ddc40f.png 1450w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click the [","[Subscribe]","] button\nfor the default plan that is listed.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Follow the steps to ",Object(l.b)("strong",{parentName:"p"},"Select your application"),", ",Object(l.b)("strong",{parentName:"p"},"Confirm\nSubscription"),", and ",Object(l.b)("strong",{parentName:"p"},"View Summary"),". Then click ",Object(l.b)("strong",{parentName:"p"},"Done"),"."),Object(l.b)("p",{parentName:"li"},"   ",Object(l.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"836px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"76.7361111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAABuklEQVQ4y6VUXWvbMBTtL+1b+1DYQ/9IXwp92T8ZjD0M9li2UBgUtpA2TWLLduxYkmV9+OxeOc6Wxk0Du3CQdK91dI71cdZ1Hbz3aNsWjTEw1FrraGzRWhvH3IYQjoJ5rPM4AwVPyIs1UpGj3NTIqL9YpZQrsUwERFbglHA+bAlJzSrNkIgMRVkhX5coCLxIlhdYc476uzyB82mWx8UrEgF0fwmV1vj5+AvTpzmk0gQFKRVqKeNY64b6alvr61yLdcorqu8UsncOXjkhlf8Te4RSGzwvBZaiwCLNMV9lKGsNZRxkY3dQI33rQk/o/iHUjcGG5VMryYJUDW2Wi6u+hxC6Q4VsVzfNngWu8cfvYeDYI9TGYp5keCGUsjmwegzWj1jmXRR0FKpaIpyo7KjCJSl7/D2j85jTzQkngTejtX78H1rvUMkalaoh1hX9Ake2bbQ+Brbqt3NJ4yHh0/MGPx4EJoRN3cbcYOc1BkXTWYXvk5RukulF8V32vi/efZzg6voLLj98jqQD4VgM+Zvbe5xffMLXby/o3wQi5JeCRZeVoaOjIgxZ6pWENzaif11Y2SqRdNxc5GCFfwDIMI5R1evnmwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html cfeb4fb8846dee41",title:"tutorial html cfeb4fb8846dee41",src:"/cp4i-demohub/static/5ae50df7b04a8ded948e1190ea084930/a6fa6/tutorial_html_cfeb4fb8846dee41.png",srcSet:["/cp4i-demohub/static/5ae50df7b04a8ded948e1190ea084930/7fc1e/tutorial_html_cfeb4fb8846dee41.png 288w","/cp4i-demohub/static/5ae50df7b04a8ded948e1190ea084930/a5df1/tutorial_html_cfeb4fb8846dee41.png 576w","/cp4i-demohub/static/5ae50df7b04a8ded948e1190ea084930/a6fa6/tutorial_html_cfeb4fb8846dee41.png 836w"],sizes:"(max-width: 836px) 100vw, 836px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(l.b)("p",{parentName:"li"},"   ",Object(l.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"834px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB2UlEQVQ4y42U7UsUURTG97/sb+lDhEULkUgiq2hEfYgCwTT8GPSpUNGyNypal0SS2dl1Xu7ceb1vj+fecddZ3FUvPJwzM/f+7nPOnZmWUgpaayjVlJqMupbWk3lTxhhUQqAFGjY59foYBiEGwwCeP0AUMwRRjP5gSM98BGGEm4aQEi1LFkIiDBnCiOGMFjLOESccjGRBIYFjltT3KVpVVeUgdr3VJVAbKKPAdYowiclZjCzPwBgjYOKcRpQnPHVwK7tpXhQzgDCQXMN7w1D6CgVtkJcUhUZGUSgzs8QRaAJok7RX4vDOMf5/jNELEvw7ZeiHGeK0RJpXdsXYSVNTHdoTcgdDFSh3QApS6alOmoBp8BpIifZ94NEDZL//wksVoqTAGSvAc3GlNK2vyr5adsoYaIIAurMMeXyCkq6LUlIf5dhp08V1oxKNks01jR/BikJiY6uLjXdHF7GLze0jvF7/g509z1Fa1rLzS19FvRhTG28H5wLtJ/t42jnEwtIXzC9+Rmf1G+bae1h/23VzLh3OaHYTnGYCjxcOcO/hDtrzNXiuvYu79z9ha7t3AbxFb0bAPJd49uInlla+YvX5D7x89QvLa9+d2/cfTuqS5ejncAvdtHlZCZwDVmIxL59xrloAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 95cbfb50e3695ef5",title:"tutorial html 95cbfb50e3695ef5",src:"/cp4i-demohub/static/a62d3ffc47dd19ee9e96a040f35ab8a4/4ff8c/tutorial_html_95cbfb50e3695ef5.png",srcSet:["/cp4i-demohub/static/a62d3ffc47dd19ee9e96a040f35ab8a4/7fc1e/tutorial_html_95cbfb50e3695ef5.png 288w","/cp4i-demohub/static/a62d3ffc47dd19ee9e96a040f35ab8a4/a5df1/tutorial_html_95cbfb50e3695ef5.png 576w","/cp4i-demohub/static/a62d3ffc47dd19ee9e96a040f35ab8a4/4ff8c/tutorial_html_95cbfb50e3695ef5.png 834w"],sizes:"(max-width: 834px) 100vw, 834px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(l.b)("h2",{parentName:"li"},"Test the API"))),Object(l.b)("p",null,"The API Connect Developer Portal allows consumers to test the APIs\ndirectly from the website. This feature may be enabled or disabled\nper-API."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Open the ",Object(l.b)("strong",{parentName:"p"},"inventory 1.0.0")," API to browse the API definition."),Object(l.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.08333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAABvUlEQVQ4y52TXWsUMRSG8//0ouplL6qCiPU/9EboTb0oeCn+CX+DIEILFiy9KpbtzvdHNsl8JZPZ15OZXbq7nSmLA0+SE5I3J2/OsLPzC3z5+htn55c4+fQDh+9P8OrtB7x8/REHR9S/OabxMV6scPGzw3d4PgHDEljMGhhtARf0/P/HbNVh9i1H7GWY+T78IIIfRvCCEHM/xL0XQCoFrTWMMei6brV1OQqrKbO66VC3hNmm0i2qpkWt94cJUeLu7xw8XUBk26iigapbqMrsDZNxDnF3CxVHkBmHTPO+F1ECGWcoKPuCFhYkvA9M8QK4/o7q/goL82BuZy1U4gTtSnA/mEo4jORoyHRtLFoSsmS8rui68SCoRjMcE3QephzZzEfuhcjm/oqA5jyIXDwS3B2vWcdMUjMPUwh6gDFPxsQ2RbbFnYc0EIV+tHj35F3Rsnb7akhKxPWuvJzXbCqbKdZrrO0QJQm8MEDOORX8cniUYqKepg5wc7IcyuHXRYDTzz/x5zrtYzffZ1iS8Zs8JfbQN+S9xNVNjDBRdN1meBTXJFwhXRTI6K+JcwWu6lHRTUFZ6v6KlRlKaIhb/APi3mjJnBmU9gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 9830850c1b13f9c1",title:"tutorial html 9830850c1b13f9c1",src:"/cp4i-demohub/static/9ae48fec6b8b5ea9083c9ce515938794/3cbba/tutorial_html_9830850c1b13f9c1.png",srcSet:["/cp4i-demohub/static/9ae48fec6b8b5ea9083c9ce515938794/7fc1e/tutorial_html_9830850c1b13f9c1.png 288w","/cp4i-demohub/static/9ae48fec6b8b5ea9083c9ce515938794/a5df1/tutorial_html_9830850c1b13f9c1.png 576w","/cp4i-demohub/static/9ae48fec6b8b5ea9083c9ce515938794/3cbba/tutorial_html_9830850c1b13f9c1.png 1152w","/cp4i-demohub/static/9ae48fec6b8b5ea9083c9ce515938794/2e899/tutorial_html_9830850c1b13f9c1.png 1370w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click the [","[GET\n/Items]","] operation\non the left palette.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"In the right column, you will find information about the request\nparameters and links to the response schemas.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click the [","[Try\nit]","] tab."),Object(l.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.27777777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAABxUlEQVQ4y6VSy27TQBT1f/IDpaKsQCiVimhYdoO6qljAgn9hASu2SFFK0taJX+PxeF6OncO9N7GQSpsuaunI8zz3nHMn+frlJ64+/8Jk+g3H785wMpni5HQq/1eTcxy9fY+XhKN7kLU3Z3h9+hHnF5d4cUxnP3xCAvUbQadwscNzvjTtYPSAJK89jOuh24jaOFS1obFD6zyyokLdtCiqGmsaM7JSyZyR7/+l0misgQsByeJuTQQB1m+gGoc0V6h0S2OL65sUq7xCXtZIs1KwLhQVsVJI7cFzRXfKukUyWxZYFQ1K7YVwJBOV1sOH+IDB7YNoWo9kfpNhtkiJ0IlSJtsRerGSkbquH9AP24MYtnvCP7drFKqFj4OQcI4jeF6QjVKTRSr2KIynDIPcIcJMcmspQ95IKbOSGiMNIvuGbFsfqUnhSWgmnC9XWKaFEIpNIhsta2Opixqx6xGeAJ/hwsldVokyuydkZdyc8elwl13YUCSHEWJP54nQuE7UjQrHpkiGpJAtO6psD4CJGNIUYyPMI4TWBbkgKkK3Q+z+jWW+wYZeAT8b3ksaIryvcOxyY70EvVP7P3jdUCzzhcL3H7eYXVf4C5T50IC0gVT+AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html a16511906f41b73",title:"tutorial html a16511906f41b73",src:"/cp4i-demohub/static/1ed4f5b2f561860b51aabbbf07a3eb8e/3cbba/tutorial_html_a16511906f41b73.png",srcSet:["/cp4i-demohub/static/1ed4f5b2f561860b51aabbbf07a3eb8e/7fc1e/tutorial_html_a16511906f41b73.png 288w","/cp4i-demohub/static/1ed4f5b2f561860b51aabbbf07a3eb8e/a5df1/tutorial_html_a16511906f41b73.png 576w","/cp4i-demohub/static/1ed4f5b2f561860b51aabbbf07a3eb8e/3cbba/tutorial_html_a16511906f41b73.png 1152w","/cp4i-demohub/static/1ed4f5b2f561860b51aabbbf07a3eb8e/0b124/tutorial_html_a16511906f41b73.png 1728w","/cp4i-demohub/static/1ed4f5b2f561860b51aabbbf07a3eb8e/fa518/tutorial_html_a16511906f41b73.png 2232w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"If you only have one application registered, it will be\nautomatically selected in the ",Object(l.b)("strong",{parentName:"p"},"[Client\nID]")," drop-down menu. If you have more\nthan one, select the application which is subscribed to this API\nProduct.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Paste your ",Object(l.b)("strong",{parentName:"p"},"[Client Secret]")," into the\nprovided field.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click the [","[",Object(l.b)("strong",{parentName:"p"},"Send"),"]","] button\nto invoke the API.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Scroll down to see the call results."))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"[Note: If running for the first time, you may see Code: 0 No response\nreceived. Causes include a lack of CORS support on the target server,\nthe server being unavailable, or an untrusted certificate being\nencountered. Clicking the link below will open the server in a new tab.\nIf the browser displays a certificate issue, you may choose to accept it\nand return here to test again.]")),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.27777777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACEElEQVQ4y6VTTW+bQBDl/6t3p1UPSavETg89JFJU+dA/0ENsV4mxY2PMh2H5WFhgwXZSvc4uwUnq3Ir0NDDsvJk3D4zhcIGbHzbO+j9xcnaBT18vCYMWXwbonV7g5D3Q2d7pOT6ff0P/+zU+9Pr4OLiCAW5iW4Rodnv8z2XOCuTZE4w0lyiqLfKyARcVeF62kZCXtUZWyEPuXxRSYvQ7xM1widkihuEzDiF3qJpHZFQcxFwTqAbuhsFae1h7AcI4Q8wLRGkOlrxA5VgisGEZ1HCG5SVgnLoVWyJsiEhqQlE1mmhpu5rUdjZYOb4mUM3Lev8GVbPXNYbtJ1h5DKmo9VRBxA9yk6zUubLekYqtLhC0nkK+hXiO6qyx9hliKqx3f3SBmk5BHZgvbUznFizbw8PSwdoN9TRy+wTZHEM1owkj2lumD70m7MwIghR+nMBNIkRCgFfygKyqKVZIy0o/563kCMqYtsOrCanbMnYxcUxM/Clu/Xvcencak42p44jyY8KI3qmYiAKGE8S0s/poQqFcThnMYIX70MIidjCP1gjyFIHgFDk2dB+K7JDLyFBDESnXFDrCvKj1J1TJPRJWIsxyKiSzSJo2gEzKZdMa1ZmijFOSX2x/PJK8iByMHZLk3uGXOz7I6ySOujU857Tk7pt6l5B2OGX0B0QrkmvDZBYeSHYr38aMrfSzuleRFxX+ArQjxnHH9nwUAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 1b2581520ef305f",title:"tutorial html 1b2581520ef305f",src:"/cp4i-demohub/static/eafb97775e3d73edace60aa7203dacd6/3cbba/tutorial_html_1b2581520ef305f.png",srcSet:["/cp4i-demohub/static/eafb97775e3d73edace60aa7203dacd6/7fc1e/tutorial_html_1b2581520ef305f.png 288w","/cp4i-demohub/static/eafb97775e3d73edace60aa7203dacd6/a5df1/tutorial_html_1b2581520ef305f.png 576w","/cp4i-demohub/static/eafb97775e3d73edace60aa7203dacd6/3cbba/tutorial_html_1b2581520ef305f.png 1152w","/cp4i-demohub/static/eafb97775e3d73edace60aa7203dacd6/0b124/tutorial_html_1b2581520ef305f.png 1728w","/cp4i-demohub/static/eafb97775e3d73edace60aa7203dacd6/440c9/tutorial_html_1b2581520ef305f.png 2238w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(l.b)("h2",null,"Summary"),Object(l.b)("p",null,"You completed the APIC Dev Jam Lab 2 - The Developer Portal Experience.\nThroughout the tutorial, you explored the key takeaways: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Configure Developer Portal and publish the APIs.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Create a Portal Account. ")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Create App and Subscribe to Plan")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Test API in Developer Portal. "))),Object(l.b)("p",null,"Continue the APIC Dev Jam! Go to ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"../Lab3"}),"APIC Dev Jam - Lab 3 - Add OAuth\nSecurity to your API")," to\nlearn about configuring an OAuth provider service. "))}s.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-apic-dev-jam-lab-2-index-md-3894b4f54afc55d5a0f8.js.map