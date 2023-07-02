"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[410],{67562:function(e,n,t){t.d(n,{h:function(){return l}});var r=t(67294),i=t(25432),u=t(81103);function o(e){let n=e.target,{tagName:t,isContentEditable:r}=n;return"INPUT"!==t&&"TEXTAREA"!==t&&!0!==r}function l(e={}){let{ref:n,isDisabled:t,isFocusable:l,clickOnEnter:a=!0,clickOnSpace:s=!0,onMouseDown:c,onMouseUp:d,onClick:f,onKeyDown:m,onKeyUp:v,tabIndex:p,onMouseOver:h,onMouseLeave:b,...x}=e,[y,E]=(0,r.useState)(!0),[C,g]=(0,r.useState)(!1),k=function(){let e=(0,r.useRef)(new Map),n=e.current,t=(0,r.useCallback)((n,t,r,i)=>{e.current.set(r,{type:t,el:n,options:i}),n.addEventListener(t,r,i)},[]),i=(0,r.useCallback)((n,t,r,i)=>{n.removeEventListener(t,r,i),e.current.delete(r)},[]);return(0,r.useEffect)(()=>()=>{n.forEach((e,n)=>{i(e.el,e.type,n,e.options)})},[i,n]),{add:t,remove:i}}(),N=e=>{e&&"BUTTON"!==e.tagName&&E(!1)},w=t&&!l,_=(0,r.useCallback)(e=>{if(t){e.stopPropagation(),e.preventDefault();return}let n=e.currentTarget;n.focus(),null==f||f(e)},[t,f]),D=(0,r.useCallback)(e=>{C&&o(e)&&(e.preventDefault(),e.stopPropagation(),g(!1),k.remove(document,"keyup",D,!1))},[C,k]),I=(0,r.useCallback)(e=>{if(null==m||m(e),t||e.defaultPrevented||e.metaKey||!o(e.nativeEvent)||y)return;let n=a&&"Enter"===e.key,r=s&&" "===e.key;if(r&&(e.preventDefault(),g(!0)),n){e.preventDefault();let n=e.currentTarget;n.click()}k.add(document,"keyup",D,!1)},[t,y,m,a,s,k,D]),O=(0,r.useCallback)(e=>{if(null==v||v(e),t||e.defaultPrevented||e.metaKey||!o(e.nativeEvent)||y)return;let n=s&&" "===e.key;if(n){e.preventDefault(),g(!1);let n=e.currentTarget;n.click()}},[s,y,t,v]),M=(0,r.useCallback)(e=>{0===e.button&&(g(!1),k.remove(document,"mouseup",M,!1))},[k]),S=(0,r.useCallback)(e=>{if(0!==e.button)return;if(t){e.stopPropagation(),e.preventDefault();return}y||g(!0);let n=e.currentTarget;n.focus({preventScroll:!0}),k.add(document,"mouseup",M,!1),null==c||c(e)},[t,y,c,k,M]),T=(0,r.useCallback)(e=>{0===e.button&&(y||g(!1),null==d||d(e))},[d,y]),P=(0,r.useCallback)(e=>{if(t){e.preventDefault();return}null==h||h(e)},[t,h]),j=(0,r.useCallback)(e=>{C&&(e.preventDefault(),g(!1)),null==b||b(e)},[C,b]),A=(0,u.lq)(n,N);return y?{...x,ref:A,type:"button","aria-disabled":w?void 0:t,disabled:w,onClick:_,onMouseDown:c,onMouseUp:d,onKeyUp:v,onKeyDown:m,onMouseOver:h,onMouseLeave:b}:{...x,ref:A,role:"button","data-active":(0,i.PB)(C),"aria-disabled":t?"true":void 0,tabIndex:w?void 0:y?p:p||0,onClick:_,onMouseDown:S,onMouseUp:T,onKeyUp:O,onKeyDown:I,onMouseOver:P,onMouseLeave:j}}},73614:function(e,n,t){t.d(n,{n:function(){return x}});var r=t(67294),i=Object.defineProperty,u=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,o=(e,n,t)=>(u(e,"symbol"!=typeof n?n+"":n,t),t);function l(e){return e.sort((e,n)=>{let t=e.compareDocumentPosition(n);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return -1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(!(t&Node.DOCUMENT_POSITION_DISCONNECTED)&&!(t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC))return 0;throw Error("Cannot sort the given nodes.")})}var a=e=>"object"==typeof e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function s(e,n,t){let r=e+1;return t&&r>=n&&(r=0),r}function c(e,n,t){let r=e-1;return t&&r<0&&(r=n),r}var d="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,f=e=>e,m=class{constructor(){o(this,"descendants",new Map),o(this,"register",e=>{if(null!=e)return a(e)?this.registerNode(e):n=>{this.registerNode(n,e)}}),o(this,"unregister",e=>{this.descendants.delete(e);let n=l(Array.from(this.descendants.keys()));this.assignIndex(n)}),o(this,"destroy",()=>{this.descendants.clear()}),o(this,"assignIndex",e=>{this.descendants.forEach(n=>{let t=e.indexOf(n.node);n.index=t,n.node.dataset.index=n.index.toString()})}),o(this,"count",()=>this.descendants.size),o(this,"enabledCount",()=>this.enabledValues().length),o(this,"values",()=>{let e=Array.from(this.descendants.values());return e.sort((e,n)=>e.index-n.index)}),o(this,"enabledValues",()=>this.values().filter(e=>!e.disabled)),o(this,"item",e=>{if(0!==this.count())return this.values()[e]}),o(this,"enabledItem",e=>{if(0!==this.enabledCount())return this.enabledValues()[e]}),o(this,"first",()=>this.item(0)),o(this,"firstEnabled",()=>this.enabledItem(0)),o(this,"last",()=>this.item(this.descendants.size-1)),o(this,"lastEnabled",()=>{let e=this.enabledValues().length-1;return this.enabledItem(e)}),o(this,"indexOf",e=>{var n,t;return e&&null!=(t=null==(n=this.descendants.get(e))?void 0:n.index)?t:-1}),o(this,"enabledIndexOf",e=>null==e?-1:this.enabledValues().findIndex(n=>n.node.isSameNode(e))),o(this,"next",(e,n=!0)=>{let t=s(e,this.count(),n);return this.item(t)}),o(this,"nextEnabled",(e,n=!0)=>{let t=this.item(e);if(!t)return;let r=this.enabledIndexOf(t.node),i=s(r,this.enabledCount(),n);return this.enabledItem(i)}),o(this,"prev",(e,n=!0)=>{let t=c(e,this.count()-1,n);return this.item(t)}),o(this,"prevEnabled",(e,n=!0)=>{let t=this.item(e);if(!t)return;let r=this.enabledIndexOf(t.node),i=c(r,this.enabledCount()-1,n);return this.enabledItem(i)}),o(this,"registerNode",(e,n)=>{if(!e||this.descendants.has(e))return;let t=Array.from(this.descendants.keys()).concat(e),r=l(t);(null==n?void 0:n.disabled)&&(n.disabled=!!n.disabled);let i={node:e,index:-1,...n};this.descendants.set(e,i),this.assignIndex(r)})}},v=t(55227),p=t(81103),[h,b]=(0,v.k)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});function x(){let e=f(h),n=()=>f(b()),t=e=>(function(e){let n=b(),[t,i]=(0,r.useState)(-1),u=(0,r.useRef)(null);d(()=>()=>{u.current&&n.unregister(u.current)},[]),d(()=>{if(!u.current)return;let e=Number(u.current.dataset.index);t==e||Number.isNaN(e)||i(e)});let o=e?f(n.register(e)):f(n.register);return{descendants:n,index:t,enabledIndex:n.enabledIndexOf(u.current),register:(0,p.lq)(o,u)}})(e),i=()=>(function(){let e=(0,r.useRef)(new m);return d(()=>()=>e.current.destroy()),e.current})();return[e,n,i,t]}},59136:function(e,n,t){t.d(n,{EB:function(){return o},Wq:function(){return l}});var r=t(61735),i=e=>e.hasAttribute("tabindex"),u=e=>i(e)&&-1===e.tabIndex;function o(e){var n;if(!(0,r.Re)(e)||function e(n){return!!(n.parentElement&&e(n.parentElement))||n.hidden}(e)||!0===Boolean((n=e).getAttribute("disabled"))||!0===Boolean(n.getAttribute("aria-disabled")))return!1;let{localName:t}=e;if(["input","select","textarea","button"].indexOf(t)>=0)return!0;let u={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return t in u?u[t]():!!function(e){let n=e.getAttribute("contenteditable");return"false"!==n&&null!=n}(e)||i(e)}function l(e){return!!e&&(0,r.Re)(e)&&o(e)&&!u(e)}},42657:function(e,n,t){t.d(n,{t5:function(){return u}});var r=t(59136),i=e=>e.offsetWidth>0&&e.offsetHeight>0;function u(e){let n=Array.from(e.querySelectorAll("input:not(:disabled):not([disabled]),select:not(:disabled):not([disabled]),textarea:not(:disabled):not([disabled]),embed,iframe,object,a[href],area[href],button:not(:disabled):not([disabled]),[tabindex],audio[controls],video[controls],*[tabindex]:not([aria-disabled]),*[contenteditable]"));return n.unshift(e),n.filter(e=>(0,r.EB)(e)&&i(e))}},41689:function(e,n,t){t.d(n,{C:function(){return s}});var r=t(35059),i=t(91639),u=t(33179),o=t(82504),l=t(25432),a=t(85893),s=(0,r.G)(function(e,n){let t=(0,i.mq)("Badge",e),{className:r,...s}=(0,u.Lr)(e);return(0,a.jsx)(o.m.span,{ref:n,className:(0,l.cx)("chakra-badge",e.className),...s,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...t}})});s.displayName="Badge"},92625:function(e,n,t){t.d(n,{k:function(){return r}});function r(e){let{wasSelected:n,enabled:t,isSelected:r,mode:i="unmount"}=e;return!t||!!r||"keepMounted"===i&&!!n}},66303:function(e,n,t){t.d(n,{j:function(){return c}});var r=t(36953),i=t(15900),u=t(35059),o=t(82504),l=t(25432),a=t(85893),s=(0,u.G)((e,n)=>{let t=(0,r.x)();return(0,a.jsx)(o.m.button,{ref:n,...e,__css:{display:"inline-flex",appearance:"none",alignItems:"center",outline:0,...t.button}})}),c=(0,u.G)((e,n)=>{let{children:t,as:r,...u}=e,c=(0,i.zZ)(u,n);return(0,a.jsx)(r||s,{...c,className:(0,l.cx)("chakra-menu__menu-button",e.className),children:(0,a.jsx)(o.m.span,{__css:{pointerEvents:"none",flex:"1 1 auto",minW:0},children:e.children})})});c.displayName="MenuButton"},15900:function(e,n,t){t.d(n,{wN:function(){return x},Kb:function(){return g},H9:function(){return _},zZ:function(){return D},Xh:function(){return k},iX:function(){return S},_l:function(){return O},Qh:function(){return M}});var r=t(67294),i=t(67562),u=t(73614),o=t(32654),l=t(31054),a=t(85075),s=t(35155);function c(e,n){var t;let r=e.target;if(r){let e=d(r);if(!e.contains(r))return!1}return!(null==(t=n.current)?void 0:t.contains(r))}function d(e){var n;return null!=(n=null==e?void 0:e.ownerDocument)?n:document}var f=t(93694),m=t(55227),v=t(52366),p=t(81103),h=t(25432),b=t(92625),[x,y,E,C]=(0,u.n)(),[g,k]=(0,m.k)({strict:!1,name:"MenuContext"});function N(e){var n;return null!=(n=null==e?void 0:e.ownerDocument)?n:document}function w(e){let n=N(e);return n.activeElement===e}function _(e={}){let{id:n,closeOnSelect:t=!0,closeOnBlur:i=!0,initialFocusRef:u,autoSelect:m=!0,isLazy:p,isOpen:h,defaultIsOpen:b,onClose:x,onOpen:y,placement:C="bottom-start",lazyBehavior:g="unmount",direction:k,computePositionOnMount:w=!1,..._}=e,D=(0,r.useRef)(null),I=(0,r.useRef)(null),O=E(),M=(0,r.useCallback)(()=>{requestAnimationFrame(()=>{var e;null==(e=D.current)||e.focus({preventScroll:!1})})},[]),S=(0,r.useCallback)(()=>{let e=setTimeout(()=>{var e;if(u)null==(e=u.current)||e.focus();else{let e=O.firstEnabled();e&&U(e.index)}});W.current.add(e)},[O,u]),T=(0,r.useCallback)(()=>{let e=setTimeout(()=>{let e=O.lastEnabled();e&&U(e.index)});W.current.add(e)},[O]),P=(0,r.useCallback)(()=>{null==y||y(),m?S():M()},[m,S,M,y]),{isOpen:j,onOpen:A,onClose:L,onToggle:R}=(0,a.q)({isOpen:h,defaultIsOpen:b,onClose:x,onOpen:P});!function(e){let{ref:n,handler:t,enabled:i=!0}=e,u=(0,s.W)(t),o=(0,r.useRef)({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),l=o.current;(0,r.useEffect)(()=>{if(!i)return;let e=e=>{c(e,n)&&(l.isPointerDown=!0)},r=e=>{if(l.ignoreEmulatedMouseEvents){l.ignoreEmulatedMouseEvents=!1;return}l.isPointerDown&&t&&c(e,n)&&(l.isPointerDown=!1,u(e))},o=e=>{l.ignoreEmulatedMouseEvents=!0,t&&l.isPointerDown&&c(e,n)&&(l.isPointerDown=!1,u(e))},a=d(n.current);return a.addEventListener("mousedown",e,!0),a.addEventListener("mouseup",r,!0),a.addEventListener("touchstart",e,!0),a.addEventListener("touchend",o,!0),()=>{a.removeEventListener("mousedown",e,!0),a.removeEventListener("mouseup",r,!0),a.removeEventListener("touchstart",e,!0),a.removeEventListener("touchend",o,!0)}},[t,n,u,l,i])}({enabled:j&&i,ref:D,handler:e=>{var n;(null==(n=I.current)?void 0:n.contains(e.target))||L()}});let q=(0,l.D)({..._,enabled:j||w,placement:C,direction:k}),[F,U]=(0,r.useState)(-1);(0,v.r)(()=>{j||U(-1)},[j]),(0,o.C)(D,{focusRef:I,visible:j,shouldFocus:!0});let B=(0,f.h)({isOpen:j,ref:D}),[G,K]=function(e,...n){let t=(0,r.useId)(),i=e||t;return(0,r.useMemo)(()=>n.map(e=>`${e}-${i}`),[i,n])}(n,"menu-button","menu-list"),z=(0,r.useCallback)(()=>{A(),M()},[A,M]),W=(0,r.useRef)(new Set([]));!function(e,n=[]){(0,r.useEffect)(()=>()=>e(),n)}(()=>{W.current.forEach(e=>clearTimeout(e)),W.current.clear()});let $=(0,r.useCallback)(()=>{A(),S()},[S,A]),V=(0,r.useCallback)(()=>{A(),T()},[A,T]),H=(0,r.useCallback)(()=>{var e,n;let t=N(D.current),r=null==(e=D.current)?void 0:e.contains(t.activeElement);if(!(j&&!r))return;let i=null==(n=O.item(F))?void 0:n.node;null==i||i.focus()},[j,F,O]),X=(0,r.useRef)(null);return{openAndFocusMenu:z,openAndFocusFirstItem:$,openAndFocusLastItem:V,onTransitionEnd:H,unstable__animationState:B,descendants:O,popper:q,buttonId:G,menuId:K,forceUpdate:q.forceUpdate,orientation:"vertical",isOpen:j,onToggle:R,onOpen:A,onClose:L,menuRef:D,buttonRef:I,focusedIndex:F,closeOnSelect:t,closeOnBlur:i,autoSelect:m,setFocusedIndex:U,isLazy:p,lazyBehavior:g,initialFocusRef:u,rafId:X}}function D(e={},n=null){let t=k(),{onToggle:i,popper:u,openAndFocusFirstItem:o,openAndFocusLastItem:l}=t,a=(0,r.useCallback)(e=>{let n=e.key,t={Enter:o,ArrowDown:o,ArrowUp:l}[n];t&&(e.preventDefault(),e.stopPropagation(),t(e))},[o,l]);return{...e,ref:(0,p.lq)(t.buttonRef,n,u.referenceRef),id:t.buttonId,"data-active":(0,h.PB)(t.isOpen),"aria-expanded":t.isOpen,"aria-haspopup":"menu","aria-controls":t.menuId,onClick:(0,h.v0)(e.onClick,i),onKeyDown:(0,h.v0)(e.onKeyDown,a)}}function I(e){var n;return function(e){var n;if(!(null!=e&&"object"==typeof e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE))return!1;let t=null!=(n=e.ownerDocument.defaultView)?n:window;return e instanceof t.HTMLElement}(e)&&!!(null==(n=null==e?void 0:e.getAttribute("role"))?void 0:n.startsWith("menuitem"))}function O(e={},n=null){let t=k();if(!t)throw Error("useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>");let{focusedIndex:i,setFocusedIndex:u,menuRef:o,isOpen:l,onClose:a,menuId:s,isLazy:c,lazyBehavior:d,unstable__animationState:f}=t,m=y(),v=function(e={}){let{timeout:n=300,preventDefault:t=()=>!0}=e,[i,u]=(0,r.useState)([]),o=(0,r.useRef)(),l=()=>{o.current&&(clearTimeout(o.current),o.current=null)},a=()=>{l(),o.current=setTimeout(()=>{u([]),o.current=null},n)};return(0,r.useEffect)(()=>l,[]),function(e){return n=>{if("Backspace"===n.key){let e=[...i];e.pop(),u(e);return}if(function(e){let{key:n}=e;return 1===n.length||n.length>1&&/[^a-zA-Z0-9]/.test(n)}(n)){let r=i.concat(n.key);t(n)&&(n.preventDefault(),n.stopPropagation()),u(r),e(r.join("")),a()}}}}({preventDefault:e=>" "!==e.key&&I(e.target)}),x=(0,r.useCallback)(e=>{if(!e.currentTarget.contains(e.target))return;let n=e.key,t={Tab:e=>e.preventDefault(),Escape:a,ArrowDown:()=>{let e=m.nextEnabled(i);e&&u(e.index)},ArrowUp:()=>{let e=m.prevEnabled(i);e&&u(e.index)}}[n];if(t){e.preventDefault(),t(e);return}let r=v(e=>{let n=function(e,n,t,r){if(null==n)return r;if(!r){let r=e.find(e=>t(e).toLowerCase().startsWith(n.toLowerCase()));return r}let i=e.filter(e=>t(e).toLowerCase().startsWith(n.toLowerCase()));if(i.length>0){let n;if(i.includes(r)){let e=i.indexOf(r);return(n=e+1)===i.length&&(n=0),i[n]}return n=e.indexOf(i[0]),e[n]}return r}(m.values(),e,e=>{var n,t;return null!=(t=null==(n=null==e?void 0:e.node)?void 0:n.textContent)?t:""},m.item(i));if(n){let e=m.indexOf(n.node);u(e)}});I(e.target)&&r(e)},[m,i,v,a,u]),E=(0,r.useRef)(!1);l&&(E.current=!0);let C=(0,b.k)({wasSelected:E.current,enabled:c,mode:d,isSelected:f.present});return{...e,ref:(0,p.lq)(o,n),children:C?e.children:null,tabIndex:-1,role:"menu",id:s,style:{...e.style,transformOrigin:"var(--popper-transform-origin)"},"aria-orientation":"vertical",onKeyDown:(0,h.v0)(e.onKeyDown,x)}}function M(e={}){let{popper:n,isOpen:t}=k();return n.getPopperProps({...e,style:{visibility:t?"visible":"hidden",...e.style}})}function S(e={},n=null){let{onMouseEnter:t,onMouseMove:u,onMouseLeave:o,onClick:l,onFocus:a,isDisabled:s,isFocusable:c,closeOnSelect:d,type:f,...m}=e,h=k(),{setFocusedIndex:b,focusedIndex:x,closeOnSelect:y,onClose:E,menuRef:g,isOpen:N,menuId:_,rafId:D}=h,O=(0,r.useRef)(null),M=`${_}-menuitem-${(0,r.useId)()}`,{index:S,register:T}=C({disabled:s&&!c}),P=(0,r.useCallback)(e=>{null==t||t(e),s||b(S)},[b,S,s,t]),j=(0,r.useCallback)(e=>{null==u||u(e),O.current&&!w(O.current)&&P(e)},[P,u]),A=(0,r.useCallback)(e=>{null==o||o(e),s||b(-1)},[b,s,o]),L=(0,r.useCallback)(e=>{null==l||l(e),I(e.currentTarget)&&(null!=d?d:y)&&E()},[E,l,y,d]),R=(0,r.useCallback)(e=>{null==a||a(e),b(S)},[b,a,S]),q=S===x,F=s&&!c;(0,v.r)(()=>{N&&(q&&!F&&O.current?(D.current&&cancelAnimationFrame(D.current),D.current=requestAnimationFrame(()=>{var e;null==(e=O.current)||e.focus(),D.current=null})):g.current&&!w(g.current)&&g.current.focus({preventScroll:!0}))},[q,F,g,N]);let U=(0,i.h)({onClick:L,onFocus:R,onMouseEnter:P,onMouseMove:j,onMouseLeave:A,ref:(0,p.lq)(T,O,n),isDisabled:s,isFocusable:c});return{...m,...U,type:null!=f?f:U.type,id:M,role:"menuitem",tabIndex:q?0:-1}}},41335:function(e,n,t){t.d(n,{R:function(){return l}});var r=t(36953),i=t(82504),u=t(25432),o=t(85893),l=e=>{let{className:n,...t}=e,l=(0,r.x)();return(0,o.jsx)(i.m.hr,{"aria-orientation":"horizontal",className:(0,u.cx)("chakra-menu__divider",n),...t,__css:l.divider})};l.displayName="MenuDivider"},46887:function(e,n,t){t.d(n,{q:function(){return f}});var r=t(36953),i=t(15900),u=t(25432),o=t(82504),l=t(35059),a=t(51615),s=t(85893),c={enter:{visibility:"visible",opacity:1,scale:1,transition:{duration:.2,ease:[.4,0,.2,1]}},exit:{transitionEnd:{visibility:"hidden"},opacity:0,scale:.8,transition:{duration:.1,easings:"easeOut"}}},d=(0,o.m)(a.E.div),f=(0,l.G)(function(e,n){var t,l;let{rootProps:a,motionProps:f,...m}=e,{isOpen:v,onTransitionEnd:p,unstable__animationState:h}=(0,i.Xh)(),b=(0,i._l)(m,n),x=(0,i.Qh)(a),y=(0,r.x)();return(0,s.jsx)(o.m.div,{...x,__css:{zIndex:null!=(l=e.zIndex)?l:null==(t=y.list)?void 0:t.zIndex},children:(0,s.jsx)(d,{variants:c,initial:!1,animate:v?"enter":"exit",__css:{outline:0,...y.list},...f,className:(0,u.cx)("chakra-menu__menu-list",b.className),...b,onUpdate:p,onAnimationComplete:(0,u.PP)(h.onComplete,b.onAnimationComplete)})})});f.displayName="MenuList"},36953:function(e,n,t){t.d(n,{v:function(){return m},x:function(){return f}});var r=t(15900),i=t(55227),u=t(91639),o=t(33179),l=t(75119),a=t(25432),s=t(67294),c=t(85893),[d,f]=(0,i.k)({name:"MenuStylesContext",errorMessage:"useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Menu />\" "}),m=e=>{let{children:n}=e,t=(0,u.jC)("Menu",e),i=(0,o.Lr)(e),{direction:f}=(0,l.F)(),{descendants:m,...v}=(0,r.H9)({...i,direction:f}),p=(0,s.useMemo)(()=>v,[v]),{isOpen:h,onClose:b,forceUpdate:x}=p;return(0,c.jsx)(r.wN,{value:m,children:(0,c.jsx)(r.Kb,{value:p,children:(0,c.jsx)(d,{value:t,children:(0,a.Pu)(n,{isOpen:h,onClose:b,forceUpdate:x})})})})};m.displayName="Menu"},40989:function(e,n,t){t.d(n,{s:function(){return m}});var r=t(36953),i=t(35059),u=t(82504),o=t(85893),l=(0,i.G)((e,n)=>{let t=(0,r.x)();return(0,o.jsx)(u.m.span,{ref:n,...e,__css:t.command,className:"chakra-menu__command"})});l.displayName="MenuCommand";var a=t(67294),s=(0,i.G)((e,n)=>{let{type:t,...i}=e,l=(0,r.x)(),s=i.as||t?null!=t?t:void 0:"button",c=(0,a.useMemo)(()=>({textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,...l.item}),[l.item]);return(0,o.jsx)(u.m.button,{ref:n,type:s,...i,__css:c})}),c=t(15900),d=t(25432),f=e=>{let{className:n,children:t,...r}=e,i=a.Children.only(t),l=(0,a.isValidElement)(i)?(0,a.cloneElement)(i,{focusable:"false","aria-hidden":!0,className:(0,d.cx)("chakra-menu__icon",i.props.className)}):null,s=(0,d.cx)("chakra-menu__icon-wrapper",n);return(0,o.jsx)(u.m.span,{className:s,...r,__css:{display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l})};f.displayName="MenuIcon";var m=(0,i.G)((e,n)=>{let{icon:t,iconSpacing:r="0.75rem",command:i,commandSpacing:u="0.75rem",children:a,...m}=e,v=(0,c.iX)(m,n),p=t||i?(0,o.jsx)("span",{style:{pointerEvents:"none",flex:1},children:a}):a;return(0,o.jsxs)(s,{...v,className:(0,d.cx)("chakra-menu__menuitem",v.className),children:[t&&(0,o.jsx)(f,{fontSize:"0.8em",marginEnd:r,children:t}),p,i&&(0,o.jsx)(l,{marginStart:u,children:i})]})});m.displayName="MenuItem"},53948:function(e,n,t){t.d(n,{x:function(){return u}});var r=t(6560),i=t(67294);function u(e){let n=i.Children.only(e.children),{getTriggerProps:t}=(0,r.lp)();return(0,i.cloneElement)(n,t(n.props,n.ref))}u.displayName="PopoverTrigger"},89076:function(e,n,t){t.d(n,{J:function(){return _}});var r=t(93694),i=t(57134),u=()=>"undefined"!=typeof window,o=e=>u()&&e.test(navigator.vendor),l=e=>u()&&e.test(function(){var e;let n=navigator.userAgentData;return null!=(e=null==n?void 0:n.platform)?e:navigator.platform}()),a=()=>l(/mac|iphone|ipad|ipod/i),s=()=>a()&&o(/apple/i),c=t(32654),d=t(85075),f=t(31054),m=t(68795),v=t(81103),p=t(25432),h=t(92625),b=t(67294),x={click:"click",hover:"hover"};function y(e,n){return e===n||(null==e?void 0:e.contains(n))}function E(e){var n;let t=e.currentTarget.ownerDocument.activeElement;return null!=(n=e.relatedTarget)?n:t}var C=t(6560),g=t(91639),k=t(33179),N=t(75119),w=t(85893);function _(e){let n=(0,g.jC)("Popover",e),{children:t,...u}=(0,k.Lr)(e),o=(0,N.F)(),l=function(e={}){let{closeOnBlur:n=!0,closeOnEsc:t=!0,initialFocusRef:u,id:o,returnFocusOnClose:l=!0,autoFocus:a=!0,arrowSize:C,arrowShadowColor:g,trigger:k=x.click,openDelay:N=200,closeDelay:w=200,isLazy:_,lazyBehavior:D="unmount",computePositionOnMount:I,...O}=e,{isOpen:M,onClose:S,onOpen:T,onToggle:P}=(0,d.q)(e),j=(0,b.useRef)(null),A=(0,b.useRef)(null),L=(0,b.useRef)(null),R=(0,b.useRef)(!1),q=(0,b.useRef)(!1);M&&(q.current=!0);let[F,U]=(0,b.useState)(!1),[B,G]=(0,b.useState)(!1),K=(0,b.useId)(),z=null!=o?o:K,[W,$,V,H]=["popover-trigger","popover-content","popover-header","popover-body"].map(e=>`${e}-${z}`),{referenceRef:X,getArrowProps:Z,getPopperProps:Y,getArrowInnerProps:Q,forceUpdate:J}=(0,f.D)({...O,enabled:M||!!I}),ee=(0,r.h)({isOpen:M,ref:L});!function(e){let{ref:n,elements:t,enabled:r}=e,u=()=>{var e,t;return null!=(t=null==(e=n.current)?void 0:e.ownerDocument)?t:document};(0,i.O)(u,"pointerdown",e=>{if(!s()||!r)return;let i=e.target,o=(null!=t?t:[n]).some(e=>{let n="current"in e?e.current:e;return(null==n?void 0:n.contains(i))||n===i});u().activeElement!==i&&o&&(e.preventDefault(),i.focus())})}({enabled:M,ref:A}),(0,c.C)(L,{focusRef:A,visible:M,shouldFocus:l&&k===x.click}),(0,c.G)(L,{focusRef:u,visible:M,shouldFocus:a&&k===x.click});let en=(0,h.k)({wasSelected:q.current,enabled:_,mode:D,isSelected:ee.present}),et=(0,b.useCallback)((e={},r=null)=>{let i={...e,style:{...e.style,transformOrigin:m.Dq.transformOrigin.varRef,[m.Dq.arrowSize.var]:C?`${C}px`:void 0,[m.Dq.arrowShadowColor.var]:g},ref:(0,v.lq)(L,r),children:en?e.children:null,id:$,tabIndex:-1,role:"dialog",onKeyDown:(0,p.v0)(e.onKeyDown,e=>{t&&"Escape"===e.key&&S()}),onBlur:(0,p.v0)(e.onBlur,e=>{let t=E(e),r=y(L.current,t),i=y(A.current,t);M&&n&&!r&&!i&&S()}),"aria-labelledby":F?V:void 0,"aria-describedby":B?H:void 0};return k===x.hover&&(i.role="tooltip",i.onMouseEnter=(0,p.v0)(e.onMouseEnter,()=>{R.current=!0}),i.onMouseLeave=(0,p.v0)(e.onMouseLeave,e=>{null!==e.nativeEvent.relatedTarget&&(R.current=!1,setTimeout(()=>S(),w))})),i},[en,$,F,V,B,H,k,t,S,M,n,w,g,C]),er=(0,b.useCallback)((e={},n=null)=>Y({...e,style:{visibility:M?"visible":"hidden",...e.style}},n),[M,Y]),ei=(0,b.useCallback)((e,n=null)=>({...e,ref:(0,v.lq)(n,j,X)}),[j,X]),eu=(0,b.useRef)(),eo=(0,b.useRef)(),el=(0,b.useCallback)(e=>{null==j.current&&X(e)},[X]),ea=(0,b.useCallback)((e={},t=null)=>{let r={...e,ref:(0,v.lq)(A,t,el),id:W,"aria-haspopup":"dialog","aria-expanded":M,"aria-controls":$};return k===x.click&&(r.onClick=(0,p.v0)(e.onClick,P)),k===x.hover&&(r.onFocus=(0,p.v0)(e.onFocus,()=>{void 0===eu.current&&T()}),r.onBlur=(0,p.v0)(e.onBlur,e=>{let t=E(e),r=!y(L.current,t);M&&n&&r&&S()}),r.onKeyDown=(0,p.v0)(e.onKeyDown,e=>{"Escape"===e.key&&S()}),r.onMouseEnter=(0,p.v0)(e.onMouseEnter,()=>{R.current=!0,eu.current=window.setTimeout(()=>T(),N)}),r.onMouseLeave=(0,p.v0)(e.onMouseLeave,()=>{R.current=!1,eu.current&&(clearTimeout(eu.current),eu.current=void 0),eo.current=window.setTimeout(()=>{!1===R.current&&S()},w)})),r},[W,M,$,k,el,P,T,n,S,N,w]);(0,b.useEffect)(()=>()=>{eu.current&&clearTimeout(eu.current),eo.current&&clearTimeout(eo.current)},[]);let es=(0,b.useCallback)((e={},n=null)=>({...e,id:V,ref:(0,v.lq)(n,e=>{U(!!e)})}),[V]),ec=(0,b.useCallback)((e={},n=null)=>({...e,id:H,ref:(0,v.lq)(n,e=>{G(!!e)})}),[H]);return{forceUpdate:J,isOpen:M,onAnimationComplete:ee.onComplete,onClose:S,getAnchorProps:ei,getArrowProps:Z,getArrowInnerProps:Q,getPopoverPositionerProps:er,getPopoverProps:et,getTriggerProps:ea,getHeaderProps:es,getBodyProps:ec}}({...u,direction:o.direction});return(0,w.jsx)(C.H2,{value:l,children:(0,w.jsx)(C.WG,{value:n,children:(0,p.Pu)(t,{isOpen:l.isOpen,onClose:l.onClose,forceUpdate:l.forceUpdate})})})}_.displayName="Popover"},6560:function(e,n,t){t.d(n,{H2:function(){return i},SV:function(){return l},WG:function(){return o},lp:function(){return u}});var r=t(55227),[i,u]=(0,r.k)({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"}),[o,l]=(0,r.k)({name:"PopoverStylesContext",errorMessage:"usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Popover />\" "})},44416:function(e,n,t){t.d(n,{y:function(){return f}});var r=t(6560),i=t(82504),u=t(35059),o=t(51615),l=t(85893),a={exit:{opacity:0,scale:.95,transition:{duration:.1,ease:[.4,0,1,1]}},enter:{scale:1,opacity:1,transition:{duration:.15,ease:[0,0,.2,1]}}},s=(0,i.m)(o.E.section),c=(0,u.G)(function(e,n){let{variants:t=a,...i}=e,{isOpen:u}=(0,r.lp)();return(0,l.jsx)(s,{ref:n,variants:function(e){if(e)return{enter:{...e.enter,visibility:"visible"},exit:{...e.exit,transitionEnd:{visibility:"hidden"}}}}(t),initial:!1,animate:u?"enter":"exit",...i})});c.displayName="PopoverTransition";var d=t(25432),f=(0,u.G)(function(e,n){let{rootProps:t,motionProps:u,...o}=e,{getPopoverProps:a,getPopoverPositionerProps:s,onAnimationComplete:f}=(0,r.lp)(),m=(0,r.SV)(),v={position:"relative",display:"flex",flexDirection:"column",...m.content};return(0,l.jsx)(i.m.div,{...s(t),__css:m.popper,className:"chakra-popover__popper",children:(0,l.jsx)(c,{...u,...a(o,n),onAnimationComplete:(0,d.PP)(f,o.onAnimationComplete),className:(0,d.cx)("chakra-popover__content",e.className),__css:v})})});f.displayName="PopoverContent"},93694:function(e,n,t){t.d(n,{h:function(){return o}});var r=t(67294),i=t(57134),u=t(61735);function o(e){let{isOpen:n,ref:t}=e,[o,l]=(0,r.useState)(n),[a,s]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{a||(l(n),s(!0))},[n,a,o]),(0,i.O)(()=>t.current,"animationend",()=>{l(n)}),{present:!(!n&&!o),onComplete(){var e;let n=(0,u.kR)(t.current),r=new n.CustomEvent("animationend",{bubbles:!0});null==(e=t.current)||e.dispatchEvent(r)}}}},32654:function(e,n,t){t.d(n,{C:function(){return c},G:function(){return f}});var r=t(61735),i=t(59136),u=t(42657),o=t(57134),l=t(26245),a=t(52366),s=t(67294);function c(e,n){let{shouldFocus:t,visible:u,focusRef:o}=n,l=t&&!u;(0,a.r)(()=>{let n;if(!l||function(e){let n=e.current;if(!n)return!1;let t=(0,r.vY)(n);return!(!t||n.contains(t))&&!!(0,i.Wq)(t)}(e))return;let t=(null==o?void 0:o.current)||e.current;if(t)return n=requestAnimationFrame(()=>{t.focus({preventScroll:!0})}),()=>{cancelAnimationFrame(n)}},[l,e,o])}var d={preventScroll:!0,shouldFocus:!1};function f(e,n=d){let{focusRef:t,preventScroll:r,shouldFocus:i,visible:c}=n,f="current"in e?e.current:e,m=i&&c,v=(0,s.useRef)(m),p=(0,s.useRef)(c);(0,l.G)(()=>{!p.current&&c&&(v.current=m),p.current=c},[c,m]);let h=(0,s.useCallback)(()=>{if(c&&f&&v.current&&(v.current=!1,!f.contains(document.activeElement))){if(null==t?void 0:t.current)requestAnimationFrame(()=>{var e;null==(e=t.current)||e.focus({preventScroll:r})});else{let e=(0,u.t5)(f);e.length>0&&requestAnimationFrame(()=>{e[0].focus({preventScroll:r})})}}},[c,r,f,t]);(0,a.r)(()=>{h()},[h]),(0,o.O)(f,"transitionend",h)}},99155:function(e,n,t){t.d(n,{Lj:function(){return r},Sh:function(){return i},p$:function(){return u}});var r={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},i={enter:{duration:.2,ease:r.easeOut},exit:{duration:.1,ease:r.easeIn}},u={enter:(e,n)=>({...e,delay:"number"==typeof n?n:null==n?void 0:n.enter}),exit:(e,n)=>({...e,delay:"number"==typeof n?n:null==n?void 0:n.exit})}},30333:function(e,n,t){t.d(n,{U:function(){return f}});var r=t(99155),i=t(25432),u=t(65820),o=t(51615),l=t(67294),a=t(85893),s=e=>null!=e&&parseInt(e.toString(),10)>0,c={exit:{height:{duration:.2,ease:r.Lj.ease},opacity:{duration:.3,ease:r.Lj.ease}},enter:{height:{duration:.3,ease:r.Lj.ease},opacity:{duration:.4,ease:r.Lj.ease}}},d={exit:({animateOpacity:e,startingHeight:n,transition:t,transitionEnd:i,delay:u})=>{var o;return{...e&&{opacity:s(n)?1:0},height:n,transitionEnd:null==i?void 0:i.exit,transition:null!=(o=null==t?void 0:t.exit)?o:r.p$.exit(c.exit,u)}},enter:({animateOpacity:e,endingHeight:n,transition:t,transitionEnd:i,delay:u})=>{var o;return{...e&&{opacity:1},height:n,transitionEnd:null==i?void 0:i.enter,transition:null!=(o=null==t?void 0:t.enter)?o:r.p$.enter(c.enter,u)}}},f=(0,l.forwardRef)((e,n)=>{let{in:t,unmountOnExit:r,animateOpacity:s=!0,startingHeight:c=0,endingHeight:f="auto",style:m,className:v,transition:p,transitionEnd:h,...b}=e,[x,y]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e=setTimeout(()=>{y(!0)});return()=>clearTimeout(e)},[]),(0,i.ZK)({condition:Number(c)>0&&!!r,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});let E=parseFloat(c.toString())>0,C={startingHeight:c,endingHeight:f,animateOpacity:s,transition:x?p:{enter:{duration:0}},transitionEnd:{enter:null==h?void 0:h.enter,exit:r?null==h?void 0:h.exit:{...null==h?void 0:h.exit,display:E?"block":"none"}}};return(0,a.jsx)(u.M,{initial:!1,custom:C,children:(!r||t)&&(0,a.jsx)(o.E.div,{ref:n,...b,className:(0,i.cx)("chakra-collapse",v),style:{overflow:"hidden",display:"block",...m},custom:C,variants:d,initial:!!r&&"exit",animate:t||r?"enter":"exit",exit:"exit"})})});f.displayName="Collapse"}}]);