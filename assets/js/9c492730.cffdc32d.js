(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{257:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(377)),i=["components"],c={custom_edit_url:null,title:"angry()",published:!0,taxonomy:{category:["personality"],tag:["zumi-library"]},menu:"angry()"},l={unversionedId:"zumi/python/Personality/angry-personality",id:"zumi/python/Personality/angry-personality",isDocsHomePage:!1,title:"angry()",description:"Description",source:"@site/docs/zumi/python/07-Personality/01-angry-personality.md",sourceDirName:"zumi/python/07-Personality",slug:"/zumi/python/Personality/angry-personality",permalink:"/doc-v2/docs/zumi/python/Personality/angry-personality",editUrl:null,version:"current",sidebarPosition:1,frontMatter:{custom_edit_url:null,title:"angry()",published:!0,taxonomy:{category:["personality"],tag:["zumi-library"]},menu:"angry()"},sidebar:"someSidebar",previous:{title:"sleepy_right()",permalink:"/doc-v2/docs/zumi/python/Screen/sleepy-right"},next:{title:"awake()",permalink:"/doc-v2/docs/zumi/python/Personality/awake"}},u=[],p={toc:u};function s(e){var n=e.components,t=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"makes zumi get angry."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"angry()"),Object(a.b)("br",null)),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom zumi.zumi import Zumi\nfrom zumi.util.screen import Screen\nfrom zumi.personality import Personality\n\nzumi = Zumi()\nscreen = Screen()\npersonality = Personality(zumi, screen)\n\npersonality.angry()\n")))}s.isMDXComponent=!0},377:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},y={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,b=s["".concat(i,".").concat(m)]||s[m]||y[m]||a;return t?o.a.createElement(b,c(c({ref:n},u),{},{components:t})):o.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);