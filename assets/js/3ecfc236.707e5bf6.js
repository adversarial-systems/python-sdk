"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9400],{4459:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=r(5893),o=r(1151);const a={title:"Introducing Groundlight's FrameGrab Library",description:"We would like to introduce you to the FrameGrab library.",slug:"introducing-framegrab",authors:[{name:"Tim Huff",title:"Engineering intern at Groundlight",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/06b25bf1a6/hufft.jpg"},{name:"Blaise Munyampirwa",title:"Engineer at Groundlight",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/d12109465d/munyampirwab.jpg"},{name:"Leo Dirac",title:"CTO and Co-founder at Groundlight",image_url:"https://a-us.storyblok.com/f/1015187/284x281/602a9c95c5/diracl.png"},{name:"Tyler Romero",title:"Senior Machine Learning Engineer",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/368053d79a/romerot.jpg"},{name:"Michael Vogelsong",title:"Chief ML Scientist",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/c87b9d30f4/vogelsongm.jpg"}],tags:["groundlight-extensions","framegrab"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},i=void 0,s={permalink:"/python-sdk/blog/introducing-framegrab",source:"@site/blog/2023-12-06-framegrab.md",title:"Introducing Groundlight's FrameGrab Library",description:"We would like to introduce you to the FrameGrab library.",date:"2023-12-06T00:00:00.000Z",formattedDate:"December 6, 2023",tags:[{label:"groundlight-extensions",permalink:"/python-sdk/blog/tags/groundlight-extensions"},{label:"framegrab",permalink:"/python-sdk/blog/tags/framegrab"}],readingTime:3.12,hasTruncateMarker:!0,authors:[{name:"Tim Huff",title:"Engineering intern at Groundlight",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/06b25bf1a6/hufft.jpg",imageURL:"https://a-us.storyblok.com/f/1015187/1000x1000/06b25bf1a6/hufft.jpg"},{name:"Blaise Munyampirwa",title:"Engineer at Groundlight",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/d12109465d/munyampirwab.jpg",imageURL:"https://a-us.storyblok.com/f/1015187/1000x1000/d12109465d/munyampirwab.jpg"},{name:"Leo Dirac",title:"CTO and Co-founder at Groundlight",image_url:"https://a-us.storyblok.com/f/1015187/284x281/602a9c95c5/diracl.png",imageURL:"https://a-us.storyblok.com/f/1015187/284x281/602a9c95c5/diracl.png"},{name:"Tyler Romero",title:"Senior Machine Learning Engineer",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/368053d79a/romerot.jpg",imageURL:"https://a-us.storyblok.com/f/1015187/1000x1000/368053d79a/romerot.jpg"},{name:"Michael Vogelsong",title:"Chief ML Scientist",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/c87b9d30f4/vogelsongm.jpg",imageURL:"https://a-us.storyblok.com/f/1015187/1000x1000/c87b9d30f4/vogelsongm.jpg"}],frontMatter:{title:"Introducing Groundlight's FrameGrab Library",description:"We would like to introduce you to the FrameGrab library.",slug:"introducing-framegrab",authors:[{name:"Tim Huff",title:"Engineering intern at Groundlight",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/06b25bf1a6/hufft.jpg",imageURL:"https://a-us.storyblok.com/f/1015187/1000x1000/06b25bf1a6/hufft.jpg"},{name:"Blaise Munyampirwa",title:"Engineer at Groundlight",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/d12109465d/munyampirwab.jpg",imageURL:"https://a-us.storyblok.com/f/1015187/1000x1000/d12109465d/munyampirwab.jpg"},{name:"Leo Dirac",title:"CTO and Co-founder at Groundlight",image_url:"https://a-us.storyblok.com/f/1015187/284x281/602a9c95c5/diracl.png",imageURL:"https://a-us.storyblok.com/f/1015187/284x281/602a9c95c5/diracl.png"},{name:"Tyler Romero",title:"Senior Machine Learning Engineer",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/368053d79a/romerot.jpg",imageURL:"https://a-us.storyblok.com/f/1015187/1000x1000/368053d79a/romerot.jpg"},{name:"Michael Vogelsong",title:"Chief ML Scientist",image_url:"https://a-us.storyblok.com/f/1015187/1000x1000/c87b9d30f4/vogelsongm.jpg",imageURL:"https://a-us.storyblok.com/f/1015187/1000x1000/c87b9d30f4/vogelsongm.jpg"}],tags:["groundlight-extensions","framegrab"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Best practices for best results with Groundlight",permalink:"/python-sdk/blog/best-practices"}},l={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0]},c=[{value:"Grabbing Camera Frames",id:"grabbing-camera-frames",level:2},{value:"Multi-cam Configuration",id:"multi-cam-configuration",level:2},{value:"FrameGrab Autodiscovery Mode",id:"framegrab-autodiscovery-mode",level:2},{value:"Using FrameGrab for Motion Detection",id:"using-framegrab-for-motion-detection",level:2},{value:"Conclusion",id:"conclusion",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"At Groundlight, we continue to build infrastructure that allows our customers to easily use computer\nvision without a pre-existing dataset for industrial inspection, retail analytics, mobile robotics, and\nmuch more. We've built many features towards the goal of declarative computer vision, and today we are excited to\nintroduce FrameGrab, a Python library designed to make it easy to grab frames from\ncameras or streams."}),"\n",(0,t.jsx)(n.p,{children:"FrameGrab supports generic USB cameras, RTSP streams, Basler USB cameras, Basler GigE cameras, and Intel RealSense depth cameras."}),"\n",(0,t.jsx)(n.h2,{id:"grabbing-camera-frames",children:"Grabbing Camera Frames"}),"\n",(0,t.jsxs)(n.p,{children:["Frame grabber objects are configured through YAML. The configuration combines the camera type, camera ID, and the camera\noptions. The YAML config contains many configurable features, but only ",(0,t.jsx)(n.code,{children:"input_type"})," is required. Valid choices for\n",(0,t.jsx)(n.code,{children:"input_type"})," include"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"generic_usb"}),"\n",(0,t.jsx)(n.li,{children:"rtsp"}),"\n",(0,t.jsx)(n.li,{children:"realsense"}),"\n",(0,t.jsx)(n.li,{children:"basler"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Here is an example of how to use the generic USB configuration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:"notest",children:'from framegrab import FrameGrabber \n\nconfig = """\nname: Front Door Camera\ninput_type: generic_usb\nid:\n  serial_number: 23432570\noptions:\n    resolution:\n        height: 1080\n        width: 1920\n    zoom:\n        digital: 1.5\n"""\n\ngrabber = FrameGrabber.create_grabber_yaml(config)\nframe = grabber.grab()\n\n# Do real work with the frame \n\n# Finally release the grabber object \ngrabber.release()\n\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For the full set of configurable parameters, please refer to the ",(0,t.jsx)(n.a,{href:"https://github.com/groundlight/framegrab/tree/main",children:"FrameGrab repository"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"multi-cam-configuration",children:"Multi-cam Configuration"}),"\n",(0,t.jsx)(n.p,{children:"If you have multiple cameras of the same type plugged in, we recommend you include serial numbers in the YAML config to\nensure proper pairing. The default pairing behavior is sequential (i.e., configurations will be paired with cameras in\na sequential ordering)."}),"\n",(0,t.jsx)(n.p,{children:"You can add serial numbers for multiple cameras like this"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"GL_CAMERAS: |\n  - name: on robot arm\n    input_type: realsense\n    options: \n      depth:\n        side_by_side: 1\n      crop:\n        relative:\n          right: .8\n  - name: conference room\n      input_type: rtsp\n      id: \n        rtsp_url: rtsp://admin:password@192.168.1.20/cam/realmonitor?channel=1&subtype=0\n      options:\n        crop:\n          pixels:\n            top: 350\n            bottom: 1100\n            left: 1100\n            right: 2000\n  - name: workshop\n    input_type: generic_usb\n    id:\n      serial_number: B77D3A8F\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"framegrab-autodiscovery-mode",children:"FrameGrab Autodiscovery Mode"}),"\n",(0,t.jsx)(n.p,{children:"Among other features, FrameGrab also includes autodiscovery mode. This allows you to automatically connect to all cameras\nthat are plugged into your machine (or discoverable on the network). Autodiscovery will load up default configurations\nfor each camera."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Please note that RTSP streams cannot be autodiscovered in this manner. RTSP URLs must be pre-specified in the\nconfigurations."})}),"\n",(0,t.jsx)(n.p,{children:"We recommend autodiscovery for simple applications where you don't need to set any special options on your cameras.\nIt is also a convenient method for finding the serial numbers of your cameras in case they are not printed on them."}),"\n",(0,t.jsx)(n.p,{children:"Below is a short example of how to launch autodiscovery mode."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:"notest",children:"from framegrab import FrameGrabber\n\ngrabbers = FrameGrabber.autodiscover()\n\n# Print some information about the discovered cameras\nfor grabber in grabbers.values():\n    print(grabber.config)\n\n    # Do real work \n\n    # Release the frame grabber object \n    grabber.release()\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"using-framegrab-for-motion-detection",children:"Using FrameGrab for Motion Detection"}),"\n",(0,t.jsxs)(n.p,{children:["With this release, we also continue to support ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Motion_detection",children:"motion detection"})," via frame differencing, a\nfast algorithm for easily detecting motion in a sequence of frames."]}),"\n",(0,t.jsx)(n.p,{children:"To use motion detection, initialize the MotionDetector instance with the desired percentage of pixels\nneeded to change in an image for it to be flagged for motion and the minimum brightness change for each pixel for it\nto be considered changed. Here is a comprehensive example."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:"notest",children:"from framegrab import FrameGrabber, MotionDetector\n\nconfig = {\n    'input_type': 'webcam',\n}\ngrabber = FrameGrabber.create_grabber(config)\nmotion_detector = MotionDetector(pct_threshold=motion_threshold, val_threshold=60)\n\nwhile True:\n    frame = grabber.grab()\n    if frame is None:\n        print(\"No frame captured!\")\n        continue\n\n    if motion_detector.motion_detected(frame):\n        print(\"Motion detected!\")\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"Recent releases of FrameGrab add various easy to use features. We now support\nmultiple camera types and continue to support motion detection."}),"\n",(0,t.jsxs)(n.p,{children:["If you encounter any issues while using FrameGrab, please feel free to file an issue in our ",(0,t.jsx)(n.a,{href:"https://github.com/groundlight/framegrab",children:"GitHub repository"}),"\nand while there, review guidelines for ",(0,t.jsx)(n.a,{href:"https://github.com/groundlight/framegrab#contributing",children:"contributing"})," to this library."]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>i});var t=r(7294);const o={},a=t.createContext(o);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);