(self.webpackChunkhwachongrobo_github_io=self.webpackChunkhwachongrobo_github_io||[]).push([[645],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5064:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7294),o=n(9443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var m=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,m=e.values,p=e.groupId,d=e.className,f=a(),g=f.tabGroupChoices,h=f.setTabGroupChoices,b=(0,r.useState)(o),v=b[0],y=b[1],k=r.Children.toArray(e.children),E=[];if(null!=p){var w=g[p];null!=w&&w!==v&&m.some((function(e){return e.value===w}))&&y(w)}var S=function(e){var t=e.currentTarget,n=E.indexOf(t),r=m[n].value;y(r),null!=p&&(h(p,r),setTimeout((function(){var e,n,r,o,a,i,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,l=i.innerHeight,c=i.innerWidth,n>=0&&a<=c&&o<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},B=function(e){var t,n;switch(e.keyCode){case u:var r=E.indexOf(e.target)+1;n=E[r]||E[0];break;case c:var o=E.indexOf(e.target)-1;n=E[o]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":v===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:B,onFocus:S,onClick:S},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},3962:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return p},default:function(){return f}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=n(5064),l=n(8215),s=["components"],c={sidebar_position:1},u="Small Basic EV3",m={unversionedId:"lego/programming/Small Basic EV3",id:"lego/programming/Small Basic EV3",isDocsHomePage:!1,title:"Small Basic EV3",description:"EV3 Basic is an alternative method of programming for EV3 Mindstorms.",source:"@site/docs/lego/programming/Small Basic EV3.mdx",sourceDirName:"lego/programming",slug:"/lego/programming/Small Basic EV3",permalink:"/lego/programming/Small Basic EV3",editUrl:"https://github.com/hwachongrobo/hwachongrobo.github.io/edit/main/docs/lego/programming/Small Basic EV3.mdx",version:"current",lastUpdatedBy:"Vincent Cayadi",lastUpdatedAt:1626923407,formattedLastUpdatedAt:"7/22/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"What can you be benefitted from this guide?",permalink:"/lego/building/the-base"},next:{title:"Pybricks",permalink:"/lego/programming/pybricks"}},p=[{value:"Why use Small Basic EV3?",id:"why-use-small-basic-ev3",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Common functions you might need",id:"common-functions-you-might-need",children:[]},{value:"Basic Movment",id:"basic-movment",children:[]},{value:"Sensors",id:"sensors",children:[]},{value:"PID",id:"pid",children:[]},{value:"Bluetooth Connection (Optional)",id:"bluetooth-connection-optional",children:[]}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"small-basic-ev3"},"Small Basic EV3"),(0,a.kt)("p",null,"EV3 Basic is an alternative method of programming for EV3 Mindstorms.",(0,a.kt)("br",{parentName:"p"}),"\n","It uses Microsoft Small Basic IDE and its corresponding EV3 extension  "),(0,a.kt)("p",null,"For more information visit, ",(0,a.kt)("a",{parentName:"p",href:"https://smallbasic-publicwebsite.azurewebsites.net/"},"Microsoft Small Basic")," or ",(0,a.kt)("a",{parentName:"p",href:"https://sites.google.com/site/ev3basic/ev3-basic-programming"},"EV3 Basic Extension")),(0,a.kt)("h2",{id:"why-use-small-basic-ev3"},"Why use Small Basic EV3?"),(0,a.kt)("p",null,"You might already be familiar with EV3-G and EV3 Classroom."),(0,a.kt)(i.Z,{defaultValue:"ev3-g",values:[{label:"EV3-G",value:"ev3-g"},{label:"EV3 Classroom",value:"ev3-classroom"},{label:"Small Basic EV3",value:"sbev3"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"ev3-g",mdxType:"TabItem"},(0,a.kt)("p",null,"  ",(0,a.kt)("img",{parentName:"p",src:"/img/docs/lego/ev3_g.png",alt:"Screenshot of EV3-G"}))),(0,a.kt)(l.Z,{value:"ev3-classroom",mdxType:"TabItem"},(0,a.kt)("p",null,"  ",(0,a.kt)("img",{parentName:"p",src:"/img/docs/lego/ev3_classroom.png",alt:"Screenshot of EV3 Classroom"}))),(0,a.kt)(l.Z,{value:"sbev3",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'for i = 1 to 4\n    Motor.Move("BC", 50, 720, "True")\n    Motor.MoveSync("BC", 30, 0, 320, "True") \nEndFor\n')))),(0,a.kt)("p",null,"However, they both come with their sets of issues. For example, EV3-G is known\nto be very laggy, particularly with large codebases;  "),(0,a.kt)("p",null,"EV3 Classroom and Small Basic EV3 does not support the use of HiTechnic Color Sensors.  "),(0,a.kt)("p",null,"Small Basic doesn't require you to load up an SD card and wait spend a long time \u231b just to wait for a firmware update.  "),(0,a.kt)("p",null,"At the same time , you can also you full fludged programming techniques such as arrays that is not support in EV3-G or EV3 Classroom."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Before you get your hand dirty and start programming like the Russians, you might want to read up on the syntax of ",(0,a.kt)("a",{parentName:"p",href:"https://download.microsoft.com/download/9/0/6/90616372-C4BF-4628-BC82-BD709635220D/Introducing%20Small%20Basic.pdf"},"Microsoft Small Basic")," as it is a proprietary language by Microsoft.  "),(0,a.kt)("p",null,"Once you are done with that, go download the ",(0,a.kt)("a",{parentName:"p",href:"https://smallbasic-publicwebsite.azurewebsites.net/assets/SmallBasic_v1.2.msi"},"Small Basic IDE")," and the ",(0,a.kt)("a",{parentName:"p",href:"https://github-releases.githubusercontent.com/30505326/92530900-b9b3-11e8-8f56-df155c7e5a46?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20210722%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210722T023413Z&X-Amz-Expires=300&X-Amz-Signature=8235f263be7144659f2253838e798521701f59d68a4095b80dc7155220b188be&X-Amz-SignedHeaders=host&actor_id=57314503&key_id=0&repo_id=30505326&response-content-disposition=attachment%3B%20filename%3DEV3BasicInstaller.msi&response-content-type=application%2Foctet-stream"},"EV3 Basic Extension")),(0,a.kt)("h2",{id:"common-functions-you-might-need"},"Common functions you might need"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'LCD.Text("Hello")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'TextWindow.Write("Hello")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'TextWindow.WriteLine("Hello")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Program.Delay(Duration)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Motor.Invert("Port number")\n')),(0,a.kt)("h2",{id:"basic-movment"},"Basic Movment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'print("Hello world")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'print("Hello world")\n')),(0,a.kt)("h2",{id:"sensors"},"Sensors"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'print("Hello world")\n')),(0,a.kt)("h2",{id:"pid"},"PID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'print("Hello world")\n')),(0,a.kt)("h2",{id:"bluetooth-connection-optional"},"Bluetooth Connection (Optional)"))}f.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);