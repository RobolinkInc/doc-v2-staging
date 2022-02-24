(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{269:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(339)),c=["components"],i={custom_edit_url:null,title:"get_battery_percentage()",menu:"get_battery_percentage() / getBatteryPercentage()",taxonomy:null,category:"sensors"},p={unversionedId:"codrone-pro/sensors/get-battery-percentage",id:"codrone-pro/sensors/get-battery-percentage",isDocsHomePage:!1,title:"get_battery_percentage()",description:"Description",source:"@site/docs/codrone-pro/09-sensors/03-get-battery-percentage.md",sourceDirName:"codrone-pro/09-sensors",slug:"/codrone-pro/sensors/get-battery-percentage",permalink:"/doc-v2/docs/codrone-pro/sensors/get-battery-percentage",editUrl:null,version:"current",sidebarPosition:3,frontMatter:{custom_edit_url:null,title:"get_battery_percentage()",menu:"get_battery_percentage() / getBatteryPercentage()",taxonomy:null,category:"sensors"},sidebar:"codroneProSideBar",previous:{title:"get_angular_speed()",permalink:"/doc-v2/docs/codrone-pro/sensors/get-angular-speed"},next:{title:"get_battery_voltage()",permalink:"/doc-v2/docs/codrone-pro/sensors/get-battery-voltage"}},l=[],s={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This function gets the battery percentage of the drone, returning a value from 0 to 100."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"Python: ",Object(a.b)("inlineCode",{parentName:"p"},"get_battery_percentage()"),Object(a.b)("br",null),"\nArduino: ",Object(a.b)("inlineCode",{parentName:"p"},"getBatteryPercentage()")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"The battery\u2019s percentage as an integer from 0 - 100."),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\n\ndrone = CoDrone.CoDrone()\ndrone.pair()\ndrone.takeoff()\n\n# stop the drone if battery is lower than 10 percent.\nbattery = drone.get_battery_percentage()\nif battery < 10:\n    drone.emergency_stop()\ndrone.land()\ndrone.close()\n")),Object(a.b)("h6",{id:"arduino"},"Arduino"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},'//Arduino code\n//Code for print request data to serial monitor\n#include<CoDrone.h>     //header\n\nvoid setup(){\n    //open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);\n}\n\nvoid loop(){\n    int batteryPercentage;\n\n    CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);   //link module mode change => Active\n    batteryPercentage = CoDrone.getBatteryPercentage();     //save request data\n    delay(100);\n\n    CoDrone.Send_LinkModeBroadcast(LinkModeMute);           //link module mode change => Mute\n    delay(100);\n\n    Serial.println("");\n    Serial.println("--------- Now -----------");\n    Serial.print("batteryPercentage : \\t");\n    Serial.println(batteryPercentage);  \n}\n')))}d.isMDXComponent=!0},339:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,g=d["".concat(c,".").concat(b)]||d[b]||u[b]||a;return n?o.a.createElement(g,i(i({ref:t},l),{},{components:n})):o.a.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);