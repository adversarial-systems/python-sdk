"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[242],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),g=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=g(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=g(r),p=n,m=d["".concat(s,".").concat(p)]||d[p]||c[p]||a;return r?i.createElement(m,o(o({ref:t},u),{},{components:r})):i.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var g=2;g<a;g++)o[g]=r[g];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>g});var i=r(7462),n=(r(7294),r(3905));const a={sidebar_position:2},o="Working with Detectors",l={unversionedId:"building-applications/working-with-detectors",id:"building-applications/working-with-detectors",title:"Working with Detectors",description:"Explicitly create a new detector",source:"@site/docs/building-applications/2-working-with-detectors.md",sourceDirName:"building-applications",slug:"/building-applications/working-with-detectors",permalink:"/python-sdk/docs/building-applications/working-with-detectors",draft:!1,editUrl:"https://github.com/groundlight/python-sdk/tree/main/docs/docs/building-applications/2-working-with-detectors.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Grabbing Images",permalink:"/python-sdk/docs/building-applications/grabbing-images"},next:{title:"Confidence Levels",permalink:"/python-sdk/docs/building-applications/managing-confidence"}},s={},g=[{value:"Explicitly create a new detector",id:"explicitly-create-a-new-detector",level:3},{value:"Retrieve an existing detector",id:"retrieve-an-existing-detector",level:3},{value:"List your detectors",id:"list-your-detectors",level:3},{value:"Retrieve an image query",id:"retrieve-an-image-query",level:3},{value:"List your previous image queries",id:"list-your-previous-image-queries",level:3},{value:"Adding labels to existing image queries",id:"adding-labels-to-existing-image-queries",level:3}],u={toc:g},d="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"working-with-detectors"},"Working with Detectors"),(0,n.kt)("h3",{id:"explicitly-create-a-new-detector"},"Explicitly create a new detector"),(0,n.kt)("p",null,"Typically you'll use the ",(0,n.kt)("inlineCode",{parentName:"p"},"get_or_create_detector(name: str, query: str)")," method to find an existing detector you've already created with the same name, or create a new one if it doesn't exists. But if you'd like to force creating a new detector you can also use the ",(0,n.kt)("inlineCode",{parentName:"p"},"create_detector(name: str, query: str)")," method"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"notest",notest:!0},'from groundlight import Groundlight\n\ngl = Groundlight()\n# highlight-start\ndetector = gl.create_detector(name="your_detector_name", query="is this what we want to see?")\n# highlight-end\n')),(0,n.kt)("h3",{id:"retrieve-an-existing-detector"},"Retrieve an existing detector"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"notest",notest:!0},'from groundlight import Groundlight\n\ngl = Groundlight()\n# highlight-start\ndetector = gl.get_detector(id="YOUR_DETECTOR_ID")\n# highlight-end\n')),(0,n.kt)("h3",{id:"list-your-detectors"},"List your detectors"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from groundlight import Groundlight\n\ngl = Groundlight()\n# highlight-start\n# Defaults to 10 results per page\ndetectors = gl.list_detectors()\n\n# Pagination: 1st page of 5 results per page\ndetectors = gl.list_detectors(page=1, page_size=5)\n# highlight-end\n")),(0,n.kt)("h3",{id:"retrieve-an-image-query"},"Retrieve an image query"),(0,n.kt)("p",null,"In practice, you may want to check for a new result on your query. For example, after a cloud reviewer labels your query. For example, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"image_query.id")," after the above ",(0,n.kt)("inlineCode",{parentName:"p"},"submit_image_query()")," call."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"notest",notest:!0},'from groundlight import Groundlight\n\ngl = Groundlight()\n# highlight-start\nimage_query = gl.get_image_query(id="iq_YOUR_IMAGE_QUERY_ID")\n# highlight-end\n')),(0,n.kt)("h3",{id:"list-your-previous-image-queries"},"List your previous image queries"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from groundlight import Groundlight\n\ngl = Groundlight()\n# highlight-start\n# Defaults to 10 results per page\nimage_queries = gl.list_image_queries()\n\n# Pagination: 1st page of 5 results per page\nimage_queries = gl.list_image_queries(page=1, page_size=5)\n# highlight-end\n")),(0,n.kt)("h3",{id:"adding-labels-to-existing-image-queries"},"Adding labels to existing image queries"),(0,n.kt)("p",null,"Groundlight lets you start using models by making queries against your very first image, but there are a few situations where you might either have an existing dataset, or you'd like to handle the escalation response programatically in your own code but still include the label to get better responses in the future. With your ",(0,n.kt)("inlineCode",{parentName:"p"},"image_query")," from either ",(0,n.kt)("inlineCode",{parentName:"p"},"submit_image_query()")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"get_image_query()")," you can add the label directly. Note that if the query is already in the escalation queue due to low ML confidence or audit thresholds, it may also receive labels from another source."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from groundlight import Groundlight\nfrom PIL import Image\nimport requests\n\ngl = Groundlight()\nd = gl.get_or_create_detector(name="doorway", query="Is the doorway open?")\nimage_url= "https://images.selfstorage.com/large-compress/2174925f24362c479b2.jpg"\nimage = Image.open(requests.get(image_url, stream=True).raw)\nimage_query = gl.submit_image_query(detector=d, image=image)\n# highlight-start\ngl.add_label(image_query, \'YES\') # or \'NO\'\n# highlight-end\n')),(0,n.kt)("p",null,"The only valid labels at this time are ",(0,n.kt)("inlineCode",{parentName:"p"},"'YES'")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"'NO'"),"."))}c.isMDXComponent=!0}}]);