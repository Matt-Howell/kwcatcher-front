(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53],{38442:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reports",function(){return n(42168)}])},42168:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var r=n(85893),a=n(9008),s=n.n(a),i=n(93194),o=n(204),l=n(14418),c=n(88911),d=n(97822),u=n(93863),p=n(28129),m=n(43775),h=n(89154),f=n(295),x=n(29379),g=n(44857),y=n(89076),j=n(53948),w=n(44416),v=n(56426),_=n(1078),k=n(17889),b=n(20623),C=n(29222),S=n(5902),I=n(67294),N=n(89583),D=n(75297),E=n(96082),R=n(93414),z=n(11163);function F(){let e=(0,z.useRouter)(),t=(0,i.p)();(0,I.useEffect)(()=>{(async()=>{if(!(await R.O.auth.getSession()).data.session){let n="redir-toast";t.isActive(n)||t({id:n,title:"Redirecting...",description:"Sign in to use Keyword Catcher.",status:"warning",position:"top-end",duration:7500,isClosable:!0}),e.push("/sign-in")}})()},[]);let[n,a]=(0,I.useState)([]),[F,T]=(0,I.useState)([]),[G,O]=(0,I.useState)(),[L,B]=(0,I.useState)(),P="#4A5568",W="#fafafa",q=(0,I.useRef)("");(0,I.useEffect)(()=>{(async()=>{let{data:{user:e}}=await R.O.auth.getUser();O(e.user_metadata.credits),B(!0);let{data:t,error:n}=await R.O.from("reports").select("*").eq("userID",e.id);T(t=t.sort((e,t)=>t.created_at-e.created_at).reverse()),a(t),B(!1)})()},[]);let M=t=>{localStorage.setItem("currentRes",JSON.stringify([...t.report]));let n=[];t.report.forEach(e=>{e.kw.replace("how to ","").replace("best ","").replace("what ","").replace("in ","").replace("a ","").replace("and ","").replace("a ","").replace("i ","").split(" ").forEach(e=>{n.push(e)})});let r=[...new Set(n)],a=[];r.forEach(e=>{n.filter(function(t){return t===e}).length>3&&a.push({kw:e,occ:n.filter(function(t){return t===e}).length})}),localStorage.setItem("currentResD",JSON.stringify([...a.sort((e,t)=>t.occ-e.occ)])),localStorage.setItem("seed",t.seed),e.push("/")};async function A(e){let{data:{user:t}}=await R.O.auth.getUser(),{data:n,error:r}=await R.O.from("reports").delete().eq("userID",t.id).eq("id",e);a(t=>t.filter(t=>t.id!==e))}return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("link",{rel:"canonical",href:"https://app.keywordcatcher.com/reports"}),(0,r.jsx)("title",{children:"Reports - Keyword Catcher"}),(0,r.jsx)("meta",{name:"description",content:"Check out and go back to any of your old keyword reports, right where you left off!"}),(0,r.jsx)("meta",{name:"twitter:title",content:"Reports - Keyword Catcher"}),(0,r.jsx)("meta",{name:"twitter:description",content:"Check out and go back to any of your old keyword reports, right where you left off!"}),(0,r.jsx)("meta",{name:"twitter:image",content:"https://app.keywordcatcher.com/s/i/KWCatcher-512.png"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:url",content:"https://app.keywordcatcher.com/reports"}),(0,r.jsx)("meta",{property:"og:title",content:"Reports - Keyword Catcher"}),(0,r.jsx)("meta",{property:"og:description",content:"Check out and go back to any of your old keyword reports, right where you left off!"}),(0,r.jsx)("meta",{property:"og:image",content:"https://app.keywordcatcher.com/s/i/KWCatcher-512.png"}),(0,r.jsx)("meta",{property:"og:url",content:"https://app.keywordcatcher.com/reports"}),(0,r.jsx)("meta",{name:"robots",content:"index, follow"}),(0,r.jsx)("meta",{name:"googlebot",content:"index, follow, max-image-preview:large"}),(0,r.jsx)("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),(0,r.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"white-translucent"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"https://app.keywordcatcher.com/s/i/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico",sizes:"any"}),(0,r.jsx)("link",{rel:"manifest",href:"https://app.keywordcatcher.com/s/i/site.webmanifest"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,r.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,r.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,r.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,r.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-265580185-1"}),(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:"window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', 'UA-265580185-1');"}}),(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer','GTM-TK5TD8F');"}}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap",rel:"stylesheet"})]}),(0,r.jsx)(D.Z,{userCredits:G}),(0,r.jsx)(o.k,{as:"main",mx:"auto",mt:6,px:5,children:(0,r.jsxs)(o.k,{flexDirection:"column",w:"100%",minHeight:"100vh",mx:"auto",maxWidth:"1000px",children:[(0,r.jsx)(o.k,{mt:3,alignItems:"center",justifyContent:"space-between",mb:4,children:(0,r.jsxs)(o.k,{flexDirection:"column",maxWidth:{base:400,md:500},children:[(0,r.jsx)(l.X,{fontSize:"xl",fontWeight:400,fontFamily:"'Montserrat', sans-serif!important",children:"Your Reports"}),(0,r.jsx)(c.x,{fontSize:"xs",mt:2,opacity:.9,fontWeight:400,fontFamily:"'Montserrat', sans-serif!important",children:"Check out and go back to any of your old keyword reports, right where you left off!"})]})}),(0,r.jsx)(d.i,{mb:4}),(0,r.jsx)("form",{onSubmit:e=>{var t;e.preventDefault(),(t=q.current.value).length>0?a(e=>e.filter(e=>e.seed.includes(t))):a(F)},children:(0,r.jsxs)(u.B,{mb:4,size:"md",children:[(0,r.jsx)(p.I,{type:"text",placeholder:"Search Reports",ref:q}),(0,r.jsx)(m.x,{width:"3rem",children:(0,r.jsx)(h.h,{h:"1.75rem",size:"sm",type:"submit",icon:(0,r.jsx)(N.U41,{})})})]})}),L?(0,r.jsx)(f.$,{mt:4}):n.map((e,t,n)=>(0,r.jsxs)(x.Z,{mb:4,backgroundColor:W,children:[(0,r.jsx)(g.O,{pb:0,children:(0,r.jsxs)(o.k,{justifyContent:"space-between",children:[(0,r.jsx)(l.X,{color:P,size:"sm",fontFamily:"'Montserrat', sans-serif!important",alignItems:"center",display:"flex",textTransform:"capitalize",children:e.seed}),(0,r.jsxs)(y.J,{placement:"bottom-end",children:[(0,r.jsx)(j.x,{children:(0,r.jsx)(h.h,{variant:"ghost",colorScheme:"red",justifyContent:"center",display:"flex",icon:(0,r.jsx)(N.AMf,{size:14})})}),(0,r.jsxs)(w.y,{backgroundColor:W,children:[(0,r.jsx)(v.Q,{backgroundColor:W}),(0,r.jsx)(_.Y,{display:"flex",alignItems:"center",children:(0,r.jsxs)(o.k,{alignItems:"center",justifyContent:"space-between",width:"100%",fontWeight:600,p:1,children:["Delete Report",(0,r.jsx)(k.u,{display:"flex",position:"inherit"})]})}),(0,r.jsxs)(b.b,{p:4,children:[(0,r.jsxs)(c.x,{children:["Are you sure you want to delete the report for ",(0,r.jsx)("strong",{children:e.seed}),"?"]}),(0,r.jsx)(C.z,{mt:3,colorScheme:"red",variant:"outline",size:"sm",onClick:()=>A(e.id),rightIcon:(0,r.jsx)(N.Z1Y,{}),children:"Delete"})]})]})]})]})}),(0,r.jsxs)(S.e,{flexDirection:"column",display:"flex",pt:4,children:[(0,r.jsxs)(c.x,{color:P,children:["Date Generated: ","".concat(String(new Date(e.created_at).getDate())).concat(String(new Date(e.created_at).getDate()).endsWith(1)?"st":String(new Date(e.created_at).getDate()).endsWith(2)?"nd":String(new Date(e.created_at).getDate()).endsWith(3)?"rd":"th"," ").concat(new Date(e.created_at).toDateString().substring(4,7),", ").concat(new Date(e.created_at).getFullYear())]}),(0,r.jsxs)(c.x,{color:P,children:["Keywords Found: ",e.report.length]}),(0,r.jsxs)(c.x,{color:P,children:["SERPs Analyzed: ",e.report.filter(e=>null!==e.serp).length]}),(0,r.jsx)(C.z,{mt:3,rightIcon:(0,r.jsx)(N.CkN,{size:14}),onClick:()=>M(e),width:"fit-content",children:"Load Report"})]})]},t))]})}),(0,r.jsx)(E.Z,{}),(0,r.jsx)("noscript",{children:(0,r.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-TK5TD8F",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})})]})}},35942:function(e,t,n){"use strict";n.d(t,{Y:function(){return r},v:function(){return a}});var[r,a]=(0,n(96452).eC)("Card")},5902:function(e,t,n){"use strict";n.d(t,{e:function(){return l}});var r=n(35942),a=n(25432),s=n(35059),i=n(82504),o=n(85893),l=(0,s.G)(function(e,t){let{className:n,...s}=e,l=(0,r.v)();return(0,o.jsx)(i.m.div,{ref:t,className:(0,a.cx)("chakra-card__body",n),__css:l.body,...s})})},29379:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(35942),a=n(25432),s=n(35059),i=n(33179),o=n(91639),l=n(82504),c=n(85893),d=(0,s.G)(function(e,t){let{className:n,children:s,direction:d="column",justify:u,align:p,...m}=(0,i.Lr)(e),h=(0,o.jC)("Card",e);return(0,c.jsx)(l.m.div,{ref:t,className:(0,a.cx)("chakra-card",n),__css:{display:"flex",flexDirection:d,justifyContent:u,alignItems:p,position:"relative",minWidth:0,wordWrap:"break-word",...h.container},...m,children:(0,c.jsx)(r.Y,{value:h,children:s})})})},44857:function(e,t,n){"use strict";n.d(t,{O:function(){return l}});var r=n(35942),a=n(25432),s=n(35059),i=n(82504),o=n(85893),l=(0,s.G)(function(e,t){let{className:n,...s}=e,l=(0,r.v)();return(0,o.jsx)(i.m.div,{ref:t,className:(0,a.cx)("chakra-card__header",n),__css:l.header,...s})})},70654:function(e,t,n){"use strict";n.d(t,{NI:function(){return x},NJ:function(){return f},Q6:function(){return g},e:function(){return m}});var r=n(55227),a=n(81103),s=n(35059),i=n(91639),o=n(33179),l=n(82504),c=n(25432),d=n(67294),u=n(85893),[p,m]=(0,r.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[h,f]=(0,r.k)({strict:!1,name:"FormControlContext"}),x=(0,s.G)(function(e,t){let n=(0,i.jC)("Form",e),r=(0,o.Lr)(e),{getRootProps:s,htmlProps:m,...f}=function(e){let{id:t,isRequired:n,isInvalid:r,isDisabled:s,isReadOnly:i,...o}=e,l=(0,d.useId)(),u=t||`field-${l}`,p=`${u}-label`,m=`${u}-feedback`,h=`${u}-helptext`,[f,x]=(0,d.useState)(!1),[g,y]=(0,d.useState)(!1),[j,w]=(0,d.useState)(!1),v=(0,d.useCallback)((e={},t=null)=>({id:h,...e,ref:(0,a.lq)(t,e=>{e&&y(!0)})}),[h]),_=(0,d.useCallback)((e={},t=null)=>({...e,ref:t,"data-focus":(0,c.PB)(j),"data-disabled":(0,c.PB)(s),"data-invalid":(0,c.PB)(r),"data-readonly":(0,c.PB)(i),id:void 0!==e.id?e.id:p,htmlFor:void 0!==e.htmlFor?e.htmlFor:u}),[u,s,j,r,i,p]),k=(0,d.useCallback)((e={},t=null)=>({id:m,...e,ref:(0,a.lq)(t,e=>{e&&x(!0)}),"aria-live":"polite"}),[m]),b=(0,d.useCallback)((e={},t=null)=>({...e,...o,ref:t,role:"group"}),[o]),C=(0,d.useCallback)((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!i,isDisabled:!!s,isFocused:!!j,onFocus:()=>w(!0),onBlur:()=>w(!1),hasFeedbackText:f,setHasFeedbackText:x,hasHelpText:g,setHasHelpText:y,id:u,labelId:p,feedbackId:m,helpTextId:h,htmlProps:o,getHelpTextProps:v,getErrorMessageProps:k,getRootProps:b,getLabelProps:_,getRequiredIndicatorProps:C}}(r),x=(0,c.cx)("chakra-form-control",e.className);return(0,u.jsx)(h,{value:f,children:(0,u.jsx)(p,{value:n,children:(0,u.jsx)(l.m.div,{...s({},t),className:x,__css:n.container})})})});x.displayName="FormControl";var g=(0,s.G)(function(e,t){let n=f(),r=m(),a=(0,c.cx)("chakra-form__helper-text",e.className);return(0,u.jsx)(l.m.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:r.helperText,className:a})});g.displayName="FormHelperText"},74939:function(e,t,n){"use strict";n.d(t,{K:function(){return i},Y:function(){return s}});var r=n(70654),a=n(25432);function s(e){let{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:s,...o}=i(e);return{...o,disabled:t,readOnly:r,required:s,"aria-invalid":(0,a.Qm)(n),"aria-required":(0,a.Qm)(s),"aria-readonly":(0,a.Qm)(r)}}function i(e){var t,n,s;let i=(0,r.NJ)(),{id:o,disabled:l,readOnly:c,required:d,isRequired:u,isInvalid:p,isReadOnly:m,isDisabled:h,onFocus:f,onBlur:x,...g}=e,y=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==i?void 0:i.hasFeedbackText)&&(null==i?void 0:i.isInvalid)&&y.push(i.feedbackId),(null==i?void 0:i.hasHelpText)&&y.push(i.helpTextId),{...g,"aria-describedby":y.join(" ")||void 0,id:null!=o?o:null==i?void 0:i.id,isDisabled:null!=(t=null!=l?l:h)?t:null==i?void 0:i.isDisabled,isReadOnly:null!=(n=null!=c?c:m)?n:null==i?void 0:i.isReadOnly,isRequired:null!=(s=null!=d?d:u)?s:null==i?void 0:i.isRequired,isInvalid:null!=p?p:null==i?void 0:i.isInvalid,onFocus:(0,a.v0)(null==i?void 0:i.onFocus,f),onBlur:(0,a.v0)(null==i?void 0:i.onBlur,x)}}},93863:function(e,t,n){"use strict";n.d(t,{B:function(){return f},m:function(){return h}});var r=n(55227),a=n(92495),s=n(35059),i=n(91639),o=n(33179),l=n(82504),c=n(25432),d=n(87052),u=n(67294),p=n(85893),[m,h]=(0,r.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),f=(0,s.G)(function(e,t){let n=(0,i.jC)("Input",e),{children:r,className:s,...h}=(0,o.Lr)(e),f=(0,c.cx)("chakra-input__group",s),x={},g=(0,a.W)(r),y=n.field;g.forEach(e=>{var t,r;n&&(y&&"InputLeftElement"===e.type.id&&(x.paddingStart=null!=(t=y.height)?t:y.h),y&&"InputRightElement"===e.type.id&&(x.paddingEnd=null!=(r=y.height)?r:y.h),"InputRightAddon"===e.type.id&&(x.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(x.borderStartRadius=0))});let j=g.map(t=>{var n,r;let a=(0,d.o)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(r=t.props)?void 0:r.variant)||e.variant});return"Input"!==t.type.id?(0,u.cloneElement)(t,a):(0,u.cloneElement)(t,Object.assign(a,x,t.props))});return(0,p.jsx)(l.m.div,{className:f,ref:t,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate"},"data-group":!0,...h,children:(0,p.jsx)(m,{value:n,children:j})})});f.displayName="InputGroup"},28129:function(e,t,n){"use strict";n.d(t,{I:function(){return d}});var r=n(74939),a=n(35059),s=n(91639),i=n(33179),o=n(82504),l=n(25432),c=n(85893),d=(0,a.G)(function(e,t){let{htmlSize:n,...a}=e,d=(0,s.jC)("Input",a),u=(0,i.Lr)(a),p=(0,r.Y)(u),m=(0,l.cx)("chakra-input",e.className);return(0,c.jsx)(o.m.input,{size:n,...p,__css:d.field,ref:t,className:m})});d.displayName="Input",d.id="Input"},43775:function(e,t,n){"use strict";n.d(t,{x:function(){return u}});var r=n(93863),a=n(82504),s=n(35059),i=n(25432),o=n(85893),l=(0,a.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),c=(0,s.G)(function(e,t){var n,a;let{placement:s="left",...i}=e,c=(0,r.m)(),d=c.field,u={["left"===s?"insetStart":"insetEnd"]:"0",width:null!=(n=null==d?void 0:d.height)?n:null==d?void 0:d.h,height:null!=(a=null==d?void 0:d.height)?a:null==d?void 0:d.h,fontSize:null==d?void 0:d.fontSize,...c.element};return(0,o.jsx)(l,{ref:t,__css:u,...i})});c.id="InputElement",c.displayName="InputElement";var d=(0,s.G)(function(e,t){let{className:n,...r}=e,a=(0,i.cx)("chakra-input__left-element",n);return(0,o.jsx)(c,{ref:t,placement:"left",className:a,...r})});d.id="InputLeftElement",d.displayName="InputLeftElement";var u=(0,s.G)(function(e,t){let{className:n,...r}=e,a=(0,i.cx)("chakra-input__right-element",n);return(0,o.jsx)(c,{ref:t,placement:"right",className:a,...r})});u.id="InputRightElement",u.displayName="InputRightElement"},20623:function(e,t,n){"use strict";n.d(t,{b:function(){return l}});var r=n(6560),a=n(35059),s=n(82504),i=n(25432),o=n(85893),l=(0,a.G)(function(e,t){let{getBodyProps:n}=(0,r.lp)(),a=(0,r.SV)();return(0,o.jsx)(s.m.div,{...n(e,t),className:(0,i.cx)("chakra-popover__body",e.className),__css:a.body})});l.displayName="PopoverBody"},56426:function(e,t,n){"use strict";n.d(t,{Q:function(){return l}});var r=n(6560),a=n(82504),s=n(25432),i=n(85893),o=(e,t)=>t?`${e}.${t}, ${t}`:void 0;function l(e){var t;let{bg:n,bgColor:l,backgroundColor:c,shadow:d,boxShadow:u,shadowColor:p}=e,{getArrowProps:m,getArrowInnerProps:h}=(0,r.lp)(),f=(0,r.SV)(),x=null!=(t=null!=n?n:l)?t:c;return(0,i.jsx)(a.m.div,{...m(),className:"chakra-popover__arrow-positioner",children:(0,i.jsx)(a.m.div,{className:(0,s.cx)("chakra-popover__arrow",e.className),...h(e),__css:{"--popper-arrow-shadow-color":o("colors",p),"--popper-arrow-bg":o("colors",x),"--popper-arrow-shadow":o("shadows",null!=d?d:u),...f.arrow}})})}l.displayName="PopoverArrow"},1078:function(e,t,n){"use strict";n.d(t,{Y:function(){return l}});var r=n(6560),a=n(35059),s=n(82504),i=n(25432),o=n(85893),l=(0,a.G)(function(e,t){let{getHeaderProps:n}=(0,r.lp)(),a=(0,r.SV)();return(0,o.jsx)(s.m.header,{...n(e,t),className:(0,i.cx)("chakra-popover__header",e.className),__css:a.header})});l.displayName="PopoverHeader"},17889:function(e,t,n){"use strict";n.d(t,{u:function(){return l}});var r=n(6560),a=n(86989),s=n(35059),i=n(25432),o=n(85893),l=(0,s.G)(function(e,t){let{onClose:n}=(0,r.lp)(),s=(0,r.SV)();return(0,o.jsx)(a.P,{size:"sm",onClick:n,className:(0,i.cx)("chakra-popover__close-btn",e.className),__css:s.closeButton,ref:t,...e})});l.displayName="PopoverCloseButton"}},function(e){e.O(0,[937,445,228,866,603,905,449,410,82,297,774,888,179],function(){return e(e.s=38442)}),_N_E=e.O()}]);