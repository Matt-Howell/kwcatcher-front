(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[189],{72833:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/dashboard",function(){return n(71009)}])},71009:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var s=n(85893),r=n(9008),i=n.n(r),a=n(93194),o=n(204),c=n(14418),l=n(88911),d=n(97822),h=n(29379),m=n(5902),p=n(70654),x=n(28129),f=n(61507),j=n(29222),u=n(36354),g=n(36557),y=n(24304),w=n(36526),b=n(75421),k=n(28650),C=n(577),T=n(67294),D=n(75297),_=n(96082),M=n(93414),v=n(11163);function F(){let e=(0,v.useRouter)(),t=(0,a.p)(),n=(0,T.useRef)(),r=(0,T.useRef)();(0,T.useEffect)(()=>{(async()=>{if(!(await M.O.auth.getSession()).data.session){let n="redir-toast";t.isActive(n)||t({id:n,title:"Redirecting...",description:"Sign in to use Keyword Catcher.",status:"warning",position:"top-end",duration:7500,isClosable:!0}),e.push("/sign-in")}if("eliav@gh.agency"!==(await M.O.auth.getUser()).data.user.email){let n="redir-toast";t.isActive(n)||t({id:n,title:"Redirecting...",description:"You do not have permission to access this page.",status:"error",position:"top-end",duration:7500,isClosable:!0}),e.push("/app")}})()},[]);let F="#4A5568",A="#fafafa",[S,I]=(0,T.useState)(),[E,U]=(0,T.useState)([]),[z,K]=(0,T.useState)(0),[W,N]=(0,T.useState)(0),[O,R]=(0,T.useState)([]),[X,L]=(0,T.useState)([]),[Z,B]=(0,T.useState)([]);async function P(e){let t=await fetch(e);return t.json()}return(0,T.useEffect)(()=>{(async()=>{let{data:{user:e}}=await M.O.auth.getUser();I(e.user_metadata.credits),P("https://api.valueserp.com/account?api_key=57A1364A491A4F10B27A5FF9BA00A54C").then(e=>{K(e.account_info.usage_history[0].credits_total_for_month)});let{data:t,error:n}=await M.O.from("reports").select("seed").gt("created_at",new Date(new Date().getFullYear(),new Date().getMonth(),1).toISOString().slice(0,19).replace("T"," "));N(t.length);let{data:s,error:r}=await M.O.from("reports").select("userID, seed, created_at").order("created_at",{ascending:!1}).range(0,9);R([...s]),P("https://payments.keywordcatcher.com/get-users?type=all").then(e=>{L(e)}),P("https://payments.keywordcatcher.com/get-users?type=paid").then(e=>{B(e)})})()},[]),(0,s.jsxs)("div",{children:[(0,s.jsxs)(i(),{children:[(0,s.jsx)("link",{rel:"canonical",href:"https://app.keywordcatcher.com/admin/dashboard"}),(0,s.jsx)("title",{children:"Admin - Keyword Catcher"}),(0,s.jsx)("meta",{name:"description",content:"Welcome back - here you can see what is happening with Keyword Catcher!"}),(0,s.jsx)("meta",{name:"twitter:title",content:"Admin - Keyword Catcher"}),(0,s.jsx)("meta",{name:"twitter:description",content:"Welcome back - here you can see what is happening with Keyword Catcher!"}),(0,s.jsx)("meta",{name:"twitter:image",content:"https://app.keywordcatcher.com/s/i/KWCatcher-512.png"}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{property:"twitter:url",content:"https://app.keywordcatcher.com/admin/dashboard"}),(0,s.jsx)("meta",{property:"og:title",content:"Admin - Keyword Catcher"}),(0,s.jsx)("meta",{property:"og:description",content:"Welcome back - here you can see what is happening with Keyword Catcher!"}),(0,s.jsx)("meta",{property:"og:image",content:"https://app.keywordcatcher.com/s/i/KWCatcher-512.png"}),(0,s.jsx)("meta",{property:"og:url",content:"https://app.keywordcatcher.com/admin/dashboard"}),(0,s.jsx)("meta",{name:"robots",content:"index, follow"}),(0,s.jsx)("meta",{name:"googlebot",content:"index, follow, max-image-preview:large"}),(0,s.jsx)("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),(0,s.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"white-translucent"}),(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"https://app.keywordcatcher.com/s/i/apple-touch-icon.png"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico",sizes:"any"}),(0,s.jsx)("link",{rel:"manifest",href:"https://app.keywordcatcher.com/s/i/site.webmanifest"}),(0,s.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,s.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,s.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,s.jsx)("meta",{charSet:"utf-8"}),(0,s.jsx)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,s.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,s.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-265580185-1"}),(0,s.jsx)("script",{dangerouslySetInnerHTML:{__html:"window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', 'UA-265580185-1');"}}),(0,s.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer','GTM-TK5TD8F');"}}),(0,s.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,s.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap",rel:"stylesheet"})]}),(0,s.jsx)(D.Z,{userCredits:S}),(0,s.jsx)(o.k,{as:"main",mx:"auto",mt:6,px:5,children:(0,s.jsxs)(o.k,{flexDirection:"column",w:"100%",minHeight:"100vh",mx:"auto",maxWidth:"1000px",children:[(0,s.jsx)(o.k,{mt:3,alignItems:"center",justifyContent:"space-between",mb:4,children:(0,s.jsxs)(o.k,{flexDirection:"column",maxWidth:{base:200,md:500},children:[(0,s.jsx)(c.X,{fontSize:"xl",fontWeight:400,fontFamily:"'Montserrat', sans-serif!important",children:"Admin Dashboard"}),(0,s.jsx)(l.x,{fontSize:"xs",mt:2,opacity:.9,fontWeight:400,fontFamily:"'Montserrat', sans-serif!important",children:"Welcome back - here you can see what is happening with Keyword Catcher!"})]})}),(0,s.jsx)(d.i,{mb:4}),(0,s.jsx)(h.Z,{mb:4,backgroundColor:A,children:(0,s.jsxs)(m.e,{justifyContent:"space-between",flexDirection:"row",display:"flex",pt:4,children:[(0,s.jsx)(c.X,{color:F,size:"sm",fontFamily:"'Montserrat', sans-serif!important",alignItems:"center",display:"flex",children:"SERPs Analyzed"}),(0,s.jsx)(o.k,{flexDirection:"column",children:(0,s.jsxs)(l.x,{color:F,children:[z," (This Month)"]})})]})}),(0,s.jsx)(h.Z,{mb:4,backgroundColor:A,children:(0,s.jsxs)(m.e,{justifyContent:"space-between",flexDirection:"row",display:"flex",pt:4,children:[(0,s.jsx)(c.X,{color:F,size:"sm",fontFamily:"'Montserrat', sans-serif!important",alignItems:"center",display:"flex",children:"Reports Created"}),(0,s.jsx)(o.k,{flexDirection:"column",children:(0,s.jsxs)(l.x,{color:F,children:[W," (This Month)"]})})]})}),(0,s.jsx)(h.Z,{mb:4,backgroundColor:A,children:(0,s.jsxs)(m.e,{justifyContent:"space-between",flexDirection:"column",display:"flex",pt:4,children:[(0,s.jsx)(c.X,{color:F,size:"sm",fontFamily:"'Montserrat', sans-serif!important",alignItems:"center",display:"flex",children:"Add Credits"}),(0,s.jsxs)(o.k,{mt:4,flexDirection:"column",children:[(0,s.jsx)(p.NI,{children:(0,s.jsx)(x.I,{ref:n,placeholder:"User email address"})}),(0,s.jsx)(p.NI,{mt:3,children:(0,s.jsx)(f.Y2,{children:(0,s.jsx)(f.zu,{ref:r,placeholder:"Number of Credits"})})}),(0,s.jsx)(j.z,{mt:3,onClick:async()=>{let e=n.current.value,s=r.current.value;P("https://payments.keywordcatcher.com/add-credits?number=".concat(s,"&email=").concat(e)).then(n=>{t({title:"Added Credits",description:"".concat(e," now has ").concat(n.credits," credits."),status:"success",position:"top-end",duration:7500,isClosable:!0})})},children:"Add Credits"})]})]})}),(0,s.jsx)(h.Z,{mb:4,backgroundColor:A,children:(0,s.jsxs)(m.e,{justifyContent:"space-between",flexDirection:"column",display:"flex",pt:4,children:[(0,s.jsx)(c.X,{color:F,size:"sm",fontFamily:"'Montserrat', sans-serif!important",alignItems:"center",display:"flex",children:"Recent Reports"}),(0,s.jsx)(o.k,{mt:4,flexDirection:"column",children:(0,s.jsx)(u.x,{children:(0,s.jsxs)(g.i,{variant:"simple",children:[(0,s.jsx)(y.h,{children:(0,s.jsxs)(w.Tr,{fontWeight:600,children:[(0,s.jsx)(b.Th,{fontFamily:"'Montserrat', sans-serif!important",children:"Date"}),(0,s.jsx)(b.Th,{fontFamily:"'Montserrat', sans-serif!important",children:"Keyword"}),(0,s.jsx)(b.Th,{fontFamily:"'Montserrat', sans-serif!important",children:"User ID"})]})}),(0,s.jsx)(k.p,{children:O.map((e,t)=>(0,s.jsxs)(w.Tr,{children:[(0,s.jsx)(C.Td,{children:new Date(e.created_at).toLocaleDateString("en-US")}),(0,s.jsx)(C.Td,{children:e.seed}),(0,s.jsx)(C.Td,{children:e.userID})]},t))})]})})})]})}),(0,s.jsx)(h.Z,{mb:4,backgroundColor:A,children:(0,s.jsxs)(m.e,{justifyContent:"space-between",flexDirection:"column",display:"flex",pt:4,children:[(0,s.jsx)(c.X,{color:F,size:"sm",fontFamily:"'Montserrat', sans-serif!important",alignItems:"center",display:"flex",children:"All Users"}),(0,s.jsx)(o.k,{mt:4,flexDirection:"column",children:(0,s.jsx)(u.x,{children:(0,s.jsxs)(g.i,{variant:"simple",children:[(0,s.jsx)(y.h,{children:(0,s.jsxs)(w.Tr,{fontWeight:600,children:[(0,s.jsx)(b.Th,{fontFamily:"'Montserrat', sans-serif!important",children:"User ID"}),(0,s.jsx)(b.Th,{fontFamily:"'Montserrat', sans-serif!important",children:"User Email"})]})}),(0,s.jsx)(k.p,{children:X.map((e,t)=>(0,s.jsxs)(w.Tr,{children:[(0,s.jsx)(C.Td,{children:e.id}),(0,s.jsx)(C.Td,{children:e.email})]},t))})]})})})]})}),(0,s.jsx)(h.Z,{mb:4,backgroundColor:A,children:(0,s.jsxs)(m.e,{justifyContent:"space-between",flexDirection:"column",display:"flex",pt:4,children:[(0,s.jsx)(c.X,{color:F,size:"sm",fontFamily:"'Montserrat', sans-serif!important",alignItems:"center",display:"flex",children:"Paid Users"}),(0,s.jsx)(o.k,{mt:4,flexDirection:"column",children:(0,s.jsx)(u.x,{children:(0,s.jsxs)(g.i,{variant:"simple",children:[(0,s.jsx)(y.h,{children:(0,s.jsxs)(w.Tr,{fontWeight:600,children:[(0,s.jsx)(b.Th,{fontFamily:"'Montserrat', sans-serif!important",children:"User ID"}),(0,s.jsx)(b.Th,{fontFamily:"'Montserrat', sans-serif!important",children:"User Email"})]})}),(0,s.jsx)(k.p,{children:Z.map((e,t)=>(0,s.jsxs)(w.Tr,{children:[(0,s.jsx)(C.Td,{children:e.id}),(0,s.jsx)(C.Td,{children:e.email})]},t))})]})})})]})})]})}),(0,s.jsx)(_.Z,{}),(0,s.jsx)("noscript",{children:(0,s.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-TK5TD8F",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})})]})}}},function(e){e.O(0,[937,445,228,866,603,905,449,410,702,82,297,774,888,179],function(){return e(e.s=72833)}),_N_E=e.O()}]);