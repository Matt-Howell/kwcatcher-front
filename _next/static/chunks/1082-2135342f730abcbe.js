(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1082],{20640:function(e,t,n){"use strict";var r=n(11742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,l,i,s,c,u,d,p=!1;t||(t={}),l=t.debug||!1;try{if(s=r(),c=document.createRange(),u=document.getSelection(),(d=document.createElement("span")).textContent=e,d.ariaHidden="true",d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){l&&console.warn("unable to use e.clipboardData"),l&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[t.format]||o.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(d),c.selectNodeContents(d),u.addRange(c),!document.execCommand("copy"))throw Error("copy command was unsuccessful");p=!0}catch(r){l&&console.error("unable to copy using execCommand: ",r),l&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(r){l&&console.error("unable to copy using clipboardData: ",r),l&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",i=n.replace(/#{\s*key\s*}/g,a),window.prompt(i,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(c):u.removeAllRanges()),d&&document.body.removeChild(d),s()}return p}},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},40156:function(e,t,n){"use strict";n.d(t,{V:function(){return a}});var r=n(67294),o=n(20640);function a(e,t={}){let[n,a]=(0,r.useState)(!1),[l,i]=(0,r.useState)(e);(0,r.useEffect)(()=>i(e),[e]);let{timeout:s=1500,...c}="number"==typeof t?{timeout:t}:t,u=(0,r.useCallback)(()=>{let e=o(l,c);a(e)},[l,c]);return(0,r.useEffect)(()=>{let e=null;return n&&(e=window.setTimeout(()=>{a(!1)},s)),()=>{e&&window.clearTimeout(e)}},[s,n]),{value:l,setValue:i,onCopy:u,hasCopied:n}}},90634:function(e,t,n){"use strict";n.d(t,{g:function(){return l}});var r=n(96118),o=n(35059),a=n(85893),l=(0,o.G)((e,t)=>(0,a.jsx)(r.K,{align:"center",...e,direction:"column",ref:t}));l.displayName="VStack"},97822:function(e,t,n){"use strict";n.d(t,{i:function(){return c}});var r=n(35059),o=n(91639),a=n(33179),l=n(82504),i=n(25432),s=n(85893),c=(0,r.G)(function(e,t){let{borderLeftWidth:n,borderBottomWidth:r,borderTopWidth:c,borderRightWidth:u,borderWidth:d,borderStyle:p,borderColor:f,...m}=(0,o.mq)("Divider",e),{className:v,orientation:b="horizontal",__css:y,...g}=(0,a.Lr)(e);return(0,s.jsx)(l.m.hr,{ref:t,"aria-orientation":b,...g,__css:{...m,border:"0",borderColor:f,borderStyle:p,...{vertical:{borderLeftWidth:n||u||d||"1px",height:"100%"},horizontal:{borderBottomWidth:r||c||d||"1px",width:"100%"}}[b],...y},className:(0,i.cx)("chakra-divider",v)})});c.displayName="Divider"},36354:function(e,t,n){"use strict";n.d(t,{x:function(){return i}});var r=n(35059),o=n(82504),a=n(25432),l=n(85893),i=(0,r.G)((e,t)=>{var n;let{overflow:r,overflowX:i,className:s,...c}=e;return(0,l.jsx)(o.m.div,{ref:t,className:(0,a.cx)("chakra-table__container",s),...c,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:null!=(n=null!=r?r:i)?n:"auto",overflowY:"hidden",maxWidth:"100%"}})})},36557:function(e,t,n){"use strict";n.d(t,{i:function(){return p},p:function(){return d}});var r=n(35059),o=n(91639),a=n(33179),l=n(82504),i=n(25432),s=n(55227),c=n(85893),[u,d]=(0,s.k)({name:"TableStylesContext",errorMessage:"useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "}),p=(0,r.G)((e,t)=>{let n=(0,o.jC)("Table",e),{className:r,layout:s,...d}=(0,a.Lr)(e);return(0,c.jsx)(u,{value:n,children:(0,c.jsx)(l.m.table,{ref:t,__css:{tableLayout:s,...n.table},className:(0,i.cx)("chakra-table",r),...d})})});p.displayName="Table"},577:function(e,t,n){"use strict";n.d(t,{Td:function(){return i}});var r=n(36557),o=n(35059),a=n(82504),l=n(85893),i=(0,o.G)(({isNumeric:e,...t},n)=>{let o=(0,r.p)();return(0,l.jsx)(a.m.td,{...t,ref:n,__css:o.td,"data-is-numeric":e})})},28650:function(e,t,n){"use strict";n.d(t,{p:function(){return i}});var r=n(36557),o=n(35059),a=n(82504),l=n(85893),i=(0,o.G)((e,t)=>{let n=(0,r.p)();return(0,l.jsx)(a.m.tbody,{...e,ref:t,__css:n.tbody})})},24304:function(e,t,n){"use strict";n.d(t,{h:function(){return i}});var r=n(36557),o=n(35059),a=n(82504),l=n(85893),i=(0,o.G)((e,t)=>{let n=(0,r.p)();return(0,l.jsx)(a.m.thead,{...e,ref:t,__css:n.thead})})},36526:function(e,t,n){"use strict";n.d(t,{Tr:function(){return i}});var r=n(36557),o=n(35059),a=n(82504),l=n(85893),i=(0,o.G)((e,t)=>{let n=(0,r.p)();return(0,l.jsx)(a.m.tr,{...e,ref:t,__css:n.tr})})},35947:function(e,t,n){"use strict";n.d(t,{R:function(){return i}});var r=n(36557),o=n(35059),a=n(82504),l=n(85893),i=(0,o.G)((e,t)=>{let{placement:n="bottom",...o}=e,i=(0,r.p)();return(0,l.jsx)(a.m.caption,{...o,ref:t,__css:{...i.caption,captionSide:n}})});i.displayName="TableCaption"},75421:function(e,t,n){"use strict";n.d(t,{Th:function(){return i}});var r=n(36557),o=n(35059),a=n(82504),l=n(85893),i=(0,o.G)(({isNumeric:e,...t},n)=>{let o=(0,r.p)();return(0,l.jsx)(a.m.th,{...t,ref:n,__css:o.th,"data-is-numeric":e})})},47523:function(e,t,n){"use strict";n.d(t,{u:function(){return D}});var r={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},o=n(61735),a=n(31054),l=n(68795),i=n(85075),s=n(57134),c=n(81103),u=n(25432),d=n(67294),p=e=>{var t;return(null==(t=e.current)?void 0:t.ownerDocument)||document},f=e=>{var t,n;return(null==(n=null==(t=e.current)?void 0:t.ownerDocument)?void 0:n.defaultView)||window},m="chakra-ui:close-tooltip",v=n(49598),b=n(82504),y=n(35059),g=n(91639),h=n(33179),w=n(75119),x=n(51615),C=n(65820),k=n(85893),_=(0,b.m)(x.E.div),D=(0,y.G)((e,t)=>{var n,y;let x;let D=(0,g.mq)("Tooltip",e),E=(0,h.Lr)(e),T=(0,w.F)(),{children:j,label:S,shouldWrapChildren:N,"aria-label":O,hasArrow:R,bg:G,portalProps:P,background:I,backgroundColor:q,bgColor:L,motionProps:A,...z}=E,U=null!=(y=null!=(n=null!=I?I:q)?n:G)?y:L;if(U){D.bg=U;let e=(0,h.K1)(T,"colors",U);D[l.Dq.arrowBg.var]=e}let F=function(e={}){let{openDelay:t=0,closeDelay:n=0,closeOnClick:r=!0,closeOnMouseDown:v,closeOnScroll:b,closeOnPointerDown:y=v,closeOnEsc:g=!0,onOpen:h,onClose:w,placement:x,id:C,isOpen:k,defaultIsOpen:_,arrowSize:D=10,arrowShadowColor:E,arrowPadding:T,modifiers:j,isDisabled:S,gutter:N,offset:O,direction:R,...G}=e,{isOpen:P,onOpen:I,onClose:q}=(0,i.q)({isOpen:k,defaultIsOpen:_,onOpen:h,onClose:w}),{referenceRef:L,getPopperProps:A,getArrowInnerProps:z,getArrowProps:U}=(0,a.D)({enabled:P,placement:x,arrowPadding:T,modifiers:j,gutter:N,offset:O,direction:R}),F=(0,d.useId)(),V=`tooltip-${null!=C?C:F}`,B=(0,d.useRef)(null),W=(0,d.useRef)(),M=(0,d.useCallback)(()=>{W.current&&(clearTimeout(W.current),W.current=void 0)},[]),K=(0,d.useRef)(),X=(0,d.useCallback)(()=>{K.current&&(clearTimeout(K.current),K.current=void 0)},[]),$=(0,d.useCallback)(()=>{X(),q()},[q,X]),H=((0,d.useEffect)(()=>{let e=p(B);return e.addEventListener(m,$),()=>e.removeEventListener(m,$)},[$,B]),()=>{let e=p(B),t=f(B);e.dispatchEvent(new t.CustomEvent(m))}),Y=(0,d.useCallback)(()=>{if(!S&&!W.current){H();let e=f(B);W.current=e.setTimeout(I,t)}},[H,S,I,t]),J=(0,d.useCallback)(()=>{M();let e=f(B);K.current=e.setTimeout($,n)},[n,$,M]),Q=(0,d.useCallback)(()=>{P&&r&&J()},[r,J,P]),Z=(0,d.useCallback)(()=>{P&&y&&J()},[y,J,P]),ee=(0,d.useCallback)(e=>{P&&"Escape"===e.key&&J()},[P,J]);(0,s.O)(()=>p(B),"keydown",g?ee:void 0),(0,s.O)(()=>{let e=B.current;if(!e)return null;let t=function e(t){return["html","body","#document"].includes(t.localName)?t.ownerDocument.body:(0,o.Re)(t)&&function(e){let t=e.ownerDocument.defaultView||window,{overflow:n,overflowX:r,overflowY:o}=t.getComputedStyle(e);return/auto|scroll|overlay|hidden/.test(n+o+r)}(t)?t:e("html"===t.localName?t:t.assignedSlot||t.parentElement||t.ownerDocument.documentElement)}(e);return"body"===t.localName?f(B):t},"scroll",()=>{P&&b&&$()},{passive:!0,capture:!0}),(0,d.useEffect)(()=>{S&&(M(),P&&q())},[S,P,q,M]),(0,d.useEffect)(()=>()=>{M(),X()},[M,X]),(0,s.O)(()=>B.current,"pointerleave",J);let et=(0,d.useCallback)((e={},t=null)=>{let n={...e,ref:(0,c.lq)(B,t,L),onPointerEnter:(0,u.v0)(e.onPointerEnter,e=>{"touch"!==e.pointerType&&Y()}),onClick:(0,u.v0)(e.onClick,Q),onPointerDown:(0,u.v0)(e.onPointerDown,Z),onFocus:(0,u.v0)(e.onFocus,Y),onBlur:(0,u.v0)(e.onBlur,J),"aria-describedby":P?V:void 0};return n},[Y,J,Z,P,V,Q,L]),en=(0,d.useCallback)((e={},t=null)=>A({...e,style:{...e.style,[l.Dq.arrowSize.var]:D?`${D}px`:void 0,[l.Dq.arrowShadowColor.var]:E}},t),[A,D,E]),er=(0,d.useCallback)((e={},t=null)=>{let n={...e.style,position:"relative",transformOrigin:l.Dq.transformOrigin.varRef};return{ref:t,...G,...e,id:V,role:"tooltip",style:n}},[G,V]);return{isOpen:P,show:Y,hide:J,getTriggerProps:et,getTooltipProps:er,getTooltipPositionerProps:en,getArrowProps:U,getArrowInnerProps:z}}({...z,direction:T.direction});if("string"==typeof j||N)x=(0,k.jsx)(b.m.span,{display:"inline-block",tabIndex:0,...F.getTriggerProps(),children:j});else{let e=d.Children.only(j);x=(0,d.cloneElement)(e,F.getTriggerProps(e.props,e.ref))}let V=!!O,B=F.getTooltipProps({},t),W=V?function(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}(B,["role","id"]):B,M=function(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}(B,["role","id"]);return S?(0,k.jsxs)(k.Fragment,{children:[x,(0,k.jsx)(C.M,{children:F.isOpen&&(0,k.jsx)(v.h,{...P,children:(0,k.jsx)(b.m.div,{...F.getTooltipPositionerProps(),__css:{zIndex:D.zIndex,pointerEvents:"none"},children:(0,k.jsxs)(_,{variants:r,initial:"exit",animate:"enter",exit:"exit",...A,...W,__css:D,children:[S,V&&(0,k.jsx)(b.m.span,{srOnly:!0,...M,children:O}),R&&(0,k.jsx)(b.m.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper",children:(0,k.jsx)(b.m.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:D.bg}})})]})})})})]}):(0,k.jsx)(k.Fragment,{children:j})});D.displayName="Tooltip"}}]);