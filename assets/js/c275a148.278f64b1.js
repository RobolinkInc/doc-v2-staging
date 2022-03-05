(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{301:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(377)),u=["components"],a={custom_edit_url:null,title:"smooth_turn_left()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"smooth_turn_left()"},c={unversionedId:"zumi/python/Driving/smooth-turn-left",id:"zumi/python/Driving/smooth-turn-left",isDocsHomePage:!1,title:"smooth_turn_left()",description:"Description",source:"@site/docs/zumi/python/03-Driving/29-smooth-turn-left.md",sourceDirName:"zumi/python/03-Driving",slug:"/zumi/python/Driving/smooth-turn-left",permalink:"/doc-v2/docs/zumi/python/Driving/smooth-turn-left",editUrl:null,version:"current",sidebarPosition:29,frontMatter:{custom_edit_url:null,title:"smooth_turn_left()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"smooth_turn_left()"},sidebar:"someSidebar",previous:{title:"smooth_reverse()",permalink:"/doc-v2/docs/zumi/python/Driving/smooth-reverse"},next:{title:"smooth_turn_right()",permalink:"/doc-v2/docs/zumi/python/Driving/smooth-turn-right"}},l=[],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,u);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"Turns left gradually to reach the desired angle while also going forward. Default to 90 degrees."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"smooth_turn_left()"),Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"smooth_turn_left(desired_angle=90,speed=20,step=2)"),Object(i.b)("br",null)),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"desired_angle: Degrees you want to turn from your starting position ",Object(i.b)("br",null),"\nspeed: Positive integer value for speed between 0 and 80. Default to 20.",Object(i.b)("br",null),"\nstep: The angle step size (decrease for wider turns, increase for tighter turns)",Object(i.b)("br",null)),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom zumi.zumi import Zumi\nimport time\nzumi = Zumi()\n\nzumi.smooth_turn_left()\ntime.sleep(1)\nzumi.smooth_turn_left(speed=30)\n\n")))}p.isMDXComponent=!0},377:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,d=p["".concat(u,".").concat(b)]||p[b]||m[b]||i;return n?o.a.createElement(d,a(a({ref:t},l),{},{components:n})):o.a.createElement(d,a({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,u=new Array(i);u[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,u[1]=a;for(var l=2;l<i;l++)u[l]=n[l];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);