(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{316:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),i=(n(0),n(380)),c=["components"],a={custom_edit_url:null,title:"get_pitch()",taxonomy:{category:["flight-variables"],tag:["CDM-library"]},menu:"get_pitch()"},l={unversionedId:"codrone-edu/python/Flight-Variables/get-pitch",id:"codrone-edu/python/Flight-Variables/get-pitch",isDocsHomePage:!1,title:"get_pitch()",description:"Description",source:"@site/docs/codrone-edu/python/04-Flight-Variables/01-get-pitch.md",sourceDirName:"codrone-edu/python/04-Flight-Variables",slug:"/codrone-edu/python/Flight-Variables/get-pitch",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Variables/get-pitch",editUrl:null,version:"current",sidebarPosition:1,frontMatter:{custom_edit_url:null,title:"get_pitch()",taxonomy:{category:["flight-variables"],tag:["CDM-library"]},menu:"get_pitch()"},sidebar:"codroneEduSideBar",previous:{title:"turn()",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Movement/turn"},next:{title:"get_roll()",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Variables/get-roll"}},p=[],u={toc:p};function d(e){var t=e.components,n=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This is a getter function that gets the value of the ",Object(i.b)("strong",{parentName:"p"},"pitch")," variable."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"Python: ",Object(i.b)("inlineCode",{parentName:"p"},"get_pitch()")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"The power of the pitch variable (int)"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nimport CoDrone_mini\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\n\n# Print current pitch with getter function\nprint("Current pitch : ", drone.get_pitch())\ndrone.close()\n')))}d.isMDXComponent=!0},380:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,h=d["".concat(c,".").concat(b)]||d[b]||s[b]||i;return n?o.a.createElement(h,a(a({ref:t},p),{},{components:n})):o.a.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);