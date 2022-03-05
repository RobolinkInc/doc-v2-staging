(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{275:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),i=(t(0),t(377)),a=["components"],c={custom_edit_url:null,id:"hover",title:"hover()"},l={unversionedId:"codrone-mini/python/Flight-Commands-Movement/hover",id:"codrone-mini/python/Flight-Commands-Movement/hover",isDocsHomePage:!1,title:"hover()",description:"Description",source:"@site/docs/codrone-mini/python/03-Flight-Commands-Movement/04-hover.md",sourceDirName:"codrone-mini/python/03-Flight-Commands-Movement",slug:"/codrone-mini/python/Flight-Commands-Movement/hover",permalink:"/doc-v2/docs/codrone-mini/python/Flight-Commands-Movement/hover",editUrl:null,version:"current",sidebarPosition:4,frontMatter:{custom_edit_url:null,id:"hover",title:"hover()"},sidebar:"cdmSideBar",previous:{title:"go()",permalink:"/doc-v2/docs/codrone-mini/python/Flight-Commands-Movement/go"},next:{title:"turn()",permalink:"/doc-v2/docs/codrone-mini/python/Flight-Commands-Movement/turn"}},d=[],p={toc:d};function u(e){var n=e.components,t=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This function makes the drone hover for a given amount of time. ",Object(i.b)("br",null),"\nIf given no parameters, it will hover indefinitely until given a another command."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"hover(duration)")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"duration"),": the duration of the hovering in seconds.",Object(i.b)("br",null)),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\ndrone.takeoff()\n    \ndrone.hover(3)   # hover for 3 seconds\n#drone.hover()   # hover indefinitely \ndrone.land()\ndrone.close()\n")))}u.isMDXComponent=!0},377:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),p=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),s=r,b=u["".concat(a,".").concat(s)]||u[s]||m[s]||i;return t?o.a.createElement(b,c(c({ref:n},d),{},{components:t})):o.a.createElement(b,c({ref:n},d))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var d=2;d<i;d++)a[d]=t[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);