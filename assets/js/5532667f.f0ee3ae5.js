(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{148:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return a})),o.d(n,"metadata",(function(){return d})),o.d(n,"toc",(function(){return p})),o.d(n,"default",(function(){return l}));var t=o(3),r=o(7),c=(o(0),o(312)),i=["components"],a={custom_edit_url:null,title:"disconnect()",menu:"disconnect()",taxonomy:null,category:"connection"},d={unversionedId:"codrone-pro/connection/disconnect",id:"codrone-pro/connection/disconnect",isDocsHomePage:!1,title:"disconnect()",description:"Description",source:"@site/docs/codrone-pro/03-connection/01-disconnect.md",sourceDirName:"codrone-pro/03-connection",slug:"/codrone-pro/connection/disconnect",permalink:"/doc-v2/docs/codrone-pro/connection/disconnect",editUrl:null,version:"current",sidebarPosition:1,frontMatter:{custom_edit_url:null,title:"disconnect()",menu:"disconnect()",taxonomy:null,category:"connection"},sidebar:"codroneProSideBar",previous:{title:"CoDrone Pro/Lite Library",permalink:"/doc-v2/docs/codrone-pro/home"},next:{title:"pair()",permalink:"/doc-v2/docs/codrone-pro/connection/pair"}},p=[],u={toc:p};function l(e){var n=e.components,o=Object(r.a)(e,i);return Object(c.b)("wrapper",Object(t.a)({},u,o,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"description"},"Description"),Object(c.b)("p",null,"This function disconnects with the drone that you're connected to."),Object(c.b)("h5",{id:"syntax"},"Syntax"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"disconnect()")),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"example-code"},"Example Code"),Object(c.b)("h6",{id:"python"},"Python"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\n\ndef main():\n    drone = CoDrone.CoDrone()\n    drone.pair()\n\n    drone.takeoff()\n    drone.hover(1)\n    drone.land()\n    drone.disconnect()\n\n\nif __name__ == '__main__':\n    main()\n\n\n")),Object(c.b)("h6",{id:"arduino"},"Arduino"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c"},"//Arduino code\n#include<CoDrone.h>     //header\n\nvoid setup(){\n    //below this have to code in setup\n    //open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);\n\n    CoDrone.takeoff();\n    CoDrone.hover(3);\n    CoDrone.land();\n    CoDrone.disconnect();   // disconnects  \n}\n\nvoid loop(){\n    \n}\n")))}l.isMDXComponent=!0},312:function(e,n,o){"use strict";o.d(n,"a",(function(){return l})),o.d(n,"b",(function(){return f}));var t=o(0),r=o.n(t);function c(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){c(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function d(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)o=c[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)o=c[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=r.a.createContext({}),u=function(e){var n=r.a.useContext(p),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},l=function(e){var n=u(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),l=u(o),b=t,f=l["".concat(i,".").concat(b)]||l[b]||s[b]||c;return o?r.a.createElement(f,a(a({ref:n},p),{},{components:o})):r.a.createElement(f,a({ref:n},p))}));function f(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=o.length,i=new Array(c);i[0]=b;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a.mdxType="string"==typeof e?e:t,i[1]=a;for(var p=2;p<c;p++)i[p]=o[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);