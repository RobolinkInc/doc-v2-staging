(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{220:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return u})),r.d(n,"default",(function(){return p}));var o=r(3),t=r(7),a=(r(0),r(377)),l=["components"],i={custom_edit_url:null,title:"arm_default_color()",menu:"arm_default_color() / armDefaultColor()",tag:"codrone-library",taxonomy:null,category:"LED"},c={unversionedId:"codrone-pro/python/led/arm-default-color",id:"codrone-pro/python/led/arm-default-color",isDocsHomePage:!1,title:"arm_default_color()",description:"Description",source:"@site/docs/codrone-pro/python/07-led/02-arm-default-color.md",sourceDirName:"codrone-pro/python/07-led",slug:"/codrone-pro/python/led/arm-default-color",permalink:"/doc-v2/docs/codrone-pro/python/led/arm-default-color",editUrl:null,version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,title:"arm_default_color()",menu:"arm_default_color() / armDefaultColor()",tag:"codrone-library",taxonomy:null,category:"LED"},sidebar:"codroneProSideBar",previous:{title:"arm_color()",permalink:"/doc-v2/docs/codrone-pro/python/led/arm-color"},next:{title:"arm_default_pattern()",permalink:"/doc-v2/docs/codrone-pro/python/led/arm-default-pattern"}},u=[],d={toc:u};function p(e){var n=e.components,r=Object(t.a)(e,l);return Object(a.b)("wrapper",Object(o.a)({},d,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This function sets the default LED color of the eyes as well as the mode, so it will remain that color even after powering off and back on. The colors set are using RGB values."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"Python:",Object(a.b)("br",null),"\n",Object(a.b)("inlineCode",{parentName:"p"},"arm_default_color(red, green, blue, brightness)"),Object(a.b)("br",null)),Object(a.b)("p",null,"Arduino:",Object(a.b)("br",null),"\n",Object(a.b)("inlineCode",{parentName:"p"},"armDefaultColor(red, green, blue, brightness)")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"red:")," int value from 0 to 255",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"green"),": int value from 0 to 255",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"blue"),": int value from 0 to 255",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"brightness"),": in value from 0 to 100, which represents the brightness of the light",Object(a.b)("br",null)),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\nfrom CoDrone import Mode\n\ndrone = CoDrone.CoDrone()\ndrone.pair()\n\n# set default arm color to an RGB of (0, 0, 100) with full brightness\ndrone.arm_default_color(0, 0, 100, 100)\ndrone.close()\n")),Object(a.b)("h6",{id:"arduino"},"Arduino"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},"//Arduino code\n#include<CoDrone.h>     //header\n\nvoid setup(){\n    //open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);\n\n    // set default arm color to an RGB of (0, 120, 155) with full brightness\n    CoDrone.armDefaultColor(0, 120, 155, 100);\n}\n\nvoid loop(){\n\n}\n")),Object(a.b)("h6",{id:"led-color-options"},"LED Color options"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"    AliceBlue, AntiqueWhite, Aqua,\n    Aquamarine, Azure, Beige,\n    Bisque, Black, BlanchedAlmond,\n    Blue, BlueViolet, Brown,\n    BurlyWood, CadetBlue, Chartreuse,\n    Chocolate, Coral, CornflowerBlue,\n    Cornsilk, Crimson, Cyan,\n    DarkBlue, DarkCyan, DarkGoldenRod,\n    DarkGray, DarkGreen, DarkKhaki,\n    DarkMagenta, DarkOliveGreen, DarkOrange,\n    DarkOrchid, DarkRed, DarkSalmon,\n    DarkSeaGreen, DarkSlateBlue, DarkSlateGray,\n    DarkTurquoise, DarkViolet, DeepPink,\n    DeepSkyBlue, DimGray, DodgerBlue,\n    FireBrick, FloralWhite, ForestGreen,\n    Fuchsia, Gainsboro, GhostWhite,\n    Gold, GoldenRod, Gray,\n    Green, GreenYellow, HoneyDew,\n    HotPink, IndianRed, Indigo,\n    Ivory, Khaki, Lavender,\n    LavenderBlush, LawnGreen, LemonChiffon,\n    LightBlue, LightCoral, LightCyan,\n    LightGoldenRodYellow, LightGray, LightGreen,\n    LightPink, LightSalmon, LightSeaGreen,\n    LightSkyBlue, LightSlateGray, LightSteelBlue,\n    LightYellow, Lime, LimeGreen,\n    Linen, Magenta, Maroon,\n    MediumAquaMarine, MediumBlue, MediumOrchid,\n    MediumPurple, MediumSeaGreen, MediumSlateBlue,\n    MediumSpringGreen, MediumTurquoise, MediumVioletRed,\n    MidnightBlue, MintCream, MistyRose,\n    Moccasin, NavajoWhite, Navy,\n    OldLace, Olive, OliveDrab,\n    Orange, OrangeRed, Orchid,\n    PaleGoldenRod, PaleGreen, PaleTurquoise,\n    PaleVioletRed, PapayaWhip, PeachPuff,\n    Peru, Pink, Plum,\n    PowderBlue, Purple, RebeccaPurple,\n    Red, RosyBrown, RoyalBlue,\n    SaddleBrown, Salmon, SandyBrown,\n    SeaGreen, SeaShell, Sienna,\n    Silver, SkyBlue, SlateBlue,\n    SlateGray, Snow, SpringGreen,\n    SteelBlue, Tan, Teal,\n    Thistle, Tomato, Turquoise,\n    Violet, Wheat, White,\n    WhiteSmoke, Yellow, YellowGreen,\n    EndOfColor\n")))}p.isMDXComponent=!0},377:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return m}));var o=r(0),t=r.n(o);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var u=t.a.createContext({}),d=function(e){var n=t.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=d(e.components);return t.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},s=t.a.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(r),s=o,m=p["".concat(l,".").concat(s)]||p[s]||b[s]||a;return r?t.a.createElement(m,i(i({ref:n},u),{},{components:r})):t.a.createElement(m,i({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return t.a.createElement.apply(null,l)}return t.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);