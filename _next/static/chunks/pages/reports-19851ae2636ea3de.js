(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53],{38442:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reports",function(){return n(42168)}])},42168:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return W}});var r=n(85893),a=n(9008),o=n.n(a),s=n(93194),i=n(204),l=n(14418),c=n(88911),d=n(97822),p=n(93863),h=n(28129),u=n(43775),m=n(89154),g=n(295),f=n(29379),x=n(44857),y=n(47523),j=n(89076),w=n(53948),k=n(44416),S=n(56426),b=n(1078),I=n(17889),_=n(20623),D=n(29222),v=n(5902),C=n(67294),E=n(89583),R=n(75297),z=n(96082),N=n(93414),T=n(11163),L=n(13882);function W(){let e=(0,T.useRouter)(),t=(0,s.p)();(0,C.useEffect)(()=>{(async()=>{if(!(await N.O.auth.getSession()).data.session){let n="redir-toast";t.isActive(n)||t({id:n,title:"Redirecting...",description:"Sign in to use Keyword Catcher.",status:"warning",position:"top-end",duration:7500,isClosable:!0}),e.push("/sign-in")}})()},[]);let[n,a]=(0,C.useState)([]),[W,O]=(0,C.useState)([]),[G,K]=(0,C.useState)(),[M,A]=(0,C.useState)(),F="#4A5568",U="#fafafa",q=(0,C.useRef)("");(0,C.useEffect)(()=>{(async()=>{let{data:{user:e}}=await N.O.auth.getUser();K(e.user_metadata.credits),A(!0);let{data:t,error:n}=await N.O.from("reports").select("*").eq("userID",e.id).order("created_at",{ascending:!1});O(t),a(t),A(!1)})()},[]);let Y=t=>{if("keyword"==t.type){localStorage.setItem("currentRes",JSON.stringify([...t.report]));let n=[];t.report.forEach(e=>{e.kw.replace("how to ","").replace("best ","").replace("what ","").replace("in ","").replace("a ","").replace("and ","").replace("a ","").replace("i ","").split(" ").forEach(e=>{n.push(e)})});let r=[...new Set(n)],a=[];r.forEach(e=>{n.filter(function(t){return t===e}).length>3&&a.push({kw:e,occ:n.filter(function(t){return t===e}).length})}),localStorage.setItem("currentResD",JSON.stringify([...a.sort((e,t)=>t.occ-e.occ)])),localStorage.setItem("seed",t.seed),localStorage.setItem("geo",t.geo),localStorage.setItem("reportSet","true"),localStorage.setItem("reportID",t.id),e.push("/keywords")}else localStorage.setItem("currentRep",JSON.stringify(t.report)),localStorage.setItem("seed",t.seed),localStorage.setItem("geo",t.geo),localStorage.setItem("reportSet","true"),localStorage.setItem("reportID",t.id),e.push("/")};async function Z(e){let{data:{user:t}}=await N.O.auth.getUser(),{data:n,error:r}=await N.O.from("reports").delete().eq("userID",t.id).eq("id",e);a(t=>t.filter(t=>t.id!==e))}return(0,r.jsxs)("div",{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("link",{rel:"canonical",href:"https://app.keywordcatcher.com/reports"}),(0,r.jsx)("title",{children:"Reports - Keyword Catcher"}),(0,r.jsx)("meta",{name:"description",content:"Check out and go back to any of your old keyword reports, right where you left off!"}),(0,r.jsx)("meta",{name:"twitter:title",content:"Reports - Keyword Catcher"}),(0,r.jsx)("meta",{name:"twitter:description",content:"Check out and go back to any of your old keyword reports, right where you left off!"}),(0,r.jsx)("meta",{name:"twitter:image",content:"https://app.keywordcatcher.com/s/i/KWCatcher-512.png"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:url",content:"https://app.keywordcatcher.com/reports"}),(0,r.jsx)("meta",{property:"og:title",content:"Reports - Keyword Catcher"}),(0,r.jsx)("meta",{property:"og:description",content:"Check out and go back to any of your old keyword reports, right where you left off!"}),(0,r.jsx)("meta",{property:"og:image",content:"https://app.keywordcatcher.com/s/i/KWCatcher-512.png"}),(0,r.jsx)("meta",{property:"og:url",content:"https://app.keywordcatcher.com/reports"}),(0,r.jsx)("meta",{name:"robots",content:"index, follow"}),(0,r.jsx)("meta",{name:"googlebot",content:"index, follow, max-image-preview:large"}),(0,r.jsx)("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),(0,r.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"white-translucent"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"https://app.keywordcatcher.com/s/i/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico",sizes:"any"}),(0,r.jsx)("link",{rel:"manifest",href:"https://app.keywordcatcher.com/s/i/site.webmanifest"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,r.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,r.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,r.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,r.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-265580185-1"}),(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:"window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', 'UA-265580185-1');"}}),(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer','GTM-TK5TD8F');"}}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap",rel:"stylesheet"})]}),(0,r.jsx)(R.Z,{userCredits:G}),(0,r.jsx)(i.k,{as:"main",mx:"auto",mt:6,px:5,children:(0,r.jsxs)(i.k,{flexDirection:"column",w:"100%",minHeight:"100vh",mx:"auto",maxWidth:"1000px",children:[(0,r.jsx)(i.k,{mt:3,alignItems:"center",justifyContent:"space-between",mb:4,children:(0,r.jsxs)(i.k,{flexDirection:"column",maxWidth:{base:400,md:500},children:[(0,r.jsx)(l.X,{fontSize:"xl",fontWeight:400,fontFamily:"'Montserrat', sans-serif!important",children:"Your Reports"}),(0,r.jsx)(c.x,{fontSize:"xs",mt:2,opacity:.9,fontWeight:400,fontFamily:"'Montserrat', sans-serif!important",children:"Check out and go back to any of your old keyword reports, right where you left off!"})]})}),(0,r.jsx)(d.i,{mb:4}),(0,r.jsx)("form",{onSubmit:e=>{var t;e.preventDefault(),(t=q.current.value).length>0?a(e=>e.filter(e=>e.seed.includes(t))):a(W)},children:(0,r.jsxs)(p.B,{mb:4,size:"md",children:[(0,r.jsx)(h.I,{type:"text",placeholder:"Search Reports",ref:q}),(0,r.jsx)(u.x,{width:"3rem",children:(0,r.jsx)(m.h,{h:"1.75rem",size:"sm",type:"submit",icon:(0,r.jsx)(E.U41,{})})})]})}),M?(0,r.jsx)(g.$,{mt:4}):n.map((e,t,n)=>(0,r.jsxs)(f.Z,{mb:4,backgroundColor:U,children:[(0,r.jsx)(x.O,{pb:0,children:(0,r.jsxs)(i.k,{justifyContent:"space-between",children:[(0,r.jsx)(y.u,{label:"Country: ".concat(e.geo[0],", Language: ").concat(e.geo[1]),placement:"bottom",children:(0,r.jsxs)(l.X,{color:F,size:"sm",fontFamily:"'Montserrat', sans-serif!important",alignItems:"center",display:"flex",textTransform:"capitalize",children:[(0,r.jsx)(L.Z,{country:e.geo[0],size:24,style:{borderRadius:3,marginRight:"1rem"}}),(0,r.jsx)(i.k,{children:(0,r.jsx)(r.Fragment,{children:e.seed})})]})}),(0,r.jsxs)(j.J,{placement:"bottom-end",children:[(0,r.jsx)(w.x,{children:(0,r.jsx)(m.h,{variant:"ghost",colorScheme:"red",justifyContent:"center",display:"flex",icon:(0,r.jsx)(E.AMf,{size:14})})}),(0,r.jsxs)(k.y,{backgroundColor:U,children:[(0,r.jsx)(S.Q,{backgroundColor:U}),(0,r.jsx)(b.Y,{display:"flex",alignItems:"center",children:(0,r.jsxs)(i.k,{alignItems:"center",justifyContent:"space-between",width:"100%",fontWeight:600,p:1,children:["Delete Report",(0,r.jsx)(I.u,{display:"flex",position:"inherit"})]})}),(0,r.jsxs)(_.b,{p:4,children:[(0,r.jsxs)(c.x,{children:["Are you sure you want to delete the report for ",(0,r.jsx)("strong",{children:e.seed}),"?"]}),(0,r.jsx)(D.z,{mt:3,colorScheme:"red",variant:"outline",size:"sm",onClick:()=>Z(e.id),rightIcon:(0,r.jsx)(E.Z1Y,{}),children:"Delete"})]})]})]})]})}),"serps"==e.type?(0,r.jsxs)(v.e,{flexDirection:"column",display:"flex",pt:4,children:[(0,r.jsxs)(c.x,{color:F,children:["Date Generated: ","".concat(String(new Date(e.created_at).getDate())).concat(String(new Date(e.created_at).getDate()).endsWith(1)?"st":String(new Date(e.created_at).getDate()).endsWith(2)?"nd":String(new Date(e.created_at).getDate()).endsWith(3)?"rd":"th"," ").concat(new Date(e.created_at).toDateString().substring(4,7),", ").concat(new Date(e.created_at).getFullYear())]}),(0,r.jsx)(c.x,{color:F,children:"Type: SERP"}),(0,r.jsx)(D.z,{mt:3,rightIcon:(0,r.jsx)(E.CkN,{size:14}),onClick:()=>Y(e),width:"fit-content",children:"Load Report"})]}):(0,r.jsxs)(v.e,{flexDirection:"column",display:"flex",pt:4,children:[(0,r.jsxs)(c.x,{color:F,children:["Date Generated: ","".concat(String(new Date(e.created_at).getDate())).concat(String(new Date(e.created_at).getDate()).endsWith(1)?"st":String(new Date(e.created_at).getDate()).endsWith(2)?"nd":String(new Date(e.created_at).getDate()).endsWith(3)?"rd":"th"," ").concat(new Date(e.created_at).toDateString().substring(4,7),", ").concat(new Date(e.created_at).getFullYear())]}),(0,r.jsx)(c.x,{color:F,children:"Type: Keywords"}),(0,r.jsxs)(c.x,{color:F,children:["Keywords Found: ",e.report.length]}),(0,r.jsxs)(c.x,{color:F,children:["SERPs Analyzed: ",e.report.filter(e=>null!==e.serp).length]}),(0,r.jsx)(D.z,{mt:3,rightIcon:(0,r.jsx)(E.CkN,{size:14}),onClick:()=>Y(e),width:"fit-content",children:"Load Report"})]})]},t))]})}),(0,r.jsx)(z.Z,{}),(0,r.jsx)("noscript",{children:(0,r.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-TK5TD8F",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})})]})}},93863:function(e,t,n){"use strict";n.d(t,{B:function(){return g},m:function(){return m}});var r=n(55227),a=n(92495),o=n(35059),s=n(91639),i=n(33179),l=n(82504),c=n(25432),d=n(87052),p=n(67294),h=n(85893),[u,m]=(0,r.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),g=(0,o.G)(function(e,t){let n=(0,s.jC)("Input",e),{children:r,className:o,...m}=(0,i.Lr)(e),g=(0,c.cx)("chakra-input__group",o),f={},x=(0,a.W)(r),y=n.field;x.forEach(e=>{var t,r;n&&(y&&"InputLeftElement"===e.type.id&&(f.paddingStart=null!=(t=y.height)?t:y.h),y&&"InputRightElement"===e.type.id&&(f.paddingEnd=null!=(r=y.height)?r:y.h),"InputRightAddon"===e.type.id&&(f.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(f.borderStartRadius=0))});let j=x.map(t=>{var n,r;let a=(0,d.o)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(r=t.props)?void 0:r.variant)||e.variant});return"Input"!==t.type.id?(0,p.cloneElement)(t,a):(0,p.cloneElement)(t,Object.assign(a,f,t.props))});return(0,h.jsx)(l.m.div,{className:g,ref:t,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate"},"data-group":!0,...m,children:(0,h.jsx)(u,{value:n,children:j})})});g.displayName="InputGroup"},43775:function(e,t,n){"use strict";n.d(t,{x:function(){return p}});var r=n(93863),a=n(82504),o=n(35059),s=n(25432),i=n(85893),l=(0,a.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),c=(0,o.G)(function(e,t){var n,a;let{placement:o="left",...s}=e,c=(0,r.m)(),d=c.field,p={["left"===o?"insetStart":"insetEnd"]:"0",width:null!=(n=null==d?void 0:d.height)?n:null==d?void 0:d.h,height:null!=(a=null==d?void 0:d.height)?a:null==d?void 0:d.h,fontSize:null==d?void 0:d.fontSize,...c.element};return(0,i.jsx)(l,{ref:t,__css:p,...s})});c.id="InputElement",c.displayName="InputElement";var d=(0,o.G)(function(e,t){let{className:n,...r}=e,a=(0,s.cx)("chakra-input__left-element",n);return(0,i.jsx)(c,{ref:t,placement:"left",className:a,...r})});d.id="InputLeftElement",d.displayName="InputLeftElement";var p=(0,o.G)(function(e,t){let{className:n,...r}=e,a=(0,s.cx)("chakra-input__right-element",n);return(0,i.jsx)(c,{ref:t,placement:"right",className:a,...r})});p.id="InputRightElement",p.displayName="InputRightElement"}},function(e){e.O(0,[937,445,228,866,613,905,449,25,65,707,774,888,179],function(){return e(e.s=38442)}),_N_E=e.O()}]);