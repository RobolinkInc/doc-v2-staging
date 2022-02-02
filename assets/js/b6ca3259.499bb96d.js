(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{234:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),i=(n(0),n(312)),a=["components"],c={custom_edit_url:null,title:"draw_point()",published:!0,taxonomy:{category:["screen"],tag:["zumi-library"]},menu:"draw_point()"},l={unversionedId:"zumi/Screen/draw-point",id:"zumi/Screen/draw-point",isDocsHomePage:!1,title:"draw_point()",description:"Description",source:"@site/docs/zumi/06-Screen/13-draw-point.md",sourceDirName:"zumi/06-Screen",slug:"/zumi/Screen/draw-point",permalink:"/doc-v2/docs/zumi/Screen/draw-point",editUrl:null,version:"current",sidebarPosition:13,frontMatter:{custom_edit_url:null,title:"draw_point()",published:!0,taxonomy:{category:["screen"],tag:["zumi-library"]},menu:"draw_point()"},sidebar:"someSidebar",previous:{title:"draw_line()",permalink:"/doc-v2/docs/zumi/Screen/draw-line"},next:{title:"draw_polygon()",permalink:"/doc-v2/docs/zumi/Screen/draw-polygon"}},u=[],p={toc:u};function b(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"Draws a single pixel at the set x and y coordinate."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"draw_point(x, y)"),Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"draw_point(x, y,fill_in=True)"),Object(i.b)("br",null)),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"x: the x coordinate",Object(i.b)("br",null),"\ny: the y coordinate",Object(i.b)("br",null),"\nfill_in: Boolean that selects if the point will be filled in (white). Default to True.",Object(i.b)("br",null)),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom zumi.util.screen import Screen\nimport time\n\nscreen=Screen()\nscreen.draw_point(100,30)\n")))}b.isMDXComponent=!0},312:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(n),s=r,m=b["".concat(a,".").concat(s)]||b[s]||d[s]||i;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);