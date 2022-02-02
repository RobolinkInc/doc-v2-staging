(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(312)),c=["components"],i={custom_edit_url:null,title:"rotate180()",menu:"rotate180()",taxonomy:null,category:"flight-command-movement"},l={unversionedId:"codrone-pro/flight-commands-movement/rotate-180",id:"codrone-pro/flight-commands-movement/rotate-180",isDocsHomePage:!1,title:"rotate180()",description:"Description",source:"@site/docs/codrone-pro/05-flight-commands-movement/05-rotate-180.md",sourceDirName:"codrone-pro/05-flight-commands-movement",slug:"/codrone-pro/flight-commands-movement/rotate-180",permalink:"/doc-v2/docs/codrone-pro/flight-commands-movement/rotate-180",editUrl:null,version:"current",sidebarPosition:5,frontMatter:{custom_edit_url:null,title:"rotate180()",menu:"rotate180()",taxonomy:null,category:"flight-command-movement"},sidebar:"codroneProSideBar",previous:{title:"hover()",permalink:"/doc-v2/docs/codrone-pro/flight-commands-movement/hover"},next:{title:"turn_degree()",permalink:"/doc-v2/docs/codrone-pro/flight-commands-movement/turn-degree"}},m=[],u={toc:m};function p(e){var t=e.components,n=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This function makes the drone rotate 180 degrees. Only rotates in a random direction, because this is a pre-set flight event in the firmware."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"rotate180()")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\n\ndef main():\n    drone = CoDrone.CoDrone()\n    drone.pair()\n\n    drone.takeoff()\n    drone.rotate180()\n\nif __name__ == '__main__':\n    main()\n\n")),Object(a.b)("h6",{id:"arduino"},"Arduino"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},"//not yet\n")))}p.isMDXComponent=!0},312:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=o.a.createContext({}),u=function(e){var t=o.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),s=r,f=p["".concat(c,".").concat(s)]||p[s]||d[s]||a;return n?o.a.createElement(f,i(i({ref:t},m),{},{components:n})):o.a.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var m=2;m<a;m++)c[m]=n[m];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);