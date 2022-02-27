(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{302:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(380)),c=["components"],i={custom_edit_url:null,title:"get_battery_percentage()",taxonomy:{tag:"CDM-library",category:"sensors"},menu:"get_battery_percentage()"},p={unversionedId:"codrone-edu/python/Sensors/get-battery-percentage",id:"codrone-edu/python/Sensors/get-battery-percentage",isDocsHomePage:!1,title:"get_battery_percentage()",description:"Description",source:"@site/docs/codrone-edu/python/07-Sensors/03-get-battery-percentage.md",sourceDirName:"codrone-edu/python/07-Sensors",slug:"/codrone-edu/python/Sensors/get-battery-percentage",permalink:"/doc-v2/docs/codrone-edu/python/Sensors/get-battery-percentage",editUrl:null,version:"current",sidebarPosition:3,frontMatter:{custom_edit_url:null,title:"get_battery_percentage()",taxonomy:{tag:"CDM-library",category:"sensors"},menu:"get_battery_percentage()"},sidebar:"codroneEduSideBar",previous:{title:"get_angle()",permalink:"/doc-v2/docs/codrone-edu/python/Sensors/get-angle"},next:{title:"get_drone_temp()",permalink:"/doc-v2/docs/codrone-edu/python/Sensors/get-drone-temp"}},u=[],s={toc:u};function l(e){var t=e.components,n=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This function gets the battery percentage of the drone, returning a value from 0 to 100."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"get_battery_percentage()")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"The battery\u2019s percentage as an integer from 0 - 100."),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\n\nbattery = drone.get_battery_percentage()\nprint(battery)\ndrone.close()\n")))}l.isMDXComponent=!0},380:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(n),b=r,y=l["".concat(c,".").concat(b)]||l[b]||d[b]||a;return n?o.a.createElement(y,i(i({ref:t},u),{},{components:n})):o.a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);