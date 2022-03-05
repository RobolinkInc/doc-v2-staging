(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{299:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(377)),c=["components"],l={custom_edit_url:null,id:"changelog",title:"Zumi Library Changelog"},i={unversionedId:"zumi/python/changelog",id:"zumi/python/changelog",isDocsHomePage:!1,title:"Zumi Library Changelog",description:"Aug 14, 2018",source:"@site/docs/zumi/python/changelog-python.md",sourceDirName:"zumi/python",slug:"/zumi/python/changelog",permalink:"/doc-v2/docs/zumi/python/changelog",editUrl:null,version:"current",frontMatter:{custom_edit_url:null,id:"changelog",title:"Zumi Library Changelog"},sidebar:"someSidebar",previous:{title:"Zumi Library Reference",permalink:"/doc-v2/docs/zumi/python/reference/library"},next:{title:"Zumi Library Changelog",permalink:"/doc-v2/docs/zumi/blockly/changelog"}},u=[],b={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Aug 14, 2018"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Zumi Reference")),Object(a.b)("p",null,"New Function:",Object(a.b)("br",null),"\npair() : Updated to a new function for pairing with the CoDrone. Pair will pair with the nearest, then save your drone info to your project folder and use the next time you pair with no parameters.",Object(a.b)("br",null),"\ncalibrate() : you can reset and calibrate drone programmatically.",Object(a.b)("br",null)),Object(a.b)("p",null,"move() function updated.  It can take 4 parameters move(roll,pitch,yaw,throttle) to move indefinitely"),Object(a.b)("hr",null),Object(a.b)("h5",{id:"may-21-2018"},"May 21, 2018"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CoDrone Version 1.1.2")),Object(a.b)("p",null,"Print port name and drone name at the start of the program."),Object(a.b)("p",null,"Solve setAllRGB() function error (couldn't change the colors when repeated it too fast)."),Object(a.b)("hr",null),Object(a.b)("h5",{id:"mar-28-2018"},"Mar 28, 2018"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CoDrone Version 1.1.1")),Object(a.b)("p",null,"Change the Mode name"),Object(a.b)("p",null,"Change the default value in flight command"),Object(a.b)("p",null,"Add some error messages for debugging mode"),Object(a.b)("hr",null),Object(a.b)("h5",{id:"mar-16-2018"},"Mar 16, 2018"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CoDrone Version 1.1.0")),Object(a.b)("p",null,'Remove "time." in protocol.py'),Object(a.b)("p",null,"Add legacy functions"),Object(a.b)("p",null,"Fix functions about degrees."),Object(a.b)("hr",null),Object(a.b)("h5",{id:"dec-16-2017"},"Dec 16, 2017"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CoDrone Version 0.2")),Object(a.b)("p",null,"The first CoDrone library release for the Python Package Index"),Object(a.b)("hr",null))}p.isMDXComponent=!0},377:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=b(n),s=r,d=p["".concat(c,".").concat(s)]||p[s]||m[s]||a;return n?o.a.createElement(d,l(l({ref:t},u),{},{components:n})):o.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);