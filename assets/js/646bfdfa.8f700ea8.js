(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{185:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return l})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return d}));var t=r(3),o=r(7),a=(r(0),r(380)),i=["components"],l={custom_edit_url:null,title:"get_gyro_angles()",menu:"get_gyro_angles() / getGyroAngles()",taxonomy:null,category:"sensors"},c={unversionedId:"codrone-pro/sensors/get-gyro-angles",id:"codrone-pro/sensors/get-gyro-angles",isDocsHomePage:!1,title:"get_gyro_angles()",description:"Description",source:"@site/docs/codrone-pro/09-sensors/06-get-gyro-angles.md",sourceDirName:"codrone-pro/09-sensors",slug:"/codrone-pro/sensors/get-gyro-angles",permalink:"/doc-v2/docs/codrone-pro/sensors/get-gyro-angles",editUrl:null,version:"current",sidebarPosition:6,frontMatter:{custom_edit_url:null,title:"get_gyro_angles()",menu:"get_gyro_angles() / getGyroAngles()",taxonomy:null,category:"sensors"},sidebar:"codroneProSideBar",previous:{title:"get_drone_temp()",permalink:"/doc-v2/docs/codrone-pro/sensors/get-drone-temp"},next:{title:"get_height()",permalink:"/doc-v2/docs/codrone-pro/sensors/get-height"}},s=[],p={toc:s};function d(e){var n=e.components,r=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This function gets the data from the gyrometer sensor to determine the roll, pitch, and yaw as angles."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"Python: ",Object(a.b)("inlineCode",{parentName:"p"},"get_gyro_angles()"),Object(a.b)("br",null),"\nArduino: ",Object(a.b)("inlineCode",{parentName:"p"},"getGyroAngles()")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"Outputs to visual UI. In code, it returns a class in Python and struct in Arduino."),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\n\ndrone = CoDrone.CoDrone()\ndrone.pair()\n\n# print the angles of drone\nGyroAngles = drone.get_gyro_angles()\nprint(GyroAngles.ROLL, GyroAngles.PITCH, GyroAngles.YAW)\ndrone.close()\n")),Object(a.b)("h6",{id:"arduino"},"Arduino"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},'//Arduino code\n//Code for print request data to serial monitor\n#include<CoDrone.h>     //header\n\nvoid setup(){\n    //open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);  \n}\n\nvoid loop(){\n    // Struct for get angles(attitude) data\n    angledata angle;\n\n    CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);   //link module mode change => Active\n    angle = CoDrone.getGyroAngles();                        //save request data\n    delay(100);\n\n    CoDrone.Send_LinkModeBroadcast(LinkModeMute);           //link module mode change => Mute\n    delay(100);\n\n    Serial.println("");\n    Serial.println("--------- Now -----------");\n    Serial.print("angle roll : \\t");\n    Serial.println(angle.roll);\n    Serial.print("angle pitch : \\t");\n    Serial.println(angle.pitch);\n    Serial.print("angle yaw : \\t");\n    Serial.println(angle.yaw);  \n}\n')))}d.isMDXComponent=!0},380:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return y}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},d=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},g=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),g=t,y=d["".concat(i,".").concat(g)]||d[g]||u[g]||a;return r?o.a.createElement(y,l(l({ref:n},s),{},{components:r})):o.a.createElement(y,l({ref:n},s))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);