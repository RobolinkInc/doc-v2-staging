(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(377)),c=["components"],i={custom_edit_url:null,title:"get_state()",menu:"get_state() / getState()",template:"function_ref",taxonomy:null,category:"sensors"},s={unversionedId:"codrone-pro/python/sensors/get-state",id:"codrone-pro/python/sensors/get-state",isDocsHomePage:!1,title:"get_state()",description:"Description",source:"@site/docs/codrone-pro/python/09-sensors/10-get-state.md",sourceDirName:"codrone-pro/python/09-sensors",slug:"/codrone-pro/python/sensors/get-state",permalink:"/doc-v2/docs/codrone-pro/python/sensors/get-state",editUrl:null,version:"current",sidebarPosition:10,frontMatter:{custom_edit_url:null,title:"get_state()",menu:"get_state() / getState()",template:"function_ref",taxonomy:null,category:"sensors"},sidebar:"codroneProSideBar",previous:{title:"get_pressure()",permalink:"/doc-v2/docs/codrone-pro/python/sensors/get-pressure"},next:{title:"get_trim()",permalink:"/doc-v2/docs/codrone-pro/python/sensors/get-trim"}},l=[],p={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This function gets the state of the drone, as in whether it\u2019s: ready, takeoff, flight, flip, stop, landing, reverse, accident, error."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"Python: ",Object(a.b)("inlineCode",{parentName:"p"},"get_state()"),Object(a.b)("br",null),"\nArduino: ",Object(a.b)("inlineCode",{parentName:"p"},"getState()")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"In Blockly, output to UI.",Object(a.b)("br",null),"In Python, return String(READY, TAKE_OFF, FLIGHT, FLIP, STOP, LANDING, REVERSE, ACCIDENT, ERROR).",Object(a.b)("br",null),"\nIn Arduino, return enum value(fMode_Ready, fMode_TakeOff, fMode_Flight, fMode_Flip, fMode_Stop, fMode_Landing, fMode_Reverse, fMode_Accident, fMode_Error).",Object(a.b)("br",null)),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nimport CoDrone\n\ndrone = CoDrone.CoDrone()\ndrone.pair()\n\n# take off the drone if state is not on flight\nstate = drone.get_state()\nif state != "FLIGHT":\n    drone.takeoff()\n\ndrone.hover(3)\ndrone.land()\ndrone.close()\n')),Object(a.b)("h6",{id:"arduino"},"Arduino"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},"//Arduino code\n//Code for print request data to serial monitor\n#include<CoDrone.h>     //header\n\nvoid setup(){\n    //open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);\n\n    int state;\n\n    trim = CoDrone.getState();                              //save request data\n    delay(50);\n\n    if(state = fMode_Ready)\n        CoDrone.takeoff();\n\n    CoDrone.hover(3);\n    CoDrone.land();\n}\nvoid loop(){\n\n}\n")))}u.isMDXComponent=!0},377:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,b=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?o.a.createElement(b,i(i({ref:t},l),{},{components:n})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);