"use strict";(self.webpackChunkgasps_docs=self.webpackChunkgasps_docs||[]).push([[722],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||o;return t?r.createElement(d,i(i({ref:n},l),{},{components:t})):r.createElement(d,i({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},779:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={title:"Game Functions",sidebar_position:1},i=void 0,c={unversionedId:"functions/functions",id:"functions/functions",title:"Game Functions",description:"These are our game specific functions, you're required to modify these for games that use custom replication systems such as Phantom Forces.",source:"@site/docs/sense/functions/functions.md",sourceDirName:"functions",slug:"/functions/",permalink:"/sense/functions/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Game Functions",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Configuring",permalink:"/sense/configuration/configuring"},next:{title:"ESP",permalink:"/sense/esp/"}},s={},u=[],l={toc:u},p="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These are our game specific functions, you're required to modify these for games that use custom replication systems such as Phantom Forces."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'function EspInterface.getWeapon(player)\n    return "Unknown";\nend\n\nfunction EspInterface.isFriendly(player)\n    return player.Team and player.Team == localPlayer.Team;\nend\n\nfunction EspInterface.getTeamColor(player)\n    return player.Team and player.Team.TeamColor and player.Team.TeamColor.Color;\nend\n\nfunction EspInterface.getCharacter(player)\n    return player.Character;\nend\n\nfunction EspInterface.getHealth(player)\n    local character = player and EspInterface.getCharacter(player);\n    local humanoid = character and findFirstChildOfClass(character, "Humanoid");\n    if humanoid then\n        return humanoid.Health, humanoid.MaxHealth;\n    end\n    return 100, 100;\nend\n')))}f.isMDXComponent=!0}}]);