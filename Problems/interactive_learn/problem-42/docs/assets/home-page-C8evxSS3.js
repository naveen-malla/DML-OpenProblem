import{aF as e,R as a,aG as t,aH as s,G as r,J as o,as as n,aI as l,O as i,aJ as c,aK as d,aL as h,aM as m,aN as x,aO as f,aP as u,ag as p,aQ as y,aR as b,aS as j,aT as g,aU as v,aA as k,aV as w,aW as N,aX as _,aY as S,aZ as M,aq as C,a_ as z,a$ as I,b0 as O,b1 as P,b2 as D,b3 as T,b4 as A,b5 as R,Z as $,b6 as B,b7 as W,b8 as H,b9 as L,ba as q,bb as E,bc as F,bd as G,be as V,bf as J,bg as Q,Q as U,bh as Y,bi as Z,bj as K,a3 as X,aB as ee}from"./index-BEK-FZ0P.js";import{u as ae,C as te,T as se,a as re,S as oe,M as ne,A as le,G as ie,P as ce}from"./tree-B9nC3xp9.js";import"./main-cdvIQCIX.js";import"./feature-flag-DxjXijq9.js";import"./index-C7Naro79.js";
/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=e("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),he=e("BookText",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 11h8",key:"vwpz6n"}],["path",{d:"M8 7h6",key:"1f0q6e"}]]),me=e("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]),xe=e("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]),fe=e("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]),ue=e("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]),pe=a.createContext({runningNotebooks:new Map,setRunningNotebooks:t.NOOP}),ye=a.createContext(""),be=s("marimo:home:include-markdown",!1,void 0,{getOnInit:!0}),je=s("marimo:home:expanded-folders",{},void 0,{getOnInit:!0});
/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ge(e){return`${U()}-${encodeURIComponent(e)}`}const ve=()=>{const e=r(51),[a,t]=o.useState(0);let s;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=[],e[0]=s):s=e[0];const h=n(Te,s);let m,f,u;e[1]===Symbol.for("react.memo_cache_sentinel")?(m=()=>{t((e=>e+1))},f={delayMs:1e4,whenVisible:!0},e[1]=m,e[2]=f):(m=e[1],f=e[2]),ae(m,f),e[3]!==a?(u=[a],e[3]=a,e[4]=u):u=e[4];const p=n(Re,u);let y,b,j,g,v,k,w,N,_,S,M,C,z,I,O,P,D,T,A,R;if(e[5]!==h||e[6]!==p){C=Symbol.for("react.early_return_sentinel");e:{const a=l(h,p);if(a.error)throw a.error;const t=a.data;if(!t){let a;e[19]===Symbol.for("react.memo_cache_sentinel")?(a=i.jsx(x,{centered:!0,size:"xlarge"}),e[19]=a):a=e[19],C=a;break e}const[s,r]=t;let n,c;g=s,M=o.Suspense,N=pe.Provider,_={runningNotebooks:r,setRunningNotebooks:p.setData},e[20]===Symbol.for("react.memo_cache_sentinel")?(n=i.jsx(De,{}),c=i.jsx(re,{showAppConfig:!1}),e[20]=n,e[21]=c):(n=e[20],c=e[21]);const d=`This will shutdown the notebook server and terminate all running notebooks (${r.size}). You'll lose all data that's in memory.`;e[22]!==d?(S=i.jsxs("div",{className:"absolute top-3 right-5 flex gap-2 z-50",children:[n,c,i.jsx(oe,{description:d})]}),e[22]=d,e[23]=S):S=e[23],v="flex flex-col gap-6 max-w-5xl container pt-5 pb-20 z-10",e[24]===Symbol.for("react.memo_cache_sentinel")?(k=i.jsx("img",{src:"logo.png",alt:"marimo logo",className:"w-64 mb-4"}),w=i.jsx(Oe,{}),e[24]=k,e[25]=w):(k=e[24],w=e[25]),b=Me,e[26]===Symbol.for("react.memo_cache_sentinel")?(j=i.jsx(Ce,{Icon:te,children:"Running notebooks"}),e[26]=j):j=e[26],y=r.values()}e[5]=h,e[6]=p,e[7]=y,e[8]=b,e[9]=j,e[10]=g,e[11]=v,e[12]=k,e[13]=w,e[14]=N,e[15]=_,e[16]=S,e[17]=M,e[18]=C}else y=e[7],b=e[8],j=e[9],g=e[10],v=e[11],k=e[12],w=e[13],N=e[14],_=e[15],S=e[16],M=e[17],C=e[18];return C!==Symbol.for("react.early_return_sentinel")?C:(e[27]!==y?(z=[...y],e[27]=y,e[28]=z):z=e[28],e[29]!==b||e[30]!==j||e[31]!==z?(I=i.jsx(b,{header:j,files:z}),e[29]=b,e[30]=j,e[31]=z,e[32]=I):I=e[32],e[33]===Symbol.for("react.memo_cache_sentinel")?(O=i.jsx(Ce,{Icon:c,children:"Recent notebooks"}),e[33]=O):O=e[33],e[34]!==g.files?(P=i.jsx(Me,{header:O,files:g.files}),e[34]=g.files,e[35]=P):P=e[35],e[36]===Symbol.for("react.memo_cache_sentinel")?(D=i.jsx(d,{children:i.jsx(ke,{})}),e[36]=D):D=e[36],e[37]!==v||e[38]!==k||e[39]!==w||e[40]!==I||e[41]!==P?(T=i.jsxs("div",{className:v,children:[k,w,I,P,D]}),e[37]=v,e[38]=k,e[39]=w,e[40]=I,e[41]=P,e[42]=T):T=e[42],e[43]!==N||e[44]!==_||e[45]!==S||e[46]!==T?(A=i.jsxs(N,{value:_,children:[S,T]}),e[43]=N,e[44]=_,e[45]=S,e[46]=T,e[47]=A):A=e[47],e[48]!==M||e[49]!==A?(R=i.jsx(M,{children:A}),e[48]=M,e[49]=A,e[50]=R):R=e[50],R)},ke=()=>{const e=r(39),[a,t]=h(be),[s,l]=o.useState("");let c,d;e[0]!==a?(c=()=>z({includeMarkdown:a}),d=[a],e[0]=a,e[1]=c,e[2]=d):(c=e[1],d=e[2]);const f=n(c,d);if(f.error){let a,t;return e[3]!==f.error?(a=m(f.error),e[3]=f.error,e[4]=a):a=e[4],e[5]!==a?(t=i.jsx(I,{kind:"danger",className:"rounded p-4",children:a}),e[5]=a,e[6]=t):t=e[6],t}if(f.loading||!f.data){let a;return e[7]===Symbol.for("react.memo_cache_sentinel")?(a=i.jsx(x,{centered:!0,size:"xlarge",className:"mt-6"}),e[7]=a):a=e[7],a}const u=f.data;let p,y,b,j,g,v,k,w,N,_,S,M,C,R;return e[8]===Symbol.for("react.memo_cache_sentinel")?(p=i.jsx(O,{size:13}),y=e=>l(e.target.value),e[8]=p,e[9]=y):(p=e[8],y=e[9]),e[10]!==s?(b=i.jsx(P,{id:"search",value:s,icon:p,onChange:y,placeholder:"Search",className:"mb-0 border-border"}),e[10]=s,e[11]=b):b=e[11],e[12]===Symbol.for("react.memo_cache_sentinel")?(j=i.jsx(we,{}),e[12]=j):j=e[12],e[13]!==t?(g=e=>t(Boolean(e)),e[13]=t,e[14]=g):g=e[14],e[15]!==a||e[16]!==g?(v=i.jsx(D,{"data-testid":"include-markdown-checkbox",id:"include-markdown",checked:a,onCheckedChange:g}),e[15]=a,e[16]=g,e[17]=v):v=e[17],e[18]===Symbol.for("react.memo_cache_sentinel")?(k=i.jsx(T,{htmlFor:"include-markdown",children:"Include markdown"}),e[18]=k):k=e[18],e[19]!==b||e[20]!==v?(w=i.jsxs("div",{className:"flex items-center gap-2",children:[b,j,v,k]}),e[19]=b,e[20]=v,e[21]=w):w=e[21],e[22]!==f?(N=i.jsx(A,{className:"w-4 h-4 ml-1 cursor-pointer opacity-70 hover:opacity-100",onClick:()=>f.reload()}),e[22]=f,e[23]=N):N=e[23],e[24]!==f.loading?(_=f.loading&&i.jsx(x,{size:"small"}),e[24]=f.loading,e[25]=_):_=e[25],e[26]!==w||e[27]!==N||e[28]!==_?(S=i.jsxs(Ce,{Icon:he,control:w,children:["Workspace",N,_]}),e[26]=w,e[27]=N,e[28]=_,e[29]=S):S=e[29],e[30]!==s||e[31]!==u.files?(M=i.jsx("div",{className:"flex flex-col divide-y divide-[var(--slate-3)] border rounded overflow-hidden max-h-[48rem] overflow-y-auto shadow-sm bg-background",children:i.jsx(Ne,{searchText:s,files:u.files})}),e[30]=s,e[31]=u.files,e[32]=M):M=e[32],e[33]!==S||e[34]!==M?(C=i.jsxs("div",{className:"flex flex-col gap-2",children:[S,M]}),e[33]=S,e[34]=M,e[35]=C):C=e[35],e[36]!==u.root||e[37]!==C?(R=i.jsx(ye.Provider,{value:u.root,children:C}),e[36]=u.root,e[37]=C,e[38]=R):R=e[38],R},we=()=>{const e=r(5),a=f(je);let t,s,o;return e[0]!==a?(t=()=>{a({})},e[0]=a,e[1]=t):t=e[1],e[2]===Symbol.for("react.memo_cache_sentinel")?(s=i.jsx(R,{className:"w-4 h-4 mr-1"}),e[2]=s):s=e[2],e[3]!==t?(o=i.jsxs($,{variant:"text",size:"sm",className:"h-fit",onClick:t,children:[s,"Collapse all"]}),e[3]=t,e[4]=o):o=e[4],o},Ne=e=>{const a=r(12),{files:t,searchText:s}=e,[n,l]=h(je),c=0===Object.keys(n).length,d=o.useRef();let m,x,f,u;if(a[0]!==c?(m=()=>{var e;c&&(null==(e=d.current)||e.closeAll())},x=[c],a[0]=c,a[1]=m,a[2]=x):(m=a[1],x=a[2]),o.useEffect(m,x),0===t.length){let e;return a[3]===Symbol.for("react.memo_cache_sentinel")?(e=i.jsx("div",{className:"flex flex-col px-5 py-10 items-center justify-center",children:i.jsx("p",{className:"text-center text-muted-foreground",children:"No files in this workspace"})}),a[3]=e):e=a[3],e}return a[4]!==n||a[5]!==l?(f=async e=>{const a=n[e]??!1;l({...n,[e]:!a})},a[4]=n,a[5]=l,a[6]=f):f=a[6],a[7]!==s||a[8]!==t||a[9]!==n||a[10]!==f?(u=i.jsx(se,{ref:d,width:"100%",height:500,searchTerm:s,className:"h-full",idAccessor:$e,data:t,openByDefault:!1,initialOpenState:n,onToggle:f,padding:5,rowHeight:35,indent:15,overscanCount:1e3,renderCursor:Be,disableDrop:!0,disableDrag:!0,disableEdit:!0,disableMultiSelection:!0,children:_e}),a[7]=s,a[8]=t,a[9]=n,a[10]=f,a[11]=u):u=a[11],u},_e=e=>{const a=r(19),{node:t,style:s}=e,n=t.data.isDirectory?"directory":u(t.data.name),l=B[n];let c;a[0]!==l?(c=i.jsx(l,{className:"w-5 h-5 flex-shrink-0",strokeWidth:1.5}),a[0]=l,a[1]=c):c=a[1];const d=c,h=o.useContext(ye);let m;a[2]!==t.data.isDirectory||a[3]!==t.data.name||a[4]!==t.data.path||a[5]!==d||a[6]!==h?(m=()=>{if(t.data.isDirectory)return i.jsxs("span",{className:"flex items-center pl-1 cursor-pointer hover:bg-accent/50 hover:text-accent-foreground rounded-l flex-1 overflow-hidden h-full pr-3 gap-2",children:[d,t.data.name]});const e=t.data.path.startsWith(h)&&W.isAbsolute(t.data.path)?W.rest(t.data.path,h):t.data.path,a=e.endsWith(".md");return i.jsxs("a",{className:"flex items-center pl-1 cursor-pointer hover:bg-accent/50 hover:text-accent-foreground rounded-l flex-1 overflow-hidden h-full pr-3 gap-2",href:C(`?file=${e}`).toString(),target:ge(e),children:[d,i.jsxs("span",{className:"flex-1 overflow-hidden text-ellipsis",children:[t.data.name,a&&i.jsx(ne,{className:"ml-2 inline opacity-80"})]}),i.jsx(Ie,{filePath:e}),i.jsx(H,{size:20,className:"group-hover:opacity-100 opacity-0 text-primary"})]})},a[2]=t.data.isDirectory,a[3]=t.data.name,a[4]=t.data.path,a[5]=d,a[6]=h,a[7]=m):m=a[7];const x=m;let f,y,b,j,g;return a[8]===Symbol.for("react.memo_cache_sentinel")?(f=p("flex items-center cursor-pointer ml-1 text-muted-foreground whitespace-nowrap group h-full"),a[8]=f):f=a[8],a[9]!==t?(y=e=>{e.stopPropagation(),t.data.isDirectory&&t.toggle()},b=i.jsx(Se,{node:t}),a[9]=t,a[10]=y,a[11]=b):(y=a[10],b=a[11]),a[12]!==x?(j=x(),a[12]=x,a[13]=j):j=a[13],a[14]!==s||a[15]!==y||a[16]!==b||a[17]!==j?(g=i.jsxs("div",{style:s,className:f,onClick:y,children:[b,j]}),a[14]=s,a[15]=y,a[16]=b,a[17]=j,a[18]=g):g=a[18],g},Se=e=>{const a=r(3),{node:t}=e;if(!t.data.isDirectory){let e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(e=i.jsx("span",{className:"w-5 h-5 flex-shrink-0"}),a[0]=e):e=a[0],e}let s;return a[1]!==t.isOpen?(s=t.isOpen?i.jsx(y,{className:"w-5 h-5 flex-shrink-0"}):i.jsx(b,{className:"w-5 h-5 flex-shrink-0"}),a[1]=t.isOpen,a[2]=s):s=a[2],s},Me=e=>{const a=r(7),{header:t,files:s}=e;if(0===s.length)return null;let o,n,l;return a[0]!==s?(o=s.map(We),a[0]=s,a[1]=o):o=a[1],a[2]!==o?(n=i.jsx("div",{className:"flex flex-col divide-y divide-[var(--slate-3)] border rounded overflow-hidden max-h-[48rem] overflow-y-auto shadow-sm bg-background",children:o}),a[2]=o,a[3]=n):n=a[3],a[4]!==t||a[5]!==n?(l=i.jsxs("div",{className:"flex flex-col gap-2",children:[t,n]}),a[4]=t,a[5]=n,a[6]=l):l=a[6],l},Ce=e=>{const a=r(8),{Icon:t,control:s,children:o}=e;let n,l,c;return a[0]!==t?(n=i.jsx(t,{className:"h-5 w-5"}),a[0]=t,a[1]=n):n=a[1],a[2]!==n||a[3]!==o?(l=i.jsxs("h2",{className:"flex items-center gap-2 text-xl font-semibold text-muted-foreground select-none",children:[n,o]}),a[2]=n,a[3]=o,a[4]=l):l=a[4],a[5]!==l||a[6]!==s?(c=i.jsxs("div",{className:"flex items-center justify-between gap-2",children:[l,s]}),a[5]=l,a[6]=s,a[7]=c):c=a[7],c},ze=e=>{const a=r(39),{file:t}=e;let s;a[0]!==t.path?(s=L(t.path),a[0]=t.path,a[1]=s):s=a[1];const o=s;let n,l,c,d;if(a[2]!==o||a[3]!==t){const e=C(o?`?file=${t.initializationId}&session_id=${t.path}`:`?file=${t.path}`);let s;a[8]!==t.path?(s=t.path.endsWith(".md"),a[8]=t.path,a[9]=s):s=a[9],n=s,l="py-1.5 px-4 hover:bg-[var(--blue-2)] hover:text-primary transition-all duration-300 cursor-pointer group relative flex gap-4 items-center",c=t.path,d=e.toString(),a[2]=o,a[3]=t,a[4]=n,a[5]=l,a[6]=c,a[7]=d}else n=a[4],l=a[5],c=a[6],d=a[7];const h=t.initializationId||t.path;let m,x,f,u,p,y,b,j,g,v,k;return a[10]!==h?(m=ge(h),a[10]=h,a[11]=m):m=a[11],a[12]!==n?(x=n&&i.jsx("span",{className:"opacity-80",children:i.jsx(ne,{})}),a[12]=n,a[13]=x):x=a[13],a[14]!==t.name||a[15]!==x?(f=i.jsxs("span",{className:"flex items-center gap-2",children:[t.name,x]}),a[14]=t.name,a[15]=x,a[16]=f):f=a[16],a[17]!==t.path?(u=i.jsx("p",{title:t.path,className:"text-sm text-muted-foreground overflow-hidden whitespace-nowrap overflow-ellipsis",children:t.path}),a[17]=t.path,a[18]=u):u=a[18],a[19]!==f||a[20]!==u?(p=i.jsxs("div",{className:"flex flex-col justify-between flex-1",children:[f,u]}),a[19]=f,a[20]=u,a[21]=p):p=a[21],a[22]!==t.path?(y=i.jsx("div",{children:i.jsx(Ie,{filePath:t.path})}),a[22]=t.path,a[23]=y):y=a[23],a[24]===Symbol.for("react.memo_cache_sentinel")?(b=i.jsx(H,{size:20,className:"group-hover:opacity-100 opacity-0 transition-all duration-300 text-primary"}),a[24]=b):b=a[24],a[25]!==y?(j=i.jsxs("div",{className:"flex gap-3 items-center",children:[y,b]}),a[25]=y,a[26]=j):j=a[26],a[27]!==t.lastModified?(g=!!t.lastModified&&i.jsx("div",{className:"text-xs text-muted-foreground opacity-80",children:q(1e3*t.lastModified)}),a[27]=t.lastModified,a[28]=g):g=a[28],a[29]!==j||a[30]!==g?(v=i.jsxs("div",{className:"flex flex-col gap-1 items-end",children:[j,g]}),a[29]=j,a[30]=g,a[31]=v):v=a[31],a[32]!==l||a[33]!==c||a[34]!==d||a[35]!==m||a[36]!==p||a[37]!==v?(k=i.jsxs("a",{className:l,href:d,target:m,children:[p,v]},c),a[32]=l,a[33]=c,a[34]=d,a[35]=m,a[36]=p,a[37]=v,a[38]=k):k=a[38],k},Ie=e=>{const a=r(9),{filePath:t}=e,{openConfirm:s,closeModal:n}=E(),{runningNotebooks:l,setRunningNotebooks:c}=o.useContext(pe);if(!l.has(t))return null;let d,h,m;return a[0]!==s||a[1]!==l||a[2]!==t||a[3]!==c||a[4]!==n?(d=e=>{e.stopPropagation(),e.preventDefault(),s({title:"Shutdown",description:"This will terminate the Python kernel. You'll lose all data that's in memory.",variant:"destructive",confirmAction:i.jsx(Y,{onClick:e=>{const a=l.get(t);Z(a),K({sessionId:a.sessionId}).then((e=>{c(_.keyBy(e.files,(e=>e.path)))})),n(),X({description:"Notebook has been shutdown."})},"aria-label":"Confirm Shutdown",children:"Shutdown"})})},a[0]=s,a[1]=l,a[2]=t,a[3]=c,a[4]=n,a[5]=d):d=a[5],a[6]===Symbol.for("react.memo_cache_sentinel")?(h=i.jsx(ce,{size:14}),a[6]=h):h=a[6],a[7]!==d?(m=i.jsx(ee,{content:"Shutdown",children:i.jsx($,{size:"icon",variant:"outline",className:"opacity-80 hover:opacity-100 hover:bg-accent text-destructive border-destructive hover:border-destructive hover:text-destructive bg-background hover:bg-[var(--red-1)]",onClick:d,children:h})}),a[7]=d,a[8]=m):m=a[8],m},Oe=()=>{const e=r(3);let a;e[0]===Symbol.for("react.memo_cache_sentinel")?(a=j(),e[0]=a):a=e[0];const t=a;let s,o;return e[1]===Symbol.for("react.memo_cache_sentinel")?(s=i.jsx("h2",{className:"text-lg font-semibold",children:"Create a new notebook"}),e[1]=s):s=e[1],e[2]===Symbol.for("react.memo_cache_sentinel")?(o=i.jsxs("a",{className:"relative rounded-lg p-6 group\n      text-primary hover:bg-[var(--blue-2)] shadow-mdSolid shadow-accent border\n      transition-all duration-300 cursor-pointer\n      ",href:t,target:"_blank",rel:"noreferrer",children:[s,i.jsx("div",{className:"group-hover:opacity-100 opacity-0 absolute right-5 top-0 bottom-0 rounded-lg flex items-center justify-center transition-all duration-300",children:i.jsx(H,{size:24})})]}),e[2]=o):o=e[2],o},Pe={intro:["Introduction",de],dataflow:["Dataflow",le],ui:["UI Elements",ue],markdown:["Markdown",F],plots:["Plots",me],sql:["SQL",G],layout:["Layout",ie],fileformat:["File format",V],"for-jupyter-users":["For Jupyter users",fe],"markdown-format":["Markdown format",ne]},De=()=>{const e=r(3);let a,t,s;return e[0]===Symbol.for("react.memo_cache_sentinel")?(a=i.jsx(xe,{className:"w-4 h-4 mr-2"}),e[0]=a):a=e[0],e[1]===Symbol.for("react.memo_cache_sentinel")?(t=i.jsx(J,{asChild:!0,children:i.jsxs($,{"data-testid":"open-tutorial-button",size:"xs",variant:"outline",children:[a,"Tutorials",i.jsx(Q,{className:"w-3 h-3 ml-1"})]})}),e[1]=t):t=e[1],e[2]===Symbol.for("react.memo_cache_sentinel")?(s=i.jsxs(g,{children:[t,i.jsx(v,{side:"bottom",className:"no-print",children:k.entries(Pe).map(He)})]}),e[2]=s):s=e[2],s};function Te(){return w()}function Ae(e){return e.path}async function Re(){const e=await N();return _.keyBy(e.files,Ae)}function $e(e){return e.path}function Be(){return null}function We(e){return i.jsx(ze,{file:e},e.path)}function He(e){const[a,t]=e,[s,r]=t;return i.jsxs(S,{onSelect:async()=>{const e=await M({tutorialId:a});e&&window.open(C(`?file=${e.path}`).toString(),"_blank")},children:[i.jsx(r,{strokeWidth:1.5,className:"w-4 h-4 mr-2"}),s]},a)}export{ve as default};
