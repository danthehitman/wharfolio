(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5621:function(e,t,n){Promise.resolve().then(n.t.bind(n,7059,23)),Promise.resolve().then(n.bind(n,7976))},7976:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/topobag.ff5ae472.jpg",height:2048,width:2048,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAABAgYDAAAAAAAAAAAAAAABABECAwQFEhMXUaH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8AtRNvvJRhMuuNrxYRAHQBrd+ny9REVt0f/9k=",blurWidth:8,blurHeight:8}},7059:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(5996).Z,a=n(8644).Z,r=n(9536).Z,o=n(872).Z,l=r(n(6006)),s=a(n(7538)),d=n(1358),u=n(2330),c=n(3848);n(5477);var f=a(n(805));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function A(e,t,n,a,r,o,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&o(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,r=!1;a.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}})}let h=l.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:a,widthInt:r,qualityInt:s,className:d,imgStyle:u,blurStyle:c,isLazy:f,fill:p,placeholder:g,loading:m,srcString:h,config:v,unoptimized:y,loader:b,onLoadRef:w,onLoadingCompleteRef:E,setBlurComplete:_,setShowAltText:C,onLoad:S,onError:O}=e,x=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=f?"lazy":m,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},x,{loading:m,width:r,height:a,decoding:"async","data-nimg":p?"fill":"1",className:d,style:i({},u,c)},n,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(O&&(e.src=e.src),e.complete&&A(e,h,g,w,E,_,y))},[h,g,w,E,_,O,y,t]),onLoad:e=>{let t=e.currentTarget;A(t,h,g,w,E,_,y)},onError:e=>{C(!0),"blur"===g&&_(!0),O&&O(e)}})))}),v=l.forwardRef((e,t)=>{let n,a;var r,{src:A,sizes:v,unoptimized:y=!1,priority:b=!1,loading:w,className:E,quality:_,width:C,height:S,fill:O,style:x,onLoad:z,onLoadingComplete:j,placeholder:I="empty",blurDataURL:M,layout:P,objectFit:k,objectPosition:D,lazyBoundary:R,lazyRoot:B}=e,L=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let N=l.useContext(c.ImageConfigContext),U=l.useMemo(()=>{let e=p||N||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:n})},[N]),F=L,Q=F.loader||f.default;delete F.loader;let Z="__next_img_default"in Q;if(Z){if("custom"===U.loader)throw Error('Image with src "'.concat(A,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=Q;Q=t=>{let{config:n}=t,i=o(t,["config"]);return e(i)}}if(P){"fill"===P&&(O=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(x=i({},x,e));let t={responsive:"100vw",fill:"100vw"}[P];t&&!v&&(v=t)}let H="",T=m(C),V=m(S);if("object"==typeof(r=A)&&(g(r)||void 0!==r.src)){let e=g(A)?A.default:A;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,a=e.blurHeight,M=M||e.blurDataURL,H=e.src,!O){if(T||V){if(T&&!V){let t=T/e.width;V=Math.round(e.height*t)}else if(!T&&V){let t=V/e.height;T=Math.round(e.width*t)}}else T=e.width,V=e.height}}let W=!b&&("lazy"===w||void 0===w);((A="string"==typeof A?A:H).startsWith("data:")||A.startsWith("blob:"))&&(y=!0,W=!1),U.unoptimized&&(y=!0),Z&&A.endsWith(".svg")&&!U.dangerouslyAllowSVG&&(y=!0);let[J,Y]=l.useState(!1),[q,G]=l.useState(!1),K=m(_),$=Object.assign(O?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:D}:{},q?{}:{color:"transparent"},x),X="blur"===I&&M&&!J?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(d.getImageBlurSvg({widthInt:T,heightInt:V,blurWidth:n,blurHeight:a,blurDataURL:M,objectFit:$.objectFit}),'")')}:{},ee=function(e){let{config:t,src:n,unoptimized:i,width:a,quality:r,sizes:o,loader:l}=e;if(i)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:d}=function(e,t,n){let{deviceSizes:i,allSizes:a}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(n);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let r=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:r,kind:"x"}}(t,a,o),u=s.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:s.map((e,i)=>"".concat(l({config:t,src:n,quality:r,width:e})," ").concat("w"===d?e:i+1).concat(d)).join(", "),src:l({config:t,src:n,quality:r,width:s[u]})}}({config:U,src:A,unoptimized:y,width:T,quality:K,sizes:v,loader:Q}),et=A,en={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:F.crossOrigin},ei=l.useRef(z);l.useEffect(()=>{ei.current=z},[z]);let ea=l.useRef(j);l.useEffect(()=>{ea.current=j},[j]);let er=i({isLazy:W,imgAttributes:ee,heightInt:V,widthInt:T,qualityInt:K,className:E,imgStyle:$,blurStyle:X,loading:w,config:U,fill:O,unoptimized:y,placeholder:I,loader:Q,srcString:et,onLoadRef:ei,onLoadingCompleteRef:ea,setBlurComplete:Y,setShowAltText:G},F);return l.default.createElement(l.default.Fragment,null,l.default.createElement(h,Object.assign({},er,{ref:t})),b?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},en))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var i=(0,n(8644).Z)(n(6006));let a=i.default.createContext({});t.AmpStateContext=a},7711:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){let{ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e||t&&n}},7538:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=u,t.default=void 0;var i=n(5996).Z,a=n(8644).Z,r=(0,n(9536).Z)(n(6006)),o=a(n(1973)),l=n(7260),s=n(6275),d=n(7711);function u(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(5477);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(c,[]).reverse().concat(u(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,i={};return a=>{let r=!0,o=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){o=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?r=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?r=!1:t.add(a.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?r=!1:n.add(t);else{let e=a.props[t],n=i[t]||new Set;("name"!==t||!o)&&n.has(e)?r=!1:(n.add(e),i[t]=n)}}}}return r}}()).reverse().map((e,t)=>{let a=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t=i({},e.props||{});return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,r.default.cloneElement(e,t)}return r.default.cloneElement(e,{key:a})})}t.default=function(e){let{children:t}=e,n=r.useContext(l.AmpStateContext),i=r.useContext(s.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:p,headManager:i,inAmpMode:d.isInAmpMode(n)},t)},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1358:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:i,blurHeight:a,blurDataURL:r,objectFit:o}=e,l=i||t,s=a||n,d=r.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&a?"1":"20","'/%3E").concat(d,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E")}},3848:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ImageConfigContext=void 0;var i=(0,n(8644).Z)(n(6006)),a=n(2330);let r=i.default.createContext(a.imageConfigDefault);t.ImageConfigContext=r},2330:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0,t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"],t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},805:function(e,t){"use strict";function n(e){let{config:t,src:n,width:i,quality:a}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},1973:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let a=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(a,e))}}if(a){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),l()}return r(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),r(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null};var i=(0,n(9536).Z)(n(6006));let a=!1,r=a?()=>{}:i.useLayoutEffect,o=a?()=>{}:i.useEffect},5477:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0;let n=e=>{};t.warnOnce=n}},function(e){e.O(0,[455,744],function(){return e(e.s=5621)}),_N_E=e.O()}]);