(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(377)),i=["components"],c={custom_edit_url:null,id:"take-off",title:"takeoff()"},l={unversionedId:"codrone-edu/python/Flight-Commands-Start-Stop/take-off",id:"codrone-edu/python/Flight-Commands-Start-Stop/take-off",isDocsHomePage:!1,title:"takeoff()",description:"Description",source:"@site/docs/codrone-edu/python/02-Flight-Commands-Start-Stop/08-take-off.md",sourceDirName:"codrone-edu/python/02-Flight-Commands-Start-Stop",slug:"/codrone-edu/python/Flight-Commands-Start-Stop/take-off",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Start-Stop/take-off",editUrl:null,version:"current",sidebarPosition:8,frontMatter:{custom_edit_url:null,id:"take-off",title:"takeoff()"},sidebar:"codroneEduSideBar",previous:{title:"set_trim()",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Start-Stop/set-trim"},next:{title:"flip()",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Movement/flip"}},d=[],p={toc:d};function u(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This function makes the drone takeoff and hover.",Object(a.b)("br",null),"\nThe drone will always hover for 3 seconds in order to stabilize before it executes the next command.",Object(a.b)("br",null),"\nIf it receives no command for 8 seconds, it will automatically land."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"takeoff()")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\ndrone.takeoff()\n    \ndrone.hover(3)\ndrone.land()\ndrone.close()\n")))}u.isMDXComponent=!0},377:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,m=u["".concat(i,".").concat(s)]||u[s]||f[s]||a;return n?o.a.createElement(m,c(c({ref:t},d),{},{components:n})):o.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);