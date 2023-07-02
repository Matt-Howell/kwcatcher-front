"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[449],{61735:function(e,t,r){function n(e){return null!=e&&"object"==typeof e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function o(e){var t;if(!n(e))return!1;let r=null!=(t=e.ownerDocument.defaultView)?t:window;return e instanceof r.HTMLElement}function i(e){var t,r;return null!=(r=null==(t=a(e))?void 0:t.defaultView)?r:window}function a(e){return n(e)?e.ownerDocument:document}function s(e){return a(e).activeElement}r.d(t,{Re:function(){return o},kR:function(){return i},vY:function(){return s}})},31054:function(e,t,r){r.d(t,{D:function(){return eD}});var n,o,i,a,s,f=r(68795),l={name:"matchWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:({state:e})=>{e.styles.popper.width=`${e.rects.reference.width}px`},effect:({state:e})=>()=>{let t=e.elements.reference;e.elements.popper.style.width=`${t.offsetWidth}px`}},p={name:"transformOrigin",enabled:!0,phase:"write",fn:({state:e})=>{c(e)},effect:({state:e})=>()=>{c(e)}},c=e=>{e.elements.popper.style.setProperty(f.Dq.transformOrigin.var,(0,f.mv)(e.placement))},u={name:"positionArrow",enabled:!0,phase:"afterWrite",fn:({state:e})=>{d(e)}},d=e=>{var t;if(!e.placement)return;let r=m(e.placement);if((null==(t=e.elements)?void 0:t.arrow)&&r){Object.assign(e.elements.arrow.style,{[r.property]:r.value,width:f.Dq.arrowSize.varRef,height:f.Dq.arrowSize.varRef,zIndex:-1});let t={[f.Dq.arrowSizeHalf.var]:`calc(${f.Dq.arrowSize.varRef} / 2 - 1px)`,[f.Dq.arrowOffset.var]:`calc(${f.Dq.arrowSizeHalf.varRef} * -1)`};for(let r in t)e.elements.arrow.style.setProperty(r,t[r])}},m=e=>e.startsWith("top")?{property:"bottom",value:f.Dq.arrowOffset.varRef}:e.startsWith("bottom")?{property:"top",value:f.Dq.arrowOffset.varRef}:e.startsWith("left")?{property:"right",value:f.Dq.arrowOffset.varRef}:e.startsWith("right")?{property:"left",value:f.Dq.arrowOffset.varRef}:void 0,h={name:"innerArrow",enabled:!0,phase:"main",requires:["arrow"],fn:({state:e})=>{v(e)},effect:({state:e})=>()=>{v(e)}},v=e=>{if(!e.elements.arrow)return;let t=e.elements.arrow.querySelector("[data-popper-arrow-inner]");if(!t)return;let r=(0,f.Ke)(e.placement);r&&t.style.setProperty("--popper-arrow-default-shadow",r),Object.assign(t.style,{transform:"rotate(45deg)",background:f.Dq.arrowBg.varRef,top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:"inherit",boxShadow:"var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"})},g={"start-start":{ltr:"left-start",rtl:"right-start"},"start-end":{ltr:"left-end",rtl:"right-end"},"end-start":{ltr:"right-start",rtl:"left-start"},"end-end":{ltr:"right-end",rtl:"left-end"},start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}},b={"auto-start":"auto-end","auto-end":"auto-start","top-start":"top-end","top-end":"top-start","bottom-start":"bottom-end","bottom-end":"bottom-start"},w=r(81103);function y(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function x(e){var t=y(e).Element;return e instanceof t||e instanceof Element}function O(e){var t=y(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function D(e){if("undefined"==typeof ShadowRoot)return!1;var t=y(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var E=Math.max,j=Math.min,k=Math.round;function W(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function R(){return!/^((?!chrome|android).)*safari/i.test(W())}function q(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var n=e.getBoundingClientRect(),o=1,i=1;t&&O(e)&&(o=e.offsetWidth>0&&k(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&k(n.height)/e.offsetHeight||1);var a=(x(e)?y(e):window).visualViewport,s=!R()&&r,f=(n.left+(s&&a?a.offsetLeft:0))/o,l=(n.top+(s&&a?a.offsetTop:0))/i,p=n.width/o,c=n.height/i;return{width:p,height:c,top:l,right:f+p,bottom:l+c,left:f,x:f,y:l}}function A(e){var t=y(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function L(e){return e?(e.nodeName||"").toLowerCase():null}function C(e){return((x(e)?e.ownerDocument:e.document)||window.document).documentElement}function P(e){return q(C(e)).left+A(e).scrollLeft}function S(e){return y(e).getComputedStyle(e)}function B(e){var t=S(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function H(e){var t=q(e),r=e.offsetWidth,n=e.offsetHeight;return 1>=Math.abs(t.width-r)&&(r=t.width),1>=Math.abs(t.height-n)&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function M(e){return"html"===L(e)?e:e.assignedSlot||e.parentNode||(D(e)?e.host:null)||C(e)}function T(e,t){void 0===t&&(t=[]);var r,n=function e(t){return["html","body","#document"].indexOf(L(t))>=0?t.ownerDocument.body:O(t)&&B(t)?t:e(M(t))}(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),i=y(n),a=o?[i].concat(i.visualViewport||[],B(n)?n:[]):n,s=t.concat(a);return o?s:s.concat(T(M(a)))}function z(e){return O(e)&&"fixed"!==S(e).position?e.offsetParent:null}function V(e){for(var t=y(e),r=z(e);r&&["table","td","th"].indexOf(L(r))>=0&&"static"===S(r).position;)r=z(r);return r&&("html"===L(r)||"body"===L(r)&&"static"===S(r).position)?t:r||function(e){var t=/firefox/i.test(W());if(/Trident/i.test(W())&&O(e)&&"fixed"===S(e).position)return null;var r=M(e);for(D(r)&&(r=r.host);O(r)&&0>["html","body"].indexOf(L(r));){var n=S(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}var N="bottom",$="right",I="left",_="auto",U=["top",N,$,I],F="start",Y="viewport",K="popper",X=U.reduce(function(e,t){return e.concat([t+"-"+F,t+"-end"])},[]),G=[].concat(U,[_]).reduce(function(e,t){return e.concat([t,t+"-"+F,t+"-end"])},[]),J=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],Q={placement:"bottom",modifiers:[],strategy:"absolute"};function Z(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var ee={passive:!0};function et(e){return e.split("-")[0]}function er(e){return e.split("-")[1]}function en(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function eo(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?et(o):null,a=o?er(o):null,s=r.x+r.width/2-n.width/2,f=r.y+r.height/2-n.height/2;switch(i){case"top":t={x:s,y:r.y-n.height};break;case N:t={x:s,y:r.y+r.height};break;case $:t={x:r.x+r.width,y:f};break;case I:t={x:r.x-n.width,y:f};break;default:t={x:r.x,y:r.y}}var l=i?en(i):null;if(null!=l){var p="y"===l?"height":"width";switch(a){case F:t[l]=t[l]-(r[p]/2-n[p]/2);break;case"end":t[l]=t[l]+(r[p]/2-n[p]/2)}}return t}var ei={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ea(e){var t,r,n,o,i,a,s,f=e.popper,l=e.popperRect,p=e.placement,c=e.variation,u=e.offsets,d=e.position,m=e.gpuAcceleration,h=e.adaptive,v=e.roundOffsets,g=e.isFixed,b=u.x,w=void 0===b?0:b,x=u.y,O=void 0===x?0:x,D="function"==typeof v?v({x:w,y:O}):{x:w,y:O};w=D.x,O=D.y;var E=u.hasOwnProperty("x"),j=u.hasOwnProperty("y"),W=I,R="top",q=window;if(h){var A=V(f),L="clientHeight",P="clientWidth";A===y(f)&&"static"!==S(A=C(f)).position&&"absolute"===d&&(L="scrollHeight",P="scrollWidth"),("top"===p||(p===I||p===$)&&"end"===c)&&(R=N,O-=(g&&A===q&&q.visualViewport?q.visualViewport.height:A[L])-l.height,O*=m?1:-1),(p===I||("top"===p||p===N)&&"end"===c)&&(W=$,w-=(g&&A===q&&q.visualViewport?q.visualViewport.width:A[P])-l.width,w*=m?1:-1)}var B=Object.assign({position:d},h&&ei),H=!0===v?(t={x:w,y:O},r=y(f),n=t.x,o=t.y,{x:k(n*(i=r.devicePixelRatio||1))/i||0,y:k(o*i)/i||0}):{x:w,y:O};return(w=H.x,O=H.y,m)?Object.assign({},B,((s={})[R]=j?"0":"",s[W]=E?"0":"",s.transform=1>=(q.devicePixelRatio||1)?"translate("+w+"px, "+O+"px)":"translate3d("+w+"px, "+O+"px, 0)",s)):Object.assign({},B,((a={})[R]=j?O+"px":"",a[W]=E?w+"px":"",a.transform="",a))}var es={left:"right",right:"left",bottom:"top",top:"bottom"};function ef(e){return e.replace(/left|right|bottom|top/g,function(e){return es[e]})}var el={start:"end",end:"start"};function ep(e){return e.replace(/start|end/g,function(e){return el[e]})}function ec(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&D(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function eu(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ed(e,t,r){var n,o,i,a,s,f,l,p,c,u;return t===Y?eu(function(e,t){var r=y(e),n=C(e),o=r.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,f=0;if(o){i=o.width,a=o.height;var l=R();(l||!l&&"fixed"===t)&&(s=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:s+P(e),y:f}}(e,r)):x(t)?((n=q(t,!1,"fixed"===r)).top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n):eu((o=C(e),a=C(o),s=A(o),f=null==(i=o.ownerDocument)?void 0:i.body,l=E(a.scrollWidth,a.clientWidth,f?f.scrollWidth:0,f?f.clientWidth:0),p=E(a.scrollHeight,a.clientHeight,f?f.scrollHeight:0,f?f.clientHeight:0),c=-s.scrollLeft+P(o),u=-s.scrollTop,"rtl"===S(f||a).direction&&(c+=E(a.clientWidth,f?f.clientWidth:0)-l),{width:l,height:p,x:c,y:u}))}function em(){return{top:0,right:0,bottom:0,left:0}}function eh(e){return Object.assign({},em(),e)}function ev(e,t){return t.reduce(function(t,r){return t[r]=e,t},{})}function eg(e,t){void 0===t&&(t={});var r,n,o,i,a,s,f,l=t,p=l.placement,c=void 0===p?e.placement:p,u=l.strategy,d=void 0===u?e.strategy:u,m=l.boundary,h=l.rootBoundary,v=l.elementContext,g=void 0===v?K:v,b=l.altBoundary,w=l.padding,y=void 0===w?0:w,D=eh("number"!=typeof y?y:ev(y,U)),k=e.rects.popper,W=e.elements[void 0!==b&&b?g===K?"reference":K:g],R=(r=x(W)?W:W.contextElement||C(e.elements.popper),s=(a=[].concat("clippingParents"===(n=void 0===m?"clippingParents":m)?(o=T(M(r)),x(i=["absolute","fixed"].indexOf(S(r).position)>=0&&O(r)?V(r):r)?o.filter(function(e){return x(e)&&ec(e,i)&&"body"!==L(e)}):[]):[].concat(n),[void 0===h?Y:h]))[0],(f=a.reduce(function(e,t){var n=ed(r,t,d);return e.top=E(n.top,e.top),e.right=j(n.right,e.right),e.bottom=j(n.bottom,e.bottom),e.left=E(n.left,e.left),e},ed(r,s,d))).width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f),A=q(e.elements.reference),P=eo({reference:A,element:k,strategy:"absolute",placement:c}),B=eu(Object.assign({},k,P)),H=g===K?B:A,z={top:R.top-H.top+D.top,bottom:H.bottom-R.bottom+D.bottom,left:R.left-H.left+D.left,right:H.right-R.right+D.right},I=e.modifiersData.offset;if(g===K&&I){var _=I[c];Object.keys(z).forEach(function(e){var t=[$,N].indexOf(e)>=0?1:-1,r=["top",N].indexOf(e)>=0?"y":"x";z[e]+=_[r]*t})}return z}function eb(e,t,r){return E(e,j(t,r))}function ew(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ey(e){return["top",$,N,I].some(function(t){return e[t]>=0})}var ex=(i=void 0===(o=(n={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=void 0===o||o,a=n.resize,s=void 0===a||a,f=y(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach(function(e){e.addEventListener("scroll",r.update,ee)}),s&&f.addEventListener("resize",r.update,ee),function(){i&&l.forEach(function(e){e.removeEventListener("scroll",r.update,ee)}),s&&f.removeEventListener("resize",r.update,ee)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=eo({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=r.adaptive,i=r.roundOffsets,a=void 0===i||i,s={placement:et(t.placement),variation:er(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===n||n,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ea(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===o||o,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ea(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];O(o)&&L(o)&&(Object.assign(o.style,r),Object.keys(n).forEach(function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce(function(e,t){return e[t]="",e},{});O(n)&&L(n)&&(Object.assign(n.style,i),Object.keys(o).forEach(function(e){n.removeAttribute(e)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=G.reduce(function(e,r){var n,o,a,s,f,l;return e[r]=(n=t.rects,a=[I,"top"].indexOf(o=et(r))>=0?-1:1,f=(s="function"==typeof i?i(Object.assign({},n,{placement:r})):i)[0],l=s[1],f=f||0,l=(l||0)*a,[I,$].indexOf(o)>=0?{x:l,y:f}:{x:f,y:l}),e},{}),s=a[t.placement],f=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0===a||a,f=r.fallbackPlacements,l=r.padding,p=r.boundary,c=r.rootBoundary,u=r.altBoundary,d=r.flipVariations,m=void 0===d||d,h=r.allowedAutoPlacements,v=t.options.placement,g=et(v),b=[v].concat(f||(g!==v&&m?function(e){if(et(e)===_)return[];var t=ef(e);return[ep(e),t,ep(t)]}(v):[ef(v)])).reduce(function(e,r){var n,o,i,a,s,f,u,d,v,g,b,w;return e.concat(et(r)===_?(o=(n={placement:r,boundary:p,rootBoundary:c,padding:l,flipVariations:m,allowedAutoPlacements:h}).placement,i=n.boundary,a=n.rootBoundary,s=n.padding,f=n.flipVariations,d=void 0===(u=n.allowedAutoPlacements)?G:u,0===(b=(g=(v=er(o))?f?X:X.filter(function(e){return er(e)===v}):U).filter(function(e){return d.indexOf(e)>=0})).length&&(b=g),Object.keys(w=b.reduce(function(e,r){return e[r]=eg(t,{placement:r,boundary:i,rootBoundary:a,padding:s})[et(r)],e},{})).sort(function(e,t){return w[e]-w[t]})):r)},[]),w=t.rects.reference,y=t.rects.popper,x=new Map,O=!0,D=b[0],E=0;E<b.length;E++){var j=b[E],k=et(j),W=er(j)===F,R=["top",N].indexOf(k)>=0,q=R?"width":"height",A=eg(t,{placement:j,boundary:p,rootBoundary:c,altBoundary:u,padding:l}),L=R?W?$:I:W?N:"top";w[q]>y[q]&&(L=ef(L));var C=ef(L),P=[];if(i&&P.push(A[k]<=0),s&&P.push(A[L]<=0,A[C]<=0),P.every(function(e){return e})){D=j,O=!1;break}x.set(j,P)}if(O)for(var S=m?3:1,B=function(e){var t=b.find(function(t){var r=x.get(t);if(r)return r.slice(0,e).every(function(e){return e})});if(t)return D=t,"break"},H=S;H>0&&"break"!==B(H);H--);t.placement!==D&&(t.modifiersData[n]._skip=!0,t.placement=D,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=r.altAxis,a=r.boundary,s=r.rootBoundary,f=r.altBoundary,l=r.padding,p=r.tether,c=void 0===p||p,u=r.tetherOffset,d=void 0===u?0:u,m=eg(t,{boundary:a,rootBoundary:s,padding:l,altBoundary:f}),h=et(t.placement),v=er(t.placement),g=!v,b=en(h),w="x"===b?"y":"x",y=t.modifiersData.popperOffsets,x=t.rects.reference,O=t.rects.popper,D="function"==typeof d?d(Object.assign({},t.rects,{placement:t.placement})):d,k="number"==typeof D?{mainAxis:D,altAxis:D}:Object.assign({mainAxis:0,altAxis:0},D),W=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,R={x:0,y:0};if(y){if(void 0===o||o){var q,A="y"===b?"top":I,L="y"===b?N:$,C="y"===b?"height":"width",P=y[b],S=P+m[A],B=P-m[L],M=c?-O[C]/2:0,T=v===F?x[C]:O[C],z=v===F?-O[C]:-x[C],_=t.elements.arrow,U=c&&_?H(_):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:em(),K=Y[A],X=Y[L],G=eb(0,x[C],U[C]),J=g?x[C]/2-M-G-K-k.mainAxis:T-G-K-k.mainAxis,Q=g?-x[C]/2+M+G+X+k.mainAxis:z+G+X+k.mainAxis,Z=t.elements.arrow&&V(t.elements.arrow),ee=Z?"y"===b?Z.clientTop||0:Z.clientLeft||0:0,eo=null!=(q=null==W?void 0:W[b])?q:0,ei=eb(c?j(S,P+J-eo-ee):S,P,c?E(B,P+Q-eo):B);y[b]=ei,R[b]=ei-P}if(void 0!==i&&i){var ea,es,ef=y[w],el="y"===w?"height":"width",ep=ef+m["x"===b?"top":I],ec=ef-m["x"===b?N:$],eu=-1!==["top",I].indexOf(h),ed=null!=(ea=null==W?void 0:W[w])?ea:0,eh=eu?ep:ef-x[el]-O[el]-ed+k.altAxis,ev=eu?ef+x[el]+O[el]-ed-k.altAxis:ec,ew=c&&eu?(es=eb(eh,ef,ev))>ev?ev:es:eb(c?eh:ep,ef,c?ev:ec);y[w]=ew,R[w]=ew-ef}t.modifiersData[n]=R}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r,n=e.state,o=e.name,i=e.options,a=n.elements.arrow,s=n.modifiersData.popperOffsets,f=et(n.placement),l=en(f),p=[I,$].indexOf(f)>=0?"height":"width";if(a&&s){var c=eh("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},n.rects,{placement:n.placement})):t)?t:ev(t,U)),u=H(a),d=n.rects.reference[p]+n.rects.reference[l]-s[l]-n.rects.popper[p],m=s[l]-n.rects.reference[l],h=V(a),v=h?"y"===l?h.clientHeight||0:h.clientWidth||0:0,g=c["y"===l?"top":I],b=v-u[p]-c["y"===l?N:$],w=v/2-u[p]/2+(d/2-m/2),y=eb(g,w,b);n.modifiersData[o]=((r={})[l]=y,r.centerOffset=y-w,r)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&ec(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=eg(t,{elementContext:"reference"}),s=eg(t,{altBoundary:!0}),f=ew(a,n),l=ew(s,o,i),p=ey(f),c=ey(l);t.modifiersData[r]={referenceClippingOffsets:f,popperEscapeOffsets:l,isReferenceHidden:p,hasPopperEscaped:c},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":c})}}]}).defaultModifiers)?[]:o,s=void 0===(a=n.defaultOptions)?Q:a,function(e,t,r){void 0===r&&(r=s);var n,o={placement:"bottom",orderedModifiers:[],options:Object.assign({},Q,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],f=!1,l={state:o,setOptions:function(r){var n,f,c,u,d,m="function"==typeof r?r(o.options):r;p(),o.options=Object.assign({},s,o.options,m),o.scrollParents={reference:x(e)?T(e):e.contextElement?T(e.contextElement):[],popper:T(t)};var h=(f=Object.keys(n=[].concat(i,o.options.modifiers).reduce(function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e},{})).map(function(e){return n[e]}),c=new Map,u=new Set,d=[],f.forEach(function(e){c.set(e.name,e)}),f.forEach(function(e){u.has(e.name)||function e(t){u.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!u.has(t)){var r=c.get(t);r&&e(r)}}),d.push(t)}(e)}),J.reduce(function(e,t){return e.concat(d.filter(function(e){return e.phase===t}))},[]));return o.orderedModifiers=h.filter(function(e){return e.enabled}),o.orderedModifiers.forEach(function(e){var t=e.name,r=e.options,n=e.effect;if("function"==typeof n){var i=n({state:o,name:t,instance:l,options:void 0===r?{}:r});a.push(i||function(){})}}),l.update()},forceUpdate:function(){if(!f){var e,t,r,n,i,a,s,p,c,u,d,m,h=o.elements,v=h.reference,g=h.popper;if(Z(v,g)){;o.rects={reference:(t=V(g),r="fixed"===o.options.strategy,n=O(t),p=O(t)&&(a=k((i=t.getBoundingClientRect()).width)/t.offsetWidth||1,s=k(i.height)/t.offsetHeight||1,1!==a||1!==s),c=C(t),u=q(v,p,r),d={scrollLeft:0,scrollTop:0},m={x:0,y:0},(n||!n&&!r)&&(("body"!==L(t)||B(c))&&(d=(e=t)!==y(e)&&O(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:A(e)),O(t)?(m=q(t,!0),m.x+=t.clientLeft,m.y+=t.clientTop):c&&(m.x=P(c))),{x:u.left+d.scrollLeft-m.x,y:u.top+d.scrollTop-m.y,width:u.width,height:u.height}),popper:H(g)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach(function(e){return o.modifiersData[e.name]=Object.assign({},e.data)});for(var b=0;b<o.orderedModifiers.length;b++){if(!0===o.reset){o.reset=!1,b=-1;continue}var w=o.orderedModifiers[b],x=w.fn,D=w.options,E=void 0===D?{}:D,j=w.name;"function"==typeof x&&(o=x({state:o,options:E,name:j,instance:l})||o)}}}},update:function(){return n||(n=new Promise(function(e){Promise.resolve().then(function(){n=void 0,e(new Promise(function(e){l.forceUpdate(),e(o)}))})})),n},destroy:function(){p(),f=!0}};if(!Z(e,t))return l;function p(){a.forEach(function(e){return e()}),a=[]}return l.setOptions(r).then(function(e){!f&&r.onFirstUpdate&&r.onFirstUpdate(e)}),l}),eO=r(67294);function eD(e={}){let{enabled:t=!0,modifiers:r,placement:n="bottom",strategy:o="absolute",arrowPadding:i=8,eventListeners:a=!0,offset:s,gutter:c=8,flip:d=!0,boundary:m="clippingParents",preventOverflow:v=!0,matchWidth:y,direction:x="ltr"}=e,O=(0,eO.useRef)(null),D=(0,eO.useRef)(null),E=(0,eO.useRef)(null),j=function(e,t="ltr"){var r,n;let o=(null==(r=g[e])?void 0:r[t])||e;return"ltr"===t?o:null!=(n=b[e])?n:o}(n,x),k=(0,eO.useRef)(()=>{}),W=(0,eO.useCallback)(()=>{var e;t&&O.current&&D.current&&(null==(e=k.current)||e.call(k),E.current=ex(O.current,D.current,{placement:j,modifiers:[h,u,p,{...l,enabled:!!y},{name:"eventListeners",...(0,f.$B)(a)},{name:"arrow",options:{padding:i}},{name:"offset",options:{offset:null!=s?s:[0,c]}},{name:"flip",enabled:!!d,options:{padding:8}},{name:"preventOverflow",enabled:!!v,options:{boundary:m}},...null!=r?r:[]],strategy:o}),E.current.forceUpdate(),k.current=E.current.destroy)},[j,t,r,y,a,i,s,c,d,v,m,o]);(0,eO.useEffect)(()=>()=>{var e;O.current||D.current||(null==(e=E.current)||e.destroy(),E.current=null)},[]);let R=(0,eO.useCallback)(e=>{O.current=e,W()},[W]),q=(0,eO.useCallback)((e={},t=null)=>({...e,ref:(0,w.lq)(R,t)}),[R]),A=(0,eO.useCallback)(e=>{D.current=e,W()},[W]),L=(0,eO.useCallback)((e={},t=null)=>({...e,ref:(0,w.lq)(A,t),style:{...e.style,position:o,minWidth:y?void 0:"max-content",inset:"0 auto auto 0"}}),[o,A,y]),C=(0,eO.useCallback)((e={},t=null)=>{let{size:r,shadowColor:n,bg:o,style:i,...a}=e;return{...a,ref:t,"data-popper-arrow":"",style:function(e){let{size:t,shadowColor:r,bg:n,style:o}=e,i={...o,position:"absolute"};return t&&(i["--popper-arrow-size"]=t),r&&(i["--popper-arrow-shadow-color"]=r),n&&(i["--popper-arrow-bg"]=n),i}(e)}},[]),P=(0,eO.useCallback)((e={},t=null)=>({...e,ref:t,"data-popper-arrow-inner":""}),[]);return{update(){var e;null==(e=E.current)||e.update()},forceUpdate(){var e;null==(e=E.current)||e.forceUpdate()},transformOrigin:f.Dq.transformOrigin.varRef,referenceRef:R,popperRef:A,getPopperProps:L,getArrowProps:C,getArrowInnerProps:P,getReferenceProps:q}}},68795:function(e,t,r){r.d(t,{$B:function(){return l},Dq:function(){return o},Ke:function(){return i},mv:function(){return s}});var n=(e,t)=>({var:e,varRef:t?`var(${e}, ${t})`:`var(${e})`}),o={arrowShadowColor:n("--popper-arrow-shadow-color"),arrowSize:n("--popper-arrow-size","8px"),arrowSizeHalf:n("--popper-arrow-size-half"),arrowBg:n("--popper-arrow-bg"),transformOrigin:n("--popper-transform-origin"),arrowOffset:n("--popper-arrow-offset")};function i(e){return e.includes("top")?"1px 1px 0px 0 var(--popper-arrow-shadow-color)":e.includes("bottom")?"-1px -1px 0px 0 var(--popper-arrow-shadow-color)":e.includes("right")?"-1px 1px 0px 0 var(--popper-arrow-shadow-color)":e.includes("left")?"1px -1px 0px 0 var(--popper-arrow-shadow-color)":void 0}var a={top:"bottom center","top-start":"bottom left","top-end":"bottom right",bottom:"top center","bottom-start":"top left","bottom-end":"top right",left:"right center","left-start":"right top","left-end":"right bottom",right:"left center","right-start":"left top","right-end":"left bottom"},s=e=>a[e],f={scroll:!0,resize:!0};function l(e){return"object"==typeof e?{enabled:!0,options:{...f,...e}}:{enabled:e,options:f}}},85075:function(e,t,r){r.d(t,{q:function(){return i}});var n=r(35155),o=r(67294);function i(e={}){let{onClose:t,onOpen:r,isOpen:i,id:a}=e,s=(0,n.W)(r),f=(0,n.W)(t),[l,p]=(0,o.useState)(e.defaultIsOpen||!1),c=void 0!==i?i:l,u=void 0!==i,d=(0,o.useId)(),m=null!=a?a:`disclosure-${d}`,h=(0,o.useCallback)(()=>{u||p(!1),null==f||f()},[u,f]),v=(0,o.useCallback)(()=>{u||p(!0),null==s||s()},[u,s]),g=(0,o.useCallback)(()=>{c?h():v()},[c,v,h]);return{isOpen:c,onOpen:v,onClose:h,onToggle:g,isControlled:u,getButtonProps:function(e={}){return{...e,"aria-expanded":c,"aria-controls":m,onClick(t){var r;null==(r=e.onClick)||r.call(e,t),g()}}},getDisclosureProps:function(e={}){return{...e,hidden:!c,id:m}}}}},57134:function(e,t,r){r.d(t,{O:function(){return i}});var n=r(67294),o=r(35155);function i(e,t,r,i){let a=(0,o.W)(r);return(0,n.useEffect)(()=>{let n="function"==typeof e?e():null!=e?e:document;if(r&&n)return n.addEventListener(t,a,i),()=>{n.removeEventListener(t,a,i)}},[t,e,i,a,r]),()=>{let r="function"==typeof e?e():null!=e?e:document;null==r||r.removeEventListener(t,a,i)}}}}]);