(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[763],{20640:function(e,t,n){"use strict";var r=n(11742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,l,c,s,u,d,p=!1;t||(t={}),i=t.debug||!1;try{if(c=r(),s=document.createRange(),u=document.getSelection(),(d=document.createElement("span")).textContent=e,d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[t.format]||o.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(d),s.selectNodeContents(d),u.addRange(s),!document.execCommand("copy"))throw Error("copy command was unsuccessful");p=!0}catch(r){i&&console.error("unable to copy using execCommand: ",r),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(r){i&&console.error("unable to copy using clipboardData: ",r),i&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",l=n.replace(/#{\s*key\s*}/g,a),window.prompt(l,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(s):u.removeAllRanges()),d&&document.body.removeChild(d),c()}return p}},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},23189:function(e,t,n){"use strict";n.d(t,{V:function(){return a}});var r=n(11720),o=n(20640);function a(e,t={}){let[n,a]=(0,r.useState)(!1),[i,l]=(0,r.useState)(e),{timeout:c=1500,...s}="number"==typeof t?{timeout:t}:t,u=(0,r.useCallback)(()=>{let e=o(i,s);a(e)},[i,s]);return(0,r.useEffect)(()=>{let e=null;return n&&(e=window.setTimeout(()=>{a(!1)},c)),()=>{e&&window.clearTimeout(e)}},[c,n]),{value:i,setValue:l,onCopy:u,hasCopied:n}}},91669:function(e,t,n){"use strict";n.d(t,{g:function(){return i}});var r=n(76684),o=n(35059),a=n(97997),i=(0,o.G)((e,t)=>(0,a.tZ)(r.K,{align:"center",...e,direction:"column",ref:t}));i.displayName="VStack"},97822:function(e,t,n){"use strict";n.d(t,{i:function(){return s}});var r=n(35059),o=n(91639),a=n(33179),i=n(66384),l=n(25432),c=n(97997),s=(0,r.G)(function(e,t){let{borderLeftWidth:n,borderBottomWidth:r,borderTopWidth:s,borderRightWidth:u,borderWidth:d,borderStyle:p,borderColor:f,...m}=(0,o.mq)("Divider",e),{className:v,orientation:b="horizontal",__css:y,...g}=(0,a.Lr)(e);return(0,c.tZ)(i.m.hr,{ref:t,"aria-orientation":b,...g,__css:{...m,border:"0",borderColor:f,borderStyle:p,...{vertical:{borderLeftWidth:n||u||d||"1px",height:"100%"},horizontal:{borderBottomWidth:r||s||d||"1px",width:"100%"}}[b],...y},className:(0,l.cx)("chakra-divider",v)})});s.displayName="Divider"},36354:function(e,t,n){"use strict";n.d(t,{x:function(){return l}});var r=n(35059),o=n(66384),a=n(25432),i=n(97997),l=(0,r.G)((e,t)=>{var n;let{overflow:r,overflowX:l,className:c,...s}=e;return(0,i.tZ)(o.m.div,{ref:t,className:(0,a.cx)("chakra-table__container",c),...s,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:null!=(n=null!=r?r:l)?n:"auto",overflowY:"hidden",maxWidth:"100%"}})})},36557:function(e,t,n){"use strict";n.d(t,{i:function(){return p},p:function(){return d}});var r=n(35059),o=n(91639),a=n(33179),i=n(66384),l=n(25432),c=n(55227),s=n(97997),[u,d]=(0,c.k)({name:"TableStylesContext",errorMessage:"useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "}),p=(0,r.G)((e,t)=>{let n=(0,o.jC)("Table",e),{className:r,layout:c,...d}=(0,a.Lr)(e);return(0,s.tZ)(u,{value:n,children:(0,s.tZ)(i.m.table,{ref:t,__css:{tableLayout:c,...n.table},className:(0,l.cx)("chakra-table",r),...d})})});p.displayName="Table"},577:function(e,t,n){"use strict";n.d(t,{Td:function(){return l}});var r=n(36557),o=n(35059),a=n(66384),i=n(97997),l=(0,o.G)(({isNumeric:e,...t},n)=>{let o=(0,r.p)();return(0,i.tZ)(a.m.td,{...t,ref:n,__css:o.td,"data-is-numeric":e})})},28650:function(e,t,n){"use strict";n.d(t,{p:function(){return l}});var r=n(36557),o=n(35059),a=n(66384),i=n(97997),l=(0,o.G)((e,t)=>{let n=(0,r.p)();return(0,i.tZ)(a.m.tbody,{...e,ref:t,__css:n.tbody})})},24304:function(e,t,n){"use strict";n.d(t,{h:function(){return l}});var r=n(36557),o=n(35059),a=n(66384),i=n(97997),l=(0,o.G)((e,t)=>{let n=(0,r.p)();return(0,i.tZ)(a.m.thead,{...e,ref:t,__css:n.thead})})},36526:function(e,t,n){"use strict";n.d(t,{Tr:function(){return l}});var r=n(36557),o=n(35059),a=n(66384),i=n(97997),l=(0,o.G)((e,t)=>{let n=(0,r.p)();return(0,i.tZ)(a.m.tr,{...e,ref:t,__css:n.tr})})},35947:function(e,t,n){"use strict";n.d(t,{R:function(){return l}});var r=n(36557),o=n(35059),a=n(66384),i=n(97997),l=(0,o.G)((e,t)=>{let{placement:n="bottom",...o}=e,l=(0,r.p)();return(0,i.tZ)(a.m.caption,{...o,ref:t,__css:{...l.caption,captionSide:n}})});l.displayName="TableCaption"},75421:function(e,t,n){"use strict";n.d(t,{Th:function(){return l}});var r=n(36557),o=n(35059),a=n(66384),i=n(97997),l=(0,o.G)(({isNumeric:e,...t},n)=>{let o=(0,r.p)();return(0,i.tZ)(a.m.th,{...t,ref:n,__css:o.th,"data-is-numeric":e})})},71567:function(e,t,n){"use strict";n.d(t,{u:function(){return x}});var r={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},o=n(57134),a=n(85075),i=n(5039),l=n(17738),c=n(81103),s=n(25432),u=n(11720),d=e=>{var t;return(null==(t=e.current)?void 0:t.ownerDocument)||document},p=e=>{var t,n;return(null==(n=null==(t=e.current)?void 0:t.ownerDocument)?void 0:n.defaultView)||window},f="chakra-ui:close-tooltip",m=n(49598),v=n(66384),b=n(35059),y=n(91639),g=n(33179),h=n(75119),w=n(51615),C=n(65820),k=n(97997),_=(0,v.m)(w.E.div),x=(0,b.G)((e,t)=>{var n,b;let w;let x=(0,y.mq)("Tooltip",e),D=(0,g.Lr)(e),T=(0,h.F)(),{children:E,label:Z,shouldWrapChildren:S,"aria-label":O,hasArrow:N,bg:R,portalProps:G,background:P,backgroundColor:I,bgColor:q,motionProps:L,...A}=D,z=null!=(b=null!=(n=null!=P?P:I)?n:R)?b:q;if(z){x.bg=z;let e=(0,g.K1)(T,"colors",z);x[l.Dq.arrowBg.var]=e}let B=function(e={}){let{openDelay:t=0,closeDelay:n=0,closeOnClick:r=!0,closeOnMouseDown:m,closeOnScroll:v,closeOnPointerDown:b=m,closeOnEsc:y=!0,onOpen:g,onClose:h,placement:w,id:C,isOpen:k,defaultIsOpen:_,arrowSize:x=10,arrowShadowColor:D,arrowPadding:T,modifiers:E,isDisabled:Z,gutter:S,offset:O,direction:N,...R}=e,{isOpen:G,onOpen:P,onClose:I}=(0,a.q)({isOpen:k,defaultIsOpen:_,onOpen:g,onClose:h}),{referenceRef:q,getPopperProps:L,getArrowInnerProps:A,getArrowProps:z}=(0,i.D)({enabled:G,placement:w,arrowPadding:T,modifiers:E,gutter:S,offset:O,direction:N}),B=(0,u.useId)(),U=`tooltip-${null!=C?C:B}`,W=(0,u.useRef)(null),X=(0,u.useRef)(),F=(0,u.useCallback)(()=>{X.current&&(clearTimeout(X.current),X.current=void 0)},[]),M=(0,u.useRef)(),V=(0,u.useCallback)(()=>{M.current&&(clearTimeout(M.current),M.current=void 0)},[]),Y=(0,u.useCallback)(()=>{V(),I()},[I,V]),j=((0,u.useEffect)(()=>{let e=d(W);return e.addEventListener(f,Y),()=>e.removeEventListener(f,Y)},[Y,W]),()=>{let e=d(W),t=p(W);e.dispatchEvent(new t.CustomEvent(f))}),H=(0,u.useCallback)(()=>{if(!Z&&!X.current){j();let e=p(W);X.current=e.setTimeout(P,t)}},[j,Z,P,t]),K=(0,u.useCallback)(()=>{F();let e=p(W);M.current=e.setTimeout(Y,n)},[n,Y,F]),$=(0,u.useCallback)(()=>{G&&r&&K()},[r,K,G]),J=(0,u.useCallback)(()=>{G&&b&&K()},[b,K,G]),Q=(0,u.useCallback)(e=>{G&&"Escape"===e.key&&K()},[G,K]);(0,o.O)(()=>d(W),"keydown",y?Q:void 0),(0,o.O)(()=>d(W),"scroll",()=>{G&&v&&Y()}),(0,u.useEffect)(()=>{Z&&(F(),G&&I())},[Z,G,I,F]),(0,u.useEffect)(()=>()=>{F(),V()},[F,V]),(0,o.O)(()=>W.current,"pointerleave",K);let ee=(0,u.useCallback)((e={},t=null)=>{let n={...e,ref:(0,c.lq)(W,t,q),onPointerEnter:(0,s.v0)(e.onPointerEnter,e=>{"touch"!==e.pointerType&&H()}),onClick:(0,s.v0)(e.onClick,$),onPointerDown:(0,s.v0)(e.onPointerDown,J),onFocus:(0,s.v0)(e.onFocus,H),onBlur:(0,s.v0)(e.onBlur,K),"aria-describedby":G?U:void 0};return n},[H,K,J,G,U,$,q]),et=(0,u.useCallback)((e={},t=null)=>L({...e,style:{...e.style,[l.Dq.arrowSize.var]:x?`${x}px`:void 0,[l.Dq.arrowShadowColor.var]:D}},t),[L,x,D]),en=(0,u.useCallback)((e={},t=null)=>{let n={...e.style,position:"relative",transformOrigin:l.Dq.transformOrigin.varRef};return{ref:t,...R,...e,id:U,role:"tooltip",style:n}},[R,U]);return{isOpen:G,show:H,hide:K,getTriggerProps:ee,getTooltipProps:en,getTooltipPositionerProps:et,getArrowProps:z,getArrowInnerProps:A}}({...A,direction:T.direction});if("string"==typeof E||S)w=(0,k.tZ)(v.m.span,{display:"inline-block",tabIndex:0,...B.getTriggerProps(),children:E});else{let e=u.Children.only(E);w=(0,u.cloneElement)(e,B.getTriggerProps(e.props,e.ref))}let U=!!O,W=B.getTooltipProps({},t),X=U?function(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}(W,["role","id"]):W,F=function(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}(W,["role","id"]);return Z?(0,k.BX)(k.HY,{children:[w,(0,k.tZ)(C.M,{children:B.isOpen&&(0,k.tZ)(m.h,{...G,children:(0,k.tZ)(v.m.div,{...B.getTooltipPositionerProps(),__css:{zIndex:x.zIndex,pointerEvents:"none"},children:(0,k.BX)(_,{variants:r,initial:"exit",animate:"enter",exit:"exit",...L,...X,__css:x,children:[Z,U&&(0,k.tZ)(v.m.span,{srOnly:!0,...F,children:O}),N&&(0,k.tZ)(v.m.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper",children:(0,k.tZ)(v.m.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:x.bg}})})]})})})})]}):(0,k.tZ)(k.HY,{children:E})});x.displayName="Tooltip"}}]);