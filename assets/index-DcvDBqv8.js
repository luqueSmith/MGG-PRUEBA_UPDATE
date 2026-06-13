(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function l(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function r(d){if(d.ep)return;d.ep=!0;const p=l(d);fetch(d.href,p)}})();function M2(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var bu={exports:{}},Ni={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nb;function A2(){if(nb)return Ni;nb=1;var n=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function l(r,d,p){var g=null;if(p!==void 0&&(g=""+p),d.key!==void 0&&(g=""+d.key),"key"in d){p={};for(var b in d)b!=="key"&&(p[b]=d[b])}else p=d;return d=p.ref,{$$typeof:n,type:r,key:g,ref:d!==void 0?d:null,props:p}}return Ni.Fragment=s,Ni.jsx=l,Ni.jsxs=l,Ni}var sb;function T2(){return sb||(sb=1,bu.exports=A2()),bu.exports}var i=T2(),fu={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ib;function j2(){if(ib)return he;ib=1;var n=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function G(A){return A===null||typeof A!="object"?null:(A=y&&A[y]||A["@@iterator"],typeof A=="function"?A:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function N(A,P,te){this.props=A,this.context=P,this.refs=T,this.updater=te||v}N.prototype.isReactComponent={},N.prototype.setState=function(A,P){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,P,"setState")},N.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function L(){}L.prototype=N.prototype;function E(A,P,te){this.props=A,this.context=P,this.refs=T,this.updater=te||v}var V=E.prototype=new L;V.constructor=E,S(V,N.prototype),V.isPureReactComponent=!0;var K=Array.isArray;function J(){}var R={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function F(A,P,te){var oe=te.ref;return{$$typeof:n,type:A,key:P,ref:oe!==void 0?oe:null,props:te}}function B(A,P){return F(A.type,P,A.props)}function Z(A){return typeof A=="object"&&A!==null&&A.$$typeof===n}function ae(A){var P={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(te){return P[te]})}var ee=/\/+/g;function Q(A,P){return typeof A=="object"&&A!==null&&A.key!=null?ae(""+A.key):P.toString(36)}function ie(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(J,J):(A.status="pending",A.then(function(P){A.status==="pending"&&(A.status="fulfilled",A.value=P)},function(P){A.status==="pending"&&(A.status="rejected",A.reason=P)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function I(A,P,te,oe,de){var me=typeof A;(me==="undefined"||me==="boolean")&&(A=null);var Ge=!1;if(A===null)Ge=!0;else switch(me){case"bigint":case"string":case"number":Ge=!0;break;case"object":switch(A.$$typeof){case n:case s:Ge=!0;break;case f:return Ge=A._init,I(Ge(A._payload),P,te,oe,de)}}if(Ge)return de=de(A),Ge=oe===""?"."+Q(A,0):oe,K(de)?(te="",Ge!=null&&(te=Ge.replace(ee,"$&/")+"/"),I(de,P,te,"",function(Jt){return Jt})):de!=null&&(Z(de)&&(de=B(de,te+(de.key==null||A&&A.key===de.key?"":(""+de.key).replace(ee,"$&/")+"/")+Ge)),P.push(de)),1;Ge=0;var Me=oe===""?".":oe+":";if(K(A))for(var xe=0;xe<A.length;xe++)oe=A[xe],me=Me+Q(oe,xe),Ge+=I(oe,P,te,me,de);else if(xe=G(A),typeof xe=="function")for(A=xe.call(A),xe=0;!(oe=A.next()).done;)oe=oe.value,me=Me+Q(oe,xe++),Ge+=I(oe,P,te,me,de);else if(me==="object"){if(typeof A.then=="function")return I(ie(A),P,te,oe,de);throw P=String(A),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.")}return Ge}function W(A,P,te){if(A==null)return A;var oe=[],de=0;return I(A,oe,"","",function(me){return P.call(te,me,de++)}),oe}function O(A){if(A._status===-1){var P=A._result;P=P(),P.then(function(te){(A._status===0||A._status===-1)&&(A._status=1,A._result=te)},function(te){(A._status===0||A._status===-1)&&(A._status=2,A._result=te)}),A._status===-1&&(A._status=0,A._result=P)}if(A._status===1)return A._result.default;throw A._result}var ne=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var P=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(P))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},se={map:W,forEach:function(A,P,te){W(A,function(){P.apply(this,arguments)},te)},count:function(A){var P=0;return W(A,function(){P++}),P},toArray:function(A){return W(A,function(P){return P})||[]},only:function(A){if(!Z(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return he.Activity=_,he.Children=se,he.Component=N,he.Fragment=l,he.Profiler=d,he.PureComponent=E,he.StrictMode=r,he.Suspense=x,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,he.__COMPILER_RUNTIME={__proto__:null,c:function(A){return R.H.useMemoCache(A)}},he.cache=function(A){return function(){return A.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(A,P,te){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var oe=S({},A.props),de=A.key;if(P!=null)for(me in P.key!==void 0&&(de=""+P.key),P)!H.call(P,me)||me==="key"||me==="__self"||me==="__source"||me==="ref"&&P.ref===void 0||(oe[me]=P[me]);var me=arguments.length-2;if(me===1)oe.children=te;else if(1<me){for(var Ge=Array(me),Me=0;Me<me;Me++)Ge[Me]=arguments[Me+2];oe.children=Ge}return F(A.type,de,oe)},he.createContext=function(A){return A={$$typeof:g,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:p,_context:A},A},he.createElement=function(A,P,te){var oe,de={},me=null;if(P!=null)for(oe in P.key!==void 0&&(me=""+P.key),P)H.call(P,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(de[oe]=P[oe]);var Ge=arguments.length-2;if(Ge===1)de.children=te;else if(1<Ge){for(var Me=Array(Ge),xe=0;xe<Ge;xe++)Me[xe]=arguments[xe+2];de.children=Me}if(A&&A.defaultProps)for(oe in Ge=A.defaultProps,Ge)de[oe]===void 0&&(de[oe]=Ge[oe]);return F(A,me,de)},he.createRef=function(){return{current:null}},he.forwardRef=function(A){return{$$typeof:b,render:A}},he.isValidElement=Z,he.lazy=function(A){return{$$typeof:f,_payload:{_status:-1,_result:A},_init:O}},he.memo=function(A,P){return{$$typeof:m,type:A,compare:P===void 0?null:P}},he.startTransition=function(A){var P=R.T,te={};R.T=te;try{var oe=A(),de=R.S;de!==null&&de(te,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(J,ne)}catch(me){ne(me)}finally{P!==null&&te.types!==null&&(P.types=te.types),R.T=P}},he.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},he.use=function(A){return R.H.use(A)},he.useActionState=function(A,P,te){return R.H.useActionState(A,P,te)},he.useCallback=function(A,P){return R.H.useCallback(A,P)},he.useContext=function(A){return R.H.useContext(A)},he.useDebugValue=function(){},he.useDeferredValue=function(A,P){return R.H.useDeferredValue(A,P)},he.useEffect=function(A,P){return R.H.useEffect(A,P)},he.useEffectEvent=function(A){return R.H.useEffectEvent(A)},he.useId=function(){return R.H.useId()},he.useImperativeHandle=function(A,P,te){return R.H.useImperativeHandle(A,P,te)},he.useInsertionEffect=function(A,P){return R.H.useInsertionEffect(A,P)},he.useLayoutEffect=function(A,P){return R.H.useLayoutEffect(A,P)},he.useMemo=function(A,P){return R.H.useMemo(A,P)},he.useOptimistic=function(A,P){return R.H.useOptimistic(A,P)},he.useReducer=function(A,P,te){return R.H.useReducer(A,P,te)},he.useRef=function(A){return R.H.useRef(A)},he.useState=function(A){return R.H.useState(A)},he.useSyncExternalStore=function(A,P,te){return R.H.useSyncExternalStore(A,P,te)},he.useTransition=function(){return R.H.useTransition()},he.version="19.2.7",he}var ob;function vd(){return ob||(ob=1,fu.exports=j2()),fu.exports}var C=vd();const br=M2(C);var xu={exports:{}},Ei={},_u={exports:{}},ku={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rb;function S2(){return rb||(rb=1,(function(n){function s(I,W){var O=I.length;I.push(W);e:for(;0<O;){var ne=O-1>>>1,se=I[ne];if(0<d(se,W))I[ne]=W,I[O]=se,O=ne;else break e}}function l(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var W=I[0],O=I.pop();if(O!==W){I[0]=O;e:for(var ne=0,se=I.length,A=se>>>1;ne<A;){var P=2*(ne+1)-1,te=I[P],oe=P+1,de=I[oe];if(0>d(te,O))oe<se&&0>d(de,te)?(I[ne]=de,I[oe]=O,ne=oe):(I[ne]=te,I[P]=O,ne=P);else if(oe<se&&0>d(de,O))I[ne]=de,I[oe]=O,ne=oe;else break e}}return W}function d(I,W){var O=I.sortIndex-W.sortIndex;return O!==0?O:I.id-W.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var g=Date,b=g.now();n.unstable_now=function(){return g.now()-b}}var x=[],m=[],f=1,_=null,y=3,G=!1,v=!1,S=!1,T=!1,N=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;function V(I){for(var W=l(m);W!==null;){if(W.callback===null)r(m);else if(W.startTime<=I)r(m),W.sortIndex=W.expirationTime,s(x,W);else break;W=l(m)}}function K(I){if(S=!1,V(I),!v)if(l(x)!==null)v=!0,J||(J=!0,ae());else{var W=l(m);W!==null&&ie(K,W.startTime-I)}}var J=!1,R=-1,H=5,F=-1;function B(){return T?!0:!(n.unstable_now()-F<H)}function Z(){if(T=!1,J){var I=n.unstable_now();F=I;var W=!0;try{e:{v=!1,S&&(S=!1,L(R),R=-1),G=!0;var O=y;try{t:{for(V(I),_=l(x);_!==null&&!(_.expirationTime>I&&B());){var ne=_.callback;if(typeof ne=="function"){_.callback=null,y=_.priorityLevel;var se=ne(_.expirationTime<=I);if(I=n.unstable_now(),typeof se=="function"){_.callback=se,V(I),W=!0;break t}_===l(x)&&r(x),V(I)}else r(x);_=l(x)}if(_!==null)W=!0;else{var A=l(m);A!==null&&ie(K,A.startTime-I),W=!1}}break e}finally{_=null,y=O,G=!1}W=void 0}}finally{W?ae():J=!1}}}var ae;if(typeof E=="function")ae=function(){E(Z)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,Q=ee.port2;ee.port1.onmessage=Z,ae=function(){Q.postMessage(null)}}else ae=function(){N(Z,0)};function ie(I,W){R=N(function(){I(n.unstable_now())},W)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return y},n.unstable_next=function(I){switch(y){case 1:case 2:case 3:var W=3;break;default:W=y}var O=y;y=W;try{return I()}finally{y=O}},n.unstable_requestPaint=function(){T=!0},n.unstable_runWithPriority=function(I,W){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var O=y;y=I;try{return W()}finally{y=O}},n.unstable_scheduleCallback=function(I,W,O){var ne=n.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?ne+O:ne):O=ne,I){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=O+se,I={id:f++,callback:W,priorityLevel:I,startTime:O,expirationTime:se,sortIndex:-1},O>ne?(I.sortIndex=O,s(m,I),l(x)===null&&I===l(m)&&(S?(L(R),R=-1):S=!0,ie(K,O-ne))):(I.sortIndex=se,s(x,I),v||G||(v=!0,J||(J=!0,ae()))),I},n.unstable_shouldYield=B,n.unstable_wrapCallback=function(I){var W=y;return function(){var O=y;y=W;try{return I.apply(this,arguments)}finally{y=O}}}})(ku)),ku}var lb;function I2(){return lb||(lb=1,_u.exports=S2()),_u.exports}var yu={exports:{}},ut={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cb;function w2(){if(cb)return ut;cb=1;var n=vd();function s(x){var m="https://react.dev/errors/"+x;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var f=2;f<arguments.length;f++)m+="&args[]="+encodeURIComponent(arguments[f])}return"Minified React error #"+x+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var r={d:{f:l,r:function(){throw Error(s(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(x,m,f){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:_==null?null:""+_,children:x,containerInfo:m,implementation:f}}var g=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(x,m){if(x==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ut.createPortal=function(x,m){var f=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(s(299));return p(x,m,null,f)},ut.flushSync=function(x){var m=g.T,f=r.p;try{if(g.T=null,r.p=2,x)return x()}finally{g.T=m,r.p=f,r.d.f()}},ut.preconnect=function(x,m){typeof x=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(x,m))},ut.prefetchDNS=function(x){typeof x=="string"&&r.d.D(x)},ut.preinit=function(x,m){if(typeof x=="string"&&m&&typeof m.as=="string"){var f=m.as,_=b(f,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,G=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;f==="style"?r.d.S(x,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:G}):f==="script"&&r.d.X(x,{crossOrigin:_,integrity:y,fetchPriority:G,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ut.preinitModule=function(x,m){if(typeof x=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var f=b(m.as,m.crossOrigin);r.d.M(x,{crossOrigin:f,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(x)},ut.preload=function(x,m){if(typeof x=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var f=m.as,_=b(f,m.crossOrigin);r.d.L(x,f,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ut.preloadModule=function(x,m){if(typeof x=="string")if(m){var f=b(m.as,m.crossOrigin);r.d.m(x,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:f,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(x)},ut.requestFormReset=function(x){r.d.r(x)},ut.unstable_batchedUpdates=function(x,m){return x(m)},ut.useFormState=function(x,m,f){return g.H.useFormState(x,m,f)},ut.useFormStatus=function(){return g.H.useHostTransitionStatus()},ut.version="19.2.7",ut}var ub;function N2(){if(ub)return yu.exports;ub=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(s){console.error(s)}}return n(),yu.exports=w2(),yu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var db;function E2(){if(db)return Ei;db=1;var n=I2(),s=vd(),l=N2();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(p(e)!==e)throw Error(r(188))}function m(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(r(188));return t!==e?null:e}for(var a=e,o=t;;){var c=a.return;if(c===null)break;var u=c.alternate;if(u===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===a)return x(c),e;if(u===o)return x(c),t;u=u.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=u;else{for(var h=!1,k=c.child;k;){if(k===a){h=!0,a=c,o=u;break}if(k===o){h=!0,o=c,a=u;break}k=k.sibling}if(!h){for(k=u.child;k;){if(k===a){h=!0,a=u,o=c;break}if(k===o){h=!0,o=u,a=c;break}k=k.sibling}if(!h)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),E=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),B=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=Z&&e[Z]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Symbol.for("react.client.reference");function Q(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case S:return"Fragment";case N:return"Profiler";case T:return"StrictMode";case K:return"Suspense";case J:return"SuspenseList";case F:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case v:return"Portal";case E:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case V:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case R:return t=e.displayName||null,t!==null?t:Q(e.type)||"Memo";case H:t=e._payload,e=e._init;try{return Q(e(t))}catch{}}return null}var ie=Array.isArray,I=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O={pending:!1,data:null,method:null,action:null},ne=[],se=-1;function A(e){return{current:e}}function P(e){0>se||(e.current=ne[se],ne[se]=null,se--)}function te(e,t){se++,ne[se]=e.current,e.current=t}var oe=A(null),de=A(null),me=A(null),Ge=A(null);function Me(e,t){switch(te(me,t),te(de,e),te(oe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Th(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Th(t),e=jh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(oe),te(oe,e)}function xe(){P(oe),P(de),P(me)}function Jt(e){e.memoizedState!==null&&te(Ge,e);var t=oe.current,a=jh(t,e.type);t!==a&&(te(de,e),te(oe,a))}function wa(e){de.current===e&&(P(oe),P(de)),Ge.current===e&&(P(Ge),ji._currentValue=O)}var dt,et;function ca(e){if(dt===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);dt=t&&t[1]||"",et=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dt+e+et}var zs=!1;function el(e,t){if(!e||zs)return"";zs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(U){var z=U}Reflect.construct(e,[],$)}else{try{$.call()}catch(U){z=U}e.call($.prototype)}}else{try{throw Error()}catch(U){z=U}($=e())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(U){if(U&&z&&typeof U.stack=="string")return[U.stack,z.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),h=u[0],k=u[1];if(h&&k){var M=h.split(`
`),q=k.split(`
`);for(c=o=0;o<M.length&&!M[o].includes("DetermineComponentFrameRoot");)o++;for(;c<q.length&&!q[c].includes("DetermineComponentFrameRoot");)c++;if(o===M.length||c===q.length)for(o=M.length-1,c=q.length-1;1<=o&&0<=c&&M[o]!==q[c];)c--;for(;1<=o&&0<=c;o--,c--)if(M[o]!==q[c]){if(o!==1||c!==1)do if(o--,c--,0>c||M[o]!==q[c]){var X=`
`+M[o].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=o&&0<=c);break}}}finally{zs=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ca(a):""}function t1(e,t){switch(e.tag){case 26:case 27:case 5:return ca(e.type);case 16:return ca("Lazy");case 13:return e.child!==t&&t!==null?ca("Suspense Fallback"):ca("Suspense");case 19:return ca("SuspenseList");case 0:case 15:return el(e.type,!1);case 11:return el(e.type.render,!1);case 1:return el(e.type,!0);case 31:return ca("Activity");default:return""}}function np(e){try{var t="",a=null;do t+=t1(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var tl=Object.prototype.hasOwnProperty,al=n.unstable_scheduleCallback,nl=n.unstable_cancelCallback,a1=n.unstable_shouldYield,n1=n.unstable_requestPaint,vt=n.unstable_now,s1=n.unstable_getCurrentPriorityLevel,sp=n.unstable_ImmediatePriority,ip=n.unstable_UserBlockingPriority,Ji=n.unstable_NormalPriority,i1=n.unstable_LowPriority,op=n.unstable_IdlePriority,o1=n.log,r1=n.unstable_setDisableYieldValue,Ls=null,Gt=null;function Na(e){if(typeof o1=="function"&&r1(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(Ls,e)}catch{}}var Mt=Math.clz32?Math.clz32:u1,l1=Math.log,c1=Math.LN2;function u1(e){return e>>>=0,e===0?32:31-(l1(e)/c1|0)|0}var Wi=256,eo=262144,to=4194304;function pn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ao(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,u=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var k=o&134217727;return k!==0?(o=k&~u,o!==0?c=pn(o):(h&=k,h!==0?c=pn(h):a||(a=k&~e,a!==0&&(c=pn(a))))):(k=o&~u,k!==0?c=pn(k):h!==0?c=pn(h):a||(a=o&~e,a!==0&&(c=pn(a)))),c===0?0:t!==0&&t!==c&&(t&u)===0&&(u=c&-c,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:c}function Hs(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function d1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rp(){var e=to;return to<<=1,(to&62914560)===0&&(to=4194304),e}function sl(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Os(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function p1(e,t,a,o,c,u){var h=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var k=e.entanglements,M=e.expirationTimes,q=e.hiddenUpdates;for(a=h&~a;0<a;){var X=31-Mt(a),$=1<<X;k[X]=0,M[X]=-1;var z=q[X];if(z!==null)for(q[X]=null,X=0;X<z.length;X++){var U=z[X];U!==null&&(U.lane&=-536870913)}a&=~$}o!==0&&lp(e,o,0),u!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=u&~(h&~t))}function lp(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-Mt(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function cp(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-Mt(a),c=1<<o;c&t|e[o]&t&&(e[o]|=t),a&=~c}}function up(e,t){var a=t&-t;return a=(a&42)!==0?1:il(a),(a&(e.suspendedLanes|t))!==0?0:a}function il(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ol(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function dp(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:Qh(e.type))}function pp(e,t){var a=W.p;try{return W.p=e,t()}finally{W.p=a}}var Ea=Math.random().toString(36).slice(2),nt="__reactFiber$"+Ea,ht="__reactProps$"+Ea,zn="__reactContainer$"+Ea,rl="__reactEvents$"+Ea,g1="__reactListeners$"+Ea,m1="__reactHandles$"+Ea,gp="__reactResources$"+Ea,Bs="__reactMarker$"+Ea;function ll(e){delete e[nt],delete e[ht],delete e[rl],delete e[g1],delete e[m1]}function Ln(e){var t=e[nt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[zn]||a[nt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Ch(e);e!==null;){if(a=e[nt])return a;e=Ch(e)}return t}e=a,a=e.parentNode}return null}function Hn(e){if(e=e[nt]||e[zn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Us(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function On(e){var t=e[gp];return t||(t=e[gp]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tt(e){e[Bs]=!0}var mp=new Set,hp={};function gn(e,t){Bn(e,t),Bn(e+"Capture",t)}function Bn(e,t){for(hp[e]=t,e=0;e<t.length;e++)mp.add(t[e])}var h1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),bp={},fp={};function b1(e){return tl.call(fp,e)?!0:tl.call(bp,e)?!1:h1.test(e)?fp[e]=!0:(bp[e]=!0,!1)}function no(e,t,a){if(b1(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function so(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ua(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function f1(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,u=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(h){a=""+h,u.call(this,h)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(h){a=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cl(e){if(!e._valueTracker){var t=xp(e)?"checked":"value";e._valueTracker=f1(e,t,""+e[t])}}function _p(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=xp(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function io(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var x1=/[\n"\\]/g;function Ct(e){return e.replace(x1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ul(e,t,a,o,c,u,h,k){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Vt(t)):e.value!==""+Vt(t)&&(e.value=""+Vt(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?dl(e,h,Vt(t)):a!=null?dl(e,h,Vt(a)):o!=null&&e.removeAttribute("value"),c==null&&u!=null&&(e.defaultChecked=!!u),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),k!=null&&typeof k!="function"&&typeof k!="symbol"&&typeof k!="boolean"?e.name=""+Vt(k):e.removeAttribute("name")}function kp(e,t,a,o,c,u,h,k){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){cl(e);return}a=a!=null?""+Vt(a):"",t=t!=null?""+Vt(t):a,k||t===e.value||(e.value=t),e.defaultValue=t}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=k?e.checked:!!o,e.defaultChecked=!!o,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),cl(e)}function dl(e,t,a){t==="number"&&io(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Un(e,t,a,o){if(e=e.options,t){t={};for(var c=0;c<a.length;c++)t["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=t.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Vt(a),t=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function yp(e,t,a){if(t!=null&&(t=""+Vt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Vt(a):""}function vp(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(r(92));if(ie(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=Vt(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),cl(e)}function Pn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var _1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gp(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||_1.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Mp(e,t,a){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in t)o=t[c],t.hasOwnProperty(c)&&a[c]!==o&&Gp(e,c,o)}else for(var u in t)t.hasOwnProperty(u)&&Gp(e,u,t[u])}function pl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var k1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),y1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function oo(e){return y1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function da(){}var gl=null;function ml(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fn=null,Kn=null;function Ap(e){var t=Hn(e);if(t&&(e=t.stateNode)){var a=e[ht]||null;e:switch(e=t.stateNode,t.type){case"input":if(ul(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ct(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var c=o[ht]||null;if(!c)throw Error(r(90));ul(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&_p(o)}break e;case"textarea":yp(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Un(e,!!a.multiple,t,!1)}}}var hl=!1;function Tp(e,t,a){if(hl)return e(t,a);hl=!0;try{var o=e(t);return o}finally{if(hl=!1,(Fn!==null||Kn!==null)&&(Zo(),Fn&&(t=Fn,e=Kn,Kn=Fn=null,Ap(t),e)))for(t=0;t<e.length;t++)Ap(e[t])}}function Ps(e,t){var a=e.stateNode;if(a===null)return null;var o=a[ht]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,t,typeof a));return a}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bl=!1;if(pa)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){bl=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{bl=!1}var Va=null,fl=null,ro=null;function jp(){if(ro)return ro;var e,t=fl,a=t.length,o,c="value"in Va?Va.value:Va.textContent,u=c.length;for(e=0;e<a&&t[e]===c[e];e++);var h=a-e;for(o=1;o<=h&&t[a-o]===c[u-o];o++);return ro=c.slice(e,1<o?1-o:void 0)}function lo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function co(){return!0}function Sp(){return!1}function bt(e){function t(a,o,c,u,h){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=u,this.target=h,this.currentTarget=null;for(var k in e)e.hasOwnProperty(k)&&(a=e[k],this[k]=a?a(u):u[k]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?co:Sp,this.isPropagationStopped=Sp,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uo=bt(mn),Ks=_({},mn,{view:0,detail:0}),v1=bt(Ks),xl,_l,Xs,po=_({},Ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xs&&(Xs&&e.type==="mousemove"?(xl=e.screenX-Xs.screenX,_l=e.screenY-Xs.screenY):_l=xl=0,Xs=e),xl)},movementY:function(e){return"movementY"in e?e.movementY:_l}}),Ip=bt(po),G1=_({},po,{dataTransfer:0}),M1=bt(G1),A1=_({},Ks,{relatedTarget:0}),kl=bt(A1),T1=_({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),j1=bt(T1),S1=_({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),I1=bt(S1),w1=_({},mn,{data:0}),wp=bt(w1),N1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=V1[e])?!!t[e]:!1}function yl(){return C1}var D1=_({},Ks,{key:function(e){if(e.key){var t=N1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=lo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?E1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yl,charCode:function(e){return e.type==="keypress"?lo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?lo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),q1=bt(D1),R1=_({},po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=bt(R1),z1=_({},Ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yl}),L1=bt(z1),H1=_({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),O1=bt(H1),B1=_({},po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),U1=bt(B1),P1=_({},mn,{newState:0,oldState:0}),F1=bt(P1),K1=[9,13,27,32],vl=pa&&"CompositionEvent"in window,Zs=null;pa&&"documentMode"in document&&(Zs=document.documentMode);var X1=pa&&"TextEvent"in window&&!Zs,Ep=pa&&(!vl||Zs&&8<Zs&&11>=Zs),Vp=" ",Cp=!1;function Dp(e,t){switch(e){case"keyup":return K1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function Z1(e,t){switch(e){case"compositionend":return qp(t);case"keypress":return t.which!==32?null:(Cp=!0,Vp);case"textInput":return e=t.data,e===Vp&&Cp?null:e;default:return null}}function Y1(e,t){if(Xn)return e==="compositionend"||!vl&&Dp(e,t)?(e=jp(),ro=fl=Va=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ep&&t.locale!=="ko"?null:t.data;default:return null}}var Q1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Q1[e.type]:t==="textarea"}function zp(e,t,a,o){Fn?Kn?Kn.push(o):Kn=[o]:Fn=o,t=tr(t,"onChange"),0<t.length&&(a=new uo("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var Ys=null,Qs=null;function $1(e){kh(e,0)}function go(e){var t=Us(e);if(_p(t))return e}function Lp(e,t){if(e==="change")return t}var Hp=!1;if(pa){var Gl;if(pa){var Ml="oninput"in document;if(!Ml){var Op=document.createElement("div");Op.setAttribute("oninput","return;"),Ml=typeof Op.oninput=="function"}Gl=Ml}else Gl=!1;Hp=Gl&&(!document.documentMode||9<document.documentMode)}function Bp(){Ys&&(Ys.detachEvent("onpropertychange",Up),Qs=Ys=null)}function Up(e){if(e.propertyName==="value"&&go(Qs)){var t=[];zp(t,Qs,e,ml(e)),Tp($1,t)}}function J1(e,t,a){e==="focusin"?(Bp(),Ys=t,Qs=a,Ys.attachEvent("onpropertychange",Up)):e==="focusout"&&Bp()}function W1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return go(Qs)}function e_(e,t){if(e==="click")return go(t)}function t_(e,t){if(e==="input"||e==="change")return go(t)}function a_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:a_;function $s(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!tl.call(t,c)||!At(e[c],t[c]))return!1}return!0}function Pp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fp(e,t){var a=Pp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Pp(a)}}function Kp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=io(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=io(e.document)}return t}function Al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var n_=pa&&"documentMode"in document&&11>=document.documentMode,Zn=null,Tl=null,Js=null,jl=!1;function Zp(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jl||Zn==null||Zn!==io(o)||(o=Zn,"selectionStart"in o&&Al(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Js&&$s(Js,o)||(Js=o,o=tr(Tl,"onSelect"),0<o.length&&(t=new uo("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=Zn)))}function hn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Yn={animationend:hn("Animation","AnimationEnd"),animationiteration:hn("Animation","AnimationIteration"),animationstart:hn("Animation","AnimationStart"),transitionrun:hn("Transition","TransitionRun"),transitionstart:hn("Transition","TransitionStart"),transitioncancel:hn("Transition","TransitionCancel"),transitionend:hn("Transition","TransitionEnd")},Sl={},Yp={};pa&&(Yp=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function bn(e){if(Sl[e])return Sl[e];if(!Yn[e])return e;var t=Yn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Yp)return Sl[e]=t[a];return e}var Qp=bn("animationend"),$p=bn("animationiteration"),Jp=bn("animationstart"),s_=bn("transitionrun"),i_=bn("transitionstart"),o_=bn("transitioncancel"),Wp=bn("transitionend"),eg=new Map,Il="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Il.push("scrollEnd");function Ft(e,t){eg.set(e,t),gn(t,[e])}var mo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Dt=[],Qn=0,wl=0;function ho(){for(var e=Qn,t=wl=Qn=0;t<e;){var a=Dt[t];Dt[t++]=null;var o=Dt[t];Dt[t++]=null;var c=Dt[t];Dt[t++]=null;var u=Dt[t];if(Dt[t++]=null,o!==null&&c!==null){var h=o.pending;h===null?c.next=c:(c.next=h.next,h.next=c),o.pending=c}u!==0&&tg(a,c,u)}}function bo(e,t,a,o){Dt[Qn++]=e,Dt[Qn++]=t,Dt[Qn++]=a,Dt[Qn++]=o,wl|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Nl(e,t,a,o){return bo(e,t,a,o),fo(e)}function fn(e,t){return bo(e,null,null,t),fo(e)}function tg(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,u=e.return;u!==null;)u.childLanes|=a,o=u.alternate,o!==null&&(o.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(c=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,c&&t!==null&&(c=31-Mt(a),e=u.hiddenUpdates,o=e[c],o===null?e[c]=[t]:o.push(t),t.lane=a|536870912),u):null}function fo(e){if(50<ki)throw ki=0,Hc=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var $n={};function r_(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,a,o){return new r_(e,t,a,o)}function El(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ga(e,t){var a=e.alternate;return a===null?(a=Tt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ag(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xo(e,t,a,o,c,u){var h=0;if(o=e,typeof e=="function")El(e)&&(h=1);else if(typeof e=="string")h=p2(e,a,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case F:return e=Tt(31,a,t,c),e.elementType=F,e.lanes=u,e;case S:return xn(a.children,c,u,t);case T:h=8,c|=24;break;case N:return e=Tt(12,a,t,c|2),e.elementType=N,e.lanes=u,e;case K:return e=Tt(13,a,t,c),e.elementType=K,e.lanes=u,e;case J:return e=Tt(19,a,t,c),e.elementType=J,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case E:h=10;break e;case L:h=9;break e;case V:h=11;break e;case R:h=14;break e;case H:h=16,o=null;break e}h=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return t=Tt(h,a,t,c),t.elementType=e,t.type=o,t.lanes=u,t}function xn(e,t,a,o){return e=Tt(7,e,o,t),e.lanes=a,e}function Vl(e,t,a){return e=Tt(6,e,null,t),e.lanes=a,e}function ng(e){var t=Tt(18,null,null,0);return t.stateNode=e,t}function Cl(e,t,a){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var sg=new WeakMap;function qt(e,t){if(typeof e=="object"&&e!==null){var a=sg.get(e);return a!==void 0?a:(t={value:e,source:t,stack:np(t)},sg.set(e,t),t)}return{value:e,source:t,stack:np(t)}}var Jn=[],Wn=0,_o=null,Ws=0,Rt=[],zt=0,Ca=null,Wt=1,ea="";function ma(e,t){Jn[Wn++]=Ws,Jn[Wn++]=_o,_o=e,Ws=t}function ig(e,t,a){Rt[zt++]=Wt,Rt[zt++]=ea,Rt[zt++]=Ca,Ca=e;var o=Wt;e=ea;var c=32-Mt(o)-1;o&=~(1<<c),a+=1;var u=32-Mt(t)+c;if(30<u){var h=c-c%5;u=(o&(1<<h)-1).toString(32),o>>=h,c-=h,Wt=1<<32-Mt(t)+c|a<<c|o,ea=u+e}else Wt=1<<u|a<<c|o,ea=e}function Dl(e){e.return!==null&&(ma(e,1),ig(e,1,0))}function ql(e){for(;e===_o;)_o=Jn[--Wn],Jn[Wn]=null,Ws=Jn[--Wn],Jn[Wn]=null;for(;e===Ca;)Ca=Rt[--zt],Rt[zt]=null,ea=Rt[--zt],Rt[zt]=null,Wt=Rt[--zt],Rt[zt]=null}function og(e,t){Rt[zt++]=Wt,Rt[zt++]=ea,Rt[zt++]=Ca,Wt=t.id,ea=t.overflow,Ca=e}var st=null,Re=null,Ae=!1,Da=null,Lt=!1,Rl=Error(r(519));function qa(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ei(qt(t,e)),Rl}function rg(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[nt]=e,t[ht]=o,a){case"dialog":ke("cancel",t),ke("close",t);break;case"iframe":case"object":case"embed":ke("load",t);break;case"video":case"audio":for(a=0;a<vi.length;a++)ke(vi[a],t);break;case"source":ke("error",t);break;case"img":case"image":case"link":ke("error",t),ke("load",t);break;case"details":ke("toggle",t);break;case"input":ke("invalid",t),kp(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ke("invalid",t);break;case"textarea":ke("invalid",t),vp(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||Mh(t.textContent,a)?(o.popover!=null&&(ke("beforetoggle",t),ke("toggle",t)),o.onScroll!=null&&ke("scroll",t),o.onScrollEnd!=null&&ke("scrollend",t),o.onClick!=null&&(t.onclick=da),t=!0):t=!1,t||qa(e,!0)}function lg(e){for(st=e.return;st;)switch(st.tag){case 5:case 31:case 13:Lt=!1;return;case 27:case 3:Lt=!0;return;default:st=st.return}}function es(e){if(e!==st)return!1;if(!Ae)return lg(e),Ae=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||tu(e.type,e.memoizedProps)),a=!a),a&&Re&&qa(e),lg(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Re=Vh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Re=Vh(e)}else t===27?(t=Re,Qa(e.type)?(e=ou,ou=null,Re=e):Re=t):Re=st?Ot(e.stateNode.nextSibling):null;return!0}function _n(){Re=st=null,Ae=!1}function zl(){var e=Da;return e!==null&&(kt===null?kt=e:kt.push.apply(kt,e),Da=null),e}function ei(e){Da===null?Da=[e]:Da.push(e)}var Ll=A(null),kn=null,ha=null;function Ra(e,t,a){te(Ll,t._currentValue),t._currentValue=a}function ba(e){e._currentValue=Ll.current,P(Ll)}function Hl(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function Ol(e,t,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var u=c.dependencies;if(u!==null){var h=c.child;u=u.firstContext;e:for(;u!==null;){var k=u;u=c;for(var M=0;M<t.length;M++)if(k.context===t[M]){u.lanes|=a,k=u.alternate,k!==null&&(k.lanes|=a),Hl(u.return,a,e),o||(h=null);break e}u=k.next}}else if(c.tag===18){if(h=c.return,h===null)throw Error(r(341));h.lanes|=a,u=h.alternate,u!==null&&(u.lanes|=a),Hl(h,a,e),h=null}else h=c.child;if(h!==null)h.return=c;else for(h=c;h!==null;){if(h===e){h=null;break}if(c=h.sibling,c!==null){c.return=h.return,h=c;break}h=h.return}c=h}}function ts(e,t,a,o){e=null;for(var c=t,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var h=c.alternate;if(h===null)throw Error(r(387));if(h=h.memoizedProps,h!==null){var k=c.type;At(c.pendingProps.value,h.value)||(e!==null?e.push(k):e=[k])}}else if(c===Ge.current){if(h=c.alternate,h===null)throw Error(r(387));h.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(ji):e=[ji])}c=c.return}e!==null&&Ol(t,e,a,o),t.flags|=262144}function ko(e){for(e=e.firstContext;e!==null;){if(!At(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function yn(e){kn=e,ha=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function it(e){return cg(kn,e)}function yo(e,t){return kn===null&&yn(e),cg(e,t)}function cg(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ha===null){if(e===null)throw Error(r(308));ha=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ha=ha.next=t;return a}var l_=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},c_=n.unstable_scheduleCallback,u_=n.unstable_NormalPriority,Fe={$$typeof:E,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bl(){return{controller:new l_,data:new Map,refCount:0}}function ti(e){e.refCount--,e.refCount===0&&c_(u_,function(){e.controller.abort()})}var ai=null,Ul=0,as=0,ns=null;function d_(e,t){if(ai===null){var a=ai=[];Ul=0,as=Kc(),ns={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ul++,t.then(ug,ug),t}function ug(){if(--Ul===0&&ai!==null){ns!==null&&(ns.status="fulfilled");var e=ai;ai=null,as=0,ns=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function p_(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var c=0;c<a.length;c++)(0,a[c])(t)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var dg=I.S;I.S=function(e,t){Zm=vt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&d_(e,t),dg!==null&&dg(e,t)};var vn=A(null);function Pl(){var e=vn.current;return e!==null?e:Ce.pooledCache}function vo(e,t){t===null?te(vn,vn.current):te(vn,t.pool)}function pg(){var e=Pl();return e===null?null:{parent:Fe._currentValue,pool:e}}var ss=Error(r(460)),Fl=Error(r(474)),Go=Error(r(542)),Mo={then:function(){}};function gg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function mg(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(da,da),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,bg(e),e;default:if(typeof t.status=="string")t.then(da,da);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=o}},function(o){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,bg(e),e}throw Mn=t,ss}}function Gn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Mn=a,ss):a}}var Mn=null;function hg(){if(Mn===null)throw Error(r(459));var e=Mn;return Mn=null,e}function bg(e){if(e===ss||e===Go)throw Error(r(483))}var is=null,ni=0;function Ao(e){var t=ni;return ni+=1,is===null&&(is=[]),mg(is,e,t)}function si(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function To(e,t){throw t.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function fg(e){function t(w,j){if(e){var D=w.deletions;D===null?(w.deletions=[j],w.flags|=16):D.push(j)}}function a(w,j){if(!e)return null;for(;j!==null;)t(w,j),j=j.sibling;return null}function o(w){for(var j=new Map;w!==null;)w.key!==null?j.set(w.key,w):j.set(w.index,w),w=w.sibling;return j}function c(w,j){return w=ga(w,j),w.index=0,w.sibling=null,w}function u(w,j,D){return w.index=D,e?(D=w.alternate,D!==null?(D=D.index,D<j?(w.flags|=67108866,j):D):(w.flags|=67108866,j)):(w.flags|=1048576,j)}function h(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function k(w,j,D,Y){return j===null||j.tag!==6?(j=Vl(D,w.mode,Y),j.return=w,j):(j=c(j,D),j.return=w,j)}function M(w,j,D,Y){var pe=D.type;return pe===S?X(w,j,D.props.children,Y,D.key):j!==null&&(j.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===H&&Gn(pe)===j.type)?(j=c(j,D.props),si(j,D),j.return=w,j):(j=xo(D.type,D.key,D.props,null,w.mode,Y),si(j,D),j.return=w,j)}function q(w,j,D,Y){return j===null||j.tag!==4||j.stateNode.containerInfo!==D.containerInfo||j.stateNode.implementation!==D.implementation?(j=Cl(D,w.mode,Y),j.return=w,j):(j=c(j,D.children||[]),j.return=w,j)}function X(w,j,D,Y,pe){return j===null||j.tag!==7?(j=xn(D,w.mode,Y,pe),j.return=w,j):(j=c(j,D),j.return=w,j)}function $(w,j,D){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Vl(""+j,w.mode,D),j.return=w,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case G:return D=xo(j.type,j.key,j.props,null,w.mode,D),si(D,j),D.return=w,D;case v:return j=Cl(j,w.mode,D),j.return=w,j;case H:return j=Gn(j),$(w,j,D)}if(ie(j)||ae(j))return j=xn(j,w.mode,D,null),j.return=w,j;if(typeof j.then=="function")return $(w,Ao(j),D);if(j.$$typeof===E)return $(w,yo(w,j),D);To(w,j)}return null}function z(w,j,D,Y){var pe=j!==null?j.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return pe!==null?null:k(w,j,""+D,Y);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case G:return D.key===pe?M(w,j,D,Y):null;case v:return D.key===pe?q(w,j,D,Y):null;case H:return D=Gn(D),z(w,j,D,Y)}if(ie(D)||ae(D))return pe!==null?null:X(w,j,D,Y,null);if(typeof D.then=="function")return z(w,j,Ao(D),Y);if(D.$$typeof===E)return z(w,j,yo(w,D),Y);To(w,D)}return null}function U(w,j,D,Y,pe){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return w=w.get(D)||null,k(j,w,""+Y,pe);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case G:return w=w.get(Y.key===null?D:Y.key)||null,M(j,w,Y,pe);case v:return w=w.get(Y.key===null?D:Y.key)||null,q(j,w,Y,pe);case H:return Y=Gn(Y),U(w,j,D,Y,pe)}if(ie(Y)||ae(Y))return w=w.get(D)||null,X(j,w,Y,pe,null);if(typeof Y.then=="function")return U(w,j,D,Ao(Y),pe);if(Y.$$typeof===E)return U(w,j,D,yo(j,Y),pe);To(j,Y)}return null}function re(w,j,D,Y){for(var pe=null,Te=null,ue=j,fe=j=0,ve=null;ue!==null&&fe<D.length;fe++){ue.index>fe?(ve=ue,ue=null):ve=ue.sibling;var je=z(w,ue,D[fe],Y);if(je===null){ue===null&&(ue=ve);break}e&&ue&&je.alternate===null&&t(w,ue),j=u(je,j,fe),Te===null?pe=je:Te.sibling=je,Te=je,ue=ve}if(fe===D.length)return a(w,ue),Ae&&ma(w,fe),pe;if(ue===null){for(;fe<D.length;fe++)ue=$(w,D[fe],Y),ue!==null&&(j=u(ue,j,fe),Te===null?pe=ue:Te.sibling=ue,Te=ue);return Ae&&ma(w,fe),pe}for(ue=o(ue);fe<D.length;fe++)ve=U(ue,w,fe,D[fe],Y),ve!==null&&(e&&ve.alternate!==null&&ue.delete(ve.key===null?fe:ve.key),j=u(ve,j,fe),Te===null?pe=ve:Te.sibling=ve,Te=ve);return e&&ue.forEach(function(tn){return t(w,tn)}),Ae&&ma(w,fe),pe}function ge(w,j,D,Y){if(D==null)throw Error(r(151));for(var pe=null,Te=null,ue=j,fe=j=0,ve=null,je=D.next();ue!==null&&!je.done;fe++,je=D.next()){ue.index>fe?(ve=ue,ue=null):ve=ue.sibling;var tn=z(w,ue,je.value,Y);if(tn===null){ue===null&&(ue=ve);break}e&&ue&&tn.alternate===null&&t(w,ue),j=u(tn,j,fe),Te===null?pe=tn:Te.sibling=tn,Te=tn,ue=ve}if(je.done)return a(w,ue),Ae&&ma(w,fe),pe;if(ue===null){for(;!je.done;fe++,je=D.next())je=$(w,je.value,Y),je!==null&&(j=u(je,j,fe),Te===null?pe=je:Te.sibling=je,Te=je);return Ae&&ma(w,fe),pe}for(ue=o(ue);!je.done;fe++,je=D.next())je=U(ue,w,fe,je.value,Y),je!==null&&(e&&je.alternate!==null&&ue.delete(je.key===null?fe:je.key),j=u(je,j,fe),Te===null?pe=je:Te.sibling=je,Te=je);return e&&ue.forEach(function(G2){return t(w,G2)}),Ae&&ma(w,fe),pe}function Ve(w,j,D,Y){if(typeof D=="object"&&D!==null&&D.type===S&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case G:e:{for(var pe=D.key;j!==null;){if(j.key===pe){if(pe=D.type,pe===S){if(j.tag===7){a(w,j.sibling),Y=c(j,D.props.children),Y.return=w,w=Y;break e}}else if(j.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===H&&Gn(pe)===j.type){a(w,j.sibling),Y=c(j,D.props),si(Y,D),Y.return=w,w=Y;break e}a(w,j);break}else t(w,j);j=j.sibling}D.type===S?(Y=xn(D.props.children,w.mode,Y,D.key),Y.return=w,w=Y):(Y=xo(D.type,D.key,D.props,null,w.mode,Y),si(Y,D),Y.return=w,w=Y)}return h(w);case v:e:{for(pe=D.key;j!==null;){if(j.key===pe)if(j.tag===4&&j.stateNode.containerInfo===D.containerInfo&&j.stateNode.implementation===D.implementation){a(w,j.sibling),Y=c(j,D.children||[]),Y.return=w,w=Y;break e}else{a(w,j);break}else t(w,j);j=j.sibling}Y=Cl(D,w.mode,Y),Y.return=w,w=Y}return h(w);case H:return D=Gn(D),Ve(w,j,D,Y)}if(ie(D))return re(w,j,D,Y);if(ae(D)){if(pe=ae(D),typeof pe!="function")throw Error(r(150));return D=pe.call(D),ge(w,j,D,Y)}if(typeof D.then=="function")return Ve(w,j,Ao(D),Y);if(D.$$typeof===E)return Ve(w,j,yo(w,D),Y);To(w,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,j!==null&&j.tag===6?(a(w,j.sibling),Y=c(j,D),Y.return=w,w=Y):(a(w,j),Y=Vl(D,w.mode,Y),Y.return=w,w=Y),h(w)):a(w,j)}return function(w,j,D,Y){try{ni=0;var pe=Ve(w,j,D,Y);return is=null,pe}catch(ue){if(ue===ss||ue===Go)throw ue;var Te=Tt(29,ue,null,w.mode);return Te.lanes=Y,Te.return=w,Te}finally{}}}var An=fg(!0),xg=fg(!1),za=!1;function Kl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function La(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Se&2)!==0){var c=o.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),o.pending=t,t=fo(e),tg(e,null,a),t}return bo(e,o,t,a),fo(e)}function ii(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,cp(e,a)}}function Zl(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var h={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?c=u=h:u=u.next=h,a=a.next}while(a!==null);u===null?c=u=t:u=u.next=t}else c=u=t;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Yl=!1;function oi(){if(Yl){var e=ns;if(e!==null)throw e}}function ri(e,t,a,o){Yl=!1;var c=e.updateQueue;za=!1;var u=c.firstBaseUpdate,h=c.lastBaseUpdate,k=c.shared.pending;if(k!==null){c.shared.pending=null;var M=k,q=M.next;M.next=null,h===null?u=q:h.next=q,h=M;var X=e.alternate;X!==null&&(X=X.updateQueue,k=X.lastBaseUpdate,k!==h&&(k===null?X.firstBaseUpdate=q:k.next=q,X.lastBaseUpdate=M))}if(u!==null){var $=c.baseState;h=0,X=q=M=null,k=u;do{var z=k.lane&-536870913,U=z!==k.lane;if(U?(ye&z)===z:(o&z)===z){z!==0&&z===as&&(Yl=!0),X!==null&&(X=X.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});e:{var re=e,ge=k;z=t;var Ve=a;switch(ge.tag){case 1:if(re=ge.payload,typeof re=="function"){$=re.call(Ve,$,z);break e}$=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ge.payload,z=typeof re=="function"?re.call(Ve,$,z):re,z==null)break e;$=_({},$,z);break e;case 2:za=!0}}z=k.callback,z!==null&&(e.flags|=64,U&&(e.flags|=8192),U=c.callbacks,U===null?c.callbacks=[z]:U.push(z))}else U={lane:z,tag:k.tag,payload:k.payload,callback:k.callback,next:null},X===null?(q=X=U,M=$):X=X.next=U,h|=z;if(k=k.next,k===null){if(k=c.shared.pending,k===null)break;U=k,k=U.next,U.next=null,c.lastBaseUpdate=U,c.shared.pending=null}}while(!0);X===null&&(M=$),c.baseState=M,c.firstBaseUpdate=q,c.lastBaseUpdate=X,u===null&&(c.shared.lanes=0),Fa|=h,e.lanes=h,e.memoizedState=$}}function _g(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function kg(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)_g(a[e],t)}var os=A(null),jo=A(0);function yg(e,t){e=Aa,te(jo,e),te(os,t),Aa=e|t.baseLanes}function Ql(){te(jo,Aa),te(os,os.current)}function $l(){Aa=jo.current,P(os),P(jo)}var jt=A(null),Ht=null;function Oa(e){var t=e.alternate;te(Ue,Ue.current&1),te(jt,e),Ht===null&&(t===null||os.current!==null||t.memoizedState!==null)&&(Ht=e)}function Jl(e){te(Ue,Ue.current),te(jt,e),Ht===null&&(Ht=e)}function vg(e){e.tag===22?(te(Ue,Ue.current),te(jt,e),Ht===null&&(Ht=e)):Ba()}function Ba(){te(Ue,Ue.current),te(jt,jt.current)}function St(e){P(jt),Ht===e&&(Ht=null),P(Ue)}var Ue=A(0);function So(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||su(a)||iu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fa=0,be=null,Ne=null,Ke=null,Io=!1,rs=!1,Tn=!1,wo=0,li=0,ls=null,g_=0;function He(){throw Error(r(321))}function Wl(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!At(e[a],t[a]))return!1;return!0}function ec(e,t,a,o,c,u){return fa=u,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,I.H=e===null||e.memoizedState===null?im:hc,Tn=!1,u=a(o,c),Tn=!1,rs&&(u=Mg(t,a,o,c)),Gg(e),u}function Gg(e){I.H=di;var t=Ne!==null&&Ne.next!==null;if(fa=0,Ke=Ne=be=null,Io=!1,li=0,ls=null,t)throw Error(r(300));e===null||Xe||(e=e.dependencies,e!==null&&ko(e)&&(Xe=!0))}function Mg(e,t,a,o){be=e;var c=0;do{if(rs&&(ls=null),li=0,rs=!1,25<=c)throw Error(r(301));if(c+=1,Ke=Ne=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}I.H=om,u=t(a,o)}while(rs);return u}function m_(){var e=I.H,t=e.useState()[0];return t=typeof t.then=="function"?ci(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(be.flags|=1024),t}function tc(){var e=wo!==0;return wo=0,e}function ac(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function nc(e){if(Io){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Io=!1}fa=0,Ke=Ne=be=null,rs=!1,li=wo=0,ls=null}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?be.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Pe(){if(Ne===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Ke===null?be.memoizedState:Ke.next;if(t!==null)Ke=t,Ne=e;else{if(e===null)throw be.alternate===null?Error(r(467)):Error(r(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ke===null?be.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function No(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ci(e){var t=li;return li+=1,ls===null&&(ls=[]),e=mg(ls,e,t),t=be,(Ke===null?t.memoizedState:Ke.next)===null&&(t=t.alternate,I.H=t===null||t.memoizedState===null?im:hc),e}function Eo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ci(e);if(e.$$typeof===E)return it(e)}throw Error(r(438,String(e)))}function sc(e){var t=null,a=be.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=be.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=No(),be.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=B;return t.index++,a}function xa(e,t){return typeof t=="function"?t(e):t}function Vo(e){var t=Pe();return ic(t,Ne,e)}function ic(e,t,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,u=o.pending;if(u!==null){if(c!==null){var h=c.next;c.next=u.next,u.next=h}t.baseQueue=c=u,o.pending=null}if(u=e.baseState,c===null)e.memoizedState=u;else{t=c.next;var k=h=null,M=null,q=t,X=!1;do{var $=q.lane&-536870913;if($!==q.lane?(ye&$)===$:(fa&$)===$){var z=q.revertLane;if(z===0)M!==null&&(M=M.next={lane:0,revertLane:0,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),$===as&&(X=!0);else if((fa&z)===z){q=q.next,z===as&&(X=!0);continue}else $={lane:0,revertLane:q.revertLane,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},M===null?(k=M=$,h=u):M=M.next=$,be.lanes|=z,Fa|=z;$=q.action,Tn&&a(u,$),u=q.hasEagerState?q.eagerState:a(u,$)}else z={lane:$,revertLane:q.revertLane,gesture:q.gesture,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},M===null?(k=M=z,h=u):M=M.next=z,be.lanes|=$,Fa|=$;q=q.next}while(q!==null&&q!==t);if(M===null?h=u:M.next=k,!At(u,e.memoizedState)&&(Xe=!0,X&&(a=ns,a!==null)))throw a;e.memoizedState=u,e.baseState=h,e.baseQueue=M,o.lastRenderedState=u}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function oc(e){var t=Pe(),a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,u=t.memoizedState;if(c!==null){a.pending=null;var h=c=c.next;do u=e(u,h.action),h=h.next;while(h!==c);At(u,t.memoizedState)||(Xe=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,o]}function Ag(e,t,a){var o=be,c=Pe(),u=Ae;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=t();var h=!At((Ne||c).memoizedState,a);if(h&&(c.memoizedState=a,Xe=!0),c=c.queue,cc(Sg.bind(null,o,c,e),[e]),c.getSnapshot!==t||h||Ke!==null&&Ke.memoizedState.tag&1){if(o.flags|=2048,cs(9,{destroy:void 0},jg.bind(null,o,c,a,t),null),Ce===null)throw Error(r(349));u||(fa&127)!==0||Tg(o,t,a)}return a}function Tg(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=be.updateQueue,t===null?(t=No(),be.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function jg(e,t,a,o){t.value=a,t.getSnapshot=o,Ig(t)&&wg(e)}function Sg(e,t,a){return a(function(){Ig(t)&&wg(e)})}function Ig(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!At(e,a)}catch{return!0}}function wg(e){var t=fn(e,2);t!==null&&yt(t,e,2)}function rc(e){var t=pt();if(typeof e=="function"){var a=e;if(e=a(),Tn){Na(!0);try{a()}finally{Na(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:e},t}function Ng(e,t,a,o){return e.baseState=a,ic(e,Ne,typeof o=="function"?o:xa)}function h_(e,t,a,o,c){if(qo(e))throw Error(r(485));if(e=t.action,e!==null){var u={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){u.listeners.push(h)}};I.T!==null?a(!0):u.isTransition=!1,o(u),a=t.pending,a===null?(u.next=t.pending=u,Eg(t,u)):(u.next=a.next,t.pending=a.next=u)}}function Eg(e,t){var a=t.action,o=t.payload,c=e.state;if(t.isTransition){var u=I.T,h={};I.T=h;try{var k=a(c,o),M=I.S;M!==null&&M(h,k),Vg(e,t,k)}catch(q){lc(e,t,q)}finally{u!==null&&h.types!==null&&(u.types=h.types),I.T=u}}else try{u=a(c,o),Vg(e,t,u)}catch(q){lc(e,t,q)}}function Vg(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Cg(e,t,o)},function(o){return lc(e,t,o)}):Cg(e,t,a)}function Cg(e,t,a){t.status="fulfilled",t.value=a,Dg(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Eg(e,a)))}function lc(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,Dg(t),t=t.next;while(t!==o)}e.action=null}function Dg(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function qg(e,t){return t}function Rg(e,t){if(Ae){var a=Ce.formState;if(a!==null){e:{var o=be;if(Ae){if(Re){t:{for(var c=Re,u=Lt;c.nodeType!==8;){if(!u){c=null;break t}if(c=Ot(c.nextSibling),c===null){c=null;break t}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){Re=Ot(c.nextSibling),o=c.data==="F!";break e}}qa(o)}o=!1}o&&(t=a[0])}}return a=pt(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qg,lastRenderedState:t},a.queue=o,a=am.bind(null,be,o),o.dispatch=a,o=rc(!1),u=mc.bind(null,be,!1,o.queue),o=pt(),c={state:t,dispatch:null,action:e,pending:null},o.queue=c,a=h_.bind(null,be,c,u,a),c.dispatch=a,o.memoizedState=e,[t,a,!1]}function zg(e){var t=Pe();return Lg(t,Ne,e)}function Lg(e,t,a){if(t=ic(e,t,qg)[0],e=Vo(xa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=ci(t)}catch(h){throw h===ss?Go:h}else o=t;t=Pe();var c=t.queue,u=c.dispatch;return a!==t.memoizedState&&(be.flags|=2048,cs(9,{destroy:void 0},b_.bind(null,c,a),null)),[o,u,e]}function b_(e,t){e.action=t}function Hg(e){var t=Pe(),a=Ne;if(a!==null)return Lg(t,a,e);Pe(),t=t.memoizedState,a=Pe();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function cs(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=be.updateQueue,t===null&&(t=No(),be.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function Og(){return Pe().memoizedState}function Co(e,t,a,o){var c=pt();be.flags|=e,c.memoizedState=cs(1|t,{destroy:void 0},a,o===void 0?null:o)}function Do(e,t,a,o){var c=Pe();o=o===void 0?null:o;var u=c.memoizedState.inst;Ne!==null&&o!==null&&Wl(o,Ne.memoizedState.deps)?c.memoizedState=cs(t,u,a,o):(be.flags|=e,c.memoizedState=cs(1|t,u,a,o))}function Bg(e,t){Co(8390656,8,e,t)}function cc(e,t){Do(2048,8,e,t)}function f_(e){be.flags|=4;var t=be.updateQueue;if(t===null)t=No(),be.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Ug(e){var t=Pe().memoizedState;return f_({ref:t,nextImpl:e}),function(){if((Se&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function Pg(e,t){return Do(4,2,e,t)}function Fg(e,t){return Do(4,4,e,t)}function Kg(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xg(e,t,a){a=a!=null?a.concat([e]):null,Do(4,4,Kg.bind(null,t,e),a)}function uc(){}function Zg(e,t){var a=Pe();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Wl(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function Yg(e,t){var a=Pe();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Wl(t,o[1]))return o[0];if(o=e(),Tn){Na(!0);try{e()}finally{Na(!1)}}return a.memoizedState=[o,t],o}function dc(e,t,a){return a===void 0||(fa&1073741824)!==0&&(ye&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Qm(),be.lanes|=e,Fa|=e,a)}function Qg(e,t,a,o){return At(a,t)?a:os.current!==null?(e=dc(e,a,o),At(e,t)||(Xe=!0),e):(fa&42)===0||(fa&1073741824)!==0&&(ye&261930)===0?(Xe=!0,e.memoizedState=a):(e=Qm(),be.lanes|=e,Fa|=e,t)}function $g(e,t,a,o,c){var u=W.p;W.p=u!==0&&8>u?u:8;var h=I.T,k={};I.T=k,mc(e,!1,t,a);try{var M=c(),q=I.S;if(q!==null&&q(k,M),M!==null&&typeof M=="object"&&typeof M.then=="function"){var X=p_(M,o);ui(e,t,X,Nt(e))}else ui(e,t,o,Nt(e))}catch($){ui(e,t,{then:function(){},status:"rejected",reason:$},Nt())}finally{W.p=u,h!==null&&k.types!==null&&(h.types=k.types),I.T=h}}function x_(){}function pc(e,t,a,o){if(e.tag!==5)throw Error(r(476));var c=Jg(e).queue;$g(e,c,t,O,a===null?x_:function(){return Wg(e),a(o)})}function Jg(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:O,baseState:O,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:O},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Wg(e){var t=Jg(e);t.next===null&&(t=e.alternate.memoizedState),ui(e,t.next.queue,{},Nt())}function gc(){return it(ji)}function em(){return Pe().memoizedState}function tm(){return Pe().memoizedState}function __(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Nt();e=La(a);var o=Ha(t,e,a);o!==null&&(yt(o,t,a),ii(o,t,a)),t={cache:Bl()},e.payload=t;return}t=t.return}}function k_(e,t,a){var o=Nt();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},qo(e)?nm(t,a):(a=Nl(e,t,a,o),a!==null&&(yt(a,e,o),sm(a,t,o)))}function am(e,t,a){var o=Nt();ui(e,t,a,o)}function ui(e,t,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(qo(e))nm(t,c);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var h=t.lastRenderedState,k=u(h,a);if(c.hasEagerState=!0,c.eagerState=k,At(k,h))return bo(e,t,c,0),Ce===null&&ho(),!1}catch{}finally{}if(a=Nl(e,t,c,o),a!==null)return yt(a,e,o),sm(a,t,o),!0}return!1}function mc(e,t,a,o){if(o={lane:2,revertLane:Kc(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},qo(e)){if(t)throw Error(r(479))}else t=Nl(e,a,o,2),t!==null&&yt(t,e,2)}function qo(e){var t=e.alternate;return e===be||t!==null&&t===be}function nm(e,t){rs=Io=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function sm(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,cp(e,a)}}var di={readContext:it,use:Eo,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He};di.useEffectEvent=He;var im={readContext:it,use:Eo,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Bg,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Co(4194308,4,Kg.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Co(4194308,4,e,t)},useInsertionEffect:function(e,t){Co(4,2,e,t)},useMemo:function(e,t){var a=pt();t=t===void 0?null:t;var o=e();if(Tn){Na(!0);try{e()}finally{Na(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=pt();if(a!==void 0){var c=a(t);if(Tn){Na(!0);try{a(t)}finally{Na(!1)}}}else c=t;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=k_.bind(null,be,e),[o.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:function(e){e=rc(e);var t=e.queue,a=am.bind(null,be,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:uc,useDeferredValue:function(e,t){var a=pt();return dc(a,e,t)},useTransition:function(){var e=rc(!1);return e=$g.bind(null,be,e.queue,!0,!1),pt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=be,c=pt();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=t(),Ce===null)throw Error(r(349));(ye&127)!==0||Tg(o,t,a)}c.memoizedState=a;var u={value:a,getSnapshot:t};return c.queue=u,Bg(Sg.bind(null,o,u,e),[e]),o.flags|=2048,cs(9,{destroy:void 0},jg.bind(null,o,u,a,t),null),a},useId:function(){var e=pt(),t=Ce.identifierPrefix;if(Ae){var a=ea,o=Wt;a=(o&~(1<<32-Mt(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=wo++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=g_++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:gc,useFormState:Rg,useActionState:Rg,useOptimistic:function(e){var t=pt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=mc.bind(null,be,!0,a),a.dispatch=t,[e,t]},useMemoCache:sc,useCacheRefresh:function(){return pt().memoizedState=__.bind(null,be)},useEffectEvent:function(e){var t=pt(),a={impl:e};return t.memoizedState=a,function(){if((Se&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},hc={readContext:it,use:Eo,useCallback:Zg,useContext:it,useEffect:cc,useImperativeHandle:Xg,useInsertionEffect:Pg,useLayoutEffect:Fg,useMemo:Yg,useReducer:Vo,useRef:Og,useState:function(){return Vo(xa)},useDebugValue:uc,useDeferredValue:function(e,t){var a=Pe();return Qg(a,Ne.memoizedState,e,t)},useTransition:function(){var e=Vo(xa)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:ci(e),t]},useSyncExternalStore:Ag,useId:em,useHostTransitionStatus:gc,useFormState:zg,useActionState:zg,useOptimistic:function(e,t){var a=Pe();return Ng(a,Ne,e,t)},useMemoCache:sc,useCacheRefresh:tm};hc.useEffectEvent=Ug;var om={readContext:it,use:Eo,useCallback:Zg,useContext:it,useEffect:cc,useImperativeHandle:Xg,useInsertionEffect:Pg,useLayoutEffect:Fg,useMemo:Yg,useReducer:oc,useRef:Og,useState:function(){return oc(xa)},useDebugValue:uc,useDeferredValue:function(e,t){var a=Pe();return Ne===null?dc(a,e,t):Qg(a,Ne.memoizedState,e,t)},useTransition:function(){var e=oc(xa)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:ci(e),t]},useSyncExternalStore:Ag,useId:em,useHostTransitionStatus:gc,useFormState:Hg,useActionState:Hg,useOptimistic:function(e,t){var a=Pe();return Ne!==null?Ng(a,Ne,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:sc,useCacheRefresh:tm};om.useEffectEvent=Ug;function bc(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:_({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var fc={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=Nt(),c=La(o);c.payload=t,a!=null&&(c.callback=a),t=Ha(e,c,o),t!==null&&(yt(t,e,o),ii(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=Nt(),c=La(o);c.tag=1,c.payload=t,a!=null&&(c.callback=a),t=Ha(e,c,o),t!==null&&(yt(t,e,o),ii(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Nt(),o=La(a);o.tag=2,t!=null&&(o.callback=t),t=Ha(e,o,a),t!==null&&(yt(t,e,a),ii(t,e,a))}};function rm(e,t,a,o,c,u,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,h):t.prototype&&t.prototype.isPureReactComponent?!$s(a,o)||!$s(c,u):!0}function lm(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&fc.enqueueReplaceState(t,t.state,null)}function jn(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function cm(e){mo(e)}function um(e){console.error(e)}function dm(e){mo(e)}function Ro(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function pm(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function xc(e,t,a){return a=La(a),a.tag=3,a.payload={element:null},a.callback=function(){Ro(e,t)},a}function gm(e){return e=La(e),e.tag=3,e}function mm(e,t,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var u=o.value;e.payload=function(){return c(u)},e.callback=function(){pm(t,a,o)}}var h=a.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){pm(t,a,o),typeof c!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var k=o.stack;this.componentDidCatch(o.value,{componentStack:k!==null?k:""})})}function y_(e,t,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&ts(t,a,c,!0),a=jt.current,a!==null){switch(a.tag){case 31:case 13:return Ht===null?Yo():a.alternate===null&&Oe===0&&(Oe=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Mo?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),Uc(e,o,c)),!1;case 22:return a.flags|=65536,o===Mo?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),Uc(e,o,c)),!1}throw Error(r(435,a.tag))}return Uc(e,o,c),Yo(),!1}if(Ae)return t=jt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,o!==Rl&&(e=Error(r(422),{cause:o}),ei(qt(e,a)))):(o!==Rl&&(t=Error(r(423),{cause:o}),ei(qt(t,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=qt(o,a),c=xc(e.stateNode,o,c),Zl(e,c),Oe!==4&&(Oe=2)),!1;var u=Error(r(520),{cause:o});if(u=qt(u,a),_i===null?_i=[u]:_i.push(u),Oe!==4&&(Oe=2),t===null)return!0;o=qt(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=xc(a.stateNode,o,e),Zl(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Ka===null||!Ka.has(u))))return a.flags|=65536,c&=-c,a.lanes|=c,c=gm(c),mm(c,e,a,o),Zl(a,c),!1}a=a.return}while(a!==null);return!1}var _c=Error(r(461)),Xe=!1;function ot(e,t,a,o){t.child=e===null?xg(t,null,a,o):An(t,e.child,a,o)}function hm(e,t,a,o,c){a=a.render;var u=t.ref;if("ref"in o){var h={};for(var k in o)k!=="ref"&&(h[k]=o[k])}else h=o;return yn(t),o=ec(e,t,a,h,u,c),k=tc(),e!==null&&!Xe?(ac(e,t,c),_a(e,t,c)):(Ae&&k&&Dl(t),t.flags|=1,ot(e,t,o,c),t.child)}function bm(e,t,a,o,c){if(e===null){var u=a.type;return typeof u=="function"&&!El(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,fm(e,t,u,o,c)):(e=xo(a.type,null,o,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!jc(e,c)){var h=u.memoizedProps;if(a=a.compare,a=a!==null?a:$s,a(h,o)&&e.ref===t.ref)return _a(e,t,c)}return t.flags|=1,e=ga(u,o),e.ref=t.ref,e.return=t,t.child=e}function fm(e,t,a,o,c){if(e!==null){var u=e.memoizedProps;if($s(u,o)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=o=u,jc(e,c))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,_a(e,t,c)}return kc(e,t,a,o,c)}function xm(e,t,a,o){var c=o.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(o=t.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~u}else o=0,t.child=null;return _m(e,t,u,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&vo(t,u!==null?u.cachePool:null),u!==null?yg(t,u):Ql(),vg(t);else return o=t.lanes=536870912,_m(e,t,u!==null?u.baseLanes|a:a,a,o)}else u!==null?(vo(t,u.cachePool),yg(t,u),Ba(),t.memoizedState=null):(e!==null&&vo(t,null),Ql(),Ba());return ot(e,t,c,a),t.child}function pi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function _m(e,t,a,o,c){var u=Pl();return u=u===null?null:{parent:Fe._currentValue,pool:u},t.memoizedState={baseLanes:a,cachePool:u},e!==null&&vo(t,null),Ql(),vg(t),e!==null&&ts(e,t,o,!0),t.childLanes=c,null}function zo(e,t){return t=Ho({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function km(e,t,a){return An(t,e.child,null,a),e=zo(t,t.pendingProps),e.flags|=2,St(t),t.memoizedState=null,e}function v_(e,t,a){var o=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ae){if(o.mode==="hidden")return e=zo(t,o),t.lanes=536870912,pi(null,e);if(Jl(t),(e=Re)?(e=Eh(e,Lt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Wt,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},a=ng(e),a.return=t,t.child=a,st=t,Re=null)):e=null,e===null)throw qa(t);return t.lanes=536870912,null}return zo(t,o)}var u=e.memoizedState;if(u!==null){var h=u.dehydrated;if(Jl(t),c)if(t.flags&256)t.flags&=-257,t=km(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Xe||ts(e,t,a,!1),c=(a&e.childLanes)!==0,Xe||c){if(o=Ce,o!==null&&(h=up(o,a),h!==0&&h!==u.retryLane))throw u.retryLane=h,fn(e,h),yt(o,e,h),_c;Yo(),t=km(e,t,a)}else e=u.treeContext,Re=Ot(h.nextSibling),st=t,Ae=!0,Da=null,Lt=!1,e!==null&&og(t,e),t=zo(t,o),t.flags|=4096;return t}return e=ga(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Lo(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function kc(e,t,a,o,c){return yn(t),a=ec(e,t,a,o,void 0,c),o=tc(),e!==null&&!Xe?(ac(e,t,c),_a(e,t,c)):(Ae&&o&&Dl(t),t.flags|=1,ot(e,t,a,c),t.child)}function ym(e,t,a,o,c,u){return yn(t),t.updateQueue=null,a=Mg(t,o,a,c),Gg(e),o=tc(),e!==null&&!Xe?(ac(e,t,u),_a(e,t,u)):(Ae&&o&&Dl(t),t.flags|=1,ot(e,t,a,u),t.child)}function vm(e,t,a,o,c){if(yn(t),t.stateNode===null){var u=$n,h=a.contextType;typeof h=="object"&&h!==null&&(u=it(h)),u=new a(o,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=fc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=o,u.state=t.memoizedState,u.refs={},Kl(t),h=a.contextType,u.context=typeof h=="object"&&h!==null?it(h):$n,u.state=t.memoizedState,h=a.getDerivedStateFromProps,typeof h=="function"&&(bc(t,a,h,o),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(h=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),h!==u.state&&fc.enqueueReplaceState(u,u.state,null),ri(t,o,u,c),oi(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){u=t.stateNode;var k=t.memoizedProps,M=jn(a,k);u.props=M;var q=u.context,X=a.contextType;h=$n,typeof X=="object"&&X!==null&&(h=it(X));var $=a.getDerivedStateFromProps;X=typeof $=="function"||typeof u.getSnapshotBeforeUpdate=="function",k=t.pendingProps!==k,X||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(k||q!==h)&&lm(t,u,o,h),za=!1;var z=t.memoizedState;u.state=z,ri(t,o,u,c),oi(),q=t.memoizedState,k||z!==q||za?(typeof $=="function"&&(bc(t,a,$,o),q=t.memoizedState),(M=za||rm(t,a,M,o,z,q,h))?(X||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=q),u.props=o,u.state=q,u.context=h,o=M):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{u=t.stateNode,Xl(e,t),h=t.memoizedProps,X=jn(a,h),u.props=X,$=t.pendingProps,z=u.context,q=a.contextType,M=$n,typeof q=="object"&&q!==null&&(M=it(q)),k=a.getDerivedStateFromProps,(q=typeof k=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==$||z!==M)&&lm(t,u,o,M),za=!1,z=t.memoizedState,u.state=z,ri(t,o,u,c),oi();var U=t.memoizedState;h!==$||z!==U||za||e!==null&&e.dependencies!==null&&ko(e.dependencies)?(typeof k=="function"&&(bc(t,a,k,o),U=t.memoizedState),(X=za||rm(t,a,X,o,z,U,M)||e!==null&&e.dependencies!==null&&ko(e.dependencies))?(q||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,U,M),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,U,M)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=U),u.props=o,u.state=U,u.context=M,o=X):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),o=!1)}return u=o,Lo(e,t),o=(t.flags&128)!==0,u||o?(u=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&o?(t.child=An(t,e.child,null,c),t.child=An(t,null,a,c)):ot(e,t,a,c),t.memoizedState=u.state,e=t.child):e=_a(e,t,c),e}function Gm(e,t,a,o){return _n(),t.flags|=256,ot(e,t,a,o),t.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vc(e){return{baseLanes:e,cachePool:pg()}}function Gc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=wt),e}function Mm(e,t,a){var o=t.pendingProps,c=!1,u=(t.flags&128)!==0,h;if((h=u)||(h=e!==null&&e.memoizedState===null?!1:(Ue.current&2)!==0),h&&(c=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ae){if(c?Oa(t):Ba(),(e=Re)?(e=Eh(e,Lt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Wt,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},a=ng(e),a.return=t,t.child=a,st=t,Re=null)):e=null,e===null)throw qa(t);return iu(e)?t.lanes=32:t.lanes=536870912,null}var k=o.children;return o=o.fallback,c?(Ba(),c=t.mode,k=Ho({mode:"hidden",children:k},c),o=xn(o,c,a,null),k.return=t,o.return=t,k.sibling=o,t.child=k,o=t.child,o.memoizedState=vc(a),o.childLanes=Gc(e,h,a),t.memoizedState=yc,pi(null,o)):(Oa(t),Mc(t,k))}var M=e.memoizedState;if(M!==null&&(k=M.dehydrated,k!==null)){if(u)t.flags&256?(Oa(t),t.flags&=-257,t=Ac(e,t,a)):t.memoizedState!==null?(Ba(),t.child=e.child,t.flags|=128,t=null):(Ba(),k=o.fallback,c=t.mode,o=Ho({mode:"visible",children:o.children},c),k=xn(k,c,a,null),k.flags|=2,o.return=t,k.return=t,o.sibling=k,t.child=o,An(t,e.child,null,a),o=t.child,o.memoizedState=vc(a),o.childLanes=Gc(e,h,a),t.memoizedState=yc,t=pi(null,o));else if(Oa(t),iu(k)){if(h=k.nextSibling&&k.nextSibling.dataset,h)var q=h.dgst;h=q,o=Error(r(419)),o.stack="",o.digest=h,ei({value:o,source:null,stack:null}),t=Ac(e,t,a)}else if(Xe||ts(e,t,a,!1),h=(a&e.childLanes)!==0,Xe||h){if(h=Ce,h!==null&&(o=up(h,a),o!==0&&o!==M.retryLane))throw M.retryLane=o,fn(e,o),yt(h,e,o),_c;su(k)||Yo(),t=Ac(e,t,a)}else su(k)?(t.flags|=192,t.child=e.child,t=null):(e=M.treeContext,Re=Ot(k.nextSibling),st=t,Ae=!0,Da=null,Lt=!1,e!==null&&og(t,e),t=Mc(t,o.children),t.flags|=4096);return t}return c?(Ba(),k=o.fallback,c=t.mode,M=e.child,q=M.sibling,o=ga(M,{mode:"hidden",children:o.children}),o.subtreeFlags=M.subtreeFlags&65011712,q!==null?k=ga(q,k):(k=xn(k,c,a,null),k.flags|=2),k.return=t,o.return=t,o.sibling=k,t.child=o,pi(null,o),o=t.child,k=e.child.memoizedState,k===null?k=vc(a):(c=k.cachePool,c!==null?(M=Fe._currentValue,c=c.parent!==M?{parent:M,pool:M}:c):c=pg(),k={baseLanes:k.baseLanes|a,cachePool:c}),o.memoizedState=k,o.childLanes=Gc(e,h,a),t.memoizedState=yc,pi(e.child,o)):(Oa(t),a=e.child,e=a.sibling,a=ga(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=a,t.memoizedState=null,a)}function Mc(e,t){return t=Ho({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ho(e,t){return e=Tt(22,e,null,t),e.lanes=0,e}function Ac(e,t,a){return An(t,e.child,null,a),e=Mc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Am(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Hl(e.return,t,a)}function Tc(e,t,a,o,c,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:u}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=c,h.treeForkCount=u)}function Tm(e,t,a){var o=t.pendingProps,c=o.revealOrder,u=o.tail;o=o.children;var h=Ue.current,k=(h&2)!==0;if(k?(h=h&1|2,t.flags|=128):h&=1,te(Ue,h),ot(e,t,o,a),o=Ae?Ws:0,!k&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Am(e,a,t);else if(e.tag===19)Am(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=t.child,c=null;a!==null;)e=a.alternate,e!==null&&So(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=t.child,t.child=null):(c=a.sibling,a.sibling=null),Tc(t,!1,c,a,u,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&So(e)===null){t.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Tc(t,!0,a,null,u,o);break;case"together":Tc(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function _a(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ts(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,a=ga(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ga(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ko(e)))}function G_(e,t,a){switch(t.tag){case 3:Me(t,t.stateNode.containerInfo),Ra(t,Fe,e.memoizedState.cache),_n();break;case 27:case 5:Jt(t);break;case 4:Me(t,t.stateNode.containerInfo);break;case 10:Ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Jl(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(Oa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Mm(e,t,a):(Oa(t),e=_a(e,t,a),e!==null?e.sibling:null);Oa(t);break;case 19:var c=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(ts(e,t,a,!1),o=(a&t.childLanes)!==0),c){if(o)return Tm(e,t,a);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),te(Ue,Ue.current),o)break;return null;case 22:return t.lanes=0,xm(e,t,a,t.pendingProps);case 24:Ra(t,Fe,e.memoizedState.cache)}return _a(e,t,a)}function jm(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!jc(e,a)&&(t.flags&128)===0)return Xe=!1,G_(e,t,a);Xe=(e.flags&131072)!==0}else Xe=!1,Ae&&(t.flags&1048576)!==0&&ig(t,Ws,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=Gn(t.elementType),t.type=e,typeof e=="function")El(e)?(o=jn(e,o),t.tag=1,t=vm(null,t,e,o,a)):(t.tag=0,t=kc(null,t,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===V){t.tag=11,t=hm(null,t,e,o,a);break e}else if(c===R){t.tag=14,t=bm(null,t,e,o,a);break e}}throw t=Q(e)||e,Error(r(306,t,""))}}return t;case 0:return kc(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,c=jn(o,t.pendingProps),vm(e,t,o,c,a);case 3:e:{if(Me(t,t.stateNode.containerInfo),e===null)throw Error(r(387));o=t.pendingProps;var u=t.memoizedState;c=u.element,Xl(e,t),ri(t,o,null,a);var h=t.memoizedState;if(o=h.cache,Ra(t,Fe,o),o!==u.cache&&Ol(t,[Fe],a,!0),oi(),o=h.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Gm(e,t,o,a);break e}else if(o!==c){c=qt(Error(r(424)),t),ei(c),t=Gm(e,t,o,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=Ot(e.firstChild),st=t,Ae=!0,Da=null,Lt=!0,a=xg(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(_n(),o===c){t=_a(e,t,a);break e}ot(e,t,o,a)}t=t.child}return t;case 26:return Lo(e,t),e===null?(a=zh(t.type,null,t.pendingProps,null))?t.memoizedState=a:Ae||(a=t.type,e=t.pendingProps,o=ar(me.current).createElement(a),o[nt]=t,o[ht]=e,rt(o,a,e),tt(o),t.stateNode=o):t.memoizedState=zh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Jt(t),e===null&&Ae&&(o=t.stateNode=Dh(t.type,t.pendingProps,me.current),st=t,Lt=!0,c=Re,Qa(t.type)?(ou=c,Re=Ot(o.firstChild)):Re=c),ot(e,t,t.pendingProps.children,a),Lo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ae&&((c=o=Re)&&(o=W_(o,t.type,t.pendingProps,Lt),o!==null?(t.stateNode=o,st=t,Re=Ot(o.firstChild),Lt=!1,c=!0):c=!1),c||qa(t)),Jt(t),c=t.type,u=t.pendingProps,h=e!==null?e.memoizedProps:null,o=u.children,tu(c,u)?o=null:h!==null&&tu(c,h)&&(t.flags|=32),t.memoizedState!==null&&(c=ec(e,t,m_,null,null,a),ji._currentValue=c),Lo(e,t),ot(e,t,o,a),t.child;case 6:return e===null&&Ae&&((e=a=Re)&&(a=e2(a,t.pendingProps,Lt),a!==null?(t.stateNode=a,st=t,Re=null,e=!0):e=!1),e||qa(t)),null;case 13:return Mm(e,t,a);case 4:return Me(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=An(t,null,o,a):ot(e,t,o,a),t.child;case 11:return hm(e,t,t.type,t.pendingProps,a);case 7:return ot(e,t,t.pendingProps,a),t.child;case 8:return ot(e,t,t.pendingProps.children,a),t.child;case 12:return ot(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,Ra(t,t.type,o.value),ot(e,t,o.children,a),t.child;case 9:return c=t.type._context,o=t.pendingProps.children,yn(t),c=it(c),o=o(c),t.flags|=1,ot(e,t,o,a),t.child;case 14:return bm(e,t,t.type,t.pendingProps,a);case 15:return fm(e,t,t.type,t.pendingProps,a);case 19:return Tm(e,t,a);case 31:return v_(e,t,a);case 22:return xm(e,t,a,t.pendingProps);case 24:return yn(t),o=it(Fe),e===null?(c=Pl(),c===null&&(c=Ce,u=Bl(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=a),c=u),t.memoizedState={parent:o,cache:c},Kl(t),Ra(t,Fe,c)):((e.lanes&a)!==0&&(Xl(e,t),ri(t,null,null,a),oi()),c=e.memoizedState,u=t.memoizedState,c.parent!==o?(c={parent:o,cache:o},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),Ra(t,Fe,o)):(o=u.cache,Ra(t,Fe,o),o!==c.cache&&Ol(t,[Fe],a,!0))),ot(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function ka(e){e.flags|=4}function Sc(e,t,a,o,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(eh())e.flags|=8192;else throw Mn=Mo,Fl}else e.flags&=-16777217}function Sm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Uh(t))if(eh())e.flags|=8192;else throw Mn=Mo,Fl}function Oo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?rp():536870912,e.lanes|=t,gs|=t)}function gi(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function M_(e,t,a){var o=t.pendingProps;switch(ql(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),ba(Fe),xe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(es(t)?ka(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zl())),ze(t),null;case 26:var c=t.type,u=t.memoizedState;return e===null?(ka(t),u!==null?(ze(t),Sm(t,u)):(ze(t),Sc(t,c,null,o,a))):u?u!==e.memoizedState?(ka(t),ze(t),Sm(t,u)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&ka(t),ze(t),Sc(t,c,e,o,a)),null;case 27:if(wa(t),a=me.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&ka(t);else{if(!o){if(t.stateNode===null)throw Error(r(166));return ze(t),null}e=oe.current,es(t)?rg(t):(e=Dh(c,o,a),t.stateNode=e,ka(t))}return ze(t),null;case 5:if(wa(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&ka(t);else{if(!o){if(t.stateNode===null)throw Error(r(166));return ze(t),null}if(u=oe.current,es(t))rg(t);else{var h=ar(me.current);switch(u){case 1:u=h.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=h.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=h.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=h.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=h.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof o.is=="string"?h.createElement("select",{is:o.is}):h.createElement("select"),o.multiple?u.multiple=!0:o.size&&(u.size=o.size);break;default:u=typeof o.is=="string"?h.createElement(c,{is:o.is}):h.createElement(c)}}u[nt]=t,u[ht]=o;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)u.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=u;e:switch(rt(u,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ka(t)}}return ze(t),Sc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&ka(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(r(166));if(e=me.current,es(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,c=st,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[nt]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Mh(e.nodeValue,a)),e||qa(t,!0)}else e=ar(e).createTextNode(o),e[nt]=t,t.stateNode=e}return ze(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=es(t),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[nt]=t}else _n(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else a=zl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(St(t),t):(St(t),null);if((t.flags&128)!==0)throw Error(r(558))}return ze(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=es(t),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[nt]=t}else _n(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),c=!1}else c=zl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(St(t),t):(St(t),null)}return St(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),u=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==c&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Oo(t,t.updateQueue),ze(t),null);case 4:return xe(),e===null&&Qc(t.stateNode.containerInfo),ze(t),null;case 10:return ba(t.type),ze(t),null;case 19:if(P(Ue),o=t.memoizedState,o===null)return ze(t),null;if(c=(t.flags&128)!==0,u=o.rendering,u===null)if(c)gi(o,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=So(e),u!==null){for(t.flags|=128,gi(o,!1),e=u.updateQueue,t.updateQueue=e,Oo(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)ag(a,e),a=a.sibling;return te(Ue,Ue.current&1|2),Ae&&ma(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&vt()>Ko&&(t.flags|=128,c=!0,gi(o,!1),t.lanes=4194304)}else{if(!c)if(e=So(u),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,Oo(t,e),gi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!Ae)return ze(t),null}else 2*vt()-o.renderingStartTime>Ko&&a!==536870912&&(t.flags|=128,c=!0,gi(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(e=o.last,e!==null?e.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=vt(),e.sibling=null,a=Ue.current,te(Ue,c?a&1|2:a&1),Ae&&ma(t,o.treeForkCount),e):(ze(t),null);case 22:case 23:return St(t),$l(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),a=t.updateQueue,a!==null&&Oo(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&P(vn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ba(Fe),ze(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function A_(e,t){switch(ql(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ba(Fe),xe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return wa(t),null;case 31:if(t.memoizedState!==null){if(St(t),t.alternate===null)throw Error(r(340));_n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(St(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));_n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return P(Ue),null;case 4:return xe(),null;case 10:return ba(t.type),null;case 22:case 23:return St(t),$l(),e!==null&&P(vn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ba(Fe),null;case 25:return null;default:return null}}function Im(e,t){switch(ql(t),t.tag){case 3:ba(Fe),xe();break;case 26:case 27:case 5:wa(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&St(t);break;case 13:St(t);break;case 19:P(Ue);break;case 10:ba(t.type);break;case 22:case 23:St(t),$l(),e!==null&&P(vn);break;case 24:ba(Fe)}}function mi(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var u=a.create,h=a.inst;o=u(),h.destroy=o}a=a.next}while(a!==c)}}catch(k){we(t,t.return,k)}}function Ua(e,t,a){try{var o=t.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var u=c.next;o=u;do{if((o.tag&e)===e){var h=o.inst,k=h.destroy;if(k!==void 0){h.destroy=void 0,c=t;var M=a,q=k;try{q()}catch(X){we(c,M,X)}}}o=o.next}while(o!==u)}}catch(X){we(t,t.return,X)}}function wm(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{kg(t,a)}catch(o){we(e,e.return,o)}}}function Nm(e,t,a){a.props=jn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){we(e,t,o)}}function hi(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){we(e,t,c)}}function ta(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){we(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){we(e,t,c)}else a.current=null}function Em(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){we(e,e.return,c)}}function Ic(e,t,a){try{var o=e.stateNode;X_(o,e.type,a,t),o[ht]=t}catch(c){we(e,e.return,c)}}function Vm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qa(e.type)||e.tag===4}function wc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nc(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=da));else if(o!==4&&(o===27&&Qa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Nc(e,t,a),e=e.sibling;e!==null;)Nc(e,t,a),e=e.sibling}function Bo(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&Qa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Bo(e,t,a),e=e.sibling;e!==null;)Bo(e,t,a),e=e.sibling}function Cm(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);rt(t,o,a),t[nt]=e,t[ht]=a}catch(u){we(e,e.return,u)}}var ya=!1,Ze=!1,Ec=!1,Dm=typeof WeakSet=="function"?WeakSet:Set,at=null;function T_(e,t){if(e=e.containerInfo,Wc=cr,e=Xp(e),Al(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var h=0,k=-1,M=-1,q=0,X=0,$=e,z=null;t:for(;;){for(var U;$!==a||c!==0&&$.nodeType!==3||(k=h+c),$!==u||o!==0&&$.nodeType!==3||(M=h+o),$.nodeType===3&&(h+=$.nodeValue.length),(U=$.firstChild)!==null;)z=$,$=U;for(;;){if($===e)break t;if(z===a&&++q===c&&(k=h),z===u&&++X===o&&(M=h),(U=$.nextSibling)!==null)break;$=z,z=$.parentNode}$=U}a=k===-1||M===-1?null:{start:k,end:M}}else a=null}a=a||{start:0,end:0}}else a=null;for(eu={focusedElem:e,selectionRange:a},cr=!1,at=t;at!==null;)if(t=at,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,at=e;else for(;at!==null;){switch(t=at,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,c=u.memoizedProps,u=u.memoizedState,o=a.stateNode;try{var re=jn(a.type,c);e=o.getSnapshotBeforeUpdate(re,u),o.__reactInternalSnapshotBeforeUpdate=e}catch(ge){we(a,a.return,ge)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)nu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,at=e;break}at=t.return}}function qm(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ga(e,a),o&4&&mi(5,a);break;case 1:if(Ga(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(h){we(a,a.return,h)}else{var c=jn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){we(a,a.return,h)}}o&64&&wm(a),o&512&&hi(a,a.return);break;case 3:if(Ga(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{kg(e,t)}catch(h){we(a,a.return,h)}}break;case 27:t===null&&o&4&&Cm(a);case 26:case 5:Ga(e,a),t===null&&o&4&&Em(a),o&512&&hi(a,a.return);break;case 12:Ga(e,a);break;case 31:Ga(e,a),o&4&&Lm(e,a);break;case 13:Ga(e,a),o&4&&Hm(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=D_.bind(null,a),t2(e,a))));break;case 22:if(o=a.memoizedState!==null||ya,!o){t=t!==null&&t.memoizedState!==null||Ze,c=ya;var u=Ze;ya=o,(Ze=t)&&!u?Ma(e,a,(a.subtreeFlags&8772)!==0):Ga(e,a),ya=c,Ze=u}break;case 30:break;default:Ga(e,a)}}function Rm(e){var t=e.alternate;t!==null&&(e.alternate=null,Rm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ll(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,ft=!1;function va(e,t,a){for(a=a.child;a!==null;)zm(e,t,a),a=a.sibling}function zm(e,t,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Ls,a)}catch{}switch(a.tag){case 26:Ze||ta(a,t),va(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ze||ta(a,t);var o=Le,c=ft;Qa(a.type)&&(Le=a.stateNode,ft=!1),va(e,t,a),Mi(a.stateNode),Le=o,ft=c;break;case 5:Ze||ta(a,t);case 6:if(o=Le,c=ft,Le=null,va(e,t,a),Le=o,ft=c,Le!==null)if(ft)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(a.stateNode)}catch(u){we(a,t,u)}else try{Le.removeChild(a.stateNode)}catch(u){we(a,t,u)}break;case 18:Le!==null&&(ft?(e=Le,wh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ys(e)):wh(Le,a.stateNode));break;case 4:o=Le,c=ft,Le=a.stateNode.containerInfo,ft=!0,va(e,t,a),Le=o,ft=c;break;case 0:case 11:case 14:case 15:Ua(2,a,t),Ze||Ua(4,a,t),va(e,t,a);break;case 1:Ze||(ta(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Nm(a,t,o)),va(e,t,a);break;case 21:va(e,t,a);break;case 22:Ze=(o=Ze)||a.memoizedState!==null,va(e,t,a),Ze=o;break;default:va(e,t,a)}}function Lm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ys(e)}catch(a){we(t,t.return,a)}}}function Hm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ys(e)}catch(a){we(t,t.return,a)}}function j_(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Dm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Dm),t;default:throw Error(r(435,e.tag))}}function Uo(e,t){var a=j_(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var c=q_.bind(null,e,o);o.then(c,c)}})}function xt(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],u=e,h=t,k=h;e:for(;k!==null;){switch(k.tag){case 27:if(Qa(k.type)){Le=k.stateNode,ft=!1;break e}break;case 5:Le=k.stateNode,ft=!1;break e;case 3:case 4:Le=k.stateNode.containerInfo,ft=!0;break e}k=k.return}if(Le===null)throw Error(r(160));zm(u,h,c),Le=null,ft=!1,u=c.alternate,u!==null&&(u.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Om(t,e),t=t.sibling}var Kt=null;function Om(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xt(t,e),_t(e),o&4&&(Ua(3,e,e.return),mi(3,e),Ua(5,e,e.return));break;case 1:xt(t,e),_t(e),o&512&&(Ze||a===null||ta(a,a.return)),o&64&&ya&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Kt;if(xt(t,e),_t(e),o&512&&(Ze||a===null||ta(a,a.return)),o&4){var u=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":u=c.getElementsByTagName("title")[0],(!u||u[Bs]||u[nt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=c.createElement(o),c.head.insertBefore(u,c.querySelector("head > title"))),rt(u,o,a),u[nt]=e,tt(u),o=u;break e;case"link":var h=Oh("link","href",c).get(o+(a.href||""));if(h){for(var k=0;k<h.length;k++)if(u=h[k],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){h.splice(k,1);break t}}u=c.createElement(o),rt(u,o,a),c.head.appendChild(u);break;case"meta":if(h=Oh("meta","content",c).get(o+(a.content||""))){for(k=0;k<h.length;k++)if(u=h[k],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){h.splice(k,1);break t}}u=c.createElement(o),rt(u,o,a),c.head.appendChild(u);break;default:throw Error(r(468,o))}u[nt]=e,tt(u),o=u}e.stateNode=o}else Bh(c,e.type,e.stateNode);else e.stateNode=Hh(c,o,e.memoizedProps);else u!==o?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,o===null?Bh(c,e.type,e.stateNode):Hh(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Ic(e,e.memoizedProps,a.memoizedProps)}break;case 27:xt(t,e),_t(e),o&512&&(Ze||a===null||ta(a,a.return)),a!==null&&o&4&&Ic(e,e.memoizedProps,a.memoizedProps);break;case 5:if(xt(t,e),_t(e),o&512&&(Ze||a===null||ta(a,a.return)),e.flags&32){c=e.stateNode;try{Pn(c,"")}catch(re){we(e,e.return,re)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,Ic(e,c,a!==null?a.memoizedProps:c)),o&1024&&(Ec=!0);break;case 6:if(xt(t,e),_t(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(re){we(e,e.return,re)}}break;case 3:if(ir=null,c=Kt,Kt=nr(t.containerInfo),xt(t,e),Kt=c,_t(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ys(t.containerInfo)}catch(re){we(e,e.return,re)}Ec&&(Ec=!1,Bm(e));break;case 4:o=Kt,Kt=nr(e.stateNode.containerInfo),xt(t,e),_t(e),Kt=o;break;case 12:xt(t,e),_t(e);break;case 31:xt(t,e),_t(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Uo(e,o)));break;case 13:xt(t,e),_t(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fo=vt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Uo(e,o)));break;case 22:c=e.memoizedState!==null;var M=a!==null&&a.memoizedState!==null,q=ya,X=Ze;if(ya=q||c,Ze=X||M,xt(t,e),Ze=X,ya=q,_t(e),o&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(a===null||M||ya||Ze||Sn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){M=a=t;try{if(u=M.stateNode,c)h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{k=M.stateNode;var $=M.memoizedProps.style,z=$!=null&&$.hasOwnProperty("display")?$.display:null;k.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(re){we(M,M.return,re)}}}else if(t.tag===6){if(a===null){M=t;try{M.stateNode.nodeValue=c?"":M.memoizedProps}catch(re){we(M,M.return,re)}}}else if(t.tag===18){if(a===null){M=t;try{var U=M.stateNode;c?Nh(U,!0):Nh(M.stateNode,!1)}catch(re){we(M,M.return,re)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Uo(e,a))));break;case 19:xt(t,e),_t(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Uo(e,o)));break;case 30:break;case 21:break;default:xt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(Vm(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,u=wc(e);Bo(e,u,c);break;case 5:var h=a.stateNode;a.flags&32&&(Pn(h,""),a.flags&=-33);var k=wc(e);Bo(e,k,h);break;case 3:case 4:var M=a.stateNode.containerInfo,q=wc(e);Nc(e,q,M);break;default:throw Error(r(161))}}catch(X){we(e,e.return,X)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Bm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ga(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)qm(e,t.alternate,t),t=t.sibling}function Sn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ua(4,t,t.return),Sn(t);break;case 1:ta(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Nm(t,t.return,a),Sn(t);break;case 27:Mi(t.stateNode);case 26:case 5:ta(t,t.return),Sn(t);break;case 22:t.memoizedState===null&&Sn(t);break;case 30:Sn(t);break;default:Sn(t)}e=e.sibling}}function Ma(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,c=e,u=t,h=u.flags;switch(u.tag){case 0:case 11:case 15:Ma(c,u,a),mi(4,u);break;case 1:if(Ma(c,u,a),o=u,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(q){we(o,o.return,q)}if(o=u,c=o.updateQueue,c!==null){var k=o.stateNode;try{var M=c.shared.hiddenCallbacks;if(M!==null)for(c.shared.hiddenCallbacks=null,c=0;c<M.length;c++)_g(M[c],k)}catch(q){we(o,o.return,q)}}a&&h&64&&wm(u),hi(u,u.return);break;case 27:Cm(u);case 26:case 5:Ma(c,u,a),a&&o===null&&h&4&&Em(u),hi(u,u.return);break;case 12:Ma(c,u,a);break;case 31:Ma(c,u,a),a&&h&4&&Lm(c,u);break;case 13:Ma(c,u,a),a&&h&4&&Hm(c,u);break;case 22:u.memoizedState===null&&Ma(c,u,a),hi(u,u.return);break;case 30:break;default:Ma(c,u,a)}t=t.sibling}}function Vc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ti(a))}function Cc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ti(e))}function Xt(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Um(e,t,a,o),t=t.sibling}function Um(e,t,a,o){var c=t.flags;switch(t.tag){case 0:case 11:case 15:Xt(e,t,a,o),c&2048&&mi(9,t);break;case 1:Xt(e,t,a,o);break;case 3:Xt(e,t,a,o),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ti(e)));break;case 12:if(c&2048){Xt(e,t,a,o),e=t.stateNode;try{var u=t.memoizedProps,h=u.id,k=u.onPostCommit;typeof k=="function"&&k(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(M){we(t,t.return,M)}}else Xt(e,t,a,o);break;case 31:Xt(e,t,a,o);break;case 13:Xt(e,t,a,o);break;case 23:break;case 22:u=t.stateNode,h=t.alternate,t.memoizedState!==null?u._visibility&2?Xt(e,t,a,o):bi(e,t):u._visibility&2?Xt(e,t,a,o):(u._visibility|=2,us(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),c&2048&&Vc(h,t);break;case 24:Xt(e,t,a,o),c&2048&&Cc(t.alternate,t);break;default:Xt(e,t,a,o)}}function us(e,t,a,o,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,h=t,k=a,M=o,q=h.flags;switch(h.tag){case 0:case 11:case 15:us(u,h,k,M,c),mi(8,h);break;case 23:break;case 22:var X=h.stateNode;h.memoizedState!==null?X._visibility&2?us(u,h,k,M,c):bi(u,h):(X._visibility|=2,us(u,h,k,M,c)),c&&q&2048&&Vc(h.alternate,h);break;case 24:us(u,h,k,M,c),c&&q&2048&&Cc(h.alternate,h);break;default:us(u,h,k,M,c)}t=t.sibling}}function bi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,c=o.flags;switch(o.tag){case 22:bi(a,o),c&2048&&Vc(o.alternate,o);break;case 24:bi(a,o),c&2048&&Cc(o.alternate,o);break;default:bi(a,o)}t=t.sibling}}var fi=8192;function ds(e,t,a){if(e.subtreeFlags&fi)for(e=e.child;e!==null;)Pm(e,t,a),e=e.sibling}function Pm(e,t,a){switch(e.tag){case 26:ds(e,t,a),e.flags&fi&&e.memoizedState!==null&&g2(a,Kt,e.memoizedState,e.memoizedProps);break;case 5:ds(e,t,a);break;case 3:case 4:var o=Kt;Kt=nr(e.stateNode.containerInfo),ds(e,t,a),Kt=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=fi,fi=16777216,ds(e,t,a),fi=o):ds(e,t,a));break;default:ds(e,t,a)}}function Fm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function xi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];at=o,Xm(o,e)}Fm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Km(e),e=e.sibling}function Km(e){switch(e.tag){case 0:case 11:case 15:xi(e),e.flags&2048&&Ua(9,e,e.return);break;case 3:xi(e);break;case 12:xi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Po(e)):xi(e);break;default:xi(e)}}function Po(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];at=o,Xm(o,e)}Fm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ua(8,t,t.return),Po(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Po(t));break;default:Po(t)}e=e.sibling}}function Xm(e,t){for(;at!==null;){var a=at;switch(a.tag){case 0:case 11:case 15:Ua(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ti(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,at=o;else e:for(a=e;at!==null;){o=at;var c=o.sibling,u=o.return;if(Rm(o),o===a){at=null;break e}if(c!==null){c.return=u,at=c;break e}at=u}}}var S_={getCacheForType:function(e){var t=it(Fe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return it(Fe).controller.signal}},I_=typeof WeakMap=="function"?WeakMap:Map,Se=0,Ce=null,_e=null,ye=0,Ie=0,It=null,Pa=!1,ps=!1,Dc=!1,Aa=0,Oe=0,Fa=0,In=0,qc=0,wt=0,gs=0,_i=null,kt=null,Rc=!1,Fo=0,Zm=0,Ko=1/0,Xo=null,Ka=null,$e=0,Xa=null,ms=null,Ta=0,zc=0,Lc=null,Ym=null,ki=0,Hc=null;function Nt(){return(Se&2)!==0&&ye!==0?ye&-ye:I.T!==null?Kc():dp()}function Qm(){if(wt===0)if((ye&536870912)===0||Ae){var e=eo;eo<<=1,(eo&3932160)===0&&(eo=262144),wt=e}else wt=536870912;return e=jt.current,e!==null&&(e.flags|=32),wt}function yt(e,t,a){(e===Ce&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(hs(e,0),Za(e,ye,wt,!1)),Os(e,a),((Se&2)===0||e!==Ce)&&(e===Ce&&((Se&2)===0&&(In|=a),Oe===4&&Za(e,ye,wt,!1)),aa(e))}function $m(e,t,a){if((Se&6)!==0)throw Error(r(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Hs(e,t),c=o?E_(e,t):Bc(e,t,!0),u=o;do{if(c===0){ps&&!o&&Za(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!w_(a)){c=Bc(e,t,!1),u=!1;continue}if(c===2){if(u=t,e.errorRecoveryDisabledLanes&u)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var k=e;c=_i;var M=k.current.memoizedState.isDehydrated;if(M&&(hs(k,h).flags|=256),h=Bc(k,h,!1),h!==2){if(Dc&&!M){k.errorRecoveryDisabledLanes|=u,In|=u,c=4;break e}u=kt,kt=c,u!==null&&(kt===null?kt=u:kt.push.apply(kt,u))}c=h}if(u=!1,c!==2)continue}}if(c===1){hs(e,0),Za(e,t,0,!0);break}e:{switch(o=e,u=c,u){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:Za(o,t,wt,!Pa);break e;case 2:kt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(c=Fo+300-vt(),10<c)){if(Za(o,t,wt,!Pa),ao(o,0,!0)!==0)break e;Ta=t,o.timeoutHandle=Sh(Jm.bind(null,o,a,kt,Xo,Rc,t,wt,In,gs,Pa,u,"Throttled",-0,0),c);break e}Jm(o,a,kt,Xo,Rc,t,wt,In,gs,Pa,u,null,-0,0)}}break}while(!0);aa(e)}function Jm(e,t,a,o,c,u,h,k,M,q,X,$,z,U){if(e.timeoutHandle=-1,$=t.subtreeFlags,$&8192||($&16785408)===16785408){$={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:da},Pm(t,u,$);var re=(u&62914560)===u?Fo-vt():(u&4194048)===u?Zm-vt():0;if(re=m2($,re),re!==null){Ta=u,e.cancelPendingCommit=re(oh.bind(null,e,t,u,a,o,c,h,k,M,X,$,null,z,U)),Za(e,u,h,!q);return}}oh(e,t,u,a,o,c,h,k,M)}function w_(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],u=c.getSnapshot;c=c.value;try{if(!At(u(),c))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Za(e,t,a,o){t&=~qc,t&=~In,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var c=t;0<c;){var u=31-Mt(c),h=1<<u;o[u]=-1,c&=~h}a!==0&&lp(e,a,t)}function Zo(){return(Se&6)===0?(yi(0),!1):!0}function Oc(){if(_e!==null){if(Ie===0)var e=_e.return;else e=_e,ha=kn=null,nc(e),is=null,ni=0,e=_e;for(;e!==null;)Im(e.alternate,e),e=e.return;_e=null}}function hs(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Q_(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ta=0,Oc(),Ce=e,_e=a=ga(e.current,null),ye=t,Ie=0,It=null,Pa=!1,ps=Hs(e,t),Dc=!1,gs=wt=qc=In=Fa=Oe=0,kt=_i=null,Rc=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var c=31-Mt(o),u=1<<c;t|=e[c],o&=~u}return Aa=t,ho(),a}function Wm(e,t){be=null,I.H=di,t===ss||t===Go?(t=hg(),Ie=3):t===Fl?(t=hg(),Ie=4):Ie=t===_c?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,It=t,_e===null&&(Oe=1,Ro(e,qt(t,e.current)))}function eh(){var e=jt.current;return e===null?!0:(ye&4194048)===ye?Ht===null:(ye&62914560)===ye||(ye&536870912)!==0?e===Ht:!1}function th(){var e=I.H;return I.H=di,e===null?di:e}function ah(){var e=I.A;return I.A=S_,e}function Yo(){Oe=4,Pa||(ye&4194048)!==ye&&jt.current!==null||(ps=!0),(Fa&134217727)===0&&(In&134217727)===0||Ce===null||Za(Ce,ye,wt,!1)}function Bc(e,t,a){var o=Se;Se|=2;var c=th(),u=ah();(Ce!==e||ye!==t)&&(Xo=null,hs(e,t)),t=!1;var h=Oe;e:do try{if(Ie!==0&&_e!==null){var k=_e,M=It;switch(Ie){case 8:Oc(),h=6;break e;case 3:case 2:case 9:case 6:jt.current===null&&(t=!0);var q=Ie;if(Ie=0,It=null,bs(e,k,M,q),a&&ps){h=0;break e}break;default:q=Ie,Ie=0,It=null,bs(e,k,M,q)}}N_(),h=Oe;break}catch(X){Wm(e,X)}while(!0);return t&&e.shellSuspendCounter++,ha=kn=null,Se=o,I.H=c,I.A=u,_e===null&&(Ce=null,ye=0,ho()),h}function N_(){for(;_e!==null;)nh(_e)}function E_(e,t){var a=Se;Se|=2;var o=th(),c=ah();Ce!==e||ye!==t?(Xo=null,Ko=vt()+500,hs(e,t)):ps=Hs(e,t);e:do try{if(Ie!==0&&_e!==null){t=_e;var u=It;t:switch(Ie){case 1:Ie=0,It=null,bs(e,t,u,1);break;case 2:case 9:if(gg(u)){Ie=0,It=null,sh(t);break}t=function(){Ie!==2&&Ie!==9||Ce!==e||(Ie=7),aa(e)},u.then(t,t);break e;case 3:Ie=7;break e;case 4:Ie=5;break e;case 7:gg(u)?(Ie=0,It=null,sh(t)):(Ie=0,It=null,bs(e,t,u,7));break;case 5:var h=null;switch(_e.tag){case 26:h=_e.memoizedState;case 5:case 27:var k=_e;if(h?Uh(h):k.stateNode.complete){Ie=0,It=null;var M=k.sibling;if(M!==null)_e=M;else{var q=k.return;q!==null?(_e=q,Qo(q)):_e=null}break t}}Ie=0,It=null,bs(e,t,u,5);break;case 6:Ie=0,It=null,bs(e,t,u,6);break;case 8:Oc(),Oe=6;break e;default:throw Error(r(462))}}V_();break}catch(X){Wm(e,X)}while(!0);return ha=kn=null,I.H=o,I.A=c,Se=a,_e!==null?0:(Ce=null,ye=0,ho(),Oe)}function V_(){for(;_e!==null&&!a1();)nh(_e)}function nh(e){var t=jm(e.alternate,e,Aa);e.memoizedProps=e.pendingProps,t===null?Qo(e):_e=t}function sh(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=ym(a,t,t.pendingProps,t.type,void 0,ye);break;case 11:t=ym(a,t,t.pendingProps,t.type.render,t.ref,ye);break;case 5:nc(t);default:Im(a,t),t=_e=ag(t,Aa),t=jm(a,t,Aa)}e.memoizedProps=e.pendingProps,t===null?Qo(e):_e=t}function bs(e,t,a,o){ha=kn=null,nc(t),is=null,ni=0;var c=t.return;try{if(y_(e,c,t,a,ye)){Oe=1,Ro(e,qt(a,e.current)),_e=null;return}}catch(u){if(c!==null)throw _e=c,u;Oe=1,Ro(e,qt(a,e.current)),_e=null;return}t.flags&32768?(Ae||o===1?e=!0:ps||(ye&536870912)!==0?e=!1:(Pa=e=!0,(o===2||o===9||o===3||o===6)&&(o=jt.current,o!==null&&o.tag===13&&(o.flags|=16384))),ih(t,e)):Qo(t)}function Qo(e){var t=e;do{if((t.flags&32768)!==0){ih(t,Pa);return}e=t.return;var a=M_(t.alternate,t,Aa);if(a!==null){_e=a;return}if(t=t.sibling,t!==null){_e=t;return}_e=t=e}while(t!==null);Oe===0&&(Oe=5)}function ih(e,t){do{var a=A_(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);Oe=6,_e=null}function oh(e,t,a,o,c,u,h,k,M){e.cancelPendingCommit=null;do $o();while($e!==0);if((Se&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(u=t.lanes|t.childLanes,u|=wl,p1(e,a,u,h,k,M),e===Ce&&(_e=Ce=null,ye=0),ms=t,Xa=e,Ta=a,zc=u,Lc=c,Ym=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,R_(Ji,function(){return dh(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,c=W.p,W.p=2,h=Se,Se|=4;try{T_(e,t,a)}finally{Se=h,W.p=c,I.T=o}}$e=1,rh(),lh(),ch()}}function rh(){if($e===1){$e=0;var e=Xa,t=ms,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=W.p;W.p=2;var c=Se;Se|=4;try{Om(t,e);var u=eu,h=Xp(e.containerInfo),k=u.focusedElem,M=u.selectionRange;if(h!==k&&k&&k.ownerDocument&&Kp(k.ownerDocument.documentElement,k)){if(M!==null&&Al(k)){var q=M.start,X=M.end;if(X===void 0&&(X=q),"selectionStart"in k)k.selectionStart=q,k.selectionEnd=Math.min(X,k.value.length);else{var $=k.ownerDocument||document,z=$&&$.defaultView||window;if(z.getSelection){var U=z.getSelection(),re=k.textContent.length,ge=Math.min(M.start,re),Ve=M.end===void 0?ge:Math.min(M.end,re);!U.extend&&ge>Ve&&(h=Ve,Ve=ge,ge=h);var w=Fp(k,ge),j=Fp(k,Ve);if(w&&j&&(U.rangeCount!==1||U.anchorNode!==w.node||U.anchorOffset!==w.offset||U.focusNode!==j.node||U.focusOffset!==j.offset)){var D=$.createRange();D.setStart(w.node,w.offset),U.removeAllRanges(),ge>Ve?(U.addRange(D),U.extend(j.node,j.offset)):(D.setEnd(j.node,j.offset),U.addRange(D))}}}}for($=[],U=k;U=U.parentNode;)U.nodeType===1&&$.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof k.focus=="function"&&k.focus(),k=0;k<$.length;k++){var Y=$[k];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}cr=!!Wc,eu=Wc=null}finally{Se=c,W.p=o,I.T=a}}e.current=t,$e=2}}function lh(){if($e===2){$e=0;var e=Xa,t=ms,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=W.p;W.p=2;var c=Se;Se|=4;try{qm(e,t.alternate,t)}finally{Se=c,W.p=o,I.T=a}}$e=3}}function ch(){if($e===4||$e===3){$e=0,n1();var e=Xa,t=ms,a=Ta,o=Ym;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?$e=5:($e=0,ms=Xa=null,uh(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ka=null),ol(a),t=t.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Ls,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=I.T,c=W.p,W.p=2,I.T=null;try{for(var u=e.onRecoverableError,h=0;h<o.length;h++){var k=o[h];u(k.value,{componentStack:k.stack})}}finally{I.T=t,W.p=c}}(Ta&3)!==0&&$o(),aa(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===Hc?ki++:(ki=0,Hc=e):ki=0,yi(0)}}function uh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ti(t)))}function $o(){return rh(),lh(),ch(),dh()}function dh(){if($e!==5)return!1;var e=Xa,t=zc;zc=0;var a=ol(Ta),o=I.T,c=W.p;try{W.p=32>a?32:a,I.T=null,a=Lc,Lc=null;var u=Xa,h=Ta;if($e=0,ms=Xa=null,Ta=0,(Se&6)!==0)throw Error(r(331));var k=Se;if(Se|=4,Km(u.current),Um(u,u.current,h,a),Se=k,yi(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Ls,u)}catch{}return!0}finally{W.p=c,I.T=o,uh(e,t)}}function ph(e,t,a){t=qt(a,t),t=xc(e.stateNode,t,2),e=Ha(e,t,2),e!==null&&(Os(e,2),aa(e))}function we(e,t,a){if(e.tag===3)ph(e,e,a);else for(;t!==null;){if(t.tag===3){ph(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ka===null||!Ka.has(o))){e=qt(a,e),a=gm(2),o=Ha(t,a,2),o!==null&&(mm(a,o,t,e),Os(o,2),aa(o));break}}t=t.return}}function Uc(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new I_;var c=new Set;o.set(t,c)}else c=o.get(t),c===void 0&&(c=new Set,o.set(t,c));c.has(a)||(Dc=!0,c.add(a),e=C_.bind(null,e,t,a),t.then(e,e))}function C_(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ce===e&&(ye&a)===a&&(Oe===4||Oe===3&&(ye&62914560)===ye&&300>vt()-Fo?(Se&2)===0&&hs(e,0):qc|=a,gs===ye&&(gs=0)),aa(e)}function gh(e,t){t===0&&(t=rp()),e=fn(e,t),e!==null&&(Os(e,t),aa(e))}function D_(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),gh(e,a)}function q_(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(t),gh(e,a)}function R_(e,t){return al(e,t)}var Jo=null,fs=null,Pc=!1,Wo=!1,Fc=!1,Ya=0;function aa(e){e!==fs&&e.next===null&&(fs===null?Jo=fs=e:fs=fs.next=e),Wo=!0,Pc||(Pc=!0,L_())}function yi(e,t){if(!Fc&&Wo){Fc=!0;do for(var a=!1,o=Jo;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var u=0;else{var h=o.suspendedLanes,k=o.pingedLanes;u=(1<<31-Mt(42|e)+1)-1,u&=c&~(h&~k),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,fh(o,u))}else u=ye,u=ao(o,o===Ce?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||Hs(o,u)||(a=!0,fh(o,u));o=o.next}while(a);Fc=!1}}function z_(){mh()}function mh(){Wo=Pc=!1;var e=0;Ya!==0&&Y_()&&(e=Ya);for(var t=vt(),a=null,o=Jo;o!==null;){var c=o.next,u=hh(o,t);u===0?(o.next=null,a===null?Jo=c:a.next=c,c===null&&(fs=a)):(a=o,(e!==0||(u&3)!==0)&&(Wo=!0)),o=c}$e!==0&&$e!==5||yi(e),Ya!==0&&(Ya=0)}function hh(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var h=31-Mt(u),k=1<<h,M=c[h];M===-1?((k&a)===0||(k&o)!==0)&&(c[h]=d1(k,t)):M<=t&&(e.expiredLanes|=k),u&=~k}if(t=Ce,a=ye,a=ao(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&nl(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Hs(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&nl(o),ol(a)){case 2:case 8:a=ip;break;case 32:a=Ji;break;case 268435456:a=op;break;default:a=Ji}return o=bh.bind(null,e),a=al(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&nl(o),e.callbackPriority=2,e.callbackNode=null,2}function bh(e,t){if($e!==0&&$e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if($o()&&e.callbackNode!==a)return null;var o=ye;return o=ao(e,e===Ce?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:($m(e,o,t),hh(e,vt()),e.callbackNode!=null&&e.callbackNode===a?bh.bind(null,e):null)}function fh(e,t){if($o())return null;$m(e,t,!0)}function L_(){$_(function(){(Se&6)!==0?al(sp,z_):mh()})}function Kc(){if(Ya===0){var e=as;e===0&&(e=Wi,Wi<<=1,(Wi&261888)===0&&(Wi=256)),Ya=e}return Ya}function xh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:oo(""+e)}function _h(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function H_(e,t,a,o,c){if(t==="submit"&&a&&a.stateNode===c){var u=xh((c[ht]||null).action),h=o.submitter;h&&(t=(t=h[ht]||null)?xh(t.formAction):h.getAttribute("formAction"),t!==null&&(u=t,h=null));var k=new uo("action","action",null,o,c);e.push({event:k,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ya!==0){var M=h?_h(c,h):new FormData(c);pc(a,{pending:!0,data:M,method:c.method,action:u},null,M)}}else typeof u=="function"&&(k.preventDefault(),M=h?_h(c,h):new FormData(c),pc(a,{pending:!0,data:M,method:c.method,action:u},u,M))},currentTarget:c}]})}}for(var Xc=0;Xc<Il.length;Xc++){var Zc=Il[Xc],O_=Zc.toLowerCase(),B_=Zc[0].toUpperCase()+Zc.slice(1);Ft(O_,"on"+B_)}Ft(Qp,"onAnimationEnd"),Ft($p,"onAnimationIteration"),Ft(Jp,"onAnimationStart"),Ft("dblclick","onDoubleClick"),Ft("focusin","onFocus"),Ft("focusout","onBlur"),Ft(s_,"onTransitionRun"),Ft(i_,"onTransitionStart"),Ft(o_,"onTransitionCancel"),Ft(Wp,"onTransitionEnd"),Bn("onMouseEnter",["mouseout","mouseover"]),Bn("onMouseLeave",["mouseout","mouseover"]),Bn("onPointerEnter",["pointerout","pointerover"]),Bn("onPointerLeave",["pointerout","pointerover"]),gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gn("onBeforeInput",["compositionend","keypress","textInput","paste"]),gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vi));function kh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var h=o.length-1;0<=h;h--){var k=o[h],M=k.instance,q=k.currentTarget;if(k=k.listener,M!==u&&c.isPropagationStopped())break e;u=k,c.currentTarget=q;try{u(c)}catch(X){mo(X)}c.currentTarget=null,u=M}else for(h=0;h<o.length;h++){if(k=o[h],M=k.instance,q=k.currentTarget,k=k.listener,M!==u&&c.isPropagationStopped())break e;u=k,c.currentTarget=q;try{u(c)}catch(X){mo(X)}c.currentTarget=null,u=M}}}}function ke(e,t){var a=t[rl];a===void 0&&(a=t[rl]=new Set);var o=e+"__bubble";a.has(o)||(yh(t,e,2,!1),a.add(o))}function Yc(e,t,a){var o=0;t&&(o|=4),yh(a,e,o,t)}var er="_reactListening"+Math.random().toString(36).slice(2);function Qc(e){if(!e[er]){e[er]=!0,mp.forEach(function(a){a!=="selectionchange"&&(U_.has(a)||Yc(a,!1,e),Yc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[er]||(t[er]=!0,Yc("selectionchange",!1,t))}}function yh(e,t,a,o){switch(Qh(t)){case 2:var c=f2;break;case 8:c=x2;break;default:c=du}a=c.bind(null,t,a,e),c=void 0,!bl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(t,a,{capture:!0,passive:c}):e.addEventListener(t,a,!0):c!==void 0?e.addEventListener(t,a,{passive:c}):e.addEventListener(t,a,!1)}function $c(e,t,a,o,c){var u=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var h=o.tag;if(h===3||h===4){var k=o.stateNode.containerInfo;if(k===c)break;if(h===4)for(h=o.return;h!==null;){var M=h.tag;if((M===3||M===4)&&h.stateNode.containerInfo===c)return;h=h.return}for(;k!==null;){if(h=Ln(k),h===null)return;if(M=h.tag,M===5||M===6||M===26||M===27){o=u=h;continue e}k=k.parentNode}}o=o.return}Tp(function(){var q=u,X=ml(a),$=[];e:{var z=eg.get(e);if(z!==void 0){var U=uo,re=e;switch(e){case"keypress":if(lo(a)===0)break e;case"keydown":case"keyup":U=q1;break;case"focusin":re="focus",U=kl;break;case"focusout":re="blur",U=kl;break;case"beforeblur":case"afterblur":U=kl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=M1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=L1;break;case Qp:case $p:case Jp:U=j1;break;case Wp:U=O1;break;case"scroll":case"scrollend":U=v1;break;case"wheel":U=U1;break;case"copy":case"cut":case"paste":U=I1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Np;break;case"toggle":case"beforetoggle":U=F1}var ge=(t&4)!==0,Ve=!ge&&(e==="scroll"||e==="scrollend"),w=ge?z!==null?z+"Capture":null:z;ge=[];for(var j=q,D;j!==null;){var Y=j;if(D=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||D===null||w===null||(Y=Ps(j,w),Y!=null&&ge.push(Gi(j,Y,D))),Ve)break;j=j.return}0<ge.length&&(z=new U(z,re,null,a,X),$.push({event:z,listeners:ge}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",z&&a!==gl&&(re=a.relatedTarget||a.fromElement)&&(Ln(re)||re[zn]))break e;if((U||z)&&(z=X.window===X?X:(z=X.ownerDocument)?z.defaultView||z.parentWindow:window,U?(re=a.relatedTarget||a.toElement,U=q,re=re?Ln(re):null,re!==null&&(Ve=p(re),ge=re.tag,re!==Ve||ge!==5&&ge!==27&&ge!==6)&&(re=null)):(U=null,re=q),U!==re)){if(ge=Ip,Y="onMouseLeave",w="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ge=Np,Y="onPointerLeave",w="onPointerEnter",j="pointer"),Ve=U==null?z:Us(U),D=re==null?z:Us(re),z=new ge(Y,j+"leave",U,a,X),z.target=Ve,z.relatedTarget=D,Y=null,Ln(X)===q&&(ge=new ge(w,j+"enter",re,a,X),ge.target=D,ge.relatedTarget=Ve,Y=ge),Ve=Y,U&&re)t:{for(ge=P_,w=U,j=re,D=0,Y=w;Y;Y=ge(Y))D++;Y=0;for(var pe=j;pe;pe=ge(pe))Y++;for(;0<D-Y;)w=ge(w),D--;for(;0<Y-D;)j=ge(j),Y--;for(;D--;){if(w===j||j!==null&&w===j.alternate){ge=w;break t}w=ge(w),j=ge(j)}ge=null}else ge=null;U!==null&&vh($,z,U,ge,!1),re!==null&&Ve!==null&&vh($,Ve,re,ge,!0)}}e:{if(z=q?Us(q):window,U=z.nodeName&&z.nodeName.toLowerCase(),U==="select"||U==="input"&&z.type==="file")var Te=Lp;else if(Rp(z))if(Hp)Te=t_;else{Te=W1;var ue=J1}else U=z.nodeName,!U||U.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?q&&pl(q.elementType)&&(Te=Lp):Te=e_;if(Te&&(Te=Te(e,q))){zp($,Te,a,X);break e}ue&&ue(e,z,q),e==="focusout"&&q&&z.type==="number"&&q.memoizedProps.value!=null&&dl(z,"number",z.value)}switch(ue=q?Us(q):window,e){case"focusin":(Rp(ue)||ue.contentEditable==="true")&&(Zn=ue,Tl=q,Js=null);break;case"focusout":Js=Tl=Zn=null;break;case"mousedown":jl=!0;break;case"contextmenu":case"mouseup":case"dragend":jl=!1,Zp($,a,X);break;case"selectionchange":if(n_)break;case"keydown":case"keyup":Zp($,a,X)}var fe;if(vl)e:{switch(e){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Xn?Dp(e,a)&&(ve="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Ep&&a.locale!=="ko"&&(Xn||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Xn&&(fe=jp()):(Va=X,fl="value"in Va?Va.value:Va.textContent,Xn=!0)),ue=tr(q,ve),0<ue.length&&(ve=new wp(ve,e,null,a,X),$.push({event:ve,listeners:ue}),fe?ve.data=fe:(fe=qp(a),fe!==null&&(ve.data=fe)))),(fe=X1?Z1(e,a):Y1(e,a))&&(ve=tr(q,"onBeforeInput"),0<ve.length&&(ue=new wp("onBeforeInput","beforeinput",null,a,X),$.push({event:ue,listeners:ve}),ue.data=fe)),H_($,e,q,a,X)}kh($,t)})}function Gi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function tr(e,t){for(var a=t+"Capture",o=[];e!==null;){var c=e,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=Ps(e,a),c!=null&&o.unshift(Gi(e,c,u)),c=Ps(e,t),c!=null&&o.push(Gi(e,c,u))),e.tag===3)return o;e=e.return}return[]}function P_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vh(e,t,a,o,c){for(var u=t._reactName,h=[];a!==null&&a!==o;){var k=a,M=k.alternate,q=k.stateNode;if(k=k.tag,M!==null&&M===o)break;k!==5&&k!==26&&k!==27||q===null||(M=q,c?(q=Ps(a,u),q!=null&&h.unshift(Gi(a,q,M))):c||(q=Ps(a,u),q!=null&&h.push(Gi(a,q,M)))),a=a.return}h.length!==0&&e.push({event:t,listeners:h})}var F_=/\r\n?/g,K_=/\u0000|\uFFFD/g;function Gh(e){return(typeof e=="string"?e:""+e).replace(F_,`
`).replace(K_,"")}function Mh(e,t){return t=Gh(t),Gh(e)===t}function Ee(e,t,a,o,c,u){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||Pn(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&Pn(e,""+o);break;case"className":so(e,"class",o);break;case"tabIndex":so(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":so(e,a,o);break;case"style":Mp(e,o,u);break;case"data":if(t!=="object"){so(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=oo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&Ee(e,t,"name",c.name,c,null),Ee(e,t,"formEncType",c.formEncType,c,null),Ee(e,t,"formMethod",c.formMethod,c,null),Ee(e,t,"formTarget",c.formTarget,c,null)):(Ee(e,t,"encType",c.encType,c,null),Ee(e,t,"method",c.method,c,null),Ee(e,t,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=oo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=da);break;case"onScroll":o!=null&&ke("scroll",e);break;case"onScrollEnd":o!=null&&ke("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=oo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ke("beforetoggle",e),ke("toggle",e),no(e,"popover",o);break;case"xlinkActuate":ua(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ua(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ua(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ua(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ua(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ua(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ua(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ua(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ua(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":no(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=k1.get(a)||a,no(e,a,o))}}function Jc(e,t,a,o,c,u){switch(a){case"style":Mp(e,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Pn(e,o):(typeof o=="number"||typeof o=="bigint")&&Pn(e,""+o);break;case"onScroll":o!=null&&ke("scroll",e);break;case"onScrollEnd":o!=null&&ke("scrollend",e);break;case"onClick":o!=null&&(e.onclick=da);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hp.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),t=a.slice(2,c?a.length-7:void 0),u=e[ht]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,c),typeof o=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,c);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):no(e,a,o)}}}function rt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",e),ke("load",e);var o=!1,c=!1,u;for(u in a)if(a.hasOwnProperty(u)){var h=a[u];if(h!=null)switch(u){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Ee(e,t,u,h,a,null)}}c&&Ee(e,t,"srcSet",a.srcSet,a,null),o&&Ee(e,t,"src",a.src,a,null);return;case"input":ke("invalid",e);var k=u=h=c=null,M=null,q=null;for(o in a)if(a.hasOwnProperty(o)){var X=a[o];if(X!=null)switch(o){case"name":c=X;break;case"type":h=X;break;case"checked":M=X;break;case"defaultChecked":q=X;break;case"value":u=X;break;case"defaultValue":k=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(r(137,t));break;default:Ee(e,t,o,X,a,null)}}kp(e,u,k,M,q,h,c,!1);return;case"select":ke("invalid",e),o=h=u=null;for(c in a)if(a.hasOwnProperty(c)&&(k=a[c],k!=null))switch(c){case"value":u=k;break;case"defaultValue":h=k;break;case"multiple":o=k;default:Ee(e,t,c,k,a,null)}t=u,a=h,e.multiple=!!o,t!=null?Un(e,!!o,t,!1):a!=null&&Un(e,!!o,a,!0);return;case"textarea":ke("invalid",e),u=c=o=null;for(h in a)if(a.hasOwnProperty(h)&&(k=a[h],k!=null))switch(h){case"value":o=k;break;case"defaultValue":c=k;break;case"children":u=k;break;case"dangerouslySetInnerHTML":if(k!=null)throw Error(r(91));break;default:Ee(e,t,h,k,a,null)}vp(e,o,c,u);return;case"option":for(M in a)if(a.hasOwnProperty(M)&&(o=a[M],o!=null))switch(M){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ee(e,t,M,o,a,null)}return;case"dialog":ke("beforetoggle",e),ke("toggle",e),ke("cancel",e),ke("close",e);break;case"iframe":case"object":ke("load",e);break;case"video":case"audio":for(o=0;o<vi.length;o++)ke(vi[o],e);break;case"image":ke("error",e),ke("load",e);break;case"details":ke("toggle",e);break;case"embed":case"source":case"link":ke("error",e),ke("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in a)if(a.hasOwnProperty(q)&&(o=a[q],o!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Ee(e,t,q,o,a,null)}return;default:if(pl(t)){for(X in a)a.hasOwnProperty(X)&&(o=a[X],o!==void 0&&Jc(e,t,X,o,a,void 0));return}}for(k in a)a.hasOwnProperty(k)&&(o=a[k],o!=null&&Ee(e,t,k,o,a,null))}function X_(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,h=null,k=null,M=null,q=null,X=null;for(U in a){var $=a[U];if(a.hasOwnProperty(U)&&$!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":M=$;default:o.hasOwnProperty(U)||Ee(e,t,U,null,o,$)}}for(var z in o){var U=o[z];if($=a[z],o.hasOwnProperty(z)&&(U!=null||$!=null))switch(z){case"type":u=U;break;case"name":c=U;break;case"checked":q=U;break;case"defaultChecked":X=U;break;case"value":h=U;break;case"defaultValue":k=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(r(137,t));break;default:U!==$&&Ee(e,t,z,U,o,$)}}ul(e,h,k,M,q,X,u,c);return;case"select":U=h=k=z=null;for(u in a)if(M=a[u],a.hasOwnProperty(u)&&M!=null)switch(u){case"value":break;case"multiple":U=M;default:o.hasOwnProperty(u)||Ee(e,t,u,null,o,M)}for(c in o)if(u=o[c],M=a[c],o.hasOwnProperty(c)&&(u!=null||M!=null))switch(c){case"value":z=u;break;case"defaultValue":k=u;break;case"multiple":h=u;default:u!==M&&Ee(e,t,c,u,o,M)}t=k,a=h,o=U,z!=null?Un(e,!!a,z,!1):!!o!=!!a&&(t!=null?Un(e,!!a,t,!0):Un(e,!!a,a?[]:"",!1));return;case"textarea":U=z=null;for(k in a)if(c=a[k],a.hasOwnProperty(k)&&c!=null&&!o.hasOwnProperty(k))switch(k){case"value":break;case"children":break;default:Ee(e,t,k,null,o,c)}for(h in o)if(c=o[h],u=a[h],o.hasOwnProperty(h)&&(c!=null||u!=null))switch(h){case"value":z=c;break;case"defaultValue":U=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==u&&Ee(e,t,h,c,o,u)}yp(e,z,U);return;case"option":for(var re in a)if(z=a[re],a.hasOwnProperty(re)&&z!=null&&!o.hasOwnProperty(re))switch(re){case"selected":e.selected=!1;break;default:Ee(e,t,re,null,o,z)}for(M in o)if(z=o[M],U=a[M],o.hasOwnProperty(M)&&z!==U&&(z!=null||U!=null))switch(M){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Ee(e,t,M,z,o,U)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in a)z=a[ge],a.hasOwnProperty(ge)&&z!=null&&!o.hasOwnProperty(ge)&&Ee(e,t,ge,null,o,z);for(q in o)if(z=o[q],U=a[q],o.hasOwnProperty(q)&&z!==U&&(z!=null||U!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(r(137,t));break;default:Ee(e,t,q,z,o,U)}return;default:if(pl(t)){for(var Ve in a)z=a[Ve],a.hasOwnProperty(Ve)&&z!==void 0&&!o.hasOwnProperty(Ve)&&Jc(e,t,Ve,void 0,o,z);for(X in o)z=o[X],U=a[X],!o.hasOwnProperty(X)||z===U||z===void 0&&U===void 0||Jc(e,t,X,z,o,U);return}}for(var w in a)z=a[w],a.hasOwnProperty(w)&&z!=null&&!o.hasOwnProperty(w)&&Ee(e,t,w,null,o,z);for($ in o)z=o[$],U=a[$],!o.hasOwnProperty($)||z===U||z==null&&U==null||Ee(e,t,$,z,o,U)}function Ah(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Z_(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],u=c.transferSize,h=c.initiatorType,k=c.duration;if(u&&k&&Ah(h)){for(h=0,k=c.responseEnd,o+=1;o<a.length;o++){var M=a[o],q=M.startTime;if(q>k)break;var X=M.transferSize,$=M.initiatorType;X&&Ah($)&&(M=M.responseEnd,h+=X*(M<k?1:(k-q)/(M-q)))}if(--o,t+=8*(u+h)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Wc=null,eu=null;function ar(e){return e.nodeType===9?e:e.ownerDocument}function Th(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function tu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var au=null;function Y_(){var e=window.event;return e&&e.type==="popstate"?e===au?!1:(au=e,!0):(au=null,!1)}var Sh=typeof setTimeout=="function"?setTimeout:void 0,Q_=typeof clearTimeout=="function"?clearTimeout:void 0,Ih=typeof Promise=="function"?Promise:void 0,$_=typeof queueMicrotask=="function"?queueMicrotask:typeof Ih<"u"?function(e){return Ih.resolve(null).then(e).catch(J_)}:Sh;function J_(e){setTimeout(function(){throw e})}function Qa(e){return e==="head"}function wh(e,t){var a=t,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),ys(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Mi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Mi(a);for(var u=a.firstChild;u;){var h=u.nextSibling,k=u.nodeName;u[Bs]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=h}}else a==="body"&&Mi(e.ownerDocument.body);a=c}while(a);ys(t)}function Nh(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function nu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nu(a),ll(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function W_(e,t,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Bs])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Ot(e.nextSibling),e===null)break}return null}function e2(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ot(e.nextSibling),e===null))return null;return e}function Eh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ot(e.nextSibling),e===null))return null;return e}function su(e){return e.data==="$?"||e.data==="$~"}function iu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function t2(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ou=null;function Vh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Ot(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Ch(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Dh(e,t,a){switch(t=ar(a),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Mi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ll(e)}var Bt=new Map,qh=new Set;function nr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ja=W.d;W.d={f:a2,r:n2,D:s2,C:i2,L:o2,m:r2,X:c2,S:l2,M:u2};function a2(){var e=ja.f(),t=Zo();return e||t}function n2(e){var t=Hn(e);t!==null&&t.tag===5&&t.type==="form"?Wg(t):ja.r(e)}var xs=typeof document>"u"?null:document;function Rh(e,t,a){var o=xs;if(o&&typeof t=="string"&&t){var c=Ct(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),qh.has(c)||(qh.add(c),e={rel:e,crossOrigin:a,href:t},o.querySelector(c)===null&&(t=o.createElement("link"),rt(t,"link",e),tt(t),o.head.appendChild(t)))}}function s2(e){ja.D(e),Rh("dns-prefetch",e,null)}function i2(e,t){ja.C(e,t),Rh("preconnect",e,t)}function o2(e,t,a){ja.L(e,t,a);var o=xs;if(o&&e&&t){var c='link[rel="preload"][as="'+Ct(t)+'"]';t==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ct(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ct(a.imageSizes)+'"]')):c+='[href="'+Ct(e)+'"]';var u=c;switch(t){case"style":u=_s(e);break;case"script":u=ks(e)}Bt.has(u)||(e=_({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Bt.set(u,e),o.querySelector(c)!==null||t==="style"&&o.querySelector(Ai(u))||t==="script"&&o.querySelector(Ti(u))||(t=o.createElement("link"),rt(t,"link",e),tt(t),o.head.appendChild(t)))}}function r2(e,t){ja.m(e,t);var a=xs;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+Ct(o)+'"][href="'+Ct(e)+'"]',u=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=ks(e)}if(!Bt.has(u)&&(e=_({rel:"modulepreload",href:e},t),Bt.set(u,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ti(u)))return}o=a.createElement("link"),rt(o,"link",e),tt(o),a.head.appendChild(o)}}}function l2(e,t,a){ja.S(e,t,a);var o=xs;if(o&&e){var c=On(o).hoistableStyles,u=_s(e);t=t||"default";var h=c.get(u);if(!h){var k={loading:0,preload:null};if(h=o.querySelector(Ai(u)))k.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Bt.get(u))&&ru(e,a);var M=h=o.createElement("link");tt(M),rt(M,"link",e),M._p=new Promise(function(q,X){M.onload=q,M.onerror=X}),M.addEventListener("load",function(){k.loading|=1}),M.addEventListener("error",function(){k.loading|=2}),k.loading|=4,sr(h,t,o)}h={type:"stylesheet",instance:h,count:1,state:k},c.set(u,h)}}}function c2(e,t){ja.X(e,t);var a=xs;if(a&&e){var o=On(a).hoistableScripts,c=ks(e),u=o.get(c);u||(u=a.querySelector(Ti(c)),u||(e=_({src:e,async:!0},t),(t=Bt.get(c))&&lu(e,t),u=a.createElement("script"),tt(u),rt(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(c,u))}}function u2(e,t){ja.M(e,t);var a=xs;if(a&&e){var o=On(a).hoistableScripts,c=ks(e),u=o.get(c);u||(u=a.querySelector(Ti(c)),u||(e=_({src:e,async:!0,type:"module"},t),(t=Bt.get(c))&&lu(e,t),u=a.createElement("script"),tt(u),rt(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(c,u))}}function zh(e,t,a,o){var c=(c=me.current)?nr(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=_s(a.href),a=On(c).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=_s(a.href);var u=On(c).hoistableStyles,h=u.get(e);if(h||(c=c.ownerDocument||c,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,h),(u=c.querySelector(Ai(e)))&&!u._p&&(h.instance=u,h.state.loading=5),Bt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Bt.set(e,a),u||d2(c,e,a,h.state))),t&&o===null)throw Error(r(528,""));return h}if(t&&o!==null)throw Error(r(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ks(a),a=On(c).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function _s(e){return'href="'+Ct(e)+'"'}function Ai(e){return'link[rel="stylesheet"]['+e+"]"}function Lh(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function d2(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),rt(t,"link",a),tt(t),e.head.appendChild(t))}function ks(e){return'[src="'+Ct(e)+'"]'}function Ti(e){return"script[async]"+e}function Hh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Ct(a.href)+'"]');if(o)return t.instance=o,tt(o),o;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),tt(o),rt(o,"style",c),sr(o,a.precedence,e),t.instance=o;case"stylesheet":c=_s(a.href);var u=e.querySelector(Ai(c));if(u)return t.state.loading|=4,t.instance=u,tt(u),u;o=Lh(a),(c=Bt.get(c))&&ru(o,c),u=(e.ownerDocument||e).createElement("link"),tt(u);var h=u;return h._p=new Promise(function(k,M){h.onload=k,h.onerror=M}),rt(u,"link",o),t.state.loading|=4,sr(u,a.precedence,e),t.instance=u;case"script":return u=ks(a.src),(c=e.querySelector(Ti(u)))?(t.instance=c,tt(c),c):(o=a,(c=Bt.get(u))&&(o=_({},a),lu(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),tt(c),rt(c,"link",o),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,sr(o,a.precedence,e));return t.instance}function sr(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,u=c,h=0;h<o.length;h++){var k=o[h];if(k.dataset.precedence===t)u=k;else if(u!==c)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function ru(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function lu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ir=null;function Oh(e,t,a){if(ir===null){var o=new Map,c=ir=new Map;c.set(a,o)}else c=ir,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var u=a[c];if(!(u[Bs]||u[nt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var h=u.getAttribute(t)||"";h=e+h;var k=o.get(h);k?k.push(u):o.set(h,[u])}}return o}function Bh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function p2(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Uh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function g2(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=_s(o.href),u=t.querySelector(Ai(c));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=or.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=u,tt(u);return}u=t.ownerDocument||t,o=Lh(o),(c=Bt.get(c))&&ru(o,c),u=u.createElement("link"),tt(u);var h=u;h._p=new Promise(function(k,M){h.onload=k,h.onerror=M}),rt(u,"link",o),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=or.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var cu=0;function m2(e,t){return e.stylesheets&&e.count===0&&lr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&lr(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&cu===0&&(cu=62500*Z_());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lr(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>cu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function or(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var rr=null;function lr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,rr=new Map,t.forEach(h2,e),rr=null,or.call(e))}function h2(e,t){if(!(t.state.loading&4)){var a=rr.get(e);if(a)var o=a.get(null);else{a=new Map,rr.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var h=c[u];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(a.set(h.dataset.precedence,h),o=h)}o&&a.set(null,o)}c=t.instance,h=c.getAttribute("data-precedence"),u=a.get(h)||o,u===o&&a.set(null,c),a.set(h,c),this.count++,o=or.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),u?u.parentNode.insertBefore(c,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var ji={$$typeof:E,Provider:null,Consumer:null,_currentValue:O,_currentValue2:O,_threadCount:0};function b2(e,t,a,o,c,u,h,k,M){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=sl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sl(0),this.hiddenUpdates=sl(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=M,this.incompleteTransitions=new Map}function Ph(e,t,a,o,c,u,h,k,M,q,X,$){return e=new b2(e,t,a,h,M,q,X,$,k),t=1,u===!0&&(t|=24),u=Tt(3,null,null,t),e.current=u,u.stateNode=e,t=Bl(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:o,isDehydrated:a,cache:t},Kl(u),e}function Fh(e){return e?(e=$n,e):$n}function Kh(e,t,a,o,c,u){c=Fh(c),o.context===null?o.context=c:o.pendingContext=c,o=La(t),o.payload={element:a},u=u===void 0?null:u,u!==null&&(o.callback=u),a=Ha(e,o,t),a!==null&&(yt(a,e,t),ii(a,e,t))}function Xh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function uu(e,t){Xh(e,t),(e=e.alternate)&&Xh(e,t)}function Zh(e){if(e.tag===13||e.tag===31){var t=fn(e,67108864);t!==null&&yt(t,e,67108864),uu(e,67108864)}}function Yh(e){if(e.tag===13||e.tag===31){var t=Nt();t=il(t);var a=fn(e,t);a!==null&&yt(a,e,t),uu(e,t)}}var cr=!0;function f2(e,t,a,o){var c=I.T;I.T=null;var u=W.p;try{W.p=2,du(e,t,a,o)}finally{W.p=u,I.T=c}}function x2(e,t,a,o){var c=I.T;I.T=null;var u=W.p;try{W.p=8,du(e,t,a,o)}finally{W.p=u,I.T=c}}function du(e,t,a,o){if(cr){var c=pu(o);if(c===null)$c(e,t,o,ur,a),$h(e,o);else if(k2(c,e,t,a,o))o.stopPropagation();else if($h(e,o),t&4&&-1<_2.indexOf(e)){for(;c!==null;){var u=Hn(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var h=pn(u.pendingLanes);if(h!==0){var k=u;for(k.pendingLanes|=2,k.entangledLanes|=2;h;){var M=1<<31-Mt(h);k.entanglements[1]|=M,h&=~M}aa(u),(Se&6)===0&&(Ko=vt()+500,yi(0))}}break;case 31:case 13:k=fn(u,2),k!==null&&yt(k,u,2),Zo(),uu(u,2)}if(u=pu(o),u===null&&$c(e,t,o,ur,a),u===c)break;c=u}c!==null&&o.stopPropagation()}else $c(e,t,o,null,a)}}function pu(e){return e=ml(e),gu(e)}var ur=null;function gu(e){if(ur=null,e=Ln(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===31){if(e=b(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ur=e,null}function Qh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(s1()){case sp:return 2;case ip:return 8;case Ji:case i1:return 32;case op:return 268435456;default:return 32}default:return 32}}var mu=!1,$a=null,Ja=null,Wa=null,Si=new Map,Ii=new Map,en=[],_2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $h(e,t){switch(e){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ii.delete(t.pointerId)}}function wi(e,t,a,o,c,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:u,targetContainers:[c]},t!==null&&(t=Hn(t),t!==null&&Zh(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function k2(e,t,a,o,c){switch(t){case"focusin":return $a=wi($a,e,t,a,o,c),!0;case"dragenter":return Ja=wi(Ja,e,t,a,o,c),!0;case"mouseover":return Wa=wi(Wa,e,t,a,o,c),!0;case"pointerover":var u=c.pointerId;return Si.set(u,wi(Si.get(u)||null,e,t,a,o,c)),!0;case"gotpointercapture":return u=c.pointerId,Ii.set(u,wi(Ii.get(u)||null,e,t,a,o,c)),!0}return!1}function Jh(e){var t=Ln(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,pp(e.priority,function(){Yh(a)});return}}else if(t===31){if(t=b(a),t!==null){e.blockedOn=t,pp(e.priority,function(){Yh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=pu(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);gl=o,a.target.dispatchEvent(o),gl=null}else return t=Hn(a),t!==null&&Zh(t),e.blockedOn=a,!1;t.shift()}return!0}function Wh(e,t,a){dr(e)&&a.delete(t)}function y2(){mu=!1,$a!==null&&dr($a)&&($a=null),Ja!==null&&dr(Ja)&&(Ja=null),Wa!==null&&dr(Wa)&&(Wa=null),Si.forEach(Wh),Ii.forEach(Wh)}function pr(e,t){e.blockedOn===t&&(e.blockedOn=null,mu||(mu=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,y2)))}var gr=null;function eb(e){gr!==e&&(gr=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){gr===e&&(gr=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],c=e[t+2];if(typeof o!="function"){if(gu(o||a)===null)continue;break}var u=Hn(a);u!==null&&(e.splice(t,3),t-=3,pc(u,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function ys(e){function t(M){return pr(M,e)}$a!==null&&pr($a,e),Ja!==null&&pr(Ja,e),Wa!==null&&pr(Wa,e),Si.forEach(t),Ii.forEach(t);for(var a=0;a<en.length;a++){var o=en[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<en.length&&(a=en[0],a.blockedOn===null);)Jh(a),a.blockedOn===null&&en.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],u=a[o+1],h=c[ht]||null;if(typeof u=="function")h||eb(a);else if(h){var k=null;if(u&&u.hasAttribute("formAction")){if(c=u,h=u[ht]||null)k=h.formAction;else if(gu(c)!==null)continue}else k=h.action;typeof k=="function"?a[o+1]=k:(a.splice(o,3),o-=3),eb(a)}}}function tb(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(h){return c=h})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function hu(e){this._internalRoot=e}mr.prototype.render=hu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var a=t.current,o=Nt();Kh(a,o,e,t,null,null)},mr.prototype.unmount=hu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kh(e.current,2,null,e,null,null),Zo(),t[zn]=null}};function mr(e){this._internalRoot=e}mr.prototype.unstable_scheduleHydration=function(e){if(e){var t=dp();e={blockedOn:null,target:e,priority:t};for(var a=0;a<en.length&&t!==0&&t<en[a].priority;a++);en.splice(a,0,e),a===0&&Jh(e)}};var ab=s.version;if(ab!=="19.2.7")throw Error(r(527,ab,"19.2.7"));W.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(t),e=e!==null?f(e):null,e=e===null?null:e.stateNode,e};var v2={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hr.isDisabled&&hr.supportsFiber)try{Ls=hr.inject(v2),Gt=hr}catch{}}return Ei.createRoot=function(e,t){if(!d(e))throw Error(r(299));var a=!1,o="",c=cm,u=um,h=dm;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=Ph(e,1,!1,null,null,a,o,null,c,u,h,tb),e[zn]=t.current,Qc(e),new hu(t)},Ei.hydrateRoot=function(e,t,a){if(!d(e))throw Error(r(299));var o=!1,c="",u=cm,h=um,k=dm,M=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(h=a.onCaughtError),a.onRecoverableError!==void 0&&(k=a.onRecoverableError),a.formState!==void 0&&(M=a.formState)),t=Ph(e,1,!0,t,a??null,o,c,M,u,h,k,tb),t.context=Fh(null),a=t.current,o=Nt(),o=il(o),c=La(o),c.callback=null,Ha(a,c,o),a=o,t.current.lanes=a,Os(t,a),aa(t),e[zn]=t.current,Qc(e),new mr(t)},Ei.version="19.2.7",Ei}var pb;function V2(){if(pb)return xu.exports;pb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(s){console.error(s)}}return n(),xu.exports=E2(),xu.exports}var C2=V2();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),q2=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,l,r)=>r?r.toUpperCase():l.toLowerCase()),gb=n=>{const s=q2(n);return s.charAt(0).toUpperCase()+s.slice(1)},n0=(...n)=>n.filter((s,l,r)=>!!s&&s.trim()!==""&&r.indexOf(s)===l).join(" ").trim(),R2=n=>{for(const s in n)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var z2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=C.forwardRef(({color:n="currentColor",size:s=24,strokeWidth:l=2,absoluteStrokeWidth:r,className:d="",children:p,iconNode:g,...b},x)=>C.createElement("svg",{ref:x,...z2,width:s,height:s,stroke:n,strokeWidth:r?Number(l)*24/Number(s):l,className:n0("lucide",d),...!p&&!R2(b)&&{"aria-hidden":"true"},...b},[...g.map(([m,f])=>C.createElement(m,f)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=(n,s)=>{const l=C.forwardRef(({className:r,...d},p)=>C.createElement(L2,{ref:p,iconNode:s,className:n0(`lucide-${D2(gb(n))}`,`lucide-${n}`,r),...d}));return l.displayName=gb(n),l};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],Ku=ce("archive",H2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],vu=ce("arrow-left",O2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],U2=ce("arrow-right",B2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],mb=ce("award",P2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],ws=ce("book-open",F2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],oa=ce("bookmark",K2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Mr=ce("calculator",X2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Cr=ce("calendar",Z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Q2=ce("check",Y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Dr=ce("chevron-down",$2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],qr=ce("chevron-right",J2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],on=ce("circle-check",W2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],tk=ce("circle-play",ek);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],nk=ce("clock",ak);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],ik=ce("code-xml",sk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],rk=ce("code",ok);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ck=ce("compass",lk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Xu=ce("copy",uk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],s0=ce("cpu",dk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],gk=ce("credit-card",pk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Gd=ce("download",mk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],nn=ce("external-link",hk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],i0=ce("eye",bk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],xk=ce("file-text",fk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],Zu=ce("flame",_k);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],hb=ce("flask-conical",kk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],bb=ce("funnel",yk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],o0=ce("globe",vk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Yu=ce("house",Gk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Zr=ce("info",Mk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Tk=ce("lightbulb",Ak);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],Sk=ce("link",jk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Ns=ce("lock",Ik);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Nk=ce("log-out",wk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Vk=ce("message-circle",Ek);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Is=ce("message-square",Ck);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],r0=ce("monitor",Dk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],Md=ce("newspaper",qk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],l0=ce("palette",Rk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Lk=ce("pen-line",zk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Ok=ce("play",Hk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=[["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}],["path",{d:"m9 17-5-5 5-5",key:"nvlc11"}]],Uk=ce("reply",Bk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Fk=ce("save",Pk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],Xk=ce("scale",Kk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Oi=ce("search",Zk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Qk=ce("send",Yk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],fb=ce("settings-2",$k);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Wk=ce("settings",Jk);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Bi=ce("shield-alert",ey);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],c0=ce("shield-check",ty);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],qi=ce("shopping-bag",ay);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],Ad=ce("smartphone",ny);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Ui=ce("sparkles",sy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],oy=ce("table",iy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],xb=ce("terminal",ry);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],_b=ce("trash-2",ly);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],u0=ce("triangle-alert",cy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],dy=ce("user-plus",uy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ia=ce("user",py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],rn=ce("users",gy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Qu=ce("x",my);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],Ar=ce("youtube",hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],fy=ce("zap",by);/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Gu=[{name:"Inicio",path:"/",key:"nav.inicio"},{name:"Novedades",path:"/novedades",key:"nav.novedades"},{name:"Servicios",path:"/servicios",key:"nav.servicios"},{name:"Evo",path:"/evo",key:"nav.evo"},{name:"Otros códigos",path:"/otros",key:"nav.otros"},{name:"Guía",path:"/guia",key:"nav.guia"},{name:"Tutoriales",path:"/tutoriales",key:"nav.tutoriales"},{name:"Descargas",path:"/descargas",key:"nav.descargas"},{name:"Comunidad",path:"/comunidad",key:"nav.comunidad"}],Rr=[{id:"a",name:"Cibernético",shortName:"CYBER",icon:"Cpu",image:"https://github.com/luqueSmith/MGG/blob/main/img/cyber.png?raw=true"},{id:"b",name:"Zombi",shortName:"ZOMBI",icon:"Skull",image:"https://github.com/luqueSmith/MGG/blob/main/img/necro.png?raw=true"},{id:"c",name:"Guerrero",shortName:"Sword",icon:"Sword",image:"https://github.com/luqueSmith/MGG/blob/main/img/sable.png?raw=true"},{id:"d",name:"Bestia",shortName:"ZOOMORFO",icon:"PawPrint",image:"https://github.com/luqueSmith/MGG/blob/main/img/zomorfo.png?raw=true"},{id:"e",name:"Galáctico",shortName:"GALAXY",icon:"Star",image:"https://github.com/luqueSmith/MGG/blob/main/img/galactico.png?raw=true"},{id:"f",name:"Mítico",shortName:"MYTHIC",icon:"FlaskConical",image:"https://github.com/luqueSmith/MGG/blob/main/img/mitico.png?raw=true"}],Ms={a:["#38bdf8","#2563eb"],b:["#a855f7","#6d28d9"],c:["#f59e0b","#d97706"],d:["#22c55e","#15803d"],e:["#06b6d4","#0f766e"],f:["#ec4899","#be185d"],n:["#64748b","#334155"]},Mu=[{id:"offer_1",nombre:"54 Hornos 1M de Oro",nombreEn:"54 Furnaces 1M Gold",precio:37,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/1MdeOro.png?raw=true",descripcion:"Oferta relámpago: pack de 54 hornos con 1 millón de oro directo.",descripcionEn:"Flash offer: pack of 54 furnaces with 1 million gold direct.",features:["Entrega prioritaria","Ahorro del 20%","Soporte exclusivo"],featuresEn:["Priority delivery","20% Savings","Exclusive support"],categoria:"OFFER"},{id:"offer_2",nombre:"54 Hornos 2M de Oro",nombreEn:"54 Furnaces 2M Gold",precio:48,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/2MdeOro.png?raw=true",descripcion:"Pack industrial para jugadores de alto nivel con 2 millones de oro.",descripcionEn:"Industrial pack for high-level players with 2 million gold.",features:["Capacidad máxima","Optimización de recursos","Bonus de velocidad"],featuresEn:["Maximum capacity","Resource optimization","Speed bonus"],categoria:"OFFER"},{id:"offer_3",nombre:"54 Hornos 3M de Oro",nombreEn:"54 Furnaces 3M Gold",precio:59,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/3MdeOro.png?raw=true",descripcion:"La máxima potencia disponible en el mercado actual.",descripcionEn:"The maximum power available in the current market.",features:["Máximo beneficio","Inyección instantánea","Certificado Elite"],featuresEn:["Maximum benefit","Instant injection","Elite certificate"],categoria:"OFFER"},{id:"main_1",nombre:"Horno de Oro",nombreEn:"Gold Furnace",precio:7,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/Hornos%20de%20oro.png?raw=true",descripcion:"Aceleración masiva de producción de oro.",descripcionEn:"Massive acceleration of gold production.",features:["Entrega en menos de 10 min","Soporte 24/7","Proceso guiado"],featuresEn:["Delivery in < 10 min","24/7 Support","Guided process"],categoria:"MAIN"},{id:"main_2",nombre:"Mutante",nombreEn:"Mutant",precio:2,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/mutante.png?raw=true",descripcion:"Obtención de mutantes raros según disponibilidad.",descripcionEn:"Get rare mutants depending on availability.",features:["Selección a elegir","Stats máximos","Entrega rápida"],featuresEn:["Custom selection","Max stats","Fast delivery"],categoria:"MAIN"},{id:"main_3",nombre:"Orbes Basic 6 x 10",nombreEn:"Basic Orbs 6 x 10",precio:1,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/bsic-orb6.png?raw=true",descripcion:"Pack de orbes básicos para fortalecer a tu equipo.",descripcionEn:"Basic orb pack to strengthen your team.",features:["Stock ilimitado","Precio promocional","Ideal para nuevos"],featuresEn:["Unlimited stock","Promotional price","Ideal for beginners"],categoria:"MAIN"},{id:"main_4",nombre:"1M de Oro Directo",nombreEn:"1M Direct Gold",precio:35,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/1MOro.png?raw=true",descripcion:"Paquete de moneda premium gestionado con verificación.",descripcionEn:"Premium currency package managed with verification.",features:["Proceso guiado","Entrega coordinada","Soporte manual"],featuresEn:["Guided process","Coordinated delivery","Manual support"],categoria:"MAIN"},{id:"main_5",nombre:"ORB Nivel 7 Elite",nombreEn:"ORB Level 7 Elite",precio:6,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/obrNVL7.png?raw=true",descripcion:"Orbes de alto nivel para máximo rendimiento.",descripcionEn:"High-level orbs for maximum performance.",features:["Efectos críticos","Rareza extrema","Compatibilidad total"],featuresEn:["Critical effects","Extreme rarity","Total compatibility"],categoria:"MAIN"},{id:"main_6",nombre:"Mutante Bug Platino",nombreEn:"Platinum Bug Mutant",precio:6,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/bf8515d2-211a-411c-a1d9-da10c59ff4dd.png?raw=true",descripcion:"Mutante con estética platino y habilidades especiales.",descripcionEn:"Mutant with platinum aesthetics and special abilities.",features:["Visual único","Habilidades especiales","Edición 2026"],featuresEn:["Unique visual","Special skills","2026 Edition"],categoria:"MAIN"},{id:"main_7",nombre:"100k Tarros XP",nombreEn:"100k XP Jars",precio:15,imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRWQsH6i8OPIj8DtvkxDggsiG4FfvRNj4zkA&s",descripcion:"Nivelación rápida para tu ejército de gladiadores.",descripcionEn:"Fast leveling for your gladiator army.",features:["Sube a nivel alto","Ahorro de tiempo","Fácil aplicación"],featuresEn:["Level up high","Time saving","Easy application"],categoria:"MAIN"},{id:"main_8",nombre:"100k Fichas JackPot",nombreEn:"100k Jackpot Tokens",precio:15,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/fichasjacpot.png?raw=true",descripcion:"Pack masivo de fichas para eventos y ruletas.",descripcionEn:"Massive token pack for events and roulettes.",features:["Alta recompensa","Giro automático","Uso flexible"],featuresEn:["High reward","Auto spin","Flexible use"],categoria:"MAIN"},{id:"main_9",nombre:"Expansión Laboratorio",nombreEn:"Laboratory Expansion",precio:4,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/laboratorio.png?raw=true",descripcion:"Desbloquea slots y mejoras del laboratorio.",descripcionEn:"Unlock laboratory slots and improvements.",features:["Más slots","Mejora visual","Multi-breeding"],featuresEn:["More slots","Visual improvement","Multi-breeding"],categoria:"MAIN"},{id:"main_10",nombre:"Orbe Velocidad Nivel 5",nombreEn:"Level 5 Speed Orb",precio:2,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/orbelvl5.png?raw=true",descripcion:"Potenciador de velocidad para mejorar turnos.",descripcionEn:"Speed booster to improve turns.",features:["Primer golpe","Agilidad +50%","Recarga rápida"],featuresEn:["First strike","Agility +50%","Fast recharge"],categoria:"MAIN"},{id:"main_11",nombre:"ORB Nivel ATK 6 x 10",nombreEn:"ORB ATK Level 6 x 10",precio:6,imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvqT-WxlpjpLTxcrwKAUQmGTTv6vtrVHxkA&s",descripcion:"Pack ofensivo para maximizar DPS, Te entrego 10 orbes del paquete.",descripcionEn:"Offensive pack to maximize DPS, I deliver 10 orbs from the package.",features:["Daño puro","Críticos frecuentes","Efecto sangrado"],featuresEn:["Pure damage","Frequent crits","Bleeding effect"],categoria:"MAIN"},{id:"main_12",nombre:"BIG BOSS",nombreEn:"BIG BOSS",precio:10,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/bigboss.png?raw=true",descripcion:"Te consigo a BigBoss en tu cuenta.",descripcionEn:"I get BigBoss in your account.",features:["Resistencia temporal","Fuerza X2","Drop mejorado"],featuresEn:["Temporary resistance","2X Strength","Improved drop"],categoria:"MAIN"},{id:"other_1",nombre:"Doxeo para +51",nombreEn:"Doxxing for +51",precio:5,imagen:"https://github.com/luqueSmith/MGG/blob/main/img/Oferta/doxeo.png?raw=true",descripcion:"Saco informacion como DNI, Arbol Familiar antencedentes y etc con el numero o nombre para Peru.",descripcionEn:"I extract information like ID, Family Tree, records, etc. with number or name for Peru.",features:["Fuentes públicas","Reporte PDF","Enfoque de privacidad"],featuresEn:["Public sources","PDF Report","Privacy focused"],categoria:"OTHER"},{id:"other_2",nombre:"Desarrollo Web Next-Gen",nombreEn:"Next-Gen Web Development",precio:40,imagen:"https://www.freecodecamp.org/news/content/images/2019/09/lua_script.jpg",descripcion:"Creación de portafolios, tiendas o landing pages y etc, solo 40 soles por una web alojada en GitHub, Si te interesa una web con dominio .com dale en ver mas..",descripcionEn:"Creation of portfolios, stores or landing pages etc, only 40 soles for a website hosted on GitHub. If you are interested in a website with a .com domain click see more..",features:["UI/UX único","Optimización SEO","Host incluido","Entrega profesional"],featuresEn:["Unique UI/UX","SEO Optimization","Host included","Professional delivery"],categoria:"OTHER",saberMas:"https://webcraft-ux.github.io/webcraft/"},{id:"other_3",nombre:"Scripts Custom MGG",nombreEn:"Custom MGG Scripts",precio:15,imagen:"https://callcenters.by/images/asterisk/lua%20plugin.jpg",descripcion:"Automatizaciones personalizadas para productividad.",descripcionEn:"Custom automations for productivity.",features:["Auto-farm","Logs de actividades","Configuración guiada","Soporte"],featuresEn:["Auto-farm","Activity logs","Guided configuration","Support"],categoria:"OTHER"},{id:"other_4",nombre:"ChatGPT Premium",nombreEn:"ChatGPT Premium",precio:8,imagen:"https://spanish.entrepreneur.com/wp-content/uploads/sites/3/2024/12/1733494589-openai-chatgpt-premium-subscription-1224-g2186754261.jpg",descripcion:"Acceso premium para chatGPT barato y con descuento por cantidad.",descripcionEn:"Premium access for cheap ChatGPT with quantity discount.",features:["Asistencia rápida","Uso personal","Configuración guiada","Soporte base"],featuresEn:["Fast assistance","Personal use","Guided configuration","Basic support"],categoria:"OTHER"}],kb={Cajas:`Box Cyber	mystery_cyber	https://s-ak.kobojo.com/mutants/assets/thumbnails/mystery_cyber.png
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
Orbe Respuesta +20%	orb_basic_retaliate_06	https://s-ak.kobojo.com/mutants/assets/thumbnails/orb_basic_retaliate_06.png`},d0="51906328464",Td="https://chat.whatsapp.com/DALbalnNe9N6bD4W1Wp0HM?mode=gi_t",xy=[0,50,60,65,70,75,80,85,90],p0=[{id:"pe",name:"Perú",currency:"PEN",symbol:"S/",rate:1,exchangeRate:1,flag:"🇵🇪"},{id:"mx",name:"México",currency:"MXN",symbol:"$",rate:1,exchangeRate:5.07,flag:"🇲🇽"},{id:"es",name:"España",currency:"EUR",symbol:"€",rate:1,exchangeRate:.25,flag:"🇪🇸"},{id:"cl",name:"Chile",currency:"CLP",symbol:"$",rate:1,exchangeRate:262.23,flag:"🇨🇱"},{id:"ar",name:"Argentina",currency:"ARS",symbol:"$",rate:1,exchangeRate:408.14,flag:"🇦🇷"},{id:"ve",name:"Venezuela",currency:"VES",symbol:"Bs",rate:1,exchangeRate:150.82,flag:"🇻🇪"},{id:"co",name:"Colombia",currency:"COP",symbol:"$",rate:1,exchangeRate:1110.59,flag:"🇨🇴"},{id:"bo",name:"Bolivia",currency:"BOB",symbol:"Bs",rate:1,exchangeRate:2.02,flag:"🇧🇴"}],_y=[{name:"Western Union",logo:"https://play-lh.googleusercontent.com/2O6TfOnCMQ8aWdhcME3CwHK_od33WPBw02ZpG_lpvnwRPHfCKBlmCeaLJ_tL8oqchBg",info:"Global money transfer. Available at physical agents worldwide.",infoEs:"Envío de dinero global. Disponible en agentes físicos."},{name:"Binance",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9rjRtIJJM5o6xP2LqfQFFcWejwFgRA1rag&s",info:"Direct deposits via USDT (Tron Network TRC20). Fast & Secure.",infoEs:"Depósitos directos vía USDT (Red Tron TRC20)."},{name:"PayPal",logo:"https://play-lh.googleusercontent.com/iQ8f5plIFy9rrY46Q2TNRwq_8nCvh9LZVwytqMBpOEcfnIU3vTkICQ6L1-RInWS93oQg",info:"Secure international payment with card or balance.",infoEs:"Pago internacional seguro con tarjeta o saldo."},{name:"Yape",logo:"https://play-lh.googleusercontent.com/y5S3ZIz-ohg3FirlISnk3ca2yQ6cd825OpA0YK9qklc5W8MLSe0NEIEqoV-pZDvO0A8",info:"Exclusive for PERU (PEN). Immediate transfer.",infoEs:"Exclusivo para PERÚ (Soles). Transferencia inmediata."},{name:"Airtm",logo:"https://s3-eu-west-1.amazonaws.com/tpd/logos/5d6d32510d8627000132ad10/0x0.png",info:"Digital wallet recommended for Latin America.",infoEs:"Billetera digital recomendada para Latinoamérica."}],yb=["CH","LU","DK","NO","IS","US","DE","SG","IE","AU","CA","GB","ES","IT","KR","IL","CL","UY"],ky={"4.0":["CH","LU","DK","NO","IS"],"3.0":["US","DE","SG","IE","AU","CA","GB"],"2.0":["IT","KR","IL","UY"],"1.5":["BR","FR","JP"]},yy=`A00-C0R3-C0NTR0L aa_99
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
`,jd=C.createContext({});function Sd(n){const s=C.useRef(null);return s.current===null&&(s.current=n()),s.current}const vy=typeof window<"u",g0=vy?C.useLayoutEffect:C.useEffect,Yr=C.createContext(null);function Id(n,s){n.indexOf(s)===-1&&n.push(s)}function zr(n,s){const l=n.indexOf(s);l>-1&&n.splice(l,1)}const la=(n,s,l)=>l>s?s:l<n?n:l;let wd=()=>{};const ln={},m0=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),h0=n=>typeof n=="object"&&n!==null,b0=n=>/^0[^.\s]+$/u.test(n);function f0(n){let s;return()=>(s===void 0&&(s=n()),s)}const Pt=n=>n,Zi=(...n)=>n.reduce((s,l)=>r=>l(s(r))),Pi=(n,s,l)=>{const r=s-n;return r?(l-n)/r:1};class Nd{constructor(){this.subscriptions=[]}add(s){return Id(this.subscriptions,s),()=>zr(this.subscriptions,s)}notify(s,l,r){const d=this.subscriptions.length;if(d)if(d===1)this.subscriptions[0](s,l,r);else for(let p=0;p<d;p++){const g=this.subscriptions[p];g&&g(s,l,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Et=n=>n*1e3,Ut=n=>n/1e3,x0=(n,s)=>s?n*(1e3/s):0,_0=(n,s,l)=>(((1-3*l+3*s)*n+(3*l-6*s))*n+3*s)*n,Gy=1e-7,My=12;function Ay(n,s,l,r,d){let p,g,b=0;do g=s+(l-s)/2,p=_0(g,r,d)-n,p>0?l=g:s=g;while(Math.abs(p)>Gy&&++b<My);return g}function Yi(n,s,l,r){if(n===s&&l===r)return Pt;const d=p=>Ay(p,0,1,n,l);return p=>p===0||p===1?p:_0(d(p),s,r)}const k0=n=>s=>s<=.5?n(2*s)/2:(2-n(2*(1-s)))/2,y0=n=>s=>1-n(1-s),v0=Yi(.33,1.53,.69,.99),Ed=y0(v0),G0=k0(Ed),M0=n=>n>=1?1:(n*=2)<1?.5*Ed(n):.5*(2-Math.pow(2,-10*(n-1))),Vd=n=>1-Math.sin(Math.acos(n)),A0=y0(Vd),T0=k0(Vd),Ty=Yi(.42,0,1,1),jy=Yi(0,0,.58,1),j0=Yi(.42,0,.58,1),Sy=n=>Array.isArray(n)&&typeof n[0]!="number",S0=n=>Array.isArray(n)&&typeof n[0]=="number",Iy={linear:Pt,easeIn:Ty,easeInOut:j0,easeOut:jy,circIn:Vd,circInOut:T0,circOut:A0,backIn:Ed,backInOut:G0,backOut:v0,anticipate:M0},wy=n=>typeof n=="string",vb=n=>{if(S0(n)){wd(n.length===4);const[s,l,r,d]=n;return Yi(s,l,r,d)}else if(wy(n))return Iy[n];return n},fr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Ny(n,s){let l=new Set,r=new Set,d=!1,p=!1;const g=new WeakSet;let b={delta:0,timestamp:0,isProcessing:!1};function x(f){g.has(f)&&(m.schedule(f),n()),f(b)}const m={schedule:(f,_=!1,y=!1)=>{const v=y&&d?l:r;return _&&g.add(f),v.add(f),f},cancel:f=>{r.delete(f),g.delete(f)},process:f=>{if(b=f,d){p=!0;return}d=!0;const _=l;l=r,r=_,l.forEach(x),l.clear(),d=!1,p&&(p=!1,m.process(f))}};return m}const Ey=40;function I0(n,s){let l=!1,r=!0;const d={delta:0,timestamp:0,isProcessing:!1},p=()=>l=!0,g=fr.reduce((E,V)=>(E[V]=Ny(p),E),{}),{setup:b,read:x,resolveKeyframes:m,preUpdate:f,update:_,preRender:y,render:G,postRender:v}=g,S=()=>{const E=ln.useManualTiming,V=E?d.timestamp:performance.now();l=!1,E||(d.delta=r?1e3/60:Math.max(Math.min(V-d.timestamp,Ey),1)),d.timestamp=V,d.isProcessing=!0,b.process(d),x.process(d),m.process(d),f.process(d),_.process(d),y.process(d),G.process(d),v.process(d),d.isProcessing=!1,l&&s&&(r=!1,n(S))},T=()=>{l=!0,r=!0,d.isProcessing||n(S)};return{schedule:fr.reduce((E,V)=>{const K=g[V];return E[V]=(J,R=!1,H=!1)=>(l||T(),K.schedule(J,R,H)),E},{}),cancel:E=>{for(let V=0;V<fr.length;V++)g[fr[V]].cancel(E)},state:d,steps:g}}const{schedule:qe,cancel:cn,state:lt,steps:Au}=I0(typeof requestAnimationFrame<"u"?requestAnimationFrame:Pt,!0);let Tr;function Vy(){Tr=void 0}const gt={now:()=>(Tr===void 0&&gt.set(lt.isProcessing||ln.useManualTiming?lt.timestamp:performance.now()),Tr),set:n=>{Tr=n,queueMicrotask(Vy)}},w0=n=>s=>typeof s=="string"&&s.startsWith(n),N0=w0("--"),Cy=w0("var(--"),Cd=n=>Cy(n)?Dy.test(n.split("/*")[0].trim()):!1,Dy=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Gb(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const Ds={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Fi={...Ds,transform:n=>la(0,1,n)},xr={...Ds,default:1},Ri=n=>Math.round(n*1e5)/1e5,Dd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function qy(n){return n==null}const Ry=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,qd=(n,s)=>l=>!!(typeof l=="string"&&Ry.test(l)&&l.startsWith(n)||s&&!qy(l)&&Object.prototype.hasOwnProperty.call(l,s)),E0=(n,s,l)=>r=>{if(typeof r!="string")return r;const[d,p,g,b]=r.match(Dd);return{[n]:parseFloat(d),[s]:parseFloat(p),[l]:parseFloat(g),alpha:b!==void 0?parseFloat(b):1}},zy=n=>la(0,255,n),Tu={...Ds,transform:n=>Math.round(zy(n))},Vn={test:qd("rgb","red"),parse:E0("red","green","blue"),transform:({red:n,green:s,blue:l,alpha:r=1})=>"rgba("+Tu.transform(n)+", "+Tu.transform(s)+", "+Tu.transform(l)+", "+Ri(Fi.transform(r))+")"};function Ly(n){let s="",l="",r="",d="";return n.length>5?(s=n.substring(1,3),l=n.substring(3,5),r=n.substring(5,7),d=n.substring(7,9)):(s=n.substring(1,2),l=n.substring(2,3),r=n.substring(3,4),d=n.substring(4,5),s+=s,l+=l,r+=r,d+=d),{red:parseInt(s,16),green:parseInt(l,16),blue:parseInt(r,16),alpha:d?parseInt(d,16)/255:1}}const $u={test:qd("#"),parse:Ly,transform:Vn.transform},Qi=n=>({test:s=>typeof s=="string"&&s.endsWith(n)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${n}`}),Sa=Qi("deg"),ra=Qi("%"),le=Qi("px"),Hy=Qi("vh"),Oy=Qi("vw"),Mb={...ra,parse:n=>ra.parse(n)/100,transform:n=>ra.transform(n*100)},Ts={test:qd("hsl","hue"),parse:E0("hue","saturation","lightness"),transform:({hue:n,saturation:s,lightness:l,alpha:r=1})=>"hsla("+Math.round(n)+", "+ra.transform(Ri(s))+", "+ra.transform(Ri(l))+", "+Ri(Fi.transform(r))+")"},Ye={test:n=>Vn.test(n)||$u.test(n)||Ts.test(n),parse:n=>Vn.test(n)?Vn.parse(n):Ts.test(n)?Ts.parse(n):$u.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Vn.transform(n):Ts.transform(n),getAnimatableNone:n=>{const s=Ye.parse(n);return s.alpha=0,Ye.transform(s)}},By=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Uy(n){var s,l;return isNaN(n)&&typeof n=="string"&&(((s=n.match(Dd))==null?void 0:s.length)||0)+(((l=n.match(By))==null?void 0:l.length)||0)>0}const V0="number",C0="color",Py="var",Fy="var(",Ab="${}",Ky=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Es(n){const s=n.toString(),l=[],r={color:[],number:[],var:[]},d=[];let p=0;const b=s.replace(Ky,x=>(Ye.test(x)?(r.color.push(p),d.push(C0),l.push(Ye.parse(x))):x.startsWith(Fy)?(r.var.push(p),d.push(Py),l.push(x)):(r.number.push(p),d.push(V0),l.push(parseFloat(x))),++p,Ab)).split(Ab);return{values:l,split:b,indexes:r,types:d}}function Xy(n){return Es(n).values}function D0({split:n,types:s}){const l=n.length;return r=>{let d="";for(let p=0;p<l;p++)if(d+=n[p],r[p]!==void 0){const g=s[p];g===V0?d+=Ri(r[p]):g===C0?d+=Ye.transform(r[p]):d+=r[p]}return d}}function Zy(n){return D0(Es(n))}const Yy=n=>typeof n=="number"?0:Ye.test(n)?Ye.getAnimatableNone(n):n,Qy=(n,s)=>typeof n=="number"?s!=null&&s.trim().endsWith("/")?n:0:Yy(n);function $y(n){const s=Es(n);return D0(s)(s.values.map((r,d)=>Qy(r,s.split[d])))}const $t={test:Uy,parse:Xy,createTransformer:Zy,getAnimatableNone:$y};function ju(n,s,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?n+(s-n)*6*l:l<1/2?s:l<2/3?n+(s-n)*(2/3-l)*6:n}function Jy({hue:n,saturation:s,lightness:l,alpha:r}){n/=360,s/=100,l/=100;let d=0,p=0,g=0;if(!s)d=p=g=l;else{const b=l<.5?l*(1+s):l+s-l*s,x=2*l-b;d=ju(x,b,n+1/3),p=ju(x,b,n),g=ju(x,b,n-1/3)}return{red:Math.round(d*255),green:Math.round(p*255),blue:Math.round(g*255),alpha:r}}function Lr(n,s){return l=>l>0?s:n}const De=(n,s,l)=>n+(s-n)*l,Su=(n,s,l)=>{const r=n*n,d=l*(s*s-r)+r;return d<0?0:Math.sqrt(d)},Wy=[$u,Vn,Ts],ev=n=>Wy.find(s=>s.test(n));function Tb(n){const s=ev(n);if(!s)return!1;let l=s.parse(n);return s===Ts&&(l=Jy(l)),l}const jb=(n,s)=>{const l=Tb(n),r=Tb(s);if(!l||!r)return Lr(n,s);const d={...l};return p=>(d.red=Su(l.red,r.red,p),d.green=Su(l.green,r.green,p),d.blue=Su(l.blue,r.blue,p),d.alpha=De(l.alpha,r.alpha,p),Vn.transform(d))},Ju=new Set(["none","hidden"]);function tv(n,s){return Ju.has(n)?l=>l<=0?n:s:l=>l>=1?s:n}function av(n,s){return l=>De(n,s,l)}function Rd(n){return typeof n=="number"?av:typeof n=="string"?Cd(n)?Lr:Ye.test(n)?jb:iv:Array.isArray(n)?q0:typeof n=="object"?Ye.test(n)?jb:nv:Lr}function q0(n,s){const l=[...n],r=l.length,d=n.map((p,g)=>Rd(p)(p,s[g]));return p=>{for(let g=0;g<r;g++)l[g]=d[g](p);return l}}function nv(n,s){const l={...n,...s},r={};for(const d in l)n[d]!==void 0&&s[d]!==void 0&&(r[d]=Rd(n[d])(n[d],s[d]));return d=>{for(const p in r)l[p]=r[p](d);return l}}function sv(n,s){const l=[],r={color:0,var:0,number:0};for(let d=0;d<s.values.length;d++){const p=s.types[d],g=n.indexes[p][r[p]],b=n.values[g]??0;l[d]=b,r[p]++}return l}const iv=(n,s)=>{const l=$t.createTransformer(s),r=Es(n),d=Es(s);return r.indexes.var.length===d.indexes.var.length&&r.indexes.color.length===d.indexes.color.length&&r.indexes.number.length>=d.indexes.number.length?Ju.has(n)&&!d.values.length||Ju.has(s)&&!r.values.length?tv(n,s):Zi(q0(sv(r,d),d.values),l):Lr(n,s)};function R0(n,s,l){return typeof n=="number"&&typeof s=="number"&&typeof l=="number"?De(n,s,l):Rd(n)(n,s)}const ov=n=>{const s=({timestamp:l})=>n(l);return{start:(l=!0)=>qe.update(s,l),stop:()=>cn(s),now:()=>lt.isProcessing?lt.timestamp:gt.now()}},z0=(n,s,l=10)=>{let r="";const d=Math.max(Math.round(s/l),2);for(let p=0;p<d;p++)r+=Math.round(n(p/(d-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Hr=2e4;function zd(n){let s=0;const l=50;let r=n.next(s);for(;!r.done&&s<Hr;)s+=l,r=n.next(s);return s>=Hr?1/0:s}function rv(n,s=100,l){const r=l({...n,keyframes:[0,s]}),d=Math.min(zd(r),Hr);return{type:"keyframes",ease:p=>r.next(d*p).value/s,duration:Ut(d)}}const Be={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Wu(n,s){return n*Math.sqrt(1-s*s)}const lv=12;function cv(n,s,l){let r=l;for(let d=1;d<lv;d++)r=r-n(r)/s(r);return r}const Iu=.001;function uv({duration:n=Be.duration,bounce:s=Be.bounce,velocity:l=Be.velocity,mass:r=Be.mass}){let d,p,g=1-s;g=la(Be.minDamping,Be.maxDamping,g),n=la(Be.minDuration,Be.maxDuration,Ut(n)),g<1?(d=m=>{const f=m*g,_=f*n,y=f-l,G=Wu(m,g),v=Math.exp(-_);return Iu-y/G*v},p=m=>{const _=m*g*n,y=_*l+l,G=Math.pow(g,2)*Math.pow(m,2)*n,v=Math.exp(-_),S=Wu(Math.pow(m,2),g);return(-d(m)+Iu>0?-1:1)*((y-G)*v)/S}):(d=m=>{const f=Math.exp(-m*n),_=(m-l)*n+1;return-Iu+f*_},p=m=>{const f=Math.exp(-m*n),_=(l-m)*(n*n);return f*_});const b=5/n,x=cv(d,p,b);if(n=Et(n),isNaN(x))return{stiffness:Be.stiffness,damping:Be.damping,duration:n};{const m=Math.pow(x,2)*r;return{stiffness:m,damping:g*2*Math.sqrt(r*m),duration:n}}}const dv=["duration","bounce"],pv=["stiffness","damping","mass"];function Sb(n,s){return s.some(l=>n[l]!==void 0)}function gv(n){let s={velocity:Be.velocity,stiffness:Be.stiffness,damping:Be.damping,mass:Be.mass,isResolvedFromDuration:!1,...n};if(!Sb(n,pv)&&Sb(n,dv))if(s.velocity=0,n.visualDuration){const l=n.visualDuration,r=2*Math.PI/(l*1.2),d=r*r,p=2*la(.05,1,1-(n.bounce||0))*Math.sqrt(d);s={...s,mass:Be.mass,stiffness:d,damping:p}}else{const l=uv({...n,velocity:0});s={...s,...l,mass:Be.mass},s.isResolvedFromDuration=!0}return s}function Or(n=Be.visualDuration,s=Be.bounce){const l=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:s}:n;let{restSpeed:r,restDelta:d}=l;const p=l.keyframes[0],g=l.keyframes[l.keyframes.length-1],b={done:!1,value:p},{stiffness:x,damping:m,mass:f,duration:_,velocity:y,isResolvedFromDuration:G}=gv({...l,velocity:-Ut(l.velocity||0)}),v=y||0,S=m/(2*Math.sqrt(x*f)),T=g-p,N=Ut(Math.sqrt(x/f)),L=Math.abs(T)<5;r||(r=L?Be.restSpeed.granular:Be.restSpeed.default),d||(d=L?Be.restDelta.granular:Be.restDelta.default);let E,V,K,J,R,H;if(S<1)K=Wu(N,S),J=(v+S*N*T)/K,E=B=>{const Z=Math.exp(-S*N*B);return g-Z*(J*Math.sin(K*B)+T*Math.cos(K*B))},R=S*N*J+T*K,H=S*N*T-J*K,V=B=>Math.exp(-S*N*B)*(R*Math.sin(K*B)+H*Math.cos(K*B));else if(S===1){E=Z=>g-Math.exp(-N*Z)*(T+(v+N*T)*Z);const B=v+N*T;V=Z=>Math.exp(-N*Z)*(N*B*Z-v)}else{const B=N*Math.sqrt(S*S-1);E=Q=>{const ie=Math.exp(-S*N*Q),I=Math.min(B*Q,300);return g-ie*((v+S*N*T)*Math.sinh(I)+B*T*Math.cosh(I))/B};const Z=(v+S*N*T)/B,ae=S*N*Z-T*B,ee=S*N*T-Z*B;V=Q=>{const ie=Math.exp(-S*N*Q),I=Math.min(B*Q,300);return ie*(ae*Math.sinh(I)+ee*Math.cosh(I))}}const F={calculatedDuration:G&&_||null,velocity:B=>Et(V(B)),next:B=>{if(!G&&S<1){const ae=Math.exp(-S*N*B),ee=Math.sin(K*B),Q=Math.cos(K*B),ie=g-ae*(J*ee+T*Q),I=Et(ae*(R*ee+H*Q));return b.done=Math.abs(I)<=r&&Math.abs(g-ie)<=d,b.value=b.done?g:ie,b}const Z=E(B);if(G)b.done=B>=_;else{const ae=Et(V(B));b.done=Math.abs(ae)<=r&&Math.abs(g-Z)<=d}return b.value=b.done?g:Z,b},toString:()=>{const B=Math.min(zd(F),Hr),Z=z0(ae=>F.next(B*ae).value,B,30);return B+"ms "+Z},toTransition:()=>{}};return F}Or.applyToOptions=n=>{const s=rv(n,100,Or);return n.ease=s.ease,n.duration=Et(s.duration),n.type="keyframes",n};const mv=5;function L0(n,s,l){const r=Math.max(s-mv,0);return x0(l-n(r),s-r)}function ed({keyframes:n,velocity:s=0,power:l=.8,timeConstant:r=325,bounceDamping:d=10,bounceStiffness:p=500,modifyTarget:g,min:b,max:x,restDelta:m=.5,restSpeed:f}){const _=n[0],y={done:!1,value:_},G=H=>b!==void 0&&H<b||x!==void 0&&H>x,v=H=>b===void 0?x:x===void 0||Math.abs(b-H)<Math.abs(x-H)?b:x;let S=l*s;const T=_+S,N=g===void 0?T:g(T);N!==T&&(S=N-_);const L=H=>-S*Math.exp(-H/r),E=H=>N+L(H),V=H=>{const F=L(H),B=E(H);y.done=Math.abs(F)<=m,y.value=y.done?N:B};let K,J;const R=H=>{G(y.value)&&(K=H,J=Or({keyframes:[y.value,v(y.value)],velocity:L0(E,H,y.value),damping:d,stiffness:p,restDelta:m,restSpeed:f}))};return R(0),{calculatedDuration:null,next:H=>{let F=!1;return!J&&K===void 0&&(F=!0,V(H),R(H)),K!==void 0&&H>=K?J.next(H-K):(!F&&V(H),y)}}}function hv(n,s,l){const r=[],d=l||ln.mix||R0,p=n.length-1;for(let g=0;g<p;g++){let b=d(n[g],n[g+1]);if(s){const x=Array.isArray(s)?s[g]||Pt:s;b=Zi(x,b)}r.push(b)}return r}function bv(n,s,{clamp:l=!0,ease:r,mixer:d}={}){const p=n.length;if(wd(p===s.length),p===1)return()=>s[0];if(p===2&&s[0]===s[1])return()=>s[1];const g=n[0]===n[1];n[0]>n[p-1]&&(n=[...n].reverse(),s=[...s].reverse());const b=hv(s,r,d),x=b.length,m=f=>{if(g&&f<n[0])return s[0];let _=0;if(x>1)for(;_<n.length-2&&!(f<n[_+1]);_++);const y=Pi(n[_],n[_+1],f);return b[_](y)};return l?f=>m(la(n[0],n[p-1],f)):m}function fv(n,s){const l=n[n.length-1];for(let r=1;r<=s;r++){const d=Pi(0,s,r);n.push(De(l,1,d))}}function xv(n){const s=[0];return fv(s,n.length-1),s}function _v(n,s){return n.map(l=>l*s)}function kv(n,s){return n.map(()=>s||j0).splice(0,n.length-1)}function zi({duration:n=300,keyframes:s,times:l,ease:r="easeInOut"}){const d=Sy(r)?r.map(vb):vb(r),p={done:!1,value:s[0]},g=_v(l&&l.length===s.length?l:xv(s),n),b=bv(g,s,{ease:Array.isArray(d)?d:kv(s,d)});return{calculatedDuration:n,next:x=>(p.value=b(x),p.done=x>=n,p)}}const yv=n=>n!==null;function Qr(n,{repeat:s,repeatType:l="loop"},r,d=1){const p=n.filter(yv),b=d<0||s&&l!=="loop"&&s%2===1?0:p.length-1;return!b||r===void 0?p[b]:r}const vv={decay:ed,inertia:ed,tween:zi,keyframes:zi,spring:Or};function H0(n){typeof n.type=="string"&&(n.type=vv[n.type])}class Ld{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(s=>{this.resolve=s})}notifyFinished(){this.resolve()}then(s,l){return this.finished.then(s,l)}}const Gv=n=>n/100;class Br extends Ld{constructor(s){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,d;const{motionValue:l}=this.options;l&&l.updatedAt!==gt.now()&&this.tick(gt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(d=(r=this.options).onStop)==null||d.call(r))},this.options=s,this.initAnimation(),this.play(),s.autoplay===!1&&this.pause()}initAnimation(){const{options:s}=this;H0(s);const{type:l=zi,repeat:r=0,repeatDelay:d=0,repeatType:p,velocity:g=0}=s;let{keyframes:b}=s;const x=l||zi;x!==zi&&typeof b[0]!="number"&&(this.mixKeyframes=Zi(Gv,R0(b[0],b[1])),b=[0,100]);const m=x({...s,keyframes:b});p==="mirror"&&(this.mirroredGenerator=x({...s,keyframes:[...b].reverse(),velocity:-g})),m.calculatedDuration===null&&(m.calculatedDuration=zd(m));const{calculatedDuration:f}=m;this.calculatedDuration=f,this.resolvedDuration=f+d,this.totalDuration=this.resolvedDuration*(r+1)-d,this.generator=m}updateTime(s){const l=Math.round(s-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=l}tick(s,l=!1){const{generator:r,totalDuration:d,mixKeyframes:p,mirroredGenerator:g,resolvedDuration:b,calculatedDuration:x}=this;if(this.startTime===null)return r.next(0);const{delay:m=0,keyframes:f,repeat:_,repeatType:y,repeatDelay:G,type:v,onUpdate:S,finalKeyframe:T}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,s):this.speed<0&&(this.startTime=Math.min(s-d/this.speed,this.startTime)),l?this.currentTime=s:this.updateTime(s);const N=this.currentTime-m*(this.playbackSpeed>=0?1:-1),L=this.playbackSpeed>=0?N<0:N>d;this.currentTime=Math.max(N,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let E=this.currentTime,V=r;if(_){const H=Math.min(this.currentTime,d)/b;let F=Math.floor(H),B=H%1;!B&&H>=1&&(B=1),B===1&&F--,F=Math.min(F,_+1),!!(F%2)&&(y==="reverse"?(B=1-B,G&&(B-=G/b)):y==="mirror"&&(V=g)),E=la(0,1,B)*b}let K;L?(this.delayState.value=f[0],K=this.delayState):K=V.next(E),p&&!L&&(K.value=p(K.value));let{done:J}=K;!L&&x!==null&&(J=this.playbackSpeed>=0?this.currentTime>=d:this.currentTime<=0);const R=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&J);return R&&v!==ed&&(K.value=Qr(f,this.options,T,this.speed)),S&&S(K.value),R&&this.finish(),K}then(s,l){return this.finished.then(s,l)}get duration(){return Ut(this.calculatedDuration)}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+Ut(s)}get time(){return Ut(this.currentTime)}set time(s){s=Et(s),this.currentTime=s,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=s:this.driver&&(this.startTime=this.driver.now()-s/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=s,this.tick(s))}getGeneratorVelocity(){const s=this.currentTime;if(s<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(s);const l=this.generator.next(s).value;return L0(r=>this.generator.next(r).value,s,l)}get speed(){return this.playbackSpeed}set speed(s){const l=this.playbackSpeed!==s;l&&this.driver&&this.updateTime(gt.now()),this.playbackSpeed=s,l&&this.driver&&(this.time=Ut(this.currentTime))}play(){var d,p;if(this.isStopped)return;const{driver:s=ov,startTime:l}=this.options;this.driver||(this.driver=s(g=>this.tick(g))),(p=(d=this.options).onPlay)==null||p.call(d);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=l??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(gt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var s,l;this.notifyFinished(),this.teardown(),this.state="finished",(l=(s=this.options).onComplete)==null||l.call(s)}cancel(){var s,l;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(l=(s=this.options).onCancel)==null||l.call(s)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(s){return this.startTime=0,this.tick(s,!0)}attachTimeline(s){var l;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(l=this.driver)==null||l.stop(),s.observe(this)}}function Mv(n){for(let s=1;s<n.length;s++)n[s]??(n[s]=n[s-1])}const Cn=n=>n*180/Math.PI,td=n=>{const s=Cn(Math.atan2(n[1],n[0]));return ad(s)},Av={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:td,rotateZ:td,skewX:n=>Cn(Math.atan(n[1])),skewY:n=>Cn(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},ad=n=>(n=n%360,n<0&&(n+=360),n),Ib=td,wb=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Nb=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),Tv={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:wb,scaleY:Nb,scale:n=>(wb(n)+Nb(n))/2,rotateX:n=>ad(Cn(Math.atan2(n[6],n[5]))),rotateY:n=>ad(Cn(Math.atan2(-n[2],n[0]))),rotateZ:Ib,rotate:Ib,skewX:n=>Cn(Math.atan(n[4])),skewY:n=>Cn(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function nd(n){return n.includes("scale")?1:0}function sd(n,s){if(!n||n==="none")return nd(s);const l=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,d;if(l)r=Tv,d=l;else{const b=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Av,d=b}if(!d)return nd(s);const p=r[s],g=d[1].split(",").map(Sv);return typeof p=="function"?p(g):g[p]}const jv=(n,s)=>{const{transform:l="none"}=getComputedStyle(n);return sd(l,s)};function Sv(n){return parseFloat(n.trim())}const qs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Rs=new Set([...qs,"pathRotation"]),Eb=n=>n===Ds||n===le,Iv=new Set(["x","y","z"]),wv=qs.filter(n=>!Iv.has(n));function Nv(n){const s=[];return wv.forEach(l=>{const r=n.getValue(l);r!==void 0&&(s.push([l,r.get()]),r.set(l.startsWith("scale")?1:0))}),s}const sn={width:({x:n},{paddingLeft:s="0",paddingRight:l="0",boxSizing:r})=>{const d=n.max-n.min;return r==="border-box"?d:d-parseFloat(s)-parseFloat(l)},height:({y:n},{paddingTop:s="0",paddingBottom:l="0",boxSizing:r})=>{const d=n.max-n.min;return r==="border-box"?d:d-parseFloat(s)-parseFloat(l)},top:(n,{top:s})=>parseFloat(s),left:(n,{left:s})=>parseFloat(s),bottom:({y:n},{top:s})=>parseFloat(s)+(n.max-n.min),right:({x:n},{left:s})=>parseFloat(s)+(n.max-n.min),x:(n,{transform:s})=>sd(s,"x"),y:(n,{transform:s})=>sd(s,"y")};sn.translateX=sn.x;sn.translateY=sn.y;const Dn=new Set;let id=!1,od=!1,rd=!1;function O0(){if(od){const n=Array.from(Dn).filter(r=>r.needsMeasurement),s=new Set(n.map(r=>r.element)),l=new Map;s.forEach(r=>{const d=Nv(r);d.length&&(l.set(r,d),r.render())}),n.forEach(r=>r.measureInitialState()),s.forEach(r=>{r.render();const d=l.get(r);d&&d.forEach(([p,g])=>{var b;(b=r.getValue(p))==null||b.set(g)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}od=!1,id=!1,Dn.forEach(n=>n.complete(rd)),Dn.clear()}function B0(){Dn.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(od=!0)})}function Ev(){rd=!0,B0(),O0(),rd=!1}class Hd{constructor(s,l,r,d,p,g=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...s],this.onComplete=l,this.name=r,this.motionValue=d,this.element=p,this.isAsync=g}scheduleResolve(){this.state="scheduled",this.isAsync?(Dn.add(this),id||(id=!0,qe.read(B0),qe.resolveKeyframes(O0))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:s,name:l,element:r,motionValue:d}=this;if(s[0]===null){const p=d==null?void 0:d.get(),g=s[s.length-1];if(p!==void 0)s[0]=p;else if(r&&l){const b=r.readValue(l,g);b!=null&&(s[0]=b)}s[0]===void 0&&(s[0]=g),d&&p===void 0&&d.set(s[0])}Mv(s)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(s=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,s),Dn.delete(this)}cancel(){this.state==="scheduled"&&(Dn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Vv=n=>n.startsWith("--");function U0(n,s,l){Vv(s)?n.style.setProperty(s,l):n.style[s]=l}const Cv={};function P0(n,s){const l=f0(n);return()=>Cv[s]??l()}const Dv=P0(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),F0=P0(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Di=([n,s,l,r])=>`cubic-bezier(${n}, ${s}, ${l}, ${r})`,Vb={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Di([0,.65,.55,1]),circOut:Di([.55,0,1,.45]),backIn:Di([.31,.01,.66,-.59]),backOut:Di([.33,1.53,.69,.99])};function K0(n,s){if(n)return typeof n=="function"?F0()?z0(n,s):"ease-out":S0(n)?Di(n):Array.isArray(n)?n.map(l=>K0(l,s)||Vb.easeOut):Vb[n]}function qv(n,s,l,{delay:r=0,duration:d=300,repeat:p=0,repeatType:g="loop",ease:b="easeOut",times:x}={},m=void 0){const f={[s]:l};x&&(f.offset=x);const _=K0(b,d);Array.isArray(_)&&(f.easing=_);const y={delay:r,duration:d,easing:Array.isArray(_)?"linear":_,fill:"both",iterations:p+1,direction:g==="reverse"?"alternate":"normal"};return m&&(y.pseudoElement=m),n.animate(f,y)}function X0(n){return typeof n=="function"&&"applyToOptions"in n}function Rv({type:n,...s}){return X0(n)&&F0()?n.applyToOptions(s):(s.duration??(s.duration=300),s.ease??(s.ease="easeOut"),s)}class Z0 extends Ld{constructor(s){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!s)return;const{element:l,name:r,keyframes:d,pseudoElement:p,allowFlatten:g=!1,finalKeyframe:b,onComplete:x}=s;this.isPseudoElement=!!p,this.allowFlatten=g,this.options=s,wd(typeof s.type!="string");const m=Rv(s);this.animation=qv(l,r,d,m,p),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!p){const f=Qr(d,this.options,b,this.speed);this.updateMotionValue&&this.updateMotionValue(f),U0(l,r,f),this.animation.cancel()}x==null||x(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var s,l;(l=(s=this.animation).finish)==null||l.call(s)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:s}=this;s==="idle"||s==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var l,r,d;const s=(l=this.options)==null?void 0:l.element;!this.isPseudoElement&&(s!=null&&s.isConnected)&&((d=(r=this.animation).commitStyles)==null||d.call(r))}get duration(){var l,r;const s=((r=(l=this.animation.effect)==null?void 0:l.getComputedTiming)==null?void 0:r.call(l).duration)||0;return Ut(Number(s))}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+Ut(s)}get time(){return Ut(Number(this.animation.currentTime)||0)}set time(s){const l=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Et(s),l&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(s){s<0&&(this.finishedTime=null),this.animation.playbackRate=s}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(s){this.manualStartTime=this.animation.startTime=s}attachTimeline({timeline:s,rangeStart:l,rangeEnd:r,observe:d}){var p;return this.allowFlatten&&((p=this.animation.effect)==null||p.updateTiming({easing:"linear"})),this.animation.onfinish=null,s&&Dv()?(this.animation.timeline=s,l&&(this.animation.rangeStart=l),r&&(this.animation.rangeEnd=r),Pt):d(this)}}const Y0={anticipate:M0,backInOut:G0,circInOut:T0};function zv(n){return n in Y0}function Lv(n){typeof n.ease=="string"&&zv(n.ease)&&(n.ease=Y0[n.ease])}const wu=10;class Hv extends Z0{constructor(s){Lv(s),H0(s),super(s),s.startTime!==void 0&&s.autoplay!==!1&&(this.startTime=s.startTime),this.options=s}updateMotionValue(s){const{motionValue:l,onUpdate:r,onComplete:d,element:p,...g}=this.options;if(!l)return;if(s!==void 0){l.set(s);return}const b=new Br({...g,autoplay:!1}),x=Math.max(wu,gt.now()-this.startTime),m=la(0,wu,x-wu),f=b.sample(x).value,{name:_}=this.options;p&&_&&U0(p,_,f),l.setWithVelocity(b.sample(Math.max(0,x-m)).value,f,m),b.stop()}}const Cb=(n,s)=>s==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&($t.test(n)||n==="0")&&!n.startsWith("url("));function Ov(n){const s=n[0];if(n.length===1)return!0;for(let l=0;l<n.length;l++)if(n[l]!==s)return!0}function Bv(n,s,l,r){const d=n[0];if(d===null)return!1;if(s==="display"||s==="visibility")return!0;const p=n[n.length-1],g=Cb(d,s),b=Cb(p,s);return!g||!b?!1:Ov(n)||(l==="spring"||X0(l))&&r}function ld(n){n.duration=0,n.type="keyframes"}const Q0=new Set(["opacity","clipPath","filter","transform"]),Uv=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Pv(n){for(let s=0;s<n.length;s++)if(typeof n[s]=="string"&&Uv.test(n[s]))return!0;return!1}const Fv=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),Kv=f0(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Xv(n){var _;const{motionValue:s,name:l,repeatDelay:r,repeatType:d,damping:p,type:g,keyframes:b}=n;if(!(((_=s==null?void 0:s.owner)==null?void 0:_.current)instanceof HTMLElement))return!1;const{onUpdate:m,transformTemplate:f}=s.owner.getProps();return Kv()&&l&&(Q0.has(l)||Fv.has(l)&&Pv(b))&&(l!=="transform"||!f)&&!m&&!r&&d!=="mirror"&&p!==0&&g!=="inertia"}const Zv=40;class Yv extends Ld{constructor({autoplay:s=!0,delay:l=0,type:r="keyframes",repeat:d=0,repeatDelay:p=0,repeatType:g="loop",keyframes:b,name:x,motionValue:m,element:f,..._}){var v;super(),this.stop=()=>{var S,T;this._animation&&(this._animation.stop(),(S=this.stopTimeline)==null||S.call(this)),(T=this.keyframeResolver)==null||T.cancel()},this.createdAt=gt.now();const y={autoplay:s,delay:l,type:r,repeat:d,repeatDelay:p,repeatType:g,name:x,motionValue:m,element:f,..._},G=(f==null?void 0:f.KeyframeResolver)||Hd;this.keyframeResolver=new G(b,(S,T,N)=>this.onKeyframesResolved(S,T,y,!N),x,m,f),(v=this.keyframeResolver)==null||v.scheduleResolve()}onKeyframesResolved(s,l,r,d){var N,L;this.keyframeResolver=void 0;const{name:p,type:g,velocity:b,delay:x,isHandoff:m,onUpdate:f}=r;this.resolvedAt=gt.now();let _=!0;Bv(s,p,g,b)||(_=!1,(ln.instantAnimations||!x)&&(f==null||f(Qr(s,r,l))),s[0]=s[s.length-1],ld(r),r.repeat=0);const G={startTime:d?this.resolvedAt?this.resolvedAt-this.createdAt>Zv?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:l,...r,keyframes:s},v=_&&!m&&Xv(G),S=(L=(N=G.motionValue)==null?void 0:N.owner)==null?void 0:L.current;let T;if(v)try{T=new Hv({...G,element:S})}catch{T=new Br(G)}else T=new Br(G);T.finished.then(()=>{this.notifyFinished()}).catch(Pt),this.pendingTimeline&&(this.stopTimeline=T.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=T}get finished(){return this._animation?this.animation.finished:this._finished}then(s,l){return this.finished.finally(s).then(()=>{})}get animation(){var s;return this._animation||((s=this.keyframeResolver)==null||s.resume(),Ev()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(s){this.animation.time=s}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(s){this.animation.speed=s}get startTime(){return this.animation.startTime}attachTimeline(s){return this._animation?this.stopTimeline=this.animation.attachTimeline(s):this.pendingTimeline=s,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var s;this._animation&&this.animation.cancel(),(s=this.keyframeResolver)==null||s.cancel()}}function $0(n,s,l,r=0,d=1){const p=Array.from(n).sort((m,f)=>m.sortNodePosition(f)).indexOf(s),g=n.size,b=(g-1)*r;return typeof l=="function"?l(p,g):d===1?p*r:b-p*r}const Db=30,Qv=n=>!isNaN(parseFloat(n));class $v{constructor(s,l={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var p;const d=gt.now();if(this.updatedAt!==d&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((p=this.events.change)==null||p.notify(this.current),this.dependents))for(const g of this.dependents)g.dirty()},this.hasAnimated=!1,this.setCurrent(s),this.owner=l.owner}setCurrent(s){this.current=s,this.updatedAt=gt.now(),this.canTrackVelocity===null&&s!==void 0&&(this.canTrackVelocity=Qv(this.current))}setPrevFrameValue(s=this.current){this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt}onChange(s){return this.on("change",s)}on(s,l){this.events[s]||(this.events[s]=new Nd);const r=this.events[s].add(l);return s==="change"?()=>{r(),qe.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const s in this.events)this.events[s].clear()}attach(s,l){this.passiveEffect=s,this.stopPassiveEffect=l}set(s){this.passiveEffect?this.passiveEffect(s,this.updateAndNotify):this.updateAndNotify(s)}setWithVelocity(s,l,r){this.set(l),this.prev=void 0,this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt-r}jump(s,l=!0){this.updateAndNotify(s),this.prev=s,this.prevUpdatedAt=this.prevFrameValue=void 0,l&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var s;(s=this.events.change)==null||s.notify(this.current)}addDependent(s){this.dependents||(this.dependents=new Set),this.dependents.add(s)}removeDependent(s){this.dependents&&this.dependents.delete(s)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const s=gt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||s-this.updatedAt>Db)return 0;const l=Math.min(this.updatedAt-this.prevUpdatedAt,Db);return x0(parseFloat(this.current)-parseFloat(this.prevFrameValue),l)}start(s){return this.stop(),new Promise(l=>{this.hasAnimated=!0,this.animation=s(l),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var s,l;(s=this.dependents)==null||s.clear(),(l=this.events.destroy)==null||l.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Vs(n,s){return new $v(n,s)}function J0(n,s){if(n!=null&&n.inherit&&s){const{inherit:l,...r}=n;return{...s,...r}}return n}function Od(n,s){const l=(n==null?void 0:n[s])??(n==null?void 0:n.default)??n;return l!==n?J0(l,n):l}const Jv={type:"spring",stiffness:500,damping:25,restSpeed:10},Wv=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),eG={type:"keyframes",duration:.8},tG={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},aG=(n,{keyframes:s})=>s.length>2?eG:Rs.has(n)?n.startsWith("scale")?Wv(s[1]):Jv:tG,nG=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function sG(n){for(const s in n)if(!nG.has(s))return!0;return!1}const Bd=(n,s,l,r={},d,p)=>g=>{const b=Od(r,n)||{},x=b.delay||r.delay||0;let{elapsed:m=0}=r;m=m-Et(x);const f={keyframes:Array.isArray(l)?l:[null,l],ease:"easeOut",velocity:s.getVelocity(),...b,delay:-m,onUpdate:y=>{s.set(y),b.onUpdate&&b.onUpdate(y)},onComplete:()=>{g(),b.onComplete&&b.onComplete()},name:n,motionValue:s,element:p?void 0:d};sG(b)||Object.assign(f,aG(n,f)),f.duration&&(f.duration=Et(f.duration)),f.repeatDelay&&(f.repeatDelay=Et(f.repeatDelay)),f.from!==void 0&&(f.keyframes[0]=f.from);let _=!1;if((f.type===!1||f.duration===0&&!f.repeatDelay)&&(ld(f),f.delay===0&&(_=!0)),(ln.instantAnimations||ln.skipAnimations||d!=null&&d.shouldSkipAnimations||b.skipAnimations)&&(_=!0,ld(f),f.delay=0),f.allowFlatten=!b.type&&!b.ease,_&&!p&&s.get()!==void 0){const y=Qr(f.keyframes,b);if(y!==void 0){qe.update(()=>{f.onUpdate(y),f.onComplete()});return}}return b.isSync?new Br(f):new Yv(f)},iG=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function oG(n){const s=iG.exec(n);if(!s)return[,];const[,l,r,d]=s;return[`--${l??r}`,d]}function W0(n,s,l=1){const[r,d]=oG(n);if(!r)return;const p=window.getComputedStyle(s).getPropertyValue(r);if(p){const g=p.trim();return m0(g)?parseFloat(g):g}return Cd(d)?W0(d,s,l+1):d}function qb(n){const s=[{},{}];return n==null||n.values.forEach((l,r)=>{s[0][r]=l.get(),s[1][r]=l.getVelocity()}),s}function Ud(n,s,l,r){if(typeof s=="function"){const[d,p]=qb(r);s=s(l!==void 0?l:n.custom,d,p)}if(typeof s=="string"&&(s=n.variants&&n.variants[s]),typeof s=="function"){const[d,p]=qb(r);s=s(l!==void 0?l:n.custom,d,p)}return s}function qn(n,s,l){const r=n.getProps();return Ud(r,s,l!==void 0?l:r.custom,n)}const ex=new Set(["width","height","top","left","right","bottom",...qs]),cd=n=>Array.isArray(n);function rG(n,s,l){n.hasValue(s)?n.getValue(s).set(l):n.addValue(s,Vs(l))}function lG(n){return cd(n)?n[n.length-1]||0:n}function cG(n,s){const l=qn(n,s);let{transitionEnd:r={},transition:d={},...p}=l||{};p={...p,...r};for(const g in p){const b=lG(p[g]);rG(n,g,b)}}const ct=n=>!!(n&&n.getVelocity);function uG(n){return!!(ct(n)&&n.add)}function ud(n,s){const l=n.getValue("willChange");if(uG(l))return l.add(s);if(!l&&ln.WillChange){const r=new ln.WillChange("auto");n.addValue("willChange",r),r.add(s)}}function Pd(n){return n.replace(/([A-Z])/g,s=>`-${s.toLowerCase()}`)}const dG="framerAppearId",tx="data-"+Pd(dG);function ax(n){return n.props[tx]}function pG({protectedKeys:n,needsAnimating:s},l){const r=n.hasOwnProperty(l)&&s[l]!==!0;return s[l]=!1,r}function nx(n,s,{delay:l=0,transitionOverride:r,type:d}={}){let{transition:p,transitionEnd:g,...b}=s;const x=n.getDefaultTransition();p=p?J0(p,x):x;const m=p==null?void 0:p.reduceMotion,f=p==null?void 0:p.skipAnimations;r&&(p=r);const _=[],y=d&&n.animationState&&n.animationState.getState()[d],G=p==null?void 0:p.path;G&&G.animateVisualElement(n,b,p,l,_);for(const v in b){const S=n.getValue(v,n.latestValues[v]??null),T=b[v];if(T===void 0||y&&pG(y,v))continue;const N={delay:l,...Od(p||{},v)};f&&(N.skipAnimations=!0);const L=S.get();if(L!==void 0&&!S.isAnimating()&&!Array.isArray(T)&&T===L&&!N.velocity){qe.update(()=>S.set(T));continue}let E=!1;if(window.MotionHandoffAnimation){const J=ax(n);if(J){const R=window.MotionHandoffAnimation(J,v,qe);R!==null&&(N.startTime=R,E=!0)}}ud(n,v);const V=m??n.shouldReduceMotion;S.start(Bd(v,S,T,V&&ex.has(v)?{type:!1}:N,n,E));const K=S.animation;K&&_.push(K)}if(g){const v=()=>qe.update(()=>{g&&cG(n,g)});_.length?Promise.all(_).then(v):v()}return _}function dd(n,s,l={}){var x;const r=qn(n,s,l.type==="exit"?(x=n.presenceContext)==null?void 0:x.custom:void 0);let{transition:d=n.getDefaultTransition()||{}}=r||{};l.transitionOverride&&(d=l.transitionOverride);const p=r?()=>Promise.all(nx(n,r,l)):()=>Promise.resolve(),g=n.variantChildren&&n.variantChildren.size?(m=0)=>{const{delayChildren:f=0,staggerChildren:_,staggerDirection:y}=d;return gG(n,s,m,f,_,y,l)}:()=>Promise.resolve(),{when:b}=d;if(b){const[m,f]=b==="beforeChildren"?[p,g]:[g,p];return m().then(()=>f())}else return Promise.all([p(),g(l.delay)])}function gG(n,s,l=0,r=0,d=0,p=1,g){const b=[];for(const x of n.variantChildren)x.notify("AnimationStart",s),b.push(dd(x,s,{...g,delay:l+(typeof r=="function"?0:r)+$0(n.variantChildren,x,r,d,p)}).then(()=>x.notify("AnimationComplete",s)));return Promise.all(b)}function mG(n,s,l={}){n.notify("AnimationStart",s);let r;if(Array.isArray(s)){const d=s.map(p=>dd(n,p,l));r=Promise.all(d)}else if(typeof s=="string")r=dd(n,s,l);else{const d=typeof s=="function"?qn(n,s,l.custom):s;r=Promise.all(nx(n,d,l))}return r.then(()=>{n.notify("AnimationComplete",s)})}const hG={test:n=>n==="auto",parse:n=>n},sx=n=>s=>s.test(n),ix=[Ds,le,ra,Sa,Oy,Hy,hG],Rb=n=>ix.find(sx(n));function bG(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||b0(n):!0}const fG=new Set(["brightness","contrast","saturate","opacity"]);function xG(n){const[s,l]=n.slice(0,-1).split("(");if(s==="drop-shadow")return n;const[r]=l.match(Dd)||[];if(!r)return n;const d=l.replace(r,"");let p=fG.has(s)?1:0;return r!==l&&(p*=100),s+"("+p+d+")"}const _G=/\b([a-z-]*)\(.*?\)/gu,pd={...$t,getAnimatableNone:n=>{const s=n.match(_G);return s?s.map(xG).join(" "):n}},gd={...$t,getAnimatableNone:n=>{const s=$t.parse(n);return $t.createTransformer(n)(s.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},zb={...Ds,transform:Math.round},kG={rotate:Sa,pathRotation:Sa,rotateX:Sa,rotateY:Sa,rotateZ:Sa,scale:xr,scaleX:xr,scaleY:xr,scaleZ:xr,skew:Sa,skewX:Sa,skewY:Sa,distance:le,translateX:le,translateY:le,translateZ:le,x:le,y:le,z:le,perspective:le,transformPerspective:le,opacity:Fi,originX:Mb,originY:Mb,originZ:le},Ur={borderWidth:le,borderTopWidth:le,borderRightWidth:le,borderBottomWidth:le,borderLeftWidth:le,borderRadius:le,borderTopLeftRadius:le,borderTopRightRadius:le,borderBottomRightRadius:le,borderBottomLeftRadius:le,width:le,maxWidth:le,height:le,maxHeight:le,top:le,right:le,bottom:le,left:le,inset:le,insetBlock:le,insetBlockStart:le,insetBlockEnd:le,insetInline:le,insetInlineStart:le,insetInlineEnd:le,padding:le,paddingTop:le,paddingRight:le,paddingBottom:le,paddingLeft:le,paddingBlock:le,paddingBlockStart:le,paddingBlockEnd:le,paddingInline:le,paddingInlineStart:le,paddingInlineEnd:le,margin:le,marginTop:le,marginRight:le,marginBottom:le,marginLeft:le,marginBlock:le,marginBlockStart:le,marginBlockEnd:le,marginInline:le,marginInlineStart:le,marginInlineEnd:le,fontSize:le,backgroundPositionX:le,backgroundPositionY:le,...kG,zIndex:zb,fillOpacity:Fi,strokeOpacity:Fi,numOctaves:zb},yG={...Ur,color:Ye,backgroundColor:Ye,outlineColor:Ye,fill:Ye,stroke:Ye,borderColor:Ye,borderTopColor:Ye,borderRightColor:Ye,borderBottomColor:Ye,borderLeftColor:Ye,filter:pd,WebkitFilter:pd,mask:gd,WebkitMask:gd},ox=n=>yG[n],vG=new Set([pd,gd]);function rx(n,s){let l=ox(n);return vG.has(l)||(l=$t),l.getAnimatableNone?l.getAnimatableNone(s):void 0}const GG=new Set(["auto","none","0"]);function MG(n,s,l){let r=0,d;for(;r<n.length&&!d;){const p=n[r];typeof p=="string"&&!GG.has(p)&&Es(p).values.length&&(d=n[r]),r++}if(d&&l)for(const p of s)n[p]=rx(l,d)}class AG extends Hd{constructor(s,l,r,d,p){super(s,l,r,d,p,!0)}readKeyframes(){const{unresolvedKeyframes:s,element:l,name:r}=this;if(!l||!l.current)return;super.readKeyframes();for(let f=0;f<s.length;f++){let _=s[f];if(typeof _=="string"&&(_=_.trim(),Cd(_))){const y=W0(_,l.current);y!==void 0&&(s[f]=y),f===s.length-1&&(this.finalKeyframe=_)}}if(this.resolveNoneKeyframes(),!ex.has(r)||s.length!==2)return;const[d,p]=s,g=Rb(d),b=Rb(p),x=Gb(d),m=Gb(p);if(x!==m&&sn[r]){this.needsMeasurement=!0;return}if(g!==b)if(Eb(g)&&Eb(b))for(let f=0;f<s.length;f++){const _=s[f];typeof _=="string"&&(s[f]=parseFloat(_))}else sn[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:s,name:l}=this,r=[];for(let d=0;d<s.length;d++)(s[d]===null||bG(s[d]))&&r.push(d);r.length&&MG(s,r,l)}measureInitialState(){const{element:s,unresolvedKeyframes:l,name:r}=this;if(!s||!s.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=sn[r](s.measureViewportBox(),window.getComputedStyle(s.current)),l[0]=this.measuredOrigin;const d=l[l.length-1];d!==void 0&&s.getValue(r,d).jump(d,!1)}measureEndState(){var b;const{element:s,name:l,unresolvedKeyframes:r}=this;if(!s||!s.current)return;const d=s.getValue(l);d&&d.jump(this.measuredOrigin,!1);const p=r.length-1,g=r[p];r[p]=sn[l](s.measureViewportBox(),window.getComputedStyle(s.current)),g!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=g),(b=this.removedTransforms)!=null&&b.length&&this.removedTransforms.forEach(([x,m])=>{s.getValue(x).set(m)}),this.resolveNoneKeyframes()}}function lx(n,s,l){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let r=document;const d=(l==null?void 0:l[n])??r.querySelectorAll(n);return d?Array.from(d):[]}return Array.from(n).filter(r=>r!=null)}const md=(n,s)=>s&&typeof n=="number"?s.transform(n):n;function jr(n){return h0(n)&&"offsetHeight"in n&&!("ownerSVGElement"in n)}const{schedule:Fd}=I0(queueMicrotask,!1),Yt={x:!1,y:!1};function cx(){return Yt.x||Yt.y}function TG(n){return n==="x"||n==="y"?Yt[n]?null:(Yt[n]=!0,()=>{Yt[n]=!1}):Yt.x||Yt.y?null:(Yt.x=Yt.y=!0,()=>{Yt.x=Yt.y=!1})}function ux(n,s){const l=lx(n),r=new AbortController,d={passive:!0,...s,signal:r.signal};return[l,d,()=>r.abort()]}function jG(n){return!(n.pointerType==="touch"||cx())}function SG(n,s,l={}){const[r,d,p]=ux(n,l);return r.forEach(g=>{let b=!1,x=!1,m;const f=()=>{g.removeEventListener("pointerleave",v)},_=T=>{m&&(m(T),m=void 0),f()},y=T=>{b=!1,window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",y),x&&(x=!1,_(T))},G=()=>{b=!0,window.addEventListener("pointerup",y,d),window.addEventListener("pointercancel",y,d)},v=T=>{if(T.pointerType!=="touch"){if(b){x=!0;return}_(T)}},S=T=>{if(!jG(T))return;x=!1;const N=s(g,T);typeof N=="function"&&(m=N,g.addEventListener("pointerleave",v,d))};g.addEventListener("pointerenter",S,d),g.addEventListener("pointerdown",G,d)}),p}const dx=(n,s)=>s?n===s?!0:dx(n,s.parentElement):!1,Kd=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,IG=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function wG(n){return IG.has(n.tagName)||n.isContentEditable===!0}const NG=new Set(["INPUT","SELECT","TEXTAREA"]);function EG(n){return NG.has(n.tagName)||n.isContentEditable===!0}const Sr=new WeakSet;function Lb(n){return s=>{s.key==="Enter"&&n(s)}}function Nu(n,s){n.dispatchEvent(new PointerEvent("pointer"+s,{isPrimary:!0,bubbles:!0}))}const VG=(n,s)=>{const l=n.currentTarget;if(!l)return;const r=Lb(()=>{if(Sr.has(l))return;Nu(l,"down");const d=Lb(()=>{Nu(l,"up")}),p=()=>Nu(l,"cancel");l.addEventListener("keyup",d,s),l.addEventListener("blur",p,s)});l.addEventListener("keydown",r,s),l.addEventListener("blur",()=>l.removeEventListener("keydown",r),s)};function Hb(n){return Kd(n)&&!cx()}const Ob=new WeakSet;function CG(n,s,l={}){const[r,d,p]=ux(n,l),g=b=>{const x=b.currentTarget;if(!Hb(b)||Ob.has(b))return;Sr.add(x),l.stopPropagation&&Ob.add(b);const m=s(x,b),f=(G,v)=>{window.removeEventListener("pointerup",_),window.removeEventListener("pointercancel",y),Sr.has(x)&&Sr.delete(x),Hb(G)&&typeof m=="function"&&m(G,{success:v})},_=G=>{f(G,x===window||x===document||l.useGlobalTarget||dx(x,G.target))},y=G=>{f(G,!1)};window.addEventListener("pointerup",_,d),window.addEventListener("pointercancel",y,d)};return r.forEach(b=>{(l.useGlobalTarget?window:b).addEventListener("pointerdown",g,d),jr(b)&&(b.addEventListener("focus",m=>VG(m,d)),!wG(b)&&!b.hasAttribute("tabindex")&&(b.tabIndex=0))}),p}function Xd(n){return h0(n)&&"ownerSVGElement"in n}const Ir=new WeakMap;let an;const px=(n,s,l)=>(r,d)=>d&&d[0]?d[0][n+"Size"]:Xd(r)&&"getBBox"in r?r.getBBox()[s]:r[l],DG=px("inline","width","offsetWidth"),qG=px("block","height","offsetHeight");function RG({target:n,borderBoxSize:s}){var l;(l=Ir.get(n))==null||l.forEach(r=>{r(n,{get width(){return DG(n,s)},get height(){return qG(n,s)}})})}function zG(n){n.forEach(RG)}function LG(){typeof ResizeObserver>"u"||(an=new ResizeObserver(zG))}function HG(n,s){an||LG();const l=lx(n);return l.forEach(r=>{let d=Ir.get(r);d||(d=new Set,Ir.set(r,d)),d.add(s),an==null||an.observe(r)}),()=>{l.forEach(r=>{const d=Ir.get(r);d==null||d.delete(s),d!=null&&d.size||an==null||an.unobserve(r)})}}const wr=new Set;let js;function OG(){js=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};wr.forEach(s=>s(n))},window.addEventListener("resize",js)}function BG(n){return wr.add(n),js||OG(),()=>{wr.delete(n),!wr.size&&typeof js=="function"&&(window.removeEventListener("resize",js),js=void 0)}}function Bb(n,s){return typeof n=="function"?BG(n):HG(n,s)}function UG(n){return Xd(n)&&n.tagName==="svg"}const PG=[...ix,Ye,$t],FG=n=>PG.find(sx(n)),Ub=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ss=()=>({x:Ub(),y:Ub()}),Pb=()=>({min:0,max:0}),Je=()=>({x:Pb(),y:Pb()}),KG=new WeakMap;function $r(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Ki(n){return typeof n=="string"||Array.isArray(n)}const Zd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Yd=["initial",...Zd];function Jr(n){return $r(n.animate)||Yd.some(s=>Ki(n[s]))}function gx(n){return!!(Jr(n)||n.variants)}function XG(n,s,l){for(const r in s){const d=s[r],p=l[r];if(ct(d))n.addValue(r,d);else if(ct(p))n.addValue(r,Vs(d,{owner:n}));else if(p!==d)if(n.hasValue(r)){const g=n.getValue(r);g.liveStyle===!0?g.jump(d):g.hasAnimated||g.set(d)}else{const g=n.getStaticValue(r);n.addValue(r,Vs(g!==void 0?g:d,{owner:n}))}}for(const r in l)s[r]===void 0&&n.removeValue(r);return s}const hd={current:null},mx={current:!1},ZG=typeof window<"u";function YG(){if(mx.current=!0,!!ZG)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),s=()=>hd.current=n.matches;n.addEventListener("change",s),s()}else hd.current=!1}const Fb=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Pr={};function hx(n){Pr=n}function QG(){return Pr}class $G{scrapeMotionValuesFromProps(s,l,r){return{}}constructor({parent:s,props:l,presenceContext:r,reducedMotionConfig:d,skipAnimations:p,blockInitialAnimation:g,visualState:b},x={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Hd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const G=gt.now();this.renderScheduledAt<G&&(this.renderScheduledAt=G,qe.render(this.render,!1,!0))};const{latestValues:m,renderState:f}=b;this.latestValues=m,this.baseTarget={...m},this.initialValues=l.initial?{...m}:{},this.renderState=f,this.parent=s,this.props=l,this.presenceContext=r,this.depth=s?s.depth+1:0,this.reducedMotionConfig=d,this.skipAnimationsConfig=p,this.options=x,this.blockInitialAnimation=!!g,this.isControllingVariants=Jr(l),this.isVariantNode=gx(l),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(s&&s.current);const{willChange:_,...y}=this.scrapeMotionValuesFromProps(l,{},this);for(const G in y){const v=y[G];m[G]!==void 0&&ct(v)&&v.set(m[G])}}mount(s){var l,r;if(this.hasBeenMounted)for(const d in this.initialValues)(l=this.values.get(d))==null||l.jump(this.initialValues[d]),this.latestValues[d]=this.initialValues[d];this.current=s,KG.set(s,this),this.projection&&!this.projection.instance&&this.projection.mount(s),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((d,p)=>this.bindToMotionValue(p,d)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(mx.current||YG(),this.shouldReduceMotion=hd.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var s;this.projection&&this.projection.unmount(),cn(this.notifyUpdate),cn(this.render),this.valueSubscriptions.forEach(l=>l()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(s=this.parent)==null||s.removeChild(this);for(const l in this.events)this.events[l].clear();for(const l in this.features){const r=this.features[l];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(s){this.children.add(s),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(s)}removeChild(s){this.children.delete(s),this.enteringChildren&&this.enteringChildren.delete(s)}bindToMotionValue(s,l){if(this.valueSubscriptions.has(s)&&this.valueSubscriptions.get(s)(),l.accelerate&&Q0.has(s)&&this.current instanceof HTMLElement){const{factory:g,keyframes:b,times:x,ease:m,duration:f}=l.accelerate,_=new Z0({element:this.current,name:s,keyframes:b,times:x,ease:m,duration:Et(f)}),y=g(_);this.valueSubscriptions.set(s,()=>{y(),_.cancel()});return}const r=Rs.has(s);r&&this.onBindTransform&&this.onBindTransform();const d=l.on("change",g=>{this.latestValues[s]=g,this.props.onUpdate&&qe.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let p;typeof window<"u"&&window.MotionCheckAppearSync&&(p=window.MotionCheckAppearSync(this,s,l)),this.valueSubscriptions.set(s,()=>{d(),p&&p()})}sortNodePosition(s){return!this.current||!this.sortInstanceNodePosition||this.type!==s.type?0:this.sortInstanceNodePosition(this.current,s.current)}updateFeatures(){let s="animation";for(s in Pr){const l=Pr[s];if(!l)continue;const{isEnabled:r,Feature:d}=l;if(!this.features[s]&&d&&r(this.props)&&(this.features[s]=new d(this)),this.features[s]){const p=this.features[s];p.isMounted?p.update():(p.mount(),p.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Je()}getStaticValue(s){return this.latestValues[s]}setStaticValue(s,l){this.latestValues[s]=l}update(s,l){(s.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=s,this.prevPresenceContext=this.presenceContext,this.presenceContext=l;for(let r=0;r<Fb.length;r++){const d=Fb[r];this.propEventSubscriptions[d]&&(this.propEventSubscriptions[d](),delete this.propEventSubscriptions[d]);const p="on"+d,g=s[p];g&&(this.propEventSubscriptions[d]=this.on(d,g))}this.prevMotionValues=XG(this,this.scrapeMotionValuesFromProps(s,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(s){return this.props.variants?this.props.variants[s]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(s){const l=this.getClosestVariantNode();if(l)return l.variantChildren&&l.variantChildren.add(s),()=>l.variantChildren.delete(s)}addValue(s,l){const r=this.values.get(s);l!==r&&(r&&this.removeValue(s),this.bindToMotionValue(s,l),this.values.set(s,l),this.latestValues[s]=l.get())}removeValue(s){this.values.delete(s);const l=this.valueSubscriptions.get(s);l&&(l(),this.valueSubscriptions.delete(s)),delete this.latestValues[s],this.removeValueFromRenderState(s,this.renderState)}hasValue(s){return this.values.has(s)}getValue(s,l){if(this.props.values&&this.props.values[s])return this.props.values[s];let r=this.values.get(s);return r===void 0&&l!==void 0&&(r=Vs(l===null?void 0:l,{owner:this}),this.addValue(s,r)),r}readValue(s,l){let r=this.latestValues[s]!==void 0||!this.current?this.latestValues[s]:this.getBaseTargetFromProps(this.props,s)??this.readValueFromInstance(this.current,s,this.options);return r!=null&&(typeof r=="string"&&(m0(r)||b0(r))?r=parseFloat(r):!FG(r)&&$t.test(l)&&(r=rx(s,l)),this.setBaseTarget(s,ct(r)?r.get():r)),ct(r)?r.get():r}setBaseTarget(s,l){this.baseTarget[s]=l}getBaseTarget(s){var p;const{initial:l}=this.props;let r;if(typeof l=="string"||typeof l=="object"){const g=Ud(this.props,l,(p=this.presenceContext)==null?void 0:p.custom);g&&(r=g[s])}if(l&&r!==void 0)return r;const d=this.getBaseTargetFromProps(this.props,s);return d!==void 0&&!ct(d)?d:this.initialValues[s]!==void 0&&r===void 0?void 0:this.baseTarget[s]}on(s,l){return this.events[s]||(this.events[s]=new Nd),this.events[s].add(l)}notify(s,...l){this.events[s]&&this.events[s].notify(...l)}scheduleRenderMicrotask(){Fd.render(this.render)}}class bx extends $G{constructor(){super(...arguments),this.KeyframeResolver=AG}sortInstanceNodePosition(s,l){return s.compareDocumentPosition(l)&2?1:-1}getBaseTargetFromProps(s,l){const r=s.style;return r?r[l]:void 0}removeValueFromRenderState(s,{vars:l,style:r}){delete l[s],delete r[s]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:s}=this.props;ct(s)&&(this.childSubscription=s.on("change",l=>{this.current&&(this.current.textContent=`${l}`)}))}}class un{constructor(s){this.isMounted=!1,this.node=s}update(){}}function fx({top:n,left:s,right:l,bottom:r}){return{x:{min:s,max:l},y:{min:n,max:r}}}function JG({x:n,y:s}){return{top:s.min,right:n.max,bottom:s.max,left:n.min}}function WG(n,s){if(!s)return n;const l=s({x:n.left,y:n.top}),r=s({x:n.right,y:n.bottom});return{top:l.y,left:l.x,bottom:r.y,right:r.x}}function Eu(n){return n===void 0||n===1}function bd({scale:n,scaleX:s,scaleY:l}){return!Eu(n)||!Eu(s)||!Eu(l)}function En(n){return bd(n)||xx(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function xx(n){return Kb(n.x)||Kb(n.y)}function Kb(n){return n&&n!=="0%"}function Fr(n,s,l){const r=n-l,d=s*r;return l+d}function Xb(n,s,l,r,d){return d!==void 0&&(n=Fr(n,d,r)),Fr(n,l,r)+s}function fd(n,s=0,l=1,r,d){n.min=Xb(n.min,s,l,r,d),n.max=Xb(n.max,s,l,r,d)}function _x(n,{x:s,y:l}){fd(n.x,s.translate,s.scale,s.originPoint),fd(n.y,l.translate,l.scale,l.originPoint)}const Zb=.999999999999,Yb=1.0000000000001;function eM(n,s,l,r=!1){var b;const d=l.length;if(!d)return;s.x=s.y=1;let p,g;for(let x=0;x<d;x++){p=l[x],g=p.projectionDelta;const{visualElement:m}=p.options;m&&m.props.style&&m.props.style.display==="contents"||(r&&p.options.layoutScroll&&p.scroll&&p!==p.root&&(sa(n.x,-p.scroll.offset.x),sa(n.y,-p.scroll.offset.y)),g&&(s.x*=g.x.scale,s.y*=g.y.scale,_x(n,g)),r&&En(p.latestValues)&&Nr(n,p.latestValues,(b=p.layout)==null?void 0:b.layoutBox))}s.x<Yb&&s.x>Zb&&(s.x=1),s.y<Yb&&s.y>Zb&&(s.y=1)}function sa(n,s){n.min+=s,n.max+=s}function Qb(n,s,l,r,d=.5){const p=De(n.min,n.max,d);fd(n,s,l,p,r)}function $b(n,s){return typeof n=="string"?parseFloat(n)/100*(s.max-s.min):n}function Nr(n,s,l){const r=l??n;Qb(n.x,$b(s.x,r.x),s.scaleX,s.scale,s.originX),Qb(n.y,$b(s.y,r.y),s.scaleY,s.scale,s.originY)}function kx(n,s){return fx(WG(n.getBoundingClientRect(),s))}function tM(n,s,l){const r=kx(n,l),{scroll:d}=s;return d&&(sa(r.x,d.offset.x),sa(r.y,d.offset.y)),r}const aM={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},nM=qs.length;function sM(n,s,l){let r="",d=!0;for(let g=0;g<nM;g++){const b=qs[g],x=n[b];if(x===void 0)continue;let m=!0;if(typeof x=="number")m=x===(b.startsWith("scale")?1:0);else{const f=parseFloat(x);m=b.startsWith("scale")?f===1:f===0}if(!m||l){const f=md(x,Ur[b]);if(!m){d=!1;const _=aM[b]||b;r+=`${_}(${f}) `}l&&(s[b]=f)}}const p=n.pathRotation;return p&&(d=!1,r+=`rotate(${md(p,Ur.pathRotation)}) `),r=r.trim(),l?r=l(s,d?"":r):d&&(r="none"),r}function Qd(n,s,l){const{style:r,vars:d,transformOrigin:p}=n;let g=!1,b=!1;for(const x in s){const m=s[x];if(Rs.has(x)){g=!0;continue}else if(N0(x)){d[x]=m;continue}else{const f=md(m,Ur[x]);x.startsWith("origin")?(b=!0,p[x]=f):r[x]=f}}if(s.transform||(g||l?r.transform=sM(s,n.transform,l):r.transform&&(r.transform="none")),b){const{originX:x="50%",originY:m="50%",originZ:f=0}=p;r.transformOrigin=`${x} ${m} ${f}`}}function yx(n,{style:s,vars:l},r,d){const p=n.style;let g;for(g in s)p[g]=s[g];d==null||d.applyProjectionStyles(p,r);for(g in l)p.setProperty(g,l[g])}function Jb(n,s){return s.max===s.min?0:n/(s.max-s.min)*100}const Vi={correct:(n,s)=>{if(!s.target)return n;if(typeof n=="string")if(le.test(n))n=parseFloat(n);else return n;const l=Jb(n,s.target.x),r=Jb(n,s.target.y);return`${l}% ${r}%`}},iM={correct:(n,{treeScale:s,projectionDelta:l})=>{const r=n,d=$t.parse(n);if(d.length>5)return r;const p=$t.createTransformer(n),g=typeof d[0]!="number"?1:0,b=l.x.scale*s.x,x=l.y.scale*s.y;d[0+g]/=b,d[1+g]/=x;const m=De(b,x,.5);return typeof d[2+g]=="number"&&(d[2+g]/=m),typeof d[3+g]=="number"&&(d[3+g]/=m),p(d)}},xd={borderRadius:{...Vi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Vi,borderTopRightRadius:Vi,borderBottomLeftRadius:Vi,borderBottomRightRadius:Vi,boxShadow:iM};function vx(n,{layout:s,layoutId:l}){return Rs.has(n)||n.startsWith("origin")||(s||l!==void 0)&&(!!xd[n]||n==="opacity")}function $d(n,s,l){var g;const r=n.style,d=s==null?void 0:s.style,p={};if(!r)return p;for(const b in r)(ct(r[b])||d&&ct(d[b])||vx(b,n)||((g=l==null?void 0:l.getValue(b))==null?void 0:g.liveStyle)!==void 0)&&(p[b]=r[b]);return p}function oM(n){return window.getComputedStyle(n)}class rM extends bx{constructor(){super(...arguments),this.type="html",this.renderInstance=yx}readValueFromInstance(s,l){var r;if(Rs.has(l))return(r=this.projection)!=null&&r.isProjecting?nd(l):jv(s,l);{const d=oM(s),p=(N0(l)?d.getPropertyValue(l):d[l])||0;return typeof p=="string"?p.trim():p}}measureInstanceViewportBox(s,{transformPagePoint:l}){return kx(s,l)}build(s,l,r){Qd(s,l,r.transformTemplate)}scrapeMotionValuesFromProps(s,l,r){return $d(s,l,r)}}const lM={offset:"stroke-dashoffset",array:"stroke-dasharray"},cM={offset:"strokeDashoffset",array:"strokeDasharray"};function uM(n,s,l=1,r=0,d=!0){n.pathLength=1;const p=d?lM:cM;n[p.offset]=`${-r}`,n[p.array]=`${s} ${l}`}const dM=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Gx(n,{attrX:s,attrY:l,attrScale:r,pathLength:d,pathSpacing:p=1,pathOffset:g=0,...b},x,m,f){if(Qd(n,b,m),x){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:_,style:y}=n;_.transform&&(y.transform=_.transform,delete _.transform),(y.transform||_.transformOrigin)&&(y.transformOrigin=_.transformOrigin??"50% 50%",delete _.transformOrigin),y.transform&&(y.transformBox=(f==null?void 0:f.transformBox)??"fill-box",delete _.transformBox);for(const G of dM)_[G]!==void 0&&(y[G]=_[G],delete _[G]);s!==void 0&&(_.x=s),l!==void 0&&(_.y=l),r!==void 0&&(_.scale=r),d!==void 0&&uM(_,d,p,g,!1)}const Mx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Ax=n=>typeof n=="string"&&n.toLowerCase()==="svg";function pM(n,s,l,r){yx(n,s,void 0,r);for(const d in s.attrs)n.setAttribute(Mx.has(d)?d:Pd(d),s.attrs[d])}function Tx(n,s,l){const r=$d(n,s,l);for(const d in n)if(ct(n[d])||ct(s[d])){const p=qs.indexOf(d)!==-1?"attr"+d.charAt(0).toUpperCase()+d.substring(1):d;r[p]=n[d]}return r}class gM extends bx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Je}getBaseTargetFromProps(s,l){return s[l]}readValueFromInstance(s,l){if(Rs.has(l)){const r=ox(l);return r&&r.default||0}return l=Mx.has(l)?l:Pd(l),s.getAttribute(l)}scrapeMotionValuesFromProps(s,l,r){return Tx(s,l,r)}build(s,l,r){Gx(s,l,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(s,l,r,d){pM(s,l,r,d)}mount(s){this.isSVGTag=Ax(s.tagName),super.mount(s)}}const mM=Yd.length;function jx(n){if(!n)return;if(!n.isControllingVariants){const l=n.parent?jx(n.parent)||{}:{};return n.props.initial!==void 0&&(l.initial=n.props.initial),l}const s={};for(let l=0;l<mM;l++){const r=Yd[l],d=n.props[r];(Ki(d)||d===!1)&&(s[r]=d)}return s}function Sx(n,s){if(!Array.isArray(s))return!1;const l=s.length;if(l!==n.length)return!1;for(let r=0;r<l;r++)if(s[r]!==n[r])return!1;return!0}const hM=[...Zd].reverse(),bM=Zd.length;function fM(n){return s=>Promise.all(s.map(({animation:l,options:r})=>mG(n,l,r)))}function xM(n){let s=fM(n),l=Wb(),r=!0,d=!1;const p=m=>(f,_)=>{var G;const y=qn(n,_,m==="exit"?(G=n.presenceContext)==null?void 0:G.custom:void 0);if(y){const{transition:v,transitionEnd:S,...T}=y;f={...f,...T,...S}}return f};function g(m){s=m(n)}function b(m){const{props:f}=n,_=jx(n.parent)||{},y=[],G=new Set;let v={},S=1/0;for(let N=0;N<bM;N++){const L=hM[N],E=l[L],V=f[L]!==void 0?f[L]:_[L],K=Ki(V),J=L===m?E.isActive:null;J===!1&&(S=N);let R=V===_[L]&&V!==f[L]&&K;if(R&&(r||d)&&n.manuallyAnimateOnMount&&(R=!1),E.protectedKeys={...v},!E.isActive&&J===null||!V&&!E.prevProp||$r(V)||typeof V=="boolean")continue;if(L==="exit"&&E.isActive&&J!==!0){E.prevResolvedValues&&(v={...v,...E.prevResolvedValues});continue}const H=_M(E.prevProp,V);let F=H||L===m&&E.isActive&&!R&&K||N>S&&K,B=!1;const Z=Array.isArray(V)?V:[V];let ae=Z.reduce(p(L),{});J===!1&&(ae={});const{prevResolvedValues:ee={}}=E,Q={...ee,...ae},ie=O=>{F=!0,G.has(O)&&(B=!0,G.delete(O)),E.needsAnimating[O]=!0;const ne=n.getValue(O);ne&&(ne.liveStyle=!1)};for(const O in Q){const ne=ae[O],se=ee[O];if(v.hasOwnProperty(O))continue;let A=!1;cd(ne)&&cd(se)?A=!Sx(ne,se)||H:A=ne!==se,A?ne!=null?ie(O):G.add(O):ne!==void 0&&G.has(O)?ie(O):E.protectedKeys[O]=!0}E.prevProp=V,E.prevResolvedValues=ae,E.isActive&&(v={...v,...ae}),(r||d)&&n.blockInitialAnimation&&(F=!1);const I=R&&H;F&&(!I||B)&&y.push(...Z.map(O=>{const ne={type:L};if(typeof O=="string"&&(r||d)&&!I&&n.manuallyAnimateOnMount&&n.parent){const{parent:se}=n,A=qn(se,O);if(se.enteringChildren&&A){const{delayChildren:P}=A.transition||{};ne.delay=$0(se.enteringChildren,n,P)}}return{animation:O,options:ne}}))}if(G.size){const N={};if(typeof f.initial!="boolean"){const L=qn(n,Array.isArray(f.initial)?f.initial[0]:f.initial);L&&L.transition&&(N.transition=L.transition)}G.forEach(L=>{const E=n.getBaseTarget(L),V=n.getValue(L);V&&(V.liveStyle=!0),N[L]=E??null}),y.push({animation:N})}let T=!!y.length;return r&&(f.initial===!1||f.initial===f.animate)&&!n.manuallyAnimateOnMount&&(T=!1),r=!1,d=!1,T?s(y):Promise.resolve()}function x(m,f){var y;if(l[m].isActive===f)return Promise.resolve();(y=n.variantChildren)==null||y.forEach(G=>{var v;return(v=G.animationState)==null?void 0:v.setActive(m,f)}),l[m].isActive=f;const _=b(m);for(const G in l)l[G].protectedKeys={};return _}return{animateChanges:b,setActive:x,setAnimateFunction:g,getState:()=>l,reset:()=>{l=Wb(),d=!0}}}function _M(n,s){return typeof s=="string"?s!==n:Array.isArray(s)?!Sx(s,n):!1}function wn(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Wb(){return{animate:wn(!0),whileInView:wn(),whileHover:wn(),whileTap:wn(),whileDrag:wn(),whileFocus:wn(),exit:wn()}}function _d(n,s){n.min=s.min,n.max=s.max}function Zt(n,s){_d(n.x,s.x),_d(n.y,s.y)}function ef(n,s){n.translate=s.translate,n.scale=s.scale,n.originPoint=s.originPoint,n.origin=s.origin}const Ix=1e-4,kM=1-Ix,yM=1+Ix,wx=.01,vM=0-wx,GM=0+wx;function mt(n){return n.max-n.min}function MM(n,s,l){return Math.abs(n-s)<=l}function tf(n,s,l,r=.5){n.origin=r,n.originPoint=De(s.min,s.max,n.origin),n.scale=mt(l)/mt(s),n.translate=De(l.min,l.max,n.origin)-n.originPoint,(n.scale>=kM&&n.scale<=yM||isNaN(n.scale))&&(n.scale=1),(n.translate>=vM&&n.translate<=GM||isNaN(n.translate))&&(n.translate=0)}function Li(n,s,l,r){tf(n.x,s.x,l.x,r?r.originX:void 0),tf(n.y,s.y,l.y,r?r.originY:void 0)}function af(n,s,l,r=0){const d=r?De(l.min,l.max,r):l.min;n.min=d+s.min,n.max=n.min+mt(s)}function AM(n,s,l,r){af(n.x,s.x,l.x,r==null?void 0:r.x),af(n.y,s.y,l.y,r==null?void 0:r.y)}function nf(n,s,l,r=0){const d=r?De(l.min,l.max,r):l.min;n.min=s.min-d,n.max=n.min+mt(s)}function Kr(n,s,l,r){nf(n.x,s.x,l.x,r==null?void 0:r.x),nf(n.y,s.y,l.y,r==null?void 0:r.y)}function sf(n,s,l,r,d){return n-=s,n=Fr(n,1/l,r),d!==void 0&&(n=Fr(n,1/d,r)),n}function TM(n,s=0,l=1,r=.5,d,p=n,g=n){if(ra.test(s)&&(s=parseFloat(s),s=De(g.min,g.max,s/100)-g.min),typeof s!="number")return;let b=De(p.min,p.max,r);n===p&&(b-=s),n.min=sf(n.min,s,l,b,d),n.max=sf(n.max,s,l,b,d)}function of(n,s,[l,r,d],p,g){TM(n,s[l],s[r],s[d],s.scale,p,g)}const jM=["x","scaleX","originX"],SM=["y","scaleY","originY"];function rf(n,s,l,r){of(n.x,s,jM,l?l.x:void 0,r?r.x:void 0),of(n.y,s,SM,l?l.y:void 0,r?r.y:void 0)}function lf(n){return n.translate===0&&n.scale===1}function Nx(n){return lf(n.x)&&lf(n.y)}function cf(n,s){return n.min===s.min&&n.max===s.max}function IM(n,s){return cf(n.x,s.x)&&cf(n.y,s.y)}function uf(n,s){return Math.round(n.min)===Math.round(s.min)&&Math.round(n.max)===Math.round(s.max)}function Ex(n,s){return uf(n.x,s.x)&&uf(n.y,s.y)}function df(n){return mt(n.x)/mt(n.y)}function pf(n,s){return n.translate===s.translate&&n.scale===s.scale&&n.originPoint===s.originPoint}function na(n){return[n("x"),n("y")]}function wM(n,s,l){let r="";const d=n.x.translate/s.x,p=n.y.translate/s.y,g=(l==null?void 0:l.z)||0;if((d||p||g)&&(r=`translate3d(${d}px, ${p}px, ${g}px) `),(s.x!==1||s.y!==1)&&(r+=`scale(${1/s.x}, ${1/s.y}) `),l){const{transformPerspective:m,rotate:f,pathRotation:_,rotateX:y,rotateY:G,skewX:v,skewY:S}=l;m&&(r=`perspective(${m}px) ${r}`),f&&(r+=`rotate(${f}deg) `),_&&(r+=`rotate(${_}deg) `),y&&(r+=`rotateX(${y}deg) `),G&&(r+=`rotateY(${G}deg) `),v&&(r+=`skewX(${v}deg) `),S&&(r+=`skewY(${S}deg) `)}const b=n.x.scale*s.x,x=n.y.scale*s.y;return(b!==1||x!==1)&&(r+=`scale(${b}, ${x})`),r||"none"}const Vx=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],NM=Vx.length,gf=n=>typeof n=="string"?parseFloat(n):n,mf=n=>typeof n=="number"||le.test(n);function EM(n,s,l,r,d,p){d?(n.opacity=De(0,l.opacity??1,VM(r)),n.opacityExit=De(s.opacity??1,0,CM(r))):p&&(n.opacity=De(s.opacity??1,l.opacity??1,r));for(let g=0;g<NM;g++){const b=Vx[g];let x=hf(s,b),m=hf(l,b);if(x===void 0&&m===void 0)continue;x||(x=0),m||(m=0),x===0||m===0||mf(x)===mf(m)?(n[b]=Math.max(De(gf(x),gf(m),r),0),(ra.test(m)||ra.test(x))&&(n[b]+="%")):n[b]=m}(s.rotate||l.rotate)&&(n.rotate=De(s.rotate||0,l.rotate||0,r))}function hf(n,s){return n[s]!==void 0?n[s]:n.borderRadius}const VM=Cx(0,.5,A0),CM=Cx(.5,.95,Pt);function Cx(n,s,l){return r=>r<n?0:r>s?1:l(Pi(n,s,r))}function DM(n,s,l){const r=ct(n)?n:Vs(n);return r.start(Bd("",r,s,l)),r.animation}function Xi(n,s,l,r={passive:!0}){return n.addEventListener(s,l,r),()=>n.removeEventListener(s,l)}const qM=(n,s)=>n.depth-s.depth;class RM{constructor(){this.children=[],this.isDirty=!1}add(s){Id(this.children,s),this.isDirty=!0}remove(s){zr(this.children,s),this.isDirty=!0}forEach(s){this.isDirty&&this.children.sort(qM),this.isDirty=!1,this.children.forEach(s)}}function zM(n,s){const l=gt.now(),r=({timestamp:d})=>{const p=d-l;p>=s&&(cn(r),n(p-s))};return qe.setup(r,!0),()=>cn(r)}function Er(n){return ct(n)?n.get():n}class LM{constructor(){this.members=[]}add(s){Id(this.members,s);for(let l=this.members.length-1;l>=0;l--){const r=this.members[l];if(r===s||r===this.lead||r===this.prevLead)continue;const d=r.instance;(!d||d.isConnected===!1)&&!r.snapshot&&(zr(this.members,r),r.unmount())}s.scheduleRender()}remove(s){if(zr(this.members,s),s===this.prevLead&&(this.prevLead=void 0),s===this.lead){const l=this.members[this.members.length-1];l&&this.promote(l)}}relegate(s){var l;for(let r=this.members.indexOf(s)-1;r>=0;r--){const d=this.members[r];if(d.isPresent!==!1&&((l=d.instance)==null?void 0:l.isConnected)!==!1)return this.promote(d),!0}return!1}promote(s,l){var d;const r=this.lead;if(s!==r&&(this.prevLead=r,this.lead=s,s.show(),r)){r.updateSnapshot(),s.scheduleRender();const{layoutDependency:p}=r.options,{layoutDependency:g}=s.options;(p===void 0||p!==g)&&(s.resumeFrom=r,l&&(r.preserveOpacity=!0),r.snapshot&&(s.snapshot=r.snapshot,s.snapshot.latestValues=r.animationValues||r.latestValues),(d=s.root)!=null&&d.isUpdating&&(s.isLayoutDirty=!0)),s.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(s=>{var l,r,d,p,g;(r=(l=s.options).onExitComplete)==null||r.call(l),(g=(d=s.resumingFrom)==null?void 0:(p=d.options).onExitComplete)==null||g.call(p)})}scheduleRender(){this.members.forEach(s=>s.instance&&s.scheduleRender(!1))}removeLeadSnapshot(){var s;(s=this.lead)!=null&&s.snapshot&&(this.lead.snapshot=void 0)}}const Vr={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Vu=["","X","Y","Z"],HM=1e3;let OM=0;function Cu(n,s,l,r){const{latestValues:d}=s;d[n]&&(l[n]=d[n],s.setStaticValue(n,0),r&&(r[n]=0))}function Dx(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:s}=n.options;if(!s)return;const l=ax(s);if(window.MotionHasOptimisedAnimation(l,"transform")){const{layout:d,layoutId:p}=n.options;window.MotionCancelOptimisedAnimation(l,"transform",qe,!(d||p))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&Dx(r)}function qx({attachResizeListener:n,defaultParent:s,measureScroll:l,checkIsScrollRoot:r,resetTransform:d}){return class{constructor(g={},b=s==null?void 0:s()){this.id=OM++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(PM),this.nodes.forEach(QM),this.nodes.forEach($M),this.nodes.forEach(FM)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=g,this.root=b?b.root||b:this,this.path=b?[...b.path,b]:[],this.parent=b,this.depth=b?b.depth+1:0;for(let x=0;x<this.path.length;x++)this.path[x].shouldResetTransform=!0;this.root===this&&(this.nodes=new RM)}addEventListener(g,b){return this.eventHandlers.has(g)||this.eventHandlers.set(g,new Nd),this.eventHandlers.get(g).add(b)}notifyListeners(g,...b){const x=this.eventHandlers.get(g);x&&x.notify(...b)}hasListeners(g){return this.eventHandlers.has(g)}mount(g){if(this.instance)return;this.isSVG=Xd(g)&&!UG(g),this.instance=g;const{layoutId:b,layout:x,visualElement:m}=this.options;if(m&&!m.current&&m.mount(g),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(x||b)&&(this.isLayoutDirty=!0),n){let f,_=0;const y=()=>this.root.updateBlockedByResize=!1;qe.read(()=>{_=window.innerWidth}),n(g,()=>{const G=window.innerWidth;G!==_&&(_=G,this.root.updateBlockedByResize=!0,f&&f(),f=zM(y,250),Vr.hasAnimatedSinceResize&&(Vr.hasAnimatedSinceResize=!1,this.nodes.forEach(xf)))})}b&&this.root.registerSharedNode(b,this),this.options.animate!==!1&&m&&(b||x)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:_,hasRelativeLayoutChanged:y,layout:G})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||m.getDefaultTransition()||a5,{onLayoutAnimationStart:S,onLayoutAnimationComplete:T}=m.getProps(),N=!this.targetLayout||!Ex(this.targetLayout,G),L=!_&&y;if(this.options.layoutRoot||this.resumeFrom||L||_&&(N||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const E={...Od(v,"layout"),onPlay:S,onComplete:T};(m.shouldReduceMotion||this.options.layoutRoot)&&(E.delay=0,E.type=!1),this.startAnimation(E),this.setAnimationOrigin(f,L,E.path)}else _||xf(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=G})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const g=this.getStack();g&&g.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),cn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(JM),this.animationId++)}getTransformTemplate(){const{visualElement:g}=this.options;return g&&g.getProps().transformTemplate}willUpdate(g=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Dx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const _=this.path[f];_.shouldResetTransform=!0,(typeof _.latestValues.x=="string"||typeof _.latestValues.y=="string")&&(_.isLayoutDirty=!0),_.updateScroll("snapshot"),_.options.layoutRoot&&_.willUpdate(!1)}const{layoutId:b,layout:x}=this.options;if(b===void 0&&!x)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),g&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const x=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),x&&this.nodes.forEach(XM),this.nodes.forEach(bf);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(ff);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(ZM),this.nodes.forEach(YM),this.nodes.forEach(BM),this.nodes.forEach(UM)):this.nodes.forEach(ff),this.clearAllSnapshots();const b=gt.now();lt.delta=la(0,1e3/60,b-lt.timestamp),lt.timestamp=b,lt.isProcessing=!0,Au.update.process(lt),Au.preRender.process(lt),Au.render.process(lt),lt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Fd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(KM),this.sharedNodes.forEach(WM)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,qe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){qe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!mt(this.snapshot.measuredBox.x)&&!mt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let x=0;x<this.path.length;x++)this.path[x].updateScroll();const g=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Je()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:b}=this.options;b&&b.notify("LayoutMeasure",this.layout.layoutBox,g?g.layoutBox:void 0)}updateScroll(g="measure"){let b=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===g&&(b=!1),b&&this.instance){const x=r(this.instance);this.scroll={animationId:this.root.animationId,phase:g,isRoot:x,offset:l(this.instance),wasRoot:this.scroll?this.scroll.isRoot:x}}}resetTransform(){if(!d)return;const g=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,b=this.projectionDelta&&!Nx(this.projectionDelta),x=this.getTransformTemplate(),m=x?x(this.latestValues,""):void 0,f=m!==this.prevTransformTemplateValue;g&&this.instance&&(b||En(this.latestValues)||f)&&(d(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(g=!0){const b=this.measurePageBox();let x=this.removeElementScroll(b);return g&&(x=this.removeTransform(x)),n5(x),{animationId:this.root.animationId,measuredBox:b,layoutBox:x,latestValues:{},source:this.id}}measurePageBox(){var m;const{visualElement:g}=this.options;if(!g)return Je();const b=g.measureViewportBox();if(!(((m=this.scroll)==null?void 0:m.wasRoot)||this.path.some(s5))){const{scroll:f}=this.root;f&&(sa(b.x,f.offset.x),sa(b.y,f.offset.y))}return b}removeElementScroll(g){var x;const b=Je();if(Zt(b,g),(x=this.scroll)!=null&&x.wasRoot)return b;for(let m=0;m<this.path.length;m++){const f=this.path[m],{scroll:_,options:y}=f;f!==this.root&&_&&y.layoutScroll&&(_.wasRoot&&Zt(b,g),sa(b.x,_.offset.x),sa(b.y,_.offset.y))}return b}applyTransform(g,b=!1,x){var f,_;const m=x||Je();Zt(m,g);for(let y=0;y<this.path.length;y++){const G=this.path[y];!b&&G.options.layoutScroll&&G.scroll&&G!==G.root&&(sa(m.x,-G.scroll.offset.x),sa(m.y,-G.scroll.offset.y)),En(G.latestValues)&&Nr(m,G.latestValues,(f=G.layout)==null?void 0:f.layoutBox)}return En(this.latestValues)&&Nr(m,this.latestValues,(_=this.layout)==null?void 0:_.layoutBox),m}removeTransform(g){var x;const b=Je();Zt(b,g);for(let m=0;m<this.path.length;m++){const f=this.path[m];if(!En(f.latestValues))continue;let _;f.instance&&(bd(f.latestValues)&&f.updateSnapshot(),_=Je(),Zt(_,f.measurePageBox())),rf(b,f.latestValues,(x=f.snapshot)==null?void 0:x.layoutBox,_)}return En(this.latestValues)&&rf(b,this.latestValues),b}setTargetDelta(g){this.targetDelta=g,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(g){this.options={...this.options,...g,crossfade:g.crossfade!==void 0?g.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==lt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(g=!1){var G;const b=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=b.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=b.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=b.isSharedProjectionDirty);const x=!!this.resumingFrom||this!==b;if(!(g||x&&this.isSharedProjectionDirty||this.isProjectionDirty||(G=this.parent)!=null&&G.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:_}=this.options;if(!this.layout||!(f||_))return;this.resolvedRelativeTargetAt=lt.timestamp;const y=this.getClosestProjectingParent();y&&this.linkedParentVersion!==y.layoutVersion&&!y.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&y&&y.layout?this.createRelativeTarget(y,this.layout.layoutBox,y.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Je(),this.targetWithTransforms=Je()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),AM(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Zt(this.target,this.layout.layoutBox),_x(this.target,this.targetDelta)):Zt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?this.createRelativeTarget(y,this.target,y.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||bd(this.parent.latestValues)||xx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(g,b,x){this.relativeParent=g,this.linkedParentVersion=g.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Je(),this.relativeTargetOrigin=Je(),Kr(this.relativeTargetOrigin,b,x,this.options.layoutAnchor||void 0),Zt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var v;const g=this.getLead(),b=!!this.resumingFrom||this!==g;let x=!0;if((this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty)&&(x=!1),b&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(x=!1),this.resolvedRelativeTargetAt===lt.timestamp&&(x=!1),x)return;const{layout:m,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||f))return;Zt(this.layoutCorrected,this.layout.layoutBox);const _=this.treeScale.x,y=this.treeScale.y;eM(this.layoutCorrected,this.treeScale,this.path,b),g.layout&&!g.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(g.target=g.layout.layoutBox,g.targetWithTransforms=Je());const{target:G}=g;if(!G){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ef(this.prevProjectionDelta.x,this.projectionDelta.x),ef(this.prevProjectionDelta.y,this.projectionDelta.y)),Li(this.projectionDelta,this.layoutCorrected,G,this.latestValues),(this.treeScale.x!==_||this.treeScale.y!==y||!pf(this.projectionDelta.x,this.prevProjectionDelta.x)||!pf(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",G))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(g=!0){var b;if((b=this.options.visualElement)==null||b.scheduleRender(),g){const x=this.getStack();x&&x.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ss(),this.projectionDelta=Ss(),this.projectionDeltaWithTransform=Ss()}setAnimationOrigin(g,b=!1,x){const m=this.snapshot,f=m?m.latestValues:{},_={...this.latestValues},y=Ss();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!b;const G=Je(),v=m?m.source:void 0,S=this.layout?this.layout.source:void 0,T=v!==S,N=this.getStack(),L=!N||N.members.length<=1,E=!!(T&&!L&&this.options.crossfade===!0&&!this.path.some(t5));this.animationProgress=0;let V;const K=x==null?void 0:x.interpolateProjection(g);this.mixTargetDelta=J=>{const R=J/1e3,H=K==null?void 0:K(R);H?(y.x.translate=H.x,y.x.scale=De(g.x.scale,1,R),y.x.origin=g.x.origin,y.x.originPoint=g.x.originPoint,y.y.translate=H.y,y.y.scale=De(g.y.scale,1,R),y.y.origin=g.y.origin,y.y.originPoint=g.y.originPoint):(_f(y.x,g.x,R),_f(y.y,g.y,R)),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Kr(G,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),e5(this.relativeTarget,this.relativeTargetOrigin,G,R),V&&IM(this.relativeTarget,V)&&(this.isProjectionDirty=!1),V||(V=Je()),Zt(V,this.relativeTarget)),T&&(this.animationValues=_,EM(_,f,this.latestValues,R,E,L)),H&&H.rotate!==void 0&&(this.animationValues||(this.animationValues=_),this.animationValues.pathRotation=H.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=R},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(g){var b,x,m;this.notifyListeners("animationStart"),(b=this.currentAnimation)==null||b.stop(),(m=(x=this.resumingFrom)==null?void 0:x.currentAnimation)==null||m.stop(),this.pendingAnimation&&(cn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=qe.update(()=>{Vr.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Vs(0)),this.motionValue.jump(0,!1),this.currentAnimation=DM(this.motionValue,[0,1e3],{...g,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),g.onUpdate&&g.onUpdate(f)},onStop:()=>{},onComplete:()=>{g.onComplete&&g.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const g=this.getStack();g&&g.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(HM),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const g=this.getLead();let{targetWithTransforms:b,target:x,layout:m,latestValues:f}=g;if(!(!b||!x||!m)){if(this!==g&&this.layout&&m&&Rx(this.options.animationType,this.layout.layoutBox,m.layoutBox)){x=this.target||Je();const _=mt(this.layout.layoutBox.x);x.x.min=g.target.x.min,x.x.max=x.x.min+_;const y=mt(this.layout.layoutBox.y);x.y.min=g.target.y.min,x.y.max=x.y.min+y}Zt(b,x),Nr(b,f),Li(this.projectionDeltaWithTransform,this.layoutCorrected,b,f)}}registerSharedNode(g,b){this.sharedNodes.has(g)||this.sharedNodes.set(g,new LM),this.sharedNodes.get(g).add(b);const m=b.options.initialPromotionConfig;b.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(b):void 0})}isLead(){const g=this.getStack();return g?g.lead===this:!0}getLead(){var b;const{layoutId:g}=this.options;return g?((b=this.getStack())==null?void 0:b.lead)||this:this}getPrevLead(){var b;const{layoutId:g}=this.options;return g?(b=this.getStack())==null?void 0:b.prevLead:void 0}getStack(){const{layoutId:g}=this.options;if(g)return this.root.sharedNodes.get(g)}promote({needsReset:g,transition:b,preserveFollowOpacity:x}={}){const m=this.getStack();m&&m.promote(this,x),g&&(this.projectionDelta=void 0,this.needsReset=!0),b&&this.setOptions({transition:b})}relegate(){const g=this.getStack();return g?g.relegate(this):!1}resetSkewAndRotation(){const{visualElement:g}=this.options;if(!g)return;let b=!1;const{latestValues:x}=g;if((x.z||x.rotate||x.rotateX||x.rotateY||x.rotateZ||x.skewX||x.skewY)&&(b=!0),!b)return;const m={};x.z&&Cu("z",g,m,this.animationValues);for(let f=0;f<Vu.length;f++)Cu(`rotate${Vu[f]}`,g,m,this.animationValues),Cu(`skew${Vu[f]}`,g,m,this.animationValues);g.render();for(const f in m)g.setStaticValue(f,m[f]),this.animationValues&&(this.animationValues[f]=m[f]);g.scheduleRender()}applyProjectionStyles(g,b){if(!this.instance||this.isSVG)return;if(!this.isVisible){g.visibility="hidden";return}const x=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,g.visibility="",g.opacity="",g.pointerEvents=Er(b==null?void 0:b.pointerEvents)||"",g.transform=x?x(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(g.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,g.pointerEvents=Er(b==null?void 0:b.pointerEvents)||""),this.hasProjected&&!En(this.latestValues)&&(g.transform=x?x({},""):"none",this.hasProjected=!1);return}g.visibility="";const f=m.animationValues||m.latestValues;this.applyTransformsToTarget();let _=wM(this.projectionDeltaWithTransform,this.treeScale,f);x&&(_=x(f,_)),g.transform=_;const{x:y,y:G}=this.projectionDelta;g.transformOrigin=`${y.origin*100}% ${G.origin*100}% 0`,m.animationValues?g.opacity=m===this?f.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:g.opacity=m===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const v in xd){if(f[v]===void 0)continue;const{correct:S,applyTo:T,isCSSVariable:N}=xd[v],L=_==="none"?f[v]:S(f[v],m);if(T){const E=T.length;for(let V=0;V<E;V++)g[T[V]]=L}else N?this.options.visualElement.renderState.vars[v]=L:g[v]=L}this.options.layoutId&&(g.pointerEvents=m===this?Er(b==null?void 0:b.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(g=>{var b;return(b=g.currentAnimation)==null?void 0:b.stop()}),this.root.nodes.forEach(bf),this.root.sharedNodes.clear()}}}function BM(n){n.updateLayout()}function UM(n){var l;const s=((l=n.resumeFrom)==null?void 0:l.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&s&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:d}=n.layout,{animationType:p}=n.options,g=s.source!==n.layout.source;if(p==="size")na(_=>{const y=g?s.measuredBox[_]:s.layoutBox[_],G=mt(y);y.min=r[_].min,y.max=y.min+G});else if(p==="x"||p==="y"){const _=p==="x"?"y":"x";_d(g?s.measuredBox[_]:s.layoutBox[_],r[_])}else Rx(p,s.layoutBox,r)&&na(_=>{const y=g?s.measuredBox[_]:s.layoutBox[_],G=mt(r[_]);y.max=y.min+G,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[_].max=n.relativeTarget[_].min+G)});const b=Ss();Li(b,r,s.layoutBox);const x=Ss();g?Li(x,n.applyTransform(d,!0),s.measuredBox):Li(x,r,s.layoutBox);const m=!Nx(b);let f=!1;if(!n.resumeFrom){const _=n.getClosestProjectingParent();if(_&&!_.resumeFrom){const{snapshot:y,layout:G}=_;if(y&&G){const v=n.options.layoutAnchor||void 0,S=Je();Kr(S,s.layoutBox,y.layoutBox,v);const T=Je();Kr(T,r,G.layoutBox,v),Ex(S,T)||(f=!0),_.options.layoutRoot&&(n.relativeTarget=T,n.relativeTargetOrigin=S,n.relativeParent=_)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:s,delta:x,layoutDelta:b,hasLayoutChanged:m,hasRelativeLayoutChanged:f})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function PM(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function FM(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function KM(n){n.clearSnapshot()}function bf(n){n.clearMeasurements()}function XM(n){n.isLayoutDirty=!0,n.updateLayout()}function ff(n){n.isLayoutDirty=!1}function ZM(n){n.isAnimationBlocked&&n.layout&&!n.isLayoutDirty&&(n.snapshot=n.layout,n.isLayoutDirty=!0)}function YM(n){const{visualElement:s}=n.options;s&&s.getProps().onBeforeLayoutMeasure&&s.notify("BeforeLayoutMeasure"),n.resetTransform()}function xf(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function QM(n){n.resolveTargetDelta()}function $M(n){n.calcProjection()}function JM(n){n.resetSkewAndRotation()}function WM(n){n.removeLeadSnapshot()}function _f(n,s,l){n.translate=De(s.translate,0,l),n.scale=De(s.scale,1,l),n.origin=s.origin,n.originPoint=s.originPoint}function kf(n,s,l,r){n.min=De(s.min,l.min,r),n.max=De(s.max,l.max,r)}function e5(n,s,l,r){kf(n.x,s.x,l.x,r),kf(n.y,s.y,l.y,r)}function t5(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const a5={duration:.45,ease:[.4,0,.1,1]},yf=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),vf=yf("applewebkit/")&&!yf("chrome/")?Math.round:Pt;function Gf(n){n.min=vf(n.min),n.max=vf(n.max)}function n5(n){Gf(n.x),Gf(n.y)}function Rx(n,s,l){return n==="position"||n==="preserve-aspect"&&!MM(df(s),df(l),.2)}function s5(n){var s;return n!==n.root&&((s=n.scroll)==null?void 0:s.wasRoot)}const i5=qx({attachResizeListener:(n,s)=>Xi(n,"resize",s),measureScroll:()=>{var n,s;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((s=document.body)==null?void 0:s.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Du={current:void 0},zx=qx({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Du.current){const n=new i5({});n.mount(window),n.setOptions({layoutScroll:!0}),Du.current=n}return Du.current},resetTransform:(n,s)=>{n.style.transform=s!==void 0?s:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),Jd=C.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function Mf(n,s){if(typeof n=="function")return n(s);n!=null&&(n.current=s)}function o5(...n){return s=>{let l=!1;const r=n.map(d=>{const p=Mf(d,s);return!l&&typeof p=="function"&&(l=!0),p});if(l)return()=>{for(let d=0;d<r.length;d++){const p=r[d];typeof p=="function"?p():Mf(n[d],null)}}}}function r5(...n){return C.useCallback(o5(...n),n)}class l5 extends C.Component{getSnapshotBeforeUpdate(s){const l=this.props.childRef.current;if(jr(l)&&s.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=l.offsetParent,d=jr(r)&&r.offsetWidth||0,p=jr(r)&&r.offsetHeight||0,g=getComputedStyle(l),b=this.props.sizeRef.current;b.height=parseFloat(g.height),b.width=parseFloat(g.width),b.top=l.offsetTop,b.left=l.offsetLeft,b.right=d-b.width-b.left,b.bottom=p-b.height-b.top,b.direction=g.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function c5({children:n,isPresent:s,anchorX:l,anchorY:r,root:d,pop:p}){var y;const g=C.useId(),b=C.useRef(null),x=C.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:m}=C.useContext(Jd),f=((y=n.props)==null?void 0:y.ref)??(n==null?void 0:n.ref),_=r5(b,f);return C.useInsertionEffect(()=>{const{width:G,height:v,top:S,left:T,right:N,bottom:L,direction:E}=x.current;if(s||p===!1||!b.current||!G||!v)return;const V=E==="rtl",K=l==="left"?V?`right: ${N}`:`left: ${T}`:V?`left: ${T}`:`right: ${N}`,J=r==="bottom"?`bottom: ${L}`:`top: ${S}`;b.current.dataset.motionPopId=g;const R=document.createElement("style");m&&(R.nonce=m);const H=d??document.head;return H.appendChild(R),R.sheet&&R.sheet.insertRule(`
          [data-motion-pop-id="${g}"] {
            position: absolute !important;
            width: ${G}px !important;
            height: ${v}px !important;
            ${K}px !important;
            ${J}px !important;
          }
        `),()=>{var F;(F=b.current)==null||F.removeAttribute("data-motion-pop-id"),H.contains(R)&&H.removeChild(R)}},[s]),i.jsx(l5,{isPresent:s,childRef:b,sizeRef:x,pop:p,children:p===!1?n:C.cloneElement(n,{ref:_})})}const u5=({children:n,initial:s,isPresent:l,onExitComplete:r,custom:d,presenceAffectsLayout:p,mode:g,anchorX:b,anchorY:x,root:m})=>{const f=Sd(d5),_=C.useId();let y=!0,G=C.useMemo(()=>(y=!1,{id:_,initial:s,isPresent:l,custom:d,onExitComplete:v=>{f.set(v,!0);for(const S of f.values())if(!S)return;r&&r()},register:v=>(f.set(v,!1),()=>f.delete(v))}),[l,f,r]);return p&&y&&(G={...G}),C.useMemo(()=>{f.forEach((v,S)=>f.set(S,!1))},[l]),C.useEffect(()=>{!l&&!f.size&&r&&r()},[l]),n=i.jsx(c5,{pop:g==="popLayout",isPresent:l,anchorX:b,anchorY:x,root:m,children:n}),i.jsx(Yr.Provider,{value:G,children:n})};function d5(){return new Map}function Lx(n=!0){const s=C.useContext(Yr);if(s===null)return[!0,null];const{isPresent:l,onExitComplete:r,register:d}=s,p=C.useId();C.useEffect(()=>{if(n)return d(p)},[n]);const g=C.useCallback(()=>n&&r&&r(p),[p,r,n]);return!l&&r?[!1,g]:[!0]}const _r=n=>n.key||"";function Af(n){const s=[];return C.Children.forEach(n,l=>{C.isValidElement(l)&&s.push(l)}),s}const ia=({children:n,custom:s,initial:l=!0,onExitComplete:r,presenceAffectsLayout:d=!0,mode:p="sync",propagate:g=!1,anchorX:b="left",anchorY:x="top",root:m})=>{const[f,_]=Lx(g),y=C.useMemo(()=>Af(n),[n]),G=g&&!f?[]:y.map(_r),v=C.useRef(!0),S=C.useRef(y),T=Sd(()=>new Map),N=C.useRef(new Set),[L,E]=C.useState(y),[V,K]=C.useState(y);g0(()=>{v.current=!1,S.current=y;for(let H=0;H<V.length;H++){const F=_r(V[H]);G.includes(F)?(T.delete(F),N.current.delete(F)):T.get(F)!==!0&&T.set(F,!1)}},[V,G.length,G.join("-")]);const J=[];if(y!==L){let H=[...y];for(let F=0;F<V.length;F++){const B=V[F],Z=_r(B);G.includes(Z)||(H.splice(F,0,B),J.push(B))}return p==="wait"&&J.length&&(H=J),K(Af(H)),E(y),null}const{forceRender:R}=C.useContext(jd);return i.jsx(i.Fragment,{children:V.map(H=>{const F=_r(H),B=g&&!f?!1:y===V||G.includes(F),Z=()=>{if(N.current.has(F))return;if(T.has(F))N.current.add(F),T.set(F,!0);else return;let ae=!0;T.forEach(ee=>{ee||(ae=!1)}),ae&&(R==null||R(),K(S.current),g&&(_==null||_()),r&&r())};return i.jsx(u5,{isPresent:B,initial:!v.current||l?void 0:!1,custom:s,presenceAffectsLayout:d,mode:p,root:m,onExitComplete:B?void 0:Z,anchorX:b,anchorY:x,children:H},F)})})},Hx=C.createContext({strict:!1}),Tf={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let jf=!1;function p5(){if(jf)return;const n={};for(const s in Tf)n[s]={isEnabled:l=>Tf[s].some(r=>!!l[r])};hx(n),jf=!0}function Ox(){return p5(),QG()}function g5(n){const s=Ox();for(const l in n)s[l]={...s[l],...n[l]};hx(s)}const m5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Xr(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||m5.has(n)}let Bx=n=>!Xr(n);function h5(n){typeof n=="function"&&(Bx=s=>s.startsWith("on")?!Xr(s):n(s))}try{h5(require("@emotion/is-prop-valid").default)}catch{}function b5(n,s,l){const r={};for(const d in n)d==="values"&&typeof n.values=="object"||ct(n[d])||(Bx(d)||l===!0&&Xr(d)||!s&&!Xr(d)||n.draggable&&d.startsWith("onDrag"))&&(r[d]=n[d]);return r}const Wr=C.createContext({});function f5(n,s){if(Jr(n)){const{initial:l,animate:r}=n;return{initial:l===!1||Ki(l)?l:void 0,animate:Ki(r)?r:void 0}}return n.inherit!==!1?s:{}}function x5(n){const{initial:s,animate:l}=f5(n,C.useContext(Wr));return C.useMemo(()=>({initial:s,animate:l}),[Sf(s),Sf(l)])}function Sf(n){return Array.isArray(n)?n.join(" "):n}const Wd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ux(n,s,l){for(const r in s)!ct(s[r])&&!vx(r,l)&&(n[r]=s[r])}function _5({transformTemplate:n},s){return C.useMemo(()=>{const l=Wd();return Qd(l,s,n),Object.assign({},l.vars,l.style)},[s])}function k5(n,s){const l=n.style||{},r={};return Ux(r,l,n),Object.assign(r,_5(n,s)),r}function y5(n,s){const l={},r=k5(n,s);return n.drag&&n.dragListener!==!1&&(l.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(l.tabIndex=0),l.style=r,l}const Px=()=>({...Wd(),attrs:{}});function v5(n,s,l,r){const d=C.useMemo(()=>{const p=Px();return Gx(p,s,Ax(r),n.transformTemplate,n.style),{...p.attrs,style:{...p.style}}},[s]);if(n.style){const p={};Ux(p,n.style,n),d.style={...p,...d.style}}return d}const G5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ep(n){return typeof n!="string"||n.includes("-")?!1:!!(G5.indexOf(n)>-1||/[A-Z]/u.test(n))}function M5(n,s,l,{latestValues:r},d,p=!1,g){const x=(g??ep(n)?v5:y5)(s,r,d,n),m=b5(s,typeof n=="string",p),f=n!==C.Fragment?{...m,...x,ref:l}:{},{children:_}=s,y=C.useMemo(()=>ct(_)?_.get():_,[_]);return C.createElement(n,{...f,children:y})}function A5({scrapeMotionValuesFromProps:n,createRenderState:s},l,r,d){return{latestValues:T5(l,r,d,n),renderState:s()}}function T5(n,s,l,r){const d={},p=r(n,{});for(const y in p)d[y]=Er(p[y]);let{initial:g,animate:b}=n;const x=Jr(n),m=gx(n);s&&m&&!x&&n.inherit!==!1&&(g===void 0&&(g=s.initial),b===void 0&&(b=s.animate));let f=l?l.initial===!1:!1;f=f||g===!1;const _=f?b:g;if(_&&typeof _!="boolean"&&!$r(_)){const y=Array.isArray(_)?_:[_];for(let G=0;G<y.length;G++){const v=Ud(n,y[G]);if(v){const{transitionEnd:S,transition:T,...N}=v;for(const L in N){let E=N[L];if(Array.isArray(E)){const V=f?E.length-1:0;E=E[V]}E!==null&&(d[L]=E)}for(const L in S)d[L]=S[L]}}}return d}const Fx=n=>(s,l)=>{const r=C.useContext(Wr),d=C.useContext(Yr),p=()=>A5(n,s,r,d);return l?p():Sd(p)},j5=Fx({scrapeMotionValuesFromProps:$d,createRenderState:Wd}),S5=Fx({scrapeMotionValuesFromProps:Tx,createRenderState:Px}),I5=Symbol.for("motionComponentSymbol");function w5(n,s,l){const r=C.useRef(l);C.useInsertionEffect(()=>{r.current=l});const d=C.useRef(null);return C.useCallback(p=>{var b;p&&((b=n.onMount)==null||b.call(n,p)),s&&(p?s.mount(p):s.unmount());const g=r.current;if(typeof g=="function")if(p){const x=g(p);typeof x=="function"&&(d.current=x)}else d.current?(d.current(),d.current=null):g(p);else g&&(g.current=p)},[s])}const Kx=C.createContext({});function As(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function N5(n,s,l,r,d,p){var E,V;const{visualElement:g}=C.useContext(Wr),b=C.useContext(Hx),x=C.useContext(Yr),m=C.useContext(Jd),f=m.reducedMotion,_=m.skipAnimations,y=C.useRef(null),G=C.useRef(!1);r=r||b.renderer,!y.current&&r&&(y.current=r(n,{visualState:s,parent:g,props:l,presenceContext:x,blockInitialAnimation:x?x.initial===!1:!1,reducedMotionConfig:f,skipAnimations:_,isSVG:p}),G.current&&y.current&&(y.current.manuallyAnimateOnMount=!0));const v=y.current,S=C.useContext(Kx);v&&!v.projection&&d&&(v.type==="html"||v.type==="svg")&&E5(y.current,l,d,S);const T=C.useRef(!1);C.useInsertionEffect(()=>{v&&T.current&&v.update(l,x)});const N=l[tx],L=C.useRef(!!N&&typeof window<"u"&&!((E=window.MotionHandoffIsComplete)!=null&&E.call(window,N))&&((V=window.MotionHasOptimisedAnimation)==null?void 0:V.call(window,N)));return g0(()=>{G.current=!0,v&&(T.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),v.scheduleRenderMicrotask(),L.current&&v.animationState&&v.animationState.animateChanges())}),C.useEffect(()=>{v&&(!L.current&&v.animationState&&v.animationState.animateChanges(),L.current&&(queueMicrotask(()=>{var K;(K=window.MotionHandoffMarkAsComplete)==null||K.call(window,N)}),L.current=!1),v.enteringChildren=void 0)}),v}function E5(n,s,l,r){const{layoutId:d,layout:p,drag:g,dragConstraints:b,layoutScroll:x,layoutRoot:m,layoutAnchor:f,layoutCrossfade:_}=s;n.projection=new l(n.latestValues,s["data-framer-portal-id"]?void 0:Xx(n.parent)),n.projection.setOptions({layoutId:d,layout:p,alwaysMeasureLayout:!!g||b&&As(b),visualElement:n,animationType:typeof p=="string"?p:"both",initialPromotionConfig:r,crossfade:_,layoutScroll:x,layoutRoot:m,layoutAnchor:f})}function Xx(n){if(n)return n.options.allowProjection!==!1?n.projection:Xx(n.parent)}function qu(n,{forwardMotionProps:s=!1,type:l}={},r,d){r&&g5(r);const p=l?l==="svg":ep(n),g=p?S5:j5;function b(m,f){let _;const y={...C.useContext(Jd),...m,layoutId:V5(m)},{isStatic:G}=y,v=x5(m),S=g(m,G);if(!G&&typeof window<"u"){C5();const T=D5(y);_=T.MeasureLayout,v.visualElement=N5(n,S,y,d,T.ProjectionNode,p)}return i.jsxs(Wr.Provider,{value:v,children:[_&&v.visualElement?i.jsx(_,{visualElement:v.visualElement,...y}):null,M5(n,m,w5(S,v.visualElement,f),S,G,s,p)]})}b.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const x=C.forwardRef(b);return x[I5]=n,x}function V5({layoutId:n}){const s=C.useContext(jd).id;return s&&n!==void 0?s+"-"+n:n}function C5(n,s){C.useContext(Hx).strict}function D5(n){const s=Ox(),{drag:l,layout:r}=s;if(!l&&!r)return{};const d={...l,...r};return{MeasureLayout:l!=null&&l.isEnabled(n)||r!=null&&r.isEnabled(n)?d.MeasureLayout:void 0,ProjectionNode:d.ProjectionNode}}function q5(n,s){if(typeof Proxy>"u")return qu;const l=new Map,r=(p,g)=>qu(p,g,n,s),d=(p,g)=>r(p,g);return new Proxy(d,{get:(p,g)=>g==="create"?r:(l.has(g)||l.set(g,qu(g,void 0,n,s)),l.get(g))})}const R5=(n,s)=>s.isSVG??ep(n)?new gM(s):new rM(s,{allowProjection:n!==C.Fragment});class z5 extends un{constructor(s){super(s),s.animationState||(s.animationState=xM(s))}updateAnimationControlsSubscription(){const{animate:s}=this.node.getProps();$r(s)&&(this.unmountControls=s.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:s}=this.node.getProps(),{animate:l}=this.node.prevProps||{};s!==l&&this.updateAnimationControlsSubscription()}unmount(){var s;this.node.animationState.reset(),(s=this.unmountControls)==null||s.call(this)}}let L5=0;class H5 extends un{constructor(){super(...arguments),this.id=L5++,this.isExitComplete=!1}update(){var p;if(!this.node.presenceContext)return;const{isPresent:s,onExitComplete:l}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||s===r)return;if(s&&r===!1){if(this.isExitComplete){const{initial:g,custom:b}=this.node.getProps();if(typeof g=="string"||typeof g=="object"&&g!==null&&!Array.isArray(g)){const x=qn(this.node,g,b);if(x){const{transition:m,transitionEnd:f,..._}=x;for(const y in _)(p=this.node.getValue(y))==null||p.jump(_[y])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const d=this.node.animationState.setActive("exit",!s);l&&!s&&d.then(()=>{this.isExitComplete=!0,l(this.id)})}mount(){const{register:s,onExitComplete:l}=this.node.presenceContext||{};l&&l(this.id),s&&(this.unmount=s(this.id))}unmount(){}}const O5={animation:{Feature:z5},exit:{Feature:H5}};function $i(n){return{point:{x:n.pageX,y:n.pageY}}}const B5=n=>s=>Kd(s)&&n(s,$i(s));function Hi(n,s,l,r){return Xi(n,s,B5(l),r)}const Zx=({current:n})=>n?n.ownerDocument.defaultView:null,If=(n,s)=>Math.abs(n-s);function U5(n,s){const l=If(n.x,s.x),r=If(n.y,s.y);return Math.sqrt(l**2+r**2)}const wf=new Set(["auto","scroll"]);class Yx{constructor(s,l,{transformPagePoint:r,contextWindow:d=window,dragSnapToOrigin:p=!1,distanceThreshold:g=3,element:b}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=G=>{this.handleScroll(G.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=kr(this.lastRawMoveEventInfo,this.transformPagePoint));const G=Ru(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,S=U5(G.offset,{x:0,y:0})>=this.distanceThreshold;if(!v&&!S)return;const{point:T}=G,{timestamp:N}=lt;this.history.push({...T,timestamp:N});const{onStart:L,onMove:E}=this.handlers;v||(L&&L(this.lastMoveEvent,G),this.startEvent=this.lastMoveEvent),E&&E(this.lastMoveEvent,G)},this.handlePointerMove=(G,v)=>{this.lastMoveEvent=G,this.lastRawMoveEventInfo=v,this.lastMoveEventInfo=kr(v,this.transformPagePoint),qe.update(this.updatePoint,!0)},this.handlePointerUp=(G,v)=>{this.end();const{onEnd:S,onSessionEnd:T,resumeAnimation:N}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&N&&N(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const L=Ru(G.type==="pointercancel"?this.lastMoveEventInfo:kr(v,this.transformPagePoint),this.history);this.startEvent&&S&&S(G,L),T&&T(G,L)},!Kd(s))return;this.dragSnapToOrigin=p,this.handlers=l,this.transformPagePoint=r,this.distanceThreshold=g,this.contextWindow=d||window;const x=$i(s),m=kr(x,this.transformPagePoint),{point:f}=m,{timestamp:_}=lt;this.history=[{...f,timestamp:_}];const{onSessionStart:y}=l;y&&y(s,Ru(m,this.history)),this.removeListeners=Zi(Hi(this.contextWindow,"pointermove",this.handlePointerMove),Hi(this.contextWindow,"pointerup",this.handlePointerUp),Hi(this.contextWindow,"pointercancel",this.handlePointerUp)),b&&this.startScrollTracking(b)}startScrollTracking(s){let l=s.parentElement;for(;l;){const r=getComputedStyle(l);(wf.has(r.overflowX)||wf.has(r.overflowY))&&this.scrollPositions.set(l,{x:l.scrollLeft,y:l.scrollTop}),l=l.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(s){const l=this.scrollPositions.get(s);if(!l)return;const r=s===window,d=r?{x:window.scrollX,y:window.scrollY}:{x:s.scrollLeft,y:s.scrollTop},p={x:d.x-l.x,y:d.y-l.y};p.x===0&&p.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=p.x,this.lastMoveEventInfo.point.y+=p.y):this.history.length>0&&(this.history[0].x-=p.x,this.history[0].y-=p.y),this.scrollPositions.set(s,d),qe.update(this.updatePoint,!0))}updateHandlers(s){this.handlers=s}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),cn(this.updatePoint)}}function kr(n,s){return s?{point:s(n.point)}:n}function Nf(n,s){return{x:n.x-s.x,y:n.y-s.y}}function Ru({point:n},s){return{point:n,delta:Nf(n,Qx(s)),offset:Nf(n,P5(s)),velocity:F5(s,.1)}}function P5(n){return n[0]}function Qx(n){return n[n.length-1]}function F5(n,s){if(n.length<2)return{x:0,y:0};let l=n.length-1,r=null;const d=Qx(n);for(;l>=0&&(r=n[l],!(d.timestamp-r.timestamp>Et(s)));)l--;if(!r)return{x:0,y:0};r===n[0]&&n.length>2&&d.timestamp-r.timestamp>Et(s)*2&&(r=n[1]);const p=Ut(d.timestamp-r.timestamp);if(p===0)return{x:0,y:0};const g={x:(d.x-r.x)/p,y:(d.y-r.y)/p};return g.x===1/0&&(g.x=0),g.y===1/0&&(g.y=0),g}function K5(n,{min:s,max:l},r){return s!==void 0&&n<s?n=r?De(s,n,r.min):Math.max(n,s):l!==void 0&&n>l&&(n=r?De(l,n,r.max):Math.min(n,l)),n}function Ef(n,s,l){return{min:s!==void 0?n.min+s:void 0,max:l!==void 0?n.max+l-(n.max-n.min):void 0}}function X5(n,{top:s,left:l,bottom:r,right:d}){return{x:Ef(n.x,l,d),y:Ef(n.y,s,r)}}function Vf(n,s){let l=s.min-n.min,r=s.max-n.max;return s.max-s.min<n.max-n.min&&([l,r]=[r,l]),{min:l,max:r}}function Z5(n,s){return{x:Vf(n.x,s.x),y:Vf(n.y,s.y)}}function Y5(n,s){let l=.5;const r=mt(n),d=mt(s);return d>r?l=Pi(s.min,s.max-r,n.min):r>d&&(l=Pi(n.min,n.max-d,s.min)),la(0,1,l)}function Q5(n,s){const l={};return s.min!==void 0&&(l.min=s.min-n.min),s.max!==void 0&&(l.max=s.max-n.min),l}const kd=.35;function $5(n=kd){return n===!1?n=0:n===!0&&(n=kd),{x:Cf(n,"left","right"),y:Cf(n,"top","bottom")}}function Cf(n,s,l){return{min:Df(n,s),max:Df(n,l)}}function Df(n,s){return typeof n=="number"?n:n[s]||0}const J5=new WeakMap;class W5{constructor(s){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Je(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=s}start(s,{snapToCursor:l=!1,distanceThreshold:r}={}){const{presenceContext:d}=this.visualElement;if(d&&d.isPresent===!1)return;const p=_=>{l&&this.snapToCursor($i(_).point),this.stopAnimation()},g=(_,y)=>{const{drag:G,dragPropagation:v,onDragStart:S}=this.getProps();if(G&&!v&&(this.openDragLock&&this.openDragLock(),this.openDragLock=TG(G),!this.openDragLock))return;this.latestPointerEvent=_,this.latestPanInfo=y,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),na(N=>{let L=this.getAxisMotionValue(N).get()||0;if(ra.test(L)){const{projection:E}=this.visualElement;if(E&&E.layout){const V=E.layout.layoutBox[N];V&&(L=mt(V)*(parseFloat(L)/100))}}this.originPoint[N]=L}),S&&qe.update(()=>S(_,y),!1,!0),ud(this.visualElement,"transform");const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},b=(_,y)=>{this.latestPointerEvent=_,this.latestPanInfo=y;const{dragPropagation:G,dragDirectionLock:v,onDirectionLock:S,onDrag:T}=this.getProps();if(!G&&!this.openDragLock)return;const{offset:N}=y;if(v&&this.currentDirection===null){this.currentDirection=t3(N),this.currentDirection!==null&&S&&S(this.currentDirection);return}this.updateAxis("x",y.point,N),this.updateAxis("y",y.point,N),this.visualElement.render(),T&&qe.update(()=>T(_,y),!1,!0)},x=(_,y)=>{this.latestPointerEvent=_,this.latestPanInfo=y,this.stop(_,y),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>{const{dragSnapToOrigin:_}=this.getProps();(_||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:f}=this.getProps();this.panSession=new Yx(s,{onSessionStart:p,onStart:g,onMove:b,onSessionEnd:x,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,distanceThreshold:r,contextWindow:Zx(this.visualElement),element:this.visualElement.current})}stop(s,l){const r=s||this.latestPointerEvent,d=l||this.latestPanInfo,p=this.isDragging;if(this.cancel(),!p||!d||!r)return;const{velocity:g}=d;this.startAnimation(g);const{onDragEnd:b}=this.getProps();b&&qe.postRender(()=>b(r,d))}cancel(){this.isDragging=!1;const{projection:s,animationState:l}=this.visualElement;s&&(s.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),l&&l.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(s,l,r){const{drag:d}=this.getProps();if(!r||!yr(s,d,this.currentDirection))return;const p=this.getAxisMotionValue(s);let g=this.originPoint[s]+r[s];this.constraints&&this.constraints[s]&&(g=K5(g,this.constraints[s],this.elastic[s])),p.set(g)}resolveConstraints(){var p;const{dragConstraints:s,dragElastic:l}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(p=this.visualElement.projection)==null?void 0:p.layout,d=this.constraints;s&&As(s)?this.constraints||(this.constraints=this.resolveRefConstraints()):s&&r?this.constraints=X5(r.layoutBox,s):this.constraints=!1,this.elastic=$5(l),d!==this.constraints&&!As(s)&&r&&this.constraints&&!this.hasMutatedConstraints&&na(g=>{this.constraints!==!1&&this.getAxisMotionValue(g)&&(this.constraints[g]=Q5(r.layoutBox[g],this.constraints[g]))})}resolveRefConstraints(){const{dragConstraints:s,onMeasureDragConstraints:l}=this.getProps();if(!s||!As(s))return!1;const r=s.current,{projection:d}=this.visualElement;if(!d||!d.layout)return!1;d.root&&(d.root.scroll=void 0,d.root.updateScroll());const p=tM(r,d.root,this.visualElement.getTransformPagePoint());let g=Z5(d.layout.layoutBox,p);if(l){const b=l(JG(g));this.hasMutatedConstraints=!!b,b&&(g=fx(b))}return g}startAnimation(s){const{drag:l,dragMomentum:r,dragElastic:d,dragTransition:p,dragSnapToOrigin:g,onDragTransitionEnd:b}=this.getProps(),x=this.constraints||{},m=na(f=>{if(!yr(f,l,this.currentDirection))return;let _=x&&x[f]||{};(g===!0||g===f)&&(_={min:0,max:0});const y=d?200:1e6,G=d?40:1e7,v={type:"inertia",velocity:r?s[f]:0,bounceStiffness:y,bounceDamping:G,timeConstant:750,restDelta:1,restSpeed:10,...p,..._};return this.startAxisValueAnimation(f,v)});return Promise.all(m).then(b)}startAxisValueAnimation(s,l){const r=this.getAxisMotionValue(s);return ud(this.visualElement,s),r.start(Bd(s,r,0,l,this.visualElement,!1))}stopAnimation(){na(s=>this.getAxisMotionValue(s).stop())}getAxisMotionValue(s){const l=`_drag${s.toUpperCase()}`,d=this.visualElement.getProps()[l];return d||this.visualElement.getValue(s,this.visualElement.latestValues[s]??0)}snapToCursor(s){na(l=>{const{drag:r}=this.getProps();if(!yr(l,r,this.currentDirection))return;const{projection:d}=this.visualElement,p=this.getAxisMotionValue(l);if(d&&d.layout){const{min:g,max:b}=d.layout.layoutBox[l],x=p.get()||0;p.set(s[l]-De(g,b,.5)+x)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:s,dragConstraints:l}=this.getProps(),{projection:r}=this.visualElement;if(!As(l)||!r||!this.constraints)return;this.stopAnimation();const d={x:0,y:0};na(g=>{const b=this.getAxisMotionValue(g);if(b&&this.constraints!==!1){const x=b.get();d[g]=Y5({min:x,max:x},this.constraints[g])}});const{transformTemplate:p}=this.visualElement.getProps();this.visualElement.current.style.transform=p?p({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),na(g=>{if(!yr(g,s,null))return;const b=this.getAxisMotionValue(g),{min:x,max:m}=this.constraints[g];b.set(De(x,m,d[g]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;J5.set(this.visualElement,this);const s=this.visualElement.current,l=Hi(s,"pointerdown",m=>{const{drag:f,dragListener:_=!0}=this.getProps(),y=m.target,G=y!==s&&EG(y);f&&_&&!G&&this.start(m)});let r;const d=()=>{const{dragConstraints:m}=this.getProps();As(m)&&m.current&&(this.constraints=this.resolveRefConstraints(),r||(r=e3(s,m.current,()=>this.scalePositionWithinConstraints())))},{projection:p}=this.visualElement,g=p.addEventListener("measure",d);p&&!p.layout&&(p.root&&p.root.updateScroll(),p.updateLayout()),qe.read(d);const b=Xi(window,"resize",()=>this.scalePositionWithinConstraints()),x=p.addEventListener("didUpdate",(({delta:m,hasLayoutChanged:f})=>{this.isDragging&&f&&(na(_=>{const y=this.getAxisMotionValue(_);y&&(this.originPoint[_]+=m[_].translate,y.set(y.get()+m[_].translate))}),this.visualElement.render())}));return()=>{b(),l(),g(),x&&x(),r&&r()}}getProps(){const s=this.visualElement.getProps(),{drag:l=!1,dragDirectionLock:r=!1,dragPropagation:d=!1,dragConstraints:p=!1,dragElastic:g=kd,dragMomentum:b=!0}=s;return{...s,drag:l,dragDirectionLock:r,dragPropagation:d,dragConstraints:p,dragElastic:g,dragMomentum:b}}}function qf(n){let s=!0;return()=>{if(s){s=!1;return}n()}}function e3(n,s,l){const r=Bb(n,qf(l)),d=Bb(s,qf(l));return()=>{r(),d()}}function yr(n,s,l){return(s===!0||s===n)&&(l===null||l===n)}function t3(n,s=10){let l=null;return Math.abs(n.y)>s?l="y":Math.abs(n.x)>s&&(l="x"),l}class a3 extends un{constructor(s){super(s),this.removeGroupControls=Pt,this.removeListeners=Pt,this.controls=new W5(s)}mount(){const{dragControls:s}=this.node.getProps();s&&(this.removeGroupControls=s.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Pt}update(){const{dragControls:s}=this.node.getProps(),{dragControls:l}=this.node.prevProps||{};s!==l&&(this.removeGroupControls(),s&&(this.removeGroupControls=s.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const zu=n=>(s,l)=>{n&&qe.update(()=>n(s,l),!1,!0)};class n3 extends un{constructor(){super(...arguments),this.removePointerDownListener=Pt}onPointerDown(s){this.session=new Yx(s,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Zx(this.node)})}createPanHandlers(){const{onPanSessionStart:s,onPanStart:l,onPan:r,onPanEnd:d}=this.node.getProps();return{onSessionStart:zu(s),onStart:zu(l),onMove:zu(r),onEnd:(p,g)=>{delete this.session,d&&qe.postRender(()=>d(p,g))}}}mount(){this.removePointerDownListener=Hi(this.node.current,"pointerdown",s=>this.onPointerDown(s))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Lu=!1;class s3 extends C.Component{componentDidMount(){const{visualElement:s,layoutGroup:l,switchLayoutGroup:r,layoutId:d}=this.props,{projection:p}=s;p&&(l.group&&l.group.add(p),r&&r.register&&d&&r.register(p),Lu&&p.root.didUpdate(),p.addEventListener("animationComplete",()=>{this.safeToRemove()}),p.setOptions({...p.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Vr.hasEverUpdated=!0}getSnapshotBeforeUpdate(s){const{layoutDependency:l,visualElement:r,drag:d,isPresent:p}=this.props,{projection:g}=r;return g&&(g.isPresent=p,s.layoutDependency!==l&&g.setOptions({...g.options,layoutDependency:l}),Lu=!0,d||s.layoutDependency!==l||l===void 0||s.isPresent!==p?g.willUpdate():this.safeToRemove(),s.isPresent!==p&&(p?g.promote():g.relegate()||qe.postRender(()=>{const b=g.getStack();(!b||!b.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:s,layoutAnchor:l}=this.props,{projection:r}=s;r&&(r.options.layoutAnchor=l,r.root.didUpdate(),Fd.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:s,layoutGroup:l,switchLayoutGroup:r}=this.props,{projection:d}=s;Lu=!0,d&&(d.scheduleCheckAfterUnmount(),l&&l.group&&l.group.remove(d),r&&r.deregister&&r.deregister(d))}safeToRemove(){const{safeToRemove:s}=this.props;s&&s()}render(){return null}}function $x(n){const[s,l]=Lx(),r=C.useContext(jd);return i.jsx(s3,{...n,layoutGroup:r,switchLayoutGroup:C.useContext(Kx),isPresent:s,safeToRemove:l})}const i3={pan:{Feature:n3},drag:{Feature:a3,ProjectionNode:zx,MeasureLayout:$x}};function Rf(n,s,l){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",l==="Start");const d="onHover"+l,p=r[d];p&&qe.postRender(()=>p(s,$i(s)))}class o3 extends un{mount(){const{current:s}=this.node;s&&(this.unmount=SG(s,(l,r)=>(Rf(this.node,r,"Start"),d=>Rf(this.node,d,"End"))))}unmount(){}}class r3 extends un{constructor(){super(...arguments),this.isActive=!1}onFocus(){let s=!1;try{s=this.node.current.matches(":focus-visible")}catch{s=!0}!s||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Zi(Xi(this.node.current,"focus",()=>this.onFocus()),Xi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function zf(n,s,l){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",l==="Start");const d="onTap"+(l==="End"?"":l),p=r[d];p&&qe.postRender(()=>p(s,$i(s)))}class l3 extends un{mount(){const{current:s}=this.node;if(!s)return;const{globalTapTarget:l,propagate:r}=this.node.props;this.unmount=CG(s,(d,p)=>(zf(this.node,p,"Start"),(g,{success:b})=>zf(this.node,g,b?"End":"Cancel")),{useGlobalTarget:l,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const yd=new WeakMap,Hu=new WeakMap,c3=n=>{const s=yd.get(n.target);s&&s(n)},u3=n=>{n.forEach(c3)};function d3({root:n,...s}){const l=n||document;Hu.has(l)||Hu.set(l,{});const r=Hu.get(l),d=JSON.stringify(s);return r[d]||(r[d]=new IntersectionObserver(u3,{root:n,...s})),r[d]}function p3(n,s,l){const r=d3(s);return yd.set(n,l),r.observe(n),()=>{yd.delete(n),r.unobserve(n)}}const g3={some:0,all:1};class m3 extends un{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var x;(x=this.stopObserver)==null||x.call(this);const{viewport:s={}}=this.node.getProps(),{root:l,margin:r,amount:d="some",once:p}=s,g={root:l?l.current:void 0,rootMargin:r,threshold:typeof d=="number"?d:g3[d]},b=m=>{const{isIntersecting:f}=m;if(this.isInView===f||(this.isInView=f,p&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:_,onViewportLeave:y}=this.node.getProps(),G=f?_:y;G&&G(m)};this.stopObserver=p3(this.node.current,g,b)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:s,prevProps:l}=this.node;["amount","margin","root"].some(h3(s,l))&&this.startObserver()}unmount(){var s;(s=this.stopObserver)==null||s.call(this),this.hasEnteredView=!1,this.isInView=!1}}function h3({viewport:n={}},{viewport:s={}}={}){return l=>n[l]!==s[l]}const b3={inView:{Feature:m3},tap:{Feature:l3},focus:{Feature:r3},hover:{Feature:o3}},f3={layout:{ProjectionNode:zx,MeasureLayout:$x}},x3={...O5,...b3,...i3,...f3},Qe=q5(x3,R5),Jx=C.createContext(void 0),_3={LATAM:{"nav.inicio":"Inicio","nav.novedades":"Novedades","nav.servicios":"Servicios","nav.evo":"Evo","nav.otros":"Otros códigos","nav.guia":"Guía","nav.tutoriales":"Tutoriales","nav.descargas":"Descargas","nav.comunidad":"Comunidad ⚔️","nav.guia_script":"Guía Script MGG","home.search_placeholder":"Nombre o código...","home.sort_az":"Nombre A-Z","home.sort_za":"Nombre Z-A","home.sort_code_asc":"Código Asc.","home.sort_code_desc":"Código Desc.","home.sort_hp_desc":"M. Mayor Vida","home.sort_atk_desc":"M. Mayor Ataque","home.sort_spd_desc":"M. Mayor Velocidad","home.show":"Mostrar","home.hide":"Ocultar","home.filtered":"Filtrados","home.total_base":"Base Total","services.title":"Servicios Exclusivos","services.subtitle":"Potencia tu cuenta con nuestros servicios especializados de Mutants: Genetic Gladiators.","services.buy":"Adquirir","services.payment_methods":"Métodos de Pago","services.contact_us":"Contáctanos","region.latam":"LATAM","region.usd":"USD","tip.label":"Tip:","tip.text":"Para asegurar la sincronización de datos, se recomienda acceder vía Facebook o limpiar cookies/caché del navegador (Modo Incógnito).","footer.renovated":"Versión renovada","footer.nav":"Navegación","footer.legal":"Información Legal","footer.terms":"Términos y Condiciones","footer.rights":"© 2026 Smith Luque. Todos los derechos reservados.","footer.desc":"Base de datos de códigos de Mutantes de MGG para Game Guardian. Aquí hay contenido para aprender y recursos para usar.","whatsapp.title":"Grupo de WhatsApp","whatsapp.desc":"Únete para ayuda, consejos y enseñanza dentro de la comunidad.","whatsapp.btn":"Unirme al grupo","stats.mutants":"Mutantes","stats.version":"Versión","home.main_database":"Base principal","home.main_desc":"Lista completa de mutantes con búsqueda rápida, filtros por genes y carga automática desde tu archivo de códigos.","home.featured_mutants":"Novedades Destacadas","home.explore_catalog":"Explorar Lista de Mutantes","home.reset_engine":"Reiniciar Motor","home.genetic_config":"Configuración Genética","home.search_engine":"Motor de Búsqueda","home.sort_filters":"Filtros de Orden","home.no_results":"No se encontraron mutantes con esos filtros.","home.hidden_results":"Resultados ocultos.","home.active":"Activos","home.total":"Total","gene.dominant":"Dominante","gene.active":"Activo","gene.inactive":"Inactivo","layout.by_author":"Por Smith Luque","layout.select_language":"SELECCIONAR IDIOMA","layout.active_support":"Grupo Activo","mutant.verified":"Verificado","mutant.extract_code":"Extraer Código","home.load_more_rem":"Cargar más ({rem} restantes)","layout.color_theme":"Color de Diseño","home.single_gene_only":"Solo 1 Gen (Monogénicos)","home.all_genes":"Todos los genes","home.announcement_title":"Anuncio Importante","home.announcement_desc":"Me disculpo sinceramente por haber publicado previamente algunas estadísticas con errores. El problema ya ha sido completamente solucionado con los datos correctos. Si detectas cualquier otro inconveniente o error, por favor no dudes en contactarme.","home.names_language":"Idioma de Nombres","profile.developer":"Desarrollador Full Stack","profile.founder":"Fundador de Sistema Mutodex"},USD:{"nav.inicio":"Home","nav.novedades":"News","nav.servicios":"Services","nav.evo":"Evo Calc","nav.otros":"Other Codes","nav.guia":"Guide","nav.tutoriales":"Tutorials","nav.descargas":"Downloads","nav.comunidad":"Community ⚔️","nav.guia_script":"MGG Script Guide","home.search_placeholder":"Name or code...","home.sort_az":"Name A-Z","home.sort_za":"Name Z-A","home.sort_code_asc":"Code Asc.","home.sort_code_desc":"Code Desc.","home.sort_hp_desc":"M. Highest HP","home.sort_atk_desc":"M. Highest ATK","home.sort_spd_desc":"M. Highest Speed","home.show":"Show","home.hide":"Hide","home.filtered":"Filtered","home.total_base":"Total Base","services.title":"Exclusive Services","services.subtitle":"Boost your account with our specialized Mutants: Genetic Gladiators services.","services.buy":"Purchase","services.payment_methods":"Payment Methods","services.contact_us":"Contact Us","region.latam":"LATAM","region.usd":"USD","tip.label":"Tip:","tip.text":"To ensure data synchronization, it is recommended to access via Facebook or clear browser cookies/cache (Incognito Mode).","footer.renovated":"Renewed Version","footer.nav":"Navigation","footer.legal":"Legal Information","footer.terms":"Terms & Conditions","footer.rights":"© 2026 Smith Luque. All rights reserved.","footer.desc":"MGG Mutant code database for Game Guardian. Here is content to learn and resources to use.","whatsapp.title":"WhatsApp Group","whatsapp.desc":"Join for help, tips, and teaching within the community.","whatsapp.btn":"Join the group","stats.mutants":"Mutants","stats.version":"Version","home.main_database":"Main Database","home.main_desc":"Full mutant list with fast search, gene filters, and automatic code loading.","home.featured_mutants":"Featured New Mutants","home.explore_catalog":"Explore Mutant List","home.reset_engine":"Reset Engine","home.genetic_config":"Genetic Configuration","home.search_engine":"Search Engine","home.sort_filters":"Sort Filters","home.no_results":"No mutants found with those filters.","home.hidden_results":"Results hidden.","home.active":"Active","home.total":"Total","gene.dominant":"Dominant","gene.active":"Active","gene.inactive":"Inactive","layout.by_author":"By Smith Luque","layout.select_language":"SELECT LANGUAGE","layout.active_support":"Active Support","mutant.verified":"Verified","mutant.extract_code":"Extract Code","home.load_more_rem":"Load More ({rem} remaining)","layout.color_theme":"Design Color","home.single_gene_only":"Single Gene Only (Pure)","home.all_genes":"All Genes","home.announcement_title":"Important Announcement","home.announcement_desc":"I sincerely apologize for previously publishing some incorrect stats. The issue has now been fully resolved with correct data. If you notice any other issues, please feel free to contact me.","home.names_language":"Names Language","profile.developer":"Full Stack Developer","profile.founder":"Founder of Sistema Mutodex"},PT:{"nav.inicio":"Início","nav.novedades":"Novidades","nav.servicios":"Serviços","nav.evo":"Evo","nav.otros":"Outros códigos","nav.guia":"Guia","nav.tutoriales":"Tutoriais","nav.descargas":"Downloads","nav.comunidad":"Comunidade ⚔️","nav.guia_script":"Guia Script MGG","home.search_placeholder":"Nome ou código...","home.sort_az":"Nome A-Z","home.sort_za":"Nome Z-A","home.sort_code_asc":"Código Cresc.","home.sort_code_desc":"Código Decresc.","home.sort_hp_desc":"M. Maior Vida","home.sort_atk_desc":"M. Maior Ataque","home.sort_spd_desc":"M. Maior Velocidade","home.show":"Mostrar","home.hide":"Ocultar","home.filtered":"Filtrados","home.total_base":"Total Base","services.title":"Serviços Exclusivos","services.subtitle":"Melhore sua conta com nossos serviços especializados de Mutants: Genetic Gladiators.","services.buy":"Adquirir","services.payment_methods":"Métodos de Pagamento","services.contact_us":"Contate-nos","region.latam":"LATAM","region.usd":"USD","tip.label":"Dica:","tip.text":"Para garantir a sincronização de dados, recomenda-se acessar via Facebook ou limpar os cookies/cache do navegador (Modo Incógnito).","footer.renovated":"Versão Renovada","footer.nav":"Navegação","footer.legal":"Informação Legal","footer.terms":"Termos e Condições","footer.rights":"© 2026 Smith Luque. Todos os direitos reservados.","footer.desc":"Banco de dados de códigos de Mutants MGG para Game Guardian. Conteúdos para aprendizagem e recursos.","whatsapp.title":"Grupo de WhatsApp","whatsapp.desc":"Entre para obter ajuda, dicas e suporte na comunidade.","whatsapp.btn":"Entrar no grupo","stats.mutants":"Mutantes","stats.version":"Versão","home.main_database":"Base Principal","home.main_desc":"Lista completa de mutantes com busca rápida, filtros de genes e carregamento automático a partir do seu arquivo de códigos.","home.featured_mutants":"Novidades em Destaque","home.explore_catalog":"Explorar Lista de Mutantes","home.reset_engine":"Reiniciar Mecanismo","home.genetic_config":"Configuração Genética","home.search_engine":"Mecanismo de Busca","home.sort_filters":"Filtros de Ordenação","home.no_results":"Nenhum mutante encontrado com esses filtros.","home.hidden_results":"Resultados ocultos.","home.active":"Ativos","home.total":"Total","gene.dominant":"Dominante","gene.active":"Ativo","gene.inactive":"Inativo","layout.by_author":"Por Smith Luque","layout.select_language":"SELECIONAR IDIOMA","layout.active_support":"Grupo Ativo","mutant.verified":"Verificado","mutant.extract_code":"Extrair Código","home.load_more_rem":"Carregar mais ({rem} restantes)","layout.color_theme":"Cor do Design","home.single_gene_only":"Apenas 1 Gene (Monogênicos)","home.all_genes":"Todos os genes","home.announcement_title":"Anúncio Importante","home.announcement_desc":"Peço desculpas sinceras por postar anteriormente algumas estatísticas com erros. O problema já foi totalmente resolvido com os dados corretos. Se notar qualquer outro problema, entre em contato comigo.","home.names_language":"Idioma dos Nomes","profile.developer":"Desenvolvedor Full Stack","profile.founder":"Fundador do Sistema Mutodex"},FR:{"nav.inicio":"Accueil","nav.novedades":"Actualités","nav.servicios":"Services","nav.evo":"Evos","nav.otros":"Autres codes","nav.guia":"Guide","nav.tutoriales":"Tutoriels","nav.descargas":"Téléchargements","nav.comunidad":"Communauté ⚔️","nav.guia_script":"Guide Script MGG","home.search_placeholder":"Nom ou code...","home.sort_az":"Nom A-Z","home.sort_za":"Nom Z-A","home.sort_code_asc":"Code Asc.","home.sort_code_desc":"Code Desc.","home.sort_hp_desc":"M. Plus de vie","home.sort_atk_desc":"M. Plus d'attaque","home.sort_spd_desc":"M. Plus de vitesse","home.show":"Afficher","home.hide":"Masquer","home.filtered":"Filtrés","home.total_base":"Base totale","services.title":"Services exclusifs","services.subtitle":"Améliorez votre compte avec nos services spécialisés Mutants: Genetic Gladiators.","services.buy":"Acheter","services.payment_methods":"Modes de paiement","services.contact_us":"Contactez-nous","region.latam":"LATAM","region.usd":"USD","tip.label":"Conseil:","tip.text":"Pour garantir la synchronisation des données, il est recommandé de se connecter via Facebook ou d'effacer les cookies/cache du navigateur (Mode Incognito).","footer.renovated":"Version rénovée","footer.nav":"Navigation","footer.legal":"Informations légales","footer.terms":"Conditions générales","footer.rights":"© 2026 Smith Luque. Tous droits réservés.","footer.desc":"Base de données des codes Mutants MGG pour Game Guardian. Tutoriels d'apprentissage et ressources à utiliser.","whatsapp.title":"Groupe WhatsApp","whatsapp.desc":"Rejoignez-nous pour obtenir de l'aide, des conseils et échanger avec la communauté.","whatsapp.btn":"Rejoindre le groupe","stats.mutants":"Mutants","stats.version":"Version","home.main_database":"Base principale","home.main_desc":"Liste complète des mutants avec recherche rapide, filtres de gènes et chargement automatique depuis votre fichier de codes.","home.featured_mutants":"Nouveautés en Vedette","home.explore_catalog":"Explorer la Liste des Mutants","home.reset_engine":"Réinitialiser le moteur","home.genetic_config":"Configuration Génétique","home.search_engine":"Moteur de Recherche","home.sort_filters":"Filtres de Tri","home.no_results":"Aucun mutant trouvé avec ces filtres.","home.hidden_results":"Résultats masqués.","home.active":"Actifs","home.total":"Total","gene.dominant":"Dominant","gene.active":"Actif","gene.inactive":"Inactif","layout.by_author":"Par Smith Luque","layout.select_language":"SÉLECTIONNER LA LANGUE","layout.active_support":"Groupe Actif","mutant.verified":"Vérifié","mutant.extract_code":"Extraire le Code","home.load_more_rem":"Charger plus ({rem} restants)","layout.color_theme":"Couleur du Design","home.single_gene_only":"Un seul gène (Monogénique)","home.all_genes":"Tous les gènes","home.announcement_title":"Annonce Importante","home.announcement_desc":"Je m'excuse sincèrement pour avoir publié précédemment des statistiques erronées. Le problème a été entièrement résolu avec les données correctes. Si vous remarquez un autre problème, n'hésitez pas à me contacter.","home.names_language":"Langue de Noms","profile.developer":"Développeur Full Stack","profile.founder":"Fondateur de Système Mutodex"},DE:{"nav.inicio":"Startseite","nav.novedades":"Neuigkeiten","nav.servicios":"Dienste","nav.evo":"Evo","nav.otros":"Andere Codes","nav.guia":"Leitfaden","nav.tutoriales":"Tutorials","nav.descargas":"Downloads","nav.comunidad":"Gemeinschaft ⚔️","nav.guia_script":"MGG Script-Guide","home.search_placeholder":"Name oder Code...","home.sort_az":"Name A-Z","home.sort_za":"Name Z-A","home.sort_code_asc":"Code Aufst.","home.sort_code_desc":"Code Abst.","home.sort_hp_desc":"M. Höchste LP","home.sort_atk_desc":"M. Höchster Angriff","home.sort_spd_desc":"M. Höchste Geschwindigkeit","home.show":"Anzeigen","home.hide":"Ausblenden","home.filtered":"Gefiltert","home.total_base":"Gesamtbasis","services.title":"Exklusive Dienste","services.subtitle":"Verbessern Sie Ihr Konto mit unseren spezialisierten Mutants: Genetic Gladiators-Diensten.","services.buy":"Erwerben","services.payment_methods":"Zahlungsarten","services.contact_us":"Kontakt","region.latam":"LATAM","region.usd":"USD","tip.label":"Tipp:","tip.text":"Um die Datensynchronisation sicherzustellen, wird empfohlen, sich über Facebook anzumelden oder Browser-Cookies/-Cache zu löschen (Inkognito-Modus).","footer.renovated":"Renovierte Version","footer.nav":"Navigation","footer.legal":"Rechtliche Hinweise","footer.terms":"AGB","footer.rights":"© 2026 Smith Luque. Alle Rechte vorbehalten.","footer.desc":"MGG Mutanten-Code-Datenbank für Game Guardian. Tutorials zum Lernen und Ressourcen zur Nutzung.","whatsapp.title":"WhatsApp-Gruppe","whatsapp.desc":"Treten Sie bei für Hilfe, Tipps und Austausch in der Gesellschaft.","whatsapp.btn":"Gruppe beitreten","stats.mutants":"Mutanten","stats.version":"Version","home.main_database":"Haupt-Datenbank","home.main_desc":"Vollständige Mutantenliste mit Schnellsuche, Genfiltern und automatischem Laden von Codes.","home.featured_mutants":"Hervorgehobene Neuigkeiten","home.explore_catalog":"Mutantenliste erkunden","home.reset_engine":"Zuchtrechner zurücksetzen","home.genetic_config":"Genetische Konfiguration","home.search_engine":"Suchmaschine","home.sort_filters":"Sortierfilter","home.no_results":"Keine Mutanten mit diesen Filtern gefunden.","home.hidden_results":"Ergebnisse ausgeblendet.","home.active":"Aktiv","home.total":"Gesamt","gene.dominant":"Dominant","gene.active":"Aktiv","gene.inactive":"Inaktiv","layout.by_author":"Von Smith Luque","layout.select_language":"SPRACHE AUSWÄHLEN","layout.active_support":"Aktive Gruppe","mutant.verified":"Verifiziert","mutant.extract_code":"Code Extrahieren","home.load_more_rem":"Mehr laden ({rem} verbleibend)","layout.color_theme":"Design Farbe","home.single_gene_only":"Nur 1 Gen (Monogenisch)","home.all_genes":"Alle Gene","home.announcement_title":"Wichtige Ankündigung","home.announcement_desc":"Ich entschuldige mich aufrichtig dafür, dass ich zuvor fehlerhafte Statistiken veröffentlicht habe. Das Problem wurde mit den korrekten Daten vollständig behoben. Wenn Sie weitere Fehler bemerken, kontaktieren Sie mich bitte.","home.names_language":"Sprache der Namen","profile.developer":"Full Stack Entwickler","profile.founder":"Gründer von Sistema Mutodex"}},k3={blue:{brand:"#2563eb",brand2:"#3b82f6"},green:{brand:"#14532d",brand2:"#15803d"},red:{brand:"#dc2626",brand2:"#ef4444"},pink:{brand:"#db2777",brand2:"#ec4899"},purple:{brand:"#7c3aed",brand2:"#8b5cf6"},white:{brand:"#d1d5db",brand2:"#ffffff"}},y3=({children:n})=>{const[s,l]=C.useState(()=>localStorage.getItem("user-color-theme")||"blue"),r=y=>{localStorage.setItem("user-color-theme",y),l(y)};C.useEffect(()=>{const y=k3[s];y&&(document.documentElement.style.setProperty("--blue-brand",y.brand),document.documentElement.style.setProperty("--blue-brand-2",y.brand2))},[s]);const[d,p]=C.useState(()=>{const y=localStorage.getItem("user-region"),G=localStorage.getItem("user-country-code"),v=!!localStorage.getItem("user-manual-force");let S=y||"LATAM";G==="PE"&&(S="LATAM");const T=G?g(G):1;return{region:S,countryCode:G||null,multiplier:T,isManual:v,detectedCountry:null}});C.useEffect(()=>{const y=localStorage.getItem("user-region"),G=localStorage.getItem("user-country-code"),v=!!localStorage.getItem("user-manual-force");G==="PE"&&y==="USD"&&!v&&(localStorage.setItem("user-region","LATAM"),p(S=>({...S,region:"LATAM"})))},[]);function g(y){const G=y.toUpperCase(),v=p0.find(S=>S.id.toUpperCase()===G);if(v)return v.rate;for(const[S,T]of Object.entries(ky))if(T.includes(G))return parseFloat(S);return yb.includes(G)?1.5:1}const b=async()=>{var y;try{const S=(y=(await(await fetch("https://ipapi.co/json/")).json()).country_code)==null?void 0:y.toUpperCase();if(!S)return;const T=yb.includes(S),N=S==="PE",L=g(S),E=localStorage.getItem("user-region");let V=T?"USD":"LATAM";E&&(N&&E==="USD"&&!localStorage.getItem("user-manual-force")?V="LATAM":V=E),p(K=>({...K,region:V,countryCode:K.isManual?K.countryCode:S,detectedCountry:S,multiplier:K.isManual?K.multiplier:L}))}catch(G){console.warn("IP Detection failed (reverting to default user region):",G instanceof Error?G.message:G)}};C.useEffect(()=>{b()},[]);const x=y=>{localStorage.setItem("user-region",y),localStorage.setItem("user-manual-force","true"),p(G=>({...G,region:y,isManual:!0}))},m=y=>{const G=y.toUpperCase(),v=g(G),T=["PE","MX","AR","CL","CO","BO","VE","EC","UY","PY","PA","PR","CR","HN","SV","NI","GT","DO","ES"].includes(G)?"LATAM":"USD";localStorage.setItem("user-region",T),localStorage.setItem("user-country-code",G),localStorage.setItem("user-manual-force","true"),p(N=>({...N,region:T,countryCode:G,multiplier:v,isManual:!0}))},f=()=>{localStorage.removeItem("user-region"),localStorage.removeItem("user-country-code"),localStorage.removeItem("user-manual-force"),p(y=>({...y,isManual:!1})),b()},_=(y,G)=>{let v=_3[d.region][y]||y;return G&&Object.entries(G).forEach(([S,T])=>{v=v.replace(`{${S}}`,String(T))}),v};return i.jsx(Jx.Provider,{value:{...d,colorTheme:s,setColorTheme:r,setRegion:x,setCountry:m,resetSelection:f,translate:_},children:n})},We=()=>{const n=C.useContext(Jx);if(n===void 0)throw new Error("useRegion must be used within a RegionProvider");return n},Wx=C.createContext(void 0),Qt=[{id:"cyber",name:"Rover (Cyber)",url:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_01_platinum.png"},{id:"zombie",name:"Zombi (Necro)",url:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_b_01_platinum.png"},{id:"warrior",name:"Gladiador (Sable)",url:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_01_platinum.png"},{id:"galaxy",name:"Emperador (Galáctico)",url:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_01_platinum.png"},{id:"beast",name:"Lobo (Zoomorfo)",url:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bd_01_platinum.png"},{id:"mythic",name:"Hechicera (Mítico)",url:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_af_01_platinum.png"}],Lf=[{id:"usr_master",username:"mgg_master",password:"password123",publicName:"MGG Master ⚔️",avatarUrl:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_01_platinum.png",bio:"Jugador competitivo de MGG. Apasionado por las estadísticas óptimas del laboratorio y GameGuardian.",createdAt:new Date(2026,1,15).toISOString(),status:"Moderador",level:8,xp:4500},{id:"usr_smith",username:"smith_luque",password:"password123",publicName:"Smith Luque 👑",avatarUrl:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_01_platinum.png",bio:"Desarrollador principal y creador de Mutodex MGG. ¡Bienvenidos a la nueva comunidad!",createdAt:new Date(2026,0,1).toISOString(),status:"Creador",level:10,xp:9999},{id:"usr_gladiador",username:"gladiador_x",password:"password123",publicName:"GladiadorX 🔥",avatarUrl:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_01_platinum.png",bio:"Buscando las mejores recetas de hibridación en la arena.",createdAt:new Date(2026,3,10).toISOString(),status:"Gladiador",level:3,xp:1200}],Ou=[{id:"comm_1",page:"descargas",userId:"usr_master",username:"mgg_master",publicName:"MGG Master ⚔️",avatarUrl:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_01_platinum.png",text:"¡Excelente sección de descargas! El emulador LDPlayer pre-configurado me funciona excelente para inyectar con GameGuardian. Súper recomendado.",createdAt:new Date(2026,5,1).toISOString(),replies:[{id:"rep_1",userId:"usr_smith",username:"smith_luque",publicName:"Smith Luque 👑",avatarUrl:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_bc_01_platinum.png",text:"¡Muchas gracias amigo! Trabajé bastante para simplificar los emuladores para la comunidad de MGG.",createdAt:new Date(2026,5,2).toISOString()}]},{id:"comm_2",page:"guia",userId:"usr_gladiador",username:"gladiador_x",publicName:"GladiadorX 🔥",avatarUrl:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_ae_01_platinum.png",text:"La guía detallada sobre cómo utilizar los códigos de mutantes me ahorró horas de prueba y error. El simulador está genial.",createdAt:new Date(2026,5,5).toISOString(),replies:[{id:"rep_2",userId:"usr_master",username:"mgg_master",publicName:"MGG Master ⚔️",avatarUrl:"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_01_platinum.png",text:"¡Totalmente de acuerdo! Entender la estructura de los genes te evita crasheos repentinos del juego.",createdAt:new Date(2026,5,6).toISOString()}]}],Hf=()=>"",Ci=n=>{const s=n.toLowerCase().trim(),l=localStorage.getItem(`mgg_profile_${s}`);if(l)try{return JSON.parse(l)}catch{return null}return null},vr=(n,s)=>{const l=n.toLowerCase().trim();localStorage.setItem(`mgg_profile_${l}`,JSON.stringify(s))},Nn=n=>{const s=n.toLowerCase().trim(),l=localStorage.getItem(`mgg_saved_mutants_${s}`);if(l)try{return JSON.parse(l)}catch{return[]}return[]},v3=(n,s)=>{const l=n.toLowerCase().trim();localStorage.setItem(`mgg_saved_mutants_${l}`,JSON.stringify(s))},G3=({children:n})=>{const[s,l]=C.useState([]),[r,d]=C.useState([]),[p,g]=C.useState(null),[b,x]=C.useState(!0),[m,f]=C.useState(null),_="";C.useEffect(()=>{x(!0),f("La URL o la Anon Click Key de Supabase no están configuradas en .env. Usando base de datos interna local."),l(Lf),localStorage.setItem("mgg_com_users",JSON.stringify(Lf));const Z=localStorage.getItem("mgg_com_comments");if(Z)try{d(JSON.parse(Z))}catch{d(Ou)}else d(Ou),localStorage.setItem("mgg_com_comments",JSON.stringify(Ou));const ae=localStorage.getItem("mgg_com_active_user");if(ae)try{const ee=JSON.parse(ae),Q=Ci(ee.username),ie={...ee,publicName:(Q==null?void 0:Q.publicName)||ee.publicName,avatarUrl:(Q==null?void 0:Q.avatarUrl)||ee.avatarUrl,bio:(Q==null?void 0:Q.bio)||ee.bio,selectedTitle:(Q==null?void 0:Q.selectedTitle)||ee.selectedTitle||"Recluta de la Arena",savedMutants:Nn(ee.username)};g(ie)}catch{g(null)}},[]);const y=Z=>{l(Z),localStorage.setItem("mgg_com_users",JSON.stringify(Z))},G=Z=>{d(Z),localStorage.setItem("mgg_com_comments",JSON.stringify(Z))},v=async(Z,ae)=>{const ee=Z.trim(),Q=ae?ae.trim():"password123";if(!ee)return{success:!1,error:"profile.error_empty_username"};if(!b)try{const ne=Hf(),se=await fetch(`${ne}/usuarios?nombre=eq.${encodeURIComponent(ee)}`,{method:"GET",headers:{apikey:_,Authorization:`Bearer ${_}`,"Content-Type":"application/json",Accept:"application/json"}});if(!se.ok)throw new Error("Supabase no responde correctamente.");const A=await se.json();if(Array.isArray(A)&&A.length>0){const P=A[0];if(P.password&&P.password!==Q)return{success:!1,error:"profile.error_wrong_password"};const te=Ci(P.nombre),oe={id:"usr_"+P.nombre.toLowerCase().replace(/[^a-z0-9]/g,"_"),username:P.nombre,password:P.password,publicName:(te==null?void 0:te.publicName)||P.nombre,avatarUrl:(te==null?void 0:te.avatarUrl)||Qt[Math.abs([...P.nombre].reduce((de,me)=>de+me.charCodeAt(0),0))%Qt.length].url,bio:(te==null?void 0:te.bio)||"¡Hola! Soy un gladiador de la comunidad Mutodex MGG.",createdAt:(te==null?void 0:te.createdAt)||P.created_at||new Date().toISOString(),status:P.rango||"normal",level:Number(P.nivel)||1,xp:Number(P.exp)||0,selectedTitle:(te==null?void 0:te.selectedTitle)||"Recluta de la Arena",savedMutants:Nn(P.nombre)};g(oe),localStorage.setItem("mgg_com_active_user",JSON.stringify(oe));try{const de=await fetch(`${ne}/usuarios?select=*`,{method:"GET",headers:{apikey:_,Authorization:`Bearer ${_}`}});if(de.ok){const me=await de.json();if(Array.isArray(me)){const Ge=me.map(Me=>{const xe=Ci(Me.nombre);return{id:"usr_"+Me.nombre.toLowerCase().replace(/[^a-z0-9]/g,"_"),username:Me.nombre,password:Me.password,publicName:(xe==null?void 0:xe.publicName)||Me.nombre,avatarUrl:(xe==null?void 0:xe.avatarUrl)||Qt[Math.abs([...Me.nombre].reduce((Jt,wa)=>Jt+wa.charCodeAt(0),0))%Qt.length].url,bio:(xe==null?void 0:xe.bio)||"¡Hola! Soy un gladiador de la comunidad Mutodex MGG.",createdAt:(xe==null?void 0:xe.createdAt)||Me.created_at||new Date().toISOString(),status:Me.rango||"normal",level:Number(Me.nivel)||1,xp:Number(Me.exp)||0,selectedTitle:(xe==null?void 0:xe.selectedTitle)||"Recluta de la Arena",savedMutants:Nn(Me.nombre)}});l(Ge)}}}catch{}return{success:!0}}else return{success:!1,error:"profile.error_user_not_found"}}catch(ne){console.error("[Supabase Login Fail] Falling back to mock logins check:",ne)}const ie=ee.toLowerCase(),I=s.find(ne=>ne.username.toLowerCase()===ie);if(!I)return{success:!1,error:"profile.error_user_not_found"};if(I.password&&I.password!==Q)return{success:!1,error:"profile.error_wrong_password"};const W=Ci(I.username),O={...I,publicName:(W==null?void 0:W.publicName)||I.publicName,avatarUrl:(W==null?void 0:W.avatarUrl)||I.avatarUrl,bio:(W==null?void 0:W.bio)||I.bio,selectedTitle:(W==null?void 0:W.selectedTitle)||I.selectedTitle||"Recluta de la Arena",savedMutants:Nn(I.username)};return g(O),localStorage.setItem("mgg_com_active_user",JSON.stringify(O)),{success:!0}},S=async(Z,ae,ee,Q,ie)=>{const I=Z.trim(),W=ae?ae.trim():"password123",O=ee?ee.trim():I,ne=Q||Qt[0].url,se=ie?ie.trim():"¡Hola! Soy un gladiador de la comunidad Mutodex MGG.";if(!I)return{success:!1,error:"profile.error_empty_username"};const A=I.toLowerCase();if(!b)try{const de=Hf(),me=await fetch(`${de}/usuarios?nombre=eq.${encodeURIComponent(I)}`,{method:"GET",headers:{apikey:_,Authorization:`Bearer ${_}`}});if(me.ok){const Me=await me.json();if(Array.isArray(Me)&&Me.length>0)return{success:!1,error:"profile.error_user_exists"}}const Ge=await fetch(`${de}/usuarios`,{method:"POST",headers:{apikey:_,Authorization:`Bearer ${_}`,"Content-Type":"application/json",Prefer:"return=representation"},body:JSON.stringify({nombre:I,password:W,nivel:1,exp:0,rango:"normal"})});if(Ge.ok){vr(I,{publicName:O,avatarUrl:ne,bio:se,selectedTitle:"Recluta de la Arena"});const Me={id:"usr_"+A.replace(/[^a-z0-9]/g,"_"),username:I,password:W,publicName:O,avatarUrl:ne,bio:se,createdAt:new Date().toISOString(),status:"normal",level:1,xp:0,selectedTitle:"Recluta de la Arena",savedMutants:[]};g(Me),localStorage.setItem("mgg_com_active_user",JSON.stringify(Me));try{const xe=await fetch(`${de}/usuarios?select=*`,{method:"GET",headers:{apikey:_,Authorization:`Bearer ${_}`}});if(xe.ok){const Jt=await xe.json();if(Array.isArray(Jt)){const wa=Jt.map(dt=>{const et=Ci(dt.nombre);return{id:"usr_"+dt.nombre.toLowerCase().replace(/[^a-z0-9]/g,"_"),username:dt.nombre,password:dt.password,publicName:(et==null?void 0:et.publicName)||dt.nombre,avatarUrl:(et==null?void 0:et.avatarUrl)||Qt[Math.abs([...dt.nombre].reduce((ca,zs)=>ca+zs.charCodeAt(0),0))%Qt.length].url,bio:(et==null?void 0:et.bio)||"¡Hola! Soy un gladiador de la comunidad Mutodex MGG.",createdAt:(et==null?void 0:et.createdAt)||dt.created_at||new Date().toISOString(),status:dt.rango||"normal",level:Number(dt.nivel)||1,xp:Number(dt.exp)||0,selectedTitle:(et==null?void 0:et.selectedTitle)||"Recluta de la Arena",savedMutants:Nn(dt.nombre)}});l(wa)}}}catch{}return{success:!0}}else{const Me=await Ge.text();throw new Error(`Falla de inserción: ${Me}`)}}catch(de){console.error("[Supabase Register Fail] Falling back to Mock DB register:",de)}if(s.some(de=>de.username.toLowerCase()===A))return{success:!1,error:"profile.error_user_exists"};const te={id:"usr_"+Date.now(),username:I,password:W,publicName:O,avatarUrl:ne,bio:se,createdAt:new Date().toISOString(),status:"Miembro",level:1,xp:0,selectedTitle:"Recluta de la Arena",savedMutants:[]};vr(I,{publicName:O,avatarUrl:ne,bio:se,selectedTitle:"Recluta de la Arena"});const oe=[...s,te];return y(oe),g(te),localStorage.setItem("mgg_com_active_user",JSON.stringify(te)),{success:!0}},T=()=>{g(null),localStorage.removeItem("mgg_com_active_user")},N=(Z,ae,ee)=>{if(!p)return{success:!1,error:"unauthorized"};const Q={...p,publicName:Z.trim()||p.publicName,avatarUrl:ae||p.avatarUrl,bio:ee.trim()||p.bio};vr(p.username,{publicName:Q.publicName,avatarUrl:Q.avatarUrl,bio:Q.bio,selectedTitle:Q.selectedTitle});const ie=s.map(I=>I.username.toLowerCase()===p.username.toLowerCase()?Q:I);return y(ie),g(Q),localStorage.setItem("mgg_com_active_user",JSON.stringify(Q)),E(p.username,Q.publicName,Q.avatarUrl),{success:!0}},L=Z=>{if(!p)return{success:!1,error:"unauthorized"};vr(p.username,{publicName:Z.publicName,avatarUrl:Z.avatarUrl,bio:Z.bio,selectedTitle:Z.selectedTitle||"Recluta de la Arena"});const ae=s.map(ee=>ee.username.toLowerCase()===p.username.toLowerCase()?Z:ee);return y(ae),g(Z),localStorage.setItem("mgg_com_active_user",JSON.stringify(Z)),E(p.username,Z.publicName,Z.avatarUrl),{success:!0}},E=(Z,ae,ee)=>{const Q=r.map(ie=>{let I=!1,W=[...ie.replies],O={};return ie.username.toLowerCase()===Z.toLowerCase()&&(O={publicName:ae,avatarUrl:ee},I=!0),W=ie.replies.map(ne=>ne.username.toLowerCase()===Z.toLowerCase()?(I=!0,{...ne,publicName:ae,avatarUrl:ee}):ne),I?{...ie,...O,replies:W}:ie});G(Q)},V=(Z,ae)=>{if(!p)return;const Q=[{id:"comm_"+Date.now(),page:Z,userId:p.id,username:p.username,publicName:p.publicName,avatarUrl:p.avatarUrl,text:ae.trim(),createdAt:new Date().toISOString(),replies:[]},...r];G(Q)},K=(Z,ae)=>{if(!p)return;const ee=p.status==="Creador"||p.status==="Moderador"||p.status==="Admin"||p.status==="Editor"||p.status==="Administrador",Q=r.map(ie=>ie.id===Z&&(ie.userId===p.id||ee)?{...ie,text:ae.trim()}:ie);G(Q)},J=Z=>{if(!p)return;const ae=p.status==="Creador"||p.status==="Moderador"||p.status==="Admin"||p.status==="Editor"||p.status==="Administrador",ee=r.filter(Q=>Q.id===Z?!(Q.userId===p.id||ae):!0);G(ee)},R=(Z,ae)=>{if(!p)return;const ee={id:"rep_"+Date.now(),userId:p.id,username:p.username,publicName:p.publicName,avatarUrl:p.avatarUrl,text:ae.trim(),createdAt:new Date().toISOString()},Q=r.map(ie=>ie.id===Z?{...ie,replies:[...ie.replies,ee]}:ie);G(Q)},H=(Z,ae)=>{if(!p)return;const ee=p.status==="Creador"||p.status==="Moderador"||p.status==="Admin"||p.status==="Editor"||p.status==="Administrador",Q=r.map(ie=>ie.id===Z?{...ie,replies:ie.replies.filter(I=>I.id===ae?!(I.userId===p.id||ee):!0)}:ie);G(Q)},F=Z=>{if(!p)return;const ae=Nn(p.username);let ee;ae.includes(Z)?ee=ae.filter(I=>I!==Z):ee=[...ae,Z],v3(p.username,ee);const Q={...p,savedMutants:ee},ie=s.map(I=>I.username.toLowerCase()===p.username.toLowerCase()?Q:I);y(ie),g(Q),localStorage.setItem("mgg_com_active_user",JSON.stringify(Q))},B=Z=>p?Nn(p.username).includes(Z):!1;return i.jsx(Wx.Provider,{value:{currentUser:p,allUsers:s,comments:r,isDbMocked:b,supabaseError:m,login:v,signup:S,logout:T,updateProfile:N,updateAccount:L,addComment:V,editComment:K,deleteComment:J,addReply:R,deleteReply:H,toggleSaveMutant:F,isMutantSaved:B},children:n})},Rn=()=>{const n=C.useContext(Wx);if(n===void 0)throw new Error("useAuth must be used within an AuthProvider");return n},Of={"/":Yu,"/novedades":Md,"/servicios":qi,"/evo":fy,"/otros":Ku,"/guia":ws,"/tutoriales":Ar,"/descargas":Gd,"/comunidad":rn},vs={LATAM:{flag:"🇪🇸",label:"Español"},USD:{flag:"🇺🇸",label:"English"},PT:{flag:"🇵🇹",label:"Português"},FR:{flag:"🇫🇷",label:"Français"},DE:{flag:"🇩🇪",label:"Deutsch"}};function M3({children:n,currentPath:s,onNavigate:l,isOnline:r}){var H,F;const[d,p]=C.useState(!1),[g,b]=C.useState(!1),[x,m]=C.useState(!1),{region:f,setRegion:_,countryCode:y,setCountry:G,translate:v,colorTheme:S,setColorTheme:T}=We(),{currentUser:N,logout:L}=Rn(),E=f!=="LATAM"&&f!=="PT"?"https://chat.whatsapp.com/IdBIvXWUPNjDLcPmBvkp1B":Td,V=B=>{l(B),p(!1),window.scrollTo({top:0,behavior:"smooth"})},K="text-blue-brand-2",J="from-blue-brand to-blue-brand-2";return i.jsxs("div",{className:"min-h-screen",children:[i.jsx("div",{className:"grid-overlay"}),i.jsxs("header",{className:"site-header sticky top-0 z-50 transition-all duration-300",children:[i.jsx("div",{className:"absolute inset-0 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)] bg-[#050a14]/60"}),i.jsxs("div",{className:"mx-auto px-4 lg:px-8 header-inner relative flex items-center justify-between min-h-[64px] max-w-[1400px]",children:[i.jsxs("div",{className:"brand flex items-center gap-3 cursor-pointer group",onClick:()=>V("/"),children:[i.jsxs("div",{className:"relative",children:[i.jsx("div",{className:"absolute inset-0 blur-md opacity-0 group-hover:opacity-40 transition-opacity bg-blue-brand"}),i.jsx("div",{className:`brand-logo w-9 h-9 md:w-10 md:h-10 relative flex items-center justify-center rounded-lg md:rounded-xl bg-gradient-to-br ${J} overflow-hidden shadow-lg group-hover:scale-105 transition-transform shrink-0 border border-white/20`,children:i.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true",alt:"Logo MGG",className:"w-full h-full object-cover"})})]}),i.jsxs("div",{className:"flex flex-col text-left",children:[i.jsx("strong",{className:`block text-white text-[13px] md:text-[15px] font-black tracking-tight uppercase leading-none mb-0.5 group-hover:${K} transition-colors`,children:"Mutodex MGG"}),i.jsx("span",{className:`block text-[7px] md:text-[9px] ${K} uppercase tracking-[0.25em] font-black opacity-80`,children:v("layout.by_author")})]})]}),i.jsx("nav",{className:"hidden",children:Gu.map(B=>{const Z=Of[B.path]||Yu,ae=s===B.path,ee=B.key;return i.jsxs("button",{onClick:()=>V(B.path),className:`flex items-center gap-2 px-3 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all duration-300 relative group/btn ${ae?"bg-blue-brand/20 border-blue-brand text-white shadow-[0_2px_15px_rgba(37,99,235,0.25)]":"text-slate-400 border-transparent hover:bg-white/5 hover:text-white"}`,children:[i.jsx(Z,{size:14,className:`${ae?"text-blue-brand-2 animate-pulse":"text-slate-400 group-hover/btn:scale-110 transition-transform"}`}),i.jsx("span",{children:v(ee)})]},B.path)})}),i.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2 md:gap-3 shrink-0",children:[i.jsxs("div",{className:"hidden",children:[i.jsxs("span",{className:"text-[10px] text-slate-400 font-black uppercase tracking-wider mr-1",children:[v("layout.color_theme"),":"]}),["blue","green","red","pink","purple","white"].map(B=>{const Z=S===B,ae={blue:"bg-[#2563eb]",green:"bg-[#14532d]",red:"bg-[#dc2626]",pink:"bg-[#db2777]",purple:"bg-[#7c3aed]",white:"bg-white"};return i.jsx("button",{onClick:()=>T(B),title:B.toUpperCase(),className:`w-4.5 h-4.5 rounded-full ${ae[B]} transition-all duration-300 relative shrink-0 cursor-pointer ${Z?"scale-115 ring-2 ring-offset-2 ring-offset-[#050a14] ring-white shadow-lg":"opacity-60 hover:opacity-100 hover:scale-105"}`,children:Z&&i.jsx("span",{className:"absolute inset-0 m-auto w-1 h-1 rounded-full bg-[#050a14]"})},B)})]}),i.jsx("div",{className:"hidden sm:block relative",children:N?i.jsxs(i.Fragment,{children:[i.jsxs("button",{onClick:()=>m(!x),className:"flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer",children:[i.jsx("div",{className:"w-6 h-6 rounded-lg overflow-hidden border border-white/10 bg-[#0d162d]",children:i.jsx("img",{src:N.avatarUrl,alt:N.publicName,className:"w-full h-full object-cover"})}),i.jsx("span",{className:"hidden md:inline select-none truncate max-w-[100px]",children:N.publicName}),i.jsx("span",{className:"text-slate-500 text-[8px] opacity-60",children:"▼"})]}),i.jsx(ia,{children:x&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>m(!1)}),i.jsx(Qe.div,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.95},transition:{duration:.15},className:"absolute right-0 mt-2 w-40 rounded-2xl bg-[#091224] border border-white/10 shadow-2xl p-1.5 z-50 flex flex-col gap-1",children:i.jsxs("button",{onClick:()=>{m(!1),V("/perfil")},className:"flex items-center gap-2 w-full px-3 py-2 rounded-xl text-left text-xs font-black text-white hover:bg-white/5 uppercase tracking-wider transition-all cursor-pointer",children:[i.jsx(Ia,{size:13,className:K}),i.jsx("span",{children:"Mi Perfil"})]})})]})})]}):i.jsxs("button",{onClick:()=>V("/login"),className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer",children:[i.jsx(Ia,{size:14,className:"opacity-80"}),i.jsx("span",{children:"Iniciar sesión"})]})}),i.jsxs("div",{className:"relative",children:[i.jsxs("button",{onClick:()=>b(!g),className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer",children:[i.jsx("span",{className:"text-sm md:text-base",children:((H=vs[f])==null?void 0:H.flag)||"🇪🇸"}),i.jsx("span",{className:"hidden sm:inline",children:((F=vs[f])==null?void 0:F.label)||"Español"}),i.jsx("span",{className:"text-slate-500 text-[8px] opacity-60",children:"▼"})]}),i.jsx(ia,{children:g&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>b(!1)}),i.jsxs(Qe.div,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.95},transition:{duration:.15},className:"absolute right-0 mt-2 w-48 rounded-2xl bg-[#091224] border border-white/10 shadow-2xl p-2 z-50 flex flex-col gap-1",children:[i.jsx("span",{className:"text-[8px] text-slate-500 uppercase font-black tracking-widest block px-3 py-1.5 border-b border-white/5 mb-1",children:v("layout.select_language")}),Object.keys(vs).map(B=>{const Z=vs[B],ae=f===B;return i.jsxs("button",{onClick:()=>{_(B),b(!1)},className:`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-left text-[11px] font-black uppercase transition-all cursor-pointer ${ae?"bg-blue-brand/20 text-white border border-blue-brand/35 shadow-[0_2px_10px_rgba(37,99,235,0.2)]":"text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"}`,children:[i.jsx("span",{className:"text-sm leading-none",children:Z.flag}),i.jsx("span",{children:Z.label})]},B)})]})]})})]}),i.jsxs("button",{className:"w-11 h-11 flex flex-col items-center justify-center gap-1.5 border border-white/10 rounded-xl text-white bg-white/5 active:scale-95 transition-all relative overflow-hidden group",onClick:()=>p(!d),children:[i.jsx("div",{className:"absolute inset-0 bg-blue-brand opacity-0 group-active:opacity-10 transition-opacity"}),i.jsx(ia,{mode:"wait",children:d?i.jsx(Qe.div,{initial:{rotate:-90,opacity:0,scale:.5},animate:{rotate:0,opacity:1,scale:1},exit:{rotate:90,opacity:0,scale:.5},children:i.jsx(Qu,{size:22,className:"text-blue-brand-2"})},"x"):i.jsxs(Qe.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"flex flex-col gap-1.25 items-center justify-center",children:[i.jsx("span",{className:"w-5 h-0.5 bg-white rounded-full block"}),i.jsx("span",{className:"w-5 h-0.5 bg-blue-brand-2 rounded-full block"}),i.jsx("span",{className:"w-3 h-0.5 bg-white rounded-full block self-end"})]},"menu")})]})]})]})]}),i.jsx(ia,{children:d&&i.jsxs(i.Fragment,{children:[i.jsx(Qe.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>p(!1),className:"fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm"}),i.jsxs(Qe.nav,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:25,stiffness:200},className:"fixed top-0 right-0 bottom-0 w-[280px] md:w-[340px] z-[60] bg-[#050a14] border-l border-white/10 flex flex-col shadow-2xl shadow-blue-brand/20",children:[i.jsx("div",{className:"absolute inset-0 opacity-5 pointer-events-none bg-grid-slate-900/[0.1] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,white,transparent)]"}),i.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-brand to-transparent opacity-50"}),i.jsxs("header",{className:"flex items-center justify-between p-4 border-b border-white/10 relative z-10 bg-black/40",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-blue-brand/20 bg-[#0a1224] flex items-center justify-center shrink-0",children:i.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true",alt:"",className:"w-10 h-10 object-contain"})}),i.jsxs("div",{className:"flex flex-col gap-0.5",children:[i.jsx("strong",{className:"text-[13px] font-black uppercase text-white tracking-tight leading-none",children:"Sistema Mutodex"}),i.jsx("span",{className:"text-[8px] text-blue-brand-2 font-black uppercase tracking-[0.2em] opacity-80 leading-none mt-0.5",children:"v2.1.2 Build 550"})]})]}),i.jsx("button",{onClick:()=>p(!1),className:"w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 text-white/50 hover:text-white transition-colors active:scale-90",children:i.jsx(Qu,{size:18})})]}),i.jsxs("div",{className:"flex-1 overflow-y-auto p-5 flex flex-col gap-3.5 relative z-10 scrollbar-none",children:[i.jsx("div",{className:"pb-3 border-b border-white/5",children:N?i.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3.5 text-left",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"w-10 h-10 rounded-xl overflow-hidden border border-white/10 bg-[#0a1224] shrink-0",children:i.jsx("img",{src:N.avatarUrl,alt:"",className:"w-full h-full object-cover"})}),i.jsxs("div",{className:"flex flex-col min-w-0",children:[i.jsx("span",{className:"text-xs font-black text-white hover:underline leading-none",children:N.publicName}),i.jsxs("span",{className:"text-[9px] text-slate-500 font-mono mt-1",children:["@",N.username]})]})]}),i.jsx("div",{className:"pt-1.5",children:i.jsxs("button",{onClick:()=>{p(!1),V("/perfil")},className:"w-full py-2.5 px-4 text-center rounded-xl bg-blue-brand/10 hover:bg-blue-brand/20 text-blue-brand-2 text-xs font-black uppercase tracking-wider border border-blue-brand/15 cursor-pointer transition-all flex items-center justify-center gap-2",children:[i.jsx(Ia,{size:13,className:"shrink-0"}),i.jsx("span",{children:"Mi Perfil"})]})})]}):i.jsxs("div",{className:"p-4 rounded-2xl bg-gradient-to-br from-[#0c162d]/50 to-[#050a14] border border-blue-brand/10 space-y-3 text-left",children:[i.jsxs("div",{className:"space-y-1",children:[i.jsx("strong",{className:"text-white text-xs font-black uppercase tracking-wider block",children:"¿Sos un Gladiador?"}),i.jsx("p",{className:"text-[10px] text-slate-400 font-medium leading-relaxed",children:"Inicia sesión para tener perfil, comentar descargas, y debatir tácticas."})]}),i.jsx("button",{onClick:()=>{p(!1),V("/login")},className:"w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest cursor-pointer transition-all",children:"Iniciar Sesión"})]})}),i.jsx("div",{className:"space-y-2.5 pb-2",children:Gu.map((B,Z)=>{const ae=Of[B.path]||Yu,ee=s===B.path,Q=B.key;return i.jsxs(Qe.button,{initial:{opacity:0,x:25},animate:{opacity:1,x:0},transition:{delay:Z*.04,type:"spring",stiffness:150},onClick:()=>V(B.path),className:`flex items-center gap-4 w-full p-3.5 rounded-2xl text-[13px] md:text-sm font-black uppercase tracking-wider transition-all relative group border ${ee?"bg-blue-brand/20 text-white border-blue-brand shadow-[0_4px_25px_rgba(37,99,235,0.25)] scale-[1.02]":"bg-white/[0.03] text-slate-300 border-white/5 hover:bg-white/8 hover:text-white hover:scale-[1.01]"}`,children:[i.jsx("div",{className:`p-2 rounded-xl transition-all ${ee?"bg-blue-brand text-white shadow-md":"bg-white/5 group-hover:bg-white/10 group-hover:scale-105"}`,children:i.jsx(ae,{size:18})}),i.jsx("span",{className:"relative z-10 font-extrabold tracking-wide",children:v(Q)}),ee&&i.jsx("div",{className:"ml-auto w-1.5 h-4 bg-blue-brand-2 rounded-full shadow-[0_0_12px_#3b82f6]"})]},B.path)})}),i.jsxs("div",{className:"border-t border-white/10 pt-5 mt-3",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-3.5 px-2",children:[i.jsx(o0,{size:13,className:"text-blue-brand-2"}),i.jsx("span",{className:"text-[10px] text-slate-400 font-black uppercase tracking-[0.15em] leading-none",children:v("layout.select_language")})]}),i.jsx("div",{className:"bg-white/[0.02] border border-white/5 rounded-2xl p-1.5 grid grid-cols-2 gap-1.5",children:Object.keys(vs).map(B=>{const Z=vs[B],ae=f===B;return i.jsxs("button",{onClick:()=>{_(B)},className:`flex items-center gap-2 w-full py-2.5 px-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all duration-300 border active:scale-95 cursor-pointer relative group ${ae?"border-blue-brand/50 text-blue-400 bg-blue-brand/10 shadow-[0_0_12px_rgba(37,99,235,0.35)]":"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white"}`,children:[i.jsx("span",{className:"text-xs shrink-0",children:Z.flag}),i.jsx("span",{className:"font-extrabold relative z-10 truncate",children:Z.label})]},B)})})]}),i.jsxs("div",{className:"border-t border-white/10 pt-5 mt-3",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-3.5 px-2",children:[i.jsx(l0,{size:13,className:"text-blue-brand-2 animate-pulse"}),i.jsx("span",{className:"text-[10px] text-slate-400 font-black uppercase tracking-[0.15em] leading-none",children:v("layout.color_theme")})]}),i.jsx("div",{className:"bg-white/[0.02] border border-white/5 rounded-2xl p-2 grid grid-cols-2 gap-2",children:["blue","green","red","pink","purple","white"].map(B=>{const Z=S===B,ee={blue:{label:"BLUE",dotBg:"bg-[#2563eb]",activeStyle:"border-[#2563eb]/50 text-blue-400 bg-[#2563eb]/10 shadow-[0_0_12px_rgba(37,99,235,0.35)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#2563eb]"},green:{label:"GREEN",dotBg:"bg-[#15803d]",activeStyle:"border-[#15803d]/60 text-green-400 bg-[#15803d]/15 shadow-[0_0_12px_rgba(21,128,61,0.4)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#15803d]"},red:{label:"RED",dotBg:"bg-[#dc2626]",activeStyle:"border-[#dc2626]/50 text-red-400 bg-[#dc2626]/10 shadow-[0_0_12px_rgba(220,38,38,0.4)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#dc2626]"},pink:{label:"PINK",dotBg:"bg-[#db2777]",activeStyle:"border-[#db2777]/50 text-pink-400 bg-[#db2777]/10 shadow-[0_0_12px_rgba(219,39,119,0.35)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#db2777]"},purple:{label:"PURPLE",dotBg:"bg-[#7c3aed]",activeStyle:"border-[#7c3aed]/50 text-purple-400 bg-[#7c3aed]/10 shadow-[0_0_12px_rgba(124,58,237,0.35)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-[#7c3aed]"},white:{label:"WHITE",dotBg:"bg-white",activeStyle:"border-white/30 text-white bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.25)] scale-[1.02]",inactiveStyle:"border-white/5 bg-white/[0.02] text-slate-400 hover:text-white",glowBg:"bg-white"}}[B];return i.jsxs("button",{onClick:()=>T(B),className:`flex items-center gap-2.5 w-full py-3 px-3 rounded-[14px] text-[10px] font-black uppercase tracking-wider transition-all duration-300 border active:scale-95 cursor-pointer relative group ${Z?ee.activeStyle:ee.inactiveStyle}`,children:[i.jsxs("div",{className:"relative flex items-center justify-center shrink-0 w-4 h-4",children:[Z&&i.jsx(Qe.div,{layoutId:`dot-glow-${B}`,className:`absolute -inset-0.5 rounded-full blur-sm opacity-50 ${ee.glowBg}`}),i.jsx("div",{className:`w-3.5 h-3.5 rounded-full ${ee.dotBg} border border-white/15 relative z-10 transition-transform group-hover:scale-110 shadow-inner`})]}),i.jsx("span",{className:`font-black relative z-10 transition-colors ${Z?"text-white":"text-slate-400 group-hover:text-white"}`,children:ee.label}),Z&&i.jsx("div",{className:"ml-auto flex items-center shrink-0",children:i.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${ee.glowBg} animate-pulse relative`})})]},B)})})]}),i.jsx("div",{className:"border-t border-white/10 pt-5 mt-3",children:i.jsxs("a",{href:E,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between p-4 rounded-2xl bg-[#25d366]/10 border border-[#25d366]/30 text-white hover:bg-[#25d366]/15 transition-all group scale-[1] active:scale-95",children:[i.jsxs("div",{className:"flex items-center gap-3.5",children:[i.jsx("div",{className:"p-2.5 rounded-xl bg-[#25d366] text-white shadow-[0_0_12px_rgba(37,211,102,0.35)] shrink-0",children:i.jsx(rn,{size:16})}),i.jsxs("div",{className:"flex flex-col text-left",children:[i.jsx("span",{className:"text-[11px] font-black uppercase text-[#25d366] tracking-wider leading-none mb-1",children:v("layout.active_support")}),i.jsx("span",{className:"text-[10px] text-slate-300 font-bold leading-tight",children:v("whatsapp.title")})]})]}),i.jsx("div",{className:"flex items-center justify-center w-6 h-6 rounded-full bg-[#25d366]/15 group-hover:translate-x-0.5 transition-transform shrink-0",children:i.jsx("span",{className:"text-[#25d366] text-xs font-black",children:"→"})})]})})]}),i.jsx("div",{className:"p-4 border-t border-white/10 relative z-10 bg-black/50",children:i.jsxs("div",{className:"flex flex-col gap-2",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{className:"text-[7px] text-slate-600 uppercase font-black tracking-widest leading-none",children:"Powered by"}),i.jsx("strong",{className:"text-blue-brand-2 text-[9px] uppercase font-black tracking-wider leading-none",children:"Smith Luque"})]}),i.jsx("div",{className:"w-full h-0.5 bg-white/5 rounded-full overflow-hidden",children:i.jsx(Qe.div,{initial:{width:0},animate:{width:"100%"},transition:{duration:1.5,ease:"easeInOut"},className:"h-full bg-blue-brand"})})]})})]})]})}),i.jsx("main",{className:"app-shell pb-20 pt-4 lg:pt-6",children:i.jsxs("div",{className:"container mx-auto px-4 max-w-[1180px]",children:[i.jsxs("section",{className:"panel mb-6 !p-0 overflow-hidden flex flex-col lg:flex-row items-stretch border transition-all duration-500 bg-blue-brand/5 border-blue-brand/20",children:[i.jsxs("div",{className:"flex items-center gap-6 px-5 py-3 border-b lg:border-b-0 lg:border-r border-white/5 bg-black/20 shrink-0",children:[i.jsxs("div",{className:"flex flex-col",children:[i.jsx("span",{className:`text-[10px] font-black uppercase tracking-widest leading-none mb-1 ${K}`,children:v("stats.mutants")}),i.jsx("strong",{className:"text-white text-sm font-black",children:"550+"})]}),i.jsxs("div",{className:"flex flex-col border-l border-white/10 pl-4",children:[i.jsx("span",{className:`text-[10px] font-black uppercase tracking-widest leading-none mb-1 ${K}`,children:v("stats.version")}),i.jsx("strong",{className:"text-white/80 text-sm font-black",children:"2.1.2"})]})]}),i.jsxs("div",{className:"flex-1 flex items-center gap-3 px-5 py-3 min-h-[50px]",children:[i.jsx("div",{className:"w-2 h-2 rounded-full animate-pulse shrink-0 bg-blue-brand mt-0.5 self-start md:self-center"}),i.jsxs("p",{className:"text-[10px] md:text-xs text-slate-300 font-bold m-0 italic leading-relaxed",children:[i.jsx("span",{className:`${K} uppercase mr-2 opacity-70 whitespace-nowrap`,children:v("tip.label")}),v("tip.text")]})]}),i.jsx("div",{className:"hidden xl:flex items-center gap-2 px-5 py-3 bg-black/10 shrink-0",children:i.jsxs("a",{href:E,target:"_blank",rel:"noopener noreferrer",className:"text-[10px] font-black uppercase flex items-center gap-2 hover:brightness-125 transition-all text-green-brand",children:[i.jsx("div",{className:"w-1.5 h-1.5 rounded-full animate-ping bg-green-brand"}),v("layout.active_support")]})})]}),n,i.jsx("section",{className:"panel mt-[18px] transition-all duration-500",children:i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3.5",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"m-0 mb-1.5 text-lg font-bold",children:v("whatsapp.title")}),i.jsx("p",{className:"text-muted m-0 text-sm",children:v("whatsapp.desc")})]}),i.jsxs("a",{className:"btn px-6 btn-primary",target:"_blank",rel:"noopener noreferrer",href:E,children:[i.jsx(rn,{size:18}),i.jsx("span",{children:v("whatsapp.btn")})]})]})})]})}),i.jsx("footer",{className:"site-footer border-t border-line bg-black/35 py-11",children:i.jsxs("div",{className:"container mx-auto px-4 max-w-[1180px] grid lg:grid-cols-[1.2fr_1fr_0.8fr] gap-6",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"brand flex items-center gap-3.5 mb-3",children:[i.jsx("div",{className:`brand-logo w-11 h-11 flex items-center justify-center rounded-[14px] bg-gradient-to-br ${J} overflow-hidden shadow-lg`,children:i.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true",alt:"Logo MGG",className:"w-full h-full object-cover"})}),i.jsxs("div",{children:[i.jsx("strong",{className:"block text-white uppercase tracking-tight",children:"Mutodex MGG"}),i.jsx("span",{className:`block text-[11px] ${K} uppercase tracking-[0.22em] font-bold`,children:v("footer.renovated")})]})]}),i.jsx("p",{className:"text-muted text-sm",children:v("footer.desc")})]}),i.jsxs("div",{children:[i.jsx("div",{className:"kv-label mb-3",children:v("footer.nav")}),i.jsx("div",{className:"grid gap-2",children:Gu.map(B=>i.jsx("button",{onClick:()=>V(B.path),className:`text-slate-300 hover:text-white text-sm text-left flex items-center gap-2 transition-colors ${s===B.path?K:""}`,children:v(B.key)},B.path))})]}),i.jsxs("div",{children:[i.jsx("div",{className:"kv-label mb-1.5",children:v("footer.legal")}),i.jsxs("div",{className:"flex flex-col gap-2",children:[i.jsx("button",{onClick:()=>V("/terminos"),className:"text-slate-400 hover:text-white text-xs text-left transition-colors",children:v("footer.terms")}),i.jsx("p",{className:"text-muted text-[11px] m-0 leading-relaxed mt-2",children:v("footer.rights")})]})]})]})})]})}const A3=`1. Robot
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
`,T3=`141. El Fontanero
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
`,j3=`281. Asaylan
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
`,S3=`421. Oculys
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
 */const Gr={vida:"https://pokradex.org/MutantsGG/assets/icon_hp.png",velocidad:"https://pokradex.org/MutantsGG/assets/icon_speed.png"};function Bf(n){const s=n.split("|").map(b=>b.trim()),l=s[0]||"",r=s.find(b=>b.toLowerCase().includes("triple:")),d=r?r.toLowerCase().includes("sí"):l.toLowerCase().includes("x3"),p=s.find(b=>b.toLowerCase().includes("icono:")),g=p?p.replace(/icono:/i,"").trim():"";return{valor:l,es_triple:d,icono:g}}function I3(n){const s=n.split("|").map(p=>p.trim()),l=s[0]||"",r=s.find(p=>p.toLowerCase().includes("icono:")),d=r?r.replace(/icono:/i,"").trim():"";return{valor:l,icono:d}}const w3=["a_01","a_02","aa_01","aa_02","ab_01","ab_02","ab_03","ac_01","ac_02","ac_03","ad_01","ad_02","ae_01","ae_02","af_01","af_02","b_01","b_02","b_03","ba_01","ba_02","bb_01","bb_02","bc_01","bc_02","bd_01","bd_02","be_01","be_02","be_03","bf_01","bf_02","c_01","c_02","ca_01","ca_02","ca_03","cb_01","cb_02","cc_01","cc_02","cd_01","cd_02","cd_03","ce_01","ce_03","cf_01","cf_02","d_01","da_01","da_02","db_01","db_02","db_03","dc_01","dc_02","dc_03","dd_01","dd_02","de_01","de_02","df_01","df_02","e_01","ea_01","ea_02","ea_03","eb_01","eb_02","eb_03","ec_01","ec_02","ed_01","ed_02","ee_01","ee_02","ee_03","ef_01","ef_02","ef_03","f_01","f_03","fa_01","fa_02","fb_01","fb_02","fb_03","fc_01","fc_02","fd_01","fd_02","fd_03","fe_01","fe_02","ff_01","ff_02","fc_03","cb_03","ba_03","ff_03","bb_03","de_03","da_03","bf_03","cd_04","dc_04","aa_03","d_03","ec_03","bc_03","ad_03","af_04","ae_03","fb_04","bd_03","cf_04","ce_02","dd_03","cc_03","df_03","ed_03","af_03","bc_04","db_04","fa_03","fe_04","fe_03","a_03","cf_03","de_04","ba_04","cb_04","fd_04","fc_04","fa_04","bf_04","fe_05","ca_04","df_04","ed_04","ac_04","eb_04","de_05","bf_05","c_03","ec_04","ef_04","ff_04","ad_04","cc_04","ab_04","ce_04","bd_99","bb_04","aa_04","ae_04","cb_05","af_05","da_04","bd_04","fc_05","ee_04","dd_04","be_04","ea_04","ef_05","df_99","fb_05","eb_05","ca_05","ac_05","ab_05","aa_05","fa_05","fe_99","ce_05","e_03","cc_05","da_05","df_05","db_05","bc_05","dc_05","ed_05","ec_05","fd_05","ec_06","ff_05","be_05","ad_05","bd_05","dd_05","da_06","cf_05","bb_05","cf_06","cd_05","ea_05","af_06","ae_05","ee_05","ba_05","ce_06","fb_06","bc_06","fd_06","dc_06","ed_06","fa_06","bf_06","ad_06","cd_06","db_06","ac_06","fe_06","eb_06","ea_06","be_06","b_04","ab_06","ef_06","fc_06","df_06","cb_06","dd_06","de_06","ca_06","ff_06","bd_06","af_07","cf_07","ae_06","ba_06","ec_07","ed_07","bd_07","db_07","da_07","fe_07","ab_07","df_07","bf_07","ee_06","aa_06","ce_07","cc_06","cc_07","fc_07","ba_07","f_04","fd_07","ef_07","ad_07","ac_07","ca_07","fb_07","fa_07","de_07","cb_07","bc_07","cd_07","ea_07","ee_07","be_07","dd_07","eb_07","ec_08","cf_08","bc_08","ac_08","dd_08","de_08","fc_08","ae_07","db_08","af_08","fa_08","ff_07","bb_06","ef_08","da_08","cb_08","ea_08","fb_08","bf_08","ad_08","fc_09","ce_08","ba_08","ae_08","bd_08","fa_99","eb_99","cd_08","dc_07","ed_08","fd_08","ca_08","df_08","eb_08","cf_09","ad_09","dc_08","bb_07","aa_07","ac_09","bd_09","ff_08","ee_08","be_08","aa_08","ca_09","eb_09","df_09","fe_08","bb_08","ec_09","de_09","ab_08","be_09","ca_10","ea_09","cc_08","bf_09","cc_09","ae_09","cd_09","da_09","fd_09","af_09","a_05","ea_10","dd_09","fd_10","ab_09","ac_10","df_10","bc_09","af_10","bb_09","de_10","cb_09","db_09","dc_09","fe_09","ba_09","bf_10","fa_09","aa_09","cf_10","ce_09","ef_09","da_10","ee_09","ff_09","fb_10","ed_09","fb_09","ef_10","ed_10","cb_10","ae_10","dc_10","bd_10","fe_10","fa_10","cd_10","ad_10","fc_10","bb_10","af_99","bc_10","ce_99","dd_10","aa_10","ba_10","cc_10","db_10","ec_10","eb_10","ab_10","be_10","ce_10","eb_11","ff_10","db_11","fc_99","ee_10","ac_11","bd_11","fa_11","af_11","ce_11","ca_11","cd_11","fb_11","da_11","ed_11","aa_11","bb_11","ef_99","fd_11","cb_11","bf_11","de_11","ae_11","ec_11","dc_11","ba_11","ff_11","df_11","b_05","ee_99","fc_11","cf_11","cc_11","c_05","fb_12","ad_11","dd_11","be_11","fe_11","ac_12","ea_11","ca_99","ab_11","ee_11","ef_12","bc_11","bb_12","de_12","e_12","d_12","af_12","df_12","cf_12","cb_12","fa_12","dd_12","ef_11","fc_12","ff_12","ed_12","ca_12","db_12","ec_12","cd_12","ed_99","eb_12","fd_12","f_13","ab_12","bc_12","aa_12","fe_12","bf_12","c_13","ae_12","ce_12","be_12","fe_13","da_12","dc_12","f_12","ad_12","b_12","d_13","bd_12","aa_99","cf_13","ea_12","b_13","bf_13","dd_13","ee_12","ad_13","fa_13","da_13","ca_13","bc_13","de_13","ba_12","a_13","ef_13","cb_13","eb_13","ab_99","ae_13","cf_99","bb_13","fd_13","cc_12","bc_14","e_13","dc_13","ac_13","fe_14","fc_13","ef_14","cc_13","ff_13","ae_14","aa_13","cd_13","cb_14","ba_13","dc_14","df_13","ca_14","db_13","ae_99","ac_14","af_13","db_14","ec_13","ce_13","ea_13","ea_99","af_14","ff_14","dd_14","fd_14","fb_13","ab_13","ed_13","bd_14","da_14","c_14","ed_14","de_14","a_14","ee_13","ff_99","f_14","fb_14","bd_13","cd_14","cc_14","b_14","ab_14","be_13","ea_14","ba_14","cf_14","de_15","ad_14","ab_15","e_14","bf_14","be_15","ce_14","ea_15","d_14","dd_15"],N3={};w3.forEach((n,s)=>{N3[n.toLowerCase()]=s+1});const Cs=[];function E3(n){const s=n.match(/specimen_([a-zA-Z0-9_]+)/);if(!s)return"";const l=s[1].toLowerCase().split("_");return l.length>=2?`${l[0]}_${l[1]}`:l[0]||""}function V3(){if(Cs.length>0)return;[A3,T3,j3,S3].forEach(s=>{const l=s.split(/\r?\n/);let r=null;for(const d of l){const p=d.trim();if(!p)continue;const g=p.match(/^(\d+)\.\s*(.+)$/);if(g){r&&Uf(r),r={id:g[1],nombre:g[2],imagen:"",vida:"",velocidad:"",ataque1:"",ataque2:"",habilidad:""};continue}r&&(p.startsWith("Imagen mutante:")?r.imagen=p.replace("Imagen mutante:","").trim():p.startsWith("Vida:")?r.vida=p.replace("Vida:","").trim():p.startsWith("Velocidad:")?r.velocidad=p.replace("Velocidad:","").trim():p.startsWith("Ataque 1:")?r.ataque1=p.replace("Ataque 1:","").trim():p.startsWith("Ataque 2:")?r.ataque2=p.replace("Ataque 2:","").trim():p.startsWith("Habilidad:")&&(r.habilidad=p.replace("Habilidad:","").trim()))}r&&Uf(r)}),Cs.sort((s,l)=>parseInt(s.id,10)-parseInt(l.id,10))}function Uf(n){const s=E3(n.imagen);let l=s.split("_")[0].split("");(l.length===0||!l[0])&&(l=["n"]);const r=[...l].sort().join(""),d=Rr.find(N=>N.id===l[0]),p=Rr.find(N=>N.id===l[1])||d,g=(d==null?void 0:d.image)||"",b=(p==null?void 0:p.image)||g,x=Bf(n.ataque1||""),m=Bf(n.ataque2||""),f=I3(n.habilidad||""),_=parseFloat(n.vida.replace(/,/g,""))||0,y=parseFloat(n.velocidad)||0,G=x.valor.toLowerCase().replace(/x\s*3/g,"").replace(/,/g,"").trim(),v=parseFloat(G)||0,S=f.valor.toLowerCase().replace(/,/g,"").trim(),T=parseFloat(S)||0;Cs.push({id:n.id,nombre:n.nombre,imagen:n.imagen,vida:n.vida,velocidad:n.velocidad,ataques:[x,m],habilidad:f,tipoIcono:g,skinIcono:b,codigo:s.toUpperCase(),genes:l,sortedGenes:r,stats:{hp:_,atk:v,spd:y,def:T,hab:T}})}V3();/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function C3(n){const s=String(n||"").split("_")[0].toLowerCase().split(""),l=Ms[s[0]]||Ms.n,r=Ms[s[1]]||Ms[s[0]]||Ms.n;return[l[0],r[1]||r[0]]}function D3(n,s){const[l,r]=C3(s),d=String(n||s||"?").replace(/[^A-Za-zÁÉÍÓÚÜÑ0-9 ]/g," ").split(/\s+/).filter(Boolean).slice(0,2).map(b=>b[0]).join("").toUpperCase()||"MG",p=String(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;"),g=`
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
  </svg>`;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(g)}`}function Gs(n){return Number(n).toLocaleString("es-PE",{minimumFractionDigits:0,maximumFractionDigits:2})}const tp=({mutant:n})=>{var V,K,J,R;const{translate:s}=We(),{currentUser:l,toggleSaveMutant:r,isMutantSaved:d}=Rn(),[p,g]=C.useState(!1),b=d(n.id),x=n.codigo.split("_")[0].toLowerCase().split(""),m=x.map(H=>Rr.find(F=>F.id===H)).filter(Boolean),f=()=>{navigator.clipboard.writeText(n.codigo.toUpperCase()).catch(()=>{}),g(!0),setTimeout(()=>g(!1),2e3)},_=n.ataques[0],y=n.ataques[1]||n.ataques[0],G=(_==null?void 0:_.es_triple)||(_==null?void 0:_.valor.toLowerCase().includes("x3")),v=(y==null?void 0:y.es_triple)||(y==null?void 0:y.valor.toLowerCase().includes("x3")),S=H=>H?H.toLowerCase().replace(/\s*x3/g,"").toUpperCase():"1,500",T=n.fallbackImagen||D3(n.nombre,n.codigo),N=n.nombre.replace(/^#\d+\s*/i,"").replace(/^\d+\.\s*/i,""),L=x[0]||"n",E=Ms[L]||["#64748b","#334155"];return i.jsxs(i.Fragment,{children:[i.jsxs("article",{className:"group relative flex sm:hidden w-full items-stretch bg-[#080f1d] border border-white/[0.06] hover:border-blue-500/30 rounded-[22px] overflow-hidden shadow-2xl transition-all duration-300",children:[i.jsx("button",{onClick:H=>{if(H.stopPropagation(),!l){window.location.hash="/login?fav=true";return}r(n.id)},className:`absolute top-2 right-2 z-35 p-2 rounded-xl border transition-all cursor-pointer ${b?"bg-blue-500/20 text-blue-400 border-blue-500/40 shadow-md scale-102":"bg-black/50 text-slate-400 hover:text-white border-white/10 active:scale-95"}`,title:b?"Quitar de favoritos":"Guardar en favoritos",children:i.jsx(oa,{size:13,className:b?"fill-current":""})}),i.jsx("div",{className:"absolute inset-0 opacity-[0.02] pointer-events-none transition-opacity duration-300 group-hover:opacity-[0.05]",style:{background:`radial-gradient(circle at center, ${E[0]}, transparent 70%)`}}),i.jsxs("div",{className:"relative w-[120px] xs:w-[135px] shrink-0 flex items-center justify-center p-3 overflow-hidden bg-gradient-to-b from-[#111d35] to-[#080f1d] border-r border-white/[0.04]",children:[i.jsx("div",{className:"absolute inset-0 opacity-25 pointer-events-none",style:{background:`radial-gradient(ellipse at 50% 0%, ${E[0]}50, transparent 75%)`}}),i.jsx("img",{className:"mutant-thumb max-w-[85%] max-h-[85%] object-contain transition-transform duration-300 group-hover:scale-105",src:n.imagen,alt:N,loading:"lazy",onError:H=>{const F=H.currentTarget;F.src=T,F.onerror=null}}),i.jsx("div",{className:"absolute top-2.5 left-2.5 flex flex-row gap-2 z-20",children:m.map((H,F)=>i.jsx("div",{className:"w-[30px] h-[30px] xs:w-[34px] xs:h-[34px] rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center",children:i.jsx("img",{src:H==null?void 0:H.image,alt:H==null?void 0:H.name,className:"w-[82%] h-[82%] object-contain text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"})},F))})]}),i.jsxs("div",{className:"flex-1 p-3 flex flex-col justify-between gap-1.5 text-left min-w-0",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"m-0 text-[13px] font-black text-white uppercase tracking-tight leading-none truncate pr-1",children:N}),i.jsxs("div",{className:"flex items-center gap-1.5 mt-1",children:[i.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:E[0],boxShadow:`0 0 6px ${E[0]}a0`}}),i.jsx("span",{className:"font-mono font-bold text-[9px] uppercase text-slate-400 tracking-wider",children:n.codigo})]})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-1 px-0.5",children:[i.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[i.jsx("img",{src:Gr.vida,alt:"HP",className:"w-[13px] h-[13px] object-contain shrink-0"}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:"HP"}),i.jsx("span",{className:"text-white font-mono font-black text-[9.5px] leading-tight block select-all truncate",children:n.vida})]})]}),i.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[i.jsx("img",{src:Gr.velocidad,alt:"SPD",className:"w-[13px] h-[13px] object-contain shrink-0"}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:"SPD"}),i.jsx("span",{className:"text-white font-mono font-black text-[9.5px] leading-tight block select-all truncate",children:n.velocidad})]})]}),i.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[i.jsx("img",{src:(_==null?void 0:_.icono)||n.tipoIcono,alt:"AT",className:"w-[13px] h-[13px] object-contain shrink-0"}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsxs("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:["AT1",G&&i.jsx("span",{className:"text-amber-500 font-extrabold ml-0.5 text-[6px]",children:"x3"})]}),i.jsx("span",{className:`font-mono font-black text-[9.5px] leading-tight block select-all truncate ${G?"text-amber-400":"text-white"}`,children:S(_==null?void 0:_.valor)})]})]}),i.jsxs("div",{className:"bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center gap-1.5",children:[i.jsx("img",{src:(y==null?void 0:y.icono)||n.skinIcono,alt:"AT",className:"w-[13px] h-[13px] object-contain shrink-0"}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsxs("span",{className:"block text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:["AT2",v&&i.jsx("span",{className:"text-amber-500 font-extrabold ml-0.5 text-[6px]",children:"x3"})]}),i.jsx("span",{className:`font-mono font-black text-[9.5px] leading-tight block select-all truncate ${v?"text-amber-400":"text-white"}`,children:S(y==null?void 0:y.valor)})]})]}),i.jsxs("div",{className:"col-span-2 bg-[#0b1325]/90 border border-white/[0.03] rounded-lg py-1 px-1.5 flex items-center justify-between gap-1.5",children:[i.jsxs("div",{className:"flex items-center gap-1 min-w-0",children:[i.jsx("img",{src:((V=n.habilidad)==null?void 0:V.icono)||"https://pokradex.org/MutantsGG/assets/ability_shield_big.png",alt:"DEF",className:"w-[13px] h-[13px] object-contain shrink-0"}),i.jsx("span",{className:"text-[7px] font-black uppercase tracking-wider text-slate-500 leading-none",children:"DEF / HAB"})]}),i.jsx("span",{className:"text-white font-mono font-black text-[9.5px] leading-none select-all truncate pr-1",children:((K=n.habilidad)==null?void 0:K.valor)||"1,000"})]})]}),i.jsx("button",{onClick:f,className:`w-full py-1.5 text-[8px] font-black uppercase tracking-[0.14em] transition-all flex items-center justify-center gap-1.5 border leading-none ${p?"bg-green-500/10 border-green-500/20 text-green-400":"bg-transparent border-white/[0.08] text-white active:scale-[0.97]"}`,style:{borderRadius:"100px"},children:p?i.jsxs(i.Fragment,{children:[i.jsx(on,{size:10,className:"shrink-0 text-green-400 animate-bounce"}),i.jsx("span",{children:s("mutant.verified")})]}):i.jsxs(i.Fragment,{children:[i.jsx(Xu,{size:9,className:"shrink-0 opacity-85"}),i.jsx("span",{children:s("mutant.extract_code")})]})})]})]}),i.jsxs("article",{className:"group relative hidden sm:flex flex-col w-full h-full max-w-[340px] sm:max-w-none mx-auto bg-[#080f1d] border border-white/[0.06] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1",style:{"--dynamic-glow":E[0]},children:[i.jsx("button",{onClick:H=>{if(H.stopPropagation(),!l){window.location.hash="/login?fav=true";return}r(n.id)},className:`absolute top-3 right-3 z-35 p-2.5 rounded-xl border transition-all cursor-pointer ${b?"bg-blue-500/20 text-blue-400 border-blue-500/40 shadow-lg scale-105":"bg-black/50 text-slate-400 hover:text-white border-white/10 hover:scale-105 active:scale-95"}`,title:b?"Quitar de favoritos":"Guardar en favoritos",children:i.jsx(oa,{size:15,className:b?"fill-current":""})}),i.jsx("div",{className:"absolute inset-0 rounded-[24px] sm:rounded-[28px] border border-transparent transition-colors duration-300 group-hover:border-[var(--dynamic-glow)]/40 pointer-events-none z-30",style:{content:'""'}}),i.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0",style:{background:`radial-gradient(circle at center, ${E[0]}15, transparent 75%)`}}),i.jsxs("div",{className:"relative h-32 sm:h-36 w-full flex items-center justify-center p-2 sm:p-3 overflow-hidden bg-gradient-to-b from-[#111d35] to-[#080f1d] border-b border-white/[0.04] z-10 shrink-0",children:[i.jsx("div",{className:"absolute inset-0 opacity-25 pointer-events-none transition-opacity duration-300 group-hover:opacity-40",style:{background:`radial-gradient(ellipse at 50% 0%, ${E[0]}60, transparent 75%)`}}),i.jsx("img",{className:"mutant-thumb max-w-[80%] max-h-[80%] object-contain transition-transform duration-500 group-hover:scale-105",src:n.imagen,alt:N,loading:"lazy",onError:H=>{const F=H.currentTarget;F.src=T,F.onerror=null}}),i.jsx("div",{className:"absolute top-3 left-3 flex flex-row gap-2.5 z-20",children:m.map((H,F)=>i.jsxs("div",{className:"relative group/badge",children:[i.jsx("div",{className:"w-[34px] h-[34px] sm:w-[42px] sm:h-[42px] rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg",children:i.jsx("img",{src:H==null?void 0:H.image,alt:H==null?void 0:H.name,className:"w-[84%] h-[84%] object-contain text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"})}),i.jsx("div",{className:"absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black text-[8px] font-black uppercase tracking-widest text-white rounded-md opacity-0 group-hover/badge:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none shadow-xl z-30",children:H==null?void 0:H.name})]},F))})]}),i.jsxs("div",{className:"p-3 sm:p-3.5 flex flex-col flex-grow gap-2.5 text-left z-10",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"m-0 text-xs sm:text-xs md:text-sm font-black text-white uppercase tracking-tight leading-snug group-hover:text-amber-400 transition-colors break-words line-clamp-1 pr-1",children:N}),i.jsxs("div",{className:"flex items-center gap-1.5 mt-1.5",children:[i.jsx("span",{className:"w-2 h-2 rounded-full shadow-lg",style:{backgroundColor:E[0],boxShadow:`0 0 8px ${E[0]}`}}),i.jsx("span",{className:"font-mono font-bold text-[9px] uppercase text-slate-400 tracking-wider",children:n.codigo})]})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-1.5",children:[i.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-red-500/30 hover:bg-[#0b1325] transition-all",children:[i.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[i.jsx("img",{src:Gr.vida,alt:"HP",className:"w-[14px] h-[14px] object-contain shrink-0"}),i.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"HP"})]}),i.jsx("span",{className:"text-white font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all",children:n.vida})]}),i.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-sky-500/30 hover:bg-[#0b1325] transition-all",children:[i.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[i.jsx("img",{src:Gr.velocidad,alt:"SPD",className:"w-[14px] h-[14px] object-contain shrink-0"}),i.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"SPD"})]}),i.jsx("span",{className:"text-white font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all",children:n.velocidad})]}),i.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-amber-500/30 hover:bg-[#0b1325] transition-all relative",children:[i.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[i.jsx("img",{src:(_==null?void 0:_.icono)||n.tipoIcono,alt:"ATK 1",className:"w-[14px] h-[14px] object-contain shrink-0"}),i.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"ATK 1"}),G&&i.jsx("span",{className:"text-[6px] text-amber-500 font-extrabold px-0.5 rounded bg-amber-500/10 border border-amber-500/20 leading-none",children:"x3"})]}),i.jsx("span",{className:`font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all ${G?"text-amber-400":"text-white"}`,children:S(_==null?void 0:_.valor)})]}),i.jsxs("div",{className:"bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-2 flex flex-col items-center justify-center hover:border-amber-500/30 hover:bg-[#0b1325] transition-all relative",children:[i.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[i.jsx("img",{src:(y==null?void 0:y.icono)||n.skinIcono,alt:"ATK 2",className:"w-[14px] h-[14px] object-contain shrink-0"}),i.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"ATK 2"}),v&&i.jsx("span",{className:"text-[6px] text-amber-500 font-extrabold px-0.5 rounded bg-amber-500/10 border border-amber-500/20 leading-none",children:"x3"})]}),i.jsx("span",{className:`font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all ${v?"text-amber-400":"text-white"}`,children:S(y==null?void 0:y.valor)})]}),i.jsxs("div",{className:"col-span-2 bg-[#0b1325]/80 border border-white/[0.04] rounded-xl py-1 px-3 flex flex-col items-center justify-center hover:border-emerald-500/30 hover:bg-[#0b1325] transition-all",children:[i.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-slate-400",children:[i.jsx("img",{src:((J=n.habilidad)==null?void 0:J.icono)||"https://pokradex.org/MutantsGG/assets/ability_shield_big.png",alt:"DEF",className:"w-[14px] h-[14px] object-contain shrink-0"}),i.jsx("span",{className:"text-[8px] font-black uppercase tracking-wider leading-none",children:"DEF / HABILIDAD"})]}),i.jsx("span",{className:"text-white font-mono font-black text-xs mt-1 tracking-tight leading-none truncate block select-all",children:((R=n.habilidad)==null?void 0:R.valor)||"1,000"})]})]}),i.jsx("div",{className:"mt-auto pt-1",children:i.jsx("button",{onClick:f,className:`group/btn relative overflow-hidden w-full py-2.5 text-[10px] font-black uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 border leading-none ${p?"bg-green-500/10 border-green-500/30 text-green-400":"bg-transparent border-white/[0.08] text-white hover:border-[var(--hover-color)] hover:bg-[var(--hover-bg)] active:scale-[0.98]"}`,style:{borderRadius:"100px","--hover-color":`${E[0]}50`,"--hover-bg":`${E[0]}12`},children:p?i.jsxs(i.Fragment,{children:[i.jsx(on,{size:12,className:"shrink-0 text-green-400 animate-bounce"}),i.jsx("span",{children:s("mutant.verified")})]}):i.jsxs(i.Fragment,{children:[i.jsx(Xu,{size:11,className:"group-hover/btn:scale-110 transition-transform shrink-0 opacity-80"}),i.jsx("span",{children:s("mutant.extract_code")})]})})})]})]})]})},dn=()=>{const{region:n,translate:s}=We(),l=n!=="LATAM"&&n!=="PT"?"https://chat.whatsapp.com/IdBIvXWUPNjDLcPmBvkp1B":Td;return i.jsxs(Qe.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.4},className:"panel p-6 md:p-8 rounded-3xl bg-[#0c1222]/95 border border-white/10 shadow-2xl relative overflow-hidden group max-w-4xl mx-auto w-full my-6 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left",children:[i.jsx("div",{className:"absolute inset-0 bg-[#25D366]/[0.02] pointer-events-none"}),i.jsxs("div",{className:"relative z-10 flex-1",children:[i.jsx("h3",{className:"text-xl md:text-2xl font-black text-white tracking-tight leading-tight m-0 mb-2",children:s("whatsapp.title")}),i.jsx("p",{className:"text-muted text-sm md:text-base leading-relaxed opacity-80 m-0 max-w-2xl",children:s("whatsapp.desc")})]}),i.jsx("div",{className:"relative z-10 shrink-0 w-full md:w-auto flex justify-start md:justify-end",children:i.jsxs("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-blue-brand hover:brightness-110 active:scale-[0.98] transition-all text-white font-black text-sm md:text-base shadow-lg shadow-blue-brand/20 hover:shadow-blue-brand/40 select-none w-full md:w-auto",children:[i.jsx(rn,{size:18,className:"shrink-0"}),i.jsx("span",{children:s("whatsapp.btn")})]})})]})},q3=`Robot
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
`,R3=`Robot
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
`,z3=`Robot
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
`,L3=`Robot
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
`,Pf={USD:q3.split(/\r?\n/).map(n=>n.trim()).filter(Boolean),FR:R3.split(/\r?\n/).map(n=>n.trim()).filter(Boolean),PT:z3.split(/\r?\n/).map(n=>n.trim()).filter(Boolean),DE:L3.split(/\r?\n/).map(n=>n.trim()).filter(Boolean)};function H3(n,s,l){if(l==="LATAM"||!Pf[l])return s;const r=parseInt(n,10)-1,d=Pf[l];return d&&r>=0&&r<d.length?d[r]:s}const Ff={downloadable_instances:{LATAM:{title:"Instancias Virtuales",desc:"Se añadieron instancias virtuales optimizadas para descargar directa, completamente listas con Root y GameGuardian listos.",btn:"Ir a Descargas",badge:"NUEVO"},USD:{title:"Virtual Instances",desc:"Added pre-configured virtual game instances with Active Root and GameGuardian setup for direct download.",btn:"Go to Downloads",badge:"NEW"},PT:{title:"Instâncias Virtuais",desc:"Adicionadas instâncias virtuais pré-configuradas com Root e GameGuardian prontos para download direto.",btn:"Ir para Downloads",badge:"NOVO"},FR:{title:"Instances Virtuelles",desc:"Ajout d'instances virtuelles préconfigurées avec Root et GameGuardian pour téléchargement direct.",btn:"Téléchargements",badge:"NOUVEAU"},DE:{title:"Virtuelle Instanzen",desc:"Vorkonfigurierte virtuelle Instanzen mit Root und GameGuardian wurden zum direkten Download hinzugefügt.",btn:"Downloads",badge:"NEU"}},fixes_and_updates:{LATAM:{title:"Mejoras y Correcciones",desc:"Se actualizó la Guía, se arregló la visualización de la pestaña de novedades, y se solucionó el problema con el número '0' en la calculadora de EVO.",btn:"Explorar Guía",badge:"RESUELTO"},USD:{title:"Fixes & Updates",desc:"Updated the Guide, resolved the News page render issue, and fixed the persistent zero '0' input error inside the EVO calculator.",btn:"Explore Guide",badge:"FIXED"},PT:{title:"Melhorias e Correções",desc:"Guia de uso atualizado, corrigido o bug da aba de novidades e corrigido o problema do número zero na calculadora EVO.",btn:"Explorar Guia",badge:"RESOLVIDO"},FR:{title:"Corrections de Bug",desc:"Mise à jour du Guide de jeu, correction de l'onglet de nouveautés et résolution du bug du chiffre zéro sur le calculateur d'EVO.",btn:"Ouvrir le guide",badge:"CORRIGÉ"},DE:{title:"Korrekturen & Updates",desc:"Anleitung aktualisiert, News-Tab-Fehler behoben und das Problem mit der Zahl Null im EVO-Rechner beseitigt.",btn:"Anleitung ansehen",badge:"BEHOBEN"}}};function Kf(){const{region:n,translate:s}=We(),l=(R,H)=>{const F=n in Ff[R]?n:"USD";return Ff[R][F][H]},[r,d]=C.useState(""),[p,g]=C.useState([]),[b,x]=C.useState(!1),[m,f]=C.useState("code-az"),[_,y]=C.useState(!0),[G,v]=C.useState(30),[S,T]=C.useState(n);C.useEffect(()=>{T(n)},[n]);const N=C.useMemo(()=>Cs,[]),L=C.useMemo(()=>yy.split(/\r?\n/).map(R=>R.trim()).filter(Boolean).length,[]),E="text-blue-brand-2",V=C.useMemo(()=>{const R=r.toLowerCase(),H=N.map(F=>{const B=H3(F.id,F.nombre,S);return{...F,nombre:B}}).filter(F=>{const B=R===""||F.nombre.toLowerCase().includes(R)||F.codigo.toLowerCase().includes(R),Z=p.length===0||(p.length===1?F.genes.includes(p[0]):F.genes[0]===p[0]&&F.genes[1]===p[1]),ae=!b||F.genes.length===1||F.genes.length===2&&F.genes[0]===F.genes[1];return B&&Z&&ae});return H.sort((F,B)=>{var Z,ae,ee,Q,ie,I;return m==="name-az"?F.nombre.localeCompare(B.nombre):m==="name-za"?B.nombre.localeCompare(F.nombre):m==="code-az"?F.codigo.localeCompare(B.codigo,void 0,{numeric:!0,sensitivity:"base"}):m==="code-za"?B.codigo.localeCompare(F.codigo,void 0,{numeric:!0,sensitivity:"base"}):m==="hp-desc"?(((Z=B.stats)==null?void 0:Z.hp)||0)-(((ae=F.stats)==null?void 0:ae.hp)||0):m==="atk-desc"?(((ee=B.stats)==null?void 0:ee.atk)||0)-(((Q=F.stats)==null?void 0:Q.atk)||0):m==="spd-desc"?(((ie=B.stats)==null?void 0:ie.spd)||0)-(((I=F.stats)==null?void 0:I.spd)||0):B.codigo.localeCompare(F.codigo,void 0,{numeric:!0,sensitivity:"base"})}),H},[N,r,p,m,b,S]),K=C.useMemo(()=>V.slice(0,G),[V,G]),J=R=>{v(30),g(H=>{const F=H.filter(B=>B===R).length;return F>0?F===2?H.filter(B=>B!==R):H.length===1?[R,R]:H.filter(B=>B!==R):H.length<2?[...H,R]:[H[1],R]})};return i.jsxs("div",{className:"flex flex-col gap-8 pb-20",children:[i.jsxs("section",{className:"relative hero !p-8 md:!p-20 overflow-hidden rounded-3xl",children:[i.jsx("div",{className:"absolute inset-0 opacity-10 bg-grid-slate-900/[0.1] pointer-events-none"}),i.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-brand/20 to-transparent -rotate-12 transform translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"}),i.jsxs("div",{className:"relative z-10",children:[i.jsxs("div",{className:"eyebrow bg-white/5 border-white/10 px-4 py-1 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-md",children:[i.jsx(hb,{size:14,className:"text-blue-brand-2"}),i.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:s("home.main_database")})]}),i.jsxs("h1",{className:"text-4xl md:text-8xl lg:text-9xl font-black mt-4 mb-6 uppercase tracking-tighter leading-[0.8] md:leading-[0.85] text-white",children:["MUTANTS ",i.jsx("br",{}),i.jsxs("span",{className:"text-blue-brand relative",children:["GLADIATORS",i.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-1 bg-white/10 rounded-full"})]})]}),i.jsx("p",{className:"text-slate-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 opacity-90 leading-relaxed font-medium",children:s("home.main_desc")})]})]}),i.jsx(dn,{}),i.jsxs("section",{className:"panel flex flex-col gap-8 !p-6 md:!p-8 border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl relative overflow-hidden group",children:[i.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-blue-brand"}),i.jsx("div",{className:"flex items-center justify-between relative z-10 text-left",children:i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Ui,{size:20,className:"text-blue-brand-2"}),i.jsx("h2",{className:"text-xl md:text-2xl font-black uppercase tracking-tighter m-0 text-white",children:s("home.featured_mutants")})]})}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 text-left",children:[i.jsxs("div",{className:"flex flex-col justify-between p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 relative group/card",children:[i.jsx("div",{className:"absolute top-3 right-3 bg-blue-brand/20 text-blue-brand-2 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider animate-pulse",children:l("downloadable_instances","badge")}),i.jsxs("div",{children:[i.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-brand/10 flex items-center justify-center text-blue-brand-2 border border-blue-brand/20 mb-4 group-hover/card:scale-110 transition-transform",children:i.jsx(Ad,{size:20})}),i.jsx("h3",{className:"text-base font-black uppercase tracking-tight text-white mb-2",children:l("downloadable_instances","title")}),i.jsx("p",{className:"text-slate-400 text-xs font-semibold leading-relaxed m-0 mb-6",children:l("downloadable_instances","desc")})]}),i.jsxs("button",{onClick:()=>{window.location.hash="/descargas",window.scrollTo({top:0,behavior:"smooth"})},className:"w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-blue-brand hover:bg-blue-brand-2 text-white text-xs font-black uppercase tracking-wider transition-all cursor-pointer active:scale-95 text-center font-bold",children:[i.jsx("span",{children:l("downloadable_instances","btn")}),i.jsx(qr,{size:14})]})]}),i.jsxs("div",{className:"flex flex-col justify-between p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 relative group/card",children:[i.jsx("div",{className:"absolute top-3 right-3 bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider",children:l("fixes_and_updates","badge")}),i.jsxs("div",{children:[i.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 mb-4 group-hover/card:scale-110 transition-transform",children:i.jsx(fb,{size:20})}),i.jsx("h3",{className:"text-base font-black uppercase tracking-tight text-white mb-2",children:l("fixes_and_updates","title")}),i.jsx("p",{className:"text-slate-400 text-xs font-semibold leading-relaxed m-0 mb-6 font-medium",children:l("fixes_and_updates","desc")})]}),i.jsxs("button",{onClick:()=>{window.location.hash="/guia",window.scrollTo({top:0,behavior:"smooth"})},className:"w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black uppercase tracking-wider transition-all cursor-pointer active:scale-95 text-center font-bold border border-emerald-500/10",children:[i.jsx("span",{children:l("fixes_and_updates","btn")}),i.jsx(qr,{size:14})]})]})]})]}),i.jsxs("section",{className:"flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-[2.5rem] border border-white/10 bg-[#0a1224]/50 backdrop-blur-2xl relative overflow-hidden",children:[i.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-grid-slate-900/[0.05] pointer-events-none"}),i.jsx("div",{className:"flex flex-col gap-4 relative z-10 w-full md:max-w-[60%]",children:i.jsxs("div",{className:"flex items-center gap-6",children:[i.jsxs("div",{className:"relative group/avatar",children:[i.jsx("div",{className:"absolute inset-0 bg-blue-brand blur-xl opacity-20 group-hover:opacity-40 transition-opacity"}),i.jsx("img",{src:"https://github.com/luqueSmith/MGG/blob/main/img/perfil.png?raw=true",alt:"Smith Luque",className:"w-20 h-20 md:w-24 md:h-24 rounded-[2rem] border-4 border-white/10 shadow-2xl relative z-10 object-cover group-hover:rotate-3 transition-transform"}),i.jsx("div",{className:"absolute -bottom-1 -right-1 w-6 h-6 bg-green-brand border-4 border-[#050a14] rounded-full z-20"})]}),i.jsxs("div",{className:"text-left",children:[i.jsx("h3",{className:"m-0 text-2xl font-black text-white uppercase tracking-tighter",children:"Smith Luque"}),i.jsxs("div",{className:"flex flex-col gap-1",children:[i.jsx("p",{className:"text-blue-brand-2 text-xs m-0 font-black uppercase tracking-widest leading-none",children:s("profile.developer")}),i.jsx("div",{className:"px-2 py-0.5 rounded bg-white/5 border border-white/5 inline-flex self-start",children:i.jsx("span",{className:"text-[8px] font-bold text-muted uppercase tracking-[0.2em]",children:s("profile.founder")})})]})]})]})}),i.jsxs("div",{className:"flex gap-8 items-center px-8 w-full md:w-auto border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 relative z-10",children:[i.jsxs("div",{className:"flex-1 md:flex-none",children:[i.jsx("span",{className:"block text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-2",children:s("home.filtered")}),i.jsxs("div",{className:"flex items-baseline gap-1",children:[i.jsx("strong",{className:"text-4xl font-black text-blue-brand-2 leading-none",children:V.length}),i.jsx("span",{className:"text-xs font-bold text-white/20 uppercase tracking-widest",children:s("home.active")})]})]}),i.jsxs("div",{className:"flex-1 md:flex-none",children:[i.jsx("span",{className:"block text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-2",children:s("home.total_base")}),i.jsxs("div",{className:"flex items-baseline gap-1",children:[i.jsx("strong",{className:"text-4xl font-black text-white/50 leading-none",children:L}),i.jsx("span",{className:"text-xs font-bold text-muted/20 uppercase tracking-widest",children:s("home.total")})]})]})]})]}),i.jsxs("section",{id:"explore-catalog",className:"panel flex flex-col gap-6 !p-6 md:!p-8 border border-white/10 relative overflow-hidden group",children:[i.jsx("div",{className:"absolute inset-0 opacity-5 pointer-events-none bg-grid-slate-900/[0.1] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,white,transparent)]"}),i.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"w-1.5 h-6 bg-blue-brand rounded-full"}),i.jsx("h2",{className:"text-xl md:text-2xl font-black uppercase tracking-tighter m-0",children:s("home.explore_catalog")})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("div",{className:"px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-muted uppercase tracking-widest leading-none",children:"Control Panel v2.0"}),(p.length>0||b)&&i.jsx("button",{onClick:()=>{g([]),x(!1)},className:"text-[10px] uppercase font-black text-white bg-red-brand/40 px-3 py-1 rounded-full hover:bg-red-brand transition-all active:scale-95 shadow-lg shadow-red-brand/20",children:s("home.reset_engine")})]})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10",children:[i.jsx("div",{className:"lg:col-span-8 flex flex-col gap-6",children:i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(bb,{size:14,className:E}),i.jsx("span",{className:"text-[11px] uppercase font-black tracking-[0.2em] opacity-60",children:s("home.genetic_config")})]}),i.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3",children:Rr.map(R=>{const H=p.filter(B=>B===R.id).length,F=H>0;return p.indexOf(R.id),i.jsxs("button",{onClick:()=>J(R.id),className:`flex items-center gap-3 p-3 rounded-xl border-2 transition-all relative group/gene overflow-hidden ${F?"bg-blue-brand/20 border-blue-brand text-white shadow-[0_0_20px_rgba(37,99,235,0.2)]":"bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/30 hover:bg-white/[0.05]"}`,children:[i.jsx("div",{className:`p-1.5 rounded-lg transition-all ${F?"bg-blue-brand shadow-lg":"bg-white/5 group-hover/gene:scale-110"}`,children:i.jsx("img",{src:R.image,alt:"",className:`w-6 h-6 object-contain ${F?"brightness-125":"grayscale opacity-50"}`})}),i.jsxs("div",{className:"flex flex-col items-start",children:[i.jsx("span",{className:"text-[11px] font-black uppercase tracking-tight line-clamp-1",children:R.name}),i.jsx("span",{className:"text-[8px] font-bold opacity-40 uppercase tracking-widest",children:s(F?H===2?"gene.dominant":"gene.active":"gene.inactive")})]}),F&&i.jsx("div",{className:"absolute top-1 right-1 flex gap-0.5",children:[...Array(H)].map((B,Z)=>i.jsx("div",{className:"w-1 h-3 bg-blue-brand-2 rounded-full"},Z))})]},R.id)})})]})}),i.jsxs("div",{className:"lg:col-span-4 flex flex-col gap-6 lg:border-l lg:border-white/10 lg:pl-8",children:[i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Oi,{size:14,className:E}),i.jsx("span",{className:"text-[11px] uppercase font-black tracking-[0.2em] opacity-60",children:s("home.search_engine")})]}),i.jsxs("div",{className:"relative group/search",children:[i.jsx("input",{value:r,onChange:R=>{d(R.target.value),v(30)},placeholder:s("home.search_placeholder"),className:"w-full bg-white/[0.04] border-2 border-white/10 rounded-2xl pl-4 pr-12 py-4 text-sm font-bold placeholder:text-white/20 outline-none focus:border-blue-brand/50 transition-all focus:bg-white/[0.06] focus:shadow-2xl focus:shadow-blue-brand/5"}),i.jsx("div",{className:"absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/5 text-white/40",children:i.jsx(Oi,{size:16})})]})]}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(fb,{size:14,className:E}),i.jsx("span",{className:"text-[11px] uppercase font-black tracking-[0.2em] opacity-60",children:s("home.sort_filters")})]}),i.jsxs("div",{className:"flex flex-col gap-3",children:[i.jsxs("div",{className:"relative group/sort",children:[i.jsxs("select",{value:m,onChange:R=>{f(R.target.value),v(30)},className:"w-full bg-white/[0.04] border-2 border-white/10 rounded-2xl px-5 py-4 text-xs font-black uppercase tracking-widest outline-none text-white focus:border-blue-brand/50 cursor-pointer appearance-none focus:bg-white/[0.06]",children:[i.jsx("option",{value:"name-az",className:"bg-[#0a1224]",children:s("home.sort_az")}),i.jsx("option",{value:"name-za",className:"bg-[#0a1224]",children:s("home.sort_za")}),i.jsx("option",{value:"code-az",className:"bg-[#0a1224]",children:s("home.sort_code_asc")}),i.jsx("option",{value:"code-za",className:"bg-[#0a1224]",children:s("home.sort_code_desc")}),i.jsx("option",{value:"hp-desc",className:"bg-[#0a1224]",children:s("home.sort_hp_desc")}),i.jsx("option",{value:"atk-desc",className:"bg-[#0a1224]",children:s("home.sort_atk_desc")}),i.jsx("option",{value:"spd-desc",className:"bg-[#0a1224]",children:s("home.sort_spd_desc")})]}),i.jsx(Dr,{size:16,className:"absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40"})]}),i.jsxs("div",{id:"names-language-selector",className:"space-y-1.5 text-left mt-1 scroll-mt-24",children:[i.jsxs("div",{className:"flex items-center gap-2 opacity-60 pl-1",children:[i.jsx(o0,{size:11,className:E}),i.jsx("span",{className:"text-[9px] uppercase font-black tracking-widest",children:s("home.names_language")})]}),i.jsxs("div",{className:"relative group/names-lang",children:[i.jsxs("select",{value:S,onChange:R=>{T(R.target.value),v(30)},className:"w-full bg-white/[0.04] border-2 border-white/10 rounded-2xl px-5 py-3.5 text-xs font-black uppercase tracking-widest outline-none text-white focus:border-blue-brand/50 cursor-pointer appearance-none focus:bg-white/[0.06]",children:[i.jsx("option",{value:"LATAM",className:"bg-[#0a1224]",children:"Español (LATAM)"}),i.jsx("option",{value:"USD",className:"bg-[#0a1224]",children:"English (USD)"}),i.jsx("option",{value:"PT",className:"bg-[#0a1224]",children:"Português (PT)"}),i.jsx("option",{value:"FR",className:"bg-[#0a1224]",children:"Français (FR)"}),i.jsx("option",{value:"DE",className:"bg-[#0a1224]",children:"Deutsch (DE)"})]}),i.jsx(Dr,{size:16,className:"absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40"})]})]}),i.jsxs("button",{className:`group relative overflow-hidden w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 border-2 ${b?"bg-blue-brand/20 border-blue-brand text-blue-brand-2":"bg-white/5 border-white/10 text-white/40 hover:border-white/20"}`,onClick:()=>x(!b),children:[i.jsx(hb,{size:14,className:`${b?"animate-pulse":""}`}),s("home.single_gene_only")]}),i.jsxs("button",{className:`group relative overflow-hidden w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 border-2 ${_?"bg-blue-brand/10 border-blue-brand/30 text-blue-brand-2":"bg-white/5 border-white/10 text-white/40 hover:border-white/20"}`,onClick:()=>y(!_),children:[i.jsx(bb,{size:14,className:`${_?"animate-pulse":""}`}),s(_?"home.hide":"home.show")]})]})]})]})]})]}),i.jsx("section",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",children:_?V.length>0?i.jsxs(i.Fragment,{children:[K.map((R,H)=>i.jsx(tp,{mutant:R},H)),G<V.length&&i.jsx("div",{className:"col-span-full py-8 flex justify-center",children:i.jsx("button",{onClick:()=>v(R=>R+30),className:"px-8 py-3 bg-blue-brand/10 border-2 border-blue-brand/30 rounded-2xl text-blue-brand-2 font-black uppercase tracking-widest hover:bg-blue-brand/20 transition-all active:scale-95",children:s("home.load_more_rem",{rem:V.length-G})})})]}):i.jsx("div",{className:"col-span-full py-12 text-center text-muted border border-line rounded-2xl bg-panel",children:s("home.no_results")}):i.jsx("div",{className:"col-span-full py-12 text-center text-muted border border-line rounded-2xl bg-panel",children:s("home.hidden_results")})})]})}const O3="https://www.pokradex.org/feeds/posts/default?alt=json-in-script&max-results=8";function B3(n){if(!n)return"Reciente";const s=new Date(n);return Number.isNaN(s.getTime())?n:s.toLocaleDateString("es-PE",{year:"numeric",month:"short",day:"numeric"})}function U3(n){return String(n||"").replace(/<script[\s\S]*?<\/script>/gi,"").replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/\s+/g," ").trim()}function P3(n){const s=String(n||"").match(/<img[^>]+src="([^"]+)"/i);return s?s[1]:""}function F3(n){var b,x,m,f,_,y;const s=((b=n.title)==null?void 0:b.$t)||n.title||"Sin título",l=((x=n.published)==null?void 0:x.$t)||n.published||"",r=((m=n.content)==null?void 0:m.$t)||n.content||((f=n.summary)==null?void 0:f.$t)||n.summary||"",d=Array.isArray(n.link)?((_=n.link.find(G=>G.rel==="alternate"))==null?void 0:_.href)||((y=n.link[0])==null?void 0:y.href)||"#":n.url||n.href||"#",p=P3(r)||n.image||"",g=U3(r);return{title:s,published:l,dateLabel:B3(l),excerpt:g.slice(0,220)+(g.length>220?"…":""),excerptFull:g,rawText:g,link:d,image:p}}function K3(n){const s=String(n||"").replace(/\s+/g," ").trim();if(!s)return[];const l=["ANUNCIOS:","OFERTAS:","MINI EVENTO:","CRONOLOGIA:"],r=[];for(let d=0;d<l.length;d++){const p=l[d],g=s.indexOf(p);if(g===-1)continue;let b=s.length;for(let m=d+1;m<l.length;m++){const f=s.indexOf(l[m],g+p.length);if(f!==-1){b=f;break}}const x=s.slice(g+p.length,b).trim();x&&r.push({title:p.replace(":",""),body:x.length>320?x.slice(0,320)+"…":x})}return r.length||r.push({title:"Resumen",body:s.length>420?s.slice(0,420)+"…":s}),r.slice(0,4)}function X3(){const{region:n,translate:s}=We(),l=n==="USD",[r,d]=C.useState([]),[p,g]=C.useState(!0),[b,x]=C.useState(!1);return C.useEffect(()=>{let m=null;const f=`mggFeedCallback_${Date.now()}`,_=()=>{m&&m.parentNode&&m.parentNode.removeChild(m);try{window[f]=void 0}catch{}};return window[f]=y=>{var G;_();try{const S=(((G=y==null?void 0:y.feed)==null?void 0:G.entry)||[]).map(F3);d(S),g(!1)}catch{x(!0),g(!1)}},m=document.createElement("script"),m.src=`${O3}&callback=${f}`,m.onerror=()=>{_(),x(!0),g(!1)},document.body.appendChild(m),_},[]),i.jsxs("div",{className:"flex flex-col gap-6",children:[i.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[i.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[i.jsx(Md,{size:14,className:"text-blue-brand-2"}),i.jsx("span",{children:l?"News Feed":"Portal informativo"})]}),i.jsxs("h1",{className:"text-3xl md:text-6xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:[l?"NEWS":"NOVEDADES"," ",i.jsx("span",{className:"text-blue-brand-2 block",children:"MUTODEX"})]}),i.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:l?"Latest news delivered directly from the official Mutodex blog.":"Noticias actualizadas directamente desde el blog oficial de Mutodex."})]}),i.jsx(dn,{}),i.jsxs("div",{className:"grid lg:grid-cols-[1fr_350px] gap-6 items-start",children:[i.jsx("section",{className:"flex flex-col gap-5 order-2 lg:order-1",children:p?i.jsx("div",{className:"panel text-center py-12 text-muted bg-blue-brand/5 border-blue-brand/20",children:l?"Loading posts...":"Cargando publicaciones…"}):b?i.jsx("div",{className:"panel text-center py-12 text-muted bg-blue-brand/5 border-blue-brand/20",children:l?"Could not load posts at this moment.":"No se pudieron cargar las publicaciones en este momento."}):r.length===0?i.jsx("div",{className:"panel text-center py-12 text-muted bg-blue-brand/5 border-blue-brand/20",children:l?"No posts found.":"No se encontraron publicaciones."}):r.map((m,f)=>{const _=K3(m.excerptFull||m.rawText||m.excerpt||"");return i.jsxs("article",{className:"panel p-0 overflow-hidden flex flex-col group transition-all duration-300 border-white/10 hover:border-blue-brand-2/30 shadow-lg hover:shadow-blue-brand-2/[0.04]",children:[i.jsxs("div",{className:"p-5 md:p-7 pb-0",children:[i.jsxs("div",{className:"flex items-center gap-2 font-mono font-bold text-[10px] uppercase tracking-widest mb-3 text-blue-brand-2",children:[i.jsx(Cr,{size:12}),m.dateLabel]}),i.jsx("h2",{className:"m-0 text-xl md:text-3xl font-bold leading-tight tracking-tight",children:i.jsx("a",{href:m.link,target:"_blank",rel:"noopener noreferrer",className:"transition-colors hover:text-blue-brand-2",children:m.title})})]}),m.image&&i.jsx("div",{className:"px-5 md:px-7 mt-5",children:i.jsx("div",{className:"relative aspect-[16/8] overflow-hidden rounded-xl border border-white/10",children:i.jsx("img",{className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",src:m.image,alt:m.title,loading:"lazy",referrerPolicy:"no-referrer"})})}),i.jsx("div",{className:"p-5 md:p-7 pt-5 grid gap-4",children:_.map((y,G)=>i.jsxs("div",{className:"border-l-2 pl-4 py-1 border-blue-brand/30",children:[i.jsx("h3",{className:"m-0 mb-1.5 text-[11px] md:text-xs uppercase tracking-widest font-black text-white/90",children:y.title}),i.jsx("p",{className:"m-0 text-muted text-sm md:text-base leading-relaxed opacity-90",children:y.body})]},G))}),i.jsx("div",{className:"p-5 md:p-7 pt-0 mt-auto",children:i.jsxs("a",{className:"btn btn-primary w-full md:w-auto transition-all",target:"_blank",rel:"noopener noreferrer",href:m.link,children:[i.jsx(nn,{size:16}),i.jsx("span",{children:l?"Read on Mutodex":"Leer en Mutodex"})]})})]},f)})}),i.jsxs("aside",{className:"flex flex-col gap-6 order-1 lg:order-2",children:[i.jsxs("section",{className:"panel !p-5 flex flex-col gap-4 border border-white/5 bg-blue-brand/2",children:[i.jsxs("div",{className:"kv-label text-[10px] opacity-60 flex items-center gap-2",children:[i.jsx(Sk,{size:12}),l?"Quick Access":"Acceso Rápido"]}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2",children:[{name:l?"Official Mutant List":"Lista oficial: mutantes",url:"https://mutodex.blogspot.com/p/lista-oficial-mutantes.html"},{name:l?"Secret Breeding":"Hibridaciones secretas",url:"https://mutodex.blogspot.com/p/hibridaciones-secretas.html"},{name:l?"Attack/HP Orbs":"Orbes de ataque/hp",url:"https://mutodex.blogspot.com/p/orbes.html"},{name:l?"EVO Discount":"Descuento de EVO",url:"https://mutodex.blogspot.com/p/descuento-de-evo.html"},{name:l?"Stats Calculator":"Calculadora stats",url:"https://mutodex.blogspot.com/p/calculadora-de-stats.html"}].map((m,f)=>i.jsxs("a",{className:"flex items-center justify-between p-3 rounded-xl bg-white/3 border border-line text-xs font-medium hover:border-blue-brand-2/50 hover:bg-blue-brand-2/10 transition-all duration-300",target:"_blank",rel:"noopener noreferrer",href:m.url,children:[m.name,i.jsx(nn,{size:12,className:"opacity-40"})]},f))})]}),i.jsxs("section",{className:"panel !p-5 flex flex-col gap-4 border border-white/5 bg-blue-brand/2",children:[i.jsx("div",{className:"kv-label text-[10px] opacity-60",children:l?"Blog Entries":"Entradas de Blog"}),i.jsx("div",{className:"flex flex-col gap-2",children:p?i.jsx("div",{className:"text-muted text-xs animate-pulse",children:l?"Synchronizing...":"Sincronizando..."}):r.slice(0,6).map((m,f)=>i.jsxs("a",{className:"block p-3 rounded-xl bg-white/3 border border-line transition-all duration-300 hover:border-blue-brand-2/40 group",target:"_blank",rel:"noopener noreferrer",href:m.link,children:[i.jsx("div",{className:"text-[9px] font-bold mb-1 opacity-70 text-blue-brand-2",children:m.dateLabel}),i.jsx("div",{className:"text-xs font-bold text-white/90 line-clamp-1 group-hover:text-blue-brand-2",children:m.title})]},f))})]}),i.jsx("div",{className:"panel !p-4 border border-blue-brand/20 bg-blue-brand/5 shadow-inner",children:i.jsx("p",{className:"text-muted text-[10px] m-0 leading-relaxed",children:l?"Data is loaded via JSONP from Blogger to avoid CORS. If news is not visible, check your connection.":"Los datos se cargan vía JSONP desde Blogger para evitar problemas de CORS. Si no ves las noticias, revisa tu conexión."})})]})]})]})}const Bu=({service:n,isOffer:s,isOther:l,variant:r="default"})=>{const{region:d,multiplier:p,translate:g,countryCode:b}=We(),x=d!=="LATAM",m=x&&n.nombreEn?n.nombreEn:n.nombre,f=x&&n.descripcionEn?n.descripcionEn:n.descripcion,_=x&&n.featuresEn?n.featuresEn:n.features,y=b?p0.find(E=>E.id.toUpperCase()===b.toUpperCase()):null,G="$";let v="";const S=n.precio;S>0?v=(S/3.7*1.15*1.1*.9).toFixed(2):v="0.00",(()=>{const E=b==null?void 0:b.toUpperCase();return E==="PE"?"🇵🇪":E==="US"?"🇺🇸":y?y.flag:E?"🌎":"🇵🇪"})();const N=()=>{const E=n.precio===0;let V="";E?d==="LATAM"?V="GRATIS":d==="PT"?V="GRÁTIS":d==="FR"?V="GRATUIT":d==="DE"?V="KOSTENLOS":V="FREE":V=`${G}${v}`;let K="";d==="LATAM"?K=`¡Hola! Me interesa el servicio: ${m} (ID: ${n.id}) - Precio: ${V}`:d==="PT"?K=`Olá! Estou interessado no serviço: ${m} (ID: ${n.id}) - Preço: ${V}`:d==="FR"?K=`Bonjour! Je suis intéressé par le service: ${m} (ID: ${n.id}) - Prix: ${V}`:d==="DE"?K=`Hallo! Ich habe Interesse an dem Service: ${m} (ID: ${n.id}) - Preis: ${V}`:K=`Hello! I'm interested in: ${m} (ID: ${n.id}) - Price: ${V}`,window.open(`https://wa.me/${d0}?text=${encodeURIComponent(K)}`,"_blank")},L=g("services.buy");return r==="compact"?i.jsxs("article",{className:"panel !p-3 flex items-center justify-between gap-4 group transition-all duration-300 bg-white/[0.02] border hover:border-blue-brand/50",children:[i.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[i.jsx("div",{className:"w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden shrink-0 bg-white/5 border border-white/10 group-hover:border-blue-brand/30 transition-colors",children:n.imagen?i.jsx("img",{src:n.imagen,alt:"",className:"w-full h-full object-cover"}):i.jsx("div",{className:"w-full h-full flex items-center justify-center text-blue-brand-2",children:i.jsx(qi,{size:20})})}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsx("h4",{className:"m-0 text-xs md:text-sm font-black uppercase text-white truncate group-hover:text-blue-brand-2 transition-colors",children:m}),i.jsx("div",{className:"text-[10px] md:text-[11px] font-black text-blue-brand-2 mt-0.5",children:n.precio===0?"GRATIS":`${G} ${v}`})]})]}),i.jsxs("button",{onClick:N,className:"btn btn-sm !px-3 h-8 md:h-9 border-transparent shrink-0 bg-blue-brand/10 text-blue-brand-2 hover:bg-blue-brand hover:text-white",children:[i.jsx(qi,{size:14,className:"md:size-4"}),i.jsx("span",{className:"hidden sm:inline text-[10px] font-black uppercase",children:L})]})]}):i.jsxs("article",{className:`card flex flex-col group transition-all duration-300 hover:border-blue-brand/50 ${s?"outline-1 outline-blue-brand/35 border-blue-brand/30 bg-blue-brand/5":""}`,children:[n.imagen&&i.jsxs("div",{className:"relative overflow-hidden aspect-[16/10]",children:[i.jsx("img",{src:n.imagen,alt:m,className:"w-full h-full object-cover block transition-transform duration-500 group-hover:scale-110"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"})]}),i.jsxs("div",{className:"card-body p-4 md:p-5 flex flex-col flex-1",children:[i.jsx("h3",{className:"m-0 mb-2 text-base md:text-lg font-black uppercase tracking-tight text-white line-clamp-1 group-hover:text-blue-brand-2 transition-colors",children:m}),i.jsx("p",{className:"text-muted text-sm mb-4 leading-relaxed line-clamp-2 md:line-clamp-none",children:f}),i.jsx("div",{className:"flex flex-wrap gap-2 mb-5",children:_==null?void 0:_.map((E,V)=>i.jsx("span",{className:"px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-400 text-[10px] md:text-[11px] font-bold uppercase",children:E},V))}),i.jsxs("div",{className:"flex items-end justify-between mt-auto pt-4 border-t border-white/5",children:[i.jsx("div",{className:"text-xl md:text-2xl font-black tracking-tighter text-white",children:n.precio===0?i.jsx("span",{className:"text-green-brand",children:"GRATIS"}):`${G} ${v}`}),i.jsxs("div",{className:"flex gap-2",children:[n.saberMas&&i.jsx("a",{href:n.saberMas,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm px-3 bg-white/5 border-white/5 text-slate-400 hover:text-white",title:"Saber más",children:i.jsx(nn,{size:16})}),i.jsxs("button",{className:`btn btn-sm px-4 ${s?"btn-primary":l?"bg-green-brand text-white":"bg-blue-brand/20 text-blue-brand-2 hover:bg-blue-brand hover:text-white"}`,onClick:N,children:[n.precio===0?i.jsx(i0,{size:16}):i.jsx(qi,{size:16}),i.jsx("span",{className:"text-[11px] font-black uppercase",children:n.precio===0?"Ver":L})]})]})]})]})]})};function Z3(){const{region:n,countryCode:s,setCountry:l,translate:r}=We(),d=n==="USD",p=n!=="LATAM"&&n!=="PT"?"https://chat.whatsapp.com/IdBIvXWUPNjDLcPmBvkp1B":Td,g=Mu.filter(m=>m.categoria==="OFFER"),b=Mu.filter(m=>m.categoria==="MAIN"),x=Mu.filter(m=>m.categoria==="OTHER");return i.jsxs("div",{className:"flex flex-col gap-8 pb-20",children:[i.jsxs("section",{className:"relative hero !p-10 md:!p-24 overflow-hidden rounded-[3rem]",children:[i.jsx("div",{className:"absolute inset-0 opacity-10 bg-grid-slate-900/[0.1] pointer-events-none"}),i.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-brand/20 to-transparent -rotate-12 transform translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"}),i.jsxs("div",{className:"relative z-10",children:[i.jsxs("div",{className:"eyebrow bg-white/5 border-white/10 px-4 py-1 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-md",children:[i.jsx(qi,{size:14,className:"text-blue-brand-2"}),i.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:d?"Premium Hub":"Centro de Servicios"})]}),i.jsxs("h1",{className:"text-4xl md:text-8xl lg:text-9xl font-black mt-4 mb-6 uppercase tracking-tighter leading-[0.8] md:leading-[0.85] text-white",children:[r("nav.servicios").split(" ")[0]," ",i.jsx("br",{}),i.jsxs("span",{className:"text-blue-brand relative",children:[r("nav.servicios").split(" ")[1]||"PREMIUM",i.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-1 bg-white/10 rounded-full"})]})]}),i.jsx("p",{className:"text-slate-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 opacity-90 leading-relaxed font-medium",children:r("services.subtitle")})]})]}),i.jsxs("section",{className:"panel !p-8 md:!p-12 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-brand/10 to-transparent border-blue-brand/20",children:[i.jsx("div",{className:"absolute inset-0 opacity-5 bg-grid-tech pointer-events-none"}),i.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10",children:[i.jsxs("div",{className:"text-center lg:text-left space-y-3",children:[i.jsx("h3",{className:"m-0 text-3xl font-black uppercase tracking-tighter text-white",children:d?"Need Expert Assistance?":"¿Tienes dudas?"}),i.jsx("p",{className:"text-slate-400 m-0 text-sm md:text-base font-medium max-w-xl",children:d?"Chat with our command center directly via WhatsApp for instant support.":"Escríbeme directamente por WhatsApp o entra al grupo de ayuda para soporte inmediato."})]}),i.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto min-w-[min(400px,100%)]",children:[i.jsxs("a",{className:"group/btn relative overflow-hidden py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 bg-blue-brand text-white shadow-xl shadow-blue-brand/40 hover:scale-105 active:scale-95",target:"_blank",rel:"noopener noreferrer",href:`https://wa.me/${d0}`,children:[i.jsx(Vk,{size:20,className:"group-hover/btn:-translate-y-1 transition-transform"}),i.jsx("span",{children:d?"Direct Command":"WhatsApp Directo"})]}),i.jsxs("a",{className:"group/btn relative overflow-hidden py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 bg-white/5 border-2 border-white/10 text-white hover:bg-white/10 active:scale-95",target:"_blank",rel:"noopener noreferrer",href:p,children:[i.jsx(rn,{size:20,className:"group-hover/btn:scale-110 transition-transform"}),i.jsx("span",{children:r("whatsapp.btn")})]})]})]})]}),i.jsxs("div",{className:"space-y-12",children:[i.jsxs("section",{className:"flex flex-col gap-6",children:[i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsx("div",{className:"w-2 h-8 bg-blue-brand rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"}),i.jsx("h2",{className:"text-2xl font-black uppercase tracking-tighter m-0 text-white",children:d?"Limited Time Offers":"Ofertas Especiales"}),i.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"})]}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:g.map(m=>i.jsx(Bu,{service:m,isOffer:!0},m.id))})]}),i.jsxs("section",{className:"flex flex-col gap-6",children:[i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsx("div",{className:"w-2 h-8 bg-blue-brand-2 rounded-full opacity-50"}),i.jsx("h2",{className:"text-2xl font-black uppercase tracking-tighter m-0 text-white",children:d?"Core Protocols":"Servicios Principales"}),i.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"})]}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:b.map(m=>i.jsx(Bu,{service:m,variant:"compact"},m.id))})]}),i.jsxs("section",{className:"flex flex-col gap-6",children:[i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsx("div",{className:"w-2 h-8 bg-slate-700 rounded-full"}),i.jsx("h2",{className:"text-2xl font-black uppercase tracking-tighter m-0 text-white",children:d?"Expansion Packs":"Otros Servicios"}),i.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"})]}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:x.map(m=>i.jsx(Bu,{service:m,isOther:!0},m.id))})]})]}),i.jsxs("section",{className:"flex flex-col gap-8 mt-12 pb-12",children:[i.jsxs("div",{className:"flex items-center gap-4 justify-center",children:[i.jsx("div",{className:"h-px w-10 md:w-20 bg-gradient-to-r from-transparent to-blue-brand"}),i.jsx("h2",{className:"text-xl md:text-3xl font-black uppercase tracking-tighter m-0 text-white text-center",children:r("services.payment_methods")}),i.jsx("div",{className:"h-px w-10 md:w-20 bg-gradient-to-l from-transparent to-blue-brand"})]}),i.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-5 gap-6",children:_y.map((m,f)=>i.jsxs("article",{className:"group relative flex flex-col p-6 bg-[#0a1224] border-2 border-white/5 rounded-[2rem] transition-all hover:border-blue-brand/50 hover:-translate-y-2",children:[i.jsx("div",{className:"absolute inset-0 bg-blue-brand/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]"}),i.jsx("div",{className:"w-full aspect-video flex items-center justify-center p-3 relative z-10",children:i.jsx("img",{src:m.logo,alt:m.name,className:"max-w-[80%] max-h-[80%] object-contain group-hover:scale-110 transition-transform duration-500"})}),i.jsxs("div",{className:"mt-4 text-center relative z-10 w-full overflow-hidden",children:[i.jsx("span",{className:"text-[11px] block font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-blue-brand-2 transition-colors mb-2",children:m.name}),i.jsx("p",{className:"text-[9px] text-slate-500 font-bold m-0 leading-relaxed italic opacity-80 line-clamp-2",children:(d?m.info:m.infoEs)||m.info})]})]},f))}),i.jsxs("div",{className:"panel !p-6 flex flex-col md:flex-row items-center gap-6 bg-blue-brand/5 border-blue-brand/20 relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-grid-tech opacity-5 pointer-events-none"}),i.jsx("div",{className:"w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-blue-brand/20 text-blue-brand border border-blue-brand/30 shadow-xl relative z-10",children:i.jsx(gk,{size:28})}),i.jsxs("p",{className:"m-0 text-xs md:text-sm text-slate-400 font-medium leading-relaxed relative z-10",children:[i.jsx("strong",{className:"text-white uppercase tracking-widest mr-2",children:d?"Secure Transmission:":"Información de Pago:"})," ",d?"Payments are coordinated directly via WhatsApp to ensure security. We will provide payment details after selection.":"Los pagos son coordinados directamente vía WhatsApp para garantizar la seguridad de la transacción. Al elegir un método, te proporcionaremos los datos necesarios."]})]})]})]})}const Y3=[0,0,0,0,0,2e4,3e4,38700,49e3,1e5,15e4,174e3,204e3,237e3,76e4,11e5,157e4,235e4,262e4,403e4,445e4,488e4,533e4,581e4,882e4,954e4,103e5,111e5,119e5,181e5,194e5,206e5,22e6,233e5,37e6,392e5,414e5,437e5,46e6,484e5,508e5,533e5,559e5,585e5,612e5,64e6,668e5,697e5,726e5,756e5,787e5,818e5,849e5,882e5,915e5,948e5,982e5,102e6,105e6,109e6,113e6,116e6,12e7,124e6,128e6,132e6,136e6,14e7,144e6,148e6,152e6,157e6,161e6,166e6,17e7,175e6,179e6,184e6,189e6,194e6,198e6,203e6,208e6,213e6,218e6,224e6,229e6,234e6,24e7,245e6,25e7,256e6,262e6,267e6,273e6,279e6,285e6,29e7,296e6,302e6,308e6,315e6,321e6,327e6,333e6,34e7,346e6,353e6,359e6,366e6,373e6,379e6,386e6,393e6,4e8,407e6,414e6,421e6,428e6,435e6,443e6,45e7,458e6,465e6,473e6,48e7,488e6,495e6,503e6,511e6,519e6,527e6,535e6,543e6,551e6,559e6,568e6,576e6,584e6,593e6,601e6,61e7,618e6,627e6,636e6,645e6,653e6,662e6,671e6,68e7,69e7,699e6,708e6,717e6,727e6,736e6,745e6,755e6,764e6,774e6,779e6,784e6,789e6,793e6,798e6,803e6,808e6,813e6,818e6,813e6,818e6,823e6,827e6,832e6,837e6,842e6,847e6,852e6,856e6,861e6,866e6,871e6,876e6,881e6,885e6,89e7,895e6,9e8,905e6,91e7,914e6,919e6,924e6,929e6,934e6,939e6,943e6,948e6,953e6,958e6,963e6,968e6,973e6,977e6,982e6,987e6,992e6,997e6,1e9,101e7,101e7,102e7,102e7,103e7,103e7,104e7,104e7,105e7,105e7,105e7,106e7,106e7,107e7,107e7,108e7,108e7,109e7,109e7,11e8,11e8,111e7,111e7,112e7,112e7,113e7,113e7,114e7,114e7,115e7,115e7,116e7,116e7,117e7,117e7,118e7,118e7,119e7,119e7,12e8,12e8,12e8,121e7,121e7,122e7,122e7,123e7,123e7,124e7,124e7,125e7,125e7,126e7,126e7,127e7,127e7,128e7,128e7,129e7,129e7,13e8,13e8,131e7,131e7,132e7,132e7,133e7,133e7,134e7,134e7,135e7,135e7,135e7,136e7,136e7,137e7,137e7,138e7,138e7,139e7,139e7,14e8,14e8,141e7,141e7,142e7,142e7,143e7,143e7,144e7,144e7,145e7,145e7,146e7,146e7,147e7,147e7,148e7,148e7,149e7,149e7,15e8,15e8,15e8,151e7,151e7,152e7,152e7,153e7,153e7,154e7,154e7,155e7,155e7,156e7,156e7,157e7,157e7,158e7,158e7,159e6],Q3=[0,0,0,0,0,5,8,10,12,25,38,44,51,59,190,275,393,588,655,1008,1113,1220,1333,1453,2205,2385,2575,2775,2975,3e3],Xf=328,Uu=159e7,Zf=30,Pu=3e3,Yf={math_tool:{LATAM:"Herramienta de cálculo",USD:"Math Tool",PT:"Ferramenta de cálculo",FR:"Outil de calcul",DE:"Berechnungstool"},calculator:{LATAM:"CALCULADORA",USD:"CALCULATOR",PT:"CALCULADORA",FR:"CALCULATEUR",DE:"RECHNER"},hero_desc:{LATAM:"Calcula hasta qué EVO puedes subir según tus recursos y el descuento.",USD:"Calculate your maximum EVO based on your resources and active discounts.",PT:"Calcule o EVO máximo que você pode atingir com base em seus recursos e descontos.",FR:"Calculez votre EVO maximum en fonction de vos ressources et des réductions.",DE:"Berechnen Sie Ihr maximales EVO basierend auf Ihren Ressourcen und Rabatten."},current_evo:{LATAM:"EVO actual",USD:"Current EVO",PT:"EVO atual",FR:"EVO actuel",DE:"Aktuelles EVO"},available_credits:{LATAM:"Créditos disponibles",USD:"Available Credits",PT:"Créditos disponíveis",FR:"Crédits disponibles",DE:"Verfügbare Credits"},available_gold:{LATAM:"Oro disponible",USD:"Available Gold",PT:"Ouro disponível",FR:"Or disponible",DE:"Verfügbares Gold"},applied_discount:{LATAM:"Descuento aplicado",USD:"Applied Discount",PT:"Desconto aplicado",FR:"Réduction appliquée",DE:"Angewandter Rabatt"},calculate_evo:{LATAM:"Calcular EVO",USD:"Calculate EVO",PT:"Calcular EVO",FR:"Calculer l'EVO",DE:"EVO berechnen"},reset:{LATAM:"Reiniciar",USD:"Reset",PT:"Reiniciar",FR:"Réinitialiser",DE:"Zurücksetzen"},you_will_reach:{LATAM:"Llegarás a",USD:"YOU WILL REACH",PT:"VOCÊ VAI ALCANÇAR",FR:"VOUS ATTEINDREZ",DE:"SIE WERDEN ERREICHEN"},levels:{LATAM:"niveles",USD:"levels",PT:"níveis",FR:"niveaux",DE:"Ebenen"},discount:{LATAM:"Descuento",USD:"Discount",PT:"Desconto",FR:"Réduction",DE:"Rabatt"},credits_spent:{LATAM:"Gasto Créditos",USD:"Credits Spent",PT:"Créditos Gastos",FR:"Crédits dépensés",DE:"Verwendete Credits"},gold_spent:{LATAM:"Gasto Oro",USD:"Gold Spent",PT:"Ouro Gasto",FR:"Or dépensé",DE:"Verwendetes Gold"},credits_left:{LATAM:"Sobran Créditos",USD:"Credits Left",PT:"Créditos Restantes",FR:"Crédits restants",DE:"Verbleibende Credits"},gold_left:{LATAM:"Sobra Oro",USD:"Gold Left",PT:"Ouro Restante",FR:"Or restant",DE:"Verbleibendes Gold"},enter_resources:{LATAM:"Ingresa tus recursos y presiona Calcular para ver el resultado.",USD:"Enter your resources and press Calculate to see the result.",PT:"Insira seus recursos e pressione Calcular para ver o resultado.",FR:"Saisissez vos ressources et cliquez sur Calculer pour voir le résultat.",DE:"Geben Sie Ihre Ressourcen ein und drücken Sie Berechnen, um das Ergebnis zu sehen."},note:{LATAM:"Nota:",USD:"Note:",PT:"Nota:",FR:"Remarque :",DE:"Hinweis:"},note_desc:{LATAM:"Cálculo basado en reglas de MGG: cap de oro (30) y cap de créditos (328).",USD:"Calculation based on MGG rules: gold cap (30) and credit cap (328).",PT:"Cálculo baseado nas regras do MGG: limite de ouro (30) e limite de créditos (328).",FR:"Calcul basé sur les règles du MGG : limite d'or (30) et limite de crédits (328).",DE:"Berechnung basierend auf MGG-Regeln: Goldgrenze (30) und Creditgrenze (328)."}};function $3(){const{region:n}=We(),[s,l]=C.useState(1),[r,d]=C.useState(""),[p,g]=C.useState(""),[b,x]=C.useState(0),[m,f]=C.useState(null),_=v=>{var S,T;return((S=Yf[v])==null?void 0:S[n])||((T=Yf[v])==null?void 0:T.USD)||""},y=()=>{let v=r===""?0:r,S=p===""?0:p,T=s===""?1:s;const N=b,L=T,E=(100-N)*.01,V=v,K=S;let J=0;if(T>=Xf){const F=Uu*E,B=Math.floor(v/F);v-=B*F,J=T+B}else for(;;){if(T>=Xf){const B=Uu*E,Z=Math.floor(v/B);v-=Z*B,J=T+Z;break}const F=Math.floor((Y3[T]??Uu)*E);if(v-F>=0)v-=F,T+=1;else{J=T;break}}let R=0;if(J>=Zf){const F=Pu*E,B=Math.floor(S/F);S-=B*F,R=B}else for(;;){if(R+J>=Zf){const Z=Pu*E,ae=Math.floor(S/Z);S-=ae*Z,R=ae;break}const F=Q3[J+R]??Pu,B=Math.round(F*E);if(S-B>=0)S-=B,R+=1;else break}const H=J+R;f({nuevoEvo:H,incremento:H-L,gastoCreditos:Math.max(0,V-v),gastoOro:Math.max(0,K-S),sobraCreditos:v,sobraOro:S,descuentoAplicado:N})},G=()=>{l(1),d(""),g(""),x(0),f(null)};return i.jsxs("div",{className:"flex flex-col gap-6",children:[i.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[i.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-20",children:i.jsx(Mr,{size:120,className:"text-blue-brand-2"})}),i.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[i.jsx(Mr,{size:14,className:"mr-1 text-blue-brand-2"}),i.jsx("span",{children:_("math_tool")})]}),i.jsxs("h1",{className:"text-3xl md:text-6xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:["EVO ",i.jsx("span",{className:"text-blue-brand-2",children:_("calculator")})]}),i.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:_("hero_desc")})]}),i.jsx(dn,{}),i.jsxs("div",{className:"grid md:grid-cols-[1fr_1.2fr] gap-4 md:gap-6 items-start",children:[i.jsx("section",{className:"panel flex flex-col gap-5 !p-4 md:!p-6 border border-white/10 bg-white/[0.01] hover:border-blue-brand/20 transition-all",children:i.jsxs("div",{className:"grid gap-3.5",children:[i.jsxs("label",{className:"kv",children:[i.jsx("span",{className:"kv-label text-[10px]",children:_("current_evo")}),i.jsx("input",{value:s,onChange:v=>l(v.target.value===""?"":Number(v.target.value)),placeholder:"1",className:"input py-2.5 text-sm focus:border-blue-brand-2/60 bg-white/[0.02] text-white transition-all",type:"number"})]}),i.jsxs("label",{className:"kv",children:[i.jsx("span",{className:"kv-label text-[10px]",children:_("available_credits")}),i.jsx("input",{value:r,onChange:v=>d(v.target.value===""?"":Number(v.target.value)),placeholder:"0",className:"input py-2.5 text-sm focus:border-blue-brand-2/60 bg-white/[0.02] text-white transition-all",type:"number"})]}),i.jsxs("label",{className:"kv",children:[i.jsx("span",{className:"kv-label text-[10px]",children:_("available_gold")}),i.jsx("input",{value:p,onChange:v=>g(v.target.value===""?"":Number(v.target.value)),placeholder:"0",className:"input py-2.5 text-sm focus:border-blue-brand-2/60 bg-white/[0.02] text-white transition-all",type:"number"})]}),i.jsxs("div",{children:[i.jsx("div",{className:"kv-label text-[10px] mb-2",children:_("applied_discount")}),i.jsx("div",{className:"grid grid-cols-3 gap-2",children:xy.map(v=>i.jsxs("button",{onClick:()=>x(v),className:`btn py-2 text-xs rounded-xl transition-all duration-200 ${b===v?"btn-primary":"bg-white/5 opacity-60 hover:bg-white/10 hover:border-white/15"}`,children:[v,"%"]},v))})]}),i.jsxs("div",{className:"flex gap-2 mt-2",children:[i.jsx("button",{onClick:y,className:"btn btn-primary flex-[2] py-3 text-sm transition-all duration-200",children:_("calculate_evo")}),i.jsx("button",{onClick:G,className:"btn flex-1 py-3 text-sm border border-white/5 bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200",children:_("reset")})]})]})}),i.jsx("section",{className:"h-full min-h-[360px]",children:m?i.jsxs("div",{className:"panel h-full flex flex-col items-center justify-center text-center p-6 md:p-8 relative overflow-hidden transition-all duration-700 border-none bg-gradient-to-br from-blue-brand/35 via-blue-brand-2/15 to-[#0b0f19] shadow-2xl shadow-blue-brand-2/10",children:[i.jsx("div",{className:"absolute inset-0 bg-[url('https://github.com/luqueSmith/MGG/blob/main/img/Logo_mgg.png?raw=true')] bg-no-repeat bg-center opacity-[0.03] scale-150 pointer-events-none"}),i.jsx("div",{className:"kv-label uppercase tracking-widest text-[10px] opacity-70 mb-2 z-10 text-blue-200",children:_("you_will_reach")}),i.jsx("div",{className:"text-[5rem] md:text-[6rem] font-black tracking-tighter leading-none mb-2 z-10 drop-shadow-xl text-white",children:Gs(m.nuevoEvo)}),i.jsxs("p",{className:"text-xs md:text-sm mb-6 z-10 font-bold opacity-80 text-blue-200",children:["+",Gs(m.incremento)," ",_("levels")," · ",m.descuentoAplicado,"% ",_("discount")]}),i.jsxs("div",{className:"grid grid-cols-2 gap-2 md:gap-3 w-full z-10",children:[i.jsxs("div",{className:"border border-white/5 bg-black/40 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[i.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-blue-200/50",children:_("credits_spent")}),i.jsx("strong",{className:"text-sm md:text-base text-white",children:Gs(m.gastoCreditos)})]}),i.jsxs("div",{className:"border border-white/5 bg-black/40 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[i.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-blue-200/50",children:_("gold_spent")}),i.jsx("strong",{className:"text-sm md:text-base text-white",children:Gs(m.gastoOro)})]}),i.jsxs("div",{className:"border border-white/5 bg-black/20 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[i.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-white/30",children:_("credits_left")}),i.jsx("strong",{className:"text-sm md:text-base text-white/80",children:Gs(m.sobraCreditos)})]}),i.jsxs("div",{className:"border border-white/5 bg-black/20 p-3 rounded-xl flex flex-col items-center shadow-inner",children:[i.jsx("span",{className:"text-[8px] md:text-[9px] uppercase font-bold mb-1 text-white/30",children:_("gold_left")}),i.jsx("strong",{className:"text-sm md:text-base text-white/80",children:Gs(m.sobraOro)})]})]})]}):i.jsxs("div",{className:"panel h-full flex flex-col items-center justify-center text-muted gap-4 border-dashed border-white/10 hover:border-blue-brand/20 transition-all bg-white/[0.01] hover:bg-white/[0.02]",children:[i.jsx(Mr,{size:48,className:"opacity-10"}),i.jsx("p",{className:"text-sm max-w-[200px] text-center",children:_("enter_resources")})]})})]}),i.jsxs("section",{className:"panel flex gap-4 items-center transition-all border border-blue-brand/20 bg-blue-brand/5 shadow-inner !p-4",children:[i.jsx(Zr,{size:20,className:"text-blue-brand-2 shrink-0"}),i.jsxs("div",{className:"text-[11px] md:text-xs leading-relaxed",children:[i.jsx("strong",{className:"text-white",children:_("note")})," ",_("note_desc")]})]})]})}const J3={"Ficha Reactor":"Reactor Token","Ficha Jackpot":"Jackpot Token","Tickets x25":"Energy Tickets x25","Tickets x5":"Energy Tickets x5","Triple Experiencia":"Triple Experience","Cuádruple Regeneración":"Quadruple Regeneration","Ficha Reto":"Challenge Token","Doble Experiencia":"Double Experience","Ataques Críticos":"Critical Attacks","Escudo Anticrítico":"Anticritical Shield","Doble Regeneración":"Double Regeneration"};function W3(){const{region:n,translate:s}=We(),l=n==="USD",r=Object.keys(kb),[d,p]=C.useState(""),[g,b]=C.useState(r[0]),[x,m]=C.useState(12),f=T=>l?T.startsWith("Orbe ")?T.replace("Orbe Ataque","Attack Orb").replace("Orbe Vida","Life Orb").replace("Orbe Críticos","Critical Orb").replace("Orbe Experiencia","Experience Orb").replace("Orbe Regeneración","Regeneration Orb").replace("Orbe Respuesta","Retaliate Orb"):J3[T]||T:T,_=C.useMemo(()=>{const T=[];return Object.entries(kb).forEach(([N,L])=>{String(L||"").split(/\r?\n/).map(E=>E.trim()).filter(Boolean).forEach(E=>{const V=E.split("	");T.push({nombre:(V[0]||"").trim(),codigo:(V[1]||"").trim(),categoria:N,imagen:(V[2]||"").trim()||void 0})})}),T},[]),y=C.useMemo(()=>{const T=d.toLowerCase();return _.filter(N=>N.categoria===g&&(N.nombre.toLowerCase().includes(T)||N.codigo.toLowerCase().includes(T)))},[_,d,g]),[G,v]=C.useState(null),S=T=>{navigator.clipboard.writeText(T.toLowerCase()).catch(()=>{}),v(T),setTimeout(()=>v(null),2e3)};return i.jsxs("div",{className:"flex flex-col gap-6",children:[i.jsxs("section",{className:"hero !p-6 md:!p-12 relative overflow-hidden",children:[i.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[i.jsx(Ku,{size:14}),i.jsx("span",{children:l?"Secondary Catalog":"Catálogo secundario"})]}),i.jsxs("h1",{className:"text-3xl md:text-6xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[0.95]",children:[l?"EXTRA":"OTROS"," ",i.jsx("span",{className:"text-blue-brand-2",children:l?"CODES":"CÓDIGOS"})]}),i.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:l?"Orbs, consumables, structures, boxes, and offers filtered by category.":"Orbes, consumibles, estructuras, cajas y ofertas filtradas por categoría."})]}),i.jsx(dn,{}),i.jsxs("section",{className:"panel flex flex-col gap-4 !p-4 md:!p-6 transition-all border",children:[i.jsx("div",{className:"flex flex-wrap gap-2 text-center",children:r.map(T=>i.jsx("button",{onClick:()=>{b(T),m(12)},className:`flex-1 min-w-[120px] px-4 py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${g===T?"bg-blue-brand border-blue-brand-2 text-white shadow-lg":"bg-white/5 border-transparent text-slate-400 hover:bg-white/10"}`,children:l?T==="Cajas"?"Boxes":T==="Recursos"?"Resources":T==="Orbes"?"Orbs":T:T},T))}),i.jsxs("div",{className:"relative",children:[i.jsx(Oi,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-white/40"}),i.jsx("input",{value:d,onChange:T=>p(T.target.value),placeholder:l?`Search in ${g}...`:`Buscar en ${g}...`,className:"input pl-11 py-3.5 text-sm"})]})]}),i.jsx("section",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4",children:y.length>0?y.slice(0,x).map((T,N)=>i.jsxs("article",{className:"card p-4 flex flex-col gap-3 group transition-all border hover:border-blue-brand/40",children:[T.imagen?i.jsx("div",{className:"flex items-center justify-center p-3 rounded-xl aspect-square overflow-hidden transition-colors bg-white/5",children:i.jsx("img",{src:T.imagen,alt:f(T.nombre),className:"w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"})}):i.jsx("div",{className:"flex items-center justify-center p-3 rounded-xl aspect-square overflow-hidden opacity-30 bg-blue-brand/10 text-blue-brand-2",children:i.jsx(Ku,{size:32})}),i.jsxs("div",{className:"flex-1 flex flex-col pt-1",children:[i.jsx("h3",{className:"text-xs md:text-sm font-black uppercase tracking-tight mb-1 line-clamp-1 transition-colors",children:f(T.nombre)}),i.jsx("div",{className:"font-mono font-bold text-[9px] md:text-[10px] tracking-widest uppercase mb-4 opacity-80 text-blue-brand-2",children:T.codigo}),i.jsxs("button",{onClick:()=>S(T.codigo),className:`btn w-full text-[10px] font-black uppercase tracking-widest py-2.5 rounded-xl mt-auto transition-all ${G===T.codigo?"bg-green-brand/20 border-green-brand/30 text-green-brand":"hover:bg-blue-brand/15"}`,children:[G===T.codigo?i.jsx(on,{size:12}):i.jsx(Xu,{size:12}),i.jsx("span",{children:G===T.codigo?l?"DONE":"LISTO":l?"COPY":"COPIAR"})]})]})]},N)):i.jsx("div",{className:"col-span-full py-16 text-center border font-bold uppercase tracking-widest text-[10px] rounded-2xl bg-[#0d1421] border-line text-muted",children:l?"No codes found in this section.":"No se encontraron códigos en esta sección."})}),y.length>x&&i.jsx("div",{className:"flex justify-center mt-6",children:i.jsx("button",{onClick:()=>m(T=>T+12),className:"btn px-12 py-3.5 rounded-xl font-black uppercase tracking-widest text-xs transition-all bg-blue-brand/10 border-blue-brand/20 hover:bg-blue-brand/20",children:l?"Load More":"Cargar más"})})]})}function ap({pageId:n}){const{currentUser:s,comments:l,addComment:r,editComment:d,deleteComment:p,addReply:g,deleteReply:b}=Rn(),{colorTheme:x,translate:m}=We(),[f,_]=C.useState(""),[y,G]=C.useState(null),[v,S]=C.useState(""),[T,N]=C.useState(null),[L,E]=C.useState(""),K=(()=>{switch(x){case"green":return{text:"text-green-brand",hoverText:"hover:text-green-400",bg:"bg-green-500/5",border:"border-green-500/20",accentBorder:"border-green-500/40",btn:"bg-green-600 hover:bg-green-500 text-white shadow-green-900/30",badge:"bg-green-500/20 text-green-300 border-green-500/30"};case"red":return{text:"text-red-400",hoverText:"hover:text-red-300",bg:"bg-red-500/5",border:"border-red-500/20",accentBorder:"border-red-500/40",btn:"bg-red-600 hover:bg-red-500 text-white shadow-red-900/30",badge:"bg-red-500/20 text-red-300 border-red-500/30"};case"pink":return{text:"text-pink-400",hoverText:"hover:text-pink-300",bg:"bg-pink-500/5",border:"border-pink-500/20",accentBorder:"border-pink-500/40",btn:"bg-pink-600 hover:bg-pink-500 text-white shadow-pink-900/30",badge:"bg-pink-500/20 text-pink-300 border-pink-500/30"};case"purple":return{text:"text-purple-400",hoverText:"hover:text-purple-300",bg:"bg-purple-500/5",border:"border-purple-500/20",accentBorder:"border-purple-500/40",btn:"bg-purple-600 hover:bg-purple-500 text-white shadow-purple-900/30",badge:"bg-purple-500/20 text-purple-300 border-purple-500/30"};case"white":return{text:"text-slate-200",hoverText:"hover:text-white",bg:"bg-white/5",border:"border-white/20",accentBorder:"border-white/40",btn:"bg-white text-black hover:bg-slate-200 shadow-slate-900/30",badge:"bg-white/20 text-white border-white/30"};case"blue":default:return{text:"text-blue-brand-2",hoverText:"hover:text-blue-400",bg:"bg-blue-brand/5",border:"border-blue-brand/20",accentBorder:"border-blue-brand/40",btn:"bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/30",badge:"bg-blue-500/20 text-blue-300 border-blue-500/30"}}})(),J=Q=>new Date(Q).toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),R=l.filter(Q=>Q.page===n),H=Q=>{Q.preventDefault(),f.trim()&&(r(n,f),_(""))},F=(Q,ie)=>{Q.preventDefault(),v.trim()&&(g(ie,v),S(""),G(null))},B=(Q,ie)=>{N(Q),E(ie)},Z=Q=>{L.trim()&&(d(Q,L),N(null),E(""))},ae=()=>{window.location.hash="/login",window.scrollTo({top:0,behavior:"smooth"})},ee=Q=>{switch(Q){case"Creador":return"bg-red-500/20 text-red-300 border border-red-500/30";case"Moderador":return"bg-yellow-500/20 text-yellow-300 border border-yellow-500/30";case"Gladiador":return"bg-blue-500/20 text-blue-300 border border-blue-500/30";default:return"bg-slate-500/10 text-slate-400 border border-slate-500/20"}};return i.jsxs("div",{id:`comments-${n}`,className:"mt-12 select-none",children:[i.jsxs("div",{className:"mb-5 sm:mb-6 text-left",children:[i.jsxs("div",{className:"flex items-center gap-2.5 sm:gap-3",children:[i.jsx(Is,{className:`${K.text} w-5 h-5 sm:w-6 sm:h-6 shrink-0`}),i.jsx("h2",{className:"text-base sm:text-lg md:text-2xl font-black uppercase text-white tracking-tight",children:n==="descargas"?"Comunidad de Descargas":n==="comunidad"?"Mesa de Diálogo General":"Comentarios de la Guía"}),i.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-white/5 border border-white/10 text-slate-400 shrink-0",children:R.length})]}),n==="comunidad"&&i.jsx("p",{className:"text-xs text-slate-400 mt-1 max-w-xl font-medium leading-relaxed",children:"Comparte tus dudas de hibridación, pide stats de códigos o diviértete con otros gladiadores."})]}),i.jsxs("div",{className:"grid lg:grid-cols-[1.3fr_1fr] gap-8",children:[i.jsxs("div",{className:"space-y-6",children:[s?i.jsx(Qe.form,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},onSubmit:H,className:`p-4 sm:p-5 rounded-2xl bg-[#050a14] border ${K.border} relative overflow-hidden`,children:i.jsxs("div",{className:"flex gap-3 sm:gap-4 items-start",children:[i.jsx("div",{className:"w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-white/10 shrink-0 bg-[#0a1224]",children:i.jsx("img",{src:s.avatarUrl,alt:s.publicName,className:"w-full h-full object-cover"})}),i.jsxs("div",{className:"flex-1 space-y-3",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:"text-xs font-black text-white hover:underline",children:s.publicName}),i.jsx("span",{className:`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ${ee(s.status)}`,children:s.status})]}),i.jsx("textarea",{rows:3,placeholder:"Escribe un comentario constructivo para la comunidad...",value:f,onChange:Q=>_(Q.target.value),className:"w-full bg-[#0a1224] border border-white/10 rounded-xl p-3 text-sm text-slate-200 outline-none focus:border-blue-brand/50 transition-all resize-none font-sans"}),i.jsx("div",{className:"flex justify-end",children:i.jsxs("button",{type:"submit",disabled:!f.trim(),className:`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${f.trim()?`${K.btn} hover:scale-[1.02] active:scale-95`:"bg-white/5 border border-white/5 text-slate-500 cursor-not-allowed"}`,children:[i.jsx(Qk,{size:12}),i.jsx("span",{children:"Publicar"})]})})]})]})}):i.jsxs("div",{className:`p-4 sm:p-6 rounded-[1.25rem] sm:rounded-[1.5rem] bg-gradient-to-br from-[#0c162d] to-[#050a14] border ${K.border} relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6`,children:[i.jsxs("div",{className:"flex gap-3 sm:gap-4 items-start text-left",children:[i.jsx("div",{className:`w-10 h-10 sm:w-12 sm:h-12 rounded-xl shrink-0 ${K.bg} flex items-center justify-center border ${K.border}`,children:i.jsx(Ns,{className:`w-4.5 h-4.5 sm:w-5 sm:h-5 ${K.text}`})}),i.jsxs("div",{className:"space-y-1",children:[i.jsx("h4",{className:"text-xs sm:text-sm font-black text-white uppercase tracking-wider",children:"¿Tiene dudas o aportes?"}),i.jsx("p",{className:"text-[10px] sm:text-xs text-slate-400 max-w-sm sm:max-w-md font-medium leading-relaxed",children:"Cualquier visitante puede leer comentarios, pero debes iniciar sesión para comentar, tener un perfil de gladiador, y recibir soporte de la comunidad."})]})]}),i.jsx("button",{onClick:ae,className:`w-full md:w-auto px-4.5 py-3 rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-widest cursor-pointer transition-all ${K.btn} hover:scale-[1.03] active:scale-95`,children:"Iniciar sesión para comentar"})]}),i.jsx("div",{className:"space-y-5",children:i.jsx(ia,{mode:"popLayout",children:R.length===0?i.jsxs(Qe.div,{initial:{opacity:0},animate:{opacity:1},className:"text-center p-8 bg-white/[0.02] border border-white/5 rounded-2xl",children:[i.jsx(Is,{className:"w-10 h-10 text-slate-600 mx-auto mb-3 opacity-45"}),i.jsx("p",{className:"text-slate-400 text-sm font-bold uppercase tracking-wider",children:"Aún no hay comentarios"}),i.jsx("p",{className:"text-slate-500 text-xs mt-1",children:"Sé el primero en iniciar sesión y comentar en esta sección."})]}):R.map((Q,ie)=>{const I=(s==null?void 0:s.id)===Q.userId,W=(s==null?void 0:s.status)==="Creador"||(s==null?void 0:s.status)==="Moderador",O=T===Q.id,ne=Q.userId==="usr_master"?"Moderador":Q.userId==="usr_smith"?"Creador":Q.userId==="usr_gladiador"?"Gladiador":"Miembro";return i.jsx(Qe.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},exit:{opacity:0,scale:.95},transition:{delay:ie*.03},className:"p-4 sm:p-5 rounded-[1.25rem] sm:rounded-[1.5rem] bg-[#070e1b] border border-white/10 relative text-left",children:i.jsxs("div",{className:"flex gap-3 sm:gap-4 items-start",children:[i.jsx("div",{className:"w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-white/10 shrink-0 bg-[#0d162d]",children:i.jsx("img",{src:Q.avatarUrl||"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_01_platinum.png",alt:Q.publicName,className:"w-full h-full object-cover"})}),i.jsxs("div",{className:"flex-1 min-w-0 space-y-2",children:[i.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4",children:[i.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[i.jsx("span",{className:"text-xs font-black text-white",children:Q.publicName}),i.jsxs("span",{className:"text-[9px] sm:text-[10px] text-slate-500 font-mono",children:["@",Q.username]}),i.jsx("span",{className:`text-[7px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded uppercase ${ee(ne)}`,children:ne})]}),i.jsxs("div",{className:"flex items-center gap-1 text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase shrink-0",children:[i.jsx(nk,{size:9,className:"opacity-60"}),i.jsx("span",{children:J(Q.createdAt)})]})]}),O?i.jsxs("div",{className:"space-y-3 mt-2",children:[i.jsx("textarea",{value:L,onChange:se=>E(se.target.value),rows:2,className:"w-full bg-[#0a1224] border border-blue-brand/50 rounded-xl p-3 text-sm text-slate-200 outline-none font-sans"}),i.jsxs("div",{className:"flex gap-2 justify-end",children:[i.jsx("button",{onClick:()=>N(null),className:"px-3.5 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 text-slate-400 text-[10px] font-black uppercase tracking-wider cursor-pointer",children:"Cancelar"}),i.jsxs("button",{onClick:()=>Z(Q.id),className:"px-3.5 py-1.5 rounded-lg bg-green-600 hover:bg-green-500 text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-1 cursor-pointer",children:[i.jsx(Q2,{size:10}),"Guardar"]})]})]}):i.jsx("p",{className:"text-sm text-slate-300 leading-relaxed break-words font-medium",children:Q.text}),i.jsxs("div",{className:"flex items-center gap-4 pt-1 text-[11px] font-bold uppercase select-none",children:[s&&!O&&i.jsxs("button",{onClick:()=>{G(y===Q.id?null:Q.id),S("")},className:`flex items-center gap-1.5 text-slate-400 ${K.hoverText} transition-colors cursor-pointer`,children:[i.jsx(Uk,{size:11,className:"scale-x-[-1]"}),i.jsx("span",{children:"Responder"})]}),I&&!O&&i.jsxs("button",{onClick:()=>B(Q.id,Q.text),className:"flex items-center gap-1.5 text-slate-400 hover:text-yellow-400 transition-colors cursor-pointer",children:[i.jsx(Lk,{size:11}),i.jsx("span",{children:"Editar"})]}),(I||W)&&i.jsxs("button",{onClick:()=>{p(Q.id)},className:"flex items-center gap-1.5 text-red-500/80 hover:text-red-400 transition-colors cursor-pointer ml-auto",children:[i.jsx(_b,{size:11}),i.jsx("span",{children:"Eliminar"})]})]}),Q.replies.length>0&&i.jsx("div",{className:"mt-4 pl-3 sm:pl-4 border-l border-white/5 space-y-4 pt-2",children:Q.replies.map(se=>{const A=(s==null?void 0:s.id)===se.userId,P=se.userId==="usr_master"?"Moderador":se.userId==="usr_smith"?"Creador":se.userId==="usr_gladiador"?"Gladiador":"Miembro";return i.jsxs("div",{className:"flex gap-2.5 sm:gap-3 items-start",children:[i.jsx("div",{className:"w-7 h-7 sm:w-8 sm:h-8 rounded-lg overflow-hidden border border-white/5 shrink-0 bg-[#0a1224]",children:i.jsx("img",{src:se.avatarUrl||"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_01_platinum.png",alt:se.publicName,className:"w-full h-full object-cover"})}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3",children:[i.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[i.jsx("span",{className:"text-[11px] font-black text-white",children:se.publicName}),i.jsx("span",{className:`text-[7px] font-bold px-1 py-0.2 rounded uppercase ${ee(P)}`,children:P})]}),i.jsx("span",{className:"text-[8px] text-slate-500 font-medium",children:J(se.createdAt)})]}),i.jsx("p",{className:"text-xs text-slate-300 leading-relaxed font-semibold mt-1 break-words",children:se.text}),(A||W)&&i.jsxs("button",{onClick:()=>{b(Q.id,se.id)},className:"text-[9px] font-black text-red-500/80 hover:text-red-400 uppercase tracking-widest mt-1 inline-flex items-center gap-1 cursor-pointer",children:[i.jsx(_b,{size:9}),i.jsx("span",{children:"Eliminar"})]})]})]},se.id)})}),i.jsx(ia,{children:y===Q.id&&i.jsx(Qe.form,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},onSubmit:se=>F(se,Q.id),className:"pt-2",children:i.jsxs("div",{className:"flex gap-2 items-end",children:[i.jsx("input",{type:"text",placeholder:`Responder a ${Q.publicName}...`,value:v,onChange:se=>S(se.target.value),className:"flex-1 bg-[#0a1224] border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none focus:border-blue-brand/40",autoFocus:!0}),i.jsxs("div",{className:"flex gap-1.5",children:[i.jsx("button",{type:"button",onClick:()=>G(null),className:"p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white cursor-pointer",children:i.jsx(Qu,{size:12})}),i.jsx("button",{type:"submit",disabled:!v.trim(),className:`px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider cursor-pointer ${v.trim()?K.btn:"bg-white/5 text-slate-500 cursor-not-allowed"}`,children:"Responder"})]})]})})})]})]})},Q.id)})})})]}),i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{className:"p-6 rounded-[2rem] bg-gradient-to-b from-[#0a1224] to-[#040812] border border-white/10 text-left relative overflow-hidden",children:[i.jsx("div",{className:`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl ${x==="blue"?"bg-blue-500/15":x==="green"?"bg-green-500/15":"bg-red-500/15"} pointer-events-none`}),i.jsxs("h3",{className:"text-md font-black text-white uppercase tracking-wider mb-4 flex items-center gap-2",children:[i.jsx(i0,{className:`w-4 h-4 ${K.text}`}),i.jsx("span",{children:"Beneficios de Gladiador"})]}),i.jsxs("div",{className:"space-y-4 text-xs font-medium text-slate-300",children:[i.jsxs("div",{className:"flex gap-3 items-start",children:[i.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${K.text} shrink-0 mt-1.5`}),i.jsxs("div",{children:[i.jsx("strong",{className:"text-white",children:"Identidad Propia:"})," Elige tu foto de perfil de una selección de Mutantes legendarios de MGG o introduce un link para lucirte ante otros."]})]}),i.jsxs("div",{className:"flex gap-3 items-start",children:[i.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${K.text} shrink-0 mt-1.5`}),i.jsxs("div",{children:[i.jsx("strong",{className:"text-white",children:"Sección de Foro:"})," Comenta en las descargas sobre cómo te rinden los links o comparte tus recetas de hibridación en la guía."]})]}),i.jsxs("div",{className:"flex gap-3 items-start",children:[i.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${K.text} shrink-0 mt-1.5`}),i.jsxs("div",{children:[i.jsx("strong",{className:"text-white",children:"Historial Guardado:"})," Al iniciar sesión mantienes tu reputación y tu rango dentro de la comunidad de Mutodex."]})]}),i.jsxs("div",{className:"flex gap-3 items-start",children:[i.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${K.text} shrink-0 mt-1.5`}),i.jsxs("div",{children:[i.jsx("strong",{className:"text-white",children:"Futuras Votaciones:"})," Prepárate, los usuarios con sesión iniciada podrán votar pronto por el mejor mutante de cada categoría."]})]})]}),i.jsxs("div",{className:"mt-6 pt-5 border-t border-white/5 space-y-3",children:[i.jsx("p",{className:"text-[10px] text-slate-500",children:"La base de datos y la sesión se guardan de manera segura en tu navegador de forma persistente."}),!s&&i.jsx("button",{onClick:ae,className:`w-full py-3 rounded-xl text-xs font-black uppercase tracking-widest cursor-pointer transition-transform hover:scale-[1.01] ${K.btn}`,children:"Regístrate ahora gratis"})]})]}),i.jsx("div",{className:"p-5 rounded-2xl bg-white/[0.01] border border-white/5 text-center text-slate-500 text-[10px] font-bold uppercase",children:"SOPORTE MUTODEX: LUQUESMITH537@GMAIL.COM"})]})]})]})}const Qf={quick_manual:{LATAM:"Manual de Uso Detallado",USD:"Detailed User Manual",PT:"Manual de Uso Detalhado",FR:"Manuel d'Utilisation Détaillé",DE:"Detailliertes Benutzerhandbuch"},title1:{LATAM:"GUÍA",USD:"WEBSITE",PT:"GUIA",FR:"GUIDE",DE:"PLATTFORM"},title2:{LATAM:"COMPLETA",USD:"GUIDE",PT:"COMPLETO",FR:"COMPLET",DE:"HANDBUCH"},subtitle:{LATAM:"Descubre paso a paso cómo utilizar cada herramienta de nuestra plataforma para potenciar tu experiencia en Mutants: Genetic Gladiators.",USD:"Discover step-by-step how to utilize every single tool on our platform to enhance your gameplay in Mutants: Genetic Gladiators.",PT:"Descubra passo a passo como utilizar cada ferramenta da nossa plataforma para maximizar sua experiência no Mutants: Genetic Gladiators.",FR:"Découvrez étape par étape comment utiliser chaque outil de notre plateforme pour enrichir votre expérience sur Mutants: Genetic Gladiators.",DE:"Erfahren Sie Schritt für Schritt, wie Sie jedes Tool auf unserer Plattform nutzen, um Ihr Spielerlebnis in Mutants: Genetic Gladiators zu verbessern."},sec1_title:{LATAM:"1. Lista de Mutantes y Filtros (Inicio)",USD:"1. Mutant List & Filters (Home)",PT:"1. Lista de Mutantes e Filtros (Início)",FR:"1. Liste des Mutants et Filtres (Accueil)",DE:"1. Mutantenliste und Filter (Start)"},sec1_desc:{LATAM:"Domina el buscador de la base principal para encontrar mutantes al instante.",USD:"Master the main database search engine to find mutants instantly.",PT:"Domine a barra de pesquisa do banco de dados principal para encontrar mutantes instantaneamente.",FR:"Maîtrisez le moteur de recherche de la base principale pour trouver les mutants à l'instant.",DE:"Meistern Sie die Haupt-Suchmaschine, um jeden Mutanten sofort zu finden."},sec1_items:{LATAM:["Búsqueda Rápida: Filtra al escribir el nombre o el ID numérico en tiempo real sin recargar la página.","Filtro de Genes Dual: Selecciona hasta 2 genes. La lista mostrará únicamente mutantes que coincidan con ambos genes elegidos.","Traductor Regional: Traduce automáticamente nombres entre Español, Inglés, Português, Francés y Alemán.","Copiar Códigos: Haz clic en el recuadro del código numérico ID de un mutante para copiarlo de forma rápida."],USD:["Fast Search: Filter in real-time as you type any part of the mutant name or numerical ID code instantly.","Dual Gene Filters: Select up to 2 genes. The view updates to show only mutants carrying both selected genes.","Regional Translation: Switch mutant display names dynamically between Latin Spanish, English, Portuguese, French, and German.","Clipboard Copy: Tap the numerical ID button of any mutant to copy its gene code directly, ready for script injection."],PT:["Busca Rápida: Filtre em tempo real ao digitar qualquer parte do nome do mutante ou código de ID sem recarregar.","Filtros de Genes Duplos: Selecione até 2 genes para exibir apenas os mutantes que possuem ambos.","Tradução de Nomes: Mude o idioma dos nomes no seletor integrado para Espanhol, Inglês, Português, Francês ou Alemão.","Copiar Códigos: Clique sobre o ID de qualquer mutante para copiar o código diretamente para sua área de transferência."],FR:["Recherche Rapide: Filtrez en temps réel en saisissant le nom d'un mutant ou son identifiant numérique ID.","Filtre double de gènes: Sélectionnez jusqu'à 2 gènes. La liste affichera uniquement les mutants possédant ces deux gènes.","Traducteur intégré: Traduisez instantanément les noms de mutants entre l'espagnol, l'anglais, le portugais, le français et l'allemand.","Copier les options: Cliquez sur l'identifiant ID pour copier le code de gène instantanément dans votre presse-papiers."],DE:["Schnellsuche: Filtern Sie in Echtzeit, während Sie den Namen oder den numerischen ID-Code eines Mutanten eingeben.","Duale Genfilter: Wählen Sie bis zu 2 Gene aus. Es werden nur Mutanten angezeigt, die beide Gene besitzen.","Name übersetzen: Wechseln Sie im integrierten Wähler zwischen Spanisch, Englisch, Portugiesisch, Französisch und Deutsch.","Codes kopieren: Klicken Sie auf die numerische ID eines Mutanten, um den Code direkt in Ihre Zwischenablage zu kopieren."]},sec2_title:{LATAM:"2. Simulador de Script (Inicio)",USD:"2. Script Simulator (Home)",PT:"2. Simulador de Script (Início)",FR:"2. Simulateur de Script (Accueil)",DE:"2. Skript-Simulator (Start)"},sec2_desc:{LATAM:"Comprende el funcionamiento del menú de GameGuardian antes de ejecutarlo.",USD:"Understand how GameGuardian's menus and script choices work before executing.",PT:"Entenda como funciona o menu do GameGuardian antes de executar o script em jogo.",FR:"Comprenez comment fonctionne le menu GameGuardian avant de charger le script.",DE:"Verstehen Sie die Funktionsweise des GameGuardian-Menüs vor der Ausführung."},sec2_items:{LATAM:["Vista Previa: El panel interactivo sirve exclusivamente para probar visualmente cómo se estructuran las opciones de LUA.","Inyección de Genes: Permite simular los campos del script ingresando genes y códigos de mutantes, recreando los diálogos reales.","Familiarización Segura: Ideal para nuevos usuarios que quieran ver qué opciones presionar en la app móvil sin alterar el juego."],USD:["Visual Preview: The simulator is dedicated to showing you exactly how the GameGuardian options are laid out on screen.","Gene Injection Flow: Input genes and test custom parameters to recreate real script popups on-screen.","Risk-free Exploration: Perfect for beginners to practice script flows before launching the real tooling in-game."],PT:["Visualização Prévia: O simulador serve apenas para ver como são organizadas as opções do script no GameGuardian.","Injeção de Genes: Simule os inputs digitando mutantes e genes para obter feedbacks visuais idênticos aos do jogo.","Exploração Sem Riscos: Ideal para iniciantes se familiarizarem com os botões e recursos antes de rodar no celular."],FR:["Aperçu Visuel: Le simulateur sert uniquement à tester l'organisation visuelle des options du script LUA.","Injections Simulées: Entrez des combinaisons de gènes et de codes pour voir comment réagit l'interface en temps réel.","Sécurisé et Éducatif: Pratiquez l'enchaînement des menus sans connecter de compte ou modifier vos fichiers de jeu."],DE:["Visuelle Vorschau: Der Simulator zeigt Ihnen genau, wie die verschiedenen Menüs des LUA-Skripts aufgebaut sind.","Gen-Injektion testen: Geben Sie fiktive Mutanten-IDs und Gene ein, um zu sehen, wie die Dialoge im Spiel reagieren.","Sicheres Ausprobieren: Perfekt geeignet, um die Ausführung zu verstehen, ohne das echte Spiel zu verändern."]},sec3_title:{LATAM:"3. Descargas (Script e Instancias)",USD:"3. Downloads (Script & VMs)",PT:"3. Downloads (Script e VMs)",FR:"3. Téléchargements (Script & VMs)",DE:"3. Downloads (Skript & VMs)"},sec3_desc:{LATAM:"Descarga scripts actualizados y sistemas virtuales pre-configurados listos.",USD:"Download up-to-date scripts and pre-configured virtual environments ready to boot.",PT:"Baixe scripts atualizados e sistemas virtuais prontos para processar seu jogo.",FR:"Téléchargez les scripts mis à jour et les instances virtuelles pré-configurées.",DE:"Laden Sie aktuelle Skripte und vorkonfigurierte virtuelle Umgebungen direkt herunter."},sec3_items:{LATAM:["Últimas Versiones: Consigue de forma directa el Script LUA Definitivo en tu idioma (Español, Inglés, Portugués, etc.) listo para GameGuardian.","Instancias Virtuales Listas: Descarga las imágenes modificadas para PC (LDPlayer) y móvil (VPhone) con enlaces rápidos de Google Drive.","Todo Preparado: Estas instancias virtuales ya vienen con Root activo, GameGuardian de fábrica y el instalador de MGG listo.",'Guía Paso a Paso: Usa el botón verde "Ver Guía de Uso" en descargas para aprender a importar tu respaldo `.ldplayer` o configurar tu VM.'],USD:["Latest Releases: Grab the updated Ultimate LUA script files directly in multiple formats tailored for GameGuardian.","Pre-made VM Backups: Download ready-to-run images of LDPlayer (PC) and VPhone (Mobile) hosted on high-speed Google Drive.","Zero Complex Setup: These systems are packaged with Superuser (Root) enabled and GameGuardian pre-installed.","Import Guides: View dedicated setup guidelines on how to restore backup files and manage emulated environments."],PT:["Últimas Versões: Baixe o Script LUA oficial em seu formato compactado ou bruto, traduzido no seu idioma de preferência.","Máquinas Virtuais Prontas: Links diretos do Drive para baixar instâncias de LDPlayer (PC) e VPhone (Celular) otimizadas.","Configuração Zero: As instâncias já contam com Root, GameGuardian e MGG configurados e prontos para uso imediato.","Manual Integrado: Acessível através do botão de guia para saber como importar backups sem erros ou dependências."],FR:["Scripts à Jour: Récupérez les versions compressées ou décompressées du Script LUA traduits dans votre langue.","Systèmes Virtuels: Téléchargez les fichiers de sauvegarde LDPlayer (PC) ou VPhone (Mobile) depuis Google Drive.","Prêt à l'Emploi: Les fichiers intègrent déjà l'accès Root déverrouillé, GameGuardian et MGG réglés d'usine.","Tutoriel de Restauration: Cliquez sur le bouton d'assistance para restaurer facilement votre fichier `.ldplayer`."],DE:["Aktuelle Skripte: Laden Sie die neuesten Script-Dateien in verschiedenen Sprachen direkt und sicher herunter.","Virtuelle Maschinen (VMs): Nutzen Sie fertige Backup-Pakete für LDPlayer (PC) und FPhone (Mobiltelefon).","Sofort startklar: Diese Systeme verfügen über einen integrierten Root-Zugriff und vorinstallierte Tools.","Schritt-für-Schritt-Anleitung: Öffnen Sie das Green-Book-Menü, um zu sehen, wie man die Backups importiert."]},sec4_title:{LATAM:"4. Calculadora de Evolución (Evo)",USD:"4. Evolution Calculator (Evo)",PT:"4. Calculadora de Evolução (Evo)",FR:"4. Calculateur d'Évolution (Evo)",DE:"4. Evolutionsrechner (Evo)"},sec4_desc:{LATAM:"Prevea costos exactos de oro y créditos para subir niveles en MGG.",USD:"Forecast exact gold and credit costs to reach high levels in MGG.",PT:"Calcule custos exatos de ouro e créditos para subir níveis no MGG.",FR:"Calculez le coût exact en or et crédits pour monter de niveau.",DE:"Berechnen Sie die genauen Gold- und Creditkosten für Levelaufstiege."},sec4_items:{LATAM:["Descuentos Aplicados: Selecciona botones de 20%, 30%, 40% o 50% según el evento activo en el juego para ajustar multiplicadores.","Entrada Limpia: Diseñada para ingresar tus recursos sin molestos ceros residuales a la izquierda. Al borrar, el campo queda vacío listo para ti.","Reiniciar Atajos: Haz clic en el botón de Reiniciar para limpiar los valores activos y realizar un nuevo cálculo limpio instantáneamente.","Reglas del MGG: Cálculos basados en caps de oro (30) y créditos (328) nativos del juego original."],USD:["Active Discounts: Select discount rate buttons (20%, 30%, 40%, or 50%) based on active MGG events to balance results.","Clean Input: No sticky leading zeros. Deleting values clears the field entirely with a light gray placeholder of zero.","Instant Reset: Click the Reset button to wipe parameters and launch new calculations instantly.","MGG Cap Rules: Fully integrated parameters honoring the default gold cap (30) and credit cap (328) of the game."],PT:["Descontos Ativos: Escolha 20%, 30%, 40% ou 50% para sincronizar o cálculo com o evento semanal do game.","Input Otimizado: Exclui o antigo bug do zero teimoso na tela. Se deletado, limpa por completo deixando o placeholder de zero.","Limpeza Rápida: O botão Reiniciar redefine os campos simulados instantaneamente para novas contas.","Dados Certificados: Cálculos precisos ajustados aos limites de ouro (30) e consumo (328) de créditos."],FR:["Réductions ajustables: Choisissez un bouton de promotion (20%, 30%, etc.) pour appliquer les pourcentages réels.","Saisie Intuitive: Plus de zéro indésirable lors de l'édition. En effaçant tout, la zone de texte devient vierge.","Bouton Réinitialiser: Effacez tous les critères d'un coup de pouce pour démarrer une nouvelle opération.","Limites du MGG: Intègre le plafond d'or (30) et la barrière de réduction de crédits (328) de l'application originale."],DE:["Rabatt-Optionen: Wählen Sie Rabattraten (20%, 30%, etc.) aus, um den Ersparnis-Multiplikator anzupassen.","Saubere Eingabe: Keine lästigen führenden Nullen. Das Feld wird beim Löschen komplett geleert.","Zurücksetzen-Button: Löschen Sie alle aktuellen Angaben, um direkt ein neues Setup durchzurechnen.","MGG-Regeln: Präzise Berechnungen unter Berücksichtigung des Gold-Caps (30) und Credit-Caps (328)."]},sec5_title:{LATAM:"5. Catálogo de Códigos (Otros)",USD:"5. Code Catalog (Otros)",PT:"5. Catálogo de Códigos (Outros)",FR:"5. Catalogue de Codes (Autres)",DE:"5. Code-Katalog (Andere)"},sec5_desc:{LATAM:"Usa la base de códigos para orbes y fichas listos para inyección.",USD:"Leverage auxiliary codes for attack orbs, passes, and shield tickets.",PT:"Use a base de chaves para obter orbes e insígnias para seu script.",FR:"Découvrez des codes secondaires configurés pour booster votre inventaire.",DE:"Nutzen Sie alternative Codes für Orbs, Kampagnen und Tickets."},sec5_items:{LATAM:["Categorías Claras: Códigos organizados por Orbes de Ataque, Orbes de Vida, Autoinyección, Fichas de Campaña, etc.","Copiar en 1 clic: Simplemente haz clic en el código de respuesta para guardarlo en la papelera de reciclaje / portapapeles.","Aplicación en Juego: Copia estos códigos y pégalos en las opciones de inyección de GameGuardian en tu instancia virtual para reclamar las recompensas."],USD:["Structured Sections: Codes filtered neatly by Attack Orbs, Health Orbs, Campaign coins, Speed boosters, and more.","One-tap Copy: Click directly on any code box to copy the string to your device clipboard instantly.","In-Game Deploy: Inject these custom strings through GameGuardian options on your virtual environment to secure rewards."],PT:["Filtros por Orbes: Chaves e hashes categorizados por Orbe de Força, Vida, Velocidade e moedas especiais.","Área de Transferência: Toque nos códigos do menu para salvá-los rapidamente em seu celular.","Execução Prática: Cole esses códigos na aba de customização de GG dentro do LDPlayer/VPhone para evoluir."],FR:["Catégories d'Orbes: Codes triés par Orbes d'Attaque, de Vie, de Vitesse, Cartes de combat et jetons.","Aide Directe: Copiez n'importe quel code listé en un seul clic.","Incrémentation: Injectez ces scripts à l'aide de votre outil GameGuardian pour booster vos statistiques."],DE:["Optimierte Kategorien: Codes sortiert nach Angriffs-Orbs, Lebens-Orbs, Kampagnen-Tickets und mehr.","Clipboard-Kopie: Ein Klick auf den Code genügt, um ihn direkt im Zwischenspeicher abzuspeichern.","Lua-Verwendung: Fügen Sie diese Parameter in die Injektionsmaske Ihres GameGuardian-Skripts ein."]},sec6_title:{LATAM:"6. Novedades y Sincronización",USD:"6. News Feed & Sinc",PT:"6. Novidades e Sincronização",FR:"6. Actualités et Flux",DE:"6. News und Synchronisation"},sec6_desc:{LATAM:"Mantente al día con los eventos semanales integrados de forma activa.",USD:"Stay updated with weekly game events loaded dynamically.",PT:"Fique por dentro de eventos e ofertas semanais integrados de forma ativa.",FR:"Restez informé des tournois et offres d'actualités de l'application.",DE:"Bleiben Sie informiert über aktuelle Shop-Events und Ankündigungen."},sec6_items:{LATAM:["Feeds de Blogger: Noticias semanales extraídas directamente vía JSONP para garantizar velocidad y compatibilidad CORS.","Advertencia de Canales: Recuerda que la antigua web pokradex.org está inactiva y no se actualiza. Todo el contenido actual se mantiene únicamente aquí.","Enlaces Rápidos: El panel lateral contiene accesos rápidos a hibridaciones clásicas y tablas de atributos del blog oficial."],USD:["Blogger Synchronization: Weekly posts loaded safely directly via internal JSONP clients bypassing CORS constraints.","Website Advisory: Important warning detailing that pokradex.org is no longer maintained. Always rely exclusively on our app pages.","Reference Links: Utilize the sidebar widget to quickly consult historical breeding list pages or orb rules."],PT:["Sincronização de Blog: Posts de notícias carregados de forma ágil via canal XML/JSONP para contornar bloqueios.","Nota Importante: O portal pokradex.org está fora de serviço definitivo. Todas as tabelas ativas encontram-se somente aqui.","Menção Lateral: Atalhos na barra direita para cruzamentos históricos, calculadoras auxiliares e guias."],FR:["Flux RSS Automatisé: Actualités synchronisées via JSONP pour une réactivité optimale et sans erreurs CORS.","Ancienne URL: Attention, la plateforme pokradex.org est abandonnée. Venez consulter nos pages exclusives pour le contenu récent.","Ressources Utiles: Module latéral avec accès aux combinaisons secrètes et tableaux d'aptitudes."],DE:["Blogger-Anbindung: Wöchentliche News fließen direkt über JSONP-Requests fehlerfrei in das Portal ein.","Wichtiger Hinweis: pokradex.org ist veraltet und inaktiv. Alle aktuellen Inhalte werden exklusiv hier bereitgestellt.","Seitenleisten-Links: Schneller Zugriff auf Zucht-Tabellen und Spezial-Statistiken."]},disclaimer_title:{LATAM:"Advertencia de Seguridad y Descargo de Responsabilidad",USD:"Security Warning & Disclaimer of Liability",PT:"Aviso de Segurança e Isenção de Responsabilidade",FR:"Avertissement de Sécurité et Limitation de Responsabilité",DE:"Sicherheitshinweis und Haftungsausschluss"},disclaimer_desc_1:{LATAM:"Úsalo bajo tu propio riesgo:",USD:"Use at your own risk:",PT:"Use por sua conta e risco:",FR:"Le jeu à vos risques et périls :",DE:"Nutzung auf eigene Gefahr:"},disclaimer_desc_2:{LATAM:"Esta plataforma es un recurso puramente informativo, visual de simulación y auxiliar para el juego Mutants: Genetic Gladiators. El uso de scripts de automatización, trucos externos o inyecciones mediante GameGuardian e instancias virtuales corre bajo la absoluta responsabilidad de cada jugador.",USD:"This platform serves purely as an informational resource, visual simulator, and helper toolbox for Mutants: Genetic Gladiators. Integrating automated scripts, codes, or utilizing software patches via GameGuardian and VM software remains entirely at the discrete choice of the user.",PT:"Esta plataforma é uma ferramenta puramente informativa, simulação visual e de auxílio de jogo. A utilização de scripts automáticos, injeções externas ou o uso do GameGuardian com instâncias virtuais é de exclusiva responsabilidade do usuário.",FR:"Ce site est un outil informatif, d'aide de jeu et de simulation visuelle. L'emploi de scripts, d'éditeurs tiers (comme GameGuardian) ou d'environnements virtualisés relève de la seule responsabilité de l'utilisateur final.",DE:"Diese Plattform ist eine rein informative Ressource, ein Zusammentreffen von Emulations-Simulationen und Spielhilfen. Die Verwendung von Automatisierungsskripten, Spielmanipulationssoftware oder Instanz-Backups liegt in der alleinigen Verantwortung des Nutzers."},disclaimer_desc_3:{LATAM:"No nos hacemos responsables de suspensiones de cuenta (baneos), pérdidas de progreso, caídas de nivel o sanciones aplicadas por Kobojo / Celador / desarrolladores del MGG causadas por un uso inapropiado del script o abusos de códigos. Se recomienda usar las utilidades con moderación y fines educativos.",USD:"We hold no liability for in-game bans, suspension penalties, rollbacks, progress loss, or database wipeouts enforced by Kobojo / Celador / Game developers due to excessive script triggers or coordinate exploits. Educate yourself first and play responsibly.",PT:"Não nos responsabilizamos por bans permanentes ou temporários, perdas de progresso, perdas de nível ou quaisquer punições aplicadas pela Kobojo / Celador / detentores do jogo devido ao abuso das ferramentas ou injeções massivas. Recomendamos discrição em sua conta.",FR:"Nous déclinons toute responsabilité en cas de bannissement (ban), perte de progression ou pénalités administrées par Kobojo / Celador / les éditeurs du jeu en cas d'abus du script Lua. Jouez calmement et raisonnablement.",DE:"Wir übernehmen keinerlei Haftung für Spielsperren, Zurücksetzungen (Bans), Levelverluste oder sonstige Sanktionen des Entwicklers (Kobojo / Celador) durch missbräuchliche Nutzung der Skripte. Verwenden Sie die Tools bedacht und zu Schulungszwecken."},vm_tabs_title:{LATAM:"Guías de Configuración de Instancias",USD:"Instances Configuration Guides",PT:"Guias de Configuração de Instâncias",FR:"Guides de Configuration d'Instances",DE:"Instanz-Konfigurationsanleitungen"},vm_what_is:{LATAM:"¿Qué es una Instancia Virtual y para qué sirve?",USD:"What is a Virtual Instance and what is it used for?",PT:"O que é uma Instância Virtual e para que serve?",FR:"Qu'est-ce qu'une instance virtuelle et à quoi sert-elle ?",DE:"Was ist eine virtuelle Instanz und wofür wird sie verwendet?"},vm_why_use:{LATAM:"Una instancia virtual es una copia de seguridad o sistema de juego aislado que sirve para ahorrar al usuario todo el proceso manual de rootear su teléfono, configurar emuladores desde cero e instalar y calibrar GameGuardian con las carpetas internas correctas. Al importar este archivo preconfigurado, el sistema ya cuenta con los permisos Root necesarios y las utilidades integradas listas para ejecutar archivos del tipo LUA de manera directa.",USD:"A virtual instance is a pre-configured backup or isolated simulation system used to save the user from the manual process of rooting their device, configuring emulators from scratch, and installing or calibrating GameGuardian. By importing this file, the virtual environment already includes the mandatory Root permissions and tools in place to run LUA files directly.",PT:"Uma instância virtual é uma cópia de segurança ou sistema simulado pré-configurado que serve para poupar o usuário do processo manual de fazer root no dispositivo, configurar emuladores do zero e instalar o GameGuardian. Ao importar este arquivo preparado, o ambiente virtual já possui acesso Root ativo e ferramentas prontas para executar scripts LUA de forma direta.",FR:"Une instance virtuelle est une sauvegarde ou un système de simulation pré-assemblé qui évite à l'utilisateur de rooter manuellement son appareil, configurer un émulateur de zéro ou paramétrer GameGuardian. En important ce fichier, l'environnement dispose déjà des droits Root requis et des composants prêts à l'emploi pour charger directement les scripts LUA.",DE:"Eine virtuelle Instanz ist ein vorkonfiguriertes Backup oder eine isolierte Simulationsumgebung, die dem Benutzer das manuelle Rooten seines Smartphones, das Einrichten von Emulatoren von Grund auf sowie das Installieren von GameGuardian erspart. Nach dem Importieren dieser Datei verfügt das System bereits über die erforderlichen Root-Rechte und integrierte Dienstprogramme zur direkten Ausführung von LUA-Skripten."},vm_tabs_desc:{LATAM:"Aprende los pasos esenciales para importar y configurar tu emulador virtual o app de virtualización sin errores.",USD:"Learn the essential steps to import and set up your virtual emulator or sandbox application correctly.",PT:"Aprenda as etapas cruciais para importar e iniciar seu emulador ou espaço virtual hoje mesmo.",FR:"Découvrez les étapes indispensables pour charger ou configurer votre émulateur virtuel en toute sérénité.",DE:"Erfahren Sie alles Notwendige, um Ihr virtuelles System oder Ihren Emulator mühelos zu starten."},pc_guide_title:{LATAM:"Instancia PC (LDPlayer 9)",USD:"PC Instance (LDPlayer 9)",PT:"Instância PC (LDPlayer 9)",FR:"Instance PC (LDPlayer 9)",DE:"PC-Instanz (LDPlayer 9)"},mobile_guide_title:{LATAM:"Instancia Móvil (VPhoneGaga)",USD:"Mobile Instance (VPhoneGaga)",PT:"Instância Móvel (VPhoneGaga)",FR:"Instance Mobile (VPhoneGaga)",DE:"Mobil-Instanz (VPhoneGaga)"},pc_steps:{LATAM:["Descargar LDPlayer 9: Descarga e instala la última versión oficial desde su emulador de cabecera.",'Abrir Administrador: Abre la utilidad de escritorio "LDMultiPlayer" (Gestor multiinstancias) integrada en tu PC.','Importar Archivo: Presiona "Añadir Instancia", elige "Restaurar/Importar" y selecciona el archivo de respaldo `.ldplayer` descargado de Google Drive.',"Arrancar Entorno: Inicia la máquina virtual importada. Iniciará con Root activo, GameGuardian y MGG listos para jugar.","Activar Script: Ejecuta GameGuardian en el emulador, selecciona la app MGG, presiona Play y escoge el script LUA para inyectar recursos."],USD:["Download LDPlayer 9: Install the official version of LDPlayer 9 on your desktop computer.",'Launch Multi-Player: Open the software tool named "LDMultiPlayer" installed beside LDPlayer.','Load Configuration: Select "Add Instance" -> "Restore/Import" and choose the `.ldplayer` block you saved from Google Drive.',"Boot Emu Mode: Start the finished virtual environment. It is preloaded with active Root, GameGuardian app, and MGG.","Inject Controls: Run GameGuardian, bind it to MGG process, select your downloaded LUA script, and execute."],PT:["Baixar LDPlayer 9: Instale o emulador padrão direto do site oficial.",'Abrir Multi-Instâncias: Execute a ferramenta administrativa "LDMultiPlayer" do seu computador.','Importar Backups: Clique em "Adicionar Instância", e opte por "Restaurar/Importar" indicando o arquivo `.ldplayer`.',"Iniciar Máquina: Ligue o simulador do jogo; ele já vem empacotado com Root ativo e GameGuardian configurado.","Ativar LUA: Inicie a ferramenta de script do game, escolha o arquivo LUA baixado e execute os cheats calculados."],FR:["Avoir LDPlayer 9: Installez l'outil classique sur votre ordinateur de bureau.","Ouvrir LDMultiPlayer: Double-cliquez sur le module de gestion multi-fenêtres sur votre écran.",'Restaurer la Sauvegarde: Cliquez sur "Ajouter une instance" puis sur "Restaurer/Importer" pour choisir le fichier `.ldplayer`.',"Allumer l'Émulateur: Démarrez le système. L'accès Root ainsi que les applications sont déjà opérationnels en un clin d'œil.","Charger le LUA: Lancez l'intermédiaire des triches, rattachez-le à MGG et profitez de l'ensemble des scripts."],DE:["LDPlayer 9 holen: Holen Sie sich das offizielle Setup für Ihren Desktop-Rechner.",'Manager starten: Öffnen Sie die installierte Verwaltung namens "LDMultiPlayer".','Backup importieren: Klicken Sie auf "Instanz hinzufügen", wählen Sie "Wiederherstellen/Importieren" und laden Sie das Paket.',"System hochfahren: Booten Sie die eingepflegte Instanz; Root und alle Apps sind gebrauchsfertig konfiguriert.","Lua-Modul laden: Starten Sie das GameGuardian-Menü, docken Sie an MGG an und führen Sie das LUA-Skript aus."]},mobile_steps:{LATAM:["Instalar VPhoneGaga: Instala el archivo de extensión `.apk` de VPhoneGaga en tu smartphone Android real.","Acceso Supervisor (Root): Abre VPhoneGaga, ve a la configuración interna del emulador y activa Root.","Enviar Archivos: Usa el asistente de importación nativa de VPhone para copiar la app de MGG y tu script LUA desde tu almacenamiento real.","Permitir Privilegios: Abre GameGuardian dentro del entorno virtual de VPhoneGaga y concédele permisos Root.","Ejecución del Juego: Inicia Mutants Genetic Gladiators, vincula GameGuardian al proceso activo del juego y usa tus LUA preferidos."],USD:["Install VPhoneGaga: Put the `.apk` package file of VPhoneGaga directly on your Android mobile device.","Enable Superuser: Launch VPhone, access the internal system settings panel, and toggle the switch to activate Root.","Transfer Data: Import MGG app files and your downloaded LUA script into VPhone from your real cell storage.","Grant Privileges: Open GameGuardian within the emulated virtual space and allow permanent root capabilities.","Game Insertion: Run MGG, click GameGuardian floating bubble, link to the game, and inject script options."],PT:["Instalar VPhoneGaga: Baixe e instale o aplicativo sandbox de simulação no seu telefone real.","Habilitar Privilégios: Abra o menu de ajuste virtual e marque a caixa de seleção de acesso Root.","Importar Arquivos: Mova o MGG instalado e o arquivo de script LUA para o ambiente fechado do software.","Permissões Root: Conceda autorização de root ao GameGuardian quando solicitado na tela inicial.","Iniciar o Jogo: Roda o game normalmente, selecione o processo do MGG no GG e injete as otimizações."],FR:["Avoir VPhoneGaga: Téléchargez l'archive d'espace virtuel directement dans votre appareil personnel.","Options Concessionnaire (Root): Ouvrez les paramètres internes de la bulle virtuelle et activez le mode Root.","Copier les Logiciels: Importez les ressources installées (l'application MGG et votre script) dans l'arborescence de VPhone.","Droits d'Accès: Lancez la console externe de triche et cochez la case d'accès illimité.","Lancer MGG: Connectez-vous sur votre compte de jeu, arrimez la bulle externe au processus et chargez le Lua."],DE:["VPhoneGaga installieren: Installieren Sie das Emulator-Installationspaket auf Ihrem Android-Handy.","Root-Rechte freischalten: Öffnen Sie das VPhone-Setup und schalten Sie den standardmäßigen Root-Modus scharf.","Inhalte einspeisen: Ziehen Sie das Spiel MGG und das heruntergeladene LUA-Skript in das geschlossene VPhone-System.","Zugriff gestatten: Gewähren Sie dem GameGuardian-Tool vollen Zugriff auf die Root-Rechte des Systems.","Ausführung starten: Öffnen Sie Mutants, verknüpfen Sie das Tool und laden Sie Ihr LUA-Skript für Ihr Spiel."]}};function eA(){const{region:n}=We(),[s,l]=C.useState("pc");C.useEffect(()=>{if(window.location.hash.includes("instancias")||window.location.hash.includes("instancias-guide")){const p=document.getElementById("instancias-guide");p&&setTimeout(()=>{p.scrollIntoView({behavior:"smooth",block:"start"})},300)}},[]);const r=p=>{var g,b;return((g=Qf[p])==null?void 0:g[n])||((b=Qf[p])==null?void 0:b.USD)||""},d=[{title:r("sec1_title"),desc:r("sec1_desc"),items:r("sec1_items"),icon:Oi,color:"text-blue-400 bg-blue-500/10 border-blue-500/20"},{title:r("sec2_title"),desc:r("sec2_desc"),items:r("sec2_items"),icon:s0,color:"text-emerald-400 bg-emerald-500/10 border-emerald-500/20"},{title:r("sec3_title"),desc:r("sec3_desc"),items:r("sec3_items"),icon:Gd,color:"text-purple-400 bg-purple-500/10 border-purple-500/20"},{title:r("sec4_title"),desc:r("sec4_desc"),items:r("sec4_items"),icon:Mr,color:"text-cyan-400 bg-cyan-500/10 border-cyan-500/20"},{title:r("sec5_title"),desc:r("sec5_desc"),items:r("sec5_items"),icon:ik,color:"text-rose-400 bg-rose-500/10 border-rose-500/20"},{title:r("sec6_title"),desc:r("sec6_desc"),items:r("sec6_items"),icon:Md,color:"text-amber-400 bg-amber-500/10 border-amber-500/20"}];return i.jsxs("div",{className:"flex flex-col gap-8 text-left",children:[i.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[i.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-20",children:i.jsx(ws,{size:120,className:"text-blue-brand-2 animate-pulse"})}),i.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[i.jsx(ws,{size:16,className:"text-blue-brand-2"}),i.jsx("span",{children:r("quick_manual")})]}),i.jsxs("h1",{className:"text-4xl md:text-6xl font-black mt-2.5 mb-2.5 uppercase tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:[r("title1")," ",i.jsx("span",{className:"text-blue-brand-2",children:r("title2")})]}),i.jsx("p",{className:"text-muted max-w-2xl px-4 opacity-80 text-sm md:text-base leading-relaxed pl-1",children:r("subtitle")})]}),i.jsx(dn,{}),i.jsx("section",{className:"grid lg:grid-cols-2 gap-6",children:d.map((p,g)=>{const b=p.icon;return i.jsxs("article",{className:"panel flex flex-col gap-5 border border-white/10 bg-gradient-to-b from-white/[0.01] to-transparent rounded-[2rem] p-6 md:p-8 hover:border-white/20 transition-all duration-300",children:[i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${p.color}`,children:i.jsx(b,{size:24})}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-bold tracking-tight text-white m-0 uppercase",children:p.title}),i.jsx("p",{className:"text-slate-400 text-xs font-semibold m-0 mt-0.5",children:p.desc})]})]}),i.jsx("div",{className:"flex flex-col gap-3.5 mt-2 bg-white/[0.01] p-5 rounded-2xl border border-white/5",children:p.items.map((x,m)=>{const[f,_]=x.split(": ");return i.jsxs("div",{className:"flex gap-3 items-start",children:[i.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-blue-brand shrink-0 mt-2"}),i.jsx("p",{className:"text-slate-300 text-sm m-0 leading-relaxed font-semibold",children:f&&_?i.jsxs(i.Fragment,{children:[i.jsxs("strong",{className:"text-white font-black uppercase text-xs tracking-wide",children:[f,": "]}),i.jsx("span",{className:"font-medium text-slate-300",children:_})]}):i.jsx("span",{className:"font-medium text-slate-300",children:x})})]},m)})})]},g)})}),i.jsxs("section",{id:"instancias-guide",className:"panel border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent rounded-[2rem] p-6 md:p-8 flex flex-col gap-6",children:[i.jsxs("div",{children:[i.jsx("h2",{className:"text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-2",children:r("vm_tabs_title")}),i.jsx("p",{className:"text-slate-400 text-sm font-medium m-0 leading-relaxed max-w-3xl",children:r("vm_tabs_desc")})]}),i.jsxs("div",{className:"bg-gradient-to-r from-blue-500/5 to-emerald-500/5 border border-blue-500/10 rounded-2xl p-5 md:p-6 flex flex-col gap-2.5",children:[i.jsxs("h3",{className:"text-sm font-black uppercase text-blue-400 tracking-wider m-0 flex items-center gap-2",children:[i.jsx(c0,{size:16,className:"text-emerald-400"}),i.jsx("span",{children:r("vm_what_is")})]}),i.jsx("p",{className:"text-slate-300 text-xs md:text-sm leading-relaxed m-0 font-medium font-sans",children:r("vm_why_use")})]}),i.jsxs("div",{className:"flex border-b border-white/10 gap-4",children:[i.jsxs("button",{onClick:()=>l("pc"),className:`pb-3 font-bold uppercase tracking-wider text-xs border-b-2 transition-all flex items-center gap-2 cursor-pointer ${s==="pc"?"border-blue-brand text-white border-blue-500":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[i.jsx(r0,{size:14}),i.jsx("span",{children:r("pc_guide_title")})]}),i.jsxs("button",{onClick:()=>l("mobile"),className:`pb-3 font-bold uppercase tracking-wider text-xs border-b-2 transition-all flex items-center gap-2 cursor-pointer ${s==="mobile"?"border-blue-brand text-white border-blue-500":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[i.jsx(Ad,{size:14}),i.jsx("span",{children:r("mobile_guide_title")})]})]}),i.jsx("div",{className:"flex flex-col gap-4 bg-white/[0.01] p-5 rounded-2xl border border-white/5",children:(r(s==="pc"?"pc_steps":"mobile_steps")||[]).map((p,g)=>{const[b,x]=p.split(": ");return i.jsxs("div",{className:"flex gap-4 items-start",children:[i.jsx("div",{className:"w-6 h-6 rounded-full bg-blue-brand/10 border border-blue-brand/20 text-blue-brand-2 flex items-center justify-center font-mono text-xs font-black shrink-0 mt-0.5",children:g+1}),i.jsx("p",{className:"text-slate-300 text-sm m-0 leading-relaxed font-semibold",children:b&&x?i.jsxs(i.Fragment,{children:[i.jsxs("strong",{className:"text-white font-black uppercase text-xs tracking-wide",children:[b,": "]}),i.jsx("span",{className:"font-medium text-slate-300",children:x})]}):i.jsx("span",{className:"font-medium text-slate-300",children:p})})]},g)})})]}),i.jsxs("article",{className:"panel border border-red-500/20 bg-red-500/5 hover:bg-red-500/[0.07] flex flex-col md:flex-row gap-5 items-start rounded-[2rem] p-6 md:p-8 transition-all",children:[i.jsx("div",{className:"w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-red-500/10 text-red-500 shadow-lg shadow-red-500/10 mt-1 mx-auto md:mx-0",children:i.jsx(Bi,{size:32,className:"animate-pulse"})}),i.jsxs("div",{className:"flex-1 flex flex-col gap-4",children:[i.jsxs("div",{className:"text-center md:text-left",children:[i.jsx("h4",{className:"text-lg font-black text-white tracking-wide uppercase m-0 leading-tight",children:r("disclaimer_title")}),i.jsx("span",{className:"text-red-400 text-xs font-black uppercase tracking-widest mt-1 block",children:r("disclaimer_desc_1")})]}),i.jsxs("div",{className:"text-slate-300 text-sm leading-relaxed space-y-3 font-medium",children:[i.jsx("p",{className:"m-0",children:r("disclaimer_desc_2")}),i.jsx("p",{className:"m-0 text-red-100/90 font-semibold border-l-2 border-red-500/40 pl-3",children:r("disclaimer_desc_3")})]})]})]}),i.jsx(ap,{pageId:"guia"})]})}const $f={multimedia:{LATAM:"Contenido multimedia",USD:"Multimedia",PT:"Conteúdo multimídia",FR:"Contenu multimédia",DE:"Multimedia-Inhalte"},tutoriales_title1:{LATAM:"TUTORIALES",USD:"YOUTUBE",PT:"TUTORIAIS",FR:"TUTORIELS",DE:"TUTORIALS"},tutoriales_title2:{LATAM:"YOUTUBE",USD:"GUIDES",PT:"YOUTUBE",FR:"YOUTUBE",DE:"YOUTUBE"},tutoriales_desc:{LATAM:"Aquí subo guías rápidas y tips sobre el catálogo y Mutants: Genetic Gladiators.",USD:"Quick guides and tips about the catalog and Mutants: Genetic Gladiators.",PT:"Aqui eu posto guias rápidos e dicas sobre o catálogo e Mutants: Genetic Gladiators.",FR:"Ici, je publie des guides rapides et des conseils sur le catalogue et Mutants: Genetic Gladiators.",DE:"Hier lade ich Kurzanleitungen und Tipps zum Katalog und Mutants: Genetic Gladiators hoch."},youtube_channel:{LATAM:"Canal de YouTube",USD:"YouTube Channel",PT:"Canal do YouTube",FR:"Chaîne YouTube",DE:"YouTube-Kanal"},youtube_channel_desc:{LATAM:"Si estás en móvil, puede abrir la app de YouTube si la tienes instalada.",USD:"If you are on mobile, it might open the YouTube app directly.",PT:"Se estiver no celular, pode abrir o aplicativo do YouTube diretamente.",FR:"Si vous êtes sur mobile, cela peut ouvrir directement l'application YouTube.",DE:"Wenn Sie mobil unterwegs sind, wird möglicherweise direkt die YouTube-App geöffnet."},go_to:{LATAM:"Ir a @spieler_Lc",USD:"Go to @spieler_Lc",PT:"Ir para @spieler_Lc",FR:"Aller sur @spieler_Lc",DE:"Gehe zu @spieler_Lc"},view_videos:{LATAM:"Ver videos",USD:"View videos",PT:"Ver vídeos",FR:"Voir les vidéos",DE:"Videos anzeigen"},want_to_find:{LATAM:"¿Qué vas a encontrar?",USD:"What will you find?",PT:"O que você vai encontrar?",FR:"Que trouverez-vous ?",DE:"Was werden Sie finden?"},bullet1:{LATAM:"Cómo buscar mutantes y copiar códigos sin errores.",USD:"How to search for mutants and copy codes without errors.",PT:"Como procurar mutantes e copiar códigos sem erros.",FR:"Comment rechercher des mutants et copier des codes sans erreur.",DE:"So suchen Sie nach Mutanten und kopieren Codes fehlerfrei."},bullet2:{LATAM:"Cómo usar filtros por genes.",USD:"How to use gene filters.",PT:"Como usar filtros por genes.",FR:"Comment utiliser les filtres par gènes.",DE:"So verwenden Sie Genfilter."},bullet3:{LATAM:"Consejos para usar emuladores y reducir el lag.",USD:"Tips for using emulators and reducing lag.",PT:"Dicas para usar emuladores e reduzir o lag.",FR:"Conseils pour utiliser des émulateurs et réduire le décalage (lag).",DE:"Tipps zur Verwendung von Emulatoren und zur Reduzierung von Lag."}};function tA(){const{region:n}=We(),s=l=>{var r,d;return((r=$f[l])==null?void 0:r[n])||((d=$f[l])==null?void 0:d.USD)||""};return i.jsxs("div",{className:"flex flex-col gap-6",children:[i.jsxs("section",{className:"hero transition-all duration-700 !p-6 md:!p-12 relative overflow-hidden bg-gradient-to-br from-blue-brand/10 via-blue-brand-2/5 to-transparent border-blue-brand-2/20 shadow-blue-brand-2/5",children:[i.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-20",children:i.jsx(Ar,{size:120,className:"text-blue-brand-2"})}),i.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[i.jsx(Ar,{size:16,className:"text-blue-brand-2"}),i.jsx("span",{children:s("multimedia")})]}),i.jsxs("h1",{className:"text-4xl md:text-6xl font-black mt-2.5 mb-2.5 uppercase tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-brand-2/80 to-blue-brand-2",children:[s("tutoriales_title1")," ",i.jsx("span",{className:"text-blue-brand-2",children:s("tutoriales_title2")})]}),i.jsx("p",{className:"text-muted max-w-2xl mx-auto px-4 opacity-80",children:s("tutoriales_desc")})]}),i.jsx(dn,{}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[i.jsxs("section",{className:"panel flex flex-col gap-5 transition-all duration-300 border border-white/10 bg-white/[0.01] hover:border-blue-brand-2/30 hover:bg-white/[0.02]",children:[i.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center bg-white/8 text-red-500 shadow-lg shadow-red-500/10",children:i.jsx(Ar,{size:24})}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-bold tracking-tight mb-2 text-white",children:s("youtube_channel")}),i.jsx("p",{className:"text-muted text-sm m-0 leading-relaxed opacity-90",children:s("youtube_channel_desc")})]}),i.jsxs("div",{className:"flex flex-wrap gap-3 mt-auto",children:[i.jsxs("a",{className:"btn btn-primary px-6 transition-all duration-200",target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/@spieler_Lc",children:[i.jsx(nn,{size:18}),i.jsx("span",{children:s("go_to")})]}),i.jsxs("a",{className:"btn px-6 border-white/10 hover:border-blue-brand-2 hover:bg-blue-brand-2/10 transition-all duration-200",target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/@spieler_Lc/videos",children:[i.jsx(tk,{size:18}),i.jsx("span",{children:s("view_videos")})]})]})]}),i.jsxs("section",{className:"panel flex flex-col gap-5 transition-all duration-300 border border-white/10 bg-white/[0.01] hover:border-blue-brand-2/30 hover:bg-white/[0.02]",children:[i.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center bg-white/8 text-yellow-brand shadow-lg shadow-yellow-brand/10",children:i.jsx(Tk,{size:24})}),i.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white",children:s("want_to_find")}),i.jsxs("ul",{className:"text-muted text-sm space-y-3 pl-5 list-disc marker:text-blue-brand-2/50",children:[i.jsx("li",{children:s("bullet1")}),i.jsx("li",{children:s("bullet2")}),i.jsx("li",{children:s("bullet3")})]})]})]})]})}const aA=[{id:"mutantes",num:"[1]",title:"Mutantes",desc:"Permite buscar mutantes, reemplazarlos por nombre o código y consultar categorías especiales.",children:[{id:"mutantes-hibridadora",num:"[1]",title:"Reemplazar Mutantes en Hibridadora",desc:"Accede a las opciones de reemplazo de especímenes en la estación de hibridación.",children:[{id:"op-hibridadora-nombre",num:"[1]",title:"Reemplazar (Buscar por Nombre)",desc:"Busca un mutante por su nombre e inyéctalo directamente en la ranura activa."},{id:"op-hibridadora-codigo",num:"[2]",title:"Reemplazar (Buscar por Codigo)",desc:"Especifica la clave o código identificador hexadecimal del mutante para inyectarlo."},{id:"op-hibridadora-lista",num:"[3]",title:"Lista de Mutantes (Solo Lista)",desc:"Muestra el listado de todos los especímenes registrados en el archivo de datos."}]},{id:"mutantes-tienda",num:"[2]",title:"Tienda de Mutantes",desc:"Visualiza la simulación de ofertas y paquetes completos disponibles para mutantes.",children:[{id:"op-tienda-paquetes",num:"[1]",title:"Todos los Paquetes de Mutantes"},{id:"op-tienda-todos",num:"[2]",title:"Todos los Mutantes"},{id:"op-tienda-platino",num:"[3]",title:"Paquete Platino"},{id:"op-tienda-creditos",num:"[4]",title:"Mutantes a Creditos - Seccion 1"},{id:"op-tienda-oro",num:"[5]",title:"Mutantes Meta y Comunes a Oro - Seccion 1"},{id:"op-tienda-monogen",num:"[6]",title:"Paquete Monogen Platino"}]},{id:"mutantes-especiales",num:"[3]",title:"Mutantes Especiales",desc:"Explora mutantes exclusivos, de eventos mensuales, neo monogenes e híbridos de élite.",children:[{id:"mutantes-especiales-exclusivos",num:"[1]",title:"Mutantes Exclusivos",desc:"Consola para activar mutantes legendarios y de colección ultra rara.",children:[{id:"op-exc-goliath",num:"[>]",title:"Goliath R Marciano Errante"},{id:"op-exc-juan",num:"[>]",title:"Juan Hielo R Deus Machina"},{id:"op-exc-paz",num:"[>]",title:"Capitan Paz R Nebulon"},{id:"op-exc-george",num:"[>]",title:"George Washington R Senor del Abismo"},{id:"op-exc-louis",num:"[>]",title:"Louis XVI R Senor del Abismo"},{id:"op-exc-mapach",num:"[>]",title:"Mapach Wik R Nebulon"},{id:"op-exc-santoctopus",num:"[>]",title:"Santoctopus R Deus Machina"},{id:"op-exc-genimal",num:"[>]",title:"Genimal R Senor del Abismo"},{id:"op-exc-hog",num:"[>]",title:"Hog the Ripper R Marciano Errante"},{id:"op-exc-tio",num:"[>]",title:"El Tio Sam R Marciano Errante"},{id:"op-exc-eva",num:"[>]",title:"Duplicado de Eva R Nebulon"},{id:"op-exc-sable",num:"[>]",title:"Sable R Deus Machina"},{id:"op-exc-artemisa",num:"[>]",title:"Artemisa R Deus Machina"},{id:"op-exc-claus",num:"[>]",title:"Mega Claus R Marciano Errante"},{id:"op-exc-aplastador",num:"[>]",title:"Aplastador R Senor del Abismo"},{id:"op-exc-spartac",num:"[>]",title:"Spartac R Senor del Abismo"},{id:"op-exc-geomega",num:"[>]",title:"Geomega R Nebulon"},{id:"op-exc-arcangel",num:"[>]",title:"Arcangel R Nebulon"},{id:"op-exc-diablo",num:"[>]",title:"Diablo R Deus Machina"},{id:"op-exc-norem",num:"[>]",title:"Norem R Deus Machina"},{id:"op-exc-surfista",num:"[>]",title:"Surfista del Espacio R Senor del Abismo"},{id:"op-exc-master",num:"[>]",title:"Master Paw R Marciano Errante"},{id:"op-exc-akai",num:"[>]",title:"Akai Bot R Deus Machina"},{id:"op-exc-kolossus",num:"[>]",title:"Kolossus R Nebulon"},{id:"op-exc-achabe",num:"[>]",title:"Capitan Achabe R Senor del Abismo"},{id:"op-exc-heimdall",num:"[>]",title:"Heimdall R Marciano Errante"},{id:"op-exc-oriax",num:"[>]",title:"Oriax R Deus Machina"},{id:"op-exc-caliburn",num:"[>]",title:"Caliburn Ex R Nebulon"},{id:"op-exc-chocoleon",num:"[>]",title:"Generalisimo Chocoleon R Senor del Abismo"}]},{id:"mutantes-especiales-mensuales",num:"[2]",title:"Mutantes Mensuales 2024 - 2025",desc:"Elige entre los mutantes liberados mensualmente como recompensa de temporada.",children:[{id:"op-men-amistad",num:"[>]",title:"Amistad Sin Limites R Mutante Mensual"},{id:"op-men-black",num:"[>]",title:"Black Ice R Mutante Mensual"},{id:"op-men-hidrira",num:"[>]",title:"Hidrira R Mutante Mensual"},{id:"op-men-nexo",num:"[>]",title:"Nexo Orbital R Mutante Mensual"},{id:"op-men-fiera",num:"[>]",title:"Fiera del Campo R Mutante Mensual"},{id:"op-men-bestial",num:"[>]",title:"Senor Bestial R Mutante Mensual"},{id:"op-men-emperador",num:"[>]",title:"Emperador Helado R Mutante Mensual"},{id:"op-men-profesor",num:"[>]",title:"Profesor Cronomantico R Mutante Mensual"},{id:"op-men-bearsikk",num:"[>]",title:"Bearsikk Sikleast R Mutante Mensual"},{id:"op-men-sakuraboshi",num:"[>]",title:"Sakuraboshi R Mutante Mensual"},{id:"op-men-nucleo",num:"[>]",title:"Nucleo Serafico R Mutante Mensual"},{id:"op-men-helidron",num:"[>]",title:"Helidron R Mutante Mensual"}]},{id:"op-neo-monogenes",num:"[3]",title:"Neo Monogenes",desc:"Accede a la sección de reactivos monogenéticos avanzados."},{id:"op-buranka-britany",num:"[4]",title:"Buranka y Britany",desc:"Inyectar el paquete especial de gemelas Buranka & Britany."}]}]},{id:"reactor",num:"[2]",title:"Reactor",desc:"Agrupa las herramientas relacionadas con la preparación, modificación y uso del reactor.",children:[{id:"op-reactor-cambiar",num:"[1]",title:"Cambiar Reactor (Preparar)",desc:"Prepara los archivos internos para cambiar el reactor."},{id:"op-reactor-hackear",num:"[2]",title:"Hackear Reactor (Aplicar el Cambio)",desc:"Aplica de inmediato los cambios y actualiza el estado del reactor."},{id:"op-reactor-fichas",num:"[3]",title:"Fichas Reactor",desc:"Desbloquea o simula la obtención de fichas especiales para el reactor."},{id:"op-reactor-preparar",num:"[4]",title:"Preparar y Pelear",desc:"Secuencia automatizada para listar especímenes y entrar en batalla directa."},{id:"op-reactor-salas",num:"[5]",title:"Salas Reactor",desc:"Configura o cambia la sala activa para torneos de reactor."}]},{id:"cajas",num:"[3]",title:"Cajas y Paquetes",desc:"Incluye cajas especiales, paquetes generales y opciones adicionales de la tienda.",children:[{id:"cajas-desbloquear",num:"[1]",title:"Desbloquear Cajas",desc:"Consola para desbloquear todos los tipos de cajas especiales disponibles.",children:[{id:"op-cajas-desb-todas",num:"[1]",title:"Activar Todas las Cajas"},{id:"op-cajas-desb-g1",num:"[2]",title:"Grupo 1: Cajas de Aniversario y Navidad"},{id:"op-cajas-desb-g2",num:"[3]",title:"Grupo 2: Cajas Especiales y Elite"}]},{id:"cajas-generales",num:"[2]",title:"Paquetes Generales",desc:"Explora ofertas para potenciar velocidad, obtención de cajas navideñas, escudos y experiencia.",children:[{id:"op-cajas-gen-aniv",num:"[1]",title:"Cajas de Aniversario y Navidad"},{id:"op-cajas-gen-rapidez",num:"[2]",title:"Paquete Rapidez Nivel 5"},{id:"op-cajas-gen-escudo",num:"[3]",title:"Paquete Escudo Especial Nivel 5"},{id:"op-cajas-gen-exp",num:"[4]",title:"Paquetes de EXP y Creditos"},{id:"op-cajas-gen-misteriosas",num:"[5]",title:"Cajas Misteriosas"},{id:"op-cajas-gen-ofertas",num:"[6]",title:"Ofertas y Paquetes"},{id:"op-cajas-gen-fortalecer",num:"[7]",title:"Paquete Fortalecimiento Nivel 5"}]},{id:"cajas-especiales",num:"[3]",title:"Paquetes Especiales",desc:"Accede a ofertas secretas y paquetes de cajas misteriosas secundarias.",children:[{id:"op-cajas-esp-mas-misterio",num:"[1]",title:"Mas Cajas Misteriosas"}]}]},{id:"recursos",num:"[4]",title:"Recursos, Fichas y Mejoras",desc:"Reune recursos, fichas, mejoras y elementos especiales.",children:[{id:"op-rec-laboratorio",num:"[1]",title:"Laboratorio Medico",desc:"Desbloquea mejoras completas para el hospital de regeneración instantánea."},{id:"op-rec-horno",num:"[2]",title:"Horno de Oro",desc:"Simula el incremento o el funcionamiento acelerado del horno de oro."},{id:"op-rec-velocidad",num:"[3]",title:"Velocidad x5",desc:"Modifica la velocidad de reproducción y actividades por cinco veces."},{id:"op-rec-compras",num:"[4]",title:"Compras Ilimitadas",desc:"Simula la obtención de bonificaciones ilimitadas en la tienda de juego."},{id:"op-rec-mutosterona",num:"[5]",title:"Mutosterona",desc:"Añade mutosterona simulada para procesos de evolución veloz."},{id:"op-rec-estrellas",num:"[6]",title:"Elstrellas",desc:"Aumenta el medidor de estrellas para canjes de premios raros."},{id:"op-rec-caja-creditos",num:"[7]",title:"Caja Creditos",desc:"Obtén cajas de créditos masivos para tu cuenta de mutantes."},{id:"op-[#a1b3cb]",num:"[8]",title:"Zona Deluxe",desc:"Inyectar el pase exclusivo simulado de zona VIP de mutantes."},{id:"op-rec-jackpot",num:"[9]",title:"Fichas Jackpot (Recurso)",desc:"Genera fichas ilimitadas para la ruleta del Jackpot."},{id:"op-rec-xp",num:"[10]",title:"Frascos XP (Recurso)",desc:"Añade cargamentos de frascos de experiencia máxima."},{id:"op-rec-reto",num:"[11]",title:"Fichas Reto",desc:"Desbloquea tiquets y fichas ilimitadas para la arena del reto."},{id:"op-reactor-fichas",num:"[12]",title:"Fichas Reactor",desc:"Desbloquea o simula la obtención de fichas especiales para el reactor."}]},{id:"orbes",num:"[5]",title:"Orbes",desc:"Permite conocer las opciones relacionadas con orbes básicos, avanzados y paquetes.",children:[{id:"op-orbes-xp4",num:"[1]",title:"Orbe XP Nivel 4",desc:"Obtén orbes premium de experiencia multiplicada de nivel 4."},{id:"op-orbes-b6",num:"[2]",title:"Orbes Basicos Nivel 6",desc:"Introduce un lote de orbes básicos de grado 6."},{id:"op-orbes-atk-vd-crit",num:"[3]",title:"Orbes ATK / VD / CRIT",desc:"Inyectar orbes de bonificación estadística mixta."},{id:"orbes-paquetes",num:"[4]",title:"Paquetes de Orbes",desc:"Elige un pack concentrado de gemas de nivel 6 o 7.",children:[{id:"op-orb-p-b6",num:"[1]",title:"Paquete de Orbes Basicos Nivel 6"},{id:"op-orb-p-poder6",num:"[2]",title:"Paquete de Orbes de Poder Nivel 6"},{id:"op-orb-p-xp4",num:"[3]",title:"Paquete de Orbes de EXP Nivel 4"},{id:"op-orb-p-b7",num:"[4]",title:"Paquete de Orbes Basicos Nivel 7"}]},{id:"orbes-n7",num:"[5]",title:"Orbes Nivel 7",desc:"Introduce los orbes individuales más potentes del juego.",children:[{id:"op-orb-n7-atk",num:"[1]",title:"Ataque Nivel 7"},{id:"op-orb-n7-vida",num:"[2]",title:"Vida Nivel 7"},{id:"op-orb-n7-crit",num:"[3]",title:"Critico Nivel 7"},{id:"op-orb-n7-xp6",num:"[4]",title:"XP Nivel 6"}]}]},{id:"acerca",num:"[6]",title:"Acerca de",desc:"Muestra detalles internos del simulador, su versión educativa actual y créditos de Smith Luque.",children:[{id:"op-acerca-info",num:"[1]",title:"Informacion del Script",desc:"Consulta la nota aclaratoria, créditos del desarrollador y estado de prueba."}]}],Jf={mutantes:{title:{LATAM:"Mutantes",USD:"Mutants",PT:"Mutantes",FR:"Mutants",DE:"Mutanten"},desc:{LATAM:"Permite buscar mutantes, reemplazarlos por nombre o código y consultar categorías especiales.",USD:"Allows you to search for mutants, replace them by name or code and consult special categories.",PT:"Permite buscar mutantes, substituí-los por nome ou código e consultar categorias especiais.",FR:"Permet de rechercher des mutants, de les remplacer par nom ou par code et de consulter des catégories spéciales.",DE:"Ermöglicht die Suche nach Mutanten, deren Ersetzung nach Name oder Code und die Einsicht in spezielle Kategorien."}},"mutantes-hibridadora":{title:{LATAM:"Reemplazar Mutantes en Hibridadora",USD:"Replace Mutants in Breeding Center",PT:"Substituir Mutantes na Hibridadora",FR:"Remplacer les Mutants dans la Couveuse",DE:"Mutanten im Brutzentrum ersetzen"},desc:{LATAM:"Accede a las opciones de reemplazo de especímenes en la estación de hibridación.",USD:"Access specimen replacement options in the breeding station.",PT:"Acesse as opções de substituição de espécimes na estação de hibridização.",FR:"Accédez aux options de remplacement de spécimens dans la station de croisement.",DE:"Greifen Sie auf Optionen zum Austausch von Proben im Brutzentrum zu."}},"op-hibridadora-nombre":{title:{LATAM:"Reemplazar (Buscar por Nombre)",USD:"Replace (Search by Name)",PT:"Substituir (Buscar por Nome)",FR:"Remplacer (Rechercher par Nom)",DE:"Ersetzen (Suche nach Name)"},desc:{LATAM:"Busca un mutante por su nombre e inyéctalo directamente en la ranura activa.",USD:"Search for a mutant by name and inject it directly into the active slot.",PT:"Busque um mutante pelo nome e injete-o diretamente no espaço activo.",FR:"Recherchez un mutant par nom et injectez-le directement dans l'emplacement actif.",DE:"Suchen Sie eine Mutante nach Name und fügen Sie sie direkt in den aktiven Slot ein."}},"op-hibridadora-codigo":{title:{LATAM:"Reemplazar (Buscar por Codigo)",USD:"Replace (Search by Code)",PT:"Substituir (Buscar por Código)",FR:"Remplacer (Rechercher par Code)",DE:"Ersetzen (Suche nach Code)"},desc:{LATAM:"Especifica la clave o código identificador hexadecimal del mutante para inyectarlo.",USD:"Specify the mutant's hexadecimal key or ID code to inject it.",PT:"Especifique a chave ou código ID hexadecimal do mutante para injetá-lo.",FR:"Spécifiez la clé ou le code d'identification hexadécimal du mutant pour l'injecter.",DE:"Geben Sie den Hex-Schlüssel oder ID-Code der Mutante ein, um sie zu injizieren."}},"op-hibridadora-lista":{title:{LATAM:"Lista de Mutantes (Solo Lista)",USD:"Mutant List (List Only)",PT:"Lista de Mutantes (Apenas Lista)",FR:"Liste des Mutants (Liste seule)",DE:"Mutantenliste (Nur Liste)"},desc:{LATAM:"Muestra el listado de todos los especímenes registrados en el archivo de datos.",USD:"Shows the list of all registered specimens in the data file.",PT:"Mostra a lista de todos os espécimes registrados no arquivo de dados.",FR:"Affiche la liste de tous les spécimens enregistrés dans le fichier de données.",DE:"Zeigt die Liste aller registrierten Proben in der Datendatei."}},"mutantes-tienda":{title:{LATAM:"Tienda de Mutantes",USD:"Mutants Shop",PT:"Loja de Mutantes",FR:"Boutique de Mutants",DE:"Mutantenshop"},desc:{LATAM:"Visualiza la simulación de ofertas y paquetes completos disponibles para mutantes.",USD:"Visualize simulation grids of offers and complete packages available for mutants.",PT:"Visualiza o grid de simulação de ofertas e pacotes completos disponíveis para mutantes.",FR:"Visualisez la simulation d'offres et de packs complets disponibles pour les mutants.",DE:"Visualisieren Sie die Simulation von Angeboten und Komplettpaketen für Mutanten."}},"op-tienda-paquetes":{title:{LATAM:"Todos los Paquetes de Mutantes",USD:"All Mutant Packages",PT:"Todos os Pacotes de Mutantes",FR:"Tous les Packs de Mutants",DE:"Alle Mutantenpakete"}},"op-tienda-todos":{title:{LATAM:"Todos los Mutantes",USD:"All Mutants",PT:"Todos os Mutantes",FR:"Tous os Mutantes",DE:"Alle Mutanten"}},"op-tienda-platino":{title:{LATAM:"Paquete Platino",USD:"Platinum Pack",PT:"Pacote Platina",FR:"Pack Platine",DE:"Platin-Paket"}},"op-tienda-creditos":{title:{LATAM:"Mutantes a Creditos - Seccion 1",USD:"Mutants for Credits - Section 1",PT:"Mutantes por Créditos - Seção 1",FR:"Mutants pour Crédits - Section 1",DE:"Mutanten für Kredite - Sektion 1"}},"op-tienda-oro":{title:{LATAM:"Mutantes Meta y Comunes a Oro - Seccion 1",USD:"Meta & Common Mutants to Gold - Section 1",PT:"Mutantes Meta e Comuns para Ouro - Seção 1",FR:"Mutants Méta & Communs en Or - Section 1",DE:"Meta & Gewöhnliche Mutanten zu Gold - Sektion 1"}},"op-tienda-monogen":{title:{LATAM:"Paquete Monogen Platino",USD:"Platinum Monogen Pack",PT:"Pacote Monogen Platina",FR:"Pack Monogen Platine",DE:"Platin-Monogen-Paket"}},"mutantes-especiales":{title:{LATAM:"Mutantes Especiales",USD:"Special Mutants",PT:"Mutantes Especiais",FR:"Mutants Spéciaux",DE:"Spezielle Mutanten"},desc:{LATAM:"Explora mutantes exclusivos, de eventos mensuales, neo monogenes e híbridos de élite.",USD:"Explore exclusive mutants, monthly event rewards, neo monogens, and elite hybrids.",PT:"Explore mutantes exclusivos, prêmios mensais, neo monogens e híbridos de elite.",FR:"Explorez des mutants exclusifs, des récompenses mensuelles, des néo monogènes et des hybrides d'élite.",DE:"Entdecken Sie exklusive Mutanten, monatliche Belohnungen, Neo-Monogene und Elite-Hybride."}},"mutantes-especiales-exclusivos":{title:{LATAM:"Mutantes Exclusivos",USD:"Exclusive Mutants",PT:"Mutantes Exclusivos",FR:"Mutants Exclusifs",DE:"Exklusive Mutanten"},desc:{LATAM:"Consola para activar mutantes legendarios y de colección ultra rara.",USD:"Console to activate legendary and ultra-rare collectible mutants.",PT:"Console para ativar mutantes lendários e de coleção ultra rara.",FR:"Console pour activer des mutants légendaires et de collection ultra-rare.",DE:"Konsole zur Aktivierung legendärer und extrem seltener Sammlermutanten."}},"mutantes-especiales-mensuales":{title:{LATAM:"Mutantes Mensuales 2024 - 2025",USD:"Monthly Mutants 2024 - 2025",PT:"Mutantes Mensais 2024 - 2025",FR:"Mutants Mensuels 2024 - 2025",DE:"Monatliche Mutanten 2024 - 2025"},desc:{LATAM:"Elige entre los mutantes liberados mensualmente como recompensa de temporada.",USD:"Choose among mutants released monthly as seasonal rewards.",PT:"Escolha entre os mutantes liberados mensalmente como recompensa de temporada.",FR:"Choisissez parmi les mutants libérés chaque mois en récompense de saison.",DE:"Wählen Sie aus den monatlich als Saisonbelohnung freigegebenen Mutanten."}},"op-neo-monogenes":{title:{LATAM:"Neo Monogenes",USD:"Neo Monogens",PT:"Neo Monogens",FR:"Néo Monogènes",DE:"Neo-Monogene"},desc:{LATAM:"Accede a la sección de reactivos monogenéticos avanzados.",USD:"Access the advanced monogenetic reagents section.",PT:"Acesse a seção de reagentes monogenéticos avançados.",FR:"Accédez à la section des réactifs monogénétiques avancés.",DE:"Greifen Sie auf den Abschnitt für fortgeschrittene monogenetische Reagenzien zu."}},"op-buranka-britany":{title:{LATAM:"Buranka y Britany",USD:"Buranka and Britany",PT:"Buranka e Britany",FR:"Buranka et Britany",DE:"Buranka und Britany"},desc:{LATAM:"Inyectar el paquete especial de gemelas Buranka & Britany.",USD:"Inject the special Buranka & Britany twins package.",PT:"Injetar o pacote especial das gêmeas Buranka & Britany.",FR:"Injectez le pack spécial des jumelles Buranka & Britany.",DE:"Injizieren Sie das spezielle Buranka & Britany Zwillinge-Paket."}},reactor:{title:{LATAM:"Reactor",USD:"Reactor",PT:"Reator",FR:"Réacteur",DE:"Reaktor"},desc:{LATAM:"Agrupa las herramientas relacionadas con la preparación, modificación y uso del reactor.",USD:"Groups simulator tools related to the preparation, modification, and use of the reactor.",PT:"Agrupa ferramentas relacionadas à preparação, modificação e uso do reator.",FR:"Regroupe les outils liés à la préparation, modification et utilisation du réacteur.",DE:"Gruppiert Werkzeuge zur Vorbereitung, Modifikation und Nutzung des Reaktors."}},"op-reactor-cambiar":{title:{LATAM:"Cambiar Reactor (Preparar)",USD:"Change Reactor (Prepare)",PT:"Alterar Reator (Preparar)",FR:"Changer de réacteur (Préparer)",DE:"Reaktor wechseln (Vorbereiten)"},desc:{LATAM:"Prepara los archivos internos para cambiar el reactor.",USD:"Prepare internal files to change the active reactor.",PT:"Prepara os arquivos internos para alterar o reator ativo.",FR:"Prépare les fichiers internes pour changer le réacteur actif.",DE:"Bereitet die internen Dateien vor, um den aktiven Reaktor zu wechseln."}},"op-reactor-hackear":{title:{LATAM:"Hackear Reactor (Aplicar el Cambio)",USD:"Hack Reactor (Apply Change)",PT:"Hackear Reator (Aplicar Mudança)",FR:"Pirater le réacteur (Appliquer)",DE:"Reaktor hacken (Wechsel anwenden)"},desc:{LATAM:"Aplica de inmediato los cambios y actualiza el estado del reactor.",USD:"Immediately apply the changes and update the reactor status.",PT:"Aplica imediatamente as mudanças e atualiza o estado do reator.",FR:"Applique immédiatement les changements et met à jour l'état du réacteur.",DE:"Wendet die Änderungen sofort an und aktualisiert den Reaktorstatus."}},"op-reactor-fichas":{title:{LATAM:"Fichas Reactor",USD:"Reactor Tokens",PT:"Fichas do Reator",FR:"Jetons de Réacteur",DE:"Reaktor-Token"},desc:{LATAM:"Desbloquea o simula la obtención de fichas especiales para el reactor.",USD:"Unlock or simulate obtaining special tokens for the reactor.",PT:"Desbloqueie ou simule a obtenção de fichas especiais para o reator.",FR:"Débloquez ou simulez l'obtention de jetons spéciaux pour le réacteur.",DE:"Schalten Sie spezielle Token für den Reaktor frei oder simulieren Sie deren Erhalt."}},"op-reactor-preparar":{title:{LATAM:"Preparar y Pelear",USD:"Prepare and Fight",PT:"Preparar e Lutar",FR:"Préparer et Combattre",DE:"Vorbereiten und Kämpfen"},desc:{LATAM:"Secuencia automatizada para listar especímenes y entrar en batalla directa.",USD:"Automated sequence to list specimens and enter straight into battle.",PT:"Sequência automatizada para listar espécimes e entrar em batalha direta.",FR:"Séquence automatisée pour lister les spécimens et entrer directement en combat.",DE:"Automatisierte Sequenz zur Auflistung von Proben und Einstieg in den Direktkampf."}},"op-reactor-salas":{title:{LATAM:"Salas Reactor",USD:"Reactor Rooms",PT:"Salas do Reator",FR:"Salles de Réacteur",DE:"Reaktorräume"},desc:{LATAM:"Configura o cambia la sala activa para torneos de reactor.",USD:"Configure or change the active room for reactor tournaments.",PT:"Configure ou altere a sala ativa para torneios de reator.",FR:"Configurez ou changez la salle active pour les tournois de réacteur.",DE:"Konfigurieren oder ändern Sie den aktiven Raum für Reaktorturniere."}},cajas:{title:{LATAM:"Cajas y Paquetes",USD:"Boxes & Bundles",PT:"Caixas & Pacotes",FR:"Boîtes & Packs",DE:"Kisten & Pakete"},desc:{LATAM:"Incluye cajas especiales, paquetes generales y opciones adicionales de la tienda.",USD:"Includes special boxes, general bundle options, and additional shop choices.",PT:"Inclui caixas especiais, pacotes gerais e opções adicionais de loja.",FR:"Comprend des boîtes spéciales, des packs généraux et des options de boutique.",DE:"Beinhaltet spezielle Kisten, allgemeine Pakete und zusätzliche Shop-Optionen."}},"cajas-desbloquear":{title:{LATAM:"Desbloquear Cajas",USD:"Unlock Boxes",PT:"Desbloquear Caixas",FR:"Débloquer des Boîtes",DE:"Kisten freischalten"},desc:{LATAM:"Consola para desbloquear todos los tipos de cajas especiales disponibles.",USD:"Console to unlock all types of special chests and boxes available.",PT:"Console para desbloquear todos os tipos de caixas especiais disponíveis.",FR:"Console pour débloquer tous les types de coffres et boîtes disponibles.",DE:"Konsole zum Freischalten aller verfügbaren Arten von Spezialkisten."}},"op-cajas-desb-todas":{title:{LATAM:"Activar Todas las Cajas",USD:"Activate All Boxes",PT:"Ativar Todas as Caixas",FR:"Activer Toutes les Boîtes",DE:"Alle Kisten aktivieren"}},"op-cajas-desb-g1":{title:{LATAM:"Grupo 1: Cajas de Aniversario y Navidad",USD:"Group 1: Anniversary & Christmas Boxes",PT:"Grupo 1: Caixas de Aniversário e Natal",FR:"Groupe 1 : Boîtes d'Anniversaire & Noël",DE:"Gruppe 1: Jubiläums- & Weihnachtskisten"}},"op-cajas-desb-g2":{title:{LATAM:"Grupo 2: Cajas Especiales y Elite",USD:"Group 2: Special & Elite Boxes",PT:"Grupo 2: Caixas Especiais e Elite",FR:"Groupe 2 : Boîtes Spéciales & Élite",DE:"Gruppe 2: Spezial- & Elitekisten"}},"cajas-generales":{title:{LATAM:"Paquetes Generales",USD:"General Bundles",PT:"Pacotes Gerais",FR:"Packs Généraux",DE:"Allgemeine Pakete"},desc:{LATAM:"Explora ofertas para potenciar velocidad, obtención de cajas navideñas, escudos y experiencia.",USD:"Explore offers to boost speed, obtain Christmas boxes, shields, and experience points.",PT:"Explore ofertas para aumentar velocidade, obter caixas de Natal, escudos e experiência.",FR:"Découvrez les offres pour booster la vitesse, obtenir des boîtes de Noël, des boucliers et de l'XP.",DE:"Entdecken Sie Angebote zur Erhöhung der Geschwindigkeit, Weihnachtskisten, Schilde und XP."}},"op-cajas-gen-aniv":{title:{LATAM:"Cajas de Aniversario y Navidad",USD:"Anniversary & Christmas Boxes",PT:"Caixas de Aniversário e Natal",FR:"Boîtes d'Anniversaire et de Noël",DE:"Jubiläums- & Weihnachtskisten"}},"op-cajas-gen-rapidez":{title:{LATAM:"Paquete Rapidez Nivel 5",USD:"Level 5 Speed Bundle",PT:"Pacote Velocidade Nível 5",FR:"Pack de Vitesse Niveau 5",DE:"Geschwindigkeitspaket Stufe 5"}},"op-cajas-gen-escudo":{title:{LATAM:"Paquete Escudo Especial Nivel 5",USD:"Level 5 Special Shield Bundle",PT:"Pacote de Escudo Especial Nível 5",FR:"Pack Bouclier Spécial Niveau 5",DE:"Spezialschild-Paket Stufe 5"}},"op-cajas-gen-exp":{title:{LATAM:"Paquetes de EXP y Creditos",USD:"EXP & Credits Bundles",PT:"Pacotes de EXP e Créditos",FR:"Packs d'XP & Crédits",DE:"EXP- & Kreditpakete"}},"op-cajas-gen-misteriosas":{title:{LATAM:"Cajas Misteriosas",USD:"Mystery Chests",PT:"Caixas Misteriosas",FR:"Boîtes Mystérieuses",DE:"Geheimnisvolle Kisten"}},"op-cajas-gen-ofertas":{title:{LATAM:"Ofertas y Paquetes",USD:"Offers & Special Packages",PT:"Ofertas e Pacotes",FR:"Offres & Packs",DE:"Angebote & Pakete"}},"op-cajas-gen-fortalecer":{title:{LATAM:"Paquete Fortalecimiento Nivel 5",USD:"Level 5 Strength Bundle",PT:"Pacote Fortalecimento Nível 5",FR:"Pack Renforcement Niveau 5",DE:"Stärkungspaket Stufe 5"}},"cajas-especiales":{title:{LATAM:"Paquetes Especiales",USD:"Special Bundles",PT:"Pacotes Especiais",FR:"Packs Spéciaux",DE:"Spezielle Pakete"},desc:{LATAM:"Accede a ofertas secretas y paquetes de cajas misteriosas secundarias.",USD:"Access secret offers and secondary mystery chest bundles.",PT:"Acesse ofertas secretas e pacotes de caixas misteriosas secundárias.",FR:"Accédez à des offres secrètes et à des packs de boîtes mystères secondaires.",DE:"Greifen Sie auf geheime Angebote und sekundäre geheimnisvolle Kistenpakete zu."}},"op-cajas-esp-mas-misterio":{title:{LATAM:"Mas Cajas Misteriosas",USD:"More Mystery Chests",PT:"Mais Caixas Misteriosas",FR:"Plus de Boîtes Mystérieuses",DE:"Mehr geheimnisvolle Kisten"}},recursos:{title:{LATAM:"Recursos, Fichas y Mejoras",USD:"Resources, Tokens & Upgrades",PT:"Recursos, Fichas & Melhorias",FR:"Ressources, Jetons & Améliorations",DE:"Ressourcen, Token & Upgrades"},desc:{LATAM:"Reune recursos, fichas, mejoras y elementos especiales.",USD:"Gathers resources, gold ovens, tokens, and medical upgrades.",PT:"Reúne recursos, fornos de ouro, fichas e melhorias médicas.",FR:"Rassemble les ressources, fours d'or, jetons et améliorations médicales.",DE:"Sammelt Ressourcen, Goldöfen, Token und medizinische Upgrades."}},"op-rec-laboratorio":{title:{LATAM:"Laboratorio Medico",USD:"Medical Lab",PT:"Laboratório Médico",FR:"Laboratoire Médical",DE:"Medizinisches Labor"},desc:{LATAM:"Desbloquea mejoras completas para el hospital de regeneración instantánea.",USD:"Unlock full upgrades for the instant regeneration hospital slot.",PT:"Desbloqueie melhorias completas para o hospital de regeneração instantânea.",FR:"Débloquez des améliorations complètes pour l'hôpital de régénération instantanée.",DE:"Schalten Sie vollständige Upgrades für das sofortige Regenerationskrankenhaus frei."}},"op-rec-horno":{title:{LATAM:"Horno de Oro",USD:"Gold Oven",PT:"Forno de Ouro",FR:"Four de l'Or",DE:"Goldofen"},desc:{LATAM:"Simula el incremento o el funcionamiento acelerado del horno de oro.",USD:"Simulates the increment or accelerated production of the gold oven.",PT:"Simula o aumento ou funcionamento acelerado do forno de ouro.",FR:"Simule l'augmentation ou le fonctionnement accéléré du four de l'or.",DE:"Simuliert die Erhöhung oder beschleunigte Produktion des Goldofens."}},"op-rec-velocidad":{title:{LATAM:"Velocidad x5",USD:"Speed 5x",PT:"Velocidade x5",FR:"Vitesse x5",DE:"Geschwindigkeit 5x"},desc:{LATAM:"Modifica la velocidad de reproducción y actividades por cinco veces.",USD:"Modify reproduction speed and in-game activities by five times.",PT:"Modifique a velocidade de reprodução e atividades por cinco vezes.",FR:"Modifiez la vitesse de reproduction et les activités en jeu par cinq.",DE:"Ändern Sie die Fortpflanzungsgeschwindigkeit und In-Game-Aktivitäten um das Fünffache."}},"op-rec-compras":{title:{LATAM:"Compras Ilimitadas",USD:"Unlimited Purchases",PT:"Compras Ilimitadas",FR:"Achats Illimités",DE:"Unbegrenzte Käufe"},desc:{LATAM:"Simula la obtención de bonificaciones ilimitadas en la tienda de juego.",USD:"Simulate getting unlimited token points rewards in the virtual shop.",PT:"Simule a obtenção de recompensas ilimitadas na loja de jogos.",FR:"Simulez l'obtention de récompenses illimitées dans la boutique virtuelle.",DE:"Simulieren Sie den Erhalt unbegrenzter Belohnungen im virtuellen Shop."}},"op-rec-mutosterona":{title:{LATAM:"Mutosterona",USD:"Mutosterona Upgrade",PT:"Mutosterona",FR:"Mutostérone",DE:"Mutosteron-Upgrade"},desc:{LATAM:"Añade mutosterona simulada para procesos de evolución veloz.",USD:"Add simulated mutosterona packs for instant evolution processes.",PT:"Adicione pacotes de mutosterona simulados para processos rápidos de evolução.",FR:"Ajoutez des packs de mutostérone simulés pour les processus d'évolution rapide.",DE:"Fügen Sie simulierte Mutosteron-Pakete für sofortige Evolutionsprozesse hinzu."}},"op-rec-estrellas":{title:{LATAM:"Estrellas",USD:"Stars Oven Meter",PT:"Estrelas",FR:"Étoiles",DE:"Sterne-Meter"},desc:{LATAM:"Aumenta el medidor de estrellas para canjes de premios raros.",USD:"Boost the star level meter to exchange for rare mutant items.",PT:"Aumente o medidor de estrelas para trocar por itens mutantes raros.",FR:"Augmentez le compteur d'étoiles pour échanger contre des objets rares.",DE:"Erhöhen Sie den Sternenanzeiger, um gegen seltene Mutantenobjekte einzutauschen."}},"op-rec-caja-creditos":{title:{LATAM:"Caja Creditos",USD:"Credits Box Pack",PT:"Caixa de Créditos",FR:"Boîte de Crédits",DE:"Kredite-Kiste"},desc:{LATAM:"Obtén cajas de créditos masivos para tu cuenta de mutantes.",USD:"Obtain massive simulated credit chests for the mutant roster.",PT:"Obtenha caixas de créditos massivos para sua conta de mutantes.",FR:"Obtenez des coffres de crédits massifs pour votre compte de mutants.",DE:"Erhalten Sie massive Kreditkisten für Ihr Mutantenkonto."}},"op-[#a1b3cb]":{title:{LATAM:"Zona Deluxe",USD:"Deluxe VIP Zone",PT:"Zona VIP Deluxe",FR:"Zone VIP Deluxe",DE:"Deluxe-VIP-Zone"},desc:{LATAM:"Inyectar el pase exclusivo simulado de zona VIP de mutantes.",USD:"Inject the simulated VIP zone exclusive pass for elite research.",PT:"Injetar o passe exclusivo simulado da zona VIP de mutantes.",FR:"Injectez le pass exclusif simulé de la zone VIP pour mutants élites.",DE:"Injizieren Sie den exklusiven Simulator-VIP-Zonen-Pass für Elite-Forschung."}},"op-rec-jackpot":{title:{LATAM:"Fichas Jackpot (Recurso)",USD:"Jackpot Tokens (Resource)",PT:"Fichas Jackpot (Recurso)",FR:"Jetons de Jackpot (Ressource)",DE:"Jackpot-Token (Ressource)"},desc:{LATAM:"Genera fichas ilimitadas para la ruleta del Jackpot.",USD:"Generate infinite credits and tokens for the Jackpot spin-wheel.",PT:"Gere fichas ilimitadas para a roleta do Jackpot.",FR:"Générez des jetons infinis pour la roulette de Jackpot.",DE:"Generieren Sie unbegrenzte Token für das Jackpot-Glücksrad."}},"op-rec-xp":{title:{LATAM:"Frascos XP (Recurso)",USD:"XP Flasks (Resource)",PT:"Frascos XP (Recurso)",FR:"Flacons d'XP (Ressource)",DE:"XP-Fläschchen (Ressource)"},desc:{LATAM:"Añade cargamentos de frascos de experiencia máxima.",USD:"Adds shipments of maximum experience multiplier potions.",PT:"Adiciona carregamentos de frascos de experiência máxima.",FR:"Ajoute des cargaisons de potions d'expérience maximale.",DE:"Fügt Lieferungen von Tränken mit maximalem Erfahrungsmultiplikator hinzu."}},"op-rec-reto":{title:{LATAM:"Fichas Reto",USD:"Challenge Tokens",PT:"Fichas Desafio",FR:"Jetons Défi",DE:"Herausforderung-Token"},desc:{LATAM:"Desbloquea tiquets y fichas ilimitadas para la arena del reto.",USD:"Unlocks unlimited passes and action marks for the challenge arena.",PT:"Desbloqueie passes ilimitados e fichas de ação para a arena de desafio.",FR:"Débloque des passes illimités et jetons pour l'arène de défi.",DE:"Schaltet unbegrenzte Pässe und Token für die Herausforderungsarena frei."}},orbes:{title:{LATAM:"Orbes",USD:"Orbs Inventory",PT:"Orbes",FR:"Graines d'Orbes",DE:"Runeorbs-Inventar"},desc:{LATAM:"Permite conocer las opciones relacionadas con orbes básicos, avanzados y paquetes.",USD:"Provides choices about basic, advanced power orbs, and packages.",PT:"Oferece escolhas sobre orbes básicos, avançados e pacotes.",FR:"Propose des choix sur les orbes basiques, avancés et les paquets.",DE:"Bietet Optionen zu einfachen, fortgeschrittenen Orbs und Paketen."}},"op-orbes-xp4":{title:{LATAM:"Orbe XP Nivel 4",USD:"Level 4 XP Orb",PT:"Orbe de EXP Nível 4",FR:"Orbe d'XP Niveau 4",DE:"EP-Orb Stufe 4"},desc:{LATAM:"Obtén orbes premium de experiencia multiplicada de nivel 4.",USD:"Obtain premium high-tier level 4 EXP multiplying spheres.",PT:"Obtenha esferas premium de EXP de nível 4.",FR:"Obtenez des sphères premium d'XP de niveau 4.",DE:"Erhalten Sie premium EP-Kugeln der Stufe 4."}},"op-orbes-b6":{title:{LATAM:"Orbes Basicos Nivel 6",USD:"Level 6 Basic Orbs Pack",PT:"Orbes Básicos Nível 6",FR:"Orbes Basiques Niveau 6",DE:"Basische Orbs Stufe 6"},desc:{LATAM:"Introduce un lote de orbes básicos de grado 6.",USD:"Introduces a container of standard grade-6 stat boost orbs.",PT:"Introduz um lote de orbes básicos de grau 6.",FR:"Introduit un lot d'orbes basiques de degré 6.",DE:"Führt eine Ladung von Orbs der Stufe 6 ein."}},"op-orbes-atk-vd-crit":{title:{LATAM:"Orbes ATK / VD / CRIT",USD:"Mix ATK / LIFE / CRIT Orbs",PT:"Orbes ATK / VID / CRIT",FR:"Orbes ATK / VIE / CRIT",DE:"ATK / LEBEN / CRIT Orbs-Mix"},desc:{LATAM:"Inyectar orbes de bonificación estadística mixta.",USD:"Inject premium spheres focused on mixed stats boosting.",PT:"Injete esferas premium focadas em atributos mistos.",FR:"Injectez des sphères de boost statistique mixte.",DE:"Injizieren Sie gemischte Statistik-Boost-Orbs."}},"orbes-paquetes":{title:{LATAM:"Paquetes de Orbes",USD:"Gems & Orbs Bundles",PT:"Pacotes de Orbes",FR:"Packs d'Orbes Raffinés",DE:"Edelstein- & Orb-Pakete"},desc:{LATAM:"Elige un pack concentrado de gemas de nivel 6 o 7.",USD:"Choose a compact package of high-grade tier-6 or 7 gems.",PT:"Escolha um pacote compacto de gemas de nível 6 ou 7.",FR:"Choisissez un pack compact de gemmes de niveau 6 ou 7.",DE:"Wählen Sie ein kompaktes Paket von Edelsteinen der Stufe 6 oder 7."}},"op-orb-p-b6":{title:{LATAM:"Paquete de Orbes Basicos Nivel 6",USD:"Tier 6 Basic Orbs Package",PT:"Pacote de Orbes Básicos Nível 6",FR:"Pack d'Orbes Basiques Niveau 6",DE:"Basispaket Orbs Stufe 6"}},"op-orb-p-poder6":{title:{LATAM:"Paquete de Orbes de Poder Nivel 6",USD:"Tier 6 Power Orbs Package",PT:"Pacote de Orbes de Poder Nível 6",FR:"Pack d'Orbes de Pouvoir Niveau 6",DE:"Kraftpaket Orbs Stufe 6"}},"op-orb-p-xp4":{title:{LATAM:"Paquete de Orbes de EXP Nivel 4",USD:"Tier 4 Experience Orbs Package",PT:"Pacote de Orbes de EXP Nível 4",FR:"Pack d'Orbes de d'XP Niveau 4",DE:"EP-Paket Orbs Stufe 4"}},"op-orb-p-b7":{title:{LATAM:"Paquete de Orbes Basicos Nivel 7",USD:"Tier 7 Basic Orbs Package",PT:"Pacote de Orbes Básicos Nível 7",FR:"Pack d'Orbes Basiques Niveau 7",DE:"Basispaket Orbs Stufe 7"}},"orbes-n7":{title:{LATAM:"Orbes Nivel 7",USD:"Elite Level 7 Orbs",PT:"Orbes de Elite Nível 7",FR:"Orbes Élite Niveau 7",DE:"Elite-Orbs Stufe 7"},desc:{LATAM:"Introduce los orbes individuales más potentes del juego.",USD:"Introduces the record most powerful individual upgrade spheres.",PT:"Introduz as esferas de melhoria individuais mais potentes do jogo.",FR:"Introduit les sphères d'amélioration les plus puissantes du jeu.",DE:"Führt die stärksten individuellen Upgrade-Sphären des Spiels ein."}},"op-orb-n7-atk":{title:{LATAM:"Ataque Nivel 7",USD:"Attack Tier 7",PT:"Ataque Nível 7",FR:"Attaque Niveau 7",DE:"Angriff Stufe 7"}},"op-orb-n7-vida":{title:{LATAM:"Vida Nivel 7",USD:"Life Tier 7",PT:"Vida Nível 7",FR:"Vie Niveau 7",DE:"Leben Stufe 7"}},"op-orb-n7-crit":{title:{LATAM:"Critico Nivel 7",USD:"Critical Tier 7",PT:"Crítico Nível 7",FR:"Critique Niveau 7",DE:"Kritisch Stufe 7"}},"op-orb-n7-xp6":{title:{LATAM:"XP Nivel 6",USD:"EXP Tier 6",PT:"EXP Nível 6",FR:"XP Niveau 6",DE:"EP Stufe 6"}},acerca:{title:{LATAM:"Acerca de",USD:"About",PT:"Sobre",FR:"À Propos",DE:"Über"},desc:{LATAM:"Muestra detalles internos del simulador, su versión educativa actual y créditos de Smith Luque.",USD:"Shows simulator details, its active version, and credits to Smith Luque.",PT:"Mostra detalhes do simulador, sua versão ativa e créditos de Smith Luque.",FR:"Affiche les détails du simulateur, sa version active et les crédits à Smith Luque.",DE:"Zeigt Simulator-Details, die aktive Version und Credits an Smith Luque."}},"op-acerca-info":{title:{LATAM:"Informacion del Script",USD:"Script Information",PT:"Informação do Script",FR:"Informations du Script",DE:"Skript-Informationen"},desc:{LATAM:"Consulta la nota aclaratoria, créditos del desarrollador y estado de prueba.",USD:"Read the developer disclaimer, active trial credits, and test status.",PT:"Leia o aviso legal do desenvolvedor, créditos e status de teste.",FR:"Lisez les mentions légales du développeur, les crédits et l'état du test.",DE:"Lesen Sie den Entwickler-Haftungsausschluss, Credits und den Teststatus."}},"volver-main":{title:{LATAM:"Volver al Menu Principal",USD:"Back to Main Menu",PT:"Voltar ao Menu Principal",FR:"Retour au Menu Principal",DE:"Zurück zum Hauptmenü"}},volver:{title:{LATAM:"Volver",USD:"Back",PT:"Voltar",FR:"Retour",DE:"Zurück"}},atras:{title:{LATAM:"Atrás",USD:"Back",PT:"Atrás",FR:"Retour",DE:"Zurück"}},"opcion-activada":{title:{LATAM:"OPCIÓN ACTIVADA!",USD:"OPTION ACTIVATED!",PT:"OPÇÃO ATIVADA!",FR:"OPTION ACTIVÉE !",DE:"OPTION AKTIVIERT!"}},"sim-exito":{title:{LATAM:"Activación simulada completada con éxito.",USD:"Simulated activation completed successfully.",PT:"Ativação simulada concluída com sucesso.",FR:"Activation simulée complétée avec succès.",DE:"Simulierte Aktivierung erfolgreich abgeschlossen."}},"volver-menu":{title:{LATAM:"Volver al Menú",USD:"Back to Menu",PT:"Voltar ao Menu",FR:"Retour au Menu",DE:"Zurück zum Menü"}},"menu-principal-label":{title:{LATAM:"MENU PRINCIPAL",USD:"MAIN MENU",PT:"MENU PRINCIPAL",FR:"MENU PRINCIPAL",DE:"HAUPTMENÜ"}}},Wf={enter_title:{LATAM:"CONSOLA SCRIPT MGG",USD:"MGG SCRIPT CONSOLE",PT:"CONSOLE SCRIPT MGG",FR:"CONSOLE SCRIPT MGG",DE:"MGG SCRIPT KONSOLE"},enter_desc:{LATAM:"Ingresa la contraseña técnica para interactuar con la consola de manera segura.",USD:"Enter the password to interact with the simulated console environment.",PT:"Insira a senha técnica para poder interagir com o console.",FR:"Entrez le mot de passe technique pour interagir avec le console.",DE:"Geben Sie das Passwort ein, um die interaktive Konsole zu betreten."},suggested_pass:{LATAM:"Contraseña sugerida: SMITH-NEXUS-2026",USD:"Suggested password: SMITH-NEXUS-2026",PT:"Senha recomendada: SMITH-NEXUS-2026",FR:"Mot de passe suggéré : SMITH-NEXUS-2026",DE:"Empfohlenes Passwort: SMITH-NEXUS-2026"},placeholder_pass:{LATAM:"Escribe SMITH-NEXUS-2026",USD:"Type SMITH-NEXUS-2026",PT:"Digite SMITH-NEXUS-2026",FR:"Saisissez SMITH-NEXUS-2026",DE:"SMITH-NEXUS-2026 eingeben"},btn_validate:{LATAM:"Acceder a la Consola",USD:"Access Console",PT:"Acessar Console",FR:"Accéder à la console",DE:"Auf Konsole zugreifen"},incorrect_pass:{LATAM:"Contraseña incorrecta. Copia SMITH-NEXUS-2026",USD:"Incorrect password. Copy SMITH-NEXUS-2026",PT:"Senha incorreta. Verifique SMITH-NEXUS-2026",FR:"Mot de passe incorrect. Vérifiez SMITH-NEXUS-2026",DE:"Ungültiges Passwort. Verwenden Sie SMITH-NEXUS-2026"},btn_exit:{LATAM:"Regresar",USD:"Return",PT:"Regresar",FR:"Retour",DE:"Zurück"},header_title:{LATAM:"CONSOLA INTERACTIVA DE PRUEBA",USD:"INTERACTIVE TEST CONSOLE",PT:"CONSOLE DE TESTE INTERATIVO",FR:"CONSOLE DE TEST INTERACTIVE",DE:"INTERAKTIVE TESTKONSOLE"},header_subtitle:{LATAM:"Entorno de Demostración Rápida • Smith Luque",USD:"Quick Demonstration Environment • Smith Luque",PT:"Ambiente de Demonstração Rápida • Smith Luque",FR:"Environnement de Démo Rapide • Smith Luque",DE:"Schnelle Demoumgebung • Smith Luque"},disclaimer:{LATAM:"Aviso: Esta simulación sirve exclusivamente para practicar visualmente de manera segura e intuitiva.",USD:"Notice: This simulation serves exclusively to practice visually in a safe and intuitive manner.",PT:"Aviso: Esta simulação serve exclusivamente para praticar visualmente de forma segura e intuitiva.",FR:"Avis : Cette simulation sert uniquement à s'entraîne visuellement de manière sûre et intuitive.",DE:"Hinweis: Diese Simulation dient ausschließlich dem sicheren und intuitiven visuellen Training."}};function e1({isEmbedded:n=!1,onClose:s}){const{region:l}=We(),r=J=>{var R,H;return((R=Wf[J])==null?void 0:R[l])||((H=Wf[J])==null?void 0:H.LATAM)||J},d=J=>{var H;const R=Jf[J.id];return R&&((H=R.title)!=null&&H[l])?R.title[l]:J.title},p=J=>{var H;const R=Jf[J.id];return R&&((H=R.desc)!=null&&H[l])?R.desc[l]:J.desc||""},[g,b]=C.useState(""),[x,m]=C.useState(""),[f,_]=C.useState("password"),[y,G]=C.useState([]),[v,S]=C.useState(null),T=()=>{g.trim()==="SMITH-NEXUS-2026"?(m(""),_("menu"),G([])):m(r("incorrect_pass"))},N=()=>{b("SMITH-NEXUS-2026"),m(""),_("menu"),G([])},L=J=>{J.children&&J.children.length>0?G(R=>[...R,J]):(S(J),_("success"))},E=()=>{y.length>0&&G(J=>J.slice(0,-1))},V=y.length>0?y[y.length-1]:null,K=V?V.children||[]:aA;return i.jsx("div",{className:`w-full ${n?"p-1":"py-8 px-4"} max-w-4xl mx-auto select-none text-left`,children:i.jsxs("div",{className:"bg-[#090f1c] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col relative transition-all min-h-[500px]",children:[i.jsxs("header",{className:"bg-[#0d1527] border-b border-white/10 px-5 py-4 flex items-center justify-between gap-3 shrink-0",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"w-3 h-3 rounded-full bg-emerald-500 animate-pulse border border-emerald-400/40 shrink-0"}),i.jsxs("div",{className:"flex flex-col",children:[i.jsx("span",{className:"text-[10px] text-slate-400 font-black uppercase tracking-wider leading-none",children:r("header_title")}),i.jsx("span",{className:"text-[8px] text-emerald-400 font-bold uppercase tracking-widest mt-1",children:r("header_subtitle")})]})]}),s&&i.jsx("button",{onClick:s,className:"py-1 px-3 rounded-lg text-xs font-black uppercase bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 active:scale-95 transition-all cursor-pointer",children:r("btn_exit")})]}),i.jsxs("div",{className:"flex-1 p-5 md:p-8 flex flex-col justify-start",children:[f==="password"&&i.jsxs("div",{className:"max-w-md w-full mx-auto text-center space-y-6 py-6 self-center my-auto",children:[i.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-emerald-400 mx-auto shadow-inner",children:i.jsx(Ns,{size:24})}),i.jsxs("div",{className:"space-y-2",children:[i.jsx("h3",{className:"text-white text-lg font-black uppercase tracking-normal",children:r("enter_title")}),i.jsx("p",{className:"text-xs text-slate-400 leading-relaxed max-w-sm mx-auto",children:r("enter_desc")})]}),i.jsx("button",{onClick:N,className:"w-full bg-emerald-950/40 border border-emerald-500/20 hover:border-emerald-500/40 text-emerald-300 font-mono text-[11px] p-3 rounded-xl block transition-all active:scale-99",children:i.jsxs("div",{className:"flex items-center justify-center gap-2",children:[i.jsx(Ui,{size:11,className:"text-emerald-400 animate-pulse"}),i.jsx("span",{children:r("suggested_pass")})]})}),i.jsxs("div",{className:"space-y-3",children:[i.jsx("input",{type:"text",value:g,onChange:J=>{b(J.target.value),m("")},onKeyDown:J=>J.key==="Enter"&&T(),placeholder:r("placeholder_pass"),className:"w-full text-center bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white font-mono tracking-wider outline-none focus:border-emerald-500 transition-all uppercase placeholder:normal-case placeholder:font-sans placeholder:tracking-normal"}),x&&i.jsx("p",{className:"text-red-400 text-xs font-bold leading-none",children:x}),i.jsxs("button",{onClick:T,className:"w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black uppercase text-xs py-3.5 rounded-xl flex items-center justify-center gap-1 transition-all active:scale-95 shadow-lg shadow-emerald-500/10 cursor-pointer",children:[i.jsx(xb,{size:14}),i.jsx("span",{children:r("btn_validate")})]})]})]}),f==="menu"&&i.jsxs("div",{className:"w-full space-y-4",children:[i.jsxs("div",{className:"flex items-center justify-between border-b border-white/5 pb-3",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:"text-xs uppercase font-bold tracking-widest text-slate-400 font-mono",children:V?V.num:">>>"}),i.jsx("h3",{className:"text-white text-xs sm:text-sm font-black uppercase tracking-widest",children:V?d(V):r("menu-principal-label")})]}),y.length>0&&i.jsxs("button",{onClick:E,className:"py-1 px-2.5 rounded-lg text-[9px] font-black uppercase text-slate-400 hover:text-emerald-400 bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all cursor-pointer flex items-center gap-1 active:scale-95",children:[i.jsx(vu,{size:10,strokeWidth:2.5}),i.jsx("span",{children:r("atras")})]})]}),i.jsxs("div",{className:"space-y-2.5",children:[K.map(J=>{const R=!J.children||J.children.length===0;return i.jsx("button",{onClick:()=>L(J),className:`w-full text-left bg-[#0c1322]/60 hover:bg-[#0c1322] border border-white/5 hover:border-emerald-500/20 rounded-xl sm:rounded-2xl transition-all flex items-center justify-between gap-4 group cursor-pointer active:scale-[0.99] ${R?"p-3":"p-4"}`,children:R?i.jsxs("div",{className:"flex items-center gap-3.5 w-full",children:[i.jsx("div",{className:"w-10 h-10 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.03)] group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 transition-all",children:i.jsx(xb,{size:16,className:"text-emerald-400 group-hover:scale-110 transition-transform"})}),i.jsxs("div",{className:"space-y-0.5 flex-1 min-w-0",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:"text-emerald-400 font-mono text-xs sm:text-sm font-black tracking-normal shrink-0",children:J.num}),i.jsx("span",{className:"text-white text-xs sm:text-sm font-black uppercase tracking-wider group-hover:text-emerald-300 transition-colors truncate",children:d(J)})]}),J.desc&&i.jsx("p",{className:"text-[10px] sm:text-xs text-slate-400 font-medium leading-relaxed tracking-wide truncate sm:whitespace-normal",children:p(J)})]}),i.jsxs("div",{className:"flex items-center gap-1.5 shrink-0 pl-1",children:[i.jsx("span",{className:"text-[9px] font-black uppercase text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity tracking-wider hidden sm:inline leading-none",children:"EJECUTAR"}),i.jsx("div",{className:"w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all shrink-0",children:i.jsx(Ok,{size:10,fill:"currentColor",className:"ml-0.5",strokeWidth:2.5})})]})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"space-y-1",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:"text-emerald-400 font-mono text-xs sm:text-sm font-black tracking-normal",children:J.num}),i.jsx("span",{className:"text-white text-xs sm:text-sm font-black uppercase tracking-wider group-hover:text-emerald-300 transition-colors",children:d(J)})]}),J.desc&&i.jsx("p",{className:"text-[10px] sm:text-xs text-slate-400 font-medium leading-relaxed tracking-wide",children:p(J)})]}),i.jsx(qr,{size:14,className:"text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0"})]})},J.id)}),y.length>0&&i.jsxs("button",{onClick:E,className:"w-full text-left bg-red-950/5 hover:bg-red-500/[0.04] border border-red-500/10 hover:border-red-500/30 p-4 rounded-xl sm:rounded-2xl transition-all flex items-center justify-between gap-4 group cursor-pointer active:scale-[0.99]",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:"text-red-400 font-mono text-xs sm:text-sm font-black",children:"[<]"}),i.jsx("span",{className:"text-red-300 text-xs sm:text-sm font-black uppercase tracking-wider group-hover:text-red-400 transition-colors",children:y.length===1?r("volver-main"):r("volver")})]}),i.jsx(vu,{size:14,className:"text-red-400/50 group-hover:text-red-400 group-hover:-translate-x-0.5 transition-all shrink-0"})]})]})]}),f==="success"&&v&&i.jsxs("div",{className:"max-w-md w-full mx-auto text-center space-y-6 py-6 self-center my-auto animate-fade-in",children:[i.jsx("div",{className:"w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto shadow-lg shadow-emerald-500/10",children:i.jsx(on,{size:32,className:"animate-pulse"})}),i.jsxs("div",{className:"space-y-3",children:[i.jsx("h3",{className:"text-emerald-400 text-lg font-black uppercase tracking-wider leading-none",children:r("opcion-activada")}),i.jsx("div",{className:"bg-white/[0.02] border border-white/5 py-4 px-5 rounded-2xl inline-block w-full",children:i.jsx("span",{className:"text-white text-xs sm:text-sm font-black uppercase tracking-wider block leading-relaxed select-all",children:d(v)})})]}),i.jsx("p",{className:"text-[11px] text-slate-400 leading-normal max-w-xs mx-auto font-bold uppercase tracking-wide",children:r("sim-exito")}),i.jsxs("button",{onClick:()=>{S(null),_("menu")},className:"w-full bg-[#0d1527] hover:bg-[#121c33] text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 font-black uppercase text-xs py-4 rounded-xl cursor-pointer transition-all active:scale-95 shadow-lg flex items-center justify-center gap-2",children:[i.jsx(vu,{size:13,strokeWidth:3}),i.jsx("span",{children:r("volver-menu")})]})]})]}),i.jsxs("footer",{className:"bg-[#070b13] border-t border-white/5 px-6 py-4 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[9px] text-slate-400 uppercase font-black tracking-wider leading-relaxed",children:[i.jsxs("div",{className:"flex items-center gap-1.5 opacity-65 text-center sm:text-left",children:[i.jsx(u0,{size:11,className:"text-yellow-500 shrink-0"}),i.jsx("span",{children:r("disclaimer")})]}),i.jsx("span",{className:"opacity-40 shrink-0",children:"SMITH • NEXUS_CONSOLE 2026"})]})]})})}const e0={download_center:{LATAM:"Centro de descargas",USD:"Download Center",PT:"Centro de Downloads",FR:"Centre de téléchargement",DE:"Download-Center"},downloads:{LATAM:"DESCARGAS",USD:"DOWNLOADS",PT:"DOWNLOADS",FR:"TÉLÉCHARGEMENTS",DE:"DOWNLOADS"},tools_desc:{LATAM:"Herramientas y recomendaciones según tu caso.",USD:"Tools and recommendations tailored to your setup.",PT:"Ferramentas e recomendações adaptadas ao seu caso.",FR:"Outils et recommandations adaptés à votre cas.",DE:"Werkzeuge und Empfehlungen für Ihren Fall."},essential_resources:{LATAM:"Recursos esenciales",USD:"Essential Resources",PT:"Recursos Essenciais",FR:"Ressources essentielles",DE:"Grundlegende Ressourcen"},download_btn:{LATAM:"Descargar",USD:"Download",PT:"Descarregar",FR:"Télécharger",DE:"Herunterladen"},gg_official:{LATAM:"GameGuardian (fuente oficial)",USD:"GameGuardian (Official Source)",PT:"GameGuardian (Fonte Oficial)",FR:"GameGuardian (Source officielle)",DE:"GameGuardian (Offizielle Quelle)"},gg_desc:{LATAM:"Evita APKs modificados. Descarga siempre desde el foro oficial. Normalmente requiere root real o virtual.",USD:"Avoid modified APKs. Always download from the official forum. Usually requires real or virtual root.",PT:"Evite APKs modificados. Sempre baixe do fórum oficial. Geralmente requer root real ou virtual.",FR:"Évitez les APK modifiés. Téléchargez toujours depuis le forum officiel. Nécessite généralement un accès root réel ou virtuel.",DE:"Vermeiden Sie modifizierte APKs. Laden Sie immer aus dem offiziellen Forum herunter. Erfordert normalerweise echten oder virtuellen Root."},mobile_vms:{LATAM:"Móvil: máquinas virtuales",USD:"Mobile: Virtual Machines",PT:"Celular: Máquinas Virtuais",FR:"Mobile : Machines virtuelles",DE:"Mobil: Virtuelle Maschinen"},pc_emulators:{LATAM:"PC: emuladores Android",USD:"PC: Android Emulators",PT:"PC: Emuladores Android",FR:"PC : Émulateurs Android",DE:"PC: Android-Emulatoren"},official_site:{LATAM:"Sitio oficial",USD:"Official Site",PT:"Site Oficial",FR:"Site officiel",DE:"Offizielle Website"},warn_title:{LATAM:"Usa bajo tu responsabilidad",USD:"Use at your own risk",PT:"Use por sua conta e risco",FR:"Utilisez à vos risques et périls",DE:"Nutzung auf eigene Gefahr"},warn_desc:{LATAM:"Esta conversión conserva la sección informativa del proyecto original.",USD:"This content is for information purposes only within this project.",PT:"Esta conversão mantém a seção informativa do projeto original.",FR:"Cette conversion conserve la section informative du projet d'origine.",DE:"Diese Konvertierung behält den informativen Teil des Originalprojekts bei."},lua_title:{LATAM:"Script LUA",USD:"Script LUA",PT:"Script LUA",FR:"Script LUA",DE:"Script LUA"},lua_desc:{LATAM:"Script definitivo para GameGuardian. Compatible con TodoCS.",USD:"Ultimate GameGuardian script. Compatible with TodoCS.",PT:"Script definitivo para GameGuardian. Compatível com TodoCS.",FR:"Script définitif pour GameGuardian. Compatible avec TodoCS.",DE:"Ultimatives Script für GameGuardian. Kompatibel mit TodoCS."},script_password:{LATAM:"Contraseña Script:",USD:"Script Password:",PT:"Senha do Script:",FR:"Mot de passe du script :",DE:"Script-Passwort:"},copy_success:{LATAM:"¡Copia Exitosa!",USD:"Copied!",PT:"Copiado!",FR:"Copié !",DE:"Kopiert!"},done:{LATAM:"Listo",USD:"Done",PT:"Pronto",FR:"Prêt",DE:"Fertig"},copy:{LATAM:"Copiar",USD:"Copy",PT:"Copiar",FR:"Copier",DE:"Kopieren"},interactive_guide_btn:{LATAM:"Ver Guía Interactiva",USD:"View Interactive Guide",PT:"Ver Guia Interativo",FR:"Voir le guide interactif",DE:"Interaktiven Guide ansehen"},close_console:{LATAM:"Cerrar Consola ✕",USD:"Close Console ✕",PT:"Fechar Console ✕",FR:"Fermer la console ✕",DE:"Konsole schließen ✕"},demo_mode:{LATAM:"Modo Demostración Académica",USD:"Academic Demonstration Mode",PT:"Modo de Demonstração Acadêmica",FR:"Mode de démonstration académique",DE:"Akademischer Demomodus"},txt_title:{LATAM:"Lista TXT",USD:"TXT List",PT:"Lista TXT",FR:"Liste TXT",DE:"TXT-Liste"},txt_desc:{LATAM:"Todos los códigos en formato de texto plano.",USD:"All codes in plain text format.",PT:"Todos os códigos em formato de texto simples.",FR:"Tous les codes au format texte brut.",DE:"Alle Codes im Klartextformat."},xlsx_title:{LATAM:"Lista Excel",USD:"Excel List",PT:"Lista Excel",FR:"Liste Excel",DE:"Excel-Liste"},xlsx_desc:{LATAM:"Base de datos completa en .xlsx para filtrado avanzado.",USD:"Complete database in .xlsx for advanced filtering.",PT:"Banco de dados completo em .xlsx para filtragem avançada.",FR:"Base de données complète en .xlsx pour un filtrage avancé.",DE:"Vollständige Datenbank im .xlsx-Format für erweitertes Filtern."},texture_title:{LATAM:"Textura MGG",USD:"MGG Texture",PT:"Textura MGG",FR:"Texture MGG",DE:"MGG-Textur"},texture_desc:{LATAM:"Nuevas texturas para la terraza, arenas e iconos.",USD:"Visual overhaul for hall, arenas, and icons.",PT:"Novas texturas para o terraço, arenas e ícones.",FR:"Nouvelles textures pour le hall, les arènes et les icônes.",DE:"Neue Texturen für die Terrasse, Arenen und Symbole."},vphone_desc:{LATAM:"Mejor opción para root virtual y compatibilidad con GG.",USD:"Best option for virtual root and GG compatibility.",PT:"Melhor opção para root virtual e compatibilidade com GG.",FR:"Option idéale pour le root virtuel et la compatibilité avec GG.",DE:"Beste Option für virtuellen Root und GG-Kompatibilität."},vmos_desc:{LATAM:"Mucha comunidad. El root y la compatibilidad cambian por versión.",USD:"Large community. Root and compatibility vary by version.",PT:"Grande comunidade. O root e a compatibilidade variam de acordo com a versão.",FR:"Grande communauté. Le root et la compatibilité varient selon la version.",DE:"Große Community. Root und Kompatibilität variieren je nach Version."},vmaster_desc:{LATAM:"Muy buena para separar apps, con root limitado.",USD:"Great for separating apps, limited root.",PT:"Muito boa para separar apps, com root limitado.",FR:"Très utile pour isoler les applications, avec root limité.",DE:"Sehr gut zum Trennen von Apps, mit eingeschränktem Root."},ldplayer_desc:{LATAM:"Equilibrio entre rendimiento y estabilidad.",USD:"Balance between performance and stability.",PT:"Equilíbrio entre desempenho e estabilidade.",FR:"Excellent équilibre entre performances et stabilité.",DE:"Gleichgewicht zwischen Leistung und Stabilität."},bluestacks_desc:{LATAM:"Alta compatibilidad para juegos.",USD:"High compatibility for games.",PT:"Alta compatibilidade para jogos.",FR:"Grande compatibilité avec les jeux.",DE:"Hohe Spielekompatibilität."},nox_desc:{LATAM:"Ideal para multi-instancia y control avanzado.",USD:"Ideal for multi-instance and advanced control.",PT:"Ideal para multi-instâncias e controle avançado.",FR:"Idéal pour le multi-instance et le contrôle avancé.",DE:"Ideal für Multi-Instanz und erweiterte Steuerung."},select_script_lang:{LATAM:"Idioma de la Script:",USD:"Script Language:",PT:"Idioma do Script:",FR:"Langue du Script :",DE:"Skript-Sprache:"},choose_lang:{LATAM:"Elegir Idioma...",USD:"Choose Language...",PT:"Escolher Idioma...",FR:"Choisir la langue...",DE:"Sprache wählen..."},download_locked:{LATAM:"BLOQUEADO",USD:"LOCKED",PT:"BLOQUEADO",FR:"BLOQUÉ",DE:"GESPERRT"},pls_select_lang:{LATAM:"⚠️ Elige un idioma arriba para descargar",USD:"⚠️ Choose a language above to download",PT:"⚠️ Escolha um idioma acima para baixar",FR:"⚠️ Choisissez une langue ci-dessus pour télécharger",DE:"⚠️ Wählen Sie oben eine Sprache zum Herunterladen"},virtual_instances_title:{LATAM:"Instancias Virtuales Optimadas",USD:"Optimized Virtual Instances",PT:"Instâncias Virtuais Otimizadas",FR:"Instances Virtuelles Optimisées",DE:"Optimierte Virtuelle Instanzen"},virtual_instances_desc:{LATAM:"Instancias preparadas y listas para usar. Haz clic en el botón de guía para ver qué son y cómo se usan paso a paso.",USD:"Pre-made instances ready to use. Click the user guide button to see what they are and how to use them step-by-step.",PT:"Instâncias preparadas e prontas para usar. Clique no botão de guia para ver o que são e como usá-las passo a passo.",FR:"Instances configurées et prêtes à l'emploi. Cliquez sur le bouton guide pour voir ce que c'est et comment les utiliser étape par étape.",DE:"Fertige Instanzen, sofort startklar. Klicken Sie auf die Anleitungsschaltfläche, um zu sehen, was sie sind und wie sie verwendet werden."},download_pc_instance:{LATAM:"Instancia PC (LDPlayer)",USD:"PC Instance (LDPlayer)",PT:"Instância PC (LDPlayer)",FR:"Instance PC (LDPlayer)",DE:"PC-Instanz (LDPlayer)"},download_mobile_instance:{LATAM:"Instancia Móvil (VPhone)",USD:"Mobile Instance (VPhone)",PT:"Instância Móvel (VPhone)",FR:"Instance Mobile (VPhone)",DE:"Mobil-Instanz (VPhone)"},view_vm_guide:{LATAM:"Ver Guía de Uso",USD:"View User Guide",PT:"Ver Guia de Uso",FR:"Voir la Guide d'Utilisation",DE:"Bedienungsanleitung ansehen"}},t0={LATAM:"https://www.mediafire.com/file/0n3xl8662tu01jw/LC_NEXUS_EDGE_ES.lua/file",USD:"https://www.mediafire.com/file/8ess1u8oljdcojj/LC_NEXUS_EDGE_EN.lua/file",PT:"https://www.mediafire.com/file/8mauh3acrehb00k/LC_NEXUS_EDGE_PT.lua/file",FR:"https://www.mediafire.com/file/8cr2r6k0e5hw6f1/LC_NEXUS_EDGE_FR.lua/file",DE:"https://www.mediafire.com/file/p64ke0qu7qyybnz/LC_NEXUS_EDGE_DE.lua/file"},Fu=[{code:"LATAM",label:"Español",flag:"🇪🇸"},{code:"USD",label:"English",flag:"🇺🇸"},{code:"PT",label:"Português",flag:"🇵🇹"},{code:"FR",label:"Français",flag:"🇫🇷"},{code:"DE",label:"Deutsch",flag:"🇩🇪"}];function nA(){const{region:n,setRegion:s}=We(),[l,r]=br.useState(!1),[d,p]=br.useState(!1),[g,b]=br.useState(null),[x,m]=br.useState(!1),f=v=>{var S,T;return((S=e0[v])==null?void 0:S[n])||((T=e0[v])==null?void 0:T.USD)||""},_=[{title:f("lua_title"),desc:f("lua_desc"),iconName:rk,href:g?t0[g]:"",download:"SCIRPT-NUEVA.V2.lua"},{title:f("txt_title"),desc:f("txt_desc"),iconName:xk,href:"https://www.mediafire.com/file/2fg3dtp4nhay3jw/lista-codigos.txt/file",download:"lista-codigos.txt"},{title:f("xlsx_title"),desc:f("xlsx_desc"),iconName:oy,href:"https://www.mediafire.com/file/n9l7kylzrpgiplq/lista-codigos.xlsx/file",download:"lista-codigos.xlsx"},{title:f("texture_title"),desc:f("texture_desc"),iconName:l0,href:"https://www.mediafire.com/file/gllbbith3a6i56a/Mutants_Genetic_Gladiators_Mod.apk/file",download:"Mutants_Genetic_Gladiators_Mod.apk"}],y=[["VPhoneOS",f("vphone_desc"),"https://vphoneos.com/"],["VMOS",f("vmos_desc"),""],["Virtual Master",f("vmaster_desc"),""]],G=[["LDPlayer",f("ldplayer_desc"),"https://www.ldplayer.net/"],["BlueStacks",f("bluestacks_desc"),""],["NoxPlayer",f("nox_desc"),""]];return i.jsxs("div",{className:"flex flex-col gap-6 pb-20",children:[i.jsxs("section",{className:"relative hero !p-10 md:!p-24 overflow-hidden rounded-[3rem]",children:[i.jsx("div",{className:"absolute inset-0 opacity-10 bg-grid-slate-900/[0.1] pointer-events-none"}),i.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-brand/20 to-transparent -rotate-12 transform translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"}),i.jsxs("div",{className:"relative z-10",children:[i.jsxs("div",{className:"eyebrow bg-white/5 border-white/10 px-4 py-1 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-md",children:[i.jsx(Gd,{size:14,className:"text-blue-brand-2"}),i.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:f("download_center")})]}),i.jsxs("h1",{className:"text-4xl md:text-8xl lg:text-9xl font-black mt-4 mb-6 uppercase tracking-tighter leading-[0.8] md:leading-[0.85] text-white",children:[f("downloads")," ",i.jsx("br",{}),i.jsxs("span",{className:"text-blue-brand relative",children:["MÓVIL / PC",i.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-1 bg-white/10 rounded-full"})]})]}),i.jsx("p",{className:"text-slate-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 opacity-90 leading-relaxed font-medium",children:f("tools_desc")})]})]}),i.jsx(dn,{}),i.jsxs("section",{className:"flex flex-col gap-4",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"h-px flex-1 bg-white/5"}),i.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight m-0 text-white",children:f("essential_resources")}),i.jsx("div",{className:"h-px flex-1 bg-white/5"})]}),i.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:_.map((v,S)=>{var L,E;const T=v.iconName,N=v.title==="Textura MGG"||v.title==="MGG Texture";return i.jsxs("article",{className:`panel flex flex-col gap-4 relative transition-all duration-300 border ${N?"glow-card border-blue-brand/40 bg-blue-brand/5":"hover:border-white/10"}`,children:[N&&i.jsx("span",{className:"badge-new uppercase",children:"New"}),i.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center ${N?"bg-blue-brand text-white":"bg-white/8 text-blue-brand-2"}`,children:i.jsx(T,{size:24})}),i.jsxs("div",{children:[i.jsx("h3",{className:`text-xl font-bold tracking-tight mb-2 ${N?"text-blue-brand-2":""}`,children:v.title}),i.jsx("p",{className:"text-muted text-sm m-0 min-h-[40px] leading-relaxed",children:v.desc})]}),S===0&&i.jsxs("div",{className:"mt-1 flex flex-col gap-2.5",children:[i.jsxs("div",{className:"p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-1.5 relative",children:[i.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase tracking-wider",children:f("select_script_lang")}),i.jsxs("div",{className:"relative",children:[i.jsxs("button",{type:"button",onClick:()=>m(!x),className:"w-full flex items-center justify-between gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-blue-brand/50 text-white text-xs font-black uppercase tracking-wider transition-all cursor-pointer relative z-20 active:scale-[0.98]",children:[i.jsxs("span",{className:"flex items-center gap-1.5",children:[i.jsx("span",{className:"text-sm leading-none",children:g?(L=Fu.find(V=>V.code===g))==null?void 0:L.flag:"🌐"}),i.jsx("span",{children:g?(E=Fu.find(V=>V.code===g))==null?void 0:E.label:f("choose_lang")})]}),i.jsx(Dr,{size:12,className:`text-slate-400 transition-transform ${x?"rotate-180":""}`})]}),i.jsx(ia,{children:x&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"fixed inset-0 z-30",onClick:()=>m(!1)}),i.jsx(Qe.div,{initial:{opacity:0,scale:.95,y:-5},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:-5},transition:{duration:.15},className:"absolute left-0 right-0 top-full mt-1.5 rounded-xl bg-[#091224] border border-white/15 shadow-2xl p-1.5 z-40 flex flex-col gap-1 select-none",children:Fu.map(V=>{const K=g===V.code;return i.jsxs("button",{type:"button",onClick:()=>{b(V.code),m(!1)},className:`flex items-center gap-2.5 w-full px-2.5 py-2.5 rounded-lg text-left text-[11px] font-black uppercase transition-all cursor-pointer ${K?"bg-blue-brand/20 text-white border border-blue-brand/35 shadow-[0_2px_10px_rgba(37,99,235,0.2)]":"text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"}`,children:[i.jsx("span",{className:"text-sm leading-none",children:V.flag}),i.jsx("span",{children:V.label})]},V.code)})})]})})]}),g===null&&i.jsx("p",{className:"text-[9px] text-yellow-500 font-bold uppercase tracking-wider text-center m-0 mt-1 animate-pulse",children:f("pls_select_lang")})]}),i.jsxs("div",{className:"p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-2 text-[11px]",children:[i.jsxs("div",{className:"flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider",children:[i.jsx("span",{children:f("script_password")}),l&&i.jsx("span",{className:"text-[#14a44d] font-black animate-pulse",children:f("copy_success")})]}),i.jsxs("div",{className:"flex items-center justify-between gap-1.5 bg-white/5 p-1 rounded-lg",children:[i.jsx("code",{className:"text-blue-brand-2 px-1.5 py-0.5 rounded font-mono font-black text-xs select-all",children:"SMITH-NEXUS-2026"}),i.jsx("button",{type:"button",onClick:V=>{V.preventDefault(),navigator.clipboard.writeText("SMITH-NEXUS-2026"),r(!0),setTimeout(()=>r(!1),2e3)},className:"py-1 px-2 rounded-md text-[9px] uppercase font-black bg-blue-brand text-white hover:brightness-110 active:scale-95 transition-all cursor-pointer shrink-0",children:f(l?"done":"copy")})]})]}),i.jsxs("button",{type:"button",onClick:()=>p(!0),className:"w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-black uppercase transition-all duration-200 active:scale-95 cursor-pointer shadow-lg",children:[i.jsxs("span",{className:"flex h-2 w-2 relative shrink-0",children:[i.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),i.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),i.jsx("span",{children:f("interactive_guide_btn")})]})]}),S!==0&&v.href&&v.href.includes(".lua")&&i.jsxs("div",{className:"mt-1 flex flex-col gap-2.5",children:[i.jsxs("div",{className:"p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-2 text-[11px]",children:[i.jsxs("div",{className:"flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider",children:[i.jsx("span",{children:f("script_password")}),l&&i.jsx("span",{className:"text-[#14a44d] font-black animate-pulse",children:f("copy_success")})]}),i.jsxs("div",{className:"flex items-center justify-between gap-1.5 bg-white/5 p-1 rounded-lg",children:[i.jsx("code",{className:"text-blue-brand-2 px-1.5 py-0.5 rounded font-mono font-black text-xs select-all",children:"SMITH-NEXUS-2026"}),i.jsx("button",{type:"button",onClick:V=>{V.preventDefault(),navigator.clipboard.writeText("SMITH-NEXUS-2026"),r(!0),setTimeout(()=>r(!1),2e3)},className:"py-1 px-2 rounded-md text-[9px] uppercase font-black bg-blue-brand text-white hover:brightness-110 active:scale-95 transition-all cursor-pointer shrink-0",children:f(l?"done":"copy")})]})]}),i.jsxs("button",{type:"button",onClick:()=>p(!0),className:"w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-black uppercase transition-all duration-200 active:scale-95 cursor-pointer shadow-lg",children:[i.jsxs("span",{className:"flex h-2 w-2 relative shrink-0",children:[i.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),i.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),i.jsx("span",{children:f("interactive_guide_btn")})]})]}),S===0?g?i.jsxs("a",{className:"btn w-full relative overflow-hidden group transition-all btn-primary shadow-lg shadow-blue-brand/20 active:scale-95 duration-200 text-center flex items-center justify-center gap-2",href:t0[g],target:"_blank",rel:"noopener noreferrer",children:[i.jsx("span",{className:"font-black uppercase",children:f("download_btn")}),i.jsx("span",{className:"download-shine","aria-hidden":"true"})]}):i.jsxs("button",{type:"button",onClick:()=>m(!0),className:"btn w-full relative overflow-hidden transition-all bg-slate-900 border border-white/5 text-slate-500 opacity-50 cursor-pointer flex items-center justify-center gap-2 active:scale-98",children:[i.jsx(Ns,{size:13}),i.jsx("span",{className:"font-black uppercase",children:f("download_locked")})]}):i.jsxs("a",{className:`btn w-full relative overflow-hidden group transition-all ${N?"bg-white text-black hover:bg-blue-brand-2 hover:text-white border-transparent":"btn-primary"}`,href:v.href,target:"_blank",rel:"noopener noreferrer",children:[i.jsx("span",{className:"font-black uppercase",children:f("download_btn")}),i.jsx("span",{className:"download-shine","aria-hidden":"true"})]})]},S)})})]}),i.jsxs("section",{className:"flex flex-col gap-4",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"h-px flex-1 bg-white/5"}),i.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight m-0 text-white",children:f("virtual_instances_title")}),i.jsx("div",{className:"h-px flex-1 bg-white/5"})]}),i.jsxs("article",{className:"panel flex flex-col lg:flex-row gap-6 items-center justify-between transition-all border border-blue-brand/30 bg-blue-brand/5 relative overflow-hidden rounded-[2rem] p-6 md:p-8",children:[i.jsx("div",{className:"absolute top-0 right-0 w-48 h-48 bg-blue-brand/10 rounded-full blur-3xl pointer-events-none"}),i.jsxs("div",{className:"flex gap-4 items-start text-left",children:[i.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-blue-brand text-white shadow-lg shadow-blue-brand/30 mt-1",children:i.jsx(s0,{size:24,className:"animate-pulse text-white"})}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-black uppercase tracking-tight text-white mb-2",children:f("virtual_instances_title")}),i.jsx("p",{className:"text-slate-300 text-sm m-0 leading-relaxed max-w-2xl font-semibold",children:f("virtual_instances_desc")})]})]}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0 relative z-10",children:[i.jsxs("a",{href:"https://drive.google.com/file/d/1eUurSrMLYDrsCO4pL_6cQYSrHtkF1yYP/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"btn flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-brand hover:bg-blue-brand-2 text-white text-xs font-black uppercase tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center",children:[i.jsx(r0,{size:15}),i.jsx("span",{children:f("download_pc_instance")})]}),i.jsxs("a",{href:"https://drive.google.com/file/d/1E6wB3fZbFUibi29C6djOULMc8HcrB_3d/view?usp=drive_link",target:"_blank",rel:"noopener noreferrer",className:"btn flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-xs font-black uppercase tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center font-bold",children:[i.jsx(Ad,{size:15}),i.jsx("span",{children:f("download_mobile_instance")})]}),i.jsxs("a",{href:"#/guia#instancias-guide",className:"btn flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-black uppercase tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center font-bold",children:[i.jsx(ws,{size:15}),i.jsx("span",{children:f("view_vm_guide")})]})]})]})]}),i.jsxs("section",{className:"panel flex gap-4 items-center transition-all border border-white/10 bg-white/[0.02]",children:[i.jsx("div",{className:"w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-white/8 text-green-brand",children:i.jsx(c0,{size:24})}),i.jsxs("div",{className:"flex-1",children:[i.jsx("h3",{className:"text-lg font-bold tracking-tight mb-1 text-white font-black",children:f("gg_official")}),i.jsx("p",{className:"text-muted text-sm m-0",children:f("gg_desc")})]}),i.jsxs("div",{className:"hidden lg:flex gap-2",children:[i.jsx("span",{className:"px-3 py-1.5 rounded-full text-[12px] font-bold bg-white/8 text-blue-100",children:"Root real"}),i.jsx("span",{className:"px-3 py-1.5 rounded-full text-[12px] font-bold bg-white/8 text-blue-100",children:"Root virtual"})]})]}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[i.jsxs("section",{className:"panel flex flex-col gap-5 border border-white/10 bg-gradient-to-br from-white/[0.01] to-transparent",children:[i.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white uppercase tracking-tighter",children:f("mobile_vms")}),i.jsx("div",{className:"grid gap-4",children:y.map(([v,S,T],N)=>i.jsxs("div",{className:"p-4 rounded-xl border border-white/5 bg-white/2 hover:border-white/10 transition-colors",children:[i.jsx("h4",{className:"font-bold mb-1 text-white",children:v}),i.jsx("p",{className:"text-muted text-sm mb-3 leading-relaxed",children:S}),T?i.jsxs("a",{href:T,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm text-xs py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black",children:[i.jsx(nn,{size:14}),i.jsx("span",{children:f("official_site")})]}):i.jsxs("button",{disabled:!0,className:"btn btn-sm text-xs py-2 opacity-50 cursor-not-allowed",children:[i.jsx(nn,{size:14}),i.jsx("span",{children:f("official_site")})]})]},N))})]}),i.jsxs("section",{className:"panel flex flex-col gap-5 border border-white/10 bg-gradient-to-br from-white/[0.01] to-transparent",children:[i.jsx("h3",{className:"text-xl font-bold tracking-tight m-0 text-white uppercase tracking-tighter",children:f("pc_emulators")}),i.jsx("div",{className:"grid gap-4",children:G.map(([v,S,T],N)=>i.jsxs("div",{className:"p-4 rounded-xl border border-white/5 bg-white/2 hover:border-white/10 transition-colors",children:[i.jsx("h4",{className:"font-bold mb-1 text-white",children:v}),i.jsx("p",{className:"text-muted text-sm mb-3 leading-relaxed",children:S}),T?i.jsxs("a",{href:T,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm text-xs py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black",children:[i.jsx(nn,{size:14}),i.jsx("span",{children:f("official_site")})]}):i.jsxs("button",{disabled:!0,className:"btn btn-sm text-xs py-2 opacity-50 cursor-not-allowed",children:[i.jsx(nn,{size:14}),i.jsx("span",{children:f("official_site")})]})]},N))})]})]}),i.jsxs("section",{className:"panel flex gap-4 items-start border-l-4 bg-yellow-brand/5 border-yellow-brand",children:[i.jsx(u0,{size:24,className:"text-yellow-brand shrink-0 mt-1"}),i.jsxs("div",{children:[i.jsx("strong",{className:"block text-white mb-1",children:f("warn_title")}),i.jsx("p",{className:"text-muted text-sm m-0",children:f("warn_desc")})]})]}),i.jsx(ap,{pageId:"descargas"}),d&&i.jsx("div",{className:"fixed inset-0 z-[110] flex items-center justify-center p-0 sm:p-4 md:p-6 bg-slate-950/95 backdrop-blur-md overflow-hidden animate-fade-in text-left text-slate-300",children:i.jsxs("div",{className:"relative w-full h-full sm:h-full max-w-6xl bg-[#070b14] border-0 sm:border-2 border-white/10 rounded-none sm:rounded-[2.5rem] shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col sm:max-h-[92vh] overflow-hidden select-none",children:[i.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/20 via-emerald-500 to-emerald-500/20 opacity-60"}),i.jsxs("header",{className:"flex items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4.5 bg-[#0b1220] border-b border-white/5 shrink-0 relative z-20",children:[i.jsxs("div",{className:"flex items-center gap-2.5",children:[i.jsx("div",{className:"w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse border border-emerald-400/40"}),i.jsxs("div",{className:"flex flex-col text-left",children:[i.jsx("span",{className:"text-[10px] sm:text-xs font-black text-white uppercase tracking-wider leading-none",children:"NEXUS INTERFACE SIMULATOR"}),i.jsx("span",{className:"text-[8px] sm:text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-bold",children:"Consola Educativa de Smith Luque"})]})]}),i.jsxs("button",{type:"button",onClick:()=>p(!1),className:"py-1.5 px-3 sm:py-2.5 sm:px-5 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase text-red-500 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 transition-all duration-200 cursor-pointer active:scale-95 flex items-center gap-1 shrink-0",children:[i.jsx("span",{className:"sm:hidden",children:"✕"}),i.jsx("span",{className:"hidden sm:inline",children:f("close_console")})]})]}),i.jsx("div",{className:"flex-1 overflow-y-auto p-3 sm:p-6 md:p-8 scrollbar-none relative z-10 bg-slate-950/40",children:i.jsx(e1,{isEmbedded:!0,onClose:()=>p(!1)})}),i.jsxs("footer",{className:"px-4 py-2.5 sm:px-6 sm:py-3 bg-[#050a14] border-t border-white/5 shrink-0 flex items-center justify-between text-[8px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider",children:[i.jsx("span",{children:f("demo_mode")}),i.jsx("span",{children:"SMITH-NEXUS-2026"})]})]})})]})}const a0={legal_info:{LATAM:"Información Legal",USD:"Legal Information",PT:"Informação Legal",FR:"Informations légales",DE:"Rechtliche Informationen"},terms_conditions1:{LATAM:"TÉRMINOS Y ",USD:"TERMS & ",PT:"TERMOS E ",FR:"CONDITIONS & ",DE:"ALLGEMEINE "},terms_conditions2:{LATAM:"CONDICIONES",USD:"CONDITIONS",PT:"CONDIÇÕES",FR:"TERMES",DE:"GESCHÄFTSBEDINGUNGEN"},read_carefully:{LATAM:"Por favor lee atentamente las normas y condiciones de uso de Mutodex MGG.",USD:"Please read the rules and conditions of use for Mutodex MGG carefully.",PT:"Por favor, leia atentamente as regras e condições de uso do Mutodex MGG.",FR:"Veuillez lire attentivement les règles et conditions d'utilisation de Mutodex MGG.",DE:"Bitte lesen Sie die Regeln und Nutzungsbedingungen für Mutodex MGG sorgfältig durch."},rights_reserved:{LATAM:"Derechos Reservados",USD:"Rights Reserved",PT:"Direitos Reservados",FR:"Droits réserves",DE:"Rechte vorbehalten"},rights_desc:{LATAM:"Todos los derechos de diseño, desarrollo y marca personal relacionada con Mutodex MGG están reservados a Smith Luque. Cualquier reproducción parcial o total del contenido multimedia o código fuente sin autorización previa está prohibida.",USD:"All rights of design, development, and personal brand related to Mutodex MGG are reserved by Smith Luque. Any partial or total reproduction of multimedia content or source code without prior authorization is prohibited.",PT:"Todos os direitos de design, desenvolvimento e marca pessoal relacionados ao Mutodex MGG são reservados por Smith Luque. Qualquer reprodução parcial ou total do conteúdo multimídia ou código-fonte sem autorização prévia é proibida.",FR:"Tous les droits de conception, de développement et de marque personnelle liés à Mutodex MGG sont réservés par Smith Luque. Toute reproduction partielle ou totale du contenu multimédia ou du code source sans autorisation préalable est interdite.",DE:"Alle Design-, Entwicklungs- und Markenrechte im Zusammenhang mit Mutodex MGG sind Smith Luque vorbehalten. Jegliche teilweise oder vollständige Vervielfältigung von Multimedia-Inhalten oder Quellcode ohne vorherige Genehmigung ist untersagt."},risks_liability:{LATAM:"Riesgos y Responsabilidad",USD:"Risks & Liability",PT:"Riscos e Responsabilidade",FR:"Risques et responsabilité",DE:"Risiken & Haftung"},risks_desc:{LATAM:"El uso de scripts, hacks o herramientas de terceros (como Game Guardian) en Mutants Genetic Gladiators conlleva un RIESGO CRÍTICO DE BANEO de tu cuenta por parte de los desarrolladores oficiales del juego (Kobojo/Syntamon).",USD:"The use of scripts, hacks, or third-party tools (such as Game Guardian) in Mutants Genetic Gladiators carries a CRITICAL RISK OF BANNING of your account by the official game developers (Kobojo/Syntamon).",PT:"O uso de scripts, hacks ou ferramentas de terceiros (como Game Guardian) em Mutants Genetic Gladiators acarreta um RISCO CRÍTICO DE BANIMENTO de sua conta pelos desenvolvedores oficiais do jogo (Kobojo/Syntamon).",FR:"L'utilisation de scripts, de hacks ou d'outils tiers (tels que Game Guardian) dans Mutants Genetic Gladiators comporte un RISQUE CRITIQUE DE BANNISSEMENT de votre compte par les développeurs officiels du jeu (Kobojo/Syntamon).",DE:"Die Verwendung von Skripten, Hacks oder Tools von Drittanbietern (wie Game Guardian) in Mutants Genetic Gladiators birgt ein KRITISCHES BAN-RISIKO Ihres Kontos durch die offiziellen Spielentwickler (Kobojo/Syntamon)."},risk_bullet1:{LATAM:"Smith Luque no se hace responsable por pérdidas de cuentas.",USD:"Smith Luque is not responsible for any banned or lost accounts.",PT:"Smith Luque não é responsável por contas perdidas ou banidas.",FR:"Smith Luque n'est pas responsable des comptes bannis ou perdus.",DE:"Smith Luque ist nicht verantwortlich für gesperrte oder verlorene Konten."},risk_bullet2:{LATAM:"El uso del contenido de esta web es bajo tu propio riesgo.",USD:"Sourcing and testing scripts or utilizing codes is fully at your own risk.",PT:"O uso do conteúdo deste site é de sua total conta e risco.",FR:"L'utilisation du contenu de ce site se fait entièrement à vos risques et périls.",DE:"Die Verwendung der Inhalte dieser Website erfolgt auf eigene Gefahr."},risk_bullet3:{LATAM:"Recomendamos siempre probar en cuentas secundarias.",USD:"We highly recommend testing any external tools on secondary accounts first.",PT:"Recomendamos sempre testar ferramentas externas em contas secundárias primeiro.",FR:"Nous vous recommandons fortement de tester d'abord les outils externes sur des comptes secondaires.",DE:"Wir empfehlen dringend, externe Tools zuerst auf Zweitkonten zu testen."},purpose_title:{LATAM:"Propósito de la Web",USD:"Purpose of the Website",PT:"Propósito do Website",FR:"But du site internet",DE:"Zweck der Website"},purpose_desc:{LATAM:"Esta plataforma ha sido creada exclusivamente con fines de aprendizaje, investigación y entretenimiento. Nuestra misión es proporcionar una base de datos organizada para la comunidad de MGG y facilitar el acceso a la información técnica del juego.",USD:"This platform has been created exclusively for learning, research, and entertainment purposes. Our mission is to provide an organized, fast database for the MGG community and simplify secure access to the technical parameters of the game.",PT:"Esta plataforma foi criada exclusivamente para fins de aprendizagem, pesquisa e entretenimento. Nossa missão é fornecer um banco de dados organizado para a comunidade MGG e facilitar o acesso seguro aos parâmetros técnicos do jogo.",FR:"Cette plateforme a été créée exclusivement à des fins d'apprentissage, de recherche et de divertissement. Notre mission est de fournir une base de données organisée et rapide pour la communauté MGG et de simplifier l'accès sécurisé aux paramètres techniques du jeu.",DE:"Diese Plattform wurde ausschließlich zu Lern-, Forschungs- und Unterhaltungszwecken erstellt. Unsere Mission ist es, eine organisierte, schnelle Datenbank für die MGG-Community bereitzustellen und den sicheren Zugriff auf die technischen Parameter des Spiels zu vereinfachen."},benefits_title:{LATAM:"Beneficios y Utilidades",USD:"Utility & Benefits",PT:"Utilidade e Benefícios",FR:"Avantages et utilités",DE:"Nutzen & Vorteile"},benefit_bullet1:{LATAM:"Acceso instantáneo a IDs de mutantes actualizados.",USD:"Instant, secure access to updated mutant identifiers.",PT:"Acesso instantâneo e seguro aos identificadores de mutantes atualizados.",FR:"Accès instantané et sécurisé aux identifiants mis à jour des mutants.",DE:"Sofortiger, sicherer Zugriff auf aktualisierte Mutantenkennungen."},benefit_bullet2:{LATAM:"Cálculo preciso de recursos para la calculadora EVO.",USD:"Precise calculation of upgrade resources in EVO calculator.",PT:"Cálculo preciso de recursos na calculadora de EVO.",FR:"Calcul précis des ressources d'amélioration dans le calculateur EVO.",DE:"Präzise Berechnung von Upgrade-Ressourcen im EVO-Rechner."},benefit_bullet3:{LATAM:"Sincronización con el blog oficial de Mutodex.",USD:"Real-time linkups with the official Mutodex blog system.",PT:"Links em tempo real com o sistema de blog oficial do Mutodex.",FR:"Liaisons en temps réel avec le système de blog officiel de Mutodex.",DE:"Echtzeit-Verknüpfungen mit dem offiziellen Mutodex-Blog-System."},benefit_bullet4:{LATAM:"Servicios de ayuda y soporte comunitario.",USD:"Group discussion links and active community assistance.",PT:"Links de discussões de grupo e assistência ativa da comunidade.",FR:"Liens de discussion de groupe et assistance communautaire active.",DE:"Gruppen-Diskussionslinks und aktive Unterstützung der Community."},inquiries:{LATAM:"Contacto",USD:"Inquiries",PT:"Dúvidas",FR:"Demandes",DE:"Anfragen"},inquiries_desc:{LATAM:"Si tienes dudas sobre estos términos, puedes contactarme vía WhatsApp.",USD:"If you have any questions or concern regarding these policies, feel free to send a message on WhatsApp.",PT:"Se você tiver alguma dúvida ou preocupação sobre estas políticas, sinta-se à vontade para enviar uma mensagem no WhatsApp.",FR:"Si vous avez des questions ou des préoccupations concernant ces politiques, n'hésitez pas à envoyer un message sur WhatsApp.",DE:"Wenn Sie Fragen oder Bedenken bezüglich dieser Richtlinien haben, können Sie uns gerne eine Nachricht über WhatsApp senden."},get_support:{LATAM:"Consultar ayuda",USD:"Get Support",PT:"Obter Suporte",FR:"Obtenir de l'aide",DE:"Support anfordern"},last_updated:{LATAM:"Última actualización: 12 de Mayo, 2026. Al navegar por este sitio, aceptas estos términos automáticamente.",USD:"Last updated: May 12, 2026. By navigating this site, you automatically accept these terms.",PT:"Última atualização: 12 de maio de 2026. Ao navegar neste site, você aceita automaticamente estes termos.",FR:"Dernière mise à jour : 12 mai 2026. En naviguant sur ce site, vous acceptez automatiquement ces conditions.",DE:"Zuletzt aktualisiert: 12. Mai 2026. Durch das Navigieren auf dieser Website akzeptieren Sie diese Bedingungen automatisch."}};function sA(){const{region:n}=We(),s=l=>{var r,d;return((r=a0[l])==null?void 0:r[n])||((d=a0[l])==null?void 0:d.USD)||""};return i.jsxs("div",{className:"flex flex-col gap-6",children:[i.jsxs("section",{className:"hero !p-6 md:!p-12",children:[i.jsxs("div",{className:"eyebrow scale-90 md:scale-100",children:[i.jsx(Xk,{size:14}),i.jsx("span",{children:s("legal_info")})]}),i.jsxs("h1",{className:"text-3xl md:text-5xl font-black mt-4 mb-4 uppercase tracking-tighter leading-[0.9] md:leading-[1]",children:[s("terms_conditions1"),i.jsx("span",{className:"text-blue-brand-2",children:s("terms_conditions2")})]}),i.jsx("p",{className:"text-muted text-sm md:text-base max-w-2xl mx-auto px-4 opacity-80",children:s("read_carefully")})]}),i.jsx(dn,{}),i.jsxs("div",{className:"grid md:grid-cols-[1fr_0.4fr] gap-6 items-start",children:[i.jsxs("div",{className:"flex flex-col gap-6",children:[i.jsxs("section",{className:"panel flex flex-col gap-5 p-6 md:p-8",children:[i.jsxs("div",{className:"flex items-center gap-3 border-b border-line pb-4 mb-2",children:[i.jsx(on,{className:"text-blue-brand-2",size:24}),i.jsx("h2",{className:"m-0 text-xl font-bold uppercase tracking-tight",children:s("rights_reserved")})]}),i.jsx("p",{className:"text-slate-300 leading-relaxed",children:s("rights_desc")})]}),i.jsxs("section",{className:"panel flex flex-col gap-5 p-6 md:p-8 border-l-4 border-red-brand bg-red-brand/5",children:[i.jsxs("div",{className:"flex items-center gap-3 border-b border-white/5 pb-4 mb-2",children:[i.jsx(Bi,{className:"text-red-brand",size:24}),i.jsx("h2",{className:"m-0 text-xl font-bold uppercase tracking-tight text-white",children:s("risks_liability")})]}),i.jsxs("div",{className:"space-y-4",children:[i.jsx("p",{className:"text-slate-300 leading-relaxed m-0",children:s("risks_desc")}),i.jsxs("ul",{className:"grid gap-2 text-sm text-slate-400 list-disc pl-5",children:[i.jsx("li",{children:s("risk_bullet1")}),i.jsx("li",{children:s("risk_bullet2")}),i.jsx("li",{children:s("risk_bullet3")})]})]})]}),i.jsxs("section",{className:"panel flex flex-col gap-5 p-6 md:p-8",children:[i.jsxs("div",{className:"flex items-center gap-3 border-b border-line pb-4 mb-2",children:[i.jsx(Zr,{className:"text-blue-brand-2",size:24}),i.jsx("h2",{className:"m-0 text-xl font-bold uppercase tracking-tight",children:s("purpose_title")})]}),i.jsxs("div",{className:"space-y-4",children:[i.jsx("p",{className:"text-slate-300 leading-relaxed",children:s("purpose_desc")}),i.jsxs("div",{className:"bg-white/5 p-4 rounded-xl",children:[i.jsx("h3",{className:"text-sm font-bold text-blue-brand-2 mb-2 uppercase",children:s("benefits_title")}),i.jsxs("ul",{className:"grid gap-2 text-xs md:text-sm text-slate-400",children:[i.jsxs("li",{className:"flex gap-2",children:[i.jsx("span",{children:"•"})," ",i.jsx("span",{children:s("benefit_bullet1")})]}),i.jsxs("li",{className:"flex gap-2",children:[i.jsx("span",{children:"•"})," ",i.jsx("span",{children:s("benefit_bullet2")})]}),i.jsxs("li",{className:"flex gap-2",children:[i.jsx("span",{children:"•"})," ",i.jsx("span",{children:s("benefit_bullet3")})]}),i.jsxs("li",{className:"flex gap-2",children:[i.jsx("span",{children:"•"})," ",i.jsx("span",{children:s("benefit_bullet4")})]})]})]})]})]})]}),i.jsxs("aside",{className:"flex flex-col gap-4",children:[i.jsxs("div",{className:"panel p-5 bg-blue-brand/5 border-blue-brand/20",children:[i.jsx("h3",{className:"text-xs font-bold text-blue-brand-2 uppercase mb-3",children:s("inquiries")}),i.jsx("p",{className:"text-[11px] text-muted leading-relaxed mb-4",children:s("inquiries_desc")}),i.jsx("a",{href:"https://wa.me/51906328464",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary w-full text-xs py-2.5",children:s("get_support")})]}),i.jsx("p",{className:"text-[10px] text-center text-muted px-2",children:s("last_updated")})]})]})]})}function iA(){const{currentUser:n,login:s,signup:l,logout:r,isDbMocked:d,supabaseError:p}=Rn(),{colorTheme:g,translate:b}=We(),[x,m]=C.useState(!1),[f,_]=C.useState(""),[y,G]=C.useState(""),[v,S]=C.useState(""),[T,N]=C.useState(""),[L,E]=C.useState(Qt[0].url),[V,K]=C.useState(""),[J,R]=C.useState(null),[H,F]=C.useState(null),[B,Z]=C.useState(!1),ee=(()=>{switch(g){case"green":return{text:"text-green-brand",bg:"bg-green-500/5",border:"border-green-500/20",focusBorder:"focus:border-green-500/50",btn:"bg-green-600 hover:bg-green-500 text-white shadow-green-900/30",badge:"bg-green-500/20 text-green-300 border-green-500/30",glow:"shadow-[0_0_20px_rgba(34,197,94,0.15)]"};case"red":return{text:"text-red-400",bg:"bg-red-500/5",border:"border-red-500/20",focusBorder:"focus:border-red-500/50",btn:"bg-red-600 hover:bg-red-500 text-white shadow-red-900/30",badge:"bg-red-500/20 text-red-300 border-red-500/30",glow:"shadow-[0_0_20px_rgba(220,38,38,0.15)]"};case"pink":return{text:"text-pink-400",bg:"bg-pink-500/5",border:"border-pink-500/20",focusBorder:"focus:border-pink-500/50",btn:"bg-pink-600 hover:bg-pink-500 text-white shadow-pink-900/30",badge:"bg-pink-500/20 text-pink-300 border-pink-500/30",glow:"shadow-[0_0_20px_rgba(219,39,119,0.15)]"};case"purple":return{text:"text-purple-400",bg:"bg-purple-500/5",border:"border-purple-500/20",focusBorder:"focus:border-purple-500/50",btn:"bg-purple-600 hover:bg-purple-500 text-white shadow-purple-900/30",badge:"bg-purple-500/20 text-purple-300 border-purple-500/30",glow:"shadow-[0_0_20px_rgba(124,58,237,0.15)]"};case"white":return{text:"text-slate-200",bg:"bg-white/5",border:"border-white/20",focusBorder:"focus:border-white/50",btn:"bg-white text-black hover:bg-slate-200 shadow-slate-900/30",badge:"bg-white/20 text-white border-white/30",glow:"shadow-[0_0_20px_rgba(255,255,255,0.1)]"};case"blue":default:return{text:"text-blue-brand-2",bg:"bg-blue-brand/5",border:"border-blue-brand/20",focusBorder:"focus:border-blue-brand/50",btn:"bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/30",badge:"bg-blue-500/20 text-blue-300 border-blue-500/30",glow:"shadow-[0_0_20px_rgba(37,99,235,0.15)]"}}})(),Q=window.location.hash.includes("fav=true"),ie=async O=>{O.preventDefault(),R(null),F(null),Z(!0);try{const ne=await s(f,y||"password123");ne.success?(F("Sesión iniciada correctamente. Redirigiéndote..."),setTimeout(()=>{window.location.hash="/",window.scrollTo({top:0,behavior:"smooth"})},1200)):R(ne.error||"Ocurrió un error al iniciar sesión.")}catch{R("Error inesperado al conectar.")}finally{Z(!1)}},I=async O=>{O.preventDefault(),R(null),F(null),Z(!0);try{const ne=V.trim()||L,se=await l(f,y,v,ne,T);se.success?(F("¡Cuenta de gladiador creada! Sesión iniciada."),setTimeout(()=>{window.location.hash="/",window.scrollTo({top:0,behavior:"smooth"})},1200)):R(se.error||"Ocurrió un error al registrarse.")}catch{R("Error inesperado al registrarse.")}finally{Z(!1)}},W=O=>{_(O),G("password123"),m(!1)};return i.jsx("div",{className:"py-10 max-w-[1200px] mx-auto px-4 md:px-8 text-left select-none",children:i.jsxs("div",{className:"grid md:grid-cols-[1.4fr_1.1fr] gap-8 md:gap-12 items-start",children:[i.jsxs("div",{className:"space-y-6 md:pr-4",children:[i.jsxs("div",{className:"space-y-2",children:[i.jsxs("span",{className:`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${ee.badge}`,children:[i.jsx(Ui,{size:10}),i.jsx("span",{children:"Comunidad Mutodex"})]}),i.jsxs("h1",{className:"text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-none",children:["Únete al ",i.jsx("span",{className:ee.text,children:"Laboratorio"})]}),i.jsx("p",{className:"text-sm md:text-md text-slate-400 font-medium leading-relaxed",children:"Crea tu perfil de usuario para guardar tus recetas de hibridación, comentar tus opiniones en las descargas y participar en la comunidad de Mutants: Genetic Gladiators."})]}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex gap-4 items-start p-4 rounded-2xl bg-white/[0.02] border border-white/5",children:[i.jsx("div",{className:`w-10 h-10 rounded-xl ${ee.bg} border ${ee.border} flex items-center justify-center shrink-0`,children:i.jsx(ws,{className:`w-5 h-5 ${ee.text}`})}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-sm font-black text-white uppercase tracking-wider",children:"Sección de comentarios"}),i.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:"Responde a publicaciones de descargas de emuladores y guías, y debate con otros jugadores experimentados."})]})]}),i.jsxs("div",{className:"flex gap-4 items-start p-4 rounded-2xl bg-white/[0.02] border border-white/5",children:[i.jsx("div",{className:`w-10 h-10 rounded-xl ${ee.bg} border ${ee.border} flex items-center justify-center shrink-0`,children:i.jsx(rn,{className:`w-5 h-5 ${ee.text}`})}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-sm font-black text-white uppercase tracking-wider",children:"Foto y biografía de Gladiador"}),i.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:"Muestra tu colección, tu nivel de jugador y escribe tu motivación para ser parte de Mutodex."})]})]}),i.jsxs("div",{className:"flex gap-4 items-start p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/[0.03] text-yellow-500",children:[i.jsx(Bi,{className:"w-5 h-5 shrink-0 mt-0.5"}),i.jsxs("div",{className:"text-xs",children:[i.jsx("span",{className:"font-bold block uppercase tracking-wider mb-1",children:"Sin contraseñas reales"}),"Para tu absoluta seguridad personal, ",i.jsx("strong",{className:"text-white",children:"nunca utilices tu contraseña oficial del juego"})," en este proyecto. Todo el almacenamiento se simula y se guarda únicamente en la memoria local de tu navegador."]})]})]})]}),i.jsx("div",{children:i.jsxs("div",{className:`panel rounded-[2rem] bg-[#050a14]/95 border border-white/10 p-6 md:p-8 ${ee.glow} relative`,children:[i.jsxs("div",{className:"grid grid-cols-2 gap-2 bg-white/5 p-1 rounded-xl mb-6",children:[i.jsx("button",{type:"button",onClick:()=>{m(!1),R(null)},className:`py-2 px-3 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${x?"text-slate-400 hover:text-white":"bg-[#0a1224] text-white shadow-md"}`,children:"Iniciar sesión"}),i.jsx("button",{type:"button",onClick:()=>{m(!0),R(null)},className:`py-2 px-3 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${x?"bg-[#0a1224] text-white shadow-md":"text-slate-400 hover:text-white"}`,children:"Crear cuenta"})]}),d?i.jsxs("div",{className:"mb-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold uppercase flex gap-2.5 items-start",children:[i.jsx(ws,{size:14,className:"shrink-0 mt-0.5 text-amber-400"}),i.jsxs("div",{className:"text-left font-sans flex-1",children:[i.jsx("span",{className:"block font-black text-[9px] uppercase tracking-wider",children:"Servidor de Datos: Modo Simulador"}),i.jsx("span",{className:"text-[10px] text-slate-300 normal-case font-semibold block leading-tight mt-0.5",children:"No se detectan claves de Supabase. Puedes iniciar sesión instantáneamente con los gladiadores pre-cargados abajo."})]})]}):i.jsxs("div",{className:"mb-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase flex gap-2.5 items-start",children:[i.jsx(on,{size:14,className:"shrink-0 mt-0.5 text-green-400 animate-pulse"}),i.jsxs("div",{className:"text-left font-sans flex-1",children:[i.jsx("span",{className:"block font-black text-[9px] uppercase tracking-wider",children:"Supabase Sincronizado 🟢"}),i.jsx("span",{className:"text-[10px] text-slate-300 normal-case font-semibold block leading-tight mt-0.5",children:"Conexión exitosa a la tabla 'usuarios'. Tu cuenta se autenticará con la base de datos externa en tiempo real."})]})]}),Q&&!n&&i.jsxs("div",{className:"mb-4 p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase flex gap-2.5 items-start",children:[i.jsx(Ui,{size:16,className:"shrink-0 mt-0.5 text-blue-400"}),i.jsxs("div",{className:"text-left flex-1",children:[i.jsx("span",{className:"block font-black text-[11px] mb-0.5 text-white",children:"¡Sección Guardar Favoritos!"}),i.jsx("span",{className:"text-[10px] text-slate-300 font-medium normal-case leading-relaxed block",children:"Debes iniciar sesión con una cuenta de prueba o crear una nueva para poder guardar mutantes en tus favoritos."})]})]}),J&&i.jsxs("div",{className:"mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase flex gap-2 items-center",children:[i.jsx(Bi,{size:14,className:"shrink-0"}),i.jsx("span",{children:J==="profile.error_user_not_found"?"Gladiador no encontrado":J==="profile.error_wrong_password"?"Contraseña incorrecta":J==="profile.error_user_exists"?"El nombre de usuario ya está ocupado":J==="profile.error_empty_username"?"El nombre de usuario es obligatorio":J})]}),H&&i.jsxs("div",{className:"mb-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase flex gap-2 items-center",children:[i.jsx(on,{size:14,className:"shrink-0"}),i.jsx("span",{children:H})]}),x?i.jsxs("form",{onSubmit:I,className:"space-y-4 max-h-[480px] overflow-y-auto pr-1 scrollbar-none",children:[i.jsxs("div",{className:"space-y-1.5 text-left",children:[i.jsx("label",{className:"text-[10px] text-slate-400 uppercase font-black tracking-wider",children:"Usuario @ (Fácil de recordar)"}),i.jsxs("div",{className:"relative",children:[i.jsx(Ia,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500"}),i.jsx("input",{type:"text",required:!0,placeholder:"Tu identificador único, ej: gladiador_50",value:f,onChange:O=>_(O.target.value),className:`w-full bg-[#0a1224] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-200 outline-none ${ee.focusBorder} transition-all`})]})]}),i.jsxs("div",{className:"space-y-1.5 text-left",children:[i.jsx("label",{className:"text-[10px] text-slate-400 uppercase font-black tracking-wider",children:"Contraseña de acceso"}),i.jsxs("div",{className:"relative",children:[i.jsx(Ns,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500"}),i.jsx("input",{type:"password",required:!0,placeholder:"Clave (puede ser simple)",value:y,onChange:O=>G(O.target.value),className:`w-full bg-[#0a1224] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-200 outline-none ${ee.focusBorder} transition-all`})]})]}),i.jsxs("div",{className:"space-y-1.5 text-left",children:[i.jsx("label",{className:"text-[10px] text-slate-400 uppercase font-black tracking-wider",children:"Nombre Público Visible"}),i.jsx("input",{type:"text",required:!0,placeholder:"ej: Gladiador Legendario",value:v,onChange:O=>S(O.target.value),className:`w-full bg-[#0a1224] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none ${ee.focusBorder} transition-all`})]}),i.jsxs("div",{className:"space-y-1.5 text-left",children:[i.jsx("label",{className:"text-[10px] text-slate-400 uppercase font-black tracking-wider block",children:"Elige tu Avatar de Mutante"}),i.jsx("div",{className:"grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 gap-2",children:Qt.map(O=>{const ne=L===O.url&&!V;return i.jsx("button",{type:"button",onClick:()=>{E(O.url),K("")},className:`w-10 h-10 xs:w-11 h-11 sm:w-12 sm:h-12 rounded-lg overflow-hidden border transition-all cursor-pointer bg-[#0a1224] ${ne?"scale-110 border-blue-brand-2 ring-2 ring-blue-brand/50 bg-white/5":"border-white/10 hover:border-white/30"}`,children:i.jsx("img",{src:O.url,alt:O.name,className:"w-full h-full object-cover"})},O.id)})}),i.jsx("div",{className:"pt-1.5",children:i.jsx("input",{type:"text",placeholder:"O ingresa un URL de imagen personalizado...",value:V,onChange:O=>K(O.target.value),className:`w-full bg-[#0a1224] border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none ${ee.focusBorder} transition-all`})})]}),i.jsxs("div",{className:"space-y-1.5 text-left",children:[i.jsx("label",{className:"text-[10px] text-slate-400 uppercase font-black tracking-wider",children:"Biografía de Gladiador"}),i.jsx("textarea",{rows:2,placeholder:"Cuéntanos quién eres...",value:T,onChange:O=>N(O.target.value),className:`w-full bg-[#0a1224] border border-white/10 rounded-xl p-3 text-sm text-slate-200 outline-none ${ee.focusBorder} transition-all resize-none font-sans`})]}),i.jsx("button",{type:"submit",className:`w-full py-3.5 rounded-xl uppercase text-xs font-black tracking-widest transition-all cursor-pointer ${ee.btn} hover:scale-[1.01] active:scale-95`,children:"Registrarse e Ingresar"})]}):i.jsxs("form",{onSubmit:ie,className:"space-y-4",children:[i.jsxs("div",{className:"space-y-1.5 text-left",children:[i.jsx("label",{className:"text-[10px] text-slate-400 uppercase font-black tracking-wider",children:"Usuario @"}),i.jsxs("div",{className:"relative",children:[i.jsx(Ia,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500"}),i.jsx("input",{type:"text",required:!0,placeholder:"ejemplo: mgg_master",value:f,onChange:O=>_(O.target.value),className:`w-full bg-[#0a1224] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-200 outline-none ${ee.focusBorder} transition-all`})]})]}),i.jsxs("div",{className:"space-y-1.5 text-left",children:[i.jsx("label",{className:"text-[10px] text-slate-400 uppercase font-black tracking-wider",children:"Contraseña"}),i.jsxs("div",{className:"relative",children:[i.jsx(Ns,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500"}),i.jsx("input",{type:"password",required:!0,placeholder:"Tu clave (demo: password123)",value:y,onChange:O=>G(O.target.value),className:`w-full bg-[#0a1224] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-200 outline-none ${ee.focusBorder} transition-all`})]})]}),i.jsx("button",{type:"submit",disabled:B,className:`w-full py-3.5 rounded-xl uppercase text-xs font-black tracking-widest transition-all cursor-pointer ${ee.btn} hover:scale-[1.01] active:scale-95 flex items-center justify-center`,children:B?"Sincronizando...":"Entrar a la Arena"})]}),i.jsxs("div",{className:"mt-6 pt-5 border-t border-white/5 space-y-3.5 text-left",children:[i.jsx("span",{className:"text-[10px] font-black uppercase text-slate-500 tracking-wider flex items-center gap-1",children:i.jsx("span",{children:"Acceso rápido (Cuentas de prueba):"})}),i.jsxs("div",{className:"grid sm:grid-cols-3 gap-2",children:[i.jsx("button",{type:"button",onClick:()=>W("mgg_master"),className:"p-2 text-center rounded-xl bg-slate-500/10 hover:bg-slate-500/20 text-slate-300 text-[10px] font-bold border border-white/5 cursor-pointer uppercase tracking-tight",children:"Master (Mod)"}),i.jsx("button",{type:"button",onClick:()=>W("smith_luque"),className:"p-2 text-center rounded-xl bg-slate-500/10 hover:bg-slate-500/20 text-slate-300 text-[10px] font-bold border border-white/5 cursor-pointer uppercase tracking-tight",children:"Smith (Creador)"}),i.jsx("button",{type:"button",onClick:()=>W("gladiador_x"),className:"p-2 text-center rounded-xl bg-slate-500/10 hover:bg-slate-500/20 text-slate-300 text-[10px] font-bold border border-white/5 cursor-pointer uppercase tracking-tight",children:"Gladiador"})]})]})]})})]})})}const oA=n=>{const s=[{lvl:1,req:300},{lvl:2,req:400},{lvl:3,req:500},{lvl:4,req:600},{lvl:5,req:700},{lvl:6,req:800},{lvl:7,req:900},{lvl:8,req:1e3},{lvl:9,req:1100},{lvl:10,req:99999}];let l=1,r=0,d=300;for(let b=0;b<s.length;b++){const x=s[b];if(n>=r+x.req)r+=x.req,l=x.lvl+1;else{d=x.req;break}}const p=n-r,g=Math.min(p/d*100,100);return{level:Math.min(l,10),xpInCurrentLevel:p,nextLevelXPRequired:l>=10?0:d,progressPercent:l>=10?100:g}},rA=n=>{const s=["Recluta de la Arena"];return n>=2&&s.push("Hibridador de Bronce"),n>=3&&s.push("Buscador de Oro"),n>=4&&s.push("Cazador Cósmico 🌌"),n>=6&&s.push("Alquimista Platino 💎"),n>=8&&s.push("Sargento del Coliseo ⚔️"),n>=10&&s.push("Leyenda Suprema 👑"),s};function lA(){const{currentUser:n,comments:s,updateProfile:l,updateAccount:r,logout:d}=Rn(),{colorTheme:p,translate:g}=We(),[b,x]=C.useState(""),[m,f]=C.useState(""),[_,y]=C.useState(""),[G,v]=C.useState(""),[S,T]=C.useState("Recluta de la Arena"),[N,L]=C.useState(null),[E,V]=C.useState(null),[K,J]=C.useState(!1),R=(n==null?void 0:n.xp)||0;n!=null&&n.level;const H=(n==null?void 0:n.selectedTitle)||"Recluta de la Arena";C.useEffect(()=>{n&&(x(n.publicName),f(n.bio),T(n.selectedTitle||"Recluta de la Arena"),Qt.some(ne=>ne.url===n.avatarUrl)?(y(n.avatarUrl),v("")):(y(""),v(n.avatarUrl)))},[n]);const F=C.useMemo(()=>oA(R),[R]);C.useEffect(()=>{if(n){const O=F.level;if(O>(n.level||1)){const ne={...n,level:O};r(ne)}}},[F.level,n,r]);const B=C.useMemo(()=>n?s.filter(O=>O.userId===n.id).length+s.reduce((O,ne)=>O+ne.replies.filter(se=>se.userId===n.id).length,0):0,[s,n]),Z=C.useMemo(()=>rA(F.level),[F.level]);if(!n)return i.jsx("div",{className:"py-20 max-w-[600px] mx-auto px-4 text-center select-none",children:i.jsxs("div",{className:"panel rounded-[2rem] bg-gradient-to-b from-[#0a1224] to-[#040812] border border-white/10 p-8 space-y-6 shadow-2xl",children:[i.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-slate-400",children:i.jsx(Ia,{className:"w-8 h-8"})}),i.jsxs("div",{className:"space-y-2",children:[i.jsx("h2",{className:"text-xl font-black uppercase text-white tracking-widest",children:"Acceso Restringido"}),i.jsx("p",{className:"text-sm text-slate-400 leading-relaxed",children:"Debes registrarte o iniciar sesión para poder acceder al panel de gladiador premium, sintonizar tu perfil, y ver tus favoritos."})]}),i.jsx("button",{onClick:()=>{window.location.hash="/login"},className:"w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-widest transition-transform hover:scale-[1.02] cursor-pointer shadow-lg shadow-blue-900/35",children:"Iniciar Sesión / Registrarse"})]})});const ee=(()=>{switch(p){case"green":return{text:"text-green-brand",hoverText:"hover:text-green-400",bg:"bg-green-500/5",border:"border-green-500/10",btn:"bg-green-600 hover:bg-green-500 text-white shadow-green-900/30",badge:"bg-green-500/20 text-green-300 border border-green-550/30",borderActive:"border-green-500 text-green-brand",bar:"bg-green-550"};case"red":return{text:"text-red-400",hoverText:"hover:text-red-300",bg:"bg-red-500/5",border:"border-red-500/10",btn:"bg-red-600 hover:bg-red-500 text-white shadow-red-900/30",badge:"bg-red-500/40 text-red-300 border border-red-500/30",borderActive:"border-red-500 text-red-400",bar:"bg-red-500"};case"pink":return{text:"text-pink-400",hoverText:"hover:text-pink-300",bg:"bg-pink-500/5",border:"border-pink-500/10",btn:"bg-pink-600 hover:bg-pink-500 text-white shadow-pink-900/30",badge:"bg-pink-500/40 text-pink-300 border border-pink-500/30",borderActive:"border-pink-500 text-pink-400",bar:"bg-pink-500"};case"purple":return{text:"text-purple-400",hoverText:"hover:text-purple-300",bg:"bg-purple-500/5",border:"border-purple-500/10",btn:"bg-purple-600 hover:bg-purple-500 text-white shadow-purple-900/30",badge:"bg-purple-500/40 text-purple-300 border border-purple-500/30",borderActive:"border-purple-500 text-purple-400",bar:"bg-purple-550"};case"white":return{text:"text-slate-200",hoverText:"hover:text-white",bg:"bg-white/5",border:"border-white/10",btn:"bg-white text-black hover:bg-slate-200 shadow-slate-900/30",badge:"bg-white/20 text-white border border-white/30",borderActive:"border-white text-white",bar:"bg-white"};case"blue":default:return{text:"text-blue-brand-2",hoverText:"hover:text-blue-400",bg:"bg-blue-brand/5",border:"border-blue-brand/10",btn:"bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/30",badge:"bg-blue-500/40 text-blue-300 border border-blue-500/30",borderActive:"border-blue-500 text-blue-brand-2",bar:"bg-blue-600"}}})(),Q=O=>new Date(O).toLocaleDateString(void 0,{day:"numeric",month:"long",year:"numeric"}),ie=O=>{switch(O){case"Creador":return"bg-red-500/20 text-red-300 border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.15)]";case"Moderador":return"bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.15)]";case"Gladiador":return"bg-blue-500/20 text-blue-300 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)]";default:return"bg-slate-500/15 text-slate-400 border border-slate-500/25"}},I=O=>{O.preventDefault(),L(null),V(null);const ne=G.trim()||_;if(!b.trim()){L("El nombre público no puede estar vacío.");return}const se={...n,publicName:b.trim(),avatarUrl:ne,bio:m.trim(),selectedTitle:S};r(se).success?(V("¡Perfil de gladiador actualizado de forma segura!"),setTimeout(()=>V(null),3500)):L("Ocurrió un error inesperado al sincronizar.")},W=()=>{d(),window.location.hash="/",window.scrollTo({top:0,behavior:"smooth"})};return i.jsxs("div",{className:"py-12 max-w-[1300px] mx-auto px-4 md:px-8 text-left select-none relative",children:[i.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8 mb-8",children:[i.jsxs("div",{children:[i.jsxs("h1",{className:"text-2xl md:text-3xl font-black uppercase text-white tracking-tight flex items-center gap-3",children:[i.jsx(Ia,{className:ee.text}),i.jsx("span",{children:"Consola de Gladiador"})]}),i.jsx("p",{className:"text-xs md:text-sm text-slate-400 mt-1",children:"Configura tu perfil de gladiador y administra tus mutantes favoritos cómodamente."})]}),i.jsxs("button",{onClick:W,className:"flex items-center gap-2 px-5 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 border border-red-500/20 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-95",children:[i.jsx(Nk,{size:13}),i.jsx("span",{children:"Cerrar sesión"})]})]}),i.jsxs("div",{className:"grid lg:grid-cols-[1fr_2fr] gap-8 items-start mb-12",children:[i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{className:"p-6 md:p-8 rounded-[2rem] bg-gradient-to-b from-[#0a1224] to-[#040812] border border-white/10 relative overflow-hidden text-center shadow-xl",children:[i.jsx("div",{className:`absolute top-0 inset-x-0 mx-auto w-36 h-36 rounded-full blur-3xl ${p==="blue"?"bg-blue-500/15":"bg-red-500/15"} pointer-events-none`}),i.jsxs("div",{className:"relative w-28 h-28 mx-auto mb-4",children:[i.jsx("div",{className:"w-full h-full rounded-[1.75rem] overflow-hidden border-2 border-white/10 bg-[#0d162d] shadow-2xl",children:i.jsx("img",{src:n.avatarUrl||"https://s-ak.kobojo.com/mutants/assets/thumbnails/specimen_a_01_platinum.png",alt:n.publicName,className:"w-full h-full object-cover"})}),i.jsx("div",{className:"absolute -bottom-1 -right-1 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-brand to-blue-brand-2 border border-white/20 flex items-center justify-center text-white text-xs shadow-lg",children:i.jsx(Zu,{size:15,className:"animate-pulse"})})]}),i.jsx("h2",{className:"text-xl font-black text-white uppercase tracking-wider mb-0.5",children:n.publicName}),i.jsxs("div",{className:"text-xs font-black text-blue-400 uppercase tracking-widest mt-1 mb-2 font-sans flex items-center justify-center gap-1",children:[i.jsx(mb,{size:12,className:"shrink-0"}),i.jsx("span",{children:H})]}),i.jsxs("span",{className:"text-xs text-slate-500 font-mono block mb-4",children:["@",n.username]}),i.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4 text-left",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{className:"text-[10px] text-slate-400 font-black uppercase tracking-wider",children:"PRESTIGIO DE CUENTA"}),i.jsxs("span",{className:"text-xs font-black text-white",children:["Nivel ",F.level]})]}),i.jsxs("div",{className:"space-y-1.5",children:[i.jsx("div",{className:"w-full bg-[#050a14] rounded-full h-2.5 overflow-hidden border border-white/5",children:i.jsx("div",{className:`h-full ${ee.bar} transition-all duration-500 shadow-glow rounded-full`,style:{width:`${F.progressPercent}%`}})}),F.nextLevelXPRequired>0?i.jsxs("div",{className:"flex justify-between text-[9px] text-slate-500 font-mono uppercase font-black",children:[i.jsxs("span",{children:[F.xpInCurrentLevel," XP"]}),i.jsxs("span",{children:["Siguiente: ",F.nextLevelXPRequired," XP"]})]}):i.jsx("div",{className:"text-right text-[8px] text-amber-500 uppercase font-black tracking-wider leading-none",children:"¡Prestigio Máximo Alcanzado!"})]})]}),i.jsx("div",{className:"inline-block mt-4 mb-4",children:i.jsx("span",{className:`text-[9px] font-black uppercase px-3.5 py-1 rounded-full border tracking-widest ${ie(n.status)}`,children:n.status})}),i.jsxs("p",{className:"text-xs text-slate-400 italic bg-white/[0.01] border border-white/5 py-4 px-4 rounded-xl max-w-sm mx-auto leading-relaxed",children:['"',n.bio||"Sin biografía escrita todavía.",'"']}),i.jsxs("div",{className:"grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-white/5",children:[i.jsxs("div",{className:"p-2.5 bg-white/[0.02] border border-white/5 rounded-2xl text-left",children:[i.jsx("span",{className:"text-[8px] text-slate-500 font-black uppercase tracking-wider block mb-1 truncate",children:"Comentarios"}),i.jsxs("div",{className:"flex items-center gap-1.5 text-white",children:[i.jsx(Is,{size:13,className:ee.text}),i.jsx("strong",{className:"text-sm font-black leading-none",children:B})]})]}),i.jsxs("div",{className:"p-2.5 bg-white/[0.02] border border-[#ff0055]/5 rounded-2xl text-left",children:[i.jsx("span",{className:"text-[8px] text-slate-500 font-black uppercase tracking-wider block mb-1 truncate",children:"Guardados"}),i.jsxs("div",{className:"flex items-center gap-1.5 text-white",children:[i.jsx(oa,{size:13,className:ee.text}),i.jsx("strong",{className:"text-sm font-black leading-none",children:(n.savedMutants||[]).length})]})]}),i.jsxs("div",{className:"p-2.5 bg-white/[0.02] border border-white/5 rounded-2xl text-left",children:[i.jsx("span",{className:"text-[8px] text-slate-500 font-black uppercase tracking-wider block mb-1 truncate",children:"Miembro"}),i.jsxs("div",{className:"flex items-center gap-1.5 text-white",children:[i.jsx(Cr,{size:13,className:ee.text}),i.jsx("strong",{className:"text-[9px] font-black leading-tight truncate",children:Q(n.createdAt).split(" de ")[2]||"2026"})]})]})]})]}),i.jsxs("div",{className:"p-5 rounded-2xl bg-[#091224] border border-white/5 text-xs text-slate-400 space-y-2 leading-relaxed font-semibold shadow-inner",children:[i.jsxs("div",{className:"flex items-center gap-1.5 text-blue-400 font-black text-[10px] uppercase",children:[i.jsx(Zr,{size:13}),i.jsx("span",{children:"Sincronización Local"})]}),i.jsx("p",{className:"text-[11px]",children:"Tu experiencia de Gladiador se sincroniza de forma segura en tu navegador local. Ideal para llevar registro gratuito de tus escuadras en el Mutodex MGG."})]})]}),i.jsxs("div",{className:"rounded-[2rem] bg-gradient-to-b from-[#0a1224] to-[#040812] border border-white/10 shadow-xl overflow-hidden transition-all duration-300",children:[i.jsxs("button",{type:"button",onClick:()=>J(!K),className:"w-full p-6 md:p-8 flex items-center justify-between hover:bg-white/[0.02] transition-colors cursor-pointer text-left focus:outline-none",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"p-2.5 rounded-xl bg-blue-500/10 text-blue-400",children:i.jsx(Wk,{size:20,className:`transition-transform duration-500 ${K?"rotate-90":""}`})}),i.jsxs("div",{children:[i.jsx("strong",{className:"text-sm md:text-base font-black uppercase tracking-wider text-white block",children:"Configurar Perfil de Gladiador"}),i.jsx("span",{className:"text-xs text-slate-400 block mt-0.5 font-medium",children:K?"Presiona para contraer el panel":"Presiona para expandir y editar tu nombre, avatar, bio y título"})]})]}),i.jsx("div",{className:"text-slate-400 p-2 bg-white/5 rounded-xl border border-white/5 shrink-0",children:i.jsx(Dr,{size:18,className:`transition-transform duration-300 ${K?"rotate-180":""}`})})]}),i.jsx(ia,{initial:!1,children:K&&i.jsx(Qe.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},className:"overflow-hidden border-t border-white/5",children:i.jsxs("div",{className:"p-6 md:p-8 pt-2 space-y-6",children:[N&&i.jsxs("div",{className:"p-3.5 mb-5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase flex gap-2 items-center",children:[i.jsx(Bi,{size:14}),i.jsx("span",{children:N})]}),E&&i.jsxs("div",{className:"p-4 mb-5 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase flex gap-2 items-center shadow-lg",children:[i.jsx(on,{size:14}),i.jsx("span",{children:E})]}),i.jsxs("form",{onSubmit:I,className:"space-y-6",children:[i.jsxs("div",{className:"grid sm:grid-cols-2 gap-6",children:[i.jsxs("div",{className:"space-y-1.5",children:[i.jsx("label",{className:"text-[10px] text-slate-400 uppercase font-black tracking-wider block",children:"Nombre Público Visible"}),i.jsxs("div",{className:"relative",children:[i.jsx(Ia,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500"}),i.jsx("input",{type:"text",required:!0,value:b,onChange:O=>x(O.target.value),className:"w-full bg-[#050a14] border border-white/15 rounded-xl pl-11 pr-4 py-3 text-xs text-white outline-none focus:border-blue-500 transition-all font-semibold"})]})]}),i.jsxs("div",{className:"space-y-1.5",children:[i.jsx("label",{className:"text-[10px] text-slate-400 uppercase font-black tracking-wider block",children:"Título de Gladiador Activo"}),i.jsxs("div",{className:"relative",children:[i.jsx(mb,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500"}),i.jsx("select",{value:S,onChange:O=>T(O.target.value),className:"w-full bg-[#050a14] border border-white/15 rounded-xl pl-11 pr-4 py-3 text-xs text-white outline-none focus:border-blue-500 transition-all font-semibold cursor-pointer",children:Z.map(O=>i.jsx("option",{value:O,className:"bg-[#050a14] text-slate-300 font-bold",children:O},O))})]})]})]}),i.jsxs("div",{className:"space-y-1.5",children:[i.jsx("label",{className:"text-[10px] text-slate-400 uppercase font-black tracking-wider block",children:"Biografía de Gladiador"}),i.jsx("textarea",{rows:3,value:m,onChange:O=>f(O.target.value),placeholder:"ej: Hibridador experto nivel 5. Busco hibridaciones de platino...",className:"w-full bg-[#050a14] border border-white/15 rounded-xl p-3.5 text-xs text-white outline-none focus:border-blue-500 transition-all resize-none font-sans font-semibold"})]}),i.jsxs("div",{className:"space-y-4",children:[i.jsx("label",{className:"text-[10px] text-slate-400 uppercase font-black tracking-wider block",children:"Elige tu Foto de Avatar"}),i.jsx("div",{className:"grid grid-cols-3 sm:grid-cols-6 gap-3",children:Qt.map(O=>{const ne=_===O.url&&!G;return i.jsxs("button",{type:"button",onClick:()=>{y(O.url),v("")},className:`aspect-square rounded-xl overflow-hidden border transition-all cursor-pointer bg-[#050a14] relative flex items-center justify-center ${ne?"scale-105 border-blue-500 ring-2 ring-blue-500/40":"border-white/10 hover:border-white/20"}`,children:[i.jsx("img",{src:O.url,alt:O.name,className:"w-full h-full object-cover"}),ne&&i.jsx("div",{className:"absolute inset-0 bg-blue-600/15 flex items-center justify-center",children:i.jsx("div",{className:"w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] border border-white/20",children:"✓"})})]},O.id)})}),i.jsxs("div",{className:"space-y-1.5 pt-1.5 border-t border-white/5",children:[i.jsx("span",{className:"text-[9px] text-slate-500 uppercase font-black tracking-wider block",children:"O usa la URL de tu propia imagen personalizada"}),i.jsx("input",{type:"text",value:G,onChange:O=>{v(O.target.value),y("")},placeholder:"https://ejemplo.com/tu_logo_mgg.png",className:"w-full bg-[#050a14] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-blue-500 transition-all"})]})]}),i.jsx("div",{className:"pt-4 border-t border-white/5 flex justify-end",children:i.jsxs("button",{type:"submit",className:"w-full sm:w-auto px-8 py-3 rounded-xl uppercase text-xs font-black tracking-widest bg-blue-600 hover:bg-blue-500 text-white transition-all cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.01]",children:[i.jsx(Fk,{size:14}),i.jsx("span",{children:"Guardar Cambios"})]})})]})]})})})]})]}),i.jsxs("div",{className:"pt-8 border-t border-white/10 space-y-6",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-2.5",children:[i.jsx(oa,{size:18,className:"text-blue-400 fill-current shrink-0"}),i.jsxs("h4",{className:"text-sm sm:text-base font-black uppercase text-white tracking-widest",children:["Mis Mutantes Favoritos (",(n.savedMutants||[]).length,")"]})]}),i.jsx("button",{type:"button",onClick:()=>{window.location.hash="/mis-mutantes"},className:"text-xs font-black uppercase text-blue-400 tracking-wider hover:underline hover:text-blue-300 transition-colors",children:"Pantalla Completa →"})]}),!n.savedMutants||n.savedMutants.length===0?i.jsxs("div",{className:"p-12 text-center bg-[#0a1224]/50 border border-white/5 rounded-3xl",children:[i.jsx(oa,{className:"w-10 h-10 text-slate-600 mx-auto opacity-30 mb-3"}),i.jsx("strong",{className:"text-sm font-black text-white uppercase block mb-1",children:"Sin mutantes guardados"}),i.jsx("p",{className:"text-xs text-slate-500 max-w-sm mx-auto leading-relaxed",children:"Navega por la sección de inicio o guías, y presiona el marcador en cualquier tarjeta de mutante para verlo aquí."})]}):i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:Cs.filter(O=>(n.savedMutants||[]).includes(O.id)).map(O=>i.jsx("div",{className:"w-full flex justify-center",children:i.jsx(tp,{mutant:O})},O.id))})]})]})}function cA(){const{currentUser:n}=Rn(),{translate:s,colorTheme:l}=We(),d=(()=>{switch(l){case"green":return{text:"text-emerald-400",bg:"bg-emerald-500",hoverBg:"hover:bg-emerald-600",border:"border-emerald-500/20"};case"red":return{text:"text-red-400",bg:"bg-red-500",hoverBg:"hover:bg-red-600",border:"border-red-500/20"};case"pink":return{text:"text-pink-400",bg:"bg-pink-500",hoverBg:"hover:bg-pink-600",border:"border-pink-500/20"};case"purple":return{text:"text-purple-400",bg:"bg-purple-500",hoverBg:"hover:bg-purple-600",border:"border-purple-500/20"};default:return{text:"text-blue-brand-2",bg:"bg-blue-brand",hoverBg:"hover:bg-blue-brand-2",border:"border-blue-brand/20"}}})(),p=C.useMemo(()=>(n==null?void 0:n.savedMutants)||[],[n]),g=C.useMemo(()=>Cs.filter(m=>p.includes(m.id)),[p]),b=()=>{window.location.hash="/login"},x=()=>{window.location.hash="/"};return n?i.jsxs("div",{className:"py-10 max-w-[1400px] mx-auto px-4 md:px-8 text-left",children:[i.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6 mb-8",children:[i.jsxs("div",{children:[i.jsxs("h1",{className:"text-2xl md:text-3xl font-black uppercase text-white tracking-tight flex items-center gap-3",children:[i.jsx(oa,{className:`${d.text} fill-current`}),i.jsx("span",{children:"Mis Mutantes Guardados"})]}),i.jsx("p",{className:"text-xs md:text-sm text-slate-400 mt-1",children:"Tu lista personal de mutantes y gladiadores favoritos guardados de forma segura en tu dispositivo."})]}),g.length>0&&i.jsxs("span",{className:"text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl bg-[#0a1224] border border-white/10 text-slate-400",children:[g.length," ",g.length===1?"Mutante":"Mutantes"]})]}),g.length===0?i.jsxs("div",{className:"py-12 text-center max-w-md mx-auto",children:[i.jsx("div",{className:"w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center text-slate-400",children:i.jsx(oa,{size:24})}),i.jsx("h3",{className:"text-sm font-black uppercase text-white tracking-wider mb-2",children:"No tienes mutantes guardados"}),i.jsx("p",{className:"text-xs text-slate-400 leading-relaxed mb-6",children:"Navega por la página principal, busca tus gladiadores favoritos y presiona el icono del marcador a la esquina superior derecha de cada tarjeta para añadirlos aquí."}),i.jsx("button",{onClick:x,className:`px-5 py-2.5 rounded-xl ${d.bg} hover:opacity-90 text-white font-black uppercase tracking-wider text-xs transition-all cursor-pointer shadow-md`,children:"Buscar Mutantes"})]}):i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6",children:g.map(m=>i.jsx(tp,{mutant:m},m.id))})]}):i.jsx("div",{className:"py-16 max-w-[800px] mx-auto px-4 text-center",children:i.jsxs("div",{className:"p-8 md:p-12 rounded-[2rem] bg-gradient-to-b from-[#0a1224] to-[#040812] border border-white/10 shadow-2xl relative overflow-hidden",children:[i.jsx("div",{className:"absolute top-0 inset-x-0 mx-auto w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"}),i.jsx("div",{className:"relative w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400",children:i.jsx(Ns,{size:28,className:"text-amber-500"})}),i.jsx("h1",{className:"text-xl md:text-2xl font-black uppercase text-white tracking-widest mb-4",children:"Lista de Guardados Bloqueada"}),i.jsx("p",{className:"text-xs md:text-sm text-slate-400 leading-relaxed mb-8 max-w-md mx-auto",children:"¡Hola, Gladiador! La sección de mutantes guardados personalizados requiere de una cuenta local para poder registrar de forma segura cuáles mutants has elegido en tu navegador."}),i.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[i.jsxs("button",{onClick:b,className:`w-full sm:w-auto px-6 py-3 rounded-xl ${d.bg} text-white font-black uppercase tracking-wider text-xs transition-all duration-300 hover:scale-102 flex items-center justify-center gap-2 cursor-pointer shadow-lg`,children:[i.jsx("span",{children:"Iniciar sesión / Registrarse"}),i.jsx(U2,{size:14})]}),i.jsxs("button",{onClick:x,className:"w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black uppercase tracking-wider text-xs transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer",children:[i.jsx("span",{children:"Explorar Códigos"}),i.jsx(ck,{size:14})]})]})]})})}function uA(){const{allUsers:n,currentUser:s,comments:l}=Rn(),{translate:r,colorTheme:d}=We(),[p,g]=C.useState(""),[b,x]=C.useState("Todos"),[m,f]=C.useState(null),y=(()=>{switch(d){case"green":return{text:"text-green-brand",hoverText:"hover:text-green-400",bg:"bg-green-500/5",border:"border-green-500/10",accentBorder:"border-green-500/40",btn:"bg-green-600 hover:bg-green-500 text-white shadow-green-900/30",badge:"bg-green-500/20 text-green-300 border border-green-500/30",glow:"shadow-[0_0_20px_rgba(34,197,94,0.15)]"};case"red":return{text:"text-red-400",hoverText:"hover:text-red-300",bg:"bg-red-500/5",border:"border-red-500/10",accentBorder:"border-red-500/40",btn:"bg-red-600 hover:bg-red-500 text-white shadow-red-900/30",badge:"bg-red-500/20 text-red-300 border border-red-500/30",glow:"shadow-[0_0_20px_rgba(220,38,38,0.15)]"};case"pink":return{text:"text-pink-400",hoverText:"hover:text-pink-300",bg:"bg-pink-500/5",border:"border-pink-500/10",accentBorder:"border-pink-500/40",btn:"bg-pink-600 hover:bg-pink-500 text-white shadow-pink-900/30",badge:"bg-pink-500/20 text-pink-300 border border-pink-500/30",glow:"shadow-[0_0_20px_rgba(219,39,119,0.15)]"};case"purple":return{text:"text-purple-400",hoverText:"hover:text-purple-300",bg:"bg-purple-500/5",border:"border-purple-500/10",accentBorder:"border-purple-500/40",btn:"bg-purple-600 hover:bg-purple-500 text-white shadow-purple-900/30",badge:"bg-purple-500/20 text-purple-300 border border-purple-500/30",glow:"shadow-[0_0_20px_rgba(124,58,237,0.15)]"};case"white":return{text:"text-slate-200",hoverText:"hover:text-white",bg:"bg-white/5",border:"border-white/10",accentBorder:"border-white/30",btn:"bg-white text-black hover:bg-slate-200 shadow-slate-900/30",badge:"bg-white/20 text-white border border-white/30",glow:"shadow-[0_0_20px_rgba(255,255,255,0.1)]"};case"blue":default:return{text:"text-blue-brand-2",hoverText:"hover:text-blue-400",bg:"bg-blue-brand/5",border:"border-blue-brand/10",accentBorder:"border-blue-brand-2/40",btn:"bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/30",badge:"bg-blue-500/20 text-blue-300 border border-blue-500/30",glow:"shadow-[0_0_20px_rgba(37,99,235,0.15)]"}}})(),G=L=>{switch(L){case"Creador":return"bg-red-500/20 text-red-300 border border-red-500/30 shadow-[0_0_12px_rgba(239,68,68,0.25)]";case"Moderador":return"bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 shadow-[0_0_12px_rgba(234,179,8,0.25)]";case"Gladiador":return"bg-blue-500/20 text-blue-300 border border-blue-500/30 shadow-[0_0_12px_rgba(59,130,246,0.25)]";default:return"bg-slate-500/15 text-slate-300 border border-slate-500/20"}},v=["Todos","Creador","Moderador","Gladiador","Miembro"],S=(L,E)=>({comments:l.filter(K=>K.userId===L).length+l.reduce((K,J)=>K+J.replies.filter(R=>R.userId===L).length,0),saved:E||0}),T=C.useMemo(()=>n.filter(L=>{const E=p.toLowerCase().trim(),V=L.publicName.toLowerCase().includes(E)||L.username.toLowerCase().includes(E),K=b==="Todos"||L.status===b;return V&&K}),[n,p,b]),N=L=>{if(!L)return"2026";try{return new Date(L).toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric"})}catch{return"2026"}};return i.jsxs("div",{className:"py-6 sm:py-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-left select-none",children:[i.jsxs("div",{className:"relative rounded-[1.5rem] sm:rounded-[2.5rem] p-5 sm:p-8 md:p-10 bg-gradient-to-r from-[#010610] via-[#051125] to-[#010610] border border-white/10 overflow-hidden mb-6 sm:mb-10 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-5 sm:gap-6",children:[i.jsx("div",{className:`absolute -right-10 -top-10 w-44 h-44 rounded-full blur-[80px] opacity-25 pointer-events-none ${d==="blue"?"bg-blue-500":"bg-red-500"}`}),i.jsxs("div",{className:"relative z-10 space-y-2",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full",children:[i.jsx(Ui,{size:11,className:y.text}),i.jsx("span",{className:"text-[9px] font-black uppercase text-blue-400 tracking-[0.15em]",children:"Lobby de Gladiadores"})]}),i.jsxs("h1",{className:"text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tight text-white flex items-center gap-2.5 sm:gap-3",children:[i.jsx(rn,{className:`${y.text} w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8`}),i.jsx("span",{children:"Comunidad Mutodex"})]}),i.jsx("p",{className:"text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed",children:"Conoce, debate y visualiza a los demás gladiadores de Mutants: Genetic Gladiators que han creado su cuenta. Revisa perfiles, guarda mutantes y comparte estrategias."})]}),!s&&i.jsxs("button",{onClick:()=>{window.location.hash="/login"},className:"relative z-10 w-full sm:w-auto justify-center px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-wider text-xs flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-500/25 shrink-0",children:[i.jsx(dy,{size:14}),i.jsx("span",{children:"Crear mi Cuenta"})]})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-8 mb-10 items-start",children:[i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{className:"bg-[#050a14]/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center",children:[i.jsxs("div",{className:"relative w-full md:w-72",children:[i.jsx(Oi,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"}),i.jsx("input",{type:"text",value:p,onChange:L=>g(L.target.value),placeholder:"Buscar por nombre o @",className:"w-full bg-[#0a1224] border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-slate-200 outline-none focus:border-blue-brand/50 transition-all font-semibold"})]}),i.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto w-full md:w-auto scrollbar-none py-1 flex-nowrap snap-x snap-mandatory [-webkit-overflow-scrolling:touch] px-1",children:v.map(L=>{const E=b===L;return i.jsx("button",{onClick:()=>x(L),className:`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider border whitespace-nowrap active:scale-95 transition-all cursor-pointer ${E?"border-blue-brand/50 text-blue-400 bg-blue-brand/10 shadow-[0_0_8px_rgba(37,99,235,0.2)] font-black":"border-white/5 bg-white/[0.01] text-slate-400 hover:text-white"}`,children:L},L)})})]}),T.length===0?i.jsxs("div",{className:"text-center py-16 bg-[#050a14]/30 border border-white/5 rounded-3xl p-6",children:[i.jsx(rn,{className:"w-12 h-12 mx-auto mb-4 text-slate-600"}),i.jsx("p",{className:"text-sm text-slate-400 font-bold uppercase tracking-wide",children:"No se encontraron gladiadores"}),i.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Prueba con otro término de búsqueda o cambia la categoría de filtro."})]}):i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4",children:T.map(L=>{const E=(s==null?void 0:s.id)===L.id,V=S(L.id,(L.savedMutants||[]).length),K=(m==null?void 0:m.id)===L.id;return i.jsxs(Qe.div,{layout:!0,whileHover:{y:-3},className:`p-4 sm:p-5 rounded-2xl sm:rounded-[2rem] bg-gradient-to-b from-[#0a1224] to-[#040812] border transition-all relative overflow-hidden flex flex-col justify-between group ${K?"border-blue-brand/50 ring-1 ring-blue-brand/40 shadow-xl":"border-white/10 hover:border-white/20"}`,children:[E&&i.jsx("div",{className:"absolute top-0 right-0 py-1.5 px-3 rounded-bl-2xl bg-blue-500/10 border-l border-b border-blue-500/20 text-[8px] font-black uppercase tracking-widest text-blue-400",children:"¡Eres Tú!"}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-start gap-3 sm:gap-4",children:[i.jsxs("div",{className:"relative w-11 h-11 sm:w-14 sm:h-14 shrink-0",children:[i.jsx("div",{className:"w-full h-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-[#0d162d]",children:i.jsx("img",{src:L.avatarUrl,alt:L.publicName,className:"w-full h-full object-cover"})}),i.jsx("div",{className:"absolute -bottom-1 -right-1 w-5 h-5 rounded-md bg-gradient-to-br from-blue-brand to-blue-brand-2 border border-white/10 flex items-center justify-center text-white text-[9px]",children:i.jsx(Zu,{size:10,className:"animate-pulse"})})]}),i.jsxs("div",{className:"min-w-0 flex-1 select-text",children:[i.jsx("h3",{className:"font-extrabold text-white text-sm truncate leading-none mb-1 group-hover:text-blue-400 transition-colors",children:L.publicName}),i.jsxs("span",{className:"text-[10px] text-slate-500 font-mono block",children:["@",L.username]}),i.jsx("div",{className:"mt-2.5",children:i.jsx("span",{className:`text-[8px] font-black tracking-widest uppercase px-2 py-0.5 rounded-md border ${G(L.status)}`,children:L.status})})]})]}),i.jsxs("p",{className:"text-xs text-slate-400 line-clamp-2 leading-relaxed italic pr-2",children:['"',L.bio||"¡Nacido para la arena de gladiadores!",'"']})]}),i.jsxs("div",{className:"mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-white/5 flex items-center justify-between",children:[i.jsxs("div",{className:"flex gap-4",children:[i.jsxs("div",{className:"flex items-center gap-1.5",title:"Comentarios publicados",children:[i.jsx(Is,{size:12,className:"text-slate-500"}),i.jsx("span",{className:"text-xs font-bold text-white font-mono",children:V.comments})]}),i.jsxs("div",{className:"flex items-center gap-1.5",title:"Mutantes guardados",children:[i.jsx(oa,{size:12,className:"text-slate-500"}),i.jsx("span",{className:"text-xs font-bold text-white font-mono",children:V.saved})]})]}),i.jsxs("button",{onClick:()=>f(L),className:"flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors cursor-pointer",children:[i.jsx("span",{children:"Ver Perfil"}),i.jsx(qr,{size:12})]})]})]},L.id)})})]}),i.jsx("div",{className:"sticky top-20 hidden lg:block",children:i.jsx(ia,{mode:"wait",children:m?i.jsxs(Qe.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},className:"p-6 rounded-[2rem] bg-gradient-to-b from-[#0a1224] to-[#040812] border border-white/10 text-center relative overflow-hidden shadow-2xl",children:[i.jsx("div",{className:"absolute top-4 right-4 z-10",children:i.jsx("button",{onClick:()=>f(null),className:"w-7 h-7 bg-white/5 rounded-lg border border-white/10 text-slate-400 hover:text-white flex items-center justify-center text-xs active:scale-90",children:"✕"})}),i.jsx("div",{className:`absolute top-0 inset-x-0 mx-auto w-24 h-24 rounded-full blur-3xl ${d==="blue"?"bg-blue-500/15":"bg-red-500/15"} pointer-events-none`}),i.jsx("div",{className:"relative w-24 h-24 mx-auto mb-4",children:i.jsx("div",{className:"w-full h-full rounded-[1.5rem] overflow-hidden border-2 border-white/10 bg-[#0d162d] shadow-xl",children:i.jsx("img",{src:m.avatarUrl,alt:"",className:"w-full h-full object-cover"})})}),i.jsx("h2",{className:"text-base font-black text-white uppercase tracking-wider mb-0.5",children:m.publicName}),i.jsxs("span",{className:"text-xs text-slate-500 font-mono block mb-3",children:["@",m.username]}),i.jsx("div",{className:"inline-block mb-4",children:i.jsx("span",{className:`text-[8px] font-black uppercase px-2.5 py-1 rounded-full border tracking-widest ${G(m.status)}`,children:m.status})}),i.jsxs("p",{className:"text-xs text-slate-400 italic bg-white/[0.01] border border-white/5 py-4 px-4 rounded-xl leading-relaxed max-w-xs mx-auto",children:['"',m.bio||"Sin biografía escrita todavía.",'"']}),i.jsxs("div",{className:"grid grid-cols-3 gap-2 mt-6 pt-5 border-t border-white/5",children:[i.jsxs("div",{className:"p-2 bg-white/[0.02] border border-white/5 rounded-2xl text-left",children:[i.jsx("span",{className:"text-[7.5px] text-slate-500 font-black uppercase tracking-wider block mb-1 truncate",children:"Chats"}),i.jsxs("div",{className:"flex items-center gap-1.5 text-white",children:[i.jsx(Is,{size:12,className:y.text}),i.jsx("strong",{className:"text-xs font-black font-mono",children:S(m.id).comments})]})]}),i.jsxs("div",{className:"p-2 bg-white/[0.02] border border-white/5 rounded-2xl text-left",children:[i.jsx("span",{className:"text-[7.5px] text-slate-500 font-black uppercase tracking-wider block mb-1 truncate",children:"Guardados"}),i.jsxs("div",{className:"flex items-center gap-1.5 text-white",children:[i.jsx(oa,{size:12,className:y.text}),i.jsx("strong",{className:"text-xs font-black font-mono",children:(m.savedMutants||[]).length})]})]}),i.jsxs("div",{className:"p-2 bg-white/[0.02] border border-white/5 rounded-2xl text-left",children:[i.jsx("span",{className:"text-[7.5px] text-slate-500 font-black uppercase tracking-wider block mb-1 truncate",children:"Ingreso"}),i.jsxs("div",{className:"flex items-center gap-1.5 text-white",children:[i.jsx(Cr,{size:12,className:y.text}),i.jsx("strong",{className:"text-[8.5px] font-black font-mono leading-none truncate",children:m.createdAt?new Date(m.createdAt).getFullYear():"2026"})]})]})]}),i.jsx("div",{className:"mt-5 text-left bg-blue-500/5 border border-blue-500/10 p-3 rounded-xl text-[10px] text-slate-400 leading-relaxed font-medium",children:i.jsxs("div",{className:"flex items-start gap-2",children:[i.jsx(Zr,{size:12,className:"text-blue-400 shrink-0 mt-0.5"}),i.jsxs("span",{children:["Se unió a Mutodex el ",i.jsx("strong",{children:N(m.createdAt)})," de forma segura."]})]})})]},m.id):i.jsxs("div",{className:"p-6 rounded-[2rem] bg-gradient-to-b from-[#0a1224]/30 to-black/30 border border-white/5 text-center py-16 text-slate-550 flex flex-col justify-center items-center min-h-[300px]",children:[i.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-500 mb-4 border border-white/15",children:i.jsx(Ia,{size:20,className:"opacity-60"})}),i.jsx("strong",{className:"text-xs font-black uppercase text-white tracking-wider mb-1",children:"Visualizador de Perfiles"}),i.jsxs("p",{className:"text-[11px] text-slate-500 max-w-[200px] leading-relaxed mx-auto",children:["Haz clic en ",i.jsx("span",{className:"text-blue-400 font-bold",children:"Ver Perfil"})," de cualquier jugador para cargar sus estadísticas detalladas aquí."]})]})})})]}),i.jsx("div",{className:"lg:hidden",children:i.jsx(ia,{children:m&&i.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[i.jsx(Qe.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>f(null),className:"absolute inset-0 bg-black/85 backdrop-blur-sm cursor-pointer"}),i.jsxs(Qe.div,{initial:{opacity:0,scale:.95,y:30},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:30},transition:{type:"spring",damping:25,stiffness:350},className:"w-full max-w-sm rounded-[2.5rem] bg-gradient-to-b from-[#0a1224] to-[#040812] border border-white/15 p-6 text-center relative overflow-hidden shadow-2xl z-10",children:[i.jsx("div",{className:"absolute top-4 right-4 z-10",children:i.jsx("button",{onClick:()=>f(null),className:"w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 active:scale-95 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center text-xs cursor-pointer",children:"✕"})}),i.jsx("div",{className:`absolute top-0 inset-x-0 mx-auto w-24 h-24 rounded-full blur-3xl ${d==="blue"?"bg-blue-500/20":"bg-red-500/20"} pointer-events-none`}),i.jsxs("div",{className:"relative w-20 h-20 mx-auto mb-4",children:[i.jsx("div",{className:"w-full h-full rounded-[1.25rem] overflow-hidden border-2 border-white/10 bg-[#0d162d] shadow-xl",children:i.jsx("img",{src:m.avatarUrl,alt:"",className:"w-full h-full object-cover"})}),i.jsx("div",{className:"absolute -bottom-1 -right-1 w-5 h-5 rounded-md bg-gradient-to-br from-blue-brand to-blue-brand-2 border border-white/10 flex items-center justify-center text-white text-[9px]",children:i.jsx(Zu,{size:10,className:"animate-pulse"})})]}),i.jsx("h2",{className:"text-base font-black text-white uppercase tracking-wider mb-0.5",children:m.publicName}),i.jsxs("span",{className:"text-xs text-slate-500 font-mono block mb-3",children:["@",m.username]}),i.jsx("div",{className:"inline-block mb-4",children:i.jsx("span",{className:`text-[8px] font-black uppercase px-2.5 py-1 rounded-full border tracking-widest ${G(m.status)}`,children:m.status})}),i.jsxs("p",{className:"text-xs text-slate-400 italic bg-white/[0.01] border border-white/5 py-3 px-4 rounded-xl leading-relaxed max-w-xs mx-auto",children:['"',m.bio||"Sin biografía escrita todavía.",'"']}),i.jsxs("div",{className:"grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-white/5",children:[i.jsxs("div",{className:"p-2 bg-white/[0.012] border border-white/5 rounded-2xl text-left",children:[i.jsx("span",{className:"text-[7px] text-slate-500 font-black uppercase tracking-wider block mb-1 truncate",children:"Chats"}),i.jsxs("div",{className:"flex items-center gap-1 text-white",children:[i.jsx(Is,{size:11,className:y.text}),i.jsx("strong",{className:"text-xs font-black font-mono",children:S(m.id).comments})]})]}),i.jsxs("div",{className:"p-2 bg-white/[0.012] border border-white/5 rounded-2xl text-left",children:[i.jsx("span",{className:"text-[7px] text-slate-500 font-black uppercase tracking-wider block mb-1 truncate font-sans",children:"Guardados"}),i.jsxs("div",{className:"flex items-center gap-1 text-white",children:[i.jsx(oa,{size:11,className:y.text}),i.jsx("strong",{className:"text-xs font-black font-mono",children:(m.savedMutants||[]).length})]})]}),i.jsxs("div",{className:"p-2 bg-white/[0.012] border border-white/5 rounded-2xl text-left",children:[i.jsx("span",{className:"text-[7px] text-slate-500 font-black uppercase tracking-wider block mb-1 truncate",children:"Ingreso"}),i.jsxs("div",{className:"flex items-center gap-1 text-white",children:[i.jsx(Cr,{size:11,className:y.text}),i.jsx("strong",{className:"text-[8.5px] font-black font-mono leading-none truncate",children:m.createdAt?new Date(m.createdAt).getFullYear():"2026"})]})]})]}),i.jsx("div",{className:"mt-4 text-left bg-blue-500/5 border border-blue-500/10 p-3 rounded-xl text-[9px] text-slate-400 leading-relaxed font-semibold",children:i.jsxs("span",{className:"block font-sans",children:["Se unió a Mutodex el ",i.jsx("strong",{children:N(m.createdAt)})," de forma segura."]})})]})]})})}),i.jsx("div",{className:"pt-8 border-t border-white/10",children:i.jsx(ap,{pageId:"comunidad"})})]})}function dA(){const[n,s]=C.useState(window.location.hash.replace(/^#/,"")||"/"),[l,r]=C.useState(navigator.onLine);C.useEffect(()=>{const g=()=>{s(window.location.hash.replace(/^#/,"")||"/")},b=()=>r(!0),x=()=>r(!1);return window.addEventListener("hashchange",g),window.addEventListener("online",b),window.addEventListener("offline",x),()=>{window.removeEventListener("hashchange",g),window.removeEventListener("online",b),window.removeEventListener("offline",x)}},[]);const d=g=>{window.location.hash=g},p=()=>{switch(n.split("#")[0].split("?")[0]){case"/":return i.jsx(Kf,{});case"/novedades":return i.jsx(X3,{});case"/servicios":return i.jsx(Z3,{});case"/evo":return i.jsx($3,{});case"/otros":return i.jsx(W3,{});case"/guia":return i.jsx(eA,{});case"/tutoriales":return i.jsx(tA,{});case"/descargas":return i.jsx(nA,{});case"/terminos":return i.jsx(sA,{});case"/guia-script":return i.jsx(e1,{});case"/login":return i.jsx(iA,{});case"/perfil":return i.jsx(lA,{});case"/mis-mutantes":return i.jsx(cA,{});case"/comunidad":return i.jsx(uA,{});default:return i.jsx(Kf,{})}};return i.jsx(M3,{currentPath:n,onNavigate:d,isOnline:l,children:p()})}try{let s=window.fetch;try{Object.defineProperty(window,"fetch",{get(){return s},set(l){s=l},configurable:!0,enumerable:!0})}catch{try{Object.defineProperty(Window.prototype,"fetch",{get(){return s},set(r){s=r},configurable:!0,enumerable:!0})}catch{try{Object.defineProperty(Object.getPrototypeOf(window),"fetch",{get(){return s},set(d){s=d},configurable:!0,enumerable:!0})}catch(d){console.warn("Could not redefine window.fetch representation on any prototype level:",d)}}}}catch(n){console.warn("Could not redefine window.fetch representation:",n)}C2.createRoot(document.getElementById("root")).render(i.jsx(C.StrictMode,{children:i.jsx(y3,{children:i.jsx(G3,{children:i.jsx(dA,{})})})}));
