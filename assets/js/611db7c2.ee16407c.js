(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{181:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),i=(t(0),t(380)),a=["components"],c={custom_edit_url:null,title:"draw_polygon()",published:!0,taxonomy:{category:["screen"],tag:["zumi-library"]},menu:"draw_polygon()"},l={unversionedId:"zumi/Screen/draw-polygon",id:"zumi/Screen/draw-polygon",isDocsHomePage:!1,title:"draw_polygon()",description:"Description",source:"@site/docs/zumi/06-Screen/14-draw-polygon.md",sourceDirName:"zumi/06-Screen",slug:"/zumi/Screen/draw-polygon",permalink:"/doc-v2/docs/zumi/Screen/draw-polygon",editUrl:null,version:"current",sidebarPosition:14,frontMatter:{custom_edit_url:null,title:"draw_polygon()",published:!0,taxonomy:{category:["screen"],tag:["zumi-library"]},menu:"draw_polygon()"},sidebar:"someSidebar",previous:{title:"draw_point()",permalink:"/doc-v2/docs/zumi/Screen/draw-point"},next:{title:"draw_rect()",permalink:"/doc-v2/docs/zumi/Screen/draw-rect"}},p=[],u={toc:p};function s(e){var n=e.components,t=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"Draws lines between points in a given list ",Object(i.b)("inlineCode",{parentName:"p"},"[(x1,y1),...,(xn,yn)]")," to form a shape."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"}," draw_polygon(points_list)"),Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"}," draw_polygon(points_list,fill_in = True):"),Object(i.b)("br",null)),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"points_list: A list ",Object(i.b)("inlineCode",{parentName:"p"},"[x1,y1,x2,y2,....xn,yn]")," with at least 3 points ",Object(i.b)("br",null),"\nfill_in: Boolean that selects if the polygon will be filled in (white). Default to True.",Object(i.b)("br",null)),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom zumi.util.screen import Screen\nimport time\n\nscreen=Screen()\npoints = [(30,50),(90,10),(20,10),(5,20)]\nscreen.draw_polygon(points)\n")))}s.isMDXComponent=!0},380:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,m=s["".concat(a,".").concat(d)]||s[d]||b[d]||i;return t?o.a.createElement(m,c(c({ref:n},p),{},{components:t})):o.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);