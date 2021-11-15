"use strict";(self.webpackChunkhwachongrobotics_github_io=self.webpackChunkhwachongrobotics_github_io||[]).push([[321],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(n),h=o,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,a(a({ref:e},u),{},{components:n})):r.createElement(m,a({ref:e},u))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2350:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={},c="Git and Github",l={unversionedId:"others/git-and-github",id:"others/git-and-github",isDocsHomePage:!1,title:"Git and Github",description:"What is Git?",source:"@site/docs/others/01-git-and-github.mdx",sourceDirName:"others",slug:"/others/git-and-github",permalink:"/others/git-and-github",editUrl:"https://github.com/hwachongrobotics/hwachongrobotics.github.io/edit/main/docs/others/01-git-and-github.mdx",version:"current",lastUpdatedAt:1636967505,formattedLastUpdatedAt:"11/15/2021",sidebarPosition:1,frontMatter:{},sidebar:"others",previous:{title:"Introduction",permalink:"/others"},next:{title:"Visual Studio Code Extensions",permalink:"/others/vscode-extensions"}},u=[{value:"What is Git?",id:"what-is-git",children:[]},{value:"What is Github?",id:"what-is-github",children:[]},{value:"Download &amp; Installation",id:"download--installation",children:[]},{value:"Usage",id:"usage",children:[]}],d={toc:u};function p(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"git-and-github"},"Git and Github"),(0,i.kt)("h2",{id:"what-is-git"},"What is Git?"),(0,i.kt)("p",null,"Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.  "),(0,i.kt)("h2",{id:"what-is-github"},"What is Github?"),(0,i.kt)("p",null,"GitHub, Inc. is a provider of Internet hosting for software development and version control using Git  "),(0,i.kt)("h2",{id:"download--installation"},"Download & Installation"),(0,i.kt)("p",null,"Git : ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"https://git-scm.com/downloads")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h1",{id:"git"},"Git"),(0,i.kt)("p",null,"Using Git in command line interface is recommeneded compared to using the UI Version of it. So the following will include the commonly used git commands.  "),(0,i.kt)("p",null,"A good practice is to run ",(0,i.kt)("inlineCode",{parentName:"p"},"git pull")," before editing your code so that you can be editing on the latest version of the code  "),(0,i.kt)("p",null,"Another good practice is to push code frequently to Github. Think Github as your backup to your code. And also include useful commit messages."),(0,i.kt)("p",null,"To push a change to Github:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'git add .\ngit commit -m "<insert a useful change message>"\ngit push\n')),(0,i.kt)("p",null,"To revert a change:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git log --oneline # To view commit history \n")),(0,i.kt)("p",null,"It should look like this",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{parentName:"p",src:"/img/docs/others/commitHistory.png",alt:"commitHistory"}),(0,i.kt)("br",{parentName:"p"}),"\n","The left side is the commit hash, so copy that and replace it here  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git revert <insert commit hash>\n")),(0,i.kt)("p",null,"\u26a0\ufe0f All the code will be reverted back to the commit hash you set\u26a0\ufe0f  "),(0,i.kt)("h1",{id:"github"},"Github"))}p.isMDXComponent=!0}}]);