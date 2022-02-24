(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{186:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),l=(r(0),r(339)),a=["components"],i={custom_edit_url:null,title:"set_roll()",menu:"set_roll() / setRoll()",taxonomy:null,category:"flight-variables"},c={unversionedId:"codrone-pro/flight-variables/set-roll",id:"codrone-pro/flight-variables/set-roll",isDocsHomePage:!1,title:"set_roll()",description:"Description",source:"@site/docs/codrone-pro/06-flight-variables/07-set-roll.md",sourceDirName:"codrone-pro/06-flight-variables",slug:"/codrone-pro/flight-variables/set-roll",permalink:"/doc-v2/docs/codrone-pro/flight-variables/set-roll",editUrl:null,version:"current",sidebarPosition:7,frontMatter:{custom_edit_url:null,title:"set_roll()",menu:"set_roll() / setRoll()",taxonomy:null,category:"flight-variables"},sidebar:"codroneProSideBar",previous:{title:"set_pitch()",permalink:"/doc-v2/docs/codrone-pro/flight-variables/set-pitch"},next:{title:"set_throttle()",permalink:"/doc-v2/docs/codrone-pro/flight-variables/set-throttle"}},s=[],p={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,a);return Object(l.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h5",{id:"description"},"Description"),Object(l.b)("p",null,"This is a setter function that allows you to set the roll variable."),Object(l.b)("h5",{id:"syntax"},"Syntax"),Object(l.b)("p",null,"Python: ",Object(l.b)("inlineCode",{parentName:"p"},"set_roll(power)"),Object(l.b)("br",null),"\nArduino: ",Object(l.b)("inlineCode",{parentName:"p"},"setRoll(power)")),Object(l.b)("h5",{id:"parameters"},"Parameters"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"power"),": An int from -100 to 100 that sets the roll variable.  The number represents the direction and power of the output for that flight motion variable.  Negative roll is left, positive roll is right."),Object(l.b)("h5",{id:"returns"},"Returns"),Object(l.b)("p",null,"None"),Object(l.b)("h5",{id:"example-code"},"Example Code"),Object(l.b)("h6",{id:"python"},"Python"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\n\ndrone = CoDrone.CoDrone()\ndrone.pair()\ndrone.takeoff()\n\n# Drone goes right for 1 second with 50 power\ndrone.set_roll(50)\ndrone.move(1)\n\ndrone.land()\ndrone.close()\n")),Object(l.b)("h6",{id:"arduino"},"Arduino"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"//Arduino code\n#include<CoDrone.h>     //header\n\nvoid setup(){\n    //open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);\n\n    CoDrone.takeoff();\n    CoDrone.setRoll(60);        // set roll power for 60%\n    CoDrone.move(5);        // move drone for 5 seconds\n    CoDrone.land();\n}\n\nvoid loop(){\n\n}\n")))}u.isMDXComponent=!0},339:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,f=u["".concat(a,".").concat(b)]||u[b]||d[b]||l;return r?o.a.createElement(f,i(i({ref:t},s),{},{components:r})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);