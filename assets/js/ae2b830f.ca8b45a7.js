(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{238:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),i=(n(0),n(339)),a=["components"],c={custom_edit_url:null,id:"reset-sensor",title:"reset_sensor()"},s={unversionedId:"codrone-mini/Flight-Commands-Start-Stop/reset-sensor",id:"codrone-mini/Flight-Commands-Start-Stop/reset-sensor",isDocsHomePage:!1,title:"reset_sensor()",description:"Description",source:"@site/docs/codrone-mini/02-Flight-Commands-Start-Stop/05-reset-sensor.md",sourceDirName:"codrone-mini/02-Flight-Commands-Start-Stop",slug:"/codrone-mini/Flight-Commands-Start-Stop/reset-sensor",permalink:"/doc-v2/docs/codrone-mini/Flight-Commands-Start-Stop/reset-sensor",editUrl:null,version:"current",sidebarPosition:5,frontMatter:{custom_edit_url:null,id:"reset-sensor",title:"reset_sensor()"},sidebar:"cdmSideBar",previous:{title:"land()",permalink:"/doc-v2/docs/codrone-mini/Flight-Commands-Start-Stop/land"},next:{title:"reset_trim()",permalink:"/doc-v2/docs/codrone-mini/Flight-Commands-Start-Stop/reset-trim"}},l=[],p={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This function will reset the roll and pitch trim values back to zero and set all the gyro angles back to zero for roll, pitch, and yaw. NOTE: If you're resetting right before a takeoff, make sure to add a ",Object(i.b)("inlineCode",{parentName:"p"},"time.sleep(1)")," before the ",Object(i.b)("inlineCode",{parentName:"p"},"takeoff()"),",  otherwise the take off might be skipped."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"reset_sensor()")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nimport CoDrone_mini\nimport time\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\nprint("Before ", drone.get_angle())\ndrone.takeoff()\ndrone.set_yaw(50)\ndrone.move(1)\ndrone.land()\nprint("After ",drone.get_angle())\ndrone.reset_sensor() \nprint("Reset ", drone.get_angle())\ndrone.close()\n')))}d.isMDXComponent=!0},339:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);