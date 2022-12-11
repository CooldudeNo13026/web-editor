import{j as M,R as T,r as c,E as Pe}from"./index-3c0d54ad.js";function Re(e,t,r){return`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
        <style>${t}</style>
	</head>
	<body>
        ${e}
        <script defer>${r}</script>
    </body>
</html>`}const Te=({code:e})=>M.exports.jsx("iframe",{className:"w-1/2 h-1/2",srcDoc:e,frameBorder:0});function Se(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ce(Object(r),!0).forEach(function(n){Se(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ce(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,s;for(s=0;s<n.length;s++)i=n[s],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Ie(e,t){if(e==null)return{};var r=Ce(e,t),n,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}function Ae(e,t){return De(e)||Ne(e,t)||$e(e,t)||qe()}function De(e){if(Array.isArray(e))return e}function Ne(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var r=[],n=!0,i=!1,s=void 0;try{for(var a=e[Symbol.iterator](),g;!(n=(g=a.next()).done)&&(r.push(g.value),!(t&&r.length===t));n=!0);}catch(f){i=!0,s=f}finally{try{!n&&a.return!=null&&a.return()}finally{if(i)throw s}}return r}}function $e(e,t){if(!!e){if(typeof e=="string")return ue(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ue(e,t)}}function ue(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function qe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Le(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?le(Object(r),!0).forEach(function(n){Le(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ue(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return t.reduceRight(function(i,s){return s(i)},n)}}function D(e){return function t(){for(var r=this,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,g=new Array(a),f=0;f<a;f++)g[f]=arguments[f];return t.apply(r,[].concat(i,g))}}}function W(e){return{}.toString.call(e).includes("Object")}function Fe(e){return!Object.keys(e).length}function $(e){return typeof e=="function"}function ke(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function We(e,t){return W(t)||E("changeType"),Object.keys(t).some(function(r){return!ke(e,r)})&&E("changeField"),t}function He(e){$(e)||E("selectorType")}function ze(e){$(e)||W(e)||E("handlerType"),W(e)&&Object.values(e).some(function(t){return!$(t)})&&E("handlersType")}function Ve(e){e||E("initialIsRequired"),W(e)||E("initialType"),Fe(e)&&E("initialContent")}function Be(e,t){throw new Error(e[t]||e.default)}var Ye={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},E=D(Be)(Ye),F={changes:We,selector:He,handler:ze,initial:Ve};function Je(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};F.initial(e),F.handler(t);var r={current:e},n=D(_e)(r,t),i=D(Ge)(r),s=D(F.changes)(e),a=D(Ke)(r);function g(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(R){return R};return F.selector(h),h(r.current)}function f(h){Ue(n,i,s,a)(h)}return[g,f]}function Ke(e,t){return $(t)?t(e.current):t}function Ge(e,t){return e.current=pe(pe({},e.current),t),t}function _e(e,t,r){return $(t)?t(e.current):Object.keys(r).forEach(function(n){var i;return(i=t[n])===null||i===void 0?void 0:i.call(t,e.current[n])}),r}var Qe={create:Je},Xe={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"}};function Ze(e){return function t(){for(var r=this,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,g=new Array(a),f=0;f<a;f++)g[f]=arguments[f];return t.apply(r,[].concat(i,g))}}}function et(e){return{}.toString.call(e).includes("Object")}function tt(e){return e||fe("configIsRequired"),et(e)||fe("configType"),e.urls?(rt(),{paths:{vs:e.urls.monacoBase}}):e}function rt(){console.warn(de.deprecation)}function nt(e,t){throw new Error(e[t]||e.default)}var de={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},fe=Ze(nt)(de),ot={config:tt},it=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(i){return r.reduceRight(function(s,a){return a(s)},i)}};function ge(e,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&e[r]&&Object.assign(t[r],ge(e[r],t[r]))}),ae(ae({},e),t)}var st={type:"cancelation",msg:"operation is manually canceled"};function Z(e){var t=!1,r=new Promise(function(n,i){e.then(function(s){return t?i(st):n(s)}),e.catch(i)});return r.cancel=function(){return t=!0},r}var ct=Qe.create({config:Xe,isInitialized:!1,resolve:null,reject:null,monaco:null}),he=Ae(ct,2),q=he[0],z=he[1];function at(e){var t=ot.config(e),r=t.monaco,n=Ie(t,["monaco"]);z(function(i){return{config:ge(i.config,n),monaco:r}})}function ut(){var e=q(function(t){var r=t.monaco,n=t.isInitialized,i=t.resolve;return{monaco:r,isInitialized:n,resolve:i}});if(!e.isInitialized){if(z({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Z(ee);if(window.monaco&&window.monaco.editor)return me(window.monaco),e.resolve(window.monaco),Z(ee);it(lt,ft)(dt)}return Z(ee)}function lt(e){return document.body.appendChild(e)}function pt(e){var t=document.createElement("script");return e&&(t.src=e),t}function ft(e){var t=q(function(n){var i=n.config,s=n.reject;return{config:i,reject:s}}),r=pt("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function dt(){var e=q(function(r){var n=r.config,i=r.resolve,s=r.reject;return{config:n,resolve:i,reject:s}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(r){me(r),e.resolve(r)},function(r){e.reject(r)})}function me(e){q().monaco||z({monaco:e})}function gt(){return q(function(e){var t=e.monaco;return t})}var ee=new Promise(function(e,t){return z({resolve:e,reject:t})}),ve={config:at,init:ut,__getMonacoInstance:gt},o={exports:{}},ht="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",mt=ht,vt=mt;function xe(){}function ye(){}ye.resetWarningCache=xe;var xt=function(){function e(n,i,s,a,g,f){if(f!==vt){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ye,resetWarningCache:xe};return r.PropTypes=r,r};o.exports=xt();function ne(){return ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ne.apply(this,arguments)}const yt={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};function bt({content:e}){return T.createElement("div",{style:yt},e)}const te={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function be({width:e,height:t,isEditorReady:r,loading:n,_ref:i,className:s,wrapperProps:a}){return T.createElement("section",ne({style:{...te.wrapper,width:e,height:t}},a),!r&&T.createElement(bt,{content:n}),T.createElement("div",{ref:i,style:{...te.fullWidth,...!r&&te.hide},className:s}))}be.propTypes={width:o.exports.oneOfType([o.exports.number,o.exports.string]).isRequired,height:o.exports.oneOfType([o.exports.number,o.exports.string]).isRequired,loading:o.exports.oneOfType([o.exports.element,o.exports.string]).isRequired,isEditorReady:o.exports.bool.isRequired,className:o.exports.string,wrapperProps:o.exports.object};var we=c.exports.memo(be);function Oe(e){c.exports.useEffect(e,[])}function O(e,t,r=!0){const n=c.exports.useRef(!0);c.exports.useEffect(n.current||!r?()=>{n.current=!1}:e,t)}function N(){}function H(e,t,r,n){return wt(e,n)||Ot(e,t,r,n)}function wt(e,t){return e.editor.getModel(je(e,t))}function Ot(e,t,r,n){return e.editor.createModel(t,r,n&&je(e,n))}function je(e,t){return e.Uri.parse(t)}function jt(e){return e===void 0}function Me({original:e,modified:t,language:r,originalLanguage:n,modifiedLanguage:i,originalModelPath:s,modifiedModelPath:a,keepCurrentOriginalModel:g,keepCurrentModifiedModel:f,theme:h,loading:R,options:j,height:V,width:B,className:Y,wrapperProps:J,beforeMount:K,onMount:G}){const[b,S]=c.exports.useState(!1),[P,m]=c.exports.useState(!0),w=c.exports.useRef(null),x=c.exports.useRef(null),L=c.exports.useRef(null),y=c.exports.useRef(G),u=c.exports.useRef(K);Oe(()=>{const l=ve.init();return l.then(v=>(x.current=v)&&m(!1)).catch(v=>(v==null?void 0:v.type)!=="cancelation"&&console.error("Monaco initialization: error:",v)),()=>w.current?_():l.cancel()}),O(()=>{const l=w.current.getModifiedEditor();l.getOption(x.current.editor.EditorOption.readOnly)?l.setValue(t):t!==l.getValue()&&(l.executeEdits("",[{range:l.getModel().getFullModelRange(),text:t,forceMoveMarkers:!0}]),l.pushUndoStop())},[t],b),O(()=>{w.current.getModel().original.setValue(e)},[e],b),O(()=>{const{original:l,modified:v}=w.current.getModel();x.current.editor.setModelLanguage(l,n||r),x.current.editor.setModelLanguage(v,i||r)},[r,n,i],b),O(()=>{x.current.editor.setTheme(h)},[h],b),O(()=>{w.current.updateOptions(j)},[j],b);const C=c.exports.useCallback(()=>{u.current(x.current);const l=H(x.current,e,n||r,s),v=H(x.current,t,i||r,a);w.current.setModel({original:l,modified:v})},[r,t,i,e,n,s,a]),U=c.exports.useCallback(()=>{w.current=x.current.editor.createDiffEditor(L.current,{automaticLayout:!0,...j}),C(),x.current.editor.setTheme(h),S(!0)},[j,h,C]);c.exports.useEffect(()=>{b&&y.current(w.current,x.current)},[b]),c.exports.useEffect(()=>{!P&&!b&&U()},[P,b,U]);function _(){const l=w.current.getModel();if(!g){var v;(v=l.original)===null||v===void 0||v.dispose()}if(!f){var I;(I=l.modified)===null||I===void 0||I.dispose()}w.current.dispose()}return T.createElement(we,{width:B,height:V,isEditorReady:b,loading:R,_ref:L,className:Y,wrapperProps:J})}Me.propTypes={original:o.exports.string,modified:o.exports.string,language:o.exports.string,originalLanguage:o.exports.string,modifiedLanguage:o.exports.string,originalModelPath:o.exports.string,modifiedModelPath:o.exports.string,keepCurrentOriginalModel:o.exports.bool,keepCurrentModifiedModel:o.exports.bool,theme:o.exports.string,loading:o.exports.oneOfType([o.exports.element,o.exports.string]),options:o.exports.object,width:o.exports.oneOfType([o.exports.number,o.exports.string]),height:o.exports.oneOfType([o.exports.number,o.exports.string]),className:o.exports.string,wrapperProps:o.exports.object,beforeMount:o.exports.func,onMount:o.exports.func};Me.defaultProps={theme:"light",loading:"Loading...",options:{},keepCurrentOriginalModel:!1,keepCurrentModifiedModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:N,onMount:N};function Mt(e){const t=c.exports.useRef();return c.exports.useEffect(()=>{t.current=e},[e]),t.current}const k=new Map;function oe({defaultValue:e,defaultLanguage:t,defaultPath:r,value:n,language:i,path:s,theme:a,line:g,loading:f,options:h,overrideServices:R,saveViewState:j,keepCurrentModel:V,width:B,height:Y,className:J,wrapperProps:K,beforeMount:G,onMount:b,onChange:S,onValidate:P}){const[m,w]=c.exports.useState(!1),[x,L]=c.exports.useState(!0),y=c.exports.useRef(null),u=c.exports.useRef(null),C=c.exports.useRef(null),U=c.exports.useRef(b),_=c.exports.useRef(G),l=c.exports.useRef(null),v=c.exports.useRef(n),I=Mt(s),ie=c.exports.useRef(!1);Oe(()=>{const p=ve.init();return p.then(d=>(y.current=d)&&L(!1)).catch(d=>(d==null?void 0:d.type)!=="cancelation"&&console.error("Monaco initialization: error:",d)),()=>u.current?Ee():p.cancel()}),O(()=>{const p=H(y.current,e||n,t||i,s);p!==u.current.getModel()&&(j&&k.set(I,u.current.saveViewState()),u.current.setModel(p),j&&u.current.restoreViewState(k.get(s)))},[s],m),O(()=>{u.current.updateOptions(h)},[h],m),O(()=>{u.current.getOption(y.current.editor.EditorOption.readOnly)?u.current.setValue(n):n!==u.current.getValue()&&(u.current.executeEdits("",[{range:u.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),u.current.pushUndoStop())},[n],m),O(()=>{y.current.editor.setModelLanguage(u.current.getModel(),i)},[i],m),O(()=>{jt(g)||u.current.revealLine(g)},[g],m),O(()=>{y.current.editor.setTheme(a)},[a],m);const se=c.exports.useCallback(()=>{if(!ie.current){_.current(y.current);const p=s||r,d=H(y.current,n||e,t||i,p);u.current=y.current.editor.create(C.current,{model:d,automaticLayout:!0,...h},R),j&&u.current.restoreViewState(k.get(p)),y.current.editor.setTheme(a),w(!0),ie.current=!0}},[e,t,r,n,i,s,h,R,j,a]);c.exports.useEffect(()=>{m&&U.current(u.current,y.current)},[m]),c.exports.useEffect(()=>{!x&&!m&&se()},[x,m,se]),v.current=n,c.exports.useEffect(()=>{if(m&&S){var p,d;(p=l.current)===null||p===void 0||p.dispose(),l.current=(d=u.current)===null||d===void 0?void 0:d.onDidChangeModelContent(A=>{S(u.current.getValue(),A)})}},[m,S]),c.exports.useEffect(()=>{if(m){const p=y.current.editor.onDidChangeMarkers(d=>{var A;const Q=(A=u.current.getModel())===null||A===void 0?void 0:A.uri;if(Q&&d.find(X=>X.path===Q.path)){const X=y.current.editor.getModelMarkers({resource:Q});P==null||P(X)}});return()=>{p==null||p.dispose()}}},[m,P]);function Ee(){var p;if((p=l.current)===null||p===void 0||p.dispose(),V)j&&k.set(s,u.current.saveViewState());else{var d;(d=u.current.getModel())===null||d===void 0||d.dispose()}u.current.dispose()}return T.createElement(we,{width:B,height:Y,isEditorReady:m,loading:f,_ref:C,className:J,wrapperProps:K})}oe.propTypes={defaultValue:o.exports.string,defaultPath:o.exports.string,defaultLanguage:o.exports.string,value:o.exports.string,language:o.exports.string,path:o.exports.string,theme:o.exports.string,line:o.exports.number,loading:o.exports.oneOfType([o.exports.element,o.exports.string]),options:o.exports.object,overrideServices:o.exports.object,saveViewState:o.exports.bool,keepCurrentModel:o.exports.bool,width:o.exports.oneOfType([o.exports.number,o.exports.string]),height:o.exports.oneOfType([o.exports.number,o.exports.string]),className:o.exports.string,wrapperProps:o.exports.object,beforeMount:o.exports.func,onMount:o.exports.func,onChange:o.exports.func,onValidate:o.exports.func};oe.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:N,onMount:N,onValidate:N};var Et=c.exports.memo(oe);const re=e=>M.exports.jsxs("div",{className:"w-1/2 h-1/2",children:[M.exports.jsx("div",{className:"bg-[#1e1e1e] h-[10%] text-white mt-0",children:M.exports.jsx("h3",{className:"font-semibold ml-1 mr-1",children:e.title})}),M.exports.jsx(Et,{width:"100%",height:"90%",theme:"vs-dark",language:e.language,onChange:t=>e.onChange(t??""),value:e.value,wrapperProps:{className:"bg-[#1e1e1e]"}})]}),Tt=()=>{const{html:e,css:t,js:r,setHtml:n,setCss:i,setJs:s}=c.exports.useContext(Pe),a=Re(e,t,r);return M.exports.jsxs("div",{className:"w-screen h-[95%] flex flex-wrap overflow-hidden",children:[M.exports.jsx(re,{title:"HTML",language:"html",onChange:n,value:e}),M.exports.jsx(re,{title:"CSS",language:"css",onChange:i,value:t}),M.exports.jsx(re,{title:"JS",language:"javascript",onChange:s,value:r}),M.exports.jsx(Te,{code:a})]})};export{Tt as default};
