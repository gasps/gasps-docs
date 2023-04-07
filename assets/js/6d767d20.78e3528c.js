"use strict";(self.webpackChunkgasps_docs=self.webpackChunkgasps_docs||[]).push([[161],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),c=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=c(e.components);return r.createElement(p.Provider,{value:a},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(t),g=n,m=s["".concat(p,".").concat(g)]||s[g]||d[g]||l;return t?r.createElement(m,i(i({ref:a},u),{},{components:t})):r.createElement(m,i({ref:a},u))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=g;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1420:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(7462),n=(t(7294),t(3905));const l={title:"Textual elements",sidebar_position:1},i="Textual elements in Rayfield",o={unversionedId:"ui-components/text",id:"ui-components/text",title:"Textual elements",description:"Creating a Label",source:"@site/docs/rayfield/ui-components/text.md",sourceDirName:"ui-components",slug:"/ui-components/text",permalink:"/rayfield/ui-components/text",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Textual elements",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Binds",permalink:"/rayfield/interaction/keybinds"}},p={},c=[{value:"Creating a Label",id:"creating-a-label",level:2},{value:"Updating a Label",id:"updating-a-label",level:3},{value:"Creating a Paragraph",id:"creating-a-paragraph",level:2},{value:"Updating a Paragraph",id:"updating-a-paragraph",level:3}],u={toc:c},s="wrapper";function d(e){let{components:a,...t}=e;return(0,n.kt)(s,(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"textual-elements-in-rayfield"},"Textual elements in Rayfield"),(0,n.kt)("h2",{id:"creating-a-label"},"Creating a Label"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'local Label = Tab:CreateLabel("Label Example")\n')),(0,n.kt)("h3",{id:"updating-a-label"},"Updating a Label"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'Label:Set("Label Example")\n')),(0,n.kt)("h2",{id:"creating-a-paragraph"},"Creating a Paragraph"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'local Paragraph = Tab:CreateParagraph({Title = "Paragraph Example", Content = "Paragraph Example"})\n')),(0,n.kt)("h3",{id:"updating-a-paragraph"},"Updating a Paragraph"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'Paragraph:Set({Title = "Paragraph Example", Content = "Paragraph Example"})\n')))}d.isMDXComponent=!0}}]);