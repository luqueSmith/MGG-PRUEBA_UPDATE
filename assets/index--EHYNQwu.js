(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function l(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function r(d){if(d.ep)return;d.ep=!0;const p=l(d);fetch(d.href,p)}})();function W1(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var uu={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uh;function $1(){if(Uh)return wo;Uh=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function l(r,d,p){var g=null;if(p!==void 0&&(g=""+p),d.key!==void 0&&(g=""+d.key),"key"in d){p={};for(var h in d)h!=="key"&&(p[h]=d[h])}else p=d;return d=p.ref,{$$typeof:a,type:r,key:g,ref:d!==void 0?d:null,props:p}}return wo.Fragment=s,wo.jsx=l,wo.jsxs=l,wo}var Bh;function e2(){return Bh||(Bh=1,uu.exports=$1()),uu.exports}var i=e2(),du={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ph;function t2(){if(Ph)return ue;Ph=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),G=Symbol.iterator;function y(A){return A===null||typeof A!="object"?null:(A=G&&A[G]||A["@@iterator"],typeof A=="function"?A:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,I={};function H(A,B,W){this.props=A,this.context=B,this.refs=I,this.updater=W||M}H.prototype.isReactComponent={},H.prototype.setState=function(A,B){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,B,"setState")},H.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function X(){}X.prototype=H.prototype;function L(A,B,W){this.props=A,this.context=B,this.refs=I,this.updater=W||M}var D=L.prototype=new X;D.constructor=L,j(D,H.prototype),D.isPureReactComponent=!0;var Q=Array.isArray;function Y(){}var q={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function F(A,B,W){var te=W.ref;return{$$typeof:a,type:A,key:B,ref:te!==void 0?te:null,props:W}}function Z(A,B){return F(A.type,B,A.props)}function oe(A){return typeof A=="object"&&A!==null&&A.$$typeof===a}function de(A){var B={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(W){return B[W]})}var Ue=/\/+/g;function Oe(A,B){return typeof A=="object"&&A!==null&&A.key!=null?de(""+A.key):B.toString(36)}function Me(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(Y,Y):(A.status="pending",A.then(function(B){A.status==="pending"&&(A.status="fulfilled",A.value=B)},function(B){A.status==="pending"&&(A.status="rejected",A.reason=B)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function C(A,B,W,te,ce){var he=typeof A;(he==="undefined"||he==="boolean")&&(A=null);var Ae=!1;if(A===null)Ae=!0;else switch(he){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(A.$$typeof){case a:case s:Ae=!0;break;case x:return Ae=A._init,C(Ae(A._payload),B,W,te,ce)}}if(Ae)return ce=ce(A),Ae=te===""?"."+Oe(A,0):te,Q(ce)?(W="",Ae!=null&&(W=Ae.replace(Ue,"$&/")+"/"),C(ce,B,W,"",function(da){return da})):ce!=null&&(oe(ce)&&(ce=Z(ce,W+(ce.key==null||A&&A.key===ce.key?"":(""+ce.key).replace(Ue,"$&/")+"/")+Ae)),B.push(ce)),1;Ae=0;var it=te===""?".":te+":";if(Q(A))for(var Be=0;Be<A.length;Be++)te=A[Be],he=it+Oe(te,Be),Ae+=C(te,B,W,he,ce);else if(Be=y(A),typeof Be=="function")for(A=Be.call(A),Be=0;!(te=A.next()).done;)te=te.value,he=it+Oe(te,Be++),Ae+=C(te,B,W,he,ce);else if(he==="object"){if(typeof A.then=="function")return C(Me(A),B,W,te,ce);throw B=String(A),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function J(A,B,W){if(A==null)return A;var te=[],ce=0;return C(A,te,"","",function(he){return B.call(W,he,ce++)}),te}function $(A){if(A._status===-1){var B=A._result;B=B(),B.then(function(W){(A._status===0||A._status===-1)&&(A._status=1,A._result=W)},function(W){(A._status===0||A._status===-1)&&(A._status=2,A._result=W)}),A._status===-1&&(A._status=0,A._result=B)}if(A._status===1)return A._result.default;throw A._result}var re=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},xe={map:J,forEach:function(A,B,W){J(A,function(){B.apply(this,arguments)},W)},count:function(A){var B=0;return J(A,function(){B++}),B},toArray:function(A){return J(A,function(B){return B})||[]},only:function(A){if(!oe(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return ue.Activity=k,ue.Children=xe,ue.Component=H,ue.Fragment=l,ue.Profiler=d,ue.PureComponent=L,ue.StrictMode=r,ue.Suspense=f,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,ue.__COMPILER_RUNTIME={__proto__:null,c:function(A){return q.H.useMemoCache(A)}},ue.cache=function(A){return function(){return A.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(A,B,W){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var te=j({},A.props),ce=A.key;if(B!=null)for(he in B.key!==void 0&&(ce=""+B.key),B)!K.call(B,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&B.ref===void 0||(te[he]=B[he]);var he=arguments.length-2;if(he===1)te.children=W;else if(1<he){for(var Ae=Array(he),it=0;it<he;it++)Ae[it]=arguments[it+2];te.children=Ae}return F(A.type,ce,te)},ue.createContext=function(A){return A={$$typeof:g,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:p,_context:A},A},ue.createElement=function(A,B,W){var te,ce={},he=null;if(B!=null)for(te in B.key!==void 0&&(he=""+B.key),B)K.call(B,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(ce[te]=B[te]);var Ae=arguments.length-2;if(Ae===1)ce.children=W;else if(1<Ae){for(var it=Array(Ae),Be=0;Be<Ae;Be++)it[Be]=arguments[Be+2];ce.children=it}if(A&&A.defaultProps)for(te in Ae=A.defaultProps,Ae)ce[te]===void 0&&(ce[te]=Ae[te]);return F(A,he,ce)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(A){return{$$typeof:h,render:A}},ue.isValidElement=oe,ue.lazy=function(A){return{$$typeof:x,_payload:{_status:-1,_result:A},_init:$}},ue.memo=function(A,B){return{$$typeof:b,type:A,compare:B===void 0?null:B}},ue.startTransition=function(A){var B=q.T,W={};q.T=W;try{var te=A(),ce=q.S;ce!==null&&ce(W,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(Y,re)}catch(he){re(he)}finally{B!==null&&W.types!==null&&(B.types=W.types),q.T=B}},ue.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},ue.use=function(A){return q.H.use(A)},ue.useActionState=function(A,B,W){return q.H.useActionState(A,B,W)},ue.useCallback=function(A,B){return q.H.useCallback(A,B)},ue.useContext=function(A){return q.H.useContext(A)},ue.useDebugValue=function(){},ue.useDeferredValue=function(A,B){return q.H.useDeferredValue(A,B)},ue.useEffect=function(A,B){return q.H.useEffect(A,B)},ue.useEffectEvent=function(A){return q.H.useEffectEvent(A)},ue.useId=function(){return q.H.useId()},ue.useImperativeHandle=function(A,B,W){return q.H.useImperativeHandle(A,B,W)},ue.useInsertionEffect=function(A,B){return q.H.useInsertionEffect(A,B)},ue.useLayoutEffect=function(A,B){return q.H.useLayoutEffect(A,B)},ue.useMemo=function(A,B){return q.H.useMemo(A,B)},ue.useOptimistic=function(A,B){return q.H.useOptimistic(A,B)},ue.useReducer=function(A,B,W){return q.H.useReducer(A,B,W)},ue.useRef=function(A){return q.H.useRef(A)},ue.useState=function(A){return q.H.useState(A)},ue.useSyncExternalStore=function(A,B,W){return q.H.useSyncExternalStore(A,B,W)},ue.useTransition=function(){return q.H.useTransition()},ue.version="19.2.7",ue}var Fh;function bd(){return Fh||(Fh=1,du.exports=t2()),du.exports}var O=bd();const Kh=W1(O);var pu={exports:{}},Co={},gu={exports:{}},mu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh;function n2(){return Xh||(Xh=1,(function(a){function s(C,J){var $=C.length;C.push(J);e:for(;0<$;){var re=$-1>>>1,xe=C[re];if(0<d(xe,J))C[re]=J,C[$]=xe,$=re;else break e}}function l(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var J=C[0],$=C.pop();if($!==J){C[0]=$;e:for(var re=0,xe=C.length,A=xe>>>1;re<A;){var B=2*(re+1)-1,W=C[B],te=B+1,ce=C[te];if(0>d(W,$))te<xe&&0>d(ce,W)?(C[re]=ce,C[te]=$,re=te):(C[re]=W,C[B]=$,re=B);else if(te<xe&&0>d(ce,$))C[re]=ce,C[te]=$,re=te;else break e}}return J}function d(C,J){var $=C.sortIndex-J.sortIndex;return $!==0?$:C.id-J.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;a.unstable_now=function(){return p.now()}}else{var g=Date,h=g.now();a.unstable_now=function(){return g.now()-h}}var f=[],b=[],x=1,k=null,G=3,y=!1,M=!1,j=!1,I=!1,H=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(C){for(var J=l(b);J!==null;){if(J.callback===null)r(b);else if(J.startTime<=C)r(b),J.sortIndex=J.expirationTime,s(f,J);else break;J=l(b)}}function Q(C){if(j=!1,D(C),!M)if(l(f)!==null)M=!0,Y||(Y=!0,de());else{var J=l(b);J!==null&&Me(Q,J.startTime-C)}}var Y=!1,q=-1,K=5,F=-1;function Z(){return I?!0:!(a.unstable_now()-F<K)}function oe(){if(I=!1,Y){var C=a.unstable_now();F=C;var J=!0;try{e:{M=!1,j&&(j=!1,X(q),q=-1),y=!0;var $=G;try{t:{for(D(C),k=l(f);k!==null&&!(k.expirationTime>C&&Z());){var re=k.callback;if(typeof re=="function"){k.callback=null,G=k.priorityLevel;var xe=re(k.expirationTime<=C);if(C=a.unstable_now(),typeof xe=="function"){k.callback=xe,D(C),J=!0;break t}k===l(f)&&r(f),D(C)}else r(f);k=l(f)}if(k!==null)J=!0;else{var A=l(b);A!==null&&Me(Q,A.startTime-C),J=!1}}break e}finally{k=null,G=$,y=!1}J=void 0}}finally{J?de():Y=!1}}}var de;if(typeof L=="function")de=function(){L(oe)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,Oe=Ue.port2;Ue.port1.onmessage=oe,de=function(){Oe.postMessage(null)}}else de=function(){H(oe,0)};function Me(C,J){q=H(function(){C(a.unstable_now())},J)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(C){C.callback=null},a.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<C?Math.floor(1e3/C):5},a.unstable_getCurrentPriorityLevel=function(){return G},a.unstable_next=function(C){switch(G){case 1:case 2:case 3:var J=3;break;default:J=G}var $=G;G=J;try{return C()}finally{G=$}},a.unstable_requestPaint=function(){I=!0},a.unstable_runWithPriority=function(C,J){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var $=G;G=C;try{return J()}finally{G=$}},a.unstable_scheduleCallback=function(C,J,$){var re=a.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?re+$:re):$=re,C){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=$+xe,C={id:x++,callback:J,priorityLevel:C,startTime:$,expirationTime:xe,sortIndex:-1},$>re?(C.sortIndex=$,s(b,C),l(f)===null&&C===l(b)&&(j?(X(q),q=-1):j=!0,Me(Q,$-re))):(C.sortIndex=xe,s(f,C),M||y||(M=!0,Y||(Y=!0,de()))),C},a.unstable_shouldYield=Z,a.unstable_wrapCallback=function(C){var J=G;return function(){var $=G;G=J;try{return C.apply(this,arguments)}finally{G=$}}}})(mu)),mu}var Zh;function a2(){return Zh||(Zh=1,gu.exports=n2()),gu.exports}var hu={exports:{}},bt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yh;function s2(){if(Yh)return bt;Yh=1;var a=bd();function s(f){var b="https://react.dev/errors/"+f;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)b+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+f+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var r={d:{f:l,r:function(){throw Error(s(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(f,b,x){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:k==null?null:""+k,children:f,containerInfo:b,implementation:x}}var g=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(f,b){if(f==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bt.createPortal=function(f,b){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(s(299));return p(f,b,null,x)},bt.flushSync=function(f){var b=g.T,x=r.p;try{if(g.T=null,r.p=2,f)return f()}finally{g.T=b,r.p=x,r.d.f()}},bt.preconnect=function(f,b){typeof f=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,r.d.C(f,b))},bt.prefetchDNS=function(f){typeof f=="string"&&r.d.D(f)},bt.preinit=function(f,b){if(typeof f=="string"&&b&&typeof b.as=="string"){var x=b.as,k=h(x,b.crossOrigin),G=typeof b.integrity=="string"?b.integrity:void 0,y=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;x==="style"?r.d.S(f,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:k,integrity:G,fetchPriority:y}):x==="script"&&r.d.X(f,{crossOrigin:k,integrity:G,fetchPriority:y,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},bt.preinitModule=function(f,b){if(typeof f=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var x=h(b.as,b.crossOrigin);r.d.M(f,{crossOrigin:x,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&r.d.M(f)},bt.preload=function(f,b){if(typeof f=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var x=b.as,k=h(x,b.crossOrigin);r.d.L(f,x,{crossOrigin:k,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},bt.preloadModule=function(f,b){if(typeof f=="string")if(b){var x=h(b.as,b.crossOrigin);r.d.m(f,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:x,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else r.d.m(f)},bt.requestFormReset=function(f){r.d.r(f)},bt.unstable_batchedUpdates=function(f,b){return f(b)},bt.useFormState=function(f,b,x){return g.H.useFormState(f,b,x)},bt.useFormStatus=function(){return g.H.useHostTransitionStatus()},bt.version="19.2.7",bt}var Qh;function o2(){if(Qh)return hu.exports;Qh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),hu.exports=s2(),hu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function i2(){if(Jh)return Co;Jh=1;var a=a2(),s=bd(),l=o2();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(p(e)!==e)throw Error(r(188))}function b(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(r(188));return t!==e?null:e}for(var n=e,o=t;;){var c=n.return;if(c===null)break;var u=c.alternate;if(u===null){if(o=c.return,o!==null){n=o;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===n)return f(c),e;if(u===o)return f(c),t;u=u.sibling}throw Error(r(188))}if(n.return!==o.return)n=c,o=u;else{for(var m=!1,_=c.child;_;){if(_===n){m=!0,n=c,o=u;break}if(_===o){m=!0,o=c,n=u;break}_=_.sibling}if(!m){for(_=u.child;_;){if(_===n){m=!0,n=u,o=c;break}if(_===o){m=!0,o=u,n=c;break}_=_.sibling}if(!m)throw Error(r(189))}}if(n.alternate!==o)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var k=Object.assign,G=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),oe=Symbol.iterator;function de(e){return e===null||typeof e!="object"?null:(e=oe&&e[oe]||e["@@iterator"],typeof e=="function"?e:null)}var Ue=Symbol.for("react.client.reference");function Oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ue?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case H:return"Profiler";case I:return"StrictMode";case Q:return"Suspense";case Y:return"SuspenseList";case F:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case L:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case D:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case q:return t=e.displayName||null,t!==null?t:Oe(e.type)||"Memo";case K:t=e._payload,e=e._init;try{return Oe(e(t))}catch{}}return null}var Me=Array.isArray,C=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},re=[],xe=-1;function A(e){return{current:e}}function B(e){0>xe||(e.current=re[xe],re[xe]=null,xe--)}function W(e,t){xe++,re[xe]=e.current,e.current=t}var te=A(null),ce=A(null),he=A(null),Ae=A(null);function it(e,t){switch(W(he,t),W(ce,e),W(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?dh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=dh(t),e=ph(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(te),W(te,e)}function Be(){B(te),B(ce),B(he)}function da(e){e.memoizedState!==null&&W(Ae,e);var t=te.current,n=ph(t,e.type);t!==n&&(W(ce,e),W(te,n))}function Cn(e){ce.current===e&&(B(te),B(ce)),Ae.current===e&&(B(Ae),So._currentValue=$)}var Vs,Ds;function un(e){if(Vs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vs=t&&t[1]||"",Ds=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vs+e+Ds}var Ra=!1;function qs(e,t){if(!e||Ra)return"";Ra=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(R){var w=R}Reflect.construct(e,[],P)}else{try{P.call()}catch(R){w=R}e.call(P.prototype)}}else{try{throw Error()}catch(R){w=R}(P=e())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(R){if(R&&w&&typeof R.stack=="string")return[R.stack,w.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),m=u[0],_=u[1];if(m&&_){var v=m.split(`
`),E=_.split(`
`);for(c=o=0;o<v.length&&!v[o].includes("DetermineComponentFrameRoot");)o++;for(;c<E.length&&!E[c].includes("DetermineComponentFrameRoot");)c++;if(o===v.length||c===E.length)for(o=v.length-1,c=E.length-1;1<=o&&0<=c&&v[o]!==E[c];)c--;for(;1<=o&&0<=c;o--,c--)if(v[o]!==E[c]){if(o!==1||c!==1)do if(o--,c--,0>c||v[o]!==E[c]){var z=`
`+v[o].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),z}while(1<=o&&0<=c);break}}}finally{Ra=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?un(n):""}function Qr(e,t){switch(e.tag){case 26:case 27:case 5:return un(e.type);case 16:return un("Lazy");case 13:return e.child!==t&&t!==null?un("Suspense Fallback"):un("Suspense");case 19:return un("SuspenseList");case 0:case 15:return qs(e.type,!1);case 11:return qs(e.type.render,!1);case 1:return qs(e.type,!0);case 31:return un("Activity");default:return""}}function Fe(e){try{var t="",n=null;do t+=Qr(e,n),n=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var He=Object.prototype.hasOwnProperty,Oa=a.unstable_scheduleCallback,Rs=a.unstable_cancelCallback,Jr=a.unstable_shouldYield,je=a.unstable_requestPaint,ht=a.unstable_now,dn=a.unstable_getCurrentPriorityLevel,Wo=a.unstable_ImmediatePriority,Os=a.unstable_UserBlockingPriority,pn=a.unstable_NormalPriority,Hs=a.unstable_LowPriority,pa=a.unstable_IdlePriority,V=a.log,be=a.unstable_setDisableYieldValue,fe=null,ge=null;function kt(e){if(typeof V=="function"&&be(e),ge&&typeof ge.setStrictMode=="function")try{ge.setStrictMode(fe,e)}catch{}}var rt=Math.clz32?Math.clz32:Ox,qx=Math.log,Rx=Math.LN2;function Ox(e){return e>>>=0,e===0?32:31-(qx(e)/Rx|0)|0}var $o=256,ei=262144,ti=4194304;function ga(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ni(e,t,n){var o=e.pendingLanes;if(o===0)return 0;var c=0,u=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var _=o&134217727;return _!==0?(o=_&~u,o!==0?c=ga(o):(m&=_,m!==0?c=ga(m):n||(n=_&~e,n!==0&&(c=ga(n))))):(_=o&~u,_!==0?c=ga(_):m!==0?c=ga(m):n||(n=o&~e,n!==0&&(c=ga(n)))),c===0?0:t!==0&&t!==c&&(t&u)===0&&(u=c&-c,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:c}function Ls(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Hx(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kd(){var e=ti;return ti<<=1,(ti&62914560)===0&&(ti=4194304),e}function Wr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zs(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Lx(e,t,n,o,c,u){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var _=e.entanglements,v=e.expirationTimes,E=e.hiddenUpdates;for(n=m&~n;0<n;){var z=31-rt(n),P=1<<z;_[z]=0,v[z]=-1;var w=E[z];if(w!==null)for(E[z]=null,z=0;z<w.length;z++){var R=w[z];R!==null&&(R.lane&=-536870913)}n&=~P}o!==0&&Xd(e,o,0),u!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=u&~(m&~t))}function Xd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-rt(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|n&261930}function Zd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-rt(n),c=1<<o;c&t|e[o]&t&&(e[o]|=t),n&=~c}}function Yd(e,t){var n=t&-t;return n=(n&42)!==0?1:$r(n),(n&(e.suspendedLanes|t))!==0?0:n}function $r(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function el(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qd(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:Dh(e.type))}function Jd(e,t){var n=J.p;try{return J.p=e,t()}finally{J.p=n}}var Vn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Vn,Gt="__reactProps$"+Vn,Ha="__reactContainer$"+Vn,tl="__reactEvents$"+Vn,zx="__reactListeners$"+Vn,Ux="__reactHandles$"+Vn,Wd="__reactResources$"+Vn,Us="__reactMarker$"+Vn;function nl(e){delete e[lt],delete e[Gt],delete e[tl],delete e[zx],delete e[Ux]}function La(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ha]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_h(e);e!==null;){if(n=e[lt])return n;e=_h(e)}return t}e=n,n=e.parentNode}return null}function za(e){if(e=e[lt]||e[Ha]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Bs(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function Ua(e){var t=e[Wd];return t||(t=e[Wd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function st(e){e[Us]=!0}var $d=new Set,ep={};function ma(e,t){Ba(e,t),Ba(e+"Capture",t)}function Ba(e,t){for(ep[e]=t,e=0;e<t.length;e++)$d.add(t[e])}var Bx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tp={},np={};function Px(e){return He.call(np,e)?!0:He.call(tp,e)?!1:Bx.test(e)?np[e]=!0:(tp[e]=!0,!1)}function ai(e,t,n){if(Px(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function si(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function gn(e,t,n,o){if(o===null)e.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+o)}}function Rt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ap(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fx(e,t,n){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,u=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(m){n=""+m,u.call(this,m)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return n},setValue:function(m){n=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function al(e){if(!e._valueTracker){var t=ap(e)?"checked":"value";e._valueTracker=Fx(e,t,""+e[t])}}function sp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=ap(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kx=/[\n"\\]/g;function Ot(e){return e.replace(Kx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function sl(e,t,n,o,c,u,m,_){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Rt(t)):e.value!==""+Rt(t)&&(e.value=""+Rt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?ol(e,m,Rt(t)):n!=null?ol(e,m,Rt(n)):o!=null&&e.removeAttribute("value"),c==null&&u!=null&&(e.defaultChecked=!!u),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.name=""+Rt(_):e.removeAttribute("name")}function op(e,t,n,o,c,u,m,_){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){al(e);return}n=n!=null?""+Rt(n):"",t=t!=null?""+Rt(t):n,_||t===e.value||(e.value=t),e.defaultValue=t}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=_?e.checked:!!o,e.defaultChecked=!!o,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),al(e)}function ol(e,t,n){t==="number"&&oi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Pa(e,t,n,o){if(e=e.options,t){t={};for(var c=0;c<n.length;c++)t["$"+n[c]]=!0;for(n=0;n<e.length;n++)c=t.hasOwnProperty("$"+e[n].value),e[n].selected!==c&&(e[n].selected=c),c&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Rt(n),t=null,c=0;c<e.length;c++){if(e[c].value===n){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function ip(e,t,n){if(t!=null&&(t=""+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Rt(n):""}function rp(e,t,n,o){if(t==null){if(o!=null){if(n!=null)throw Error(r(92));if(Me(o)){if(1<o.length)throw Error(r(93));o=o[0]}n=o}n==null&&(n=""),t=n}n=Rt(t),e.defaultValue=n,o=e.textContent,o===n&&o!==""&&o!==null&&(e.value=o),al(e)}function Fa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lp(e,t,n){var o=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,n):typeof n!="number"||n===0||Xx.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function cp(e,t,n){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,n!=null){for(var o in n)!n.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in t)o=t[c],t.hasOwnProperty(c)&&n[c]!==o&&lp(e,c,o)}else for(var u in t)t.hasOwnProperty(u)&&lp(e,u,t[u])}function il(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Yx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ii(e){return Yx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function mn(){}var rl=null;function ll(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ka=null,Xa=null;function up(e){var t=za(e);if(t&&(e=t.stateNode)){var n=e[Gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(sl(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ot(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var c=o[Gt]||null;if(!c)throw Error(r(90));sl(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<n.length;t++)o=n[t],o.form===e.form&&sp(o)}break e;case"textarea":ip(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Pa(e,!!n.multiple,t,!1)}}}var cl=!1;function dp(e,t,n){if(cl)return e(t,n);cl=!0;try{var o=e(t);return o}finally{if(cl=!1,(Ka!==null||Xa!==null)&&(Xi(),Ka&&(t=Ka,e=Xa,Xa=Ka=null,up(t),e)))for(t=0;t<e.length;t++)up(e[t])}}function Ps(e,t){var n=e.stateNode;if(n===null)return null;var o=n[Gt]||null;if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(r(231,t,typeof n));return n}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ul=!1;if(hn)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){ul=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{ul=!1}var Dn=null,dl=null,ri=null;function pp(){if(ri)return ri;var e,t=dl,n=t.length,o,c="value"in Dn?Dn.value:Dn.textContent,u=c.length;for(e=0;e<n&&t[e]===c[e];e++);var m=n-e;for(o=1;o<=m&&t[n-o]===c[u-o];o++);return ri=c.slice(e,1<o?1-o:void 0)}function li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ci(){return!0}function gp(){return!1}function yt(e){function t(n,o,c,u,m){this._reactName=n,this._targetInst=c,this.type=o,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var _ in e)e.hasOwnProperty(_)&&(n=e[_],this[_]=n?n(u):u[_]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ci:gp,this.isPropagationStopped=gp,this}return k(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),t}var ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ui=yt(ha),Ks=k({},ha,{view:0,detail:0}),Qx=yt(Ks),pl,gl,Xs,di=k({},Ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xs&&(Xs&&e.type==="mousemove"?(pl=e.screenX-Xs.screenX,gl=e.screenY-Xs.screenY):gl=pl=0,Xs=e),pl)},movementY:function(e){return"movementY"in e?e.movementY:gl}}),mp=yt(di),Jx=k({},di,{dataTransfer:0}),Wx=yt(Jx),$x=k({},Ks,{relatedTarget:0}),ml=yt($x),e_=k({},ha,{animationName:0,elapsedTime:0,pseudoElement:0}),t_=yt(e_),n_=k({},ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),a_=yt(n_),s_=k({},ha,{data:0}),hp=yt(s_),o_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l_(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=r_[e])?!!t[e]:!1}function hl(){return l_}var c_=k({},Ks,{key:function(e){if(e.key){var t=o_[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?i_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hl,charCode:function(e){return e.type==="keypress"?li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),u_=yt(c_),d_=k({},di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=yt(d_),p_=k({},Ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hl}),g_=yt(p_),m_=k({},ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),h_=yt(m_),b_=k({},di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),f_=yt(b_),x_=k({},ha,{newState:0,oldState:0}),__=yt(x_),k_=[9,13,27,32],bl=hn&&"CompositionEvent"in window,Zs=null;hn&&"documentMode"in document&&(Zs=document.documentMode);var G_=hn&&"TextEvent"in window&&!Zs,fp=hn&&(!bl||Zs&&8<Zs&&11>=Zs),xp=" ",_p=!1;function kp(e,t){switch(e){case"keyup":return k_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Za=!1;function y_(e,t){switch(e){case"compositionend":return Gp(t);case"keypress":return t.which!==32?null:(_p=!0,xp);case"textInput":return e=t.data,e===xp&&_p?null:e;default:return null}}function v_(e,t){if(Za)return e==="compositionend"||!bl&&kp(e,t)?(e=pp(),ri=dl=Dn=null,Za=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fp&&t.locale!=="ko"?null:t.data;default:return null}}var M_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!M_[e.type]:t==="textarea"}function vp(e,t,n,o){Ka?Xa?Xa.push(o):Xa=[o]:Ka=o,t=er(t,"onChange"),0<t.length&&(n=new ui("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Ys=null,Qs=null;function A_(e){oh(e,0)}function pi(e){var t=Bs(e);if(sp(t))return e}function Mp(e,t){if(e==="change")return t}var Ap=!1;if(hn){var fl;if(hn){var xl="oninput"in document;if(!xl){var Tp=document.createElement("div");Tp.setAttribute("oninput","return;"),xl=typeof Tp.oninput=="function"}fl=xl}else fl=!1;Ap=fl&&(!document.documentMode||9<document.documentMode)}function Ip(){Ys&&(Ys.detachEvent("onpropertychange",Sp),Qs=Ys=null)}function Sp(e){if(e.propertyName==="value"&&pi(Qs)){var t=[];vp(t,Qs,e,ll(e)),dp(A_,t)}}function T_(e,t,n){e==="focusin"?(Ip(),Ys=t,Qs=n,Ys.attachEvent("onpropertychange",Sp)):e==="focusout"&&Ip()}function I_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pi(Qs)}function S_(e,t){if(e==="click")return pi(t)}function j_(e,t){if(e==="input"||e==="change")return pi(t)}function N_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:N_;function Js(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var c=n[o];if(!He.call(t,c)||!jt(e[c],t[c]))return!1}return!0}function jp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Np(e,t){var n=jp(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jp(n)}}function Ep(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ep(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=oi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oi(e.document)}return t}function _l(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var E_=hn&&"documentMode"in document&&11>=document.documentMode,Ya=null,kl=null,Ws=null,Gl=!1;function Cp(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gl||Ya==null||Ya!==oi(o)||(o=Ya,"selectionStart"in o&&_l(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ws&&Js(Ws,o)||(Ws=o,o=er(kl,"onSelect"),0<o.length&&(t=new ui("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Ya)))}function ba(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qa={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionrun:ba("Transition","TransitionRun"),transitionstart:ba("Transition","TransitionStart"),transitioncancel:ba("Transition","TransitionCancel"),transitionend:ba("Transition","TransitionEnd")},yl={},Vp={};hn&&(Vp=document.createElement("div").style,"AnimationEvent"in window||(delete Qa.animationend.animation,delete Qa.animationiteration.animation,delete Qa.animationstart.animation),"TransitionEvent"in window||delete Qa.transitionend.transition);function fa(e){if(yl[e])return yl[e];if(!Qa[e])return e;var t=Qa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vp)return yl[e]=t[n];return e}var Dp=fa("animationend"),qp=fa("animationiteration"),Rp=fa("animationstart"),w_=fa("transitionrun"),C_=fa("transitionstart"),V_=fa("transitioncancel"),Op=fa("transitionend"),Hp=new Map,vl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vl.push("scrollEnd");function Yt(e,t){Hp.set(e,t),ma(t,[e])}var gi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ht=[],Ja=0,Ml=0;function mi(){for(var e=Ja,t=Ml=Ja=0;t<e;){var n=Ht[t];Ht[t++]=null;var o=Ht[t];Ht[t++]=null;var c=Ht[t];Ht[t++]=null;var u=Ht[t];if(Ht[t++]=null,o!==null&&c!==null){var m=o.pending;m===null?c.next=c:(c.next=m.next,m.next=c),o.pending=c}u!==0&&Lp(n,c,u)}}function hi(e,t,n,o){Ht[Ja++]=e,Ht[Ja++]=t,Ht[Ja++]=n,Ht[Ja++]=o,Ml|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Al(e,t,n,o){return hi(e,t,n,o),bi(e)}function xa(e,t){return hi(e,null,null,t),bi(e)}function Lp(e,t,n){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n);for(var c=!1,u=e.return;u!==null;)u.childLanes|=n,o=u.alternate,o!==null&&(o.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(c=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,c&&t!==null&&(c=31-rt(n),e=u.hiddenUpdates,o=e[c],o===null?e[c]=[t]:o.push(t),t.lane=n|536870912),u):null}function bi(e){if(50<Go)throw Go=0,Vc=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Wa={};function D_(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,n,o){return new D_(e,t,n,o)}function Tl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bn(e,t){var n=e.alternate;return n===null?(n=Nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function zp(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function fi(e,t,n,o,c,u){var m=0;if(o=e,typeof e=="function")Tl(e)&&(m=1);else if(typeof e=="string")m=L1(e,n,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case F:return e=Nt(31,n,t,c),e.elementType=F,e.lanes=u,e;case j:return _a(n.children,c,u,t);case I:m=8,c|=24;break;case H:return e=Nt(12,n,t,c|2),e.elementType=H,e.lanes=u,e;case Q:return e=Nt(13,n,t,c),e.elementType=Q,e.lanes=u,e;case Y:return e=Nt(19,n,t,c),e.elementType=Y,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:m=10;break e;case X:m=9;break e;case D:m=11;break e;case q:m=14;break e;case K:m=16,o=null;break e}m=29,n=Error(r(130,e===null?"null":typeof e,"")),o=null}return t=Nt(m,n,t,c),t.elementType=e,t.type=o,t.lanes=u,t}function _a(e,t,n,o){return e=Nt(7,e,o,t),e.lanes=n,e}function Il(e,t,n){return e=Nt(6,e,null,t),e.lanes=n,e}function Up(e){var t=Nt(18,null,null,0);return t.stateNode=e,t}function Sl(e,t,n){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Bp=new WeakMap;function Lt(e,t){if(typeof e=="object"&&e!==null){var n=Bp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Fe(t)},Bp.set(e,t),t)}return{value:e,source:t,stack:Fe(t)}}var $a=[],es=0,xi=null,$s=0,zt=[],Ut=0,qn=null,tn=1,nn="";function fn(e,t){$a[es++]=$s,$a[es++]=xi,xi=e,$s=t}function Pp(e,t,n){zt[Ut++]=tn,zt[Ut++]=nn,zt[Ut++]=qn,qn=e;var o=tn;e=nn;var c=32-rt(o)-1;o&=~(1<<c),n+=1;var u=32-rt(t)+c;if(30<u){var m=c-c%5;u=(o&(1<<m)-1).toString(32),o>>=m,c-=m,tn=1<<32-rt(t)+c|n<<c|o,nn=u+e}else tn=1<<u|n<<c|o,nn=e}function jl(e){e.return!==null&&(fn(e,1),Pp(e,1,0))}function Nl(e){for(;e===xi;)xi=$a[--es],$a[es]=null,$s=$a[--es],$a[es]=null;for(;e===qn;)qn=zt[--Ut],zt[Ut]=null,nn=zt[--Ut],zt[Ut]=null,tn=zt[--Ut],zt[Ut]=null}function Fp(e,t){zt[Ut++]=tn,zt[Ut++]=nn,zt[Ut++]=qn,tn=t.id,nn=t.overflow,qn=e}var ct=null,Le=null,ve=!1,Rn=null,Bt=!1,El=Error(r(519));function On(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw eo(Lt(t,e)),El}function Kp(e){var t=e.stateNode,n=e.type,o=e.memoizedProps;switch(t[lt]=e,t[Gt]=o,n){case"dialog":ke("cancel",t),ke("close",t);break;case"iframe":case"object":case"embed":ke("load",t);break;case"video":case"audio":for(n=0;n<vo.length;n++)ke(vo[n],t);break;case"source":ke("error",t);break;case"img":case"image":case"link":ke("error",t),ke("load",t);break;case"details":ke("toggle",t);break;case"input":ke("invalid",t),op(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ke("invalid",t);break;case"textarea":ke("invalid",t),rp(t,o.value,o.defaultValue,o.children)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||o.suppressHydrationWarning===!0||ch(t.textContent,n)?(o.popover!=null&&(ke("beforetoggle",t),ke("toggle",t)),o.onScroll!=null&&ke("scroll",t),o.onScrollEnd!=null&&ke("scrollend",t),o.onClick!=null&&(t.onclick=mn),t=!0):t=!1,t||On(e,!0)}function Xp(e){for(ct=e.return;ct;)switch(ct.tag){case 5:case 31:case 13:Bt=!1;return;case 27:case 3:Bt=!0;return;default:ct=ct.return}}function ts(e){if(e!==ct)return!1;if(!ve)return Xp(e),ve=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Yc(e.type,e.memoizedProps)),n=!n),n&&Le&&On(e),Xp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Le=xh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Le=xh(e)}else t===27?(t=Le,Wn(e.type)?(e=eu,eu=null,Le=e):Le=t):Le=ct?Ft(e.stateNode.nextSibling):null;return!0}function ka(){Le=ct=null,ve=!1}function wl(){var e=Rn;return e!==null&&(Tt===null?Tt=e:Tt.push.apply(Tt,e),Rn=null),e}function eo(e){Rn===null?Rn=[e]:Rn.push(e)}var Cl=A(null),Ga=null,xn=null;function Hn(e,t,n){W(Cl,t._currentValue),t._currentValue=n}function _n(e){e._currentValue=Cl.current,B(Cl)}function Vl(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Dl(e,t,n,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var u=c.dependencies;if(u!==null){var m=c.child;u=u.firstContext;e:for(;u!==null;){var _=u;u=c;for(var v=0;v<t.length;v++)if(_.context===t[v]){u.lanes|=n,_=u.alternate,_!==null&&(_.lanes|=n),Vl(u.return,n,e),o||(m=null);break e}u=_.next}}else if(c.tag===18){if(m=c.return,m===null)throw Error(r(341));m.lanes|=n,u=m.alternate,u!==null&&(u.lanes|=n),Vl(m,n,e),m=null}else m=c.child;if(m!==null)m.return=c;else for(m=c;m!==null;){if(m===e){m=null;break}if(c=m.sibling,c!==null){c.return=m.return,m=c;break}m=m.return}c=m}}function ns(e,t,n,o){e=null;for(var c=t,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var m=c.alternate;if(m===null)throw Error(r(387));if(m=m.memoizedProps,m!==null){var _=c.type;jt(c.pendingProps.value,m.value)||(e!==null?e.push(_):e=[_])}}else if(c===Ae.current){if(m=c.alternate,m===null)throw Error(r(387));m.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(So):e=[So])}c=c.return}e!==null&&Dl(t,e,n,o),t.flags|=262144}function _i(e){for(e=e.firstContext;e!==null;){if(!jt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ya(e){Ga=e,xn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ut(e){return Zp(Ga,e)}function ki(e,t){return Ga===null&&ya(e),Zp(e,t)}function Zp(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},xn===null){if(e===null)throw Error(r(308));xn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xn=xn.next=t;return n}var q_=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},R_=a.unstable_scheduleCallback,O_=a.unstable_NormalPriority,Je={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ql(){return{controller:new q_,data:new Map,refCount:0}}function to(e){e.refCount--,e.refCount===0&&R_(O_,function(){e.controller.abort()})}var no=null,Rl=0,as=0,ss=null;function H_(e,t){if(no===null){var n=no=[];Rl=0,as=Lc(),ss={status:"pending",value:void 0,then:function(o){n.push(o)}}}return Rl++,t.then(Yp,Yp),t}function Yp(){if(--Rl===0&&no!==null){ss!==null&&(ss.status="fulfilled");var e=no;no=null,as=0,ss=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function L_(e,t){var n=[],o={status:"pending",value:null,reason:null,then:function(c){n.push(c)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var c=0;c<n.length;c++)(0,n[c])(t)},function(c){for(o.status="rejected",o.reason=c,c=0;c<n.length;c++)(0,n[c])(void 0)}),o}var Qp=C.S;C.S=function(e,t){Cm=ht(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&H_(e,t),Qp!==null&&Qp(e,t)};var va=A(null);function Ol(){var e=va.current;return e!==null?e:De.pooledCache}function Gi(e,t){t===null?W(va,va.current):W(va,t.pool)}function Jp(){var e=Ol();return e===null?null:{parent:Je._currentValue,pool:e}}var os=Error(r(460)),Hl=Error(r(474)),yi=Error(r(542)),vi={then:function(){}};function Wp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $p(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(mn,mn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,tg(e),e;default:if(typeof t.status=="string")t.then(mn,mn);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=o}},function(o){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,tg(e),e}throw Aa=t,os}}function Ma(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Aa=n,os):n}}var Aa=null;function eg(){if(Aa===null)throw Error(r(459));var e=Aa;return Aa=null,e}function tg(e){if(e===os||e===yi)throw Error(r(483))}var is=null,ao=0;function Mi(e){var t=ao;return ao+=1,is===null&&(is=[]),$p(is,e,t)}function so(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ai(e,t){throw t.$$typeof===G?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ng(e){function t(S,T){if(e){var N=S.deletions;N===null?(S.deletions=[T],S.flags|=16):N.push(T)}}function n(S,T){if(!e)return null;for(;T!==null;)t(S,T),T=T.sibling;return null}function o(S){for(var T=new Map;S!==null;)S.key!==null?T.set(S.key,S):T.set(S.index,S),S=S.sibling;return T}function c(S,T){return S=bn(S,T),S.index=0,S.sibling=null,S}function u(S,T,N){return S.index=N,e?(N=S.alternate,N!==null?(N=N.index,N<T?(S.flags|=67108866,T):N):(S.flags|=67108866,T)):(S.flags|=1048576,T)}function m(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function _(S,T,N,U){return T===null||T.tag!==6?(T=Il(N,S.mode,U),T.return=S,T):(T=c(T,N),T.return=S,T)}function v(S,T,N,U){var se=N.type;return se===j?z(S,T,N.props.children,U,N.key):T!==null&&(T.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===K&&Ma(se)===T.type)?(T=c(T,N.props),so(T,N),T.return=S,T):(T=fi(N.type,N.key,N.props,null,S.mode,U),so(T,N),T.return=S,T)}function E(S,T,N,U){return T===null||T.tag!==4||T.stateNode.containerInfo!==N.containerInfo||T.stateNode.implementation!==N.implementation?(T=Sl(N,S.mode,U),T.return=S,T):(T=c(T,N.children||[]),T.return=S,T)}function z(S,T,N,U,se){return T===null||T.tag!==7?(T=_a(N,S.mode,U,se),T.return=S,T):(T=c(T,N),T.return=S,T)}function P(S,T,N){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=Il(""+T,S.mode,N),T.return=S,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case y:return N=fi(T.type,T.key,T.props,null,S.mode,N),so(N,T),N.return=S,N;case M:return T=Sl(T,S.mode,N),T.return=S,T;case K:return T=Ma(T),P(S,T,N)}if(Me(T)||de(T))return T=_a(T,S.mode,N,null),T.return=S,T;if(typeof T.then=="function")return P(S,Mi(T),N);if(T.$$typeof===L)return P(S,ki(S,T),N);Ai(S,T)}return null}function w(S,T,N,U){var se=T!==null?T.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return se!==null?null:_(S,T,""+N,U);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case y:return N.key===se?v(S,T,N,U):null;case M:return N.key===se?E(S,T,N,U):null;case K:return N=Ma(N),w(S,T,N,U)}if(Me(N)||de(N))return se!==null?null:z(S,T,N,U,null);if(typeof N.then=="function")return w(S,T,Mi(N),U);if(N.$$typeof===L)return w(S,T,ki(S,N),U);Ai(S,N)}return null}function R(S,T,N,U,se){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return S=S.get(N)||null,_(T,S,""+U,se);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case y:return S=S.get(U.key===null?N:U.key)||null,v(T,S,U,se);case M:return S=S.get(U.key===null?N:U.key)||null,E(T,S,U,se);case K:return U=Ma(U),R(S,T,N,U,se)}if(Me(U)||de(U))return S=S.get(N)||null,z(T,S,U,se,null);if(typeof U.then=="function")return R(S,T,N,Mi(U),se);if(U.$$typeof===L)return R(S,T,N,ki(T,U),se);Ai(T,U)}return null}function ee(S,T,N,U){for(var se=null,Te=null,ae=T,me=T=0,ye=null;ae!==null&&me<N.length;me++){ae.index>me?(ye=ae,ae=null):ye=ae.sibling;var Ie=w(S,ae,N[me],U);if(Ie===null){ae===null&&(ae=ye);break}e&&ae&&Ie.alternate===null&&t(S,ae),T=u(Ie,T,me),Te===null?se=Ie:Te.sibling=Ie,Te=Ie,ae=ye}if(me===N.length)return n(S,ae),ve&&fn(S,me),se;if(ae===null){for(;me<N.length;me++)ae=P(S,N[me],U),ae!==null&&(T=u(ae,T,me),Te===null?se=ae:Te.sibling=ae,Te=ae);return ve&&fn(S,me),se}for(ae=o(ae);me<N.length;me++)ye=R(ae,S,me,N[me],U),ye!==null&&(e&&ye.alternate!==null&&ae.delete(ye.key===null?me:ye.key),T=u(ye,T,me),Te===null?se=ye:Te.sibling=ye,Te=ye);return e&&ae.forEach(function(aa){return t(S,aa)}),ve&&fn(S,me),se}function ie(S,T,N,U){if(N==null)throw Error(r(151));for(var se=null,Te=null,ae=T,me=T=0,ye=null,Ie=N.next();ae!==null&&!Ie.done;me++,Ie=N.next()){ae.index>me?(ye=ae,ae=null):ye=ae.sibling;var aa=w(S,ae,Ie.value,U);if(aa===null){ae===null&&(ae=ye);break}e&&ae&&aa.alternate===null&&t(S,ae),T=u(aa,T,me),Te===null?se=aa:Te.sibling=aa,Te=aa,ae=ye}if(Ie.done)return n(S,ae),ve&&fn(S,me),se;if(ae===null){for(;!Ie.done;me++,Ie=N.next())Ie=P(S,Ie.value,U),Ie!==null&&(T=u(Ie,T,me),Te===null?se=Ie:Te.sibling=Ie,Te=Ie);return ve&&fn(S,me),se}for(ae=o(ae);!Ie.done;me++,Ie=N.next())Ie=R(ae,S,me,Ie.value,U),Ie!==null&&(e&&Ie.alternate!==null&&ae.delete(Ie.key===null?me:Ie.key),T=u(Ie,T,me),Te===null?se=Ie:Te.sibling=Ie,Te=Ie);return e&&ae.forEach(function(J1){return t(S,J1)}),ve&&fn(S,me),se}function Ve(S,T,N,U){if(typeof N=="object"&&N!==null&&N.type===j&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case y:e:{for(var se=N.key;T!==null;){if(T.key===se){if(se=N.type,se===j){if(T.tag===7){n(S,T.sibling),U=c(T,N.props.children),U.return=S,S=U;break e}}else if(T.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===K&&Ma(se)===T.type){n(S,T.sibling),U=c(T,N.props),so(U,N),U.return=S,S=U;break e}n(S,T);break}else t(S,T);T=T.sibling}N.type===j?(U=_a(N.props.children,S.mode,U,N.key),U.return=S,S=U):(U=fi(N.type,N.key,N.props,null,S.mode,U),so(U,N),U.return=S,S=U)}return m(S);case M:e:{for(se=N.key;T!==null;){if(T.key===se)if(T.tag===4&&T.stateNode.containerInfo===N.containerInfo&&T.stateNode.implementation===N.implementation){n(S,T.sibling),U=c(T,N.children||[]),U.return=S,S=U;break e}else{n(S,T);break}else t(S,T);T=T.sibling}U=Sl(N,S.mode,U),U.return=S,S=U}return m(S);case K:return N=Ma(N),Ve(S,T,N,U)}if(Me(N))return ee(S,T,N,U);if(de(N)){if(se=de(N),typeof se!="function")throw Error(r(150));return N=se.call(N),ie(S,T,N,U)}if(typeof N.then=="function")return Ve(S,T,Mi(N),U);if(N.$$typeof===L)return Ve(S,T,ki(S,N),U);Ai(S,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,T!==null&&T.tag===6?(n(S,T.sibling),U=c(T,N),U.return=S,S=U):(n(S,T),U=Il(N,S.mode,U),U.return=S,S=U),m(S)):n(S,T)}return function(S,T,N,U){try{ao=0;var se=Ve(S,T,N,U);return is=null,se}catch(ae){if(ae===os||ae===yi)throw ae;var Te=Nt(29,ae,null,S.mode);return Te.lanes=U,Te.return=S,Te}finally{}}}var Ta=ng(!0),ag=ng(!1),Ln=!1;function Ll(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function zn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Un(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Se&2)!==0){var c=o.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),o.pending=t,t=bi(e),Lp(e,null,n),t}return hi(e,o,t,n),bi(e)}function oo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Zd(e,n)}}function Ul(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var c=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?c=u=m:u=u.next=m,n=n.next}while(n!==null);u===null?c=u=t:u=u.next=t}else c=u=t;n={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Bl=!1;function io(){if(Bl){var e=ss;if(e!==null)throw e}}function ro(e,t,n,o){Bl=!1;var c=e.updateQueue;Ln=!1;var u=c.firstBaseUpdate,m=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var v=_,E=v.next;v.next=null,m===null?u=E:m.next=E,m=v;var z=e.alternate;z!==null&&(z=z.updateQueue,_=z.lastBaseUpdate,_!==m&&(_===null?z.firstBaseUpdate=E:_.next=E,z.lastBaseUpdate=v))}if(u!==null){var P=c.baseState;m=0,z=E=v=null,_=u;do{var w=_.lane&-536870913,R=w!==_.lane;if(R?(Ge&w)===w:(o&w)===w){w!==0&&w===as&&(Bl=!0),z!==null&&(z=z.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var ee=e,ie=_;w=t;var Ve=n;switch(ie.tag){case 1:if(ee=ie.payload,typeof ee=="function"){P=ee.call(Ve,P,w);break e}P=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=ie.payload,w=typeof ee=="function"?ee.call(Ve,P,w):ee,w==null)break e;P=k({},P,w);break e;case 2:Ln=!0}}w=_.callback,w!==null&&(e.flags|=64,R&&(e.flags|=8192),R=c.callbacks,R===null?c.callbacks=[w]:R.push(w))}else R={lane:w,tag:_.tag,payload:_.payload,callback:_.callback,next:null},z===null?(E=z=R,v=P):z=z.next=R,m|=w;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;R=_,_=R.next,R.next=null,c.lastBaseUpdate=R,c.shared.pending=null}}while(!0);z===null&&(v=P),c.baseState=v,c.firstBaseUpdate=E,c.lastBaseUpdate=z,u===null&&(c.shared.lanes=0),Xn|=m,e.lanes=m,e.memoizedState=P}}function sg(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function og(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)sg(n[e],t)}var rs=A(null),Ti=A(0);function ig(e,t){e=Sn,W(Ti,e),W(rs,t),Sn=e|t.baseLanes}function Pl(){W(Ti,Sn),W(rs,rs.current)}function Fl(){Sn=Ti.current,B(rs),B(Ti)}var Et=A(null),Pt=null;function Bn(e){var t=e.alternate;W(Ye,Ye.current&1),W(Et,e),Pt===null&&(t===null||rs.current!==null||t.memoizedState!==null)&&(Pt=e)}function Kl(e){W(Ye,Ye.current),W(Et,e),Pt===null&&(Pt=e)}function rg(e){e.tag===22?(W(Ye,Ye.current),W(Et,e),Pt===null&&(Pt=e)):Pn()}function Pn(){W(Ye,Ye.current),W(Et,Et.current)}function wt(e){B(Et),Pt===e&&(Pt=null),B(Ye)}var Ye=A(0);function Ii(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Wc(n)||$c(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kn=0,pe=null,we=null,We=null,Si=!1,ls=!1,Ia=!1,ji=0,lo=0,cs=null,z_=0;function Ke(){throw Error(r(321))}function Xl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jt(e[n],t[n]))return!1;return!0}function Zl(e,t,n,o,c,u){return kn=u,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?Pg:cc,Ia=!1,u=n(o,c),Ia=!1,ls&&(u=cg(t,n,o,c)),lg(e),u}function lg(e){C.H=po;var t=we!==null&&we.next!==null;if(kn=0,We=we=pe=null,Si=!1,lo=0,cs=null,t)throw Error(r(300));e===null||$e||(e=e.dependencies,e!==null&&_i(e)&&($e=!0))}function cg(e,t,n,o){pe=e;var c=0;do{if(ls&&(cs=null),lo=0,ls=!1,25<=c)throw Error(r(301));if(c+=1,We=we=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}C.H=Fg,u=t(n,o)}while(ls);return u}function U_(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?co(t):t,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(pe.flags|=1024),t}function Yl(){var e=ji!==0;return ji=0,e}function Ql(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Jl(e){if(Si){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Si=!1}kn=0,We=we=pe=null,ls=!1,lo=ji=0,cs=null}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?pe.memoizedState=We=e:We=We.next=e,We}function Qe(){if(we===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=We===null?pe.memoizedState:We.next;if(t!==null)We=t,we=e;else{if(e===null)throw pe.alternate===null?Error(r(467)):Error(r(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},We===null?pe.memoizedState=We=e:We=We.next=e}return We}function Ni(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(e){var t=lo;return lo+=1,cs===null&&(cs=[]),e=$p(cs,e,t),t=pe,(We===null?t.memoizedState:We.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?Pg:cc),e}function Ei(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return co(e);if(e.$$typeof===L)return ut(e)}throw Error(r(438,String(e)))}function Wl(e){var t=null,n=pe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var o=pe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ni(),pe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),o=0;o<e;o++)n[o]=Z;return t.index++,n}function Gn(e,t){return typeof t=="function"?t(e):t}function wi(e){var t=Qe();return $l(t,we,e)}function $l(e,t,n){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=n;var c=e.baseQueue,u=o.pending;if(u!==null){if(c!==null){var m=c.next;c.next=u.next,u.next=m}t.baseQueue=c=u,o.pending=null}if(u=e.baseState,c===null)e.memoizedState=u;else{t=c.next;var _=m=null,v=null,E=t,z=!1;do{var P=E.lane&-536870913;if(P!==E.lane?(Ge&P)===P:(kn&P)===P){var w=E.revertLane;if(w===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),P===as&&(z=!0);else if((kn&w)===w){E=E.next,w===as&&(z=!0);continue}else P={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},v===null?(_=v=P,m=u):v=v.next=P,pe.lanes|=w,Xn|=w;P=E.action,Ia&&n(u,P),u=E.hasEagerState?E.eagerState:n(u,P)}else w={lane:P,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},v===null?(_=v=w,m=u):v=v.next=w,pe.lanes|=P,Xn|=P;E=E.next}while(E!==null&&E!==t);if(v===null?m=u:v.next=_,!jt(u,e.memoizedState)&&($e=!0,z&&(n=ss,n!==null)))throw n;e.memoizedState=u,e.baseState=m,e.baseQueue=v,o.lastRenderedState=u}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ec(e){var t=Qe(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var o=n.dispatch,c=n.pending,u=t.memoizedState;if(c!==null){n.pending=null;var m=c=c.next;do u=e(u,m.action),m=m.next;while(m!==c);jt(u,t.memoizedState)||($e=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,o]}function ug(e,t,n){var o=pe,c=Qe(),u=ve;if(u){if(n===void 0)throw Error(r(407));n=n()}else n=t();var m=!jt((we||c).memoizedState,n);if(m&&(c.memoizedState=n,$e=!0),c=c.queue,ac(gg.bind(null,o,c,e),[e]),c.getSnapshot!==t||m||We!==null&&We.memoizedState.tag&1){if(o.flags|=2048,us(9,{destroy:void 0},pg.bind(null,o,c,n,t),null),De===null)throw Error(r(349));u||(kn&127)!==0||dg(o,t,n)}return n}function dg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t=Ni(),pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pg(e,t,n,o){t.value=n,t.getSnapshot=o,mg(t)&&hg(e)}function gg(e,t,n){return n(function(){mg(t)&&hg(e)})}function mg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jt(e,n)}catch{return!0}}function hg(e){var t=xa(e,2);t!==null&&It(t,e,2)}function tc(e){var t=ft();if(typeof e=="function"){var n=e;if(e=n(),Ia){kt(!0);try{n()}finally{kt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:e},t}function bg(e,t,n,o){return e.baseState=n,$l(e,we,typeof o=="function"?o:Gn)}function B_(e,t,n,o,c){if(Di(e))throw Error(r(485));if(e=t.action,e!==null){var u={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};C.T!==null?n(!0):u.isTransition=!1,o(u),n=t.pending,n===null?(u.next=t.pending=u,fg(t,u)):(u.next=n.next,t.pending=n.next=u)}}function fg(e,t){var n=t.action,o=t.payload,c=e.state;if(t.isTransition){var u=C.T,m={};C.T=m;try{var _=n(c,o),v=C.S;v!==null&&v(m,_),xg(e,t,_)}catch(E){nc(e,t,E)}finally{u!==null&&m.types!==null&&(u.types=m.types),C.T=u}}else try{u=n(c,o),xg(e,t,u)}catch(E){nc(e,t,E)}}function xg(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(o){_g(e,t,o)},function(o){return nc(e,t,o)}):_g(e,t,n)}function _g(e,t,n){t.status="fulfilled",t.value=n,kg(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,fg(e,n)))}function nc(e,t,n){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=n,kg(t),t=t.next;while(t!==o)}e.action=null}function kg(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Gg(e,t){return t}function yg(e,t){if(ve){var n=De.formState;if(n!==null){e:{var o=pe;if(ve){if(Le){t:{for(var c=Le,u=Bt;c.nodeType!==8;){if(!u){c=null;break t}if(c=Ft(c.nextSibling),c===null){c=null;break t}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){Le=Ft(c.nextSibling),o=c.data==="F!";break e}}On(o)}o=!1}o&&(t=n[0])}}return n=ft(),n.memoizedState=n.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gg,lastRenderedState:t},n.queue=o,n=zg.bind(null,pe,o),o.dispatch=n,o=tc(!1),u=lc.bind(null,pe,!1,o.queue),o=ft(),c={state:t,dispatch:null,action:e,pending:null},o.queue=c,n=B_.bind(null,pe,c,u,n),c.dispatch=n,o.memoizedState=e,[t,n,!1]}function vg(e){var t=Qe();return Mg(t,we,e)}function Mg(e,t,n){if(t=$l(e,t,Gg)[0],e=wi(Gn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=co(t)}catch(m){throw m===os?yi:m}else o=t;t=Qe();var c=t.queue,u=c.dispatch;return n!==t.memoizedState&&(pe.flags|=2048,us(9,{destroy:void 0},P_.bind(null,c,n),null)),[o,u,e]}function P_(e,t){e.action=t}function Ag(e){var t=Qe(),n=we;if(n!==null)return Mg(t,n,e);Qe(),t=t.memoizedState,n=Qe();var o=n.queue.dispatch;return n.memoizedState=e,[t,o,!1]}function us(e,t,n,o){return e={tag:e,create:n,deps:o,inst:t,next:null},t=pe.updateQueue,t===null&&(t=Ni(),pe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e),e}function Tg(){return Qe().memoizedState}function Ci(e,t,n,o){var c=ft();pe.flags|=e,c.memoizedState=us(1|t,{destroy:void 0},n,o===void 0?null:o)}function Vi(e,t,n,o){var c=Qe();o=o===void 0?null:o;var u=c.memoizedState.inst;we!==null&&o!==null&&Xl(o,we.memoizedState.deps)?c.memoizedState=us(t,u,n,o):(pe.flags|=e,c.memoizedState=us(1|t,u,n,o))}function Ig(e,t){Ci(8390656,8,e,t)}function ac(e,t){Vi(2048,8,e,t)}function F_(e){pe.flags|=4;var t=pe.updateQueue;if(t===null)t=Ni(),pe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Sg(e){var t=Qe().memoizedState;return F_({ref:t,nextImpl:e}),function(){if((Se&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function jg(e,t){return Vi(4,2,e,t)}function Ng(e,t){return Vi(4,4,e,t)}function Eg(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wg(e,t,n){n=n!=null?n.concat([e]):null,Vi(4,4,Eg.bind(null,t,e),n)}function sc(){}function Cg(e,t){var n=Qe();t=t===void 0?null:t;var o=n.memoizedState;return t!==null&&Xl(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Vg(e,t){var n=Qe();t=t===void 0?null:t;var o=n.memoizedState;if(t!==null&&Xl(t,o[1]))return o[0];if(o=e(),Ia){kt(!0);try{e()}finally{kt(!1)}}return n.memoizedState=[o,t],o}function oc(e,t,n){return n===void 0||(kn&1073741824)!==0&&(Ge&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Dm(),pe.lanes|=e,Xn|=e,n)}function Dg(e,t,n,o){return jt(n,t)?n:rs.current!==null?(e=oc(e,n,o),jt(e,t)||($e=!0),e):(kn&42)===0||(kn&1073741824)!==0&&(Ge&261930)===0?($e=!0,e.memoizedState=n):(e=Dm(),pe.lanes|=e,Xn|=e,t)}function qg(e,t,n,o,c){var u=J.p;J.p=u!==0&&8>u?u:8;var m=C.T,_={};C.T=_,lc(e,!1,t,n);try{var v=c(),E=C.S;if(E!==null&&E(_,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var z=L_(v,o);uo(e,t,z,Dt(e))}else uo(e,t,o,Dt(e))}catch(P){uo(e,t,{then:function(){},status:"rejected",reason:P},Dt())}finally{J.p=u,m!==null&&_.types!==null&&(m.types=_.types),C.T=m}}function K_(){}function ic(e,t,n,o){if(e.tag!==5)throw Error(r(476));var c=Rg(e).queue;qg(e,c,t,$,n===null?K_:function(){return Og(e),n(o)})}function Rg(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:$},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Og(e){var t=Rg(e);t.next===null&&(t=e.alternate.memoizedState),uo(e,t.next.queue,{},Dt())}function rc(){return ut(So)}function Hg(){return Qe().memoizedState}function Lg(){return Qe().memoizedState}function X_(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Dt();e=zn(n);var o=Un(t,e,n);o!==null&&(It(o,t,n),oo(o,t,n)),t={cache:ql()},e.payload=t;return}t=t.return}}function Z_(e,t,n){var o=Dt();n={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Di(e)?Ug(t,n):(n=Al(e,t,n,o),n!==null&&(It(n,e,o),Bg(n,t,o)))}function zg(e,t,n){var o=Dt();uo(e,t,n,o)}function uo(e,t,n,o){var c={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Di(e))Ug(t,c);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var m=t.lastRenderedState,_=u(m,n);if(c.hasEagerState=!0,c.eagerState=_,jt(_,m))return hi(e,t,c,0),De===null&&mi(),!1}catch{}finally{}if(n=Al(e,t,c,o),n!==null)return It(n,e,o),Bg(n,t,o),!0}return!1}function lc(e,t,n,o){if(o={lane:2,revertLane:Lc(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Di(e)){if(t)throw Error(r(479))}else t=Al(e,n,o,2),t!==null&&It(t,e,2)}function Di(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Ug(e,t){ls=Si=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bg(e,t,n){if((n&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Zd(e,n)}}var po={readContext:ut,use:Ei,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke};po.useEffectEvent=Ke;var Pg={readContext:ut,use:Ei,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:Ig,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ci(4194308,4,Eg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ci(4194308,4,e,t)},useInsertionEffect:function(e,t){Ci(4,2,e,t)},useMemo:function(e,t){var n=ft();t=t===void 0?null:t;var o=e();if(Ia){kt(!0);try{e()}finally{kt(!1)}}return n.memoizedState=[o,t],o},useReducer:function(e,t,n){var o=ft();if(n!==void 0){var c=n(t);if(Ia){kt(!0);try{n(t)}finally{kt(!1)}}}else c=t;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Z_.bind(null,pe,e),[o.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:function(e){e=tc(e);var t=e.queue,n=zg.bind(null,pe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:sc,useDeferredValue:function(e,t){var n=ft();return oc(n,e,t)},useTransition:function(){var e=tc(!1);return e=qg.bind(null,pe,e.queue,!0,!1),ft().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var o=pe,c=ft();if(ve){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),De===null)throw Error(r(349));(Ge&127)!==0||dg(o,t,n)}c.memoizedState=n;var u={value:n,getSnapshot:t};return c.queue=u,Ig(gg.bind(null,o,u,e),[e]),o.flags|=2048,us(9,{destroy:void 0},pg.bind(null,o,u,n,t),null),n},useId:function(){var e=ft(),t=De.identifierPrefix;if(ve){var n=nn,o=tn;n=(o&~(1<<32-rt(o)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ji++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=z_++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:rc,useFormState:yg,useActionState:yg,useOptimistic:function(e){var t=ft();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=lc.bind(null,pe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Wl,useCacheRefresh:function(){return ft().memoizedState=X_.bind(null,pe)},useEffectEvent:function(e){var t=ft(),n={impl:e};return t.memoizedState=n,function(){if((Se&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}},cc={readContext:ut,use:Ei,useCallback:Cg,useContext:ut,useEffect:ac,useImperativeHandle:wg,useInsertionEffect:jg,useLayoutEffect:Ng,useMemo:Vg,useReducer:wi,useRef:Tg,useState:function(){return wi(Gn)},useDebugValue:sc,useDeferredValue:function(e,t){var n=Qe();return Dg(n,we.memoizedState,e,t)},useTransition:function(){var e=wi(Gn)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:co(e),t]},useSyncExternalStore:ug,useId:Hg,useHostTransitionStatus:rc,useFormState:vg,useActionState:vg,useOptimistic:function(e,t){var n=Qe();return bg(n,we,e,t)},useMemoCache:Wl,useCacheRefresh:Lg};cc.useEffectEvent=Sg;var Fg={readContext:ut,use:Ei,useCallback:Cg,useContext:ut,useEffect:ac,useImperativeHandle:wg,useInsertionEffect:jg,useLayoutEffect:Ng,useMemo:Vg,useReducer:ec,useRef:Tg,useState:function(){return ec(Gn)},useDebugValue:sc,useDeferredValue:function(e,t){var n=Qe();return we===null?oc(n,e,t):Dg(n,we.memoizedState,e,t)},useTransition:function(){var e=ec(Gn)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:co(e),t]},useSyncExternalStore:ug,useId:Hg,useHostTransitionStatus:rc,useFormState:Ag,useActionState:Ag,useOptimistic:function(e,t){var n=Qe();return we!==null?bg(n,we,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Wl,useCacheRefresh:Lg};Fg.useEffectEvent=Sg;function uc(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:k({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dc={enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Dt(),c=zn(o);c.payload=t,n!=null&&(c.callback=n),t=Un(e,c,o),t!==null&&(It(t,e,o),oo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Dt(),c=zn(o);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=Un(e,c,o),t!==null&&(It(t,e,o),oo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Dt(),o=zn(n);o.tag=2,t!=null&&(o.callback=t),t=Un(e,o,n),t!==null&&(It(t,e,n),oo(t,e,n))}};function Kg(e,t,n,o,c,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,m):t.prototype&&t.prototype.isPureReactComponent?!Js(n,o)||!Js(c,u):!0}function Xg(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&dc.enqueueReplaceState(t,t.state,null)}function Sa(e,t){var n=t;if("ref"in t){n={};for(var o in t)o!=="ref"&&(n[o]=t[o])}if(e=e.defaultProps){n===t&&(n=k({},n));for(var c in e)n[c]===void 0&&(n[c]=e[c])}return n}function Zg(e){gi(e)}function Yg(e){console.error(e)}function Qg(e){gi(e)}function qi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function Jg(e,t,n){try{var o=e.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function pc(e,t,n){return n=zn(n),n.tag=3,n.payload={element:null},n.callback=function(){qi(e,t)},n}function Wg(e){return e=zn(e),e.tag=3,e}function $g(e,t,n,o){var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var u=o.value;e.payload=function(){return c(u)},e.callback=function(){Jg(t,n,o)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Jg(t,n,o),typeof c!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var _=o.stack;this.componentDidCatch(o.value,{componentStack:_!==null?_:""})})}function Y_(e,t,n,o,c){if(n.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=n.alternate,t!==null&&ns(t,n,c,!0),n=Et.current,n!==null){switch(n.tag){case 31:case 13:return Pt===null?Zi():n.alternate===null&&Xe===0&&(Xe=3),n.flags&=-257,n.flags|=65536,n.lanes=c,o===vi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([o]):t.add(o),Rc(e,o,c)),!1;case 22:return n.flags|=65536,o===vi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([o]):n.add(o)),Rc(e,o,c)),!1}throw Error(r(435,n.tag))}return Rc(e,o,c),Zi(),!1}if(ve)return t=Et.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,o!==El&&(e=Error(r(422),{cause:o}),eo(Lt(e,n)))):(o!==El&&(t=Error(r(423),{cause:o}),eo(Lt(t,n))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=Lt(o,n),c=pc(e.stateNode,o,c),Ul(e,c),Xe!==4&&(Xe=2)),!1;var u=Error(r(520),{cause:o});if(u=Lt(u,n),ko===null?ko=[u]:ko.push(u),Xe!==4&&(Xe=2),t===null)return!0;o=Lt(o,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=c&-c,n.lanes|=e,e=pc(n.stateNode,o,e),Ul(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Zn===null||!Zn.has(u))))return n.flags|=65536,c&=-c,n.lanes|=c,c=Wg(c),$g(c,e,n,o),Ul(n,c),!1}n=n.return}while(n!==null);return!1}var gc=Error(r(461)),$e=!1;function dt(e,t,n,o){t.child=e===null?ag(t,null,n,o):Ta(t,e.child,n,o)}function em(e,t,n,o,c){n=n.render;var u=t.ref;if("ref"in o){var m={};for(var _ in o)_!=="ref"&&(m[_]=o[_])}else m=o;return ya(t),o=Zl(e,t,n,m,u,c),_=Yl(),e!==null&&!$e?(Ql(e,t,c),yn(e,t,c)):(ve&&_&&jl(t),t.flags|=1,dt(e,t,o,c),t.child)}function tm(e,t,n,o,c){if(e===null){var u=n.type;return typeof u=="function"&&!Tl(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,nm(e,t,u,o,c)):(e=fi(n.type,null,o,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Gc(e,c)){var m=u.memoizedProps;if(n=n.compare,n=n!==null?n:Js,n(m,o)&&e.ref===t.ref)return yn(e,t,c)}return t.flags|=1,e=bn(u,o),e.ref=t.ref,e.return=t,t.child=e}function nm(e,t,n,o,c){if(e!==null){var u=e.memoizedProps;if(Js(u,o)&&e.ref===t.ref)if($e=!1,t.pendingProps=o=u,Gc(e,c))(e.flags&131072)!==0&&($e=!0);else return t.lanes=e.lanes,yn(e,t,c)}return mc(e,t,n,o,c)}function am(e,t,n,o){var c=o.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(o=t.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~u}else o=0,t.child=null;return sm(e,t,u,n,o)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gi(t,u!==null?u.cachePool:null),u!==null?ig(t,u):Pl(),rg(t);else return o=t.lanes=536870912,sm(e,t,u!==null?u.baseLanes|n:n,n,o)}else u!==null?(Gi(t,u.cachePool),ig(t,u),Pn(),t.memoizedState=null):(e!==null&&Gi(t,null),Pl(),Pn());return dt(e,t,c,n),t.child}function go(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function sm(e,t,n,o,c){var u=Ol();return u=u===null?null:{parent:Je._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&Gi(t,null),Pl(),rg(t),e!==null&&ns(e,t,o,!0),t.childLanes=c,null}function Ri(e,t){return t=Hi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function om(e,t,n){return Ta(t,e.child,null,n),e=Ri(t,t.pendingProps),e.flags|=2,wt(t),t.memoizedState=null,e}function Q_(e,t,n){var o=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ve){if(o.mode==="hidden")return e=Ri(t,o),t.lanes=536870912,go(null,e);if(Kl(t),(e=Le)?(e=fh(e,Bt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qn!==null?{id:tn,overflow:nn}:null,retryLane:536870912,hydrationErrors:null},n=Up(e),n.return=t,t.child=n,ct=t,Le=null)):e=null,e===null)throw On(t);return t.lanes=536870912,null}return Ri(t,o)}var u=e.memoizedState;if(u!==null){var m=u.dehydrated;if(Kl(t),c)if(t.flags&256)t.flags&=-257,t=om(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if($e||ns(e,t,n,!1),c=(n&e.childLanes)!==0,$e||c){if(o=De,o!==null&&(m=Yd(o,n),m!==0&&m!==u.retryLane))throw u.retryLane=m,xa(e,m),It(o,e,m),gc;Zi(),t=om(e,t,n)}else e=u.treeContext,Le=Ft(m.nextSibling),ct=t,ve=!0,Rn=null,Bt=!1,e!==null&&Fp(t,e),t=Ri(t,o),t.flags|=4096;return t}return e=bn(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Oi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(r(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function mc(e,t,n,o,c){return ya(t),n=Zl(e,t,n,o,void 0,c),o=Yl(),e!==null&&!$e?(Ql(e,t,c),yn(e,t,c)):(ve&&o&&jl(t),t.flags|=1,dt(e,t,n,c),t.child)}function im(e,t,n,o,c,u){return ya(t),t.updateQueue=null,n=cg(t,o,n,c),lg(e),o=Yl(),e!==null&&!$e?(Ql(e,t,u),yn(e,t,u)):(ve&&o&&jl(t),t.flags|=1,dt(e,t,n,u),t.child)}function rm(e,t,n,o,c){if(ya(t),t.stateNode===null){var u=Wa,m=n.contextType;typeof m=="object"&&m!==null&&(u=ut(m)),u=new n(o,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=dc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=o,u.state=t.memoizedState,u.refs={},Ll(t),m=n.contextType,u.context=typeof m=="object"&&m!==null?ut(m):Wa,u.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(uc(t,n,m,o),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&dc.enqueueReplaceState(u,u.state,null),ro(t,o,u,c),io(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){u=t.stateNode;var _=t.memoizedProps,v=Sa(n,_);u.props=v;var E=u.context,z=n.contextType;m=Wa,typeof z=="object"&&z!==null&&(m=ut(z));var P=n.getDerivedStateFromProps;z=typeof P=="function"||typeof u.getSnapshotBeforeUpdate=="function",_=t.pendingProps!==_,z||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(_||E!==m)&&Xg(t,u,o,m),Ln=!1;var w=t.memoizedState;u.state=w,ro(t,o,u,c),io(),E=t.memoizedState,_||w!==E||Ln?(typeof P=="function"&&(uc(t,n,P,o),E=t.memoizedState),(v=Ln||Kg(t,n,v,o,w,E,m))?(z||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=E),u.props=o,u.state=E,u.context=m,o=v):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{u=t.stateNode,zl(e,t),m=t.memoizedProps,z=Sa(n,m),u.props=z,P=t.pendingProps,w=u.context,E=n.contextType,v=Wa,typeof E=="object"&&E!==null&&(v=ut(E)),_=n.getDerivedStateFromProps,(E=typeof _=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==P||w!==v)&&Xg(t,u,o,v),Ln=!1,w=t.memoizedState,u.state=w,ro(t,o,u,c),io();var R=t.memoizedState;m!==P||w!==R||Ln||e!==null&&e.dependencies!==null&&_i(e.dependencies)?(typeof _=="function"&&(uc(t,n,_,o),R=t.memoizedState),(z=Ln||Kg(t,n,z,o,w,R,v)||e!==null&&e.dependencies!==null&&_i(e.dependencies))?(E||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,R,v),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,R,v)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=R),u.props=o,u.state=R,u.context=v,o=z):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),o=!1)}return u=o,Oi(e,t),o=(t.flags&128)!==0,u||o?(u=t.stateNode,n=o&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&o?(t.child=Ta(t,e.child,null,c),t.child=Ta(t,null,n,c)):dt(e,t,n,c),t.memoizedState=u.state,e=t.child):e=yn(e,t,c),e}function lm(e,t,n,o){return ka(),t.flags|=256,dt(e,t,n,o),t.child}var hc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:Jp()}}function fc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Vt),e}function cm(e,t,n){var o=t.pendingProps,c=!1,u=(t.flags&128)!==0,m;if((m=u)||(m=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),m&&(c=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(c?Bn(t):Pn(),(e=Le)?(e=fh(e,Bt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qn!==null?{id:tn,overflow:nn}:null,retryLane:536870912,hydrationErrors:null},n=Up(e),n.return=t,t.child=n,ct=t,Le=null)):e=null,e===null)throw On(t);return $c(e)?t.lanes=32:t.lanes=536870912,null}var _=o.children;return o=o.fallback,c?(Pn(),c=t.mode,_=Hi({mode:"hidden",children:_},c),o=_a(o,c,n,null),_.return=t,o.return=t,_.sibling=o,t.child=_,o=t.child,o.memoizedState=bc(n),o.childLanes=fc(e,m,n),t.memoizedState=hc,go(null,o)):(Bn(t),xc(t,_))}var v=e.memoizedState;if(v!==null&&(_=v.dehydrated,_!==null)){if(u)t.flags&256?(Bn(t),t.flags&=-257,t=_c(e,t,n)):t.memoizedState!==null?(Pn(),t.child=e.child,t.flags|=128,t=null):(Pn(),_=o.fallback,c=t.mode,o=Hi({mode:"visible",children:o.children},c),_=_a(_,c,n,null),_.flags|=2,o.return=t,_.return=t,o.sibling=_,t.child=o,Ta(t,e.child,null,n),o=t.child,o.memoizedState=bc(n),o.childLanes=fc(e,m,n),t.memoizedState=hc,t=go(null,o));else if(Bn(t),$c(_)){if(m=_.nextSibling&&_.nextSibling.dataset,m)var E=m.dgst;m=E,o=Error(r(419)),o.stack="",o.digest=m,eo({value:o,source:null,stack:null}),t=_c(e,t,n)}else if($e||ns(e,t,n,!1),m=(n&e.childLanes)!==0,$e||m){if(m=De,m!==null&&(o=Yd(m,n),o!==0&&o!==v.retryLane))throw v.retryLane=o,xa(e,o),It(m,e,o),gc;Wc(_)||Zi(),t=_c(e,t,n)}else Wc(_)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Le=Ft(_.nextSibling),ct=t,ve=!0,Rn=null,Bt=!1,e!==null&&Fp(t,e),t=xc(t,o.children),t.flags|=4096);return t}return c?(Pn(),_=o.fallback,c=t.mode,v=e.child,E=v.sibling,o=bn(v,{mode:"hidden",children:o.children}),o.subtreeFlags=v.subtreeFlags&65011712,E!==null?_=bn(E,_):(_=_a(_,c,n,null),_.flags|=2),_.return=t,o.return=t,o.sibling=_,t.child=o,go(null,o),o=t.child,_=e.child.memoizedState,_===null?_=bc(n):(c=_.cachePool,c!==null?(v=Je._currentValue,c=c.parent!==v?{parent:v,pool:v}:c):c=Jp(),_={baseLanes:_.baseLanes|n,cachePool:c}),o.memoizedState=_,o.childLanes=fc(e,m,n),t.memoizedState=hc,go(e.child,o)):(Bn(t),n=e.child,e=n.sibling,n=bn(n,{mode:"visible",children:o.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function xc(e,t){return t=Hi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Hi(e,t){return e=Nt(22,e,null,t),e.lanes=0,e}function _c(e,t,n){return Ta(t,e.child,null,n),e=xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function um(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Vl(e.return,t,n)}function kc(e,t,n,o,c,u){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:c,treeForkCount:u}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=o,m.tail=n,m.tailMode=c,m.treeForkCount=u)}function dm(e,t,n){var o=t.pendingProps,c=o.revealOrder,u=o.tail;o=o.children;var m=Ye.current,_=(m&2)!==0;if(_?(m=m&1|2,t.flags|=128):m&=1,W(Ye,m),dt(e,t,o,n),o=ve?$s:0,!_&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&um(e,n,t);else if(e.tag===19)um(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(n=t.child,c=null;n!==null;)e=n.alternate,e!==null&&Ii(e)===null&&(c=n),n=n.sibling;n=c,n===null?(c=t.child,t.child=null):(c=n.sibling,n.sibling=null),kc(t,!1,c,n,u,o);break;case"backwards":case"unstable_legacy-backwards":for(n=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&Ii(e)===null){t.child=c;break}e=c.sibling,c.sibling=n,n=c,c=e}kc(t,!0,n,null,u,o);break;case"together":kc(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function yn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ns(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=bn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&_i(e)))}function J_(e,t,n){switch(t.tag){case 3:it(t,t.stateNode.containerInfo),Hn(t,Je,e.memoizedState.cache),ka();break;case 27:case 5:da(t);break;case 4:it(t,t.stateNode.containerInfo);break;case 10:Hn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Kl(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(Bn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?cm(e,t,n):(Bn(t),e=yn(e,t,n),e!==null?e.sibling:null);Bn(t);break;case 19:var c=(e.flags&128)!==0;if(o=(n&t.childLanes)!==0,o||(ns(e,t,n,!1),o=(n&t.childLanes)!==0),c){if(o)return dm(e,t,n);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),W(Ye,Ye.current),o)break;return null;case 22:return t.lanes=0,am(e,t,n,t.pendingProps);case 24:Hn(t,Je,e.memoizedState.cache)}return yn(e,t,n)}function pm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)$e=!0;else{if(!Gc(e,n)&&(t.flags&128)===0)return $e=!1,J_(e,t,n);$e=(e.flags&131072)!==0}else $e=!1,ve&&(t.flags&1048576)!==0&&Pp(t,$s,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=Ma(t.elementType),t.type=e,typeof e=="function")Tl(e)?(o=Sa(e,o),t.tag=1,t=rm(null,t,e,o,n)):(t.tag=0,t=mc(null,t,e,o,n));else{if(e!=null){var c=e.$$typeof;if(c===D){t.tag=11,t=em(null,t,e,o,n);break e}else if(c===q){t.tag=14,t=tm(null,t,e,o,n);break e}}throw t=Oe(e)||e,Error(r(306,t,""))}}return t;case 0:return mc(e,t,t.type,t.pendingProps,n);case 1:return o=t.type,c=Sa(o,t.pendingProps),rm(e,t,o,c,n);case 3:e:{if(it(t,t.stateNode.containerInfo),e===null)throw Error(r(387));o=t.pendingProps;var u=t.memoizedState;c=u.element,zl(e,t),ro(t,o,null,n);var m=t.memoizedState;if(o=m.cache,Hn(t,Je,o),o!==u.cache&&Dl(t,[Je],n,!0),io(),o=m.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=lm(e,t,o,n);break e}else if(o!==c){c=Lt(Error(r(424)),t),eo(c),t=lm(e,t,o,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Le=Ft(e.firstChild),ct=t,ve=!0,Rn=null,Bt=!0,n=ag(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ka(),o===c){t=yn(e,t,n);break e}dt(e,t,o,n)}t=t.child}return t;case 26:return Oi(e,t),e===null?(n=vh(t.type,null,t.pendingProps,null))?t.memoizedState=n:ve||(n=t.type,e=t.pendingProps,o=tr(he.current).createElement(n),o[lt]=t,o[Gt]=e,pt(o,n,e),st(o),t.stateNode=o):t.memoizedState=vh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return da(t),e===null&&ve&&(o=t.stateNode=kh(t.type,t.pendingProps,he.current),ct=t,Bt=!0,c=Le,Wn(t.type)?(eu=c,Le=Ft(o.firstChild)):Le=c),dt(e,t,t.pendingProps.children,n),Oi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((c=o=Le)&&(o=I1(o,t.type,t.pendingProps,Bt),o!==null?(t.stateNode=o,ct=t,Le=Ft(o.firstChild),Bt=!1,c=!0):c=!1),c||On(t)),da(t),c=t.type,u=t.pendingProps,m=e!==null?e.memoizedProps:null,o=u.children,Yc(c,u)?o=null:m!==null&&Yc(c,m)&&(t.flags|=32),t.memoizedState!==null&&(c=Zl(e,t,U_,null,null,n),So._currentValue=c),Oi(e,t),dt(e,t,o,n),t.child;case 6:return e===null&&ve&&((e=n=Le)&&(n=S1(n,t.pendingProps,Bt),n!==null?(t.stateNode=n,ct=t,Le=null,e=!0):e=!1),e||On(t)),null;case 13:return cm(e,t,n);case 4:return it(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Ta(t,null,o,n):dt(e,t,o,n),t.child;case 11:return em(e,t,t.type,t.pendingProps,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:return o=t.pendingProps,Hn(t,t.type,o.value),dt(e,t,o.children,n),t.child;case 9:return c=t.type._context,o=t.pendingProps.children,ya(t),c=ut(c),o=o(c),t.flags|=1,dt(e,t,o,n),t.child;case 14:return tm(e,t,t.type,t.pendingProps,n);case 15:return nm(e,t,t.type,t.pendingProps,n);case 19:return dm(e,t,n);case 31:return Q_(e,t,n);case 22:return am(e,t,n,t.pendingProps);case 24:return ya(t),o=ut(Je),e===null?(c=Ol(),c===null&&(c=De,u=ql(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=n),c=u),t.memoizedState={parent:o,cache:c},Ll(t),Hn(t,Je,c)):((e.lanes&n)!==0&&(zl(e,t),ro(t,null,null,n),io()),c=e.memoizedState,u=t.memoizedState,c.parent!==o?(c={parent:o,cache:o},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),Hn(t,Je,o)):(o=u.cache,Hn(t,Je,o),o!==c.cache&&Dl(t,[Je],n,!0))),dt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function vn(e){e.flags|=4}function yc(e,t,n,o,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Hm())e.flags|=8192;else throw Aa=vi,Hl}else e.flags&=-16777217}function gm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Sh(t))if(Hm())e.flags|=8192;else throw Aa=vi,Hl}function Li(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Kd():536870912,e.lanes|=t,ms|=t)}function mo(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var c=e.child;c!==null;)n|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)n|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function W_(e,t,n){var o=t.pendingProps;switch(Nl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return n=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),_n(Je),Be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ts(t)?vn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,wl())),ze(t),null;case 26:var c=t.type,u=t.memoizedState;return e===null?(vn(t),u!==null?(ze(t),gm(t,u)):(ze(t),yc(t,c,null,o,n))):u?u!==e.memoizedState?(vn(t),ze(t),gm(t,u)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&vn(t),ze(t),yc(t,c,e,o,n)),null;case 27:if(Cn(t),n=he.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&vn(t);else{if(!o){if(t.stateNode===null)throw Error(r(166));return ze(t),null}e=te.current,ts(t)?Kp(t):(e=kh(c,o,n),t.stateNode=e,vn(t))}return ze(t),null;case 5:if(Cn(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&vn(t);else{if(!o){if(t.stateNode===null)throw Error(r(166));return ze(t),null}if(u=te.current,ts(t))Kp(t);else{var m=tr(he.current);switch(u){case 1:u=m.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=m.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=m.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=m.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=m.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof o.is=="string"?m.createElement("select",{is:o.is}):m.createElement("select"),o.multiple?u.multiple=!0:o.size&&(u.size=o.size);break;default:u=typeof o.is=="string"?m.createElement(c,{is:o.is}):m.createElement(c)}}u[lt]=t,u[Gt]=o;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)u.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=u;e:switch(pt(u,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&vn(t)}}return ze(t),yc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&vn(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(r(166));if(e=he.current,ts(t)){if(e=t.stateNode,n=t.memoizedProps,o=null,c=ct,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[lt]=t,e=!!(e.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||ch(e.nodeValue,n)),e||On(t,!0)}else e=tr(e).createTextNode(o),e[lt]=t,t.stateNode=e}return ze(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(o=ts(t),n!==null){if(e===null){if(!o)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[lt]=t}else ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else n=wl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(wt(t),t):(wt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return ze(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=ts(t),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[lt]=t}else ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),c=!1}else c=wl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(wt(t),t):(wt(t),null)}return wt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=o!==null,e=e!==null&&e.memoizedState!==null,n&&(o=t.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),u=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==c&&(o.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Li(t,t.updateQueue),ze(t),null);case 4:return Be(),e===null&&Pc(t.stateNode.containerInfo),ze(t),null;case 10:return _n(t.type),ze(t),null;case 19:if(B(Ye),o=t.memoizedState,o===null)return ze(t),null;if(c=(t.flags&128)!==0,u=o.rendering,u===null)if(c)mo(o,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Ii(e),u!==null){for(t.flags|=128,mo(o,!1),e=u.updateQueue,t.updateQueue=e,Li(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)zp(n,e),n=n.sibling;return W(Ye,Ye.current&1|2),ve&&fn(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&ht()>Fi&&(t.flags|=128,c=!0,mo(o,!1),t.lanes=4194304)}else{if(!c)if(e=Ii(u),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,Li(t,e),mo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!ve)return ze(t),null}else 2*ht()-o.renderingStartTime>Fi&&n!==536870912&&(t.flags|=128,c=!0,mo(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(e=o.last,e!==null?e.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ht(),e.sibling=null,n=Ye.current,W(Ye,c?n&1|2:n&1),ve&&fn(t,o.treeForkCount),e):(ze(t),null);case 22:case 23:return wt(t),Fl(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(n&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),n=t.updateQueue,n!==null&&Li(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==n&&(t.flags|=2048),e!==null&&B(va),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),_n(Je),ze(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function $_(e,t){switch(Nl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _n(Je),Be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Cn(t),null;case 31:if(t.memoizedState!==null){if(wt(t),t.alternate===null)throw Error(r(340));ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(wt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Ye),null;case 4:return Be(),null;case 10:return _n(t.type),null;case 22:case 23:return wt(t),Fl(),e!==null&&B(va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return _n(Je),null;case 25:return null;default:return null}}function mm(e,t){switch(Nl(t),t.tag){case 3:_n(Je),Be();break;case 26:case 27:case 5:Cn(t);break;case 4:Be();break;case 31:t.memoizedState!==null&&wt(t);break;case 13:wt(t);break;case 19:B(Ye);break;case 10:_n(t.type);break;case 22:case 23:wt(t),Fl(),e!==null&&B(va);break;case 24:_n(Je)}}function ho(e,t){try{var n=t.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var c=o.next;n=c;do{if((n.tag&e)===e){o=void 0;var u=n.create,m=n.inst;o=u(),m.destroy=o}n=n.next}while(n!==c)}}catch(_){Ee(t,t.return,_)}}function Fn(e,t,n){try{var o=t.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var u=c.next;o=u;do{if((o.tag&e)===e){var m=o.inst,_=m.destroy;if(_!==void 0){m.destroy=void 0,c=t;var v=n,E=_;try{E()}catch(z){Ee(c,v,z)}}}o=o.next}while(o!==u)}}catch(z){Ee(t,t.return,z)}}function hm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{og(t,n)}catch(o){Ee(e,e.return,o)}}}function bm(e,t,n){n.props=Sa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(o){Ee(e,t,o)}}function bo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof n=="function"?e.refCleanup=n(o):n.current=o}}catch(c){Ee(e,t,c)}}function an(e,t){var n=e.ref,o=e.refCleanup;if(n!==null)if(typeof o=="function")try{o()}catch(c){Ee(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(c){Ee(e,t,c)}else n.current=null}function fm(e){var t=e.type,n=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&o.focus();break e;case"img":n.src?o.src=n.src:n.srcSet&&(o.srcset=n.srcSet)}}catch(c){Ee(e,e.return,c)}}function vc(e,t,n){try{var o=e.stateNode;G1(o,e.type,n,t),o[Gt]=t}catch(c){Ee(e,e.return,c)}}function xm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wn(e.type)||e.tag===4}function Mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ac(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mn));else if(o!==4&&(o===27&&Wn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Ac(e,t,n),e=e.sibling;e!==null;)Ac(e,t,n),e=e.sibling}function zi(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(o===27&&Wn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(zi(e,t,n),e=e.sibling;e!==null;)zi(e,t,n),e=e.sibling}function _m(e){var t=e.stateNode,n=e.memoizedProps;try{for(var o=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);pt(t,o,n),t[lt]=e,t[Gt]=n}catch(u){Ee(e,e.return,u)}}var Mn=!1,et=!1,Tc=!1,km=typeof WeakSet=="function"?WeakSet:Set,ot=null;function e1(e,t){if(e=e.containerInfo,Xc=lr,e=wp(e),_l(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var c=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var m=0,_=-1,v=-1,E=0,z=0,P=e,w=null;t:for(;;){for(var R;P!==n||c!==0&&P.nodeType!==3||(_=m+c),P!==u||o!==0&&P.nodeType!==3||(v=m+o),P.nodeType===3&&(m+=P.nodeValue.length),(R=P.firstChild)!==null;)w=P,P=R;for(;;){if(P===e)break t;if(w===n&&++E===c&&(_=m),w===u&&++z===o&&(v=m),(R=P.nextSibling)!==null)break;P=w,w=P.parentNode}P=R}n=_===-1||v===-1?null:{start:_,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zc={focusedElem:e,selectionRange:n},lr=!1,ot=t;ot!==null;)if(t=ot,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ot=e;else for(;ot!==null;){switch(t=ot,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)c=e[n],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,c=u.memoizedProps,u=u.memoizedState,o=n.stateNode;try{var ee=Sa(n.type,c);e=o.getSnapshotBeforeUpdate(ee,u),o.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Ee(n,n.return,ie)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Jc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,ot=e;break}ot=t.return}}function Gm(e,t,n){var o=n.flags;switch(n.tag){case 0:case 11:case 15:Tn(e,n),o&4&&ho(5,n);break;case 1:if(Tn(e,n),o&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Ee(n,n.return,m)}else{var c=Sa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Ee(n,n.return,m)}}o&64&&hm(n),o&512&&bo(n,n.return);break;case 3:if(Tn(e,n),o&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{og(e,t)}catch(m){Ee(n,n.return,m)}}break;case 27:t===null&&o&4&&_m(n);case 26:case 5:Tn(e,n),t===null&&o&4&&fm(n),o&512&&bo(n,n.return);break;case 12:Tn(e,n);break;case 31:Tn(e,n),o&4&&Mm(e,n);break;case 13:Tn(e,n),o&4&&Am(e,n),o&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=c1.bind(null,n),j1(e,n))));break;case 22:if(o=n.memoizedState!==null||Mn,!o){t=t!==null&&t.memoizedState!==null||et,c=Mn;var u=et;Mn=o,(et=t)&&!u?In(e,n,(n.subtreeFlags&8772)!==0):Tn(e,n),Mn=c,et=u}break;case 30:break;default:Tn(e,n)}}function ym(e){var t=e.alternate;t!==null&&(e.alternate=null,ym(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&nl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pe=null,vt=!1;function An(e,t,n){for(n=n.child;n!==null;)vm(e,t,n),n=n.sibling}function vm(e,t,n){if(ge&&typeof ge.onCommitFiberUnmount=="function")try{ge.onCommitFiberUnmount(fe,n)}catch{}switch(n.tag){case 26:et||an(n,t),An(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:et||an(n,t);var o=Pe,c=vt;Wn(n.type)&&(Pe=n.stateNode,vt=!1),An(e,t,n),Ao(n.stateNode),Pe=o,vt=c;break;case 5:et||an(n,t);case 6:if(o=Pe,c=vt,Pe=null,An(e,t,n),Pe=o,vt=c,Pe!==null)if(vt)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(n.stateNode)}catch(u){Ee(n,t,u)}else try{Pe.removeChild(n.stateNode)}catch(u){Ee(n,t,u)}break;case 18:Pe!==null&&(vt?(e=Pe,hh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ys(e)):hh(Pe,n.stateNode));break;case 4:o=Pe,c=vt,Pe=n.stateNode.containerInfo,vt=!0,An(e,t,n),Pe=o,vt=c;break;case 0:case 11:case 14:case 15:Fn(2,n,t),et||Fn(4,n,t),An(e,t,n);break;case 1:et||(an(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"&&bm(n,t,o)),An(e,t,n);break;case 21:An(e,t,n);break;case 22:et=(o=et)||n.memoizedState!==null,An(e,t,n),et=o;break;default:An(e,t,n)}}function Mm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ys(e)}catch(n){Ee(t,t.return,n)}}}function Am(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ys(e)}catch(n){Ee(t,t.return,n)}}function t1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new km),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new km),t;default:throw Error(r(435,e.tag))}}function Ui(e,t){var n=t1(e);t.forEach(function(o){if(!n.has(o)){n.add(o);var c=u1.bind(null,e,o);o.then(c,c)}})}function Mt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var c=n[o],u=e,m=t,_=m;e:for(;_!==null;){switch(_.tag){case 27:if(Wn(_.type)){Pe=_.stateNode,vt=!1;break e}break;case 5:Pe=_.stateNode,vt=!1;break e;case 3:case 4:Pe=_.stateNode.containerInfo,vt=!0;break e}_=_.return}if(Pe===null)throw Error(r(160));vm(u,m,c),Pe=null,vt=!1,u=c.alternate,u!==null&&(u.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Tm(t,e),t=t.sibling}var Qt=null;function Tm(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Mt(t,e),At(e),o&4&&(Fn(3,e,e.return),ho(3,e),Fn(5,e,e.return));break;case 1:Mt(t,e),At(e),o&512&&(et||n===null||an(n,n.return)),o&64&&Mn&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?o:n.concat(o))));break;case 26:var c=Qt;if(Mt(t,e),At(e),o&512&&(et||n===null||an(n,n.return)),o&4){var u=n!==null?n.memoizedState:null;if(o=e.memoizedState,n===null)if(o===null)if(e.stateNode===null){e:{o=e.type,n=e.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":u=c.getElementsByTagName("title")[0],(!u||u[Us]||u[lt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=c.createElement(o),c.head.insertBefore(u,c.querySelector("head > title"))),pt(u,o,n),u[lt]=e,st(u),o=u;break e;case"link":var m=Th("link","href",c).get(o+(n.href||""));if(m){for(var _=0;_<m.length;_++)if(u=m[_],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(_,1);break t}}u=c.createElement(o),pt(u,o,n),c.head.appendChild(u);break;case"meta":if(m=Th("meta","content",c).get(o+(n.content||""))){for(_=0;_<m.length;_++)if(u=m[_],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(_,1);break t}}u=c.createElement(o),pt(u,o,n),c.head.appendChild(u);break;default:throw Error(r(468,o))}u[lt]=e,st(u),o=u}e.stateNode=o}else Ih(c,e.type,e.stateNode);else e.stateNode=Ah(c,o,e.memoizedProps);else u!==o?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,o===null?Ih(c,e.type,e.stateNode):Ah(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&vc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Mt(t,e),At(e),o&512&&(et||n===null||an(n,n.return)),n!==null&&o&4&&vc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Mt(t,e),At(e),o&512&&(et||n===null||an(n,n.return)),e.flags&32){c=e.stateNode;try{Fa(c,"")}catch(ee){Ee(e,e.return,ee)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,vc(e,c,n!==null?n.memoizedProps:c)),o&1024&&(Tc=!0);break;case 6:if(Mt(t,e),At(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,n=e.stateNode;try{n.nodeValue=o}catch(ee){Ee(e,e.return,ee)}}break;case 3:if(sr=null,c=Qt,Qt=nr(t.containerInfo),Mt(t,e),Qt=c,At(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{ys(t.containerInfo)}catch(ee){Ee(e,e.return,ee)}Tc&&(Tc=!1,Im(e));break;case 4:o=Qt,Qt=nr(e.stateNode.containerInfo),Mt(t,e),At(e),Qt=o;break;case 12:Mt(t,e),At(e);break;case 31:Mt(t,e),At(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ui(e,o)));break;case 13:Mt(t,e),At(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Pi=ht()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ui(e,o)));break;case 22:c=e.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,E=Mn,z=et;if(Mn=E||c,et=z||v,Mt(t,e),et=z,Mn=E,At(e),o&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(n===null||v||Mn||et||ja(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){v=n=t;try{if(u=v.stateNode,c)m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{_=v.stateNode;var P=v.memoizedProps.style,w=P!=null&&P.hasOwnProperty("display")?P.display:null;_.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(ee){Ee(v,v.return,ee)}}}else if(t.tag===6){if(n===null){v=t;try{v.stateNode.nodeValue=c?"":v.memoizedProps}catch(ee){Ee(v,v.return,ee)}}}else if(t.tag===18){if(n===null){v=t;try{var R=v.stateNode;c?bh(R,!0):bh(v.stateNode,!1)}catch(ee){Ee(v,v.return,ee)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(n=o.retryQueue,n!==null&&(o.retryQueue=null,Ui(e,n))));break;case 19:Mt(t,e),At(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ui(e,o)));break;case 30:break;case 21:break;default:Mt(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{for(var n,o=e.return;o!==null;){if(xm(o)){n=o;break}o=o.return}if(n==null)throw Error(r(160));switch(n.tag){case 27:var c=n.stateNode,u=Mc(e);zi(e,u,c);break;case 5:var m=n.stateNode;n.flags&32&&(Fa(m,""),n.flags&=-33);var _=Mc(e);zi(e,_,m);break;case 3:case 4:var v=n.stateNode.containerInfo,E=Mc(e);Ac(e,E,v);break;default:throw Error(r(161))}}catch(z){Ee(e,e.return,z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Im(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Im(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Tn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Gm(e,t.alternate,t),t=t.sibling}function ja(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Fn(4,t,t.return),ja(t);break;case 1:an(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&bm(t,t.return,n),ja(t);break;case 27:Ao(t.stateNode);case 26:case 5:an(t,t.return),ja(t);break;case 22:t.memoizedState===null&&ja(t);break;case 30:ja(t);break;default:ja(t)}e=e.sibling}}function In(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,c=e,u=t,m=u.flags;switch(u.tag){case 0:case 11:case 15:In(c,u,n),ho(4,u);break;case 1:if(In(c,u,n),o=u,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(E){Ee(o,o.return,E)}if(o=u,c=o.updateQueue,c!==null){var _=o.stateNode;try{var v=c.shared.hiddenCallbacks;if(v!==null)for(c.shared.hiddenCallbacks=null,c=0;c<v.length;c++)sg(v[c],_)}catch(E){Ee(o,o.return,E)}}n&&m&64&&hm(u),bo(u,u.return);break;case 27:_m(u);case 26:case 5:In(c,u,n),n&&o===null&&m&4&&fm(u),bo(u,u.return);break;case 12:In(c,u,n);break;case 31:In(c,u,n),n&&m&4&&Mm(c,u);break;case 13:In(c,u,n),n&&m&4&&Am(c,u);break;case 22:u.memoizedState===null&&In(c,u,n),bo(u,u.return);break;case 30:break;default:In(c,u,n)}t=t.sibling}}function Ic(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&to(n))}function Sc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&to(e))}function Jt(e,t,n,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sm(e,t,n,o),t=t.sibling}function Sm(e,t,n,o){var c=t.flags;switch(t.tag){case 0:case 11:case 15:Jt(e,t,n,o),c&2048&&ho(9,t);break;case 1:Jt(e,t,n,o);break;case 3:Jt(e,t,n,o),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&to(e)));break;case 12:if(c&2048){Jt(e,t,n,o),e=t.stateNode;try{var u=t.memoizedProps,m=u.id,_=u.onPostCommit;typeof _=="function"&&_(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Ee(t,t.return,v)}}else Jt(e,t,n,o);break;case 31:Jt(e,t,n,o);break;case 13:Jt(e,t,n,o);break;case 23:break;case 22:u=t.stateNode,m=t.alternate,t.memoizedState!==null?u._visibility&2?Jt(e,t,n,o):fo(e,t):u._visibility&2?Jt(e,t,n,o):(u._visibility|=2,ds(e,t,n,o,(t.subtreeFlags&10256)!==0||!1)),c&2048&&Ic(m,t);break;case 24:Jt(e,t,n,o),c&2048&&Sc(t.alternate,t);break;default:Jt(e,t,n,o)}}function ds(e,t,n,o,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,m=t,_=n,v=o,E=m.flags;switch(m.tag){case 0:case 11:case 15:ds(u,m,_,v,c),ho(8,m);break;case 23:break;case 22:var z=m.stateNode;m.memoizedState!==null?z._visibility&2?ds(u,m,_,v,c):fo(u,m):(z._visibility|=2,ds(u,m,_,v,c)),c&&E&2048&&Ic(m.alternate,m);break;case 24:ds(u,m,_,v,c),c&&E&2048&&Sc(m.alternate,m);break;default:ds(u,m,_,v,c)}t=t.sibling}}function fo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,o=t,c=o.flags;switch(o.tag){case 22:fo(n,o),c&2048&&Ic(o.alternate,o);break;case 24:fo(n,o),c&2048&&Sc(o.alternate,o);break;default:fo(n,o)}t=t.sibling}}var xo=8192;function ps(e,t,n){if(e.subtreeFlags&xo)for(e=e.child;e!==null;)jm(e,t,n),e=e.sibling}function jm(e,t,n){switch(e.tag){case 26:ps(e,t,n),e.flags&xo&&e.memoizedState!==null&&z1(n,Qt,e.memoizedState,e.memoizedProps);break;case 5:ps(e,t,n);break;case 3:case 4:var o=Qt;Qt=nr(e.stateNode.containerInfo),ps(e,t,n),Qt=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=xo,xo=16777216,ps(e,t,n),xo=o):ps(e,t,n));break;default:ps(e,t,n)}}function Nm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function _o(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];ot=o,wm(o,e)}Nm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Em(e),e=e.sibling}function Em(e){switch(e.tag){case 0:case 11:case 15:_o(e),e.flags&2048&&Fn(9,e,e.return);break;case 3:_o(e);break;case 12:_o(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Bi(e)):_o(e);break;default:_o(e)}}function Bi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];ot=o,wm(o,e)}Nm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Fn(8,t,t.return),Bi(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Bi(t));break;default:Bi(t)}e=e.sibling}}function wm(e,t){for(;ot!==null;){var n=ot;switch(n.tag){case 0:case 11:case 15:Fn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var o=n.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:to(n.memoizedState.cache)}if(o=n.child,o!==null)o.return=n,ot=o;else e:for(n=e;ot!==null;){o=ot;var c=o.sibling,u=o.return;if(ym(o),o===n){ot=null;break e}if(c!==null){c.return=u,ot=c;break e}ot=u}}}var n1={getCacheForType:function(e){var t=ut(Je),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ut(Je).controller.signal}},a1=typeof WeakMap=="function"?WeakMap:Map,Se=0,De=null,_e=null,Ge=0,Ne=0,Ct=null,Kn=!1,gs=!1,jc=!1,Sn=0,Xe=0,Xn=0,Na=0,Nc=0,Vt=0,ms=0,ko=null,Tt=null,Ec=!1,Pi=0,Cm=0,Fi=1/0,Ki=null,Zn=null,nt=0,Yn=null,hs=null,jn=0,wc=0,Cc=null,Vm=null,Go=0,Vc=null;function Dt(){return(Se&2)!==0&&Ge!==0?Ge&-Ge:C.T!==null?Lc():Qd()}function Dm(){if(Vt===0)if((Ge&536870912)===0||ve){var e=ei;ei<<=1,(ei&3932160)===0&&(ei=262144),Vt=e}else Vt=536870912;return e=Et.current,e!==null&&(e.flags|=32),Vt}function It(e,t,n){(e===De&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(bs(e,0),Qn(e,Ge,Vt,!1)),zs(e,n),((Se&2)===0||e!==De)&&(e===De&&((Se&2)===0&&(Na|=n),Xe===4&&Qn(e,Ge,Vt,!1)),sn(e))}function qm(e,t,n){if((Se&6)!==0)throw Error(r(327));var o=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ls(e,t),c=o?i1(e,t):qc(e,t,!0),u=o;do{if(c===0){gs&&!o&&Qn(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!s1(n)){c=qc(e,t,!1),u=!1;continue}if(c===2){if(u=t,e.errorRecoveryDisabledLanes&u)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var _=e;c=ko;var v=_.current.memoizedState.isDehydrated;if(v&&(bs(_,m).flags|=256),m=qc(_,m,!1),m!==2){if(jc&&!v){_.errorRecoveryDisabledLanes|=u,Na|=u,c=4;break e}u=Tt,Tt=c,u!==null&&(Tt===null?Tt=u:Tt.push.apply(Tt,u))}c=m}if(u=!1,c!==2)continue}}if(c===1){bs(e,0),Qn(e,t,0,!0);break}e:{switch(o=e,u=c,u){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:Qn(o,t,Vt,!Kn);break e;case 2:Tt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(c=Pi+300-ht(),10<c)){if(Qn(o,t,Vt,!Kn),ni(o,0,!0)!==0)break e;jn=t,o.timeoutHandle=gh(Rm.bind(null,o,n,Tt,Ki,Ec,t,Vt,Na,ms,Kn,u,"Throttled",-0,0),c);break e}Rm(o,n,Tt,Ki,Ec,t,Vt,Na,ms,Kn,u,null,-0,0)}}break}while(!0);sn(e)}function Rm(e,t,n,o,c,u,m,_,v,E,z,P,w,R){if(e.timeoutHandle=-1,P=t.subtreeFlags,P&8192||(P&16785408)===16785408){P={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:mn},jm(t,u,P);var ee=(u&62914560)===u?Pi-ht():(u&4194048)===u?Cm-ht():0;if(ee=U1(P,ee),ee!==null){jn=u,e.cancelPendingCommit=ee(Fm.bind(null,e,t,u,n,o,c,m,_,v,z,P,null,w,R)),Qn(e,u,m,!E);return}}Fm(e,t,u,n,o,c,m,_,v)}function s1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var c=n[o],u=c.getSnapshot;c=c.value;try{if(!jt(u(),c))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qn(e,t,n,o){t&=~Nc,t&=~Na,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var c=t;0<c;){var u=31-rt(c),m=1<<u;o[u]=-1,c&=~m}n!==0&&Xd(e,n,t)}function Xi(){return(Se&6)===0?(yo(0),!1):!0}function Dc(){if(_e!==null){if(Ne===0)var e=_e.return;else e=_e,xn=Ga=null,Jl(e),is=null,ao=0,e=_e;for(;e!==null;)mm(e.alternate,e),e=e.return;_e=null}}function bs(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,M1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),jn=0,Dc(),De=e,_e=n=bn(e.current,null),Ge=t,Ne=0,Ct=null,Kn=!1,gs=Ls(e,t),jc=!1,ms=Vt=Nc=Na=Xn=Xe=0,Tt=ko=null,Ec=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var c=31-rt(o),u=1<<c;t|=e[c],o&=~u}return Sn=t,mi(),n}function Om(e,t){pe=null,C.H=po,t===os||t===yi?(t=eg(),Ne=3):t===Hl?(t=eg(),Ne=4):Ne=t===gc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ct=t,_e===null&&(Xe=1,qi(e,Lt(t,e.current)))}function Hm(){var e=Et.current;return e===null?!0:(Ge&4194048)===Ge?Pt===null:(Ge&62914560)===Ge||(Ge&536870912)!==0?e===Pt:!1}function Lm(){var e=C.H;return C.H=po,e===null?po:e}function zm(){var e=C.A;return C.A=n1,e}function Zi(){Xe=4,Kn||(Ge&4194048)!==Ge&&Et.current!==null||(gs=!0),(Xn&134217727)===0&&(Na&134217727)===0||De===null||Qn(De,Ge,Vt,!1)}function qc(e,t,n){var o=Se;Se|=2;var c=Lm(),u=zm();(De!==e||Ge!==t)&&(Ki=null,bs(e,t)),t=!1;var m=Xe;e:do try{if(Ne!==0&&_e!==null){var _=_e,v=Ct;switch(Ne){case 8:Dc(),m=6;break e;case 3:case 2:case 9:case 6:Et.current===null&&(t=!0);var E=Ne;if(Ne=0,Ct=null,fs(e,_,v,E),n&&gs){m=0;break e}break;default:E=Ne,Ne=0,Ct=null,fs(e,_,v,E)}}o1(),m=Xe;break}catch(z){Om(e,z)}while(!0);return t&&e.shellSuspendCounter++,xn=Ga=null,Se=o,C.H=c,C.A=u,_e===null&&(De=null,Ge=0,mi()),m}function o1(){for(;_e!==null;)Um(_e)}function i1(e,t){var n=Se;Se|=2;var o=Lm(),c=zm();De!==e||Ge!==t?(Ki=null,Fi=ht()+500,bs(e,t)):gs=Ls(e,t);e:do try{if(Ne!==0&&_e!==null){t=_e;var u=Ct;t:switch(Ne){case 1:Ne=0,Ct=null,fs(e,t,u,1);break;case 2:case 9:if(Wp(u)){Ne=0,Ct=null,Bm(t);break}t=function(){Ne!==2&&Ne!==9||De!==e||(Ne=7),sn(e)},u.then(t,t);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:Wp(u)?(Ne=0,Ct=null,Bm(t)):(Ne=0,Ct=null,fs(e,t,u,7));break;case 5:var m=null;switch(_e.tag){case 26:m=_e.memoizedState;case 5:case 27:var _=_e;if(m?Sh(m):_.stateNode.complete){Ne=0,Ct=null;var v=_.sibling;if(v!==null)_e=v;else{var E=_.return;E!==null?(_e=E,Yi(E)):_e=null}break t}}Ne=0,Ct=null,fs(e,t,u,5);break;case 6:Ne=0,Ct=null,fs(e,t,u,6);break;case 8:Dc(),Xe=6;break e;default:throw Error(r(462))}}r1();break}catch(z){Om(e,z)}while(!0);return xn=Ga=null,C.H=o,C.A=c,Se=n,_e!==null?0:(De=null,Ge=0,mi(),Xe)}function r1(){for(;_e!==null&&!Jr();)Um(_e)}function Um(e){var t=pm(e.alternate,e,Sn);e.memoizedProps=e.pendingProps,t===null?Yi(e):_e=t}function Bm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=im(n,t,t.pendingProps,t.type,void 0,Ge);break;case 11:t=im(n,t,t.pendingProps,t.type.render,t.ref,Ge);break;case 5:Jl(t);default:mm(n,t),t=_e=zp(t,Sn),t=pm(n,t,Sn)}e.memoizedProps=e.pendingProps,t===null?Yi(e):_e=t}function fs(e,t,n,o){xn=Ga=null,Jl(t),is=null,ao=0;var c=t.return;try{if(Y_(e,c,t,n,Ge)){Xe=1,qi(e,Lt(n,e.current)),_e=null;return}}catch(u){if(c!==null)throw _e=c,u;Xe=1,qi(e,Lt(n,e.current)),_e=null;return}t.flags&32768?(ve||o===1?e=!0:gs||(Ge&536870912)!==0?e=!1:(Kn=e=!0,(o===2||o===9||o===3||o===6)&&(o=Et.current,o!==null&&o.tag===13&&(o.flags|=16384))),Pm(t,e)):Yi(t)}function Yi(e){var t=e;do{if((t.flags&32768)!==0){Pm(t,Kn);return}e=t.return;var n=W_(t.alternate,t,Sn);if(n!==null){_e=n;return}if(t=t.sibling,t!==null){_e=t;return}_e=t=e}while(t!==null);Xe===0&&(Xe=5)}function Pm(e,t){do{var n=$_(e.alternate,e);if(n!==null){n.flags&=32767,_e=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){_e=e;return}_e=e=n}while(e!==null);Xe=6,_e=null}function Fm(e,t,n,o,c,u,m,_,v){e.cancelPendingCommit=null;do Qi();while(nt!==0);if((Se&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(u=t.lanes|t.childLanes,u|=Ml,Lx(e,n,u,m,_,v),e===De&&(_e=De=null,Ge=0),hs=t,Yn=e,jn=n,wc=u,Cc=c,Vm=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,d1(pn,function(){return Qm(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=C.T,C.T=null,c=J.p,J.p=2,m=Se,Se|=4;try{e1(e,t,n)}finally{Se=m,J.p=c,C.T=o}}nt=1,Km(),Xm(),Zm()}}function Km(){if(nt===1){nt=0;var e=Yn,t=hs,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=C.T,C.T=null;var o=J.p;J.p=2;var c=Se;Se|=4;try{Tm(t,e);var u=Zc,m=wp(e.containerInfo),_=u.focusedElem,v=u.selectionRange;if(m!==_&&_&&_.ownerDocument&&Ep(_.ownerDocument.documentElement,_)){if(v!==null&&_l(_)){var E=v.start,z=v.end;if(z===void 0&&(z=E),"selectionStart"in _)_.selectionStart=E,_.selectionEnd=Math.min(z,_.value.length);else{var P=_.ownerDocument||document,w=P&&P.defaultView||window;if(w.getSelection){var R=w.getSelection(),ee=_.textContent.length,ie=Math.min(v.start,ee),Ve=v.end===void 0?ie:Math.min(v.end,ee);!R.extend&&ie>Ve&&(m=Ve,Ve=ie,ie=m);var S=Np(_,ie),T=Np(_,Ve);if(S&&T&&(R.rangeCount!==1||R.anchorNode!==S.node||R.anchorOffset!==S.offset||R.focusNode!==T.node||R.focusOffset!==T.offset)){var N=P.createRange();N.setStart(S.node,S.offset),R.removeAllRanges(),ie>Ve?(R.addRange(N),R.extend(T.node,T.offset)):(N.setEnd(T.node,T.offset),R.addRange(N))}}}}for(P=[],R=_;R=R.parentNode;)R.nodeType===1&&P.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<P.length;_++){var U=P[_];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}lr=!!Xc,Zc=Xc=null}finally{Se=c,J.p=o,C.T=n}}e.current=t,nt=2}}function Xm(){if(nt===2){nt=0;var e=Yn,t=hs,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=C.T,C.T=null;var o=J.p;J.p=2;var c=Se;Se|=4;try{Gm(e,t.alternate,t)}finally{Se=c,J.p=o,C.T=n}}nt=3}}function Zm(){if(nt===4||nt===3){nt=0,je();var e=Yn,t=hs,n=jn,o=Vm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?nt=5:(nt=0,hs=Yn=null,Ym(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Zn=null),el(n),t=t.stateNode,ge&&typeof ge.onCommitFiberRoot=="function")try{ge.onCommitFiberRoot(fe,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=C.T,c=J.p,J.p=2,C.T=null;try{for(var u=e.onRecoverableError,m=0;m<o.length;m++){var _=o[m];u(_.value,{componentStack:_.stack})}}finally{C.T=t,J.p=c}}(jn&3)!==0&&Qi(),sn(e),c=e.pendingLanes,(n&261930)!==0&&(c&42)!==0?e===Vc?Go++:(Go=0,Vc=e):Go=0,yo(0)}}function Ym(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,to(t)))}function Qi(){return Km(),Xm(),Zm(),Qm()}function Qm(){if(nt!==5)return!1;var e=Yn,t=wc;wc=0;var n=el(jn),o=C.T,c=J.p;try{J.p=32>n?32:n,C.T=null,n=Cc,Cc=null;var u=Yn,m=jn;if(nt=0,hs=Yn=null,jn=0,(Se&6)!==0)throw Error(r(331));var _=Se;if(Se|=4,Em(u.current),Sm(u,u.current,m,n),Se=_,yo(0,!1),ge&&typeof ge.onPostCommitFiberRoot=="function")try{ge.onPostCommitFiberRoot(fe,u)}catch{}return!0}finally{J.p=c,C.T=o,Ym(e,t)}}function Jm(e,t,n){t=Lt(n,t),t=pc(e.stateNode,t,2),e=Un(e,t,2),e!==null&&(zs(e,2),sn(e))}function Ee(e,t,n){if(e.tag===3)Jm(e,e,n);else for(;t!==null;){if(t.tag===3){Jm(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Zn===null||!Zn.has(o))){e=Lt(n,e),n=Wg(2),o=Un(t,n,2),o!==null&&($g(n,o,t,e),zs(o,2),sn(o));break}}t=t.return}}function Rc(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new a1;var c=new Set;o.set(t,c)}else c=o.get(t),c===void 0&&(c=new Set,o.set(t,c));c.has(n)||(jc=!0,c.add(n),e=l1.bind(null,e,t,n),t.then(e,e))}function l1(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,De===e&&(Ge&n)===n&&(Xe===4||Xe===3&&(Ge&62914560)===Ge&&300>ht()-Pi?(Se&2)===0&&bs(e,0):Nc|=n,ms===Ge&&(ms=0)),sn(e)}function Wm(e,t){t===0&&(t=Kd()),e=xa(e,t),e!==null&&(zs(e,t),sn(e))}function c1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wm(e,n)}function u1(e,t){var n=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(n=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(t),Wm(e,n)}function d1(e,t){return Oa(e,t)}var Ji=null,xs=null,Oc=!1,Wi=!1,Hc=!1,Jn=0;function sn(e){e!==xs&&e.next===null&&(xs===null?Ji=xs=e:xs=xs.next=e),Wi=!0,Oc||(Oc=!0,g1())}function yo(e,t){if(!Hc&&Wi){Hc=!0;do for(var n=!1,o=Ji;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var u=0;else{var m=o.suspendedLanes,_=o.pingedLanes;u=(1<<31-rt(42|e)+1)-1,u&=c&~(m&~_),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,nh(o,u))}else u=Ge,u=ni(o,o===De?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||Ls(o,u)||(n=!0,nh(o,u));o=o.next}while(n);Hc=!1}}function p1(){$m()}function $m(){Wi=Oc=!1;var e=0;Jn!==0&&v1()&&(e=Jn);for(var t=ht(),n=null,o=Ji;o!==null;){var c=o.next,u=eh(o,t);u===0?(o.next=null,n===null?Ji=c:n.next=c,c===null&&(xs=n)):(n=o,(e!==0||(u&3)!==0)&&(Wi=!0)),o=c}nt!==0&&nt!==5||yo(e),Jn!==0&&(Jn=0)}function eh(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var m=31-rt(u),_=1<<m,v=c[m];v===-1?((_&n)===0||(_&o)!==0)&&(c[m]=Hx(_,t)):v<=t&&(e.expiredLanes|=_),u&=~_}if(t=De,n=Ge,n=ni(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,n===0||e===t&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Rs(o),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ls(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(o!==null&&Rs(o),el(n)){case 2:case 8:n=Os;break;case 32:n=pn;break;case 268435456:n=pa;break;default:n=pn}return o=th.bind(null,e),n=Oa(n,o),e.callbackPriority=t,e.callbackNode=n,t}return o!==null&&o!==null&&Rs(o),e.callbackPriority=2,e.callbackNode=null,2}function th(e,t){if(nt!==0&&nt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Qi()&&e.callbackNode!==n)return null;var o=Ge;return o=ni(e,e===De?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(qm(e,o,t),eh(e,ht()),e.callbackNode!=null&&e.callbackNode===n?th.bind(null,e):null)}function nh(e,t){if(Qi())return null;qm(e,t,!0)}function g1(){A1(function(){(Se&6)!==0?Oa(Wo,p1):$m()})}function Lc(){if(Jn===0){var e=as;e===0&&(e=$o,$o<<=1,($o&261888)===0&&($o=256)),Jn=e}return Jn}function ah(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ii(""+e)}function sh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function m1(e,t,n,o,c){if(t==="submit"&&n&&n.stateNode===c){var u=ah((c[Gt]||null).action),m=o.submitter;m&&(t=(t=m[Gt]||null)?ah(t.formAction):m.getAttribute("formAction"),t!==null&&(u=t,m=null));var _=new ui("action","action",null,o,c);e.push({event:_,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Jn!==0){var v=m?sh(c,m):new FormData(c);ic(n,{pending:!0,data:v,method:c.method,action:u},null,v)}}else typeof u=="function"&&(_.preventDefault(),v=m?sh(c,m):new FormData(c),ic(n,{pending:!0,data:v,method:c.method,action:u},u,v))},currentTarget:c}]})}}for(var zc=0;zc<vl.length;zc++){var Uc=vl[zc],h1=Uc.toLowerCase(),b1=Uc[0].toUpperCase()+Uc.slice(1);Yt(h1,"on"+b1)}Yt(Dp,"onAnimationEnd"),Yt(qp,"onAnimationIteration"),Yt(Rp,"onAnimationStart"),Yt("dblclick","onDoubleClick"),Yt("focusin","onFocus"),Yt("focusout","onBlur"),Yt(w_,"onTransitionRun"),Yt(C_,"onTransitionStart"),Yt(V_,"onTransitionCancel"),Yt(Op,"onTransitionEnd"),Ba("onMouseEnter",["mouseout","mouseover"]),Ba("onMouseLeave",["mouseout","mouseover"]),Ba("onPointerEnter",["pointerout","pointerover"]),Ba("onPointerLeave",["pointerout","pointerover"]),ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ma("onBeforeInput",["compositionend","keypress","textInput","paste"]),ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function oh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],c=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var m=o.length-1;0<=m;m--){var _=o[m],v=_.instance,E=_.currentTarget;if(_=_.listener,v!==u&&c.isPropagationStopped())break e;u=_,c.currentTarget=E;try{u(c)}catch(z){gi(z)}c.currentTarget=null,u=v}else for(m=0;m<o.length;m++){if(_=o[m],v=_.instance,E=_.currentTarget,_=_.listener,v!==u&&c.isPropagationStopped())break e;u=_,c.currentTarget=E;try{u(c)}catch(z){gi(z)}c.currentTarget=null,u=v}}}}function ke(e,t){var n=t[tl];n===void 0&&(n=t[tl]=new Set);var o=e+"__bubble";n.has(o)||(ih(t,e,2,!1),n.add(o))}function Bc(e,t,n){var o=0;t&&(o|=4),ih(n,e,o,t)}var $i="_reactListening"+Math.random().toString(36).slice(2);function Pc(e){if(!e[$i]){e[$i]=!0,$d.forEach(function(n){n!=="selectionchange"&&(f1.has(n)||Bc(n,!1,e),Bc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$i]||(t[$i]=!0,Bc("selectionchange",!1,t))}}function ih(e,t,n,o){switch(Dh(t)){case 2:var c=F1;break;case 8:c=K1;break;default:c=ou}n=c.bind(null,t,n,e),c=void 0,!ul||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(t,n,{capture:!0,passive:c}):e.addEventListener(t,n,!0):c!==void 0?e.addEventListener(t,n,{passive:c}):e.addEventListener(t,n,!1)}function Fc(e,t,n,o,c){var u=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var m=o.tag;if(m===3||m===4){var _=o.stateNode.containerInfo;if(_===c)break;if(m===4)for(m=o.return;m!==null;){var v=m.tag;if((v===3||v===4)&&m.stateNode.containerInfo===c)return;m=m.return}for(;_!==null;){if(m=La(_),m===null)return;if(v=m.tag,v===5||v===6||v===26||v===27){o=u=m;continue e}_=_.parentNode}}o=o.return}dp(function(){var E=u,z=ll(n),P=[];e:{var w=Hp.get(e);if(w!==void 0){var R=ui,ee=e;switch(e){case"keypress":if(li(n)===0)break e;case"keydown":case"keyup":R=u_;break;case"focusin":ee="focus",R=ml;break;case"focusout":ee="blur",R=ml;break;case"beforeblur":case"afterblur":R=ml;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=g_;break;case Dp:case qp:case Rp:R=t_;break;case Op:R=h_;break;case"scroll":case"scrollend":R=Qx;break;case"wheel":R=f_;break;case"copy":case"cut":case"paste":R=a_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=bp;break;case"toggle":case"beforetoggle":R=__}var ie=(t&4)!==0,Ve=!ie&&(e==="scroll"||e==="scrollend"),S=ie?w!==null?w+"Capture":null:w;ie=[];for(var T=E,N;T!==null;){var U=T;if(N=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||N===null||S===null||(U=Ps(T,S),U!=null&&ie.push(Mo(T,U,N))),Ve)break;T=T.return}0<ie.length&&(w=new R(w,ee,null,n,z),P.push({event:w,listeners:ie}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",w&&n!==rl&&(ee=n.relatedTarget||n.fromElement)&&(La(ee)||ee[Ha]))break e;if((R||w)&&(w=z.window===z?z:(w=z.ownerDocument)?w.defaultView||w.parentWindow:window,R?(ee=n.relatedTarget||n.toElement,R=E,ee=ee?La(ee):null,ee!==null&&(Ve=p(ee),ie=ee.tag,ee!==Ve||ie!==5&&ie!==27&&ie!==6)&&(ee=null)):(R=null,ee=E),R!==ee)){if(ie=mp,U="onMouseLeave",S="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(ie=bp,U="onPointerLeave",S="onPointerEnter",T="pointer"),Ve=R==null?w:Bs(R),N=ee==null?w:Bs(ee),w=new ie(U,T+"leave",R,n,z),w.target=Ve,w.relatedTarget=N,U=null,La(z)===E&&(ie=new ie(S,T+"enter",ee,n,z),ie.target=N,ie.relatedTarget=Ve,U=ie),Ve=U,R&&ee)t:{for(ie=x1,S=R,T=ee,N=0,U=S;U;U=ie(U))N++;U=0;for(var se=T;se;se=ie(se))U++;for(;0<N-U;)S=ie(S),N--;for(;0<U-N;)T=ie(T),U--;for(;N--;){if(S===T||T!==null&&S===T.alternate){ie=S;break t}S=ie(S),T=ie(T)}ie=null}else ie=null;R!==null&&rh(P,w,R,ie,!1),ee!==null&&Ve!==null&&rh(P,Ve,ee,ie,!0)}}e:{if(w=E?Bs(E):window,R=w.nodeName&&w.nodeName.toLowerCase(),R==="select"||R==="input"&&w.type==="file")var Te=Mp;else if(yp(w))if(Ap)Te=j_;else{Te=I_;var ae=T_}else R=w.nodeName,!R||R.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?E&&il(E.elementType)&&(Te=Mp):Te=S_;if(Te&&(Te=Te(e,E))){vp(P,Te,n,z);break e}ae&&ae(e,w,E),e==="focusout"&&E&&w.type==="number"&&E.memoizedProps.value!=null&&ol(w,"number",w.value)}switch(ae=E?Bs(E):window,e){case"focusin":(yp(ae)||ae.contentEditable==="true")&&(Ya=ae,kl=E,Ws=null);break;case"focusout":Ws=kl=Ya=null;break;case"mousedown":Gl=!0;break;case"contextmenu":case"mouseup":case"dragend":Gl=!1,Cp(P,n,z);break;case"selectionchange":if(E_)break;case"keydown":case"keyup":Cp(P,n,z)}var me;if(bl)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Za?kp(e,n)&&(ye="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ye="onCompositionStart");ye&&(fp&&n.locale!=="ko"&&(Za||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Za&&(me=pp()):(Dn=z,dl="value"in Dn?Dn.value:Dn.textContent,Za=!0)),ae=er(E,ye),0<ae.length&&(ye=new hp(ye,e,null,n,z),P.push({event:ye,listeners:ae}),me?ye.data=me:(me=Gp(n),me!==null&&(ye.data=me)))),(me=G_?y_(e,n):v_(e,n))&&(ye=er(E,"onBeforeInput"),0<ye.length&&(ae=new hp("onBeforeInput","beforeinput",null,n,z),P.push({event:ae,listeners:ye}),ae.data=me)),m1(P,e,E,n,z)}oh(P,t)})}function Mo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function er(e,t){for(var n=t+"Capture",o=[];e!==null;){var c=e,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=Ps(e,n),c!=null&&o.unshift(Mo(e,c,u)),c=Ps(e,t),c!=null&&o.push(Mo(e,c,u))),e.tag===3)return o;e=e.return}return[]}function x1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function rh(e,t,n,o,c){for(var u=t._reactName,m=[];n!==null&&n!==o;){var _=n,v=_.alternate,E=_.stateNode;if(_=_.tag,v!==null&&v===o)break;_!==5&&_!==26&&_!==27||E===null||(v=E,c?(E=Ps(n,u),E!=null&&m.unshift(Mo(n,E,v))):c||(E=Ps(n,u),E!=null&&m.push(Mo(n,E,v)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var _1=/\r\n?/g,k1=/\u0000|\uFFFD/g;function lh(e){return(typeof e=="string"?e:""+e).replace(_1,`
`).replace(k1,"")}function ch(e,t){return t=lh(t),lh(e)===t}function Ce(e,t,n,o,c,u){switch(n){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||Fa(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&Fa(e,""+o);break;case"className":si(e,"class",o);break;case"tabIndex":si(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":si(e,n,o);break;case"style":cp(e,o,u);break;case"data":if(t!=="object"){si(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}o=ii(""+o),e.setAttribute(n,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Ce(e,t,"name",c.name,c,null),Ce(e,t,"formEncType",c.formEncType,c,null),Ce(e,t,"formMethod",c.formMethod,c,null),Ce(e,t,"formTarget",c.formTarget,c,null)):(Ce(e,t,"encType",c.encType,c,null),Ce(e,t,"method",c.method,c,null),Ce(e,t,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}o=ii(""+o),e.setAttribute(n,o);break;case"onClick":o!=null&&(e.onclick=mn);break;case"onScroll":o!=null&&ke("scroll",e);break;case"onScrollEnd":o!=null&&ke("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(n=o.__html,n!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=n}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}n=ii(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""+o):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":o===!0?e.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,o):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(n,o):e.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(n):e.setAttribute(n,o);break;case"popover":ke("beforetoggle",e),ke("toggle",e),ai(e,"popover",o);break;case"xlinkActuate":gn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":gn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":gn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":gn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":gn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":gn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":gn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":gn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":gn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ai(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Zx.get(n)||n,ai(e,n,o))}}function Kc(e,t,n,o,c,u){switch(n){case"style":cp(e,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(n=o.__html,n!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=n}}break;case"children":typeof o=="string"?Fa(e,o):(typeof o=="number"||typeof o=="bigint")&&Fa(e,""+o);break;case"onScroll":o!=null&&ke("scroll",e);break;case"onScrollEnd":o!=null&&ke("scrollend",e);break;case"onClick":o!=null&&(e.onclick=mn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ep.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(c=n.endsWith("Capture"),t=n.slice(2,c?n.length-7:void 0),u=e[Gt]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,c),typeof o=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,o,c);break e}n in e?e[n]=o:o===!0?e.setAttribute(n,""):ai(e,n,o)}}}function pt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",e),ke("load",e);var o=!1,c=!1,u;for(u in n)if(n.hasOwnProperty(u)){var m=n[u];if(m!=null)switch(u){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Ce(e,t,u,m,n,null)}}c&&Ce(e,t,"srcSet",n.srcSet,n,null),o&&Ce(e,t,"src",n.src,n,null);return;case"input":ke("invalid",e);var _=u=m=c=null,v=null,E=null;for(o in n)if(n.hasOwnProperty(o)){var z=n[o];if(z!=null)switch(o){case"name":c=z;break;case"type":m=z;break;case"checked":v=z;break;case"defaultChecked":E=z;break;case"value":u=z;break;case"defaultValue":_=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(r(137,t));break;default:Ce(e,t,o,z,n,null)}}op(e,u,_,v,E,m,c,!1);return;case"select":ke("invalid",e),o=m=u=null;for(c in n)if(n.hasOwnProperty(c)&&(_=n[c],_!=null))switch(c){case"value":u=_;break;case"defaultValue":m=_;break;case"multiple":o=_;default:Ce(e,t,c,_,n,null)}t=u,n=m,e.multiple=!!o,t!=null?Pa(e,!!o,t,!1):n!=null&&Pa(e,!!o,n,!0);return;case"textarea":ke("invalid",e),u=c=o=null;for(m in n)if(n.hasOwnProperty(m)&&(_=n[m],_!=null))switch(m){case"value":o=_;break;case"defaultValue":c=_;break;case"children":u=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(91));break;default:Ce(e,t,m,_,n,null)}rp(e,o,c,u);return;case"option":for(v in n)if(n.hasOwnProperty(v)&&(o=n[v],o!=null))switch(v){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ce(e,t,v,o,n,null)}return;case"dialog":ke("beforetoggle",e),ke("toggle",e),ke("cancel",e),ke("close",e);break;case"iframe":case"object":ke("load",e);break;case"video":case"audio":for(o=0;o<vo.length;o++)ke(vo[o],e);break;case"image":ke("error",e),ke("load",e);break;case"details":ke("toggle",e);break;case"embed":case"source":case"link":ke("error",e),ke("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(o=n[E],o!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Ce(e,t,E,o,n,null)}return;default:if(il(t)){for(z in n)n.hasOwnProperty(z)&&(o=n[z],o!==void 0&&Kc(e,t,z,o,n,void 0));return}}for(_ in n)n.hasOwnProperty(_)&&(o=n[_],o!=null&&Ce(e,t,_,o,n,null))}function G1(e,t,n,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,m=null,_=null,v=null,E=null,z=null;for(R in n){var P=n[R];if(n.hasOwnProperty(R)&&P!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":v=P;default:o.hasOwnProperty(R)||Ce(e,t,R,null,o,P)}}for(var w in o){var R=o[w];if(P=n[w],o.hasOwnProperty(w)&&(R!=null||P!=null))switch(w){case"type":u=R;break;case"name":c=R;break;case"checked":E=R;break;case"defaultChecked":z=R;break;case"value":m=R;break;case"defaultValue":_=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,t));break;default:R!==P&&Ce(e,t,w,R,o,P)}}sl(e,m,_,v,E,z,u,c);return;case"select":R=m=_=w=null;for(u in n)if(v=n[u],n.hasOwnProperty(u)&&v!=null)switch(u){case"value":break;case"multiple":R=v;default:o.hasOwnProperty(u)||Ce(e,t,u,null,o,v)}for(c in o)if(u=o[c],v=n[c],o.hasOwnProperty(c)&&(u!=null||v!=null))switch(c){case"value":w=u;break;case"defaultValue":_=u;break;case"multiple":m=u;default:u!==v&&Ce(e,t,c,u,o,v)}t=_,n=m,o=R,w!=null?Pa(e,!!n,w,!1):!!o!=!!n&&(t!=null?Pa(e,!!n,t,!0):Pa(e,!!n,n?[]:"",!1));return;case"textarea":R=w=null;for(_ in n)if(c=n[_],n.hasOwnProperty(_)&&c!=null&&!o.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:Ce(e,t,_,null,o,c)}for(m in o)if(c=o[m],u=n[m],o.hasOwnProperty(m)&&(c!=null||u!=null))switch(m){case"value":w=c;break;case"defaultValue":R=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==u&&Ce(e,t,m,c,o,u)}ip(e,w,R);return;case"option":for(var ee in n)if(w=n[ee],n.hasOwnProperty(ee)&&w!=null&&!o.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:Ce(e,t,ee,null,o,w)}for(v in o)if(w=o[v],R=n[v],o.hasOwnProperty(v)&&w!==R&&(w!=null||R!=null))switch(v){case"selected":e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:Ce(e,t,v,w,o,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in n)w=n[ie],n.hasOwnProperty(ie)&&w!=null&&!o.hasOwnProperty(ie)&&Ce(e,t,ie,null,o,w);for(E in o)if(w=o[E],R=n[E],o.hasOwnProperty(E)&&w!==R&&(w!=null||R!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(137,t));break;default:Ce(e,t,E,w,o,R)}return;default:if(il(t)){for(var Ve in n)w=n[Ve],n.hasOwnProperty(Ve)&&w!==void 0&&!o.hasOwnProperty(Ve)&&Kc(e,t,Ve,void 0,o,w);for(z in o)w=o[z],R=n[z],!o.hasOwnProperty(z)||w===R||w===void 0&&R===void 0||Kc(e,t,z,w,o,R);return}}for(var S in n)w=n[S],n.hasOwnProperty(S)&&w!=null&&!o.hasOwnProperty(S)&&Ce(e,t,S,null,o,w);for(P in o)w=o[P],R=n[P],!o.hasOwnProperty(P)||w===R||w==null&&R==null||Ce(e,t,P,w,o,R)}function uh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function y1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),o=0;o<n.length;o++){var c=n[o],u=c.transferSize,m=c.initiatorType,_=c.duration;if(u&&_&&uh(m)){for(m=0,_=c.responseEnd,o+=1;o<n.length;o++){var v=n[o],E=v.startTime;if(E>_)break;var z=v.transferSize,P=v.initiatorType;z&&uh(P)&&(v=v.responseEnd,m+=z*(v<_?1:(_-E)/(v-E)))}if(--o,t+=8*(u+m)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Xc=null,Zc=null;function tr(e){return e.nodeType===9?e:e.ownerDocument}function dh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ph(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Yc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qc=null;function v1(){var e=window.event;return e&&e.type==="popstate"?e===Qc?!1:(Qc=e,!0):(Qc=null,!1)}var gh=typeof setTimeout=="function"?setTimeout:void 0,M1=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,A1=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(e){return mh.resolve(null).then(e).catch(T1)}:gh;function T1(e){setTimeout(function(){throw e})}function Wn(e){return e==="head"}function hh(e,t){var n=t,o=0;do{var c=n.nextSibling;if(e.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"||n==="/&"){if(o===0){e.removeChild(c),ys(t);return}o--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")o++;else if(n==="html")Ao(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ao(n);for(var u=n.firstChild;u;){var m=u.nextSibling,_=u.nodeName;u[Us]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=m}}else n==="body"&&Ao(e.ownerDocument.body);n=c}while(n);ys(t)}function bh(e,t){var n=e;e=0;do{var o=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=o}while(n)}function Jc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Jc(n),nl(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function I1(e,t,n,o){for(;e.nodeType===1;){var c=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Us])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Ft(e.nextSibling),e===null)break}return null}function S1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ft(e.nextSibling),e===null))return null;return e}function fh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ft(e.nextSibling),e===null))return null;return e}function Wc(e){return e.data==="$?"||e.data==="$~"}function $c(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function j1(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var o=function(){t(),n.removeEventListener("DOMContentLoaded",o)};n.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var eu=null;function xh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ft(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function _h(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function kh(e,t,n){switch(t=tr(n),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ao(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);nl(e)}var Kt=new Map,Gh=new Set;function nr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nn=J.d;J.d={f:N1,r:E1,D:w1,C:C1,L:V1,m:D1,X:R1,S:q1,M:O1};function N1(){var e=Nn.f(),t=Xi();return e||t}function E1(e){var t=za(e);t!==null&&t.tag===5&&t.type==="form"?Og(t):Nn.r(e)}var _s=typeof document>"u"?null:document;function yh(e,t,n){var o=_s;if(o&&typeof t=="string"&&t){var c=Ot(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof n=="string"&&(c+='[crossorigin="'+n+'"]'),Gh.has(c)||(Gh.add(c),e={rel:e,crossOrigin:n,href:t},o.querySelector(c)===null&&(t=o.createElement("link"),pt(t,"link",e),st(t),o.head.appendChild(t)))}}function w1(e){Nn.D(e),yh("dns-prefetch",e,null)}function C1(e,t){Nn.C(e,t),yh("preconnect",e,t)}function V1(e,t,n){Nn.L(e,t,n);var o=_s;if(o&&e&&t){var c='link[rel="preload"][as="'+Ot(t)+'"]';t==="image"&&n&&n.imageSrcSet?(c+='[imagesrcset="'+Ot(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(c+='[imagesizes="'+Ot(n.imageSizes)+'"]')):c+='[href="'+Ot(e)+'"]';var u=c;switch(t){case"style":u=ks(e);break;case"script":u=Gs(e)}Kt.has(u)||(e=k({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Kt.set(u,e),o.querySelector(c)!==null||t==="style"&&o.querySelector(To(u))||t==="script"&&o.querySelector(Io(u))||(t=o.createElement("link"),pt(t,"link",e),st(t),o.head.appendChild(t)))}}function D1(e,t){Nn.m(e,t);var n=_s;if(n&&e){var o=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+Ot(o)+'"][href="'+Ot(e)+'"]',u=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Gs(e)}if(!Kt.has(u)&&(e=k({rel:"modulepreload",href:e},t),Kt.set(u,e),n.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Io(u)))return}o=n.createElement("link"),pt(o,"link",e),st(o),n.head.appendChild(o)}}}function q1(e,t,n){Nn.S(e,t,n);var o=_s;if(o&&e){var c=Ua(o).hoistableStyles,u=ks(e);t=t||"default";var m=c.get(u);if(!m){var _={loading:0,preload:null};if(m=o.querySelector(To(u)))_.loading=5;else{e=k({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Kt.get(u))&&tu(e,n);var v=m=o.createElement("link");st(v),pt(v,"link",e),v._p=new Promise(function(E,z){v.onload=E,v.onerror=z}),v.addEventListener("load",function(){_.loading|=1}),v.addEventListener("error",function(){_.loading|=2}),_.loading|=4,ar(m,t,o)}m={type:"stylesheet",instance:m,count:1,state:_},c.set(u,m)}}}function R1(e,t){Nn.X(e,t);var n=_s;if(n&&e){var o=Ua(n).hoistableScripts,c=Gs(e),u=o.get(c);u||(u=n.querySelector(Io(c)),u||(e=k({src:e,async:!0},t),(t=Kt.get(c))&&nu(e,t),u=n.createElement("script"),st(u),pt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(c,u))}}function O1(e,t){Nn.M(e,t);var n=_s;if(n&&e){var o=Ua(n).hoistableScripts,c=Gs(e),u=o.get(c);u||(u=n.querySelector(Io(c)),u||(e=k({src:e,async:!0,type:"module"},t),(t=Kt.get(c))&&nu(e,t),u=n.createElement("script"),st(u),pt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(c,u))}}function vh(e,t,n,o){var c=(c=he.current)?nr(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ks(n.href),n=Ua(c).hoistableStyles,o=n.get(t),o||(o={type:"style",instance:null,count:0,state:null},n.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ks(n.href);var u=Ua(c).hoistableStyles,m=u.get(e);if(m||(c=c.ownerDocument||c,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,m),(u=c.querySelector(To(e)))&&!u._p&&(m.instance=u,m.state.loading=5),Kt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Kt.set(e,n),u||H1(c,e,n,m.state))),t&&o===null)throw Error(r(528,""));return m}if(t&&o!==null)throw Error(r(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Gs(n),n=Ua(c).hoistableScripts,o=n.get(t),o||(o={type:"script",instance:null,count:0,state:null},n.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ks(e){return'href="'+Ot(e)+'"'}function To(e){return'link[rel="stylesheet"]['+e+"]"}function Mh(e){return k({},e,{"data-precedence":e.precedence,precedence:null})}function H1(e,t,n,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),pt(t,"link",n),st(t),e.head.appendChild(t))}function Gs(e){return'[src="'+Ot(e)+'"]'}function Io(e){return"script[async]"+e}function Ah(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Ot(n.href)+'"]');if(o)return t.instance=o,st(o),o;var c=k({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),st(o),pt(o,"style",c),ar(o,n.precedence,e),t.instance=o;case"stylesheet":c=ks(n.href);var u=e.querySelector(To(c));if(u)return t.state.loading|=4,t.instance=u,st(u),u;o=Mh(n),(c=Kt.get(c))&&tu(o,c),u=(e.ownerDocument||e).createElement("link"),st(u);var m=u;return m._p=new Promise(function(_,v){m.onload=_,m.onerror=v}),pt(u,"link",o),t.state.loading|=4,ar(u,n.precedence,e),t.instance=u;case"script":return u=Gs(n.src),(c=e.querySelector(Io(u)))?(t.instance=c,st(c),c):(o=n,(c=Kt.get(u))&&(o=k({},n),nu(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),st(c),pt(c,"link",o),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,ar(o,n.precedence,e));return t.instance}function ar(e,t,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,u=c,m=0;m<o.length;m++){var _=o[m];if(_.dataset.precedence===t)u=_;else if(u!==c)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function tu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function nu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var sr=null;function Th(e,t,n){if(sr===null){var o=new Map,c=sr=new Map;c.set(n,o)}else c=sr,o=c.get(n),o||(o=new Map,c.set(n,o));if(o.has(e))return o;for(o.set(e,null),n=n.getElementsByTagName(e),c=0;c<n.length;c++){var u=n[c];if(!(u[Us]||u[lt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(t)||"";m=e+m;var _=o.get(m);_?_.push(u):o.set(m,[u])}}return o}function Ih(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function L1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Sh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function z1(e,t,n,o){if(n.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=ks(o.href),u=t.querySelector(To(c));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=or.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=u,st(u);return}u=t.ownerDocument||t,o=Mh(o),(c=Kt.get(c))&&tu(o,c),u=u.createElement("link"),st(u);var m=u;m._p=new Promise(function(_,v){m.onload=_,m.onerror=v}),pt(u,"link",o),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=or.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var au=0;function U1(e,t){return e.stylesheets&&e.count===0&&rr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var o=setTimeout(function(){if(e.stylesheets&&rr(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&au===0&&(au=62500*y1());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&rr(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>au?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function or(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ir=null;function rr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ir=new Map,t.forEach(B1,e),ir=null,or.call(e))}function B1(e,t){if(!(t.state.loading&4)){var n=ir.get(e);if(n)var o=n.get(null);else{n=new Map,ir.set(e,n);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var m=c[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),o=m)}o&&n.set(null,o)}c=t.instance,m=c.getAttribute("data-precedence"),u=n.get(m)||o,u===o&&n.set(null,c),n.set(m,c),this.count++,o=or.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),u?u.parentNode.insertBefore(c,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var So={$$typeof:L,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function P1(e,t,n,o,c,u,m,_,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wr(0),this.hiddenUpdates=Wr(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function jh(e,t,n,o,c,u,m,_,v,E,z,P){return e=new P1(e,t,n,m,v,E,z,P,_),t=1,u===!0&&(t|=24),u=Nt(3,null,null,t),e.current=u,u.stateNode=e,t=ql(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:o,isDehydrated:n,cache:t},Ll(u),e}function Nh(e){return e?(e=Wa,e):Wa}function Eh(e,t,n,o,c,u){c=Nh(c),o.context===null?o.context=c:o.pendingContext=c,o=zn(t),o.payload={element:n},u=u===void 0?null:u,u!==null&&(o.callback=u),n=Un(e,o,t),n!==null&&(It(n,e,t),oo(n,e,t))}function wh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function su(e,t){wh(e,t),(e=e.alternate)&&wh(e,t)}function Ch(e){if(e.tag===13||e.tag===31){var t=xa(e,67108864);t!==null&&It(t,e,67108864),su(e,67108864)}}function Vh(e){if(e.tag===13||e.tag===31){var t=Dt();t=$r(t);var n=xa(e,t);n!==null&&It(n,e,t),su(e,t)}}var lr=!0;function F1(e,t,n,o){var c=C.T;C.T=null;var u=J.p;try{J.p=2,ou(e,t,n,o)}finally{J.p=u,C.T=c}}function K1(e,t,n,o){var c=C.T;C.T=null;var u=J.p;try{J.p=8,ou(e,t,n,o)}finally{J.p=u,C.T=c}}function ou(e,t,n,o){if(lr){var c=iu(o);if(c===null)Fc(e,t,o,cr,n),qh(e,o);else if(Z1(c,e,t,n,o))o.stopPropagation();else if(qh(e,o),t&4&&-1<X1.indexOf(e)){for(;c!==null;){var u=za(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=ga(u.pendingLanes);if(m!==0){var _=u;for(_.pendingLanes|=2,_.entangledLanes|=2;m;){var v=1<<31-rt(m);_.entanglements[1]|=v,m&=~v}sn(u),(Se&6)===0&&(Fi=ht()+500,yo(0))}}break;case 31:case 13:_=xa(u,2),_!==null&&It(_,u,2),Xi(),su(u,2)}if(u=iu(o),u===null&&Fc(e,t,o,cr,n),u===c)break;c=u}c!==null&&o.stopPropagation()}else Fc(e,t,o,null,n)}}function iu(e){return e=ll(e),ru(e)}var cr=null;function ru(e){if(cr=null,e=La(e),e!==null){var t=p(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===31){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return cr=e,null}function Dh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dn()){case Wo:return 2;case Os:return 8;case pn:case Hs:return 32;case pa:return 268435456;default:return 32}default:return 32}}var lu=!1,$n=null,ea=null,ta=null,jo=new Map,No=new Map,na=[],X1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qh(e,t){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":ea=null;break;case"mouseover":case"mouseout":ta=null;break;case"pointerover":case"pointerout":jo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(t.pointerId)}}function Eo(e,t,n,o,c,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:u,targetContainers:[c]},t!==null&&(t=za(t),t!==null&&Ch(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function Z1(e,t,n,o,c){switch(t){case"focusin":return $n=Eo($n,e,t,n,o,c),!0;case"dragenter":return ea=Eo(ea,e,t,n,o,c),!0;case"mouseover":return ta=Eo(ta,e,t,n,o,c),!0;case"pointerover":var u=c.pointerId;return jo.set(u,Eo(jo.get(u)||null,e,t,n,o,c)),!0;case"gotpointercapture":return u=c.pointerId,No.set(u,Eo(No.get(u)||null,e,t,n,o,c)),!0}return!1}function Rh(e){var t=La(e.target);if(t!==null){var n=p(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,Jd(e.priority,function(){Vh(n)});return}}else if(t===31){if(t=h(n),t!==null){e.blockedOn=t,Jd(e.priority,function(){Vh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=iu(e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);rl=o,n.target.dispatchEvent(o),rl=null}else return t=za(n),t!==null&&Ch(t),e.blockedOn=n,!1;t.shift()}return!0}function Oh(e,t,n){ur(e)&&n.delete(t)}function Y1(){lu=!1,$n!==null&&ur($n)&&($n=null),ea!==null&&ur(ea)&&(ea=null),ta!==null&&ur(ta)&&(ta=null),jo.forEach(Oh),No.forEach(Oh)}function dr(e,t){e.blockedOn===t&&(e.blockedOn=null,lu||(lu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Y1)))}var pr=null;function Hh(e){pr!==e&&(pr=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){pr===e&&(pr=null);for(var t=0;t<e.length;t+=3){var n=e[t],o=e[t+1],c=e[t+2];if(typeof o!="function"){if(ru(o||n)===null)continue;break}var u=za(n);u!==null&&(e.splice(t,3),t-=3,ic(u,{pending:!0,data:c,method:n.method,action:o},o,c))}}))}function ys(e){function t(v){return dr(v,e)}$n!==null&&dr($n,e),ea!==null&&dr(ea,e),ta!==null&&dr(ta,e),jo.forEach(t),No.forEach(t);for(var n=0;n<na.length;n++){var o=na[n];o.blockedOn===e&&(o.blockedOn=null)}for(;0<na.length&&(n=na[0],n.blockedOn===null);)Rh(n),n.blockedOn===null&&na.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var c=n[o],u=n[o+1],m=c[Gt]||null;if(typeof u=="function")m||Hh(n);else if(m){var _=null;if(u&&u.hasAttribute("formAction")){if(c=u,m=u[Gt]||null)_=m.formAction;else if(ru(c)!==null)continue}else _=m.action;typeof _=="function"?n[o+1]=_:(n.splice(o,3),o-=3),Hh(n)}}}function Lh(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(m){return c=m})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),o||setTimeout(n,20)}function n(){if(!o&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function cu(e){this._internalRoot=e}gr.prototype.render=cu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var n=t.current,o=Dt();Eh(n,o,e,t,null,null)},gr.prototype.unmount=cu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Eh(e.current,2,null,e,null,null),Xi(),t[Ha]=null}};function gr(e){this._internalRoot=e}gr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<na.length&&t!==0&&t<na[n].priority;n++);na.splice(n,0,e),n===0&&Rh(e)}};var zh=s.version;if(zh!=="19.2.7")throw Error(r(527,zh,"19.2.7"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=b(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Q1={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mr.isDisabled&&mr.supportsFiber)try{fe=mr.inject(Q1),ge=mr}catch{}}return Co.createRoot=function(e,t){if(!d(e))throw Error(r(299));var n=!1,o="",c=Zg,u=Yg,m=Qg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=jh(e,1,!1,null,null,n,o,null,c,u,m,Lh),e[Ha]=t.current,Pc(e),new cu(t)},Co.hydrateRoot=function(e,t,n){if(!d(e))throw Error(r(299));var o=!1,c="",u=Zg,m=Yg,_=Qg,v=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError),n.formState!==void 0&&(v=n.formState)),t=jh(e,1,!0,t,n??null,o,c,v,u,m,_,Lh),t.context=Nh(null),n=t.current,o=Dt(),o=$r(o),c=zn(o),c.callback=null,Un(n,c,o),n=o,t.current.lanes=n,zs(t,n),sn(t),e[Ha]=t.current,Pc(e),new gr(t)},Co.version="19.2.7",Co}var Wh;function r2(){if(Wh)return pu.exports;Wh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),pu.exports=i2(),pu.exports}var l2=r2();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),u2=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,l,r)=>r?r.toUpperCase():l.toLowerCase()),$h=a=>{const s=u2(a);return s.charAt(0).toUpperCase()+s.slice(1)},zf=(...a)=>a.filter((s,l,r)=>!!s&&s.trim()!==""&&r.indexOf(s)===l).join(" ").trim(),d2=a=>{for(const s in a)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var p2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=O.forwardRef(({color:a="currentColor",size:s=24,strokeWidth:l=2,absoluteStrokeWidth:r,className:d="",children:p,iconNode:g,...h},f)=>O.createElement("svg",{ref:f,...p2,width:s,height:s,stroke:a,strokeWidth:r?Number(l)*24/Number(s):l,className:zf("lucide",d),...!p&&!d2(h)&&{"aria-hidden":"true"},...h},[...g.map(([b,x])=>O.createElement(b,x)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=(a,s)=>{const l=O.forwardRef(({className:r,...d},p)=>O.createElement(g2,{ref:p,iconNode:s,className:zf(`lucide-${c2($h(a))}`,`lucide-${a}`,r),...d}));return l.displayName=$h(a),l};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],zu=le("archive",m2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],eb=le("arrow-left",h2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],f2=le("award",b2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Uu=le("book-open",x2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],bu=le("calculator",_2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],G2=le("calendar",k2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],tb=le("chevron-down",y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],fu=le("chevron-right",v2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Er=le("circle-check",M2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],T2=le("circle-play",A2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],xu=le("circle-question-mark",I2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],j2=le("code",S2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],E2=le("compass",N2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Bu=le("copy",w2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],V2=le("credit-card",C2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Uf=le("download",D2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],oa=le("external-link",q2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],O2=le("eye",R2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],L2=le("file-text",H2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],U2=le("flame",z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],nb=le("flask-conical",B2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],ab=le("funnel",P2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],K2=le("globe",F2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Pu=le("house",X2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],wr=le("info",Z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Q2=le("lightbulb",Y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],W2=le("link",J2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ek=le("lock",$2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],nk=le("message-circle",tk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],Bf=le("newspaper",ak);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Pf=le("palette",sk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],Vo=le("pin",ok);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],sb=le("play",ik);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],lk=le("scale",rk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Uo=le("search",ck);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],dk=le("settings-2",uk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Ff=le("shield-alert",pk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],mk=le("shield-check",gk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],Ro=le("shopping-bag",hk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],fk=le("sparkles",bk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],_k=le("table",xk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],ob=le("terminal",kk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],yk=le("triangle-alert",Gk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Cr=le("users",vk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ib=le("x",Mk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],yr=le("youtube",Ak);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Ik=le("zap",Tk);/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const _u=[{name:"Inicio",path:"/",key:"nav.inicio"},{name:"Novedades",path:"/novedades",key:"nav.novedades"},{name:"Servicios",path:"/servicios",key:"nav.servicios"},{name:"Evo",path:"/evo",key:"nav.evo"},{name:"Otros códigos",path:"/otros",key:"nav.otros"},{name:"Guía",path:"/guia",key:"nav.guia"},{name:"Tutoriales",path:"/tutoriales",key:"nav.tutoriales"},{name:"Descargas",path:"/descargas",key:"nav.descargas"}],Vr=[{id:"a",name:"Cibernético",shortName:"CYBER",icon:"Cpu",image:"https://github.com/luqueSmith/MGG/blob/main/img/cyber.png?raw=true"},{id:"b",name:"Zombi",shortName:"ZOMBI",icon:"Skull",image:"https://github.com/luqueSmith/MGG/blob/main/img/necro.png?raw=true"},{id:"c",name:"Guerrero",shortName:"Sword",icon:"Sword",image:"https://github.com/luqueSmith/MGG/blob/main/img/sable.png?raw=true"},{id:"d",name:"Bestia",shortName:"ZOOMORFO",icon:"PawPrint",image:"https://github.com/luqueSmith/MGG/blob/main/img/zomorfo.png?raw=true"},{id:"e",name:"Galáctico",shortName:"GALAXY",icon:"Star",image:"https://github.com/luqueSmith/MGG/blob/main/img/galactico.png?raw=true"},{id:"f",name:"Mítico",shortName:"MYTHIC",icon:"FlaskConical",image:"https://github.com/luqueSmith/MGG/blob/main/img/mitico.png?raw=true"}],Ms={a:["#38bdf8","#2563eb"],b:["#a855f7","#6d28d9"],c:["#f59e0b","#d97706"],d:["#22c55e","#15803d"],e:["#06b6d4","#0f766e"],f:["#ec4899","#be185d"],n:["#64748b","#334155"]},ku=[{id:"offer_1",nombre:"54 Hornos 1M de Oro",nombreEn:"54 Furnaces 1M Gold",precio:37,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/1MdeOro.png?raw=true",descripcion:"Oferta relámpago: pack de 54 hornos con 1 millón de oro directo.",descripcionEn:"Flash offer: pack of 54 furnaces with 1 million gold direct.",features:["Entrega prioritaria","Ahorro del 20%","Soporte exclusivo"],featuresEn:["Priority delivery","20% Savings","Exclusive support"],categoria:"OFFER"},{id:"offer_2",nombre:"54 Hornos 2M de Oro",nombreEn:"54 Furnaces 2M Gold",precio:48,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/2MdeOro.png?raw=true",descripcion:"Pack industrial para jugadores de alto nivel con 2 millones de oro.",descripcionEn:"Industrial pack for high-level players with 2 million gold.",features:["Capacidad máxima","Optimización de recursos","Bonus de velocidad"],featuresEn:["Maximum capacity","Resource optimization","Speed bonus"],categoria:"OFFER"},{id:"offer_3",nombre:"54 Hornos 3M de Oro",nombreEn:"54 Furnaces 3M Gold",precio:59,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/3MdeOro.png?raw=true",descripcion:"La máxima potencia disponible en el mercado actual.",descripcionEn:"The maximum power available in the current market.",features:["Máximo beneficio","Inyección instantánea","Certificado Elite"],featuresEn:["Maximum benefit","Instant injection","Elite certificate"],categoria:"OFFER"},{id:"main_1",nombre:"Horno de Oro",nombreEn:"Gold Furnace",precio:7,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/Hornos%20de%20oro.png?raw=true",descripcion:"Aceleración masiva de producción de oro.",descripcionEn:"Massive acceleration of gold production.",features:["Entrega en menos de 10 min","Soporte 24/7","Proceso guiado"],featuresEn:["Delivery in < 10 min","24/7 Support","Guided process"],categoria:"MAIN"},{id:"main_2",nombre:"Mutante",nombreEn:"Mutant",precio:2,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/mutante.png?raw=true",descripcion:"Obtención de mutantes raros según disponibilidad.",descripcionEn:"Get rare mutants depending on availability.",features:["Selección a elegir","Stats máximos","Entrega rápida"],featuresEn:["Custom selection","Max stats","Fast delivery"],categoria:"MAIN"},{id:"main_3",nombre:"Orbes Basic 6 x 10",nombreEn:"Basic Orbs 6 x 10",precio:1,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/bsic-orb6.png?raw=true",descripcion:"Pack de orbes básicos para fortalecer a tu equipo.",descripcionEn:"Basic orb pack to strengthen your team.",features:["Stock ilimitado","Precio promocional","Ideal para nuevos"],featuresEn:["Unlimited stock","Promotional price","Ideal for beginners"],categoria:"MAIN"},{id:"main_4",nombre:"1M de Oro Directo",nombreEn:"1M Direct Gold",precio:35,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/1MOro.png?raw=true",descripcion:"Paquete de moneda premium gestionado con verificación.",descripcionEn:"Premium currency package managed with verification.",features:["Proceso guiado","Entrega coordinada","Soporte manual"],featuresEn:["Guided process","Coordinated delivery","Manual support"],categoria:"MAIN"},{id:"main_5",nombre:"ORB Nivel 7 Elite",nombreEn:"ORB Level 7 Elite",precio:6,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/obrNVL7.png?raw=true",descripcion:"Orbes de alto nivel para máximo rendimiento.",descripcionEn:"High-level orbs for maximum performance.",features:["Efectos críticos","Rareza extrema","Compatibilidad total"],featuresEn:["Critical effects","Extreme rarity","Total compatibility"],categoria:"MAIN"},{id:"main_6",nombre:"Mutante Bug Platino",nombreEn:"Platinum Bug Mutant",precio:6,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/bf8515d2-211a-411c-a1d9-da10c59ff4dd.png?raw=true",descripcion:"Mutante con estética platino y habilidades especiales.",descripcionEn:"Mutant with platinum aesthetics and special abilities.",features:["Visual único","Habilidades especiales","Edición 2026"],featuresEn:["Unique visual","Special skills","2026 Edition"],categoria:"MAIN"},{id:"main_7",nombre:"100k Tarros XP",nombreEn:"100k XP Jars",precio:15,imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRWQsH6i8OPIj8DtvkxDggsiG4FfvRNj4zkA&s",descripcion:"Nivelación rápida para tu ejército de gladiadores.",descripcionEn:"Fast leveling for your gladiator army.",features:["Sube a nivel alto","Ahorro de tiempo","Fácil aplicación"],featuresEn:["Level up high","Time saving","Easy application"],categoria:"MAIN"},{id:"main_8",nombre:"100k Fichas JackPot",nombreEn:"100k Jackpot Tokens",precio:15,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/fichasjacpot.png?raw=true",descripcion:"Pack masivo de fichas para eventos y ruletas.",descripcionEn:"Massive token pack for events and roulettes.",features:["Alta recompensa","Giro automático","Uso flexible"],featuresEn:["High reward","Auto spin","Flexible use"],categoria:"MAIN"},{id:"main_9",nombre:"Expansión Laboratorio",nombreEn:"Laboratory Expansion",precio:4,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/laboratorio.png?raw=true",descripcion:"Desbloquea slots y mejoras del laboratorio.",descripcionEn:"Unlock laboratory slots and improvements.",features:["Más slots","Mejora visual","Multi-breeding"],featuresEn:["More slots","Visual improvement","Multi-breeding"],categoria:"MAIN"},{id:"main_10",nombre:"Orbe Velocidad Nivel 5",nombreEn:"Level 5 Speed Orb",precio:2,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/orbelvl5.png?raw=true",descripcion:"Potenciador de velocidad para mejorar turnos.",descripcionEn:"Speed booster to improve turns.",features:["Primer golpe","Agilidad +50%","Recarga rápida"],featuresEn:["First strike","Agility +50%","Fast recharge"],categoria:"MAIN"},{id:"main_11",nombre:"ORB Nivel ATK 6 x 10",nombreEn:"ORB ATK Level 6 x 10",precio:6,imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvqT-WxlpjpLTxcrwKAUQmGTTv6vtrVHxkA&s",descripcion:"Pack ofensivo para maximizar DPS, Te entrego 10 orbes del paquete.",descripcionEn:"Offensive pack to maximize DPS, I deliver 10 orbs from the package.",features:["Daño puro","Críticos frecuentes","Efecto sangrado"],featuresEn:["Pure damage","Frequent crits","Bleeding effect"],categoria:"MAIN"},{id:"main_12",nombre:"BIG BOSS",nombreEn:"BIG BOSS",precio:10,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/bigboss.png?raw=true",descripcion:"Te consigo a BigBoss en tu cuenta.",descripcionEn:"I get BigBoss in your account.",features:["Resistencia temporal","Fuerza X2","Drop mejorado"],featuresEn:["Temporary resistance","2X Strength","Improved drop"],categoria:"MAIN"},{id:"other_1",nombre:"Doxeo para +51",nombreEn:"Doxxing for +51",precio:5,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/doxeo.png?raw=true",descripcion:"Saco informacion como DNI, Arbol Familiar antencedentes y etc con el numero o nombre para Peru.",descripcionEn:"I extract information like ID, Family Tree, records, etc. with number or name for Peru.",features:["Fuentes públicas","Reporte PDF","Enfoque de privacidad"],featuresEn:["Public sources","PDF Report","Privacy focused"],categoria:"OTHER"},{id:"other_2",nombre:"Desarrollo Web Next-Gen",nombreEn:"Next-Gen Web Development",precio:40,imagen:"https://www.freecodecamp.org/news/content/images/2019/09/lua_script.jpg",descripcion:"Creación de portafolios, tiendas o landing pages y etc, solo 40 soles por una web alojada en GitHub, Si te interesa una web con dominio .com dale en ver mas..",descripcionEn:"Creation of portfolios, stores or landing pages etc, only 40 soles for a website hosted on GitHub. If you are interested in a website with a .com domain click see more..",features:["UI/UX único","Optimización SEO","Host incluido","Entrega profesional"],featuresEn:["Unique UI/UX","SEO Optimization","Host included","Professional delivery"],categoria:"OTHER",saberMas:"https://webcraft-ux.github.io/webcraft/"},{id:"other_3",nombre:"Scripts Custom MGG",nombreEn:"Custom MGG Scripts",precio:15,imagen:"https://callcenters.by/images/asterisk/lua%20plugin.jpg",descripcion:"Automatizaciones personalizadas para productividad.",descripcionEn:"Custom automations for productivity.",features:["Auto-farm","Logs de actividades","Configuración guiada","Soporte"],featuresEn:["Auto-farm","Activity logs","Guided configuration","Support"],categoria:"OTHER"},{id:"other_4",nombre:"ChatGPT Premium",nombreEn:"ChatGPT Premium",precio:8,imagen:"https://spanish.entrepreneur.com/wp-content/uploads/sites/3/2024/12/1733494589-openai-chatgpt-premium-subscription-1224-g2186754261.jpg",descripcion:"Acceso premium para chatGPT barato y con descuento por cantidad.",descripcionEn:"Premium access for cheap ChatGPT with quantity discount.",features:["Asistencia rápida","Uso personal","Configuración guiada","Soporte base"],featuresEn:["Fast assistance","Personal use","Guided configuration","Basic support"],categoria:"OTHER"}],rb={Cajas:`Box Cyber	mystery_cyber	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_cyber.png
Box Necro / Undead	mystery_undead	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_undead.png
Box Saber	mystery_saber	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_saber.png
Box Zoo	mystery_zoo	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_zoo.png
Box Galactic	mystery_galactic	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_galactic.png
Box Mystic	mystery_mystic	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_mystic.png
Box Elite Cyber	mystery_elite_cyber	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_elite_cyber.png
Box Elite Saber	mystery_elite_saber	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_elite_saber.png
Box Elite Necro	mystery_elite_necro	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_elite_necro.png
Box Elite Galactic	mystery_elite_galactic	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_elite_galactic.png
Box Elite Zoo	mystery_elite_zoo	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_elite_zoo.png
Box Elite Mystic	mystery_elite_mystic	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_elite_mystic.png
Box Research 5	mystery_research_5	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_research_5.png
Box Research 6	mystery_research_6	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_research_6.png
Box Research 7	mystery_research_7	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_research_7.png
Box Research IX	mystery_research_ix	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_research_ix.png
Box Retaliate	shop_mystery_retaliate	https://s-ak.kobojo.com/mutants/assets/thumbnails/shop_mystery_retaliate.png
Box Shield	shop_mystery_shield	https://s-ak.kobojo.com/mutants/assets/thumbnails/shop_mystery_shield.png
Box Regenerate	shop_mystery_regenerate	https://s-ak.kobojo.com/mutants/assets/thumbnails/shop_mystery_regenerate.png
Box Slash	shop_mystery_slash	https://s-ak.kobojo.com/mutants/assets/thumbnails/shop_mystery_slash.png
Box Strengthen	shop_mystery_strengthen	https://s-ak.kobojo.com/mutants/assets/thumbnails/shop_mystery_strengthen.png`,Recursos:`Triple Experiencia	Charm_Xpx3_7	https://s-ak.kobojo.com/mutants/assets/thumbnails/charm_xpx3_7.png
Tickets x25	Material_Energy25	https://s-ak.kobojo.com/mutants/assets/thumbnails/material_energy25.png
Cuádruple Regeneración	Charm_Regenx4_3	https://s-ak.kobojo.com/mutants/assets/thumbnails/charm_regenx4_3.png
Ficha Reto	Material_Event_Token	https://s-ak.kobojo.com/mutants/assets/thumbnails/material_event_token.png
Tickets x5	Material_Energy5	https://s-ak.kobojo.com/mutants/assets/thumbnails/material_energy5.png
Doble Experiencia	Charm_Xpx2_3	https://s-ak.kobojo.com/mutants/assets/thumbnails/charm_xpx2_3.png
Ataques Críticos	Charm_Critical_3	https://s-ak.kobojo.com/mutants/assets/thumbnails/charm_critical_3.png
Ficha Jackpot	Material_Jackpot_Token	https://s-ak.kobojo.com/mutants/assets/thumbnails/material_jackpot_token.png
Escudo Anticrítico	Charm_Anticritical_1	https://s-ak.kobojo.com/mutants/assets/thumbnails/charm_anticritical_1.png
Ficha Reactor	Material_Gacha_Token	https://s-ak.kobojo.com/mutants/assets/thumbnails/material_gacha_token.png
Triple Experiencia	Charm_Xpx3_3	https://s-ak.kobojo.com/mutants/assets/thumbnails/charm_xpx3_3.png
Doble Regeneración	Charm_Regenx2_7	https://s-ak.kobojo.com/mutants/assets/thumbnails/charm_regenx2_7.png
Ataques Críticos	Charm_Critical_7	https://s-ak.kobojo.com/mutants/assets/thumbnails/charm_critical_7.png
Escudo Anticrítico	Charm_Anticritical_3	https://s-ak.kobojo.com/mutants/assets/thumbnails/charm_anticritical_3.png
Doble Regeneración	Charm_Regenx2_3	https://s-ak.kobojo.com/mutants/assets/thumbnails/charm_regenx2_3.png`,Orbes:`Orbe Ataque +2%	orb_basic_attack	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack.png
Orbe Ataque +5%	orb_basic_attack_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_01.png
Orbe Ataque +10%	orb_basic_attack_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_02.png
Orbe Ataque +12%	orb_basic_attack_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_03.png
Orbe Ataque +14%	orb_basic_attack_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_04.png
Orbe Ataque +16%	orb_basic_attack_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_05.png
Orbe Ataque +17%	orb_basic_attack_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_06.png
Orbe Ataque +18%	orb_basic_attack_07	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_attack_07.png
Orbe Vida +5%	orb_basic_life	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life.png
Orbe Vida +10%	orb_basic_life_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_01.png
Orbe Vida +15%	orb_basic_life_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_02.png
Orbe Vida +20%	orb_basic_life_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_03.png
Orbe Vida +25%	orb_basic_life_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_04.png
Orbe Vida +28%	orb_basic_life_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_05.png
Orbe Vida +30%	orb_basic_life_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_06.png
Orbe Vida +35%	orb_basic_life_07	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_life_07.png
Orbe Críticos +2%	orb_basic_critical	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical.png
Orbe Críticos +5%	orb_basic_critical_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_01.png
Orbe Críticos +11%	orb_basic_critical_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_02.png
Orbe Críticos +13%	orb_basic_critical_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_03.png
Orbe Críticos +15%	orb_basic_critical_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_04.png
Orbe Críticos +17%	orb_basic_critical_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_05.png
Orbe Críticos +18%	orb_basic_critical_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_06.png
Orbe Críticos +19%	orb_basic_critical_07	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_critical_07.png
Orbe Experiencia +10%	orb_basic_xp	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp.png
Orbe Experiencia +40%	orb_basic_xp_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_01.png
Orbe Experiencia +80%	orb_basic_xp_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_02.png
Orbe Experiencia +120%	orb_basic_xp_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_03.png
Orbe Experiencia +150%	orb_basic_xp_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_04.png
Orbe Experiencia +200%	orb_basic_xp_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_05.png
Orbe Experiencia +300%	orb_basic_xp_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_xp_06.png
Orbe Regeneración +3%	orb_basic_regenerate	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_regenerate.png
Orbe Regeneración +7%	orb_basic_regenerate_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_regenerate_01.png
Orbe Regeneración +15%	orb_basic_regenerate_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_regenerate_02.png
Orbe Regeneración +20%	orb_basic_regenerate_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_regenerate_03.png
Orbe Regeneración +25%	orb_basic_regenerate_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_regenerate_04.png
Orbe Regeneración +28%	orb_basic_regenerate_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_regenerate_05.png
Orbe Regeneración +30%	orb_basic_regenerate_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_regenerate_06.png
Orbe Respuesta +3%	orb_basic_retaliate	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate.png
Orbe Respuesta +7%	orb_basic_retaliate_01	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_01.png
Orbe Respuesta +15%	orb_basic_retaliate_02	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_02.png
Orbe Respuesta +17%	orb_basic_retaliate_03	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_03.png
Orbe Respuesta +18%	orb_basic_retaliate_04	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_04.png
Orbe Respuesta +19%	orb_basic_retaliate_05	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_05.png
Orbe Respuesta +20%	orb_basic_retaliate_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_06.png`},Kf="51906328464",fd="https://chat.whatsapp.com/DALbalnNe9N6bD4W1Wp0HM?mode=gi_t",Sk=[0,50,60,65,70,75,80,85,90],Xf=[{id:"pe",name:"Perú",currency:"PEN",symbol:"S/",rate:1,exchangeRate:1,flag:"🇵🇪"},{id:"mx",name:"México",currency:"MXN",symbol:"$",rate:1,exchangeRate:5.07,flag:"🇲🇽"},{id:"es",name:"España",currency:"EUR",symbol:"€",rate:1,exchangeRate:.25,flag:"🇪🇸"},{id:"cl",name:"Chile",currency:"CLP",symbol:"$",rate:1,exchangeRate:262.23,flag:"🇨🇱"},{id:"ar",name:"Argentina",currency:"ARS",symbol:"$",rate:1,exchangeRate:408.14,flag:"🇦🇷"},{id:"ve",name:"Venezuela",currency:"VES",symbol:"Bs",rate:1,exchangeRate:150.82,flag:"🇻🇪"},{id:"co",name:"Colombia",currency:"COP",symbol:"$",rate:1,exchangeRate:1110.59,flag:"🇨🇴"},{id:"bo",name:"Bolivia",currency:"BOB",symbol:"Bs",rate:1,exchangeRate:2.02,flag:"🇧🇴"}],jk=[{name:"Western Union",logo:"https://play-lh.googleusercontent.com/2O6TfOnCMQ8aWdhcME3CwHK_od33WPBw02ZpG_lpvnwRPHfCKBlmCeaLJ_tL8oqchBg",info:"Global money transfer. Available at physical agents worldwide.",infoEs:"Envío de dinero global. Disponible en agentes físicos."},{name:"Binance",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9rjRtIJJM5o6xP2LqfQFFcWejwFgRA1rag&s",info:"Direct deposits via USDT (Tron Network TRC20). Fast & Secure.",infoEs:"Depósitos directos vía USDT (Red Tron TRC20)."},{name:"PayPal",logo:"https://play-lh.googleusercontent.com/iQ8f5plIFy9rrY46Q2TNRwq_8nCvh9LZVwytqMBpOEcfnIU3vTkICQ6L1-RInWS93oQg",info:"Secure international payment with card or balance.",infoEs:"Pago internacional seguro con tarjeta o saldo."},{name:"Yape",logo:"https://play-lh.googleusercontent.com/y5S3ZIz-ohg3FirlISnk3ca2yQ6cd825OpA0YK9qklc5W8MLSe0NEIEqoV-pZDvO0A8",info:"Exclusive for PERU (PEN). Immediate transfer.",infoEs:"Exclusivo para PERÚ (Soles). Transferencia inmediata."},{name:"Airtm",logo:"https://s3-eu-west-1.amazonaws.com/tpd/logos/5d6d32510d8627000132ad10/0x0.png",info:"Digital wallet recommended for Latin America.",infoEs:"Billetera digital recomendada para Latinoamérica."}],lb=["CH","LU","DK","NO","IS","US","DE","SG","IE","AU","CA","GB","ES","IT","KR","IL","CL","UY"],Nk={"4.0":["CH","LU","DK","NO","IS"],"3.0":["US","DE","SG","IE","AU","CA","GB"],"2.0":["IT","KR","IL","UY"],"1.5":["BR","FR","JP"]},Ek=`A00-C0R3-C0NTR0L aa_99
A027441 af_99
Abraham Lincoln af_05
Absolem df_03
Acarius ed_05
Achernar ef_13
Akai-Bot ae_10
Alfie ae_07
Altaris ca_10
Altísimo Candelabro fb_13
Amalgalmas bf_13
Amarok fc_07
Amistad Sin Limites cc_13
Ammonia Atlantica ed_12
Amo de las Llaves cf_09
An0malie da_11
Androide aa_01
Andromeda ae_08
Angry Pork ed_10
Animus de Irrealidad ee_99
Aniquilador ea_01
Anteros ca_13
Antropobot Soñador da_13
Anubis fb_03
Aplastador ab_07
Apofis be_06
Aquapunzel ef_03_silver
Aqueronte bf_11
Aracno da_02
Aran ce_07
Arcangel fa_99
Archivista Eterno ff_12
Arelvam cf_10
Armadizo de_03
Artemisa cb_06
Artista Siniestro fd_05
Asaylan da_08
Asimov a_13
Asteroide Gestalt ee_11
Astro Gummy ee_07
Astrobservador e_13
Astromago fe_03
Astrosurfista ee_01
Atlas ce_13
Aubraea Mutantula eb_11
Aullosaurio d_12
Automata a_14
Autonoraptor af_04
Avispa Diesel ad_07
Azaronimo ae_99
Azog cf_04
Azuria fe_02
B.U.N. Genio da_14
Bahamut fe_10
Ballesto cb_12
Banker fa_04
Banshee Guerrera cb_01
Barbaro c_05
Barbaroca af_03
Baron Lundi bf_01
Basilisco y Esdragon df_12_vegetal
Battle Toad cd_04
Bazzinger fa_03
Bearsikk Sikleast cd_13
Behemoth ec_02
Bestia d_01
Big Bo$$ ca_09
Bioerizo ad_06
Black I.C.E. af_14
Blender ac_08
Borrasca fc_06
Bounda af_07
Brawler db_05
Breakmaster ca_14_olympics
Bregbeam ff_10
Brick McGole ea_04
Bricodron LLK-215 ea_12
Britany bf_05
Bruja de la Peste bb_08
Bruja Malvada fb_04
Buck Maurice cc_02
Buffalor db_10
Bulldozer bd_05
Buranka fd_04
Bushi cb_02
C'thlig fe_01
Caballero Nordico cc_01
Cabloide aa_12
Calaca bf_09
Caliburn EX cf_11
Cancernia bd_02_silver
Capitan Achabe ce_10
Capitan aguila cd_12
Capitan Barbanegra cb_14
Capitan Gluglu de_07
Capitan Gorn ea_09
Capitan Mecano ac_02
Capitan Osamenta bc_02
Capitan Patriota ea_07
Capitan Paz fc_02
Capitan Perla Negra be_04
Caprika be_02_silver
Capsuladora MTZ-004 ac_13
Carcinus Gigas ad_09
Carlingger da_07
Carnero Vengador bf_03_silver
Caronte bb_05
Caronte (Halloween) bc_12
Castigo ff_02
Casto db_06
Caudillo Steam af_09
Cazador Espacial ec_05
Cazarrecompensas a_05
Centaurus ae_09
Centinela R0B-H4N aa_08
Cerbero db_01
Ceres e_03
Cernunnos dd_04
Cezanne dc_04
Challengeer ca_05
Chaman Sombra fa_05
Champicorteza bf_07
Chantecler df_08
Chocolem df_11
Chun-Lei ce_11
Ciberbabosa ae_05
Cibercroc ad_05
Cibermantico Etereo fa_12
Ciberpunk ac_05
Clerigo Oscuro bf_12
Cobrakai db_03
Colmillo Rabioso bc_11
Coloso ae_01
Comeabuelas dc_06
Commander Ender ab_04
Cooktouille bd_11
Cosmo Kong de_02
Cosmopandas de_08
Cr€$u$ ba_12
Cuervo b_04
Cupido cb_05
D'Arathomis c_13
D.A.B. ea_14
Dama del Crepusculo fb_12
Dama Harpia bd_04
Dandi oscar bc_06
Darwin de_06
Despota Negro bc_01
Deus Machina af_01
Devorador eb_03
Dezinger ac_03
Diablesa f_01
Diablo eb_99
Dimentio ef_11
Disension cb_11
Disfuncidroide ab_12
Divastator ef_10
Doctor Blaw ba_05
Doctor del Farol bb_12
Doctor Desollador bc_13
Dollbyte fe_06
Don Gamberetti cd_14
Dr. Frost fa_07
Dr. Nucleus eb_08
Dracomago fd_09
Dracus Nobilis df_01
Drall cd_08
Dreadnought ea_11
Drei, Space Corgi de_11
Drudge Zombie b_05
Drusella ab_06
Dug Dario be_08
Duplicado de Eva af_06
E.T.-Liot ee_10
ED-404 aa_10
Ejecutor ca_01
El Arquitecto ab_13
El Coleccionista bc_09
El Descolorido db_13
El Enterrador bf_10_western
El Experimento ba_04
El Fontanero ac_04
El Fosforescente bb_13
El Gringo cc_06
El Motin cb_13
El Original bd_07_soldiers
El Presentador ab_14
El Rey de Mimphys bf_06
El Rey sin Nombre ce_08
El Veneno af_10
Emperador Galactico bf_04_starwars
Emperador Helado df_13
Enano y Cerebro bd_08
Enviro 3.0 ab_11
ERR-ADI-K-Bot ca_06
Escarabot ad_01
Escuadron Rhino da_04
Espectra ec_08
Espectro de la Cripta bb_02
Espectroplasma b_14
Excaliduro ec_09
Excavalipsis ba_09
Exo Cookie de_05
Exoceleste algido fe_12
Exopez ea_03_silver
Explorador Sideral e_12
Extraterrestre e_01
Falcon ec_07
Fantasmonauta be_01
Faucesnegras bd_09
Fenec Plus Ultra da_05
Fenix fd_07
Flying Jordson ee_04
FootBot fa_08
Frankendwarf cb_10
Frankenhuahua bb_09
Freyja, Reina de los Vanir fd_14
Frostmass c_03
Gakarian eb_10
Gamallia ec_10
Gandolphus fc_01
GAR, Zombi Soberano b_13
Gargantus dc_03_gothic
Garlog eb_06_elements
Garuda a_03
Gelatina Purulenta be_12
Geminium ce_02_silver
General Caos ca_03
General Terracota ca_12
Generalisimo Chocoleon IV fc_12
Genimal df_99
Genshiryoku de_04
Geomega ff_07
George Washington bc_04
Gerard Steelgarden ff_11
Giganto-Moai ae_14
Gladiadog cd_06
Gladiador c_14
Globomono dd_07
Gloton bb_06
Glubber ff_05
Golem de Epocas af_13
Golemagnus ee_08
Goliat aa_02
Gorthaur el Cruel fc_09_fantasy
Gozer fb_08
Gran Gusano de los Tuneles db_12
Gran Señor de las Tumbas ab_08
Grumpy Claus ab_09
Guardia Men'ki cd_10
Guardian Galactico ce_03
Guerrero c_01
Guerrero Debil c_02
Gwenn df_10
H.U.M.A.N. aa_03
H.U.N.T.3.R aa_09
H0ud1n1 af_08
Hada Machete cf_03
Hadeath fb_09
Haggis cd_03
Hardcorius fb_05
Hawkeye da_10
Hechicera fb_06
Hefesto fc_10
Heimdall af_11
Hekantocheiros ec_13
Helicoide Boreal fa_13
Helidron KxT-271 ae_13
Hellsaw ba_10
Hercules aa_06
Heredero de los 5 anillos cf_12
Hidrira ed_14
Hielo Patinadora Yria cf_14
Hijo de la Tormenta cf_13
Hipopotanque ad_10
Hog the Ripper cd_05
Honey Bunny cd_01
Horax db_09
Horus fd_02
Huesamblaje b_12
Humanoide Perfido ac_01
Hypnos ab_02
Infinito Supermasivo de_14
Ingeniero fe_99
Interceptrix ca_02
Invadron ae_03
Invocador f_12
Ishi no Ōkami fd_11
Ivory Hanzo fd_03_japan
Jack O'Lantern b_03
Jane Saw cb_09
Jhingal ee_05
Juan Hielo cd_07
K'yu T'ypaï ef_14
Kaiju Kitty dd_01
Kal Wayne ef_07
Kameo dd_10
King Lulu bc_10
Kitty Ranger ad_08
Kolossus ce_99
Kraken ef_05
Krampus dc_10
Krunk ea_06
Kudamono fc_08
Kung Chow fd_06
La Anárquica ba_13
La Locura Reptante db_14
La Olvidada bb_11
La Parca fb_01
Lady Libertad ea_08
Lampyrion Solar dd_12
Lancelot cc_09
Lapin Zombie bd_14
Lara cc_04
Las Moiras fb_07
Leohart dc_02_silver
Leonidas cb_04
Lepidoptech ad_12
Leprechaun f_04
Leviatan de_12
Libraro ae_02_silver
Lily fa_06_movies
Liquidador ff_09
Litominero Stellariano ec_12
Llama Sensei dd_13
Loco de la Motosierra bc_05
Lord Blood bb_01
Louis XVI db_04
Mad Mike de_10
Madre de los Dragones df_05
Maestro Oida ee_03
Maestro Shinzo dc_09
Maestro Splitter dd_02
Mago f_14
Mago de la Singularidad ef_99
Mago de las Nieves f_03
Mago Ryzafredd ef_09
Mago Tetrico bf_02
Majin Zam fe_08
Makino ca_08
Malvatron ad_04
Mama Kangu dd_06
Mandor ef_06
Mandragora ff_03
Mantidroide da_03
Mapach Wik ed_04
Marciano Errante ce_01
Marine Muerto eb_05
Marv ae_06
Mascarada Emocional ff_99
Master Paw fd_10
Matafantasmas eb_04
Mau-Jack ed_06
Mecaovoide Aracneo ad_11
Mecargola ba_14
Medico Astral eb_12
Medinosaurio ed_13
Medusa fd_01
Mega Claus cf_07
Megastral ee_09
Mekali fa_02
Mephisto ef_04
Mexihcatl fc_04
Micky Krueger bc_03
Midas fc_11
Mimi Cronocurva fa_10
Miroku df_04
Missy Despierta ca_99
Mister T-Ger dd_09
Mix0-Logo ae_11
Mon-Key Crew cd_09
Monje Akuso cf_05
Monocerus ad_02
Monolith ff_04
Motero Maldito bb_03
Mr Marvelous ef_02_heroes
Muñeca Diabolica ba_02
Myrmidus.exe ad_13
Namaste ff_06
Naraxis ba_08
Nebulon ef_01
Nebulus fe_05_silver
Necrobot ab_01
Necrodragon bd_01
Necroparasito bb_07
Neo Urban XIII ab_05_gachaboss
Nexo Orbital ee_13
Nezarim be_07
Nimrod fc_99
Noren dc_07
Nyrlatoth be_05
Núcleo seráfico fe_14
Octopia ed_99
Oculus aa_04
Oculys be_11
Omikami fd_08
Optimus Zord ac_09
Oriax fc_03
Orion fa_11
Oryctolagus Exobioicus de_13
Oso Espantoso bd_03
Overkill be_10
Owlock ed_11
Paramic ed_07
Pejelagarto dd_05
Peregrino Espacial ea_13
Pesadilla Viviente fb_11
Phileas Derocas ac_12
Pierrot fe_11
Pikabu ba_07
Pirotropo be_09
Piwisher db_11
Polaris ee_12
Principe Escorpion fb_02_silver
Professor Cronomantico ac_14
Profeta del Crepúsculo ff_14
Project X27 ca_04
Protector de los Sueños af_12
Proyecto 3V3 aa_07
Psicojabali dd_03
Quebrantacuellos be_03
Quetzalcoatl df_09
Quimera df_07
Ragnar cb_03
Rakshasa dc_01
Rambit d_03
Reed, El Verdadero Heroe cf_99
Regulo&Juzya ce_12
Reina Parasita de_01
Reina Rakkti ee_06
Reina Sylvidra eb_09
Reptoide da_01
Rey Azul cc_14_chess
Rey De Avalon fc_13
Rey de los Insectos fe_07
Rey Esqueleto cb_07
Rey Mono dc_05
Rey Steven ea_05
Rinotauro dd_08
Roadmaster ba_11
Robofuerte ac_07_lucha
Robot a_01
Robot Debil a_02
Rocageno ed_02
Rocky Botboa ca_07
Rox McRain ed_09
S-K-Venger ab_10
Sable df_06
Sacamantecas bb_04
Sagitauro cd_02_silver
Sakuraboshi ff_13
Sangresquito bd_13
Sanik dc_08
Santactopus ec_04
Santagonista cc_11
Sargento Dusk ac_10
Sasquatch d_13
Satiro Hechicero df_02
Scaramouche cc_12
Seiyatsu ef_08
Sentry ea_02
Señor Bestial dd_14
Señor del Abismo ff_01
Señor Dragon db_07
Sgt. Pandamonium ed_08
Shin Hakuho cc_05
Sierrametrodon dc_13
Simulacro de Combate ab_99
Simurgh fd_12
Sir Bannog cd_11
Sirenia eb_02
Sound Killah da_09_music
Space Princess fe_04
Spada dc_11
Spartac cc_07
Spin Fury ac_11
Star Trooper ec_03
Starminator eb_07
Sun-Duke ce_05_villains
Sundance Bug ec_01
Supernovus ee_02
Supraman X ae_04
Surfista del Espacio ea_10
T-3rr0r bb_10
Tauridus ad_03_silver
TCB-8566 Trafficroid aa_13
Tecno Tao fa_01
Tecnocaracol da_12
Tecnoforzer aa_05
Tenacity ae_12
Tengu bd_99
Termodroide Celsius ea_99
Terror Abisal dd_11
Terror Jurasico dc_14
Tezcatlipoca fd_13
Thanaconda bd_12
The Reef ca_11_beach
Thor cf_02
Thran bc_08
Tio Sam cf_06
Tiranozomb db_08
Tomahawk ce_06
Tormenta de Fuego ff_08
Traiciobaza bc_14
TriAD aa_11
Triceratanque da_06
Triple-B ba_03
Turbacieno bc_07
Tutti Viscosi eb_01
Tyrtiduron bd_06
Urgan cc_10
Valkiria cf_01
Van Helsing bf_08
Veren Kaeesu ec_11
Viajero de Vortice be_13
Viper ac_06
Virgon af_02_silver
Vivaldi fe_13
Väinämöinen f_13
Wampara ed_03
Waryena bd_10
Wrath cb_08
Wynn cf_08
X'astuth ef_12
Xeleroth fe_09
Xenarach ab_03
Xenos ed_01
Xinomas eb_13
Yelda fc_05
Yggdrasil fb_10
Yokozuna cc_08
Z-0 ba_06
Zagam, Gran Rey De La Avaricia fb_14
Zapador de Madrigueras dc_12
Zar Bomba ce_09
Zena cc_03
Zenguru fa_09
Zeus ec_06_olympians
Zigmo de_09
Zombat db_02
Zombi b_01
Zombi Debil b_02
Zomborg ba_01
Zortrex ce_04
El Glitchy Corazon	ab_15
Spiraxia	e_14
Irradiancia	bf_14
El Hambre	be_15
Dandy Cosmico	ce_14
Kereon del Abismo	ea_15
Apiarca	d_14_platinum
Ornitorrinco	dd_15
`,xd=O.createContext({});function _d(a){const s=O.useRef(null);return s.current===null&&(s.current=a()),s.current}const wk=typeof window<"u",Zf=wk?O.useLayoutEffect:O.useEffect,Fr=O.createContext(null);function kd(a,s){a.indexOf(s)===-1&&a.push(s)}function Dr(a,s){const l=a.indexOf(s);l>-1&&a.splice(l,1)}const cn=(a,s,l)=>l>s?s:l<a?a:l;let Gd=()=>{};const ra={},Yf=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a),Qf=a=>typeof a=="object"&&a!==null,Jf=a=>/^0[^.\s]+$/u.test(a);function Wf(a){let s;return()=>(s===void 0&&(s=a()),s)}const Zt=a=>a,Zo=(...a)=>a.reduce((s,l)=>r=>l(s(r))),Bo=(a,s,l)=>{const r=s-a;return r?(l-a)/r:1};class yd{constructor(){this.subscriptions=[]}add(s){return kd(this.subscriptions,s),()=>Dr(this.subscriptions,s)}notify(s,l,r){const d=this.subscriptions.length;if(d)if(d===1)this.subscriptions[0](s,l,r);else for(let p=0;p<d;p++){const g=this.subscriptions[p];g&&g(s,l,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const qt=a=>a*1e3,Xt=a=>a/1e3,$f=(a,s)=>s?a*(1e3/s):0,e0=(a,s,l)=>(((1-3*l+3*s)*a+(3*l-6*s))*a+3*s)*a,Ck=1e-7,Vk=12;function Dk(a,s,l,r,d){let p,g,h=0;do g=s+(l-s)/2,p=e0(g,r,d)-a,p>0?l=g:s=g;while(Math.abs(p)>Ck&&++h<Vk);return g}function Yo(a,s,l,r){if(a===s&&l===r)return Zt;const d=p=>Dk(p,0,1,a,l);return p=>p===0||p===1?p:e0(d(p),s,r)}const t0=a=>s=>s<=.5?a(2*s)/2:(2-a(2*(1-s)))/2,n0=a=>s=>1-a(1-s),a0=Yo(.33,1.53,.69,.99),vd=n0(a0),s0=t0(vd),o0=a=>a>=1?1:(a*=2)<1?.5*vd(a):.5*(2-Math.pow(2,-10*(a-1))),Md=a=>1-Math.sin(Math.acos(a)),i0=n0(Md),r0=t0(Md),qk=Yo(.42,0,1,1),Rk=Yo(0,0,.58,1),l0=Yo(.42,0,.58,1),Ok=a=>Array.isArray(a)&&typeof a[0]!="number",c0=a=>Array.isArray(a)&&typeof a[0]=="number",Hk={linear:Zt,easeIn:qk,easeInOut:l0,easeOut:Rk,circIn:Md,circInOut:r0,circOut:i0,backIn:vd,backInOut:s0,backOut:a0,anticipate:o0},Lk=a=>typeof a=="string",cb=a=>{if(c0(a)){Gd(a.length===4);const[s,l,r,d]=a;return Yo(s,l,r,d)}else if(Lk(a))return Hk[a];return a},hr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function zk(a,s){let l=new Set,r=new Set,d=!1,p=!1;const g=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function f(x){g.has(x)&&(b.schedule(x),a()),x(h)}const b={schedule:(x,k=!1,G=!1)=>{const M=G&&d?l:r;return k&&g.add(x),M.add(x),x},cancel:x=>{r.delete(x),g.delete(x)},process:x=>{if(h=x,d){p=!0;return}d=!0;const k=l;l=r,r=k,l.forEach(f),l.clear(),d=!1,p&&(p=!1,b.process(x))}};return b}const Uk=40;function u0(a,s){let l=!1,r=!0;const d={delta:0,timestamp:0,isProcessing:!1},p=()=>l=!0,g=hr.reduce((L,D)=>(L[D]=zk(p),L),{}),{setup:h,read:f,resolveKeyframes:b,preUpdate:x,update:k,preRender:G,render:y,postRender:M}=g,j=()=>{const L=ra.useManualTiming,D=L?d.timestamp:performance.now();l=!1,L||(d.delta=r?1e3/60:Math.max(Math.min(D-d.timestamp,Uk),1)),d.timestamp=D,d.isProcessing=!0,h.process(d),f.process(d),b.process(d),x.process(d),k.process(d),G.process(d),y.process(d),M.process(d),d.isProcessing=!1,l&&s&&(r=!1,a(j))},I=()=>{l=!0,r=!0,d.isProcessing||a(j)};return{schedule:hr.reduce((L,D)=>{const Q=g[D];return L[D]=(Y,q=!1,K=!1)=>(l||I(),Q.schedule(Y,q,K)),L},{}),cancel:L=>{for(let D=0;D<hr.length;D++)g[hr[D]].cancel(L)},state:d,steps:g}}const{schedule:Re,cancel:la,state:gt,steps:Gu}=u0(typeof requestAnimationFrame<"u"?requestAnimationFrame:Zt,!0);let vr;function Bk(){vr=void 0}const xt={now:()=>(vr===void 0&&xt.set(gt.isProcessing||ra.useManualTiming?gt.timestamp:performance.now()),vr),set:a=>{vr=a,queueMicrotask(Bk)}},d0=a=>s=>typeof s=="string"&&s.startsWith(a),p0=d0("--"),Pk=d0("var(--"),Ad=a=>Pk(a)?Fk.test(a.split("/*")[0].trim()):!1,Fk=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function ub(a){return typeof a!="string"?!1:a.split("/*")[0].includes("var(--")}const Es={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},Po={...Es,transform:a=>cn(0,1,a)},br={...Es,default:1},Oo=a=>Math.round(a*1e5)/1e5,Td=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Kk(a){return a==null}const Xk=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Id=(a,s)=>l=>!!(typeof l=="string"&&Xk.test(l)&&l.startsWith(a)||s&&!Kk(l)&&Object.prototype.hasOwnProperty.call(l,s)),g0=(a,s,l)=>r=>{if(typeof r!="string")return r;const[d,p,g,h]=r.match(Td);return{[a]:parseFloat(d),[s]:parseFloat(p),[l]:parseFloat(g),alpha:h!==void 0?parseFloat(h):1}},Zk=a=>cn(0,255,a),yu={...Es,transform:a=>Math.round(Zk(a))},Ca={test:Id("rgb","red"),parse:g0("red","green","blue"),transform:({red:a,green:s,blue:l,alpha:r=1})=>"rgba("+yu.transform(a)+", "+yu.transform(s)+", "+yu.transform(l)+", "+Oo(Po.transform(r))+")"};function Yk(a){let s="",l="",r="",d="";return a.length>5?(s=a.substring(1,3),l=a.substring(3,5),r=a.substring(5,7),d=a.substring(7,9)):(s=a.substring(1,2),l=a.substring(2,3),r=a.substring(3,4),d=a.substring(4,5),s+=s,l+=l,r+=r,d+=d),{red:parseInt(s,16),green:parseInt(l,16),blue:parseInt(r,16),alpha:d?parseInt(d,16)/255:1}}const Fu={test:Id("#"),parse:Yk,transform:Ca.transform},Qo=a=>({test:s=>typeof s=="string"&&s.endsWith(a)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${a}`}),En=Qo("deg"),ln=Qo("%"),ne=Qo("px"),Qk=Qo("vh"),Jk=Qo("vw"),db={...ln,parse:a=>ln.parse(a)/100,transform:a=>ln.transform(a*100)},Ts={test:Id("hsl","hue"),parse:g0("hue","saturation","lightness"),transform:({hue:a,saturation:s,lightness:l,alpha:r=1})=>"hsla("+Math.round(a)+", "+ln.transform(Oo(s))+", "+ln.transform(Oo(l))+", "+Oo(Po.transform(r))+")"},tt={test:a=>Ca.test(a)||Fu.test(a)||Ts.test(a),parse:a=>Ca.test(a)?Ca.parse(a):Ts.test(a)?Ts.parse(a):Fu.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?Ca.transform(a):Ts.transform(a),getAnimatableNone:a=>{const s=tt.parse(a);return s.alpha=0,tt.transform(s)}},Wk=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function $k(a){var s,l;return isNaN(a)&&typeof a=="string"&&(((s=a.match(Td))==null?void 0:s.length)||0)+(((l=a.match(Wk))==null?void 0:l.length)||0)>0}const m0="number",h0="color",eG="var",tG="var(",pb="${}",nG=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function js(a){const s=a.toString(),l=[],r={color:[],number:[],var:[]},d=[];let p=0;const h=s.replace(nG,f=>(tt.test(f)?(r.color.push(p),d.push(h0),l.push(tt.parse(f))):f.startsWith(tG)?(r.var.push(p),d.push(eG),l.push(f)):(r.number.push(p),d.push(m0),l.push(parseFloat(f))),++p,pb)).split(pb);return{values:l,split:h,indexes:r,types:d}}function aG(a){return js(a).values}function b0({split:a,types:s}){const l=a.length;return r=>{let d="";for(let p=0;p<l;p++)if(d+=a[p],r[p]!==void 0){const g=s[p];g===m0?d+=Oo(r[p]):g===h0?d+=tt.transform(r[p]):d+=r[p]}return d}}function sG(a){return b0(js(a))}const oG=a=>typeof a=="number"?0:tt.test(a)?tt.getAnimatableNone(a):a,iG=(a,s)=>typeof a=="number"?s!=null&&s.trim().endsWith("/")?a:0:oG(a);function rG(a){const s=js(a);return b0(s)(s.values.map((r,d)=>iG(r,s.split[d])))}const en={test:$k,parse:aG,createTransformer:sG,getAnimatableNone:rG};function vu(a,s,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?a+(s-a)*6*l:l<1/2?s:l<2/3?a+(s-a)*(2/3-l)*6:a}function lG({hue:a,saturation:s,lightness:l,alpha:r}){a/=360,s/=100,l/=100;let d=0,p=0,g=0;if(!s)d=p=g=l;else{const h=l<.5?l*(1+s):l+s-l*s,f=2*l-h;d=vu(f,h,a+1/3),p=vu(f,h,a),g=vu(f,h,a-1/3)}return{red:Math.round(d*255),green:Math.round(p*255),blue:Math.round(g*255),alpha:r}}function qr(a,s){return l=>l>0?s:a}const qe=(a,s,l)=>a+(s-a)*l,Mu=(a,s,l)=>{const r=a*a,d=l*(s*s-r)+r;return d<0?0:Math.sqrt(d)},cG=[Fu,Ca,Ts],uG=a=>cG.find(s=>s.test(a));function gb(a){const s=uG(a);if(!s)return!1;let l=s.parse(a);return s===Ts&&(l=lG(l)),l}const mb=(a,s)=>{const l=gb(a),r=gb(s);if(!l||!r)return qr(a,s);const d={...l};return p=>(d.red=Mu(l.red,r.red,p),d.green=Mu(l.green,r.green,p),d.blue=Mu(l.blue,r.blue,p),d.alpha=qe(l.alpha,r.alpha,p),Ca.transform(d))},Ku=new Set(["none","hidden"]);function dG(a,s){return Ku.has(a)?l=>l<=0?a:s:l=>l>=1?s:a}function pG(a,s){return l=>qe(a,s,l)}function Sd(a){return typeof a=="number"?pG:typeof a=="string"?Ad(a)?qr:tt.test(a)?mb:hG:Array.isArray(a)?f0:typeof a=="object"?tt.test(a)?mb:gG:qr}function f0(a,s){const l=[...a],r=l.length,d=a.map((p,g)=>Sd(p)(p,s[g]));return p=>{for(let g=0;g<r;g++)l[g]=d[g](p);return l}}function gG(a,s){const l={...a,...s},r={};for(const d in l)a[d]!==void 0&&s[d]!==void 0&&(r[d]=Sd(a[d])(a[d],s[d]));return d=>{for(const p in r)l[p]=r[p](d);return l}}function mG(a,s){const l=[],r={color:0,var:0,number:0};for(let d=0;d<s.values.length;d++){const p=s.types[d],g=a.indexes[p][r[p]],h=a.values[g]??0;l[d]=h,r[p]++}return l}const hG=(a,s)=>{const l=en.createTransformer(s),r=js(a),d=js(s);return r.indexes.var.length===d.indexes.var.length&&r.indexes.color.length===d.indexes.color.length&&r.indexes.number.length>=d.indexes.number.length?Ku.has(a)&&!d.values.length||Ku.has(s)&&!r.values.length?dG(a,s):Zo(f0(mG(r,d),d.values),l):qr(a,s)};function x0(a,s,l){return typeof a=="number"&&typeof s=="number"&&typeof l=="number"?qe(a,s,l):Sd(a)(a,s)}const bG=a=>{const s=({timestamp:l})=>a(l);return{start:(l=!0)=>Re.update(s,l),stop:()=>la(s),now:()=>gt.isProcessing?gt.timestamp:xt.now()}},_0=(a,s,l=10)=>{let r="";const d=Math.max(Math.round(s/l),2);for(let p=0;p<d;p++)r+=Math.round(a(p/(d-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Rr=2e4;function jd(a){let s=0;const l=50;let r=a.next(s);for(;!r.done&&s<Rr;)s+=l,r=a.next(s);return s>=Rr?1/0:s}function fG(a,s=100,l){const r=l({...a,keyframes:[0,s]}),d=Math.min(jd(r),Rr);return{type:"keyframes",ease:p=>r.next(d*p).value/s,duration:Xt(d)}}const Ze={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Xu(a,s){return a*Math.sqrt(1-s*s)}const xG=12;function _G(a,s,l){let r=l;for(let d=1;d<xG;d++)r=r-a(r)/s(r);return r}const Au=.001;function kG({duration:a=Ze.duration,bounce:s=Ze.bounce,velocity:l=Ze.velocity,mass:r=Ze.mass}){let d,p,g=1-s;g=cn(Ze.minDamping,Ze.maxDamping,g),a=cn(Ze.minDuration,Ze.maxDuration,Xt(a)),g<1?(d=b=>{const x=b*g,k=x*a,G=x-l,y=Xu(b,g),M=Math.exp(-k);return Au-G/y*M},p=b=>{const k=b*g*a,G=k*l+l,y=Math.pow(g,2)*Math.pow(b,2)*a,M=Math.exp(-k),j=Xu(Math.pow(b,2),g);return(-d(b)+Au>0?-1:1)*((G-y)*M)/j}):(d=b=>{const x=Math.exp(-b*a),k=(b-l)*a+1;return-Au+x*k},p=b=>{const x=Math.exp(-b*a),k=(l-b)*(a*a);return x*k});const h=5/a,f=_G(d,p,h);if(a=qt(a),isNaN(f))return{stiffness:Ze.stiffness,damping:Ze.damping,duration:a};{const b=Math.pow(f,2)*r;return{stiffness:b,damping:g*2*Math.sqrt(r*b),duration:a}}}const GG=["duration","bounce"],yG=["stiffness","damping","mass"];function hb(a,s){return s.some(l=>a[l]!==void 0)}function vG(a){let s={velocity:Ze.velocity,stiffness:Ze.stiffness,damping:Ze.damping,mass:Ze.mass,isResolvedFromDuration:!1,...a};if(!hb(a,yG)&&hb(a,GG))if(s.velocity=0,a.visualDuration){const l=a.visualDuration,r=2*Math.PI/(l*1.2),d=r*r,p=2*cn(.05,1,1-(a.bounce||0))*Math.sqrt(d);s={...s,mass:Ze.mass,stiffness:d,damping:p}}else{const l=kG({...a,velocity:0});s={...s,...l,mass:Ze.mass},s.isResolvedFromDuration=!0}return s}function Or(a=Ze.visualDuration,s=Ze.bounce){const l=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:s}:a;let{restSpeed:r,restDelta:d}=l;const p=l.keyframes[0],g=l.keyframes[l.keyframes.length-1],h={done:!1,value:p},{stiffness:f,damping:b,mass:x,duration:k,velocity:G,isResolvedFromDuration:y}=vG({...l,velocity:-Xt(l.velocity||0)}),M=G||0,j=b/(2*Math.sqrt(f*x)),I=g-p,H=Xt(Math.sqrt(f/x)),X=Math.abs(I)<5;r||(r=X?Ze.restSpeed.granular:Ze.restSpeed.default),d||(d=X?Ze.restDelta.granular:Ze.restDelta.default);let L,D,Q,Y,q,K;if(j<1)Q=Xu(H,j),Y=(M+j*H*I)/Q,L=Z=>{const oe=Math.exp(-j*H*Z);return g-oe*(Y*Math.sin(Q*Z)+I*Math.cos(Q*Z))},q=j*H*Y+I*Q,K=j*H*I-Y*Q,D=Z=>Math.exp(-j*H*Z)*(q*Math.sin(Q*Z)+K*Math.cos(Q*Z));else if(j===1){L=oe=>g-Math.exp(-H*oe)*(I+(M+H*I)*oe);const Z=M+H*I;D=oe=>Math.exp(-H*oe)*(H*Z*oe-M)}else{const Z=H*Math.sqrt(j*j-1);L=Oe=>{const Me=Math.exp(-j*H*Oe),C=Math.min(Z*Oe,300);return g-Me*((M+j*H*I)*Math.sinh(C)+Z*I*Math.cosh(C))/Z};const oe=(M+j*H*I)/Z,de=j*H*oe-I*Z,Ue=j*H*I-oe*Z;D=Oe=>{const Me=Math.exp(-j*H*Oe),C=Math.min(Z*Oe,300);return Me*(de*Math.sinh(C)+Ue*Math.cosh(C))}}const F={calculatedDuration:y&&k||null,velocity:Z=>qt(D(Z)),next:Z=>{if(!y&&j<1){const de=Math.exp(-j*H*Z),Ue=Math.sin(Q*Z),Oe=Math.cos(Q*Z),Me=g-de*(Y*Ue+I*Oe),C=qt(de*(q*Ue+K*Oe));return h.done=Math.abs(C)<=r&&Math.abs(g-Me)<=d,h.value=h.done?g:Me,h}const oe=L(Z);if(y)h.done=Z>=k;else{const de=qt(D(Z));h.done=Math.abs(de)<=r&&Math.abs(g-oe)<=d}return h.value=h.done?g:oe,h},toString:()=>{const Z=Math.min(jd(F),Rr),oe=_0(de=>F.next(Z*de).value,Z,30);return Z+"ms "+oe},toTransition:()=>{}};return F}Or.applyToOptions=a=>{const s=fG(a,100,Or);return a.ease=s.ease,a.duration=qt(s.duration),a.type="keyframes",a};const MG=5;function k0(a,s,l){const r=Math.max(s-MG,0);return $f(l-a(r),s-r)}function Zu({keyframes:a,velocity:s=0,power:l=.8,timeConstant:r=325,bounceDamping:d=10,bounceStiffness:p=500,modifyTarget:g,min:h,max:f,restDelta:b=.5,restSpeed:x}){const k=a[0],G={done:!1,value:k},y=K=>h!==void 0&&K<h||f!==void 0&&K>f,M=K=>h===void 0?f:f===void 0||Math.abs(h-K)<Math.abs(f-K)?h:f;let j=l*s;const I=k+j,H=g===void 0?I:g(I);H!==I&&(j=H-k);const X=K=>-j*Math.exp(-K/r),L=K=>H+X(K),D=K=>{const F=X(K),Z=L(K);G.done=Math.abs(F)<=b,G.value=G.done?H:Z};let Q,Y;const q=K=>{y(G.value)&&(Q=K,Y=Or({keyframes:[G.value,M(G.value)],velocity:k0(L,K,G.value),damping:d,stiffness:p,restDelta:b,restSpeed:x}))};return q(0),{calculatedDuration:null,next:K=>{let F=!1;return!Y&&Q===void 0&&(F=!0,D(K),q(K)),Q!==void 0&&K>=Q?Y.next(K-Q):(!F&&D(K),G)}}}function AG(a,s,l){const r=[],d=l||ra.mix||x0,p=a.length-1;for(let g=0;g<p;g++){let h=d(a[g],a[g+1]);if(s){const f=Array.isArray(s)?s[g]||Zt:s;h=Zo(f,h)}r.push(h)}return r}function TG(a,s,{clamp:l=!0,ease:r,mixer:d}={}){const p=a.length;if(Gd(p===s.length),p===1)return()=>s[0];if(p===2&&s[0]===s[1])return()=>s[1];const g=a[0]===a[1];a[0]>a[p-1]&&(a=[...a].reverse(),s=[...s].reverse());const h=AG(s,r,d),f=h.length,b=x=>{if(g&&x<a[0])return s[0];let k=0;if(f>1)for(;k<a.length-2&&!(x<a[k+1]);k++);const G=Bo(a[k],a[k+1],x);return h[k](G)};return l?x=>b(cn(a[0],a[p-1],x)):b}function IG(a,s){const l=a[a.length-1];for(let r=1;r<=s;r++){const d=Bo(0,s,r);a.push(qe(l,1,d))}}function SG(a){const s=[0];return IG(s,a.length-1),s}function jG(a,s){return a.map(l=>l*s)}function NG(a,s){return a.map(()=>s||l0).splice(0,a.length-1)}function Ho({duration:a=300,keyframes:s,times:l,ease:r="easeInOut"}){const d=Ok(r)?r.map(cb):cb(r),p={done:!1,value:s[0]},g=jG(l&&l.length===s.length?l:SG(s),a),h=TG(g,s,{ease:Array.isArray(d)?d:NG(s,d)});return{calculatedDuration:a,next:f=>(p.value=h(f),p.done=f>=a,p)}}const EG=a=>a!==null;function Kr(a,{repeat:s,repeatType:l="loop"},r,d=1){const p=a.filter(EG),h=d<0||s&&l!=="loop"&&s%2===1?0:p.length-1;return!h||r===void 0?p[h]:r}const wG={decay:Zu,inertia:Zu,tween:Ho,keyframes:Ho,spring:Or};function G0(a){typeof a.type=="string"&&(a.type=wG[a.type])}class Nd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(s=>{this.resolve=s})}notifyFinished(){this.resolve()}then(s,l){return this.finished.then(s,l)}}const CG=a=>a/100;class Hr extends Nd{constructor(s){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,d;const{motionValue:l}=this.options;l&&l.updatedAt!==xt.now()&&this.tick(xt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(d=(r=this.options).onStop)==null||d.call(r))},this.options=s,this.initAnimation(),this.play(),s.autoplay===!1&&this.pause()}initAnimation(){const{options:s}=this;G0(s);const{type:l=Ho,repeat:r=0,repeatDelay:d=0,repeatType:p,velocity:g=0}=s;let{keyframes:h}=s;const f=l||Ho;f!==Ho&&typeof h[0]!="number"&&(this.mixKeyframes=Zo(CG,x0(h[0],h[1])),h=[0,100]);const b=f({...s,keyframes:h});p==="mirror"&&(this.mirroredGenerator=f({...s,keyframes:[...h].reverse(),velocity:-g})),b.calculatedDuration===null&&(b.calculatedDuration=jd(b));const{calculatedDuration:x}=b;this.calculatedDuration=x,this.resolvedDuration=x+d,this.totalDuration=this.resolvedDuration*(r+1)-d,this.generator=b}updateTime(s){const l=Math.round(s-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=l}tick(s,l=!1){const{generator:r,totalDuration:d,mixKeyframes:p,mirroredGenerator:g,resolvedDuration:h,calculatedDuration:f}=this;if(this.startTime===null)return r.next(0);const{delay:b=0,keyframes:x,repeat:k,repeatType:G,repeatDelay:y,type:M,onUpdate:j,finalKeyframe:I}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,s):this.speed<0&&(this.startTime=Math.min(s-d/this.speed,this.startTime)),l?this.currentTime=s:this.updateTime(s);const H=this.currentTime-b*(this.playbackSpeed>=0?1:-1),X=this.playbackSpeed>=0?H<0:H>d;this.currentTime=Math.max(H,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let L=this.currentTime,D=r;if(k){const K=Math.min(this.currentTime,d)/h;let F=Math.floor(K),Z=K%1;!Z&&K>=1&&(Z=1),Z===1&&F--,F=Math.min(F,k+1),!!(F%2)&&(G==="reverse"?(Z=1-Z,y&&(Z-=y/h)):G==="mirror"&&(D=g)),L=cn(0,1,Z)*h}let Q;X?(this.delayState.value=x[0],Q=this.delayState):Q=D.next(L),p&&!X&&(Q.value=p(Q.value));let{done:Y}=Q;!X&&f!==null&&(Y=this.playbackSpeed>=0?this.currentTime>=d:this.currentTime<=0);const q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Y);return q&&M!==Zu&&(Q.value=Kr(x,this.options,I,this.speed)),j&&j(Q.value),q&&this.finish(),Q}then(s,l){return this.finished.then(s,l)}get duration(){return Xt(this.calculatedDuration)}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+Xt(s)}get time(){return Xt(this.currentTime)}set time(s){s=qt(s),this.currentTime=s,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=s:this.driver&&(this.startTime=this.driver.now()-s/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=s,this.tick(s))}getGeneratorVelocity(){const s=this.currentTime;if(s<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(s);const l=this.generator.next(s).value;return k0(r=>this.generator.next(r).value,s,l)}get speed(){return this.playbackSpeed}set speed(s){const l=this.playbackSpeed!==s;l&&this.driver&&this.updateTime(xt.now()),this.playbackSpeed=s,l&&this.driver&&(this.time=Xt(this.currentTime))}play(){var d,p;if(this.isStopped)return;const{driver:s=bG,startTime:l}=this.options;this.driver||(this.driver=s(g=>this.tick(g))),(p=(d=this.options).onPlay)==null||p.call(d);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=l??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(xt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var s,l;this.notifyFinished(),this.teardown(),this.state="finished",(l=(s=this.options).onComplete)==null||l.call(s)}cancel(){var s,l;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(l=(s=this.options).onCancel)==null||l.call(s)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(s){return this.startTime=0,this.tick(s,!0)}attachTimeline(s){var l;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(l=this.driver)==null||l.stop(),s.observe(this)}}function VG(a){for(let s=1;s<a.length;s++)a[s]??(a[s]=a[s-1])}const Va=a=>a*180/Math.PI,Yu=a=>{const s=Va(Math.atan2(a[1],a[0]));return Qu(s)},DG={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:Yu,rotateZ:Yu,skewX:a=>Va(Math.atan(a[1])),skewY:a=>Va(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},Qu=a=>(a=a%360,a<0&&(a+=360),a),bb=Yu,fb=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),xb=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),qG={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:fb,scaleY:xb,scale:a=>(fb(a)+xb(a))/2,rotateX:a=>Qu(Va(Math.atan2(a[6],a[5]))),rotateY:a=>Qu(Va(Math.atan2(-a[2],a[0]))),rotateZ:bb,rotate:bb,skewX:a=>Va(Math.atan(a[4])),skewY:a=>Va(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function Ju(a){return a.includes("scale")?1:0}function Wu(a,s){if(!a||a==="none")return Ju(s);const l=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,d;if(l)r=qG,d=l;else{const h=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=DG,d=h}if(!d)return Ju(s);const p=r[s],g=d[1].split(",").map(OG);return typeof p=="function"?p(g):g[p]}const RG=(a,s)=>{const{transform:l="none"}=getComputedStyle(a);return Wu(l,s)};function OG(a){return parseFloat(a.trim())}const ws=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Cs=new Set([...ws,"pathRotation"]),_b=a=>a===Es||a===ne,HG=new Set(["x","y","z"]),LG=ws.filter(a=>!HG.has(a));function zG(a){const s=[];return LG.forEach(l=>{const r=a.getValue(l);r!==void 0&&(s.push([l,r.get()]),r.set(l.startsWith("scale")?1:0))}),s}const ia={width:({x:a},{paddingLeft:s="0",paddingRight:l="0",boxSizing:r})=>{const d=a.max-a.min;return r==="border-box"?d:d-parseFloat(s)-parseFloat(l)},height:({y:a},{paddingTop:s="0",paddingBottom:l="0",boxSizing:r})=>{const d=a.max-a.min;return r==="border-box"?d:d-parseFloat(s)-parseFloat(l)},top:(a,{top:s})=>parseFloat(s),left:(a,{left:s})=>parseFloat(s),bottom:({y:a},{top:s})=>parseFloat(s)+(a.max-a.min),right:({x:a},{left:s})=>parseFloat(s)+(a.max-a.min),x:(a,{transform:s})=>Wu(s,"x"),y:(a,{transform:s})=>Wu(s,"y")};ia.translateX=ia.x;ia.translateY=ia.y;const Da=new Set;let $u=!1,ed=!1,td=!1;function y0(){if(ed){const a=Array.from(Da).filter(r=>r.needsMeasurement),s=new Set(a.map(r=>r.element)),l=new Map;s.forEach(r=>{const d=zG(r);d.length&&(l.set(r,d),r.render())}),a.forEach(r=>r.measureInitialState()),s.forEach(r=>{r.render();const d=l.get(r);d&&d.forEach(([p,g])=>{var h;(h=r.getValue(p))==null||h.set(g)})}),a.forEach(r=>r.measureEndState()),a.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}ed=!1,$u=!1,Da.forEach(a=>a.complete(td)),Da.clear()}function v0(){Da.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(ed=!0)})}function UG(){td=!0,v0(),y0(),td=!1}class Ed{constructor(s,l,r,d,p,g=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...s],this.onComplete=l,this.name=r,this.motionValue=d,this.element=p,this.isAsync=g}scheduleResolve(){this.state="scheduled",this.isAsync?(Da.add(this),$u||($u=!0,Re.read(v0),Re.resolveKeyframes(y0))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:s,name:l,element:r,motionValue:d}=this;if(s[0]===null){const p=d==null?void 0:d.get(),g=s[s.length-1];if(p!==void 0)s[0]=p;else if(r&&l){const h=r.readValue(l,g);h!=null&&(s[0]=h)}s[0]===void 0&&(s[0]=g),d&&p===void 0&&d.set(s[0])}VG(s)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(s=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,s),Da.delete(this)}cancel(){this.state==="scheduled"&&(Da.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const BG=a=>a.startsWith("--");function M0(a,s,l){BG(s)?a.style.setProperty(s,l):a.style[s]=l}const PG={};function A0(a,s){const l=Wf(a);return()=>PG[s]??l()}const FG=A0(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),T0=A0(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),qo=([a,s,l,r])=>`cubic-bezier(${a}, ${s}, ${l}, ${r})`,kb={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:qo([0,.65,.55,1]),circOut:qo([.55,0,1,.45]),backIn:qo([.31,.01,.66,-.59]),backOut:qo([.33,1.53,.69,.99])};function I0(a,s){if(a)return typeof a=="function"?T0()?_0(a,s):"ease-out":c0(a)?qo(a):Array.isArray(a)?a.map(l=>I0(l,s)||kb.easeOut):kb[a]}function KG(a,s,l,{delay:r=0,duration:d=300,repeat:p=0,repeatType:g="loop",ease:h="easeOut",times:f}={},b=void 0){const x={[s]:l};f&&(x.offset=f);const k=I0(h,d);Array.isArray(k)&&(x.easing=k);const G={delay:r,duration:d,easing:Array.isArray(k)?"linear":k,fill:"both",iterations:p+1,direction:g==="reverse"?"alternate":"normal"};return b&&(G.pseudoElement=b),a.animate(x,G)}function S0(a){return typeof a=="function"&&"applyToOptions"in a}function XG({type:a,...s}){return S0(a)&&T0()?a.applyToOptions(s):(s.duration??(s.duration=300),s.ease??(s.ease="easeOut"),s)}class j0 extends Nd{constructor(s){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!s)return;const{element:l,name:r,keyframes:d,pseudoElement:p,allowFlatten:g=!1,finalKeyframe:h,onComplete:f}=s;this.isPseudoElement=!!p,this.allowFlatten=g,this.options=s,Gd(typeof s.type!="string");const b=XG(s);this.animation=KG(l,r,d,b,p),b.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!p){const x=Kr(d,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(x),M0(l,r,x),this.animation.cancel()}f==null||f(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var s,l;(l=(s=this.animation).finish)==null||l.call(s)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:s}=this;s==="idle"||s==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var l,r,d;const s=(l=this.options)==null?void 0:l.element;!this.isPseudoElement&&(s!=null&&s.isConnected)&&((d=(r=this.animation).commitStyles)==null||d.call(r))}get duration(){var l,r;const s=((r=(l=this.animation.effect)==null?void 0:l.getComputedTiming)==null?void 0:r.call(l).duration)||0;return Xt(Number(s))}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+Xt(s)}get time(){return Xt(Number(this.animation.currentTime)||0)}set time(s){const l=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=qt(s),l&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(s){s<0&&(this.finishedTime=null),this.animation.playbackRate=s}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(s){this.manualStartTime=this.animation.startTime=s}attachTimeline({timeline:s,rangeStart:l,rangeEnd:r,observe:d}){var p;return this.allowFlatten&&((p=this.animation.effect)==null||p.updateTiming({easing:"linear"})),this.animation.onfinish=null,s&&FG()?(this.animation.timeline=s,l&&(this.animation.rangeStart=l),r&&(this.animation.rangeEnd=r),Zt):d(this)}}const N0={anticipate:o0,backInOut:s0,circInOut:r0};function ZG(a){return a in N0}function YG(a){typeof a.ease=="string"&&ZG(a.ease)&&(a.ease=N0[a.ease])}const Tu=10;class QG extends j0{constructor(s){YG(s),G0(s),super(s),s.startTime!==void 0&&s.autoplay!==!1&&(this.startTime=s.startTime),this.options=s}updateMotionValue(s){const{motionValue:l,onUpdate:r,onComplete:d,element:p,...g}=this.options;if(!l)return;if(s!==void 0){l.set(s);return}const h=new Hr({...g,autoplay:!1}),f=Math.max(Tu,xt.now()-this.startTime),b=cn(0,Tu,f-Tu),x=h.sample(f).value,{name:k}=this.options;p&&k&&M0(p,k,x),l.setWithVelocity(h.sample(Math.max(0,f-b)).value,x,b),h.stop()}}const Gb=(a,s)=>s==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(en.test(a)||a==="0")&&!a.startsWith("url("));function JG(a){const s=a[0];if(a.length===1)return!0;for(let l=0;l<a.length;l++)if(a[l]!==s)return!0}function WG(a,s,l,r){const d=a[0];if(d===null)return!1;if(s==="display"||s==="visibility")return!0;const p=a[a.length-1],g=Gb(d,s),h=Gb(p,s);return!g||!h?!1:JG(a)||(l==="spring"||S0(l))&&r}function nd(a){a.duration=0,a.type="keyframes"}const E0=new Set(["opacity","clipPath","filter","transform"]),$G=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function ey(a){for(let s=0;s<a.length;s++)if(typeof a[s]=="string"&&$G.test(a[s]))return!0;return!1}const ty=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),ny=Wf(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function ay(a){var k;const{motionValue:s,name:l,repeatDelay:r,repeatType:d,damping:p,type:g,keyframes:h}=a;if(!(((k=s==null?void 0:s.owner)==null?void 0:k.current)instanceof HTMLElement))return!1;const{onUpdate:b,transformTemplate:x}=s.owner.getProps();return ny()&&l&&(E0.has(l)||ty.has(l)&&ey(h))&&(l!=="transform"||!x)&&!b&&!r&&d!=="mirror"&&p!==0&&g!=="inertia"}const sy=40;class oy extends Nd{constructor({autoplay:s=!0,delay:l=0,type:r="keyframes",repeat:d=0,repeatDelay:p=0,repeatType:g="loop",keyframes:h,name:f,motionValue:b,element:x,...k}){var M;super(),this.stop=()=>{var j,I;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(I=this.keyframeResolver)==null||I.cancel()},this.createdAt=xt.now();const G={autoplay:s,delay:l,type:r,repeat:d,repeatDelay:p,repeatType:g,name:f,motionValue:b,element:x,...k},y=(x==null?void 0:x.KeyframeResolver)||Ed;this.keyframeResolver=new y(h,(j,I,H)=>this.onKeyframesResolved(j,I,G,!H),f,b,x),(M=this.keyframeResolver)==null||M.scheduleResolve()}onKeyframesResolved(s,l,r,d){var H,X;this.keyframeResolver=void 0;const{name:p,type:g,velocity:h,delay:f,isHandoff:b,onUpdate:x}=r;this.resolvedAt=xt.now();let k=!0;WG(s,p,g,h)||(k=!1,(ra.instantAnimations||!f)&&(x==null||x(Kr(s,r,l))),s[0]=s[s.length-1],nd(r),r.repeat=0);const y={startTime:d?this.resolvedAt?this.resolvedAt-this.createdAt>sy?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:l,...r,keyframes:s},M=k&&!b&&ay(y),j=(X=(H=y.motionValue)==null?void 0:H.owner)==null?void 0:X.current;let I;if(M)try{I=new QG({...y,element:j})}catch{I=new Hr(y)}else I=new Hr(y);I.finished.then(()=>{this.notifyFinished()}).catch(Zt),this.pendingTimeline&&(this.stopTimeline=I.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=I}get finished(){return this._animation?this.animation.finished:this._finished}then(s,l){return this.finished.finally(s).then(()=>{})}get animation(){var s;return this._animation||((s=this.keyframeResolver)==null||s.resume(),UG()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(s){this.animation.time=s}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(s){this.animation.speed=s}get startTime(){return this.animation.startTime}attachTimeline(s){return this._animation?this.stopTimeline=this.animation.attachTimeline(s):this.pendingTimeline=s,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var s;this._animation&&this.animation.cancel(),(s=this.keyframeResolver)==null||s.cancel()}}function w0(a,s,l,r=0,d=1){const p=Array.from(a).sort((b,x)=>b.sortNodePosition(x)).indexOf(s),g=a.size,h=(g-1)*r;return typeof l=="function"?l(p,g):d===1?p*r:h-p*r}const yb=30,iy=a=>!isNaN(parseFloat(a));class ry{constructor(s,l={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var p;const d=xt.now();if(this.updatedAt!==d&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((p=this.events.change)==null||p.notify(this.current),this.dependents))for(const g of this.dependents)g.dirty()},this.hasAnimated=!1,this.setCurrent(s),this.owner=l.owner}setCurrent(s){this.current=s,this.updatedAt=xt.now(),this.canTrackVelocity===null&&s!==void 0&&(this.canTrackVelocity=iy(this.current))}setPrevFrameValue(s=this.current){this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt}onChange(s){return this.on("change",s)}on(s,l){this.events[s]||(this.events[s]=new yd);const r=this.events[s].add(l);return s==="change"?()=>{r(),Re.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const s in this.events)this.events[s].clear()}attach(s,l){this.passiveEffect=s,this.stopPassiveEffect=l}set(s){this.passiveEffect?this.passiveEffect(s,this.updateAndNotify):this.updateAndNotify(s)}setWithVelocity(s,l,r){this.set(l),this.prev=void 0,this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt-r}jump(s,l=!0){this.updateAndNotify(s),this.prev=s,this.prevUpdatedAt=this.prevFrameValue=void 0,l&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var s;(s=this.events.change)==null||s.notify(this.current)}addDependent(s){this.dependents||(this.dependents=new Set),this.dependents.add(s)}removeDependent(s){this.dependents&&this.dependents.delete(s)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const s=xt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||s-this.updatedAt>yb)return 0;const l=Math.min(this.updatedAt-this.prevUpdatedAt,yb);return $f(parseFloat(this.current)-parseFloat(this.prevFrameValue),l)}start(s){return this.stop(),new Promise(l=>{this.hasAnimated=!0,this.animation=s(l),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var s,l;(s=this.dependents)==null||s.clear(),(l=this.events.destroy)==null||l.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ns(a,s){return new ry(a,s)}function C0(a,s){if(a!=null&&a.inherit&&s){const{inherit:l,...r}=a;return{...s,...r}}return a}function wd(a,s){const l=(a==null?void 0:a[s])??(a==null?void 0:a.default)??a;return l!==a?C0(l,a):l}const ly={type:"spring",stiffness:500,damping:25,restSpeed:10},cy=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),uy={type:"keyframes",duration:.8},dy={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},py=(a,{keyframes:s})=>s.length>2?uy:Cs.has(a)?a.startsWith("scale")?cy(s[1]):ly:dy,gy=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function my(a){for(const s in a)if(!gy.has(s))return!0;return!1}const Cd=(a,s,l,r={},d,p)=>g=>{const h=wd(r,a)||{},f=h.delay||r.delay||0;let{elapsed:b=0}=r;b=b-qt(f);const x={keyframes:Array.isArray(l)?l:[null,l],ease:"easeOut",velocity:s.getVelocity(),...h,delay:-b,onUpdate:G=>{s.set(G),h.onUpdate&&h.onUpdate(G)},onComplete:()=>{g(),h.onComplete&&h.onComplete()},name:a,motionValue:s,element:p?void 0:d};my(h)||Object.assign(x,py(a,x)),x.duration&&(x.duration=qt(x.duration)),x.repeatDelay&&(x.repeatDelay=qt(x.repeatDelay)),x.from!==void 0&&(x.keyframes[0]=x.from);let k=!1;if((x.type===!1||x.duration===0&&!x.repeatDelay)&&(nd(x),x.delay===0&&(k=!0)),(ra.instantAnimations||ra.skipAnimations||d!=null&&d.shouldSkipAnimations||h.skipAnimations)&&(k=!0,nd(x),x.delay=0),x.allowFlatten=!h.type&&!h.ease,k&&!p&&s.get()!==void 0){const G=Kr(x.keyframes,h);if(G!==void 0){Re.update(()=>{x.onUpdate(G),x.onComplete()});return}}return h.isSync?new Hr(x):new oy(x)},hy=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function by(a){const s=hy.exec(a);if(!s)return[,];const[,l,r,d]=s;return[`--${l??r}`,d]}function V0(a,s,l=1){const[r,d]=by(a);if(!r)return;const p=window.getComputedStyle(s).getPropertyValue(r);if(p){const g=p.trim();return Yf(g)?parseFloat(g):g}return Ad(d)?V0(d,s,l+1):d}function vb(a){const s=[{},{}];return a==null||a.values.forEach((l,r)=>{s[0][r]=l.get(),s[1][r]=l.getVelocity()}),s}function Vd(a,s,l,r){if(typeof s=="function"){const[d,p]=vb(r);s=s(l!==void 0?l:a.custom,d,p)}if(typeof s=="string"&&(s=a.variants&&a.variants[s]),typeof s=="function"){const[d,p]=vb(r);s=s(l!==void 0?l:a.custom,d,p)}return s}function qa(a,s,l){const r=a.getProps();return Vd(r,s,l!==void 0?l:r.custom,a)}const D0=new Set(["width","height","top","left","right","bottom",...ws]),ad=a=>Array.isArray(a);function fy(a,s,l){a.hasValue(s)?a.getValue(s).set(l):a.addValue(s,Ns(l))}function xy(a){return ad(a)?a[a.length-1]||0:a}function _y(a,s){const l=qa(a,s);let{transitionEnd:r={},transition:d={},...p}=l||{};p={...p,...r};for(const g in p){const h=xy(p[g]);fy(a,g,h)}}const mt=a=>!!(a&&a.getVelocity);function ky(a){return!!(mt(a)&&a.add)}function sd(a,s){const l=a.getValue("willChange");if(ky(l))return l.add(s);if(!l&&ra.WillChange){const r=new ra.WillChange("auto");a.addValue("willChange",r),r.add(s)}}function Dd(a){return a.replace(/([A-Z])/g,s=>`-${s.toLowerCase()}`)}const Gy="framerAppearId",q0="data-"+Dd(Gy);function R0(a){return a.props[q0]}function yy({protectedKeys:a,needsAnimating:s},l){const r=a.hasOwnProperty(l)&&s[l]!==!0;return s[l]=!1,r}function O0(a,s,{delay:l=0,transitionOverride:r,type:d}={}){let{transition:p,transitionEnd:g,...h}=s;const f=a.getDefaultTransition();p=p?C0(p,f):f;const b=p==null?void 0:p.reduceMotion,x=p==null?void 0:p.skipAnimations;r&&(p=r);const k=[],G=d&&a.animationState&&a.animationState.getState()[d],y=p==null?void 0:p.path;y&&y.animateVisualElement(a,h,p,l,k);for(const M in h){const j=a.getValue(M,a.latestValues[M]??null),I=h[M];if(I===void 0||G&&yy(G,M))continue;const H={delay:l,...wd(p||{},M)};x&&(H.skipAnimations=!0);const X=j.get();if(X!==void 0&&!j.isAnimating()&&!Array.isArray(I)&&I===X&&!H.velocity){Re.update(()=>j.set(I));continue}let L=!1;if(window.MotionHandoffAnimation){const Y=R0(a);if(Y){const q=window.MotionHandoffAnimation(Y,M,Re);q!==null&&(H.startTime=q,L=!0)}}sd(a,M);const D=b??a.shouldReduceMotion;j.start(Cd(M,j,I,D&&D0.has(M)?{type:!1}:H,a,L));const Q=j.animation;Q&&k.push(Q)}if(g){const M=()=>Re.update(()=>{g&&_y(a,g)});k.length?Promise.all(k).then(M):M()}return k}function od(a,s,l={}){var f;const r=qa(a,s,l.type==="exit"?(f=a.presenceContext)==null?void 0:f.custom:void 0);let{transition:d=a.getDefaultTransition()||{}}=r||{};l.transitionOverride&&(d=l.transitionOverride);const p=r?()=>Promise.all(O0(a,r,l)):()=>Promise.resolve(),g=a.variantChildren&&a.variantChildren.size?(b=0)=>{const{delayChildren:x=0,staggerChildren:k,staggerDirection:G}=d;return vy(a,s,b,x,k,G,l)}:()=>Promise.resolve(),{when:h}=d;if(h){const[b,x]=h==="beforeChildren"?[p,g]:[g,p];return b().then(()=>x())}else return Promise.all([p(),g(l.delay)])}function vy(a,s,l=0,r=0,d=0,p=1,g){const h=[];for(const f of a.variantChildren)f.notify("AnimationStart",s),h.push(od(f,s,{...g,delay:l+(typeof r=="function"?0:r)+w0(a.variantChildren,f,r,d,p)}).then(()=>f.notify("AnimationComplete",s)));return Promise.all(h)}function My(a,s,l={}){a.notify("AnimationStart",s);let r;if(Array.isArray(s)){const d=s.map(p=>od(a,p,l));r=Promise.all(d)}else if(typeof s=="string")r=od(a,s,l);else{const d=typeof s=="function"?qa(a,s,l.custom):s;r=Promise.all(O0(a,d,l))}return r.then(()=>{a.notify("AnimationComplete",s)})}const Ay={test:a=>a==="auto",parse:a=>a},H0=a=>s=>s.test(a),L0=[Es,ne,ln,En,Jk,Qk,Ay],Mb=a=>L0.find(H0(a));function Ty(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||Jf(a):!0}const Iy=new Set(["brightness","contrast","saturate","opacity"]);function Sy(a){const[s,l]=a.slice(0,-1).split("(");if(s==="drop-shadow")return a;const[r]=l.match(Td)||[];if(!r)return a;const d=l.replace(r,"");let p=Iy.has(s)?1:0;return r!==l&&(p*=100),s+"("+p+d+")"}const jy=/\b([a-z-]*)\(.*?\)/gu,id={...en,getAnimatableNone:a=>{const s=a.match(jy);return s?s.map(Sy).join(" "):a}},rd={...en,getAnimatableNone:a=>{const s=en.parse(a);return en.createTransformer(a)(s.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},Ab={...Es,transform:Math.round},Ny={rotate:En,pathRotation:En,rotateX:En,rotateY:En,rotateZ:En,scale:br,scaleX:br,scaleY:br,scaleZ:br,skew:En,skewX:En,skewY:En,distance:ne,translateX:ne,translateY:ne,translateZ:ne,x:ne,y:ne,z:ne,perspective:ne,transformPerspective:ne,opacity:Po,originX:db,originY:db,originZ:ne},Lr={borderWidth:ne,borderTopWidth:ne,borderRightWidth:ne,borderBottomWidth:ne,borderLeftWidth:ne,borderRadius:ne,borderTopLeftRadius:ne,borderTopRightRadius:ne,borderBottomRightRadius:ne,borderBottomLeftRadius:ne,width:ne,maxWidth:ne,height:ne,maxHeight:ne,top:ne,right:ne,bottom:ne,left:ne,inset:ne,insetBlock:ne,insetBlockStart:ne,insetBlockEnd:ne,insetInline:ne,insetInlineStart:ne,insetInlineEnd:ne,padding:ne,paddingTop:ne,paddingRight:ne,paddingBottom:ne,paddingLeft:ne,paddingBlock:ne,paddingBlockStart:ne,paddingBlockEnd:ne,paddingInline:ne,paddingInlineStart:ne,paddingInlineEnd:ne,margin:ne,marginTop:ne,marginRight:ne,marginBottom:ne,marginLeft:ne,marginBlock:ne,marginBlockStart:ne,marginBlockEnd:ne,marginInline:ne,marginInlineStart:ne,marginInlineEnd:ne,fontSize:ne,backgroundPositionX:ne,backgroundPositionY:ne,...Ny,zIndex:Ab,fillOpacity:Po,strokeOpacity:Po,numOctaves:Ab},Ey={...Lr,color:tt,backgroundColor:tt,outlineColor:tt,fill:tt,stroke:tt,borderColor:tt,borderTopColor:tt,borderRightColor:tt,borderBottomColor:tt,borderLeftColor:tt,filter:id,WebkitFilter:id,mask:rd,WebkitMask:rd},z0=a=>Ey[a],wy=new Set([id,rd]);function U0(a,s){let l=z0(a);return wy.has(l)||(l=en),l.getAnimatableNone?l.getAnimatableNone(s):void 0}const Cy=new Set(["auto","none","0"]);function Vy(a,s,l){let r=0,d;for(;r<a.length&&!d;){const p=a[r];typeof p=="string"&&!Cy.has(p)&&js(p).values.length&&(d=a[r]),r++}if(d&&l)for(const p of s)a[p]=U0(l,d)}class Dy extends Ed{constructor(s,l,r,d,p){super(s,l,r,d,p,!0)}readKeyframes(){const{unresolvedKeyframes:s,element:l,name:r}=this;if(!l||!l.current)return;super.readKeyframes();for(let x=0;x<s.length;x++){let k=s[x];if(typeof k=="string"&&(k=k.trim(),Ad(k))){const G=V0(k,l.current);G!==void 0&&(s[x]=G),x===s.length-1&&(this.finalKeyframe=k)}}if(this.resolveNoneKeyframes(),!D0.has(r)||s.length!==2)return;const[d,p]=s,g=Mb(d),h=Mb(p),f=ub(d),b=ub(p);if(f!==b&&ia[r]){this.needsMeasurement=!0;return}if(g!==h)if(_b(g)&&_b(h))for(let x=0;x<s.length;x++){const k=s[x];typeof k=="string"&&(s[x]=parseFloat(k))}else ia[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:s,name:l}=this,r=[];for(let d=0;d<s.length;d++)(s[d]===null||Ty(s[d]))&&r.push(d);r.length&&Vy(s,r,l)}measureInitialState(){const{element:s,unresolvedKeyframes:l,name:r}=this;if(!s||!s.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ia[r](s.measureViewportBox(),window.getComputedStyle(s.current)),l[0]=this.measuredOrigin;const d=l[l.length-1];d!==void 0&&s.getValue(r,d).jump(d,!1)}measureEndState(){var h;const{element:s,name:l,unresolvedKeyframes:r}=this;if(!s||!s.current)return;const d=s.getValue(l);d&&d.jump(this.measuredOrigin,!1);const p=r.length-1,g=r[p];r[p]=ia[l](s.measureViewportBox(),window.getComputedStyle(s.current)),g!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=g),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([f,b])=>{s.getValue(f).set(b)}),this.resolveNoneKeyframes()}}function B0(a,s,l){if(a==null)return[];if(a instanceof EventTarget)return[a];if(typeof a=="string"){let r=document;const d=(l==null?void 0:l[a])??r.querySelectorAll(a);return d?Array.from(d):[]}return Array.from(a).filter(r=>r!=null)}const ld=(a,s)=>s&&typeof a=="number"?s.transform(a):a;function Mr(a){return Qf(a)&&"offsetHeight"in a&&!("ownerSVGElement"in a)}const{schedule:qd}=u0(queueMicrotask,!1),$t={x:!1,y:!1};function P0(){return $t.x||$t.y}function qy(a){return a==="x"||a==="y"?$t[a]?null:($t[a]=!0,()=>{$t[a]=!1}):$t.x||$t.y?null:($t.x=$t.y=!0,()=>{$t.x=$t.y=!1})}function F0(a,s){const l=B0(a),r=new AbortController,d={passive:!0,...s,signal:r.signal};return[l,d,()=>r.abort()]}function Ry(a){return!(a.pointerType==="touch"||P0())}function Oy(a,s,l={}){const[r,d,p]=F0(a,l);return r.forEach(g=>{let h=!1,f=!1,b;const x=()=>{g.removeEventListener("pointerleave",M)},k=I=>{b&&(b(I),b=void 0),x()},G=I=>{h=!1,window.removeEventListener("pointerup",G),window.removeEventListener("pointercancel",G),f&&(f=!1,k(I))},y=()=>{h=!0,window.addEventListener("pointerup",G,d),window.addEventListener("pointercancel",G,d)},M=I=>{if(I.pointerType!=="touch"){if(h){f=!0;return}k(I)}},j=I=>{if(!Ry(I))return;f=!1;const H=s(g,I);typeof H=="function"&&(b=H,g.addEventListener("pointerleave",M,d))};g.addEventListener("pointerenter",j,d),g.addEventListener("pointerdown",y,d)}),p}const K0=(a,s)=>s?a===s?!0:K0(a,s.parentElement):!1,Rd=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,Hy=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Ly(a){return Hy.has(a.tagName)||a.isContentEditable===!0}const zy=new Set(["INPUT","SELECT","TEXTAREA"]);function Uy(a){return zy.has(a.tagName)||a.isContentEditable===!0}const Ar=new WeakSet;function Tb(a){return s=>{s.key==="Enter"&&a(s)}}function Iu(a,s){a.dispatchEvent(new PointerEvent("pointer"+s,{isPrimary:!0,bubbles:!0}))}const By=(a,s)=>{const l=a.currentTarget;if(!l)return;const r=Tb(()=>{if(Ar.has(l))return;Iu(l,"down");const d=Tb(()=>{Iu(l,"up")}),p=()=>Iu(l,"cancel");l.addEventListener("keyup",d,s),l.addEventListener("blur",p,s)});l.addEventListener("keydown",r,s),l.addEventListener("blur",()=>l.removeEventListener("keydown",r),s)};function Ib(a){return Rd(a)&&!P0()}const Sb=new WeakSet;function Py(a,s,l={}){const[r,d,p]=F0(a,l),g=h=>{const f=h.currentTarget;if(!Ib(h)||Sb.has(h))return;Ar.add(f),l.stopPropagation&&Sb.add(h);const b=s(f,h),x=(y,M)=>{window.removeEventListener("pointerup",k),window.removeEventListener("pointercancel",G),Ar.has(f)&&Ar.delete(f),Ib(y)&&typeof b=="function"&&b(y,{success:M})},k=y=>{x(y,f===window||f===document||l.useGlobalTarget||K0(f,y.target))},G=y=>{x(y,!1)};window.addEventListener("pointerup",k,d),window.addEventListener("pointercancel",G,d)};return r.forEach(h=>{(l.useGlobalTarget?window:h).addEventListener("pointerdown",g,d),Mr(h)&&(h.addEventListener("focus",b=>By(b,d)),!Ly(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),p}function Od(a){return Qf(a)&&"ownerSVGElement"in a}const Tr=new WeakMap;let sa;const X0=(a,s,l)=>(r,d)=>d&&d[0]?d[0][a+"Size"]:Od(r)&&"getBBox"in r?r.getBBox()[s]:r[l],Fy=X0("inline","width","offsetWidth"),Ky=X0("block","height","offsetHeight");function Xy({target:a,borderBoxSize:s}){var l;(l=Tr.get(a))==null||l.forEach(r=>{r(a,{get width(){return Fy(a,s)},get height(){return Ky(a,s)}})})}function Zy(a){a.forEach(Xy)}function Yy(){typeof ResizeObserver>"u"||(sa=new ResizeObserver(Zy))}function Qy(a,s){sa||Yy();const l=B0(a);return l.forEach(r=>{let d=Tr.get(r);d||(d=new Set,Tr.set(r,d)),d.add(s),sa==null||sa.observe(r)}),()=>{l.forEach(r=>{const d=Tr.get(r);d==null||d.delete(s),d!=null&&d.size||sa==null||sa.unobserve(r)})}}const Ir=new Set;let Is;function Jy(){Is=()=>{const a={get width(){return window.innerWidth},get height(){return window.innerHeight}};Ir.forEach(s=>s(a))},window.addEventListener("resize",Is)}function Wy(a){return Ir.add(a),Is||Jy(),()=>{Ir.delete(a),!Ir.size&&typeof Is=="function"&&(window.removeEventListener("resize",Is),Is=void 0)}}function jb(a,s){return typeof a=="function"?Wy(a):Qy(a,s)}function $y(a){return Od(a)&&a.tagName==="svg"}const ev=[...L0,tt,en],tv=a=>ev.find(H0(a)),Nb=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ss=()=>({x:Nb(),y:Nb()}),Eb=()=>({min:0,max:0}),at=()=>({x:Eb(),y:Eb()}),nv=new WeakMap;function Xr(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function Fo(a){return typeof a=="string"||Array.isArray(a)}const Hd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ld=["initial",...Hd];function Zr(a){return Xr(a.animate)||Ld.some(s=>Fo(a[s]))}function Z0(a){return!!(Zr(a)||a.variants)}function av(a,s,l){for(const r in s){const d=s[r],p=l[r];if(mt(d))a.addValue(r,d);else if(mt(p))a.addValue(r,Ns(d,{owner:a}));else if(p!==d)if(a.hasValue(r)){const g=a.getValue(r);g.liveStyle===!0?g.jump(d):g.hasAnimated||g.set(d)}else{const g=a.getStaticValue(r);a.addValue(r,Ns(g!==void 0?g:d,{owner:a}))}}for(const r in l)s[r]===void 0&&a.removeValue(r);return s}const cd={current:null},Y0={current:!1},sv=typeof window<"u";function ov(){if(Y0.current=!0,!!sv)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),s=()=>cd.current=a.matches;a.addEventListener("change",s),s()}else cd.current=!1}const wb=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let zr={};function Q0(a){zr=a}function iv(){return zr}class rv{scrapeMotionValuesFromProps(s,l,r){return{}}constructor({parent:s,props:l,presenceContext:r,reducedMotionConfig:d,skipAnimations:p,blockInitialAnimation:g,visualState:h},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ed,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=xt.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,Re.render(this.render,!1,!0))};const{latestValues:b,renderState:x}=h;this.latestValues=b,this.baseTarget={...b},this.initialValues=l.initial?{...b}:{},this.renderState=x,this.parent=s,this.props=l,this.presenceContext=r,this.depth=s?s.depth+1:0,this.reducedMotionConfig=d,this.skipAnimationsConfig=p,this.options=f,this.blockInitialAnimation=!!g,this.isControllingVariants=Zr(l),this.isVariantNode=Z0(l),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(s&&s.current);const{willChange:k,...G}=this.scrapeMotionValuesFromProps(l,{},this);for(const y in G){const M=G[y];b[y]!==void 0&&mt(M)&&M.set(b[y])}}mount(s){var l,r;if(this.hasBeenMounted)for(const d in this.initialValues)(l=this.values.get(d))==null||l.jump(this.initialValues[d]),this.latestValues[d]=this.initialValues[d];this.current=s,nv.set(s,this),this.projection&&!this.projection.instance&&this.projection.mount(s),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((d,p)=>this.bindToMotionValue(p,d)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Y0.current||ov(),this.shouldReduceMotion=cd.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var s;this.projection&&this.projection.unmount(),la(this.notifyUpdate),la(this.render),this.valueSubscriptions.forEach(l=>l()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(s=this.parent)==null||s.removeChild(this);for(const l in this.events)this.events[l].clear();for(const l in this.features){const r=this.features[l];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(s){this.children.add(s),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(s)}removeChild(s){this.children.delete(s),this.enteringChildren&&this.enteringChildren.delete(s)}bindToMotionValue(s,l){if(this.valueSubscriptions.has(s)&&this.valueSubscriptions.get(s)(),l.accelerate&&E0.has(s)&&this.current instanceof HTMLElement){const{factory:g,keyframes:h,times:f,ease:b,duration:x}=l.accelerate,k=new j0({element:this.current,name:s,keyframes:h,times:f,ease:b,duration:qt(x)}),G=g(k);this.valueSubscriptions.set(s,()=>{G(),k.cancel()});return}const r=Cs.has(s);r&&this.onBindTransform&&this.onBindTransform();const d=l.on("change",g=>{this.latestValues[s]=g,this.props.onUpdate&&Re.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let p;typeof window<"u"&&window.MotionCheckAppearSync&&(p=window.MotionCheckAppearSync(this,s,l)),this.valueSubscriptions.set(s,()=>{d(),p&&p()})}sortNodePosition(s){return!this.current||!this.sortInstanceNodePosition||this.type!==s.type?0:this.sortInstanceNodePosition(this.current,s.current)}updateFeatures(){let s="animation";for(s in zr){const l=zr[s];if(!l)continue;const{isEnabled:r,Feature:d}=l;if(!this.features[s]&&d&&r(this.props)&&(this.features[s]=new d(this)),this.features[s]){const p=this.features[s];p.isMounted?p.update():(p.mount(),p.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):at()}getStaticValue(s){return this.latestValues[s]}setStaticValue(s,l){this.latestValues[s]=l}update(s,l){(s.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=s,this.prevPresenceContext=this.presenceContext,this.presenceContext=l;for(let r=0;r<wb.length;r++){const d=wb[r];this.propEventSubscriptions[d]&&(this.propEventSubscriptions[d](),delete this.propEventSubscriptions[d]);const p="on"+d,g=s[p];g&&(this.propEventSubscriptions[d]=this.on(d,g))}this.prevMotionValues=av(this,this.scrapeMotionValuesFromProps(s,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(s){return this.props.variants?this.props.variants[s]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(s){const l=this.getClosestVariantNode();if(l)return l.variantChildren&&l.variantChildren.add(s),()=>l.variantChildren.delete(s)}addValue(s,l){const r=this.values.get(s);l!==r&&(r&&this.removeValue(s),this.bindToMotionValue(s,l),this.values.set(s,l),this.latestValues[s]=l.get())}removeValue(s){this.values.delete(s);const l=this.valueSubscriptions.get(s);l&&(l(),this.valueSubscriptions.delete(s)),delete this.latestValues[s],this.removeValueFromRenderState(s,this.renderState)}hasValue(s){return this.values.has(s)}getValue(s,l){if(this.props.values&&this.props.values[s])return this.props.values[s];let r=this.values.get(s);return r===void 0&&l!==void 0&&(r=Ns(l===null?void 0:l,{owner:this}),this.addValue(s,r)),r}readValue(s,l){let r=this.latestValues[s]!==void 0||!this.current?this.latestValues[s]:this.getBaseTargetFromProps(this.props,s)??this.readValueFromInstance(this.current,s,this.options);return r!=null&&(typeof r=="string"&&(Yf(r)||Jf(r))?r=parseFloat(r):!tv(r)&&en.test(l)&&(r=U0(s,l)),this.setBaseTarget(s,mt(r)?r.get():r)),mt(r)?r.get():r}setBaseTarget(s,l){this.baseTarget[s]=l}getBaseTarget(s){var p;const{initial:l}=this.props;let r;if(typeof l=="string"||typeof l=="object"){const g=Vd(this.props,l,(p=this.presenceContext)==null?void 0:p.custom);g&&(r=g[s])}if(l&&r!==void 0)return r;const d=this.getBaseTargetFromProps(this.props,s);return d!==void 0&&!mt(d)?d:this.initialValues[s]!==void 0&&r===void 0?void 0:this.baseTarget[s]}on(s,l){return this.events[s]||(this.events[s]=new yd),this.events[s].add(l)}notify(s,...l){this.events[s]&&this.events[s].notify(...l)}scheduleRenderMicrotask(){qd.render(this.render)}}class J0 extends rv{constructor(){super(...arguments),this.KeyframeResolver=Dy}sortInstanceNodePosition(s,l){return s.compareDocumentPosition(l)&2?1:-1}getBaseTargetFromProps(s,l){const r=s.style;return r?r[l]:void 0}removeValueFromRenderState(s,{vars:l,style:r}){delete l[s],delete r[s]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:s}=this.props;mt(s)&&(this.childSubscription=s.on("change",l=>{this.current&&(this.current.textContent=`${l}`)}))}}class ca{constructor(s){this.isMounted=!1,this.node=s}update(){}}function W0({top:a,left:s,right:l,bottom:r}){return{x:{min:s,max:l},y:{min:a,max:r}}}function lv({x:a,y:s}){return{top:s.min,right:a.max,bottom:s.max,left:a.min}}function cv(a,s){if(!s)return a;const l=s({x:a.left,y:a.top}),r=s({x:a.right,y:a.bottom});return{top:l.y,left:l.x,bottom:r.y,right:r.x}}function Su(a){return a===void 0||a===1}function ud({scale:a,scaleX:s,scaleY:l}){return!Su(a)||!Su(s)||!Su(l)}function wa(a){return ud(a)||$0(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function $0(a){return Cb(a.x)||Cb(a.y)}function Cb(a){return a&&a!=="0%"}function Ur(a,s,l){const r=a-l,d=s*r;return l+d}function Vb(a,s,l,r,d){return d!==void 0&&(a=Ur(a,d,r)),Ur(a,l,r)+s}function dd(a,s=0,l=1,r,d){a.min=Vb(a.min,s,l,r,d),a.max=Vb(a.max,s,l,r,d)}function ex(a,{x:s,y:l}){dd(a.x,s.translate,s.scale,s.originPoint),dd(a.y,l.translate,l.scale,l.originPoint)}const Db=.999999999999,qb=1.0000000000001;function uv(a,s,l,r=!1){var h;const d=l.length;if(!d)return;s.x=s.y=1;let p,g;for(let f=0;f<d;f++){p=l[f],g=p.projectionDelta;const{visualElement:b}=p.options;b&&b.props.style&&b.props.style.display==="contents"||(r&&p.options.layoutScroll&&p.scroll&&p!==p.root&&(rn(a.x,-p.scroll.offset.x),rn(a.y,-p.scroll.offset.y)),g&&(s.x*=g.x.scale,s.y*=g.y.scale,ex(a,g)),r&&wa(p.latestValues)&&Sr(a,p.latestValues,(h=p.layout)==null?void 0:h.layoutBox))}s.x<qb&&s.x>Db&&(s.x=1),s.y<qb&&s.y>Db&&(s.y=1)}function rn(a,s){a.min+=s,a.max+=s}function Rb(a,s,l,r,d=.5){const p=qe(a.min,a.max,d);dd(a,s,l,p,r)}function Ob(a,s){return typeof a=="string"?parseFloat(a)/100*(s.max-s.min):a}function Sr(a,s,l){const r=l??a;Rb(a.x,Ob(s.x,r.x),s.scaleX,s.scale,s.originX),Rb(a.y,Ob(s.y,r.y),s.scaleY,s.scale,s.originY)}function tx(a,s){return W0(cv(a.getBoundingClientRect(),s))}function dv(a,s,l){const r=tx(a,l),{scroll:d}=s;return d&&(rn(r.x,d.offset.x),rn(r.y,d.offset.y)),r}const pv={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},gv=ws.length;function mv(a,s,l){let r="",d=!0;for(let g=0;g<gv;g++){const h=ws[g],f=a[h];if(f===void 0)continue;let b=!0;if(typeof f=="number")b=f===(h.startsWith("scale")?1:0);else{const x=parseFloat(f);b=h.startsWith("scale")?x===1:x===0}if(!b||l){const x=ld(f,Lr[h]);if(!b){d=!1;const k=pv[h]||h;r+=`${k}(${x}) `}l&&(s[h]=x)}}const p=a.pathRotation;return p&&(d=!1,r+=`rotate(${ld(p,Lr.pathRotation)}) `),r=r.trim(),l?r=l(s,d?"":r):d&&(r="none"),r}function zd(a,s,l){const{style:r,vars:d,transformOrigin:p}=a;let g=!1,h=!1;for(const f in s){const b=s[f];if(Cs.has(f)){g=!0;continue}else if(p0(f)){d[f]=b;continue}else{const x=ld(b,Lr[f]);f.startsWith("origin")?(h=!0,p[f]=x):r[f]=x}}if(s.transform||(g||l?r.transform=mv(s,a.transform,l):r.transform&&(r.transform="none")),h){const{originX:f="50%",originY:b="50%",originZ:x=0}=p;r.transformOrigin=`${f} ${b} ${x}`}}function nx(a,{style:s,vars:l},r,d){const p=a.style;let g;for(g in s)p[g]=s[g];d==null||d.applyProjectionStyles(p,r);for(g in l)p.setProperty(g,l[g])}function Hb(a,s){return s.max===s.min?0:a/(s.max-s.min)*100}const Do={correct:(a,s)=>{if(!s.target)return a;if(typeof a=="string")if(ne.test(a))a=parseFloat(a);else return a;const l=Hb(a,s.target.x),r=Hb(a,s.target.y);return`${l}% ${r}%`}},hv={correct:(a,{treeScale:s,projectionDelta:l})=>{const r=a,d=en.parse(a);if(d.length>5)return r;const p=en.createTransformer(a),g=typeof d[0]!="number"?1:0,h=l.x.scale*s.x,f=l.y.scale*s.y;d[0+g]/=h,d[1+g]/=f;const b=qe(h,f,.5);return typeof d[2+g]=="number"&&(d[2+g]/=b),typeof d[3+g]=="number"&&(d[3+g]/=b),p(d)}},pd={borderRadius:{...Do,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Do,borderTopRightRadius:Do,borderBottomLeftRadius:Do,borderBottomRightRadius:Do,boxShadow:hv};function ax(a,{layout:s,layoutId:l}){return Cs.has(a)||a.startsWith("origin")||(s||l!==void 0)&&(!!pd[a]||a==="opacity")}function Ud(a,s,l){var g;const r=a.style,d=s==null?void 0:s.style,p={};if(!r)return p;for(const h in r)(mt(r[h])||d&&mt(d[h])||ax(h,a)||((g=l==null?void 0:l.getValue(h))==null?void 0:g.liveStyle)!==void 0)&&(p[h]=r[h]);return p}function bv(a){return window.getComputedStyle(a)}class fv extends J0{constructor(){super(...arguments),this.type="html",this.renderInstance=nx}readValueFromInstance(s,l){var r;if(Cs.has(l))return(r=this.projection)!=null&&r.isProjecting?Ju(l):RG(s,l);{const d=bv(s),p=(p0(l)?d.getPropertyValue(l):d[l])||0;return typeof p=="string"?p.trim():p}}measureInstanceViewportBox(s,{transformPagePoint:l}){return tx(s,l)}build(s,l,r){zd(s,l,r.transformTemplate)}scrapeMotionValuesFromProps(s,l,r){return Ud(s,l,r)}}const xv={offset:"stroke-dashoffset",array:"stroke-dasharray"},_v={offset:"strokeDashoffset",array:"strokeDasharray"};function kv(a,s,l=1,r=0,d=!0){a.pathLength=1;const p=d?xv:_v;a[p.offset]=`${-r}`,a[p.array]=`${s} ${l}`}const Gv=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function sx(a,{attrX:s,attrY:l,attrScale:r,pathLength:d,pathSpacing:p=1,pathOffset:g=0,...h},f,b,x){if(zd(a,h,b),f){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:k,style:G}=a;k.transform&&(G.transform=k.transform,delete k.transform),(G.transform||k.transformOrigin)&&(G.transformOrigin=k.transformOrigin??"50% 50%",delete k.transformOrigin),G.transform&&(G.transformBox=(x==null?void 0:x.transformBox)??"fill-box",delete k.transformBox);for(const y of Gv)k[y]!==void 0&&(G[y]=k[y],delete k[y]);s!==void 0&&(k.x=s),l!==void 0&&(k.y=l),r!==void 0&&(k.scale=r),d!==void 0&&kv(k,d,p,g,!1)}const ox=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),ix=a=>typeof a=="string"&&a.toLowerCase()==="svg";function yv(a,s,l,r){nx(a,s,void 0,r);for(const d in s.attrs)a.setAttribute(ox.has(d)?d:Dd(d),s.attrs[d])}function rx(a,s,l){const r=Ud(a,s,l);for(const d in a)if(mt(a[d])||mt(s[d])){const p=ws.indexOf(d)!==-1?"attr"+d.charAt(0).toUpperCase()+d.substring(1):d;r[p]=a[d]}return r}class vv extends J0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=at}getBaseTargetFromProps(s,l){return s[l]}readValueFromInstance(s,l){if(Cs.has(l)){const r=z0(l);return r&&r.default||0}return l=ox.has(l)?l:Dd(l),s.getAttribute(l)}scrapeMotionValuesFromProps(s,l,r){return rx(s,l,r)}build(s,l,r){sx(s,l,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(s,l,r,d){yv(s,l,r,d)}mount(s){this.isSVGTag=ix(s.tagName),super.mount(s)}}const Mv=Ld.length;function lx(a){if(!a)return;if(!a.isControllingVariants){const l=a.parent?lx(a.parent)||{}:{};return a.props.initial!==void 0&&(l.initial=a.props.initial),l}const s={};for(let l=0;l<Mv;l++){const r=Ld[l],d=a.props[r];(Fo(d)||d===!1)&&(s[r]=d)}return s}function cx(a,s){if(!Array.isArray(s))return!1;const l=s.length;if(l!==a.length)return!1;for(let r=0;r<l;r++)if(s[r]!==a[r])return!1;return!0}const Av=[...Hd].reverse(),Tv=Hd.length;function Iv(a){return s=>Promise.all(s.map(({animation:l,options:r})=>My(a,l,r)))}function Sv(a){let s=Iv(a),l=Lb(),r=!0,d=!1;const p=b=>(x,k)=>{var y;const G=qa(a,k,b==="exit"?(y=a.presenceContext)==null?void 0:y.custom:void 0);if(G){const{transition:M,transitionEnd:j,...I}=G;x={...x,...I,...j}}return x};function g(b){s=b(a)}function h(b){const{props:x}=a,k=lx(a.parent)||{},G=[],y=new Set;let M={},j=1/0;for(let H=0;H<Tv;H++){const X=Av[H],L=l[X],D=x[X]!==void 0?x[X]:k[X],Q=Fo(D),Y=X===b?L.isActive:null;Y===!1&&(j=H);let q=D===k[X]&&D!==x[X]&&Q;if(q&&(r||d)&&a.manuallyAnimateOnMount&&(q=!1),L.protectedKeys={...M},!L.isActive&&Y===null||!D&&!L.prevProp||Xr(D)||typeof D=="boolean")continue;if(X==="exit"&&L.isActive&&Y!==!0){L.prevResolvedValues&&(M={...M,...L.prevResolvedValues});continue}const K=jv(L.prevProp,D);let F=K||X===b&&L.isActive&&!q&&Q||H>j&&Q,Z=!1;const oe=Array.isArray(D)?D:[D];let de=oe.reduce(p(X),{});Y===!1&&(de={});const{prevResolvedValues:Ue={}}=L,Oe={...Ue,...de},Me=$=>{F=!0,y.has($)&&(Z=!0,y.delete($)),L.needsAnimating[$]=!0;const re=a.getValue($);re&&(re.liveStyle=!1)};for(const $ in Oe){const re=de[$],xe=Ue[$];if(M.hasOwnProperty($))continue;let A=!1;ad(re)&&ad(xe)?A=!cx(re,xe)||K:A=re!==xe,A?re!=null?Me($):y.add($):re!==void 0&&y.has($)?Me($):L.protectedKeys[$]=!0}L.prevProp=D,L.prevResolvedValues=de,L.isActive&&(M={...M,...de}),(r||d)&&a.blockInitialAnimation&&(F=!1);const C=q&&K;F&&(!C||Z)&&G.push(...oe.map($=>{const re={type:X};if(typeof $=="string"&&(r||d)&&!C&&a.manuallyAnimateOnMount&&a.parent){const{parent:xe}=a,A=qa(xe,$);if(xe.enteringChildren&&A){const{delayChildren:B}=A.transition||{};re.delay=w0(xe.enteringChildren,a,B)}}return{animation:$,options:re}}))}if(y.size){const H={};if(typeof x.initial!="boolean"){const X=qa(a,Array.isArray(x.initial)?x.initial[0]:x.initial);X&&X.transition&&(H.transition=X.transition)}y.forEach(X=>{const L=a.getBaseTarget(X),D=a.getValue(X);D&&(D.liveStyle=!0),H[X]=L??null}),G.push({animation:H})}let I=!!G.length;return r&&(x.initial===!1||x.initial===x.animate)&&!a.manuallyAnimateOnMount&&(I=!1),r=!1,d=!1,I?s(G):Promise.resolve()}function f(b,x){var G;if(l[b].isActive===x)return Promise.resolve();(G=a.variantChildren)==null||G.forEach(y=>{var M;return(M=y.animationState)==null?void 0:M.setActive(b,x)}),l[b].isActive=x;const k=h(b);for(const y in l)l[y].protectedKeys={};return k}return{animateChanges:h,setActive:f,setAnimateFunction:g,getState:()=>l,reset:()=>{l=Lb(),d=!0}}}function jv(a,s){return typeof s=="string"?s!==a:Array.isArray(s)?!cx(s,a):!1}function Ea(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Lb(){return{animate:Ea(!0),whileInView:Ea(),whileHover:Ea(),whileTap:Ea(),whileDrag:Ea(),whileFocus:Ea(),exit:Ea()}}function gd(a,s){a.min=s.min,a.max=s.max}function Wt(a,s){gd(a.x,s.x),gd(a.y,s.y)}function zb(a,s){a.translate=s.translate,a.scale=s.scale,a.originPoint=s.originPoint,a.origin=s.origin}const ux=1e-4,Nv=1-ux,Ev=1+ux,dx=.01,wv=0-dx,Cv=0+dx;function _t(a){return a.max-a.min}function Vv(a,s,l){return Math.abs(a-s)<=l}function Ub(a,s,l,r=.5){a.origin=r,a.originPoint=qe(s.min,s.max,a.origin),a.scale=_t(l)/_t(s),a.translate=qe(l.min,l.max,a.origin)-a.originPoint,(a.scale>=Nv&&a.scale<=Ev||isNaN(a.scale))&&(a.scale=1),(a.translate>=wv&&a.translate<=Cv||isNaN(a.translate))&&(a.translate=0)}function Lo(a,s,l,r){Ub(a.x,s.x,l.x,r?r.originX:void 0),Ub(a.y,s.y,l.y,r?r.originY:void 0)}function Bb(a,s,l,r=0){const d=r?qe(l.min,l.max,r):l.min;a.min=d+s.min,a.max=a.min+_t(s)}function Dv(a,s,l,r){Bb(a.x,s.x,l.x,r==null?void 0:r.x),Bb(a.y,s.y,l.y,r==null?void 0:r.y)}function Pb(a,s,l,r=0){const d=r?qe(l.min,l.max,r):l.min;a.min=s.min-d,a.max=a.min+_t(s)}function Br(a,s,l,r){Pb(a.x,s.x,l.x,r==null?void 0:r.x),Pb(a.y,s.y,l.y,r==null?void 0:r.y)}function Fb(a,s,l,r,d){return a-=s,a=Ur(a,1/l,r),d!==void 0&&(a=Ur(a,1/d,r)),a}function qv(a,s=0,l=1,r=.5,d,p=a,g=a){if(ln.test(s)&&(s=parseFloat(s),s=qe(g.min,g.max,s/100)-g.min),typeof s!="number")return;let h=qe(p.min,p.max,r);a===p&&(h-=s),a.min=Fb(a.min,s,l,h,d),a.max=Fb(a.max,s,l,h,d)}function Kb(a,s,[l,r,d],p,g){qv(a,s[l],s[r],s[d],s.scale,p,g)}const Rv=["x","scaleX","originX"],Ov=["y","scaleY","originY"];function Xb(a,s,l,r){Kb(a.x,s,Rv,l?l.x:void 0,r?r.x:void 0),Kb(a.y,s,Ov,l?l.y:void 0,r?r.y:void 0)}function Zb(a){return a.translate===0&&a.scale===1}function px(a){return Zb(a.x)&&Zb(a.y)}function Yb(a,s){return a.min===s.min&&a.max===s.max}function Hv(a,s){return Yb(a.x,s.x)&&Yb(a.y,s.y)}function Qb(a,s){return Math.round(a.min)===Math.round(s.min)&&Math.round(a.max)===Math.round(s.max)}function gx(a,s){return Qb(a.x,s.x)&&Qb(a.y,s.y)}function Jb(a){return _t(a.x)/_t(a.y)}function Wb(a,s){return a.translate===s.translate&&a.scale===s.scale&&a.originPoint===s.originPoint}function on(a){return[a("x"),a("y")]}function Lv(a,s,l){let r="";const d=a.x.translate/s.x,p=a.y.translate/s.y,g=(l==null?void 0:l.z)||0;if((d||p||g)&&(r=`translate3d(${d}px, ${p}px, ${g}px) `),(s.x!==1||s.y!==1)&&(r+=`scale(${1/s.x}, ${1/s.y}) `),l){const{transformPerspective:b,rotate:x,pathRotation:k,rotateX:G,rotateY:y,skewX:M,skewY:j}=l;b&&(r=`perspective(${b}px) ${r}`),x&&(r+=`rotate(${x}deg) `),k&&(r+=`rotate(${k}deg) `),G&&(r+=`rotateX(${G}deg) `),y&&(r+=`rotateY(${y}deg) `),M&&(r+=`skewX(${M}deg) `),j&&(r+=`skewY(${j}deg) `)}const h=a.x.scale*s.x,f=a.y.scale*s.y;return(h!==1||f!==1)&&(r+=`scale(${h}, ${f})`),r||"none"}const mx=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],zv=mx.length,$b=a=>typeof a=="string"?parseFloat(a):a,ef=a=>typeof a=="number"||ne.test(a);function Uv(a,s,l,r,d,p){d?(a.opacity=qe(0,l.opacity??1,Bv(r)),a.opacityExit=qe(s.opacity??1,0,Pv(r))):p&&(a.opacity=qe(s.opacity??1,l.opacity??1,r));for(let g=0;g<zv;g++){const h=mx[g];let f=tf(s,h),b=tf(l,h);if(f===void 0&&b===void 0)continue;f||(f=0),b||(b=0),f===0||b===0||ef(f)===ef(b)?(a[h]=Math.max(qe($b(f),$b(b),r),0),(ln.test(b)||ln.test(f))&&(a[h]+="%")):a[h]=b}(s.rotate||l.rotate)&&(a.rotate=qe(s.rotate||0,l.rotate||0,r))}function tf(a,s){return a[s]!==void 0?a[s]:a.borderRadius}const Bv=hx(0,.5,i0),Pv=hx(.5,.95,Zt);function hx(a,s,l){return r=>r<a?0:r>s?1:l(Bo(a,s,r))}function Fv(a,s,l){const r=mt(a)?a:Ns(a);return r.start(Cd("",r,s,l)),r.animation}function Ko(a,s,l,r={passive:!0}){return a.addEventListener(s,l,r),()=>a.removeEventListener(s,l)}const Kv=(a,s)=>a.depth-s.depth;class Xv{constructor(){this.children=[],this.isDirty=!1}add(s){kd(this.children,s),this.isDirty=!0}remove(s){Dr(this.children,s),this.isDirty=!0}forEach(s){this.isDirty&&this.children.sort(Kv),this.isDirty=!1,this.children.forEach(s)}}function Zv(a,s){const l=xt.now(),r=({timestamp:d})=>{const p=d-l;p>=s&&(la(r),a(p-s))};return Re.setup(r,!0),()=>la(r)}function jr(a){return mt(a)?a.get():a}class Yv{constructor(){this.members=[]}add(s){kd(this.members,s);for(let l=this.members.length-1;l>=0;l--){const r=this.members[l];if(r===s||r===this.lead||r===this.prevLead)continue;const d=r.instance;(!d||d.isConnected===!1)&&!r.snapshot&&(Dr(this.members,r),r.unmount())}s.scheduleRender()}remove(s){if(Dr(this.members,s),s===this.prevLead&&(this.prevLead=void 0),s===this.lead){const l=this.members[this.members.length-1];l&&this.promote(l)}}relegate(s){var l;for(let r=this.members.indexOf(s)-1;r>=0;r--){const d=this.members[r];if(d.isPresent!==!1&&((l=d.instance)==null?void 0:l.isConnected)!==!1)return this.promote(d),!0}return!1}promote(s,l){var d;const r=this.lead;if(s!==r&&(this.prevLead=r,this.lead=s,s.show(),r)){r.updateSnapshot(),s.scheduleRender();const{layoutDependency:p}=r.options,{layoutDependency:g}=s.options;(p===void 0||p!==g)&&(s.resumeFrom=r,l&&(r.preserveOpacity=!0),r.snapshot&&(s.snapshot=r.snapshot,s.snapshot.latestValues=r.animationValues||r.latestValues),(d=s.root)!=null&&d.isUpdating&&(s.isLayoutDirty=!0)),s.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(s=>{var l,r,d,p,g;(r=(l=s.options).onExitComplete)==null||r.call(l),(g=(d=s.resumingFrom)==null?void 0:(p=d.options).onExitComplete)==null||g.call(p)})}scheduleRender(){this.members.forEach(s=>s.instance&&s.scheduleRender(!1))}removeLeadSnapshot(){var s;(s=this.lead)!=null&&s.snapshot&&(this.lead.snapshot=void 0)}}const Nr={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ju=["","X","Y","Z"],Qv=1e3;let Jv=0;function Nu(a,s,l,r){const{latestValues:d}=s;d[a]&&(l[a]=d[a],s.setStaticValue(a,0),r&&(r[a]=0))}function bx(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:s}=a.options;if(!s)return;const l=R0(s);if(window.MotionHasOptimisedAnimation(l,"transform")){const{layout:d,layoutId:p}=a.options;window.MotionCancelOptimisedAnimation(l,"transform",Re,!(d||p))}const{parent:r}=a;r&&!r.hasCheckedOptimisedAppear&&bx(r)}function fx({attachResizeListener:a,defaultParent:s,measureScroll:l,checkIsScrollRoot:r,resetTransform:d}){return class{constructor(g={},h=s==null?void 0:s()){this.id=Jv++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(eM),this.nodes.forEach(iM),this.nodes.forEach(rM),this.nodes.forEach(tM)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=g,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new Xv)}addEventListener(g,h){return this.eventHandlers.has(g)||this.eventHandlers.set(g,new yd),this.eventHandlers.get(g).add(h)}notifyListeners(g,...h){const f=this.eventHandlers.get(g);f&&f.notify(...h)}hasListeners(g){return this.eventHandlers.has(g)}mount(g){if(this.instance)return;this.isSVG=Od(g)&&!$y(g),this.instance=g;const{layoutId:h,layout:f,visualElement:b}=this.options;if(b&&!b.current&&b.mount(g),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(f||h)&&(this.isLayoutDirty=!0),a){let x,k=0;const G=()=>this.root.updateBlockedByResize=!1;Re.read(()=>{k=window.innerWidth}),a(g,()=>{const y=window.innerWidth;y!==k&&(k=y,this.root.updateBlockedByResize=!0,x&&x(),x=Zv(G,250),Nr.hasAnimatedSinceResize&&(Nr.hasAnimatedSinceResize=!1,this.nodes.forEach(sf)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&b&&(h||f)&&this.addEventListener("didUpdate",({delta:x,hasLayoutChanged:k,hasRelativeLayoutChanged:G,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||b.getDefaultTransition()||pM,{onLayoutAnimationStart:j,onLayoutAnimationComplete:I}=b.getProps(),H=!this.targetLayout||!gx(this.targetLayout,y),X=!k&&G;if(this.options.layoutRoot||this.resumeFrom||X||k&&(H||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...wd(M,"layout"),onPlay:j,onComplete:I};(b.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(x,X,L.path)}else k||sf(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const g=this.getStack();g&&g.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),la(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(lM),this.animationId++)}getTransformTemplate(){const{visualElement:g}=this.options;return g&&g.getProps().transformTemplate}willUpdate(g=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&bx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let x=0;x<this.path.length;x++){const k=this.path[x];k.shouldResetTransform=!0,(typeof k.latestValues.x=="string"||typeof k.latestValues.y=="string")&&(k.isLayoutDirty=!0),k.updateScroll("snapshot"),k.options.layoutRoot&&k.willUpdate(!1)}const{layoutId:h,layout:f}=this.options;if(h===void 0&&!f)return;const b=this.getTransformTemplate();this.prevTransformTemplateValue=b?b(this.latestValues,""):void 0,this.updateSnapshot(),g&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const f=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),f&&this.nodes.forEach(aM),this.nodes.forEach(nf);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(af);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(sM),this.nodes.forEach(oM),this.nodes.forEach(Wv),this.nodes.forEach($v)):this.nodes.forEach(af),this.clearAllSnapshots();const h=xt.now();gt.delta=cn(0,1e3/60,h-gt.timestamp),gt.timestamp=h,gt.isProcessing=!0,Gu.update.process(gt),Gu.preRender.process(gt),Gu.render.process(gt),gt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,qd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(nM),this.sharedNodes.forEach(cM)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Re.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Re.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!_t(this.snapshot.measuredBox.x)&&!_t(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const g=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=at()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,g?g.layoutBox:void 0)}updateScroll(g="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===g&&(h=!1),h&&this.instance){const f=r(this.instance);this.scroll={animationId:this.root.animationId,phase:g,isRoot:f,offset:l(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!d)return;const g=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!px(this.projectionDelta),f=this.getTransformTemplate(),b=f?f(this.latestValues,""):void 0,x=b!==this.prevTransformTemplateValue;g&&this.instance&&(h||wa(this.latestValues)||x)&&(d(this.instance,b),this.shouldResetTransform=!1,this.scheduleRender())}measure(g=!0){const h=this.measurePageBox();let f=this.removeElementScroll(h);return g&&(f=this.removeTransform(f)),gM(f),{animationId:this.root.animationId,measuredBox:h,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var b;const{visualElement:g}=this.options;if(!g)return at();const h=g.measureViewportBox();if(!(((b=this.scroll)==null?void 0:b.wasRoot)||this.path.some(mM))){const{scroll:x}=this.root;x&&(rn(h.x,x.offset.x),rn(h.y,x.offset.y))}return h}removeElementScroll(g){var f;const h=at();if(Wt(h,g),(f=this.scroll)!=null&&f.wasRoot)return h;for(let b=0;b<this.path.length;b++){const x=this.path[b],{scroll:k,options:G}=x;x!==this.root&&k&&G.layoutScroll&&(k.wasRoot&&Wt(h,g),rn(h.x,k.offset.x),rn(h.y,k.offset.y))}return h}applyTransform(g,h=!1,f){var x,k;const b=f||at();Wt(b,g);for(let G=0;G<this.path.length;G++){const y=this.path[G];!h&&y.options.layoutScroll&&y.scroll&&y!==y.root&&(rn(b.x,-y.scroll.offset.x),rn(b.y,-y.scroll.offset.y)),wa(y.latestValues)&&Sr(b,y.latestValues,(x=y.layout)==null?void 0:x.layoutBox)}return wa(this.latestValues)&&Sr(b,this.latestValues,(k=this.layout)==null?void 0:k.layoutBox),b}removeTransform(g){var f;const h=at();Wt(h,g);for(let b=0;b<this.path.length;b++){const x=this.path[b];if(!wa(x.latestValues))continue;let k;x.instance&&(ud(x.latestValues)&&x.updateSnapshot(),k=at(),Wt(k,x.measurePageBox())),Xb(h,x.latestValues,(f=x.snapshot)==null?void 0:f.layoutBox,k)}return wa(this.latestValues)&&Xb(h,this.latestValues),h}setTargetDelta(g){this.targetDelta=g,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(g){this.options={...this.options,...g,crossfade:g.crossfade!==void 0?g.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==gt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(g=!1){var y;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==h;if(!(g||f&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:x,layoutId:k}=this.options;if(!this.layout||!(x||k))return;this.resolvedRelativeTargetAt=gt.timestamp;const G=this.getClosestProjectingParent();G&&this.linkedParentVersion!==G.layoutVersion&&!G.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&G&&G.layout?this.createRelativeTarget(G,this.layout.layoutBox,G.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=at(),this.targetWithTransforms=at()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Dv(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Wt(this.target,this.layout.layoutBox),ex(this.target,this.targetDelta)):Wt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&G&&!!G.resumingFrom==!!this.resumingFrom&&!G.options.layoutScroll&&G.target&&this.animationProgress!==1?this.createRelativeTarget(G,this.target,G.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||ud(this.parent.latestValues)||$0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(g,h,f){this.relativeParent=g,this.linkedParentVersion=g.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=at(),this.relativeTargetOrigin=at(),Br(this.relativeTargetOrigin,h,f,this.options.layoutAnchor||void 0),Wt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var M;const g=this.getLead(),h=!!this.resumingFrom||this!==g;let f=!0;if((this.isProjectionDirty||(M=this.parent)!=null&&M.isProjectionDirty)&&(f=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===gt.timestamp&&(f=!1),f)return;const{layout:b,layoutId:x}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(b||x))return;Wt(this.layoutCorrected,this.layout.layoutBox);const k=this.treeScale.x,G=this.treeScale.y;uv(this.layoutCorrected,this.treeScale,this.path,h),g.layout&&!g.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(g.target=g.layout.layoutBox,g.targetWithTransforms=at());const{target:y}=g;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(zb(this.prevProjectionDelta.x,this.projectionDelta.x),zb(this.prevProjectionDelta.y,this.projectionDelta.y)),Lo(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==k||this.treeScale.y!==G||!Wb(this.projectionDelta.x,this.prevProjectionDelta.x)||!Wb(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(g=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),g){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ss(),this.projectionDelta=Ss(),this.projectionDeltaWithTransform=Ss()}setAnimationOrigin(g,h=!1,f){const b=this.snapshot,x=b?b.latestValues:{},k={...this.latestValues},G=Ss();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const y=at(),M=b?b.source:void 0,j=this.layout?this.layout.source:void 0,I=M!==j,H=this.getStack(),X=!H||H.members.length<=1,L=!!(I&&!X&&this.options.crossfade===!0&&!this.path.some(dM));this.animationProgress=0;let D;const Q=f==null?void 0:f.interpolateProjection(g);this.mixTargetDelta=Y=>{const q=Y/1e3,K=Q==null?void 0:Q(q);K?(G.x.translate=K.x,G.x.scale=qe(g.x.scale,1,q),G.x.origin=g.x.origin,G.x.originPoint=g.x.originPoint,G.y.translate=K.y,G.y.scale=qe(g.y.scale,1,q),G.y.origin=g.y.origin,G.y.originPoint=g.y.originPoint):(of(G.x,g.x,q),of(G.y,g.y,q)),this.setTargetDelta(G),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Br(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),uM(this.relativeTarget,this.relativeTargetOrigin,y,q),D&&Hv(this.relativeTarget,D)&&(this.isProjectionDirty=!1),D||(D=at()),Wt(D,this.relativeTarget)),I&&(this.animationValues=k,Uv(k,x,this.latestValues,q,L,X)),K&&K.rotate!==void 0&&(this.animationValues||(this.animationValues=k),this.animationValues.pathRotation=K.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=q},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(g){var h,f,b;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(b=(f=this.resumingFrom)==null?void 0:f.currentAnimation)==null||b.stop(),this.pendingAnimation&&(la(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Re.update(()=>{Nr.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ns(0)),this.motionValue.jump(0,!1),this.currentAnimation=Fv(this.motionValue,[0,1e3],{...g,velocity:0,isSync:!0,onUpdate:x=>{this.mixTargetDelta(x),g.onUpdate&&g.onUpdate(x)},onStop:()=>{},onComplete:()=>{g.onComplete&&g.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const g=this.getStack();g&&g.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Qv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const g=this.getLead();let{targetWithTransforms:h,target:f,layout:b,latestValues:x}=g;if(!(!h||!f||!b)){if(this!==g&&this.layout&&b&&xx(this.options.animationType,this.layout.layoutBox,b.layoutBox)){f=this.target||at();const k=_t(this.layout.layoutBox.x);f.x.min=g.target.x.min,f.x.max=f.x.min+k;const G=_t(this.layout.layoutBox.y);f.y.min=g.target.y.min,f.y.max=f.y.min+G}Wt(h,f),Sr(h,x),Lo(this.projectionDeltaWithTransform,this.layoutCorrected,h,x)}}registerSharedNode(g,h){this.sharedNodes.has(g)||this.sharedNodes.set(g,new Yv),this.sharedNodes.get(g).add(h);const b=h.options.initialPromotionConfig;h.promote({transition:b?b.transition:void 0,preserveFollowOpacity:b&&b.shouldPreserveFollowOpacity?b.shouldPreserveFollowOpacity(h):void 0})}isLead(){const g=this.getStack();return g?g.lead===this:!0}getLead(){var h;const{layoutId:g}=this.options;return g?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:g}=this.options;return g?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:g}=this.options;if(g)return this.root.sharedNodes.get(g)}promote({needsReset:g,transition:h,preserveFollowOpacity:f}={}){const b=this.getStack();b&&b.promote(this,f),g&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const g=this.getStack();return g?g.relegate(this):!1}resetSkewAndRotation(){const{visualElement:g}=this.options;if(!g)return;let h=!1;const{latestValues:f}=g;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(h=!0),!h)return;const b={};f.z&&Nu("z",g,b,this.animationValues);for(let x=0;x<ju.length;x++)Nu(`rotate${ju[x]}`,g,b,this.animationValues),Nu(`skew${ju[x]}`,g,b,this.animationValues);g.render();for(const x in b)g.setStaticValue(x,b[x]),this.animationValues&&(this.animationValues[x]=b[x]);g.scheduleRender()}applyProjectionStyles(g,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){g.visibility="hidden";return}const f=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,g.visibility="",g.opacity="",g.pointerEvents=jr(h==null?void 0:h.pointerEvents)||"",g.transform=f?f(this.latestValues,""):"none";return}const b=this.getLead();if(!this.projectionDelta||!this.layout||!b.target){this.options.layoutId&&(g.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,g.pointerEvents=jr(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!wa(this.latestValues)&&(g.transform=f?f({},""):"none",this.hasProjected=!1);return}g.visibility="";const x=b.animationValues||b.latestValues;this.applyTransformsToTarget();let k=Lv(this.projectionDeltaWithTransform,this.treeScale,x);f&&(k=f(x,k)),g.transform=k;const{x:G,y}=this.projectionDelta;g.transformOrigin=`${G.origin*100}% ${y.origin*100}% 0`,b.animationValues?g.opacity=b===this?x.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:g.opacity=b===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const M in pd){if(x[M]===void 0)continue;const{correct:j,applyTo:I,isCSSVariable:H}=pd[M],X=k==="none"?x[M]:j(x[M],b);if(I){const L=I.length;for(let D=0;D<L;D++)g[I[D]]=X}else H?this.options.visualElement.renderState.vars[M]=X:g[M]=X}this.options.layoutId&&(g.pointerEvents=b===this?jr(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(g=>{var h;return(h=g.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(nf),this.root.sharedNodes.clear()}}}function Wv(a){a.updateLayout()}function $v(a){var l;const s=((l=a.resumeFrom)==null?void 0:l.snapshot)||a.snapshot;if(a.isLead()&&a.layout&&s&&a.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:d}=a.layout,{animationType:p}=a.options,g=s.source!==a.layout.source;if(p==="size")on(k=>{const G=g?s.measuredBox[k]:s.layoutBox[k],y=_t(G);G.min=r[k].min,G.max=G.min+y});else if(p==="x"||p==="y"){const k=p==="x"?"y":"x";gd(g?s.measuredBox[k]:s.layoutBox[k],r[k])}else xx(p,s.layoutBox,r)&&on(k=>{const G=g?s.measuredBox[k]:s.layoutBox[k],y=_t(r[k]);G.max=G.min+y,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[k].max=a.relativeTarget[k].min+y)});const h=Ss();Lo(h,r,s.layoutBox);const f=Ss();g?Lo(f,a.applyTransform(d,!0),s.measuredBox):Lo(f,r,s.layoutBox);const b=!px(h);let x=!1;if(!a.resumeFrom){const k=a.getClosestProjectingParent();if(k&&!k.resumeFrom){const{snapshot:G,layout:y}=k;if(G&&y){const M=a.options.layoutAnchor||void 0,j=at();Br(j,s.layoutBox,G.layoutBox,M);const I=at();Br(I,r,y.layoutBox,M),gx(j,I)||(x=!0),k.options.layoutRoot&&(a.relativeTarget=I,a.relativeTargetOrigin=j,a.relativeParent=k)}}}a.notifyListeners("didUpdate",{layout:r,snapshot:s,delta:f,layoutDelta:h,hasLayoutChanged:b,hasRelativeLayoutChanged:x})}else if(a.isLead()){const{onExitComplete:r}=a.options;r&&r()}a.options.transition=void 0}function eM(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function tM(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function nM(a){a.clearSnapshot()}function nf(a){a.clearMeasurements()}function aM(a){a.isLayoutDirty=!0,a.updateLayout()}function af(a){a.isLayoutDirty=!1}function sM(a){a.isAnimationBlocked&&a.layout&&!a.isLayoutDirty&&(a.snapshot=a.layout,a.isLayoutDirty=!0)}function oM(a){const{visualElement:s}=a.options;s&&s.getProps().onBeforeLayoutMeasure&&s.notify("BeforeLayoutMeasure"),a.resetTransform()}function sf(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function iM(a){a.resolveTargetDelta()}function rM(a){a.calcProjection()}function lM(a){a.resetSkewAndRotation()}function cM(a){a.removeLeadSnapshot()}function of(a,s,l){a.translate=qe(s.translate,0,l),a.scale=qe(s.scale,1,l),a.origin=s.origin,a.originPoint=s.originPoint}function rf(a,s,l,r){a.min=qe(s.min,l.min,r),a.max=qe(s.max,l.max,r)}function uM(a,s,l,r){rf(a.x,s.x,l.x,r),rf(a.y,s.y,l.y,r)}function dM(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const pM={duration:.45,ease:[.4,0,.1,1]},lf=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),cf=lf("applewebkit/")&&!lf("chrome/")?Math.round:Zt;function uf(a){a.min=cf(a.min),a.max=cf(a.max)}function gM(a){uf(a.x),uf(a.y)}function xx(a,s,l){return a==="position"||a==="preserve-aspect"&&!Vv(Jb(s),Jb(l),.2)}function mM(a){var s;return a!==a.root&&((s=a.scroll)==null?void 0:s.wasRoot)}const hM=fx({attachResizeListener:(a,s)=>Ko(a,"resize",s),measureScroll:()=>{var a,s;return{x:document.documentElement.scrollLeft||((a=document.body)==null?void 0:a.scrollLeft)||0,y:document.documentElement.scrollTop||((s=document.body)==null?void 0:s.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Eu={current:void 0},_x=fx({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!Eu.current){const a=new hM({});a.mount(window),a.setOptions({layoutScroll:!0}),Eu.current=a}return Eu.current},resetTransform:(a,s)=>{a.style.transform=s!==void 0?s:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),Bd=O.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});function df(a,s){if(typeof a=="function")return a(s);a!=null&&(a.current=s)}function bM(...a){return s=>{let l=!1;const r=a.map(d=>{const p=df(d,s);return!l&&typeof p=="function"&&(l=!0),p});if(l)return()=>{for(let d=0;d<r.length;d++){const p=r[d];typeof p=="function"?p():df(a[d],null)}}}}function fM(...a){return O.useCallback(bM(...a),a)}class xM extends O.Component{getSnapshotBeforeUpdate(s){const l=this.props.childRef.current;if(Mr(l)&&s.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=l.offsetParent,d=Mr(r)&&r.offsetWidth||0,p=Mr(r)&&r.offsetHeight||0,g=getComputedStyle(l),h=this.props.sizeRef.current;h.height=parseFloat(g.height),h.width=parseFloat(g.width),h.top=l.offsetTop,h.left=l.offsetLeft,h.right=d-h.width-h.left,h.bottom=p-h.height-h.top,h.direction=g.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function _M({children:a,isPresent:s,anchorX:l,anchorY:r,root:d,pop:p}){var G;const g=O.useId(),h=O.useRef(null),f=O.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:b}=O.useContext(Bd),x=((G=a.props)==null?void 0:G.ref)??(a==null?void 0:a.ref),k=fM(h,x);return O.useInsertionEffect(()=>{const{width:y,height:M,top:j,left:I,right:H,bottom:X,direction:L}=f.current;if(s||p===!1||!h.current||!y||!M)return;const D=L==="rtl",Q=l==="left"?D?`right: ${H}`:`left: ${I}`:D?`left: ${I}`:`right: ${H}`,Y=r==="bottom"?`bottom: ${X}`:`top: ${j}`;h.current.dataset.motionPopId=g;const q=document.createElement("style");b&&(q.nonce=b);const K=d??document.head;return K.appendChild(q),q.sheet&&q.sheet.insertRule(`
          [data-motion-pop-id="${g}"] {
            position: absolute !important;
            width: ${y}px !important;
            height: ${M}px !important;
            ${Q}px !important;
            ${Y}px !important;
          }
        `),()=>{var F;(F=h.current)==null||F.removeAttribute("data-motion-pop-id"),K.contains(q)&&K.removeChild(q)}},[s]),i.jsx(xM,{isPresent:s,childRef:h,sizeRef:f,pop:p,children:p===!1?a:O.cloneElement(a,{ref:k})})}const kM=({children:a,initial:s,isPresent:l,onExitComplete:r,custom:d,presenceAffectsLayout:p,mode:g,anchorX:h,anchorY:f,root:b})=>{const x=_d(GM),k=O.useId();let G=!0,y=O.useMemo(()=>(G=!1,{id:k,initial:s,isPresent:l,custom:d,onExitComplete:M=>{x.set(M,!0);for(const j of x.values())if(!j)return;r&&r()},register:M=>(x.set(M,!1),()=>x.delete(M))}),[l,x,r]);return p&&G&&(y={...y}),O.useMemo(()=>{x.forEach((M,j)=>x.set(j,!1))},[l]),O.useEffect(()=>{!l&&!x.size&&r&&r()},[l]),a=i.jsx(_M,{pop:g==="popLayout",isPresent:l,anchorX:h,anchorY:f,root:b,children:a}),i.jsx(Fr.Provider,{value:y,children:a})};function GM(){return new Map}function kx(a=!0){const s=O.useContext(Fr);if(s===null)return[!0,null];const{isPresent:l,onExitComplete:r,register:d}=s,p=O.useId();O.useEffect(()=>{if(a)return d(p)},[a]);const g=O.useCallback(()=>a&&r&&r(p),[p,r,a]);return!l&&r?[!1,g]:[!0]}const fr=a=>a.key||"";function pf(a){const s=[];return O.Children.forEach(a,l=>{O.isValidElement(l)&&s.push(l)}),s}const wu=({children:a,custom:s,initial:l=!0,onExitComplete:r,presenceAffectsLayout:d=!0,mode:p="sync",propagate:g=!1,anchorX:h="left",anchorY:f="top",root:b})=>{const[x,k]=kx(g),G=O.useMemo(()=>pf(a),[a]),y=g&&!x?[]:G.map(fr),M=O.useRef(!0),j=O.useRef(G),I=_d(()=>new Map),H=O.useRef(new Set),[X,L]=O.useState(G),[D,Q]=O.useState(G);Zf(()=>{M.current=!1,j.current=G;for(let K=0;K<D.length;K++){const F=fr(D[K]);y.includes(F)?(I.delete(F),H.current.delete(F)):I.get(F)!==!0&&I.set(F,!1)}},[D,y.length,y.join("-")]);const Y=[];if(G!==X){let K=[...G];for(let F=0;F<D.length;F++){const Z=D[F],oe=fr(Z);y.includes(oe)||(K.splice(F,0,Z),Y.push(Z))}return p==="wait"&&Y.length&&(K=Y),Q(pf(K)),L(G),null}const{forceRender:q}=O.useContext(xd);return i.jsx(i.Fragment,{children:D.map(K=>{const F=fr(K),Z=g&&!x?!1:G===D||y.includes(F),oe=()=>{if(H.current.has(F))return;if(I.has(F))H.current.add(F),I.set(F,!0);else return;let de=!0;I.forEach(Ue=>{Ue||(de=!1)}),de&&(q==null||q(),Q(j.current),g&&(k==null||k()),r&&r())};return i.jsx(kM,{isPresent:Z,initial:!M.current||l?void 0:!1,custom:s,presenceAffectsLayout:d,mode:p,root:b,onExitComplete:Z?void 0:oe,anchorX:h,anchorY:f,children:K},F)})})},Gx=O.createContext({strict:!1}),gf={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let mf=!1;function yM(){if(mf)return;const a={};for(const s in gf)a[s]={isEnabled:l=>gf[s].some(r=>!!l[r])};Q0(a),mf=!0}function yx(){return yM(),iv()}function vM(a){const s=yx();for(const l in a)s[l]={...s[l],...a[l]};Q0(s)}const MM=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Pr(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||MM.has(a)}let vx=a=>!Pr(a);function AM(a){typeof a=="function"&&(vx=s=>s.startsWith("on")?!Pr(s):a(s))}try{AM(require("@emotion/is-prop-valid").default)}catch{}function TM(a,s,l){const r={};for(const d in a)d==="values"&&typeof a.values=="object"||mt(a[d])||(vx(d)||l===!0&&Pr(d)||!s&&!Pr(d)||a.draggable&&d.startsWith("onDrag"))&&(r[d]=a[d]);return r}const Yr=O.createContext({});function IM(a,s){if(Zr(a)){const{initial:l,animate:r}=a;return{initial:l===!1||Fo(l)?l:void 0,animate:Fo(r)?r:void 0}}return a.inherit!==!1?s:{}}function SM(a){const{initial:s,animate:l}=IM(a,O.useContext(Yr));return O.useMemo(()=>({initial:s,animate:l}),[hf(s),hf(l)])}function hf(a){return Array.isArray(a)?a.join(" "):a}const Pd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Mx(a,s,l){for(const r in s)!mt(s[r])&&!ax(r,l)&&(a[r]=s[r])}function jM({transformTemplate:a},s){return O.useMemo(()=>{const l=Pd();return zd(l,s,a),Object.assign({},l.vars,l.style)},[s])}function NM(a,s){const l=a.style||{},r={};return Mx(r,l,a),Object.assign(r,jM(a,s)),r}function EM(a,s){const l={},r=NM(a,s);return a.drag&&a.dragListener!==!1&&(l.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(l.tabIndex=0),l.style=r,l}const Ax=()=>({...Pd(),attrs:{}});function wM(a,s,l,r){const d=O.useMemo(()=>{const p=Ax();return sx(p,s,ix(r),a.transformTemplate,a.style),{...p.attrs,style:{...p.style}}},[s]);if(a.style){const p={};Mx(p,a.style,a),d.style={...p,...d.style}}return d}const CM=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Fd(a){return typeof a!="string"||a.includes("-")?!1:!!(CM.indexOf(a)>-1||/[A-Z]/u.test(a))}function VM(a,s,l,{latestValues:r},d,p=!1,g){const f=(g??Fd(a)?wM:EM)(s,r,d,a),b=TM(s,typeof a=="string",p),x=a!==O.Fragment?{...b,...f,ref:l}:{},{children:k}=s,G=O.useMemo(()=>mt(k)?k.get():k,[k]);return O.createElement(a,{...x,children:G})}function DM({scrapeMotionValuesFromProps:a,createRenderState:s},l,r,d){return{latestValues:qM(l,r,d,a),renderState:s()}}function qM(a,s,l,r){const d={},p=r(a,{});for(const G in p)d[G]=jr(p[G]);let{initial:g,animate:h}=a;const f=Zr(a),b=Z0(a);s&&b&&!f&&a.inherit!==!1&&(g===void 0&&(g=s.initial),h===void 0&&(h=s.animate));let x=l?l.initial===!1:!1;x=x||g===!1;const k=x?h:g;if(k&&typeof k!="boolean"&&!Xr(k)){const G=Array.isArray(k)?k:[k];for(let y=0;y<G.length;y++){const M=Vd(a,G[y]);if(M){const{transitionEnd:j,transition:I,...H}=M;for(const X in H){let L=H[X];if(Array.isArray(L)){const D=x?L.length-1:0;L=L[D]}L!==null&&(d[X]=L)}for(const X in j)d[X]=j[X]}}}return d}const Tx=a=>(s,l)=>{const r=O.useContext(Yr),d=O.useContext(Fr),p=()=>DM(a,s,r,d);return l?p():_d(p)},RM=Tx({scrapeMotionValuesFromProps:Ud,createRenderState:Pd}),OM=Tx({scrapeMotionValuesFromProps:rx,createRenderState:Ax}),HM=Symbol.for("motionComponentSymbol");function LM(a,s,l){const r=O.useRef(l);O.useInsertionEffect(()=>{r.current=l});const d=O.useRef(null);return O.useCallback(p=>{var h;p&&((h=a.onMount)==null||h.call(a,p)),s&&(p?s.mount(p):s.unmount());const g=r.current;if(typeof g=="function")if(p){const f=g(p);typeof f=="function"&&(d.current=f)}else d.current?(d.current(),d.current=null):g(p);else g&&(g.current=p)},[s])}const Ix=O.createContext({});function As(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function zM(a,s,l,r,d,p){var L,D;const{visualElement:g}=O.useContext(Yr),h=O.useContext(Gx),f=O.useContext(Fr),b=O.useContext(Bd),x=b.reducedMotion,k=b.skipAnimations,G=O.useRef(null),y=O.useRef(!1);r=r||h.renderer,!G.current&&r&&(G.current=r(a,{visualState:s,parent:g,props:l,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:x,skipAnimations:k,isSVG:p}),y.current&&G.current&&(G.current.manuallyAnimateOnMount=!0));const M=G.current,j=O.useContext(Ix);M&&!M.projection&&d&&(M.type==="html"||M.type==="svg")&&UM(G.current,l,d,j);const I=O.useRef(!1);O.useInsertionEffect(()=>{M&&I.current&&M.update(l,f)});const H=l[q0],X=O.useRef(!!H&&typeof window<"u"&&!((L=window.MotionHandoffIsComplete)!=null&&L.call(window,H))&&((D=window.MotionHasOptimisedAnimation)==null?void 0:D.call(window,H)));return Zf(()=>{y.current=!0,M&&(I.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),X.current&&M.animationState&&M.animationState.animateChanges())}),O.useEffect(()=>{M&&(!X.current&&M.animationState&&M.animationState.animateChanges(),X.current&&(queueMicrotask(()=>{var Q;(Q=window.MotionHandoffMarkAsComplete)==null||Q.call(window,H)}),X.current=!1),M.enteringChildren=void 0)}),M}function UM(a,s,l,r){const{layoutId:d,layout:p,drag:g,dragConstraints:h,layoutScroll:f,layoutRoot:b,layoutAnchor:x,layoutCrossfade:k}=s;a.projection=new l(a.latestValues,s["data-framer-portal-id"]?void 0:Sx(a.parent)),a.projection.setOptions({layoutId:d,layout:p,alwaysMeasureLayout:!!g||h&&As(h),visualElement:a,animationType:typeof p=="string"?p:"both",initialPromotionConfig:r,crossfade:k,layoutScroll:f,layoutRoot:b,layoutAnchor:x})}function Sx(a){if(a)return a.options.allowProjection!==!1?a.projection:Sx(a.parent)}function Cu(a,{forwardMotionProps:s=!1,type:l}={},r,d){r&&vM(r);const p=l?l==="svg":Fd(a),g=p?OM:RM;function h(b,x){let k;const G={...O.useContext(Bd),...b,layoutId:BM(b)},{isStatic:y}=G,M=SM(b),j=g(b,y);if(!y&&typeof window<"u"){PM();const I=FM(G);k=I.MeasureLayout,M.visualElement=zM(a,j,G,d,I.ProjectionNode,p)}return i.jsxs(Yr.Provider,{value:M,children:[k&&M.visualElement?i.jsx(k,{visualElement:M.visualElement,...G}):null,VM(a,b,LM(j,M.visualElement,x),j,y,s,p)]})}h.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const f=O.forwardRef(h);return f[HM]=a,f}function BM({layoutId:a}){const s=O.useContext(xd).id;return s&&a!==void 0?s+"-"+a:a}function PM(a,s){O.useContext(Gx).strict}function FM(a){const s=yx(),{drag:l,layout:r}=s;if(!l&&!r)return{};const d={...l,...r};return{MeasureLayout:l!=null&&l.isEnabled(a)||r!=null&&r.isEnabled(a)?d.MeasureLayout:void 0,ProjectionNode:d.ProjectionNode}}function KM(a,s){if(typeof Proxy>"u")return Cu;const l=new Map,r=(p,g)=>Cu(p,g,a,s),d=(p,g)=>r(p,g);return new Proxy(d,{get:(p,g)=>g==="create"?r:(l.has(g)||l.set(g,Cu(g,void 0,a,s)),l.get(g))})}const XM=(a,s)=>s.isSVG??Fd(a)?new vv(s):new fv(s,{allowProjection:a!==O.Fragment});class ZM extends ca{constructor(s){super(s),s.animationState||(s.animationState=Sv(s))}updateAnimationControlsSubscription(){const{animate:s}=this.node.getProps();Xr(s)&&(this.unmountControls=s.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:s}=this.node.getProps(),{animate:l}=this.node.prevProps||{};s!==l&&this.updateAnimationControlsSubscription()}unmount(){var s;this.node.animationState.reset(),(s=this.unmountControls)==null||s.call(this)}}let YM=0;class QM extends ca{constructor(){super(...arguments),this.id=YM++,this.isExitComplete=!1}update(){var p;if(!this.node.presenceContext)return;const{isPresent:s,onExitComplete:l}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||s===r)return;if(s&&r===!1){if(this.isExitComplete){const{initial:g,custom:h}=this.node.getProps();if(typeof g=="string"||typeof g=="object"&&g!==null&&!Array.isArray(g)){const f=qa(this.node,g,h);if(f){const{transition:b,transitionEnd:x,...k}=f;for(const G in k)(p=this.node.getValue(G))==null||p.jump(k[G])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const d=this.node.animationState.setActive("exit",!s);l&&!s&&d.then(()=>{this.isExitComplete=!0,l(this.id)})}mount(){const{register:s,onExitComplete:l}=this.node.presenceContext||{};l&&l(this.id),s&&(this.unmount=s(this.id))}unmount(){}}const JM={animation:{Feature:ZM},exit:{Feature:QM}};function Jo(a){return{point:{x:a.pageX,y:a.pageY}}}const WM=a=>s=>Rd(s)&&a(s,Jo(s));function zo(a,s,l,r){return Ko(a,s,WM(l),r)}const jx=({current:a})=>a?a.ownerDocument.defaultView:null,bf=(a,s)=>Math.abs(a-s);function $M(a,s){const l=bf(a.x,s.x),r=bf(a.y,s.y);return Math.sqrt(l**2+r**2)}const ff=new Set(["auto","scroll"]);class Nx{constructor(s,l,{transformPagePoint:r,contextWindow:d=window,dragSnapToOrigin:p=!1,distanceThreshold:g=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=y=>{this.handleScroll(y.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=xr(this.lastRawMoveEventInfo,this.transformPagePoint));const y=Vu(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,j=$M(y.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!j)return;const{point:I}=y,{timestamp:H}=gt;this.history.push({...I,timestamp:H});const{onStart:X,onMove:L}=this.handlers;M||(X&&X(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,y)},this.handlePointerMove=(y,M)=>{this.lastMoveEvent=y,this.lastRawMoveEventInfo=M,this.lastMoveEventInfo=xr(M,this.transformPagePoint),Re.update(this.updatePoint,!0)},this.handlePointerUp=(y,M)=>{this.end();const{onEnd:j,onSessionEnd:I,resumeAnimation:H}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&H&&H(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const X=Vu(y.type==="pointercancel"?this.lastMoveEventInfo:xr(M,this.transformPagePoint),this.history);this.startEvent&&j&&j(y,X),I&&I(y,X)},!Rd(s))return;this.dragSnapToOrigin=p,this.handlers=l,this.transformPagePoint=r,this.distanceThreshold=g,this.contextWindow=d||window;const f=Jo(s),b=xr(f,this.transformPagePoint),{point:x}=b,{timestamp:k}=gt;this.history=[{...x,timestamp:k}];const{onSessionStart:G}=l;G&&G(s,Vu(b,this.history)),this.removeListeners=Zo(zo(this.contextWindow,"pointermove",this.handlePointerMove),zo(this.contextWindow,"pointerup",this.handlePointerUp),zo(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(s){let l=s.parentElement;for(;l;){const r=getComputedStyle(l);(ff.has(r.overflowX)||ff.has(r.overflowY))&&this.scrollPositions.set(l,{x:l.scrollLeft,y:l.scrollTop}),l=l.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(s){const l=this.scrollPositions.get(s);if(!l)return;const r=s===window,d=r?{x:window.scrollX,y:window.scrollY}:{x:s.scrollLeft,y:s.scrollTop},p={x:d.x-l.x,y:d.y-l.y};p.x===0&&p.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=p.x,this.lastMoveEventInfo.point.y+=p.y):this.history.length>0&&(this.history[0].x-=p.x,this.history[0].y-=p.y),this.scrollPositions.set(s,d),Re.update(this.updatePoint,!0))}updateHandlers(s){this.handlers=s}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),la(this.updatePoint)}}function xr(a,s){return s?{point:s(a.point)}:a}function xf(a,s){return{x:a.x-s.x,y:a.y-s.y}}function Vu({point:a},s){return{point:a,delta:xf(a,Ex(s)),offset:xf(a,eA(s)),velocity:tA(s,.1)}}function eA(a){return a[0]}function Ex(a){return a[a.length-1]}function tA(a,s){if(a.length<2)return{x:0,y:0};let l=a.length-1,r=null;const d=Ex(a);for(;l>=0&&(r=a[l],!(d.timestamp-r.timestamp>qt(s)));)l--;if(!r)return{x:0,y:0};r===a[0]&&a.length>2&&d.timestamp-r.timestamp>qt(s)*2&&(r=a[1]);const p=Xt(d.timestamp-r.timestamp);if(p===0)return{x:0,y:0};const g={x:(d.x-r.x)/p,y:(d.y-r.y)/p};return g.x===1/0&&(g.x=0),g.y===1/0&&(g.y=0),g}function nA(a,{min:s,max:l},r){return s!==void 0&&a<s?a=r?qe(s,a,r.min):Math.max(a,s):l!==void 0&&a>l&&(a=r?qe(l,a,r.max):Math.min(a,l)),a}function _f(a,s,l){return{min:s!==void 0?a.min+s:void 0,max:l!==void 0?a.max+l-(a.max-a.min):void 0}}function aA(a,{top:s,left:l,bottom:r,right:d}){return{x:_f(a.x,l,d),y:_f(a.y,s,r)}}function kf(a,s){let l=s.min-a.min,r=s.max-a.max;return s.max-s.min<a.max-a.min&&([l,r]=[r,l]),{min:l,max:r}}function sA(a,s){return{x:kf(a.x,s.x),y:kf(a.y,s.y)}}function oA(a,s){let l=.5;const r=_t(a),d=_t(s);return d>r?l=Bo(s.min,s.max-r,a.min):r>d&&(l=Bo(a.min,a.max-d,s.min)),cn(0,1,l)}function iA(a,s){const l={};return s.min!==void 0&&(l.min=s.min-a.min),s.max!==void 0&&(l.max=s.max-a.min),l}const md=.35;function rA(a=md){return a===!1?a=0:a===!0&&(a=md),{x:Gf(a,"left","right"),y:Gf(a,"top","bottom")}}function Gf(a,s,l){return{min:yf(a,s),max:yf(a,l)}}function yf(a,s){return typeof a=="number"?a:a[s]||0}const lA=new WeakMap;class cA{constructor(s){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=at(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=s}start(s,{snapToCursor:l=!1,distanceThreshold:r}={}){const{presenceContext:d}=this.visualElement;if(d&&d.isPresent===!1)return;const p=k=>{l&&this.snapToCursor(Jo(k).point),this.stopAnimation()},g=(k,G)=>{const{drag:y,dragPropagation:M,onDragStart:j}=this.getProps();if(y&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=qy(y),!this.openDragLock))return;this.latestPointerEvent=k,this.latestPanInfo=G,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),on(H=>{let X=this.getAxisMotionValue(H).get()||0;if(ln.test(X)){const{projection:L}=this.visualElement;if(L&&L.layout){const D=L.layout.layoutBox[H];D&&(X=_t(D)*(parseFloat(X)/100))}}this.originPoint[H]=X}),j&&Re.update(()=>j(k,G),!1,!0),sd(this.visualElement,"transform");const{animationState:I}=this.visualElement;I&&I.setActive("whileDrag",!0)},h=(k,G)=>{this.latestPointerEvent=k,this.latestPanInfo=G;const{dragPropagation:y,dragDirectionLock:M,onDirectionLock:j,onDrag:I}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:H}=G;if(M&&this.currentDirection===null){this.currentDirection=dA(H),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",G.point,H),this.updateAxis("y",G.point,H),this.visualElement.render(),I&&Re.update(()=>I(k,G),!1,!0)},f=(k,G)=>{this.latestPointerEvent=k,this.latestPanInfo=G,this.stop(k,G),this.latestPointerEvent=null,this.latestPanInfo=null},b=()=>{const{dragSnapToOrigin:k}=this.getProps();(k||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:x}=this.getProps();this.panSession=new Nx(s,{onSessionStart:p,onStart:g,onMove:h,onSessionEnd:f,resumeAnimation:b},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:x,distanceThreshold:r,contextWindow:jx(this.visualElement),element:this.visualElement.current})}stop(s,l){const r=s||this.latestPointerEvent,d=l||this.latestPanInfo,p=this.isDragging;if(this.cancel(),!p||!d||!r)return;const{velocity:g}=d;this.startAnimation(g);const{onDragEnd:h}=this.getProps();h&&Re.postRender(()=>h(r,d))}cancel(){this.isDragging=!1;const{projection:s,animationState:l}=this.visualElement;s&&(s.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),l&&l.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(s,l,r){const{drag:d}=this.getProps();if(!r||!_r(s,d,this.currentDirection))return;const p=this.getAxisMotionValue(s);let g=this.originPoint[s]+r[s];this.constraints&&this.constraints[s]&&(g=nA(g,this.constraints[s],this.elastic[s])),p.set(g)}resolveConstraints(){var p;const{dragConstraints:s,dragElastic:l}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(p=this.visualElement.projection)==null?void 0:p.layout,d=this.constraints;s&&As(s)?this.constraints||(this.constraints=this.resolveRefConstraints()):s&&r?this.constraints=aA(r.layoutBox,s):this.constraints=!1,this.elastic=rA(l),d!==this.constraints&&!As(s)&&r&&this.constraints&&!this.hasMutatedConstraints&&on(g=>{this.constraints!==!1&&this.getAxisMotionValue(g)&&(this.constraints[g]=iA(r.layoutBox[g],this.constraints[g]))})}resolveRefConstraints(){const{dragConstraints:s,onMeasureDragConstraints:l}=this.getProps();if(!s||!As(s))return!1;const r=s.current,{projection:d}=this.visualElement;if(!d||!d.layout)return!1;d.root&&(d.root.scroll=void 0,d.root.updateScroll());const p=dv(r,d.root,this.visualElement.getTransformPagePoint());let g=sA(d.layout.layoutBox,p);if(l){const h=l(lv(g));this.hasMutatedConstraints=!!h,h&&(g=W0(h))}return g}startAnimation(s){const{drag:l,dragMomentum:r,dragElastic:d,dragTransition:p,dragSnapToOrigin:g,onDragTransitionEnd:h}=this.getProps(),f=this.constraints||{},b=on(x=>{if(!_r(x,l,this.currentDirection))return;let k=f&&f[x]||{};(g===!0||g===x)&&(k={min:0,max:0});const G=d?200:1e6,y=d?40:1e7,M={type:"inertia",velocity:r?s[x]:0,bounceStiffness:G,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...p,...k};return this.startAxisValueAnimation(x,M)});return Promise.all(b).then(h)}startAxisValueAnimation(s,l){const r=this.getAxisMotionValue(s);return sd(this.visualElement,s),r.start(Cd(s,r,0,l,this.visualElement,!1))}stopAnimation(){on(s=>this.getAxisMotionValue(s).stop())}getAxisMotionValue(s){const l=`_drag${s.toUpperCase()}`,d=this.visualElement.getProps()[l];return d||this.visualElement.getValue(s,this.visualElement.latestValues[s]??0)}snapToCursor(s){on(l=>{const{drag:r}=this.getProps();if(!_r(l,r,this.currentDirection))return;const{projection:d}=this.visualElement,p=this.getAxisMotionValue(l);if(d&&d.layout){const{min:g,max:h}=d.layout.layoutBox[l],f=p.get()||0;p.set(s[l]-qe(g,h,.5)+f)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:s,dragConstraints:l}=this.getProps(),{projection:r}=this.visualElement;if(!As(l)||!r||!this.constraints)return;this.stopAnimation();const d={x:0,y:0};on(g=>{const h=this.getAxisMotionValue(g);if(h&&this.constraints!==!1){const f=h.get();d[g]=oA({min:f,max:f},this.constraints[g])}});const{transformTemplate:p}=this.visualElement.getProps();this.visualElement.current.style.transform=p?p({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),on(g=>{if(!_r(g,s,null))return;const h=this.getAxisMotionValue(g),{min:f,max:b}=this.constraints[g];h.set(qe(f,b,d[g]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;lA.set(this.visualElement,this);const s=this.visualElement.current,l=zo(s,"pointerdown",b=>{const{drag:x,dragListener:k=!0}=this.getProps(),G=b.target,y=G!==s&&Uy(G);x&&k&&!y&&this.start(b)});let r;const d=()=>{const{dragConstraints:b}=this.getProps();As(b)&&b.current&&(this.constraints=this.resolveRefConstraints(),r||(r=uA(s,b.current,()=>this.scalePositionWithinConstraints())))},{projection:p}=this.visualElement,g=p.addEventListener("measure",d);p&&!p.layout&&(p.root&&p.root.updateScroll(),p.updateLayout()),Re.read(d);const h=Ko(window,"resize",()=>this.scalePositionWithinConstraints()),f=p.addEventListener("didUpdate",(({delta:b,hasLayoutChanged:x})=>{this.isDragging&&x&&(on(k=>{const G=this.getAxisMotionValue(k);G&&(this.originPoint[k]+=b[k].translate,G.set(G.get()+b[k].translate))}),this.visualElement.render())}));return()=>{h(),l(),g(),f&&f(),r&&r()}}getProps(){const s=this.visualElement.getProps(),{drag:l=!1,dragDirectionLock:r=!1,dragPropagation:d=!1,dragConstraints:p=!1,dragElastic:g=md,dragMomentum:h=!0}=s;return{...s,drag:l,dragDirectionLock:r,dragPropagation:d,dragConstraints:p,dragElastic:g,dragMomentum:h}}}function vf(a){let s=!0;return()=>{if(s){s=!1;return}a()}}function uA(a,s,l){const r=jb(a,vf(l)),d=jb(s,vf(l));return()=>{r(),d()}}function _r(a,s,l){return(s===!0||s===a)&&(l===null||l===a)}function dA(a,s=10){let l=null;return Math.abs(a.y)>s?l="y":Math.abs(a.x)>s&&(l="x"),l}class pA extends ca{constructor(s){super(s),this.removeGroupControls=Zt,this.removeListeners=Zt,this.controls=new cA(s)}mount(){const{dragControls:s}=this.node.getProps();s&&(this.removeGroupControls=s.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Zt}update(){const{dragControls:s}=this.node.getProps(),{dragControls:l}=this.node.prevProps||{};s!==l&&(this.removeGroupControls(),s&&(this.removeGroupControls=s.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Du=a=>(s,l)=>{a&&Re.update(()=>a(s,l),!1,!0)};class gA extends ca{constructor(){super(...arguments),this.removePointerDownListener=Zt}onPointerDown(s){this.session=new Nx(s,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:jx(this.node)})}createPanHandlers(){const{onPanSessionStart:s,onPanStart:l,onPan:r,onPanEnd:d}=this.node.getProps();return{onSessionStart:Du(s),onStart:Du(l),onMove:Du(r),onEnd:(p,g)=>{delete this.session,d&&Re.postRender(()=>d(p,g))}}}mount(){this.removePointerDownListener=zo(this.node.current,"pointerdown",s=>this.onPointerDown(s))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let qu=!1;class mA extends O.Component{componentDidMount(){const{visualElement:s,layoutGroup:l,switchLayoutGroup:r,layoutId:d}=this.props,{projection:p}=s;p&&(l.group&&l.group.add(p),r&&r.register&&d&&r.register(p),qu&&p.root.didUpdate(),p.addEventListener("animationComplete",()=>{this.safeToRemove()}),p.setOptions({...p.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Nr.hasEverUpdated=!0}getSnapshotBeforeUpdate(s){const{layoutDependency:l,visualElement:r,drag:d,isPresent:p}=this.props,{projection:g}=r;return g&&(g.isPresent=p,s.layoutDependency!==l&&g.setOptions({...g.options,layoutDependency:l}),qu=!0,d||s.layoutDependency!==l||l===void 0||s.isPresent!==p?g.willUpdate():this.safeToRemove(),s.isPresent!==p&&(p?g.promote():g.relegate()||Re.postRender(()=>{const h=g.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:s,layoutAnchor:l}=this.props,{projection:r}=s;r&&(r.options.layoutAnchor=l,r.root.didUpdate(),qd.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:s,layoutGroup:l,switchLayoutGroup:r}=this.props,{projection:d}=s;qu=!0,d&&(d.scheduleCheckAfterUnmount(),l&&l.group&&l.group.remove(d),r&&r.deregister&&r.deregister(d))}safeToRemove(){const{safeToRemove:s}=this.props;s&&s()}render(){return null}}function wx(a){const[s,l]=kx(),r=O.useContext(xd);return i.jsx(mA,{...a,layoutGroup:r,switchLayoutGroup:O.useContext(Ix),isPresent:s,safeToRemove:l})}const hA={pan:{Feature:gA},drag:{Feature:pA,ProjectionNode:_x,MeasureLayout:wx}};function Mf(a,s,l){const{props:r}=a;a.animationState&&r.whileHover&&a.animationState.setActive("whileHover",l==="Start");const d="onHover"+l,p=r[d];p&&Re.postRender(()=>p(s,Jo(s)))}class bA extends ca{mount(){const{current:s}=this.node;s&&(this.unmount=Oy(s,(l,r)=>(Mf(this.node,r,"Start"),d=>Mf(this.node,d,"End"))))}unmount(){}}class fA extends ca{constructor(){super(...arguments),this.isActive=!1}onFocus(){let s=!1;try{s=this.node.current.matches(":focus-visible")}catch{s=!0}!s||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Zo(Ko(this.node.current,"focus",()=>this.onFocus()),Ko(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Af(a,s,l){const{props:r}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&r.whileTap&&a.animationState.setActive("whileTap",l==="Start");const d="onTap"+(l==="End"?"":l),p=r[d];p&&Re.postRender(()=>p(s,Jo(s)))}class xA extends ca{mount(){const{current:s}=this.node;if(!s)return;const{globalTapTarget:l,propagate:r}=this.node.props;this.unmount=Py(s,(d,p)=>(Af(this.node,p,"Start"),(g,{success:h})=>Af(this.node,g,h?"End":"Cancel")),{useGlobalTarget:l,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const hd=new WeakMap,Ru=new WeakMap,_A=a=>{const s=hd.get(a.target);s&&s(a)},kA=a=>{a.forEach(_A)};function GA({root:a,...s}){const l=a||document;Ru.has(l)||Ru.set(l,{});const r=Ru.get(l),d=JSON.stringify(s);return r[d]||(r[d]=new IntersectionObserver(kA,{root:a,...s})),r[d]}function yA(a,s,l){const r=GA(s);return hd.set(a,l),r.observe(a),()=>{hd.delete(a),r.unobserve(a)}}const vA={some:0,all:1};class MA extends ca{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var f;(f=this.stopObserver)==null||f.call(this);const{viewport:s={}}=this.node.getProps(),{root:l,margin:r,amount:d="some",once:p}=s,g={root:l?l.current:void 0,rootMargin:r,threshold:typeof d=="number"?d:vA[d]},h=b=>{const{isIntersecting:x}=b;if(this.isInView===x||(this.isInView=x,p&&!x&&this.hasEnteredView))return;x&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",x);const{onViewportEnter:k,onViewportLeave:G}=this.node.getProps(),y=x?k:G;y&&y(b)};this.stopObserver=yA(this.node.current,g,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:s,prevProps:l}=this.node;["amount","margin","root"].some(AA(s,l))&&this.startObserver()}unmount(){var s;(s=this.stopObserver)==null||s.call(this),this.hasEnteredView=!1,this.isInView=!1}}function AA({viewport:a={}},{viewport:s={}}={}){return l=>a[l]!==s[l]}const TA={inView:{Feature:MA},tap:{Feature:xA},focus:{Feature:fA},hover:{Feature:bA}},IA={layout:{ProjectionNode:_x,MeasureLayout:wx}},SA={...JM,...TA,...hA,...IA},wn=KM(SA,XM),Cx=O.createContext(void 0),jA={LATAM:{"nav.inicio":"Inicio","nav.novedades":"Novedades","nav.servicios":"Servicios","nav.evo":"Evo","nav.otros":"Otros códigos","nav.guia":"Guía","nav.tutoriales":"Tutoriales","nav.descargas":"Descargas","nav.guia_script":"Guía Script MGG","home.search_placeholder":"Nombre o código...","home.sort_az":"Nombre A-Z","home.sort_za":"Nombre Z-A","home.sort_code_asc":"Código Asc.","home.sort_code_desc":"Código Desc.","home.sort_hp_desc":"M. Mayor Vida","home.sort_atk_desc":"M. Mayor Ataque","home.sort_spd_desc":"M. Mayor Velocidad","home.show":"Mostrar","home.hide":"Ocultar","home.filtered":"Filtrados","home.total_base":"Base Total","services.title":"Servicios Exclusivos","services.subtitle":"Potencia tu cuenta con nuestros servicios especializados de Mutants: Genetic Gladiators.","services.buy":"Adquirir","services.payment_methods":"Métodos de Pago","services.contact_us":"Contáctanos","region.latam":"LATAM","region.usd":"USD","tip.label":"Tip:","tip.text":"Para asegurar la sincronización de datos, se recomienda acceder vía Facebook o limpiar cookies/caché del navegador (Modo Incógnito).","footer.renovated":"Versión renovada","footer.nav":"Navegación","footer.legal":"Información Legal","footer.terms":"Términos y Condiciones","footer.rights":"© 2026 Smith Luque. Todos los derechos reservados.","footer.desc":"Base de datos de códigos de Mutantes de MGG para Game Guardian. Aquí hay contenido para aprender y recursos para usar.","whatsapp.title":"Grupo de WhatsApp","whatsapp.desc":"Únete para ayuda, consejos y enseñanza dentro de la comunidad.","whatsapp.btn":"Unirme al grupo","stats.mutants":"Mutantes","stats.version":"Versión","home.main_database":"Base principal","home.main_desc":"Lista completa de mutantes con búsqueda rápida, filtros por genes y carga automática desde tu archivo de códigos.","home.featured_mutants":"Novedades Destacadas","home.explore_catalog":"Explorar Catálogo","home.reset_engine":"Reiniciar Motor","home.genetic_config":"Configuración Genética","home.search_engine":"Motor de Búsqueda","home.sort_filters":"Filtros de Orden","home.no_results":"No se encontraron mutantes con esos filtros.","home.hidden_results":"Resultados ocultos.","home.active":"Activos","home.total":"Total","gene.dominant":"Dominante","gene.active":"Activo","gene.inactive":"Inactivo","layout.by_author":"Por Smith Luque","layout.select_language":"SELECCIONAR IDIOMA","layout.active_support":"Grupo Activo","mutant.verified":"Verificado","mutant.extract_code":"Extraer Código","home.load_more_rem":"Cargar más ({rem} restantes)","layout.color_theme":"Color de Diseño","home.single_gene_only":"Solo 1 Gen (Monogénicos)","home.all_genes":"Todos los genes","home.announcement_title":"Anuncio Importante","home.announcement_desc":"Me disculpo sinceramente por haber publicado previamente algunas estadísticas con errores. El problema ya ha sido completamente solucionado con los datos correctos. Si detectas cualquier otro inconveniente o error, por favor no dudes en contactarme.","home.names_language":"Idioma de Nombres","profile.developer":"Desarrollador Full Stack","profile.founder":"Fundador de Sistema Mutodex"},USD:{"nav.inicio":"Home","nav.novedades":"News","nav.servicios":"Services","nav.evo":"Evo Calc","nav.otros":"Other Codes","nav.guia":"Guide","nav.tutoriales":"Tutorials","nav.descargas":"Downloads","nav.guia_script":"MGG Script Guide","home.search_placeholder":"Name or code...","home.sort_az":"Name A-Z","home.sort_za":"Name Z-A","home.sort_code_asc":"Code Asc.","home.sort_code_desc":"Code Desc.","home.sort_hp_desc":"M. Highest HP","home.sort_atk_desc":"M. Highest ATK","home.sort_spd_desc":"M. Highest Speed","home.show":"Show","home.hide":"Hide","home.filtered":"Filtered","home.total_base":"Total Base","services.title":"Exclusive Services","services.subtitle":"Boost your account with our specialized Mutants: Genetic Gladiators services.","services.buy":"Purchase","services.payment_methods":"Payment Methods","services.contact_us":"Contact Us","region.latam":"LATAM","region.usd":"USD","tip.label":"Tip:","tip.text":"To ensure data synchronization, it is recommended to access via Facebook or clear browser cookies/cache (Incognito Mode).","footer.renovated":"Renewed Version","footer.nav":"Navigation","footer.legal":"Legal Information","footer.terms":"Terms & Conditions","footer.rights":"© 2026 Smith Luque. All rights reserved.","footer.desc":"MGG Mutant code database for Game Guardian. Here is content to learn and resources to use.","whatsapp.title":"WhatsApp Group","whatsapp.desc":"Join for help, tips, and teaching within the community.","whatsapp.btn":"Join the group","stats.mutants":"Mutants","stats.version":"Version","home.main_database":"Main Database","home.main_desc":"Full mutant list with fast search, gene filters, and automatic code loading.","home.featured_mutants":"Featured New Mutants","home.explore_catalog":"Explore Catalog","home.reset_engine":"Reset Engine","home.genetic_config":"Genetic Configuration","home.search_engine":"Search Engine","home.sort_filters":"Sort Filters","home.no_results":"No mutants found with those filters.","home.hidden_results":"Results hidden.","home.active":"Active","home.total":"Total","gene.dominant":"Dominant","gene.active":"Active","gene.inactive":"Inactive","layout.by_author":"By Smith Luque","layout.select_language":"SELECT LANGUAGE","layout.active_support":"Active Support","mutant.verified":"Verified","mutant.extract_code":"Extract Code","home.load_more_rem":"Load More ({rem} remaining)","layout.color_theme":"Design Color","home.single_gene_only":"Single Gene Only (Pure)","home.all_genes":"All Genes","home.announcement_title":"Important Announcement","home.announcement_desc":"I sincerely apologize for previously publishing some incorrect stats. The issue has now been fully resolved with correct data. If you notice any other issues, please feel free to contact me.","home.names_language":"Names Language","profile.developer":"Full Stack Developer","profile.founder":"Founder of Sistema Mutodex"},PT:{"nav.inicio":"Início","nav.novedades":"Novidades","nav.servicios":"Serviços","nav.evo":"Evo","nav.otros":"Outros códigos","nav.guia":"Guia","nav.tutoriales":"Tutoriais","nav.descargas":"Downloads","nav.guia_script":"Guia Script MGG","home.search_placeholder":"Nome ou código...","home.sort_az":"Nome A-Z","home.sort_za":"Nome Z-A","home.sort_code_asc":"Código Cresc.","home.sort_code_desc":"Código Decresc.","home.sort_hp_desc":"M. Maior Vida","home.sort_atk_desc":"M. Maior Ataque","home.sort_spd_desc":"M. Maior Velocidade","home.show":"Mostrar","home.hide":"Ocultar","home.filtered":"Filtrados","home.total_base":"Total Base","services.title":"Serviços Exclusivos","services.subtitle":"Melhore sua conta com nossos serviços especializados de Mutants: Genetic Gladiators.","services.buy":"Adquirir","services.payment_methods":"Métodos de Pagamento","services.contact_us":"Contate-nos","region.latam":"LATAM","region.usd":"USD","tip.label":"Dica:","tip.text":"Para garantir a sincronização de dados, recomenda-se acessar via Facebook ou limpar os cookies/cache do navegador (Modo Incógnito).","footer.renovated":"Versão Renovada","footer.nav":"Navegação","footer.legal":"Informação Legal","footer.terms":"Termos e Condições","footer.rights":"© 2026 Smith Luque. Todos os direitos reservados.","footer.desc":"Banco de dados de códigos de Mutants MGG para Game Guardian. Conteúdos para aprendizagem e recursos.","whatsapp.title":"Grupo de WhatsApp","whatsapp.desc":"Entre para obter ajuda, dicas e suporte na comunidade.","whatsapp.btn":"Entrar no grupo","stats.mutants":"Mutantes","stats.version":"Versão","home.main_database":"Base Principal","home.main_desc":"Lista completa de mutantes com busca rápida, filtros de genes e carregamento automático a partir do seu arquivo de códigos.","home.featured_mutants":"Novidades em Destaque","home.explore_catalog":"Explorar Catálogo","home.reset_engine":"Reiniciar Mecanismo","home.genetic_config":"Configuração Genética","home.search_engine":"Mecanismo de Busca","home.sort_filters":"Filtros de Ordenação","home.no_results":"Nenhum mutante encontrado com esses filtros.","home.hidden_results":"Resultados ocultos.","home.active":"Ativos","home.total":"Total","gene.dominant":"Dominante","gene.active":"Ativo","gene.inactive":"Inativo","layout.by_author":"Por Smith Luque","layout.select_language":"SELECIONAR IDIOMA","layout.active_support":"Grupo Ativo","mutant.verified":"Verificado","mutant.extract_code":"Extrair Código","home.load_more_rem":"Carregar mais ({rem} restantes)","layout.color_theme":"Cor do Design","home.single_gene_only":"Apenas 1 Gene (Monogênicos)","home.all_genes":"Todos os genes","home.announcement_title":"Anúncio Importante","home.announcement_desc":"Peço desculpas sinceras por postar anteriormente algumas estatísticas com erros. O problema já foi totalmente resolvido com os dados corretos. Se notar qualquer outro problema, entre em contato comigo.","home.names_language":"Idioma dos Nomes","profile.developer":"Desenvolvedor Full Stack","profile.founder":"Fundador do Sistema Mutodex"},FR:{"nav.inicio":"Accueil","nav.novedades":"Actualités","nav.servicios":"Services","nav.evo":"Evos","nav.otros":"Autres codes","nav.guia":"Guide","nav.tutoriales":"Tutoriels","nav.descargas":"Téléchargements","nav.guia_script":"Guide Script MGG","home.search_placeholder":"Nom ou code...","home.sort_az":"Nom A-Z","home.sort_za":"Nom Z-A","home.sort_code_asc":"Code Asc.","home.sort_code_desc":"Code Desc.","home.sort_hp_desc":"M. Plus de vie","home.sort_atk_desc":"M. Plus d'attaque","home.sort_spd_desc":"M. Plus de vitesse","home.show":"Afficher","home.hide":"Masquer","home.filtered":"Filtrés","home.total_base":"Base totale","services.title":"Services exclusifs","services.subtitle":"Améliorez votre compte avec nos services spécialisés Mutants: Genetic Gladiators.","services.buy":"Acheter","services.payment_methods":"Modes de paiement","services.contact_us":"Contactez-nous","region.latam":"LATAM","region.usd":"USD","tip.label":"Conseil:","tip.text":"Pour garantir la synchronisation des données, il est recommandé de se connecter via Facebook ou d'effacer les cookies/cache du navigateur (Mode Incognito).","footer.renovated":"Version rénovée","footer.nav":"Navigation","footer.legal":"Informations légales","footer.terms":"Conditions générales","footer.rights":"© 2026 Smith Luque. Tous droits réservés.","footer.desc":"Base de données des codes Mutants MGG pour Game Guardian. Tutoriels d'apprentissage et ressources à utiliser.","whatsapp.title":"Groupe WhatsApp","whatsapp.desc":"Rejoignez-nous pour obtenir de l'aide, des conseils et échanger avec la communauté.","whatsapp.btn":"Rejoindre le groupe","stats.mutants":"Mutants","stats.version":"Version","home.main_database":"Base principale","home.main_desc":"Liste complète des mutants avec recherche rapide, filtres de gènes et chargement automatique depuis votre fichier de codes.","home.featured_mutants":"Nouveautés en Vedette","home.explore_catalog":"Explorer le Catalogue","home.reset_engine":"Réinitialiser le moteur","home.genetic_config":"Configuration Génétique","home.search_engine":"Moteur de Recherche","home.sort_filters":"Filtres de Tri","home.no_results":"Aucun mutant trouvé avec ces filtres.","home.hidden_results":"Résultats masqués.","home.active":"Actifs","home.total":"Total","gene.dominant":"Dominant","gene.active":"Actif","gene.inactive":"Inactif","layout.by_author":"Par Smith Luque","layout.select_language":"SÉLECTIONNER LA LANGUE","layout.active_support":"Groupe Actif","mutant.verified":"Vérifié","mutant.extract_code":"Extraire le Code","home.load_more_rem":"Charger plus ({rem} restants)","layout.color_theme":"Couleur du Design","home.single_gene_only":"Un seul gène (Monogénique)","home.all_genes":"Tous les gènes","home.announcement_title":"Annonce Importante","home.announcement_desc":"Je m'excuse sincèrement pour avoir publié précédemment des statistiques erronées. Le problème a été entièrement résolu avec les données correctes. Si vous remarquez un autre problème, n'hésitez pas à me contacter.","home.names_language":"Langue de Noms","profile.developer":"Développeur Full Stack","profile.founder":"Fondateur de Système Mutodex"},DE:{"nav.inicio":"Startseite","nav.novedades":"Neuigkeiten","nav.servicios":"Dienste","nav.evo":"Evo","nav.otros":"Andere Codes","nav.guia":"Leitfaden","nav.tutoriales":"Tutorials","nav.descargas":"Downloads","nav.guia_script":"MGG Script-Guide","home.search_placeholder":"Name oder Code...","home.sort_az":"Name A-Z","home.sort_za":"Name Z-A","home.sort_code_asc":"Code Aufst.","home.sort_code_desc":"Code Abst.","home.sort_hp_desc":"M. Höchste LP","home.sort_atk_desc":"M. Höchster Angriff","home.sort_spd_desc":"M. Höchste Geschwindigkeit","home.show":"Anzeigen","home.hide":"Ausblenden","home.filtered":"Gefiltert","home.total_base":"Gesamtbasis","services.title":"Exklusive Dienste","services.subtitle":"Verbessern Sie Ihr Konto mit unseren spezialisierten Mutants: Genetic Gladiators-Diensten.","services.buy":"Erwerben","services.payment_methods":"Zahlungsarten","services.contact_us":"Kontakt","region.latam":"LATAM","region.usd":"USD","tip.label":"Tipp:","tip.text":"Um die Datensynchronisation sicherzustellen, wird empfohlen, sich über Facebook anzumelden oder Browser-Cookies/-Cache zu löschen (Inkognito-Modus).","footer.renovated":"Renovierte Version","footer.nav":"Navigation","footer.legal":"Rechtliche Hinweise","footer.terms":"AGB","footer.rights":"© 2026 Smith Luque. Alle Rechte vorbehalten.","footer.desc":"MGG Mutanten-Code-Datenbank für Game Guardian. Tutorials zum Lernen und Ressourcen zur Nutzung.","whatsapp.title":"WhatsApp-Gruppe","whatsapp.desc":"Treten Sie bei für Hilfe, Tipps und Austausch in der Gesellschaft.","whatsapp.btn":"Gruppe beitreten","stats.mutants":"Mutanten","stats.version":"Version","home.main_database":"Haupt-Datenbank","home.main_desc":"Vollständige Mutantenliste mit Schnellsuche, Genfiltern und automatischem Laden von Codes.","home.featured_mutants":"Hervorgehobene Neuigkeiten","home.explore_catalog":"Katalog erkunden","home.reset_engine":"Zuchtrechner zurücksetzen","home.genetic_config":"Genetische Konfiguration","home.search_engine":"Suchmaschine","home.sort_filters":"Sortierfilter","home.no_results":"Keine Mutanten mit diesen Filtern gefunden.","home.hidden_results":"Ergebnisse ausgeblendet.","home.active":"Aktiv","home.total":"Gesamt","gene.dominant":"Dominant","gene.active":"Aktiv","gene.inactive":"Inaktiv","layout.by_author":"Von Smith Luque","layout.select_language":"SPRACHE AUSWÄHLEN","layout.active_support":"Aktive Gruppe","mutant.verified":"Verifiziert","mutant.extract_code":"Code Extrahieren","home.load_more_rem":"Mehr laden ({rem} verbleibend)","layout.color_theme":"Design Farbe","home.single_gene_only":"Nur 1 Gen (Monogenisch)","home.all_genes":"Alle Gene","home.announcement_title":"Wichtige Ankündigung","home.announcement_desc":"Ich entschuldige mich aufrichtig dafür, dass ich zuvor fehlerhafte Statistiken veröffentlicht habe. Das Problem wurde mit den korrekten Daten vollständig behoben. Wenn Sie weitere Fehler bemerken, kontaktieren Sie mich bitte.","home.names_language":"Sprache der Namen","profile.developer":"Full Stack Entwickler","profile.founder":"Gründer von Sistema Mutodex"}},NA={blue:{brand:"#2563eb",brand2:"#3b82f6"},green:{brand:"#14532d",brand2:"#15803d"},red:{brand:"#dc2626",brand2:"#ef4444"},pink:{brand:"#db2777",brand2:"#ec4899"},purple:{brand:"#7c3aed",brand2:"#8b5cf6"},white:{brand:"#d1d5db",brand2:"#ffffff"}},EA=({children:a})=>{const[s,l]=O.useState(()=>localStorage.getItem("user-color-theme")||"blue"),r=G=>{localStorage.setItem("user-color-theme",G),l(G)};O.useEffect(()=>{const G=NA[s];G&&(document.documentElement.style.setProperty("--blue-brand",G.brand),document.documentElement.style.setProperty("--blue-brand-2",G.brand2))},[s]);const[d,p]=O.useState(()=>{const G=localStorage.getItem("user-region"),y=localStorage.getItem("user-country-code"),M=!!localStorage.getItem("user-manual-force");let j=G||"LATAM";y==="PE"&&(j="LATAM");const I=y?g(y):1;return{region:j,countryCode:y||null,multiplier:I,isManual:M,detectedCountry:null}});O.useEffect(()=>{const G=localStorage.getItem("user-region"),y=localStorage.getItem("user-country-code"),M=!!localStorage.getItem("user-manual-force");y==="PE"&&G==="USD"&&!M&&(localStorage.setItem("user-region","LATAM"),p(j=>({...j,region:"LATAM"})))},[]);function g(G){const y=G.toUpperCase(),M=Xf.find(j=>j.id.toUpperCase()===y);if(M)return M.rate;for(const[j,I]of Object.entries(Nk))if(I.includes(y))return parseFloat(j);return lb.includes(y)?1.5:1}const h=async()=>{var G;try{const j=(G=(await(await fetch("https://ipapi.co/json/")).json()).country_code)==null?void 0:G.toUpperCase();if(!j)return;const I=lb.includes(j),H=j==="PE",X=g(j),L=localStorage.getItem("user-region");let D=I?"USD":"LATAM";L&&(H&&L==="USD"&&!localStorage.getItem("user-manual-force")?D="LATAM":D=L),p(Q=>({...Q,region:D,countryCode:Q.isManual?Q.countryCode:j,detectedCountry:j,multiplier:Q.isManual?Q.multiplier:X}))}catch(y){console.error("IP Detection failed:",y)}};O.useEffect(()=>{h()},[]);const f=G=>{localStorage.setItem("user-region",G),localStorage.setItem("user-manual-force","true"),p(y=>({...y,region:G,isManual:!0}))},b=G=>{const y=G.toUpperCase(),M=g(y),I=["PE","MX","AR","CL","CO","BO","VE","EC","UY","PY","PA","PR","CR","HN","SV","NI","GT","DO","ES"].includes(y)?"LATAM":"USD";localStorage.setItem("user-region",I),localStorage.setItem("user-country-code",y),localStorage.setItem("user-manual-force","true"),p(H=>({...H,region:I,countryCode:y,multiplier:M,isManual:!0}))},x=()=>{localStorage.removeItem("user-region"),localStorage.removeItem("user-country-code"),localStorage.removeItem("user-manual-force"),p(G=>({...G,isManual:!1})),h()},k=(G,y)=>{let M=jA[d.region][G]||G;return y&&Object.entries(y).forEach(([j,I])=>{M=M.replace(`{${j}}`,String(I))}),M};return i.jsx(Cx.Provider,{value:{...d,colorTheme:s,setColorTheme:r,setRegion:f,setCountry:b,resetSelection:x,translate:k},children:a})},St=()=>{const a=O.useContext(Cx);if(a===void 0)throw new Error("useRegion must be used within a RegionProvider");return a},Tf={"/":Pu,"/novedades":Bf,"/servicios":Ro,"/evo":Ik,"/otros":zu,"/guia":Uu,"/tutoriales":yr,"/descargas":Uf},kr={LATAM:{flag:"🇪🇸",label:"Español"},USD:{flag:"🇺🇸",label:"English"},PT:{flag:"🇵🇹",label:"Português"},FR:{flag:"🇫🇷",label:"Français"},DE:{flag:"🇩🇪",label:"Deutsch"}};function wA({children:a,currentPath:s,onNavigate:l,isOnline:r}){var D,Q;const[d,p]=O.useState(!1),[g,h]=O.useState(!1),{region:f,setRegion:b,countryCode:x,setCountry:k,translate:G,colorTheme:y,setColorTheme:M}=St(),j=f!=="LATAM"&&f!=="PT"?"https://chat.whatsapp.com/IdBIvXWUPNjDLcPmBvkp1B":fd,I=Y=>{l(Y),p(!1),window.scrollTo({top:0,behavior:"smooth"})},H="text-blue-brand-2",X="from-blue-brand to-blue-brand-2";return i.jsxs("div",{className:"min-h-screen",children:[i.jsx("div",{className:"grid-overlay"}),i.jsxs("header",{className:"site-header sticky top-0 z-50 transition-all duration-300",children:[i.jsx("div",{className:"absolute inset-0 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)] bg-[#050a14]/60"}),i.jsxs("div",{className:"mx-auto px-4 lg:px-8 header-inner relative flex items-center justify-between min-h-[64px] max-w-[1400px]",children:[i.jsxs("div",{className:"brand flex items-center gap-3 cursor-pointer group",onClick:()=>I("/"),children:[i.jsxs("div",{className:"relative",children:[i.jsx("div",{className:"absolute inset-0 blur-md opacity-0 group-hover:opacity-40 transition-opacity bg-blue-brand"}),i.jsx("div",{className:`brand-logo w-9 h-9 md:w-10 md:h-10 relative flex items-center justify-center rounded-lg md:rounded-xl bg-gradient-to-br ${X} overflow-hidden shadow-lg group-hover:scale-105 transition-transform shrink-0 border border-white/20`,children:i.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true",alt:"Logo MGG",className:"w-full h-full object-cover"})})]}),i.jsxs("div",{className:"flex flex-col text-left",children:[i.jsx("strong",{className:`block text-white text-[13px] md:text-[15px] font-black tracking-tight uppercase leading-none mb-0.5 group-hover:${H} transition-colors`,children:"Mutodex MGG"}),i.jsx("span",{className:`block text-[7px] md:text-[9px] ${H} uppercase tracking-[0.25em] font-black opacity-80`,children:G("layout.by_author")})]})]}),i.jsx("nav",{className:"hidden",children:_u.map(Y=>{const q=Tf[Y.path]||Pu,K=s===Y.path,F=Y.key;return i.jsxs("button",{onClick:()=>I(Y.path),className:`flex items-center gap-2 px-3 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all duration-300 relative group/btn ${K?"bg-blue-brand/20 border-blue-brand text-white shadow-[0_2px_15px_rgba(37,99,235,0.25)]":"text-slate-400 border-transparent hover:bg-white/5 hover:text-white"}`,children:[i.jsx(q,{size:14,className:`${K?"text-blue-brand-2 animate-pulse":"text-slate-400 group-hover/btn:scale-110 transition-transform"}`}),i.jsx("span",{children:G(F)})]},Y.path)})}),i.jsxs("div",{className:"flex items-center gap-2 md:gap-3",children:[i.jsxs("div",{className:"hidden",children:[i.jsxs("span",{className:"text-[10px] text-slate-400 font-black uppercase tracking-wider mr-1",children:[G("layout.color_theme"),":"]}),["blue","green","red","pink","purple","white"].map(Y=>{const q=y===Y,K={blue:"bg-[#2563eb]",green:"bg-[#14532d]",red:"bg-[#dc2626]",pink:"bg-[#db2777]",purple:"bg-[#7c3aed]",white:"bg-white"};return i.jsx("button",{onClick:()=>M(Y),title:Y.toUpperCase(),className:`w-4.5 h-4.5 rounded-full ${K[Y]} transition-all duration-300 relative shrink-0 cursor-pointer ${q?"scale-115 ring-2 ring-offset-2 ring-offset-[#050a14] ring-white shadow-lg":"opacity-60 hover:opacity-100 hover:scale-105"}`,children:q&&i.jsx("span",{className:"absolute inset-0 m-auto w-1 h-1 rounded-full bg-[#050a14]"})},Y)})]}),i.jsxs("div",{className:"relative",children:[i.jsxs("button",{onClick:()=>h(!g),className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer",children:[i.jsx("span",{className:"text-sm md:text-base",children:((D=kr[f])==null?void 0:D.flag)||"🇪🇸"}),i.jsx("span",{className:"hidden sm:inline",children:((Q=kr[f])==null?void 0:Q.label)||"Español"}),i.jsx("span",{className:"text-slate-500 text-[8px] opacity-60",children:"▼"})]}),i.jsx(wu,{children:g&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>h(!1)}),i.jsxs(wn.div,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.95},transition:{duration:.15},className:"absolute right-0 mt-2 w-48 rounded-2xl bg-[#091224] border border-white/10 shadow-2xl p-2 z-50 flex flex-col gap-1",children:[i.jsx("span",{className:"text-[8px] text-slate-500 uppercase font-black tracking-widest block px-3 py-1.5 border-b border-white/5 mb-1",children:G("layout.select_language")}),Object.keys(kr).map(Y=>{const q=kr[Y],K=f===Y;return i.jsxs("button",{onClick:()=>{b(Y),h(!1)},className:`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-left text-[11px] font-black uppercase transition-all cursor-pointer ${K?"bg-blue-brand/20 text-white border border-blue-brand/35 shadow-[0_2px_10px_rgba(37,99,235,0.2)]":"text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"}`,children:[i.jsx("span",{className:"text-sm leading-none",children:q.flag}),i.jsx("span",{children:q.label})]},Y)})]})]})})]}),i.jsxs("button",{className:"w-11 h-11 flex flex-col items-center justify-center gap-1.5 border border-white/10 rounded-xl text-white bg-white/5 active:scale-95 transition-all relative overflow-hidden group",onClick:()=>p(!d),children:[i.jsx("div",{className:"absolute inset-0 bg-blue-brand opacity-0 group-active:opacity-10 transition-opacity"}),i.jsx(wu,{mode:"wait",children:d?i.jsx(wn.div,{initial:{rotate:-90,opacity:0,scale:.5},animate:{rotate:0,opacity:1,scale:1},exit:{rotate:90,opacity:0,scale:.5},children:i.jsx(ib,{size:22,className:"text-blue-brand-2"})},"x"):i.jsxs(wn.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"flex flex-col gap-1.25 items-center justify-center",children:[i.jsx("span",{className:"w-5 h-0.5 bg-white rounded-full block"}),i.jsx("span",{className:"w-5 h-0.5 bg-blue-brand-2 rounded-full block"}),i.jsx("span",{className:"w-3 h-0.5 bg-white rounded-full block self-end"})]},"menu")})]})]})]})]}),i.jsx(wu,{children:d&&i.jsxs(i.Fragment,{children:[i.jsx(wn.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>p(!1),className:"fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm"}),i.jsxs(wn.nav,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:25,stiffness:200},className:"fixed top-0 right-0 bottom-0 w-[280px] md:w-[340px] z-[60] bg-[#050a14] border-l border-white/10 flex flex-col shadow-2xl shadow-blue-brand/20",children:[i.jsx("div",{className:"absolute inset-0 opacity-5 pointer-events-none bg-grid-slate-900/[0.1] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,white,transparent)]"}),i.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-brand to-transparent opacity-50"}),i.jsxs("header",{className:"flex items-center justify-between p-4 border-b border-white/10 relative z-10 bg-black/40",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-blue-brand/20 bg-[#0a1224] flex items-center justify-center shrink-0",children:i.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true",alt:"",className:"w-10 h-10 object-contain"})}),i.jsxs("div",{className:"flex flex-col gap-0.5",children:[i.jsx("strong",{className:"text-[13px] font-black uppercase text-white tracking-tight leading-none",children:"Sistema Mutodex"}),i.jsx("span",{className:"text-[8px] text-blue-brand-2 font-black uppercase tracking-[0.2em] opacity-80 leading-none mt-0.5",children:"v2.1.2 Build 550"})]})]}),i.jsx("button",{onClick:()=>p(!1),className:"w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 text-white/50 hover:text-white transition-colors active:scale-90",children:i.jsx(ib,{size:18})})]}),i.jsxs("div",{className:"flex-1 overflow-y-auto p-5 flex flex-col gap-3.5 relative z-10 scrollbar-none",children:[i.jsx("div",{className:"space-y-2.5 pb-2",children:_u.map((Y,q)=>{const K=Tf[Y.path]||Pu,F=s===Y.path,Z=Y.key;return i.jsxs(wn.button,{initial:{opacity:0,x:25},animate:{opacity:1,x:0},transition:{delay:q*.04,type:"spring",stiffness:150},onClick:()=>I(Y.path),className:`flex items-center gap-4 w-full p-3.5 rounded-2xl text-[13px] md:text-sm font-black uppercase tracking-wider transition-all relative group border ${F?"bg-blue-brand/20 text-white border-blue-brand shadow-[0_4px_25px_rgba(37,99,235,0.25)] scale-[1.02]":"bg-white/[0.03] text-slate-300 border-white/5 hover:bg-white/8 hover:text-white hover:scale-[1.01]"}`,children:[i.jsx("div",{className:`p-2 rounded-xl transition-all ${F?"bg-blue-brand text-white shadow-md":"bg-white/5 group-hover:bg-white/10 group-hover:scale-105"}`,children:i.jsx(K,{size:18})}),i.jsx("span",{className:"relative z-10 font-extrabold tracking-wide",children:G(Z)}),F&&i.jsx("div",{className:"ml-auto w-1.5 h-4 bg-blue-brand-2 rounded-full shadow-[0_0_12px_#3b82f6]"})]},Y.path)})}),i.jsxs("div",{className:"border-t border-white/10 pt-5 mt-3",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-3.5 px-2",children:[i.jsx(Pf,{size:13,className:"text-blue-brand-2 animate-pulse"}),i.jsx("span",{className:"text-[10px] text-slate-400 font-black uppercase tracking-[0.15em] leading-none",children:G("layout.color_theme")})]}),i.jsx("div",{className:"bg-white/[0.02] border border-white/5 rounded-2xl p-2 grid grid-cols-2 gap-2",children:["blue","green","red","pink","purple","white"].map(Y=>{const q=y===Y,F={blue:{label:"BLUE",dotBg:"bg-[#2563eb]",activeStyle:"border-[#2563eb]/50 text-blue-400 bg-[#2563eb]/10 shadow-[0_0_12px_rgba(37,99,235,0.35)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#2563eb]"},green:{label:"GREEN",dotBg:"bg-[#15803d]",activeStyle:"border-[#15803d]/60 text-green-400 bg-[#15803d]/15 shadow-[0_0_12px_rgba(21,128,61,0.4)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#15803d]"},red:{label:"RED",dotBg:"bg-[#dc2626]",activeStyle:"border-[#dc2626]/50 text-red-400 bg-[#dc2626]/10 shadow-[0_0_12px_rgba(220,38,38,0.4)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#dc2626]"},pink:{label:"PINK",dotBg:"bg-[#db2777]",activeStyle:"border-[#db2777]/50 text-pink-400 bg-[#db2777]/10 shadow-[0_0_12px_rgba(219,39,119,0.35)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#db2777]"},purple:{label:"PURPLE",dotBg:"bg-[#7c3aed]",activeStyle:"border-[#7c3aed]/50 text-purple-400 bg-[#7c3aed]/10 shadow-[0_0_12px_rgba(124,58,237,0.35)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#7c3aed]"},white:{label:"WHITE",dotBg:"bg-white",activeStyle:"border-white/30 text-white bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.25)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-white"}}[Y];return i.jsxs("button",{onClick:()=>M(Y),className:`flex items-center gap-2.5 w-full py-3 px-3 rounded-[14px] text-[10px] font-black uppercase tracking-wider transition-all duration-300 border active:scale-95 cursor-pointer relative group ${q?F.activeStyle:F.inactiveStyle}`,children:[i.jsxs("div",{className:"relative flex items-center justify-center shrink-0 w-4 h-4",children:[q&&i.jsx(wn.div,{layoutId:`dot-glow-${Y}`,className:`absolute -inset-0.5 rounded-full blur-sm opacity-50 ${F.glowBg}`}),i.jsx("div",{className:`w-3.5 h-3.5 rounded-full ${F.dotBg} border border-white/15 relative z-10 transition-transform group-hover:scale-110 shadow-inner`})]}),i.jsx("span",{className:`font-black relative z-10 transition-colors ${q?"text-white":"text-slate-400 group-hover:text-white"}`,children:F.label}),q&&i.jsx("div",{className:"ml-auto flex items-center shrink-0",children:i.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${F.glowBg} animate-pulse relative`})})]},Y)})})]}),i.jsx("div",{className:"border-t border-white/10 pt-5 mt-3",children:i.jsxs("a",{href:j,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between p-4 rounded-2xl bg-[#25d366]/10 border border-[#25d366]/30 text-white hover:bg-[#25d366]/15 transition-all group scale-[1] active:scale-95",children:[i.jsxs("div",{className:"flex items-center gap-3.5",children:[i.jsx("div",{className:"p-2.5 rounded-xl bg-[#25d366] text-white shadow-[0_0_12px_rgba(37,211,102,0.35)] shrink-0",children:i.jsx(Cr,{size:16})}),i.jsxs("div",{className:"flex flex-col text-left",children:[i.jsx("span",{className:"text-[11px] font-black uppercase text-[#25d366] tracking-wider leading-none mb-1",children:G("layout.active_support")}),i.jsx("span",{className:"text-[10px] text-slate-300 font-bold leading-tight",children:G("whatsapp.title")})]})]}),i.jsx("div",{className:"flex items-center justify-center w-6 h-6 rounded-full bg-[#25d366]/15 group-hover:translate-x-0.5 transition-transform shrink-0",children:i.jsx("span",{className:"text-[#25d366] text-xs font-black",children:"→"})})]})})]}),i.jsx("div",{className:"p-4 border-t border-white/10 relative z-10 bg-black/50",children:i.jsxs("div",{className:"flex flex-col gap-2",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{className:"text-[7px] text-slate-600 uppercase font-black tracking-widest leading-none",children:"Powered by"}),i.jsx("strong",{className:"text-blue-brand-2 text-[9px] uppercase font-black tracking-wider leading-none",children:"Smith Luque"})]}),i.jsx("div",{className:"w-full h-0.5 bg-white/5 rounded-full overflow-hidden",children:i.jsx(wn.div,{initial:{width:0},animate:{width:"100%"},transition:{duration:1.5,ease:"easeInOut"},className:"h-full bg-blue-brand"})})]})})]})]})}),i.jsx("main",{className:"app-shell pb-20 pt-4 lg:pt-6",children:i.jsxs("div",{className:"container mx-auto px-4 max-w-[1180px]",children:[i.jsxs("section",{className:"panel mb-6 !p-0 overflow-hidden flex flex-col lg:flex-row items-stretch border transition-all duration-500 bg-blue-brand/5 border-blue-brand/20",children:[i.jsxs("div",{className:"flex items-center gap-6 px-5 py-3 border-b lg:border-b-0 lg:border-r border-white/5 bg-black/20 shrink-0",children:[i.jsxs("div",{className:"flex flex-col",children:[i.jsx("span",{className:`text-[10px] font-black uppercase tracking-widest leading-none mb-1 ${H}`,children:G("stats.mutants")}),i.jsx("strong",{className:"text-white text-sm font-black",children:"550+"})]}),i.jsxs("div",{className:"flex flex-col border-l border-white/10 pl-4",children:[i.jsx("span",{className:`text-[10px] font-black uppercase tracking-widest leading-none mb-1 ${H}`,children:G("stats.version")}),i.jsx("strong",{className:"text-white/80 text-sm font-black",children:"2.1.2"})]})]}),i.jsxs("div",{className:"flex-1 flex items-center gap-3 px-5 py-3 min-h-[50px]",children:[i.jsx("div",{className:"w-2 h-2 rounded-full animate-pulse shrink-0 bg-blue-brand mt-0.5 self-start md:self-center"}),i.jsxs("p",{className:"text-[10px] md:text-xs text-slate-300 font-bold m-0 italic leading-relaxed",children:[i.jsx("span",{className:`${H} uppercase mr-2 opacity-70 whitespace-nowrap`,children:G("tip.label")}),G("tip.text")]})]}),i.jsx("div",{className:"hidden xl:flex items-center gap-2 px-5 py-3 bg-black/10 shrink-0",children:i.jsxs("a",{href:j,target:"_blank",rel:"noopener noreferrer",className:"text-[10px] font-black uppercase flex items-center gap-2 hover:brightness-125 transition-all text-green-brand",children:[i.jsx("div",{className:"w-1.5 h-1.5 rounded-full animate-ping bg-green-brand"}),G("layout.active_support")]})})]}),a,i.jsx("section",{className:"panel mt-[18px] transition-all duration-500",children:i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3.5",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"m-0 mb-1.5 text-lg font-bold",children:G("whatsapp.title")}),i.jsx("p",{className:"text-muted m-0 text-sm",children:G("whatsapp.desc")})]}),i.jsxs("a",{className:"btn px-6 btn-primary",target:"_blank",rel:"noopener noreferrer",href:j,children:[i.jsx(Cr,{size:18}),i.jsx("span",{children:G("whatsapp.btn")})]})]})})]})}),i.jsx("footer",{className:"site-footer border-t border-line bg-black/35 py-11",children:i.jsxs("div",{className:"container mx-auto px-4 max-w-[1180px] grid lg:grid-cols-[1.2fr_1fr_0.8fr] gap-6",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"brand flex items-center gap-3.5 mb-3",children:[i.jsx("div",{className:`brand-logo w-11 h-11 flex items-center justify-center rounded-[14px] bg-gradient-to-br ${X} overflow-hidden shadow-lg`,children:i.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true",alt:"Logo MGG",className:"w-full h-full object-cover"})}),i.jsxs("div",{children:[i.jsx("strong",{className:"block text-white uppercase tracking-tight",children:"Mutodex MGG"}),i.jsx("span",{className:`block text-[11px] ${H} uppercase tracking-[0.22em] font-bold`,children:G("footer.renovated")})]})]}),i.jsx("p",{className:"text-muted text-sm",children:G("footer.desc")})]}),i.jsxs("div",{children:[i.jsx("div",{className:"kv-label mb-3",children:G("footer.nav")}),i.jsx("div",{className:"grid gap-2",children:_u.map(Y=>i.jsx("button",{onClick:()=>I(Y.path),className:`text-slate-300 hover:text-white text-sm text-left flex items-center gap-2 transition-colors ${s===Y.path?H:""}`,children:G(Y.key)},Y.path))})]}),i.jsxs("div",{children:[i.jsx("div",{className:"kv-label mb-1.5",children:G("footer.legal")}),i.jsxs("div",{className:"flex flex-col gap-2",children:[i.jsx("button",{onClick:()=>I("/terminos"),className:"text-slate-400 hover:text-white text-xs text-left transition-colors",children:G("footer.terms")}),i.jsx("p",{className:"text-muted text-[11px] m-0 leading-relaxed mt-2",children:G("footer.rights")})]})]})]})})]})}const CA=`1. Robot
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_01_platinum.png
   Vida: 12,369
   Velocidad: 4.00
   Ataque 1: 2808 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5610 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 843 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

2. Robot Débil
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_02_platinum.png
   Vida: 3,400
   Velocidad: 2.83
   Ataque 1: 938 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3570 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 282 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

3. Androide
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_01_platinum.png
   Vida: 10,540
   Velocidad: 6.67
   Ataque 1: 3529 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2026 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,059 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

4. Goliat
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_02.png
   Vida: 12,498
   Velocidad: 3.85
   Ataque 1: 6797 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4536 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,719 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

5. Necrobot
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_01_platinum.png
   Vida: 8,140
   Velocidad: 7.14
   Ataque 1: 2598 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2598 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 779 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

6. Hypnos
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_02_platinum.png
   Vida: 10,567
   Velocidad: 4.17
   Ataque 1: 4998 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4998 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,499 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

7. Xenarach
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_03_platinum.png
   Vida: 9,955
   Velocidad: 5.26
   Ataque 1: 3985 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3985 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,594 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

8. Humanoide Pérfido
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_01_platinum.png
   Vida: 9,731
   Velocidad: 5.00
   Ataque 1: 3992 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3992 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,796 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

9. Capitán Mecano
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_02_platinum.png
   Vida: 15,926
   Velocidad: 4.76
   Ataque 1: 5515 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5515 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 3,309 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

10. Dezinger
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_03_platinum.png
   Vida: 16,279
   Velocidad: 3.45
   Ataque 1: 6963 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 6963 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,785 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

11. Escarabot
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_01_platinum.png
   Vida: 12,498
   Velocidad: 3.45
   Ataque 1: 6712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 6712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,013 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

12. Monocerus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_02_platinum.png
   Vida: 10,724
   Velocidad: 5.26
   Ataque 1: 4291 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4291 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,888 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

13. Coloso
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_01_platinum.png
   Vida: 11,261
   Velocidad: 4.35
   Ataque 1: 5059 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5059 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,024 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

14. Líbraro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_02_silver.png
   Vida: 11,253
   Velocidad: 9.09
   Ataque 1: 2714 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2714 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,086 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

15. Deus Machina
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_01_platinum.png
   Vida: 9,486
   Velocidad: 5.26
   Ataque 1: 3754 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3754 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,877 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

16. Virgon
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_02_silver.png
   Vida: 8,535
   Velocidad: 10.53
   Ataque 1: 2577 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2577 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,804 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

17. Zombi
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_01_platinum.png
   Vida: 9,690
   Velocidad: 6.25
   Ataque 1: 3373 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3373 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 1,180 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

18. Zombi Débil
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_02_platinum.png
   Vida: 2,720
   Velocidad: 3.73
   Ataque 1: 2142 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 2224 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 750 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

19. Jack O'Lantern
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_03.png
   Vida: 9,693
   Velocidad: 7.14
   Ataque 1: 2655 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 1530 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 1,328 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

20. Zomborg
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_01_platinum.png
   Vida: 12,553
   Velocidad: 4.55
   Ataque 1: 4481 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4481 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,465 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

21. Muñeca Diabólica
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_02_platinum.png
   Vida: 11,825
   Velocidad: 7.69
   Ataque 1: 2543 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 2543 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -712 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

22. Lord Blood
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_01_platinum.png
   Vida: 14,627
   Velocidad: 4.17
   Ataque 1: 6215 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3570 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 3,418 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

23. Espectro de la Cripta
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_02_platinum.png
   Vida: 11,954
   Velocidad: 7.14
   Ataque 1: 3461 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 1979 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,731 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

24. Déspota Negro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_01_platinum.png
   Vida: 13,049
   Velocidad: 3.70
   Ataque 1: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5712 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,742 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

25. Capitán Osamenta
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_02_platinum.png
   Vida: 9,187
   Velocidad: 5.56
   Ataque 1: 3536 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3536 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,238 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

26. Necrodragón
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_01_platinum.png
   Vida: 13,260
   Velocidad: 3.57
   Ataque 1: 5964 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5964 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,863 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

27. Cancernia
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_02_silver.png
   Vida: 10,825
   Velocidad: 4.76
   Ataque 1: 5233 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5233 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 3,402 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

28. Fantasmonauta
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_01_platinum.png
   Vida: 13,471
   Velocidad: 3.85
   Ataque 1: 5875 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5875 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,820 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

29. Cáprika
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_02_silver.png
   Vida: 8,120
   Velocidad: 6.67
   Ataque 1: 4663 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4663 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,798 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

30. Quebrantacuellos
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_03_platinum.png
   Vida: 12,498
   Velocidad: 4.76
   Ataque 1: 4828 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4828 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,655 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

31. Barón Lundi
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_01_platinum.png
   Vida: 11,900
   Velocidad: 5.00
   Ataque 1: 4277 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4277 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 2,352 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

32. Mago Tétrico
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_02_platinum.png
   Vida: 14,355
   Velocidad: 9.09
   Ataque 1: 2251 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 2251 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,215 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

33. Guerrero
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_01_platinum.png
   Vida: 10,309
   Velocidad: 5.56
   Ataque 1: 3883 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 3883 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -971 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

34. Guerrero Débil
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_02_platinum.png
   Vida: 2,040
   Velocidad: 3.64
   Ataque 1: 2550 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 2530 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -638 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

35. Ejecutor
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_01_platinum.png
   Vida: 10,656
   Velocidad: 4.17
   Ataque 1: 4950 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4950 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,238 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

36. Intercéptrix
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_02_platinum.png
   Vida: 8,085
   Velocidad: 7.14
   Ataque 1: 2618 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 2618 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -785 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

37. General Caos
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_03_platinum.png
   Vida: 9,955
   Velocidad: 5.26
   Ataque 1: 3985 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 3985 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,594 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

38. Banshee Guerrera
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_01_platinum.png
   Vida: 8,704
   Velocidad: 6.25
   Ataque 1: 3060 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 3060 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -765 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

39. Bushi
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_02_platinum.png
   Vida: 12,036
   Velocidad: 3.85
   Ataque 1: 5515 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5515 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -2,206 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

40. Caballero Nórdico
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_01_platinum.png
   Vida: 12,532
   Velocidad: 4.76
   Ataque 1: 5263 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 3019 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,105 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

41. Buck Maurice
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_02_platinum.png
   Vida: 19,856
   Velocidad: 3.33
   Ataque 1: 10254 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6045 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,256 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

42. Honey Bunny
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_01_platinum.png
   Vida: 7,378
   Velocidad: 11.11
   Ataque 1: 1843 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 1843 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -369 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

43. Sagitauro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_02_silver.png
   Vida: 8,199
   Velocidad: 5.00
   Ataque 1: 5879 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5879 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,764 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

44. Haggis
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_03_platinum.png
   Vida: 12,648
   Velocidad: 3.70
   Ataque 1: 6535 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6535 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,634 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

45. Marciano Errante
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_01_platinum.png
   Vida: 7,541
   Velocidad: 8.70
   Ataque 1: 2346 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 2346 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -587 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

46. Guardián Galáctico
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_03_platinum.png
   Vida: 12,104
   Velocidad: 3.45
   Ataque 1: 6630 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6630 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,658 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

47. Valkiria
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_01_platinum.png
   Vida: 10,581
   Velocidad: 5.00
   Ataque 1: 4250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,870 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

48. Thor
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_02_platinum.png
   Vida: 13,036
   Velocidad: 3.45
   Ataque 1: 7140 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 7140 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,785 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

49. Bestia
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_d_01_platinum.png
   Vida: 10,968
   Velocidad: 5.00
   Ataque 1: 4352 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4352 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -1,306 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

50. Reptoide
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_01_platinum.png
   Vida: 10,146
   Velocidad: 6.67
   Ataque 1: 3298 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3298 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,319 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

51. Aracno
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_02_platinum.png
   Vida: 15,014
   Velocidad: 3.70
   Ataque 1: 5494 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5494 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -4,396 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

52. Cerbero
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_01_platinum.png
   Vida: 10,098
   Velocidad: 5.88
   Ataque 1: 3271 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3271 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,799 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

53. Zombat
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_02_platinum.png
   Vida: 7,786
   Velocidad: 11.76
   Ataque 1: 1652 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 1652 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,322 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

54. Cobrakái
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_03_platinum.png
   Vida: 12,621
   Velocidad: 3.85
   Ataque 1: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5807 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -2,323 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

55. Rakshasa
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_01_platinum.png
   Vida: 9,819
   Velocidad: 7.14
   Ataque 1: 2815 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2815 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,408 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

56. Leohart
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_02_silver.png
   Vida: 9,525
   Velocidad: 4.17
   Ataque 1: 5808 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5808 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,614 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

57. Gargantus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_03_gothic.png
   Vida: 10,738
   Velocidad: 4.76
   Ataque 1: 5249 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5249 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,937 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

58. Kaiju Kitty
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_01_platinum.png
   Vida: 12,641
   Velocidad: 5.56
   Ataque 1: 4393 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2536 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -2,196 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

59. Maestro Splitter
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_02_platinum.png
   Vida: 14,416
   Velocidad: 3.85
   Ataque 1: 7262 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4175 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -2,905 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

60. Reina Parásita
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_01_platinum.png
   Vida: 8,949
   Velocidad: 7.69
   Ataque 1: 2360 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2360 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,652 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

61. Cosmo Kong
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_02_platinum.png
   Vida: 11,982
   Velocidad: 4.35
   Ataque 1: 5012 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5012 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -2,506 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

62. Dracus Nobilis
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_01_platinum.png
   Vida: 12,798
   Velocidad: 3.33
   Ataque 1: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,611 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

63. Sátiro Hechicero
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_02_platinum.png
   Vida: 9,908
   Velocidad: 6.67
   Ataque 1: 3019 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3019 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,510 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

64. Extraterrestre
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_e_01_platinum.png
   Vida: 7,133
   Velocidad: 11.11
   Ataque 1: 1700 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 1700 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 510 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

65. Aniquilador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_01_platinum.png
   Vida: 12,254
   Velocidad: 3.57
   Ataque 1: 6460 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6460 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,938 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

66. Sentry
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_02_platinum.png
   Vida: 9,826
   Velocidad: 6.25
   Ataque 1: 3502 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3502 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,051 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

67. Exopez
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_03_silver.png
   Vida: 7,359
   Velocidad: 8.70
   Ataque 1: 3231 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3231 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,292 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

68. Tutti Viscosi
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_01_platinum.png
   Vida: 11,206
   Velocidad: 4.35
   Ataque 1: 5093 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5093 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,783 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

69. Sirenia
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_02_platinum.png
   Vida: 8,806
   Velocidad: 7.69
   Ataque 1: 3216 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3216 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,287 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

70. Devorador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_03_platinum.png
   Vida: 14,096
   Velocidad: 3.45
   Ataque 1: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 7371 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,211 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

71. Sundance Bug
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_01_platinum.png
   Vida: 9,540
   Velocidad: 5.26
   Ataque 1: 3733 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3733 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,307 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

72. Behemoth
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_02_platinum.png
   Vida: 11,920
   Velocidad: 3.57
   Ataque 1: 6351 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6351 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,905 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

73. Xenos
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_01_platinum.png
   Vida: 7,827
   Velocidad: 8.33
   Ataque 1: 2380 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2380 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 714 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

74. Rocágeno
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_02_platinum.png
   Vida: 10,676
   Velocidad: 4.55
   Ataque 1: 4753 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4753 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,664 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

75. Astrosurfista
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_01_platinum.png
   Vida: 13,770
   Velocidad: 3.85
   Ataque 1: 6841 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3937 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,052 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

76. Supernovus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_02_platinum.png
   Vida: 12,444
   Velocidad: 5.26
   Ataque 1: 4984 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2856 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,745 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

77. Maestro Oida
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_03_platinum.png
   Vida: 10,662
   Velocidad: 7.14
   Ataque 1: 3461 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 1979 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,038 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

78. Nébulon
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_01_platinum.png
   Vida: 8,962
   Velocidad: 5.88
   Ataque 1: 3291 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3291 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,152 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

79. Mr Marvelous
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_02_heroes.png
   Vida: 16,751
   Velocidad: 5.00
   Ataque 1: 4032 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4032 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 2,419 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

80. Aquapunzel
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_03_silver.png
   Vida: 13,653
   Velocidad: 3.64
   Ataque 1: 5693 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5693 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,993 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

81. Diablesa
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_01_platinum.png
   Vida: 11,064
   Velocidad: 4.76
   Ataque 1: 4692 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4692 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -1,408 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

82. Mago de las Nieves
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_03.png
   Vida: 8,809
   Velocidad: 6.25
   Ataque 1: 3135 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 1799 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -784 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

83. Tecno Tao
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_01_platinum.png
   Vida: 10,812
   Velocidad: 4.00
   Ataque 1: 5229 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5229 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,307 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

84. Mekali
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_02_platinum.png
   Vida: 9,568
   Velocidad: 6.67
   Ataque 1: 3271 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3271 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -818 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

85. La Parca
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_01_platinum.png
   Vida: 12,437
   Velocidad: 3.45
   Ataque 1: 6746 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 6746 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,686 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

86. Príncipe Escorpión
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_02_silver.png
   Vida: 11,351
   Velocidad: 5.71
   Ataque 1: 4111 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4111 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,028 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

87. Anubis
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_03_platinum.png
   Vida: 11,730
   Velocidad: 4.35
   Ataque 1: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,350 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

88. Gandolphus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_01_platinum.png
   Vida: 7,732
   Velocidad: 9.09
   Ataque 1: 2564 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 2564 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,025 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

89. Capitán Paz
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_02.png
   Vida: 11,186
   Velocidad: 4.00
   Ataque 1: 5471 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5471 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,368 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

90. Medusa
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_01_platinum.png
   Vida: 10,248
   Velocidad: 4.55
   Ataque 1: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4447 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,112 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

91. Horus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_02_platinum.png
   Vida: 8,548
   Velocidad: 8.70
   Ataque 1: 3835 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3835 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,151 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

92. Ivory Hanzo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_03_japan.png
   Vida: 10,794
   Velocidad: 3.70
   Ataque 1: 10112 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 10112 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -3,034 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

93. C'thlig
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_01_platinum.png
   Vida: 11,186
   Velocidad: 3.70
   Ataque 1: 5739 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5739 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,435 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

94. Azuria
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_02_platinum.png
   Vida: 9,425
   Velocidad: 5.88
   Ataque 1: 3488 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3488 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -872 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

95. Señor del Abismo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_01_platinum.png
   Vida: 17,564
   Velocidad: 3.33
   Ataque 1: 9683 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5576 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,421 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

96. Castigo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_02_platinum.png
   Vida: 12,111
   Velocidad: 5.56
   Ataque 1: 4665 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 2679 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,166 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

97. Oriax
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_03.png
   Vida: 13,410
   Velocidad: 3.57
   Ataque 1: 6052 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 6052 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,816 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

98. Ragnar
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_03_platinum.png
   Vida: 10,724
   Velocidad: 4.76
   Ataque 1: 4644 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4644 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,858 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

99. Triple-B
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_03_platinum.png
   Vida: 13,478
   Velocidad: 3.57
   Ataque 1: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 3,133 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

100. Mandrágora
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_03_platinum.png
   Vida: 13,070
   Velocidad: 7.69
   Ataque 1: 3189 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 1836 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -797 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

101. Motero Maldito
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_03_platinum.png
   Vida: 14,144
   Velocidad: 10.00
   Ataque 1: 2169 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 1346 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 976 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

102. Armadizo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_03_platinum.png
   Vida: 8,187
   Velocidad: 10.00
   Ataque 1: 1870 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 1870 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,309 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

103. Mantidroide
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_03_platinum.png
   Vida: 11,934
   Velocidad: 4.55
   Ataque 1: 6671 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6671 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,802 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

104. Carnero Vengador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_03_silver.png
   Vida: 13,203
   Velocidad: 3.70
   Ataque 1: 6855 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6855 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 3,085 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

105. Battle Toad
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_04_platinum.png
   Vida: 11,648
   Velocidad: 11.11
   Ataque 1: 1822 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 1822 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -456 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

106. Cézanne
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_04_platinum.png
   Vida: 13,036
   Velocidad: 3.45
   Ataque 1: 8500 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 8500 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,145 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

107. H.U.M.A.N.
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_03_platinum.png
   Vida: 12,770
   Velocidad: 5.00
   Ataque 1: 5290 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3046 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,116 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

108. Rambit
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_d_03.png
   Vida: 14,341
   Velocidad: 4.17
   Ataque 1: 7218 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3607 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -2,165 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

109. Star Trooper
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_03_platinum.png
   Vida: 8,051
   Velocidad: 11.11
   Ataque 1: 2496 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2496 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 599 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

110. Micky Krueger
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_03_platinum.png
   Vida: 9,615
   Velocidad: 7.69
   Ataque 1: 3380 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3380 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,690 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

111. Táuridus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_03_silver.png
   Vida: 7,567
   Velocidad: 10.00
   Ataque 1: 3602 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3602 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,261 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

112. Autonoraptor
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_04_platinum.png
   Vida: 11,254
   Velocidad: 11.11
   Ataque 1: 1802 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 1802 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 721 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

113. Invadron
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_03_platinum.png
   Vida: 12,838
   Velocidad: 3.57
   Ataque 1: 6841 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 6841 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,052 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

114. Bruja Malvada
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_04_platinum.png
   Vida: 11,988
   Velocidad: 4.17
   Ataque 1: 8391 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 8391 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,846 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

115. Oso Espantoso
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_03_platinum.png
   Vida: 10,207
   Velocidad: 6.25
   Ataque 1: 3359 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3359 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,680 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

116. Azog
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_04_platinum.png
   Vida: 13,437
   Velocidad: 4.00
   Ataque 1: 9982 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 9982 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,996 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

117. Geminium
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_02_silver.png
   Vida: 11,063
   Velocidad: 4.35
   Ataque 1: 4685 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4685 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,874 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

118. Psicojabalí
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_03_platinum.png
   Vida: 12,260
   Velocidad: 8.33
   Ataque 1: 2890 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 1666 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,156 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

119. Zena
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_03_platinum.png
   Vida: 5,753
   Velocidad: 11.11
   Ataque 1: 3407 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 2380 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -681 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

120. Absolem
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_03_platinum.png
   Vida: 12,050
   Velocidad: 4.55
   Ataque 1: 4903 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4903 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,451 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

121. Wampara
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_03_platinum.png
   Vida: 11,655
   Velocidad: 4.00
   Ataque 1: 5685 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5685 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,705 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

122. Barbaroca
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_03_platinum.png
   Vida: 13,369
   Velocidad: 4.17
   Ataque 1: 7936 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 7936 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,984 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

123. George Washington
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_04.png
   Vida: 13,348
   Velocidad: 3.33
   Ataque 1: 6552 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6552 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 3,145 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

124. Louis XVI
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_04.png
   Vida: 10,914
   Velocidad: 4.55
   Ataque 1: 5345 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5345 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -2,138 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

125. Bazzinger
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_03_platinum.png
   Vida: 10,214
   Velocidad: 5.00
   Ataque 1: 4230 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4230 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,057 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

126. Space Princess
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_04_platinum.png
   Vida: 8,527
   Velocidad: 7.14
   Ataque 1: 2768 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 2768 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -692 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

127. Astromago
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_03_platinum.png
   Vida: 10,894
   Velocidad: 4.35
   Ataque 1: 5012 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5012 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,253 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

128. Garuda
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_03.png
   Vida: 10,866
   Velocidad: 8.33
   Ataque 1: 2978 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 1863 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 1,340 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

129. Hada Machete
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_03_platinum.png
   Vida: 5,073
   Velocidad: 9.09
   Ataque 1: 5073 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5073 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,268 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

130. Genshiryoku
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_04_platinum.png
   Vida: 10,968
   Velocidad: 3.57
   Ataque 1: 10431 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 10431 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -3,651 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

131. El Experimento
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_04_platinum.png
   Vida: 10,846
   Velocidad: 5.56
   Ataque 1: 3733 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3733 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,053 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

132. Leonidas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_04_platinum.png
   Vida: 12,084
   Velocidad: 4.17
   Ataque 1: 5263 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5263 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,316 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

133. Buranka
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_04_platinum.png
   Vida: 10,091
   Velocidad: 5.00
   Ataque 1: 3910 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3910 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -978 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

134. Mexihcatl
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_04.png
   Vida: 8,313
   Velocidad: 4.76
   Ataque 1: 3563 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3563 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -891 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

135. Banker
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_04.png
   Vida: 8,959
   Velocidad: 5.00
   Ataque 1: 3713 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3713 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -928 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

136. Emperador Galáctico
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_04_starwars.png
   Vida: 11,747
   Velocidad: 6.25
   Ataque 1: 3554 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3554 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 2,843 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

137. Nebulus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_05_silver.png
   Vida: 14,825
   Velocidad: 5.56
   Ataque 1: 5547 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5547 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,387 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

138. Project X27
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_04_platinum.png
   Vida: 6,528
   Velocidad: 12.50
   Ataque 1: 2217 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 2217 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -554 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

139. Miroku
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_04_platinum.png
   Vida: 15,552
   Velocidad: 3.70
   Ataque 1: 6066 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6066 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -5,459 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

140. Mapach Wik
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_04.png
   Vida: 5,675
   Velocidad: 12.50
   Ataque 1: 1751 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 1751 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 700 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png
`,VA=`141. El Fontanero
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_04.png
   Vida: 8,225
   Velocidad: 5.88
   Ataque 1: 3036 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3036 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,214 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

142. Matafantasmas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_04_platinum.png
   Vida: 11,206
   Velocidad: 6.67
   Ataque 1: 3828 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3828 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,149 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

143. Exo Cookie
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_05_platinum.png
   Vida: 15,164
   Velocidad: 3.33
   Ataque 1: 7113 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7113 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -3,556 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

144. Britany
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_05_platinum.png
   Vida: 13,274
   Velocidad: 3.33
   Ataque 1: 5964 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5964 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 2,863 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

145. Frostmass
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_03.png
   Vida: 11,101
   Velocidad: 4.00
   Ataque 1: 5430 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 3121 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -1,357 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

146. Santactopus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_04.png
   Vida: 8,823
   Velocidad: 5.88
   Ataque 1: 3261 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3261 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 978 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

147. Mephisto
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_04_platinum.png
   Vida: 9,037
   Velocidad: 7.41
   Ataque 1: 4529 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4529 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,359 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

148. Monolith
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_04_platinum.png
   Vida: 14,457
   Velocidad: 4.55
   Ataque 1: 5474 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3522 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,369 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

149. Malvatron
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_04_platinum.png
   Vida: 10,560
   Velocidad: 7.14
   Ataque 1: 3427 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3427 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,028 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

150. Lara
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_04.png
   Vida: 9,693
   Velocidad: 9.09
   Ataque 1: 2224 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 1275 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -556 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

151. Commander Ender
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_04_platinum.png
   Vida: 12,553
   Velocidad: 3.85
   Ataque 1: 8527 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 8527 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 3,240 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

152. Zortrex
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_04_platinum.png
   Vida: 10,948
   Velocidad: 5.56
   Ataque 1: 2142 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 2142 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,785 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

153. Tengu
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_99_platinum.png
   Vida: 13,444
   Velocidad: 4.35
   Ataque 1: 5012 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5012 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -3,007 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

154. Sacamantecas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_04_platinum.png
   Vida: 10,458
   Velocidad: 10.00
   Ataque 1: 2611 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 1496 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,044 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

155. Oculus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_04_platinum.png
   Vida: 10,492
   Velocidad: 8.33
   Ataque 1: 2890 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 1666 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,012 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

156. Supraman X
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_04.png
   Vida: 8,238
   Velocidad: 6.67
   Ataque 1: 2812 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2812 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -844 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

157. Cupido
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_05.png
   Vida: 11,805
   Velocidad: 5.00
   Ataque 1: 4869 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4869 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,461 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

158. Abraham Lincoln
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_05.png
   Vida: 12,692
   Velocidad: 3.33
   Ataque 1: 7572 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 7572 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,044 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

159. Escuadrón Rhino
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_04_platinum.png
   Vida: 13,280
   Velocidad: 4.00
   Ataque 1: 5970 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5970 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,388 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

160. Dama Harpía
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_04_platinum.png
   Vida: 7,847
   Velocidad: 10.00
   Ataque 1: 2312 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 2312 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -694 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

161. Yelda
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_05.png
   Vida: 8,857
   Velocidad: 5.88
   Ataque 1: 3271 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3271 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -818 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

162. Flying Jordson
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_04_platinum.png
   Vida: 13,348
   Velocidad: 4.55
   Ataque 1: 5943 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3407 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,080 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

163. Cernunnos
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_04_platinum.png
   Vida: 13,083
   Velocidad: 4.76
   Ataque 1: 5603 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3230 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -2,802 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

164. Capitán Perla Negra
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_04_platinum.png
   Vida: 16,966
   Velocidad: 3.45
   Ataque 1: 9880 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 9880 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,964 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

165. Brick McGole
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_04_platinum.png
   Vida: 9,500
   Velocidad: 6.67
   Ataque 1: 3250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 975 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

166. Kraken
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_05_platinum.png
   Vida: 9,554
   Velocidad: 3.85
   Ataque 1: 14151 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 14151 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 4,245 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

167. Genimal
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_99.png
   Vida: 8,643
   Velocidad: 10.00
   Ataque 1: 2145 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2145 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -751 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

168. Hardcorius
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_05_platinum.png
   Vida: 12,539
   Velocidad: 5.26
   Ataque 1: 4726 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4726 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -945 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

169. Marine Muerto
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_05_platinum.png
   Vida: 12,648
   Velocidad: 3.70
   Ataque 1: 8473 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 8473 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,542 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

170. Challengeer
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_05_platinum.png
   Vida: 8,820
   Velocidad: 6.67
   Ataque 1: 5739 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5739 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,296 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

171. Ciberpunk
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_05_platinum.png
   Vida: 9,262
   Velocidad: 7.69
   Ataque 1: 2550 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2550 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,530 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

172. Neo Urban XIII
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_05_gachaboss.png
   Vida: 14,317
   Velocidad: 3.33
   Ataque 1: 9058 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 9058 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,989 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

173. Tecnoforzer
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_05_platinum.png
   Vida: 12,750
   Velocidad: 5.88
   Ataque 1: 7589 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4359 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 3,794 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

174. Chamán Sombra
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_05_platinum.png
   Vida: 9,955
   Velocidad: 5.26
   Ataque 1: 6011 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 6011 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,404 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

175. Ingeniero
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_99_platinum.png
   Vida: 13,682
   Velocidad: 3.85
   Ataque 1: 9840 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 9840 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -2,755 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

176. Sun-Duke
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_05_villains.png
   Vida: 7,882
   Velocidad: 6.33
   Ataque 1: 6519 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6519 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,956 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

177. Ceres
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_e_03_platinum.png
   Vida: 9,894
   Velocidad: 12.66
   Ataque 1: 1734 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 911 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 434 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

178. Shin Hakuho
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_05_platinum.png
   Vida: 15,701
   Velocidad: 3.70
   Ataque 1: 7582 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4372 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,881 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

179. Fenec Plus Ultra
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_05_platinum.png
   Vida: 12,084
   Velocidad: 5.88
   Ataque 1: 3760 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3760 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,692 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

180. Madre de los Dragones
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_05_platinum.png
   Vida: 7,140
   Velocidad: 8.00
   Ataque 1: 5957 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5957 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -894 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

181. Brawler
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_05.png
   Vida: 10,717
   Velocidad: 3.45
   Ataque 1: 5872 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5872 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,762 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

182. Loco de la Motosierra
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_05_platinum.png
   Vida: 11,744
   Velocidad: 4.55
   Ataque 1: 4753 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4753 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,614 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

183. Rey Mono
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_05_platinum.png
   Vida: 10,914
   Velocidad: 6.25
   Ataque 1: 3502 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3502 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,401 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

184. Acarius
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_05_platinum.png
   Vida: 12,328
   Velocidad: 3.57
   Ataque 1: 9377 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 9377 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,813 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

185. Cazador Espacial
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_05_platinum.png
   Vida: 12,254
   Velocidad: 4.35
   Ataque 1: 7052 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 7052 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,904 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

186. Artista Siniestro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_05_platinum.png
   Vida: 8,820
   Velocidad: 6.67
   Ataque 1: 3019 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3019 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -755 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

187. Zeus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_06_olympians.png
   Vida: 5,273
   Velocidad: 11.11
   Ataque 1: 4182 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4182 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,673 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

188. Glubber
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_05_platinum.png
   Vida: 12,451
   Velocidad: 7.14
   Ataque 1: 5848 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4080 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,345 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

189. Nyrlatoth
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_05_platinum.png
   Vida: 12,308
   Velocidad: 5.26
   Ataque 1: 4291 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4291 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,360 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

190. Cibercroc
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_05_platinum.png
   Vida: 13,138
   Velocidad: 4.35
   Ataque 1: 5583 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5583 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -2,791 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

191. Bulldozer
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_05_platinum.png
   Vida: 12,240
   Velocidad: 4.17
   Ataque 1: 5263 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5263 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,895 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

192. Pejelagarto
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_05_platinum.png
   Vida: 6,820
   Velocidad: 8.70
   Ataque 1: 4379 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2190 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,752 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

193. Triceratanque
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_06_platinum.png
   Vida: 13,416
   Velocidad: 3.23
   Ataque 1: 8412 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 8412 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 3,365 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

194. Monje Akuso
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_05_platinum.png
   Vida: 10,275
   Velocidad: 7.14
   Ataque 1: 2978 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 2978 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,191 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

195. Caronte
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_05_platinum.png
   Vida: 16,150
   Velocidad: 3.45
   Ataque 1: 8289 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4767 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 3,979 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

196. Tío Sam
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_06.png
   Vida: 11,795
   Velocidad: 3.70
   Ataque 1: 6310 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6310 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,578 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

197. Hog the Ripper
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_05.png
   Vida: 15,572
   Velocidad: 3.23
   Ataque 1: 8667 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 8667 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,733 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

198. Rey Steven
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_05_platinum.png
   Vida: 11,526
   Velocidad: 5.56
   Ataque 1: 4651 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4651 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,860 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

199. Duplicado de Eva
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_06.png
   Vida: 8,952
   Velocidad: 9.09
   Ataque 1: 2509 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2509 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -878 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

200. Ciberbabosa
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_05_platinum.png
   Vida: 12,764
   Velocidad: 5.00
   Ataque 1: 4638 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4638 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -2,319 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

201. Jhingal
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_05_platinum.png
   Vida: 9,819
   Velocidad: 8.33
   Ataque 1: 3747 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 1870 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,124 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

202. Doctor Blaw
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_05_platinum.png
   Vida: 12,471
   Velocidad: 4.00
   Ataque 1: 5528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5528 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,654 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

203. Tomahawk
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_06_platinum.png
   Vida: 9,092
   Velocidad: 6.25
   Ataque 1: 3352 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 2162 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -838 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

204. Hechicera
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_06_platinum.png
   Vida: 7,786
   Velocidad: 10.00
   Ataque 1: 3550 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3550 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -710 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

205. Dandi Óscar
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_06_platinum.png
   Vida: 12,451
   Velocidad: 4.00
   Ataque 1: 5542 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5542 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,660 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

206. Kung Chow
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_06_platinum.png
   Vida: 18,401
   Velocidad: 4.17
   Ataque 1: 5909 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5909 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,418 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

207. Comeabuelas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_06_platinum.png
   Vida: 15,844
   Velocidad: 3.70
   Ataque 1: 7827 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7827 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,974 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

208. Mau-Jack
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_06_platinum.png
   Vida: 8,344
   Velocidad: 6.67
   Ataque 1: 3169 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3169 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 951 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

209. Lily
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_06_movies.png
   Vida: 14,516
   Velocidad: 5.88
   Ataque 1: 6014 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 6014 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,706 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

210. El Rey de Mimphys
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_06_platinum.png
   Vida: 11,424
   Velocidad: 4.55
   Ataque 1: 5209 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5209 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 2,500 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

211. Bioerizo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_06_platinum.png
   Vida: 17,993
   Velocidad: 3.57
   Ataque 1: 8078 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 8078 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 3,554 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

212. Gladiadog
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_06_platinum.png
   Vida: 22,222
   Velocidad: 3.45
   Ataque 1: 7133 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 7133 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,497 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

213. Casto
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_06_platinum.png
   Vida: 8,520
   Velocidad: 7.14
   Ataque 1: 2768 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2768 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -692 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

214. Viper
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_06_platinum.png
   Vida: 12,158
   Velocidad: 5.88
   Ataque 1: 6433 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 6433 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 3,345 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

215. Dollbyte
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_06_platinum.png
   Vida: 11,458
   Velocidad: 4.76
   Ataque 1: 7670 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 7670 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,534 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

216. Garlog
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_06_elements.png
   Vida: 12,681
   Velocidad: 4.44
   Ataque 1: 9844 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 9844 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 4,430 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

217. Krunk
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_06_platinum.png
   Vida: 12,260
   Velocidad: 4.17
   Ataque 1: 5800 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5800 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,740 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

218. Apofis
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_06_platinum.png
   Vida: 10,479
   Velocidad: 7.69
   Ataque 1: 2686 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 2686 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,074 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

219. Cuervo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_04.png
   Vida: 12,005
   Velocidad: 5.00
   Ataque 1: 4417 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 2536 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 2,208 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

220. Drusella
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_06_platinum.png
   Vida: 9,670
   Velocidad: 9.09
   Ataque 1: 3638 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3638 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,091 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

221. Mandor
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_06_platinum.png
   Vida: 9,636
   Velocidad: 5.88
   Ataque 1: 4991 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4991 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,996 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

222. Borrasca
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_06_platinum.png
   Vida: 4,454
   Velocidad: 12.50
   Ataque 1: 1788 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 1788 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -894 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

223. Sable
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_06.png
   Vida: 10,836
   Velocidad: 5.26
   Ataque 1: 4325 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4325 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,730 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

224. Artemisa
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_06.png
   Vida: 9,564
   Velocidad: 5.56
   Ataque 1: 4869 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4869 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -2,191 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

225. Mamá Kangú
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_06_platinum.png
   Vida: 10,649
   Velocidad: 7.14
   Ataque 1: 3461 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2278 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,038 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

226. Darwin
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_06.png
   Vida: 11,271
   Velocidad: 5.88
   Ataque 1: 3699 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3699 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,406 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

227. ERR-ADI-K-Bot
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_06_platinum.png
   Vida: 15,783
   Velocidad: 3.57
   Ataque 1: 9357 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 9357 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,339 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

228. Námaste
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_06_platinum.png
   Vida: 11,669
   Velocidad: 5.99
   Ataque 1: 4270 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3366 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,281 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

229. Tyrtiduron
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_06_platinum.png
   Vida: 13,002
   Velocidad: 5.26
   Ataque 1: 4379 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4379 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,409 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

230. Bounda
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_07_platinum.png
   Vida: 14,654
   Velocidad: 3.33
   Ataque 1: 8412 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 8412 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,944 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

231. Mega Claus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_07.png
   Vida: 11,240
   Velocidad: 4.76
   Ataque 1: 4821 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4821 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,687 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

232. Marv
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_06_platinum.png
   Vida: 9,676
   Velocidad: 7.14
   Ataque 1: 3182 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3182 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 955 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

233. Z-0
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_06_platinum.png
   Vida: 13,879
   Velocidad: 3.85
   Ataque 1: 8990 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 8990 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,427 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

234. Falcon
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_07_platinum.png
   Vida: 11,030
   Velocidad: 4.00
   Ataque 1: 9343 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 9343 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,803 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

235. Paramic
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_07_platinum.png
   Vida: 11,111
   Velocidad: 8.33
   Ataque 1: 2258 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2258 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,129 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

236. El Original
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_07_soldiers.png
   Vida: 16,938
   Velocidad: 5.56
   Ataque 1: 7286 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 7286 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 4,007 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

237. Señor Dragón
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_07_platinum.png
   Vida: 6,766
   Velocidad: 10.53
   Ataque 1: 2060 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2060 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,751 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

238. Carlingger
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_07_platinum.png
   Vida: 9,411
   Velocidad: 12.66
   Ataque 1: 1890 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 1890 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 756 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

239. Rey de los Insectos
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_07_platinum.png
   Vida: 12,254
   Velocidad: 5.00
   Ataque 1: 5073 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5073 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,420 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

240. Aplastador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_07.png
   Vida: 10,914
   Velocidad: 4.00
   Ataque 1: 6365 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 6365 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,864 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

241. Quimera
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_07_platinum.png
   Vida: 12,458
   Velocidad: 3.70
   Ataque 1: 11057 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 11057 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,764 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

242. Champicorteza
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_07_platinum.png
   Vida: 11,818
   Velocidad: 4.17
   Ataque 1: 6494 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6494 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,948 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

243. Reina Rakkti
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_06_platinum.png
   Vida: 13,824
   Velocidad: 5.00
   Ataque 1: 5202 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2992 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,821 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

244. Hércules
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_06_platinum.png
   Vida: 15,354
   Velocidad: 3.33
   Ataque 1: 10669 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 6317 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 3,521 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

245. Aran
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_07_platinum.png
   Vida: 9,676
   Velocidad: 4.35
   Ataque 1: 10159 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 10159 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -3,048 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

246. El Gringo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_06_platinum.png
   Vida: 9,486
   Velocidad: 10.00
   Ataque 1: 3087 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 1380 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -772 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

247. Spartac
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_07.png
   Vida: 15,742
   Velocidad: 3.33
   Ataque 1: 9180 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4287 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,213 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

248. Amarok
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_07_platinum.png
   Vida: 9,445
   Velocidad: 7.14
   Ataque 1: 3060 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3060 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -765 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

249. Pikabú
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_07_platinum.png
   Vida: 13,886
   Velocidad: 6.06
   Ataque 1: 4502 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4502 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,476 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

250. Leprechaun
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_04.png
   Vida: 11,941
   Velocidad: 5.26
   Ataque 1: 2982 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3281 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -745 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

251. Fénix
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_07_platinum.png
   Vida: 13,709
   Velocidad: 4.00
   Ataque 1: 9214 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 9214 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 4,146 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

252. Kal Wayne
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_07_platinum.png
   Vida: 12,832
   Velocidad: 4.55
   Ataque 1: 5073 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5073 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,623 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

53. Avispa Diésel
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_07_platinum.png
   Vida: 15,035
   Velocidad: 7.69
   Ataque 1: 2720 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2720 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,088 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

254. Robofuerte
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_07_lucha.png
   Vida: 14,089
   Velocidad: 4.00
   Ataque 1: 9604 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 9604 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -4,802 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

255. Rocky Botboa
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_07_platinum.png
   Vida: 19,931
   Velocidad: 3.23
   Ataque 1: 7752 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 7752 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 4,264 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

256. Las Moiras
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_07_platinum.png
   Vida: 12,328
   Velocidad: 5.88
   Ataque 1: 3856 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3856 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,080 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

257. Dr. Frost
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_07_platinum.png
   Vida: 14,396
   Velocidad: 4.44
   Ataque 1: 5848 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5848 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,632 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

258. Capitán Gluglú
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_07_platinum.png
   Vida: 13,097
   Velocidad: 5.41
   Ataque 1: 4651 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4651 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,535 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

259. Rey Esqueleto
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_07_platinum.png
   Vida: 11,356
   Velocidad: 6.25
   Ataque 1: 7154 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 7154 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 3,577 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

260. Turbacieno
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_07_platinum.png
   Vida: 11,914
   Velocidad: 4.55
   Ataque 1: 6888 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6888 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,273 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

261. Juan Hielo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_07.png
   Vida: 14,124
   Velocidad: 3.45
   Ataque 1: 6059 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6059 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -2,424 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

262. Capitán Patriota
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_07_platinum.png
   Vida: 18,537
   Velocidad: 4.76
   Ataque 1: 5284 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4889 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,008 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

263. Astro Gummy
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_07_platinum.png
   Vida: 11,941
   Velocidad: 6.67
   Ataque 1: 3692 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2108 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,108 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

264. Nezarim
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_07_platinum.png
   Vida: 11,873
   Velocidad: 4.17
   Ataque 1: 6453 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6453 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 3,227 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

265. Globomono
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_07_platinum.png
   Vida: 11,995
   Velocidad: 6.25
   Ataque 1: 4651 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2659 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,860 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

266. Starminator
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_07_platinum.png
   Vida: 12,199
   Velocidad: 5.71
   Ataque 1: 4304 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4304 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,507 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

267. Espectra
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_08_platinum.png
   Vida: 4,672
   Velocidad: 8.33
   Ataque 1: 5794 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5794 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,912 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

268. Wynn
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_08_platinum.png
   Vida: 14,246
   Velocidad: 3.33
   Ataque 1: 8738 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 8738 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 3,583 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

269. Thrann
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_08_platinum.png
   Vida: 10,078
   Velocidad: 4.00
   Ataque 1: 10078 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 10078 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,519 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

270. Blender
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_08_platinum.png
   Vida: 8,330
   Velocidad: 7.14
   Ataque 1: 2972 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2972 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -891 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

271. Rinotauro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_08_platinum.png
   Vida: 21,311
   Velocidad: 4.00
   Ataque 1: 7160 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4420 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,790 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

272. Cosmopandas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_08_platinum.png
   Vida: 6,956
   Velocidad: 9.09
   Ataque 1: 3978 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3978 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,193 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

273. Kudamono
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_08_platinum.png
   Vida: 11,710
   Velocidad: 5.00
   Ataque 1: 5175 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5175 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,294 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

274. Alfie
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_07_platinum.png
   Vida: 11,710
   Velocidad: 3.33
   Ataque 1: 10084 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 10084 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 4,034 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

275. Tiranozomb
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_08_platinum.png
   Vida: 13,818
   Velocidad: 3.57
   Ataque 1: 9676 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 9676 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -3,871 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

276. H0ud1n1
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_08_platinum.png
   Vida: 11,512
   Velocidad: 7.69
   Ataque 1: 4100 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4100 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 820 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

277. FootBot
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_08_platinum.png
   Vida: 9,880
   Velocidad: 6.25
   Ataque 1: 3189 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3189 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -797 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

278. Geomega
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_07.png
   Vida: 13,916
   Velocidad: 3.45
   Ataque 1: 8293 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5845 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,824 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

279. Glotón
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_06_platinum.png
   Vida: 14,715
   Velocidad: 4.35
   Ataque 1: 6256 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3597 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 3,441 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

280. Seiyatsu
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_08.png
   Vida: 7,422
   Velocidad: 10.00
   Ataque 1: 2965 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2965 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -741 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png
`,DA=`281. Asaylan
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_08_platinum.png
   Vida: 8,609
   Velocidad: 5.00
   Ataque 1: 8201 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 8201 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -8,201 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

282. Wrath
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_08_platinum.png
   Vida: 9,948
   Velocidad: 3.70
   Ataque 1: 11492 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 11492 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 4,022 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

283. Lady Libertad
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_08.png
   Vida: 12,461
   Velocidad: 3.85
   Ataque 1: 6263 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6263 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,879 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

284. Gozer
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_08_platinum.png
   Vida: 12,777
   Velocidad: 5.00
   Ataque 1: 4923 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4923 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,708 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

285. Van Helsing
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_08_platinum.png
   Vida: 13,008
   Velocidad: 4.76
   Ataque 1: 5508 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5508 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,652 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

286. Kitty Ranger
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_08_platinum.png
   Vida: 10,989
   Velocidad: 6.67
   Ataque 1: 3210 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3210 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,284 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

287. Gorthaur el Cruel
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_09_fantasy.png
   Vida: 12,513
   Velocidad: 3.33
   Ataque 1: 14489 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 14489 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,622 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

288. El Rey sin Nombre
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_08_platinum.png
   Vida: 10,547
   Velocidad: 4.65
   Ataque 1: 6344 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6344 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,347 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

289. Naraxis
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_08_platinum.png
   Vida: 12,566
   Velocidad: 5.88
   Ataque 1: 3692 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3692 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,215 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

290. Andrómeda
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_08_platinum.png
   Vida: 7,242
   Velocidad: 7.14
   Ataque 1: 4495 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4495 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 3,596 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

291. Enano y Cerebro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_08_platinum.png
   Vida: 11,268
   Velocidad: 4.76
   Ataque 1: 4808 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4808 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -2,404 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

292. Arcángel
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_99.png
   Vida: 13,858
   Velocidad: 3.85
   Ataque 1: 6331 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 6331 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,899 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

293. Diablo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_99.png
   Vida: 13,172
   Velocidad: 3.33
   Ataque 1: 8140 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 8140 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,442 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

294. Drall
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_08_platinum.png
   Vida: 18,714
   Velocidad: 4.00
   Ataque 1: 6814 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6814 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,703 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

295. Noren
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_07.png
   Vida: 14,749
   Velocidad: 3.85
   Ataque 1: 7460 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7460 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,238 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

296. Sgt. Pandamonium
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_08_platinum.png
   Vida: 10,377
   Velocidad: 7.14
   Ataque 1: 4332 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4332 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,733 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

297. Omikami
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_08_platinum.png
   Vida: 13,308
   Velocidad: 3.85
   Ataque 1: 7154 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 7154 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -3,577 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

298. Makino
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_08_platinum.png
   Vida: 6,331
   Velocidad: 8.33
   Ataque 1: 5345 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5345 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,336 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

299. Chantecler
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_08_platinum.png
   Vida: 13,478
   Velocidad: 3.57
   Ataque 1: 9391 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 9391 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -3,756 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

300. Dr. Nucleus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_08.png
   Vida: 14,396
   Velocidad: 3.85
   Ataque 1: 7572 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 7572 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,272 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

301. Amo de las Llaves
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_09_platinum.png
   Vida: 12,648
   Velocidad: 3.57
   Ataque 1: 9792 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 9792 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -4,896 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

302. Carcinus Gigas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_09_platinum.png
   Vida: 17,469
   Velocidad: 5.26
   Ataque 1: 5936 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5936 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,078 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

303. Sanik
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_08_platinum.png
   Vida: 16,109
   Velocidad: 5.88
   Ataque 1: 3747 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3747 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,248 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

304. Necroparásito
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_07_platinum.png
   Vida: 15,089
   Velocidad: 6.67
   Ataque 1: 3135 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 1802 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,724 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

305. Proyecto 3V3
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_07_platinum.png
   Vida: 8,398
   Velocidad: 9.09
   Ataque 1: 4862 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2795 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,431 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

306. Optimus Zord
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_09_platinum.png
   Vida: 11,975
   Velocidad: 6.25
   Ataque 1: 3856 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3856 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -964 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

307. Faucesnegras
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_09_platinum.png
   Vida: 10,193
   Velocidad: 7.14
   Ataque 1: 3080 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3080 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,540 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

308. Tormenta de Fuego
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_08_platinum.png
   Vida: 11,152
   Velocidad: 6.25
   Ataque 1: 4352 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 2502 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,306 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

309. Golemagnus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_08_platinum.png
   Vida: 16,422
   Velocidad: 3.45
   Ataque 1: 8167 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4692 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,450 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

310. Dug Dario
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_08_platinum.png
   Vida: 13,117
   Velocidad: 4.55
   Ataque 1: 5107 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5107 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,809 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

311. Centinela R0B-H4N
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_08_platinum.png
   Vida: 12,981
   Velocidad: 5.56
   Ataque 1: 8214 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4223 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 3,696 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

312. Big Bo$$
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_09.png
   Vida: 14,134
   Velocidad: 3.45
   Ataque 1: 7728 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 7728 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,318 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

313. Reina Sylvidra
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_09_platinum.png
   Vida: 15,654
   Velocidad: 3.57
   Ataque 1: 7806 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 7806 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 4,684 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

314. Quetzalcóatl
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_09_platinum.png
   Vida: 11,873
   Velocidad: 5.00
   Ataque 1: 4468 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4468 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,234 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

315. Majin Zam
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_08_platinum.png
   Vida: 13,478
   Velocidad: 3.45
   Ataque 1: 10615 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 10615 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -2,654 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

316. Bruja de la Peste
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_08_platinum.png
   Vida: 12,226
   Velocidad: 4.76
   Ataque 1: 5406 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3291 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,973 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

317. Excaliduro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_09_platinum.png
   Vida: 13,675
   Velocidad: 4.76
   Ataque 1: 5304 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5304 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,122 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

318. Zigmo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_09_platinum.png
   Vida: 9,976
   Velocidad: 8.33
   Ataque 1: 2237 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2237 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,230 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

319. Gran Señor de las Tumbas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_08_platinum.png
   Vida: 10,424
   Velocidad: 6.25
   Ataque 1: 5379 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5379 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,775 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

320. Pirótropo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_09_platinum.png
   Vida: 13,083
   Velocidad: 4.55
   Ataque 1: 5868 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5868 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,467 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

321. Altaris
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_10_platinum.png
   Vida: 15,742
   Velocidad: 3.33
   Ataque 1: 12968 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 12968 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 4,539 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

322. Capitán Gorn
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_09_platinum.png
   Vida: 12,485
   Velocidad: 5.88
   Ataque 1: 4080 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4080 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,040 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

323. Yokozuna
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_08_platinum.png
   Vida: 10,839
   Velocidad: 7.69
   Ataque 1: 3352 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 1911 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,006 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

324. Calaca
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_09.png
   Vida: 14,783
   Velocidad: 3.70
   Ataque 1: 7494 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 7494 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 3,747 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

325. Lancelot
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_09_platinum.png
   Vida: 11,220
   Velocidad: 5.56
   Ataque 1: 9731 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4862 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,406 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

326. Centaurus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_09_platinum.png
   Vida: 16,204
   Velocidad: 5.26
   Ataque 1: 5039 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5039 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,016 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

327. Mon-Key Crew
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_09_platinum.png
   Vida: 10,003
   Velocidad: 6.67
   Ataque 1: 6100 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6100 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,403 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

328. Sound Killah
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_09_music.png
   Vida: 13,799
   Velocidad: 3.45
   Ataque 1: 15027 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 15027 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 4,508 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

329. Dracomago
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_09_platinum.png
   Vida: 11,914
   Velocidad: 4.00
   Ataque 1: 6644 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 6644 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,462 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

330. Caudillo Steam
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_09_platinum.png
   Vida: 16,422
   Velocidad: 4.44
   Ataque 1: 6161 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 6161 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,772 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

331. Cazarrecompensas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_05_platinum.png
   Vida: 13,070
   Velocidad: 4.76
   Ataque 1: 5263 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3087 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 2,105 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

332. Surfista del Espacio
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_10.png
   Vida: 15,147
   Velocidad: 3.85
   Ataque 1: 8184 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 8184 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,637 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

333. Mister T-Ger
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_09_platinum.png
   Vida: 11,927
   Velocidad: 7.69
   Ataque 1: 3352 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2013 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,341 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

334. Master Paw
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_10.png
   Vida: 12,522
   Velocidad: 3.45
   Ataque 1: 6854 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 6854 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,714 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

335. Grumpy Claus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_09.png
   Vida: 12,784
   Velocidad: 4.35
   Ataque 1: 5709 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5709 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,713 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

336. Sargento Dusk
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_10_platinum.png
   Vida: 12,335
   Velocidad: 5.00
   Ataque 1: 8752 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 8752 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,501 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

337. Gwenn
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_10_platinum.png
   Vida: 12,560
   Velocidad: 6.67
   Ataque 1: 3618 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3618 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,158 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

338. El Coleccionista
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_09_platinum.png
   Vida: 14,538
   Velocidad: 3.85
   Ataque 1: 6882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 3,303 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

339. El Veneno
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_10_platinum.png
   Vida: 11,784
   Velocidad: 5.56
   Ataque 1: 4230 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4230 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,480 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

340. Frankenhuahua
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_09_platinum.png
   Vida: 10,683
   Velocidad: 9.09
   Ataque 1: 3502 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 2013 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,101 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

341. Mad Mike
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_10_platinum.png
   Vida: 10,819
   Velocidad: 6.25
   Ataque 1: 6236 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6236 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -2,806 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

342. Jane Saw
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_09_platinum.png
   Vida: 14,783
   Velocidad: 4.17
   Ataque 1: 6297 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6297 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,834 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

343. Horax
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_09_platinum.png
   Vida: 13,790
   Velocidad: 3.85
   Ataque 1: 6868 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6868 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -2,747 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

344. Maestro Shinzo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_09_platinum.png
   Vida: 10,628
   Velocidad: 8.33
   Ataque 1: 2761 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2761 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,104 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

345. Xeleroth
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_09_platinum.png
   Vida: 15,946
   Velocidad: 3.45
   Ataque 1: 9642 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 9642 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,928 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

346. Excavalipsis
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_09_platinum.png
   Vida: 15,722
   Velocidad: 3.33
   Ataque 1: 8303 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 8303 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 3,985 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

347. El Enterrador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_10_western.png
   Vida: 18,971
   Velocidad: 3.33
   Ataque 1: 8727 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 8727 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -3,491 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

348. Zenguru
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_09_platinum.png
   Vida: 12,138
   Velocidad: 5.00
   Ataque 1: 4944 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4944 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,236 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

349. H.U.N.T.3.R
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_09_platinum.png
   Vida: 13,178
   Velocidad: 7.69
   Ataque 1: 4617 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2659 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 693 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

350. Arelvam
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_10_platinum.png
   Vida: 13,444
   Velocidad: 8.33
   Ataque 1: 3101 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 3101 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -930 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

351. Zar Bomba
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_09_platinum.png
   Vida: 12,696
   Velocidad: 4.35
   Ataque 1: 6195 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6195 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -2,478 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

352. Mago Ryzafredd
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_09_platinum.png
   Vida: 12,675
   Velocidad: 4.17
   Ataque 1: 6011 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6011 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,803 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

353. Hawkeye
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_10_platinum.png
   Vida: 9,574
   Velocidad: 7.14
   Ataque 1: 4372 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4372 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -1,968 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

354. Megastral
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_09_platinum.png
   Vida: 17,265
   Velocidad: 3.57
   Ataque 1: 9187 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4590 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,756 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

355. Liquidador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_09_platinum.png
   Vida: 15,497
   Velocidad: 4.65
   Ataque 1: 7636 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3910 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,909 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

356. Yggdrasil
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_10_platinum.png
   Vida: 17,796
   Velocidad: 3.85
   Ataque 1: 7854 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 7854 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,964 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

357. Rox McRain
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_09_platinum.png
   Vida: 9,500
   Velocidad: 8.33
   Ataque 1: 2693 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2693 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 808 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

358. Hadeath
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_09_platinum.png
   Vida: 15,620
   Velocidad: 4.17
   Ataque 1: 7038 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 7038 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -2,815 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

359. Divastator
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_10_platinum.png
   Vida: 10,574
   Velocidad: 6.67
   Ataque 1: 3536 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 3536 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,768 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

360. Angry Pork
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_10_platinum.png
   Vida: 13,444
   Velocidad: 4.35
   Ataque 1: 6487 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6487 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,595 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

361. Frankendwarf
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_10_platinum.png
   Vida: 14,749
   Velocidad: 3.85
   Ataque 1: 7344 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 7344 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -2,938 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

362. Akai-Bot
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_10.png
   Vida: 14,280
   Velocidad: 5.00
   Ataque 1: 5311 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5311 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,390 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

363. Krampus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_10_platinum.png
   Vida: 14,355
   Velocidad: 4.55
   Ataque 1: 6358 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6358 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,543 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

364. Waryena
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_10_platinum.png
   Vida: 15,110
   Velocidad: 3.45
   Ataque 1: 8228 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 8228 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -3,291 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

365. Bahamut
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_10_platinum.png
   Vida: 11,608
   Velocidad: 6.67
   Ataque 1: 3692 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3692 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,662 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

366. Mimi Cronocurva
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_10_platinum.png
   Vida: 6,684
   Velocidad: 11.11
   Ataque 1: 3720 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3720 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -744 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

367. Guardia Men'ki
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_10_platinum.png
   Vida: 9,180
   Velocidad: 9.09
   Ataque 1: 4128 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4128 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -2,477 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

368. Hipopotanque
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_10_platinum.png
   Vida: 16,844
   Velocidad: 3.45
   Ataque 1: 10533 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 10533 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,317 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

369. Hefesto
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_10_platinum.png
   Vida: 17,095
   Velocidad: 3.85
   Ataque 1: 8493 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 8493 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,123 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

370. T-3rr0r
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_10_platinum.png
   Vida: 19,312
   Velocidad: 5.88
   Ataque 1: 4699 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 2747 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,410 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

371. A027441
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_99_platinum.png
   Vida: 20,060
   Velocidad: 3.23
   Ataque 1: 9316 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 9316 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 3,726 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

372. Rey Lulu
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_10_platinum.png
   Vida: 13,471
   Velocidad: 3.45
   Ataque 1: 11179 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 11179 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 4,472 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

373. Kolossus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_99.png
   Vida: 19,652
   Velocidad: 3.51
   Ataque 1: 8527 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 8527 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,023 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

374. Kameo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_10_platinum.png
   Vida: 11,628
   Velocidad: 8.33
   Ataque 1: 4270 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2543 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,922 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

375. ED-404
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_10_platinum.png
   Vida: 19,638
   Velocidad: 4.00
   Ataque 1: 9690 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5719 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,907 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

376. Hellsaw
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_10_platinum.png
   Vida: 17,578
   Velocidad: 4.08
   Ataque 1: 7466 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 7466 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 4,107 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

377. Urgan
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_10_platinum.png
   Vida: 16,361
   Velocidad: 3.85
   Ataque 1: 10873 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5800 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,175 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

378. Buffalor
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_10_platinum.png
   Vida: 13,804
   Velocidad: 3.57
   Ataque 1: 9636 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 9636 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -3,854 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

379. Gamallia
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_10_platinum.png
   Vida: 9,418
   Velocidad: 5.00
   Ataque 1: 6834 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6834 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,187 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

380. Gakarian
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_10_platinum.png
   Vida: 13,185
   Velocidad: 6.45
   Ataque 1: 4876 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4876 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,463 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

381. S-K-Venger
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_10_platinum.png
   Vida: 13,090
   Velocidad: 3.45
   Ataque 1: 12206 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 12206 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 4,272 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

382. Overkill
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_10_platinum.png
   Vida: 15,014
   Velocidad: 3.45
   Ataque 1: 9425 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 9425 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 3,487 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

383. Capitán Achabe
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_10.png
   Vida: 12,070
   Velocidad: 7.69
   Ataque 1: 3842 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 3842 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -768 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

384. Aubraea Mutantula
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_11_platinum.png
   Vida: 13,498
   Velocidad: 5.56
   Ataque 1: 6066 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6066 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,730 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

385. Bregbeam
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_10_platinum.png
   Vida: 22,100
   Velocidad: 3.33
   Ataque 1: 11614 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5868 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,904 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

386. Piwisher
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_11.png
   Vida: 13,845
   Velocidad: 3.33
   Ataque 1: 7395 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7395 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,997 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

387. Nimrod
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_99_platinum.png
   Vida: 20,400
   Velocidad: 4.00
   Ataque 1: 8813 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 8813 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,084 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

388. E.T.-Liot
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_10_platinum.png
   Vida: 14,450
   Velocidad: 7.14
   Ataque 1: 4780 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2747 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -2,008 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

389. Spin Fury
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_11_platinum.png
   Vida: 5,814
   Velocidad: 10.53
   Ataque 1: 3971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3971 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 794 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

390. Cooktouille
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_11_platinum.png
   Vida: 13,056
   Velocidad: 4.00
   Ataque 1: 7344 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 7344 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -3,011 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

391. Orión
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_11_platinum.png
   Vida: 2,870
   Velocidad: 8.33
   Ataque 1: 6793 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 6793 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -679 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

392. Heimdall
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_11.png
   Vida: 11,291
   Velocidad: 7.69
   Ataque 1: 4692 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4692 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,314 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

393. Chun-Lei
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_11_platinum.png
   Vida: 5,950
   Velocidad: 10.00
   Ataque 1: 3638 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 3638 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 982 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

394. The Reef
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_11_beach.png
   Vida: 8,684
   Velocidad: 7.14
   Ataque 1: 5889 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5889 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 766 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

395. Sir Bannog
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_11_platinum.png
   Vida: 14,464
   Velocidad: 5.56
   Ataque 1: 6922 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6922 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -3,461 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

396. Pesadilla Viviente
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_11_platinum.png
   Vida: 10,078
   Velocidad: 11.76
   Ataque 1: 1714 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3210 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -428 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

397. An0malie
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_11_platinum.png
   Vida: 11,370
   Velocidad: 8.33
   Ataque 1: 4570 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4862 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,645 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

398. Owlock
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_11_platinum.png
   Vida: 13,593
   Velocidad: 4.17
   Ataque 1: 9506 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 9506 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -2,852 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

399. TriAD
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_11_platinum.png
   Vida: 8,099
   Velocidad: 10.00
   Ataque 1: 2706 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 2414 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,571 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

400. La Olvidada
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_11.png
   Vida: 18,632
   Velocidad: 4.55
   Ataque 1: 5250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3261 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,887 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

401. Mago de la Singularidad
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_99.png
   Vida: 13,943
   Velocidad: 4.00
   Ataque 1: 3835 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6800 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,266 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

402. Ishi no Ōkami
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_11_platinum.png
   Vida: 11,859
   Velocidad: 6.25
   Ataque 1: 5318 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5318 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -2,127 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

403. Disensión
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_11_platinum.png
   Vida: 14,151
   Velocidad: 3.77
   Ataque 1: 8323 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5943 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 3,246 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

404. Aqueronte
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_11.png
   Vida: 9,948
   Velocidad: 5.56
   Ataque 1: 7001 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4522 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 2,870 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

405. Drei, Space Corgi
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_11_platinum.png
   Vida: 14,443
   Velocidad: 5.56
   Ataque 1: 7290 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7290 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -2,916 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

406. Mix0-Logo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_11_platinum.png
   Vida: 14,770
   Velocidad: 5.26
   Ataque 1: 10064 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4998 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 3,321 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

407. Veren Kaeesu
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_11.png
   Vida: 9,285
   Velocidad: 5.88
   Ataque 1: 6429 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6429 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 2,057 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

408. Spada
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_11_platinum.png
   Vida: 11,492
   Velocidad: 7.14
   Ataque 1: 4304 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4304 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,722 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

409. Roadmaster
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_11_platinum.png
   Vida: 18,285
   Velocidad: 6.06
   Ataque 1: 3114 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5358 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -685 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

410. Gerard Steelgarden
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_11_platinum.png
   Vida: 19,727
   Velocidad: 4.17
   Ataque 1: 9948 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4971 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 4,178 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

411. Chocolem
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_11.png
   Vida: 11,856
   Velocidad: 4.00
   Ataque 1: 6678 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6678 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 2,003 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

412. Drudge Zombie
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_05_platinum.png
   Vida: 15,164
   Velocidad: 6.67
   Ataque 1: 6222 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6222 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 3,733 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

413. Animus de Irrealidad
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_99.png
   Vida: 15,565
   Velocidad: 6.67
   Ataque 1: 5654 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2825 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,696 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

414. Midas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_11_platinum.png
   Vida: 16,626
   Velocidad: 3.85
   Ataque 1: 8425 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 8425 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 4,213 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

415. Caliburn EX
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_11.png
   Vida: 16,062
   Velocidad: 4.26
   Ataque 1: 8044 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 8044 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,207 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

416. Santagonista
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_11.png
   Vida: 15,895
   Velocidad: 5.00
   Ataque 1: 6599 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 3570 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,640 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

417. Barbaro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_05_platinum.png
   Vida: 16,198
   Velocidad: 4.26
   Ataque 1: 9554 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 9554 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -3,822 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

418. Dama del Crepúsculo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_12_platinum.png
   Vida: 24,344
   Velocidad: 3.13
   Ataque 1: 9772 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 9772 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 3,909 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

419. Mecaovoide Arácneo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_11.png
   Vida: 10,033
   Velocidad: 8.00
   Ataque 1: 2057 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3577 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -823 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

420. Terror Abisal
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_11_platinum.png
   Vida: 13,416
   Velocidad: 6.67
   Ataque 1: 7079 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5324 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -3,539 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png
`,qA=`421. Oculys
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_11_platinum.png
   Vida: 14,763
   Velocidad: 4.00
   Ataque 1: 11349 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 11349 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -3,972 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

422. Pierrot
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_11_platinum.png
   Vida: 13,580
   Velocidad: 4.76
   Ataque 1: 8459 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 4230 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 4,060 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

423. Phileas Derocas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_12_platinum.png
   Vida: 16,334
   Velocidad: 4.35
   Ataque 1: 8983 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 8983 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,144 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

424. Dreadnought
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_11.png
   Vida: 15,259
   Velocidad: 3.64
   Ataque 1: 7704 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 7704 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 3,852 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

425. Missy Despierta
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_99.png
   Vida: 8,541
   Velocidad: 5.13
   Ataque 1: 8231 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 8231 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,235 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

426. Enviro 3.0
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_11_platinum.png
   Vida: 13,777
   Velocidad: 5.88
   Ataque 1: 5263 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3386 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,316 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

427. Asteroide Gestalt
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_11_platinum.png
   Vida: 16,449
   Velocidad: 6.25
   Ataque 1: 9812 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 4903 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 3,925 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

428. X'astuth
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_12_platinum.png
   Vida: 15,246
   Velocidad: 3.70
   Ataque 1: 8561 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 8561 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -5,993 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

429. Colmillo Rabioso
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_11_platinum.png
   Vida: 16,096
   Velocidad: 12.50
   Ataque 1: 2060 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 2060 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -206 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

430. Doctor del Farol
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_12.png
   Vida: 14,005
   Velocidad: 4.76
   Ataque 1: 6854 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4869 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -3,290 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

431. Leviatán
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_12_platinum.png
   Vida: 16,028
   Velocidad: 4.17
   Ataque 1: 9744 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5596 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -2,436 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

432. Explorador Sideral
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_e_12_platinum.png
   Vida: 11,920
   Velocidad: 4.55
   Ataque 1: 6059 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6195 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 1,818 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

433. Aullosaurio
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_d_12_platinum.png
   Vida: 14,674
   Velocidad: 3.33
   Ataque 1: 6310 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 9996 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -2,524 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

434. Protector de los Sueños
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_12.png
   Vida: 9,336
   Velocidad: 6.06
   Ataque 1: 6684 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 6684 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,337 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

435. Basilisco y Esdragón
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_12_vegetal.png
   Vida: 22,664
   Velocidad: 3.23
   Ataque 1: 9391 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 9391 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 3,569 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

436. Heredero de los 5 anillos
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_12_platinum.png
   Vida: 20,373
   Velocidad: 4.08
   Ataque 1: 10084 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 10084 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,513 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

437. Ballesto
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_12_platinum.png
   Vida: 11,832
   Velocidad: 3.85
   Ataque 1: 9785 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 8425 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -3,229 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

438. Cibermántico Etéreo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_12_platinum.png
   Vida: 14,124
   Velocidad: 5.26
   Ataque 1: 8745 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 8745 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 4,810 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

439. Lampyrion Solar
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_12.png
   Vida: 16,048
   Velocidad: 6.25
   Ataque 1: 5586 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 2791 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,234 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

440. Dimentio
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_11_platinum.png
   Vida: 9,704
   Velocidad: 8.85
   Ataque 1: 7555 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 7555 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,738 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

441. Generalísimo Chocoleón IV
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_12.png
   Vida: 17,337
   Velocidad: 4.26
   Ataque 1: 5151 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5151 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,060 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

442. Archivista Eterno
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_12_platinum.png
   Vida: 20,713
   Velocidad: 5.26
   Ataque 1: 8214 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5270 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 3,779 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

443. Ammonia Atlantica
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_12_platinum.png
   Vida: 14,314
   Velocidad: 4.55
   Ataque 1: 9432 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 9432 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 3,584 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

444. General de Terracota
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_12_platinum.png
   Vida: 15,191
   Velocidad: 3.70
   Ataque 1: 9976 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5420 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,494 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

445. Gran Gusano de los Túneles
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_12.png
   Vida: 13,671
   Velocidad: 3.45
   Ataque 1: 6028 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6028 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 3,014 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

446. Litominero Stellariano
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_12_platinum.png
   Vida: 14,511
   Velocidad: 5.00
   Ataque 1: 10458 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 10458 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -1,569 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

447. Capitán Águila
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_12.png
   Vida: 11,880
   Velocidad: 6.90
   Ataque 1: 5168 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5168 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,550 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

448. Octopía
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_99.png
   Vida: 15,290
   Velocidad: 3.57
   Ataque 1: 5362 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2679 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,413 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

449. Médico Astral
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_12_platinum.png
   Vida: 12,859
   Velocidad: 6.67
   Ataque 1: 6902 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6902 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,623 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

450. Simurgh
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_12_platinum.png
   Vida: 9,513
   Velocidad: 8.33
   Ataque 1: 7004 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3502 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,401 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

451. Väinämöinen
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_13_platinum.png
   Vida: 11,648
   Velocidad: 6.67
   Ataque 1: 5433 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 2713 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -3,260 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

452. Disfuncidroide
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_12_platinum.png
   Vida: 15,987
   Velocidad: 4.08
   Ataque 1: 8609 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4304 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -2,152 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

453. Caronte (Halloween)
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_12.png
   Vida: 16,493
   Velocidad: 3.64
   Ataque 1: 7983 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 7983 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,794 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

454. Cabloide
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_12_platinum.png
   Vida: 23,120
   Velocidad: 4.55
   Ataque 1: 8303 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4440 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,076 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

455. Exoceleste Álgido
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_12.png
   Vida: 10,642
   Velocidad: 4.17
   Ataque 1: 5052 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 7385 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,112 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

456. Clérigo Oscuro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_12_platinum.png
   Vida: 20,067
   Velocidad: 4.65
   Ataque 1: 6984 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 3917 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -3,492 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

457. D'Arathomis
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_13_platinum.png
   Vida: 12,199
   Velocidad: 6.25
   Ataque 1: 8527 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5685 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -1,705 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

458. Tenacity
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_12_platinum.png
   Vida: 15,919
   Velocidad: 3.92
   Ataque 1: 9683 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 9683 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 4,357 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

459. Regulo&Juzya
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_12.png
   Vida: 8,704
   Velocidad: 5.88
   Ataque 1: 8432 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 8432 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,686 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

460. Gelatina Purulenta
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_12_platinum.png
   Vida: 22,073
   Velocidad: 3.45
   Ataque 1: 7562 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 7562 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 3,025 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

461. Vivaldi
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_13.png
   Vida: 10,047
   Velocidad: 6.25
   Ataque 1: 3553 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 3553 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 1,066 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

462. Tecnocaracol
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_12_platinum.png
   Vida: 20,366
   Velocidad: 3.64
   Ataque 1: 11077 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 11077 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 5,539 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

463. Zapador de Madrigueras
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_12.png
   Vida: 8,340
   Velocidad: 6.25
   Ataque 1: 7874 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7874 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -3,150 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

464. Invocador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_12_platinum.png
   Vida: 10,812
   Velocidad: 8.33
   Ataque 1: 5182 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5426 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -1,554 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

465. Lepidoptech
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_12_platinum.png
   Vida: 11,363
   Velocidad: 7.41
   Ataque 1: 6841 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 6841 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -1,026 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

466. Huesamblaje
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_12_platinum.png
   Vida: 11,424
   Velocidad: 6.25
   Ataque 1: 7691 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 7691 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 5,768 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

467. Sasquatch
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_d_13_platinum.png
   Vida: 13,518
   Velocidad: 3.85
   Ataque 1: 10152 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6093 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -5,076 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

468. Thanaconda
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_12_platinum.png
   Vida: 14,232
   Velocidad: 4.35
   Ataque 1: 9255 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 9255 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -3,702 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

469. A00-C0R3-C0NTR0L
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_99.png
   Vida: 15,711
   Velocidad: 5.00
   Ataque 1: 6327 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3475 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 3,480 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

470. Hijo de la Tormenta
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_13_platinum.png
   Vida: 13,818
   Velocidad: 6.45
   Ataque 1: 8405 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 8650 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,101 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

471. Bricodrón LLK-215
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_12_platinum.png
   Vida: 13,505
   Velocidad: 5.26
   Ataque 1: 7718 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 7718 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,701 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

472. GAR, Zombi Soberano
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_13_platinum.png
   Vida: 24,650
   Velocidad: 3.70
   Ataque 1: 8915 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6025 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 4,457 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

473. Amalgalmas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_13.png
   Vida: 15,460
   Velocidad: 4.35
   Ataque 1: 6021 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6021 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,107 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

474. Llama Sensei
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_13_platinum.png
   Vida: 12,641
   Velocidad: 6.67
   Ataque 1: 5590 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 9058 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 1,956 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

475. Polaris
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_12.png
   Vida: 13,379
   Velocidad: 5.26
   Ataque 1: 7585 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5607 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 3,641 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

476. Myrmidus.exe
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_13_platinum.png
   Vida: 15,796
   Velocidad: 4.76
   Ataque 1: 8303 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 8303 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 3,736 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

477. Helicoide Boreal
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fa_13.png
   Vida: 9,700
   Velocidad: 5.71
   Ataque 1: 3869 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 2870 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,322 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

478. Antropobot Soñador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_13_platinum.png
   Vida: 17,966
   Velocidad: 3.92
   Ataque 1: 6603 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6603 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,971 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

479. Anteros
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_13.png
   Vida: 11,676
   Velocidad: 4.26
   Ataque 1: 5675 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5675 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,816 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

480. Doctor Desollador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_13_platinum.png
   Vida: 13,736
   Velocidad: 5.00
   Ataque 1: 11138 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 11614 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -5,458 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

481. Oryctolagus Exobioicus
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_13.png
   Vida: 8,367
   Velocidad: 8.00
   Ataque 1: 5603 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5603 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -1,121 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

482. Cr€$u$
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_12_platinum.png
   Vida: 16,993
   Velocidad: 3.45
   Ataque 1: 8915 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 12118 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -3,566 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

483. Asimov
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_13_platinum.png
   Vida: 6,576
   Velocidad: 8.33
   Ataque 1: 5202 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4522 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 1,821 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

484. Achernar
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_13_platinum.png
   Vida: 12,736
   Velocidad: 6.06
   Ataque 1: 5209 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 9459 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 1,563 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

485. El Motín
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_13_platinum.png
   Vida: 17,592
   Velocidad: 4.00
   Ataque 1: 8534 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 5542 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 3,414 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

486. Xinomas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_eb_13.png
   Vida: 12,849
   Velocidad: 5.26
   Ataque 1: 6229 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6229 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 1,869 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

487. Simulacro de Combate
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_99.png
   Vida: 19,938
   Velocidad: 3.51
   Ataque 1: 4831 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 4831 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 2,174 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

488. Helidrón KxT-271
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_13_platinum.png
   Vida: 4,631
   Velocidad: 9.52
   Ataque 1: 4950 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3475 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -990 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

489. Reed, el Verdadero Héroe
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_99.png
   Vida: 12,230
   Velocidad: 4.08
   Ataque 1: 4587 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4587 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,605 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

490. El Fosforescente
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bb_13_platinum.png
   Vida: 19,264
   Velocidad: 4.17
   Ataque 1: 10560 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 7324 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -4,224 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

491. Tezcatlipoca
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_13.png
   Vida: 8,837
   Velocidad: 4.44
   Ataque 1: 5012 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 8660 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -3,007 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

492. Scaramouche
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_12_platinum.png
   Vida: 6,222
   Velocidad: 8.33
   Ataque 1: 6358 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 4848 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,590 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

493. Traiciobaza
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_14.png
   Vida: 4,869
   Velocidad: 9.09
   Ataque 1: 5161 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 5399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 1,806 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

494. Astrobservador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_e_13_platinum.png
   Vida: 10,778
   Velocidad: 5.56
   Ataque 1: 9887 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 5664 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -2,966 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

495. Sierrametrodon
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_13_platinum.png
   Vida: 16,748
   Velocidad: 3.51
   Ataque 1: 12539 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 12539 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -5,266 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

496. Capsuladora MTZ-004
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_13.png
   Vida: 14,810
   Velocidad: 3.70
   Ataque 1: 6882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 6882 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,409 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

497. Núcleo seráfico
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fe_14_platinum.png
   Vida: 14,103
   Velocidad: 4.26
   Ataque 1: 6419 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 9928 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 3,210 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

498. Rey De Avalon
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fc_13_platinum.png
   Vida: 14,171
   Velocidad: 3.57
   Ataque 1: 12539 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 12539 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 4,389 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

499. K'yu T'ypaï
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ef_14.png
   Vida: 7,188
   Velocidad: 9.09
   Ataque 1: 3699 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 2604 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -1,110 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

500. Amistad Sin Limites
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_13_platinum.png
   Vida: 13,484
   Velocidad: 5.13
   Ataque 1: 10771 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 8160 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 3,231 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

501. Sakuraboshi
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_13_platinum.png
   Vida: 13,246
   Velocidad: 4.55
   Ataque 1: 9663 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 7711 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -3,865 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

502. Giganto-Moai
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_14.png
   Vida: 14,321
   Velocidad: 5.00
   Ataque 1: 5549 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 3437 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,220 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

503. TCB-8566 Trafficroid
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_13_platinum.png
   Vida: 13,967
   Velocidad: 5.88
   Ataque 1: 7630 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5746 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,289 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

504. Bearsikk Sikleast
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_13_platinum.png
   Vida: 17,299
   Velocidad: 3.70
   Ataque 1: 10873 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 10873 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 3,588 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

505. Capitan Barbanegra
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cb_14_platinum.png
   Vida: 17,075
   Velocidad: 3.45
   Ataque 1: 11771 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 8602 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -4,708 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

506. La Anárquica
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_13_platinum.png
   Vida: 10,118
   Velocidad: 5.71
   Ataque 1: 5746 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 8323 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,873 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

507. Terror Jurasico
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dc_14.png
   Vida: 13,182
   Velocidad: 3.45
   Ataque 1: 6960 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6960 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -4,176 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

508. Emperador Helado
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_df_13_platinum.png
   Vida: 13,423
   Velocidad: 4.55
   Ataque 1: 10173 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 7854 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 4,578 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

509. Breakmaster
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ca_14_olympics.png
   Vida: 14,729
   Velocidad: 4.55
   Ataque 1: 13763 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 10044 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,753 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

510. El Descolorido
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_13_platinum.png
   Vida: 16,408
   Velocidad: 4.26
   Ataque 1: 10547 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 10547 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -3,691 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

511. Azaronimo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_99.png
   Vida: 12,124
   Velocidad: 5.88
   Ataque 1: 7902 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5063 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,529 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

512. Professor Cronomantico
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ac_14_platinum.png
   Vida: 17,279
   Velocidad: 3.57
   Ataque 1: 11213 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 11213 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -2,243 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

513. Golem de Epocas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_13_platinum.png
   Vida: 23,664
   Velocidad: 3.45
   Ataque 1: 7568 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 7568 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -2,649 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

514. La locura reptante
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_db_14.png
   Vida: 13,556
   Velocidad: 3.57
   Ataque 1: 6045 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 3352 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -2,418 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

515. Hekatoncheiros
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_13_platinum.png
   Vida: 16,490
   Velocidad: 3.39
   Ataque 1: 12526 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 12526 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: -4,384 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

516. Atlas
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_13_platinum.png
   Vida: 15,851
   Velocidad: 4.26
   Ataque 1: 10486 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 10486 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 3,670 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

517. Peregrino Espacial
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_13_platinum.png
   Vida: 12,730
   Velocidad: 5.88
   Ataque 1: 8459 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6691 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 2,707 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

518. Termodroide Celsius
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_99.png
   Vida: 16,167
   Velocidad: 4.26
   Ataque 1: 6814 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6814 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 3,066 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

519. Black I.C.E.
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_14_platinum.png
   Vida: 9,187
   Velocidad: 10.00
   Ataque 1: 5950 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5950 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -3,868 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

520. Profeta del Crepúsculo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_14.png
   Vida: 3,842
   Velocidad: 3.57
   Ataque 1: 10258 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 6882 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: 4,103 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

521. Señor Bestial
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_14_platinum.png
   Vida: 16,599
   Velocidad: 3.57
   Ataque 1: 10118 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 8038 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -4,047 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

522. Freyja, Reina de los Vanir
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fd_14.png
   Vida: 13,899
   Velocidad: 4.08
   Ataque 1: 8320 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 8320 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 4,160 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

523. Altísimo Candelabro
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_13_platinum.png
   Vida: 13,892
   Velocidad: 4.00
   Ataque 1: 7786 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 7786 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: 3,114 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

524. El Arquitecto
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_13_platinum.png
   Vida: 12,995
   Velocidad: 4.44
   Ataque 1: 12995 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 12995 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -4,548 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

525. Medinosaurio
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_13_platinum.png
   Vida: 11,390
   Velocidad: 6.25
   Ataque 1: 10275 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 10275 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -3,082 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

526. Fiera del Campo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_14_platinum.png
   Vida: 16,225
   Velocidad: 4.65
   Ataque 1: 7385 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 7385 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -3,692 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

527. B.U.N. Genio
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_da_14.png
   Vida: 10,197
   Velocidad: 7.41
   Ataque 1: 5967 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5967 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 1,492 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

528. Gladiador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_c_14_platinum.png
   Vida: 15,259
   Velocidad: 4.35
   Ataque 1: 9812 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 7643 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 4,416 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

529. Hidrira
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ed_14_platinum.png
   Vida: 19,414
   Velocidad: 3.45
   Ataque 1: 13144 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 10044 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 3,943 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

530. Infinito Supermasivo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_14.png
   Vida: 15,864
   Velocidad: 3.77
   Ataque 1: 6780 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 6780 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 4,068 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

531. Automata
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_14_platinum.png
   Vida: 11,478
   Velocidad: 6.06
   Ataque 1: 7555 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5583 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -3,022 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

532. Nexo Orbital
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ee_13_platinum.png
   Vida: 17,449
   Velocidad: 3.92
   Ataque 1: 11295 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 8391 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 5,422 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

533. Mascarada Emocional
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ff_99.png
   Vida: 18,122
   Velocidad: 3.39
   Ataque 1: 8945 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 6157 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -3,310 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

534. Mago
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_f_14_platinum.png
   Vida: 11,499
   Velocidad: 5.88
   Ataque 1: 7711 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 5331 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 2,699 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

535. Zagam, Rey De La Avaricia
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_fb_14.png
   Vida: 22,664
   Velocidad: 4.08
   Ataque 1: 7993 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Ataque 2: 7993 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -1,998 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

536. Sangresquito
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_13_platinum.png
   Vida: 5,848
   Velocidad: 7.69
   Ataque 1: 6018 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6018 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -6,018 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

537. Don Gamberetti
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cd_14_platinum.png
   Vida: 13,410
   Velocidad: 3.85
   Ataque 1: 13410 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 13410 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 6,034 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

538. Rey Azul
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cc_14_chess.png
   Vida: 19,598
   Velocidad: 3.13
   Ataque 1: 9799 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6895 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Habilidad: 7,839 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

539. Espectroplasma
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_14_platinum.png
   Vida: 13,267
   Velocidad: 5.41
   Ataque 1: 6997 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 4903 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -2,799 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

540. El Presentador
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_14.png
   Vida: 15,494
   Velocidad: 5.56
   Ataque 1: 5250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5250 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -2,100 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

541. Viajero de Vortice
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_13_platinum.png
   Vida: 10,220
   Velocidad: 3.64
   Ataque 1: 17598 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 17598 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: -3,520 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

542. D.A.B.
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_14_platinum.png
   Vida: 21,406
   Velocidad: 3.70
   Ataque 1: 8459 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 8459 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -2,961 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

543. Mecargola
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ba_14.png
   Vida: 7,551
   Velocidad: 5.88
   Ataque 1: 6229 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 6229 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: -5,606 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

544. Hielo Patinadora Yria
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_cf_14_platinum.png
   Vida: 5,168
   Velocidad: 10.53
   Ataque 1: 6229 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 6229 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -4,360 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

545. Estrellador Telurico
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_de_15.png
   Vida: 17,037
   Velocidad: 3.57
   Ataque 1: 8911 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 8911 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 5,347 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

546. Origamix
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ad_14_platinum.png
   Vida: 2,407
   Velocidad: 11.11
   Ataque 1: 5916 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 5916 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: 2,071 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

547. El Glitchy Corazon
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_15.png
   Vida: 13,141
   Velocidad: 5.41
   Ataque 1: 7232 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Ataque 2: 7232 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Habilidad: -3,616 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

548. Spiraxia
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_e_14_platinum.png
   Vida: 13,974
   Velocidad: 4.08
   Ataque 1: 9296 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 6637 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: 4,648 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

549. Irradiancia
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bf_14_platinum.png
   Vida: 12,655
   Velocidad: 3.45
   Ataque 1: 14851 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 14851 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_f.png
   Habilidad: -14,851 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

550. El Hambre
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_be_15.png
   Vida: 10,608
   Velocidad: 3.85
   Ataque 1: 13399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_b.png
   Ataque 2: 13399 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 4,690 | Icono: https://pokradex.org/MutantsGG/assets/ability_regenerate_big.png

551. Dandy Cosmico
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ce_14_platinum.png
   Vida: 7,779
   Velocidad: 5.88
   Ataque 1: 8378 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_c.png
   Ataque 2: 8378 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Habilidad: 2,094 | Icono: https://pokradex.org/MutantsGG/assets/ability_slash_big.png

552. Kereon del Abismo
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ea_15_platinum.png
   Vida: 17,755
   Velocidad: 3.77
   Ataque 1: 12131 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_e.png
   Ataque 2: 12131 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_a.png
   Habilidad: 7,643 | Icono: https://pokradex.org/MutantsGG/assets/ability_shield_big.png

553. Apiarca
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_d_14_platinum.png
   Vida: 2,890
   Velocidad: 11.11
   Ataque 1: 6263 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 5664 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_n.png
   Habilidad: -6,889 | Icono: https://pokradex.org/MutantsGG/assets/ability_retaliate_big.png

554. Ornitorrinco
   Imagen mutante: https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_dd_15.png
   Vida: 12,685
   Velocidad: 5.88
   Ataque 1: 6117 | Triple: no | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Ataque 2: 4525 x3 | Triple: sí | Icono: https://pokradex.org/MutantsGG/assets/genes/big_d.png
   Habilidad: -2,447 | Icono: https://pokradex.org/MutantsGG/assets/ability_weaken_big.png
`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Gr={vida:"https://pokradex.org/MutantsGG/assets/icon_hp.png",velocidad:"https://pokradex.org/MutantsGG/assets/icon_speed.png"};function If(a){const s=a.split("|").map(h=>h.trim()),l=s[0]||"",r=s.find(h=>h.toLowerCase().includes("triple:")),d=r?r.toLowerCase().includes("sí"):l.toLowerCase().includes("x3"),p=s.find(h=>h.toLowerCase().includes("icono:")),g=p?p.replace(/icono:/i,"").trim():"";return{valor:l,es_triple:d,icono:g}}function RA(a){const s=a.split("|").map(p=>p.trim()),l=s[0]||"",r=s.find(p=>p.toLowerCase().includes("icono:")),d=r?r.replace(/icono:/i,"").trim():"";return{valor:l,icono:d}}const OA=["a_01","a_02","aa_01","aa_02","ab_01","ab_02","ab_03","ac_01","ac_02","ac_03","ad_01","ad_02","ae_01","ae_02","af_01","af_02","b_01","b_02","b_03","ba_01","ba_02","bb_01","bb_02","bc_01","bc_02","bd_01","bd_02","be_01","be_02","be_03","bf_01","bf_02","c_01","c_02","ca_01","ca_02","ca_03","cb_01","cb_02","cc_01","cc_02","cd_01","cd_02","cd_03","ce_01","ce_03","cf_01","cf_02","d_01","da_01","da_02","db_01","db_02","db_03","dc_01","dc_02","dc_03","dd_01","dd_02","de_01","de_02","df_01","df_02","e_01","ea_01","ea_02","ea_03","eb_01","eb_02","eb_03","ec_01","ec_02","ed_01","ed_02","ee_01","ee_02","ee_03","ef_01","ef_02","ef_03","f_01","f_03","fa_01","fa_02","fb_01","fb_02","fb_03","fc_01","fc_02","fd_01","fd_02","fd_03","fe_01","fe_02","ff_01","ff_02","fc_03","cb_03","ba_03","ff_03","bb_03","de_03","da_03","bf_03","cd_04","dc_04","aa_03","d_03","ec_03","bc_03","ad_03","af_04","ae_03","fb_04","bd_03","cf_04","ce_02","dd_03","cc_03","df_03","ed_03","af_03","bc_04","db_04","fa_03","fe_04","fe_03","a_03","cf_03","de_04","ba_04","cb_04","fd_04","fc_04","fa_04","bf_04","fe_05","ca_04","df_04","ed_04","ac_04","eb_04","de_05","bf_05","c_03","ec_04","ef_04","ff_04","ad_04","cc_04","ab_04","ce_04","bd_99","bb_04","aa_04","ae_04","cb_05","af_05","da_04","bd_04","fc_05","ee_04","dd_04","be_04","ea_04","ef_05","df_99","fb_05","eb_05","ca_05","ac_05","ab_05","aa_05","fa_05","fe_99","ce_05","e_03","cc_05","da_05","df_05","db_05","bc_05","dc_05","ed_05","ec_05","fd_05","ec_06","ff_05","be_05","ad_05","bd_05","dd_05","da_06","cf_05","bb_05","cf_06","cd_05","ea_05","af_06","ae_05","ee_05","ba_05","ce_06","fb_06","bc_06","fd_06","dc_06","ed_06","fa_06","bf_06","ad_06","cd_06","db_06","ac_06","fe_06","eb_06","ea_06","be_06","b_04","ab_06","ef_06","fc_06","df_06","cb_06","dd_06","de_06","ca_06","ff_06","bd_06","af_07","cf_07","ae_06","ba_06","ec_07","ed_07","bd_07","db_07","da_07","fe_07","ab_07","df_07","bf_07","ee_06","aa_06","ce_07","cc_06","cc_07","fc_07","ba_07","f_04","fd_07","ef_07","ad_07","ac_07","ca_07","fb_07","fa_07","de_07","cb_07","bc_07","cd_07","ea_07","ee_07","be_07","dd_07","eb_07","ec_08","cf_08","bc_08","ac_08","dd_08","de_08","fc_08","ae_07","db_08","af_08","fa_08","ff_07","bb_06","ef_08","da_08","cb_08","ea_08","fb_08","bf_08","ad_08","fc_09","ce_08","ba_08","ae_08","bd_08","fa_99","eb_99","cd_08","dc_07","ed_08","fd_08","ca_08","df_08","eb_08","cf_09","ad_09","dc_08","bb_07","aa_07","ac_09","bd_09","ff_08","ee_08","be_08","aa_08","ca_09","eb_09","df_09","fe_08","bb_08","ec_09","de_09","ab_08","be_09","ca_10","ea_09","cc_08","bf_09","cc_09","ae_09","cd_09","da_09","fd_09","af_09","a_05","ea_10","dd_09","fd_10","ab_09","ac_10","df_10","bc_09","af_10","bb_09","de_10","cb_09","db_09","dc_09","fe_09","ba_09","bf_10","fa_09","aa_09","cf_10","ce_09","ef_09","da_10","ee_09","ff_09","fb_10","ed_09","fb_09","ef_10","ed_10","cb_10","ae_10","dc_10","bd_10","fe_10","fa_10","cd_10","ad_10","fc_10","bb_10","af_99","bc_10","ce_99","dd_10","aa_10","ba_10","cc_10","db_10","ec_10","eb_10","ab_10","be_10","ce_10","eb_11","ff_10","db_11","fc_99","ee_10","ac_11","bd_11","fa_11","af_11","ce_11","ca_11","cd_11","fb_11","da_11","ed_11","aa_11","bb_11","ef_99","fd_11","cb_11","bf_11","de_11","ae_11","ec_11","dc_11","ba_11","ff_11","df_11","b_05","ee_99","fc_11","cf_11","cc_11","c_05","fb_12","ad_11","dd_11","be_11","fe_11","ac_12","ea_11","ca_99","ab_11","ee_11","ef_12","bc_11","bb_12","de_12","e_12","d_12","af_12","df_12","cf_12","cb_12","fa_12","dd_12","ef_11","fc_12","ff_12","ed_12","ca_12","db_12","ec_12","cd_12","ed_99","eb_12","fd_12","f_13","ab_12","bc_12","aa_12","fe_12","bf_12","c_13","ae_12","ce_12","be_12","fe_13","da_12","dc_12","f_12","ad_12","b_12","d_13","bd_12","aa_99","cf_13","ea_12","b_13","bf_13","dd_13","ee_12","ad_13","fa_13","da_13","ca_13","bc_13","de_13","ba_12","a_13","ef_13","cb_13","eb_13","ab_99","ae_13","cf_99","bb_13","fd_13","cc_12","bc_14","e_13","dc_13","ac_13","fe_14","fc_13","ef_14","cc_13","ff_13","ae_14","aa_13","cd_13","cb_14","ba_13","dc_14","df_13","ca_14","db_13","ae_99","ac_14","af_13","db_14","ec_13","ce_13","ea_13","ea_99","af_14","ff_14","dd_14","fd_14","fb_13","ab_13","ed_13","bd_14","da_14","c_14","ed_14","de_14","a_14","ee_13","ff_99","f_14","fb_14","bd_13","cd_14","cc_14","b_14","ab_14","be_13","ea_14","ba_14","cf_14","de_15","ad_14","ab_15","e_14","bf_14","be_15","ce_14","ea_15","d_14","dd_15"],HA={};OA.forEach((a,s)=>{HA[a.toLowerCase()]=s+1});const Xo=[];function LA(a){const s=a.match(/specimen_([a-zA-Z0-9_]+)/);if(!s)return"";const l=s[1].toLowerCase().split("_");return l.length>=2?`${l[0]}_${l[1]}`:l[0]||""}function Vx(){if(Xo.length>0)return;[CA,VA,DA,qA].forEach(s=>{const l=s.split(/\r?\n/);let r=null;for(const d of l){const p=d.trim();if(!p)continue;const g=p.match(/^(\d+)\.\s*(.+)$/);if(g){r&&Sf(r),r={id:g[1],nombre:g[2],imagen:"",vida:"",velocidad:"",ataque1:"",ataque2:"",habilidad:""};continue}r&&(p.startsWith("Imagen mutante:")?r.imagen=p.replace("Imagen mutante:","").trim():p.startsWith("Vida:")?r.vida=p.replace("Vida:","").trim():p.startsWith("Velocidad:")?r.velocidad=p.replace("Velocidad:","").trim():p.startsWith("Ataque 1:")?r.ataque1=p.replace("Ataque 1:","").trim():p.startsWith("Ataque 2:")?r.ataque2=p.replace("Ataque 2:","").trim():p.startsWith("Habilidad:")&&(r.habilidad=p.replace("Habilidad:","").trim()))}r&&Sf(r)}),Xo.sort((s,l)=>parseInt(s.id,10)-parseInt(l.id,10))}function Sf(a){const s=LA(a.imagen);let l=s.split("_")[0].split("");(l.length===0||!l[0])&&(l=["n"]);const r=[...l].sort().join(""),d=Vr.find(H=>H.id===l[0]),p=Vr.find(H=>H.id===l[1])||d,g=(d==null?void 0:d.image)||"",h=(p==null?void 0:p.image)||g,f=If(a.ataque1||""),b=If(a.ataque2||""),x=RA(a.habilidad||""),k=parseFloat(a.vida.replace(/,/g,""))||0,G=parseFloat(a.velocidad)||0,y=f.valor.toLowerCase().replace(/x\s*3/g,"").replace(/,/g,"").trim(),M=parseFloat(y)||0,j=x.valor.toLowerCase().replace(/,/g,"").trim(),I=parseFloat(j)||0;Xo.push({id:a.id,nombre:a.nombre,imagen:a.imagen,vida:a.vida,velocidad:a.velocidad,ataques:[f,b],habilidad:x,tipoIcono:g,skinIcono:h,codigo:s.toUpperCase(),genes:l,sortedGenes:r,stats:{hp:k,atk:M,spd:G,def:I,hab:I}})}Vx();/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function zA(a){const s=String(a||"").split("_")[0].toLowerCase().split(""),l=Ms[s[0]]||Ms.n,r=Ms[s[1]]||Ms[s[0]]||Ms.n;return[l[0],r[1]||r[0]]}function UA(a,s){const[l,r]=zA(s),d=String(a||s||"?").replace(/[^A-Za-zÁÉÍÓÚÜÑ0-9 ]/g," ").split(/\s+/).filter(Boolean).slice(0,2).map(h=>h[0]).join("").toUpperCase()||"MG",p=String(a||"").replace(/&/g,"&amp;").replace(/</g,"&lt;"),g=`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${l}"/>
        <stop offset="100%" stop-color="${r}"/>
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="35%" r="55%">
        <stop offset="0%" stop-color="rgba(255,255,255,.65)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
      </radialGradient>
    </defs>
    <rect width="600" height="600" rx="42" fill="#020617"/>
    <rect x="18" y="18" width="564" height="564" rx="34" fill="url(#g)" opacity="0.88"/>
    <circle cx="300" cy="190" r="210" fill="url(#glow)" opacity="0.25"/>
    <rect x="50" y="438" width="500" height="96" rx="24" fill="rgba(2,6,23,.44)" stroke="rgba(255,255,255,.18)"/>
    <text x="300" y="305" text-anchor="middle" fill="white" font-family="Inter, Arial, sans-serif" font-weight="900" font-size="170">${d}</text>
    <text x="300" y="495" text-anchor="middle" fill="white" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="28" opacity="0.92">${p.slice(0,24)}</text>
  </svg>`;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(g)}`}function vs(a){return Number(a).toLocaleString("es-PE",{minimumFractionDigits:0,maximumFractionDigits:2})}const jf=({mutant:a})=>{var I,H,X,L;const{translate:s}=St(),[l,r]=O.useState(!1),d=a.codigo.split("_")[0].toLowerCase().split(""),p=d.map(D=>Vr.find(Q=>Q.id===D)).filter(Boolean),g=()=>{navigator.clipboard.writeText(a.codigo.toUpperCase()).catch(()=>{}),r(!0),setTimeout(()=>r(!1),2e3)},h=a.ataques[0],f=a.ataques[1]||a.ataques[0],b=(h==null?void 0:h.es_triple)||(h==null?void 0:h.valor.toLowerCase().includes("x3")),x=(f==null?void 0:f.es_triple)||(f==null?void 0:f.valor.toLowerCase().includes("x3")),k=D=>D?D.toLowerCase().replace(/\s*x3/g,"").toUpperCase():"1,500",G=a.fallbackImagen||UA(a.nombre,a.codigo),y=a.nombre.replace(/^#\d+\s*/i,"").replace(/^\d+\.\s*/i,""),M=d[0]||"n",j=Ms[M]||["#64748b","#334155"];return i.jsxs(i.Fragment,{children:[i.jsxs("article",{className:"group relative flex sm:hidden w-full items-stretch bg-[#080f1d] border border-white/[0.06] hover:border-blue-500/30 rounded-[22px] overflow-hidden shadow-2xl transition-all duration-300",children:[i.jsx("div",{className:"absolute inset-0 opacity-[0.02] pointer-events-none transition-opacity duration-300 group-hover:opacity-[0.05]",style:{background:`radial-gradient(circle at center, ${j[0]}, transparent 70%)`}}),i.jsxs("div",{className:"relative w-[120px] xs:w-[135px] shrink-0 flex items-center justify-center p-3 overflow-hidden bg-gradient-to-b from-[#111d35] to-[#080f1d] border-r border-white/[0.04]",children:[i.jsx("div",{className:"absolute inset-0 opacity-25 pointer-events-none",style:{background:`radial-gradient(ellipse at 50% 0%, ${j[0]}50, transparent 75%)`}}),i.jsx("img",{className:"mutant-thumb max-w-[85%] max-h-[85%] object-contain transition-transform duration-300 group-hover:scale-105",src:a.imagen,alt:y,loading:"lazy",onError:D=>{const Q=D.currentTarget;Q.src=G,Q.onerror=null}}),i.jsx("div",{className:"absolute top-2.5 left-2.5 flex flex-row gap-2 z-20",children:p.map((D,Q)=>i.jsx("div",{className:"w-[30px] h-[30px] xs:w-[34px] xs:h-[34px] rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center",children:i.jsx("img",{src:D==null?void 0:D.image,alt:D==null?void 0:D.name,className:"w-[82%] h-[82%] object-contain text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"})},Q))})]}),i.jsxs("div",{className:"flex-1 p-3 flex flex-col justify-between gap-1.5 text-left min-w-0",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"m-0 text-[13px] font-black text-white uppercase tracking-tight leading-none truncate pr-1",children:y}),i.jsxs("div",{className:"flex items-center gap-1.5 mt-1",children:[i.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:j[0],boxShadow:`0 0 6px ${j[0]}a0`}}),i.jsx("span",{className:"font-mono font-bold text-[9px] uppercase text-slate-400 tracking-wider",children:a.codigo})]})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-1 px-0.5",children:[i.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[i.jsx("img",{src:Gr.vida,alt:"HP",className:"w-[13px] h-[13px] object-contain shrink-0"}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:"HP"}),i.jsx("span",{className:"text-white font-mono font-black text-[9.5px] leading-tight block select-all truncate",children:a.vida})]})]}),i.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[i.jsx("img",{src:Gr.velocidad,alt:"SPD",className:"w-[13px] h-[13px] object-contain shrink-0"}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:"SPD"}),i.jsx("span",{className:"text-white font-mono font-black text-[9.5px] leading-tight block select-all truncate",children:a.velocidad})]})]}),i.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[i.jsx("img",{src:(h==null?void 0:h.icono)||a.tipoIcono,alt:"AT",className:"w-[13px] h-[13px] object-contain shrink-0"}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsxs("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:["AT1",b&&i.jsx("span",{className:"text-amber-500 font-extrabold ml-0.5 text-[6px]",children:"x3"})]}),i.jsx("span",{className:`font-mono font-black text-[9.5px] leading-tight block select-all truncate ${b?"text-amber-400":"text-white"}`,children:k(h==null?void 0:h.valor)})]})]}),i.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[i.jsx("img",{src:(f==null?void 0:f.icono)||a.skinIcono,alt:"AT",className:"w-[13px] h-[13px] object-contain shrink-0"}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsxs("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:["AT2",x&&i.jsx("span",{className:"text-amber-500 font-extrabold ml-0.5 text-[6px]",children:"x3"})]}),i.jsx("span",{className:`font-mono font-black text-[9.5px] leading-tight block select-all truncate ${x?"text-amber-400":"text-white"}`,children:k(f==null?void 0:f.valor)})]})]}),i.jsxs("div",{className:"col-span-2 bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center justify-between gap-1.5",children:[i.jsxs("div",{className:"flex items-center gap-1 min-w-0",children:[i.jsx("img",{src:((I=a.habilidad)==null?void 0:I.icono)||"https://pokradex.org/MutantsGG/assets/ability_shield_big.png",alt:"DEF",className:"w-[13px] h-[13px] object-contain shrink-0"}),i.jsx("span",{className:"text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:"DEF / HAB"})]}),i.jsx("span",{className:"text-white font-mono font-black text-[9.5px] leading-none select-all truncate pr-1",children:((H=a.habilidad)==null?void 0:H.valor)||"1,000"})]})]}),i.jsx("button",{onClick:g,className:`w-full py-1.5 text-[8px] font-black uppercase tracking-[0.14em] transition-all flex items-center justify-center gap-1.5 border leading-none ${l?"bg-green-500/10 border-green-500/20 text-green-400":"bg-transparent border-white/[0.08] text-white active:scale-[0.97]"}`,style:{borderRadius:"100px"},children:l?i.jsxs(i.Fragment,{children:[i.jsx(Er,{size:10,className:"shrink-0 text-green-400 animate-bounce"}),i.jsx("span",{children:s("mutant.verified")})]}):i.jsxs(i.Fragment,{children:[i.jsx(Bu,{size:9,className:"shrink-0 opacity-85"}),i.jsx("span",{children:s("mutant.extract_code")})]})})]})]}),i.jsxs("article",{className:"group relative hidden sm:flex flex-col w-full h-full max-w-[340px] sm:max-w-none mx-auto bg-[#080f1d] border border-white/[0.06] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1",style:{"--dynamic-glow":j[0]},children:[i.jsx("div",{className:"absolute inset-0 rounded-[24px] sm:rounded-[28px] border border-transparent transition-colors duration-300 group-hover:border-[var(--dynamic-glow)]/40 pointer-events-none z-30",style:{content:'""'}}),i.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0",style:{background:`radial-gradient(circle at center, ${j[0]}15, transparent 75%)`}}),i.jsxs("div",{className:"relative h-32 sm:h-36 w-full flex items-center justify-center p-2 sm:p-3 overflow-hidden bg-gradient-to-b from-[#111d35] to-[#080f1d] border-b border-white/[0.04] z-10 shrink-0",children:[i.jsx("div",{className:"absolute inset-0 opacity-25 pointer-events-none transition-opacity duration-300 group-hover:opacity-40",style:{background:`radial-gradient(ellipse at 50% 0%, ${j[0]}60, transparent 75%)`}}),i.jsx("img",{className:"mutant-thumb max-w-[80%] max-h-[80%] object-contain transition-transform duration-500 group-hover:scale-105",src:a.imagen,alt:y,loading:"lazy",onError:D=>{const Q=D.currentTarget;Q.src=G,Q.onerror=null}}),i.jsx("div",{className:"absolute top-3 left-3 flex flex-row gap-2.5 z-20",children:p.map((D,Q)=>i.jsxs("div",{className:"relative group/badge",children:[i.jsx("div",{className:"w-[34px] h-[34px] sm:w-[42px] sm:h-[42px] rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg",children:i.jsx("img",{src:D==null?void 0:D.image,alt:D==null?void 0:D.name,className:"w-[84%] h-[84%] object-contain text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"})}),i.jsx("div",{className:"absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black text-[8px] font-black uppercase tracking-widest text-white rounded-md opacity-0 group-hover/badge:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none shadow-xl z-30",children:D==null?void 0:D.name})]},Q))})]}),i.jsxs("div",{className:"p-3 sm:p-3.5 flex flex-col flex-grow gap-2.5 text-left z-10",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"m-0 text-xs sm:text-xs md:text-sm font-black text-white uppercase tracking-tight leading-snug group-hover:text-amber-400 transition-colors break-words line-clamp-1 pr-1",children:y}),i.jsxs("div",{className:"flex items-center gap-1.5 mt-1.5",children:[i.jsx("span",{className:"w-2 h-2 rounded-full shadow-lg",style:{backgroundColor:j[0],boxShadow:`0 0 8px ${j[0]}`}}),i.jsx("span",{className:"font-mono font-bold text-[9px] uppercase text-slate-400 tracking-wider",children:a.codigo})]})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-1.5",children:[i.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-red-500/30 hover:bg-[#0b1325] transition-all",children:[i.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[i.jsx("img",{src:Gr.vida,alt:"HP",className:"w-[14px] h-[14px] object-contain shrink-0"}),i.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"HP"})]}),i.jsx("span",{className:"text-white font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all",children:a.vida})]}),i.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-sky-500/30 hover:bg-[#0b1325] transition-all",children:[i.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[i.jsx("img",{src:Gr.velocidad,alt:"SPD",className:"w-[14px] h-[14px] object-contain shrink-0"}),i.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"SPD"})]}),i.jsx("span",{className:"text-white font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all",children:a.velocidad})]}),i.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-amber-500/30 hover:bg-[#0b1325] transition-all relative",children:[i.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[i.jsx("img",{src:(h==null?void 0:h.icono)||a.tipoIcono,alt:"ATK 1",className:"w-[14px] h-[14px] object-contain shrink-0"}),i.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"ATK 1"}),b&&i.jsx("span",{className:"text-[6px] text-amber-500 font-extrabold px-0.5 rounded bg-amber-500/10 border border-amber-500/20 leading-none",children:"x3"})]}),i.jsx("span",{className:`font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all ${b?"text-amber-400":"text-white"}`,children:k(h==null?void 0:h.valor)})]}),i.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-amber-500/30 hover:bg-[#0b1325] transition-all relative",children:[i.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[i.jsx("img",{src:(f==null?void 0:f.icono)||a.skinIcono,alt:"ATK 2",className:"w-[14px] h-[14px] object-contain shrink-0"}),i.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"ATK 2"}),x&&i.jsx("span",{className:"text-[6px] text-amber-500 font-extrabold px-0.5 rounded bg-amber-500/10 border border-amber-500/20 leading-none",children:"x3"})]}),i.jsx("span",{className:`font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all ${x?"text-amber-400":"text-white"}`,children:k(f==null?void 0:f.valor)})]}),i.jsxs("div",{className:"col-span-2 bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-3 flex flex-col items-center justify-center hover:border-emerald-500/30 hover:bg-[#0b1325] transition-all",children:[i.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[i.jsx("img",{src:((X=a.habilidad)==null?void 0:X.icono)||"https://pokradex.org/MutantsGG/assets/ability_shield_big.png",alt:"DEF",className:"w-[14px] h-[14px] object-contain shrink-0"}),i.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"DEF / HABILIDAD"})]}),i.jsx("span",{className:"text-white font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all",children:((L=a.habilidad)==null?void 0:L.valor)||"1,000"})]})]}),i.jsx("div",{className:"mt-auto pt-1",children:i.jsx("button",{onClick:g,className:`group/btn relative overflow-hidden w-full py-2.5 text-[10px] font-black uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 border leading-none ${l?"bg-green-500/10 border-green-500/30 text-green-400":"bg-transparent border-white/[0.08] text-white hover:border-[var(--hover-color)] hover:bg-[var(--hover-bg)] active:scale-[0.98]"}`,style:{borderRadius:"100px","--hover-color":`${j[0]}50`,"--hover-bg":`${j[0]}12`},children:l?i.jsxs(i.Fragment,{children:[i.jsx(Er,{size:12,className:"shrink-0 text-green-400 animate-bounce"}),i.jsx("span",{children:s("mutant.verified")})]}):i.jsxs(i.Fragment,{children:[i.jsx(Bu,{size:11,className:"group-hover/btn:scale-110 transition-transform shrink-0 opacity-80"}),i.jsx("span",{children:s("mutant.extract_code")})]})})})]})]})]})},ua=()=>{const{region:a,translate:s}=St(),l=a!=="LATAM"&&a!=="PT"?"https://chat.whatsapp.com/IdBIvXWUPNjDLcPmBvkp1B":fd;return i.jsxs(wn.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.4},className:"panel p-6 md:p-8 rounded-3xl bg-[#0c1222]/95 border border-white/10 shadow-2xl relative overflow-hidden group max-w-4xl mx-auto w-full my-6 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left",children:[i.jsx("div",{className:"absolute inset-0 bg-[#25D366]/[0.02] pointer-events-none"}),i.jsxs("div",{className:"relative z-10 flex-1",children:[i.jsx("h3",{className:"text-xl md:text-2xl font-black text-white tracking-tight leading-tight m-0 mb-2",children:s("whatsapp.title")}),i.jsx("p",{className:"text-muted text-sm md:text-base leading-relaxed opacity-80 m-0 max-w-2xl",children:s("whatsapp.desc")})]}),i.jsx("div",{className:"relative z-10 shrink-0 w-full md:w-auto flex justify-start md:justify-end",children:i.jsxs("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-blue-brand hover:brightness-110 active:scale-[0.98] transition-all text-white font-black text-sm md:text-base shadow-lg shadow-blue-brand/20 hover:shadow-blue-brand/40 select-none w-full md:w-auto",children:[i.jsx(Cr,{size:18,className:"shrink-0"}),i.jsx("span",{children:s("whatsapp.btn")})]})})]})},BA=`Robot
Weak Robot
Android
Goliath
Necrobot
Hypnos
Xenarach
Treacherous Humanoid
Mechanical Captain
Dezinger
Beetle Bot
Monocerus
Colossus
Libraro
Deus Machina
Virgon
Zombie
Weak Zombie
Jack O'Lantern
Zomborg
Devilish Doll
Lord Blood
Crypt Specter
Black Despot
Bone Captain
Necrodragon
Cancernia
Ghostnaut
Caprika
Neckbreaker
Baron Lundi
Gloomy Wizard
Warrior
Weak Warrior
Enforcer
Interceptrix
General Chaos
Warrior Banshee
Bushi
Nordic Knight
Buck Maurice
Honey Bunny
Sagitauro
Haggis
Wandering Martian
Galactic Guardian
Valkyrie
Thor
Beast
Reptoid
Arachno
Cerberus
Zombat
Cobrakai
Rakshasa
Leohart
Gargantus
Kaiju Kitty
Master Splitter
Parasite Queen
Cosmo Kong
Dracus Nobilis
Sorcerer Satyr
Alien
Annihilator
Sentry
Exofish
Tutti Gooey
Sirenia
Devourer
Sundance Bug
Behemoth
Xenos
Rockagen
Astro Surfer
Supernovus
Master Oida
Nebulon
Mr Marvelous
Aquapunzel
She-Devil
Snow Wizard
Techno Tao
Mekali
The Grim Reaper
Scorpion Prince
Anubis
Gandolphus
Captain Peace
Medusa
Horus
Ivory Hanzo
C'thlig
Azuria
Lord of the Abyss
Punishment
Oriax
Ragnar
Triple-B
Mandrake
Cursed Biker
Armadillo
Mantis Droid
Avenging Ram
Battle Toad
Cézanne
H.U.M.A.N.
Rambit
Star Trooper
Micky Krueger
Tauridus
Autonoraptor
Invadron
Evil Witch
Scary Bear
Azog
Geminium
Psycho Boar
Zena
Absolem
Wampara
Rockbeard
George Washington
Louis XVI
Bazzinger
Space Princess
Astro Wizard
Garuda
Machete Fairy
Genshiryoku
The Experiment
Leonidas
Buranka
Mexihcatl
Banker
Galactic Emperor
Nebulus
Project X27
Miroku
Mapach Wik
The Plumber
Ghost Hunter
Exo Cookie
Britany
Frostmass
Santactopus
Mephisto
Monolith
Malvatron
Lara
Commander Ender
Zortrex
Tengu
Bogeyman
Oculus
Supraman X
Cupid
Abraham Lincoln
Rhino Squad
Harpy Lady
Yelda
Flying Jordson
Cernunnos
Captain Black Pearl
Brick McGole
Kraken
Genimal
Hardcorius
Dead Marine
Challengeer
Cyberpunk
Neo Urban XIII
Technoforcer
Shadow Shaman
Engineer
Sun-Duke
Ceres
Shin Hakuho
Fenec Plus Ultra
Mother of Dragons
Brawler
Chainsaw Maniac
Monkey King
Acarius
Space Hunter
Sinister Artist
Zeus
Glubber
Nyrlatoth
Cybercroc
Bulldozer
Alligator Gar
Triceratank
Monk Akuso
Charon
Uncle Sam
Hog the Ripper
King Steven
Eva's Duplicate
Cyberslug
Jhingal
Doctor Blaw
Tomahawk
Sorceress
Dandy Oscar
Kung Chow
Grandma Eater
Mau-Jack
Lily
The King of Mimphys
Bio-Hedgehog
Gladiadog
Chaste
Viper
Dollbyte
Garlog
Krunk
Apofis
Raven
Drusella
Mandor
Squall
Saber
Artemis
Mama Kangoo
Darwin
ERR-ADI-K-Bot
Namaste
Tyrtiduron
Bounda
Mega Claus
Marv
Z-0
Falcon
Paramic
The Original
Dragon Lord
Carlingger
King of Insects
Crusher
Chimera
Barkshroom
Queen Rakkti
Hercules
Aran
El Gringo
Spartac
Amarok
Pikabú
Leprechaun
Phoenix
Kal Wayne
Diesel Wasp
Robo Fuerte
Rocky Botboa
The Fates
Dr. Frost
Captain Gluglu
Skeleton King
Mud Turbine
Ice John
Captain Patriot
Astro Gummy
Nezarim
Balloon Monkey
Starminator
Spectra
Wynn
Thrann
Blender
Rhinotaur
Cosmopandas
Kudamono
Alfie
Tyranozomb
H0ud1n1
FootBot
Geomega
Glutton
Seiyatsu
Asaylan
Wrath
Lady Liberty
Gozer
Van Helsing
Kitty Ranger
Gorthaur the Cruel
The Nameless King
Naraxis
Andromeda
Dwarf and Brain
Archangel
Devil
Drall
Noren
Sgt. Pandamonium
Omikami
Makino
Chantecler
Dr. Nucleus
Keymaster
Carcinus Gigas
Sanik
Necroparasite
Project 3V3
Optimus Zord
Black Jaws
Firestorm
Golemagnus
Dug Dario
Sentinel R0B-H4N
Big Bo$$
Queen Sylvidra
Quetzalcoatl
Majin Zam
Plague Witch
Excaliduro
Zigmo
Great Lord of the Tombs
Pyrotrope
Altaris
Captain Gorn
Yokozuna
Calaca
Lancelot
Centaurus
Mon-Key Crew
Sound Killah
Dracomago
Warlord Steam
Bounty Hunter
Space Surfer
Mister T-Ger
Master Paw
Grumpy Claus
Sergeant Dusk
Gwenn
The Collector
The Venom
Frankenhuahua
Mad Mike
Jane Saw
Horax
Master Shinzo
Xeleroth
Excavalipsis
The Undertaker
Zenguru
H.U.N.T.3.R
Arelvam
Tsar Bomb
Wizard Ryzafredd
Hawkeye
Megastral
Liquidator
Yggdrasil
Rox McRain
Hadeath
Divastator
Angry Pork
Frankendwarf
Akai-Bot
Krampus
Waryena
Bahamut
Mimi Timecurve
Men'ki Guard
Hippotank
Hephaestus
T-3rr0r
A027441
King Lulu
Kolossus
Kameo
ED-404
Hellsaw
Urgan
Buffalor
Gamallia
Gakarian
S-K-Venger
Overkill
Captain Ahab
Aubraea Mutantula
Bregbeam
Piwisher
Nimrod
E.T.-Liot
Spin Fury
Cooktouille
Orion
Heimdall
Chun-Lei
The Reef
Sir Bannog
Living Nightmare
An0malie
Owlock
TriAD
The Forgotten One
Singularity Wizard
Ishi no Ōkami
Dissent
Acheron
Drei, Space Corgi
Mix0-Logo
Veren Kaeesu
Spada
Roadmaster
Gerard Steelgarden
Chocolem
Drudge Zombie
Animus of Unreality
Midas
Caliburn EX
Santagonista
Barbarian
Lady of Twilight
Arachnid Mecha-Ovoid
Abyssal Terror
Oculys
Pierrot
Phileas Derocas
Dreadnought
Awakened Missy
Enviro 3.0
Gestalt Asteroid
X'astuth
Rabid Fang
Lantern Doctor
Leviathan
Sidereal Explorer
Howlsaur
Dream Protector
Basilisk and Snapdragon
Heir of the 5 Rings
Crossbowman
Ethereal Cybermancer
Lampyrion Solar
Dimentio
Generalissimo Chocoleon IV
Eternal Archivist
Ammonia Atlantica
Terracotta General
Great Tunnel Worm
Stellarian Lithominer
Captain Eagle
Octopia
Astral Doctor
Simurgh
Väinämöinen
Dysfunction Droid
Charon (Halloween)
Cabloid
Icy Exocelestial
Dark Cleric
D'Arathomis
Tenacity
Regulo&Juzya
Purulent Jelly
Vivaldi
Techno Snail
Burrow Sapper
Summoner
Lepidoptech
Bone Assembly
Sasquatch
Thanaconda
A00-C0R3-C0NTR0L
Son of the Storm
Craftdrone LLK-215
GAR, Sovereign Zombie
Soulgamas
Llama Sensei
Polaris
Myrmidus.exe
Boreal Helicoid
Dreaming Anthropobot
Anteros
Flayer Doctor
Oryctolagus Exobioicus
Cr€$u$
Asimov
Achernar
The Riot
Xinomas
Combat Simulacrum
Helidrone KxT-271
Reed, the True Hero
The Phosphorescent One
Tezcatlipoca
Scaramouche
Trickbetrayal
Astro Observer
Sawmetrodon
Capsulator MTZ-004
Seraphic Core
King of Avalon
K'yu T'ypaï
Friendship Without Limits
Sakuraboshi
Giganto-Moai
TCB-8566 Trafficroid
Bearsikk Sikleast
Captain Blackbeard
The Anarchist
Jurassic Terror
Frozen Emperor
Breakmaster
The Faded One
Azaronimo
Chronomancer Professor
Golem of Ages
The Crawling Madness
Hekatoncheiros
Atlas
Space Pilgrim
Celsius Thermodroid
Black I.C.E.
Prophet of Twilight
Beast Lord
Freyja, Queen of the Vanir
Most High Candelabrum
The Architect
Medinosaur
Beast of the Field
B.U.N. Genius
Gladiator
Hidrira
Supermassive Infinity
Automaton
Orbital Nexus
Emotional Masquerade
Wizard
Zagam, King of Greed
Bloodsquito
Don Gamberetti
Blue King
Plasma Specter
The Host
Vortex Traveler
D.A.B.
Mechargoyle
Ice Skater Yria
Telluric Smasher
Origamix
The Glitchy Heart
Spiraxia
Irradiance
The Hunger
Cosmic Dandy
Kereon of the Abyss
Apiarca
Platypus
`,PA=`Robot
Robot Faible
Androïde
Goliath
Necrobot
Hypnos
Xenarach
Humanoïde Perfide
Capitaine Mécano
Dezinger
Scarabobot
Monocerus
Colosse
Libraro
Deus Machina
Virgon
Zombie
Zombie Faible
Jack O'Lantern
Zomborg
Poupée Diabolique
Lord Blood
Spectre de la Crypte
Despote Noir
Capitaine Squelette
Nécrodragon
Cancernia
Fantômenaute
Cáprika
Brise-Nuque
Baron Lundi
Mage Lugubre
Guerrier
Guerrier Faible
Exécuteur
Interceptrix
Général Chaos
Banshee Guerrière
Bushi
Chevalier Nordique
Buck Maurice
Honey Bunny
Sagitauro
Haggis
Martien Errant
Gardien Galactique
Valkyrie
Thor
Bête
Reptoïde
Arachno
Cerbère
Zombat
Cobrakai
Rakshasa
Leohart
Gargantus
Kaiju Kitty
Maître Splitter
Reine Parasite
Cosmo Kong
Dracus Nobilis
Satyre Sorcier
Extraterrestre
Annihilateur
Sentry
Exopoisson
Tutti Visqueux
Sirenia
Dévoreur
Sundance Bug
Behemoth
Xenos
Rocagène
Astrosurfeur
Supernovus
Maître Oida
Nébulon
Mr Marvelous
Aquapunzel
Diablesse
Mage des Neiges
Techno Tao
Mekali
La Faucheuse
Prince Scorpion
Anubis
Gandolphus
Capitaine Paix
Medusa
Horus
Ivory Hanzo
C'thlig
Azuria
Seigneur des Abysses
Châtiment
Oriax
Ragnar
Triple-B
Mandragore
Motard Maudit
Tatou
Mantidroïde
Bélier Vengeur
Battle Toad
Cézanne
H.U.M.A.N.
Rambit
Star Trooper
Micky Krueger
Tauridus
Autonoraptor
Invadron
Sorcière Maléfique
Ours Effrayant
Azog
Geminium
Sanglier Psycho
Zena
Absolem
Wampara
Barberoche
George Washington
Louis XVI
Bazzinger
Space Princess
Astromage
Garuda
Fée Machette
Genshiryoku
L'Expérience
Leonidas
Buranka
Mexihcatl
Banker
Empereur Galactique
Nebulus
Project X27
Miroku
Mapach Wik
Le Plombier
Chasseur de Fantômes
Exo Cookie
Britany
Frostmass
Santactopus
Mephisto
Monolith
Malvatron
Lara
Commander Ender
Zortrex
Tengu
Croquemitaine
Oculus
Supraman X
Cupidon
Abraham Lincoln
Escouade Rhino
Dame Harpie
Yelda
Flying Jordson
Cernunnos
Capitaine Perle Noire
Brick McGole
Kraken
Genimal
Hardcorius
Marine Mort
Challengeer
Cyberpunk
Neo Urban XIII
Technoforcer
Chaman de l'Ombre
Ingénieur
Sun-Duke
Ceres
Shin Hakuho
Fenec Plus Ultra
Mère des Dragons
Brawler
Fou à la Tronçonneuse
Roi Singe
Acarius
Chasseur Spatial
Artiste Sinistre
Zeus
Glubber
Nyrlatoth
Cybercroc
Bulldozer
Poisson-Alligator
Tricératank
Moine Akuso
Charon
Oncle Sam
Hog the Ripper
Roi Steven
Double d'Eva
Cyberlimace
Jhingal
Doctor Blaw
Tomahawk
Sorcière
Dandy Oscar
Kung Chow
Mange-Grand-Mères
Mau-Jack
Lily
Le Roi de Mimphys
Bio-Hérisson
Gladiadog
Chaste
Viper
Dollbyte
Garlog
Krunk
Apofis
Corbeau
Drusella
Mandor
Bourrasque
Sabre
Artémis
Maman Kangou
Darwin
ERR-ADI-K-Bot
Namasté
Tyrtiduron
Bounda
Mega Claus
Marv
Z-0
Falcon
Paramic
L'Original
Seigneur Dragon
Carlingger
Roi des Insetges
Écraseur
Chimère
Champi-Écorce
Reine Rakkti
Hercule
Aran
El Gringo
Spartac
Amarok
Pikabú
Leprechaun
Phénix
Kal Wayne
Guêpe Diesel
Robo Fuerte
Rocky Botboa
Les Moires
Dr. Frost
Capitaine Glouglou
Roi Squelette
Turbeboue
Jean Glace
Capitaine Patriote
Astro Gummy
Nezarim
Singe-Ballon
Starminator
Spectra
Wynn
Thrann
Blender
Rhinotaure
Cosmopandas
Kudamono
Alfie
Tyranozomb
H0ud1n1
FootBot
Geomega
Glouton
Seiyatsu
Asaylan
Wrath
Lady Liberté
Gozer
Van Helsing
Kitty Ranger
Gorthaur le Cruel
Le Roi sans Nom
Naraxis
Andromède
Nain et Cerveau
Archange
Diable
Drall
Noren
Sgt. Pandamonium
Omikami
Makino
Chantecler
Dr. Nucleus
Maître des Clés
Carcinus Gigas
Sanik
Nécroparasite
Projet 3V3
Optimus Zord
Mâchoires Noires
Tempête de Feu
Golemagnus
Dug Dario
Sentinelle R0B-H4N
Big Bo$$
Reine Sylvidra
Quetzalcoatl
Majin Zam
Sorcière de la Peste
Excaliduro
Zigmo
Grand Seigneur des Tombes
Pyrotrope
Altaris
Capitaine Gorn
Yokozuna
Calaca
Lancelot
Centaurus
Mon-Key Crew
Sound Killah
Dracomago
Caudillo Steam
Chasseur de Primes
Surfeur de l'Espace
Mister T-Ger
Master Paw
Grumpy Claus
Sergent Dusk
Gwenn
Le Collectionneur
Le Venin
Frankenhuahua
Mad Mike
Jane Saw
Horax
Maître Shinzo
Xeleroth
Excavalipsis
Le Fossoyeur
Zenguru
H.U.N.T.3.R
Arelvam
Tsar Bomba
Mage Ryzafredd
Hawkeye
Megastral
Liquidateur
Yggdrasil
Rox McRain
Hadeath
Divastator
Angry Pork
Frankendwarf
Akai-Bot
Krampus
Waryena
Bahamut
Mimi Chronocourbe
Garde Men'ki
Hippotank
Héphaïstos
T-3rr0r
A027441
Roi Lulu
Kolossus
Kameo
ED-404
Hellsaw
Urgan
Buffalor
Gamallia
Gakarian
S-K-Venger
Overkill
Capitaine Achab
Aubraea Mutantula
Bregbeam
Piwisher
Nimrod
E.T.-Liot
Spin Fury
Cooktouille
Orion
Heimdall
Chun-Lei
The Reef
Sir Bannog
Cauchemar Vivant
An0malie
Owlock
TriAD
L'Oubliée
Mage de la Singularité
Ishi no Ōkami
Dissension
Achéron
Drei, Space Corgi
Mix0-Logo
Veren Kaeesu
Spada
Roadmaster
Gerard Steelgarden
Chocolem
Drudge Zombie
Animus d'Irréalité
Midas
Caliburn EX
Santagonista
Barbare
Dame du Crépuscule
Mécaovoïde Arachnéen
Terreur Abyssale
Oculys
Pierrot
Phileas Derocas
Dreadnought
Missy Éveillée
Enviro 3.0
Astéroïde Gestalt
X'astuth
Croc Enragé
Docteur de la Lanterne
Léviathan
Explorateur Sidéral
Hurlosaure
Protecteur des Rêves
Basilic et Muflier
Héritier des 5 Anneaux
Arbalétrier
Cybermancien Éthéré
Lampyrion Solar
Dimentio
Généralissime Chocoleon IV
Archiviste Éternel
Ammonia Atlantica
Général de Terre Cuite
Grand Ver des Tunnels
Lithomineur Stellarien
Capitaine Aigle
Octopie
Médecin Astral
Simurgh
Väinämöinen
Dysfonctiondroïde
Charon (Halloween)
Cabloïde
Exocéleste Glacial
Clerc Sombre
D'Arathomis
Tenacity
Regulo&Juzya
Gelée Purulente
Vivaldi
Techno-Escargot
Sapeur de Terriers
Invocateur
Lepidoptech
Ossassemblage
Sasquatch
Thanaconda
A00-C0R3-C0NTR0L
Fils de la Tempête
Bricodrone LLK-215
GAR, Zombie Souverain
Amalgalmes
Llama Sensei
Polaris
Myrmidus.exe
Hélicoïde Boréal
Antropobot Rêveur
Anteros
Docteur Écorcheur
Oryctolagus Exobioicus
Cr€$u$
Asimov
Achernar
L'Émeute
Xinomas
Simulacre de Combat
Hélidrone KxT-271
Reed, le Véritable Héros
Le Phosphorescent
Tezcatlipoca
Scaramouche
Trahison-Atout
Astro-Observateur
Sciemétrodon
Capsulateur MTZ-004
Noyau Séraphique
Roi d'Avalon
K'yu T'ypaï
Amitié Sans Limites
Sakuraboshi
Giganto-Moai
TCB-8566 Trafficroid
Bearsikk Sikleast
Capitaine Barbe-Noire
L'Anarchiste
Terreur Jurassique
Empereur Glacé
Breakmaster
Le Décoloré
Azaronimo
Professeur Chronomancien
Golem des Époques
La Folie Rampante
Hekatoncheiros
Atlas
Pèlerin Spatial
Thermodroïde Celsius
Black I.C.E.
Prophète du Crépuscule
Seigneur Bestial
Freyja, Reine des Vanir
Très-Haut Candélabre
L'Architecte
Médinosaure
Bête des Champs
B.U.N. Génie
Gladiateur
Hidrira
Infini Supermassif
Automate
Nexus Orbital
Mascarade Émotionnelle
Mage
Zagam, Roi de l'Avarice
Sangoustique
Don Gamberetti
Roi Bleu
Spectroplasma
Le Présentateur
Voyageur du Vortex
D.A.B.
Mécargouille
Patineuse sur Glace Yria
Fracasseur Tellurique
Origamix
Le Cœur Glitchy
Spiraxia
Irradiance
La Faim
Dandy Cosmique
Kereon des Abysses
Apiarca
Ornithorynque
`,FA=`Robot
Robô Fraco
Androide
Golias
Necrobot
Hypnos
Xenarach
Humanoide Pérfido
Capitão Mecânico
Dezinger
Escarabot
Monocerus
Colosso
Líbraro
Deus Machina
Virgon
Zumbi
Zumbi Fraco
Jack O'Lantern
Zomborg
Boneca Diabólica
Lord Blood
Espectro da Cripta
Déspota Negro
Capitão Ossada
Necrodragão
Cancernia
Fantasmonauta
Cáprika
Quebra-Pescoços
Barão Lundi
Mago Sombrio
Guerreiro
Guerreiro Fraco
Executor
Intercéptrix
General Caos
Banshee Guerreira
Bushi
Cavaleiro Nórdico
Buck Maurice
Honey Bunny
Sagitauro
Haggis
Marciano Errante
Guardião Galáctico
Valquíria
Thor
Besta
Reptoide
Aracno
Cérbero
Zombat
Cobrakái
Rakshasa
Leohart
Gargantus
Kaiju Kitty
Mestre Splitter
Rainha Parasita
Cosmo Kong
Dracus Nobilis
Sátiro Feiticeiro
Extraterrestre
Aniquilador
Sentry
Exopeixe
Tutti Viscosi
Sirenia
Devorador
Sundance Bug
Behemoth
Xenos
Rocágeno
Astrossurfista
Supernovus
Mestre Oida
Nébulon
Mr Marvelous
Aquapunzel
Diaba
Mago das Neves
Tecno Tao
Mekali
A Ceifadora
Príncipe Escorpião
Anubis
Gandolphus
Capitão Paz
Medusa
Horus
Ivory Hanzo
C'thlig
Azuria
Senhor do Abismo
Castigo
Oriax
Ragnar
Triple-B
Mandrágora
Motociclista Amaldiçoado
Armadilho
Mantidroide
Carneiro Vingador
Battle Toad
Cézanne
H.U.M.A.N.
Rambit
Star Trooper
Micky Krueger
Táuridus
Autonoraptor
Invadron
Bruxa Má
Urso Assustador
Azog
Geminium
Psicojavali
Zena
Absolem
Wampara
Barbarrocha
George Washington
Louis XVI
Bazzinger
Space Princess
Astromago
Garuda
Fada Machete
Genshiryoku
O Experimento
Leonidas
Buranka
Mexihcatl
Banker
Imperador Galáctico
Nebulus
Project X27
Miroku
Mapach Wik
O Encanador
Caça-Fantasmas
Exo Cookie
Britany
Frostmass
Santactopus
Mephisto
Monolith
Malvatron
Lara
Commander Ender
Zortrex
Tengu
Sacamantecas
Oculus
Supraman X
Cupido
Abraham Lincoln
Esquadrão Rhino
Dama Harpia
Yelda
Flying Jordson
Cernunnos
Capitão Pérola Negra
Brick McGole
Kraken
Genimal
Hardcorius
Fuzileiro Morto
Challengeer
Cyberpunk
Neo Urban XIII
Tecnoforzer
Xamã das Sombras
Engenheiro
Sun-Duke
Ceres
Shin Hakuho
Fenec Plus Ultra
Mãe dos Dragões
Brawler
Louco da Motosserra
Rei Macaco
Acarius
Caçador Espacial
Artista Sinistro
Zeus
Glubber
Nyrlatoth
Cybercroc
Bulldozer
Peixe-Jacaré
Triceratanque
Monge Akuso
Caronte
Tio Sam
Hog the Ripper
Rei Steven
Duplicata de Eva
Ciberlesma
Jhingal
Doctor Blaw
Tomahawk
Feiticeira
Dândi Óscar
Kung Chow
Come-Avós
Mau-Jack
Lily
O Rei de Mimphys
Bio-Ouriço
Gladiadog
Casto
Viper
Dollbyte
Garlog
Krunk
Apofis
Corvo
Drusella
Mandor
Borrasca
Sabre
Ártemis
Mamãe Kangú
Darwin
ERR-ADI-K-Bot
Namastê
Tyrtiduron
Bounda
Mega Claus
Marv
Z-0
Falcon
Paramic
O Original
Senhor Dragão
Carlingger
Rei dos Insetos
Esmagador
Quimera
 Cogumelo-Casca
Rainha Rakkti
Hércules
Aran
El Gringo
Spartac
Amarok
Pikabú
Leprechaun
Fênix
Kal Wayne
Vespa Diesel
Roboforte
Rocky Botboa
As Moiras
Dr. Frost
Capitão Gluglú
Rei Esqueleto
Turbalama
João Gelo
Capitão Patriota
Astro Gummy
Nezarim
Macaco-Balão
Starminator
Espectra
Wynn
Thrann
Blender
Rinotauro
Cosmopandas
Kudamono
Alfie
Tiranozomb
H0ud1n1
FootBot
Geomega
Glutão
Seiyatsu
Asaylan
Wrath
Lady Liberdade
Gozer
Van Helsing
Kitty Ranger
Gorthaur, o Cruel
O Rei sem Nome
Naraxis
Andrômeda
Anão e Cérebro
Arcanjo
Diabo
Drall
Noren
Sgt. Pandamonium
Omikami
Makino
Chantecler
Dr. Nucleus
Mestre das Chaves
Carcinus Gigas
Sanik
Necroparasita
Projeto 3V3
Optimus Zord
Mandíbulas Negras
Tempestade de Fogo
Golemagnus
Dug Dario
Sentinela R0B-H4N
Big Bo$$
Rainha Sylvidra
Quetzalcóatl
Majin Zam
Bruxa da Peste
Excaliduro
Zigmo
Grande Senhor das Tumbas
Pirótropo
Altaris
Capitão Gorn
Yokozuna
Calaca
Lancelot
Centaurus
Mon-Key Crew
Sound Killah
Dracomago
Caudilho Steam
Caçador de Recompensas
Surfista do Espaço
Mister T-Ger
Master Paw
Grumpy Claus
Sargento Dusk
Gwenn
O Colecionador
O Veneno
Frankenhuahua
Mad Mike
Jane Saw
Horax
Mestre Shinzo
Xeleroth
Excavalipsis
O Coveiro
Zenguru
H.U.N.T.3.R
Arelvam
Tsar Bomba
Mago Ryzafredd
Hawkeye
Megastral
Liquidificador
Yggdrasil
Rox McRain
Hadeath
Divastator
Angry Pork
Frankendwarf
Akai-Bot
Krampus
Waryena
Bahamut
Mimi Cronocurva
Guarda Men'ki
Hipotanque
Hefesto
T-3rr0r
A027441
Rei Lulu
Kolossus
Kameo
ED-404
Hellsaw
Urgan
Buffalor
Gamallia
Gakarian
S-K-Venger
Overkill
Capitão Ahab
Aubraea Mutantula
Bregbeam
Piwisher
Nimrod
E.T.-Liot
Spin Fury
Cooktouille
Órion
Heimdall
Chun-Lei
The Reef
Sir Bannog
Pesadelo Vivo
An0malie
Owlock
TriAD
A Esquecida
Mago da Singularidade
Ishi no Ōkami
Dissensão
Aqueronte
Drei, Space Corgi
Mix0-Logo
Veren Kaeesu
Spada
Roadmaster
Gerard Steelgarden
Chocolem
Drudge Zombie
Animus da Irrealidade
Midas
Caliburn EX
Santagonista
Bárbaro
Dama do Crepúsculo
Mecaovoide Aracnídeo
Terror Abissal
Oculys
Pierrot
Phileas Derocas
Dreadnought
Missy Desperta
Enviro 3.0
Asteroide Gestalt
X'astuth
Presa Raivosa
Doutor da Lanterna
Leviatã
Explorador Sideral
Uivossauro
Protetor dos Sonhos
Basilisco e Boca-de-Dragão
Herdeiro dos 5 Anéis
Besteiro
Cibermante Etéreo
Lampyrion Solar
Dimentio
Generalíssimo Chocoleão IV
Arquivista Eterno
Ammonia Atlantica
General de Terracota
Grande Verme dos Túneis
Litomineur Stellariano
Capitão Águia
Octópia
Médico Astral
Simurgh
Väinämöinen
Disfuncidroide
Caronte (Halloween)
Cabloide
Exoceleste Gélido
Clérigo Sombrio
D'Arathomis
Tenacity
Regulo&Juzya
Gelatina Purulente
Vivaldi
Tecnocaracol
Sapador de Tocas
Invocador
Lepidoptech
Ossomontagem
Sasquatch
Thanaconda
A00-C0R3-C0NTR0L
Filho da Tempestade
Bricodrone LLK-215
GAR, Zumbi Soberano
Amalgalmes
Llama Sensei
Polaris
Myrmidus.exe
Helicoide Boreal
Antropobot Sonhador
Anteros
Doutor Esfolador
Oryctolagus Exobioicus
Cr€$u$
Asimov
Achernar
O Motim
Xinomas
Simulacro de Combate
Helidrone KxT-271
Reed, o Verdadeiro Herói
O Fosforescente
Tezcatlipoca
Scaramouche
Traiciobaza
Astro-Observador
Serrametrodon
Capsuladora MTZ-004
Núcleo Seráfico
Rei de Avalon
K'yu T'ypaï
Amizade Sem Limites
Sakuraboshi
Giganto-Moai
TCB-8566 Trafficroid
Bearsikk Sikleast
Capitão Barba-Negra
A Anarquista
Terror Jurássico
Imperador Gelado
Breakmaster
O Desbotado
Azaronimo
Professor Cronomântico
Golem das Eras
A Loucura Rastejante
Hekatoncheiros
Atlas
Peregrino Espacial
Termodroide Celsius
Black I.C.E.
Profeta do Crepúsculo
Senhor Bestial
Freyja, Rainha dos Vanir
Altíssimo Candelabro
O Arquiteto
Medinossauro
Fera do Campo
B.U.N. Gênio
Gladiador
Hidrira
Infinito Supermassivo
Autômato
Nexo Orbital
Mascarada Emocional
Mago
Zagam, Rei da Ganância
Sanguesquito
Don Gamberetti
Rei Azul
Espectroplasma
O Apresentador
Viajante do Vórtice
D.A.B.
Mecárgula
Patinadora de Gelo Yria
Esmagador Telúrico
Origamix
O Coração Glitchy
Spiraxia
Irradiância
A Fome
Dândi Cósmico
Kereon do Abismo
Apiarca
Ornitorrinco
`,KA=`Robot
Schwacher Roboter
Android
Goliath
Necrobot
Hypnos
Xenarach
Heimtückischer Humanoid
Mechanischer Kapitän
Dezinger
Käferbot
Monocerus
Koloss
Libraro
Deus Machina
Virgon
Zombie
Schwacher Zombie
Jack O'Lantern
Zomborg
Teufelspuppe
Lord Blood
Krypta-Gespenst
Schwarzer Despot
Knochenkapitän
Nekrodrache
Cancernia
Geisterfahrer
Caprika
Genickbrecher
Baron Lundi
Düsterer Magier
Krieger
Schwacher Krieger
Vollstrecker
Interceptrix
General Chaos
Krieger-Banshee
Bushi
Nordischer Ritter
Buck Maurice
Honey Bunny
Sagitauro
Haggis
Wandernder Marsianer
Galaktischer Wächter
Walküre
Thor
Bestie
Reptoid
Arachno
Zerberus
Zombat
Cobrakai
Rakshasa
Leohart
Gargantus
Kaiju Kitty
Meister Splitter
Parasitenkönigin
Cosmo Kong
Dracus Nobilis
Zauberer-Satyr
Außerirdischer
Vernichter
Sentry
Exofisch
Tutti Klebrig
Sirenia
Verschlinger
Sundance Bug
Behemoth
Xenos
Felsagen
Astrosurfer
Supernovus
Meister Oida
Nebulon
Mr Marvelous
Aquapunzel
Teufelin
Schneemagier
Techno Tao
Mekali
Der Sensenmann
Skorpionprinz
Anubis
Gandolphus
Kapitän Frieden
Medusa
Horus
Ivory Hanzo
C'thlig
Azuria
Herr des Abgrunds
Strafe
Oriax
Ragnar
Triple-B
Alraune
Verfluchter Biker
Gürteltier
Mantidroide
Rächender Widder
Battle Toad
Cézanne
H.U.M.A.N.
Rambit
Star Trooper
Micky Krueger
Tauridus
Autonoraptor
Invadron
Böse Hexe
Schreckbär
Azog
Geminium
Psycho-Eber
Zena
Absolem
Wampara
Felsbart
George Washington
Louis XVI
Bazzinger
Space Princess
Astromagier
Garuda
Machetenfee
Genshiryoku
Das Experiment
Leonidas
Buranka
Mexihcatl
Banker
Galaktischer Kaiser
Nebulus
Project X27
Miroku
Mapach Wik
Der Klempner
Geisterjäger
Exo Cookie
Britany
Frostmass
Santactopus
Mephisto
Monolith
Malvatron
Lara
Commander Ender
Zortrex
Tengu
Butzemann
Oculus
Supraman X
Amor
Abraham Lincoln
Rhino-Trupp
Harpyien-Dame
Yelda
Flying Jordson
Cernunnos
Kapitän Schwarze Perle
Brick McGole
Kraken
Genimal
Hardcorius
Toter Marine
Challengeer
Cyberpunk
Neo Urban XIII
Technoforcer
Schatten-Schamane
Ingenieur
Sun-Duke
Ceres
Shin Hakuho
Fenec Plus Ultra
Mutter der Drachen
Brawler
Kettensägen-Verrückter
Affenkönig
Acarius
Weltraumjäger
Unheimlicher Künstler
Zeus
Glubber
Nyrlatoth
Cyberkrok
Bulldozer
Alligatorhecht
Triceratank
Mönch Akuso
Charon
Onkel Sam
Hog the Ripper
König Steven
Evas Duplikat
Cyberschnecke
Jhingal
Doctor Blaw
Tomahawk
Zauberin
Dandy Oscar
Kung Chow
Omafresser
Mau-Jack
Lily
Der König von Mimphys
Bio-Igel
Gladiadog
Keusch
Viper
Dollbyte
Garlog
Krunk
Apofis
Rabe
Drusella
Mandor
Sturmböe
Säbel
Artemis
Mama Kängu
Darwin
ERR-ADI-K-Bot
Namaste
Tyrtiduron
Bounda
Mega Claus
Marv
Z-0
Falcon
Paramic
Das Original
Drachenlord
Carlingger
König der Insekten
Zermalmer
Chimäre
Rindenpilz
Königin Rakkti
Herkules
Aran
El Gringo
Spartac
Amarok
Pikabú
Leprechaun
Phönix
Kal Wayne
Dieselwespe
Robo Fuerte
Rocky Botboa
Die Moiren
Dr. Frost
Kapitän Gluckgluck
Skelettkönig
Schlammturbine
Eis-Johann
Kapitän Patriot
Astro Gummy
Nezarim
Ballonaffe
Starminator
Spectra
Wynn
Thrann
Blender
Rhinotaurus
Cosmopandas
Kudamono
Alfie
Tyranozomb
H0ud1n1
FootBot
Geomega
Vielfraß
Seiyatsu
Asaylan
Wrath
Lady Freiheit
Gozer
Van Helsing
Kitty Ranger
Gorthaur der Grausame
Der Namenlose König
Naraxis
Andromeda
Zwerg und Gehirn
Erzengel
Teufel
Drall
Noren
Sgt. Pandamonium
Omikami
Makino
Chantecler
Dr. Nucleus
Schlüsselmeister
Carcinus Gigas
Sanik
Nekroparasit
Projekt 3V3
Optimus Zord
Schwarzmaul
Feuersturm
Golemagnus
Dug Dario
Wächter R0B-H4N
Big Bo$$
Königin Sylvidra
Quetzalcoatl
Majin Zam
Pesthexe
Excaliduro
Zigmo
Großer Herr der Gräber
Pyrotrop
Altaris
Kapitän Gorn
Yokozuna
Calaca
Lancelot
Centaurus
Mon-Key Crew
Sound Killah
Dracomago
Kriegsherr Steam
Kopfgeldjäger
Weltraumsurfer
Mister T-Ger
Master Paw
Grumpy Claus
Feldwebel Dusk
Gwenn
Der Sammler
Das Gift
Frankenhuahua
Mad Mike
Jane Saw
Horax
Meister Shinzo
Xeleroth
Excavalipsis
Der Totengräber
Zenguru
H.U.N.T.3.R
Arelvam
Zar-Bombe
Magier Ryzafredd
Hawkeye
Megastral
Liquidator
Yggdrasil
Rox McRain
Hadeath
Divastator
Angry Pork
Frankendwarf
Akai-Bot
Krampus
Waryena
Bahamut
Mimi Zeitkurve
Men'ki-Wache
Nilpferdpanzer
Hephaistos
T-3rr0r
A027441
König Lulu
Kolossus
Kameo
ED-404
Hellsaw
Urgan
Buffalor
Gamallia
Gakarian
S-K-Venger
Overkill
Kapitän Ahab
Aubraea Mutantula
Bregbeam
Piwisher
Nimrod
E.T.-Liot
Spin Fury
Cooktouille
Orion
Heimdall
Chun-Lei
The Reef
Sir Bannog
Lebender Albtraum
An0malie
Owlock
TriAD
Die Vergessene
Singularitätsmagier
Ishi no Ōkami
Zwietracht
Acheron
Drei, Space Corgi
Mix0-Logo
Veren Kaeesu
Spada
Roadmaster
Gerard Steelgarden
Chocolem
Drudge Zombie
Animus der Unwirklichkeit
Midas
Caliburn EX
Santagonista
Barbar
Dame der Dämmerung
Arachniden-Mechaovoid
Abgrundschrecken
Oculys
Pierrot
Phileas Derocas
Dreadnought
Erwachte Missy
Enviro 3.0
Gestalt-Asteroid
X'astuth
Tobender Fangzahn
Laternen-Doktor
Leviathan
Sternenforscher
Heulsaurier
Traumbeschützer
Basilisk und Löwenmäulchen
Erbe der 5 Ringe
Armbrustschütze
Ätherischer Cybermant
Lampyrion Solar
Dimentio
Generalissimus Chocoleon IV
Ewiger Archivar
Ammonia Atlantica
Terrakotta-General
Großer Tunnelwurm
Stellarischer Lithominer
Kapitän Adler
Oktopia
Astralarzt
Simurgh
Väinämöinen
Dysfunktionsdroide
Charon (Halloween)
Kabloid
Eisiger Exohimmlischer
Dunkler Kleriker
D'Arathomis
Tenacity
Regulo&Juzya
Eitriges Gelee
Vivaldi
Technoschnecke
Bautenpionier
Beschwörer
Lepidoptech
Knochenmontage
Sasquatch
Thanaconda
A00-C0R3-C0NTR0L
Sohn des Sturms
Basteldrohne LLK-215
GAR, Zombie-Herrscher
Seelenamalgam
Llama Sensei
Polaris
Myrmidus.exe
Boreales Helikoid
Träumender Anthropobot
Anteros
Schinder-Doktor
Oryctolagus Exobioicus
Cr€$u$
Asimov
Achernar
Der Aufstand
Xinomas
Kampfsimulakrum
Helidrohne KxT-271
Reed, der Wahre Held
Der Phosphoreszierende
Tezcatlipoca
Scaramouche
Verratsstich
Astrobeobachter
Sägemetrodon
Kapsulator MTZ-004
Seraphischer Kern
König von Avalon
K'yu T'ypaï
Freundschaft Ohne Grenzen
Sakuraboshi
Giganto-Moai
TCB-8566 Trafficroid
Bearsikk Sikleast
Kapitän Schwarzbart
Die Anarchistin
Jurassischer Schrecken
Eiskalter Kaiser
Breakmaster
Der Farblose
Azaronimo
Professor Chronomant
Golem der Zeitalter
Der Kriechende Wahnsinn
Hekatoncheiros
Atlas
Weltraumpilger
Celsius-Thermodroide
Black I.C.E.
Prophet der Dämmerung
Bestienlord
Freyja, Königin der Vanir
Höchster Kandelaber
Der Architekt
Medinosaurier
Feldbestie
B.U.N. Genie
Gladiator
Hidrira
Supermassive Unendlichkeit
Automat
Orbitaler Nexus
Emotionale Maskerade
Magier
Zagam, König der Gier
Blutmücke
Don Gamberetti
Blauer König
Plasmagespenst
Der Moderator
Vortexreisender
D.A.B.
Mecha-Gargoyle
Eisläuferin Yria
Tellurischer Zerschmetterer
Origamix
Das Glitchy-Herz
Spiraxia
Strahlkraft
Der Hunger
Kosmischer Dandy
Kereon des Abgrunds
Apiarca
Schnabeltier
`,Nf={USD:BA.split(/\r?\n/).map(a=>a.trim()).filter(Boolean),FR:PA.split(/\r?\n/).map(a=>a.trim()).filter(Boolean),PT:FA.split(/\r?\n/).map(a=>a.trim()).filter(Boolean),DE:KA.split(/\r?\n/).map(a=>a.trim()).filter(Boolean)};function Ef(a,s,l){if(l==="LATAM"||!Nf[l])return s;const r=parseInt(a,10)-1,d=Nf[l];return d&&r>=0&&r<d.length?d[r]:s}function wf(){const{region:a,translate:s}=St(),[l,r]=O.useState(""),[d,p]=O.useState([]),[g,h]=O.useState(!1),[f,b]=O.useState("code-az"),[x,k]=O.useState(!0),[G,y]=O.useState(30),[M,j]=O.useState(a);O.useEffect(()=>{j(a)},[a]);const I=O.useMemo(()=>Xo,[]),H=O.useMemo(()=>Ek.split(/\r?\n/).map(q=>q.trim()).filter(Boolean).length,[]),X="text-blue-brand-2",L=O.useMemo(()=>{const q=l.toLowerCase(),K=I.map(F=>{const Z=Ef(F.id,F.nombre,M);return{...F,nombre:Z}}).filter(F=>{const Z=q===""||F.nombre.toLowerCase().includes(q)||F.codigo.toLowerCase().includes(q),oe=d.length===0||(d.length===1?F.genes.includes(d[0]):F.genes[0]===d[0]&&F.genes[1]===d[1]),de=!g||F.genes.length===1||F.genes.length===2&&F.genes[0]===F.genes[1];return Z&&oe&&de});return K.sort((F,Z)=>{var oe,de,Ue,Oe,Me,C;return f==="name-az"?F.nombre.localeCompare(Z.nombre):f==="name-za"?Z.nombre.localeCompare(F.nombre):f==="code-az"?F.codigo.localeCompare(Z.codigo,void 0,{numeric:!0,sensitivity:"base"}):f==="code-za"?Z.codigo.localeCompare(F.codigo,void 0,{numeric:!0,sensitivity:"base"}):f==="hp-desc"?(((oe=Z.stats)==null?void 0:oe.hp)||0)-(((de=F.stats)==null?void 0:de.hp)||0):f==="atk-desc"?(((Ue=Z.stats)==null?void 0:Ue.atk)||0)-(((Oe=F.stats)==null?void 0:Oe.atk)||0):f==="spd-desc"?(((Me=Z.stats)==null?void 0:Me.spd)||0)-(((C=F.stats)==null?void 0:C.spd)||0):Z.codigo.localeCompare(F.codigo,void 0,{numeric:!0,sensitivity:"base"})}),K},[I,l,d,f,g,M]),D=O.useMemo(()=>I.filter(q=>{const K=q.id==="553",F=q.id==="554";return K||F}).map(q=>{const K=Ef(q.id,q.nombre,M);return{...q,nombre:K}}),[I,M]),Q=O.useMemo(()=>L.slice(0,G),[L,G]),Y=q=>{y(30),p(K=>{const F=K.filter(Z=>Z===q).length;return F>0?F===2?K.filter(Z=>Z!==q):K.length===1?[q,q]:K.filter(Z=>Z!==q):K.length<2?[...K,q]:[K[1],q]})};return i.jsxs("div",{className:"flex flex-col gap-8 pb-20",children:[i.jsxs("section",{className:"relative hero !p-8 md:!p-20 overflow-hidden rounded-3xl",children:[i.jsx("div",{className:"absolute inset-0 opacity-10 bg-grid-slate-900/[0.1] pointer-events-none"}),i.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-brand/20 to-transparent -rotate-12 transform translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"}),i.jsxs("div",{className:"relative z-10",children:[i.jsxs("div",{className:"eyebrow bg-white/5 border-white/10 px-4 py-1 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-md",children:[i.jsx(nb,{size:14,className:"text-blue-brand-2"}),i.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:s("home.main_database")})]}),i.jsxs("h1",{className:"text-4xl md:text-8xl lg:text-9xl font-black mt-4 mb-6 uppercase tracking-tighter leading-[0.8] md:leading-[0.85] text-white",children:["MUTANTS ",i.jsx("br",{}),i.jsxs("span",{className:"text-blue-brand relative",children:["GLADIATORS",i.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-1 bg-white/10 rounded-full"})]})]}),i.jsx("p",{className:"text-slate-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 opacity-90 leading-relaxed font-medium",children:s("home.main_desc")})]})]}),i.jsx(ua,{}),i.jsxs("section",{className:"panel flex flex-col gap-6 !p-6 md:!p-8 border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl relative overflow-hidden group",children:[i.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-blue-brand"}),i.jsx("div",{className:"flex items-center justify-between relative z-10",children:i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(fk,{size:20,className:"text-blue-brand-2"}),i.jsx("h2",{className:"text-xl md:text-2xl font-black uppercase tracking-tighter m-0 text-white",children:s("home.featured_mutants")})]})}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10",children:D.map((q,K)=>i.jsx(jf,{mutant:q},K))})]}),i.jsxs("section",{className:"flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-[2.5rem] border border-white/10 bg-[#0a1224]/50 backdrop-blur-2xl relative overflow-hidden",children:[i.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-grid-slate-900/[0.05] pointer-events-none"}),i.jsxs("div",{className:"flex flex-col gap-4 relative z-10 w-full md:max-w-[60%]",children:[i.jsxs("div",{className:"flex items-center gap-6",children:[i.jsxs("div",{className:"relative group/avatar",children:[i.jsx("div",{className:"absolute inset-0 bg-blue-brand blur-xl opacity-20 group-hover:opacity-40 transition-opacity"}),i.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/perfil.png?raw=true",alt:"Smith Luque",className:"w-20 h-20 md:w-24 md:h-24 rounded-[2rem] border-4 border-white/10 shadow-2xl relative z-10 object-cover group-hover:rotate-3 transition-transform"}),i.jsx("div",{className:"absolute -bottom-1 -right-1 w-6 h-6 bg-green-brand border-4 border-[#050a14] rounded-full z-20"})]}),i.jsxs("div",{className:"text-left",children:[i.jsx("h3",{className:"m-0 text-2xl font-black text-white uppercase tracking-tighter",children:"Smith Luque"}),i.jsxs("div",{className:"flex flex-col gap-1",children:[i.jsx("p",{className:"text-blue-brand-2 text-xs m-0 font-black uppercase tracking-widest leading-none",children:s("profile.developer")}),i.jsx("div",{className:"px-2 py-0.5 rounded bg-white/5 border border-white/5 inline-flex self-start",children:i.jsx("span",{className:"text-[8px] font-bold text-muted uppercase tracking-[0.2em]",children:s("profile.founder")})})]})]})]}),i.jsxs("div",{className:"p-4 rounded-2xl border border-blue-brand/20 bg-blue-brand/5 backdrop-blur-md",children:[i.jsxs("span",{className:"block text-[10px] font-black text-blue-brand-2 uppercase tracking-[0.2em] mb-1",children:["📢 ",s("home.announcement_title")]}),i.jsx("p",{className:"text-xs text-slate-300 font-semibold leading-relaxed m-0",children:s("home.announcement_desc")})]})]}),i.jsxs("div",{className:"flex gap-8 items-center px-8 w-full md:w-auto border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 relative z-10",children:[i.jsxs("div",{className:"flex-1 md:flex-none",children:[i.jsx("span",{className:"block text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-2",children:s("home.filtered")}),i.jsxs("div",{className:"flex items-baseline gap-1",children:[i.jsx("strong",{className:"text-4xl font-black text-blue-brand-2 leading-none",children:L.length}),i.jsx("span",{className:"text-xs font-bold text-white/20 uppercase tracking-widest",children:s("home.active")})]})]}),i.jsxs("div",{className:"flex-1 md:flex-none",children:[i.jsx("span",{className:"block text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-2",children:s("home.total_base")}),i.jsxs("div",{className:"flex items-baseline gap-1",children:[i.jsx("strong",{className:"text-4xl font-black text-white/50 leading-none",children:H}),i.jsx("span",{className:"text-xs font-bold text-muted/20 uppercase tracking-widest",children:s("home.total")})]})]})]})]}),i.jsxs("section",{className:"panel flex flex-col gap-6 !p-6 md:!p-8 border border-white/10 relative overflow-hidden group",children:[i.jsx("div",{className:"absolute inset-0 opacity-5 pointer-events-none bg-grid-slate-900/[0.1] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,white,transparent)]"}),i.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"w-1.5 h-6 bg-blue-brand rounded-full"}),i.jsx("h2",{className:"text-xl md:text-2xl font-black uppercase tracking-tighter m-0",children:s("home.explore_catalog")})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("div",{className:"px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-muted uppercase tracking-widest leading-none",children:"Control Panel v2.0"}),(d.length>0||g)&&i.jsx("button",{onClick:()=>{p([]),h(!1)},className:"text-[10px] uppercase font-black text-white bg-red-brand/40 px-3 py-1 rounded-full hover:bg-red-brand transition-all active:scale-95 shadow-lg shadow-red-brand/20",children:s("home.reset_engine")})]})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10",children:[i.jsx("div",{className:"lg:col-span-8 flex flex-col gap-6",children:i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(ab,{size:14,className:X}),i.jsx("span",{className:"text-[11px] uppercase font-black tracking-[0.2em] opacity-60",children:s("home.genetic_config")})]}),i.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3",children:Vr.map(q=>{const K=d.filter(Z=>Z===q.id).length,F=K>0;return d.indexOf(q.id),i.jsxs("button",{onClick:()=>Y(q.id),className:`flex items-center gap-3 p-3 rounded-xl border-2 transition-all relative group/gene overflow-hidden ${F?"bg-blue-brand/20 border-blue-brand text-white shadow-[0_0_20px_rgba(37,99,235,0.2)]":"bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/30 hover:bg-white/[0.05]"}`,children:[i.jsx("div",{className:`p-1.5 rounded-lg transition-all ${F?"bg-blue-brand shadow-lg":"bg-white/5 group-hover/gene:scale-110"}`,children:i.jsx("img",{src:q.image,alt:"",className:`w-6 h-6 object-contain ${F?"brightness-125":"grayscale opacity-50"}`})}),i.jsxs("div",{className:"flex flex-col items-start",children:[i.jsx("span",{className:"text-[11px] font-black uppercase tracking-tight line-clamp-1",children:q.name}),i.jsx("span",{className:"text-[8px] font-bold opacity-40 uppercase tracking-widest",children:s(F?K===2?"gene.dominant":"gene.active":"gene.inactive")})]}),F&&i.jsx("div",{className:"absolute top-1 right-1 flex gap-0.5",children:[...Array(K)].map((Z,oe)=>i.jsx("div",{className:"w-1 h-3 bg-blue-brand-2 rounded-full"},oe))})]},q.id)})})]})}),i.jsxs("div",{className:"lg:col-span-4 flex flex-col gap-6 lg:border-l lg:border-white/10 lg:pl-8",children:[i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Uo,{size:14,className:X}),i.jsx("span",{className:"text-[11px] uppercase font-black tracking-[0.2em] opacity-60",children:s("home.search_engine")})]}),i.jsxs("div",{className:"relative group/search",children:[i.jsx("input",{value:l,onChange:q=>{r(q.target.value),y(30)},placeholder:s("home.search_placeholder"),className:"w-full bg-white/[0.04] border-2 border-white/10 rounded-2xl pl-4 pr-12 py-4 text-sm font-bold placeholder:text-white/20 outline-none focus:border-blue-brand/50 transition-all focus:bg-white/[0.06] focus:shadow-2xl focus:shadow-blue-brand/5"}),i.jsx("div",{className:"absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/5 text-white/40",children:i.jsx(Uo,{size:16})})]})]}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(dk,{size:14,className:X}),i.jsx("span",{className:"text-[11px] uppercase font-black tracking-[0.2em] opacity-60",children:s("home.sort_filters")})]}),i.jsxs("div",{className:"flex flex-col gap-3",children:[i.jsxs("div",{className:"relative group/sort",children:[i.jsxs("select",{value:f,onChange:q=>{b(q.target.value),y(30)},className:"w-full bg-white/[0.04] border-2 border-white/10 rounded-2xl px-5 py-4 text-xs font-black uppercase tracking-widest outline-none text-white focus:border-blue-brand/50 cursor-pointer appearance-none focus:bg-white/[0.06]",children:[i.jsx("option",{value:"name-az",className:"bg-[#0a1224]",children:s("home.sort_az")}),i.jsx("option",{value:"name-za",className:"bg-[#0a1224]",children:s("home.sort_za")}),i.jsx("option",{value:"code-az",className:"bg-[#0a1224]",children:s("home.sort_code_asc")}),i.jsx("option",{value:"code-za",className:"bg-[#0a1224]",children:s("home.sort_code_desc")}),i.jsx("option",{value:"hp-desc",className:"bg-[#0a1224]",children:s("home.sort_hp_desc")}),i.jsx("option",{value:"atk-desc",className:"bg-[#0a1224]",children:s("home.sort_atk_desc")}),i.jsx("option",{value:"spd-desc",className:"bg-[#0a1224]",children:s("home.sort_spd_desc")})]}),i.jsx(tb,{size:16,className:"absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40"})]}),i.jsxs("div",{className:"space-y-1.5 text-left mt-1",children:[i.jsxs("div",{className:"flex items-center gap-2 opacity-60 pl-1",children:[i.jsx(K2,{size:11,className:X}),i.jsx("span",{className:"text-[9px] uppercase font-black tracking-widest",children:s("home.names_language")})]}),i.jsxs("div",{className:"relative group/names-lang",children:[i.jsxs("select",{value:M,onChange:q=>{j(q.target.value),y(30)},className:"w-full bg-white/[0.04] border-2 border-white/10 rounded-2xl px-5 py-3.5 text-xs font-black uppercase tracking-widest outline-none text-white focus:border-blue-brand/50 cursor-pointer appearance-none focus:bg-white/[0.06]",children:[i.jsx("option",{value:"LATAM",className:"bg-[#0a1224]",children:"Español (LATAM)"}),i.jsx("option",{value:"USD",className:"bg-[#0a1224]",children:"English (USD)"}),i.jsx("option",{value:"PT",className:"bg-[#0a1224]",children:"Português (PT)"}),i.jsx("option",{value:"FR",className:"bg-[#0a1224]",children:"Français (FR)"}),i.jsx("option",{value:"DE",className:"bg-[#0a1224]",children:"Deutsch (DE)"})]}),i.jsx(tb,{size:16,className:"absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40"})]})]}),i.jsxs("button",{className:`group relative overflow-hidden w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 border-2 ${g?"bg-blue-brand/20 border-blue-brand text-blue-brand-2":"bg-white/5 border-white/10 text-white/40 hover:border-white/20"}`,onClick:()=>h(!g),children:[i.jsx(nb,{size:14,className:`${g?"animate-pulse":""}`}),s("home.single_gene_only")]}),i.jsxs("button",{className:`group relative overflow-hidden w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 border-2 ${x?"bg-blue-brand/10 border-blue-brand/30 text-blue-brand-2":"bg-white/5 border-white/10 text-white/40 hover:border-white/20"}`,onClick:()=>k(!x),children:[i.jsx(ab,{size:14,className:`${x?"animate-pulse":""}`}),s(x?"home.hide":"home.show")]})]})]})]})]})]}),i.jsx("section",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",children:x?L.length>0?i.jsxs(i.Fragment,{children:[Q.map((q,K)=>i.jsx(jf,{mutant:q},K)),G<L.length&&i.jsx("div",{className:"col-span-full py-8 flex justify-center",children:i.jsx("button",{onClick:()=>y(q=>q+30),className:"px-8 py-3 bg-blue-brand/10 border-2 border-blue-brand/30 rounded-2xl text-blue-brand-2 font-black uppercase tracking-widest hover:bg-blue-brand/20 transition-all active:scale-95",children:s("home.load_more_rem",{rem:L.length-G})})})]}):i.jsx("div",{className:"col-span-full py-12 text-center text-muted border border-line rounded-2xl bg-panel",children:s("home.no_results")}):i.jsx("div",{className:"col-span-full py-12 text-center text-muted border border-line rounded-2xl bg-panel",children:s("home.hidden_results")})})]})}const XA="https://mutodex.blogspot.com/feeds/posts/default?alt=json-in-script&max-results=8";function ZA(a){if(!a)return"Reciente";const s=new Date(a);return Number.isNaN(s.getTime())?a:s.toLocaleDateString("es-PE",{year:"numeric",month:"short",day:"numeric"})}function YA(a){return String(a||"").replace(/<script[\s\S]*?<\/script>/gi,"").replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/\s+/g," ").trim()}function QA(a){const s=String(a||"").match(/<img[^>]+src="([^"]+)"/i);return s?s[1]:""}function JA(a){var h,f,b,x,k,G;const s=((h=a.title)==null?void 0:h.$t)||a.title||"Sin título",l=((f=a.published)==null?void 0:f.$t)||a.published||"",r=((b=a.content)==null?void 0:b.$t)||a.content||((x=a.summary)==null?void 0:x.$t)||a.summary||"",d=Array.isArray(a.link)?((k=a.link.find(y=>y.rel==="alternate"))==null?void 0:k.href)||((G=a.link[0])==null?void 0:G.href)||"#":a.url||a.href||"#",p=QA(r)||a.image||"",g=YA(r);return{title:s,published:l,dateLabel:ZA(l),excerpt:g.slice(0,220)+(g.length>220?"…":""),excerptFull:g,rawText:g,link:d,image:p}}function WA(a){const s=String(a||"").replace(/\s+/g," ").trim();if(!s)return[];const l=["ANUNCIOS:","OFERTAS:","MINI EVENTO:","CRONOLOGIA:"],r=[];for(let d=0;d<l.length;d++){const p=l[d],g=s.indexOf(p);if(g===-1)continue;let h=s.length;for(let b=d+1;b<l.length;b++){const x=s.indexOf(l[b],g+p.length);if(x!==-1){h=x;break}}const f=s.slice(g+p.length,h).trim();f&&r.push({title:p.replace(":",""),body:f.length>320?f.slice(0,320)+"…":f})}return r.length||r.push({title:"Resumen",body:s.length>420?s.slice(0,420)+"…":s}),r.slice(0,4)}function $A(){const{region:a,translate:s}=St(),l=a==="USD",[r,d]=O.useState([]),[p,g]=O.useState(!0),[h,f]=O.useState(!1);return O.useEffect(()=>{let b=null;const x=`mggFeedCallback_${Date.now()}`,k=()=>{b&&b.parentNode&&b.parentNode.removeChild(b);try{window[x]=void 0}catch{}};return window[x]=G=>{var y;k();try{const j=(((y=G==null?void 0:G.feed)==null?void 0:y.entry)||[]).map(JA);d(j),g(!1)}catch{f(!0),g(!1)}},b=document.createElement("script"),b.src=`${XA}&callback=${x}`,b.onerror=()=>{k(),f(!0),g(!1)},document.body.appendChild(b),k},[]),i.jsxs("div",{className:"flex flex-col gap-6",children:[i.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[i.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[i.jsx(Bf,{size:14,className:"text-blue-brand-2"}),i.jsx("span",{children:l?"News Feed":"Portal informativo"})]}),i.jsxs("h1",{className:"text-3xl md:text-6xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:[l?"NEWS":"NOVEDADES"," ",i.jsx("span",{className:"text-blue-brand-2 block",children:"MUTODEX"})]}),i.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:l?"Latest news delivered directly from the official Mutodex blog.":"Noticias actualizadas directamente desde el blog oficial de Mutodex."})]}),i.jsx(ua,{}),i.jsxs("div",{className:"grid lg:grid-cols-[1fr_350px] gap-6 items-start",children:[i.jsx("section",{className:"flex flex-col gap-5 order-2 lg:order-1",children:p?i.jsx("div",{className:"panel text-center py-12 text-muted bg-blue-brand/5 border-blue-brand/20",children:l?"Loading posts...":"Cargando publicaciones…"}):h?i.jsx("div",{className:"panel text-center py-12 text-muted bg-blue-brand/5 border-blue-brand/20",children:l?"Could not load posts at this moment.":"No se pudieron cargar las publicaciones en este momento."}):r.length===0?i.jsx("div",{className:"panel text-center py-12 text-muted bg-blue-brand/5 border-blue-brand/20",children:l?"No posts found.":"No se encontraron publicaciones."}):r.map((b,x)=>{const k=WA(b.excerptFull||b.rawText||b.excerpt||"");return i.jsxs("article",{className:"panel p-0 overflow-hidden flex flex-col group transition-all duration-300 border-white/10 hover:border-blue-brand-2/30 shadow-lg hover:shadow-blue-brand-2/[0.04]",children:[i.jsxs("div",{className:"p-5 md:p-7 pb-0",children:[i.jsxs("div",{className:"flex items-center gap-2 font-mono font-bold text-[10px] uppercase tracking-widest mb-3 text-blue-brand-2",children:[i.jsx(G2,{size:12}),b.dateLabel]}),i.jsx("h2",{className:"m-0 text-xl md:text-3xl font-bold leading-tight tracking-tight",children:i.jsx("a",{href:b.link,target:"_blank",rel:"noopener noreferrer",className:"transition-colors hover:text-blue-brand-2",children:b.title})})]}),b.image&&i.jsx("div",{className:"px-5 md:px-7 mt-5",children:i.jsx("div",{className:"relative aspect-[16/8] overflow-hidden rounded-xl border border-white/10",children:i.jsx("img",{className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",src:b.image,alt:b.title,loading:"lazy",referrerPolicy:"no-referrer"})})}),i.jsx("div",{className:"p-5 md:p-7 pt-5 grid gap-4",children:k.map((G,y)=>i.jsxs("div",{className:"border-l-2 pl-4 py-1 border-blue-brand/30",children:[i.jsx("h3",{className:"m-0 mb-1.5 text-[11px] md:text-xs uppercase tracking-widest font-black text-white/90",children:G.title}),i.jsx("p",{className:"m-0 text-muted text-sm md:text-base leading-relaxed opacity-90",children:G.body})]},y))}),i.jsx("div",{className:"p-5 md:p-7 pt-0 mt-auto",children:i.jsxs("a",{className:"btn btn-primary w-full md:w-auto transition-all",target:"_blank",rel:"noopener noreferrer",href:b.link,children:[i.jsx(oa,{size:16}),i.jsx("span",{children:l?"Read on Mutodex":"Leer en Mutodex"})]})})]},x)})}),i.jsxs("aside",{className:"flex flex-col gap-6 order-1 lg:order-2",children:[i.jsxs("section",{className:"panel !p-5 flex flex-col gap-4 border border-white/5 bg-blue-brand/2",children:[i.jsxs("div",{className:"kv-label text-[10px] opacity-60 flex items-center gap-2",children:[i.jsx(W2,{size:12}),l?"Quick Access":"Acceso Rápido"]}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2",children:[{name:l?"Official Mutant List":"Lista oficial: mutantes",url:"https://mutodex.blogspot.com/p/lista-oficial-mutantes.html"},{name:l?"Secret Breeding":"Hibridaciones secretas",url:"https://mutodex.blogspot.com/p/hibridaciones-secretas.html"},{name:l?"Attack/HP Orbs":"Orbes de ataque/hp",url:"https://mutodex.blogspot.com/p/orbes.html"},{name:l?"EVO Discount":"Descuento de EVO",url:"https://mutodex.blogspot.com/p/descuento-de-evo.html"},{name:l?"Stats Calculator":"Calculadora stats",url:"https://mutodex.blogspot.com/p/calculadora-de-stats.html"}].map((b,x)=>i.jsxs("a",{className:"flex items-center justify-between p-3 rounded-xl bg-white/3 border border-line text-xs font-medium hover:border-blue-brand-2/50 hover:bg-blue-brand-2/10 transition-all duration-300",target:"_blank",rel:"noopener noreferrer",href:b.url,children:[b.name,i.jsx(oa,{size:12,className:"opacity-40"})]},x))})]}),i.jsxs("section",{className:"panel !p-5 flex flex-col gap-4 border border-white/5 bg-blue-brand/2",children:[i.jsx("div",{className:"kv-label text-[10px] opacity-60",children:l?"Blog Entries":"Entradas de Blog"}),i.jsx("div",{className:"flex flex-col gap-2",children:p?i.jsx("div",{className:"text-muted text-xs animate-pulse",children:l?"Synchronizing...":"Sincronizando..."}):r.slice(0,6).map((b,x)=>i.jsxs("a",{className:"block p-3 rounded-xl bg-white/3 border border-line transition-all duration-300 hover:border-blue-brand-2/40 group",target:"_blank",rel:"noopener noreferrer",href:b.link,children:[i.jsx("div",{className:"text-[9px] font-bold mb-1 opacity-70 text-blue-brand-2",children:b.dateLabel}),i.jsx("div",{className:"text-xs font-bold text-white/90 line-clamp-1 group-hover:text-blue-brand-2",children:b.title})]},x))})]}),i.jsx("div",{className:"panel !p-4 border border-blue-brand/20 bg-blue-brand/5 shadow-inner",children:i.jsx("p",{className:"text-muted text-[10px] m-0 leading-relaxed",children:l?"Data is loaded via JSONP from Blogger to avoid CORS. If news is not visible, check your connection.":"Los datos se cargan vía JSONP desde Blogger para evitar problemas de CORS. Si no ves las noticias, revisa tu conexión."})})]})]})]})}const Ou=({service:a,isOffer:s,isOther:l,variant:r="default"})=>{const{region:d,multiplier:p,translate:g,countryCode:h}=St(),f=d!=="LATAM",b=f&&a.nombreEn?a.nombreEn:a.nombre,x=f&&a.descripcionEn?a.descripcionEn:a.descripcion,k=f&&a.featuresEn?a.featuresEn:a.features,G=h?Xf.find(L=>L.id.toUpperCase()===h.toUpperCase()):null,y="$";let M="";const j=a.precio;j>0?M=(j/3.7*1.15*1.1*.9).toFixed(2):M="0.00",(()=>{const L=h==null?void 0:h.toUpperCase();return L==="PE"?"🇵🇪":L==="US"?"🇺🇸":G?G.flag:L?"🌎":"🇵🇪"})();const H=()=>{const L=a.precio===0;let D="";L?d==="LATAM"?D="GRATIS":d==="PT"?D="GRÁTIS":d==="FR"?D="GRATUIT":d==="DE"?D="KOSTENLOS":D="FREE":D=`${y}${M}`;let Q="";d==="LATAM"?Q=`¡Hola! Me interesa el servicio: ${b} (ID: ${a.id}) - Precio: ${D}`:d==="PT"?Q=`Olá! Estou interessado no serviço: ${b} (ID: ${a.id}) - Preço: ${D}`:d==="FR"?Q=`Bonjour! Je suis intéressé par le service: ${b} (ID: ${a.id}) - Prix: ${D}`:d==="DE"?Q=`Hallo! Ich habe Interesse an dem Service: ${b} (ID: ${a.id}) - Preis: ${D}`:Q=`Hello! I'm interested in: ${b} (ID: ${a.id}) - Price: ${D}`,window.open(`https://wa.me/${Kf}?text=${encodeURIComponent(Q)}`,"_blank")},X=g("services.buy");return r==="compact"?i.jsxs("article",{className:"panel !p-3 flex items-center justify-between gap-4 group transition-all duration-300 bg-white/[0.02] border hover:border-blue-brand/50",children:[i.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[i.jsx("div",{className:"w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden shrink-0 bg-white/5 border border-white/10 group-hover:border-blue-brand/30 transition-colors",children:a.imagen?i.jsx("img",{src:a.imagen,alt:"",className:"w-full h-full object-cover"}):i.jsx("div",{className:"w-full h-full flex items-center justify-center text-blue-brand-2",children:i.jsx(Ro,{size:20})})}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsx("h4",{className:"m-0 text-xs md:text-sm font-black uppercase text-white truncate group-hover:text-blue-brand-2 transition-colors",children:b}),i.jsx("div",{className:"text-[10px] md:text-[11px] font-black text-blue-brand-2 mt-0.5",children:a.precio===0?"GRATIS":`${y} ${M}`})]})]}),i.jsxs("button",{onClick:H,className:"btn btn-sm !px-3 h-8 md:h-9 border-transparent shrink-0 bg-blue-brand/10 text-blue-brand-2 hover:bg-blue-brand hover:text-white",children:[i.jsx(Ro,{size:14,className:"md:size-4"}),i.jsx("span",{className:"hidden sm:inline text-[10px] font-black uppercase",children:X})]})]}):i.jsxs("article",{className:`card flex flex-col group transition-all duration-300 hover:border-blue-brand/50 ${s?"outline-1 outline-blue-brand/35 border-blue-brand/30 bg-blue-brand/5":""}`,children:[a.imagen&&i.jsxs("div",{className:"relative overflow-hidden aspect-[16/10]",children:[i.jsx("img",{src:a.imagen,alt:b,className:"w-full h-full object-cover block transition-transform duration-500 group-hover:scale-110"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"})]}),i.jsxs("div",{className:"card-body p-4 md:p-5 flex flex-col flex-1",children:[i.jsx("h3",{className:"m-0 mb-2 text-base md:text-lg font-black uppercase tracking-tight text-white line-clamp-1 group-hover:text-blue-brand-2 transition-colors",children:b}),i.jsx("p",{className:"text-muted text-sm mb-4 leading-relaxed line-clamp-2 md:line-clamp-none",children:x}),i.jsx("div",{className:"flex flex-wrap gap-2 mb-5",children:k==null?void 0:k.map((L,D)=>i.jsx("span",{className:"px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-400 text-[10px] md:text-[11px] font-bold uppercase",children:L},D))}),i.jsxs("div",{className:"flex items-end justify-between mt-auto pt-4 border-t border-white/5",children:[i.jsx("div",{className:"text-xl md:text-2xl font-black tracking-tighter text-white",children:a.precio===0?i.jsx("span",{className:"text-green-brand",children:"GRATIS"}):`${y} ${M}`}),i.jsxs("div",{className:"flex gap-2",children:[a.saberMas&&i.jsx("a",{href:a.saberMas,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm px-3 bg-white/5 border-white/5 text-slate-400 hover:text-white",title:"Saber más",children:i.jsx(oa,{size:16})}),i.jsxs("button",{className:`btn btn-sm px-4 ${s?"btn-primary":l?"bg-green-brand text-white":"bg-blue-brand/20 text-blue-brand-2 hover:bg-blue-brand hover:text-white"}`,onClick:H,children:[a.precio===0?i.jsx(O2,{size:16}):i.jsx(Ro,{size:16}),i.jsx("span",{className:"text-[11px] font-black uppercase",children:a.precio===0?"Ver":X})]})]})]})]})]})};function e5(){const{region:a,countryCode:s,setCountry:l,translate:r}=St(),d=a==="USD",p=a!=="LATAM"&&a!=="PT"?"https://chat.whatsapp.com/IdBIvXWUPNjDLcPmBvkp1B":fd,g=ku.filter(b=>b.categoria==="OFFER"),h=ku.filter(b=>b.categoria==="MAIN"),f=ku.filter(b=>b.categoria==="OTHER");return i.jsxs("div",{className:"flex flex-col gap-8 pb-20",children:[i.jsxs("section",{className:"relative hero !p-10 md:!p-24 overflow-hidden rounded-[3rem]",children:[i.jsx("div",{className:"absolute inset-0 opacity-10 bg-grid-slate-900/[0.1] pointer-events-none"}),i.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-brand/20 to-transparent -rotate-12 transform translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"}),i.jsxs("div",{className:"relative z-10",children:[i.jsxs("div",{className:"eyebrow bg-white/5 border-white/10 px-4 py-1 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-md",children:[i.jsx(Ro,{size:14,className:"text-blue-brand-2"}),i.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:d?"Premium Hub":"Centro de Servicios"})]}),i.jsxs("h1",{className:"text-4xl md:text-8xl lg:text-9xl font-black mt-4 mb-6 uppercase tracking-tighter leading-[0.8] md:leading-[0.85] text-white",children:[r("nav.servicios").split(" ")[0]," ",i.jsx("br",{}),i.jsxs("span",{className:"text-blue-brand relative",children:[r("nav.servicios").split(" ")[1]||"PREMIUM",i.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-1 bg-white/10 rounded-full"})]})]}),i.jsx("p",{className:"text-slate-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 opacity-90 leading-relaxed font-medium",children:r("services.subtitle")})]})]}),i.jsxs("section",{className:"panel !p-8 md:!p-12 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-brand/10 to-transparent border-blue-brand/20",children:[i.jsx("div",{className:"absolute inset-0 opacity-5 bg-grid-tech pointer-events-none"}),i.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10",children:[i.jsxs("div",{className:"text-center lg:text-left space-y-3",children:[i.jsx("h3",{className:"m-0 text-3xl font-black uppercase tracking-tighter text-white",children:d?"Need Expert Assistance?":"¿Tienes dudas?"}),i.jsx("p",{className:"text-slate-400 m-0 text-sm md:text-base font-medium max-w-xl",children:d?"Chat with our command center directly via WhatsApp for instant support.":"Escríbeme directamente por WhatsApp o entra al grupo de ayuda para soporte inmediato."})]}),i.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto min-w-[min(400px,100%)]",children:[i.jsxs("a",{className:"group/btn relative overflow-hidden py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 bg-blue-brand text-white shadow-xl shadow-blue-brand/40 hover:scale-105 active:scale-95",target:"_blank",rel:"noopener noreferrer",href:`https://wa.me/${Kf}`,children:[i.jsx(nk,{size:20,className:"group-hover/btn:-translate-y-1 transition-transform"}),i.jsx("span",{children:d?"Direct Command":"WhatsApp Directo"})]}),i.jsxs("a",{className:"group/btn relative overflow-hidden py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 bg-white/5 border-2 border-white/10 text-white hover:bg-white/10 active:scale-95",target:"_blank",rel:"noopener noreferrer",href:p,children:[i.jsx(Cr,{size:20,className:"group-hover/btn:scale-110 transition-transform"}),i.jsx("span",{children:r("whatsapp.btn")})]})]})]})]}),i.jsxs("div",{className:"space-y-12",children:[i.jsxs("section",{className:"flex flex-col gap-6",children:[i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsx("div",{className:"w-2 h-8 bg-blue-brand rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"}),i.jsx("h2",{className:"text-2xl font-black uppercase tracking-tighter m-0 text-white",children:d?"Limited Time Offers":"Ofertas Especiales"}),i.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"})]}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:g.map(b=>i.jsx(Ou,{service:b,isOffer:!0},b.id))})]}),i.jsxs("section",{className:"flex flex-col gap-6",children:[i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsx("div",{className:"w-2 h-8 bg-blue-brand-2 rounded-full opacity-50"}),i.jsx("h2",{className:"text-2xl font-black uppercase tracking-tighter m-0 text-white",children:d?"Core Protocols":"Servicios Principales"}),i.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"})]}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:h.map(b=>i.jsx(Ou,{service:b,variant:"compact"},b.id))})]}),i.jsxs("section",{className:"flex flex-col gap-6",children:[i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsx("div",{className:"w-2 h-8 bg-slate-700 rounded-full"}),i.jsx("h2",{className:"text-2xl font-black uppercase tracking-tighter m-0 text-white",children:d?"Expansion Packs":"Otros Servicios"}),i.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"})]}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:f.map(b=>i.jsx(Ou,{service:b,isOther:!0},b.id))})]})]}),i.jsxs("section",{className:"flex flex-col gap-8 mt-12 pb-12",children:[i.jsxs("div",{className:"flex items-center gap-4 justify-center",children:[i.jsx("div",{className:"h-px w-10 md:w-20 bg-gradient-to-r from-transparent to-blue-brand"}),i.jsx("h2",{className:"text-xl md:text-3xl font-black uppercase tracking-tighter m-0 text-white text-center",children:r("services.payment_methods")}),i.jsx("div",{className:"h-px w-10 md:w-20 bg-gradient-to-l from-transparent to-blue-brand"})]}),i.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-5 gap-6",children:jk.map((b,x)=>i.jsxs("article",{className:"group relative flex flex-col p-6 bg-[#0a1224] border-2 border-white/5 rounded-[2rem] transition-all hover:border-blue-brand/50 hover:-translate-y-2",children:[i.jsx("div",{className:"absolute inset-0 bg-blue-brand/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]"}),i.jsx("div",{className:"w-full aspect-video flex items-center justify-center p-3 relative z-10",children:i.jsx("img",{src:b.logo,alt:b.name,className:"max-w-[80%] max-h-[80%] object-contain group-hover:scale-110 transition-transform duration-500"})}),i.jsxs("div",{className:"mt-4 text-center relative z-10 w-full overflow-hidden",children:[i.jsx("span",{className:"text-[11px] block font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-blue-brand-2 transition-colors mb-2",children:b.name}),i.jsx("p",{className:"text-[9px] text-slate-500 font-bold m-0 leading-relaxed italic opacity-80 line-clamp-2",children:(d?b.info:b.infoEs)||b.info})]})]},x))}),i.jsxs("div",{className:"panel !p-6 flex flex-col md:flex-row items-center gap-6 bg-blue-brand/5 border-blue-brand/20 relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-grid-tech opacity-5 pointer-events-none"}),i.jsx("div",{className:"w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-blue-brand/20 text-blue-brand border border-blue-brand/30 shadow-xl relative z-10",children:i.jsx(V2,{size:28})}),i.jsxs("p",{className:"m-0 text-xs md:text-sm text-slate-400 font-medium leading-relaxed relative z-10",children:[i.jsx("strong",{className:"text-white uppercase tracking-widest mr-2",children:d?"Secure Transmission:":"Información de Pago:"})," ",d?"Payments are coordinated directly via WhatsApp to ensure security. We will provide payment details after selection.":"Los pagos son coordinados directamente vía WhatsApp para garantizar la seguridad de la transacción. Al elegir un método, te proporcionaremos los datos necesarios."]})]})]})]})}const t5=[0,0,0,0,0,2e4,3e4,38700,49e3,1e5,15e4,174e3,204e3,237e3,76e4,11e5,157e4,235e4,262e4,403e4,445e4,488e4,533e4,581e4,882e4,954e4,103e5,111e5,119e5,181e5,194e5,206e5,22e6,233e5,37e6,392e5,414e5,437e5,46e6,484e5,508e5,533e5,559e5,585e5,612e5,64e6,668e5,697e5,726e5,756e5,787e5,818e5,849e5,882e5,915e5,948e5,982e5,102e6,105e6,109e6,113e6,116e6,12e7,124e6,128e6,132e6,136e6,14e7,144e6,148e6,152e6,157e6,161e6,166e6,17e7,175e6,179e6,184e6,189e6,194e6,198e6,203e6,208e6,213e6,218e6,224e6,229e6,234e6,24e7,245e6,25e7,256e6,262e6,267e6,273e6,279e6,285e6,29e7,296e6,302e6,308e6,315e6,321e6,327e6,333e6,34e7,346e6,353e6,359e6,366e6,373e6,379e6,386e6,393e6,4e8,407e6,414e6,421e6,428e6,435e6,443e6,45e7,458e6,465e6,473e6,48e7,488e6,495e6,503e6,511e6,519e6,527e6,535e6,543e6,551e6,559e6,568e6,576e6,584e6,593e6,601e6,61e7,618e6,627e6,636e6,645e6,653e6,662e6,671e6,68e7,69e7,699e6,708e6,717e6,727e6,736e6,745e6,755e6,764e6,774e6,779e6,784e6,789e6,793e6,798e6,803e6,808e6,813e6,818e6,813e6,818e6,823e6,827e6,832e6,837e6,842e6,847e6,852e6,856e6,861e6,866e6,871e6,876e6,881e6,885e6,89e7,895e6,9e8,905e6,91e7,914e6,919e6,924e6,929e6,934e6,939e6,943e6,948e6,953e6,958e6,963e6,968e6,973e6,977e6,982e6,987e6,992e6,997e6,1e9,101e7,101e7,102e7,102e7,103e7,103e7,104e7,104e7,105e7,105e7,105e7,106e7,106e7,107e7,107e7,108e7,108e7,109e7,109e7,11e8,11e8,111e7,111e7,112e7,112e7,113e7,113e7,114e7,114e7,115e7,115e7,116e7,116e7,117e7,117e7,118e7,118e7,119e7,119e7,12e8,12e8,12e8,121e7,121e7,122e7,122e7,123e7,123e7,124e7,124e7,125e7,125e7,126e7,126e7,127e7,127e7,128e7,128e7,129e7,129e7,13e8,13e8,131e7,131e7,132e7,132e7,133e7,133e7,134e7,134e7,135e7,135e7,135e7,136e7,136e7,137e7,137e7,138e7,138e7,139e7,139e7,14e8,14e8,141e7,141e7,142e7,142e7,143e7,143e7,144e7,144e7,145e7,145e7,146e7,146e7,147e7,147e7,148e7,148e7,149e7,149e7,15e8,15e8,15e8,151e7,151e7,152e7,152e7,153e7,153e7,154e7,154e7,155e7,155e7,156e7,156e7,157e7,157e7,158e7,158e7,159e6],n5=[0,0,0,0,0,5,8,10,12,25,38,44,51,59,190,275,393,588,655,1008,1113,1220,1333,1453,2205,2385,2575,2775,2975,3e3],Cf=328,Hu=159e7,Vf=30,Lu=3e3,Df={math_tool:{LATAM:"Herramienta de cálculo",USD:"Math Tool",PT:"Ferramenta de cálculo",FR:"Outil de calcul",DE:"Berechnungstool"},calculator:{LATAM:"CALCULADORA",USD:"CALCULATOR",PT:"CALCULADORA",FR:"CALCULATEUR",DE:"RECHNER"},hero_desc:{LATAM:"Calcula hasta qué EVO puedes subir según tus recursos y el descuento.",USD:"Calculate your maximum EVO based on your resources and active discounts.",PT:"Calcule o EVO máximo que você pode atingir com base em seus recursos e descontos.",FR:"Calculez votre EVO maximum en fonction de vos ressources et des réductions.",DE:"Berechnen Sie Ihr maximales EVO basierend auf Ihren Ressourcen und Rabatten."},current_evo:{LATAM:"EVO actual",USD:"Current EVO",PT:"EVO atual",FR:"EVO actuel",DE:"Aktuelles EVO"},available_credits:{LATAM:"Créditos disponibles",USD:"Available Credits",PT:"Créditos disponíveis",FR:"Crédits disponibles",DE:"Verfügbare Credits"},available_gold:{LATAM:"Oro disponible",USD:"Available Gold",PT:"Ouro disponível",FR:"Or disponible",DE:"Verfügbares Gold"},applied_discount:{LATAM:"Descuento aplicado",USD:"Applied Discount",PT:"Desconto aplicado",FR:"Réduction appliquée",DE:"Angewandter Rabatt"},calculate_evo:{LATAM:"Calcular EVO",USD:"Calculate EVO",PT:"Calcular EVO",FR:"Calculer l'EVO",DE:"EVO berechnen"},reset:{LATAM:"Reiniciar",USD:"Reset",PT:"Reiniciar",FR:"Réinitialiser",DE:"Zurücksetzen"},you_will_reach:{LATAM:"Llegarás a",USD:"YOU WILL REACH",PT:"VOCÊ VAI ALCANÇAR",FR:"VOUS ATTEINDREZ",DE:"SIE WERDEN ERREICHEN"},levels:{LATAM:"niveles",USD:"levels",PT:"níveis",FR:"niveaux",DE:"Ebenen"},discount:{LATAM:"Descuento",USD:"Discount",PT:"Desconto",FR:"Réduction",DE:"Rabatt"},credits_spent:{LATAM:"Gasto Créditos",USD:"Credits Spent",PT:"Créditos Gastos",FR:"Crédits dépensés",DE:"Verwendete Credits"},gold_spent:{LATAM:"Gasto Oro",USD:"Gold Spent",PT:"Ouro Gasto",FR:"Or dépensé",DE:"Verwendetes Gold"},credits_left:{LATAM:"Sobran Créditos",USD:"Credits Left",PT:"Créditos Restantes",FR:"Crédits restants",DE:"Verbleibende Credits"},gold_left:{LATAM:"Sobra Oro",USD:"Gold Left",PT:"Ouro Restante",FR:"Or restant",DE:"Verbleibendes Gold"},enter_resources:{LATAM:"Ingresa tus recursos y presiona Calcular para ver el resultado.",USD:"Enter your resources and press Calculate to see the result.",PT:"Insira seus recursos e pressione Calcular para ver o resultado.",FR:"Saisissez vos ressources et cliquez sur Calculer pour voir le résultat.",DE:"Geben Sie Ihre Ressourcen ein und drücken Sie Berechnen, um das Ergebnis zu sehen."},note:{LATAM:"Nota:",USD:"Note:",PT:"Nota:",FR:"Remarque :",DE:"Hinweis:"},note_desc:{LATAM:"Cálculo basado en reglas de MGG: cap de oro (30) y cap de créditos (328).",USD:"Calculation based on MGG rules: gold cap (30) and credit cap (328).",PT:"Cálculo baseado nas regras do MGG: limite de ouro (30) e limite de créditos (328).",FR:"Calcul basé sur les règles du MGG : limite d'or (30) et limite de crédits (328).",DE:"Berechnung basierend auf MGG-Regeln: Goldgrenze (30) und Creditgrenze (328)."}};function a5(){const{region:a}=St(),[s,l]=O.useState(1),[r,d]=O.useState(0),[p,g]=O.useState(0),[h,f]=O.useState(0),[b,x]=O.useState(null),k=M=>{var j,I;return((j=Df[M])==null?void 0:j[a])||((I=Df[M])==null?void 0:I.USD)||""},G=()=>{let M=r,j=p,I=s;const H=h,X=I,L=(100-H)*.01,D=M,Q=j;let Y=0;if(I>=Cf){const F=Hu*L,Z=Math.floor(M/F);M-=Z*F,Y=I+Z}else for(;;){if(I>=Cf){const Z=Hu*L,oe=Math.floor(M/Z);M-=oe*Z,Y=I+oe;break}const F=Math.floor((t5[I]??Hu)*L);if(M-F>=0)M-=F,I+=1;else{Y=I;break}}let q=0;if(Y>=Vf){const F=Lu*L,Z=Math.floor(j/F);j-=Z*F,q=Z}else for(;;){if(q+Y>=Vf){const oe=Lu*L,de=Math.floor(j/oe);j-=de*oe,q=de;break}const F=n5[Y+q]??Lu,Z=Math.round(F*L);if(j-Z>=0)j-=Z,q+=1;else break}const K=Y+q;x({nuevoEvo:K,incremento:K-X,gastoCreditos:Math.max(0,D-M),gastoOro:Math.max(0,Q-j),sobraCreditos:M,sobraOro:j,descuentoAplicado:H})},y=()=>{l(1),d(0),g(0),f(0),x(null)};return i.jsxs("div",{className:"flex flex-col gap-6",children:[i.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[i.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-20",children:i.jsx(bu,{size:120,className:"text-blue-brand-2"})}),i.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[i.jsx(bu,{size:14,className:"mr-1 text-blue-brand-2"}),i.jsx("span",{children:k("math_tool")})]}),i.jsxs("h1",{className:"text-3xl md:text-6xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:["EVO ",i.jsx("span",{className:"text-blue-brand-2",children:k("calculator")})]}),i.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:k("hero_desc")})]}),i.jsx(ua,{}),i.jsxs("div",{className:"grid md:grid-cols-[1fr_1.2fr] gap-4 md:gap-6 items-start",children:[i.jsx("section",{className:"panel flex flex-col gap-5 !p-4 md:!p-6 border border-white/10 bg-white/[0.01] hover:border-blue-brand/20 transition-all",children:i.jsxs("div",{className:"grid gap-3.5",children:[i.jsxs("label",{className:"kv",children:[i.jsx("span",{className:"kv-label text-[10px]",children:k("current_evo")}),i.jsx("input",{value:s,onChange:M=>l(Number(M.target.value)),className:"input py-2.5 text-sm focus:border-blue-brand-2/60 bg-white/[0.02] text-white transition-all",type:"number"})]}),i.jsxs("label",{className:"kv",children:[i.jsx("span",{className:"kv-label text-[10px]",children:k("available_credits")}),i.jsx("input",{value:r,onChange:M=>d(Number(M.target.value)),className:"input py-2.5 text-sm focus:border-blue-brand-2/60 bg-white/[0.02] text-white transition-all",type:"number"})]}),i.jsxs("label",{className:"kv",children:[i.jsx("span",{className:"kv-label text-[10px]",children:k("available_gold")}),i.jsx("input",{value:p,onChange:M=>g(Number(M.target.value)),className:"input py-2.5 text-sm focus:border-blue-brand-2/60 bg-white/[0.02] text-white transition-all",type:"number"})]}),i.jsxs("div",{children:[i.jsx("div",{className:"kv-label text-[10px] mb-2",children:k("applied_discount")}),i.jsx("div",{className:"grid grid-cols-3 gap-2",children:Sk.map(M=>i.jsxs("button",{onClick:()=>f(M),className:`btn py-2 text-xs rounded-xl transition-all duration-200 ${h===M?"btn-primary":"bg-white/5 opacity-60 hover:bg-white/10 hover:border-white/15"}`,children:[M,"%"]},M))})]}),i.jsxs("div",{className:"flex gap-2 mt-2",children:[i.jsx("button",{onClick:G,className:"btn btn-primary flex-[2] py-3 text-sm transition-all duration-200",children:k("calculate_evo")}),i.jsx("button",{onClick:y,className:"btn flex-1 py-3 text-sm border border-white/5 bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200",children:k("reset")})]})]})}),i.jsx("section",{className:"h-full min-h-[360px]",children:b?i.jsxs("div",{className:"panel h-full flex flex-col items-center justify-center text-center p-6 md:p-8 relative overflow-hidden transition-all duration-700 border-none bg-gradient-to-br from-blue-brand/35 via-blue-brand-2/15 to-[#0b0f19] shadow-2xl shadow-blue-brand-2/10",children:[i.jsx("div",{className:"absolute inset-0 bg-[url('https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true')] bg-no-repeat bg-center opacity-[0.03] scale-150 pointer-events-none"}),i.jsx("div",{className:"kv-label uppercase tracking-widest text-[10px] opacity-70 mb-2 z-10 text-blue-200",children:k("you_will_reach")}),i.jsx("div",{className:"text-[5rem] md:text-[6rem] font-black tracking-tighter leading-none mb-2 z-10 drop-shadow-xl text-white",children:vs(b.nuevoEvo)}),i.jsxs("p",{className:"text-xs md:text-sm mb-6 z-10 font-bold opacity-80 text-blue-200",children:["+",vs(b.incremento)," ",k("levels")," · ",b.descuentoAplicado,"% ",k("discount")]}),i.jsxs("div",{className:"grid grid-cols-2 gap-2 md:gap-3 w-full z-10",children:[i.jsxs("div",{className:"border border-white/5 bg-black/40 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[i.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-blue-200/50",children:k("credits_spent")}),i.jsx("strong",{className:"text-sm md:text-base text-white",children:vs(b.gastoCreditos)})]}),i.jsxs("div",{className:"border border-white/5 bg-black/40 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[i.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-blue-200/50",children:k("gold_spent")}),i.jsx("strong",{className:"text-sm md:text-base text-white",children:vs(b.gastoOro)})]}),i.jsxs("div",{className:"border border-white/5 bg-black/20 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[i.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-white/30",children:k("credits_left")}),i.jsx("strong",{className:"text-sm md:text-base text-white/80",children:vs(b.sobraCreditos)})]}),i.jsxs("div",{className:"border border-white/5 bg-black/20 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[i.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-white/30",children:k("gold_left")}),i.jsx("strong",{className:"text-sm md:text-base text-white/80",children:vs(b.sobraOro)})]})]})]}):i.jsxs("div",{className:"panel h-full flex flex-col items-center justify-center text-muted gap-4 border-dashed border-white/10 hover:border-blue-brand/20 transition-all bg-white/[0.01] hover:bg-white/[0.02]",children:[i.jsx(bu,{size:48,className:"opacity-10"}),i.jsx("p",{className:"text-sm max-w-[200px] text-center",children:k("enter_resources")})]})})]}),i.jsxs("section",{className:"panel flex gap-4 items-center transition-all border border-blue-brand/20 bg-blue-brand/5 shadow-inner !p-4",children:[i.jsx(wr,{size:20,className:"text-blue-brand-2 shrink-0"}),i.jsxs("div",{className:"text-[11px] md:text-xs leading-relaxed",children:[i.jsx("strong",{className:"text-white",children:k("note")})," ",k("note_desc")]})]})]})}const s5={"Ficha Reactor":"Reactor Token","Ficha Jackpot":"Jackpot Token","Tickets x25":"Energy Tickets x25","Tickets x5":"Energy Tickets x5","Triple Experiencia":"Triple Experience","Cuádruple Regeneración":"Quadruple Regeneration","Ficha Reto":"Challenge Token","Doble Experiencia":"Double Experience","Ataques Críticos":"Critical Attacks","Escudo Anticrítico":"Anticritical Shield","Doble Regeneración":"Double Regeneration"};function o5(){const{region:a,translate:s}=St(),l=a==="USD",r=Object.keys(rb),[d,p]=O.useState(""),[g,h]=O.useState(r[0]),[f,b]=O.useState(12),x=I=>l?I.startsWith("Orbe ")?I.replace("Orbe Ataque","Attack Orb").replace("Orbe Vida","Life Orb").replace("Orbe Críticos","Critical Orb").replace("Orbe Experiencia","Experience Orb").replace("Orbe Regeneración","Regeneration Orb").replace("Orbe Respuesta","Retaliate Orb"):s5[I]||I:I,k=O.useMemo(()=>{const I=[];return Object.entries(rb).forEach(([H,X])=>{String(X||"").split(/\r?\n/).map(L=>L.trim()).filter(Boolean).forEach(L=>{const D=L.split("	");I.push({nombre:(D[0]||"").trim(),codigo:(D[1]||"").trim(),categoria:H,imagen:(D[2]||"").trim()||void 0})})}),I},[]),G=O.useMemo(()=>{const I=d.toLowerCase();return k.filter(H=>H.categoria===g&&(H.nombre.toLowerCase().includes(I)||H.codigo.toLowerCase().includes(I)))},[k,d,g]),[y,M]=O.useState(null),j=I=>{navigator.clipboard.writeText(I.toLowerCase()).catch(()=>{}),M(I),setTimeout(()=>M(null),2e3)};return i.jsxs("div",{className:"flex flex-col gap-6",children:[i.jsxs("section",{className:"hero !p-6 md:!p-12 relative overflow-hidden",children:[i.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[i.jsx(zu,{size:14}),i.jsx("span",{children:l?"Secondary Catalog":"Catálogo secundario"})]}),i.jsxs("h1",{className:"text-3xl md:text-6xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[0.95]",children:[l?"EXTRA":"OTROS"," ",i.jsx("span",{className:"text-blue-brand-2",children:l?"CODES":"CÓDIGOS"})]}),i.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:l?"Orbs, consumables, structures, boxes, and offers filtered by category.":"Orbes, consumibles, estructuras, cajas y ofertas filtradas por categoría."})]}),i.jsx(ua,{}),i.jsxs("section",{className:"panel flex flex-col gap-4 !p-4 md:!p-6 transition-all border",children:[i.jsx("div",{className:"flex flex-wrap gap-2 text-center",children:r.map(I=>i.jsx("button",{onClick:()=>{h(I),b(12)},className:`flex-1 min-w-[120px] px-4 py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${g===I?"bg-blue-brand border-blue-brand-2 text-white shadow-lg":"bg-white/5 border-transparent text-slate-400 hover:bg-white/10"}`,children:l?I==="Cajas"?"Boxes":I==="Recursos"?"Resources":I==="Orbes"?"Orbs":I:I},I))}),i.jsxs("div",{className:"relative",children:[i.jsx(Uo,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-white/40"}),i.jsx("input",{value:d,onChange:I=>p(I.target.value),placeholder:l?`Search in ${g}...`:`Buscar en ${g}...`,className:"input pl-11 py-3.5 text-sm"})]})]}),i.jsx("section",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4",children:G.length>0?G.slice(0,f).map((I,H)=>i.jsxs("article",{className:"card p-4 flex flex-col gap-3 group transition-all border hover:border-blue-brand/40",children:[I.imagen?i.jsx("div",{className:"flex items-center justify-center p-3 rounded-xl aspect-square overflow-hidden transition-colors bg-white/5",children:i.jsx("img",{src:I.imagen,alt:x(I.nombre),className:"w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"})}):i.jsx("div",{className:"flex items-center justify-center p-3 rounded-xl aspect-square overflow-hidden opacity-30 bg-blue-brand/10 text-blue-brand-2",children:i.jsx(zu,{size:32})}),i.jsxs("div",{className:"flex-1 flex flex-col pt-1",children:[i.jsx("h3",{className:"text-xs md:text-sm font-black uppercase tracking-tight mb-1 line-clamp-1 transition-colors",children:x(I.nombre)}),i.jsx("div",{className:"font-mono font-bold text-[9px] md:text-[10px] tracking-widest uppercase mb-4 opacity-80 text-blue-brand-2",children:I.codigo}),i.jsxs("button",{onClick:()=>j(I.codigo),className:`btn w-full text-[10px] font-black uppercase tracking-widest py-2.5 rounded-xl mt-auto transition-all ${y===I.codigo?"bg-green-brand/20 border-green-brand/30 text-green-brand":"hover:bg-blue-brand/15"}`,children:[y===I.codigo?i.jsx(Er,{size:12}):i.jsx(Bu,{size:12}),i.jsx("span",{children:y===I.codigo?l?"DONE":"LISTO":l?"COPY":"COPIAR"})]})]})]},H)):i.jsx("div",{className:"col-span-full py-16 text-center border font-bold uppercase tracking-widest text-[10px] rounded-2xl bg-[#0d1421] border-line text-muted",children:l?"No codes found in this section.":"No se encontraron códigos en esta sección."})}),G.length>f&&i.jsx("div",{className:"flex justify-center mt-6",children:i.jsx("button",{onClick:()=>b(I=>I+12),className:"btn px-12 py-3.5 rounded-xl font-black uppercase tracking-widest text-xs transition-all bg-blue-brand/10 border-blue-brand/20 hover:bg-blue-brand/20",children:l?"Load More":"Cargar más"})})]})}const qf={quick_manual:{LATAM:"Manual rápido",USD:"Quick Manual",PT:"Manual Rápido",FR:"Manuel Rapide",DE:"Schnellstart-Anleitung"},title1:{LATAM:"GUÍA",USD:"USER",PT:"GUIA",FR:"GUIDE",DE:"BENUTZER"},title2:{LATAM:"DE USO",USD:"GUIDE",PT:"DO USUÁRIO",FR:"D'UTILISATION",DE:"HANDBUCH"},subtitle:{LATAM:"Todo lo básico para usar el catálogo sin perderte.",USD:"Everything you need to know to use the catalog without getting lost.",PT:"Tudo o que você precisa saber para usar o catálogo sem se perder.",FR:"Tout ce que vous devez savoir pour utiliser le catalogue sans vous perdre.",DE:"Alles, was Sie wissen müssen, um den Katalog zu nutzen, ohne sich zu verlaufen."},sec1_title:{LATAM:"1) Buscar por nombre o por código",USD:"1) Search by name or code",PT:"1) Buscar por nome ou por código",FR:"1) Recherche par nom ou code",DE:"1) Suche nach Name oder Code"},sec1_items:{LATAM:["Escribe parte del nombre o el código en el buscador.","El listado se filtra en tiempo real."],USD:["Type part of the name or code in the search box.","The list filters in real time."],PT:["Digite parte do nome ou código na caixa de busca.","A lista é filtrada em tempo real."],FR:["Saisissez une partie du nom ou du code dans la barre de recherche.","La liste est filtrée en temps réel."],DE:["Geben Sie einen Teil des Namens oder Codes im Suchfeld ein.","Die Liste filtert in Echtzeit."]},sec2_title:{LATAM:"2) Filtros por genes (máximo 2)",USD:"2) Gene filters (max 2)",PT:"2) Filtros de genes (máximo 2)",FR:"2) Filtres de gènes (max 2)",DE:"2) Genfilter (max. 2)"},sec2_items:{LATAM:["Puedes activar hasta 2 genes a la vez.","El filtro exige que el mutante tenga ambos genes seleccionados."],USD:["You can activate up to 2 genes at once.","The filter requires the mutant to have both selected genes."],PT:["Você pode ativar até 2 genes ao mesmo tempo.","O filtro exige que o mutante tenha ambos os genes selecionados."],FR:["Vous pouvez activer jusqu'à 2 gènes à la fois.","Le filtre exige que le mutant possède les deux gènes sélectionnés."],DE:["Sie können bis zu 2 Gene gleichzeitig aktivieren.","Der Filter erfordert, dass der Mutant beide ausgewählten Gene besitzt."]},sec3_title:{LATAM:"3) Copiar códigos sin errores",USD:"3) Copy codes without errors",PT:"3) Copiar códigos sem erros",FR:"3) Copier les codes sans erreur",DE:"3) Codes fehlerfrei kopieren"},sec3_items:{LATAM:["Pulsa el botón “Copiar código”.","El texto se envía al portapapeles automáticamente."],USD:['Click the "Copy Code" button.',"The text is automatically sent to the clipboard."],PT:['Clique no botão "Copiar código".',"O texto é enviado automaticamente para a área de transferência."],FR:['Cliquez sur le bouton "Copier le code".',"Le texte est automatiquement envoyé dans le presse-papiers."],DE:['Klicken Sie auf die Schaltfläche "Code kopieren".',"Der Text wird automatisch in die Zwischenablage kopiert."]},sec4_title:{LATAM:"4) Qué hay en cada página",USD:"4) What is on each page",PT:"4) O que há em cada página",FR:"4) Contenu de chaque page",DE:"4) Was ist auf jeder Seite"},sec4_items:{LATAM:["Inicio: base de mutantes.","Servicios: packs y pedidos.","Evo: calculadora.","Otros códigos: orbes y extras.","Descargas y tutoriales: recursos y videos."],USD:["Home: mutant database.","Services: packs and orders.","Evo: calculator.","Other codes: orbs and extras.","Downloads and tutorials: resources and videos."],PT:["Início: banco de dados de mutantes.","Serviços: pacotes e pedidos.","Evo: calculadora.","Outros códigos: orbes e extras.","Downloads e tutoriais: recursos e vídeos."],FR:["Accueil: base de données de mutants.","Services: packs et commandes.","Evo: calculateur.","Autres codes: orbes et suppléments.","Téléchargements et tutoriels: ressources et vidéos."],DE:["Startseite: Mutanten-Datenbank.","Dienste: Pakete und Bestellungen.","Evo: Rechner.","Andere Codes: Orbs und Extras.","Downloads und Tutorials: Ressourcen und Videos."]},sec5_title:{LATAM:"5) Rendimiento (menos lag)",USD:"5) Performance (less lag)",PT:"5) Desempenho (menos lag)",FR:"5) Performance (moins de décalage)",DE:"5) Leistung (weniger Lag)"},sec5_items:{LATAM:["La versión React utiliza componentes dinámicos para mayor fluidez.","Si algo se ve raro, recarga la aplicación."],USD:["The React version uses dynamic components for better fluidity.","If something looks weird, reload the application."],PT:["A versão React usa componentes dinâmicos para melhor fluidez.","Se algo parecer estranho, recarregue o aplicativo."],FR:["La version React utilise des composants dynamiques pour une meilleure fluidité.","Si quelque chose semble anormal, rechargez l'application."],DE:["Die React-Version verwendet dynamische Komponenten für mehr Flüssigkeit.","Wenn etwas seltsam aussieht, laden Sie die Anwendung neu."]}};function i5(){const{region:a}=St(),s=r=>{var d,p;return((d=qf[r])==null?void 0:d[a])||((p=qf[r])==null?void 0:p.USD)||""},l=[{title:s("sec1_title"),items:s("sec1_items"),icon:Vo},{title:s("sec2_title"),items:s("sec2_items"),icon:Vo},{title:s("sec3_title"),items:s("sec3_items"),icon:Vo},{title:s("sec4_title"),items:s("sec4_items"),icon:Vo},{title:s("sec5_title"),items:s("sec5_items"),icon:Vo}];return i.jsxs("div",{className:"flex flex-col gap-6",children:[i.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[i.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-20",children:i.jsx(Uu,{size:120,className:"text-blue-brand-2"})}),i.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[i.jsx(Uu,{size:16,className:"text-blue-brand-2"}),i.jsx("span",{children:s("quick_manual")})]}),i.jsxs("h1",{className:"text-4xl md:text-6xl font-black mt-2.5 mb-2.5 uppercase tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:[s("title1")," ",i.jsx("span",{className:"text-blue-brand-2",children:s("title2")})]}),i.jsx("p",{className:"text-muted max-w-2xl mx-auto px-4 opacity-80",children:s("subtitle")})]}),i.jsx(ua,{}),i.jsx("section",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:l.map((r,d)=>{const p=r.icon;return i.jsxs("article",{className:"panel flex flex-col gap-4 border border-white/10 bg-white/[0.01] hover:border-blue-brand-2/30 hover:bg-white/[0.02] shadow-lg transition-all duration-300",children:[i.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center transition-colors bg-white/8 text-blue-brand-2",children:i.jsx(p,{size:24})}),i.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white",children:r.title}),i.jsx("div",{className:"flex flex-col gap-2",children:r.items.map((g,h)=>i.jsx("p",{className:"text-muted m-0 text-sm leading-relaxed opacity-90",children:g},h))})]},d)})})]})}const Rf={multimedia:{LATAM:"Contenido multimedia",USD:"Multimedia",PT:"Conteúdo multimídia",FR:"Contenu multimédia",DE:"Multimedia-Inhalte"},tutoriales_title1:{LATAM:"TUTORIALES",USD:"YOUTUBE",PT:"TUTORIAIS",FR:"TUTORIELS",DE:"TUTORIALS"},tutoriales_title2:{LATAM:"YOUTUBE",USD:"GUIDES",PT:"YOUTUBE",FR:"YOUTUBE",DE:"YOUTUBE"},tutoriales_desc:{LATAM:"Aquí subo guías rápidas y tips sobre el catálogo y Mutants: Genetic Gladiators.",USD:"Quick guides and tips about the catalog and Mutants: Genetic Gladiators.",PT:"Aqui eu posto guias rápidos e dicas sobre o catálogo e Mutants: Genetic Gladiators.",FR:"Ici, je publie des guides rapides et des conseils sur le catalogue et Mutants: Genetic Gladiators.",DE:"Hier lade ich Kurzanleitungen und Tipps zum Katalog und Mutants: Genetic Gladiators hoch."},youtube_channel:{LATAM:"Canal de YouTube",USD:"YouTube Channel",PT:"Canal do YouTube",FR:"Chaîne YouTube",DE:"YouTube-Kanal"},youtube_channel_desc:{LATAM:"Si estás en móvil, puede abrir la app de YouTube si la tienes instalada.",USD:"If you are on mobile, it might open the YouTube app directly.",PT:"Se estiver no celular, pode abrir o aplicativo do YouTube diretamente.",FR:"Si vous êtes sur mobile, cela peut ouvrir directement l'application YouTube.",DE:"Wenn Sie mobil unterwegs sind, wird möglicherweise direkt die YouTube-App geöffnet."},go_to:{LATAM:"Ir a @spieler_Lc",USD:"Go to @spieler_Lc",PT:"Ir para @spieler_Lc",FR:"Aller sur @spieler_Lc",DE:"Gehe zu @spieler_Lc"},view_videos:{LATAM:"Ver videos",USD:"View videos",PT:"Ver vídeos",FR:"Voir les vidéos",DE:"Videos anzeigen"},want_to_find:{LATAM:"¿Qué vas a encontrar?",USD:"What will you find?",PT:"O que você vai encontrar?",FR:"Que trouverez-vous ?",DE:"Was werden Sie finden?"},bullet1:{LATAM:"Cómo buscar mutantes y copiar códigos sin errores.",USD:"How to search for mutants and copy codes without errors.",PT:"Como procurar mutantes e copiar códigos sem erros.",FR:"Comment rechercher des mutants et copier des codes sans erreur.",DE:"So suchen Sie nach Mutanten und kopieren Codes fehlerfrei."},bullet2:{LATAM:"Cómo usar filtros por genes.",USD:"How to use gene filters.",PT:"Como usar filtros por genes.",FR:"Comment utiliser les filtres par gènes.",DE:"So verwenden Sie Genfilter."},bullet3:{LATAM:"Consejos para usar emuladores y reducir el lag.",USD:"Tips for using emulators and reducing lag.",PT:"Dicas para usar emuladores e reduzir o lag.",FR:"Conseils pour utiliser des émulateurs et réduire le décalage (lag).",DE:"Tipps zur Verwendung von Emulatoren und zur Reduzierung von Lag."}};function r5(){const{region:a}=St(),s=l=>{var r,d;return((r=Rf[l])==null?void 0:r[a])||((d=Rf[l])==null?void 0:d.USD)||""};return i.jsxs("div",{className:"flex flex-col gap-6",children:[i.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[i.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-20",children:i.jsx(yr,{size:120,className:"text-blue-brand-2"})}),i.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[i.jsx(yr,{size:16,className:"text-blue-brand-2"}),i.jsx("span",{children:s("multimedia")})]}),i.jsxs("h1",{className:"text-4xl md:text-6xl font-black mt-2.5 mb-2.5 uppercase tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:[s("tutoriales_title1")," ",i.jsx("span",{className:"text-blue-brand-2",children:s("tutoriales_title2")})]}),i.jsx("p",{className:"text-muted max-w-2xl mx-auto px-4 opacity-80",children:s("tutoriales_desc")})]}),i.jsx(ua,{}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[i.jsxs("section",{className:"panel flex flex-col gap-5 transition-all duration-300 border border-white/10 bg-white/[0.01] hover:border-blue-brand-2/30 hover:bg-white/[0.02]",children:[i.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center bg-white/8 text-red-500 shadow-lg shadow-red-500/10",children:i.jsx(yr,{size:24})}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-bold tracking-tight mb-2 text-white",children:s("youtube_channel")}),i.jsx("p",{className:"text-muted text-sm m-0 leading-relaxed opacity-90",children:s("youtube_channel_desc")})]}),i.jsxs("div",{className:"flex flex-wrap gap-3 mt-auto",children:[i.jsxs("a",{className:"btn btn-primary px-6 transition-all duration-200",target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/@spieler_Lc",children:[i.jsx(oa,{size:18}),i.jsx("span",{children:s("go_to")})]}),i.jsxs("a",{className:"btn px-6 border-white/10 hover:border-blue-brand-2 hover:bg-blue-brand-2/10 transition-all duration-200",target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/@spieler_Lc/videos",children:[i.jsx(T2,{size:18}),i.jsx("span",{children:s("view_videos")})]})]})]}),i.jsxs("section",{className:"panel flex flex-col gap-5 transition-all duration-300 border border-white/10 bg-white/[0.01] hover:border-blue-brand-2/30 hover:bg-white/[0.02]",children:[i.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center bg-white/8 text-yellow-brand shadow-lg shadow-yellow-brand/10",children:i.jsx(Q2,{size:24})}),i.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white",children:s("want_to_find")}),i.jsxs("ul",{className:"text-muted text-sm space-y-3 pl-5 list-disc marker:text-blue-brand-2/50",children:[i.jsx("li",{children:s("bullet1")}),i.jsx("li",{children:s("bullet2")}),i.jsx("li",{children:s("bullet3")})]})]})]})]})}const l5=[{name:"Androide",code:"AA_01",imageUrl:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_aa_01_platinum.png"},{name:"Robot",code:"A_01",imageUrl:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_01_platinum.png"},{name:"Búho Sabio",code:"AB_12",imageUrl:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ab_12_platinum.png"},{name:"Monstruo",code:"D_05",imageUrl:""},{name:"Fénix Lilith",code:"EC_18",imageUrl:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ec_18_platinum.png"}],Of={eyebrow_demostracion:{LATAM:"DEMOSTRACIÓN INTERACTIVA",USD:"INTERACTIVE DEMONSTRATION",PT:"DEMONSTRAÇÃO INTERATIVA",FR:"DÉMONSTRATION INTERACTIVE",DE:"INTERAKTIVE DEMONSTRATION"},guide_subtitle:{LATAM:"Guía visual interactiva de uso del script MGG de Game Guardian. Creado para educar y entrenar principiantes sin peligro de alterar sus archivos.",USD:"Interactive visual guide to use the Game Guardian MGG script. Created to educate and train beginners with no risk of altering files.",PT:"Guia visual interativo para uso do script MGG do Game Guardian. Criado para educar e treinar iniciantes sem risco de alterar arquivos.",FR:"Guide visuel interactif d'utilisation du script MGG de Game Guardian. Créé pour éduquer et former les débutants sans risque d'altérer les fichiers.",DE:"Interaktiver visueller Guide für das Game Guardian MGG-Script. Entwickelt, um Anfänger anzuleiten, ohne das Risiko realer Dateiänderungen."},explorer_title:{LATAM:"Nota: El script real cuenta con todas estas opciones. Este simulador está diseñado para que conozcas su aspecto visual y estructura de forma sencilla sin complicaciones técnicas.",USD:"Note: This is the complete list of options the real script will have. This interactive guide is designed to let you see its layout and options without technical details.",PT:"Nota: Estas são todas as opções que o script real possui. Este simulador foi projetado para que você conheça seu aspecto visual e estrutura facilmente.",FR:"Note : Ce sont toutes les options que contiendra le script réel. Ce simulateur est conçu pour vous montrer son aspect visuel et sa structure de manière simple.",DE:"Hinweis: Dies sind alle Optionen, die das echte Script bietet. Dieser Simulator zeigt Ihnen das Design und die Struktur auf einfache Weise."},switch_label:{LATAM:"INTERRUPTOR EXPLICATIVO",USD:"EXPLANATORY SWITCH",PT:"INTERRUPTOR EXPLICATIVO",FR:"INTERRUPTEUR D'EXPLICATIONS",DE:"ERKLÄRUNGS-SCHALTER"},guide_mode_active:{LATAM:"MODO GUÍA: ACTIVADO ✔",USD:"GUIDE MODE: ACTIVATED ✔",PT:"MODO GUIA: ATIVADO ✔",FR:"MODE GUIDE : ACTIVÉ ✔",DE:"GUIDE-MODUS: AKTIVIERT ✔"},guide_mode_inactive:{LATAM:"MODO GUÍA: DESACTIVADO ✕",USD:"GUIDE MODE: DEACTIVATED ✕",PT:"MODO GUIA: DESATIVADO ✕",FR:"MODE GUIDE : DÉSACTIVÉ ✕",DE:"GUIDE-MODUS: DEAKTIVIERT ✕"},tutorial_btn:{LATAM:"[?] ¿Es tu primera vez? Inicia el tutorial",USD:"[?] First time here? Start the tutorial",PT:"[?] Primeira vez aqui? Inicie o tutorial",FR:"[?] Première fois ? Démarrer le tutoriel",DE:"[?] Zum ersten Mal hier? Tutorial starten"},welcome_edition:{LATAM:"EDICIÓN COMPLETA — PORT DE ENTRENAMIENTO",USD:"COMPLETE EDITION — TRAINING SIMULATOR",PT:"EDIÇÃO COMPLETA — SIMULADOR DE TREINAMENTO",FR:"ÉDITION COMPLÈTE — SIMULATEUR D'ENTRAÎNEMENT",DE:"VOLLSTÄNDIGE EDITION — SCHULUNGSSIMULATOR"},developed_by:{LATAM:"DESARROLLADO POR: SMITH LUQUE",USD:"DEVELOPED BY: SMITH LUQUE",PT:"DESENVOLVIDO POR: SMITH LUQUE",FR:"DÉVELOPPÉ PAR : SMITH LUQUE",DE:"ENTWICKELT VON: SMITH LUQUE"},free_label:{LATAM:"GRATUITO",USD:"FREE",PT:"GRÁTIS",FR:"GRATUIT",DE:"KOSTENLOS"},free_warning_title:{LATAM:"Script Gratuito:",USD:"Free Script:",PT:"Script Grátis:",FR:"Script gratuit :",DE:"Kostenloses Script:"},free_warning_text:{LATAM:" Si alguien intenta venderte este archivo, te están estafando. Exige siempre links oficiales verificados.",USD:" If anyone tries to sell you this file, you are being scammed. Always ask for official verified links.",PT:" Se alguém tentar te vender este arquivo, é golpe. Exija sempre links oficiais verificados.",FR:" Si quelqu'un cherche à vous vendre ce fichier, c'est une arnaque. Demandez toujours les liens officiels.",DE:" Wenn Ihnen jemand diese Datei verkaufen möchte, werden Sie betrogen. Bestehen Sie auf verifizierte Links."},welcome_description:{LATAM:"Esta guía visual permite simular las rutas, botones y submenús reales de la consola de Game Guardian para familiarizarte con su control antes de inyectarla.",USD:"This visual guide lets you simulate the actual paths, buttons, and submenus in the Game Guardian console to learn its control layout beforehand.",PT:"Este guia visual permite simular os caminhos reais, botões e submenus do console Game Guardian para você se familiarizar antes de usar.",FR:"Ce guide visuel vous permet de simuler les arborescences, boutons et sous-menus réels de Game Guardian pour vous habituer à sa navigation.",DE:"Diese visuelle Anleitung simuliert die tatsächlichen Menüpfade und Schaltflächen von Game Guardian für ein einfaches Kennenlernen."},run_interactive:{LATAM:"[>] INICIAR RECORRIDO INTERACTIVO",USD:"[>] START INTERACTIVE TOUR",PT:"[>] INICIAR ROTEIRO INTERATIVO",FR:"[>] LANCER LA VISITE INTERACTIVE",DE:"[>] INTERAKTIVEN RUNDGANG STARTEN"},view_quick_tutorial:{LATAM:"[?] VER GUÍA RÁPIDA",USD:"[?] VIEW QUICK GUIDE",PT:"[?] VER GUIA RÁPIDO",FR:"[?] VOIR LE GUIDE RAPIDE",DE:"[?] SCHNELLANLEITUNG SEHEN"},control_access:{LATAM:"Control de Acceso",USD:"Access Control",PT:"Controle de Acesso",FR:"Contrôle d'accès",DE:"Zugriffskontrolle"},breadcrumb_password:{LATAM:"Inicio > Acceso de Seguridad",USD:"Home > Security Access",PT:"Início > Acesso de Segurança",FR:"Accueil > Accès de sécurité",DE:"Startseite > Sicherheitszugriff"},enter_password_title:{LATAM:"INGRESO DE CONTRASEÑA",USD:"ENTER SCRIPT PASSWORD",PT:"INSERIR SENHA DO SCRIPT",FR:"ENTRER LE MOT DE PASSE",DE:"SCRIPT-PASSWORT EINGEBEN"},enter_password_desc:{LATAM:"El script oficial cuenta con un sistema de seguridad para evitar malware. Copia la contraseña sugerida y pégala para simular el inicio.",USD:"The official script features a security system to prevent malware. Copy the suggested password and paste it to log in.",PT:"O script oficial tem um sistema de segurança contra malware. Copie a senha sugerida e cole-a para simular o acesso.",FR:"Le script officiel possède un système de sécurité anti-malware. Copiez le mot de passe suggéré et collez-le pour simuler l'accès.",DE:"Das offizielle Script hat ein Sicherheitssystem gegen Malware. Kopieren Sie das vorgeschlagene Passwort und fügen Sie es ein, um zu starten."},suggested_pass_label:{LATAM:"Contraseña Real sugerida: SMITH-NEXUS-2026",USD:"Suggested Script Password: SMITH-NEXUS-2026",PT:"Senha real recomendada: SMITH-NEXUS-2026",FR:"Mot de passe suggéré : SMITH-NEXUS-2026",DE:"Empfohlenes Passwort: SMITH-NEXUS-2026"},pass_input_placeholder:{LATAM:"Escribe SMITH-NEXUS-2026 u otra",USD:"Type SMITH-NEXUS-2026 or other",PT:"Digite SMITH-NEXUS-2026 ou outra",FR:"Saisissez SMITH-NEXUS-2026 ou autre",DE:"SMITH-NEXUS-2026 eingeben"},btn_submit_pass:{LATAM:"[>] Validar e Iniciar Script",USD:"[>] Validate & Launch Script",PT:"[>] Validar e Iniciar Script",FR:"[>] Valider et lancer le script",DE:"[>] Validieren & Script starten"},empty_pass_error:{LATAM:"Ingresa una contraseña para probar.",USD:"Please enter a password to test.",PT:"Insira uma senha para testar.",FR:"Veuillez entrer un mot de passe pour tester.",DE:"Bitte geben Sie ein Passwort zum Testen ein."},incorrect_pass_error:{LATAM:"¡Contraseña Incorrecta! Revisa la sugerencia SMITH-NEXUS-2026.",USD:"Incorrect Password! Copy SMITH-NEXUS-2026 carefully.",PT:"Senha Incorreta! Verifique a sugestão SMITH-NEXUS-2026.",FR:"Mot de passe incorrect ! Vérifiez la suggestion SMITH-NEXUS-2026.",DE:"Ungültiges Passwort! Kopieren Sie SMITH-NEXUS-2026 sorgfältig."},establishing_sync:{LATAM:"Estableciendo sincronización...",USD:"Establishing authorization lock...",PT:"Estabelecendo sincronização...",FR:"Synchronisation en cours...",DE:"Synchronisierung wird eingerichtet..."},pw_log0:{LATAM:"Iniciando conexión simulada...",USD:"Initiating simulated connection...",PT:"Iniciando conexão simulada...",FR:"Initialisation de la connexion...",DE:"Simulierte Verbindung wird initialisiert..."},pw_log1:{LATAM:"Estableciendo canal seguro s-ak.kobojo.com...",USD:"Establishing secure tunnel with s-ak.kobojo.com...",PT:"Estabelecendo canal seguro s-ak.kobojo.com...",FR:"Établissement du canal sécurisé s-ak.kobojo.com...",DE:"Sicherer Tunnel zu s-ak.kobojo.com wird aufgebaut..."},pw_log2:{LATAM:"Verificando credenciales con servidor de licencias...",USD:"Verifying license keys on the verification server...",PT:"Verificando licença com o servidor de validação...",FR:"Vérification de la licence sur le serveur...",DE:"Lizenzschlüssel wird auf dem Server verifiziert..."},pw_log3:{LATAM:"Acceso autorizado con éxito (SMITH-NEXUS-2026).",USD:"Access successfully authorized (SMITH-NEXUS-2026).",PT:"Acesso autorizado com sucesso (SMITH-NEXUS-2026).",FR:"Accès autorisé avec succès (SMITH-NEXUS-2026).",DE:"Zugriff erfolgreich autorisiert (SMITH-NEXUS-2026)."},pw_log4:{LATAM:"Cargando base de datos interna y estructuras...",USD:"Loading database layout and internal parameters...",PT:"Carregando banco de dados interno e estruturas...",FR:"Chargement des tables de données internes...",DE:"Interne Datenbankstrukturen werden geladen..."},pw_log5:{LATAM:"Abriendo interfaz principal...",USD:"Opening the primary console interface...",PT:"Abrindo console principal...",FR:"Ouverture de l'interface principale...",DE:"Hauptkonsole wird geladen..."},sim_log0:{LATAM:"[SCRIPT] Inicializando componentes...",USD:"[SCRIPT] Initializing modules...",PT:"[SCRIPT] Inicializando módulos...",FR:"[SCRIPT] Initialisation des modules...",DE:"[SCRIPT] Module werden initialisiert..."},sim_log1:{LATAM:"[GAME] Obteniendo dirección del laboratorio...",USD:"[GAME] Retrieving laboratory address...",PT:"[GAME] Obtendo endereço de laboratório...",FR:"[GAME] Localisation de l'adresse du labo...",DE:"[GAME] Laboradresse wird abgerufen..."},sim_log2:{LATAM:"[SCRIPT] Buscando offsets de estructura en la memoria...",USD:"[SCRIPT] Searching structural offsets in RAM...",PT:"[SCRIPT] Buscando offsets na memória...",FR:"[SCRIPT] Recherche des offsets mémoire...",DE:"[SCRIPT] Sucht Speicher-Offsets..."},sim_log3:{LATAM:"[SCRIPT] Analizando patrones hexadecimales de mutante...",USD:"[SCRIPT] Parsing mutant hexadecimal signatures...",PT:"[SCRIPT] Analisando assinaturas hexa...",FR:"[SCRIPT] Analyse des signatures hexa...",DE:"[SCRIPT] Analysiert hexadezimale Signaturen..."},sim_log4:{LATAM:"[SCRIPT] Preparando carga útil de seguridad...",USD:"[SCRIPT] Preparing secure bytecode payload...",PT:"[SCRIPT] Preparando payload...",FR:"[SCRIPT] Préparation du bytecode sécurisé...",DE:"[SCRIPT] Bereitet sicheren Bytecode vor..."},sim_log5:{LATAM:"[OK] Aplicando parches y redirecciones de memoria...",USD:"[OK] Applying memory patches and redirection pointers...",PT:"[OK] Aplicando patches de memória...",FR:"[OK] Application des patchs dans la RAM...",DE:"[OK] Wende Speicher-Patches an..."},sim_log6:{LATAM:"[FIN] Sincronización educativa finalizada.",USD:"[FIN] Educational sync finished.",PT:"[FIM] Sincronização educacional encerrada.",FR:"[FIN] Synchronisation de formation terminée.",DE:"[ENDE] Schulungssynchronisation beendet."},tutorial_running_item:{LATAM:"TUTORIAL DE USO INTERACTIVO",USD:"INTERACTIVE USER TUTORIAL",PT:"TUTORIAL DE USO INTERATIVO",FR:"GUIDE INTERACTIF D'UTILISATION",DE:"INTERAKTIVES USER-TUTORIAL"},tutorial_step_label:{LATAM:"Paso {step} de {total}",USD:"Step {step} of {total}",PT:"Passo {step} de {total}",FR:"Étape {step} sur {total}",DE:"Schritt {step} von {total}"},tutorial_prev:{LATAM:"Anterior",USD:"Previous",PT:"Anterior",FR:"Précédent",DE:"Zurück"},tutorial_next:{LATAM:"Siguiente [>]",USD:"Next [>]",PT:"Seguinte [>]",FR:"Suivant [>]",DE:"Weiter [>]"},tutorial_finish:{LATAM:"[>] Entendido",USD:"[>] Got it",PT:"[>] Entendido",FR:"[>] Compris",DE:"[>] Fertig"},caution_title:{LATAM:"SEGURIDAD Y PRECAUCIÓN",USD:"SECURITY & CAUTION",PT:"SEGURANÇA E PRECAUÇÃO",FR:"SÉCURITÉ ET PRÉVENTION",DE:"SICHERHEIT & VORSICHT"},caution_para:{LATAM:"Esta herramienta es meramente una emulación explicativa con fines educativos. NO modifica, inyecta, vincula ni altera bases de datos reales ni accede a tu cliente de Game Guardian.",USD:"This tool is purely an explanatory emulation for educational purposes. It does NOT modify, inject, link, or alter actual databases, nor does it access your Game Guardian client.",PT:"Esta ferramenta é apenas uma emulação com fins educativos. NÃO modifica, injeta, vincula ou altera bancos de dados reais. Não acessa o Game Guardian.",FR:"Cet outil est hélas une simple émulation éducative. Il ne modifie, n'injecte ni n'altère aucune base de données de jeu réelle.",DE:"Dieses Tool ist eine reine Erklärungs-Emulation. Es verändert KEINE echten Datenbankdaten und nimmt keinen Zugriff auf Ihren Game Guardian."},caution_warning_box:{LATAM:"Esta emulación sirve para que memorices los pasos, mitigando el riesgo de brickear o des-sincronizar tus progresos reales.",USD:"This emulator serves as a visual layout reference to practice steps to avoid bricking or de-syncing your actual game progress.",PT:"Esta emulação ajuda você a memorizar os passos, minimizando riscos de erros ou perda de progresso no jogo original.",FR:"Cette émulation vous aide à mémoriser les étapes, évitant ainsi d'abîmer ou de désynchroniser vos fichiers réelles.",DE:"Diese Emulation dient dem Verinnerlichen von Prozessen, um Fehler oder Datenverlust im echten Spiel vorzubeugen."},exploration_title:{LATAM:"EXPLORACIÓN DIRECTA LUA",USD:"DIRECT LUA EXPLORATION",PT:"EXPLORAÇÃO DIRETA LUA",FR:"EXPLORATION LUA DIRECTE",DE:"DIREKTE LUA-NAVIGATION"},exploration_desc:{LATAM:"La script LUA realiza suplantaciones de especímenes sustituyendo las variables gráficas en memoria temporal. He aquí los códigos primarios de emulación básica:",USD:"The LUA script swaps visual specimen resources inside temporary game memory. Here are some key baseline specimen codes used for basic testing:",PT:"O script LUA realiza trocas visuais modificando variáveis temporárias em memória. Seguem alguns códigos básicos para testes:",FR:"Le script LUA réalise des substitutions de rendu en mémoire vive. Voici les codes principaux de base :",DE:"Das LUA-Script verändert temporäre Modellreferenzen im Hauptspeicher des Spiels. Hier sind die gängigsten Basis-Codes:"},exploration_tip:{LATAM:"Tip: En el simulador, puedes comprobar cómo reaccionaría el script ingresando cualquiera de las referencias listadas arriba.",USD:"Tip: In this simulator, you can discover how the script behaves by entering any of the reference codes above.",PT:"Dica: No simulador, você pode conferir a resposta do script inserindo quaisquer uma das referências acima.",FR:"Conseil : Dans le simulateur, vous pouvez voir la réaction du script en saisissant l'un de ces codes ci-dessus.",DE:"Tipp: Im Simulator können Sie die Reaktion sehen, wenn Sie einen der obigen Referenzcodes eingeben."},success_simulation_title:{LATAM:"[+] Simulación Completada",USD:"[+] Simulation Completed",PT:"[+] Simulação Concluída",FR:"[+] Simulation terminée",DE:"[+] Emulation abgeschlossen"},success_simulation_desc_label:{LATAM:"¿Qué deberías hacer en el juego real tras este paso?",USD:"What should you do in the actual game after this step?",PT:"O que você deve fazer no jogo real após este passo?",FR:"Que devez-vous faire dans le jeu réel après cette étape ?",DE:"Was sollten Sie im tatsächlichen Spiel nach diesem Schritt tun?"},success_simulation_desc_body:{LATAM:"Asegúrate de regresar al juego activo, abrir la sección correspondiente vinculada y confirmar que los valores de memoria/gráficos estén cambiados. Si el juego se cierra, vuelve a abrir el script GameGuardian y recarga los offsets de seguridad modificando la velocidad.",USD:"Make sure to return to the active game, open the corresponding section, and verify that the memory/visual values have changed. If the game crashes, reopen the GameGuardian script and reload the safety offsets by adjusting speed.",PT:"Lembre-se de retornar ao jogo ativo, abrir la seção correspondente e verificar se os valores de memória/gráficos mudaram. Se o jogo fechar, reabra o script GameGuardian e recarregue os offsets ajustando a velocidade.",FR:"Assurez-vous de revenir au jeu actif, d'ouvrir l'onglet associé et de vérifier si les valeurs en mémoire ont changé. Si le jeu se ferme, rouvrez le script GameGuardian et rechargez les offsets en ajustant la vitesse.",DE:"Wechseln Sie zurück in das aktive Spiel, öffnen Sie den entsprechenden Bereich und prüfen Sie, ob die Werte geändert wurden. Falls das Spiel abstürzt, starten Sie das GameGuardian-Script neu."},success_simulation_clarification:{LATAM:"Nota aclaratoria: Esta página solamente explica el proceso educativo. No ejecuta cambios en tu cuenta ni altera archivos Lua.",USD:"Clarification note: This page is only an educational tutorial. It does not perform any changes on your account or edit actual Lua files.",PT:"Nota declaratória: Esta página é apenas um tutorial educacional. Não realiza alterações na sua conta nem altera arquivos Lua.",FR:"Note de précision : Cette page est un matériel éducatif. Elle n'applique aucun changement sur votre compte et ne manipule aucun fichier Lua.",DE:"Hinweis: Diese Seite dient nur Schulungszwecken. Es werden keine echten Änderungen an Ihrem Account oder echten Lua-Dateien vorgenommen."},success_simulation_understand:{LATAM:"[>] Entendido, volver",USD:"[>] Got it, return",PT:"[>] Entendido, voltar",FR:"[>] Compris, retour",DE:"[>] Verstanden, zurück"},selected_function_label:{LATAM:"¿Qué hará en el script real?",USD:"What will this do in the real script?",PT:"O que faz no script real?",FR:"Description dans le script réel :",DE:"Aktion im echten Script:"},result_check_label:{LATAM:"¿Dónde revisar el resultado?",USD:"Where to check the result?",PT:"Onde ver o resultado?",FR:"Où vérifier le résultat ?",DE:"Wo das Ergebnis prüfen?"},recommendation_label:{LATAM:"RECOMENDACIÓN DE USO:",USD:"USE RECOMMENDATION:",PT:"RECOMENDAÇÃO DE USO:",FR:"RECOMMANDATION D'UTILISATION :",DE:"EMPFEHLUNG FÜR NUTZUNG:"},simulate_action:{LATAM:"[>] Simular ejecución",USD:"[>] Simulate execution",PT:"[>] Simular execução",FR:"[>] Simuler l'exécution",DE:"[>] Ausführung simulieren"},button_return:{LATAM:"[>] Regresar",USD:"[>] Return",PT:"[>] Voltar",FR:"[>] Retour",DE:"[>] Zurück"},detail_title:{LATAM:"DESCRIPCIÓN DE FUNCIÓN",USD:"OPTION DETAILS",PT:"DETALHES DA OPÇÃO",FR:"DÉTAILS DE L'OPTION",DE:"DETAILS DER OPTION"},detail_func_label:{LATAM:"FUNCIÓN SELECCIONADA:",USD:"SELECTED OPTION:",PT:"OPÇÃO SELECIONADA:",FR:"OPTION SÉLECTIONNÉE :",DE:"GEWÄHLTE OPTION:"},detail_ready:{LATAM:"PREPARADO",USD:"READY",PT:"PREPARADO",FR:"PRÊT",DE:"BEREIT"},sim_progress_title:{LATAM:"PROGRESO DE LA SIMULACIÓN:",USD:"SIMULATION LOGS:",PT:"REGISTROS DA SIMULAÇÃO:",FR:"JOURNAUX DE SIMULATION :",DE:"SIMULATIONS-PROTOKOLL:"},sim_writing_logs:{LATAM:"Escribiendo registros simulados...",USD:"Writing simulation logs...",PT:"Registrando logs simulados...",FR:"Écriture des logs...",DE:"Logs werden generiert..."},console_status:{LATAM:"SIMULACIÓN: ",USD:"SIMULATION: ",PT:"SIMULAÇÃO: ",FR:"SIMULATION : ",DE:"SIMULATION: "},sec_label:{LATAM:"Sec: {page}",USD:"Page: {page}",PT:"Pág: {page}",FR:"Page : {page}",DE:"Seite: {page}"},console_demo_badge:{LATAM:"DEMO EDUCATIVA",USD:"EDUCATIONAL DEMO",PT:"DEMO EDUCACIONAL",FR:"DÉMO ÉDUCATIVE",DE:"SCHULUNGSDEMO"},btn_vol:{LATAM:"[<] Volver",USD:"[<] Back",PT:"[<] Voltar",FR:"[<] Retour",DE:"[<] Zurück"},btn_help_tut:{LATAM:"[?] Ayuda",USD:"[?] Help",PT:"[?] Ajuda",FR:"[?] Aide",DE:"[?] Hilfe"},tut_step1_title:{LATAM:"Elige una Categoría del Menú",USD:"Choose a Menu Category",PT:"Escolha uma Categoria de Menu",FR:"Choisissez une catégorie",DE:"Menükategorie wählen"},tut_step1_text:{LATAM:'El menú principal simula la consola real. Puedes hacer clic en "Mutantes", "Reactor", o cualquiera para abrir las herramientas.',USD:'The main menu simulates the actual console. Click on "Mutantes", "Reactor", or any category to open the tools.',PT:'O menu principal simula o console real. Você pode clicar em "Mutantes", "Reactor" ou outros para explorar.',FR:'Le menu principal simule la vraie console. Vous pouvez cliquer sur "Mutantes", "Reactor" ou autre pour ouvrir les outils.',DE:'Das Hauptmenü simuliert die echte Konsole. Klicken Sie auf "Mutantes", "Reactor" oder Ähnliches, um Werkzeuge anzuzeigen.'},tut_step2_title:{LATAM:"Lee la Explicación del Modo Guía",USD:"Read the Guide Mode Explanation",PT:"Leia a Explicação do Modo Guia",FR:"Lisez les explications",DE:"Erklärung des Guide-Modus lesen"},tut_step2_text:{LATAM:'Cuando el "MODO GUÍA" está ACTIVADO, se muestra una explicación debajo de cada opción para enseñarte qué hace en el juego real.',USD:'When "GUIDE MODE" is ENABLED, a simple explanation is shown under each option to teach you what it does in the actual game.',PT:'Quando o "MODO GUIA" está ATIVADO, uma breve explicação é mostrada abaixo de cada opção para te guiar.',FR:'Lorsque le "MODE GUIDE" est ACTIF, une brève description est affichée sous chaque option.'},tut_step3_title:{LATAM:"Simula una Ejecución",USD:"Simulate an Execution",PT:"Simule uma Execução",FR:"Simuler l'exécution",DE:"Ausführung simulieren"},tut_step3_text:{LATAM:'Dentro de las opciones, puedes hacer clic en "Simular ejecución" para observar cómo se parchea y manipula la memoria en tiempo real de forma segura.',USD:'Inside any option, you can click "Simulate execution" to watch memory patching steps in real-time safely.',PT:'Dentro das opções, você pode clicar em "Simular execução" para ver as alterações simuladas com total segurança.',FR:`Dans les options, cliquez sur "Simuler l'exécution" pour voir le fonctionnement de rendu de mémoire.`},tut_step4_title:{LATAM:"Usa el Botón Volver",USD:"Use the Back Button",PT:"Use o Botão Voltar",FR:"Bouton Retour",DE:"Zurück-Schaltfläche nutzen"},tut_step4_text:{LATAM:'Puedes pulsar el botón "[<] Volver" en la barra inferior para regresar paso a paso a la pantalla anterior cómodamente.',USD:'You can press the "[<] Back" button on the bottom bar to return step-by-step to the previous screen easily.',PT:'Pressione "[<] Voltar" na barra inferior para retornar passo a passo à tela anterior.'},tut_step5_title:{LATAM:"Consulta la Barra de Control Inferior",USD:"Check the Bottom Control Bar",PT:"Consulte a Barra Inferior",FR:"Barre inférieure",DE:"Kontrollleiste prüfen"},tut_step5_text:{LATAM:"La barra inferior fija te guiará mostrando la ruta de navegación, el número simulado de página de script, y el descargo legal constante.",USD:"The bottom bar guides you. It displays the current page address feed, the page index, and the constant disclaimer.",PT:"La barra inferior fixa mostra as rotas, o índice virtual de página e as notas legais em tempo real."},menu_mutantes_desc:{LATAM:"Permite buscar mutantes, reemplazarlos por nombre o código y consultar categorías especiales.",USD:"Allows you to search for mutants, replace them by name/code, and explore special categories.",PT:"Permite pesquisar mutantes e preparar as substituições de hibridadora.",FR:"Permet de rechercher des mutants et préparer les remplacements en incubateur.",DE:"Ermöglicht das Suchen von Mutanten und Vorbereiten von Zuchtkammer-Codes."},menu_reactor_desc:{LATAM:"Agrupa las herramientas relacionadas con la preparación, modificación y uso del reactor.",USD:"Groups tools related to preparing, adjusting, and running reactor elements.",PT:"Gerencia as rotinas vinculadas à preparação e ajustes gerais do reator.",FR:"Options de diagnostic et préparation du réacteur.",DE:"Enthält Optionen zur Anpassung und Vorbereitung des Reaktors."},menu_cajas_desc:{LATAM:"Incluye cajas especiales, paquetes generales y opciones adicionales de la tienda.",USD:"Includes special boxes, general packs, and extra store options.",PT:"Gerencia as caixas misteriosas, pacotes promocionais e itens da loja.",FR:"Regroupe les boîtes mystères, packs généraux et offres de boutique.",DE:"Bündelt Überraschungskisten, Aktionspakete und Shop-Angebote."},menu_recursos_desc:{LATAM:"Reune recursos, fichas, mejoras y elementos especiales.",USD:"Brings together resources, tokens, upgrades, and specific items.",PT:"Reúne recursos virtuais, fichas e melhorias da interface.",FR:"Regroupe les ressources de base, jetons et mises à niveau.",DE:"Enthält Spielressourcen, Token und Interface-Erweiterungen."},menu_orbes_desc:{LATAM:"Permite conocer las opciones relacionadas con orbes básicos, avanzados y paquetes.",USD:"Lists paths related to high-powered standard, advanced, or packaged orbs.",PT:"Cobre orbes de status, combos avançados e conjuntos de orbes de nível 7.",FR:"Couvre les orbes standard, optimisations avancées et ensembles de classe 7.",DE:"Deckt Standard-Orben, fortgeschrittene Boosts und Stufe-7-Pakete ab."},menu_otros_desc:{LATAM:"Contiene herramientas adicionales que no pertenecen a las categorías principales.",USD:"Contains additional utility options that do not belong to the primary categories.",PT:"Outros ajustes alternativos e rotinas de suporte.",FR:"Autres outils pratiques et options de support secondaires.",DE:"Zusätzliche Einstellungen und verschiedene Support-Routinen."},menu_acerca_desc:{LATAM:"Muestra información del proyecto y recomendaciones de uso.",USD:"Provides overall project context, about details, and best practices.",PT:"Informa sobre o contexto educativo do simulador e conselhos de segurança.",FR:"Informations concernant ce simulateur éducatif et conseils de sécurité.",DE:"Informationen zu diesem Simulator und wichtige Sicherheitshinweise."},menu_salir_label:{LATAM:"[X] Salir de la Consola",USD:"[X] Exit Console",PT:"[X] Sair do Console",FR:"[X] Quitter la console",DE:"[X] Konsole verlassen"},menu_salir_desc:{LATAM:"Cierra la sesión y regresa a la pantalla de bienvenida.",USD:"Closes your active session and goes back to the initial greeting screen.",PT:"Encerra a sessão ativa e retorna ao menu de login.",FR:"Ferme la session active et retourne à l'écran d'accueil.",DE:"Beendet die aktuelle Sitzung und kehrt zum Hauptbildschirm zurück."},sec_mutantes_header:{LATAM:"SECCIÓN: MUTANTES",USD:"SECTION: MUTANTS",PT:"SEÇÃO: MUTANTES",FR:"SECTION : MUTANTS",DE:"BEREIBH: MUTANTEN"},sec_mutantes_desc:{LATAM:"Elige esta sección para localizar mutantes por nombre/código, revisar sus códigos o conocer las categorías disponibles.",USD:"Select this section to find mutants by name/code, review their keys, or explore custom spec categories.",PT:"Utilize esta seção para pesquisar mutantes, verificar códigos ou consultar categorias especiais.",FR:"Utilisez cette section pour rechercher des mutants ou configurer des remplacements temporaires.",DE:"Suchen Sie in diesem Bereich nach Mutanten, prüfen Sie Codes oder erforschen Sie Kategorien."},sec_reemplazar_header:{LATAM:"MUTANTES > REEMPLAZAR MUTANTES EN HIBRIDADORA",USD:"MUTANTS > REPLACE SPECIMENS IN BREEDING CHAMBER",PT:"MUTANTES > SUBSTITUIR NA CÂMARA DE HIBRIDAÇÃO",FR:"MUTANTS > REMPLACER LES SPECIMENS EN INCUBATEUR",DE:"MUTANTEN > ERSETZEN IN DER ZUCHTKAMMER"},sec_reactor_header:{LATAM:"SECCIÓN: REACTOR",USD:"SECTION: REACTOR",PT:"SEÇÃO: REACTOR",FR:"SECTION : RÉACTEUR",DE:"BEREICH: REAKTOR"},sec_reactor_desc:{LATAM:"Esta sección incluye las opciones de preparación y manipulación de lomos del reactor.",USD:"This section contains options to manipulate reactor segments.",PT:"Esta seção abrange opções para configurar os segmentos do reator.",FR:"Cette section regroupe les options de configuration du réacteur.",DE:"Dieser Bereich umfasst die Optionen zur Anpassung des Reaktors."},sec_cajas_header:{LATAM:"SECCIÓN: CAJAS Y PAQUETES",USD:"SECTION: BOXES & PACKS",PT:"SEÇÃO: CAIXAS E PACOTES",FR:"SECTION : BOÎTES ET PACKS",DE:"BEREICH: KISTEN & PAKETE"},sec_cajas_desc:{LATAM:"Aquí dispones de comandos para desbloquear familias de cajas y inyectar lotes promocionales.",USD:"This is where you activate commands to force box unlock parameters or simulate premium packs.",PT:"Aqui você tem comandos para simular caixas especiais de forma instantânea.",FR:"Activez ici des options pour simuler le déverrouillage de boîtes ou de packs.",DE:"Nutzen Sie Befehle zur Bereitstellung spezieller Kisten und Aktionspakete."},sec_recursos_header:{LATAM:"SECCIÓN: RECURSOS, FICHAS Y MEJORAS",USD:"SECTION: RESOURCES, TOKENS & UPGRADES",PT:"SEÇÃO: RECURSOS, FICHAS E MELHORIAS",FR:"SECTION : RESSOURCES, JETONS ET AMÉLIORATIONS",DE:"BEREICH: RESSOURCEN, MARKEN & UPGRADES"},sec_recursos_desc:{LATAM:"Aquí encontrarás lotes simulados para probar la inyección de campañas de recursos o ítems de la interfaz.",USD:"Review procedures to alter basic resource currencies, credits, or interface elements.",PT:"Aqui estão opções para carregar campanhas de recursos e itens da interface secundária.",FR:"Retrouvez ici les commandes pour tester l'ajustement de vos ressources virtuelles.",DE:"Untersuchen Sie Abläufe zur Erstellung von Ressourcen oder Benutzeroberflächen-Elementen."},sec_orbes_header:{LATAM:"SECCIÓN: ORBES",USD:"SECTION: ORBS",PT:"SEÇÃO: ORBES",FR:"SECTION : ORBES",DE:"BEREICH: ORBEN"},sec_orbes_desc:{LATAM:"Permite simular el equipamiento de orbes básicos de alta potencia y lotes de clase 7.",USD:"Simulate provisioning high-performance basic status gems and level 7 orb parameters.",PT:"Gerencie comandos para incluir orbes de alta classe no inventário.",FR:"Intégrez ici des orbes de statut à haute efficacité et de classe 7.",DE:"Laden Sie hochrangige Standard-Orben und Stufe-7-Pakete."},sec_otros_header:{LATAM:"SECCIÓN: OTROS",USD:"SECTION: OTHER",PT:"SEÇÃO: OUTROS",FR:"SECTION : AUTRES",DE:"BEREICH: SONSTIGES"},sec_otros_desc:{LATAM:"Esta sección contiene herramientas y configuraciones adicionales misceláneas. Antes de utilizar un comando, revisa con cuidado su explicación.",USD:"This section aggregates support diagnostics and auxiliary settings. Review guides thoroughly before simulating.",PT:"Ferramentas de suporte e diagnósticos auxiliares. Examine as recomendações antes de testar.",FR:"Options de diagnostic et réglages additionnels. Référez-vous aux guides avant de lancer.",DE:"Hier finden Sie Diagnosen und Zusatzfunktionen. Prüfen Sie die Hinweise vor der Simulation."},sec_acerca_header:{LATAM:"INFORMACIÓN DE LA CONSOLA",USD:"CONSOLE INFORMATION",PT:"INFORMAÇÃO DO CONSOLE",FR:"INFORMATIONS DE LA CONSOLE",DE:"KONSOLEN-INFORMATIONEN"}};function Dx({isEmbedded:a=!1,onClose:s}){const{region:l}=St(),r=V=>{var be,fe;return((be=Of[V])==null?void 0:be[l])||((fe=Of[V])==null?void 0:fe.LATAM)||V},[d,p]=O.useState([{screen:"welcome",title:"Bienvenida",breadcrumbs:"Inicio > Bienvenida",pageNum:1}]),g=d[d.length-1],[h,f]=O.useState(!0),[b,x]=O.useState(!1),[k,G]=O.useState(0),[y,M]=O.useState(""),[j,I]=O.useState(""),[H,X]=O.useState(!1),[L,D]=O.useState([]),[Q,Y]=O.useState(0),[q,K]=O.useState([]),[F,Z]=O.useState(""),[oe,de]=O.useState(""),[Ue,Oe]=O.useState(""),[Me,C]=O.useState(0),[J,$]=O.useState("TODOS"),re=20,[xe,A]=O.useState(""),[B,W]=O.useState(""),[te,ce]=O.useState(""),[he,Ae]=O.useState(""),[it,Be]=O.useState(!1),[da,Cn]=O.useState([]),[Vs,Ds]=O.useState(0),[un,Ra]=O.useState(!1),[qs,Qr]=O.useState("");O.useEffect(()=>{Vx();const V=[],be=new Set;l5.forEach(fe=>{const ge=fe.code.trim().toUpperCase();be.has(ge)||(V.push({name:fe.name,code:ge,imageUrl:fe.imageUrl||""}),be.add(ge))}),Xo.forEach(fe=>{const ge=fe.codigo.trim().toUpperCase();!be.has(ge)&&ge&&(V.push({name:fe.nombre,code:ge,imageUrl:fe.imagen||`https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_${fe.codigo.toLowerCase()}.png`}),be.add(ge))}),V.sort((fe,ge)=>fe.name.localeCompare(ge.name)),K(V)},[]);const Fe=()=>{d.length>1&&p(V=>V.slice(0,-1))},He=(V,be,fe,ge)=>{p(kt=>[...kt,{screen:V,title:be,breadcrumbs:fe,pageNum:ge}]),window.scrollTo({top:0,behavior:"smooth"})},Oa=(V,be,fe,ge)=>{p([{screen:V,title:be,breadcrumbs:fe,pageNum:ge}]),window.scrollTo({top:0,behavior:"smooth"})},Rs=()=>{if(!y.trim()){I(r("empty_pass_error"));return}I(""),X(!0),Y(0),D([]);const V=[r("pw_log0"),r("pw_log1"),r("pw_log2"),r("pw_log3"),r("pw_log4"),r("pw_log5")];D([V[0]]);let be=0;const fe=setInterval(()=>{be++,be<V.length?(D(ge=>[...ge,V[be]]),Y(be)):(clearInterval(fe),setTimeout(()=>{X(!1),M(""),He("main","Menú Principal","Inicio > Menú Principal",3)},600))},500)},Jr=(V,be)=>{Be(!0),Ds(0),Cn([]),Qr(V);const fe=[r("sim_log0"),r("sim_log1"),r("sim_log2"),r("sim_log3"),r("sim_log4"),r("sim_log5"),r("sim_log6")];Cn([fe[0]]);let ge=0;const kt=setInterval(()=>{ge++,ge<fe.length?(Cn(rt=>[...rt,fe[ge]]),Ds(ge)):(clearInterval(kt),setTimeout(()=>{Be(!1),Ra(!0)},550))},450)},je=(V,be,fe,ge,kt,rt)=>{A(V),W(be),ce(fe),Ae(ge),He("detail_view",V,kt,rt)},ht=q.filter(V=>F.trim()!==""&&(V.name.toLowerCase().includes(F.toLowerCase())||V.code.toLowerCase().includes(F.toLowerCase()))).slice(0,5),dn=q.find(V=>oe.trim().toUpperCase()===V.code.toUpperCase()),Wo="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),Os=q.filter(V=>{const be=V.name.toLowerCase().includes(Ue.toLowerCase())||V.code.toLowerCase().includes(Ue.toLowerCase()),fe=J==="TODOS"||V.name.trim().toUpperCase().startsWith(J);return be&&fe}),pn=Os.slice(Me*re,(Me+1)*re),Hs=Math.ceil(Os.length/re),pa=[{title:"Elige una Categoría del Menú",text:'El menú principal simula la consola real. Puedes hacer clic en "Mutantes", "Reactor", o cualquiera para abrir las herramientas.',highlight:"categories"},{title:"Lee la Explicación del Modo Guía",text:'Cuando el "MODO GUÍA" está ACTIVADO, se muestra una explicación debajo de cada opción para enseñarte qué hace en el juego real.',highlight:"guide-toggle"},{title:"Simula una Ejecución",text:'Dentro de las opciones, puedes hacer clic en "Simular ejecución" para observar cómo se parchea y manipula la memoria en tiempo real de forma segura.',highlight:"simular"},{title:"Usa el Botón Volver",text:'Puedes pulsar el botón "[<] Volver" en la barra inferior para regresar paso a paso a la pantalla anterior cómodamente.',highlight:"volver-btn"},{title:"Consulta la Barra de Control Inferior",text:"La barra inferior fija te guiará mostrando la ruta de navegación, el número simulado de página de script, y el descargo legal constante.",highlight:"footer"}];return i.jsxs("div",{className:`flex flex-col gap-6 ${a?"pb-6 pt-2":"pb-20"} text-slate-300 font-sans select-none`,children:[!a&&i.jsxs("section",{className:"relative hero !p-8 md:!p-16 overflow-hidden rounded-[2.5rem]",children:[i.jsx("div",{className:"absolute inset-0 opacity-10 bg-grid-slate-900/[0.1] pointer-events-none"}),i.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-gradient-to-br from-green-500/10 to-transparent -rotate-12 transform translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"}),i.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[i.jsxs("div",{className:"text-left",children:[i.jsxs("div",{className:"eyebrow bg-green-500/10 border border-green-500/20 px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4 backdrop-blur-md",children:[i.jsx(ob,{size:14,className:"text-green-brand"}),i.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400",children:r("eyebrow_demostracion")})]}),i.jsxs("h1",{className:"text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white mr-2",children:["NEXUS EDGE ",i.jsx("span",{className:"text-emerald-400",children:"INTERFACE"})]}),i.jsx("p",{className:"text-slate-400 text-xs md:text-sm max-w-2xl mt-2 leading-relaxed",children:r("guide_subtitle")})]}),i.jsxs("div",{className:"bg-[#050a14]/60 border border-white/5 rounded-2xl p-3 flex flex-col gap-1 items-left md:items-end shrink-0 backdrop-blur-md text-xs font-semibold",children:[i.jsx("span",{className:"text-slate-400 font-black uppercase",children:"ADMINISTRADOR:"}),i.jsx("span",{className:"text-emerald-400 font-black tracking-wider uppercase text-sm",children:"Smith Luque"})]})]})]}),i.jsxs("div",{className:"bg-slate-950/40 border border-white/5 p-4.5 rounded-3xl flex items-start gap-3.5 text-xs leading-relaxed text-slate-300 text-left",children:[i.jsx(wr,{size:18,className:"text-blue-400 shrink-0 mt-0.5"}),i.jsx("p",{className:"m-0 font-bold font-semibold",children:r("explorer_title")})]}),i.jsxs("section",{className:"bg-slate-950 border border-white/5 rounded-3xl p-4 md:p-6 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4",children:[i.jsxs("div",{id:"guide-toggle-highlight",className:"flex items-center gap-4 bg-slate-900/60 p-3 rounded-2xl border border-white/5 text-left",children:[i.jsxs("div",{className:"flex flex-col",children:[i.jsx("span",{className:"text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1",children:r("switch_label")}),i.jsx("strong",{className:`text-xs uppercase font-extrabold tracking-wider ${h?"text-emerald-400":"text-slate-400"}`,children:r(h?"guide_mode_active":"guide_mode_inactive")})]}),i.jsx("button",{type:"button",onClick:()=>f(!h),className:`w-14 h-7 p-1 rounded-full transition-colors relative duration-300 shrink-0 cursor-pointer ${h?"bg-emerald-500":"bg-slate-700"}`,children:i.jsx("div",{className:`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${h?"translate-x-7":"translate-x-0"}`})})]}),i.jsx("div",{className:"flex items-center gap-2",children:i.jsxs("button",{type:"button",onClick:()=>{x(!0),G(0)},className:"flex-1 sm:flex-none btn bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-black uppercase text-xs px-5 py-3 rounded-2xl flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95",children:[i.jsx(xu,{size:16}),i.jsx("span",{children:r("tutorial_btn")})]})})]}),i.jsxs("div",{className:"grid lg:grid-cols-[1fr_320px] gap-6 items-start",children:[i.jsxs("div",{className:"bg-[#0c1322] border-2 border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl relative",children:[i.jsxs("div",{className:"bg-slate-900 border-b border-slate-800 px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between gap-2",children:[i.jsxs("div",{className:"flex items-center gap-2.5 min-w-0",children:[d.length>1&&i.jsx("button",{type:"button",onClick:Fe,className:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-755 text-white border border-white/5 cursor-pointer active:scale-95 shrink-0 flex items-center justify-center transition-all mr-1",title:"Volver",children:i.jsx(eb,{size:13,className:"text-emerald-400"})}),i.jsx("div",{className:"w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-red-500 animate-pulse border border-red-400/35 shrink-0"}),i.jsxs("div",{className:"flex flex-col text-left min-w-0",children:[i.jsx("span",{className:"text-[9px] sm:text-[10px] font-black text-[#a6b1c2] tracking-wider leading-none uppercase truncate",children:"NEXUS_MGG_SCRIPT.lua"}),i.jsxs("span",{className:"text-[8px] text-emerald-400 font-bold uppercase tracking-widest mt-0.5 truncate block",children:["SIMULACIÓN: ",g.title]})]})]}),i.jsx("div",{className:"flex items-center gap-1.5 text-[9px] uppercase font-black text-[#566885] shrink-0",children:i.jsx("span",{className:"bg-slate-950 px-2 sm:px-2.5 py-1 rounded-md border border-white/5 text-slate-400 text-[8px] sm:text-[9px]",children:"GG v101.4"})})]}),i.jsxs("div",{className:"p-4 sm:p-6 md:p-8 min-h-[400px] sm:min-h-[420px] relative bg-gradient-to-b from-[#0c1322] to-[#070b14]",children:[g.screen==="welcome"&&i.jsxs("div",{className:"flex flex-col items-center text-center py-6 max-w-xl mx-auto",children:[i.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white mb-6 border border-white/20 shadow-lg",children:i.jsx(ob,{size:32})}),i.jsx("h3",{className:"text-white text-2xl font-black uppercase tracking-tight m-0",children:"NEXUS EDGE INTERFACE"}),i.jsx("span",{className:"text-emerald-400 text-xs font-black tracking-widest uppercase mt-1 mb-4 block",children:r("welcome_edition")}),i.jsxs("div",{className:"w-full bg-[#050a14]/60 border border-white/5 rounded-2xl p-5 mb-6 text-left flex flex-col gap-3",children:[i.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-500 font-bold border-b border-white/5 pb-2",children:[i.jsx("span",{children:r("developed_by")}),i.jsx("span",{className:"text-emerald-400",children:r("free_label")})]}),i.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed m-0 font-bold font-semibold",children:["[!] ",i.jsx("span",{className:"text-red-400 uppercase",children:r("free_warning_title")}),r("free_warning_text")]}),i.jsx("p",{className:"text-xs text-slate-400 leading-relaxed m-0 font-medium",children:r("welcome_description")})]}),i.jsxs("div",{className:"w-full grid gap-3",children:[i.jsx("button",{type:"button",onClick:()=>He("password","Control de Acceso","Inicio > Acceso de Seguridad",2),className:"w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black uppercase text-xs py-4.5 px-6 rounded-2xl flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98 shadow-lg shadow-emerald-500/10",children:i.jsx("span",{children:r("run_interactive")})}),i.jsxs("div",{className:"grid sm:grid-cols-2 gap-3",children:[i.jsxs("button",{type:"button",onClick:()=>{x(!0),G(0)},className:"bg-slate-900 border border-white/10 hover:bg-slate-800 text-white font-black uppercase text-xs py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95",children:[i.jsx(xu,{size:14}),i.jsx("span",{children:r("view_quick_tutorial")})]}),i.jsxs("button",{type:"button",onClick:()=>{window.location.hash="/"},className:"bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-red-400 font-black uppercase text-xs py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95",children:[i.jsx(eb,{size:14,className:"text-red-400"}),i.jsx("span",{children:r("menu_salir_label")})]})]})]})]}),g.screen==="password"&&i.jsxs("div",{className:"flex flex-col items-center py-6 max-w-md mx-auto",children:[i.jsx("div",{className:"w-14 h-14 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 mb-5",children:i.jsx(ek,{size:24})}),i.jsx("h3",{className:"text-white text-xl font-bold uppercase tracking-tight m-0 text-center",children:r("control_access")}),i.jsxs("p",{className:"text-xs text-slate-400 text-center leading-relaxed mt-2.5 mb-6",children:[r("enter_password_desc"),i.jsx("span",{className:"block mt-2 font-mono text-emerald-400 font-bold bg-emerald-950/40 p-2 border border-emerald-900/30 rounded-lg",children:r("suggested_pass_label")})]}),H?i.jsxs("div",{className:"w-full bg-[#050a14] border border-white/5 p-5 rounded-2xl flex flex-col gap-2.5 max-h-[220px] overflow-y-auto font-mono text-[11px] text-emerald-400 select-text",children:[L.map((V,be)=>i.jsxs("div",{className:"flex gap-2",children:[i.jsxs("span",{className:"text-slate-500",children:["[",be+1,"]"]}),i.jsx("span",{className:V.includes("con éxito")||V.includes("autorizado")||V.includes("SUCCESS")||V.includes("authorized")?"text-emerald-300 font-bold":"",children:V})]},be)),Q<5&&i.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[i.jsx("div",{className:"w-3 h-3 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin shrink-0"}),i.jsx("span",{className:"text-slate-500 italic",children:r("establishing_sync")||"Estableciendo sincronización..."})]})]}):i.jsxs("div",{className:"w-full flex flex-col gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2",children:r("enter_password_title")}),i.jsx("input",{type:"text",value:y,onChange:V=>{M(V.target.value),I("")},placeholder:r("pass_input_placeholder"),className:"w-full bg-[#050a14] border border-white/10 rounded-xl px-4 py-3 text-slate-200 outline-none focus:border-emerald-500/50 font-mono text-sm tracking-widest placeholder:text-slate-600 uppercase"}),j&&i.jsx("p",{className:"text-red-400 text-xs mt-1.5 font-bold",children:j})]}),i.jsxs("button",{type:"button",onClick:Rs,className:"w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black uppercase text-xs py-4 px-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95",children:[i.jsx(sb,{size:14,className:"fill-slate-950"}),i.jsx("span",{children:r("btn_submit_pass")})]})]})]}),g.screen==="main"&&i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsxs("div",{className:"border-b border-white/5 pb-2 flex justify-between items-center text-xs uppercase font-extrabold tracking-tight",children:[i.jsx("span",{className:"text-slate-400",children:"MENÚ DE OPCIONES GENERALES"}),i.jsx("span",{className:"text-emerald-400 font-black",children:"SMITH-NEXUS"})]}),i.jsxs("div",{className:"grid gap-2.5",children:[[{id:"1",key:"mutantes",label:"Mutantes",desc:"Permite buscar mutantes, reemplazarlos por nombre o código y consultar categorías especiales."},{id:"2",key:"reactor",label:"Reactor",desc:"Agrupa las herramientas relacionadas con la preparación, modificación y uso del reactor."},{id:"3",key:"cajas",label:"Cajas y Paquetes",desc:"Incluye cajas especiales, paquetes generales y opciones adicionales de la tienda."},{id:"4",key:"recursos",label:"Recursos, Fichas y Mejoras",desc:"Reune recursos, fichas, mejoras y elementos especiales."},{id:"5",key:"orbes",label:"Orbes",desc:"Permite conocer las opciones relacionadas con orbes básicos, avanzados y paquetes."},{id:"6",key:"otros",label:"Otros",desc:"Contiene herramientas adicionales que no pertenecen a las categorías principales."},{id:"7",key:"acerca",label:"Acerca de",desc:"Muestra información del proyecto y recomendaciones de uso."}].map(V=>i.jsxs("button",{type:"button",onClick:()=>{V.key==="mutantes"?He("mutantes","Mutantes","Inicio > Menú Principal > Mutantes",4):V.key==="reactor"?He("reactor","Reactor","Inicio > Menú Principal > Reactor",11):V.key==="cajas"?He("cajas","Cajas y Paquetes","Inicio > Menú Principal > Cajas y Paquetes",12):V.key==="recursos"?He("recursos","Recursos, Fichas y Mejoras","Inicio > Menú Principal > Recursos, Fichas y Mejoras",13):V.key==="orbes"?He("orbes","Orbes","Inicio > Menú Principal > Orbes",14):V.key==="otros"?He("otros","Otros Menu","Inicio > Menú Principal > Otros",15):V.key==="acerca"&&He("acerca","Acerca De","Inicio > Menú Principal > Acerca De",16)},className:"w-full text-left bg-slate-900/[0.4] hover:bg-slate-900/90 border border-white/5 hover:border-emerald-500/35 px-4.5 py-3.5 rounded-2xl flex flex-col gap-1 transition-all group scale-100 active:scale-99 cursor-pointer",children:[i.jsxs("div",{className:"flex items-center gap-2.5 justify-between",children:[i.jsxs("span",{className:"font-mono text-emerald-400 font-black",children:["[",V.id,"] ",V.label]}),i.jsx(fu,{size:14,className:"text-slate-600 group-hover:text-emerald-400 transition-colors"})]}),h&&i.jsx("p",{className:"text-[11px] text-[#8e9bb2] m-0 font-medium leading-relaxed max-w-xl pl-5 mt-0.5",children:V.desc})]},V.id)),i.jsxs("button",{type:"button",onClick:()=>Oa("welcome","Bienvenida","Inicio > Bienvenida",1),className:"w-full text-left bg-red-500/5 hover:bg-red-500/10 border border-red-500/10 hover:border-red-500/20 px-4.5 py-3.5 rounded-2xl flex flex-col gap-1 transition-all group scale-100 active:scale-99 cursor-pointer",children:[i.jsxs("div",{className:"flex items-center gap-2.5 justify-between",children:[i.jsx("span",{className:"font-mono text-red-400 font-extrabold",children:"[X] Salir de la Consola"}),i.jsx(fu,{size:14,className:"text-slate-600 group-hover:text-red-400 transition-colors"})]}),h&&i.jsx("p",{className:"text-[11px] text-red-300/60 m-0 font-medium leading-relaxed max-w-xl pl-5 mt-0.5",children:"Cierra la sesión y regresa a la pantalla de bienvenida."})]})]})]}),g.screen==="mutantes"&&i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsxs("div",{className:"border-b border-white/5 pb-2",children:[i.jsx("span",{className:"text-slate-400 text-xs font-black uppercase tracking-tight",children:"SECCIÓN: MUTANTES"}),i.jsx("p",{className:"text-[11px] text-emerald-400 font-semibold m-0 leading-normal",children:"Elige esta sección para localizar mutantes por nombre/código, revisar sus códigos o conocer las categorías disponibles."})]}),i.jsxs("div",{className:"grid gap-2.5",children:[i.jsxs("button",{type:"button",onClick:()=>He("reemplazar","Reemplazar Mutantes Menu","Inicio > Menú Principal > Mutantes > Reemplazar",5),className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 hover:border-emerald-500/35 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:[i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[1] Reemplazar Mutantes en Hibridadora"}),h&&i.jsx("p",{className:"text-[11px] text-slate-400 max-w-xl pl-5 leading-relaxed",children:"Permite buscar mutantes de forma automatizada y preparar los reemplazos de código LUA."})]}),i.jsxs("button",{type:"button",onClick:()=>He("tienda_mutantes","Tienda de Mutantes","Inicio > Menú Principal > Mutantes > Tienda",9),className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 hover:border-emerald-500/35 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:[i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[2] Tienda de Mutantes"}),h&&i.jsx("p",{className:"text-[11px] text-slate-400 max-w-xl pl-5 leading-relaxed",children:"Agrupa las funciones para simular e inyectar paquetes de mutantes de la tienda."})]}),i.jsxs("button",{type:"button",onClick:()=>He("mutantes_especiales","Mutantes Especiales","Inicio > Menú Principal > Mutantes > Especiales",10),className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 hover:border-emerald-500/35 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:[i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[3] Mutantes Especiales"}),h&&i.jsx("p",{className:"text-[11px] text-slate-400 max-w-xl pl-5 leading-relaxed",children:"Cubre las colecciones exclusivas, mensuales de 2024-2025, neo-monogenes y skins híbridas."})]}),i.jsx("button",{type:"button",onClick:Fe,className:"w-full text-left bg-white/2 hover:bg-white/5 border border-white/5 px-4.5 py-3 rounded-2xl transition-all flex flex-col cursor-pointer",children:i.jsx("span",{className:"font-mono text-slate-400 font-bold",children:"[<] Volver al Menú Principal"})})]})]}),g.screen==="reemplazar"&&i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsx("div",{className:"border-b border-white/5 pb-2",children:i.jsx("span",{className:"text-slate-400 text-xs font-black uppercase tracking-tight",children:"MUTANTES > REEMPLAZAR MUTANTES EN HIBRIDADORA"})}),i.jsxs("div",{className:"grid gap-2.5",children:[i.jsxs("button",{type:"button",onClick:()=>He("buscar_nombre","Buscar por Nombre","Inicio > Menú Principal > Mutantes > Reemplazar > Buscar por Nombre",6),className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:[i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[1] Reemplazar - Buscar por Nombre"}),h&&i.jsx("p",{className:"text-[11px] text-slate-400 max-w-xl pl-5 leading-relaxed",children:"Escribe el nombre del mutante para localizarlo al instante de forma simulada."})]}),i.jsxs("button",{type:"button",onClick:()=>He("buscar_codigo","Buscar por Código","Inicio > Menú Principal > Mutantes > Reemplazar > Buscar por Código",7),className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:[i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[2] Reemplazar - Buscar por Código"}),h&&i.jsx("p",{className:"text-[11px] text-slate-400 max-w-xl pl-5 leading-relaxed",children:"Ingresa directamente códigos de especímenes como AA_01 para saltar búsquedas."})]}),i.jsxs("button",{type:"button",onClick:()=>He("lista_mutantes","Lista de Mutantes","Inicio > Menú Principal > Mutantes > Reemplazar > Lista Completa",8),className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:[i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[3] Lista de Mutantes"}),h&&i.jsx("p",{className:"text-[11px] text-slate-400 max-w-xl pl-5 leading-relaxed",children:"Explora la base de datos de mutantes completa con un buscador al estilo tabla excel."})]}),i.jsx("button",{type:"button",onClick:Fe,className:"w-full text-left bg-white/2 hover:bg-white/5 border border-white/5 px-4.5 py-3 rounded-2xl transition-all flex flex-col cursor-pointer",children:i.jsx("span",{className:"font-mono text-slate-400 font-bold",children:"[<] Volver"})})]})]}),g.screen==="buscar_nombre"&&i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsx("div",{className:"border-b border-white/5 pb-2",children:i.jsx("span",{className:"text-slate-400 text-xs font-black uppercase tracking-tight",children:"REEMPLAZAR > BUSCAR POR NOMBRE"})}),i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsxs("div",{className:"relative",children:[i.jsx("span",{className:"text-slate-400 text-xs font-bold block mb-2",children:"Ingresar nombre del mutante"}),i.jsxs("div",{className:"flex items-center bg-[#070b14] border border-white/10 rounded-xl px-3.5 py-1.5 focus-within:border-emerald-500/50",children:[i.jsx(Uo,{size:16,className:"text-slate-500 mr-2 shrink-0"}),i.jsx("input",{type:"text",value:F,onChange:V=>Z(V.target.value),placeholder:"Ej. Androide, Robot...",className:"w-full bg-transparent text-white outline-none py-1.5 text-xs select-text font-bold"})]}),i.jsx("span",{className:"text-[9px] text-slate-500 mt-1 block",children:'La lista se inicializa al escribir letras. Intenta con "Androide" o "Búho" !'})]}),i.jsx("div",{className:"grid gap-2 mt-2",children:F.trim()===""?i.jsx("div",{className:"p-4 rounded-xl border border-dashed border-white/5 text-center text-[11px] text-slate-500",children:"Escribe en el campo de texto superior para activar el buscador."}):ht.length===0?i.jsxs("div",{className:"p-4 rounded-xl border border-dashed border-white/5 text-center text-[11px] text-red-400 font-bold",children:['No se encontraron coincidencias simuladas para: "',F,'".']}):ht.map((V,be)=>i.jsxs("div",{className:"p-3 bg-[#050a14] border border-white/5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left",children:[i.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[i.jsx("div",{className:"w-11 h-11 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center text-[9px] text-slate-500 text-center shrink-0 overflow-hidden font-bold",children:V.imageUrl?i.jsx("img",{src:V.imageUrl,alt:"",className:"w-full h-full object-cover",onError:fe=>{fe.target.style.display="none"}}):"Sin Foto"}),i.jsxs("div",{className:"truncate text-left min-w-0 flex-1",children:[i.jsx("strong",{className:"block text-white text-xs leading-none truncate font-bold",children:V.name}),i.jsxs("code",{className:"text-[10px] text-emerald-400 font-mono mt-1.5 block font-black uppercase",children:["Código: ",V.code]})]})]}),i.jsx("div",{className:"flex gap-2 w-full sm:w-auto shrink-0 justify-end",children:i.jsx("button",{type:"button",onClick:()=>{je(`Reemplazo de Mutante: ${V.name}`,`Seleccionarás en Game Guardian el mutante que coincida con el specimen "${V.code}" para activar la inyección en tu hibridadora.`,"Hibridadora activa del juego.","Sigue los pasos y asegúrate de elegir el mutante seleccionado en la lista del script para no corromper la cola.",`Inicio > Menú Principal > Mutantes > Reemplazo > Detalle (${V.name})`,8)},className:"w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-[10px] uppercase cursor-pointer transition-all active:scale-95 text-center",children:"Seleccionar [>]"})})]},be))}),i.jsx("button",{type:"button",onClick:()=>{je("Ejemplo de reemplazo","En el script real, esta opción localizará el mutante por su código y preparará el reemplazo.","Hibridadora del juego.","Asegúrate de tener un espacio de incubación libre.","Inicio > Menú Principal > Mutantes > Reemplazar > Ejemplo",6)},className:"w-full bg-[#10b981]/15 hover:bg-[#10b981]/25 text-emerald-400 border border-emerald-500/20 font-black uppercase text-[11px] py-3.5 rounded-xl cursor-pointer transition-all",children:"[>] Ver ejemplo de reemplazo"}),i.jsx("button",{type:"button",onClick:Fe,className:"w-full text-left bg-white/2 hover:bg-white/5 border border-white/5 px-4.5 py-3 rounded-2xl transition-all flex flex-col cursor-pointer",children:i.jsx("span",{className:"font-mono text-slate-400 font-bold",children:"[<] Volver"})})]})]}),g.screen==="buscar_codigo"&&i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsx("div",{className:"border-b border-white/5 pb-2",children:i.jsx("span",{className:"text-slate-400 text-xs font-black uppercase tracking-tight",children:"REEMPLAZAR > BUSCAR POR CÓDIGO"})}),i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsxs("div",{children:[i.jsx("span",{className:"text-slate-400 text-xs font-bold block mb-2",children:"Ingresar código interno del mutante"}),i.jsx("div",{className:"flex items-center bg-[#070b14] border border-white/10 rounded-xl px-3.5 py-1.5 focus-within:border-emerald-500/50",children:i.jsx("input",{type:"text",value:oe,onChange:V=>de(V.target.value),placeholder:"Ej: AA_01, A_01, D_05...",className:"w-full bg-transparent text-white outline-none py-1.5 text-xs font-mono font-black select-text uppercase placeholder:font-sans"})}),i.jsxs("span",{className:"text-[10px] text-slate-500 mt-2 block leading-relaxed",children:["[!] ",i.jsx("span",{className:"text-yellow-brand uppercase",children:"Regla de formato:"})," Escribe los códigos respetando letras, números y guiones bajos para que el análisis de memoria coincida con el juego."]})]}),oe.trim()!==""&&i.jsx("div",{className:"p-4 bg-[#050a14] border border-white/5 rounded-2xl",children:dn?i.jsxs("div",{className:"flex flex-col gap-3",children:[i.jsxs("div",{className:"flex justify-between items-center border-b border-white/5 pb-2",children:[i.jsx("span",{className:"text-[10px] text-emerald-400 font-bold uppercase tracking-wider",children:"Muestra Encontrada"}),i.jsx("span",{className:"text-[9px] bg-emerald-500 text-slate-900 font-black px-1.5 py-0.5 rounded font-mono uppercase",children:"Válido"})]}),i.jsxs("div",{className:"flex gap-3.5 items-center",children:[i.jsx("div",{className:"w-12 h-12 bg-slate-900 rounded-xl border border-white/5 flex items-center justify-center shrink-0 text-slate-600 font-bold text-xs overflow-hidden",children:dn.imageUrl?i.jsx("img",{src:dn.imageUrl,alt:"",className:"w-full h-full object-cover",onError:V=>{V.target.style.display="none"}}):"Sin Imagen"}),i.jsxs("div",{className:"text-left",children:[i.jsx("strong",{className:"block text-white text-sm font-semibold",children:dn.name}),i.jsxs("span",{className:"text-slate-400 font-mono text-[11px] font-black uppercase mt-1 block",children:["Código interno: ",dn.code]})]})]}),i.jsx("button",{type:"button",onClick:()=>{je(`Inyección Código: ${dn.name}`,`Preparará e inyectará el código del mutante "${dn.code}" directamente en la hibridadora activa.`,"Hibridadora del juego.","Comprueba la hibridadora luego de finalizar.","Inicio > Menú Principal > Mutantes > Reemplazo > Código Detalle",8)},className:"w-full mt-1 bg-emerald-500 hover:bg-emerald-600 text-[#050a14] font-black uppercase text-[11px] py-3 rounded-xl transition-all cursor-pointer",children:"[>] Seleccionar para Reemplazo"})]}):i.jsxs("div",{className:"text-center text-[11px] text-red-400 font-bold py-2",children:['El código "',oe.toUpperCase(),'" no coincide con el simulador interactivo de base. Intenta con "AA_01" o "A_01".']})}),i.jsxs("div",{className:"border border-white/5 bg-slate-900/10 p-4 rounded-xl text-xs font-semibold text-slate-400 leading-normal flex flex-col gap-2",children:[i.jsx("strong",{className:"text-white block font-black uppercase",children:"EJEMPLO VISUAL DE ACCIÓN:"}),i.jsxs("div",{className:"bg-[#050a14] p-3 rounded-lg font-mono text-[10px] text-slate-400 border border-white/5 antialiased leading-relaxed select-all",children:[i.jsxs("span",{children:['LUA_SCRIPT_REPLACE("',oe.toUpperCase()||"AA_01",'")']}),i.jsx("br",{}),i.jsx("span",{className:"text-emerald-400",children:"STATUS: READY -- INJECTING AT SPECIMEN_SLOT_0..."})]})]}),i.jsx("button",{type:"button",onClick:Fe,className:"w-full text-left bg-white/2 hover:bg-white/5 border border-white/5 px-4.5 py-3 rounded-2xl transition-all flex flex-col cursor-pointer",children:i.jsx("span",{className:"font-mono text-slate-400 font-bold",children:"[<] Volver"})})]})]}),g.screen==="lista_mutantes"&&i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsx("div",{className:"border-b border-white/5 pb-2",children:i.jsx("span",{className:"text-slate-400 text-xs font-black uppercase tracking-tight",children:"REEMPLAZAR > LISTA COMPLETA DE MUTANTES"})}),i.jsxs("div",{className:"flex flex-col gap-3",children:[i.jsxs("div",{className:"flex items-center bg-[#070b14] border border-white/10 rounded-xl px-3.5 py-2 focus-within:border-emerald-500/50",children:[i.jsx(Uo,{size:16,className:"text-slate-500 mr-2 shrink-0"}),i.jsx("input",{type:"text",value:Ue,onChange:V=>{Oe(V.target.value),C(0)},placeholder:"Búsqueda rápida...",className:"w-full bg-transparent text-white outline-none text-xs font-bold"})]}),i.jsxs("div",{className:"flex items-center gap-1.5 bg-[#050a14]/60 p-2 rounded-xl border border-white/5 overflow-x-auto whitespace-nowrap scrollbar-none scroll-smooth min-h-[42px] px-3 sm:flex-wrap sm:justify-center sm:max-h-[85px] sm:overflow-y-auto",children:[i.jsx("button",{type:"button",onClick:()=>{$("TODOS"),C(0)},className:`px-3 py-1.5 text-[9px] font-black rounded-lg cursor-pointer shrink-0 transition-colors ${J==="TODOS"?"bg-emerald-500 text-slate-950":"bg-slate-900 border border-white/5 text-slate-400 hover:text-white"}`,children:"TODOS"}),Wo.map(V=>i.jsx("button",{type:"button",onClick:()=>{$(V),C(0)},className:`w-7 h-7 flex items-center justify-center text-[9px] font-black rounded-lg cursor-pointer shrink-0 transition-colors ${J===V?"bg-emerald-500 text-slate-950":"bg-slate-900 border border-white/5 text-slate-400 hover:text-white"}`,children:V},V))]})]}),i.jsx("div",{className:"grid grid-cols-1 gap-3 sm:hidden",children:pn.length===0?i.jsx("div",{className:"p-6 text-center text-[11px] text-slate-500 font-medium bg-[#050a14]/60 border border-white/5 rounded-2xl",children:"Ningún mutante coincide con los filtros aplicados."}):pn.map((V,be)=>{const fe=Me*re+be+1;return i.jsxs("div",{className:"p-3.5 bg-[#050a14]/80 border border-white/5 rounded-2xl flex flex-col gap-3",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("span",{className:"text-[10px] font-mono text-slate-500 font-bold",children:["Nº ",fe]}),i.jsx("span",{className:"font-mono font-black text-emerald-400 text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 uppercase",children:V.code})]}),i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"w-11 h-11 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-center shrink-0 overflow-hidden text-[8px] text-slate-500 font-medium font-bold",children:V.imageUrl?i.jsx("img",{src:V.imageUrl,alt:"",className:"w-full h-full object-cover",onError:ge=>{ge.target.style.display="none"}}):"N/A"}),i.jsx("div",{className:"text-left font-semibold text-white text-xs truncate",children:V.name})]}),i.jsx("button",{type:"button",onClick:()=>{je(`Reemplazar por ${V.name}`,`Simula la inyección de offsets asociados con el código "${V.code}" dentro de tu hibridadora.`,"Cámara de hibrración activa.","Recuerda que debes abrir la hibridadora después de aplicar el parche.","Inicio > Menú Principal > Mutantes > Reemplazo > Lista Detalle",8)},className:"w-full py-2.5 text-[10px] uppercase rounded-xl bg-emerald-500 hover:bg-emerald-600 text-[#050a14] font-black border border-emerald-500/20 cursor-pointer transition-all active:scale-98 text-center",children:"Ver Detalle"})]},be)})}),i.jsx("div",{className:"hidden sm:block border border-white/5 rounded-2xl overflow-x-auto bg-[#050a14]/60",children:i.jsxs("table",{className:"w-full text-left text-xs text-slate-400",children:[i.jsx("thead",{className:"bg-[#0c1322] border-b border-white/5 font-black uppercase text-[10px] text-slate-400 tracking-wider",children:i.jsxs("tr",{children:[i.jsx("th",{className:"p-3 text-center w-12",children:"Nº"}),i.jsx("th",{className:"p-3",children:"Imagen"}),i.jsx("th",{className:"p-3",children:"Nombre"}),i.jsx("th",{className:"p-3",children:"Código"}),i.jsx("th",{className:"p-3 text-right",children:"Acción"})]})}),i.jsx("tbody",{className:"divide-y divide-white/5",children:pn.length===0?i.jsx("tr",{children:i.jsx("td",{colSpan:5,className:"p-6 text-center text-[11px] text-slate-500 font-medium",children:"Ningún mutante coincide con los filtros aplicados."})}):pn.map((V,be)=>{const fe=Me*re+be+1;return i.jsxs("tr",{className:"hover:bg-white/2 antialiased",children:[i.jsx("td",{className:"p-3 text-center text-[10px] font-mono text-slate-500 font-bold",children:fe}),i.jsx("td",{className:"p-3",children:i.jsx("div",{className:"w-9 h-9 rounded-lg bg-slate-950 border border-white/5 flex items-center justify-center shrink-0 overflow-hidden text-[8px] text-slate-500 font-medium",children:V.imageUrl?i.jsx("img",{src:V.imageUrl,alt:"",className:"w-full h-full object-cover",onError:ge=>{ge.target.style.display="none"}}):"N/A"})}),i.jsx("td",{className:"p-3 font-semibold text-white truncate max-w-[120px]",children:V.name}),i.jsx("td",{className:"p-3 font-mono font-black text-emerald-400 text-[10px] uppercase",children:V.code}),i.jsx("td",{className:"p-3 text-right",children:i.jsx("button",{type:"button",onClick:()=>{je(`Reemplazar por ${V.name}`,`Simula la inyección de offsets asociados con el código "${V.code}" dentro de tu hibridadora.`,"Cámara de hibrración activa.","Recuerda que debes abrir la hibridadora después de aplicar el parche.","Inicio > Menú Principal > Mutantes > Reemplazo > Lista Detalle",8)},className:"px-2.5 py-1 text-[10px] font-black uppercase rounded bg-emerald-500/10 hover:bg-emerald-500 hover:text-slate-950 text-emerald-400 border border-emerald-500/20 cursor-pointer transition-colors",children:"Ver Detalle"})})]},be)})})]})}),Hs>1&&i.jsxs("div",{className:"flex justify-between items-center bg-[#050a14] border border-white/5 p-3 rounded-xl mt-1 text-xs",children:[i.jsx("button",{type:"button",disabled:Me===0,onClick:()=>C(V=>Math.max(0,V-1)),className:"px-3 py-1.5 rounded-lg font-black bg-slate-900 border border-white/5 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer",children:"[<] Anterior"}),i.jsxs("span",{className:"font-bold text-slate-400 uppercase text-[10px]",children:["Página ",Me+1," de ",Hs]}),i.jsx("button",{type:"button",disabled:Me>=Hs-1,onClick:()=>C(V=>V+1),className:"px-3 py-1.5 rounded-lg font-black bg-slate-900 border border-white/5 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer",children:"Siguiente [>]"})]}),i.jsx("button",{type:"button",onClick:Fe,className:"w-full text-left bg-white/2 hover:bg-white/5 border border-white/5 px-4.5 py-3 rounded-2xl transition-all flex flex-col cursor-pointer",children:i.jsx("span",{className:"font-mono text-slate-400 font-bold",children:"[<] Volver"})})]}),g.screen==="tienda_mutantes"&&i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsx("div",{className:"border-b border-white/5 pb-2",children:i.jsx("span",{className:"text-slate-400 text-xs font-black uppercase tracking-tight",children:"MUTANTES > TIENDA DE MUTANTES"})}),i.jsxs("div",{className:"grid gap-2.5",children:[[{id:"1",name:"Todos los Paquetes de Mutantes",desc:"Prepara las referencias de memoria para desbloquear combos de paquetes de mutantes dentro de la tienda activa.",check:"Revisa la tienda después de inyectar.",tip:"No cargues simultáneamente múltiples lotes de tienda para no saturar memoria."},{id:"2",name:"Todos los Mutantes",desc:"Prepara la aparición de todos los especímenes de catálogo regulares de forma simulada.",check:"Área del catálogo de compras.",tip:"Usa con moderación en hibridadora vacía."},{id:"3",name:"Paquete Platino",desc:"Prepara la simulación y aparición del paquete Platinum en versión vinculada de tienda.",check:"Tienda del juego tras inyección.",tip:"Carga una sola opción a la vez para evitar errores."},{id:"4",name:"Mutantes a Créditos - Sección 1",desc:"Sustituye costos en créditos de mutantes de sección inicial asignada.",check:"Sección créditos de la tienda.",tip:"Asegúrate de tener saldo en créditos."},{id:"5",name:"Mutantes Meta y Comunes a Oro - Sección 1",desc:"Redirecciona mutantes meta a créditos de oro en la tienda.",check:"Sección oro de la tienda.",tip:"Adecuado para conseguir especímenes legendarios."},{id:"6",name:"Paquete Monogen Platino",desc:"Prepara códigos monogénicos metálicos platinados.",check:"Tienda del juego.",tip:"Carga un monogénico para iniciar combinaciones de genes."}].map(V=>i.jsxs("button",{type:"button",onClick:()=>{je(V.name,V.desc,V.check,V.tip,"Inicio > Menú Principal > Mutantes > Tienda > Detalle",9)},className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 hover:border-emerald-500/35 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:[i.jsxs("span",{className:"font-mono text-emerald-400 font-black",children:["[",V.id,"] ",V.name]}),h&&i.jsx("p",{className:"text-[11px] text-[#8192af] pl-5 leading-relaxed",children:V.desc})]},V.id)),i.jsx("button",{type:"button",onClick:Fe,className:"w-full text-left bg-white/2 hover:bg-white/5 border border-white/5 px-4.5 py-3 rounded-2xl transition-all flex flex-col cursor-pointer",children:i.jsx("span",{className:"font-mono text-slate-400 font-bold",children:"[<] Volver"})})]})]}),g.screen==="mutantes_especiales"&&i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsx("div",{className:"border-b border-white/5 pb-2",children:i.jsx("span",{className:"text-slate-400 text-xs font-black uppercase tracking-tight",children:"MUTANTES > MUTANTES ESPECIALES"})}),i.jsxs("div",{className:"grid gap-2.5",children:[i.jsxs("div",{className:"border border-white/5 bg-slate-900/10 p-4 rounded-2xl mb-2",children:[i.jsx("span",{className:"text-xs font-black text-slate-400 uppercase tracking-wider block mb-2",children:"Mutantes Exclusivos"}),i.jsx("div",{className:"grid gap-2 text-xs",children:[{name:"Emperador Gold",code:"GOLD_12",rep:"Shogun (c_05_gold)"},{name:"Lilith Dark",code:"DARK_88",rep:"Cibernético (a_01)"},{name:"Kuno Helado",code:"ICE_22",rep:"Guerrero (c_11_ice)"}].map((V,be)=>i.jsxs("div",{className:"bg-[#050a14] border border-white/5 p-3 rounded-xl flex items-center justify-between gap-3",children:[i.jsxs("div",{className:"text-left",children:[i.jsx("strong",{className:"block text-white font-semibold",children:V.name}),i.jsxs("code",{className:"text-[10px] text-emerald-400 font-mono font-black mt-0.5 block uppercase",children:["Código: ",V.code]}),i.jsxs("span",{className:"text-[9px] text-slate-500 leading-none",children:["Reemplaza a: ",V.rep]})]}),i.jsx("button",{type:"button",onClick:()=>{je(`Reemplazo: ${V.name}`,`Inyectará el offset para que el specimen de incubación '${V.rep}' adopte la apariencia y características del exclusivo '${V.name}' (${V.code}).`,"Cámara de incubación / Terraza.","Ideal para simular skins raras de exhibición.","Inicio > Menú Principal > Mutantes > Especiales > Exclusivo",10)},className:"px-2.5 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-black text-[9px] uppercase cursor-pointer",children:"[>] Explicar"})]},be))}),i.jsxs("div",{className:"mt-3.5 bg-yellow-brand/5 border-l-4 border-yellow-500 p-3 rounded-lg text-[11px] leading-relaxed text-slate-300 font-semibold",children:["[!] ",i.jsx("span",{className:"text-yellow-brand font-black block mb-0.5 uppercase",children:"Recomendación de seguridad:"}),"Carga pocos mutantes a la vez para reducir el riesgo de de-sincronizaciones o cierres inesperados de tu Game Guardian real."]})]}),i.jsx("button",{type:"button",onClick:()=>{je("Mutantes Mensuales 2024 - 2025","Agrupa la lista de mutantes recompensa mensuales inyectables.","Sección recompensas del buzón o inventario.","Sigue con cuidado el hilo del mes.","Inicio > Menú Principal > Mutantes > Especiales > Detalle",10)},className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[2] Mutantes Mensuales 2024 - 2025"})}),i.jsx("button",{type:"button",onClick:()=>{je("Neo Monogenes","Carga configuraciones de monogénicos premium mejorados para el reactor.","Reactor / Laboratorio.","No intentes combinar dos neo-monogenes simultáneamente.","Inicio > Menú Principal > Mutantes > Especiales > Detalle",10)},className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[3] Neo Monogenes"})}),i.jsx("button",{type:"button",onClick:()=>{je("Buranka y Britany","Activa offsets del dúo cómico especial de MGG.","Inventario general de specimen.","Requiere reiniciar el juego una vez completado el parche.","Inicio > Menú Principal > Mutantes > Especiales > Detalle",10)},className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[4] Buranka y Britany"})}),i.jsx("button",{type:"button",onClick:Fe,className:"w-full text-left bg-white/2 hover:bg-white/5 border border-white/5 px-4.5 py-3 rounded-2xl transition-all flex flex-col cursor-pointer",children:i.jsx("span",{className:"font-mono text-slate-400 font-bold",children:"[<] Volver"})})]})]}),g.screen==="reactor"&&i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsxs("div",{className:"border-b border-white/5 pb-2",children:[i.jsx("span",{className:"text-slate-400 text-xs font-black uppercase tracking-tight",children:"SECCIÓN: REACTOR"}),i.jsx("p",{className:"text-[11px] text-emerald-400 font-semibold m-0 leading-normal",children:"Usa esta sección cuando quieras preparar o aplicar un cambio relacionado con el reactor. Sigue los pasos indicados abajo."})]}),i.jsxs("div",{className:"border border-emerald-500/30 bg-emerald-500/5 p-4 rounded-2xl flex flex-col gap-2 shadow-lg shadow-emerald-500/5",children:[i.jsxs("span",{className:"text-xs font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1.5 leading-none",children:[i.jsx(U2,{size:14})," ORDEN RECOMENDADO DE CARGA"]}),i.jsxs("div",{className:"grid gap-2 text-[11px] mt-1 text-slate-300",children:[i.jsxs("div",{className:"flex gap-2 font-semibold",children:[i.jsx("span",{className:"text-emerald-400 font-bold",children:"Paso 1:"}),i.jsx("span",{children:"Selecciona “Cambiar Reactor - Preparar”."})]}),i.jsxs("div",{className:"flex gap-2 font-semibold",children:[i.jsx("span",{className:"text-emerald-400 font-bold",children:"Paso 2:"}),i.jsx("span",{children:"Elige el reactor deseado y el reactor que será reemplazado."})]}),i.jsxs("div",{className:"flex gap-2 font-semibold",children:[i.jsx("span",{className:"text-emerald-400 font-bold",children:"Paso 3:"}),i.jsx("span",{children:"Regresa y pulsa “Hackear Reactor - Aplicar el Cambio”."})]}),i.jsxs("div",{className:"flex gap-2 font-semibold",children:[i.jsx("span",{className:"text-emerald-400 font-bold",children:"Paso 4:"}),i.jsx("span",{children:"Revisa el resultado reflejado visualmente dentro del juego."})]})]})]}),i.jsxs("div",{className:"grid gap-2.5 mt-2",children:[i.jsx("button",{type:"button",onClick:()=>{je("Cambiar Reactor - Preparar","Prepara y aloja en persistencia las direcciones del reactor nuevo coincidente y del reactor actual a suplantar.","Aún no aplica nada real, solo prepara de forma predeterminada estructuras de memoria.","No intentes aplicar este parche sin haber cumplido los offsets requeridos previamente.","Inicio > Menú Principal > Reactor > Cambiar Detector",11)},className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[1] Cambiar Reactor - Preparar"})}),i.jsx("button",{type:"button",onClick:()=>{je("Hackear Reactor - Aplicar el Cambio","Inyecta de forma masiva los punteros para forzar el desbloqueo y cambio del reactor configurado.","Sección de la sala de control o reactor del juego.","Solo ejecútalo después de haber preparado la transacción con el paso 1.","Inicio > Menú Principal > Reactor > Hackear",11)},className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[2] Hackear Reactor - Aplicar el Cambio"})}),i.jsx("button",{type:"button",onClick:()=>{je("Fichas Reactor","Prepara los offsets para emular la recarga de fichas de juego utilitarias para el reactor.","Inventario de fichas del reactor.","Ideal para rellenar energía rápidamente.","Inicio > Menú Principal > Reactor > Fichas",11)},className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[3] Fichas Reactor"})}),i.jsx("button",{type:"button",onClick:()=>{je("Preparar y Pelear","Fuerza el refresco instantáneo de emparejamientos y batallas de reactor simuladas con tus gladeadores.","Sección batallas del reactor.","Espera a que termine el temporizador del juego antes de forzar otra batalla.","Inicio > Menú Principal > Reactor > Pelear",11)},className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[4] Preparar y Pelear"})}),i.jsx("button",{type:"button",onClick:()=>{je("Salas Reactor","Parchea las salas del reactor simulando el aumento del espacio y capacidad de hospedaje.","Salas generales de combatientes.","Limpia la caché de juego si los gráficos muestran fallos temporales.","Inicio > Menú Principal > Reactor > Salas",11)},className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[5] Salas Reactor"})}),i.jsx("button",{type:"button",onClick:Fe,className:"w-full text-left bg-white/2 hover:bg-white/5 border border-white/5 px-4.5 py-3 rounded-2xl transition-all flex flex-col cursor-pointer",children:i.jsx("span",{className:"font-mono text-slate-400 font-bold",children:"[<] Volver al Menú Principal"})})]})]}),g.screen==="cajas"&&i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsx("div",{className:"border-b border-white/5 pb-2",children:i.jsx("span",{className:"text-slate-400 text-xs font-black uppercase tracking-tight",children:"SECCIÓN: CAJAS Y PAQUETES"})}),i.jsxs("div",{className:"grid gap-2.5",children:[i.jsxs("button",{type:"button",onClick:()=>He("cajas_desbloquear","Desbloquear Cajas","Inicio > Menú Principal > Cajas > Desbloquear",12),className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:[i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[1] Desbloquear Cajas"}),h&&i.jsx("p",{className:"text-[11px] text-slate-400 pl-5 leading-normal",children:"Opciones para liberar las cajas cerradas del inventario."})]}),i.jsxs("button",{type:"button",onClick:()=>He("paquetes_generales","Paquetes Generales","Inicio > Menú Principal > Cajas > Paquetes Generales",12),className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:[i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[2] Paquetes Generales"}),h&&i.jsx("p",{className:"text-[11px] text-slate-400 pl-5 leading-normal",children:"Ofrece una amplia selección de packs, multiplicadores y potenciadores de EXP."})]}),i.jsxs("button",{type:"button",onClick:()=>He("paquetes_especiales","Paquetes Especiales","Inicio > Menú Principal > Cajas > Paquetes Especiales",12),className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:[i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[3] Paquetes Especiales"}),h&&i.jsx("p",{className:"text-[11px] text-slate-400 pl-5 leading-normal",children:"Incluye un lote secundario de cajas misteriosas y ofertas."})]}),i.jsx("button",{type:"button",onClick:Fe,className:"w-full text-left bg-white/2 hover:bg-white/5 border border-white/5 px-4.5 py-3 rounded-2xl transition-all flex flex-col cursor-pointer",children:i.jsx("span",{className:"font-mono text-slate-400 font-bold",children:"[<] Volver al Menú Principal"})})]})]}),g.screen==="cajas_desbloquear"&&i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsx("div",{className:"border-b border-white/5 pb-2",children:i.jsx("span",{className:"text-slate-400 text-xs font-black uppercase tracking-tight",children:"CAJAS > DESBLOQUEAR CAJAS"})}),i.jsxs("div",{className:"bg-yellow-brand/5 border-l-4 border-yellow-500 p-4 rounded-xl text-[11px] leading-relaxed text-slate-300 font-semibold mb-2",children:["[!] ",i.jsx("span",{className:"text-yellow-brand font-black block mb-0.5 uppercase",children:"ADVERTENCIA:"}),"Esta opción de escritura masiva puede tardar algunos segundos en ejecutarse. No cierres el juego ni apagues tu consola durante la carga. Inyecta una opción a la vez y comprueba tu inventario antes de continuar."]}),i.jsxs("div",{className:"grid gap-2.5",children:[i.jsx("button",{type:"button",onClick:()=>{je("Activar Todas las Cajas","Desbloqueará instantáneamente todas las familias de cajas del simulador de inventario.","Inventario general de cajas.","No intentes abrir las cajas repetidamente mientras esté inyectando para evitar cierres.","Inicio > Menú Principal > Cajas > Desbloquear > Activar Todas",12)},className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[1] Activar Todas las Cajas"})}),i.jsx("button",{type:"button",onClick:()=>{je("Grupo 1: Cajas de Aniversario y Navidad","Emula el lote específico de cajas festivas de Aniversario y Navidad para su compra directa.","Pestaña de ofertas del bazar.","Carga un solo lote a la vez.","Inicio > Menú Principal > Cajas > Desbloquear > Navidad",12)},className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[2] Grupo 1: Cajas de Aniversario y Navidad"})}),i.jsx("button",{type:"button",onClick:()=>{je("Grupo 2: Cajas Especiales y Elite","Reemplaza y desbloquea el conjunto secundario de cajas de élite de alta prioridad.","Cajas del inventario.","Ideal si estás buscando mutantes de nivel superior.","Inicio > Menú Principal > Cajas > Desbloquear > Elite",12)},className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[3] Grupo 2: Cajas Especiales y Elite"})}),i.jsx("button",{type:"button",onClick:Fe,className:"w-full text-left bg-white/2 hover:bg-white/5 border border-white/5 px-4.5 py-3 rounded-2xl transition-all flex flex-col cursor-pointer",children:i.jsx("span",{className:"font-mono text-slate-400 font-bold",children:"[<] Volver"})})]})]}),g.screen==="paquetes_generales"&&i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsx("div",{className:"border-b border-white/5 pb-2",children:i.jsx("span",{className:"text-slate-400 text-xs font-black uppercase tracking-tight",children:"CAJAS > PAQUETES GENERALES"})}),i.jsxs("div",{className:"grid gap-2 text-xs",children:[[{id:"1",name:"Cajas de Aniversario y Navidad"},{id:"2",name:"Paquete Rapidez Nivel 5"},{id:"3",name:"Paquete Escudo Especial Nivel 5"},{id:"4",name:"Paquetes de EXP y Créditos"},{id:"5",name:"Cajas Misteriosas"},{id:"6",name:"Ofertas y Paquetes"},{id:"7",name:"Paquete Fortalecimiento Nivel 5"}].map(V=>i.jsxs("button",{type:"button",onClick:()=>{je(V.name,`Sincroniza y fuerza la habilitación simulada del "${V.name}" dentro de tus opciones activas de compra.`,"Tienda del juego / Buzón.","Sigue con cuidado el hilo del mes.","Inicio > Menú Principal > Cajas > General > Detalle",12)},className:"w-full text-left bg-[#050a14] border border-white/5 hover:border-emerald-500/30 p-3 rounded-xl flex items-center justify-between gap-3 cursor-pointer",children:[i.jsxs("span",{className:"font-mono text-emerald-400 font-black",children:["[",V.id,"] ",V.name]}),i.jsx(fu,{size:12,className:"text-slate-600"})]},V.id)),i.jsx("button",{type:"button",onClick:Fe,className:"w-full text-left bg-white/2 hover:bg-white/5 border border-white/5 px-4.5 py-3 rounded-2xl transition-all flex flex-col cursor-pointer",children:i.jsx("span",{className:"font-mono text-slate-400 font-bold",children:"[<] Volver"})})]})]}),g.screen==="paquetes_especiales"&&i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsx("div",{className:"border-b border-white/5 pb-2",children:i.jsx("span",{className:"text-slate-400 text-xs font-black uppercase tracking-tight",children:"CAJAS > PAQUETES ESPECIALES"})}),i.jsxs("div",{className:"grid gap-2.5",children:[i.jsxs("button",{type:"button",onClick:()=>{je("Más Cajas Misteriosas","Habilita una inyección de respaldo conteniendo un lote de cajas misteriosas secundarias del juego.","Pestaña de cajas.","No lo actives repetidas veces.","Inicio > Menú Principal > Cajas > Paquetes Especiales > Más Cajas",12)},className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:[i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[1] Más Cajas Misteriosas"}),h&&i.jsx("p",{className:"text-[11px] text-slate-400 pl-5 leading-relaxed",children:"Cajas de contingencia para hibridar."})]}),i.jsx("button",{type:"button",onClick:Fe,className:"w-full text-left bg-white/2 hover:bg-white/5 border border-white/5 px-4.5 py-3 rounded-2xl transition-all flex flex-col cursor-pointer",children:i.jsx("span",{className:"font-mono text-slate-400 font-bold",children:"[<] Volver"})})]})]}),g.screen==="recursos"&&i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsxs("div",{className:"border-b border-white/5 pb-2",children:[i.jsx("span",{className:"text-slate-400 text-xs font-black uppercase tracking-tight",children:"SECCIÓN: RECURSOS, FICHAS Y MEJORAS"}),i.jsx("p",{className:"text-[11px] text-emerald-400 font-semibold m-0 leading-normal",children:"En esta sección encontrarás funciones relacionadas con recursos, edificios, fichas y mejoras especiales."})]}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",children:[{id:"1",name:"Laboratorio Médico",desc:"Habilita la activación directa del laboratorio médico para la compra o recambio de curación de tus mutantes."},{id:"2",name:"Horno de Oro",desc:"Prepara el simulador de fundición de oro dentro de tu base hibridadora."},{id:"3",name:"Velocidad x5",desc:"Aumenta el multiplicador simulado de batallas por 5 para acelerar las tareas monótonas del juego."},{id:"4",name:"Compras Ilimitadas",desc:"Suprime los límites de compra simulados en el buzón y la tienda de campaña hibridadora."},{id:"5",name:"Mutosterona",desc:"Habilita mutosterona en tu inventario para mutaciones automáticas sin esperas."},{id:"6",name:"Estrellas",desc:"Prepara la aparición de recursos valiosos en forma de estrellas de bronce, plata y oro."},{id:"7",name:"Caja Créditos",desc:"Caja misteriosa conteniendo bolsas de créditos simulados."},{id:"8",name:"Zona Deluxe",desc:"Habilita la suscripción o zona premium de tu base para recompensas diarias."},{id:"9",name:"Fichas Jackpot",desc:"Fichas adicionales para participar del casino o la ruleta diaria de recompensas."},{id:"10",name:"Frascos XP",desc:"Parchea la cantidad de frascos de experiencia en tu inventario principal."},{id:"11",name:"Fichas Reto",desc:"Añade fichas exclusivas vinculadas con eventos y retos activos."},{id:"12",name:"Fichas Reactor",desc:"Prepara el recurso relacionado con las fichas y energía del reactor de combate."}].map(V=>i.jsxs("button",{type:"button",onClick:()=>{je(V.name,V.desc,"Revisa la pestaña indicada dentro del juego después de inyectar.","Apaga las opciones de internet antes de inyectar para evitar fallos de conexión.","Inicio > Menú Principal > Recursos > Detalle",13)},className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 hover:border-emerald-500/30 p-3 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:[i.jsxs("span",{className:"font-mono text-emerald-400 font-bold",children:["[",V.id,"] ",V.name]}),h&&i.jsx("p",{className:"text-[10px] text-[#8ea4c2] pl-4 leading-normal mt-0.5 line-clamp-2",children:V.desc})]},V.id))}),i.jsx("button",{type:"button",onClick:Fe,className:"w-full text-left bg-white/2 hover:bg-white/5 border border-white/5 px-4.5 py-3 rounded-2xl transition-all flex flex-col cursor-pointer mt-2",children:i.jsx("span",{className:"font-mono text-slate-400 font-bold",children:"[<] Volver al Menú Principal"})})]}),g.screen==="orbes"&&i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsxs("div",{className:"border-b border-white/5 pb-2",children:[i.jsx("span",{className:"text-slate-400 text-xs font-black uppercase tracking-tight",children:"SECCIÓN: ORBES"}),i.jsx("p",{className:"text-[11px] text-emerald-400 font-semibold m-0 leading-normal",children:"Aquí encontrarás las opciones relacionadas con orbes individuales y paquetes de orbes de ataque/defensa/velocidad de alta calidad."})]}),i.jsxs("div",{className:"grid gap-2.5",children:[i.jsx("button",{type:"button",onClick:()=>{je("Orbe XP Nivel 4","Prepara la inyección para agregar orbes de experiencia nivel 4 a tus mutantes.","Inventario de orbes.","Aplícalo solo a mutantes con nivel menor a 20.","Inicio > Menú Principal > Orbes > XP Nivel 4",14)},className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[1] Orbe XP Nivel 4"})}),i.jsx("button",{type:"button",onClick:()=>{je("Orbes Básicos Nivel 6","Activa la aparición simulada de un trío de orbes básicos (fuerza, vida, velocidad) en nivel 6.","Inventario de orbes.","Útil si estás preparando combinaciones de nivel superior.","Inicio > Menú Principal > Orbes > Básicos Nivel 6",14)},className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[2] Orbes Básicos Nivel 6"})}),i.jsx("button",{type:"button",onClick:()=>{je("Orbes ATK / VD / CRIT","Parchea específicamente orbes optimizados para potenciar el ataque, velocidad y índice crítico.","Pestaña orbes.","Aplícalo a mutantes con alto índice de golpe crítico base.","Inicio > Menú Principal > Orbes > ATK / VD / CRIT",14)},className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[3] Orbes ATK / VD / CRIT"})}),i.jsxs("button",{type:"button",onClick:()=>He("paquetes_orbes","Paquetes de Orbes","Inicio > Menú Principal > Orbes > Paquetes de Orbes",14),className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:[i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[4] Paquetes de Orbes"}),h&&i.jsx("p",{className:"text-[11px] text-slate-400 pl-5 leading-normal",children:"Ofrece lotes masivos de orbes ensamblados listos para fundir."})]}),i.jsxs("button",{type:"button",onClick:()=>He("orbes_nivel_7","Orbes Nivel 7","Inicio > Menú Principal > Orbes > Orbes Nivel 7",14),className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:[i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[5] Orbes Nivel 7"}),h&&i.jsx("p",{className:"text-[11px] text-slate-400 pl-5 leading-normal font-medium text-emerald-400",children:"Desbloquea orbes de nivel máximo absoluto indispensables para arenas de élite."})]}),i.jsx("button",{type:"button",onClick:Fe,className:"w-full text-left bg-white/2 hover:bg-white/5 border border-white/5 px-4.5 py-3 rounded-2xl transition-all flex flex-col cursor-pointer",children:i.jsx("span",{className:"font-mono text-slate-400 font-bold",children:"[<] Volver al Menú Principal"})})]})]}),g.screen==="paquetes_orbes"&&i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsx("div",{className:"border-b border-white/5 pb-2",children:i.jsx("span",{className:"text-slate-400 text-xs font-black uppercase tracking-tight",children:"ORBES > PAQUETES DE ORBES"})}),i.jsxs("div",{className:"grid gap-2.5",children:[[{id:"1",name:"Paquete de Orbes Básicos Nivel 6"},{id:"2",name:"Paquete de Orbes de Poder Nivel 6"},{id:"3",name:"Paquete de Orbes de EXP Nivel 4"},{id:"4",name:"Paquete de Orbes Básicos Nivel 7"}].map(V=>i.jsx("button",{type:"button",onClick:()=>{je(V.name,`Prepara y desbloquea el "${V.name}" completo para empaquetarlo y agregarlo a tu inventario.`,"Tienda del juego / Sección de paquetes de orbes.","Sujeto a reiniciar el cliente si muestra un conteo visual desfasado.","Inicio > Menú Principal > Orbes > Paquetes > Detalle",14)},className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:i.jsxs("span",{className:"font-mono text-emerald-400 font-black",children:["[",V.id,"] ",V.name]})},V.id)),i.jsx("button",{type:"button",onClick:Fe,className:"w-full text-left bg-white/2 hover:bg-white/5 border border-white/5 px-4.5 py-3 rounded-2xl transition-all flex flex-col cursor-pointer",children:i.jsx("span",{className:"font-mono text-slate-400 font-bold",children:"[<] Volver"})})]})]}),g.screen==="orbes_nivel_7"&&i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsx("div",{className:"border-b border-white/5 pb-2",children:i.jsx("span",{className:"text-slate-400 text-xs font-black uppercase tracking-tight",children:"ORBES > ORBES INDIVIDUALES NIVEL 7"})}),i.jsxs("div",{className:"grid gap-2.5",children:[[{id:"1",name:"Ataque Nivel 7",color:"text-red-400"},{id:"2",name:"Vida Nivel 7",color:"text-emerald-400"},{id:"3",name:"Crítico Nivel 7",color:"text-[#8c52ff]"},{id:"4",name:"XP Nivel 6",color:"text-blue-400"}].map(V=>i.jsx("button",{type:"button",onClick:()=>{je(`Orbe ${V.name}`,`Habilita un lote específico de orbe "${V.name}" para forzar su inyección simulada de manera rápida.`,"Sección de orbes individuales en el inventario.","Ideal para equiparlo en tus mejores combatientes de la arena de platino.","Inicio > Menú Principal > Orbes > Nivel 7 > Detalle",14)},className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:i.jsxs("span",{className:"font-mono font-black text-emerald-400",children:["[",V.id,"] Orbe ",i.jsx("span",{className:V.color,children:V.name})]})},V.id)),i.jsx("button",{type:"button",onClick:Fe,className:"w-full text-left bg-white/2 hover:bg-white/5 border border-white/5 px-4.5 py-3 rounded-2xl transition-all flex flex-col cursor-pointer",children:i.jsx("span",{className:"font-mono text-slate-400 font-bold",children:"[<] Volver"})})]})]}),g.screen==="otros"&&i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsxs("div",{className:"border-b border-white/5 pb-2",children:[i.jsx("span",{className:"text-slate-400 text-xs font-black uppercase tracking-tight",children:"SECCIÓN: OTROS"}),i.jsx("p",{className:"text-[11px] text-[#93c5fd] leading-relaxed m-0 font-medium font-semibold",children:"Esta sección contiene herramientas y configuraciones adicionales misceláneas. Antes de utilizar un comando, revisa con cuidado su explicación."})]}),i.jsxs("div",{className:"grid gap-2.5",children:[i.jsxs("button",{type:"button",onClick:()=>{je("Misc","Contiene rutinas complementarias de depuración, restablecimiento de parámetros visibles y utilidades varias.","Secciones básicas de configuración.","Solo es idóneo usarlo bajo recomendación del administrador.","Inicio > Menú Principal > Otros > Misc",15)},className:"w-full text-left bg-slate-900/40 hover:bg-slate-900/90 border border-white/5 px-4.5 py-3.5 rounded-2xl transition-all flex flex-col gap-1 cursor-pointer",children:[i.jsx("span",{className:"font-mono text-emerald-400 font-black",children:"[1] Misc"}),h&&i.jsx("p",{className:"text-[11px] text-slate-400 pl-5 leading-normal",children:"Ajustes alternativos de soporte."})]}),i.jsx("button",{type:"button",onClick:Fe,className:"w-full text-left bg-white/2 hover:bg-white/5 border border-white/5 px-4.5 py-3 rounded-2xl transition-all flex flex-col cursor-pointer",children:i.jsx("span",{className:"font-mono text-slate-400 font-bold",children:"[<] Volver al Menú Principal"})})]})]}),g.screen==="acerca"&&i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsx("div",{className:"border-b border-white/5 pb-2",children:i.jsx("span",{className:"text-slate-400 text-xs font-black uppercase tracking-tight",children:"INFORMACIÓN DE LA CONSOLA"})}),i.jsxs("div",{className:"bg-[#050a14]/60 border border-white/5 rounded-2xl p-4 flex flex-col gap-3",children:[i.jsxs("div",{className:"text-center pb-2 border-b border-white/5",children:[i.jsx("strong",{className:"text-white uppercase text-sm block",children:"NEXUS EDGE INTERFACE"}),i.jsx("span",{className:"text-[10px] text-[#4d97ff] font-bold uppercase tracking-widest mt-1 block",children:"Guía visual e interactiva del script"})]}),i.jsxs("div",{className:"grid gap-1.5 text-xs",children:[i.jsxs("div",{className:"flex justify-between items-center bg-white/2 p-2 rounded-lg",children:[i.jsx("span",{className:"text-slate-500 font-black uppercase",children:"Administrador:"}),i.jsx("span",{className:"text-emerald-400 font-black uppercase",children:"Smith Luque"})]}),i.jsxs("div",{className:"flex flex-col gap-1 bg-white/2 p-2.5 rounded-lg text-left text-[11px]",children:[i.jsx("span",{className:"text-slate-500 font-black uppercase leading-none mb-1 block",children:"Propósito del proyecto:"}),i.jsx("p",{className:"text-[#8ca2b9] leading-relaxed m-0 font-medium",children:"Ayudar a que nuevos o veteranos usuarios de la comunidad de Mutodex MGG comprendan la estructura jerárquica de comandos del archivo LUA sobre Game Guardian antes de ejecutarlo."})]})]}),i.jsxs("div",{className:"flex flex-col gap-1 bg-white/2 p-2.5 rounded-lg text-left text-[11px]",children:[i.jsx("span",{className:"text-slate-500 font-black uppercase leading-none mb-1.5 block",children:"Características Simulación:"}),i.jsxs("ul",{className:"list-disc pl-4 space-y-1 text-[#8ca4c2] font-semibold m-0",children:[i.jsx("li",{children:"Simulación fluida sin vulnerar el celular."}),i.jsx("li",{children:"Toggle integrado para visualización de explicaciones en tiempo real."}),i.jsx("li",{children:"Carga de base de datos del catálogo integrada."}),i.jsx("li",{children:"Demostrador de inyección paso a paso animado."})]})]}),i.jsxs("div",{className:"grid gap-2 mt-1",children:[i.jsx("button",{type:"button",onClick:()=>{x(!0),G(0)},className:"w-full py-3 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-black uppercase cursor-pointer transition-all",children:"[?] Ver tutorial rápido de nuevo"}),i.jsx("button",{type:"button",onClick:()=>Oa("main","Menú Principal","Inicio > Menú Principal",3),className:"w-full py-3 px-4 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-black uppercase cursor-pointer",children:"[>] Regresar al Menú Principal"})]})]})]}),g.screen==="detail_view"&&i.jsxs("div",{className:"flex flex-col gap-4 max-w-xl mx-auto",children:[i.jsx("div",{className:"border-b border-white/5 pb-2 flex justify-between items-center text-xs uppercase font-extrabold tracking-tight",children:i.jsx("span",{className:"text-slate-400",children:r("detail_title")})}),it?i.jsxs("div",{className:"bg-[#050a14] border border-white/5 p-5 rounded-2xl flex flex-col gap-2.5 max-h-[220px] overflow-y-auto font-mono text-[11px] text-emerald-400 select-text",children:[i.jsx("div",{className:"text-[10px] text-slate-500 font-bold border-b border-white/5 pb-1 uppercase tracking-widest",children:r("sim_progress_title")}),da.map((V,be)=>i.jsxs("div",{className:"flex gap-2",children:[i.jsxs("span",{className:"text-slate-600",children:["[",be+1,"]"]}),i.jsx("span",{children:V})]},be)),Vs<6&&i.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[i.jsx("div",{className:"w-3.5 h-3.5 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"}),i.jsx("span",{className:"text-slate-500 italic",children:r("sim_writing_logs")})]})]}):i.jsxs("div",{className:"bg-[#050a14]/60 border border-white/5 rounded-2xl p-5 flex flex-col gap-4 text-xs font-semibold",children:[i.jsxs("div",{className:"flex justify-between items-start border-b border-white/5 pb-2.5",children:[i.jsxs("div",{className:"text-left font-bold",children:[i.jsx("span",{className:"text-[10px] text-slate-500 font-black uppercase block tracking-wider leading-none",children:r("detail_func_label")}),i.jsx("strong",{className:"text-white text-base mt-1.5 block leading-tight font-bold",children:xe})]}),i.jsx("span",{className:"bg-[#10b981]/15 text-emerald-400 text-[10px] font-black px-2.5 py-1 rounded uppercase animate-pulse border border-emerald-500/20",children:r("detail_ready")})]}),i.jsxs("div",{className:"flex flex-col gap-3 text-left",children:[i.jsxs("div",{className:"flex flex-col gap-1 bg-white/2 p-3 rounded-xl border border-white/5",children:[i.jsx("span",{className:"text-slate-500 font-black text-[10px] uppercase block tracking-widest leading-none mb-1",children:r("selected_function_label")}),i.jsx("p",{className:"text-slate-300 font-medium leading-relaxed m-0 text-[12px]",children:B})]}),i.jsxs("div",{className:"flex flex-col gap-1 bg-white/2 p-3 rounded-xl border border-white/5",children:[i.jsx("span",{className:"text-slate-500 font-black text-[10px] uppercase block tracking-widest leading-none mb-1",children:r("result_check_label")}),i.jsx("p",{className:"text-slate-300 font-medium leading-relaxed m-0 text-[12px]",children:te})]}),i.jsxs("div",{className:"flex flex-col gap-1 bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/10",children:[i.jsxs("span",{className:"text-emerald-400 font-black text-[10px] uppercase block tracking-widest leading-none mb-1 flex items-center gap-1",children:[i.jsx(wr,{size:12})," ",r("recommendation_label")]}),i.jsx("p",{className:"text-[#a1bccc] font-medium leading-relaxed m-0 text-[12px]",children:he})]})]}),i.jsxs("div",{className:"grid sm:grid-cols-2 gap-3 mt-2",children:[i.jsxs("button",{type:"button",onClick:()=>Jr(xe),className:"py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black uppercase text-xs cursor-pointer shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-2 transition-all active:scale-95",children:[i.jsx(sb,{size:14,className:"fill-slate-950"}),i.jsx("span",{children:r("simulate_action")})]}),i.jsx("button",{type:"button",onClick:Fe,className:"py-3.5 px-4 rounded-xl bg-slate-900 border border-white/10 hover:bg-white/5 text-slate-400 hover:text-white text-xs font-black uppercase cursor-pointer",children:i.jsx("span",{children:r("button_return")})})]})]})]})]}),i.jsxs("div",{className:"bg-slate-950 border-t border-slate-900 px-6 py-4 flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center justify-between text-[11px] font-semibold text-slate-400 relative",children:[i.jsxs("div",{className:"flex flex-wrap items-center gap-x-2 gap-y-1 text-left",children:[i.jsx("span",{className:"bg-slate-900 text-slate-500 px-2 py-0.5 rounded text-[10px] uppercase font-bold shrink-0",children:r("sec_label").replace("{page}",String(g.pageNum))}),i.jsx("span",{className:"font-bold text-slate-400 text-xs truncate max-w-[280px] md:max-w-md",children:g.breadcrumbs})]}),i.jsxs("div",{className:"flex flex-wrap items-center justify-between md:justify-end gap-3 shrink-0",children:[i.jsx("span",{className:"text-[10px] text-slate-500 uppercase font-black tracking-widest",children:r("console_demo_badge")}),i.jsxs("div",{className:"flex gap-2",children:[i.jsx("button",{type:"button",disabled:d.length<=1,onClick:Fe,className:`px-3 py-1.5 rounded-lg border flex items-center gap-1 cursor-pointer transition-all active:scale-95 text-[10px] font-black uppercase ${d.length<=1?"bg-slate-900/50 border-white/5 text-slate-600 cursor-not-allowed opacity-50":"bg-slate-900 hover:bg-slate-800 border-white/10 text-white"}`,children:i.jsx("span",{children:r("btn_vol")})}),i.jsxs("button",{type:"button",onClick:()=>{x(!0),G(0)},className:"px-3 py-1.5 rounded-lg bg-[#2563eb]/10 border border-blue-500/20 hover:bg-blue-500/20 text-[#a5c3ff] flex items-center gap-1 cursor-pointer transition-all active:scale-95 text-[10px] font-black uppercase",children:[i.jsx(xu,{size:12}),i.jsx("span",{children:r("btn_help_tut")})]})]})]})]}),i.jsx("div",{className:"absolute top-1/2 left-0 w-3 lg:w-4 h-12 bg-emerald-500 rounded-r-lg shadow-lg border border-l-0 border-emerald-400/30",title:"Consola Activa"}),i.jsx("div",{className:"absolute top-1/2 right-0 w-3 lg:w-4 h-12 bg-red-500 rounded-l-lg shadow-lg border border-r-0 border-red-400/30",title:"Consola Activa"})]}),i.jsxs("div",{className:"space-y-6 text-left",children:[i.jsxs("article",{className:"p-5.5 bg-slate-950 border border-white/5 rounded-3xl text-xs text-left leading-relaxed flex flex-col gap-3",children:[i.jsxs("h4",{className:"text-white font-black uppercase tracking-wider flex items-center gap-1.5 leading-none m-0",children:[i.jsx(Ff,{className:"text-red-400",size:15})," ",r("caution_title")]}),i.jsx("p",{className:"text-slate-400 font-medium m-0 leading-normal",children:r("caution_para")}),i.jsx("div",{className:"bg-red-500/5 border border-red-500/20 p-2.5 rounded-xl font-bold text-red-300",children:r("caution_warning_box")})]}),i.jsxs("article",{className:"p-5.5 bg-slate-950 border border-white/5 rounded-3xl text-left flex flex-col gap-3",children:[i.jsxs("h4",{className:"text-white font-black uppercase tracking-wider flex items-center gap-1.5 leading-none m-0",children:[i.jsx(E2,{className:"text-[#a5c2ff]",size:15})," ",r("exploration_title")]}),i.jsx("p",{className:"text-slate-400 font-medium leading-normal m-0 text-xs text-slate-500",children:r("exploration_desc")}),i.jsxs("div",{className:"grid gap-2 text-[11px] font-mono leading-tight",children:[i.jsxs("div",{className:"flex justify-between p-2 rounded-lg bg-white/2 border border-white/5",children:[i.jsx("span",{className:"text-white",children:"ROBOT BASE"}),i.jsx("span",{className:"text-emerald-400 font-bold",children:"A_01"})]}),i.jsxs("div",{className:"flex justify-between p-2 rounded-lg bg-white/2 border border-white/5",children:[i.jsx("span",{className:"text-white",children:"SABLE GUERRERO"}),i.jsx("span",{className:"text-emerald-400 font-bold",children:"C_01"})]}),i.jsxs("div",{className:"flex justify-between p-2 rounded-lg bg-white/2 border border-white/5",children:[i.jsx("span",{className:"text-white",children:"ANDROIDE PLATINO"}),i.jsx("span",{className:"text-emerald-400 font-bold",children:"AA_01_PLATINUM"})]})]}),i.jsx("p",{className:"text-[10px] text-slate-500 leading-normal font-bold",children:r("exploration_tip")})]})]})]}),un&&i.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md",children:i.jsxs("div",{className:"bg-[#0b121f] border-2 border-emerald-500 rounded-[2.5rem] p-6 md:p-8 max-w-md w-full shadow-2xl relative select-text text-left",children:[i.jsx("div",{className:"w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-slate-950 mb-5 relative overflow-hidden shrink-0 border border-white/20",children:i.jsx(f2,{size:28})}),i.jsx("h3",{className:"text-white text-xl font-black uppercase tracking-tight m-0 text-left flex items-center gap-2",children:r("success_simulation_title")}),i.jsx("span",{className:"text-emerald-400 text-[10px] font-mono tracking-widest uppercase block mt-1 pb-3.5 border-b border-white/5",children:"Ref d-mem-offset-inject: SUCCESS"}),i.jsxs("div",{className:"flex flex-col gap-3 py-4 text-left text-xs text-slate-300",children:[i.jsxs("div",{className:"bg-white/2 rounded-xl p-3 border border-white/5",children:[i.jsx("span",{className:"text-slate-500 font-black text-[9px] block uppercase tracking-wider mb-1",children:r("detail_func_label")}),i.jsx("strong",{className:"text-white text-sm font-bold block",children:qs})]}),i.jsxs("div",{className:"flex flex-col gap-2 text-left",children:[i.jsx("span",{className:"text-emerald-400 font-black text-[9px] uppercase tracking-widest leading-none",children:r("success_simulation_desc_label")}),i.jsx("p",{className:"text-slate-400 font-medium leading-relaxed m-0 text-[11px]",children:r("success_simulation_desc_body")})]}),i.jsx("div",{className:"bg-yellow-brand/5 border-l-4 border-yellow-500 p-2.5 rounded text-[10px] text-slate-400 font-semibold leading-relaxed mt-2 text-left",children:r("success_simulation_clarification")})]}),i.jsx("button",{type:"button",onClick:()=>Ra(!1),className:"w-full py-4.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-black uppercase rounded-2xl transition-all cursor-pointer shadow-lg shadow-emerald-500/15",children:r("success_simulation_understand")})]})}),b&&i.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm",children:i.jsxs("div",{className:"bg-[#0b121f] border border-blue-brand/30 rounded-[2.5rem] p-6 md:p-8 max-w-md w-full shadow-2xl relative text-left",children:[i.jsxs("header",{className:"flex justify-between items-center pb-3 border-b border-white/5 mb-4 text-xs font-bold text-slate-500",children:[i.jsx("span",{className:"uppercase tracking-widest font-black text-slate-500",children:r("tutorial_running_item")}),i.jsx("span",{children:r("tutorial_step_label").replace("{step}",String(k+1)).replace("{total}",String(pa.length))})]}),i.jsxs("div",{className:"text-left py-2 flex flex-col gap-3",children:[i.jsxs("div",{className:"flex items-center gap-2.5",children:[i.jsx("span",{className:"w-6.5 h-6.5 rounded-full bg-blue-brand text-white flex items-center justify-center text-xs font-mono font-black border border-white/20 shrink-0",children:k+1}),i.jsx("h3",{className:"text-white text-base font-black uppercase tracking-tight m-0",children:pa[k].title})]}),i.jsx("p",{className:"text-slate-300 leading-relaxed text-xs leading-relaxed font-semibold m-0 mt-2 bg-slate-900/60 p-4 border border-white/5 rounded-2xl",children:pa[k].text})]}),i.jsxs("div",{className:"flex gap-2.5 mt-6 justify-end",children:[i.jsx("button",{type:"button",disabled:k===0,onClick:()=>G(V=>Math.max(0,V-1)),className:"py-3 px-4 rounded-xl text-xs font-black uppercase bg-slate-900 border border-white/10 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer",children:r("tutorial_prev")}),k<pa.length-1?i.jsx("button",{type:"button",onClick:()=>G(V=>V+1),className:"py-3 px-5 rounded-xl text-xs font-black uppercase bg-emerald-500 text-slate-950 hover:brightness-110 cursor-pointer",children:r("tutorial_next")}):i.jsx("button",{type:"button",onClick:()=>x(!1),className:"py-3 px-5 rounded-xl text-xs font-black uppercase bg-blue-brand text-white hover:brightness-110 cursor-pointer",children:r("tutorial_finish")})]})]})})]})}const Hf={download_center:{LATAM:"Centro de descargas",USD:"Download Center",PT:"Centro de Downloads",FR:"Centre de téléchargement",DE:"Download-Center"},downloads:{LATAM:"DESCARGAS",USD:"DOWNLOADS",PT:"DOWNLOADS",FR:"TÉLÉCHARGEMENTS",DE:"DOWNLOADS"},tools_desc:{LATAM:"Herramientas y recomendaciones según tu caso.",USD:"Tools and recommendations tailored to your setup.",PT:"Ferramentas e recomendações adaptadas ao seu caso.",FR:"Outils et recommandations adaptés à votre cas.",DE:"Werkzeuge und Empfehlungen für Ihren Fall."},essential_resources:{LATAM:"Recursos esenciales",USD:"Essential Resources",PT:"Recursos Essenciais",FR:"Ressources essentielles",DE:"Grundlegende Ressourcen"},download_btn:{LATAM:"Descargar",USD:"Download",PT:"Descarregar",FR:"Télécharger",DE:"Herunterladen"},gg_official:{LATAM:"GameGuardian (fuente oficial)",USD:"GameGuardian (Official Source)",PT:"GameGuardian (Fonte Oficial)",FR:"GameGuardian (Source officielle)",DE:"GameGuardian (Offizielle Quelle)"},gg_desc:{LATAM:"Evita APKs modificados. Descarga siempre desde el foro oficial. Normalmente requiere root real o virtual.",USD:"Avoid modified APKs. Always download from the official forum. Usually requires real or virtual root.",PT:"Evite APKs modificados. Sempre baixe do fórum oficial. Geralmente requer root real ou virtual.",FR:"Évitez les APK modifiés. Téléchargez toujours depuis le forum officiel. Nécessite généralement un accès root réel ou virtuel.",DE:"Vermeiden Sie modifizierte APKs. Laden Sie immer aus dem offiziellen Forum herunter. Erfordert normalerweise echten oder virtuellen Root."},mobile_vms:{LATAM:"Móvil: máquinas virtuales",USD:"Mobile: Virtual Machines",PT:"Celular: Máquinas Virtuais",FR:"Mobile : Machines virtuelles",DE:"Mobil: Virtuelle Maschinen"},pc_emulators:{LATAM:"PC: emuladores Android",USD:"PC: Android Emulators",PT:"PC: Emuladores Android",FR:"PC : Émulateurs Android",DE:"PC: Android-Emulatoren"},official_site:{LATAM:"Sitio oficial",USD:"Official Site",PT:"Site Oficial",FR:"Site officiel",DE:"Offizielle Website"},warn_title:{LATAM:"Usa bajo tu responsabilidad",USD:"Use at your own risk",PT:"Use por sua conta e risco",FR:"Utilisez à vos risques et périls",DE:"Nutzung auf eigene Gefahr"},warn_desc:{LATAM:"Esta conversión conserva la sección informativa del proyecto original.",USD:"This content is for information purposes only within this project.",PT:"Esta conversão mantém a seção informativa do projeto original.",FR:"Cette conversion conserve la section informative du projet d'origine.",DE:"Diese Konvertierung behält den informativen Teil des Originalprojekts bei."},lua_title:{LATAM:"Script LUA",USD:"Script LUA",PT:"Script LUA",FR:"Script LUA",DE:"Script LUA"},lua_desc:{LATAM:"Script definitivo para GameGuardian. Compatible con TodoCS.",USD:"Ultimate GameGuardian script. Compatible with TodoCS.",PT:"Script definitivo para GameGuardian. Compatível com TodoCS.",FR:"Script définitif pour GameGuardian. Compatible avec TodoCS.",DE:"Ultimatives Script für GameGuardian. Kompatibel mit TodoCS."},script_password:{LATAM:"Contraseña Script:",USD:"Script Password:",PT:"Senha do Script:",FR:"Mot de passe du script :",DE:"Script-Passwort:"},copy_success:{LATAM:"¡Copia Exitosa!",USD:"Copied!",PT:"Copiado!",FR:"Copié !",DE:"Kopiert!"},done:{LATAM:"Listo",USD:"Done",PT:"Pronto",FR:"Prêt",DE:"Fertig"},copy:{LATAM:"Copiar",USD:"Copy",PT:"Copiar",FR:"Copier",DE:"Kopieren"},interactive_guide_btn:{LATAM:"Ver Guía Interactiva",USD:"View Interactive Guide",PT:"Ver Guia Interativo",FR:"Voir le guide interactif",DE:"Interaktiven Guide ansehen"},close_console:{LATAM:"Cerrar Consola ✕",USD:"Close Console ✕",PT:"Fechar Console ✕",FR:"Fermer la console ✕",DE:"Konsole schließen ✕"},demo_mode:{LATAM:"Modo Demostración Académica",USD:"Academic Demonstration Mode",PT:"Modo de Demonstração Acadêmica",FR:"Mode de démonstration académique",DE:"Akademischer Demomodus"},txt_title:{LATAM:"Lista TXT",USD:"TXT List",PT:"Lista TXT",FR:"Liste TXT",DE:"TXT-Liste"},txt_desc:{LATAM:"Todos los códigos en formato de texto plano.",USD:"All codes in plain text format.",PT:"Todos os códigos em formato de texto simples.",FR:"Tous les codes au format texte brut.",DE:"Alle Codes im Klartextformat."},xlsx_title:{LATAM:"Lista Excel",USD:"Excel List",PT:"Lista Excel",FR:"Liste Excel",DE:"Excel-Liste"},xlsx_desc:{LATAM:"Base de datos completa en .xlsx para filtrado avanzado.",USD:"Complete database in .xlsx for advanced filtering.",PT:"Banco de dados completo em .xlsx para filtragem avançada.",FR:"Base de données complète en .xlsx pour un filtrage avancé.",DE:"Vollständige Datenbank im .xlsx-Format für erweitertes Filtern."},texture_title:{LATAM:"Textura MGG",USD:"MGG Texture",PT:"Textura MGG",FR:"Texture MGG",DE:"MGG-Textur"},texture_desc:{LATAM:"Nuevas texturas para la terraza, arenas e iconos.",USD:"Visual overhaul for hall, arenas, and icons.",PT:"Novas texturas para o terraço, arenas e ícones.",FR:"Nouvelles textures pour le hall, les arènes et les icônes.",DE:"Neue Texturen für die Terrasse, Arenen und Symbole."},vphone_desc:{LATAM:"Mejor opción para root virtual y compatibilidad con GG.",USD:"Best option for virtual root and GG compatibility.",PT:"Melhor opção para root virtual e compatibilidade com GG.",FR:"Option idéale pour le root virtuel et la compatibilité avec GG.",DE:"Beste Option für virtuellen Root und GG-Kompatibilität."},vmos_desc:{LATAM:"Mucha comunidad. El root y la compatibilidad cambian por versión.",USD:"Large community. Root and compatibility vary by version.",PT:"Grande comunidade. O root e a compatibilidade variam de acordo com a versão.",FR:"Grande communauté. Le root et la compatibilité varient selon la version.",DE:"Große Community. Root und Kompatibilität variieren je nach Version."},vmaster_desc:{LATAM:"Muy buena para separar apps, con root limitado.",USD:"Great for separating apps, limited root.",PT:"Muito boa para separar apps, com root limitado.",FR:"Très utile pour isoler les applications, avec root limité.",DE:"Sehr gut zum Trennen von Apps, mit eingeschränktem Root."},ldplayer_desc:{LATAM:"Equilibrio entre rendimiento y estabilidad.",USD:"Balance between performance and stability.",PT:"Equilíbrio entre desempenho e estabilidade.",FR:"Excellent équilibre entre performances et stabilité.",DE:"Gleichgewicht zwischen Leistung und Stabilität."},bluestacks_desc:{LATAM:"Alta compatibilidad para juegos.",USD:"High compatibility for games.",PT:"Alta compatibilidade para jogos.",FR:"Grande compatibilité avec les jeux.",DE:"Hohe Spielekompatibilität."},nox_desc:{LATAM:"Ideal para multi-instancia y control avanzado.",USD:"Ideal for multi-instance and advanced control.",PT:"Ideal para multi-instâncias e controle avançado.",FR:"Idéal pour le multi-instance et le contrôle avancé.",DE:"Ideal für Multi-Instanz und erweiterte Steuerung."}};function c5(){const{region:a}=St(),[s,l]=Kh.useState(!1),[r,d]=Kh.useState(!1),p=b=>{var x,k;return((x=Hf[b])==null?void 0:x[a])||((k=Hf[b])==null?void 0:k.USD)||""},g=[{title:p("lua_title"),desc:p("lua_desc"),iconName:j2,href:"https://www.mediafire.com/file/707zeudrwz6gv8j/Script-Actualizada-LC.lua/file",download:"SCIRPT-NUEVA.V2.lua"},{title:p("txt_title"),desc:p("txt_desc"),iconName:L2,href:"https://www.mediafire.com/file/2fg3dtp4nhay3jw/lista-codigos.txt/file",download:"lista-codigos.txt"},{title:p("xlsx_title"),desc:p("xlsx_desc"),iconName:_k,href:"https://www.mediafire.com/file/n9l7kylzrpgiplq/lista-codigos.xlsx/file",download:"lista-codigos.xlsx"},{title:p("texture_title"),desc:p("texture_desc"),iconName:Pf,href:"https://www.mediafire.com/file/gllbbith3a6i56a/Mutants_Genetic_Gladiators_Mod.apk/file",download:"Mutants_Genetic_Gladiators_Mod.apk"}],h=[["VPhoneOS",p("vphone_desc"),"https://vphoneos.com/"],["VMOS",p("vmos_desc"),""],["Virtual Master",p("vmaster_desc"),""]],f=[["LDPlayer",p("ldplayer_desc"),"https://www.ldplayer.net/"],["BlueStacks",p("bluestacks_desc"),""],["NoxPlayer",p("nox_desc"),""]];return i.jsxs("div",{className:"flex flex-col gap-6 pb-20",children:[i.jsxs("section",{className:"relative hero !p-10 md:!p-24 overflow-hidden rounded-[3rem]",children:[i.jsx("div",{className:"absolute inset-0 opacity-10 bg-grid-slate-900/[0.1] pointer-events-none"}),i.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-brand/20 to-transparent -rotate-12 transform translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"}),i.jsxs("div",{className:"relative z-10",children:[i.jsxs("div",{className:"eyebrow bg-white/5 border-white/10 px-4 py-1 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-md",children:[i.jsx(Uf,{size:14,className:"text-blue-brand-2"}),i.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:p("download_center")})]}),i.jsxs("h1",{className:"text-4xl md:text-8xl lg:text-9xl font-black mt-4 mb-6 uppercase tracking-tighter leading-[0.8] md:leading-[0.85] text-white",children:[p("downloads")," ",i.jsx("br",{}),i.jsxs("span",{className:"text-blue-brand relative",children:["MÓVIL / PC",i.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-1 bg-white/10 rounded-full"})]})]}),i.jsx("p",{className:"text-slate-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 opacity-90 leading-relaxed font-medium",children:p("tools_desc")})]})]}),i.jsx(ua,{}),i.jsxs("section",{className:"flex flex-col gap-4",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"h-px flex-1 bg-white/5"}),i.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight m-0 text-white",children:p("essential_resources")}),i.jsx("div",{className:"h-px flex-1 bg-white/5"})]}),i.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:g.map((b,x)=>{const k=b.iconName,G=b.title==="Textura MGG"||b.title==="MGG Texture";return i.jsxs("article",{className:`panel flex flex-col gap-4 relative transition-all duration-300 border ${G?"glow-card border-blue-brand/40 bg-blue-brand/5":"hover:border-white/10"}`,children:[G&&i.jsx("span",{className:"badge-new uppercase",children:"New"}),i.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center ${G?"bg-blue-brand text-white":"bg-white/8 text-blue-brand-2"}`,children:i.jsx(k,{size:24})}),i.jsxs("div",{children:[i.jsx("h3",{className:`text-xl font-bold tracking-tight mb-2 ${G?"text-blue-brand-2":""}`,children:b.title}),i.jsx("p",{className:"text-muted text-sm m-0 min-h-[40px] leading-relaxed",children:b.desc})]}),b.href.includes(".lua")&&i.jsxs("div",{className:"mt-1 flex flex-col gap-2.5",children:[i.jsxs("div",{className:"p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-2 text-[11px]",children:[i.jsxs("div",{className:"flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider",children:[i.jsx("span",{children:p("script_password")}),s&&i.jsx("span",{className:"text-[#14a44d] font-black animate-pulse",children:p("copy_success")})]}),i.jsxs("div",{className:"flex items-center justify-between gap-1.5 bg-white/5 p-1 rounded-lg",children:[i.jsx("code",{className:"text-blue-brand-2 px-1.5 py-0.5 rounded font-mono font-black text-xs select-all",children:"SMITH-NEXUS-2026"}),i.jsx("button",{type:"button",onClick:y=>{y.preventDefault(),navigator.clipboard.writeText("SMITH-NEXUS-2026"),l(!0),setTimeout(()=>l(!1),2e3)},className:"py-1 px-2 rounded-md text-[9px] uppercase font-black bg-blue-brand text-white hover:brightness-110 active:scale-95 transition-all cursor-pointer shrink-0",children:p(s?"done":"copy")})]})]}),i.jsxs("button",{type:"button",onClick:()=>d(!0),className:"w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-black uppercase transition-all duration-200 active:scale-95 cursor-pointer shadow-lg",children:[i.jsxs("span",{className:"flex h-2 w-2 relative shrink-0",children:[i.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),i.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),i.jsx("span",{children:p("interactive_guide_btn")})]})]}),i.jsxs("a",{className:`btn w-full relative overflow-hidden group transition-all ${G?"bg-white text-black hover:bg-blue-brand-2 hover:text-white border-transparent":"btn-primary"}`,href:b.href,target:"_blank",rel:"noopener noreferrer",children:[i.jsx("span",{className:"font-black uppercase",children:p("download_btn")}),i.jsx("span",{className:"download-shine","aria-hidden":"true"})]})]},x)})})]}),i.jsxs("section",{className:"panel flex gap-4 items-center transition-all border border-white/10 bg-white/[0.02]",children:[i.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-white/8 text-green-brand",children:i.jsx(mk,{size:24})}),i.jsxs("div",{className:"flex-1",children:[i.jsx("h3",{className:"text-lg font-bold tracking-tight mb-1 text-white font-black",children:p("gg_official")}),i.jsx("p",{className:"text-muted text-sm m-0",children:p("gg_desc")})]}),i.jsxs("div",{className:"hidden lg:flex gap-2",children:[i.jsx("span",{className:"px-3 py-1.5 rounded-full text-[12px] font-bold bg-white/8 text-blue-100",children:"Root real"}),i.jsx("span",{className:"px-3 py-1.5 rounded-full text-[12px] font-bold bg-white/8 text-blue-100",children:"Root virtual"})]})]}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[i.jsxs("section",{className:"panel flex flex-col gap-5 border border-white/10 bg-gradient-to-br from-white/[0.01] to-transparent",children:[i.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white uppercase tracking-tighter",children:p("mobile_vms")}),i.jsx("div",{className:"grid gap-4",children:h.map(([b,x,k],G)=>i.jsxs("div",{className:"p-4 rounded-xl border border-white/5 bg-white/2 hover:border-white/10 transition-colors",children:[i.jsx("h4",{className:"font-bold mb-1 text-white",children:b}),i.jsx("p",{className:"text-muted text-sm mb-3 leading-relaxed",children:x}),k?i.jsxs("a",{href:k,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm text-xs py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black",children:[i.jsx(oa,{size:14}),i.jsx("span",{children:p("official_site")})]}):i.jsxs("button",{disabled:!0,className:"btn btn-sm text-xs py-2 opacity-50 cursor-not-allowed",children:[i.jsx(oa,{size:14}),i.jsx("span",{children:p("official_site")})]})]},G))})]}),i.jsxs("section",{className:"panel flex flex-col gap-5 border border-white/10 bg-gradient-to-br from-white/[0.01] to-transparent",children:[i.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white uppercase tracking-tighter",children:p("pc_emulators")}),i.jsx("div",{className:"grid gap-4",children:f.map(([b,x,k],G)=>i.jsxs("div",{className:"p-4 rounded-xl border border-white/5 bg-white/2 hover:border-white/10 transition-colors",children:[i.jsx("h4",{className:"font-bold mb-1 text-white",children:b}),i.jsx("p",{className:"text-muted text-sm mb-3 leading-relaxed",children:x}),k?i.jsxs("a",{href:k,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm text-xs py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black",children:[i.jsx(oa,{size:14}),i.jsx("span",{children:p("official_site")})]}):i.jsxs("button",{disabled:!0,className:"btn btn-sm text-xs py-2 opacity-50 cursor-not-allowed",children:[i.jsx(oa,{size:14}),i.jsx("span",{children:p("official_site")})]})]},G))})]})]}),i.jsxs("section",{className:"panel flex gap-4 items-start border-l-4 bg-yellow-brand/5 border-yellow-brand",children:[i.jsx(yk,{size:24,className:"text-yellow-brand shrink-0 mt-1"}),i.jsxs("div",{children:[i.jsx("strong",{className:"block text-white mb-1",children:p("warn_title")}),i.jsx("p",{className:"text-muted text-sm m-0",children:p("warn_desc")})]})]}),r&&i.jsx("div",{className:"fixed inset-0 z-[110] flex items-center justify-center p-0 sm:p-4 md:p-6 bg-slate-950/95 backdrop-blur-md overflow-hidden animate-fade-in text-left text-slate-300",children:i.jsxs("div",{className:"relative w-full h-full sm:h-full max-w-6xl bg-[#070b14] border-0 sm:border-2 border-white/10 rounded-none sm:rounded-[2.5rem] shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col sm:max-h-[92vh] overflow-hidden select-none",children:[i.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/20 via-emerald-500 to-emerald-500/20 opacity-60"}),i.jsxs("header",{className:"flex items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4.5 bg-[#0b1220] border-b border-white/5 shrink-0 relative z-20",children:[i.jsxs("div",{className:"flex items-center gap-2.5",children:[i.jsx("div",{className:"w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse border border-emerald-400/40"}),i.jsxs("div",{className:"flex flex-col text-left",children:[i.jsx("span",{className:"text-[10px] sm:text-xs font-black text-white uppercase tracking-wider leading-none",children:"NEXUS INTERFACE SIMULATOR"}),i.jsx("span",{className:"text-[8px] sm:text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-bold",children:"Consola Educativa de Smith Luque"})]})]}),i.jsxs("button",{type:"button",onClick:()=>d(!1),className:"py-1.5 px-3 sm:py-2.5 sm:px-5 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase text-red-500 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 transition-all duration-200 cursor-pointer active:scale-95 flex items-center gap-1 shrink-0",children:[i.jsx("span",{className:"sm:hidden",children:"✕"}),i.jsx("span",{className:"hidden sm:inline",children:p("close_console")})]})]}),i.jsx("div",{className:"flex-1 overflow-y-auto p-3 sm:p-6 md:p-8 scrollbar-none relative z-10 bg-slate-950/40",children:i.jsx(Dx,{isEmbedded:!0,onClose:()=>d(!1)})}),i.jsxs("footer",{className:"px-4 py-2.5 sm:px-6 sm:py-3 bg-[#050a14] border-t border-white/5 shrink-0 flex items-center justify-between text-[8px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider",children:[i.jsx("span",{children:p("demo_mode")}),i.jsx("span",{children:"SMITH-NEXUS-2026"})]})]})})]})}const Lf={legal_info:{LATAM:"Información Legal",USD:"Legal Information",PT:"Informação Legal",FR:"Informations légales",DE:"Rechtliche Informationen"},terms_conditions1:{LATAM:"TÉRMINOS Y ",USD:"TERMS & ",PT:"TERMOS E ",FR:"CONDITIONS & ",DE:"ALLGEMEINE "},terms_conditions2:{LATAM:"CONDICIONES",USD:"CONDITIONS",PT:"CONDIÇÕES",FR:"TERMES",DE:"GESCHÄFTSBEDINGUNGEN"},read_carefully:{LATAM:"Por favor lee atentamente las normas y condiciones de uso de Mutodex MGG.",USD:"Please read the rules and conditions of use for Mutodex MGG carefully.",PT:"Por favor, leia atentamente as regras e condições de uso do Mutodex MGG.",FR:"Veuillez lire attentivement les règles et conditions d'utilisation de Mutodex MGG.",DE:"Bitte lesen Sie die Regeln und Nutzungsbedingungen für Mutodex MGG sorgfältig durch."},rights_reserved:{LATAM:"Derechos Reservados",USD:"Rights Reserved",PT:"Direitos Reservados",FR:"Droits réserves",DE:"Rechte vorbehalten"},rights_desc:{LATAM:"Todos los derechos de diseño, desarrollo y marca personal relacionada con Mutodex MGG están reservados a Smith Luque. Cualquier reproducción parcial o total del contenido multimedia o código fuente sin autorización previa está prohibida.",USD:"All rights of design, development, and personal brand related to Mutodex MGG are reserved by Smith Luque. Any partial or total reproduction of multimedia content or source code without prior authorization is prohibited.",PT:"Todos os direitos de design, desenvolvimento e marca pessoal relacionados ao Mutodex MGG são reservados por Smith Luque. Qualquer reprodução parcial ou total do conteúdo multimídia ou código-fonte sem autorização prévia é proibida.",FR:"Tous les droits de conception, de développement et de marque personnelle liés à Mutodex MGG sont réservés par Smith Luque. Toute reproduction partielle ou totale du contenu multimédia ou du code source sans autorisation préalable est interdite.",DE:"Alle Design-, Entwicklungs- und Markenrechte im Zusammenhang mit Mutodex MGG sind Smith Luque vorbehalten. Jegliche teilweise oder vollständige Vervielfältigung von Multimedia-Inhalten oder Quellcode ohne vorherige Genehmigung ist untersagt."},risks_liability:{LATAM:"Riesgos y Responsabilidad",USD:"Risks & Liability",PT:"Riscos e Responsabilidade",FR:"Risques et responsabilité",DE:"Risiken & Haftung"},risks_desc:{LATAM:"El uso de scripts, hacks o herramientas de terceros (como Game Guardian) en Mutants Genetic Gladiators conlleva un RIESGO CRÍTICO DE BANEO de tu cuenta por parte de los desarrolladores oficiales del juego (Kobojo/Syntamon).",USD:"The use of scripts, hacks, or third-party tools (such as Game Guardian) in Mutants Genetic Gladiators carries a CRITICAL RISK OF BANNING of your account by the official game developers (Kobojo/Syntamon).",PT:"O uso de scripts, hacks ou ferramentas de terceiros (como Game Guardian) em Mutants Genetic Gladiators acarreta um RISCO CRÍTICO DE BANIMENTO de sua conta pelos desenvolvedores oficiais do jogo (Kobojo/Syntamon).",FR:"L'utilisation de scripts, de hacks ou d'outils tiers (tels que Game Guardian) dans Mutants Genetic Gladiators comporte un RISQUE CRITIQUE DE BANNISSEMENT de votre compte par les développeurs officiels du jeu (Kobojo/Syntamon).",DE:"Die Verwendung von Skripten, Hacks oder Tools von Drittanbietern (wie Game Guardian) in Mutants Genetic Gladiators birgt ein KRITISCHES BAN-RISIKO Ihres Kontos durch die offiziellen Spielentwickler (Kobojo/Syntamon)."},risk_bullet1:{LATAM:"Smith Luque no se hace responsable por pérdidas de cuentas.",USD:"Smith Luque is not responsible for any banned or lost accounts.",PT:"Smith Luque não é responsável por contas perdidas ou banidas.",FR:"Smith Luque n'est pas responsable des comptes bannis ou perdus.",DE:"Smith Luque ist nicht verantwortlich für gesperrte oder verlorene Konten."},risk_bullet2:{LATAM:"El uso del contenido de esta web es bajo tu propio riesgo.",USD:"Sourcing and testing scripts or utilizing codes is fully at your own risk.",PT:"O uso do conteúdo deste site é de sua total conta e risco.",FR:"L'utilisation du contenu de ce site se fait entièrement à vos risques et périls.",DE:"Die Verwendung der Inhalte dieser Website erfolgt auf eigene Gefahr."},risk_bullet3:{LATAM:"Recomendamos siempre probar en cuentas secundarias.",USD:"We highly recommend testing any external tools on secondary accounts first.",PT:"Recomendamos sempre testar ferramentas externas em contas secundárias primeiro.",FR:"Nous vous recommandons fortement de tester d'abord les outils externes sur des comptes secondaires.",DE:"Wir empfehlen dringend, externe Tools zuerst auf Zweitkonten zu testen."},purpose_title:{LATAM:"Propósito de la Web",USD:"Purpose of the Website",PT:"Propósito do Website",FR:"But du site internet",DE:"Zweck der Website"},purpose_desc:{LATAM:"Esta plataforma ha sido creada exclusivamente con fines de aprendizaje, investigación y entretenimiento. Nuestra misión es proporcionar una base de datos organizada para la comunidad de MGG y facilitar el acceso a la información técnica del juego.",USD:"This platform has been created exclusively for learning, research, and entertainment purposes. Our mission is to provide an organized, fast database for the MGG community and simplify secure access to the technical parameters of the game.",PT:"Esta plataforma foi criada exclusivamente para fins de aprendizagem, pesquisa e entretenimento. Nossa missão é fornecer um banco de dados organizado para a comunidade MGG e facilitar o acesso seguro aos parâmetros técnicos do jogo.",FR:"Cette plateforme a été créée exclusivement à des fins d'apprentissage, de recherche et de divertissement. Notre mission est de fournir une base de données organisée et rapide pour la communauté MGG et de simplifier l'accès sécurisé aux paramètres techniques du jeu.",DE:"Diese Plattform wurde ausschließlich zu Lern-, Forschungs- und Unterhaltungszwecken erstellt. Unsere Mission ist es, eine organisierte, schnelle Datenbank für die MGG-Community bereitzustellen und den sicheren Zugriff auf die technischen Parameter des Spiels zu vereinfachen."},benefits_title:{LATAM:"Beneficios y Utilidades",USD:"Utility & Benefits",PT:"Utilidade e Benefícios",FR:"Avantages et utilités",DE:"Nutzen & Vorteile"},benefit_bullet1:{LATAM:"Acceso instantáneo a IDs de mutantes actualizados.",USD:"Instant, secure access to updated mutant identifiers.",PT:"Acesso instantâneo e seguro aos identificadores de mutantes atualizados.",FR:"Accès instantané et sécurisé aux identifiants mis à jour des mutants.",DE:"Sofortiger, sicherer Zugriff auf aktualisierte Mutantenkennungen."},benefit_bullet2:{LATAM:"Cálculo preciso de recursos para la calculadora EVO.",USD:"Precise calculation of upgrade resources in EVO calculator.",PT:"Cálculo preciso de recursos na calculadora de EVO.",FR:"Calcul précis des ressources d'amélioration dans le calculateur EVO.",DE:"Präzise Berechnung von Upgrade-Ressourcen im EVO-Rechner."},benefit_bullet3:{LATAM:"Sincronización con el blog oficial de Mutodex.",USD:"Real-time linkups with the official Mutodex blog system.",PT:"Links em tempo real com o sistema de blog oficial do Mutodex.",FR:"Liaisons en temps réel avec le système de blog officiel de Mutodex.",DE:"Echtzeit-Verknüpfungen mit dem offiziellen Mutodex-Blog-System."},benefit_bullet4:{LATAM:"Servicios de ayuda y soporte comunitario.",USD:"Group discussion links and active community assistance.",PT:"Links de discussões de grupo e assistência ativa da comunidade.",FR:"Liens de discussion de groupe et assistance communautaire active.",DE:"Gruppen-Diskussionslinks und aktive Unterstützung der Community."},inquiries:{LATAM:"Contacto",USD:"Inquiries",PT:"Dúvidas",FR:"Demandes",DE:"Anfragen"},inquiries_desc:{LATAM:"Si tienes dudas sobre estos términos, puedes contactarme vía WhatsApp.",USD:"If you have any questions or concern regarding these policies, feel free to send a message on WhatsApp.",PT:"Se você tiver alguma dúvida ou preocupação sobre estas políticas, sinta-se à vontade para enviar uma mensagem no WhatsApp.",FR:"Si vous avez des questions ou des préoccupations concernant ces politiques, n'hésitez pas à envoyer un message sur WhatsApp.",DE:"Wenn Sie Fragen oder Bedenken bezüglich dieser Richtlinien haben, können Sie uns gerne eine Nachricht über WhatsApp senden."},get_support:{LATAM:"Consultar ayuda",USD:"Get Support",PT:"Obter Suporte",FR:"Obtenir de l'aide",DE:"Support anfordern"},last_updated:{LATAM:"Última actualización: 12 de Mayo, 2026. Al navegar por este sitio, aceptas estos términos automáticamente.",USD:"Last updated: May 12, 2026. By navigating this site, you automatically accept these terms.",PT:"Última atualização: 12 de maio de 2026. Ao navegar neste site, você aceita automaticamente estes termos.",FR:"Dernière mise à jour : 12 mai 2026. En naviguant sur ce site, vous acceptez automatiquement ces conditions.",DE:"Zuletzt aktualisiert: 12. Mai 2026. Durch das Navigieren auf dieser Website akzeptieren Sie diese Bedingungen automatisch."}};function u5(){const{region:a}=St(),s=l=>{var r,d;return((r=Lf[l])==null?void 0:r[a])||((d=Lf[l])==null?void 0:d.USD)||""};return i.jsxs("div",{className:"flex flex-col gap-6",children:[i.jsxs("section",{className:"hero !p-6 md:!p-12",children:[i.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[i.jsx(lk,{size:14}),i.jsx("span",{children:s("legal_info")})]}),i.jsxs("h1",{className:"text-3xl md:text-5xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[1]",children:[s("terms_conditions1"),i.jsx("span",{className:"text-blue-brand-2",children:s("terms_conditions2")})]}),i.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:s("read_carefully")})]}),i.jsx(ua,{}),i.jsxs("div",{className:"grid md:grid-cols-[1fr_0.4fr] gap-6 items-start",children:[i.jsxs("div",{className:"flex flex-col gap-6",children:[i.jsxs("section",{className:"panel flex flex-col gap-5 p-6 md:p-8",children:[i.jsxs("div",{className:"flex items-center gap-3 border-b border-line pb-4 mb-2",children:[i.jsx(Er,{className:"text-blue-brand-2",size:24}),i.jsx("h2",{className:"m-0 text-xl font-bold uppercase tracking-tight",children:s("rights_reserved")})]}),i.jsx("p",{className:"text-slate-300 leading-relaxed",children:s("rights_desc")})]}),i.jsxs("section",{className:"panel flex flex-col gap-5 p-6 md:p-8 border-l-4 border-red-brand bg-red-brand/5",children:[i.jsxs("div",{className:"flex items-center gap-3 border-b border-white/5 pb-4 mb-2",children:[i.jsx(Ff,{className:"text-red-brand",size:24}),i.jsx("h2",{className:"m-0 text-xl font-bold uppercase tracking-tight text-white",children:s("risks_liability")})]}),i.jsxs("div",{className:"space-y-4",children:[i.jsx("p",{className:"text-slate-300 leading-relaxed m-0",children:s("risks_desc")}),i.jsxs("ul",{className:"grid gap-2 text-sm text-slate-400 list-disc pl-5",children:[i.jsx("li",{children:s("risk_bullet1")}),i.jsx("li",{children:s("risk_bullet2")}),i.jsx("li",{children:s("risk_bullet3")})]})]})]}),i.jsxs("section",{className:"panel flex flex-col gap-5 p-6 md:p-8",children:[i.jsxs("div",{className:"flex items-center gap-3 border-b border-line pb-4 mb-2",children:[i.jsx(wr,{className:"text-blue-brand-2",size:24}),i.jsx("h2",{className:"m-0 text-xl font-bold uppercase tracking-tight",children:s("purpose_title")})]}),i.jsxs("div",{className:"space-y-4",children:[i.jsx("p",{className:"text-slate-300 leading-relaxed",children:s("purpose_desc")}),i.jsxs("div",{className:"bg-white/5 p-4 rounded-xl",children:[i.jsx("h3",{className:"text-sm font-bold text-blue-brand-2 mb-2 uppercase",children:s("benefits_title")}),i.jsxs("ul",{className:"grid gap-2 text-xs md:text-sm text-slate-400",children:[i.jsxs("li",{className:"flex gap-2",children:[i.jsx("span",{children:"•"})," ",i.jsx("span",{children:s("benefit_bullet1")})]}),i.jsxs("li",{className:"flex gap-2",children:[i.jsx("span",{children:"•"})," ",i.jsx("span",{children:s("benefit_bullet2")})]}),i.jsxs("li",{className:"flex gap-2",children:[i.jsx("span",{children:"•"})," ",i.jsx("span",{children:s("benefit_bullet3")})]}),i.jsxs("li",{className:"flex gap-2",children:[i.jsx("span",{children:"•"})," ",i.jsx("span",{children:s("benefit_bullet4")})]})]})]})]})]})]}),i.jsxs("aside",{className:"flex flex-col gap-4",children:[i.jsxs("div",{className:"panel p-5 bg-blue-brand/5 border-blue-brand/20",children:[i.jsx("h3",{className:"text-xs font-bold text-blue-brand-2 uppercase mb-3",children:s("inquiries")}),i.jsx("p",{className:"text-[11px] text-muted leading-relaxed mb-4",children:s("inquiries_desc")}),i.jsx("a",{href:"https://wa.me/51906328464",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary w-full text-xs py-2.5",children:s("get_support")})]}),i.jsx("p",{className:"text-[10px] text-center text-muted px-2",children:s("last_updated")})]})]})]})}function d5(){const[a,s]=O.useState(window.location.hash.replace(/^#/,"")||"/"),[l,r]=O.useState(navigator.onLine);O.useEffect(()=>{const g=()=>{s(window.location.hash.replace(/^#/,"")||"/")},h=()=>r(!0),f=()=>r(!1);return window.addEventListener("hashchange",g),window.addEventListener("online",h),window.addEventListener("offline",f),()=>{window.removeEventListener("hashchange",g),window.removeEventListener("online",h),window.removeEventListener("offline",f)}},[]);const d=g=>{window.location.hash=g},p=()=>{switch(a){case"/":return i.jsx(wf,{});case"/novedades":return i.jsx($A,{});case"/servicios":return i.jsx(e5,{});case"/evo":return i.jsx(a5,{});case"/otros":return i.jsx(o5,{});case"/guia":return i.jsx(i5,{});case"/tutoriales":return i.jsx(r5,{});case"/descargas":return i.jsx(c5,{});case"/terminos":return i.jsx(u5,{});case"/guia-script":return i.jsx(Dx,{});default:return i.jsx(wf,{})}};return i.jsx(wA,{currentPath:a,onNavigate:d,isOnline:l,children:p()})}l2.createRoot(document.getElementById("root")).render(i.jsx(O.StrictMode,{children:i.jsx(EA,{children:i.jsx(d5,{})})}));
