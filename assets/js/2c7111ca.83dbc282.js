"use strict";(self.webpackChunkhwachongrobotics_github_io=self.webpackChunkhwachongrobotics_github_io||[]).push([[764],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return y}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=s(o),y=n,m=h["".concat(l,".").concat(y)]||h[y]||u[y]||a;return o?r.createElement(m,i(i({ref:t},p),{},{components:o})):r.createElement(m,i({ref:t},p))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},3964:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return h}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),i=["components"],c={},l="Chocolatey",s={unversionedId:"others/chocolatey",id:"others/chocolatey",isDocsHomePage:!1,title:"Chocolatey",description:"Package Manager For Windows",source:"@site/docs/others/03-chocolatey.mdx",sourceDirName:"others",slug:"/others/chocolatey",permalink:"/others/chocolatey",editUrl:"https://github.com/hwachongrobotics/hwachongrobotics.github.io/edit/main/docs/others/03-chocolatey.mdx",version:"current",lastUpdatedAt:1628340369,formattedLastUpdatedAt:"8/7/2021",sidebarPosition:3,frontMatter:{},sidebar:"others",previous:{title:"Visual Studio Code Extensions",permalink:"/others/vscode-extensions"},next:{title:"Cura",permalink:"/others/cura"}},p=[],u={toc:p};function h(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chocolatey"},"Chocolatey"),(0,a.kt)("p",null,"Package Manager For Windows"),(0,a.kt)("p",null,"As all of you may know Im lazy. So after every clean install of Windows, its a pain to have to redownload everything. Going to their respective websites and download their install files. Therefore, I use Chocolatey - a windows package manager."),(0,a.kt)("h1",{id:"chocolatey-install"},"Chocolatey install"),(0,a.kt)("p",null,"Open up power shell and paste this line in"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))\n")),(0,a.kt)("p",null,"What it does I dont really know \ud83d\ude15"),(0,a.kt)("p",null,"After this you can just type ",(0,a.kt)("inlineCode",{parentName:"p"},"choco install <package name>")," into your powershell terminal and boom it will be automatically installed"),(0,a.kt)("p",null,"If you want to get some reference, this is what I install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"choco install googlechrome brave 7zip vlc python3 git vscode audacity autocad eagle mongodb-compass obs-studio obs-virtualcam qbittorrent winfetch whatsapp steam epicgameslauncher geforce-experience hwmonitor chrome-remote-desktop-host nodejs-lts -y\n")),(0,a.kt)("p",null,"For more information visit ",(0,a.kt)("a",{parentName:"p",href:"https://community.chocolatey.org/packages"},"their website")," where you can find the packages to install"))}h.isMDXComponent=!0}}]);