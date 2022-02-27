(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{275:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return d})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var o=t(3),r=t(7),i=(t(0),t(380)),a=["components"],c={custom_edit_url:null,id:"go",title:"go()"},d={unversionedId:"codrone-edu/python/Flight-Commands-Movement/go",id:"codrone-edu/python/Flight-Commands-Movement/go",isDocsHomePage:!1,title:"go()",description:"Description",source:"@site/docs/codrone-edu/python/03-Flight-Commands-Movement/03-go.md",sourceDirName:"codrone-edu/python/03-Flight-Commands-Movement",slug:"/codrone-edu/python/Flight-Commands-Movement/go",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Movement/go",editUrl:null,version:"current",sidebarPosition:3,frontMatter:{custom_edit_url:null,id:"go",title:"go()"},sidebar:"codroneEduSideBar",previous:{title:"fly_sequence()",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Movement/fly-sequence"},next:{title:"hover()",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Movement/hover"}},l=[],u={toc:l};function p(e){var n=e.components,t=Object(r.a)(e,a);return Object(i.b)("wrapper",Object(o.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"A simpler Junior level function that represents flight with direction with more natural language.\nIt simply flies in the given direction for a given duration and power."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"go(direction)"),Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"go(direction, duration)"),Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"go(direction, duration, power)")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"direction"),": an enum in Python. It\u2019s the direction of the flight, which can be one of the following: FORWARD, BACKWARD, LEFT, RIGHT, UP, and DOWN.",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"duration"),": the duration of the flight motion in seconds. If undefined, defaults to run indefinitely.",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"power"),": the power at which the drone flies forward. Takes a value from 0 to 100. Defaults to 50 if not defined."),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\nfrom CoDrone_mini import Direction\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\ndrone.takeoff()\n\n# Try each of these commands by uncommenting them\n#drone.go(Direction.FORWARD)        # Go forward indefinitely at 50% power\n#drone.go(Direction.UP, 2)          # Go up for 5 seconds at 50% power\ndrone.go(Direction.BACKWARD, 3, 40) # Go backwards for 3 seconds at 70% power\ndrone.land()\ndrone.close()\n")))}p.isMDXComponent=!0},380:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,b=p["".concat(a,".").concat(m)]||p[m]||s[m]||i;return t?r.a.createElement(b,c(c({ref:n},l),{},{components:t})):r.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);