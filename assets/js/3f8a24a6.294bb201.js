(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{124:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return s})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return u}));var t=r(3),o=r(7),a=(r(0),r(312)),i=["components"],c={custom_edit_url:null,title:"is_ready_to_fly()",menu:"is_ready_to_fly() / isReadyToFly()",taxonomy:null,category:"status-checkers"},s={unversionedId:"codrone-pro/status-checkers/is-ready-to-fly",id:"codrone-pro/status-checkers/is-ready-to-fly",isDocsHomePage:!1,title:"is_ready_to_fly()",description:"Description",source:"@site/docs/codrone-pro/08-status-checkers/02-is-ready-to-fly.md",sourceDirName:"codrone-pro/08-status-checkers",slug:"/codrone-pro/status-checkers/is-ready-to-fly",permalink:"/doc-v2/docs/codrone-pro/status-checkers/is-ready-to-fly",editUrl:null,version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,title:"is_ready_to_fly()",menu:"is_ready_to_fly() / isReadyToFly()",taxonomy:null,category:"status-checkers"},sidebar:"codroneProSideBar",previous:{title:"is_flying()",permalink:"/doc-v2/docs/codrone-pro/status-checkers/is-fliying"},next:{title:"is_upside_down()",permalink:"/doc-v2/docs/codrone-pro/status-checkers/is-upside-down"}},l=[],d={toc:l};function u(e){var n=e.components,r=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(t.a)({},d,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This function checks whether the drone is ready to fly by returning a boolean.",Object(a.b)("br",null),"The drone is ready to fly if it is oriented right-side up, and not flying."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"Python: ",Object(a.b)("inlineCode",{parentName:"p"},"is_ready_to_fly()"),Object(a.b)("br",null),"\nArduino: ",Object(a.b)("inlineCode",{parentName:"p"},"isReadyToFly()")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"Boolean of whether the drone is ready to fly."),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\n\ndef main(): \n    drone = CoDrone.CoDrone()\n    drone.pair()\n\n    #land if flying.\n    if drone.is_ready_to_fly():\n        drone.takeoff()\n        \nif __name__ == '__main__':\n    main()\n\n")),Object(a.b)("h6",{id:"arduino"},"Arduino"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},"//Arduino code\n#include<CoDrone.h>     //header\n\nvoid setup(){\n//open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);\n\n    // if drone is ready to fly, take off the drone\n    if(CoDrone.isReadyToFly() == true)  \n        CoDrone.takeoff()   \n}\nvoid loop(){\n    \n}\n\n")))}u.isMDXComponent=!0},312:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return f}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),d=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=d(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},y=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(r),y=t,f=u["".concat(i,".").concat(y)]||u[y]||p[y]||a;return r?o.a.createElement(f,c(c({ref:n},l),{},{components:r})):o.a.createElement(f,c({ref:n},l))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=y;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);