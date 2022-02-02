(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{129:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),o=(r(0),r(312)),a=["components"],c={custom_edit_url:null,title:"square_left()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"square_left()"},u={unversionedId:"zumi/Driving/square-left",id:"zumi/Driving/square-left",isDocsHomePage:!1,title:"square_left()",description:"Description",source:"@site/docs/zumi/03-Driving/28-square-left.md",sourceDirName:"zumi/03-Driving",slug:"/zumi/Driving/square-left",permalink:"/doc-v2/docs/zumi/Driving/square-left",editUrl:null,version:"current",sidebarPosition:28,frontMatter:{custom_edit_url:null,title:"square_left()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"square_left()"},sidebar:"someSidebar",previous:{title:"speed_calibration()",permalink:"/doc-v2/docs/zumi/Driving/speed-calibration"},next:{title:"square_right()",permalink:"/doc-v2/docs/zumi/Driving/square-right"}},l=[],s={toc:l};function p(e){var t=e.components,r=Object(i.a)(e,a);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"description"},"Description"),Object(o.b)("p",null,"Drives Zumi in a counterclockwise square."),Object(o.b)("h5",{id:"syntax"},"Syntax"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"square_left()"),Object(o.b)("br",null),"\n",Object(o.b)("inlineCode",{parentName:"p"},"square_left(speed=40, seconds=1.0)"),Object(o.b)("br",null)),Object(o.b)("h5",{id:"parameters"},"Parameters"),Object(o.b)("p",null,"speed: Drive speed between 0-80",Object(o.b)("br",null),"\nseconds: Duration in seconds Zumi drives for each side"),Object(o.b)("h5",{id:"returns"},"Returns"),Object(o.b)("p",null,"None"),Object(o.b)("h5",{id:"example-code"},"Example Code"),Object(o.b)("h6",{id:"python"},"Python"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom zumi.zumi import Zumi\nimport time\nzumi = Zumi()\nzumi.square_left(seconds=1.5)\n")))}p.isMDXComponent=!0},312:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,d=p["".concat(a,".").concat(m)]||p[m]||b[m]||o;return r?i.a.createElement(d,c(c({ref:t},l),{},{components:r})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);