"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[537],{4440:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=i(5893),s=i(1151);const o={},l="Installing on NVIDIA Jetson",r={id:"installation/nvidia-jetson",title:"Installing on NVIDIA Jetson",description:"This guide will help you install the Groundlight SDK on NVIDIA Jetson devices. The Groundlight SDK requires Python 3.7 or higher.",source:"@site/docs/installation/5-nvidia-jetson.md",sourceDirName:"installation",slug:"/installation/nvidia-jetson",permalink:"/python-sdk/docs/installation/nvidia-jetson",draft:!1,unlisted:!1,editUrl:"https://github.com/groundlight/python-sdk/tree/main/docs/docs/installation/5-nvidia-jetson.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installing on Raspberry Pi",permalink:"/python-sdk/docs/installation/raspberry-pi"},next:{title:"Optional libraries",permalink:"/python-sdk/docs/installation/optional-libraries"}},a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Basic Installation",id:"basic-installation",level:2},{value:"Installing Groundlight SDK",id:"installing-groundlight-sdk",level:3},{value:"Using RTSP Streams",id:"using-rtsp-streams",level:2},{value:"Sample application",id:"sample-application",level:2},{value:"Ready to go!",id:"ready-to-go",level:2}];function h(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"installing-on-nvidia-jetson",children:"Installing on NVIDIA Jetson"}),"\n",(0,t.jsx)(e.p,{children:"This guide will help you install the Groundlight SDK on NVIDIA Jetson devices. The Groundlight SDK requires Python 3.7 or higher."}),"\n",(0,t.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(e.p,{children:"Ensure that you have the following installed on your NVIDIA Jetson:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Python 3.7 or higher"}),"\n",(0,t.jsx)(e.li,{children:"pip (Python package installer)"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"basic-installation",children:"Basic Installation"}),"\n",(0,t.jsx)(e.p,{children:"Assuming you have Python 3.7 or higher installed on your NVIDIA Jetson, you can proceed with the following steps to install or upgrade the Groundlight SDK:"}),"\n",(0,t.jsx)(e.h3,{id:"installing-groundlight-sdk",children:"Installing Groundlight SDK"}),"\n",(0,t.jsx)(e.p,{children:"To install the Groundlight SDK using pip, run the following command in your terminal:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"pip3 install groundlight\n"})}),"\n",(0,t.jsx)(e.p,{children:"An ARM-compatible version will automatically get installed. The Groundlight SDK is now installed and ready for use."}),"\n",(0,t.jsx)(e.h2,{id:"using-rtsp-streams",children:"Using RTSP Streams"}),"\n",(0,t.jsxs)(e.p,{children:["If you have ",(0,t.jsx)(e.code,{children:"docker"})," installed on your NVIDIA Jetson, you can even just run"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"docker run groundlight/stream\n"})}),"\n",(0,t.jsx)(e.p,{children:"as we publish an ARM version of our streaming application to Docker Hub."}),"\n",(0,t.jsx)(e.h2,{id:"sample-application",children:"Sample application"}),"\n",(0,t.jsxs)(e.p,{children:["For a complete end-to-end example of running on an NVIDIA Jetson, see ",(0,t.jsx)(e.a,{href:"https://github.com/groundlight/raspberry-pi-door-lock",children:"this GitHub repo"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"ready-to-go",children:"Ready to go!"}),"\n",(0,t.jsxs)(e.p,{children:["You're now ready to start using the Groundlight SDK in your projects. For more information on using the SDK, refer to the ",(0,t.jsx)(e.a,{href:"/docs/getting-started/api-tokens",children:"API Tokens"})," and [Building Applications"]})]})}function c(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>r,a:()=>l});var t=i(7294);const s={},o=t.createContext(s);function l(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);