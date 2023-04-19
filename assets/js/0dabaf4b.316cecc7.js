"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),g=o,m=s["".concat(p,".").concat(g)]||s[g]||d[g]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="A Fun Example: Dog-on-Couch Detector",l={unversionedId:"getting-started/dog-on-couch",id:"getting-started/dog-on-couch",title:"A Fun Example: Dog-on-Couch Detector",description:"Here is a whimsical example of how you could use Groundlight in your home to keep your dog off the couch.  This document will guide you through creating a complete application. If the dog is detected on the couch, the application will play a pre-recorded sound over the computer's speakers, instructing the dog to get off the couch.  Be sure to record your own voice so that your dog pays attention to you.",source:"@site/docs/getting-started/3-dog-on-couch.md",sourceDirName:"getting-started",slug:"/getting-started/dog-on-couch",permalink:"/python-sdk/docs/getting-started/dog-on-couch",draft:!1,editUrl:"https://github.com/groundlight/python-sdk/tree/main/docs/docs/getting-started/3-dog-on-couch.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"A Serious Example: Retail Analytics",permalink:"/python-sdk/docs/getting-started/retail-analytics"},next:{title:"Confidence Levels",permalink:"/python-sdk/docs/getting-started/managing-confidence"}},p={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Creating the Application",id:"creating-the-application",level:2}],u={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"a-fun-example-dog-on-couch-detector"},"A Fun Example: Dog-on-Couch Detector"),(0,o.kt)("p",null,"Here is a whimsical example of how you could use Groundlight in your home to keep your dog off the couch.  This document will guide you through creating a complete application. If the dog is detected on the couch, the application will play a pre-recorded sound over the computer's speakers, instructing the dog to get off the couch.  Be sure to record your own voice so that your dog pays attention to you."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/installation/"},"Groundlight SDK")," with Python 3.7 or higher"),(0,o.kt)("li",{parentName:"ul"},"A supported USB or network-connected camera"),(0,o.kt)("li",{parentName:"ul"},"A pre-recorded sound file (e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"get_off_couch.mp3"),")"),(0,o.kt)("li",{parentName:"ul"},"A couch and a dog are recommended for proper end-to-end testing.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Ensure you have Python 3.7 or higher installed, and then install the Groundlight SDK and OpenCV library:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install groundlight opencv-python pillow pyaudio\n")),(0,o.kt)("h2",{id:"creating-the-application"},"Creating the Application"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"First, log in to the ",(0,o.kt)("a",{parentName:"p",href:"https://app.groundlight.ai"},"Groundlight application")," and get an ",(0,o.kt)("a",{parentName:"p",href:"api-tokens"},"API Token"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Next, we'll write the Python script for the application. Import the required libraries:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"notest",notest:!0},"import time\nimport cv2\nfrom groundlight import Groundlight\nfrom PIL import Image\nimport pyaudio\nimport wave\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Define a function to capture an image from the camera using OpenCV:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def capture_image():\n    cap = cv2.VideoCapture(0)\n\n    ret, frame = cap.read()\n    cap.release()\n\n    if ret:\n        # Convert to PIL image\n        return Image.fromarray(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))\n    else:\n        return None\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Define a function to play the pre-recorded sound:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def play_sound(file_path):\n    CHUNK = 1024\n    wf = wave.open(file_path, 'rb')\n\n    p = pyaudio.PyAudio()\n\n    stream = p.open(format=p.get_format_from_width(wf.getsampwidth()),\n                    channels=wf.getnchannels(),\n                    rate=wf.getframerate(),\n                    output=True)\n\n    data = wf.readframes(CHUNK)\n\n    while data:\n        stream.write(data)\n        data = wf.readframes(CHUNK)\n\n    stream.stop_stream()\n    stream.close()\n\n    p.terminate()\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Write the main application loop:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"notest",notest:!0},'gl = Groundlight()\n\ndetector = gl.get_detector("Dog on Couch Detector")\n\nwhile True:\n    image = capture_image()\n    if image:\n        try:\n            iq = gl.submit_image_query(image=image, detector=detector, wait=60)\n            result = iq.result\n            if result == "YES":\n                print("Dog detected on the couch!")\n                play_sound("get_off_couch.mp3")\n        except Exception as e:\n            print(f"Error submitting image query: {e}")\n    else:\n        print("Failed to capture image")\n\n    # Sleep for a minute before checking again\n    time.sleep(60)\n')),(0,o.kt)("p",null,"This application captures an image using the ",(0,o.kt)("inlineCode",{parentName:"p"},"capture_image")," function, then submits it to the Groundlight API for analysis. If the dog is detected on the couch, it plays the pre-recorded sound using the ",(0,o.kt)("inlineCode",{parentName:"p"},"play_sound")," function."),(0,o.kt)("p",null,"Save the script as ",(0,o.kt)("inlineCode",{parentName:"p"},"dog_on_couch_detector.py")," and run it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python dog_on_couch_detector.py\n")))}d.isMDXComponent=!0}}]);