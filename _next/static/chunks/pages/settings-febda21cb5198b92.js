(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{38356:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return n(99687)}])},99687:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return K}});var s=n(85893),i=n(9008),r=n.n(i),a=n(57350),o=n(204),c=n(14418),l=n(88911),d=n(1004),m=n(56005),h=n(49394),p=n(97822),x=n(80333),u=n(69558),f=n(29379),j=n(5902),g=n(38267),y=n(5370),w=n(28129),b=n(33838),_=n(36354),k=n(36557),v=n(35947),C=n(24304),S=n(36526),T=n(75421),N=n(28650),M=n(577),E=n(67294),D=n(75297),F=n(96082),I=n(93414),q=n(11163);function K(){let e=(0,q.useRouter)(),t=(0,a.p)();(0,E.useEffect)(()=>{(async()=>{if(!(await I.O.auth.getSession()).data.session){let n="redir-toast";t.isActive(n)||t({id:n,title:"Redirecting...",description:"Sign in to use Keyword Catcher.",status:"warning",position:"top-end",duration:7500,isClosable:!0}),e.push("/sign-in")}})()},[]);let n="#4A5568",i="#fafafa",[K,W]=(0,E.useState)(),[L,O]=(0,E.useState)([]),[R,z]=(0,E.useState)(),[A,P]=(0,E.useState)([]);return(0,E.useEffect)(()=>{(async()=>{let{data:{user:e}}=await I.O.auth.getUser();z(e.email),W(e.user_metadata.credits),O(e.app_metadata.provider);let{data:t,error:n}=await I.O.from("customers").select("customer_id").eq("user_id",String(e.id)),s=await fetch("https://payments.keywordcatcher.com/history?customer=".concat(t[0].customer_id),{method:"GET"});console.log(t[0].customer_id,s),P(s)})()},[]),(0,s.jsxs)("div",{children:[(0,s.jsxs)(r(),{children:[(0,s.jsx)("link",{rel:"canonical",href:"https://keywordcatcher.com/settings"}),(0,s.jsx)("title",{children:"Settings - Keyword Catcher"}),(0,s.jsx)("meta",{name:"description",content:"Manage your billing receipts, account details, and Keyword Catcher preferences."}),(0,s.jsx)("meta",{name:"twitter:title",content:"Settings - Keyword Catcher"}),(0,s.jsx)("meta",{name:"twitter:description",content:"Manage your billing receipts, account details, and Keyword Catcher preferences."}),(0,s.jsx)("meta",{name:"twitter:image",content:"https://keywordcatcher.com/s/i/KWCatcher-512.png"}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{property:"twitter:url",content:"https://keywordcatcher.com/settings"}),(0,s.jsx)("meta",{property:"og:title",content:"Settings - Keyword Catcher"}),(0,s.jsx)("meta",{property:"og:description",content:"Manage your billing receipts, account details, and Keyword Catcher preferences."}),(0,s.jsx)("meta",{property:"og:image",content:"https://keywordcatcher.com/s/i/KWCatcher-512.png"}),(0,s.jsx)("meta",{property:"og:url",content:"https://keywordcatcher.com/settings"}),(0,s.jsx)("meta",{name:"robots",content:"index, follow"}),(0,s.jsx)("meta",{name:"googlebot",content:"index, follow, max-image-preview:large"}),(0,s.jsx)("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),(0,s.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"white-translucent"}),(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"https://keywordcatcher.com/s/i/apple-touch-icon.png"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico",sizes:"any"}),(0,s.jsx)("link",{rel:"manifest",href:"https://keywordcatcher.com/s/i/site.webmanifest"}),(0,s.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,s.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,s.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,s.jsx)("meta",{charSet:"utf-8"}),(0,s.jsx)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,s.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,s.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-265580185-1"}),(0,s.jsx)("script",{dangerouslySetInnerHTML:{__html:"window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', 'UA-265580185-1');"}}),(0,s.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,s.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap",rel:"stylesheet"})]}),(0,s.jsx)(D.Z,{userCredits:K}),(0,s.jsx)(o.k,{as:"main",mx:"auto",mt:6,px:5,children:(0,s.jsxs)(o.k,{flexDirection:"column",w:"100%",minHeight:"100vh",mx:"auto",maxWidth:"1000px",children:[(0,s.jsx)(o.k,{mt:3,alignItems:"center",justifyContent:"space-between",mb:4,children:(0,s.jsxs)(o.k,{flexDirection:"column",maxWidth:{base:200,md:500},children:[(0,s.jsx)(c.X,{fontSize:"xl",fontWeight:400,fontFamily:"'Montserrat', sans-serif!important",children:"Settings"}),(0,s.jsx)(l.x,{fontSize:"xs",mt:2,opacity:.9,fontWeight:400,fontFamily:"'Montserrat', sans-serif!important",children:"Manage your billing information, account details, and Keyword Catcher preferences."})]})}),(0,s.jsxs)(d.m,{children:[(0,s.jsxs)(m.t,{borderBottom:"0",children:[(0,s.jsx)(h.O,{children:"General"}),(0,s.jsx)(h.O,{children:"Billing"})]}),(0,s.jsx)(p.i,{mb:4}),(0,s.jsxs)(x.n,{children:[(0,s.jsx)(u.x,{px:0,pt:2,children:(0,s.jsx)(f.Z,{mb:4,backgroundColor:i,children:(0,s.jsxs)(j.e,{justifyContent:"space-between",flexDirection:"column",display:"flex",pt:4,children:[(0,s.jsx)(c.X,{color:n,size:"sm",fontFamily:"'Montserrat', sans-serif!important",alignItems:"center",display:"flex",children:"Account Details"}),(0,s.jsx)(p.i,{mt:4}),(0,s.jsxs)(g.NI,{mt:4,children:[(0,s.jsx)(y.l,{children:"Email"}),(0,s.jsx)(w.I,{value:R,isDisabled:!0,placeholder:"Your Email",type:"email"}),(0,s.jsxs)(g.Q6,{opacity:.8,children:["Need to change your email address? ",(0,s.jsx)(b.r,{href:"/contact",color:"blue.300",_hover:{textDecoration:"none",opacity:.8},children:"Contact us"}),"."]})]}),"email"==L?(0,s.jsxs)(g.NI,{mt:4,children:[(0,s.jsx)(y.l,{children:"Password"}),(0,s.jsx)(w.I,{value:"Password",isDisabled:!0,placeholder:"Your Email",type:"password"}),(0,s.jsxs)(g.Q6,{opacity:.8,children:["Need to reset your password? ",(0,s.jsx)(b.r,{href:"/contact",color:"blue.300",_hover:{textDecoration:"none",opacity:.8},children:"Contact us"}),"."]})]}):null]})})}),(0,s.jsx)(u.x,{px:0,pt:2,children:(0,s.jsx)(f.Z,{mb:4,backgroundColor:i,children:(0,s.jsxs)(j.e,{justifyContent:"space-between",flexDirection:"column",display:"flex",pt:4,children:[(0,s.jsx)(c.X,{color:n,size:"sm",fontFamily:"'Montserrat', sans-serif!important",alignItems:"center",display:"flex",children:"Billing History"}),(0,s.jsx)(p.i,{my:4}),(0,s.jsx)(_.x,{children:(0,s.jsxs)(k.i,{variant:"simple",children:[(0,s.jsx)(v.R,{fontFamily:"'Montserrat', sans-serif!important",children:"Billing History"}),(0,s.jsx)(C.h,{children:(0,s.jsxs)(S.Tr,{fontWeight:600,children:[(0,s.jsx)(T.Th,{fontFamily:"'Montserrat', sans-serif!important",children:"Credits"}),(0,s.jsx)(T.Th,{fontFamily:"'Montserrat', sans-serif!important",children:"Cost (US$)"}),(0,s.jsx)(T.Th,{fontFamily:"'Montserrat', sans-serif!important",children:"Date"}),(0,s.jsx)(T.Th,{fontFamily:"'Montserrat', sans-serif!important",children:"Receipt"})]})}),(0,s.jsx)(N.p,{children:A.map((e,t)=>(0,s.jsxs)(S.Tr,{children:[(0,s.jsx)(M.Td,{children:e[2]}),(0,s.jsxs)(M.Td,{children:["$",e[1]]}),(0,s.jsx)(M.Td,{children:e[0]}),(0,s.jsx)(M.Td,{children:"Emailed"})]},t))})]})})]})})})]})]})]})}),(0,s.jsx)(F.Z,{})]})}},5370:function(e,t,n){"use strict";n.d(t,{l:function(){return d}});var s=n(38267),i=n(35059),r=n(91639),a=n(33179),o=n(66384),c=n(25432),l=n(85893),d=(0,i.G)(function(e,t){var n;let i=(0,r.mq)("FormLabel",e),d=(0,a.Lr)(e),{className:h,children:p,requiredIndicator:x=(0,l.jsx)(m,{}),optionalIndicator:u=null,...f}=d,j=(0,s.NJ)(),g=null!=(n=null==j?void 0:j.getLabelProps(f,t))?n:{ref:t,...f};return(0,l.jsxs)(o.m.label,{...g,className:(0,c.cx)("chakra-form__label",d.className),__css:{display:"block",textAlign:"start",...i},children:[p,(null==j?void 0:j.isRequired)?x:u]})});d.displayName="FormLabel";var m=(0,i.G)(function(e,t){let n=(0,s.NJ)(),i=(0,s.e)();if(!(null==n?void 0:n.isRequired))return null;let r=(0,c.cx)("chakra-form__required-indicator",e.className);return(0,l.jsx)(o.m.span,{...null==n?void 0:n.getRequiredIndicatorProps(e,t),__css:i.requiredIndicator,className:r})});m.displayName="RequiredIndicator"},61942:function(e,t,n){"use strict";n.d(t,{T:function(){return r}});var s=n(67294),i=n(35155);function r(e){let{value:t,defaultValue:n,onChange:r,shouldUpdate:a=(e,t)=>e!==t}=e,o=(0,i.W)(r),c=(0,i.W)(a),[l,d]=(0,s.useState)(n),m=void 0!==t,h=m?t:l,p=(0,i.W)(e=>{let t="function"==typeof e?e(h):e;c(h,t)&&(m||d(t),o(t))},[m,o,h,c]);return[h,p]}}},function(e){e.O(0,[937,445,228,866,243,850,55,702,849,82,297,774,888,179],function(){return e(e.s=38356)}),_N_E=e.O()}]);