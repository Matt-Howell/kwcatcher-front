(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[314],{75021:function(e,t,n){"use strict";n.d(t,{Vv:function(){return x},ch:function(){return N}});var r,o,a,i,c,l,s=n(67294);(r=i||(i={})).INITIAL="initial",r.PENDING="pending",r.REJECTED="rejected",r.RESOLVED="resolved",(o=c||(c={})).LOADING_STATUS="setLoadingStatus",o.RESET_OPTIONS="resetOptions",o.SET_BRAINTREE_INSTANCE="braintreeInstance",(a=l||(l={})).NUMBER="number",a.CVV="cvv",a.EXPIRATION_DATE="expirationDate",a.EXPIRATION_MONTH="expirationMonth",a.EXPIRATION_YEAR="expirationYear",a.POSTAL_CODE="postalCode";var u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function f(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}var p="data-react-paypal-script-id",m={DATA_CLIENT_TOKEN:"dataClientToken",DATA_USER_ID_TOKEN:"dataUserIdToken",DATA_SDK_INTEGRATION_SOURCE:"dataSdkIntegrationSource",DATA_SDK_INTEGRATION_SOURCE_VALUE:"react-paypal-js",DATA_NAMESPACE:"dataNamespace"},v="paypal";function y(e){return void 0===e&&(e=v),window[e]}function h(e){var t=e.reactComponentName,n=e.sdkComponentKey,r=e.sdkRequestedComponents,o=void 0===r?"":r,a=e.sdkDataNamespace,i=n.charAt(0).toUpperCase().concat(n.substring(1)),c="Unable to render <".concat(t," /> because window.").concat(void 0===a?v:a,".").concat(i," is undefined.");if(!o.includes(n)){var l=[o,n].filter(Boolean).join();c+="\nTo fix the issue, add '".concat(n,"' to the list of components passed to the parent PayPalScriptProvider:")+"\n`<PayPalScriptProvider options={{ components: '".concat(l,"'}}>`.")}return c}function E(e){e[p];var t=d(e,[p+""]);return"react-paypal-js-".concat(function(e){for(var t="",n=0;n<e.length;n++){var r=e[n].charCodeAt(0)*n;e[n+1]&&(r+=e[n+1].charCodeAt(0)*(n-1)),t+=String.fromCharCode(97+Math.abs(r)%26)}return t}(JSON.stringify(t)))}function b(e,t){var n,r,o;switch(t.type){case c.LOADING_STATUS:return u(u({},e),{loadingStatus:t.value});case c.RESET_OPTIONS:return r=e.options[p],(null==(o=self.document.querySelector("script[".concat(p,'="').concat(r,'"]')))?void 0:o.parentNode)&&o.parentNode.removeChild(o),u(u({},e),{loadingStatus:i.PENDING,options:u(u({},t.value),((n={})[p]="".concat(E(t.value)),n[m.DATA_SDK_INTEGRATION_SOURCE]=m.DATA_SDK_INTEGRATION_SOURCE_VALUE,n))});case c.SET_BRAINTREE_INSTANCE:return u(u({},e),{braintreePayPalCheckoutInstance:t.value});default:return e}}var g=(0,s.createContext)(null);function A(){var e=function(e){if("function"==typeof(null==e?void 0:e.dispatch)&&0!==e.dispatch.length)return e;throw Error("usePayPalScriptReducer must be used within a PayPalScriptProvider")}((0,s.useContext)(g));return[u(u({},e),{isInitial:e.loadingStatus===i.INITIAL,isPending:e.loadingStatus===i.PENDING,isResolved:e.loadingStatus===i.RESOLVED,isRejected:e.loadingStatus===i.REJECTED}),e.dispatch]}(0,s.createContext)({});var N=function(e){var t=e.className,n=e.disabled,r=void 0!==n&&n,o=e.children,a=e.forceReRender,i=d(e,["className","disabled","children","forceReRender"]),c="".concat(void 0===t?"":t," ").concat(r?"paypal-buttons-disabled":"").trim(),l=(0,s.useRef)(null),p=(0,s.useRef)(null),v=A()[0],E=v.isResolved,b=v.options,g=(0,s.useState)(null),w=g[0],C=g[1],S=(0,s.useState)(!0),T=S[0],x=S[1],_=(0,s.useState)(null)[1];function D(){null!==p.current&&p.current.close().catch(function(){})}return(0,s.useEffect)(function(){if(!1===E)return D;var e=y(b.dataNamespace);if(void 0===e||void 0===e.Buttons)return _(function(){throw Error(h({reactComponentName:N.displayName,sdkComponentKey:"buttons",sdkRequestedComponents:b.components,sdkDataNamespace:b[m.DATA_NAMESPACE]}))}),D;try{p.current=e.Buttons(u(u({},i),{onInit:function(e,t){C(t),"function"==typeof i.onInit&&i.onInit(e,t)}}))}catch(e){return _(function(){throw Error("Failed to render <PayPalButtons /> component. Failed to initialize:  ".concat(e))})}return!1===p.current.isEligible()?(x(!1),D):(l.current&&p.current.render(l.current).catch(function(e){null!==l.current&&0!==l.current.children.length&&_(function(){throw Error("Failed to render <PayPalButtons /> component. ".concat(e))})}),D)},f(f([E],void 0===a?[]:a,!0),[i.fundingSource],!1)),(0,s.useEffect)(function(){null!==w&&(!0===r?w.disable().catch(function(){}):w.enable().catch(function(){}))},[r,w]),s.createElement(s.Fragment,null,T?s.createElement("div",{ref:l,style:r?{opacity:.38}:{},className:c}):o)};function w(e,t){void 0===t&&(t={});var n=document.createElement("script");return n.src=e,Object.keys(t).forEach(function(e){n.setAttribute(e,t[e]),"data-csp-nonce"===e&&n.setAttribute("nonce",t["data-csp-nonce"])}),n}function C(e,t){if("object"!=typeof e||null===e)throw Error("Expected an options object.");if(void 0!==t&&"function"!=typeof t)throw Error("Expected PromisePonyfill to be a function.")}N.displayName="PayPalButtons";var S=function(e){var t=e.className,n=e.children,r=d(e,["className","children"]),o=A()[0],a=o.isResolved,i=o.options,c=(0,s.useRef)(null),l=(0,s.useState)(!0),f=l[0],p=l[1],v=(0,s.useState)(null)[1],E=function(e){var t=c.current;if(!t||!e.isEligible())return p(!1);t.firstChild&&t.removeChild(t.firstChild),e.render(t).catch(function(e){null!==t&&0!==t.children.length&&v(function(){throw Error("Failed to render <PayPalMarks /> component. ".concat(e))})})};return(0,s.useEffect)(function(){if(!1!==a){var e=y(i[m.DATA_NAMESPACE]);if(void 0===e||void 0===e.Marks)return v(function(){throw Error(h({reactComponentName:S.displayName,sdkComponentKey:"marks",sdkRequestedComponents:i.components,sdkDataNamespace:i[m.DATA_NAMESPACE]}))});E(e.Marks(u({},r)))}},[a,r.fundingSource]),s.createElement(s.Fragment,null,f?s.createElement("div",{ref:c,className:void 0===t?"":t}):n)};S.displayName="PayPalMarks";var T=function(e){var t=e.className,n=e.forceReRender,r=d(e,["className","forceReRender"]),o=A()[0],a=o.isResolved,i=o.options,c=(0,s.useRef)(null),l=(0,s.useRef)(null),p=(0,s.useState)(null)[1];return(0,s.useEffect)(function(){if(!1!==a){var e=y(i[m.DATA_NAMESPACE]);if(void 0===e||void 0===e.Messages)return p(function(){throw Error(h({reactComponentName:T.displayName,sdkComponentKey:"messages",sdkRequestedComponents:i.components,sdkDataNamespace:i[m.DATA_NAMESPACE]}))});l.current=e.Messages(u({},r)),l.current.render(c.current).catch(function(e){null!==c.current&&0!==c.current.children.length&&p(function(){throw Error("Failed to render <PayPalMessages /> component. ".concat(e))})})}},f([a],void 0===n?[]:n,!0)),s.createElement("div",{ref:c,className:void 0===t?"":t})};T.displayName="PayPalMessages";var x=function(e){var t,n=e.options,r=void 0===n?{clientId:"test"}:n,o=e.children,a=e.deferLoading,l=void 0!==a&&a,d=(0,s.useReducer)(b,{options:u(u({},r),((t={})[p]="".concat(E(r)),t[m.DATA_SDK_INTEGRATION_SOURCE]=m.DATA_SDK_INTEGRATION_SOURCE_VALUE,t)),loadingStatus:l?i.INITIAL:i.PENDING}),f=d[0],v=d[1];return(0,s.useEffect)(function(){if(!1===l&&f.loadingStatus===i.INITIAL)return v({type:c.LOADING_STATUS,value:i.PENDING});if(f.loadingStatus===i.PENDING){var e=!0;return(function(e,t){if(void 0===t&&(t=Promise),C(e,t),"undefined"==typeof document)return t.resolve(null);var n,r,o,a,i,c,l=(o="https://www.paypal.com/sdk/js",(r=e).sdkBaseUrl&&(o=r.sdkBaseUrl,delete r.sdkBaseUrl),i=(a=Object.keys(r).filter(function(e){return void 0!==r[e]&&null!==r[e]&&""!==r[e]}).reduce(function(e,t){var n=r[t].toString();return"data"===(t=t.replace(/[A-Z]+(?![a-z])|[A-Z]/g,function(e,t){return(t?"-":"")+e.toLowerCase()})).substring(0,4)?e.dataAttributes[t]=n:e.queryParams[t]=n,e},{queryParams:{},dataAttributes:{}})).queryParams,c=a.dataAttributes,i["merchant-id"]&&-1!==i["merchant-id"].indexOf(",")&&(c["data-merchant-id"]=i["merchant-id"],i["merchant-id"]="*"),{url:"".concat(o,"?").concat((n="",Object.keys(i).forEach(function(e){0!==n.length&&(n+="&"),n+=e+"="+i[e]}),n)),dataAttributes:c}),s=l.url,u=l.dataAttributes,d=u["data-namespace"]||"paypal",f=window[d];return function(e,t){var n=document.querySelector('script[src="'.concat(e,'"]'));if(null===n)return null;var r=w(e,t),o=n.cloneNode();if(delete o.dataset.uidAuto,Object.keys(o.dataset).length!==Object.keys(r.dataset).length)return null;var a=!0;return Object.keys(o.dataset).forEach(function(e){o.dataset[e]!==r.dataset[e]&&(a=!1)}),a?n:null}(s,u)&&f?t.resolve(f):(function(e,t){void 0===t&&(t=Promise),C(e,t);var n=e.url,r=e.attributes;if("string"!=typeof n||0===n.length)throw Error("Invalid url.");if(void 0!==r&&"object"!=typeof r)throw Error("Expected attributes to be an object.");return new t(function(e,t){var o,a,i,c,l,s;if("undefined"==typeof document)return e();a=(o={url:n,attributes:r,onSuccess:function(){return e()},onError:function(){var e=Error('The script "'.concat(n,'" failed to load.'));return window.fetch?fetch(n).then(function(n){return 200===n.status&&t(e),n.text()}).then(function(e){var n;t(Error((n=e.split("/* Original Error:")[1])?n.replace(/\n/g,"").replace("*/","").trim():e))}).catch(function(e){t(e)}):t(e)}}).url,i=o.attributes,c=o.onSuccess,l=o.onError,(s=w(a,i)).onerror=l,s.onload=c,document.head.insertBefore(s,document.head.firstElementChild)})})({url:s,attributes:u},t).then(function(){var e=window[d];if(e)return e;throw Error("The window.".concat(d," global variable is not available."))})})(f.options).then(function(){e&&v({type:c.LOADING_STATUS,value:i.RESOLVED})}).catch(function(t){console.error("".concat("Failed to load the PayPal JS SDK script."," ").concat(t)),e&&v({type:c.LOADING_STATUS,value:i.REJECTED})}),function(){e=!1}}},[f.options,l,f.loadingStatus]),s.createElement(g.Provider,{value:u(u({},f),{dispatch:v})},o)}},20640:function(e,t,n){"use strict";var r=n(11742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,c,l,s,u,d,f=!1;t||(t={}),i=t.debug||!1;try{if(l=r(),s=document.createRange(),u=document.getSelection(),(d=document.createElement("span")).textContent=e,d.ariaHidden="true",d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[t.format]||o.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(d),s.selectNodeContents(d),u.addRange(s),!document.execCommand("copy"))throw Error("copy command was unsuccessful");f=!0}catch(r){i&&console.error("unable to copy using execCommand: ",r),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(r){i&&console.error("unable to copy using clipboardData: ",r),i&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",c=n.replace(/#{\s*key\s*}/g,a),window.prompt(c,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(s):u.removeAllRanges()),d&&document.body.removeChild(d),l()}return f}},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},36024:function(e,t,n){"use strict";n.d(t,{U:function(){return f}});var r=n(17257),o=n(91836),a=n(35059),i=n(91639),c=n(33179),l=n(82504),s=n(25432),u=n(67294),d=n(85893),f=(0,a.G)(function({children:e,reduceMotion:t,...n},a){let f=(0,i.jC)("Accordion",n),p=(0,c.Lr)(n),{htmlProps:m,descendants:v,...y}=(0,r.As)(p),h=(0,u.useMemo)(()=>({...y,reduceMotion:!!t}),[y,t]);return(0,d.jsx)(o.di,{value:v,children:(0,d.jsx)(r.a2,{value:h,children:(0,d.jsx)(o.lh,{value:f,children:(0,d.jsx)(l.m.div,{ref:a,...m,className:(0,s.cx)("chakra-accordion",n.className),__css:f.root,children:e})})})})});f.displayName="Accordion"},77484:function(e,t,n){"use strict";n.d(t,{K:function(){return l}});var r=n(91836),o=n(35059),a=n(82504),i=n(25432),c=n(85893),l=(0,o.G)(function(e,t){let{getButtonProps:n}=(0,r.bB)(),o=n(e,t),l=(0,r.YO)(),s={display:"flex",alignItems:"center",width:"100%",outline:0,...l.button};return(0,c.jsx)(a.m.button,{...o,className:(0,i.cx)("chakra-accordion__button",e.className),__css:s})});l.displayName="AccordionButton"},5077:function(e,t,n){"use strict";n.d(t,{Q:function(){return u}});var r=n(17257),o=n(91836),a=n(35059),i=n(82504),c=n(25432),l=n(67294),s=n(85893),u=(0,a.G)(function(e,t){let{children:n,className:a}=e,{htmlProps:u,...d}=(0,r.Zl)(e),f=(0,o.YO)(),p={...f.container,overflowAnchor:"none"},m=(0,l.useMemo)(()=>d,[d]);return(0,s.jsx)(o.ec,{value:m,children:(0,s.jsx)(i.m.div,{ref:t,...u,className:(0,c.cx)("chakra-accordion__item",a),__css:p,children:"function"==typeof n?n({isExpanded:!!d.isOpen,isDisabled:!!d.isDisabled}):n})})});u.displayName="AccordionItem"},21673:function(e,t,n){"use strict";n.d(t,{X:function(){return l}});var r=n(17257),o=n(91836),a=n(56877),i=n(25432),c=n(85893);function l(e){let{isOpen:t,isDisabled:n}=(0,o.bB)(),{reduceMotion:l}=(0,r.EF)(),s=(0,i.cx)("chakra-accordion__icon",e.className),u=(0,o.YO)(),d={opacity:n?.4:1,transform:t?"rotate(-180deg)":void 0,transition:l?void 0:"transform 0.2s",transformOrigin:"center",...u.icon};return(0,c.jsx)(a.J,{viewBox:"0 0 24 24","aria-hidden":!0,className:s,__css:d,...e,children:(0,c.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}l.displayName="AccordionIcon"},17257:function(e,t,n){"use strict";n.d(t,{As:function(){return s},EF:function(){return d},Zl:function(){return f},a2:function(){return u}});var r=n(91836),o=n(55227),a=n(61942),i=n(81103),c=n(25432),l=n(67294);function s(e){let{onChange:t,defaultIndex:n,index:o,allowMultiple:i,allowToggle:s,...u}=e;(function(e){let t=e.index||e.defaultIndex,n=null!=t&&!Array.isArray(t)&&e.allowMultiple;(0,c.ZK)({condition:!!n,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`})})(e),(0,c.ZK)({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"});let d=(0,r._v)(),[f,p]=(0,l.useState)(-1);(0,l.useEffect)(()=>()=>{p(-1)},[]);let[m,v]=(0,a.T)({value:o,defaultValue:()=>i?null!=n?n:[]:null!=n?n:-1,onChange:t}),y=e=>{let t=!1;null!==e&&(t=Array.isArray(m)?m.includes(e):m===e);let n=t=>{if(null!==e){if(i&&Array.isArray(m)){let n=t?m.concat(e):m.filter(t=>t!==e);v(n)}else t?v(e):s&&v(-1)}};return{isOpen:t,onChange:n}};return{index:m,setIndex:v,htmlProps:u,getAccordionItemProps:y,focusedIndex:f,setFocusedIndex:p,descendants:d}}var[u,d]=(0,o.k)({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function f(e){var t;let{isDisabled:n,isFocusable:o,id:a,...s}=e,{getAccordionItemProps:u,setFocusedIndex:f}=d(),p=(0,l.useRef)(null),m=(0,l.useId)(),v=null!=a?a:m,y=`accordion-button-${v}`,h=`accordion-panel-${v}`;(0,c.ZK)({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `});let{register:E,index:b,descendants:g}=(0,r.mc)({disabled:n&&!o}),{isOpen:A,onChange:N}=u(-1===b?null:b);t={isOpen:A,isDisabled:n},(0,c.ZK)({condition:t.isOpen&&!!t.isDisabled,message:"Cannot open a disabled accordion item"});let w=()=>{null==N||N(!0)},C=()=>{null==N||N(!1)},S=(0,l.useCallback)(()=>{null==N||N(!A),f(b)},[b,f,A,N]),T=(0,l.useCallback)(e=>{let t={ArrowDown:()=>{let e=g.nextEnabled(b);null==e||e.node.focus()},ArrowUp:()=>{let e=g.prevEnabled(b);null==e||e.node.focus()},Home:()=>{let e=g.firstEnabled();null==e||e.node.focus()},End:()=>{let e=g.lastEnabled();null==e||e.node.focus()}}[e.key];t&&(e.preventDefault(),t(e))},[g,b]),x=(0,l.useCallback)(()=>{f(b)},[f,b]),_=(0,l.useCallback)(function(e={},t=null){return{...e,type:"button",ref:(0,i.lq)(E,p,t),id:y,disabled:!!n,"aria-expanded":!!A,"aria-controls":h,onClick:(0,c.v0)(e.onClick,S),onFocus:(0,c.v0)(e.onFocus,x),onKeyDown:(0,c.v0)(e.onKeyDown,T)}},[y,n,A,S,x,T,h,E]),D=(0,l.useCallback)(function(e={},t=null){return{...e,ref:t,role:"region",id:h,"aria-labelledby":y,hidden:!A}},[y,A,h]);return{isOpen:A,isDisabled:n,isFocusable:o,onOpen:w,onClose:C,getButtonProps:_,getPanelProps:D,htmlProps:s}}},91836:function(e,t,n){"use strict";n.d(t,{YO:function(){return i},_v:function(){return d},bB:function(){return l},di:function(){return s},ec:function(){return c},lh:function(){return a},mc:function(){return f}});var r=n(73614),o=n(55227),[a,i]=(0,o.k)({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[c,l]=(0,o.k)({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[s,u,d,f]=(0,r.n)()},64657:function(e,t,n){"use strict";n.d(t,{H:function(){return u}});var r=n(17257),o=n(91836),a=n(35059),i=n(82504),c=n(30333),l=n(25432),s=n(85893),u=(0,a.G)(function(e,t){let{className:n,motionProps:a,...u}=e,{reduceMotion:d}=(0,r.EF)(),{getPanelProps:f,isOpen:p}=(0,o.bB)(),m=f(u,t),v=(0,l.cx)("chakra-accordion__panel",n),y=(0,o.YO)();d||delete m.hidden;let h=(0,s.jsx)(i.m.div,{...m,__css:y.panel,className:v});return d?h:(0,s.jsx)(c.U,{in:p,...a,children:h})});u.displayName="AccordionPanel"},40156:function(e,t,n){"use strict";n.d(t,{V:function(){return a}});var r=n(67294),o=n(20640);function a(e,t={}){let[n,a]=(0,r.useState)(!1),[i,c]=(0,r.useState)(e);(0,r.useEffect)(()=>c(e),[e]);let{timeout:l=1500,...s}="number"==typeof t?{timeout:t}:t,u=(0,r.useCallback)(()=>{let e=o(i,s);a(e)},[i,s]);return(0,r.useEffect)(()=>{let e=null;return n&&(e=window.setTimeout(()=>{a(!1)},l)),()=>{e&&window.clearTimeout(e)}},[l,n]),{value:i,setValue:c,onCopy:u,hasCopied:n}}},90634:function(e,t,n){"use strict";n.d(t,{g:function(){return i}});var r=n(96118),o=n(35059),a=n(85893),i=(0,o.G)((e,t)=>(0,a.jsx)(r.K,{align:"center",...e,direction:"column",ref:t}));i.displayName="VStack"},97822:function(e,t,n){"use strict";n.d(t,{i:function(){return s}});var r=n(35059),o=n(91639),a=n(33179),i=n(82504),c=n(25432),l=n(85893),s=(0,r.G)(function(e,t){let{borderLeftWidth:n,borderBottomWidth:r,borderTopWidth:s,borderRightWidth:u,borderWidth:d,borderStyle:f,borderColor:p,...m}=(0,o.mq)("Divider",e),{className:v,orientation:y="horizontal",__css:h,...E}=(0,a.Lr)(e);return(0,l.jsx)(i.m.hr,{ref:t,"aria-orientation":y,...E,__css:{...m,border:"0",borderColor:p,borderStyle:f,...{vertical:{borderLeftWidth:n||u||d||"1px",height:"100%"},horizontal:{borderBottomWidth:r||s||d||"1px",width:"100%"}}[y],...h},className:(0,c.cx)("chakra-divider",v)})});s.displayName="Divider"},5197:function(e,t,n){"use strict";n.d(t,{DE:function(){return h},GS:function(){return m},HC:function(){return y},QI:function(){return v},aV:function(){return p}});var r=n(56877),o=n(55227),a=n(92495),i=n(35059),c=n(91639),l=n(33179),s=n(82504),u=n(85893),[d,f]=(0,o.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),p=(0,i.G)(function(e,t){let n=(0,c.jC)("List",e),{children:r,styleType:o="none",stylePosition:i,spacing:f,...p}=(0,l.Lr)(e),m=(0,a.W)(r);return(0,u.jsx)(d,{value:n,children:(0,u.jsx)(s.m.ul,{ref:t,listStyleType:o,listStylePosition:i,role:"list",__css:{...n.container,...f?{"& > *:not(style) ~ *:not(style)":{mt:f}}:{}},...p,children:m})})});p.displayName="List";var m=(0,i.G)((e,t)=>{let{as:n,...r}=e;return(0,u.jsx)(p,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...r})});m.displayName="OrderedList";var v=(0,i.G)(function(e,t){let{as:n,...r}=e;return(0,u.jsx)(p,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...r})});v.displayName="UnorderedList";var y=(0,i.G)(function(e,t){let n=f();return(0,u.jsx)(s.m.li,{ref:t,...e,__css:n.item})});y.displayName="ListItem";var h=(0,i.G)(function(e,t){let n=f();return(0,u.jsx)(r.J,{ref:t,role:"presentation",...e,__css:n.icon})});h.displayName="ListIcon"},61942:function(e,t,n){"use strict";n.d(t,{T:function(){return a}});var r=n(67294),o=n(35155);function a(e){let{value:t,defaultValue:n,onChange:a,shouldUpdate:i=(e,t)=>e!==t}=e,c=(0,o.W)(a),l=(0,o.W)(i),[s,u]=(0,r.useState)(n),d=void 0!==t,f=d?t:s,p=(0,o.W)(e=>{let t="function"==typeof e?e(f):e;l(f,t)&&(d||u(t),c(t))},[d,c,f,l]);return[f,p]}},47523:function(e,t,n){"use strict";n.d(t,{u:function(){return S}});var r={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},o=n(61735),a=n(31054),i=n(68795),c=n(85075),l=n(57134),s=n(81103),u=n(25432),d=n(67294),f=e=>{var t;return(null==(t=e.current)?void 0:t.ownerDocument)||document},p=e=>{var t,n;return(null==(n=null==(t=e.current)?void 0:t.ownerDocument)?void 0:n.defaultView)||window},m="chakra-ui:close-tooltip",v=n(49598),y=n(82504),h=n(35059),E=n(91639),b=n(33179),g=n(75119),A=n(51615),N=n(65820),w=n(85893),C=(0,y.m)(A.E.div),S=(0,h.G)((e,t)=>{var n,h;let A;let S=(0,E.mq)("Tooltip",e),T=(0,b.Lr)(e),x=(0,g.F)(),{children:_,label:D,shouldWrapChildren:I,"aria-label":k,hasArrow:O,bg:P,portalProps:R,background:j,backgroundColor:L,bgColor:U,motionProps:G,...M}=T,B=null!=(h=null!=(n=null!=j?j:L)?n:P)?h:U;if(B){S.bg=B;let e=(0,b.K1)(x,"colors",B);S[i.Dq.arrowBg.var]=e}let K=function(e={}){let{openDelay:t=0,closeDelay:n=0,closeOnClick:r=!0,closeOnMouseDown:v,closeOnScroll:y,closeOnPointerDown:h=v,closeOnEsc:E=!0,onOpen:b,onClose:g,placement:A,id:N,isOpen:w,defaultIsOpen:C,arrowSize:S=10,arrowShadowColor:T,arrowPadding:x,modifiers:_,isDisabled:D,gutter:I,offset:k,direction:O,...P}=e,{isOpen:R,onOpen:j,onClose:L}=(0,c.q)({isOpen:w,defaultIsOpen:C,onOpen:b,onClose:g}),{referenceRef:U,getPopperProps:G,getArrowInnerProps:M,getArrowProps:B}=(0,a.D)({enabled:R,placement:A,arrowPadding:x,modifiers:_,gutter:I,offset:k,direction:O}),K=(0,d.useId)(),F=`tooltip-${null!=N?N:K}`,q=(0,d.useRef)(null),V=(0,d.useRef)(),z=(0,d.useCallback)(()=>{V.current&&(clearTimeout(V.current),V.current=void 0)},[]),Y=(0,d.useRef)(),Z=(0,d.useCallback)(()=>{Y.current&&(clearTimeout(Y.current),Y.current=void 0)},[]),J=(0,d.useCallback)(()=>{Z(),L()},[L,Z]),W=((0,d.useEffect)(()=>{let e=f(q);return e.addEventListener(m,J),()=>e.removeEventListener(m,J)},[J,q]),()=>{let e=f(q),t=p(q);e.dispatchEvent(new t.CustomEvent(m))}),H=(0,d.useCallback)(()=>{if(!D&&!V.current){W();let e=p(q);V.current=e.setTimeout(j,t)}},[W,D,j,t]),X=(0,d.useCallback)(()=>{z();let e=p(q);Y.current=e.setTimeout(J,n)},[n,J,z]),$=(0,d.useCallback)(()=>{R&&r&&X()},[r,X,R]),Q=(0,d.useCallback)(()=>{R&&h&&X()},[h,X,R]),ee=(0,d.useCallback)(e=>{R&&"Escape"===e.key&&X()},[R,X]);(0,l.O)(()=>f(q),"keydown",E?ee:void 0),(0,l.O)(()=>{let e=q.current;if(!e)return null;let t=function e(t){return["html","body","#document"].includes(t.localName)?t.ownerDocument.body:(0,o.Re)(t)&&function(e){let t=e.ownerDocument.defaultView||window,{overflow:n,overflowX:r,overflowY:o}=t.getComputedStyle(e);return/auto|scroll|overlay|hidden/.test(n+o+r)}(t)?t:e("html"===t.localName?t:t.assignedSlot||t.parentElement||t.ownerDocument.documentElement)}(e);return"body"===t.localName?p(q):t},"scroll",()=>{R&&y&&J()},{passive:!0,capture:!0}),(0,d.useEffect)(()=>{D&&(z(),R&&L())},[D,R,L,z]),(0,d.useEffect)(()=>()=>{z(),Z()},[z,Z]),(0,l.O)(()=>q.current,"pointerleave",X);let et=(0,d.useCallback)((e={},t=null)=>{let n={...e,ref:(0,s.lq)(q,t,U),onPointerEnter:(0,u.v0)(e.onPointerEnter,e=>{"touch"!==e.pointerType&&H()}),onClick:(0,u.v0)(e.onClick,$),onPointerDown:(0,u.v0)(e.onPointerDown,Q),onFocus:(0,u.v0)(e.onFocus,H),onBlur:(0,u.v0)(e.onBlur,X),"aria-describedby":R?F:void 0};return n},[H,X,Q,R,F,$,U]),en=(0,d.useCallback)((e={},t=null)=>G({...e,style:{...e.style,[i.Dq.arrowSize.var]:S?`${S}px`:void 0,[i.Dq.arrowShadowColor.var]:T}},t),[G,S,T]),er=(0,d.useCallback)((e={},t=null)=>{let n={...e.style,position:"relative",transformOrigin:i.Dq.transformOrigin.varRef};return{ref:t,...P,...e,id:F,role:"tooltip",style:n}},[P,F]);return{isOpen:R,show:H,hide:X,getTriggerProps:et,getTooltipProps:er,getTooltipPositionerProps:en,getArrowProps:B,getArrowInnerProps:M}}({...M,direction:x.direction});if("string"==typeof _||I)A=(0,w.jsx)(y.m.span,{display:"inline-block",tabIndex:0,...K.getTriggerProps(),children:_});else{let e=d.Children.only(_);A=(0,d.cloneElement)(e,K.getTriggerProps(e.props,e.ref))}let F=!!k,q=K.getTooltipProps({},t),V=F?function(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}(q,["role","id"]):q,z=function(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}(q,["role","id"]);return D?(0,w.jsxs)(w.Fragment,{children:[A,(0,w.jsx)(N.M,{children:K.isOpen&&(0,w.jsx)(v.h,{...R,children:(0,w.jsx)(y.m.div,{...K.getTooltipPositionerProps(),__css:{zIndex:S.zIndex,pointerEvents:"none"},children:(0,w.jsxs)(C,{variants:r,initial:"exit",animate:"enter",exit:"exit",...G,...V,__css:S,children:[D,F&&(0,w.jsx)(y.m.span,{srOnly:!0,...z,children:k}),O&&(0,w.jsx)(y.m.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper",children:(0,w.jsx)(y.m.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:S.bg}})})]})})})})]}):(0,w.jsx)(w.Fragment,{children:_})});S.displayName="Tooltip"}}]);