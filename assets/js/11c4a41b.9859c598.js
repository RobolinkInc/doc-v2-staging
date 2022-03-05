(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{377:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(a,".").concat(m)]||s[m]||b[m]||o;return n?i.a.createElement(d,u(u({ref:t},l),{},{components:n})):i.a.createElement(d,u({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),o=(n(0),n(377)),a=["components"],u={custom_edit_url:null,title:"j_turn()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"j_turn()"},c={unversionedId:"zumi/python/Driving/j-turn",id:"zumi/python/Driving/j-turn",isDocsHomePage:!1,title:"j_turn()",description:"Description",source:"@site/docs/zumi/python/03-Driving/12-j-turn.md",sourceDirName:"zumi/python/03-Driving",slug:"/zumi/python/Driving/j-turn",permalink:"/doc-v2/docs/zumi/python/Driving/j-turn",editUrl:null,version:"current",sidebarPosition:12,frontMatter:{custom_edit_url:null,title:"j_turn()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"j_turn()"},sidebar:"someSidebar",previous:{title:"go_straight()",permalink:"/doc-v2/docs/zumi/python/Driving/go-straight"},next:{title:"left_u_turn()",permalink:"/doc-v2/docs/zumi/python/Driving/left-u-turn"}},l=[],p={toc:l};function s(e){var t=e.components,n=Object(i.a)(e,a);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"description"},"Description"),Object(o.b)("p",null,"Drives Zumi in a j-turn."),Object(o.b)("h5",{id:"syntax"},"Syntax"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"j_turn()"),Object(o.b)("br",null),"\n",Object(o.b)("inlineCode",{parentName:"p"},"j_turn(speed=80, step=4, delay=0.005)"),Object(o.b)("br",null)),Object(o.b)("h5",{id:"parameters"},"Parameters"),Object(o.b)("p",null,"speed: Positive value for forward speed between 0 and 80",Object(o.b)("br",null),"\nstep: The angle step size (decrease for wider turns, increase for tighter turns)",Object(o.b)("br",null),"\ndelay: The time delay between each angle step"),Object(o.b)("h5",{id:"returns"},"Returns"),Object(o.b)("p",null,"None"),Object(o.b)("h5",{id:"example-code"},"Example Code"),Object(o.b)("h6",{id:"python"},"Python"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom zumi.zumi import Zumi\nimport time\n\nzumi = Zumi()\nzumi.j_turn(speed=60, delay=0.003)\n\n\n")))}s.isMDXComponent=!0}}]);