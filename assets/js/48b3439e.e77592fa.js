(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{138:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return d}));var t=r(3),o=r(7),i=(r(0),r(339)),c=["components"],a={custom_edit_url:null,title:"is_flying()",menu:"is_flying() / isFlying()",taxonomy:null,category:"status-checkers"},l={unversionedId:"codrone-pro/status-checkers/is-fliying",id:"codrone-pro/status-checkers/is-fliying",isDocsHomePage:!1,title:"is_flying()",description:"Description",source:"@site/docs/codrone-pro/08-status-checkers/01-is-fliying.md",sourceDirName:"codrone-pro/08-status-checkers",slug:"/codrone-pro/status-checkers/is-fliying",permalink:"/doc-v2/docs/codrone-pro/status-checkers/is-fliying",editUrl:null,version:"current",sidebarPosition:1,frontMatter:{custom_edit_url:null,title:"is_flying()",menu:"is_flying() / isFlying()",taxonomy:null,category:"status-checkers"},sidebar:"codroneProSideBar",previous:{title:"reset_default_led()",permalink:"/doc-v2/docs/codrone-pro/led/reset-default-led"},next:{title:"is_ready_to_fly()",permalink:"/doc-v2/docs/codrone-pro/status-checkers/is-ready-to-fly"}},s=[],u={toc:s};function d(e){var n=e.components,r=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This function checks whether the drone is flying and returns a boolean"),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"Python: ",Object(i.b)("inlineCode",{parentName:"p"},"is_flying()"),Object(i.b)("br",null),"\nArduino: ",Object(i.b)("inlineCode",{parentName:"p"},"isFlying()")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"Boolean of whether the drone is flying"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\n\ndrone = CoDrone.CoDrone()\ndrone.pair()\n\ndrone.takeoff()\n#land if flying.\nif drone.is_flying():\n    drone.land()\ndrone.close()\n")),Object(i.b)("h6",{id:"arduino"},"Arduino"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"//Arduino code\n#include<CoDrone.h>     //header\n\nvoid setup(){\n    //open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);\n\n    // If drone is flying land the drone\n    if(CoDrone.isFlying()==true)    \n        CoDrone.land();\n}\nvoid loop(){\n\n}\n")))}d.isMDXComponent=!0},339:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=t,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?o.a.createElement(b,a(a({ref:n},s),{},{components:r})):o.a.createElement(b,a({ref:n},s))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:t,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);