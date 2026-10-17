var IT=Object.create;var py=Object.defineProperty;var RT=Object.getOwnPropertyDescriptor;var DT=Object.getOwnPropertyNames;var PT=Object.getPrototypeOf,UT=Object.prototype.hasOwnProperty;var ti=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var OT=(t,e,n,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of DT(e))!UT.call(t,i)&&i!==n&&py(t,i,{get:()=>e[i],enumerable:!(a=RT(e,i))||a.enumerable});return t};var wi=(t,e,n)=>(n=t!=null?IT(PT(t)):{},OT(e||!t||!t.__esModule?py(n,"default",{value:t,enumerable:!0}):n,t));var Cy=ti(Xe=>{"use strict";/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp=Symbol.for("react.transitional.element"),NT=Symbol.for("react.portal"),BT=Symbol.for("react.fragment"),FT=Symbol.for("react.strict_mode"),kT=Symbol.for("react.profiler"),zT=Symbol.for("react.consumer"),HT=Symbol.for("react.context"),GT=Symbol.for("react.forward_ref"),VT=Symbol.for("react.suspense"),qT=Symbol.for("react.memo"),_y=Symbol.for("react.lazy"),my=Symbol.iterator;function WT(t){return t===null||typeof t!="object"?null:(t=my&&t[my]||t["@@iterator"],typeof t=="function"?t:null)}var Sy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},My=Object.assign,by={};function $r(t,e,n){this.props=t,this.context=e,this.refs=by,this.updater=n||Sy}$r.prototype.isReactComponent={};$r.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$r.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ty(){}Ty.prototype=$r.prototype;function bp(t,e,n){this.props=t,this.context=e,this.refs=by,this.updater=n||Sy}var Tp=bp.prototype=new Ty;Tp.constructor=bp;My(Tp,$r.prototype);Tp.isPureReactComponent=!0;var gy=Array.isArray,Ot={H:null,A:null,T:null,S:null,V:null},Ay=Object.prototype.hasOwnProperty;function Ap(t,e,n,a,i,s){return n=s.ref,{$$typeof:Mp,type:t,key:e,ref:n!==void 0?n:null,props:s}}function XT(t,e){return Ap(t.type,e,void 0,void 0,void 0,t.props)}function Cp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Mp}function YT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xy=/\/+/g;function Sp(t,e){return typeof t=="object"&&t!==null&&t.key!=null?YT(""+t.key):e.toString(36)}function yy(){}function ZT(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(yy,yy):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Qr(t,e,n,a,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case Mp:case NT:r=!0;break;case _y:return r=t._init,Qr(r(t._payload),e,n,a,i)}}if(r)return i=i(t),r=a===""?"."+Sp(t,0):a,gy(i)?(n="",r!=null&&(n=r.replace(xy,"$&/")+"/"),Qr(i,e,n,"",function(u){return u})):i!=null&&(Cp(i)&&(i=XT(i,n+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(xy,"$&/")+"/")+r)),e.push(i)),1;r=0;var l=a===""?".":a+":";if(gy(t))for(var o=0;o<t.length;o++)a=t[o],s=l+Sp(a,o),r+=Qr(a,e,n,s,i);else if(o=WT(t),typeof o=="function")for(t=o.call(t),o=0;!(a=t.next()).done;)a=a.value,s=l+Sp(a,o++),r+=Qr(a,e,n,s,i);else if(s==="object"){if(typeof t.then=="function")return Qr(ZT(t),e,n,a,i);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function Fc(t,e,n){if(t==null)return t;var a=[],i=0;return Qr(t,a,"","",function(s){return e.call(n,s,i++)}),a}function KT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vy=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function JT(){}Xe.Children={map:Fc,forEach:function(t,e,n){Fc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fc(t,function(){e++}),e},toArray:function(t){return Fc(t,function(e){return e})||[]},only:function(t){if(!Cp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=$r;Xe.Fragment=BT;Xe.Profiler=kT;Xe.PureComponent=bp;Xe.StrictMode=FT;Xe.Suspense=VT;Xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ot;Xe.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Ot.H.useMemoCache(t)}};Xe.cache=function(t){return function(){return t.apply(null,arguments)}};Xe.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var a=My({},t.props),i=t.key,s=void 0;if(e!=null)for(r in e.ref!==void 0&&(s=void 0),e.key!==void 0&&(i=""+e.key),e)!Ay.call(e,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&e.ref===void 0||(a[r]=e[r]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var l=Array(r),o=0;o<r;o++)l[o]=arguments[o+2];a.children=l}return Ap(t.type,i,void 0,void 0,s,a)};Xe.createContext=function(t){return t={$$typeof:HT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:zT,_context:t},t};Xe.createElement=function(t,e,n){var a,i={},s=null;if(e!=null)for(a in e.key!==void 0&&(s=""+e.key),e)Ay.call(e,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(i[a]=e[a]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var l=Array(r),o=0;o<r;o++)l[o]=arguments[o+2];i.children=l}if(t&&t.defaultProps)for(a in r=t.defaultProps,r)i[a]===void 0&&(i[a]=r[a]);return Ap(t,s,void 0,void 0,null,i)};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:GT,render:t}};Xe.isValidElement=Cp;Xe.lazy=function(t){return{$$typeof:_y,_payload:{_status:-1,_result:t},_init:KT}};Xe.memo=function(t,e){return{$$typeof:qT,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Ot.T,n={};Ot.T=n;try{var a=t(),i=Ot.S;i!==null&&i(n,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then(JT,vy)}catch(s){vy(s)}finally{Ot.T=e}};Xe.unstable_useCacheRefresh=function(){return Ot.H.useCacheRefresh()};Xe.use=function(t){return Ot.H.use(t)};Xe.useActionState=function(t,e,n){return Ot.H.useActionState(t,e,n)};Xe.useCallback=function(t,e){return Ot.H.useCallback(t,e)};Xe.useContext=function(t){return Ot.H.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t,e){return Ot.H.useDeferredValue(t,e)};Xe.useEffect=function(t,e,n){var a=Ot.H;if(typeof n=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return a.useEffect(t,e)};Xe.useId=function(){return Ot.H.useId()};Xe.useImperativeHandle=function(t,e,n){return Ot.H.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return Ot.H.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return Ot.H.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return Ot.H.useMemo(t,e)};Xe.useOptimistic=function(t,e){return Ot.H.useOptimistic(t,e)};Xe.useReducer=function(t,e,n){return Ot.H.useReducer(t,e,n)};Xe.useRef=function(t){return Ot.H.useRef(t)};Xe.useState=function(t){return Ot.H.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return Ot.H.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return Ot.H.useTransition()};Xe.version="19.1.0"});var or=ti((hD,Ly)=>{"use strict";Ly.exports=Cy()});var By=ti(Nt=>{"use strict";/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Ip(t,e){var n=t.length;t.push(e);e:for(;0<n;){var a=n-1>>>1,i=t[a];if(0<kc(i,e))t[a]=e,t[n]=i,n=a;else break e}}function ni(t){return t.length===0?null:t[0]}function Hc(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var a=0,i=t.length,s=i>>>1;a<s;){var r=2*(a+1)-1,l=t[r],o=r+1,u=t[o];if(0>kc(l,n))o<i&&0>kc(u,l)?(t[a]=u,t[o]=n,a=o):(t[a]=l,t[r]=n,a=r);else if(o<i&&0>kc(u,n))t[a]=u,t[o]=n,a=o;else break e}}return e}function kc(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}Nt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(wy=performance,Nt.unstable_now=function(){return wy.now()}):(Lp=Date,Ey=Lp.now(),Nt.unstable_now=function(){return Lp.now()-Ey});var wy,Lp,Ey,Ei=[],ds=[],jT=1,ba=null,wn=3,Rp=!1,Ul=!1,Ol=!1,Dp=!1,Dy=typeof setTimeout=="function"?setTimeout:null,Py=typeof clearTimeout=="function"?clearTimeout:null,Iy=typeof setImmediate<"u"?setImmediate:null;function zc(t){for(var e=ni(ds);e!==null;){if(e.callback===null)Hc(ds);else if(e.startTime<=t)Hc(ds),e.sortIndex=e.expirationTime,Ip(Ei,e);else break;e=ni(ds)}}function Pp(t){if(Ol=!1,zc(t),!Ul)if(ni(Ei)!==null)Ul=!0,to||(to=!0,eo());else{var e=ni(ds);e!==null&&Up(Pp,e.startTime-t)}}var to=!1,Nl=-1,Uy=5,Oy=-1;function Ny(){return Dp?!0:!(Nt.unstable_now()-Oy<Uy)}function wp(){if(Dp=!1,to){var t=Nt.unstable_now();Oy=t;var e=!0;try{e:{Ul=!1,Ol&&(Ol=!1,Py(Nl),Nl=-1),Rp=!0;var n=wn;try{t:{for(zc(t),ba=ni(Ei);ba!==null&&!(ba.expirationTime>t&&Ny());){var a=ba.callback;if(typeof a=="function"){ba.callback=null,wn=ba.priorityLevel;var i=a(ba.expirationTime<=t);if(t=Nt.unstable_now(),typeof i=="function"){ba.callback=i,zc(t),e=!0;break t}ba===ni(Ei)&&Hc(Ei),zc(t)}else Hc(Ei);ba=ni(Ei)}if(ba!==null)e=!0;else{var s=ni(ds);s!==null&&Up(Pp,s.startTime-t),e=!1}}break e}finally{ba=null,wn=n,Rp=!1}e=void 0}}finally{e?eo():to=!1}}}var eo;typeof Iy=="function"?eo=function(){Iy(wp)}:typeof MessageChannel<"u"?(Ep=new MessageChannel,Ry=Ep.port2,Ep.port1.onmessage=wp,eo=function(){Ry.postMessage(null)}):eo=function(){Dy(wp,0)};var Ep,Ry;function Up(t,e){Nl=Dy(function(){t(Nt.unstable_now())},e)}Nt.unstable_IdlePriority=5;Nt.unstable_ImmediatePriority=1;Nt.unstable_LowPriority=4;Nt.unstable_NormalPriority=3;Nt.unstable_Profiling=null;Nt.unstable_UserBlockingPriority=2;Nt.unstable_cancelCallback=function(t){t.callback=null};Nt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Uy=0<t?Math.floor(1e3/t):5};Nt.unstable_getCurrentPriorityLevel=function(){return wn};Nt.unstable_next=function(t){switch(wn){case 1:case 2:case 3:var e=3;break;default:e=wn}var n=wn;wn=e;try{return t()}finally{wn=n}};Nt.unstable_requestPaint=function(){Dp=!0};Nt.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=wn;wn=t;try{return e()}finally{wn=n}};Nt.unstable_scheduleCallback=function(t,e,n){var a=Nt.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?a+n:a):n=a,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=n+i,t={id:jT++,callback:e,priorityLevel:t,startTime:n,expirationTime:i,sortIndex:-1},n>a?(t.sortIndex=n,Ip(ds,t),ni(Ei)===null&&t===ni(ds)&&(Ol?(Py(Nl),Nl=-1):Ol=!0,Up(Pp,n-a))):(t.sortIndex=i,Ip(Ei,t),Ul||Rp||(Ul=!0,to||(to=!0,eo()))),t};Nt.unstable_shouldYield=Ny;Nt.unstable_wrapCallback=function(t){var e=wn;return function(){var n=wn;wn=e;try{return t.apply(this,arguments)}finally{wn=n}}}});var ky=ti((mD,Fy)=>{"use strict";Fy.exports=By()});var Hy=ti(Nn=>{"use strict";/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QT=or();function zy(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function hs(){}var On={d:{f:hs,r:function(){throw Error(zy(522))},D:hs,C:hs,L:hs,m:hs,X:hs,S:hs,M:hs},p:0,findDOMNode:null},$T=Symbol.for("react.portal");function eA(t,e,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$T,key:a==null?null:""+a,children:t,containerInfo:e,implementation:n}}var Bl=QT.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Gc(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=On;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(zy(299));return eA(t,e,null,n)};Nn.flushSync=function(t){var e=Bl.T,n=On.p;try{if(Bl.T=null,On.p=2,t)return t()}finally{Bl.T=e,On.p=n,On.d.f()}};Nn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,On.d.C(t,e))};Nn.prefetchDNS=function(t){typeof t=="string"&&On.d.D(t)};Nn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,a=Gc(n,e.crossOrigin),i=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?On.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:a,integrity:i,fetchPriority:s}):n==="script"&&On.d.X(t,{crossOrigin:a,integrity:i,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Nn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=Gc(e.as,e.crossOrigin);On.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&On.d.M(t)};Nn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,a=Gc(n,e.crossOrigin);On.d.L(t,n,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Nn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=Gc(e.as,e.crossOrigin);On.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else On.d.m(t)};Nn.requestFormReset=function(t){On.d.r(t)};Nn.unstable_batchedUpdates=function(t,e){return t(e)};Nn.useFormState=function(t,e,n){return Bl.H.useFormState(t,e,n)};Nn.useFormStatus=function(){return Bl.H.useHostTransitionStatus()};Nn.version="19.1.0"});var qy=ti((xD,Vy)=>{"use strict";function Gy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gy)}catch(t){console.error(t)}}Gy(),Vy.exports=Hy()});var XM=ti(fd=>{"use strict";/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var on=ky(),d_=or(),tA=qy();function j(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tu(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function p_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wy(t){if(Tu(t)!==t)throw Error(j(188))}function nA(t){var e=t.alternate;if(!e){if(e=Tu(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,a=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Wy(i),t;if(s===a)return Wy(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==a.return)n=i,a=s;else{for(var r=!1,l=i.child;l;){if(l===n){r=!0,n=i,a=s;break}if(l===a){r=!0,a=i,n=s;break}l=l.sibling}if(!r){for(l=s.child;l;){if(l===n){r=!0,n=s,a=i;break}if(l===a){r=!0,a=s,n=i;break}l=l.sibling}if(!r)throw Error(j(189))}}if(n.alternate!==a)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function m_(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=m_(t),e!==null)return e;t=t.sibling}return null}var Ut=Object.assign,aA=Symbol.for("react.element"),Vc=Symbol.for("react.transitional.element"),Xl=Symbol.for("react.portal"),lo=Symbol.for("react.fragment"),g_=Symbol.for("react.strict_mode"),dm=Symbol.for("react.profiler"),iA=Symbol.for("react.provider"),x_=Symbol.for("react.consumer"),Ui=Symbol.for("react.context"),og=Symbol.for("react.forward_ref"),hm=Symbol.for("react.suspense"),pm=Symbol.for("react.suspense_list"),lg=Symbol.for("react.memo"),gs=Symbol.for("react.lazy");Symbol.for("react.scope");var mm=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var sA=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var Xy=Symbol.iterator;function Fl(t){return t===null||typeof t!="object"?null:(t=Xy&&t[Xy]||t["@@iterator"],typeof t=="function"?t:null)}var rA=Symbol.for("react.client.reference");function gm(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===rA?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case lo:return"Fragment";case dm:return"Profiler";case g_:return"StrictMode";case hm:return"Suspense";case pm:return"SuspenseList";case mm:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Xl:return"Portal";case Ui:return(t.displayName||"Context")+".Provider";case x_:return(t._context.displayName||"Context")+".Consumer";case og:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lg:return e=t.displayName||null,e!==null?e:gm(t.type)||"Memo";case gs:e=t._payload,t=t._init;try{return gm(t(e))}catch{}}return null}var Yl=Array.isArray,Ue=d_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ut=tA.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dr={pending:!1,data:null,method:null,action:null},xm=[],uo=-1;function ui(t){return{current:t}}function xn(t){0>uo||(t.current=xm[uo],xm[uo]=null,uo--)}function Ft(t,e){uo++,xm[uo]=t.current,t.current=e}var ri=ui(null),cu=ui(null),Cs=ui(null),_f=ui(null);function Sf(t,e){switch(Ft(Cs,e),Ft(cu,t),Ft(ri,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Qv(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Qv(e),t=UM(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}xn(ri),Ft(ri,t)}function Eo(){xn(ri),xn(cu),xn(Cs)}function ym(t){t.memoizedState!==null&&Ft(_f,t);var e=ri.current,n=UM(e,t.type);e!==n&&(Ft(cu,t),Ft(ri,n))}function Mf(t){cu.current===t&&(xn(ri),xn(cu)),_f.current===t&&(xn(_f),_u._currentValue=dr)}var vm=Object.prototype.hasOwnProperty,ug=on.unstable_scheduleCallback,Op=on.unstable_cancelCallback,oA=on.unstable_shouldYield,lA=on.unstable_requestPaint,oi=on.unstable_now,uA=on.unstable_getCurrentPriorityLevel,y_=on.unstable_ImmediatePriority,v_=on.unstable_UserBlockingPriority,bf=on.unstable_NormalPriority,cA=on.unstable_LowPriority,__=on.unstable_IdlePriority,fA=on.log,dA=on.unstable_setDisableYieldValue,Au=null,la=null;function Ms(t){if(typeof fA=="function"&&dA(t),la&&typeof la.setStrictMode=="function")try{la.setStrictMode(Au,t)}catch{}}var ua=Math.clz32?Math.clz32:mA,hA=Math.log,pA=Math.LN2;function mA(t){return t>>>=0,t===0?32:31-(hA(t)/pA|0)|0}var qc=256,Wc=4194304;function ur(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Jf(t,e,n){var a=t.pendingLanes;if(a===0)return 0;var i=0,s=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var l=a&134217727;return l!==0?(a=l&~s,a!==0?i=ur(a):(r&=l,r!==0?i=ur(r):n||(n=l&~t,n!==0&&(i=ur(n))))):(l=a&~s,l!==0?i=ur(l):r!==0?i=ur(r):n||(n=a&~t,n!==0&&(i=ur(n)))),i===0?0:e!==0&&e!==i&&(e&s)===0&&(s=i&-i,n=e&-e,s>=n||s===32&&(n&4194048)!==0)?e:i}function Cu(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function gA(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function S_(){var t=qc;return qc<<=1,(qc&4194048)===0&&(qc=256),t}function M_(){var t=Wc;return Wc<<=1,(Wc&62914560)===0&&(Wc=4194304),t}function Np(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Lu(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xA(t,e,n,a,i,s){var r=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var l=t.entanglements,o=t.expirationTimes,u=t.hiddenUpdates;for(n=r&~n;0<n;){var c=31-ua(n),d=1<<c;l[c]=0,o[c]=-1;var f=u[c];if(f!==null)for(u[c]=null,c=0;c<f.length;c++){var h=f[c];h!==null&&(h.lane&=-536870913)}n&=~d}a!==0&&b_(t,a,0),s!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=s&~(r&~e))}function b_(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-ua(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|n&4194090}function T_(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var a=31-ua(n),i=1<<a;i&e|t[a]&e&&(t[a]|=e),n&=~i}}function cg(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function fg(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function A_(){var t=ut.p;return t!==0?t:(t=window.event,t===void 0?32:qM(t.type))}function yA(t,e){var n=ut.p;try{return ut.p=t,e()}finally{ut.p=n}}var Bs=Math.random().toString(36).slice(2),En="__reactFiber$"+Bs,Kn="__reactProps$"+Bs,zo="__reactContainer$"+Bs,_m="__reactEvents$"+Bs,vA="__reactListeners$"+Bs,_A="__reactHandles$"+Bs,Yy="__reactResources$"+Bs,wu="__reactMarker$"+Bs;function dg(t){delete t[En],delete t[Kn],delete t[_m],delete t[vA],delete t[_A]}function co(t){var e=t[En];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zo]||n[En]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=t_(t);t!==null;){if(n=t[En])return n;t=t_(t)}return e}t=n,n=t.parentNode}return null}function Ho(t){if(t=t[En]||t[zo]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Zl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(j(33))}function So(t){var e=t[Yy];return e||(e=t[Yy]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function mn(t){t[wu]=!0}var C_=new Set,L_={};function br(t,e){Io(t,e),Io(t+"Capture",e)}function Io(t,e){for(L_[t]=e,t=0;t<e.length;t++)C_.add(e[t])}var SA=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zy={},Ky={};function MA(t){return vm.call(Ky,t)?!0:vm.call(Zy,t)?!1:SA.test(t)?Ky[t]=!0:(Zy[t]=!0,!1)}function of(t,e,n){if(MA(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Xc(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Ii(t,e,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+a)}}var Bp,Jy;function so(t){if(Bp===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bp=e&&e[1]||"",Jy=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bp+t+Jy}var Fp=!1;function kp(t,e){if(!t||Fp)return"";Fp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(h){var f=h}Reflect.construct(t,[],d)}else{try{d.call()}catch(h){f=h}t.call(d.prototype)}}else{try{throw Error()}catch(h){f=h}(d=t())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(h){if(h&&f&&typeof h.stack=="string")return[h.stack,f.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),r=s[0],l=s[1];if(r&&l){var o=r.split(`
`),u=l.split(`
`);for(i=a=0;a<o.length&&!o[a].includes("DetermineComponentFrameRoot");)a++;for(;i<u.length&&!u[i].includes("DetermineComponentFrameRoot");)i++;if(a===o.length||i===u.length)for(a=o.length-1,i=u.length-1;1<=a&&0<=i&&o[a]!==u[i];)i--;for(;1<=a&&0<=i;a--,i--)if(o[a]!==u[i]){if(a!==1||i!==1)do if(a--,i--,0>i||o[a]!==u[i]){var c=`
`+o[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=i);break}}}finally{Fp=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?so(n):""}function bA(t){switch(t.tag){case 26:case 27:case 5:return so(t.type);case 16:return so("Lazy");case 13:return so("Suspense");case 19:return so("SuspenseList");case 0:case 15:return kp(t.type,!1);case 11:return kp(t.type.render,!1);case 1:return kp(t.type,!0);case 31:return so("Activity");default:return""}}function jy(t){try{var e="";do e+=bA(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Aa(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function w_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function TA(t){var e=w_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(r){a=""+r,s.call(this,r)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Tf(t){t._valueTracker||(t._valueTracker=TA(t))}function E_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),a="";return t&&(a=w_(t)?t.checked?"true":"false":t.value),t=a,t!==n?(e.setValue(t),!0):!1}function Af(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var AA=/[\n"\\]/g;function wa(t){return t.replace(AA,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Sm(t,e,n,a,i,s,r,l){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Aa(e)):t.value!==""+Aa(e)&&(t.value=""+Aa(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?Mm(t,r,Aa(e)):n!=null?Mm(t,r,Aa(n)):a!=null&&t.removeAttribute("value"),i==null&&s!=null&&(t.defaultChecked=!!s),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?t.name=""+Aa(l):t.removeAttribute("name")}function I_(t,e,n,a,i,s,r,l){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||e!=null))return;n=n!=null?""+Aa(n):"",e=e!=null?""+Aa(e):n,l||e===t.value||(t.value=e),t.defaultValue=e}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=l?t.checked:!!a,t.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r)}function Mm(t,e,n){e==="number"&&Af(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Mo(t,e,n,a){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&a&&(t[n].defaultSelected=!0)}else{for(n=""+Aa(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,a&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function R_(t,e,n){if(e!=null&&(e=""+Aa(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Aa(n):""}function D_(t,e,n,a){if(e==null){if(a!=null){if(n!=null)throw Error(j(92));if(Yl(a)){if(1<a.length)throw Error(j(93));a=a[0]}n=a}n==null&&(n=""),e=n}n=Aa(e),t.defaultValue=n,a=t.textContent,a===n&&a!==""&&a!==null&&(t.value=a)}function Ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var CA=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qy(t,e,n){var a=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,n):typeof n!="number"||n===0||CA.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function P_(t,e,n){if(e!=null&&typeof e!="object")throw Error(j(62));if(t=t.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var i in e)a=e[i],e.hasOwnProperty(i)&&n[i]!==a&&Qy(t,i,a)}else for(var s in e)e.hasOwnProperty(s)&&Qy(t,s,e[s])}function hg(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var LA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function lf(t){return wA.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var bm=null;function pg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fo=null,bo=null;function $y(t){var e=Ho(t);if(e&&(t=e.stateNode)){var n=t[Kn]||null;e:switch(t=e.stateNode,e.type){case"input":if(Sm(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+wa(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var a=n[e];if(a!==t&&a.form===t.form){var i=a[Kn]||null;if(!i)throw Error(j(90));Sm(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<n.length;e++)a=n[e],a.form===t.form&&E_(a)}break e;case"textarea":R_(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&Mo(t,!!n.multiple,e,!1)}}}var zp=!1;function U_(t,e,n){if(zp)return t(e,n);zp=!0;try{var a=t(e);return a}finally{if(zp=!1,(fo!==null||bo!==null)&&(rd(),fo&&(e=fo,t=bo,bo=fo=null,$y(e),t)))for(e=0;e<t.length;e++)$y(t[e])}}function fu(t,e){var n=t.stateNode;if(n===null)return null;var a=n[Kn]||null;if(a===null)return null;n=a[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tm=!1;if(Hi)try{no={},Object.defineProperty(no,"passive",{get:function(){Tm=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{Tm=!1}var no,bs=null,mg=null,uf=null;function O_(){if(uf)return uf;var t,e=mg,n=e.length,a,i="value"in bs?bs.value:bs.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var r=n-t;for(a=1;a<=r&&e[n-a]===i[s-a];a++);return uf=i.slice(t,1<a?1-a:void 0)}function cf(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Yc(){return!0}function ev(){return!1}function Jn(t){function e(n,a,i,s,r){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Yc:ev,this.isPropagationStopped=ev,this}return Ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yc)},persist:function(){},isPersistent:Yc}),e}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jf=Jn(Tr),Eu=Ut({},Tr,{view:0,detail:0}),EA=Jn(Eu),Hp,Gp,kl,Qf=Ut({},Eu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==kl&&(kl&&t.type==="mousemove"?(Hp=t.screenX-kl.screenX,Gp=t.screenY-kl.screenY):Gp=Hp=0,kl=t),Hp)},movementY:function(t){return"movementY"in t?t.movementY:Gp}}),tv=Jn(Qf),IA=Ut({},Qf,{dataTransfer:0}),RA=Jn(IA),DA=Ut({},Eu,{relatedTarget:0}),Vp=Jn(DA),PA=Ut({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),UA=Jn(PA),OA=Ut({},Tr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NA=Jn(OA),BA=Ut({},Tr,{data:0}),nv=Jn(BA),FA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=zA[t])?!!e[t]:!1}function gg(){return HA}var GA=Ut({},Eu,{key:function(t){if(t.key){var e=FA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cf(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gg,charCode:function(t){return t.type==="keypress"?cf(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cf(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),VA=Jn(GA),qA=Ut({},Qf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),av=Jn(qA),WA=Ut({},Eu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gg}),XA=Jn(WA),YA=Ut({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZA=Jn(YA),KA=Ut({},Qf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),JA=Jn(KA),jA=Ut({},Tr,{newState:0,oldState:0}),QA=Jn(jA),$A=[9,13,27,32],xg=Hi&&"CompositionEvent"in window,Jl=null;Hi&&"documentMode"in document&&(Jl=document.documentMode);var eC=Hi&&"TextEvent"in window&&!Jl,N_=Hi&&(!xg||Jl&&8<Jl&&11>=Jl),iv=" ",sv=!1;function B_(t,e){switch(t){case"keyup":return $A.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function F_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ho=!1;function tC(t,e){switch(t){case"compositionend":return F_(e);case"keypress":return e.which!==32?null:(sv=!0,iv);case"textInput":return t=e.data,t===iv&&sv?null:t;default:return null}}function nC(t,e){if(ho)return t==="compositionend"||!xg&&B_(t,e)?(t=O_(),uf=mg=bs=null,ho=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return N_&&e.locale!=="ko"?null:e.data;default:return null}}var aC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!aC[t.type]:e==="textarea"}function k_(t,e,n,a){fo?bo?bo.push(a):bo=[a]:fo=a,e=Vf(e,"onChange"),0<e.length&&(n=new jf("onChange","change",null,n,a),t.push({event:n,listeners:e}))}var jl=null,du=null;function iC(t){RM(t,0)}function $f(t){var e=Zl(t);if(E_(e))return t}function ov(t,e){if(t==="change")return e}var z_=!1;Hi&&(Hi?(Kc="oninput"in document,Kc||(qp=document.createElement("div"),qp.setAttribute("oninput","return;"),Kc=typeof qp.oninput=="function"),Zc=Kc):Zc=!1,z_=Zc&&(!document.documentMode||9<document.documentMode));var Zc,Kc,qp;function lv(){jl&&(jl.detachEvent("onpropertychange",H_),du=jl=null)}function H_(t){if(t.propertyName==="value"&&$f(du)){var e=[];k_(e,du,t,pg(t)),U_(iC,e)}}function sC(t,e,n){t==="focusin"?(lv(),jl=e,du=n,jl.attachEvent("onpropertychange",H_)):t==="focusout"&&lv()}function rC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $f(du)}function oC(t,e){if(t==="click")return $f(e)}function lC(t,e){if(t==="input"||t==="change")return $f(e)}function uC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var da=typeof Object.is=="function"?Object.is:uC;function hu(t,e){if(da(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!vm.call(e,i)||!da(t[i],e[i]))return!1}return!0}function uv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cv(t,e){var n=uv(t);t=0;for(var a;n;){if(n.nodeType===3){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uv(n)}}function G_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?G_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function V_(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Af(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Af(t.document)}return e}function yg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var cC=Hi&&"documentMode"in document&&11>=document.documentMode,po=null,Am=null,Ql=null,Cm=!1;function fv(t,e,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cm||po==null||po!==Af(a)||(a=po,"selectionStart"in a&&yg(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ql&&hu(Ql,a)||(Ql=a,a=Vf(Am,"onSelect"),0<a.length&&(e=new jf("onSelect","select",null,e,n),t.push({event:e,listeners:a}),e.target=po)))}function lr(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mo={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},Wp={},q_={};Hi&&(q_=document.createElement("div").style,"AnimationEvent"in window||(delete mo.animationend.animation,delete mo.animationiteration.animation,delete mo.animationstart.animation),"TransitionEvent"in window||delete mo.transitionend.transition);function Ar(t){if(Wp[t])return Wp[t];if(!mo[t])return t;var e=mo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in q_)return Wp[t]=e[n];return t}var W_=Ar("animationend"),X_=Ar("animationiteration"),Y_=Ar("animationstart"),fC=Ar("transitionrun"),dC=Ar("transitionstart"),hC=Ar("transitioncancel"),Z_=Ar("transitionend"),K_=new Map,Lm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lm.push("scrollEnd");function Ga(t,e){K_.set(t,e),br(e,[t])}var dv=new WeakMap;function Ea(t,e){if(typeof t=="object"&&t!==null){var n=dv.get(t);return n!==void 0?n:(e={value:t,source:e,stack:jy(e)},dv.set(t,e),e)}return{value:t,source:e,stack:jy(e)}}var Ta=[],go=0,vg=0;function ed(){for(var t=go,e=vg=go=0;e<t;){var n=Ta[e];Ta[e++]=null;var a=Ta[e];Ta[e++]=null;var i=Ta[e];Ta[e++]=null;var s=Ta[e];if(Ta[e++]=null,a!==null&&i!==null){var r=a.pending;r===null?i.next=i:(i.next=r.next,r.next=i),a.pending=i}s!==0&&J_(n,i,s)}}function td(t,e,n,a){Ta[go++]=t,Ta[go++]=e,Ta[go++]=n,Ta[go++]=a,vg|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function _g(t,e,n,a){return td(t,e,n,a),Cf(t)}function Go(t,e){return td(t,null,null,e),Cf(t)}function J_(t,e,n){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n);for(var i=!1,s=t.return;s!==null;)s.childLanes|=n,a=s.alternate,a!==null&&(a.childLanes|=n),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(i=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,i&&e!==null&&(i=31-ua(n),t=s.hiddenUpdates,a=t[i],a===null?t[i]=[e]:a.push(e),e.lane=n|536870912),s):null}function Cf(t){if(50<lu)throw lu=0,Zm=null,Error(j(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var xo={};function pC(t,e,n,a){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oa(t,e,n,a){return new pC(t,e,n,a)}function Sg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ki(t,e){var n=t.alternate;return n===null?(n=oa(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function j_(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ff(t,e,n,a,i,s){var r=0;if(a=t,typeof t=="function")Sg(t)&&(r=1);else if(typeof t=="string")r=pL(t,n,ri.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case mm:return t=oa(31,n,e,i),t.elementType=mm,t.lanes=s,t;case lo:return hr(n.children,i,s,e);case g_:r=8,i|=24;break;case dm:return t=oa(12,n,e,i|2),t.elementType=dm,t.lanes=s,t;case hm:return t=oa(13,n,e,i),t.elementType=hm,t.lanes=s,t;case pm:return t=oa(19,n,e,i),t.elementType=pm,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case iA:case Ui:r=10;break e;case x_:r=9;break e;case og:r=11;break e;case lg:r=14;break e;case gs:r=16,a=null;break e}r=29,n=Error(j(130,t===null?"null":typeof t,"")),a=null}return e=oa(r,n,e,i),e.elementType=t,e.type=a,e.lanes=s,e}function hr(t,e,n,a){return t=oa(7,t,a,e),t.lanes=n,t}function Xp(t,e,n){return t=oa(6,t,null,e),t.lanes=n,t}function Yp(t,e,n){return e=oa(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var yo=[],vo=0,Lf=null,wf=0,Ca=[],La=0,pr=null,Oi=1,Ni="";function cr(t,e){yo[vo++]=wf,yo[vo++]=Lf,Lf=t,wf=e}function Q_(t,e,n){Ca[La++]=Oi,Ca[La++]=Ni,Ca[La++]=pr,pr=t;var a=Oi;t=Ni;var i=32-ua(a)-1;a&=~(1<<i),n+=1;var s=32-ua(e)+i;if(30<s){var r=i-i%5;s=(a&(1<<r)-1).toString(32),a>>=r,i-=r,Oi=1<<32-ua(e)+i|n<<i|a,Ni=s+t}else Oi=1<<s|n<<i|a,Ni=t}function Mg(t){t.return!==null&&(cr(t,1),Q_(t,1,0))}function bg(t){for(;t===Lf;)Lf=yo[--vo],yo[vo]=null,wf=yo[--vo],yo[vo]=null;for(;t===pr;)pr=Ca[--La],Ca[La]=null,Ni=Ca[--La],Ca[La]=null,Oi=Ca[--La],Ca[La]=null}var Bn=null,Vt=null,lt=!1,mr=null,ii=!1,wm=Error(j(519));function vr(t){var e=Error(j(418,""));throw pu(Ea(e,t)),wm}function hv(t){var e=t.stateNode,n=t.type,a=t.memoizedProps;switch(e[En]=t,e[Kn]=a,n){case"dialog":Qe("cancel",e),Qe("close",e);break;case"iframe":case"object":case"embed":Qe("load",e);break;case"video":case"audio":for(n=0;n<xu.length;n++)Qe(xu[n],e);break;case"source":Qe("error",e);break;case"img":case"image":case"link":Qe("error",e),Qe("load",e);break;case"details":Qe("toggle",e);break;case"input":Qe("invalid",e),I_(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Tf(e);break;case"select":Qe("invalid",e);break;case"textarea":Qe("invalid",e),D_(e,a.value,a.defaultValue,a.children),Tf(e)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||a.suppressHydrationWarning===!0||PM(e.textContent,n)?(a.popover!=null&&(Qe("beforetoggle",e),Qe("toggle",e)),a.onScroll!=null&&Qe("scroll",e),a.onScrollEnd!=null&&Qe("scrollend",e),a.onClick!=null&&(e.onclick=ud),e=!0):e=!1,e||vr(t)}function pv(t){for(Bn=t.return;Bn;)switch(Bn.tag){case 5:case 13:ii=!1;return;case 27:case 3:ii=!0;return;default:Bn=Bn.return}}function zl(t){if(t!==Bn)return!1;if(!lt)return pv(t),lt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||eg(t.type,t.memoizedProps)),n=!n),n&&Vt&&vr(t),pv(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){Vt=Ha(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}Vt=null}}else e===27?(e=Vt,Fs(t.type)?(t=ag,ag=null,Vt=t):Vt=e):Vt=Bn?Ha(t.stateNode.nextSibling):null;return!0}function Iu(){Vt=Bn=null,lt=!1}function mv(){var t=mr;return t!==null&&(Zn===null?Zn=t:Zn.push.apply(Zn,t),mr=null),t}function pu(t){mr===null?mr=[t]:mr.push(t)}var Em=ui(null),Cr=null,Bi=null;function ys(t,e,n){Ft(Em,e._currentValue),e._currentValue=n}function zi(t){t._currentValue=Em.current,xn(Em)}function Im(t,e,n){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===n)break;t=t.return}}function Rm(t,e,n,a){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){var r=i.child;s=s.firstContext;e:for(;s!==null;){var l=s;s=i;for(var o=0;o<e.length;o++)if(l.context===e[o]){s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Im(s.return,n,t),a||(r=null);break e}s=l.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(j(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Im(r,n,t),r=null}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===t){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function Ru(t,e,n,a){t=null;for(var i=e,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(j(387));if(r=r.memoizedProps,r!==null){var l=i.type;da(i.pendingProps.value,r.value)||(t!==null?t.push(l):t=[l])}}else if(i===_f.current){if(r=i.alternate,r===null)throw Error(j(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(_u):t=[_u])}i=i.return}t!==null&&Rm(e,t,n,a),e.flags|=262144}function Ef(t){for(t=t.firstContext;t!==null;){if(!da(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function _r(t){Cr=t,Bi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function In(t){return $_(Cr,t)}function Jc(t,e){return Cr===null&&_r(t),$_(t,e)}function $_(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Bi===null){if(t===null)throw Error(j(308));Bi=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Bi=Bi.next=e;return n}var mC=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},gC=on.unstable_scheduleCallback,xC=on.unstable_NormalPriority,sn={$$typeof:Ui,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tg(){return{controller:new mC,data:new Map,refCount:0}}function Du(t){t.refCount--,t.refCount===0&&gC(xC,function(){t.controller.abort()})}var $l=null,Dm=0,Do=0,To=null;function yC(t,e){if($l===null){var n=$l=[];Dm=0,Do=Yg(),To={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Dm++,e.then(gv,gv),e}function gv(){if(--Dm===0&&$l!==null){To!==null&&(To.status="fulfilled");var t=$l;$l=null,Do=0,To=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function vC(t,e){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var i=0;i<n.length;i++)(0,n[i])(e)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var xv=Ue.S;Ue.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&yC(t,e),xv!==null&&xv(t,e)};var gr=ui(null);function Ag(){var t=gr.current;return t!==null?t:It.pooledCache}function df(t,e){e===null?Ft(gr,gr.current):Ft(gr,e.pool)}function eS(){var t=Ag();return t===null?null:{parent:sn._currentValue,pool:t}}var Pu=Error(j(460)),tS=Error(j(474)),nd=Error(j(542)),Pm={then:function(){}};function yv(t){return t=t.status,t==="fulfilled"||t==="rejected"}function jc(){}function nS(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(jc,jc),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,_v(t),t;default:if(typeof e.status=="string")e.then(jc,jc);else{if(t=It,t!==null&&100<t.shellSuspendCounter)throw Error(j(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=a}},function(a){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,_v(t),t}throw eu=e,Pu}}var eu=null;function vv(){if(eu===null)throw Error(j(459));var t=eu;return eu=null,t}function _v(t){if(t===Pu||t===nd)throw Error(j(483))}var xs=!1;function Cg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Um(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ls(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ws(t,e,n){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(mt&2)!==0){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,e=Cf(t),J_(t,null,n),e}return td(t,a,e,n),Cf(t)}function tu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,T_(t,n)}}function Zp(t,e){var n=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?i=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Om=!1;function nu(){if(Om){var t=To;if(t!==null)throw t}}function au(t,e,n,a){Om=!1;var i=t.updateQueue;xs=!1;var s=i.firstBaseUpdate,r=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var o=l,u=o.next;o.next=null,r===null?s=u:r.next=u,r=o;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==r&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=o))}if(s!==null){var d=i.baseState;r=0,c=u=o=null,l=s;do{var f=l.lane&-536870913,h=f!==l.lane;if(h?(it&f)===f:(a&f)===f){f!==0&&f===Do&&(Om=!0),c!==null&&(c=c.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var g=t,y=l;f=e;var m=n;switch(y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(m,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,f=typeof g=="function"?g.call(m,d,f):g,f==null)break e;d=Ut({},d,f);break e;case 2:xs=!0}}f=l.callback,f!==null&&(t.flags|=64,h&&(t.flags|=8192),h=i.callbacks,h===null?i.callbacks=[f]:h.push(f))}else h={lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=h,o=d):c=c.next=h,r|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);c===null&&(o=d),i.baseState=o,i.firstBaseUpdate=u,i.lastBaseUpdate=c,s===null&&(i.shared.lanes=0),Ns|=r,t.lanes=r,t.memoizedState=d}}function aS(t,e){if(typeof t!="function")throw Error(j(191,t));t.call(e)}function iS(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)aS(n[t],e)}var Po=ui(null),If=ui(0);function Sv(t,e){t=qi,Ft(If,t),Ft(Po,e),qi=t|e.baseLanes}function Nm(){Ft(If,qi),Ft(Po,Po.current)}function Lg(){qi=If.current,xn(Po),xn(If)}var Us=0,Je=null,_t=null,en=null,Rf=!1,Ao=!1,Sr=!1,Df=0,mu=0,Co=null,_C=0;function Kt(){throw Error(j(321))}function wg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!da(t[n],e[n]))return!1;return!0}function Eg(t,e,n,a,i,s){return Us=s,Je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ue.H=t===null||t.memoizedState===null?OS:NS,Sr=!1,s=n(a,i),Sr=!1,Ao&&(s=rS(e,n,a,i)),sS(t),s}function sS(t){Ue.H=Pf;var e=_t!==null&&_t.next!==null;if(Us=0,en=_t=Je=null,Rf=!1,mu=0,Co=null,e)throw Error(j(300));t===null||gn||(t=t.dependencies,t!==null&&Ef(t)&&(gn=!0))}function rS(t,e,n,a){Je=t;var i=0;do{if(Ao&&(Co=null),mu=0,Ao=!1,25<=i)throw Error(j(301));if(i+=1,en=_t=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Ue.H=LC,s=e(n,a)}while(Ao);return s}function SC(){var t=Ue.H,e=t.useState()[0];return e=typeof e.then=="function"?Uu(e):e,t=t.useState()[0],(_t!==null?_t.memoizedState:null)!==t&&(Je.flags|=1024),e}function Ig(){var t=Df!==0;return Df=0,t}function Rg(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Dg(t){if(Rf){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Rf=!1}Us=0,en=_t=Je=null,Ao=!1,mu=Df=0,Co=null}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?Je.memoizedState=en=t:en=en.next=t,en}function tn(){if(_t===null){var t=Je.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var e=en===null?Je.memoizedState:en.next;if(e!==null)en=e,_t=t;else{if(t===null)throw Je.alternate===null?Error(j(467)):Error(j(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},en===null?Je.memoizedState=en=t:en=en.next=t}return en}function Pg(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Uu(t){var e=mu;return mu+=1,Co===null&&(Co=[]),t=nS(Co,t,e),e=Je,(en===null?e.memoizedState:en.next)===null&&(e=e.alternate,Ue.H=e===null||e.memoizedState===null?OS:NS),t}function ad(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Uu(t);if(t.$$typeof===Ui)return In(t)}throw Error(j(438,String(t)))}function Ug(t){var e=null,n=Je.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var a=Je.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Pg(),Je.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),a=0;a<t;a++)n[a]=sA;return e.index++,n}function Gi(t,e){return typeof e=="function"?e(t):e}function hf(t){var e=tn();return Og(e,_t,t)}function Og(t,e,n){var a=t.queue;if(a===null)throw Error(j(311));a.lastRenderedReducer=n;var i=t.baseQueue,s=a.pending;if(s!==null){if(i!==null){var r=i.next;i.next=s.next,s.next=r}e.baseQueue=i=s,a.pending=null}if(s=t.baseState,i===null)t.memoizedState=s;else{e=i.next;var l=r=null,o=null,u=e,c=!1;do{var d=u.lane&-536870913;if(d!==u.lane?(it&d)===d:(Us&d)===d){var f=u.revertLane;if(f===0)o!==null&&(o=o.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),d===Do&&(c=!0);else if((Us&f)===f){u=u.next,f===Do&&(c=!0);continue}else d={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},o===null?(l=o=d,r=s):o=o.next=d,Je.lanes|=f,Ns|=f;d=u.action,Sr&&n(s,d),s=u.hasEagerState?u.eagerState:n(s,d)}else f={lane:d,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},o===null?(l=o=f,r=s):o=o.next=f,Je.lanes|=d,Ns|=d;u=u.next}while(u!==null&&u!==e);if(o===null?r=s:o.next=l,!da(s,t.memoizedState)&&(gn=!0,c&&(n=To,n!==null)))throw n;t.memoizedState=s,t.baseState=r,t.baseQueue=o,a.lastRenderedState=s}return i===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Kp(t){var e=tn(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var a=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var r=i=i.next;do s=t(s,r.action),r=r.next;while(r!==i);da(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,a]}function oS(t,e,n){var a=Je,i=tn(),s=lt;if(s){if(n===void 0)throw Error(j(407));n=n()}else n=e();var r=!da((_t||i).memoizedState,n);r&&(i.memoizedState=n,gn=!0),i=i.queue;var l=cS.bind(null,a,i,t);if(Ou(2048,8,l,[t]),i.getSnapshot!==e||r||en!==null&&en.memoizedState.tag&1){if(a.flags|=2048,Uo(9,id(),uS.bind(null,a,i,n,e),null),It===null)throw Error(j(349));s||(Us&124)!==0||lS(a,e,n)}return n}function lS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Je.updateQueue,e===null?(e=Pg(),Je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function uS(t,e,n,a){e.value=n,e.getSnapshot=a,fS(e)&&dS(t)}function cS(t,e,n){return n(function(){fS(e)&&dS(t)})}function fS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!da(t,n)}catch{return!0}}function dS(t){var e=Go(t,2);e!==null&&fa(e,t,2)}function Bm(t){var e=Xn();if(typeof t=="function"){var n=t;if(t=n(),Sr){Ms(!0);try{n()}finally{Ms(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:t},e}function hS(t,e,n,a){return t.baseState=n,Og(t,_t,typeof a=="function"?a:Gi)}function MC(t,e,n,a,i){if(sd(t))throw Error(j(485));if(t=e.action,t!==null){var s={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Ue.T!==null?n(!0):s.isTransition=!1,a(s),n=e.pending,n===null?(s.next=e.pending=s,pS(e,s)):(s.next=n.next,e.pending=n.next=s)}}function pS(t,e){var n=e.action,a=e.payload,i=t.state;if(e.isTransition){var s=Ue.T,r={};Ue.T=r;try{var l=n(i,a),o=Ue.S;o!==null&&o(r,l),Mv(t,e,l)}catch(u){Fm(t,e,u)}finally{Ue.T=s}}else try{s=n(i,a),Mv(t,e,s)}catch(u){Fm(t,e,u)}}function Mv(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){bv(t,e,a)},function(a){return Fm(t,e,a)}):bv(t,e,n)}function bv(t,e,n){e.status="fulfilled",e.value=n,mS(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,pS(t,n)))}function Fm(t,e,n){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=n,mS(e),e=e.next;while(e!==a)}t.action=null}function mS(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function gS(t,e){return e}function Tv(t,e){if(lt){var n=It.formState;if(n!==null){e:{var a=Je;if(lt){if(Vt){t:{for(var i=Vt,s=ii;i.nodeType!==8;){if(!s){i=null;break t}if(i=Ha(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Vt=Ha(i.nextSibling),a=i.data==="F!";break e}}vr(a)}a=!1}a&&(e=n[0])}}return n=Xn(),n.memoizedState=n.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gS,lastRenderedState:e},n.queue=a,n=DS.bind(null,Je,a),a.dispatch=n,a=Bm(!1),s=kg.bind(null,Je,!1,a.queue),a=Xn(),i={state:e,dispatch:null,action:t,pending:null},a.queue=i,n=MC.bind(null,Je,i,s,n),i.dispatch=n,a.memoizedState=t,[e,n,!1]}function Av(t){var e=tn();return xS(e,_t,t)}function xS(t,e,n){if(e=Og(t,e,gS)[0],t=hf(Gi)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Uu(e)}catch(r){throw r===Pu?nd:r}else a=e;e=tn();var i=e.queue,s=i.dispatch;return n!==e.memoizedState&&(Je.flags|=2048,Uo(9,id(),bC.bind(null,i,n),null)),[a,s,t]}function bC(t,e){t.action=e}function Cv(t){var e=tn(),n=_t;if(n!==null)return xS(e,n,t);tn(),e=e.memoizedState,n=tn();var a=n.queue.dispatch;return n.memoizedState=t,[e,a,!1]}function Uo(t,e,n,a){return t={tag:t,create:n,deps:a,inst:e,next:null},e=Je.updateQueue,e===null&&(e=Pg(),Je.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(a=n.next,n.next=t,t.next=a,e.lastEffect=t),t}function id(){return{destroy:void 0,resource:void 0}}function yS(){return tn().memoizedState}function pf(t,e,n,a){var i=Xn();a=a===void 0?null:a,Je.flags|=t,i.memoizedState=Uo(1|e,id(),n,a)}function Ou(t,e,n,a){var i=tn();a=a===void 0?null:a;var s=i.memoizedState.inst;_t!==null&&a!==null&&wg(a,_t.memoizedState.deps)?i.memoizedState=Uo(e,s,n,a):(Je.flags|=t,i.memoizedState=Uo(1|e,s,n,a))}function Lv(t,e){pf(8390656,8,t,e)}function vS(t,e){Ou(2048,8,t,e)}function _S(t,e){return Ou(4,2,t,e)}function SS(t,e){return Ou(4,4,t,e)}function MS(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bS(t,e,n){n=n!=null?n.concat([t]):null,Ou(4,4,MS.bind(null,e,t),n)}function Ng(){}function TS(t,e){var n=tn();e=e===void 0?null:e;var a=n.memoizedState;return e!==null&&wg(e,a[1])?a[0]:(n.memoizedState=[t,e],t)}function AS(t,e){var n=tn();e=e===void 0?null:e;var a=n.memoizedState;if(e!==null&&wg(e,a[1]))return a[0];if(a=t(),Sr){Ms(!0);try{t()}finally{Ms(!1)}}return n.memoizedState=[a,e],a}function Bg(t,e,n){return n===void 0||(Us&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=mM(),Je.lanes|=t,Ns|=t,n)}function CS(t,e,n,a){return da(n,e)?n:Po.current!==null?(t=Bg(t,n,a),da(t,e)||(gn=!0),t):(Us&42)===0?(gn=!0,t.memoizedState=n):(t=mM(),Je.lanes|=t,Ns|=t,e)}function LS(t,e,n,a,i){var s=ut.p;ut.p=s!==0&&8>s?s:8;var r=Ue.T,l={};Ue.T=l,kg(t,!1,e,n);try{var o=i(),u=Ue.S;if(u!==null&&u(l,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var c=vC(o,a);iu(t,e,c,ca(t))}else iu(t,e,a,ca(t))}catch(d){iu(t,e,{then:function(){},status:"rejected",reason:d},ca())}finally{ut.p=s,Ue.T=r}}function TC(){}function km(t,e,n,a){if(t.tag!==5)throw Error(j(476));var i=wS(t).queue;LS(t,i,e,dr,n===null?TC:function(){return ES(t),n(a)})}function wS(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:dr,baseState:dr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:dr},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function ES(t){var e=wS(t).next.queue;iu(t,e,{},ca())}function Fg(){return In(_u)}function IS(){return tn().memoizedState}function RS(){return tn().memoizedState}function AC(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=ca();t=Ls(n);var a=ws(e,t,n);a!==null&&(fa(a,e,n),tu(a,e,n)),e={cache:Tg()},t.payload=e;return}e=e.return}}function CC(t,e,n){var a=ca();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},sd(t)?PS(e,n):(n=_g(t,e,n,a),n!==null&&(fa(n,t,a),US(n,e,a)))}function DS(t,e,n){var a=ca();iu(t,e,n,a)}function iu(t,e,n,a){var i={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(sd(t))PS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var r=e.lastRenderedState,l=s(r,n);if(i.hasEagerState=!0,i.eagerState=l,da(l,r))return td(t,e,i,0),It===null&&ed(),!1}catch{}finally{}if(n=_g(t,e,i,a),n!==null)return fa(n,t,a),US(n,e,a),!0}return!1}function kg(t,e,n,a){if(a={lane:2,revertLane:Yg(),action:a,hasEagerState:!1,eagerState:null,next:null},sd(t)){if(e)throw Error(j(479))}else e=_g(t,n,a,2),e!==null&&fa(e,t,2)}function sd(t){var e=t.alternate;return t===Je||e!==null&&e===Je}function PS(t,e){Ao=Rf=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function US(t,e,n){if((n&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,T_(t,n)}}var Pf={readContext:In,use:ad,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useLayoutEffect:Kt,useInsertionEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useSyncExternalStore:Kt,useId:Kt,useHostTransitionStatus:Kt,useFormState:Kt,useActionState:Kt,useOptimistic:Kt,useMemoCache:Kt,useCacheRefresh:Kt},OS={readContext:In,use:ad,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:Lv,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,pf(4194308,4,MS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pf(4194308,4,t,e)},useInsertionEffect:function(t,e){pf(4,2,t,e)},useMemo:function(t,e){var n=Xn();e=e===void 0?null:e;var a=t();if(Sr){Ms(!0);try{t()}finally{Ms(!1)}}return n.memoizedState=[a,e],a},useReducer:function(t,e,n){var a=Xn();if(n!==void 0){var i=n(e);if(Sr){Ms(!0);try{n(e)}finally{Ms(!1)}}}else i=e;return a.memoizedState=a.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=CC.bind(null,Je,t),[a.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:function(t){t=Bm(t);var e=t.queue,n=DS.bind(null,Je,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Ng,useDeferredValue:function(t,e){var n=Xn();return Bg(n,t,e)},useTransition:function(){var t=Bm(!1);return t=LS.bind(null,Je,t.queue,!0,!1),Xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var a=Je,i=Xn();if(lt){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),It===null)throw Error(j(349));(it&124)!==0||lS(a,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Lv(cS.bind(null,a,s,t),[t]),a.flags|=2048,Uo(9,id(),uS.bind(null,a,s,n,e),null),n},useId:function(){var t=Xn(),e=It.identifierPrefix;if(lt){var n=Ni,a=Oi;n=(a&~(1<<32-ua(a)-1)).toString(32)+n,e="\xAB"+e+"R"+n,n=Df++,0<n&&(e+="H"+n.toString(32)),e+="\xBB"}else n=_C++,e="\xAB"+e+"r"+n.toString(32)+"\xBB";return t.memoizedState=e},useHostTransitionStatus:Fg,useFormState:Tv,useActionState:Tv,useOptimistic:function(t){var e=Xn();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=kg.bind(null,Je,!0,n),n.dispatch=e,[t,e]},useMemoCache:Ug,useCacheRefresh:function(){return Xn().memoizedState=AC.bind(null,Je)}},NS={readContext:In,use:ad,useCallback:TS,useContext:In,useEffect:vS,useImperativeHandle:bS,useInsertionEffect:_S,useLayoutEffect:SS,useMemo:AS,useReducer:hf,useRef:yS,useState:function(){return hf(Gi)},useDebugValue:Ng,useDeferredValue:function(t,e){var n=tn();return CS(n,_t.memoizedState,t,e)},useTransition:function(){var t=hf(Gi)[0],e=tn().memoizedState;return[typeof t=="boolean"?t:Uu(t),e]},useSyncExternalStore:oS,useId:IS,useHostTransitionStatus:Fg,useFormState:Av,useActionState:Av,useOptimistic:function(t,e){var n=tn();return hS(n,_t,t,e)},useMemoCache:Ug,useCacheRefresh:RS},LC={readContext:In,use:ad,useCallback:TS,useContext:In,useEffect:vS,useImperativeHandle:bS,useInsertionEffect:_S,useLayoutEffect:SS,useMemo:AS,useReducer:Kp,useRef:yS,useState:function(){return Kp(Gi)},useDebugValue:Ng,useDeferredValue:function(t,e){var n=tn();return _t===null?Bg(n,t,e):CS(n,_t.memoizedState,t,e)},useTransition:function(){var t=Kp(Gi)[0],e=tn().memoizedState;return[typeof t=="boolean"?t:Uu(t),e]},useSyncExternalStore:oS,useId:IS,useHostTransitionStatus:Fg,useFormState:Cv,useActionState:Cv,useOptimistic:function(t,e){var n=tn();return _t!==null?hS(n,_t,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Ug,useCacheRefresh:RS},Lo=null,gu=0;function Qc(t){var e=gu;return gu+=1,Lo===null&&(Lo=[]),nS(Lo,t,e)}function Hl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function $c(t,e){throw e.$$typeof===aA?Error(j(525)):(t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function wv(t){var e=t._init;return e(t._payload)}function BS(t){function e(p,x){if(t){var v=p.deletions;v===null?(p.deletions=[x],p.flags|=16):v.push(x)}}function n(p,x){if(!t)return null;for(;x!==null;)e(p,x),x=x.sibling;return null}function a(p){for(var x=new Map;p!==null;)p.key!==null?x.set(p.key,p):x.set(p.index,p),p=p.sibling;return x}function i(p,x){return p=ki(p,x),p.index=0,p.sibling=null,p}function s(p,x,v){return p.index=v,t?(v=p.alternate,v!==null?(v=v.index,v<x?(p.flags|=67108866,x):v):(p.flags|=67108866,x)):(p.flags|=1048576,x)}function r(p){return t&&p.alternate===null&&(p.flags|=67108866),p}function l(p,x,v,M){return x===null||x.tag!==6?(x=Xp(v,p.mode,M),x.return=p,x):(x=i(x,v),x.return=p,x)}function o(p,x,v,M){var C=v.type;return C===lo?c(p,x,v.props.children,M,v.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gs&&wv(C)===x.type)?(x=i(x,v.props),Hl(x,v),x.return=p,x):(x=ff(v.type,v.key,v.props,null,p.mode,M),Hl(x,v),x.return=p,x)}function u(p,x,v,M){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Yp(v,p.mode,M),x.return=p,x):(x=i(x,v.children||[]),x.return=p,x)}function c(p,x,v,M,C){return x===null||x.tag!==7?(x=hr(v,p.mode,M,C),x.return=p,x):(x=i(x,v),x.return=p,x)}function d(p,x,v){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Xp(""+x,p.mode,v),x.return=p,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Vc:return v=ff(x.type,x.key,x.props,null,p.mode,v),Hl(v,x),v.return=p,v;case Xl:return x=Yp(x,p.mode,v),x.return=p,x;case gs:var M=x._init;return x=M(x._payload),d(p,x,v)}if(Yl(x)||Fl(x))return x=hr(x,p.mode,v,null),x.return=p,x;if(typeof x.then=="function")return d(p,Qc(x),v);if(x.$$typeof===Ui)return d(p,Jc(p,x),v);$c(p,x)}return null}function f(p,x,v,M){var C=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return C!==null?null:l(p,x,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Vc:return v.key===C?o(p,x,v,M):null;case Xl:return v.key===C?u(p,x,v,M):null;case gs:return C=v._init,v=C(v._payload),f(p,x,v,M)}if(Yl(v)||Fl(v))return C!==null?null:c(p,x,v,M,null);if(typeof v.then=="function")return f(p,x,Qc(v),M);if(v.$$typeof===Ui)return f(p,x,Jc(p,v),M);$c(p,v)}return null}function h(p,x,v,M,C){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return p=p.get(v)||null,l(x,p,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Vc:return p=p.get(M.key===null?v:M.key)||null,o(x,p,M,C);case Xl:return p=p.get(M.key===null?v:M.key)||null,u(x,p,M,C);case gs:var T=M._init;return M=T(M._payload),h(p,x,v,M,C)}if(Yl(M)||Fl(M))return p=p.get(v)||null,c(x,p,M,C,null);if(typeof M.then=="function")return h(p,x,v,Qc(M),C);if(M.$$typeof===Ui)return h(p,x,v,Jc(x,M),C);$c(x,M)}return null}function g(p,x,v,M){for(var C=null,T=null,L=x,_=x=0,w=null;L!==null&&_<v.length;_++){L.index>_?(w=L,L=null):w=L.sibling;var E=f(p,L,v[_],M);if(E===null){L===null&&(L=w);break}t&&L&&E.alternate===null&&e(p,L),x=s(E,x,_),T===null?C=E:T.sibling=E,T=E,L=w}if(_===v.length)return n(p,L),lt&&cr(p,_),C;if(L===null){for(;_<v.length;_++)L=d(p,v[_],M),L!==null&&(x=s(L,x,_),T===null?C=L:T.sibling=L,T=L);return lt&&cr(p,_),C}for(L=a(L);_<v.length;_++)w=h(L,p,_,v[_],M),w!==null&&(t&&w.alternate!==null&&L.delete(w.key===null?_:w.key),x=s(w,x,_),T===null?C=w:T.sibling=w,T=w);return t&&L.forEach(function(I){return e(p,I)}),lt&&cr(p,_),C}function y(p,x,v,M){if(v==null)throw Error(j(151));for(var C=null,T=null,L=x,_=x=0,w=null,E=v.next();L!==null&&!E.done;_++,E=v.next()){L.index>_?(w=L,L=null):w=L.sibling;var I=f(p,L,E.value,M);if(I===null){L===null&&(L=w);break}t&&L&&I.alternate===null&&e(p,L),x=s(I,x,_),T===null?C=I:T.sibling=I,T=I,L=w}if(E.done)return n(p,L),lt&&cr(p,_),C;if(L===null){for(;!E.done;_++,E=v.next())E=d(p,E.value,M),E!==null&&(x=s(E,x,_),T===null?C=E:T.sibling=E,T=E);return lt&&cr(p,_),C}for(L=a(L);!E.done;_++,E=v.next())E=h(L,p,_,E.value,M),E!==null&&(t&&E.alternate!==null&&L.delete(E.key===null?_:E.key),x=s(E,x,_),T===null?C=E:T.sibling=E,T=E);return t&&L.forEach(function(F){return e(p,F)}),lt&&cr(p,_),C}function m(p,x,v,M){if(typeof v=="object"&&v!==null&&v.type===lo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Vc:e:{for(var C=v.key;x!==null;){if(x.key===C){if(C=v.type,C===lo){if(x.tag===7){n(p,x.sibling),M=i(x,v.props.children),M.return=p,p=M;break e}}else if(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gs&&wv(C)===x.type){n(p,x.sibling),M=i(x,v.props),Hl(M,v),M.return=p,p=M;break e}n(p,x);break}else e(p,x);x=x.sibling}v.type===lo?(M=hr(v.props.children,p.mode,M,v.key),M.return=p,p=M):(M=ff(v.type,v.key,v.props,null,p.mode,M),Hl(M,v),M.return=p,p=M)}return r(p);case Xl:e:{for(C=v.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(p,x.sibling),M=i(x,v.children||[]),M.return=p,p=M;break e}else{n(p,x);break}else e(p,x);x=x.sibling}M=Yp(v,p.mode,M),M.return=p,p=M}return r(p);case gs:return C=v._init,v=C(v._payload),m(p,x,v,M)}if(Yl(v))return g(p,x,v,M);if(Fl(v)){if(C=Fl(v),typeof C!="function")throw Error(j(150));return v=C.call(v),y(p,x,v,M)}if(typeof v.then=="function")return m(p,x,Qc(v),M);if(v.$$typeof===Ui)return m(p,x,Jc(p,v),M);$c(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,x!==null&&x.tag===6?(n(p,x.sibling),M=i(x,v),M.return=p,p=M):(n(p,x),M=Xp(v,p.mode,M),M.return=p,p=M),r(p)):n(p,x)}return function(p,x,v,M){try{gu=0;var C=m(p,x,v,M);return Lo=null,C}catch(L){if(L===Pu||L===nd)throw L;var T=oa(29,L,null,p.mode);return T.lanes=M,T.return=p,T}finally{}}}var Oo=BS(!0),FS=BS(!1),Ra=ui(null),li=null;function vs(t){var e=t.alternate;Ft(rn,rn.current&1),Ft(Ra,t),li===null&&(e===null||Po.current!==null||e.memoizedState!==null)&&(li=t)}function kS(t){if(t.tag===22){if(Ft(rn,rn.current),Ft(Ra,t),li===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(li=t)}}else _s(t)}function _s(){Ft(rn,rn.current),Ft(Ra,Ra.current)}function Fi(t){xn(Ra),li===t&&(li=null),xn(rn)}var rn=ui(0);function Uf(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||ng(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Jp(t,e,n,a){e=t.memoizedState,n=n(a,e),n=n==null?e:Ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zm={enqueueSetState:function(t,e,n){t=t._reactInternals;var a=ca(),i=Ls(a);i.payload=e,n!=null&&(i.callback=n),e=ws(t,i,a),e!==null&&(fa(e,t,a),tu(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var a=ca(),i=Ls(a);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=ws(t,i,a),e!==null&&(fa(e,t,a),tu(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ca(),a=Ls(n);a.tag=2,e!=null&&(a.callback=e),e=ws(t,a,n),e!==null&&(fa(e,t,n),tu(e,t,n))}};function Ev(t,e,n,a,i,s,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,s,r):e.prototype&&e.prototype.isPureReactComponent?!hu(n,a)||!hu(i,s):!0}function Iv(t,e,n,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,a),e.state!==t&&zm.enqueueReplaceState(e,e.state,null)}function Mr(t,e){var n=e;if("ref"in e){n={};for(var a in e)a!=="ref"&&(n[a]=e[a])}if(t=t.defaultProps){n===e&&(n=Ut({},n));for(var i in t)n[i]===void 0&&(n[i]=t[i])}return n}var Of=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function zS(t){Of(t)}function HS(t){console.error(t)}function GS(t){Of(t)}function Nf(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Rv(t,e,n){try{var a=t.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Hm(t,e,n){return n=Ls(n),n.tag=3,n.payload={element:null},n.callback=function(){Nf(t,e)},n}function VS(t){return t=Ls(t),t.tag=3,t}function qS(t,e,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var s=a.value;t.payload=function(){return i(s)},t.callback=function(){Rv(e,n,a)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){Rv(e,n,a),typeof i!="function"&&(Es===null?Es=new Set([this]):Es.add(this));var l=a.stack;this.componentDidCatch(a.value,{componentStack:l!==null?l:""})})}function wC(t,e,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=n.alternate,e!==null&&Ru(e,n,i,!0),n=Ra.current,n!==null){switch(n.tag){case 13:return li===null?Km():n.alternate===null&&qt===0&&(qt=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===Pm?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([a]):e.add(a),om(t,a,i)),!1;case 22:return n.flags|=65536,a===Pm?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([a]):n.add(a)),om(t,a,i)),!1}throw Error(j(435,n.tag))}return om(t,a,i),Km(),!1}if(lt)return e=Ra.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,a!==wm&&(t=Error(j(422),{cause:a}),pu(Ea(t,n)))):(a!==wm&&(e=Error(j(423),{cause:a}),pu(Ea(e,n))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,a=Ea(a,n),i=Hm(t.stateNode,a,i),Zp(t,i),qt!==4&&(qt=2)),!1;var s=Error(j(520),{cause:a});if(s=Ea(s,n),ou===null?ou=[s]:ou.push(s),qt!==4&&(qt=2),e===null)return!0;a=Ea(a,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=i&-i,n.lanes|=t,t=Hm(n.stateNode,a,t),Zp(n,t),!1;case 1:if(e=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Es===null||!Es.has(s))))return n.flags|=65536,i&=-i,n.lanes|=i,i=VS(i),qS(i,t,n,a),Zp(n,i),!1}n=n.return}while(n!==null);return!1}var WS=Error(j(461)),gn=!1;function _n(t,e,n,a){e.child=t===null?FS(e,null,n,a):Oo(e,t.child,n,a)}function Dv(t,e,n,a,i){n=n.render;var s=e.ref;if("ref"in a){var r={};for(var l in a)l!=="ref"&&(r[l]=a[l])}else r=a;return _r(e),a=Eg(t,e,n,r,s,i),l=Ig(),t!==null&&!gn?(Rg(t,e,i),Vi(t,e,i)):(lt&&l&&Mg(e),e.flags|=1,_n(t,e,a,i),e.child)}function Pv(t,e,n,a,i){if(t===null){var s=n.type;return typeof s=="function"&&!Sg(s)&&s.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=s,XS(t,e,s,a,i)):(t=ff(n.type,null,a,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!zg(t,i)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:hu,n(r,a)&&t.ref===e.ref)return Vi(t,e,i)}return e.flags|=1,t=ki(s,a),t.ref=e.ref,t.return=e,e.child=t}function XS(t,e,n,a,i){if(t!==null){var s=t.memoizedProps;if(hu(s,a)&&t.ref===e.ref)if(gn=!1,e.pendingProps=a=s,zg(t,i))(t.flags&131072)!==0&&(gn=!0);else return e.lanes=t.lanes,Vi(t,e,i)}return Gm(t,e,n,a,i)}function YS(t,e,n){var a=e.pendingProps,i=a.children,s=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=s!==null?s.baseLanes|n:n,t!==null){for(i=e.child=t.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;e.childLanes=s&~a}else e.childLanes=0,e.child=null;return Uv(t,e,a,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&df(e,s!==null?s.cachePool:null),s!==null?Sv(e,s):Nm(),kS(e);else return e.lanes=e.childLanes=536870912,Uv(t,e,s!==null?s.baseLanes|n:n,n)}else s!==null?(df(e,s.cachePool),Sv(e,s),_s(e),e.memoizedState=null):(t!==null&&df(e,null),Nm(),_s(e));return _n(t,e,i,n),e.child}function Uv(t,e,n,a){var i=Ag();return i=i===null?null:{parent:sn._currentValue,pool:i},e.memoizedState={baseLanes:n,cachePool:i},t!==null&&df(e,null),Nm(),kS(e),t!==null&&Ru(t,e,a,!0),null}function mf(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(j(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Gm(t,e,n,a,i){return _r(e),n=Eg(t,e,n,a,void 0,i),a=Ig(),t!==null&&!gn?(Rg(t,e,i),Vi(t,e,i)):(lt&&a&&Mg(e),e.flags|=1,_n(t,e,n,i),e.child)}function Ov(t,e,n,a,i,s){return _r(e),e.updateQueue=null,n=rS(e,a,n,i),sS(t),a=Ig(),t!==null&&!gn?(Rg(t,e,s),Vi(t,e,s)):(lt&&a&&Mg(e),e.flags|=1,_n(t,e,n,s),e.child)}function Nv(t,e,n,a,i){if(_r(e),e.stateNode===null){var s=xo,r=n.contextType;typeof r=="object"&&r!==null&&(s=In(r)),s=new n(a,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=zm,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=a,s.state=e.memoizedState,s.refs={},Cg(e),r=n.contextType,s.context=typeof r=="object"&&r!==null?In(r):xo,s.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Jp(e,n,r,a),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&zm.enqueueReplaceState(s,s.state,null),au(e,a,s,i),nu(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){s=e.stateNode;var l=e.memoizedProps,o=Mr(n,l);s.props=o;var u=s.context,c=n.contextType;r=xo,typeof c=="object"&&c!==null&&(r=In(c));var d=n.getDerivedStateFromProps;c=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function",l=e.pendingProps!==l,c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l||u!==r)&&Iv(e,s,a,r),xs=!1;var f=e.memoizedState;s.state=f,au(e,a,s,i),nu(),u=e.memoizedState,l||f!==u||xs?(typeof d=="function"&&(Jp(e,n,d,a),u=e.memoizedState),(o=xs||Ev(e,n,o,a,f,u,r))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=u),s.props=a,s.state=u,s.context=r,a=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{s=e.stateNode,Um(t,e),r=e.memoizedProps,c=Mr(n,r),s.props=c,d=e.pendingProps,f=s.context,u=n.contextType,o=xo,typeof u=="object"&&u!==null&&(o=In(u)),l=n.getDerivedStateFromProps,(u=typeof l=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==d||f!==o)&&Iv(e,s,a,o),xs=!1,f=e.memoizedState,s.state=f,au(e,a,s,i),nu();var h=e.memoizedState;r!==d||f!==h||xs||t!==null&&t.dependencies!==null&&Ef(t.dependencies)?(typeof l=="function"&&(Jp(e,n,l,a),h=e.memoizedState),(c=xs||Ev(e,n,c,a,f,h,o)||t!==null&&t.dependencies!==null&&Ef(t.dependencies))?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,h,o),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,h,o)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=h),s.props=a,s.state=h,s.context=o,a=c):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),a=!1)}return s=a,mf(t,e),a=(e.flags&128)!==0,s||a?(s=e.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&a?(e.child=Oo(e,t.child,null,i),e.child=Oo(e,null,n,i)):_n(t,e,n,i),e.memoizedState=s.state,t=e.child):t=Vi(t,e,i),t}function Bv(t,e,n,a){return Iu(),e.flags|=256,_n(t,e,n,a),e.child}var jp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qp(t){return{baseLanes:t,cachePool:eS()}}function $p(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Ia),t}function ZS(t,e,n){var a=e.pendingProps,i=!1,s=(e.flags&128)!==0,r;if((r=s)||(r=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),r&&(i=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(lt){if(i?vs(e):_s(e),lt){var l=Vt,o;if(o=l){e:{for(o=l,l=ii;o.nodeType!==8;){if(!l){l=null;break e}if(o=Ha(o.nextSibling),o===null){l=null;break e}}l=o}l!==null?(e.memoizedState={dehydrated:l,treeContext:pr!==null?{id:Oi,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},o=oa(18,null,null,0),o.stateNode=l,o.return=e,e.child=o,Bn=e,Vt=null,o=!0):o=!1}o||vr(e)}if(l=e.memoizedState,l!==null&&(l=l.dehydrated,l!==null))return ng(l)?e.lanes=32:e.lanes=536870912,null;Fi(e)}return l=a.children,a=a.fallback,i?(_s(e),i=e.mode,l=Bf({mode:"hidden",children:l},i),a=hr(a,i,n,null),l.return=e,a.return=e,l.sibling=a,e.child=l,i=e.child,i.memoizedState=Qp(n),i.childLanes=$p(t,r,n),e.memoizedState=jp,a):(vs(e),Vm(e,l))}if(o=t.memoizedState,o!==null&&(l=o.dehydrated,l!==null)){if(s)e.flags&256?(vs(e),e.flags&=-257,e=em(t,e,n)):e.memoizedState!==null?(_s(e),e.child=t.child,e.flags|=128,e=null):(_s(e),i=a.fallback,l=e.mode,a=Bf({mode:"visible",children:a.children},l),i=hr(i,l,n,null),i.flags|=2,a.return=e,i.return=e,a.sibling=i,e.child=a,Oo(e,t.child,null,n),a=e.child,a.memoizedState=Qp(n),a.childLanes=$p(t,r,n),e.memoizedState=jp,e=i);else if(vs(e),ng(l)){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;r=u,a=Error(j(419)),a.stack="",a.digest=r,pu({value:a,source:null,stack:null}),e=em(t,e,n)}else if(gn||Ru(t,e,n,!1),r=(n&t.childLanes)!==0,gn||r){if(r=It,r!==null&&(a=n&-n,a=(a&42)!==0?1:cg(a),a=(a&(r.suspendedLanes|n))!==0?0:a,a!==0&&a!==o.retryLane))throw o.retryLane=a,Go(t,a),fa(r,t,a),WS;l.data==="$?"||Km(),e=em(t,e,n)}else l.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=o.treeContext,Vt=Ha(l.nextSibling),Bn=e,lt=!0,mr=null,ii=!1,t!==null&&(Ca[La++]=Oi,Ca[La++]=Ni,Ca[La++]=pr,Oi=t.id,Ni=t.overflow,pr=e),e=Vm(e,a.children),e.flags|=4096);return e}return i?(_s(e),i=a.fallback,l=e.mode,o=t.child,u=o.sibling,a=ki(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&65011712,u!==null?i=ki(u,i):(i=hr(i,l,n,null),i.flags|=2),i.return=e,a.return=e,a.sibling=i,e.child=a,a=i,i=e.child,l=t.child.memoizedState,l===null?l=Qp(n):(o=l.cachePool,o!==null?(u=sn._currentValue,o=o.parent!==u?{parent:u,pool:u}:o):o=eS(),l={baseLanes:l.baseLanes|n,cachePool:o}),i.memoizedState=l,i.childLanes=$p(t,r,n),e.memoizedState=jp,a):(vs(e),n=t.child,t=n.sibling,n=ki(n,{mode:"visible",children:a.children}),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n)}function Vm(t,e){return e=Bf({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Bf(t,e){return t=oa(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function em(t,e,n){return Oo(e,t.child,null,n),t=Vm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Fv(t,e,n){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Im(t.return,e,n)}function tm(t,e,n,a,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=i)}function KS(t,e,n){var a=e.pendingProps,i=a.revealOrder,s=a.tail;if(_n(t,e,a.children,n),a=rn.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fv(t,n,e);else if(t.tag===19)Fv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(Ft(rn,a),i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Uf(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),tm(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Uf(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}tm(e,!0,n,null,s);break;case"together":tm(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ns|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(Ru(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=ki(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ki(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zg(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Ef(t)))}function EC(t,e,n){switch(e.tag){case 3:Sf(e,e.stateNode.containerInfo),ys(e,sn,t.memoizedState.cache),Iu();break;case 27:case 5:ym(e);break;case 4:Sf(e,e.stateNode.containerInfo);break;case 10:ys(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(vs(e),e.flags|=128,null):(n&e.child.childLanes)!==0?ZS(t,e,n):(vs(e),t=Vi(t,e,n),t!==null?t.sibling:null);vs(e);break;case 19:var i=(t.flags&128)!==0;if(a=(n&e.childLanes)!==0,a||(Ru(t,e,n,!1),a=(n&e.childLanes)!==0),i){if(a)return KS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ft(rn,rn.current),a)break;return null;case 22:case 23:return e.lanes=0,YS(t,e,n);case 24:ys(e,sn,t.memoizedState.cache)}return Vi(t,e,n)}function JS(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)gn=!0;else{if(!zg(t,n)&&(e.flags&128)===0)return gn=!1,EC(t,e,n);gn=(t.flags&131072)!==0}else gn=!1,lt&&(e.flags&1048576)!==0&&Q_(e,wf,e.index);switch(e.lanes=0,e.tag){case 16:e:{t=e.pendingProps;var a=e.elementType,i=a._init;if(a=i(a._payload),e.type=a,typeof a=="function")Sg(a)?(t=Mr(a,t),e.tag=1,e=Nv(null,e,a,t,n)):(e.tag=0,e=Gm(null,e,a,t,n));else{if(a!=null){if(i=a.$$typeof,i===og){e.tag=11,e=Dv(null,e,a,t,n);break e}else if(i===lg){e.tag=14,e=Pv(null,e,a,t,n);break e}}throw e=gm(a)||a,Error(j(306,e,""))}}return e;case 0:return Gm(t,e,e.type,e.pendingProps,n);case 1:return a=e.type,i=Mr(a,e.pendingProps),Nv(t,e,a,i,n);case 3:e:{if(Sf(e,e.stateNode.containerInfo),t===null)throw Error(j(387));a=e.pendingProps;var s=e.memoizedState;i=s.element,Um(t,e),au(e,a,null,n);var r=e.memoizedState;if(a=r.cache,ys(e,sn,a),a!==s.cache&&Rm(e,[sn],n,!0),nu(),a=r.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=Bv(t,e,a,n);break e}else if(a!==i){i=Ea(Error(j(424)),e),pu(i),e=Bv(t,e,a,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Vt=Ha(t.firstChild),Bn=e,lt=!0,mr=null,ii=!0,n=FS(e,null,a,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Iu(),a===i){e=Vi(t,e,n);break e}_n(t,e,a,n)}e=e.child}return e;case 26:return mf(t,e),t===null?(n=a_(e.type,null,e.pendingProps,null))?e.memoizedState=n:lt||(n=e.type,t=e.pendingProps,a=qf(Cs.current).createElement(n),a[En]=e,a[Kn]=t,Mn(a,n,t),mn(a),e.stateNode=a):e.memoizedState=a_(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ym(e),t===null&&lt&&(a=e.stateNode=NM(e.type,e.pendingProps,Cs.current),Bn=e,ii=!0,i=Vt,Fs(e.type)?(ag=i,Vt=Ha(a.firstChild)):Vt=i),_n(t,e,e.pendingProps.children,n),mf(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&lt&&((i=a=Vt)&&(a=tL(a,e.type,e.pendingProps,ii),a!==null?(e.stateNode=a,Bn=e,Vt=Ha(a.firstChild),ii=!1,i=!0):i=!1),i||vr(e)),ym(e),i=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,a=s.children,eg(i,s)?a=null:r!==null&&eg(i,r)&&(e.flags|=32),e.memoizedState!==null&&(i=Eg(t,e,SC,null,null,n),_u._currentValue=i),mf(t,e),_n(t,e,a,n),e.child;case 6:return t===null&&lt&&((t=n=Vt)&&(n=nL(n,e.pendingProps,ii),n!==null?(e.stateNode=n,Bn=e,Vt=null,t=!0):t=!1),t||vr(e)),null;case 13:return ZS(t,e,n);case 4:return Sf(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Oo(e,null,a,n):_n(t,e,a,n),e.child;case 11:return Dv(t,e,e.type,e.pendingProps,n);case 7:return _n(t,e,e.pendingProps,n),e.child;case 8:return _n(t,e,e.pendingProps.children,n),e.child;case 12:return _n(t,e,e.pendingProps.children,n),e.child;case 10:return a=e.pendingProps,ys(e,e.type,a.value),_n(t,e,a.children,n),e.child;case 9:return i=e.type._context,a=e.pendingProps.children,_r(e),i=In(i),a=a(i),e.flags|=1,_n(t,e,a,n),e.child;case 14:return Pv(t,e,e.type,e.pendingProps,n);case 15:return XS(t,e,e.type,e.pendingProps,n);case 19:return KS(t,e,n);case 31:return a=e.pendingProps,n=e.mode,a={mode:a.mode,children:a.children},t===null?(n=Bf(a,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=ki(t.child,a),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return YS(t,e,n);case 24:return _r(e),a=In(sn),t===null?(i=Ag(),i===null&&(i=It,s=Tg(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=n),i=s),e.memoizedState={parent:a,cache:i},Cg(e),ys(e,sn,i)):((t.lanes&n)!==0&&(Um(t,e),au(e,null,null,n),nu()),i=t.memoizedState,s=e.memoizedState,i.parent!==a?(i={parent:a,cache:a},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),ys(e,sn,a)):(a=s.cache,ys(e,sn,a),a!==i.cache&&Rm(e,[sn],n,!0))),_n(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(j(156,e.tag))}function Ri(t){t.flags|=4}function kv(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!kM(e)){if(e=Ra.current,e!==null&&((it&4194048)===it?li!==null:(it&62914560)!==it&&(it&536870912)===0||e!==li))throw eu=Pm,tS;t.flags|=8192}}function ef(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?M_():536870912,t.lanes|=e,No|=e)}function Gl(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,a=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=a,t.childLanes=n,e}function IC(t,e,n){var a=e.pendingProps;switch(bg(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return zt(e),null;case 3:return n=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),zi(sn),Eo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(zl(e)?Ri(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,mv())),zt(e),null;case 26:return n=e.memoizedState,t===null?(Ri(e),n!==null?(zt(e),kv(e,n)):(zt(e),e.flags&=-16777217)):n?n!==t.memoizedState?(Ri(e),zt(e),kv(e,n)):(zt(e),e.flags&=-16777217):(t.memoizedProps!==a&&Ri(e),zt(e),e.flags&=-16777217),null;case 27:Mf(e),n=Cs.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ri(e);else{if(!a){if(e.stateNode===null)throw Error(j(166));return zt(e),null}t=ri.current,zl(e)?hv(e,t):(t=NM(i,a,n),e.stateNode=t,Ri(e))}return zt(e),null;case 5:if(Mf(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ri(e);else{if(!a){if(e.stateNode===null)throw Error(j(166));return zt(e),null}if(t=ri.current,zl(e))hv(e,t);else{switch(i=qf(Cs.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}t[En]=e,t[Kn]=a;e:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break e;for(;i.sibling===null;){if(i.return===null||i.return===e)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;e:switch(Mn(t,n,a),n){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Ri(e)}}return zt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Ri(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(j(166));if(t=Cs.current,zl(e)){if(t=e.stateNode,n=e.memoizedProps,a=null,i=Bn,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}t[En]=e,t=!!(t.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||PM(t.nodeValue,n)),t||vr(e)}else t=qf(t).createTextNode(a),t[En]=e,e.stateNode=t}return zt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=zl(e),a!==null&&a.dehydrated!==null){if(t===null){if(!i)throw Error(j(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[En]=e}else Iu(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;zt(e),i=!1}else i=mv(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Fi(e),e):(Fi(e),null)}if(Fi(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=a!==null,t=t!==null&&t.memoizedState!==null,n){a=e.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var s=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==i&&(a.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),ef(e,e.updateQueue),zt(e),null;case 4:return Eo(),t===null&&Zg(e.stateNode.containerInfo),zt(e),null;case 10:return zi(e.type),zt(e),null;case 19:if(xn(rn),i=e.memoizedState,i===null)return zt(e),null;if(a=(e.flags&128)!==0,s=i.rendering,s===null)if(a)Gl(i,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=Uf(t),s!==null){for(e.flags|=128,Gl(i,!1),t=s.updateQueue,e.updateQueue=t,ef(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)j_(n,t),n=n.sibling;return Ft(rn,rn.current&1|2),e.child}t=t.sibling}i.tail!==null&&oi()>kf&&(e.flags|=128,a=!0,Gl(i,!1),e.lanes=4194304)}else{if(!a)if(t=Uf(s),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,ef(e,t),Gl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!lt)return zt(e),null}else 2*oi()-i.renderingStartTime>kf&&n!==536870912&&(e.flags|=128,a=!0,Gl(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(t=i.last,t!==null?t.sibling=s:e.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=oi(),e.sibling=null,t=rn.current,Ft(rn,a?t&1|2:t&1),e):(zt(e),null);case 22:case 23:return Fi(e),Lg(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(n&536870912)!==0&&(e.flags&128)===0&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),n=e.updateQueue,n!==null&&ef(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(e.flags|=2048),t!==null&&xn(gr),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),zi(sn),zt(e),null;case 25:return null;case 30:return null}throw Error(j(156,e.tag))}function RC(t,e){switch(bg(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zi(sn),Eo(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Mf(e),null;case 13:if(Fi(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Iu()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xn(rn),null;case 4:return Eo(),null;case 10:return zi(e.type),null;case 22:case 23:return Fi(e),Lg(),t!==null&&xn(gr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return zi(sn),null;case 25:return null;default:return null}}function jS(t,e){switch(bg(e),e.tag){case 3:zi(sn),Eo();break;case 26:case 27:case 5:Mf(e);break;case 4:Eo();break;case 13:Fi(e);break;case 19:xn(rn);break;case 10:zi(e.type);break;case 22:case 23:Fi(e),Lg(),t!==null&&xn(gr);break;case 24:zi(sn)}}function Nu(t,e){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&t)===t){a=void 0;var s=n.create,r=n.inst;a=s(),r.destroy=a}n=n.next}while(n!==i)}}catch(l){At(e,e.return,l)}}function Os(t,e,n){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var s=i.next;a=s;do{if((a.tag&t)===t){var r=a.inst,l=r.destroy;if(l!==void 0){r.destroy=void 0,i=e;var o=n,u=l;try{u()}catch(c){At(i,o,c)}}}a=a.next}while(a!==s)}}catch(c){At(e,e.return,c)}}function QS(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{iS(e,n)}catch(a){At(t,t.return,a)}}}function $S(t,e,n){n.props=Mr(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(a){At(t,e,a)}}function su(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof n=="function"?t.refCleanup=n(a):n.current=a}}catch(i){At(t,e,i)}}function si(t,e){var n=t.ref,a=t.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){At(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function eM(t){var e=t.type,n=t.memoizedProps,a=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){At(t,t.return,i)}}function nm(t,e,n){try{var a=t.stateNode;JC(a,t.type,n,e),a[Kn]=e}catch(i){At(t,t.return,i)}}function tM(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fs(t.type)||t.tag===4}function am(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tM(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qm(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ud));else if(a!==4&&(a===27&&Fs(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(qm(t,e,n),t=t.sibling;t!==null;)qm(t,e,n),t=t.sibling}function Ff(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(a!==4&&(a===27&&Fs(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Ff(t,e,n),t=t.sibling;t!==null;)Ff(t,e,n),t=t.sibling}function nM(t){var e=t.stateNode,n=t.memoizedProps;try{for(var a=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Mn(e,a,n),e[En]=t,e[Kn]=n}catch(s){At(t,t.return,s)}}var Pi=!1,Jt=!1,im=!1,zv=typeof WeakSet=="function"?WeakSet:Set,pn=null;function DC(t,e){if(t=t.containerInfo,Qm=Zf,t=V_(t),yg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var r=0,l=-1,o=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(l=r+i),d!==s||a!==0&&d.nodeType!==3||(o=r+a),d.nodeType===3&&(r+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===t)break t;if(f===n&&++u===i&&(l=r),f===s&&++c===a&&(o=r),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=l===-1||o===-1?null:{start:l,end:o}}else n=null}n=n||{start:0,end:0}}else n=null;for($m={focusedElem:t,selectionRange:n},Zf=!1,pn=e;pn!==null;)if(e=pn,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,pn=t;else for(;pn!==null;){switch(e=pn,s=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&s!==null){t=void 0,n=e,i=s.memoizedProps,s=s.memoizedState,a=n.stateNode;try{var g=Mr(n.type,i,n.elementType===n.type);t=a.getSnapshotBeforeUpdate(g,s),a.__reactInternalSnapshotBeforeUpdate=t}catch(y){At(n,n.return,y)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)tg(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":tg(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(j(163))}if(t=e.sibling,t!==null){t.return=e.return,pn=t;break}pn=e.return}}function aM(t,e,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:ps(t,n),a&4&&Nu(5,n);break;case 1:if(ps(t,n),a&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(r){At(n,n.return,r)}else{var i=Mr(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){At(n,n.return,r)}}a&64&&QS(n),a&512&&su(n,n.return);break;case 3:if(ps(t,n),a&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{iS(t,e)}catch(r){At(n,n.return,r)}}break;case 27:e===null&&a&4&&nM(n);case 26:case 5:ps(t,n),e===null&&a&4&&eM(n),a&512&&su(n,n.return);break;case 12:ps(t,n);break;case 13:ps(t,n),a&4&&rM(t,n),a&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=HC.bind(null,n),aL(t,n))));break;case 22:if(a=n.memoizedState!==null||Pi,!a){e=e!==null&&e.memoizedState!==null||Jt,i=Pi;var s=Jt;Pi=a,(Jt=e)&&!s?ms(t,n,(n.subtreeFlags&8772)!==0):ps(t,n),Pi=i,Jt=s}break;case 30:break;default:ps(t,n)}}function iM(t){var e=t.alternate;e!==null&&(t.alternate=null,iM(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&dg(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Bt=null,Yn=!1;function Di(t,e,n){for(n=n.child;n!==null;)sM(t,e,n),n=n.sibling}function sM(t,e,n){if(la&&typeof la.onCommitFiberUnmount=="function")try{la.onCommitFiberUnmount(Au,n)}catch{}switch(n.tag){case 26:Jt||si(n,e),Di(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Jt||si(n,e);var a=Bt,i=Yn;Fs(n.type)&&(Bt=n.stateNode,Yn=!1),Di(t,e,n),uu(n.stateNode),Bt=a,Yn=i;break;case 5:Jt||si(n,e);case 6:if(a=Bt,i=Yn,Bt=null,Di(t,e,n),Bt=a,Yn=i,Bt!==null)if(Yn)try{(Bt.nodeType===9?Bt.body:Bt.nodeName==="HTML"?Bt.ownerDocument.body:Bt).removeChild(n.stateNode)}catch(s){At(n,e,s)}else try{Bt.removeChild(n.stateNode)}catch(s){At(n,e,s)}break;case 18:Bt!==null&&(Yn?(t=Bt,e_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),bu(t)):e_(Bt,n.stateNode));break;case 4:a=Bt,i=Yn,Bt=n.stateNode.containerInfo,Yn=!0,Di(t,e,n),Bt=a,Yn=i;break;case 0:case 11:case 14:case 15:Jt||Os(2,n,e),Jt||Os(4,n,e),Di(t,e,n);break;case 1:Jt||(si(n,e),a=n.stateNode,typeof a.componentWillUnmount=="function"&&$S(n,e,a)),Di(t,e,n);break;case 21:Di(t,e,n);break;case 22:Jt=(a=Jt)||n.memoizedState!==null,Di(t,e,n),Jt=a;break;default:Di(t,e,n)}}function rM(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bu(t)}catch(n){At(e,e.return,n)}}function PC(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new zv),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new zv),e;default:throw Error(j(435,t.tag))}}function sm(t,e){var n=PC(t);e.forEach(function(a){var i=GC.bind(null,t,a);n.has(a)||(n.add(a),a.then(i,i))})}function ia(t,e){var n=e.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],s=t,r=e,l=r;e:for(;l!==null;){switch(l.tag){case 27:if(Fs(l.type)){Bt=l.stateNode,Yn=!1;break e}break;case 5:Bt=l.stateNode,Yn=!1;break e;case 3:case 4:Bt=l.stateNode.containerInfo,Yn=!0;break e}l=l.return}if(Bt===null)throw Error(j(160));sM(s,r,i),Bt=null,Yn=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)oM(e,t),e=e.sibling}var za=null;function oM(t,e){var n=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ia(e,t),sa(t),a&4&&(Os(3,t,t.return),Nu(3,t),Os(5,t,t.return));break;case 1:ia(e,t),sa(t),a&512&&(Jt||n===null||si(n,n.return)),a&64&&Pi&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=za;if(ia(e,t),sa(t),a&512&&(Jt||n===null||si(n,n.return)),a&4){var s=n!==null?n.memoizedState:null;if(a=t.memoizedState,n===null)if(a===null)if(t.stateNode===null){e:{a=t.type,n=t.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":s=i.getElementsByTagName("title")[0],(!s||s[wu]||s[En]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(a),i.head.insertBefore(s,i.querySelector("head > title"))),Mn(s,a,n),s[En]=t,mn(s),a=s;break e;case"link":var r=s_("link","href",i).get(a+(n.href||""));if(r){for(var l=0;l<r.length;l++)if(s=r[l],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(l,1);break t}}s=i.createElement(a),Mn(s,a,n),i.head.appendChild(s);break;case"meta":if(r=s_("meta","content",i).get(a+(n.content||""))){for(l=0;l<r.length;l++)if(s=r[l],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(l,1);break t}}s=i.createElement(a),Mn(s,a,n),i.head.appendChild(s);break;default:throw Error(j(468,a))}s[En]=t,mn(s),a=s}t.stateNode=a}else r_(i,t.type,t.stateNode);else t.stateNode=i_(i,a,t.memoizedProps);else s!==a?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,a===null?r_(i,t.type,t.stateNode):i_(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&nm(t,t.memoizedProps,n.memoizedProps)}break;case 27:ia(e,t),sa(t),a&512&&(Jt||n===null||si(n,n.return)),n!==null&&a&4&&nm(t,t.memoizedProps,n.memoizedProps);break;case 5:if(ia(e,t),sa(t),a&512&&(Jt||n===null||si(n,n.return)),t.flags&32){i=t.stateNode;try{Ro(i,"")}catch(h){At(t,t.return,h)}}a&4&&t.stateNode!=null&&(i=t.memoizedProps,nm(t,i,n!==null?n.memoizedProps:i)),a&1024&&(im=!0);break;case 6:if(ia(e,t),sa(t),a&4){if(t.stateNode===null)throw Error(j(162));a=t.memoizedProps,n=t.stateNode;try{n.nodeValue=a}catch(h){At(t,t.return,h)}}break;case 3:if(yf=null,i=za,za=Wf(e.containerInfo),ia(e,t),za=i,sa(t),a&4&&n!==null&&n.memoizedState.isDehydrated)try{bu(e.containerInfo)}catch(h){At(t,t.return,h)}im&&(im=!1,lM(t));break;case 4:a=za,za=Wf(t.stateNode.containerInfo),ia(e,t),sa(t),za=a;break;case 12:ia(e,t),sa(t);break;case 13:ia(e,t),sa(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Wg=oi()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,sm(t,a)));break;case 22:i=t.memoizedState!==null;var o=n!==null&&n.memoizedState!==null,u=Pi,c=Jt;if(Pi=u||i,Jt=c||o,ia(e,t),Jt=c,Pi=u,sa(t),a&8192)e:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(n===null||o||Pi||Jt||fr(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){o=n=e;try{if(s=o.stateNode,i)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{l=o.stateNode;var d=o.memoizedProps.style,f=d!=null&&d.hasOwnProperty("display")?d.display:null;l.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(h){At(o,o.return,h)}}}else if(e.tag===6){if(n===null){o=e;try{o.stateNode.nodeValue=i?"":o.memoizedProps}catch(h){At(o,o.return,h)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,sm(t,n))));break;case 19:ia(e,t),sa(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,sm(t,a)));break;case 30:break;case 21:break;default:ia(e,t),sa(t)}}function sa(t){var e=t.flags;if(e&2){try{for(var n,a=t.return;a!==null;){if(tM(a)){n=a;break}a=a.return}if(n==null)throw Error(j(160));switch(n.tag){case 27:var i=n.stateNode,s=am(t);Ff(t,s,i);break;case 5:var r=n.stateNode;n.flags&32&&(Ro(r,""),n.flags&=-33);var l=am(t);Ff(t,l,r);break;case 3:case 4:var o=n.stateNode.containerInfo,u=am(t);qm(t,u,o);break;default:throw Error(j(161))}}catch(c){At(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lM(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;lM(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ps(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)aM(t,e.alternate,e),e=e.sibling}function fr(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Os(4,e,e.return),fr(e);break;case 1:si(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&$S(e,e.return,n),fr(e);break;case 27:uu(e.stateNode);case 26:case 5:si(e,e.return),fr(e);break;case 22:e.memoizedState===null&&fr(e);break;case 30:fr(e);break;default:fr(e)}t=t.sibling}}function ms(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,i=t,s=e,r=s.flags;switch(s.tag){case 0:case 11:case 15:ms(i,s,n),Nu(4,s);break;case 1:if(ms(i,s,n),a=s,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(u){At(a,a.return,u)}if(a=s,i=a.updateQueue,i!==null){var l=a.stateNode;try{var o=i.shared.hiddenCallbacks;if(o!==null)for(i.shared.hiddenCallbacks=null,i=0;i<o.length;i++)aS(o[i],l)}catch(u){At(a,a.return,u)}}n&&r&64&&QS(s),su(s,s.return);break;case 27:nM(s);case 26:case 5:ms(i,s,n),n&&a===null&&r&4&&eM(s),su(s,s.return);break;case 12:ms(i,s,n);break;case 13:ms(i,s,n),n&&r&4&&rM(i,s);break;case 22:s.memoizedState===null&&ms(i,s,n),su(s,s.return);break;case 30:break;default:ms(i,s,n)}e=e.sibling}}function Hg(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Du(n))}function Gg(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Du(t))}function ai(t,e,n,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)uM(t,e,n,a),e=e.sibling}function uM(t,e,n,a){var i=e.flags;switch(e.tag){case 0:case 11:case 15:ai(t,e,n,a),i&2048&&Nu(9,e);break;case 1:ai(t,e,n,a);break;case 3:ai(t,e,n,a),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Du(t)));break;case 12:if(i&2048){ai(t,e,n,a),t=e.stateNode;try{var s=e.memoizedProps,r=s.id,l=s.onPostCommit;typeof l=="function"&&l(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(o){At(e,e.return,o)}}else ai(t,e,n,a);break;case 13:ai(t,e,n,a);break;case 23:break;case 22:s=e.stateNode,r=e.alternate,e.memoizedState!==null?s._visibility&2?ai(t,e,n,a):ru(t,e):s._visibility&2?ai(t,e,n,a):(s._visibility|=2,ro(t,e,n,a,(e.subtreeFlags&10256)!==0)),i&2048&&Hg(r,e);break;case 24:ai(t,e,n,a),i&2048&&Gg(e.alternate,e);break;default:ai(t,e,n,a)}}function ro(t,e,n,a,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var s=t,r=e,l=n,o=a,u=r.flags;switch(r.tag){case 0:case 11:case 15:ro(s,r,l,o,i),Nu(8,r);break;case 23:break;case 22:var c=r.stateNode;r.memoizedState!==null?c._visibility&2?ro(s,r,l,o,i):ru(s,r):(c._visibility|=2,ro(s,r,l,o,i)),i&&u&2048&&Hg(r.alternate,r);break;case 24:ro(s,r,l,o,i),i&&u&2048&&Gg(r.alternate,r);break;default:ro(s,r,l,o,i)}e=e.sibling}}function ru(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,a=e,i=a.flags;switch(a.tag){case 22:ru(n,a),i&2048&&Hg(a.alternate,a);break;case 24:ru(n,a),i&2048&&Gg(a.alternate,a);break;default:ru(n,a)}e=e.sibling}}var Kl=8192;function ao(t){if(t.subtreeFlags&Kl)for(t=t.child;t!==null;)cM(t),t=t.sibling}function cM(t){switch(t.tag){case 26:ao(t),t.flags&Kl&&t.memoizedState!==null&&gL(za,t.memoizedState,t.memoizedProps);break;case 5:ao(t);break;case 3:case 4:var e=za;za=Wf(t.stateNode.containerInfo),ao(t),za=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Kl,Kl=16777216,ao(t),Kl=e):ao(t));break;default:ao(t)}}function fM(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Vl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];pn=a,hM(a,t)}fM(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)dM(t),t=t.sibling}function dM(t){switch(t.tag){case 0:case 11:case 15:Vl(t),t.flags&2048&&Os(9,t,t.return);break;case 3:Vl(t);break;case 12:Vl(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,gf(t)):Vl(t);break;default:Vl(t)}}function gf(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];pn=a,hM(a,t)}fM(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Os(8,e,e.return),gf(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,gf(e));break;default:gf(e)}t=t.sibling}}function hM(t,e){for(;pn!==null;){var n=pn;switch(n.tag){case 0:case 11:case 15:Os(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Du(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,pn=a;else e:for(n=t;pn!==null;){a=pn;var i=a.sibling,s=a.return;if(iM(a),a===n){pn=null;break e}if(i!==null){i.return=s,pn=i;break e}pn=s}}}var UC={getCacheForType:function(t){var e=In(sn),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},OC=typeof WeakMap=="function"?WeakMap:Map,mt=0,It=null,$e=null,it=0,pt=0,ra=null,Ts=!1,Vo=!1,Vg=!1,qi=0,qt=0,Ns=0,xr=0,qg=0,Ia=0,No=0,ou=null,Zn=null,Wm=!1,Wg=0,kf=1/0,zf=null,Es=null,Sn=0,Is=null,Bo=null,wo=0,Xm=0,Ym=null,pM=null,lu=0,Zm=null;function ca(){if((mt&2)!==0&&it!==0)return it&-it;if(Ue.T!==null){var t=Do;return t!==0?t:Yg()}return A_()}function mM(){Ia===0&&(Ia=(it&536870912)===0||lt?S_():536870912);var t=Ra.current;return t!==null&&(t.flags|=32),Ia}function fa(t,e,n){(t===It&&(pt===2||pt===9)||t.cancelPendingCommit!==null)&&(Fo(t,0),As(t,it,Ia,!1)),Lu(t,n),((mt&2)===0||t!==It)&&(t===It&&((mt&2)===0&&(xr|=n),qt===4&&As(t,it,Ia,!1)),ci(t))}function gM(t,e,n){if((mt&6)!==0)throw Error(j(327));var a=!n&&(e&124)===0&&(e&t.expiredLanes)===0||Cu(t,e),i=a?FC(t,e):rm(t,e,!0),s=a;do{if(i===0){Vo&&!a&&As(t,e,0,!1);break}else{if(n=t.current.alternate,s&&!NC(n)){i=rm(t,e,!1),s=!1;continue}if(i===2){if(s=e,t.errorRecoveryDisabledLanes&s)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var l=t;i=ou;var o=l.current.memoizedState.isDehydrated;if(o&&(Fo(l,r).flags|=256),r=rm(l,r,!1),r!==2){if(Vg&&!o){l.errorRecoveryDisabledLanes|=s,xr|=s,i=4;break e}s=Zn,Zn=i,s!==null&&(Zn===null?Zn=s:Zn.push.apply(Zn,s))}i=r}if(s=!1,i!==2)continue}}if(i===1){Fo(t,0),As(t,e,0,!0);break}e:{switch(a=t,s=i,s){case 0:case 1:throw Error(j(345));case 4:if((e&4194048)!==e)break;case 6:As(a,e,Ia,!Ts);break e;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(j(329))}if((e&62914560)===e&&(i=Wg+300-oi(),10<i)){if(As(a,e,Ia,!Ts),Jf(a,0,!0)!==0)break e;a.timeoutHandle=OM(Hv.bind(null,a,n,Zn,zf,Wm,e,Ia,xr,No,Ts,s,2,-0,0),i);break e}Hv(a,n,Zn,zf,Wm,e,Ia,xr,No,Ts,s,0,-0,0)}}break}while(!0);ci(t)}function Hv(t,e,n,a,i,s,r,l,o,u,c,d,f,h){if(t.timeoutHandle=-1,d=e.subtreeFlags,(d&8192||(d&16785408)===16785408)&&(vu={stylesheets:null,count:0,unsuspend:mL},cM(e),d=xL(),d!==null)){t.cancelPendingCommit=d(Vv.bind(null,t,e,s,n,a,i,r,l,o,c,1,f,h)),As(t,s,r,!u);return}Vv(t,e,s,n,a,i,r,l,o)}function NC(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],s=i.getSnapshot;i=i.value;try{if(!da(s(),i))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function As(t,e,n,a){e&=~qg,e&=~xr,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var i=e;0<i;){var s=31-ua(i),r=1<<s;a[s]=-1,i&=~r}n!==0&&b_(t,n,e)}function rd(){return(mt&6)===0?(Bu(0,!1),!1):!0}function Xg(){if($e!==null){if(pt===0)var t=$e.return;else t=$e,Bi=Cr=null,Dg(t),Lo=null,gu=0,t=$e;for(;t!==null;)jS(t.alternate,t),t=t.return;$e=null}}function Fo(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,QC(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Xg(),It=t,$e=n=ki(t.current,null),it=e,pt=0,ra=null,Ts=!1,Vo=Cu(t,e),Vg=!1,No=Ia=qg=xr=Ns=qt=0,Zn=ou=null,Wm=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var i=31-ua(a),s=1<<i;e|=t[i],a&=~s}return qi=e,ed(),n}function xM(t,e){Je=null,Ue.H=Pf,e===Pu||e===nd?(e=vv(),pt=3):e===tS?(e=vv(),pt=4):pt=e===WS?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ra=e,$e===null&&(qt=1,Nf(t,Ea(e,t.current)))}function yM(){var t=Ue.H;return Ue.H=Pf,t===null?Pf:t}function vM(){var t=Ue.A;return Ue.A=UC,t}function Km(){qt=4,Ts||(it&4194048)!==it&&Ra.current!==null||(Vo=!0),(Ns&134217727)===0&&(xr&134217727)===0||It===null||As(It,it,Ia,!1)}function rm(t,e,n){var a=mt;mt|=2;var i=yM(),s=vM();(It!==t||it!==e)&&(zf=null,Fo(t,e)),e=!1;var r=qt;e:do try{if(pt!==0&&$e!==null){var l=$e,o=ra;switch(pt){case 8:Xg(),r=6;break e;case 3:case 2:case 9:case 6:Ra.current===null&&(e=!0);var u=pt;if(pt=0,ra=null,_o(t,l,o,u),n&&Vo){r=0;break e}break;default:u=pt,pt=0,ra=null,_o(t,l,o,u)}}BC(),r=qt;break}catch(c){xM(t,c)}while(!0);return e&&t.shellSuspendCounter++,Bi=Cr=null,mt=a,Ue.H=i,Ue.A=s,$e===null&&(It=null,it=0,ed()),r}function BC(){for(;$e!==null;)_M($e)}function FC(t,e){var n=mt;mt|=2;var a=yM(),i=vM();It!==t||it!==e?(zf=null,kf=oi()+500,Fo(t,e)):Vo=Cu(t,e);e:do try{if(pt!==0&&$e!==null){e=$e;var s=ra;t:switch(pt){case 1:pt=0,ra=null,_o(t,e,s,1);break;case 2:case 9:if(yv(s)){pt=0,ra=null,Gv(e);break}e=function(){pt!==2&&pt!==9||It!==t||(pt=7),ci(t)},s.then(e,e);break e;case 3:pt=7;break e;case 4:pt=5;break e;case 7:yv(s)?(pt=0,ra=null,Gv(e)):(pt=0,ra=null,_o(t,e,s,7));break;case 5:var r=null;switch($e.tag){case 26:r=$e.memoizedState;case 5:case 27:var l=$e;if(!r||kM(r)){pt=0,ra=null;var o=l.sibling;if(o!==null)$e=o;else{var u=l.return;u!==null?($e=u,od(u)):$e=null}break t}}pt=0,ra=null,_o(t,e,s,5);break;case 6:pt=0,ra=null,_o(t,e,s,6);break;case 8:Xg(),qt=6;break e;default:throw Error(j(462))}}kC();break}catch(c){xM(t,c)}while(!0);return Bi=Cr=null,Ue.H=a,Ue.A=i,mt=n,$e!==null?0:(It=null,it=0,ed(),qt)}function kC(){for(;$e!==null&&!oA();)_M($e)}function _M(t){var e=JS(t.alternate,t,qi);t.memoizedProps=t.pendingProps,e===null?od(t):$e=e}function Gv(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Ov(n,e,e.pendingProps,e.type,void 0,it);break;case 11:e=Ov(n,e,e.pendingProps,e.type.render,e.ref,it);break;case 5:Dg(e);default:jS(n,e),e=$e=j_(e,qi),e=JS(n,e,qi)}t.memoizedProps=t.pendingProps,e===null?od(t):$e=e}function _o(t,e,n,a){Bi=Cr=null,Dg(e),Lo=null,gu=0;var i=e.return;try{if(wC(t,i,e,n,it)){qt=1,Nf(t,Ea(n,t.current)),$e=null;return}}catch(s){if(i!==null)throw $e=i,s;qt=1,Nf(t,Ea(n,t.current)),$e=null;return}e.flags&32768?(lt||a===1?t=!0:Vo||(it&536870912)!==0?t=!1:(Ts=t=!0,(a===2||a===9||a===3||a===6)&&(a=Ra.current,a!==null&&a.tag===13&&(a.flags|=16384))),SM(e,t)):od(e)}function od(t){var e=t;do{if((e.flags&32768)!==0){SM(e,Ts);return}t=e.return;var n=IC(e.alternate,e,qi);if(n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);qt===0&&(qt=5)}function SM(t,e){do{var n=RC(t.alternate,t);if(n!==null){n.flags&=32767,$e=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){$e=t;return}$e=t=n}while(t!==null);qt=6,$e=null}function Vv(t,e,n,a,i,s,r,l,o){t.cancelPendingCommit=null;do ld();while(Sn!==0);if((mt&6)!==0)throw Error(j(327));if(e!==null){if(e===t.current)throw Error(j(177));if(s=e.lanes|e.childLanes,s|=vg,xA(t,n,s,r,l,o),t===It&&($e=It=null,it=0),Bo=e,Is=t,wo=n,Xm=s,Ym=i,pM=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,VC(bf,function(){return CM(!0),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=Ue.T,Ue.T=null,i=ut.p,ut.p=2,r=mt,mt|=4;try{DC(t,e,n)}finally{mt=r,ut.p=i,Ue.T=a}}Sn=1,MM(),bM(),TM()}}function MM(){if(Sn===1){Sn=0;var t=Is,e=Bo,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=Ue.T,Ue.T=null;var a=ut.p;ut.p=2;var i=mt;mt|=4;try{oM(e,t);var s=$m,r=V_(t.containerInfo),l=s.focusedElem,o=s.selectionRange;if(r!==l&&l&&l.ownerDocument&&G_(l.ownerDocument.documentElement,l)){if(o!==null&&yg(l)){var u=o.start,c=o.end;if(c===void 0&&(c=u),"selectionStart"in l)l.selectionStart=u,l.selectionEnd=Math.min(c,l.value.length);else{var d=l.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var h=f.getSelection(),g=l.textContent.length,y=Math.min(o.start,g),m=o.end===void 0?y:Math.min(o.end,g);!h.extend&&y>m&&(r=m,m=y,y=r);var p=cv(l,y),x=cv(l,m);if(p&&x&&(h.rangeCount!==1||h.anchorNode!==p.node||h.anchorOffset!==p.offset||h.focusNode!==x.node||h.focusOffset!==x.offset)){var v=d.createRange();v.setStart(p.node,p.offset),h.removeAllRanges(),y>m?(h.addRange(v),h.extend(x.node,x.offset)):(v.setEnd(x.node,x.offset),h.addRange(v))}}}}for(d=[],h=l;h=h.parentNode;)h.nodeType===1&&d.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<d.length;l++){var M=d[l];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Zf=!!Qm,$m=Qm=null}finally{mt=i,ut.p=a,Ue.T=n}}t.current=e,Sn=2}}function bM(){if(Sn===2){Sn=0;var t=Is,e=Bo,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=Ue.T,Ue.T=null;var a=ut.p;ut.p=2;var i=mt;mt|=4;try{aM(t,e.alternate,e)}finally{mt=i,ut.p=a,Ue.T=n}}Sn=3}}function TM(){if(Sn===4||Sn===3){Sn=0,lA();var t=Is,e=Bo,n=wo,a=pM;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Sn=5:(Sn=0,Bo=Is=null,AM(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Es=null),fg(n),e=e.stateNode,la&&typeof la.onCommitFiberRoot=="function")try{la.onCommitFiberRoot(Au,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=Ue.T,i=ut.p,ut.p=2,Ue.T=null;try{for(var s=t.onRecoverableError,r=0;r<a.length;r++){var l=a[r];s(l.value,{componentStack:l.stack})}}finally{Ue.T=e,ut.p=i}}(wo&3)!==0&&ld(),ci(t),i=t.pendingLanes,(n&4194090)!==0&&(i&42)!==0?t===Zm?lu++:(lu=0,Zm=t):lu=0,Bu(0,!1)}}function AM(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Du(e)))}function ld(t){return MM(),bM(),TM(),CM(t)}function CM(){if(Sn!==5)return!1;var t=Is,e=Xm;Xm=0;var n=fg(wo),a=Ue.T,i=ut.p;try{ut.p=32>n?32:n,Ue.T=null,n=Ym,Ym=null;var s=Is,r=wo;if(Sn=0,Bo=Is=null,wo=0,(mt&6)!==0)throw Error(j(331));var l=mt;if(mt|=4,dM(s.current),uM(s,s.current,r,n),mt=l,Bu(0,!1),la&&typeof la.onPostCommitFiberRoot=="function")try{la.onPostCommitFiberRoot(Au,s)}catch{}return!0}finally{ut.p=i,Ue.T=a,AM(t,e)}}function qv(t,e,n){e=Ea(n,e),e=Hm(t.stateNode,e,2),t=ws(t,e,2),t!==null&&(Lu(t,2),ci(t))}function At(t,e,n){if(t.tag===3)qv(t,t,n);else for(;e!==null;){if(e.tag===3){qv(e,t,n);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Es===null||!Es.has(a))){t=Ea(n,t),n=VS(2),a=ws(e,n,2),a!==null&&(qS(n,a,e,t),Lu(a,2),ci(a));break}}e=e.return}}function om(t,e,n){var a=t.pingCache;if(a===null){a=t.pingCache=new OC;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(n)||(Vg=!0,i.add(n),t=zC.bind(null,t,e,n),e.then(t,t))}function zC(t,e,n){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,It===t&&(it&n)===n&&(qt===4||qt===3&&(it&62914560)===it&&300>oi()-Wg?(mt&2)===0&&Fo(t,0):qg|=n,No===it&&(No=0)),ci(t)}function LM(t,e){e===0&&(e=M_()),t=Go(t,e),t!==null&&(Lu(t,e),ci(t))}function HC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),LM(t,n)}function GC(t,e){var n=0;switch(t.tag){case 13:var a=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(j(314))}a!==null&&a.delete(e),LM(t,n)}function VC(t,e){return ug(t,e)}var Hf=null,oo=null,Jm=!1,Gf=!1,lm=!1,yr=0;function ci(t){t!==oo&&t.next===null&&(oo===null?Hf=oo=t:oo=oo.next=t),Gf=!0,Jm||(Jm=!0,WC())}function Bu(t,e){if(!lm&&Gf){lm=!0;do for(var n=!1,a=Hf;a!==null;){if(!e)if(t!==0){var i=a.pendingLanes;if(i===0)var s=0;else{var r=a.suspendedLanes,l=a.pingedLanes;s=(1<<31-ua(42|t)+1)-1,s&=i&~(r&~l),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Wv(a,s))}else s=it,s=Jf(a,a===It?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||Cu(a,s)||(n=!0,Wv(a,s));a=a.next}while(n);lm=!1}}function qC(){wM()}function wM(){Gf=Jm=!1;var t=0;yr!==0&&(jC()&&(t=yr),yr=0);for(var e=oi(),n=null,a=Hf;a!==null;){var i=a.next,s=EM(a,e);s===0?(a.next=null,n===null?Hf=i:n.next=i,i===null&&(oo=n)):(n=a,(t!==0||(s&3)!==0)&&(Gf=!0)),a=i}Bu(t,!1)}function EM(t,e){for(var n=t.suspendedLanes,a=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var r=31-ua(s),l=1<<r,o=i[r];o===-1?((l&n)===0||(l&a)!==0)&&(i[r]=gA(l,e)):o<=e&&(t.expiredLanes|=l),s&=~l}if(e=It,n=it,n=Jf(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,n===0||t===e&&(pt===2||pt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Op(a),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Cu(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(a!==null&&Op(a),fg(n)){case 2:case 8:n=v_;break;case 32:n=bf;break;case 268435456:n=__;break;default:n=bf}return a=IM.bind(null,t),n=ug(n,a),t.callbackPriority=e,t.callbackNode=n,e}return a!==null&&a!==null&&Op(a),t.callbackPriority=2,t.callbackNode=null,2}function IM(t,e){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(ld(!0)&&t.callbackNode!==n)return null;var a=it;return a=Jf(t,t===It?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(gM(t,a,e),EM(t,oi()),t.callbackNode!=null&&t.callbackNode===n?IM.bind(null,t):null)}function Wv(t,e){if(ld())return null;gM(t,e,!0)}function WC(){$C(function(){(mt&6)!==0?ug(y_,qC):wM()})}function Yg(){return yr===0&&(yr=S_()),yr}function Xv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:lf(""+t)}function Yv(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function XC(t,e,n,a,i){if(e==="submit"&&n&&n.stateNode===i){var s=Xv((i[Kn]||null).action),r=a.submitter;r&&(e=(e=r[Kn]||null)?Xv(e.formAction):r.getAttribute("formAction"),e!==null&&(s=e,r=null));var l=new jf("action","action",null,a,i);t.push({event:l,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(yr!==0){var o=r?Yv(i,r):new FormData(i);km(n,{pending:!0,data:o,method:i.method,action:s},null,o)}}else typeof s=="function"&&(l.preventDefault(),o=r?Yv(i,r):new FormData(i),km(n,{pending:!0,data:o,method:i.method,action:s},s,o))},currentTarget:i}]})}}for(tf=0;tf<Lm.length;tf++)nf=Lm[tf],Zv=nf.toLowerCase(),Kv=nf[0].toUpperCase()+nf.slice(1),Ga(Zv,"on"+Kv);var nf,Zv,Kv,tf;Ga(W_,"onAnimationEnd");Ga(X_,"onAnimationIteration");Ga(Y_,"onAnimationStart");Ga("dblclick","onDoubleClick");Ga("focusin","onFocus");Ga("focusout","onBlur");Ga(fC,"onTransitionRun");Ga(dC,"onTransitionStart");Ga(hC,"onTransitionCancel");Ga(Z_,"onTransitionEnd");Io("onMouseEnter",["mouseout","mouseover"]);Io("onMouseLeave",["mouseout","mouseover"]);Io("onPointerEnter",["pointerout","pointerover"]);Io("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xu));function RM(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var a=t[n],i=a.event;a=a.listeners;e:{var s=void 0;if(e)for(var r=a.length-1;0<=r;r--){var l=a[r],o=l.instance,u=l.currentTarget;if(l=l.listener,o!==s&&i.isPropagationStopped())break e;s=l,i.currentTarget=u;try{s(i)}catch(c){Of(c)}i.currentTarget=null,s=o}else for(r=0;r<a.length;r++){if(l=a[r],o=l.instance,u=l.currentTarget,l=l.listener,o!==s&&i.isPropagationStopped())break e;s=l,i.currentTarget=u;try{s(i)}catch(c){Of(c)}i.currentTarget=null,s=o}}}}function Qe(t,e){var n=e[_m];n===void 0&&(n=e[_m]=new Set);var a=t+"__bubble";n.has(a)||(DM(e,t,2,!1),n.add(a))}function um(t,e,n){var a=0;e&&(a|=4),DM(n,t,a,e)}var af="_reactListening"+Math.random().toString(36).slice(2);function Zg(t){if(!t[af]){t[af]=!0,C_.forEach(function(n){n!=="selectionchange"&&(YC.has(n)||um(n,!1,t),um(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[af]||(e[af]=!0,um("selectionchange",!1,e))}}function DM(t,e,n,a){switch(qM(e)){case 2:var i=_L;break;case 8:i=SL;break;default:i=Qg}n=i.bind(null,e,n,t),i=void 0,!Tm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function cm(t,e,n,a,i){var s=a;if((e&1)===0&&(e&2)===0&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var l=a.stateNode.containerInfo;if(l===i)break;if(r===4)for(r=a.return;r!==null;){var o=r.tag;if((o===3||o===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;l!==null;){if(r=co(l),r===null)return;if(o=r.tag,o===5||o===6||o===26||o===27){a=s=r;continue e}l=l.parentNode}}a=a.return}U_(function(){var u=s,c=pg(n),d=[];e:{var f=K_.get(t);if(f!==void 0){var h=jf,g=t;switch(t){case"keypress":if(cf(n)===0)break e;case"keydown":case"keyup":h=VA;break;case"focusin":g="focus",h=Vp;break;case"focusout":g="blur",h=Vp;break;case"beforeblur":case"afterblur":h=Vp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=tv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=RA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=XA;break;case W_:case X_:case Y_:h=UA;break;case Z_:h=ZA;break;case"scroll":case"scrollend":h=EA;break;case"wheel":h=JA;break;case"copy":case"cut":case"paste":h=NA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=av;break;case"toggle":case"beforetoggle":h=QA}var y=(e&4)!==0,m=!y&&(t==="scroll"||t==="scrollend"),p=y?f!==null?f+"Capture":null:f;y=[];for(var x=u,v;x!==null;){var M=x;if(v=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||v===null||p===null||(M=fu(x,p),M!=null&&y.push(yu(x,M,v))),m)break;x=x.return}0<y.length&&(f=new h(f,g,null,n,c),d.push({event:f,listeners:y}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",f&&n!==bm&&(g=n.relatedTarget||n.fromElement)&&(co(g)||g[zo]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=u,g=g?co(g):null,g!==null&&(m=Tu(g),y=g.tag,g!==m||y!==5&&y!==27&&y!==6)&&(g=null)):(h=null,g=u),h!==g)){if(y=tv,M="onMouseLeave",p="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=av,M="onPointerLeave",p="onPointerEnter",x="pointer"),m=h==null?f:Zl(h),v=g==null?f:Zl(g),f=new y(M,x+"leave",h,n,c),f.target=m,f.relatedTarget=v,M=null,co(c)===u&&(y=new y(p,x+"enter",g,n,c),y.target=v,y.relatedTarget=m,M=y),m=M,h&&g)t:{for(y=h,p=g,x=0,v=y;v;v=io(v))x++;for(v=0,M=p;M;M=io(M))v++;for(;0<x-v;)y=io(y),x--;for(;0<v-x;)p=io(p),v--;for(;x--;){if(y===p||p!==null&&y===p.alternate)break t;y=io(y),p=io(p)}y=null}else y=null;h!==null&&Jv(d,f,h,y,!1),g!==null&&m!==null&&Jv(d,m,g,y,!0)}}e:{if(f=u?Zl(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var C=ov;else if(rv(f))if(z_)C=lC;else{C=rC;var T=sC}else h=f.nodeName,!h||h.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?u&&hg(u.elementType)&&(C=ov):C=oC;if(C&&(C=C(t,u))){k_(d,C,n,c);break e}T&&T(t,f,u),t==="focusout"&&u&&f.type==="number"&&u.memoizedProps.value!=null&&Mm(f,"number",f.value)}switch(T=u?Zl(u):window,t){case"focusin":(rv(T)||T.contentEditable==="true")&&(po=T,Am=u,Ql=null);break;case"focusout":Ql=Am=po=null;break;case"mousedown":Cm=!0;break;case"contextmenu":case"mouseup":case"dragend":Cm=!1,fv(d,n,c);break;case"selectionchange":if(cC)break;case"keydown":case"keyup":fv(d,n,c)}var L;if(xg)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ho?B_(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(N_&&n.locale!=="ko"&&(ho||_!=="onCompositionStart"?_==="onCompositionEnd"&&ho&&(L=O_()):(bs=c,mg="value"in bs?bs.value:bs.textContent,ho=!0)),T=Vf(u,_),0<T.length&&(_=new nv(_,t,null,n,c),d.push({event:_,listeners:T}),L?_.data=L:(L=F_(n),L!==null&&(_.data=L)))),(L=eC?tC(t,n):nC(t,n))&&(_=Vf(u,"onBeforeInput"),0<_.length&&(T=new nv("onBeforeInput","beforeinput",null,n,c),d.push({event:T,listeners:_}),T.data=L)),XC(d,t,u,n,c)}RM(d,e)})}function yu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vf(t,e){for(var n=e+"Capture",a=[];t!==null;){var i=t,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=fu(t,n),i!=null&&a.unshift(yu(t,i,s)),i=fu(t,e),i!=null&&a.push(yu(t,i,s))),t.tag===3)return a;t=t.return}return[]}function io(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Jv(t,e,n,a,i){for(var s=e._reactName,r=[];n!==null&&n!==a;){var l=n,o=l.alternate,u=l.stateNode;if(l=l.tag,o!==null&&o===a)break;l!==5&&l!==26&&l!==27||u===null||(o=u,i?(u=fu(n,s),u!=null&&r.unshift(yu(n,u,o))):i||(u=fu(n,s),u!=null&&r.push(yu(n,u,o)))),n=n.return}r.length!==0&&t.push({event:e,listeners:r})}var ZC=/\r\n?/g,KC=/\u0000|\uFFFD/g;function jv(t){return(typeof t=="string"?t:""+t).replace(ZC,`
`).replace(KC,"")}function PM(t,e){return e=jv(e),jv(t)===e}function ud(){}function vt(t,e,n,a,i,s){switch(n){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Ro(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Ro(t,""+a);break;case"className":Xc(t,"class",a);break;case"tabIndex":Xc(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Xc(t,n,a);break;case"style":P_(t,a,s);break;case"data":if(e!=="object"){Xc(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=lf(""+a),t.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(e!=="input"&&vt(t,e,"name",i.name,i,null),vt(t,e,"formEncType",i.formEncType,i,null),vt(t,e,"formMethod",i.formMethod,i,null),vt(t,e,"formTarget",i.formTarget,i,null)):(vt(t,e,"encType",i.encType,i,null),vt(t,e,"method",i.method,i,null),vt(t,e,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=lf(""+a),t.setAttribute(n,a);break;case"onClick":a!=null&&(t.onclick=ud);break;case"onScroll":a!=null&&Qe("scroll",t);break;case"onScrollEnd":a!=null&&Qe("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(j(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(j(60));t.innerHTML=n}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}n=lf(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""+a):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":a===!0?t.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,a):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(n,a):t.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(n):t.setAttribute(n,a);break;case"popover":Qe("beforetoggle",t),Qe("toggle",t),of(t,"popover",a);break;case"xlinkActuate":Ii(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ii(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ii(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ii(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ii(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ii(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ii(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ii(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ii(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":of(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=LA.get(n)||n,of(t,n,a))}}function jm(t,e,n,a,i,s){switch(n){case"style":P_(t,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(j(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(j(60));t.innerHTML=n}}break;case"children":typeof a=="string"?Ro(t,a):(typeof a=="number"||typeof a=="bigint")&&Ro(t,""+a);break;case"onScroll":a!=null&&Qe("scroll",t);break;case"onScrollEnd":a!=null&&Qe("scrollend",t);break;case"onClick":a!=null&&(t.onclick=ud);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!L_.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),e=n.slice(2,i?n.length-7:void 0),s=t[Kn]||null,s=s!=null?s[n]:null,typeof s=="function"&&t.removeEventListener(e,s,i),typeof a=="function")){typeof s!="function"&&s!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,a,i);break e}n in t?t[n]=a:a===!0?t.setAttribute(n,""):of(t,n,a)}}}function Mn(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qe("error",t),Qe("load",t);var a=!1,i=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(j(137,e));default:vt(t,e,s,r,n,null)}}i&&vt(t,e,"srcSet",n.srcSet,n,null),a&&vt(t,e,"src",n.src,n,null);return;case"input":Qe("invalid",t);var l=s=r=i=null,o=null,u=null;for(a in n)if(n.hasOwnProperty(a)){var c=n[a];if(c!=null)switch(a){case"name":i=c;break;case"type":r=c;break;case"checked":o=c;break;case"defaultChecked":u=c;break;case"value":s=c;break;case"defaultValue":l=c;break;case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(j(137,e));break;default:vt(t,e,a,c,n,null)}}I_(t,s,l,o,u,r,i,!1),Tf(t);return;case"select":Qe("invalid",t),a=r=s=null;for(i in n)if(n.hasOwnProperty(i)&&(l=n[i],l!=null))switch(i){case"value":s=l;break;case"defaultValue":r=l;break;case"multiple":a=l;default:vt(t,e,i,l,n,null)}e=s,n=r,t.multiple=!!a,e!=null?Mo(t,!!a,e,!1):n!=null&&Mo(t,!!a,n,!0);return;case"textarea":Qe("invalid",t),s=i=a=null;for(r in n)if(n.hasOwnProperty(r)&&(l=n[r],l!=null))switch(r){case"value":a=l;break;case"defaultValue":i=l;break;case"children":s=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(j(91));break;default:vt(t,e,r,l,n,null)}D_(t,a,i,s),Tf(t);return;case"option":for(o in n)if(n.hasOwnProperty(o)&&(a=n[o],a!=null))switch(o){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:vt(t,e,o,a,n,null)}return;case"dialog":Qe("beforetoggle",t),Qe("toggle",t),Qe("cancel",t),Qe("close",t);break;case"iframe":case"object":Qe("load",t);break;case"video":case"audio":for(a=0;a<xu.length;a++)Qe(xu[a],t);break;case"image":Qe("error",t),Qe("load",t);break;case"details":Qe("toggle",t);break;case"embed":case"source":case"link":Qe("error",t),Qe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&(a=n[u],a!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(j(137,e));default:vt(t,e,u,a,n,null)}return;default:if(hg(e)){for(c in n)n.hasOwnProperty(c)&&(a=n[c],a!==void 0&&jm(t,e,c,a,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(a=n[l],a!=null&&vt(t,e,l,a,n,null))}function JC(t,e,n,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,r=null,l=null,o=null,u=null,c=null;for(h in n){var d=n[h];if(n.hasOwnProperty(h)&&d!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":o=d;default:a.hasOwnProperty(h)||vt(t,e,h,null,a,d)}}for(var f in a){var h=a[f];if(d=n[f],a.hasOwnProperty(f)&&(h!=null||d!=null))switch(f){case"type":s=h;break;case"name":i=h;break;case"checked":u=h;break;case"defaultChecked":c=h;break;case"value":r=h;break;case"defaultValue":l=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(j(137,e));break;default:h!==d&&vt(t,e,f,h,a,d)}}Sm(t,r,l,o,u,c,s,i);return;case"select":h=r=l=f=null;for(s in n)if(o=n[s],n.hasOwnProperty(s)&&o!=null)switch(s){case"value":break;case"multiple":h=o;default:a.hasOwnProperty(s)||vt(t,e,s,null,a,o)}for(i in a)if(s=a[i],o=n[i],a.hasOwnProperty(i)&&(s!=null||o!=null))switch(i){case"value":f=s;break;case"defaultValue":l=s;break;case"multiple":r=s;default:s!==o&&vt(t,e,i,s,a,o)}e=l,n=r,a=h,f!=null?Mo(t,!!n,f,!1):!!a!=!!n&&(e!=null?Mo(t,!!n,e,!0):Mo(t,!!n,n?[]:"",!1));return;case"textarea":h=f=null;for(l in n)if(i=n[l],n.hasOwnProperty(l)&&i!=null&&!a.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:vt(t,e,l,null,a,i)}for(r in a)if(i=a[r],s=n[r],a.hasOwnProperty(r)&&(i!=null||s!=null))switch(r){case"value":f=i;break;case"defaultValue":h=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(j(91));break;default:i!==s&&vt(t,e,r,i,a,s)}R_(t,f,h);return;case"option":for(var g in n)if(f=n[g],n.hasOwnProperty(g)&&f!=null&&!a.hasOwnProperty(g))switch(g){case"selected":t.selected=!1;break;default:vt(t,e,g,null,a,f)}for(o in a)if(f=a[o],h=n[o],a.hasOwnProperty(o)&&f!==h&&(f!=null||h!=null))switch(o){case"selected":t.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:vt(t,e,o,f,a,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var y in n)f=n[y],n.hasOwnProperty(y)&&f!=null&&!a.hasOwnProperty(y)&&vt(t,e,y,null,a,f);for(u in a)if(f=a[u],h=n[u],a.hasOwnProperty(u)&&f!==h&&(f!=null||h!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(j(137,e));break;default:vt(t,e,u,f,a,h)}return;default:if(hg(e)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!a.hasOwnProperty(m)&&jm(t,e,m,void 0,a,f);for(c in a)f=a[c],h=n[c],!a.hasOwnProperty(c)||f===h||f===void 0&&h===void 0||jm(t,e,c,f,a,h);return}}for(var p in n)f=n[p],n.hasOwnProperty(p)&&f!=null&&!a.hasOwnProperty(p)&&vt(t,e,p,null,a,f);for(d in a)f=a[d],h=n[d],!a.hasOwnProperty(d)||f===h||f==null&&h==null||vt(t,e,d,f,a,h)}var Qm=null,$m=null;function qf(t){return t.nodeType===9?t:t.ownerDocument}function Qv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function UM(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function eg(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fm=null;function jC(){var t=window.event;return t&&t.type==="popstate"?t===fm?!1:(fm=t,!0):(fm=null,!1)}var OM=typeof setTimeout=="function"?setTimeout:void 0,QC=typeof clearTimeout=="function"?clearTimeout:void 0,$v=typeof Promise=="function"?Promise:void 0,$C=typeof queueMicrotask=="function"?queueMicrotask:typeof $v<"u"?function(t){return $v.resolve(null).then(t).catch(eL)}:OM;function eL(t){setTimeout(function(){throw t})}function Fs(t){return t==="head"}function e_(t,e){var n=e,a=0,i=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(0<a&&8>a){n=a;var r=t.ownerDocument;if(n&1&&uu(r.documentElement),n&2&&uu(r.body),n&4)for(n=r.head,uu(n),r=n.firstChild;r;){var l=r.nextSibling,o=r.nodeName;r[wu]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=l}}if(i===0){t.removeChild(s),bu(e);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:a=n.charCodeAt(0)-48;else a=0;n=s}while(n);bu(e)}function tg(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":tg(n),dg(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function tL(t,e,n,a){for(;t.nodeType===1;){var i=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[wu])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=Ha(t.nextSibling),t===null)break}return null}function nL(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ha(t.nextSibling),t===null))return null;return t}function ng(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function aL(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var a=function(){e(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ha(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var ag=null;function t_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function NM(t,e,n){switch(e=qf(n),t){case"html":if(t=e.documentElement,!t)throw Error(j(452));return t;case"head":if(t=e.head,!t)throw Error(j(453));return t;case"body":if(t=e.body,!t)throw Error(j(454));return t;default:throw Error(j(451))}}function uu(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);dg(t)}var Da=new Map,n_=new Set;function Wf(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Wi=ut.d;ut.d={f:iL,r:sL,D:rL,C:oL,L:lL,m:uL,X:fL,S:cL,M:dL};function iL(){var t=Wi.f(),e=rd();return t||e}function sL(t){var e=Ho(t);e!==null&&e.tag===5&&e.type==="form"?ES(e):Wi.r(t)}var qo=typeof document>"u"?null:document;function BM(t,e,n){var a=qo;if(a&&typeof e=="string"&&e){var i=wa(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),n_.has(i)||(n_.add(i),t={rel:t,crossOrigin:n,href:e},a.querySelector(i)===null&&(e=a.createElement("link"),Mn(e,"link",t),mn(e),a.head.appendChild(e)))}}function rL(t){Wi.D(t),BM("dns-prefetch",t,null)}function oL(t,e){Wi.C(t,e),BM("preconnect",t,e)}function lL(t,e,n){Wi.L(t,e,n);var a=qo;if(a&&t&&e){var i='link[rel="preload"][as="'+wa(e)+'"]';e==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+wa(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+wa(n.imageSizes)+'"]')):i+='[href="'+wa(t)+'"]';var s=i;switch(e){case"style":s=ko(t);break;case"script":s=Wo(t)}Da.has(s)||(t=Ut({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Da.set(s,t),a.querySelector(i)!==null||e==="style"&&a.querySelector(Fu(s))||e==="script"&&a.querySelector(ku(s))||(e=a.createElement("link"),Mn(e,"link",t),mn(e),a.head.appendChild(e)))}}function uL(t,e){Wi.m(t,e);var n=qo;if(n&&t){var a=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+wa(a)+'"][href="'+wa(t)+'"]',s=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Wo(t)}if(!Da.has(s)&&(t=Ut({rel:"modulepreload",href:t},e),Da.set(s,t),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ku(s)))return}a=n.createElement("link"),Mn(a,"link",t),mn(a),n.head.appendChild(a)}}}function cL(t,e,n){Wi.S(t,e,n);var a=qo;if(a&&t){var i=So(a).hoistableStyles,s=ko(t);e=e||"default";var r=i.get(s);if(!r){var l={loading:0,preload:null};if(r=a.querySelector(Fu(s)))l.loading=5;else{t=Ut({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Da.get(s))&&Kg(t,n);var o=r=a.createElement("link");mn(o),Mn(o,"link",t),o._p=new Promise(function(u,c){o.onload=u,o.onerror=c}),o.addEventListener("load",function(){l.loading|=1}),o.addEventListener("error",function(){l.loading|=2}),l.loading|=4,xf(r,e,a)}r={type:"stylesheet",instance:r,count:1,state:l},i.set(s,r)}}}function fL(t,e){Wi.X(t,e);var n=qo;if(n&&t){var a=So(n).hoistableScripts,i=Wo(t),s=a.get(i);s||(s=n.querySelector(ku(i)),s||(t=Ut({src:t,async:!0},e),(e=Da.get(i))&&Jg(t,e),s=n.createElement("script"),mn(s),Mn(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(i,s))}}function dL(t,e){Wi.M(t,e);var n=qo;if(n&&t){var a=So(n).hoistableScripts,i=Wo(t),s=a.get(i);s||(s=n.querySelector(ku(i)),s||(t=Ut({src:t,async:!0,type:"module"},e),(e=Da.get(i))&&Jg(t,e),s=n.createElement("script"),mn(s),Mn(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(i,s))}}function a_(t,e,n,a){var i=(i=Cs.current)?Wf(i):null;if(!i)throw Error(j(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=ko(n.href),n=So(i).hoistableStyles,a=n.get(e),a||(a={type:"style",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=ko(n.href);var s=So(i).hoistableStyles,r=s.get(t);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,r),(s=i.querySelector(Fu(t)))&&!s._p&&(r.instance=s,r.state.loading=5),Da.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Da.set(t,n),s||hL(i,t,n,r.state))),e&&a===null)throw Error(j(528,""));return r}if(e&&a!==null)throw Error(j(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Wo(n),n=So(i).hoistableScripts,a=n.get(e),a||(a={type:"script",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(j(444,t))}}function ko(t){return'href="'+wa(t)+'"'}function Fu(t){return'link[rel="stylesheet"]['+t+"]"}function FM(t){return Ut({},t,{"data-precedence":t.precedence,precedence:null})}function hL(t,e,n,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Mn(e,"link",n),mn(e),t.head.appendChild(e))}function Wo(t){return'[src="'+wa(t)+'"]'}function ku(t){return"script[async]"+t}function i_(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+wa(n.href)+'"]');if(a)return e.instance=a,mn(a),a;var i=Ut({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),mn(a),Mn(a,"style",i),xf(a,n.precedence,t),e.instance=a;case"stylesheet":i=ko(n.href);var s=t.querySelector(Fu(i));if(s)return e.state.loading|=4,e.instance=s,mn(s),s;a=FM(n),(i=Da.get(i))&&Kg(a,i),s=(t.ownerDocument||t).createElement("link"),mn(s);var r=s;return r._p=new Promise(function(l,o){r.onload=l,r.onerror=o}),Mn(s,"link",a),e.state.loading|=4,xf(s,n.precedence,t),e.instance=s;case"script":return s=Wo(n.src),(i=t.querySelector(ku(s)))?(e.instance=i,mn(i),i):(a=n,(i=Da.get(s))&&(a=Ut({},n),Jg(a,i)),t=t.ownerDocument||t,i=t.createElement("script"),mn(i),Mn(i,"link",a),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(j(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,xf(a,n.precedence,t));return e.instance}function xf(t,e,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,s=i,r=0;r<a.length;r++){var l=a[r];if(l.dataset.precedence===e)s=l;else if(s!==i)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Kg(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Jg(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var yf=null;function s_(t,e,n){if(yf===null){var a=new Map,i=yf=new Map;i.set(n,a)}else i=yf,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(t))return a;for(a.set(t,null),n=n.getElementsByTagName(t),i=0;i<n.length;i++){var s=n[i];if(!(s[wu]||s[En]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(e)||"";r=t+r;var l=a.get(r);l?l.push(s):a.set(r,[s])}}return a}function r_(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function pL(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function kM(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var vu=null;function mL(){}function gL(t,e,n){if(vu===null)throw Error(j(475));var a=vu;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=ko(n.href),s=t.querySelector(Fu(i));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=Xf.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=s,mn(s);return}s=t.ownerDocument||t,n=FM(n),(i=Da.get(i))&&Kg(n,i),s=s.createElement("link"),mn(s);var r=s;r._p=new Promise(function(l,o){r.onload=l,r.onerror=o}),Mn(s,"link",n),e.instance=s}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=Xf.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function xL(){if(vu===null)throw Error(j(475));var t=vu;return t.stylesheets&&t.count===0&&ig(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&ig(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function Xf(){if(this.count--,this.count===0){if(this.stylesheets)ig(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Yf=null;function ig(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yf=new Map,e.forEach(yL,t),Yf=null,Xf.call(t))}function yL(t,e){if(!(e.state.loading&4)){var n=Yf.get(t);if(n)var a=n.get(null);else{n=new Map,Yf.set(t,n);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var r=i[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),a=r)}a&&n.set(null,a)}i=e.instance,r=i.getAttribute("data-precedence"),s=n.get(r)||a,s===a&&n.set(null,i),n.set(r,i),this.count++,a=Xf.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),s?s.parentNode.insertBefore(i,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var _u={$$typeof:Ui,Provider:null,Consumer:null,_currentValue:dr,_currentValue2:dr,_threadCount:0};function vL(t,e,n,a,i,s,r,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Np(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Np(0),this.hiddenUpdates=Np(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function zM(t,e,n,a,i,s,r,l,o,u,c,d){return t=new vL(t,e,n,r,l,o,u,d),e=1,s===!0&&(e|=24),s=oa(3,null,null,e),t.current=s,s.stateNode=t,e=Tg(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:a,isDehydrated:n,cache:e},Cg(s),t}function HM(t){return t?(t=xo,t):xo}function GM(t,e,n,a,i,s){i=HM(i),a.context===null?a.context=i:a.pendingContext=i,a=Ls(e),a.payload={element:n},s=s===void 0?null:s,s!==null&&(a.callback=s),n=ws(t,a,e),n!==null&&(fa(n,t,e),tu(n,t,e))}function o_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jg(t,e){o_(t,e),(t=t.alternate)&&o_(t,e)}function VM(t){if(t.tag===13){var e=Go(t,67108864);e!==null&&fa(e,t,67108864),jg(t,67108864)}}var Zf=!0;function _L(t,e,n,a){var i=Ue.T;Ue.T=null;var s=ut.p;try{ut.p=2,Qg(t,e,n,a)}finally{ut.p=s,Ue.T=i}}function SL(t,e,n,a){var i=Ue.T;Ue.T=null;var s=ut.p;try{ut.p=8,Qg(t,e,n,a)}finally{ut.p=s,Ue.T=i}}function Qg(t,e,n,a){if(Zf){var i=sg(a);if(i===null)cm(t,e,a,Kf,n),l_(t,a);else if(bL(i,t,e,n,a))a.stopPropagation();else if(l_(t,a),e&4&&-1<ML.indexOf(t)){for(;i!==null;){var s=Ho(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=ur(s.pendingLanes);if(r!==0){var l=s;for(l.pendingLanes|=2,l.entangledLanes|=2;r;){var o=1<<31-ua(r);l.entanglements[1]|=o,r&=~o}ci(s),(mt&6)===0&&(kf=oi()+500,Bu(0,!1))}}break;case 13:l=Go(s,2),l!==null&&fa(l,s,2),rd(),jg(s,2)}if(s=sg(a),s===null&&cm(t,e,a,Kf,n),s===i)break;i=s}i!==null&&a.stopPropagation()}else cm(t,e,a,null,n)}}function sg(t){return t=pg(t),$g(t)}var Kf=null;function $g(t){if(Kf=null,t=co(t),t!==null){var e=Tu(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=p_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Kf=t,null}function qM(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(uA()){case y_:return 2;case v_:return 8;case bf:case cA:return 32;case __:return 268435456;default:return 32}default:return 32}}var rg=!1,Rs=null,Ds=null,Ps=null,Su=new Map,Mu=new Map,Ss=[],ML="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function l_(t,e){switch(t){case"focusin":case"focusout":Rs=null;break;case"dragenter":case"dragleave":Ds=null;break;case"mouseover":case"mouseout":Ps=null;break;case"pointerover":case"pointerout":Su.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mu.delete(e.pointerId)}}function ql(t,e,n,a,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ho(e),e!==null&&VM(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function bL(t,e,n,a,i){switch(e){case"focusin":return Rs=ql(Rs,t,e,n,a,i),!0;case"dragenter":return Ds=ql(Ds,t,e,n,a,i),!0;case"mouseover":return Ps=ql(Ps,t,e,n,a,i),!0;case"pointerover":var s=i.pointerId;return Su.set(s,ql(Su.get(s)||null,t,e,n,a,i)),!0;case"gotpointercapture":return s=i.pointerId,Mu.set(s,ql(Mu.get(s)||null,t,e,n,a,i)),!0}return!1}function WM(t){var e=co(t.target);if(e!==null){var n=Tu(e);if(n!==null){if(e=n.tag,e===13){if(e=p_(n),e!==null){t.blockedOn=e,yA(t.priority,function(){if(n.tag===13){var a=ca();a=cg(a);var i=Go(n,a);i!==null&&fa(i,n,a),jg(n,a)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vf(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sg(t.nativeEvent);if(n===null){n=t.nativeEvent;var a=new n.constructor(n.type,n);bm=a,n.target.dispatchEvent(a),bm=null}else return e=Ho(n),e!==null&&VM(e),t.blockedOn=n,!1;e.shift()}return!0}function u_(t,e,n){vf(t)&&n.delete(e)}function TL(){rg=!1,Rs!==null&&vf(Rs)&&(Rs=null),Ds!==null&&vf(Ds)&&(Ds=null),Ps!==null&&vf(Ps)&&(Ps=null),Su.forEach(u_),Mu.forEach(u_)}function sf(t,e){t.blockedOn===e&&(t.blockedOn=null,rg||(rg=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,TL)))}var rf=null;function c_(t){rf!==t&&(rf=t,on.unstable_scheduleCallback(on.unstable_NormalPriority,function(){rf===t&&(rf=null);for(var e=0;e<t.length;e+=3){var n=t[e],a=t[e+1],i=t[e+2];if(typeof a!="function"){if($g(a||n)===null)continue;break}var s=Ho(n);s!==null&&(t.splice(e,3),e-=3,km(s,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function bu(t){function e(o){return sf(o,t)}Rs!==null&&sf(Rs,t),Ds!==null&&sf(Ds,t),Ps!==null&&sf(Ps,t),Su.forEach(e),Mu.forEach(e);for(var n=0;n<Ss.length;n++){var a=Ss[n];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Ss.length&&(n=Ss[0],n.blockedOn===null);)WM(n),n.blockedOn===null&&Ss.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],s=n[a+1],r=i[Kn]||null;if(typeof s=="function")r||c_(n);else if(r){var l=null;if(s&&s.hasAttribute("formAction")){if(i=s,r=s[Kn]||null)l=r.formAction;else if($g(i)!==null)continue}else l=r.action;typeof l=="function"?n[a+1]=l:(n.splice(a,3),a-=3),c_(n)}}}function e0(t){this._internalRoot=t}cd.prototype.render=e0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));var n=e.current,a=ca();GM(n,a,t,e,null,null)};cd.prototype.unmount=e0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;GM(t.current,2,null,t,null,null),rd(),e[zo]=null}};function cd(t){this._internalRoot=t}cd.prototype.unstable_scheduleHydration=function(t){if(t){var e=A_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ss.length&&e!==0&&e<Ss[n].priority;n++);Ss.splice(n,0,t),n===0&&WM(t)}};var f_=d_.version;if(f_!=="19.1.0")throw Error(j(527,f_,"19.1.0"));ut.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=nA(e),t=t!==null?m_(t):null,t=t===null?null:t.stateNode,t};var AL={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Ue,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Wl.isDisabled&&Wl.supportsFiber))try{Au=Wl.inject(AL),la=Wl}catch{}var Wl;fd.createRoot=function(t,e){if(!h_(t))throw Error(j(299));var n=!1,a="",i=zS,s=HS,r=GS,l=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(l=e.unstable_transitionCallbacks)),e=zM(t,1,!1,null,null,n,a,i,s,r,l,null),t[zo]=e.current,Zg(t),new e0(e)};fd.hydrateRoot=function(t,e,n){if(!h_(t))throw Error(j(299));var a=!1,i="",s=zS,r=HS,l=GS,o=null,u=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(l=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(o=n.unstable_transitionCallbacks),n.formState!==void 0&&(u=n.formState)),e=zM(t,1,!0,e,n??null,a,i,s,r,l,o,u),e.context=HM(null),n=e.current,a=ca(),a=cg(a),i=Ls(a),i.callback=null,ws(n,i,a),n=a,e.current.lanes=n,Lu(e,n),ci(e),t[zo]=e.current,Zg(t),new cd(e)};fd.version="19.1.0"});var KM=ti((vD,ZM)=>{"use strict";function YM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(YM)}catch(t){console.error(t)}}YM(),ZM.exports=XM()});var _T=ti(yp=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aD=Symbol.for("react.transitional.element"),iD=Symbol.for("react.fragment");function vT(t,e,n){var a=null;if(n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),"key"in e){n={};for(var i in e)i!=="key"&&(n[i]=e[i])}else n=e;return e=n.ref,{$$typeof:aD,type:t,key:a,ref:e!==void 0?e:null,props:n}}yp.Fragment=iD;yp.jsx=vT;yp.jsxs=vT});var Nc=ti((dN,ST)=>{"use strict";ST.exports=_T()});var rs=wi(or(),1),MT=wi(KM(),1);var hd=wi(or());/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var JM=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),CL=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,a)=>a?a.toUpperCase():n.toLowerCase()),t0=t=>{let e=CL(t);return e.charAt(0).toUpperCase()+e.slice(1)},dd=(...t)=>t.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim(),jM=t=>{for(let e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var zu=wi(or());/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var QM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $M=(0,zu.forwardRef)(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:i="",children:s,iconNode:r,...l},o)=>(0,zu.createElement)("svg",{ref:o,...QM,width:e,height:e,stroke:t,strokeWidth:a?Number(n)*24/Number(e):n,className:dd("lucide",i),...!s&&!jM(l)&&{"aria-hidden":"true"},...l},[...r.map(([u,c])=>(0,zu.createElement)(u,c)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fi=(t,e)=>{let n=(0,hd.forwardRef)(({className:a,...i},s)=>(0,hd.createElement)($M,{ref:s,iconNode:e,className:dd(`lucide-${JM(t0(t))}`,`lucide-${t}`,a),...i}));return n.displayName=t0(t),n};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var LL=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Xo=fi("arrow-down",LL);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wL=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Yo=fi("arrow-up-right",wL);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var EL=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Hu=fi("check",EL);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var IL=[["path",{d:"m15 15 6 6",key:"1s409w"}],["path",{d:"m15 9 6-6",key:"ko1vev"}],["path",{d:"M21 16v5h-5",key:"1ck2sf"}],["path",{d:"M21 8V3h-5",key:"1qoq8a"}],["path",{d:"M3 16v5h5",key:"1t08am"}],["path",{d:"m3 21 6-6",key:"wwnumi"}],["path",{d:"M3 8V3h5",key:"1ln10m"}],["path",{d:"M9 9 3 3",key:"v551iv"}]],Lr=fi("expand",IL);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var RL=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Gu=fi("x",RL);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var n0="en";document.documentElement.lang=n0;var DL=["experience","explore","tagline","headline","headlineEnd","scroll","finish","silver","ink","blue","closed","closedTitle","opening","openingTitle","full","fullTitle","beyond","beyondTitle","light","worldTitle","enter","worldCopy","vertical","verticalTitle","open","openTitle","balance","balanceTitle","continuity","continuityTitle","next","nextTitle","object","back","close","front","rear","fold","unfold","angle","lagoon","aurora","drag","loading","error","scene","wallpaper"],PL=["The experience","Explore in 3D","One object. Endless perspectives.","Your next world.","Is about to open.","Scroll to discover","Finish","Natural titanium","Dark titanium","Glacier blue","Closed",`A world.
Waiting for you.`,"Opening",`The horizon
starts to open.`,"Full screen",`No boundaries
for imagination.`,"Beyond",`Every detail.
Every angle.`,"Light / Beyond the screen","Don\u2019t just look.","Step inside.","Light, matter and depth. Two original landscapes, revealed through the fold.","Vertical",`One window.
Another scale.`,"Open",`All the space
to explore.`,"In balance",`Change the shape.
Keep the world.`,"Continuity",`Close the object.
The idea continues.`,"Content in motion",`The next experience
could be yours.`,"Explore the object","Back to top","Close explorer","Front","Rear","Close","Open","Opening","Dunes and sea","Northern lights","Drag to rotate. Use the slider to open.","Preparing the object","The scene could not load. Reload to try again.","3D folding device","Screen landscape"],we=Object.fromEntries(DL.map((t,e)=>[t,PL[e]])),UL=["photos","camera","maps","weather","calendar","clock","notes","books","podcasts","health","files","settings","sonora","aster","messages","mail","music","vulk"],OL=["Photos","Camera","Maps","Weather","Calendar","Clock","Notes","Books","Podcasts","Health","Files","Settings","Sonora","Aster","Messages","Mail","Music","VULK"],eb={apps:Object.fromEntries(UL.map((t,e)=>[t,OL[e]])),search:"Search",track:"Studio One",artist:"Sonora"};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var gh="184";var kb=0,V0=1,zb=2;var Sc=1,Hb=2,Ml=3,Ka=0,An=1,Na=2,bi=0,Pr=1,q0=2,W0=3,X0=4,Gb=5;var Xs=100,Vb=101,qb=102,Wb=103,Xb=104,Yb=200,Zb=201,Kb=202,Jb=203,Hd=204,Gd=205,jb=206,Qb=207,$b=208,e1=209,t1=210,n1=211,a1=212,i1=213,s1=214,Vd=0,qd=1,Wd=2,Ur=3,Xd=4,Yd=5,Zd=6,Kd=7,xh=0,r1=1,o1=2,ja=0,Y0=1,Z0=2,K0=3,Mc=4,J0=5,j0=6,Q0=7,E0="attached",l1="detached",$0=300,nr=301,Vr=302,yh=303,vh=304,bc=306,Ys=1e3,Ua=1001,ul=1002,jt=1003,_h=1004;var qr=1005;var Qt=1006,bl=1007;var ya=1008;var ta=1009,ex=1010,tx=1011,Tl=1012,Sh=1013,Qa=1014,va=1015,Ti=1016,Mh=1017,bh=1018,Al=1020,nx=35902,ax=35899,ix=1021,sx=1022,_a=1023,mi=1026,ar=1027,Th=1028,Ah=1029,ir=1030,Ch=1031;var Lh=1033,Tc=33776,Ac=33777,Cc=33778,Lc=33779,wh=35840,Eh=35841,Ih=35842,Rh=35843,Dh=36196,Ph=37492,Uh=37496,Oh=37488,Nh=37489,wc=37490,Bh=37491,Fh=37808,kh=37809,zh=37810,Hh=37811,Gh=37812,Vh=37813,qh=37814,Wh=37815,Xh=37816,Yh=37817,Zh=37818,Kh=37819,Jh=37820,jh=37821,Qh=36492,$h=36494,ep=36495,tp=36283,np=36284,Ec=36285,ap=36286;var Or=2300,Nr=2301,zd=2302,I0=2303,R0=2400,D0=2401,P0=2402,u1=2500;var rx=0,Ic=1,Cl=2,c1=3200;var Rc=0,f1=1,is="",Lt="srgb",bn="srgb-linear",$u="linear",ft="srgb";var Dr=7680;var U0=519,d1=512,h1=513,p1=514,ip=515,m1=516,g1=517,sp=518,x1=519,Jd=35044;var ox="300 es",Ya=2e3,cl=2001;function NL(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function BL(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function fl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function y1(){let t=fl("canvas");return t.style.display="block",t}var tb={},dl=null;function ec(...t){let e="THREE."+t.shift();dl?dl("log",e,...t):console.log(e,...t)}function v1(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ae(...t){t=v1(t);let e="THREE."+t.shift();if(dl)dl("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function De(...t){t=v1(t);let e="THREE."+t.shift();if(dl)dl("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function jd(...t){let e=t.join(" ");e in tb||(tb[e]=!0,Ae(...t))}function _1(t,e,n){return new Promise(function(a,i){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:a()}}setTimeout(s,n)})}var S1={[Vd]:qd,[Wd]:Zd,[Xd]:Kd,[Ur]:Yd,[qd]:Vd,[Zd]:Wd,[Kd]:Xd,[Yd]:Ur},gi=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){let a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){let a=this._listeners;if(a===void 0)return;let i=a[e];if(i!==void 0){let s=i.indexOf(n);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let a=n[e.type];if(a!==void 0){e.target=this;let i=a.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nb=1234567,ju=Math.PI/180,Br=180/Math.PI;function Za(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Rn[t&255]+Rn[t>>8&255]+Rn[t>>16&255]+Rn[t>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[n&63|128]+Rn[n>>8&255]+"-"+Rn[n>>16&255]+Rn[n>>24&255]+Rn[a&255]+Rn[a>>8&255]+Rn[a>>16&255]+Rn[a>>24&255]).toLowerCase()}function et(t,e,n){return Math.max(e,Math.min(n,t))}function lx(t,e){return(t%e+e)%e}function FL(t,e,n,a,i){return a+(t-e)*(i-a)/(n-e)}function kL(t,e,n){return t!==e?(n-t)/(e-t):0}function Qu(t,e,n){return(1-n)*t+n*e}function zL(t,e,n,a){return Qu(t,e,1-Math.exp(-n*a))}function HL(t,e=1){return e-Math.abs(lx(t,e*2)-e)}function GL(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function VL(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function qL(t,e){return t+Math.floor(Math.random()*(e-t+1))}function WL(t,e){return t+Math.random()*(e-t)}function XL(t){return t*(.5-Math.random())}function YL(t){t!==void 0&&(nb=t);let e=nb+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ZL(t){return t*ju}function KL(t){return t*Br}function JL(t){return(t&t-1)===0&&t!==0}function jL(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function QL(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function $L(t,e,n,a,i){let s=Math.cos,r=Math.sin,l=s(n/2),o=r(n/2),u=s((e+a)/2),c=r((e+a)/2),d=s((e-a)/2),f=r((e-a)/2),h=s((a-e)/2),g=r((a-e)/2);switch(i){case"XYX":t.set(l*c,o*d,o*f,l*u);break;case"YZY":t.set(o*f,l*c,o*d,l*u);break;case"ZXZ":t.set(o*d,o*f,l*c,l*u);break;case"XZX":t.set(l*c,o*g,o*h,l*u);break;case"YXY":t.set(o*h,l*c,o*g,l*u);break;case"ZYZ":t.set(o*g,o*h,l*c,l*u);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Xa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function gt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var Wt={DEG2RAD:ju,RAD2DEG:Br,generateUUID:Za,clamp:et,euclideanModulo:lx,mapLinear:FL,inverseLerp:kL,lerp:Qu,damp:zL,pingpong:HL,smoothstep:GL,smootherstep:VL,randInt:qL,randFloat:WL,randFloatSpread:XL,seededRandom:YL,degToRad:ZL,radToDeg:KL,isPowerOfTwo:JL,ceilPowerOfTwo:jL,floorPowerOfTwo:QL,setQuaternionFromProperEuler:$L,normalize:gt,denormalize:Xa},He=class t{static{t.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,a=this.y,i=e.elements;return this.x=i[0]*n+i[3]*a+i[6],this.y=i[1]*n+i[4]*a+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){let a=this.length();return this.divideScalar(a||1).multiplyScalar(et(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let a=this.dot(e)/n;return Math.acos(et(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let a=Math.cos(n),i=Math.sin(n),s=this.x-e.x,r=this.y-e.y;return this.x=s*a-r*i+e.x,this.y=s*i+r*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ma=class{constructor(e=0,n=0,a=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=i}static slerpFlat(e,n,a,i,s,r,l){let o=a[i+0],u=a[i+1],c=a[i+2],d=a[i+3],f=s[r+0],h=s[r+1],g=s[r+2],y=s[r+3];if(d!==y||o!==f||u!==h||c!==g){let m=o*f+u*h+c*g+d*y;m<0&&(f=-f,h=-h,g=-g,y=-y,m=-m);let p=1-l;if(m<.9995){let x=Math.acos(m),v=Math.sin(x);p=Math.sin(p*x)/v,l=Math.sin(l*x)/v,o=o*p+f*l,u=u*p+h*l,c=c*p+g*l,d=d*p+y*l}else{o=o*p+f*l,u=u*p+h*l,c=c*p+g*l,d=d*p+y*l;let x=1/Math.sqrt(o*o+u*u+c*c+d*d);o*=x,u*=x,c*=x,d*=x}}e[n]=o,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,a,i,s,r){let l=a[i],o=a[i+1],u=a[i+2],c=a[i+3],d=s[r],f=s[r+1],h=s[r+2],g=s[r+3];return e[n]=l*g+c*d+o*h-u*f,e[n+1]=o*g+c*f+u*d-l*h,e[n+2]=u*g+c*h+l*f-o*d,e[n+3]=c*g-l*d-o*f-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,i){return this._x=e,this._y=n,this._z=a,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let a=e._x,i=e._y,s=e._z,r=e._order,l=Math.cos,o=Math.sin,u=l(a/2),c=l(i/2),d=l(s/2),f=o(a/2),h=o(i/2),g=o(s/2);switch(r){case"XYZ":this._x=f*c*d+u*h*g,this._y=u*h*d-f*c*g,this._z=u*c*g+f*h*d,this._w=u*c*d-f*h*g;break;case"YXZ":this._x=f*c*d+u*h*g,this._y=u*h*d-f*c*g,this._z=u*c*g-f*h*d,this._w=u*c*d+f*h*g;break;case"ZXY":this._x=f*c*d-u*h*g,this._y=u*h*d+f*c*g,this._z=u*c*g+f*h*d,this._w=u*c*d-f*h*g;break;case"ZYX":this._x=f*c*d-u*h*g,this._y=u*h*d+f*c*g,this._z=u*c*g-f*h*d,this._w=u*c*d+f*h*g;break;case"YZX":this._x=f*c*d+u*h*g,this._y=u*h*d+f*c*g,this._z=u*c*g-f*h*d,this._w=u*c*d-f*h*g;break;case"XZY":this._x=f*c*d-u*h*g,this._y=u*h*d-f*c*g,this._z=u*c*g+f*h*d,this._w=u*c*d+f*h*g;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let a=n/2,i=Math.sin(a);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,a=n[0],i=n[4],s=n[8],r=n[1],l=n[5],o=n[9],u=n[2],c=n[6],d=n[10],f=a+l+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(c-o)*h,this._y=(s-u)*h,this._z=(r-i)*h}else if(a>l&&a>d){let h=2*Math.sqrt(1+a-l-d);this._w=(c-o)/h,this._x=.25*h,this._y=(i+r)/h,this._z=(s+u)/h}else if(l>d){let h=2*Math.sqrt(1+l-a-d);this._w=(s-u)/h,this._x=(i+r)/h,this._y=.25*h,this._z=(o+c)/h}else{let h=2*Math.sqrt(1+d-a-l);this._w=(r-i)/h,this._x=(s+u)/h,this._y=(o+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){let a=this.angleTo(e);if(a===0)return this;let i=Math.min(1,n/a);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let a=e._x,i=e._y,s=e._z,r=e._w,l=n._x,o=n._y,u=n._z,c=n._w;return this._x=a*c+r*l+i*u-s*o,this._y=i*c+r*o+s*l-a*u,this._z=s*c+r*u+a*o-i*l,this._w=r*c-a*l-i*o-s*u,this._onChangeCallback(),this}slerp(e,n){let a=e._x,i=e._y,s=e._z,r=e._w,l=this.dot(e);l<0&&(a=-a,i=-i,s=-s,r=-r,l=-l);let o=1-n;if(l<.9995){let u=Math.acos(l),c=Math.sin(u);o=Math.sin(o*u)/c,n=Math.sin(n*u)/c,this._x=this._x*o+a*n,this._y=this._y*o+i*n,this._z=this._z*o+s*n,this._w=this._w*o+r*n,this._onChangeCallback()}else this._x=this._x*o+a*n,this._y=this._y*o+i*n,this._z=this._z*o+s*n,this._w=this._w*o+r*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),i=Math.sqrt(1-a),s=Math.sqrt(a);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class t{static{t.prototype.isVector3=!0}constructor(e=0,n=0,a=0){this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ab.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ab.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,a=this.y,i=this.z,s=e.elements;return this.x=s[0]*n+s[3]*a+s[6]*i,this.y=s[1]*n+s[4]*a+s[7]*i,this.z=s[2]*n+s[5]*a+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,a=this.y,i=this.z,s=e.elements,r=1/(s[3]*n+s[7]*a+s[11]*i+s[15]);return this.x=(s[0]*n+s[4]*a+s[8]*i+s[12])*r,this.y=(s[1]*n+s[5]*a+s[9]*i+s[13])*r,this.z=(s[2]*n+s[6]*a+s[10]*i+s[14])*r,this}applyQuaternion(e){let n=this.x,a=this.y,i=this.z,s=e.x,r=e.y,l=e.z,o=e.w,u=2*(r*i-l*a),c=2*(l*n-s*i),d=2*(s*a-r*n);return this.x=n+o*u+r*d-l*c,this.y=a+o*c+l*u-s*d,this.z=i+o*d+s*c-r*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,a=this.y,i=this.z,s=e.elements;return this.x=s[0]*n+s[4]*a+s[8]*i,this.y=s[1]*n+s[5]*a+s[9]*i,this.z=s[2]*n+s[6]*a+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){let a=this.length();return this.divideScalar(a||1).multiplyScalar(et(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let a=e.x,i=e.y,s=e.z,r=n.x,l=n.y,o=n.z;return this.x=i*o-s*l,this.y=s*r-a*o,this.z=a*l-i*r,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return a0.copy(this).projectOnVector(e),this.sub(a0)}reflect(e){return this.sub(a0.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let a=this.dot(e)/n;return Math.acos(et(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,a=this.y-e.y,i=this.z-e.z;return n*n+a*a+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){let i=Math.sin(n)*e;return this.x=i*Math.sin(a),this.y=Math.cos(n)*e,this.z=i*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},a0=new B,ab=new ma,Fe=class t{static{t.prototype.isMatrix3=!0}constructor(e,n,a,i,s,r,l,o,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,i,s,r,l,o,u)}set(e,n,a,i,s,r,l,o,u){let c=this.elements;return c[0]=e,c[1]=i,c[2]=l,c[3]=n,c[4]=s,c[5]=o,c[6]=a,c[7]=r,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let a=e.elements,i=n.elements,s=this.elements,r=a[0],l=a[3],o=a[6],u=a[1],c=a[4],d=a[7],f=a[2],h=a[5],g=a[8],y=i[0],m=i[3],p=i[6],x=i[1],v=i[4],M=i[7],C=i[2],T=i[5],L=i[8];return s[0]=r*y+l*x+o*C,s[3]=r*m+l*v+o*T,s[6]=r*p+l*M+o*L,s[1]=u*y+c*x+d*C,s[4]=u*m+c*v+d*T,s[7]=u*p+c*M+d*L,s[2]=f*y+h*x+g*C,s[5]=f*m+h*v+g*T,s[8]=f*p+h*M+g*L,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],a=e[1],i=e[2],s=e[3],r=e[4],l=e[5],o=e[6],u=e[7],c=e[8];return n*r*c-n*l*u-a*s*c+a*l*o+i*s*u-i*r*o}invert(){let e=this.elements,n=e[0],a=e[1],i=e[2],s=e[3],r=e[4],l=e[5],o=e[6],u=e[7],c=e[8],d=c*r-l*u,f=l*o-c*s,h=u*s-r*o,g=n*d+a*f+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(i*u-c*a)*y,e[2]=(l*a-i*r)*y,e[3]=f*y,e[4]=(c*n-i*o)*y,e[5]=(i*s-l*n)*y,e[6]=h*y,e[7]=(a*o-u*n)*y,e[8]=(r*n-a*s)*y,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,i,s,r,l){let o=Math.cos(s),u=Math.sin(s);return this.set(a*o,a*u,-a*(o*r+u*l)+r+e,-i*u,i*o,-i*(-u*r+o*l)+l+n,0,0,1),this}scale(e,n){return this.premultiply(i0.makeScale(e,n)),this}rotate(e){return this.premultiply(i0.makeRotation(-e)),this}translate(e,n){return this.premultiply(i0.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,a=e.elements;for(let i=0;i<9;i++)if(n[i]!==a[i])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){let a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}},i0=new Fe,ib=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sb=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ew(){let t={enabled:!0,workingColorSpace:bn,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===ft&&(i.r=Qi(i.r),i.g=Qi(i.g),i.b=Qi(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ft&&(i.r=ll(i.r),i.g=ll(i.g),i.b=ll(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===is?$u:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return jd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return jd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return t.define({[bn]:{primaries:e,whitePoint:a,transfer:$u,toXYZ:ib,fromXYZ:sb,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:a,transfer:ft,toXYZ:ib,fromXYZ:sb,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),t}var qe=ew();function Qi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ll(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Zo,Qd=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Zo===void 0&&(Zo=fl("canvas")),Zo.width=e.width,Zo.height=e.height;let i=Zo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),a=Zo}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=fl("canvas");n.width=e.width,n.height=e.height;let a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);let i=a.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Qi(s[r]/255)*255;return a.putImageData(i,0,0),n}else if(e.data){let n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Qi(n[a]/255)*255):n[a]=Qi(n[a]);return{data:n,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},tw=0,hl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tw++}),this.uuid=Za(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let a={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,l=i.length;r<l;r++)i[r].isDataTexture?s.push(s0(i[r].image)):s.push(s0(i[r]))}else s=s0(i);a.url=s}return n||(e.images[this.uuid]=a),a}};function s0(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Qd.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}var nw=0,r0=new B,ln=class t extends gi{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,a=Ua,i=Ua,s=Qt,r=ya,l=_a,o=ta,u=t.DEFAULT_ANISOTROPY,c=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nw++}),this.uuid=Za(),this.name="",this.source=new hl(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=o,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(r0).x}get height(){return this.source.getSize(r0).y}get depth(){return this.source.getSize(r0).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let a=e[n];if(a===void 0){Ae(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let i=this[n];if(i===void 0){Ae(`Texture.setValues(): property '${n}' does not exist.`);continue}i&&a&&i.isVector2&&a.isVector2||i&&a&&i.isVector3&&a.isVector3||i&&a&&i.isMatrix3&&a.isMatrix3?i.copy(a):this[n]=a}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ys:e.x=e.x-Math.floor(e.x);break;case Ua:e.x=e.x<0?0:1;break;case ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ys:e.y=e.y-Math.floor(e.y);break;case Ua:e.y=e.y<0?0:1;break;case ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=$0;ln.DEFAULT_ANISOTROPY=1;var St=class t{static{t.prototype.isVector4=!0}constructor(e=0,n=0,a=0,i=1){this.x=e,this.y=n,this.z=a,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,i){return this.x=e,this.y=n,this.z=a,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,a=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*n+r[4]*a+r[8]*i+r[12]*s,this.y=r[1]*n+r[5]*a+r[9]*i+r[13]*s,this.z=r[2]*n+r[6]*a+r[10]*i+r[14]*s,this.w=r[3]*n+r[7]*a+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,i,s,o=e.elements,u=o[0],c=o[4],d=o[8],f=o[1],h=o[5],g=o[9],y=o[2],m=o[6],p=o[10];if(Math.abs(c-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(u+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let v=(u+1)/2,M=(h+1)/2,C=(p+1)/2,T=(c+f)/4,L=(d+y)/4,_=(g+m)/4;return v>M&&v>C?v<.01?(a=0,i=.707106781,s=.707106781):(a=Math.sqrt(v),i=T/a,s=L/a):M>C?M<.01?(a=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),a=T/i,s=_/i):C<.01?(a=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),a=L/s,i=_/s),this.set(a,i,s,n),this}let x=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(f-c)*(f-c));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-y)/x,this.z=(f-c)/x,this.w=Math.acos((u+h+p-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this.w=et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this.w=et(this.w,e,n),this}clampLength(e,n){let a=this.length();return this.divideScalar(a||1).multiplyScalar(et(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$d=class extends gi{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new St(0,0,e,n),this.scissorTest=!1,this.viewport=new St(0,0,e,n),this.textures=[];let i={width:e,height:n,depth:a.depth},s=new ln(i),r=a.count;for(let l=0;l<r;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){let n={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=n,this.textures[i].image.depth=a,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let i=Object.assign({},e.textures[n].image);this.textures[n].source=new hl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},ga=class extends $d{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}},tc=class extends ln{constructor(e=null,n=1,a=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var eh=class extends ln{constructor(e=null,n=1,a=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ne=class t{static{t.prototype.isMatrix4=!0}constructor(e,n,a,i,s,r,l,o,u,c,d,f,h,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,i,s,r,l,o,u,c,d,f,h,g,y,m)}set(e,n,a,i,s,r,l,o,u,c,d,f,h,g,y,m){let p=this.elements;return p[0]=e,p[4]=n,p[8]=a,p[12]=i,p[1]=s,p[5]=r,p[9]=l,p[13]=o,p[2]=u,p[6]=c,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){let n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let n=this.elements,a=e.elements,i=1/Ko.setFromMatrixColumn(e,0).length(),s=1/Ko.setFromMatrixColumn(e,1).length(),r=1/Ko.setFromMatrixColumn(e,2).length();return n[0]=a[0]*i,n[1]=a[1]*i,n[2]=a[2]*i,n[3]=0,n[4]=a[4]*s,n[5]=a[5]*s,n[6]=a[6]*s,n[7]=0,n[8]=a[8]*r,n[9]=a[9]*r,n[10]=a[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,a=e.x,i=e.y,s=e.z,r=Math.cos(a),l=Math.sin(a),o=Math.cos(i),u=Math.sin(i),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=r*c,h=r*d,g=l*c,y=l*d;n[0]=o*c,n[4]=-o*d,n[8]=u,n[1]=h+g*u,n[5]=f-y*u,n[9]=-l*o,n[2]=y-f*u,n[6]=g+h*u,n[10]=r*o}else if(e.order==="YXZ"){let f=o*c,h=o*d,g=u*c,y=u*d;n[0]=f+y*l,n[4]=g*l-h,n[8]=r*u,n[1]=r*d,n[5]=r*c,n[9]=-l,n[2]=h*l-g,n[6]=y+f*l,n[10]=r*o}else if(e.order==="ZXY"){let f=o*c,h=o*d,g=u*c,y=u*d;n[0]=f-y*l,n[4]=-r*d,n[8]=g+h*l,n[1]=h+g*l,n[5]=r*c,n[9]=y-f*l,n[2]=-r*u,n[6]=l,n[10]=r*o}else if(e.order==="ZYX"){let f=r*c,h=r*d,g=l*c,y=l*d;n[0]=o*c,n[4]=g*u-h,n[8]=f*u+y,n[1]=o*d,n[5]=y*u+f,n[9]=h*u-g,n[2]=-u,n[6]=l*o,n[10]=r*o}else if(e.order==="YZX"){let f=r*o,h=r*u,g=l*o,y=l*u;n[0]=o*c,n[4]=y-f*d,n[8]=g*d+h,n[1]=d,n[5]=r*c,n[9]=-l*c,n[2]=-u*c,n[6]=h*d+g,n[10]=f-y*d}else if(e.order==="XZY"){let f=r*o,h=r*u,g=l*o,y=l*u;n[0]=o*c,n[4]=-d,n[8]=u*c,n[1]=f*d+y,n[5]=r*c,n[9]=h*d-g,n[2]=g*d-h,n[6]=l*c,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aw,e,iw)}lookAt(e,n,a){let i=this.elements;return ha.subVectors(e,n),ha.lengthSq()===0&&(ha.z=1),ha.normalize(),ks.crossVectors(a,ha),ks.lengthSq()===0&&(Math.abs(a.z)===1?ha.x+=1e-4:ha.z+=1e-4,ha.normalize(),ks.crossVectors(a,ha)),ks.normalize(),pd.crossVectors(ha,ks),i[0]=ks.x,i[4]=pd.x,i[8]=ha.x,i[1]=ks.y,i[5]=pd.y,i[9]=ha.y,i[2]=ks.z,i[6]=pd.z,i[10]=ha.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let a=e.elements,i=n.elements,s=this.elements,r=a[0],l=a[4],o=a[8],u=a[12],c=a[1],d=a[5],f=a[9],h=a[13],g=a[2],y=a[6],m=a[10],p=a[14],x=a[3],v=a[7],M=a[11],C=a[15],T=i[0],L=i[4],_=i[8],w=i[12],E=i[1],I=i[5],F=i[9],q=i[13],Y=i[2],U=i[6],H=i[10],G=i[14],Q=i[3],ne=i[7],ie=i[11],Me=i[15];return s[0]=r*T+l*E+o*Y+u*Q,s[4]=r*L+l*I+o*U+u*ne,s[8]=r*_+l*F+o*H+u*ie,s[12]=r*w+l*q+o*G+u*Me,s[1]=c*T+d*E+f*Y+h*Q,s[5]=c*L+d*I+f*U+h*ne,s[9]=c*_+d*F+f*H+h*ie,s[13]=c*w+d*q+f*G+h*Me,s[2]=g*T+y*E+m*Y+p*Q,s[6]=g*L+y*I+m*U+p*ne,s[10]=g*_+y*F+m*H+p*ie,s[14]=g*w+y*q+m*G+p*Me,s[3]=x*T+v*E+M*Y+C*Q,s[7]=x*L+v*I+M*U+C*ne,s[11]=x*_+v*F+M*H+C*ie,s[15]=x*w+v*q+M*G+C*Me,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],a=e[4],i=e[8],s=e[12],r=e[1],l=e[5],o=e[9],u=e[13],c=e[2],d=e[6],f=e[10],h=e[14],g=e[3],y=e[7],m=e[11],p=e[15],x=o*h-u*f,v=l*h-u*d,M=l*f-o*d,C=r*h-u*c,T=r*f-o*c,L=r*d-l*c;return n*(y*x-m*v+p*M)-a*(g*x-m*C+p*T)+i*(g*v-y*C+p*L)-s*(g*M-y*T+m*L)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=a),this}invert(){let e=this.elements,n=e[0],a=e[1],i=e[2],s=e[3],r=e[4],l=e[5],o=e[6],u=e[7],c=e[8],d=e[9],f=e[10],h=e[11],g=e[12],y=e[13],m=e[14],p=e[15],x=n*l-a*r,v=n*o-i*r,M=n*u-s*r,C=a*o-i*l,T=a*u-s*l,L=i*u-s*o,_=c*y-d*g,w=c*m-f*g,E=c*p-h*g,I=d*m-f*y,F=d*p-h*y,q=f*p-h*m,Y=x*q-v*F+M*I+C*E-T*w+L*_;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/Y;return e[0]=(l*q-o*F+u*I)*U,e[1]=(i*F-a*q-s*I)*U,e[2]=(y*L-m*T+p*C)*U,e[3]=(f*T-d*L-h*C)*U,e[4]=(o*E-r*q-u*w)*U,e[5]=(n*q-i*E+s*w)*U,e[6]=(m*M-g*L-p*v)*U,e[7]=(c*L-f*M+h*v)*U,e[8]=(r*F-l*E+u*_)*U,e[9]=(a*E-n*F-s*_)*U,e[10]=(g*T-y*M+p*x)*U,e[11]=(d*M-c*T-h*x)*U,e[12]=(l*w-r*I-o*_)*U,e[13]=(n*I-a*w+i*_)*U,e[14]=(y*v-g*C-m*x)*U,e[15]=(c*C-d*v+f*x)*U,this}scale(e){let n=this.elements,a=e.x,i=e.y,s=e.z;return n[0]*=a,n[4]*=i,n[8]*=s,n[1]*=a,n[5]*=i,n[9]*=s,n[2]*=a,n[6]*=i,n[10]*=s,n[3]*=a,n[7]*=i,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,i))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let a=Math.cos(n),i=Math.sin(n),s=1-a,r=e.x,l=e.y,o=e.z,u=s*r,c=s*l;return this.set(u*r+a,u*l-i*o,u*o+i*l,0,u*l+i*o,c*l+a,c*o-i*r,0,u*o-i*l,c*o+i*r,s*o*o+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,i,s,r){return this.set(1,a,s,0,e,1,r,0,n,i,1,0,0,0,0,1),this}compose(e,n,a){let i=this.elements,s=n._x,r=n._y,l=n._z,o=n._w,u=s+s,c=r+r,d=l+l,f=s*u,h=s*c,g=s*d,y=r*c,m=r*d,p=l*d,x=o*u,v=o*c,M=o*d,C=a.x,T=a.y,L=a.z;return i[0]=(1-(y+p))*C,i[1]=(h+M)*C,i[2]=(g-v)*C,i[3]=0,i[4]=(h-M)*T,i[5]=(1-(f+p))*T,i[6]=(m+x)*T,i[7]=0,i[8]=(g+v)*L,i[9]=(m-x)*L,i[10]=(1-(f+y))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,a){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinant();if(s===0)return a.set(1,1,1),n.identity(),this;let r=Ko.set(i[0],i[1],i[2]).length(),l=Ko.set(i[4],i[5],i[6]).length(),o=Ko.set(i[8],i[9],i[10]).length();s<0&&(r=-r),Va.copy(this);let u=1/r,c=1/l,d=1/o;return Va.elements[0]*=u,Va.elements[1]*=u,Va.elements[2]*=u,Va.elements[4]*=c,Va.elements[5]*=c,Va.elements[6]*=c,Va.elements[8]*=d,Va.elements[9]*=d,Va.elements[10]*=d,n.setFromRotationMatrix(Va),a.x=r,a.y=l,a.z=o,this}makePerspective(e,n,a,i,s,r,l=Ya,o=!1){let u=this.elements,c=2*s/(n-e),d=2*s/(a-i),f=(n+e)/(n-e),h=(a+i)/(a-i),g,y;if(o)g=s/(r-s),y=r*s/(r-s);else if(l===Ya)g=-(r+s)/(r-s),y=-2*r*s/(r-s);else if(l===cl)g=-r/(r-s),y=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,a,i,s,r,l=Ya,o=!1){let u=this.elements,c=2/(n-e),d=2/(a-i),f=-(n+e)/(n-e),h=-(a+i)/(a-i),g,y;if(o)g=1/(r-s),y=r/(r-s);else if(l===Ya)g=-2/(r-s),y=-(r+s)/(r-s);else if(l===cl)g=-1/(r-s),y=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let n=this.elements,a=e.elements;for(let i=0;i<16;i++)if(n[i]!==a[i])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){let a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}},Ko=new B,Va=new Ne,aw=new B(0,0,0),iw=new B(1,1,1),ks=new B,pd=new B,ha=new B,rb=new Ne,ob=new ma,xi=class t{constructor(e=0,n=0,a=0,i=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,i=this._order){return this._x=e,this._y=n,this._z=a,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){let i=e.elements,s=i[0],r=i[4],l=i[8],o=i[1],u=i[5],c=i[9],d=i[2],f=i[6],h=i[10];switch(n){case"XYZ":this._y=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-et(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,h),this._z=Math.atan2(o,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-r,u)):(this._y=0,this._z=Math.atan2(o,s));break;case"ZYX":this._y=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(o,s)):(this._x=0,this._z=Math.atan2(-r,u));break;case"YZX":this._z=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(l,h));break;case"XZY":this._z=Math.asin(-et(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-c,h),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return rb.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rb,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ob.setFromEuler(this),this.setFromQuaternion(ob,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xi.DEFAULT_ORDER="XYZ";var pl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sw=0,lb=new B,Jo=new ma,Xi=new Ne,md=new B,Vu=new B,rw=new B,ow=new ma,ub=new B(1,0,0),cb=new B(0,1,0),fb=new B(0,0,1),db={type:"added"},lw={type:"removed"},jo={type:"childadded",child:null},o0={type:"childremoved",child:null},Rt=class t extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sw++}),this.uuid=Za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new B,n=new xi,a=new ma,i=new B(1,1,1);function s(){a.setFromEuler(n,!1)}function r(){n.setFromQuaternion(a,void 0,!1)}n._onChange(s),a._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Fe}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Jo.setFromAxisAngle(e,n),this.quaternion.multiply(Jo),this}rotateOnWorldAxis(e,n){return Jo.setFromAxisAngle(e,n),this.quaternion.premultiply(Jo),this}rotateX(e){return this.rotateOnAxis(ub,e)}rotateY(e){return this.rotateOnAxis(cb,e)}rotateZ(e){return this.rotateOnAxis(fb,e)}translateOnAxis(e,n){return lb.copy(e).applyQuaternion(this.quaternion),this.position.add(lb.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ub,e)}translateY(e){return this.translateOnAxis(cb,e)}translateZ(e){return this.translateOnAxis(fb,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?md.copy(e):md.set(e,n,a);let i=this.parent;this.updateWorldMatrix(!0,!1),Vu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Vu,md,this.up):Xi.lookAt(md,Vu,this.up),this.quaternion.setFromRotationMatrix(Xi),i&&(Xi.extractRotation(i.matrixWorld),Jo.setFromRotationMatrix(Xi),this.quaternion.premultiply(Jo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(db),jo.child=e,this.dispatchEvent(jo),jo.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(lw),o0.child=e,this.dispatchEvent(o0),o0.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(db),jo.child=e,this.dispatchEvent(jo),jo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,i=this.children.length;a<i;a++){let r=this.children[a].getObjectByProperty(e,n);if(r!==void 0)return r}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vu,e,rw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vu,ow,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let a=0,i=n.length;a<i;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let a=0,i=n.length;a<i;a++)n[a].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,a=e.y,i=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*a-s[8]*i,s[13]+=a-s[1]*n-s[5]*a-s[9]*i,s[14]+=i-s[2]*n-s[6]*a-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let a=0,i=n.length;a<i;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){let a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(l=>({...l})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let o=l.shapes;if(Array.isArray(o))for(let u=0,c=o.length;u<c;u++){let d=o[u];s(e.shapes,d)}else s(e.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let o=0,u=this.material.length;o<u;o++)l.push(s(e.materials,this.material[o]));i.material=l}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){let o=this.animations[l];i.animations.push(s(e.animations,o))}}if(n){let l=r(e.geometries),o=r(e.materials),u=r(e.textures),c=r(e.images),d=r(e.shapes),f=r(e.skeletons),h=r(e.animations),g=r(e.nodes);l.length>0&&(a.geometries=l),o.length>0&&(a.materials=o),u.length>0&&(a.textures=u),c.length>0&&(a.images=c),d.length>0&&(a.shapes=d),f.length>0&&(a.skeletons=f),h.length>0&&(a.animations=h),g.length>0&&(a.nodes=g)}return a.object=i,a;function r(l){let o=[];for(let u in l){let c=l[u];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){let i=e.children[a];this.add(i.clone())}return this}};Rt.DEFAULT_UP=new B(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},uw={type:"move"},ml=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let i=null,s=null,r=null,l=this._targetRay,o=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){r=!0;for(let y of e.hand.values()){let m=n.getJointPose(y,a),p=this._getHandJoint(u,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),h=.02,g=.005;u.inputState.pinching&&f>h+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=h-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(i=n.getPose(e.targetRaySpace,a),i===null&&s!==null&&(i=s),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(uw)))}return l!==null&&(l.visible=i!==null),o!==null&&(o.visible=s!==null),u!==null&&(u.visible=r!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let a=new jn;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}},M1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zs={h:0,s:0,l:0},gd={h:0,s:0,l:0};function l0(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Re=class{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,n),this}setRGB(e,n,a,i=qe.workingColorSpace){return this.r=e,this.g=n,this.b=a,qe.colorSpaceToWorking(this,i),this}setHSL(e,n,a,i=qe.workingColorSpace){if(e=lx(e,1),n=et(n,0,1),a=et(a,0,1),n===0)this.r=this.g=this.b=a;else{let s=a<=.5?a*(1+n):a+n-a*n,r=2*a-s;this.r=l0(r,s,e+1/3),this.g=l0(r,s,e),this.b=l0(r,s,e-1/3)}return qe.colorSpaceToWorking(this,i),this}setStyle(e,n=Lt){function a(s){s!==void 0&&parseFloat(s)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],l=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return a(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return a(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return a(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ae("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Lt){let a=M1[e.toLowerCase()];return a!==void 0?this.setHex(a,n):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=ll(e.r),this.g=ll(e.g),this.b=ll(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return qe.workingToColorSpace(Dn.copy(this),e),Math.round(et(Dn.r*255,0,255))*65536+Math.round(et(Dn.g*255,0,255))*256+Math.round(et(Dn.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=qe.workingColorSpace){qe.workingToColorSpace(Dn.copy(this),n);let a=Dn.r,i=Dn.g,s=Dn.b,r=Math.max(a,i,s),l=Math.min(a,i,s),o,u,c=(l+r)/2;if(l===r)o=0,u=0;else{let d=r-l;switch(u=c<=.5?d/(r+l):d/(2-r-l),r){case a:o=(i-s)/d+(i<s?6:0);break;case i:o=(s-a)/d+2;break;case s:o=(a-i)/d+4;break}o/=6}return e.h=o,e.s=u,e.l=c,e}getRGB(e,n=qe.workingColorSpace){return qe.workingToColorSpace(Dn.copy(this),n),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Lt){qe.workingToColorSpace(Dn.copy(this),e);let n=Dn.r,a=Dn.g,i=Dn.b;return e!==Lt?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(i*255)})`}offsetHSL(e,n,a){return this.getHSL(zs),this.setHSL(zs.h+e,zs.s+n,zs.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(zs),e.getHSL(gd);let a=Qu(zs.h,gd.h,n),i=Qu(zs.s,gd.s,n),s=Qu(zs.l,gd.l,n);return this.setHSL(a,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,a=this.g,i=this.b,s=e.elements;return this.r=s[0]*n+s[3]*a+s[6]*i,this.g=s[1]*n+s[4]*a+s[7]*i,this.b=s[2]*n+s[5]*a+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new Re;Re.NAMES=M1;var Fr=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},qa=new B,Yi=new B,u0=new B,Zi=new B,Qo=new B,$o=new B,hb=new B,c0=new B,f0=new B,d0=new B,h0=new St,p0=new St,m0=new St,Ws=class t{constructor(e=new B,n=new B,a=new B){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,i){i.subVectors(a,n),qa.subVectors(e,n),i.cross(qa);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,n,a,i,s){qa.subVectors(i,n),Yi.subVectors(a,n),u0.subVectors(e,n);let r=qa.dot(qa),l=qa.dot(Yi),o=qa.dot(u0),u=Yi.dot(Yi),c=Yi.dot(u0),d=r*u-l*l;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(u*o-l*c)*f,g=(r*c-l*o)*f;return s.set(1-h-g,g,h)}static containsPoint(e,n,a,i){return this.getBarycoord(e,n,a,i,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,n,a,i,s,r,l,o){return this.getBarycoord(e,n,a,i,Zi)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(s,Zi.x),o.addScaledVector(r,Zi.y),o.addScaledVector(l,Zi.z),o)}static getInterpolatedAttribute(e,n,a,i,s,r){return h0.setScalar(0),p0.setScalar(0),m0.setScalar(0),h0.fromBufferAttribute(e,n),p0.fromBufferAttribute(e,a),m0.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(h0,s.x),r.addScaledVector(p0,s.y),r.addScaledVector(m0,s.z),r}static isFrontFacing(e,n,a,i){return qa.subVectors(a,n),Yi.subVectors(e,n),qa.cross(Yi).dot(i)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,i){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,a,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qa.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),qa.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,i,s){return t.getInterpolation(e,this.a,this.b,this.c,n,a,i,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let a=this.a,i=this.b,s=this.c,r,l;Qo.subVectors(i,a),$o.subVectors(s,a),c0.subVectors(e,a);let o=Qo.dot(c0),u=$o.dot(c0);if(o<=0&&u<=0)return n.copy(a);f0.subVectors(e,i);let c=Qo.dot(f0),d=$o.dot(f0);if(c>=0&&d<=c)return n.copy(i);let f=o*d-c*u;if(f<=0&&o>=0&&c<=0)return r=o/(o-c),n.copy(a).addScaledVector(Qo,r);d0.subVectors(e,s);let h=Qo.dot(d0),g=$o.dot(d0);if(g>=0&&h<=g)return n.copy(s);let y=h*u-o*g;if(y<=0&&u>=0&&g<=0)return l=u/(u-g),n.copy(a).addScaledVector($o,l);let m=c*g-h*d;if(m<=0&&d-c>=0&&h-g>=0)return hb.subVectors(s,i),l=(d-c)/(d-c+(h-g)),n.copy(i).addScaledVector(hb,l);let p=1/(m+y+f);return r=y*p,l=f*p,n.copy(a).addScaledVector(Qo,r).addScaledVector($o,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xa=class{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Wa.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Wa.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let a=Wa.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let a=e.geometry;if(a!==void 0){let s=a.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,l=s.count;r<l;r++)e.isMesh===!0?e.getVertexPosition(r,Wa):Wa.fromBufferAttribute(s,r),Wa.applyMatrix4(e.matrixWorld),this.expandByPoint(Wa);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xd.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),xd.copy(a.boundingBox)),xd.applyMatrix4(e.matrixWorld),this.union(xd)}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wa),Wa.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qu),yd.subVectors(this.max,qu),el.subVectors(e.a,qu),tl.subVectors(e.b,qu),nl.subVectors(e.c,qu),Hs.subVectors(tl,el),Gs.subVectors(nl,tl),wr.subVectors(el,nl);let n=[0,-Hs.z,Hs.y,0,-Gs.z,Gs.y,0,-wr.z,wr.y,Hs.z,0,-Hs.x,Gs.z,0,-Gs.x,wr.z,0,-wr.x,-Hs.y,Hs.x,0,-Gs.y,Gs.x,0,-wr.y,wr.x,0];return!g0(n,el,tl,nl,yd)||(n=[1,0,0,0,1,0,0,0,1],!g0(n,el,tl,nl,yd))?!1:(vd.crossVectors(Hs,Gs),n=[vd.x,vd.y,vd.z],g0(n,el,tl,nl,yd))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wa).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wa).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ki=[new B,new B,new B,new B,new B,new B,new B,new B],Wa=new B,xd=new xa,el=new B,tl=new B,nl=new B,Hs=new B,Gs=new B,wr=new B,qu=new B,yd=new B,vd=new B,Er=new B;function g0(t,e,n,a,i){for(let s=0,r=t.length-3;s<=r;s+=3){Er.fromArray(t,s);let l=i.x*Math.abs(Er.x)+i.y*Math.abs(Er.y)+i.z*Math.abs(Er.z),o=e.dot(Er),u=n.dot(Er),c=a.dot(Er);if(Math.max(-Math.max(o,u,c),Math.min(o,u,c))>l)return!1}return!0}var nn=new B,_d=new He,cw=0,Ht=class extends gi{constructor(e,n,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=Jd,this.updateRanges=[],this.gpuType=va,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=n.array[a+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)_d.fromBufferAttribute(this,n),_d.applyMatrix3(e),this.setXY(n,_d.x,_d.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix3(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Xa(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=gt(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Xa(n,this.array)),n}setX(e,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Xa(n,this.array)),n}setY(e,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Xa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Xa(n,this.array)),n}setW(e,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=gt(n,this.array),a=gt(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,i){return e*=this.itemSize,this.normalized&&(n=gt(n,this.array),a=gt(a,this.array),i=gt(i,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=i,this}setXYZW(e,n,a,i,s){return e*=this.itemSize,this.normalized&&(n=gt(n,this.array),a=gt(a,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jd&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var nc=class extends Ht{constructor(e,n,a){super(new Uint16Array(e),n,a)}};var ac=class extends Ht{constructor(e,n,a){super(new Uint32Array(e),n,a)}};var kn=class extends Ht{constructor(e,n,a){super(new Float32Array(e),n,a)}},fw=new xa,Wu=new B,x0=new B,Qn=class{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let a=this.center;n!==void 0?a.copy(n):fw.setFromPoints(e).getCenter(a);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,a.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wu.subVectors(e,this.center);let n=Wu.lengthSq();if(n>this.radius*this.radius){let a=Math.sqrt(n),i=(a-this.radius)*.5;this.center.addScaledVector(Wu,i/a),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(x0.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wu.copy(e.center).add(x0)),this.expandByPoint(Wu.copy(e.center).sub(x0))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},dw=0,Pa=new Ne,y0=new Rt,al=new B,pa=new xa,Xu=new xa,yn=new B,Tn=class t extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dw++}),this.uuid=Za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(NL(e)?ac:nc)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let a=this.attributes.normal;if(a!==void 0){let s=new Fe().getNormalMatrix(e);a.applyNormalMatrix(s),a.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pa.makeRotationFromQuaternion(e),this.applyMatrix4(Pa),this}rotateX(e){return Pa.makeRotationX(e),this.applyMatrix4(Pa),this}rotateY(e){return Pa.makeRotationY(e),this.applyMatrix4(Pa),this}rotateZ(e){return Pa.makeRotationZ(e),this.applyMatrix4(Pa),this}translate(e,n,a){return Pa.makeTranslation(e,n,a),this.applyMatrix4(Pa),this}scale(e,n,a){return Pa.makeScale(e,n,a),this.applyMatrix4(Pa),this}lookAt(e){return y0.lookAt(e),y0.updateMatrix(),this.applyMatrix4(y0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(al).negate(),this.translate(al.x,al.y,al.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let a=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];a.push(r.x,r.y,r.z||0)}this.setAttribute("position",new kn(a,3))}else{let a=Math.min(e.length,n.count);for(let i=0;i<a;i++){let s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,i=n.length;a<i;a++){let s=n[a];pa.setFromBufferAttribute(s),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,pa.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,pa.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(pa.min),this.boundingBox.expandByPoint(pa.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let a=this.boundingSphere.center;if(pa.setFromBufferAttribute(e),n)for(let s=0,r=n.length;s<r;s++){let l=n[s];Xu.setFromBufferAttribute(l),this.morphTargetsRelative?(yn.addVectors(pa.min,Xu.min),pa.expandByPoint(yn),yn.addVectors(pa.max,Xu.max),pa.expandByPoint(yn)):(pa.expandByPoint(Xu.min),pa.expandByPoint(Xu.max))}pa.getCenter(a);let i=0;for(let s=0,r=e.count;s<r;s++)yn.fromBufferAttribute(e,s),i=Math.max(i,a.distanceToSquared(yn));if(n)for(let s=0,r=n.length;s<r;s++){let l=n[s],o=this.morphTargetsRelative;for(let u=0,c=l.count;u<c;u++)yn.fromBufferAttribute(l,u),o&&(al.fromBufferAttribute(e,u),yn.add(al)),i=Math.max(i,a.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let a=n.position,i=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*a.count),4));let r=this.getAttribute("tangent"),l=[],o=[];for(let _=0;_<a.count;_++)l[_]=new B,o[_]=new B;let u=new B,c=new B,d=new B,f=new He,h=new He,g=new He,y=new B,m=new B;function p(_,w,E){u.fromBufferAttribute(a,_),c.fromBufferAttribute(a,w),d.fromBufferAttribute(a,E),f.fromBufferAttribute(s,_),h.fromBufferAttribute(s,w),g.fromBufferAttribute(s,E),c.sub(u),d.sub(u),h.sub(f),g.sub(f);let I=1/(h.x*g.y-g.x*h.y);isFinite(I)&&(y.copy(c).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(I),m.copy(d).multiplyScalar(h.x).addScaledVector(c,-g.x).multiplyScalar(I),l[_].add(y),l[w].add(y),l[E].add(y),o[_].add(m),o[w].add(m),o[E].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let _=0,w=x.length;_<w;++_){let E=x[_],I=E.start,F=E.count;for(let q=I,Y=I+F;q<Y;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}let v=new B,M=new B,C=new B,T=new B;function L(_){C.fromBufferAttribute(i,_),T.copy(C);let w=l[_];v.copy(w),v.sub(C.multiplyScalar(C.dot(w))).normalize(),M.crossVectors(T,w);let I=M.dot(o[_])<0?-1:1;r.setXYZW(_,v.x,v.y,v.z,I)}for(let _=0,w=x.length;_<w;++_){let E=x[_],I=E.start,F=E.count;for(let q=I,Y=I+F;q<Y;q+=3)L(e.getX(q+0)),L(e.getX(q+1)),L(e.getX(q+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Ht(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let f=0,h=a.count;f<h;f++)a.setXYZ(f,0,0,0);let i=new B,s=new B,r=new B,l=new B,o=new B,u=new B,c=new B,d=new B;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),r.fromBufferAttribute(n,m),c.subVectors(r,s),d.subVectors(i,s),c.cross(d),l.fromBufferAttribute(a,g),o.fromBufferAttribute(a,y),u.fromBufferAttribute(a,m),l.add(c),o.add(c),u.add(c),a.setXYZ(g,l.x,l.y,l.z),a.setXYZ(y,o.x,o.y,o.z),a.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,h=n.count;f<h;f+=3)i.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),r.fromBufferAttribute(n,f+2),c.subVectors(r,s),d.subVectors(i,s),c.cross(d),a.setXYZ(f+0,c.x,c.y,c.z),a.setXYZ(f+1,c.x,c.y,c.z),a.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)yn.fromBufferAttribute(e,n),yn.normalize(),e.setXYZ(n,yn.x,yn.y,yn.z)}toNonIndexed(){function e(l,o){let u=l.array,c=l.itemSize,d=l.normalized,f=new u.constructor(o.length*c),h=0,g=0;for(let y=0,m=o.length;y<m;y++){l.isInterleavedBufferAttribute?h=o[y]*l.data.stride+l.offset:h=o[y]*c;for(let p=0;p<c;p++)f[g++]=u[h++]}return new Ht(f,c,d)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,a=this.index.array,i=this.attributes;for(let l in i){let o=i[l],u=e(o,a);n.setAttribute(l,u)}let s=this.morphAttributes;for(let l in s){let o=[],u=s[l];for(let c=0,d=u.length;c<d;c++){let f=u[c],h=e(f,a);o.push(h)}n.morphAttributes[l]=o}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let l=0,o=r.length;l<o;l++){let u=r[l];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let o=this.parameters;for(let u in o)o[u]!==void 0&&(e[u]=o[u]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let a=this.attributes;for(let o in a){let u=a[o];e.data.attributes[o]=u.toJSON(e.data)}let i={},s=!1;for(let o in this.morphAttributes){let u=this.morphAttributes[o],c=[];for(let d=0,f=u.length;d<f;d++){let h=u[d];c.push(h.toJSON(e.data))}c.length>0&&(i[o]=c,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let a=e.index;a!==null&&this.setIndex(a.clone());let i=e.attributes;for(let u in i){let c=i[u];this.setAttribute(u,c.clone(n))}let s=e.morphAttributes;for(let u in s){let c=[],d=s[u];for(let f=0,h=d.length;f<h;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let u=0,c=r.length;u<c;u++){let d=r[u];this.addGroup(d.start,d.count,d.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zs=class{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Jd,this.updateRanges=[],this.version=0,this.uuid=Za()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=n.array[a+i];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Za()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Za()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Fn=new B,Ks=class t{constructor(e,n,a,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)Fn.fromBufferAttribute(this,n),Fn.applyMatrix4(e),this.setXYZ(n,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Fn.fromBufferAttribute(this,n),Fn.applyNormalMatrix(e),this.setXYZ(n,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Fn.fromBufferAttribute(this,n),Fn.transformDirection(e),this.setXYZ(n,Fn.x,Fn.y,Fn.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=Xa(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=gt(a,this.array)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Xa(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Xa(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Xa(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Xa(n,this.array)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=gt(n,this.array),a=gt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=gt(n,this.array),a=gt(a,this.array),i=gt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=i,this}setXYZW(e,n,a,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=gt(n,this.array),a=gt(a,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ec("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let a=0;a<this.count;a++){let i=a*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[i+s])}return new Ht(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new t(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ec("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let a=0;a<this.count;a++){let i=a*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hw=0,zn=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hw++}),this.uuid=Za(),this.name="",this.type="Material",this.blending=Pr,this.side=Ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hd,this.blendDst=Gd,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let a=e[n];if(a===void 0){Ae(`Material: parameter '${n}' has value of undefined.`);continue}let i=this[n];if(i===void 0){Ae(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(a):i&&i.isVector3&&a&&a.isVector3?i.copy(a):this[n]=a}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(a.blending=this.blending),this.side!==Ka&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Hd&&(a.blendSrc=this.blendSrc),this.blendDst!==Gd&&(a.blendDst=this.blendDst),this.blendEquation!==Xs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==U0&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function i(s){let r=[];for(let l in s){let o=s[l];delete o.metadata,r.push(o)}return r}if(n){let s=i(e.textures),r=i(e.images);s.length>0&&(a.textures=s),r.length>0&&(a.images=r)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,a=null;if(n!==null){let i=n.length;a=new Array(i);for(let s=0;s!==i;++s)a[s]=n[s].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ji=new B,v0=new B,Sd=new B,Vs=new B,_0=new B,Md=new B,S0=new B,Js=class{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=Ji.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,n),Ji.distanceToSquared(e))}distanceSqToSegment(e,n,a,i){v0.copy(e).add(n).multiplyScalar(.5),Sd.copy(n).sub(e).normalize(),Vs.copy(this.origin).sub(v0);let s=e.distanceTo(n)*.5,r=-this.direction.dot(Sd),l=Vs.dot(this.direction),o=-Vs.dot(Sd),u=Vs.lengthSq(),c=Math.abs(1-r*r),d,f,h,g;if(c>0)if(d=r*o-l,f=r*l-o,g=s*c,d>=0)if(f>=-g)if(f<=g){let y=1/c;d*=y,f*=y,h=d*(d+r*f+2*l)+f*(r*d+f+2*o)+u}else f=s,d=Math.max(0,-(r*f+l)),h=-d*d+f*(f+2*o)+u;else f=-s,d=Math.max(0,-(r*f+l)),h=-d*d+f*(f+2*o)+u;else f<=-g?(d=Math.max(0,-(-r*s+l)),f=d>0?-s:Math.min(Math.max(-s,-o),s),h=-d*d+f*(f+2*o)+u):f<=g?(d=0,f=Math.min(Math.max(-s,-o),s),h=f*(f+2*o)+u):(d=Math.max(0,-(r*s+l)),f=d>0?s:Math.min(Math.max(-s,-o),s),h=-d*d+f*(f+2*o)+u);else f=r>0?-s:s,d=Math.max(0,-(r*f+l)),h=-d*d+f*(f+2*o)+u;return a&&a.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(v0).addScaledVector(Sd,f),h}intersectSphere(e,n){Ji.subVectors(e.center,this.origin);let a=Ji.dot(this.direction),i=Ji.dot(Ji)-a*a,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),l=a-r,o=a+r;return o<0?null:l<0?this.at(o,n):this.at(l,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){let a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,i,s,r,l,o,u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(a=(e.min.x-f.x)*u,i=(e.max.x-f.x)*u):(a=(e.max.x-f.x)*u,i=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,r=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,r=(e.min.y-f.y)*c),a>r||s>i||((s>a||isNaN(a))&&(a=s),(r<i||isNaN(i))&&(i=r),d>=0?(l=(e.min.z-f.z)*d,o=(e.max.z-f.z)*d):(l=(e.max.z-f.z)*d,o=(e.min.z-f.z)*d),a>o||l>i)||((l>a||a!==a)&&(a=l),(o<i||i!==i)&&(i=o),i<0)?null:this.at(a>=0?a:i,n)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,n,a,i,s){_0.subVectors(n,e),Md.subVectors(a,e),S0.crossVectors(_0,Md);let r=this.direction.dot(S0),l;if(r>0){if(i)return null;l=1}else if(r<0)l=-1,r=-r;else return null;Vs.subVectors(this.origin,e);let o=l*this.direction.dot(Md.crossVectors(Vs,Md));if(o<0)return null;let u=l*this.direction.dot(_0.cross(Vs));if(u<0||o+u>r)return null;let c=-l*Vs.dot(S0);return c<0?null:this.at(c/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ja=class extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},pb=new Ne,Ir=new Js,bd=new Qn,mb=new B,Td=new B,Ad=new B,Cd=new B,M0=new B,Ld=new B,gb=new B,wd=new B,xt=class extends Rt{constructor(e=new Tn,n=new Ja){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){let i=n[a[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){let a=this.geometry,i=a.attributes.position,s=a.morphAttributes.position,r=a.morphTargetsRelative;n.fromBufferAttribute(i,e);let l=this.morphTargetInfluences;if(s&&l){Ld.set(0,0,0);for(let o=0,u=s.length;o<u;o++){let c=l[o],d=s[o];c!==0&&(M0.fromBufferAttribute(d,e),r?Ld.addScaledVector(M0,c):Ld.addScaledVector(M0.sub(n),c))}n.add(Ld)}return n}raycast(e,n){let a=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),bd.copy(a.boundingSphere),bd.applyMatrix4(s),Ir.copy(e.ray).recast(e.near),!(bd.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(bd,mb)===null||Ir.origin.distanceToSquared(mb)>(e.far-e.near)**2))&&(pb.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(pb),!(a.boundingBox!==null&&Ir.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,a){let i,s=this.geometry,r=this.material,l=s.index,o=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(l!==null)if(Array.isArray(r))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=r[m.materialIndex],x=Math.max(m.start,h.start),v=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let M=x,C=v;M<C;M+=3){let T=l.getX(M),L=l.getX(M+1),_=l.getX(M+2);i=Ed(this,p,e,a,u,c,d,T,L,_),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{let g=Math.max(0,h.start),y=Math.min(l.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let x=l.getX(m),v=l.getX(m+1),M=l.getX(m+2);i=Ed(this,r,e,a,u,c,d,x,v,M),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}else if(o!==void 0)if(Array.isArray(r))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=r[m.materialIndex],x=Math.max(m.start,h.start),v=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let M=x,C=v;M<C;M+=3){let T=M,L=M+1,_=M+2;i=Ed(this,p,e,a,u,c,d,T,L,_),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{let g=Math.max(0,h.start),y=Math.min(o.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let x=m,v=m+1,M=m+2;i=Ed(this,r,e,a,u,c,d,x,v,M),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}}};function pw(t,e,n,a,i,s,r,l){let o;if(e.side===An?o=a.intersectTriangle(r,s,i,!0,l):o=a.intersectTriangle(i,s,r,e.side===Ka,l),o===null)return null;wd.copy(l),wd.applyMatrix4(t.matrixWorld);let u=n.ray.origin.distanceTo(wd);return u<n.near||u>n.far?null:{distance:u,point:wd.clone(),object:t}}function Ed(t,e,n,a,i,s,r,l,o,u){t.getVertexPosition(l,Td),t.getVertexPosition(o,Ad),t.getVertexPosition(u,Cd);let c=pw(t,e,n,a,Td,Ad,Cd,gb);if(c){let d=new B;Ws.getBarycoord(gb,Td,Ad,Cd,d),i&&(c.uv=Ws.getInterpolatedAttribute(i,l,o,u,d,new He)),s&&(c.uv1=Ws.getInterpolatedAttribute(s,l,o,u,d,new He)),r&&(c.normal=Ws.getInterpolatedAttribute(r,l,o,u,d,new B),c.normal.dot(a.direction)>0&&c.normal.multiplyScalar(-1));let f={a:l,b:o,c:u,normal:new B,materialIndex:0};Ws.getNormal(Td,Ad,Cd,f.normal),c.face=f,c.barycoord=d}return c}var Yu=new St,xb=new St,yb=new St,mw=new St,vb=new Ne,Id=new B,b0=new Qn,_b=new Ne,T0=new Js,ic=class extends xt{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=E0,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xa),this.boundingBox.makeEmpty();let n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,Id),this.boundingBox.expandByPoint(Id)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qn),this.boundingSphere.makeEmpty();let n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,Id),this.boundingSphere.expandByPoint(Id)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){let a=this.material,i=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),b0.copy(this.boundingSphere),b0.applyMatrix4(i),e.ray.intersectsSphere(b0)!==!1&&(_b.copy(i).invert(),T0.copy(e.ray).applyMatrix4(_b),!(this.boundingBox!==null&&T0.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,T0)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new St,n=this.geometry.attributes.skinWeight;for(let a=0,i=n.count;a<i;a++){e.fromBufferAttribute(n,a);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),n.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===E0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===l1?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){let a=this.skeleton,i=this.geometry;xb.fromBufferAttribute(i.attributes.skinIndex,e),yb.fromBufferAttribute(i.attributes.skinWeight,e),n.isVector4?(Yu.copy(n),n.set(0,0,0,0)):(Yu.set(...n,1),n.set(0,0,0)),Yu.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let r=yb.getComponent(s);if(r!==0){let l=xb.getComponent(s);vb.multiplyMatrices(a.bones[l].matrixWorld,a.boneInverses[l]),n.addScaledVector(mw.copy(Yu).applyMatrix4(vb),r)}}return n.isVector4&&(n.w=Yu.w),n.applyMatrix4(this.bindMatrixInverse)}},gl=class extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}},xl=class extends ln{constructor(e=null,n=1,a=1,i,s,r,l,o,u=jt,c=jt,d,f){super(null,r,l,o,u,c,i,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Sb=new Ne,gw=new Ne,sc=class t{constructor(e=[],n=[]){this.uuid=Za(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,i=this.bones.length;a<i;a++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){let a=new Ne;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){let a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){let a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){let e=this.bones,n=this.boneInverses,a=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){let l=e[s]?e[s].matrixWorld:gw;Sb.multiplyMatrices(l,n[s]),Sb.toArray(a,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new t(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let n=new Float32Array(e*e*4);n.set(this.boneMatrices);let a=new xl(n,e,e,_a,va);return a.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=a,this}getBoneByName(e){for(let n=0,a=this.bones.length;n<a;n++){let i=this.bones[n];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let a=0,i=e.bones.length;a<i;a++){let s=e.bones[a],r=n[s];r===void 0&&(Ae("Skeleton: No bone found with UUID:",s),r=new gl),this.bones.push(r),this.boneInverses.push(new Ne().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let n=this.bones,a=this.boneInverses;for(let i=0,s=n.length;i<s;i++){let r=n[i];e.bones.push(r.uuid);let l=a[i];e.boneInverses.push(l.toArray())}return e}},js=class extends Ht{constructor(e,n,a,i=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},il=new Ne,Mb=new Ne,Rd=[],bb=new xa,xw=new Ne,Zu=new xt,Ku=new Qn,kr=class extends xt{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new js(new Float32Array(a*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<a;i++)this.setMatrixAt(i,xw)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new xa),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,il),bb.copy(e.boundingBox).applyMatrix4(il),this.boundingBox.union(bb)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,il),Ku.copy(e.boundingSphere).applyMatrix4(il),this.boundingSphere.union(Ku)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let a=n.morphTargetInfluences,i=this.morphTexture.source.data.data,s=a.length+1,r=e*s+1;for(let l=0;l<a.length;l++)a[l]=i[r+l]}raycast(e,n){let a=this.matrixWorld,i=this.count;if(Zu.geometry=this.geometry,Zu.material=this.material,Zu.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ku.copy(this.boundingSphere),Ku.applyMatrix4(a),e.ray.intersectsSphere(Ku)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,il),Mb.multiplyMatrices(a,il),Zu.matrixWorld=Mb,Zu.raycast(e,Rd);for(let r=0,l=Rd.length;r<l;r++){let o=Rd[r];o.instanceId=s,o.object=this,n.push(o)}Rd.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new js(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){let a=n.morphTargetInfluences,i=a.length+1;this.morphTexture===null&&(this.morphTexture=new xl(new Float32Array(i*this.count),i,this.count,Th,va));let s=this.morphTexture.source.data.data,r=0;for(let u=0;u<a.length;u++)r+=a[u];let l=this.geometry.morphTargetsRelative?1:1-r,o=i*e;return s[o]=l,s.set(a,o+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},A0=new B,yw=new B,vw=new Fe,hi=class{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,i){return this.normal.set(e,n,a),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){let i=A0.subVectors(a,n).cross(yw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,a=!0){let i=e.delta(A0),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return a===!0&&(r<0||r>1)?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let a=n||vw.getNormalMatrix(e),i=this.coplanarPoint(A0).applyMatrix4(e),s=this.normal.applyMatrix3(a).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rr=new Qn,_w=new He(.5,.5),Dd=new B,yl=class{constructor(e=new hi,n=new hi,a=new hi,i=new hi,s=new hi,r=new hi){this.planes=[e,n,a,i,s,r]}set(e,n,a,i,s,r){let l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(a),l[3].copy(i),l[4].copy(s),l[5].copy(r),this}copy(e){let n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=Ya,a=!1){let i=this.planes,s=e.elements,r=s[0],l=s[1],o=s[2],u=s[3],c=s[4],d=s[5],f=s[6],h=s[7],g=s[8],y=s[9],m=s[10],p=s[11],x=s[12],v=s[13],M=s[14],C=s[15];if(i[0].setComponents(u-r,h-c,p-g,C-x).normalize(),i[1].setComponents(u+r,h+c,p+g,C+x).normalize(),i[2].setComponents(u+l,h+d,p+y,C+v).normalize(),i[3].setComponents(u-l,h-d,p-y,C-v).normalize(),a)i[4].setComponents(o,f,m,M).normalize(),i[5].setComponents(u-o,h-f,p-m,C-M).normalize();else if(i[4].setComponents(u-o,h-f,p-m,C-M).normalize(),n===Ya)i[5].setComponents(u+o,h+f,p+m,C+M).normalize();else if(n===cl)i[5].setComponents(o,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){Rr.center.set(0,0,0);let n=_w.distanceTo(e.center);return Rr.radius=.7071067811865476+n,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){let n=this.planes,a=e.center,i=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(a)<i)return!1;return!0}intersectsBox(e){let n=this.planes;for(let a=0;a<6;a++){let i=n[a];if(Dd.x=i.normal.x>0?e.max.x:e.min.x,Dd.y=i.normal.y>0?e.max.y:e.min.y,Dd.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Dd)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var vl=class extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},th=new B,nh=new B,Tb=new Ne,Ju=new Js,Pd=new Qn,C0=new B,Ab=new B,zr=class extends Rt{constructor(e=new Tn,n=new vl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,a=[0];for(let i=1,s=n.count;i<s;i++)th.fromBufferAttribute(n,i-1),nh.fromBufferAttribute(n,i),a[i]=a[i-1],a[i]+=th.distanceTo(nh);e.setAttribute("lineDistance",new kn(a,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){let a=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Pd.copy(a.boundingSphere),Pd.applyMatrix4(i),Pd.radius+=s,e.ray.intersectsSphere(Pd)===!1)return;Tb.copy(i).invert(),Ju.copy(e.ray).applyMatrix4(Tb);let l=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,u=this.isLineSegments?2:1,c=a.index,f=a.attributes.position;if(c!==null){let h=Math.max(0,r.start),g=Math.min(c.count,r.start+r.count);for(let y=h,m=g-1;y<m;y+=u){let p=c.getX(y),x=c.getX(y+1),v=Ud(this,e,Ju,o,p,x,y);v&&n.push(v)}if(this.isLineLoop){let y=c.getX(g-1),m=c.getX(h),p=Ud(this,e,Ju,o,y,m,g-1);p&&n.push(p)}}else{let h=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let y=h,m=g-1;y<m;y+=u){let p=Ud(this,e,Ju,o,y,y+1,y);p&&n.push(p)}if(this.isLineLoop){let y=Ud(this,e,Ju,o,g-1,h,g-1);y&&n.push(y)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){let i=n[a[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}};function Ud(t,e,n,a,i,s,r){let l=t.geometry.attributes.position;if(th.fromBufferAttribute(l,i),nh.fromBufferAttribute(l,s),n.distanceSqToSegment(th,nh,C0,Ab)>a)return;C0.applyMatrix4(t.matrixWorld);let u=e.ray.origin.distanceTo(C0);if(!(u<e.near||u>e.far))return{distance:u,point:Ab.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}var Cb=new B,Lb=new B,rc=class extends zr{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,a=[];for(let i=0,s=n.count;i<s;i+=2)Cb.fromBufferAttribute(n,i),Lb.fromBufferAttribute(n,i+1),a[i]=i===0?0:a[i-1],a[i+1]=a[i]+Cb.distanceTo(Lb);e.setAttribute("lineDistance",new kn(a,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},oc=class extends zr{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}},_l=class extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wb=new Ne,O0=new Js,Od=new Qn,Nd=new B,lc=class extends Rt{constructor(e=new Tn,n=new _l){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){let a=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Od.copy(a.boundingSphere),Od.applyMatrix4(i),Od.radius+=s,e.ray.intersectsSphere(Od)===!1)return;wb.copy(i).invert(),O0.copy(e.ray).applyMatrix4(wb);let l=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,u=a.index,d=a.attributes.position;if(u!==null){let f=Math.max(0,r.start),h=Math.min(u.count,r.start+r.count);for(let g=f,y=h;g<y;g++){let m=u.getX(g);Nd.fromBufferAttribute(d,m),Eb(Nd,m,o,i,e,n,this)}}else{let f=Math.max(0,r.start),h=Math.min(d.count,r.start+r.count);for(let g=f,y=h;g<y;g++)Nd.fromBufferAttribute(d,g),Eb(Nd,g,o,i,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){let i=n[a[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}};function Eb(t,e,n,a,i,s,r){let l=O0.distanceSqToPoint(t);if(l<n){let o=new B;O0.closestPointToPoint(t,o),o.applyMatrix4(a);let u=i.ray.origin.distanceTo(o);if(u<i.near||u>i.far)return;s.push({distance:u,distanceToRay:Math.sqrt(l),point:o,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}var uc=class extends ln{constructor(e=[],n=nr,a,i,s,r,l,o,u,c){super(e,n,a,i,s,r,l,o,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cc=class extends ln{constructor(e,n,a,i,s,r,l,o,u){super(e,n,a,i,s,r,l,o,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $i=class extends ln{constructor(e,n,a=Qa,i,s,r,l=jt,o=jt,u,c=mi,d=1){if(c!==mi&&c!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:n,depth:d};super(f,i,s,r,l,o,c,a,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},ah=class extends $i{constructor(e,n=Qa,a=nr,i,s,r=jt,l=jt,o,u=mi){let c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,n,a,i,s,r,l,o,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},fc=class extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Qs=class t extends Tn{constructor(e=1,n=1,a=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:i,heightSegments:s,depthSegments:r};let l=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],u=[],c=[],d=[],f=0,h=0;g("z","y","x",-1,-1,a,n,e,r,s,0),g("z","y","x",1,-1,a,n,-e,r,s,1),g("x","z","y",1,1,e,a,n,i,r,2),g("x","z","y",1,-1,e,a,-n,i,r,3),g("x","y","z",1,-1,e,n,a,i,s,4),g("x","y","z",-1,-1,e,n,-a,i,s,5),this.setIndex(o),this.setAttribute("position",new kn(u,3)),this.setAttribute("normal",new kn(c,3)),this.setAttribute("uv",new kn(d,2));function g(y,m,p,x,v,M,C,T,L,_,w){let E=M/L,I=C/_,F=M/2,q=C/2,Y=T/2,U=L+1,H=_+1,G=0,Q=0,ne=new B;for(let ie=0;ie<H;ie++){let Me=ie*I-q;for(let be=0;be<U;be++){let tt=be*E-F;ne[y]=tt*x,ne[m]=Me*v,ne[p]=Y,u.push(ne.x,ne.y,ne.z),ne[y]=0,ne[m]=0,ne[p]=T>0?1:-1,c.push(ne.x,ne.y,ne.z),d.push(be/L),d.push(1-ie/_),G+=1}}for(let ie=0;ie<_;ie++)for(let Me=0;Me<L;Me++){let be=f+Me+U*ie,tt=f+Me+U*(ie+1),ot=f+(Me+1)+U*(ie+1),Be=f+(Me+1)+U*ie;o.push(be,tt,Be),o.push(tt,ot,Be),Q+=6}l.addGroup(h,Q,w),h+=Q,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var $s=class t extends Tn{constructor(e=1,n=1,a=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:i};let s=e/2,r=n/2,l=Math.floor(a),o=Math.floor(i),u=l+1,c=o+1,d=e/l,f=n/o,h=[],g=[],y=[],m=[];for(let p=0;p<c;p++){let x=p*f-r;for(let v=0;v<u;v++){let M=v*d-s;g.push(M,-x,0),y.push(0,0,1),m.push(v/l),m.push(1-p/o)}}for(let p=0;p<o;p++)for(let x=0;x<l;x++){let v=x+u*p,M=x+u*(p+1),C=x+1+u*(p+1),T=x+1+u*p;h.push(v,M,T),h.push(M,C,T)}this.setIndex(h),this.setAttribute("position",new kn(g,3)),this.setAttribute("normal",new kn(y,3)),this.setAttribute("uv",new kn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};function Wr(t){let e={};for(let n in t){e[n]={};for(let a in t[n]){let i=t[n][a];if(Ib(i))i.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=i.clone();else if(Array.isArray(i))if(Ib(i[0])){let s=[];for(let r=0,l=i.length;r<l;r++)s[r]=i[r].clone();e[n][a]=s}else e[n][a]=i.slice();else e[n][a]=i}}return e}function Pn(t){let e={};for(let n=0;n<t.length;n++){let a=Wr(t[n]);for(let i in a)e[i]=a[i]}return e}function Ib(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Sw(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ux(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}var b1={clone:Wr,merge:Pn},Mw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hn=class extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mw,this.fragmentShader=bw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=Sw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?n.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?n.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[i]={type:"m4",value:r.toArray()}:n.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let a={};for(let i in this.extensions)this.extensions[i]===!0&&(a[i]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}},ih=class extends Hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},yi=class extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$n=class extends yi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var dc=class extends zn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=xh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sh=class extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=c1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rh=class extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Bd(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function Tw(t){function e(i,s){return t[i]-t[s]}let n=t.length,a=new Array(n);for(let i=0;i!==n;++i)a[i]=i;return a.sort(e),a}function Rb(t,e,n){let a=t.length,i=new t.constructor(a);for(let s=0,r=0;r!==a;++s){let l=n[s]*e;for(let o=0;o!==e;++o)i[r++]=t[l+o]}return i}function T1(t,e,n,a){let i=1,s=t[0];for(;s!==void 0&&s[a]===void 0;)s=t[i++];if(s===void 0)return;let r=s[a];if(r!==void 0)if(Array.isArray(r))do r=s[a],r!==void 0&&(e.push(s.time),n.push(...r)),s=t[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[a],r!==void 0&&(e.push(s.time),r.toArray(n,n.length)),s=t[i++];while(s!==void 0);else do r=s[a],r!==void 0&&(e.push(s.time),n.push(r)),s=t[i++];while(s!==void 0)}var vi=class{constructor(e,n,a,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new n.constructor(a),this.sampleValues=n,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,a=this._cachedIndex,i=n[a],s=n[a-1];e:{t:{let r;n:{a:if(!(e<i)){for(let l=a+2;;){if(i===void 0){if(e<s)break a;return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===l)break;if(s=i,i=n[++a],e<i)break t}r=n.length;break n}if(!(e>=s)){let l=n[1];e<l&&(a=2,s=l);for(let o=a-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===o)break;if(i=s,s=n[--a-1],e>=s)break t}r=a,a=0;break n}break e}for(;a<r;){let l=a+r>>>1;e<n[l]?r=l:a=l+1}if(i=n[a],s=n[a-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,s,i)}return this.interpolate_(a,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,a=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)n[r]=a[s+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},oh=class extends vi{constructor(e,n,a,i){super(e,n,a,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:R0,endingEnd:R0}}intervalChanged_(e,n,a){let i=this.parameterPositions,s=e-2,r=e+1,l=i[s],o=i[r];if(l===void 0)switch(this.getSettings_().endingStart){case D0:s=e,l=2*n-a;break;case P0:s=i.length-2,l=n+i[s]-i[s+1];break;default:s=e,l=a}if(o===void 0)switch(this.getSettings_().endingEnd){case D0:r=e,o=2*a-n;break;case P0:r=1,o=a+i[1]-i[0];break;default:r=e-1,o=n}let u=(a-n)*.5,c=this.valueSize;this._weightPrev=u/(n-l),this._weightNext=u/(o-a),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(e,n,a,i){let s=this.resultBuffer,r=this.sampleValues,l=this.valueSize,o=e*l,u=o-l,c=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(a-n)/(i-n),y=g*g,m=y*g,p=-f*m+2*f*y-f*g,x=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,v=(-1-h)*m+(1.5+h)*y+.5*g,M=h*m-h*y;for(let C=0;C!==l;++C)s[C]=p*r[c+C]+x*r[u+C]+v*r[o+C]+M*r[d+C];return s}},lh=class extends vi{constructor(e,n,a,i){super(e,n,a,i)}interpolate_(e,n,a,i){let s=this.resultBuffer,r=this.sampleValues,l=this.valueSize,o=e*l,u=o-l,c=(a-n)/(i-n),d=1-c;for(let f=0;f!==l;++f)s[f]=r[u+f]*d+r[o+f]*c;return s}},uh=class extends vi{constructor(e,n,a,i){super(e,n,a,i)}interpolate_(e){return this.copySampleValue_(e-1)}},ch=class extends vi{interpolate_(e,n,a,i){let s=this.resultBuffer,r=this.sampleValues,l=this.valueSize,o=e*l,u=o-l,c=this.settings||this.DefaultSettings_,d=c.inTangents,f=c.outTangents;if(!d||!f){let y=(a-n)/(i-n),m=1-y;for(let p=0;p!==l;++p)s[p]=r[u+p]*m+r[o+p]*y;return s}let h=l*2,g=e-1;for(let y=0;y!==l;++y){let m=r[u+y],p=r[o+y],x=g*h+y*2,v=f[x],M=f[x+1],C=e*h+y*2,T=d[C],L=d[C+1],_=(a-n)/(i-n),w,E,I,F,q;for(let Y=0;Y<8;Y++){w=_*_,E=w*_,I=1-_,F=I*I,q=F*I;let H=q*n+3*F*_*v+3*I*w*T+E*i-a;if(Math.abs(H)<1e-10)break;let G=3*F*(v-n)+6*I*_*(T-v)+3*w*(i-T);if(Math.abs(G)<1e-10)break;_=_-H/G,_=Math.max(0,Math.min(1,_))}s[y]=q*m+3*F*_*M+3*I*w*L+E*p}return s}},ea=class{constructor(e,n,a,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bd(n,this.TimeBufferType),this.values=Bd(a,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,a;if(n.toJSON!==this.toJSON)a=n.toJSON(e);else{a={name:e.name,times:Bd(e.times,Array),values:Bd(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(a.interpolation=i)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new uh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new ch(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.settings=this.settings),n}setInterpolation(e){let n;switch(e){case Or:n=this.InterpolantFactoryMethodDiscrete;break;case Nr:n=this.InterpolantFactoryMethodLinear;break;case zd:n=this.InterpolantFactoryMethodSmooth;break;case I0:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return Ae("KeyframeTrack:",a),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return zd;case this.InterpolantFactoryMethodBezier:return I0}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let a=0,i=n.length;a!==i;++a)n[a]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let a=0,i=n.length;a!==i;++a)n[a]*=e}return this}trim(e,n){let a=this.times,i=a.length,s=0,r=i-1;for(;s!==i&&a[s]<e;)++s;for(;r!==-1&&a[r]>n;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let l=this.getValueSize();this.times=a.slice(s,r),this.values=this.values.slice(s*l,r*l)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(De("KeyframeTrack: Invalid value size in track.",this),e=!1);let a=this.times,i=this.values,s=a.length;s===0&&(De("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let l=0;l!==s;l++){let o=a[l];if(typeof o=="number"&&isNaN(o)){De("KeyframeTrack: Time is not a valid number.",this,l,o),e=!1;break}if(r!==null&&r>o){De("KeyframeTrack: Out of order keys.",this,l,o,r),e=!1;break}r=o}if(i!==void 0&&BL(i))for(let l=0,o=i.length;l!==o;++l){let u=i[l];if(isNaN(u)){De("KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),a=this.getValueSize(),i=this.getInterpolation()===zd,s=e.length-1,r=1;for(let l=1;l<s;++l){let o=!1,u=e[l],c=e[l+1];if(u!==c&&(l!==1||u!==e[0]))if(i)o=!0;else{let d=l*a,f=d-a,h=d+a;for(let g=0;g!==a;++g){let y=n[d+g];if(y!==n[f+g]||y!==n[h+g]){o=!0;break}}}if(o){if(l!==r){e[r]=e[l];let d=l*a,f=r*a;for(let h=0;h!==a;++h)n[f+h]=n[d+h]}++r}}if(s>0){e[r]=e[s];for(let l=s*a,o=r*a,u=0;u!==a;++u)n[o+u]=n[l+u];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=n.slice(0,r*a)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),a=this.constructor,i=new a(this.name,e,n);return i.createInterpolant=this.createInterpolant,i}};ea.prototype.ValueTypeName="";ea.prototype.TimeBufferType=Float32Array;ea.prototype.ValueBufferType=Float32Array;ea.prototype.DefaultInterpolation=Nr;var es=class extends ea{constructor(e,n,a){super(e,n,a)}};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Or;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var hc=class extends ea{constructor(e,n,a,i){super(e,n,a,i)}};hc.prototype.ValueTypeName="color";var _i=class extends ea{constructor(e,n,a,i){super(e,n,a,i)}};_i.prototype.ValueTypeName="number";var fh=class extends vi{constructor(e,n,a,i){super(e,n,a,i)}interpolate_(e,n,a,i){let s=this.resultBuffer,r=this.sampleValues,l=this.valueSize,o=(a-n)/(i-n),u=e*l;for(let c=u+l;u!==c;u+=4)ma.slerpFlat(s,0,r,u-l,r,u,o);return s}},Si=class extends ea{constructor(e,n,a,i){super(e,n,a,i)}InterpolantFactoryMethodLinear(e){return new fh(this.times,this.values,this.getValueSize(),e)}};Si.prototype.ValueTypeName="quaternion";Si.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends ea{constructor(e,n,a){super(e,n,a)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Or;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends ea{constructor(e,n,a,i){super(e,n,a,i)}};Mi.prototype.ValueTypeName="vector";var pc=class{constructor(e="",n=-1,a=[],i=u1){this.name=e,this.tracks=a,this.duration=n,this.blendMode=i,this.uuid=Za(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let n=[],a=e.tracks,i=1/(e.fps||1);for(let r=0,l=a.length;r!==l;++r)n.push(Cw(a[r]).scale(i));let s=new this(e.name,e.duration,n,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let n=[],a=e.tracks,i={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,r=a.length;s!==r;++s)n.push(ea.toJSON(a[s]));return i}static CreateFromMorphTargetSequence(e,n,a,i){let s=n.length,r=[];for(let l=0;l<s;l++){let o=[],u=[];o.push((l+s-1)%s,l,(l+1)%s),u.push(0,1,0);let c=Tw(o);o=Rb(o,1,c),u=Rb(u,1,c),!i&&o[0]===0&&(o.push(s),u.push(u[0])),r.push(new _i(".morphTargetInfluences["+n[l].name+"]",o,u).scale(1/a))}return new this(e,-1,r)}static findByName(e,n){let a=e;if(!Array.isArray(e)){let i=e;a=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<a.length;i++)if(a[i].name===n)return a[i];return null}static CreateClipsFromMorphTargetSequences(e,n,a){let i={},s=/^([\w-]*?)([\d]+)$/;for(let l=0,o=e.length;l<o;l++){let u=e[l],c=u.name.match(s);if(c&&c.length>1){let d=c[1],f=i[d];f||(i[d]=f=[]),f.push(u)}}let r=[];for(let l in i)r.push(this.CreateFromMorphTargetSequence(l,i[l],n,a));return r}static parseAnimation(e,n){if(Ae("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return De("AnimationClip: No animation in JSONLoader data."),null;let a=function(d,f,h,g,y){if(h.length!==0){let m=[],p=[];T1(h,m,p,g),m.length!==0&&y.push(new d(f,m,p))}},i=[],s=e.name||"default",r=e.fps||30,l=e.blendMode,o=e.length||-1,u=e.hierarchy||[];for(let d=0;d<u.length;d++){let f=u[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let h={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let y=0;y<f[g].morphTargets.length;y++)h[f[g].morphTargets[y]]=-1;for(let y in h){let m=[],p=[];for(let x=0;x!==f[g].morphTargets.length;++x){let v=f[g];m.push(v.time),p.push(v.morphTarget===y?1:0)}i.push(new _i(".morphTargetInfluence["+y+"]",m,p))}o=h.length*r}else{let h=".bones["+n[d].name+"]";a(Mi,h+".position",f,"pos",i),a(Si,h+".quaternion",f,"rot",i),a(Mi,h+".scale",f,"scl",i)}}return i.length===0?null:new this(s,o,i,l)}resetDuration(){let e=this.tracks,n=0;for(let a=0,i=e.length;a!==i;++a){let s=this.tracks[a];n=Math.max(n,s.times[s.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let a=0;a<this.tracks.length;a++)e.push(this.tracks[a].clone());let n=new this.constructor(this.name,this.duration,e,this.blendMode);return n.userData=JSON.parse(JSON.stringify(this.userData)),n}toJSON(){return this.constructor.toJSON(this)}};function Aw(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _i;case"vector":case"vector2":case"vector3":case"vector4":return Mi;case"color":return hc;case"quaternion":return Si;case"bool":case"boolean":return es;case"string":return ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function Cw(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Aw(t.type);if(t.times===void 0){let n=[],a=[];T1(t.keys,n,a,"value"),t.times=n,t.values=a}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}var pi={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(Db(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!Db(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Db(t){try{let e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var dh=class{constructor(e,n,a){let i=this,s=!1,r=0,l=0,o,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(c){l++,s===!1&&i.onStart!==void 0&&i.onStart(c,r,l),s=!0},this.itemEnd=function(c){r++,i.onProgress!==void 0&&i.onProgress(c,r,l),r===l&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){let d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){let h=u[d],g=u[d+1];if(h.global&&(h.lastIndex=0),h.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},A1=new dh,Oa=class{constructor(e){this.manager=e!==void 0?e:A1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let a=this;return new Promise(function(i,s){a.load(e,i,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Oa.DEFAULT_MATERIAL_NAME="__DEFAULT";var ji={},N0=class extends Error{constructor(e,n){super(e),this.response=n}},ns=class extends Oa{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,a,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=pi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0);return}if(ji[e]!==void 0){ji[e].push({onLoad:n,onProgress:a,onError:i});return}ji[e]=[],ji[e].push({onLoad:n,onProgress:a,onError:i});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),l=this.mimeType,o=this.responseType;fetch(r).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;let c=ji[e],d=u.body.getReader(),f=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),h=f?parseInt(f):0,g=h!==0,y=0,m=new ReadableStream({start(p){x();function x(){d.read().then(({done:v,value:M})=>{if(v)p.close();else{y+=M.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:h});for(let T=0,L=c.length;T<L;T++){let _=c[T];_.onProgress&&_.onProgress(C)}p.enqueue(M),x()}},v=>{p.error(v)})}}});return new Response(m)}else throw new N0(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(o){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,l));case"json":return u.json();default:if(l==="")return u.text();{let d=/charset="?([^;"\s]*)"?/i.exec(l),f=d&&d[1]?d[1].toLowerCase():void 0,h=new TextDecoder(f);return u.arrayBuffer().then(g=>h.decode(g))}}}).then(u=>{pi.add(`file:${e}`,u);let c=ji[e];delete ji[e];for(let d=0,f=c.length;d<f;d++){let h=c[d];h.onLoad&&h.onLoad(u)}}).catch(u=>{let c=ji[e];if(c===void 0)throw this.manager.itemError(e),u;delete ji[e];for(let d=0,f=c.length;d<f;d++){let h=c[d];h.onError&&h.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var sl=new WeakMap,hh=class extends Oa{constructor(e){super(e)}load(e,n,a,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=pi.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(r),s.manager.itemEnd(e)},0);else{let d=sl.get(r);d===void 0&&(d=[],sl.set(r,d)),d.push({onLoad:n,onError:i})}return r}let l=fl("img");function o(){c(),n&&n(this);let d=sl.get(this)||[];for(let f=0;f<d.length;f++){let h=d[f];h.onLoad&&h.onLoad(this)}sl.delete(this),s.manager.itemEnd(e)}function u(d){c(),i&&i(d),pi.remove(`image:${e}`);let f=sl.get(this)||[];for(let h=0;h<f.length;h++){let g=f[h];g.onError&&g.onError(d)}sl.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){l.removeEventListener("load",o,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",o,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),pi.add(`image:${e}`,l),s.manager.itemStart(e),l.src=e,l}};var mc=class extends Oa{constructor(e){super(e)}load(e,n,a,i){let s=new ln,r=new hh(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(l){s.image=l,s.needsUpdate=!0,n!==void 0&&n(s)},a,i),s}},Hr=class extends Rt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},gc=class extends Hr{constructor(e,n,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){let n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}},L0=new Ne,Pb=new B,Ub=new B,xc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=ta,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yl,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,a=this.matrix;Pb.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pb),Ub.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ub),n.updateMatrixWorld(),L0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(L0,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===cl||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(L0)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fd=new B,kd=new ma,di=new B,yc=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Ya,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fd,kd,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fd,kd,di.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Fd,kd,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fd,kd,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qs=new B,Ob=new He,Nb=new He,an=class extends yc{constructor(e=50,n=1,a=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Br*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ju*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(ju*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){qs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qs.x,qs.y).multiplyScalar(-e/qs.z),qs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(qs.x,qs.y).multiplyScalar(-e/qs.z)}getViewSize(e,n){return this.getViewBounds(e,Ob,Nb),n.subVectors(Nb,Ob)}setViewOffset(e,n,a,i,s,r){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(ju*.5*this.fov)/this.zoom,a=2*n,i=this.aspect*a,s=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let o=r.fullWidth,u=r.fullHeight;s+=r.offsetX*i/o,n-=r.offsetY*a/u,i*=r.width/o,a*=r.height/u}let l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},B0=class extends xc{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let n=this.camera,a=Br*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||n.far;(a!==n.fov||i!==n.aspect||s!==n.far)&&(n.fov=a,n.aspect=i,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},vc=class extends Hr{constructor(e,n,a=0,i=Math.PI/3,s=0,r=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=a,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new B0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}},F0=class extends xc{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}},Gr=class extends Hr{constructor(e,n,a=0,i=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=i,this.shadow=new F0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}},er=class extends yc{constructor(e=-1,n=1,a=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=a-e,r=a+e,l=i+n,o=i-n;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,r=s+u*this.view.width,l-=c*this.view.offsetY,o=l-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},k0=class extends xc{constructor(){super(new er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},tr=class extends Hr{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new k0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var as=class{static extractUrlBase(e){let n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}};var w0=new WeakMap,_c=class extends Oa{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,n,a,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=pi.get(`image-bitmap:${e}`);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(u=>{w0.has(r)===!0?(i&&i(w0.get(r)),s.manager.itemError(e),s.manager.itemEnd(e)):(n&&n(u),s.manager.itemEnd(e))});return}setTimeout(function(){n&&n(r),s.manager.itemEnd(e)},0);return}let l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader,l.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let o=fetch(e,l).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(u){pi.add(`image-bitmap:${e}`,u),n&&n(u),s.manager.itemEnd(e)}).catch(function(u){i&&i(u),w0.set(o,u),pi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});pi.add(`image-bitmap:${e}`,o),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var rl=-90,ol=1,ph=class extends Rt{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new an(rl,ol,e,n);i.layers=this.layers,this.add(i);let s=new an(rl,ol,e,n);s.layers=this.layers,this.add(s);let r=new an(rl,ol,e,n);r.layers=this.layers,this.add(r);let l=new an(rl,ol,e,n);l.layers=this.layers,this.add(l);let o=new an(rl,ol,e,n);o.layers=this.layers,this.add(o);let u=new an(rl,ol,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[a,i,s,r,l,o]=n;for(let u of n)this.remove(u);if(e===Ya)a.up.set(0,1,0),a.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===cl)a.up.set(0,-1,0),a.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:a,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,r,l,o,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(a,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(a,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(a,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(a,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(a,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),a.texture.generateMipmaps=y,e.setRenderTarget(a,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(d,f,h),e.xr.enabled=g,a.texture.needsPMREMUpdate=!0}},mh=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var cx="\\[\\]\\.:\\/",Lw=new RegExp("["+cx+"]","g"),fx="[^"+cx+"]",ww="[^"+cx.replace("\\.","")+"]",Ew=/((?:WC+[\/:])*)/.source.replace("WC",fx),Iw=/(WCOD+)?/.source.replace("WCOD",ww),Rw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fx),Dw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fx),Pw=new RegExp("^"+Ew+Iw+Rw+Dw+"$"),Uw=["material","materials","bones","map"],z0=class{constructor(e,n,a){let i=a||Ct.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,i)}getValue(e,n){this.bind();let a=this._targetGroup.nCachedObjects_,i=this._bindings[a];i!==void 0&&i.getValue(e,n)}setValue(e,n){let a=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=a.length;i!==s;++i)a[i].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].unbind()}},Ct=class t{constructor(e,n,a){this.path=n,this.parsedPath=a||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,a){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,a):new t(e,n,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lw,"")}static parseTrackName(e){let n=Pw.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},i=a.nodeName&&a.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=a.nodeName.substring(i+1);Uw.indexOf(s)!==-1&&(a.nodeName=a.nodeName.substring(0,i),a.objectName=s)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let a=e.skeleton.getBoneByName(n);if(a!==void 0)return a}if(e.children){let a=function(s){for(let r=0;r<s.length;r++){let l=s[r];if(l.name===n||l.uuid===n)return l;let o=a(l.children);if(o)return o}return null},i=a(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let a=this.resolvedProperty;for(let i=0,s=a.length;i!==s;++i)e[n++]=a[i]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let a=this.resolvedProperty;for(let i=0,s=a.length;i!==s;++i)a[i]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let a=this.resolvedProperty;for(let i=0,s=a.length;i!==s;++i)a[i]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let a=this.resolvedProperty;for(let i=0,s=a.length;i!==s;++i)a[i]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,a=n.objectName,i=n.propertyName,s=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let u=n.objectIndex;switch(a){case"materials":if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){De("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){De("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){De("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){De("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(u!==void 0){if(e[u]===void 0){De("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let r=e[i];if(r===void 0){let u=n.nodeName;De("PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(o=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=z0;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var WD=new Float32Array(1);var Bb=new Ne,Sl=class{constructor(e,n,a=0,i=1/0){this.ray=new Js(e,n),this.near=a,this.far=i,this.camera=null,this.layers=new pl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):De("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Bb.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bb),this}intersectObject(e,n=!0,a=[]){return H0(e,this,a,n),a.sort(Fb),a}intersectObjects(e,n=!0,a=[]){for(let i=0,s=e.length;i<s;i++)H0(e[i],this,a,n);return a.sort(Fb),a}};function Fb(t,e){return t.distance-e.distance}function H0(t,e,n,a){let i=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(i=!1),i===!0&&a===!0){let s=t.children;for(let r=0,l=s.length;r<l;r++)H0(s[r],e,n,!0)}}var G0=class t{static{t.prototype.isMatrix2=!0}constructor(e,n,a,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,a,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let a=0;a<4;a++)this.elements[a]=e[a+n];return this}set(e,n,a,i){let s=this.elements;return s[0]=e,s[2]=n,s[1]=a,s[3]=i,this}};function dx(t,e,n,a){let i=Ow(a);switch(n){case ix:return t*e;case Th:return t*e/i.components*i.byteLength;case Ah:return t*e/i.components*i.byteLength;case ir:return t*e*2/i.components*i.byteLength;case Ch:return t*e*2/i.components*i.byteLength;case sx:return t*e*3/i.components*i.byteLength;case _a:return t*e*4/i.components*i.byteLength;case Lh:return t*e*4/i.components*i.byteLength;case Tc:case Ac:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Cc:case Lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Eh:case Rh:return Math.max(t,16)*Math.max(e,8)/4;case wh:case Ih:return Math.max(t,8)*Math.max(e,8)/2;case Dh:case Ph:case Oh:case Nh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Uh:case wc:case Bh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case zh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case qh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case jh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Qh:case $h:case ep:return Math.ceil(t/4)*Math.ceil(e/4)*16;case tp:case np:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ec:case ap:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ow(t){switch(t){case ta:case ex:return{byteLength:1,components:1};case Tl:case tx:case Ti:return{byteLength:2,components:1};case Mh:case bh:return{byteLength:2,components:4};case Qa:case Sh:case va:return{byteLength:4,components:1};case nx:case ax:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gh}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Z1(){let t=null,e=!1,n=null,a=null;function i(s,r){n(s,r),a=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&n!==null&&t!==null&&(a=t.requestAnimationFrame(i),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Nw(t){let e=new WeakMap;function n(l,o){let u=l.array,c=l.usage,d=u.byteLength,f=t.createBuffer();t.bindBuffer(o,f),t.bufferData(o,u,c),l.onUploadCallback();let h;if(u instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=t.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=t.SHORT;else if(u instanceof Uint32Array)h=t.UNSIGNED_INT;else if(u instanceof Int32Array)h=t.INT;else if(u instanceof Int8Array)h=t.BYTE;else if(u instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function a(l,o,u){let c=o.array,d=o.updateRanges;if(t.bindBuffer(u,l),d.length===0)t.bufferSubData(u,0,c);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],y=d[h];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let y=d[h];t.bufferSubData(u,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}o.clearUpdateRanges()}o.onUploadCallback()}function i(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);let o=e.get(l);o&&(t.deleteBuffer(o.buffer),e.delete(l))}function r(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let c=e.get(l);(!c||c.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=e.get(l);if(u===void 0)e.set(l,n(l,o));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(u.buffer,l,o),u.version=l.version}}return{get:i,remove:s,update:r}}var Bw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ww=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Xw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$w=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,aE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hE="gl_FragColor = linearToOutputTexel( gl_FragColor );",pE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_E=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ME=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,AE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,EE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,IE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,OE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,FE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,zE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$E=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eI=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nI=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,aI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sI=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rI=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oI=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lI=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uI=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cI=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fI=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dI=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,hI=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pI=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mI=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gI=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xI=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yI=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vI=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,_I=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,SI=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,MI=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bI=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TI=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AI=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CI=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,LI=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wI=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EI=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,II=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,RI=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,DI=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NI=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,BI=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FI=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zI=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GI=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VI=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qI=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,WI=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,XI=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,YI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZI=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KI=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JI=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jI=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QI=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$I=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Bw,alphahash_pars_fragment:Fw,alphamap_fragment:kw,alphamap_pars_fragment:zw,alphatest_fragment:Hw,alphatest_pars_fragment:Gw,aomap_fragment:Vw,aomap_pars_fragment:qw,batching_pars_vertex:Ww,batching_vertex:Xw,begin_vertex:Yw,beginnormal_vertex:Zw,bsdfs:Kw,iridescence_fragment:Jw,bumpmap_pars_fragment:jw,clipping_planes_fragment:Qw,clipping_planes_pars_fragment:$w,clipping_planes_pars_vertex:eE,clipping_planes_vertex:tE,color_fragment:nE,color_pars_fragment:aE,color_pars_vertex:iE,color_vertex:sE,common:rE,cube_uv_reflection_fragment:oE,defaultnormal_vertex:lE,displacementmap_pars_vertex:uE,displacementmap_vertex:cE,emissivemap_fragment:fE,emissivemap_pars_fragment:dE,colorspace_fragment:hE,colorspace_pars_fragment:pE,envmap_fragment:mE,envmap_common_pars_fragment:gE,envmap_pars_fragment:xE,envmap_pars_vertex:yE,envmap_physical_pars_fragment:EE,envmap_vertex:vE,fog_vertex:_E,fog_pars_vertex:SE,fog_fragment:ME,fog_pars_fragment:bE,gradientmap_pars_fragment:TE,lightmap_pars_fragment:AE,lights_lambert_fragment:CE,lights_lambert_pars_fragment:LE,lights_pars_begin:wE,lights_toon_fragment:IE,lights_toon_pars_fragment:RE,lights_phong_fragment:DE,lights_phong_pars_fragment:PE,lights_physical_fragment:UE,lights_physical_pars_fragment:OE,lights_fragment_begin:NE,lights_fragment_maps:BE,lights_fragment_end:FE,lightprobes_pars_fragment:kE,logdepthbuf_fragment:zE,logdepthbuf_pars_fragment:HE,logdepthbuf_pars_vertex:GE,logdepthbuf_vertex:VE,map_fragment:qE,map_pars_fragment:WE,map_particle_fragment:XE,map_particle_pars_fragment:YE,metalnessmap_fragment:ZE,metalnessmap_pars_fragment:KE,morphinstance_vertex:JE,morphcolor_vertex:jE,morphnormal_vertex:QE,morphtarget_pars_vertex:$E,morphtarget_vertex:eI,normal_fragment_begin:tI,normal_fragment_maps:nI,normal_pars_fragment:aI,normal_pars_vertex:iI,normal_vertex:sI,normalmap_pars_fragment:rI,clearcoat_normal_fragment_begin:oI,clearcoat_normal_fragment_maps:lI,clearcoat_pars_fragment:uI,iridescence_pars_fragment:cI,opaque_fragment:fI,packing:dI,premultiplied_alpha_fragment:hI,project_vertex:pI,dithering_fragment:mI,dithering_pars_fragment:gI,roughnessmap_fragment:xI,roughnessmap_pars_fragment:yI,shadowmap_pars_fragment:vI,shadowmap_pars_vertex:_I,shadowmap_vertex:SI,shadowmask_pars_fragment:MI,skinbase_vertex:bI,skinning_pars_vertex:TI,skinning_vertex:AI,skinnormal_vertex:CI,specularmap_fragment:LI,specularmap_pars_fragment:wI,tonemapping_fragment:EI,tonemapping_pars_fragment:II,transmission_fragment:RI,transmission_pars_fragment:DI,uv_pars_fragment:PI,uv_pars_vertex:UI,uv_vertex:OI,worldpos_vertex:NI,background_vert:BI,background_frag:FI,backgroundCube_vert:kI,backgroundCube_frag:zI,cube_vert:HI,cube_frag:GI,depth_vert:VI,depth_frag:qI,distance_vert:WI,distance_frag:XI,equirect_vert:YI,equirect_frag:ZI,linedashed_vert:KI,linedashed_frag:JI,meshbasic_vert:jI,meshbasic_frag:QI,meshlambert_vert:$I,meshlambert_frag:eR,meshmatcap_vert:tR,meshmatcap_frag:nR,meshnormal_vert:aR,meshnormal_frag:iR,meshphong_vert:sR,meshphong_frag:rR,meshphysical_vert:oR,meshphysical_frag:lR,meshtoon_vert:uR,meshtoon_frag:cR,points_vert:fR,points_frag:dR,shadow_vert:hR,shadow_frag:pR,sprite_vert:mR,sprite_frag:gR},me={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Ci={basic:{uniforms:Pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Re(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Pn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Pn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Pn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Pn([me.points,me.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Pn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Pn([me.common,me.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Pn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Pn([me.sprite,me.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Pn([me.common,me.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Pn([me.lights,me.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Ci.physical={uniforms:Pn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var rp={r:0,b:0,g:0},xR=new Ne,K1=new Fe;K1.set(-1,0,0,0,1,0,0,0,1);function yR(t,e,n,a,i,s){let r=new Re(0),l=i===!0?0:1,o,u,c=null,d=0,f=null;function h(x){let v=x.isScene===!0?x.background:null;if(v&&v.isTexture){let M=x.backgroundBlurriness>0;v=e.get(v,M)}return v}function g(x){let v=!1,M=h(x);M===null?m(r,l):M&&M.isColor&&(m(M,1),v=!0);let C=t.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(x,v){let M=h(v);M&&(M.isCubeTexture||M.mapping===bc)?(u===void 0&&(u=new xt(new Qs(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Wr(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xR.makeRotationFromEuler(v.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(K1),u.material.toneMapped=qe.getTransfer(M.colorSpace)!==ft,(c!==M||d!==M.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,c=M,d=M.version,f=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(o===void 0&&(o=new xt(new $s(2,2),new Hn({name:"BackgroundMaterial",uniforms:Wr(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(o)),o.material.uniforms.t2D.value=M,o.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,o.material.toneMapped=qe.getTransfer(M.colorSpace)!==ft,M.matrixAutoUpdate===!0&&M.updateMatrix(),o.material.uniforms.uvTransform.value.copy(M.matrix),(c!==M||d!==M.version||f!==t.toneMapping)&&(o.material.needsUpdate=!0,c=M,d=M.version,f=t.toneMapping),o.layers.enableAll(),x.unshift(o,o.geometry,o.material,0,0,null))}function m(x,v){x.getRGB(rp,ux(t)),n.buffers.color.setClear(rp.r,rp.g,rp.b,v,s)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return r},setClearColor:function(x,v=1){r.set(x),l=v,m(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(r,l)},render:g,addToRenderList:y,dispose:p}}function vR(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),a={},i=f(null),s=i,r=!1;function l(I,F,q,Y,U){let H=!1,G=d(I,Y,q,F);s!==G&&(s=G,u(s.object)),H=h(I,Y,q,U),H&&g(I,Y,q,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(H||r)&&(r=!1,M(I,F,q,Y),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function o(){return t.createVertexArray()}function u(I){return t.bindVertexArray(I)}function c(I){return t.deleteVertexArray(I)}function d(I,F,q,Y){let U=Y.wireframe===!0,H=a[F.id];H===void 0&&(H={},a[F.id]=H);let G=I.isInstancedMesh===!0?I.id:0,Q=H[G];Q===void 0&&(Q={},H[G]=Q);let ne=Q[q.id];ne===void 0&&(ne={},Q[q.id]=ne);let ie=ne[U];return ie===void 0&&(ie=f(o()),ne[U]=ie),ie}function f(I){let F=[],q=[],Y=[];for(let U=0;U<n;U++)F[U]=0,q[U]=0,Y[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:Y,object:I,attributes:{},index:null}}function h(I,F,q,Y){let U=s.attributes,H=F.attributes,G=0,Q=q.getAttributes();for(let ne in Q)if(Q[ne].location>=0){let Me=U[ne],be=H[ne];if(be===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(be=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(be=I.instanceColor)),Me===void 0||Me.attribute!==be||be&&Me.data!==be.data)return!0;G++}return s.attributesNum!==G||s.index!==Y}function g(I,F,q,Y){let U={},H=F.attributes,G=0,Q=q.getAttributes();for(let ne in Q)if(Q[ne].location>=0){let Me=H[ne];Me===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(Me=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(Me=I.instanceColor));let be={};be.attribute=Me,Me&&Me.data&&(be.data=Me.data),U[ne]=be,G++}s.attributes=U,s.attributesNum=G,s.index=Y}function y(){let I=s.newAttributes;for(let F=0,q=I.length;F<q;F++)I[F]=0}function m(I){p(I,0)}function p(I,F){let q=s.newAttributes,Y=s.enabledAttributes,U=s.attributeDivisors;q[I]=1,Y[I]===0&&(t.enableVertexAttribArray(I),Y[I]=1),U[I]!==F&&(t.vertexAttribDivisor(I,F),U[I]=F)}function x(){let I=s.newAttributes,F=s.enabledAttributes;for(let q=0,Y=F.length;q<Y;q++)F[q]!==I[q]&&(t.disableVertexAttribArray(q),F[q]=0)}function v(I,F,q,Y,U,H,G){G===!0?t.vertexAttribIPointer(I,F,q,U,H):t.vertexAttribPointer(I,F,q,Y,U,H)}function M(I,F,q,Y){y();let U=Y.attributes,H=q.getAttributes(),G=F.defaultAttributeValues;for(let Q in H){let ne=H[Q];if(ne.location>=0){let ie=U[Q];if(ie===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor)),ie!==void 0){let Me=ie.normalized,be=ie.itemSize,tt=e.get(ie);if(tt===void 0)continue;let ot=tt.buffer,Be=tt.type,J=tt.bytesPerElement,de=Be===t.INT||Be===t.UNSIGNED_INT||ie.gpuType===Sh;if(ie.isInterleavedBufferAttribute){let le=ie.data,Ee=le.stride,Pe=ie.offset;if(le.isInstancedInterleavedBuffer){for(let Ie=0;Ie<ne.locationSize;Ie++)p(ne.location+Ie,le.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ie=0;Ie<ne.locationSize;Ie++)m(ne.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,ot);for(let Ie=0;Ie<ne.locationSize;Ie++)v(ne.location+Ie,be/ne.locationSize,Be,Me,Ee*J,(Pe+be/ne.locationSize*Ie)*J,de)}else{if(ie.isInstancedBufferAttribute){for(let le=0;le<ne.locationSize;le++)p(ne.location+le,ie.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let le=0;le<ne.locationSize;le++)m(ne.location+le);t.bindBuffer(t.ARRAY_BUFFER,ot);for(let le=0;le<ne.locationSize;le++)v(ne.location+le,be/ne.locationSize,Be,Me,be*J,be/ne.locationSize*le*J,de)}}else if(G!==void 0){let Me=G[Q];if(Me!==void 0)switch(Me.length){case 2:t.vertexAttrib2fv(ne.location,Me);break;case 3:t.vertexAttrib3fv(ne.location,Me);break;case 4:t.vertexAttrib4fv(ne.location,Me);break;default:t.vertexAttrib1fv(ne.location,Me)}}}}x()}function C(){w();for(let I in a){let F=a[I];for(let q in F){let Y=F[q];for(let U in Y){let H=Y[U];for(let G in H)c(H[G].object),delete H[G];delete Y[U]}}delete a[I]}}function T(I){if(a[I.id]===void 0)return;let F=a[I.id];for(let q in F){let Y=F[q];for(let U in Y){let H=Y[U];for(let G in H)c(H[G].object),delete H[G];delete Y[U]}}delete a[I.id]}function L(I){for(let F in a){let q=a[F];for(let Y in q){let U=q[Y];if(U[I.id]===void 0)continue;let H=U[I.id];for(let G in H)c(H[G].object),delete H[G];delete U[I.id]}}}function _(I){for(let F in a){let q=a[F],Y=I.isInstancedMesh===!0?I.id:0,U=q[Y];if(U!==void 0){for(let H in U){let G=U[H];for(let Q in G)c(G[Q].object),delete G[Q];delete U[H]}delete q[Y],Object.keys(q).length===0&&delete a[F]}}}function w(){E(),r=!0,s!==i&&(s=i,u(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:w,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function _R(t,e,n){let a;function i(o){a=o}function s(o,u){t.drawArrays(a,o,u),n.update(u,a,1)}function r(o,u,c){c!==0&&(t.drawArraysInstanced(a,o,u,c),n.update(u,a,c))}function l(o,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,o,0,u,0,c);let f=0;for(let h=0;h<c;h++)f+=u[h];n.update(f,a,1)}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=l}function SR(t,e,n,a){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(L){return!(L!==_a&&a.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(L){let _=L===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==ta&&a.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==va&&!_)}function o(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp",c=o(u);c!==u&&(Ae("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:o,textureFormatReadable:r,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:M,maxSamples:C,samples:T}}function MR(t){let e=this,n=null,a=0,i=!1,s=!1,r=new hi,l=new Fe,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||a!==0||i;return i=f,a=d.length,h},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!i||g===null||g.length===0||s&&!m)s?c(null):u();else{let x=s?0:a,v=x*4,M=p.clippingState||null;o.value=M,M=c(g,f,v,h);for(let C=0;C!==v;++C)M[C]=n[C];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function u(){o.value!==n&&(o.value=n,o.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function c(d,f,h,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=o.value,g!==!0||m===null){let p=h+y*4,x=f.matrixWorldInverse;l.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,M=h;v!==y;++v,M+=4)r.copy(d[v]).applyMatrix4(x,l),r.normal.toArray(m,M),m[M+3]=r.constant}o.value=m,o.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var sr=4,C1=[.125,.215,.35,.446,.526,.582],Xr=20,bR=256,Dc=new er,L1=new Re,hx=null,px=0,mx=0,gx=!1,TR=new B,El=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,i=100,s={}){let{size:r=256,position:l=TR}=s;hx=this._renderer.getRenderTarget(),px=this._renderer.getActiveCubeFace(),mx=this._renderer.getActiveMipmapLevel(),gx=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,a,i,o,l),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=I1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hx,px,mx),this._renderer.xr.enabled=gx,e.scissorTest=!1,Ll(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===nr||e.mapping===Vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hx=this._renderer.getRenderTarget(),px=this._renderer.getActiveCubeFace(),mx=this._renderer.getActiveMipmapLevel(),gx=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Ti,format:_a,colorSpace:bn,depthBuffer:!1},i=w1(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=w1(e,n,a);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=AR(s)),this._blurMaterial=LR(s,e,n),this._ggxMaterial=CR(s,e,n)}return i}_compileMaterial(e){let n=new xt(new Tn,e);this._renderer.compile(n,Dc)}_sceneToCubeUV(e,n,a,i,s){let o=new an(90,1,n,a),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(L1),d.toneMapping=ja,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xt(new Qs,new Ja({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,p=!0):(m.color.copy(L1),p=!0);for(let v=0;v<6;v++){let M=v%3;M===0?(o.up.set(0,u[v],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x+c[v],s.y,s.z)):M===1?(o.up.set(0,0,u[v]),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y+c[v],s.z)):(o.up.set(0,u[v],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y,s.z+c[v]));let C=this._cubeSize;Ll(i,M*C,v>2?C:0,C,C),d.setRenderTarget(i),p&&d.render(y,o),d.render(e,o)}d.toneMapping=h,d.autoClear=f,e.background=x}_textureToCubeUV(e,n){let a=this._renderer,i=e.mapping===nr||e.mapping===Vr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=I1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=E1());let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let l=s.uniforms;l.envMap.value=e;let o=this._cubeSize;Ll(n,0,0,3*o,2*o),a.setRenderTarget(n),a.render(r,Dc)}_applyPMREM(e){let n=this._renderer,a=n.autoClear;n.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=a}_applyGGXFilter(e,n,a){let i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,l=this._lodMeshes[a];l.material=r;let o=r.uniforms,u=a/(this._lodMeshes.length-1),c=n/(this._lodMeshes.length-1),d=Math.sqrt(u*u-c*c),f=0+u*1.25,h=d*f,{_lodMax:g}=this,y=this._sizeLods[a],m=3*y*(a>g-sr?a-g+sr:0),p=4*(this._cubeSize-y);o.envMap.value=e.texture,o.roughness.value=h,o.mipInt.value=g-n,Ll(s,m,p,3*y,2*y),i.setRenderTarget(s),i.render(l,Dc),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=g-a,Ll(e,m,p,3*y,2*y),i.setRenderTarget(e),i.render(l,Dc)}_blur(e,n,a,i,s){let r=this._pingPongRenderTarget;this._halfBlur(e,r,n,a,i,"latitudinal",s),this._halfBlur(r,e,a,a,i,"longitudinal",s)}_halfBlur(e,n,a,i,s,r,l){let o=this._renderer,u=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");let c=3,d=this._lodMeshes[i];d.material=u;let f=u.uniforms,h=this._sizeLods[a]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Xr-1),y=s/g,m=isFinite(s)?1+Math.floor(c*y):Xr;m>Xr&&Ae(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xr}`);let p=[],x=0;for(let L=0;L<Xr;++L){let _=L/y,w=Math.exp(-_*_/2);p.push(w),L===0?x+=w:L<m&&(x+=2*w)}for(let L=0;L<p.length;L++)p[L]=p[L]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=r==="latitudinal",l&&(f.poleAxis.value=l);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-a;let M=this._sizeLods[i],C=3*M*(i>v-sr?i-v+sr:0),T=4*(this._cubeSize-M);Ll(n,C,T,3*M,2*M),o.setRenderTarget(n),o.render(d,Dc)}};function AR(t){let e=[],n=[],a=[],i=t,s=t-sr+1+C1.length;for(let r=0;r<s;r++){let l=Math.pow(2,i);e.push(l);let o=1/l;r>t-sr?o=C1[r-t+sr-1]:r===0&&(o=0),n.push(o);let u=1/(l-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],h=6,g=6,y=3,m=2,p=1,x=new Float32Array(y*g*h),v=new Float32Array(m*g*h),M=new Float32Array(p*g*h);for(let T=0;T<h;T++){let L=T%3*2/3-1,_=T>2?0:-1,w=[L,_,0,L+2/3,_,0,L+2/3,_+1,0,L,_,0,L+2/3,_+1,0,L,_+1,0];x.set(w,y*g*T),v.set(f,m*g*T);let E=[T,T,T,T,T,T];M.set(E,p*g*T)}let C=new Tn;C.setAttribute("position",new Ht(x,y)),C.setAttribute("uv",new Ht(v,m)),C.setAttribute("faceIndex",new Ht(M,p)),a.push(new xt(C,null)),i>sr&&i--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function w1(t,e,n){let a=new ga(t,e,n);return a.texture.mapping=bc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Ll(t,e,n,a,i){t.viewport.set(e,n,a,i),t.scissor.set(e,n,a,i)}function CR(t,e,n){return new Hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function LR(t,e,n){let a=new Float32Array(Xr),i=new B(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function E1(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function I1(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function cp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var lp=class extends ga{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let a={width:e,height:e,depth:1},i=[a,a,a,a,a,a];this.texture=new uc(i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Qs(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:Wr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:An,blending:bi});s.uniforms.tEquirect.value=n;let r=new xt(i,s),l=n.minFilter;return n.minFilter===ya&&(n.minFilter=Qt),new ph(1,10,this).update(e,r),n.minFilter=l,r.geometry.dispose(),r.material.dispose(),this}clear(e,n=!0,a=!0,i=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(n,a,i);e.setRenderTarget(s)}};function wR(t){let e=new WeakMap,n=new WeakMap,a=null;function i(f,h=!1){return f==null?null:h?r(f):s(f)}function s(f){if(f&&f.isTexture){let h=f.mapping;if(h===yh||h===vh)if(e.has(f)){let g=e.get(f).texture;return l(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new lp(g.height);return y.fromEquirectangularTexture(t,f),e.set(f,y),f.addEventListener("dispose",u),l(y.texture,f.mapping)}else return null}}return f}function r(f){if(f&&f.isTexture){let h=f.mapping,g=h===yh||h===vh,y=h===nr||h===Vr;if(g||y){let m=n.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return a===null&&(a=new El(t)),m=g?a.fromEquirectangular(f,m):a.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),m.texture;if(m!==void 0)return m.texture;{let x=f.image;return g&&x&&x.height>0||y&&x&&o(x)?(a===null&&(a=new El(t)),m=g?a.fromEquirectangular(f):a.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),f.addEventListener("dispose",c),m.texture):null}}}return f}function l(f,h){return h===yh?f.mapping=nr:h===vh&&(f.mapping=Vr),f}function o(f){let h=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&h++;return h===g}function u(f){let h=f.target;h.removeEventListener("dispose",u);let g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function c(f){let h=f.target;h.removeEventListener("dispose",c);let g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:i,dispose:d}}function ER(t){let e={};function n(a){if(e[a]!==void 0)return e[a];let i=t.getExtension(a);return e[a]=i,i}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){let i=n(a);return i===null&&jd("WebGLRenderer: "+a+" extension not supported."),i}}}function IR(t,e,n,a){let i={},s=new WeakMap;function r(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete i[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),a.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function l(d,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,n.memory.geometries++),f}function o(d){let f=d.attributes;for(let h in f)e.update(f[h],t.ARRAY_BUFFER)}function u(d){let f=[],h=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(h!==null){let x=h.array;y=h.version;for(let v=0,M=x.length;v<M;v+=3){let C=x[v+0],T=x[v+1],L=x[v+2];f.push(C,T,T,L,L,C)}}else{let x=g.array;y=g.version;for(let v=0,M=x.length/3-1;v<M;v+=3){let C=v+0,T=v+1,L=v+2;f.push(C,T,T,L,L,C)}}let m=new(g.count>=65535?ac:nc)(f,1);m.version=y;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function c(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&u(d)}else u(d);return s.get(d)}return{get:l,update:o,getWireframeAttribute:c}}function RR(t,e,n){let a;function i(d){a=d}let s,r;function l(d){s=d.type,r=d.bytesPerElement}function o(d,f){t.drawElements(a,f,s,d*r),n.update(f,a,1)}function u(d,f,h){h!==0&&(t.drawElementsInstanced(a,f,s,d*r,h),n.update(f,a,h))}function c(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,f,0,s,d,0,h);let y=0;for(let m=0;m<h;m++)y+=f[m];n.update(y,a,1)}this.setMode=i,this.setIndex=l,this.render=o,this.renderInstances=u,this.renderMultiDraw=c}function DR(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(s,r,l){switch(n.calls++,r){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:De("WebGLInfo: Unknown draw mode:",r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:a}}function PR(t,e,n){let a=new WeakMap,i=new St;function s(r,l,o){let u=r.morphTargetInfluences,c=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=c!==void 0?c.length:0,f=a.get(l);if(f===void 0||f.count!==d){let w=function(){L.dispose(),a.delete(l),l.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let h=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,y=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],x=l.morphAttributes.color||[],v=0;h===!0&&(v=1),g===!0&&(v=2),y===!0&&(v=3);let M=l.attributes.position.count*v,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*C*4*d),L=new tc(T,M,C,d);L.type=va,L.needsUpdate=!0;let _=v*4;for(let E=0;E<d;E++){let I=m[E],F=p[E],q=x[E],Y=M*C*4*E;for(let U=0;U<I.count;U++){let H=U*_;h===!0&&(i.fromBufferAttribute(I,U),T[Y+H+0]=i.x,T[Y+H+1]=i.y,T[Y+H+2]=i.z,T[Y+H+3]=0),g===!0&&(i.fromBufferAttribute(F,U),T[Y+H+4]=i.x,T[Y+H+5]=i.y,T[Y+H+6]=i.z,T[Y+H+7]=0),y===!0&&(i.fromBufferAttribute(q,U),T[Y+H+8]=i.x,T[Y+H+9]=i.y,T[Y+H+10]=i.z,T[Y+H+11]=q.itemSize===4?i.w:1)}}f={count:d,texture:L,size:new He(M,C)},a.set(l,f),l.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)o.getUniforms().setValue(t,"morphTexture",r.morphTexture,n);else{let h=0;for(let y=0;y<u.length;y++)h+=u[y];let g=l.morphTargetsRelative?1:1-h;o.getUniforms().setValue(t,"morphTargetBaseInfluence",g),o.getUniforms().setValue(t,"morphTargetInfluences",u)}o.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),o.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function UR(t,e,n,a,i){let s=new WeakMap;function r(u){let c=i.render.frame,d=u.geometry,f=e.get(u,d);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",o)===!1&&u.addEventListener("dispose",o),s.get(u)!==c&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){let h=u.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function l(){s=new WeakMap}function o(u){let c=u.target;c.removeEventListener("dispose",o),a.releaseStatesOfObject(c),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:l}}var OR={[Y0]:"LINEAR_TONE_MAPPING",[Z0]:"REINHARD_TONE_MAPPING",[K0]:"CINEON_TONE_MAPPING",[Mc]:"ACES_FILMIC_TONE_MAPPING",[j0]:"AGX_TONE_MAPPING",[Q0]:"NEUTRAL_TONE_MAPPING",[J0]:"CUSTOM_TONE_MAPPING"};function NR(t,e,n,a,i){let s=new ga(e,n,{type:t,depthBuffer:a,stencilBuffer:i,depthTexture:a?new $i(e,n):void 0}),r=new ga(e,n,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),l=new Tn;l.setAttribute("position",new kn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new kn([0,2,0,0,2,0],2));let o=new ih({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new xt(l,o),c=new er(-1,1,1,-1,0,1),d=null,f=null,h=!1,g,y=null,m=[],p=!1;this.setSize=function(x,v){s.setSize(x,v),r.setSize(x,v);for(let M=0;M<m.length;M++){let C=m[M];C.setSize&&C.setSize(x,v)}},this.setEffects=function(x){m=x,p=m.length>0&&m[0].isRenderPass===!0;let v=s.width,M=s.height;for(let C=0;C<m.length;C++){let T=m[C];T.setSize&&T.setSize(v,M)}},this.begin=function(x,v){if(h||x.toneMapping===ja&&m.length===0)return!1;if(y=v,v!==null){let M=v.width,C=v.height;(s.width!==M||s.height!==C)&&this.setSize(M,C)}return p===!1&&x.setRenderTarget(s),g=x.toneMapping,x.toneMapping=ja,!0},this.hasRenderPass=function(){return p},this.end=function(x,v){x.toneMapping=g,h=!0;let M=s,C=r;for(let T=0;T<m.length;T++){let L=m[T];if(L.enabled!==!1&&(L.render(x,C,M,v),L.needsSwap!==!1)){let _=M;M=C,C=_}}if(d!==x.outputColorSpace||f!==x.toneMapping){d=x.outputColorSpace,f=x.toneMapping,o.defines={},qe.getTransfer(d)===ft&&(o.defines.SRGB_TRANSFER="");let T=OR[f];T&&(o.defines[T]=""),o.needsUpdate=!0}o.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(y),x.render(u,c),y=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),r.dispose(),l.dispose(),o.dispose()}}var J1=new ln,vx=new $i(1,1),j1=new tc,Q1=new eh,$1=new uc,R1=[],D1=[],P1=new Float32Array(16),U1=new Float32Array(9),O1=new Float32Array(4);function Il(t,e,n){let a=t[0];if(a<=0||a>0)return t;let i=e*n,s=R1[i];if(s===void 0&&(s=new Float32Array(i),R1[i]=s),e!==0){a.toArray(s,0);for(let r=1,l=0;r!==e;++r)l+=n,t[r].toArray(s,l)}return s}function un(t,e){if(t.length!==e.length)return!1;for(let n=0,a=t.length;n<a;n++)if(t[n]!==e[n])return!1;return!0}function cn(t,e){for(let n=0,a=e.length;n<a;n++)t[n]=e[n]}function fp(t,e){let n=D1[e];n===void 0&&(n=new Int32Array(e),D1[e]=n);for(let a=0;a!==e;++a)n[a]=t.allocateTextureUnit();return n}function BR(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function FR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;t.uniform2fv(this.addr,e),cn(n,e)}}function kR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(un(n,e))return;t.uniform3fv(this.addr,e),cn(n,e)}}function zR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;t.uniform4fv(this.addr,e),cn(n,e)}}function HR(t,e){let n=this.cache,a=e.elements;if(a===void 0){if(un(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),cn(n,e)}else{if(un(n,a))return;O1.set(a),t.uniformMatrix2fv(this.addr,!1,O1),cn(n,a)}}function GR(t,e){let n=this.cache,a=e.elements;if(a===void 0){if(un(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),cn(n,e)}else{if(un(n,a))return;U1.set(a),t.uniformMatrix3fv(this.addr,!1,U1),cn(n,a)}}function VR(t,e){let n=this.cache,a=e.elements;if(a===void 0){if(un(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),cn(n,e)}else{if(un(n,a))return;P1.set(a),t.uniformMatrix4fv(this.addr,!1,P1),cn(n,a)}}function qR(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function WR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;t.uniform2iv(this.addr,e),cn(n,e)}}function XR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(un(n,e))return;t.uniform3iv(this.addr,e),cn(n,e)}}function YR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;t.uniform4iv(this.addr,e),cn(n,e)}}function ZR(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function KR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;t.uniform2uiv(this.addr,e),cn(n,e)}}function JR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(un(n,e))return;t.uniform3uiv(this.addr,e),cn(n,e)}}function jR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;t.uniform4uiv(this.addr,e),cn(n,e)}}function QR(t,e,n){let a=this.cache,i=n.allocateTextureUnit();a[0]!==i&&(t.uniform1i(this.addr,i),a[0]=i);let s;this.type===t.SAMPLER_2D_SHADOW?(vx.compareFunction=n.isReversedDepthBuffer()?sp:ip,s=vx):s=J1,n.setTexture2D(e||s,i)}function $R(t,e,n){let a=this.cache,i=n.allocateTextureUnit();a[0]!==i&&(t.uniform1i(this.addr,i),a[0]=i),n.setTexture3D(e||Q1,i)}function e2(t,e,n){let a=this.cache,i=n.allocateTextureUnit();a[0]!==i&&(t.uniform1i(this.addr,i),a[0]=i),n.setTextureCube(e||$1,i)}function t2(t,e,n){let a=this.cache,i=n.allocateTextureUnit();a[0]!==i&&(t.uniform1i(this.addr,i),a[0]=i),n.setTexture2DArray(e||j1,i)}function n2(t){switch(t){case 5126:return BR;case 35664:return FR;case 35665:return kR;case 35666:return zR;case 35674:return HR;case 35675:return GR;case 35676:return VR;case 5124:case 35670:return qR;case 35667:case 35671:return WR;case 35668:case 35672:return XR;case 35669:case 35673:return YR;case 5125:return ZR;case 36294:return KR;case 36295:return JR;case 36296:return jR;case 35678:case 36198:case 36298:case 36306:case 35682:return QR;case 35679:case 36299:case 36307:return $R;case 35680:case 36300:case 36308:case 36293:return e2;case 36289:case 36303:case 36311:case 36292:return t2}}function a2(t,e){t.uniform1fv(this.addr,e)}function i2(t,e){let n=Il(e,this.size,2);t.uniform2fv(this.addr,n)}function s2(t,e){let n=Il(e,this.size,3);t.uniform3fv(this.addr,n)}function r2(t,e){let n=Il(e,this.size,4);t.uniform4fv(this.addr,n)}function o2(t,e){let n=Il(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function l2(t,e){let n=Il(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function u2(t,e){let n=Il(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function c2(t,e){t.uniform1iv(this.addr,e)}function f2(t,e){t.uniform2iv(this.addr,e)}function d2(t,e){t.uniform3iv(this.addr,e)}function h2(t,e){t.uniform4iv(this.addr,e)}function p2(t,e){t.uniform1uiv(this.addr,e)}function m2(t,e){t.uniform2uiv(this.addr,e)}function g2(t,e){t.uniform3uiv(this.addr,e)}function x2(t,e){t.uniform4uiv(this.addr,e)}function y2(t,e,n){let a=this.cache,i=e.length,s=fp(n,i);un(a,s)||(t.uniform1iv(this.addr,s),cn(a,s));let r;this.type===t.SAMPLER_2D_SHADOW?r=vx:r=J1;for(let l=0;l!==i;++l)n.setTexture2D(e[l]||r,s[l])}function v2(t,e,n){let a=this.cache,i=e.length,s=fp(n,i);un(a,s)||(t.uniform1iv(this.addr,s),cn(a,s));for(let r=0;r!==i;++r)n.setTexture3D(e[r]||Q1,s[r])}function _2(t,e,n){let a=this.cache,i=e.length,s=fp(n,i);un(a,s)||(t.uniform1iv(this.addr,s),cn(a,s));for(let r=0;r!==i;++r)n.setTextureCube(e[r]||$1,s[r])}function S2(t,e,n){let a=this.cache,i=e.length,s=fp(n,i);un(a,s)||(t.uniform1iv(this.addr,s),cn(a,s));for(let r=0;r!==i;++r)n.setTexture2DArray(e[r]||j1,s[r])}function M2(t){switch(t){case 5126:return a2;case 35664:return i2;case 35665:return s2;case 35666:return r2;case 35674:return o2;case 35675:return l2;case 35676:return u2;case 5124:case 35670:return c2;case 35667:case 35671:return f2;case 35668:case 35672:return d2;case 35669:case 35673:return h2;case 5125:return p2;case 36294:return m2;case 36295:return g2;case 36296:return x2;case 35678:case 36198:case 36298:case 36306:case 35682:return y2;case 35679:case 36299:case 36307:return v2;case 35680:case 36300:case 36308:case 36293:return _2;case 36289:case 36303:case 36311:case 36292:return S2}}var _x=class{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=n2(n.type)}},Sx=class{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=M2(n.type)}},Mx=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let l=i[s];l.setValue(e,n[l.id],a)}}},xx=/(\w+)(\])?(\[|\.)?/g;function N1(t,e){t.seq.push(e),t.map[e.id]=e}function b2(t,e,n){let a=t.name,i=a.length;for(xx.lastIndex=0;;){let s=xx.exec(a),r=xx.lastIndex,l=s[1],o=s[2]==="]",u=s[3];if(o&&(l=l|0),u===void 0||u==="["&&r+2===i){N1(n,u===void 0?new _x(l,t,e):new Sx(l,t,e));break}else{let d=n.map[l];d===void 0&&(d=new Mx(l),N1(n,d)),n=d}}}var wl=class{constructor(e,n){this.seq=[],this.map={};let a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){let l=e.getActiveUniform(n,r),o=e.getUniformLocation(n,l.name);b2(l,o,this)}let i=[],s=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):s.push(r);i.length>0&&(this.seq=i.concat(s))}setValue(e,n,a,i){let s=this.map[n];s!==void 0&&s.setValue(e,a,i)}setOptional(e,n,a){let i=n[a];i!==void 0&&this.setValue(e,a,i)}static upload(e,n,a,i){for(let s=0,r=n.length;s!==r;++s){let l=n[s],o=a[l.id];o.needsUpdate!==!1&&l.setValue(e,o.value,i)}}static seqWithValue(e,n){let a=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];r.id in n&&a.push(r)}return a}};function B1(t,e,n){let a=t.createShader(e);return t.shaderSource(a,n),t.compileShader(a),a}var T2=37297,A2=0;function C2(t,e){let n=t.split(`
`),a=[],i=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let r=i;r<s;r++){let l=r+1;a.push(`${l===e?">":" "} ${l}: ${n[r]}`)}return a.join(`
`)}var F1=new Fe;function L2(t){qe._getMatrix(F1,qe.workingColorSpace,t);let e=`mat3( ${F1.elements.map(n=>n.toFixed(4))} )`;switch(qe.getTransfer(t)){case $u:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function k1(t,e,n){let a=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(a&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let l=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+C2(t.getShaderSource(e),l)}else return s}function w2(t,e){let n=L2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var E2={[Y0]:"Linear",[Z0]:"Reinhard",[K0]:"Cineon",[Mc]:"ACESFilmic",[j0]:"AgX",[Q0]:"Neutral",[J0]:"Custom"};function I2(t,e){let n=E2[e];return n===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var op=new B;function R2(){qe.getLuminanceCoefficients(op);let t=op.x.toFixed(4),e=op.y.toFixed(4),n=op.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uc).join(`
`)}function P2(t){let e=[];for(let n in t){let a=t[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function U2(t,e){let n={},a=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<a;i++){let s=t.getActiveAttrib(e,i),r=s.name,l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[r]={type:s.type,location:t.getAttribLocation(e,r),locationSize:l}}return n}function Uc(t){return t!==""}function z1(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function H1(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var O2=/^[ \t]*#include +<([\w\d./]+)>/gm;function bx(t){return t.replace(O2,B2)}var N2=new Map;function B2(t,e){let n=Ye[e];if(n===void 0){let a=N2.get(e);if(a!==void 0)n=Ye[a],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return bx(n)}var F2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function G1(t){return t.replace(F2,k2)}function k2(t,e,n,a){let i="";for(let s=parseInt(e);s<parseInt(n);s++)i+=a.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function V1(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var z2={[Sc]:"SHADOWMAP_TYPE_PCF",[Ml]:"SHADOWMAP_TYPE_VSM"};function H2(t){return z2[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var G2={[nr]:"ENVMAP_TYPE_CUBE",[Vr]:"ENVMAP_TYPE_CUBE",[bc]:"ENVMAP_TYPE_CUBE_UV"};function V2(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":G2[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var q2={[Vr]:"ENVMAP_MODE_REFRACTION"};function W2(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":q2[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var X2={[xh]:"ENVMAP_BLENDING_MULTIPLY",[r1]:"ENVMAP_BLENDING_MIX",[o1]:"ENVMAP_BLENDING_ADD"};function Y2(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":X2[t.combine]||"ENVMAP_BLENDING_NONE"}function Z2(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:a,maxMip:n}}function K2(t,e,n,a){let i=t.getContext(),s=n.defines,r=n.vertexShader,l=n.fragmentShader,o=H2(n),u=V2(n),c=W2(n),d=Y2(n),f=Z2(n),h=D2(n),g=P2(s),y=i.createProgram(),m,p,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Uc).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Uc).join(`
`),p.length>0&&(p+=`
`)):(m=[V1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+o:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uc).join(`
`),p=[V1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+o:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ja?"#define TONE_MAPPING":"",n.toneMapping!==ja?Ye.tonemapping_pars_fragment:"",n.toneMapping!==ja?I2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,w2("linearToOutputTexel",n.outputColorSpace),R2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Uc).join(`
`)),r=bx(r),r=z1(r,n),r=H1(r,n),l=bx(l),l=z1(l,n),l=H1(l,n),r=G1(r),l=G1(l),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===ox?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ox?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=x+m+r,M=x+p+l,C=B1(i,i.VERTEX_SHADER,v),T=B1(i,i.FRAGMENT_SHADER,M);i.attachShader(y,C),i.attachShader(y,T),n.index0AttributeName!==void 0?i.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function L(I){if(t.debug.checkShaderErrors){let F=i.getProgramInfoLog(y)||"",q=i.getShaderInfoLog(C)||"",Y=i.getShaderInfoLog(T)||"",U=F.trim(),H=q.trim(),G=Y.trim(),Q=!0,ne=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,y,C,T);else{let ie=k1(i,C,"vertex"),Me=k1(i,T,"fragment");De("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+ie+`
`+Me)}else U!==""?Ae("WebGLProgram: Program Info Log:",U):(H===""||G==="")&&(ne=!1);ne&&(I.diagnostics={runnable:Q,programLog:U,vertexShader:{log:H,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(C),i.deleteShader(T),_=new wl(i,y),w=U2(i,y)}let _;this.getUniforms=function(){return _===void 0&&L(this),_};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(y,T2)),E},this.destroy=function(){a.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=A2++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=T,this}var J2=0,Tx=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,a=e.fragmentShader,i=this._getShaderStage(n),s=this._getShaderStage(a),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){let n=this.shaderCache,a=n.get(e);return a===void 0&&(a=new Ax(e),n.set(e,a)),a}},Ax=class{constructor(e){this.id=J2++,this.code=e,this.usedTimes=0}};function j2(t){return t===ir||t===wc||t===Ec}function Q2(t,e,n,a,i,s){let r=new pl,l=new Tx,o=new Set,u=[],c=new Map,d=a.logarithmicDepthBuffer,f=a.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return o.add(_),_===0?"uv":`uv${_}`}function y(_,w,E,I,F,q){let Y=I.fog,U=F.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Q=e.get(_.envMap||H,G),ne=Q&&Q.mapping===bc?Q.image.height:null,ie=h[_.type];_.precision!==null&&(f=a.getMaxPrecision(_.precision),f!==_.precision&&Ae("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let Me=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,be=Me!==void 0?Me.length:0,tt=0;U.morphAttributes.position!==void 0&&(tt=1),U.morphAttributes.normal!==void 0&&(tt=2),U.morphAttributes.color!==void 0&&(tt=3);let ot,Be,J,de;if(ie){let xe=Ci[ie];ot=xe.vertexShader,Be=xe.fragmentShader}else ot=_.vertexShader,Be=_.fragmentShader,l.update(_),J=l.getVertexShaderID(_),de=l.getFragmentShaderID(_);let le=t.getRenderTarget(),Ee=t.state.buffers.depth.getReversed(),Pe=F.isInstancedMesh===!0,Ie=F.isBatchedMesh===!0,wt=!!_.map,Ge=!!_.matcap,nt=!!Q,dt=!!_.aoMap,We=!!_.lightMap,kt=!!_.bumpMap,Mt=!!_.normalMap,dn=!!_.displacementMap,D=!!_.emissiveMap,ct=!!_.metalnessMap,Ze=!!_.roughnessMap,ht=_.anisotropy>0,fe=_.clearcoat>0,Pt=_.dispersion>0,A=_.iridescence>0,S=_.sheen>0,N=_.transmission>0,Z=ht&&!!_.anisotropyMap,$=fe&&!!_.clearcoatMap,se=fe&&!!_.clearcoatNormalMap,ae=fe&&!!_.clearcoatRoughnessMap,X=A&&!!_.iridescenceMap,K=A&&!!_.iridescenceThicknessMap,he=S&&!!_.sheenColorMap,ve=S&&!!_.sheenRoughnessMap,ue=!!_.specularMap,oe=!!_.specularColorMap,Oe=!!_.specularIntensityMap,ke=N&&!!_.transmissionMap,st=N&&!!_.thicknessMap,R=!!_.gradientMap,re=!!_.alphaMap,P=_.alphaTest>0,ee=!!_.alphaHash,te=!!_.extensions,W=ja;_.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(W=t.toneMapping);let pe={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:ot,fragmentShader:Be,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:de,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Ie,batchingColor:Ie&&F._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&F.instanceColor!==null,instancingMorph:Pe&&F.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:wt,matcap:Ge,envMap:nt,envMapMode:nt&&Q.mapping,envMapCubeUVHeight:ne,aoMap:dt,lightMap:We,bumpMap:kt,normalMap:Mt,displacementMap:dn,emissiveMap:D,normalMapObjectSpace:Mt&&_.normalMapType===f1,normalMapTangentSpace:Mt&&_.normalMapType===Rc,packedNormalMap:Mt&&_.normalMapType===Rc&&j2(_.normalMap.format),metalnessMap:ct,roughnessMap:Ze,anisotropy:ht,anisotropyMap:Z,clearcoat:fe,clearcoatMap:$,clearcoatNormalMap:se,clearcoatRoughnessMap:ae,dispersion:Pt,iridescence:A,iridescenceMap:X,iridescenceThicknessMap:K,sheen:S,sheenColorMap:he,sheenRoughnessMap:ve,specularMap:ue,specularColorMap:oe,specularIntensityMap:Oe,transmission:N,transmissionMap:ke,thicknessMap:st,gradientMap:R,opaque:_.transparent===!1&&_.blending===Pr&&_.alphaToCoverage===!1,alphaMap:re,alphaTest:P,alphaHash:ee,combine:_.combine,mapUv:wt&&g(_.map.channel),aoMapUv:dt&&g(_.aoMap.channel),lightMapUv:We&&g(_.lightMap.channel),bumpMapUv:kt&&g(_.bumpMap.channel),normalMapUv:Mt&&g(_.normalMap.channel),displacementMapUv:dn&&g(_.displacementMap.channel),emissiveMapUv:D&&g(_.emissiveMap.channel),metalnessMapUv:ct&&g(_.metalnessMap.channel),roughnessMapUv:Ze&&g(_.roughnessMap.channel),anisotropyMapUv:Z&&g(_.anisotropyMap.channel),clearcoatMapUv:$&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:K&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:he&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(_.sheenRoughnessMap.channel),specularMapUv:ue&&g(_.specularMap.channel),specularColorMapUv:oe&&g(_.specularColorMap.channel),specularIntensityMapUv:Oe&&g(_.specularIntensityMap.channel),transmissionMapUv:ke&&g(_.transmissionMap.channel),thicknessMapUv:st&&g(_.thicknessMap.channel),alphaMapUv:re&&g(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Mt||ht),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!U.attributes.uv&&(wt||re),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&Mt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ee,skinning:F.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:tt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&E.length>0,shadowMapType:t.shadowMap.type,toneMapping:W,decodeVideoTexture:wt&&_.map.isVideoTexture===!0&&qe.getTransfer(_.map.colorSpace)===ft,decodeVideoTextureEmissive:D&&_.emissiveMap.isVideoTexture===!0&&qe.getTransfer(_.emissiveMap.colorSpace)===ft,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Na,flipSided:_.side===An,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:te&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&_.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return pe.vertexUv1s=o.has(1),pe.vertexUv2s=o.has(2),pe.vertexUv3s=o.has(3),o.clear(),pe}function m(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let E in _.defines)w.push(E),w.push(_.defines[E]);return _.isRawShaderMaterial===!1&&(p(w,_),x(w,_),w.push(t.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function x(_,w){r.disableAll(),w.instancing&&r.enable(0),w.instancingColor&&r.enable(1),w.instancingMorph&&r.enable(2),w.matcap&&r.enable(3),w.envMap&&r.enable(4),w.normalMapObjectSpace&&r.enable(5),w.normalMapTangentSpace&&r.enable(6),w.clearcoat&&r.enable(7),w.iridescence&&r.enable(8),w.alphaTest&&r.enable(9),w.vertexColors&&r.enable(10),w.vertexAlphas&&r.enable(11),w.vertexUv1s&&r.enable(12),w.vertexUv2s&&r.enable(13),w.vertexUv3s&&r.enable(14),w.vertexTangents&&r.enable(15),w.anisotropy&&r.enable(16),w.alphaHash&&r.enable(17),w.batching&&r.enable(18),w.dispersion&&r.enable(19),w.batchingColor&&r.enable(20),w.gradientMap&&r.enable(21),w.packedNormalMap&&r.enable(22),w.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reversedDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),w.numLightProbeGrids>0&&r.enable(22),_.push(r.mask)}function v(_){let w=h[_.type],E;if(w){let I=Ci[w];E=b1.clone(I.uniforms)}else E=_.uniforms;return E}function M(_,w){let E=c.get(w);return E!==void 0?++E.usedTimes:(E=new K2(t,w,_,i),u.push(E),c.set(w,E)),E}function C(_){if(--_.usedTimes===0){let w=u.indexOf(_);u[w]=u[u.length-1],u.pop(),c.delete(_.cacheKey),_.destroy()}}function T(_){l.remove(_)}function L(){l.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:v,acquireProgram:M,releaseProgram:C,releaseShaderCache:T,programs:u,dispose:L}}function $2(){let t=new WeakMap;function e(r){return t.has(r)}function n(r){let l=t.get(r);return l===void 0&&(l={},t.set(r,l)),l}function a(r){t.delete(r)}function i(r,l,o){t.get(r)[l]=o}function s(){t=new WeakMap}return{has:e,get:n,remove:a,update:i,dispose:s}}function e3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function q1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function W1(){let t=[],e=0,n=[],a=[],i=[];function s(){e=0,n.length=0,a.length=0,i.length=0}function r(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function l(f,h,g,y,m,p){let x=t[e];return x===void 0?(x={id:f.id,object:f,geometry:h,material:g,materialVariant:r(f),groupOrder:y,renderOrder:f.renderOrder,z:m,group:p},t[e]=x):(x.id=f.id,x.object=f,x.geometry=h,x.material=g,x.materialVariant=r(f),x.groupOrder=y,x.renderOrder=f.renderOrder,x.z=m,x.group=p),e++,x}function o(f,h,g,y,m,p){let x=l(f,h,g,y,m,p);g.transmission>0?a.push(x):g.transparent===!0?i.push(x):n.push(x)}function u(f,h,g,y,m,p){let x=l(f,h,g,y,m,p);g.transmission>0?a.unshift(x):g.transparent===!0?i.unshift(x):n.unshift(x)}function c(f,h){n.length>1&&n.sort(f||e3),a.length>1&&a.sort(h||q1),i.length>1&&i.sort(h||q1)}function d(){for(let f=e,h=t.length;f<h;f++){let g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:a,transparent:i,init:s,push:o,unshift:u,finish:d,sort:c}}function t3(){let t=new WeakMap;function e(a,i){let s=t.get(a),r;return s===void 0?(r=new W1,t.set(a,[r])):i>=s.length?(r=new W1,s.push(r)):r=s[i],r}function n(){t=new WeakMap}return{get:e,dispose:n}}function n3(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Re};break;case"SpotLight":n={position:new B,direction:new B,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":n={color:new Re,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function a3(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var i3=0;function s3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function r3(t){let e=new n3,n=a3(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)a.probe.push(new B);let i=new B,s=new Ne,r=new Ne;function l(u){let c=0,d=0,f=0;for(let w=0;w<9;w++)a.probe[w].set(0,0,0);let h=0,g=0,y=0,m=0,p=0,x=0,v=0,M=0,C=0,T=0,L=0;u.sort(s3);for(let w=0,E=u.length;w<E;w++){let I=u[w],F=I.color,q=I.intensity,Y=I.distance,U=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ir?U=I.shadow.map.texture:U=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)c+=F.r*q,d+=F.g*q,f+=F.b*q;else if(I.isLightProbe){for(let H=0;H<9;H++)a.probe[H].addScaledVector(I.sh.coefficients[H],q);L++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let G=I.shadow,Q=n.get(I);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,a.directionalShadow[h]=Q,a.directionalShadowMap[h]=U,a.directionalShadowMatrix[h]=I.shadow.matrix,x++}a.directional[h]=H,h++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(F).multiplyScalar(q),H.distance=Y,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,a.spot[y]=H;let G=I.shadow;if(I.map&&(a.spotLightMap[C]=I.map,C++,G.updateMatrices(I),I.castShadow&&T++),a.spotLightMatrix[y]=G.matrix,I.castShadow){let Q=n.get(I);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,a.spotShadow[y]=Q,a.spotShadowMap[y]=U,M++}y++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(F).multiplyScalar(q),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),a.rectArea[m]=H,m++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let G=I.shadow,Q=n.get(I);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,Q.shadowCameraNear=G.camera.near,Q.shadowCameraFar=G.camera.far,a.pointShadow[g]=Q,a.pointShadowMap[g]=U,a.pointShadowMatrix[g]=I.shadow.matrix,v++}a.point[g]=H,g++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(q),H.groundColor.copy(I.groundColor).multiplyScalar(q),a.hemi[p]=H,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=me.LTC_FLOAT_1,a.rectAreaLTC2=me.LTC_FLOAT_2):(a.rectAreaLTC1=me.LTC_HALF_1,a.rectAreaLTC2=me.LTC_HALF_2)),a.ambient[0]=c,a.ambient[1]=d,a.ambient[2]=f;let _=a.hash;(_.directionalLength!==h||_.pointLength!==g||_.spotLength!==y||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==x||_.numPointShadows!==v||_.numSpotShadows!==M||_.numSpotMaps!==C||_.numLightProbes!==L)&&(a.directional.length=h,a.spot.length=y,a.rectArea.length=m,a.point.length=g,a.hemi.length=p,a.directionalShadow.length=x,a.directionalShadowMap.length=x,a.pointShadow.length=v,a.pointShadowMap.length=v,a.spotShadow.length=M,a.spotShadowMap.length=M,a.directionalShadowMatrix.length=x,a.pointShadowMatrix.length=v,a.spotLightMatrix.length=M+C-T,a.spotLightMap.length=C,a.numSpotLightShadowsWithMaps=T,a.numLightProbes=L,_.directionalLength=h,_.pointLength=g,_.spotLength=y,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=x,_.numPointShadows=v,_.numSpotShadows=M,_.numSpotMaps=C,_.numLightProbes=L,a.version=i3++)}function o(u,c){let d=0,f=0,h=0,g=0,y=0,m=c.matrixWorldInverse;for(let p=0,x=u.length;p<x;p++){let v=u[p];if(v.isDirectionalLight){let M=a.directional[d];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),d++}else if(v.isSpotLight){let M=a.spot[h];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),h++}else if(v.isRectAreaLight){let M=a.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),r.identity(),s.copy(v.matrixWorld),s.premultiply(m),r.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){let M=a.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let M=a.hemi[y];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:l,setupView:o,state:a}}function X1(t){let e=new r3(t),n=[],a=[],i=[];function s(f){d.camera=f,n.length=0,a.length=0,i.length=0}function r(f){n.push(f)}function l(f){a.push(f)}function o(f){i.push(f)}function u(){e.setup(n)}function c(f){e.setupView(n,f)}let d={lightsArray:n,shadowsArray:a,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:u,setupLightsView:c,pushLight:r,pushShadow:l,pushLightProbeGrid:o}}function o3(t){let e=new WeakMap;function n(i,s=0){let r=e.get(i),l;return r===void 0?(l=new X1(t),e.set(i,[l])):s>=r.length?(l=new X1(t),r.push(l)):l=r[s],l}function a(){e=new WeakMap}return{get:n,dispose:a}}var l3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,c3=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],f3=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Y1=new Ne,Pc=new B,yx=new B;function d3(t,e,n){let a=new yl,i=new He,s=new He,r=new St,l=new sh,o=new rh,u={},c=n.maxTextureSize,d={[Ka]:An,[An]:Ka,[Na]:Na},f=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:l3,fragmentShader:u3}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new Tn;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new xt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sc;let p=this.type;this.render=function(T,L,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Hb&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Sc);let w=t.getRenderTarget(),E=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),F=t.state;F.setBlending(bi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let q=p!==this.type;q&&L.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(U=>U.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,U=T.length;Y<U;Y++){let H=T[Y],G=H.shadow;if(G===void 0){Ae("WebGLShadowMap:",H,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let Q=G.getFrameExtents();i.multiply(Q),s.copy(G.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(s.x=Math.floor(c/Q.x),i.x=s.x*Q.x,G.mapSize.x=s.x),i.y>c&&(s.y=Math.floor(c/Q.y),i.y=s.y*Q.y,G.mapSize.y=s.y));let ne=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ne,G.map===null||q===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ml){if(H.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ga(i.x,i.y,{format:ir,type:Ti,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),G.map.texture.name=H.name+".shadowMap",G.map.depthTexture=new $i(i.x,i.y,va),G.map.depthTexture.name=H.name+".shadowMapDepth",G.map.depthTexture.format=mi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=jt,G.map.depthTexture.magFilter=jt}else H.isPointLight?(G.map=new lp(i.x),G.map.depthTexture=new ah(i.x,Qa)):(G.map=new ga(i.x,i.y),G.map.depthTexture=new $i(i.x,i.y,Qa)),G.map.depthTexture.name=H.name+".shadowMap",G.map.depthTexture.format=mi,this.type===Sc?(G.map.depthTexture.compareFunction=ne?sp:ip,G.map.depthTexture.minFilter=Qt,G.map.depthTexture.magFilter=Qt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=jt,G.map.depthTexture.magFilter=jt);G.camera.updateProjectionMatrix()}let ie=G.map.isWebGLCubeRenderTarget?6:1;for(let Me=0;Me<ie;Me++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,Me),t.clear();else{Me===0&&(t.setRenderTarget(G.map),t.clear());let be=G.getViewport(Me);r.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),F.viewport(r)}if(H.isPointLight){let be=G.camera,tt=G.matrix,ot=H.distance||be.far;ot!==be.far&&(be.far=ot,be.updateProjectionMatrix()),Pc.setFromMatrixPosition(H.matrixWorld),be.position.copy(Pc),yx.copy(be.position),yx.add(c3[Me]),be.up.copy(f3[Me]),be.lookAt(yx),be.updateMatrixWorld(),tt.makeTranslation(-Pc.x,-Pc.y,-Pc.z),Y1.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Y1,be.coordinateSystem,be.reversedDepth)}else G.updateMatrices(H);a=G.getFrustum(),M(L,_,G.camera,H,this.type)}G.isPointLightShadow!==!0&&this.type===Ml&&x(G,_),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(w,E,I)};function x(T,L){let _=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ga(i.x,i.y,{format:ir,type:Ti})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(L,null,_,f,y,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(L,null,_,h,y,null)}function v(T,L,_,w){let E=null,I=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)E=I;else if(E=_.isPointLight===!0?o:l,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let F=E.uuid,q=L.uuid,Y=u[F];Y===void 0&&(Y={},u[F]=Y);let U=Y[q];U===void 0&&(U=E.clone(),Y[q]=U,L.addEventListener("dispose",C)),E=U}if(E.visible=L.visible,E.wireframe=L.wireframe,w===Ml?E.side=L.shadowSide!==null?L.shadowSide:L.side:E.side=L.shadowSide!==null?L.shadowSide:d[L.side],E.alphaMap=L.alphaMap,E.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,E.map=L.map,E.clipShadows=L.clipShadows,E.clippingPlanes=L.clippingPlanes,E.clipIntersection=L.clipIntersection,E.displacementMap=L.displacementMap,E.displacementScale=L.displacementScale,E.displacementBias=L.displacementBias,E.wireframeLinewidth=L.wireframeLinewidth,E.linewidth=L.linewidth,_.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let F=t.properties.get(E);F.light=_}return E}function M(T,L,_,w,E){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Ml)&&(!T.frustumCulled||a.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let q=e.update(T),Y=T.material;if(Array.isArray(Y)){let U=q.groups;for(let H=0,G=U.length;H<G;H++){let Q=U[H],ne=Y[Q.materialIndex];if(ne&&ne.visible){let ie=v(T,ne,w,E);T.onBeforeShadow(t,T,L,_,q,ie,Q),t.renderBufferDirect(_,null,q,ie,T,Q),T.onAfterShadow(t,T,L,_,q,ie,Q)}}}else if(Y.visible){let U=v(T,Y,w,E);T.onBeforeShadow(t,T,L,_,q,U,null),t.renderBufferDirect(_,null,q,U,T,null),T.onAfterShadow(t,T,L,_,q,U,null)}}let F=T.children;for(let q=0,Y=F.length;q<Y;q++)M(F[q],L,_,w,E)}function C(T){T.target.removeEventListener("dispose",C);for(let _ in u){let w=u[_],E=T.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}function h3(t,e){function n(){let R=!1,re=new St,P=null,ee=new St(0,0,0,0);return{setMask:function(te){P!==te&&!R&&(t.colorMask(te,te,te,te),P=te)},setLocked:function(te){R=te},setClear:function(te,W,pe,xe,at){at===!0&&(te*=xe,W*=xe,pe*=xe),re.set(te,W,pe,xe),ee.equals(re)===!1&&(t.clearColor(te,W,pe,xe),ee.copy(re))},reset:function(){R=!1,P=null,ee.set(-1,0,0,0)}}}function a(){let R=!1,re=!1,P=null,ee=null,te=null;return{setReversed:function(W){if(re!==W){let pe=e.get("EXT_clip_control");W?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),re=W;let xe=te;te=null,this.setClear(xe)}},getReversed:function(){return re},setTest:function(W){W?le(t.DEPTH_TEST):Ee(t.DEPTH_TEST)},setMask:function(W){P!==W&&!R&&(t.depthMask(W),P=W)},setFunc:function(W){if(re&&(W=S1[W]),ee!==W){switch(W){case Vd:t.depthFunc(t.NEVER);break;case qd:t.depthFunc(t.ALWAYS);break;case Wd:t.depthFunc(t.LESS);break;case Ur:t.depthFunc(t.LEQUAL);break;case Xd:t.depthFunc(t.EQUAL);break;case Yd:t.depthFunc(t.GEQUAL);break;case Zd:t.depthFunc(t.GREATER);break;case Kd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=W}},setLocked:function(W){R=W},setClear:function(W){te!==W&&(te=W,re&&(W=1-W),t.clearDepth(W))},reset:function(){R=!1,P=null,ee=null,te=null,re=!1}}}function i(){let R=!1,re=null,P=null,ee=null,te=null,W=null,pe=null,xe=null,at=null;return{setTest:function(Ve){R||(Ve?le(t.STENCIL_TEST):Ee(t.STENCIL_TEST))},setMask:function(Ve){re!==Ve&&!R&&(t.stencilMask(Ve),re=Ve)},setFunc:function(Ve,vn,Cn){(P!==Ve||ee!==vn||te!==Cn)&&(t.stencilFunc(Ve,vn,Cn),P=Ve,ee=vn,te=Cn)},setOp:function(Ve,vn,Cn){(W!==Ve||pe!==vn||xe!==Cn)&&(t.stencilOp(Ve,vn,Cn),W=Ve,pe=vn,xe=Cn)},setLocked:function(Ve){R=Ve},setClear:function(Ve){at!==Ve&&(t.clearStencil(Ve),at=Ve)},reset:function(){R=!1,re=null,P=null,ee=null,te=null,W=null,pe=null,xe=null,at=null}}}let s=new n,r=new a,l=new i,o=new WeakMap,u=new WeakMap,c={},d={},f={},h=new WeakMap,g=[],y=null,m=!1,p=null,x=null,v=null,M=null,C=null,T=null,L=null,_=new Re(0,0,0),w=0,E=!1,I=null,F=null,q=null,Y=null,U=null,H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Q=0,ne=t.getParameter(t.VERSION);ne.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ne)[1]),G=Q>=1):ne.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),G=Q>=2);let ie=null,Me={},be=t.getParameter(t.SCISSOR_BOX),tt=t.getParameter(t.VIEWPORT),ot=new St().fromArray(be),Be=new St().fromArray(tt);function J(R,re,P,ee){let te=new Uint8Array(4),W=t.createTexture();t.bindTexture(R,W),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let pe=0;pe<P;pe++)R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY?t.texImage3D(re,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,te):t.texImage2D(re+pe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,te);return W}let de={};de[t.TEXTURE_2D]=J(t.TEXTURE_2D,t.TEXTURE_2D,1),de[t.TEXTURE_CUBE_MAP]=J(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[t.TEXTURE_2D_ARRAY]=J(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),de[t.TEXTURE_3D]=J(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),l.setClear(0),le(t.DEPTH_TEST),r.setFunc(Ur),kt(!1),Mt(V0),le(t.CULL_FACE),dt(bi);function le(R){c[R]!==!0&&(t.enable(R),c[R]=!0)}function Ee(R){c[R]!==!1&&(t.disable(R),c[R]=!1)}function Pe(R,re){return f[R]!==re?(t.bindFramebuffer(R,re),f[R]=re,R===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=re),R===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=re),!0):!1}function Ie(R,re){let P=g,ee=!1;if(R){P=h.get(re),P===void 0&&(P=[],h.set(re,P));let te=R.textures;if(P.length!==te.length||P[0]!==t.COLOR_ATTACHMENT0){for(let W=0,pe=te.length;W<pe;W++)P[W]=t.COLOR_ATTACHMENT0+W;P.length=te.length,ee=!0}}else P[0]!==t.BACK&&(P[0]=t.BACK,ee=!0);ee&&t.drawBuffers(P)}function wt(R){return y!==R?(t.useProgram(R),y=R,!0):!1}let Ge={[Xs]:t.FUNC_ADD,[Vb]:t.FUNC_SUBTRACT,[qb]:t.FUNC_REVERSE_SUBTRACT};Ge[Wb]=t.MIN,Ge[Xb]=t.MAX;let nt={[Yb]:t.ZERO,[Zb]:t.ONE,[Kb]:t.SRC_COLOR,[Hd]:t.SRC_ALPHA,[t1]:t.SRC_ALPHA_SATURATE,[$b]:t.DST_COLOR,[jb]:t.DST_ALPHA,[Jb]:t.ONE_MINUS_SRC_COLOR,[Gd]:t.ONE_MINUS_SRC_ALPHA,[e1]:t.ONE_MINUS_DST_COLOR,[Qb]:t.ONE_MINUS_DST_ALPHA,[n1]:t.CONSTANT_COLOR,[a1]:t.ONE_MINUS_CONSTANT_COLOR,[i1]:t.CONSTANT_ALPHA,[s1]:t.ONE_MINUS_CONSTANT_ALPHA};function dt(R,re,P,ee,te,W,pe,xe,at,Ve){if(R===bi){m===!0&&(Ee(t.BLEND),m=!1);return}if(m===!1&&(le(t.BLEND),m=!0),R!==Gb){if(R!==p||Ve!==E){if((x!==Xs||C!==Xs)&&(t.blendEquation(t.FUNC_ADD),x=Xs,C=Xs),Ve)switch(R){case Pr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case q0:t.blendFunc(t.ONE,t.ONE);break;case W0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case X0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:De("WebGLState: Invalid blending: ",R);break}else switch(R){case Pr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case q0:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case W0:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case X0:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",R);break}v=null,M=null,T=null,L=null,_.set(0,0,0),w=0,p=R,E=Ve}return}te=te||re,W=W||P,pe=pe||ee,(re!==x||te!==C)&&(t.blendEquationSeparate(Ge[re],Ge[te]),x=re,C=te),(P!==v||ee!==M||W!==T||pe!==L)&&(t.blendFuncSeparate(nt[P],nt[ee],nt[W],nt[pe]),v=P,M=ee,T=W,L=pe),(xe.equals(_)===!1||at!==w)&&(t.blendColor(xe.r,xe.g,xe.b,at),_.copy(xe),w=at),p=R,E=!1}function We(R,re){R.side===Na?Ee(t.CULL_FACE):le(t.CULL_FACE);let P=R.side===An;re&&(P=!P),kt(P),R.blending===Pr&&R.transparent===!1?dt(bi):dt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),r.setFunc(R.depthFunc),r.setTest(R.depthTest),r.setMask(R.depthWrite),s.setMask(R.colorWrite);let ee=R.stencilWrite;l.setTest(ee),ee&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),D(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Ee(t.SAMPLE_ALPHA_TO_COVERAGE)}function kt(R){I!==R&&(R?t.frontFace(t.CW):t.frontFace(t.CCW),I=R)}function Mt(R){R!==kb?(le(t.CULL_FACE),R!==F&&(R===V0?t.cullFace(t.BACK):R===zb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ee(t.CULL_FACE),F=R}function dn(R){R!==q&&(G&&t.lineWidth(R),q=R)}function D(R,re,P){R?(le(t.POLYGON_OFFSET_FILL),(Y!==re||U!==P)&&(Y=re,U=P,r.getReversed()&&(re=-re),t.polygonOffset(re,P))):Ee(t.POLYGON_OFFSET_FILL)}function ct(R){R?le(t.SCISSOR_TEST):Ee(t.SCISSOR_TEST)}function Ze(R){R===void 0&&(R=t.TEXTURE0+H-1),ie!==R&&(t.activeTexture(R),ie=R)}function ht(R,re,P){P===void 0&&(ie===null?P=t.TEXTURE0+H-1:P=ie);let ee=Me[P];ee===void 0&&(ee={type:void 0,texture:void 0},Me[P]=ee),(ee.type!==R||ee.texture!==re)&&(ie!==P&&(t.activeTexture(P),ie=P),t.bindTexture(R,re||de[R]),ee.type=R,ee.texture=re)}function fe(){let R=Me[ie];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Pt(){try{t.compressedTexImage2D(...arguments)}catch(R){De("WebGLState:",R)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(R){De("WebGLState:",R)}}function S(){try{t.texSubImage2D(...arguments)}catch(R){De("WebGLState:",R)}}function N(){try{t.texSubImage3D(...arguments)}catch(R){De("WebGLState:",R)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(R){De("WebGLState:",R)}}function $(){try{t.compressedTexSubImage3D(...arguments)}catch(R){De("WebGLState:",R)}}function se(){try{t.texStorage2D(...arguments)}catch(R){De("WebGLState:",R)}}function ae(){try{t.texStorage3D(...arguments)}catch(R){De("WebGLState:",R)}}function X(){try{t.texImage2D(...arguments)}catch(R){De("WebGLState:",R)}}function K(){try{t.texImage3D(...arguments)}catch(R){De("WebGLState:",R)}}function he(R){return d[R]!==void 0?d[R]:t.getParameter(R)}function ve(R,re){d[R]!==re&&(t.pixelStorei(R,re),d[R]=re)}function ue(R){ot.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),ot.copy(R))}function oe(R){Be.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),Be.copy(R))}function Oe(R,re){let P=u.get(re);P===void 0&&(P=new WeakMap,u.set(re,P));let ee=P.get(R);ee===void 0&&(ee=t.getUniformBlockIndex(re,R.name),P.set(R,ee))}function ke(R,re){let ee=u.get(re).get(R);o.get(re)!==ee&&(t.uniformBlockBinding(re,ee,R.__bindingPointIndex),o.set(re,ee))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),c={},d={},ie=null,Me={},f={},h=new WeakMap,g=[],y=null,m=!1,p=null,x=null,v=null,M=null,C=null,T=null,L=null,_=new Re(0,0,0),w=0,E=!1,I=null,F=null,q=null,Y=null,U=null,ot.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),l.reset()}return{buffers:{color:s,depth:r,stencil:l},enable:le,disable:Ee,bindFramebuffer:Pe,drawBuffers:Ie,useProgram:wt,setBlending:dt,setMaterial:We,setFlipSided:kt,setCullFace:Mt,setLineWidth:dn,setPolygonOffset:D,setScissorTest:ct,activeTexture:Ze,bindTexture:ht,unbindTexture:fe,compressedTexImage2D:Pt,compressedTexImage3D:A,texImage2D:X,texImage3D:K,pixelStorei:ve,getParameter:he,updateUBOMapping:Oe,uniformBlockBinding:ke,texStorage2D:se,texStorage3D:ae,texSubImage2D:S,texSubImage3D:N,compressedTexSubImage2D:Z,compressedTexSubImage3D:$,scissor:ue,viewport:oe,reset:st}}function p3(t,e,n,a,i,s,r){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new He,c=new WeakMap,d=new Set,f,h=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return g?new OffscreenCanvas(A,S):fl("canvas")}function m(A,S,N){let Z=1,$=Pt(A);if(($.width>N||$.height>N)&&(Z=N/Math.max($.width,$.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let se=Math.floor(Z*$.width),ae=Math.floor(Z*$.height);f===void 0&&(f=y(se,ae));let X=S?y(se,ae):f;return X.width=se,X.height=ae,X.getContext("2d").drawImage(A,0,0,se,ae),Ae("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+se+"x"+ae+")."),X}else return"data"in A&&Ae("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function p(A){return A.generateMipmaps}function x(A){t.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(A,S,N,Z,$,se=!1){if(A!==null){if(t[A]!==void 0)return t[A];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae;Z&&(ae=e.get("EXT_texture_norm16"),ae||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=S;if(S===t.RED&&(N===t.FLOAT&&(X=t.R32F),N===t.HALF_FLOAT&&(X=t.R16F),N===t.UNSIGNED_BYTE&&(X=t.R8),N===t.UNSIGNED_SHORT&&ae&&(X=ae.R16_EXT),N===t.SHORT&&ae&&(X=ae.R16_SNORM_EXT)),S===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(X=t.R8UI),N===t.UNSIGNED_SHORT&&(X=t.R16UI),N===t.UNSIGNED_INT&&(X=t.R32UI),N===t.BYTE&&(X=t.R8I),N===t.SHORT&&(X=t.R16I),N===t.INT&&(X=t.R32I)),S===t.RG&&(N===t.FLOAT&&(X=t.RG32F),N===t.HALF_FLOAT&&(X=t.RG16F),N===t.UNSIGNED_BYTE&&(X=t.RG8),N===t.UNSIGNED_SHORT&&ae&&(X=ae.RG16_EXT),N===t.SHORT&&ae&&(X=ae.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(X=t.RG8UI),N===t.UNSIGNED_SHORT&&(X=t.RG16UI),N===t.UNSIGNED_INT&&(X=t.RG32UI),N===t.BYTE&&(X=t.RG8I),N===t.SHORT&&(X=t.RG16I),N===t.INT&&(X=t.RG32I)),S===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(X=t.RGB8UI),N===t.UNSIGNED_SHORT&&(X=t.RGB16UI),N===t.UNSIGNED_INT&&(X=t.RGB32UI),N===t.BYTE&&(X=t.RGB8I),N===t.SHORT&&(X=t.RGB16I),N===t.INT&&(X=t.RGB32I)),S===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),N===t.UNSIGNED_INT&&(X=t.RGBA32UI),N===t.BYTE&&(X=t.RGBA8I),N===t.SHORT&&(X=t.RGBA16I),N===t.INT&&(X=t.RGBA32I)),S===t.RGB&&(N===t.UNSIGNED_SHORT&&ae&&(X=ae.RGB16_EXT),N===t.SHORT&&ae&&(X=ae.RGB16_SNORM_EXT),N===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(X=t.R11F_G11F_B10F)),S===t.RGBA){let K=se?$u:qe.getTransfer($);N===t.FLOAT&&(X=t.RGBA32F),N===t.HALF_FLOAT&&(X=t.RGBA16F),N===t.UNSIGNED_BYTE&&(X=K===ft?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT&&ae&&(X=ae.RGBA16_EXT),N===t.SHORT&&ae&&(X=ae.RGBA16_SNORM_EXT),N===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function C(A,S){let N;return A?S===null||S===Qa||S===Al?N=t.DEPTH24_STENCIL8:S===va?N=t.DEPTH32F_STENCIL8:S===Tl&&(N=t.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Qa||S===Al?N=t.DEPTH_COMPONENT24:S===va?N=t.DEPTH_COMPONENT32F:S===Tl&&(N=t.DEPTH_COMPONENT16),N}function T(A,S){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==jt&&A.minFilter!==Qt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function L(A){let S=A.target;S.removeEventListener("dispose",L),w(S),S.isVideoTexture&&c.delete(S),S.isHTMLTexture&&d.delete(S)}function _(A){let S=A.target;S.removeEventListener("dispose",_),I(S)}function w(A){let S=a.get(A);if(S.__webglInit===void 0)return;let N=A.source,Z=h.get(N);if(Z){let $=Z[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(A),Object.keys(Z).length===0&&h.delete(N)}a.remove(A)}function E(A){let S=a.get(A);t.deleteTexture(S.__webglTexture);let N=A.source,Z=h.get(N);delete Z[S.__cacheKey],r.memory.textures--}function I(A){let S=a.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),a.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let $=0;$<S.__webglFramebuffer[Z].length;$++)t.deleteFramebuffer(S.__webglFramebuffer[Z][$]);else t.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)t.deleteFramebuffer(S.__webglFramebuffer[Z]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let N=A.textures;for(let Z=0,$=N.length;Z<$;Z++){let se=a.get(N[Z]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),r.memory.textures--),a.remove(N[Z])}a.remove(A)}let F=0;function q(){F=0}function Y(){return F}function U(A){F=A}function H(){let A=F;return A>=i.maxTextures&&Ae("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),F+=1,A}function G(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function Q(A,S){let N=a.get(A);if(A.isVideoTexture&&ht(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&N.__version!==A.version){let Z=A.image;if(Z===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(N,A,S);return}}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+S)}function ne(A,S){let N=a.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){Ee(N,A,S);return}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+S)}function ie(A,S){let N=a.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){Ee(N,A,S);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+S)}function Me(A,S){let N=a.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&N.__version!==A.version){Pe(N,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+S)}let be={[Ys]:t.REPEAT,[Ua]:t.CLAMP_TO_EDGE,[ul]:t.MIRRORED_REPEAT},tt={[jt]:t.NEAREST,[_h]:t.NEAREST_MIPMAP_NEAREST,[qr]:t.NEAREST_MIPMAP_LINEAR,[Qt]:t.LINEAR,[bl]:t.LINEAR_MIPMAP_NEAREST,[ya]:t.LINEAR_MIPMAP_LINEAR},ot={[d1]:t.NEVER,[x1]:t.ALWAYS,[h1]:t.LESS,[ip]:t.LEQUAL,[p1]:t.EQUAL,[sp]:t.GEQUAL,[m1]:t.GREATER,[g1]:t.NOTEQUAL};function Be(A,S){if(S.type===va&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Qt||S.magFilter===bl||S.magFilter===qr||S.magFilter===ya||S.minFilter===Qt||S.minFilter===bl||S.minFilter===qr||S.minFilter===ya)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,be[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,be[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,be[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,tt[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,tt[S.minFilter]),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,ot[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===jt||S.minFilter!==qr&&S.minFilter!==ya||S.type===va&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||a.get(S).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),a.get(S).__currentAnisotropy=S.anisotropy}}}function J(A,S){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",L));let Z=S.source,$=h.get(Z);$===void 0&&($={},h.set(Z,$));let se=G(S);if(se!==A.__cacheKey){$[se]===void 0&&($[se]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,N=!0),$[se].usedTimes++;let ae=$[A.__cacheKey];ae!==void 0&&($[A.__cacheKey].usedTimes--,ae.usedTimes===0&&E(S)),A.__cacheKey=se,A.__webglTexture=$[se].texture}return N}function de(A,S,N){return Math.floor(Math.floor(A/N)/S)}function le(A,S,N,Z){let se=A.updateRanges;if(se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,N,Z,S.data);else{se.sort((ve,ue)=>ve.start-ue.start);let ae=0;for(let ve=1;ve<se.length;ve++){let ue=se[ae],oe=se[ve],Oe=ue.start+ue.count,ke=de(oe.start,S.width,4),st=de(ue.start,S.width,4);oe.start<=Oe+1&&ke===st&&de(oe.start+oe.count-1,S.width,4)===ke?ue.count=Math.max(ue.count,oe.start+oe.count-ue.start):(++ae,se[ae]=oe)}se.length=ae+1;let X=n.getParameter(t.UNPACK_ROW_LENGTH),K=n.getParameter(t.UNPACK_SKIP_PIXELS),he=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let ve=0,ue=se.length;ve<ue;ve++){let oe=se[ve],Oe=Math.floor(oe.start/4),ke=Math.ceil(oe.count/4),st=Oe%S.width,R=Math.floor(Oe/S.width),re=ke,P=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,st),n.pixelStorei(t.UNPACK_SKIP_ROWS,R),n.texSubImage2D(t.TEXTURE_2D,0,st,R,re,P,N,Z,S.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,X),n.pixelStorei(t.UNPACK_SKIP_PIXELS,K),n.pixelStorei(t.UNPACK_SKIP_ROWS,he)}}function Ee(A,S,N){let Z=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=t.TEXTURE_3D);let $=J(A,S),se=S.source;n.bindTexture(Z,A.__webglTexture,t.TEXTURE0+N);let ae=a.get(se);if(se.version!==ae.__version||$===!0){if(n.activeTexture(t.TEXTURE0+N),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let P=qe.getPrimaries(qe.workingColorSpace),ee=S.colorSpace===is?null:qe.getPrimaries(S.colorSpace),te=S.colorSpace===is||P===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let K=m(S.image,!1,i.maxTextureSize);K=fe(S,K);let he=s.convert(S.format,S.colorSpace),ve=s.convert(S.type),ue=M(S.internalFormat,he,ve,S.normalized,S.colorSpace,S.isVideoTexture);Be(Z,S);let oe,Oe=S.mipmaps,ke=S.isVideoTexture!==!0,st=ae.__version===void 0||$===!0,R=se.dataReady,re=T(S,K);if(S.isDepthTexture)ue=C(S.format===ar,S.type),st&&(ke?n.texStorage2D(t.TEXTURE_2D,1,ue,K.width,K.height):n.texImage2D(t.TEXTURE_2D,0,ue,K.width,K.height,0,he,ve,null));else if(S.isDataTexture)if(Oe.length>0){ke&&st&&n.texStorage2D(t.TEXTURE_2D,re,ue,Oe[0].width,Oe[0].height);for(let P=0,ee=Oe.length;P<ee;P++)oe=Oe[P],ke?R&&n.texSubImage2D(t.TEXTURE_2D,P,0,0,oe.width,oe.height,he,ve,oe.data):n.texImage2D(t.TEXTURE_2D,P,ue,oe.width,oe.height,0,he,ve,oe.data);S.generateMipmaps=!1}else ke?(st&&n.texStorage2D(t.TEXTURE_2D,re,ue,K.width,K.height),R&&le(S,K,he,ve)):n.texImage2D(t.TEXTURE_2D,0,ue,K.width,K.height,0,he,ve,K.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ke&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,ue,Oe[0].width,Oe[0].height,K.depth);for(let P=0,ee=Oe.length;P<ee;P++)if(oe=Oe[P],S.format!==_a)if(he!==null)if(ke){if(R)if(S.layerUpdates.size>0){let te=dx(oe.width,oe.height,S.format,S.type);for(let W of S.layerUpdates){let pe=oe.data.subarray(W*te/oe.data.BYTES_PER_ELEMENT,(W+1)*te/oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,P,0,0,W,oe.width,oe.height,1,he,pe)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,P,0,0,0,oe.width,oe.height,K.depth,he,oe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,P,ue,oe.width,oe.height,K.depth,0,oe.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?R&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,P,0,0,0,oe.width,oe.height,K.depth,he,ve,oe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,P,ue,oe.width,oe.height,K.depth,0,he,ve,oe.data)}else{ke&&st&&n.texStorage2D(t.TEXTURE_2D,re,ue,Oe[0].width,Oe[0].height);for(let P=0,ee=Oe.length;P<ee;P++)oe=Oe[P],S.format!==_a?he!==null?ke?R&&n.compressedTexSubImage2D(t.TEXTURE_2D,P,0,0,oe.width,oe.height,he,oe.data):n.compressedTexImage2D(t.TEXTURE_2D,P,ue,oe.width,oe.height,0,oe.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?R&&n.texSubImage2D(t.TEXTURE_2D,P,0,0,oe.width,oe.height,he,ve,oe.data):n.texImage2D(t.TEXTURE_2D,P,ue,oe.width,oe.height,0,he,ve,oe.data)}else if(S.isDataArrayTexture)if(ke){if(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,ue,K.width,K.height,K.depth),R)if(S.layerUpdates.size>0){let P=dx(K.width,K.height,S.format,S.type);for(let ee of S.layerUpdates){let te=K.data.subarray(ee*P/K.data.BYTES_PER_ELEMENT,(ee+1)*P/K.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,K.width,K.height,1,he,ve,te)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,he,ve,K.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ue,K.width,K.height,K.depth,0,he,ve,K.data);else if(S.isData3DTexture)ke?(st&&n.texStorage3D(t.TEXTURE_3D,re,ue,K.width,K.height,K.depth),R&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,he,ve,K.data)):n.texImage3D(t.TEXTURE_3D,0,ue,K.width,K.height,K.depth,0,he,ve,K.data);else if(S.isFramebufferTexture){if(st)if(ke)n.texStorage2D(t.TEXTURE_2D,re,ue,K.width,K.height);else{let P=K.width,ee=K.height;for(let te=0;te<re;te++)n.texImage2D(t.TEXTURE_2D,te,ue,P,ee,0,he,ve,null),P>>=1,ee>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){let P=t.canvas;if(P.hasAttribute("layoutsubtree")||P.setAttribute("layoutsubtree","true"),K.parentNode!==P){P.appendChild(K),d.add(S),P.onpaint=xe=>{let at=xe.changedElements;for(let Ve of d)at.includes(Ve.image)&&(Ve.needsUpdate=!0)},P.requestPaint();return}let ee=0,te=t.RGBA,W=t.RGBA,pe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,ee,te,W,pe,K),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(ke&&st){let P=Pt(Oe[0]);n.texStorage2D(t.TEXTURE_2D,re,ue,P.width,P.height)}for(let P=0,ee=Oe.length;P<ee;P++)oe=Oe[P],ke?R&&n.texSubImage2D(t.TEXTURE_2D,P,0,0,he,ve,oe):n.texImage2D(t.TEXTURE_2D,P,ue,he,ve,oe);S.generateMipmaps=!1}else if(ke){if(st){let P=Pt(K);n.texStorage2D(t.TEXTURE_2D,re,ue,P.width,P.height)}R&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,ve,K)}else n.texImage2D(t.TEXTURE_2D,0,ue,he,ve,K);p(S)&&x(Z),ae.__version=se.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Pe(A,S,N){if(S.image.length!==6)return;let Z=J(A,S),$=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+N);let se=a.get($);if($.version!==se.__version||Z===!0){n.activeTexture(t.TEXTURE0+N);let ae=qe.getPrimaries(qe.workingColorSpace),X=S.colorSpace===is?null:qe.getPrimaries(S.colorSpace),K=S.colorSpace===is||ae===X?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let he=S.isCompressedTexture||S.image[0].isCompressedTexture,ve=S.image[0]&&S.image[0].isDataTexture,ue=[];for(let W=0;W<6;W++)!he&&!ve?ue[W]=m(S.image[W],!0,i.maxCubemapSize):ue[W]=ve?S.image[W].image:S.image[W],ue[W]=fe(S,ue[W]);let oe=ue[0],Oe=s.convert(S.format,S.colorSpace),ke=s.convert(S.type),st=M(S.internalFormat,Oe,ke,S.normalized,S.colorSpace),R=S.isVideoTexture!==!0,re=se.__version===void 0||Z===!0,P=$.dataReady,ee=T(S,oe);Be(t.TEXTURE_CUBE_MAP,S);let te;if(he){R&&re&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ee,st,oe.width,oe.height);for(let W=0;W<6;W++){te=ue[W].mipmaps;for(let pe=0;pe<te.length;pe++){let xe=te[pe];S.format!==_a?Oe!==null?R?P&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,pe,0,0,xe.width,xe.height,Oe,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,pe,st,xe.width,xe.height,0,xe.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,pe,0,0,xe.width,xe.height,Oe,ke,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,pe,st,xe.width,xe.height,0,Oe,ke,xe.data)}}}else{if(te=S.mipmaps,R&&re){te.length>0&&ee++;let W=Pt(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ee,st,W.width,W.height)}for(let W=0;W<6;W++)if(ve){R?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,ue[W].width,ue[W].height,Oe,ke,ue[W].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,st,ue[W].width,ue[W].height,0,Oe,ke,ue[W].data);for(let pe=0;pe<te.length;pe++){let at=te[pe].image[W].image;R?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,pe+1,0,0,at.width,at.height,Oe,ke,at.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,pe+1,st,at.width,at.height,0,Oe,ke,at.data)}}else{R?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Oe,ke,ue[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,st,Oe,ke,ue[W]);for(let pe=0;pe<te.length;pe++){let xe=te[pe];R?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,pe+1,0,0,Oe,ke,xe.image[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,pe+1,st,Oe,ke,xe.image[W])}}}p(S)&&x(t.TEXTURE_CUBE_MAP),se.__version=$.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ie(A,S,N,Z,$,se){let ae=s.convert(N.format,N.colorSpace),X=s.convert(N.type),K=M(N.internalFormat,ae,X,N.normalized,N.colorSpace),he=a.get(S),ve=a.get(N);if(ve.__renderTarget=S,!he.__hasExternalTextures){let ue=Math.max(1,S.width>>se),oe=Math.max(1,S.height>>se);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?n.texImage3D($,se,K,ue,oe,S.depth,0,ae,X,null):n.texImage2D($,se,K,ue,oe,0,ae,X,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ze(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,$,ve.__webglTexture,0,ct(S)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,$,ve.__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function wt(A,S,N){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer){let Z=S.depthTexture,$=Z&&Z.isDepthTexture?Z.type:null,se=C(S.stencilBuffer,$),ae=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ze(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ct(S),se,S.width,S.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,ct(S),se,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,se,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,A)}else{let Z=S.textures;for(let $=0;$<Z.length;$++){let se=Z[$],ae=s.convert(se.format,se.colorSpace),X=s.convert(se.type),K=M(se.internalFormat,ae,X,se.normalized,se.colorSpace);Ze(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ct(S),K,S.width,S.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,ct(S),K,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,K,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ge(A,S,N){let Z=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=a.get(S.depthTexture);if($.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z){if($.__webglInit===void 0&&($.__webglInit=!0,S.depthTexture.addEventListener("dispose",L)),$.__webglTexture===void 0){$.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),Be(t.TEXTURE_CUBE_MAP,S.depthTexture);let he=s.convert(S.depthTexture.format),ve=s.convert(S.depthTexture.type),ue;S.depthTexture.format===mi?ue=t.DEPTH_COMPONENT24:S.depthTexture.format===ar&&(ue=t.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ue,S.width,S.height,0,he,ve,null)}}else Q(S.depthTexture,0);let se=$.__webglTexture,ae=ct(S),X=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,K=S.depthTexture.format===ar?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===mi)Ze(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,X,se,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,K,X,se,0);else if(S.depthTexture.format===ar)Ze(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,X,se,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,K,X,se,0);else throw new Error("Unknown depthTexture format")}function nt(A){let S=a.get(A),N=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let Z=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){let $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",$)};Z.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=Z}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(N)for(let Z=0;Z<6;Z++)Ge(S.__webglFramebuffer[Z],A,Z);else{let Z=A.texture.mipmaps;Z&&Z.length>0?Ge(S.__webglFramebuffer[0],A,0):Ge(S.__webglFramebuffer,A,0)}else if(N){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=t.createRenderbuffer(),wt(S.__webglDepthbuffer[Z],A,!1);else{let $=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,se)}}else{let Z=A.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),wt(S.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,se)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function dt(A,S,N){let Z=a.get(A);S!==void 0&&Ie(Z.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&nt(A)}function We(A){let S=A.texture,N=a.get(A),Z=a.get(S);A.addEventListener("dispose",_);let $=A.textures,se=A.isWebGLCubeRenderTarget===!0,ae=$.length>1;if(ae||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=S.version,r.memory.textures++),se){N.__webglFramebuffer=[];for(let X=0;X<6;X++)if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[X]=[];for(let K=0;K<S.mipmaps.length;K++)N.__webglFramebuffer[X][K]=t.createFramebuffer()}else N.__webglFramebuffer[X]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let X=0;X<S.mipmaps.length;X++)N.__webglFramebuffer[X]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(ae)for(let X=0,K=$.length;X<K;X++){let he=a.get($[X]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),r.memory.textures++)}if(A.samples>0&&Ze(A)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let X=0;X<$.length;X++){let K=$[X];N.__webglColorRenderbuffer[X]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[X]);let he=s.convert(K.format,K.colorSpace),ve=s.convert(K.type),ue=M(K.internalFormat,he,ve,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),oe=ct(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,ue,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+X,t.RENDERBUFFER,N.__webglColorRenderbuffer[X])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),wt(N.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Be(t.TEXTURE_CUBE_MAP,S);for(let X=0;X<6;X++)if(S.mipmaps&&S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)Ie(N.__webglFramebuffer[X][K],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,K);else Ie(N.__webglFramebuffer[X],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);p(S)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){for(let X=0,K=$.length;X<K;X++){let he=$[X],ve=a.get(he),ue=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,ve.__webglTexture),Be(ue,he),Ie(N.__webglFramebuffer,A,he,t.COLOR_ATTACHMENT0+X,ue,0),p(he)&&x(ue)}n.unbindTexture()}else{let X=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(X=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(X,Z.__webglTexture),Be(X,S),S.mipmaps&&S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)Ie(N.__webglFramebuffer[K],A,S,t.COLOR_ATTACHMENT0,X,K);else Ie(N.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,X,0);p(S)&&x(X),n.unbindTexture()}A.depthBuffer&&nt(A)}function kt(A){let S=A.textures;for(let N=0,Z=S.length;N<Z;N++){let $=S[N];if(p($)){let se=v(A),ae=a.get($).__webglTexture;n.bindTexture(se,ae),x(se),n.unbindTexture()}}}let Mt=[],dn=[];function D(A){if(A.samples>0){if(Ze(A)===!1){let S=A.textures,N=A.width,Z=A.height,$=t.COLOR_BUFFER_BIT,se=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=a.get(A),X=S.length>1;if(X)for(let he=0;he<S.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);let K=A.texture.mipmaps;K&&K.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let he=0;he<S.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=t.STENCIL_BUFFER_BIT)),X){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[he]);let ve=a.get(S[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ve,0)}t.blitFramebuffer(0,0,N,Z,0,0,N,Z,$,t.NEAREST),o===!0&&(Mt.length=0,dn.length=0,Mt.push(t.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Mt.push(se),dn.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,dn)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Mt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),X)for(let he=0;he<S.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,ae.__webglColorRenderbuffer[he]);let ve=a.get(S[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&o){let S=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function ct(A){return Math.min(i.maxSamples,A.samples)}function Ze(A){let S=a.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ht(A){let S=r.render.frame;c.get(A)!==S&&(c.set(A,S),A.update())}function fe(A,S){let N=A.colorSpace,Z=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==bn&&N!==is&&(qe.getTransfer(N)===ft?(Z!==_a||$!==ta)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",N)),S}function Pt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=q,this.getTextureUnits=Y,this.setTextureUnits=U,this.setTexture2D=Q,this.setTexture2DArray=ne,this.setTexture3D=ie,this.setTextureCube=Me,this.rebindTextures=dt,this.setupRenderTarget=We,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function m3(t,e){function n(a,i=is){let s,r=qe.getTransfer(i);if(a===ta)return t.UNSIGNED_BYTE;if(a===Mh)return t.UNSIGNED_SHORT_4_4_4_4;if(a===bh)return t.UNSIGNED_SHORT_5_5_5_1;if(a===nx)return t.UNSIGNED_INT_5_9_9_9_REV;if(a===ax)return t.UNSIGNED_INT_10F_11F_11F_REV;if(a===ex)return t.BYTE;if(a===tx)return t.SHORT;if(a===Tl)return t.UNSIGNED_SHORT;if(a===Sh)return t.INT;if(a===Qa)return t.UNSIGNED_INT;if(a===va)return t.FLOAT;if(a===Ti)return t.HALF_FLOAT;if(a===ix)return t.ALPHA;if(a===sx)return t.RGB;if(a===_a)return t.RGBA;if(a===mi)return t.DEPTH_COMPONENT;if(a===ar)return t.DEPTH_STENCIL;if(a===Th)return t.RED;if(a===Ah)return t.RED_INTEGER;if(a===ir)return t.RG;if(a===Ch)return t.RG_INTEGER;if(a===Lh)return t.RGBA_INTEGER;if(a===Tc||a===Ac||a===Cc||a===Lc)if(r===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Tc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Tc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ac)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Cc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Lc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===wh||a===Eh||a===Ih||a===Rh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===wh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Eh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ih)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Rh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Dh||a===Ph||a===Uh||a===Oh||a===Nh||a===wc||a===Bh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Dh||a===Ph)return r===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Uh)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(a===Oh)return s.COMPRESSED_R11_EAC;if(a===Nh)return s.COMPRESSED_SIGNED_R11_EAC;if(a===wc)return s.COMPRESSED_RG11_EAC;if(a===Bh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Fh||a===kh||a===zh||a===Hh||a===Gh||a===Vh||a===qh||a===Wh||a===Xh||a===Yh||a===Zh||a===Kh||a===Jh||a===jh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Fh)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===kh)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===zh)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Hh)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Gh)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Vh)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===qh)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Wh)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Xh)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Yh)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Zh)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Kh)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Jh)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===jh)return r===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Qh||a===$h||a===ep)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Qh)return r===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===$h)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===ep)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===tp||a===np||a===Ec||a===ap)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===tp)return s.COMPRESSED_RED_RGTC1_EXT;if(a===np)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Ec)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===ap)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Al?t.UNSIGNED_INT_24_8:t[a]!==void 0?t[a]:null}return{convert:n}}var g3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Cx=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let a=new fc(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,a=new Hn({vertexShader:g3,fragmentShader:x3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xt(new $s(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lx=class extends gi{constructor(e,n){super();let a=this,i=null,s=1,r=null,l="local-floor",o=1,u=null,c=null,d=null,f=null,h=null,g=null,y=typeof XRWebGLBinding<"u",m=new Cx,p={},x=n.getContextAttributes(),v=null,M=null,C=[],T=[],L=new He,_=null,w=new an;w.viewport=new St;let E=new an;E.viewport=new St;let I=[w,E],F=new mh,q=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let de=C[J];return de===void 0&&(de=new ml,C[J]=de),de.getTargetRaySpace()},this.getControllerGrip=function(J){let de=C[J];return de===void 0&&(de=new ml,C[J]=de),de.getGripSpace()},this.getHand=function(J){let de=C[J];return de===void 0&&(de=new ml,C[J]=de),de.getHandSpace()};function U(J){let de=T.indexOf(J.inputSource);if(de===-1)return;let le=C[de];le!==void 0&&(le.update(J.inputSource,J.frame,u||r),le.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",G);for(let J=0;J<C.length;J++){let de=T[J];de!==null&&(T[J]=null,C[J].disconnect(de))}q=null,Y=null,m.reset();for(let J in p)delete p[J];e.setRenderTarget(v),h=null,f=null,d=null,i=null,M=null,Be.stop(),a.isPresenting=!1,e.setPixelRatio(_),e.setSize(L.width,L.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,a.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){l=J,a.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||r},this.setReferenceSpace=function(J){u=J},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(i,n)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",H),i.addEventListener("inputsourceschange",G),x.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(L),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Ee=null,Pe=null;x.depth&&(Pe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=x.stencil?ar:mi,Ee=x.stencil?Al:Qa);let Ie={colorFormat:n.RGBA8,depthFormat:Pe,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ie),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new ga(f.textureWidth,f.textureHeight,{format:_a,type:ta,depthTexture:new $i(f.textureWidth,f.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let le={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,n,le),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new ga(h.framebufferWidth,h.framebufferHeight,{format:_a,type:ta,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(o),u=null,r=await i.requestReferenceSpace(l),Be.setContext(i),Be.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(J){for(let de=0;de<J.removed.length;de++){let le=J.removed[de],Ee=T.indexOf(le);Ee>=0&&(T[Ee]=null,C[Ee].disconnect(le))}for(let de=0;de<J.added.length;de++){let le=J.added[de],Ee=T.indexOf(le);if(Ee===-1){for(let Ie=0;Ie<C.length;Ie++)if(Ie>=T.length){T.push(le),Ee=Ie;break}else if(T[Ie]===null){T[Ie]=le,Ee=Ie;break}if(Ee===-1)break}let Pe=C[Ee];Pe&&Pe.connect(le)}}let Q=new B,ne=new B;function ie(J,de,le){Q.setFromMatrixPosition(de.matrixWorld),ne.setFromMatrixPosition(le.matrixWorld);let Ee=Q.distanceTo(ne),Pe=de.projectionMatrix.elements,Ie=le.projectionMatrix.elements,wt=Pe[14]/(Pe[10]-1),Ge=Pe[14]/(Pe[10]+1),nt=(Pe[9]+1)/Pe[5],dt=(Pe[9]-1)/Pe[5],We=(Pe[8]-1)/Pe[0],kt=(Ie[8]+1)/Ie[0],Mt=wt*We,dn=wt*kt,D=Ee/(-We+kt),ct=D*-We;if(de.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ct),J.translateZ(D),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Pe[10]===-1)J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{let Ze=wt+D,ht=Ge+D,fe=Mt-ct,Pt=dn+(Ee-ct),A=nt*Ge/ht*Ze,S=dt*Ge/ht*Ze;J.projectionMatrix.makePerspective(fe,Pt,A,S,Ze,ht),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Me(J,de){de===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(de.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let de=J.near,le=J.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(le=m.depthFar)),F.near=E.near=w.near=de,F.far=E.far=w.far=le,(q!==F.near||Y!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),q=F.near,Y=F.far),F.layers.mask=J.layers.mask|6,w.layers.mask=F.layers.mask&-5,E.layers.mask=F.layers.mask&-3;let Ee=J.parent,Pe=F.cameras;Me(F,Ee);for(let Ie=0;Ie<Pe.length;Ie++)Me(Pe[Ie],Ee);Pe.length===2?ie(F,w,E):F.projectionMatrix.copy(w.projectionMatrix),be(J,F,Ee)};function be(J,de,le){le===null?J.matrix.copy(de.matrixWorld):(J.matrix.copy(le.matrixWorld),J.matrix.invert(),J.matrix.multiply(de.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Br*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&h===null))return o},this.setFoveation=function(J){o=J,f!==null&&(f.fixedFoveation=J),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(J){return p[J]};let tt=null;function ot(J,de){if(c=de.getViewerPose(u||r),g=de,c!==null){let le=c.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let Ee=!1;le.length!==F.cameras.length&&(F.cameras.length=0,Ee=!0);for(let Ge=0;Ge<le.length;Ge++){let nt=le[Ge],dt=null;if(h!==null)dt=h.getViewport(nt);else{let kt=d.getViewSubImage(f,nt);dt=kt.viewport,Ge===0&&(e.setRenderTargetTextures(M,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(M))}let We=I[Ge];We===void 0&&(We=new an,We.layers.enable(Ge),We.viewport=new St,I[Ge]=We),We.matrix.fromArray(nt.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(nt.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(dt.x,dt.y,dt.width,dt.height),Ge===0&&(F.matrix.copy(We.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ee===!0&&F.cameras.push(We)}let Pe=i.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){d=a.getBinding();let Ge=d.getDepthInformation(le[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,i.renderState)}if(Pe&&Pe.includes("camera-access")&&y){e.state.unbindTexture(),d=a.getBinding();for(let Ge=0;Ge<le.length;Ge++){let nt=le[Ge].camera;if(nt){let dt=p[nt];dt||(dt=new fc,p[nt]=dt);let We=d.getCameraImage(nt);dt.sourceTexture=We}}}}for(let le=0;le<C.length;le++){let Ee=T[le],Pe=C[le];Ee!==null&&Pe!==void 0&&Pe.update(Ee,de,u||r)}tt&&tt(J,de),de.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:de}),g=null}let Be=new Z1;Be.setAnimationLoop(ot),this.setAnimationLoop=function(J){tt=J},this.dispose=function(){}}},y3=new Ne,eT=new Fe;eT.set(-1,0,0,0,1,0,0,0,1);function v3(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function a(m,p){p.color.getRGB(m.fogColor.value,ux(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,v,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?o(m,p,x,v):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===An&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===An&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p),v=x.envMap,M=x.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(y3.makeRotationFromEuler(M)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(eT),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:i}}function _3(t,e,n,a){let i={},s={},r=[],l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function o(x,v){let M=v.program;a.uniformBlockBinding(x,M)}function u(x,v){let M=i[x.id];M===void 0&&(g(x),M=c(x),i[x.id]=M,x.addEventListener("dispose",m));let C=v.program;a.updateUBOMapping(x,C);let T=e.render.frame;s[x.id]!==T&&(f(x),s[x.id]=T)}function c(x){let v=d();x.__bindingPointIndex=v;let M=t.createBuffer(),C=x.__size,T=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function d(){for(let x=0;x<l;x++)if(r.indexOf(x)===-1)return r.push(x),x;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let v=i[x.id],M=x.uniforms,C=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,L=M.length;T<L;T++){let _=Array.isArray(M[T])?M[T]:[M[T]];for(let w=0,E=_.length;w<E;w++){let I=_[w];if(h(I,T,w,C)===!0){let F=I.__offset,q=Array.isArray(I.value)?I.value:[I.value],Y=0;for(let U=0;U<q.length;U++){let H=q[U],G=y(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,F+Y,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):ArrayBuffer.isView(H)?I.__data.set(new H.constructor(H.buffer,H.byteOffset,I.__data.length)):(H.toArray(I.__data,Y),Y+=G.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(x,v,M,C){let T=x.value,L=v+"_"+M;if(C[L]===void 0)return typeof T=="number"||typeof T=="boolean"?C[L]=T:ArrayBuffer.isView(T)?C[L]=T.slice():C[L]=T.clone(),!0;{let _=C[L];if(typeof T=="number"||typeof T=="boolean"){if(_!==T)return C[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(_.equals(T)===!1)return _.copy(T),!0}}return!1}function g(x){let v=x.uniforms,M=0,C=16;for(let L=0,_=v.length;L<_;L++){let w=Array.isArray(v[L])?v[L]:[v[L]];for(let E=0,I=w.length;E<I;E++){let F=w[E],q=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,U=q.length;Y<U;Y++){let H=q[Y],G=y(H),Q=M%C,ne=Q%G.boundary,ie=Q+ne;M+=ne,ie!==0&&C-ie<G.storage&&(M+=C-ie),F.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=G.storage}}}let T=M%C;return T>0&&(M+=C-T),x.__size=M,x.__cache={},this}function y(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(v.boundary=16,v.storage=x.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){let v=x.target;v.removeEventListener("dispose",m);let M=r.indexOf(v.__bindingPointIndex);r.splice(M,1),t.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(let x in i)t.deleteBuffer(i[x]);r=[],i={},s={}}return{bind:o,update:u,dispose:p}}var S3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ai=null;function M3(){return Ai===null&&(Ai=new xl(S3,16,16,ir,Ti),Ai.name="DFG_LUT",Ai.minFilter=Qt,Ai.magFilter=Qt,Ai.wrapS=Ua,Ai.wrapT=Ua,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}var up=class{constructor(e={}){let{canvas:n=y1(),context:a=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=ta}=e;this.isWebGLRenderer=!0;let g;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=a.getContextAttributes().alpha}else g=r;let y=h,m=new Set([Lh,Ch,Ah]),p=new Set([ta,Qa,Tl,Al,Mh,bh]),x=new Uint32Array(4),v=new Int32Array(4),M=new B,C=null,T=null,L=[],_=[],w=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,I=!1,F=null;this._outputColorSpace=Lt;let q=0,Y=0,U=null,H=-1,G=null,Q=new St,ne=new St,ie=null,Me=new Re(0),be=0,tt=n.width,ot=n.height,Be=1,J=null,de=null,le=new St(0,0,tt,ot),Ee=new St(0,0,tt,ot),Pe=!1,Ie=new yl,wt=!1,Ge=!1,nt=new Ne,dt=new B,We=new St,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mt=!1;function dn(){return U===null?Be:1}let D=a;function ct(b,O){return n.getContext(b,O)}try{let b={alpha:!0,depth:i,stencil:s,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gh}`),n.addEventListener("webglcontextlost",W,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",xe,!1),D===null){let O="webgl2";if(D=ct(O,b),D===null)throw ct(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw De("WebGLRenderer: "+b.message),b}let Ze,ht,fe,Pt,A,S,N,Z,$,se,ae,X,K,he,ve,ue,oe,Oe,ke,st,R,re,P;function ee(){Ze=new ER(D),Ze.init(),R=new m3(D,Ze),ht=new SR(D,Ze,e,R),fe=new h3(D,Ze),ht.reversedDepthBuffer&&f&&fe.buffers.depth.setReversed(!0),Pt=new DR(D),A=new $2,S=new p3(D,Ze,fe,A,ht,R,Pt),N=new wR(E),Z=new Nw(D),re=new vR(D,Z),$=new IR(D,Z,Pt,re),se=new UR(D,$,Z,re,Pt),Oe=new PR(D,ht,S),ve=new MR(A),ae=new Q2(E,N,Ze,ht,re,ve),X=new v3(E,A),K=new t3,he=new o3(Ze),oe=new yR(E,N,fe,se,g,o),ue=new d3(E,se,ht),P=new _3(D,Pt,ht,fe),ke=new _R(D,Ze,Pt),st=new RR(D,Ze,Pt),Pt.programs=ae.programs,E.capabilities=ht,E.extensions=Ze,E.properties=A,E.renderLists=K,E.shadowMap=ue,E.state=fe,E.info=Pt}ee(),y!==ta&&(w=new NR(y,n.width,n.height,i,s));let te=new Lx(E,D);this.xr=te,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=Ze.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ze.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(b){b!==void 0&&(Be=b,this.setSize(tt,ot,!1))},this.getSize=function(b){return b.set(tt,ot)},this.setSize=function(b,O,V=!0){if(te.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=b,ot=O,n.width=Math.floor(b*Be),n.height=Math.floor(O*Be),V===!0&&(n.style.width=b+"px",n.style.height=O+"px"),w!==null&&w.setSize(n.width,n.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(tt*Be,ot*Be).floor()},this.setDrawingBufferSize=function(b,O,V){tt=b,ot=O,Be=V,n.width=Math.floor(b*V),n.height=Math.floor(O*V),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(y===ta){De("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){Ae("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Q)},this.getViewport=function(b){return b.copy(le)},this.setViewport=function(b,O,V,k){b.isVector4?le.set(b.x,b.y,b.z,b.w):le.set(b,O,V,k),fe.viewport(Q.copy(le).multiplyScalar(Be).round())},this.getScissor=function(b){return b.copy(Ee)},this.setScissor=function(b,O,V,k){b.isVector4?Ee.set(b.x,b.y,b.z,b.w):Ee.set(b,O,V,k),fe.scissor(ne.copy(Ee).multiplyScalar(Be).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(b){fe.setScissorTest(Pe=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){de=b},this.getClearColor=function(b){return b.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,V=!0){let k=0;if(b){let z=!1;if(U!==null){let ye=U.texture.format;z=m.has(ye)}if(z){let ye=U.texture.type,Se=p.has(ye),ge=oe.getClearColor(),Te=oe.getClearAlpha(),Ce=ge.r,ze=ge.g,Ke=ge.b;Se?(x[0]=Ce,x[1]=ze,x[2]=Ke,x[3]=Te,D.clearBufferuiv(D.COLOR,0,x)):(v[0]=Ce,v[1]=ze,v[2]=Ke,v[3]=Te,D.clearBufferiv(D.COLOR,0,v))}else k|=D.COLOR_BUFFER_BIT}O&&(k|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){n.removeEventListener("webglcontextlost",W,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),oe.dispose(),K.dispose(),he.dispose(),A.dispose(),N.dispose(),se.dispose(),re.dispose(),P.dispose(),ae.dispose(),te.dispose(),te.removeEventListener("sessionstart",qn),te.removeEventListener("sessionend",na),Wn.stop()};function W(b){b.preventDefault(),ec("WebGLRenderer: Context Lost."),I=!0}function pe(){ec("WebGLRenderer: Context Restored."),I=!1;let b=Pt.autoReset,O=ue.enabled,V=ue.autoUpdate,k=ue.needsUpdate,z=ue.type;ee(),Pt.autoReset=b,ue.enabled=O,ue.autoUpdate=V,ue.needsUpdate=k,ue.type=z}function xe(b){De("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function at(b){let O=b.target;O.removeEventListener("dispose",at),Ve(O)}function Ve(b){vn(b),A.remove(b)}function vn(b){let O=A.get(b).programs;O!==void 0&&(O.forEach(function(V){ae.releaseProgram(V)}),b.isShaderMaterial&&ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,V,k,z,ye){O===null&&(O=kt);let Se=z.isMesh&&z.matrixWorld.determinant()<0,ge=TT(b,O,V,k,z);fe.setMaterial(k,Se);let Te=V.index,Ce=1;if(k.wireframe===!0){if(Te=$.getWireframeAttribute(V),Te===void 0)return;Ce=2}let ze=V.drawRange,Ke=V.attributes.position,Le=ze.start*Ce,yt=(ze.start+ze.count)*Ce;ye!==null&&(Le=Math.max(Le,ye.start*Ce),yt=Math.min(yt,(ye.start+ye.count)*Ce)),Te!==null?(Le=Math.max(Le,0),yt=Math.min(yt,Te.count)):Ke!=null&&(Le=Math.max(Le,0),yt=Math.min(yt,Ke.count));let Yt=yt-Le;if(Yt<0||Yt===1/0)return;re.setup(z,k,ge,V,Te);let Gt,bt=ke;if(Te!==null&&(Gt=Z.get(Te),bt=st,bt.setIndex(Gt)),z.isMesh)k.wireframe===!0?(fe.setLineWidth(k.wireframeLinewidth*dn()),bt.setMode(D.LINES)):bt.setMode(D.TRIANGLES);else if(z.isLine){let Ln=k.linewidth;Ln===void 0&&(Ln=1),fe.setLineWidth(Ln*dn()),z.isLineSegments?bt.setMode(D.LINES):z.isLineLoop?bt.setMode(D.LINE_LOOP):bt.setMode(D.LINE_STRIP)}else z.isPoints?bt.setMode(D.POINTS):z.isSprite&&bt.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))bt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ln=z._multiDrawStarts,_e=z._multiDrawCounts,aa=z._multiDrawCount,rt=Te?Z.get(Te).bytesPerElement:1,Ma=A.get(k).currentProgram.getUniforms();for(let ei=0;ei<aa;ei++)Ma.setValue(D,"_gl_DrawID",ei),bt.render(Ln[ei]/rt,_e[ei])}else if(z.isInstancedMesh)bt.renderInstances(Le,Yt,z.count);else if(V.isInstancedBufferGeometry){let Ln=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,_e=Math.min(V.instanceCount,Ln);bt.renderInstances(Le,Yt,_e)}else bt.render(Le,Yt)};function Cn(b,O,V){b.transparent===!0&&b.side===Na&&b.forceSinglePass===!1?(b.side=An,b.needsUpdate=!0,Bc(b,O,V),b.side=Ka,b.needsUpdate=!0,Bc(b,O,V),b.side=Na):Bc(b,O,V)}this.compile=function(b,O,V=null){V===null&&(V=b),T=he.get(V),T.init(O),_.push(T),V.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),b!==V&&b.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights();let k=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ye=z.material;if(ye)if(Array.isArray(ye))for(let Se=0;Se<ye.length;Se++){let ge=ye[Se];Cn(ge,V,z),k.add(ge)}else Cn(ye,V,z),k.add(ye)}),T=_.pop(),k},this.compileAsync=function(b,O,V=null){let k=this.compile(b,O,V);return new Promise(z=>{function ye(){if(k.forEach(function(Se){A.get(Se).currentProgram.isReady()&&k.delete(Se)}),k.size===0){z(b);return}setTimeout(ye,10)}Ze.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let hn=null;function Vn(b){hn&&hn(b)}function qn(){Wn.stop()}function na(){Wn.start()}let Wn=new Z1;Wn.setAnimationLoop(Vn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(b){hn=b,te.setAnimationLoop(b),b===null?Wn.stop():Wn.start()},te.addEventListener("sessionstart",qn),te.addEventListener("sessionend",na),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(b,O);let V=te.enabled===!0&&te.isPresenting===!0,k=w!==null&&(U===null||V)&&w.begin(E,U);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(te.cameraAutoUpdate===!0&&te.updateCamera(O),O=te.getCamera()),b.isScene===!0&&b.onBeforeRender(E,b,O,U),T=he.get(b,_.length),T.init(O),T.state.textureUnits=S.getTextureUnits(),_.push(T),nt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ie.setFromProjectionMatrix(nt,Ya,O.reversedDepth),Ge=this.localClippingEnabled,wt=ve.init(this.clippingPlanes,Ge),C=K.get(b,L.length),C.init(),L.push(C),te.enabled===!0&&te.isPresenting===!0){let Se=E.xr.getDepthSensingMesh();Se!==null&&Sa(Se,O,-1/0,E.sortObjects)}Sa(b,O,0,E.sortObjects),C.finish(),E.sortObjects===!0&&C.sort(J,de),Mt=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Mt&&oe.addToRenderList(C,b),this.info.render.frame++,wt===!0&&ve.beginShadows();let z=T.state.shadowsArray;if(ue.render(z,b,O),wt===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&w.hasRenderPass())===!1){let Se=C.opaque,ge=C.transmissive;if(T.setupLights(),O.isArrayCamera){let Te=O.cameras;if(ge.length>0)for(let Ce=0,ze=Te.length;Ce<ze;Ce++){let Ke=Te[Ce];ka(Se,ge,b,Ke)}Mt&&oe.render(b);for(let Ce=0,ze=Te.length;Ce<ze;Ce++){let Ke=Te[Ce];Fa(C,b,Ke,Ke.viewport)}}else ge.length>0&&ka(Se,ge,b,O),Mt&&oe.render(b),Fa(C,b,O)}U!==null&&Y===0&&(S.updateMultisampleRenderTarget(U),S.updateRenderTargetMipmap(U)),k&&w.end(E),b.isScene===!0&&b.onAfterRender(E,b,O),re.resetDefaultState(),H=-1,G=null,_.pop(),_.length>0?(T=_[_.length-1],S.setTextureUnits(T.state.textureUnits),wt===!0&&ve.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,L.pop(),L.length>0?C=L[L.length-1]:C=null,F!==null&&F.renderEnd()};function Sa(b,O,V,k){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ie.intersectsSprite(b)){k&&We.setFromMatrixPosition(b.matrixWorld).applyMatrix4(nt);let Se=se.update(b),ge=b.material;ge.visible&&C.push(b,Se,ge,V,We.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ie.intersectsObject(b))){let Se=se.update(b),ge=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),We.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),We.copy(Se.boundingSphere.center)),We.applyMatrix4(b.matrixWorld).applyMatrix4(nt)),Array.isArray(ge)){let Te=Se.groups;for(let Ce=0,ze=Te.length;Ce<ze;Ce++){let Ke=Te[Ce],Le=ge[Ke.materialIndex];Le&&Le.visible&&C.push(b,Se,Le,V,We.z,Ke)}}else ge.visible&&C.push(b,Se,ge,V,We.z,null)}}let ye=b.children;for(let Se=0,ge=ye.length;Se<ge;Se++)Sa(ye[Se],O,V,k)}function Fa(b,O,V,k){let{opaque:z,transmissive:ye,transparent:Se}=b;T.setupLightsView(V),wt===!0&&ve.setGlobalState(E.clippingPlanes,V),k&&fe.viewport(Q.copy(k)),z.length>0&&os(z,O,V),ye.length>0&&os(ye,O,V),Se.length>0&&os(Se,O,V),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function ka(b,O,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){let Le=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new ga(1,1,{generateMipmaps:!0,type:Le?Ti:ta,minFilter:ya,samples:Math.max(4,ht.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}let ye=T.state.transmissionRenderTarget[k.id],Se=k.viewport||Q;ye.setSize(Se.z*E.transmissionResolutionScale,Se.w*E.transmissionResolutionScale);let ge=E.getRenderTarget(),Te=E.getActiveCubeFace(),Ce=E.getActiveMipmapLevel();E.setRenderTarget(ye),E.getClearColor(Me),be=E.getClearAlpha(),be<1&&E.setClearColor(16777215,.5),E.clear(),Mt&&oe.render(V);let ze=E.toneMapping;E.toneMapping=ja;let Ke=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),wt===!0&&ve.setGlobalState(E.clippingPlanes,k),os(b,V,k),S.updateMultisampleRenderTarget(ye),S.updateRenderTargetMipmap(ye),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let yt=0,Yt=O.length;yt<Yt;yt++){let Gt=O[yt],{object:bt,geometry:Ln,material:_e,group:aa}=Gt;if(_e.side===Na&&bt.layers.test(k.layers)){let rt=_e.side;_e.side=An,_e.needsUpdate=!0,ls(bt,V,k,Ln,_e,aa),_e.side=rt,_e.needsUpdate=!0,Le=!0}}Le===!0&&(S.updateMultisampleRenderTarget(ye),S.updateRenderTargetMipmap(ye))}E.setRenderTarget(ge,Te,Ce),E.setClearColor(Me,be),Ke!==void 0&&(k.viewport=Ke),E.toneMapping=ze}function os(b,O,V){let k=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ye=b.length;z<ye;z++){let Se=b[z],{object:ge,geometry:Te,group:Ce}=Se,ze=Se.material;ze.allowOverride===!0&&k!==null&&(ze=k),ge.layers.test(V.layers)&&ls(ge,O,V,Te,ze,Ce)}}function ls(b,O,V,k,z,ye){b.onBeforeRender(E,O,V,k,z,ye),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(E,O,V,k,b,ye),z.transparent===!0&&z.side===Na&&z.forceSinglePass===!1?(z.side=An,z.needsUpdate=!0,E.renderBufferDirect(V,O,k,z,b,ye),z.side=Ka,z.needsUpdate=!0,E.renderBufferDirect(V,O,k,z,b,ye),z.side=Na):E.renderBufferDirect(V,O,k,z,b,ye),b.onAfterRender(E,O,V,k,z,ye)}function Bc(b,O,V){O.isScene!==!0&&(O=kt);let k=A.get(b),z=T.state.lights,ye=T.state.shadowsArray,Se=z.state.version,ge=ae.getParameters(b,z.state,ye,O,V,T.state.lightProbeGridArray),Te=ae.getProgramCacheKey(ge),Ce=k.programs;k.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,k.fog=O.fog;let ze=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;k.envMap=N.get(b.envMap||k.environment,ze),k.envMapRotation=k.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Ce===void 0&&(b.addEventListener("dispose",at),Ce=new Map,k.programs=Ce);let Ke=Ce.get(Te);if(Ke!==void 0){if(k.currentProgram===Ke&&k.lightsStateVersion===Se)return dy(b,ge),Ke}else ge.uniforms=ae.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,V,ge),b.onBeforeCompile(ge,E),Ke=ae.acquireProgram(ge,Te),Ce.set(Te,Ke),k.uniforms=ge.uniforms;let Le=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Le.clippingPlanes=ve.uniform),dy(b,ge),k.needsLights=CT(b),k.lightsStateVersion=Se,k.needsLights&&(Le.ambientLightColor.value=z.state.ambient,Le.lightProbe.value=z.state.probe,Le.directionalLights.value=z.state.directional,Le.directionalLightShadows.value=z.state.directionalShadow,Le.spotLights.value=z.state.spot,Le.spotLightShadows.value=z.state.spotShadow,Le.rectAreaLights.value=z.state.rectArea,Le.ltc_1.value=z.state.rectAreaLTC1,Le.ltc_2.value=z.state.rectAreaLTC2,Le.pointLights.value=z.state.point,Le.pointLightShadows.value=z.state.pointShadow,Le.hemisphereLights.value=z.state.hemi,Le.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Le.spotLightMatrix.value=z.state.spotLightMatrix,Le.spotLightMap.value=z.state.spotLightMap,Le.pointShadowMatrix.value=z.state.pointShadowMatrix),k.lightProbeGrid=T.state.lightProbeGridArray.length>0,k.currentProgram=Ke,k.uniformsList=null,Ke}function fy(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=wl.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function dy(b,O){let V=A.get(b);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function bT(b,O){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(O.matrixWorld);for(let V=0,k=b.length;V<k;V++){let z=b[V];if(z.texture!==null&&z.boundingBox.containsPoint(M))return z}return null}function TT(b,O,V,k,z){O.isScene!==!0&&(O=kt),S.resetTextureUnits();let ye=O.fog,Se=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?O.environment:null,ge=U===null?E.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:qe.workingColorSpace,Te=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ce=N.get(k.envMap||Se,Te),ze=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ke=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Le=!!V.morphAttributes.position,yt=!!V.morphAttributes.normal,Yt=!!V.morphAttributes.color,Gt=ja;k.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Gt=E.toneMapping);let bt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ln=bt!==void 0?bt.length:0,_e=A.get(k),aa=T.state.lights;if(wt===!0&&(Ge===!0||b!==G)){let Et=b===G&&k.id===H;ve.setState(k,b,Et)}let rt=!1;k.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==aa.state.version||_e.outputColorSpace!==ge||z.isBatchedMesh&&_e.batching===!1||!z.isBatchedMesh&&_e.batching===!0||z.isBatchedMesh&&_e.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&_e.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&_e.instancing===!1||!z.isInstancedMesh&&_e.instancing===!0||z.isSkinnedMesh&&_e.skinning===!1||!z.isSkinnedMesh&&_e.skinning===!0||z.isInstancedMesh&&_e.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&_e.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&_e.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&_e.instancingMorph===!1&&z.morphTexture!==null||_e.envMap!==Ce||k.fog===!0&&_e.fog!==ye||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==ve.numPlanes||_e.numIntersection!==ve.numIntersection)||_e.vertexAlphas!==ze||_e.vertexTangents!==Ke||_e.morphTargets!==Le||_e.morphNormals!==yt||_e.morphColors!==Yt||_e.toneMapping!==Gt||_e.morphTargetsCount!==Ln||!!_e.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,_e.__version=k.version);let Ma=_e.currentProgram;rt===!0&&(Ma=Bc(k,O,z),F&&k.isNodeMaterial&&F.onUpdateProgram(k,Ma,_e));let ei=!1,us=!1,Jr=!1,Tt=Ma.getUniforms(),Zt=_e.uniforms;if(fe.useProgram(Ma.program)&&(ei=!0,us=!0,Jr=!0),k.id!==H&&(H=k.id,us=!0),_e.needsLights){let Et=bT(T.state.lightProbeGridArray,z);_e.lightProbeGrid!==Et&&(_e.lightProbeGrid=Et,us=!0)}if(ei||G!==b){fe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Tt.setValue(D,"projectionMatrix",b.projectionMatrix),Tt.setValue(D,"viewMatrix",b.matrixWorldInverse);let fs=Tt.map.cameraPosition;fs!==void 0&&fs.setValue(D,dt.setFromMatrixPosition(b.matrixWorld)),ht.logarithmicDepthBuffer&&Tt.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Tt.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),G!==b&&(G=b,us=!0,Jr=!0)}if(_e.needsLights&&(aa.state.directionalShadowMap.length>0&&Tt.setValue(D,"directionalShadowMap",aa.state.directionalShadowMap,S),aa.state.spotShadowMap.length>0&&Tt.setValue(D,"spotShadowMap",aa.state.spotShadowMap,S),aa.state.pointShadowMap.length>0&&Tt.setValue(D,"pointShadowMap",aa.state.pointShadowMap,S)),z.isSkinnedMesh){Tt.setOptional(D,z,"bindMatrix"),Tt.setOptional(D,z,"bindMatrixInverse");let Et=z.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),Tt.setValue(D,"boneTexture",Et.boneTexture,S))}z.isBatchedMesh&&(Tt.setOptional(D,z,"batchingTexture"),Tt.setValue(D,"batchingTexture",z._matricesTexture,S),Tt.setOptional(D,z,"batchingIdTexture"),Tt.setValue(D,"batchingIdTexture",z._indirectTexture,S),Tt.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Tt.setValue(D,"batchingColorTexture",z._colorsTexture,S));let cs=V.morphAttributes;if((cs.position!==void 0||cs.normal!==void 0||cs.color!==void 0)&&Oe.update(z,V,Ma),(us||_e.receiveShadow!==z.receiveShadow)&&(_e.receiveShadow=z.receiveShadow,Tt.setValue(D,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&O.environment!==null&&(Zt.envMapIntensity.value=O.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=M3()),us){if(Tt.setValue(D,"toneMappingExposure",E.toneMappingExposure),_e.needsLights&&AT(Zt,Jr),ye&&k.fog===!0&&X.refreshFogUniforms(Zt,ye),X.refreshMaterialUniforms(Zt,k,Be,ot,T.state.transmissionRenderTarget[b.id]),_e.needsLights&&_e.lightProbeGrid){let Et=_e.lightProbeGrid;Zt.probesSH.value=Et.texture,Zt.probesMin.value.copy(Et.boundingBox.min),Zt.probesMax.value.copy(Et.boundingBox.max),Zt.probesResolution.value.copy(Et.resolution)}wl.upload(D,fy(_e),Zt,S)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(wl.upload(D,fy(_e),Zt,S),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Tt.setValue(D,"center",z.center),Tt.setValue(D,"modelViewMatrix",z.modelViewMatrix),Tt.setValue(D,"normalMatrix",z.normalMatrix),Tt.setValue(D,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){let Et=k.uniformsGroups;for(let fs=0,jr=Et.length;fs<jr;fs++){let hy=Et[fs];P.update(hy,Ma),P.bind(hy,Ma)}}return Ma}function AT(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function CT(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,O,V){let k=A.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),A.get(b.texture).__webglTexture=O,A.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){let V=A.get(b);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0};let LT=D.createFramebuffer();this.setRenderTarget=function(b,O=0,V=0){U=b,q=O,Y=V;let k=null,z=!1,ye=!1;if(b){let ge=A.get(b);if(ge.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(D.FRAMEBUFFER,ge.__webglFramebuffer),Q.copy(b.viewport),ne.copy(b.scissor),ie=b.scissorTest,fe.viewport(Q),fe.scissor(ne),fe.setScissorTest(ie),H=-1;return}else if(ge.__webglFramebuffer===void 0)S.setupRenderTarget(b);else if(ge.__hasExternalTextures)S.rebindTextures(b,A.get(b.texture).__webglTexture,A.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let ze=b.depthTexture;if(ge.__boundDepthTexture!==ze){if(ze!==null&&A.has(ze)&&(b.width!==ze.image.width||b.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(b)}}let Te=b.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ye=!0);let Ce=A.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ce[O])?k=Ce[O][V]:k=Ce[O],z=!0):b.samples>0&&S.useMultisampledRTT(b)===!1?k=A.get(b).__webglMultisampledFramebuffer:Array.isArray(Ce)?k=Ce[V]:k=Ce,Q.copy(b.viewport),ne.copy(b.scissor),ie=b.scissorTest}else Q.copy(le).multiplyScalar(Be).floor(),ne.copy(Ee).multiplyScalar(Be).floor(),ie=Pe;if(V!==0&&(k=LT),fe.bindFramebuffer(D.FRAMEBUFFER,k)&&fe.drawBuffers(b,k),fe.viewport(Q),fe.scissor(ne),fe.setScissorTest(ie),z){let ge=A.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,ge.__webglTexture,V)}else if(ye){let ge=O;for(let Te=0;Te<b.textures.length;Te++){let Ce=A.get(b.textures[Te]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Te,Ce.__webglTexture,V,ge)}}else if(b!==null&&V!==0){let ge=A.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ge.__webglTexture,V)}H=-1},this.readRenderTargetPixels=function(b,O,V,k,z,ye,Se,ge=0){if(!(b&&b.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=A.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){fe.bindFramebuffer(D.FRAMEBUFFER,Te);try{let Ce=b.textures[ge],ze=Ce.format,Ke=Ce.type;if(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),!ht.textureFormatReadable(ze)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Ke)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-k&&V>=0&&V<=b.height-z&&D.readPixels(O,V,k,z,R.convert(ze),R.convert(Ke),ye)}finally{let Ce=U!==null?A.get(U).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(b,O,V,k,z,ye,Se,ge=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=A.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te)if(O>=0&&O<=b.width-k&&V>=0&&V<=b.height-z){fe.bindFramebuffer(D.FRAMEBUFFER,Te);let Ce=b.textures[ge],ze=Ce.format,Ke=Ce.type;if(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),!ht.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Le=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Le),D.bufferData(D.PIXEL_PACK_BUFFER,ye.byteLength,D.STREAM_READ),D.readPixels(O,V,k,z,R.convert(ze),R.convert(Ke),0);let yt=U!==null?A.get(U).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,yt);let Yt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await _1(D,Yt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Le),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ye),D.deleteBuffer(Le),D.deleteSync(Yt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,V=0){let k=Math.pow(2,-V),z=Math.floor(b.image.width*k),ye=Math.floor(b.image.height*k),Se=O!==null?O.x:0,ge=O!==null?O.y:0;S.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,Se,ge,z,ye),fe.unbindTexture()};let wT=D.createFramebuffer(),ET=D.createFramebuffer();this.copyTextureToTexture=function(b,O,V=null,k=null,z=0,ye=0){let Se,ge,Te,Ce,ze,Ke,Le,yt,Yt,Gt=b.isCompressedTexture?b.mipmaps[ye]:b.image;if(V!==null)Se=V.max.x-V.min.x,ge=V.max.y-V.min.y,Te=V.isBox3?V.max.z-V.min.z:1,Ce=V.min.x,ze=V.min.y,Ke=V.isBox3?V.min.z:0;else{let Zt=Math.pow(2,-z);Se=Math.floor(Gt.width*Zt),ge=Math.floor(Gt.height*Zt),b.isDataArrayTexture?Te=Gt.depth:b.isData3DTexture?Te=Math.floor(Gt.depth*Zt):Te=1,Ce=0,ze=0,Ke=0}k!==null?(Le=k.x,yt=k.y,Yt=k.z):(Le=0,yt=0,Yt=0);let bt=R.convert(O.format),Ln=R.convert(O.type),_e;O.isData3DTexture?(S.setTexture3D(O,0),_e=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(S.setTexture2DArray(O,0),_e=D.TEXTURE_2D_ARRAY):(S.setTexture2D(O,0),_e=D.TEXTURE_2D),fe.activeTexture(D.TEXTURE0),fe.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),fe.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),fe.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);let aa=fe.getParameter(D.UNPACK_ROW_LENGTH),rt=fe.getParameter(D.UNPACK_IMAGE_HEIGHT),Ma=fe.getParameter(D.UNPACK_SKIP_PIXELS),ei=fe.getParameter(D.UNPACK_SKIP_ROWS),us=fe.getParameter(D.UNPACK_SKIP_IMAGES);fe.pixelStorei(D.UNPACK_ROW_LENGTH,Gt.width),fe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Gt.height),fe.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),fe.pixelStorei(D.UNPACK_SKIP_ROWS,ze),fe.pixelStorei(D.UNPACK_SKIP_IMAGES,Ke);let Jr=b.isDataArrayTexture||b.isData3DTexture,Tt=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){let Zt=A.get(b),cs=A.get(O),Et=A.get(Zt.__renderTarget),fs=A.get(cs.__renderTarget);fe.bindFramebuffer(D.READ_FRAMEBUFFER,Et.__webglFramebuffer),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,fs.__webglFramebuffer);for(let jr=0;jr<Te;jr++)Jr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,A.get(b).__webglTexture,z,Ke+jr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,A.get(O).__webglTexture,ye,Yt+jr)),D.blitFramebuffer(Ce,ze,Se,ge,Le,yt,Se,ge,D.DEPTH_BUFFER_BIT,D.NEAREST);fe.bindFramebuffer(D.READ_FRAMEBUFFER,null),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||b.isRenderTargetTexture||A.has(b)){let Zt=A.get(b),cs=A.get(O);fe.bindFramebuffer(D.READ_FRAMEBUFFER,wT),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,ET);for(let Et=0;Et<Te;Et++)Jr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Zt.__webglTexture,z,Ke+Et):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Zt.__webglTexture,z),Tt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,cs.__webglTexture,ye,Yt+Et):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,cs.__webglTexture,ye),z!==0?D.blitFramebuffer(Ce,ze,Se,ge,Le,yt,Se,ge,D.COLOR_BUFFER_BIT,D.NEAREST):Tt?D.copyTexSubImage3D(_e,ye,Le,yt,Yt+Et,Ce,ze,Se,ge):D.copyTexSubImage2D(_e,ye,Le,yt,Ce,ze,Se,ge);fe.bindFramebuffer(D.READ_FRAMEBUFFER,null),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Tt?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(_e,ye,Le,yt,Yt,Se,ge,Te,bt,Ln,Gt.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(_e,ye,Le,yt,Yt,Se,ge,Te,bt,Gt.data):D.texSubImage3D(_e,ye,Le,yt,Yt,Se,ge,Te,bt,Ln,Gt):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ye,Le,yt,Se,ge,bt,Ln,Gt.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ye,Le,yt,Gt.width,Gt.height,bt,Gt.data):D.texSubImage2D(D.TEXTURE_2D,ye,Le,yt,Se,ge,bt,Ln,Gt);fe.pixelStorei(D.UNPACK_ROW_LENGTH,aa),fe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt),fe.pixelStorei(D.UNPACK_SKIP_PIXELS,Ma),fe.pixelStorei(D.UNPACK_SKIP_ROWS,ei),fe.pixelStorei(D.UNPACK_SKIP_IMAGES,us),ye===0&&O.generateMipmaps&&D.generateMipmap(_e),fe.unbindTexture()},this.initRenderTarget=function(b){A.get(b).__webglFramebuffer===void 0&&S.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),fe.unbindTexture()},this.resetState=function(){q=0,Y=0,U=null,fe.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ya}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=qe._getUnpackColorSpace()}};var nT={apps:{photos:"Fotos",camera:"C\xE2mara",maps:"Mapas",weather:"Tempo",calendar:"Calend\xE1rio",clock:"Rel\xF3gio",notes:"Notas",books:"Livros",podcasts:"Podcasts",health:"Sa\xFAde",files:"Ficheiros",settings:"Defini\xE7\xF5es",sonora:"Sonora",aster:"Aster",messages:"Mensagens",mail:"Correio",music:"M\xFAsica",vulk:"VULK"},search:"Pesquisar",track:"Studio One",artist:"Sonora"},Gn=Math.PI*2,Ex="#f0392c",b3=["photos","camera","maps","weather","calendar","clock","notes","books","podcasts","health","files","settings","sonora","aster"],T3=["messages","mail","music","vulk"],Ix=204,Un=(t,e)=>`${t} ${e}px FoldSans, Arial, sans-serif`;function Dt(t,e){t.fillStyle=e,t.fill()}function Xt(t,e,n,a,i){let s=t.createLinearGradient(0,e,0,n);return s.addColorStop(0,a),s.addColorStop(1,i),s}function fn(t,e,n,a){t.beginPath(),t.arc(e,n,a,0,Gn)}function Rx(t,e,n,a,i,s){let r=Math.max(i/e.naturalWidth,s/e.naturalHeight),l=e.naturalWidth*r,o=e.naturalHeight*r;t.drawImage(e,n+(i-l)/2,a+(s-o)/2,l,o)}function aT(t,e,n){let a=document.createElement("canvas");a.width=Math.max(1,e/28|0),a.height=Math.max(1,n/28|0);let i=a.getContext("2d");return i.imageSmoothingQuality="high",Rx(i,t,0,0,a.width,a.height),a}function tT(t,e,n,a,i,s,r,l){t.save(),t.translate(n,a),t.beginPath(),t.roundRect(0,0,i,i,i*.225),t.save(),t.clip();let o=c=>c*i;switch(e){case"vulk":r.vulk?.naturalWidth?t.drawImage(r.vulk,o(-.02),o(-.02),o(1.04),o(1.04)):(t.fillStyle="#1b2421",t.fillRect(0,0,i,i));break;case"photos":{t.fillStyle=Xt(t,0,i,"#fdfdfd","#e9e9ee"),t.fillRect(0,0,i,i),fn(t,o(.68),o(.33),o(.11)),Dt(t,Xt(t,o(.22),o(.44),"#ffcc4d","#ff9500")),t.beginPath(),t.moveTo(o(.1),o(.8)),t.lineTo(o(.38),o(.42)),t.lineTo(o(.6),o(.72)),t.lineTo(o(.7),o(.6)),t.lineTo(o(.92),o(.8)),t.closePath(),Dt(t,Xt(t,o(.42),o(.8),"#4cd964","#1f9d55"));break}case"camera":{t.fillStyle=Xt(t,0,i,"#d8d8dc","#9a9aa0"),t.fillRect(0,0,i,i),t.beginPath(),t.roundRect(o(.14),o(.3),o(.72),o(.48),o(.09)),Dt(t,"#2c2c2e"),t.beginPath(),t.roundRect(o(.34),o(.22),o(.32),o(.12),o(.04)),Dt(t,"#2c2c2e"),fn(t,o(.5),o(.54),o(.17)),Dt(t,"#8e8e93"),fn(t,o(.5),o(.54),o(.12)),Dt(t,Xt(t,o(.42),o(.66),"#3a3a52","#101018")),fn(t,o(.46),o(.5),o(.035)),Dt(t,"rgba(255,255,255,.7)");break}case"maps":{t.fillStyle="#efe9dc",t.fillRect(0,0,i,i),t.beginPath(),t.moveTo(0,o(.62)),t.bezierCurveTo(o(.3),o(.5),o(.45),o(.95),i,o(.78)),t.lineTo(i,i),t.lineTo(0,i),t.closePath(),Dt(t,"#bfe3a8"),t.lineCap="round",t.strokeStyle="#fff",t.lineWidth=o(.09),t.beginPath(),t.moveTo(o(-.1),o(.3)),t.lineTo(o(1.1),o(.72)),t.stroke(),t.strokeStyle="#ffd24d",t.lineWidth=o(.05),t.beginPath(),t.moveTo(o(.62),o(-.1)),t.lineTo(o(.42),o(1.1)),t.stroke(),t.beginPath(),t.arc(o(.5),o(.36),o(.13),Math.PI*.85,Math.PI*.15),t.lineTo(o(.5),o(.66)),t.closePath(),Dt(t,"#ff3b30"),fn(t,o(.5),o(.36),o(.05)),Dt(t,"#fff");break}case"weather":{t.fillStyle=Xt(t,0,i,"#5fb4ff","#1d6fe0"),t.fillRect(0,0,i,i),fn(t,o(.4),o(.4),o(.17)),Dt(t,Xt(t,o(.23),o(.57),"#ffe169","#ffb300")),t.beginPath(),t.arc(o(.47),o(.68),o(.13),Math.PI*.5,Math.PI*1.5),t.arc(o(.62),o(.55),o(.16),Math.PI*1.1,Math.PI*1.95),t.arc(o(.78),o(.68),o(.11),Math.PI*1.5,Math.PI*.5),t.closePath(),Dt(t,Xt(t,o(.4),o(.8),"#ffffff","#dfe9f5"));break}case"calendar":{t.fillStyle="#fff",t.fillRect(0,0,i,i),t.textAlign="center",t.fillStyle="#ff3b30",t.font=Un(600,o(.15)),t.fillText(new Intl.DateTimeFormat(l,{weekday:"short"}).format(s).replace(/\.$/,""),o(.5),o(.3)),t.fillStyle="#1d1d1f",t.font=Un(400,o(.46)),t.fillText(String(s.getDate()),o(.5),o(.78));break}case"clock":{t.fillStyle="#1c1c1e",t.fillRect(0,0,i,i),fn(t,o(.5),o(.5),o(.42)),Dt(t,"#fff"),t.strokeStyle="#1d1d1f";for(let f=0;f<12;f++){let h=f/12*Gn;t.lineWidth=o(.022),t.beginPath(),t.moveTo(o(.5)+Math.sin(h)*o(.34),o(.5)-Math.cos(h)*o(.34)),t.lineTo(o(.5)+Math.sin(h)*o(.39),o(.5)-Math.cos(h)*o(.39)),t.stroke()}let c=(s.getHours()%12+s.getMinutes()/60)/12*Gn,d=s.getMinutes()/60*Gn;t.lineCap="round",t.lineWidth=o(.045),t.beginPath(),t.moveTo(o(.5),o(.5)),t.lineTo(o(.5)+Math.sin(c)*o(.2),o(.5)-Math.cos(c)*o(.2)),t.stroke(),t.lineWidth=o(.032),t.beginPath(),t.moveTo(o(.5),o(.5)),t.lineTo(o(.5)+Math.sin(d)*o(.31),o(.5)-Math.cos(d)*o(.31)),t.stroke(),fn(t,o(.5),o(.5),o(.035)),Dt(t,"#ff9f0a");break}case"notes":{t.fillStyle="#fff",t.fillRect(0,0,i,i),t.fillStyle=Xt(t,0,o(.3),"#ffe36b","#ffcc00"),t.fillRect(0,0,i,o(.3)),t.fillStyle="#d1d1d6";for(let c of[.47,.62,.77])t.fillRect(o(.12),o(c),o(.76),o(.018));break}case"books":{t.fillStyle=Xt(t,0,i,"#ffb340","#ff7b00"),t.fillRect(0,0,i,i),t.fillStyle="#fff",t.beginPath(),t.moveTo(o(.5),o(.33)),t.bezierCurveTo(o(.38),o(.25),o(.24),o(.25),o(.16),o(.3)),t.lineTo(o(.16),o(.72)),t.bezierCurveTo(o(.26),o(.67),o(.4),o(.67),o(.5),o(.74)),t.closePath(),t.fill(),t.beginPath(),t.moveTo(o(.52),o(.33)),t.bezierCurveTo(o(.64),o(.25),o(.78),o(.25),o(.86),o(.3)),t.lineTo(o(.86),o(.72)),t.bezierCurveTo(o(.76),o(.67),o(.62),o(.67),o(.52),o(.74)),t.closePath(),t.fill();break}case"podcasts":{t.fillStyle=Xt(t,0,i,"#d57cff","#8a2be2"),t.fillRect(0,0,i,i),t.strokeStyle="#fff",t.lineCap="round";for(let[c,d]of[[.3,.05],[.19,.05]])t.lineWidth=o(d),t.beginPath(),t.arc(o(.5),o(.45),o(c),Math.PI*.72,Math.PI*.28+Gn),t.stroke();fn(t,o(.5),o(.45),o(.07)),Dt(t,"#fff"),t.beginPath(),t.roundRect(o(.455),o(.55),o(.09),o(.26),o(.045)),Dt(t,"#fff");break}case"health":{t.fillStyle="#fff",t.fillRect(0,0,i,i),t.beginPath(),t.moveTo(o(.5),o(.8)),t.bezierCurveTo(o(.1),o(.55),o(.12),o(.2),o(.34),o(.22)),t.bezierCurveTo(o(.44),o(.23),o(.5),o(.32),o(.5),o(.36)),t.bezierCurveTo(o(.5),o(.32),o(.56),o(.23),o(.66),o(.22)),t.bezierCurveTo(o(.88),o(.2),o(.9),o(.55),o(.5),o(.8)),t.closePath(),Dt(t,Xt(t,o(.2),o(.8),"#ff6482","#ff2d55"));break}case"files":{t.fillStyle="#fff",t.fillRect(0,0,i,i),t.beginPath(),t.roundRect(o(.14),o(.28),o(.34),o(.16),o(.05)),Dt(t,"#3d8ef7"),t.beginPath(),t.roundRect(o(.14),o(.35),o(.72),o(.42),o(.07)),Dt(t,Xt(t,o(.35),o(.77),"#62a8ff","#1f7bf2"));break}case"settings":{t.fillStyle=Xt(t,0,i,"#c7c7cc","#8e8e93"),t.fillRect(0,0,i,i),t.fillStyle="#48484a",t.beginPath();for(let c=0;c<24;c++){let d=c/24*Gn,f=c%2?o(.3):o(.37);t[c?"lineTo":"moveTo"](o(.5)+Math.cos(d)*f,o(.5)+Math.sin(d)*f)}t.closePath(),t.fill(),fn(t,o(.5),o(.5),o(.22)),Dt(t,"#aeaeb2"),fn(t,o(.5),o(.5),o(.1)),Dt(t,"#48484a");break}case"sonora":{t.fillStyle=Xt(t,0,i,"#4a4a4d","#161618"),t.fillRect(0,0,i,i),t.strokeStyle="#f5f5f7",t.lineWidth=o(.07),t.lineCap="round",t.beginPath(),t.arc(o(.5),o(.56),o(.28),Math.PI*1.08,Math.PI*1.92),t.stroke();for(let c of[.24,.64])t.beginPath(),t.roundRect(o(c),o(.5),o(.12),o(.24),o(.05)),Dt(t,"#f5f5f7");break}case"aster":{t.fillStyle=Xt(t,0,i,"#1b1b22","#050507"),t.fillRect(0,0,i,i),t.fillStyle="rgba(255,255,255,.7)";for(let[c,d]of[[.18,.2],[.8,.18],[.72,.82],[.22,.78],[.5,.12]])fn(t,o(c),o(d),o(.012)),t.fill();fn(t,o(.5),o(.5),o(.2)),Dt(t,Xt(t,o(.3),o(.7),"#f2d3a0","#b07a45")),t.save(),t.translate(o(.5),o(.5)),t.rotate(-.35),t.scale(1,.28),t.strokeStyle="rgba(245,225,190,.9)",t.lineWidth=o(.05),t.beginPath(),t.arc(0,0,o(.36),0,Gn),t.stroke(),t.restore();break}case"messages":{t.fillStyle=Xt(t,0,i,"#6bf08a","#1fc245"),t.fillRect(0,0,i,i),t.beginPath(),t.ellipse(o(.5),o(.47),o(.33),o(.27),0,0,Gn),Dt(t,"#fff"),t.beginPath(),t.moveTo(o(.28),o(.62)),t.quadraticCurveTo(o(.26),o(.78),o(.16),o(.8)),t.quadraticCurveTo(o(.32),o(.8),o(.4),o(.7)),t.closePath(),Dt(t,"#fff");break}case"mail":{t.fillStyle=Xt(t,0,i,"#4fb0ff","#0a6ff0"),t.fillRect(0,0,i,i),t.beginPath(),t.roundRect(o(.16),o(.28),o(.68),o(.46),o(.06)),Dt(t,"#fff"),t.strokeStyle="#2d86f5",t.lineWidth=o(.035),t.lineJoin="round",t.beginPath(),t.moveTo(o(.2),o(.33)),t.lineTo(o(.5),o(.55)),t.lineTo(o(.8),o(.33)),t.stroke();break}case"music":{t.fillStyle=Xt(t,0,i,"#ff6a78","#fa2d48"),t.fillRect(0,0,i,i),t.fillStyle="#fff",t.beginPath(),t.moveTo(o(.4),o(.26)),t.lineTo(o(.74),o(.19)),t.lineTo(o(.74),o(.29)),t.lineTo(o(.4),o(.36)),t.closePath(),t.fill(),t.fillRect(o(.38),o(.27),o(.045),o(.44)),t.fillRect(o(.715),o(.2),o(.045),o(.43)),t.beginPath(),t.ellipse(o(.33),o(.71),o(.09),o(.07),-.3,0,Gn),t.fill(),t.beginPath(),t.ellipse(o(.665),o(.63),o(.09),o(.07),-.3,0,Gn),t.fill();break}}t.fillStyle=Xt(t,0,i,"rgba(255,255,255,.2)","rgba(255,255,255,0)"),t.fillRect(0,0,i,i*.5),t.restore();let u=t.createLinearGradient(0,0,i,i);u.addColorStop(0,"rgba(255,255,255,.75)"),u.addColorStop(.35,"rgba(255,255,255,.08)"),u.addColorStop(.7,"rgba(255,255,255,.04)"),u.addColorStop(1,"rgba(255,255,255,.45)"),t.beginPath(),t.roundRect(i*.008,i*.008,i*.984,i*.984,i*.22),t.lineWidth=Math.max(1,i*.016),t.strokeStyle=u,t.stroke(),t.restore()}function A3(t,e,n,a,i,s){t.save(),t.fillStyle="#fff",t.font=Un(600,e*.043),t.textAlign="left",t.fillText(s(a),e*.1,n*.058);let r=e*.64,l=n*.043;for(let o=0;o<4;o++)t.beginPath(),t.roundRect(r+o*e*.014,l+(3-o)*e*.006-e*.004,e*.009,e*.014+o*e*.006,e*.003),t.fill();t.beginPath(),t.roundRect(r+e*.075,l-e*.012,e*.062,e*.03,e*.009),t.lineWidth=e*.003,t.strokeStyle="rgba(255,255,255,.55)",t.stroke(),t.beginPath(),t.roundRect(r+e*.08,l-e*.007,e*.042,e*.02,e*.005),t.fill(),t.restore()}function C3(t,e,n,a,i,s,r,l){t.fillStyle="#2c2c2e",t.fillRect(0,0,e,n),r.wallpaper?.naturalWidth&&Rx(t,r.wallpaper,0,0,e,n),t.fillStyle="rgba(0,0,0,.18)",t.fillRect(0,0,e,n),A3(t,e,n,a,i,l);let o=e*.165,u=[.145,.382,.618,.855].map(f=>f*e);t.textAlign="center",b3.forEach((f,h)=>{let g=u[h%4]-o/2,y=n*(.105+Math.floor(h/4)*.148);t.save(),t.shadowColor="rgba(0,0,0,.25)",t.shadowBlur=o*.12,t.shadowOffsetY=o*.04,tT(t,f,g,y,o,a,r,i),t.restore(),t.save(),t.fillStyle="#fff",t.font=Un(400,e*.029),t.shadowColor="rgba(0,0,0,.45)",t.shadowBlur=e*.01,t.fillText(s.apps[f],u[h%4],y+o+n*.03),t.restore()});let c=r.wallpaper?.naturalWidth?aT(r.wallpaper,e,n):void 0,d=(f,h,g,y,m)=>{t.save(),t.beginPath(),t.roundRect(f,h,g,y,m),t.clip(),c&&t.drawImage(c,0,0,e,n),t.fillStyle="rgba(255,255,255,.2)",t.fillRect(f,h,g,y),t.restore();let p=t.createLinearGradient(f,h,f+g,h+y);p.addColorStop(0,"rgba(255,255,255,.6)"),p.addColorStop(.5,"rgba(255,255,255,.1)"),p.addColorStop(1,"rgba(255,255,255,.35)"),t.beginPath(),t.roundRect(f,h,g,y,m),t.lineWidth=e*.003,t.strokeStyle=p,t.stroke()};d(e*.36,n*.775,e*.28,n*.036,n*.018),t.save(),t.fillStyle="#fff",t.font=Un(600,e*.03),t.textAlign="center",t.fillText(s.search,e*.5+e*.018,n*.8),t.strokeStyle="#fff",t.lineWidth=e*.005,fn(t,e*.425-e*.018,n*.7895,e*.011),t.stroke(),t.beginPath(),t.moveTo(e*.415,n*.797),t.lineTo(e*.423,n*.803),t.stroke(),t.restore(),d(e*.035,n*.835,e*.93,n*.13,e*.09),T3.forEach((f,h)=>tT(t,f,u[h]-o/2,n*.9-o/2,o,a,r,i))}function L3(t,e,n,a,i){t.fillStyle="#000",t.fillRect(0,0,e,n);let s=e*.5,r=n*.4,l=e*.42;fn(t,s,r,l),t.fillStyle="#121214",t.fill();for(let h=0;h<60;h++){let g=h/60*Gn,y=h%5===0;t.strokeStyle=y?"#f5f5f7":"#48484a",t.lineWidth=y?e*.009:e*.004,t.beginPath(),t.moveTo(s+Math.sin(g)*l*.93,r-Math.cos(g)*l*.93),t.lineTo(s+Math.sin(g)*l*(y?.83:.88),r-Math.cos(g)*l*(y?.83:.88)),t.stroke()}t.fillStyle="#f5f5f7",t.font=Un(500,e*.07),t.textAlign="center",t.textBaseline="middle";for(let h=1;h<=12;h++){let g=h/12*Gn;t.fillText(new Intl.NumberFormat(i).format(h),s+Math.sin(g)*l*.68,r-Math.cos(g)*l*.68)}let o=a.getSeconds(),u=a.getMinutes()+o/60,c=a.getHours()%12+u/60,d=(h,g,y,m,p)=>{t.strokeStyle=p,t.lineWidth=m,t.lineCap="round",t.beginPath(),t.moveTo(s-Math.sin(h)*y,r+Math.cos(h)*y),t.lineTo(s+Math.sin(h)*g,r-Math.cos(h)*g),t.stroke()};d(c/12*Gn,l*.48,0,e*.026,"#f5f5f7"),d(u/60*Gn,l*.76,0,e*.018,"#f5f5f7"),d(o/60*Gn,l*.86,l*.16,e*.007,"#ff9f0a"),fn(t,s,r,e*.018),t.fillStyle="#ff9f0a",t.fill(),fn(t,s,r,e*.007),t.fillStyle="#000",t.fill(),t.textBaseline="alphabetic",t.fillStyle="#f5f5f7",t.font=Un(600,e*.052);let f=new Intl.DateTimeFormat(i,{weekday:"long",day:"numeric",month:"long"}).format(a);t.fillText(f.charAt(0).toLocaleUpperCase(i)+f.slice(1),s,n*.78),t.fillStyle="#8e8e93",t.font=Un(400,e*.04),t.fillText(Intl.DateTimeFormat().resolvedOptions().timeZone.split("/").pop().replace(/_/g," "),s,n*.83)}function w3(t,e,n,a,i,s,r){t.fillStyle="#3a3a3c",t.fillRect(0,0,e,n),r.sonora?.naturalWidth&&(t.imageSmoothingQuality="high",t.drawImage(aT(r.sonora,e,n),0,0,e,n)),t.fillStyle=Xt(t,0,n,"rgba(0,0,0,.05)","rgba(0,0,0,.45)"),t.fillRect(0,0,e,n);let l=e*.78,o=(e-l)/2,u=n*.12;t.save(),t.shadowColor="rgba(0,0,0,.35)",t.shadowBlur=e*.06,t.shadowOffsetY=e*.02,t.beginPath(),t.roundRect(o,u,l,l,e*.04),t.fillStyle="#555",t.fill(),t.restore(),t.save(),t.beginPath(),t.roundRect(o,u,l,l,e*.04),t.clip(),r.sonora?.naturalWidth&&Rx(t,r.sonora,o,u,l,l),t.restore(),t.textAlign="left",t.fillStyle="#fff",t.font=Un(600,e*.06),t.fillText(s.track,o,n*.74),t.fillStyle="rgba(255,255,255,.62)",t.font=Un(400,e*.05),t.fillText(s.artist,o,n*.785);let c=Math.floor(a.getTime()/1e3)%Ix,d=n*.83;t.beginPath(),t.roundRect(o,d,l,e*.012,e*.006),t.fillStyle="rgba(255,255,255,.25)",t.fill(),t.beginPath(),t.roundRect(o,d,l*c/Ix,e*.012,e*.006),t.fillStyle="rgba(255,255,255,.9)",t.fill();let f=y=>`${Math.floor(y/60)}:${String(y%60).padStart(2,"0")}`;t.fillStyle="rgba(255,255,255,.55)",t.font=Un(500,e*.032),t.fillText(f(c),o,d+n*.035),t.textAlign="right",t.fillText(`-${f(Ix-c)}`,o+l,d+n*.035),t.fillStyle="#fff";let h=n*.925,g=(y,m)=>{for(let p of[0,1]){t.beginPath();let x=y+m*(p*e*.045-e*.02);t.moveTo(x-m*e*.025,h-e*.028),t.lineTo(x+m*e*.025,h),t.lineTo(x-m*e*.025,h+e*.028),t.closePath(),t.fill()}};g(e*.25,-1),g(e*.75,1),t.beginPath(),t.roundRect(e*.5-e*.035,h-e*.04,e*.025,e*.08,e*.006),t.fill(),t.beginPath(),t.roundRect(e*.5+e*.01,h-e*.04,e*.025,e*.08,e*.006),t.fill()}function E3(t,e,n,a,i,s){let r=e*.12;t.fillStyle="#000",t.fillRect(0,0,e,n),t.fillStyle=Ex,t.textBaseline="alphabetic",t.textAlign="left";let l=`${new Intl.DateTimeFormat(i,{weekday:"short"}).format(a)} ${new Intl.DateTimeFormat(i,{month:"short"}).format(a)}`.replace(/\.(?=\s|$)/g,"");t.font=Un(600,e*.085),t.fillText(l.charAt(0).toLocaleUpperCase(i)+l.slice(1),r,n*.14),t.font=Un(600,e*.4),t.fillText(new Intl.NumberFormat(i).format(a.getDate()),r-e*.02,n*.42),t.font=Un(600,e*.058),t.fillText(new Intl.DateTimeFormat(i,{month:"long"}).format(a).toLocaleUpperCase(i),r,n*.53);let o=Array.from({length:7},(g,y)=>r+e*.025+y*(e*.76/6)),u=new Intl.DateTimeFormat(i,{weekday:"narrow"});t.textAlign="center",t.font=Un(600,e*.05);for(let g=0;g<7;g++)t.fillText(u.format(new Date(2026,0,4+(s+g)%7)).toLocaleUpperCase(i),o[g],n*.6);let c=a.getFullYear(),d=a.getMonth(),f=new Date(c,d+1,0).getDate(),h=(new Date(c,d,1).getDay()-s+7)%7;t.font=Un(600,e*.052);for(let g=1;g<=f;g++){let y=h+g-1,m=o[y%7],p=n*(.675+Math.floor(y/7)*.06);g===a.getDate()&&(t.fillStyle=Ex,fn(t,m,p-e*.019,e*.047),t.fill(),t.fillStyle="#000"),t.fillText(new Intl.NumberFormat(i).format(g),m,p),t.fillStyle=Ex}}var ss=["calendar","home","clock","playing"];function iT(t,e,n,a,i){let s=t.width,r=t.height,l={},o=(C,T)=>{let L=new Image;L.crossOrigin="anonymous",L.decoding="async",L.onload=()=>{c.fill("")},L.src=T,l[C]=L};o("vulk","./assets/icon-512.png"),o("sonora","./assets/sonora-art.webp");let u=ss.map(()=>{let C=document.createElement("canvas");return C.width=s,C.height=r,C}),c=ss.map(()=>""),d=0,f=0,h=0,g=0,y=!1,m=0,p=0,x=NaN,v=(C,T)=>{let L=ss[C],_=u[C].getContext("2d"),w=L==="clock"||L==="playing"?String(Math.floor(T.getTime()/1e3)):`${T.getDate()} ${T.getHours()}:${T.getMinutes()}|${l.wallpaper?.src}`;return c[C]===w?!1:(c[C]=w,_.save(),_.clearRect(0,0,s,r),L==="calendar"?E3(_,s,r,T,e,a):L==="home"?C3(_,s,r,T,e,n,l,i):L==="clock"?L3(_,s,r,T,e):w3(_,s,r,T,e,n,l),_.restore(),!0)},M=C=>(C%ss.length+ss.length)%ss.length;return{setWallpaper(C){l.wallpaper!==C&&(l.wallpaper=C,c.fill(""))},grab(){y=!0,m=d,p=NaN,h=0},drag(C){if(!y)return;Number.isNaN(p)&&(p=C);let T=m-(C-p);h=(T-d)*60,d=T},release(){y&&(y=!1,f=Math.round(d+Math.max(-.5,Math.min(.5,h*.08))),g=0)},get dragging(){return y},get page(){return ss[M(Math.round(d))]},get position(){return d},tick(C,T,L=new Date){if(T&&!y&&(g+=C,g>5&&(g=0,f=Math.round(f)+1)),!y){let U=(f-d)*90-h*19;h+=U*C,d+=h*C,Math.abs(f-d)<1e-4&&Math.abs(h)<.001&&(d=f)}let _=Math.floor(d),w=d-_,E=M(_),I=M(_+1),F=v(E,L);if(w>1e-4&&(F=v(I,L)||F),!F&&d===x)return!1;x=d;let q=t.getContext("2d");q.fillStyle="#000",q.fillRect(0,0,s,r),q.drawImage(u[E],-w*s,0),w>1e-4&&q.drawImage(u[I],(1-w)*s,0);let Y=M(Math.round(d));for(let U=0;U<ss.length;U++)fn(q,s/2+(U-(ss.length-1)/2)*s*.03,r*.982,s*.0065),q.fillStyle=U===Y?"rgba(255,255,255,.9)":"rgba(255,255,255,.35)",q.fill();return!0}}}var Rl=Math.PI*2,sT=typeof FontFace>"u"?void 0:new FontFace("FoldClock","url('./assets/fonts/Antonio-latin.woff2')",{weight:"100 700"}),I3;function R3(){return I3??=Promise.allSettled([sT?sT.load().then(t=>{document.fonts.add(t)}):Promise.resolve(),document.fonts.load("600 40px FoldSans"),document.fonts.load("400 40px FoldSans")])}function Yr(t,e){let n=document.createElement("canvas");return n.width=t,n.height=e,n}function Dx(t){let e=new cc(t);return e.colorSpace=Lt,e.minFilter=ya,e.generateMipmaps=!0,e}function D3(t,e,n,a,i=.5){let s=Math.max(n/e.width,a/e.height),r=e.width*s,l=e.height*s;t.drawImage(e,(n-r)*i,(a-l)/2,r,l)}function P3(t){let e=Yr(Math.max(1,t.width/6|0),Math.max(1,t.height/6|0)),n=Yr(Math.max(1,t.width/24|0),Math.max(1,t.height/24|0)),a=e.getContext("2d"),i=n.getContext("2d");return a.imageSmoothingQuality="high",a.drawImage(t,0,0,e.width,e.height),i.imageSmoothingQuality="high",i.drawImage(e,0,0,n.width,n.height),n}function dp(t,e,n,a,i,s){t.beginPath(),t.roundRect(e,n,a,i,s)}function lT(t,e){let n=new Intl.DateTimeFormat(e,{hour:"numeric"}).resolvedOptions(),a=n.hourCycle==="h23"||n.hourCycle==="h24";return new Intl.DateTimeFormat(e,{hour:a?"2-digit":"numeric",minute:"2-digit",hourCycle:a?"h23":void 0}).formatToParts(t).filter(i=>i.type!=="dayPeriod").map(i=>i.value).join("").trim()}function U3(t,e){let n=new Intl.DateTimeFormat(e,{weekday:"long",day:"numeric",month:"long"}).format(t);return n.charAt(0).toLocaleUpperCase(e)+n.slice(1)}function O3(t){try{let e=new Intl.Locale(t),n=e.getWeekInfo?.().firstDay??e.weekInfo?.firstDay;if(n)return n%7}catch{}return/-(US|CA|JP|BR|IN|MX)$/i.test(t)?0:1}function N3(t,e,n,a,i,s,r,l){t.save(),t.beginPath(),t.arc(i,s,r,0,Rl),t.clip(),t.drawImage(e,0,0,n,a),t.fillStyle="rgba(255,255,255,.18)",t.fill();let o=t.createRadialGradient(i-r*.45,s-r*.6,0,i-r*.45,s-r*.6,r*1.3);o.addColorStop(0,"rgba(255,255,255,.28)"),o.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=o,t.fill(),t.restore();let u=t.createLinearGradient(i-r,s-r,i+r,s+r);u.addColorStop(0,"rgba(255,255,255,.75)"),u.addColorStop(.45,"rgba(255,255,255,.12)"),u.addColorStop(1,"rgba(255,255,255,.45)"),t.beginPath(),t.arc(i,s,r-r*.02,0,Rl),t.lineWidth=Math.max(1.5,r*.045),t.strokeStyle=u,t.stroke(),t.save(),t.fillStyle="#fff",t.strokeStyle="#fff",l(t,i,s,r),t.restore()}var B3=(t,e,n,a)=>{let i=a/40;t.beginPath(),t.moveTo(e-9*i,n-17*i),t.lineTo(e+9*i,n-17*i),t.lineTo(e+9*i,n-11*i),t.lineTo(e+5*i,n-5*i),t.lineTo(e-5*i,n-5*i),t.lineTo(e-9*i,n-11*i),t.closePath(),t.fill(),dp(t,e-5*i,n-3*i,10*i,21*i,2.5*i),t.fill(),t.fillStyle="rgba(0,0,0,.35)",t.beginPath(),t.arc(e,n+4*i,1.8*i,0,Rl),t.fill()},F3=(t,e,n,a)=>{let i=a/40;dp(t,e-16*i,n-9*i,32*i,22*i,5*i),t.fill(),dp(t,e-6*i,n-13*i,12*i,6*i,2*i),t.fill(),t.globalCompositeOperation="destination-out",t.beginPath(),t.arc(e,n+2*i,7*i,0,Rl),t.fill(),t.globalCompositeOperation="source-over",t.beginPath(),t.arc(e,n+2*i,4.2*i,0,Rl),t.fill()},k3=(t,e,n,a)=>{let i=a/40;t.lineCap="round",t.lineWidth=3.4*i;for(let s of[8,15,22])t.beginPath(),t.arc(e,n+9*i,s*i,-Math.PI*.78,-Math.PI*.22),t.stroke();t.beginPath(),t.arc(e,n+9*i,2.6*i,0,Rl),t.fill()};function z3(t,e,n,a,i,s,r,l,o){let u=Yr(n,a),c=u.getContext("2d");c.font="500 100px FoldClock";let d=c.measureText("0123456789"),f=(d.actualBoundingBoxAscent+d.actualBoundingBoxDescent)/100||.78,h=l/f;c.font=`500 ${h}px FoldClock`;let g=c.measureText(i).width;g>o&&(h*=o/g,c.font=`500 ${h}px FoldClock`);let y=r+h*f;c.textAlign="center",c.textBaseline="alphabetic",c.fillStyle="#fff",c.fillText(i,s,y),c.globalCompositeOperation="source-in",c.drawImage(e,0,0,n,a),c.globalCompositeOperation="source-atop";let m=c.createLinearGradient(0,r,0,y);m.addColorStop(0,"rgba(255,255,255,.97)"),m.addColorStop(.55,"rgba(255,255,255,.86)"),m.addColorStop(1,"rgba(255,255,255,.34)"),c.fillStyle=m,c.fillRect(0,0,n,a),c.globalCompositeOperation="source-over";let p=c.createLinearGradient(0,r,0,y);p.addColorStop(0,"rgba(255,255,255,.9)"),p.addColorStop(1,"rgba(255,255,255,.08)"),c.lineWidth=Math.max(1,h*.006),c.strokeStyle=p,c.strokeText(i,s,y),t.save(),t.shadowColor="rgba(0,0,0,.16)",t.shadowBlur=h*.06,t.shadowOffsetY=h*.01,t.drawImage(u,0,0),t.restore()}function rT(t,e,n,a,i,s){let r=t.getContext("2d"),l=s?t.height:t.width,o=s?t.width:t.height,u=Yr(l,o),c=u.getContext("2d");c.fillStyle="#4b5057",c.fillRect(0,0,l,o),e?.naturalWidth&&D3(c,e,l,o,i.focusX);let d=c.createLinearGradient(0,0,0,o);d.addColorStop(0,"rgba(0,0,0,.14)"),d.addColorStop(.35,"rgba(0,0,0,0)"),d.addColorStop(.8,"rgba(0,0,0,0)"),d.addColorStop(1,"rgba(0,0,0,.2)"),c.fillStyle=d,c.fillRect(0,0,l,o);let f=P3(u);c.save(),c.font=`600 ${i.dateSize}px FoldSans, Arial, sans-serif`,c.textAlign="center",c.textBaseline="alphabetic",c.fillStyle="rgba(255,255,255,.93)",c.shadowColor="rgba(0,0,0,.18)",c.shadowBlur=i.dateSize*.4,c.fillText(U3(n,a),l/2,i.dateY),c.restore(),z3(c,f,l,o,lT(n,a),l/2,i.clockTop,i.clockHeight,i.clockWidth);for(let h of i.controls)N3(c,f,l,o,h.x,h.y,h.r,h.glyph==="torch"?B3:h.glyph==="lens"?F3:k3);c.fillStyle="rgba(255,255,255,.92)",dp(c,(l-i.bar.width)/2,i.bar.y,i.bar.width,i.bar.height,i.bar.height/2),c.fill(),r.save(),r.clearRect(0,0,t.width,t.height),s&&(r.translate(t.width,0),r.rotate(Math.PI/2)),r.drawImage(u,0,0),r.restore()}var oT=[1800,1266],Px=[870,1266],H3=(t,e)=>({dateY:e*.1,dateSize:t*.044,clockTop:e*.125,clockHeight:e*.245,clockWidth:t*.62,controls:[{x:t*.885,y:e*.165,glyph:"signal",r:t*.048},{x:t*.885,y:e*.805,glyph:"torch",r:t*.052},{x:t*.885,y:e*.895,glyph:"lens",r:t*.052}],bar:{y:e*.962,width:t*.36,height:e*.0075},focusX:.42}),G3=(t,e)=>({dateY:e*.115,dateSize:e*.034,clockTop:e*.14,clockHeight:e*.27,clockWidth:t*.5,controls:[{x:t*.058,y:e*.9,glyph:"torch",r:e*.038},{x:t*.942,y:e*.9,glyph:"lens",r:e*.038}],bar:{y:e*.968,width:t*.17,height:e*.0075},focusX:.5}),V3=(t,e)=>({dateY:e*.085,dateSize:t*.034,clockTop:e*.105,clockHeight:e*.2,clockWidth:t*.6,controls:[{x:t*.915,y:e*.835,glyph:"torch",r:t*.038},{x:t*.915,y:e*.905,glyph:"lens",r:t*.038}],bar:{y:e*.972,width:t*.3,height:t*.0075},focusX:.5});function uT(t,e,n=nT){let a={inner:Yr(...oT),cover:Yr(...Px),back:Yr(...Px)},i={inner:Dx(a.inner),cover:Dx(a.cover),back:Dx(a.back)},s=iT(a.back,t,n,O3(t),u=>lT(u,t)),r="",l=!1,o=e.map(u=>{let c=new Image;return c.crossOrigin="anonymous",c.decoding="async",c.src=`./assets/${u}.webp`,c.onload=()=>{l||(r="")},c});return R3().then(()=>{l||(r="")}),{textures:i,update(u,c,d=new Date){let f=`${u}|${c}|${d.getFullYear()}-${d.getMonth()}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`;if(f===r)return!1;r=f;let h=o[u%o.length],[g,y]=oT,[m,p]=Px;return rT(a.inner,h,d,t,c==="portrait"?V3(y,g):G3(g,y),c==="portrait"),rT(a.cover,h,d,t,H3(m,p),!1),s.setWallpaper(o[(u+1)%o.length]),i.inner.needsUpdate=!0,i.cover.needsUpdate=!0,!0},pager:s,tick(u,c){s.tick(u,c)&&(i.back.needsUpdate=!0)},dispose(){l=!0,Object.values(i).forEach(u=>u.dispose())}}}var q3=3.1506/2.216,W3=7.717/11.228;function cT(t,e){let n=e.image;if(!n?.width||!n.height)return;let a=n.width/n.height,i=t.uniforms.cover.value?W3:q3;t.uniforms.fit.value.set(Math.min(1,i/a),Math.min(1,a/i)),t.uniforms.pixel.value.set(1/n.width,1/n.height)}function fT(t,e,n=null){return new Hn({toneMapped:!1,uniforms:{image:{value:t},back:{value:n},fold:{value:0},cover:{value:Number(e)},surfaceToFrame:{value:new Ne},pixel:{value:new He(1/1600,1/1126)},fit:{value:new He(1,1)}},vertexShader:`
      uniform mat4 surfaceToFrame;
      varying vec3 framePosition;
      varying vec2 screenUV;
      void main() {
        framePosition = (surfaceToFrame * vec4(position, 1.0)).xyz;
        screenUV = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform sampler2D image;
      uniform sampler2D back;
      uniform float fold;
      uniform float cover;
      uniform vec2 pixel;
      uniform vec2 fit;
      varying vec3 framePosition;
      varying vec2 screenUV;
      vec4 readImage(vec2 p, float lod) {
        vec2 aa = max(fwidth(p), pixel * .5);
        // The inner display fades its reprojected edges; the cover image is pinned to the
        // glass, so a blur tap that leaves the glass clamps instead of darkening the rim.
        vec2 coverage = cover > .5 ? vec2(1.0) : smoothstep(-aa, aa, p) * (1.0 - smoothstep(1.0-aa, 1.0+aa, p));
        vec2 cropped = .5 + (clamp(p, 0.0, 1.0) - .5) * fit;
        return vec4(textureLod(image, cropped, lod).rgb, coverage.x * coverage.y);
      }
      void main() {
        vec2 sourceUV;
        float progress, edge, standby = 0.0;
        if (cover > .5) {
          // The cover keeps its image on the glass (no slide) and takes the same
          // progressive blur and shade as the inner display, growing from the hinge
          // towards the free edge while the device opens, and receding as it closes.
          sourceUV = screenUV;
          progress = clamp((3.141593-fold)/1.570796, 0.0, 1.0);
          edge = clamp(screenUV.x, 0.0, 1.0);
          standby = 1.0 - smoothstep(0.0, .6, fold);
        } else {
          vec3 eye = vec3(0.0, 0.0, 6.0);
          float plane = -.010104;
          float depth = (plane-eye.z) / (framePosition.z-eye.z);
          vec2 projected = eye.xy + (framePosition.xy-eye.xy) * depth;
          sourceUV = (projected - vec2(-1.5753,-1.108)) / vec2(3.1506,2.216);
          progress = clamp(fold / 1.570796, 0.0, 1.0);
          edge = clamp(1.0 - sourceUV.x * 2.0, 0.0, 1.0);
        }
        float motion = smoothstep(0.0, 1.0, progress);
        float radius = 72.0 * motion * pow(edge, 1.35);
        // Taps are spaced in image pixels, whatever crop the display applies.
        vec2 tap = pixel / fit;
        float baseLod = log2(max(1.0,max(length(dFdx(sourceUV)/tap),length(dFdy(sourceUV)/tap))));
        float lod = max(baseLod, log2(max(1.0,radius)));
        vec4 color = vec4(0.0);
        for (int x=-2;x<=2;x++) for(int y=-2;y<=2;y++) {
          float wx = x==0 ? 6.0 : (abs(x)==1 ? 4.0 : 1.0);
          float wy = y==0 ? 6.0 : (abs(y)==1 ? 4.0 : 1.0);
          color += readImage(sourceUV + vec2(float(x),float(y))*tap*radius, lod) * wx * wy / 256.0;
        }
        float shade = motion * pow(clamp((edge-.2)/.8,0.0,1.0),1.35) * 2.0;
        vec3 lit = color.rgb * color.a * (1.0-min(1.0,shade));
        if (standby > 0.0) lit = mix(lit, texture2D(back, screenUV).rgb, standby);
        gl_FragColor = vec4(lit, 1.0);
        #include <colorspace_fragment>
      }`})}var $a=wi(or(),1);var Ux=new WeakMap,hp=class extends Oa{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,n,a,i){let s=new ns(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,r=>{this.parse(r,n,i)},a,i)}parse(e,n,a=()=>{}){this.decodeDracoFile(e,n,null,null,Lt,a).catch(a)}decodeDracoFile(e,n,a,i,s=bn,r=()=>{}){let l={attributeIDs:a||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!a,vertexColorSpace:s};return this.decodeGeometry(e,l).then(n).catch(r)}decodeGeometry(e,n){let a=JSON.stringify(n);if(Ux.has(e)){let o=Ux.get(e);if(o.key===a)return o.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i,s=this.workerNextTaskID++,r=e.byteLength,l=this._getWorker(s,r).then(o=>(i=o,new Promise((u,c)=>{i._callbacks[s]={resolve:u,reject:c},i.postMessage({type:"decode",id:s,taskConfig:n,buffer:e},[e])}))).then(o=>this._createGeometry(o.geometry));return l.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Ux.set(e,{key:a,promise:l}),l}_createGeometry(e){let n=new Tn;e.index&&n.setIndex(new Ht(e.index.array,1));for(let a=0;a<e.attributes.length;a++){let{name:i,array:s,itemSize:r,stride:l,vertexColorSpace:o}=e.attributes[a],u;if(r===l)u=new Ht(s,r);else{let c=new Zs(s,l);u=new Ks(c,r,0)}i==="color"&&(this._assignVertexColorSpace(u,o),u.normalized=!(s instanceof Float32Array)),n.setAttribute(i,u)}return n}_assignVertexColorSpace(e,n){if(n!==Lt)return;let a=new Re;for(let i=0,s=e.count;i<s;i++)a.fromBufferAttribute(e,i),qe.colorSpaceToWorking(a,Lt),e.setXYZ(i,a.r,a.g,a.b)}_loadLibrary(e,n){let a=new ns(this.manager);return a.setPath(this.decoderPath),a.setResponseType(n),a.setWithCredentials(this.withCredentials),new Promise((i,s)=>{a.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",n=[];return e?n.push(this._loadLibrary("draco_decoder.js","text")):(n.push(this._loadLibrary("draco_wasm_wrapper.js","text")),n.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(n).then(a=>{let i=a[0];e||(this.decoderConfig.wasmBinary=a[1]);let s=X3.toString(),r=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,n){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){let r=s.data;switch(r.type){case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});let a=this.workerPool[this.workerPool.length-1];return a._taskCosts[e]=n,a._taskLoad+=n,a})}_releaseTask(e,n){e._taskLoad-=e._taskCosts[n],delete e._callbacks[n],delete e._taskCosts[n]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function X3(){let t,e;onmessage=function(r){let l=r.data;switch(l.type){case"init":t=l.decoderConfig,e=new Promise(function(c){t.onModuleLoaded=function(d){c({draco:d})},DracoDecoderModule(t)});break;case"decode":let o=l.buffer,u=l.taskConfig;e.then(c=>{let d=c.draco,f=new d.Decoder;try{let h=n(d,f,new Int8Array(o),u),g=h.attributes.map(y=>y.array.buffer);h.index&&g.push(h.index.array.buffer),self.postMessage({type:"decode",id:l.id,geometry:h},g)}catch(h){console.error(h),self.postMessage({type:"error",id:l.id,error:h.message})}finally{d.destroy(f)}});break}};function n(r,l,o,u){let c=u.attributeIDs,d=u.attributeTypes,f,h,g=l.GetEncodedGeometryType(o);if(g===r.TRIANGULAR_MESH)f=new r.Mesh,h=l.DecodeArrayToMesh(o,o.byteLength,f);else if(g===r.POINT_CLOUD)f=new r.PointCloud,h=l.DecodeArrayToPointCloud(o,o.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!h.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+h.error_msg());let y={index:null,attributes:[]};for(let m in c){let p=self[d[m]],x,v;if(u.useUniqueIDs)v=c[m],x=l.GetAttributeByUniqueId(f,v);else{if(v=l.GetAttributeId(f,r[c[m]]),v===-1)continue;x=l.GetAttribute(f,v)}let M=i(r,l,f,m,p,x);m==="color"&&(M.vertexColorSpace=u.vertexColorSpace),y.attributes.push(M)}return g===r.TRIANGULAR_MESH&&(y.index=a(r,l,f)),r.destroy(f),y}function a(r,l,o){let c=o.num_faces()*3,d=c*4,f=r._malloc(d);l.GetTrianglesUInt32Array(o,d,f);let h=new Uint32Array(r.HEAPF32.buffer,f,c).slice();return r._free(f),{array:h,itemSize:1}}function i(r,l,o,u,c,d){let f=o.num_points(),h=d.num_components(),g=s(r,c),y=h*c.BYTES_PER_ELEMENT,m=Math.ceil(y/4)*4,p=m/c.BYTES_PER_ELEMENT,x=f*y,v=f*m,M=r._malloc(x);l.GetAttributeDataArrayForAllPoints(o,d,g,x,M);let C=new c(r.HEAPF32.buffer,M,x/c.BYTES_PER_ELEMENT),T;if(y===m)T=C.slice();else{T=new c(v/c.BYTES_PER_ELEMENT);let L=0;for(let _=0,w=C.length;_<w;_++){for(let E=0;E<h;E++)T[L+E]=C[_*h+E];L+=p}}return r._free(M),{name:u,count:f,itemSize:h,array:T,stride:p}}function s(r,l){switch(l){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}function Ox(t,e){if(e===rx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),t;if(e===Cl||e===Ic){let n=t.getIndex();if(n===null){let r=[],l=t.getAttribute("position");if(l!==void 0){for(let o=0;o<l.count;o++)r.push(o);t.setIndex(r),n=t.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t}let a=n.count-2,i=[];if(e===Cl)for(let r=1;r<=a;r++)i.push(n.getX(0)),i.push(n.getX(r)),i.push(n.getX(r+1));else for(let r=0;r<a;r++)r%2===0?(i.push(n.getX(r)),i.push(n.getX(r+1)),i.push(n.getX(r+2))):(i.push(n.getX(r+2)),i.push(n.getX(r+1)),i.push(n.getX(r)));i.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=t.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),t}function dT(t){let e=new Map,n=new Map,a=t.clone();return hT(t,a,function(i,s){e.set(s,i),n.set(i,s)}),a.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,r=e.get(i),l=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=l.map(function(o){return n.get(o)}),s.bind(s.skeleton,s.bindMatrix)}),a}function hT(t,e,n){n(t,e);for(let a=0;a<t.children.length;a++)hT(t.children[a],e.children[a],n)}var pp=class extends Oa{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new Gx(n)}),this.register(function(n){return new Vx(n)}),this.register(function(n){return new Qx(n)}),this.register(function(n){return new $x(n)}),this.register(function(n){return new ey(n)}),this.register(function(n){return new Wx(n)}),this.register(function(n){return new Xx(n)}),this.register(function(n){return new Yx(n)}),this.register(function(n){return new Zx(n)}),this.register(function(n){return new Hx(n)}),this.register(function(n){return new Kx(n)}),this.register(function(n){return new qx(n)}),this.register(function(n){return new jx(n)}),this.register(function(n){return new Jx(n)}),this.register(function(n){return new kx(n)}),this.register(function(n){return new mp(n,je.EXT_MESHOPT_COMPRESSION)}),this.register(function(n){return new mp(n,je.KHR_MESHOPT_COMPRESSION)}),this.register(function(n){return new ty(n)})}load(e,n,a,i){let s=this,r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){let u=as.extractUrlBase(e);r=as.resolveURL(u,this.path)}else r=as.extractUrlBase(e);this.manager.itemStart(e);let l=function(u){i?i(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},o=new ns(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(u){try{s.parse(u,r,function(c){n(c),s.manager.itemEnd(e)},l)}catch(c){l(c)}},a,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,a,i){let s,r={},l={},o=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(o.decode(new Uint8Array(e,0,4))===yT){try{r[je.KHR_BINARY_GLTF]=new ny(e)}catch(d){i&&i(d);return}s=JSON.parse(r[je.KHR_BINARY_GLTF].content)}else s=JSON.parse(o.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let u=new uy(s,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){let d=this.pluginCallbacks[c](u);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[d.name]=d,r[d.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){let d=s.extensionsUsed[c],f=s.extensionsRequired||[];switch(d){case je.KHR_MATERIALS_UNLIT:r[d]=new zx;break;case je.KHR_DRACO_MESH_COMPRESSION:r[d]=new ay(s,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:r[d]=new iy;break;case je.KHR_MESH_QUANTIZATION:r[d]=new sy;break;default:f.indexOf(d)>=0&&l[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}u.setExtensions(r),u.setPlugins(l),u.parse(a,i)}parseAsync(e,n){let a=this;return new Promise(function(i,s){a.parse(e,n,i,s)})}};function Y3(){let t={};return{get:function(e){return t[e]},add:function(e,n){t[e]=n},remove:function(e){delete t[e]},removeAll:function(){t={}}}}function $t(t,e,n){let a=t.json.materials[e];return a.extensions&&a.extensions[n]?a.extensions[n]:null}var je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},kx=class{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,n=this.parser.json.nodes||[];for(let a=0,i=n.length;a<i;a++){let s=n[a];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let n=this.parser,a="light:"+e,i=n.cache.get(a);if(i)return i;let s=n.json,o=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],u,c=new Re(16777215);o.color!==void 0&&c.setRGB(o.color[0],o.color[1],o.color[2],bn);let d=o.range!==void 0?o.range:0;switch(o.type){case"directional":u=new tr(c),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Gr(c),u.distance=d;break;case"spot":u=new vc(c),u.distance=d,o.spot=o.spot||{},o.spot.innerConeAngle=o.spot.innerConeAngle!==void 0?o.spot.innerConeAngle:0,o.spot.outerConeAngle=o.spot.outerConeAngle!==void 0?o.spot.outerConeAngle:Math.PI/4,u.angle=o.spot.outerConeAngle,u.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}return u.position.set(0,0,0),Li(u,o),o.intensity!==void 0&&(u.intensity=o.intensity),u.name=n.createUniqueName(o.name||"light_"+e),i=Promise.resolve(u),n.cache.add(a,i),i}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){let n=this,a=this.parser,s=a.json.nodes[e],l=(s.extensions&&s.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(o){return a._getNodeRef(n.cache,l,o)})}},zx=class{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Ja}extendParams(e,n,a){let i=[];e.color=new Re(1,1,1),e.opacity=1;let s=n.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],bn),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(a.assignTexture(e,"map",s.baseColorTexture,Lt))}return Promise.all(i)}},Hx=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){let a=$t(this.parser,e,this.name);return a===null||a.emissiveStrength!==void 0&&(n.emissiveIntensity=a.emissiveStrength),Promise.resolve()}},Gx=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return $t(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,n){let a=$t(this.parser,e,this.name);if(a===null)return Promise.resolve();let i=[];if(a.clearcoatFactor!==void 0&&(n.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(n,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(n,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(n,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let s=a.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new He(s,s)}return Promise.all(i)}},Vx=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){return $t(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,n){let a=$t(this.parser,e,this.name);return a===null||(n.dispersion=a.dispersion!==void 0?a.dispersion:0),Promise.resolve()}},qx=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return $t(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,n){let a=$t(this.parser,e,this.name);if(a===null)return Promise.resolve();let i=[];return a.iridescenceFactor!==void 0&&(n.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(n,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(n.iridescenceIOR=a.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(n,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(i)}},Wx=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){return $t(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,n){let a=$t(this.parser,e,this.name);if(a===null)return Promise.resolve();let i=[];if(n.sheenColor=new Re(0,0,0),n.sheenRoughness=0,n.sheen=1,a.sheenColorFactor!==void 0){let s=a.sheenColorFactor;n.sheenColor.setRGB(s[0],s[1],s[2],bn)}return a.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(n,"sheenColorMap",a.sheenColorTexture,Lt)),a.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(n,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(i)}},Xx=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return $t(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,n){let a=$t(this.parser,e,this.name);if(a===null)return Promise.resolve();let i=[];return a.transmissionFactor!==void 0&&(n.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(n,"transmissionMap",a.transmissionTexture)),Promise.all(i)}},Yx=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){return $t(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,n){let a=$t(this.parser,e,this.name);if(a===null)return Promise.resolve();let i=[];n.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(n,"thicknessMap",a.thicknessTexture)),n.attenuationDistance=a.attenuationDistance||1/0;let s=a.attenuationColor||[1,1,1];return n.attenuationColor=new Re().setRGB(s[0],s[1],s[2],bn),Promise.all(i)}},Zx=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){return $t(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,n){let a=$t(this.parser,e,this.name);return a===null||(n.ior=a.ior!==void 0?a.ior:1.5,n.ior===0&&(n.ior=1e3)),Promise.resolve()}},Kx=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){return $t(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,n){let a=$t(this.parser,e,this.name);if(a===null)return Promise.resolve();let i=[];n.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&i.push(this.parser.assignTexture(n,"specularIntensityMap",a.specularTexture));let s=a.specularColorFactor||[1,1,1];return n.specularColor=new Re().setRGB(s[0],s[1],s[2],bn),a.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(n,"specularColorMap",a.specularColorTexture,Lt)),Promise.all(i)}},Jx=class{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){return $t(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,n){let a=$t(this.parser,e,this.name);if(a===null)return Promise.resolve();let i=[];return n.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&i.push(this.parser.assignTexture(n,"bumpMap",a.bumpTexture)),Promise.all(i)}},jx=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return $t(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,n){let a=$t(this.parser,e,this.name);if(a===null)return Promise.resolve();let i=[];return a.anisotropyStrength!==void 0&&(n.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(n.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(n,"anisotropyMap",a.anisotropyTexture)),Promise.all(i)}},Qx=class{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){let n=this.parser,a=n.json,i=a.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],r=n.options.ktx2Loader;if(!r){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,s.source,r)}},$x=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP}loadTexture(e){let n=this.name,a=this.parser,i=a.json,s=i.textures[e];if(!s.extensions||!s.extensions[n])return null;let r=s.extensions[n],l=i.images[r.source],o=a.textureLoader;if(l.uri){let u=a.options.manager.getHandler(l.uri);u!==null&&(o=u)}return a.loadTextureImage(e,r.source,o)}},ey=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF}loadTexture(e){let n=this.name,a=this.parser,i=a.json,s=i.textures[e];if(!s.extensions||!s.extensions[n])return null;let r=s.extensions[n],l=i.images[r.source],o=a.textureLoader;if(l.uri){let u=a.options.manager.getHandler(l.uri);u!==null&&(o=u)}return a.loadTextureImage(e,r.source,o)}},mp=class{constructor(e,n){this.name=n,this.parser=e}loadBufferView(e){let n=this.parser.json,a=n.bufferViews[e];if(a.extensions&&a.extensions[this.name]){let i=a.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(l){let o=i.byteOffset||0,u=i.byteLength||0,c=i.count,d=i.byteStride,f=new Uint8Array(l,o,u);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(c,d,f,i.mode,i.filter).then(function(h){return h.buffer}):r.ready.then(function(){let h=new ArrayBuffer(c*d);return r.decodeGltfBuffer(new Uint8Array(h),c,d,f,i.mode,i.filter),h})})}else return null}},ty=class{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let n=this.parser.json,a=n.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;let i=n.meshes[a.mesh];for(let u of i.primitives)if(u.mode!==Ba.TRIANGLES&&u.mode!==Ba.TRIANGLE_STRIP&&u.mode!==Ba.TRIANGLE_FAN&&u.mode!==void 0)return null;let r=a.extensions[this.name].attributes,l=[],o={};for(let u in r)l.push(this.parser.getDependency("accessor",r[u]).then(c=>(o[u]=c,o[u])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(u=>{let c=u.pop(),d=c.isGroup?c.children:[c],f=u[0].count,h=[];for(let g of d){let y=new Ne,m=new B,p=new ma,x=new B(1,1,1),v=new kr(g.geometry,g.material,f);for(let M=0;M<f;M++)o.TRANSLATION&&m.fromBufferAttribute(o.TRANSLATION,M),o.ROTATION&&p.fromBufferAttribute(o.ROTATION,M),o.SCALE&&x.fromBufferAttribute(o.SCALE,M),v.setMatrixAt(M,y.compose(m,p,x));for(let M in o)if(M==="_COLOR_0"){let C=o[M];v.instanceColor=new js(C.array,C.itemSize,C.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,o[M]);Rt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),h.push(v)}return c.isGroup?(c.clear(),c.add(...h),c):h[0]}))}},yT="glTF",Oc=12,pT={JSON:1313821514,BIN:5130562},ny=class{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;let n=new DataView(e,0,Oc),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==yT)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Oc,s=new DataView(e,Oc),r=0;for(;r<i;){let l=s.getUint32(r,!0);r+=4;let o=s.getUint32(r,!0);if(r+=4,o===pT.JSON){let u=new Uint8Array(e,Oc+r,l);this.content=a.decode(u)}else if(o===pT.BIN){let u=Oc+r;this.body=e.slice(u,u+l)}r+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ay=class{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){let a=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,l={},o={},u={};for(let c in r){let d=oy[c]||c.toLowerCase();l[d]=r[c]}for(let c in e.attributes){let d=oy[c]||c.toLowerCase();if(r[c]!==void 0){let f=a.accessors[e.attributes[c]],h=Dl[f.componentType];u[d]=h.name,o[d]=f.normalized===!0}}return n.getDependency("bufferView",s).then(function(c){return new Promise(function(d,f){i.decodeDracoFile(c,function(h){for(let g in h.attributes){let y=h.attributes[g],m=o[g];m!==void 0&&(y.normalized=m)}d(h)},l,u,bn,f)})})}},iy=class{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}},sy=class{constructor(){this.name=je.KHR_MESH_QUANTIZATION}},gp=class extends vi{constructor(e,n,a,i){super(e,n,a,i)}copySampleValue_(e){let n=this.resultBuffer,a=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)n[r]=a[s+r];return n}interpolate_(e,n,a,i){let s=this.resultBuffer,r=this.sampleValues,l=this.valueSize,o=l*2,u=l*3,c=i-n,d=(a-n)/c,f=d*d,h=f*d,g=e*u,y=g-u,m=-2*h+3*f,p=h-f,x=1-m,v=p-f+d;for(let M=0;M!==l;M++){let C=r[y+M+l],T=r[y+M+o]*c,L=r[g+M+l],_=r[g+M]*c;s[M]=x*C+v*T+m*L+p*_}return s}},Z3=new ma,ry=class extends gp{interpolate_(e,n,a,i){let s=super.interpolate_(e,n,a,i);return Z3.fromArray(s).normalize().toArray(s),s}},Ba={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Dl={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mT={9728:jt,9729:Qt,9984:_h,9985:bl,9986:qr,9987:ya},gT={33071:Ua,33648:ul,10497:Ys},Nx={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},oy={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},rr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},K3={CUBICSPLINE:void 0,LINEAR:Nr,STEP:Or},Bx={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function J3(t){return t.DefaultMaterial===void 0&&(t.DefaultMaterial=new yi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ka})),t.DefaultMaterial}function Zr(t,e,n){for(let a in n.extensions)t[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=n.extensions[a])}function Li(t,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(t.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function j3(t,e,n){let a=!1,i=!1,s=!1;for(let u=0,c=e.length;u<c;u++){let d=e[u];if(d.POSITION!==void 0&&(a=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),a&&i&&s)break}if(!a&&!i&&!s)return Promise.resolve(t);let r=[],l=[],o=[];for(let u=0,c=e.length;u<c;u++){let d=e[u];if(a){let f=d.POSITION!==void 0?n.getDependency("accessor",d.POSITION):t.attributes.position;r.push(f)}if(i){let f=d.NORMAL!==void 0?n.getDependency("accessor",d.NORMAL):t.attributes.normal;l.push(f)}if(s){let f=d.COLOR_0!==void 0?n.getDependency("accessor",d.COLOR_0):t.attributes.color;o.push(f)}}return Promise.all([Promise.all(r),Promise.all(l),Promise.all(o)]).then(function(u){let c=u[0],d=u[1],f=u[2];return a&&(t.morphAttributes.position=c),i&&(t.morphAttributes.normal=d),s&&(t.morphAttributes.color=f),t.morphTargetsRelative=!0,t})}function Q3(t,e){if(t.updateMorphTargets(),e.weights!==void 0)for(let n=0,a=e.weights.length;n<a;n++)t.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){let n=e.extras.targetNames;if(t.morphTargetInfluences.length===n.length){t.morphTargetDictionary={};for(let a=0,i=n.length;a<i;a++)t.morphTargetDictionary[n[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $3(t){let e,n=t.extensions&&t.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+Fx(n.attributes):e=t.indices+":"+Fx(t.attributes)+":"+t.mode,t.targets!==void 0)for(let a=0,i=t.targets.length;a<i;a++)e+=":"+Fx(t.targets[a]);return e}function Fx(t){let e="",n=Object.keys(t).sort();for(let a=0,i=n.length;a<i;a++)e+=n[a]+":"+t[n[a]]+";";return e}function ly(t){switch(t){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function eD(t){return t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0?"image/jpeg":t.search(/\.webp($|\?)/i)>0||t.search(/^data\:image\/webp/)===0?"image/webp":t.search(/\.ktx2($|\?)/i)>0||t.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var tD=new Ne,uy=class{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new Y3,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,i=-1,s=!1,r=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let l=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(l)===!0;let o=l.match(/Version\/(\d+)/);i=a&&o?parseInt(o[1],10):-1,s=l.indexOf("Firefox")>-1,r=s?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&i<17||s&&r<98?this.textureLoader=new mc(this.options.manager):this.textureLoader=new _c(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ns(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){let a=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(r){let l={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:a,userData:{}};return Zr(s,l,i),Li(l,i),Promise.all(a._invokeAll(function(o){return o.afterRoot&&o.afterRoot(l)})).then(function(){for(let o of l.scenes)o.updateMatrixWorld();e(l)})}).catch(n)}_markDefs(){let e=this.json.nodes||[],n=this.json.skins||[],a=this.json.meshes||[];for(let i=0,s=n.length;i<s;i++){let r=n[i].joints;for(let l=0,o=r.length;l<o;l++)e[r[l]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(a[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,a){if(e.refs[n]<=1)return a;let i=a.clone(),s=(r,l)=>{let o=this.associations.get(r);o!=null&&this.associations.set(l,o);for(let[u,c]of r.children.entries())s(c,l.children[u])};return s(a,i),i.name+="_instance_"+e.uses[n]++,i}_invokeOne(e){let n=Object.values(this.plugins);n.push(this);for(let a=0;a<n.length;a++){let i=e(n[a]);if(i)return i}return null}_invokeAll(e){let n=Object.values(this.plugins);n.unshift(this);let a=[];for(let i=0;i<n.length;i++){let s=e(n[i]);s&&a.push(s)}return a}getDependency(e,n){let a=e+":"+n,i=this.cache.get(a);if(!i){switch(e){case"scene":i=this.loadScene(n);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(n)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(n)});break;case"accessor":i=this.loadAccessor(n);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(n)});break;case"buffer":i=this.loadBuffer(n);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(n)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(n)});break;case"skin":i=this.loadSkin(n);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(n)});break;case"camera":i=this.loadCamera(n);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,n)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(a,i)}return i}getDependencies(e){let n=this.cache.get(e);if(!n){let a=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(i.map(function(s,r){return a.getDependency(e,r)})),this.cache.add(e,n)}return n}loadBuffer(e){let n=this.json.buffers[e],a=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,r){a.load(as.resolveURL(n.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){let n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(a){let i=n.byteLength||0,s=n.byteOffset||0;return a.slice(s,s+i)})}loadAccessor(e){let n=this,a=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let r=Nx[i.type],l=Dl[i.componentType],o=i.normalized===!0,u=new l(i.count*r);return Promise.resolve(new Ht(u,r,o))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){let l=r[0],o=Nx[i.type],u=Dl[i.componentType],c=u.BYTES_PER_ELEMENT,d=c*o,f=i.byteOffset||0,h=i.bufferView!==void 0?a.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,y,m;if(h&&h!==d){let p=Math.floor(f/h),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,v=n.cache.get(x);v||(y=new u(l,p*h,i.count*h/c),v=new Zs(y,h/c),n.cache.add(x,v)),m=new Ks(v,o,f%h/c,g)}else l===null?y=new u(i.count*o):y=new u(l,f,i.count*o),m=new Ht(y,o,g);if(i.sparse!==void 0){let p=Nx.SCALAR,x=Dl[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,C=new x(r[1],v,i.sparse.count*p),T=new u(r[2],M,i.sparse.count*o);l!==null&&(m=new Ht(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let L=0,_=C.length;L<_;L++){let w=C[L];if(m.setX(w,T[L*o]),o>=2&&m.setY(w,T[L*o+1]),o>=3&&m.setZ(w,T[L*o+2]),o>=4&&m.setW(w,T[L*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let n=this.json,a=this.options,s=n.textures[e].source,r=n.images[s],l=this.textureLoader;if(r.uri){let o=a.manager.getHandler(r.uri);o!==null&&(l=o)}return this.loadTextureImage(e,s,l)}loadTextureImage(e,n,a){let i=this,s=this.json,r=s.textures[e],l=s.images[n],o=(l.uri||l.bufferView)+":"+r.sampler;if(this.textureCache[o])return this.textureCache[o];let u=this.loadImageSource(n,a).then(function(c){c.flipY=!1,c.name=r.name||l.name||"",c.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(c.name=l.uri);let f=(s.samplers||{})[r.sampler]||{};return c.magFilter=mT[f.magFilter]||Qt,c.minFilter=mT[f.minFilter]||ya,c.wrapS=gT[f.wrapS]||Ys,c.wrapT=gT[f.wrapT]||Ys,c.generateMipmaps=!c.isCompressedTexture&&c.minFilter!==jt&&c.minFilter!==Qt,i.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[o]=u,u}loadImageSource(e,n){let a=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let r=i.images[e],l=self.URL||self.webkitURL,o=r.uri||"",u=!1;if(r.bufferView!==void 0)o=a.getDependency("bufferView",r.bufferView).then(function(d){u=!0;let f=new Blob([d],{type:r.mimeType});return o=l.createObjectURL(f),o});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let c=Promise.resolve(o).then(function(d){return new Promise(function(f,h){let g=f;n.isImageBitmapLoader===!0&&(g=function(y){let m=new ln(y);m.needsUpdate=!0,f(m)}),n.load(as.resolveURL(d,s.path),g,void 0,h)})}).then(function(d){return u===!0&&l.revokeObjectURL(o),Li(d,r),d.userData.mimeType=r.mimeType||eD(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),d});return this.sourceCache[e]=c,c}assignTexture(e,n,a,i){let s=this;return this.getDependency("texture",a.index).then(function(r){if(!r)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(r=r.clone(),r.channel=a.texCoord),s.extensions[je.KHR_TEXTURE_TRANSFORM]){let l=a.extensions!==void 0?a.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(l){let o=s.associations.get(r);r=s.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(r,l),s.associations.set(r,o)}}return i!==void 0&&(r.colorSpace=i),e[n]=r,r})}assignFinalMaterial(e){let n=e.geometry,a=e.material,i=n.attributes.tangent===void 0,s=n.attributes.color!==void 0,r=n.attributes.normal===void 0;if(e.isPoints){let l="PointsMaterial:"+a.uuid,o=this.cache.get(l);o||(o=new _l,zn.prototype.copy.call(o,a),o.color.copy(a.color),o.map=a.map,o.sizeAttenuation=!1,this.cache.add(l,o)),a=o}else if(e.isLine){let l="LineBasicMaterial:"+a.uuid,o=this.cache.get(l);o||(o=new vl,zn.prototype.copy.call(o,a),o.color.copy(a.color),o.map=a.map,this.cache.add(l,o)),a=o}if(i||s||r){let l="ClonedMaterial:"+a.uuid+":";i&&(l+="derivative-tangents:"),s&&(l+="vertex-colors:"),r&&(l+="flat-shading:");let o=this.cache.get(l);o||(o=a.clone(),s&&(o.vertexColors=!0),r&&(o.flatShading=!0),i&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(l,o),this.associations.set(o,this.associations.get(a))),a=o}e.material=a}getMaterialType(){return yi}loadMaterial(e){let n=this,a=this.json,i=this.extensions,s=a.materials[e],r,l={},o=s.extensions||{},u=[];if(o[je.KHR_MATERIALS_UNLIT]){let d=i[je.KHR_MATERIALS_UNLIT];r=d.getMaterialType(),u.push(d.extendParams(l,s,n))}else{let d=s.pbrMetallicRoughness||{};if(l.color=new Re(1,1,1),l.opacity=1,Array.isArray(d.baseColorFactor)){let f=d.baseColorFactor;l.color.setRGB(f[0],f[1],f[2],bn),l.opacity=f[3]}d.baseColorTexture!==void 0&&u.push(n.assignTexture(l,"map",d.baseColorTexture,Lt)),l.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,l.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(u.push(n.assignTexture(l,"metalnessMap",d.metallicRoughnessTexture)),u.push(n.assignTexture(l,"roughnessMap",d.metallicRoughnessTexture))),r=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,l)})))}s.doubleSided===!0&&(l.side=Na);let c=s.alphaMode||Bx.OPAQUE;if(c===Bx.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,c===Bx.MASK&&(l.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Ja&&(u.push(n.assignTexture(l,"normalMap",s.normalTexture)),l.normalScale=new He(1,1),s.normalTexture.scale!==void 0)){let d=s.normalTexture.scale;l.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&r!==Ja&&(u.push(n.assignTexture(l,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Ja){let d=s.emissiveFactor;l.emissive=new Re().setRGB(d[0],d[1],d[2],bn)}return s.emissiveTexture!==void 0&&r!==Ja&&u.push(n.assignTexture(l,"emissiveMap",s.emissiveTexture,Lt)),Promise.all(u).then(function(){let d=new r(l);return s.name&&(d.name=s.name),Li(d,s),n.associations.set(d,{materials:e}),s.extensions&&Zr(i,d,s),d})}createUniqueName(e){let n=Ct.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){let n=this,a=this.extensions,i=this.primitiveCache;function s(l){return a[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,n).then(function(o){return xT(o,l,n)})}let r=[];for(let l=0,o=e.length;l<o;l++){let u=e[l],c=$3(u),d=i[c];if(d)r.push(d.promise);else{let f;u.extensions&&u.extensions[je.KHR_DRACO_MESH_COMPRESSION]?f=s(u):f=xT(new Tn,u,n),i[c]={primitive:u,promise:f},r.push(f)}}return Promise.all(r)}loadMesh(e){let n=this,a=this.json,i=this.extensions,s=a.meshes[e],r=s.primitives,l=[];for(let o=0,u=r.length;o<u;o++){let c=r[o].material===void 0?J3(this.cache):this.getDependency("material",r[o].material);l.push(c)}return l.push(n.loadGeometries(r)),Promise.all(l).then(function(o){let u=o.slice(0,o.length-1),c=o[o.length-1],d=[];for(let h=0,g=c.length;h<g;h++){let y=c[h],m=r[h],p,x=u[h];if(m.mode===Ba.TRIANGLES||m.mode===Ba.TRIANGLE_STRIP||m.mode===Ba.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new ic(y,x):new xt(y,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Ba.TRIANGLE_STRIP?p.geometry=Ox(p.geometry,Ic):m.mode===Ba.TRIANGLE_FAN&&(p.geometry=Ox(p.geometry,Cl));else if(m.mode===Ba.LINES)p=new rc(y,x);else if(m.mode===Ba.LINE_STRIP)p=new zr(y,x);else if(m.mode===Ba.LINE_LOOP)p=new oc(y,x);else if(m.mode===Ba.POINTS)p=new lc(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Q3(p,s),p.name=n.createUniqueName(s.name||"mesh_"+e),Li(p,s),m.extensions&&Zr(i,p,m),n.assignFinalMaterial(p),d.push(p)}for(let h=0,g=d.length;h<g;h++)n.associations.set(d[h],{meshes:e,primitives:h});if(d.length===1)return s.extensions&&Zr(i,d[0],s),d[0];let f=new jn;s.extensions&&Zr(i,f,s),n.associations.set(f,{meshes:e});for(let h=0,g=d.length;h<g;h++)f.add(d[h]);return f})}loadCamera(e){let n,a=this.json.cameras[e],i=a[a.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?n=new an(Wt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):a.type==="orthographic"&&(n=new er(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),a.name&&(n.name=this.createUniqueName(a.name)),Li(n,a),Promise.resolve(n)}loadSkin(e){let n=this.json.skins[e],a=[];for(let i=0,s=n.joints.length;i<s;i++)a.push(this._loadNodeShallow(n.joints[i]));return n.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",n.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(i){let s=i.pop(),r=i,l=[],o=[];for(let u=0,c=r.length;u<c;u++){let d=r[u];if(d){l.push(d);let f=new Ne;s!==null&&f.fromArray(s.array,u*16),o.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[u])}return new sc(l,o)})}loadAnimation(e){let n=this.json,a=this,i=n.animations[e],s=i.name?i.name:"animation_"+e,r=[],l=[],o=[],u=[],c=[];for(let d=0,f=i.channels.length;d<f;d++){let h=i.channels[d],g=i.samplers[h.sampler],y=h.target,m=y.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;y.node!==void 0&&(r.push(this.getDependency("node",m)),l.push(this.getDependency("accessor",p)),o.push(this.getDependency("accessor",x)),u.push(g),c.push(y))}return Promise.all([Promise.all(r),Promise.all(l),Promise.all(o),Promise.all(u),Promise.all(c)]).then(function(d){let f=d[0],h=d[1],g=d[2],y=d[3],m=d[4],p=[];for(let v=0,M=f.length;v<M;v++){let C=f[v],T=h[v],L=g[v],_=y[v],w=m[v];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();let E=a._createAnimationTracks(C,T,L,_,w);if(E)for(let I=0;I<E.length;I++)p.push(E[I])}let x=new pc(s,void 0,p);return Li(x,i),x})}createNodeMesh(e){let n=this.json,a=this,i=n.nodes[e];return i.mesh===void 0?null:a.getDependency("mesh",i.mesh).then(function(s){let r=a._getNodeRef(a.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(l){if(l.isMesh)for(let o=0,u=i.weights.length;o<u;o++)l.morphTargetInfluences[o]=i.weights[o]}),r})}loadNode(e){let n=this.json,a=this,i=n.nodes[e],s=a._loadNodeShallow(e),r=[],l=i.children||[];for(let u=0,c=l.length;u<c;u++)r.push(a.getDependency("node",l[u]));let o=i.skin===void 0?Promise.resolve(null):a.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),o]).then(function(u){let c=u[0],d=u[1],f=u[2];f!==null&&c.traverse(function(h){h.isSkinnedMesh&&h.bind(f,tD)});for(let h=0,g=d.length;h<g;h++)c.add(d[h]);if(c.userData.pivot!==void 0&&d.length>0){let h=c.userData.pivot,g=d[0];c.pivot=new B().fromArray(h),c.position.x-=h[0],c.position.y-=h[1],c.position.z-=h[2],g.position.set(0,0,0),delete c.userData.pivot}return c})}_loadNodeShallow(e){let n=this.json,a=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=n.nodes[e],r=s.name?i.createUniqueName(s.name):"",l=[],o=i._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return o&&l.push(o),s.camera!==void 0&&l.push(i.getDependency("camera",s.camera).then(function(u){return i._getNodeRef(i.cameraCache,s.camera,u)})),i._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){l.push(u)}),this.nodeCache[e]=Promise.all(l).then(function(u){let c;if(s.isBone===!0?c=new gl:u.length>1?c=new jn:u.length===1?c=u[0]:c=new Rt,c!==u[0])for(let d=0,f=u.length;d<f;d++)c.add(u[d]);if(s.name&&(c.userData.name=s.name,c.name=r),Li(c,s),s.extensions&&Zr(a,c,s),s.matrix!==void 0){let d=new Ne;d.fromArray(s.matrix),c.applyMatrix4(d)}else s.translation!==void 0&&c.position.fromArray(s.translation),s.rotation!==void 0&&c.quaternion.fromArray(s.rotation),s.scale!==void 0&&c.scale.fromArray(s.scale);if(!i.associations.has(c))i.associations.set(c,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let d=i.associations.get(c);i.associations.set(c,{...d})}return i.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){let n=this.extensions,a=this.json.scenes[e],i=this,s=new jn;a.name&&(s.name=i.createUniqueName(a.name)),Li(s,a),a.extensions&&Zr(n,s,a);let r=a.nodes||[],l=[];for(let o=0,u=r.length;o<u;o++)l.push(i.getDependency("node",r[o]));return Promise.all(l).then(function(o){for(let c=0,d=o.length;c<d;c++){let f=o[c];f.parent!==null?s.add(dT(f)):s.add(f)}let u=c=>{let d=new Map;for(let[f,h]of i.associations)(f instanceof zn||f instanceof ln)&&d.set(f,h);return c.traverse(f=>{let h=i.associations.get(f);h!=null&&d.set(f,h)}),d};return i.associations=u(s),s})}_createAnimationTracks(e,n,a,i,s){let r=[],l=e.name?e.name:e.uuid,o=[];function u(h){h.morphTargetInfluences&&o.push(h.name?h.name:h.uuid)}rr[s.path]===rr.weights?(u(e),e.isGroup&&e.children.forEach(u)):o.push(l);let c;switch(rr[s.path]){case rr.weights:c=_i;break;case rr.rotation:c=Si;break;case rr.translation:case rr.scale:c=Mi;break;default:switch(a.itemSize){case 1:c=_i;break;case 2:case 3:default:c=Mi;break}break}let d=i.interpolation!==void 0?K3[i.interpolation]:Nr,f=this._getArrayFromAccessor(a);for(let h=0,g=o.length;h<g;h++){let y=new c(o[h]+"."+rr[s.path],n.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),r.push(y)}return r}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){let a=ly(n.constructor),i=new Float32Array(n.length);for(let s=0,r=n.length;s<r;s++)i[s]=n[s]*a;n=i}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){let i=this instanceof Si?ry:gp;return new i(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function nD(t,e,n){let a=e.attributes,i=new xa;if(a.POSITION!==void 0){let l=n.json.accessors[a.POSITION],o=l.min,u=l.max;if(o!==void 0&&u!==void 0){if(i.set(new B(o[0],o[1],o[2]),new B(u[0],u[1],u[2])),l.normalized){let c=ly(Dl[l.componentType]);i.min.multiplyScalar(c),i.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let l=new B,o=new B;for(let u=0,c=s.length;u<c;u++){let d=s[u];if(d.POSITION!==void 0){let f=n.json.accessors[d.POSITION],h=f.min,g=f.max;if(h!==void 0&&g!==void 0){if(o.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),o.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),o.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),f.normalized){let y=ly(Dl[f.componentType]);o.multiplyScalar(y)}l.max(o)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(l)}t.boundingBox=i;let r=new Qn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,t.boundingSphere=r}function xT(t,e,n){let a=e.attributes,i=[];function s(r,l){return n.getDependency("accessor",r).then(function(o){t.setAttribute(l,o)})}for(let r in a){let l=oy[r]||r.toLowerCase();l in t.attributes||i.push(s(a[r],l))}if(e.indices!==void 0&&!t.index){let r=n.getDependency("accessor",e.indices).then(function(l){t.setIndex(l)});i.push(r)}return qe.workingColorSpace!==bn&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),Li(t,e),nD(t,e,n),Promise.all(i).then(function(){return e.targets!==void 0?j3(t,e.targets,n):t})}var xp=class extends Fr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Qs;e.deleteAttribute("uv");let n=new yi({side:An}),a=new yi,i=new Gr(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new xt(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let r=new kr(e,a,6),l=new Rt;l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),l.updateMatrix(),r.setMatrixAt(0,l.matrix),l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),l.updateMatrix(),r.setMatrixAt(1,l.matrix),l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),l.updateMatrix(),r.setMatrixAt(2,l.matrix),l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),l.updateMatrix(),r.setMatrixAt(3,l.matrix),l.position.set(2.291,-.756,-2.621),l.rotation.set(0,-.286,0),l.scale.set(1.546,1.552,1.496),l.updateMatrix(),r.setMatrixAt(4,l.matrix),l.position.set(-2.193,-.369,-5.547),l.rotation.set(0,.516,0),l.scale.set(3.875,3.487,2.986),l.updateMatrix(),r.setMatrixAt(5,l.matrix),this.add(r);let o=new xt(e,Pl(50));o.position.set(-16.116,14.37,8.208),o.scale.set(.1,2.428,2.739),this.add(o);let u=new xt(e,Pl(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);let c=new xt(e,Pl(17));c.position.set(14.904,12.198,-1.832),c.scale.set(.15,4.265,6.331),this.add(c);let d=new xt(e,Pl(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new xt(e,Pl(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let h=new xt(e,Pl(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){let e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(let n of e)n.dispose()}};function Pl(t){return new dc({color:0,emissive:16777215,emissiveIntensity:t})}var Kr=wi(Nc(),1),sD;function rD(){return sD??=(async()=>{let t=new hp().setDecoderPath(new URL("./assets/draco/",location.href).href).setWorkerLimit(2);try{return(await new pp().setDRACOLoader(t).loadAsync(new URL("./assets/frame.glb",location.href).href)).scene}finally{t.dispose()}})()}var cy={silver:"#c1b6a8",ink:"#34373c",blue:"#8094ad"},oD=n0;function vp({state:t,hero:e=!1,scrollRoot:n,onScreenTap:a,className:i="",sequence:s="opening"}){let r=(0,$a.useRef)(null),l=(0,$a.useRef)(t),o=(0,$a.useRef)(a);l.current=t,o.current=a;let[u,c]=(0,$a.useState)(!0),[d,f]=(0,$a.useState)(!1),[h,g]=(0,$a.useState)(!e||s==="opening");return(0,$a.useEffect)(()=>{if(h||!r.current)return;let y=new IntersectionObserver(m=>{m.some(p=>p.isIntersecting)&&(g(!0),y.disconnect())},{rootMargin:"200px"});return y.observe(r.current),()=>y.disconnect()},[h]),(0,$a.useEffect)(()=>{let y=r.current;if(!y||!h)return;let m=!1,p=0,x=!0,v=!1,M=0,C=0,T=matchMedia("(prefers-reduced-motion: reduce)").matches,L=new Fr,_=new an(32,1,.05,50),w;try{w=new up({alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch{f(!0),c(!1);return}w.setPixelRatio(Math.min(devicePixelRatio,2)),w.outputColorSpace=Lt,w.toneMapping=Mc,w.toneMappingExposure=1.15;let E=y.closest("[data-fold-bleed]")??y,I=E===y?0:48,F=w.domElement;F.style.position="absolute",F.style.maxWidth="none",y.appendChild(F);let q=new El(w),Y=new xp,U=q.fromScene(Y,.04);L.environment=U.texture,Y.dispose(),q.dispose(),L.add(new gc(16777215,6186612,2.4));let H=new tr(16777215,3);H.position.set(-3,5,4),L.add(H);let G=new tr(12179455,2);G.position.set(3,1,-2),L.add(G);let Q=new jn,ne=new jn;Q.add(ne),L.add(Q);let ie=uT(oD,["lagoon","aurora"],eb);Object.values(ie.textures).forEach(P=>{P.anisotropy=Math.min(8,w.capabilities.getMaxAnisotropy())});let Me=P=>{let ee=fT(P?ie.textures.cover:ie.textures.inner,P,ie.textures.back);return cT(ee,ee.uniforms.image.value),ee},be=[!1,!0].map(P=>({material:Me(P),cover:P})),tt=[],ot=new Ne,Be=new $s(1,2.216),J=Be.getAttribute("uv");for(let P=0;P<J.count;P++)J.setX(P,.4995+J.getX(P)*.001);let de=new xt(Be,be[0].material);ne.add(de);let le=[],Ee=[],Pe=[],Ie=[],wt=[],Ge,nt;rD().then(async P=>{if(m)return;let ee=P.clone(!0),te;if(ee.traverse(W=>{if(!(W instanceof xt))return;let pe=W.userData.screen;if(pe){let xe=Me(pe==="cover");W.material=xe,tt.push(xe),Ie.push(W),pe==="cover"&&wt.push(W)}else{let xe=W.material.clone();Ee.push(xe),W.material=xe,xe.metalness>.5&&xe.color.r>.2&&(xe.color.set(cy[l.current.finish]),xe.roughness=.23,Pe.push(xe)),xe.envMapIntensity=1.15,W.userData.sourceMesh===25&&(te=xe,xe.color.set(cy[l.current.finish]),xe.metalness=.55,xe.roughness=.28,Pe.includes(xe)||Pe.push(xe))}}),Ge=ee.getObjectByName("left-half"),nt=ee.getObjectByName("right-half"),ne.add(ee),te&&nt){let W=new xt(new $s(.4,.47),te);W.position.set(.8162,-.0154,-.1152),W.rotation.y=Math.PI,nt.add(W),le.push(W.geometry)}await w.compileAsync(L,_),!m&&(v=!0,c(!1),y.dataset.ready="true")}).catch(P=>{m||(console.error("Unfold device failed to load",P),f(!0),c(!1))});let dt=6.5,We=()=>{let P=y.offsetWidth,ee=y.offsetHeight;if(!P||!ee)return;let te=0,W=0,pe=y;for(;pe&&pe!==E;)te+=pe.offsetLeft,W+=pe.offsetTop,pe=pe.offsetParent;if(!pe){let Fa=y.getBoundingClientRect(),ka=E.getBoundingClientRect();te=Fa.left-ka.left,W=Fa.top-ka.top}let xe=(E===y?P:E.clientWidth)+I*2,at=(E===y?ee:E.clientHeight)+I*2,Ve=E===y?0:te+I,vn=E===y?0:W+I;w.setSize(xe,at),F.style.left=`${-Ve}px`,F.style.top=`${-vn}px`,_.aspect=P/ee;let Cn=l.current.opening>.5&&!e?1.75:1.18;dt=Math.max(4.1,Cn/(Math.tan(Wt.degToRad(16))*_.aspect),1.39/Math.tan(Wt.degToRad(16))),y.dataset.framing=_.aspect.toFixed(3);let hn=_.near*Math.tan(Wt.degToRad(16)),Vn=hn*_.aspect,qn=2*Vn/P,na=2*hn/ee,Wn=-Vn-Ve*qn,Sa=hn+vn*na;_.projectionMatrix.makePerspective(Wn,Wn+xe*qn,Sa,Sa-at*na,_.near,_.far),_.projectionMatrixInverse.copy(_.projectionMatrix).invert()},kt=new ResizeObserver(We);kt.observe(y),E!==y&&kt.observe(E),We();let Mt=P=>{let ee=F.getBoundingClientRect();dn.set((P.clientX-ee.left)/ee.width*2-1,-((P.clientY-ee.top)/ee.height)*2+1)},dn=new He,D={active:!1,x:0,y:0,moved:!1},ct={x:0,y:0},Ze=new Sl,ht=P=>(Mt(P),Ze.setFromCamera(dn,_),Ze.intersectObjects(wt,!1)[0]?.uv?.x),fe=P=>{if(!v||ae<.85)return!1;let ee=ht(P);return ee===void 0?!1:(ie.pager.grab(),ie.pager.drag(ee),P.currentTarget.setPointerCapture(P.pointerId),P.preventDefault(),!0)},Pt=P=>{fe(P)||e||(D.active=!0,D.x=P.clientX,D.y=P.clientY,D.moved=!1,Mt(P),y.setPointerCapture(P.pointerId))},A=P=>{fe(P)},S=P=>{if(ie.pager.dragging){let ee=ht(P);ee!==void 0&&ie.pager.drag(ee);return}if(Mt(P),D.active){let ee=P.clientX-D.x,te=P.clientY-D.y;Math.abs(ee)+Math.abs(te)>2&&(D.moved=!0),ct.y+=ee*.006,ct.x=Wt.clamp(ct.x+te*.004,-.7,.7),D.x=P.clientX,D.y=P.clientY}},N=()=>{if(ie.pager.dragging){ie.pager.release();return}if(D.active&&!D.moved){let P=new Sl;P.setFromCamera(dn,_),P.intersectObjects(Ie).length&&o.current?.()}D.active=!1},Z=P=>{e||((P.key==="ArrowLeft"||P.key==="ArrowRight")&&(P.preventDefault(),ct.y+=P.key==="ArrowRight"?.15:-.15),P.key==="Enter"&&o.current?.())};y.addEventListener("pointerdown",Pt),y.addEventListener("pointermove",S),y.addEventListener("pointerup",N),y.addEventListener("pointercancel",N),y.addEventListener("keydown",Z),e&&E!==y&&(E.addEventListener("pointerdown",A),E.addEventListener("pointermove",S),E.addEventListener("pointerup",N),E.addEventListener("pointercancel",N));let $=t.resetKey??0,se=-1,ae=e?.015:t.opening,X=0,K=.08,he=-.23,ve=-.08,ue=t.pose,oe="",Oe="",ke=-1,st=0,R=P=>{if(m)return;if(p=requestAnimationFrame(R),!x||document.hidden||e&&document.querySelector(".fold-explorer")){M=P;return}let ee=Math.min((P-(M||P))/1e3,.04);M=P;let te=T?0:P/1e3,W=l.current,pe=W.opening,xe=.07,at=-.2,Ve=-.04,vn=1;if((W.resetKey??0)!==$&&(ct.x=0,ct.y=0,$=W.resetKey??0),n?.current){let hn=n.current.getBoundingClientRect(),Vn=Wt.clamp(-hn.top/Math.max(1,hn.height-innerHeight),0,1),qn=s==="opening"?[{o:.015,x:.04,y:-.16,z:-.04,s:1},{o:.52,x:.12,y:.32,z:-.06,s:1.04},{o:1,x:0,y:0,z:0,s:1.13},{o:1,x:.02,y:Math.PI-.2,z:-.06,s:1.04}]:[{o:1,x:.02,y:-.14,z:Math.PI/2,s:1.04},{o:1,x:0,y:0,z:0,s:1.16},{o:.55,x:-.5,y:-.28,z:Math.PI/2,s:1},{o:.015,x:.05,y:-.16,z:0,s:1.04}],na=Vn*(qn.length-1),Wn=Math.min(qn.length-2,Math.floor(na)),Sa=Wt.smoothstep(na-Wn,0,1),Fa=qn[Wn],ka=qn[Wn+1];if(pe=Wt.lerp(Fa.o,ka.o,Sa),xe=Wt.lerp(Fa.x,ka.x,Sa),at=Wt.lerp(Fa.y,ka.y,Sa),Ve=Wt.lerp(Fa.z,ka.z,Sa),vn=Wt.lerp(Fa.s,ka.s,Sa),T){let ls=qn[Math.round(na)];pe=ls.o,xe=ls.x,at=ls.y,Ve=ls.z,vn=ls.s}let os=Math.min(3,Math.floor(na+.35));os!==se&&(n.current.dataset.phase=String(os),se=os),n.current.style.setProperty("--fold-copy-opacity",String(T?1:1-Wt.smoothstep(Vn,.01,.18))),n.current.style.setProperty("--fold-copy-shift",`${T?0:-60*Math.min(1,Vn*4)}px`),n.current.style.setProperty("--fold-scene-shift",`${T?0:-35*Math.min(1,Vn*4)}px`),n.current.style.setProperty("--fold-progress",String(Vn)),y.dataset.scroll=Vn.toFixed(3)}else switch(ue!==W.pose&&(ct.x=0,ct.y=0,ue=W.pose),W.pose){case"landscape":xe=0,at=0,Ve=0;break;case"portrait":xe=.04,at=-.16,Ve=Math.PI/2;break;case"rear":xe=.08,at=Math.PI-.2,Ve=-.04;break;case"closed":xe=.04,at=-.16,Ve=-.04;break;case"desk":xe=-.6,at=-.5,Ve=Math.PI/2;break;case"tent":xe=Math.PI/2+.12,at=-.28,Ve=-Math.PI/2;break}T?ae=pe:(X+=((pe-ae)*70-X*17)*ee,ae+=X*ee);let Cn=T?1:1-Math.exp(-5*ee);if(K=Wt.lerp(K,xe+ct.x+(e?dn.y*.018:0),Cn),he=Wt.lerp(he,at+ct.y+(W.autoRotate&&!T?Math.sin(te*.18)*.45:0),Cn),ve=Wt.lerp(ve,Ve,Cn),Q.rotation.set(K,he,ve),Q.scale.setScalar(vn),Q.position.y=T?0:Math.sin(te*.65)*.025,Ge&&nt){let hn=(1-Wt.clamp(ae,0,1))*Math.PI;Ge.rotation.y=hn,nt.rotation.y=0;let Vn=-.0049092;Ge.position.set(-Math.sin(hn)*Vn,0,Vn*(1-Math.cos(hn))),ne.position.set(-.78*(1-ae),0,0),de.scale.x=.001,de.position.z=-.0101,Q.updateMatrixWorld(!0),ot.copy(ne.matrixWorld).invert(),Ie.forEach(qn=>{let na=qn.material;na.uniforms.fold.value=hn,na.uniforms.surfaceToFrame.value.multiplyMatrices(ot,qn.matrixWorld)}),be[0].material.uniforms.fold.value=hn,be[0].material.uniforms.surfaceToFrame.value.identity()}dt=Math.max(4.4,(1.02+.79*ae)/(Math.tan(Wt.degToRad(16))*_.aspect),1.4/Math.tan(Wt.degToRad(16)))*vn,_.position.set(0,0,dt),_.lookAt(0,0,0),W.finish!==Oe&&(Pe.forEach(hn=>hn.color.set(cy[W.finish])),Oe=W.finish),ie.update((W.projectPage+ +(W.content==="aurora"))%2,Math.sin(ve)>.7?"portrait":"landscape"),ie.tick(ee,ae>.85),y.dataset.coverPage=ie.pager.page,v&&w.render(L,_),y.dataset.opening=ae.toFixed(3),y.dataset.pose=W.pose};p=requestAnimationFrame(R);let re=new IntersectionObserver(P=>{x=P[0].isIntersecting},{rootMargin:"100px"});return re.observe(y),()=>{m=!0,cancelAnimationFrame(p),kt.disconnect(),re.disconnect(),y.removeEventListener("pointerdown",Pt),y.removeEventListener("pointermove",S),y.removeEventListener("pointerup",N),y.removeEventListener("pointercancel",N),y.removeEventListener("keydown",Z),E.removeEventListener("pointerdown",A),E.removeEventListener("pointermove",S),E.removeEventListener("pointerup",N),E.removeEventListener("pointercancel",N),ie.dispose(),tt.forEach(P=>P.dispose()),be.forEach(P=>P.material.dispose()),Ee.forEach(P=>P.dispose()),le.forEach(P=>P.dispose()),Be.dispose(),U.dispose(),w.dispose(),w.domElement.remove()}},[e,n,s,h]),(0,Kr.jsxs)("div",{ref:r,className:`fold-scene ${i}`,tabIndex:e?void 0:0,role:"img","aria-label":we.scene,children:[u&&(0,Kr.jsxs)("div",{className:"fold-loading",children:[(0,Kr.jsx)("span",{}),(0,Kr.jsx)("small",{children:we.loading})]}),d&&(0,Kr.jsx)("p",{className:"fold-error",children:we.error})]})}var ce=wi(Nc(),1),lD={opening:.68,pose:"book",content:"project",finish:"silver",autoRotate:!1,projectPage:0,resetKey:0},_p={silver:we.silver,ink:we.ink,blue:we.blue},uD=[[we.closed,we.closedTitle],[we.opening,we.openingTitle],[we.full,we.fullTitle],[we.beyond,we.beyondTitle]];function cD(){let t=(0,rs.useRef)(null),e=(0,rs.useRef)(null),n=(0,rs.useRef)(null),[a,i]=(0,rs.useState)(lD),[s,r]=(0,rs.useState)(!1);(0,rs.useEffect)(()=>{if(!s)return;let o=document.activeElement,u=document.documentElement.style.overflow;document.documentElement.style.overflow="hidden",n.current?.querySelector("button")?.focus();let c=d=>{if(d.key==="Escape"&&r(!1),d.key==="Tab"){let f=Array.from(n.current?.querySelectorAll('button,input,select,[tabindex="0"]')??[]),h=f[0],g=f[f.length-1];d.shiftKey&&document.activeElement===h?(d.preventDefault(),g?.focus()):!d.shiftKey&&document.activeElement===g&&(d.preventDefault(),h?.focus())}};return window.addEventListener("keydown",c),()=>{document.documentElement.style.overflow=u,window.removeEventListener("keydown",c),o?.focus()}},[s]);let l=(0,ce.jsxs)("div",{className:"fold-finishes",children:[(0,ce.jsxs)("span",{children:[we.finish," ",(0,ce.jsx)("b",{children:_p[a.finish]})]}),Object.keys(_p).map(o=>a.finish===o?(0,ce.jsx)("i",{role:"img",className:"fold-swatch fold-current fold-swatch-"+o,"aria-label":_p[o],children:(0,ce.jsx)(Hu,{size:13})},o):(0,ce.jsx)("button",{className:"fold-swatch fold-swatch-"+o,"aria-label":_p[o],onClick:()=>i(u=>({...u,finish:o}))},o))]});return(0,ce.jsxs)("main",{className:"fold-page",children:[(0,ce.jsxs)("header",{className:"fold-nav",children:[(0,ce.jsxs)("a",{className:"fold-wordmark",href:"#fold-top",children:["unfold",(0,ce.jsx)("span",{children:"by VULK"})]}),(0,ce.jsxs)("nav",{children:[(0,ce.jsx)("a",{href:"#fold-world",children:we.experience}),(0,ce.jsxs)("button",{onClick:()=>r(!0),children:[we.explore,(0,ce.jsx)(Lr,{size:14})]})]})]}),(0,ce.jsx)("section",{ref:t,className:"fold-hero",id:"fold-top","data-phase":"0",children:(0,ce.jsxs)("div",{className:"fold-hero-sticky","data-fold-bleed":!0,children:[(0,ce.jsxs)("div",{className:"fold-hero-copy",children:[(0,ce.jsx)("p",{children:we.tagline}),(0,ce.jsxs)("h1",{children:[we.headline,(0,ce.jsx)("br",{}),(0,ce.jsx)("span",{children:we.headlineEnd})]})]}),(0,ce.jsx)(vp,{hero:!0,scrollRoot:t,state:a,className:"fold-hero-model"}),(0,ce.jsx)("div",{className:"fold-hero-caption","aria-hidden":"true",children:uD.map(([o,u],c)=>(0,ce.jsxs)("div",{"data-phase":c,children:[(0,ce.jsx)("span",{children:"0"+(c+1)+" / "+o}),(0,ce.jsx)("p",{children:u})]},o))}),(0,ce.jsxs)("div",{className:"fold-hero-bottom",children:[(0,ce.jsxs)("span",{children:[we.scroll,(0,ce.jsx)(Xo,{size:14})]}),l,(0,ce.jsxs)("button",{className:"fold-explore",onClick:()=>r(!0),children:[we.explore,(0,ce.jsx)(Lr,{size:14})]})]})]})}),(0,ce.jsxs)("section",{className:"fold-world-intro",id:"fold-world",children:[(0,ce.jsx)("span",{children:we.light}),(0,ce.jsxs)("h2",{children:[we.worldTitle,(0,ce.jsx)("br",{}),(0,ce.jsx)("em",{children:we.enter})]}),(0,ce.jsx)("p",{children:we.worldCopy})]}),(0,ce.jsx)("section",{ref:e,className:"fold-hero fold-world-journey","data-phase":"0",children:(0,ce.jsxs)("div",{className:"fold-hero-sticky","data-fold-bleed":!0,children:[(0,ce.jsx)(vp,{hero:!0,sequence:"journey",scrollRoot:e,state:{...a,projectPage:1},className:"fold-hero-model"}),(0,ce.jsx)("div",{className:"fold-hero-caption",children:[[we.vertical,we.verticalTitle],[we.open,we.openTitle],[we.balance,we.balanceTitle],[we.continuity,we.continuityTitle]].map(([o,u],c)=>(0,ce.jsxs)("div",{"data-phase":c,children:[(0,ce.jsx)("span",{children:"0"+(c+1)+" / "+o}),(0,ce.jsx)("p",{children:u})]},o))}),(0,ce.jsxs)("div",{className:"fold-hero-bottom",children:[(0,ce.jsxs)("span",{children:[we.scroll,(0,ce.jsx)(Xo,{size:14})]}),(0,ce.jsxs)("button",{className:"fold-explore",onClick:()=>r(!0),children:[we.object,(0,ce.jsx)(Lr,{size:14})]})]})]})}),(0,ce.jsxs)("section",{className:"fold-finale",children:[(0,ce.jsx)("p",{children:we.next}),(0,ce.jsx)("h2",{children:we.nextTitle}),(0,ce.jsxs)("button",{onClick:()=>r(!0),children:[we.object,(0,ce.jsx)(Yo,{size:18})]})]}),(0,ce.jsxs)("footer",{className:"fold-footer",children:[(0,ce.jsxs)("a",{className:"fold-wordmark",href:"#fold-top",children:["unfold",(0,ce.jsx)("span",{children:"by VULK"})]}),(0,ce.jsxs)("a",{href:"#fold-top",children:[we.back,(0,ce.jsx)(Yo,{size:15})]})]}),s&&(0,ce.jsxs)("div",{className:"fold-explorer","data-fold-bleed":!0,ref:n,role:"dialog","aria-modal":"true","aria-label":we.explore,children:[(0,ce.jsxs)("header",{children:[(0,ce.jsx)("span",{className:"fold-wordmark",children:"unfold"}),(0,ce.jsx)("button",{onClick:()=>r(!1),"aria-label":we.close,children:(0,ce.jsx)(Gu,{size:21})})]}),(0,ce.jsx)(vp,{state:a,onScreenTap:()=>i(o=>({...o,projectPage:1-o.projectPage}))}),(0,ce.jsxs)("div",{className:"fold-explorer-controls",children:[(0,ce.jsxs)("div",{className:"fold-angles",children:[(0,ce.jsx)("button",{"aria-pressed":a.pose==="landscape",onClick:()=>i(o=>({...o,pose:"landscape",resetKey:(o.resetKey??0)+1})),children:we.front}),(0,ce.jsx)("button",{"aria-pressed":a.pose==="rear",onClick:()=>i(o=>({...o,pose:"rear",resetKey:(o.resetKey??0)+1})),children:we.rear}),(0,ce.jsx)("button",{onClick:()=>i(o=>({...o,opening:o.opening>.5?0:1})),children:a.opening>.5?we.fold:we.unfold})]}),(0,ce.jsxs)("label",{className:"fold-angle-slider",children:[(0,ce.jsx)("span",{children:we.angle}),(0,ce.jsx)("input",{"aria-label":we.angle,type:"range",min:"0",max:"180",value:Math.round(a.opening*180),onChange:o=>i(u=>({...u,opening:Number(o.target.value)/180}))}),(0,ce.jsxs)("output",{children:[Math.round(a.opening*180),"\xB0"]})]}),(0,ce.jsx)("div",{className:"fold-wallpapers","aria-label":we.wallpaper,children:[["lagoon",we.lagoon],["aurora",we.aurora]].map(([o,u],c)=>(0,ce.jsxs)("button",{"aria-label":u,"aria-pressed":a.projectPage===c,onClick:()=>i(d=>({...d,projectPage:c,content:"project"})),children:[(0,ce.jsx)("img",{src:"./assets/"+o+".webp",alt:""}),(0,ce.jsx)("span",{children:u})]},o))})]}),(0,ce.jsxs)("footer",{children:[l,(0,ce.jsx)("span",{children:we.drag})]})]})]})}(0,MT.createRoot)(document.getElementById("root")).render((0,ce.jsx)(cD,{}));
