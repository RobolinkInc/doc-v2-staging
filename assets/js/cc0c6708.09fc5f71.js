(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{256:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),c=(r(0),r(312)),i=["components"],a={custom_edit_url:null,title:"back_right_detect()",taxonomy:{category:["Sensors","sensors"],tag:["zumi-library"]},menu:"back_right_detect()"},u={unversionedId:"zumi/Sensors/back-right-detect",id:"zumi/Sensors/back-right-detect",isDocsHomePage:!1,title:"back_right_detect()",description:"Description",source:"@site/docs/zumi/02-Sensors/02-back-right-detect.md",sourceDirName:"zumi/02-Sensors",slug:"/zumi/Sensors/back-right-detect",permalink:"/doc-v2/docs/zumi/Sensors/back-right-detect",editUrl:null,version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,title:"back_right_detect()",taxonomy:{category:["Sensors","sensors"],tag:["zumi-library"]},menu:"back_right_detect()"},sidebar:"someSidebar",previous:{title:"back_left_detect()",permalink:"/doc-v2/docs/zumi/Sensors/back-left-detect"},next:{title:"bottom_left_detect()",permalink:"/doc-v2/docs/zumi/Sensors/bottom-left-detect"}},s=[],l={toc:s};function b(e){var t=e.components,r=Object(o.a)(e,i);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"description"},"Description"),Object(c.b)("p",null,"Returns True if the back right IR sensor detects a value below a threshold. The value decreases as the light reflected back to the receiver increases."),Object(c.b)("h5",{id:"syntax"},"Syntax"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"back_right_detect()"),Object(c.b)("br",null),"\n",Object(c.b)("inlineCode",{parentName:"p"},"back_right_detect(threshold=100)")),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,"threshold: Integer between 0-255"),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"Boolean that returns True if sensor is triggered. ",Object(c.b)("br",null)),Object(c.b)("h5",{id:"example-code"},"Example Code"),Object(c.b)("h6",{id:"python"},"Python"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nfrom zumi.zumi import Zumi\nimport time\n\nzumi = Zumi()\n\nfor i in range(0,100):\n    if zumi.back_right_detect():\n        print("Detected!)\n    time.sleep(0.1) # Delay for I2C\n\n')))}b.isMDXComponent=!0},312:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},b=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||c;return r?o.a.createElement(m,a(a({ref:t},s),{},{components:r})):o.a.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);