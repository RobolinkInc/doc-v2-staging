(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{302:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return f}));var r=t(3),o=t(7),c=(t(0),t(377)),i=["components"],a={custom_edit_url:null,title:"turn_off_LED()",taxonomy:{category:["LED"],tag:["CDM-library"]},menu:"turn_off_LED()"},u={unversionedId:"codrone-mini/python/LED/turn-off-led",id:"codrone-mini/python/LED/turn-off-led",isDocsHomePage:!1,title:"turn_off_LED()",description:"Description",source:"@site/docs/codrone-mini/python/05-LED/05-turn-off-led.md",sourceDirName:"codrone-mini/python/05-LED",slug:"/codrone-mini/python/LED/turn-off-led",permalink:"/doc-v2/docs/codrone-mini/python/LED/turn-off-led",editUrl:null,version:"current",sidebarPosition:5,frontMatter:{custom_edit_url:null,title:"turn_off_LED()",taxonomy:{category:["LED"],tag:["CDM-library"]},menu:"turn_off_LED()"},sidebar:"cdmSideBar",previous:{title:"reset_LED()",permalink:"/doc-v2/docs/codrone-mini/python/LED/reset-led"}},l=[],p={toc:l};function f(e){var n=e.components,t=Object(o.a)(e,i);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"description"},"Description"),Object(c.b)("p",null,"This function turns off the LED."),Object(c.b)("h5",{id:"syntax"},"Syntax"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"turn_off_LED()"),Object(c.b)("br",null)),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"example-code"},"Example Code"),Object(c.b)("h6",{id:"python"},"Python"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\n\ndrone.turn_off_LED()\n\ndrone.close()\n")))}f.isMDXComponent=!0},377:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},f=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(t),s=r,b=f["".concat(i,".").concat(s)]||f[s]||d[s]||c;return t?o.a.createElement(b,a(a({ref:n},l),{},{components:t})):o.a.createElement(b,a({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=s;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<c;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);