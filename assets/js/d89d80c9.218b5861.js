(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{279:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),i=(r(0),r(317)),a=["components"],c={custom_edit_url:null,title:"calibrate_gyro()",published:!0,taxonomy:{category:["sensors","MPU"],tag:["zumi-library"]},menu:"calibrate_gyro()"},l={unversionedId:"zumi/MPU/calibrate-gyro",id:"zumi/MPU/calibrate-gyro",isDocsHomePage:!1,title:"calibrate_gyro()",description:"Description",source:"@site/docs/zumi/01-MPU/01-calibrate-gyro.md",sourceDirName:"zumi/01-MPU",slug:"/zumi/MPU/calibrate-gyro",permalink:"/doc-v2/docs/zumi/MPU/calibrate-gyro",editUrl:null,version:"current",sidebarPosition:1,frontMatter:{custom_edit_url:null,title:"calibrate_gyro()",published:!0,taxonomy:{category:["sensors","MPU"],tag:["zumi-library"]},menu:"calibrate_gyro()"},sidebar:"someSidebar",previous:{title:"Zumi Library Reference",permalink:"/doc-v2/docs/zumi/home/blockly-reference-senior"},next:{title:"calibrate_MPU()",permalink:"/doc-v2/docs/zumi/MPU/calibrate-mpu"}},u=[],s={toc:u};function p(e){var t=e.components,r=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"Reads from the previous MPU offsets file unless the file does not exist. If an offsets file does not exist, then it will\ncreate an offsets file by taking the average of multiple readings from the sensor. While running this function, make\nsure Zumi is not moving and is resting on a flat surface. This function calls ",Object(i.b)("inlineCode",{parentName:"p"},"zumi.mpu.calibrate_MPU()"),"."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"calibrate_gyro()"),Object(i.b)("br",null)),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nfrom zumi.zumi import Zumi\nzumi = Zumi()\nzumi.calibrate_gyro()\nprint("Done")\n')))}p.isMDXComponent=!0},317:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(a,".").concat(m)]||p[m]||b[m]||i;return r?o.a.createElement(f,c(c({ref:t},u),{},{components:r})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);