(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[189],{72833:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/dashboard",function(){return n(71009)}])},71009:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var r=n(85893),s=n(9008),i=n.n(s),a=n(93194),o=n(204),l=n(14418),c=n(88911),d=n(97822),u=n(29379),m=n(5902),h=n(70654),p=n(28129),f=n(61507),x=n(29222),j=n(36354),y=n(36557),g=n(24304),w=n(36526),b=n(75421),v=n(28650),k=n(577),_=n(67294),C=n(75297),T=n(96082),F=n(93414),D=n(11163);function I(){let e=(0,D.useRouter)(),t=(0,a.p)(),n=(0,_.useRef)(),s=(0,_.useRef)();(0,_.useEffect)(()=>{(async()=>{if(!(await F.O.auth.getSession()).data.session){let n="redir-toast";t.isActive(n)||t({id:n,title:"Redirecting...",description:"Sign in to use Keyword Catcher.",status:"warning",position:"top-end",duration:7500,isClosable:!0}),e.push("/sign-in")}if("eliav@gh.agency"!==(await F.O.auth.getUser()).data.user.email){let n="redir-toast";t.isActive(n)||t({id:n,title:"Redirecting...",description:"You do not have permission to access this page.",status:"error",position:"top-end",duration:7500,isClosable:!0}),e.push("/app")}})()},[]);let I="#4A5568",S="#fafafa",[M,N]=(0,_.useState)(),[A,W]=(0,_.useState)([]),[R,z]=(0,_.useState)(0),[E,G]=(0,_.useState)(0),[K,O]=(0,_.useState)([]),[U,L]=(0,_.useState)([]),[B,P]=(0,_.useState)([]);async function X(e){let t=await fetch(e);return t.json()}return(0,_.useEffect)(()=>{(async()=>{let{data:{user:e}}=await F.O.auth.getUser();N(e.user_metadata.credits),X("https://api.valueserp.com/account?api_key=57A1364A491A4F10B27A5FF9BA00A54C").then(e=>{z(e.account_info.usage_history[0].credits_total_for_month)});let{data:t,error:n}=await F.O.from("reports").select("seed").gt("created_at",new Date(new Date().getFullYear(),new Date().getMonth(),1).toISOString().slice(0,19).replace("T"," "));G(t.length);let{data:r,error:s}=await F.O.from("reports").select("userID, seed, created_at").order("created_at",{ascending:!1}).range(0,9);O([...r]),X("https://payments.keywordcatcher.com/get-users?type=all").then(e=>{L(e)}),X("https://payments.keywordcatcher.com/get-users?type=paid").then(e=>{P(e)})})()},[]),(0,r.jsxs)("div",{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("link",{rel:"canonical",href:"https://app.keywordcatcher.com/admin/dashboard"}),(0,r.jsx)("title",{children:"Admin - Keyword Catcher"}),(0,r.jsx)("meta",{name:"description",content:"Welcome back - here you can see what is happening with Keyword Catcher!"}),(0,r.jsx)("meta",{name:"twitter:title",content:"Admin - Keyword Catcher"}),(0,r.jsx)("meta",{name:"twitter:description",content:"Welcome back - here you can see what is happening with Keyword Catcher!"}),(0,r.jsx)("meta",{name:"twitter:image",content:"https://app.keywordcatcher.com/s/i/KWCatcher-512.png"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:url",content:"https://app.keywordcatcher.com/admin/dashboard"}),(0,r.jsx)("meta",{property:"og:title",content:"Admin - Keyword Catcher"}),(0,r.jsx)("meta",{property:"og:description",content:"Welcome back - here you can see what is happening with Keyword Catcher!"}),(0,r.jsx)("meta",{property:"og:image",content:"https://app.keywordcatcher.com/s/i/KWCatcher-512.png"}),(0,r.jsx)("meta",{property:"og:url",content:"https://app.keywordcatcher.com/admin/dashboard"}),(0,r.jsx)("meta",{name:"robots",content:"index, follow"}),(0,r.jsx)("meta",{name:"googlebot",content:"index, follow, max-image-preview:large"}),(0,r.jsx)("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),(0,r.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"white-translucent"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"https://app.keywordcatcher.com/s/i/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico",sizes:"any"}),(0,r.jsx)("link",{rel:"manifest",href:"https://app.keywordcatcher.com/s/i/site.webmanifest"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,r.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,r.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,r.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,r.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-265580185-1"}),(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:"window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', 'UA-265580185-1');"}}),(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer','GTM-TK5TD8F');"}}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap",rel:"stylesheet"})]}),(0,r.jsx)(C.Z,{userCredits:M}),(0,r.jsx)(o.k,{as:"main",mx:"auto",mt:6,px:5,children:(0,r.jsxs)(o.k,{flexDirection:"column",w:"100%",minHeight:"100vh",mx:"auto",maxWidth:"1000px",children:[(0,r.jsx)(o.k,{mt:3,alignItems:"center",justifyContent:"space-between",mb:4,children:(0,r.jsxs)(o.k,{flexDirection:"column",maxWidth:{base:200,md:500},children:[(0,r.jsx)(l.X,{fontSize:"xl",fontWeight:400,fontFamily:"'Montserrat', sans-serif!important",children:"Admin Dashboard"}),(0,r.jsx)(c.x,{fontSize:"xs",mt:2,opacity:.9,fontWeight:400,fontFamily:"'Montserrat', sans-serif!important",children:"Welcome back - here you can see what is happening with Keyword Catcher!"})]})}),(0,r.jsx)(d.i,{mb:4}),(0,r.jsx)(u.Z,{mb:4,backgroundColor:S,children:(0,r.jsxs)(m.e,{justifyContent:"space-between",flexDirection:"row",display:"flex",pt:4,children:[(0,r.jsx)(l.X,{color:I,size:"sm",fontFamily:"'Montserrat', sans-serif!important",alignItems:"center",display:"flex",children:"SERPs Analyzed"}),(0,r.jsx)(o.k,{flexDirection:"column",children:(0,r.jsxs)(c.x,{color:I,children:[R," (This Month)"]})})]})}),(0,r.jsx)(u.Z,{mb:4,backgroundColor:S,children:(0,r.jsxs)(m.e,{justifyContent:"space-between",flexDirection:"row",display:"flex",pt:4,children:[(0,r.jsx)(l.X,{color:I,size:"sm",fontFamily:"'Montserrat', sans-serif!important",alignItems:"center",display:"flex",children:"Reports Created"}),(0,r.jsx)(o.k,{flexDirection:"column",children:(0,r.jsxs)(c.x,{color:I,children:[E," (This Month)"]})})]})}),(0,r.jsx)(u.Z,{mb:4,backgroundColor:S,children:(0,r.jsxs)(m.e,{justifyContent:"space-between",flexDirection:"column",display:"flex",pt:4,children:[(0,r.jsx)(l.X,{color:I,size:"sm",fontFamily:"'Montserrat', sans-serif!important",alignItems:"center",display:"flex",children:"Add Credits"}),(0,r.jsxs)(o.k,{mt:4,flexDirection:"column",children:[(0,r.jsx)(h.NI,{children:(0,r.jsx)(p.I,{ref:n,placeholder:"User email address"})}),(0,r.jsx)(h.NI,{mt:3,children:(0,r.jsx)(f.Y2,{children:(0,r.jsx)(f.zu,{ref:s,placeholder:"Number of Credits"})})}),(0,r.jsx)(x.z,{mt:3,onClick:async()=>{let e=n.current.value,r=s.current.value;X("https://payments.keywordcatcher.com/add-credits?number=".concat(r,"&email=").concat(e)).then(n=>{t({title:"Added Credits",description:"".concat(e," now has ").concat(n.credits," credits."),status:"success",position:"top-end",duration:7500,isClosable:!0})})},children:"Add Credits"})]})]})}),(0,r.jsx)(u.Z,{mb:4,backgroundColor:S,children:(0,r.jsxs)(m.e,{justifyContent:"space-between",flexDirection:"column",display:"flex",pt:4,children:[(0,r.jsx)(l.X,{color:I,size:"sm",fontFamily:"'Montserrat', sans-serif!important",alignItems:"center",display:"flex",children:"Recent Reports"}),(0,r.jsx)(o.k,{mt:4,flexDirection:"column",children:(0,r.jsx)(j.x,{children:(0,r.jsxs)(y.i,{variant:"simple",children:[(0,r.jsx)(g.h,{children:(0,r.jsxs)(w.Tr,{fontWeight:600,children:[(0,r.jsx)(b.Th,{fontFamily:"'Montserrat', sans-serif!important",children:"Date"}),(0,r.jsx)(b.Th,{fontFamily:"'Montserrat', sans-serif!important",children:"Keyword"}),(0,r.jsx)(b.Th,{fontFamily:"'Montserrat', sans-serif!important",children:"User ID"})]})}),(0,r.jsx)(v.p,{children:K.map((e,t)=>(0,r.jsxs)(w.Tr,{children:[(0,r.jsx)(k.Td,{children:new Date(e.created_at).toLocaleDateString("en-US")}),(0,r.jsx)(k.Td,{children:e.seed}),(0,r.jsx)(k.Td,{children:e.userID})]},t))})]})})})]})}),(0,r.jsx)(u.Z,{mb:4,backgroundColor:S,children:(0,r.jsxs)(m.e,{justifyContent:"space-between",flexDirection:"column",display:"flex",pt:4,children:[(0,r.jsx)(l.X,{color:I,size:"sm",fontFamily:"'Montserrat', sans-serif!important",alignItems:"center",display:"flex",children:"All Users"}),(0,r.jsx)(o.k,{mt:4,flexDirection:"column",children:(0,r.jsx)(j.x,{children:(0,r.jsxs)(y.i,{variant:"simple",children:[(0,r.jsx)(g.h,{children:(0,r.jsxs)(w.Tr,{fontWeight:600,children:[(0,r.jsx)(b.Th,{fontFamily:"'Montserrat', sans-serif!important",children:"User ID"}),(0,r.jsx)(b.Th,{fontFamily:"'Montserrat', sans-serif!important",children:"User Email"}),(0,r.jsx)(b.Th,{fontFamily:"'Montserrat', sans-serif!important",children:"Credits"})]})}),(0,r.jsx)(v.p,{children:U.map((e,t)=>(0,r.jsxs)(w.Tr,{children:[(0,r.jsx)(k.Td,{children:e.id}),(0,r.jsx)(k.Td,{children:e.email}),(0,r.jsx)(k.Td,{children:e.user_metadata.credits})]},t))})]})})})]})}),(0,r.jsx)(u.Z,{mb:4,backgroundColor:S,children:(0,r.jsxs)(m.e,{justifyContent:"space-between",flexDirection:"column",display:"flex",pt:4,children:[(0,r.jsx)(l.X,{color:I,size:"sm",fontFamily:"'Montserrat', sans-serif!important",alignItems:"center",display:"flex",children:"Paid Users"}),(0,r.jsx)(o.k,{mt:4,flexDirection:"column",children:(0,r.jsx)(j.x,{children:(0,r.jsxs)(y.i,{variant:"simple",children:[(0,r.jsx)(g.h,{children:(0,r.jsxs)(w.Tr,{fontWeight:600,children:[(0,r.jsx)(b.Th,{fontFamily:"'Montserrat', sans-serif!important",children:"User ID"}),(0,r.jsx)(b.Th,{fontFamily:"'Montserrat', sans-serif!important",children:"User Email"}),(0,r.jsx)(b.Th,{fontFamily:"'Montserrat', sans-serif!important",children:"Credits"})]})}),(0,r.jsx)(v.p,{children:B.map((e,t)=>(0,r.jsxs)(w.Tr,{children:[(0,r.jsx)(k.Td,{children:e.id}),(0,r.jsx)(k.Td,{children:e.email}),(0,r.jsx)(k.Td,{children:e.user_metadata.credits})]},t))})]})})})]})})]})}),(0,r.jsx)(T.Z,{}),(0,r.jsx)("noscript",{children:(0,r.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-TK5TD8F",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})})]})}},35942:function(e,t,n){"use strict";n.d(t,{Y:function(){return r},v:function(){return s}});var[r,s]=(0,n(96452).eC)("Card")},5902:function(e,t,n){"use strict";n.d(t,{e:function(){return l}});var r=n(35942),s=n(25432),i=n(35059),a=n(82504),o=n(85893),l=(0,i.G)(function(e,t){let{className:n,...i}=e,l=(0,r.v)();return(0,o.jsx)(a.m.div,{ref:t,className:(0,s.cx)("chakra-card__body",n),__css:l.body,...i})})},29379:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(35942),s=n(25432),i=n(35059),a=n(33179),o=n(91639),l=n(82504),c=n(85893),d=(0,i.G)(function(e,t){let{className:n,children:i,direction:d="column",justify:u,align:m,...h}=(0,a.Lr)(e),p=(0,o.jC)("Card",e);return(0,c.jsx)(l.m.div,{ref:t,className:(0,s.cx)("chakra-card",n),__css:{display:"flex",flexDirection:d,justifyContent:u,alignItems:m,position:"relative",minWidth:0,wordWrap:"break-word",...p.container},...h,children:(0,c.jsx)(r.Y,{value:p,children:i})})})},70654:function(e,t,n){"use strict";n.d(t,{NI:function(){return x},NJ:function(){return f},Q6:function(){return j},e:function(){return h}});var r=n(55227),s=n(81103),i=n(35059),a=n(91639),o=n(33179),l=n(82504),c=n(25432),d=n(67294),u=n(85893),[m,h]=(0,r.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[p,f]=(0,r.k)({strict:!1,name:"FormControlContext"}),x=(0,i.G)(function(e,t){let n=(0,a.jC)("Form",e),r=(0,o.Lr)(e),{getRootProps:i,htmlProps:h,...f}=function(e){let{id:t,isRequired:n,isInvalid:r,isDisabled:i,isReadOnly:a,...o}=e,l=(0,d.useId)(),u=t||`field-${l}`,m=`${u}-label`,h=`${u}-feedback`,p=`${u}-helptext`,[f,x]=(0,d.useState)(!1),[j,y]=(0,d.useState)(!1),[g,w]=(0,d.useState)(!1),b=(0,d.useCallback)((e={},t=null)=>({id:p,...e,ref:(0,s.lq)(t,e=>{e&&y(!0)})}),[p]),v=(0,d.useCallback)((e={},t=null)=>({...e,ref:t,"data-focus":(0,c.PB)(g),"data-disabled":(0,c.PB)(i),"data-invalid":(0,c.PB)(r),"data-readonly":(0,c.PB)(a),id:void 0!==e.id?e.id:m,htmlFor:void 0!==e.htmlFor?e.htmlFor:u}),[u,i,g,r,a,m]),k=(0,d.useCallback)((e={},t=null)=>({id:h,...e,ref:(0,s.lq)(t,e=>{e&&x(!0)}),"aria-live":"polite"}),[h]),_=(0,d.useCallback)((e={},t=null)=>({...e,...o,ref:t,role:"group"}),[o]),C=(0,d.useCallback)((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!a,isDisabled:!!i,isFocused:!!g,onFocus:()=>w(!0),onBlur:()=>w(!1),hasFeedbackText:f,setHasFeedbackText:x,hasHelpText:j,setHasHelpText:y,id:u,labelId:m,feedbackId:h,helpTextId:p,htmlProps:o,getHelpTextProps:b,getErrorMessageProps:k,getRootProps:_,getLabelProps:v,getRequiredIndicatorProps:C}}(r),x=(0,c.cx)("chakra-form-control",e.className);return(0,u.jsx)(p,{value:f,children:(0,u.jsx)(m,{value:n,children:(0,u.jsx)(l.m.div,{...i({},t),className:x,__css:n.container})})})});x.displayName="FormControl";var j=(0,i.G)(function(e,t){let n=f(),r=h(),s=(0,c.cx)("chakra-form__helper-text",e.className);return(0,u.jsx)(l.m.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:r.helperText,className:s})});j.displayName="FormHelperText"},74939:function(e,t,n){"use strict";n.d(t,{K:function(){return a},Y:function(){return i}});var r=n(70654),s=n(25432);function i(e){let{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:i,...o}=a(e);return{...o,disabled:t,readOnly:r,required:i,"aria-invalid":(0,s.Qm)(n),"aria-required":(0,s.Qm)(i),"aria-readonly":(0,s.Qm)(r)}}function a(e){var t,n,i;let a=(0,r.NJ)(),{id:o,disabled:l,readOnly:c,required:d,isRequired:u,isInvalid:m,isReadOnly:h,isDisabled:p,onFocus:f,onBlur:x,...j}=e,y=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==a?void 0:a.hasFeedbackText)&&(null==a?void 0:a.isInvalid)&&y.push(a.feedbackId),(null==a?void 0:a.hasHelpText)&&y.push(a.helpTextId),{...j,"aria-describedby":y.join(" ")||void 0,id:null!=o?o:null==a?void 0:a.id,isDisabled:null!=(t=null!=l?l:p)?t:null==a?void 0:a.isDisabled,isReadOnly:null!=(n=null!=c?c:h)?n:null==a?void 0:a.isReadOnly,isRequired:null!=(i=null!=d?d:u)?i:null==a?void 0:a.isRequired,isInvalid:null!=m?m:null==a?void 0:a.isInvalid,onFocus:(0,s.v0)(null==a?void 0:a.onFocus,f),onBlur:(0,s.v0)(null==a?void 0:a.onBlur,x)}}},28129:function(e,t,n){"use strict";n.d(t,{I:function(){return d}});var r=n(74939),s=n(35059),i=n(91639),a=n(33179),o=n(82504),l=n(25432),c=n(85893),d=(0,s.G)(function(e,t){let{htmlSize:n,...s}=e,d=(0,i.jC)("Input",s),u=(0,a.Lr)(s),m=(0,r.Y)(u),h=(0,l.cx)("chakra-input",e.className);return(0,c.jsx)(o.m.input,{size:n,...m,__css:d.field,ref:t,className:h})});d.displayName="Input",d.id="Input"},36354:function(e,t,n){"use strict";n.d(t,{x:function(){return o}});var r=n(35059),s=n(82504),i=n(25432),a=n(85893),o=(0,r.G)((e,t)=>{var n;let{overflow:r,overflowX:o,className:l,...c}=e;return(0,a.jsx)(s.m.div,{ref:t,className:(0,i.cx)("chakra-table__container",l),...c,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:null!=(n=null!=r?r:o)?n:"auto",overflowY:"hidden",maxWidth:"100%"}})})},36557:function(e,t,n){"use strict";n.d(t,{i:function(){return m},p:function(){return u}});var r=n(35059),s=n(91639),i=n(33179),a=n(82504),o=n(25432),l=n(55227),c=n(85893),[d,u]=(0,l.k)({name:"TableStylesContext",errorMessage:"useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "}),m=(0,r.G)((e,t)=>{let n=(0,s.jC)("Table",e),{className:r,layout:l,...u}=(0,i.Lr)(e);return(0,c.jsx)(d,{value:n,children:(0,c.jsx)(a.m.table,{ref:t,__css:{tableLayout:l,...n.table},className:(0,o.cx)("chakra-table",r),...u})})});m.displayName="Table"},577:function(e,t,n){"use strict";n.d(t,{Td:function(){return o}});var r=n(36557),s=n(35059),i=n(82504),a=n(85893),o=(0,s.G)(({isNumeric:e,...t},n)=>{let s=(0,r.p)();return(0,a.jsx)(i.m.td,{...t,ref:n,__css:s.td,"data-is-numeric":e})})},28650:function(e,t,n){"use strict";n.d(t,{p:function(){return o}});var r=n(36557),s=n(35059),i=n(82504),a=n(85893),o=(0,s.G)((e,t)=>{let n=(0,r.p)();return(0,a.jsx)(i.m.tbody,{...e,ref:t,__css:n.tbody})})},24304:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});var r=n(36557),s=n(35059),i=n(82504),a=n(85893),o=(0,s.G)((e,t)=>{let n=(0,r.p)();return(0,a.jsx)(i.m.thead,{...e,ref:t,__css:n.thead})})},36526:function(e,t,n){"use strict";n.d(t,{Tr:function(){return o}});var r=n(36557),s=n(35059),i=n(82504),a=n(85893),o=(0,s.G)((e,t)=>{let n=(0,r.p)();return(0,a.jsx)(i.m.tr,{...e,ref:t,__css:n.tr})})},75421:function(e,t,n){"use strict";n.d(t,{Th:function(){return o}});var r=n(36557),s=n(35059),i=n(82504),a=n(85893),o=(0,s.G)(({isNumeric:e,...t},n)=>{let s=(0,r.p)();return(0,a.jsx)(i.m.th,{...t,ref:n,__css:s.th,"data-is-numeric":e})})}},function(e){e.O(0,[937,445,228,866,603,905,449,25,507,707,774,888,179],function(){return e(e.s=72833)}),_N_E=e.O()}]);