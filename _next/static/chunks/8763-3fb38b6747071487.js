(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8763],{20640:function(e,t,n){"use strict";var r=n(11742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,l,s,c,u,d,p=!1;t||(t={}),i=t.debug||!1;try{if(s=r(),c=document.createRange(),u=document.getSelection(),(d=document.createElement("span")).textContent=e,d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[t.format]||o.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(d),c.selectNodeContents(d),u.addRange(c),!document.execCommand("copy"))throw Error("copy command was unsuccessful");p=!0}catch(r){i&&console.error("unable to copy using execCommand: ",r),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(r){i&&console.error("unable to copy using clipboardData: ",r),i&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",l=n.replace(/#{\s*key\s*}/g,a),window.prompt(l,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(c):u.removeAllRanges()),d&&document.body.removeChild(d),s()}return p}},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},23189:function(e,t,n){"use strict";n.d(t,{V:function(){return a}});var r=n(67294),o=n(20640);function a(e,t={}){let[n,a]=(0,r.useState)(!1),[i,l]=(0,r.useState)(e),{timeout:s=1500,...c}="number"==typeof t?{timeout:t}:t,u=(0,r.useCallback)(()=>{let e=o(i,c);a(e)},[i,c]);return(0,r.useEffect)(()=>{let e=null;return n&&(e=window.setTimeout(()=>{a(!1)},s)),()=>{e&&window.clearTimeout(e)}},[s,n]),{value:i,setValue:l,onCopy:u,hasCopied:n}}},91669:function(e,t,n){"use strict";n.d(t,{g:function(){return i}});var r=n(76684),o=n(35059),a=n(85893),i=(0,o.G)((e,t)=>(0,a.jsx)(r.K,{align:"center",...e,direction:"column",ref:t}));i.displayName="VStack"},97822:function(e,t,n){"use strict";n.d(t,{i:function(){return c}});var r=n(35059),o=n(91639),a=n(33179),i=n(66384),l=n(25432),s=n(85893),c=(0,r.G)(function(e,t){let{borderLeftWidth:n,borderBottomWidth:r,borderTopWidth:c,borderRightWidth:u,borderWidth:d,borderStyle:p,borderColor:f,...m}=(0,o.mq)("Divider",e),{className:v,orientation:b="horizontal",__css:y,...g}=(0,a.Lr)(e);return(0,s.jsx)(i.m.hr,{ref:t,"aria-orientation":b,...g,__css:{...m,border:"0",borderColor:f,borderStyle:p,...{vertical:{borderLeftWidth:n||u||d||"1px",height:"100%"},horizontal:{borderBottomWidth:r||c||d||"1px",width:"100%"}}[b],...y},className:(0,l.cx)("chakra-divider",v)})});c.displayName="Divider"},36354:function(e,t,n){"use strict";n.d(t,{x:function(){return l}});var r=n(35059),o=n(66384),a=n(25432),i=n(85893),l=(0,r.G)((e,t)=>{var n;let{overflow:r,overflowX:l,className:s,...c}=e;return(0,i.jsx)(o.m.div,{ref:t,className:(0,a.cx)("chakra-table__container",s),...c,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:null!=(n=null!=r?r:l)?n:"auto",overflowY:"hidden",maxWidth:"100%"}})})},36557:function(e,t,n){"use strict";n.d(t,{i:function(){return p},p:function(){return d}});var r=n(35059),o=n(91639),a=n(33179),i=n(66384),l=n(25432),s=n(55227),c=n(85893),[u,d]=(0,s.k)({name:"TableStylesContext",errorMessage:"useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "}),p=(0,r.G)((e,t)=>{let n=(0,o.jC)("Table",e),{className:r,layout:s,...d}=(0,a.Lr)(e);return(0,c.jsx)(u,{value:n,children:(0,c.jsx)(i.m.table,{ref:t,__css:{tableLayout:s,...n.table},className:(0,l.cx)("chakra-table",r),...d})})});p.displayName="Table"},577:function(e,t,n){"use strict";n.d(t,{Td:function(){return l}});var r=n(36557),o=n(35059),a=n(66384),i=n(85893),l=(0,o.G)(({isNumeric:e,...t},n)=>{let o=(0,r.p)();return(0,i.jsx)(a.m.td,{...t,ref:n,__css:o.td,"data-is-numeric":e})})},28650:function(e,t,n){"use strict";n.d(t,{p:function(){return l}});var r=n(36557),o=n(35059),a=n(66384),i=n(85893),l=(0,o.G)((e,t)=>{let n=(0,r.p)();return(0,i.jsx)(a.m.tbody,{...e,ref:t,__css:n.tbody})})},24304:function(e,t,n){"use strict";n.d(t,{h:function(){return l}});var r=n(36557),o=n(35059),a=n(66384),i=n(85893),l=(0,o.G)((e,t)=>{let n=(0,r.p)();return(0,i.jsx)(a.m.thead,{...e,ref:t,__css:n.thead})})},36526:function(e,t,n){"use strict";n.d(t,{Tr:function(){return l}});var r=n(36557),o=n(35059),a=n(66384),i=n(85893),l=(0,o.G)((e,t)=>{let n=(0,r.p)();return(0,i.jsx)(a.m.tr,{...e,ref:t,__css:n.tr})})},35947:function(e,t,n){"use strict";n.d(t,{R:function(){return l}});var r=n(36557),o=n(35059),a=n(66384),i=n(85893),l=(0,o.G)((e,t)=>{let{placement:n="bottom",...o}=e,l=(0,r.p)();return(0,i.jsx)(a.m.caption,{...o,ref:t,__css:{...l.caption,captionSide:n}})});l.displayName="TableCaption"},75421:function(e,t,n){"use strict";n.d(t,{Th:function(){return l}});var r=n(36557),o=n(35059),a=n(66384),i=n(85893),l=(0,o.G)(({isNumeric:e,...t},n)=>{let o=(0,r.p)();return(0,i.jsx)(a.m.th,{...t,ref:n,__css:o.th,"data-is-numeric":e})})},71567:function(e,t,n){"use strict";n.d(t,{u:function(){return _}});var r={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},o=n(57134),a=n(85075),i=n(5039),l=n(17738),s=n(81103),c=n(25432),u=n(67294),d=e=>{var t;return(null==(t=e.current)?void 0:t.ownerDocument)||document},p=e=>{var t,n;return(null==(n=null==(t=e.current)?void 0:t.ownerDocument)?void 0:n.defaultView)||window},f="chakra-ui:close-tooltip",m=n(49598),v=n(66384),b=n(35059),y=n(91639),g=n(33179),h=n(75119),x=n(51615),w=n(65820),C=n(85893),k=(0,v.m)(x.E.div),_=(0,b.G)((e,t)=>{var n,b;let x;let _=(0,y.mq)("Tooltip",e),D=(0,g.Lr)(e),T=(0,h.F)(),{children:E,label:j,shouldWrapChildren:S,"aria-label":O,hasArrow:N,bg:R,portalProps:G,background:P,backgroundColor:I,bgColor:q,motionProps:L,...A}=D,z=null!=(b=null!=(n=null!=P?P:I)?n:R)?b:q;if(z){_.bg=z;let e=(0,g.K1)(T,"colors",z);_[l.Dq.arrowBg.var]=e}let U=function(e={}){let{openDelay:t=0,closeDelay:n=0,closeOnClick:r=!0,closeOnMouseDown:m,closeOnScroll:v,closeOnPointerDown:b=m,closeOnEsc:y=!0,onOpen:g,onClose:h,placement:x,id:w,isOpen:C,defaultIsOpen:k,arrowSize:_=10,arrowShadowColor:D,arrowPadding:T,modifiers:E,isDisabled:j,gutter:S,offset:O,direction:N,...R}=e,{isOpen:G,onOpen:P,onClose:I}=(0,a.q)({isOpen:C,defaultIsOpen:k,onOpen:g,onClose:h}),{referenceRef:q,getPopperProps:L,getArrowInnerProps:A,getArrowProps:z}=(0,i.D)({enabled:G,placement:x,arrowPadding:T,modifiers:E,gutter:S,offset:O,direction:N}),U=(0,u.useId)(),F=`tooltip-${null!=w?w:U}`,B=(0,u.useRef)(null),W=(0,u.useRef)(),M=(0,u.useCallback)(()=>{W.current&&(clearTimeout(W.current),W.current=void 0)},[]),V=(0,u.useRef)(),K=(0,u.useCallback)(()=>{V.current&&(clearTimeout(V.current),V.current=void 0)},[]),X=(0,u.useCallback)(()=>{K(),I()},[I,K]),$=((0,u.useEffect)(()=>{let e=d(B);return e.addEventListener(f,X),()=>e.removeEventListener(f,X)},[X,B]),()=>{let e=d(B),t=p(B);e.dispatchEvent(new t.CustomEvent(f))}),Y=(0,u.useCallback)(()=>{if(!j&&!W.current){$();let e=p(B);W.current=e.setTimeout(P,t)}},[$,j,P,t]),H=(0,u.useCallback)(()=>{M();let e=p(B);V.current=e.setTimeout(X,n)},[n,X,M]),J=(0,u.useCallback)(()=>{G&&r&&H()},[r,H,G]),Q=(0,u.useCallback)(()=>{G&&b&&H()},[b,H,G]),Z=(0,u.useCallback)(e=>{G&&"Escape"===e.key&&H()},[G,H]);(0,o.O)(()=>d(B),"keydown",y?Z:void 0),(0,o.O)(()=>d(B),"scroll",()=>{G&&v&&X()}),(0,u.useEffect)(()=>{j&&(M(),G&&I())},[j,G,I,M]),(0,u.useEffect)(()=>()=>{M(),K()},[M,K]),(0,o.O)(()=>B.current,"pointerleave",H);let ee=(0,u.useCallback)((e={},t=null)=>{let n={...e,ref:(0,s.lq)(B,t,q),onPointerEnter:(0,c.v0)(e.onPointerEnter,e=>{"touch"!==e.pointerType&&Y()}),onClick:(0,c.v0)(e.onClick,J),onPointerDown:(0,c.v0)(e.onPointerDown,Q),onFocus:(0,c.v0)(e.onFocus,Y),onBlur:(0,c.v0)(e.onBlur,H),"aria-describedby":G?F:void 0};return n},[Y,H,Q,G,F,J,q]),et=(0,u.useCallback)((e={},t=null)=>L({...e,style:{...e.style,[l.Dq.arrowSize.var]:_?`${_}px`:void 0,[l.Dq.arrowShadowColor.var]:D}},t),[L,_,D]),en=(0,u.useCallback)((e={},t=null)=>{let n={...e.style,position:"relative",transformOrigin:l.Dq.transformOrigin.varRef};return{ref:t,...R,...e,id:F,role:"tooltip",style:n}},[R,F]);return{isOpen:G,show:Y,hide:H,getTriggerProps:ee,getTooltipProps:en,getTooltipPositionerProps:et,getArrowProps:z,getArrowInnerProps:A}}({...A,direction:T.direction});if("string"==typeof E||S)x=(0,C.jsx)(v.m.span,{display:"inline-block",tabIndex:0,...U.getTriggerProps(),children:E});else{let e=u.Children.only(E);x=(0,u.cloneElement)(e,U.getTriggerProps(e.props,e.ref))}let F=!!O,B=U.getTooltipProps({},t),W=F?function(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}(B,["role","id"]):B,M=function(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}(B,["role","id"]);return j?(0,C.jsxs)(C.Fragment,{children:[x,(0,C.jsx)(w.M,{children:U.isOpen&&(0,C.jsx)(m.h,{...G,children:(0,C.jsx)(v.m.div,{...U.getTooltipPositionerProps(),__css:{zIndex:_.zIndex,pointerEvents:"none"},children:(0,C.jsxs)(k,{variants:r,initial:"exit",animate:"enter",exit:"exit",...L,...W,__css:_,children:[j,F&&(0,C.jsx)(v.m.span,{srOnly:!0,...M,children:O}),N&&(0,C.jsx)(v.m.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper",children:(0,C.jsx)(v.m.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:_.bg}})})]})})})})]}):(0,C.jsx)(C.Fragment,{children:E})});_.displayName="Tooltip"}}]);