(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{344:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(377)),i=["components"],c={custom_edit_url:null,title:"hazard_lights_off()",menu:"hazard_lights_off()",taxonomy:{tag:"zumi-library",category:"LEDs-and-Buzzer"}},u={unversionedId:"zumi/python/LEDs-and-buzzer/hazard-lights-off",id:"zumi/python/LEDs-and-buzzer/hazard-lights-off",isDocsHomePage:!1,title:"hazard_lights_off()",description:"Description",source:"@site/docs/zumi/python/04-LEDs-and-buzzer/05-hazard-lights-off.md",sourceDirName:"zumi/python/04-LEDs-and-buzzer",slug:"/zumi/python/LEDs-and-buzzer/hazard-lights-off",permalink:"/doc-v2/docs/zumi/python/LEDs-and-buzzer/hazard-lights-off",editUrl:null,version:"current",sidebarPosition:5,frontMatter:{custom_edit_url:null,title:"hazard_lights_off()",menu:"hazard_lights_off()",taxonomy:{tag:"zumi-library",category:"LEDs-and-Buzzer"}},sidebar:"someSidebar",previous:{title:"brake_lights_on()",permalink:"/doc-v2/docs/zumi/python/LEDs-and-buzzer/break-lights-on"},next:{title:"hazard_lights_on()",permalink:"/doc-v2/docs/zumi/python/LEDs-and-buzzer/hazar-lights-on"}},l=[],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"Turns off flashing front and back LEDs"),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"hazard_lights_off()"),Object(a.b)("br",null)),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom zumi.zumi import Zumi \nimport time\n\nzumi = Zumi()\nzumi.hazard_lights_on()\ntime.sleep(2)\nzumi.hazard_lights_off()\n")))}p.isMDXComponent=!0},377:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);