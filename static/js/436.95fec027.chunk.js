"use strict";(self.webpackChunkrestaurant_management=self.webpackChunkrestaurant_management||[]).push([[436],{8004:(e,t,a)=>{a.d(t,{Tz:()=>c,l$:()=>n,GK:()=>s,Vy:()=>i,gS:()=>l});var o=a(7503);const r=a(7154).A.create({baseURL:"https://codx-json-server.vercel.app"}),n=async()=>{try{return(await r.get("/api/tables")).data}catch(e){o.oR.error("Somthing Wrong!")}},i=async e=>{try{return(await r.get("/api/tables/"+e)).data}catch(t){o.oR.error("Somthing Wrong!")}},s=async e=>{try{return(await r.get("/api/tables?status=Available")).data.filter((t=>t.seating_capacity>=e))}catch(t){o.oR.error("Somthing Wrong!")}},l=async()=>{try{return(await r.get("/api/tables?status=Booked")).data}catch(e){o.oR.error("Somthing Wrong!")}},c=async e=>{let{id:t,data:a}=e;try{return(await r.patch("/api/tables/"+t,a,{headers:{Accept:"application/json","Content-Type":"application/json"}})).data}catch(n){o.oR.error("Somthing Wrong!")}}},7055:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ne});var o=a(8757),r=a(5865),n=a(5043),i=a(8587),s=a(8168),l=a(8387),c=a(8606);const d=n.createContext();var p=a(2876),u=a(4535),g=a(7056),h=a(2400);function y(e){return(0,h.Ay)("MuiTable",e)}(0,g.A)("MuiTable",["root","stickyHeader"]);var m=a(579);const v=["className","component","padding","size","stickyHeader"],A=(0,u.Ay)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.stickyHeader&&t.stickyHeader]}})((e=>{let{theme:t,ownerState:a}=e;return(0,s.A)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,s.A)({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),b="table",x=n.forwardRef((function(e,t){const a=(0,p.A)({props:e,name:"MuiTable"}),{className:o,component:r=b,padding:u="normal",size:g="medium",stickyHeader:h=!1}=a,x=(0,i.A)(a,v),f=(0,s.A)({},a,{component:r,padding:u,size:g,stickyHeader:h}),w=(e=>{const{classes:t,stickyHeader:a}=e,o={root:["root",a&&"stickyHeader"]};return(0,c.A)(o,y,t)})(f),j=n.useMemo((()=>({padding:u,size:g,stickyHeader:h})),[u,g,h]);return(0,m.jsx)(d.Provider,{value:j,children:(0,m.jsx)(A,(0,s.A)({as:r,role:r===b?null:"table",ref:t,className:(0,l.A)(w.root,o),ownerState:f},x))})}));const f=n.createContext();function w(e){return(0,h.Ay)("MuiTableBody",e)}(0,g.A)("MuiTableBody",["root"]);const j=["className","component"],k=(0,u.Ay)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),T={variant:"body"},R="tbody",C=n.forwardRef((function(e,t){const a=(0,p.A)({props:e,name:"MuiTableBody"}),{className:o,component:r=R}=a,n=(0,i.A)(a,j),d=(0,s.A)({},a,{component:r}),u=(e=>{const{classes:t}=e;return(0,c.A)({root:["root"]},w,t)})(d);return(0,m.jsx)(f.Provider,{value:T,children:(0,m.jsx)(k,(0,s.A)({className:(0,l.A)(u.root,o),as:r,ref:t,role:r===R?null:"rowgroup",ownerState:d},n))})}));var M=a(7266),H=a(6803);function N(e){return(0,h.Ay)("MuiTableCell",e)}const S=(0,g.A)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),z=["align","className","component","padding","scope","size","sortDirection","variant"],O=(0,u.Ay)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t["size".concat((0,H.A)(a.size))],"normal"!==a.padding&&t["padding".concat((0,H.A)(a.padding))],"inherit"!==a.align&&t["align".concat((0,H.A)(a.align))],a.stickyHeader&&t.stickyHeader]}})((e=>{let{theme:t,ownerState:a}=e;return(0,s.A)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?"1px solid ".concat(t.vars.palette.TableCell.border):"1px solid\n    ".concat("light"===t.palette.mode?(0,M.a)((0,M.X4)(t.palette.divider,1),.88):(0,M.e$)((0,M.X4)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:(t.vars||t).palette.text.primary},"footer"===a.variant&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&{padding:"6px 16px",["&.".concat(S.paddingCheckbox)]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})})),W=n.forwardRef((function(e,t){const a=(0,p.A)({props:e,name:"MuiTableCell"}),{align:o="inherit",className:r,component:u,padding:g,scope:h,size:y,sortDirection:v,variant:A}=a,b=(0,i.A)(a,z),x=n.useContext(d),w=n.useContext(f),j=w&&"head"===w.variant;let k;k=u||(j?"th":"td");let T=h;"td"===k?T=void 0:!T&&j&&(T="col");const R=A||w&&w.variant,C=(0,s.A)({},a,{align:o,component:k,padding:g||(x&&x.padding?x.padding:"normal"),size:y||(x&&x.size?x.size:"medium"),sortDirection:v,stickyHeader:"head"===R&&x&&x.stickyHeader,variant:R}),M=(e=>{const{classes:t,variant:a,align:o,padding:r,size:n,stickyHeader:i}=e,s={root:["root",a,i&&"stickyHeader","inherit"!==o&&"align".concat((0,H.A)(o)),"normal"!==r&&"padding".concat((0,H.A)(r)),"size".concat((0,H.A)(n))]};return(0,c.A)(s,N,t)})(C);let S=null;return v&&(S="asc"===v?"ascending":"descending"),(0,m.jsx)(O,(0,s.A)({as:k,ref:t,className:(0,l.A)(M.root,r),"aria-sort":S,scope:T,ownerState:C},b))})),B=W;function _(e){return(0,h.Ay)("MuiTableContainer",e)}(0,g.A)("MuiTableContainer",["root"]);const X=["className","component"],D=(0,u.Ay)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),I=n.forwardRef((function(e,t){const a=(0,p.A)({props:e,name:"MuiTableContainer"}),{className:o,component:r="div"}=a,n=(0,i.A)(a,X),d=(0,s.A)({},a,{component:r}),u=(e=>{const{classes:t}=e;return(0,c.A)({root:["root"]},_,t)})(d);return(0,m.jsx)(D,(0,s.A)({ref:t,as:r,className:(0,l.A)(u.root,o),ownerState:d},n))}));function L(e){return(0,h.Ay)("MuiTableHead",e)}(0,g.A)("MuiTableHead",["root"]);const P=["className","component"],$=(0,u.Ay)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),q={variant:"head"},J="thead",K=n.forwardRef((function(e,t){const a=(0,p.A)({props:e,name:"MuiTableHead"}),{className:o,component:r=J}=a,n=(0,i.A)(a,P),d=(0,s.A)({},a,{component:r}),u=(e=>{const{classes:t}=e;return(0,c.A)({root:["root"]},L,t)})(d);return(0,m.jsx)(f.Provider,{value:q,children:(0,m.jsx)($,(0,s.A)({as:r,className:(0,l.A)(u.root,o),ref:t,role:r===J?null:"rowgroup",ownerState:d},n))})}));function V(e){return(0,h.Ay)("MuiTableRow",e)}const F=(0,g.A)("MuiTableRow",["root","selected","hover","head","footer"]),G=["className","component","hover","selected"],U=(0,u.Ay)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((e=>{let{theme:t}=e;return{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,["&.".concat(F.hover,":hover")]:{backgroundColor:(t.vars||t).palette.action.hover},["&.".concat(F.selected)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,M.X4)(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,M.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}}})),E="tr",Q=n.forwardRef((function(e,t){const a=(0,p.A)({props:e,name:"MuiTableRow"}),{className:o,component:r=E,hover:d=!1,selected:u=!1}=a,g=(0,i.A)(a,G),h=n.useContext(f),y=(0,s.A)({},a,{component:r,hover:d,selected:u,head:h&&"head"===h.variant,footer:h&&"footer"===h.variant}),v=(e=>{const{classes:t,selected:a,hover:o,head:r,footer:n}=e,i={root:["root",a&&"selected",o&&"hover",r&&"head",n&&"footer"]};return(0,c.A)(i,V,t)})(y);return(0,m.jsx)(U,(0,s.A)({as:r,ref:t,className:(0,l.A)(v.root,o),role:r===E?null:"row",ownerState:y},g))})),Y=Q;var Z=a(1906),ee=(a(6007),a(5475));const te=e=>{let{table:t}=e;return(0,m.jsx)(I,{sx:{padding:2},children:(0,m.jsxs)(x,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,m.jsx)(K,{children:(0,m.jsxs)(Y,{children:[(0,m.jsx)(B,{align:"center",children:"Table No"}),(0,m.jsx)(B,{align:"center",children:"Status"}),(0,m.jsx)(B,{align:"center",children:"View"})]})}),(0,m.jsx)(C,{children:t.length&&t.map(((e,t)=>(0,m.jsxs)(Y,{hover:!0,tabIndex:-1,children:[(0,m.jsx)(B,{align:"center",children:e.table_no}),(0,m.jsx)(B,{align:"center",sx:{color:"Available"===e.status?"green":"red"},children:e.status}),(0,m.jsx)(B,{align:"center",children:(0,m.jsx)(ee.N_,{to:"".concat(e.table_no),children:(0,m.jsx)(Z.A,{variant:"contained",children:"view"})})})]},t)))})]})})};var ae=a(8004),oe=a(3747),re=a(8033);const ne=()=>{const{isLoading:e,data:t}=(0,oe.I)({queryKey:["table"],queryFn:ae.l$}),a=t||[];return e?(0,m.jsx)(re.A,{}):(0,m.jsxs)(o.A,{className:"Table-page",children:[(0,m.jsx)(r.A,{className:"first-title",variant:"h6",children:"Table Overview"}),(0,m.jsx)(r.A,{className:"second-title",variant:"h4",children:"A Culinary Journey Awaits!"}),a.length?(0,m.jsx)(te,{table:a}):(0,m.jsx)(r.A,{sx:{textAlign:"center",color:"lightgray",fontSize:"30px",padding:"40px 0"},component:"p",children:" No Tables Available"})]})}},6007:()=>{}}]);
//# sourceMappingURL=436.95fec027.chunk.js.map