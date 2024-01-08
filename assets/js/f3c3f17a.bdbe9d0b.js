"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4935],{1625:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"raspberry-pi-computer-vision","metadata":{"permalink":"/python-sdk/blog/raspberry-pi-computer-vision","source":"@site/blog/2024-01-02-groundlight-pi-gen.md","title":"Linux OS Images for Computer Vision on Raspberry Pi","description":"Groundlight simplifies the setup process by providing ready-to-use OS images for Raspberry Pi","date":"2024-01-02T00:00:00.000Z","formattedDate":"January 2, 2024","tags":[{"label":"raspberry-pi","permalink":"/python-sdk/blog/tags/raspberry-pi"},{"label":"mns","permalink":"/python-sdk/blog/tags/mns"}],"readingTime":4.825,"hasTruncateMarker":false,"authors":[{"name":"Blaise Munyampirwa","title":"Engineer at Groundlight","image_url":"https://a-us.storyblok.com/f/1015187/1000x1000/d12109465d/munyampirwab.jpg","imageURL":"https://a-us.storyblok.com/f/1015187/1000x1000/d12109465d/munyampirwab.jpg"},{"name":"Leo Dirac","title":"CTO and Co-founder at Groundlight","image_url":"https://a-us.storyblok.com/f/1015187/284x281/602a9c95c5/diracl.png","imageURL":"https://a-us.storyblok.com/f/1015187/284x281/602a9c95c5/diracl.png"}],"frontMatter":{"title":"Linux OS Images for Computer Vision on Raspberry Pi","description":"Groundlight simplifies the setup process by providing ready-to-use OS images for Raspberry Pi","slug":"raspberry-pi-computer-vision","authors":[{"name":"Blaise Munyampirwa","title":"Engineer at Groundlight","image_url":"https://a-us.storyblok.com/f/1015187/1000x1000/d12109465d/munyampirwab.jpg","imageURL":"https://a-us.storyblok.com/f/1015187/1000x1000/d12109465d/munyampirwab.jpg"},{"name":"Leo Dirac","title":"CTO and Co-founder at Groundlight","image_url":"https://a-us.storyblok.com/f/1015187/284x281/602a9c95c5/diracl.png","imageURL":"https://a-us.storyblok.com/f/1015187/284x281/602a9c95c5/diracl.png"}],"tags":["raspberry-pi","mns"],"image":"/img/gl-icon400.png","hide_table_of_contents":false},"unlisted":false,"nextItem":{"title":"Best practices for best results with Groundlight","permalink":"/python-sdk/blog/best-practices"}},"content":"Happy New Year everybody!  If you got a fancy new Raspberry Pi 5 for Christmas, you might be wondering what to do with it.  Well, we have a suggestion:  build a computer vision application with it!  And we have all the tools you need to get started.\\n\\nRaspberry Pi offers a great platform for computer vision (CV), ranging from home hobby projects to serious industrial applications. However, setting up a Raspberry Pi for computer vision can be a time-consuming process. [Groundlight Pi-Gen](https://github.com/groundlight/groundlight-pi-gen), simplifies the setup process by providing ready-to-use OS images for Raspberry Pi.\\n\\n(Note that here, when we say \\"image\\" we mean an OS image, which is a file containing a snapshot of an operating system - linux - that can be installed onto a new machine.  These are not photos or pictures, which are also of course important in computer vision.  Oh jargon...)\\n\\n## Raspberry Pi OS Images pre-built with Computer Vision Software\\nTo download a Linux image for your Raspberry Pi, loaded with all the software you need for computer vision, \\ngo to the [releases](https://github.com/groundlight/groundlight-pi-gen/releases) section in Groundlight Pi-Gen to find Raspberry Pi OS images (`.img.xz` files) that have pre-configured software environments for computer vision. These images are ready to be flashed onto a Raspberry Pi.\\n\\nThese include a fast, modern version of python (3.11), along with key libraries like [OpenCV](https://opencv.org/) for classic algorithms and device management, [Numpy](https://numpy.org/) for fast math, [FrameGrab](https://code.groundlight.ai/python-sdk/blog/introducing-framegrab) for declarative access to image sources, and of course [Groundlight](https://pypi.org/project/groundlight/) for fully-managed visual understanding models.  We\'ve set up a `venv` for you to avoid the dreaded \\"externally-managed-environment\\" error which plagues many newer python versions, while still letting you use good-old `pip` to add more.  (We like `poetry` and `conda`, and these will also work fine if you prefer them.)\\n\\nThere are several flavors of OS image available.  The smaller ones are suitable for headless use, while the larger ones include a desktop GUI with a browser.  The key differences are the size of the download and the amount of time it takes to flash the image onto a microSD card.  The [available flavors in the current release](https://github.com/groundlight/groundlight-pi-gen/releases) are:\\n\\n![Comparison of Groundlight Pi-Gen OS image flavors](./images/2024-01-02-groundlight-pi-gen/download-assets.png \\"Comparison of Groundlight Pi-Gen OS image flavors\\")\\n\\n- `desktop`: Image with Groundlight MNS and a desktop GUI with a browser.  Appropriate for a Raspberry Pi with a screen attached.\\n- `mns-headless`: Image with Groundlight Monitoring Notification Server (MNS) for headless use.\\n- `sdk-only`: Minimal image with the Python SDK and core libraries.  Suitable for headless use on smaller Raspberry Pi models such as the Pi Zero.\\n\\nA couple more flavors you might be interested in: We\'re planning a [kiosk mode](https://github.com/groundlight/groundlight-pi-gen/issues/15) for the desktop image, so that you can run a Groundlight MNS instance on a Raspberry Pi with a screen attached, and have it automatically start up in a browser.  \\nAlso note that the `edge` version which will download and run the ML models locally is not yet supported on Raspberry Pi, because the edge models requires a CUDA GPU.\\n\\n## Flashing the OS Image onto a microSD Card\\n\\nOnce you have [downloaded your image file](https://github.com/groundlight/groundlight-pi-gen/releases), the next step is to flash it onto a microSD card.  To do this, \\ndownload the [Raspberry Pi Imager](https://www.raspberrypi.com/software/) software. \\n\\n![Raspberry Pi Imager home screen](./images/2024-01-02-groundlight-pi-gen/rpi-imager-1.png \\"Raspberry Pi Imager home screen\\")\\n\\nAfter selecting your hardware type under \\"Choose Device\\", click \\"Choose OS\\" and scroll to the bottom to \\"Use custom\\".  \\n\\n![Raspberry Pi Imager use custom OS](./images/2024-01-02-groundlight-pi-gen/rpi-imager-2.png \\"Raspberry Pi Imager use custom OS\\")\\n\\nThen select the `.img.xz` file you downloaded.\\n\\n![Raspberry Pi Imager pick OS file](./images/2024-01-02-groundlight-pi-gen/rpi-imager-3.png \\"Raspberry Pi Imager pick OS file\\")\\n\\nThen choose your microSD card with the \\"Choose Storage\\" button, and then click \\"Next\\".  \\nYou\'ll get a prompt asking \\"Use OS customization?\\" which is optional, but very cool.  Choose \\"Edit settings\\", and you\\ncan set your Wi-Fi credentials, enable SSH login with a public key.\\n\\n![Rasterberry Pi Imager OS customization](./images/2024-01-02-groundlight-pi-gen/rpi-imager-4.png \\"Rasterberry Pi Imager OS customization\\")\\n\\nWhen you\'re done configuring settings, click \\"Save\\" and then \\"Yes\\" to confirm.  Writing the image to the microSD card will take a few minutes.  When it\'s done, just pop the SD card into your pi, and power it up!  If it all works properly, you\'ll be able to access your Raspberry Pi over the network without needing to plug in a keyboard, mouse, or monitor.  (We like to plug it into Ethernet for the first boot, because we find that the Raspberry Pi\'s Wi-Fi can be a bit finicky, even if properly configured.)\\n\\n\\n### No-code machine vision with Monitoring Notification Server (MNS)\\nIf you opted to install the `desktop` or `mns-headless` image, you\'ll have a web application called the [Groundlight Monitoring Notification Server (MNS)](https://github.com/groundlight/monitoring-notification-server),\\nwhich is a web application that allows you set up a computer vision pipeline without writing any code, and have it notify you when it detects something of interest.\\n\\nAfter setting up your Raspberry Pi with Groundlight OS, wait a few minutes for it to finish downloading everything, and then access the MNS by navigating to `http://[your-raspberry-pi\'s-IP-address]:3000` in a web browser, or if you\'re running the desktop version, open [`http://localhost:3000/`](http://localhost:3000).  \\n\\n![MNS sample home screen](./images/2024-01-02-groundlight-pi-gen/mns-home.png \\"MNS sample home screen\\")\\n\\nIt will prompt you for your [Groundlight API token](docs/getting-started/api-tokens), which you can get with a free account at [app.groundlight.ai](https://app.groundlight.ai).  Then you can describe your visual query in natural language, and how you want the MNS to notify you when it detects something of interest.  For best-practices on how to describe your visual query, see [this blog post](https://code.groundlight.ai/python-sdk/blog/best-practices).\\n\\n## Get Started for Free\\nTo start building your own computer vision solutions, sign up for a free account at [app.groundlight.ai](https://app.groundlight.ai). Dive into Groundlight Pi-Gen for a hassle-free introduction to AI-powered computer vision on Raspberry Pi.\\n\\nIf you have any questions, please reach out to us on the in-application chat at [app.groundlight.ai](https://app.groundlight.ai) or on [GitHub](https://github.com/groundlight/python-sdk/issues)."},{"id":"best-practices","metadata":{"permalink":"/python-sdk/blog/best-practices","source":"@site/blog/2023-12-15-best-practices.md","title":"Best practices for best results with Groundlight","description":"How to get the best chance of success from Groundlight detectors","date":"2023-12-15T00:00:00.000Z","formattedDate":"December 15, 2023","tags":[{"label":"how-to","permalink":"/python-sdk/blog/tags/how-to"},{"label":"best-practices","permalink":"/python-sdk/blog/tags/best-practices"}],"readingTime":4.295,"hasTruncateMarker":true,"authors":[{"name":"Paulina Varshavskaya","image_url":"https://a-us.storyblok.com/f/1015187/1000x1000/932933bc26/varshap.jpg","imageURL":"https://a-us.storyblok.com/f/1015187/1000x1000/932933bc26/varshap.jpg"},{"name":"Sunil Kumar","image_url":"https://a-us.storyblok.com/f/1015187/1000x1000/a265e322bd/kumars.jpg","imageURL":"https://a-us.storyblok.com/f/1015187/1000x1000/a265e322bd/kumars.jpg"},{"name":"Blake Thorne","image_url":"https://a-us.storyblok.com/f/1015187/1000x1000/daf4a78ec3/thorneb.jpg","imageURL":"https://a-us.storyblok.com/f/1015187/1000x1000/daf4a78ec3/thorneb.jpg"}],"frontMatter":{"title":"Best practices for best results with Groundlight","description":"How to get the best chance of success from Groundlight detectors","slug":"best-practices","authors":[{"name":"Paulina Varshavskaya","image_url":"https://a-us.storyblok.com/f/1015187/1000x1000/932933bc26/varshap.jpg","imageURL":"https://a-us.storyblok.com/f/1015187/1000x1000/932933bc26/varshap.jpg"},{"name":"Sunil Kumar","image_url":"https://a-us.storyblok.com/f/1015187/1000x1000/a265e322bd/kumars.jpg","imageURL":"https://a-us.storyblok.com/f/1015187/1000x1000/a265e322bd/kumars.jpg"},{"name":"Blake Thorne","image_url":"https://a-us.storyblok.com/f/1015187/1000x1000/daf4a78ec3/thorneb.jpg","imageURL":"https://a-us.storyblok.com/f/1015187/1000x1000/daf4a78ec3/thorneb.jpg"}],"tags":["how-to","best-practices"],"image":"/img/gl-icon400.png","hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Linux OS Images for Computer Vision on Raspberry Pi","permalink":"/python-sdk/blog/raspberry-pi-computer-vision"},"nextItem":{"title":"Introducing Groundlight\'s FrameGrab Library","permalink":"/python-sdk/blog/introducing-framegrab"}},"content":"Want to get the best chance of success from your new Groundlight detectors? Here are five suggestions from the Groundlight science team that can help you get the best performance possible. \\n\\nCome at it from the point of view of making answering your image query question as easy as possible. \\nPretend you\u2019re explaining the task to a novice. What would you need to do to set them up for success?\\n\\n\x3c!-- truncate --\x3e\\n\\n## Phrase the question right\\nYou will have more success asking questions that can in principle be answered by a reasonable person \\nsimply by looking at a single image from the detector. \\n\\n:white_check_mark: **DO:** \\"Is there a part staged in front of the robot ready for picking up?\\"   \\n:x: **DON\'T:** \\"Am I awesome?\\"\\n\\nThink about how you will use the output of your detector, so the Yes and No answers align with your expectations. A technically correct answer to a vague question may be of no use to you. For example, if you have a camera pointing down on a kitchen range and would like to get an alert if there\'s a fire, phrase the query so that normal gas burner flames are excluded. \\n\\n:white_check_mark: **DO:** \\"Is there a fire in the pan? (Ignore normal gas burner flames)\\"  \\n:x: **DON\'T:** \\"Is there a fire?\\"\\n\\n## Put details in the notes\\nIs any specialized knowledge required to answer your query? \\nUse the notes dialog to provide explanations of any assumed knowledge or definitions of technical terms. \\nLike in the fire extinguisher example above, consider adding short definitions inside the text of the query. \\n \\n:white_check_mark: **DO:** \u201cIs the fiducial (etched arrow on the gear surface) aligned with the painted chain link?\u201d  \\n:white_check_mark: **DO:** \u201cIs the fence fully closed? (Metal bar on the fence must be touching the plywood wall)\u201d\\n\\nHere\u2019s an example of detailed notes for a detector asking \u201cIs there a streetcar visible? READ NOTES\u201d: \\n\\n[![Screenshot of detailed notes for a detector](./images/2023-12-15-best-practices/streetcar_visible_notes.png \\"Detailed notes for a detector asking \\\\\\"Is there a streetcar visible? READ NOTES\\\\\\"\\")](./images/2023-12-15-best-practices/streetcar_visible_notes.png)\\n\\nIn this case, the customer even drew on the example images to point out where the street car might appear. \\nDetailed notes may be especially useful if the question is about a smaller region of the scene in the image.\\n\\n## Think of edge cases\\nHow do you want to treat unclear or edge cases?\\nSometimes it\u2019s impossible to answer the question based on the image, for example, when it\u2019s too dark \\nat night to tell, or the view is temporarily obstructed by something moving in front of the camera. \\nDo you know how you\u2019d like to treat those cases? \\n\\n:white_check_mark: **DO:** Add notes like \u201cIf the image is too dark to tell, the answer should be YES.\u201d\\n\\nIn the fire extinguisher example below, the customer wrote \u201cIf you can\u2019t see the fire extinguisher, \\nit is blocked\u201d inside the query text, drawing attention to the most important potential edge case.\\n\\n[![Screenshot for a detector with edge case in query](./images/2023-12-15-best-practices/fire_extinguisher_blocked_yes.png \\"A detector with a detailed query including a likely potential edge case (fire extinguisher not visible).\\")](./images/2023-12-15-best-practices/fire_extinguisher_blocked_yes.png)\\n\\nDetailed notes on foreseeable edge cases will prevent confusion by backend labelers and result in \\nquicker learning for your detector at less cost to you. \\n\\n## Seed with a few examples\\nIt helps to add a few labels yourself early on, in order to provide good examples for backend labelers and the \\nnew ML model. For best results, if you have example images for both YES and NO answers, send \\nthem through early on, and add the corresponding labels. Having at least 2 customer \u201cground truth\u201d \\nanswers for each class of Yes or No will also give you ML performance metrics on your detector.\\n\\n![Blue button before 2 examples of each class are provided](./images/2023-12-15-best-practices/label_button_before.png \\"\\")\\n\\n## Only you know the truth\\nCheck periodically under the Flagged tab on your detector\'s detail page to see if any images may still be confusing. Click on the \\"Override Label\\" button to provide the correct answer in those cases. \\n\\n[![Screenshot of image flagged as needing better examples](./images/2023-12-15-best-practices/flagged_images.png \\"Partial screenshot of a Flagged view\\")](./images/2023-12-15-best-practices/flagged_images.png)\\n\\nIt\'s also good practice to continue adding a few ground truth labels here and there by clicking on the \u201cKeep labeling\u201d button \\non the detector details page, in order to get tighter confidence bounds on your detector\u2019s performance metrics.\\n\\n---\\n> :mortar_board: *Watch this space for a forthcoming in-depth discussion of confidence bounds*\\n---\\n\\nIf you notice labeling mistakes, correct them by providing your own answer. Then consider adding \\nextra instructions in the notes. You can upload screenshots or images inside the notes dialog too. \\nOur labeling staff will be notified whenever you make changes to your notes so they stay up to date with how you want your detector to behave and can quickly address misconceptions.\\n\\n## [Ready to start?](https://app.groundlight.ai)\\n\\nWe hope these tips give you a great start. If you haven\u2019t already, you can sign up for a free account at https://app.groundlight.ai. Dive into [Groundlight Pi-Gen](https://github.com/groundlight/groundlight-pi-gen) for a hassle-free introduction to AI-powered computer vision on Raspberry Pi.\\n\\nIf you have any questions, please reach out to us on the in-application chat or via email to support@groundlight.ai."},{"id":"introducing-framegrab","metadata":{"permalink":"/python-sdk/blog/introducing-framegrab","source":"@site/blog/2023-12-06-framegrab.md","title":"Introducing Groundlight\'s FrameGrab Library","description":"We would like to introduce you to the FrameGrab library.","date":"2023-12-06T00:00:00.000Z","formattedDate":"December 6, 2023","tags":[{"label":"groundlight-extensions","permalink":"/python-sdk/blog/tags/groundlight-extensions"},{"label":"framegrab","permalink":"/python-sdk/blog/tags/framegrab"}],"readingTime":3.12,"hasTruncateMarker":true,"authors":[{"name":"Tim Huff","title":"Engineering intern at Groundlight","image_url":"https://a-us.storyblok.com/f/1015187/1000x1000/06b25bf1a6/hufft.jpg","imageURL":"https://a-us.storyblok.com/f/1015187/1000x1000/06b25bf1a6/hufft.jpg"},{"name":"Blaise Munyampirwa","title":"Engineer at Groundlight","image_url":"https://a-us.storyblok.com/f/1015187/1000x1000/d12109465d/munyampirwab.jpg","imageURL":"https://a-us.storyblok.com/f/1015187/1000x1000/d12109465d/munyampirwab.jpg"},{"name":"Leo Dirac","title":"CTO and Co-founder at Groundlight","image_url":"https://a-us.storyblok.com/f/1015187/284x281/602a9c95c5/diracl.png","imageURL":"https://a-us.storyblok.com/f/1015187/284x281/602a9c95c5/diracl.png"},{"name":"Tyler Romero","title":"Senior Machine Learning Engineer","image_url":"https://a-us.storyblok.com/f/1015187/1000x1000/368053d79a/romerot.jpg","imageURL":"https://a-us.storyblok.com/f/1015187/1000x1000/368053d79a/romerot.jpg"},{"name":"Michael Vogelsong","title":"Chief ML Scientist","image_url":"https://a-us.storyblok.com/f/1015187/1000x1000/c87b9d30f4/vogelsongm.jpg","imageURL":"https://a-us.storyblok.com/f/1015187/1000x1000/c87b9d30f4/vogelsongm.jpg"}],"frontMatter":{"title":"Introducing Groundlight\'s FrameGrab Library","description":"We would like to introduce you to the FrameGrab library.","slug":"introducing-framegrab","authors":[{"name":"Tim Huff","title":"Engineering intern at Groundlight","image_url":"https://a-us.storyblok.com/f/1015187/1000x1000/06b25bf1a6/hufft.jpg","imageURL":"https://a-us.storyblok.com/f/1015187/1000x1000/06b25bf1a6/hufft.jpg"},{"name":"Blaise Munyampirwa","title":"Engineer at Groundlight","image_url":"https://a-us.storyblok.com/f/1015187/1000x1000/d12109465d/munyampirwab.jpg","imageURL":"https://a-us.storyblok.com/f/1015187/1000x1000/d12109465d/munyampirwab.jpg"},{"name":"Leo Dirac","title":"CTO and Co-founder at Groundlight","image_url":"https://a-us.storyblok.com/f/1015187/284x281/602a9c95c5/diracl.png","imageURL":"https://a-us.storyblok.com/f/1015187/284x281/602a9c95c5/diracl.png"},{"name":"Tyler Romero","title":"Senior Machine Learning Engineer","image_url":"https://a-us.storyblok.com/f/1015187/1000x1000/368053d79a/romerot.jpg","imageURL":"https://a-us.storyblok.com/f/1015187/1000x1000/368053d79a/romerot.jpg"},{"name":"Michael Vogelsong","title":"Chief ML Scientist","image_url":"https://a-us.storyblok.com/f/1015187/1000x1000/c87b9d30f4/vogelsongm.jpg","imageURL":"https://a-us.storyblok.com/f/1015187/1000x1000/c87b9d30f4/vogelsongm.jpg"}],"tags":["groundlight-extensions","framegrab"],"image":"/img/gl-icon400.png","hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Best practices for best results with Groundlight","permalink":"/python-sdk/blog/best-practices"}},"content":"At Groundlight, we continue to build infrastructure that allows our customers to easily use computer \\nvision without a pre-existing dataset for industrial inspection, retail analytics, mobile robotics, and \\nmuch more. We\'ve built many features towards the goal of declarative computer vision, and today we are excited to \\nintroduce FrameGrab, a Python library designed to make it easy to grab frames from\\ncameras or streams. \\n\\nFrameGrab supports generic USB cameras, RTSP streams, Basler USB cameras, Basler GigE cameras, and Intel RealSense depth cameras. \\n\\n\x3c!-- truncate --\x3e\\n\\n\\n## Grabbing Camera Frames\\n\\nFrame grabber objects are configured through YAML. The configuration combines the camera type, camera ID, and the camera\\noptions. The YAML config contains many configurable features, but only `input_type` is required. Valid choices for \\n`input_type` include \\n\\n* generic_usb\\n* rtsp\\n* realsense\\n* basler \\n\\nHere is an example of how to use the generic USB configuration \\n\\n```python notest\\nfrom framegrab import FrameGrabber \\n\\nconfig = \\"\\"\\"\\nname: Front Door Camera\\ninput_type: generic_usb\\nid:\\n  serial_number: 23432570\\noptions:\\n    resolution:\\n        height: 1080\\n        width: 1920\\n    zoom:\\n        digital: 1.5\\n\\"\\"\\"\\n\\ngrabber = FrameGrabber.create_grabber_yaml(config)\\nframe = grabber.grab()\\n\\n# Do real work with the frame \\n\\n# Finally release the grabber object \\ngrabber.release()\\n\\n```\\n\\nFor the full set of configurable parameters, please refer to the [FrameGrab repository](https://github.com/groundlight/framegrab/tree/main).\\n\\n## Multi-cam Configuration \\n\\nIf you have multiple cameras of the same type plugged in, we recommend you include serial numbers in the YAML config to \\nensure proper pairing. The default pairing behavior is sequential (i.e., configurations will be paired with cameras in \\na sequential ordering). \\n\\nYou can add serial numbers for multiple cameras like this\\n\\n```yaml \\nGL_CAMERAS: |\\n  - name: on robot arm\\n    input_type: realsense\\n    options: \\n      depth:\\n        side_by_side: 1\\n      crop:\\n        relative:\\n          right: .8\\n  - name: conference room\\n      input_type: rtsp\\n      id: \\n        rtsp_url: rtsp://admin:password@192.168.1.20/cam/realmonitor?channel=1&subtype=0\\n      options:\\n        crop:\\n          pixels:\\n            top: 350\\n            bottom: 1100\\n            left: 1100\\n            right: 2000\\n  - name: workshop\\n    input_type: generic_usb\\n    id:\\n      serial_number: B77D3A8F\\n\\n```\\n\\n## FrameGrab Autodiscovery Mode \\n\\nAmong other features, FrameGrab also includes autodiscovery mode. This allows you to automatically connect to all cameras \\nthat are plugged into your machine (or discoverable on the network). Autodiscovery will load up default configurations \\nfor each camera. \\n\\n:::note\\n\\nPlease note that RTSP streams cannot be autodiscovered in this manner. RTSP URLs must be pre-specified in the \\nconfigurations. \\n\\n:::\\n\\nWe recommend autodiscovery for simple applications where you don\'t need to set any special options on your cameras. \\nIt is also a convenient method for finding the serial numbers of your cameras in case they are not printed on them. \\n\\nBelow is a short example of how to launch autodiscovery mode. \\n\\n```python notest\\nfrom framegrab import FrameGrabber\\n\\ngrabbers = FrameGrabber.autodiscover()\\n\\n# Print some information about the discovered cameras\\nfor grabber in grabbers.values():\\n    print(grabber.config)\\n\\n    # Do real work \\n\\n    # Release the frame grabber object \\n    grabber.release()\\n\\n```\\n\\n\\n## Using FrameGrab for Motion Detection \\n\\nWith this release, we also continue to support [motion detection](https://en.wikipedia.org/wiki/Motion_detection) via frame differencing, a \\nfast algorithm for easily detecting motion in a sequence of frames. \\n\\nTo use motion detection, initialize the MotionDetector instance with the desired percentage of pixels \\nneeded to change in an image for it to be flagged for motion and the minimum brightness change for each pixel for it \\nto be considered changed. Here is a comprehensive example. \\n\\n```python notest\\nfrom framegrab import FrameGrabber, MotionDetector\\n\\nconfig = {\\n    \'input_type\': \'webcam\',\\n}\\ngrabber = FrameGrabber.create_grabber(config)\\nmotion_detector = MotionDetector(pct_threshold=motion_threshold, val_threshold=60)\\n\\nwhile True:\\n    frame = grabber.grab()\\n    if frame is None:\\n        print(\\"No frame captured!\\")\\n        continue\\n\\n    if motion_detector.motion_detected(frame):\\n        print(\\"Motion detected!\\")\\n\\n```\\n\\n\\n## Conclusion \\n\\nRecent releases of FrameGrab add various easy to use features. We now support \\nmultiple camera types and continue to support motion detection. \\n\\nIf you encounter any issues while using FrameGrab, please feel free to file an issue in our [GitHub repository](https://github.com/groundlight/framegrab)\\nand while there, review guidelines for [contributing](https://github.com/groundlight/framegrab#contributing) to this library."}]}')}}]);