(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[312],{16069:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sign-in",function(){return n(54662)}])},93414:function(e,t,n){"use strict";n.d(t,{O:function(){return r}});var i=n(49802);let r=(0,i.eI)("https://besbxynuobcnqfdqexic.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlc2J4eW51b2JjbnFmZHFleGljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1ODMzOTcsImV4cCI6MTk5MzE1OTM5N30.99F8PKM6-RkW1LzvqElLcl0Ua66vPHgU1G3CkSjCLVs")},54662:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var i=n(85893),r=n(9008),s=n.n(r),a=n(93194),o=n(204),l=n(96118),c=n(14418),u=n(88911),d=n(23100),p=n(29222),m=n(97822),h=n(70654),f=n(96177),g=n(28129),x=n(93863),y=n(43775),j=n(33838),v=n(67294),w=n(31806),b=n(96082),I=n(11163),k=n(89583),S=n(93414),_=n(81872);function C(){let e=(0,I.useRouter)(),t=(0,a.p)(),n=(0,v.useRef)(""),r=(0,v.useRef)(""),[C,F]=(0,v.useState)(!1),N=()=>F(!C);(0,v.useEffect)(()=>{(async()=>{if((await S.O.auth.getSession()).data.session){let n="redir-toast";t.isActive(n)||t({id:n,title:"Redirecting...",description:"You are already signed in!",status:"warning",position:"top-end",duration:7500,isClosable:!0}),e.push("/")}})()},[]);let E=async()=>{try{let i=String(n.current.value),s=String(r.current.value),{data:a,error:o}=await S.O.auth.signInWithPassword({email:i,password:s},{redirectTo:"https://app.keywordcatcher.com/"});o&&t({title:"Whoops!",description:String(o.message),status:"error",position:"top-end",duration:7500,isClosable:!0}),a.user&&(t({title:"Signed In!",description:"You are now signed into your account.",status:"success",position:"top-end",duration:7500,isClosable:!0}),localStorage.setItem("currentRes",""),localStorage.setItem("currentResD",""),localStorage.setItem("seed",""),e.push("/"))}catch(e){console.log(e)}};async function R(){try{let{error:n,user:i}=await S.O.auth.signInWithOAuth({provider:"google",options:{redirectTo:"https://app.keywordcatcher.com/"}});n&&t({title:"Whoops!",description:String(n.message),status:"error",position:"top-end",duration:7500,isClosable:!0}),i&&(t({title:"Signed In!",description:"You have signed into your account using Google.",status:"success",position:"top-end",duration:7500,isClosable:!0}),localStorage.setItem("currentRes",""),localStorage.setItem("currentResD",""),localStorage.setItem("seed",""),e.push("/"))}catch(e){console.log(e)}}return(0,i.jsxs)("div",{children:[(0,i.jsxs)(s(),{children:[(0,i.jsx)("link",{rel:"canonical",href:"https://app.keywordcatcher.com/sign-in"}),(0,i.jsx)("title",{children:"Sign In - Keyword Catcher"}),(0,i.jsx)("meta",{name:"description",content:"Want to get back to using Keyword Catcher? Sign into your account here."}),(0,i.jsx)("meta",{name:"twitter:title",content:"Sign In - Keyword Catcher"}),(0,i.jsx)("meta",{name:"twitter:description",content:"Want to get back to using Keyword Catcher? Sign into your account here."}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://app.keywordcatcher.com/s/i/KWCatcher-512.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{property:"twitter:url",content:"https://app.keywordcatcher.com/sign-in"}),(0,i.jsx)("meta",{property:"og:title",content:"Sign In - Keyword Catcher"}),(0,i.jsx)("meta",{property:"og:description",content:"Want to get back to using Keyword Catcher? Sign into your account here."}),(0,i.jsx)("meta",{property:"og:image",content:"https://app.keywordcatcher.com/s/i/KWCatcher-512.png"}),(0,i.jsx)("meta",{property:"og:url",content:"https://app.keywordcatcher.com/sign-in"}),(0,i.jsx)("meta",{name:"robots",content:"index, follow"}),(0,i.jsx)("meta",{name:"googlebot",content:"index, follow, max-image-preview:large"}),(0,i.jsx)("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),(0,i.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"white-translucent"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"https://app.keywordcatcher.com/s/i/apple-touch-icon.png"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico",sizes:"any"}),(0,i.jsx)("link",{rel:"manifest",href:"https://app.keywordcatcher.com/s/i/site.webmanifest"}),(0,i.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,i.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,i.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsx)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,i.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,i.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-265580185-1"}),(0,i.jsx)("script",{dangerouslySetInnerHTML:{__html:"window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n        \n            gtag('config', 'UA-265580185-1');"}}),(0,i.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer','GTM-TK5TD8F');"}}),(0,i.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,i.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,i.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap",rel:"stylesheet"})]}),(0,i.jsx)(w.Z,{}),(0,i.jsx)(o.k,{as:"main",mx:"auto",mt:6,px:5,children:(0,i.jsx)(o.k,{flexDirection:"column",w:"100%",align:"center",justify:"center",py:6,mx:"auto",maxWidth:"1200px",children:(0,i.jsx)(o.k,{flexDirection:"column",children:(0,i.jsxs)(l.K,{spacing:5,mx:"auto",maxW:"lg",py:12,px:6,children:[(0,i.jsxs)(l.K,{align:"center",children:[(0,i.jsx)(c.X,{fontFamily:"'Montserrat',sans-serif!important",textAlign:"center",fontSize:"4xl",children:"Sign in to your account"}),(0,i.jsx)(u.x,{fontFamily:"'Montserrat',sans-serif!important",textAlign:"center",fontSize:"lg",color:"gray.600",children:"to get back to using Keyword Catcher \uD83D\uDEE0️"})]}),(0,i.jsxs)(d.xu,{rounded:"lg",bg:"#fafafa",boxShadow:"lg",p:8,children:[(0,i.jsx)(p.z,{borderWidth:"1px",fontFamily:"'Montserrat',sans-serif!important",onClick:R,w:"full",_hover:{opacity:.8,backgroundColor:"#F1F1F1"},backgroundColor:"#F1F1F1",color:"#757575",leftIcon:(0,i.jsx)(_.JM8,{}),children:"Sign in with Google"}),(0,i.jsx)(m.i,{my:4}),(0,i.jsxs)(l.K,{spacing:4,children:[(0,i.jsxs)(h.NI,{id:"email",isRequired:!0,children:[(0,i.jsx)(f.l,{fontFamily:"'Montserrat',sans-serif!important",children:"Email address"}),(0,i.jsx)(g.I,{fontFamily:"'Montserrat',sans-serif!important",ref:n,type:"email"})]}),(0,i.jsxs)(h.NI,{id:"password",isRequired:!0,children:[(0,i.jsx)(f.l,{fontFamily:"'Montserrat',sans-serif!important",children:"Password"}),(0,i.jsxs)(x.B,{children:[(0,i.jsx)(g.I,{fontFamily:"'Montserrat',sans-serif!important",type:C?"text":"password",ref:r}),(0,i.jsx)(y.x,{w:"fit-content",mr:2,children:(0,i.jsx)(p.z,{size:"sm",background:"none",onClick:N,children:C?(0,i.jsx)(k.tgn,{size:15,opacity:1}):(0,i.jsx)(k.dSq,{size:15,opacity:1})})})]})]}),(0,i.jsxs)(l.K,{spacing:7,children:[(0,i.jsx)(p.z,{bg:"blue.400",color:"white",onClick:E,fontFamily:"'Montserrat',sans-serif!important",_hover:{bg:"blue.500"},children:"Sign in"}),(0,i.jsxs)(u.x,{fontFamily:"'Montserrat',sans-serif!important",textAlign:"center",children:["Don't have an account? ",(0,i.jsx)(j.r,{href:"/sign-up",_hover:{textDecoration:"none",opacity:.8},color:"blue.300",children:"Sign Up"})]})]})]})]})]})})})}),(0,i.jsx)(b.Z,{}),(0,i.jsx)("noscript",{children:(0,i.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-TK5TD8F",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})})]})}},70654:function(e,t,n){"use strict";n.d(t,{NI:function(){return g},NJ:function(){return f},Q6:function(){return x},e:function(){return m}});var i=n(55227),r=n(81103),s=n(35059),a=n(91639),o=n(33179),l=n(82504),c=n(25432),u=n(67294),d=n(85893),[p,m]=(0,i.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[h,f]=(0,i.k)({strict:!1,name:"FormControlContext"}),g=(0,s.G)(function(e,t){let n=(0,a.jC)("Form",e),i=(0,o.Lr)(e),{getRootProps:s,htmlProps:m,...f}=function(e){let{id:t,isRequired:n,isInvalid:i,isDisabled:s,isReadOnly:a,...o}=e,l=(0,u.useId)(),d=t||`field-${l}`,p=`${d}-label`,m=`${d}-feedback`,h=`${d}-helptext`,[f,g]=(0,u.useState)(!1),[x,y]=(0,u.useState)(!1),[j,v]=(0,u.useState)(!1),w=(0,u.useCallback)((e={},t=null)=>({id:h,...e,ref:(0,r.lq)(t,e=>{e&&y(!0)})}),[h]),b=(0,u.useCallback)((e={},t=null)=>({...e,ref:t,"data-focus":(0,c.PB)(j),"data-disabled":(0,c.PB)(s),"data-invalid":(0,c.PB)(i),"data-readonly":(0,c.PB)(a),id:void 0!==e.id?e.id:p,htmlFor:void 0!==e.htmlFor?e.htmlFor:d}),[d,s,j,i,a,p]),I=(0,u.useCallback)((e={},t=null)=>({id:m,...e,ref:(0,r.lq)(t,e=>{e&&g(!0)}),"aria-live":"polite"}),[m]),k=(0,u.useCallback)((e={},t=null)=>({...e,...o,ref:t,role:"group"}),[o]),S=(0,u.useCallback)((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!i,isReadOnly:!!a,isDisabled:!!s,isFocused:!!j,onFocus:()=>v(!0),onBlur:()=>v(!1),hasFeedbackText:f,setHasFeedbackText:g,hasHelpText:x,setHasHelpText:y,id:d,labelId:p,feedbackId:m,helpTextId:h,htmlProps:o,getHelpTextProps:w,getErrorMessageProps:I,getRootProps:k,getLabelProps:b,getRequiredIndicatorProps:S}}(i),g=(0,c.cx)("chakra-form-control",e.className);return(0,d.jsx)(h,{value:f,children:(0,d.jsx)(p,{value:n,children:(0,d.jsx)(l.m.div,{...s({},t),className:g,__css:n.container})})})});g.displayName="FormControl";var x=(0,s.G)(function(e,t){let n=f(),i=m(),r=(0,c.cx)("chakra-form__helper-text",e.className);return(0,d.jsx)(l.m.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:i.helperText,className:r})});x.displayName="FormHelperText"},74939:function(e,t,n){"use strict";n.d(t,{K:function(){return a},Y:function(){return s}});var i=n(70654),r=n(25432);function s(e){let{isDisabled:t,isInvalid:n,isReadOnly:i,isRequired:s,...o}=a(e);return{...o,disabled:t,readOnly:i,required:s,"aria-invalid":(0,r.Qm)(n),"aria-required":(0,r.Qm)(s),"aria-readonly":(0,r.Qm)(i)}}function a(e){var t,n,s;let a=(0,i.NJ)(),{id:o,disabled:l,readOnly:c,required:u,isRequired:d,isInvalid:p,isReadOnly:m,isDisabled:h,onFocus:f,onBlur:g,...x}=e,y=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==a?void 0:a.hasFeedbackText)&&(null==a?void 0:a.isInvalid)&&y.push(a.feedbackId),(null==a?void 0:a.hasHelpText)&&y.push(a.helpTextId),{...x,"aria-describedby":y.join(" ")||void 0,id:null!=o?o:null==a?void 0:a.id,isDisabled:null!=(t=null!=l?l:h)?t:null==a?void 0:a.isDisabled,isReadOnly:null!=(n=null!=c?c:m)?n:null==a?void 0:a.isReadOnly,isRequired:null!=(s=null!=u?u:d)?s:null==a?void 0:a.isRequired,isInvalid:null!=p?p:null==a?void 0:a.isInvalid,onFocus:(0,r.v0)(null==a?void 0:a.onFocus,f),onBlur:(0,r.v0)(null==a?void 0:a.onBlur,g)}}},96177:function(e,t,n){"use strict";n.d(t,{l:function(){return u}});var i=n(70654),r=n(35059),s=n(91639),a=n(33179),o=n(82504),l=n(25432),c=n(85893),u=(0,r.G)(function(e,t){var n;let r=(0,s.mq)("FormLabel",e),u=(0,a.Lr)(e),{className:p,children:m,requiredIndicator:h=(0,c.jsx)(d,{}),optionalIndicator:f=null,...g}=u,x=(0,i.NJ)(),y=null!=(n=null==x?void 0:x.getLabelProps(g,t))?n:{ref:t,...g};return(0,c.jsxs)(o.m.label,{...y,className:(0,l.cx)("chakra-form__label",u.className),__css:{display:"block",textAlign:"start",...r},children:[m,(null==x?void 0:x.isRequired)?h:f]})});u.displayName="FormLabel";var d=(0,r.G)(function(e,t){let n=(0,i.NJ)(),r=(0,i.e)();if(!(null==n?void 0:n.isRequired))return null;let s=(0,l.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(o.m.span,{...null==n?void 0:n.getRequiredIndicatorProps(e,t),__css:r.requiredIndicator,className:s})});d.displayName="RequiredIndicator"},93863:function(e,t,n){"use strict";n.d(t,{B:function(){return f},m:function(){return h}});var i=n(55227),r=n(92495),s=n(35059),a=n(91639),o=n(33179),l=n(82504),c=n(25432),u=n(87052),d=n(67294),p=n(85893),[m,h]=(0,i.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),f=(0,s.G)(function(e,t){let n=(0,a.jC)("Input",e),{children:i,className:s,...h}=(0,o.Lr)(e),f=(0,c.cx)("chakra-input__group",s),g={},x=(0,r.W)(i),y=n.field;x.forEach(e=>{var t,i;n&&(y&&"InputLeftElement"===e.type.id&&(g.paddingStart=null!=(t=y.height)?t:y.h),y&&"InputRightElement"===e.type.id&&(g.paddingEnd=null!=(i=y.height)?i:y.h),"InputRightAddon"===e.type.id&&(g.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(g.borderStartRadius=0))});let j=x.map(t=>{var n,i;let r=(0,u.o)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(i=t.props)?void 0:i.variant)||e.variant});return"Input"!==t.type.id?(0,d.cloneElement)(t,r):(0,d.cloneElement)(t,Object.assign(r,g,t.props))});return(0,p.jsx)(l.m.div,{className:f,ref:t,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate"},"data-group":!0,...h,children:(0,p.jsx)(m,{value:n,children:j})})});f.displayName="InputGroup"},28129:function(e,t,n){"use strict";n.d(t,{I:function(){return u}});var i=n(74939),r=n(35059),s=n(91639),a=n(33179),o=n(82504),l=n(25432),c=n(85893),u=(0,r.G)(function(e,t){let{htmlSize:n,...r}=e,u=(0,s.jC)("Input",r),d=(0,a.Lr)(r),p=(0,i.Y)(d),m=(0,l.cx)("chakra-input",e.className);return(0,c.jsx)(o.m.input,{size:n,...p,__css:u.field,ref:t,className:m})});u.displayName="Input",u.id="Input"},43775:function(e,t,n){"use strict";n.d(t,{x:function(){return d}});var i=n(93863),r=n(82504),s=n(35059),a=n(25432),o=n(85893),l=(0,r.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),c=(0,s.G)(function(e,t){var n,r;let{placement:s="left",...a}=e,c=(0,i.m)(),u=c.field,d={["left"===s?"insetStart":"insetEnd"]:"0",width:null!=(n=null==u?void 0:u.height)?n:null==u?void 0:u.h,height:null!=(r=null==u?void 0:u.height)?r:null==u?void 0:u.h,fontSize:null==u?void 0:u.fontSize,...c.element};return(0,o.jsx)(l,{ref:t,__css:d,...a})});c.id="InputElement",c.displayName="InputElement";var u=(0,s.G)(function(e,t){let{className:n,...i}=e,r=(0,a.cx)("chakra-input__left-element",n);return(0,o.jsx)(c,{ref:t,placement:"left",className:r,...i})});u.id="InputLeftElement",u.displayName="InputLeftElement";var d=(0,s.G)(function(e,t){let{className:n,...i}=e,r=(0,a.cx)("chakra-input__right-element",n);return(0,o.jsx)(c,{ref:t,placement:"right",className:r,...i})});d.id="InputRightElement",d.displayName="InputRightElement"},90634:function(e,t,n){"use strict";n.d(t,{g:function(){return a}});var i=n(96118),r=n(35059),s=n(85893),a=(0,r.G)((e,t)=>(0,s.jsx)(i.K,{align:"center",...e,direction:"column",ref:t}));a.displayName="VStack"}},function(e){e.O(0,[937,445,994,603,905,82,806,774,888,179],function(){return e(e.s=16069)}),_N_E=e.O()}]);