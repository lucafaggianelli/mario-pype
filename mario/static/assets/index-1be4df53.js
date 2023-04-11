var Se=Object.defineProperty;var Le=(r,t,n)=>t in r?Se(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n;var F=(r,t,n)=>(Le(r,typeof t!="symbol"?t+"":t,n),n);import{j as K,r as y,A as C,I as b,a as le,U as g,u as T,b as oe,F as w,P as de,D as u,c as O,_ as De,d as ue,C as Pe,X as _e,S as Ee,e as $e,N as Oe,E as qe,f as he,g as B,Z as V,n as _,t as v,G as X,Q as N,h as H,R as Q,L as $,i as Ie,k as Fe,l as me,K as ke,m as je,o as Me,M as Ae,p as W,q,W as pe,$ as D,s as z,v as ge,w as ne,x as Ue,y as re,z as ie,T as Ke,B as Be,H as Ve,J as Xe,O as He,V as Qe}from"./vendor-8b9315ca.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}})();const L=K.Fragment,e=K.jsx,s=K.jsxs;class We extends Error{constructor(n,a){const i=n.status||n.status===0?n.status:"",c=n.statusText||"",d=`${i} ${c}`.trim(),l=d?`status code ${d}`:"an unknown error";super(`Request failed with ${l}`);F(this,"response");F(this,"request");this.name="HTTPError",this.response=n,this.request=a}}const ze=r=>{const t=new URLSearchParams;return Object.entries(r).forEach(([n,a])=>{a!==void 0&&t.set(n,a)}),t};class Ge{constructor(t={}){F(this,"config");var n;this.config=t,this.config.baseUrl=(n=this.config.baseUrl)==null?void 0:n.replace(/\/+$/,"")}async fetch(t){let n,a;if(typeof t=="string")n=t;else{const{url:d,params:l,json:o,...h}=t;if(n=d,a=h,o&&(a.body=JSON.stringify(o),a.headers={"Content-Type":"application/json"}),l){const m=ze(l);n+=`?${m}`}}this.config.baseUrl&&(n=this.config.baseUrl+n);const i=new Request(n,a),c=await fetch(i);if(!c.ok)throw new We(c,i);return c.headers.get("Content-Type")==="application/json"?await c.json():await c.text()}async fetchForceMethod(t,n){return typeof t=="string"?this.fetch({url:t,method:n}):this.fetch({...t,method:n})}async get(t){return this.fetchForceMethod(t,"get")}async post(t){return this.fetchForceMethod(t,"post")}async put(t){return this.fetchForceMethod(t,"put")}async patch(t){return this.fetchForceMethod(t,"patch")}async delete(t){return this.fetchForceMethod(t,"delete")}}const Ye="/api",G={}.VITE_API_BASE_URL||Ye,R=new Ge({baseUrl:G}),Je=async()=>{const r=await R.get("/pipelines");return r.forEach(t=>{t.triggers.forEach(n=>{n.next_fire_time=new Date(n.next_fire_time)})}),r},Y=async r=>{const t=await R.get(`/pipelines/${r}`);return t.triggers.forEach(n=>{n.next_fire_time=new Date(n.next_fire_time)}),t},Ze=async r=>await R.get(`/pipelines/${r}/input-schema`),fe=async(r,t)=>{const n={pipeline_id:r,trigger_id:t},a=await R.get({url:"/runs",params:n});return a.forEach(i=>{i.start_time=new Date(i.start_time)}),a},et=async r=>{const t=await R.get(`/runs/${r}`);return t.start_time=new Date(t.start_time),t},tt=async r=>(await R.get(`/runs/${r}/logs`)).split(`
`).map((n,a)=>{const i=JSON.parse(n);return i.id=a,i.timestamp=new Date(i.timestamp),i}),nt=async(r,t)=>await R.get(`/runs/${r}/data/${t}`),U=r=>`${G}/pipelines/${r}/run`,rt=r=>({async mutationFn(t){R.post({url:`/pipelines/${r}/run`,json:t})}}),k=(r,t,n=!0)=>`${n?G:""}/pipelines/${r}/triggers/${t}/run`,it=async(r,t)=>await R.post(k(r,t,!1)),M=({children:r,footer:t,isOpen:n,maxHeight:a,maxWidth:i="600px",minWidth:c="350px",subtitle:d,title:l,onClose:o})=>{const h=y.createRef();return y.useEffect(()=>{var f,x;n?(f=h.current)==null||f.showModal():(x=h.current)==null||x.close()},[n]),e("dialog",{ref:h,style:{padding:0,background:"transparent",overflow:"visible",maxHeight:a,maxWidth:i,minWidth:c},onClick:f=>{var p;var x=h.current.getBoundingClientRect(),I=x.top<=f.clientY&&f.clientY<=x.top+x.height&&x.left<=f.clientX&&f.clientX<=x.left+x.width;I||(o?o():(p=h.current)==null||p.close())},children:s(C,{children:[l&&e(b,{children:l}),d&&e(le,{children:d}),e("div",{className:(l||d)&&"mt-6",children:r}),t&&e(g,{className:"justify-end space-x-6 mt-6",children:t})]})})},st=r=>{const t=i=>{if(!r.definitions)return;const c=i.split("/").pop();return r.definitions[c]},n=r.properties;if(!n)return e(u,{className:"mt-4",children:"This pipeline has no input"});const a=Object.entries(n).map(([i,c])=>{var f,x,I;if(typeof c=="boolean")return;let d=c,l;if(c.allOf){const p=c.allOf[0];if(l=(f=c.default)==null?void 0:f.toString(),p.$ref){const S=t(p.$ref);S&&(d=S)}}else if(c.$ref){const p=t(c.$ref);p&&(d=p)}else l=(x=d.default)==null?void 0:x.toString();const o=d.title||i,h=(d.enum?"enum":Array.isArray(d.type)?d.type[0]:d.type)||"string",m=(I=r.required)==null?void 0:I.includes(i);if(["number","integer"].includes(h)){const p=d.minimum||d.exclusiveMinimum,S=d.maximum||d.exclusiveMaximum;if(p!==void 0&&S!==void 0){const A=y.createRef(),Te=h==="number"?(S-p)/10:1;return s("div",{children:[e(u,{children:o}),e("input",{name:i,type:"range",min:p,max:S,step:Te,defaultValue:l,required:m,onInput:Re=>A.current&&(A.current.value=Re.target.value),className:"w-full mt-2 cursor-ew-resize appearance-none h-2 bg-slate-200 border border-slate-400 rounded"}),s(g,{className:"items-baseline space-x-4",children:[s("div",{className:"ml-1",children:[e("div",{className:"border-r border-slate-300 h-2 w-1"}),e(u,{children:p})]}),e(u,{children:e(O,{children:e("output",{ref:A,className:"px-2 py-1 rounded bg-slate-200 block truncate text-center",children:l})})}),s("div",{className:"mr-1",children:[e("div",{className:"border-r border-slate-300 h-2 w-1"}),e(u,{children:S})]})]})]},i)}else return s("div",{children:[e(u,{children:o}),e("input",{name:i,type:"number",min:p,max:S,defaultValue:l,className:"border-gray-300 rounded-md border shadow-sm px-4 py-2 text-sm font-medium invalid:border-rose-500 mt-2",style:{textAlign:"end",width:"100%"},required:m})]},i)}else return h==="enum"?s("div",{children:[e(u,{children:o}),s("select",{name:i,defaultValue:l||"",className:"border-gray-300 rounded-md border shadow-sm px-4 py-2 text-sm font-medium w-full invalid:border-rose-500 mt-2",required:m,children:[e("option",{disabled:!0,value:"",children:"Select..."}),d.enum.map(p=>e("option",{value:p.toString(),children:p==null?void 0:p.toString()},p==null?void 0:p.toString()))]})]},i):s("div",{children:[s(u,{children:[o," ",m&&"*"]}),e(De,{name:i,placeholder:o,defaultValue:l,className:"mt-2"})]},i)});return e("div",{className:"space-y-4",children:a})},J=({pipeline:r})=>{const[t,n]=y.useState(!1),a=T({queryKey:["pipeline-input",r.id],queryFn:()=>Ze(r.id),enabled:t}),i=oe(rt(r.id));return s(L,{children:[e(w,{color:"indigo",variant:"secondary",size:"xs",icon:de,onClick:()=>n(!0),children:"Run pipeline"}),e(M,{isOpen:t,title:`Run ${r.name} manually`,onClose:()=>n(!1),children:s("form",{method:"dialog",onSubmit:c=>{const d=Object.fromEntries(new FormData(c.target).entries());i.mutateAsync(d)},children:[a.isLoading?"Loading...":e("div",{style:{width:350},children:st(a.data)}),s(g,{className:"justify-end space-x-6 mt-6",children:[e(w,{variant:"secondary",color:"indigo",onClick:()=>{n(!1)},children:"Close"}),e(w,{color:"indigo",type:"submit",children:"Run"})]})]})})]})},Z={completed:"emerald",failed:"rose",cancelled:"slate",running:"blue",notrun:"slate",warning:"amber"},ye={completed:Pe,failed:_e,cancelled:Ee,running:$e,notrun:Oe,warning:qe},ee=r=>ue(r).format("D MMM YYYY HH:mm:ss (Z[Z])"),at=r=>ue(r).format("HH:mm:ss.SSS"),xe=({pipeline:r})=>{const t=he();return s(C,{className:"mt-5",children:[e(b,{children:"Triggers"}),s(B,{children:[e(V,{children:s(_,{children:[e(v,{children:"Name"}),e(v,{children:"Interval"}),e(v,{children:"Next fire time"}),e(v,{children:"Latest Status"})]})}),e(X,{children:r.triggers.map(n=>s(_,{className:"cursor-pointer hover:bg-slate-50 transition-colors",onClick:()=>t(`/pipelines/${r.id}/triggers/${n.id}`),children:[e(N,{children:n.name}),e(N,{children:e(u,{children:n.interval})}),e(N,{children:n.paused?e(H,{color:"amber",tooltip:"Re-enable the trigger setting paused=False",size:"xs",children:"Disabled"}):n.next_fire_time?ee(n.next_fire_time):"-"}),e(N,{children:"-"})]},n.id))})]})]})},ct=()=>{const r=T({queryKey:["pipelines"],queryFn:Je,initialData:[]});if(r.isLoading)return e("div",{children:"Loading..."});if(r.error)return e("div",{children:"An error has occurred"});const t=r.data;return e(L,{children:t.map(n=>s(Q.Fragment,{children:[s(g,{children:[e(g,{children:s(g,{className:"justify-start items-baseline space-x-2",children:[e(b,{children:e($,{to:`/pipelines/${n.id}`,children:n.name})}),e(u,{className:"truncate max-w-lg",children:n.description})]})}),e(J,{pipeline:n})]}),e(xe,{pipeline:n})]},n.id))})};function lt(){return s("main",{className:"bg-slate-50 p-6 sm:p-10 min-h-screen",children:[e(b,{children:"Mario Pype"}),e(u,{children:"All your pipelines."}),e("div",{className:"mt-6",children:e(ct,{})})]})}const ve=({content:r})=>{const[t,n]=y.useState(!1),a=y.useRef();return e(w,{variant:"light",color:"indigo",size:"sm",icon:t?Ie:Fe,onClick:()=>{navigator.clipboard.writeText(r),n(!0),a.current=setTimeout(()=>n(!1),3e3)}})},E=()=>e(u,{children:"/"}),te=({pipeline:r,trigger:t,run:n})=>{if(n&&!t)throw new Error;return e("div",{className:"breadcrumbs",children:s(g,{className:"space-x-2 justify-start",children:[e(u,{children:e($,{to:"/",children:"Pipelines"})}),e(E,{}),e(u,{children:t?e($,{to:`/pipelines/${r.id}`,children:r.name}):r.name}),t&&s(L,{children:[e(E,{}),e(u,{children:"Triggers"}),e(E,{}),e(u,{children:n?e($,{to:`/pipelines/${r.id}/triggers/${t.id}`,children:t.name}):t.name})]}),n&&t&&s(L,{children:[e(E,{}),e(u,{children:"Runs"}),e(E,{}),s(u,{children:["#",n.id]})]})]})})},se=r=>(r/1e3).toFixed(1)+" s",Ne=({runs:r})=>{const t=r.filter(a=>a.status==="completed").reverse(),n=t.reduce((a,i)=>a+i.duration,0)/t.length||0;return s(C,{children:[e(g,{className:"items-start",children:e(u,{children:"Duration"})}),e(g,{className:"justify-start items-baseline space-x-3 truncate",children:e(me,{children:se(n)})}),e(ke,{data:t,index:"id",categories:["duration"],colors:["indigo"],valueFormatter:se,yAxisWidth:40,showLegend:!1,autoMinValue:!0,className:"mt-6 h-28"})]})},be=({status:r})=>e(H,{color:Z[r],icon:ye[r],children:r}),ot=({startTime:r})=>{const[t,n]=y.useState(Date.now()-r.getTime());return y.useEffect(()=>{const a=setInterval(()=>{n(Date.now()-r.getTime())},500);return()=>{clearInterval(a)}}),e("span",{children:(t/1e3).toFixed(2)})},P=typeof window<"u"?new WebSocket("ws://localhost:8000/api/ws"):void 0,we=({pipelineId:r,runs:t,triggerId:n})=>{const[a,i]=y.useState(t),c=je(),d=he(),l=y.useCallback(o=>{const{data:h}=JSON.parse(o.data);if(h.run.start_time=new Date(h.run.start_time),h.run.status==="running")i([h.run,...a]);else{let m=[...a];const f=m.findIndex(x=>x.id===h.run.id);f>=0?m[f]=h.run:m=[h.run,...m],i(m),c.invalidateQueries({queryKey:["runs",r,n]})}},[r,c,a,n]);return y.useEffect(()=>(P==null||P.addEventListener("message",l),()=>{P==null||P.removeEventListener("message",l)}),[l]),y.useEffect(()=>{t.length&&i(t)},[t]),s(C,{className:"mt-5",children:[e(b,{children:"Runs"}),s(B,{children:[e(V,{children:s(_,{children:[e(v,{className:"text-right",children:"#"}),e(v,{children:"Status"}),!n&&e(v,{children:"Trigger"}),e(v,{children:"Started at"}),e(v,{className:"text-right",children:"Duration"})]})}),e(X,{children:a.map(o=>s(_,{className:"cursor-pointer hover:bg-slate-50 transition-colors",onClick:()=>d(`/pipelines/${r}/triggers/${o.trigger_id}/runs/${o.id}`),children:[e(N,{className:"text-right",children:o.id}),e(N,{children:e(be,{status:o.status})}),!n&&e(N,{children:e($,{to:`/pipelines/${r}/triggers/${o.trigger_id}`,className:"link--arrow",title:"View trigger details",onClick:h=>h.stopPropagation(),children:o.trigger_id})}),e(N,{children:e(u,{children:ee(o.start_time)})}),s(N,{className:"text-right",children:[o.status!=="running"?(o.duration/1e3).toFixed(2):e(ot,{startTime:o.start_time})," ","s"]})]},o.id))})]})]})},Ce=({runs:r,subject:t})=>{var d,l;const a=r.filter(o=>o.status==="completed").length/r.length*100||0,i=(d=r[0])==null?void 0:d.start_time,c=(l=r[r.length-1])==null?void 0:l.start_time;return s(C,{children:[e(g,{children:s(b,{children:[t," health"]})}),r.length?s(L,{children:[s(g,{className:"mt-4",children:[e(u,{children:"Successful runs"}),s(u,{children:[a.toFixed(1)," %"]})]}),e(Me,{className:"mt-2",data:r.map(o=>({key:o.id,color:Z[o.status],tooltip:`#${o.id} ${o.status}`}))})]}):e(u,{className:"text-center mt-8",children:s(Ae,{children:["This ",t.toLowerCase()," has no runs yet"]})}),s(g,{className:"mt-2",children:[e(u,{children:i&&i.toDateString()}),e(u,{children:c&&c.toDateString()})]})]})},dt=()=>{const t=W().pipelineId,n=T({queryKey:["pipeline",t],queryFn:()=>Y(t),initialData:{id:"",name:"",description:"",tasks:[],triggers:[]},enabled:!!t}),a=T({queryKey:["runs",t,void 0],queryFn:()=>fe(t),initialData:[]});if(a.isLoading||n.isLoading)return e("div",{children:"Loading..."});if(a.error||n.error)return e("div",{children:"An error has occurred"});const i=n.data;return s("main",{className:"bg-slate-50 p-6 sm:p-10 min-h-screen",children:[s(g,{className:"items-start",children:[s("div",{children:[s(g,{className:"justify-start space-x-2",children:[s(b,{children:["Pipeline ",i.name]}),i.description&&s(u,{className:"truncate",children:["· ",i.description]})]}),e(te,{pipeline:i})]}),e(J,{pipeline:i})]}),s(q,{numColsMd:2,numColsLg:3,className:"gap-6 mt-6",children:[s(C,{className:"flex flex-col h-full",children:[e(b,{children:"Tasks"}),e(pe,{children:i.tasks.map(c=>e(D,{children:s("div",{children:[e(u,{children:e(O,{children:c.name})}),c.description&&e(u,{className:"truncate",children:c.description})]})},c.id))}),e("div",{style:{flexGrow:1}}),s(D,{children:[s(g,{className:"justify-start",children:[e(u,{children:"Run URL"}),e(z,{size:"sm",color:"slate",icon:ge,tooltip:"URL to run the pipeline programmatically via an HTTP POST request"})]}),s(g,{className:"justify-end",children:[e("div",{className:"bg-slate-100 border-slate-300 rounded border text-slate-500 text-xs truncate px-1 py-0.5 mr-2",style:{maxWidth:200},title:U(t),children:U(t)}),e(ve,{content:U(t)})]})]})]}),e(Ce,{subject:"Pipeline",runs:[...a.data].reverse()}),e(Ne,{runs:a.data})]}),s(q,{numCols:1,numColsSm:1,numColsMd:1,numColsLg:2,className:"gap-6 mt-6",children:[e(ne,{children:e(xe,{pipeline:i})}),e(ne,{children:e(we,{runs:a.data,pipelineId:t})})]})]})},ut=({trigger:r})=>{const[t,n]=y.useState(!1);return s(L,{children:[e(w,{color:"indigo",variant:"light",size:"sm",icon:Ue,onClick:()=>n(!0),children:"Show params"}),e(M,{isOpen:t,title:"Trigger params",subtitle:r.name,footer:e(w,{variant:"primary",color:"indigo",onClick:()=>{n(!1)},children:"Close"}),onClose:()=>n(!1),children:e("pre",{className:"p-3 bg-slate-100 rounded-md",children:JSON.stringify(r.params,null,2)})})]})},j={id:"_manual",name:"Manual",description:"Special trigger that identifies pipelines run manually by the user"},ht=()=>{const r=W(),t=r.pipelineId,n=r.triggerId,a=T({queryKey:["pipeline",t],queryFn:()=>Y(t),initialData:{id:"",name:"",description:"",tasks:[],triggers:[]},enabled:!!t}),i=T({queryKey:["runs",n,t],queryFn:()=>fe(t,n),initialData:[],enabled:!!n}),c=oe({mutationFn:()=>it(t,n)});if(i.isLoading||a.isLoading)return e("div",{children:"Loading..."});if(i.error||a.error)return e("div",{children:"An error has occurred"});const d=a.data,l=n===j.id,o=l?j:d.triggers.find(m=>m.id===n);if(!o)return e("div",{children:"Trigger not found"});const h=l?e(J,{pipeline:d}):e(w,{size:"xs",color:"indigo",icon:de,onClick:()=>{c.mutateAsync()},children:"Run trigger"});return s("main",{className:"bg-slate-50 p-6 sm:p-10 min-h-screen",children:[s(g,{className:"items-start",children:[s("div",{children:[s(b,{children:["Trigger ",o.name]}),e(te,{pipeline:d,trigger:o})]}),h]}),s(q,{numColsMd:2,numColsLg:3,className:"gap-6 mt-6",children:[s(C,{className:"flex flex-col h-full",children:[e(b,{children:o.name}),e(le,{children:o.description}),e("div",{style:{flexGrow:1}}),s(D,{children:[e(u,{children:"Schedule"}),e(u,{children:e(O,{children:o.interval})})]}),s(D,{children:[e(u,{children:"Next run"}),e(u,{children:e(O,{children:o.next_fire_time?ee(o.next_fire_time):"-"})})]}),s(D,{children:[e(u,{children:"Params"}),o.params?e(ut,{trigger:o}):e(u,{children:e("em",{children:"No params"})})]}),s(D,{children:[s(g,{className:"justify-start",children:[e(u,{children:"Run URL"}),e(z,{size:"sm",color:"slate",icon:ge,tooltip:"URL to run the trigger programmatically via an HTTP POST request"})]}),s(g,{className:"justify-end",children:[e("div",{className:"bg-slate-100 border-slate-300 rounded border text-slate-500 text-xs truncate px-1 py-0.5 mr-2",style:{maxWidth:200},title:k(t,n),children:k(t,n)}),e(ve,{content:k(t,n)})]})]})]}),e(Ce,{subject:"Trigger",runs:[...i.data].reverse()}),e(Ne,{runs:i.data})]}),e("div",{className:"mt-6",children:e(we,{runs:i.data,pipelineId:t,triggerId:n})})]})},mt=({logEntry:r})=>{const[t,n]=y.useState(!1);return s(g,{className:"mt-1",children:[e(w,{color:"rose",variant:"secondary",size:"xs",onClick:()=>n(!0),children:"Traceback info"}),e(M,{isOpen:t,title:"Traceback info",footer:e(w,{variant:"primary",color:"indigo",onClick:()=>{n(!1)},children:"Close"}),maxWidth:"80%",onClose:()=>n(!1),children:e("div",{className:"flex flex-col",children:e("div",{style:{minWidth:350,maxWidth:"100%",overflow:"auto",flexGrow:1,maxHeight:"70vh"},className:"p-3 my-3 bg-slate-100 rounded-md whitespace-pre font-mono",children:r.exc_info})})})]})},ae={DEBUG:"slate",INFO:"sky",WARNING:"amber",ERROR:"rose"},pt=({pipeline:r,runId:t})=>{const[n,a]=y.useState({levels:[],tasks:[]}),i=T({queryKey:["logs",t],queryFn:()=>tt(t),enabled:!!t,initialData:[]}),c=y.useCallback(l=>{a(o=>({...o,...l}))},[]);if(i.isLoading)return e("div",{children:"Loading..."});if(i.isError)return e("div",{children:"Error loading logs"});const d=i.data.filter(l=>(n.levels.length===0||n.levels.includes(l.level))&&(n.tasks.length===0||n.tasks.includes(l.task)));return s(L,{children:[s(q,{numColsMd:3,className:"gap-6",children:[s("div",{children:[e(u,{children:"Tasks"}),e(re,{className:"mt-1",onValueChange:l=>{c({tasks:l})},children:r.tasks.map(l=>e(ie,{text:l.name,value:l.id},l.id))})]}),s("div",{children:[e(u,{children:"Log level"}),e(re,{className:"mt-1",onValueChange:l=>{c({levels:l})},children:Object.keys(ae).map(l=>e(ie,{text:l,value:l},l))})]})]}),e("div",{className:"logs-table",children:s(B,{className:"mt-6",children:[e(V,{children:s(_,{children:[e(v,{children:"Time"}),e(v,{children:"Level"}),e(v,{children:"Task"}),e(v,{children:"Message"})]})}),e(X,{children:d.map((l,o)=>{const h=o!==0?l.timestamp.getTime()-d[o-1].timestamp.getTime():-1;return s(_,{children:[s(N,{children:[e("span",{className:"font-mono text-xs text-slate-500",children:at(l.timestamp)}),h>=0&&s("span",{className:"font-mono text-xs text-slate-500 ml-2",children:["+",h," ms"]})]}),e(N,{children:e(H,{size:"xs",color:ae[l.level],children:l.level})}),e(N,{children:l.task}),s(N,{children:[e(u,{children:l.message}),l.exc_info&&e(mt,{logEntry:l})]})]},l.id)})})]})})]})},gt="modulepreload",ft=function(r){return"/"+r},ce={},yt=function(t,n,a){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(c=>{if(c=ft(c),c in ce)return;ce[c]=!0;const d=c.endsWith(".css"),l=d?'[rel="stylesheet"]':"";if(!!a)for(let m=i.length-1;m>=0;m--){const f=i[m];if(f.href===c&&(!d||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${l}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":gt,d||(h.as="script",h.crossOrigin=""),h.href=c,document.head.appendChild(h),d)return new Promise((m,f)=>{h.addEventListener("load",m),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>t())},xt=Q.lazy(()=>yt(()=>import("./HandsonTable-724813f7.js"),["assets/HandsonTable-724813f7.js","assets/vendor-8b9315ca.js","assets/HandsonTable-a8e02e84.css"])),vt=({runId:r,taskId:t,open:n,onClose:a})=>{const i=T({queryKey:["getRunData",{runId:r,taskId:t}],queryFn:()=>nt(r,t),enabled:n});return e(L,{children:s(M,{title:t,subtitle:"View data",isOpen:n,maxWidth:"90%",minWidth:"90%",footer:e(w,{variant:"secondary",color:"indigo",onClick:()=>a(),children:"Close"}),onClose:a,children:[!i.isLoading&&!i.isError&&e(y.Suspense,{fallback:e("div",{children:"Loading..."}),children:e(xt,{data:i.data,rowHeaders:!0,colHeaders:Object.keys(i.data[0]),height:"70vh",width:"100%",licenseKey:"non-commercial-and-evaluation"})}),i.isError&&(i.error.response.status===404?e(u,{children:"The task has no data"}):s(u,{color:"rose",children:["Error fetching task data: ",i.error.message]}))]})})},Nt=({pipeline:r,run:t})=>{const[n,a]=y.useState();return s(C,{children:[e(vt,{runId:t.id,taskId:n||"",open:!!n,onClose:()=>a(void 0)}),e(b,{children:"Tasks"}),e(pe,{children:r.tasks.map(i=>s(D,{className:"space-x-4",children:[e(z,{variant:"light",icon:ye[t.status],color:Z[t.status]}),s("div",{className:"truncate flex-grow",children:[e(u,{className:"truncate",children:e(O,{children:i.name})}),i.description&&e(u,{className:"truncate",children:i.description})]}),t.status==="completed"&&e(w,{variant:"light",color:"indigo",size:"xs",icon:Ke,onClick:()=>a(i.id),children:"Data"})]},i.id))})]})},bt=()=>{const r=W(),t=r.pipelineId,n=r.triggerId,a=parseInt(r.runId),i=T({queryKey:["pipeline",t],queryFn:()=>Y(t),initialData:{id:"",name:"",description:"",tasks:[],triggers:[]},enabled:!!t}),c=T({queryKey:["run",t,n,a],queryFn:()=>et(a),enabled:!!(t&&n&&a)}),d=i.data,o=n===j.id?j:d.triggers.find(m=>m.id===n),h=c.data;return h?o?s("main",{className:"bg-slate-50 p-6 sm:p-10 min-h-screen",children:[s(b,{children:["Run #",a]}),e(te,{pipeline:d,trigger:o,run:h}),s(q,{numColsMd:3,className:"gap-6 mt-6",children:[e(Nt,{pipeline:d,run:h}),s(C,{children:[s(g,{className:"items-start",children:[e(u,{children:"Duration"}),e(be,{status:h.status})]}),e(g,{className:"justify-start items-baseline pace-x-3 truncate",children:s(me,{children:[(h.duration/1e3).toFixed(1),"s"]})})]})]}),e("div",{className:"mt-6",children:e(C,{children:e(pt,{pipeline:d,runId:a})})})]}):e("div",{children:"Trigger not found"}):e("div",{children:"Run not found"})},wt=Object.assign({"./pages/index.tsx":lt,"./pages/pipelines/[pipelineId]/index.tsx":dt,"./pages/pipelines/[pipelineId]/triggers/[triggerId]/index.tsx":ht,"./pages/pipelines/[pipelineId]/triggers/[triggerId]/runs/[runId]/index.tsx":bt}),Ct=Object.entries(wt).map(([r,t])=>({path:r.slice(7).replace(/index\.tsx$/,"").split("/").map(a=>a.replace(/\[(.+)\]/,":$1")).join("/"),element:e(t,{})})),Tt=()=>{const r=Be(Ct);return e(Ve,{router:r})},Rt=new Xe({defaultOptions:{queries:{retry:!1}}});function St(){return e(He,{client:Rt,children:e(Tt,{})})}Qe.createRoot(document.getElementById("root")).render(e(Q.StrictMode,{children:e(St,{})}));export{e as j};