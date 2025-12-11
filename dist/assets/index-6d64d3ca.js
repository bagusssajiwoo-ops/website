(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function uA(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ew={exports:{}},Oc={},tw={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Za=Symbol.for("react.element"),cA=Symbol.for("react.portal"),hA=Symbol.for("react.fragment"),dA=Symbol.for("react.strict_mode"),fA=Symbol.for("react.profiler"),pA=Symbol.for("react.provider"),mA=Symbol.for("react.context"),gA=Symbol.for("react.forward_ref"),yA=Symbol.for("react.suspense"),vA=Symbol.for("react.memo"),_A=Symbol.for("react.lazy"),r0=Symbol.iterator;function wA(t){return t===null||typeof t!="object"?null:(t=r0&&t[r0]||t["@@iterator"],typeof t=="function"?t:null)}var nw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rw=Object.assign,iw={};function Ys(t,e,n){this.props=t,this.context=e,this.refs=iw,this.updater=n||nw}Ys.prototype.isReactComponent={};Ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function sw(){}sw.prototype=Ys.prototype;function Bp(t,e,n){this.props=t,this.context=e,this.refs=iw,this.updater=n||nw}var zp=Bp.prototype=new sw;zp.constructor=Bp;rw(zp,Ys.prototype);zp.isPureReactComponent=!0;var i0=Array.isArray,ow=Object.prototype.hasOwnProperty,$p={current:null},aw={key:!0,ref:!0,__self:!0,__source:!0};function lw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ow.call(e,r)&&!aw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Za,type:t,key:s,ref:o,props:i,_owner:$p.current}}function EA(t,e){return{$$typeof:Za,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Za}function TA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var s0=/\/+/g;function ed(t,e){return typeof t=="object"&&t!==null&&t.key!=null?TA(""+t.key):e.toString(36)}function du(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Za:case cA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ed(o,0):r,i0(i)?(n="",t!=null&&(n=t.replace(s0,"$&/")+"/"),du(i,e,n,"",function(c){return c})):i!=null&&(Wp(i)&&(i=EA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(s0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",i0(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ed(s,a);o+=du(s,e,n,l,i)}else if(l=wA(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ed(s,a++),o+=du(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ml(t,e,n){if(t==null)return t;var r=[],i=0;return du(t,r,"","",function(s){return e.call(n,s,i++)}),r}function xA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xt={current:null},fu={transition:null},IA={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:fu,ReactCurrentOwner:$p};function uw(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Ml,forEach:function(t,e,n){Ml(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ml(t,function(){e++}),e},toArray:function(t){return Ml(t,function(e){return e})||[]},only:function(t){if(!Wp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Ys;re.Fragment=hA;re.Profiler=fA;re.PureComponent=Bp;re.StrictMode=dA;re.Suspense=yA;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IA;re.act=uw;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=rw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=$p.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ow.call(e,l)&&!aw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Za,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:mA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:pA,_context:t},t.Consumer=t};re.createElement=lw;re.createFactory=function(t){var e=lw.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:gA,render:t}};re.isValidElement=Wp;re.lazy=function(t){return{$$typeof:_A,_payload:{_status:-1,_result:t},_init:xA}};re.memo=function(t,e){return{$$typeof:vA,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=fu.transition;fu.transition={};try{t()}finally{fu.transition=e}};re.unstable_act=uw;re.useCallback=function(t,e){return xt.current.useCallback(t,e)};re.useContext=function(t){return xt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return xt.current.useDeferredValue(t)};re.useEffect=function(t,e){return xt.current.useEffect(t,e)};re.useId=function(){return xt.current.useId()};re.useImperativeHandle=function(t,e,n){return xt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return xt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return xt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return xt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return xt.current.useReducer(t,e,n)};re.useRef=function(t){return xt.current.useRef(t)};re.useState=function(t){return xt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return xt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return xt.current.useTransition()};re.version="18.3.1";tw.exports=re;var N=tw.exports;const le=uA(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SA=N,PA=Symbol.for("react.element"),AA=Symbol.for("react.fragment"),CA=Object.prototype.hasOwnProperty,kA=SA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,RA={key:!0,ref:!0,__self:!0,__source:!0};function cw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)CA.call(e,r)&&!RA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:PA,type:t,key:s,ref:o,props:i,_owner:kA.current}}Oc.Fragment=AA;Oc.jsx=cw;Oc.jsxs=cw;ew.exports=Oc;var g=ew.exports,Jd={},hw={exports:{}},Ut={},dw={exports:{}},fw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var te=z.length;z.push(G);e:for(;0<te;){var J=te-1>>>1,fe=z[J];if(0<i(fe,G))z[J]=G,z[te]=fe,te=J;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],te=z.pop();if(te!==G){z[0]=te;e:for(var J=0,fe=z.length,pn=fe>>>1;J<pn;){var gt=2*(J+1)-1,mn=z[gt],Ze=gt+1,Zt=z[Ze];if(0>i(mn,te))Ze<fe&&0>i(Zt,mn)?(z[J]=Zt,z[Ze]=te,J=Ze):(z[J]=mn,z[gt]=te,J=gt);else if(Ze<fe&&0>i(Zt,te))z[J]=Zt,z[Ze]=te,J=Ze;else break e}}return G}function i(z,G){var te=z.sortIndex-G.sortIndex;return te!==0?te:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,d=null,p=3,y=!1,x=!1,S=!1,C=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(z){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=z)r(c),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(c)}}function b(z){if(S=!1,_(z),!x)if(n(l)!==null)x=!0,me(L);else{var G=n(c);G!==null&&Ge(b,G.startTime-z)}}function L(z,G){x=!1,S&&(S=!1,w(E),E=-1),y=!0;var te=p;try{for(_(G),d=n(l);d!==null&&(!(d.expirationTime>G)||z&&!R());){var J=d.callback;if(typeof J=="function"){d.callback=null,p=d.priorityLevel;var fe=J(d.expirationTime<=G);G=t.unstable_now(),typeof fe=="function"?d.callback=fe:d===n(l)&&r(l),_(G)}else r(l);d=n(l)}if(d!==null)var pn=!0;else{var gt=n(c);gt!==null&&Ge(b,gt.startTime-G),pn=!1}return pn}finally{d=null,p=te,y=!1}}var M=!1,I=null,E=-1,P=5,A=-1;function R(){return!(t.unstable_now()-A<P)}function D(){if(I!==null){var z=t.unstable_now();A=z;var G=!0;try{G=I(!0,z)}finally{G?k():(M=!1,I=null)}}else M=!1}var k;if(typeof v=="function")k=function(){v(D)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,Oe=ae.port2;ae.port1.onmessage=D,k=function(){Oe.postMessage(null)}}else k=function(){C(D,0)};function me(z){I=z,M||(M=!0,k())}function Ge(z,G){E=C(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){x||y||(x=!0,me(L))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(p){case 1:case 2:case 3:var G=3;break;default:G=p}var te=p;p=G;try{return z()}finally{p=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var te=p;p=z;try{return G()}finally{p=te}},t.unstable_scheduleCallback=function(z,G,te){var J=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?J+te:J):te=J,z){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=te+fe,z={id:h++,callback:G,priorityLevel:z,startTime:te,expirationTime:fe,sortIndex:-1},te>J?(z.sortIndex=te,e(c,z),n(l)===null&&z===n(c)&&(S?(w(E),E=-1):S=!0,Ge(b,te-J))):(z.sortIndex=fe,e(l,z),x||y||(x=!0,me(L))),z},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(z){var G=p;return function(){var te=p;p=G;try{return z.apply(this,arguments)}finally{p=te}}}})(fw);dw.exports=fw;var bA=dw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NA=N,jt=bA;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pw=new Set,_a={};function zi(t,e){Ds(t,e),Ds(t+"Capture",e)}function Ds(t,e){for(_a[t]=e,t=0;t<e.length;t++)pw.add(e[t])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zd=Object.prototype.hasOwnProperty,DA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,o0={},a0={};function VA(t){return Zd.call(a0,t)?!0:Zd.call(o0,t)?!1:DA.test(t)?a0[t]=!0:(o0[t]=!0,!1)}function LA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function OA(t,e,n,r){if(e===null||typeof e>"u"||LA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function It(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new It(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new It(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new It(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new It(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new It(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new It(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new It(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new It(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new It(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hp=/[\-:]([a-z])/g;function qp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hp,qp);it[e]=new It(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hp,qp);it[e]=new It(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hp,qp);it[e]=new It(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new It(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new It("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new It(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gp(t,e,n,r){var i=it.hasOwnProperty(e)?it[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(OA(e,n,i,r)&&(n=null),r||i===null?VA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var rr=NA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,jl=Symbol.for("react.element"),ss=Symbol.for("react.portal"),os=Symbol.for("react.fragment"),Kp=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),mw=Symbol.for("react.provider"),gw=Symbol.for("react.context"),Qp=Symbol.for("react.forward_ref"),tf=Symbol.for("react.suspense"),nf=Symbol.for("react.suspense_list"),Yp=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),yw=Symbol.for("react.offscreen"),l0=Symbol.iterator;function bo(t){return t===null||typeof t!="object"?null:(t=l0&&t[l0]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,td;function $o(t){if(td===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);td=e&&e[1]||""}return`
`+td+t}var nd=!1;function rd(t,e){if(!t||nd)return"";nd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{nd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$o(t):""}function MA(t){switch(t.tag){case 5:return $o(t.type);case 16:return $o("Lazy");case 13:return $o("Suspense");case 19:return $o("SuspenseList");case 0:case 2:case 15:return t=rd(t.type,!1),t;case 11:return t=rd(t.type.render,!1),t;case 1:return t=rd(t.type,!0),t;default:return""}}function rf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case os:return"Fragment";case ss:return"Portal";case ef:return"Profiler";case Kp:return"StrictMode";case tf:return"Suspense";case nf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gw:return(t.displayName||"Context")+".Consumer";case mw:return(t._context.displayName||"Context")+".Provider";case Qp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yp:return e=t.displayName||null,e!==null?e:rf(t.type)||"Memo";case gr:e=t._payload,t=t._init;try{return rf(t(e))}catch{}}return null}function jA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rf(e);case 8:return e===Kp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function FA(t){var e=vw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fl(t){t._valueTracker||(t._valueTracker=FA(t))}function _w(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=vw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ju(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sf(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function u0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=qr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ww(t,e){e=e.checked,e!=null&&Gp(t,"checked",e,!1)}function of(t,e){ww(t,e);var n=qr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?af(t,e.type,n):e.hasOwnProperty("defaultValue")&&af(t,e.type,qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function c0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function af(t,e,n){(e!=="number"||ju(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Wo=Array.isArray;function Ts(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+qr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function lf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function h0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Wo(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qr(n)}}function Ew(t,e){var n=qr(e.value),r=qr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function d0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Tw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Tw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ul,xw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ul=Ul||document.createElement("div"),Ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ul.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},UA=["Webkit","ms","Moz","O"];Object.keys(ea).forEach(function(t){UA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ea[e]=ea[t]})});function Iw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ea.hasOwnProperty(t)&&ea[t]?(""+e).trim():e+"px"}function Sw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Iw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var BA=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cf(t,e){if(e){if(BA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function hf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var df=null;function Xp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ff=null,xs=null,Is=null;function f0(t){if(t=nl(t)){if(typeof ff!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Bc(e),ff(t.stateNode,t.type,e))}}function Pw(t){xs?Is?Is.push(t):Is=[t]:xs=t}function Aw(){if(xs){var t=xs,e=Is;if(Is=xs=null,f0(t),e)for(t=0;t<e.length;t++)f0(e[t])}}function Cw(t,e){return t(e)}function kw(){}var id=!1;function Rw(t,e,n){if(id)return t(e,n);id=!0;try{return Cw(t,e,n)}finally{id=!1,(xs!==null||Is!==null)&&(kw(),Aw())}}function Ea(t,e){var n=t.stateNode;if(n===null)return null;var r=Bc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var pf=!1;if(Hn)try{var No={};Object.defineProperty(No,"passive",{get:function(){pf=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{pf=!1}function zA(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ta=!1,Fu=null,Uu=!1,mf=null,$A={onError:function(t){ta=!0,Fu=t}};function WA(t,e,n,r,i,s,o,a,l){ta=!1,Fu=null,zA.apply($A,arguments)}function HA(t,e,n,r,i,s,o,a,l){if(WA.apply(this,arguments),ta){if(ta){var c=Fu;ta=!1,Fu=null}else throw Error(U(198));Uu||(Uu=!0,mf=c)}}function $i(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function bw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function p0(t){if($i(t)!==t)throw Error(U(188))}function qA(t){var e=t.alternate;if(!e){if(e=$i(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return p0(i),t;if(s===r)return p0(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Nw(t){return t=qA(t),t!==null?Dw(t):null}function Dw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dw(t);if(e!==null)return e;t=t.sibling}return null}var Vw=jt.unstable_scheduleCallback,m0=jt.unstable_cancelCallback,GA=jt.unstable_shouldYield,KA=jt.unstable_requestPaint,Le=jt.unstable_now,QA=jt.unstable_getCurrentPriorityLevel,Jp=jt.unstable_ImmediatePriority,Lw=jt.unstable_UserBlockingPriority,Bu=jt.unstable_NormalPriority,YA=jt.unstable_LowPriority,Ow=jt.unstable_IdlePriority,Mc=null,Tn=null;function XA(t){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(Mc,t,void 0,(t.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:eC,JA=Math.log,ZA=Math.LN2;function eC(t){return t>>>=0,t===0?32:31-(JA(t)/ZA|0)|0}var Bl=64,zl=4194304;function Ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ho(a):(s&=o,s!==0&&(r=Ho(s)))}else o=n&~i,o!==0?r=Ho(o):s!==0&&(r=Ho(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-an(e),i=1<<n,r|=t[n],e&=~i;return r}function tC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-an(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=tC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function gf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mw(){var t=Bl;return Bl<<=1,!(Bl&4194240)&&(Bl=64),t}function sd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function el(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-an(e),t[e]=n}function rC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-an(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Zp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-an(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function jw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Fw,em,Uw,Bw,zw,yf=!1,$l=[],Cr=null,kr=null,Rr=null,Ta=new Map,xa=new Map,_r=[],iC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function g0(t,e){switch(t){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":Ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(e.pointerId)}}function Do(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=nl(e),e!==null&&em(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function sC(t,e,n,r,i){switch(e){case"focusin":return Cr=Do(Cr,t,e,n,r,i),!0;case"dragenter":return kr=Do(kr,t,e,n,r,i),!0;case"mouseover":return Rr=Do(Rr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ta.set(s,Do(Ta.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,xa.set(s,Do(xa.get(s)||null,t,e,n,r,i)),!0}return!1}function $w(t){var e=Ei(t.target);if(e!==null){var n=$i(e);if(n!==null){if(e=n.tag,e===13){if(e=bw(n),e!==null){t.blockedOn=e,zw(t.priority,function(){Uw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);df=r,n.target.dispatchEvent(r),df=null}else return e=nl(n),e!==null&&em(e),t.blockedOn=n,!1;e.shift()}return!0}function y0(t,e,n){pu(t)&&n.delete(e)}function oC(){yf=!1,Cr!==null&&pu(Cr)&&(Cr=null),kr!==null&&pu(kr)&&(kr=null),Rr!==null&&pu(Rr)&&(Rr=null),Ta.forEach(y0),xa.forEach(y0)}function Vo(t,e){t.blockedOn===e&&(t.blockedOn=null,yf||(yf=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,oC)))}function Ia(t){function e(i){return Vo(i,t)}if(0<$l.length){Vo($l[0],t);for(var n=1;n<$l.length;n++){var r=$l[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Cr!==null&&Vo(Cr,t),kr!==null&&Vo(kr,t),Rr!==null&&Vo(Rr,t),Ta.forEach(e),xa.forEach(e),n=0;n<_r.length;n++)r=_r[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_r.length&&(n=_r[0],n.blockedOn===null);)$w(n),n.blockedOn===null&&_r.shift()}var Ss=rr.ReactCurrentBatchConfig,$u=!0;function aC(t,e,n,r){var i=de,s=Ss.transition;Ss.transition=null;try{de=1,tm(t,e,n,r)}finally{de=i,Ss.transition=s}}function lC(t,e,n,r){var i=de,s=Ss.transition;Ss.transition=null;try{de=4,tm(t,e,n,r)}finally{de=i,Ss.transition=s}}function tm(t,e,n,r){if($u){var i=vf(t,e,n,r);if(i===null)md(t,e,r,Wu,n),g0(t,r);else if(sC(i,t,e,n,r))r.stopPropagation();else if(g0(t,r),e&4&&-1<iC.indexOf(t)){for(;i!==null;){var s=nl(i);if(s!==null&&Fw(s),s=vf(t,e,n,r),s===null&&md(t,e,r,Wu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else md(t,e,r,null,n)}}var Wu=null;function vf(t,e,n,r){if(Wu=null,t=Xp(r),t=Ei(t),t!==null)if(e=$i(t),e===null)t=null;else if(n=e.tag,n===13){if(t=bw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wu=t,null}function Ww(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(QA()){case Jp:return 1;case Lw:return 4;case Bu:case YA:return 16;case Ow:return 536870912;default:return 16}default:return 16}}var Sr=null,nm=null,mu=null;function Hw(){if(mu)return mu;var t,e=nm,n=e.length,r,i="value"in Sr?Sr.value:Sr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return mu=i.slice(t,1<r?1-r:void 0)}function gu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wl(){return!0}function v0(){return!1}function Bt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wl:v0,this.isPropagationStopped=v0,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),e}var Xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rm=Bt(Xs),tl=Ce({},Xs,{view:0,detail:0}),uC=Bt(tl),od,ad,Lo,jc=Ce({},tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:im,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Lo&&(Lo&&t.type==="mousemove"?(od=t.screenX-Lo.screenX,ad=t.screenY-Lo.screenY):ad=od=0,Lo=t),od)},movementY:function(t){return"movementY"in t?t.movementY:ad}}),_0=Bt(jc),cC=Ce({},jc,{dataTransfer:0}),hC=Bt(cC),dC=Ce({},tl,{relatedTarget:0}),ld=Bt(dC),fC=Ce({},Xs,{animationName:0,elapsedTime:0,pseudoElement:0}),pC=Bt(fC),mC=Ce({},Xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gC=Bt(mC),yC=Ce({},Xs,{data:0}),w0=Bt(yC),vC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_C={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function EC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wC[t])?!!e[t]:!1}function im(){return EC}var TC=Ce({},tl,{key:function(t){if(t.key){var e=vC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_C[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:im,charCode:function(t){return t.type==="keypress"?gu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xC=Bt(TC),IC=Ce({},jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E0=Bt(IC),SC=Ce({},tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:im}),PC=Bt(SC),AC=Ce({},Xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),CC=Bt(AC),kC=Ce({},jc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),RC=Bt(kC),bC=[9,13,27,32],sm=Hn&&"CompositionEvent"in window,na=null;Hn&&"documentMode"in document&&(na=document.documentMode);var NC=Hn&&"TextEvent"in window&&!na,qw=Hn&&(!sm||na&&8<na&&11>=na),T0=String.fromCharCode(32),x0=!1;function Gw(t,e){switch(t){case"keyup":return bC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function DC(t,e){switch(t){case"compositionend":return Kw(e);case"keypress":return e.which!==32?null:(x0=!0,T0);case"textInput":return t=e.data,t===T0&&x0?null:t;default:return null}}function VC(t,e){if(as)return t==="compositionend"||!sm&&Gw(t,e)?(t=Hw(),mu=nm=Sr=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qw&&e.locale!=="ko"?null:e.data;default:return null}}var LC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function I0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!LC[t.type]:e==="textarea"}function Qw(t,e,n,r){Pw(r),e=Hu(e,"onChange"),0<e.length&&(n=new rm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ra=null,Sa=null;function OC(t){oE(t,0)}function Fc(t){var e=cs(t);if(_w(e))return t}function MC(t,e){if(t==="change")return e}var Yw=!1;if(Hn){var ud;if(Hn){var cd="oninput"in document;if(!cd){var S0=document.createElement("div");S0.setAttribute("oninput","return;"),cd=typeof S0.oninput=="function"}ud=cd}else ud=!1;Yw=ud&&(!document.documentMode||9<document.documentMode)}function P0(){ra&&(ra.detachEvent("onpropertychange",Xw),Sa=ra=null)}function Xw(t){if(t.propertyName==="value"&&Fc(Sa)){var e=[];Qw(e,Sa,t,Xp(t)),Rw(OC,e)}}function jC(t,e,n){t==="focusin"?(P0(),ra=e,Sa=n,ra.attachEvent("onpropertychange",Xw)):t==="focusout"&&P0()}function FC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fc(Sa)}function UC(t,e){if(t==="click")return Fc(e)}function BC(t,e){if(t==="input"||t==="change")return Fc(e)}function zC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var cn=typeof Object.is=="function"?Object.is:zC;function Pa(t,e){if(cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zd.call(e,i)||!cn(t[i],e[i]))return!1}return!0}function A0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function C0(t,e){var n=A0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=A0(n)}}function Jw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Jw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zw(){for(var t=window,e=ju();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ju(t.document)}return e}function om(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $C(t){var e=Zw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Jw(n.ownerDocument.documentElement,n)){if(r!==null&&om(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=C0(n,s);var o=C0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var WC=Hn&&"documentMode"in document&&11>=document.documentMode,ls=null,_f=null,ia=null,wf=!1;function k0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wf||ls==null||ls!==ju(r)||(r=ls,"selectionStart"in r&&om(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ia&&Pa(ia,r)||(ia=r,r=Hu(_f,"onSelect"),0<r.length&&(e=new rm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ls)))}function Hl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var us={animationend:Hl("Animation","AnimationEnd"),animationiteration:Hl("Animation","AnimationIteration"),animationstart:Hl("Animation","AnimationStart"),transitionend:Hl("Transition","TransitionEnd")},hd={},eE={};Hn&&(eE=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function Uc(t){if(hd[t])return hd[t];if(!us[t])return t;var e=us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in eE)return hd[t]=e[n];return t}var tE=Uc("animationend"),nE=Uc("animationiteration"),rE=Uc("animationstart"),iE=Uc("transitionend"),sE=new Map,R0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ni(t,e){sE.set(t,e),zi(e,[t])}for(var dd=0;dd<R0.length;dd++){var fd=R0[dd],HC=fd.toLowerCase(),qC=fd[0].toUpperCase()+fd.slice(1);ni(HC,"on"+qC)}ni(tE,"onAnimationEnd");ni(nE,"onAnimationIteration");ni(rE,"onAnimationStart");ni("dblclick","onDoubleClick");ni("focusin","onFocus");ni("focusout","onBlur");ni(iE,"onTransitionEnd");Ds("onMouseEnter",["mouseout","mouseover"]);Ds("onMouseLeave",["mouseout","mouseover"]);Ds("onPointerEnter",["pointerout","pointerover"]);Ds("onPointerLeave",["pointerout","pointerover"]);zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zi("onBeforeInput",["compositionend","keypress","textInput","paste"]);zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GC=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function b0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,HA(r,e,void 0,t),t.currentTarget=null}function oE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;b0(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;b0(i,a,c),s=l}}}if(Uu)throw t=mf,Uu=!1,mf=null,t}function _e(t,e){var n=e[Sf];n===void 0&&(n=e[Sf]=new Set);var r=t+"__bubble";n.has(r)||(aE(e,t,2,!1),n.add(r))}function pd(t,e,n){var r=0;e&&(r|=4),aE(n,t,r,e)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Aa(t){if(!t[ql]){t[ql]=!0,pw.forEach(function(n){n!=="selectionchange"&&(GC.has(n)||pd(n,!1,t),pd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ql]||(e[ql]=!0,pd("selectionchange",!1,e))}}function aE(t,e,n,r){switch(Ww(e)){case 1:var i=aC;break;case 4:i=lC;break;default:i=tm}n=i.bind(null,e,n,t),i=void 0,!pf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function md(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ei(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Rw(function(){var c=s,h=Xp(n),d=[];e:{var p=sE.get(t);if(p!==void 0){var y=rm,x=t;switch(t){case"keypress":if(gu(n)===0)break e;case"keydown":case"keyup":y=xC;break;case"focusin":x="focus",y=ld;break;case"focusout":x="blur",y=ld;break;case"beforeblur":case"afterblur":y=ld;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=_0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=hC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=PC;break;case tE:case nE:case rE:y=pC;break;case iE:y=CC;break;case"scroll":y=uC;break;case"wheel":y=RC;break;case"copy":case"cut":case"paste":y=gC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=E0}var S=(e&4)!==0,C=!S&&t==="scroll",w=S?p!==null?p+"Capture":null:p;S=[];for(var v=c,_;v!==null;){_=v;var b=_.stateNode;if(_.tag===5&&b!==null&&(_=b,w!==null&&(b=Ea(v,w),b!=null&&S.push(Ca(v,b,_)))),C)break;v=v.return}0<S.length&&(p=new y(p,x,null,n,h),d.push({event:p,listeners:S}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",p&&n!==df&&(x=n.relatedTarget||n.fromElement)&&(Ei(x)||x[qn]))break e;if((y||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=c,x=x?Ei(x):null,x!==null&&(C=$i(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(S=_0,b="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=E0,b="onPointerLeave",w="onPointerEnter",v="pointer"),C=y==null?p:cs(y),_=x==null?p:cs(x),p=new S(b,v+"leave",y,n,h),p.target=C,p.relatedTarget=_,b=null,Ei(h)===c&&(S=new S(w,v+"enter",x,n,h),S.target=_,S.relatedTarget=C,b=S),C=b,y&&x)t:{for(S=y,w=x,v=0,_=S;_;_=es(_))v++;for(_=0,b=w;b;b=es(b))_++;for(;0<v-_;)S=es(S),v--;for(;0<_-v;)w=es(w),_--;for(;v--;){if(S===w||w!==null&&S===w.alternate)break t;S=es(S),w=es(w)}S=null}else S=null;y!==null&&N0(d,p,y,S,!1),x!==null&&C!==null&&N0(d,C,x,S,!0)}}e:{if(p=c?cs(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var L=MC;else if(I0(p))if(Yw)L=BC;else{L=FC;var M=jC}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(L=UC);if(L&&(L=L(t,c))){Qw(d,L,n,h);break e}M&&M(t,p,c),t==="focusout"&&(M=p._wrapperState)&&M.controlled&&p.type==="number"&&af(p,"number",p.value)}switch(M=c?cs(c):window,t){case"focusin":(I0(M)||M.contentEditable==="true")&&(ls=M,_f=c,ia=null);break;case"focusout":ia=_f=ls=null;break;case"mousedown":wf=!0;break;case"contextmenu":case"mouseup":case"dragend":wf=!1,k0(d,n,h);break;case"selectionchange":if(WC)break;case"keydown":case"keyup":k0(d,n,h)}var I;if(sm)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else as?Gw(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(qw&&n.locale!=="ko"&&(as||E!=="onCompositionStart"?E==="onCompositionEnd"&&as&&(I=Hw()):(Sr=h,nm="value"in Sr?Sr.value:Sr.textContent,as=!0)),M=Hu(c,E),0<M.length&&(E=new w0(E,t,null,n,h),d.push({event:E,listeners:M}),I?E.data=I:(I=Kw(n),I!==null&&(E.data=I)))),(I=NC?DC(t,n):VC(t,n))&&(c=Hu(c,"onBeforeInput"),0<c.length&&(h=new w0("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=I))}oE(d,e)})}function Ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ea(t,n),s!=null&&r.unshift(Ca(t,s,i)),s=Ea(t,e),s!=null&&r.push(Ca(t,s,i))),t=t.return}return r}function es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function N0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Ea(n,s),l!=null&&o.unshift(Ca(n,l,a))):i||(l=Ea(n,s),l!=null&&o.push(Ca(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var KC=/\r\n?/g,QC=/\u0000|\uFFFD/g;function D0(t){return(typeof t=="string"?t:""+t).replace(KC,`
`).replace(QC,"")}function Gl(t,e,n){if(e=D0(e),D0(t)!==e&&n)throw Error(U(425))}function qu(){}var Ef=null,Tf=null;function xf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var If=typeof setTimeout=="function"?setTimeout:void 0,YC=typeof clearTimeout=="function"?clearTimeout:void 0,V0=typeof Promise=="function"?Promise:void 0,XC=typeof queueMicrotask=="function"?queueMicrotask:typeof V0<"u"?function(t){return V0.resolve(null).then(t).catch(JC)}:If;function JC(t){setTimeout(function(){throw t})}function gd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ia(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ia(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function L0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),En="__reactFiber$"+Js,ka="__reactProps$"+Js,qn="__reactContainer$"+Js,Sf="__reactEvents$"+Js,ZC="__reactListeners$"+Js,ek="__reactHandles$"+Js;function Ei(t){var e=t[En];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qn]||n[En]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=L0(t);t!==null;){if(n=t[En])return n;t=L0(t)}return e}t=n,n=t.parentNode}return null}function nl(t){return t=t[En]||t[qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Bc(t){return t[ka]||null}var Pf=[],hs=-1;function ri(t){return{current:t}}function Ee(t){0>hs||(t.current=Pf[hs],Pf[hs]=null,hs--)}function ye(t,e){hs++,Pf[hs]=t.current,t.current=e}var Gr={},pt=ri(Gr),kt=ri(!1),Ri=Gr;function Vs(t,e){var n=t.type.contextTypes;if(!n)return Gr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Rt(t){return t=t.childContextTypes,t!=null}function Gu(){Ee(kt),Ee(pt)}function O0(t,e,n){if(pt.current!==Gr)throw Error(U(168));ye(pt,e),ye(kt,n)}function lE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,jA(t)||"Unknown",i));return Ce({},n,r)}function Ku(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gr,Ri=pt.current,ye(pt,t),ye(kt,kt.current),!0}function M0(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=lE(t,e,Ri),r.__reactInternalMemoizedMergedChildContext=t,Ee(kt),Ee(pt),ye(pt,t)):Ee(kt),ye(kt,n)}var Vn=null,zc=!1,yd=!1;function uE(t){Vn===null?Vn=[t]:Vn.push(t)}function tk(t){zc=!0,uE(t)}function ii(){if(!yd&&Vn!==null){yd=!0;var t=0,e=de;try{var n=Vn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Vn=null,zc=!1}catch(i){throw Vn!==null&&(Vn=Vn.slice(t+1)),Vw(Jp,ii),i}finally{de=e,yd=!1}}return null}var ds=[],fs=0,Qu=null,Yu=0,Wt=[],Ht=0,bi=null,Ln=1,On="";function gi(t,e){ds[fs++]=Yu,ds[fs++]=Qu,Qu=t,Yu=e}function cE(t,e,n){Wt[Ht++]=Ln,Wt[Ht++]=On,Wt[Ht++]=bi,bi=t;var r=Ln;t=On;var i=32-an(r)-1;r&=~(1<<i),n+=1;var s=32-an(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ln=1<<32-an(e)+i|n<<i|r,On=s+t}else Ln=1<<s|n<<i|r,On=t}function am(t){t.return!==null&&(gi(t,1),cE(t,1,0))}function lm(t){for(;t===Qu;)Qu=ds[--fs],ds[fs]=null,Yu=ds[--fs],ds[fs]=null;for(;t===bi;)bi=Wt[--Ht],Wt[Ht]=null,On=Wt[--Ht],Wt[Ht]=null,Ln=Wt[--Ht],Wt[Ht]=null}var Mt=null,Lt=null,xe=!1,rn=null;function hE(t,e){var n=Gt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function j0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mt=t,Lt=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mt=t,Lt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=bi!==null?{id:Ln,overflow:On}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mt=t,Lt=null,!0):!1;default:return!1}}function Af(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cf(t){if(xe){var e=Lt;if(e){var n=e;if(!j0(t,e)){if(Af(t))throw Error(U(418));e=br(n.nextSibling);var r=Mt;e&&j0(t,e)?hE(r,n):(t.flags=t.flags&-4097|2,xe=!1,Mt=t)}}else{if(Af(t))throw Error(U(418));t.flags=t.flags&-4097|2,xe=!1,Mt=t}}}function F0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mt=t}function Kl(t){if(t!==Mt)return!1;if(!xe)return F0(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xf(t.type,t.memoizedProps)),e&&(e=Lt)){if(Af(t))throw dE(),Error(U(418));for(;e;)hE(t,e),e=br(e.nextSibling)}if(F0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Lt=br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Lt=null}}else Lt=Mt?br(t.stateNode.nextSibling):null;return!0}function dE(){for(var t=Lt;t;)t=br(t.nextSibling)}function Ls(){Lt=Mt=null,xe=!1}function um(t){rn===null?rn=[t]:rn.push(t)}var nk=rr.ReactCurrentBatchConfig;function Oo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Ql(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function U0(t){var e=t._init;return e(t._payload)}function fE(t){function e(w,v){if(t){var _=w.deletions;_===null?(w.deletions=[v],w.flags|=16):_.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function i(w,v){return w=Lr(w,v),w.index=0,w.sibling=null,w}function s(w,v,_){return w.index=_,t?(_=w.alternate,_!==null?(_=_.index,_<v?(w.flags|=2,v):_):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function a(w,v,_,b){return v===null||v.tag!==6?(v=Id(_,w.mode,b),v.return=w,v):(v=i(v,_),v.return=w,v)}function l(w,v,_,b){var L=_.type;return L===os?h(w,v,_.props.children,b,_.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===gr&&U0(L)===v.type)?(b=i(v,_.props),b.ref=Oo(w,v,_),b.return=w,b):(b=xu(_.type,_.key,_.props,null,w.mode,b),b.ref=Oo(w,v,_),b.return=w,b)}function c(w,v,_,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Sd(_,w.mode,b),v.return=w,v):(v=i(v,_.children||[]),v.return=w,v)}function h(w,v,_,b,L){return v===null||v.tag!==7?(v=Ai(_,w.mode,b,L),v.return=w,v):(v=i(v,_),v.return=w,v)}function d(w,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Id(""+v,w.mode,_),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case jl:return _=xu(v.type,v.key,v.props,null,w.mode,_),_.ref=Oo(w,null,v),_.return=w,_;case ss:return v=Sd(v,w.mode,_),v.return=w,v;case gr:var b=v._init;return d(w,b(v._payload),_)}if(Wo(v)||bo(v))return v=Ai(v,w.mode,_,null),v.return=w,v;Ql(w,v)}return null}function p(w,v,_,b){var L=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return L!==null?null:a(w,v,""+_,b);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case jl:return _.key===L?l(w,v,_,b):null;case ss:return _.key===L?c(w,v,_,b):null;case gr:return L=_._init,p(w,v,L(_._payload),b)}if(Wo(_)||bo(_))return L!==null?null:h(w,v,_,b,null);Ql(w,_)}return null}function y(w,v,_,b,L){if(typeof b=="string"&&b!==""||typeof b=="number")return w=w.get(_)||null,a(v,w,""+b,L);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case jl:return w=w.get(b.key===null?_:b.key)||null,l(v,w,b,L);case ss:return w=w.get(b.key===null?_:b.key)||null,c(v,w,b,L);case gr:var M=b._init;return y(w,v,_,M(b._payload),L)}if(Wo(b)||bo(b))return w=w.get(_)||null,h(v,w,b,L,null);Ql(v,b)}return null}function x(w,v,_,b){for(var L=null,M=null,I=v,E=v=0,P=null;I!==null&&E<_.length;E++){I.index>E?(P=I,I=null):P=I.sibling;var A=p(w,I,_[E],b);if(A===null){I===null&&(I=P);break}t&&I&&A.alternate===null&&e(w,I),v=s(A,v,E),M===null?L=A:M.sibling=A,M=A,I=P}if(E===_.length)return n(w,I),xe&&gi(w,E),L;if(I===null){for(;E<_.length;E++)I=d(w,_[E],b),I!==null&&(v=s(I,v,E),M===null?L=I:M.sibling=I,M=I);return xe&&gi(w,E),L}for(I=r(w,I);E<_.length;E++)P=y(I,w,E,_[E],b),P!==null&&(t&&P.alternate!==null&&I.delete(P.key===null?E:P.key),v=s(P,v,E),M===null?L=P:M.sibling=P,M=P);return t&&I.forEach(function(R){return e(w,R)}),xe&&gi(w,E),L}function S(w,v,_,b){var L=bo(_);if(typeof L!="function")throw Error(U(150));if(_=L.call(_),_==null)throw Error(U(151));for(var M=L=null,I=v,E=v=0,P=null,A=_.next();I!==null&&!A.done;E++,A=_.next()){I.index>E?(P=I,I=null):P=I.sibling;var R=p(w,I,A.value,b);if(R===null){I===null&&(I=P);break}t&&I&&R.alternate===null&&e(w,I),v=s(R,v,E),M===null?L=R:M.sibling=R,M=R,I=P}if(A.done)return n(w,I),xe&&gi(w,E),L;if(I===null){for(;!A.done;E++,A=_.next())A=d(w,A.value,b),A!==null&&(v=s(A,v,E),M===null?L=A:M.sibling=A,M=A);return xe&&gi(w,E),L}for(I=r(w,I);!A.done;E++,A=_.next())A=y(I,w,E,A.value,b),A!==null&&(t&&A.alternate!==null&&I.delete(A.key===null?E:A.key),v=s(A,v,E),M===null?L=A:M.sibling=A,M=A);return t&&I.forEach(function(D){return e(w,D)}),xe&&gi(w,E),L}function C(w,v,_,b){if(typeof _=="object"&&_!==null&&_.type===os&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case jl:e:{for(var L=_.key,M=v;M!==null;){if(M.key===L){if(L=_.type,L===os){if(M.tag===7){n(w,M.sibling),v=i(M,_.props.children),v.return=w,w=v;break e}}else if(M.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===gr&&U0(L)===M.type){n(w,M.sibling),v=i(M,_.props),v.ref=Oo(w,M,_),v.return=w,w=v;break e}n(w,M);break}else e(w,M);M=M.sibling}_.type===os?(v=Ai(_.props.children,w.mode,b,_.key),v.return=w,w=v):(b=xu(_.type,_.key,_.props,null,w.mode,b),b.ref=Oo(w,v,_),b.return=w,w=b)}return o(w);case ss:e:{for(M=_.key;v!==null;){if(v.key===M)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(w,v.sibling),v=i(v,_.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=Sd(_,w.mode,b),v.return=w,w=v}return o(w);case gr:return M=_._init,C(w,v,M(_._payload),b)}if(Wo(_))return x(w,v,_,b);if(bo(_))return S(w,v,_,b);Ql(w,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(w,v.sibling),v=i(v,_),v.return=w,w=v):(n(w,v),v=Id(_,w.mode,b),v.return=w,w=v),o(w)):n(w,v)}return C}var Os=fE(!0),pE=fE(!1),Xu=ri(null),Ju=null,ps=null,cm=null;function hm(){cm=ps=Ju=null}function dm(t){var e=Xu.current;Ee(Xu),t._currentValue=e}function kf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ps(t,e){Ju=t,cm=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ct=!0),t.firstContext=null)}function Qt(t){var e=t._currentValue;if(cm!==t)if(t={context:t,memoizedValue:e,next:null},ps===null){if(Ju===null)throw Error(U(308));ps=t,Ju.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return e}var Ti=null;function fm(t){Ti===null?Ti=[t]:Ti.push(t)}function mE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,fm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Gn(t,r)}function Gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yr=!1;function pm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Gn(t,n)}return i=r.interleaved,i===null?(e.next=e,fm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Gn(t,n)}function yu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zp(t,n)}}function B0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zu(t,e,n,r){var i=t.updateQueue;yr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,h=c=l=null,a=s;do{var p=a.lane,y=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,S=a;switch(p=e,y=n,S.tag){case 1:if(x=S.payload,typeof x=="function"){d=x.call(y,d,p);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,p=typeof x=="function"?x.call(y,d,p):x,p==null)break e;d=Ce({},d,p);break e;case 2:yr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=y,l=d):h=h.next=y,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Di|=o,t.lanes=o,t.memoizedState=d}}function z0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var rl={},xn=ri(rl),Ra=ri(rl),ba=ri(rl);function xi(t){if(t===rl)throw Error(U(174));return t}function mm(t,e){switch(ye(ba,e),ye(Ra,t),ye(xn,rl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uf(e,t)}Ee(xn),ye(xn,e)}function Ms(){Ee(xn),Ee(Ra),Ee(ba)}function yE(t){xi(ba.current);var e=xi(xn.current),n=uf(e,t.type);e!==n&&(ye(Ra,t),ye(xn,n))}function gm(t){Ra.current===t&&(Ee(xn),Ee(Ra))}var Se=ri(0);function ec(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vd=[];function ym(){for(var t=0;t<vd.length;t++)vd[t]._workInProgressVersionPrimary=null;vd.length=0}var vu=rr.ReactCurrentDispatcher,_d=rr.ReactCurrentBatchConfig,Ni=0,Ae=null,We=null,Ye=null,tc=!1,sa=!1,Na=0,rk=0;function at(){throw Error(U(321))}function vm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!cn(t[n],e[n]))return!1;return!0}function _m(t,e,n,r,i,s){if(Ni=s,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vu.current=t===null||t.memoizedState===null?ak:lk,t=n(r,i),sa){s=0;do{if(sa=!1,Na=0,25<=s)throw Error(U(301));s+=1,Ye=We=null,e.updateQueue=null,vu.current=uk,t=n(r,i)}while(sa)}if(vu.current=nc,e=We!==null&&We.next!==null,Ni=0,Ye=We=Ae=null,tc=!1,e)throw Error(U(300));return t}function wm(){var t=Na!==0;return Na=0,t}function _n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Ae.memoizedState=Ye=t:Ye=Ye.next=t,Ye}function Yt(){if(We===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var e=Ye===null?Ae.memoizedState:Ye.next;if(e!==null)Ye=e,We=t;else{if(t===null)throw Error(U(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Ye===null?Ae.memoizedState=Ye=t:Ye=Ye.next=t}return Ye}function Da(t,e){return typeof e=="function"?e(t):e}function wd(t){var e=Yt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=We,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Ni&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Ae.lanes|=h,Di|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,cn(r,e.memoizedState)||(Ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ae.lanes|=s,Di|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ed(t){var e=Yt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);cn(s,e.memoizedState)||(Ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function vE(){}function _E(t,e){var n=Ae,r=Yt(),i=e(),s=!cn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ct=!0),r=r.queue,Em(TE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Va(9,EE.bind(null,n,r,i,e),void 0,null),Xe===null)throw Error(U(349));Ni&30||wE(n,e,i)}return i}function wE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function EE(t,e,n,r){e.value=n,e.getSnapshot=r,xE(e)&&IE(t)}function TE(t,e,n){return n(function(){xE(e)&&IE(t)})}function xE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!cn(t,n)}catch{return!0}}function IE(t){var e=Gn(t,1);e!==null&&ln(e,t,1,-1)}function $0(t){var e=_n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:t},e.queue=t,t=t.dispatch=ok.bind(null,Ae,t),[e.memoizedState,t]}function Va(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function SE(){return Yt().memoizedState}function _u(t,e,n,r){var i=_n();Ae.flags|=t,i.memoizedState=Va(1|e,n,void 0,r===void 0?null:r)}function $c(t,e,n,r){var i=Yt();r=r===void 0?null:r;var s=void 0;if(We!==null){var o=We.memoizedState;if(s=o.destroy,r!==null&&vm(r,o.deps)){i.memoizedState=Va(e,n,s,r);return}}Ae.flags|=t,i.memoizedState=Va(1|e,n,s,r)}function W0(t,e){return _u(8390656,8,t,e)}function Em(t,e){return $c(2048,8,t,e)}function PE(t,e){return $c(4,2,t,e)}function AE(t,e){return $c(4,4,t,e)}function CE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function kE(t,e,n){return n=n!=null?n.concat([t]):null,$c(4,4,CE.bind(null,e,t),n)}function Tm(){}function RE(t,e){var n=Yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function bE(t,e){var n=Yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function NE(t,e,n){return Ni&21?(cn(n,e)||(n=Mw(),Ae.lanes|=n,Di|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ct=!0),t.memoizedState=n)}function ik(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=_d.transition;_d.transition={};try{t(!1),e()}finally{de=n,_d.transition=r}}function DE(){return Yt().memoizedState}function sk(t,e,n){var r=Vr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},VE(t))LE(e,n);else if(n=mE(t,e,n,r),n!==null){var i=Tt();ln(n,t,r,i),OE(n,e,r)}}function ok(t,e,n){var r=Vr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(VE(t))LE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,cn(a,o)){var l=e.interleaved;l===null?(i.next=i,fm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=mE(t,e,i,r),n!==null&&(i=Tt(),ln(n,t,r,i),OE(n,e,r))}}function VE(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function LE(t,e){sa=tc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function OE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zp(t,n)}}var nc={readContext:Qt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},ak={readContext:Qt,useCallback:function(t,e){return _n().memoizedState=[t,e===void 0?null:e],t},useContext:Qt,useEffect:W0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_u(4194308,4,CE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _u(4194308,4,t,e)},useInsertionEffect:function(t,e){return _u(4,2,t,e)},useMemo:function(t,e){var n=_n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=sk.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=_n();return t={current:t},e.memoizedState=t},useState:$0,useDebugValue:Tm,useDeferredValue:function(t){return _n().memoizedState=t},useTransition:function(){var t=$0(!1),e=t[0];return t=ik.bind(null,t[1]),_n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,i=_n();if(xe){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Xe===null)throw Error(U(349));Ni&30||wE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,W0(TE.bind(null,r,s,t),[t]),r.flags|=2048,Va(9,EE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=_n(),e=Xe.identifierPrefix;if(xe){var n=On,r=Ln;n=(r&~(1<<32-an(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Na++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lk={readContext:Qt,useCallback:RE,useContext:Qt,useEffect:Em,useImperativeHandle:kE,useInsertionEffect:PE,useLayoutEffect:AE,useMemo:bE,useReducer:wd,useRef:SE,useState:function(){return wd(Da)},useDebugValue:Tm,useDeferredValue:function(t){var e=Yt();return NE(e,We.memoizedState,t)},useTransition:function(){var t=wd(Da)[0],e=Yt().memoizedState;return[t,e]},useMutableSource:vE,useSyncExternalStore:_E,useId:DE,unstable_isNewReconciler:!1},uk={readContext:Qt,useCallback:RE,useContext:Qt,useEffect:Em,useImperativeHandle:kE,useInsertionEffect:PE,useLayoutEffect:AE,useMemo:bE,useReducer:Ed,useRef:SE,useState:function(){return Ed(Da)},useDebugValue:Tm,useDeferredValue:function(t){var e=Yt();return We===null?e.memoizedState=t:NE(e,We.memoizedState,t)},useTransition:function(){var t=Ed(Da)[0],e=Yt().memoizedState;return[t,e]},useMutableSource:vE,useSyncExternalStore:_E,useId:DE,unstable_isNewReconciler:!1};function tn(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Rf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wc={isMounted:function(t){return(t=t._reactInternals)?$i(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Tt(),i=Vr(t),s=Un(r,i);s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,i),e!==null&&(ln(e,t,i,r),yu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Tt(),i=Vr(t),s=Un(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,i),e!==null&&(ln(e,t,i,r),yu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Tt(),r=Vr(t),i=Un(n,r);i.tag=2,e!=null&&(i.callback=e),e=Nr(t,i,r),e!==null&&(ln(e,t,r,n),yu(e,t,r))}};function H0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Pa(n,r)||!Pa(i,s):!0}function ME(t,e,n){var r=!1,i=Gr,s=e.contextType;return typeof s=="object"&&s!==null?s=Qt(s):(i=Rt(e)?Ri:pt.current,r=e.contextTypes,s=(r=r!=null)?Vs(t,i):Gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function q0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wc.enqueueReplaceState(e,e.state,null)}function bf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},pm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Qt(s):(s=Rt(e)?Ri:pt.current,i.context=Vs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wc.enqueueReplaceState(i,i.state,null),Zu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,e){try{var n="",r=e;do n+=MA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Td(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ck=typeof WeakMap=="function"?WeakMap:Map;function jE(t,e,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ic||(ic=!0,zf=r),Nf(t,e)},n}function FE(t,e,n){n=Un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Nf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nf(t,e),typeof r!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function G0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ck;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Ik.bind(null,t,e,n),e.then(t,t))}function K0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Q0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Un(-1,1),e.tag=2,Nr(n,e,1))),n.lanes|=1),t)}var hk=rr.ReactCurrentOwner,Ct=!1;function wt(t,e,n,r){e.child=t===null?pE(e,null,n,r):Os(e,t.child,n,r)}function Y0(t,e,n,r,i){n=n.render;var s=e.ref;return Ps(e,i),r=_m(t,e,n,r,s,i),n=wm(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kn(t,e,i)):(xe&&n&&am(e),e.flags|=1,wt(t,e,r,i),e.child)}function X0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Rm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,UE(t,e,s,r,i)):(t=xu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Pa,n(o,r)&&t.ref===e.ref)return Kn(t,e,i)}return e.flags|=1,t=Lr(s,r),t.ref=e.ref,t.return=e,e.child=t}function UE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Pa(s,r)&&t.ref===e.ref)if(Ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ct=!0);else return e.lanes=t.lanes,Kn(t,e,i)}return Df(t,e,n,r,i)}function BE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(gs,Vt),Vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(gs,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(gs,Vt),Vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(gs,Vt),Vt|=r;return wt(t,e,i,n),e.child}function zE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Df(t,e,n,r,i){var s=Rt(n)?Ri:pt.current;return s=Vs(e,s),Ps(e,i),n=_m(t,e,n,r,s,i),r=wm(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kn(t,e,i)):(xe&&r&&am(e),e.flags|=1,wt(t,e,n,i),e.child)}function J0(t,e,n,r,i){if(Rt(n)){var s=!0;Ku(e)}else s=!1;if(Ps(e,i),e.stateNode===null)wu(t,e),ME(e,n,r),bf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Qt(c):(c=Rt(n)?Ri:pt.current,c=Vs(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&q0(e,o,r,c),yr=!1;var p=e.memoizedState;o.state=p,Zu(e,r,o,i),l=e.memoizedState,a!==r||p!==l||kt.current||yr?(typeof h=="function"&&(Rf(e,n,h,r),l=e.memoizedState),(a=yr||H0(e,n,a,r,p,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,gE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:tn(e.type,a),o.props=c,d=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Qt(l):(l=Rt(n)?Ri:pt.current,l=Vs(e,l));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||p!==l)&&q0(e,o,r,l),yr=!1,p=e.memoizedState,o.state=p,Zu(e,r,o,i);var x=e.memoizedState;a!==d||p!==x||kt.current||yr?(typeof y=="function"&&(Rf(e,n,y,r),x=e.memoizedState),(c=yr||H0(e,n,c,r,p,x,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Vf(t,e,n,r,s,i)}function Vf(t,e,n,r,i,s){zE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&M0(e,n,!1),Kn(t,e,s);r=e.stateNode,hk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Os(e,t.child,null,s),e.child=Os(e,null,a,s)):wt(t,e,a,s),e.memoizedState=r.state,i&&M0(e,n,!0),e.child}function $E(t){var e=t.stateNode;e.pendingContext?O0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&O0(t,e.context,!1),mm(t,e.containerInfo)}function Z0(t,e,n,r,i){return Ls(),um(i),e.flags|=256,wt(t,e,n,r),e.child}var Lf={dehydrated:null,treeContext:null,retryLane:0};function Of(t){return{baseLanes:t,cachePool:null,transitions:null}}function WE(t,e,n){var r=e.pendingProps,i=Se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Se,i&1),t===null)return Cf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gc(o,r,0,null),t=Ai(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Of(n),e.memoizedState=Lf,t):xm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return dk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Lr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Lr(a,s):(s=Ai(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Of(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lf,r}return s=t.child,t=s.sibling,r=Lr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xm(t,e){return e=Gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Yl(t,e,n,r){return r!==null&&um(r),Os(e,t.child,null,n),t=xm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Td(Error(U(422))),Yl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Gc({mode:"visible",children:r.children},i,0,null),s=Ai(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Os(e,t.child,null,o),e.child.memoizedState=Of(o),e.memoizedState=Lf,s);if(!(e.mode&1))return Yl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(U(419)),r=Td(s,r,void 0),Yl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ct||a){if(r=Xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Gn(t,i),ln(r,t,i,-1))}return km(),r=Td(Error(U(421))),Yl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Sk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Lt=br(i.nextSibling),Mt=e,xe=!0,rn=null,t!==null&&(Wt[Ht++]=Ln,Wt[Ht++]=On,Wt[Ht++]=bi,Ln=t.id,On=t.overflow,bi=e),e=xm(e,r.children),e.flags|=4096,e)}function ev(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),kf(t.return,e,n)}function xd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function HE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(wt(t,e,r.children,n),r=Se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ev(t,n,e);else if(t.tag===19)ev(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ec(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),xd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ec(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}xd(e,!0,n,null,s);break;case"together":xd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Di|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fk(t,e,n){switch(e.tag){case 3:$E(e),Ls();break;case 5:yE(e);break;case 1:Rt(e.type)&&Ku(e);break;case 4:mm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(Xu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Se,Se.current&1),e.flags|=128,null):n&e.child.childLanes?WE(t,e,n):(ye(Se,Se.current&1),t=Kn(t,e,n),t!==null?t.sibling:null);ye(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return HE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,BE(t,e,n)}return Kn(t,e,n)}var qE,Mf,GE,KE;qE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mf=function(){};GE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,xi(xn.current);var s=null;switch(n){case"input":i=sf(t,i),r=sf(t,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=lf(t,i),r=lf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=qu)}cf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_a.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_a.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};KE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Mo(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function pk(t,e,n){var r=e.pendingProps;switch(lm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(e),null;case 1:return Rt(e.type)&&Gu(),lt(e),null;case 3:return r=e.stateNode,Ms(),Ee(kt),Ee(pt),ym(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Kl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rn!==null&&(Hf(rn),rn=null))),Mf(t,e),lt(e),null;case 5:gm(e);var i=xi(ba.current);if(n=e.type,t!==null&&e.stateNode!=null)GE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return lt(e),null}if(t=xi(xn.current),Kl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[En]=e,r[ka]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<qo.length;i++)_e(qo[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":u0(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":h0(r,s),_e("invalid",r)}cf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Gl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Gl(r.textContent,a,t),i=["children",""+a]):_a.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Fl(r),c0(r,s,!0);break;case"textarea":Fl(r),d0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=qu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Tw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[En]=e,t[ka]=r,qE(t,e,!1,!1),e.stateNode=t;e:{switch(o=hf(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<qo.length;i++)_e(qo[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":u0(t,r),i=sf(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),_e("invalid",t);break;case"textarea":h0(t,r),i=lf(t,r),_e("invalid",t);break;default:i=r}cf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Sw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wa(t,l):typeof l=="number"&&wa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_a.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_e("scroll",t):l!=null&&Gp(t,s,l,o))}switch(n){case"input":Fl(t),c0(t,r,!1);break;case"textarea":Fl(t),d0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+qr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ts(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ts(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=qu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return lt(e),null;case 6:if(t&&e.stateNode!=null)KE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=xi(ba.current),xi(xn.current),Kl(e)){if(r=e.stateNode,n=e.memoizedProps,r[En]=e,(s=r.nodeValue!==n)&&(t=Mt,t!==null))switch(t.tag){case 3:Gl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Gl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[En]=e,e.stateNode=r}return lt(e),null;case 13:if(Ee(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&Lt!==null&&e.mode&1&&!(e.flags&128))dE(),Ls(),e.flags|=98560,s=!1;else if(s=Kl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[En]=e}else Ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;lt(e),s=!1}else rn!==null&&(Hf(rn),rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?He===0&&(He=3):km())),e.updateQueue!==null&&(e.flags|=4),lt(e),null);case 4:return Ms(),Mf(t,e),t===null&&Aa(e.stateNode.containerInfo),lt(e),null;case 10:return dm(e.type._context),lt(e),null;case 17:return Rt(e.type)&&Gu(),lt(e),null;case 19:if(Ee(Se),s=e.memoizedState,s===null)return lt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Mo(s,!1);else{if(He!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ec(t),o!==null){for(e.flags|=128,Mo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Se,Se.current&1|2),e.child}t=t.sibling}s.tail!==null&&Le()>Fs&&(e.flags|=128,r=!0,Mo(s,!1),e.lanes=4194304)}else{if(!r)if(t=ec(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xe)return lt(e),null}else 2*Le()-s.renderingStartTime>Fs&&n!==1073741824&&(e.flags|=128,r=!0,Mo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Le(),e.sibling=null,n=Se.current,ye(Se,r?n&1|2:n&1),e):(lt(e),null);case 22:case 23:return Cm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(lt(e),e.subtreeFlags&6&&(e.flags|=8192)):lt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function mk(t,e){switch(lm(e),e.tag){case 1:return Rt(e.type)&&Gu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ms(),Ee(kt),Ee(pt),ym(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gm(e),null;case 13:if(Ee(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Se),null;case 4:return Ms(),null;case 10:return dm(e.type._context),null;case 22:case 23:return Cm(),null;case 24:return null;default:return null}}var Xl=!1,dt=!1,gk=typeof WeakSet=="function"?WeakSet:Set,H=null;function ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(t,e,r)}else n.current=null}function jf(t,e,n){try{n()}catch(r){be(t,e,r)}}var tv=!1;function yk(t,e){if(Ef=$u,t=Zw(),om(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,d=t,p=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)p=d,d=y;for(;;){if(d===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++h===r&&(l=o),(y=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tf={focusedElem:t,selectionRange:n},$u=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,C=x.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?S:tn(e.type,S),C);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(b){be(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return x=tv,tv=!1,x}function oa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&jf(e,n,s)}i=i.next}while(i!==r)}}function Hc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ff(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function QE(t){var e=t.alternate;e!==null&&(t.alternate=null,QE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[En],delete e[ka],delete e[Sf],delete e[ZC],delete e[ek])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function YE(t){return t.tag===5||t.tag===3||t.tag===4}function nv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||YE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qu));else if(r!==4&&(t=t.child,t!==null))for(Uf(t,e,n),t=t.sibling;t!==null;)Uf(t,e,n),t=t.sibling}function Bf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Bf(t,e,n),t=t.sibling;t!==null;)Bf(t,e,n),t=t.sibling}var et=null,nn=!1;function dr(t,e,n){for(n=n.child;n!==null;)XE(t,e,n),n=n.sibling}function XE(t,e,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(Mc,n)}catch{}switch(n.tag){case 5:dt||ms(n,e);case 6:var r=et,i=nn;et=null,dr(t,e,n),et=r,nn=i,et!==null&&(nn?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(nn?(t=et,n=n.stateNode,t.nodeType===8?gd(t.parentNode,n):t.nodeType===1&&gd(t,n),Ia(t)):gd(et,n.stateNode));break;case 4:r=et,i=nn,et=n.stateNode.containerInfo,nn=!0,dr(t,e,n),et=r,nn=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&jf(n,e,o),i=i.next}while(i!==r)}dr(t,e,n);break;case 1:if(!dt&&(ms(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){be(n,e,a)}dr(t,e,n);break;case 21:dr(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,dr(t,e,n),dt=r):dr(t,e,n);break;default:dr(t,e,n)}}function rv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gk),e.forEach(function(r){var i=Pk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function en(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:et=a.stateNode,nn=!1;break e;case 3:et=a.stateNode.containerInfo,nn=!0;break e;case 4:et=a.stateNode.containerInfo,nn=!0;break e}a=a.return}if(et===null)throw Error(U(160));XE(s,o,i),et=null,nn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){be(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)JE(e,t),e=e.sibling}function JE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(en(e,t),vn(t),r&4){try{oa(3,t,t.return),Hc(3,t)}catch(S){be(t,t.return,S)}try{oa(5,t,t.return)}catch(S){be(t,t.return,S)}}break;case 1:en(e,t),vn(t),r&512&&n!==null&&ms(n,n.return);break;case 5:if(en(e,t),vn(t),r&512&&n!==null&&ms(n,n.return),t.flags&32){var i=t.stateNode;try{wa(i,"")}catch(S){be(t,t.return,S)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ww(i,s),hf(a,o);var c=hf(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?Sw(i,d):h==="dangerouslySetInnerHTML"?xw(i,d):h==="children"?wa(i,d):Gp(i,h,d,c)}switch(a){case"input":of(i,s);break;case"textarea":Ew(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Ts(i,!!s.multiple,y,!1):p!==!!s.multiple&&(s.defaultValue!=null?Ts(i,!!s.multiple,s.defaultValue,!0):Ts(i,!!s.multiple,s.multiple?[]:"",!1))}i[ka]=s}catch(S){be(t,t.return,S)}}break;case 6:if(en(e,t),vn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(S){be(t,t.return,S)}}break;case 3:if(en(e,t),vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ia(e.containerInfo)}catch(S){be(t,t.return,S)}break;case 4:en(e,t),vn(t);break;case 13:en(e,t),vn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Pm=Le())),r&4&&rv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(c=dt)||h,en(e,t),dt=c):en(e,t),vn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(H=t,h=t.child;h!==null;){for(d=H=h;H!==null;){switch(p=H,y=p.child,p.tag){case 0:case 11:case 14:case 15:oa(4,p,p.return);break;case 1:ms(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(S){be(r,n,S)}}break;case 5:ms(p,p.return);break;case 22:if(p.memoizedState!==null){sv(d);continue}}y!==null?(y.return=p,H=y):sv(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Iw("display",o))}catch(S){be(t,t.return,S)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(S){be(t,t.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:en(e,t),vn(t),r&4&&rv(t);break;case 21:break;default:en(e,t),vn(t)}}function vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(YE(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wa(i,""),r.flags&=-33);var s=nv(t);Bf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=nv(t);Uf(t,a,o);break;default:throw Error(U(161))}}catch(l){be(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vk(t,e,n){H=t,ZE(t)}function ZE(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Xl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||dt;a=Xl;var c=dt;if(Xl=o,(dt=l)&&!c)for(H=i;H!==null;)o=H,l=o.child,o.tag===22&&o.memoizedState!==null?ov(i):l!==null?(l.return=o,H=l):ov(i);for(;s!==null;)H=s,ZE(s),s=s.sibling;H=i,Xl=a,dt=c}iv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):iv(t)}}function iv(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dt||Hc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&z0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}z0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Ia(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}dt||e.flags&512&&Ff(e)}catch(p){be(e,e.return,p)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function sv(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function ov(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hc(4,e)}catch(l){be(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){be(e,i,l)}}var s=e.return;try{Ff(e)}catch(l){be(e,s,l)}break;case 5:var o=e.return;try{Ff(e)}catch(l){be(e,o,l)}}}catch(l){be(e,e.return,l)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var _k=Math.ceil,rc=rr.ReactCurrentDispatcher,Im=rr.ReactCurrentOwner,Kt=rr.ReactCurrentBatchConfig,ce=0,Xe=null,Fe=null,rt=0,Vt=0,gs=ri(0),He=0,La=null,Di=0,qc=0,Sm=0,aa=null,Pt=null,Pm=0,Fs=1/0,Dn=null,ic=!1,zf=null,Dr=null,Jl=!1,Pr=null,sc=0,la=0,$f=null,Eu=-1,Tu=0;function Tt(){return ce&6?Le():Eu!==-1?Eu:Eu=Le()}function Vr(t){return t.mode&1?ce&2&&rt!==0?rt&-rt:nk.transition!==null?(Tu===0&&(Tu=Mw()),Tu):(t=de,t!==0||(t=window.event,t=t===void 0?16:Ww(t.type)),t):1}function ln(t,e,n,r){if(50<la)throw la=0,$f=null,Error(U(185));el(t,n,r),(!(ce&2)||t!==Xe)&&(t===Xe&&(!(ce&2)&&(qc|=n),He===4&&wr(t,rt)),bt(t,r),n===1&&ce===0&&!(e.mode&1)&&(Fs=Le()+500,zc&&ii()))}function bt(t,e){var n=t.callbackNode;nC(t,e);var r=zu(t,t===Xe?rt:0);if(r===0)n!==null&&m0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&m0(n),e===1)t.tag===0?tk(av.bind(null,t)):uE(av.bind(null,t)),XC(function(){!(ce&6)&&ii()}),n=null;else{switch(jw(r)){case 1:n=Jp;break;case 4:n=Lw;break;case 16:n=Bu;break;case 536870912:n=Ow;break;default:n=Bu}n=aT(n,eT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function eT(t,e){if(Eu=-1,Tu=0,ce&6)throw Error(U(327));var n=t.callbackNode;if(As()&&t.callbackNode!==n)return null;var r=zu(t,t===Xe?rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=oc(t,r);else{e=r;var i=ce;ce|=2;var s=nT();(Xe!==t||rt!==e)&&(Dn=null,Fs=Le()+500,Pi(t,e));do try{Tk();break}catch(a){tT(t,a)}while(1);hm(),rc.current=s,ce=i,Fe!==null?e=0:(Xe=null,rt=0,e=He)}if(e!==0){if(e===2&&(i=gf(t),i!==0&&(r=i,e=Wf(t,i))),e===1)throw n=La,Pi(t,0),wr(t,r),bt(t,Le()),n;if(e===6)wr(t,r);else{if(i=t.current.alternate,!(r&30)&&!wk(i)&&(e=oc(t,r),e===2&&(s=gf(t),s!==0&&(r=s,e=Wf(t,s))),e===1))throw n=La,Pi(t,0),wr(t,r),bt(t,Le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:yi(t,Pt,Dn);break;case 3:if(wr(t,r),(r&130023424)===r&&(e=Pm+500-Le(),10<e)){if(zu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Tt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=If(yi.bind(null,t,Pt,Dn),e);break}yi(t,Pt,Dn);break;case 4:if(wr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-an(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_k(r/1960))-r,10<r){t.timeoutHandle=If(yi.bind(null,t,Pt,Dn),r);break}yi(t,Pt,Dn);break;case 5:yi(t,Pt,Dn);break;default:throw Error(U(329))}}}return bt(t,Le()),t.callbackNode===n?eT.bind(null,t):null}function Wf(t,e){var n=aa;return t.current.memoizedState.isDehydrated&&(Pi(t,e).flags|=256),t=oc(t,e),t!==2&&(e=Pt,Pt=n,e!==null&&Hf(e)),t}function Hf(t){Pt===null?Pt=t:Pt.push.apply(Pt,t)}function wk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!cn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wr(t,e){for(e&=~Sm,e&=~qc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-an(e),r=1<<n;t[n]=-1,e&=~r}}function av(t){if(ce&6)throw Error(U(327));As();var e=zu(t,0);if(!(e&1))return bt(t,Le()),null;var n=oc(t,e);if(t.tag!==0&&n===2){var r=gf(t);r!==0&&(e=r,n=Wf(t,r))}if(n===1)throw n=La,Pi(t,0),wr(t,e),bt(t,Le()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yi(t,Pt,Dn),bt(t,Le()),null}function Am(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(Fs=Le()+500,zc&&ii())}}function Vi(t){Pr!==null&&Pr.tag===0&&!(ce&6)&&As();var e=ce;ce|=1;var n=Kt.transition,r=de;try{if(Kt.transition=null,de=1,t)return t()}finally{de=r,Kt.transition=n,ce=e,!(ce&6)&&ii()}}function Cm(){Vt=gs.current,Ee(gs)}function Pi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,YC(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(lm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gu();break;case 3:Ms(),Ee(kt),Ee(pt),ym();break;case 5:gm(r);break;case 4:Ms();break;case 13:Ee(Se);break;case 19:Ee(Se);break;case 10:dm(r.type._context);break;case 22:case 23:Cm()}n=n.return}if(Xe=t,Fe=t=Lr(t.current,null),rt=Vt=e,He=0,La=null,Sm=qc=Di=0,Pt=aa=null,Ti!==null){for(e=0;e<Ti.length;e++)if(n=Ti[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ti=null}return t}function tT(t,e){do{var n=Fe;try{if(hm(),vu.current=nc,tc){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tc=!1}if(Ni=0,Ye=We=Ae=null,sa=!1,Na=0,Im.current=null,n===null||n.return===null){He=1,La=e,Fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=K0(o);if(y!==null){y.flags&=-257,Q0(y,o,a,s,e),y.mode&1&&G0(s,c,e),e=y,l=c;var x=e.updateQueue;if(x===null){var S=new Set;S.add(l),e.updateQueue=S}else x.add(l);break e}else{if(!(e&1)){G0(s,c,e),km();break e}l=Error(U(426))}}else if(xe&&a.mode&1){var C=K0(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Q0(C,o,a,s,e),um(js(l,a));break e}}s=l=js(l,a),He!==4&&(He=2),aa===null?aa=[s]:aa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=jE(s,l,e);B0(s,w);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Dr===null||!Dr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=FE(s,a,e);B0(s,b);break e}}s=s.return}while(s!==null)}iT(n)}catch(L){e=L,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(1)}function nT(){var t=rc.current;return rc.current=nc,t===null?nc:t}function km(){(He===0||He===3||He===2)&&(He=4),Xe===null||!(Di&268435455)&&!(qc&268435455)||wr(Xe,rt)}function oc(t,e){var n=ce;ce|=2;var r=nT();(Xe!==t||rt!==e)&&(Dn=null,Pi(t,e));do try{Ek();break}catch(i){tT(t,i)}while(1);if(hm(),ce=n,rc.current=r,Fe!==null)throw Error(U(261));return Xe=null,rt=0,He}function Ek(){for(;Fe!==null;)rT(Fe)}function Tk(){for(;Fe!==null&&!GA();)rT(Fe)}function rT(t){var e=oT(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?iT(t):Fe=e,Im.current=null}function iT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=mk(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,Fe=null;return}}else if(n=pk(n,e,Vt),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);He===0&&(He=5)}function yi(t,e,n){var r=de,i=Kt.transition;try{Kt.transition=null,de=1,xk(t,e,n,r)}finally{Kt.transition=i,de=r}return null}function xk(t,e,n,r){do As();while(Pr!==null);if(ce&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(rC(t,s),t===Xe&&(Fe=Xe=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jl||(Jl=!0,aT(Bu,function(){return As(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Kt.transition,Kt.transition=null;var o=de;de=1;var a=ce;ce|=4,Im.current=null,yk(t,n),JE(n,t),$C(Tf),$u=!!Ef,Tf=Ef=null,t.current=n,vk(n),KA(),ce=a,de=o,Kt.transition=s}else t.current=n;if(Jl&&(Jl=!1,Pr=t,sc=i),s=t.pendingLanes,s===0&&(Dr=null),XA(n.stateNode),bt(t,Le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ic)throw ic=!1,t=zf,zf=null,t;return sc&1&&t.tag!==0&&As(),s=t.pendingLanes,s&1?t===$f?la++:(la=0,$f=t):la=0,ii(),null}function As(){if(Pr!==null){var t=jw(sc),e=Kt.transition,n=de;try{if(Kt.transition=null,de=16>t?16:t,Pr===null)var r=!1;else{if(t=Pr,Pr=null,sc=0,ce&6)throw Error(U(331));var i=ce;for(ce|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(H=c;H!==null;){var h=H;switch(h.tag){case 0:case 11:case 15:oa(8,h,s)}var d=h.child;if(d!==null)d.return=h,H=d;else for(;H!==null;){h=H;var p=h.sibling,y=h.return;if(QE(h),h===c){H=null;break}if(p!==null){p.return=y,H=p;break}H=y}}}var x=s.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var C=S.sibling;S.sibling=null,S=C}while(S!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oa(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,H=w;break e}H=s.return}}var v=t.current;for(H=v;H!==null;){o=H;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,H=_;else e:for(o=v;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hc(9,a)}}catch(L){be(a,a.return,L)}if(a===o){H=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,H=b;break e}H=a.return}}if(ce=i,ii(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(Mc,t)}catch{}r=!0}return r}finally{de=n,Kt.transition=e}}return!1}function lv(t,e,n){e=js(n,e),e=jE(t,e,1),t=Nr(t,e,1),e=Tt(),t!==null&&(el(t,1,e),bt(t,e))}function be(t,e,n){if(t.tag===3)lv(t,t,n);else for(;e!==null;){if(e.tag===3){lv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dr===null||!Dr.has(r))){t=js(n,t),t=FE(e,t,1),e=Nr(e,t,1),t=Tt(),e!==null&&(el(e,1,t),bt(e,t));break}}e=e.return}}function Ik(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Tt(),t.pingedLanes|=t.suspendedLanes&n,Xe===t&&(rt&n)===n&&(He===4||He===3&&(rt&130023424)===rt&&500>Le()-Pm?Pi(t,0):Sm|=n),bt(t,e)}function sT(t,e){e===0&&(t.mode&1?(e=zl,zl<<=1,!(zl&130023424)&&(zl=4194304)):e=1);var n=Tt();t=Gn(t,e),t!==null&&(el(t,e,n),bt(t,n))}function Sk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),sT(t,n)}function Pk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),sT(t,n)}var oT;oT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||kt.current)Ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ct=!1,fk(t,e,n);Ct=!!(t.flags&131072)}else Ct=!1,xe&&e.flags&1048576&&cE(e,Yu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;wu(t,e),t=e.pendingProps;var i=Vs(e,pt.current);Ps(e,n),i=_m(null,e,r,t,i,n);var s=wm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Rt(r)?(s=!0,Ku(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pm(e),i.updater=Wc,e.stateNode=i,i._reactInternals=e,bf(e,r,t,n),e=Vf(null,e,r,!0,s,n)):(e.tag=0,xe&&s&&am(e),wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(wu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Ck(r),t=tn(r,t),i){case 0:e=Df(null,e,r,t,n);break e;case 1:e=J0(null,e,r,t,n);break e;case 11:e=Y0(null,e,r,t,n);break e;case 14:e=X0(null,e,r,tn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),Df(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),J0(t,e,r,i,n);case 3:e:{if($E(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,gE(t,e),Zu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=js(Error(U(423)),e),e=Z0(t,e,r,n,i);break e}else if(r!==i){i=js(Error(U(424)),e),e=Z0(t,e,r,n,i);break e}else for(Lt=br(e.stateNode.containerInfo.firstChild),Mt=e,xe=!0,rn=null,n=pE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ls(),r===i){e=Kn(t,e,n);break e}wt(t,e,r,n)}e=e.child}return e;case 5:return yE(e),t===null&&Cf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,xf(r,i)?o=null:s!==null&&xf(r,s)&&(e.flags|=32),zE(t,e),wt(t,e,o,n),e.child;case 6:return t===null&&Cf(e),null;case 13:return WE(t,e,n);case 4:return mm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Os(e,null,r,n):wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),Y0(t,e,r,i,n);case 7:return wt(t,e,e.pendingProps,n),e.child;case 8:return wt(t,e,e.pendingProps.children,n),e.child;case 12:return wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(Xu,r._currentValue),r._currentValue=o,s!==null)if(cn(s.value,o)){if(s.children===i.children&&!kt.current){e=Kn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Un(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),kf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),kf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ps(e,n),i=Qt(i),r=r(i),e.flags|=1,wt(t,e,r,n),e.child;case 14:return r=e.type,i=tn(r,e.pendingProps),i=tn(r.type,i),X0(t,e,r,i,n);case 15:return UE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),wu(t,e),e.tag=1,Rt(r)?(t=!0,Ku(e)):t=!1,Ps(e,n),ME(e,r,i),bf(e,r,i,n),Vf(null,e,r,!0,t,n);case 19:return HE(t,e,n);case 22:return BE(t,e,n)}throw Error(U(156,e.tag))};function aT(t,e){return Vw(t,e)}function Ak(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(t,e,n,r){return new Ak(t,e,n,r)}function Rm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ck(t){if(typeof t=="function")return Rm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qp)return 11;if(t===Yp)return 14}return 2}function Lr(t,e){var n=t.alternate;return n===null?(n=Gt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Rm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case os:return Ai(n.children,i,s,e);case Kp:o=8,i|=8;break;case ef:return t=Gt(12,n,e,i|2),t.elementType=ef,t.lanes=s,t;case tf:return t=Gt(13,n,e,i),t.elementType=tf,t.lanes=s,t;case nf:return t=Gt(19,n,e,i),t.elementType=nf,t.lanes=s,t;case yw:return Gc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mw:o=10;break e;case gw:o=9;break e;case Qp:o=11;break e;case Yp:o=14;break e;case gr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Gt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ai(t,e,n,r){return t=Gt(7,t,r,e),t.lanes=n,t}function Gc(t,e,n,r){return t=Gt(22,t,r,e),t.elementType=yw,t.lanes=n,t.stateNode={isHidden:!1},t}function Id(t,e,n){return t=Gt(6,t,null,e),t.lanes=n,t}function Sd(t,e,n){return e=Gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sd(0),this.expirationTimes=sd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bm(t,e,n,r,i,s,o,a,l){return t=new kk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pm(s),t}function Rk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ss,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function lT(t){if(!t)return Gr;t=t._reactInternals;e:{if($i(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Rt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Rt(n))return lE(t,n,e)}return e}function uT(t,e,n,r,i,s,o,a,l){return t=bm(n,r,!0,t,i,s,o,a,l),t.context=lT(null),n=t.current,r=Tt(),i=Vr(n),s=Un(r,i),s.callback=e??null,Nr(n,s,i),t.current.lanes=i,el(t,i,r),bt(t,r),t}function Kc(t,e,n,r){var i=e.current,s=Tt(),o=Vr(i);return n=lT(n),e.context===null?e.context=n:e.pendingContext=n,e=Un(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Nr(i,e,o),t!==null&&(ln(t,i,o,s),yu(t,i,o)),o}function ac(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function uv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nm(t,e){uv(t,e),(t=t.alternate)&&uv(t,e)}function bk(){return null}var cT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dm(t){this._internalRoot=t}Qc.prototype.render=Dm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Kc(t,e,null,null)};Qc.prototype.unmount=Dm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vi(function(){Kc(null,t,null,null)}),e[qn]=null}};function Qc(t){this._internalRoot=t}Qc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_r.length&&e!==0&&e<_r[n].priority;n++);_r.splice(n,0,t),n===0&&$w(t)}};function Vm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cv(){}function Nk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ac(o);s.call(c)}}var o=uT(e,r,t,0,null,!1,!1,"",cv);return t._reactRootContainer=o,t[qn]=o.current,Aa(t.nodeType===8?t.parentNode:t),Vi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ac(l);a.call(c)}}var l=bm(t,0,!1,null,null,!1,!1,"",cv);return t._reactRootContainer=l,t[qn]=l.current,Aa(t.nodeType===8?t.parentNode:t),Vi(function(){Kc(e,l,n,r)}),l}function Xc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ac(o);a.call(l)}}Kc(e,o,t,i)}else o=Nk(n,e,t,i,r);return ac(o)}Fw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ho(e.pendingLanes);n!==0&&(Zp(e,n|1),bt(e,Le()),!(ce&6)&&(Fs=Le()+500,ii()))}break;case 13:Vi(function(){var r=Gn(t,1);if(r!==null){var i=Tt();ln(r,t,1,i)}}),Nm(t,1)}};em=function(t){if(t.tag===13){var e=Gn(t,134217728);if(e!==null){var n=Tt();ln(e,t,134217728,n)}Nm(t,134217728)}};Uw=function(t){if(t.tag===13){var e=Vr(t),n=Gn(t,e);if(n!==null){var r=Tt();ln(n,t,e,r)}Nm(t,e)}};Bw=function(){return de};zw=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};ff=function(t,e,n){switch(e){case"input":if(of(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Bc(r);if(!i)throw Error(U(90));_w(r),of(r,i)}}}break;case"textarea":Ew(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};Cw=Am;kw=Vi;var Dk={usingClientEntryPoint:!1,Events:[nl,cs,Bc,Pw,Aw,Am]},jo={findFiberByHostInstance:Ei,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vk={bundleType:jo.bundleType,version:jo.version,rendererPackageName:jo.rendererPackageName,rendererConfig:jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Nw(t),t===null?null:t.stateNode},findFiberByHostInstance:jo.findFiberByHostInstance||bk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{Mc=Zl.inject(Vk),Tn=Zl}catch{}}Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dk;Ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vm(e))throw Error(U(200));return Rk(t,e,null,n)};Ut.createRoot=function(t,e){if(!Vm(t))throw Error(U(299));var n=!1,r="",i=cT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=bm(t,1,!1,null,null,n,!1,r,i),t[qn]=e.current,Aa(t.nodeType===8?t.parentNode:t),new Dm(e)};Ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Nw(e),t=t===null?null:t.stateNode,t};Ut.flushSync=function(t){return Vi(t)};Ut.hydrate=function(t,e,n){if(!Yc(e))throw Error(U(200));return Xc(null,t,e,!0,n)};Ut.hydrateRoot=function(t,e,n){if(!Vm(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=cT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=uT(e,null,t,1,n??null,i,!1,s,o),t[qn]=e.current,Aa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Qc(e)};Ut.render=function(t,e,n){if(!Yc(e))throw Error(U(200));return Xc(null,t,e,!1,n)};Ut.unmountComponentAtNode=function(t){if(!Yc(t))throw Error(U(40));return t._reactRootContainer?(Vi(function(){Xc(null,null,t,!1,function(){t._reactRootContainer=null,t[qn]=null})}),!0):!1};Ut.unstable_batchedUpdates=Am;Ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yc(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Xc(t,e,n,!1,r)};Ut.version="18.3.1-next-f1338f8080-20240426";function hT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hT)}catch(t){console.error(t)}}hT(),hw.exports=Ut;var Lk=hw.exports,hv=Lk;Jd.createRoot=hv.createRoot,Jd.hydrateRoot=hv.hydrateRoot;const Ok="modulepreload",Mk=function(t){return"/"+t},dv={},jk=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Mk(s),s in dv)return;dv[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const d=i[h];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Ok,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((h,d)=>{c.addEventListener("load",h),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var fv="popstate";function Fk(t={}){function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return qf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Oa(i)}return Bk(e,n,null,t)}function Ie(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Xt(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Uk(){return Math.random().toString(36).substring(2,10)}function pv(t,e){return{usr:t.state,key:t.key,idx:e}}function qf(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Zs(e):e,state:n,key:e&&e.key||r||Uk()}}function Oa({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Zs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function Bk(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a="POP",l=null,c=h();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function h(){return(o.state||{idx:null}).idx}function d(){a="POP";let C=h(),w=C==null?null:C-c;c=C,l&&l({action:a,location:S.location,delta:w})}function p(C,w){a="PUSH";let v=qf(S.location,C,w);n&&n(v,C),c=h()+1;let _=pv(v,c),b=S.createHref(v);try{o.pushState(_,"",b)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(b)}s&&l&&l({action:a,location:S.location,delta:1})}function y(C,w){a="REPLACE";let v=qf(S.location,C,w);n&&n(v,C),c=h();let _=pv(v,c),b=S.createHref(v);o.replaceState(_,"",b),s&&l&&l({action:a,location:S.location,delta:0})}function x(C){return zk(C)}let S={get action(){return a},get location(){return t(i,o)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(fv,d),l=C,()=>{i.removeEventListener(fv,d),l=null}},createHref(C){return e(i,C)},createURL:x,encodeLocation(C){let w=x(C);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:p,replace:y,go(C){return o.go(C)}};return S}function zk(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ie(n,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:Oa(t);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function dT(t,e,n="/"){return $k(t,e,n,!1)}function $k(t,e,n,r){let i=typeof e=="string"?Zs(e):e,s=Qn(i.pathname||"/",n);if(s==null)return null;let o=fT(t);Wk(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=t2(s);a=Zk(o[l],c,r)}return a}function fT(t,e=[],n=[],r="",i=!1){let s=(o,a,l=i,c)=>{let h={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};if(h.relativePath.startsWith("/")){if(!h.relativePath.startsWith(r)&&l)return;Ie(h.relativePath.startsWith(r),`Absolute route path "${h.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(r.length)}let d=Bn([r,h.relativePath]),p=n.concat(h);o.children&&o.children.length>0&&(Ie(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),fT(o.children,e,p,d,l)),!(o.path==null&&!o.index)&&e.push({path:d,score:Xk(d,o.index),routesMeta:p})};return t.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))s(o,a);else for(let c of pT(o.path))s(o,a,!0,c)}),e}function pT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=pT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Wk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Jk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Hk=/^:[\w-]+$/,qk=3,Gk=2,Kk=1,Qk=10,Yk=-2,mv=t=>t==="*";function Xk(t,e){let n=t.split("/"),r=n.length;return n.some(mv)&&(r+=Yk),e&&(r+=Gk),n.filter(i=>!mv(i)).reduce((i,s)=>i+(Hk.test(s)?qk:s===""?Kk:Qk),r)}function Jk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Zk(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",d=lc({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),p=l.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=lc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Bn([s,d.pathname]),pathnameBase:o2(Bn([s,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(s=Bn([s,d.pathnameBase]))}return o}function lc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=e2(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,{paramName:h,isOptional:d},p)=>{if(h==="*"){let x=a[p]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const y=a[p];return d&&!y?c[h]=void 0:c[h]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function e2(t,e=!1,n=!0){Xt(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function t2(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Xt(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Qn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}var n2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,r2=t=>n2.test(t);function i2(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Zs(t):t,s;if(n)if(r2(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Xt(!1,`Pathnames cannot have embedded double slashes - normalizing ${o} -> ${n}`)}n.startsWith("/")?s=gv(n.substring(1),"/"):s=gv(n,e)}else s=e;return{pathname:s,search:a2(r),hash:l2(i)}}function gv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Pd(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function s2(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Lm(t){let e=s2(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function Om(t,e,n,r=!1){let i;typeof t=="string"?i=Zs(t):(i={...t},Ie(!i.pathname||!i.pathname.includes("?"),Pd("?","pathname","search",i)),Ie(!i.pathname||!i.pathname.includes("#"),Pd("#","pathname","hash",i)),Ie(!i.search||!i.search.includes("#"),Pd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}a=d>=0?e[d]:"/"}let l=i2(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}var Bn=t=>t.join("/").replace(/\/\/+/g,"/"),o2=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),a2=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,l2=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function u2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function c2(t){return t.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var mT=["POST","PUT","PATCH","DELETE"];new Set(mT);var h2=["GET",...mT];new Set(h2);var eo=N.createContext(null);eo.displayName="DataRouter";var Jc=N.createContext(null);Jc.displayName="DataRouterState";N.createContext(!1);var gT=N.createContext({isTransitioning:!1});gT.displayName="ViewTransition";var d2=N.createContext(new Map);d2.displayName="Fetchers";var f2=N.createContext(null);f2.displayName="Await";var Jt=N.createContext(null);Jt.displayName="Navigation";var il=N.createContext(null);il.displayName="Location";var fn=N.createContext({outlet:null,matches:[],isDataRoute:!1});fn.displayName="Route";var Mm=N.createContext(null);Mm.displayName="RouteError";function p2(t,{relative:e}={}){Ie(to(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=N.useContext(Jt),{hash:i,pathname:s,search:o}=sl(t,{relative:e}),a=s;return n!=="/"&&(a=s==="/"?n:Bn([n,s])),r.createHref({pathname:a,search:o,hash:i})}function to(){return N.useContext(il)!=null}function ir(){return Ie(to(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(il).location}var yT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function vT(t){N.useContext(Jt).static||N.useLayoutEffect(t)}function no(){let{isDataRoute:t}=N.useContext(fn);return t?C2():m2()}function m2(){Ie(to(),"useNavigate() may be used only in the context of a <Router> component.");let t=N.useContext(eo),{basename:e,navigator:n}=N.useContext(Jt),{matches:r}=N.useContext(fn),{pathname:i}=ir(),s=JSON.stringify(Lm(r)),o=N.useRef(!1);return vT(()=>{o.current=!0}),N.useCallback((l,c={})=>{if(Xt(o.current,yT),!o.current)return;if(typeof l=="number"){n.go(l);return}let h=Om(l,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Bn([e,h.pathname])),(c.replace?n.replace:n.push)(h,c.state,c)},[e,n,s,i,t])}N.createContext(null);function g2(){let{matches:t}=N.useContext(fn),e=t[t.length-1];return e?e.params:{}}function sl(t,{relative:e}={}){let{matches:n}=N.useContext(fn),{pathname:r}=ir(),i=JSON.stringify(Lm(n));return N.useMemo(()=>Om(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function y2(t,e){return _T(t,e)}function _T(t,e,n,r,i){var v;Ie(to(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=N.useContext(Jt),{matches:o}=N.useContext(fn),a=o[o.length-1],l=a?a.params:{},c=a?a.pathname:"/",h=a?a.pathnameBase:"/",d=a&&a.route;{let _=d&&d.path||"";wT(c,!d||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let p=ir(),y;if(e){let _=typeof e=="string"?Zs(e):e;Ie(h==="/"||((v=_.pathname)==null?void 0:v.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${_.pathname}" was given in the \`location\` prop.`),y=_}else y=p;let x=y.pathname||"/",S=x;if(h!=="/"){let _=h.replace(/^\//,"").split("/");S="/"+x.replace(/^\//,"").split("/").slice(_.length).join("/")}let C=dT(t,{pathname:S});Xt(d||C!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Xt(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=T2(C&&C.map(_=>Object.assign({},_,{params:Object.assign({},l,_.params),pathname:Bn([h,s.encodeLocation?s.encodeLocation(_.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?h:Bn([h,s.encodeLocation?s.encodeLocation(_.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),o,n,r,i);return e&&w?N.createElement(il.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},w):w}function v2(){let t=A2(),e=u2(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:s},"ErrorBoundary")," or"," ",N.createElement("code",{style:s},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,o)}var _2=N.createElement(v2,null),w2=class extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){return this.state.error!==void 0?N.createElement(fn.Provider,{value:this.props.routeContext},N.createElement(Mm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function E2({routeContext:t,match:e,children:n}){let r=N.useContext(eo);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),N.createElement(fn.Provider,{value:t},n)}function T2(t,e=[],n=null,r=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,o=n==null?void 0:n.errors;if(o!=null){let h=s.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);Ie(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),s=s.slice(0,Math.min(s.length,h+1))}let a=!1,l=-1;if(n)for(let h=0;h<s.length;h++){let d=s[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(l=h),d.route.id){let{loaderData:p,errors:y}=n,x=d.route.loader&&!p.hasOwnProperty(d.route.id)&&(!y||y[d.route.id]===void 0);if(d.route.lazy||x){a=!0,l>=0?s=s.slice(0,l+1):s=[s[0]];break}}}let c=n&&r?(h,d)=>{var p,y;r(h,{location:n.location,params:((y=(p=n.matches)==null?void 0:p[0])==null?void 0:y.params)??{},unstable_pattern:c2(n.matches),errorInfo:d})}:void 0;return s.reduceRight((h,d,p)=>{let y,x=!1,S=null,C=null;n&&(y=o&&d.route.id?o[d.route.id]:void 0,S=d.route.errorElement||_2,a&&(l<0&&p===0?(wT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,C=null):l===p&&(x=!0,C=d.route.hydrateFallbackElement||null)));let w=e.concat(s.slice(0,p+1)),v=()=>{let _;return y?_=S:x?_=C:d.route.Component?_=N.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=h,N.createElement(E2,{match:d,routeContext:{outlet:h,matches:w,isDataRoute:n!=null},children:_})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?N.createElement(w2,{location:n.location,revalidation:n.revalidation,component:S,error:y,children:v(),routeContext:{outlet:null,matches:w,isDataRoute:!0},onError:c}):v()},null)}function jm(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function x2(t){let e=N.useContext(eo);return Ie(e,jm(t)),e}function I2(t){let e=N.useContext(Jc);return Ie(e,jm(t)),e}function S2(t){let e=N.useContext(fn);return Ie(e,jm(t)),e}function Fm(t){let e=S2(t),n=e.matches[e.matches.length-1];return Ie(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function P2(){return Fm("useRouteId")}function A2(){var r;let t=N.useContext(Mm),e=I2("useRouteError"),n=Fm("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function C2(){let{router:t}=x2("useNavigate"),e=Fm("useNavigate"),n=N.useRef(!1);return vT(()=>{n.current=!0}),N.useCallback(async(i,s={})=>{Xt(n.current,yT),n.current&&(typeof i=="number"?await t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var yv={};function wT(t,e,n){!e&&!yv[t]&&(yv[t]=!0,Xt(!1,n))}N.memo(k2);function k2({routes:t,future:e,state:n,unstable_onError:r}){return _T(t,void 0,n,r,e)}function ET({to:t,replace:e,state:n,relative:r}){Ie(to(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=N.useContext(Jt);Xt(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=N.useContext(fn),{pathname:o}=ir(),a=no(),l=Om(t,Lm(s),o,r==="path"),c=JSON.stringify(l);return N.useEffect(()=>{a(JSON.parse(c),{replace:e,state:n,relative:r})},[a,c,r,e,n]),null}function pr(t){Ie(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function R2({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1,unstable_useTransitions:o}){Ie(!to(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=t.replace(/^\/*/,"/"),l=N.useMemo(()=>({basename:a,navigator:i,static:s,unstable_useTransitions:o,future:{}}),[a,i,s,o]);typeof n=="string"&&(n=Zs(n));let{pathname:c="/",search:h="",hash:d="",state:p=null,key:y="default"}=n,x=N.useMemo(()=>{let S=Qn(c,a);return S==null?null:{location:{pathname:S,search:h,hash:d,state:p,key:y},navigationType:r}},[a,c,h,d,p,y,r]);return Xt(x!=null,`<Router basename="${a}"> is not able to match the URL "${c}${h}${d}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:N.createElement(Jt.Provider,{value:l},N.createElement(il.Provider,{children:e,value:x}))}function b2({children:t,location:e}){return y2(Gf(t),e)}function Gf(t,e=[]){let n=[];return N.Children.forEach(t,(r,i)=>{if(!N.isValidElement(r))return;let s=[...e,i];if(r.type===N.Fragment){n.push.apply(n,Gf(r.props.children,s));return}Ie(r.type===pr,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ie(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Gf(r.props.children,s)),n.push(o)}),n}var Iu="get",Su="application/x-www-form-urlencoded";function Zc(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function N2(t){return Zc(t)&&t.tagName.toLowerCase()==="button"}function D2(t){return Zc(t)&&t.tagName.toLowerCase()==="form"}function V2(t){return Zc(t)&&t.tagName.toLowerCase()==="input"}function L2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function O2(t,e){return t.button===0&&(!e||e==="_self")&&!L2(t)}var eu=null;function M2(){if(eu===null)try{new FormData(document.createElement("form"),0),eu=!1}catch{eu=!0}return eu}var j2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ad(t){return t!=null&&!j2.has(t)?(Xt(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Su}"`),null):t}function F2(t,e){let n,r,i,s,o;if(D2(t)){let a=t.getAttribute("action");r=a?Qn(a,e):null,n=t.getAttribute("method")||Iu,i=Ad(t.getAttribute("enctype"))||Su,s=new FormData(t)}else if(N2(t)||V2(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||a.getAttribute("action");if(r=l?Qn(l,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||Iu,i=Ad(t.getAttribute("formenctype"))||Ad(a.getAttribute("enctype"))||Su,s=new FormData(a,t),!M2()){let{name:c,type:h,value:d}=t;if(h==="image"){let p=c?`${c}.`:"";s.append(`${p}x`,"0"),s.append(`${p}y`,"0")}else c&&s.append(c,d)}}else{if(Zc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Iu,r=null,i=Su,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Um(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function U2(t,e,n){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname=`_root.${n}`:e&&Qn(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function B2(t,e){if(t.id in e)return e[t.id];try{let n=await jk(()=>import(t.module),[]);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function z2(t){return t!=null&&typeof t.page=="string"}function $2(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function W2(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await B2(s,n);return o.links?o.links():[]}return[]}));return K2(r.flat(1).filter($2).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function vv(t,e,n,r,i,s){let o=(l,c)=>n[c]?l.route.id!==n[c].route.id:!0,a=(l,c)=>{var h;return n[c].pathname!==l.pathname||((h=n[c].route.path)==null?void 0:h.endsWith("*"))&&n[c].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,c)=>o(l,c)||a(l,c)):s==="data"?e.filter((l,c)=>{var d;let h=r.routes[l.route.id];if(!h||!h.hasLoader)return!1;if(o(l,c)||a(l,c))return!0;if(l.route.shouldRevalidate){let p=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function H2(t,e,{includeHydrateFallback:n}={}){return q2(t.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function q2(t){return[...new Set(t)]}function G2(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function K2(t,e){let n=new Set,r=new Set(e);return t.reduce((i,s)=>{if(e&&!z2(s)&&s.as==="script"&&s.href&&r.has(s.href))return i;let a=JSON.stringify(G2(s));return n.has(a)||(n.add(a),i.push({key:a,link:s})),i},[])}function TT(){let t=N.useContext(eo);return Um(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Q2(){let t=N.useContext(Jc);return Um(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Bm=N.createContext(void 0);Bm.displayName="FrameworkContext";function xT(){let t=N.useContext(Bm);return Um(t,"You must render this element inside a <HydratedRouter> element"),t}function Y2(t,e){let n=N.useContext(Bm),[r,i]=N.useState(!1),[s,o]=N.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:c,onMouseLeave:h,onTouchStart:d}=e,p=N.useRef(null);N.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let S=w=>{w.forEach(v=>{o(v.isIntersecting)})},C=new IntersectionObserver(S,{threshold:.5});return p.current&&C.observe(p.current),()=>{C.disconnect()}}},[t]),N.useEffect(()=>{if(r){let S=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(S)}}},[r]);let y=()=>{i(!0)},x=()=>{i(!1),o(!1)};return n?t!=="intent"?[s,p,{}]:[s,p,{onFocus:Fo(a,y),onBlur:Fo(l,x),onMouseEnter:Fo(c,y),onMouseLeave:Fo(h,x),onTouchStart:Fo(d,y)}]:[!1,p,{}]}function Fo(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function X2({page:t,...e}){let{router:n}=TT(),r=N.useMemo(()=>dT(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?N.createElement(Z2,{page:t,matches:r,...e}):null}function J2(t){let{manifest:e,routeModules:n}=xT(),[r,i]=N.useState([]);return N.useEffect(()=>{let s=!1;return W2(t,e,n).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,n]),r}function Z2({page:t,matches:e,...n}){let r=ir(),{manifest:i,routeModules:s}=xT(),{basename:o}=TT(),{loaderData:a,matches:l}=Q2(),c=N.useMemo(()=>vv(t,e,l,i,r,"data"),[t,e,l,i,r]),h=N.useMemo(()=>vv(t,e,l,i,r,"assets"),[t,e,l,i,r]),d=N.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let x=new Set,S=!1;if(e.forEach(w=>{var _;let v=i.routes[w.route.id];!v||!v.hasLoader||(!c.some(b=>b.route.id===w.route.id)&&w.route.id in a&&((_=s[w.route.id])!=null&&_.shouldRevalidate)||v.hasClientLoader?S=!0:x.add(w.route.id))}),x.size===0)return[];let C=U2(t,o,"data");return S&&x.size>0&&C.searchParams.set("_routes",e.filter(w=>x.has(w.route.id)).map(w=>w.route.id).join(",")),[C.pathname+C.search]},[o,a,r,i,c,e,t,s]),p=N.useMemo(()=>H2(h,i),[h,i]),y=J2(h);return N.createElement(N.Fragment,null,d.map(x=>N.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...n})),p.map(x=>N.createElement("link",{key:x,rel:"modulepreload",href:x,...n})),y.map(({key:x,link:S})=>N.createElement("link",{key:x,nonce:n.nonce,...S})))}function eR(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var IT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{IT&&(window.__reactRouterVersion="7.10.1")}catch{}function tR({basename:t,children:e,unstable_useTransitions:n,window:r}){let i=N.useRef();i.current==null&&(i.current=Fk({window:r,v5Compat:!0}));let s=i.current,[o,a]=N.useState({action:s.action,location:s.location}),l=N.useCallback(c=>{n===!1?a(c):N.startTransition(()=>a(c))},[n]);return N.useLayoutEffect(()=>s.listen(l),[s,l]),N.createElement(R2,{basename:t,children:e,location:o.location,navigationType:o.action,navigator:s,unstable_useTransitions:n===!0})}var ST=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Or=N.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:h,viewTransition:d,...p},y){let{basename:x,unstable_useTransitions:S}=N.useContext(Jt),C=typeof c=="string"&&ST.test(c),w,v=!1;if(typeof c=="string"&&C&&(w=c,IT))try{let A=new URL(window.location.href),R=c.startsWith("//")?new URL(A.protocol+c):new URL(c),D=Qn(R.pathname,x);R.origin===A.origin&&D!=null?c=D+R.search+R.hash:v=!0}catch{Xt(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let _=p2(c,{relative:i}),[b,L,M]=Y2(r,p),I=sR(c,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:d,unstable_useTransitions:S});function E(A){e&&e(A),A.defaultPrevented||I(A)}let P=N.createElement("a",{...p,...M,href:w||_,onClick:v||s?e:E,ref:eR(y,L),target:l,"data-discover":!C&&n==="render"?"true":void 0});return b&&!C?N.createElement(N.Fragment,null,P,N.createElement(X2,{page:_})):P});Or.displayName="Link";var nR=N.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:a,children:l,...c},h){let d=sl(o,{relative:c.relative}),p=ir(),y=N.useContext(Jc),{navigator:x,basename:S}=N.useContext(Jt),C=y!=null&&cR(d)&&a===!0,w=x.encodeLocation?x.encodeLocation(d).pathname:d.pathname,v=p.pathname,_=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(v=v.toLowerCase(),_=_?_.toLowerCase():null,w=w.toLowerCase()),_&&S&&(_=Qn(_,S)||_);const b=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let L=v===w||!i&&v.startsWith(w)&&v.charAt(b)==="/",M=_!=null&&(_===w||!i&&_.startsWith(w)&&_.charAt(w.length)==="/"),I={isActive:L,isPending:M,isTransitioning:C},E=L?e:void 0,P;typeof r=="function"?P=r(I):P=[r,L?"active":null,M?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let A=typeof s=="function"?s(I):s;return N.createElement(Or,{...c,"aria-current":E,className:P,ref:h,style:A,to:o,viewTransition:a},typeof l=="function"?l(I):l)});nR.displayName="NavLink";var rR=N.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:o=Iu,action:a,onSubmit:l,relative:c,preventScrollReset:h,viewTransition:d,...p},y)=>{let{unstable_useTransitions:x}=N.useContext(Jt),S=lR(),C=uR(a,{relative:c}),w=o.toLowerCase()==="get"?"get":"post",v=typeof a=="string"&&ST.test(a),_=b=>{if(l&&l(b),b.defaultPrevented)return;b.preventDefault();let L=b.nativeEvent.submitter,M=(L==null?void 0:L.getAttribute("formmethod"))||o,I=()=>S(L||b.currentTarget,{fetcherKey:e,method:M,navigate:n,replace:i,state:s,relative:c,preventScrollReset:h,viewTransition:d});x&&n!==!1?N.startTransition(()=>I()):I()};return N.createElement("form",{ref:y,method:w,action:C,onSubmit:r?l:_,...p,"data-discover":!v&&t==="render"?"true":void 0})});rR.displayName="Form";function iR(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function PT(t){let e=N.useContext(eo);return Ie(e,iR(t)),e}function sR(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:o,unstable_useTransitions:a}={}){let l=no(),c=ir(),h=sl(t,{relative:s});return N.useCallback(d=>{if(O2(d,e)){d.preventDefault();let p=n!==void 0?n:Oa(c)===Oa(h),y=()=>l(t,{replace:p,state:r,preventScrollReset:i,relative:s,viewTransition:o});a?N.startTransition(()=>y()):y()}},[c,l,h,n,r,e,t,i,s,o,a])}var oR=0,aR=()=>`__${String(++oR)}__`;function lR(){let{router:t}=PT("useSubmit"),{basename:e}=N.useContext(Jt),n=P2(),r=t.fetch,i=t.navigate;return N.useCallback(async(s,o={})=>{let{action:a,method:l,encType:c,formData:h,body:d}=F2(s,e);if(o.navigate===!1){let p=o.fetcherKey||aR();await r(p,n,o.action||a,{preventScrollReset:o.preventScrollReset,formData:h,body:d,formMethod:o.method||l,formEncType:o.encType||c,flushSync:o.flushSync})}else await i(o.action||a,{preventScrollReset:o.preventScrollReset,formData:h,body:d,formMethod:o.method||l,formEncType:o.encType||c,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,i,e,n])}function uR(t,{relative:e}={}){let{basename:n}=N.useContext(Jt),r=N.useContext(fn);Ie(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...sl(t||".",{relative:e})},o=ir();if(t==null){s.search=o.search;let a=new URLSearchParams(s.search),l=a.getAll("index");if(l.some(h=>h==="")){a.delete("index"),l.filter(d=>d).forEach(d=>a.append("index",d));let h=a.toString();s.search=h?`?${h}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:Bn([n,s.pathname])),Oa(s)}function cR(t,{relative:e}={}){let n=N.useContext(gT);Ie(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=PT("useViewTransitionState"),i=sl(t,{relative:e});if(!n.isTransitioning)return!1;let s=Qn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Qn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return lc(i.pathname,o)!=null||lc(i.pathname,s)!=null}function AT(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=AT(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Ci(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=AT(t))&&(r&&(r+=" "),r+=e);return r}function hR(t){if(!t||typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",e.firstChild?e.insertBefore(n,e.firstChild):e.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}hR(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var ol=t=>typeof t=="number"&&!isNaN(t),Li=t=>typeof t=="string",Yn=t=>typeof t=="function",dR=t=>Li(t)||ol(t),Kf=t=>Li(t)||Yn(t)?t:null,fR=(t,e)=>t===!1||ol(t)&&t>0?t:e,Qf=t=>N.isValidElement(t)||Li(t)||Yn(t)||ol(t);function pR(t,e,n=300){let{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function mR({enter:t,exit:e,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:s,position:o,preventExitTransition:a,done:l,nodeRef:c,isIn:h,playToast:d}){let p=n?`${t}--${o}`:t,y=n?`${e}--${o}`:e,x=N.useRef(0);return N.useLayoutEffect(()=>{let S=c.current,C=p.split(" "),w=v=>{v.target===c.current&&(d(),S.removeEventListener("animationend",w),S.removeEventListener("animationcancel",w),x.current===0&&v.type!=="animationcancel"&&S.classList.remove(...C))};S.classList.add(...C),S.addEventListener("animationend",w),S.addEventListener("animationcancel",w)},[]),N.useEffect(()=>{let S=c.current,C=()=>{S.removeEventListener("animationend",C),r?pR(S,l,i):l()};h||(a?C():(x.current=1,S.className+=` ${y}`,S.addEventListener("animationend",C)))},[h]),le.createElement(le.Fragment,null,s)}}function _v(t,e){return{content:CT(t.content,t.props),containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,reason:t.removalReason,status:e}}function CT(t,e,n=!1){return N.isValidElement(t)&&!Li(t.type)?N.cloneElement(t,{closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:n}):Yn(t)?t({closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:n}):t}function gR({closeToast:t,theme:e,ariaLabel:n="close"}){return le.createElement("button",{className:`Toastify__close-button Toastify__close-button--${e}`,type:"button",onClick:r=>{r.stopPropagation(),t(!0)},"aria-label":n},le.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},le.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function yR({delay:t,isRunning:e,closeToast:n,type:r="default",hide:i,className:s,controlledProgress:o,progress:a,rtl:l,isIn:c,theme:h}){let d=i||o&&a===0,p={animationDuration:`${t}ms`,animationPlayState:e?"running":"paused"};o&&(p.transform=`scaleX(${a})`);let y=Ci("Toastify__progress-bar",o?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${h}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":l}),x=Yn(s)?s({rtl:l,type:r,defaultClassName:y}):Ci(y,s),S={[o&&a>=1?"onTransitionEnd":"onAnimationEnd"]:o&&a<1?null:()=>{c&&n()}};return le.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":d},le.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${h} Toastify__progress-bar--${r}`}),le.createElement("div",{role:"progressbar","aria-hidden":d?"true":"false","aria-label":"notification timer",className:x,style:p,...S}))}var vR=1,kT=()=>`${vR++}`;function _R(t,e,n){let r=1,i=0,s=[],o=[],a=e,l=new Map,c=new Set,h=v=>(c.add(v),()=>c.delete(v)),d=()=>{o=Array.from(l.values()),c.forEach(v=>v())},p=({containerId:v,toastId:_,updateId:b})=>{let L=v?v!==t:t!==1,M=l.has(_)&&b==null;return L||M},y=(v,_)=>{l.forEach(b=>{var L;(_==null||_===b.props.toastId)&&((L=b.toggle)==null||L.call(b,v))})},x=v=>{var _,b;(b=(_=v.props)==null?void 0:_.onClose)==null||b.call(_,v.removalReason),v.isActive=!1},S=v=>{if(v==null)l.forEach(x);else{let _=l.get(v);_&&x(_)}d()},C=()=>{i-=s.length,s=[]},w=v=>{var _,b;let{toastId:L,updateId:M}=v.props,I=M==null;v.staleId&&l.delete(v.staleId),v.isActive=!0,l.set(L,v),d(),n(_v(v,I?"added":"updated")),I&&((b=(_=v.props).onOpen)==null||b.call(_))};return{id:t,props:a,observe:h,toggle:y,removeToast:S,toasts:l,clearQueue:C,buildToast:(v,_)=>{if(p(_))return;let{toastId:b,updateId:L,data:M,staleId:I,delay:E}=_,P=L==null;P&&i++;let A={...a,style:a.toastStyle,key:r++,...Object.fromEntries(Object.entries(_).filter(([D,k])=>k!=null)),toastId:b,updateId:L,data:M,isIn:!1,className:Kf(_.className||a.toastClassName),progressClassName:Kf(_.progressClassName||a.progressClassName),autoClose:_.isLoading?!1:fR(_.autoClose,a.autoClose),closeToast(D){l.get(b).removalReason=D,S(b)},deleteToast(){let D=l.get(b);if(D!=null){if(n(_v(D,"removed")),l.delete(b),i--,i<0&&(i=0),s.length>0){w(s.shift());return}d()}}};A.closeButton=a.closeButton,_.closeButton===!1||Qf(_.closeButton)?A.closeButton=_.closeButton:_.closeButton===!0&&(A.closeButton=Qf(a.closeButton)?a.closeButton:!0);let R={content:v,props:A,staleId:I};a.limit&&a.limit>0&&i>a.limit&&P?s.push(R):ol(E)?setTimeout(()=>{w(R)},E):w(R)},setProps(v){a=v},setToggle:(v,_)=>{let b=l.get(v);b&&(b.toggle=_)},isToastActive:v=>{var _;return(_=l.get(v))==null?void 0:_.isActive},getSnapshot:()=>o}}var Et=new Map,Ma=[],Yf=new Set,wR=t=>Yf.forEach(e=>e(t)),RT=()=>Et.size>0;function ER(){Ma.forEach(t=>NT(t.content,t.options)),Ma=[]}var TR=(t,{containerId:e})=>{var n;return(n=Et.get(e||1))==null?void 0:n.toasts.get(t)};function bT(t,e){var n;if(e)return!!((n=Et.get(e))!=null&&n.isToastActive(t));let r=!1;return Et.forEach(i=>{i.isToastActive(t)&&(r=!0)}),r}function xR(t){if(!RT()){Ma=Ma.filter(e=>t!=null&&e.options.toastId!==t);return}if(t==null||dR(t))Et.forEach(e=>{e.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){let e=Et.get(t.containerId);e?e.removeToast(t.id):Et.forEach(n=>{n.removeToast(t.id)})}}var IR=(t={})=>{Et.forEach(e=>{e.props.limit&&(!t.containerId||e.id===t.containerId)&&e.clearQueue()})};function NT(t,e){Qf(t)&&(RT()||Ma.push({content:t,options:e}),Et.forEach(n=>{n.buildToast(t,e)}))}function SR(t){var e;(e=Et.get(t.containerId||1))==null||e.setToggle(t.id,t.fn)}function DT(t,e){Et.forEach(n=>{(e==null||!(e!=null&&e.containerId)||(e==null?void 0:e.containerId)===n.id)&&n.toggle(t,e==null?void 0:e.id)})}function PR(t){let e=t.containerId||1;return{subscribe(n){let r=_R(e,t,wR);Et.set(e,r);let i=r.observe(n);return ER(),()=>{i(),Et.delete(e)}},setProps(n){var r;(r=Et.get(e))==null||r.setProps(n)},getSnapshot(){var n;return(n=Et.get(e))==null?void 0:n.getSnapshot()}}}function AR(t){return Yf.add(t),()=>{Yf.delete(t)}}function CR(t){return t&&(Li(t.toastId)||ol(t.toastId))?t.toastId:kT()}function al(t,e){return NT(t,e),e.toastId}function eh(t,e){return{...e,type:e&&e.type||t,toastId:CR(e)}}function th(t){return(e,n)=>al(e,eh(t,n))}function Q(t,e){return al(t,eh("default",e))}Q.loading=(t,e)=>al(t,eh("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e}));function kR(t,{pending:e,error:n,success:r},i){let s;e&&(s=Li(e)?Q.loading(e,i):Q.loading(e.render,{...i,...e}));let o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},a=(c,h,d)=>{if(h==null){Q.dismiss(s);return}let p={type:c,...o,...i,data:d},y=Li(h)?{render:h}:h;return s?Q.update(s,{...p,...y}):Q(y.render,{...p,...y}),d},l=Yn(t)?t():t;return l.then(c=>a("success",r,c)).catch(c=>a("error",n,c)),l}Q.promise=kR;Q.success=th("success");Q.info=th("info");Q.error=th("error");Q.warning=th("warning");Q.warn=Q.warning;Q.dark=(t,e)=>al(t,eh("default",{theme:"dark",...e}));function RR(t){xR(t)}Q.dismiss=RR;Q.clearWaitingQueue=IR;Q.isActive=bT;Q.update=(t,e={})=>{let n=TR(t,e);if(n){let{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:kT()};s.toastId!==t&&(s.staleId=t);let o=s.render||i;delete s.render,al(o,s)}};Q.done=t=>{Q.update(t,{progress:1})};Q.onChange=AR;Q.play=t=>DT(!0,t);Q.pause=t=>DT(!1,t);function bR(t){var e;let{subscribe:n,getSnapshot:r,setProps:i}=N.useRef(PR(t)).current;i(t);let s=(e=N.useSyncExternalStore(n,r,r))==null?void 0:e.slice();function o(a){if(!s)return[];let l=new Map;return t.newestOnTop&&s.reverse(),s.forEach(c=>{let{position:h}=c.props;l.has(h)||l.set(h,[]),l.get(h).push(c)}),Array.from(l,c=>a(c[0],c[1]))}return{getToastToRender:o,isToastActive:bT,count:s==null?void 0:s.length}}function NR(t){let[e,n]=N.useState(!1),[r,i]=N.useState(!1),s=N.useRef(null),o=N.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:l,closeToast:c,onClick:h,closeOnClick:d}=t;SR({id:t.toastId,containerId:t.containerId,fn:n}),N.useEffect(()=>{if(t.pauseOnFocusLoss)return p(),()=>{y()}},[t.pauseOnFocusLoss]);function p(){document.hasFocus()||w(),window.addEventListener("focus",C),window.addEventListener("blur",w)}function y(){window.removeEventListener("focus",C),window.removeEventListener("blur",w)}function x(I){if(t.draggable===!0||t.draggable===I.pointerType){v();let E=s.current;o.canCloseOnClick=!0,o.canDrag=!0,E.style.transition="none",t.draggableDirection==="x"?(o.start=I.clientX,o.removalDistance=E.offsetWidth*(t.draggablePercent/100)):(o.start=I.clientY,o.removalDistance=E.offsetHeight*(t.draggablePercent===80?t.draggablePercent*1.5:t.draggablePercent)/100)}}function S(I){let{top:E,bottom:P,left:A,right:R}=s.current.getBoundingClientRect();I.nativeEvent.type!=="touchend"&&t.pauseOnHover&&I.clientX>=A&&I.clientX<=R&&I.clientY>=E&&I.clientY<=P?w():C()}function C(){n(!0)}function w(){n(!1)}function v(){o.didMove=!1,document.addEventListener("pointermove",b),document.addEventListener("pointerup",L)}function _(){document.removeEventListener("pointermove",b),document.removeEventListener("pointerup",L)}function b(I){let E=s.current;if(o.canDrag&&E){o.didMove=!0,e&&w(),t.draggableDirection==="x"?o.delta=I.clientX-o.start:o.delta=I.clientY-o.start,o.start!==I.clientX&&(o.canCloseOnClick=!1);let P=t.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`;E.style.transform=`translate3d(${P},0)`,E.style.opacity=`${1-Math.abs(o.delta/o.removalDistance)}`}}function L(){_();let I=s.current;if(o.canDrag&&o.didMove&&I){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance){i(!0),t.closeToast(!0),t.collapseAll();return}I.style.transition="transform 0.2s, opacity 0.2s",I.style.removeProperty("transform"),I.style.removeProperty("opacity")}}let M={onPointerDown:x,onPointerUp:S};return a&&l&&(M.onMouseEnter=w,t.stacked||(M.onMouseLeave=C)),d&&(M.onClick=I=>{h&&h(I),o.canCloseOnClick&&c(!0)}),{playToast:C,pauseToast:w,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:M}}var DR=typeof window<"u"?N.useLayoutEffect:N.useEffect,nh=({theme:t,type:e,isLoading:n,...r})=>le.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${e})`,...r});function VR(t){return le.createElement(nh,{...t},le.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function LR(t){return le.createElement(nh,{...t},le.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function OR(t){return le.createElement(nh,{...t},le.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function MR(t){return le.createElement(nh,{...t},le.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function jR(){return le.createElement("div",{className:"Toastify__spinner"})}var Xf={info:LR,warning:VR,success:OR,error:MR,spinner:jR},FR=t=>t in Xf;function UR({theme:t,type:e,isLoading:n,icon:r}){let i=null,s={theme:t,type:e};return r===!1||(Yn(r)?i=r({...s,isLoading:n}):N.isValidElement(r)?i=N.cloneElement(r,s):n?i=Xf.spinner():FR(e)&&(i=Xf[e](s))),i}var BR=t=>{let{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:s}=NR(t),{closeButton:o,children:a,autoClose:l,onClick:c,type:h,hideProgressBar:d,closeToast:p,transition:y,position:x,className:S,style:C,progressClassName:w,updateId:v,role:_,progress:b,rtl:L,toastId:M,deleteToast:I,isIn:E,isLoading:P,closeOnClick:A,theme:R,ariaLabel:D}=t,k=Ci("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${h}`,{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":A}),ae=Yn(S)?S({rtl:L,position:x,type:h,defaultClassName:k}):Ci(k,S),Oe=UR(t),me=!!b||!l,Ge={closeToast:p,type:h,theme:R},z=null;return o===!1||(Yn(o)?z=o(Ge):N.isValidElement(o)?z=N.cloneElement(o,Ge):z=gR(Ge)),le.createElement(y,{isIn:E,done:I,position:x,preventExitTransition:n,nodeRef:r,playToast:s},le.createElement("div",{id:M,tabIndex:0,onClick:c,"data-in":E,className:ae,...i,style:C,ref:r,...E&&{role:_,"aria-label":D}},Oe!=null&&le.createElement("div",{className:Ci("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},Oe),CT(a,t,!e),z,!t.customProgressBar&&le.createElement(yR,{...v&&!me?{key:`p-${v}`}:{},rtl:L,theme:R,delay:l,isRunning:e,isIn:E,closeToast:p,hide:d,type:h,className:w,controlledProgress:me,progress:b||0})))},zR=(t,e=!1)=>({enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}),$R=mR(zR("bounce",!0)),WR={position:"top-right",transition:$R,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:t=>t.altKey&&t.code==="KeyT"};function HR(t){let e={...WR,...t},n=t.stacked,[r,i]=N.useState(!0),s=N.useRef(null),{getToastToRender:o,isToastActive:a,count:l}=bR(e),{className:c,style:h,rtl:d,containerId:p,hotKeys:y}=e;function x(C){let w=Ci("Toastify__toast-container",`Toastify__toast-container--${C}`,{"Toastify__toast-container--rtl":d});return Yn(c)?c({position:C,rtl:d,defaultClassName:w}):Ci(w,Kf(c))}function S(){n&&(i(!0),Q.play())}return DR(()=>{var C;if(n){let w=s.current.querySelectorAll('[data-in="true"]'),v=12,_=(C=e.position)==null?void 0:C.includes("top"),b=0,L=0;Array.from(w).reverse().forEach((M,I)=>{let E=M;E.classList.add("Toastify__toast--stacked"),I>0&&(E.dataset.collapsed=`${r}`),E.dataset.pos||(E.dataset.pos=_?"top":"bot");let P=b*(r?.2:1)+(r?0:v*I);E.style.setProperty("--y",`${_?P:P*-1}px`),E.style.setProperty("--g",`${v}`),E.style.setProperty("--s",`${1-(r?L:0)}`),b+=E.offsetHeight,L+=.025})}},[r,l,n]),N.useEffect(()=>{function C(w){var v;let _=s.current;y(w)&&((v=_.querySelector('[tabIndex="0"]'))==null||v.focus(),i(!1),Q.pause()),w.key==="Escape"&&(document.activeElement===_||_!=null&&_.contains(document.activeElement))&&(i(!0),Q.play())}return document.addEventListener("keydown",C),()=>{document.removeEventListener("keydown",C)}},[y]),le.createElement("section",{ref:s,className:"Toastify",id:p,onMouseEnter:()=>{n&&(i(!1),Q.pause())},onMouseLeave:S,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":e["aria-label"]},o((C,w)=>{let v=w.length?{...h}:{...h,pointerEvents:"none"};return le.createElement("div",{tabIndex:-1,className:x(C),"data-stacked":n,style:v,key:`c-${C}`},w.map(({content:_,props:b})=>le.createElement(BR,{...b,stacked:n,collapseAll:S,isIn:a(b.toastId,b.containerId),key:`t-${b.key}`},_)))}))}var VT={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},wv=le.createContext&&le.createContext(VT),Mr=globalThis&&globalThis.__assign||function(){return Mr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Mr.apply(this,arguments)},qR=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function LT(t){return t&&t.map(function(e,n){return le.createElement(e.tag,Mr({key:n},e.attr),LT(e.child))})}function De(t){return function(e){return le.createElement(GR,Mr({attr:Mr({},t.attr)},e),LT(t.child))}}function GR(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=qR(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),le.createElement("svg",Mr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Mr(Mr({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&le.createElement("title",null,s),t.children)};return wv!==void 0?le.createElement(wv.Consumer,null,function(n){return e(n)}):e(VT)}function KR(t){return De({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"}}]})(t)}function QR(t){return De({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polyline",attr:{points:"12 6 12 12 16 14"}}]})(t)}function YR(t){return De({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}}]})(t)}function XR(t){return De({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"}},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"}},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"}},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"}}]})(t)}function JR(t){return De({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}}]})(t)}function ZR(t){return De({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"}}]})(t)}function eb(t){return De({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"circle",attr:{cx:"8.5",cy:"8.5",r:"1.5"}},{tag:"polyline",attr:{points:"21 15 16 10 5 21"}}]})(t)}function tb(t){return De({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}},{tag:"polyline",attr:{points:"16 17 21 12 16 7"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"}}]})(t)}function nb(t){return De({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(t)}function rb(t){return De({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"}}]})(t)}function ib(t){return De({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(t)}function uc(t){return De({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"}},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"}},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"}}]})(t)}function sb(t){return De({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(t)}function Jf(t){return De({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"}},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}}]})(t)}function OT(t){return De({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}},{tag:"polyline",attr:{points:"17 21 17 13 7 13 7 21"}},{tag:"polyline",attr:{points:"7 3 7 8 15 8"}}]})(t)}function MT(t){return De({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(t)}function jT(t){return De({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"path",attr:{d:"M16 10a4 4 0 0 1-8 0"}}]})(t)}function ob(t){return De({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"}},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"}},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"}}]})(t)}function ab(t){return De({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"}},{tag:"polyline",attr:{points:"17 6 23 6 23 12"}}]})(t)}function Zf(t){return De({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"polyline",attr:{points:"17 8 12 3 7 8"}},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"}}]})(t)}function zm(t){return De({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(t)}const lb=()=>{const[t,e]=N.useState(!1),[n,r]=N.useState(!1);return N.useEffect(()=>{const i=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),g.jsxs("nav",{className:`navbar ${t?"scrolled":""}`,children:[g.jsxs("div",{className:"container navbar-content",children:[g.jsx("div",{className:"logo",children:g.jsx("a",{href:"/",children:"LuxeLiving."})}),g.jsxs("div",{className:`nav-links ${n?"active":""}`,children:[g.jsx("a",{href:"#home",onClick:()=>r(!1),children:"Home"}),g.jsx("a",{href:"#categories",onClick:()=>r(!1),children:"Kategori"}),g.jsx("a",{href:"#collection",onClick:()=>r(!1),children:"Produk"}),g.jsx("a",{href:"#contact",onClick:()=>r(!1),children:"Kontak"})]}),g.jsxs("div",{className:"nav-icons",children:[g.jsx("button",{"aria-label":"Cari",children:g.jsx(MT,{})}),g.jsxs("button",{"aria-label":"Keranjang",className:"cart-btn",children:[g.jsx(jT,{}),g.jsx("span",{className:"cart-count",children:"0"})]}),g.jsx("button",{className:"menu-toggle",onClick:()=>r(!n),"aria-label":"Toggle Menu",children:n?g.jsx(zm,{}):g.jsx(ib,{})})]})]}),g.jsx("style",{children:`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.3s ease;
          background: transparent;
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          box-shadow: var(--shadow-sm);
        }

        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo a {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-primary);
          text-decoration: none;
          letter-spacing: -0.5px;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--color-text);
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--color-accent);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-icons {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-icons button {
          background: none;
          font-size: 1.25rem;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .nav-icons button:hover {
          transform: scale(1.1);
          color: var(--color-accent);
        }

        .cart-btn {
          position: relative;
        }

        .cart-count {
          position: absolute;
          top: -5px;
          right: -8px;
          background: var(--color-accent);
          color: white;
          font-size: 0.7rem;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .menu-toggle {
          display: none;
        }

        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 70%;
            background: white;
            flex-direction: column;
            padding: 6rem 2rem;
            box-shadow: -5px 0 15px rgba(0,0,0,0.1);
            transition: right 0.3s ease;
          }

          .nav-links.active {
            right: 0;
          }

          .menu-toggle {
            display: flex;
            z-index: 1001;
          }
        }
      `})]})},FT=N.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),rh=N.createContext({}),$m=N.createContext(null),ih=typeof document<"u",ub=ih?N.useLayoutEffect:N.useEffect,UT=N.createContext({strict:!1}),Wm=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),cb="framerAppearId",BT="data-"+Wm(cb);function hb(t,e,n,r){const{visualElement:i}=N.useContext(rh),s=N.useContext(UT),o=N.useContext($m),a=N.useContext(FT).reducedMotion,l=N.useRef();r=r||s.renderer,!l.current&&r&&(l.current=r(t,{visualState:e,parent:i,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const c=l.current;N.useInsertionEffect(()=>{c&&c.update(n,o)});const h=N.useRef(!!(n[BT]&&!window.HandoffComplete));return ub(()=>{c&&(c.render(),h.current&&c.animationState&&c.animationState.animateChanges())}),N.useEffect(()=>{c&&(c.updateFeatures(),!h.current&&c.animationState&&c.animationState.animateChanges(),h.current&&(h.current=!1,window.HandoffComplete=!0))}),c}function ys(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function db(t,e,n){return N.useCallback(r=>{r&&t.mount&&t.mount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):ys(n)&&(n.current=r))},[e])}function ja(t){return typeof t=="string"||Array.isArray(t)}function sh(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Hm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],qm=["initial",...Hm];function oh(t){return sh(t.animate)||qm.some(e=>ja(t[e]))}function zT(t){return!!(oh(t)||t.variants)}function fb(t,e){if(oh(t)){const{initial:n,animate:r}=t;return{initial:n===!1||ja(n)?n:void 0,animate:ja(r)?r:void 0}}return t.inherit!==!1?e:{}}function pb(t){const{initial:e,animate:n}=fb(t,N.useContext(rh));return N.useMemo(()=>({initial:e,animate:n}),[Ev(e),Ev(n)])}function Ev(t){return Array.isArray(t)?t.join(" "):t}const Tv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Fa={};for(const t in Tv)Fa[t]={isEnabled:e=>Tv[t].some(n=>!!e[n])};function mb(t){for(const e in t)Fa[e]={...Fa[e],...t[e]}}const $T=N.createContext({}),WT=N.createContext({}),gb=Symbol.for("motionComponentSymbol");function yb({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:i}){t&&mb(t);function s(a,l){let c;const h={...N.useContext(FT),...a,layoutId:vb(a)},{isStatic:d}=h,p=pb(a),y=r(a,d);if(!d&&ih){p.visualElement=hb(i,y,h,e);const x=N.useContext(WT),S=N.useContext(UT).strict;p.visualElement&&(c=p.visualElement.loadFeatures(h,S,t,x))}return N.createElement(rh.Provider,{value:p},c&&p.visualElement?N.createElement(c,{visualElement:p.visualElement,...h}):null,n(i,a,db(y,p.visualElement,l),y,d,p.visualElement))}const o=N.forwardRef(s);return o[gb]=i,o}function vb({layoutId:t}){const e=N.useContext($T).id;return e&&t!==void 0?e+"-"+t:t}function _b(t){function e(r,i={}){return yb(t(r,i))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(r,i)=>(n.has(i)||n.set(i,e(i)),n.get(i))})}const wb=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Gm(t){return typeof t!="string"||t.includes("-")?!1:!!(wb.indexOf(t)>-1||/[A-Z]/.test(t))}const cc={};function Eb(t){Object.assign(cc,t)}const ll=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Wi=new Set(ll);function HT(t,{layout:e,layoutId:n}){return Wi.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!cc[t]||t==="opacity")}const Nt=t=>!!(t&&t.getVelocity),Tb={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},xb=ll.length;function Ib(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},r,i){let s="";for(let o=0;o<xb;o++){const a=ll[o];if(t[a]!==void 0){const l=Tb[a]||a;s+=`${l}(${t[a]}) `}}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),i?s=i(t,r?"":s):n&&r&&(s="none"),s}const qT=t=>e=>typeof e=="string"&&e.startsWith(t),GT=qT("--"),ep=qT("var(--"),Sb=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Pb=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Kr=(t,e,n)=>Math.min(Math.max(n,t),e),Hi={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ua={...Hi,transform:t=>Kr(0,1,t)},tu={...Hi,default:1},ca=t=>Math.round(t*1e5)/1e5,ah=/(-)?([\d]*\.?[\d])+/g,KT=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Ab=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ul(t){return typeof t=="string"}const cl=t=>({test:e=>ul(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),mr=cl("deg"),In=cl("%"),K=cl("px"),Cb=cl("vh"),kb=cl("vw"),xv={...In,parse:t=>In.parse(t)/100,transform:t=>In.transform(t*100)},Iv={...Hi,transform:Math.round},QT={borderWidth:K,borderTopWidth:K,borderRightWidth:K,borderBottomWidth:K,borderLeftWidth:K,borderRadius:K,radius:K,borderTopLeftRadius:K,borderTopRightRadius:K,borderBottomRightRadius:K,borderBottomLeftRadius:K,width:K,maxWidth:K,height:K,maxHeight:K,size:K,top:K,right:K,bottom:K,left:K,padding:K,paddingTop:K,paddingRight:K,paddingBottom:K,paddingLeft:K,margin:K,marginTop:K,marginRight:K,marginBottom:K,marginLeft:K,rotate:mr,rotateX:mr,rotateY:mr,rotateZ:mr,scale:tu,scaleX:tu,scaleY:tu,scaleZ:tu,skew:mr,skewX:mr,skewY:mr,distance:K,translateX:K,translateY:K,translateZ:K,x:K,y:K,z:K,perspective:K,transformPerspective:K,opacity:ua,originX:xv,originY:xv,originZ:K,zIndex:Iv,fillOpacity:ua,strokeOpacity:ua,numOctaves:Iv};function Km(t,e,n,r){const{style:i,vars:s,transform:o,transformOrigin:a}=t;let l=!1,c=!1,h=!0;for(const d in e){const p=e[d];if(GT(d)){s[d]=p;continue}const y=QT[d],x=Pb(p,y);if(Wi.has(d)){if(l=!0,o[d]=x,!h)continue;p!==(y.default||0)&&(h=!1)}else d.startsWith("origin")?(c=!0,a[d]=x):i[d]=x}if(e.transform||(l||r?i.transform=Ib(t.transform,n,h,r):i.transform&&(i.transform="none")),c){const{originX:d="50%",originY:p="50%",originZ:y=0}=a;i.transformOrigin=`${d} ${p} ${y}`}}const Qm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function YT(t,e,n){for(const r in e)!Nt(e[r])&&!HT(r,n)&&(t[r]=e[r])}function Rb({transformTemplate:t},e,n){return N.useMemo(()=>{const r=Qm();return Km(r,e,{enableHardwareAcceleration:!n},t),Object.assign({},r.vars,r.style)},[e])}function bb(t,e,n){const r=t.style||{},i={};return YT(i,r,t),Object.assign(i,Rb(t,e,n)),t.transformValues?t.transformValues(i):i}function Nb(t,e,n){const r={},i=bb(t,e,n);return t.drag&&t.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=i,r}const Db=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function hc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Db.has(t)}let XT=t=>!hc(t);function Vb(t){t&&(XT=e=>e.startsWith("on")?!hc(e):t(e))}try{Vb(require("@emotion/is-prop-valid").default)}catch{}function Lb(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||(XT(i)||n===!0&&hc(i)||!e&&!hc(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}function Sv(t,e,n){return typeof t=="string"?t:K.transform(e+n*t)}function Ob(t,e,n){const r=Sv(e,t.x,t.width),i=Sv(n,t.y,t.height);return`${r} ${i}`}const Mb={offset:"stroke-dashoffset",array:"stroke-dasharray"},jb={offset:"strokeDashoffset",array:"strokeDasharray"};function Fb(t,e,n=1,r=0,i=!0){t.pathLength=1;const s=i?Mb:jb;t[s.offset]=K.transform(-r);const o=K.transform(e),a=K.transform(n);t[s.array]=`${o} ${a}`}function Ym(t,{attrX:e,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},h,d,p){if(Km(t,c,h,p),d){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:y,style:x,dimensions:S}=t;y.transform&&(S&&(x.transform=y.transform),delete y.transform),S&&(i!==void 0||s!==void 0||x.transform)&&(x.transformOrigin=Ob(S,i!==void 0?i:.5,s!==void 0?s:.5)),e!==void 0&&(y.x=e),n!==void 0&&(y.y=n),r!==void 0&&(y.scale=r),o!==void 0&&Fb(y,o,a,l,!1)}const JT=()=>({...Qm(),attrs:{}}),Xm=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Ub(t,e,n,r){const i=N.useMemo(()=>{const s=JT();return Ym(s,e,{enableHardwareAcceleration:!1},Xm(r),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};YT(s,t.style,t),i.style={...s,...i.style}}return i}function Bb(t=!1){return(n,r,i,{latestValues:s},o)=>{const l=(Gm(n)?Ub:Nb)(r,s,o,n),h={...Lb(r,typeof n=="string",t),...l,ref:i},{children:d}=r,p=N.useMemo(()=>Nt(d)?d.get():d,[d]);return N.createElement(n,{...h,children:p})}}function ZT(t,{style:e,vars:n},r,i){Object.assign(t.style,e,i&&i.getProjectionStyles(r));for(const s in n)t.style.setProperty(s,n[s])}const ex=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function tx(t,e,n,r){ZT(t,e,void 0,r);for(const i in e.attrs)t.setAttribute(ex.has(i)?i:Wm(i),e.attrs[i])}function Jm(t,e){const{style:n}=t,r={};for(const i in n)(Nt(n[i])||e.style&&Nt(e.style[i])||HT(i,t))&&(r[i]=n[i]);return r}function nx(t,e){const n=Jm(t,e);for(const r in t)if(Nt(t[r])||Nt(e[r])){const i=ll.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=t[r]}return n}function Zm(t,e,n,r={},i={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,i)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,i)),e}function zb(t){const e=N.useRef(null);return e.current===null&&(e.current=t()),e.current}const dc=t=>Array.isArray(t),$b=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Wb=t=>dc(t)?t[t.length-1]||0:t;function Pu(t){const e=Nt(t)?t.get():t;return $b(e)?e.toValue():e}function Hb({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},r,i,s){const o={latestValues:qb(r,i,s,t),renderState:e()};return n&&(o.mount=a=>n(r,a,o)),o}const rx=t=>(e,n)=>{const r=N.useContext(rh),i=N.useContext($m),s=()=>Hb(t,e,r,i);return n?s():zb(s)};function qb(t,e,n,r){const i={},s=r(t,{});for(const p in s)i[p]=Pu(s[p]);let{initial:o,animate:a}=t;const l=oh(t),c=zT(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let h=n?n.initial===!1:!1;h=h||o===!1;const d=h?a:o;return d&&typeof d!="boolean"&&!sh(d)&&(Array.isArray(d)?d:[d]).forEach(y=>{const x=Zm(t,y);if(!x)return;const{transitionEnd:S,transition:C,...w}=x;for(const v in w){let _=w[v];if(Array.isArray(_)){const b=h?_.length-1:0;_=_[b]}_!==null&&(i[v]=_)}for(const v in S)i[v]=S[v]}),i}const Ne=t=>t;class Pv{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function Gb(t){let e=new Pv,n=new Pv,r=0,i=!1,s=!1;const o=new WeakSet,a={schedule:(l,c=!1,h=!1)=>{const d=h&&i,p=d?e:n;return c&&o.add(l),p.add(l)&&d&&i&&(r=e.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(i){s=!0;return}if(i=!0,[e,n]=[n,e],n.clear(),r=e.order.length,r)for(let c=0;c<r;c++){const h=e.order[c];h(l),o.has(h)&&(a.schedule(h),t())}i=!1,s&&(s=!1,a.process(l))}};return a}const nu=["prepare","read","update","preRender","render","postRender"],Kb=40;function Qb(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=nu.reduce((d,p)=>(d[p]=Gb(()=>n=!0),d),{}),o=d=>s[d].process(i),a=()=>{const d=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(d-i.timestamp,Kb),1),i.timestamp=d,i.isProcessing=!0,nu.forEach(o),i.isProcessing=!1,n&&e&&(r=!1,t(a))},l=()=>{n=!0,r=!0,i.isProcessing||t(a)};return{schedule:nu.reduce((d,p)=>{const y=s[p];return d[p]=(x,S=!1,C=!1)=>(n||l(),y.schedule(x,S,C)),d},{}),cancel:d=>nu.forEach(p=>s[p].cancel(d)),state:i,steps:s}}const{schedule:Te,cancel:Xn,state:ct,steps:Cd}=Qb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ne,!0),Yb={useVisualState:rx({scrapeMotionValuesFromProps:nx,createRenderState:JT,onMount:(t,e,{renderState:n,latestValues:r})=>{Te.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),Te.render(()=>{Ym(n,r,{enableHardwareAcceleration:!1},Xm(e.tagName),t.transformTemplate),tx(e,n)})}})},Xb={useVisualState:rx({scrapeMotionValuesFromProps:Jm,createRenderState:Qm})};function Jb(t,{forwardMotionProps:e=!1},n,r){return{...Gm(t)?Yb:Xb,preloadedFeatures:n,useRender:Bb(e),createVisualElement:r,Component:t}}function Mn(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}const ix=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function lh(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const Zb=t=>e=>ix(e)&&t(e,lh(e));function zn(t,e,n,r){return Mn(t,e,Zb(n),r)}const eN=(t,e)=>n=>e(t(n)),jr=(...t)=>t.reduce(eN);function sx(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const Av=sx("dragHorizontal"),Cv=sx("dragVertical");function ox(t){let e=!1;if(t==="y")e=Cv();else if(t==="x")e=Av();else{const n=Av(),r=Cv();n&&r?e=()=>{n(),r()}:(n&&n(),r&&r())}return e}function ax(){const t=ox(!0);return t?(t(),!1):!0}class si{constructor(e){this.isMounted=!1,this.node=e}update(){}}function kv(t,e){const n="pointer"+(e?"enter":"leave"),r="onHover"+(e?"Start":"End"),i=(s,o)=>{if(s.pointerType==="touch"||ax())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[r]&&Te.update(()=>a[r](s,o))};return zn(t.current,n,i,{passive:!t.getProps()[r]})}class tN extends si{mount(){this.unmount=jr(kv(this.node,!0),kv(this.node,!1))}unmount(){}}class nN extends si{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=jr(Mn(this.node.current,"focus",()=>this.onFocus()),Mn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const lx=(t,e)=>e?t===e?!0:lx(t,e.parentElement):!1;function kd(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,lh(n))}class rN extends si{constructor(){super(...arguments),this.removeStartListeners=Ne,this.removeEndListeners=Ne,this.removeAccessibleListeners=Ne,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),s=zn(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:h,globalTapTarget:d}=this.node.getProps();Te.update(()=>{!d&&!lx(this.node.current,a.target)?h&&h(a,l):c&&c(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),o=zn(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=jr(s,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||kd("up",(l,c)=>{const{onTap:h}=this.node.getProps();h&&Te.update(()=>h(l,c))})};this.removeEndListeners(),this.removeEndListeners=Mn(this.node.current,"keyup",o),kd("down",(a,l)=>{this.startPress(a,l)})},n=Mn(this.node.current,"keydown",e),r=()=>{this.isPressing&&kd("cancel",(s,o)=>this.cancelPress(s,o))},i=Mn(this.node.current,"blur",r);this.removeAccessibleListeners=jr(n,i)}}startPress(e,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&Te.update(()=>r(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!ax()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&Te.update(()=>r(e,n))}mount(){const e=this.node.getProps(),n=zn(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),r=Mn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=jr(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const tp=new WeakMap,Rd=new WeakMap,iN=t=>{const e=tp.get(t.target);e&&e(t)},sN=t=>{t.forEach(iN)};function oN({root:t,...e}){const n=t||document;Rd.has(n)||Rd.set(n,{});const r=Rd.get(n),i=JSON.stringify(e);return r[i]||(r[i]=new IntersectionObserver(sN,{root:t,...e})),r[i]}function aN(t,e,n){const r=oN(e);return tp.set(t,n),r.observe(t),()=>{tp.delete(t),r.unobserve(t)}}const lN={some:0,all:1};class uN extends si{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:lN[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:h,onViewportLeave:d}=this.node.getProps(),p=c?h:d;p&&p(l)};return aN(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(cN(e,n))&&this.startObserver()}unmount(){}}function cN({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const hN={inView:{Feature:uN},tap:{Feature:rN},focus:{Feature:nN},hover:{Feature:tN}};function ux(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function dN(t){const e={};return t.values.forEach((n,r)=>e[r]=n.get()),e}function fN(t){const e={};return t.values.forEach((n,r)=>e[r]=n.getVelocity()),e}function uh(t,e,n){const r=t.getProps();return Zm(r,e,n!==void 0?n:r.custom,dN(t),fN(t))}let pN=Ne,eg=Ne;const Fr=t=>t*1e3,$n=t=>t/1e3,mN={current:!1},cx=t=>Array.isArray(t)&&typeof t[0]=="number";function hx(t){return!!(!t||typeof t=="string"&&dx[t]||cx(t)||Array.isArray(t)&&t.every(hx))}const Go=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,dx={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Go([0,.65,.55,1]),circOut:Go([.55,0,1,.45]),backIn:Go([.31,.01,.66,-.59]),backOut:Go([.33,1.53,.69,.99])};function fx(t){if(t)return cx(t)?Go(t):Array.isArray(t)?t.map(fx):dx[t]}function gN(t,e,n,{delay:r=0,duration:i,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const c={[e]:n};l&&(c.offset=l);const h=fx(a);return Array.isArray(h)&&(c.easing=h),t.animate(c,{delay:r,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function yN(t,{repeat:e,repeatType:n="loop"}){const r=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[r]}const px=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,vN=1e-7,_N=12;function wN(t,e,n,r,i){let s,o,a=0;do o=e+(n-e)/2,s=px(o,r,i)-t,s>0?n=o:e=o;while(Math.abs(s)>vN&&++a<_N);return o}function hl(t,e,n,r){if(t===e&&n===r)return Ne;const i=s=>wN(s,0,1,t,n);return s=>s===0||s===1?s:px(i(s),e,r)}const EN=hl(.42,0,1,1),TN=hl(0,0,.58,1),mx=hl(.42,0,.58,1),xN=t=>Array.isArray(t)&&typeof t[0]!="number",gx=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,yx=t=>e=>1-t(1-e),tg=t=>1-Math.sin(Math.acos(t)),vx=yx(tg),IN=gx(tg),_x=hl(.33,1.53,.69,.99),ng=yx(_x),SN=gx(ng),PN=t=>(t*=2)<1?.5*ng(t):.5*(2-Math.pow(2,-10*(t-1))),AN={linear:Ne,easeIn:EN,easeInOut:mx,easeOut:TN,circIn:tg,circInOut:IN,circOut:vx,backIn:ng,backInOut:SN,backOut:_x,anticipate:PN},Rv=t=>{if(Array.isArray(t)){eg(t.length===4);const[e,n,r,i]=t;return hl(e,n,r,i)}else if(typeof t=="string")return AN[t];return t},rg=(t,e)=>n=>!!(ul(n)&&Ab.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),wx=(t,e,n)=>r=>{if(!ul(r))return r;const[i,s,o,a]=r.match(ah);return{[t]:parseFloat(i),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},CN=t=>Kr(0,255,t),bd={...Hi,transform:t=>Math.round(CN(t))},Ii={test:rg("rgb","red"),parse:wx("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+bd.transform(t)+", "+bd.transform(e)+", "+bd.transform(n)+", "+ca(ua.transform(r))+")"};function kN(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const np={test:rg("#"),parse:kN,transform:Ii.transform},vs={test:rg("hsl","hue"),parse:wx("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+In.transform(ca(e))+", "+In.transform(ca(n))+", "+ca(ua.transform(r))+")"},_t={test:t=>Ii.test(t)||np.test(t)||vs.test(t),parse:t=>Ii.test(t)?Ii.parse(t):vs.test(t)?vs.parse(t):np.parse(t),transform:t=>ul(t)?t:t.hasOwnProperty("red")?Ii.transform(t):vs.transform(t)},Pe=(t,e,n)=>-n*t+n*e+t;function Nd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function RN({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let i=0,s=0,o=0;if(!e)i=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;i=Nd(l,a,t+1/3),s=Nd(l,a,t),o=Nd(l,a,t-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}const Dd=(t,e,n)=>{const r=t*t;return Math.sqrt(Math.max(0,n*(e*e-r)+r))},bN=[np,Ii,vs],NN=t=>bN.find(e=>e.test(t));function bv(t){const e=NN(t);let n=e.parse(t);return e===vs&&(n=RN(n)),n}const Ex=(t,e)=>{const n=bv(t),r=bv(e),i={...n};return s=>(i.red=Dd(n.red,r.red,s),i.green=Dd(n.green,r.green,s),i.blue=Dd(n.blue,r.blue,s),i.alpha=Pe(n.alpha,r.alpha,s),Ii.transform(i))};function DN(t){var e,n;return isNaN(t)&&ul(t)&&(((e=t.match(ah))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(KT))===null||n===void 0?void 0:n.length)||0)>0}const Tx={regex:Sb,countKey:"Vars",token:"${v}",parse:Ne},xx={regex:KT,countKey:"Colors",token:"${c}",parse:_t.parse},Ix={regex:ah,countKey:"Numbers",token:"${n}",parse:Hi.parse};function Vd(t,{regex:e,countKey:n,token:r,parse:i}){const s=t.tokenised.match(e);s&&(t["num"+n]=s.length,t.tokenised=t.tokenised.replace(e,r),t.values.push(...s.map(i)))}function fc(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Vd(n,Tx),Vd(n,xx),Vd(n,Ix),n}function Sx(t){return fc(t).values}function Px(t){const{values:e,numColors:n,numVars:r,tokenised:i}=fc(t),s=e.length;return o=>{let a=i;for(let l=0;l<s;l++)l<r?a=a.replace(Tx.token,o[l]):l<r+n?a=a.replace(xx.token,_t.transform(o[l])):a=a.replace(Ix.token,ca(o[l]));return a}}const VN=t=>typeof t=="number"?0:t;function LN(t){const e=Sx(t);return Px(t)(e.map(VN))}const Qr={test:DN,parse:Sx,createTransformer:Px,getAnimatableNone:LN},Ax=(t,e)=>n=>`${n>0?e:t}`;function Cx(t,e){return typeof t=="number"?n=>Pe(t,e,n):_t.test(t)?Ex(t,e):t.startsWith("var(")?Ax(t,e):Rx(t,e)}const kx=(t,e)=>{const n=[...t],r=n.length,i=t.map((s,o)=>Cx(s,e[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}},ON=(t,e)=>{const n={...t,...e},r={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(r[i]=Cx(t[i],e[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}},Rx=(t,e)=>{const n=Qr.createTransformer(e),r=fc(t),i=fc(e);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?jr(kx(r.values,i.values),n):Ax(t,e)},Ua=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r},Nv=(t,e)=>n=>Pe(t,e,n);function MN(t){return typeof t=="number"?Nv:typeof t=="string"?_t.test(t)?Ex:Rx:Array.isArray(t)?kx:typeof t=="object"?ON:Nv}function jN(t,e,n){const r=[],i=n||MN(t[0]),s=t.length-1;for(let o=0;o<s;o++){let a=i(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Ne:e;a=jr(l,a)}r.push(a)}return r}function bx(t,e,{clamp:n=!0,ease:r,mixer:i}={}){const s=t.length;if(eg(s===e.length),s===1)return()=>e[0];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=jN(e,r,i),a=o.length,l=c=>{let h=0;if(a>1)for(;h<t.length-2&&!(c<t[h+1]);h++);const d=Ua(t[h],t[h+1],c);return o[h](d)};return n?c=>l(Kr(t[0],t[s-1],c)):l}function FN(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const i=Ua(0,e,r);t.push(Pe(n,1,i))}}function UN(t){const e=[0];return FN(e,t.length-1),e}function BN(t,e){return t.map(n=>n*e)}function zN(t,e){return t.map(()=>e||mx).splice(0,t.length-1)}function pc({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const i=xN(r)?r.map(Rv):Rv(r),s={done:!1,value:e[0]},o=BN(n&&n.length===e.length?n:UN(e),t),a=bx(o,e,{ease:Array.isArray(i)?i:zN(e,i)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}function Nx(t,e){return e?t*(1e3/e):0}const $N=5;function Dx(t,e,n){const r=Math.max(e-$N,0);return Nx(n-t(r),e-r)}const Ld=.001,WN=.01,Dv=10,HN=.05,qN=1;function GN({duration:t=800,bounce:e=.25,velocity:n=0,mass:r=1}){let i,s;pN(t<=Fr(Dv));let o=1-e;o=Kr(HN,qN,o),t=Kr(WN,Dv,$n(t)),o<1?(i=c=>{const h=c*o,d=h*t,p=h-n,y=rp(c,o),x=Math.exp(-d);return Ld-p/y*x},s=c=>{const d=c*o*t,p=d*n+n,y=Math.pow(o,2)*Math.pow(c,2)*t,x=Math.exp(-d),S=rp(Math.pow(c,2),o);return(-i(c)+Ld>0?-1:1)*((p-y)*x)/S}):(i=c=>{const h=Math.exp(-c*t),d=(c-n)*t+1;return-Ld+h*d},s=c=>{const h=Math.exp(-c*t),d=(n-c)*(t*t);return h*d});const a=5/t,l=QN(i,s,a);if(t=Fr(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:t}}}const KN=12;function QN(t,e,n){let r=n;for(let i=1;i<KN;i++)r=r-t(r)/e(r);return r}function rp(t,e){return t*Math.sqrt(1-e*e)}const YN=["duration","bounce"],XN=["stiffness","damping","mass"];function Vv(t,e){return e.some(n=>t[n]!==void 0)}function JN(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!Vv(t,XN)&&Vv(t,YN)){const n=GN(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function Vx({keyframes:t,restDelta:e,restSpeed:n,...r}){const i=t[0],s=t[t.length-1],o={done:!1,value:i},{stiffness:a,damping:l,mass:c,duration:h,velocity:d,isResolvedFromDuration:p}=JN({...r,velocity:-$n(r.velocity||0)}),y=d||0,x=l/(2*Math.sqrt(a*c)),S=s-i,C=$n(Math.sqrt(a/c)),w=Math.abs(S)<5;n||(n=w?.01:2),e||(e=w?.005:.5);let v;if(x<1){const _=rp(C,x);v=b=>{const L=Math.exp(-x*C*b);return s-L*((y+x*C*S)/_*Math.sin(_*b)+S*Math.cos(_*b))}}else if(x===1)v=_=>s-Math.exp(-C*_)*(S+(y+C*S)*_);else{const _=C*Math.sqrt(x*x-1);v=b=>{const L=Math.exp(-x*C*b),M=Math.min(_*b,300);return s-L*((y+x*C*S)*Math.sinh(M)+_*S*Math.cosh(M))/_}}return{calculatedDuration:p&&h||null,next:_=>{const b=v(_);if(p)o.done=_>=h;else{let L=y;_!==0&&(x<1?L=Dx(v,_,b):L=0);const M=Math.abs(L)<=n,I=Math.abs(s-b)<=e;o.done=M&&I}return o.value=o.done?s:b,o}}}function Lv({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:h}){const d=t[0],p={done:!1,value:d},y=E=>a!==void 0&&E<a||l!==void 0&&E>l,x=E=>a===void 0?l:l===void 0||Math.abs(a-E)<Math.abs(l-E)?a:l;let S=n*e;const C=d+S,w=o===void 0?C:o(C);w!==C&&(S=w-d);const v=E=>-S*Math.exp(-E/r),_=E=>w+v(E),b=E=>{const P=v(E),A=_(E);p.done=Math.abs(P)<=c,p.value=p.done?w:A};let L,M;const I=E=>{y(p.value)&&(L=E,M=Vx({keyframes:[p.value,x(p.value)],velocity:Dx(_,E,p.value),damping:i,stiffness:s,restDelta:c,restSpeed:h}))};return I(0),{calculatedDuration:null,next:E=>{let P=!1;return!M&&L===void 0&&(P=!0,b(E),I(E)),L!==void 0&&E>L?M.next(E-L):(!P&&b(E),p)}}}const ZN=t=>{const e=({timestamp:n})=>t(n);return{start:()=>Te.update(e,!0),stop:()=>Xn(e),now:()=>ct.isProcessing?ct.timestamp:performance.now()}},Ov=2e4;function Mv(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<Ov;)e+=n,r=t.next(e);return e>=Ov?1/0:e}const eD={decay:Lv,inertia:Lv,tween:pc,keyframes:pc,spring:Vx};function mc({autoplay:t=!0,delay:e=0,driver:n=ZN,keyframes:r,type:i="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:c,onComplete:h,onUpdate:d,...p}){let y=1,x=!1,S,C;const w=()=>{C=new Promise(J=>{S=J})};w();let v;const _=eD[i]||pc;let b;_!==pc&&typeof r[0]!="number"&&(b=bx([0,100],r,{clamp:!1}),r=[0,100]);const L=_({...p,keyframes:r});let M;a==="mirror"&&(M=_({...p,keyframes:[...r].reverse(),velocity:-(p.velocity||0)}));let I="idle",E=null,P=null,A=null;L.calculatedDuration===null&&s&&(L.calculatedDuration=Mv(L));const{calculatedDuration:R}=L;let D=1/0,k=1/0;R!==null&&(D=R+o,k=D*(s+1)-o);let ae=0;const Oe=J=>{if(P===null)return;y>0&&(P=Math.min(P,J)),y<0&&(P=Math.min(J-k/y,P)),E!==null?ae=E:ae=Math.round(J-P)*y;const fe=ae-e*(y>=0?1:-1),pn=y>=0?fe<0:fe>k;ae=Math.max(fe,0),I==="finished"&&E===null&&(ae=k);let gt=ae,mn=L;if(s){const Yi=Math.min(ae,k)/D;let ui=Math.floor(Yi),Nn=Yi%1;!Nn&&Yi>=1&&(Nn=1),Nn===1&&ui--,ui=Math.min(ui,s+1),!!(ui%2)&&(a==="reverse"?(Nn=1-Nn,o&&(Nn-=o/D)):a==="mirror"&&(mn=M)),gt=Kr(0,1,Nn)*D}const Ze=pn?{done:!1,value:r[0]}:mn.next(gt);b&&(Ze.value=b(Ze.value));let{done:Zt}=Ze;!pn&&R!==null&&(Zt=y>=0?ae>=k:ae<=0);const po=E===null&&(I==="finished"||I==="running"&&Zt);return d&&d(Ze.value),po&&z(),Ze},me=()=>{v&&v.stop(),v=void 0},Ge=()=>{I="idle",me(),S(),w(),P=A=null},z=()=>{I="finished",h&&h(),me(),S()},G=()=>{if(x)return;v||(v=n(Oe));const J=v.now();l&&l(),E!==null?P=J-E:(!P||I==="finished")&&(P=J),I==="finished"&&w(),A=P,E=null,I="running",v.start()};t&&G();const te={then(J,fe){return C.then(J,fe)},get time(){return $n(ae)},set time(J){J=Fr(J),ae=J,E!==null||!v||y===0?E=J:P=v.now()-J/y},get duration(){const J=L.calculatedDuration===null?Mv(L):L.calculatedDuration;return $n(J)},get speed(){return y},set speed(J){J===y||!v||(y=J,te.time=$n(ae))},get state(){return I},play:G,pause:()=>{I="paused",E=ae},stop:()=>{x=!0,I!=="idle"&&(I="idle",c&&c(),Ge())},cancel:()=>{A!==null&&Oe(A),Ge()},complete:()=>{I="finished"},sample:J=>(P=0,Oe(J))};return te}function tD(t){let e;return()=>(e===void 0&&(e=t()),e)}const nD=tD(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),rD=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),ru=10,iD=2e4,sD=(t,e)=>e.type==="spring"||t==="backgroundColor"||!hx(e.ease);function oD(t,e,{onUpdate:n,onComplete:r,...i}){if(!(nD()&&rD.has(e)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let o=!1,a,l,c=!1;const h=()=>{l=new Promise(_=>{a=_})};h();let{keyframes:d,duration:p=300,ease:y,times:x}=i;if(sD(e,i)){const _=mc({...i,repeat:0,delay:0});let b={done:!1,value:d[0]};const L=[];let M=0;for(;!b.done&&M<iD;)b=_.sample(M),L.push(b.value),M+=ru;x=void 0,d=L,p=M-ru,y="linear"}const S=gN(t.owner.current,e,d,{...i,duration:p,ease:y,times:x}),C=()=>{c=!1,S.cancel()},w=()=>{c=!0,Te.update(C),a(),h()};return S.onfinish=()=>{c||(t.set(yN(d,i)),r&&r(),w())},{then(_,b){return l.then(_,b)},attachTimeline(_){return S.timeline=_,S.onfinish=null,Ne},get time(){return $n(S.currentTime||0)},set time(_){S.currentTime=Fr(_)},get speed(){return S.playbackRate},set speed(_){S.playbackRate=_},get duration(){return $n(p)},play:()=>{o||(S.play(),Xn(C))},pause:()=>S.pause(),stop:()=>{if(o=!0,S.playState==="idle")return;const{currentTime:_}=S;if(_){const b=mc({...i,autoplay:!1});t.setWithVelocity(b.sample(_-ru).value,b.sample(_).value,ru)}w()},complete:()=>{c||S.finish()},cancel:w}}function aD({keyframes:t,delay:e,onUpdate:n,onComplete:r}){const i=()=>(n&&n(t[t.length-1]),r&&r(),{time:0,speed:1,duration:0,play:Ne,pause:Ne,stop:Ne,then:s=>(s(),Promise.resolve()),cancel:Ne,complete:Ne});return e?mc({keyframes:[0,1],duration:0,delay:e,onComplete:i}):i()}const lD={type:"spring",stiffness:500,damping:25,restSpeed:10},uD=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),cD={type:"keyframes",duration:.8},hD={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},dD=(t,{keyframes:e})=>e.length>2?cD:Wi.has(t)?t.startsWith("scale")?uD(e[1]):lD:hD,ip=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Qr.test(e)||e==="0")&&!e.startsWith("url(")),fD=new Set(["brightness","contrast","saturate","opacity"]);function pD(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(ah)||[];if(!r)return t;const i=n.replace(r,"");let s=fD.has(e)?1:0;return r!==n&&(s*=100),e+"("+s+i+")"}const mD=/([a-z-]*)\(.*?\)/g,sp={...Qr,getAnimatableNone:t=>{const e=t.match(mD);return e?e.map(pD).join(" "):t}},gD={...QT,color:_t,backgroundColor:_t,outlineColor:_t,fill:_t,stroke:_t,borderColor:_t,borderTopColor:_t,borderRightColor:_t,borderBottomColor:_t,borderLeftColor:_t,filter:sp,WebkitFilter:sp},ig=t=>gD[t];function Lx(t,e){let n=ig(t);return n!==sp&&(n=Qr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Ox=t=>/^0[^.\s]+$/.test(t);function yD(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||Ox(t)}function vD(t,e,n,r){const i=ip(e,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const o=r.from!==void 0?r.from:t.get();let a;const l=[];for(let c=0;c<s.length;c++)s[c]===null&&(s[c]=c===0?o:s[c-1]),yD(s[c])&&l.push(c),typeof s[c]=="string"&&s[c]!=="none"&&s[c]!=="0"&&(a=s[c]);if(i&&l.length&&a)for(let c=0;c<l.length;c++){const h=l[c];s[h]=Lx(e,a)}return s}function _D({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...h}){return!!Object.keys(h).length}function sg(t,e){return t[e]||t.default||t}const wD={skipAnimations:!1},og=(t,e,n,r={})=>i=>{const s=sg(r,t)||{},o=s.delay||r.delay||0;let{elapsed:a=0}=r;a=a-Fr(o);const l=vD(e,t,n,s),c=l[0],h=l[l.length-1],d=ip(t,c),p=ip(t,h);let y={keyframes:l,velocity:e.getVelocity(),ease:"easeOut",...s,delay:-a,onUpdate:x=>{e.set(x),s.onUpdate&&s.onUpdate(x)},onComplete:()=>{i(),s.onComplete&&s.onComplete()}};if(_D(s)||(y={...y,...dD(t,y)}),y.duration&&(y.duration=Fr(y.duration)),y.repeatDelay&&(y.repeatDelay=Fr(y.repeatDelay)),!d||!p||mN.current||s.type===!1||wD.skipAnimations)return aD(y);if(!r.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const x=oD(e,t,y);if(x)return x}return mc(y)};function gc(t){return!!(Nt(t)&&t.add)}const Mx=t=>/^\-?\d*\.?\d+$/.test(t);function ag(t,e){t.indexOf(e)===-1&&t.push(e)}function lg(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class ug{constructor(){this.subscriptions=[]}add(e){return ag(this.subscriptions,e),()=>lg(this.subscriptions,e)}notify(e,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ED=t=>!isNaN(parseFloat(t));class TD{constructor(e,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:s,timestamp:o}=ct;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,Te.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>Te.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=ED(this.current),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new ug);const r=this.events[e].add(n);return e==="change"?()=>{r(),Te.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,r){this.set(n),this.prev=e,this.timeDelta=r}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Nx(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Us(t,e){return new TD(t,e)}const jx=t=>e=>e.test(t),xD={test:t=>t==="auto",parse:t=>t},Fx=[Hi,K,In,mr,kb,Cb,xD],Uo=t=>Fx.find(jx(t)),ID=[...Fx,_t,Qr],SD=t=>ID.find(jx(t));function PD(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Us(n))}function AD(t,e){const n=uh(t,e);let{transitionEnd:r={},transition:i={},...s}=n?t.makeTargetAnimatable(n,!1):{};s={...s,...r};for(const o in s){const a=Wb(s[o]);PD(t,o,a)}}function CD(t,e,n){var r,i;const s=Object.keys(e).filter(a=>!t.hasValue(a)),o=s.length;if(o)for(let a=0;a<o;a++){const l=s[a],c=e[l];let h=null;Array.isArray(c)&&(h=c[0]),h===null&&(h=(i=(r=n[l])!==null&&r!==void 0?r:t.readValue(l))!==null&&i!==void 0?i:e[l]),h!=null&&(typeof h=="string"&&(Mx(h)||Ox(h))?h=parseFloat(h):!SD(h)&&Qr.test(c)&&(h=Lx(l,c)),t.addValue(l,Us(h,{owner:t})),n[l]===void 0&&(n[l]=h),h!==null&&t.setBaseTarget(l,h))}}function kD(t,e){return e?(e[t]||e.default||e).from:void 0}function RD(t,e,n){const r={};for(const i in t){const s=kD(i,e);if(s!==void 0)r[i]=s;else{const o=n.getValue(i);o&&(r[i]=o.get())}}return r}function bD({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function ND(t,e){const n=t.get();if(Array.isArray(e)){for(let r=0;r<e.length;r++)if(e[r]!==n)return!0}else return n!==e}function Ux(t,e,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...a}=t.makeTargetAnimatable(e);const l=t.getValue("willChange");r&&(s=r);const c=[],h=i&&t.animationState&&t.animationState.getState()[i];for(const d in a){const p=t.getValue(d),y=a[d];if(!p||y===void 0||h&&bD(h,d))continue;const x={delay:n,elapsed:0,...sg(s||{},d)};if(window.HandoffAppearAnimations){const w=t.getProps()[BT];if(w){const v=window.HandoffAppearAnimations(w,d,p,Te);v!==null&&(x.elapsed=v,x.isHandoff=!0)}}let S=!x.isHandoff&&!ND(p,y);if(x.type==="spring"&&(p.getVelocity()||x.velocity)&&(S=!1),p.animation&&(S=!1),S)continue;p.start(og(d,p,y,t.shouldReduceMotion&&Wi.has(d)?{type:!1}:x));const C=p.animation;gc(l)&&(l.add(d),C.then(()=>l.remove(d))),c.push(C)}return o&&Promise.all(c).then(()=>{o&&AD(t,o)}),c}function op(t,e,n={}){const r=uh(t,e,n.custom);let{transition:i=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(Ux(t,r,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:h,staggerDirection:d}=i;return DD(t,e,c+l,h,d,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,c]=a==="beforeChildren"?[s,o]:[o,s];return l().then(()=>c())}else return Promise.all([s(),o(n.delay)])}function DD(t,e,n=0,r=0,i=1,s){const o=[],a=(t.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(t.variantChildren).sort(VD).forEach((c,h)=>{c.notify("AnimationStart",e),o.push(op(c,e,{...s,delay:n+l(h)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function VD(t,e){return t.sortNodePosition(e)}function LD(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const i=e.map(s=>op(t,s,n));r=Promise.all(i)}else if(typeof e=="string")r=op(t,e,n);else{const i=typeof e=="function"?uh(t,e,n.custom):e;r=Promise.all(Ux(t,i,n))}return r.then(()=>t.notify("AnimationComplete",e))}const OD=[...Hm].reverse(),MD=Hm.length;function jD(t){return e=>Promise.all(e.map(({animation:n,options:r})=>LD(t,n,r)))}function FD(t){let e=jD(t);const n=BD();let r=!0;const i=(l,c)=>{const h=uh(t,c);if(h){const{transition:d,transitionEnd:p,...y}=h;l={...l,...y,...p}}return l};function s(l){e=l(t)}function o(l,c){const h=t.getProps(),d=t.getVariantContext(!0)||{},p=[],y=new Set;let x={},S=1/0;for(let w=0;w<MD;w++){const v=OD[w],_=n[v],b=h[v]!==void 0?h[v]:d[v],L=ja(b),M=v===c?_.isActive:null;M===!1&&(S=w);let I=b===d[v]&&b!==h[v]&&L;if(I&&r&&t.manuallyAnimateOnMount&&(I=!1),_.protectedKeys={...x},!_.isActive&&M===null||!b&&!_.prevProp||sh(b)||typeof b=="boolean")continue;let P=UD(_.prevProp,b)||v===c&&_.isActive&&!I&&L||w>S&&L,A=!1;const R=Array.isArray(b)?b:[b];let D=R.reduce(i,{});M===!1&&(D={});const{prevResolvedValues:k={}}=_,ae={...k,...D},Oe=me=>{P=!0,y.has(me)&&(A=!0,y.delete(me)),_.needsAnimating[me]=!0};for(const me in ae){const Ge=D[me],z=k[me];if(x.hasOwnProperty(me))continue;let G=!1;dc(Ge)&&dc(z)?G=!ux(Ge,z):G=Ge!==z,G?Ge!==void 0?Oe(me):y.add(me):Ge!==void 0&&y.has(me)?Oe(me):_.protectedKeys[me]=!0}_.prevProp=b,_.prevResolvedValues=D,_.isActive&&(x={...x,...D}),r&&t.blockInitialAnimation&&(P=!1),P&&(!I||A)&&p.push(...R.map(me=>({animation:me,options:{type:v,...l}})))}if(y.size){const w={};y.forEach(v=>{const _=t.getBaseTarget(v);_!==void 0&&(w[v]=_)}),p.push({animation:w})}let C=!!p.length;return r&&(h.initial===!1||h.initial===h.animate)&&!t.manuallyAnimateOnMount&&(C=!1),r=!1,C?e(p):Promise.resolve()}function a(l,c,h){var d;if(n[l].isActive===c)return Promise.resolve();(d=t.variantChildren)===null||d===void 0||d.forEach(y=>{var x;return(x=y.animationState)===null||x===void 0?void 0:x.setActive(l,c)}),n[l].isActive=c;const p=o(h,l);for(const y in n)n[y].protectedKeys={};return p}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function UD(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!ux(e,t):!1}function mi(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function BD(){return{animate:mi(!0),whileInView:mi(),whileHover:mi(),whileTap:mi(),whileDrag:mi(),whileFocus:mi(),exit:mi()}}class zD extends si{constructor(e){super(e),e.animationState||(e.animationState=FD(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),sh(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let $D=0;class WD extends si{constructor(){super(...arguments),this.id=$D++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const s=this.node.animationState.setActive("exit",!e,{custom:r??this.node.getProps().custom});n&&!e&&s.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const HD={animation:{Feature:zD},exit:{Feature:WD}},jv=(t,e)=>Math.abs(t-e);function qD(t,e){const n=jv(t.x,e.x),r=jv(t.y,e.y);return Math.sqrt(n**2+r**2)}class Bx{constructor(e,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Md(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,y=qD(d.offset,{x:0,y:0})>=3;if(!p&&!y)return;const{point:x}=d,{timestamp:S}=ct;this.history.push({...x,timestamp:S});const{onStart:C,onMove:w}=this.handlers;p||(C&&C(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),w&&w(this.lastMoveEvent,d)},this.handlePointerMove=(d,p)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Od(p,this.transformPagePoint),Te.update(this.updatePoint,!0)},this.handlePointerUp=(d,p)=>{this.end();const{onEnd:y,onSessionEnd:x,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=Md(d.type==="pointercancel"?this.lastMoveEventInfo:Od(p,this.transformPagePoint),this.history);this.startEvent&&y&&y(d,C),x&&x(d,C)},!ix(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=lh(e),a=Od(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=ct;this.history=[{...l,timestamp:c}];const{onSessionStart:h}=n;h&&h(e,Md(a,this.history)),this.removeListeners=jr(zn(this.contextWindow,"pointermove",this.handlePointerMove),zn(this.contextWindow,"pointerup",this.handlePointerUp),zn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Xn(this.updatePoint)}}function Od(t,e){return e?{point:e(t.point)}:t}function Fv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Md({point:t},e){return{point:t,delta:Fv(t,zx(e)),offset:Fv(t,GD(e)),velocity:KD(e,.1)}}function GD(t){return t[0]}function zx(t){return t[t.length-1]}function KD(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=zx(t);for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>Fr(e)));)n--;if(!r)return{x:0,y:0};const s=$n(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Ft(t){return t.max-t.min}function ap(t,e=0,n=.01){return Math.abs(t-e)<=n}function Uv(t,e,n,r=.5){t.origin=r,t.originPoint=Pe(e.min,e.max,t.origin),t.scale=Ft(n)/Ft(e),(ap(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=Pe(n.min,n.max,t.origin)-t.originPoint,(ap(t.translate)||isNaN(t.translate))&&(t.translate=0)}function ha(t,e,n,r){Uv(t.x,e.x,n.x,r?r.originX:void 0),Uv(t.y,e.y,n.y,r?r.originY:void 0)}function Bv(t,e,n){t.min=n.min+e.min,t.max=t.min+Ft(e)}function QD(t,e,n){Bv(t.x,e.x,n.x),Bv(t.y,e.y,n.y)}function zv(t,e,n){t.min=e.min-n.min,t.max=t.min+Ft(e)}function da(t,e,n){zv(t.x,e.x,n.x),zv(t.y,e.y,n.y)}function YD(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?Pe(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?Pe(n,t,r.max):Math.min(t,n)),t}function $v(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function XD(t,{top:e,left:n,bottom:r,right:i}){return{x:$v(t.x,n,i),y:$v(t.y,e,r)}}function Wv(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function JD(t,e){return{x:Wv(t.x,e.x),y:Wv(t.y,e.y)}}function ZD(t,e){let n=.5;const r=Ft(t),i=Ft(e);return i>r?n=Ua(e.min,e.max-r,t.min):r>i&&(n=Ua(t.min,t.max-i,e.min)),Kr(0,1,n)}function eV(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const lp=.35;function tV(t=lp){return t===!1?t=0:t===!0&&(t=lp),{x:Hv(t,"left","right"),y:Hv(t,"top","bottom")}}function Hv(t,e,n){return{min:qv(t,e),max:qv(t,n)}}function qv(t,e){return typeof t=="number"?t:t[e]||0}const Gv=()=>({translate:0,scale:1,origin:0,originPoint:0}),_s=()=>({x:Gv(),y:Gv()}),Kv=()=>({min:0,max:0}),je=()=>({x:Kv(),y:Kv()});function $t(t){return[t("x"),t("y")]}function $x({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function nV({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function rV(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function jd(t){return t===void 0||t===1}function up({scale:t,scaleX:e,scaleY:n}){return!jd(t)||!jd(e)||!jd(n)}function vi(t){return up(t)||Wx(t)||t.z||t.rotate||t.rotateX||t.rotateY}function Wx(t){return Qv(t.x)||Qv(t.y)}function Qv(t){return t&&t!=="0%"}function yc(t,e,n){const r=t-n,i=e*r;return n+i}function Yv(t,e,n,r,i){return i!==void 0&&(t=yc(t,i,r)),yc(t,n,r)+e}function cp(t,e=0,n=1,r,i){t.min=Yv(t.min,e,n,r,i),t.max=Yv(t.max,e,n,r,i)}function Hx(t,{x:e,y:n}){cp(t.x,e.translate,e.scale,e.originPoint),cp(t.y,n.translate,n.scale,n.originPoint)}function iV(t,e,n,r=!1){const i=n.length;if(!i)return;e.x=e.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&ws(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,Hx(t,o)),r&&vi(s.latestValues)&&ws(t,s.latestValues))}e.x=Xv(e.x),e.y=Xv(e.y)}function Xv(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function vr(t,e){t.min=t.min+e,t.max=t.max+e}function Jv(t,e,[n,r,i]){const s=e[i]!==void 0?e[i]:.5,o=Pe(t.min,t.max,s);cp(t,e[n],e[r],o,e.scale)}const sV=["x","scaleX","originX"],oV=["y","scaleY","originY"];function ws(t,e){Jv(t.x,e,sV),Jv(t.y,e,oV)}function qx(t,e){return $x(rV(t.getBoundingClientRect(),e))}function aV(t,e,n){const r=qx(t,n),{scroll:i}=e;return i&&(vr(r.x,i.offset.x),vr(r.y,i.offset.y)),r}const Gx=({current:t})=>t?t.ownerDocument.defaultView:null,lV=new WeakMap;class uV{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=je(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=h=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(lh(h,"page").point)},s=(h,d)=>{const{drag:p,dragPropagation:y,onDragStart:x}=this.getProps();if(p&&!y&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=ox(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),$t(C=>{let w=this.getAxisMotionValue(C).get()||0;if(In.test(w)){const{projection:v}=this.visualElement;if(v&&v.layout){const _=v.layout.layoutBox[C];_&&(w=Ft(_)*(parseFloat(w)/100))}}this.originPoint[C]=w}),x&&Te.update(()=>x(h,d),!1,!0);const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},o=(h,d)=>{const{dragPropagation:p,dragDirectionLock:y,onDirectionLock:x,onDrag:S}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:C}=d;if(y&&this.currentDirection===null){this.currentDirection=cV(C),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",d.point,C),this.updateAxis("y",d.point,C),this.visualElement.render(),S&&S(h,d)},a=(h,d)=>this.stop(h,d),l=()=>$t(h=>{var d;return this.getAnimationState(h)==="paused"&&((d=this.getAxisMotionValue(h).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Bx(e,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Gx(this.visualElement)})}stop(e,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&Te.update(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,r){const{drag:i}=this.getProps();if(!r||!iu(e,i,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=YD(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&ys(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=XD(i.layoutBox,n):this.constraints=!1,this.elastic=tV(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&$t(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=eV(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!ys(e))return!1;const r=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=aV(r,i.root,this.visualElement.getTransformPagePoint());let o=JD(i.layout.layoutBox,s);if(n){const a=n(nV(o));this.hasMutatedConstraints=!!a,a&&(o=$x(a))}return o}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=$t(h=>{if(!iu(h,n,this.currentDirection))return;let d=l&&l[h]||{};o&&(d={min:0,max:0});const p=i?200:1e6,y=i?40:1e7,x={type:"inertia",velocity:r?e[h]:0,bounceStiffness:p,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(h,x)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return r.start(og(e,r,0,n))}stopAnimation(){$t(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){$t(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){$t(n=>{const{drag:r}=this.getProps();if(!iu(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(e[n]-Pe(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!ys(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};$t(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();i[o]=ZD({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),$t(o=>{if(!iu(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(Pe(l,c,i[o]))})}addListeners(){if(!this.visualElement.current)return;lV.set(this.visualElement,this);const e=this.visualElement.current,n=zn(e,"pointerdown",l=>{const{drag:c,dragListener:h=!0}=this.getProps();c&&h&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();ys(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const o=Mn(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&($t(h=>{const d=this.getAxisMotionValue(h);d&&(this.originPoint[h]+=l[h].translate,d.set(d.get()+l[h].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=lp,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function iu(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function cV(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class hV extends si{constructor(e){super(e),this.removeGroupControls=Ne,this.removeListeners=Ne,this.controls=new uV(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ne}unmount(){this.removeGroupControls(),this.removeListeners()}}const Zv=t=>(e,n)=>{t&&Te.update(()=>t(e,n))};class dV extends si{constructor(){super(...arguments),this.removePointerDownListener=Ne}onPointerDown(e){this.session=new Bx(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Gx(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Zv(e),onStart:Zv(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&Te.update(()=>i(s,o))}}}mount(){this.removePointerDownListener=zn(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function fV(){const t=N.useContext($m);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:r}=t,i=N.useId();return N.useEffect(()=>r(i),[]),!e&&n?[!1,()=>n&&n(i)]:[!0]}const Au={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function e_(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Bo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(K.test(t))t=parseFloat(t);else return t;const n=e_(t,e.target.x),r=e_(t,e.target.y);return`${n}% ${r}%`}},pV={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,i=Qr.parse(t);if(i.length>5)return r;const s=Qr.createTransformer(t),o=typeof i[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;i[0+o]/=a,i[1+o]/=l;const c=Pe(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}};class mV extends le.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=e;Eb(gV),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Au.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||Te.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Kx(t){const[e,n]=fV(),r=N.useContext($T);return le.createElement(mV,{...t,layoutGroup:r,switchLayoutGroup:N.useContext(WT),isPresent:e,safeToRemove:n})}const gV={borderRadius:{...Bo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Bo,borderTopRightRadius:Bo,borderBottomLeftRadius:Bo,borderBottomRightRadius:Bo,boxShadow:pV},Qx=["TopLeft","TopRight","BottomLeft","BottomRight"],yV=Qx.length,t_=t=>typeof t=="string"?parseFloat(t):t,n_=t=>typeof t=="number"||K.test(t);function vV(t,e,n,r,i,s){i?(t.opacity=Pe(0,n.opacity!==void 0?n.opacity:1,_V(r)),t.opacityExit=Pe(e.opacity!==void 0?e.opacity:1,0,wV(r))):s&&(t.opacity=Pe(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<yV;o++){const a=`border${Qx[o]}Radius`;let l=r_(e,a),c=r_(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||n_(l)===n_(c)?(t[a]=Math.max(Pe(t_(l),t_(c),r),0),(In.test(c)||In.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=Pe(e.rotate||0,n.rotate||0,r))}function r_(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const _V=Yx(0,.5,vx),wV=Yx(.5,.95,Ne);function Yx(t,e,n){return r=>r<t?0:r>e?1:n(Ua(t,e,r))}function i_(t,e){t.min=e.min,t.max=e.max}function zt(t,e){i_(t.x,e.x),i_(t.y,e.y)}function s_(t,e,n,r,i){return t-=e,t=yc(t,1/n,r),i!==void 0&&(t=yc(t,1/i,r)),t}function EV(t,e=0,n=1,r=.5,i,s=t,o=t){if(In.test(e)&&(e=parseFloat(e),e=Pe(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=Pe(s.min,s.max,r);t===s&&(a-=e),t.min=s_(t.min,e,n,a,i),t.max=s_(t.max,e,n,a,i)}function o_(t,e,[n,r,i],s,o){EV(t,e[n],e[r],e[i],e.scale,s,o)}const TV=["x","scaleX","originX"],xV=["y","scaleY","originY"];function a_(t,e,n,r){o_(t.x,e,TV,n?n.x:void 0,r?r.x:void 0),o_(t.y,e,xV,n?n.y:void 0,r?r.y:void 0)}function l_(t){return t.translate===0&&t.scale===1}function Xx(t){return l_(t.x)&&l_(t.y)}function IV(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function Jx(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function u_(t){return Ft(t.x)/Ft(t.y)}class SV{constructor(){this.members=[]}add(e){ag(this.members,e),e.scheduleRender()}remove(e){if(lg(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(i=>e===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(e,n){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,n&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:r}=e;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function c_(t,e,n){let r="";const i=t.x.translate/e.x,s=t.y.translate/e.y;if((i||s)&&(r=`translate3d(${i}px, ${s}px, 0) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:l,rotateX:c,rotateY:h}=n;l&&(r+=`rotate(${l}deg) `),c&&(r+=`rotateX(${c}deg) `),h&&(r+=`rotateY(${h}deg) `)}const o=t.x.scale*e.x,a=t.y.scale*e.y;return(o!==1||a!==1)&&(r+=`scale(${o}, ${a})`),r||"none"}const PV=(t,e)=>t.depth-e.depth;class AV{constructor(){this.children=[],this.isDirty=!1}add(e){ag(this.children,e),this.isDirty=!0}remove(e){lg(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(PV),this.isDirty=!1,this.children.forEach(e)}}function CV(t,e){const n=performance.now(),r=({timestamp:i})=>{const s=i-n;s>=e&&(Xn(r),t(s-e))};return Te.read(r,!0),()=>Xn(r)}function kV(t){window.MotionDebug&&window.MotionDebug.record(t)}function RV(t){return t instanceof SVGElement&&t.tagName!=="svg"}function bV(t,e,n){const r=Nt(t)?t:Us(t);return r.start(og("",r,e,n)),r.animation}const h_=["","X","Y","Z"],NV={visibility:"hidden"},d_=1e3;let DV=0;const _i={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Zx({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=e==null?void 0:e()){this.id=DV++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,_i.totalNodes=_i.resolvedTargetDeltas=_i.recalculatedProjection=0,this.nodes.forEach(OV),this.nodes.forEach(BV),this.nodes.forEach(zV),this.nodes.forEach(MV),kV(_i)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new AV)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new ug),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=RV(o),this.instance=o;const{layoutId:l,layout:c,visualElement:h}=this.options;if(h&&!h.current&&h.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let d;const p=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=CV(p,250),Au.hasAnimatedSinceResize&&(Au.hasAnimatedSinceResize=!1,this.nodes.forEach(p_))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&h&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:p,hasRelativeTargetChanged:y,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||h.getDefaultTransition()||GV,{onLayoutAnimationStart:C,onLayoutAnimationComplete:w}=h.getProps(),v=!this.targetLayout||!Jx(this.targetLayout,x)||y,_=!p&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||_||p&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,_);const b={...sg(S,"layout"),onPlay:C,onComplete:w};(h.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b)}else p||p_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Xn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach($V),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let h=0;h<this.path.length;h++){const d=this.path[h];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(f_);return}this.isUpdating||this.nodes.forEach(FV),this.isUpdating=!1,this.nodes.forEach(UV),this.nodes.forEach(VV),this.nodes.forEach(LV),this.clearAllSnapshots();const a=performance.now();ct.delta=Kr(0,1e3/60,a-ct.timestamp),ct.timestamp=a,ct.isProcessing=!0,Cd.update.process(ct),Cd.preRender.process(ct),Cd.render.process(ct),ct.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(jV),this.sharedNodes.forEach(WV)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Te.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Te.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=je(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!Xx(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,h=c!==this.prevTransformTemplateValue;o&&(a||vi(this.latestValues)||h)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),KV(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return je();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(vr(a.x,l.offset.x),vr(a.y,l.offset.y)),a}removeElementScroll(o){const a=je();zt(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:h,options:d}=c;if(c!==this.root&&h&&d.layoutScroll){if(h.isRoot){zt(a,o);const{scroll:p}=this.root;p&&(vr(a.x,-p.offset.x),vr(a.y,-p.offset.y))}vr(a.x,h.offset.x),vr(a.y,h.offset.y)}}return a}applyTransform(o,a=!1){const l=je();zt(l,o);for(let c=0;c<this.path.length;c++){const h=this.path[c];!a&&h.options.layoutScroll&&h.scroll&&h!==h.root&&ws(l,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),vi(h.latestValues)&&ws(l,h.latestValues)}return vi(this.latestValues)&&ws(l,this.latestValues),l}removeTransform(o){const a=je();zt(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!vi(c.latestValues))continue;up(c.latestValues)&&c.updateSnapshot();const h=je(),d=c.measurePageBox();zt(h,d),a_(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,h)}return vi(this.latestValues)&&a_(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ct.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:d,layoutId:p}=this.options;if(!(!this.layout||!(d||p))){if(this.resolvedRelativeTargetAt=ct.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=je(),this.relativeTargetOrigin=je(),da(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),zt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=je(),this.targetWithTransforms=je()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),QD(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):zt(this.target,this.layout.layoutBox),Hx(this.target,this.targetDelta)):zt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=je(),this.relativeTargetOrigin=je(),da(this.relativeTargetOrigin,this.target,y.target),zt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}_i.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||up(this.parent.latestValues)||Wx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===ct.timestamp&&(c=!1),c)return;const{layout:h,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||d))return;zt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,y=this.treeScale.y;iV(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:x}=a;if(!x){this.projectionTransform&&(this.projectionDelta=_s(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=_s(),this.projectionDeltaWithTransform=_s());const S=this.projectionTransform;ha(this.projectionDelta,this.layoutCorrected,x,this.latestValues),this.projectionTransform=c_(this.projectionDelta,this.treeScale),(this.projectionTransform!==S||this.treeScale.x!==p||this.treeScale.y!==y)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),_i.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},h={...this.latestValues},d=_s();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=je(),y=l?l.source:void 0,x=this.layout?this.layout.source:void 0,S=y!==x,C=this.getStack(),w=!C||C.members.length<=1,v=!!(S&&!w&&this.options.crossfade===!0&&!this.path.some(qV));this.animationProgress=0;let _;this.mixTargetDelta=b=>{const L=b/1e3;m_(d.x,o.x,L),m_(d.y,o.y,L),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(da(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),HV(this.relativeTarget,this.relativeTargetOrigin,p,L),_&&IV(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=je()),zt(_,this.relativeTarget)),S&&(this.animationValues=h,vV(h,c,this.latestValues,L,v,w)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Xn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Te.update(()=>{Au.hasAnimatedSinceResize=!0,this.currentAnimation=bV(0,d_,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(d_),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:h}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&eI(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||je();const d=Ft(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const p=Ft(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}zt(a,l),ws(a,h),ha(this.projectionDeltaWithTransform,this.layoutCorrected,a,h)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new SV),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const c={};for(let h=0;h<h_.length;h++){const d="rotate"+h_[h];l[d]&&(c[d]=l[d],o.setStaticValue(d,0))}o.render();for(const h in c)o.setStaticValue(h,c[h]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return NV;const c={visibility:""},h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Pu(o==null?void 0:o.pointerEvents)||"",c.transform=h?h(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const S={};return this.options.layoutId&&(S.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,S.pointerEvents=Pu(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!vi(this.latestValues)&&(S.transform=h?h({},""):"none",this.hasProjected=!1),S}const p=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=c_(this.projectionDeltaWithTransform,this.treeScale,p),h&&(c.transform=h(p,c.transform));const{x:y,y:x}=this.projectionDelta;c.transformOrigin=`${y.origin*100}% ${x.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=d===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const S in cc){if(p[S]===void 0)continue;const{correct:C,applyTo:w}=cc[S],v=c.transform==="none"?p[S]:C(p[S],d);if(w){const _=w.length;for(let b=0;b<_;b++)c[w[b]]=v}else c[S]=v}return this.options.layoutId&&(c.pointerEvents=d===this?Pu(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(f_),this.root.sharedNodes.clear()}}}function VV(t){t.updateLayout()}function LV(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?$t(d=>{const p=o?n.measuredBox[d]:n.layoutBox[d],y=Ft(p);p.min=r[d].min,p.max=p.min+y}):eI(s,n.layoutBox,r)&&$t(d=>{const p=o?n.measuredBox[d]:n.layoutBox[d],y=Ft(r[d]);p.max=p.min+y,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+y)});const a=_s();ha(a,r,n.layoutBox);const l=_s();o?ha(l,t.applyTransform(i,!0),n.measuredBox):ha(l,r,n.layoutBox);const c=!Xx(a);let h=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:p,layout:y}=d;if(p&&y){const x=je();da(x,n.layoutBox,p.layoutBox);const S=je();da(S,r,y.layoutBox),Jx(x,S)||(h=!0),d.options.layoutRoot&&(t.relativeTarget=S,t.relativeTargetOrigin=x,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:h})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function OV(t){_i.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function MV(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function jV(t){t.clearSnapshot()}function f_(t){t.clearMeasurements()}function FV(t){t.isLayoutDirty=!1}function UV(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function p_(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function BV(t){t.resolveTargetDelta()}function zV(t){t.calcProjection()}function $V(t){t.resetRotation()}function WV(t){t.removeLeadSnapshot()}function m_(t,e,n){t.translate=Pe(e.translate,0,n),t.scale=Pe(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function g_(t,e,n,r){t.min=Pe(e.min,n.min,r),t.max=Pe(e.max,n.max,r)}function HV(t,e,n,r){g_(t.x,e.x,n.x,r),g_(t.y,e.y,n.y,r)}function qV(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const GV={duration:.45,ease:[.4,0,.1,1]},y_=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),v_=y_("applewebkit/")&&!y_("chrome/")?Math.round:Ne;function __(t){t.min=v_(t.min),t.max=v_(t.max)}function KV(t){__(t.x),__(t.y)}function eI(t,e,n){return t==="position"||t==="preserve-aspect"&&!ap(u_(e),u_(n),.2)}const QV=Zx({attachResizeListener:(t,e)=>Mn(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Fd={current:void 0},tI=Zx({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Fd.current){const t=new QV({});t.mount(window),t.setOptions({layoutScroll:!0}),Fd.current=t}return Fd.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),YV={pan:{Feature:dV},drag:{Feature:hV,ProjectionNode:tI,MeasureLayout:Kx}},XV=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function JV(t){const e=XV.exec(t);if(!e)return[,];const[,n,r]=e;return[n,r]}function hp(t,e,n=1){const[r,i]=JV(t);if(!r)return;const s=window.getComputedStyle(e).getPropertyValue(r);if(s){const o=s.trim();return Mx(o)?parseFloat(o):o}else return ep(i)?hp(i,e,n+1):i}function ZV(t,{...e},n){const r=t.current;if(!(r instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(i=>{const s=i.get();if(!ep(s))return;const o=hp(s,r);o&&i.set(o)});for(const i in e){const s=e[i];if(!ep(s))continue;const o=hp(s,r);o&&(e[i]=o,n||(n={}),n[i]===void 0&&(n[i]=s))}return{target:e,transitionEnd:n}}const eL=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),nI=t=>eL.has(t),tL=t=>Object.keys(t).some(nI),w_=t=>t===Hi||t===K,E_=(t,e)=>parseFloat(t.split(", ")[e]),T_=(t,e)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return E_(i[1],e);{const s=r.match(/^matrix\((.+)\)$/);return s?E_(s[1],t):0}},nL=new Set(["x","y","z"]),rL=ll.filter(t=>!nL.has(t));function iL(t){const e=[];return rL.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const Bs={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:T_(4,13),y:T_(5,14)};Bs.translateX=Bs.x;Bs.translateY=Bs.y;const sL=(t,e,n)=>{const r=e.measureViewportBox(),i=e.current,s=getComputedStyle(i),{display:o}=s,a={};o==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(c=>{a[c]=Bs[c](r,s)}),e.render();const l=e.measureViewportBox();return n.forEach(c=>{const h=e.getValue(c);h&&h.jump(a[c]),t[c]=Bs[c](l,s)}),t},oL=(t,e,n={},r={})=>{e={...e},r={...r};const i=Object.keys(e).filter(nI);let s=[],o=!1;const a=[];if(i.forEach(l=>{const c=t.getValue(l);if(!t.hasValue(l))return;let h=n[l],d=Uo(h);const p=e[l];let y;if(dc(p)){const x=p.length,S=p[0]===null?1:0;h=p[S],d=Uo(h);for(let C=S;C<x&&p[C]!==null;C++)y?eg(Uo(p[C])===y):y=Uo(p[C])}else y=Uo(p);if(d!==y)if(w_(d)&&w_(y)){const x=c.get();typeof x=="string"&&c.set(parseFloat(x)),typeof p=="string"?e[l]=parseFloat(p):Array.isArray(p)&&y===K&&(e[l]=p.map(parseFloat))}else d!=null&&d.transform&&(y!=null&&y.transform)&&(h===0||p===0)?h===0?c.set(y.transform(h)):e[l]=d.transform(p):(o||(s=iL(t),o=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:e[l],c.jump(p))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,c=sL(e,t,a);return s.length&&s.forEach(([h,d])=>{t.getValue(h).set(d)}),t.render(),ih&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:r}}else return{target:e,transitionEnd:r}};function aL(t,e,n,r){return tL(e)?oL(t,e,n,r):{target:e,transitionEnd:r}}const lL=(t,e,n,r)=>{const i=ZV(t,e,r);return e=i.target,r=i.transitionEnd,aL(t,e,n,r)},dp={current:null},rI={current:!1};function uL(){if(rI.current=!0,!!ih)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>dp.current=t.matches;t.addListener(e),e()}else dp.current=!1}function cL(t,e,n){const{willChange:r}=e;for(const i in e){const s=e[i],o=n[i];if(Nt(s))t.addValue(i,s),gc(r)&&r.add(i);else if(Nt(o))t.addValue(i,Us(s,{owner:t})),gc(r)&&r.remove(i);else if(o!==s)if(t.hasValue(i)){const a=t.getValue(i);!a.hasAnimated&&a.set(s)}else{const a=t.getStaticValue(i);t.addValue(i,Us(a!==void 0?a:s,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const x_=new WeakMap,iI=Object.keys(Fa),hL=iI.length,I_=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],dL=qm.length;class fL{constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:i,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Te.render(this.render,!1,!0);const{latestValues:a,renderState:l}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.isControllingVariants=oh(n),this.isVariantNode=zT(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:c,...h}=this.scrapeMotionValuesFromProps(n,{});for(const d in h){const p=h[d];a[d]!==void 0&&Nt(p)&&(p.set(a[d],!1),gc(c)&&c.add(d))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,x_.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),rI.current||uL(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:dp.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){x_.delete(this.current),this.projection&&this.projection.unmount(),Xn(this.notifyUpdate),Xn(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const r=Wi.has(e),i=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&Te.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{i(),s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},r,i,s){let o,a;for(let l=0;l<hL;l++){const c=iI[l],{isEnabled:h,Feature:d,ProjectionNode:p,MeasureLayout:y}=Fa[c];p&&(o=p),h(n)&&(!this.features[c]&&d&&(this.features[c]=new d(this)),y&&(a=y))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:h,dragConstraints:d,layoutScroll:p,layoutRoot:y}=n;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!h||d&&ys(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,layoutScroll:p,layoutRoot:y})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):je()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,this.props,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<I_.length;r++){const i=I_[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s=e["on"+i];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=cL(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<dL;r++){const i=qm[r],s=this.props[i];(ja(s)||s===!1)&&(n[i]=s)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=Us(n,{owner:this}),this.addValue(e,r)),r}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=Zm(this.props,r))===null||n===void 0?void 0:n[e]:void 0;if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Nt(s)?s:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new ug),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class sI extends fL{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...r},{transformValues:i},s){let o=RD(r,e||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),o&&(o=i(o))),s){CD(this,r,o);const a=lL(this,r,o,n);n=a.transitionEnd,r=a.target}return{transition:e,transitionEnd:n,...r}}}function pL(t){return window.getComputedStyle(t)}class mL extends sI{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(Wi.has(n)){const r=ig(n);return r&&r.default||0}else{const r=pL(e),i=(GT(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(e,{transformPagePoint:n}){return qx(e,n)}build(e,n,r,i){Km(e,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(e,n){return Jm(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Nt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,r,i){ZT(e,n,r,i)}}class gL extends sI{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Wi.has(n)){const r=ig(n);return r&&r.default||0}return n=ex.has(n)?n:Wm(n),e.getAttribute(n)}measureInstanceViewportBox(){return je()}scrapeMotionValuesFromProps(e,n){return nx(e,n)}build(e,n,r,i){Ym(e,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,r,i){tx(e,n,r,i)}mount(e){this.isSVGTag=Xm(e.tagName),super.mount(e)}}const yL=(t,e)=>Gm(t)?new gL(e,{enableHardwareAcceleration:!1}):new mL(e,{enableHardwareAcceleration:!0}),vL={layout:{ProjectionNode:tI,MeasureLayout:Kx}},_L={...HD,...hN,...YV,...vL},cg=_b((t,e)=>Jb(t,e,_L,yL)),wL=()=>g.jsxs("section",{className:"hero",id:"home",children:[g.jsx("div",{className:"hero-bg"}),g.jsx("div",{className:"container hero-content",children:g.jsxs(cg.div,{className:"hero-text",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:[g.jsx("span",{className:"subtitle",children:"Kualitas Export & Harga Bersahabat"}),g.jsxs("h1",{children:["Jati Prime ",g.jsx("br",{}),"Berkualitas 100% Terpercaya"]}),g.jsx("p",{children:"Temukan berbagai kebutuhan furniture anda di katalog produk terbaru kami. Kami selalu memberikan pilihan produk berkualitas mewah, modern, dan up to date."}),g.jsx("a",{href:"#katalog",className:"btn btn-primary",children:"Lihat Katalog"})]})}),g.jsx("style",{children:`
        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          filter: brightness(0.9);
          z-index: -1;
        }
        
        /* Overlay for better text readability */
        .hero-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          width: 100%;
        }

        .hero-text {
          max-width: 600px;
        }

        .subtitle {
          display: block;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-accent);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        h1 {
          font-size: 4.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        p {
          font-size: 1.1rem;
          color: var(--color-text-light);
          margin-bottom: 2.5rem;
          max-width: 450px;
        }

        @media (max-width: 768px) {
          .hero-bg::after {
            background: rgba(255,255,255,0.7);
          }
          
          h1 {
            font-size: 3rem;
          }
          
          .hero-text {
            text-align: center;
            margin: 0 auto;
          }

          p {
            margin: 0 auto 2.5rem;
          }
        }
      `})]}),EL=[{id:1,name:"Sofa",icon:"🛋️",description:"Sofa tamu mewah dan nyaman",image:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop"},{id:2,name:"Meja",icon:"🪑",description:"Meja kerja dan meja makan",image:"https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=600&auto=format&fit=crop"},{id:3,name:"Kursi",icon:"💺",description:"Kursi santai dan kursi kerja",image:"https://images.unsplash.com/photo-1567538096630-e99482672606?q=80&w=600&auto=format&fit=crop"},{id:4,name:"Tempat Tidur",icon:"🛏️",description:"Tempat tidur mewah berbagai ukuran",image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop"},{id:5,name:"Lemari",icon:"🗄️",description:"Lemari pakaian dan penyimpanan",image:"https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600&auto=format&fit=crop"},{id:6,name:"Lampu",icon:"💡",description:"Lampu dekorasi dan penerangan",image:"https://images.unsplash.com/photo-1507473888900-52e1adad5420?q=80&w=600&auto=format&fit=crop"}],TL=({category:t,onClick:e})=>g.jsxs(cg.div,{className:"category-card",whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},onClick:e,children:[g.jsxs("div",{className:"category-image",children:[g.jsx("img",{src:t.image,alt:t.name}),g.jsx("div",{className:"category-overlay",children:g.jsx("span",{className:"category-icon",children:t.icon})})]}),g.jsxs("div",{className:"category-info",children:[g.jsx("h3",{children:t.name}),g.jsx("p",{children:t.description})]}),g.jsx("style",{children:`
        .category-card {
          background: white;
          border-radius: var(--border-radius);
          overflow: hidden;
          cursor: pointer;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }

        .category-card:hover {
          box-shadow: var(--shadow-md);
        }

        .category-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .category-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .category-card:hover .category-image img {
          transform: scale(1.1);
        }

        .category-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4));
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .category-icon {
          font-size: 3rem;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        }

        .category-info {
          padding: 1.5rem;
          text-align: center;
        }

        .category-info h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          font-family: var(--font-body);
          font-weight: 600;
          color: var(--color-primary);
        }

        .category-info p {
          font-size: 0.9rem;
          color: var(--color-text-light);
        }
      `})]}),xL=()=>{const t=e=>{const n=document.getElementById("collection");n&&n.scrollIntoView({behavior:"smooth"})};return g.jsxs("section",{className:"categories-section section-padding",id:"categories",children:[g.jsxs("div",{className:"container",children:[g.jsxs("div",{className:"section-header",children:[g.jsx("h2",{children:"Kategori Produk"}),g.jsx("p",{children:"Jelajahi koleksi furniture kami berdasarkan kategori"})]}),g.jsx("div",{className:"categories-grid",children:EL.map(e=>g.jsx(TL,{category:e,onClick:()=>t()},e.id))})]}),g.jsx("style",{children:`
        .categories-section {
          background: #f9f9f9;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .section-header p {
          color: var(--color-text-light);
          font-size: 1.1rem;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }
          
          .categories-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
          }
        }
      `})]})},IL=[{id:1,name:"Velvet Lounge Chair",category:"Kursi",price:"Rp 5.500.000",image:"https://images.unsplash.com/photo-1567538096630-e99482672606?q=80&w=800&auto=format&fit=crop",description:"Kursi lounge mewah dengan bahan velvet premium"},{id:2,name:"Minimalist Sofa",category:"Sofa",price:"Rp 12.500.000",image:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",description:"Sofa minimalis modern dengan desain elegan"},{id:3,name:"Oak Coffee Table",category:"Meja",price:"Rp 3.500.000",image:"https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=800&auto=format&fit=crop",description:"Meja kopi kayu oak solid berkualitas tinggi"},{id:4,name:"Modern Standing Lamp",category:"Lampu",price:"Rp 1.500.000",image:"https://images.unsplash.com/photo-1507473888900-52e1adad5420?q=80&w=800&auto=format&fit=crop",description:"Lampu standing modern dengan desain kontemporer"},{id:5,name:"Accent Armchair",category:"Kursi",price:"Rp 4.500.000",image:"https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800&auto=format&fit=crop",description:"Kursi accent dengan desain unik dan nyaman"},{id:6,name:"Wooden Cabinet",category:"Lemari",price:"Rp 8.500.000",image:"https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop",description:"Lemari kayu jati dengan detail ukiran klasik"},{id:7,name:"King Size Bed",category:"Tempat Tidur",price:"Rp 15.000.000",image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",description:"Tempat tidur king size kayu jati mewah"},{id:8,name:"Dining Table Set",category:"Meja",price:"Rp 18.000.000",image:"https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop",description:"Set meja makan untuk 6 orang dengan kursi"},{id:9,name:"Sofa Tamu Klasik",category:"Sofa",price:"Rp 14.000.000",image:"https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop",description:"Sofa tamu klasik dengan ukiran detail"}],Oi={phoneNumber:"62895422532976",defaultMessage:"Halo, saya ingin bertanya tentang produk furniture Anda.",generateProductMessage:(t,e,n,r)=>`Halo Admin LuxeLiving,

Saya tertarik dengan produk:
📦 *${t}*
📝 ${r}
💰 Harga: ${e}

🖼️ Lihat Gambar Produk:
${n}

Mohon informasi lebih lanjut mengenai:
- Ketersediaan stok
- Detail spesifikasi
- Proses pemesanan
- Estimasi waktu pengiriman

Terima kasih!`,openWhatsApp:t=>{const e=encodeURIComponent(t),n=`https://wa.me/${Oi.phoneNumber}?text=${e}`;window.open(n,"_blank")}},SL=({product:t})=>{const e=n=>{n.preventDefault();const r=Oi.generateProductMessage(t.name,t.price,t.image,t.description);Oi.openWhatsApp(r)};return g.jsxs(cg.div,{className:"product-card",whileHover:{y:-10},transition:{type:"spring",stiffness:300},children:[g.jsxs("div",{className:"product-image",children:[g.jsx("img",{src:t.image,alt:t.name,loading:"lazy"}),g.jsxs("div",{className:"product-actions",children:[g.jsxs("button",{onClick:e,"aria-label":"Pre Order via WhatsApp",className:"btn-whatsapp",children:[g.jsx(jT,{})," Pre Order"]}),g.jsx("button",{"aria-label":"Add to Wishlist",className:"btn-wishlist",children:g.jsx(JR,{})})]})]}),g.jsxs("div",{className:"product-info",children:[g.jsx("span",{className:"category",children:t.category}),g.jsx("h3",{children:t.name}),g.jsx("p",{className:"description",children:t.description}),g.jsx("span",{className:"price",children:t.price})]}),g.jsx("style",{children:`
        .product-card {
          background: white;
          cursor: pointer;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }

        .product-card:hover {
          box-shadow: var(--shadow-md);
        }

        .product-image {
          position: relative;
          height: 350px;
          overflow: hidden;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .product-card:hover .product-image img {
          transform: scale(1.08);
        }

        .product-actions {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%) translateY(20px);
          display: flex;
          gap: 0.75rem;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .product-card:hover .product-actions {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        .product-actions button {
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          background: white;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          box-shadow: var(--shadow-md);
          transition: all 0.2s ease;
        }

        .btn-whatsapp {
          background: #25D366 !important;
          color: white !important;
        }

        .btn-whatsapp:hover {
          background: #1fb855 !important;
          transform: scale(1.05);
        }

        .btn-wishlist {
          width: 40px;
          height: 40px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-wishlist:hover {
          background: var(--color-primary) !important;
          color: white !important;
        }

        .product-info {
          padding: 1.5rem;
          text-align: center;
        }

        .category {
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--color-text-light);
          letter-spacing: 1px;
          font-weight: 600;
        }

        .product-info h3 {
          font-size: 1.25rem;
          margin: 0.5rem 0;
          font-family: var(--font-body);
          font-weight: 600;
          color: var(--color-primary);
        }

        .description {
          font-size: 0.9rem;
          color: var(--color-text-light);
          margin: 0.5rem 0 1rem;
          line-height: 1.5;
        }

        .price {
          font-weight: 700;
          color: var(--color-accent);
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .product-actions {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
          
          .product-image {
            height: 280px;
          }
        }
      `})]})},PL=()=>{const t=IL.slice(0,9);return g.jsxs("section",{className:"section-padding",id:"collection",children:[g.jsxs("div",{className:"container",children:[g.jsxs("div",{className:"section-header",children:[g.jsx("h2",{children:"Produk Unggulan"}),g.jsx("p",{children:"Koleksi furniture premium pilihan terbaik kami"})]}),g.jsx("div",{className:"product-grid",children:t.map(e=>g.jsx(SL,{product:e},e.id))})]}),g.jsx("style",{children:`
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .section-header p {
          color: var(--color-text-light);
          font-size: 1.1rem;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 3rem;
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }
          
          .product-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `})]})};function fp(t){return De({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"}}]})(t)}const AL=()=>{const t=()=>{Oi.openWhatsApp(Oi.defaultMessage)};return g.jsxs("section",{className:"contact-section section-padding",id:"contact",children:[g.jsxs("div",{className:"container",children:[g.jsxs("div",{className:"section-header",children:[g.jsx("h2",{children:"Hubungi Kami"}),g.jsx("p",{children:"Kami siap membantu Anda menemukan furniture impian"})]}),g.jsxs("div",{className:"contact-grid",children:[g.jsxs("div",{className:"contact-card",children:[g.jsx("div",{className:"icon-wrapper",children:g.jsx(fp,{})}),g.jsx("h3",{children:"WhatsApp"}),g.jsx("p",{children:"+62 823-3030-2593"}),g.jsx("button",{onClick:t,className:"btn btn-primary",children:"Chat Sekarang"})]}),g.jsxs("div",{className:"contact-card",children:[g.jsx("div",{className:"icon-wrapper",children:g.jsx(sb,{})}),g.jsx("h3",{children:"Telepon"}),g.jsx("p",{children:"0895-4225-32976"}),g.jsx("p",{children:"0813-3344-1655"})]}),g.jsxs("div",{className:"contact-card",children:[g.jsx("div",{className:"icon-wrapper",children:g.jsx(nb,{})}),g.jsx("h3",{children:"Email"}),g.jsx("p",{children:"info@luxeliving.com"}),g.jsx("p",{children:"sales@luxeliving.com"})]}),g.jsxs("div",{className:"contact-card",children:[g.jsx("div",{className:"icon-wrapper",children:g.jsx(rb,{})}),g.jsx("h3",{children:"Lokasi"}),g.jsx("p",{children:"Jepara, Jawa Tengah"}),g.jsx("p",{children:"Indonesia"})]}),g.jsxs("div",{className:"contact-card",children:[g.jsx("div",{className:"icon-wrapper",children:g.jsx(QR,{})}),g.jsx("h3",{children:"Jam Operasional"}),g.jsx("p",{children:"Senin - Sabtu"}),g.jsx("p",{children:"08:00 - 17:00 WIB"})]}),g.jsxs("div",{className:"contact-card highlight",children:[g.jsx("h3",{children:"Layanan 24/7"}),g.jsx("p",{children:"WhatsApp kami aktif 24 jam untuk konsultasi dan pertanyaan Anda"}),g.jsxs("button",{onClick:t,className:"btn btn-primary",children:[g.jsx(fp,{style:{marginRight:"8px"}}),"Mulai Chat"]})]})]})]}),g.jsx("style",{children:`
        .contact-section {
          background: white;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .contact-card {
          background: #f9f9f9;
          padding: 2rem;
          border-radius: var(--border-radius);
          text-align: center;
          transition: var(--transition);
        }

        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }

        .contact-card.highlight {
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          color: white;
        }

        .contact-card.highlight h3,
        .contact-card.highlight p {
          color: white;
        }

        .icon-wrapper {
          width: 60px;
          height: 60px;
          background: var(--color-accent);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin: 0 auto 1.5rem;
        }

        .contact-card.highlight .icon-wrapper {
          background: rgba(255, 255, 255, 0.2);
        }

        .contact-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          font-family: var(--font-body);
          font-weight: 600;
        }

        .contact-card p {
          color: var(--color-text-light);
          margin: 0.25rem 0;
        }

        .contact-card .btn {
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},CL=()=>g.jsxs("footer",{className:"footer",children:[g.jsxs("div",{className:"container",children:[g.jsxs("div",{className:"footer-grid",children:[g.jsxs("div",{className:"footer-col",children:[g.jsx("h3",{children:"Jati Prime."}),g.jsx("p",{children:"Pusat furniture jepara berkualitas dengan harga bersahabat dan terpercaya."}),g.jsx("br",{}),g.jsx("h4",{children:"Metode Pembayaran"}),g.jsxs("p",{style:{fontSize:"0.9rem",marginBottom:"0.5rem"},children:["Bank BCA: 2470-0687-056",g.jsx("br",{}),"Bagus sajiwo"]}),g.jsxs("p",{style:{fontSize:"0.9rem"},children:[g.jsx("br",{}),"Bagus"]})]}),g.jsxs("div",{className:"footer-col",children:[g.jsx("h4",{children:"Produk"}),g.jsxs("ul",{children:[g.jsx("li",{children:g.jsx("a",{href:"#katalog",children:"Ruang Tamu"})}),g.jsx("li",{children:g.jsx("a",{href:"#katalog",children:"Kamar Tidur"})}),g.jsx("li",{children:g.jsx("a",{href:"#katalog",children:"Ruang Makan"})}),g.jsx("li",{children:g.jsx("a",{href:"#katalog",children:"Kantor"})})]})]}),g.jsxs("div",{className:"footer-col",children:[g.jsx("h4",{children:"Kontak Kami"}),g.jsxs("ul",{children:[g.jsx("li",{children:g.jsx("a",{href:"https://wa.me/62895422532976",children:"+62 8954-2253-2976 (WhatsApp)"})}),g.jsx("li",{children:g.jsx("a",{href:"https://www.instagram.com/jepara_mebel_indonesia",children:"Instagram"})}),g.jsx("li",{children:g.jsx("a",{href:"https://www.facebook.com/mebel.jepara.12720",children:"Facebook"})}),g.jsx("li",{children:g.jsx("a",{href:"http://tiktok.com/@jeparamebel",children:"TikTok"})})]})]}),g.jsxs("div",{className:"footer-col",children:[g.jsx("h4",{children:"Newsletter"}),g.jsx("p",{children:"Dapatkan info produk terbaru dan promo menarik."}),g.jsxs("div",{className:"newsletter-form",children:[g.jsx("input",{type:"email",placeholder:"Email Anda"}),g.jsx("button",{className:"btn btn-primary",children:"Daftar"})]})]})]}),g.jsx("div",{className:"footer-bottom",children:g.jsx("p",{children:"© 2025 Jati Prime. All rights reserved."})})]}),g.jsx("style",{children:`
        .footer {
          background-color: #f5f5f5;
          padding: 5rem 0 2rem;
          margin-top: auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-col h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .footer-col h4 {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          font-family: var(--font-body);
        }

        .footer-col ul {
          list-style: none;
        }

        .footer-col ul li {
          margin-bottom: 0.8rem;
        }

        .footer-col a {
          text-decoration: none;
          color: var(--color-text-light);
          transition: color 0.3s ease;
        }

        .footer-col a:hover {
          color: var(--color-primary);
        }

        .newsletter-form {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .newsletter-form input {
          padding: 0.8rem;
          border: 1px solid #ddd;
          flex: 1;
          font-family: var(--font-body);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid #e5e5e5;
          color: var(--color-text-light);
          font-size: 0.9rem;
        }
      `})]}),kL=()=>{const[t,e]=N.useState(!1),n=()=>{Oi.openWhatsApp(Oi.defaultMessage)};return g.jsxs("button",{className:"whatsapp-floating-btn",onClick:n,onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),"aria-label":"Chat via WhatsApp",children:[g.jsx(fp,{}),t&&g.jsx("span",{className:"tooltip",children:"Chat dengan Kami!"}),g.jsx("style",{children:`
        .whatsapp-floating-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #25D366;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
          cursor: pointer;
          border: none;
          z-index: 999;
          transition: all 0.3s ease;
          animation: pulse 2s infinite;
        }

        .whatsapp-floating-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
        }

        .whatsapp-floating-btn:active {
          transform: scale(0.95);
        }

        .tooltip {
          position: absolute;
          right: 70px;
          background: var(--color-primary);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          white-space: nowrap;
          font-size: 0.9rem;
          font-weight: 600;
          box-shadow: var(--shadow-md);
          animation: slideIn 0.3s ease;
        }

        .tooltip::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 6px solid var(--color-primary);
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
          }
          50% {
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.6);
          }
          100% {
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .whatsapp-floating-btn {
            width: 55px;
            height: 55px;
            bottom: 1.5rem;
            right: 1.5rem;
            font-size: 1.75rem;
          }

          .tooltip {
            display: none;
          }
        }
      `})]})},RL=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},bL=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},aI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,y=c&63;l||(y=64,o||(p=64)),r.push(n[h],n[d],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(oI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bL(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new NL;const p=s<<2|a>>4;if(r.push(p),c!==64){const y=a<<4&240|c>>2;if(r.push(y),d!==64){const x=c<<6&192|d;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class NL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DL=function(t){const e=oI(t);return aI.encodeByteArray(e,!0)},vc=function(t){return DL(t).replace(/\./g,"")},lI=function(t){try{return aI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LL=()=>VL().__FIREBASE_DEFAULTS__,OL=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ML=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lI(t[1]);return e&&JSON.parse(e)},ch=()=>{try{return RL()||LL()||OL()||ML()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},uI=t=>{var e,n;return(n=(e=ch())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},jL=t=>{const e=uI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},cI=()=>{var t;return(t=ch())==null?void 0:t.config},hI=t=>{var e;return(e=ch())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dI(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UL(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[vc(JSON.stringify(n)),vc(JSON.stringify(o)),a].join(".")}const fa={};function BL(){const t={prod:[],emulator:[]};for(const e of Object.keys(fa))fa[e]?t.emulator.push(e):t.prod.push(e);return t}function zL(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let S_=!1;function fI(t,e){if(typeof window>"u"||typeof document>"u"||!ro(window.location.host)||fa[t]===e||fa[t]||S_)return;fa[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",s=BL().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function l(p,y){p.setAttribute("width","24"),p.setAttribute("id",y),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function c(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{S_=!0,o()},p}function h(p,y){p.setAttribute("id",y),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function d(){const p=zL(r),y=n("text"),x=document.getElementById(y)||document.createElement("span"),S=n("learnmore"),C=document.getElementById(S)||document.createElement("a"),w=n("preprendIcon"),v=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const _=p.element;a(_),h(C,S);const b=c();l(v,w),_.append(v,x,C,b),document.body.appendChild(_)}s?(x.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $L(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function WL(){var e;const t=(e=ch())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HL(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qL(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function GL(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KL(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function QL(){return!WL()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function YL(){try{return typeof indexedDB=="object"}catch{return!1}}function XL(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JL="FirebaseError";class sr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=JL,Object.setPrototypeOf(this,sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dl.prototype.create)}}class dl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ZL(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new sr(i,a,r)}}function ZL(t,e){return t.replace(eO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const eO=/\{\$([^}]+)}/g;function tO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(P_(s)&&P_(o)){if(!Mi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function P_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ko(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Qo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function nO(t,e){const n=new rO(t,e);return n.subscribe.bind(n)}class rO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ud),i.error===void 0&&(i.error=Ud),i.complete===void 0&&(i.complete=Ud);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ud(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){return t&&t._delegate?t._delegate:t}class ji{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new FL;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aO(e))try{this.getOrInitializeService({instanceIdentifier:wi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wi){return this.instances.has(e)}getOptions(e=wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wi){return this.component?this.component.multipleInstances?e:wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oO(t){return t===wi?void 0:t}function aO(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const uO={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},cO=ie.INFO,hO={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},dO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=hO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hg{constructor(e){this.name=e,this._logLevel=cO,this._logHandler=dO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const fO=(t,e)=>e.some(n=>t instanceof n);let A_,C_;function pO(){return A_||(A_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mO(){return C_||(C_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pI=new WeakMap,pp=new WeakMap,mI=new WeakMap,Bd=new WeakMap,dg=new WeakMap;function gO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ur(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pI.set(n,t)}).catch(()=>{}),dg.set(e,t),e}function yO(t){if(pp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});pp.set(t,e)}let mp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vO(t){mp=t(mp)}function _O(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zd(this),e,...n);return mI.set(r,e.sort?e.sort():[e]),Ur(r)}:mO().includes(t)?function(...e){return t.apply(zd(this),e),Ur(pI.get(this))}:function(...e){return Ur(t.apply(zd(this),e))}}function wO(t){return typeof t=="function"?_O(t):(t instanceof IDBTransaction&&yO(t),fO(t,pO())?new Proxy(t,mp):t)}function Ur(t){if(t instanceof IDBRequest)return gO(t);if(Bd.has(t))return Bd.get(t);const e=wO(t);return e!==t&&(Bd.set(t,e),dg.set(e,t)),e}const zd=t=>dg.get(t);function EO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ur(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ur(o.result),l.oldVersion,l.newVersion,Ur(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const TO=["get","getKey","getAll","getAllKeys","count"],xO=["put","add","delete","clear"],$d=new Map;function k_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($d.get(e))return $d.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=xO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||TO.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return $d.set(e,s),s}vO(t=>({...t,get:(e,n,r)=>k_(e,n)||t.get(e,n,r),has:(e,n)=>!!k_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(SO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function SO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gp="@firebase/app",R_="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new hg("@firebase/app"),PO="@firebase/app-compat",AO="@firebase/analytics-compat",CO="@firebase/analytics",kO="@firebase/app-check-compat",RO="@firebase/app-check",bO="@firebase/auth",NO="@firebase/auth-compat",DO="@firebase/database",VO="@firebase/data-connect",LO="@firebase/database-compat",OO="@firebase/functions",MO="@firebase/functions-compat",jO="@firebase/installations",FO="@firebase/installations-compat",UO="@firebase/messaging",BO="@firebase/messaging-compat",zO="@firebase/performance",$O="@firebase/performance-compat",WO="@firebase/remote-config",HO="@firebase/remote-config-compat",qO="@firebase/storage",GO="@firebase/storage-compat",KO="@firebase/firestore",QO="@firebase/ai",YO="@firebase/firestore-compat",XO="firebase",JO="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="[DEFAULT]",ZO={[gp]:"fire-core",[PO]:"fire-core-compat",[CO]:"fire-analytics",[AO]:"fire-analytics-compat",[RO]:"fire-app-check",[kO]:"fire-app-check-compat",[bO]:"fire-auth",[NO]:"fire-auth-compat",[DO]:"fire-rtdb",[VO]:"fire-data-connect",[LO]:"fire-rtdb-compat",[OO]:"fire-fn",[MO]:"fire-fn-compat",[jO]:"fire-iid",[FO]:"fire-iid-compat",[UO]:"fire-fcm",[BO]:"fire-fcm-compat",[zO]:"fire-perf",[$O]:"fire-perf-compat",[WO]:"fire-rc",[HO]:"fire-rc-compat",[qO]:"fire-gcs",[GO]:"fire-gcs-compat",[KO]:"fire-fst",[YO]:"fire-fst-compat",[QO]:"fire-vertex","fire-js":"fire-js",[XO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=new Map,eM=new Map,vp=new Map;function b_(t,e){try{t.container.addComponent(e)}catch(n){Jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zs(t){const e=t.name;if(vp.has(e))return Jn.debug(`There were multiple attempts to register component ${e}.`),!1;vp.set(e,t);for(const n of _c.values())b_(n,t);for(const n of eM.values())b_(n,t);return!0}function fg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function sn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tM={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Br=new dl("app","Firebase",tM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ji("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Br.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=JO;function gI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:yp,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Br.create("bad-app-name",{appName:String(i)});if(n||(n=cI()),!n)throw Br.create("no-options");const s=_c.get(i);if(s){if(Mi(n,s.options)&&Mi(r,s.config))return s;throw Br.create("duplicate-app",{appName:i})}const o=new lO(i);for(const l of vp.values())o.addComponent(l);const a=new nM(n,r,o);return _c.set(i,a),a}function yI(t=yp){const e=_c.get(t);if(!e&&t===yp&&cI())return gI();if(!e)throw Br.create("no-app",{appName:t});return e}function zr(t,e,n){let r=ZO[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jn.warn(o.join(" "));return}zs(new ji(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rM="firebase-heartbeat-database",iM=1,Ba="firebase-heartbeat-store";let Wd=null;function vI(){return Wd||(Wd=EO(rM,iM,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ba)}catch(n){console.warn(n)}}}}).catch(t=>{throw Br.create("idb-open",{originalErrorMessage:t.message})})),Wd}async function sM(t){try{const n=(await vI()).transaction(Ba),r=await n.objectStore(Ba).get(_I(t));return await n.done,r}catch(e){if(e instanceof sr)Jn.warn(e.message);else{const n=Br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jn.warn(n.message)}}}async function N_(t,e){try{const r=(await vI()).transaction(Ba,"readwrite");await r.objectStore(Ba).put(e,_I(t)),await r.done}catch(n){if(n instanceof sr)Jn.warn(n.message);else{const r=Br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jn.warn(r.message)}}}function _I(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oM=1024,aM=30;class lM{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cM(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=D_();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>aM){const o=hM(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Jn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=D_(),{heartbeatsToSend:r,unsentEntries:i}=uM(this._heartbeatsCache.heartbeats),s=vc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Jn.warn(n),""}}}function D_(){return new Date().toISOString().substring(0,10)}function uM(t,e=oM){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),V_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),V_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YL()?XL().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sM(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return N_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return N_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function V_(t){return vc(JSON.stringify({version:2,heartbeats:t})).length}function hM(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dM(t){zs(new ji("platform-logger",e=>new IO(e),"PRIVATE")),zs(new ji("heartbeat",e=>new lM(e),"PRIVATE")),zr(gp,R_,t),zr(gp,R_,"esm2020"),zr("fire-js","")}dM("");function wI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fM=wI,EI=new dl("auth","Firebase",wI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new hg("@firebase/auth");function pM(t,...e){wc.logLevel<=ie.WARN&&wc.warn(`Auth (${io}): ${t}`,...e)}function Cu(t,...e){wc.logLevel<=ie.ERROR&&wc.error(`Auth (${io}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,...e){throw pg(t,...e)}function Sn(t,...e){return pg(t,...e)}function TI(t,e,n){const r={...fM(),[e]:n};return new dl("auth","Firebase",r).create(e,{appName:t.name})}function $r(t){return TI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return EI.create(t,...e)}function Y(t,e,...n){if(!t)throw pg(e,...n)}function jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cu(e),new Error(e)}function Zn(t,e){t||jn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function mM(){return L_()==="http:"||L_()==="https:"}function L_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mM()||qL()||"connection"in navigator)?navigator.onLine:!0}function yM(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zn(n>e,"Short delay should be less than long delay!"),this.isMobile=$L()||GL()}get(){return gM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(t,e){Zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wM=new pl(3e4,6e4);function qi(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function oi(t,e,n,r,i={}){return II(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=fl({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return HL()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ro(t.emulatorConfig.host)&&(c.credentials="include"),xI.fetch()(await SI(t,t.config.apiHost,n,a),c)})}async function II(t,e,n){t._canInitEmulator=!1;const r={...vM,...e};try{const i=new TM(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw su(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw su(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw su(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw su(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw TI(t,h,c);hn(t,h)}}catch(i){if(i instanceof sr)throw i;hn(t,"network-request-failed",{message:String(i)})}}async function hh(t,e,n,r,i={}){const s=await oi(t,e,n,r,i);return"mfaPendingCredential"in s&&hn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function SI(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?mg(t.config,i):`${t.config.apiScheme}://${i}`;return _M.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function EM(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TM{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Sn(this.auth,"network-request-failed")),wM.get())})}}function su(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Sn(t,e,r);return i.customData._tokenResponse=n,i}function O_(t){return t!==void 0&&t.enterprise!==void 0}class xM{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return EM(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function IM(t,e){return oi(t,"GET","/v2/recaptchaConfig",qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SM(t,e){return oi(t,"POST","/v1/accounts:delete",e)}async function Ec(t,e){return oi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PM(t,e=!1){const n=Je(t),r=await n.getIdToken(e),i=gg(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:pa(Hd(i.auth_time)),issuedAtTime:pa(Hd(i.iat)),expirationTime:pa(Hd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Hd(t){return Number(t)*1e3}function gg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Cu("JWT malformed, contained fewer than 3 sections"),null;try{const i=lI(n);return i?JSON.parse(i):(Cu("Failed to decode base64 JWT payload"),null)}catch(i){return Cu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function M_(t){const e=gg(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function za(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sr&&AM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function AM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pa(this.lastLoginAt),this.creationTime=pa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tc(t){var d;const e=t.auth,n=await t.getIdToken(),r=await za(t,Ec(e,{idToken:n}));Y(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(d=i.providerUserInfo)!=null&&d.length?PI(i.providerUserInfo):[],o=RM(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new wp(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function kM(t){const e=Je(t);await Tc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RM(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function PI(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bM(t,e){const n=await II(t,{},async()=>{const r=fl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await SI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&ro(t.emulatorConfig.host)&&(l.credentials="include"),xI.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function NM(t,e){return oi(t,"POST","/v2/accounts:revokeToken",qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):M_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=M_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await bM(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Cs;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cs,this.toJSON())}_performRefresh(){return jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class on{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new CM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await za(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return PM(this,e)}reload(){return kM(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new on({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Tc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject($r(this.auth));const e=await this.getIdToken();return await za(this,SM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:d,emailVerified:p,isAnonymous:y,providerData:x,stsTokenManager:S}=n;Y(d&&S,e,"internal-error");const C=Cs.fromJSON(this.name,S);Y(typeof d=="string",e,"internal-error"),fr(r,e.name),fr(i,e.name),Y(typeof p=="boolean",e,"internal-error"),Y(typeof y=="boolean",e,"internal-error"),fr(s,e.name),fr(o,e.name),fr(a,e.name),fr(l,e.name),fr(c,e.name),fr(h,e.name);const w=new on({uid:d,auth:e,email:i,emailVerified:p,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:C,createdAt:c,lastLoginAt:h});return x&&Array.isArray(x)&&(w.providerData=x.map(v=>({...v}))),l&&(w._redirectEventId=l),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Cs;i.updateFromServerResponse(n);const s=new on({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Tc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?PI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Cs;a.updateFromIdToken(r);const l=new on({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new wp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=new Map;function Fn(t){Zn(t instanceof Function,"Expected a class definition");let e=j_.get(t);return e?(Zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,j_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}AI.type="NONE";const F_=AI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t,e,n){return`firebase:${t}:${e}:${n}`}class ks{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ku(this.userKey,i.apiKey,s),this.fullPersistenceKey=ku("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ec(this.auth,{idToken:e}).catch(()=>{});return n?on._fromGetAccountInfoResponse(this.auth,n,e):null}return on._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ks(Fn(F_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Fn(F_);const o=ku(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){let d;if(typeof h=="string"){const p=await Ec(e,{idToken:h}).catch(()=>{});if(!p)break;d=await on._fromGetAccountInfoResponse(e,p,h)}else d=on._fromJSON(e,h);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ks(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ks(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(CI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(DI(e))return"Blackberry";if(VI(e))return"Webos";if(kI(e))return"Safari";if((e.includes("chrome/")||RI(e))&&!e.includes("edge/"))return"Chrome";if(NI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function CI(t=mt()){return/firefox\//i.test(t)}function kI(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function RI(t=mt()){return/crios\//i.test(t)}function bI(t=mt()){return/iemobile/i.test(t)}function NI(t=mt()){return/android/i.test(t)}function DI(t=mt()){return/blackberry/i.test(t)}function VI(t=mt()){return/webos/i.test(t)}function yg(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DM(t=mt()){var e;return yg(t)&&!!((e=window.navigator)!=null&&e.standalone)}function VM(){return KL()&&document.documentMode===10}function LI(t=mt()){return yg(t)||NI(t)||VI(t)||DI(t)||/windows phone/i.test(t)||bI(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(t,e=[]){let n;switch(t){case"Browser":n=U_(mt());break;case"Worker":n=`${U_(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${io}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OM(t,e={}){return oi(t,"GET","/v2/passwordPolicy",qi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM=6;class jM{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??MM,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new B_(this),this.idTokenSubscription=new B_(this),this.beforeStateQueue=new LM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=EI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ks.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ec(this,{idToken:e}),r=await on._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject($r(this));const n=e?Je(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject($r(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject($r(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OM(this),n=new jM(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new dl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await NM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await ks.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=OI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&pM(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function so(t){return Je(t)}class B_{constructor(e){this.auth=e,this.observer=null,this.addObserver=nO(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function UM(t){dh=t}function MI(t){return dh.loadJS(t)}function BM(){return dh.recaptchaEnterpriseScript}function zM(){return dh.gapiScript}function $M(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class WM{constructor(){this.enterprise=new HM}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class HM{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const qM="recaptcha-enterprise",jI="NO_RECAPTCHA";class GM{constructor(e){this.type=qM,this.auth=so(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{IM(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new xM(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;O_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(jI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new WM().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&O_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=BM();l.length!==0&&(l+=a),MI(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function zo(t,e,n,r=!1,i=!1){const s=new GM(t);let o;if(i)o=jI;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function z_(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await zo(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await zo(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await zo(t,e,n);return r(t,a).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())==null?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const h=await zo(t,e,n,!1,!0);return r(t,h)}return Promise.reject(l)})}else{const a=await zo(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(i+" provider is not supported.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KM(t,e){const n=fg(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Mi(s,e??{}))return i;hn(i,"already-initialized")}return n.initialize({options:e})}function QM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YM(t,e,n){const r=so(t);Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=FI(e),{host:o,port:a}=XM(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Y(Mi(c,r.config.emulator)&&Mi(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,ro(o)?(dI(`${s}//${o}${l}`),fI("Auth",!0)):i||JM()}function FI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function XM(t){const e=FI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:$_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:$_(o)}}}function $_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function JM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jn("not implemented")}_getIdTokenResponse(e){return jn("not implemented")}_linkToIdToken(e,n){return jn("not implemented")}_getReauthenticationResolver(e){return jn("not implemented")}}async function ZM(t,e){return oi(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e4(t,e){return hh(t,"POST","/v1/accounts:signInWithPassword",qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t4(t,e){return hh(t,"POST","/v1/accounts:signInWithEmailLink",qi(t,e))}async function n4(t,e){return hh(t,"POST","/v1/accounts:signInWithEmailLink",qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a extends vg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new $a(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $a(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return z_(e,n,"signInWithPassword",e4,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return t4(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return z_(e,r,"signUpPassword",ZM,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return n4(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rs(t,e){return hh(t,"POST","/v1/accounts:signInWithIdp",qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r4="http://localhost";class Fi extends vg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Fi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Rs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rs(e,n)}buildRequest(){const e={requestUri:r4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i4(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function s4(t){const e=Ko(Qo(t)).link,n=e?Ko(Qo(e)).deep_link_id:null,r=Ko(Qo(t)).deep_link_id;return(r?Ko(Qo(r)).link:null)||r||n||e||t}class _g{constructor(e){const n=Ko(Qo(e)),r=n.apiKey??null,i=n.oobCode??null,s=i4(n.mode??null);Y(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=s4(e);try{return new _g(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this.providerId=oo.PROVIDER_ID}static credential(e,n){return $a._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_g.parseLink(n);return Y(r,"argument-error"),$a._fromEmailAndCode(e,r.code,r.tenantId)}}oo.PROVIDER_ID="password";oo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";oo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends UI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends ml{constructor(){super("facebook.com")}static credential(e){return Fi._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.FACEBOOK_SIGN_IN_METHOD="facebook.com";Er.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends ml{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fi._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tr.credential(n,r)}catch{return null}}}Tr.GOOGLE_SIGN_IN_METHOD="google.com";Tr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends ml{constructor(){super("github.com")}static credential(e){return Fi._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.GITHUB_SIGN_IN_METHOD="github.com";xr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends ml{constructor(){super("twitter.com")}static credential(e,n){return Fi._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await on._fromIdTokenResponse(e,r,i),o=W_(r);return new $s({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=W_(r);return new $s({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function W_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc extends sr{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new xc(e,n,r,i)}}function BI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xc._fromErrorAndOperation(t,s,e,r):s})}async function o4(t,e,n=!1){const r=await za(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $s._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a4(t,e,n=!1){const{auth:r}=t;if(sn(r.app))return Promise.reject($r(r));const i="reauthenticate";try{const s=await za(t,BI(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=gg(s.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),$s._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&hn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zI(t,e,n=!1){if(sn(t.app))return Promise.reject($r(t));const r="signIn",i=await BI(t,r,e),s=await $s._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function l4(t,e){return zI(so(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u4(t){const e=so(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function c4(t,e,n){return sn(t.app)?Promise.reject($r(t)):l4(Je(t),oo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&u4(t),r})}function h4(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function d4(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function f4(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function p4(t){return Je(t).signOut()}const Ic="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ic,"1"),this.storage.removeItem(Ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m4=1e3,g4=10;class WI extends $I{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=LI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);VM()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,g4):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},m4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}WI.type="LOCAL";const y4=WI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI extends $I{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}HI.type="SESSION";const qI=HI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v4(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await v4(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=wg("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(){return window}function w4(t){Pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(){return typeof Pn().WorkerGlobalScope<"u"&&typeof Pn().importScripts=="function"}async function E4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function T4(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function x4(){return GI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="firebaseLocalStorageDb",I4=1,Sc="firebaseLocalStorage",QI="fbase_key";class gl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ph(t,e){return t.transaction([Sc],e?"readwrite":"readonly").objectStore(Sc)}function S4(){const t=indexedDB.deleteDatabase(KI);return new gl(t).toPromise()}function Ep(){const t=indexedDB.open(KI,I4);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sc,{keyPath:QI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sc)?e(r):(r.close(),await S4(),e(await Ep()))})})}async function H_(t,e,n){const r=ph(t,!0).put({[QI]:e,value:n});return new gl(r).toPromise()}async function P4(t,e){const n=ph(t,!1).get(e),r=await new gl(n).toPromise();return r===void 0?null:r.value}function q_(t,e){const n=ph(t,!0).delete(e);return new gl(n).toPromise()}const A4=800,C4=3;class YI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ep(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>C4)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return GI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fh._getInstance(x4()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await E4(),!this.activeServiceWorker)return;this.sender=new _4(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||T4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ep();return await H_(e,Ic,"1"),await q_(e,Ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>H_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>P4(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>q_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ph(i,!1).getAll();return new gl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),A4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}YI.type="LOCAL";const k4=YI;new pl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R4(t,e){return e?Fn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg extends vg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function b4(t){return zI(t.auth,new Eg(t),t.bypassAuthState)}function N4(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),a4(n,new Eg(t),t.bypassAuthState)}async function D4(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),o4(n,new Eg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return b4;case"linkViaPopup":case"linkViaRedirect":return D4;case"reauthViaPopup":case"reauthViaRedirect":return N4;default:hn(this.auth,"internal-error")}}resolve(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V4=new pl(2e3,1e4);class Es extends XI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Es.currentPopupAction&&Es.currentPopupAction.cancel(),Es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Zn(this.filter.length===1,"Popup operations only handle one event");const e=wg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,V4.get())};e()}}Es.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L4="pendingRedirect",Ru=new Map;class O4 extends XI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ru.get(this.auth._key());if(!e){try{const r=await M4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ru.set(this.auth._key(),e)}return this.bypassAuthState||Ru.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function M4(t,e){const n=U4(e),r=F4(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function j4(t,e){Ru.set(t._key(),e)}function F4(t){return Fn(t._redirectPersistence)}function U4(t){return ku(L4,t.config.apiKey,t.name)}async function B4(t,e,n=!1){if(sn(t.app))return Promise.reject($r(t));const r=so(t),i=R4(r,e),o=await new O4(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z4=10*60*1e3;class $4{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!W4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!JI(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=z4&&this.cachedEventUids.clear(),this.cachedEventUids.has(G_(e))}saveEventToCache(e){this.cachedEventUids.add(G_(e)),this.lastProcessedEventTime=Date.now()}}function G_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function JI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function W4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return JI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H4(t,e={}){return oi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,G4=/^https?/;async function K4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await H4(t);for(const n of e)try{if(Q4(n))return}catch{}hn(t,"unauthorized-domain")}function Q4(t){const e=_p(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!G4.test(n))return!1;if(q4.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y4=new pl(3e4,6e4);function K_(){const t=Pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function X4(t){return new Promise((e,n)=>{var i,s,o;function r(){K_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{K_(),n(Sn(t,"network-request-failed"))},timeout:Y4.get()})}if((s=(i=Pn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Pn().gapi)!=null&&o.load)r();else{const a=$M("iframefcb");return Pn()[a]=()=>{gapi.load?r():n(Sn(t,"network-request-failed"))},MI(`${zM()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw bu=null,e})}let bu=null;function J4(t){return bu=bu||X4(t),bu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z4=new pl(5e3,15e3),e5="__/auth/iframe",t5="emulator/auth/iframe",n5={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},r5=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function i5(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mg(e,t5):`https://${t.config.authDomain}/${e5}`,r={apiKey:e.apiKey,appName:t.name,v:io},i=r5.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${fl(r).slice(1)}`}async function s5(t){const e=await J4(t),n=Pn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:i5(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:n5,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Sn(t,"network-request-failed"),a=Pn().setTimeout(()=>{s(o)},Z4.get());function l(){Pn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o5={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},a5=500,l5=600,u5="_blank",c5="http://localhost";class Q_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function h5(t,e,n,r=a5,i=l5){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...o5,width:r.toString(),height:i.toString(),top:s,left:o},c=mt().toLowerCase();n&&(a=RI(c)?u5:n),CI(c)&&(e=e||c5,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[y,x])=>`${p}${y}=${x},`,"");if(DM(c)&&a!=="_self")return d5(e||"",a),new Q_(null);const d=window.open(e||"",a,h);Y(d,t,"popup-blocked");try{d.focus()}catch{}return new Q_(d)}function d5(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f5="__/auth/handler",p5="emulator/auth/handler",m5=encodeURIComponent("fac");async function Y_(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:io,eventId:i};if(e instanceof UI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tO(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries(s||{}))o[h]=d}if(e instanceof ml){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${m5}=${encodeURIComponent(l)}`:"";return`${g5(t)}?${fl(a).slice(1)}${c}`}function g5({config:t}){return t.emulator?mg(t,p5):`https://${t.authDomain}/${f5}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="webStorageSupport";class y5{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qI,this._completeRedirectFn=B4,this._overrideRedirectResult=j4}async _openPopup(e,n,r,i){var o;Zn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Y_(e,n,r,_p(),i);return h5(e,s,wg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Y_(e,n,r,_p(),i);return w4(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Zn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await s5(e),r=new $4(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qd,{type:qd},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[qd];s!==void 0&&n(!!s),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=K4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return LI()||kI()||yg()}}const v5=y5;var X_="@firebase/auth",J_="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _5{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w5(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function E5(t){zs(new ji("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:OI(t)},c=new FM(r,i,s,l);return QM(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zs(new ji("auth-internal",e=>{const n=so(e.getProvider("auth").getImmediate());return(r=>new _5(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zr(X_,J_,w5(t)),zr(X_,J_,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T5=5*60,x5=hI("authIdTokenMaxAge")||T5;let Z_=null;const I5=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>x5)return;const i=n==null?void 0:n.token;Z_!==i&&(Z_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function S5(t=yI()){const e=fg(t,"auth");if(e.isInitialized())return e.getImmediate();const n=KM(t,{popupRedirectResolver:v5,persistence:[k4,y4,qI]}),r=hI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=I5(s.toString());d4(n,o,()=>o(n.currentUser)),h4(n,a=>o(a))}}const i=uI("auth");return i&&YM(n,`http://${i}`),n}function P5(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}UM({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",P5().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});E5("Browser");var A5="firebase",C5="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zr(A5,C5,"app");var e1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wr,ZI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,E){function P(){}P.prototype=E.prototype,I.F=E.prototype,I.prototype=new P,I.prototype.constructor=I,I.D=function(A,R,D){for(var k=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)k[ae-2]=arguments[ae];return E.prototype[R].apply(A,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,E,P){P||(P=0);const A=Array(16);if(typeof E=="string")for(var R=0;R<16;++R)A[R]=E.charCodeAt(P++)|E.charCodeAt(P++)<<8|E.charCodeAt(P++)<<16|E.charCodeAt(P++)<<24;else for(R=0;R<16;++R)A[R]=E[P++]|E[P++]<<8|E[P++]<<16|E[P++]<<24;E=I.g[0],P=I.g[1],R=I.g[2];let D=I.g[3],k;k=E+(D^P&(R^D))+A[0]+3614090360&4294967295,E=P+(k<<7&4294967295|k>>>25),k=D+(R^E&(P^R))+A[1]+3905402710&4294967295,D=E+(k<<12&4294967295|k>>>20),k=R+(P^D&(E^P))+A[2]+606105819&4294967295,R=D+(k<<17&4294967295|k>>>15),k=P+(E^R&(D^E))+A[3]+3250441966&4294967295,P=R+(k<<22&4294967295|k>>>10),k=E+(D^P&(R^D))+A[4]+4118548399&4294967295,E=P+(k<<7&4294967295|k>>>25),k=D+(R^E&(P^R))+A[5]+1200080426&4294967295,D=E+(k<<12&4294967295|k>>>20),k=R+(P^D&(E^P))+A[6]+2821735955&4294967295,R=D+(k<<17&4294967295|k>>>15),k=P+(E^R&(D^E))+A[7]+4249261313&4294967295,P=R+(k<<22&4294967295|k>>>10),k=E+(D^P&(R^D))+A[8]+1770035416&4294967295,E=P+(k<<7&4294967295|k>>>25),k=D+(R^E&(P^R))+A[9]+2336552879&4294967295,D=E+(k<<12&4294967295|k>>>20),k=R+(P^D&(E^P))+A[10]+4294925233&4294967295,R=D+(k<<17&4294967295|k>>>15),k=P+(E^R&(D^E))+A[11]+2304563134&4294967295,P=R+(k<<22&4294967295|k>>>10),k=E+(D^P&(R^D))+A[12]+1804603682&4294967295,E=P+(k<<7&4294967295|k>>>25),k=D+(R^E&(P^R))+A[13]+4254626195&4294967295,D=E+(k<<12&4294967295|k>>>20),k=R+(P^D&(E^P))+A[14]+2792965006&4294967295,R=D+(k<<17&4294967295|k>>>15),k=P+(E^R&(D^E))+A[15]+1236535329&4294967295,P=R+(k<<22&4294967295|k>>>10),k=E+(R^D&(P^R))+A[1]+4129170786&4294967295,E=P+(k<<5&4294967295|k>>>27),k=D+(P^R&(E^P))+A[6]+3225465664&4294967295,D=E+(k<<9&4294967295|k>>>23),k=R+(E^P&(D^E))+A[11]+643717713&4294967295,R=D+(k<<14&4294967295|k>>>18),k=P+(D^E&(R^D))+A[0]+3921069994&4294967295,P=R+(k<<20&4294967295|k>>>12),k=E+(R^D&(P^R))+A[5]+3593408605&4294967295,E=P+(k<<5&4294967295|k>>>27),k=D+(P^R&(E^P))+A[10]+38016083&4294967295,D=E+(k<<9&4294967295|k>>>23),k=R+(E^P&(D^E))+A[15]+3634488961&4294967295,R=D+(k<<14&4294967295|k>>>18),k=P+(D^E&(R^D))+A[4]+3889429448&4294967295,P=R+(k<<20&4294967295|k>>>12),k=E+(R^D&(P^R))+A[9]+568446438&4294967295,E=P+(k<<5&4294967295|k>>>27),k=D+(P^R&(E^P))+A[14]+3275163606&4294967295,D=E+(k<<9&4294967295|k>>>23),k=R+(E^P&(D^E))+A[3]+4107603335&4294967295,R=D+(k<<14&4294967295|k>>>18),k=P+(D^E&(R^D))+A[8]+1163531501&4294967295,P=R+(k<<20&4294967295|k>>>12),k=E+(R^D&(P^R))+A[13]+2850285829&4294967295,E=P+(k<<5&4294967295|k>>>27),k=D+(P^R&(E^P))+A[2]+4243563512&4294967295,D=E+(k<<9&4294967295|k>>>23),k=R+(E^P&(D^E))+A[7]+1735328473&4294967295,R=D+(k<<14&4294967295|k>>>18),k=P+(D^E&(R^D))+A[12]+2368359562&4294967295,P=R+(k<<20&4294967295|k>>>12),k=E+(P^R^D)+A[5]+4294588738&4294967295,E=P+(k<<4&4294967295|k>>>28),k=D+(E^P^R)+A[8]+2272392833&4294967295,D=E+(k<<11&4294967295|k>>>21),k=R+(D^E^P)+A[11]+1839030562&4294967295,R=D+(k<<16&4294967295|k>>>16),k=P+(R^D^E)+A[14]+4259657740&4294967295,P=R+(k<<23&4294967295|k>>>9),k=E+(P^R^D)+A[1]+2763975236&4294967295,E=P+(k<<4&4294967295|k>>>28),k=D+(E^P^R)+A[4]+1272893353&4294967295,D=E+(k<<11&4294967295|k>>>21),k=R+(D^E^P)+A[7]+4139469664&4294967295,R=D+(k<<16&4294967295|k>>>16),k=P+(R^D^E)+A[10]+3200236656&4294967295,P=R+(k<<23&4294967295|k>>>9),k=E+(P^R^D)+A[13]+681279174&4294967295,E=P+(k<<4&4294967295|k>>>28),k=D+(E^P^R)+A[0]+3936430074&4294967295,D=E+(k<<11&4294967295|k>>>21),k=R+(D^E^P)+A[3]+3572445317&4294967295,R=D+(k<<16&4294967295|k>>>16),k=P+(R^D^E)+A[6]+76029189&4294967295,P=R+(k<<23&4294967295|k>>>9),k=E+(P^R^D)+A[9]+3654602809&4294967295,E=P+(k<<4&4294967295|k>>>28),k=D+(E^P^R)+A[12]+3873151461&4294967295,D=E+(k<<11&4294967295|k>>>21),k=R+(D^E^P)+A[15]+530742520&4294967295,R=D+(k<<16&4294967295|k>>>16),k=P+(R^D^E)+A[2]+3299628645&4294967295,P=R+(k<<23&4294967295|k>>>9),k=E+(R^(P|~D))+A[0]+4096336452&4294967295,E=P+(k<<6&4294967295|k>>>26),k=D+(P^(E|~R))+A[7]+1126891415&4294967295,D=E+(k<<10&4294967295|k>>>22),k=R+(E^(D|~P))+A[14]+2878612391&4294967295,R=D+(k<<15&4294967295|k>>>17),k=P+(D^(R|~E))+A[5]+4237533241&4294967295,P=R+(k<<21&4294967295|k>>>11),k=E+(R^(P|~D))+A[12]+1700485571&4294967295,E=P+(k<<6&4294967295|k>>>26),k=D+(P^(E|~R))+A[3]+2399980690&4294967295,D=E+(k<<10&4294967295|k>>>22),k=R+(E^(D|~P))+A[10]+4293915773&4294967295,R=D+(k<<15&4294967295|k>>>17),k=P+(D^(R|~E))+A[1]+2240044497&4294967295,P=R+(k<<21&4294967295|k>>>11),k=E+(R^(P|~D))+A[8]+1873313359&4294967295,E=P+(k<<6&4294967295|k>>>26),k=D+(P^(E|~R))+A[15]+4264355552&4294967295,D=E+(k<<10&4294967295|k>>>22),k=R+(E^(D|~P))+A[6]+2734768916&4294967295,R=D+(k<<15&4294967295|k>>>17),k=P+(D^(R|~E))+A[13]+1309151649&4294967295,P=R+(k<<21&4294967295|k>>>11),k=E+(R^(P|~D))+A[4]+4149444226&4294967295,E=P+(k<<6&4294967295|k>>>26),k=D+(P^(E|~R))+A[11]+3174756917&4294967295,D=E+(k<<10&4294967295|k>>>22),k=R+(E^(D|~P))+A[2]+718787259&4294967295,R=D+(k<<15&4294967295|k>>>17),k=P+(D^(R|~E))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+E&4294967295,I.g[1]=I.g[1]+(R+(k<<21&4294967295|k>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+D&4294967295}r.prototype.v=function(I,E){E===void 0&&(E=I.length);const P=E-this.blockSize,A=this.C;let R=this.h,D=0;for(;D<E;){if(R==0)for(;D<=P;)i(this,I,D),D+=this.blockSize;if(typeof I=="string"){for(;D<E;)if(A[R++]=I.charCodeAt(D++),R==this.blockSize){i(this,A),R=0;break}}else for(;D<E;)if(A[R++]=I[D++],R==this.blockSize){i(this,A),R=0;break}}this.h=R,this.o+=E},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var E=1;E<I.length-8;++E)I[E]=0;E=this.o*8;for(var P=I.length-8;P<I.length;++P)I[P]=E&255,E/=256;for(this.v(I),I=Array(16),E=0,P=0;P<4;++P)for(let A=0;A<32;A+=8)I[E++]=this.g[P]>>>A&255;return I};function s(I,E){var P=a;return Object.prototype.hasOwnProperty.call(P,I)?P[I]:P[I]=E(I)}function o(I,E){this.h=E;const P=[];let A=!0;for(let R=I.length-1;R>=0;R--){const D=I[R]|0;A&&D==E||(P[R]=D,A=!1)}this.g=P}var a={};function l(I){return-128<=I&&I<128?s(I,function(E){return new o([E|0],E<0?-1:0)}):new o([I|0],I<0?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return d;if(I<0)return C(c(-I));const E=[];let P=1;for(let A=0;I>=P;A++)E[A]=I/P|0,P*=4294967296;return new o(E,0)}function h(I,E){if(I.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(I.charAt(0)=="-")return C(h(I.substring(1),E));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const P=c(Math.pow(E,8));let A=d;for(let D=0;D<I.length;D+=8){var R=Math.min(8,I.length-D);const k=parseInt(I.substring(D,D+R),E);R<8?(R=c(Math.pow(E,R)),A=A.j(R).add(c(k))):(A=A.j(P),A=A.add(c(k)))}return A}var d=l(0),p=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(S(this))return-C(this).m();let I=0,E=1;for(let P=0;P<this.g.length;P++){const A=this.i(P);I+=(A>=0?A:4294967296+A)*E,E*=4294967296}return I},t.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(x(this))return"0";if(S(this))return"-"+C(this).toString(I);const E=c(Math.pow(I,6));var P=this;let A="";for(;;){const R=b(P,E).g;P=w(P,R.j(E));let D=((P.g.length>0?P.g[0]:P.h)>>>0).toString(I);if(P=R,x(P))return D+A;for(;D.length<6;)D="0"+D;A=D+A}},t.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function x(I){if(I.h!=0)return!1;for(let E=0;E<I.g.length;E++)if(I.g[E]!=0)return!1;return!0}function S(I){return I.h==-1}t.l=function(I){return I=w(this,I),S(I)?-1:x(I)?0:1};function C(I){const E=I.g.length,P=[];for(let A=0;A<E;A++)P[A]=~I.g[A];return new o(P,~I.h).add(p)}t.abs=function(){return S(this)?C(this):this},t.add=function(I){const E=Math.max(this.g.length,I.g.length),P=[];let A=0;for(let R=0;R<=E;R++){let D=A+(this.i(R)&65535)+(I.i(R)&65535),k=(D>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);A=k>>>16,D&=65535,k&=65535,P[R]=k<<16|D}return new o(P,P[P.length-1]&-2147483648?-1:0)};function w(I,E){return I.add(C(E))}t.j=function(I){if(x(this)||x(I))return d;if(S(this))return S(I)?C(this).j(C(I)):C(C(this).j(I));if(S(I))return C(this.j(C(I)));if(this.l(y)<0&&I.l(y)<0)return c(this.m()*I.m());const E=this.g.length+I.g.length,P=[];for(var A=0;A<2*E;A++)P[A]=0;for(A=0;A<this.g.length;A++)for(let R=0;R<I.g.length;R++){const D=this.i(A)>>>16,k=this.i(A)&65535,ae=I.i(R)>>>16,Oe=I.i(R)&65535;P[2*A+2*R]+=k*Oe,v(P,2*A+2*R),P[2*A+2*R+1]+=D*Oe,v(P,2*A+2*R+1),P[2*A+2*R+1]+=k*ae,v(P,2*A+2*R+1),P[2*A+2*R+2]+=D*ae,v(P,2*A+2*R+2)}for(I=0;I<E;I++)P[I]=P[2*I+1]<<16|P[2*I];for(I=E;I<2*E;I++)P[I]=0;return new o(P,0)};function v(I,E){for(;(I[E]&65535)!=I[E];)I[E+1]+=I[E]>>>16,I[E]&=65535,E++}function _(I,E){this.g=I,this.h=E}function b(I,E){if(x(E))throw Error("division by zero");if(x(I))return new _(d,d);if(S(I))return E=b(C(I),E),new _(C(E.g),C(E.h));if(S(E))return E=b(I,C(E)),new _(C(E.g),E.h);if(I.g.length>30){if(S(I)||S(E))throw Error("slowDivide_ only works with positive integers.");for(var P=p,A=E;A.l(I)<=0;)P=L(P),A=L(A);var R=M(P,1),D=M(A,1);for(A=M(A,2),P=M(P,2);!x(A);){var k=D.add(A);k.l(I)<=0&&(R=R.add(P),D=k),A=M(A,1),P=M(P,1)}return E=w(I,R.j(E)),new _(R,E)}for(R=d;I.l(E)>=0;){for(P=Math.max(1,Math.floor(I.m()/E.m())),A=Math.ceil(Math.log(P)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),D=c(P),k=D.j(E);S(k)||k.l(I)>0;)P-=A,D=c(P),k=D.j(E);x(D)&&(D=p),R=R.add(D),I=w(I,k)}return new _(R,I)}t.B=function(I){return b(this,I).h},t.and=function(I){const E=Math.max(this.g.length,I.g.length),P=[];for(let A=0;A<E;A++)P[A]=this.i(A)&I.i(A);return new o(P,this.h&I.h)},t.or=function(I){const E=Math.max(this.g.length,I.g.length),P=[];for(let A=0;A<E;A++)P[A]=this.i(A)|I.i(A);return new o(P,this.h|I.h)},t.xor=function(I){const E=Math.max(this.g.length,I.g.length),P=[];for(let A=0;A<E;A++)P[A]=this.i(A)^I.i(A);return new o(P,this.h^I.h)};function L(I){const E=I.g.length+1,P=[];for(let A=0;A<E;A++)P[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(P,I.h)}function M(I,E){const P=E>>5;E%=32;const A=I.g.length-P,R=[];for(let D=0;D<A;D++)R[D]=E>0?I.i(D+P)>>>E|I.i(D+P+1)<<32-E:I.i(D+P);return new o(R,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,ZI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Wr=o}).apply(typeof e1<"u"?e1:typeof self<"u"?self:typeof window<"u"?window:{});var ou=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eS,Yo,tS,Nu,Tp,nS,rS,iS;(function(){var t,e=Object.defineProperty;function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ou=="object"&&ou];for(var f=0;f<u.length;++f){var m=u[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(u,f){if(f)e:{var m=r;u=u.split(".");for(var T=0;T<u.length-1;T++){var V=u[T];if(!(V in m))break e;m=m[V]}u=u[u.length-1],T=m[u],f=f(T),f!=T&&f!=null&&e(m,u,{configurable:!0,writable:!0,value:f})}}i("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(u){return u||function(f){var m=[],T;for(T in f)Object.prototype.hasOwnProperty.call(f,T)&&m.push([T,f[T]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function a(u){var f=typeof u;return f=="object"&&u!=null||f=="function"}function l(u,f,m){return u.call.apply(u.bind,arguments)}function c(u,f,m){return c=l,c.apply(null,arguments)}function h(u,f){var m=Array.prototype.slice.call(arguments,1);return function(){var T=m.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function d(u,f){function m(){}m.prototype=f.prototype,u.Z=f.prototype,u.prototype=new m,u.prototype.constructor=u,u.Ob=function(T,V,O){for(var B=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)B[ne-2]=arguments[ne];return f.prototype[V].apply(T,B)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function y(u){const f=u.length;if(f>0){const m=Array(f);for(let T=0;T<f;T++)m[T]=u[T];return m}return[]}function x(u,f){for(let T=1;T<arguments.length;T++){const V=arguments[T];var m=typeof V;if(m=m!="object"?m:V?Array.isArray(V)?"array":m:"null",m=="array"||m=="object"&&typeof V.length=="number"){m=u.length||0;const O=V.length||0;u.length=m+O;for(let B=0;B<O;B++)u[m+B]=V[B]}else u.push(V)}}class S{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function C(u){o.setTimeout(()=>{throw u},0)}function w(){var u=I;let f=null;return u.g&&(f=u.g,u.g=u.g.next,u.g||(u.h=null),f.next=null),f}class v{constructor(){this.h=this.g=null}add(f,m){const T=_.get();T.set(f,m),this.h?this.h.next=T:this.g=T,this.h=T}}var _=new S(()=>new b,u=>u.reset());class b{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let L,M=!1,I=new v,E=()=>{const u=Promise.resolve(void 0);L=()=>{u.then(P)}};function P(){for(var u;u=w();){try{u.h.call(u.g)}catch(m){C(m)}var f=_;f.j(u),f.h<100&&(f.h++,u.next=f.g,f.g=u)}M=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(u,f){this.type=u,this.g=this.target=f,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var D=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var u=!1,f=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};o.addEventListener("test",m,f),o.removeEventListener("test",m,f)}catch{}return u}();function k(u){return/^[\s\xa0]*$/.test(u)}function ae(u,f){R.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,f)}d(ae,R),ae.prototype.init=function(u,f){const m=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=f,f=u.relatedTarget,f||(m=="mouseover"?f=u.fromElement:m=="mouseout"&&(f=u.toElement)),this.relatedTarget=f,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&ae.Z.h.call(this)},ae.prototype.h=function(){ae.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Oe="closure_listenable_"+(Math.random()*1e6|0),me=0;function Ge(u,f,m,T,V){this.listener=u,this.proxy=null,this.src=f,this.type=m,this.capture=!!T,this.ha=V,this.key=++me,this.da=this.fa=!1}function z(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function G(u,f,m){for(const T in u)f.call(m,u[T],T,u)}function te(u,f){for(const m in u)f.call(void 0,u[m],m,u)}function J(u){const f={};for(const m in u)f[m]=u[m];return f}const fe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pn(u,f){let m,T;for(let V=1;V<arguments.length;V++){T=arguments[V];for(m in T)u[m]=T[m];for(let O=0;O<fe.length;O++)m=fe[O],Object.prototype.hasOwnProperty.call(T,m)&&(u[m]=T[m])}}function gt(u){this.src=u,this.g={},this.h=0}gt.prototype.add=function(u,f,m,T,V){const O=u.toString();u=this.g[O],u||(u=this.g[O]=[],this.h++);const B=Ze(u,f,T,V);return B>-1?(f=u[B],m||(f.fa=!1)):(f=new Ge(f,this.src,O,!!T,V),f.fa=m,u.push(f)),f};function mn(u,f){const m=f.type;if(m in u.g){var T=u.g[m],V=Array.prototype.indexOf.call(T,f,void 0),O;(O=V>=0)&&Array.prototype.splice.call(T,V,1),O&&(z(f),u.g[m].length==0&&(delete u.g[m],u.h--))}}function Ze(u,f,m,T){for(let V=0;V<u.length;++V){const O=u[V];if(!O.da&&O.listener==f&&O.capture==!!m&&O.ha==T)return V}return-1}var Zt="closure_lm_"+(Math.random()*1e6|0),po={};function Yi(u,f,m,T,V){if(T&&T.once)return Nh(u,f,m,T,V);if(Array.isArray(f)){for(let O=0;O<f.length;O++)Yi(u,f[O],m,T,V);return null}return m=Oh(m),u&&u[Oe]?u.J(f,m,a(T)?!!T.capture:!!T,V):ui(u,f,m,!1,T,V)}function ui(u,f,m,T,V,O){if(!f)throw Error("Invalid event type");const B=a(V)?!!V.capture:!!V;let ne=Vh(u);if(ne||(u[Zt]=ne=new gt(u)),m=ne.add(f,m,T,B,O),m.proxy)return m;if(T=Nn(),m.proxy=T,T.src=u,T.listener=m,u.addEventListener)D||(V=B),V===void 0&&(V=!1),u.addEventListener(f.toString(),T,V);else if(u.attachEvent)u.attachEvent(ly(f.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Nn(){function u(m){return f.call(u.src,u.listener,m)}const f=OP;return u}function Nh(u,f,m,T,V){if(Array.isArray(f)){for(let O=0;O<f.length;O++)Nh(u,f[O],m,T,V);return null}return m=Oh(m),u&&u[Oe]?u.K(f,m,a(T)?!!T.capture:!!T,V):ui(u,f,m,!0,T,V)}function ay(u,f,m,T,V){if(Array.isArray(f))for(var O=0;O<f.length;O++)ay(u,f[O],m,T,V);else T=a(T)?!!T.capture:!!T,m=Oh(m),u&&u[Oe]?(u=u.i,O=String(f).toString(),O in u.g&&(f=u.g[O],m=Ze(f,m,T,V),m>-1&&(z(f[m]),Array.prototype.splice.call(f,m,1),f.length==0&&(delete u.g[O],u.h--)))):u&&(u=Vh(u))&&(f=u.g[f.toString()],u=-1,f&&(u=Ze(f,m,T,V)),(m=u>-1?f[u]:null)&&Dh(m))}function Dh(u){if(typeof u!="number"&&u&&!u.da){var f=u.src;if(f&&f[Oe])mn(f.i,u);else{var m=u.type,T=u.proxy;f.removeEventListener?f.removeEventListener(m,T,u.capture):f.detachEvent?f.detachEvent(ly(m),T):f.addListener&&f.removeListener&&f.removeListener(T),(m=Vh(f))?(mn(m,u),m.h==0&&(m.src=null,f[Zt]=null)):z(u)}}}function ly(u){return u in po?po[u]:po[u]="on"+u}function OP(u,f){if(u.da)u=!0;else{f=new ae(f,this);const m=u.listener,T=u.ha||u.src;u.fa&&Dh(u),u=m.call(T,f)}return u}function Vh(u){return u=u[Zt],u instanceof gt?u:null}var Lh="__closure_events_fn_"+(Math.random()*1e9>>>0);function Oh(u){return typeof u=="function"?u:(u[Lh]||(u[Lh]=function(f){return u.handleEvent(f)}),u[Lh])}function ot(){A.call(this),this.i=new gt(this),this.M=this,this.G=null}d(ot,A),ot.prototype[Oe]=!0,ot.prototype.removeEventListener=function(u,f,m,T){ay(this,u,f,m,T)};function yt(u,f){var m,T=u.G;if(T)for(m=[];T;T=T.G)m.push(T);if(u=u.M,T=f.type||f,typeof f=="string")f=new R(f,u);else if(f instanceof R)f.target=f.target||u;else{var V=f;f=new R(T,u),pn(f,V)}V=!0;let O,B;if(m)for(B=m.length-1;B>=0;B--)O=f.g=m[B],V=Sl(O,T,!0,f)&&V;if(O=f.g=u,V=Sl(O,T,!0,f)&&V,V=Sl(O,T,!1,f)&&V,m)for(B=0;B<m.length;B++)O=f.g=m[B],V=Sl(O,T,!1,f)&&V}ot.prototype.N=function(){if(ot.Z.N.call(this),this.i){var u=this.i;for(const f in u.g){const m=u.g[f];for(let T=0;T<m.length;T++)z(m[T]);delete u.g[f],u.h--}}this.G=null},ot.prototype.J=function(u,f,m,T){return this.i.add(String(u),f,!1,m,T)},ot.prototype.K=function(u,f,m,T){return this.i.add(String(u),f,!0,m,T)};function Sl(u,f,m,T){if(f=u.i.g[String(f)],!f)return!0;f=f.concat();let V=!0;for(let O=0;O<f.length;++O){const B=f[O];if(B&&!B.da&&B.capture==m){const ne=B.listener,$e=B.ha||B.src;B.fa&&mn(u.i,B),V=ne.call($e,T)!==!1&&V}}return V&&!T.defaultPrevented}function MP(u,f){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=c(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(u,f||0)}function uy(u){u.g=MP(()=>{u.g=null,u.i&&(u.i=!1,uy(u))},u.l);const f=u.h;u.h=null,u.m.apply(null,f)}class jP extends A{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:uy(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mo(u){A.call(this),this.h=u,this.g={}}d(mo,A);var cy=[];function hy(u){G(u.g,function(f,m){this.g.hasOwnProperty(m)&&Dh(f)},u),u.g={}}mo.prototype.N=function(){mo.Z.N.call(this),hy(this)},mo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mh=o.JSON.stringify,FP=o.JSON.parse,UP=class{stringify(u){return o.JSON.stringify(u,void 0)}parse(u){return o.JSON.parse(u,void 0)}};function dy(){}function fy(){}var go={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function jh(){R.call(this,"d")}d(jh,R);function Fh(){R.call(this,"c")}d(Fh,R);var ci={},py=null;function Pl(){return py=py||new ot}ci.Ia="serverreachability";function my(u){R.call(this,ci.Ia,u)}d(my,R);function yo(u){const f=Pl();yt(f,new my(f))}ci.STAT_EVENT="statevent";function gy(u,f){R.call(this,ci.STAT_EVENT,u),this.stat=f}d(gy,R);function vt(u){const f=Pl();yt(f,new gy(f,u))}ci.Ja="timingevent";function yy(u,f){R.call(this,ci.Ja,u),this.size=f}d(yy,R);function vo(u,f){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){u()},f)}function _o(){this.g=!0}_o.prototype.ua=function(){this.g=!1};function BP(u,f,m,T,V,O){u.info(function(){if(u.g)if(O){var B="",ne=O.split("&");for(let pe=0;pe<ne.length;pe++){var $e=ne[pe].split("=");if($e.length>1){const Ke=$e[0];$e=$e[1];const yn=Ke.split("_");B=yn.length>=2&&yn[1]=="type"?B+(Ke+"="+$e+"&"):B+(Ke+"=redacted&")}}}else B=null;else B=O;return"XMLHTTP REQ ("+T+") [attempt "+V+"]: "+f+`
`+m+`
`+B})}function zP(u,f,m,T,V,O,B){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+V+"]: "+f+`
`+m+`
`+O+" "+B})}function Xi(u,f,m,T){u.info(function(){return"XMLHTTP TEXT ("+f+"): "+WP(u,m)+(T?" "+T:"")})}function $P(u,f){u.info(function(){return"TIMEOUT: "+f})}_o.prototype.info=function(){};function WP(u,f){if(!u.g)return f;if(!f)return null;try{const O=JSON.parse(f);if(O){for(u=0;u<O.length;u++)if(Array.isArray(O[u])){var m=O[u];if(!(m.length<2)){var T=m[1];if(Array.isArray(T)&&!(T.length<1)){var V=T[0];if(V!="noop"&&V!="stop"&&V!="close")for(let B=1;B<T.length;B++)T[B]=""}}}}return Mh(O)}catch{return f}}var Al={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},vy={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},_y;function Uh(){}d(Uh,dy),Uh.prototype.g=function(){return new XMLHttpRequest},_y=new Uh;function wo(u){return encodeURIComponent(String(u))}function HP(u){var f=1;u=u.split(":");const m=[];for(;f>0&&u.length;)m.push(u.shift()),f--;return u.length&&m.push(u.join(":")),m}function or(u,f,m,T){this.j=u,this.i=f,this.l=m,this.S=T||1,this.V=new mo(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new wy}function wy(){this.i=null,this.g="",this.h=!1}var Ey={},Bh={};function zh(u,f,m){u.M=1,u.A=kl(gn(f)),u.u=m,u.R=!0,Ty(u,null)}function Ty(u,f){u.F=Date.now(),Cl(u),u.B=gn(u.A);var m=u.B,T=u.S;Array.isArray(T)||(T=[String(T)]),Ly(m.i,"t",T),u.C=0,m=u.j.L,u.h=new wy,u.g=Zy(u.j,m?f:null,!u.u),u.P>0&&(u.O=new jP(c(u.Y,u,u.g),u.P)),f=u.V,m=u.g,T=u.ba;var V="readystatechange";Array.isArray(V)||(V&&(cy[0]=V.toString()),V=cy);for(let O=0;O<V.length;O++){const B=Yi(m,V[O],T||f.handleEvent,!1,f.h||f);if(!B)break;f.g[B.key]=B}f=u.J?J(u.J):{},u.u?(u.v||(u.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,f)):(u.v="GET",u.g.ea(u.B,u.v,null,f)),yo(),BP(u.i,u.v,u.B,u.l,u.S,u.u)}or.prototype.ba=function(u){u=u.target;const f=this.O;f&&ur(u)==3?f.j():this.Y(u)},or.prototype.Y=function(u){try{if(u==this.g)e:{const ne=ur(this.g),$e=this.g.ya(),pe=this.g.ca();if(!(ne<3)&&(ne!=3||this.g&&(this.h.h||this.g.la()||zy(this.g)))){this.K||ne!=4||$e==7||($e==8||pe<=0?yo(3):yo(2)),$h(this);var f=this.g.ca();this.X=f;var m=qP(this);if(this.o=f==200,zP(this.i,this.v,this.B,this.l,this.S,ne,f),this.o){if(this.U&&!this.L){t:{if(this.g){var T,V=this.g;if((T=V.g?V.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(T)){var O=T;break t}}O=null}if(u=O)Xi(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Wh(this,u);else{this.o=!1,this.m=3,vt(12),hi(this),Eo(this);break e}}if(this.R){u=!0;let Ke;for(;!this.K&&this.C<m.length;)if(Ke=GP(this,m),Ke==Bh){ne==4&&(this.m=4,vt(14),u=!1),Xi(this.i,this.l,null,"[Incomplete Response]");break}else if(Ke==Ey){this.m=4,vt(15),Xi(this.i,this.l,m,"[Invalid Chunk]"),u=!1;break}else Xi(this.i,this.l,Ke,null),Wh(this,Ke);if(xy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ne!=4||m.length!=0||this.h.h||(this.m=1,vt(16),u=!1),this.o=this.o&&u,!u)Xi(this.i,this.l,m,"[Invalid Chunked Response]"),hi(this),Eo(this);else if(m.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),Jh(B),B.P=!0,vt(11))}}else Xi(this.i,this.l,m,null),Wh(this,m);ne==4&&hi(this),this.o&&!this.K&&(ne==4?Qy(this.j,this):(this.o=!1,Cl(this)))}else aA(this.g),f==400&&m.indexOf("Unknown SID")>0?(this.m=3,vt(12)):(this.m=0,vt(13)),hi(this),Eo(this)}}}catch{}finally{}};function qP(u){if(!xy(u))return u.g.la();const f=zy(u.g);if(f==="")return"";let m="";const T=f.length,V=ur(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return hi(u),Eo(u),"";u.h.i=new o.TextDecoder}for(let O=0;O<T;O++)u.h.h=!0,m+=u.h.i.decode(f[O],{stream:!(V&&O==T-1)});return f.length=0,u.h.g+=m,u.C=0,u.h.g}function xy(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function GP(u,f){var m=u.C,T=f.indexOf(`
`,m);return T==-1?Bh:(m=Number(f.substring(m,T)),isNaN(m)?Ey:(T+=1,T+m>f.length?Bh:(f=f.slice(T,T+m),u.C=T+m,f)))}or.prototype.cancel=function(){this.K=!0,hi(this)};function Cl(u){u.T=Date.now()+u.H,Iy(u,u.H)}function Iy(u,f){if(u.D!=null)throw Error("WatchDog timer not null");u.D=vo(c(u.aa,u),f)}function $h(u){u.D&&(o.clearTimeout(u.D),u.D=null)}or.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?($P(this.i,this.B),this.M!=2&&(yo(),vt(17)),hi(this),this.m=2,Eo(this)):Iy(this,this.T-u)};function Eo(u){u.j.I==0||u.K||Qy(u.j,u)}function hi(u){$h(u);var f=u.O;f&&typeof f.dispose=="function"&&f.dispose(),u.O=null,hy(u.V),u.g&&(f=u.g,u.g=null,f.abort(),f.dispose())}function Wh(u,f){try{var m=u.j;if(m.I!=0&&(m.g==u||Hh(m.h,u))){if(!u.L&&Hh(m.h,u)&&m.I==3){try{var T=m.Ba.g.parse(f)}catch{T=null}if(Array.isArray(T)&&T.length==3){var V=T;if(V[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<u.F)Vl(m),Nl(m);else break e;Xh(m),vt(18)}}else m.xa=V[1],0<m.xa-m.K&&V[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=vo(c(m.Va,m),6e3));Ay(m.h)<=1&&m.ta&&(m.ta=void 0)}else fi(m,11)}else if((u.L||m.g==u)&&Vl(m),!k(f))for(V=m.Ba.g.parse(f),f=0;f<V.length;f++){let pe=V[f];const Ke=pe[0];if(!(Ke<=m.K))if(m.K=Ke,pe=pe[1],m.I==2)if(pe[0]=="c"){m.M=pe[1],m.ba=pe[2];const yn=pe[3];yn!=null&&(m.ka=yn,m.j.info("VER="+m.ka));const pi=pe[4];pi!=null&&(m.za=pi,m.j.info("SVER="+m.za));const cr=pe[5];cr!=null&&typeof cr=="number"&&cr>0&&(T=1.5*cr,m.O=T,m.j.info("backChannelRequestTimeoutMs_="+T)),T=m;const hr=u.g;if(hr){const Ol=hr.g?hr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ol){var O=T.h;O.g||Ol.indexOf("spdy")==-1&&Ol.indexOf("quic")==-1&&Ol.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(qh(O,O.h),O.h=null))}if(T.G){const Zh=hr.g?hr.g.getResponseHeader("X-HTTP-Session-Id"):null;Zh&&(T.wa=Zh,ve(T.J,T.G,Zh))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-u.F,m.j.info("Handshake RTT: "+m.T+"ms")),T=m;var B=u;if(T.na=Jy(T,T.L?T.ba:null,T.W),B.L){Cy(T.h,B);var ne=B,$e=T.O;$e&&(ne.H=$e),ne.D&&($h(ne),Cl(ne)),T.g=B}else Gy(T);m.i.length>0&&Dl(m)}else pe[0]!="stop"&&pe[0]!="close"||fi(m,7);else m.I==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?fi(m,7):Yh(m):pe[0]!="noop"&&m.l&&m.l.qa(pe),m.A=0)}}yo(4)}catch{}}var KP=class{constructor(u,f){this.g=u,this.map=f}};function Sy(u){this.l=u||10,o.PerformanceNavigationTiming?(u=o.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Py(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ay(u){return u.h?1:u.g?u.g.size:0}function Hh(u,f){return u.h?u.h==f:u.g?u.g.has(f):!1}function qh(u,f){u.g?u.g.add(f):u.h=f}function Cy(u,f){u.h&&u.h==f?u.h=null:u.g&&u.g.has(f)&&u.g.delete(f)}Sy.prototype.cancel=function(){if(this.i=ky(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function ky(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let f=u.i;for(const m of u.g.values())f=f.concat(m.G);return f}return y(u.i)}var Ry=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function QP(u,f){if(u){u=u.split("&");for(let m=0;m<u.length;m++){const T=u[m].indexOf("=");let V,O=null;T>=0?(V=u[m].substring(0,T),O=u[m].substring(T+1)):V=u[m],f(V,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function ar(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;u instanceof ar?(this.l=u.l,To(this,u.j),this.o=u.o,this.g=u.g,xo(this,u.u),this.h=u.h,Gh(this,Oy(u.i)),this.m=u.m):u&&(f=String(u).match(Ry))?(this.l=!1,To(this,f[1]||"",!0),this.o=Io(f[2]||""),this.g=Io(f[3]||"",!0),xo(this,f[4]),this.h=Io(f[5]||"",!0),Gh(this,f[6]||"",!0),this.m=Io(f[7]||"")):(this.l=!1,this.i=new Po(null,this.l))}ar.prototype.toString=function(){const u=[];var f=this.j;f&&u.push(So(f,by,!0),":");var m=this.g;return(m||f=="file")&&(u.push("//"),(f=this.o)&&u.push(So(f,by,!0),"@"),u.push(wo(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&u.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(So(m,m.charAt(0)=="/"?JP:XP,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",So(m,eA)),u.join("")},ar.prototype.resolve=function(u){const f=gn(this);let m=!!u.j;m?To(f,u.j):m=!!u.o,m?f.o=u.o:m=!!u.g,m?f.g=u.g:m=u.u!=null;var T=u.h;if(m)xo(f,u.u);else if(m=!!u.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var V=f.h.lastIndexOf("/");V!=-1&&(T=f.h.slice(0,V+1)+T)}if(V=T,V==".."||V==".")T="";else if(V.indexOf("./")!=-1||V.indexOf("/.")!=-1){T=V.lastIndexOf("/",0)==0,V=V.split("/");const O=[];for(let B=0;B<V.length;){const ne=V[B++];ne=="."?T&&B==V.length&&O.push(""):ne==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),T&&B==V.length&&O.push("")):(O.push(ne),T=!0)}T=O.join("/")}else T=V}return m?f.h=T:m=u.i.toString()!=="",m?Gh(f,Oy(u.i)):m=!!u.m,m&&(f.m=u.m),f};function gn(u){return new ar(u)}function To(u,f,m){u.j=m?Io(f,!0):f,u.j&&(u.j=u.j.replace(/:$/,""))}function xo(u,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);u.u=f}else u.u=null}function Gh(u,f,m){f instanceof Po?(u.i=f,tA(u.i,u.l)):(m||(f=So(f,ZP)),u.i=new Po(f,u.l))}function ve(u,f,m){u.i.set(f,m)}function kl(u){return ve(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Io(u,f){return u?f?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function So(u,f,m){return typeof u=="string"?(u=encodeURI(u).replace(f,YP),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function YP(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var by=/[#\/\?@]/g,XP=/[#\?:]/g,JP=/[#\?]/g,ZP=/[#\?@]/g,eA=/#/g;function Po(u,f){this.h=this.g=null,this.i=u||null,this.j=!!f}function di(u){u.g||(u.g=new Map,u.h=0,u.i&&QP(u.i,function(f,m){u.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=Po.prototype,t.add=function(u,f){di(this),this.i=null,u=Ji(this,u);let m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(f),this.h+=1,this};function Ny(u,f){di(u),f=Ji(u,f),u.g.has(f)&&(u.i=null,u.h-=u.g.get(f).length,u.g.delete(f))}function Dy(u,f){return di(u),f=Ji(u,f),u.g.has(f)}t.forEach=function(u,f){di(this),this.g.forEach(function(m,T){m.forEach(function(V){u.call(f,V,T,this)},this)},this)};function Vy(u,f){di(u);let m=[];if(typeof f=="string")Dy(u,f)&&(m=m.concat(u.g.get(Ji(u,f))));else for(u=Array.from(u.g.values()),f=0;f<u.length;f++)m=m.concat(u[f]);return m}t.set=function(u,f){return di(this),this.i=null,u=Ji(this,u),Dy(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[f]),this.h+=1,this},t.get=function(u,f){return u?(u=Vy(this,u),u.length>0?String(u[0]):f):f};function Ly(u,f,m){Ny(u,f),m.length>0&&(u.i=null,u.g.set(Ji(u,f),y(m)),u.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],f=Array.from(this.g.keys());for(let T=0;T<f.length;T++){var m=f[T];const V=wo(m);m=Vy(this,m);for(let O=0;O<m.length;O++){let B=V;m[O]!==""&&(B+="="+wo(m[O])),u.push(B)}}return this.i=u.join("&")};function Oy(u){const f=new Po;return f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),f}function Ji(u,f){return f=String(f),u.j&&(f=f.toLowerCase()),f}function tA(u,f){f&&!u.j&&(di(u),u.i=null,u.g.forEach(function(m,T){const V=T.toLowerCase();T!=V&&(Ny(this,T),Ly(this,V,m))},u)),u.j=f}function nA(u,f){const m=new _o;if(o.Image){const T=new Image;T.onload=h(lr,m,"TestLoadImage: loaded",!0,f,T),T.onerror=h(lr,m,"TestLoadImage: error",!1,f,T),T.onabort=h(lr,m,"TestLoadImage: abort",!1,f,T),T.ontimeout=h(lr,m,"TestLoadImage: timeout",!1,f,T),o.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else f(!1)}function rA(u,f){const m=new _o,T=new AbortController,V=setTimeout(()=>{T.abort(),lr(m,"TestPingServer: timeout",!1,f)},1e4);fetch(u,{signal:T.signal}).then(O=>{clearTimeout(V),O.ok?lr(m,"TestPingServer: ok",!0,f):lr(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(V),lr(m,"TestPingServer: error",!1,f)})}function lr(u,f,m,T,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),T(m)}catch{}}function iA(){this.g=new UP}function Kh(u){this.i=u.Sb||null,this.h=u.ab||!1}d(Kh,dy),Kh.prototype.g=function(){return new Rl(this.i,this.h)};function Rl(u,f){ot.call(this),this.H=u,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(Rl,ot),t=Rl.prototype,t.open=function(u,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=f,this.readyState=1,Co(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(f.body=u),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ao(this)),this.readyState=0},t.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Co(this)),this.g&&(this.readyState=3,Co(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;My(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function My(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}t.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var f=u.value?u.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!u.done}))&&(this.response=this.responseText+=f)}u.done?Ao(this):Co(this),this.readyState==3&&My(this)}},t.Oa=function(u){this.g&&(this.response=this.responseText=u,Ao(this))},t.Na=function(u){this.g&&(this.response=u,Ao(this))},t.ga=function(){this.g&&Ao(this)};function Ao(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Co(u)}t.setRequestHeader=function(u,f){this.A.append(u,f)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=f.next();return u.join(`\r
`)};function Co(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Rl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function jy(u){let f="";return G(u,function(m,T){f+=T,f+=":",f+=m,f+=`\r
`}),f}function Qh(u,f,m){e:{for(T in m){var T=!1;break e}T=!0}T||(m=jy(m),typeof u=="string"?m!=null&&wo(m):ve(u,f,m))}function Re(u){ot.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(Re,ot);var sA=/^https?$/i,oA=["POST","PUT"];t=Re.prototype,t.Fa=function(u){this.H=u},t.ea=function(u,f,m,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);f=f?f.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():_y.g(),this.g.onreadystatechange=p(c(this.Ca,this));try{this.B=!0,this.g.open(f,String(u),!0),this.B=!1}catch(O){Fy(this,O);return}if(u=m||"",m=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var V in T)m.set(V,T[V]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const O of T.keys())m.set(O,T.get(O));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(m.keys()).find(O=>O.toLowerCase()=="content-type"),V=o.FormData&&u instanceof o.FormData,!(Array.prototype.indexOf.call(oA,f,void 0)>=0)||T||V||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of m)this.g.setRequestHeader(O,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(O){Fy(this,O)}};function Fy(u,f){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=f,u.o=5,Uy(u),bl(u)}function Uy(u){u.A||(u.A=!0,yt(u,"complete"),yt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,yt(this,"complete"),yt(this,"abort"),bl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bl(this,!0)),Re.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?By(this):this.Xa())},t.Xa=function(){By(this)};function By(u){if(u.h&&typeof s<"u"){if(u.v&&ur(u)==4)setTimeout(u.Ca.bind(u),0);else if(yt(u,"readystatechange"),ur(u)==4){u.h=!1;try{const O=u.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var T;if(T=O===0){let B=String(u.D).match(Ry)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),T=!sA.test(B?B.toLowerCase():"")}m=T}if(m)yt(u,"complete"),yt(u,"success");else{u.o=6;try{var V=ur(u)>2?u.g.statusText:""}catch{V=""}u.l=V+" ["+u.ca()+"]",Uy(u)}}finally{bl(u)}}}}function bl(u,f){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const m=u.g;u.g=null,f||yt(u,"ready");try{m.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function ur(u){return u.g?u.g.readyState:0}t.ca=function(){try{return ur(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(u){if(this.g){var f=this.g.responseText;return u&&f.indexOf(u)==0&&(f=f.substring(u.length)),FP(f)}};function zy(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function aA(u){const f={};u=(u.g&&ur(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(k(u[T]))continue;var m=HP(u[T]);const V=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const O=f[V]||[];f[V]=O,O.push(m)}te(f,function(T){return T.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ko(u,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||f}function $y(u){this.za=0,this.i=[],this.j=new _o,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ko("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ko("baseRetryDelayMs",5e3,u),this.Za=ko("retryDelaySeedMs",1e4,u),this.Ta=ko("forwardChannelMaxRetries",2,u),this.va=ko("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new Sy(u&&u.concurrentRequestLimit),this.Ba=new iA,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=$y.prototype,t.ka=8,t.I=1,t.connect=function(u,f,m,T){vt(0),this.W=u,this.H=f||{},m&&T!==void 0&&(this.H.OSID=m,this.H.OAID=T),this.F=this.X,this.J=Jy(this,null,this.W),Dl(this)};function Yh(u){if(Wy(u),u.I==3){var f=u.V++,m=gn(u.J);if(ve(m,"SID",u.M),ve(m,"RID",f),ve(m,"TYPE","terminate"),Ro(u,m),f=new or(u,u.j,f),f.M=2,f.A=kl(gn(m)),m=!1,o.navigator&&o.navigator.sendBeacon)try{m=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!m&&o.Image&&(new Image().src=f.A,m=!0),m||(f.g=Zy(f.j,null),f.g.ea(f.A)),f.F=Date.now(),Cl(f)}Xy(u)}function Nl(u){u.g&&(Jh(u),u.g.cancel(),u.g=null)}function Wy(u){Nl(u),u.v&&(o.clearTimeout(u.v),u.v=null),Vl(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&o.clearTimeout(u.m),u.m=null)}function Dl(u){if(!Py(u.h)&&!u.m){u.m=!0;var f=u.Ea;L||E(),M||(L(),M=!0),I.add(f,u),u.D=0}}function lA(u,f){return Ay(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=f.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=vo(c(u.Ea,u,f),Yy(u,u.D)),u.D++,!0)}t.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const V=new or(this,this.j,u);let O=this.o;if(this.U&&(O?(O=J(O),pn(O,this.U)):O=this.U),this.u!==null||this.R||(V.J=O,O=null),this.S)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var T=this.i[m];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(f+=T,f>4096){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=qy(this,V,f),m=gn(this.J),ve(m,"RID",u),ve(m,"CVER",22),this.G&&ve(m,"X-HTTP-Session-Id",this.G),Ro(this,m),O&&(this.R?f="headers="+wo(jy(O))+"&"+f:this.u&&Qh(m,this.u,O)),qh(this.h,V),this.Ra&&ve(m,"TYPE","init"),this.S?(ve(m,"$req",f),ve(m,"SID","null"),V.U=!0,zh(V,m,null)):zh(V,m,f),this.I=2}}else this.I==3&&(u?Hy(this,u):this.i.length==0||Py(this.h)||Hy(this))};function Hy(u,f){var m;f?m=f.l:m=u.V++;const T=gn(u.J);ve(T,"SID",u.M),ve(T,"RID",m),ve(T,"AID",u.K),Ro(u,T),u.u&&u.o&&Qh(T,u.u,u.o),m=new or(u,u.j,m,u.D+1),u.u===null&&(m.J=u.o),f&&(u.i=f.G.concat(u.i)),f=qy(u,m,1e3),m.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),qh(u.h,m),zh(m,T,f)}function Ro(u,f){u.H&&G(u.H,function(m,T){ve(f,T,m)}),u.l&&G({},function(m,T){ve(f,T,m)})}function qy(u,f,m){m=Math.min(u.i.length,m);const T=u.l?c(u.l.Ka,u.l,u):null;e:{var V=u.i;let ne=-1;for(;;){const $e=["count="+m];ne==-1?m>0?(ne=V[0].g,$e.push("ofs="+ne)):ne=0:$e.push("ofs="+ne);let pe=!0;for(let Ke=0;Ke<m;Ke++){var O=V[Ke].g;const yn=V[Ke].map;if(O-=ne,O<0)ne=Math.max(0,V[Ke].g-100),pe=!1;else try{O="req"+O+"_"||"";try{var B=yn instanceof Map?yn:Object.entries(yn);for(const[pi,cr]of B){let hr=cr;a(cr)&&(hr=Mh(cr)),$e.push(O+pi+"="+encodeURIComponent(hr))}}catch(pi){throw $e.push(O+"type="+encodeURIComponent("_badmap")),pi}}catch{T&&T(yn)}}if(pe){B=$e.join("&");break e}}B=void 0}return u=u.i.splice(0,m),f.G=u,B}function Gy(u){if(!u.g&&!u.v){u.Y=1;var f=u.Da;L||E(),M||(L(),M=!0),I.add(f,u),u.A=0}}function Xh(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=vo(c(u.Da,u),Yy(u,u.A)),u.A++,!0)}t.Da=function(){if(this.v=null,Ky(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=vo(c(this.Wa,this),u)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,vt(10),Nl(this),Ky(this))};function Jh(u){u.B!=null&&(o.clearTimeout(u.B),u.B=null)}function Ky(u){u.g=new or(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var f=gn(u.na);ve(f,"RID","rpc"),ve(f,"SID",u.M),ve(f,"AID",u.K),ve(f,"CI",u.F?"0":"1"),!u.F&&u.ia&&ve(f,"TO",u.ia),ve(f,"TYPE","xmlhttp"),Ro(u,f),u.u&&u.o&&Qh(f,u.u,u.o),u.O&&(u.g.H=u.O);var m=u.g;u=u.ba,m.M=1,m.A=kl(gn(f)),m.u=null,m.R=!0,Ty(m,u)}t.Va=function(){this.C!=null&&(this.C=null,Nl(this),Xh(this),vt(19))};function Vl(u){u.C!=null&&(o.clearTimeout(u.C),u.C=null)}function Qy(u,f){var m=null;if(u.g==f){Vl(u),Jh(u),u.g=null;var T=2}else if(Hh(u.h,f))m=f.G,Cy(u.h,f),T=1;else return;if(u.I!=0){if(f.o)if(T==1){m=f.u?f.u.length:0,f=Date.now()-f.F;var V=u.D;T=Pl(),yt(T,new yy(T,m)),Dl(u)}else Gy(u);else if(V=f.m,V==3||V==0&&f.X>0||!(T==1&&lA(u,f)||T==2&&Xh(u)))switch(m&&m.length>0&&(f=u.h,f.i=f.i.concat(m)),V){case 1:fi(u,5);break;case 4:fi(u,10);break;case 3:fi(u,6);break;default:fi(u,2)}}}function Yy(u,f){let m=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(m*=2),m*f}function fi(u,f){if(u.j.info("Error code "+f),f==2){var m=c(u.bb,u),T=u.Ua;const V=!T;T=new ar(T||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||To(T,"https"),kl(T),V?nA(T.toString(),m):rA(T.toString(),m)}else vt(2);u.I=0,u.l&&u.l.pa(f),Xy(u),Wy(u)}t.bb=function(u){u?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Xy(u){if(u.I=0,u.ja=[],u.l){const f=ky(u.h);(f.length!=0||u.i.length!=0)&&(x(u.ja,f),x(u.ja,u.i),u.h.i.length=0,y(u.i),u.i.length=0),u.l.oa()}}function Jy(u,f,m){var T=m instanceof ar?gn(m):new ar(m);if(T.g!="")f&&(T.g=f+"."+T.g),xo(T,T.u);else{var V=o.location;T=V.protocol,f=f?f+"."+V.hostname:V.hostname,V=+V.port;const O=new ar(null);T&&To(O,T),f&&(O.g=f),V&&xo(O,V),m&&(O.h=m),T=O}return m=u.G,f=u.wa,m&&f&&ve(T,m,f),ve(T,"VER",u.ka),Ro(u,T),T}function Zy(u,f,m){if(f&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=u.Aa&&!u.ma?new Re(new Kh({ab:m})):new Re(u.ma),f.Fa(u.L),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function e0(){}t=e0.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ll(){}Ll.prototype.g=function(u,f){return new Dt(u,f)};function Dt(u,f){ot.call(this),this.g=new $y(f),this.l=u,this.h=f&&f.messageUrlParams||null,u=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(u?u["X-WebChannel-Content-Type"]=f.messageContentType:u={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(u?u["X-WebChannel-Client-Profile"]=f.sa:u={"X-WebChannel-Client-Profile":f.sa}),this.g.U=u,(u=f&&f.Qb)&&!k(u)&&(this.g.u=u),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!k(f)&&(this.g.G=f,u=this.h,u!==null&&f in u&&(u=this.h,f in u&&delete u[f])),this.j=new Zi(this)}d(Dt,ot),Dt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Yh(this.g)},Dt.prototype.o=function(u){var f=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.v&&(m={},m.__data__=Mh(u),u=m);f.i.push(new KP(f.Ya++,u)),f.I==3&&Dl(f)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Yh(this.g),delete this.g,Dt.Z.N.call(this)};function t0(u){jh.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var f=u.__sm__;if(f){e:{for(const m in f){u=m;break e}u=void 0}(this.i=u)&&(u=this.i,f=f!==null&&u in f?f[u]:void 0),this.data=f}else this.data=u}d(t0,jh);function n0(){Fh.call(this),this.status=1}d(n0,Fh);function Zi(u){this.g=u}d(Zi,e0),Zi.prototype.ra=function(){yt(this.g,"a")},Zi.prototype.qa=function(u){yt(this.g,new t0(u))},Zi.prototype.pa=function(u){yt(this.g,new n0)},Zi.prototype.oa=function(){yt(this.g,"b")},Ll.prototype.createWebChannel=Ll.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,iS=function(){return new Ll},rS=function(){return Pl()},nS=ci,Tp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Al.NO_ERROR=0,Al.TIMEOUT=8,Al.HTTP_ERROR=6,Nu=Al,vy.COMPLETE="complete",tS=vy,fy.EventType=go,go.OPEN="a",go.CLOSE="b",go.ERROR="c",go.MESSAGE="d",ot.prototype.listen=ot.prototype.J,Yo=fy,Re.prototype.listenOnce=Re.prototype.K,Re.prototype.getLastError=Re.prototype.Ha,Re.prototype.getLastErrorCode=Re.prototype.ya,Re.prototype.getStatus=Re.prototype.ca,Re.prototype.getResponseJson=Re.prototype.La,Re.prototype.getResponseText=Re.prototype.la,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Fa,eS=Re}).apply(typeof ou<"u"?ou:typeof self<"u"?self:typeof window<"u"?window:{});const t1="@firebase/firestore",n1="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new hg("@firebase/firestore");function ts(){return Ui.logLevel}function W(t,...e){if(Ui.logLevel<=ie.DEBUG){const n=e.map(Tg);Ui.debug(`Firestore (${ao}): ${t}`,...n)}}function er(t,...e){if(Ui.logLevel<=ie.ERROR){const n=e.map(Tg);Ui.error(`Firestore (${ao}): ${t}`,...n)}}function Ws(t,...e){if(Ui.logLevel<=ie.WARN){const n=e.map(Tg);Ui.warn(`Firestore (${ao}): ${t}`,...n)}}function Tg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,sS(t,r,n)}function sS(t,e,n){let r=`FIRESTORE (${ao}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw er(r),new Error(r)}function he(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||sS(e,i,r)}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends sr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class k5{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class R5{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class b5{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){he(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Wn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Wn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Wn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string",31837,{l:r}),new oS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string",2055,{h:e}),new ht(e)}}class N5{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class D5{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new N5(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class r1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class V5{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,sn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){he(this.o===void 0,3512);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new r1(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new r1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L5(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=L5(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function xp(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Gd(i)===Gd(s)?se(i,s):Gd(i)?1:-1}return se(t.length,e.length)}const O5=55296,M5=57343;function Gd(t){const e=t.charCodeAt(0);return e>=O5&&e<=M5}function Hs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1="__name__";class wn{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&X(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=wn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return se(e.length,n.length)}static compareSegments(e,n){const r=wn.isNumericId(e),i=wn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?wn.extractNumericId(e).compare(wn.extractNumericId(n)):xp(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Wr.fromString(e.substring(4,e.length-2))}}class ge extends wn{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const j5=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends wn{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return j5.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===i1}static keyField(){return new nt([i1])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ge.fromString(e))}static fromName(e){return new q(ge.fromString(e).popFirst(5))}static empty(){return new q(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(t,e,n){if(!n)throw new $(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function F5(t,e,n,r){if(e===!0&&r===!0)throw new $(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function s1(t){if(!q.isDocumentKey(t))throw new $(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function o1(t){if(q.isDocumentKey(t))throw new $(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lS(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function mh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X(12329,{type:typeof t})}function tr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mh(t);throw new $(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t,e){const n={typeString:t};return e&&(n.value=e),n}function yl(t,e){if(!lS(t))throw new $(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new $(j.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1=-62135596800,l1=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*l1);return new we(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<a1)throw new $(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/l1}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:we._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(yl(e,we._jsonSchema))return new we(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-a1;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}we._jsonSchemaVersion="firestore/timestamp/1.0",we._jsonSchema={type:Be("string",we._jsonSchemaVersion),seconds:Be("number"),nanoseconds:Be("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{static fromTimestamp(e){return new Z(e)}static min(){return new Z(new we(0,0))}static max(){return new Z(new we(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=-1;function U5(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new we(n+1,0):new we(n,r));return new Yr(i,q.empty(),e)}function B5(t){return new Yr(t.readTime,t.key,Wa)}class Yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yr(Z.min(),q.empty(),Wa)}static max(){return new Yr(Z.max(),q.empty(),Wa)}}function z5(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $5="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class W5{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==$5)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function H5(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function uo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}gh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=-1;function yh(t){return t==null}function Pc(t){return t===0&&1/t==-1/0}function q5(t){return typeof t=="number"&&Number.isInteger(t)&&!Pc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS="";function G5(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=u1(e)),e=K5(t.get(n),e);return u1(e)}function K5(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case uS:n+="";break;default:n+=s}}return n}function u1(t){return t+uS+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ai(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new au(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new au(this.root,e,this.comparator,!1)}getReverseIterator(){return new au(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new au(this.root,e,this.comparator,!0)}}class au{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??tt.RED,this.left=i??tt.EMPTY,this.right=s??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new tt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new h1(this.data.getIterator())}getIteratorFrom(e){return new h1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class h1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new qe(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new hS("Invalid base64 string: "+s):s}}(e);return new st(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const Q5=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xr(t){if(he(!!t,39018),typeof t=="string"){let e=0;const n=Q5.exec(t);if(he(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jr(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS="server_timestamp",fS="__type__",pS="__previous_value__",mS="__local_write_time__";function Sg(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[fS])==null?void 0:r.stringValue)===dS}function vh(t){const e=t.mapValue.fields[pS];return Sg(e)?vh(e):e}function Ha(t){const e=Xr(t.mapValue.fields[mS].timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y5{constructor(e,n,r,i,s,o,a,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c,this.isUsingEmulator=h}}const Ac="(default)";class qa{constructor(e,n){this.projectId=e,this.database=n||Ac}static empty(){return new qa("","")}get isDefaultDatabase(){return this.database===Ac}isEqual(e){return e instanceof qa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="__type__",yS="__max__",lu={mapValue:{fields:{__type__:{stringValue:yS}}}},vS="__vector__",Cc="value";function Zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sg(t)?4:J5(t)?9007199254740991:X5(t)?10:11:X(28295,{value:t})}function bn(t,e){if(t===e)return!0;const n=Zr(t);if(n!==Zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ha(t).isEqual(Ha(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Xr(i.timestampValue),a=Xr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Jr(i.bytesValue).isEqual(Jr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ve(i.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(i.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ve(i.integerValue)===Ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ve(i.doubleValue),a=Ve(s.doubleValue);return o===a?Pc(o)===Pc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Hs(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(c1(o)!==c1(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!bn(o[l],a[l])))return!1;return!0}(t,e);default:return X(52216,{left:t})}}function Ga(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function qs(t,e){if(t===e)return 0;const n=Zr(t),r=Zr(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ve(s.integerValue||s.doubleValue),l=Ve(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return d1(t.timestampValue,e.timestampValue);case 4:return d1(Ha(t),Ha(e));case 5:return xp(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Jr(s),l=Jr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=se(a[c],l[c]);if(h!==0)return h}return se(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=se(Ve(s.latitude),Ve(o.latitude));return a!==0?a:se(Ve(s.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return f1(t.arrayValue,e.arrayValue);case 10:return function(s,o){var p,y,x,S;const a=s.fields||{},l=o.fields||{},c=(p=a[Cc])==null?void 0:p.arrayValue,h=(y=l[Cc])==null?void 0:y.arrayValue,d=se(((x=c==null?void 0:c.values)==null?void 0:x.length)||0,((S=h==null?void 0:h.values)==null?void 0:S.length)||0);return d!==0?d:f1(c,h)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===lu.mapValue&&o===lu.mapValue)return 0;if(s===lu.mapValue)return 1;if(o===lu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=xp(l[d],h[d]);if(p!==0)return p;const y=qs(a[l[d]],c[h[d]]);if(y!==0)return y}return se(l.length,h.length)}(t.mapValue,e.mapValue);default:throw X(23264,{he:n})}}function d1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=Xr(t),r=Xr(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function f1(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=qs(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function Gs(t){return Ip(t)}function Ip(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Xr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ip(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ip(n.fields[o])}`;return i+"}"}(t.mapValue):X(61005,{value:t})}function Du(t){switch(Zr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=vh(t);return e?16+Du(e):16;case 5:return 2*t.stringValue.length;case 6:return Jr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Du(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ai(r.fields,(s,o)=>{i+=s.length+Du(o)}),i}(t.mapValue);default:throw X(13486,{value:t})}}function p1(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sp(t){return!!t&&"integerValue"in t}function Pg(t){return!!t&&"arrayValue"in t}function m1(t){return!!t&&"nullValue"in t}function g1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vu(t){return!!t&&"mapValue"in t}function X5(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[gS])==null?void 0:r.stringValue)===vS}function ma(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ai(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ma(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ma(t.arrayValue.values[n]);return e}return{...t}}function J5(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===yS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Vu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ma(n)}setAll(e){let n=nt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ma(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Vu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Vu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ai(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new At(ma(this.value))}}function _S(t){const e=[];return ai(t.fields,(n,r)=>{const i=new nt([n]);if(Vu(r)){const s=_S(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ft(e,0,Z.min(),Z.min(),Z.min(),At.empty(),0)}static newFoundDocument(e,n,r,i){return new ft(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new ft(e,2,n,Z.min(),Z.min(),At.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,Z.min(),Z.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n){this.position=e,this.inclusive=n}}function y1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=qs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function v1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n="asc"){this.field=e,this.dir=n}}function Z5(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{}class Ue extends wS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new t3(e,n,r):n==="array-contains"?new i3(e,r):n==="in"?new s3(e,r):n==="not-in"?new o3(e,r):n==="array-contains-any"?new a3(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new n3(e,r):new r3(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(qs(n,this.value)):n!==null&&Zr(this.value)===Zr(n)&&this.matchesComparison(qs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends wS{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new dn(e,n)}matches(e){return ES(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ES(t){return t.op==="and"}function TS(t){return e3(t)&&ES(t)}function e3(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function Pp(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+Gs(t.value);if(TS(t))return t.filters.map(e=>Pp(e)).join(",");{const e=t.filters.map(n=>Pp(n)).join(",");return`${t.op}(${e})`}}function xS(t,e){return t instanceof Ue?function(r,i){return i instanceof Ue&&r.op===i.op&&r.field.isEqual(i.field)&&bn(r.value,i.value)}(t,e):t instanceof dn?function(r,i){return i instanceof dn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&xS(o,i.filters[a]),!0):!1}(t,e):void X(19439)}function IS(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${Gs(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(IS).join(" ,")+"}"}(t):"Filter"}class t3 extends Ue{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class n3 extends Ue{constructor(e,n){super(e,"in",n),this.keys=SS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class r3 extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=SS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function SS(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class i3 extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pg(n)&&Ga(n.arrayValue,this.value)}}class s3 extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ga(this.value.arrayValue,n)}}class o3 extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ga(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ga(this.value.arrayValue,n)}}class a3 extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ga(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l3{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.Te=null}}function _1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new l3(t,e,n,r,i,s,o)}function Ag(t){const e=ee(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),yh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Gs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Gs(r)).join(",")),e.Te=n}return e.Te}function Cg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Z5(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!v1(t.startAt,e.startAt)&&v1(t.endAt,e.endAt)}function Ap(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function u3(t,e,n,r,i,s,o,a){return new co(t,e,n,r,i,s,o,a)}function kg(t){return new co(t)}function w1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function PS(t){return t.collectionGroup!==null}function ga(t){const e=ee(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new qe(nt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Ka(s,r))}),n.has(nt.keyField().canonicalString())||e.Ie.push(new Ka(nt.keyField(),r))}return e.Ie}function An(t){const e=ee(t);return e.Ee||(e.Ee=c3(e,ga(t))),e.Ee}function c3(t,e){if(t.limitType==="F")return _1(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ka(i.field,s)});const n=t.endAt?new kc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new kc(t.startAt.position,t.startAt.inclusive):null;return _1(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Cp(t,e){const n=t.filters.concat([e]);return new co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function kp(t,e,n){return new co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _h(t,e){return Cg(An(t),An(e))&&t.limitType===e.limitType}function AS(t){return`${Ag(An(t))}|lt:${t.limitType}`}function ns(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>IS(i)).join(", ")}]`),yh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Gs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Gs(i)).join(",")),`Target(${r})`}(An(t))}; limitType=${t.limitType})`}function wh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ga(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=y1(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,ga(r),i)||r.endAt&&!function(o,a,l){const c=y1(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,ga(r),i))}(t,e)}function h3(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function CS(t){return(e,n)=>{let r=!1;for(const i of ga(t)){const s=d3(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function d3(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?qs(l,c):X(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ai(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return cS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f3=new ke(q.comparator);function nr(){return f3}const kS=new ke(q.comparator);function Xo(...t){let e=kS;for(const n of t)e=e.insert(n.key,n);return e}function RS(t){let e=kS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Si(){return ya()}function bS(){return ya()}function ya(){return new Gi(t=>t.toString(),(t,e)=>t.isEqual(e))}const p3=new ke(q.comparator),m3=new qe(q.comparator);function oe(...t){let e=m3;for(const n of t)e=e.add(n);return e}const g3=new qe(se);function y3(){return g3}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pc(e)?"-0":e}}function NS(t){return{integerValue:""+t}}function v3(t,e){return q5(e)?NS(e):Rg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(){this._=void 0}}function _3(t,e,n){return t instanceof Qa?function(i,s){const o={fields:{[fS]:{stringValue:dS},[mS]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Sg(s)&&(s=vh(s)),s&&(o.fields[pS]=s),{mapValue:o}}(n,e):t instanceof Ya?VS(t,e):t instanceof Xa?LS(t,e):function(i,s){const o=DS(i,s),a=E1(o)+E1(i.Ae);return Sp(o)&&Sp(i.Ae)?NS(a):Rg(i.serializer,a)}(t,e)}function w3(t,e,n){return t instanceof Ya?VS(t,e):t instanceof Xa?LS(t,e):n}function DS(t,e){return t instanceof Rc?function(r){return Sp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Qa extends Eh{}class Ya extends Eh{constructor(e){super(),this.elements=e}}function VS(t,e){const n=OS(e);for(const r of t.elements)n.some(i=>bn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Xa extends Eh{constructor(e){super(),this.elements=e}}function LS(t,e){let n=OS(e);for(const r of t.elements)n=n.filter(i=>!bn(i,r));return{arrayValue:{values:n}}}class Rc extends Eh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function E1(t){return Ve(t.integerValue||t.doubleValue)}function OS(t){return Pg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E3{constructor(e,n){this.field=e,this.transform=n}}function T3(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ya&&i instanceof Ya||r instanceof Xa&&i instanceof Xa?Hs(r.elements,i.elements,bn):r instanceof Rc&&i instanceof Rc?bn(r.Ae,i.Ae):r instanceof Qa&&i instanceof Qa}(t.transform,e.transform)}class x3{constructor(e,n){this.version=e,this.transformResults=n}}class un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Th{}function MS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bg(t.key,un.none()):new vl(t.key,t.data,un.none());{const n=t.data,r=At.empty();let i=new qe(nt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new li(t.key,r,new Ot(i.toArray()),un.none())}}function I3(t,e,n){t instanceof vl?function(i,s,o){const a=i.value.clone(),l=x1(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof li?function(i,s,o){if(!Lu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=x1(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(jS(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function va(t,e,n,r){return t instanceof vl?function(s,o,a,l){if(!Lu(s.precondition,o))return a;const c=s.value.clone(),h=I1(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof li?function(s,o,a,l){if(!Lu(s.precondition,o))return a;const c=I1(s.fieldTransforms,l,o),h=o.data;return h.setAll(jS(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return Lu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function S3(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=DS(r.transform,i||null);s!=null&&(n===null&&(n=At.empty()),n.set(r.field,s))}return n||null}function T1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Hs(r,i,(s,o)=>T3(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class vl extends Th{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class li extends Th{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function jS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function x1(t,e,n){const r=new Map;he(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,w3(o,a,n[i]))}return r}function I1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,_3(s,o,e))}return r}class bg extends Th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class P3 extends Th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A3{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&I3(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=va(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=va(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=MS(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&Hs(this.mutations,e.mutations,(n,r)=>T1(n,r))&&Hs(this.baseMutations,e.baseMutations,(n,r)=>T1(n,r))}}class Ng{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){he(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return p3}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ng(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C3{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k3{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,ue;function R3(t){switch(t){case j.OK:return X(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return X(15467,{code:t})}}function FS(t){if(t===void 0)return er("GRPC error has no .code"),j.UNKNOWN;switch(t){case Me.OK:return j.OK;case Me.CANCELLED:return j.CANCELLED;case Me.UNKNOWN:return j.UNKNOWN;case Me.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Me.INTERNAL:return j.INTERNAL;case Me.UNAVAILABLE:return j.UNAVAILABLE;case Me.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Me.NOT_FOUND:return j.NOT_FOUND;case Me.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Me.ABORTED:return j.ABORTED;case Me.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Me.DATA_LOSS:return j.DATA_LOSS;default:return X(39323,{code:t})}}(ue=Me||(Me={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b3(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N3=new Wr([4294967295,4294967295],0);function S1(t){const e=b3().encode(t),n=new ZI;return n.update(e),new Uint8Array(n.digest())}function P1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Wr([n,r],0),new Wr([i,s],0)]}class Dg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Jo(`Invalid padding: ${n}`);if(r<0)throw new Jo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Jo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Jo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Wr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Wr.fromNumber(r)));return i.compare(N3)===1&&(i=new Wr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=S1(e),[r,i]=P1(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Dg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=S1(e),[r,i]=P1(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Jo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,_l.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new xh(Z.min(),i,new ke(se),nr(),oe())}}class _l{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new _l(r,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class US{constructor(e,n){this.targetId=e,this.Ce=n}}class BS{constructor(e,n,r=st.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class A1{constructor(){this.ve=0,this.Fe=C1(),this.Me=st.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=oe(),n=oe(),r=oe();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X(38017,{changeType:s})}}),new _l(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=C1()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,he(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class D3{constructor(e){this.Ge=e,this.ze=new Map,this.je=nr(),this.Je=uu(),this.He=uu(),this.Ye=new ke(se)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:X(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Ap(s))if(r===0){const o=new q(s.path);this.et(n,o,ft.newNoDocument(o,Z.min()))}else he(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Jr(r).toUint8Array()}catch(l){if(l instanceof hS)return Ws("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Dg(o,i,s)}catch(l){return Ws(l instanceof Jo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const a=this.ot(o);if(a){if(s.current&&Ap(a.target)){const l=new q(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,ft.newNoDocument(l,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=oe();this.He.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.ot(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new xh(e,n,this.Ye,this.je,r);return this.je=nr(),this.Je=uu(),this.He=uu(),this.Ye=new ke(se),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new A1,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new qe(se),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new qe(se),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new A1),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function uu(){return new ke(q.comparator)}function C1(){return new ke(q.comparator)}const V3=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),L3=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),O3=(()=>({and:"AND",or:"OR"}))();class M3{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rp(t,e){return t.useProto3Json||yh(e)?e:{value:e}}function bc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function j3(t,e){return bc(t,e.toTimestamp())}function Cn(t){return he(!!t,49232),Z.fromTimestamp(function(n){const r=Xr(n);return new we(r.seconds,r.nanos)}(t))}function Vg(t,e){return bp(t,e).canonicalString()}function bp(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function $S(t){const e=ge.fromString(t);return he(KS(e),10190,{key:e.toString()}),e}function Np(t,e){return Vg(t.databaseId,e.path)}function Kd(t,e){const n=$S(e);if(n.get(1)!==t.databaseId.projectId)throw new $(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(HS(n))}function WS(t,e){return Vg(t.databaseId,e)}function F3(t){const e=$S(t);return e.length===4?ge.emptyPath():HS(e)}function Dp(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function HS(t){return he(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function k1(t,e,n){return{name:Np(t,e),fields:n.value.mapValue.fields}}function U3(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(he(h===void 0||typeof h=="string",58123),st.fromBase64String(h||"")):(he(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),st.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?j.UNKNOWN:FS(c.code);return new $(h,c.message||"")}(o);n=new BS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Kd(t,r.document.name),s=Cn(r.document.updateTime),o=r.document.createTime?Cn(r.document.createTime):Z.min(),a=new At({mapValue:{fields:r.document.fields}}),l=ft.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Ou(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Kd(t,r.document),s=r.readTime?Cn(r.readTime):Z.min(),o=ft.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ou([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Kd(t,r.document),s=r.removedTargetIds||[];n=new Ou([],s,i,null)}else{if(!("filter"in e))return X(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new k3(i,s),a=r.targetId;n=new US(a,o)}}return n}function B3(t,e){let n;if(e instanceof vl)n={update:k1(t,e.key,e.value)};else if(e instanceof bg)n={delete:Np(t,e.key)};else if(e instanceof li)n={update:k1(t,e.key,e.data),updateMask:Y3(e.fieldMask)};else{if(!(e instanceof P3))return X(16599,{Vt:e.type});n={verify:Np(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Qa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ya)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Xa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Rc)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw X(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:j3(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X(27497)}(t,e.precondition)),n}function z3(t,e){return t&&t.length>0?(he(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Cn(i.updateTime):Cn(s);return o.isEqual(Z.min())&&(o=Cn(s)),new x3(o,i.transformResults||[])}(n,e))):[]}function $3(t,e){return{documents:[WS(t,e.path)]}}function W3(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=WS(t,i);const s=function(c){if(c.length!==0)return GS(dn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:rs(p.field),direction:G3(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Rp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function H3(t){let e=F3(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){he(r===1,65062);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(d){const p=qS(d);return p instanceof dn&&TS(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(x){return new Ka(is(x.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,yh(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,y=d.values||[];return new kc(y,p)}(n.startAt));let c=null;return n.endAt&&(c=function(d){const p=!d.before,y=d.values||[];return new kc(y,p)}(n.endAt)),u3(e,i,o,s,a,"F",l,c)}function q3(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=is(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=is(n.unaryFilter.field);return Ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=is(n.unaryFilter.field);return Ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=is(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ue.create(is(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>qS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X(1026)}}(n.compositeFilter.op))}(t):X(30097,{filter:t})}function G3(t){return V3[t]}function K3(t){return L3[t]}function Q3(t){return O3[t]}function rs(t){return{fieldPath:t.canonicalString()}}function is(t){return nt.fromServerFormat(t.fieldPath)}function GS(t){return t instanceof Ue?function(n){if(n.op==="=="){if(g1(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NAN"}};if(m1(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(g1(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NOT_NAN"}};if(m1(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rs(n.field),op:K3(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(i=>GS(i));return r.length===1?r[0]:{compositeFilter:{op:Q3(n.op),filters:r}}}(t):X(54877,{filter:t})}function Y3(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function KS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=st.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Ar(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ar(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X3{constructor(e){this.yt=e}}function J3(t){const e=H3({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z3{constructor(){this.Cn=new e6}addToCollectionParentIndex(e,n){return this.Cn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Yr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Yr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class e6{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new qe(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new qe(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},QS=41943040;class St{static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(QS,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ks(0)}static cr(){return new Ks(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1="LruGarbageCollector",t6=1048576;function N1([t,e],[n,r]){const i=se(t,n);return i===0?se(e,r):i}class n6{constructor(e){this.Ir=e,this.buffer=new qe(N1),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();N1(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class r6{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){W(b1,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){uo(n)?W(b1,"Ignoring IndexedDB error during garbage collection: ",n):await lo(n)}await this.Vr(3e5)})}}class i6{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(gh.ce);const r=new n6(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(R1)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),R1):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,a,l,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(e,i))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(s=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(c=Date.now(),ts()<=ie.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(c-l)+`ms
Total Duration: ${c-h}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:d})))}}function s6(t,e){return new i6(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o6{constructor(){this.changes=new Gi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a6{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l6{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&va(r.mutation,i,Ot.empty(),we.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=Si();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Xo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Si();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=nr();const o=ya(),a=function(){return ya()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof li)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),va(h.mutation,c,h.mutation.getFieldMask(),we.now())):o.set(c.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>a.set(c,new a6(h,o.get(c)??null))),a))}recalculateAndSaveOverlays(e,n){const r=ya();let i=new ke((o,a)=>o-a),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||Ot.empty();h=a.applyToLocalView(c,h),r.set(l,h);const d=(i.get(a.batchId)||oe()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,d=bS();h.forEach(p=>{if(!s.has(p)){const y=MS(n.get(p),r.get(p));y!==null&&d.set(p,y),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):PS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(Si());let a=Wa,l=s;return o.next(c=>F.forEach(c,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,oe())).next(h=>({batchId:a,changes:RS(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Xo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Xo();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,l=>{const c=function(d,p){return new co(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,ft.newInvalidDocument(h)))});let a=Xo();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&va(h.mutation,c,Ot.empty(),we.now()),wh(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u6{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return F.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Cn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:J3(i.bundledQuery),readTime:Cn(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c6{constructor(){this.overlays=new ke(q.comparator),this.qr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Si();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=Si(),s=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ke((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Si(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Si(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return F.resolve(a)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new C3(n,r));let s=this.qr.get(n);s===void 0&&(s=oe(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h6{constructor(){this.sessionToken=st.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(){this.Qr=new qe(Qe.$r),this.Ur=new qe(Qe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Qe(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Qe(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new q(new ge([])),r=new Qe(n,e),i=new Qe(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new q(new ge([])),r=new Qe(n,e),i=new Qe(n,e+1);let s=oe();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Qe(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return q.comparator(e.key,n.key)||se(e.Yr,n.Yr)}static Kr(e,n){return se(e.Yr,n.Yr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d6{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new qe(Qe.$r)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new A3(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Zr=this.Zr.add(new Qe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Ig:this.tr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Qe(n,0),i=new Qe(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const a=this.Xr(o.Yr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(se);return n.forEach(i=>{const s=new Qe(i,0),o=new Qe(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],a=>{r=r.add(a.Yr)})}),F.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Qe(new q(s),0);let a=new qe(se);return this.Zr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.Yr)),!0)},o),F.resolve(this.ti(a))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){he(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return F.forEach(n.mutations,i=>{const s=new Qe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Qe(n,0),i=this.Zr.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f6{constructor(e){this.ri=e,this.docs=function(){return new ke(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let r=nr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ft.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=nr();const o=n.path,a=new q(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||z5(B5(h),r)<=0||(i.has(h.key)||wh(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X(9500)}ii(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new p6(this)}getSize(e){return F.resolve(this.size)}}class p6 extends o6{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m6{constructor(e){this.persistence=e,this.si=new Gi(n=>Ag(n),Cg),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.oi=0,this._i=new Lg,this.targetCount=0,this.ai=Ks.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),F.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ks(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Pr(n),F.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n){this.ui={},this.overlays={},this.ci=new gh(0),this.li=!1,this.li=!0,this.hi=new h6,this.referenceDelegate=e(this),this.Pi=new m6(this),this.indexManager=new Z3,this.remoteDocumentCache=function(i){return new f6(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new X3(n),this.Ii=new u6(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new c6,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new d6(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new g6(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return F.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class g6 extends W5{constructor(e){super(),this.currentSequenceNumber=e}}class Og{constructor(e){this.persistence=e,this.Ri=new Lg,this.Vi=null}static mi(e){return new Og(e)}get fi(){if(this.Vi)return this.Vi;throw X(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.fi,r=>{const i=q.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Nc{constructor(e,n){this.persistence=e,this.pi=new Gi(r=>G5(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=s6(this,n)}static mi(e,n){return new Nc(e,n)}Ei(){}di(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return F.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?F.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(a=>{a||(r++,s.removeEntry(o,Z.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Du(e.data.value)),n}br(e,n,r){return F.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return F.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Mg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y6{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v6{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return QL()?8:H5(mt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new y6;return this.Ss(e,n,o).next(a=>{if(s.result=a,this.Vs)return this.bs(e,n,o,a.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(ts()<=ie.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",ns(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),F.resolve()):(ts()<=ie.DEBUG&&W("QueryEngine","Query:",ns(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(ts()<=ie.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",ns(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,An(n))):F.resolve())}ys(e,n){if(w1(n))return F.resolve(null);let r=An(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=kp(n,null,"F"),r=An(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.ps.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Ds(n,a);return this.Cs(n,c,o,l.readTime)?this.ys(e,kp(n,null,"F")):this.vs(e,c,n,l)}))})))}ws(e,n,r,i){return w1(n)||i.isEqual(Z.min())?F.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?F.resolve(null):(ts()<=ie.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ns(n)),this.vs(e,o,n,U5(i,Wa)).next(a=>a))})}Ds(e,n){let r=new qe(CS(e));return n.forEach((i,s)=>{wh(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return ts()<=ie.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",ns(n)),this.ps.getDocumentsMatchingQuery(e,n,Yr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg="LocalStore",_6=3e8;class w6{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new ke(se),this.xs=new Gi(s=>Ag(s),Cg),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new l6(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function E6(t,e,n,r){return new w6(t,e,n,r)}async function XS(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=oe();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:a}))})})}function T6(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const d=c.batch,p=d.keys();let y=F.resolve();return p.forEach(x=>{y=y.next(()=>h.getEntry(l,x)).next(S=>{const C=c.docVersions.get(x);he(C!==null,48541),S.version.compareTo(C)<0&&(d.applyToRemoteDocument(S,c),S.isValidDocument()&&(S.setReadTime(c.commitVersion),h.addEntry(S)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=oe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function JS(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function x6(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const a=[];e.targetChanges.forEach((h,d)=>{const p=i.get(d);if(!p)return;a.push(n.Pi.removeMatchingKeys(s,h.removedDocuments,d).next(()=>n.Pi.addMatchingKeys(s,h.addedDocuments,d)));let y=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?y=y.withResumeToken(st.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),i=i.insert(d,y),function(S,C,w){return S.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=_6?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(p,y,h)&&a.push(n.Pi.updateTargetData(s,y))});let l=nr(),c=oe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(I6(s,o,e.documentUpdates).next(h=>{l=h.ks,c=h.qs})),!r.isEqual(Z.min())){const h=n.Pi.getLastRemoteSnapshotVersion(s).next(d=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.Ms=i,s))}function I6(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=nr();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):W(jg,"Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ks:o,qs:i}})}function S6(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ig),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function P6(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new Ar(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Vp(t,e,n){const r=ee(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!uo(o))throw o;W(jg,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function D1(t,e,n){const r=ee(t);let i=Z.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const d=ee(l),p=d.xs.get(h);return p!==void 0?F.resolve(d.Ms.get(p)):d.Pi.getTargetData(c,h)}(r,o,An(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:oe())).next(a=>(A6(r,h3(e),a),{documents:a,Qs:s})))}function A6(t,e,n){let r=t.Os.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class V1{constructor(){this.activeTargetIds=y3()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class C6{constructor(){this.Mo=new V1,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new V1,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k6{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="ConnectivityMonitor";class O1{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){W(L1,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){W(L1,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cu=null;function Lp(){return cu===null?cu=function(){return 268435456+Math.round(2147483648*Math.random())}():cu++,"0x"+cu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="RestConnection",R6={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class b6{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Ac?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=Lp(),a=this.zo(e,n.toUriEncodedString());W(Qd,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,i,s);const{host:c}=new URL(a),h=ro(c);return this.Jo(e,a,l,r,h).then(d=>(W(Qd,`Received RPC '${e}' ${o}: `,d),d),d=>{throw Ws(Qd,`RPC '${e}' ${o} failed with error: `,d,"url: ",a,"request:",r),d})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ao}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=R6[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N6{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class D6 extends b6{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Lp();return new Promise((a,l)=>{const c=new eS;c.setWithCredentials(!0),c.listenOnce(tS.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Nu.NO_ERROR:const d=c.getResponseJson();W(ut,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),a(d);break;case Nu.TIMEOUT:W(ut,`RPC '${e}' ${o} timed out`),l(new $(j.DEADLINE_EXCEEDED,"Request time out"));break;case Nu.HTTP_ERROR:const p=c.getStatus();if(W(ut,`RPC '${e}' ${o} failed with status:`,p,"response text:",c.getResponseText()),p>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const x=y==null?void 0:y.error;if(x&&x.status&&x.message){const S=function(w){const v=w.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(v)>=0?v:j.UNKNOWN}(x.status);l(new $(S,x.message))}else l(new $(j.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new $(j.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{W(ut,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(i);W(ut,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",h,r,15)})}T_(e,n,r){const i=Lp(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=iS(),a=rS(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");W(ut,`Creating RPC '${e}' stream ${i}: ${h}`,l);const d=o.createWebChannel(h,l);this.I_(d);let p=!1,y=!1;const x=new N6({Yo:C=>{y?W(ut,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(p||(W(ut,`Opening RPC '${e}' stream ${i} transport.`),d.open(),p=!0),W(ut,`RPC '${e}' stream ${i} sending:`,C),d.send(C))},Zo:()=>d.close()}),S=(C,w,v)=>{C.listen(w,_=>{try{v(_)}catch(b){setTimeout(()=>{throw b},0)}})};return S(d,Yo.EventType.OPEN,()=>{y||(W(ut,`RPC '${e}' stream ${i} transport opened.`),x.o_())}),S(d,Yo.EventType.CLOSE,()=>{y||(y=!0,W(ut,`RPC '${e}' stream ${i} transport closed`),x.a_(),this.E_(d))}),S(d,Yo.EventType.ERROR,C=>{y||(y=!0,Ws(ut,`RPC '${e}' stream ${i} transport errored. Name:`,C.name,"Message:",C.message),x.a_(new $(j.UNAVAILABLE,"The operation could not be completed")))}),S(d,Yo.EventType.MESSAGE,C=>{var w;if(!y){const v=C.data[0];he(!!v,16349);const _=v,b=(_==null?void 0:_.error)||((w=_[0])==null?void 0:w.error);if(b){W(ut,`RPC '${e}' stream ${i} received error:`,b);const L=b.status;let M=function(P){const A=Me[P];if(A!==void 0)return FS(A)}(L),I=b.message;M===void 0&&(M=j.INTERNAL,I="Unknown error status: "+L+" with message "+b.message),y=!0,x.a_(new $(M,I)),d.close()}else W(ut,`RPC '${e}' stream ${i} received:`,v),x.u_(v)}}),S(a,nS.STAT_EVENT,C=>{C.stat===Tp.PROXY?W(ut,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Tp.NOPROXY&&W(ut,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.__()},0),x}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Yd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(t){return new M3(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="PersistentStream";class eP{constructor(e,n,r,i,s,o,a,l){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ZS(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(er(n.toString()),er("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new $(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(M1,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(W(M1,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class V6 extends eP{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=U3(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?Cn(o.readTime):Z.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Dp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Ap(l)?{documents:$3(s,l)}:{query:W3(s,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=zS(s,o.resumeToken);const c=Rp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=bc(s,o.snapshotVersion.toTimestamp());const c=Rp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=q3(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Dp(this.serializer),n.removeTarget=e,this.q_(n)}}class L6 extends eP{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return he(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){he(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=z3(e.writeResults,e.commitTime),r=Cn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Dp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>B3(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O6{}class M6 extends O6{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new $(j.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,bp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(j.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Ho(e,bp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(j.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class j6{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(er(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="RemoteStore";class F6{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Ki(this)&&(W(Bi,"Restarting streams for network reachability change."),await async function(l){const c=ee(l);c.Ea.add(4),await wl(c),c.Ra.set("Unknown"),c.Ea.delete(4),await Sh(c)}(this))})}),this.Ra=new j6(r,i)}}async function Sh(t){if(Ki(t))for(const e of t.da)await e(!0)}async function wl(t){for(const e of t.da)await e(!1)}function tP(t,e){const n=ee(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),zg(n)?Bg(n):ho(n).O_()&&Ug(n,e))}function Fg(t,e){const n=ee(t),r=ho(n);n.Ia.delete(e),r.O_()&&nP(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ki(n)&&n.Ra.set("Unknown"))}function Ug(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ho(t).Y_(e)}function nP(t,e){t.Va.Ue(e),ho(t).Z_(e)}function Bg(t){t.Va=new D3({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ho(t).start(),t.Ra.ua()}function zg(t){return Ki(t)&&!ho(t).x_()&&t.Ia.size>0}function Ki(t){return ee(t).Ea.size===0}function rP(t){t.Va=void 0}async function U6(t){t.Ra.set("Online")}async function B6(t){t.Ia.forEach((e,n)=>{Ug(t,e)})}async function z6(t,e){rP(t),zg(t)?(t.Ra.ha(e),Bg(t)):t.Ra.set("Unknown")}async function $6(t,e,n){if(t.Ra.set("Online"),e instanceof BS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.Ia.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.Ia.delete(a),i.Va.removeTarget(a))}(t,e)}catch(r){W(Bi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Dc(t,r)}else if(e instanceof Ou?t.Va.Ze(e):e instanceof US?t.Va.st(e):t.Va.tt(e),!n.isEqual(Z.min()))try{const r=await JS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Va.Tt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.Ia.get(c);h&&s.Ia.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.Ia.get(l);if(!h)return;s.Ia.set(l,h.withResumeToken(st.EMPTY_BYTE_STRING,h.snapshotVersion)),nP(s,l);const d=new Ar(h.target,l,c,h.sequenceNumber);Ug(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){W(Bi,"Failed to raise snapshot:",r),await Dc(t,r)}}async function Dc(t,e,n){if(!uo(e))throw e;t.Ea.add(1),await wl(t),t.Ra.set("Offline"),n||(n=()=>JS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(Bi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Sh(t)})}function iP(t,e){return e().catch(n=>Dc(t,n,e))}async function Ph(t){const e=ee(t),n=ei(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ig;for(;W6(e);)try{const i=await S6(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,H6(e,i)}catch(i){await Dc(e,i)}sP(e)&&oP(e)}function W6(t){return Ki(t)&&t.Ta.length<10}function H6(t,e){t.Ta.push(e);const n=ei(t);n.O_()&&n.X_&&n.ea(e.mutations)}function sP(t){return Ki(t)&&!ei(t).x_()&&t.Ta.length>0}function oP(t){ei(t).start()}async function q6(t){ei(t).ra()}async function G6(t){const e=ei(t);for(const n of t.Ta)e.ea(n.mutations)}async function K6(t,e,n){const r=t.Ta.shift(),i=Ng.from(r,e,n);await iP(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ph(t)}async function Q6(t,e){e&&ei(t).X_&&await async function(r,i){if(function(o){return R3(o)&&o!==j.ABORTED}(i.code)){const s=r.Ta.shift();ei(r).B_(),await iP(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ph(r)}}(t,e),sP(t)&&oP(t)}async function j1(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),W(Bi,"RemoteStore received new credentials");const r=Ki(n);n.Ea.add(3),await wl(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Sh(n)}async function Y6(t,e){const n=ee(t);e?(n.Ea.delete(2),await Sh(n)):e||(n.Ea.add(2),await wl(n),n.Ra.set("Unknown"))}function ho(t){return t.ma||(t.ma=function(n,r,i){const s=ee(n);return s.sa(),new V6(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:U6.bind(null,t),t_:B6.bind(null,t),r_:z6.bind(null,t),H_:$6.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),zg(t)?Bg(t):t.Ra.set("Unknown")):(await t.ma.stop(),rP(t))})),t.ma}function ei(t){return t.fa||(t.fa=function(n,r,i){const s=ee(n);return s.sa(),new L6(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:q6.bind(null,t),r_:Q6.bind(null,t),ta:G6.bind(null,t),na:K6.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Ph(t)):(await t.fa.stop(),t.Ta.length>0&&(W(Bi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new $g(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wg(t,e){if(er("AsyncQueue",`${e}: ${t}`),uo(t))return new $(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{static emptySet(e){return new bs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Xo(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(){this.ga=new ke(q.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):X(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Qs{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Qs(e,n,bs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_h(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X6{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class J6{constructor(){this.queries=U1(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=U1(),s.forEach((o,a)=>{for(const l of a.Sa)l.onError(r)})})(this,new $(j.ABORTED,"Firestore shutting down"))}}function U1(){return new Gi(t=>AS(t),_h)}async function aP(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new X6,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Wg(o,`Initialization of query '${ns(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Hg(n)}async function lP(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Z6(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Sa)a.Fa(i)&&(r=!0);o.wa=i}}r&&Hg(n)}function ej(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Hg(t){t.Ca.forEach(e=>{e.next()})}var Op,B1;(B1=Op||(Op={})).Ma="default",B1.Cache="cache";class uP{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Qs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Op.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.key=e}}class hP{constructor(e){this.key=e}}class tj{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=oe(),this.mutatedKeys=oe(),this.eu=CS(e),this.tu=new bs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new F1,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,d)=>{const p=i.get(h),y=wh(this.query,d)?d:null,x=!!p&&this.mutatedKeys.has(p.key),S=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let C=!1;p&&y?p.data.isEqual(y.data)?x!==S&&(r.track({type:3,doc:y}),C=!0):this.su(p,y)||(r.track({type:2,doc:y}),C=!0,(l&&this.eu(y,l)>0||c&&this.eu(y,c)<0)&&(a=!0)):!p&&y?(r.track({type:0,doc:y}),C=!0):p&&!y&&(r.track({type:1,doc:p}),C=!0,(l||c)&&(a=!0)),C&&(y?(o=o.add(y),s=S?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Cs:a,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,d)=>function(y,x){const S=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Rt:C})}};return S(y)-S(x)}(h.type,d.type)||this.eu(h.doc,d.doc)),this.ou(r),i=i??!1;const a=n&&!i?this._u():[],l=this.Xa.size===0&&this.current&&!i?1:0,c=l!==this.Za;return this.Za=l,o.length!==0||c?{snapshot:new Qs(this.query,e.tu,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new F1,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=oe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new hP(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new cP(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=oe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Qs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const qg="SyncEngine";class nj{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class rj{constructor(e){this.key=e,this.hu=!1}}class ij{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Gi(a=>AS(a),_h),this.Iu=new Map,this.Eu=new Set,this.du=new ke(q.comparator),this.Au=new Map,this.Ru=new Lg,this.Vu={},this.mu=new Map,this.fu=Ks.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function sj(t,e,n=!0){const r=yP(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await dP(r,e,n,!0),i}async function oj(t,e){const n=yP(t);await dP(n,e,!0,!1)}async function dP(t,e,n,r){const i=await P6(t.localStore,An(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await aj(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&tP(t.remoteStore,i),a}async function aj(t,e,n,r,i){t.pu=(d,p,y)=>async function(S,C,w,v){let _=C.view.ru(w);_.Cs&&(_=await D1(S.localStore,C.query,!1).then(({documents:I})=>C.view.ru(I,_)));const b=v&&v.targetChanges.get(C.targetId),L=v&&v.targetMismatches.get(C.targetId)!=null,M=C.view.applyChanges(_,S.isPrimaryClient,b,L);return $1(S,C.targetId,M.au),M.snapshot}(t,d,p,y);const s=await D1(t.localStore,e,!0),o=new tj(e,s.Qs),a=o.ru(s.documents),l=_l.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);$1(t,n,c.au);const h=new nj(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function lj(t,e,n){const r=ee(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!_h(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Vp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Fg(r.remoteStore,i.targetId),Mp(r,i.targetId)}).catch(lo)):(Mp(r,i.targetId),await Vp(r.localStore,i.targetId,!0))}async function uj(t,e){const n=ee(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Fg(n.remoteStore,r.targetId))}async function cj(t,e,n){const r=yj(t);try{const i=await function(o,a){const l=ee(o),c=we.now(),h=a.reduce((y,x)=>y.add(x.key),oe());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let x=nr(),S=oe();return l.Ns.getEntries(y,h).next(C=>{x=C,x.forEach((w,v)=>{v.isValidDocument()||(S=S.add(w))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,x)).next(C=>{d=C;const w=[];for(const v of a){const _=S3(v,d.get(v.key).overlayedDocument);_!=null&&w.push(new li(v.key,_,_S(_.value.mapValue),un.exists(!0)))}return l.mutationQueue.addMutationBatch(y,c,w,a)}).next(C=>{p=C;const w=C.applyToLocalDocumentSet(d,S);return l.documentOverlayCache.saveOverlays(y,C.batchId,w)})}).then(()=>({batchId:p.batchId,changes:RS(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Vu[o.currentUser.toKey()];c||(c=new ke(se)),c=c.insert(a,l),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,n),await El(r,i.changes),await Ph(r.remoteStore)}catch(i){const s=Wg(i,"Failed to persist write");n.reject(s)}}async function fP(t,e){const n=ee(t);try{const r=await x6(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?he(o.hu,14607):i.removedDocuments.size>0&&(he(o.hu,42227),o.hu=!1))}),await El(n,r,e)}catch(r){await lo(r)}}function z1(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const a=o.view.va(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ee(o);l.onlineState=a;let c=!1;l.queries.forEach((h,d)=>{for(const p of d.Sa)p.va(a)&&(c=!0)}),c&&Hg(l)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hj(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new ke(q.comparator);o=o.insert(s,ft.newNoDocument(s,Z.min()));const a=oe().add(s),l=new xh(Z.min(),new Map,new ke(se),o,a);await fP(r,l),r.du=r.du.remove(s),r.Au.delete(e),Gg(r)}else await Vp(r.localStore,e,!1).then(()=>Mp(r,e,n)).catch(lo)}async function dj(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await T6(n.localStore,e);mP(n,r,null),pP(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await El(n,i)}catch(i){await lo(i)}}async function fj(t,e,n){const r=ee(t);try{const i=await function(o,a){const l=ee(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(d=>(he(d!==null,37113),h=d.keys(),l.mutationQueue.removeMutationBatch(c,d))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);mP(r,e,n),pP(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await El(r,i)}catch(i){await lo(i)}}function pP(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function mP(t,e,n){const r=ee(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Mp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||gP(t,r)})}function gP(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Fg(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Gg(t))}function $1(t,e,n){for(const r of n)r instanceof cP?(t.Ru.addReference(r.key,e),pj(t,r)):r instanceof hP?(W(qg,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||gP(t,r.key)):X(19791,{wu:r})}function pj(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(W(qg,"New document in limbo: "+n),t.Eu.add(r),Gg(t))}function Gg(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new q(ge.fromString(e)),r=t.fu.next();t.Au.set(r,new rj(n)),t.du=t.du.insert(n,r),tP(t.remoteStore,new Ar(An(kg(n.path)),r,"TargetPurposeLimboResolution",gh.ce))}}async function El(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,l)=>{o.push(r.pu(l,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const d=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(c){i.push(c);const d=Mg.As(l.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(l,c){const h=ee(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>F.forEach(c,p=>F.forEach(p.Es,y=>h.persistence.referenceDelegate.addReference(d,p.targetId,y)).next(()=>F.forEach(p.ds,y=>h.persistence.referenceDelegate.removeReference(d,p.targetId,y)))))}catch(d){if(!uo(d))throw d;W(jg,"Failed to update sequence numbers: "+d)}for(const d of c){const p=d.targetId;if(!d.fromCache){const y=h.Ms.get(p),x=y.snapshotVersion,S=y.withLastLimboFreeSnapshotVersion(x);h.Ms=h.Ms.insert(p,S)}}}(r.localStore,s))}async function mj(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){W(qg,"User change. New user:",e.toKey());const r=await XS(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(a=>{a.forEach(l=>{l.reject(new $(j.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await El(n,r.Ls)}}function gj(t,e){const n=ee(t),r=n.Au.get(e);if(r&&r.hu)return oe().add(r.key);{let i=oe();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const a=n.Tu.get(o);i=i.unionWith(a.view.nu)}return i}}function yP(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fP.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gj.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hj.bind(null,e),e.Pu.H_=Z6.bind(null,e.eventManager),e.Pu.yu=ej.bind(null,e.eventManager),e}function yj(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dj.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fj.bind(null,e),e}class Vc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ih(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return E6(this.persistence,new v6,e.initialUser,this.serializer)}Cu(e){return new YS(Og.mi,this.serializer)}Du(e){return new C6}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vc.provider={build:()=>new Vc};class vj extends Vc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){he(this.persistence.referenceDelegate instanceof Nc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new r6(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new YS(r=>Nc.mi(r,n),this.serializer)}}class jp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>z1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mj.bind(null,this.syncEngine),await Y6(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new J6}()}createDatastore(e){const n=Ih(e.databaseInfo.databaseId),r=function(s){return new D6(s)}(e.databaseInfo);return function(s,o,a,l){return new M6(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new F6(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>z1(this.syncEngine,n,0),function(){return O1.v()?new O1:new k6}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const d=new ij(i,s,o,a,l,c);return h&&(d.gu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);W(Bi,"RemoteStore shutting down."),s.Ea.add(5),await wl(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}jp.provider={build:()=>new jp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):er("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti="FirestoreClient";class _j{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ht.UNAUTHENTICATED,this.clientId=xg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W(ti,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(ti,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Xd(t,e){t.asyncQueue.verifyOperationInProgress(),W(ti,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await XS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function W1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wj(t);W(ti,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>j1(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>j1(e.remoteStore,i)),t._onlineComponents=e}async function wj(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(ti,"Using user provided OfflineComponentProvider");try{await Xd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ws("Error using user provided cache. Falling back to memory cache: "+n),await Xd(t,new Vc)}}else W(ti,"Using default OfflineComponentProvider"),await Xd(t,new vj(void 0));return t._offlineComponents}async function _P(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(ti,"Using user provided OnlineComponentProvider"),await W1(t,t._uninitializedComponentsProvider._online)):(W(ti,"Using default OnlineComponentProvider"),await W1(t,new jp))),t._onlineComponents}function Ej(t){return _P(t).then(e=>e.syncEngine)}async function wP(t){const e=await _P(t),n=e.eventManager;return n.onListen=sj.bind(null,e.syncEngine),n.onUnlisten=lj.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=oj.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=uj.bind(null,e.syncEngine),n}function Tj(t,e,n={}){const r=new Wn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new vP({next:p=>{h.Nu(),o.enqueueAndForget(()=>lP(s,d));const y=p.docs.has(a);!y&&p.fromCache?c.reject(new $(j.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&p.fromCache&&l&&l.source==="server"?c.reject(new $(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),d=new uP(kg(a.path),h,{includeMetadataChanges:!0,qa:!0});return aP(s,d)}(await wP(t),t.asyncQueue,e,n,r)),r.promise}function xj(t,e,n={}){const r=new Wn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new vP({next:p=>{h.Nu(),o.enqueueAndForget(()=>lP(s,d)),p.fromCache&&l.source==="server"?c.reject(new $(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),d=new uP(a,h,{includeMetadataChanges:!0,qa:!0});return aP(s,d)}(await wP(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EP(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP="firestore.googleapis.com",q1=!0;class G1{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=TP,this.ssl=q1}else this.host=e.host,this.ssl=e.ssl??q1;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=QS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<t6)throw new $(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}F5("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=EP(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ah{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new G1({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new G1(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new k5;switch(r.type){case"firstParty":return new D5(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=H1.get(n);r&&(W("ComponentProvider","Removing Datastore"),H1.delete(n),r.terminate())}(this),Promise.resolve()}}function Ij(t,e,n,r={}){var c;t=tr(t,Ah);const i=ro(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;i&&(dI(`https://${a}`),fI("Firestore",!0)),s.host!==TP&&s.host!==a&&Ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:a,ssl:i,emulatorOptions:r};if(!Mi(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=ht.MOCK_USER;else{h=UL(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new $(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new ht(p)}t._authCredentials=new R5(new oS(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qi(this.firestore,e,this._query)}}class ze{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}toJSON(){return{type:ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(yl(n,ze._jsonSchema))return new ze(e,r||null,new q(ge.fromString(n.referencePath)))}}ze._jsonSchemaVersion="firestore/documentReference/1.0",ze._jsonSchema={type:Be("string",ze._jsonSchemaVersion),referencePath:Be("string")};class Hr extends Qi{constructor(e,n,r){super(e,n,kg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new q(e))}withConverter(e){return new Hr(this.firestore,e,this._path)}}function xP(t,e,...n){if(t=Je(t),aS("collection","path",e),t instanceof Ah){const r=ge.fromString(e,...n);return o1(r),new Hr(t,null,r)}{if(!(t instanceof ze||t instanceof Hr))throw new $(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return o1(r),new Hr(t.firestore,null,r)}}function Ch(t,e,...n){if(t=Je(t),arguments.length===1&&(e=xg.newId()),aS("doc","path",e),t instanceof Ah){const r=ge.fromString(e,...n);return s1(r),new ze(t,null,new q(r))}{if(!(t instanceof ze||t instanceof Hr))throw new $(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return s1(r),new ze(t.firestore,t instanceof Hr?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1="AsyncQueue";class Q1{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ZS(this,"async_queue_retry"),this._c=()=>{const r=Yd();r&&W(K1,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Yd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Yd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Wn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!uo(e))throw e;W(K1,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,er("INTERNAL UNHANDLED ERROR: ",Y1(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=$g.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&X(47125,{Pc:Y1(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Y1(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class fo extends Ah{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Q1,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Q1(e),this._firestoreClient=void 0,await e}}}function Sj(t,e){const n=typeof t=="object"?t:yI(),r=typeof t=="string"?t:e||Ac,i=fg(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=jL("firestore");s&&Ij(i,...s)}return i}function Kg(t){if(t._terminated)throw new $(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Pj(t),t._firestoreClient}function Pj(t){var r,i,s;const e=t._freezeSettings(),n=function(a,l,c,h){return new Y5(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,EP(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new _j(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qt(st.fromBase64String(e))}catch(n){throw new $(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qt(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(yl(e,qt._jsonSchema))return qt.fromBase64String(e.bytes)}}qt._jsonSchemaVersion="firestore/bytes/1.0",qt._jsonSchema={type:Be("string",qt._jsonSchemaVersion),bytes:Be("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:kn._jsonSchemaVersion}}static fromJSON(e){if(yl(e,kn._jsonSchema))return new kn(e.latitude,e.longitude)}}kn._jsonSchemaVersion="firestore/geoPoint/1.0",kn._jsonSchema={type:Be("string",kn._jsonSchemaVersion),latitude:Be("number"),longitude:Be("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Rn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(yl(e,Rn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Rn(e.vectorValues);throw new $(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Rn._jsonSchemaVersion="firestore/vectorValue/1.0",Rn._jsonSchema={type:Be("string",Rn._jsonSchemaVersion),vectorValues:Be("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aj=/^__.*__$/;class Cj{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new li(e,this.data,this.fieldMask,n,this.fieldTransforms):new vl(e,this.data,n,this.fieldTransforms)}}class IP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new li(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function SP(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{Ac:t})}}class Qg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Qg({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Lc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(SP(this.Ac)&&Aj.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class kj{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ih(e)}Cc(e,n,r,i=!1){return new Qg({Ac:e,methodName:n,Dc:r,path:nt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yg(t){const e=t._freezeSettings(),n=Ih(t._databaseId);return new kj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Rj(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);Jg("Data must be an object, but it was:",o,r);const a=PP(r,o);let l,c;if(s.merge)l=new Ot(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const p=Fp(e,d,n);if(!o.contains(p))throw new $(j.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);CP(h,p)||h.push(p)}l=new Ot(h),c=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=o.fieldTransforms;return new Cj(new At(a),l,c)}class bh extends Rh{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bh}}class Xg extends Rh{_toFieldTransform(e){return new E3(e.path,new Qa)}isEqual(e){return e instanceof Xg}}function bj(t,e,n,r){const i=t.Cc(1,e,n);Jg("Data must be an object, but it was:",i,r);const s=[],o=At.empty();ai(r,(l,c)=>{const h=Zg(e,l,n);c=Je(c);const d=i.yc(h);if(c instanceof bh)s.push(h);else{const p=Tl(c,d);p!=null&&(s.push(h),o.set(h,p))}});const a=new Ot(s);return new IP(o,a,i.fieldTransforms)}function Nj(t,e,n,r,i,s){const o=t.Cc(1,e,n),a=[Fp(e,r,n)],l=[i];if(s.length%2!=0)throw new $(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(Fp(e,s[p])),l.push(s[p+1]);const c=[],h=At.empty();for(let p=a.length-1;p>=0;--p)if(!CP(c,a[p])){const y=a[p];let x=l[p];x=Je(x);const S=o.yc(y);if(x instanceof bh)c.push(y);else{const C=Tl(x,S);C!=null&&(c.push(y),h.set(y,C))}}const d=new Ot(c);return new IP(h,d,o.fieldTransforms)}function Dj(t,e,n,r=!1){return Tl(n,t.Cc(r?4:3,e))}function Tl(t,e){if(AP(t=Je(t)))return Jg("Unsupported field value:",e,t),PP(t,e);if(t instanceof Rh)return function(r,i){if(!SP(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Tl(a,i.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return v3(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=we.fromDate(r);return{timestampValue:bc(i.serializer,s)}}if(r instanceof we){const s=new we(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bc(i.serializer,s)}}if(r instanceof kn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qt)return{bytesValue:zS(i.serializer,r._byteString)};if(r instanceof ze){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Vg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Rn)return function(o,a){return{mapValue:{fields:{[gS]:{stringValue:vS},[Cc]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Sc("VectorValues must only contain numeric values.");return Rg(a.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${mh(r)}`)}(t,e)}function PP(t,e){const n={};return cS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ai(t,(r,i)=>{const s=Tl(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function AP(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof kn||t instanceof qt||t instanceof ze||t instanceof Rh||t instanceof Rn)}function Jg(t,e,n){if(!AP(n)||!lS(n)){const r=mh(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Fp(t,e,n){if((e=Je(e))instanceof kh)return e._internalPath;if(typeof e=="string")return Zg(t,e);throw Lc("Field path arguments must be of type string or ",t,!1,void 0,n)}const Vj=new RegExp("[~\\*/\\[\\]]");function Zg(t,e,n){if(e.search(Vj)>=0)throw Lc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kh(...e.split("."))._internalPath}catch{throw Lc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Lc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new $(j.INVALID_ARGUMENT,a+t+l)}function CP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Lj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ey("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Lj extends kP{data(){return super.data()}}function ey(t,e){return typeof e=="string"?Zg(t,e):e instanceof kh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oj(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ty{}class RP extends ty{}function Mj(t,e,...n){let r=[];e instanceof ty&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof ry).length,a=s.filter(l=>l instanceof ny).length;if(o>1||o>0&&a>0)throw new $(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class ny extends RP{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ny(e,n,r)}_apply(e){const n=this._parse(e);return bP(e._query,n),new Qi(e.firestore,e.converter,Cp(e._query,n))}_parse(e){const n=Yg(e.firestore);return function(s,o,a,l,c,h,d){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new $(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){J1(d,h);const x=[];for(const S of d)x.push(X1(l,s,S));p={arrayValue:{values:x}}}else p=X1(l,s,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||J1(d,h),p=Dj(a,o,d,h==="in"||h==="not-in");return Ue.create(c,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class ry extends ty{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ry(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)bP(o,l),o=Cp(o,l)}(e._query,n),new Qi(e.firestore,e.converter,Cp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class iy extends RP{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new iy(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ka(s,o)}(e._query,this._field,this._direction);return new Qi(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new co(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function jj(t,e="asc"){const n=e,r=ey("orderBy",t);return iy._create(r,n)}function X1(t,e,n){if(typeof(n=Je(n))=="string"){if(n==="")throw new $(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!PS(e)&&n.indexOf("/")!==-1)throw new $(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!q.isDocumentKey(r))throw new $(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return p1(t,new q(r))}if(n instanceof ze)return p1(t,n._key);throw new $(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mh(n)}.`)}function J1(t,e){if(!Array.isArray(t)||t.length===0)throw new $(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function bP(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Fj{convertValue(e,n="none"){switch(Zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ai(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Cc].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ve(o.doubleValue));return new Rn(n)}convertGeoPoint(e){return new kn(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=vh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ha(e));default:return null}}convertTimestamp(e){const n=Xr(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);he(KS(r),9688,{name:e});const i=new qa(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||er(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uj(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Zo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ki extends kP{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Mu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ey("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ki._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ki._jsonSchemaVersion="firestore/documentSnapshot/1.0",ki._jsonSchema={type:Be("string",ki._jsonSchemaVersion),bundleSource:Be("string","DocumentSnapshot"),bundleName:Be("string"),bundle:Be("string")};class Mu extends ki{data(e={}){return super.data(e)}}class Ns{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Zo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Mu(this._firestore,this._userDataWriter,r.key,r,new Zo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Mu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Zo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Mu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Zo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:Bj(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ns._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Bj(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zj(t){t=tr(t,ze);const e=tr(t.firestore,fo);return Tj(Kg(e),t._key).then(n=>Gj(e,t,n))}Ns._jsonSchemaVersion="firestore/querySnapshot/1.0",Ns._jsonSchema={type:Be("string",Ns._jsonSchemaVersion),bundleSource:Be("string","QuerySnapshot"),bundleName:Be("string"),bundle:Be("string")};class NP extends Fj{constructor(e){super(),this.firestore=e}convertBytes(e){return new qt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,n)}}function $j(t){t=tr(t,Qi);const e=tr(t.firestore,fo),n=Kg(e),r=new NP(e);return Oj(t._query),xj(n,t._query).then(i=>new Ns(e,r,t,i))}function Wj(t,e,n,...r){t=tr(t,ze);const i=tr(t.firestore,fo),s=Yg(i);let o;return o=typeof(e=Je(e))=="string"||e instanceof kh?Nj(s,"updateDoc",t._key,e,n,r):bj(s,"updateDoc",t._key,e),sy(i,[o.toMutation(t._key,un.exists(!0))])}function Hj(t){return sy(tr(t.firestore,fo),[new bg(t._key,un.none())])}function qj(t,e){const n=tr(t.firestore,fo),r=Ch(t),i=Uj(t.converter,e);return sy(n,[Rj(Yg(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,un.exists(!1))]).then(()=>r)}function sy(t,e){return function(r,i){const s=new Wn;return r.asyncQueue.enqueueAndForget(async()=>cj(await Ej(r),i,s)),s.promise}(Kg(t),e)}function Gj(t,e,n){const r=n.docs.get(e._key),i=new NP(t);return new ki(t,i,e._key,r,new Zo(n.hasPendingWrites,n.fromCache),e.converter)}function Up(){return new Xg("serverTimestamp")}(function(e,n=!0){(function(i){ao=i})(io),zs(new ji("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new fo(new b5(r.getProvider("auth-internal")),new V5(o,r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new $(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qa(c.options.projectId,h)}(o,i),o);return s={useFetchStreams:n,...s},a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),zr(t1,n1,e),zr(t1,n1,"esm2020")})();const Kj={apiKey:"AIzaSyCtBBgxj1rRlsqjy1G0e6Wx1ebThvRjLCI",authDomain:"website-funiture.firebaseapp.com",projectId:"website-funiture",storageBucket:"website-funiture.firebasestorage.app",messagingSenderId:"958390572994",appId:"1:958390572994:web:94ad0df122523abe27e85b",measurementId:"G-VLBF47PD3C"},DP=gI(Kj),oy=S5(DP),xl=Sj(DP),Qj=async(t,e)=>{try{return{success:!0,user:(await c4(oy,t,e)).user}}catch(n){console.error("Login error:",n);let r="Login gagal. Silakan coba lagi.";return n.code==="auth/user-not-found"?r="Email tidak terdaftar.":n.code==="auth/wrong-password"?r="Password salah.":n.code==="auth/invalid-email"&&(r="Format email tidak valid."),{success:!1,error:r}}},Yj=async()=>{try{return await p4(oy),{success:!0}}catch(t){return console.error("Logout error:",t),{success:!1,error:"Logout gagal."}}},Xj=t=>f4(oy,t),Jj=()=>{const[t,e]=N.useState(""),[n,r]=N.useState(""),[i,s]=N.useState(!1),o=no(),a=async l=>{l.preventDefault(),s(!0);const c=await Qj(t,n);c.success?(Q.success("Login berhasil!"),o("/admin/dashboard")):Q.error(c.error),s(!1)};return g.jsxs("div",{className:"login-container",children:[g.jsxs("div",{className:"login-box",children:[g.jsxs("div",{className:"login-header",children:[g.jsx("h1",{children:"LuxeLiving Admin"}),g.jsx("p",{children:"Manage your furniture products"})]}),g.jsxs("form",{onSubmit:a,className:"login-form",children:[g.jsxs("div",{className:"form-group",children:[g.jsx("label",{children:"Email"}),g.jsx("input",{type:"email",value:t,onChange:l=>e(l.target.value),placeholder:"admin@luxeliving.com",required:!0,disabled:i})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{children:"Password"}),g.jsx("input",{type:"password",value:n,onChange:l=>r(l.target.value),placeholder:"••••••••",required:!0,disabled:i})]}),g.jsx("button",{type:"submit",className:"btn-login",disabled:i,children:i?"Logging in...":"Login"})]}),g.jsx("div",{className:"login-footer",children:g.jsx("a",{href:"/",children:"← Back to Website"})})]}),g.jsx("style",{children:`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem;
        }

        .login-box {
          background: white;
          padding: 3rem;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          width: 100%;
          max-width: 420px;
        }

        .login-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .login-header h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: #2A2A2A;
        }

        .login-header p {
          color: #666;
          font-size: 0.95rem;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 600;
          color: #333;
          font-size: 0.9rem;
        }

        .form-group input {
          padding: 0.875rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-group input:disabled {
          background: #f5f5f5;
          cursor: not-allowed;
        }

        .btn-login {
          padding: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-login:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }

        .btn-login:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .login-footer {
          margin-top: 1.5rem;
          text-align: center;
        }

        .login-footer a {
          color: #667eea;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .login-footer a:hover {
          color: #764ba2;
        }

        @media (max-width: 480px) {
          .login-box {
            padding: 2rem;
          }

          .login-header h1 {
            font-size: 1.5rem;
          }
        }
      `})]})},Ja=()=>{const t=ir(),e=no(),n=async()=>{(await Yj()).success&&(Q.success("Logout berhasil!"),e("/admin/login"))},r=[{path:"/admin/dashboard",icon:g.jsx(XR,{}),label:"Dashboard"},{path:"/admin/products",icon:g.jsx(uc,{}),label:"Products"}];return g.jsxs("div",{className:"sidebar",children:[g.jsxs("div",{className:"sidebar-header",children:[g.jsx("h2",{children:"LuxeLiving"}),g.jsx("p",{children:"Admin Panel"})]}),g.jsx("nav",{className:"sidebar-nav",children:r.map(i=>g.jsxs(Or,{to:i.path,className:`nav-item ${t.pathname===i.path?"active":""}`,children:[i.icon,g.jsx("span",{children:i.label})]},i.path))}),g.jsxs("div",{className:"sidebar-footer",children:[g.jsxs("a",{href:"/",target:"_blank",rel:"noopener noreferrer",className:"nav-item",children:[g.jsx(ZR,{}),g.jsx("span",{children:"View Website"})]}),g.jsxs("button",{onClick:n,className:"nav-item logout-btn",children:[g.jsx(tb,{}),g.jsx("span",{children:"Logout"})]})]}),g.jsx("style",{children:`
        .sidebar {
          width: 250px;
          height: 100vh;
          background: #1a1a2e;
          color: white;
          display: flex;
          flex-direction: column;
          position: fixed;
          left: 0;
          top: 0;
        }

        .sidebar-header {
          padding: 2rem 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .sidebar-header h2 {
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
          color: white;
        }

        .sidebar-header p {
          font-size: 0.85rem;
          color: #999;
        }

        .sidebar-nav {
          flex: 1;
          padding: 1.5rem 0;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.875rem 1.5rem;
          color: #ccc;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          background: none;
          border: none;
          width: 100%;
          font-size: 0.95rem;
        }

        .nav-item:hover {
          background: rgba(255,255,255,0.05);
          color: white;
        }

        .nav-item.active {
          background: rgba(212, 163, 115, 0.15);
          color: #D4A373;
          border-left: 3px solid #D4A373;
        }

        .nav-item svg {
          font-size: 1.25rem;
        }

        .sidebar-footer {
          padding: 1rem 0;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .logout-btn {
          color: #ff6b6b;
        }

        .logout-btn:hover {
          background: rgba(255, 107, 107, 0.1);
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 70px;
          }

          .sidebar-header h2,
          .sidebar-header p,
          .nav-item span {
            display: none;
          }

          .nav-item {
            justify-content: center;
          }
        }
      `})]})},Zj="594122933f07f863ffa70bee07bf804c",eF="https://api.imgbb.com/1/upload",tF=async t=>{try{const e=new FormData;e.append("image",t),e.append("key",Zj);const r=await(await fetch(eF,{method:"POST",body:e})).json();return r.success?{success:!0,imageUrl:r.data.url,displayUrl:r.data.display_url,deleteUrl:r.data.delete_url}:{success:!1,error:"Upload gagal. Silakan coba lagi."}}catch(e){return console.error("ImgBB upload error:",e),{success:!1,error:"Gagal mengupload gambar. Periksa koneksi internet Anda."}}},Il="products",VP=async()=>{try{const t=xP(xl,Il),e=Mj(t,jj("createdAt","desc")),n=await $j(e),r=[];return n.forEach(i=>{r.push({id:i.id,...i.data()})}),{success:!0,products:r}}catch(t){return console.error("Error fetching products:",t),{success:!1,error:"Gagal mengambil data produk."}}},nF=async t=>{try{const e=Ch(xl,Il,t),n=await zj(e);return n.exists()?{success:!0,product:{id:n.id,...n.data()}}:{success:!1,error:"Produk tidak ditemukan."}}catch(e){return console.error("Error fetching product:",e),{success:!1,error:"Gagal mengambil data produk."}}},rF=async t=>{try{const e=xP(xl,Il),n={...t,createdAt:Up(),updatedAt:Up()};return{success:!0,productId:(await qj(e,n)).id}}catch(e){return console.error("Error adding product:",e),{success:!1,error:"Gagal menambah produk."}}},iF=async(t,e)=>{try{const n=Ch(xl,Il,t),r={...e,updatedAt:Up()};return await Wj(n,r),{success:!0}}catch(n){return console.error("Error updating product:",n),{success:!1,error:"Gagal mengupdate produk."}}},sF=async t=>{try{const e=Ch(xl,Il,t);return await Hj(e),{success:!0}}catch(e){return console.error("Error deleting product:",e),{success:!1,error:"Gagal menghapus produk."}}},LP=async t=>{try{const e=await tF(t);return e.success?{success:!0,imageUrl:e.imageUrl}:e}catch(e){return console.error("Error uploading image:",e),{success:!1,error:"Gagal mengupload gambar."}}},oF=()=>{const[t,e]=N.useState({totalProducts:0,loading:!0});N.useEffect(()=>{n()},[]);const n=async()=>{const r=await VP();r.success?e({totalProducts:r.products.length,loading:!1}):e({...t,loading:!1})};return g.jsxs("div",{className:"admin-layout",children:[g.jsx(Ja,{}),g.jsxs("div",{className:"admin-content",children:[g.jsxs("div",{className:"page-header",children:[g.jsx("h1",{children:"Dashboard"}),g.jsx("p",{children:"Welcome to LuxeLiving Admin Panel"})]}),g.jsxs("div",{className:"stats-grid",children:[g.jsxs("div",{className:"stat-card",children:[g.jsx("div",{className:"stat-icon products",children:g.jsx(uc,{})}),g.jsxs("div",{className:"stat-info",children:[g.jsx("h3",{children:t.loading?"...":t.totalProducts}),g.jsx("p",{children:"Total Products"})]})]}),g.jsxs("div",{className:"stat-card",children:[g.jsx("div",{className:"stat-icon trending",children:g.jsx(ab,{})}),g.jsxs("div",{className:"stat-info",children:[g.jsx("h3",{children:"Active"}),g.jsx("p",{children:"Status"})]})]})]}),g.jsxs("div",{className:"quick-actions",children:[g.jsx("h2",{children:"Quick Actions"}),g.jsxs("div",{className:"actions-grid",children:[g.jsxs(Or,{to:"/admin/products/add",className:"action-card",children:[g.jsx(Jf,{}),g.jsx("h3",{children:"Add New Product"}),g.jsx("p",{children:"Create a new furniture product"})]}),g.jsxs(Or,{to:"/admin/products",className:"action-card",children:[g.jsx(uc,{}),g.jsx("h3",{children:"Manage Products"}),g.jsx("p",{children:"View, edit, or delete products"})]})]})]})]}),g.jsx("style",{children:`
        .admin-layout {
          display: flex;
          min-height: 100vh;
          background: #f5f5f5;
        }

        .admin-content {
          margin-left: 250px;
          flex: 1;
          padding: 2rem;
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-header h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: #1a1a2e;
        }

        .page-header p {
          color: #666;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
        }

        .stat-icon.products {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .stat-icon.trending {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }

        .stat-info h3 {
          font-size: 1.75rem;
          margin-bottom: 0.25rem;
          color: #1a1a2e;
        }

        .stat-info p {
          color: #666;
          font-size: 0.9rem;
        }

        .quick-actions h2 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #1a1a2e;
        }

        .actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .action-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          border: 2px solid transparent;
        }

        .action-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          border-color: #D4A373;
        }

        .action-card svg {
          font-size: 2.5rem;
          color: #D4A373;
          margin-bottom: 1rem;
        }

        .action-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: #1a1a2e;
        }

        .action-card p {
          color: #666;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .admin-content {
            margin-left: 70px;
            padding: 1rem;
          }

          .stats-grid,
          .actions-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},aF=()=>{const[t,e]=N.useState([]),[n,r]=N.useState(!0),[i,s]=N.useState(""),[o,a]=N.useState(null);N.useEffect(()=>{l()},[]);const l=async()=>{r(!0);const d=await VP();d.success?e(d.products):Q.error(d.error),r(!1)},c=async d=>{const p=await sF(d);p.success?(Q.success("Produk berhasil dihapus!"),l(),a(null)):Q.error(p.error)},h=t.filter(d=>d.name.toLowerCase().includes(i.toLowerCase())||d.category.toLowerCase().includes(i.toLowerCase()));return g.jsxs("div",{className:"admin-layout",children:[g.jsx(Ja,{}),g.jsxs("div",{className:"admin-content",children:[g.jsxs("div",{className:"page-header",children:[g.jsxs("div",{children:[g.jsx("h1",{children:"Products"}),g.jsx("p",{children:"Manage your furniture catalog"})]}),g.jsxs(Or,{to:"/admin/products/add",className:"btn-primary",children:[g.jsx(Jf,{})," Add New Product"]})]}),g.jsxs("div",{className:"search-box",children:[g.jsx(MT,{}),g.jsx("input",{type:"text",placeholder:"Search products...",value:i,onChange:d=>s(d.target.value)})]}),n?g.jsx("div",{className:"loading",children:"Loading products..."}):h.length===0?g.jsxs("div",{className:"empty-state",children:[g.jsx(uc,{style:{fontSize:"3rem",color:"#ccc"}}),g.jsx("h3",{children:"No products found"}),g.jsx("p",{children:"Start by adding your first product"}),g.jsxs(Or,{to:"/admin/products/add",className:"btn-primary",children:[g.jsx(Jf,{})," Add Product"]})]}):g.jsx("div",{className:"products-table",children:g.jsxs("table",{children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"Image"}),g.jsx("th",{children:"Name"}),g.jsx("th",{children:"Category"}),g.jsx("th",{children:"Price"}),g.jsx("th",{children:"Actions"})]})}),g.jsx("tbody",{children:h.map(d=>g.jsxs("tr",{children:[g.jsx("td",{children:g.jsx("img",{src:d.image,alt:d.name,className:"product-thumb"})}),g.jsx("td",{children:g.jsx("strong",{children:d.name})}),g.jsx("td",{children:g.jsx("span",{className:"badge",children:d.category})}),g.jsx("td",{children:g.jsx("strong",{children:d.price})}),g.jsx("td",{children:g.jsxs("div",{className:"actions",children:[g.jsxs(Or,{to:`/admin/products/edit/${d.id}`,className:"btn-edit",children:[g.jsx(YR,{})," Edit"]}),g.jsxs("button",{onClick:()=>a(d),className:"btn-delete",children:[g.jsx(ob,{})," Delete"]})]})})]},d.id))})]})}),o&&g.jsx("div",{className:"modal-overlay",onClick:()=>a(null),children:g.jsxs("div",{className:"modal",onClick:d=>d.stopPropagation(),children:[g.jsx("h2",{children:"Delete Product?"}),g.jsxs("p",{children:['Are you sure you want to delete "',g.jsx("strong",{children:o.name}),'"?']}),g.jsx("p",{children:"This action cannot be undone."}),g.jsxs("div",{className:"modal-actions",children:[g.jsx("button",{onClick:()=>a(null),className:"btn-cancel",children:"Cancel"}),g.jsx("button",{onClick:()=>c(o.id),className:"btn-delete",children:"Delete"})]})]})})]}),g.jsx("style",{children:`
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .btn-primary {
          background: #D4A373;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: #c59363;
          transform: translateY(-2px);
        }

        .search-box {
          background: white;
          padding: 1rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .search-box svg {
          color: #999;
          font-size: 1.25rem;
        }

        .search-box input {
          border: none;
          outline: none;
          flex: 1;
          font-size: 1rem;
        }

        .loading {
          text-align: center;
          padding: 3rem;
          color: #999;
        }

        .empty-state {
          background: white;
          padding: 4rem 2rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .empty-state h3 {
          margin: 1rem 0 0.5rem;
          color: #1a1a2e;
        }

        .empty-state p {
          color: #999;
          margin-bottom: 1.5rem;
        }

        .products-table {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        thead {
          background: #f8f9fa;
        }

        th {
          text-align: left;
          padding: 1rem;
          font-weight: 600;
          color: #1a1a2e;
          border-bottom: 2px solid #e0e0e0;
        }

        td {
          padding: 1rem;
          border-bottom: 1px solid #f0f0f0;
        }

        .product-thumb {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 8px;
        }

        .badge {
          background: #e7f3ff;
          color: #0066cc;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .actions {
          display: flex;
          gap: 0.5rem;
        }

        .btn-edit,
        .btn-delete {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-edit {
          background: #e7f3ff;
          color: #0066cc;
        }

        .btn-edit:hover {
          background: #cce5ff;
        }

        .btn-delete {
          background: #ffe7e7;
          color: #cc0000;
        }

        .btn-delete:hover {
          background: #ffcccc;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          max-width: 400px;
          width: 90%;
        }

        .modal h2 {
          margin-bottom: 1rem;
          color: #1a1a2e;
        }

        .modal p {
          margin-bottom: 1rem;
          color: #666;
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          margin-top: 1.5rem;
        }

        .btn-cancel {
          padding: 0.75rem 1.5rem;
          border: 1px solid #ddd;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          table {
            font-size: 0.85rem;
          }

          th, td {
            padding: 0.75rem 0.5rem;
          }

          .product-thumb {
            width: 40px;
            height: 40px;
          }

          .actions {
            flex-direction: column;
          }
        }
      `})]})},lF=()=>{const t=no(),[e,n]=N.useState(!1),[r,i]=N.useState(null),[s,o]=N.useState(null),[a,l]=N.useState({name:"",category:"",price:"",description:"",image:""}),c=["Sofa","Meja","Kursi","Tempat Tidur","Lemari","Lampu"],h=y=>{const x=y.target.files[0];if(x){if(x.size>10*1024*1024){Q.error("Ukuran gambar maksimal 10MB");return}o(x),i(URL.createObjectURL(x)),l({...a,image:""})}},d=y=>{l({...a,[y.target.name]:y.target.value})},p=async y=>{if(y.preventDefault(),!a.name||!a.category||!a.price||!a.description){Q.error("Semua field harus diisi!");return}if(!s&&!a.image){Q.error("Gambar produk harus diupload atau URL diisi!");return}n(!0);try{let x=a.image;if(s){Q.info("Uploading image...");const w=await LP(s);if(!w.success){Q.error(w.error),n(!1);return}x=w.imageUrl}const S={name:a.name,category:a.category,price:a.price,description:a.description,image:x},C=await rF(S);C.success?(Q.success("Produk berhasil ditambahkan!"),t("/admin/products")):Q.error(C.error)}catch(x){console.error("Error:",x),Q.error("Gagal menambahkan produk")}n(!1)};return g.jsxs("div",{className:"admin-layout",children:[g.jsx(Ja,{}),g.jsxs("div",{className:"admin-content",children:[g.jsxs("div",{className:"page-header",children:[g.jsxs("div",{children:[g.jsx("h1",{children:"Add New Product"}),g.jsx("p",{className:"subtitle",children:"Create a new furniture product for your catalog"})]}),g.jsx("button",{onClick:()=>t("/admin/products"),className:"btn-back",children:"← Back to Products"})]}),g.jsx("div",{className:"form-container",children:g.jsxs("form",{onSubmit:p,children:[g.jsxs("div",{className:"form-section upload-section",children:[g.jsxs("div",{className:"section-header",children:[g.jsx(eb,{}),g.jsxs("div",{children:[g.jsx("h3",{children:"Product Image"}),g.jsx("p",{children:"Upload a high-quality image or provide an image URL"})]})]}),g.jsxs("div",{className:"upload-wrapper",children:[r?g.jsxs("div",{className:"image-preview-container",children:[g.jsxs("div",{className:"image-preview",children:[g.jsx("img",{src:r,alt:"Preview"}),g.jsx("button",{type:"button",onClick:()=>{i(null),o(null)},className:"remove-image",title:"Remove image",children:g.jsx(zm,{})})]}),g.jsxs("p",{className:"image-info",children:[g.jsx(KR,{})," Image ready to upload"]})]}):g.jsx("div",{className:"upload-area",children:g.jsxs("label",{className:"upload-label",children:[g.jsx(Zf,{className:"upload-icon"}),g.jsx("span",{className:"upload-title",children:"Click to upload image"}),g.jsx("span",{className:"upload-subtitle",children:"or drag and drop"}),g.jsx("span",{className:"upload-format",children:"PNG, JPG, WEBP (max 10MB)"}),g.jsx("input",{type:"file",accept:"image/*",onChange:h,hidden:!0})]})}),g.jsx("div",{className:"divider-or",children:g.jsx("span",{children:"OR"})}),g.jsxs("div",{className:"url-input-wrapper",children:[g.jsx("label",{children:"Image URL"}),g.jsx("input",{type:"url",name:"image",value:a.image,onChange:d,placeholder:"https://example.com/image.jpg",disabled:!!s,className:"url-input"}),g.jsx("small",{children:"Paste a direct link to an image from the web"})]})]})]}),g.jsxs("div",{className:"form-section",children:[g.jsxs("div",{className:"section-header",children:[g.jsx("h3",{children:"Product Details"}),g.jsx("p",{children:"Fill in the product information"})]}),g.jsxs("div",{className:"form-grid",children:[g.jsxs("div",{className:"form-group full-width",children:[g.jsxs("label",{children:["Product Name ",g.jsx("span",{className:"required",children:"*"})]}),g.jsx("input",{type:"text",name:"name",value:a.name,onChange:d,placeholder:"e.g. Modern Minimalist Sofa",required:!0})]}),g.jsxs("div",{className:"form-group",children:[g.jsxs("label",{children:["Category ",g.jsx("span",{className:"required",children:"*"})]}),g.jsxs("select",{name:"category",value:a.category,onChange:d,required:!0,children:[g.jsx("option",{value:"",children:"Select Category"}),c.map(y=>g.jsx("option",{value:y,children:y},y))]})]}),g.jsxs("div",{className:"form-group",children:[g.jsxs("label",{children:["Price ",g.jsx("span",{className:"required",children:"*"})]}),g.jsx("input",{type:"text",name:"price",value:a.price,onChange:d,placeholder:"e.g. Rp 5.500.000",required:!0})]}),g.jsxs("div",{className:"form-group full-width",children:[g.jsxs("label",{children:["Description ",g.jsx("span",{className:"required",children:"*"})]}),g.jsx("textarea",{name:"description",value:a.description,onChange:d,placeholder:"Describe the product features, materials, dimensions, etc.",rows:"5",required:!0})]})]})]}),g.jsxs("div",{className:"form-actions",children:[g.jsx("button",{type:"button",onClick:()=>t("/admin/products"),className:"btn-cancel",disabled:e,children:"Cancel"}),g.jsx("button",{type:"submit",className:"btn-submit",disabled:e,children:e?g.jsxs(g.Fragment,{children:[g.jsx("span",{className:"spinner"}),"Saving..."]}):g.jsxs(g.Fragment,{children:[g.jsx(OT,{}),"Save Product"]})})]})]})})]}),g.jsx("style",{children:`
        .admin-content {
          margin-left: 250px;
          padding: 2rem;
          min-height: 100vh;
          background: #f5f7fa;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
        }

        .page-header h1 {
          font-size: 2rem;
          color: #1a1a2e;
          margin-bottom: 0.5rem;
        }

        .subtitle {
          color: #666;
          font-size: 0.95rem;
        }

        .btn-back {
          padding: 0.75rem 1.5rem;
          background: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-weight: 600;
          color: #666;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-back:hover {
          background: #f5f5f5;
          border-color: #D4A373;
          color: #D4A373;
        }

        .form-container {
          background: white;
          border-radius: 16px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          max-width: 900px;
        }

        .form-section {
          padding: 2.5rem;
          border-bottom: 1px solid #f0f0f0;
        }

        .form-section:last-of-type {
          border-bottom: none;
        }

        .upload-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
        }

        .section-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .section-header svg {
          font-size: 1.5rem;
          color: #D4A373;
          margin-top: 0.25rem;
        }

        .section-header h3 {
          font-size: 1.25rem;
          color: #1a1a2e;
          margin-bottom: 0.25rem;
        }

        .section-header p {
          color: #666;
          font-size: 0.9rem;
        }

        .upload-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .upload-area {
          border: 2px dashed #d0d0d0;
          border-radius: 12px;
          background: white;
          transition: all 0.3s ease;
        }

        .upload-area:hover {
          border-color: #D4A373;
          background: #fefaf5;
        }

        .upload-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;
          cursor: pointer;
          text-align: center;
        }

        .upload-icon {
          font-size: 3.5rem;
          color: #D4A373;
          margin-bottom: 1rem;
        }

        .upload-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 0.5rem;
          display: block;
        }

        .upload-subtitle {
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 0.75rem;
          display: block;
        }

        .upload-format {
          font-size: 0.85rem;
          color: #999;
          background: #f5f5f5;
          padding: 0.5rem 1rem;
          border-radius: 20px;
        }

        .image-preview-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .image-preview {
          position: relative;
          max-width: 400px;
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .image-preview img {
          width: 100%;
          display: block;
        }

        .remove-image {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: #ff4444;
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }

        .remove-image:hover {
          background: #cc0000;
          transform: scale(1.1);
        }

        .image-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #22c55e;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .divider-or {
          text-align: center;
          position: relative;
          margin: 1rem 0;
        }

        .divider-or span {
          background: white;
          padding: 0 1rem;
          color: #999;
          font-weight: 600;
          font-size: 0.85rem;
          position: relative;
          z-index: 1;
        }

        .divider-or::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #e0e0e0;
        }

        .url-input-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .url-input-wrapper label {
          font-weight: 600;
          color: #333;
          font-size: 0.95rem;
        }

        .url-input {
          padding: 0.875rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .url-input:focus {
          outline: none;
          border-color: #D4A373;
          box-shadow: 0 0 0 3px rgba(212, 163, 115, 0.1);
        }

        .url-input:disabled {
          background: #f5f5f5;
          cursor: not-allowed;
          opacity: 0.6;
        }

        .url-input-wrapper small {
          color: #999;
          font-size: 0.85rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #333;
          font-size: 0.95rem;
        }

        .required {
          color: #ff4444;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.875rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #D4A373;
          box-shadow: 0 0 0 3px rgba(212, 163, 115, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-actions {
          padding: 2rem 2.5rem;
          background: #f8f9fa;
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          border-radius: 0 0 16px 16px;
        }

        .btn-cancel,
        .btn-submit {
          padding: 0.875rem 2rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-cancel {
          background: white;
          color: #666;
          border: 2px solid #ddd;
        }

        .btn-cancel:hover:not(:disabled) {
          background: #f5f5f5;
          border-color: #999;
        }

        .btn-submit {
          background: linear-gradient(135deg, #D4A373 0%, #c59363 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(212, 163, 115, 0.3);
        }

        .btn-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(212, 163, 115, 0.4);
        }

        .btn-submit:disabled,
        .btn-cancel:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid white;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .admin-content {
            margin-left: 70px;
            padding: 1rem;
          }

          .page-header {
            flex-direction: column;
            gap: 1rem;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .form-section {
            padding: 1.5rem;
          }

          .form-actions {
            padding: 1.5rem;
            flex-direction: column-reverse;
          }

          .btn-cancel,
          .btn-submit {
            width: 100%;
            justify-content: center;
          }
        }
      `})]})},uF=()=>{const{id:t}=g2(),e=no(),[n,r]=N.useState(!1),[i,s]=N.useState(!0),[o,a]=N.useState(null),[l,c]=N.useState(null),[h,d]=N.useState({name:"",category:"",price:"",description:"",image:""}),p=["Sofa","Meja","Kursi","Tempat Tidur","Lemari","Lampu"];N.useEffect(()=>{y()},[t]);const y=async()=>{const w=await nF(t);w.success?(d(w.product),a(w.product.image)):(Q.error("Produk tidak ditemukan"),e("/admin/products")),s(!1)},x=w=>{const v=w.target.files[0];if(v){if(v.size>10*1024*1024){Q.error("Ukuran gambar maksimal 10MB");return}c(v),a(URL.createObjectURL(v))}},S=w=>{d({...h,[w.target.name]:w.target.value})},C=async w=>{if(w.preventDefault(),!h.name||!h.category||!h.price||!h.description){Q.error("Semua field harus diisi!");return}r(!0);try{let v=h.image;if(l){Q.info("Uploading new image...");const L=await LP(l);if(!L.success){Q.error(L.error),r(!1);return}v=L.imageUrl}const _={name:h.name,category:h.category,price:h.price,description:h.description,image:v},b=await iF(t,_);b.success?(Q.success("Produk berhasil diupdate!"),e("/admin/products")):Q.error(b.error)}catch{Q.error("Gagal mengupdate produk")}r(!1)};return i?g.jsxs("div",{className:"admin-layout",children:[g.jsx(Ja,{}),g.jsx("div",{className:"admin-content",children:g.jsx("div",{className:"loading",children:"Loading product..."})})]}):g.jsxs("div",{className:"admin-layout",children:[g.jsx(Ja,{}),g.jsxs("div",{className:"admin-content",children:[g.jsx("div",{className:"page-header",children:g.jsx("h1",{children:"Edit Product"})}),g.jsx("div",{className:"form-container",children:g.jsxs("form",{onSubmit:C,children:[g.jsxs("div",{className:"form-section",children:[g.jsx("h3",{children:"Product Image"}),g.jsx("div",{className:"image-upload-area",children:o?g.jsxs("div",{className:"image-preview",children:[g.jsx("img",{src:o,alt:"Preview"}),g.jsx("button",{type:"button",onClick:()=>{a(null),c(null)},className:"remove-image",children:g.jsx(zm,{})}),g.jsxs("label",{className:"change-image",children:[g.jsx(Zf,{})," Change Image",g.jsx("input",{type:"file",accept:"image/*",onChange:x,hidden:!0})]})]}):g.jsxs("label",{className:"upload-label",children:[g.jsx(Zf,{}),g.jsx("span",{children:"Click to upload new image"}),g.jsx("input",{type:"file",accept:"image/*",onChange:x,hidden:!0})]})})]}),g.jsxs("div",{className:"form-section",children:[g.jsx("h3",{children:"Product Details"}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{children:"Product Name *"}),g.jsx("input",{type:"text",name:"name",value:h.name,onChange:S,required:!0})]}),g.jsxs("div",{className:"form-row",children:[g.jsxs("div",{className:"form-group",children:[g.jsx("label",{children:"Category *"}),g.jsxs("select",{name:"category",value:h.category,onChange:S,required:!0,children:[g.jsx("option",{value:"",children:"Select Category"}),p.map(w=>g.jsx("option",{value:w,children:w},w))]})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{children:"Price *"}),g.jsx("input",{type:"text",name:"price",value:h.price,onChange:S,required:!0})]})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{children:"Description *"}),g.jsx("textarea",{name:"description",value:h.description,onChange:S,rows:"4",required:!0})]})]}),g.jsxs("div",{className:"form-actions",children:[g.jsx("button",{type:"button",onClick:()=>e("/admin/products"),className:"btn-cancel",disabled:n,children:"Cancel"}),g.jsxs("button",{type:"submit",className:"btn-submit",disabled:n,children:[g.jsx(OT,{})," ",n?"Updating...":"Update Product"]})]})]})})]}),g.jsx("style",{children:`
        .form-container {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          max-width: 800px;
        }

        .form-section {
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #f0f0f0;
        }

        .form-section:last-of-type {
          border-bottom: none;
        }

        .form-section h3 {
          margin-bottom: 1.5rem;
          color: #1a1a2e;
        }

        .image-preview {
          position: relative;
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
        }

        .image-preview img {
          width: 100%;
          border-radius: 12px;
        }

        .remove-image {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255,0,0,0.8);
          color: white;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }

        .change-image {
          display: block;
          margin-top: 1rem;
          padding: 0.75rem;
          background: #D4A373;
          color: white;
          text-align: center;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .change-image:hover {
          background: #c59363;
        }

        .upload-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          border: 2px dashed #ddd;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .upload-label:hover {
          border-color: #D4A373;
        }

        .upload-label svg {
          font-size: 3rem;
          color: #D4A373;
          margin-bottom: 1rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #333;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.875rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #D4A373;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          margin-top: 2rem;
        }

        .btn-cancel,
        .btn-submit {
          padding: 0.875rem 2rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-cancel {
          background: #f0f0f0;
          color: #666;
        }

        .btn-submit {
          background: #D4A373;
          color: white;
        }

        .btn-submit:hover:not(:disabled) {
          background: #c59363;
        }

        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `})]})},cF=()=>{const[t,e]=N.useState(null),[n,r]=N.useState(!0);return N.useEffect(()=>{const i=Xj(s=>{e(s),r(!1)});return()=>i()},[]),{user:t,loading:n,isAuthenticated:!!t}},hu=({children:t})=>{const{user:e,loading:n}=cF();return n?g.jsxs("div",{style:Z1.loadingContainer,children:[g.jsx("div",{style:Z1.spinner}),g.jsx("p",{children:"Loading..."})]}):e?t:g.jsx(ET,{to:"/admin/login",replace:!0})},Z1={loadingContainer:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",gap:"1rem"},spinner:{width:"40px",height:"40px",border:"4px solid #f3f3f3",borderTop:"4px solid #2A2A2A",borderRadius:"50%",animation:"spin 1s linear infinite"}},hF=()=>g.jsxs(g.Fragment,{children:[g.jsx(lb,{}),g.jsxs("main",{children:[g.jsx(wL,{}),g.jsx(xL,{}),g.jsx(PL,{}),g.jsx(AL,{})]}),g.jsx(CL,{}),g.jsx(kL,{})]});function dF(){return g.jsxs(tR,{children:[g.jsxs(b2,{children:[g.jsx(pr,{path:"/",element:g.jsx(hF,{})}),g.jsx(pr,{path:"/admin/login",element:g.jsx(Jj,{})}),g.jsx(pr,{path:"/admin/dashboard",element:g.jsx(hu,{children:g.jsx(oF,{})})}),g.jsx(pr,{path:"/admin/products",element:g.jsx(hu,{children:g.jsx(aF,{})})}),g.jsx(pr,{path:"/admin/products/add",element:g.jsx(hu,{children:g.jsx(lF,{})})}),g.jsx(pr,{path:"/admin/products/edit/:id",element:g.jsx(hu,{children:g.jsx(uF,{})})}),g.jsx(pr,{path:"*",element:g.jsx(ET,{to:"/",replace:!0})})]}),g.jsx(HR,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),g.jsx("style",{children:`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `})]})}Jd.createRoot(document.getElementById("root")).render(g.jsx(le.StrictMode,{children:g.jsx(dF,{})}));
