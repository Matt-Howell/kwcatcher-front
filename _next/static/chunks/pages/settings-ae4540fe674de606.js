(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{38356:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return n(99687)}])},99687:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var s=n(85893),a=n(9008),i=n.n(a),r=n(93194),o=n(204),c=n(14418),l=n(88911),p=n(1004),d=n(56005),m=n(49394),h=n(97822),x=n(80333),g=n(69558),f=n(29379),u=n(5902),j=n(70654),w=n(96177),y=n(28129),b=n(33838),k=n(67294),_=n(75297),C=n(96082),v=n(93414),S=n(11163);function E(){let e=(0,S.useRouter)(),t=(0,r.p)();(0,k.useEffect)(()=>{(async()=>{if(!(await v.O.auth.getSession()).data.session){let n="redir-toast";t.isActive(n)||t({id:n,title:"Redirecting...",description:"Sign in to use Keyword Catcher.",status:"warning",position:"top-end",duration:7500,isClosable:!0}),e.push("/sign-in")}})()},[]);let[n,a]=(0,k.useState)(),[E,T]=(0,k.useState)([]),[D,K]=(0,k.useState)();return(0,k.useEffect)(()=>{(async()=>{let{data:{user:e}}=await v.O.auth.getUser();K(e.email),a(e.user_metadata.credits),T(e.app_metadata.provider)})()},[]),(0,s.jsxs)("div",{children:[(0,s.jsxs)(i(),{children:[(0,s.jsx)("link",{rel:"canonical",href:"https://app.keywordcatcher.com/settings"}),(0,s.jsx)("title",{children:"Settings - Keyword Catcher"}),(0,s.jsx)("meta",{name:"description",content:"Manage your billing receipts, account details, and Keyword Catcher preferences."}),(0,s.jsx)("meta",{name:"twitter:title",content:"Settings - Keyword Catcher"}),(0,s.jsx)("meta",{name:"twitter:description",content:"Manage your billing receipts, account details, and Keyword Catcher preferences."}),(0,s.jsx)("meta",{name:"twitter:image",content:"https://app.keywordcatcher.com/s/i/KWCatcher-512.png"}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{property:"twitter:url",content:"https://app.keywordcatcher.com/settings"}),(0,s.jsx)("meta",{property:"og:title",content:"Settings - Keyword Catcher"}),(0,s.jsx)("meta",{property:"og:description",content:"Manage your billing receipts, account details, and Keyword Catcher preferences."}),(0,s.jsx)("meta",{property:"og:image",content:"https://app.keywordcatcher.com/s/i/KWCatcher-512.png"}),(0,s.jsx)("meta",{property:"og:url",content:"https://app.keywordcatcher.com/settings"}),(0,s.jsx)("meta",{name:"robots",content:"index, follow"}),(0,s.jsx)("meta",{name:"googlebot",content:"index, follow, max-image-preview:large"}),(0,s.jsx)("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),(0,s.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"white-translucent"}),(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"https://app.keywordcatcher.com/s/i/apple-touch-icon.png"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico",sizes:"any"}),(0,s.jsx)("link",{rel:"manifest",href:"https://app.keywordcatcher.com/s/i/site.webmanifest"}),(0,s.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,s.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,s.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,s.jsx)("meta",{charSet:"utf-8"}),(0,s.jsx)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,s.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,s.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-265580185-1"}),(0,s.jsx)("script",{dangerouslySetInnerHTML:{__html:"window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', 'UA-265580185-1');"}}),(0,s.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer','GTM-TK5TD8F');"}}),(0,s.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,s.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap",rel:"stylesheet"})]}),(0,s.jsx)(_.Z,{userCredits:n}),(0,s.jsx)(o.k,{as:"main",mx:"auto",mt:6,px:5,children:(0,s.jsxs)(o.k,{flexDirection:"column",w:"100%",minHeight:"100vh",mx:"auto",maxWidth:"1000px",children:[(0,s.jsx)(o.k,{mt:3,alignItems:"center",justifyContent:"space-between",mb:4,children:(0,s.jsxs)(o.k,{flexDirection:"column",maxWidth:{base:200,md:500},children:[(0,s.jsx)(c.X,{fontSize:"xl",fontWeight:400,fontFamily:"'Montserrat', sans-serif!important",children:"Settings"}),(0,s.jsx)(l.x,{fontSize:"xs",mt:2,opacity:.9,fontWeight:400,fontFamily:"'Montserrat', sans-serif!important",children:"Manage your billing information, account details, and Keyword Catcher preferences."})]})}),(0,s.jsxs)(p.m,{children:[(0,s.jsx)(d.t,{borderBottom:"0",children:(0,s.jsx)(m.O,{children:"General"})}),(0,s.jsx)(h.i,{mb:4}),(0,s.jsx)(x.n,{children:(0,s.jsx)(g.x,{px:0,pt:2,children:(0,s.jsx)(f.Z,{mb:4,backgroundColor:"#fafafa",children:(0,s.jsxs)(u.e,{justifyContent:"space-between",flexDirection:"column",display:"flex",pt:4,children:[(0,s.jsx)(c.X,{color:"#4A5568",size:"sm",fontFamily:"'Montserrat', sans-serif!important",alignItems:"center",display:"flex",children:"Account Details"}),(0,s.jsx)(h.i,{mt:4}),(0,s.jsxs)(j.NI,{mt:4,children:[(0,s.jsx)(w.l,{children:"Email"}),(0,s.jsx)(y.I,{value:D,isDisabled:!0,placeholder:"Your Email",type:"email"}),(0,s.jsxs)(j.Q6,{opacity:.8,children:["Need to change your email address? ",(0,s.jsx)(b.r,{href:"/contact",color:"blue.300",_hover:{textDecoration:"none",opacity:.8},children:"Contact us"}),"."]})]}),"email"==E?(0,s.jsxs)(j.NI,{mt:4,children:[(0,s.jsx)(w.l,{children:"Password"}),(0,s.jsx)(y.I,{value:"Password",isDisabled:!0,placeholder:"Your Email",type:"password"}),(0,s.jsxs)(j.Q6,{opacity:.8,children:["Need to reset your password? ",(0,s.jsx)(b.r,{href:"/contact",color:"blue.300",_hover:{textDecoration:"none",opacity:.8},children:"Contact us"}),"."]})]}):null]})})})})]})]})}),(0,s.jsx)(C.Z,{}),(0,s.jsx)("noscript",{children:(0,s.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-TK5TD8F",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})})]})}}},function(e){e.O(0,[5937,5445,1228,9866,613,4449,5980,1410,3773,6082,5297,9774,2888,179],function(){return e(e.s=38356)}),_N_E=e.O()}]);