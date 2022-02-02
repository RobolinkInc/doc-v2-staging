(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),i=(n(0),n(312)),a=["components"],c={custom_edit_url:null,title:"move()",taxonomy:{category:["flight-variables"],tag:["CDM-library"]},menu:"move()"},l={unversionedId:"codrone-mini/Flight-Variables/move",id:"codrone-mini/Flight-Variables/move",isDocsHomePage:!1,title:"move()",description:"Description",source:"@site/docs/codrone-mini/04-Flight-Variables/05-move.md",sourceDirName:"codrone-mini/04-Flight-Variables",slug:"/codrone-mini/Flight-Variables/move",permalink:"/doc-v2/docs/codrone-mini/Flight-Variables/move",editUrl:null,version:"current",sidebarPosition:5,frontMatter:{custom_edit_url:null,title:"move()",taxonomy:{category:["flight-variables"],tag:["CDM-library"]},menu:"move()"},sidebar:"cdmSideBar",previous:{title:"get_yaw()",permalink:"/doc-v2/docs/codrone-mini/Flight-Variables/get-yaw"},next:{title:"set_pitch()",permalink:"/doc-v2/docs/codrone-mini/Flight-Variables/set-pitch"}},p=[],u={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"You can use this function to create more complex flight movements. With no parameters, ",Object(i.b)("inlineCode",{parentName:"p"},"move()")," will just run based on whatever the flight variables have been set to with functions like ",Object(i.b)("inlineCode",{parentName:"p"},"setPitch()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"setThrottle()")," indefinitely.  You can also run it for a certain duration.  The function also takes multiple parameters, where you can set roll, pitch, yaw, and throttle all at once.  You can run it infinitely with 4 parameters, or you can run it for a given duration with 5 parameters. If the drone is not flying, nothing will happen. You must takeoff() first to use a move() function."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"move()"),": runs indefinitely",Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"move(duration)"),": runs the given number of seconds",Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"move(roll, pitch, yaw, throttle)"),": runs indefinitely",Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"move(duration, roll, pitch, yaw, throttle)")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"duration"),": the duration of the flight motion in seconds.",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"roll"),": the power of the roll, which is an int from -100 to 100",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"pitch"),": the power of the pitch, which is an int from -100 to 100",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"yaw"),": the power of the yaw, which is an int from -100 to 100",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"throttle"),": the power of the throttle, which is an int from -100 to 100"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\n\ndrone.takeoff()\ndrone.set_pitch(20)\ndrone.move(5)                   # Move 5 seconds based on the current value of flight variables\ndrone.move()                    # Move indefinitely based on the current value of flight variables\n    \ndrone.set_pitch(0)              # Set pitch back to 0 for the remaining examples\ndrone.move(5, 0, 0, 80, 80)     # Move up(throttle) and turn left(yaw) for 5 seconds\ndrone.land()\n")))}s.isMDXComponent=!0},312:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,d=s["".concat(a,".").concat(m)]||s[m]||b[m]||i;return n?o.a.createElement(d,c(c({ref:t},p),{},{components:n})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);