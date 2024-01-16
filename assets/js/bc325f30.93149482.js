"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5230],{1814:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>m});var a=o(5893),r=o(1151);const n={title:"Introducing Groundlight's FrameGrab Library",description:"We would like to introduce you to the FrameGrab library.",slug:"introducing-framegrab",authors:[{name:"Tim Huff",title:"Engineering intern at Groundlight",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/06b25bf1a6/hufft.jpg"},{name:"Blaise Munyampirwa",title:"Engineer at Groundlight",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/d12109465d/munyampirwab.jpg"},{name:"Leo Dirac",title:"CTO and Co-founder at Groundlight",image_url:"https://a-us.storyblok.com/f/1015187/284x281/602a9c95c5/diracl.png"},{name:"Tyler Romero",title:"Senior Machine Learning Engineer",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/368053d79a/romerot.jpg"},{name:"Michael Vogelsong",title:"Chief ML Scientist",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/c87b9d30f4/vogelsongm.jpg"}],tags:["groundlight-extensions","framegrab"],image:"/img/gl-icon400.png",hide_table_of_contents:!1},i=void 0,s={permalink:"/python-sdk/blog/introducing-framegrab",editUrl:"https://github.com/groundlight/python-sdk/tree/main/docs/blog/blog/2023-12-06-framegrab.md",source:"@site/blog/2023-12-06-framegrab.md",title:"Introducing Groundlight's FrameGrab Library",description:"We would like to introduce you to the FrameGrab library.",date:"2023-12-06T00:00:00.000Z",formattedDate:"December 6, 2023",tags:[{label:"groundlight-extensions",permalink:"/python-sdk/blog/tags/groundlight-extensions"},{label:"framegrab",permalink:"/python-sdk/blog/tags/framegrab"}],readingTime:3.12,hasTruncateMarker:!0,authors:[{name:"Tim Huff",title:"Engineering intern at Groundlight",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/06b25bf1a6/hufft.jpg",imageURL:"https://a-us.storyblok.com/f/1015187/1000x1000/06b25bf1a6/hufft.jpg"},{name:"Blaise Munyampirwa",title:"Engineer at Groundlight",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/d12109465d/munyampirwab.jpg",imageURL:"https://a-us.storyblok.com/f/1015187/1000x1000/d12109465d/munyampirwab.jpg"},{name:"Leo Dirac",title:"CTO and Co-founder at Groundlight",image_url:"https://a-us.storyblok.com/f/1015187/284x281/602a9c95c5/diracl.png",imageURL:"https://a-us.storyblok.com/f/1015187/284x281/602a9c95c5/diracl.png"},{name:"Tyler Romero",title:"Senior Machine Learning Engineer",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/368053d79a/romerot.jpg",imageURL:"https://a-us.storyblok.com/f/1015187/1000x1000/368053d79a/romerot.jpg"},{name:"Michael Vogelsong",title:"Chief ML Scientist",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/c87b9d30f4/vogelsongm.jpg",imageURL:"https://a-us.storyblok.com/f/1015187/1000x1000/c87b9d30f4/vogelsongm.jpg"}],frontMatter:{title:"Introducing Groundlight's FrameGrab Library",description:"We would like to introduce you to the FrameGrab library.",slug:"introducing-framegrab",authors:[{name:"Tim Huff",title:"Engineering intern at Groundlight",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/06b25bf1a6/hufft.jpg",imageURL:"https://a-us.storyblok.com/f/1015187/1000x1000/06b25bf1a6/hufft.jpg"},{name:"Blaise Munyampirwa",title:"Engineer at Groundlight",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/d12109465d/munyampirwab.jpg",imageURL:"https://a-us.storyblok.com/f/1015187/1000x1000/d12109465d/munyampirwab.jpg"},{name:"Leo Dirac",title:"CTO and Co-founder at Groundlight",image_url:"https://a-us.storyblok.com/f/1015187/284x281/602a9c95c5/diracl.png",imageURL:"https://a-us.storyblok.com/f/1015187/284x281/602a9c95c5/diracl.png"},{name:"Tyler Romero",title:"Senior Machine Learning Engineer",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/368053d79a/romerot.jpg",imageURL:"https://a-us.storyblok.com/f/1015187/1000x1000/368053d79a/romerot.jpg"},{name:"Michael Vogelsong",title:"Chief ML Scientist",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/c87b9d30f4/vogelsongm.jpg",imageURL:"https://a-us.storyblok.com/f/1015187/1000x1000/c87b9d30f4/vogelsongm.jpg"}],tags:["groundlight-extensions","framegrab"],image:"/img/gl-icon400.png",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Best practices for best results with Groundlight",permalink:"/python-sdk/blog/best-practices"}},l={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0]},m=[];function g(t){const e={p:"p",...(0,r.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"At Groundlight, we continue to build infrastructure that allows our customers to easily use computer\nvision without a pre-existing dataset for industrial inspection, retail analytics, mobile robotics, and\nmuch more. We've built many features towards the goal of declarative computer vision, and today we are excited to\nintroduce FrameGrab, a Python library designed to make it easy to grab frames from\ncameras or streams."}),"\n",(0,a.jsx)(e.p,{children:"FrameGrab supports generic USB cameras, RTSP streams, Basler USB cameras, Basler GigE cameras, and Intel RealSense depth cameras."})]})}function u(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(g,{...t})}):g(t)}},1151:(t,e,o)=>{o.d(e,{Z:()=>s,a:()=>i});var a=o(7294);const r={},n=a.createContext(r);function i(t){const e=a.useContext(n);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),a.createElement(n.Provider,{value:e},t.children)}}}]);