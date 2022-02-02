(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{305:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return l})),n.d(r,"toc",(function(){return u})),n.d(r,"default",(function(){return s}));var t=n(3),a=n(7),c=(n(0),n(312)),o=["components"],i={custom_edit_url:null,title:"draw_arc()",published:!0,taxonomy:{category:["screen"],tag:["zumi-library"]},menu:"draw_arc()"},l={unversionedId:"zumi/Screen/draw-arc",id:"zumi/Screen/draw-arc",isDocsHomePage:!1,title:"draw_arc()",description:"Description",source:"@site/docs/zumi/06-Screen/07-draw-arc.md",sourceDirName:"zumi/06-Screen",slug:"/zumi/Screen/draw-arc",permalink:"/doc-v2/docs/zumi/Screen/draw-arc",editUrl:null,version:"current",sidebarPosition:7,frontMatter:{custom_edit_url:null,title:"draw_arc()",published:!0,taxonomy:{category:["screen"],tag:["zumi-library"]},menu:"draw_arc()"},sidebar:"someSidebar",previous:{title:"close_eyes()",permalink:"/doc-v2/docs/zumi/Screen/close-eyes"},next:{title:"draw_chord()",permalink:"/doc-v2/docs/zumi/Screen/draw-chord"}},u=[],b={toc:u};function s(e){var r=e.components,n=Object(a.a)(e,o);return Object(c.b)("wrapper",Object(t.a)({},b,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"description"},"Description"),Object(c.b)("p",null,"Draws an arc within the boundaries of points x1,y1, and x2,y2 at the specified starting and ending angles."),Object(c.b)("h5",{id:"syntax"},"Syntax"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"draw_arc(x1, y1, x2, y2, start_ang, end_ang)"),Object(c.b)("br",null),"\n",Object(c.b)("inlineCode",{parentName:"p"},"draw_arc(x1, y1, x2, y2, start_ang, end_ang,fill_in=True)"),Object(c.b)("br",null)),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,"x1: x coordinate of top-left corner for the rectangle enclosing the arc",Object(c.b)("br",null),"\ny1: y coordinate of top-left corner for the rectangle enclosing the arc",Object(c.b)("br",null),"\nx2: x coordinate of bottom-right corner for the rectangle enclosing the arc",Object(c.b)("br",null),"\ny2: y coordinate of bottom-right corner for the rectangle enclosing the arc",Object(c.b)("br",null),"\nstart_ang: starting arc angle",Object(c.b)("br",null),"\nend_ang: ending arc angle",Object(c.b)("br",null),"\nfill_in: Boolean that selects if the triangle will be filled in (white). Default to True.",Object(c.b)("br",null)),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"example-code"},"Example Code"),Object(c.b)("h6",{id:"python"},"Python"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom zumi.util.screen import Screen\n\nscreen=Screen()\nscreen.draw_arc(0,0,50,50,-180,0)\n")))}s.isMDXComponent=!0},312:function(e,r,n){"use strict";n.d(r,"a",(function(){return s})),n.d(r,"b",(function(){return f}));var t=n(0),a=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var r=a.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=b(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},p=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=b(n),p=t,f=s["".concat(o,".").concat(p)]||s[p]||d[p]||c;return n?a.a.createElement(f,i(i({ref:r},u),{},{components:n})):a.a.createElement(f,i({ref:r},u))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,o=new Array(c);o[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);