"use strict";(self.webpackChunkgasps_docs=self.webpackChunkgasps_docs||[]).push([[383],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6516:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Introduction",sidebar_position:1},i=void 0,s={unversionedId:"index",id:"index",title:"Introduction",description:"This is the written documentation for the Sirius Sense ESP library.",source:"@site/docs/sense/index.md",sourceDirName:".",slug:"/",permalink:"/sense/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Booting the Library",permalink:"/sense/getting-started/booting-library"}},l={},p=[{value:"Why choose Sense?",id:"why-choose-sense",level:2},{value:"Getting Started",id:"getting-started",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is the written documentation for the Sirius Sense ESP library."),(0,a.kt)("h2",{id:"why-choose-sense"},"Why choose Sense?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2696\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Reliable and Stable"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud83c\udd95 ",(0,a.kt)("strong",{parentName:"p"},"Frequently Updated"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud83d\udd13 ",(0,a.kt)("strong",{parentName:"p"},"Open Sourced"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2699\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Advanced features like")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd11 ",(0,a.kt)("strong",{parentName:"li"},"Key System")),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd17 ",(0,a.kt)("strong",{parentName:"li"},"Discord Auto Joins")),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd14 ",(0,a.kt)("strong",{parentName:"li"},"Notifications with actions")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud83d\udc83 ",(0,a.kt)("strong",{parentName:"p"},"Amazing perfomance while having under 2.5k lines of code!")))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"To get started with Rayfield, check out the sidebar at the left. It provides quick links on how to use all of the Rayfield features for your own project. Keep this documentation around so that you can always refer back to it as you build."),(0,a.kt)("p",null,"Found a missing feature that you can't live without? Please suggest it on Discord ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/sirius"},"(#sirius-forums channel)")," and even consider adding it yourself on GitHub! Rayfield is an open source project and contributions from developers like you are more than welcome!"))}d.isMDXComponent=!0}}]);