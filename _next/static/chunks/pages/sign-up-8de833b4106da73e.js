(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[801],{12295:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sign-up",function(){return n(65929)}])},93414:function(e,t,n){"use strict";n.d(t,{O:function(){return r}});var i=n(49802);let r=(0,i.eI)("https://besbxynuobcnqfdqexic.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlc2J4eW51b2JjbnFmZHFleGljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1ODMzOTcsImV4cCI6MTk5MzE1OTM5N30.99F8PKM6-RkW1LzvqElLcl0Ua66vPHgU1G3CkSjCLVs")},65929:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var i=n(85893),r=n(9008),s=n.n(r),a=n(57350),o=n(204),l=n(76684),c=n(14418),u=n(88911),d=n(23100),p=n(29222),m=n(97822),f=n(38267),h=n(5370),x=n(28129),g=n(45591),y=n(98715),j=n(33838),v=n(67294),w=n(31806),b=n(96082),I=n(11163),k=n(89583),C=n(93414),_=n(81872);function S(){let e=(0,I.useRouter)(),t=(0,a.p)(),n=(0,v.useRef)(""),r=(0,v.useRef)(""),S=(0,v.useRef)(""),[F,N]=(0,v.useState)(!1),[z,E]=(0,v.useState)(!1),R=()=>N(!F),q=()=>E(!z);(0,v.useEffect)(()=>{(async()=>{if((await C.O.auth.getSession()).data.session){let n="redir-toast";t.isActive(n)||t({id:n,title:"Redirecting...",description:"You are already signed in!",status:"warning",position:"top-end",duration:7500,isClosable:!0}),e.push("/app")}})()},[]);let M=async()=>{if(r.current.value!=S.current.value){t({title:"Passwords Do Not Match!",description:"Please make sure your passwords match, and try again.",status:"error",position:"top-end",duration:7500,isClosable:!0});return}let e=String(n.current.value),i=String(r.current.value),{data:s,error:a}=await C.O.auth.signUp({email:e,password:i,options:{data:{credits:10}}});a&&t({title:"Whoops!",description:String(a.message),status:"error",position:"top-end",duration:7500,isClosable:!0}),s&&t({title:"Account Created!",description:"Please confirm your email address using the link in your inbox.",status:"success",position:"top-end",duration:7500,isClosable:!0})};async function G(){try{let{error:n,user:i}=await C.O.auth.signInWithOAuth({provider:"google",options:{redirectTo:"https://keywordcatcher.com/app",data:{credits:10}}});n&&t({title:"Whoops!",description:String(n.message),status:"error",position:"top-end",duration:7500,isClosable:!0}),i&&(t({title:"Signed In!",description:"You have signed up to an account using Google.",status:"success",position:"top-end",duration:7500,isClosable:!0}),e.push("/app"))}catch(e){console.log(e)}}return(0,i.jsxs)("div",{children:[(0,i.jsxs)(s(),{children:[(0,i.jsx)("link",{rel:"canonical",href:"https://keywordcatcher.com/sign-up"}),(0,i.jsx)("title",{children:"Sign Up - Keyword Catcher"}),(0,i.jsx)("meta",{name:"description",content:"Create a Keyword Catcher account in seconds to start your free 10 credit trial today!"}),(0,i.jsx)("meta",{name:"twitter:title",content:"Sign Up - Keyword Catcher"}),(0,i.jsx)("meta",{name:"twitter:description",content:"Create a Keyword Catcher account in seconds to start your free 10 credit trial today!"}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://keywordcatcher.com/s/i/KWCatcher-512.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{property:"twitter:url",content:"https://keywordcatcher.com/sign-up"}),(0,i.jsx)("meta",{property:"og:title",content:"Sign Up - Keyword Catcher"}),(0,i.jsx)("meta",{property:"og:description",content:"Create a Keyword Catcher account in seconds to start your free 10 credit trial today!"}),(0,i.jsx)("meta",{property:"og:image",content:"https://keywordcatcher.com/s/i/KWCatcher-512.png"}),(0,i.jsx)("meta",{property:"og:url",content:"https://keywordcatcher.com/sign-up"}),(0,i.jsx)("meta",{name:"robots",content:"index, follow"}),(0,i.jsx)("meta",{name:"googlebot",content:"index, follow, max-image-preview:large"}),(0,i.jsx)("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),(0,i.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"white-translucent"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"https://keywordcatcher.com/s/i/apple-touch-icon.png"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico",sizes:"any"}),(0,i.jsx)("link",{rel:"manifest",href:"https://keywordcatcher.com/s/i/site.webmanifest"}),(0,i.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,i.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,i.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsx)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,i.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,i.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-265580185-1"}),(0,i.jsx)("script",{dangerouslySetInnerHTML:{__html:"window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', 'UA-265580185-1');"}}),(0,i.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,i.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,i.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap",rel:"stylesheet"})]}),(0,i.jsx)(w.Z,{}),(0,i.jsx)(o.k,{as:"main",mx:"auto",mt:6,px:5,children:(0,i.jsx)(o.k,{flexDirection:"column",w:"100%",align:"center",justify:"center",py:6,mx:"auto",maxWidth:"1200px",children:(0,i.jsx)(o.k,{flexDirection:"column",children:(0,i.jsxs)(l.K,{spacing:5,mx:"auto",maxW:"lg",py:12,px:6,children:[(0,i.jsxs)(l.K,{align:"center",children:[(0,i.jsx)(c.X,{fontFamily:"'Montserrat',sans-serif!important",textAlign:"center",fontSize:"4xl",children:"Sign up for an account"}),(0,i.jsx)(u.x,{textAlign:"center",fontFamily:"'Montserrat',sans-serif!important",fontSize:"lg",color:"gray.600",children:"and get 10 free credits to play with ✅"})]}),(0,i.jsxs)(d.xu,{rounded:"lg",bg:"#fafafa",boxShadow:"lg",p:8,children:[(0,i.jsx)(p.z,{borderWidth:"1px",fontFamily:"'Montserrat',sans-serif!important",onClick:G,w:"full",_hover:{opacity:.8,backgroundColor:"#F1F1F1"},backgroundColor:"#F1F1F1",color:"#757575",leftIcon:(0,i.jsx)(_.JM8,{}),children:"Sign up with Google"}),(0,i.jsx)(m.i,{my:4}),(0,i.jsxs)(l.K,{spacing:4,children:[(0,i.jsxs)(f.NI,{id:"email",isRequired:!0,children:[(0,i.jsx)(h.l,{fontFamily:"'Montserrat',sans-serif!important",children:"Email address"}),(0,i.jsx)(x.I,{fontFamily:"'Montserrat',sans-serif!important",ref:n,type:"email"})]}),(0,i.jsxs)(f.NI,{id:"password",isRequired:!0,children:[(0,i.jsx)(h.l,{fontFamily:"'Montserrat',sans-serif!important",children:"Password"}),(0,i.jsxs)(g.B,{children:[(0,i.jsx)(x.I,{fontFamily:"'Montserrat',sans-serif!important",type:F?"text":"password",ref:r}),(0,i.jsx)(y.x,{w:"fit-content",mr:2,children:(0,i.jsx)(p.z,{size:"sm",background:"none",onClick:R,children:F?(0,i.jsx)(k.tgn,{size:15,opacity:1}):(0,i.jsx)(k.dSq,{size:15,opacity:1})})})]})]}),(0,i.jsxs)(f.NI,{id:"password",isRequired:!0,children:[(0,i.jsx)(h.l,{fontFamily:"'Montserrat',sans-serif!important",children:"Confirm Password"}),(0,i.jsxs)(g.B,{children:[(0,i.jsx)(x.I,{fontFamily:"'Montserrat',sans-serif!important",type:z?"text":"password",ref:S}),(0,i.jsx)(y.x,{w:"fit-content",mr:2,children:(0,i.jsx)(p.z,{size:"sm",background:"none",onClick:q,children:z?(0,i.jsx)(k.tgn,{size:15,opacity:1}):(0,i.jsx)(k.dSq,{size:15,opacity:1})})})]})]}),(0,i.jsxs)(l.K,{spacing:7,children:[(0,i.jsx)(p.z,{bg:"blue.400",color:"white",onClick:M,fontFamily:"'Montserrat',sans-serif!important",_hover:{bg:"blue.500"},children:"Sign up"}),(0,i.jsxs)(u.x,{fontFamily:"'Montserrat',sans-serif!important",textAlign:"center",children:["Already have an account? ",(0,i.jsx)(j.r,{href:"/sign-in",_hover:{textDecoration:"none",opacity:.8},color:"blue.300",children:"Sign In"})]})]})]})]})]})})})}),(0,i.jsx)(b.Z,{})]})}},5370:function(e,t,n){"use strict";n.d(t,{l:function(){return u}});var i=n(38267),r=n(35059),s=n(91639),a=n(33179),o=n(66384),l=n(25432),c=n(85893),u=(0,r.G)(function(e,t){var n;let r=(0,s.mq)("FormLabel",e),u=(0,a.Lr)(e),{className:p,children:m,requiredIndicator:f=(0,c.jsx)(d,{}),optionalIndicator:h=null,...x}=u,g=(0,i.NJ)(),y=null!=(n=null==g?void 0:g.getLabelProps(x,t))?n:{ref:t,...x};return(0,c.jsxs)(o.m.label,{...y,className:(0,l.cx)("chakra-form__label",u.className),__css:{display:"block",textAlign:"start",...r},children:[m,(null==g?void 0:g.isRequired)?f:h]})});u.displayName="FormLabel";var d=(0,r.G)(function(e,t){let n=(0,i.NJ)(),r=(0,i.e)();if(!(null==n?void 0:n.isRequired))return null;let s=(0,l.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(o.m.span,{...null==n?void 0:n.getRequiredIndicatorProps(e,t),__css:r.requiredIndicator,className:s})});d.displayName="RequiredIndicator"},59690:function(e,t,n){"use strict";n.d(t,{K:function(){return a},Y:function(){return s}});var i=n(38267),r=n(25432);function s(e){let{isDisabled:t,isInvalid:n,isReadOnly:i,isRequired:s,...o}=a(e);return{...o,disabled:t,readOnly:i,required:s,"aria-invalid":(0,r.Qm)(n),"aria-required":(0,r.Qm)(s),"aria-readonly":(0,r.Qm)(i)}}function a(e){var t,n,s;let a=(0,i.NJ)(),{id:o,disabled:l,readOnly:c,required:u,isRequired:d,isInvalid:p,isReadOnly:m,isDisabled:f,onFocus:h,onBlur:x,...g}=e,y=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==a?void 0:a.hasFeedbackText)&&(null==a?void 0:a.isInvalid)&&y.push(a.feedbackId),(null==a?void 0:a.hasHelpText)&&y.push(a.helpTextId),{...g,"aria-describedby":y.join(" ")||void 0,id:null!=o?o:null==a?void 0:a.id,isDisabled:null!=(t=null!=l?l:f)?t:null==a?void 0:a.isDisabled,isReadOnly:null!=(n=null!=c?c:m)?n:null==a?void 0:a.isReadOnly,isRequired:null!=(s=null!=u?u:d)?s:null==a?void 0:a.isRequired,isInvalid:null!=p?p:null==a?void 0:a.isInvalid,onFocus:(0,r.v0)(null==a?void 0:a.onFocus,h),onBlur:(0,r.v0)(null==a?void 0:a.onBlur,x)}}},38267:function(e,t,n){"use strict";n.d(t,{NI:function(){return x},NJ:function(){return h},Q6:function(){return g},e:function(){return m}});var i=n(55227),r=n(81103),s=n(35059),a=n(91639),o=n(33179),l=n(66384),c=n(25432),u=n(67294),d=n(85893),[p,m]=(0,i.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[f,h]=(0,i.k)({strict:!1,name:"FormControlContext"}),x=(0,s.G)(function(e,t){let n=(0,a.jC)("Form",e),i=(0,o.Lr)(e),{getRootProps:s,htmlProps:m,...h}=function(e){let{id:t,isRequired:n,isInvalid:i,isDisabled:s,isReadOnly:a,...o}=e,l=(0,u.useId)(),d=t||`field-${l}`,p=`${d}-label`,m=`${d}-feedback`,f=`${d}-helptext`,[h,x]=(0,u.useState)(!1),[g,y]=(0,u.useState)(!1),[j,v]=(0,u.useState)(!1),w=(0,u.useCallback)((e={},t=null)=>({id:f,...e,ref:(0,r.lq)(t,e=>{e&&y(!0)})}),[f]),b=(0,u.useCallback)((e={},t=null)=>{var n,r;return{...e,ref:t,"data-focus":(0,c.PB)(j),"data-disabled":(0,c.PB)(s),"data-invalid":(0,c.PB)(i),"data-readonly":(0,c.PB)(a),id:null!=(n=e.id)?n:p,htmlFor:null!=(r=e.htmlFor)?r:d}},[d,s,j,i,a,p]),I=(0,u.useCallback)((e={},t=null)=>({id:m,...e,ref:(0,r.lq)(t,e=>{e&&x(!0)}),"aria-live":"polite"}),[m]),k=(0,u.useCallback)((e={},t=null)=>({...e,...o,ref:t,role:"group"}),[o]),C=(0,u.useCallback)((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!i,isReadOnly:!!a,isDisabled:!!s,isFocused:!!j,onFocus:()=>v(!0),onBlur:()=>v(!1),hasFeedbackText:h,setHasFeedbackText:x,hasHelpText:g,setHasHelpText:y,id:d,labelId:p,feedbackId:m,helpTextId:f,htmlProps:o,getHelpTextProps:w,getErrorMessageProps:I,getRootProps:k,getLabelProps:b,getRequiredIndicatorProps:C}}(i),x=(0,c.cx)("chakra-form-control",e.className);return(0,d.jsx)(f,{value:h,children:(0,d.jsx)(p,{value:n,children:(0,d.jsx)(l.m.div,{...s({},t),className:x,__css:n.container})})})});x.displayName="FormControl";var g=(0,s.G)(function(e,t){let n=h(),i=m(),r=(0,c.cx)("chakra-form__helper-text",e.className);return(0,d.jsx)(l.m.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:i.helperText,className:r})});g.displayName="FormHelperText"},45591:function(e,t,n){"use strict";n.d(t,{B:function(){return h},m:function(){return f}});var i=n(55227),r=n(92495),s=n(35059),a=n(91639),o=n(33179),l=n(66384),c=n(25432),u=n(20888),d=n(67294),p=n(85893),[m,f]=(0,i.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),h=(0,s.G)(function(e,t){let n=(0,a.jC)("Input",e),{children:i,className:s,...f}=(0,o.Lr)(e),h=(0,c.cx)("chakra-input__group",s),x={},g=(0,r.W)(i),y=n.field;g.forEach(e=>{var t,i;n&&(y&&"InputLeftElement"===e.type.id&&(x.paddingStart=null!=(t=y.height)?t:y.h),y&&"InputRightElement"===e.type.id&&(x.paddingEnd=null!=(i=y.height)?i:y.h),"InputRightAddon"===e.type.id&&(x.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(x.borderStartRadius=0))});let j=g.map(t=>{var n,i;let r=(0,u.oA)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(i=t.props)?void 0:i.variant)||e.variant});return"Input"!==t.type.id?(0,d.cloneElement)(t,r):(0,d.cloneElement)(t,Object.assign(r,x,t.props))});return(0,p.jsx)(l.m.div,{className:h,ref:t,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate"},...f,children:(0,p.jsx)(m,{value:n,children:j})})});h.displayName="InputGroup"},28129:function(e,t,n){"use strict";n.d(t,{I:function(){return u}});var i=n(59690),r=n(35059),s=n(91639),a=n(33179),o=n(66384),l=n(25432),c=n(85893),u=(0,r.G)(function(e,t){let{htmlSize:n,...r}=e,u=(0,s.jC)("Input",r),d=(0,a.Lr)(r),p=(0,i.Y)(d),m=(0,l.cx)("chakra-input",e.className);return(0,c.jsx)(o.m.input,{size:n,...p,__css:u.field,ref:t,className:m})});u.displayName="Input",u.id="Input"},98715:function(e,t,n){"use strict";n.d(t,{x:function(){return d}});var i=n(45591),r=n(66384),s=n(35059),a=n(25432),o=n(85893),l=(0,r.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),c=(0,s.G)(function(e,t){var n,r;let{placement:s="left",...a}=e,c=(0,i.m)(),u=c.field,d={["left"===s?"insetStart":"insetEnd"]:"0",width:null!=(n=null==u?void 0:u.height)?n:null==u?void 0:u.h,height:null!=(r=null==u?void 0:u.height)?r:null==u?void 0:u.h,fontSize:null==u?void 0:u.fontSize,...c.element};return(0,o.jsx)(l,{ref:t,__css:d,...a})});c.id="InputElement",c.displayName="InputElement";var u=(0,s.G)(function(e,t){let{className:n,...i}=e,r=(0,a.cx)("chakra-input__left-element",n);return(0,o.jsx)(c,{ref:t,placement:"left",className:r,...i})});u.id="InputLeftElement",u.displayName="InputLeftElement";var d=(0,s.G)(function(e,t){let{className:n,...i}=e,r=(0,a.cx)("chakra-input__right-element",n);return(0,o.jsx)(c,{ref:t,placement:"right",className:r,...i})});d.id="InputRightElement",d.displayName="InputRightElement"},91669:function(e,t,n){"use strict";n.d(t,{g:function(){return a}});var i=n(76684),r=n(35059),s=n(85893),a=(0,r.G)((e,t)=>(0,s.jsx)(i.K,{align:"center",...e,direction:"column",ref:t}));a.displayName="VStack"}},function(e){e.O(0,[937,445,994,243,55,82,806,774,888,179],function(){return e(e.s=12295)}),_N_E=e.O()}]);