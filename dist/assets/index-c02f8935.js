(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function _A(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ow={exports:{}},Bu={},aw={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rl=Symbol.for("react.element"),wA=Symbol.for("react.portal"),EA=Symbol.for("react.fragment"),TA=Symbol.for("react.strict_mode"),xA=Symbol.for("react.profiler"),IA=Symbol.for("react.provider"),SA=Symbol.for("react.context"),CA=Symbol.for("react.forward_ref"),AA=Symbol.for("react.suspense"),PA=Symbol.for("react.memo"),kA=Symbol.for("react.lazy"),c0=Symbol.iterator;function bA(t){return t===null||typeof t!="object"?null:(t=c0&&t[c0]||t["@@iterator"],typeof t=="function"?t:null)}var lw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cw=Object.assign,uw={};function eo(t,e,n){this.props=t,this.context=e,this.refs=uw,this.updater=n||lw}eo.prototype.isReactComponent={};eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hw(){}hw.prototype=eo.prototype;function Hp(t,e,n){this.props=t,this.context=e,this.refs=uw,this.updater=n||lw}var qp=Hp.prototype=new hw;qp.constructor=Hp;cw(qp,eo.prototype);qp.isPureReactComponent=!0;var u0=Array.isArray,dw=Object.prototype.hasOwnProperty,Gp={current:null},fw={key:!0,ref:!0,__self:!0,__source:!0};function pw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)dw.call(e,r)&&!fw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:rl,type:t,key:s,ref:o,props:i,_owner:Gp.current}}function RA(t,e){return{$$typeof:rl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kp(t){return typeof t=="object"&&t!==null&&t.$$typeof===rl}function NA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var h0=/\/+/g;function od(t,e){return typeof t=="object"&&t!==null&&t.key!=null?NA(""+t.key):e.toString(36)}function mc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case rl:case wA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+od(o,0):r,u0(i)?(n="",t!=null&&(n=t.replace(h0,"$&/")+"/"),mc(i,e,n,"",function(u){return u})):i!=null&&(Kp(i)&&(i=RA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(h0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",u0(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+od(s,a);o+=mc(s,e,n,l,i)}else if(l=bA(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+od(s,a++),o+=mc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Bl(t,e,n){if(t==null)return t;var r=[],i=0;return mc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function DA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xt={current:null},gc={transition:null},VA={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:gc,ReactCurrentOwner:Gp};function mw(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Bl,forEach:function(t,e,n){Bl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Bl(t,function(){e++}),e},toArray:function(t){return Bl(t,function(e){return e})||[]},only:function(t){if(!Kp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=eo;re.Fragment=EA;re.Profiler=xA;re.PureComponent=Hp;re.StrictMode=TA;re.Suspense=AA;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VA;re.act=mw;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=cw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Gp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)dw.call(e,l)&&!fw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:rl,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:SA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:IA,_context:t},t.Consumer=t};re.createElement=pw;re.createFactory=function(t){var e=pw.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:CA,render:t}};re.isValidElement=Kp;re.lazy=function(t){return{$$typeof:kA,_payload:{_status:-1,_result:t},_init:DA}};re.memo=function(t,e){return{$$typeof:PA,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=gc.transition;gc.transition={};try{t()}finally{gc.transition=e}};re.unstable_act=mw;re.useCallback=function(t,e){return xt.current.useCallback(t,e)};re.useContext=function(t){return xt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return xt.current.useDeferredValue(t)};re.useEffect=function(t,e){return xt.current.useEffect(t,e)};re.useId=function(){return xt.current.useId()};re.useImperativeHandle=function(t,e,n){return xt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return xt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return xt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return xt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return xt.current.useReducer(t,e,n)};re.useRef=function(t){return xt.current.useRef(t)};re.useState=function(t){return xt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return xt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return xt.current.useTransition()};re.version="18.3.1";aw.exports=re;var N=aw.exports;const le=_A(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LA=N,OA=Symbol.for("react.element"),MA=Symbol.for("react.fragment"),jA=Object.prototype.hasOwnProperty,FA=LA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,UA={key:!0,ref:!0,__self:!0,__source:!0};function gw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)jA.call(e,r)&&!UA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:OA,type:t,key:s,ref:o,props:i,_owner:FA.current}}Bu.Fragment=MA;Bu.jsx=gw;Bu.jsxs=gw;ow.exports=Bu;var m=ow.exports,sf={},yw={exports:{}},Ut={},vw={exports:{}},_w={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,K){var te=z.length;z.push(K);e:for(;0<te;){var J=te-1>>>1,fe=z[J];if(0<i(fe,K))z[J]=K,z[te]=fe,te=J;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],te=z.pop();if(te!==K){z[0]=te;e:for(var J=0,fe=z.length,pn=fe>>>1;J<pn;){var gt=2*(J+1)-1,mn=z[gt],Ze=gt+1,Zt=z[Ze];if(0>i(mn,te))Ze<fe&&0>i(Zt,mn)?(z[J]=Zt,z[Ze]=te,J=Ze):(z[J]=mn,z[gt]=te,J=gt);else if(Ze<fe&&0>i(Zt,te))z[J]=Zt,z[Ze]=te,J=Ze;else break e}}return K}function i(z,K){var te=z.sortIndex-K.sortIndex;return te!==0?te:z.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,d=null,p=3,y=!1,I=!1,S=!1,A=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(z){for(var K=n(u);K!==null;){if(K.callback===null)r(u);else if(K.startTime<=z)r(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function b(z){if(S=!1,v(z),!I)if(n(l)!==null)I=!0,me(L);else{var K=n(u);K!==null&&Ge(b,K.startTime-z)}}function L(z,K){I=!1,S&&(S=!1,E(w),w=-1),y=!0;var te=p;try{for(v(K),d=n(l);d!==null&&(!(d.expirationTime>K)||z&&!R());){var J=d.callback;if(typeof J=="function"){d.callback=null,p=d.priorityLevel;var fe=J(d.expirationTime<=K);K=t.unstable_now(),typeof fe=="function"?d.callback=fe:d===n(l)&&r(l),v(K)}else r(l);d=n(l)}if(d!==null)var pn=!0;else{var gt=n(u);gt!==null&&Ge(b,gt.startTime-K),pn=!1}return pn}finally{d=null,p=te,y=!1}}var M=!1,x=null,w=-1,C=5,P=-1;function R(){return!(t.unstable_now()-P<C)}function D(){if(x!==null){var z=t.unstable_now();P=z;var K=!0;try{K=x(!0,z)}finally{K?k():(M=!1,x=null)}}else M=!1}var k;if(typeof _=="function")k=function(){_(D)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,Oe=ae.port2;ae.port1.onmessage=D,k=function(){Oe.postMessage(null)}}else k=function(){A(D,0)};function me(z){x=z,M||(M=!0,k())}function Ge(z,K){w=A(function(){z(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){I||y||(I=!0,me(L))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(p){case 1:case 2:case 3:var K=3;break;default:K=p}var te=p;p=K;try{return z()}finally{p=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var te=p;p=z;try{return K()}finally{p=te}},t.unstable_scheduleCallback=function(z,K,te){var J=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?J+te:J):te=J,z){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=te+fe,z={id:h++,callback:K,priorityLevel:z,startTime:te,expirationTime:fe,sortIndex:-1},te>J?(z.sortIndex=te,e(u,z),n(l)===null&&z===n(u)&&(S?(E(w),w=-1):S=!0,Ge(b,te-J))):(z.sortIndex=fe,e(l,z),I||y||(I=!0,me(L))),z},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(z){var K=p;return function(){var te=p;p=K;try{return z.apply(this,arguments)}finally{p=te}}}})(_w);vw.exports=_w;var BA=vw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zA=N,jt=BA;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ww=new Set,Ia={};function $i(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(Ia[t]=e,t=0;t<e.length;t++)ww.add(e[t])}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),of=Object.prototype.hasOwnProperty,$A=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,d0={},f0={};function WA(t){return of.call(f0,t)?!0:of.call(d0,t)?!1:$A.test(t)?f0[t]=!0:(d0[t]=!0,!1)}function HA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qA(t,e,n,r){if(e===null||typeof e>"u"||HA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function It(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new It(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new It(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new It(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new It(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new It(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new It(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new It(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new It(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new It(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qp=/[\-:]([a-z])/g;function Yp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qp,Yp);it[e]=new It(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qp,Yp);it[e]=new It(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qp,Yp);it[e]=new It(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new It(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new It("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new It(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xp(t,e,n,r){var i=it.hasOwnProperty(e)?it[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qA(e,n,i,r)&&(n=null),r||i===null?WA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ir=zA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zl=Symbol.for("react.element"),os=Symbol.for("react.portal"),as=Symbol.for("react.fragment"),Jp=Symbol.for("react.strict_mode"),af=Symbol.for("react.profiler"),Ew=Symbol.for("react.provider"),Tw=Symbol.for("react.context"),Zp=Symbol.for("react.forward_ref"),lf=Symbol.for("react.suspense"),cf=Symbol.for("react.suspense_list"),em=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),xw=Symbol.for("react.offscreen"),p0=Symbol.iterator;function Lo(t){return t===null||typeof t!="object"?null:(t=p0&&t[p0]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,ad;function Ko(t){if(ad===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ad=e&&e[1]||""}return`
`+ad+t}var ld=!1;function cd(t,e){if(!t||ld)return"";ld=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ld=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ko(t):""}function GA(t){switch(t.tag){case 5:return Ko(t.type);case 16:return Ko("Lazy");case 13:return Ko("Suspense");case 19:return Ko("SuspenseList");case 0:case 2:case 15:return t=cd(t.type,!1),t;case 11:return t=cd(t.type.render,!1),t;case 1:return t=cd(t.type,!0),t;default:return""}}function uf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case as:return"Fragment";case os:return"Portal";case af:return"Profiler";case Jp:return"StrictMode";case lf:return"Suspense";case cf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Tw:return(t.displayName||"Context")+".Consumer";case Ew:return(t._context.displayName||"Context")+".Provider";case Zp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case em:return e=t.displayName||null,e!==null?e:uf(t.type)||"Memo";case gr:e=t._payload,t=t._init;try{return uf(t(e))}catch{}}return null}function KA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uf(e);case 8:return e===Jp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Iw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function QA(t){var e=Iw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $l(t){t._valueTracker||(t._valueTracker=QA(t))}function Sw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Iw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function zc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hf(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function m0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=qr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cw(t,e){e=e.checked,e!=null&&Xp(t,"checked",e,!1)}function df(t,e){Cw(t,e);var n=qr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ff(t,e.type,n):e.hasOwnProperty("defaultValue")&&ff(t,e.type,qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function g0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ff(t,e,n){(e!=="number"||zc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qo=Array.isArray;function xs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+qr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function pf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function y0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Qo(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qr(n)}}function Aw(t,e){var n=qr(e.value),r=qr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function v0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Pw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Pw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wl,kw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wl=Wl||document.createElement("div"),Wl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},YA=["Webkit","ms","Moz","O"];Object.keys(sa).forEach(function(t){YA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),sa[e]=sa[t]})});function bw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||sa.hasOwnProperty(t)&&sa[t]?(""+e).trim():e+"px"}function Rw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var XA=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gf(t,e){if(e){if(XA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function yf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vf=null;function tm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _f=null,Is=null,Ss=null;function _0(t){if(t=ol(t)){if(typeof _f!="function")throw Error(U(280));var e=t.stateNode;e&&(e=qu(e),_f(t.stateNode,t.type,e))}}function Nw(t){Is?Ss?Ss.push(t):Ss=[t]:Is=t}function Dw(){if(Is){var t=Is,e=Ss;if(Ss=Is=null,_0(t),e)for(t=0;t<e.length;t++)_0(e[t])}}function Vw(t,e){return t(e)}function Lw(){}var ud=!1;function Ow(t,e,n){if(ud)return t(e,n);ud=!0;try{return Vw(t,e,n)}finally{ud=!1,(Is!==null||Ss!==null)&&(Lw(),Dw())}}function Ca(t,e){var n=t.stateNode;if(n===null)return null;var r=qu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var wf=!1;if(qn)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){wf=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{wf=!1}function JA(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var oa=!1,$c=null,Wc=!1,Ef=null,ZA={onError:function(t){oa=!0,$c=t}};function eP(t,e,n,r,i,s,o,a,l){oa=!1,$c=null,JA.apply(ZA,arguments)}function tP(t,e,n,r,i,s,o,a,l){if(eP.apply(this,arguments),oa){if(oa){var u=$c;oa=!1,$c=null}else throw Error(U(198));Wc||(Wc=!0,Ef=u)}}function Wi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Mw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function w0(t){if(Wi(t)!==t)throw Error(U(188))}function nP(t){var e=t.alternate;if(!e){if(e=Wi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return w0(i),t;if(s===r)return w0(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function jw(t){return t=nP(t),t!==null?Fw(t):null}function Fw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Fw(t);if(e!==null)return e;t=t.sibling}return null}var Uw=jt.unstable_scheduleCallback,E0=jt.unstable_cancelCallback,rP=jt.unstable_shouldYield,iP=jt.unstable_requestPaint,Le=jt.unstable_now,sP=jt.unstable_getCurrentPriorityLevel,nm=jt.unstable_ImmediatePriority,Bw=jt.unstable_UserBlockingPriority,Hc=jt.unstable_NormalPriority,oP=jt.unstable_LowPriority,zw=jt.unstable_IdlePriority,zu=null,Tn=null;function aP(t){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(zu,t,void 0,(t.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:uP,lP=Math.log,cP=Math.LN2;function uP(t){return t>>>=0,t===0?32:31-(lP(t)/cP|0)|0}var Hl=64,ql=4194304;function Yo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Yo(a):(s&=o,s!==0&&(r=Yo(s)))}else o=n&~i,o!==0?r=Yo(o):s!==0&&(r=Yo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-an(e),i=1<<n,r|=t[n],e&=~i;return r}function hP(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dP(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-an(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=hP(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Tf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $w(){var t=Hl;return Hl<<=1,!(Hl&4194240)&&(Hl=64),t}function hd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function il(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-an(e),t[e]=n}function fP(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-an(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function rm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-an(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function Ww(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Hw,im,qw,Gw,Kw,xf=!1,Gl=[],Pr=null,kr=null,br=null,Aa=new Map,Pa=new Map,_r=[],pP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function T0(t,e){switch(t){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Aa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pa.delete(e.pointerId)}}function Mo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ol(e),e!==null&&im(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mP(t,e,n,r,i){switch(e){case"focusin":return Pr=Mo(Pr,t,e,n,r,i),!0;case"dragenter":return kr=Mo(kr,t,e,n,r,i),!0;case"mouseover":return br=Mo(br,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Aa.set(s,Mo(Aa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Pa.set(s,Mo(Pa.get(s)||null,t,e,n,r,i)),!0}return!1}function Qw(t){var e=Ti(t.target);if(e!==null){var n=Wi(e);if(n!==null){if(e=n.tag,e===13){if(e=Mw(n),e!==null){t.blockedOn=e,Kw(t.priority,function(){qw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=If(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);vf=r,n.target.dispatchEvent(r),vf=null}else return e=ol(n),e!==null&&im(e),t.blockedOn=n,!1;e.shift()}return!0}function x0(t,e,n){yc(t)&&n.delete(e)}function gP(){xf=!1,Pr!==null&&yc(Pr)&&(Pr=null),kr!==null&&yc(kr)&&(kr=null),br!==null&&yc(br)&&(br=null),Aa.forEach(x0),Pa.forEach(x0)}function jo(t,e){t.blockedOn===e&&(t.blockedOn=null,xf||(xf=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,gP)))}function ka(t){function e(i){return jo(i,t)}if(0<Gl.length){jo(Gl[0],t);for(var n=1;n<Gl.length;n++){var r=Gl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Pr!==null&&jo(Pr,t),kr!==null&&jo(kr,t),br!==null&&jo(br,t),Aa.forEach(e),Pa.forEach(e),n=0;n<_r.length;n++)r=_r[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_r.length&&(n=_r[0],n.blockedOn===null);)Qw(n),n.blockedOn===null&&_r.shift()}var Cs=ir.ReactCurrentBatchConfig,Gc=!0;function yP(t,e,n,r){var i=de,s=Cs.transition;Cs.transition=null;try{de=1,sm(t,e,n,r)}finally{de=i,Cs.transition=s}}function vP(t,e,n,r){var i=de,s=Cs.transition;Cs.transition=null;try{de=4,sm(t,e,n,r)}finally{de=i,Cs.transition=s}}function sm(t,e,n,r){if(Gc){var i=If(t,e,n,r);if(i===null)Ed(t,e,r,Kc,n),T0(t,r);else if(mP(i,t,e,n,r))r.stopPropagation();else if(T0(t,r),e&4&&-1<pP.indexOf(t)){for(;i!==null;){var s=ol(i);if(s!==null&&Hw(s),s=If(t,e,n,r),s===null&&Ed(t,e,r,Kc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ed(t,e,r,null,n)}}var Kc=null;function If(t,e,n,r){if(Kc=null,t=tm(r),t=Ti(t),t!==null)if(e=Wi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Mw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Kc=t,null}function Yw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sP()){case nm:return 1;case Bw:return 4;case Hc:case oP:return 16;case zw:return 536870912;default:return 16}default:return 16}}var Sr=null,om=null,vc=null;function Xw(){if(vc)return vc;var t,e=om,n=e.length,r,i="value"in Sr?Sr.value:Sr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return vc=i.slice(t,1<r?1-r:void 0)}function _c(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Kl(){return!0}function I0(){return!1}function Bt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Kl:I0,this.isPropagationStopped=I0,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Kl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Kl)},persist:function(){},isPersistent:Kl}),e}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},am=Bt(to),sl=ke({},to,{view:0,detail:0}),_P=Bt(sl),dd,fd,Fo,$u=ke({},sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fo&&(Fo&&t.type==="mousemove"?(dd=t.screenX-Fo.screenX,fd=t.screenY-Fo.screenY):fd=dd=0,Fo=t),dd)},movementY:function(t){return"movementY"in t?t.movementY:fd}}),S0=Bt($u),wP=ke({},$u,{dataTransfer:0}),EP=Bt(wP),TP=ke({},sl,{relatedTarget:0}),pd=Bt(TP),xP=ke({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),IP=Bt(xP),SP=ke({},to,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),CP=Bt(SP),AP=ke({},to,{data:0}),C0=Bt(AP),PP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bP[t])?!!e[t]:!1}function lm(){return RP}var NP=ke({},sl,{key:function(t){if(t.key){var e=PP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_c(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lm,charCode:function(t){return t.type==="keypress"?_c(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_c(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),DP=Bt(NP),VP=ke({},$u,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),A0=Bt(VP),LP=ke({},sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lm}),OP=Bt(LP),MP=ke({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),jP=Bt(MP),FP=ke({},$u,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),UP=Bt(FP),BP=[9,13,27,32],cm=qn&&"CompositionEvent"in window,aa=null;qn&&"documentMode"in document&&(aa=document.documentMode);var zP=qn&&"TextEvent"in window&&!aa,Jw=qn&&(!cm||aa&&8<aa&&11>=aa),P0=String.fromCharCode(32),k0=!1;function Zw(t,e){switch(t){case"keyup":return BP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function $P(t,e){switch(t){case"compositionend":return eE(e);case"keypress":return e.which!==32?null:(k0=!0,P0);case"textInput":return t=e.data,t===P0&&k0?null:t;default:return null}}function WP(t,e){if(ls)return t==="compositionend"||!cm&&Zw(t,e)?(t=Xw(),vc=om=Sr=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jw&&e.locale!=="ko"?null:e.data;default:return null}}var HP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function b0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!HP[t.type]:e==="textarea"}function tE(t,e,n,r){Nw(r),e=Qc(e,"onChange"),0<e.length&&(n=new am("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var la=null,ba=null;function qP(t){dE(t,0)}function Wu(t){var e=hs(t);if(Sw(e))return t}function GP(t,e){if(t==="change")return e}var nE=!1;if(qn){var md;if(qn){var gd="oninput"in document;if(!gd){var R0=document.createElement("div");R0.setAttribute("oninput","return;"),gd=typeof R0.oninput=="function"}md=gd}else md=!1;nE=md&&(!document.documentMode||9<document.documentMode)}function N0(){la&&(la.detachEvent("onpropertychange",rE),ba=la=null)}function rE(t){if(t.propertyName==="value"&&Wu(ba)){var e=[];tE(e,ba,t,tm(t)),Ow(qP,e)}}function KP(t,e,n){t==="focusin"?(N0(),la=e,ba=n,la.attachEvent("onpropertychange",rE)):t==="focusout"&&N0()}function QP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wu(ba)}function YP(t,e){if(t==="click")return Wu(e)}function XP(t,e){if(t==="input"||t==="change")return Wu(e)}function JP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:JP;function Ra(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!of.call(e,i)||!un(t[i],e[i]))return!1}return!0}function D0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function V0(t,e){var n=D0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=D0(n)}}function iE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?iE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function sE(){for(var t=window,e=zc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zc(t.document)}return e}function um(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ZP(t){var e=sE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&iE(n.ownerDocument.documentElement,n)){if(r!==null&&um(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=V0(n,s);var o=V0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ek=qn&&"documentMode"in document&&11>=document.documentMode,cs=null,Sf=null,ca=null,Cf=!1;function L0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cf||cs==null||cs!==zc(r)||(r=cs,"selectionStart"in r&&um(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ca&&Ra(ca,r)||(ca=r,r=Qc(Sf,"onSelect"),0<r.length&&(e=new am("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=cs)))}function Ql(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var us={animationend:Ql("Animation","AnimationEnd"),animationiteration:Ql("Animation","AnimationIteration"),animationstart:Ql("Animation","AnimationStart"),transitionend:Ql("Transition","TransitionEnd")},yd={},oE={};qn&&(oE=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function Hu(t){if(yd[t])return yd[t];if(!us[t])return t;var e=us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in oE)return yd[t]=e[n];return t}var aE=Hu("animationend"),lE=Hu("animationiteration"),cE=Hu("animationstart"),uE=Hu("transitionend"),hE=new Map,O0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ni(t,e){hE.set(t,e),$i(e,[t])}for(var vd=0;vd<O0.length;vd++){var _d=O0[vd],tk=_d.toLowerCase(),nk=_d[0].toUpperCase()+_d.slice(1);ni(tk,"on"+nk)}ni(aE,"onAnimationEnd");ni(lE,"onAnimationIteration");ni(cE,"onAnimationStart");ni("dblclick","onDoubleClick");ni("focusin","onFocus");ni("focusout","onBlur");ni(uE,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);$i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$i("onBeforeInput",["compositionend","keypress","textInput","paste"]);$i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));function M0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tP(r,e,void 0,t),t.currentTarget=null}function dE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;M0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;M0(i,a,u),s=l}}}if(Wc)throw t=Ef,Wc=!1,Ef=null,t}function _e(t,e){var n=e[Rf];n===void 0&&(n=e[Rf]=new Set);var r=t+"__bubble";n.has(r)||(fE(e,t,2,!1),n.add(r))}function wd(t,e,n){var r=0;e&&(r|=4),fE(n,t,r,e)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Na(t){if(!t[Yl]){t[Yl]=!0,ww.forEach(function(n){n!=="selectionchange"&&(rk.has(n)||wd(n,!1,t),wd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yl]||(e[Yl]=!0,wd("selectionchange",!1,e))}}function fE(t,e,n,r){switch(Yw(e)){case 1:var i=yP;break;case 4:i=vP;break;default:i=sm}n=i.bind(null,e,n,t),i=void 0,!wf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ed(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ti(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Ow(function(){var u=s,h=tm(n),d=[];e:{var p=hE.get(t);if(p!==void 0){var y=am,I=t;switch(t){case"keypress":if(_c(n)===0)break e;case"keydown":case"keyup":y=DP;break;case"focusin":I="focus",y=pd;break;case"focusout":I="blur",y=pd;break;case"beforeblur":case"afterblur":y=pd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=S0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=EP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=OP;break;case aE:case lE:case cE:y=IP;break;case uE:y=jP;break;case"scroll":y=_P;break;case"wheel":y=UP;break;case"copy":case"cut":case"paste":y=CP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=A0}var S=(e&4)!==0,A=!S&&t==="scroll",E=S?p!==null?p+"Capture":null:p;S=[];for(var _=u,v;_!==null;){v=_;var b=v.stateNode;if(v.tag===5&&b!==null&&(v=b,E!==null&&(b=Ca(_,E),b!=null&&S.push(Da(_,b,v)))),A)break;_=_.return}0<S.length&&(p=new y(p,I,null,n,h),d.push({event:p,listeners:S}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",p&&n!==vf&&(I=n.relatedTarget||n.fromElement)&&(Ti(I)||I[Gn]))break e;if((y||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,y?(I=n.relatedTarget||n.toElement,y=u,I=I?Ti(I):null,I!==null&&(A=Wi(I),I!==A||I.tag!==5&&I.tag!==6)&&(I=null)):(y=null,I=u),y!==I)){if(S=S0,b="onMouseLeave",E="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(S=A0,b="onPointerLeave",E="onPointerEnter",_="pointer"),A=y==null?p:hs(y),v=I==null?p:hs(I),p=new S(b,_+"leave",y,n,h),p.target=A,p.relatedTarget=v,b=null,Ti(h)===u&&(S=new S(E,_+"enter",I,n,h),S.target=v,S.relatedTarget=A,b=S),A=b,y&&I)t:{for(S=y,E=I,_=0,v=S;v;v=ts(v))_++;for(v=0,b=E;b;b=ts(b))v++;for(;0<_-v;)S=ts(S),_--;for(;0<v-_;)E=ts(E),v--;for(;_--;){if(S===E||E!==null&&S===E.alternate)break t;S=ts(S),E=ts(E)}S=null}else S=null;y!==null&&j0(d,p,y,S,!1),I!==null&&A!==null&&j0(d,A,I,S,!0)}}e:{if(p=u?hs(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var L=GP;else if(b0(p))if(nE)L=XP;else{L=QP;var M=KP}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(L=YP);if(L&&(L=L(t,u))){tE(d,L,n,h);break e}M&&M(t,p,u),t==="focusout"&&(M=p._wrapperState)&&M.controlled&&p.type==="number"&&ff(p,"number",p.value)}switch(M=u?hs(u):window,t){case"focusin":(b0(M)||M.contentEditable==="true")&&(cs=M,Sf=u,ca=null);break;case"focusout":ca=Sf=cs=null;break;case"mousedown":Cf=!0;break;case"contextmenu":case"mouseup":case"dragend":Cf=!1,L0(d,n,h);break;case"selectionchange":if(ek)break;case"keydown":case"keyup":L0(d,n,h)}var x;if(cm)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else ls?Zw(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(Jw&&n.locale!=="ko"&&(ls||w!=="onCompositionStart"?w==="onCompositionEnd"&&ls&&(x=Xw()):(Sr=h,om="value"in Sr?Sr.value:Sr.textContent,ls=!0)),M=Qc(u,w),0<M.length&&(w=new C0(w,t,null,n,h),d.push({event:w,listeners:M}),x?w.data=x:(x=eE(n),x!==null&&(w.data=x)))),(x=zP?$P(t,n):WP(t,n))&&(u=Qc(u,"onBeforeInput"),0<u.length&&(h=new C0("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=x))}dE(d,e)})}function Da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Qc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ca(t,n),s!=null&&r.unshift(Da(t,s,i)),s=Ca(t,e),s!=null&&r.push(Da(t,s,i))),t=t.return}return r}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function j0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ca(n,s),l!=null&&o.unshift(Da(n,l,a))):i||(l=Ca(n,s),l!=null&&o.push(Da(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ik=/\r\n?/g,sk=/\u0000|\uFFFD/g;function F0(t){return(typeof t=="string"?t:""+t).replace(ik,`
`).replace(sk,"")}function Xl(t,e,n){if(e=F0(e),F0(t)!==e&&n)throw Error(U(425))}function Yc(){}var Af=null,Pf=null;function kf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bf=typeof setTimeout=="function"?setTimeout:void 0,ok=typeof clearTimeout=="function"?clearTimeout:void 0,U0=typeof Promise=="function"?Promise:void 0,ak=typeof queueMicrotask=="function"?queueMicrotask:typeof U0<"u"?function(t){return U0.resolve(null).then(t).catch(lk)}:bf;function lk(t){setTimeout(function(){throw t})}function Td(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ka(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ka(e)}function Rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function B0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var no=Math.random().toString(36).slice(2),En="__reactFiber$"+no,Va="__reactProps$"+no,Gn="__reactContainer$"+no,Rf="__reactEvents$"+no,ck="__reactListeners$"+no,uk="__reactHandles$"+no;function Ti(t){var e=t[En];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gn]||n[En]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=B0(t);t!==null;){if(n=t[En])return n;t=B0(t)}return e}t=n,n=t.parentNode}return null}function ol(t){return t=t[En]||t[Gn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function qu(t){return t[Va]||null}var Nf=[],ds=-1;function ri(t){return{current:t}}function Ee(t){0>ds||(t.current=Nf[ds],Nf[ds]=null,ds--)}function ye(t,e){ds++,Nf[ds]=t.current,t.current=e}var Gr={},pt=ri(Gr),kt=ri(!1),Ri=Gr;function Ms(t,e){var n=t.type.contextTypes;if(!n)return Gr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function bt(t){return t=t.childContextTypes,t!=null}function Xc(){Ee(kt),Ee(pt)}function z0(t,e,n){if(pt.current!==Gr)throw Error(U(168));ye(pt,e),ye(kt,n)}function pE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,KA(t)||"Unknown",i));return ke({},n,r)}function Jc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gr,Ri=pt.current,ye(pt,t),ye(kt,kt.current),!0}function $0(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=pE(t,e,Ri),r.__reactInternalMemoizedMergedChildContext=t,Ee(kt),Ee(pt),ye(pt,t)):Ee(kt),ye(kt,n)}var Ln=null,Gu=!1,xd=!1;function mE(t){Ln===null?Ln=[t]:Ln.push(t)}function hk(t){Gu=!0,mE(t)}function ii(){if(!xd&&Ln!==null){xd=!0;var t=0,e=de;try{var n=Ln;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ln=null,Gu=!1}catch(i){throw Ln!==null&&(Ln=Ln.slice(t+1)),Uw(nm,ii),i}finally{de=e,xd=!1}}return null}var fs=[],ps=0,Zc=null,eu=0,Wt=[],Ht=0,Ni=null,On=1,Mn="";function yi(t,e){fs[ps++]=eu,fs[ps++]=Zc,Zc=t,eu=e}function gE(t,e,n){Wt[Ht++]=On,Wt[Ht++]=Mn,Wt[Ht++]=Ni,Ni=t;var r=On;t=Mn;var i=32-an(r)-1;r&=~(1<<i),n+=1;var s=32-an(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,On=1<<32-an(e)+i|n<<i|r,Mn=s+t}else On=1<<s|n<<i|r,Mn=t}function hm(t){t.return!==null&&(yi(t,1),gE(t,1,0))}function dm(t){for(;t===Zc;)Zc=fs[--ps],fs[ps]=null,eu=fs[--ps],fs[ps]=null;for(;t===Ni;)Ni=Wt[--Ht],Wt[Ht]=null,Mn=Wt[--Ht],Wt[Ht]=null,On=Wt[--Ht],Wt[Ht]=null}var Mt=null,Lt=null,xe=!1,rn=null;function yE(t,e){var n=Gt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function W0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mt=t,Lt=Rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mt=t,Lt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ni!==null?{id:On,overflow:Mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mt=t,Lt=null,!0):!1;default:return!1}}function Df(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vf(t){if(xe){var e=Lt;if(e){var n=e;if(!W0(t,e)){if(Df(t))throw Error(U(418));e=Rr(n.nextSibling);var r=Mt;e&&W0(t,e)?yE(r,n):(t.flags=t.flags&-4097|2,xe=!1,Mt=t)}}else{if(Df(t))throw Error(U(418));t.flags=t.flags&-4097|2,xe=!1,Mt=t}}}function H0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mt=t}function Jl(t){if(t!==Mt)return!1;if(!xe)return H0(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kf(t.type,t.memoizedProps)),e&&(e=Lt)){if(Df(t))throw vE(),Error(U(418));for(;e;)yE(t,e),e=Rr(e.nextSibling)}if(H0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Lt=Rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Lt=null}}else Lt=Mt?Rr(t.stateNode.nextSibling):null;return!0}function vE(){for(var t=Lt;t;)t=Rr(t.nextSibling)}function js(){Lt=Mt=null,xe=!1}function fm(t){rn===null?rn=[t]:rn.push(t)}var dk=ir.ReactCurrentBatchConfig;function Uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Zl(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function q0(t){var e=t._init;return e(t._payload)}function _E(t){function e(E,_){if(t){var v=E.deletions;v===null?(E.deletions=[_],E.flags|=16):v.push(_)}}function n(E,_){if(!t)return null;for(;_!==null;)e(E,_),_=_.sibling;return null}function r(E,_){for(E=new Map;_!==null;)_.key!==null?E.set(_.key,_):E.set(_.index,_),_=_.sibling;return E}function i(E,_){return E=Lr(E,_),E.index=0,E.sibling=null,E}function s(E,_,v){return E.index=v,t?(v=E.alternate,v!==null?(v=v.index,v<_?(E.flags|=2,_):v):(E.flags|=2,_)):(E.flags|=1048576,_)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,_,v,b){return _===null||_.tag!==6?(_=bd(v,E.mode,b),_.return=E,_):(_=i(_,v),_.return=E,_)}function l(E,_,v,b){var L=v.type;return L===as?h(E,_,v.props.children,b,v.key):_!==null&&(_.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===gr&&q0(L)===_.type)?(b=i(_,v.props),b.ref=Uo(E,_,v),b.return=E,b):(b=Cc(v.type,v.key,v.props,null,E.mode,b),b.ref=Uo(E,_,v),b.return=E,b)}function u(E,_,v,b){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Rd(v,E.mode,b),_.return=E,_):(_=i(_,v.children||[]),_.return=E,_)}function h(E,_,v,b,L){return _===null||_.tag!==7?(_=Pi(v,E.mode,b,L),_.return=E,_):(_=i(_,v),_.return=E,_)}function d(E,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=bd(""+_,E.mode,v),_.return=E,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case zl:return v=Cc(_.type,_.key,_.props,null,E.mode,v),v.ref=Uo(E,null,_),v.return=E,v;case os:return _=Rd(_,E.mode,v),_.return=E,_;case gr:var b=_._init;return d(E,b(_._payload),v)}if(Qo(_)||Lo(_))return _=Pi(_,E.mode,v,null),_.return=E,_;Zl(E,_)}return null}function p(E,_,v,b){var L=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return L!==null?null:a(E,_,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case zl:return v.key===L?l(E,_,v,b):null;case os:return v.key===L?u(E,_,v,b):null;case gr:return L=v._init,p(E,_,L(v._payload),b)}if(Qo(v)||Lo(v))return L!==null?null:h(E,_,v,b,null);Zl(E,v)}return null}function y(E,_,v,b,L){if(typeof b=="string"&&b!==""||typeof b=="number")return E=E.get(v)||null,a(_,E,""+b,L);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case zl:return E=E.get(b.key===null?v:b.key)||null,l(_,E,b,L);case os:return E=E.get(b.key===null?v:b.key)||null,u(_,E,b,L);case gr:var M=b._init;return y(E,_,v,M(b._payload),L)}if(Qo(b)||Lo(b))return E=E.get(v)||null,h(_,E,b,L,null);Zl(_,b)}return null}function I(E,_,v,b){for(var L=null,M=null,x=_,w=_=0,C=null;x!==null&&w<v.length;w++){x.index>w?(C=x,x=null):C=x.sibling;var P=p(E,x,v[w],b);if(P===null){x===null&&(x=C);break}t&&x&&P.alternate===null&&e(E,x),_=s(P,_,w),M===null?L=P:M.sibling=P,M=P,x=C}if(w===v.length)return n(E,x),xe&&yi(E,w),L;if(x===null){for(;w<v.length;w++)x=d(E,v[w],b),x!==null&&(_=s(x,_,w),M===null?L=x:M.sibling=x,M=x);return xe&&yi(E,w),L}for(x=r(E,x);w<v.length;w++)C=y(x,E,w,v[w],b),C!==null&&(t&&C.alternate!==null&&x.delete(C.key===null?w:C.key),_=s(C,_,w),M===null?L=C:M.sibling=C,M=C);return t&&x.forEach(function(R){return e(E,R)}),xe&&yi(E,w),L}function S(E,_,v,b){var L=Lo(v);if(typeof L!="function")throw Error(U(150));if(v=L.call(v),v==null)throw Error(U(151));for(var M=L=null,x=_,w=_=0,C=null,P=v.next();x!==null&&!P.done;w++,P=v.next()){x.index>w?(C=x,x=null):C=x.sibling;var R=p(E,x,P.value,b);if(R===null){x===null&&(x=C);break}t&&x&&R.alternate===null&&e(E,x),_=s(R,_,w),M===null?L=R:M.sibling=R,M=R,x=C}if(P.done)return n(E,x),xe&&yi(E,w),L;if(x===null){for(;!P.done;w++,P=v.next())P=d(E,P.value,b),P!==null&&(_=s(P,_,w),M===null?L=P:M.sibling=P,M=P);return xe&&yi(E,w),L}for(x=r(E,x);!P.done;w++,P=v.next())P=y(x,E,w,P.value,b),P!==null&&(t&&P.alternate!==null&&x.delete(P.key===null?w:P.key),_=s(P,_,w),M===null?L=P:M.sibling=P,M=P);return t&&x.forEach(function(D){return e(E,D)}),xe&&yi(E,w),L}function A(E,_,v,b){if(typeof v=="object"&&v!==null&&v.type===as&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case zl:e:{for(var L=v.key,M=_;M!==null;){if(M.key===L){if(L=v.type,L===as){if(M.tag===7){n(E,M.sibling),_=i(M,v.props.children),_.return=E,E=_;break e}}else if(M.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===gr&&q0(L)===M.type){n(E,M.sibling),_=i(M,v.props),_.ref=Uo(E,M,v),_.return=E,E=_;break e}n(E,M);break}else e(E,M);M=M.sibling}v.type===as?(_=Pi(v.props.children,E.mode,b,v.key),_.return=E,E=_):(b=Cc(v.type,v.key,v.props,null,E.mode,b),b.ref=Uo(E,_,v),b.return=E,E=b)}return o(E);case os:e:{for(M=v.key;_!==null;){if(_.key===M)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(E,_.sibling),_=i(_,v.children||[]),_.return=E,E=_;break e}else{n(E,_);break}else e(E,_);_=_.sibling}_=Rd(v,E.mode,b),_.return=E,E=_}return o(E);case gr:return M=v._init,A(E,_,M(v._payload),b)}if(Qo(v))return I(E,_,v,b);if(Lo(v))return S(E,_,v,b);Zl(E,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(E,_.sibling),_=i(_,v),_.return=E,E=_):(n(E,_),_=bd(v,E.mode,b),_.return=E,E=_),o(E)):n(E,_)}return A}var Fs=_E(!0),wE=_E(!1),tu=ri(null),nu=null,ms=null,pm=null;function mm(){pm=ms=nu=null}function gm(t){var e=tu.current;Ee(tu),t._currentValue=e}function Lf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function As(t,e){nu=t,pm=ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pt=!0),t.firstContext=null)}function Qt(t){var e=t._currentValue;if(pm!==t)if(t={context:t,memoizedValue:e,next:null},ms===null){if(nu===null)throw Error(U(308));ms=t,nu.dependencies={lanes:0,firstContext:t}}else ms=ms.next=t;return e}var xi=null;function ym(t){xi===null?xi=[t]:xi.push(t)}function EE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ym(e)):(n.next=i.next,i.next=n),e.interleaved=n,Kn(t,r)}function Kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yr=!1;function vm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function TE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Kn(t,n)}return i=r.interleaved,i===null?(e.next=e,ym(r)):(e.next=i.next,i.next=e),r.interleaved=e,Kn(t,n)}function wc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rm(t,n)}}function G0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ru(t,e,n,r){var i=t.updateQueue;yr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,h=u=l=null,a=s;do{var p=a.lane,y=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var I=t,S=a;switch(p=e,y=n,S.tag){case 1:if(I=S.payload,typeof I=="function"){d=I.call(y,d,p);break e}d=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=S.payload,p=typeof I=="function"?I.call(y,d,p):I,p==null)break e;d=ke({},d,p);break e;case 2:yr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=y,l=d):h=h.next=y,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Vi|=o,t.lanes=o,t.memoizedState=d}}function K0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var al={},xn=ri(al),La=ri(al),Oa=ri(al);function Ii(t){if(t===al)throw Error(U(174));return t}function _m(t,e){switch(ye(Oa,e),ye(La,t),ye(xn,al),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mf(e,t)}Ee(xn),ye(xn,e)}function Us(){Ee(xn),Ee(La),Ee(Oa)}function xE(t){Ii(Oa.current);var e=Ii(xn.current),n=mf(e,t.type);e!==n&&(ye(La,t),ye(xn,n))}function wm(t){La.current===t&&(Ee(xn),Ee(La))}var Ce=ri(0);function iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Id=[];function Em(){for(var t=0;t<Id.length;t++)Id[t]._workInProgressVersionPrimary=null;Id.length=0}var Ec=ir.ReactCurrentDispatcher,Sd=ir.ReactCurrentBatchConfig,Di=0,Pe=null,We=null,Ye=null,su=!1,ua=!1,Ma=0,fk=0;function at(){throw Error(U(321))}function Tm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function xm(t,e,n,r,i,s){if(Di=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ec.current=t===null||t.memoizedState===null?yk:vk,t=n(r,i),ua){s=0;do{if(ua=!1,Ma=0,25<=s)throw Error(U(301));s+=1,Ye=We=null,e.updateQueue=null,Ec.current=_k,t=n(r,i)}while(ua)}if(Ec.current=ou,e=We!==null&&We.next!==null,Di=0,Ye=We=Pe=null,su=!1,e)throw Error(U(300));return t}function Im(){var t=Ma!==0;return Ma=0,t}function _n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Pe.memoizedState=Ye=t:Ye=Ye.next=t,Ye}function Yt(){if(We===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var e=Ye===null?Pe.memoizedState:Ye.next;if(e!==null)Ye=e,We=t;else{if(t===null)throw Error(U(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Ye===null?Pe.memoizedState=Ye=t:Ye=Ye.next=t}return Ye}function ja(t,e){return typeof e=="function"?e(t):e}function Cd(t){var e=Yt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=We,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((Di&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Pe.lanes|=h,Vi|=h}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,un(r,e.memoizedState)||(Pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,Vi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ad(t){var e=Yt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);un(s,e.memoizedState)||(Pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function IE(){}function SE(t,e){var n=Pe,r=Yt(),i=e(),s=!un(r.memoizedState,i);if(s&&(r.memoizedState=i,Pt=!0),r=r.queue,Sm(PE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Fa(9,AE.bind(null,n,r,i,e),void 0,null),Xe===null)throw Error(U(349));Di&30||CE(n,e,i)}return i}function CE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function AE(t,e,n,r){e.value=n,e.getSnapshot=r,kE(e)&&bE(t)}function PE(t,e,n){return n(function(){kE(e)&&bE(t)})}function kE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function bE(t){var e=Kn(t,1);e!==null&&ln(e,t,1,-1)}function Q0(t){var e=_n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:t},e.queue=t,t=t.dispatch=gk.bind(null,Pe,t),[e.memoizedState,t]}function Fa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function RE(){return Yt().memoizedState}function Tc(t,e,n,r){var i=_n();Pe.flags|=t,i.memoizedState=Fa(1|e,n,void 0,r===void 0?null:r)}function Ku(t,e,n,r){var i=Yt();r=r===void 0?null:r;var s=void 0;if(We!==null){var o=We.memoizedState;if(s=o.destroy,r!==null&&Tm(r,o.deps)){i.memoizedState=Fa(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=Fa(1|e,n,s,r)}function Y0(t,e){return Tc(8390656,8,t,e)}function Sm(t,e){return Ku(2048,8,t,e)}function NE(t,e){return Ku(4,2,t,e)}function DE(t,e){return Ku(4,4,t,e)}function VE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function LE(t,e,n){return n=n!=null?n.concat([t]):null,Ku(4,4,VE.bind(null,e,t),n)}function Cm(){}function OE(t,e){var n=Yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ME(t,e){var n=Yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function jE(t,e,n){return Di&21?(un(n,e)||(n=$w(),Pe.lanes|=n,Vi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pt=!0),t.memoizedState=n)}function pk(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Sd.transition;Sd.transition={};try{t(!1),e()}finally{de=n,Sd.transition=r}}function FE(){return Yt().memoizedState}function mk(t,e,n){var r=Vr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},UE(t))BE(e,n);else if(n=EE(t,e,n,r),n!==null){var i=Tt();ln(n,t,r,i),zE(n,e,r)}}function gk(t,e,n){var r=Vr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(UE(t))BE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,un(a,o)){var l=e.interleaved;l===null?(i.next=i,ym(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=EE(t,e,i,r),n!==null&&(i=Tt(),ln(n,t,r,i),zE(n,e,r))}}function UE(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function BE(t,e){ua=su=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function zE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rm(t,n)}}var ou={readContext:Qt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},yk={readContext:Qt,useCallback:function(t,e){return _n().memoizedState=[t,e===void 0?null:e],t},useContext:Qt,useEffect:Y0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Tc(4194308,4,VE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Tc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Tc(4,2,t,e)},useMemo:function(t,e){var n=_n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=mk.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=_n();return t={current:t},e.memoizedState=t},useState:Q0,useDebugValue:Cm,useDeferredValue:function(t){return _n().memoizedState=t},useTransition:function(){var t=Q0(!1),e=t[0];return t=pk.bind(null,t[1]),_n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=_n();if(xe){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Xe===null)throw Error(U(349));Di&30||CE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Y0(PE.bind(null,r,s,t),[t]),r.flags|=2048,Fa(9,AE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=_n(),e=Xe.identifierPrefix;if(xe){var n=Mn,r=On;n=(r&~(1<<32-an(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vk={readContext:Qt,useCallback:OE,useContext:Qt,useEffect:Sm,useImperativeHandle:LE,useInsertionEffect:NE,useLayoutEffect:DE,useMemo:ME,useReducer:Cd,useRef:RE,useState:function(){return Cd(ja)},useDebugValue:Cm,useDeferredValue:function(t){var e=Yt();return jE(e,We.memoizedState,t)},useTransition:function(){var t=Cd(ja)[0],e=Yt().memoizedState;return[t,e]},useMutableSource:IE,useSyncExternalStore:SE,useId:FE,unstable_isNewReconciler:!1},_k={readContext:Qt,useCallback:OE,useContext:Qt,useEffect:Sm,useImperativeHandle:LE,useInsertionEffect:NE,useLayoutEffect:DE,useMemo:ME,useReducer:Ad,useRef:RE,useState:function(){return Ad(ja)},useDebugValue:Cm,useDeferredValue:function(t){var e=Yt();return We===null?e.memoizedState=t:jE(e,We.memoizedState,t)},useTransition:function(){var t=Ad(ja)[0],e=Yt().memoizedState;return[t,e]},useMutableSource:IE,useSyncExternalStore:SE,useId:FE,unstable_isNewReconciler:!1};function tn(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Of(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Qu={isMounted:function(t){return(t=t._reactInternals)?Wi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Tt(),i=Vr(t),s=Bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,i),e!==null&&(ln(e,t,i,r),wc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Tt(),i=Vr(t),s=Bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,i),e!==null&&(ln(e,t,i,r),wc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Tt(),r=Vr(t),i=Bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Nr(t,i,r),e!==null&&(ln(e,t,r,n),wc(e,t,r))}};function X0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ra(n,r)||!Ra(i,s):!0}function $E(t,e,n){var r=!1,i=Gr,s=e.contextType;return typeof s=="object"&&s!==null?s=Qt(s):(i=bt(e)?Ri:pt.current,r=e.contextTypes,s=(r=r!=null)?Ms(t,i):Gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Qu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function J0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Qu.enqueueReplaceState(e,e.state,null)}function Mf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},vm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Qt(s):(s=bt(e)?Ri:pt.current,i.context=Ms(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Of(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Qu.enqueueReplaceState(i,i.state,null),ru(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,e){try{var n="",r=e;do n+=GA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Pd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function jf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wk=typeof WeakMap=="function"?WeakMap:Map;function WE(t,e,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){lu||(lu=!0,Kf=r),jf(t,e)},n}function HE(t,e,n){n=Bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){jf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){jf(t,e),typeof r!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Z0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new wk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Vk.bind(null,t,e,n),e.then(t,t))}function ev(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bn(-1,1),e.tag=2,Nr(n,e,1))),n.lanes|=1),t)}var Ek=ir.ReactCurrentOwner,Pt=!1;function wt(t,e,n,r){e.child=t===null?wE(e,null,n,r):Fs(e,t.child,n,r)}function nv(t,e,n,r,i){n=n.render;var s=e.ref;return As(e,i),r=xm(t,e,n,r,s,i),n=Im(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qn(t,e,i)):(xe&&n&&hm(e),e.flags|=1,wt(t,e,r,i),e.child)}function rv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Vm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,qE(t,e,s,r,i)):(t=Cc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ra,n(o,r)&&t.ref===e.ref)return Qn(t,e,i)}return e.flags|=1,t=Lr(s,r),t.ref=e.ref,t.return=e,e.child=t}function qE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ra(s,r)&&t.ref===e.ref)if(Pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Pt=!0);else return e.lanes=t.lanes,Qn(t,e,i)}return Ff(t,e,n,r,i)}function GE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(ys,Vt),Vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(ys,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(ys,Vt),Vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(ys,Vt),Vt|=r;return wt(t,e,i,n),e.child}function KE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ff(t,e,n,r,i){var s=bt(n)?Ri:pt.current;return s=Ms(e,s),As(e,i),n=xm(t,e,n,r,s,i),r=Im(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qn(t,e,i)):(xe&&r&&hm(e),e.flags|=1,wt(t,e,n,i),e.child)}function iv(t,e,n,r,i){if(bt(n)){var s=!0;Jc(e)}else s=!1;if(As(e,i),e.stateNode===null)xc(t,e),$E(e,n,r),Mf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Qt(u):(u=bt(n)?Ri:pt.current,u=Ms(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&J0(e,o,r,u),yr=!1;var p=e.memoizedState;o.state=p,ru(e,r,o,i),l=e.memoizedState,a!==r||p!==l||kt.current||yr?(typeof h=="function"&&(Of(e,n,h,r),l=e.memoizedState),(a=yr||X0(e,n,a,r,p,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,TE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:tn(e.type,a),o.props=u,d=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Qt(l):(l=bt(n)?Ri:pt.current,l=Ms(e,l));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||p!==l)&&J0(e,o,r,l),yr=!1,p=e.memoizedState,o.state=p,ru(e,r,o,i);var I=e.memoizedState;a!==d||p!==I||kt.current||yr?(typeof y=="function"&&(Of(e,n,y,r),I=e.memoizedState),(u=yr||X0(e,n,u,r,p,I,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),o.props=r,o.state=I,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Uf(t,e,n,r,s,i)}function Uf(t,e,n,r,i,s){KE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&$0(e,n,!1),Qn(t,e,s);r=e.stateNode,Ek.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fs(e,t.child,null,s),e.child=Fs(e,null,a,s)):wt(t,e,a,s),e.memoizedState=r.state,i&&$0(e,n,!0),e.child}function QE(t){var e=t.stateNode;e.pendingContext?z0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&z0(t,e.context,!1),_m(t,e.containerInfo)}function sv(t,e,n,r,i){return js(),fm(i),e.flags|=256,wt(t,e,n,r),e.child}var Bf={dehydrated:null,treeContext:null,retryLane:0};function zf(t){return{baseLanes:t,cachePool:null,transitions:null}}function YE(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Ce,i&1),t===null)return Vf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ju(o,r,0,null),t=Pi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zf(n),e.memoizedState=Bf,t):Am(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Tk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Lr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Lr(a,s):(s=Pi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?zf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Bf,r}return s=t.child,t=s.sibling,r=Lr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Am(t,e){return e=Ju({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ec(t,e,n,r){return r!==null&&fm(r),Fs(e,t.child,null,n),t=Am(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Tk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Pd(Error(U(422))),ec(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ju({mode:"visible",children:r.children},i,0,null),s=Pi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Fs(e,t.child,null,o),e.child.memoizedState=zf(o),e.memoizedState=Bf,s);if(!(e.mode&1))return ec(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(U(419)),r=Pd(s,r,void 0),ec(t,e,o,r)}if(a=(o&t.childLanes)!==0,Pt||a){if(r=Xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Kn(t,i),ln(r,t,i,-1))}return Dm(),r=Pd(Error(U(421))),ec(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Lk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Lt=Rr(i.nextSibling),Mt=e,xe=!0,rn=null,t!==null&&(Wt[Ht++]=On,Wt[Ht++]=Mn,Wt[Ht++]=Ni,On=t.id,Mn=t.overflow,Ni=e),e=Am(e,r.children),e.flags|=4096,e)}function ov(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Lf(t.return,e,n)}function kd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function XE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(wt(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ov(t,n,e);else if(t.tag===19)ov(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&iu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),kd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&iu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}kd(e,!0,n,null,s);break;case"together":kd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xk(t,e,n){switch(e.tag){case 3:QE(e),js();break;case 5:xE(e);break;case 1:bt(e.type)&&Jc(e);break;case 4:_m(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(tu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?YE(t,e,n):(ye(Ce,Ce.current&1),t=Qn(t,e,n),t!==null?t.sibling:null);ye(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return XE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,GE(t,e,n)}return Qn(t,e,n)}var JE,$f,ZE,eT;JE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$f=function(){};ZE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ii(xn.current);var s=null;switch(n){case"input":i=hf(t,i),r=hf(t,r),s=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),s=[];break;case"textarea":i=pf(t,i),r=pf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Yc)}gf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ia.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ia.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&_e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};eT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Bo(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ik(t,e,n){var r=e.pendingProps;switch(dm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(e),null;case 1:return bt(e.type)&&Xc(),lt(e),null;case 3:return r=e.stateNode,Us(),Ee(kt),Ee(pt),Em(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Jl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rn!==null&&(Xf(rn),rn=null))),$f(t,e),lt(e),null;case 5:wm(e);var i=Ii(Oa.current);if(n=e.type,t!==null&&e.stateNode!=null)ZE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return lt(e),null}if(t=Ii(xn.current),Jl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[En]=e,r[Va]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<Xo.length;i++)_e(Xo[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":m0(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":y0(r,s),_e("invalid",r)}gf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xl(r.textContent,a,t),i=["children",""+a]):Ia.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":$l(r),g0(r,s,!0);break;case"textarea":$l(r),v0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Yc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[En]=e,t[Va]=r,JE(t,e,!1,!1),e.stateNode=t;e:{switch(o=yf(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<Xo.length;i++)_e(Xo[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":m0(t,r),i=hf(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),_e("invalid",t);break;case"textarea":y0(t,r),i=pf(t,r),_e("invalid",t);break;default:i=r}gf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Rw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&kw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Sa(t,l):typeof l=="number"&&Sa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ia.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_e("scroll",t):l!=null&&Xp(t,s,l,o))}switch(n){case"input":$l(t),g0(t,r,!1);break;case"textarea":$l(t),v0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+qr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?xs(t,!!r.multiple,s,!1):r.defaultValue!=null&&xs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Yc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return lt(e),null;case 6:if(t&&e.stateNode!=null)eT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Ii(Oa.current),Ii(xn.current),Jl(e)){if(r=e.stateNode,n=e.memoizedProps,r[En]=e,(s=r.nodeValue!==n)&&(t=Mt,t!==null))switch(t.tag){case 3:Xl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[En]=e,e.stateNode=r}return lt(e),null;case 13:if(Ee(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&Lt!==null&&e.mode&1&&!(e.flags&128))vE(),js(),e.flags|=98560,s=!1;else if(s=Jl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[En]=e}else js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;lt(e),s=!1}else rn!==null&&(Xf(rn),rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?He===0&&(He=3):Dm())),e.updateQueue!==null&&(e.flags|=4),lt(e),null);case 4:return Us(),$f(t,e),t===null&&Na(e.stateNode.containerInfo),lt(e),null;case 10:return gm(e.type._context),lt(e),null;case 17:return bt(e.type)&&Xc(),lt(e),null;case 19:if(Ee(Ce),s=e.memoizedState,s===null)return lt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Bo(s,!1);else{if(He!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=iu(t),o!==null){for(e.flags|=128,Bo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&Le()>zs&&(e.flags|=128,r=!0,Bo(s,!1),e.lanes=4194304)}else{if(!r)if(t=iu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xe)return lt(e),null}else 2*Le()-s.renderingStartTime>zs&&n!==1073741824&&(e.flags|=128,r=!0,Bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Le(),e.sibling=null,n=Ce.current,ye(Ce,r?n&1|2:n&1),e):(lt(e),null);case 22:case 23:return Nm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(lt(e),e.subtreeFlags&6&&(e.flags|=8192)):lt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function Sk(t,e){switch(dm(e),e.tag){case 1:return bt(e.type)&&Xc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Us(),Ee(kt),Ee(pt),Em(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wm(e),null;case 13:if(Ee(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Ce),null;case 4:return Us(),null;case 10:return gm(e.type._context),null;case 22:case 23:return Nm(),null;case 24:return null;default:return null}}var tc=!1,dt=!1,Ck=typeof WeakSet=="function"?WeakSet:Set,H=null;function gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function Wf(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var av=!1;function Ak(t,e){if(Af=Gc,t=sE(),um(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,d=t,p=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)p=d,d=y;for(;;){if(d===t)break t;if(p===n&&++u===i&&(a=o),p===s&&++h===r&&(l=o),(y=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pf={focusedElem:t,selectionRange:n},Gc=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var S=I.memoizedProps,A=I.memoizedState,E=e.stateNode,_=E.getSnapshotBeforeUpdate(e.elementType===e.type?S:tn(e.type,S),A);E.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(b){Ne(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return I=av,av=!1,I}function ha(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Wf(e,n,s)}i=i.next}while(i!==r)}}function Yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Hf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function tT(t){var e=t.alternate;e!==null&&(t.alternate=null,tT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[En],delete e[Va],delete e[Rf],delete e[ck],delete e[uk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function nT(t){return t.tag===5||t.tag===3||t.tag===4}function lv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||nT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yc));else if(r!==4&&(t=t.child,t!==null))for(qf(t,e,n),t=t.sibling;t!==null;)qf(t,e,n),t=t.sibling}function Gf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Gf(t,e,n),t=t.sibling;t!==null;)Gf(t,e,n),t=t.sibling}var et=null,nn=!1;function fr(t,e,n){for(n=n.child;n!==null;)rT(t,e,n),n=n.sibling}function rT(t,e,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(zu,n)}catch{}switch(n.tag){case 5:dt||gs(n,e);case 6:var r=et,i=nn;et=null,fr(t,e,n),et=r,nn=i,et!==null&&(nn?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(nn?(t=et,n=n.stateNode,t.nodeType===8?Td(t.parentNode,n):t.nodeType===1&&Td(t,n),ka(t)):Td(et,n.stateNode));break;case 4:r=et,i=nn,et=n.stateNode.containerInfo,nn=!0,fr(t,e,n),et=r,nn=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Wf(n,e,o),i=i.next}while(i!==r)}fr(t,e,n);break;case 1:if(!dt&&(gs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ne(n,e,a)}fr(t,e,n);break;case 21:fr(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,fr(t,e,n),dt=r):fr(t,e,n);break;default:fr(t,e,n)}}function cv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ck),e.forEach(function(r){var i=Ok.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function en(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:et=a.stateNode,nn=!1;break e;case 3:et=a.stateNode.containerInfo,nn=!0;break e;case 4:et=a.stateNode.containerInfo,nn=!0;break e}a=a.return}if(et===null)throw Error(U(160));rT(s,o,i),et=null,nn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)iT(e,t),e=e.sibling}function iT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(en(e,t),vn(t),r&4){try{ha(3,t,t.return),Yu(3,t)}catch(S){Ne(t,t.return,S)}try{ha(5,t,t.return)}catch(S){Ne(t,t.return,S)}}break;case 1:en(e,t),vn(t),r&512&&n!==null&&gs(n,n.return);break;case 5:if(en(e,t),vn(t),r&512&&n!==null&&gs(n,n.return),t.flags&32){var i=t.stateNode;try{Sa(i,"")}catch(S){Ne(t,t.return,S)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Cw(i,s),yf(a,o);var u=yf(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?Rw(i,d):h==="dangerouslySetInnerHTML"?kw(i,d):h==="children"?Sa(i,d):Xp(i,h,d,u)}switch(a){case"input":df(i,s);break;case"textarea":Aw(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?xs(i,!!s.multiple,y,!1):p!==!!s.multiple&&(s.defaultValue!=null?xs(i,!!s.multiple,s.defaultValue,!0):xs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Va]=s}catch(S){Ne(t,t.return,S)}}break;case 6:if(en(e,t),vn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(S){Ne(t,t.return,S)}}break;case 3:if(en(e,t),vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ka(e.containerInfo)}catch(S){Ne(t,t.return,S)}break;case 4:en(e,t),vn(t);break;case 13:en(e,t),vn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(bm=Le())),r&4&&cv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(u=dt)||h,en(e,t),dt=u):en(e,t),vn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(H=t,h=t.child;h!==null;){for(d=H=h;H!==null;){switch(p=H,y=p.child,p.tag){case 0:case 11:case 14:case 15:ha(4,p,p.return);break;case 1:gs(p,p.return);var I=p.stateNode;if(typeof I.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(S){Ne(r,n,S)}}break;case 5:gs(p,p.return);break;case 22:if(p.memoizedState!==null){hv(d);continue}}y!==null?(y.return=p,H=y):hv(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=bw("display",o))}catch(S){Ne(t,t.return,S)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(S){Ne(t,t.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:en(e,t),vn(t),r&4&&cv(t);break;case 21:break;default:en(e,t),vn(t)}}function vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(nT(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Sa(i,""),r.flags&=-33);var s=lv(t);Gf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=lv(t);qf(t,a,o);break;default:throw Error(U(161))}}catch(l){Ne(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Pk(t,e,n){H=t,sT(t)}function sT(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||tc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||dt;a=tc;var u=dt;if(tc=o,(dt=l)&&!u)for(H=i;H!==null;)o=H,l=o.child,o.tag===22&&o.memoizedState!==null?dv(i):l!==null?(l.return=o,H=l):dv(i);for(;s!==null;)H=s,sT(s),s=s.sibling;H=i,tc=a,dt=u}uv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):uv(t)}}function uv(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dt||Yu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&K0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}K0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&ka(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}dt||e.flags&512&&Hf(e)}catch(p){Ne(e,e.return,p)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function hv(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function dv(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yu(4,e)}catch(l){Ne(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ne(e,i,l)}}var s=e.return;try{Hf(e)}catch(l){Ne(e,s,l)}break;case 5:var o=e.return;try{Hf(e)}catch(l){Ne(e,o,l)}}}catch(l){Ne(e,e.return,l)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var kk=Math.ceil,au=ir.ReactCurrentDispatcher,Pm=ir.ReactCurrentOwner,Kt=ir.ReactCurrentBatchConfig,ue=0,Xe=null,Fe=null,rt=0,Vt=0,ys=ri(0),He=0,Ua=null,Vi=0,Xu=0,km=0,da=null,Ct=null,bm=0,zs=1/0,Vn=null,lu=!1,Kf=null,Dr=null,nc=!1,Cr=null,cu=0,fa=0,Qf=null,Ic=-1,Sc=0;function Tt(){return ue&6?Le():Ic!==-1?Ic:Ic=Le()}function Vr(t){return t.mode&1?ue&2&&rt!==0?rt&-rt:dk.transition!==null?(Sc===0&&(Sc=$w()),Sc):(t=de,t!==0||(t=window.event,t=t===void 0?16:Yw(t.type)),t):1}function ln(t,e,n,r){if(50<fa)throw fa=0,Qf=null,Error(U(185));il(t,n,r),(!(ue&2)||t!==Xe)&&(t===Xe&&(!(ue&2)&&(Xu|=n),He===4&&wr(t,rt)),Rt(t,r),n===1&&ue===0&&!(e.mode&1)&&(zs=Le()+500,Gu&&ii()))}function Rt(t,e){var n=t.callbackNode;dP(t,e);var r=qc(t,t===Xe?rt:0);if(r===0)n!==null&&E0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&E0(n),e===1)t.tag===0?hk(fv.bind(null,t)):mE(fv.bind(null,t)),ak(function(){!(ue&6)&&ii()}),n=null;else{switch(Ww(r)){case 1:n=nm;break;case 4:n=Bw;break;case 16:n=Hc;break;case 536870912:n=zw;break;default:n=Hc}n=fT(n,oT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function oT(t,e){if(Ic=-1,Sc=0,ue&6)throw Error(U(327));var n=t.callbackNode;if(Ps()&&t.callbackNode!==n)return null;var r=qc(t,t===Xe?rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=uu(t,r);else{e=r;var i=ue;ue|=2;var s=lT();(Xe!==t||rt!==e)&&(Vn=null,zs=Le()+500,Ai(t,e));do try{Nk();break}catch(a){aT(t,a)}while(1);mm(),au.current=s,ue=i,Fe!==null?e=0:(Xe=null,rt=0,e=He)}if(e!==0){if(e===2&&(i=Tf(t),i!==0&&(r=i,e=Yf(t,i))),e===1)throw n=Ua,Ai(t,0),wr(t,r),Rt(t,Le()),n;if(e===6)wr(t,r);else{if(i=t.current.alternate,!(r&30)&&!bk(i)&&(e=uu(t,r),e===2&&(s=Tf(t),s!==0&&(r=s,e=Yf(t,s))),e===1))throw n=Ua,Ai(t,0),wr(t,r),Rt(t,Le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:vi(t,Ct,Vn);break;case 3:if(wr(t,r),(r&130023424)===r&&(e=bm+500-Le(),10<e)){if(qc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Tt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=bf(vi.bind(null,t,Ct,Vn),e);break}vi(t,Ct,Vn);break;case 4:if(wr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-an(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kk(r/1960))-r,10<r){t.timeoutHandle=bf(vi.bind(null,t,Ct,Vn),r);break}vi(t,Ct,Vn);break;case 5:vi(t,Ct,Vn);break;default:throw Error(U(329))}}}return Rt(t,Le()),t.callbackNode===n?oT.bind(null,t):null}function Yf(t,e){var n=da;return t.current.memoizedState.isDehydrated&&(Ai(t,e).flags|=256),t=uu(t,e),t!==2&&(e=Ct,Ct=n,e!==null&&Xf(e)),t}function Xf(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function bk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wr(t,e){for(e&=~km,e&=~Xu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-an(e),r=1<<n;t[n]=-1,e&=~r}}function fv(t){if(ue&6)throw Error(U(327));Ps();var e=qc(t,0);if(!(e&1))return Rt(t,Le()),null;var n=uu(t,e);if(t.tag!==0&&n===2){var r=Tf(t);r!==0&&(e=r,n=Yf(t,r))}if(n===1)throw n=Ua,Ai(t,0),wr(t,e),Rt(t,Le()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vi(t,Ct,Vn),Rt(t,Le()),null}function Rm(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(zs=Le()+500,Gu&&ii())}}function Li(t){Cr!==null&&Cr.tag===0&&!(ue&6)&&Ps();var e=ue;ue|=1;var n=Kt.transition,r=de;try{if(Kt.transition=null,de=1,t)return t()}finally{de=r,Kt.transition=n,ue=e,!(ue&6)&&ii()}}function Nm(){Vt=ys.current,Ee(ys)}function Ai(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ok(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(dm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xc();break;case 3:Us(),Ee(kt),Ee(pt),Em();break;case 5:wm(r);break;case 4:Us();break;case 13:Ee(Ce);break;case 19:Ee(Ce);break;case 10:gm(r.type._context);break;case 22:case 23:Nm()}n=n.return}if(Xe=t,Fe=t=Lr(t.current,null),rt=Vt=e,He=0,Ua=null,km=Xu=Vi=0,Ct=da=null,xi!==null){for(e=0;e<xi.length;e++)if(n=xi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xi=null}return t}function aT(t,e){do{var n=Fe;try{if(mm(),Ec.current=ou,su){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}su=!1}if(Di=0,Ye=We=Pe=null,ua=!1,Ma=0,Pm.current=null,n===null||n.return===null){He=1,Ua=e,Fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=ev(o);if(y!==null){y.flags&=-257,tv(y,o,a,s,e),y.mode&1&&Z0(s,u,e),e=y,l=u;var I=e.updateQueue;if(I===null){var S=new Set;S.add(l),e.updateQueue=S}else I.add(l);break e}else{if(!(e&1)){Z0(s,u,e),Dm();break e}l=Error(U(426))}}else if(xe&&a.mode&1){var A=ev(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),tv(A,o,a,s,e),fm(Bs(l,a));break e}}s=l=Bs(l,a),He!==4&&(He=2),da===null?da=[s]:da.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=WE(s,l,e);G0(s,E);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Dr===null||!Dr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=HE(s,a,e);G0(s,b);break e}}s=s.return}while(s!==null)}uT(n)}catch(L){e=L,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(1)}function lT(){var t=au.current;return au.current=ou,t===null?ou:t}function Dm(){(He===0||He===3||He===2)&&(He=4),Xe===null||!(Vi&268435455)&&!(Xu&268435455)||wr(Xe,rt)}function uu(t,e){var n=ue;ue|=2;var r=lT();(Xe!==t||rt!==e)&&(Vn=null,Ai(t,e));do try{Rk();break}catch(i){aT(t,i)}while(1);if(mm(),ue=n,au.current=r,Fe!==null)throw Error(U(261));return Xe=null,rt=0,He}function Rk(){for(;Fe!==null;)cT(Fe)}function Nk(){for(;Fe!==null&&!rP();)cT(Fe)}function cT(t){var e=dT(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?uT(t):Fe=e,Pm.current=null}function uT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Sk(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,Fe=null;return}}else if(n=Ik(n,e,Vt),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);He===0&&(He=5)}function vi(t,e,n){var r=de,i=Kt.transition;try{Kt.transition=null,de=1,Dk(t,e,n,r)}finally{Kt.transition=i,de=r}return null}function Dk(t,e,n,r){do Ps();while(Cr!==null);if(ue&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(fP(t,s),t===Xe&&(Fe=Xe=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nc||(nc=!0,fT(Hc,function(){return Ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Kt.transition,Kt.transition=null;var o=de;de=1;var a=ue;ue|=4,Pm.current=null,Ak(t,n),iT(n,t),ZP(Pf),Gc=!!Af,Pf=Af=null,t.current=n,Pk(n),iP(),ue=a,de=o,Kt.transition=s}else t.current=n;if(nc&&(nc=!1,Cr=t,cu=i),s=t.pendingLanes,s===0&&(Dr=null),aP(n.stateNode),Rt(t,Le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(lu)throw lu=!1,t=Kf,Kf=null,t;return cu&1&&t.tag!==0&&Ps(),s=t.pendingLanes,s&1?t===Qf?fa++:(fa=0,Qf=t):fa=0,ii(),null}function Ps(){if(Cr!==null){var t=Ww(cu),e=Kt.transition,n=de;try{if(Kt.transition=null,de=16>t?16:t,Cr===null)var r=!1;else{if(t=Cr,Cr=null,cu=0,ue&6)throw Error(U(331));var i=ue;for(ue|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(H=u;H!==null;){var h=H;switch(h.tag){case 0:case 11:case 15:ha(8,h,s)}var d=h.child;if(d!==null)d.return=h,H=d;else for(;H!==null;){h=H;var p=h.sibling,y=h.return;if(tT(h),h===u){H=null;break}if(p!==null){p.return=y,H=p;break}H=y}}}var I=s.alternate;if(I!==null){var S=I.child;if(S!==null){I.child=null;do{var A=S.sibling;S.sibling=null,S=A}while(S!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ha(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,H=E;break e}H=s.return}}var _=t.current;for(H=_;H!==null;){o=H;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,H=v;else e:for(o=_;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yu(9,a)}}catch(L){Ne(a,a.return,L)}if(a===o){H=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,H=b;break e}H=a.return}}if(ue=i,ii(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(zu,t)}catch{}r=!0}return r}finally{de=n,Kt.transition=e}}return!1}function pv(t,e,n){e=Bs(n,e),e=WE(t,e,1),t=Nr(t,e,1),e=Tt(),t!==null&&(il(t,1,e),Rt(t,e))}function Ne(t,e,n){if(t.tag===3)pv(t,t,n);else for(;e!==null;){if(e.tag===3){pv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dr===null||!Dr.has(r))){t=Bs(n,t),t=HE(e,t,1),e=Nr(e,t,1),t=Tt(),e!==null&&(il(e,1,t),Rt(e,t));break}}e=e.return}}function Vk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Tt(),t.pingedLanes|=t.suspendedLanes&n,Xe===t&&(rt&n)===n&&(He===4||He===3&&(rt&130023424)===rt&&500>Le()-bm?Ai(t,0):km|=n),Rt(t,e)}function hT(t,e){e===0&&(t.mode&1?(e=ql,ql<<=1,!(ql&130023424)&&(ql=4194304)):e=1);var n=Tt();t=Kn(t,e),t!==null&&(il(t,e,n),Rt(t,n))}function Lk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),hT(t,n)}function Ok(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),hT(t,n)}var dT;dT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||kt.current)Pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pt=!1,xk(t,e,n);Pt=!!(t.flags&131072)}else Pt=!1,xe&&e.flags&1048576&&gE(e,eu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;xc(t,e),t=e.pendingProps;var i=Ms(e,pt.current);As(e,n),i=xm(null,e,r,t,i,n);var s=Im();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bt(r)?(s=!0,Jc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vm(e),i.updater=Qu,e.stateNode=i,i._reactInternals=e,Mf(e,r,t,n),e=Uf(null,e,r,!0,s,n)):(e.tag=0,xe&&s&&hm(e),wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(xc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=jk(r),t=tn(r,t),i){case 0:e=Ff(null,e,r,t,n);break e;case 1:e=iv(null,e,r,t,n);break e;case 11:e=nv(null,e,r,t,n);break e;case 14:e=rv(null,e,r,tn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),Ff(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),iv(t,e,r,i,n);case 3:e:{if(QE(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,TE(t,e),ru(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Bs(Error(U(423)),e),e=sv(t,e,r,n,i);break e}else if(r!==i){i=Bs(Error(U(424)),e),e=sv(t,e,r,n,i);break e}else for(Lt=Rr(e.stateNode.containerInfo.firstChild),Mt=e,xe=!0,rn=null,n=wE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(js(),r===i){e=Qn(t,e,n);break e}wt(t,e,r,n)}e=e.child}return e;case 5:return xE(e),t===null&&Vf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,kf(r,i)?o=null:s!==null&&kf(r,s)&&(e.flags|=32),KE(t,e),wt(t,e,o,n),e.child;case 6:return t===null&&Vf(e),null;case 13:return YE(t,e,n);case 4:return _m(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fs(e,null,r,n):wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),nv(t,e,r,i,n);case 7:return wt(t,e,e.pendingProps,n),e.child;case 8:return wt(t,e,e.pendingProps.children,n),e.child;case 12:return wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(tu,r._currentValue),r._currentValue=o,s!==null)if(un(s.value,o)){if(s.children===i.children&&!kt.current){e=Qn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Bn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Lf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Lf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,As(e,n),i=Qt(i),r=r(i),e.flags|=1,wt(t,e,r,n),e.child;case 14:return r=e.type,i=tn(r,e.pendingProps),i=tn(r.type,i),rv(t,e,r,i,n);case 15:return qE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),xc(t,e),e.tag=1,bt(r)?(t=!0,Jc(e)):t=!1,As(e,n),$E(e,r,i),Mf(e,r,i,n),Uf(null,e,r,!0,t,n);case 19:return XE(t,e,n);case 22:return GE(t,e,n)}throw Error(U(156,e.tag))};function fT(t,e){return Uw(t,e)}function Mk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(t,e,n,r){return new Mk(t,e,n,r)}function Vm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jk(t){if(typeof t=="function")return Vm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zp)return 11;if(t===em)return 14}return 2}function Lr(t,e){var n=t.alternate;return n===null?(n=Gt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Cc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Vm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case as:return Pi(n.children,i,s,e);case Jp:o=8,i|=8;break;case af:return t=Gt(12,n,e,i|2),t.elementType=af,t.lanes=s,t;case lf:return t=Gt(13,n,e,i),t.elementType=lf,t.lanes=s,t;case cf:return t=Gt(19,n,e,i),t.elementType=cf,t.lanes=s,t;case xw:return Ju(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ew:o=10;break e;case Tw:o=9;break e;case Zp:o=11;break e;case em:o=14;break e;case gr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Gt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Pi(t,e,n,r){return t=Gt(7,t,r,e),t.lanes=n,t}function Ju(t,e,n,r){return t=Gt(22,t,r,e),t.elementType=xw,t.lanes=n,t.stateNode={isHidden:!1},t}function bd(t,e,n){return t=Gt(6,t,null,e),t.lanes=n,t}function Rd(t,e,n){return e=Gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Fk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hd(0),this.expirationTimes=hd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Lm(t,e,n,r,i,s,o,a,l){return t=new Fk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vm(s),t}function Uk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:os,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function pT(t){if(!t)return Gr;t=t._reactInternals;e:{if(Wi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(bt(n))return pE(t,n,e)}return e}function mT(t,e,n,r,i,s,o,a,l){return t=Lm(n,r,!0,t,i,s,o,a,l),t.context=pT(null),n=t.current,r=Tt(),i=Vr(n),s=Bn(r,i),s.callback=e??null,Nr(n,s,i),t.current.lanes=i,il(t,i,r),Rt(t,r),t}function Zu(t,e,n,r){var i=e.current,s=Tt(),o=Vr(i);return n=pT(n),e.context===null?e.context=n:e.pendingContext=n,e=Bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Nr(i,e,o),t!==null&&(ln(t,i,o,s),wc(t,i,o)),o}function hu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Om(t,e){mv(t,e),(t=t.alternate)&&mv(t,e)}function Bk(){return null}var gT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mm(t){this._internalRoot=t}eh.prototype.render=Mm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Zu(t,e,null,null)};eh.prototype.unmount=Mm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Li(function(){Zu(null,t,null,null)}),e[Gn]=null}};function eh(t){this._internalRoot=t}eh.prototype.unstable_scheduleHydration=function(t){if(t){var e=Gw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_r.length&&e!==0&&e<_r[n].priority;n++);_r.splice(n,0,t),n===0&&Qw(t)}};function jm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gv(){}function zk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=hu(o);s.call(u)}}var o=mT(e,r,t,0,null,!1,!1,"",gv);return t._reactRootContainer=o,t[Gn]=o.current,Na(t.nodeType===8?t.parentNode:t),Li(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=hu(l);a.call(u)}}var l=Lm(t,0,!1,null,null,!1,!1,"",gv);return t._reactRootContainer=l,t[Gn]=l.current,Na(t.nodeType===8?t.parentNode:t),Li(function(){Zu(e,l,n,r)}),l}function nh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=hu(o);a.call(l)}}Zu(e,o,t,i)}else o=zk(n,e,t,i,r);return hu(o)}Hw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Yo(e.pendingLanes);n!==0&&(rm(e,n|1),Rt(e,Le()),!(ue&6)&&(zs=Le()+500,ii()))}break;case 13:Li(function(){var r=Kn(t,1);if(r!==null){var i=Tt();ln(r,t,1,i)}}),Om(t,1)}};im=function(t){if(t.tag===13){var e=Kn(t,134217728);if(e!==null){var n=Tt();ln(e,t,134217728,n)}Om(t,134217728)}};qw=function(t){if(t.tag===13){var e=Vr(t),n=Kn(t,e);if(n!==null){var r=Tt();ln(n,t,e,r)}Om(t,e)}};Gw=function(){return de};Kw=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};_f=function(t,e,n){switch(e){case"input":if(df(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=qu(r);if(!i)throw Error(U(90));Sw(r),df(r,i)}}}break;case"textarea":Aw(t,n);break;case"select":e=n.value,e!=null&&xs(t,!!n.multiple,e,!1)}};Vw=Rm;Lw=Li;var $k={usingClientEntryPoint:!1,Events:[ol,hs,qu,Nw,Dw,Rm]},zo={findFiberByHostInstance:Ti,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wk={bundleType:zo.bundleType,version:zo.version,rendererPackageName:zo.rendererPackageName,rendererConfig:zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jw(t),t===null?null:t.stateNode},findFiberByHostInstance:zo.findFiberByHostInstance||Bk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{zu=rc.inject(Wk),Tn=rc}catch{}}Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$k;Ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jm(e))throw Error(U(200));return Uk(t,e,null,n)};Ut.createRoot=function(t,e){if(!jm(t))throw Error(U(299));var n=!1,r="",i=gT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Lm(t,1,!1,null,null,n,!1,r,i),t[Gn]=e.current,Na(t.nodeType===8?t.parentNode:t),new Mm(e)};Ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=jw(e),t=t===null?null:t.stateNode,t};Ut.flushSync=function(t){return Li(t)};Ut.hydrate=function(t,e,n){if(!th(e))throw Error(U(200));return nh(null,t,e,!0,n)};Ut.hydrateRoot=function(t,e,n){if(!jm(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=gT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=mT(e,null,t,1,n??null,i,!1,s,o),t[Gn]=e.current,Na(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new eh(e)};Ut.render=function(t,e,n){if(!th(e))throw Error(U(200));return nh(null,t,e,!1,n)};Ut.unmountComponentAtNode=function(t){if(!th(t))throw Error(U(40));return t._reactRootContainer?(Li(function(){nh(null,null,t,!1,function(){t._reactRootContainer=null,t[Gn]=null})}),!0):!1};Ut.unstable_batchedUpdates=Rm;Ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!th(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return nh(t,e,n,!1,r)};Ut.version="18.3.1-next-f1338f8080-20240426";function yT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yT)}catch(t){console.error(t)}}yT(),yw.exports=Ut;var Hk=yw.exports,yv=Hk;sf.createRoot=yv.createRoot,sf.hydrateRoot=yv.hydrateRoot;const qk="modulepreload",Gk=function(t){return"/"+t},vv={},Kk=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Gk(s),s in vv)return;vv[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const d=i[h];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":qk,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((h,d)=>{u.addEventListener("load",h),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var _v="popstate";function Qk(t={}){function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Jf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ba(i)}return Xk(e,n,null,t)}function Ie(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Xt(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Yk(){return Math.random().toString(36).substring(2,10)}function wv(t,e){return{usr:t.state,key:t.key,idx:e}}function Jf(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?ro(e):e,state:n,key:e&&e.key||r||Yk()}}function Ba({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function ro(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function Xk(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a="POP",l=null,u=h();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function h(){return(o.state||{idx:null}).idx}function d(){a="POP";let A=h(),E=A==null?null:A-u;u=A,l&&l({action:a,location:S.location,delta:E})}function p(A,E){a="PUSH";let _=Jf(S.location,A,E);n&&n(_,A),u=h()+1;let v=wv(_,u),b=S.createHref(_);try{o.pushState(v,"",b)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(b)}s&&l&&l({action:a,location:S.location,delta:1})}function y(A,E){a="REPLACE";let _=Jf(S.location,A,E);n&&n(_,A),u=h();let v=wv(_,u),b=S.createHref(_);o.replaceState(v,"",b),s&&l&&l({action:a,location:S.location,delta:0})}function I(A){return Jk(A)}let S={get action(){return a},get location(){return t(i,o)},listen(A){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(_v,d),l=A,()=>{i.removeEventListener(_v,d),l=null}},createHref(A){return e(i,A)},createURL:I,encodeLocation(A){let E=I(A);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:p,replace:y,go(A){return o.go(A)}};return S}function Jk(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ie(n,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:Ba(t);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function vT(t,e,n="/"){return Zk(t,e,n,!1)}function Zk(t,e,n,r){let i=typeof e=="string"?ro(e):e,s=Yn(i.pathname||"/",n);if(s==null)return null;let o=_T(t);eb(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=hb(s);a=cb(o[l],u,r)}return a}function _T(t,e=[],n=[],r="",i=!1){let s=(o,a,l=i,u)=>{let h={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};if(h.relativePath.startsWith("/")){if(!h.relativePath.startsWith(r)&&l)return;Ie(h.relativePath.startsWith(r),`Absolute route path "${h.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(r.length)}let d=zn([r,h.relativePath]),p=n.concat(h);o.children&&o.children.length>0&&(Ie(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),_T(o.children,e,p,d,l)),!(o.path==null&&!o.index)&&e.push({path:d,score:ab(d,o.index),routesMeta:p})};return t.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))s(o,a);else for(let u of wT(o.path))s(o,a,!0,u)}),e}function wT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=wT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function eb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:lb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var tb=/^:[\w-]+$/,nb=3,rb=2,ib=1,sb=10,ob=-2,Ev=t=>t==="*";function ab(t,e){let n=t.split("/"),r=n.length;return n.some(Ev)&&(r+=ob),e&&(r+=rb),n.filter(i=>!Ev(i)).reduce((i,s)=>i+(tb.test(s)?nb:s===""?ib:sb),r)}function lb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function cb(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",d=du({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h),p=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=du({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:zn([s,d.pathname]),pathnameBase:gb(zn([s,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(s=zn([s,d.pathnameBase]))}return o}function du(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ub(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,{paramName:h,isOptional:d},p)=>{if(h==="*"){let I=a[p]||"";o=s.slice(0,s.length-I.length).replace(/(.)\/+$/,"$1")}const y=a[p];return d&&!y?u[h]=void 0:u[h]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function ub(t,e=!1,n=!0){Xt(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function hb(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Xt(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Yn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}var db=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fb=t=>db.test(t);function pb(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ro(t):t,s;if(n)if(fb(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Xt(!1,`Pathnames cannot have embedded double slashes - normalizing ${o} -> ${n}`)}n.startsWith("/")?s=Tv(n.substring(1),"/"):s=Tv(n,e)}else s=e;return{pathname:s,search:yb(r),hash:vb(i)}}function Tv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Nd(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function mb(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Fm(t){let e=mb(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function Um(t,e,n,r=!1){let i;typeof t=="string"?i=ro(t):(i={...t},Ie(!i.pathname||!i.pathname.includes("?"),Nd("?","pathname","search",i)),Ie(!i.pathname||!i.pathname.includes("#"),Nd("#","pathname","hash",i)),Ie(!i.search||!i.search.includes("#"),Nd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}a=d>=0?e[d]:"/"}let l=pb(i,a),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}var zn=t=>t.join("/").replace(/\/\/+/g,"/"),gb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),yb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,vb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function _b(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function wb(t){return t.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ET=["POST","PUT","PATCH","DELETE"];new Set(ET);var Eb=["GET",...ET];new Set(Eb);var io=N.createContext(null);io.displayName="DataRouter";var rh=N.createContext(null);rh.displayName="DataRouterState";N.createContext(!1);var TT=N.createContext({isTransitioning:!1});TT.displayName="ViewTransition";var Tb=N.createContext(new Map);Tb.displayName="Fetchers";var xb=N.createContext(null);xb.displayName="Await";var Jt=N.createContext(null);Jt.displayName="Navigation";var ll=N.createContext(null);ll.displayName="Location";var fn=N.createContext({outlet:null,matches:[],isDataRoute:!1});fn.displayName="Route";var Bm=N.createContext(null);Bm.displayName="RouteError";function Ib(t,{relative:e}={}){Ie(so(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=N.useContext(Jt),{hash:i,pathname:s,search:o}=cl(t,{relative:e}),a=s;return n!=="/"&&(a=s==="/"?n:zn([n,s])),r.createHref({pathname:a,search:o,hash:i})}function so(){return N.useContext(ll)!=null}function sr(){return Ie(so(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(ll).location}var xT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function IT(t){N.useContext(Jt).static||N.useLayoutEffect(t)}function oo(){let{isDataRoute:t}=N.useContext(fn);return t?jb():Sb()}function Sb(){Ie(so(),"useNavigate() may be used only in the context of a <Router> component.");let t=N.useContext(io),{basename:e,navigator:n}=N.useContext(Jt),{matches:r}=N.useContext(fn),{pathname:i}=sr(),s=JSON.stringify(Fm(r)),o=N.useRef(!1);return IT(()=>{o.current=!0}),N.useCallback((l,u={})=>{if(Xt(o.current,xT),!o.current)return;if(typeof l=="number"){n.go(l);return}let h=Um(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:zn([e,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[e,n,s,i,t])}N.createContext(null);function Cb(){let{matches:t}=N.useContext(fn),e=t[t.length-1];return e?e.params:{}}function cl(t,{relative:e}={}){let{matches:n}=N.useContext(fn),{pathname:r}=sr(),i=JSON.stringify(Fm(n));return N.useMemo(()=>Um(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function Ab(t,e){return ST(t,e)}function ST(t,e,n,r,i){var _;Ie(so(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=N.useContext(Jt),{matches:o}=N.useContext(fn),a=o[o.length-1],l=a?a.params:{},u=a?a.pathname:"/",h=a?a.pathnameBase:"/",d=a&&a.route;{let v=d&&d.path||"";CT(u,!d||v.endsWith("*")||v.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v==="/"?"*":`${v}/*`}">.`)}let p=sr(),y;if(e){let v=typeof e=="string"?ro(e):e;Ie(h==="/"||((_=v.pathname)==null?void 0:_.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${v.pathname}" was given in the \`location\` prop.`),y=v}else y=p;let I=y.pathname||"/",S=I;if(h!=="/"){let v=h.replace(/^\//,"").split("/");S="/"+I.replace(/^\//,"").split("/").slice(v.length).join("/")}let A=vT(t,{pathname:S});Xt(d||A!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Xt(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=Nb(A&&A.map(v=>Object.assign({},v,{params:Object.assign({},l,v.params),pathname:zn([h,s.encodeLocation?s.encodeLocation(v.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?h:zn([h,s.encodeLocation?s.encodeLocation(v.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:v.pathnameBase])})),o,n,r,i);return e&&E?N.createElement(ll.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},E):E}function Pb(){let t=Mb(),e=_b(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:s},"ErrorBoundary")," or"," ",N.createElement("code",{style:s},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,o)}var kb=N.createElement(Pb,null),bb=class extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){return this.state.error!==void 0?N.createElement(fn.Provider,{value:this.props.routeContext},N.createElement(Bm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Rb({routeContext:t,match:e,children:n}){let r=N.useContext(io);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),N.createElement(fn.Provider,{value:t},n)}function Nb(t,e=[],n=null,r=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,o=n==null?void 0:n.errors;if(o!=null){let h=s.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);Ie(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),s=s.slice(0,Math.min(s.length,h+1))}let a=!1,l=-1;if(n)for(let h=0;h<s.length;h++){let d=s[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(l=h),d.route.id){let{loaderData:p,errors:y}=n,I=d.route.loader&&!p.hasOwnProperty(d.route.id)&&(!y||y[d.route.id]===void 0);if(d.route.lazy||I){a=!0,l>=0?s=s.slice(0,l+1):s=[s[0]];break}}}let u=n&&r?(h,d)=>{var p,y;r(h,{location:n.location,params:((y=(p=n.matches)==null?void 0:p[0])==null?void 0:y.params)??{},unstable_pattern:wb(n.matches),errorInfo:d})}:void 0;return s.reduceRight((h,d,p)=>{let y,I=!1,S=null,A=null;n&&(y=o&&d.route.id?o[d.route.id]:void 0,S=d.route.errorElement||kb,a&&(l<0&&p===0?(CT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,A=null):l===p&&(I=!0,A=d.route.hydrateFallbackElement||null)));let E=e.concat(s.slice(0,p+1)),_=()=>{let v;return y?v=S:I?v=A:d.route.Component?v=N.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=h,N.createElement(Rb,{match:d,routeContext:{outlet:h,matches:E,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?N.createElement(bb,{location:n.location,revalidation:n.revalidation,component:S,error:y,children:_(),routeContext:{outlet:null,matches:E,isDataRoute:!0},onError:u}):_()},null)}function zm(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Db(t){let e=N.useContext(io);return Ie(e,zm(t)),e}function Vb(t){let e=N.useContext(rh);return Ie(e,zm(t)),e}function Lb(t){let e=N.useContext(fn);return Ie(e,zm(t)),e}function $m(t){let e=Lb(t),n=e.matches[e.matches.length-1];return Ie(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function Ob(){return $m("useRouteId")}function Mb(){var r;let t=N.useContext(Bm),e=Vb("useRouteError"),n=$m("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function jb(){let{router:t}=Db("useNavigate"),e=$m("useNavigate"),n=N.useRef(!1);return IT(()=>{n.current=!0}),N.useCallback(async(i,s={})=>{Xt(n.current,xT),n.current&&(typeof i=="number"?await t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var xv={};function CT(t,e,n){!e&&!xv[t]&&(xv[t]=!0,Xt(!1,n))}N.memo(Fb);function Fb({routes:t,future:e,state:n,unstable_onError:r}){return ST(t,void 0,n,r,e)}function AT({to:t,replace:e,state:n,relative:r}){Ie(so(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=N.useContext(Jt);Xt(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=N.useContext(fn),{pathname:o}=sr(),a=oo(),l=Um(t,Fm(s),o,r==="path"),u=JSON.stringify(l);return N.useEffect(()=>{a(JSON.parse(u),{replace:e,state:n,relative:r})},[a,u,r,e,n]),null}function Dn(t){Ie(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ub({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1,unstable_useTransitions:o}){Ie(!so(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=t.replace(/^\/*/,"/"),l=N.useMemo(()=>({basename:a,navigator:i,static:s,unstable_useTransitions:o,future:{}}),[a,i,s,o]);typeof n=="string"&&(n=ro(n));let{pathname:u="/",search:h="",hash:d="",state:p=null,key:y="default"}=n,I=N.useMemo(()=>{let S=Yn(u,a);return S==null?null:{location:{pathname:S,search:h,hash:d,state:p,key:y},navigationType:r}},[a,u,h,d,p,y,r]);return Xt(I!=null,`<Router basename="${a}"> is not able to match the URL "${u}${h}${d}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:N.createElement(Jt.Provider,{value:l},N.createElement(ll.Provider,{children:e,value:I}))}function Bb({children:t,location:e}){return Ab(Zf(t),e)}function Zf(t,e=[]){let n=[];return N.Children.forEach(t,(r,i)=>{if(!N.isValidElement(r))return;let s=[...e,i];if(r.type===N.Fragment){n.push.apply(n,Zf(r.props.children,s));return}Ie(r.type===Dn,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ie(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Zf(r.props.children,s)),n.push(o)}),n}var Ac="get",Pc="application/x-www-form-urlencoded";function ih(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function zb(t){return ih(t)&&t.tagName.toLowerCase()==="button"}function $b(t){return ih(t)&&t.tagName.toLowerCase()==="form"}function Wb(t){return ih(t)&&t.tagName.toLowerCase()==="input"}function Hb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function qb(t,e){return t.button===0&&(!e||e==="_self")&&!Hb(t)}var ic=null;function Gb(){if(ic===null)try{new FormData(document.createElement("form"),0),ic=!1}catch{ic=!0}return ic}var Kb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Dd(t){return t!=null&&!Kb.has(t)?(Xt(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pc}"`),null):t}function Qb(t,e){let n,r,i,s,o;if($b(t)){let a=t.getAttribute("action");r=a?Yn(a,e):null,n=t.getAttribute("method")||Ac,i=Dd(t.getAttribute("enctype"))||Pc,s=new FormData(t)}else if(zb(t)||Wb(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||a.getAttribute("action");if(r=l?Yn(l,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||Ac,i=Dd(t.getAttribute("formenctype"))||Dd(a.getAttribute("enctype"))||Pc,s=new FormData(a,t),!Gb()){let{name:u,type:h,value:d}=t;if(h==="image"){let p=u?`${u}.`:"";s.append(`${p}x`,"0"),s.append(`${p}y`,"0")}else u&&s.append(u,d)}}else{if(ih(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ac,r=null,i=Pc,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Wm(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Yb(t,e,n){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname=`_root.${n}`:e&&Yn(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function Xb(t,e){if(t.id in e)return e[t.id];try{let n=await Kk(()=>import(t.module),[]);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Jb(t){return t!=null&&typeof t.page=="string"}function Zb(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function e2(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await Xb(s,n);return o.links?o.links():[]}return[]}));return i2(r.flat(1).filter(Zb).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Iv(t,e,n,r,i,s){let o=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,a=(l,u)=>{var h;return n[u].pathname!==l.pathname||((h=n[u].route.path)==null?void 0:h.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,u)=>o(l,u)||a(l,u)):s==="data"?e.filter((l,u)=>{var d;let h=r.routes[l.route.id];if(!h||!h.hasLoader)return!1;if(o(l,u)||a(l,u))return!0;if(l.route.shouldRevalidate){let p=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function t2(t,e,{includeHydrateFallback:n}={}){return n2(t.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function n2(t){return[...new Set(t)]}function r2(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function i2(t,e){let n=new Set,r=new Set(e);return t.reduce((i,s)=>{if(e&&!Jb(s)&&s.as==="script"&&s.href&&r.has(s.href))return i;let a=JSON.stringify(r2(s));return n.has(a)||(n.add(a),i.push({key:a,link:s})),i},[])}function PT(){let t=N.useContext(io);return Wm(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function s2(){let t=N.useContext(rh);return Wm(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Hm=N.createContext(void 0);Hm.displayName="FrameworkContext";function kT(){let t=N.useContext(Hm);return Wm(t,"You must render this element inside a <HydratedRouter> element"),t}function o2(t,e){let n=N.useContext(Hm),[r,i]=N.useState(!1),[s,o]=N.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:u,onMouseLeave:h,onTouchStart:d}=e,p=N.useRef(null);N.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let S=E=>{E.forEach(_=>{o(_.isIntersecting)})},A=new IntersectionObserver(S,{threshold:.5});return p.current&&A.observe(p.current),()=>{A.disconnect()}}},[t]),N.useEffect(()=>{if(r){let S=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(S)}}},[r]);let y=()=>{i(!0)},I=()=>{i(!1),o(!1)};return n?t!=="intent"?[s,p,{}]:[s,p,{onFocus:$o(a,y),onBlur:$o(l,I),onMouseEnter:$o(u,y),onMouseLeave:$o(h,I),onTouchStart:$o(d,y)}]:[!1,p,{}]}function $o(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function a2({page:t,...e}){let{router:n}=PT(),r=N.useMemo(()=>vT(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?N.createElement(c2,{page:t,matches:r,...e}):null}function l2(t){let{manifest:e,routeModules:n}=kT(),[r,i]=N.useState([]);return N.useEffect(()=>{let s=!1;return e2(t,e,n).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,n]),r}function c2({page:t,matches:e,...n}){let r=sr(),{manifest:i,routeModules:s}=kT(),{basename:o}=PT(),{loaderData:a,matches:l}=s2(),u=N.useMemo(()=>Iv(t,e,l,i,r,"data"),[t,e,l,i,r]),h=N.useMemo(()=>Iv(t,e,l,i,r,"assets"),[t,e,l,i,r]),d=N.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let I=new Set,S=!1;if(e.forEach(E=>{var v;let _=i.routes[E.route.id];!_||!_.hasLoader||(!u.some(b=>b.route.id===E.route.id)&&E.route.id in a&&((v=s[E.route.id])!=null&&v.shouldRevalidate)||_.hasClientLoader?S=!0:I.add(E.route.id))}),I.size===0)return[];let A=Yb(t,o,"data");return S&&I.size>0&&A.searchParams.set("_routes",e.filter(E=>I.has(E.route.id)).map(E=>E.route.id).join(",")),[A.pathname+A.search]},[o,a,r,i,u,e,t,s]),p=N.useMemo(()=>t2(h,i),[h,i]),y=l2(h);return N.createElement(N.Fragment,null,d.map(I=>N.createElement("link",{key:I,rel:"prefetch",as:"fetch",href:I,...n})),p.map(I=>N.createElement("link",{key:I,rel:"modulepreload",href:I,...n})),y.map(({key:I,link:S})=>N.createElement("link",{key:I,nonce:n.nonce,...S})))}function u2(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var bT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{bT&&(window.__reactRouterVersion="7.10.1")}catch{}function h2({basename:t,children:e,unstable_useTransitions:n,window:r}){let i=N.useRef();i.current==null&&(i.current=Qk({window:r,v5Compat:!0}));let s=i.current,[o,a]=N.useState({action:s.action,location:s.location}),l=N.useCallback(u=>{n===!1?a(u):N.startTransition(()=>a(u))},[n]);return N.useLayoutEffect(()=>s.listen(l),[s,l]),N.createElement(Ub,{basename:t,children:e,location:o.location,navigationType:o.action,navigator:s,unstable_useTransitions:n===!0})}var RT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Or=N.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:h,viewTransition:d,...p},y){let{basename:I,unstable_useTransitions:S}=N.useContext(Jt),A=typeof u=="string"&&RT.test(u),E,_=!1;if(typeof u=="string"&&A&&(E=u,bT))try{let P=new URL(window.location.href),R=u.startsWith("//")?new URL(P.protocol+u):new URL(u),D=Yn(R.pathname,I);R.origin===P.origin&&D!=null?u=D+R.search+R.hash:_=!0}catch{Xt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=Ib(u,{relative:i}),[b,L,M]=o2(r,p),x=m2(u,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:d,unstable_useTransitions:S});function w(P){e&&e(P),P.defaultPrevented||x(P)}let C=N.createElement("a",{...p,...M,href:E||v,onClick:_||s?e:w,ref:u2(y,L),target:l,"data-discover":!A&&n==="render"?"true":void 0});return b&&!A?N.createElement(N.Fragment,null,C,N.createElement(a2,{page:v})):C});Or.displayName="Link";var d2=N.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:a,children:l,...u},h){let d=cl(o,{relative:u.relative}),p=sr(),y=N.useContext(rh),{navigator:I,basename:S}=N.useContext(Jt),A=y!=null&&w2(d)&&a===!0,E=I.encodeLocation?I.encodeLocation(d).pathname:d.pathname,_=p.pathname,v=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(_=_.toLowerCase(),v=v?v.toLowerCase():null,E=E.toLowerCase()),v&&S&&(v=Yn(v,S)||v);const b=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let L=_===E||!i&&_.startsWith(E)&&_.charAt(b)==="/",M=v!=null&&(v===E||!i&&v.startsWith(E)&&v.charAt(E.length)==="/"),x={isActive:L,isPending:M,isTransitioning:A},w=L?e:void 0,C;typeof r=="function"?C=r(x):C=[r,L?"active":null,M?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let P=typeof s=="function"?s(x):s;return N.createElement(Or,{...u,"aria-current":w,className:C,ref:h,style:P,to:o,viewTransition:a},typeof l=="function"?l(x):l)});d2.displayName="NavLink";var f2=N.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:o=Ac,action:a,onSubmit:l,relative:u,preventScrollReset:h,viewTransition:d,...p},y)=>{let{unstable_useTransitions:I}=N.useContext(Jt),S=v2(),A=_2(a,{relative:u}),E=o.toLowerCase()==="get"?"get":"post",_=typeof a=="string"&&RT.test(a),v=b=>{if(l&&l(b),b.defaultPrevented)return;b.preventDefault();let L=b.nativeEvent.submitter,M=(L==null?void 0:L.getAttribute("formmethod"))||o,x=()=>S(L||b.currentTarget,{fetcherKey:e,method:M,navigate:n,replace:i,state:s,relative:u,preventScrollReset:h,viewTransition:d});I&&n!==!1?N.startTransition(()=>x()):x()};return N.createElement("form",{ref:y,method:E,action:A,onSubmit:r?l:v,...p,"data-discover":!_&&t==="render"?"true":void 0})});f2.displayName="Form";function p2(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function NT(t){let e=N.useContext(io);return Ie(e,p2(t)),e}function m2(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:o,unstable_useTransitions:a}={}){let l=oo(),u=sr(),h=cl(t,{relative:s});return N.useCallback(d=>{if(qb(d,e)){d.preventDefault();let p=n!==void 0?n:Ba(u)===Ba(h),y=()=>l(t,{replace:p,state:r,preventScrollReset:i,relative:s,viewTransition:o});a?N.startTransition(()=>y()):y()}},[u,l,h,n,r,e,t,i,s,o,a])}var g2=0,y2=()=>`__${String(++g2)}__`;function v2(){let{router:t}=NT("useSubmit"),{basename:e}=N.useContext(Jt),n=Ob(),r=t.fetch,i=t.navigate;return N.useCallback(async(s,o={})=>{let{action:a,method:l,encType:u,formData:h,body:d}=Qb(s,e);if(o.navigate===!1){let p=o.fetcherKey||y2();await r(p,n,o.action||a,{preventScrollReset:o.preventScrollReset,formData:h,body:d,formMethod:o.method||l,formEncType:o.encType||u,flushSync:o.flushSync})}else await i(o.action||a,{preventScrollReset:o.preventScrollReset,formData:h,body:d,formMethod:o.method||l,formEncType:o.encType||u,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,i,e,n])}function _2(t,{relative:e}={}){let{basename:n}=N.useContext(Jt),r=N.useContext(fn);Ie(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...cl(t||".",{relative:e})},o=sr();if(t==null){s.search=o.search;let a=new URLSearchParams(s.search),l=a.getAll("index");if(l.some(h=>h==="")){a.delete("index"),l.filter(d=>d).forEach(d=>a.append("index",d));let h=a.toString();s.search=h?`?${h}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:zn([n,s.pathname])),Ba(s)}function w2(t,{relative:e}={}){let n=N.useContext(TT);Ie(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=NT("useViewTransitionState"),i=cl(t,{relative:e});if(!n.isTransitioning)return!1;let s=Yn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Yn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return du(i.pathname,o)!=null||du(i.pathname,s)!=null}function DT(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=DT(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function ki(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=DT(t))&&(r&&(r+=" "),r+=e);return r}function E2(t){if(!t||typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",e.firstChild?e.insertBefore(n,e.firstChild):e.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}E2(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var ul=t=>typeof t=="number"&&!isNaN(t),Oi=t=>typeof t=="string",Xn=t=>typeof t=="function",T2=t=>Oi(t)||ul(t),ep=t=>Oi(t)||Xn(t)?t:null,x2=(t,e)=>t===!1||ul(t)&&t>0?t:e,tp=t=>N.isValidElement(t)||Oi(t)||Xn(t)||ul(t);function I2(t,e,n=300){let{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function S2({enter:t,exit:e,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:s,position:o,preventExitTransition:a,done:l,nodeRef:u,isIn:h,playToast:d}){let p=n?`${t}--${o}`:t,y=n?`${e}--${o}`:e,I=N.useRef(0);return N.useLayoutEffect(()=>{let S=u.current,A=p.split(" "),E=_=>{_.target===u.current&&(d(),S.removeEventListener("animationend",E),S.removeEventListener("animationcancel",E),I.current===0&&_.type!=="animationcancel"&&S.classList.remove(...A))};S.classList.add(...A),S.addEventListener("animationend",E),S.addEventListener("animationcancel",E)},[]),N.useEffect(()=>{let S=u.current,A=()=>{S.removeEventListener("animationend",A),r?I2(S,l,i):l()};h||(a?A():(I.current=1,S.className+=` ${y}`,S.addEventListener("animationend",A)))},[h]),le.createElement(le.Fragment,null,s)}}function Sv(t,e){return{content:VT(t.content,t.props),containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,reason:t.removalReason,status:e}}function VT(t,e,n=!1){return N.isValidElement(t)&&!Oi(t.type)?N.cloneElement(t,{closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:n}):Xn(t)?t({closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:n}):t}function C2({closeToast:t,theme:e,ariaLabel:n="close"}){return le.createElement("button",{className:`Toastify__close-button Toastify__close-button--${e}`,type:"button",onClick:r=>{r.stopPropagation(),t(!0)},"aria-label":n},le.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},le.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function A2({delay:t,isRunning:e,closeToast:n,type:r="default",hide:i,className:s,controlledProgress:o,progress:a,rtl:l,isIn:u,theme:h}){let d=i||o&&a===0,p={animationDuration:`${t}ms`,animationPlayState:e?"running":"paused"};o&&(p.transform=`scaleX(${a})`);let y=ki("Toastify__progress-bar",o?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${h}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":l}),I=Xn(s)?s({rtl:l,type:r,defaultClassName:y}):ki(y,s),S={[o&&a>=1?"onTransitionEnd":"onAnimationEnd"]:o&&a<1?null:()=>{u&&n()}};return le.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":d},le.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${h} Toastify__progress-bar--${r}`}),le.createElement("div",{role:"progressbar","aria-hidden":d?"true":"false","aria-label":"notification timer",className:I,style:p,...S}))}var P2=1,LT=()=>`${P2++}`;function k2(t,e,n){let r=1,i=0,s=[],o=[],a=e,l=new Map,u=new Set,h=_=>(u.add(_),()=>u.delete(_)),d=()=>{o=Array.from(l.values()),u.forEach(_=>_())},p=({containerId:_,toastId:v,updateId:b})=>{let L=_?_!==t:t!==1,M=l.has(v)&&b==null;return L||M},y=(_,v)=>{l.forEach(b=>{var L;(v==null||v===b.props.toastId)&&((L=b.toggle)==null||L.call(b,_))})},I=_=>{var v,b;(b=(v=_.props)==null?void 0:v.onClose)==null||b.call(v,_.removalReason),_.isActive=!1},S=_=>{if(_==null)l.forEach(I);else{let v=l.get(_);v&&I(v)}d()},A=()=>{i-=s.length,s=[]},E=_=>{var v,b;let{toastId:L,updateId:M}=_.props,x=M==null;_.staleId&&l.delete(_.staleId),_.isActive=!0,l.set(L,_),d(),n(Sv(_,x?"added":"updated")),x&&((b=(v=_.props).onOpen)==null||b.call(v))};return{id:t,props:a,observe:h,toggle:y,removeToast:S,toasts:l,clearQueue:A,buildToast:(_,v)=>{if(p(v))return;let{toastId:b,updateId:L,data:M,staleId:x,delay:w}=v,C=L==null;C&&i++;let P={...a,style:a.toastStyle,key:r++,...Object.fromEntries(Object.entries(v).filter(([D,k])=>k!=null)),toastId:b,updateId:L,data:M,isIn:!1,className:ep(v.className||a.toastClassName),progressClassName:ep(v.progressClassName||a.progressClassName),autoClose:v.isLoading?!1:x2(v.autoClose,a.autoClose),closeToast(D){l.get(b).removalReason=D,S(b)},deleteToast(){let D=l.get(b);if(D!=null){if(n(Sv(D,"removed")),l.delete(b),i--,i<0&&(i=0),s.length>0){E(s.shift());return}d()}}};P.closeButton=a.closeButton,v.closeButton===!1||tp(v.closeButton)?P.closeButton=v.closeButton:v.closeButton===!0&&(P.closeButton=tp(a.closeButton)?a.closeButton:!0);let R={content:_,props:P,staleId:x};a.limit&&a.limit>0&&i>a.limit&&C?s.push(R):ul(w)?setTimeout(()=>{E(R)},w):E(R)},setProps(_){a=_},setToggle:(_,v)=>{let b=l.get(_);b&&(b.toggle=v)},isToastActive:_=>{var v;return(v=l.get(_))==null?void 0:v.isActive},getSnapshot:()=>o}}var Et=new Map,za=[],np=new Set,b2=t=>np.forEach(e=>e(t)),OT=()=>Et.size>0;function R2(){za.forEach(t=>jT(t.content,t.options)),za=[]}var N2=(t,{containerId:e})=>{var n;return(n=Et.get(e||1))==null?void 0:n.toasts.get(t)};function MT(t,e){var n;if(e)return!!((n=Et.get(e))!=null&&n.isToastActive(t));let r=!1;return Et.forEach(i=>{i.isToastActive(t)&&(r=!0)}),r}function D2(t){if(!OT()){za=za.filter(e=>t!=null&&e.options.toastId!==t);return}if(t==null||T2(t))Et.forEach(e=>{e.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){let e=Et.get(t.containerId);e?e.removeToast(t.id):Et.forEach(n=>{n.removeToast(t.id)})}}var V2=(t={})=>{Et.forEach(e=>{e.props.limit&&(!t.containerId||e.id===t.containerId)&&e.clearQueue()})};function jT(t,e){tp(t)&&(OT()||za.push({content:t,options:e}),Et.forEach(n=>{n.buildToast(t,e)}))}function L2(t){var e;(e=Et.get(t.containerId||1))==null||e.setToggle(t.id,t.fn)}function FT(t,e){Et.forEach(n=>{(e==null||!(e!=null&&e.containerId)||(e==null?void 0:e.containerId)===n.id)&&n.toggle(t,e==null?void 0:e.id)})}function O2(t){let e=t.containerId||1;return{subscribe(n){let r=k2(e,t,b2);Et.set(e,r);let i=r.observe(n);return R2(),()=>{i(),Et.delete(e)}},setProps(n){var r;(r=Et.get(e))==null||r.setProps(n)},getSnapshot(){var n;return(n=Et.get(e))==null?void 0:n.getSnapshot()}}}function M2(t){return np.add(t),()=>{np.delete(t)}}function j2(t){return t&&(Oi(t.toastId)||ul(t.toastId))?t.toastId:LT()}function hl(t,e){return jT(t,e),e.toastId}function sh(t,e){return{...e,type:e&&e.type||t,toastId:j2(e)}}function oh(t){return(e,n)=>hl(e,sh(t,n))}function q(t,e){return hl(t,sh("default",e))}q.loading=(t,e)=>hl(t,sh("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e}));function F2(t,{pending:e,error:n,success:r},i){let s;e&&(s=Oi(e)?q.loading(e,i):q.loading(e.render,{...i,...e}));let o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},a=(u,h,d)=>{if(h==null){q.dismiss(s);return}let p={type:u,...o,...i,data:d},y=Oi(h)?{render:h}:h;return s?q.update(s,{...p,...y}):q(y.render,{...p,...y}),d},l=Xn(t)?t():t;return l.then(u=>a("success",r,u)).catch(u=>a("error",n,u)),l}q.promise=F2;q.success=oh("success");q.info=oh("info");q.error=oh("error");q.warning=oh("warning");q.warn=q.warning;q.dark=(t,e)=>hl(t,sh("default",{theme:"dark",...e}));function U2(t){D2(t)}q.dismiss=U2;q.clearWaitingQueue=V2;q.isActive=MT;q.update=(t,e={})=>{let n=N2(t,e);if(n){let{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:LT()};s.toastId!==t&&(s.staleId=t);let o=s.render||i;delete s.render,hl(o,s)}};q.done=t=>{q.update(t,{progress:1})};q.onChange=M2;q.play=t=>FT(!0,t);q.pause=t=>FT(!1,t);function B2(t){var e;let{subscribe:n,getSnapshot:r,setProps:i}=N.useRef(O2(t)).current;i(t);let s=(e=N.useSyncExternalStore(n,r,r))==null?void 0:e.slice();function o(a){if(!s)return[];let l=new Map;return t.newestOnTop&&s.reverse(),s.forEach(u=>{let{position:h}=u.props;l.has(h)||l.set(h,[]),l.get(h).push(u)}),Array.from(l,u=>a(u[0],u[1]))}return{getToastToRender:o,isToastActive:MT,count:s==null?void 0:s.length}}function z2(t){let[e,n]=N.useState(!1),[r,i]=N.useState(!1),s=N.useRef(null),o=N.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:l,closeToast:u,onClick:h,closeOnClick:d}=t;L2({id:t.toastId,containerId:t.containerId,fn:n}),N.useEffect(()=>{if(t.pauseOnFocusLoss)return p(),()=>{y()}},[t.pauseOnFocusLoss]);function p(){document.hasFocus()||E(),window.addEventListener("focus",A),window.addEventListener("blur",E)}function y(){window.removeEventListener("focus",A),window.removeEventListener("blur",E)}function I(x){if(t.draggable===!0||t.draggable===x.pointerType){_();let w=s.current;o.canCloseOnClick=!0,o.canDrag=!0,w.style.transition="none",t.draggableDirection==="x"?(o.start=x.clientX,o.removalDistance=w.offsetWidth*(t.draggablePercent/100)):(o.start=x.clientY,o.removalDistance=w.offsetHeight*(t.draggablePercent===80?t.draggablePercent*1.5:t.draggablePercent)/100)}}function S(x){let{top:w,bottom:C,left:P,right:R}=s.current.getBoundingClientRect();x.nativeEvent.type!=="touchend"&&t.pauseOnHover&&x.clientX>=P&&x.clientX<=R&&x.clientY>=w&&x.clientY<=C?E():A()}function A(){n(!0)}function E(){n(!1)}function _(){o.didMove=!1,document.addEventListener("pointermove",b),document.addEventListener("pointerup",L)}function v(){document.removeEventListener("pointermove",b),document.removeEventListener("pointerup",L)}function b(x){let w=s.current;if(o.canDrag&&w){o.didMove=!0,e&&E(),t.draggableDirection==="x"?o.delta=x.clientX-o.start:o.delta=x.clientY-o.start,o.start!==x.clientX&&(o.canCloseOnClick=!1);let C=t.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`;w.style.transform=`translate3d(${C},0)`,w.style.opacity=`${1-Math.abs(o.delta/o.removalDistance)}`}}function L(){v();let x=s.current;if(o.canDrag&&o.didMove&&x){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance){i(!0),t.closeToast(!0),t.collapseAll();return}x.style.transition="transform 0.2s, opacity 0.2s",x.style.removeProperty("transform"),x.style.removeProperty("opacity")}}let M={onPointerDown:I,onPointerUp:S};return a&&l&&(M.onMouseEnter=E,t.stacked||(M.onMouseLeave=A)),d&&(M.onClick=x=>{h&&h(x),o.canCloseOnClick&&u(!0)}),{playToast:A,pauseToast:E,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:M}}var $2=typeof window<"u"?N.useLayoutEffect:N.useEffect,ah=({theme:t,type:e,isLoading:n,...r})=>le.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${e})`,...r});function W2(t){return le.createElement(ah,{...t},le.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function H2(t){return le.createElement(ah,{...t},le.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function q2(t){return le.createElement(ah,{...t},le.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function G2(t){return le.createElement(ah,{...t},le.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function K2(){return le.createElement("div",{className:"Toastify__spinner"})}var rp={info:H2,warning:W2,success:q2,error:G2,spinner:K2},Q2=t=>t in rp;function Y2({theme:t,type:e,isLoading:n,icon:r}){let i=null,s={theme:t,type:e};return r===!1||(Xn(r)?i=r({...s,isLoading:n}):N.isValidElement(r)?i=N.cloneElement(r,s):n?i=rp.spinner():Q2(e)&&(i=rp[e](s))),i}var X2=t=>{let{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:s}=z2(t),{closeButton:o,children:a,autoClose:l,onClick:u,type:h,hideProgressBar:d,closeToast:p,transition:y,position:I,className:S,style:A,progressClassName:E,updateId:_,role:v,progress:b,rtl:L,toastId:M,deleteToast:x,isIn:w,isLoading:C,closeOnClick:P,theme:R,ariaLabel:D}=t,k=ki("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${h}`,{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":P}),ae=Xn(S)?S({rtl:L,position:I,type:h,defaultClassName:k}):ki(k,S),Oe=Y2(t),me=!!b||!l,Ge={closeToast:p,type:h,theme:R},z=null;return o===!1||(Xn(o)?z=o(Ge):N.isValidElement(o)?z=N.cloneElement(o,Ge):z=C2(Ge)),le.createElement(y,{isIn:w,done:x,position:I,preventExitTransition:n,nodeRef:r,playToast:s},le.createElement("div",{id:M,tabIndex:0,onClick:u,"data-in":w,className:ae,...i,style:A,ref:r,...w&&{role:v,"aria-label":D}},Oe!=null&&le.createElement("div",{className:ki("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!C})},Oe),VT(a,t,!e),z,!t.customProgressBar&&le.createElement(A2,{..._&&!me?{key:`p-${_}`}:{},rtl:L,theme:R,delay:l,isRunning:e,isIn:w,closeToast:p,hide:d,type:h,className:E,controlledProgress:me,progress:b||0})))},J2=(t,e=!1)=>({enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}),Z2=S2(J2("bounce",!0)),eR={position:"top-right",transition:Z2,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:t=>t.altKey&&t.code==="KeyT"};function tR(t){let e={...eR,...t},n=t.stacked,[r,i]=N.useState(!0),s=N.useRef(null),{getToastToRender:o,isToastActive:a,count:l}=B2(e),{className:u,style:h,rtl:d,containerId:p,hotKeys:y}=e;function I(A){let E=ki("Toastify__toast-container",`Toastify__toast-container--${A}`,{"Toastify__toast-container--rtl":d});return Xn(u)?u({position:A,rtl:d,defaultClassName:E}):ki(E,ep(u))}function S(){n&&(i(!0),q.play())}return $2(()=>{var A;if(n){let E=s.current.querySelectorAll('[data-in="true"]'),_=12,v=(A=e.position)==null?void 0:A.includes("top"),b=0,L=0;Array.from(E).reverse().forEach((M,x)=>{let w=M;w.classList.add("Toastify__toast--stacked"),x>0&&(w.dataset.collapsed=`${r}`),w.dataset.pos||(w.dataset.pos=v?"top":"bot");let C=b*(r?.2:1)+(r?0:_*x);w.style.setProperty("--y",`${v?C:C*-1}px`),w.style.setProperty("--g",`${_}`),w.style.setProperty("--s",`${1-(r?L:0)}`),b+=w.offsetHeight,L+=.025})}},[r,l,n]),N.useEffect(()=>{function A(E){var _;let v=s.current;y(E)&&((_=v.querySelector('[tabIndex="0"]'))==null||_.focus(),i(!1),q.pause()),E.key==="Escape"&&(document.activeElement===v||v!=null&&v.contains(document.activeElement))&&(i(!0),q.play())}return document.addEventListener("keydown",A),()=>{document.removeEventListener("keydown",A)}},[y]),le.createElement("section",{ref:s,className:"Toastify",id:p,onMouseEnter:()=>{n&&(i(!1),q.pause())},onMouseLeave:S,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":e["aria-label"]},o((A,E)=>{let _=E.length?{...h}:{...h,pointerEvents:"none"};return le.createElement("div",{tabIndex:-1,className:I(A),"data-stacked":n,style:_,key:`c-${A}`},E.map(({content:v,props:b})=>le.createElement(X2,{...b,stacked:n,collapseAll:S,isIn:a(b.toastId,b.containerId),key:`t-${b.key}`},v)))}))}var UT={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Cv=le.createContext&&le.createContext(UT),Mr=globalThis&&globalThis.__assign||function(){return Mr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Mr.apply(this,arguments)},nR=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function BT(t){return t&&t.map(function(e,n){return le.createElement(e.tag,Mr({key:n},e.attr),BT(e.child))})}function Se(t){return function(e){return le.createElement(rR,Mr({attr:Mr({},t.attr)},e),BT(t.child))}}function rR(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=nR(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),le.createElement("svg",Mr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Mr(Mr({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&le.createElement("title",null,s),t.children)};return Cv!==void 0?le.createElement(Cv.Consumer,null,function(n){return e(n)}):e(UT)}function iR(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"}}]})(t)}function sR(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polyline",attr:{points:"12 6 12 12 16 14"}}]})(t)}function oR(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}}]})(t)}function aR(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"}},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"}},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"}},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"}}]})(t)}function lR(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}}]})(t)}function cR(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"}}]})(t)}function uR(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"circle",attr:{cx:"8.5",cy:"8.5",r:"1.5"}},{tag:"polyline",attr:{points:"21 15 16 10 5 21"}}]})(t)}function hR(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}},{tag:"polyline",attr:{points:"16 17 21 12 16 7"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"}}]})(t)}function dR(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(t)}function fR(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"}}]})(t)}function pR(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(t)}function fu(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"}},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"}},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"}}]})(t)}function mR(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(t)}function ks(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"}},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}}]})(t)}function zT(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"}},{tag:"polyline",attr:{points:"1 20 1 14 7 14"}},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"}}]})(t)}function $T(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}},{tag:"polyline",attr:{points:"17 21 17 13 7 13 7 21"}},{tag:"polyline",attr:{points:"7 3 7 8 15 8"}}]})(t)}function WT(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(t)}function HT(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"path",attr:{d:"M16 10a4 4 0 0 1-8 0"}}]})(t)}function kc(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"}}]})(t)}function bs(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"}},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"}},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"}}]})(t)}function gR(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"}},{tag:"polyline",attr:{points:"17 6 23 6 23 12"}}]})(t)}function ip(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"polyline",attr:{points:"17 8 12 3 7 8"}},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"}}]})(t)}function qm(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(t)}const yR=()=>{const[t,e]=N.useState(!1),[n,r]=N.useState(!1);return N.useEffect(()=>{const i=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),m.jsxs("nav",{className:`navbar ${t?"scrolled":""}`,children:[m.jsxs("div",{className:"container navbar-content",children:[m.jsx("div",{className:"logo",children:m.jsx("a",{href:"/",children:"LuxeLiving."})}),m.jsxs("div",{className:`nav-links ${n?"active":""}`,children:[m.jsx("a",{href:"#home",onClick:()=>r(!1),children:"Home"}),m.jsx("a",{href:"#categories",onClick:()=>r(!1),children:"Kategori"}),m.jsx("a",{href:"#collection",onClick:()=>r(!1),children:"Produk"}),m.jsx("a",{href:"#contact",onClick:()=>r(!1),children:"Kontak"})]}),m.jsxs("div",{className:"nav-icons",children:[m.jsx("button",{"aria-label":"Cari",children:m.jsx(WT,{})}),m.jsxs("button",{"aria-label":"Keranjang",className:"cart-btn",children:[m.jsx(HT,{}),m.jsx("span",{className:"cart-count",children:"0"})]}),m.jsx("button",{className:"menu-toggle",onClick:()=>r(!n),"aria-label":"Toggle Menu",children:n?m.jsx(qm,{}):m.jsx(pR,{})})]})]}),m.jsx("style",{children:`
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
      `})]})},qT=N.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),lh=N.createContext({}),Gm=N.createContext(null),ch=typeof document<"u",vR=ch?N.useLayoutEffect:N.useEffect,GT=N.createContext({strict:!1}),Km=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),_R="framerAppearId",KT="data-"+Km(_R);function wR(t,e,n,r){const{visualElement:i}=N.useContext(lh),s=N.useContext(GT),o=N.useContext(Gm),a=N.useContext(qT).reducedMotion,l=N.useRef();r=r||s.renderer,!l.current&&r&&(l.current=r(t,{visualState:e,parent:i,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;N.useInsertionEffect(()=>{u&&u.update(n,o)});const h=N.useRef(!!(n[KT]&&!window.HandoffComplete));return vR(()=>{u&&(u.render(),h.current&&u.animationState&&u.animationState.animateChanges())}),N.useEffect(()=>{u&&(u.updateFeatures(),!h.current&&u.animationState&&u.animationState.animateChanges(),h.current&&(h.current=!1,window.HandoffComplete=!0))}),u}function vs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function ER(t,e,n){return N.useCallback(r=>{r&&t.mount&&t.mount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):vs(n)&&(n.current=r))},[e])}function $a(t){return typeof t=="string"||Array.isArray(t)}function uh(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Qm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ym=["initial",...Qm];function hh(t){return uh(t.animate)||Ym.some(e=>$a(t[e]))}function QT(t){return!!(hh(t)||t.variants)}function TR(t,e){if(hh(t)){const{initial:n,animate:r}=t;return{initial:n===!1||$a(n)?n:void 0,animate:$a(r)?r:void 0}}return t.inherit!==!1?e:{}}function xR(t){const{initial:e,animate:n}=TR(t,N.useContext(lh));return N.useMemo(()=>({initial:e,animate:n}),[Av(e),Av(n)])}function Av(t){return Array.isArray(t)?t.join(" "):t}const Pv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Wa={};for(const t in Pv)Wa[t]={isEnabled:e=>Pv[t].some(n=>!!e[n])};function IR(t){for(const e in t)Wa[e]={...Wa[e],...t[e]}}const YT=N.createContext({}),XT=N.createContext({}),SR=Symbol.for("motionComponentSymbol");function CR({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:i}){t&&IR(t);function s(a,l){let u;const h={...N.useContext(qT),...a,layoutId:AR(a)},{isStatic:d}=h,p=xR(a),y=r(a,d);if(!d&&ch){p.visualElement=wR(i,y,h,e);const I=N.useContext(XT),S=N.useContext(GT).strict;p.visualElement&&(u=p.visualElement.loadFeatures(h,S,t,I))}return N.createElement(lh.Provider,{value:p},u&&p.visualElement?N.createElement(u,{visualElement:p.visualElement,...h}):null,n(i,a,ER(y,p.visualElement,l),y,d,p.visualElement))}const o=N.forwardRef(s);return o[SR]=i,o}function AR({layoutId:t}){const e=N.useContext(YT).id;return e&&t!==void 0?e+"-"+t:t}function PR(t){function e(r,i={}){return CR(t(r,i))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(r,i)=>(n.has(i)||n.set(i,e(i)),n.get(i))})}const kR=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Xm(t){return typeof t!="string"||t.includes("-")?!1:!!(kR.indexOf(t)>-1||/[A-Z]/.test(t))}const pu={};function bR(t){Object.assign(pu,t)}const dl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Hi=new Set(dl);function JT(t,{layout:e,layoutId:n}){return Hi.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!pu[t]||t==="opacity")}const Nt=t=>!!(t&&t.getVelocity),RR={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},NR=dl.length;function DR(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},r,i){let s="";for(let o=0;o<NR;o++){const a=dl[o];if(t[a]!==void 0){const l=RR[a]||a;s+=`${l}(${t[a]}) `}}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),i?s=i(t,r?"":s):n&&r&&(s="none"),s}const ZT=t=>e=>typeof e=="string"&&e.startsWith(t),ex=ZT("--"),sp=ZT("var(--"),VR=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,LR=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Kr=(t,e,n)=>Math.min(Math.max(n,t),e),qi={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},pa={...qi,transform:t=>Kr(0,1,t)},sc={...qi,default:1},ma=t=>Math.round(t*1e5)/1e5,dh=/(-)?([\d]*\.?[\d])+/g,tx=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,OR=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function fl(t){return typeof t=="string"}const pl=t=>({test:e=>fl(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),mr=pl("deg"),In=pl("%"),Q=pl("px"),MR=pl("vh"),jR=pl("vw"),kv={...In,parse:t=>In.parse(t)/100,transform:t=>In.transform(t*100)},bv={...qi,transform:Math.round},nx={borderWidth:Q,borderTopWidth:Q,borderRightWidth:Q,borderBottomWidth:Q,borderLeftWidth:Q,borderRadius:Q,radius:Q,borderTopLeftRadius:Q,borderTopRightRadius:Q,borderBottomRightRadius:Q,borderBottomLeftRadius:Q,width:Q,maxWidth:Q,height:Q,maxHeight:Q,size:Q,top:Q,right:Q,bottom:Q,left:Q,padding:Q,paddingTop:Q,paddingRight:Q,paddingBottom:Q,paddingLeft:Q,margin:Q,marginTop:Q,marginRight:Q,marginBottom:Q,marginLeft:Q,rotate:mr,rotateX:mr,rotateY:mr,rotateZ:mr,scale:sc,scaleX:sc,scaleY:sc,scaleZ:sc,skew:mr,skewX:mr,skewY:mr,distance:Q,translateX:Q,translateY:Q,translateZ:Q,x:Q,y:Q,z:Q,perspective:Q,transformPerspective:Q,opacity:pa,originX:kv,originY:kv,originZ:Q,zIndex:bv,fillOpacity:pa,strokeOpacity:pa,numOctaves:bv};function Jm(t,e,n,r){const{style:i,vars:s,transform:o,transformOrigin:a}=t;let l=!1,u=!1,h=!0;for(const d in e){const p=e[d];if(ex(d)){s[d]=p;continue}const y=nx[d],I=LR(p,y);if(Hi.has(d)){if(l=!0,o[d]=I,!h)continue;p!==(y.default||0)&&(h=!1)}else d.startsWith("origin")?(u=!0,a[d]=I):i[d]=I}if(e.transform||(l||r?i.transform=DR(t.transform,n,h,r):i.transform&&(i.transform="none")),u){const{originX:d="50%",originY:p="50%",originZ:y=0}=a;i.transformOrigin=`${d} ${p} ${y}`}}const Zm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function rx(t,e,n){for(const r in e)!Nt(e[r])&&!JT(r,n)&&(t[r]=e[r])}function FR({transformTemplate:t},e,n){return N.useMemo(()=>{const r=Zm();return Jm(r,e,{enableHardwareAcceleration:!n},t),Object.assign({},r.vars,r.style)},[e])}function UR(t,e,n){const r=t.style||{},i={};return rx(i,r,t),Object.assign(i,FR(t,e,n)),t.transformValues?t.transformValues(i):i}function BR(t,e,n){const r={},i=UR(t,e,n);return t.drag&&t.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=i,r}const zR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function mu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||zR.has(t)}let ix=t=>!mu(t);function $R(t){t&&(ix=e=>e.startsWith("on")?!mu(e):t(e))}try{$R(require("@emotion/is-prop-valid").default)}catch{}function WR(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||(ix(i)||n===!0&&mu(i)||!e&&!mu(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}function Rv(t,e,n){return typeof t=="string"?t:Q.transform(e+n*t)}function HR(t,e,n){const r=Rv(e,t.x,t.width),i=Rv(n,t.y,t.height);return`${r} ${i}`}const qR={offset:"stroke-dashoffset",array:"stroke-dasharray"},GR={offset:"strokeDashoffset",array:"strokeDasharray"};function KR(t,e,n=1,r=0,i=!0){t.pathLength=1;const s=i?qR:GR;t[s.offset]=Q.transform(-r);const o=Q.transform(e),a=Q.transform(n);t[s.array]=`${o} ${a}`}function eg(t,{attrX:e,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},h,d,p){if(Jm(t,u,h,p),d){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:y,style:I,dimensions:S}=t;y.transform&&(S&&(I.transform=y.transform),delete y.transform),S&&(i!==void 0||s!==void 0||I.transform)&&(I.transformOrigin=HR(S,i!==void 0?i:.5,s!==void 0?s:.5)),e!==void 0&&(y.x=e),n!==void 0&&(y.y=n),r!==void 0&&(y.scale=r),o!==void 0&&KR(y,o,a,l,!1)}const sx=()=>({...Zm(),attrs:{}}),tg=t=>typeof t=="string"&&t.toLowerCase()==="svg";function QR(t,e,n,r){const i=N.useMemo(()=>{const s=sx();return eg(s,e,{enableHardwareAcceleration:!1},tg(r),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};rx(s,t.style,t),i.style={...s,...i.style}}return i}function YR(t=!1){return(n,r,i,{latestValues:s},o)=>{const l=(Xm(n)?QR:BR)(r,s,o,n),h={...WR(r,typeof n=="string",t),...l,ref:i},{children:d}=r,p=N.useMemo(()=>Nt(d)?d.get():d,[d]);return N.createElement(n,{...h,children:p})}}function ox(t,{style:e,vars:n},r,i){Object.assign(t.style,e,i&&i.getProjectionStyles(r));for(const s in n)t.style.setProperty(s,n[s])}const ax=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function lx(t,e,n,r){ox(t,e,void 0,r);for(const i in e.attrs)t.setAttribute(ax.has(i)?i:Km(i),e.attrs[i])}function ng(t,e){const{style:n}=t,r={};for(const i in n)(Nt(n[i])||e.style&&Nt(e.style[i])||JT(i,t))&&(r[i]=n[i]);return r}function cx(t,e){const n=ng(t,e);for(const r in t)if(Nt(t[r])||Nt(e[r])){const i=dl.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=t[r]}return n}function rg(t,e,n,r={},i={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,i)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,i)),e}function XR(t){const e=N.useRef(null);return e.current===null&&(e.current=t()),e.current}const gu=t=>Array.isArray(t),JR=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),ZR=t=>gu(t)?t[t.length-1]||0:t;function bc(t){const e=Nt(t)?t.get():t;return JR(e)?e.toValue():e}function eN({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},r,i,s){const o={latestValues:tN(r,i,s,t),renderState:e()};return n&&(o.mount=a=>n(r,a,o)),o}const ux=t=>(e,n)=>{const r=N.useContext(lh),i=N.useContext(Gm),s=()=>eN(t,e,r,i);return n?s():XR(s)};function tN(t,e,n,r){const i={},s=r(t,{});for(const p in s)i[p]=bc(s[p]);let{initial:o,animate:a}=t;const l=hh(t),u=QT(t);e&&u&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let h=n?n.initial===!1:!1;h=h||o===!1;const d=h?a:o;return d&&typeof d!="boolean"&&!uh(d)&&(Array.isArray(d)?d:[d]).forEach(y=>{const I=rg(t,y);if(!I)return;const{transitionEnd:S,transition:A,...E}=I;for(const _ in E){let v=E[_];if(Array.isArray(v)){const b=h?v.length-1:0;v=v[b]}v!==null&&(i[_]=v)}for(const _ in S)i[_]=S[_]}),i}const De=t=>t;class Nv{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function nN(t){let e=new Nv,n=new Nv,r=0,i=!1,s=!1;const o=new WeakSet,a={schedule:(l,u=!1,h=!1)=>{const d=h&&i,p=d?e:n;return u&&o.add(l),p.add(l)&&d&&i&&(r=e.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(i){s=!0;return}if(i=!0,[e,n]=[n,e],n.clear(),r=e.order.length,r)for(let u=0;u<r;u++){const h=e.order[u];h(l),o.has(h)&&(a.schedule(h),t())}i=!1,s&&(s=!1,a.process(l))}};return a}const oc=["prepare","read","update","preRender","render","postRender"],rN=40;function iN(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=oc.reduce((d,p)=>(d[p]=nN(()=>n=!0),d),{}),o=d=>s[d].process(i),a=()=>{const d=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(d-i.timestamp,rN),1),i.timestamp=d,i.isProcessing=!0,oc.forEach(o),i.isProcessing=!1,n&&e&&(r=!1,t(a))},l=()=>{n=!0,r=!0,i.isProcessing||t(a)};return{schedule:oc.reduce((d,p)=>{const y=s[p];return d[p]=(I,S=!1,A=!1)=>(n||l(),y.schedule(I,S,A)),d},{}),cancel:d=>oc.forEach(p=>s[p].cancel(d)),state:i,steps:s}}const{schedule:Te,cancel:Jn,state:ut,steps:Vd}=iN(typeof requestAnimationFrame<"u"?requestAnimationFrame:De,!0),sN={useVisualState:ux({scrapeMotionValuesFromProps:cx,createRenderState:sx,onMount:(t,e,{renderState:n,latestValues:r})=>{Te.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),Te.render(()=>{eg(n,r,{enableHardwareAcceleration:!1},tg(e.tagName),t.transformTemplate),lx(e,n)})}})},oN={useVisualState:ux({scrapeMotionValuesFromProps:ng,createRenderState:Zm})};function aN(t,{forwardMotionProps:e=!1},n,r){return{...Xm(t)?sN:oN,preloadedFeatures:n,useRender:YR(e),createVisualElement:r,Component:t}}function jn(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}const hx=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function fh(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const lN=t=>e=>hx(e)&&t(e,fh(e));function $n(t,e,n,r){return jn(t,e,lN(n),r)}const cN=(t,e)=>n=>e(t(n)),jr=(...t)=>t.reduce(cN);function dx(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const Dv=dx("dragHorizontal"),Vv=dx("dragVertical");function fx(t){let e=!1;if(t==="y")e=Vv();else if(t==="x")e=Dv();else{const n=Dv(),r=Vv();n&&r?e=()=>{n(),r()}:(n&&n(),r&&r())}return e}function px(){const t=fx(!0);return t?(t(),!1):!0}class si{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Lv(t,e){const n="pointer"+(e?"enter":"leave"),r="onHover"+(e?"Start":"End"),i=(s,o)=>{if(s.pointerType==="touch"||px())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[r]&&Te.update(()=>a[r](s,o))};return $n(t.current,n,i,{passive:!t.getProps()[r]})}class uN extends si{mount(){this.unmount=jr(Lv(this.node,!0),Lv(this.node,!1))}unmount(){}}class hN extends si{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=jr(jn(this.node.current,"focus",()=>this.onFocus()),jn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const mx=(t,e)=>e?t===e?!0:mx(t,e.parentElement):!1;function Ld(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,fh(n))}class dN extends si{constructor(){super(...arguments),this.removeStartListeners=De,this.removeEndListeners=De,this.removeAccessibleListeners=De,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),s=$n(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:h,globalTapTarget:d}=this.node.getProps();Te.update(()=>{!d&&!mx(this.node.current,a.target)?h&&h(a,l):u&&u(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),o=$n(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=jr(s,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||Ld("up",(l,u)=>{const{onTap:h}=this.node.getProps();h&&Te.update(()=>h(l,u))})};this.removeEndListeners(),this.removeEndListeners=jn(this.node.current,"keyup",o),Ld("down",(a,l)=>{this.startPress(a,l)})},n=jn(this.node.current,"keydown",e),r=()=>{this.isPressing&&Ld("cancel",(s,o)=>this.cancelPress(s,o))},i=jn(this.node.current,"blur",r);this.removeAccessibleListeners=jr(n,i)}}startPress(e,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&Te.update(()=>r(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!px()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&Te.update(()=>r(e,n))}mount(){const e=this.node.getProps(),n=$n(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),r=jn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=jr(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const op=new WeakMap,Od=new WeakMap,fN=t=>{const e=op.get(t.target);e&&e(t)},pN=t=>{t.forEach(fN)};function mN({root:t,...e}){const n=t||document;Od.has(n)||Od.set(n,{});const r=Od.get(n),i=JSON.stringify(e);return r[i]||(r[i]=new IntersectionObserver(pN,{root:t,...e})),r[i]}function gN(t,e,n){const r=mN(e);return op.set(t,n),r.observe(t),()=>{op.delete(t),r.unobserve(t)}}const yN={some:0,all:1};class vN extends si{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:yN[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:h,onViewportLeave:d}=this.node.getProps(),p=u?h:d;p&&p(l)};return gN(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(_N(e,n))&&this.startObserver()}unmount(){}}function _N({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const wN={inView:{Feature:vN},tap:{Feature:dN},focus:{Feature:hN},hover:{Feature:uN}};function gx(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function EN(t){const e={};return t.values.forEach((n,r)=>e[r]=n.get()),e}function TN(t){const e={};return t.values.forEach((n,r)=>e[r]=n.getVelocity()),e}function ph(t,e,n){const r=t.getProps();return rg(r,e,n!==void 0?n:r.custom,EN(t),TN(t))}let xN=De,ig=De;const Fr=t=>t*1e3,Wn=t=>t/1e3,IN={current:!1},yx=t=>Array.isArray(t)&&typeof t[0]=="number";function vx(t){return!!(!t||typeof t=="string"&&_x[t]||yx(t)||Array.isArray(t)&&t.every(vx))}const Jo=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,_x={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Jo([0,.65,.55,1]),circOut:Jo([.55,0,1,.45]),backIn:Jo([.31,.01,.66,-.59]),backOut:Jo([.33,1.53,.69,.99])};function wx(t){if(t)return yx(t)?Jo(t):Array.isArray(t)?t.map(wx):_x[t]}function SN(t,e,n,{delay:r=0,duration:i,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const u={[e]:n};l&&(u.offset=l);const h=wx(a);return Array.isArray(h)&&(u.easing=h),t.animate(u,{delay:r,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function CN(t,{repeat:e,repeatType:n="loop"}){const r=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[r]}const Ex=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,AN=1e-7,PN=12;function kN(t,e,n,r,i){let s,o,a=0;do o=e+(n-e)/2,s=Ex(o,r,i)-t,s>0?n=o:e=o;while(Math.abs(s)>AN&&++a<PN);return o}function ml(t,e,n,r){if(t===e&&n===r)return De;const i=s=>kN(s,0,1,t,n);return s=>s===0||s===1?s:Ex(i(s),e,r)}const bN=ml(.42,0,1,1),RN=ml(0,0,.58,1),Tx=ml(.42,0,.58,1),NN=t=>Array.isArray(t)&&typeof t[0]!="number",xx=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Ix=t=>e=>1-t(1-e),sg=t=>1-Math.sin(Math.acos(t)),Sx=Ix(sg),DN=xx(sg),Cx=ml(.33,1.53,.69,.99),og=Ix(Cx),VN=xx(og),LN=t=>(t*=2)<1?.5*og(t):.5*(2-Math.pow(2,-10*(t-1))),ON={linear:De,easeIn:bN,easeInOut:Tx,easeOut:RN,circIn:sg,circInOut:DN,circOut:Sx,backIn:og,backInOut:VN,backOut:Cx,anticipate:LN},Ov=t=>{if(Array.isArray(t)){ig(t.length===4);const[e,n,r,i]=t;return ml(e,n,r,i)}else if(typeof t=="string")return ON[t];return t},ag=(t,e)=>n=>!!(fl(n)&&OR.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),Ax=(t,e,n)=>r=>{if(!fl(r))return r;const[i,s,o,a]=r.match(dh);return{[t]:parseFloat(i),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},MN=t=>Kr(0,255,t),Md={...qi,transform:t=>Math.round(MN(t))},Si={test:ag("rgb","red"),parse:Ax("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+Md.transform(t)+", "+Md.transform(e)+", "+Md.transform(n)+", "+ma(pa.transform(r))+")"};function jN(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const ap={test:ag("#"),parse:jN,transform:Si.transform},_s={test:ag("hsl","hue"),parse:Ax("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+In.transform(ma(e))+", "+In.transform(ma(n))+", "+ma(pa.transform(r))+")"},_t={test:t=>Si.test(t)||ap.test(t)||_s.test(t),parse:t=>Si.test(t)?Si.parse(t):_s.test(t)?_s.parse(t):ap.parse(t),transform:t=>fl(t)?t:t.hasOwnProperty("red")?Si.transform(t):_s.transform(t)},Ae=(t,e,n)=>-n*t+n*e+t;function jd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function FN({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let i=0,s=0,o=0;if(!e)i=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;i=jd(l,a,t+1/3),s=jd(l,a,t),o=jd(l,a,t-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}const Fd=(t,e,n)=>{const r=t*t;return Math.sqrt(Math.max(0,n*(e*e-r)+r))},UN=[ap,Si,_s],BN=t=>UN.find(e=>e.test(t));function Mv(t){const e=BN(t);let n=e.parse(t);return e===_s&&(n=FN(n)),n}const Px=(t,e)=>{const n=Mv(t),r=Mv(e),i={...n};return s=>(i.red=Fd(n.red,r.red,s),i.green=Fd(n.green,r.green,s),i.blue=Fd(n.blue,r.blue,s),i.alpha=Ae(n.alpha,r.alpha,s),Si.transform(i))};function zN(t){var e,n;return isNaN(t)&&fl(t)&&(((e=t.match(dh))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(tx))===null||n===void 0?void 0:n.length)||0)>0}const kx={regex:VR,countKey:"Vars",token:"${v}",parse:De},bx={regex:tx,countKey:"Colors",token:"${c}",parse:_t.parse},Rx={regex:dh,countKey:"Numbers",token:"${n}",parse:qi.parse};function Ud(t,{regex:e,countKey:n,token:r,parse:i}){const s=t.tokenised.match(e);s&&(t["num"+n]=s.length,t.tokenised=t.tokenised.replace(e,r),t.values.push(...s.map(i)))}function yu(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Ud(n,kx),Ud(n,bx),Ud(n,Rx),n}function Nx(t){return yu(t).values}function Dx(t){const{values:e,numColors:n,numVars:r,tokenised:i}=yu(t),s=e.length;return o=>{let a=i;for(let l=0;l<s;l++)l<r?a=a.replace(kx.token,o[l]):l<r+n?a=a.replace(bx.token,_t.transform(o[l])):a=a.replace(Rx.token,ma(o[l]));return a}}const $N=t=>typeof t=="number"?0:t;function WN(t){const e=Nx(t);return Dx(t)(e.map($N))}const Qr={test:zN,parse:Nx,createTransformer:Dx,getAnimatableNone:WN},Vx=(t,e)=>n=>`${n>0?e:t}`;function Lx(t,e){return typeof t=="number"?n=>Ae(t,e,n):_t.test(t)?Px(t,e):t.startsWith("var(")?Vx(t,e):Mx(t,e)}const Ox=(t,e)=>{const n=[...t],r=n.length,i=t.map((s,o)=>Lx(s,e[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}},HN=(t,e)=>{const n={...t,...e},r={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(r[i]=Lx(t[i],e[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}},Mx=(t,e)=>{const n=Qr.createTransformer(e),r=yu(t),i=yu(e);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?jr(Ox(r.values,i.values),n):Vx(t,e)},Ha=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r},jv=(t,e)=>n=>Ae(t,e,n);function qN(t){return typeof t=="number"?jv:typeof t=="string"?_t.test(t)?Px:Mx:Array.isArray(t)?Ox:typeof t=="object"?HN:jv}function GN(t,e,n){const r=[],i=n||qN(t[0]),s=t.length-1;for(let o=0;o<s;o++){let a=i(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||De:e;a=jr(l,a)}r.push(a)}return r}function jx(t,e,{clamp:n=!0,ease:r,mixer:i}={}){const s=t.length;if(ig(s===e.length),s===1)return()=>e[0];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=GN(e,r,i),a=o.length,l=u=>{let h=0;if(a>1)for(;h<t.length-2&&!(u<t[h+1]);h++);const d=Ha(t[h],t[h+1],u);return o[h](d)};return n?u=>l(Kr(t[0],t[s-1],u)):l}function KN(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const i=Ha(0,e,r);t.push(Ae(n,1,i))}}function QN(t){const e=[0];return KN(e,t.length-1),e}function YN(t,e){return t.map(n=>n*e)}function XN(t,e){return t.map(()=>e||Tx).splice(0,t.length-1)}function vu({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const i=NN(r)?r.map(Ov):Ov(r),s={done:!1,value:e[0]},o=YN(n&&n.length===e.length?n:QN(e),t),a=jx(o,e,{ease:Array.isArray(i)?i:XN(e,i)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}function Fx(t,e){return e?t*(1e3/e):0}const JN=5;function Ux(t,e,n){const r=Math.max(e-JN,0);return Fx(n-t(r),e-r)}const Bd=.001,ZN=.01,Fv=10,eD=.05,tD=1;function nD({duration:t=800,bounce:e=.25,velocity:n=0,mass:r=1}){let i,s;xN(t<=Fr(Fv));let o=1-e;o=Kr(eD,tD,o),t=Kr(ZN,Fv,Wn(t)),o<1?(i=u=>{const h=u*o,d=h*t,p=h-n,y=lp(u,o),I=Math.exp(-d);return Bd-p/y*I},s=u=>{const d=u*o*t,p=d*n+n,y=Math.pow(o,2)*Math.pow(u,2)*t,I=Math.exp(-d),S=lp(Math.pow(u,2),o);return(-i(u)+Bd>0?-1:1)*((p-y)*I)/S}):(i=u=>{const h=Math.exp(-u*t),d=(u-n)*t+1;return-Bd+h*d},s=u=>{const h=Math.exp(-u*t),d=(n-u)*(t*t);return h*d});const a=5/t,l=iD(i,s,a);if(t=Fr(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:t}}}const rD=12;function iD(t,e,n){let r=n;for(let i=1;i<rD;i++)r=r-t(r)/e(r);return r}function lp(t,e){return t*Math.sqrt(1-e*e)}const sD=["duration","bounce"],oD=["stiffness","damping","mass"];function Uv(t,e){return e.some(n=>t[n]!==void 0)}function aD(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!Uv(t,oD)&&Uv(t,sD)){const n=nD(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function Bx({keyframes:t,restDelta:e,restSpeed:n,...r}){const i=t[0],s=t[t.length-1],o={done:!1,value:i},{stiffness:a,damping:l,mass:u,duration:h,velocity:d,isResolvedFromDuration:p}=aD({...r,velocity:-Wn(r.velocity||0)}),y=d||0,I=l/(2*Math.sqrt(a*u)),S=s-i,A=Wn(Math.sqrt(a/u)),E=Math.abs(S)<5;n||(n=E?.01:2),e||(e=E?.005:.5);let _;if(I<1){const v=lp(A,I);_=b=>{const L=Math.exp(-I*A*b);return s-L*((y+I*A*S)/v*Math.sin(v*b)+S*Math.cos(v*b))}}else if(I===1)_=v=>s-Math.exp(-A*v)*(S+(y+A*S)*v);else{const v=A*Math.sqrt(I*I-1);_=b=>{const L=Math.exp(-I*A*b),M=Math.min(v*b,300);return s-L*((y+I*A*S)*Math.sinh(M)+v*S*Math.cosh(M))/v}}return{calculatedDuration:p&&h||null,next:v=>{const b=_(v);if(p)o.done=v>=h;else{let L=y;v!==0&&(I<1?L=Ux(_,v,b):L=0);const M=Math.abs(L)<=n,x=Math.abs(s-b)<=e;o.done=M&&x}return o.value=o.done?s:b,o}}}function Bv({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:h}){const d=t[0],p={done:!1,value:d},y=w=>a!==void 0&&w<a||l!==void 0&&w>l,I=w=>a===void 0?l:l===void 0||Math.abs(a-w)<Math.abs(l-w)?a:l;let S=n*e;const A=d+S,E=o===void 0?A:o(A);E!==A&&(S=E-d);const _=w=>-S*Math.exp(-w/r),v=w=>E+_(w),b=w=>{const C=_(w),P=v(w);p.done=Math.abs(C)<=u,p.value=p.done?E:P};let L,M;const x=w=>{y(p.value)&&(L=w,M=Bx({keyframes:[p.value,I(p.value)],velocity:Ux(v,w,p.value),damping:i,stiffness:s,restDelta:u,restSpeed:h}))};return x(0),{calculatedDuration:null,next:w=>{let C=!1;return!M&&L===void 0&&(C=!0,b(w),x(w)),L!==void 0&&w>L?M.next(w-L):(!C&&b(w),p)}}}const lD=t=>{const e=({timestamp:n})=>t(n);return{start:()=>Te.update(e,!0),stop:()=>Jn(e),now:()=>ut.isProcessing?ut.timestamp:performance.now()}},zv=2e4;function $v(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<zv;)e+=n,r=t.next(e);return e>=zv?1/0:e}const cD={decay:Bv,inertia:Bv,tween:vu,keyframes:vu,spring:Bx};function _u({autoplay:t=!0,delay:e=0,driver:n=lD,keyframes:r,type:i="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:h,onUpdate:d,...p}){let y=1,I=!1,S,A;const E=()=>{A=new Promise(J=>{S=J})};E();let _;const v=cD[i]||vu;let b;v!==vu&&typeof r[0]!="number"&&(b=jx([0,100],r,{clamp:!1}),r=[0,100]);const L=v({...p,keyframes:r});let M;a==="mirror"&&(M=v({...p,keyframes:[...r].reverse(),velocity:-(p.velocity||0)}));let x="idle",w=null,C=null,P=null;L.calculatedDuration===null&&s&&(L.calculatedDuration=$v(L));const{calculatedDuration:R}=L;let D=1/0,k=1/0;R!==null&&(D=R+o,k=D*(s+1)-o);let ae=0;const Oe=J=>{if(C===null)return;y>0&&(C=Math.min(C,J)),y<0&&(C=Math.min(J-k/y,C)),w!==null?ae=w:ae=Math.round(J-C)*y;const fe=ae-e*(y>=0?1:-1),pn=y>=0?fe<0:fe>k;ae=Math.max(fe,0),x==="finished"&&w===null&&(ae=k);let gt=ae,mn=L;if(s){const Xi=Math.min(ae,k)/D;let ui=Math.floor(Xi),Nn=Xi%1;!Nn&&Xi>=1&&(Nn=1),Nn===1&&ui--,ui=Math.min(ui,s+1),!!(ui%2)&&(a==="reverse"?(Nn=1-Nn,o&&(Nn-=o/D)):a==="mirror"&&(mn=M)),gt=Kr(0,1,Nn)*D}const Ze=pn?{done:!1,value:r[0]}:mn.next(gt);b&&(Ze.value=b(Ze.value));let{done:Zt}=Ze;!pn&&R!==null&&(Zt=y>=0?ae>=k:ae<=0);const vo=w===null&&(x==="finished"||x==="running"&&Zt);return d&&d(Ze.value),vo&&z(),Ze},me=()=>{_&&_.stop(),_=void 0},Ge=()=>{x="idle",me(),S(),E(),C=P=null},z=()=>{x="finished",h&&h(),me(),S()},K=()=>{if(I)return;_||(_=n(Oe));const J=_.now();l&&l(),w!==null?C=J-w:(!C||x==="finished")&&(C=J),x==="finished"&&E(),P=C,w=null,x="running",_.start()};t&&K();const te={then(J,fe){return A.then(J,fe)},get time(){return Wn(ae)},set time(J){J=Fr(J),ae=J,w!==null||!_||y===0?w=J:C=_.now()-J/y},get duration(){const J=L.calculatedDuration===null?$v(L):L.calculatedDuration;return Wn(J)},get speed(){return y},set speed(J){J===y||!_||(y=J,te.time=Wn(ae))},get state(){return x},play:K,pause:()=>{x="paused",w=ae},stop:()=>{I=!0,x!=="idle"&&(x="idle",u&&u(),Ge())},cancel:()=>{P!==null&&Oe(P),Ge()},complete:()=>{x="finished"},sample:J=>(C=0,Oe(J))};return te}function uD(t){let e;return()=>(e===void 0&&(e=t()),e)}const hD=uD(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),dD=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),ac=10,fD=2e4,pD=(t,e)=>e.type==="spring"||t==="backgroundColor"||!vx(e.ease);function mD(t,e,{onUpdate:n,onComplete:r,...i}){if(!(hD()&&dD.has(e)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let o=!1,a,l,u=!1;const h=()=>{l=new Promise(v=>{a=v})};h();let{keyframes:d,duration:p=300,ease:y,times:I}=i;if(pD(e,i)){const v=_u({...i,repeat:0,delay:0});let b={done:!1,value:d[0]};const L=[];let M=0;for(;!b.done&&M<fD;)b=v.sample(M),L.push(b.value),M+=ac;I=void 0,d=L,p=M-ac,y="linear"}const S=SN(t.owner.current,e,d,{...i,duration:p,ease:y,times:I}),A=()=>{u=!1,S.cancel()},E=()=>{u=!0,Te.update(A),a(),h()};return S.onfinish=()=>{u||(t.set(CN(d,i)),r&&r(),E())},{then(v,b){return l.then(v,b)},attachTimeline(v){return S.timeline=v,S.onfinish=null,De},get time(){return Wn(S.currentTime||0)},set time(v){S.currentTime=Fr(v)},get speed(){return S.playbackRate},set speed(v){S.playbackRate=v},get duration(){return Wn(p)},play:()=>{o||(S.play(),Jn(A))},pause:()=>S.pause(),stop:()=>{if(o=!0,S.playState==="idle")return;const{currentTime:v}=S;if(v){const b=_u({...i,autoplay:!1});t.setWithVelocity(b.sample(v-ac).value,b.sample(v).value,ac)}E()},complete:()=>{u||S.finish()},cancel:E}}function gD({keyframes:t,delay:e,onUpdate:n,onComplete:r}){const i=()=>(n&&n(t[t.length-1]),r&&r(),{time:0,speed:1,duration:0,play:De,pause:De,stop:De,then:s=>(s(),Promise.resolve()),cancel:De,complete:De});return e?_u({keyframes:[0,1],duration:0,delay:e,onComplete:i}):i()}const yD={type:"spring",stiffness:500,damping:25,restSpeed:10},vD=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),_D={type:"keyframes",duration:.8},wD={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ED=(t,{keyframes:e})=>e.length>2?_D:Hi.has(t)?t.startsWith("scale")?vD(e[1]):yD:wD,cp=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Qr.test(e)||e==="0")&&!e.startsWith("url(")),TD=new Set(["brightness","contrast","saturate","opacity"]);function xD(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(dh)||[];if(!r)return t;const i=n.replace(r,"");let s=TD.has(e)?1:0;return r!==n&&(s*=100),e+"("+s+i+")"}const ID=/([a-z-]*)\(.*?\)/g,up={...Qr,getAnimatableNone:t=>{const e=t.match(ID);return e?e.map(xD).join(" "):t}},SD={...nx,color:_t,backgroundColor:_t,outlineColor:_t,fill:_t,stroke:_t,borderColor:_t,borderTopColor:_t,borderRightColor:_t,borderBottomColor:_t,borderLeftColor:_t,filter:up,WebkitFilter:up},lg=t=>SD[t];function zx(t,e){let n=lg(t);return n!==up&&(n=Qr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const $x=t=>/^0[^.\s]+$/.test(t);function CD(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||$x(t)}function AD(t,e,n,r){const i=cp(e,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const o=r.from!==void 0?r.from:t.get();let a;const l=[];for(let u=0;u<s.length;u++)s[u]===null&&(s[u]=u===0?o:s[u-1]),CD(s[u])&&l.push(u),typeof s[u]=="string"&&s[u]!=="none"&&s[u]!=="0"&&(a=s[u]);if(i&&l.length&&a)for(let u=0;u<l.length;u++){const h=l[u];s[h]=zx(e,a)}return s}function PD({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...h}){return!!Object.keys(h).length}function cg(t,e){return t[e]||t.default||t}const kD={skipAnimations:!1},ug=(t,e,n,r={})=>i=>{const s=cg(r,t)||{},o=s.delay||r.delay||0;let{elapsed:a=0}=r;a=a-Fr(o);const l=AD(e,t,n,s),u=l[0],h=l[l.length-1],d=cp(t,u),p=cp(t,h);let y={keyframes:l,velocity:e.getVelocity(),ease:"easeOut",...s,delay:-a,onUpdate:I=>{e.set(I),s.onUpdate&&s.onUpdate(I)},onComplete:()=>{i(),s.onComplete&&s.onComplete()}};if(PD(s)||(y={...y,...ED(t,y)}),y.duration&&(y.duration=Fr(y.duration)),y.repeatDelay&&(y.repeatDelay=Fr(y.repeatDelay)),!d||!p||IN.current||s.type===!1||kD.skipAnimations)return gD(y);if(!r.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const I=mD(e,t,y);if(I)return I}return _u(y)};function wu(t){return!!(Nt(t)&&t.add)}const Wx=t=>/^\-?\d*\.?\d+$/.test(t);function hg(t,e){t.indexOf(e)===-1&&t.push(e)}function dg(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class fg{constructor(){this.subscriptions=[]}add(e){return hg(this.subscriptions,e),()=>dg(this.subscriptions,e)}notify(e,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const bD=t=>!isNaN(parseFloat(t));class RD{constructor(e,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:s,timestamp:o}=ut;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,Te.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>Te.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=bD(this.current),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new fg);const r=this.events[e].add(n);return e==="change"?()=>{r(),Te.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,r){this.set(n),this.prev=e,this.timeDelta=r}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Fx(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function $s(t,e){return new RD(t,e)}const Hx=t=>e=>e.test(t),ND={test:t=>t==="auto",parse:t=>t},qx=[qi,Q,In,mr,jR,MR,ND],Wo=t=>qx.find(Hx(t)),DD=[...qx,_t,Qr],VD=t=>DD.find(Hx(t));function LD(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,$s(n))}function OD(t,e){const n=ph(t,e);let{transitionEnd:r={},transition:i={},...s}=n?t.makeTargetAnimatable(n,!1):{};s={...s,...r};for(const o in s){const a=ZR(s[o]);LD(t,o,a)}}function MD(t,e,n){var r,i;const s=Object.keys(e).filter(a=>!t.hasValue(a)),o=s.length;if(o)for(let a=0;a<o;a++){const l=s[a],u=e[l];let h=null;Array.isArray(u)&&(h=u[0]),h===null&&(h=(i=(r=n[l])!==null&&r!==void 0?r:t.readValue(l))!==null&&i!==void 0?i:e[l]),h!=null&&(typeof h=="string"&&(Wx(h)||$x(h))?h=parseFloat(h):!VD(h)&&Qr.test(u)&&(h=zx(l,u)),t.addValue(l,$s(h,{owner:t})),n[l]===void 0&&(n[l]=h),h!==null&&t.setBaseTarget(l,h))}}function jD(t,e){return e?(e[t]||e.default||e).from:void 0}function FD(t,e,n){const r={};for(const i in t){const s=jD(i,e);if(s!==void 0)r[i]=s;else{const o=n.getValue(i);o&&(r[i]=o.get())}}return r}function UD({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function BD(t,e){const n=t.get();if(Array.isArray(e)){for(let r=0;r<e.length;r++)if(e[r]!==n)return!0}else return n!==e}function Gx(t,e,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...a}=t.makeTargetAnimatable(e);const l=t.getValue("willChange");r&&(s=r);const u=[],h=i&&t.animationState&&t.animationState.getState()[i];for(const d in a){const p=t.getValue(d),y=a[d];if(!p||y===void 0||h&&UD(h,d))continue;const I={delay:n,elapsed:0,...cg(s||{},d)};if(window.HandoffAppearAnimations){const E=t.getProps()[KT];if(E){const _=window.HandoffAppearAnimations(E,d,p,Te);_!==null&&(I.elapsed=_,I.isHandoff=!0)}}let S=!I.isHandoff&&!BD(p,y);if(I.type==="spring"&&(p.getVelocity()||I.velocity)&&(S=!1),p.animation&&(S=!1),S)continue;p.start(ug(d,p,y,t.shouldReduceMotion&&Hi.has(d)?{type:!1}:I));const A=p.animation;wu(l)&&(l.add(d),A.then(()=>l.remove(d))),u.push(A)}return o&&Promise.all(u).then(()=>{o&&OD(t,o)}),u}function hp(t,e,n={}){const r=ph(t,e,n.custom);let{transition:i=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(Gx(t,r,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:h,staggerDirection:d}=i;return zD(t,e,u+l,h,d,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,u]=a==="beforeChildren"?[s,o]:[o,s];return l().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function zD(t,e,n=0,r=0,i=1,s){const o=[],a=(t.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(t.variantChildren).sort($D).forEach((u,h)=>{u.notify("AnimationStart",e),o.push(hp(u,e,{...s,delay:n+l(h)}).then(()=>u.notify("AnimationComplete",e)))}),Promise.all(o)}function $D(t,e){return t.sortNodePosition(e)}function WD(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const i=e.map(s=>hp(t,s,n));r=Promise.all(i)}else if(typeof e=="string")r=hp(t,e,n);else{const i=typeof e=="function"?ph(t,e,n.custom):e;r=Promise.all(Gx(t,i,n))}return r.then(()=>t.notify("AnimationComplete",e))}const HD=[...Qm].reverse(),qD=Qm.length;function GD(t){return e=>Promise.all(e.map(({animation:n,options:r})=>WD(t,n,r)))}function KD(t){let e=GD(t);const n=YD();let r=!0;const i=(l,u)=>{const h=ph(t,u);if(h){const{transition:d,transitionEnd:p,...y}=h;l={...l,...y,...p}}return l};function s(l){e=l(t)}function o(l,u){const h=t.getProps(),d=t.getVariantContext(!0)||{},p=[],y=new Set;let I={},S=1/0;for(let E=0;E<qD;E++){const _=HD[E],v=n[_],b=h[_]!==void 0?h[_]:d[_],L=$a(b),M=_===u?v.isActive:null;M===!1&&(S=E);let x=b===d[_]&&b!==h[_]&&L;if(x&&r&&t.manuallyAnimateOnMount&&(x=!1),v.protectedKeys={...I},!v.isActive&&M===null||!b&&!v.prevProp||uh(b)||typeof b=="boolean")continue;let C=QD(v.prevProp,b)||_===u&&v.isActive&&!x&&L||E>S&&L,P=!1;const R=Array.isArray(b)?b:[b];let D=R.reduce(i,{});M===!1&&(D={});const{prevResolvedValues:k={}}=v,ae={...k,...D},Oe=me=>{C=!0,y.has(me)&&(P=!0,y.delete(me)),v.needsAnimating[me]=!0};for(const me in ae){const Ge=D[me],z=k[me];if(I.hasOwnProperty(me))continue;let K=!1;gu(Ge)&&gu(z)?K=!gx(Ge,z):K=Ge!==z,K?Ge!==void 0?Oe(me):y.add(me):Ge!==void 0&&y.has(me)?Oe(me):v.protectedKeys[me]=!0}v.prevProp=b,v.prevResolvedValues=D,v.isActive&&(I={...I,...D}),r&&t.blockInitialAnimation&&(C=!1),C&&(!x||P)&&p.push(...R.map(me=>({animation:me,options:{type:_,...l}})))}if(y.size){const E={};y.forEach(_=>{const v=t.getBaseTarget(_);v!==void 0&&(E[_]=v)}),p.push({animation:E})}let A=!!p.length;return r&&(h.initial===!1||h.initial===h.animate)&&!t.manuallyAnimateOnMount&&(A=!1),r=!1,A?e(p):Promise.resolve()}function a(l,u,h){var d;if(n[l].isActive===u)return Promise.resolve();(d=t.variantChildren)===null||d===void 0||d.forEach(y=>{var I;return(I=y.animationState)===null||I===void 0?void 0:I.setActive(l,u)}),n[l].isActive=u;const p=o(h,l);for(const y in n)n[y].protectedKeys={};return p}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function QD(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!gx(e,t):!1}function gi(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function YD(){return{animate:gi(!0),whileInView:gi(),whileHover:gi(),whileTap:gi(),whileDrag:gi(),whileFocus:gi(),exit:gi()}}class XD extends si{constructor(e){super(e),e.animationState||(e.animationState=KD(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),uh(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let JD=0;class ZD extends si{constructor(){super(...arguments),this.id=JD++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const s=this.node.animationState.setActive("exit",!e,{custom:r??this.node.getProps().custom});n&&!e&&s.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const eV={animation:{Feature:XD},exit:{Feature:ZD}},Wv=(t,e)=>Math.abs(t-e);function tV(t,e){const n=Wv(t.x,e.x),r=Wv(t.y,e.y);return Math.sqrt(n**2+r**2)}class Kx{constructor(e,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=$d(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,y=tV(d.offset,{x:0,y:0})>=3;if(!p&&!y)return;const{point:I}=d,{timestamp:S}=ut;this.history.push({...I,timestamp:S});const{onStart:A,onMove:E}=this.handlers;p||(A&&A(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),E&&E(this.lastMoveEvent,d)},this.handlePointerMove=(d,p)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=zd(p,this.transformPagePoint),Te.update(this.updatePoint,!0)},this.handlePointerUp=(d,p)=>{this.end();const{onEnd:y,onSessionEnd:I,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const A=$d(d.type==="pointercancel"?this.lastMoveEventInfo:zd(p,this.transformPagePoint),this.history);this.startEvent&&y&&y(d,A),I&&I(d,A)},!hx(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=fh(e),a=zd(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=ut;this.history=[{...l,timestamp:u}];const{onSessionStart:h}=n;h&&h(e,$d(a,this.history)),this.removeListeners=jr($n(this.contextWindow,"pointermove",this.handlePointerMove),$n(this.contextWindow,"pointerup",this.handlePointerUp),$n(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Jn(this.updatePoint)}}function zd(t,e){return e?{point:e(t.point)}:t}function Hv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function $d({point:t},e){return{point:t,delta:Hv(t,Qx(e)),offset:Hv(t,nV(e)),velocity:rV(e,.1)}}function nV(t){return t[0]}function Qx(t){return t[t.length-1]}function rV(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=Qx(t);for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>Fr(e)));)n--;if(!r)return{x:0,y:0};const s=Wn(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Ft(t){return t.max-t.min}function dp(t,e=0,n=.01){return Math.abs(t-e)<=n}function qv(t,e,n,r=.5){t.origin=r,t.originPoint=Ae(e.min,e.max,t.origin),t.scale=Ft(n)/Ft(e),(dp(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=Ae(n.min,n.max,t.origin)-t.originPoint,(dp(t.translate)||isNaN(t.translate))&&(t.translate=0)}function ga(t,e,n,r){qv(t.x,e.x,n.x,r?r.originX:void 0),qv(t.y,e.y,n.y,r?r.originY:void 0)}function Gv(t,e,n){t.min=n.min+e.min,t.max=t.min+Ft(e)}function iV(t,e,n){Gv(t.x,e.x,n.x),Gv(t.y,e.y,n.y)}function Kv(t,e,n){t.min=e.min-n.min,t.max=t.min+Ft(e)}function ya(t,e,n){Kv(t.x,e.x,n.x),Kv(t.y,e.y,n.y)}function sV(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?Ae(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?Ae(n,t,r.max):Math.min(t,n)),t}function Qv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function oV(t,{top:e,left:n,bottom:r,right:i}){return{x:Qv(t.x,n,i),y:Qv(t.y,e,r)}}function Yv(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function aV(t,e){return{x:Yv(t.x,e.x),y:Yv(t.y,e.y)}}function lV(t,e){let n=.5;const r=Ft(t),i=Ft(e);return i>r?n=Ha(e.min,e.max-r,t.min):r>i&&(n=Ha(t.min,t.max-i,e.min)),Kr(0,1,n)}function cV(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const fp=.35;function uV(t=fp){return t===!1?t=0:t===!0&&(t=fp),{x:Xv(t,"left","right"),y:Xv(t,"top","bottom")}}function Xv(t,e,n){return{min:Jv(t,e),max:Jv(t,n)}}function Jv(t,e){return typeof t=="number"?t:t[e]||0}const Zv=()=>({translate:0,scale:1,origin:0,originPoint:0}),ws=()=>({x:Zv(),y:Zv()}),e_=()=>({min:0,max:0}),je=()=>({x:e_(),y:e_()});function $t(t){return[t("x"),t("y")]}function Yx({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function hV({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function dV(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Wd(t){return t===void 0||t===1}function pp({scale:t,scaleX:e,scaleY:n}){return!Wd(t)||!Wd(e)||!Wd(n)}function _i(t){return pp(t)||Xx(t)||t.z||t.rotate||t.rotateX||t.rotateY}function Xx(t){return t_(t.x)||t_(t.y)}function t_(t){return t&&t!=="0%"}function Eu(t,e,n){const r=t-n,i=e*r;return n+i}function n_(t,e,n,r,i){return i!==void 0&&(t=Eu(t,i,r)),Eu(t,n,r)+e}function mp(t,e=0,n=1,r,i){t.min=n_(t.min,e,n,r,i),t.max=n_(t.max,e,n,r,i)}function Jx(t,{x:e,y:n}){mp(t.x,e.translate,e.scale,e.originPoint),mp(t.y,n.translate,n.scale,n.originPoint)}function fV(t,e,n,r=!1){const i=n.length;if(!i)return;e.x=e.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Es(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,Jx(t,o)),r&&_i(s.latestValues)&&Es(t,s.latestValues))}e.x=r_(e.x),e.y=r_(e.y)}function r_(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function vr(t,e){t.min=t.min+e,t.max=t.max+e}function i_(t,e,[n,r,i]){const s=e[i]!==void 0?e[i]:.5,o=Ae(t.min,t.max,s);mp(t,e[n],e[r],o,e.scale)}const pV=["x","scaleX","originX"],mV=["y","scaleY","originY"];function Es(t,e){i_(t.x,e,pV),i_(t.y,e,mV)}function Zx(t,e){return Yx(dV(t.getBoundingClientRect(),e))}function gV(t,e,n){const r=Zx(t,n),{scroll:i}=e;return i&&(vr(r.x,i.offset.x),vr(r.y,i.offset.y)),r}const eI=({current:t})=>t?t.ownerDocument.defaultView:null,yV=new WeakMap;class vV{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=je(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=h=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(fh(h,"page").point)},s=(h,d)=>{const{drag:p,dragPropagation:y,onDragStart:I}=this.getProps();if(p&&!y&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=fx(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),$t(A=>{let E=this.getAxisMotionValue(A).get()||0;if(In.test(E)){const{projection:_}=this.visualElement;if(_&&_.layout){const v=_.layout.layoutBox[A];v&&(E=Ft(v)*(parseFloat(E)/100))}}this.originPoint[A]=E}),I&&Te.update(()=>I(h,d),!1,!0);const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},o=(h,d)=>{const{dragPropagation:p,dragDirectionLock:y,onDirectionLock:I,onDrag:S}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:A}=d;if(y&&this.currentDirection===null){this.currentDirection=_V(A),this.currentDirection!==null&&I&&I(this.currentDirection);return}this.updateAxis("x",d.point,A),this.updateAxis("y",d.point,A),this.visualElement.render(),S&&S(h,d)},a=(h,d)=>this.stop(h,d),l=()=>$t(h=>{var d;return this.getAnimationState(h)==="paused"&&((d=this.getAxisMotionValue(h).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Kx(e,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:eI(this.visualElement)})}stop(e,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&Te.update(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,r){const{drag:i}=this.getProps();if(!r||!lc(e,i,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=sV(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&vs(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=oV(i.layoutBox,n):this.constraints=!1,this.elastic=uV(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&$t(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=cV(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!vs(e))return!1;const r=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=gV(r,i.root,this.visualElement.getTransformPagePoint());let o=aV(i.layout.layoutBox,s);if(n){const a=n(hV(o));this.hasMutatedConstraints=!!a,a&&(o=Yx(a))}return o}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=$t(h=>{if(!lc(h,n,this.currentDirection))return;let d=l&&l[h]||{};o&&(d={min:0,max:0});const p=i?200:1e6,y=i?40:1e7,I={type:"inertia",velocity:r?e[h]:0,bounceStiffness:p,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(h,I)});return Promise.all(u).then(a)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return r.start(ug(e,r,0,n))}stopAnimation(){$t(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){$t(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){$t(n=>{const{drag:r}=this.getProps();if(!lc(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(e[n]-Ae(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!vs(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};$t(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();i[o]=lV({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),$t(o=>{if(!lc(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(Ae(l,u,i[o]))})}addListeners(){if(!this.visualElement.current)return;yV.set(this.visualElement,this);const e=this.visualElement.current,n=$n(e,"pointerdown",l=>{const{drag:u,dragListener:h=!0}=this.getProps();u&&h&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();vs(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const o=jn(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&($t(h=>{const d=this.getAxisMotionValue(h);d&&(this.originPoint[h]+=l[h].translate,d.set(d.get()+l[h].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=fp,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function lc(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function _V(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class wV extends si{constructor(e){super(e),this.removeGroupControls=De,this.removeListeners=De,this.controls=new vV(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||De}unmount(){this.removeGroupControls(),this.removeListeners()}}const s_=t=>(e,n)=>{t&&Te.update(()=>t(e,n))};class EV extends si{constructor(){super(...arguments),this.removePointerDownListener=De}onPointerDown(e){this.session=new Kx(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:eI(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:s_(e),onStart:s_(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&Te.update(()=>i(s,o))}}}mount(){this.removePointerDownListener=$n(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function TV(){const t=N.useContext(Gm);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:r}=t,i=N.useId();return N.useEffect(()=>r(i),[]),!e&&n?[!1,()=>n&&n(i)]:[!0]}const Rc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function o_(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ho={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Q.test(t))t=parseFloat(t);else return t;const n=o_(t,e.target.x),r=o_(t,e.target.y);return`${n}% ${r}%`}},xV={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,i=Qr.parse(t);if(i.length>5)return r;const s=Qr.createTransformer(t),o=typeof i[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;i[0+o]/=a,i[1+o]/=l;const u=Ae(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=u),typeof i[3+o]=="number"&&(i[3+o]/=u),s(i)}};class IV extends le.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=e;bR(SV),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Rc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||Te.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function tI(t){const[e,n]=TV(),r=N.useContext(YT);return le.createElement(IV,{...t,layoutGroup:r,switchLayoutGroup:N.useContext(XT),isPresent:e,safeToRemove:n})}const SV={borderRadius:{...Ho,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ho,borderTopRightRadius:Ho,borderBottomLeftRadius:Ho,borderBottomRightRadius:Ho,boxShadow:xV},nI=["TopLeft","TopRight","BottomLeft","BottomRight"],CV=nI.length,a_=t=>typeof t=="string"?parseFloat(t):t,l_=t=>typeof t=="number"||Q.test(t);function AV(t,e,n,r,i,s){i?(t.opacity=Ae(0,n.opacity!==void 0?n.opacity:1,PV(r)),t.opacityExit=Ae(e.opacity!==void 0?e.opacity:1,0,kV(r))):s&&(t.opacity=Ae(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<CV;o++){const a=`border${nI[o]}Radius`;let l=c_(e,a),u=c_(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||l_(l)===l_(u)?(t[a]=Math.max(Ae(a_(l),a_(u),r),0),(In.test(u)||In.test(l))&&(t[a]+="%")):t[a]=u}(e.rotate||n.rotate)&&(t.rotate=Ae(e.rotate||0,n.rotate||0,r))}function c_(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const PV=rI(0,.5,Sx),kV=rI(.5,.95,De);function rI(t,e,n){return r=>r<t?0:r>e?1:n(Ha(t,e,r))}function u_(t,e){t.min=e.min,t.max=e.max}function zt(t,e){u_(t.x,e.x),u_(t.y,e.y)}function h_(t,e,n,r,i){return t-=e,t=Eu(t,1/n,r),i!==void 0&&(t=Eu(t,1/i,r)),t}function bV(t,e=0,n=1,r=.5,i,s=t,o=t){if(In.test(e)&&(e=parseFloat(e),e=Ae(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=Ae(s.min,s.max,r);t===s&&(a-=e),t.min=h_(t.min,e,n,a,i),t.max=h_(t.max,e,n,a,i)}function d_(t,e,[n,r,i],s,o){bV(t,e[n],e[r],e[i],e.scale,s,o)}const RV=["x","scaleX","originX"],NV=["y","scaleY","originY"];function f_(t,e,n,r){d_(t.x,e,RV,n?n.x:void 0,r?r.x:void 0),d_(t.y,e,NV,n?n.y:void 0,r?r.y:void 0)}function p_(t){return t.translate===0&&t.scale===1}function iI(t){return p_(t.x)&&p_(t.y)}function DV(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function sI(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function m_(t){return Ft(t.x)/Ft(t.y)}class VV{constructor(){this.members=[]}add(e){hg(this.members,e),e.scheduleRender()}remove(e){if(dg(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(i=>e===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(e,n){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,n&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:r}=e;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function g_(t,e,n){let r="";const i=t.x.translate/e.x,s=t.y.translate/e.y;if((i||s)&&(r=`translate3d(${i}px, ${s}px, 0) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:l,rotateX:u,rotateY:h}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),h&&(r+=`rotateY(${h}deg) `)}const o=t.x.scale*e.x,a=t.y.scale*e.y;return(o!==1||a!==1)&&(r+=`scale(${o}, ${a})`),r||"none"}const LV=(t,e)=>t.depth-e.depth;class OV{constructor(){this.children=[],this.isDirty=!1}add(e){hg(this.children,e),this.isDirty=!0}remove(e){dg(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(LV),this.isDirty=!1,this.children.forEach(e)}}function MV(t,e){const n=performance.now(),r=({timestamp:i})=>{const s=i-n;s>=e&&(Jn(r),t(s-e))};return Te.read(r,!0),()=>Jn(r)}function jV(t){window.MotionDebug&&window.MotionDebug.record(t)}function FV(t){return t instanceof SVGElement&&t.tagName!=="svg"}function UV(t,e,n){const r=Nt(t)?t:$s(t);return r.start(ug("",r,e,n)),r.animation}const y_=["","X","Y","Z"],BV={visibility:"hidden"},v_=1e3;let zV=0;const wi={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function oI({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=e==null?void 0:e()){this.id=zV++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,wi.totalNodes=wi.resolvedTargetDeltas=wi.recalculatedProjection=0,this.nodes.forEach(HV),this.nodes.forEach(YV),this.nodes.forEach(XV),this.nodes.forEach(qV),jV(wi)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new OV)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new fg),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=FV(o),this.instance=o;const{layoutId:l,layout:u,visualElement:h}=this.options;if(h&&!h.current&&h.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),t){let d;const p=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=MV(p,250),Rc.hasAnimatedSinceResize&&(Rc.hasAnimatedSinceResize=!1,this.nodes.forEach(w_))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&h&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:p,hasRelativeTargetChanged:y,layout:I})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||h.getDefaultTransition()||nL,{onLayoutAnimationStart:A,onLayoutAnimationComplete:E}=h.getProps(),_=!this.targetLayout||!sI(this.targetLayout,I)||y,v=!p&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||p&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,v);const b={...cg(S,"layout"),onPlay:A,onComplete:E};(h.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b)}else p||w_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=I})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Jn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(JV),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let h=0;h<this.path.length;h++){const d=this.path[h];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(__);return}this.isUpdating||this.nodes.forEach(KV),this.isUpdating=!1,this.nodes.forEach(QV),this.nodes.forEach($V),this.nodes.forEach(WV),this.clearAllSnapshots();const a=performance.now();ut.delta=Kr(0,1e3/60,a-ut.timestamp),ut.timestamp=a,ut.isProcessing=!0,Vd.update.process(ut),Vd.preRender.process(ut),Vd.render.process(ut),ut.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(GV),this.sharedNodes.forEach(ZV)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Te.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Te.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=je(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!iI(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,h=u!==this.prevTransformTemplateValue;o&&(a||_i(this.latestValues)||h)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),rL(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return je();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(vr(a.x,l.offset.x),vr(a.y,l.offset.y)),a}removeElementScroll(o){const a=je();zt(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:h,options:d}=u;if(u!==this.root&&h&&d.layoutScroll){if(h.isRoot){zt(a,o);const{scroll:p}=this.root;p&&(vr(a.x,-p.offset.x),vr(a.y,-p.offset.y))}vr(a.x,h.offset.x),vr(a.y,h.offset.y)}}return a}applyTransform(o,a=!1){const l=je();zt(l,o);for(let u=0;u<this.path.length;u++){const h=this.path[u];!a&&h.options.layoutScroll&&h.scroll&&h!==h.root&&Es(l,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),_i(h.latestValues)&&Es(l,h.latestValues)}return _i(this.latestValues)&&Es(l,this.latestValues),l}removeTransform(o){const a=je();zt(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!_i(u.latestValues))continue;pp(u.latestValues)&&u.updateSnapshot();const h=je(),d=u.measurePageBox();zt(h,d),f_(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,h)}return _i(this.latestValues)&&f_(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ut.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:d,layoutId:p}=this.options;if(!(!this.layout||!(d||p))){if(this.resolvedRelativeTargetAt=ut.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=je(),this.relativeTargetOrigin=je(),ya(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),zt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=je(),this.targetWithTransforms=je()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),iV(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):zt(this.target,this.layout.layoutBox),Jx(this.target,this.targetDelta)):zt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=je(),this.relativeTargetOrigin=je(),ya(this.relativeTargetOrigin,this.target,y.target),zt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}wi.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||pp(this.parent.latestValues)||Xx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===ut.timestamp&&(u=!1),u)return;const{layout:h,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||d))return;zt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,y=this.treeScale.y;fV(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:I}=a;if(!I){this.projectionTransform&&(this.projectionDelta=ws(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=ws(),this.projectionDeltaWithTransform=ws());const S=this.projectionTransform;ga(this.projectionDelta,this.layoutCorrected,I,this.latestValues),this.projectionTransform=g_(this.projectionDelta,this.treeScale),(this.projectionTransform!==S||this.treeScale.x!==p||this.treeScale.y!==y)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",I)),wi.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},h={...this.latestValues},d=ws();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=je(),y=l?l.source:void 0,I=this.layout?this.layout.source:void 0,S=y!==I,A=this.getStack(),E=!A||A.members.length<=1,_=!!(S&&!E&&this.options.crossfade===!0&&!this.path.some(tL));this.animationProgress=0;let v;this.mixTargetDelta=b=>{const L=b/1e3;E_(d.x,o.x,L),E_(d.y,o.y,L),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ya(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),eL(this.relativeTarget,this.relativeTargetOrigin,p,L),v&&DV(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=je()),zt(v,this.relativeTarget)),S&&(this.animationValues=h,AV(h,u,this.latestValues,L,_,E)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Jn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Te.update(()=>{Rc.hasAnimatedSinceResize=!0,this.currentAnimation=UV(0,v_,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(v_),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:h}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&aI(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||je();const d=Ft(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const p=Ft(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}zt(a,l),Es(a,h),ga(this.projectionDeltaWithTransform,this.layoutCorrected,a,h)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new VV),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let h=0;h<y_.length;h++){const d="rotate"+y_[h];l[d]&&(u[d]=l[d],o.setStaticValue(d,0))}o.render();for(const h in u)o.setStaticValue(h,u[h]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return BV;const u={visibility:""},h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=bc(o==null?void 0:o.pointerEvents)||"",u.transform=h?h(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const S={};return this.options.layoutId&&(S.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,S.pointerEvents=bc(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!_i(this.latestValues)&&(S.transform=h?h({},""):"none",this.hasProjected=!1),S}const p=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=g_(this.projectionDeltaWithTransform,this.treeScale,p),h&&(u.transform=h(p,u.transform));const{x:y,y:I}=this.projectionDelta;u.transformOrigin=`${y.origin*100}% ${I.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=d===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const S in pu){if(p[S]===void 0)continue;const{correct:A,applyTo:E}=pu[S],_=u.transform==="none"?p[S]:A(p[S],d);if(E){const v=E.length;for(let b=0;b<v;b++)u[E[b]]=_}else u[S]=_}return this.options.layoutId&&(u.pointerEvents=d===this?bc(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(__),this.root.sharedNodes.clear()}}}function $V(t){t.updateLayout()}function WV(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?$t(d=>{const p=o?n.measuredBox[d]:n.layoutBox[d],y=Ft(p);p.min=r[d].min,p.max=p.min+y}):aI(s,n.layoutBox,r)&&$t(d=>{const p=o?n.measuredBox[d]:n.layoutBox[d],y=Ft(r[d]);p.max=p.min+y,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+y)});const a=ws();ga(a,r,n.layoutBox);const l=ws();o?ga(l,t.applyTransform(i,!0),n.measuredBox):ga(l,r,n.layoutBox);const u=!iI(a);let h=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:p,layout:y}=d;if(p&&y){const I=je();ya(I,n.layoutBox,p.layoutBox);const S=je();ya(S,r,y.layoutBox),sI(I,S)||(h=!0),d.options.layoutRoot&&(t.relativeTarget=S,t.relativeTargetOrigin=I,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:h})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function HV(t){wi.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function qV(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function GV(t){t.clearSnapshot()}function __(t){t.clearMeasurements()}function KV(t){t.isLayoutDirty=!1}function QV(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function w_(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function YV(t){t.resolveTargetDelta()}function XV(t){t.calcProjection()}function JV(t){t.resetRotation()}function ZV(t){t.removeLeadSnapshot()}function E_(t,e,n){t.translate=Ae(e.translate,0,n),t.scale=Ae(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function T_(t,e,n,r){t.min=Ae(e.min,n.min,r),t.max=Ae(e.max,n.max,r)}function eL(t,e,n,r){T_(t.x,e.x,n.x,r),T_(t.y,e.y,n.y,r)}function tL(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const nL={duration:.45,ease:[.4,0,.1,1]},x_=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),I_=x_("applewebkit/")&&!x_("chrome/")?Math.round:De;function S_(t){t.min=I_(t.min),t.max=I_(t.max)}function rL(t){S_(t.x),S_(t.y)}function aI(t,e,n){return t==="position"||t==="preserve-aspect"&&!dp(m_(e),m_(n),.2)}const iL=oI({attachResizeListener:(t,e)=>jn(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Hd={current:void 0},lI=oI({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Hd.current){const t=new iL({});t.mount(window),t.setOptions({layoutScroll:!0}),Hd.current=t}return Hd.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),sL={pan:{Feature:EV},drag:{Feature:wV,ProjectionNode:lI,MeasureLayout:tI}},oL=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function aL(t){const e=oL.exec(t);if(!e)return[,];const[,n,r]=e;return[n,r]}function gp(t,e,n=1){const[r,i]=aL(t);if(!r)return;const s=window.getComputedStyle(e).getPropertyValue(r);if(s){const o=s.trim();return Wx(o)?parseFloat(o):o}else return sp(i)?gp(i,e,n+1):i}function lL(t,{...e},n){const r=t.current;if(!(r instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(i=>{const s=i.get();if(!sp(s))return;const o=gp(s,r);o&&i.set(o)});for(const i in e){const s=e[i];if(!sp(s))continue;const o=gp(s,r);o&&(e[i]=o,n||(n={}),n[i]===void 0&&(n[i]=s))}return{target:e,transitionEnd:n}}const cL=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),cI=t=>cL.has(t),uL=t=>Object.keys(t).some(cI),C_=t=>t===qi||t===Q,A_=(t,e)=>parseFloat(t.split(", ")[e]),P_=(t,e)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return A_(i[1],e);{const s=r.match(/^matrix\((.+)\)$/);return s?A_(s[1],t):0}},hL=new Set(["x","y","z"]),dL=dl.filter(t=>!hL.has(t));function fL(t){const e=[];return dL.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const Ws={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:P_(4,13),y:P_(5,14)};Ws.translateX=Ws.x;Ws.translateY=Ws.y;const pL=(t,e,n)=>{const r=e.measureViewportBox(),i=e.current,s=getComputedStyle(i),{display:o}=s,a={};o==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(u=>{a[u]=Ws[u](r,s)}),e.render();const l=e.measureViewportBox();return n.forEach(u=>{const h=e.getValue(u);h&&h.jump(a[u]),t[u]=Ws[u](l,s)}),t},mL=(t,e,n={},r={})=>{e={...e},r={...r};const i=Object.keys(e).filter(cI);let s=[],o=!1;const a=[];if(i.forEach(l=>{const u=t.getValue(l);if(!t.hasValue(l))return;let h=n[l],d=Wo(h);const p=e[l];let y;if(gu(p)){const I=p.length,S=p[0]===null?1:0;h=p[S],d=Wo(h);for(let A=S;A<I&&p[A]!==null;A++)y?ig(Wo(p[A])===y):y=Wo(p[A])}else y=Wo(p);if(d!==y)if(C_(d)&&C_(y)){const I=u.get();typeof I=="string"&&u.set(parseFloat(I)),typeof p=="string"?e[l]=parseFloat(p):Array.isArray(p)&&y===Q&&(e[l]=p.map(parseFloat))}else d!=null&&d.transform&&(y!=null&&y.transform)&&(h===0||p===0)?h===0?u.set(y.transform(h)):e[l]=d.transform(p):(o||(s=fL(t),o=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:e[l],u.jump(p))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=pL(e,t,a);return s.length&&s.forEach(([h,d])=>{t.getValue(h).set(d)}),t.render(),ch&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:e,transitionEnd:r}};function gL(t,e,n,r){return uL(e)?mL(t,e,n,r):{target:e,transitionEnd:r}}const yL=(t,e,n,r)=>{const i=lL(t,e,r);return e=i.target,r=i.transitionEnd,gL(t,e,n,r)},yp={current:null},uI={current:!1};function vL(){if(uI.current=!0,!!ch)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>yp.current=t.matches;t.addListener(e),e()}else yp.current=!1}function _L(t,e,n){const{willChange:r}=e;for(const i in e){const s=e[i],o=n[i];if(Nt(s))t.addValue(i,s),wu(r)&&r.add(i);else if(Nt(o))t.addValue(i,$s(s,{owner:t})),wu(r)&&r.remove(i);else if(o!==s)if(t.hasValue(i)){const a=t.getValue(i);!a.hasAnimated&&a.set(s)}else{const a=t.getStaticValue(i);t.addValue(i,$s(a!==void 0?a:s,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const k_=new WeakMap,hI=Object.keys(Wa),wL=hI.length,b_=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],EL=Ym.length;class TL{constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:i,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Te.render(this.render,!1,!0);const{latestValues:a,renderState:l}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.isControllingVariants=hh(n),this.isVariantNode=QT(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...h}=this.scrapeMotionValuesFromProps(n,{});for(const d in h){const p=h[d];a[d]!==void 0&&Nt(p)&&(p.set(a[d],!1),wu(u)&&u.add(d))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,k_.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),uI.current||vL(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:yp.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){k_.delete(this.current),this.projection&&this.projection.unmount(),Jn(this.notifyUpdate),Jn(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const r=Hi.has(e),i=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&Te.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{i(),s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},r,i,s){let o,a;for(let l=0;l<wL;l++){const u=hI[l],{isEnabled:h,Feature:d,ProjectionNode:p,MeasureLayout:y}=Wa[u];p&&(o=p),h(n)&&(!this.features[u]&&d&&(this.features[u]=new d(this)),y&&(a=y))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:h,dragConstraints:d,layoutScroll:p,layoutRoot:y}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!h||d&&vs(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,layoutScroll:p,layoutRoot:y})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):je()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,this.props,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<b_.length;r++){const i=b_[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s=e["on"+i];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=_L(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<EL;r++){const i=Ym[r],s=this.props[i];($a(s)||s===!1)&&(n[i]=s)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=$s(n,{owner:this}),this.addValue(e,r)),r}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=rg(this.props,r))===null||n===void 0?void 0:n[e]:void 0;if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Nt(s)?s:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new fg),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class dI extends TL{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...r},{transformValues:i},s){let o=FD(r,e||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),o&&(o=i(o))),s){MD(this,r,o);const a=yL(this,r,o,n);n=a.transitionEnd,r=a.target}return{transition:e,transitionEnd:n,...r}}}function xL(t){return window.getComputedStyle(t)}class IL extends dI{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(Hi.has(n)){const r=lg(n);return r&&r.default||0}else{const r=xL(e),i=(ex(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(e,{transformPagePoint:n}){return Zx(e,n)}build(e,n,r,i){Jm(e,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(e,n){return ng(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Nt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,r,i){ox(e,n,r,i)}}class SL extends dI{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Hi.has(n)){const r=lg(n);return r&&r.default||0}return n=ax.has(n)?n:Km(n),e.getAttribute(n)}measureInstanceViewportBox(){return je()}scrapeMotionValuesFromProps(e,n){return cx(e,n)}build(e,n,r,i){eg(e,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,r,i){lx(e,n,r,i)}mount(e){this.isSVGTag=tg(e.tagName),super.mount(e)}}const CL=(t,e)=>Xm(t)?new SL(e,{enableHardwareAcceleration:!1}):new IL(e,{enableHardwareAcceleration:!0}),AL={layout:{ProjectionNode:lI,MeasureLayout:tI}},PL={...eV,...wN,...sL,...AL},pg=PR((t,e)=>aN(t,e,PL,CL)),kL=()=>m.jsxs("section",{className:"hero",id:"home",children:[m.jsx("div",{className:"hero-bg"}),m.jsx("div",{className:"container hero-content",children:m.jsxs(pg.div,{className:"hero-text",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:[m.jsx("span",{className:"subtitle",children:"Kualitas Export & Harga Bersahabat"}),m.jsxs("h1",{children:["Jati Prime ",m.jsx("br",{}),"Berkualitas 100% Terpercaya"]}),m.jsx("p",{children:"Temukan berbagai kebutuhan furniture anda di katalog produk terbaru kami. Kami selalu memberikan pilihan produk berkualitas mewah, modern, dan up to date."}),m.jsx("a",{href:"#katalog",className:"btn btn-primary",children:"Lihat Katalog"})]})}),m.jsx("style",{children:`
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
      `})]}),bL=({category:t,onClick:e})=>m.jsxs(pg.div,{className:"category-card",whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},onClick:e,children:[m.jsxs("div",{className:"category-image",children:[m.jsx("img",{src:t.image,alt:t.name}),m.jsx("div",{className:"category-overlay",children:m.jsx("span",{className:"category-icon",children:t.icon})})]}),m.jsxs("div",{className:"category-info",children:[m.jsx("h3",{children:t.name}),m.jsx("p",{children:t.description})]}),m.jsx("style",{children:`
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
      `})]}),RL=()=>{};/**
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
 */const fI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},NL=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},pI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let p=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(p=64)),r.push(n[h],n[d],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NL(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new DL;const p=s<<2|a>>4;if(r.push(p),u!==64){const y=a<<4&240|u>>2;if(r.push(y),d!==64){const I=u<<6&192|d;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class DL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VL=function(t){const e=fI(t);return pI.encodeByteArray(e,!0)},Tu=function(t){return VL(t).replace(/\./g,"")},mI=function(t){try{return pI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function LL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const OL=()=>LL().__FIREBASE_DEFAULTS__,ML=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jL=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mI(t[1]);return e&&JSON.parse(e)},mh=()=>{try{return RL()||OL()||ML()||jL()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gI=t=>{var e,n;return(n=(e=mh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},FL=t=>{const e=gI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yI=()=>{var t;return(t=mh())==null?void 0:t.config},vI=t=>{var e;return(e=mh())==null?void 0:e[`_${t}`]};/**
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
 */class UL{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ao(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _I(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function BL(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[Tu(JSON.stringify(n)),Tu(JSON.stringify(o)),a].join(".")}const va={};function zL(){const t={prod:[],emulator:[]};for(const e of Object.keys(va))va[e]?t.emulator.push(e):t.prod.push(e);return t}function $L(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let R_=!1;function wI(t,e){if(typeof window>"u"||typeof document>"u"||!ao(window.location.host)||va[t]===e||va[t]||R_)return;va[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",s=zL().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function l(p,y){p.setAttribute("width","24"),p.setAttribute("id",y),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{R_=!0,o()},p}function h(p,y){p.setAttribute("id",y),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function d(){const p=$L(r),y=n("text"),I=document.getElementById(y)||document.createElement("span"),S=n("learnmore"),A=document.getElementById(S)||document.createElement("a"),E=n("preprendIcon"),_=document.getElementById(E)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const v=p.element;a(v),h(A,S);const b=u();l(_,E),v.append(_,I,A,b),document.body.appendChild(v)}s?(I.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function WL(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function HL(){var e;const t=(e=mh())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qL(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function GL(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function KL(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QL(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function YL(){return!HL()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function XL(){try{return typeof indexedDB=="object"}catch{return!1}}function JL(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const ZL="FirebaseError";class or extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ZL,Object.setPrototypeOf(this,or.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gl.prototype.create)}}class gl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?e4(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new or(i,a,r)}}function e4(t,e){return t.replace(t4,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const t4=/\{\$([^}]+)}/g;function n4(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(N_(s)&&N_(o)){if(!Mi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function N_(t){return t!==null&&typeof t=="object"}/**
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
 */function yl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ea(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function r4(t,e){const n=new i4(t,e);return n.subscribe.bind(n)}class i4{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");s4(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qd),i.error===void 0&&(i.error=qd),i.complete===void 0&&(i.complete=qd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function s4(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qd(){}/**
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
 */const Ei="[DEFAULT]";/**
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
 */class o4{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new UL;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(l4(e))try{this.getOrInitializeService({instanceIdentifier:Ei})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ei){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ei){return this.instances.has(e)}getOptions(e=Ei){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:a4(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ei){return this.component?this.component.multipleInstances?e:Ei:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function a4(t){return t===Ei?void 0:t}function l4(t){return t.instantiationMode==="EAGER"}/**
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
 */class c4{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new o4(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const u4={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},h4=ie.INFO,d4={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},f4=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=d4[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mg{constructor(e){this.name=e,this._logLevel=h4,this._logHandler=f4,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?u4[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const p4=(t,e)=>e.some(n=>t instanceof n);let D_,V_;function m4(){return D_||(D_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function g4(){return V_||(V_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const EI=new WeakMap,vp=new WeakMap,TI=new WeakMap,Gd=new WeakMap,gg=new WeakMap;function y4(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ur(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&EI.set(n,t)}).catch(()=>{}),gg.set(e,t),e}function v4(t){if(vp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});vp.set(t,e)}let _p={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||TI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _4(t){_p=t(_p)}function w4(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kd(this),e,...n);return TI.set(r,e.sort?e.sort():[e]),Ur(r)}:g4().includes(t)?function(...e){return t.apply(Kd(this),e),Ur(EI.get(this))}:function(...e){return Ur(t.apply(Kd(this),e))}}function E4(t){return typeof t=="function"?w4(t):(t instanceof IDBTransaction&&v4(t),p4(t,m4())?new Proxy(t,_p):t)}function Ur(t){if(t instanceof IDBRequest)return y4(t);if(Gd.has(t))return Gd.get(t);const e=E4(t);return e!==t&&(Gd.set(t,e),gg.set(e,t)),e}const Kd=t=>gg.get(t);function T4(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ur(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ur(o.result),l.oldVersion,l.newVersion,Ur(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const x4=["get","getKey","getAll","getAllKeys","count"],I4=["put","add","delete","clear"],Qd=new Map;function L_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qd.get(e))return Qd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=I4.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||x4.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Qd.set(e,s),s}_4(t=>({...t,get:(e,n,r)=>L_(e,n)||t.get(e,n,r),has:(e,n)=>!!L_(e,n)||t.has(e,n)}));/**
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
 */class S4{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(C4(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function C4(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wp="@firebase/app",O_="0.14.6";/**
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
 */const Zn=new mg("@firebase/app"),A4="@firebase/app-compat",P4="@firebase/analytics-compat",k4="@firebase/analytics",b4="@firebase/app-check-compat",R4="@firebase/app-check",N4="@firebase/auth",D4="@firebase/auth-compat",V4="@firebase/database",L4="@firebase/data-connect",O4="@firebase/database-compat",M4="@firebase/functions",j4="@firebase/functions-compat",F4="@firebase/installations",U4="@firebase/installations-compat",B4="@firebase/messaging",z4="@firebase/messaging-compat",$4="@firebase/performance",W4="@firebase/performance-compat",H4="@firebase/remote-config",q4="@firebase/remote-config-compat",G4="@firebase/storage",K4="@firebase/storage-compat",Q4="@firebase/firestore",Y4="@firebase/ai",X4="@firebase/firestore-compat",J4="firebase",Z4="12.6.0";/**
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
 */const Ep="[DEFAULT]",e3={[wp]:"fire-core",[A4]:"fire-core-compat",[k4]:"fire-analytics",[P4]:"fire-analytics-compat",[R4]:"fire-app-check",[b4]:"fire-app-check-compat",[N4]:"fire-auth",[D4]:"fire-auth-compat",[V4]:"fire-rtdb",[L4]:"fire-data-connect",[O4]:"fire-rtdb-compat",[M4]:"fire-fn",[j4]:"fire-fn-compat",[F4]:"fire-iid",[U4]:"fire-iid-compat",[B4]:"fire-fcm",[z4]:"fire-fcm-compat",[$4]:"fire-perf",[W4]:"fire-perf-compat",[H4]:"fire-rc",[q4]:"fire-rc-compat",[G4]:"fire-gcs",[K4]:"fire-gcs-compat",[Q4]:"fire-fst",[X4]:"fire-fst-compat",[Y4]:"fire-vertex","fire-js":"fire-js",[J4]:"fire-js-all"};/**
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
 */const xu=new Map,t3=new Map,Tp=new Map;function M_(t,e){try{t.container.addComponent(e)}catch(n){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hs(t){const e=t.name;if(Tp.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;Tp.set(e,t);for(const n of xu.values())M_(n,t);for(const n of t3.values())M_(n,t);return!0}function yg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function sn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const n3={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Br=new gl("app","Firebase",n3);/**
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
 */class r3{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ji("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Br.create("app-deleted",{appName:this._name})}}/**
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
 */const lo=Z4;function xI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ep,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Br.create("bad-app-name",{appName:String(i)});if(n||(n=yI()),!n)throw Br.create("no-options");const s=xu.get(i);if(s){if(Mi(n,s.options)&&Mi(r,s.config))return s;throw Br.create("duplicate-app",{appName:i})}const o=new c4(i);for(const l of Tp.values())o.addComponent(l);const a=new r3(n,r,o);return xu.set(i,a),a}function II(t=Ep){const e=xu.get(t);if(!e&&t===Ep&&yI())return xI();if(!e)throw Br.create("no-app",{appName:t});return e}function zr(t,e,n){let r=e3[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(o.join(" "));return}Hs(new ji(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const i3="firebase-heartbeat-database",s3=1,qa="firebase-heartbeat-store";let Yd=null;function SI(){return Yd||(Yd=T4(i3,s3,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(qa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Br.create("idb-open",{originalErrorMessage:t.message})})),Yd}async function o3(t){try{const n=(await SI()).transaction(qa),r=await n.objectStore(qa).get(CI(t));return await n.done,r}catch(e){if(e instanceof or)Zn.warn(e.message);else{const n=Br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zn.warn(n.message)}}}async function j_(t,e){try{const r=(await SI()).transaction(qa,"readwrite");await r.objectStore(qa).put(e,CI(t)),await r.done}catch(n){if(n instanceof or)Zn.warn(n.message);else{const r=Br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zn.warn(r.message)}}}function CI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const a3=1024,l3=30;class c3{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new h3(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=F_();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>l3){const o=d3(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=F_(),{heartbeatsToSend:r,unsentEntries:i}=u3(this._heartbeatsCache.heartbeats),s=Tu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Zn.warn(n),""}}}function F_(){return new Date().toISOString().substring(0,10)}function u3(t,e=a3){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),U_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),U_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class h3{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return XL()?JL().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await o3(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return j_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return j_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function U_(t){return Tu(JSON.stringify({version:2,heartbeats:t})).length}function d3(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function f3(t){Hs(new ji("platform-logger",e=>new S4(e),"PRIVATE")),Hs(new ji("heartbeat",e=>new c3(e),"PRIVATE")),zr(wp,O_,t),zr(wp,O_,"esm2020"),zr("fire-js","")}f3("");var B_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $r,AI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,w){function C(){}C.prototype=w.prototype,x.F=w.prototype,x.prototype=new C,x.prototype.constructor=x,x.D=function(P,R,D){for(var k=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)k[ae-2]=arguments[ae];return w.prototype[R].apply(P,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(x,w,C){C||(C=0);const P=Array(16);if(typeof w=="string")for(var R=0;R<16;++R)P[R]=w.charCodeAt(C++)|w.charCodeAt(C++)<<8|w.charCodeAt(C++)<<16|w.charCodeAt(C++)<<24;else for(R=0;R<16;++R)P[R]=w[C++]|w[C++]<<8|w[C++]<<16|w[C++]<<24;w=x.g[0],C=x.g[1],R=x.g[2];let D=x.g[3],k;k=w+(D^C&(R^D))+P[0]+3614090360&4294967295,w=C+(k<<7&4294967295|k>>>25),k=D+(R^w&(C^R))+P[1]+3905402710&4294967295,D=w+(k<<12&4294967295|k>>>20),k=R+(C^D&(w^C))+P[2]+606105819&4294967295,R=D+(k<<17&4294967295|k>>>15),k=C+(w^R&(D^w))+P[3]+3250441966&4294967295,C=R+(k<<22&4294967295|k>>>10),k=w+(D^C&(R^D))+P[4]+4118548399&4294967295,w=C+(k<<7&4294967295|k>>>25),k=D+(R^w&(C^R))+P[5]+1200080426&4294967295,D=w+(k<<12&4294967295|k>>>20),k=R+(C^D&(w^C))+P[6]+2821735955&4294967295,R=D+(k<<17&4294967295|k>>>15),k=C+(w^R&(D^w))+P[7]+4249261313&4294967295,C=R+(k<<22&4294967295|k>>>10),k=w+(D^C&(R^D))+P[8]+1770035416&4294967295,w=C+(k<<7&4294967295|k>>>25),k=D+(R^w&(C^R))+P[9]+2336552879&4294967295,D=w+(k<<12&4294967295|k>>>20),k=R+(C^D&(w^C))+P[10]+4294925233&4294967295,R=D+(k<<17&4294967295|k>>>15),k=C+(w^R&(D^w))+P[11]+2304563134&4294967295,C=R+(k<<22&4294967295|k>>>10),k=w+(D^C&(R^D))+P[12]+1804603682&4294967295,w=C+(k<<7&4294967295|k>>>25),k=D+(R^w&(C^R))+P[13]+4254626195&4294967295,D=w+(k<<12&4294967295|k>>>20),k=R+(C^D&(w^C))+P[14]+2792965006&4294967295,R=D+(k<<17&4294967295|k>>>15),k=C+(w^R&(D^w))+P[15]+1236535329&4294967295,C=R+(k<<22&4294967295|k>>>10),k=w+(R^D&(C^R))+P[1]+4129170786&4294967295,w=C+(k<<5&4294967295|k>>>27),k=D+(C^R&(w^C))+P[6]+3225465664&4294967295,D=w+(k<<9&4294967295|k>>>23),k=R+(w^C&(D^w))+P[11]+643717713&4294967295,R=D+(k<<14&4294967295|k>>>18),k=C+(D^w&(R^D))+P[0]+3921069994&4294967295,C=R+(k<<20&4294967295|k>>>12),k=w+(R^D&(C^R))+P[5]+3593408605&4294967295,w=C+(k<<5&4294967295|k>>>27),k=D+(C^R&(w^C))+P[10]+38016083&4294967295,D=w+(k<<9&4294967295|k>>>23),k=R+(w^C&(D^w))+P[15]+3634488961&4294967295,R=D+(k<<14&4294967295|k>>>18),k=C+(D^w&(R^D))+P[4]+3889429448&4294967295,C=R+(k<<20&4294967295|k>>>12),k=w+(R^D&(C^R))+P[9]+568446438&4294967295,w=C+(k<<5&4294967295|k>>>27),k=D+(C^R&(w^C))+P[14]+3275163606&4294967295,D=w+(k<<9&4294967295|k>>>23),k=R+(w^C&(D^w))+P[3]+4107603335&4294967295,R=D+(k<<14&4294967295|k>>>18),k=C+(D^w&(R^D))+P[8]+1163531501&4294967295,C=R+(k<<20&4294967295|k>>>12),k=w+(R^D&(C^R))+P[13]+2850285829&4294967295,w=C+(k<<5&4294967295|k>>>27),k=D+(C^R&(w^C))+P[2]+4243563512&4294967295,D=w+(k<<9&4294967295|k>>>23),k=R+(w^C&(D^w))+P[7]+1735328473&4294967295,R=D+(k<<14&4294967295|k>>>18),k=C+(D^w&(R^D))+P[12]+2368359562&4294967295,C=R+(k<<20&4294967295|k>>>12),k=w+(C^R^D)+P[5]+4294588738&4294967295,w=C+(k<<4&4294967295|k>>>28),k=D+(w^C^R)+P[8]+2272392833&4294967295,D=w+(k<<11&4294967295|k>>>21),k=R+(D^w^C)+P[11]+1839030562&4294967295,R=D+(k<<16&4294967295|k>>>16),k=C+(R^D^w)+P[14]+4259657740&4294967295,C=R+(k<<23&4294967295|k>>>9),k=w+(C^R^D)+P[1]+2763975236&4294967295,w=C+(k<<4&4294967295|k>>>28),k=D+(w^C^R)+P[4]+1272893353&4294967295,D=w+(k<<11&4294967295|k>>>21),k=R+(D^w^C)+P[7]+4139469664&4294967295,R=D+(k<<16&4294967295|k>>>16),k=C+(R^D^w)+P[10]+3200236656&4294967295,C=R+(k<<23&4294967295|k>>>9),k=w+(C^R^D)+P[13]+681279174&4294967295,w=C+(k<<4&4294967295|k>>>28),k=D+(w^C^R)+P[0]+3936430074&4294967295,D=w+(k<<11&4294967295|k>>>21),k=R+(D^w^C)+P[3]+3572445317&4294967295,R=D+(k<<16&4294967295|k>>>16),k=C+(R^D^w)+P[6]+76029189&4294967295,C=R+(k<<23&4294967295|k>>>9),k=w+(C^R^D)+P[9]+3654602809&4294967295,w=C+(k<<4&4294967295|k>>>28),k=D+(w^C^R)+P[12]+3873151461&4294967295,D=w+(k<<11&4294967295|k>>>21),k=R+(D^w^C)+P[15]+530742520&4294967295,R=D+(k<<16&4294967295|k>>>16),k=C+(R^D^w)+P[2]+3299628645&4294967295,C=R+(k<<23&4294967295|k>>>9),k=w+(R^(C|~D))+P[0]+4096336452&4294967295,w=C+(k<<6&4294967295|k>>>26),k=D+(C^(w|~R))+P[7]+1126891415&4294967295,D=w+(k<<10&4294967295|k>>>22),k=R+(w^(D|~C))+P[14]+2878612391&4294967295,R=D+(k<<15&4294967295|k>>>17),k=C+(D^(R|~w))+P[5]+4237533241&4294967295,C=R+(k<<21&4294967295|k>>>11),k=w+(R^(C|~D))+P[12]+1700485571&4294967295,w=C+(k<<6&4294967295|k>>>26),k=D+(C^(w|~R))+P[3]+2399980690&4294967295,D=w+(k<<10&4294967295|k>>>22),k=R+(w^(D|~C))+P[10]+4293915773&4294967295,R=D+(k<<15&4294967295|k>>>17),k=C+(D^(R|~w))+P[1]+2240044497&4294967295,C=R+(k<<21&4294967295|k>>>11),k=w+(R^(C|~D))+P[8]+1873313359&4294967295,w=C+(k<<6&4294967295|k>>>26),k=D+(C^(w|~R))+P[15]+4264355552&4294967295,D=w+(k<<10&4294967295|k>>>22),k=R+(w^(D|~C))+P[6]+2734768916&4294967295,R=D+(k<<15&4294967295|k>>>17),k=C+(D^(R|~w))+P[13]+1309151649&4294967295,C=R+(k<<21&4294967295|k>>>11),k=w+(R^(C|~D))+P[4]+4149444226&4294967295,w=C+(k<<6&4294967295|k>>>26),k=D+(C^(w|~R))+P[11]+3174756917&4294967295,D=w+(k<<10&4294967295|k>>>22),k=R+(w^(D|~C))+P[2]+718787259&4294967295,R=D+(k<<15&4294967295|k>>>17),k=C+(D^(R|~w))+P[9]+3951481745&4294967295,x.g[0]=x.g[0]+w&4294967295,x.g[1]=x.g[1]+(R+(k<<21&4294967295|k>>>11))&4294967295,x.g[2]=x.g[2]+R&4294967295,x.g[3]=x.g[3]+D&4294967295}r.prototype.v=function(x,w){w===void 0&&(w=x.length);const C=w-this.blockSize,P=this.C;let R=this.h,D=0;for(;D<w;){if(R==0)for(;D<=C;)i(this,x,D),D+=this.blockSize;if(typeof x=="string"){for(;D<w;)if(P[R++]=x.charCodeAt(D++),R==this.blockSize){i(this,P),R=0;break}}else for(;D<w;)if(P[R++]=x[D++],R==this.blockSize){i(this,P),R=0;break}}this.h=R,this.o+=w},r.prototype.A=function(){var x=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);x[0]=128;for(var w=1;w<x.length-8;++w)x[w]=0;w=this.o*8;for(var C=x.length-8;C<x.length;++C)x[C]=w&255,w/=256;for(this.v(x),x=Array(16),w=0,C=0;C<4;++C)for(let P=0;P<32;P+=8)x[w++]=this.g[C]>>>P&255;return x};function s(x,w){var C=a;return Object.prototype.hasOwnProperty.call(C,x)?C[x]:C[x]=w(x)}function o(x,w){this.h=w;const C=[];let P=!0;for(let R=x.length-1;R>=0;R--){const D=x[R]|0;P&&D==w||(C[R]=D,P=!1)}this.g=C}var a={};function l(x){return-128<=x&&x<128?s(x,function(w){return new o([w|0],w<0?-1:0)}):new o([x|0],x<0?-1:0)}function u(x){if(isNaN(x)||!isFinite(x))return d;if(x<0)return A(u(-x));const w=[];let C=1;for(let P=0;x>=C;P++)w[P]=x/C|0,C*=4294967296;return new o(w,0)}function h(x,w){if(x.length==0)throw Error("number format error: empty string");if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(x.charAt(0)=="-")return A(h(x.substring(1),w));if(x.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=u(Math.pow(w,8));let P=d;for(let D=0;D<x.length;D+=8){var R=Math.min(8,x.length-D);const k=parseInt(x.substring(D,D+R),w);R<8?(R=u(Math.pow(w,R)),P=P.j(R).add(u(k))):(P=P.j(C),P=P.add(u(k)))}return P}var d=l(0),p=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(S(this))return-A(this).m();let x=0,w=1;for(let C=0;C<this.g.length;C++){const P=this.i(C);x+=(P>=0?P:4294967296+P)*w,w*=4294967296}return x},t.toString=function(x){if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(I(this))return"0";if(S(this))return"-"+A(this).toString(x);const w=u(Math.pow(x,6));var C=this;let P="";for(;;){const R=b(C,w).g;C=E(C,R.j(w));let D=((C.g.length>0?C.g[0]:C.h)>>>0).toString(x);if(C=R,I(C))return D+P;for(;D.length<6;)D="0"+D;P=D+P}},t.i=function(x){return x<0?0:x<this.g.length?this.g[x]:this.h};function I(x){if(x.h!=0)return!1;for(let w=0;w<x.g.length;w++)if(x.g[w]!=0)return!1;return!0}function S(x){return x.h==-1}t.l=function(x){return x=E(this,x),S(x)?-1:I(x)?0:1};function A(x){const w=x.g.length,C=[];for(let P=0;P<w;P++)C[P]=~x.g[P];return new o(C,~x.h).add(p)}t.abs=function(){return S(this)?A(this):this},t.add=function(x){const w=Math.max(this.g.length,x.g.length),C=[];let P=0;for(let R=0;R<=w;R++){let D=P+(this.i(R)&65535)+(x.i(R)&65535),k=(D>>>16)+(this.i(R)>>>16)+(x.i(R)>>>16);P=k>>>16,D&=65535,k&=65535,C[R]=k<<16|D}return new o(C,C[C.length-1]&-2147483648?-1:0)};function E(x,w){return x.add(A(w))}t.j=function(x){if(I(this)||I(x))return d;if(S(this))return S(x)?A(this).j(A(x)):A(A(this).j(x));if(S(x))return A(this.j(A(x)));if(this.l(y)<0&&x.l(y)<0)return u(this.m()*x.m());const w=this.g.length+x.g.length,C=[];for(var P=0;P<2*w;P++)C[P]=0;for(P=0;P<this.g.length;P++)for(let R=0;R<x.g.length;R++){const D=this.i(P)>>>16,k=this.i(P)&65535,ae=x.i(R)>>>16,Oe=x.i(R)&65535;C[2*P+2*R]+=k*Oe,_(C,2*P+2*R),C[2*P+2*R+1]+=D*Oe,_(C,2*P+2*R+1),C[2*P+2*R+1]+=k*ae,_(C,2*P+2*R+1),C[2*P+2*R+2]+=D*ae,_(C,2*P+2*R+2)}for(x=0;x<w;x++)C[x]=C[2*x+1]<<16|C[2*x];for(x=w;x<2*w;x++)C[x]=0;return new o(C,0)};function _(x,w){for(;(x[w]&65535)!=x[w];)x[w+1]+=x[w]>>>16,x[w]&=65535,w++}function v(x,w){this.g=x,this.h=w}function b(x,w){if(I(w))throw Error("division by zero");if(I(x))return new v(d,d);if(S(x))return w=b(A(x),w),new v(A(w.g),A(w.h));if(S(w))return w=b(x,A(w)),new v(A(w.g),w.h);if(x.g.length>30){if(S(x)||S(w))throw Error("slowDivide_ only works with positive integers.");for(var C=p,P=w;P.l(x)<=0;)C=L(C),P=L(P);var R=M(C,1),D=M(P,1);for(P=M(P,2),C=M(C,2);!I(P);){var k=D.add(P);k.l(x)<=0&&(R=R.add(C),D=k),P=M(P,1),C=M(C,1)}return w=E(x,R.j(w)),new v(R,w)}for(R=d;x.l(w)>=0;){for(C=Math.max(1,Math.floor(x.m()/w.m())),P=Math.ceil(Math.log(C)/Math.LN2),P=P<=48?1:Math.pow(2,P-48),D=u(C),k=D.j(w);S(k)||k.l(x)>0;)C-=P,D=u(C),k=D.j(w);I(D)&&(D=p),R=R.add(D),x=E(x,k)}return new v(R,x)}t.B=function(x){return b(this,x).h},t.and=function(x){const w=Math.max(this.g.length,x.g.length),C=[];for(let P=0;P<w;P++)C[P]=this.i(P)&x.i(P);return new o(C,this.h&x.h)},t.or=function(x){const w=Math.max(this.g.length,x.g.length),C=[];for(let P=0;P<w;P++)C[P]=this.i(P)|x.i(P);return new o(C,this.h|x.h)},t.xor=function(x){const w=Math.max(this.g.length,x.g.length),C=[];for(let P=0;P<w;P++)C[P]=this.i(P)^x.i(P);return new o(C,this.h^x.h)};function L(x){const w=x.g.length+1,C=[];for(let P=0;P<w;P++)C[P]=x.i(P)<<1|x.i(P-1)>>>31;return new o(C,x.h)}function M(x,w){const C=w>>5;w%=32;const P=x.g.length-C,R=[];for(let D=0;D<P;D++)R[D]=w>0?x.i(D+C)>>>w|x.i(D+C+1)<<32-w:x.i(D+C);return new o(R,x.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,AI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,$r=o}).apply(typeof B_<"u"?B_:typeof self<"u"?self:typeof window<"u"?window:{});var cc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var PI,ta,kI,Nc,xp,bI,RI,NI;(function(){var t,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof cc=="object"&&cc];for(var f=0;f<c.length;++f){var g=c[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function i(c,f){if(f)e:{var g=r;c=c.split(".");for(var T=0;T<c.length-1;T++){var V=c[T];if(!(V in g))break e;g=g[V]}c=c[c.length-1],T=g[c],f=f(T),f!=T&&f!=null&&e(g,c,{configurable:!0,writable:!0,value:f})}}i("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(c){return c||function(f){var g=[],T;for(T in f)Object.prototype.hasOwnProperty.call(f,T)&&g.push([T,f[T]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function a(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function l(c,f,g){return c.call.apply(c.bind,arguments)}function u(c,f,g){return u=l,u.apply(null,arguments)}function h(c,f){var g=Array.prototype.slice.call(arguments,1);return function(){var T=g.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function d(c,f){function g(){}g.prototype=f.prototype,c.Z=f.prototype,c.prototype=new g,c.prototype.constructor=c,c.Ob=function(T,V,O){for(var B=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)B[ne-2]=arguments[ne];return f.prototype[V].apply(T,B)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function y(c){const f=c.length;if(f>0){const g=Array(f);for(let T=0;T<f;T++)g[T]=c[T];return g}return[]}function I(c,f){for(let T=1;T<arguments.length;T++){const V=arguments[T];var g=typeof V;if(g=g!="object"?g:V?Array.isArray(V)?"array":g:"null",g=="array"||g=="object"&&typeof V.length=="number"){g=c.length||0;const O=V.length||0;c.length=g+O;for(let B=0;B<O;B++)c[g+B]=V[B]}else c.push(V)}}class S{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function A(c){o.setTimeout(()=>{throw c},0)}function E(){var c=x;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class _{constructor(){this.h=this.g=null}add(f,g){const T=v.get();T.set(f,g),this.h?this.h.next=T:this.g=T,this.h=T}}var v=new S(()=>new b,c=>c.reset());class b{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let L,M=!1,x=new _,w=()=>{const c=Promise.resolve(void 0);L=()=>{c.then(C)}};function C(){for(var c;c=E();){try{c.h.call(c.g)}catch(g){A(g)}var f=v;f.j(c),f.h<100&&(f.h++,c.next=f.g,f.g=c)}M=!1}function P(){this.u=this.u,this.C=this.C}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var D=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const g=()=>{};o.addEventListener("test",g,f),o.removeEventListener("test",g,f)}catch{}return c}();function k(c){return/^[\s\xa0]*$/.test(c)}function ae(c,f){R.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,f)}d(ae,R),ae.prototype.init=function(c,f){const g=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget,f||(g=="mouseover"?f=c.fromElement:g=="mouseout"&&(f=c.toElement)),this.relatedTarget=f,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&ae.Z.h.call(this)},ae.prototype.h=function(){ae.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Oe="closure_listenable_"+(Math.random()*1e6|0),me=0;function Ge(c,f,g,T,V){this.listener=c,this.proxy=null,this.src=f,this.type=g,this.capture=!!T,this.ha=V,this.key=++me,this.da=this.fa=!1}function z(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function K(c,f,g){for(const T in c)f.call(g,c[T],T,c)}function te(c,f){for(const g in c)f.call(void 0,c[g],g,c)}function J(c){const f={};for(const g in c)f[g]=c[g];return f}const fe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pn(c,f){let g,T;for(let V=1;V<arguments.length;V++){T=arguments[V];for(g in T)c[g]=T[g];for(let O=0;O<fe.length;O++)g=fe[O],Object.prototype.hasOwnProperty.call(T,g)&&(c[g]=T[g])}}function gt(c){this.src=c,this.g={},this.h=0}gt.prototype.add=function(c,f,g,T,V){const O=c.toString();c=this.g[O],c||(c=this.g[O]=[],this.h++);const B=Ze(c,f,T,V);return B>-1?(f=c[B],g||(f.fa=!1)):(f=new Ge(f,this.src,O,!!T,V),f.fa=g,c.push(f)),f};function mn(c,f){const g=f.type;if(g in c.g){var T=c.g[g],V=Array.prototype.indexOf.call(T,f,void 0),O;(O=V>=0)&&Array.prototype.splice.call(T,V,1),O&&(z(f),c.g[g].length==0&&(delete c.g[g],c.h--))}}function Ze(c,f,g,T){for(let V=0;V<c.length;++V){const O=c[V];if(!O.da&&O.listener==f&&O.capture==!!g&&O.ha==T)return V}return-1}var Zt="closure_lm_"+(Math.random()*1e6|0),vo={};function Xi(c,f,g,T,V){if(T&&T.once)return jh(c,f,g,T,V);if(Array.isArray(f)){for(let O=0;O<f.length;O++)Xi(c,f[O],g,T,V);return null}return g=zh(g),c&&c[Oe]?c.J(f,g,a(T)?!!T.capture:!!T,V):ui(c,f,g,!1,T,V)}function ui(c,f,g,T,V,O){if(!f)throw Error("Invalid event type");const B=a(V)?!!V.capture:!!V;let ne=Uh(c);if(ne||(c[Zt]=ne=new gt(c)),g=ne.add(f,g,T,B,O),g.proxy)return g;if(T=Nn(),g.proxy=T,T.src=c,T.listener=g,c.addEventListener)D||(V=B),V===void 0&&(V=!1),c.addEventListener(f.toString(),T,V);else if(c.attachEvent)c.attachEvent(py(f.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Nn(){function c(g){return f.call(c.src,c.listener,g)}const f=qC;return c}function jh(c,f,g,T,V){if(Array.isArray(f)){for(let O=0;O<f.length;O++)jh(c,f[O],g,T,V);return null}return g=zh(g),c&&c[Oe]?c.K(f,g,a(T)?!!T.capture:!!T,V):ui(c,f,g,!0,T,V)}function fy(c,f,g,T,V){if(Array.isArray(f))for(var O=0;O<f.length;O++)fy(c,f[O],g,T,V);else T=a(T)?!!T.capture:!!T,g=zh(g),c&&c[Oe]?(c=c.i,O=String(f).toString(),O in c.g&&(f=c.g[O],g=Ze(f,g,T,V),g>-1&&(z(f[g]),Array.prototype.splice.call(f,g,1),f.length==0&&(delete c.g[O],c.h--)))):c&&(c=Uh(c))&&(f=c.g[f.toString()],c=-1,f&&(c=Ze(f,g,T,V)),(g=c>-1?f[c]:null)&&Fh(g))}function Fh(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[Oe])mn(f.i,c);else{var g=c.type,T=c.proxy;f.removeEventListener?f.removeEventListener(g,T,c.capture):f.detachEvent?f.detachEvent(py(g),T):f.addListener&&f.removeListener&&f.removeListener(T),(g=Uh(f))?(mn(g,c),g.h==0&&(g.src=null,f[Zt]=null)):z(c)}}}function py(c){return c in vo?vo[c]:vo[c]="on"+c}function qC(c,f){if(c.da)c=!0;else{f=new ae(f,this);const g=c.listener,T=c.ha||c.src;c.fa&&Fh(c),c=g.call(T,f)}return c}function Uh(c){return c=c[Zt],c instanceof gt?c:null}var Bh="__closure_events_fn_"+(Math.random()*1e9>>>0);function zh(c){return typeof c=="function"?c:(c[Bh]||(c[Bh]=function(f){return c.handleEvent(f)}),c[Bh])}function ot(){P.call(this),this.i=new gt(this),this.M=this,this.G=null}d(ot,P),ot.prototype[Oe]=!0,ot.prototype.removeEventListener=function(c,f,g,T){fy(this,c,f,g,T)};function yt(c,f){var g,T=c.G;if(T)for(g=[];T;T=T.G)g.push(T);if(c=c.M,T=f.type||f,typeof f=="string")f=new R(f,c);else if(f instanceof R)f.target=f.target||c;else{var V=f;f=new R(T,c),pn(f,V)}V=!0;let O,B;if(g)for(B=g.length-1;B>=0;B--)O=f.g=g[B],V=kl(O,T,!0,f)&&V;if(O=f.g=c,V=kl(O,T,!0,f)&&V,V=kl(O,T,!1,f)&&V,g)for(B=0;B<g.length;B++)O=f.g=g[B],V=kl(O,T,!1,f)&&V}ot.prototype.N=function(){if(ot.Z.N.call(this),this.i){var c=this.i;for(const f in c.g){const g=c.g[f];for(let T=0;T<g.length;T++)z(g[T]);delete c.g[f],c.h--}}this.G=null},ot.prototype.J=function(c,f,g,T){return this.i.add(String(c),f,!1,g,T)},ot.prototype.K=function(c,f,g,T){return this.i.add(String(c),f,!0,g,T)};function kl(c,f,g,T){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();let V=!0;for(let O=0;O<f.length;++O){const B=f[O];if(B&&!B.da&&B.capture==g){const ne=B.listener,$e=B.ha||B.src;B.fa&&mn(c.i,B),V=ne.call($e,T)!==!1&&V}}return V&&!T.defaultPrevented}function GC(c,f){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(c,f||0)}function my(c){c.g=GC(()=>{c.g=null,c.i&&(c.i=!1,my(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class KC extends P{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:my(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _o(c){P.call(this),this.h=c,this.g={}}d(_o,P);var gy=[];function yy(c){K(c.g,function(f,g){this.g.hasOwnProperty(g)&&Fh(f)},c),c.g={}}_o.prototype.N=function(){_o.Z.N.call(this),yy(this)},_o.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $h=o.JSON.stringify,QC=o.JSON.parse,YC=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function vy(){}function _y(){}var wo={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Wh(){R.call(this,"d")}d(Wh,R);function Hh(){R.call(this,"c")}d(Hh,R);var hi={},wy=null;function bl(){return wy=wy||new ot}hi.Ia="serverreachability";function Ey(c){R.call(this,hi.Ia,c)}d(Ey,R);function Eo(c){const f=bl();yt(f,new Ey(f))}hi.STAT_EVENT="statevent";function Ty(c,f){R.call(this,hi.STAT_EVENT,c),this.stat=f}d(Ty,R);function vt(c){const f=bl();yt(f,new Ty(f,c))}hi.Ja="timingevent";function xy(c,f){R.call(this,hi.Ja,c),this.size=f}d(xy,R);function To(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},f)}function xo(){this.g=!0}xo.prototype.ua=function(){this.g=!1};function XC(c,f,g,T,V,O){c.info(function(){if(c.g)if(O){var B="",ne=O.split("&");for(let pe=0;pe<ne.length;pe++){var $e=ne[pe].split("=");if($e.length>1){const Ke=$e[0];$e=$e[1];const yn=Ke.split("_");B=yn.length>=2&&yn[1]=="type"?B+(Ke+"="+$e+"&"):B+(Ke+"=redacted&")}}}else B=null;else B=O;return"XMLHTTP REQ ("+T+") [attempt "+V+"]: "+f+`
`+g+`
`+B})}function JC(c,f,g,T,V,O,B){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+V+"]: "+f+`
`+g+`
`+O+" "+B})}function Ji(c,f,g,T){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+eA(c,g)+(T?" "+T:"")})}function ZC(c,f){c.info(function(){return"TIMEOUT: "+f})}xo.prototype.info=function(){};function eA(c,f){if(!c.g)return f;if(!f)return null;try{const O=JSON.parse(f);if(O){for(c=0;c<O.length;c++)if(Array.isArray(O[c])){var g=O[c];if(!(g.length<2)){var T=g[1];if(Array.isArray(T)&&!(T.length<1)){var V=T[0];if(V!="noop"&&V!="stop"&&V!="close")for(let B=1;B<T.length;B++)T[B]=""}}}}return $h(O)}catch{return f}}var Rl={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Iy={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Sy;function qh(){}d(qh,vy),qh.prototype.g=function(){return new XMLHttpRequest},Sy=new qh;function Io(c){return encodeURIComponent(String(c))}function tA(c){var f=1;c=c.split(":");const g=[];for(;f>0&&c.length;)g.push(c.shift()),f--;return c.length&&g.push(c.join(":")),g}function ar(c,f,g,T){this.j=c,this.i=f,this.l=g,this.S=T||1,this.V=new _o(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Cy}function Cy(){this.i=null,this.g="",this.h=!1}var Ay={},Gh={};function Kh(c,f,g){c.M=1,c.A=Dl(gn(f)),c.u=g,c.R=!0,Py(c,null)}function Py(c,f){c.F=Date.now(),Nl(c),c.B=gn(c.A);var g=c.B,T=c.S;Array.isArray(T)||(T=[String(T)]),By(g.i,"t",T),c.C=0,g=c.j.L,c.h=new Cy,c.g=s0(c.j,g?f:null,!c.u),c.P>0&&(c.O=new KC(u(c.Y,c,c.g),c.P)),f=c.V,g=c.g,T=c.ba;var V="readystatechange";Array.isArray(V)||(V&&(gy[0]=V.toString()),V=gy);for(let O=0;O<V.length;O++){const B=Xi(g,V[O],T||f.handleEvent,!1,f.h||f);if(!B)break;f.g[B.key]=B}f=c.J?J(c.J):{},c.u?(c.v||(c.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,f)):(c.v="GET",c.g.ea(c.B,c.v,null,f)),Eo(),XC(c.i,c.v,c.B,c.l,c.S,c.u)}ar.prototype.ba=function(c){c=c.target;const f=this.O;f&&ur(c)==3?f.j():this.Y(c)},ar.prototype.Y=function(c){try{if(c==this.g)e:{const ne=ur(this.g),$e=this.g.ya(),pe=this.g.ca();if(!(ne<3)&&(ne!=3||this.g&&(this.h.h||this.g.la()||Ky(this.g)))){this.K||ne!=4||$e==7||($e==8||pe<=0?Eo(3):Eo(2)),Qh(this);var f=this.g.ca();this.X=f;var g=nA(this);if(this.o=f==200,JC(this.i,this.v,this.B,this.l,this.S,ne,f),this.o){if(this.U&&!this.L){t:{if(this.g){var T,V=this.g;if((T=V.g?V.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(T)){var O=T;break t}}O=null}if(c=O)Ji(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Yh(this,c);else{this.o=!1,this.m=3,vt(12),di(this),So(this);break e}}if(this.R){c=!0;let Ke;for(;!this.K&&this.C<g.length;)if(Ke=rA(this,g),Ke==Gh){ne==4&&(this.m=4,vt(14),c=!1),Ji(this.i,this.l,null,"[Incomplete Response]");break}else if(Ke==Ay){this.m=4,vt(15),Ji(this.i,this.l,g,"[Invalid Chunk]"),c=!1;break}else Ji(this.i,this.l,Ke,null),Yh(this,Ke);if(ky(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ne!=4||g.length!=0||this.h.h||(this.m=1,vt(16),c=!1),this.o=this.o&&c,!c)Ji(this.i,this.l,g,"[Invalid Chunked Response]"),di(this),So(this);else if(g.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),id(B),B.P=!0,vt(11))}}else Ji(this.i,this.l,g,null),Yh(this,g);ne==4&&di(this),this.o&&!this.K&&(ne==4?t0(this.j,this):(this.o=!1,Nl(this)))}else yA(this.g),f==400&&g.indexOf("Unknown SID")>0?(this.m=3,vt(12)):(this.m=0,vt(13)),di(this),So(this)}}}catch{}finally{}};function nA(c){if(!ky(c))return c.g.la();const f=Ky(c.g);if(f==="")return"";let g="";const T=f.length,V=ur(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return di(c),So(c),"";c.h.i=new o.TextDecoder}for(let O=0;O<T;O++)c.h.h=!0,g+=c.h.i.decode(f[O],{stream:!(V&&O==T-1)});return f.length=0,c.h.g+=g,c.C=0,c.h.g}function ky(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function rA(c,f){var g=c.C,T=f.indexOf(`
`,g);return T==-1?Gh:(g=Number(f.substring(g,T)),isNaN(g)?Ay:(T+=1,T+g>f.length?Gh:(f=f.slice(T,T+g),c.C=T+g,f)))}ar.prototype.cancel=function(){this.K=!0,di(this)};function Nl(c){c.T=Date.now()+c.H,by(c,c.H)}function by(c,f){if(c.D!=null)throw Error("WatchDog timer not null");c.D=To(u(c.aa,c),f)}function Qh(c){c.D&&(o.clearTimeout(c.D),c.D=null)}ar.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(ZC(this.i,this.B),this.M!=2&&(Eo(),vt(17)),di(this),this.m=2,So(this)):by(this,this.T-c)};function So(c){c.j.I==0||c.K||t0(c.j,c)}function di(c){Qh(c);var f=c.O;f&&typeof f.dispose=="function"&&f.dispose(),c.O=null,yy(c.V),c.g&&(f=c.g,c.g=null,f.abort(),f.dispose())}function Yh(c,f){try{var g=c.j;if(g.I!=0&&(g.g==c||Xh(g.h,c))){if(!c.L&&Xh(g.h,c)&&g.I==3){try{var T=g.Ba.g.parse(f)}catch{T=null}if(Array.isArray(T)&&T.length==3){var V=T;if(V[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<c.F)jl(g),Ol(g);else break e;rd(g),vt(18)}}else g.xa=V[1],0<g.xa-g.K&&V[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=To(u(g.Va,g),6e3));Dy(g.h)<=1&&g.ta&&(g.ta=void 0)}else pi(g,11)}else if((c.L||g.g==c)&&jl(g),!k(f))for(V=g.Ba.g.parse(f),f=0;f<V.length;f++){let pe=V[f];const Ke=pe[0];if(!(Ke<=g.K))if(g.K=Ke,pe=pe[1],g.I==2)if(pe[0]=="c"){g.M=pe[1],g.ba=pe[2];const yn=pe[3];yn!=null&&(g.ka=yn,g.j.info("VER="+g.ka));const mi=pe[4];mi!=null&&(g.za=mi,g.j.info("SVER="+g.za));const hr=pe[5];hr!=null&&typeof hr=="number"&&hr>0&&(T=1.5*hr,g.O=T,g.j.info("backChannelRequestTimeoutMs_="+T)),T=g;const dr=c.g;if(dr){const Ul=dr.g?dr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ul){var O=T.h;O.g||Ul.indexOf("spdy")==-1&&Ul.indexOf("quic")==-1&&Ul.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Jh(O,O.h),O.h=null))}if(T.G){const sd=dr.g?dr.g.getResponseHeader("X-HTTP-Session-Id"):null;sd&&(T.wa=sd,ve(T.J,T.G,sd))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-c.F,g.j.info("Handshake RTT: "+g.T+"ms")),T=g;var B=c;if(T.na=i0(T,T.L?T.ba:null,T.W),B.L){Vy(T.h,B);var ne=B,$e=T.O;$e&&(ne.H=$e),ne.D&&(Qh(ne),Nl(ne)),T.g=B}else Zy(T);g.i.length>0&&Ml(g)}else pe[0]!="stop"&&pe[0]!="close"||pi(g,7);else g.I==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?pi(g,7):nd(g):pe[0]!="noop"&&g.l&&g.l.qa(pe),g.A=0)}}Eo(4)}catch{}}var iA=class{constructor(c,f){this.g=c,this.map=f}};function Ry(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ny(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Dy(c){return c.h?1:c.g?c.g.size:0}function Xh(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function Jh(c,f){c.g?c.g.add(f):c.h=f}function Vy(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}Ry.prototype.cancel=function(){if(this.i=Ly(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Ly(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const g of c.g.values())f=f.concat(g.G);return f}return y(c.i)}var Oy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sA(c,f){if(c){c=c.split("&");for(let g=0;g<c.length;g++){const T=c[g].indexOf("=");let V,O=null;T>=0?(V=c[g].substring(0,T),O=c[g].substring(T+1)):V=c[g],f(V,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function lr(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;c instanceof lr?(this.l=c.l,Co(this,c.j),this.o=c.o,this.g=c.g,Ao(this,c.u),this.h=c.h,Zh(this,zy(c.i)),this.m=c.m):c&&(f=String(c).match(Oy))?(this.l=!1,Co(this,f[1]||"",!0),this.o=Po(f[2]||""),this.g=Po(f[3]||"",!0),Ao(this,f[4]),this.h=Po(f[5]||"",!0),Zh(this,f[6]||"",!0),this.m=Po(f[7]||"")):(this.l=!1,this.i=new bo(null,this.l))}lr.prototype.toString=function(){const c=[];var f=this.j;f&&c.push(ko(f,My,!0),":");var g=this.g;return(g||f=="file")&&(c.push("//"),(f=this.o)&&c.push(ko(f,My,!0),"@"),c.push(Io(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&c.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&c.push("/"),c.push(ko(g,g.charAt(0)=="/"?lA:aA,!0))),(g=this.i.toString())&&c.push("?",g),(g=this.m)&&c.push("#",ko(g,uA)),c.join("")},lr.prototype.resolve=function(c){const f=gn(this);let g=!!c.j;g?Co(f,c.j):g=!!c.o,g?f.o=c.o:g=!!c.g,g?f.g=c.g:g=c.u!=null;var T=c.h;if(g)Ao(f,c.u);else if(g=!!c.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var V=f.h.lastIndexOf("/");V!=-1&&(T=f.h.slice(0,V+1)+T)}if(V=T,V==".."||V==".")T="";else if(V.indexOf("./")!=-1||V.indexOf("/.")!=-1){T=V.lastIndexOf("/",0)==0,V=V.split("/");const O=[];for(let B=0;B<V.length;){const ne=V[B++];ne=="."?T&&B==V.length&&O.push(""):ne==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),T&&B==V.length&&O.push("")):(O.push(ne),T=!0)}T=O.join("/")}else T=V}return g?f.h=T:g=c.i.toString()!=="",g?Zh(f,zy(c.i)):g=!!c.m,g&&(f.m=c.m),f};function gn(c){return new lr(c)}function Co(c,f,g){c.j=g?Po(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function Ao(c,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);c.u=f}else c.u=null}function Zh(c,f,g){f instanceof bo?(c.i=f,hA(c.i,c.l)):(g||(f=ko(f,cA)),c.i=new bo(f,c.l))}function ve(c,f,g){c.i.set(f,g)}function Dl(c){return ve(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Po(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ko(c,f,g){return typeof c=="string"?(c=encodeURI(c).replace(f,oA),g&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function oA(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var My=/[#\/\?@]/g,aA=/[#\?:]/g,lA=/[#\?]/g,cA=/[#\?@]/g,uA=/#/g;function bo(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function fi(c){c.g||(c.g=new Map,c.h=0,c.i&&sA(c.i,function(f,g){c.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}t=bo.prototype,t.add=function(c,f){fi(this),this.i=null,c=Zi(this,c);let g=this.g.get(c);return g||this.g.set(c,g=[]),g.push(f),this.h+=1,this};function jy(c,f){fi(c),f=Zi(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function Fy(c,f){return fi(c),f=Zi(c,f),c.g.has(f)}t.forEach=function(c,f){fi(this),this.g.forEach(function(g,T){g.forEach(function(V){c.call(f,V,T,this)},this)},this)};function Uy(c,f){fi(c);let g=[];if(typeof f=="string")Fy(c,f)&&(g=g.concat(c.g.get(Zi(c,f))));else for(c=Array.from(c.g.values()),f=0;f<c.length;f++)g=g.concat(c[f]);return g}t.set=function(c,f){return fi(this),this.i=null,c=Zi(this,c),Fy(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},t.get=function(c,f){return c?(c=Uy(this,c),c.length>0?String(c[0]):f):f};function By(c,f,g){jy(c,f),g.length>0&&(c.i=null,c.g.set(Zi(c,f),y(g)),c.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(let T=0;T<f.length;T++){var g=f[T];const V=Io(g);g=Uy(this,g);for(let O=0;O<g.length;O++){let B=V;g[O]!==""&&(B+="="+Io(g[O])),c.push(B)}}return this.i=c.join("&")};function zy(c){const f=new bo;return f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),f}function Zi(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function hA(c,f){f&&!c.j&&(fi(c),c.i=null,c.g.forEach(function(g,T){const V=T.toLowerCase();T!=V&&(jy(this,T),By(this,V,g))},c)),c.j=f}function dA(c,f){const g=new xo;if(o.Image){const T=new Image;T.onload=h(cr,g,"TestLoadImage: loaded",!0,f,T),T.onerror=h(cr,g,"TestLoadImage: error",!1,f,T),T.onabort=h(cr,g,"TestLoadImage: abort",!1,f,T),T.ontimeout=h(cr,g,"TestLoadImage: timeout",!1,f,T),o.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else f(!1)}function fA(c,f){const g=new xo,T=new AbortController,V=setTimeout(()=>{T.abort(),cr(g,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:T.signal}).then(O=>{clearTimeout(V),O.ok?cr(g,"TestPingServer: ok",!0,f):cr(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(V),cr(g,"TestPingServer: error",!1,f)})}function cr(c,f,g,T,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),T(g)}catch{}}function pA(){this.g=new YC}function ed(c){this.i=c.Sb||null,this.h=c.ab||!1}d(ed,vy),ed.prototype.g=function(){return new Vl(this.i,this.h)};function Vl(c,f){ot.call(this),this.H=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(Vl,ot),t=Vl.prototype,t.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=f,this.readyState=1,No(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(f.body=c),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ro(this)),this.readyState=0},t.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,No(this)),this.g&&(this.readyState=3,No(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;$y(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function $y(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}t.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?Ro(this):No(this),this.readyState==3&&$y(this)}},t.Oa=function(c){this.g&&(this.response=this.responseText=c,Ro(this))},t.Na=function(c){this.g&&(this.response=c,Ro(this))},t.ga=function(){this.g&&Ro(this)};function Ro(c){c.readyState=4,c.l=null,c.j=null,c.B=null,No(c)}t.setRequestHeader=function(c,f){this.A.append(c,f)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,c.push(g[0]+": "+g[1]),g=f.next();return c.join(`\r
`)};function No(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Vl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Wy(c){let f="";return K(c,function(g,T){f+=T,f+=":",f+=g,f+=`\r
`}),f}function td(c,f,g){e:{for(T in g){var T=!1;break e}T=!0}T||(g=Wy(g),typeof c=="string"?g!=null&&Io(g):ve(c,f,g))}function Re(c){ot.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(Re,ot);var mA=/^https?$/i,gA=["POST","PUT"];t=Re.prototype,t.Fa=function(c){this.H=c},t.ea=function(c,f,g,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Sy.g(),this.g.onreadystatechange=p(u(this.Ca,this));try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(O){Hy(this,O);return}if(c=g||"",g=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var V in T)g.set(V,T[V]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const O of T.keys())g.set(O,T.get(O));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(g.keys()).find(O=>O.toLowerCase()=="content-type"),V=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(gA,f,void 0)>=0)||T||V||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of g)this.g.setRequestHeader(O,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(O){Hy(this,O)}};function Hy(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.o=5,qy(c),Ll(c)}function qy(c){c.A||(c.A=!0,yt(c,"complete"),yt(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,yt(this,"complete"),yt(this,"abort"),Ll(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ll(this,!0)),Re.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Gy(this):this.Xa())},t.Xa=function(){Gy(this)};function Gy(c){if(c.h&&typeof s<"u"){if(c.v&&ur(c)==4)setTimeout(c.Ca.bind(c),0);else if(yt(c,"readystatechange"),ur(c)==4){c.h=!1;try{const O=c.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var T;if(T=O===0){let B=String(c.D).match(Oy)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),T=!mA.test(B?B.toLowerCase():"")}g=T}if(g)yt(c,"complete"),yt(c,"success");else{c.o=6;try{var V=ur(c)>2?c.g.statusText:""}catch{V=""}c.l=V+" ["+c.ca()+"]",qy(c)}}finally{Ll(c)}}}}function Ll(c,f){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const g=c.g;c.g=null,f||yt(c,"ready");try{g.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function ur(c){return c.g?c.g.readyState:0}t.ca=function(){try{return ur(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),QC(f)}};function Ky(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function yA(c){const f={};c=(c.g&&ur(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(k(c[T]))continue;var g=tA(c[T]);const V=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const O=f[V]||[];f[V]=O,O.push(g)}te(f,function(T){return T.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Do(c,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[c]||f}function Qy(c){this.za=0,this.i=[],this.j=new xo,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Do("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Do("baseRetryDelayMs",5e3,c),this.Za=Do("retryDelaySeedMs",1e4,c),this.Ta=Do("forwardChannelMaxRetries",2,c),this.va=Do("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Ry(c&&c.concurrentRequestLimit),this.Ba=new pA,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Qy.prototype,t.ka=8,t.I=1,t.connect=function(c,f,g,T){vt(0),this.W=c,this.H=f||{},g&&T!==void 0&&(this.H.OSID=g,this.H.OAID=T),this.F=this.X,this.J=i0(this,null,this.W),Ml(this)};function nd(c){if(Yy(c),c.I==3){var f=c.V++,g=gn(c.J);if(ve(g,"SID",c.M),ve(g,"RID",f),ve(g,"TYPE","terminate"),Vo(c,g),f=new ar(c,c.j,f),f.M=2,f.A=Dl(gn(g)),g=!1,o.navigator&&o.navigator.sendBeacon)try{g=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!g&&o.Image&&(new Image().src=f.A,g=!0),g||(f.g=s0(f.j,null),f.g.ea(f.A)),f.F=Date.now(),Nl(f)}r0(c)}function Ol(c){c.g&&(id(c),c.g.cancel(),c.g=null)}function Yy(c){Ol(c),c.v&&(o.clearTimeout(c.v),c.v=null),jl(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function Ml(c){if(!Ny(c.h)&&!c.m){c.m=!0;var f=c.Ea;L||w(),M||(L(),M=!0),x.add(f,c),c.D=0}}function vA(c,f){return Dy(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=f.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=To(u(c.Ea,c,f),n0(c,c.D)),c.D++,!0)}t.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const V=new ar(this,this.j,c);let O=this.o;if(this.U&&(O?(O=J(O),pn(O,this.U)):O=this.U),this.u!==null||this.R||(V.J=O,O=null),this.S)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var T=this.i[g];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(f+=T,f>4096){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Jy(this,V,f),g=gn(this.J),ve(g,"RID",c),ve(g,"CVER",22),this.G&&ve(g,"X-HTTP-Session-Id",this.G),Vo(this,g),O&&(this.R?f="headers="+Io(Wy(O))+"&"+f:this.u&&td(g,this.u,O)),Jh(this.h,V),this.Ra&&ve(g,"TYPE","init"),this.S?(ve(g,"$req",f),ve(g,"SID","null"),V.U=!0,Kh(V,g,null)):Kh(V,g,f),this.I=2}}else this.I==3&&(c?Xy(this,c):this.i.length==0||Ny(this.h)||Xy(this))};function Xy(c,f){var g;f?g=f.l:g=c.V++;const T=gn(c.J);ve(T,"SID",c.M),ve(T,"RID",g),ve(T,"AID",c.K),Vo(c,T),c.u&&c.o&&td(T,c.u,c.o),g=new ar(c,c.j,g,c.D+1),c.u===null&&(g.J=c.o),f&&(c.i=f.G.concat(c.i)),f=Jy(c,g,1e3),g.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Jh(c.h,g),Kh(g,T,f)}function Vo(c,f){c.H&&K(c.H,function(g,T){ve(f,T,g)}),c.l&&K({},function(g,T){ve(f,T,g)})}function Jy(c,f,g){g=Math.min(c.i.length,g);const T=c.l?u(c.l.Ka,c.l,c):null;e:{var V=c.i;let ne=-1;for(;;){const $e=["count="+g];ne==-1?g>0?(ne=V[0].g,$e.push("ofs="+ne)):ne=0:$e.push("ofs="+ne);let pe=!0;for(let Ke=0;Ke<g;Ke++){var O=V[Ke].g;const yn=V[Ke].map;if(O-=ne,O<0)ne=Math.max(0,V[Ke].g-100),pe=!1;else try{O="req"+O+"_"||"";try{var B=yn instanceof Map?yn:Object.entries(yn);for(const[mi,hr]of B){let dr=hr;a(hr)&&(dr=$h(hr)),$e.push(O+mi+"="+encodeURIComponent(dr))}}catch(mi){throw $e.push(O+"type="+encodeURIComponent("_badmap")),mi}}catch{T&&T(yn)}}if(pe){B=$e.join("&");break e}}B=void 0}return c=c.i.splice(0,g),f.G=c,B}function Zy(c){if(!c.g&&!c.v){c.Y=1;var f=c.Da;L||w(),M||(L(),M=!0),x.add(f,c),c.A=0}}function rd(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=To(u(c.Da,c),n0(c,c.A)),c.A++,!0)}t.Da=function(){if(this.v=null,e0(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=To(u(this.Wa,this),c)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,vt(10),Ol(this),e0(this))};function id(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function e0(c){c.g=new ar(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var f=gn(c.na);ve(f,"RID","rpc"),ve(f,"SID",c.M),ve(f,"AID",c.K),ve(f,"CI",c.F?"0":"1"),!c.F&&c.ia&&ve(f,"TO",c.ia),ve(f,"TYPE","xmlhttp"),Vo(c,f),c.u&&c.o&&td(f,c.u,c.o),c.O&&(c.g.H=c.O);var g=c.g;c=c.ba,g.M=1,g.A=Dl(gn(f)),g.u=null,g.R=!0,Py(g,c)}t.Va=function(){this.C!=null&&(this.C=null,Ol(this),rd(this),vt(19))};function jl(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function t0(c,f){var g=null;if(c.g==f){jl(c),id(c),c.g=null;var T=2}else if(Xh(c.h,f))g=f.G,Vy(c.h,f),T=1;else return;if(c.I!=0){if(f.o)if(T==1){g=f.u?f.u.length:0,f=Date.now()-f.F;var V=c.D;T=bl(),yt(T,new xy(T,g)),Ml(c)}else Zy(c);else if(V=f.m,V==3||V==0&&f.X>0||!(T==1&&vA(c,f)||T==2&&rd(c)))switch(g&&g.length>0&&(f=c.h,f.i=f.i.concat(g)),V){case 1:pi(c,5);break;case 4:pi(c,10);break;case 3:pi(c,6);break;default:pi(c,2)}}}function n0(c,f){let g=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(g*=2),g*f}function pi(c,f){if(c.j.info("Error code "+f),f==2){var g=u(c.bb,c),T=c.Ua;const V=!T;T=new lr(T||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Co(T,"https"),Dl(T),V?dA(T.toString(),g):fA(T.toString(),g)}else vt(2);c.I=0,c.l&&c.l.pa(f),r0(c),Yy(c)}t.bb=function(c){c?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function r0(c){if(c.I=0,c.ja=[],c.l){const f=Ly(c.h);(f.length!=0||c.i.length!=0)&&(I(c.ja,f),I(c.ja,c.i),c.h.i.length=0,y(c.i),c.i.length=0),c.l.oa()}}function i0(c,f,g){var T=g instanceof lr?gn(g):new lr(g);if(T.g!="")f&&(T.g=f+"."+T.g),Ao(T,T.u);else{var V=o.location;T=V.protocol,f=f?f+"."+V.hostname:V.hostname,V=+V.port;const O=new lr(null);T&&Co(O,T),f&&(O.g=f),V&&Ao(O,V),g&&(O.h=g),T=O}return g=c.G,f=c.wa,g&&f&&ve(T,g,f),ve(T,"VER",c.ka),Vo(c,T),T}function s0(c,f,g){if(f&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Aa&&!c.ma?new Re(new ed({ab:g})):new Re(c.ma),f.Fa(c.L),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function o0(){}t=o0.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Fl(){}Fl.prototype.g=function(c,f){return new Dt(c,f)};function Dt(c,f){ot.call(this),this.g=new Qy(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(c?c["X-WebChannel-Client-Profile"]=f.sa:c={"X-WebChannel-Client-Profile":f.sa}),this.g.U=c,(c=f&&f.Qb)&&!k(c)&&(this.g.u=c),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!k(f)&&(this.g.G=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new es(this)}d(Dt,ot),Dt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){nd(this.g)},Dt.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var g={};g.__data__=c,c=g}else this.v&&(g={},g.__data__=$h(c),c=g);f.i.push(new iA(f.Ya++,c)),f.I==3&&Ml(f)},Dt.prototype.N=function(){this.g.l=null,delete this.j,nd(this.g),delete this.g,Dt.Z.N.call(this)};function a0(c){Wh.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const g in f){c=g;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}d(a0,Wh);function l0(){Hh.call(this),this.status=1}d(l0,Hh);function es(c){this.g=c}d(es,o0),es.prototype.ra=function(){yt(this.g,"a")},es.prototype.qa=function(c){yt(this.g,new a0(c))},es.prototype.pa=function(c){yt(this.g,new l0)},es.prototype.oa=function(){yt(this.g,"b")},Fl.prototype.createWebChannel=Fl.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,NI=function(){return new Fl},RI=function(){return bl()},bI=hi,xp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Rl.NO_ERROR=0,Rl.TIMEOUT=8,Rl.HTTP_ERROR=6,Nc=Rl,Iy.COMPLETE="complete",kI=Iy,_y.EventType=wo,wo.OPEN="a",wo.CLOSE="b",wo.ERROR="c",wo.MESSAGE="d",ot.prototype.listen=ot.prototype.J,ta=_y,Re.prototype.listenOnce=Re.prototype.K,Re.prototype.getLastError=Re.prototype.Ha,Re.prototype.getLastErrorCode=Re.prototype.ya,Re.prototype.getStatus=Re.prototype.ca,Re.prototype.getResponseJson=Re.prototype.La,Re.prototype.getResponseText=Re.prototype.la,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Fa,PI=Re}).apply(typeof cc<"u"?cc:typeof self<"u"?self:typeof window<"u"?window:{});const z_="@firebase/firestore",$_="4.9.2";/**
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
 */let co="12.3.0";/**
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
 */const Fi=new mg("@firebase/firestore");function ns(){return Fi.logLevel}function W(t,...e){if(Fi.logLevel<=ie.DEBUG){const n=e.map(vg);Fi.debug(`Firestore (${co}): ${t}`,...n)}}function er(t,...e){if(Fi.logLevel<=ie.ERROR){const n=e.map(vg);Fi.error(`Firestore (${co}): ${t}`,...n)}}function qs(t,...e){if(Fi.logLevel<=ie.WARN){const n=e.map(vg);Fi.warn(`Firestore (${co}): ${t}`,...n)}}function vg(t){if(typeof t=="string")return t;try{/**
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
 */function X(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,DI(t,r,n)}function DI(t,e,n){let r=`FIRESTORE (${co}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw er(r),new Error(r)}function he(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||DI(e,i,r)}function ee(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends or{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Hn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class VI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class p3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class m3{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class g3{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){he(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Hn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Hn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Hn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string",31837,{l:r}),new VI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string",2055,{h:e}),new ht(e)}}class y3{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class v3{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new y3(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class W_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _3{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,sn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){he(this.o===void 0,3512);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new W_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new W_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function w3(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class _g{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=w3(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Ip(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Xd(i)===Xd(s)?se(i,s):Xd(i)?1:-1}return se(t.length,e.length)}const E3=55296,T3=57343;function Xd(t){const e=t.charCodeAt(0);return e>=E3&&e<=T3}function Gs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const H_="__name__";class wn{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&X(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=wn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return se(e.length,n.length)}static compareSegments(e,n){const r=wn.isNumericId(e),i=wn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?wn.extractNumericId(e).compare(wn.extractNumericId(n)):Ip(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return $r.fromString(e.substring(4,e.length-2))}}class ge extends wn{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const x3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends wn{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return x3.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===H_}static keyField(){return new nt([H_])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(ge.fromString(e))}static fromName(e){return new G(ge.fromString(e).popFirst(5))}static empty(){return new G(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new ge(e.slice()))}}/**
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
 */function LI(t,e,n){if(!n)throw new $(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function I3(t,e,n,r){if(e===!0&&r===!0)throw new $(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function q_(t){if(!G.isDocumentKey(t))throw new $(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function G_(t){if(G.isDocumentKey(t))throw new $(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function OI(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function gh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X(12329,{type:typeof t})}function tr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gh(t);throw new $(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Be(t,e){const n={typeString:t};return e&&(n.value=e),n}function vl(t,e){if(!OI(t))throw new $(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new $(j.INVALID_ARGUMENT,n);return!0}/**
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
 */const K_=-62135596800,Q_=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Q_);return new we(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<K_)throw new $(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Q_}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:we._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vl(e,we._jsonSchema))return new we(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-K_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}we._jsonSchemaVersion="firestore/timestamp/1.0",we._jsonSchema={type:Be("string",we._jsonSchemaVersion),seconds:Be("number"),nanoseconds:Be("number")};/**
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
 */const Ga=-1;function S3(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new we(n+1,0):new we(n,r));return new Yr(i,G.empty(),e)}function C3(t){return new Yr(t.readTime,t.key,Ga)}class Yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yr(Z.min(),G.empty(),Ga)}static max(){return new Yr(Z.max(),G.empty(),Ga)}}function A3(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
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
 */const P3="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class k3{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function uo(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==P3)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function b3(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ho(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class yh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}yh.ce=-1;/**
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
 */const wg=-1;function vh(t){return t==null}function Iu(t){return t===0&&1/t==-1/0}function R3(t){return typeof t=="number"&&Number.isInteger(t)&&!Iu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const MI="";function N3(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Y_(e)),e=D3(t.get(n),e);return Y_(e)}function D3(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case MI:n+="";break;default:n+=s}}return n}function Y_(t){return t+MI+""}/**
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
 */function X_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function oi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class be{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uc(this.root,e,this.comparator,!1)}getReverseIterator(){return new uc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uc(this.root,e,this.comparator,!0)}}class uc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??tt.RED,this.left=i??tt.EMPTY,this.right=s??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new tt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qe{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new J_(this.data.getIterator())}getIteratorFrom(e){return new J_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class J_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ot{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new qe(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class FI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new FI("Invalid base64 string: "+s):s}}(e);return new st(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const V3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xr(t){if(he(!!t,39018),typeof t=="string"){let e=0;const n=V3.exec(t);if(he(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jr(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
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
 */const UI="server_timestamp",BI="__type__",zI="__previous_value__",$I="__local_write_time__";function Eg(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[BI])==null?void 0:r.stringValue)===UI}function _h(t){const e=t.mapValue.fields[zI];return Eg(e)?_h(e):e}function Ka(t){const e=Xr(t.mapValue.fields[$I].timestampValue);return new we(e.seconds,e.nanos)}/**
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
 */class L3{constructor(e,n,r,i,s,o,a,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h}}const Su="(default)";class Qa{constructor(e,n){this.projectId=e,this.database=n||Su}static empty(){return new Qa("","")}get isDefaultDatabase(){return this.database===Su}isEqual(e){return e instanceof Qa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const WI="__type__",HI="__max__",hc={mapValue:{fields:{__type__:{stringValue:HI}}}},qI="__vector__",Cu="value";function Zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Eg(t)?4:M3(t)?9007199254740991:O3(t)?10:11:X(28295,{value:t})}function Rn(t,e){if(t===e)return!0;const n=Zr(t);if(n!==Zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ka(t).isEqual(Ka(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Xr(i.timestampValue),a=Xr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Jr(i.bytesValue).isEqual(Jr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ve(i.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(i.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ve(i.integerValue)===Ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ve(i.doubleValue),a=Ve(s.doubleValue);return o===a?Iu(o)===Iu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Gs(t.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(X_(o)!==X_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Rn(o[l],a[l])))return!1;return!0}(t,e);default:return X(52216,{left:t})}}function Ya(t,e){return(t.values||[]).find(n=>Rn(n,e))!==void 0}function Ks(t,e){if(t===e)return 0;const n=Zr(t),r=Zr(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ve(s.integerValue||s.doubleValue),l=Ve(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Z_(t.timestampValue,e.timestampValue);case 4:return Z_(Ka(t),Ka(e));case 5:return Ip(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Jr(s),l=Jr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=se(a[u],l[u]);if(h!==0)return h}return se(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=se(Ve(s.latitude),Ve(o.latitude));return a!==0?a:se(Ve(s.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return e1(t.arrayValue,e.arrayValue);case 10:return function(s,o){var p,y,I,S;const a=s.fields||{},l=o.fields||{},u=(p=a[Cu])==null?void 0:p.arrayValue,h=(y=l[Cu])==null?void 0:y.arrayValue,d=se(((I=u==null?void 0:u.values)==null?void 0:I.length)||0,((S=h==null?void 0:h.values)==null?void 0:S.length)||0);return d!==0?d:e1(u,h)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===hc.mapValue&&o===hc.mapValue)return 0;if(s===hc.mapValue)return 1;if(o===hc.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=Ip(l[d],h[d]);if(p!==0)return p;const y=Ks(a[l[d]],u[h[d]]);if(y!==0)return y}return se(l.length,h.length)}(t.mapValue,e.mapValue);default:throw X(23264,{he:n})}}function Z_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=Xr(t),r=Xr(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function e1(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ks(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function Qs(t){return Sp(t)}function Sp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Xr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Sp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Sp(n.fields[o])}`;return i+"}"}(t.mapValue):X(61005,{value:t})}function Dc(t){switch(Zr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_h(t);return e?16+Dc(e):16;case 5:return 2*t.stringValue.length;case 6:return Jr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Dc(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return oi(r.fields,(s,o)=>{i+=s.length+Dc(o)}),i}(t.mapValue);default:throw X(13486,{value:t})}}function t1(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Cp(t){return!!t&&"integerValue"in t}function Tg(t){return!!t&&"arrayValue"in t}function n1(t){return!!t&&"nullValue"in t}function r1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vc(t){return!!t&&"mapValue"in t}function O3(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[WI])==null?void 0:r.stringValue)===qI}function _a(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return oi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=_a(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_a(t.arrayValue.values[n]);return e}return{...t}}function M3(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===HI}/**
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
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Vc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_a(n)}setAll(e){let n=nt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=_a(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Vc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Vc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){oi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new At(_a(this.value))}}function GI(t){const e=[];return oi(t.fields,(n,r)=>{const i=new nt([n]);if(Vc(r)){const s=GI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ot(e)}/**
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
 */class Au{constructor(e,n){this.position=e,this.inclusive=n}}function i1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Ks(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function s1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xa{constructor(e,n="asc"){this.field=e,this.dir=n}}function j3(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class KI{}class Ue extends KI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new U3(e,n,r):n==="array-contains"?new $3(e,r):n==="in"?new W3(e,r):n==="not-in"?new H3(e,r):n==="array-contains-any"?new q3(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new B3(e,r):new z3(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ks(n,this.value)):n!==null&&Zr(this.value)===Zr(n)&&this.matchesComparison(Ks(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends KI{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new hn(e,n)}matches(e){return QI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function QI(t){return t.op==="and"}function YI(t){return F3(t)&&QI(t)}function F3(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function Ap(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+Qs(t.value);if(YI(t))return t.filters.map(e=>Ap(e)).join(",");{const e=t.filters.map(n=>Ap(n)).join(",");return`${t.op}(${e})`}}function XI(t,e){return t instanceof Ue?function(r,i){return i instanceof Ue&&r.op===i.op&&r.field.isEqual(i.field)&&Rn(r.value,i.value)}(t,e):t instanceof hn?function(r,i){return i instanceof hn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&XI(o,i.filters[a]),!0):!1}(t,e):void X(19439)}function JI(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${Qs(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(JI).join(" ,")+"}"}(t):"Filter"}class U3 extends Ue{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class B3 extends Ue{constructor(e,n){super(e,"in",n),this.keys=ZI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class z3 extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=ZI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ZI(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class $3 extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tg(n)&&Ya(n.arrayValue,this.value)}}class W3 extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ya(this.value.arrayValue,n)}}class H3 extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ya(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ya(this.value.arrayValue,n)}}class q3 extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ya(this.value.arrayValue,r))}}/**
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
 */class G3{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.Te=null}}function o1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new G3(t,e,n,r,i,s,o)}function xg(t){const e=ee(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ap(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),vh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qs(r)).join(",")),e.Te=n}return e.Te}function Ig(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!j3(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!XI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!s1(t.startAt,e.startAt)&&s1(t.endAt,e.endAt)}function Pp(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class fo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function K3(t,e,n,r,i,s,o,a){return new fo(t,e,n,r,i,s,o,a)}function Sg(t){return new fo(t)}function a1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function eS(t){return t.collectionGroup!==null}function wa(t){const e=ee(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new qe(nt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Xa(s,r))}),n.has(nt.keyField().canonicalString())||e.Ie.push(new Xa(nt.keyField(),r))}return e.Ie}function Sn(t){const e=ee(t);return e.Ee||(e.Ee=Q3(e,wa(t))),e.Ee}function Q3(t,e){if(t.limitType==="F")return o1(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Xa(i.field,s)});const n=t.endAt?new Au(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Au(t.startAt.position,t.startAt.inclusive):null;return o1(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function kp(t,e){const n=t.filters.concat([e]);return new fo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function bp(t,e,n){return new fo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wh(t,e){return Ig(Sn(t),Sn(e))&&t.limitType===e.limitType}function tS(t){return`${xg(Sn(t))}|lt:${t.limitType}`}function rs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>JI(i)).join(", ")}]`),vh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Qs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Qs(i)).join(",")),`Target(${r})`}(Sn(t))}; limitType=${t.limitType})`}function Eh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of wa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=i1(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,wa(r),i)||r.endAt&&!function(o,a,l){const u=i1(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,wa(r),i))}(t,e)}function Y3(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function nS(t){return(e,n)=>{let r=!1;for(const i of wa(t)){const s=X3(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function X3(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Ks(l,u):X(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X(19790,{direction:t.dir})}}/**
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
 */class Gi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){oi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return jI(this.inner)}size(){return this.innerSize}}/**
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
 */const J3=new be(G.comparator);function nr(){return J3}const rS=new be(G.comparator);function na(...t){let e=rS;for(const n of t)e=e.insert(n.key,n);return e}function iS(t){let e=rS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ci(){return Ea()}function sS(){return Ea()}function Ea(){return new Gi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Z3=new be(G.comparator),eO=new qe(G.comparator);function oe(...t){let e=eO;for(const n of t)e=e.add(n);return e}const tO=new qe(se);function nO(){return tO}/**
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
 */function Cg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Iu(e)?"-0":e}}function oS(t){return{integerValue:""+t}}function rO(t,e){return R3(e)?oS(e):Cg(t,e)}/**
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
 */class Th{constructor(){this._=void 0}}function iO(t,e,n){return t instanceof Ja?function(i,s){const o={fields:{[BI]:{stringValue:UI},[$I]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Eg(s)&&(s=_h(s)),s&&(o.fields[zI]=s),{mapValue:o}}(n,e):t instanceof Za?lS(t,e):t instanceof el?cS(t,e):function(i,s){const o=aS(i,s),a=l1(o)+l1(i.Ae);return Cp(o)&&Cp(i.Ae)?oS(a):Cg(i.serializer,a)}(t,e)}function sO(t,e,n){return t instanceof Za?lS(t,e):t instanceof el?cS(t,e):n}function aS(t,e){return t instanceof Pu?function(r){return Cp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ja extends Th{}class Za extends Th{constructor(e){super(),this.elements=e}}function lS(t,e){const n=uS(e);for(const r of t.elements)n.some(i=>Rn(i,r))||n.push(r);return{arrayValue:{values:n}}}class el extends Th{constructor(e){super(),this.elements=e}}function cS(t,e){let n=uS(e);for(const r of t.elements)n=n.filter(i=>!Rn(i,r));return{arrayValue:{values:n}}}class Pu extends Th{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function l1(t){return Ve(t.integerValue||t.doubleValue)}function uS(t){return Tg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class oO{constructor(e,n){this.field=e,this.transform=n}}function aO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Za&&i instanceof Za||r instanceof el&&i instanceof el?Gs(r.elements,i.elements,Rn):r instanceof Pu&&i instanceof Pu?Rn(r.Ae,i.Ae):r instanceof Ja&&i instanceof Ja}(t.transform,e.transform)}class lO{constructor(e,n){this.version=e,this.transformResults=n}}class cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new cn}static exists(e){return new cn(void 0,e)}static updateTime(e){return new cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xh{}function hS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ag(t.key,cn.none()):new _l(t.key,t.data,cn.none());{const n=t.data,r=At.empty();let i=new qe(nt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ai(t.key,r,new Ot(i.toArray()),cn.none())}}function cO(t,e,n){t instanceof _l?function(i,s,o){const a=i.value.clone(),l=u1(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ai?function(i,s,o){if(!Lc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=u1(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(dS(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ta(t,e,n,r){return t instanceof _l?function(s,o,a,l){if(!Lc(s.precondition,o))return a;const u=s.value.clone(),h=h1(s.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ai?function(s,o,a,l){if(!Lc(s.precondition,o))return a;const u=h1(s.fieldTransforms,l,o),h=o.data;return h.setAll(dS(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return Lc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function uO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=aS(r.transform,i||null);s!=null&&(n===null&&(n=At.empty()),n.set(r.field,s))}return n||null}function c1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Gs(r,i,(s,o)=>aO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _l extends xh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ai extends xh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function dS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function u1(t,e,n){const r=new Map;he(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,sO(o,a,n[i]))}return r}function h1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,iO(s,o,e))}return r}class Ag extends xh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hO extends xh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class dO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&cO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ta(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ta(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=sS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=hS(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&Gs(this.mutations,e.mutations,(n,r)=>c1(n,r))&&Gs(this.baseMutations,e.baseMutations,(n,r)=>c1(n,r))}}class Pg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){he(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Z3}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Pg(e,n,r,i)}}/**
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
 */class fO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class pO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Me,ce;function mO(t){switch(t){case j.OK:return X(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return X(15467,{code:t})}}function fS(t){if(t===void 0)return er("GRPC error has no .code"),j.UNKNOWN;switch(t){case Me.OK:return j.OK;case Me.CANCELLED:return j.CANCELLED;case Me.UNKNOWN:return j.UNKNOWN;case Me.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Me.INTERNAL:return j.INTERNAL;case Me.UNAVAILABLE:return j.UNAVAILABLE;case Me.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Me.NOT_FOUND:return j.NOT_FOUND;case Me.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Me.ABORTED:return j.ABORTED;case Me.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Me.DATA_LOSS:return j.DATA_LOSS;default:return X(39323,{code:t})}}(ce=Me||(Me={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function gO(){return new TextEncoder}/**
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
 */const yO=new $r([4294967295,4294967295],0);function d1(t){const e=gO().encode(t),n=new AI;return n.update(e),new Uint8Array(n.digest())}function f1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new $r([n,r],0),new $r([i,s],0)]}class kg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ra(`Invalid padding: ${n}`);if(r<0)throw new ra(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ra(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ra(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=$r.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply($r.fromNumber(r)));return i.compare(yO)===1&&(i=new $r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=d1(e),[r,i]=f1(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new kg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=d1(e),[r,i]=f1(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ra extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ih{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,wl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ih(Z.min(),i,new be(se),nr(),oe())}}class wl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new wl(r,n,oe(),oe(),oe())}}/**
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
 */class Oc{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class pS{constructor(e,n){this.targetId=e,this.Ce=n}}class mS{constructor(e,n,r=st.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class p1{constructor(){this.ve=0,this.Fe=m1(),this.Me=st.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=oe(),n=oe(),r=oe();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X(38017,{changeType:s})}}),new wl(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=m1()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,he(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class vO{constructor(e){this.Ge=e,this.ze=new Map,this.je=nr(),this.Je=dc(),this.He=dc(),this.Ye=new be(se)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:X(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Pp(s))if(r===0){const o=new G(s.path);this.et(n,o,ft.newNoDocument(o,Z.min()))}else he(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Jr(r).toUint8Array()}catch(l){if(l instanceof FI)return qs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new kg(o,i,s)}catch(l){return qs(l instanceof ra?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const a=this.ot(o);if(a){if(s.current&&Pp(a.target)){const l=new G(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,ft.newNoDocument(l,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=oe();this.He.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Ih(e,n,this.Ye,this.je,r);return this.je=nr(),this.Je=dc(),this.He=dc(),this.Ye=new be(se),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new p1,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new qe(se),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new qe(se),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new p1),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function dc(){return new be(G.comparator)}function m1(){return new be(G.comparator)}const _O=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),wO=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),EO=(()=>({and:"AND",or:"OR"}))();class TO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rp(t,e){return t.useProto3Json||vh(e)?e:{value:e}}function ku(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xO(t,e){return ku(t,e.toTimestamp())}function Cn(t){return he(!!t,49232),Z.fromTimestamp(function(n){const r=Xr(n);return new we(r.seconds,r.nanos)}(t))}function bg(t,e){return Np(t,e).canonicalString()}function Np(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function yS(t){const e=ge.fromString(t);return he(TS(e),10190,{key:e.toString()}),e}function Dp(t,e){return bg(t.databaseId,e.path)}function Jd(t,e){const n=yS(e);if(n.get(1)!==t.databaseId.projectId)throw new $(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(_S(n))}function vS(t,e){return bg(t.databaseId,e)}function IO(t){const e=yS(t);return e.length===4?ge.emptyPath():_S(e)}function Vp(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _S(t){return he(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function g1(t,e,n){return{name:Dp(t,e),fields:n.value.mapValue.fields}}function SO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:X(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,h){return u.useProto3Json?(he(h===void 0||typeof h=="string",58123),st.fromBase64String(h||"")):(he(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),st.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?j.UNKNOWN:fS(u.code);return new $(h,u.message||"")}(o);n=new mS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Jd(t,r.document.name),s=Cn(r.document.updateTime),o=r.document.createTime?Cn(r.document.createTime):Z.min(),a=new At({mapValue:{fields:r.document.fields}}),l=ft.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Oc(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Jd(t,r.document),s=r.readTime?Cn(r.readTime):Z.min(),o=ft.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Oc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Jd(t,r.document),s=r.removedTargetIds||[];n=new Oc([],s,i,null)}else{if(!("filter"in e))return X(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new pO(i,s),a=r.targetId;n=new pS(a,o)}}return n}function CO(t,e){let n;if(e instanceof _l)n={update:g1(t,e.key,e.value)};else if(e instanceof Ag)n={delete:Dp(t,e.key)};else if(e instanceof ai)n={update:g1(t,e.key,e.data),updateMask:LO(e.fieldMask)};else{if(!(e instanceof hO))return X(16599,{Vt:e.type});n={verify:Dp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Ja)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Za)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof el)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Pu)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw X(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:xO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X(27497)}(t,e.precondition)),n}function AO(t,e){return t&&t.length>0?(he(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Cn(i.updateTime):Cn(s);return o.isEqual(Z.min())&&(o=Cn(s)),new lO(o,i.transformResults||[])}(n,e))):[]}function PO(t,e){return{documents:[vS(t,e.path)]}}function kO(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=vS(t,i);const s=function(u){if(u.length!==0)return ES(hn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:is(p.field),direction:NO(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Rp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:i}}function bO(t){let e=IO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){he(r===1,65062);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(d){const p=wS(d);return p instanceof hn&&YI(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(I){return new Xa(ss(I.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,vh(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,y=d.values||[];return new Au(y,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,y=d.values||[];return new Au(y,p)}(n.endAt)),K3(e,i,o,s,a,"F",l,u)}function RO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function wS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ss(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ss(n.unaryFilter.field);return Ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ss(n.unaryFilter.field);return Ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ss(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ue.create(ss(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(r=>wS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X(1026)}}(n.compositeFilter.op))}(t):X(30097,{filter:t})}function NO(t){return _O[t]}function DO(t){return wO[t]}function VO(t){return EO[t]}function is(t){return{fieldPath:t.canonicalString()}}function ss(t){return nt.fromServerFormat(t.fieldPath)}function ES(t){return t instanceof Ue?function(n){if(n.op==="=="){if(r1(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NAN"}};if(n1(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(r1(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NOT_NAN"}};if(n1(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:is(n.field),op:DO(n.op),value:n.value}}}(t):t instanceof hn?function(n){const r=n.getFilters().map(i=>ES(i));return r.length===1?r[0]:{compositeFilter:{op:VO(n.op),filters:r}}}(t):X(54877,{filter:t})}function LO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function TS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class OO{constructor(e){this.yt=e}}function MO(t){const e=bO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bp(e,e.limit,"L"):e}/**
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
 */class jO{constructor(){this.Cn=new FO}addToCollectionParentIndex(e,n){return this.Cn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Yr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Yr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class FO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new qe(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new qe(ge.comparator)).toArray()}}/**
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
 */const y1={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},xS=41943040;class St{static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(xS,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);/**
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
 */class Ys{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ys(0)}static cr(){return new Ys(-1)}}/**
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
 */const v1="LruGarbageCollector",UO=1048576;function _1([t,e],[n,r]){const i=se(t,n);return i===0?se(e,r):i}class BO{constructor(e){this.Ir=e,this.buffer=new qe(_1),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();_1(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class zO{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){W(v1,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ho(n)?W(v1,"Ignoring IndexedDB error during garbage collection: ",n):await uo(n)}await this.Vr(3e5)})}}class $O{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(yh.ce);const r=new BO(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(y1)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),y1):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(e,i))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(s=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),ns()<=ie.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:d})))}}function WO(t,e){return new $O(t,e)}/**
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
 */class HO{constructor(){this.changes=new Gi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class qO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class GO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ta(r.mutation,i,Ot.empty(),we.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=Ci();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=na();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ci();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=nr();const o=Ea(),a=function(){return Ea()}();return n.forEach((l,u)=>{const h=r.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof ai)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Ta(h.mutation,u,h.mutation.getFieldMask(),we.now())):o.set(u.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>a.set(u,new qO(h,o.get(u)??null))),a))}recalculateAndSaveOverlays(e,n){const r=Ea();let i=new be((o,a)=>o-a),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Ot.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(i.get(a.batchId)||oe()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=sS();h.forEach(p=>{if(!s.has(p)){const y=hS(n.get(p),r.get(p));y!==null&&d.set(p,y),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):eS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(Ci());let a=Ga,l=s;return o.next(u=>F.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,oe())).next(h=>({batchId:a,changes:iS(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=na();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=na();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,l=>{const u=function(d,p){return new fo(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,ft.newInvalidDocument(h)))});let a=na();return o.forEach((l,u)=>{const h=s.get(l);h!==void 0&&Ta(h.mutation,u,Ot.empty(),we.now()),Eh(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class KO{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return F.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Cn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:MO(i.bundledQuery),readTime:Cn(i.readTime)}}(n)),F.resolve()}}/**
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
 */class QO{constructor(){this.overlays=new be(G.comparator),this.qr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ci();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=Ci(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new be((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=s.get(u.largestBatchId);h===null&&(h=Ci(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Ci(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return F.resolve(a)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fO(n,r));let s=this.qr.get(n);s===void 0&&(s=oe(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
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
 */class YO{constructor(){this.sessionToken=st.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class Rg{constructor(){this.Qr=new qe(Qe.$r),this.Ur=new qe(Qe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Qe(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Qe(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new G(new ge([])),r=new Qe(n,e),i=new Qe(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new G(new ge([])),r=new Qe(n,e),i=new Qe(n,e+1);let s=oe();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Qe(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return G.comparator(e.key,n.key)||se(e.Yr,n.Yr)}static Kr(e,n){return se(e.Yr,n.Yr)||G.comparator(e.key,n.key)}}/**
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
 */class XO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new qe(Qe.$r)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new dO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Zr=this.Zr.add(new Qe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?wg:this.tr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Qe(n,0),i=new Qe(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const a=this.Xr(o.Yr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(se);return n.forEach(i=>{const s=new Qe(i,0),o=new Qe(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],a=>{r=r.add(a.Yr)})}),F.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new Qe(new G(s),0);let a=new qe(se);return this.Zr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Yr)),!0)},o),F.resolve(this.ti(a))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){he(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return F.forEach(n.mutations,i=>{const s=new Qe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Qe(n,0),i=this.Zr.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class JO{constructor(e){this.ri=e,this.docs=function(){return new be(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let r=nr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ft.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=nr();const o=n.path,a=new G(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||A3(C3(h),r)<=0||(i.has(h.key)||Eh(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X(9500)}ii(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ZO(this)}getSize(e){return F.resolve(this.size)}}class ZO extends HO{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class eM{constructor(e){this.persistence=e,this.si=new Gi(n=>xg(n),Ig),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.oi=0,this._i=new Rg,this.targetCount=0,this.ai=Ys.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),F.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ys(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Pr(n),F.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this._i.containsKey(n))}}/**
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
 */class IS{constructor(e,n){this.ui={},this.overlays={},this.ci=new yh(0),this.li=!1,this.li=!0,this.hi=new YO,this.referenceDelegate=e(this),this.Pi=new eM(this),this.indexManager=new jO,this.remoteDocumentCache=function(i){return new JO(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new OO(n),this.Ii=new KO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new QO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new XO(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new tM(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return F.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class tM extends k3{constructor(e){super(),this.currentSequenceNumber=e}}class Ng{constructor(e){this.persistence=e,this.Ri=new Rg,this.Vi=null}static mi(e){return new Ng(e)}get fi(){if(this.Vi)return this.Vi;throw X(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.fi,r=>{const i=G.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class bu{constructor(e,n){this.persistence=e,this.pi=new Gi(r=>N3(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=WO(this,n)}static mi(e,n){return new bu(e,n)}Ei(){}di(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return F.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?F.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(a=>{a||(r++,s.removeEntry(o,Z.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Dc(e.data.value)),n}br(e,n,r){return F.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return F.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Dg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Dg(e,n.fromCache,r,i)}}/**
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
 */class nM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class rM{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return YL()?8:b3(mt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new nM;return this.Ss(e,n,o).next(a=>{if(s.result=a,this.Vs)return this.bs(e,n,o,a.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(ns()<=ie.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),F.resolve()):(ns()<=ie.DEBUG&&W("QueryEngine","Query:",rs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(ns()<=ie.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Sn(n))):F.resolve())}ys(e,n){if(a1(n))return F.resolve(null);let r=Sn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bp(n,null,"F"),r=Sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.ps.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Ds(n,a);return this.Cs(n,u,o,l.readTime)?this.ys(e,bp(n,null,"F")):this.vs(e,u,n,l)}))})))}ws(e,n,r,i){return a1(n)||i.isEqual(Z.min())?F.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?F.resolve(null):(ns()<=ie.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),rs(n)),this.vs(e,o,n,S3(i,Ga)).next(a=>a))})}Ds(e,n){let r=new qe(nS(e));return n.forEach((i,s)=>{Eh(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return ns()<=ie.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",rs(n)),this.ps.getDocumentsMatchingQuery(e,n,Yr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const Vg="LocalStore",iM=3e8;class sM{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new be(se),this.xs=new Gi(s=>xg(s),Ig),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new GO(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function oM(t,e,n,r){return new sM(t,e,n,r)}async function SS(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=oe();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:a}))})})}function aM(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,p=d.keys();let y=F.resolve();return p.forEach(I=>{y=y.next(()=>h.getEntry(l,I)).next(S=>{const A=u.docVersions.get(I);he(A!==null,48541),S.version.compareTo(A)<0&&(d.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),h.addEntry(S)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=oe();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function CS(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function lM(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const a=[];e.targetChanges.forEach((h,d)=>{const p=i.get(d);if(!p)return;a.push(n.Pi.removeMatchingKeys(s,h.removedDocuments,d).next(()=>n.Pi.addMatchingKeys(s,h.addedDocuments,d)));let y=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?y=y.withResumeToken(st.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),i=i.insert(d,y),function(S,A,E){return S.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=iM?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(p,y,h)&&a.push(n.Pi.updateTargetData(s,y))});let l=nr(),u=oe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(cM(s,o,e.documentUpdates).next(h=>{l=h.ks,u=h.qs})),!r.isEqual(Z.min())){const h=n.Pi.getLastRemoteSnapshotVersion(s).next(d=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ms=i,s))}function cM(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=nr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):W(Vg,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ks:o,qs:i}})}function uM(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=wg),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hM(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new Ar(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Lp(t,e,n){const r=ee(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ho(o))throw o;W(Vg,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function w1(t,e,n){const r=ee(t);let i=Z.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=ee(l),p=d.xs.get(h);return p!==void 0?F.resolve(d.Ms.get(p)):d.Pi.getTargetData(u,h)}(r,o,Sn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:oe())).next(a=>(dM(r,Y3(e),a),{documents:a,Qs:s})))}function dM(t,e,n){let r=t.Os.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class E1{constructor(){this.activeTargetIds=nO()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fM{constructor(){this.Mo=new E1,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new E1,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pM{Oo(e){}shutdown(){}}/**
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
 */const T1="ConnectivityMonitor";class x1{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){W(T1,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){W(T1,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fc=null;function Op(){return fc===null?fc=function(){return 268435456+Math.round(2147483648*Math.random())}():fc++,"0x"+fc.toString(16)}/**
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
 */const Zd="RestConnection",mM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class gM{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Su?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=Op(),a=this.zo(e,n.toUriEncodedString());W(Zd,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,i,s);const{host:u}=new URL(a),h=ao(u);return this.Jo(e,a,l,r,h).then(d=>(W(Zd,`Received RPC '${e}' ${o}: `,d),d),d=>{throw qs(Zd,`RPC '${e}' ${o} failed with error: `,d,"url: ",a,"request:",r),d})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+co}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=mM[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class yM{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const ct="WebChannelConnection";class vM extends gM{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Op();return new Promise((a,l)=>{const u=new PI;u.setWithCredentials(!0),u.listenOnce(kI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Nc.NO_ERROR:const d=u.getResponseJson();W(ct,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),a(d);break;case Nc.TIMEOUT:W(ct,`RPC '${e}' ${o} timed out`),l(new $(j.DEADLINE_EXCEEDED,"Request time out"));break;case Nc.HTTP_ERROR:const p=u.getStatus();if(W(ct,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const I=y==null?void 0:y.error;if(I&&I.status&&I.message){const S=function(E){const _=E.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(_)>=0?_:j.UNKNOWN}(I.status);l(new $(S,I.message))}else l(new $(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new $(j.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{W(ct,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(i);W(ct,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",h,r,15)})}T_(e,n,r){const i=Op(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=NI(),a=RI(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");W(ct,`Creating RPC '${e}' stream ${i}: ${h}`,l);const d=o.createWebChannel(h,l);this.I_(d);let p=!1,y=!1;const I=new yM({Yo:A=>{y?W(ct,`Not sending because RPC '${e}' stream ${i} is closed:`,A):(p||(W(ct,`Opening RPC '${e}' stream ${i} transport.`),d.open(),p=!0),W(ct,`RPC '${e}' stream ${i} sending:`,A),d.send(A))},Zo:()=>d.close()}),S=(A,E,_)=>{A.listen(E,v=>{try{_(v)}catch(b){setTimeout(()=>{throw b},0)}})};return S(d,ta.EventType.OPEN,()=>{y||(W(ct,`RPC '${e}' stream ${i} transport opened.`),I.o_())}),S(d,ta.EventType.CLOSE,()=>{y||(y=!0,W(ct,`RPC '${e}' stream ${i} transport closed`),I.a_(),this.E_(d))}),S(d,ta.EventType.ERROR,A=>{y||(y=!0,qs(ct,`RPC '${e}' stream ${i} transport errored. Name:`,A.name,"Message:",A.message),I.a_(new $(j.UNAVAILABLE,"The operation could not be completed")))}),S(d,ta.EventType.MESSAGE,A=>{var E;if(!y){const _=A.data[0];he(!!_,16349);const v=_,b=(v==null?void 0:v.error)||((E=v[0])==null?void 0:E.error);if(b){W(ct,`RPC '${e}' stream ${i} received error:`,b);const L=b.status;let M=function(C){const P=Me[C];if(P!==void 0)return fS(P)}(L),x=b.message;M===void 0&&(M=j.INTERNAL,x="Unknown error status: "+L+" with message "+b.message),y=!0,I.a_(new $(M,x)),d.close()}else W(ct,`RPC '${e}' stream ${i} received:`,_),I.u_(_)}}),S(a,bI.STAT_EVENT,A=>{A.stat===xp.PROXY?W(ct,`RPC '${e}' stream ${i} detected buffering proxy`):A.stat===xp.NOPROXY&&W(ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.__()},0),I}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function ef(){return typeof document<"u"?document:null}/**
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
 */function Sh(t){return new TO(t,!0)}/**
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
 */class AS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const I1="PersistentStream";class PS{constructor(e,n,r,i,s,o,a,l){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new AS(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(er(n.toString()),er("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new $(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(I1,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(W(I1,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _M extends PS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=SO(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?Cn(o.readTime):Z.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Vp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Pp(l)?{documents:PO(s,l)}:{query:kO(s,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=gS(s,o.resumeToken);const u=Rp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=ku(s,o.snapshotVersion.toTimestamp());const u=Rp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=RO(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Vp(this.serializer),n.removeTarget=e,this.q_(n)}}class wM extends PS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return he(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){he(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=AO(e.writeResults,e.commitTime),r=Cn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Vp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>CO(this.serializer,r))};this.q_(n)}}/**
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
 */class EM{}class TM extends EM{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new $(j.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,Np(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(j.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Ho(e,Np(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(j.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class xM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const Ui="RemoteStore";class IM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Ki(this)&&(W(Ui,"Restarting streams for network reachability change."),await async function(l){const u=ee(l);u.Ea.add(4),await El(u),u.Ra.set("Unknown"),u.Ea.delete(4),await Ch(u)}(this))})}),this.Ra=new xM(r,i)}}async function Ch(t){if(Ki(t))for(const e of t.da)await e(!0)}async function El(t){for(const e of t.da)await e(!1)}function kS(t,e){const n=ee(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),jg(n)?Mg(n):po(n).O_()&&Og(n,e))}function Lg(t,e){const n=ee(t),r=po(n);n.Ia.delete(e),r.O_()&&bS(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ki(n)&&n.Ra.set("Unknown"))}function Og(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}po(t).Y_(e)}function bS(t,e){t.Va.Ue(e),po(t).Z_(e)}function Mg(t){t.Va=new vO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),po(t).start(),t.Ra.ua()}function jg(t){return Ki(t)&&!po(t).x_()&&t.Ia.size>0}function Ki(t){return ee(t).Ea.size===0}function RS(t){t.Va=void 0}async function SM(t){t.Ra.set("Online")}async function CM(t){t.Ia.forEach((e,n)=>{Og(t,e)})}async function AM(t,e){RS(t),jg(t)?(t.Ra.ha(e),Mg(t)):t.Ra.set("Unknown")}async function PM(t,e,n){if(t.Ra.set("Online"),e instanceof mS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.Ia.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.Ia.delete(a),i.Va.removeTarget(a))}(t,e)}catch(r){W(Ui,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ru(t,r)}else if(e instanceof Oc?t.Va.Ze(e):e instanceof pS?t.Va.st(e):t.Va.tt(e),!n.isEqual(Z.min()))try{const r=await CS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Va.Tt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.Ia.get(u);h&&s.Ia.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=s.Ia.get(l);if(!h)return;s.Ia.set(l,h.withResumeToken(st.EMPTY_BYTE_STRING,h.snapshotVersion)),bS(s,l);const d=new Ar(h.target,l,u,h.sequenceNumber);Og(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){W(Ui,"Failed to raise snapshot:",r),await Ru(t,r)}}async function Ru(t,e,n){if(!ho(e))throw e;t.Ea.add(1),await El(t),t.Ra.set("Offline"),n||(n=()=>CS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(Ui,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Ch(t)})}function NS(t,e){return e().catch(n=>Ru(t,n,e))}async function Ah(t){const e=ee(t),n=ei(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:wg;for(;kM(e);)try{const i=await uM(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,bM(e,i)}catch(i){await Ru(e,i)}DS(e)&&VS(e)}function kM(t){return Ki(t)&&t.Ta.length<10}function bM(t,e){t.Ta.push(e);const n=ei(t);n.O_()&&n.X_&&n.ea(e.mutations)}function DS(t){return Ki(t)&&!ei(t).x_()&&t.Ta.length>0}function VS(t){ei(t).start()}async function RM(t){ei(t).ra()}async function NM(t){const e=ei(t);for(const n of t.Ta)e.ea(n.mutations)}async function DM(t,e,n){const r=t.Ta.shift(),i=Pg.from(r,e,n);await NS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ah(t)}async function VM(t,e){e&&ei(t).X_&&await async function(r,i){if(function(o){return mO(o)&&o!==j.ABORTED}(i.code)){const s=r.Ta.shift();ei(r).B_(),await NS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ah(r)}}(t,e),DS(t)&&VS(t)}async function S1(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),W(Ui,"RemoteStore received new credentials");const r=Ki(n);n.Ea.add(3),await El(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Ch(n)}async function LM(t,e){const n=ee(t);e?(n.Ea.delete(2),await Ch(n)):e||(n.Ea.add(2),await El(n),n.Ra.set("Unknown"))}function po(t){return t.ma||(t.ma=function(n,r,i){const s=ee(n);return s.sa(),new _M(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:SM.bind(null,t),t_:CM.bind(null,t),r_:AM.bind(null,t),H_:PM.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),jg(t)?Mg(t):t.Ra.set("Unknown")):(await t.ma.stop(),RS(t))})),t.ma}function ei(t){return t.fa||(t.fa=function(n,r,i){const s=ee(n);return s.sa(),new wM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:RM.bind(null,t),r_:VM.bind(null,t),ta:NM.bind(null,t),na:DM.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Ah(t)):(await t.fa.stop(),t.Ta.length>0&&(W(Ui,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Fg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Fg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ug(t,e){if(er("AsyncQueue",`${e}: ${t}`),ho(t))return new $(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Rs{static emptySet(e){return new Rs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=na(),this.sortedSet=new be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Rs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class C1{constructor(){this.ga=new be(G.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):X(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xs{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Xs(e,n,Rs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class OM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class MM{constructor(){this.queries=A1(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=A1(),s.forEach((o,a)=>{for(const l of a.Sa)l.onError(r)})})(this,new $(j.ABORTED,"Firestore shutting down"))}}function A1(){return new Gi(t=>tS(t),wh)}async function LS(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new OM,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Ug(o,`Initialization of query '${rs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Bg(n)}async function OS(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function jM(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Sa)a.Fa(i)&&(r=!0);o.wa=i}}r&&Bg(n)}function FM(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Bg(t){t.Ca.forEach(e=>{e.next()})}var Mp,P1;(P1=Mp||(Mp={})).Ma="default",P1.Cache="cache";class MS{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Mp.Cache}}/**
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
 */class jS{constructor(e){this.key=e}}class FS{constructor(e){this.key=e}}class UM{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=oe(),this.mutatedKeys=oe(),this.eu=nS(e),this.tu=new Rs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new C1,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,d)=>{const p=i.get(h),y=Eh(this.query,d)?d:null,I=!!p&&this.mutatedKeys.has(p.key),S=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let A=!1;p&&y?p.data.isEqual(y.data)?I!==S&&(r.track({type:3,doc:y}),A=!0):this.su(p,y)||(r.track({type:2,doc:y}),A=!0,(l&&this.eu(y,l)>0||u&&this.eu(y,u)<0)&&(a=!0)):!p&&y?(r.track({type:0,doc:y}),A=!0):p&&!y&&(r.track({type:1,doc:p}),A=!0,(l||u)&&(a=!0)),A&&(y?(o=o.add(y),s=S?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Cs:a,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,d)=>function(y,I){const S=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Rt:A})}};return S(y)-S(I)}(h.type,d.type)||this.eu(h.doc,d.doc)),this.ou(r),i=i??!1;const a=n&&!i?this._u():[],l=this.Xa.size===0&&this.current&&!i?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Xs(this.query,e.tu,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new C1,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=oe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new FS(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new jS(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=oe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Xs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const zg="SyncEngine";class BM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class zM{constructor(e){this.key=e,this.hu=!1}}class $M{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Gi(a=>tS(a),wh),this.Iu=new Map,this.Eu=new Set,this.du=new be(G.comparator),this.Au=new Map,this.Ru=new Rg,this.Vu={},this.mu=new Map,this.fu=Ys.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function WM(t,e,n=!0){const r=HS(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await US(r,e,n,!0),i}async function HM(t,e){const n=HS(t);await US(n,e,!0,!1)}async function US(t,e,n,r){const i=await hM(t.localStore,Sn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await qM(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&kS(t.remoteStore,i),a}async function qM(t,e,n,r,i){t.pu=(d,p,y)=>async function(S,A,E,_){let v=A.view.ru(E);v.Cs&&(v=await w1(S.localStore,A.query,!1).then(({documents:x})=>A.view.ru(x,v)));const b=_&&_.targetChanges.get(A.targetId),L=_&&_.targetMismatches.get(A.targetId)!=null,M=A.view.applyChanges(v,S.isPrimaryClient,b,L);return b1(S,A.targetId,M.au),M.snapshot}(t,d,p,y);const s=await w1(t.localStore,e,!0),o=new UM(e,s.Qs),a=o.ru(s.documents),l=wl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);b1(t,n,u.au);const h=new BM(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function GM(t,e,n){const r=ee(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!wh(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Lp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Lg(r.remoteStore,i.targetId),jp(r,i.targetId)}).catch(uo)):(jp(r,i.targetId),await Lp(r.localStore,i.targetId,!0))}async function KM(t,e){const n=ee(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Lg(n.remoteStore,r.targetId))}async function QM(t,e,n){const r=n5(t);try{const i=await function(o,a){const l=ee(o),u=we.now(),h=a.reduce((y,I)=>y.add(I.key),oe());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let I=nr(),S=oe();return l.Ns.getEntries(y,h).next(A=>{I=A,I.forEach((E,_)=>{_.isValidDocument()||(S=S.add(E))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,I)).next(A=>{d=A;const E=[];for(const _ of a){const v=uO(_,d.get(_.key).overlayedDocument);v!=null&&E.push(new ai(_.key,v,GI(v.value.mapValue),cn.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,E,a)}).next(A=>{p=A;const E=A.applyToLocalDocumentSet(d,S);return l.documentOverlayCache.saveOverlays(y,A.batchId,E)})}).then(()=>({batchId:p.batchId,changes:iS(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new be(se)),u=u.insert(a,l),o.Vu[o.currentUser.toKey()]=u}(r,i.batchId,n),await Tl(r,i.changes),await Ah(r.remoteStore)}catch(i){const s=Ug(i,"Failed to persist write");n.reject(s)}}async function BS(t,e){const n=ee(t);try{const r=await lM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?he(o.hu,14607):i.removedDocuments.size>0&&(he(o.hu,42227),o.hu=!1))}),await Tl(n,r,e)}catch(r){await uo(r)}}function k1(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const a=o.view.va(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ee(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const p of d.Sa)p.va(a)&&(u=!0)}),u&&Bg(l)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function YM(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new be(G.comparator);o=o.insert(s,ft.newNoDocument(s,Z.min()));const a=oe().add(s),l=new Ih(Z.min(),new Map,new be(se),o,a);await BS(r,l),r.du=r.du.remove(s),r.Au.delete(e),$g(r)}else await Lp(r.localStore,e,!1).then(()=>jp(r,e,n)).catch(uo)}async function XM(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await aM(n.localStore,e);$S(n,r,null),zS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Tl(n,i)}catch(i){await uo(i)}}async function JM(t,e,n){const r=ee(t);try{const i=await function(o,a){const l=ee(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(he(d!==null,37113),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);$S(r,e,n),zS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Tl(r,i)}catch(i){await uo(i)}}function zS(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function $S(t,e,n){const r=ee(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function jp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||WS(t,r)})}function WS(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Lg(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),$g(t))}function b1(t,e,n){for(const r of n)r instanceof jS?(t.Ru.addReference(r.key,e),ZM(t,r)):r instanceof FS?(W(zg,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||WS(t,r.key)):X(19791,{wu:r})}function ZM(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(W(zg,"New document in limbo: "+n),t.Eu.add(r),$g(t))}function $g(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new G(ge.fromString(e)),r=t.fu.next();t.Au.set(r,new zM(n)),t.du=t.du.insert(n,r),kS(t.remoteStore,new Ar(Sn(Sg(n.path)),r,"TargetPurposeLimboResolution",yh.ce))}}async function Tl(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,l)=>{o.push(r.pu(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){i.push(u);const d=Dg.As(l.targetId,u);s.push(d)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(l,u){const h=ee(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>F.forEach(u,p=>F.forEach(p.Es,y=>h.persistence.referenceDelegate.addReference(d,p.targetId,y)).next(()=>F.forEach(p.ds,y=>h.persistence.referenceDelegate.removeReference(d,p.targetId,y)))))}catch(d){if(!ho(d))throw d;W(Vg,"Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const y=h.Ms.get(p),I=y.snapshotVersion,S=y.withLastLimboFreeSnapshotVersion(I);h.Ms=h.Ms.insert(p,S)}}}(r.localStore,s))}async function e5(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){W(zg,"User change. New user:",e.toKey());const r=await SS(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(a=>{a.forEach(l=>{l.reject(new $(j.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Tl(n,r.Ls)}}function t5(t,e){const n=ee(t),r=n.Au.get(e);if(r&&r.hu)return oe().add(r.key);{let i=oe();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const a=n.Tu.get(o);i=i.unionWith(a.view.nu)}return i}}function HS(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=BS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=t5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YM.bind(null,e),e.Pu.H_=jM.bind(null,e.eventManager),e.Pu.yu=FM.bind(null,e.eventManager),e}function n5(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=JM.bind(null,e),e}class Nu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Sh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return oM(this.persistence,new rM,e.initialUser,this.serializer)}Cu(e){return new IS(Ng.mi,this.serializer)}Du(e){return new fM}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nu.provider={build:()=>new Nu};class r5 extends Nu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){he(this.persistence.referenceDelegate instanceof bu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new zO(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new IS(r=>bu.mi(r,n),this.serializer)}}class Fp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>k1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=e5.bind(null,this.syncEngine),await LM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new MM}()}createDatastore(e){const n=Sh(e.databaseInfo.databaseId),r=function(s){return new vM(s)}(e.databaseInfo);return function(s,o,a,l){return new TM(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new IM(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>k1(this.syncEngine,n,0),function(){return x1.v()?new x1:new pM}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,h){const d=new $M(i,s,o,a,l,u);return h&&(d.gu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);W(Ui,"RemoteStore shutting down."),s.Ea.add(5),await El(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Fp.provider={build:()=>new Fp};/**
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
 */class qS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):er("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const ti="FirestoreClient";class i5{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ht.UNAUTHENTICATED,this.clientId=_g.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W(ti,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(ti,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ug(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tf(t,e){t.asyncQueue.verifyOperationInProgress(),W(ti,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await SS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function R1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await s5(t);W(ti,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>S1(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>S1(e.remoteStore,i)),t._onlineComponents=e}async function s5(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(ti,"Using user provided OfflineComponentProvider");try{await tf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;qs("Error using user provided cache. Falling back to memory cache: "+n),await tf(t,new Nu)}}else W(ti,"Using default OfflineComponentProvider"),await tf(t,new r5(void 0));return t._offlineComponents}async function GS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(ti,"Using user provided OnlineComponentProvider"),await R1(t,t._uninitializedComponentsProvider._online)):(W(ti,"Using default OnlineComponentProvider"),await R1(t,new Fp))),t._onlineComponents}function o5(t){return GS(t).then(e=>e.syncEngine)}async function KS(t){const e=await GS(t),n=e.eventManager;return n.onListen=WM.bind(null,e.syncEngine),n.onUnlisten=GM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=HM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=KM.bind(null,e.syncEngine),n}function a5(t,e,n={}){const r=new Hn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const h=new qS({next:p=>{h.Nu(),o.enqueueAndForget(()=>OS(s,d));const y=p.docs.has(a);!y&&p.fromCache?u.reject(new $(j.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&p.fromCache&&l&&l.source==="server"?u.reject(new $(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new MS(Sg(a.path),h,{includeMetadataChanges:!0,qa:!0});return LS(s,d)}(await KS(t),t.asyncQueue,e,n,r)),r.promise}function l5(t,e,n={}){const r=new Hn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const h=new qS({next:p=>{h.Nu(),o.enqueueAndForget(()=>OS(s,d)),p.fromCache&&l.source==="server"?u.reject(new $(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new MS(a,h,{includeMetadataChanges:!0,qa:!0});return LS(s,d)}(await KS(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function QS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const N1=new Map;/**
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
 */const YS="firestore.googleapis.com",D1=!0;class V1{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=YS,this.ssl=D1}else this.host=e.host,this.ssl=e.ssl??D1;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=xS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<UO)throw new $(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}I3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=QS(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ph{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new V1({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new V1(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new p3;switch(r.type){case"firstParty":return new v3(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=N1.get(n);r&&(W("ComponentProvider","Removing Datastore"),N1.delete(n),r.terminate())}(this),Promise.resolve()}}function c5(t,e,n,r={}){var u;t=tr(t,Ph);const i=ao(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;i&&(_I(`https://${a}`),wI("Firestore",!0)),s.host!==YS&&s.host!==a&&qs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:a,ssl:i,emulatorOptions:r};if(!Mi(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=ht.MOCK_USER;else{h=BL(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new $(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new ht(p)}t._authCredentials=new m3(new VI(h,d))}}/**
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
 */class Qi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qi(this.firestore,e,this._query)}}class ze{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}toJSON(){return{type:ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(vl(n,ze._jsonSchema))return new ze(e,r||null,new G(ge.fromString(n.referencePath)))}}ze._jsonSchemaVersion="firestore/documentReference/1.0",ze._jsonSchema={type:Be("string",ze._jsonSchemaVersion),referencePath:Be("string")};class Wr extends Qi{constructor(e,n,r){super(e,n,Sg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new G(e))}withConverter(e){return new Wr(this.firestore,e,this._path)}}function kh(t,e,...n){if(t=Je(t),LI("collection","path",e),t instanceof Ph){const r=ge.fromString(e,...n);return G_(r),new Wr(t,null,r)}{if(!(t instanceof ze||t instanceof Wr))throw new $(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return G_(r),new Wr(t.firestore,null,r)}}function xl(t,e,...n){if(t=Je(t),arguments.length===1&&(e=_g.newId()),LI("doc","path",e),t instanceof Ph){const r=ge.fromString(e,...n);return q_(r),new ze(t,null,new G(r))}{if(!(t instanceof ze||t instanceof Wr))throw new $(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return q_(r),new ze(t.firestore,t instanceof Wr?t.converter:null,new G(r))}}/**
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
 */const L1="AsyncQueue";class O1{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new AS(this,"async_queue_retry"),this._c=()=>{const r=ef();r&&W(L1,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=ef();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=ef();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Hn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ho(e))throw e;W(L1,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,er("INTERNAL UNHANDLED ERROR: ",M1(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Fg.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&X(47125,{Pc:M1(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function M1(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class mo extends Ph{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new O1,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new O1(e),this._firestoreClient=void 0,await e}}}function u5(t,e){const n=typeof t=="object"?t:II(),r=typeof t=="string"?t:e||Su,i=yg(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=FL("firestore");s&&c5(i,...s)}return i}function Wg(t){if(t._terminated)throw new $(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||h5(t),t._firestoreClient}function h5(t){var r,i,s;const e=t._freezeSettings(),n=function(a,l,u,h){return new L3(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,QS(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new i5(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class qt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qt(st.fromBase64String(e))}catch(n){throw new $(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qt(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vl(e,qt._jsonSchema))return qt.fromBase64String(e.bytes)}}qt._jsonSchemaVersion="firestore/bytes/1.0",qt._jsonSchema={type:Be("string",qt._jsonSchemaVersion),bytes:Be("string")};/**
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
 */class bh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class An{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:An._jsonSchemaVersion}}static fromJSON(e){if(vl(e,An._jsonSchema))return new An(e.latitude,e.longitude)}}An._jsonSchemaVersion="firestore/geoPoint/1.0",An._jsonSchema={type:Be("string",An._jsonSchemaVersion),latitude:Be("number"),longitude:Be("number")};/**
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
 */class Pn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Pn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vl(e,Pn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Pn(e.vectorValues);throw new $(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Pn._jsonSchemaVersion="firestore/vectorValue/1.0",Pn._jsonSchema={type:Be("string",Pn._jsonSchemaVersion),vectorValues:Be("object")};/**
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
 */const d5=/^__.*__$/;class f5{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ai(e,this.data,this.fieldMask,n,this.fieldTransforms):new _l(e,this.data,n,this.fieldTransforms)}}class XS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ai(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function JS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{Ac:t})}}class Hg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Hg({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Du(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(JS(this.Ac)&&d5.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class p5{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Sh(e)}Cc(e,n,r,i=!1){return new Hg({Ac:e,methodName:n,Dc:r,path:nt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qg(t){const e=t._freezeSettings(),n=Sh(t._databaseId);return new p5(t._databaseId,!!e.ignoreUndefinedProperties,n)}function m5(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);Kg("Data must be an object, but it was:",o,r);const a=ZS(r,o);let l,u;if(s.merge)l=new Ot(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const p=Up(e,d,n);if(!o.contains(p))throw new $(j.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);tC(h,p)||h.push(p)}l=new Ot(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new f5(new At(a),l,u)}class Nh extends Rh{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Nh}}class Gg extends Rh{_toFieldTransform(e){return new oO(e.path,new Ja)}isEqual(e){return e instanceof Gg}}function g5(t,e,n,r){const i=t.Cc(1,e,n);Kg("Data must be an object, but it was:",i,r);const s=[],o=At.empty();oi(r,(l,u)=>{const h=Qg(e,l,n);u=Je(u);const d=i.yc(h);if(u instanceof Nh)s.push(h);else{const p=Il(u,d);p!=null&&(s.push(h),o.set(h,p))}});const a=new Ot(s);return new XS(o,a,i.fieldTransforms)}function y5(t,e,n,r,i,s){const o=t.Cc(1,e,n),a=[Up(e,r,n)],l=[i];if(s.length%2!=0)throw new $(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(Up(e,s[p])),l.push(s[p+1]);const u=[],h=At.empty();for(let p=a.length-1;p>=0;--p)if(!tC(u,a[p])){const y=a[p];let I=l[p];I=Je(I);const S=o.yc(y);if(I instanceof Nh)u.push(y);else{const A=Il(I,S);A!=null&&(u.push(y),h.set(y,A))}}const d=new Ot(u);return new XS(h,d,o.fieldTransforms)}function v5(t,e,n,r=!1){return Il(n,t.Cc(r?4:3,e))}function Il(t,e){if(eC(t=Je(t)))return Kg("Unsupported field value:",e,t),ZS(t,e);if(t instanceof Rh)return function(r,i){if(!JS(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Il(a,i.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=we.fromDate(r);return{timestampValue:ku(i.serializer,s)}}if(r instanceof we){const s=new we(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ku(i.serializer,s)}}if(r instanceof An)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qt)return{bytesValue:gS(i.serializer,r._byteString)};if(r instanceof ze){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:bg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Pn)return function(o,a){return{mapValue:{fields:{[WI]:{stringValue:qI},[Cu]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Sc("VectorValues must only contain numeric values.");return Cg(a.serializer,u)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${gh(r)}`)}(t,e)}function ZS(t,e){const n={};return jI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):oi(t,(r,i)=>{const s=Il(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function eC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof An||t instanceof qt||t instanceof ze||t instanceof Rh||t instanceof Pn)}function Kg(t,e,n){if(!eC(n)||!OI(n)){const r=gh(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Up(t,e,n){if((e=Je(e))instanceof bh)return e._internalPath;if(typeof e=="string")return Qg(t,e);throw Du("Field path arguments must be of type string or ",t,!1,void 0,n)}const _5=new RegExp("[~\\*/\\[\\]]");function Qg(t,e,n){if(e.search(_5)>=0)throw Du(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bh(...e.split("."))._internalPath}catch{throw Du(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Du(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new $(j.INVALID_ARGUMENT,a+t+l)}function tC(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class nC{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new w5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Yg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class w5 extends nC{data(){return super.data()}}function Yg(t,e){return typeof e=="string"?Qg(t,e):e instanceof bh?e._internalPath:e._delegate._internalPath}/**
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
 */function E5(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xg{}class rC extends Xg{}function iC(t,e,...n){let r=[];e instanceof Xg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Zg).length,a=s.filter(l=>l instanceof Jg).length;if(o>1||o>0&&a>0)throw new $(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Jg extends rC{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Jg(e,n,r)}_apply(e){const n=this._parse(e);return oC(e._query,n),new Qi(e.firestore,e.converter,kp(e._query,n))}_parse(e){const n=qg(e.firestore);return function(s,o,a,l,u,h,d){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new $(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){F1(d,h);const I=[];for(const S of d)I.push(j1(l,s,S));p={arrayValue:{values:I}}}else p=j1(l,s,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||F1(d,h),p=v5(a,o,d,h==="in"||h==="not-in");return Ue.create(u,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Zg extends Xg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Zg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)oC(o,l),o=kp(o,l)}(e._query,n),new Qi(e.firestore,e.converter,kp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ey extends rC{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ey(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Xa(s,o)}(e._query,this._field,this._direction);return new Qi(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new fo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function sC(t,e="asc"){const n=e,r=Yg("orderBy",t);return ey._create(r,n)}function j1(t,e,n){if(typeof(n=Je(n))=="string"){if(n==="")throw new $(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!eS(e)&&n.indexOf("/")!==-1)throw new $(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!G.isDocumentKey(r))throw new $(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return t1(t,new G(r))}if(n instanceof ze)return t1(t,n._key);throw new $(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gh(n)}.`)}function F1(t,e){if(!Array.isArray(t)||t.length===0)throw new $(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function oC(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class T5{convertValue(e,n="none"){switch(Zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return oi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Cu].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ve(o.doubleValue));return new Pn(n)}convertGeoPoint(e){return new An(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_h(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ka(e));default:return null}}convertTimestamp(e){const n=Xr(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);he(TS(r),9688,{name:e});const i=new Qa(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||er(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function x5(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class ia{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bi extends nC{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Mc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Yg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=bi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}bi._jsonSchemaVersion="firestore/documentSnapshot/1.0",bi._jsonSchema={type:Be("string",bi._jsonSchemaVersion),bundleSource:Be("string","DocumentSnapshot"),bundleName:Be("string"),bundle:Be("string")};class Mc extends bi{data(e={}){return super.data(e)}}class Ns{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ia(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Mc(this._firestore,this._userDataWriter,r.key,r,new ia(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Mc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ia(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Mc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ia(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:I5(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ns._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_g.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function I5(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:t})}}/**
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
 */function S5(t){t=tr(t,ze);const e=tr(t.firestore,mo);return a5(Wg(e),t._key).then(n=>A5(e,t,n))}Ns._jsonSchemaVersion="firestore/querySnapshot/1.0",Ns._jsonSchema={type:Be("string",Ns._jsonSchemaVersion),bundleSource:Be("string","QuerySnapshot"),bundleName:Be("string"),bundle:Be("string")};class aC extends T5{constructor(e){super(),this.firestore=e}convertBytes(e){return new qt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,n)}}function lC(t){t=tr(t,Qi);const e=tr(t.firestore,mo),n=Wg(e),r=new aC(e);return E5(t._query),l5(n,t._query).then(i=>new Ns(e,r,t,i))}function C5(t,e,n,...r){t=tr(t,ze);const i=tr(t.firestore,mo),s=qg(i);let o;return o=typeof(e=Je(e))=="string"||e instanceof bh?y5(s,"updateDoc",t._key,e,n,r):g5(s,"updateDoc",t._key,e),ty(i,[o.toMutation(t._key,cn.exists(!0))])}function cC(t){return ty(tr(t.firestore,mo),[new Ag(t._key,cn.none())])}function uC(t,e){const n=tr(t.firestore,mo),r=xl(t),i=x5(t.converter,e);return ty(n,[m5(qg(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,cn.exists(!1))]).then(()=>r)}function ty(t,e){return function(r,i){const s=new Hn;return r.asyncQueue.enqueueAndForget(async()=>QM(await o5(r),i,s)),s.promise}(Wg(t),e)}function A5(t,e,n){const r=n.docs.get(e._key),i=new aC(t);return new bi(t,i,e._key,r,new ia(n.hasPendingWrites,n.fromCache),e.converter)}function Vu(){return new Gg("serverTimestamp")}(function(e,n=!0){(function(i){co=i})(lo),Hs(new ji("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new mo(new g3(r.getProvider("auth-internal")),new _3(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new $(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qa(u.options.projectId,h)}(o,i),o);return s={useFetchStreams:n,...s},a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),zr(z_,$_,e),zr(z_,$_,"esm2020")})();var P5="firebase",k5="12.6.0";/**
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
 */zr(P5,k5,"app");function hC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const b5=hC,dC=new gl("auth","Firebase",hC());/**
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
 */const Lu=new mg("@firebase/auth");function R5(t,...e){Lu.logLevel<=ie.WARN&&Lu.warn(`Auth (${lo}): ${t}`,...e)}function jc(t,...e){Lu.logLevel<=ie.ERROR&&Lu.error(`Auth (${lo}): ${t}`,...e)}/**
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
 */function dn(t,...e){throw ny(t,...e)}function kn(t,...e){return ny(t,...e)}function fC(t,e,n){const r={...b5(),[e]:n};return new gl("auth","Firebase",r).create(e,{appName:t.name})}function Hr(t){return fC(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ny(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dC.create(t,...e)}function Y(t,e,...n){if(!t)throw ny(e,...n)}function Fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jc(e),new Error(e)}function rr(t,e){t||Fn(e)}/**
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
 */function Bp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function N5(){return U1()==="http:"||U1()==="https:"}function U1(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function D5(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(N5()||GL()||"connection"in navigator)?navigator.onLine:!0}function V5(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Sl{constructor(e,n){this.shortDelay=e,this.longDelay=n,rr(n>e,"Short delay should be less than long delay!"),this.isMobile=WL()||KL()}get(){return D5()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ry(t,e){rr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class pC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const L5={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const O5=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],M5=new Sl(3e4,6e4);function Yi(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function li(t,e,n,r,i={}){return mC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=yl({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...s};return qL()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ao(t.emulatorConfig.host)&&(u.credentials="include"),pC.fetch()(await gC(t,t.config.apiHost,n,a),u)})}async function mC(t,e,n){t._canInitEmulator=!1;const r={...L5,...e};try{const i=new F5(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw pc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw pc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw pc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw pc(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw fC(t,h,u);dn(t,h)}}catch(i){if(i instanceof or)throw i;dn(t,"network-request-failed",{message:String(i)})}}async function Dh(t,e,n,r,i={}){const s=await li(t,e,n,r,i);return"mfaPendingCredential"in s&&dn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function gC(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?ry(t.config,i):`${t.config.apiScheme}://${i}`;return O5.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function j5(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class F5{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kn(this.auth,"network-request-failed")),M5.get())})}}function pc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kn(t,e,r);return i.customData._tokenResponse=n,i}function B1(t){return t!==void 0&&t.enterprise!==void 0}class U5{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return j5(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function B5(t,e){return li(t,"GET","/v2/recaptchaConfig",Yi(t,e))}/**
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
 */async function z5(t,e){return li(t,"POST","/v1/accounts:delete",e)}async function Ou(t,e){return li(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $5(t,e=!1){const n=Je(t),r=await n.getIdToken(e),i=iy(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:xa(nf(i.auth_time)),issuedAtTime:xa(nf(i.iat)),expirationTime:xa(nf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nf(t){return Number(t)*1e3}function iy(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return jc("JWT malformed, contained fewer than 3 sections"),null;try{const i=mI(n);return i?JSON.parse(i):(jc("Failed to decode base64 JWT payload"),null)}catch(i){return jc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function z1(t){const e=iy(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function tl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof or&&W5(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function W5({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class H5{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xa(this.lastLoginAt),this.creationTime=xa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mu(t){var d;const e=t.auth,n=await t.getIdToken(),r=await tl(t,Ou(e,{idToken:n}));Y(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(d=i.providerUserInfo)!=null&&d.length?yC(i.providerUserInfo):[],o=G5(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new zp(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function q5(t){const e=Je(t);await Mu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function G5(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function yC(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function K5(t,e){const n=await mC(t,{},async()=>{const r=yl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await gC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&ao(t.emulatorConfig.host)&&(l.credentials="include"),pC.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Q5(t,e){return li(t,"POST","/v2/accounts:revokeToken",Yi(t,e))}/**
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
 */class Ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):z1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=z1(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await K5(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ds;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ds,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
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
 */function pr(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class on{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new H5(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await tl(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $5(this,e)}reload(){return q5(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new on({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Mu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(Hr(this.auth));const e=await this.getIdToken();return await tl(this,z5(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:d,emailVerified:p,isAnonymous:y,providerData:I,stsTokenManager:S}=n;Y(d&&S,e,"internal-error");const A=Ds.fromJSON(this.name,S);Y(typeof d=="string",e,"internal-error"),pr(r,e.name),pr(i,e.name),Y(typeof p=="boolean",e,"internal-error"),Y(typeof y=="boolean",e,"internal-error"),pr(s,e.name),pr(o,e.name),pr(a,e.name),pr(l,e.name),pr(u,e.name),pr(h,e.name);const E=new on({uid:d,auth:e,email:i,emailVerified:p,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:A,createdAt:u,lastLoginAt:h});return I&&Array.isArray(I)&&(E.providerData=I.map(_=>({..._}))),l&&(E._redirectEventId=l),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ds;i.updateFromServerResponse(n);const s=new on({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Mu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?yC(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ds;a.updateFromIdToken(r);const l=new on({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new zp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const $1=new Map;function Un(t){rr(t instanceof Function,"Expected a class definition");let e=$1.get(t);return e?(rr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$1.set(t,e),e)}/**
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
 */class vC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vC.type="NONE";const W1=vC;/**
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
 */function Fc(t,e,n){return`firebase:${t}:${e}:${n}`}class Vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ou(this.auth,{idToken:e}).catch(()=>{});return n?on._fromGetAccountInfoResponse(this.auth,n,e):null}return on._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vs(Un(W1),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Un(W1);const o=Fc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const p=await Ou(e,{idToken:h}).catch(()=>{});if(!p)break;d=await on._fromGetAccountInfoResponse(e,p,h)}else d=on._fromJSON(e,h);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Vs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Vs(s,e,r))}}/**
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
 */function H1(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(TC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_C(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(IC(e))return"Blackberry";if(SC(e))return"Webos";if(wC(e))return"Safari";if((e.includes("chrome/")||EC(e))&&!e.includes("edge/"))return"Chrome";if(xC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _C(t=mt()){return/firefox\//i.test(t)}function wC(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function EC(t=mt()){return/crios\//i.test(t)}function TC(t=mt()){return/iemobile/i.test(t)}function xC(t=mt()){return/android/i.test(t)}function IC(t=mt()){return/blackberry/i.test(t)}function SC(t=mt()){return/webos/i.test(t)}function sy(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Y5(t=mt()){var e;return sy(t)&&!!((e=window.navigator)!=null&&e.standalone)}function X5(){return QL()&&document.documentMode===10}function CC(t=mt()){return sy(t)||xC(t)||SC(t)||IC(t)||/windows phone/i.test(t)||TC(t)}/**
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
 */function AC(t,e=[]){let n;switch(t){case"Browser":n=H1(mt());break;case"Worker":n=`${H1(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${lo}/${r}`}/**
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
 */class J5{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Z5(t,e={}){return li(t,"GET","/v2/passwordPolicy",Yi(t,e))}/**
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
 */const ej=6;class tj{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??ej,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class nj{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new q1(this),this.idTokenSubscription=new q1(this),this.beforeStateQueue=new J5(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Un(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Vs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ou(this,{idToken:e}),r=await on._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Mu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=V5()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject(Hr(this));const n=e?Je(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(Hr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject(Hr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Z5(this),n=new tj(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Q5(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Un(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Vs.create(this,[Un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=AC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&R5(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function go(t){return Je(t)}class q1{constructor(e){this.auth=e,this.observer=null,this.addObserver=r4(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Vh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rj(t){Vh=t}function PC(t){return Vh.loadJS(t)}function ij(){return Vh.recaptchaEnterpriseScript}function sj(){return Vh.gapiScript}function oj(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class aj{constructor(){this.enterprise=new lj}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class lj{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const cj="recaptcha-enterprise",kC="NO_RECAPTCHA";class uj{constructor(e){this.type=cj,this.auth=go(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{B5(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new U5(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;B1(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(kC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new aj().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&B1(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ij();l.length!==0&&(l+=a),PC(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function qo(t,e,n,r=!1,i=!1){const s=new uj(t);let o;if(i)o=kC;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function G1(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await qo(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await qo(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await qo(t,e,n);return r(t,a).catch(async l=>{var u;if(((u=t._getRecaptchaConfig())==null?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const h=await qo(t,e,n,!1,!0);return r(t,h)}return Promise.reject(l)})}else{const a=await qo(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(i+" provider is not supported.")}/**
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
 */function hj(t,e){const n=yg(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Mi(s,e??{}))return i;dn(i,"already-initialized")}return n.initialize({options:e})}function dj(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fj(t,e,n){const r=go(t);Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=bC(e),{host:o,port:a}=pj(e),l=a===null?"":`:${a}`,u={url:`${s}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Y(Mi(u,r.config.emulator)&&Mi(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,ao(o)?(_I(`${s}//${o}${l}`),wI("Auth",!0)):i||mj()}function bC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pj(t){const e=bC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:K1(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:K1(o)}}}function K1(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mj(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class oy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(e){return Fn("not implemented")}_linkToIdToken(e,n){return Fn("not implemented")}_getReauthenticationResolver(e){return Fn("not implemented")}}async function gj(t,e){return li(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function yj(t,e){return Dh(t,"POST","/v1/accounts:signInWithPassword",Yi(t,e))}/**
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
 */async function vj(t,e){return Dh(t,"POST","/v1/accounts:signInWithEmailLink",Yi(t,e))}async function _j(t,e){return Dh(t,"POST","/v1/accounts:signInWithEmailLink",Yi(t,e))}/**
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
 */class nl extends oy{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new nl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new nl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return G1(e,n,"signInWithPassword",yj,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return vj(e,{email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return G1(e,r,"signUpPassword",gj,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return _j(e,{idToken:n,email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ls(t,e){return Dh(t,"POST","/v1/accounts:signInWithIdp",Yi(t,e))}/**
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
 */const wj="http://localhost";class Bi extends oy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Bi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Bi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ls(e,n)}buildRequest(){const e={requestUri:wj,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yl(n)}return e}}/**
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
 */function Ej(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tj(t){const e=Zo(ea(t)).link,n=e?Zo(ea(e)).deep_link_id:null,r=Zo(ea(t)).deep_link_id;return(r?Zo(ea(r)).link:null)||r||n||e||t}class ay{constructor(e){const n=Zo(ea(e)),r=n.apiKey??null,i=n.oobCode??null,s=Ej(n.mode??null);Y(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Tj(e);try{return new ay(n)}catch{return null}}}/**
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
 */class yo{constructor(){this.providerId=yo.PROVIDER_ID}static credential(e,n){return nl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ay.parseLink(n);return Y(r,"argument-error"),nl._fromEmailAndCode(e,r.code,r.tenantId)}}yo.PROVIDER_ID="password";yo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class RC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Cl extends RC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Er extends Cl{constructor(){super("facebook.com")}static credential(e){return Bi._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.FACEBOOK_SIGN_IN_METHOD="facebook.com";Er.PROVIDER_ID="facebook.com";/**
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
 */class Tr extends Cl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Bi._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tr.credential(n,r)}catch{return null}}}Tr.GOOGLE_SIGN_IN_METHOD="google.com";Tr.PROVIDER_ID="google.com";/**
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
 */class xr extends Cl{constructor(){super("github.com")}static credential(e){return Bi._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.GITHUB_SIGN_IN_METHOD="github.com";xr.PROVIDER_ID="github.com";/**
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
 */class Ir extends Cl{constructor(){super("twitter.com")}static credential(e,n){return Bi._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
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
 */class Js{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await on._fromIdTokenResponse(e,r,i),o=Q1(r);return new Js({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Q1(r);return new Js({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Q1(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ju extends or{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ju.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ju(e,n,r,i)}}function NC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ju._fromErrorAndOperation(t,s,e,r):s})}async function xj(t,e,n=!1){const r=await tl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Js._forOperation(t,"link",r)}/**
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
 */async function Ij(t,e,n=!1){const{auth:r}=t;if(sn(r.app))return Promise.reject(Hr(r));const i="reauthenticate";try{const s=await tl(t,NC(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=iy(s.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),Js._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&dn(r,"user-mismatch"),s}}/**
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
 */async function DC(t,e,n=!1){if(sn(t.app))return Promise.reject(Hr(t));const r="signIn",i=await NC(t,r,e),s=await Js._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Sj(t,e){return DC(go(t),e)}/**
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
 */async function Cj(t){const e=go(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Aj(t,e,n){return sn(t.app)?Promise.reject(Hr(t)):Sj(Je(t),yo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Cj(t),r})}function Pj(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function kj(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function bj(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function Rj(t){return Je(t).signOut()}const Fu="__sak";/**
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
 */class VC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fu,"1"),this.storage.removeItem(Fu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Nj=1e3,Dj=10;class LC extends VC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=CC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);X5()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Dj):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Nj)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}LC.type="LOCAL";const Vj=LC;/**
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
 */class OC extends VC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}OC.type="SESSION";const MC=OC;/**
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
 */function Lj(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Lh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Lh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Lj(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lh.receivers=[];/**
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
 */function ly(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Oj{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=ly("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function bn(){return window}function Mj(t){bn().location.href=t}/**
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
 */function jC(){return typeof bn().WorkerGlobalScope<"u"&&typeof bn().importScripts=="function"}async function jj(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fj(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Uj(){return jC()?self:null}/**
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
 */const FC="firebaseLocalStorageDb",Bj=1,Uu="firebaseLocalStorage",UC="fbase_key";class Al{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oh(t,e){return t.transaction([Uu],e?"readwrite":"readonly").objectStore(Uu)}function zj(){const t=indexedDB.deleteDatabase(FC);return new Al(t).toPromise()}function $p(){const t=indexedDB.open(FC,Bj);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Uu,{keyPath:UC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Uu)?e(r):(r.close(),await zj(),e(await $p()))})})}async function Y1(t,e,n){const r=Oh(t,!0).put({[UC]:e,value:n});return new Al(r).toPromise()}async function $j(t,e){const n=Oh(t,!1).get(e),r=await new Al(n).toPromise();return r===void 0?null:r.value}function X1(t,e){const n=Oh(t,!0).delete(e);return new Al(n).toPromise()}const Wj=800,Hj=3;class BC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $p(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Hj)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lh._getInstance(Uj()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await jj(),!this.activeServiceWorker)return;this.sender=new Oj(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fj()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $p();return await Y1(e,Fu,"1"),await X1(e,Fu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Y1(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$j(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>X1(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Oh(i,!1).getAll();return new Al(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wj)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}BC.type="LOCAL";const qj=BC;new Sl(3e4,6e4);/**
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
 */function Gj(t,e){return e?Un(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class cy extends oy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Kj(t){return DC(t.auth,new cy(t),t.bypassAuthState)}function Qj(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),Ij(n,new cy(t),t.bypassAuthState)}async function Yj(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),xj(n,new cy(t),t.bypassAuthState)}/**
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
 */class zC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kj;case"linkViaPopup":case"linkViaRedirect":return Yj;case"reauthViaPopup":case"reauthViaRedirect":return Qj;default:dn(this.auth,"internal-error")}}resolve(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Xj=new Sl(2e3,1e4);class Ts extends zC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ts.currentPopupAction&&Ts.currentPopupAction.cancel(),Ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){rr(this.filter.length===1,"Popup operations only handle one event");const e=ly();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Xj.get())};e()}}Ts.currentPopupAction=null;/**
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
 */const Jj="pendingRedirect",Uc=new Map;class Zj extends zC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Uc.get(this.auth._key());if(!e){try{const r=await e6(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Uc.set(this.auth._key(),e)}return this.bypassAuthState||Uc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function e6(t,e){const n=r6(e),r=n6(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function t6(t,e){Uc.set(t._key(),e)}function n6(t){return Un(t._redirectPersistence)}function r6(t){return Fc(Jj,t.config.apiKey,t.name)}async function i6(t,e,n=!1){if(sn(t.app))return Promise.reject(Hr(t));const r=go(t),i=Gj(r,e),o=await new Zj(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const s6=10*60*1e3;class o6{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!a6(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$C(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(kn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=s6&&this.cachedEventUids.clear(),this.cachedEventUids.has(J1(e))}saveEventToCache(e){this.cachedEventUids.add(J1(e)),this.lastProcessedEventTime=Date.now()}}function J1(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $C({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function a6(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $C(t);default:return!1}}/**
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
 */async function l6(t,e={}){return li(t,"GET","/v1/projects",e)}/**
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
 */const c6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,u6=/^https?/;async function h6(t){if(t.config.emulator)return;const{authorizedDomains:e}=await l6(t);for(const n of e)try{if(d6(n))return}catch{}dn(t,"unauthorized-domain")}function d6(t){const e=Bp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!u6.test(n))return!1;if(c6.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const f6=new Sl(3e4,6e4);function Z1(){const t=bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function p6(t){return new Promise((e,n)=>{var i,s,o;function r(){Z1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Z1(),n(kn(t,"network-request-failed"))},timeout:f6.get()})}if((s=(i=bn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=bn().gapi)!=null&&o.load)r();else{const a=oj("iframefcb");return bn()[a]=()=>{gapi.load?r():n(kn(t,"network-request-failed"))},PC(`${sj()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Bc=null,e})}let Bc=null;function m6(t){return Bc=Bc||p6(t),Bc}/**
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
 */const g6=new Sl(5e3,15e3),y6="__/auth/iframe",v6="emulator/auth/iframe",_6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},w6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function E6(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ry(e,v6):`https://${t.config.authDomain}/${y6}`,r={apiKey:e.apiKey,appName:t.name,v:lo},i=w6.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${yl(r).slice(1)}`}async function T6(t){const e=await m6(t),n=bn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:E6(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_6,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=kn(t,"network-request-failed"),a=bn().setTimeout(()=>{s(o)},g6.get());function l(){bn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const x6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},I6=500,S6=600,C6="_blank",A6="http://localhost";class ew{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function P6(t,e,n,r=I6,i=S6){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...x6,width:r.toString(),height:i.toString(),top:s,left:o},u=mt().toLowerCase();n&&(a=EC(u)?C6:n),_C(u)&&(e=e||A6,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[y,I])=>`${p}${y}=${I},`,"");if(Y5(u)&&a!=="_self")return k6(e||"",a),new ew(null);const d=window.open(e||"",a,h);Y(d,t,"popup-blocked");try{d.focus()}catch{}return new ew(d)}function k6(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const b6="__/auth/handler",R6="emulator/auth/handler",N6=encodeURIComponent("fac");async function tw(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:lo,eventId:i};if(e instanceof RC){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",n4(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries(s||{}))o[h]=d}if(e instanceof Cl){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${N6}=${encodeURIComponent(l)}`:"";return`${D6(t)}?${yl(a).slice(1)}${u}`}function D6({config:t}){return t.emulator?ry(t,R6):`https://${t.authDomain}/${b6}`}/**
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
 */const rf="webStorageSupport";class V6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=MC,this._completeRedirectFn=i6,this._overrideRedirectResult=t6}async _openPopup(e,n,r,i){var o;rr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await tw(e,n,r,Bp(),i);return P6(e,s,ly())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await tw(e,n,r,Bp(),i);return Mj(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(rr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await T6(e),r=new o6(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rf,{type:rf},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[rf];s!==void 0&&n(!!s),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=h6(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return CC()||wC()||sy()}}const L6=V6;var nw="@firebase/auth",rw="1.11.1";/**
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
 */class O6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function M6(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function j6(t){Hs(new ji("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:AC(t)},u=new nj(r,i,s,l);return dj(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hs(new ji("auth-internal",e=>{const n=go(e.getProvider("auth").getImmediate());return(r=>new O6(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zr(nw,rw,M6(t)),zr(nw,rw,"esm2020")}/**
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
 */const F6=5*60,U6=vI("authIdTokenMaxAge")||F6;let iw=null;const B6=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>U6)return;const i=n==null?void 0:n.token;iw!==i&&(iw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function z6(t=II()){const e=yg(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hj(t,{popupRedirectResolver:L6,persistence:[qj,Vj,MC]}),r=vI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=B6(s.toString());kj(n,o,()=>o(n.currentUser)),Pj(n,a=>o(a))}}const i=gI("auth");return i&&fj(n,`http://${i}`),n}function $6(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}rj({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=kn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",$6().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});j6("Browser");const W6={apiKey:"AIzaSyCtBBgxj1rRlsqjy1G0e6Wx1ebThvRjLCI",authDomain:"website-funiture.firebaseapp.com",projectId:"website-funiture",storageBucket:"website-funiture.firebasestorage.app",messagingSenderId:"958390572994",appId:"1:958390572994:web:94ad0df122523abe27e85b",measurementId:"G-VLBF47PD3C"},WC=xI(W6),uy=z6(WC),ci=u5(WC),hy="categories",Mh=async()=>{try{const t=kh(ci,hy),e=iC(t,sC("createdAt","desc")),n=await lC(e),r=[];return n.forEach(i=>{r.push({id:i.id,...i.data()})}),{success:!0,categories:r}}catch(t){return console.error("Error fetching categories:",t),{success:!1,error:"Gagal mengambil data kategori."}}},H6=async t=>{try{const e=kh(ci,hy),n={...t,createdAt:Vu()};return{success:!0,categoryId:(await uC(e,n)).id}}catch(e){return console.error("Error adding category:",e),{success:!1,error:"Gagal menambah kategori."}}},q6=async t=>{try{const e=xl(ci,hy,t);return await cC(e),{success:!0}}catch(e){return console.error("Error deleting category:",e),{success:!1,error:"Gagal menghapus kategori."}}},G6=()=>{const[t,e]=N.useState([]),[n,r]=N.useState(!0);N.useEffect(()=>{i()},[]);const i=async()=>{r(!0);const s=await Mh();s.success?e(s.categories.slice(0,6)):(console.error("Error loading categories:",s.error),e([])),r(!1)};return n?m.jsx("section",{className:"section-padding",children:m.jsx("div",{className:"container",children:m.jsxs("div",{className:"section-header",children:[m.jsx("h2",{children:"Kategori Produk"}),m.jsx("p",{children:"Loading categories..."})]})})}):t.length===0?null:m.jsxs("section",{className:"section-padding",children:[m.jsxs("div",{className:"container",children:[m.jsxs("div",{className:"section-header",children:[m.jsx("h2",{children:"Kategori Produk"}),m.jsx("p",{children:"Jelajahi koleksi furniture berdasarkan kategori"})]}),m.jsx("div",{className:"categories-grid",children:t.map(s=>m.jsx(bL,{category:s},s.id))})]}),m.jsx("style",{children:`
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
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }

          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .categories-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},zi={phoneNumber:"62895422532976",defaultMessage:"Halo, saya ingin bertanya tentang produk furniture Anda.",generateProductMessage:(t,e,n,r)=>`Halo Admin LuxeLiving,

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

Terima kasih!`,openWhatsApp:t=>{const e=encodeURIComponent(t),n=`https://wa.me/${zi.phoneNumber}?text=${e}`;window.open(n,"_blank")}},K6=({product:t})=>{const e=n=>{n.preventDefault();const r=zi.generateProductMessage(t.name,t.price,t.image,t.description);zi.openWhatsApp(r)};return m.jsxs(pg.div,{className:"product-card",whileHover:{y:-10},transition:{type:"spring",stiffness:300},children:[m.jsxs("div",{className:"product-image",children:[m.jsx("img",{src:t.image,alt:t.name,loading:"lazy"}),m.jsxs("div",{className:"product-actions",children:[m.jsxs("button",{onClick:e,"aria-label":"Pre Order via WhatsApp",className:"btn-whatsapp",children:[m.jsx(HT,{})," Pre Order"]}),m.jsx("button",{"aria-label":"Add to Wishlist",className:"btn-wishlist",children:m.jsx(lR,{})})]})]}),m.jsxs("div",{className:"product-info",children:[m.jsx("span",{className:"category",children:t.category}),m.jsx("h3",{children:t.name}),m.jsx("p",{className:"description",children:t.description}),m.jsx("span",{className:"price",children:t.price})]}),m.jsx("style",{children:`
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
      `})]})},Q6="594122933f07f863ffa70bee07bf804c",Y6="https://api.imgbb.com/1/upload",X6=async t=>{try{const e=new FormData;e.append("image",t),e.append("key",Q6);const r=await(await fetch(Y6,{method:"POST",body:e})).json();return r.success?{success:!0,imageUrl:r.data.url,displayUrl:r.data.display_url,deleteUrl:r.data.delete_url}:{success:!1,error:"Upload gagal. Silakan coba lagi."}}catch(e){return console.error("ImgBB upload error:",e),{success:!1,error:"Gagal mengupload gambar. Periksa koneksi internet Anda."}}},Pl="products",dy=async()=>{try{const t=kh(ci,Pl),e=iC(t,sC("createdAt","desc")),n=await lC(e),r=[];return n.forEach(i=>{r.push({id:i.id,...i.data()})}),{success:!0,products:r}}catch(t){return console.error("Error fetching products:",t),{success:!1,error:"Gagal mengambil data produk."}}},J6=async t=>{try{const e=xl(ci,Pl,t),n=await S5(e);return n.exists()?{success:!0,product:{id:n.id,...n.data()}}:{success:!1,error:"Produk tidak ditemukan."}}catch(e){return console.error("Error fetching product:",e),{success:!1,error:"Gagal mengambil data produk."}}},Z6=async t=>{try{const e=kh(ci,Pl),n={...t,createdAt:Vu(),updatedAt:Vu()};return{success:!0,productId:(await uC(e,n)).id}}catch(e){return console.error("Error adding product:",e),{success:!1,error:"Gagal menambah produk."}}},eF=async(t,e)=>{try{const n=xl(ci,Pl,t),r={...e,updatedAt:Vu()};return await C5(n,r),{success:!0}}catch(n){return console.error("Error updating product:",n),{success:!1,error:"Gagal mengupdate produk."}}},tF=async t=>{try{const e=xl(ci,Pl,t);return await cC(e),{success:!0}}catch(e){return console.error("Error deleting product:",e),{success:!1,error:"Gagal menghapus produk."}}},HC=async t=>{try{const e=await X6(t);return e.success?{success:!0,imageUrl:e.imageUrl}:e}catch(e){return console.error("Error uploading image:",e),{success:!1,error:"Gagal mengupload gambar."}}},nF=()=>{const[t,e]=N.useState([]),[n,r]=N.useState(!0);N.useEffect(()=>{i()},[]);const i=async()=>{r(!0);const s=await dy();s.success?e(s.products.slice(0,9)):(console.error("Error loading products:",s.error),e([])),r(!1)};return n?m.jsx("section",{className:"section-padding",id:"collection",children:m.jsx("div",{className:"container",children:m.jsxs("div",{className:"section-header",children:[m.jsx("h2",{children:"Produk Unggulan"}),m.jsx("p",{children:"Loading products..."})]})})}):t.length===0?m.jsx("section",{className:"section-padding",id:"collection",children:m.jsx("div",{className:"container",children:m.jsxs("div",{className:"section-header",children:[m.jsx("h2",{children:"Produk Unggulan"}),m.jsx("p",{children:"Belum ada produk. Silakan tambahkan produk melalui admin panel."})]})})}):m.jsxs("section",{className:"section-padding",id:"collection",children:[m.jsxs("div",{className:"container",children:[m.jsxs("div",{className:"section-header",children:[m.jsx("h2",{children:"Produk Unggulan"}),m.jsx("p",{children:"Koleksi furniture premium pilihan terbaik kami"})]}),m.jsx("div",{className:"product-grid",children:t.map(s=>m.jsx(K6,{product:s},s.id))})]}),m.jsx("style",{children:`
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
      `})]})};function Wp(t){return Se({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"}}]})(t)}const rF=()=>{const t=()=>{zi.openWhatsApp(zi.defaultMessage)};return m.jsxs("section",{className:"contact-section section-padding",id:"contact",children:[m.jsxs("div",{className:"container",children:[m.jsxs("div",{className:"section-header",children:[m.jsx("h2",{children:"Hubungi Kami"}),m.jsx("p",{children:"Kami siap membantu Anda menemukan furniture impian"})]}),m.jsxs("div",{className:"contact-grid",children:[m.jsxs("div",{className:"contact-card",children:[m.jsx("div",{className:"icon-wrapper",children:m.jsx(Wp,{})}),m.jsx("h3",{children:"WhatsApp"}),m.jsx("p",{children:"+62 823-3030-2593"}),m.jsx("button",{onClick:t,className:"btn btn-primary",children:"Chat Sekarang"})]}),m.jsxs("div",{className:"contact-card",children:[m.jsx("div",{className:"icon-wrapper",children:m.jsx(mR,{})}),m.jsx("h3",{children:"Telepon"}),m.jsx("p",{children:"0895-4225-32976"}),m.jsx("p",{children:"0813-3344-1655"})]}),m.jsxs("div",{className:"contact-card",children:[m.jsx("div",{className:"icon-wrapper",children:m.jsx(dR,{})}),m.jsx("h3",{children:"Email"}),m.jsx("p",{children:"info@luxeliving.com"}),m.jsx("p",{children:"sales@luxeliving.com"})]}),m.jsxs("div",{className:"contact-card",children:[m.jsx("div",{className:"icon-wrapper",children:m.jsx(fR,{})}),m.jsx("h3",{children:"Lokasi"}),m.jsx("p",{children:"Jepara, Jawa Tengah"}),m.jsx("p",{children:"Indonesia"})]}),m.jsxs("div",{className:"contact-card",children:[m.jsx("div",{className:"icon-wrapper",children:m.jsx(sR,{})}),m.jsx("h3",{children:"Jam Operasional"}),m.jsx("p",{children:"Senin - Sabtu"}),m.jsx("p",{children:"08:00 - 17:00 WIB"})]}),m.jsxs("div",{className:"contact-card highlight",children:[m.jsx("h3",{children:"Layanan 24/7"}),m.jsx("p",{children:"WhatsApp kami aktif 24 jam untuk konsultasi dan pertanyaan Anda"}),m.jsxs("button",{onClick:t,className:"btn btn-primary",children:[m.jsx(Wp,{style:{marginRight:"8px"}}),"Mulai Chat"]})]})]})]}),m.jsx("style",{children:`
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
      `})]})},iF=()=>m.jsxs("footer",{className:"footer",children:[m.jsxs("div",{className:"container",children:[m.jsxs("div",{className:"footer-grid",children:[m.jsxs("div",{className:"footer-col",children:[m.jsx("h3",{children:"Jati Prime."}),m.jsx("p",{children:"Pusat furniture jepara berkualitas dengan harga bersahabat dan terpercaya."}),m.jsx("br",{}),m.jsx("h4",{children:"Metode Pembayaran"}),m.jsxs("p",{style:{fontSize:"0.9rem",marginBottom:"0.5rem"},children:["Bank BCA: 2470-0687-056",m.jsx("br",{}),"Bagus sajiwo"]}),m.jsxs("p",{style:{fontSize:"0.9rem"},children:[m.jsx("br",{}),"Bagus"]})]}),m.jsxs("div",{className:"footer-col",children:[m.jsx("h4",{children:"Produk"}),m.jsxs("ul",{children:[m.jsx("li",{children:m.jsx("a",{href:"#katalog",children:"Ruang Tamu"})}),m.jsx("li",{children:m.jsx("a",{href:"#katalog",children:"Kamar Tidur"})}),m.jsx("li",{children:m.jsx("a",{href:"#katalog",children:"Ruang Makan"})}),m.jsx("li",{children:m.jsx("a",{href:"#katalog",children:"Kantor"})})]})]}),m.jsxs("div",{className:"footer-col",children:[m.jsx("h4",{children:"Kontak Kami"}),m.jsxs("ul",{children:[m.jsx("li",{children:m.jsx("a",{href:"https://wa.me/62895422532976",children:"+62 8954-2253-2976 (WhatsApp)"})}),m.jsx("li",{children:m.jsx("a",{href:"https://www.instagram.com/jepara_mebel_indonesia",children:"Instagram"})}),m.jsx("li",{children:m.jsx("a",{href:"https://www.facebook.com/mebel.jepara.12720",children:"Facebook"})}),m.jsx("li",{children:m.jsx("a",{href:"http://tiktok.com/@jeparamebel",children:"TikTok"})})]})]}),m.jsxs("div",{className:"footer-col",children:[m.jsx("h4",{children:"Newsletter"}),m.jsx("p",{children:"Dapatkan info produk terbaru dan promo menarik."}),m.jsxs("div",{className:"newsletter-form",children:[m.jsx("input",{type:"email",placeholder:"Email Anda"}),m.jsx("button",{className:"btn btn-primary",children:"Daftar"})]})]})]}),m.jsx("div",{className:"footer-bottom",children:m.jsx("p",{children:"© 2025 Jati Prime. All rights reserved."})})]}),m.jsx("style",{children:`
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
      `})]}),sF=()=>{const[t,e]=N.useState(!1),n=()=>{zi.openWhatsApp(zi.defaultMessage)};return m.jsxs("button",{className:"whatsapp-floating-btn",onClick:n,onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),"aria-label":"Chat via WhatsApp",children:[m.jsx(Wp,{}),t&&m.jsx("span",{className:"tooltip",children:"Chat dengan Kami!"}),m.jsx("style",{children:`
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
      `})]})},oF=async(t,e)=>{try{return{success:!0,user:(await Aj(uy,t,e)).user}}catch(n){console.error("Login error:",n);let r="Login gagal. Silakan coba lagi.";return n.code==="auth/user-not-found"?r="Email tidak terdaftar.":n.code==="auth/wrong-password"?r="Password salah.":n.code==="auth/invalid-email"&&(r="Format email tidak valid."),{success:!1,error:r}}},aF=async()=>{try{return await Rj(uy),{success:!0}}catch(t){return console.error("Logout error:",t),{success:!1,error:"Logout gagal."}}},lF=t=>bj(uy,t),cF=()=>{const[t,e]=N.useState(""),[n,r]=N.useState(""),[i,s]=N.useState(!1),o=oo(),a=async l=>{l.preventDefault(),s(!0);const u=await oF(t,n);u.success?(q.success("Login berhasil!"),o("/admin/dashboard")):q.error(u.error),s(!1)};return m.jsxs("div",{className:"login-container",children:[m.jsxs("div",{className:"login-box",children:[m.jsxs("div",{className:"login-header",children:[m.jsx("h1",{children:"LuxeLiving Admin"}),m.jsx("p",{children:"Manage your furniture products"})]}),m.jsxs("form",{onSubmit:a,className:"login-form",children:[m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Email"}),m.jsx("input",{type:"email",value:t,onChange:l=>e(l.target.value),placeholder:"admin@luxeliving.com",required:!0,disabled:i})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Password"}),m.jsx("input",{type:"password",value:n,onChange:l=>r(l.target.value),placeholder:"••••••••",required:!0,disabled:i})]}),m.jsx("button",{type:"submit",className:"btn-login",disabled:i,children:i?"Logging in...":"Login"})]}),m.jsx("div",{className:"login-footer",children:m.jsx("a",{href:"/",children:"← Back to Website"})})]}),m.jsx("style",{children:`
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
      `})]})},Zs=()=>{const t=sr(),e=oo(),n=async()=>{(await aF()).success&&(q.success("Logout berhasil!"),e("/admin/login"))},r=[{path:"/admin/dashboard",icon:m.jsx(aR,{}),label:"Dashboard"},{path:"/admin/products",icon:m.jsx(fu,{}),label:"Products"},{path:"/admin/categories",icon:m.jsx(kc,{}),label:"Categories"}];return m.jsxs("div",{className:"sidebar",children:[m.jsxs("div",{className:"sidebar-header",children:[m.jsx("h2",{children:"LuxeLiving"}),m.jsx("p",{children:"Admin Panel"})]}),m.jsx("nav",{className:"sidebar-nav",children:r.map(i=>m.jsxs(Or,{to:i.path,className:`nav-item ${t.pathname===i.path?"active":""}`,children:[i.icon,m.jsx("span",{children:i.label})]},i.path))}),m.jsxs("div",{className:"sidebar-footer",children:[m.jsxs("a",{href:"/",target:"_blank",rel:"noopener noreferrer",className:"nav-item",children:[m.jsx(cR,{}),m.jsx("span",{children:"View Website"})]}),m.jsxs("button",{onClick:n,className:"nav-item logout-btn",children:[m.jsx(hR,{}),m.jsx("span",{children:"Logout"})]})]}),m.jsx("style",{children:`
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
      `})]})},uF=()=>{const[t,e]=N.useState({totalProducts:0,loading:!0});N.useEffect(()=>{n()},[]);const n=async()=>{const r=await dy();r.success?e({totalProducts:r.products.length,loading:!1}):e({...t,loading:!1})};return m.jsxs("div",{className:"admin-layout",children:[m.jsx(Zs,{}),m.jsxs("div",{className:"admin-content",children:[m.jsxs("div",{className:"page-header",children:[m.jsx("h1",{children:"Dashboard"}),m.jsx("p",{children:"Welcome to LuxeLiving Admin Panel"})]}),m.jsxs("div",{className:"stats-grid",children:[m.jsxs("div",{className:"stat-card",children:[m.jsx("div",{className:"stat-icon products",children:m.jsx(fu,{})}),m.jsxs("div",{className:"stat-info",children:[m.jsx("h3",{children:t.loading?"...":t.totalProducts}),m.jsx("p",{children:"Total Products"})]})]}),m.jsxs("div",{className:"stat-card",children:[m.jsx("div",{className:"stat-icon trending",children:m.jsx(gR,{})}),m.jsxs("div",{className:"stat-info",children:[m.jsx("h3",{children:"Active"}),m.jsx("p",{children:"Status"})]})]})]}),m.jsxs("div",{className:"quick-actions",children:[m.jsx("h2",{children:"Quick Actions"}),m.jsxs("div",{className:"actions-grid",children:[m.jsxs(Or,{to:"/admin/products/add",className:"action-card",children:[m.jsx(ks,{}),m.jsx("h3",{children:"Add New Product"}),m.jsx("p",{children:"Create a new furniture product"})]}),m.jsxs(Or,{to:"/admin/products",className:"action-card",children:[m.jsx(fu,{}),m.jsx("h3",{children:"Manage Products"}),m.jsx("p",{children:"View, edit, or delete products"})]})]})]})]}),m.jsx("style",{children:`
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
      `})]})},hF=()=>{const[t,e]=N.useState([]),[n,r]=N.useState(!0),[i,s]=N.useState(""),[o,a]=N.useState(null);N.useEffect(()=>{l()},[]);const l=async()=>{r(!0);const d=await dy();d.success?(e(d.products),console.log("Loaded products:",d.products)):q.error(d.error),r(!1)},u=async d=>{const p=await tF(d);p.success?(q.success("Produk berhasil dihapus!"),l(),a(null)):q.error(p.error)},h=t.filter(d=>d.name.toLowerCase().includes(i.toLowerCase())||d.category.toLowerCase().includes(i.toLowerCase()));return m.jsxs("div",{className:"admin-layout",children:[m.jsx(Zs,{}),m.jsxs("div",{className:"admin-content",children:[m.jsxs("div",{className:"page-header",children:[m.jsxs("div",{className:"page-title",children:[m.jsx("h1",{children:"Product Management"}),m.jsxs("p",{children:["Kelola katalog furniture Anda • ",t.length," produk total"]})]}),m.jsxs("div",{className:"header-actions",children:[m.jsxs("button",{onClick:l,className:"btn-refresh",title:"Refresh",children:[m.jsx(zT,{}),"Refresh"]}),m.jsxs(Or,{to:"/admin/products/add",className:"btn-primary",children:[m.jsx(ks,{})," Add Product"]})]})]}),m.jsx("div",{className:"toolbar",children:m.jsxs("div",{className:"search-box",children:[m.jsx(WT,{}),m.jsx("input",{type:"text",placeholder:"Search by name or category...",value:i,onChange:d=>s(d.target.value)})]})}),n?m.jsxs("div",{className:"loading-state",children:[m.jsx("div",{className:"spinner-large"}),m.jsx("p",{children:"Loading products..."})]}):h.length===0?m.jsxs("div",{className:"empty-state",children:[m.jsx(fu,{className:"empty-icon"}),m.jsx("h3",{children:"No products found"}),m.jsx("p",{children:i?"No products match your search. Try different keywords.":"Start by adding your first product to the catalog."}),!i&&m.jsxs(Or,{to:"/admin/products/add",className:"btn-primary",children:[m.jsx(ks,{})," Add Your First Product"]})]}):m.jsx("div",{className:"products-grid",children:h.map(d=>m.jsxs("div",{className:"product-card",children:[m.jsxs("div",{className:"product-image",children:[m.jsx("img",{src:d.image,alt:d.name}),m.jsxs("div",{className:"product-overlay",children:[m.jsx(Or,{to:`/admin/products/edit/${d.id}`,className:"overlay-btn btn-edit-overlay",children:m.jsx(oR,{})}),m.jsx("button",{onClick:()=>a(d),className:"overlay-btn btn-delete-overlay",children:m.jsx(bs,{})})]})]}),m.jsxs("div",{className:"product-info",children:[m.jsxs("div",{className:"product-header",children:[m.jsx("h3",{children:d.name}),m.jsx("span",{className:"category-badge",children:d.category})]}),m.jsx("p",{className:"product-price",children:d.price}),m.jsx("p",{className:"product-description",children:d.description})]})]},d.id))}),o&&m.jsx("div",{className:"modal-overlay",onClick:()=>a(null),children:m.jsxs("div",{className:"modal",onClick:d=>d.stopPropagation(),children:[m.jsxs("div",{className:"modal-header",children:[m.jsx(bs,{className:"modal-icon"}),m.jsx("h2",{children:"Delete Product?"})]}),m.jsxs("p",{children:['Are you sure you want to delete "',m.jsx("strong",{children:o.name}),'"?']}),m.jsx("p",{className:"modal-warning",children:"This action cannot be undone."}),m.jsxs("div",{className:"modal-actions",children:[m.jsx("button",{onClick:()=>a(null),className:"btn-cancel",children:"Cancel"}),m.jsxs("button",{onClick:()=>u(o.id),className:"btn-delete-confirm",children:[m.jsx(bs,{})," Delete Product"]})]})]})})]}),m.jsx("style",{children:`
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

        .page-title h1 {
          font-size: 2rem;
          color: #1a1a2e;
          margin-bottom: 0.5rem;
        }

        .page-title p {
          color: #666;
          font-size: 0.95rem;
        }

        .header-actions {
          display: flex;
          gap: 1rem;
        }

        .btn-refresh {
          padding: 0.75rem 1.25rem;
          background: white;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          color: #666;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .btn-refresh:hover {
          border-color: #D4A373;
          color: #D4A373;
          background: #fef8f3;
        }

        .btn-primary {
          background: linear-gradient(135deg, #D4A373 0%, #c59363 100%);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(212, 163, 115, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(212, 163, 115, 0.4);
        }

        .toolbar {
          margin-bottom: 2rem;
        }

        .search-box {
          background: white;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          max-width: 500px;
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

        .loading-state {
          background: white;
          padding: 4rem 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        }

        .spinner-large {
          width: 48px;
          height: 48px;
          border: 4px solid #f0f0f0;
          border-top-color: #D4A373;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin: 0 auto 1rem;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .empty-state {
          background: white;
          padding: 4rem 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        }

        .empty-icon {
          font-size: 4rem;
          color: #ddd;
          margin-bottom: 1.5rem;
        }

        .empty-state h3 {
          font-size: 1.5rem;
          color: #1a1a2e;
          margin-bottom: 0.75rem;
        }

        .empty-state p {
          color: #666;
          margin-bottom: 2rem;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .product-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }

        .product-image {
          position: relative;
          width: 100%;
          height: 250px;
          overflow: hidden;
          background: #f5f5f5;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .product-card:hover .product-overlay {
          opacity: 1;
        }

        .overlay-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-edit-overlay {
          background: #4a9eff;
          color: white;
        }

        .btn-edit-overlay:hover {
          background: #3a8eef;
          transform: scale(1.1);
        }

        .btn-delete-overlay {
          background: #ff4444;
          color: white;
        }

        .btn-delete-overlay:hover {
          background: #cc0000;
          transform: scale(1.1);
        }

        .product-info {
          padding: 1.5rem;
        }

        .product-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .product-info h3 {
          font-size: 1.125rem;
          color: #1a1a2e;
          margin: 0;
          flex: 1;
        }

        .category-badge {
          background: #e7f3ff;
          color: #0066cc;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .product-price {
          font-size: 1.25rem;
          font-weight: 700;
          color: #D4A373;
          margin-bottom: 0.75rem;
        }

        .product-description {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          max-width: 450px;
          width: 90%;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .modal-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .modal-icon {
          font-size: 2rem;
          color: #ff4444;
        }

        .modal h2 {
          color: #1a1a2e;
          font-size: 1.5rem;
          margin: 0;
        }

        .modal p {
          color: #666;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .modal-warning {
          color: #ff4444;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          margin-top: 2rem;
        }

        .btn-cancel {
          padding: 0.75rem 1.5rem;
          border: 2px solid #ddd;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          color: #666;
          transition: all 0.3s ease;
        }

        .btn-cancel:hover {
          background: #f5f5f5;
          border-color: #999;
        }

        .btn-delete-confirm {
          padding: 0.75rem 1.5rem;
          border: none;
          background: #ff4444;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .btn-delete-confirm:hover {
          background: #cc0000;
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

          .header-actions {
            width: 100%;
            flex-direction: column;
          }

          .btn-refresh,
          .btn-primary {
            width: 100%;
            justify-content: center;
          }

          .search-box {
            max-width: 100%;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }

          .modal-actions {
            flex-direction: column-reverse;
          }

          .btn-cancel,
          .btn-delete-confirm {
            width: 100%;
            justify-content: center;
          }
        }
      `})]})},dF=()=>{const t=oo(),[e,n]=N.useState(!1),[r,i]=N.useState(null),[s,o]=N.useState(null),[a,l]=N.useState([]),[u,h]=N.useState({name:"",category:"",price:"",description:"",image:""});N.useEffect(()=>{d()},[]);const d=async()=>{const S=await Mh();S.success?l(S.categories):(console.error("Error loading categories:",S.error),l([{id:"1",name:"Sofa"},{id:"2",name:"Meja"},{id:"3",name:"Kursi"},{id:"4",name:"Tempat Tidur"},{id:"5",name:"Lemari"},{id:"6",name:"Lampu"}]))},p=S=>{const A=S.target.files[0];if(A){if(A.size>10*1024*1024){q.error("Ukuran gambar maksimal 10MB");return}o(A),i(URL.createObjectURL(A)),h({...u,image:""})}},y=S=>{h({...u,[S.target.name]:S.target.value})},I=async S=>{if(S.preventDefault(),!u.name||!u.category||!u.price||!u.description){q.error("Semua field harus diisi!");return}if(!s&&!u.image){q.error("Gambar produk harus diupload atau URL diisi!");return}n(!0);try{let A=u.image;if(s){q.info("Uploading image...");const v=await HC(s);if(!v.success){q.error(v.error),n(!1);return}A=v.imageUrl}const E={name:u.name,category:u.category,price:u.price,description:u.description,image:A},_=await Z6(E);_.success?(q.success("Produk berhasil ditambahkan!"),t("/admin/products")):q.error(_.error)}catch(A){console.error("Error:",A),q.error("Gagal menambahkan produk")}n(!1)};return m.jsxs("div",{className:"admin-layout",children:[m.jsx(Zs,{}),m.jsxs("div",{className:"admin-content",children:[m.jsxs("div",{className:"page-header",children:[m.jsxs("div",{children:[m.jsx("h1",{children:"Add New Product"}),m.jsx("p",{className:"subtitle",children:"Create a new furniture product for your catalog"})]}),m.jsx("button",{onClick:()=>t("/admin/products"),className:"btn-back",children:"← Back to Products"})]}),m.jsx("div",{className:"form-container",children:m.jsxs("form",{onSubmit:I,children:[m.jsxs("div",{className:"form-section upload-section",children:[m.jsxs("div",{className:"section-header",children:[m.jsx(uR,{}),m.jsxs("div",{children:[m.jsx("h3",{children:"Product Image"}),m.jsx("p",{children:"Upload a high-quality image or provide an image URL"})]})]}),m.jsxs("div",{className:"upload-wrapper",children:[r?m.jsxs("div",{className:"image-preview-container",children:[m.jsxs("div",{className:"image-preview",children:[m.jsx("img",{src:r,alt:"Preview"}),m.jsx("button",{type:"button",onClick:()=>{i(null),o(null)},className:"remove-image",title:"Remove image",children:m.jsx(qm,{})})]}),m.jsxs("p",{className:"image-info",children:[m.jsx(iR,{})," Image ready to upload"]})]}):m.jsx("div",{className:"upload-area",children:m.jsxs("label",{className:"upload-label",children:[m.jsx(ip,{className:"upload-icon"}),m.jsx("span",{className:"upload-title",children:"Click to upload image"}),m.jsx("span",{className:"upload-subtitle",children:"or drag and drop"}),m.jsx("span",{className:"upload-format",children:"PNG, JPG, WEBP (max 10MB)"}),m.jsx("input",{type:"file",accept:"image/*",onChange:p,hidden:!0})]})}),m.jsx("div",{className:"divider-or",children:m.jsx("span",{children:"OR"})}),m.jsxs("div",{className:"url-input-wrapper",children:[m.jsx("label",{children:"Image URL"}),m.jsx("input",{type:"url",name:"image",value:u.image,onChange:y,placeholder:"https://example.com/image.jpg",disabled:!!s,className:"url-input"}),m.jsx("small",{children:"Paste a direct link to an image from the web"})]})]})]}),m.jsxs("div",{className:"form-section",children:[m.jsxs("div",{className:"section-header",children:[m.jsx("h3",{children:"Product Details"}),m.jsx("p",{children:"Fill in the product information"})]}),m.jsxs("div",{className:"form-grid",children:[m.jsxs("div",{className:"form-group full-width",children:[m.jsxs("label",{children:["Product Name ",m.jsx("span",{className:"required",children:"*"})]}),m.jsx("input",{type:"text",name:"name",value:u.name,onChange:y,placeholder:"e.g. Modern Minimalist Sofa",required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsxs("label",{children:["Category ",m.jsx("span",{className:"required",children:"*"})]}),m.jsxs("select",{name:"category",value:u.category,onChange:y,required:!0,children:[m.jsx("option",{value:"",children:"Select Category"}),a.map(S=>m.jsx("option",{value:S.name,children:S.name},S.id))]})]}),m.jsxs("div",{className:"form-group",children:[m.jsxs("label",{children:["Price ",m.jsx("span",{className:"required",children:"*"})]}),m.jsx("input",{type:"text",name:"price",value:u.price,onChange:y,placeholder:"e.g. Rp 5.500.000",required:!0})]}),m.jsxs("div",{className:"form-group full-width",children:[m.jsxs("label",{children:["Description ",m.jsx("span",{className:"required",children:"*"})]}),m.jsx("textarea",{name:"description",value:u.description,onChange:y,placeholder:"Describe the product features, materials, dimensions, etc.",rows:"5",required:!0})]})]})]}),m.jsxs("div",{className:"form-actions",children:[m.jsx("button",{type:"button",onClick:()=>t("/admin/products"),className:"btn-cancel",disabled:e,children:"Cancel"}),m.jsx("button",{type:"submit",className:"btn-submit",disabled:e,children:e?m.jsxs(m.Fragment,{children:[m.jsx("span",{className:"spinner"}),"Saving..."]}):m.jsxs(m.Fragment,{children:[m.jsx($T,{}),"Save Product"]})})]})]})})]}),m.jsx("style",{children:`
  .admin - content {
  margin - left: 250px;
  padding: 2rem;
  min - height: 100vh;
  background: #f5f7fa;
}

        .page - header {
  display: flex;
  justify - content: space - between;
  align - items: flex - start;
  margin - bottom: 2rem;
}

        .page - header h1 {
  font - size: 2rem;
  color: #1a1a2e;
  margin - bottom: 0.5rem;
}

        .subtitle {
  color: #666;
  font - size: 0.95rem;
}

        .btn - back {
  padding: 0.75rem 1.5rem;
  background: white;
  border: 1px solid #ddd;
  border - radius: 8px;
  font - weight: 600;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
}

        .btn - back:hover {
  background: #f5f5f5;
  border - color: #D4A373;
  color: #D4A373;
}

        .form - container {
  background: white;
  border - radius: 16px;
  box - shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  max - width: 900px;
}

        .form - section {
  padding: 2.5rem;
  border - bottom: 1px solid #f0f0f0;
}

        .form - section: last - of - type {
  border - bottom: none;
}

        .upload - section {
  background: linear - gradient(135deg, #f8f9fa 0 %, #fff 100 %);
}

        .section - header {
  display: flex;
  align - items: flex - start;
  gap: 1rem;
  margin - bottom: 2rem;
}

        .section - header svg {
  font - size: 1.5rem;
  color: #D4A373;
  margin - top: 0.25rem;
}

        .section - header h3 {
  font - size: 1.25rem;
  color: #1a1a2e;
  margin - bottom: 0.25rem;
}

        .section - header p {
  color: #666;
  font - size: 0.9rem;
}

        .upload - wrapper {
  display: flex;
  flex - direction: column;
  gap: 1.5rem;
}

        .upload - area {
  border: 2px dashed #d0d0d0;
  border - radius: 12px;
  background: white;
  transition: all 0.3s ease;
}

        .upload - area:hover {
  border - color: #D4A373;
  background: #fefaf5;
}

        .upload - label {
  display: flex;
  flex - direction: column;
  align - items: center;
  justify - content: center;
  padding: 3rem 2rem;
  cursor: pointer;
  text - align: center;
}

        .upload - icon {
  font - size: 3.5rem;
  color: #D4A373;
  margin - bottom: 1rem;
}

        .upload - title {
  font - size: 1.1rem;
  font - weight: 600;
  color: #333;
  margin - bottom: 0.5rem;
  display: block;
}

        .upload - subtitle {
  font - size: 0.95rem;
  color: #666;
  margin - bottom: 0.75rem;
  display: block;
}

        .upload - format {
  font - size: 0.85rem;
  color: #999;
  background: #f5f5f5;
  padding: 0.5rem 1rem;
  border - radius: 20px;
}

        .image - preview - container {
  display: flex;
  flex - direction: column;
  align - items: center;
  gap: 1rem;
}

        .image - preview {
  position: relative;
  max - width: 400px;
  width: 100 %;
  border - radius: 12px;
  overflow: hidden;
  box - shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

        .image - preview img {
  width: 100 %;
  display: block;
}

        .remove - image {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ff4444;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border - radius: 50 %;
  cursor: pointer;
  display: flex;
  align - items: center;
  justify - content: center;
  font - size: 1.25rem;
  transition: all 0.3s ease;
  box - shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

        .remove - image:hover {
  background: #cc0000;
  transform: scale(1.1);
}

        .image - info {
  display: flex;
  align - items: center;
  gap: 0.5rem;
  color: #22c55e;
  font - size: 0.9rem;
  font - weight: 600;
}

        .divider - or {
  text - align: center;
  position: relative;
  margin: 1rem 0;
}

        .divider - or span {
  background: white;
  padding: 0 1rem;
  color: #999;
  font - weight: 600;
  font - size: 0.85rem;
  position: relative;
  z - index: 1;
}

        .divider - or::before {
  content: '';
  position: absolute;
  top: 50 %;
  left: 0;
  right: 0;
  height: 1px;
  background: #e0e0e0;
}

        .url - input - wrapper {
  display: flex;
  flex - direction: column;
  gap: 0.5rem;
}

        .url - input - wrapper label {
  font - weight: 600;
  color: #333;
  font - size: 0.95rem;
}

        .url - input {
  padding: 0.875rem;
  border: 2px solid #e0e0e0;
  border - radius: 8px;
  font - size: 1rem;
  transition: all 0.3s ease;
}

        .url - input:focus {
  outline: none;
  border - color: #D4A373;
  box - shadow: 0 0 0 3px rgba(212, 163, 115, 0.1);
}

        .url - input:disabled {
  background: #f5f5f5;
  cursor: not - allowed;
  opacity: 0.6;
}

        .url - input - wrapper small {
  color: #999;
  font - size: 0.85rem;
}

        .form - grid {
  display: grid;
  grid - template - columns: 1fr 1fr;
  gap: 1.5rem;
}

        .form - group.full - width {
  grid - column: 1 / -1;
}

        .form - group label {
  display: block;
  margin - bottom: 0.5rem;
  font - weight: 600;
  color: #333;
  font - size: 0.95rem;
}

        .required {
  color: #ff4444;
}

        .form - group input,
        .form - group select,
        .form - group textarea {
  width: 100 %;
  padding: 0.875rem;
  border: 2px solid #e0e0e0;
  border - radius: 8px;
  font - size: 1rem;
  transition: all 0.3s ease;
  font - family: inherit;
}

        .form - group input: focus,
        .form - group select: focus,
        .form - group textarea:focus {
  outline: none;
  border - color: #D4A373;
  box - shadow: 0 0 0 3px rgba(212, 163, 115, 0.1);
}

        .form - group textarea {
  resize: vertical;
  min - height: 120px;
}

        .form - actions {
  padding: 2rem 2.5rem;
  background: #f8f9fa;
  display: flex;
  gap: 1rem;
  justify - content: flex - end;
  border - radius: 0 0 16px 16px;
}

        .btn - cancel,
        .btn - submit {
  padding: 0.875rem 2rem;
  border: none;
  border - radius: 8px;
  font - weight: 600;
  font - size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline - flex;
  align - items: center;
  gap: 0.5rem;
}

        .btn - cancel {
  background: white;
  color: #666;
  border: 2px solid #ddd;
}

        .btn - cancel: hover: not(: disabled) {
  background: #f5f5f5;
  border - color: #999;
}

        .btn - submit {
  background: linear - gradient(135deg, #D4A373 0 %, #c59363 100 %);
  color: white;
  box - shadow: 0 4px 12px rgba(212, 163, 115, 0.3);
}

        .btn - submit: hover: not(: disabled) {
  transform: translateY(-2px);
  box - shadow: 0 6px 16px rgba(212, 163, 115, 0.4);
}

        .btn - submit: disabled,
        .btn - cancel:disabled {
  opacity: 0.6;
  cursor: not - allowed;
}

        .spinner {
  width: 16px;
  height: 16px;
  border: 2px solid white;
  border - top - color: transparent;
  border - radius: 50 %;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
          to { transform: rotate(360deg); }
}

@media(max - width: 768px) {
          .admin - content {
    margin - left: 70px;
    padding: 1rem;
  }

          .page - header {
    flex - direction: column;
    gap: 1rem;
  }

          .form - grid {
    grid - template - columns: 1fr;
  }

          .form - section {
    padding: 1.5rem;
  }

          .form - actions {
    padding: 1.5rem;
    flex - direction: column - reverse;
  }

          .btn - cancel,
          .btn - submit {
    width: 100 %;
    justify - content: center;
  }
}
`})]})},fF=()=>{const{id:t}=Cb(),e=oo(),[n,r]=N.useState(!1),[i,s]=N.useState(!0),[o,a]=N.useState(null),[l,u]=N.useState(null),[h,d]=N.useState([]),[p,y]=N.useState({name:"",category:"",price:"",description:"",image:""});N.useEffect(()=>{S(),I()},[t]);const I=async()=>{const v=await Mh();v.success?d(v.categories):d([{id:"1",name:"Sofa"},{id:"2",name:"Meja"},{id:"3",name:"Kursi"},{id:"4",name:"Tempat Tidur"},{id:"5",name:"Lemari"},{id:"6",name:"Lampu"}])},S=async()=>{const v=await J6(t);v.success?(y(v.product),a(v.product.image)):(q.error("Produk tidak ditemukan"),e("/admin/products")),s(!1)},A=v=>{const b=v.target.files[0];if(b){if(b.size>10*1024*1024){q.error("Ukuran gambar maksimal 10MB");return}u(b),a(URL.createObjectURL(b))}},E=v=>{y({...p,[v.target.name]:v.target.value})},_=async v=>{if(v.preventDefault(),!p.name||!p.category||!p.price||!p.description){q.error("Semua field harus diisi!");return}r(!0);try{let b=p.image;if(l){q.info("Uploading new image...");const x=await HC(l);if(!x.success){q.error(x.error),r(!1);return}b=x.imageUrl}const L={name:p.name,category:p.category,price:p.price,description:p.description,image:b},M=await eF(t,L);M.success?(q.success("Produk berhasil diupdate!"),e("/admin/products")):q.error(M.error)}catch{q.error("Gagal mengupdate produk")}r(!1)};return i?m.jsxs("div",{className:"admin-layout",children:[m.jsx(Zs,{}),m.jsx("div",{className:"admin-content",children:m.jsx("div",{className:"loading",children:"Loading product..."})})]}):m.jsxs("div",{className:"admin-layout",children:[m.jsx(Zs,{}),m.jsxs("div",{className:"admin-content",children:[m.jsx("div",{className:"page-header",children:m.jsx("h1",{children:"Edit Product"})}),m.jsx("div",{className:"form-container",children:m.jsxs("form",{onSubmit:_,children:[m.jsxs("div",{className:"form-section",children:[m.jsx("h3",{children:"Product Image"}),m.jsx("div",{className:"image-upload-area",children:o?m.jsxs("div",{className:"image-preview",children:[m.jsx("img",{src:o,alt:"Preview"}),m.jsx("button",{type:"button",onClick:()=>{a(null),u(null)},className:"remove-image",children:m.jsx(qm,{})}),m.jsxs("label",{className:"change-image",children:[m.jsx(ip,{})," Change Image",m.jsx("input",{type:"file",accept:"image/*",onChange:A,hidden:!0})]})]}):m.jsxs("label",{className:"upload-label",children:[m.jsx(ip,{}),m.jsx("span",{children:"Click to upload new image"}),m.jsx("input",{type:"file",accept:"image/*",onChange:A,hidden:!0})]})})]}),m.jsxs("div",{className:"form-section",children:[m.jsx("h3",{children:"Product Details"}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Product Name *"}),m.jsx("input",{type:"text",name:"name",value:p.name,onChange:E,required:!0})]}),m.jsxs("div",{className:"form-row",children:[m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Category *"}),m.jsxs("select",{name:"category",value:p.category,onChange:E,required:!0,children:[m.jsx("option",{value:"",children:"Select Category"}),h.map(v=>m.jsx("option",{value:v.name,children:v.name},v.id))]})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Price *"}),m.jsx("input",{type:"text",name:"price",value:p.price,onChange:E,required:!0})]})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Description *"}),m.jsx("textarea",{name:"description",value:p.description,onChange:E,rows:"4",required:!0})]})]}),m.jsxs("div",{className:"form-actions",children:[m.jsx("button",{type:"button",onClick:()=>e("/admin/products"),className:"btn-cancel",disabled:n,children:"Cancel"}),m.jsxs("button",{type:"submit",className:"btn-submit",disabled:n,children:[m.jsx($T,{})," ",n?"Updating...":"Update Product"]})]})]})})]}),m.jsx("style",{children:`
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
      `})]})},pF=()=>{const[t,e]=N.useState([]),[n,r]=N.useState(!0),[i,s]=N.useState(!1),[o,a]=N.useState(""),[l,u]=N.useState(null);N.useEffect(()=>{h()},[]);const h=async()=>{r(!0);const y=await Mh();y.success?(e(y.categories),console.log("Loaded categories:",y.categories)):q.error(y.error),r(!1)},d=async y=>{if(y.preventDefault(),!o.trim()){q.error("Nama kategori harus diisi!");return}const I=await H6({name:o});I.success?(q.success("Kategori berhasil ditambahkan!"),a(""),s(!1),h()):q.error(I.error)},p=async y=>{const I=await q6(y);I.success?(q.success("Kategori berhasil dihapus!"),h(),u(null)):q.error(I.error)};return m.jsxs("div",{className:"admin-layout",children:[m.jsx(Zs,{}),m.jsxs("div",{className:"admin-content",children:[m.jsxs("div",{className:"page-header",children:[m.jsxs("div",{className:"page-title",children:[m.jsx("h1",{children:"Category Management"}),m.jsxs("p",{children:["Kelola kategori produk • ",t.length," kategori total"]})]}),m.jsxs("div",{className:"header-actions",children:[m.jsxs("button",{onClick:h,className:"btn-refresh",title:"Refresh",children:[m.jsx(zT,{}),"Refresh"]}),m.jsxs("button",{onClick:()=>s(!0),className:"btn-primary",children:[m.jsx(ks,{})," Add Category"]})]})]}),n?m.jsxs("div",{className:"loading-state",children:[m.jsx("div",{className:"spinner-large"}),m.jsx("p",{children:"Loading categories..."})]}):m.jsx(m.Fragment,{children:t.length===0?m.jsxs("div",{className:"empty-state",children:[m.jsx(kc,{className:"empty-icon"}),m.jsx("h3",{children:"No categories found"}),m.jsx("p",{children:"Start by adding your first category."}),m.jsxs("button",{onClick:()=>s(!0),className:"btn-primary",children:[m.jsx(ks,{})," Add Your First Category"]})]}):m.jsx("div",{className:"categories-grid",children:t.map(y=>m.jsxs("div",{className:"category-card",children:[m.jsx("div",{className:"category-icon",children:m.jsx(kc,{})}),m.jsx("div",{className:"category-info",children:m.jsx("h3",{children:y.name})}),m.jsx("button",{onClick:()=>u(y),className:"btn-delete-card",title:"Delete category",children:m.jsx(bs,{})})]},y.id))})}),i&&m.jsx("div",{className:"modal-overlay",onClick:()=>s(!1),children:m.jsxs("div",{className:"modal",onClick:y=>y.stopPropagation(),children:[m.jsxs("div",{className:"modal-header",children:[m.jsx(kc,{className:"modal-icon-add"}),m.jsx("h2",{children:"Add New Category"})]}),m.jsxs("form",{onSubmit:d,children:[m.jsxs("div",{className:"form-group",children:[m.jsx("label",{children:"Category Name *"}),m.jsx("input",{type:"text",value:o,onChange:y=>a(y.target.value),placeholder:"e.g. Sofa, Meja, Kursi",autoFocus:!0,required:!0})]}),m.jsxs("div",{className:"modal-actions",children:[m.jsx("button",{type:"button",onClick:()=>{s(!1),a("")},className:"btn-cancel",children:"Cancel"}),m.jsxs("button",{type:"submit",className:"btn-submit",children:[m.jsx(ks,{})," Add Category"]})]})]})]})}),l&&m.jsx("div",{className:"modal-overlay",onClick:()=>u(null),children:m.jsxs("div",{className:"modal",onClick:y=>y.stopPropagation(),children:[m.jsxs("div",{className:"modal-header",children:[m.jsx(bs,{className:"modal-icon"}),m.jsx("h2",{children:"Delete Category?"})]}),m.jsxs("p",{children:['Are you sure you want to delete "',m.jsx("strong",{children:l.name}),'"?']}),m.jsx("p",{className:"modal-warning",children:"This action cannot be undone."}),m.jsxs("div",{className:"modal-actions",children:[m.jsx("button",{onClick:()=>u(null),className:"btn-cancel",children:"Cancel"}),m.jsxs("button",{onClick:()=>p(l.id),className:"btn-delete-confirm",children:[m.jsx(bs,{})," Delete Category"]})]})]})})]}),m.jsx("style",{children:`
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

        .page-title h1 {
          font-size: 2rem;
          color: #1a1a2e;
          margin-bottom: 0.5rem;
        }

        .page-title p {
          color: #666;
          font-size: 0.95rem;
        }

        .header-actions {
          display: flex;
          gap: 1rem;
        }

        .btn-refresh {
          padding: 0.75rem 1.25rem;
          background: white;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          color: #666;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .btn-refresh:hover {
          border-color: #D4A373;
          color: #D4A373;
          background: #fef8f3;
        }

        .btn-primary {
          background: linear-gradient(135deg, #D4A373 0%, #c59363 100%);
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(212, 163, 115, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(212, 163, 115, 0.4);
        }

        .loading-state {
          background: white;
          padding: 4rem 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        }

        .spinner-large {
          width: 48px;
          height: 48px;
          border: 4px solid #f0f0f0;
          border-top-color: #D4A373;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin: 0 auto 1rem;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .empty-state {
          background: white;
          padding: 4rem 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        }

        .empty-icon {
          font-size: 4rem;
          color: #ddd;
          margin-bottom: 1.5rem;
        }

        .empty-state h3 {
          font-size: 1.5rem;
          color: #1a1a2e;
          margin-bottom: 0.75rem;
        }

        .empty-state p {
          color: #666;
          margin-bottom: 2rem;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .category-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 1rem;
          position: relative;
        }

        .category-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }

        .category-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #D4A373 0%, #c59363 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .category-icon svg {
          font-size: 1.75rem;
          color: white;
        }

        .category-info {
          flex: 1;
        }

        .category-info h3 {
          font-size: 1.125rem;
          color: #1a1a2e;
          margin: 0;
        }

        .btn-delete-card {
          width: 36px;
          height: 36px;
          background: #ffe7e7;
          color: #ff4444;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .btn-delete-card:hover {
          background: #ff4444;
          color: white;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          max-width: 450px;
          width: 90%;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .modal-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .modal-icon {
          font-size: 2rem;
          color: #ff4444;
        }

        .modal-icon-add {
          font-size: 2rem;
          color: #D4A373;
        }

        .modal h2 {
          color: #1a1a2e;
          font-size: 1.5rem;
          margin: 0;
        }

        .modal p {
          color: #666;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .modal-warning {
          color: #ff4444;
          font-weight: 600;
          font-size: 0.9rem;
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

        .form-group input {
          width: 100%;
          padding: 0.875rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus {
          outline: none;
          border-color: #D4A373;
          box-shadow: 0 0 0 3px rgba(212, 163, 115, 0.1);
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          margin-top: 2rem;
        }

        .btn-cancel {
          padding: 0.75rem 1.5rem;
          border: 2px solid #ddd;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          color: #666;
          transition: all 0.3s ease;
        }

        .btn-cancel:hover {
          background: #f5f5f5;
          border-color: #999;
        }

        .btn-submit {
          padding: 0.75rem 1.5rem;
          border: none;
          background: linear-gradient(135deg, #D4A373 0%, #c59363 100%);
          color: white;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .btn-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(212, 163, 115, 0.3);
        }

        .btn-delete-confirm {
          padding: 0.75rem 1.5rem;
          border: none;
          background: #ff4444;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .btn-delete-confirm:hover {
          background: #cc0000;
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

          .header-actions {
            width: 100%;
            flex-direction: column;
          }

          .btn-refresh,
          .btn-primary {
            width: 100%;
            justify-content: center;
          }

          .categories-grid {
            grid-template-columns: 1fr;
          }

          .category-card {
            padding: 1.5rem;
          }

          .category-icon {
            width: 50px;
            height: 50px;
          }

          .modal-actions {
            flex-direction: column-reverse;
          }

          .btn-cancel,
          .btn-submit,
          .btn-delete-confirm {
            width: 100%;
            justify-content: center;
          }
        }
      `})]})},mF=()=>{const[t,e]=N.useState(null),[n,r]=N.useState(!0);return N.useEffect(()=>{const i=lF(s=>{e(s),r(!1)});return()=>i()},[]),{user:t,loading:n,isAuthenticated:!!t}},Go=({children:t})=>{const{user:e,loading:n}=mF();return n?m.jsxs("div",{style:sw.loadingContainer,children:[m.jsx("div",{style:sw.spinner}),m.jsx("p",{children:"Loading..."})]}):e?t:m.jsx(AT,{to:"/admin/login",replace:!0})},sw={loadingContainer:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",gap:"1rem"},spinner:{width:"40px",height:"40px",border:"4px solid #f3f3f3",borderTop:"4px solid #2A2A2A",borderRadius:"50%",animation:"spin 1s linear infinite"}},gF=()=>m.jsxs(m.Fragment,{children:[m.jsx(yR,{}),m.jsxs("main",{children:[m.jsx(kL,{}),m.jsx(G6,{}),m.jsx(nF,{}),m.jsx(rF,{})]}),m.jsx(iF,{}),m.jsx(sF,{})]});function yF(){return m.jsxs(h2,{children:[m.jsxs(Bb,{children:[m.jsx(Dn,{path:"/",element:m.jsx(gF,{})}),m.jsx(Dn,{path:"/admin/login",element:m.jsx(cF,{})}),m.jsx(Dn,{path:"/admin/dashboard",element:m.jsx(Go,{children:m.jsx(uF,{})})}),m.jsx(Dn,{path:"/admin/products",element:m.jsx(Go,{children:m.jsx(hF,{})})}),m.jsx(Dn,{path:"/admin/products/add",element:m.jsx(Go,{children:m.jsx(dF,{})})}),m.jsx(Dn,{path:"/admin/products/edit/:id",element:m.jsx(Go,{children:m.jsx(fF,{})})}),m.jsx(Dn,{path:"/admin/categories",element:m.jsx(Go,{children:m.jsx(pF,{})})}),m.jsx(Dn,{path:"*",element:m.jsx(AT,{to:"/",replace:!0})})]}),m.jsx(tR,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),m.jsx("style",{children:`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `})]})}sf.createRoot(document.getElementById("root")).render(m.jsx(le.StrictMode,{children:m.jsx(yF,{})}));
