(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{296:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return u})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return m}));var n=t(3),o=t(7),i=(t(0),t(339)),a=["components"],c={custom_edit_url:null,title:"smooth_reverse()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"smooth_reverse()"},u={unversionedId:"zumi/Driving/smooth-reverse",id:"zumi/Driving/smooth-reverse",isDocsHomePage:!1,title:"smooth_reverse()",description:"Description",source:"@site/docs/zumi/03-Driving/28-smooth-reverse.md",sourceDirName:"zumi/03-Driving",slug:"/zumi/Driving/smooth-reverse",permalink:"/doc-v2/docs/zumi/Driving/smooth-reverse",editUrl:null,version:"current",sidebarPosition:28,frontMatter:{custom_edit_url:null,title:"smooth_reverse()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"smooth_reverse()"},sidebar:"someSidebar",previous:{title:"smooth_forward()",permalink:"/doc-v2/docs/zumi/Driving/smooth-forward"},next:{title:"smooth_turn_left()",permalink:"/doc-v2/docs/zumi/Driving/smooth-turn-left"}},l=[],s={toc:l};function m(e){var r=e.components,t=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"Causes Zumi to gradually accelerate in reverse to max speed during a given duration before decelerating back to zero."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"smooth_reverse(duration)"),Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"smooth_reverse(duration, rate=1)"),Object(i.b)("br",null)),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"duration: Total duration of drive command including acceleration and deceleration",Object(i.b)("br",null),"\nrate: rate at which speed changes. Default to 1",Object(i.b)("br",null)),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom zumi.zumi import Zumi\nimport time\nzumi = Zumi()\n\nzumi.smooth_reverse(3)\ntime.sleep(1)\nzumi.smooth_reverse(duration=3,rate=2)\n\n")))}m.isMDXComponent=!0},339:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},m=function(e){var r=s(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=s(t),b=n,d=m["".concat(a,".").concat(b)]||m[b]||p[b]||i;return t?o.a.createElement(d,c(c({ref:r},l),{},{components:t})):o.a.createElement(d,c({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);