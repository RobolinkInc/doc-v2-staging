(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(312)),i=["components"],c={custom_edit_url:null,title:"get_IR_data()",taxonomy:{category:["Sensors","sensors"],tag:["zumi-library"]},menu:"get_IR_data()"},s={unversionedId:"zumi/Sensors/get-ir-data",id:"zumi/Sensors/get-ir-data",isDocsHomePage:!1,title:"get_IR_data()",description:"Description",source:"@site/docs/zumi/02-Sensors/09-get-ir-data.md",sourceDirName:"zumi/02-Sensors",slug:"/zumi/Sensors/get-ir-data",permalink:"/doc-v2/docs/zumi/Sensors/get-ir-data",editUrl:null,version:"current",sidebarPosition:9,frontMatter:{custom_edit_url:null,title:"get_IR_data()",taxonomy:{category:["Sensors","sensors"],tag:["zumi-library"]},menu:"get_IR_data()"},sidebar:"someSidebar",previous:{title:"get_battery_voltage()",permalink:"/doc-v2/docs/zumi/Sensors/get-battery-voltage"},next:{title:"circle_left()",permalink:"/doc-v2/docs/zumi/Driving/circle-left"}},l=[],u={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"Get the reading from the IR sensors and the index specified. "),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"get_IR_data(ir_sensor_index)"),Object(a.b)("br",null)),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"ir_sensor_index: Integer from 0 to 5."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"IR sensor indices:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"0  IR.FRONT_RIGHT = Front right sensor"),Object(a.b)("li",{parentName:"ul"},"1  IR.BOTTOM_RIGHT = Bottom right sensor"),Object(a.b)("li",{parentName:"ul"},"2  IR.BACK_RIGHT = Back right sensor"),Object(a.b)("li",{parentName:"ul"},"3  IR.BOTTOM_LEFT = Bottom left sensor"),Object(a.b)("li",{parentName:"ul"},"4  IR.BACK_LEFT = Back left sensor"),Object(a.b)("li",{parentName:"ul"},"5  IR.FRONT_LEFT = Front left sensor")),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"Value between 0 and 255."),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom zumi.zumi import Zumi\nimport time\n\nzumi = Zumi()\n\nfor i in range(0,100):\n    FRONT_RIGHT = 0\n    ir_reading = zumi.get_IR_data(FRONT_RIGHT)\n    zumi.play_note(int(ir_reading/4),20) \n    # Divide by 4 because note is between 0 and 60\n    \n    time.sleep(0.05)\n")))}p.isMDXComponent=!0},312:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);