(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{312:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return r?i.a.createElement(m,c(c({ref:t},u),{},{components:r})):i.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),o=(r(0),r(312)),a=["components"],c={custom_edit_url:null,title:"speed_calibration()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"speed_calibration"},l={unversionedId:"zumi/Driving/speed-calibration",id:"zumi/Driving/speed-calibration",isDocsHomePage:!1,title:"speed_calibration()",description:"Description",source:"@site/docs/zumi/03-Driving/27-speed-calibration.md",sourceDirName:"zumi/03-Driving",slug:"/zumi/Driving/speed-calibration",permalink:"/doc-v2/docs/zumi/Driving/speed-calibration",editUrl:null,version:"current",sidebarPosition:27,frontMatter:{custom_edit_url:null,title:"speed_calibration()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"speed_calibration"},sidebar:"someSidebar",previous:{title:"right_u_turn()",permalink:"/doc-v2/docs/zumi/Driving/right-u-turn"},next:{title:"square_left()",permalink:"/doc-v2/docs/zumi/Driving/square-left"}},u=[],s={toc:u};function p(e){var t=e.components,r=Object(i.a)(e,a);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"description"},"Description"),Object(o.b)("p",null,"In order to use this method you will need a speed calibration sheet (Click ",Object(o.b)("a",{parentName:"p",href:"https://learn.robolink.com/wp-content/uploads/2021/06/calibration.pdf"},"here")," for a PDF version).\nZumi will drive over 5 horizontal white lines that are 2 centimeters wide.\nThe slope and y_intercept will be generated for the best fit line of the speed prediction.\nThese values will be saved to the Zumi as a text file."),Object(o.b)("p",null,"This function is necessary for move_to_coordinate(), move_inches(), and move_centimeters()."),Object(o.b)("h5",{id:"syntax"},"Syntax"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"speed_calibration()"),Object(o.b)("br",null),"\n",Object(o.b)("inlineCode",{parentName:"p"},"speed_calibration(speed=40, ir_threshold=100, time_out=3, cm_per_brick=2, show_graphs=False)"),Object(o.b)("br",null)),Object(o.b)("h5",{id:"parameters"},"Parameters"),Object(o.b)("p",null,"speed: Integer value that goes from (0 - 80). The lower the more accurate the speed prediction.",Object(o.b)("br",null),"\nir_threshold: Integer value for the bottom left IR threshold (0-255).",Object(o.b)("br",null),"\ntime_out: The number of seconds before the timeout.",Object(o.b)("br",null),"\ncm_per_brick: The width of each road marker in centimeters.",Object(o.b)("br",null),"\nshow_graphs: Boolean default to False. If set to True, a graph will be displayed with the best fit line prediction. *Note: You may need to run this function twice to see the graph.",Object(o.b)("br",null)),Object(o.b)("h5",{id:"returns"},"Returns"),Object(o.b)("p",null,"None"),Object(o.b)("h5",{id:"example-code"},"Example Code"),Object(o.b)("h6",{id:"python"},"Python"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nfrom zumi.zumi import Zumi\nzumi = Zumi()\n\n# Place Zumi on the black portion of the speed calibration sheet \nzumi.speed_calibration()\n\n# To show the graphs, replace the original "zumi.speed_calibration" with the following line  \n# zumi.speed_calibration(show_graphs = True) \n\n\n')))}p.isMDXComponent=!0}}]);