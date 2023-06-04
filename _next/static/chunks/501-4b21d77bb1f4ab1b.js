(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[501],{20640:function(e,t,n){"use strict";var r=n(11742),l={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,o,i,s,u,c,d,p=!1;t||(t={}),o=t.debug||!1;try{if(s=r(),u=document.createRange(),c=document.getSelection(),(d=document.createElement("span")).textContent=e,d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=l[t.format]||l.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(d),u.selectNodeContents(d),c.addRange(u),!document.execCommand("copy"))throw Error("copy command was unsuccessful");p=!0}catch(r){o&&console.error("unable to copy using execCommand: ",r),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(r){o&&console.error("unable to copy using clipboardData: ",r),o&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",i=n.replace(/#{\s*key\s*}/g,a),window.prompt(i,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(u):c.removeAllRanges()),d&&document.body.removeChild(d),s()}return p}},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},5370:function(e,t,n){"use strict";n.d(t,{l:function(){return c}});var r=n(38267),l=n(35059),a=n(91639),o=n(33179),i=n(66384),s=n(25432),u=n(85893),c=(0,l.G)(function(e,t){var n;let l=(0,a.mq)("FormLabel",e),c=(0,o.Lr)(e),{className:p,children:f,requiredIndicator:m=(0,u.jsx)(d,{}),optionalIndicator:v=null,...b}=c,x=(0,r.NJ)(),y=null!=(n=null==x?void 0:x.getLabelProps(b,t))?n:{ref:t,...b};return(0,u.jsxs)(i.m.label,{...y,className:(0,s.cx)("chakra-form__label",c.className),__css:{display:"block",textAlign:"start",...l},children:[f,(null==x?void 0:x.isRequired)?m:v]})});c.displayName="FormLabel";var d=(0,l.G)(function(e,t){let n=(0,r.NJ)(),l=(0,r.e)();if(!(null==n?void 0:n.isRequired))return null;let a=(0,s.cx)("chakra-form__required-indicator",e.className);return(0,u.jsx)(i.m.span,{...null==n?void 0:n.getRequiredIndicatorProps(e,t),__css:l.requiredIndicator,className:a})});d.displayName="RequiredIndicator"},59690:function(e,t,n){"use strict";n.d(t,{K:function(){return o},Y:function(){return a}});var r=n(38267),l=n(25432);function a(e){let{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:a,...i}=o(e);return{...i,disabled:t,readOnly:r,required:a,"aria-invalid":(0,l.Qm)(n),"aria-required":(0,l.Qm)(a),"aria-readonly":(0,l.Qm)(r)}}function o(e){var t,n,a;let o=(0,r.NJ)(),{id:i,disabled:s,readOnly:u,required:c,isRequired:d,isInvalid:p,isReadOnly:f,isDisabled:m,onFocus:v,onBlur:b,...x}=e,y=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==o?void 0:o.hasFeedbackText)&&(null==o?void 0:o.isInvalid)&&y.push(o.feedbackId),(null==o?void 0:o.hasHelpText)&&y.push(o.helpTextId),{...x,"aria-describedby":y.join(" ")||void 0,id:null!=i?i:null==o?void 0:o.id,isDisabled:null!=(t=null!=s?s:m)?t:null==o?void 0:o.isDisabled,isReadOnly:null!=(n=null!=u?u:f)?n:null==o?void 0:o.isReadOnly,isRequired:null!=(a=null!=c?c:d)?a:null==o?void 0:o.isRequired,isInvalid:null!=p?p:null==o?void 0:o.isInvalid,onFocus:(0,l.v0)(null==o?void 0:o.onFocus,v),onBlur:(0,l.v0)(null==o?void 0:o.onBlur,b)}}},38267:function(e,t,n){"use strict";n.d(t,{NI:function(){return b},NJ:function(){return v},Q6:function(){return x},e:function(){return f}});var r=n(55227),l=n(81103),a=n(35059),o=n(91639),i=n(33179),s=n(66384),u=n(25432),c=n(67294),d=n(85893),[p,f]=(0,r.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[m,v]=(0,r.k)({strict:!1,name:"FormControlContext"}),b=(0,a.G)(function(e,t){let n=(0,o.jC)("Form",e),r=(0,i.Lr)(e),{getRootProps:a,htmlProps:f,...v}=function(e){let{id:t,isRequired:n,isInvalid:r,isDisabled:a,isReadOnly:o,...i}=e,s=(0,c.useId)(),d=t||`field-${s}`,p=`${d}-label`,f=`${d}-feedback`,m=`${d}-helptext`,[v,b]=(0,c.useState)(!1),[x,y]=(0,c.useState)(!1),[h,g]=(0,c.useState)(!1),C=(0,c.useCallback)((e={},t=null)=>({id:m,...e,ref:(0,l.lq)(t,e=>{e&&y(!0)})}),[m]),k=(0,c.useCallback)((e={},t=null)=>{var n,l;return{...e,ref:t,"data-focus":(0,u.PB)(h),"data-disabled":(0,u.PB)(a),"data-invalid":(0,u.PB)(r),"data-readonly":(0,u.PB)(o),id:null!=(n=e.id)?n:p,htmlFor:null!=(l=e.htmlFor)?l:d}},[d,a,h,r,o,p]),w=(0,c.useCallback)((e={},t=null)=>({id:f,...e,ref:(0,l.lq)(t,e=>{e&&b(!0)}),"aria-live":"polite"}),[f]),_=(0,c.useCallback)((e={},t=null)=>({...e,...i,ref:t,role:"group"}),[i]),D=(0,c.useCallback)((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!o,isDisabled:!!a,isFocused:!!h,onFocus:()=>g(!0),onBlur:()=>g(!1),hasFeedbackText:v,setHasFeedbackText:b,hasHelpText:x,setHasHelpText:y,id:d,labelId:p,feedbackId:f,helpTextId:m,htmlProps:i,getHelpTextProps:C,getErrorMessageProps:w,getRootProps:_,getLabelProps:k,getRequiredIndicatorProps:D}}(r),b=(0,u.cx)("chakra-form-control",e.className);return(0,d.jsx)(m,{value:v,children:(0,d.jsx)(p,{value:n,children:(0,d.jsx)(s.m.div,{...a({},t),className:b,__css:n.container})})})});b.displayName="FormControl";var x=(0,a.G)(function(e,t){let n=v(),r=f(),l=(0,u.cx)("chakra-form__helper-text",e.className);return(0,d.jsx)(s.m.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:r.helperText,className:l})});x.displayName="FormHelperText"},23189:function(e,t,n){"use strict";n.d(t,{V:function(){return a}});var r=n(67294),l=n(20640);function a(e,t={}){let[n,a]=(0,r.useState)(!1),[o,i]=(0,r.useState)(e),{timeout:s=1500,...u}="number"==typeof t?{timeout:t}:t,c=(0,r.useCallback)(()=>{let e=l(o,u);a(e)},[o,u]);return(0,r.useEffect)(()=>{let e=null;return n&&(e=window.setTimeout(()=>{a(!1)},s)),()=>{e&&window.clearTimeout(e)}},[s,n]),{value:o,setValue:i,onCopy:c,hasCopied:n}}},28129:function(e,t,n){"use strict";n.d(t,{I:function(){return c}});var r=n(59690),l=n(35059),a=n(91639),o=n(33179),i=n(66384),s=n(25432),u=n(85893),c=(0,l.G)(function(e,t){let{htmlSize:n,...l}=e,c=(0,a.jC)("Input",l),d=(0,o.Lr)(l),p=(0,r.Y)(d),f=(0,s.cx)("chakra-input",e.className);return(0,u.jsx)(i.m.input,{size:n,...p,__css:c.field,ref:t,className:f})});c.displayName="Input",c.id="Input"},91669:function(e,t,n){"use strict";n.d(t,{g:function(){return o}});var r=n(76684),l=n(35059),a=n(85893),o=(0,l.G)((e,t)=>(0,a.jsx)(r.K,{align:"center",...e,direction:"column",ref:t}));o.displayName="VStack"},97822:function(e,t,n){"use strict";n.d(t,{i:function(){return u}});var r=n(35059),l=n(91639),a=n(33179),o=n(66384),i=n(25432),s=n(85893),u=(0,r.G)(function(e,t){let{borderLeftWidth:n,borderBottomWidth:r,borderTopWidth:u,borderRightWidth:c,borderWidth:d,borderStyle:p,borderColor:f,...m}=(0,l.mq)("Divider",e),{className:v,orientation:b="horizontal",__css:x,...y}=(0,a.Lr)(e);return(0,s.jsx)(o.m.hr,{ref:t,"aria-orientation":b,...y,__css:{...m,border:"0",borderColor:f,borderStyle:p,...{vertical:{borderLeftWidth:n||c||d||"1px",height:"100%"},horizontal:{borderBottomWidth:r||u||d||"1px",width:"100%"}}[b],...x},className:(0,i.cx)("chakra-divider",v)})});u.displayName="Divider"},41753:function(e,t,n){"use strict";n.d(t,{g:function(){return d}});var r=n(59690),l=n(35059),a=n(91639),o=n(33179),i=n(66384),s=n(25432),u=n(85893),c=["h","minH","height","minHeight"],d=(0,l.G)((e,t)=>{let n=(0,a.mq)("Textarea",e),{className:l,rows:d,...p}=(0,o.Lr)(e),f=(0,r.Y)(p),m=d?function(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}(n,c):n;return(0,u.jsx)(i.m.textarea,{ref:t,rows:d,...f,className:(0,s.cx)("chakra-textarea",l),__css:m})});d.displayName="Textarea"},57350:function(e,t,n){"use strict";n.d(t,{p:function(){return i}});var r=n(67848),l=n(49872),a=n(34629),o=n(67294);function i(e){let{theme:t}=(0,a.uP)(),n=(0,r.OX)();return(0,o.useMemo)(()=>(0,l.Cj)(t.direction,{...n,...e}),[e,t.direction,n])}},71567:function(e,t,n){"use strict";n.d(t,{u:function(){return _}});var r={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},l=n(57134),a=n(85075),o=n(5039),i=n(17738),s=n(81103),u=n(25432),c=n(67294),d=e=>{var t;return(null==(t=e.current)?void 0:t.ownerDocument)||document},p=e=>{var t,n;return(null==(n=null==(t=e.current)?void 0:t.ownerDocument)?void 0:n.defaultView)||window},f="chakra-ui:close-tooltip",m=n(49598),v=n(66384),b=n(35059),x=n(91639),y=n(33179),h=n(75119),g=n(51615),C=n(65820),k=n(85893),w=(0,v.m)(g.E.div),_=(0,b.G)((e,t)=>{var n,b;let g;let _=(0,x.mq)("Tooltip",e),D=(0,y.Lr)(e),N=(0,h.F)(),{children:j,label:E,shouldWrapChildren:T,"aria-label":I,hasArrow:R,bg:q,portalProps:F,background:O,backgroundColor:P,bgColor:S,motionProps:L,...B}=D,G=null!=(b=null!=(n=null!=O?O:P)?n:q)?b:S;if(G){_.bg=G;let e=(0,y.K1)(N,"colors",G);_[i.Dq.arrowBg.var]=e}let A=function(e={}){let{openDelay:t=0,closeDelay:n=0,closeOnClick:r=!0,closeOnMouseDown:m,closeOnScroll:v,closeOnPointerDown:b=m,closeOnEsc:x=!0,onOpen:y,onClose:h,placement:g,id:C,isOpen:k,defaultIsOpen:w,arrowSize:_=10,arrowShadowColor:D,arrowPadding:N,modifiers:j,isDisabled:E,gutter:T,offset:I,direction:R,...q}=e,{isOpen:F,onOpen:O,onClose:P}=(0,a.q)({isOpen:k,defaultIsOpen:w,onOpen:y,onClose:h}),{referenceRef:S,getPopperProps:L,getArrowInnerProps:B,getArrowProps:G}=(0,o.D)({enabled:F,placement:g,arrowPadding:N,modifiers:j,gutter:T,offset:I,direction:R}),A=(0,c.useId)(),z=`tooltip-${null!=C?C:A}`,U=(0,c.useRef)(null),$=(0,c.useRef)(),H=(0,c.useCallback)(()=>{$.current&&(clearTimeout($.current),$.current=void 0)},[]),J=(0,c.useRef)(),M=(0,c.useCallback)(()=>{J.current&&(clearTimeout(J.current),J.current=void 0)},[]),Q=(0,c.useCallback)(()=>{M(),P()},[P,M]),K=((0,c.useEffect)(()=>{let e=d(U);return e.addEventListener(f,Q),()=>e.removeEventListener(f,Q)},[Q,U]),()=>{let e=d(U),t=p(U);e.dispatchEvent(new t.CustomEvent(f))}),V=(0,c.useCallback)(()=>{if(!E&&!$.current){K();let e=p(U);$.current=e.setTimeout(O,t)}},[K,E,O,t]),Y=(0,c.useCallback)(()=>{H();let e=p(U);J.current=e.setTimeout(Q,n)},[n,Q,H]),W=(0,c.useCallback)(()=>{F&&r&&Y()},[r,Y,F]),X=(0,c.useCallback)(()=>{F&&b&&Y()},[b,Y,F]),Z=(0,c.useCallback)(e=>{F&&"Escape"===e.key&&Y()},[F,Y]);(0,l.O)(()=>d(U),"keydown",x?Z:void 0),(0,l.O)(()=>d(U),"scroll",()=>{F&&v&&Q()}),(0,c.useEffect)(()=>{E&&(H(),F&&P())},[E,F,P,H]),(0,c.useEffect)(()=>()=>{H(),M()},[H,M]),(0,l.O)(()=>U.current,"pointerleave",Y);let ee=(0,c.useCallback)((e={},t=null)=>{let n={...e,ref:(0,s.lq)(U,t,S),onPointerEnter:(0,u.v0)(e.onPointerEnter,e=>{"touch"!==e.pointerType&&V()}),onClick:(0,u.v0)(e.onClick,W),onPointerDown:(0,u.v0)(e.onPointerDown,X),onFocus:(0,u.v0)(e.onFocus,V),onBlur:(0,u.v0)(e.onBlur,Y),"aria-describedby":F?z:void 0};return n},[V,Y,X,F,z,W,S]),et=(0,c.useCallback)((e={},t=null)=>L({...e,style:{...e.style,[i.Dq.arrowSize.var]:_?`${_}px`:void 0,[i.Dq.arrowShadowColor.var]:D}},t),[L,_,D]),en=(0,c.useCallback)((e={},t=null)=>{let n={...e.style,position:"relative",transformOrigin:i.Dq.transformOrigin.varRef};return{ref:t,...q,...e,id:z,role:"tooltip",style:n}},[q,z]);return{isOpen:F,show:V,hide:Y,getTriggerProps:ee,getTooltipProps:en,getTooltipPositionerProps:et,getArrowProps:G,getArrowInnerProps:B}}({...B,direction:N.direction});if("string"==typeof j||T)g=(0,k.jsx)(v.m.span,{display:"inline-block",tabIndex:0,...A.getTriggerProps(),children:j});else{let e=c.Children.only(j);g=(0,c.cloneElement)(e,A.getTriggerProps(e.props,e.ref))}let z=!!I,U=A.getTooltipProps({},t),$=z?function(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}(U,["role","id"]):U,H=function(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}(U,["role","id"]);return E?(0,k.jsxs)(k.Fragment,{children:[g,(0,k.jsx)(C.M,{children:A.isOpen&&(0,k.jsx)(m.h,{...F,children:(0,k.jsx)(v.m.div,{...A.getTooltipPositionerProps(),__css:{zIndex:_.zIndex,pointerEvents:"none"},children:(0,k.jsxs)(w,{variants:r,initial:"exit",animate:"enter",exit:"exit",...L,...$,__css:_,children:[E,z&&(0,k.jsx)(v.m.span,{srOnly:!0,...H,children:I}),R&&(0,k.jsx)(v.m.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper",children:(0,k.jsx)(v.m.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:_.bg}})})]})})})})]}):(0,k.jsx)(k.Fragment,{children:j})});_.displayName="Tooltip"}}]);