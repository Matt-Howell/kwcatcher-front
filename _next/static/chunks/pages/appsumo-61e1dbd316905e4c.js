(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[955],{66772:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/appsumo",function(){return n(48174)}])},48174:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var a=n(85893),r=n(9008),i=n.n(r),s=n(93194),o=n(204),l=n(96118),c=n(14418),d=n(88911),u=n(23100),p=n(70654),m=n(96177),h=n(28129),f=n(29222),x=n(33838),g=n(67294),y=n(96082),j=n(11163),w=n(93414),v=n(75297);function b(){let e=(0,j.useRouter)(),t=(0,s.p)(),n=(0,g.useRef)(""),[r,b]=(0,g.useState)(),[k,C]=(0,g.useState)();async function _(e){let t=await fetch("https://payments.keywordcatcher.com"+e);return t.json()}async function N(){let a=n.current.value,{data:{user:r}}=await w.O.auth.getUser();_("/redeem-code?code=".concat(a,"&user=").concat(r.id)).then(async n=>{if(n.valid){let n="redir-toast";t.isActive(n)||t({id:n,title:"Account Upgraded",description:"The code was valid and your account was upgraded.",status:"success",position:"top-end",duration:7500,isClosable:!0}),e.push("/")}})}return(0,g.useEffect)(()=>{(async()=>{if(!(await w.O.auth.getSession()).data.session){let n="redir-toast";t.isActive(n)||t({id:n,title:"Redirecting...",description:"Sign in to use Keyword Catcher.",status:"warning",position:"top-end",duration:7500,isClosable:!0}),e.push("/sign-in")}})()},[]),(0,g.useEffect)(()=>{(async()=>{let{data:{user:e}}=await w.O.auth.getUser();C(e),b(e.user_metadata.credits)})()},[]),(0,a.jsxs)("div",{children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("link",{rel:"canonical",href:"https://app.keywordcatcher.com/appsumo"}),(0,a.jsx)("title",{children:"Redeem Code - Keyword Catcher"}),(0,a.jsx)("meta",{name:"description",content:"Create a Keyword Catcher account in seconds to start your free 10 credit trial today!"}),(0,a.jsx)("meta",{name:"twitter:title",content:"Redeem Code - Keyword Catcher"}),(0,a.jsx)("meta",{name:"twitter:description",content:"Create a Keyword Catcher account in seconds to start your free 10 credit trial today!"}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://app.keywordcatcher.com/s/i/KWCatcher-512.png"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{property:"twitter:url",content:"https://app.keywordcatcher.com/appsumo"}),(0,a.jsx)("meta",{property:"og:title",content:"Redeem Code - Keyword Catcher"}),(0,a.jsx)("meta",{property:"og:description",content:"Create a Keyword Catcher account in seconds to start your free 10 credit trial today!"}),(0,a.jsx)("meta",{property:"og:image",content:"https://app.keywordcatcher.com/s/i/KWCatcher-512.png"}),(0,a.jsx)("meta",{property:"og:url",content:"https://app.keywordcatcher.com/appsumo"}),(0,a.jsx)("meta",{name:"robots",content:"index, follow"}),(0,a.jsx)("meta",{name:"googlebot",content:"index, follow, max-image-preview:large"}),(0,a.jsx)("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"white-translucent"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"https://app.keywordcatcher.com/s/i/apple-touch-icon.png"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico",sizes:"any"}),(0,a.jsx)("link",{rel:"manifest",href:"https://app.keywordcatcher.com/s/i/site.webmanifest"}),(0,a.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,a.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,a.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,a.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,a.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-265580185-1"}),(0,a.jsx)("script",{dangerouslySetInnerHTML:{__html:"window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', 'UA-265580185-1');"}}),(0,a.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer','GTM-TK5TD8F');"}}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap",rel:"stylesheet"})]}),(0,a.jsx)(v.Z,{userCredits:r}),(0,a.jsx)(o.k,{as:"main",mx:"auto",mt:6,px:5,children:(0,a.jsx)(o.k,{flexDirection:"column",w:"100%",align:"center",justify:"center",py:6,mx:"auto",maxWidth:"1200px",children:(0,a.jsx)(o.k,{flexDirection:"column",children:(0,a.jsxs)(l.K,{spacing:5,mx:"auto",maxW:"lg",py:12,px:6,children:[(0,a.jsxs)(l.K,{align:"center",children:[(0,a.jsx)(c.X,{fontFamily:"'Montserrat',sans-serif!important",textAlign:"center",fontSize:"4xl",children:"Redeem AppSumo Code"}),(0,a.jsx)(d.x,{textAlign:"center",fontFamily:"'Montserrat',sans-serif!important",fontSize:"lg",color:"gray.600",children:"to get your unique deal ✅"})]}),(0,a.jsx)(u.xu,{rounded:"lg",bg:"#fafafa",boxShadow:"lg",p:8,children:(0,a.jsx)("form",{onSubmit:e=>{e.preventDefault(),N()},children:(0,a.jsxs)(l.K,{spacing:4,children:[(0,a.jsxs)(p.NI,{id:"sumo",isRequired:!0,children:[(0,a.jsx)(m.l,{fontFamily:"'Montserrat',sans-serif!important",children:"AppSumo Code"}),(0,a.jsx)(h.I,{fontFamily:"'Montserrat',sans-serif!important",ref:n,type:"text"})]}),(0,a.jsxs)(l.K,{spacing:7,children:[(0,a.jsx)(f.z,{bg:"blue.400",color:"white",type:"submit",fontFamily:"'Montserrat',sans-serif!important",_hover:{bg:"blue.500"},children:"Redeem Code"}),(0,a.jsxs)(d.x,{fontFamily:"'Montserrat',sans-serif!important",textAlign:"center",children:["Need some help? Contact our ",(0,a.jsx)(x.r,{href:"https://keywordcatcher.com/contact-us/",_hover:{textDecoration:"none",opacity:.8},color:"blue.300",children:"support"}),"."]})]})]})})})]})})})}),(0,a.jsx)(y.Z,{}),(0,a.jsx)("noscript",{children:(0,a.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-TK5TD8F",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})})]})}},70654:function(e,t,n){"use strict";n.d(t,{NI:function(){return x},NJ:function(){return f},Q6:function(){return g},e:function(){return m}});var a=n(55227),r=n(81103),i=n(35059),s=n(91639),o=n(33179),l=n(82504),c=n(25432),d=n(67294),u=n(85893),[p,m]=(0,a.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[h,f]=(0,a.k)({strict:!1,name:"FormControlContext"}),x=(0,i.G)(function(e,t){let n=(0,s.jC)("Form",e),a=(0,o.Lr)(e),{getRootProps:i,htmlProps:m,...f}=function(e){let{id:t,isRequired:n,isInvalid:a,isDisabled:i,isReadOnly:s,...o}=e,l=(0,d.useId)(),u=t||`field-${l}`,p=`${u}-label`,m=`${u}-feedback`,h=`${u}-helptext`,[f,x]=(0,d.useState)(!1),[g,y]=(0,d.useState)(!1),[j,w]=(0,d.useState)(!1),v=(0,d.useCallback)((e={},t=null)=>({id:h,...e,ref:(0,r.lq)(t,e=>{e&&y(!0)})}),[h]),b=(0,d.useCallback)((e={},t=null)=>({...e,ref:t,"data-focus":(0,c.PB)(j),"data-disabled":(0,c.PB)(i),"data-invalid":(0,c.PB)(a),"data-readonly":(0,c.PB)(s),id:void 0!==e.id?e.id:p,htmlFor:void 0!==e.htmlFor?e.htmlFor:u}),[u,i,j,a,s,p]),k=(0,d.useCallback)((e={},t=null)=>({id:m,...e,ref:(0,r.lq)(t,e=>{e&&x(!0)}),"aria-live":"polite"}),[m]),C=(0,d.useCallback)((e={},t=null)=>({...e,...o,ref:t,role:"group"}),[o]),_=(0,d.useCallback)((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!a,isReadOnly:!!s,isDisabled:!!i,isFocused:!!j,onFocus:()=>w(!0),onBlur:()=>w(!1),hasFeedbackText:f,setHasFeedbackText:x,hasHelpText:g,setHasHelpText:y,id:u,labelId:p,feedbackId:m,helpTextId:h,htmlProps:o,getHelpTextProps:v,getErrorMessageProps:k,getRootProps:C,getLabelProps:b,getRequiredIndicatorProps:_}}(a),x=(0,c.cx)("chakra-form-control",e.className);return(0,u.jsx)(h,{value:f,children:(0,u.jsx)(p,{value:n,children:(0,u.jsx)(l.m.div,{...i({},t),className:x,__css:n.container})})})});x.displayName="FormControl";var g=(0,i.G)(function(e,t){let n=f(),a=m(),r=(0,c.cx)("chakra-form__helper-text",e.className);return(0,u.jsx)(l.m.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:a.helperText,className:r})});g.displayName="FormHelperText"},74939:function(e,t,n){"use strict";n.d(t,{K:function(){return s},Y:function(){return i}});var a=n(70654),r=n(25432);function i(e){let{isDisabled:t,isInvalid:n,isReadOnly:a,isRequired:i,...o}=s(e);return{...o,disabled:t,readOnly:a,required:i,"aria-invalid":(0,r.Qm)(n),"aria-required":(0,r.Qm)(i),"aria-readonly":(0,r.Qm)(a)}}function s(e){var t,n,i;let s=(0,a.NJ)(),{id:o,disabled:l,readOnly:c,required:d,isRequired:u,isInvalid:p,isReadOnly:m,isDisabled:h,onFocus:f,onBlur:x,...g}=e,y=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==s?void 0:s.hasFeedbackText)&&(null==s?void 0:s.isInvalid)&&y.push(s.feedbackId),(null==s?void 0:s.hasHelpText)&&y.push(s.helpTextId),{...g,"aria-describedby":y.join(" ")||void 0,id:null!=o?o:null==s?void 0:s.id,isDisabled:null!=(t=null!=l?l:h)?t:null==s?void 0:s.isDisabled,isReadOnly:null!=(n=null!=c?c:m)?n:null==s?void 0:s.isReadOnly,isRequired:null!=(i=null!=d?d:u)?i:null==s?void 0:s.isRequired,isInvalid:null!=p?p:null==s?void 0:s.isInvalid,onFocus:(0,r.v0)(null==s?void 0:s.onFocus,f),onBlur:(0,r.v0)(null==s?void 0:s.onBlur,x)}}},96177:function(e,t,n){"use strict";n.d(t,{l:function(){return d}});var a=n(70654),r=n(35059),i=n(91639),s=n(33179),o=n(82504),l=n(25432),c=n(85893),d=(0,r.G)(function(e,t){var n;let r=(0,i.mq)("FormLabel",e),d=(0,s.Lr)(e),{className:p,children:m,requiredIndicator:h=(0,c.jsx)(u,{}),optionalIndicator:f=null,...x}=d,g=(0,a.NJ)(),y=null!=(n=null==g?void 0:g.getLabelProps(x,t))?n:{ref:t,...x};return(0,c.jsxs)(o.m.label,{...y,className:(0,l.cx)("chakra-form__label",d.className),__css:{display:"block",textAlign:"start",...r},children:[m,(null==g?void 0:g.isRequired)?h:f]})});d.displayName="FormLabel";var u=(0,r.G)(function(e,t){let n=(0,a.NJ)(),r=(0,a.e)();if(!(null==n?void 0:n.isRequired))return null;let i=(0,l.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(o.m.span,{...null==n?void 0:n.getRequiredIndicatorProps(e,t),__css:r.requiredIndicator,className:i})});u.displayName="RequiredIndicator"},28129:function(e,t,n){"use strict";n.d(t,{I:function(){return d}});var a=n(74939),r=n(35059),i=n(91639),s=n(33179),o=n(82504),l=n(25432),c=n(85893),d=(0,r.G)(function(e,t){let{htmlSize:n,...r}=e,d=(0,i.jC)("Input",r),u=(0,s.Lr)(r),p=(0,a.Y)(u),m=(0,l.cx)("chakra-input",e.className);return(0,c.jsx)(o.m.input,{size:n,...p,__css:d.field,ref:t,className:m})});d.displayName="Input",d.id="Input"}},function(e){e.O(0,[937,445,228,866,613,905,449,25,707,774,888,179],function(){return e(e.s=66772)}),_N_E=e.O()}]);