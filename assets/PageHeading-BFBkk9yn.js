import{r as l,b as le,a as ie,m as Y,d as j,C as W,I as Ce,c as z,M as we,T as xe,o as Oe,j as P,L as te}from"./index-DXLnaEM4.js";import{I as se,o as Se}from"./isVisible-CTlflVrS.js";import{g as ce,m as de,c as ue,t as ne}from"./Compact-D_jVlBut.js";import{G as je,H as Pe,I as Ie,J as Ne,O as Ee,l as re,h as Re,Q as ze,S as Be,c as Me,d as Te,U as He,u as _e,z as De,p as me}from"./EllipsisOutlined-C3bsjAO8.js";import{i as oe,D as Xe,g as Ae,R as Le}from"./Dropdown-C7aCCU9Y.js";import{M as Ve,O as Ue}from"./index-CXDDEJUm.js";var We={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},qe=function(t,n){return l.createElement(se,le({},t,{ref:n,icon:We}))},Fe=l.forwardRef(qe);const Ge=e=>{const{componentCls:t,menuCls:n,colorError:r,colorTextLightSolid:o}=e,i=`${n}-item`;return{[`${t}, ${t}-menu-submenu`]:{[`${n} ${i}`]:{[`&${i}-danger:not(${i}-disabled)`]:{color:r,"&:hover":{color:o,backgroundColor:r}}}}}},Ze=e=>{const{componentCls:t,menuCls:n,zIndexPopup:r,dropdownArrowDistance:o,sizePopupArrow:i,antCls:a,iconCls:s,motionDurationMid:m,paddingBlock:h,fontSize:y,dropdownEdgeChildPadding:x,colorTextDisabled:g,fontSizeIcon:b,controlPaddingHorizontal:c,colorBgElevated:f}=e;return[{[t]:{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:r,display:"block","&::before":{position:"absolute",insetBlock:e.calc(i).div(2).sub(o).equal(),zIndex:-9999,opacity:1e-4,content:'""'},[`&-trigger${a}-btn`]:{[`& > ${s}-down, & > ${a}-btn-icon > ${s}-down`]:{fontSize:b}},[`${t}-wrap`]:{position:"relative",[`${a}-btn > ${s}-down`]:{fontSize:b},[`${s}-down::before`]:{transition:`transform ${m}`}},[`${t}-wrap-open`]:{[`${s}-down::before`]:{transform:"rotate(180deg)"}},"\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ":{display:"none"},[`&${a}-slide-down-enter${a}-slide-down-enter-active${t}-placement-bottomLeft,
          &${a}-slide-down-appear${a}-slide-down-appear-active${t}-placement-bottomLeft,
          &${a}-slide-down-enter${a}-slide-down-enter-active${t}-placement-bottom,
          &${a}-slide-down-appear${a}-slide-down-appear-active${t}-placement-bottom,
          &${a}-slide-down-enter${a}-slide-down-enter-active${t}-placement-bottomRight,
          &${a}-slide-down-appear${a}-slide-down-appear-active${t}-placement-bottomRight`]:{animationName:je},[`&${a}-slide-up-enter${a}-slide-up-enter-active${t}-placement-topLeft,
          &${a}-slide-up-appear${a}-slide-up-appear-active${t}-placement-topLeft,
          &${a}-slide-up-enter${a}-slide-up-enter-active${t}-placement-top,
          &${a}-slide-up-appear${a}-slide-up-appear-active${t}-placement-top,
          &${a}-slide-up-enter${a}-slide-up-enter-active${t}-placement-topRight,
          &${a}-slide-up-appear${a}-slide-up-appear-active${t}-placement-topRight`]:{animationName:Pe},[`&${a}-slide-down-leave${a}-slide-down-leave-active${t}-placement-bottomLeft,
          &${a}-slide-down-leave${a}-slide-down-leave-active${t}-placement-bottom,
          &${a}-slide-down-leave${a}-slide-down-leave-active${t}-placement-bottomRight`]:{animationName:Ie},[`&${a}-slide-up-leave${a}-slide-up-leave-active${t}-placement-topLeft,
          &${a}-slide-up-leave${a}-slide-up-leave-active${t}-placement-top,
          &${a}-slide-up-leave${a}-slide-up-leave-active${t}-placement-topRight`]:{animationName:Ne}}},Ee(e,f,{arrowPlacement:{top:!0,bottom:!0}}),{[`${t} ${n}`]:{position:"relative",margin:0},[`${n}-submenu-popup`]:{position:"absolute",zIndex:r,background:"transparent",boxShadow:"none",transformOrigin:"0 0","ul, li":{listStyle:"none",margin:0}},[`${t}, ${t}-menu-submenu`]:Object.assign(Object.assign({},ie(e)),{[n]:Object.assign(Object.assign({padding:x,listStyleType:"none",backgroundColor:f,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary},Y(e)),{"&:empty":{padding:0,boxShadow:"none"},[`${n}-item-group-title`]:{padding:`${j(h)} ${j(c)}`,color:e.colorTextDescription,transition:`all ${m}`},[`${n}-item`]:{position:"relative",display:"flex",alignItems:"center"},[`${n}-item-icon`]:{minWidth:y,marginInlineEnd:e.marginXS,fontSize:e.fontSizeSM},[`${n}-title-content`]:{flex:"auto","> a":{color:"inherit",transition:`all ${m}`,"&:hover":{color:"inherit"},"&::after":{position:"absolute",inset:0,content:'""'}}},[`${n}-item, ${n}-submenu-title`]:Object.assign(Object.assign({clear:"both",margin:0,padding:`${j(h)} ${j(c)}`,color:e.colorText,fontWeight:"normal",fontSize:y,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${m}`,borderRadius:e.borderRadiusSM,"&:hover, &-active":{backgroundColor:e.controlItemBgHover}},Y(e)),{"&-selected":{color:e.colorPrimary,backgroundColor:e.controlItemBgActive,"&:hover, &-active":{backgroundColor:e.controlItemBgActiveHover}},"&-disabled":{color:g,cursor:"not-allowed","&:hover":{color:g,backgroundColor:f,cursor:"not-allowed"},a:{pointerEvents:"none"}},"&-divider":{height:1,margin:`${j(e.marginXXS)} 0`,overflow:"hidden",lineHeight:0,backgroundColor:e.colorSplit},[`${t}-menu-submenu-expand-icon`]:{position:"absolute",insetInlineEnd:e.paddingXS,[`${t}-menu-submenu-arrow-icon`]:{marginInlineEnd:"0 !important",color:e.colorTextDescription,fontSize:b,fontStyle:"normal"}}}),[`${n}-item-group-list`]:{margin:`0 ${j(e.marginXS)}`,padding:0,listStyle:"none"},[`${n}-submenu-title`]:{paddingInlineEnd:e.calc(c).add(e.fontSizeSM).equal()},[`${n}-submenu-vertical`]:{position:"relative"},[`${n}-submenu${n}-submenu-disabled ${t}-menu-submenu-title`]:{[`&, ${t}-menu-submenu-arrow-icon`]:{color:g,backgroundColor:f,cursor:"not-allowed"}},[`${n}-submenu-selected ${t}-menu-submenu-title`]:{color:e.colorPrimary}})})},[re(e,"slide-up"),re(e,"slide-down"),oe(e,"move-up"),oe(e,"move-down"),Re(e,"zoom-big")]]},Ke=e=>Object.assign(Object.assign({zIndexPopup:e.zIndexPopupBase+50,paddingBlock:(e.controlHeight-e.fontSize*e.lineHeight)/2},ze({contentRadius:e.borderRadiusLG,limitVerticalRadius:!0})),Be(e)),Ye=ce("Dropdown",e=>{const{marginXXS:t,sizePopupArrow:n,paddingXXS:r,componentCls:o}=e,i=de(e,{menuCls:`${o}-menu`,dropdownArrowDistance:e.calc(n).div(2).add(t).equal(),dropdownEdgeChildPadding:r});return[Ze(i),Ge(i)]},Ke,{resetStyle:!1}),Q=e=>{var t;const{menu:n,arrow:r,prefixCls:o,children:i,trigger:a,disabled:s,dropdownRender:m,getPopupContainer:h,overlayClassName:y,rootClassName:x,overlayStyle:g,open:b,onOpenChange:c,visible:f,onVisibleChange:$,mouseEnterDelay:I=.15,mouseLeaveDelay:B=.1,autoAdjustOverflow:N=!0,placement:u="",overlay:E,transitionName:O}=e,{getPopupContainer:F,getPrefixCls:C,direction:w,dropdown:p}=l.useContext(W);xe();const R=l.useMemo(()=>{const d=C();return O!==void 0?O:u.includes("top")?`${d}-slide-down`:`${d}-slide-up`},[C,u,O]),G=l.useMemo(()=>u?u.includes("Center")?u.slice(0,u.indexOf("Center")):u:w==="rtl"?"bottomRight":"bottomLeft",[u,w]),v=C("dropdown",o),M=Me(v),[X,A,L]=Ye(v,M),[,T]=Ce(),H=l.Children.only(i),Z=ue(H,{className:z(`${v}-trigger`,{[`${v}-rtl`]:w==="rtl"},H.props.className),disabled:(t=H.props.disabled)!==null&&t!==void 0?t:s}),S=s?[]:a,V=!!(S!=null&&S.includes("contextMenu")),[_,U]=Te(!1,{value:b??f}),D=we(d=>{c==null||c(d,{source:"trigger"}),$==null||$(d),U(d)}),fe=z(y,x,A,L,M,p==null?void 0:p.className,{[`${v}-rtl`]:w==="rtl"}),ve=He({arrowPointAtCenter:typeof r=="object"&&r.pointAtCenter,autoAdjustOverflow:N,offset:T.marginXXS,arrowWidth:r?T.sizePopupArrow:0,borderRadius:T.borderRadius}),$e=l.useCallback(()=>{n!=null&&n.selectable&&(n!=null&&n.multiple)||(c==null||c(!1,{source:"menu"}),U(!1))},[n==null?void 0:n.selectable,n==null?void 0:n.multiple]),he=()=>{let d;return n!=null&&n.items?d=l.createElement(Ve,Object.assign({},n)):typeof E=="function"?d=E():d=E,m&&(d=m(d)),d=l.Children.only(typeof d=="string"?l.createElement("span",null,d):d),l.createElement(Ue,{prefixCls:`${v}-menu`,rootClassName:z(L,M),expandIcon:l.createElement("span",{className:`${v}-menu-submenu-arrow`},l.createElement(Fe,{className:`${v}-menu-submenu-arrow-icon`})),mode:"vertical",selectable:!1,onClick:$e,validator:gt=>{}},d)},[ee,ye]=_e("Dropdown",g==null?void 0:g.zIndex);let K=l.createElement(Xe,Object.assign({alignPoint:V},Se(e,["rootClassName"]),{mouseEnterDelay:I,mouseLeaveDelay:B,visible:_,builtinPlacements:ve,arrow:!!r,overlayClassName:fe,prefixCls:v,getPopupContainer:h||F,transitionName:R,trigger:S,overlay:he,placement:G,onVisibleChange:D,overlayStyle:Object.assign(Object.assign(Object.assign({},p==null?void 0:p.style),g),{zIndex:ee})}),Z);return ee&&(K=l.createElement(De.Provider,{value:ye},K)),X(K)};function Je(e){return Object.assign(Object.assign({},e),{align:{overflow:{adjustX:!1,adjustY:!1}}})}const Qe=Ae(Q,"dropdown",e=>e,Je),ke=e=>l.createElement(Qe,Object.assign({},e),l.createElement("span",null));Q._InternalPanelDoNotUseOrYouWillBeFired=ke;const q=e=>{let{children:t}=e;const{getPrefixCls:n}=l.useContext(W),r=n("breadcrumb");return l.createElement("li",{className:`${r}-separator`,"aria-hidden":"true"},t===""?t:t||"/")};q.__ANT_BREADCRUMB_SEPARATOR=!0;var et=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function tt(e,t){if(e.title===void 0||e.title===null)return null;const n=Object.keys(t).join("|");return typeof e.title=="object"?e.title:String(e.title).replace(new RegExp(`:(${n})`,"g"),(r,o)=>t[o]||r)}function pe(e,t,n,r){if(n==null)return null;const{className:o,onClick:i}=t,a=et(t,["className","onClick"]),s=Object.assign(Object.assign({},me(a,{data:!0,aria:!0})),{onClick:i});return r!==void 0?l.createElement("a",Object.assign({},s,{className:z(`${e}-link`,o),href:r}),n):l.createElement("span",Object.assign({},s,{className:z(`${e}-link`,o)}),n)}function nt(e,t){return(r,o,i,a,s)=>{if(t)return t(r,o,i,a);const m=tt(r,o);return pe(e,r,m,s)}}var J=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const ge=e=>{const{prefixCls:t,separator:n="/",children:r,menu:o,overlay:i,dropdownProps:a,href:s}=e,h=(y=>{if(o||i){const x=Object.assign({},a);if(o){const g=o||{},{items:b}=g,c=J(g,["items"]);x.menu=Object.assign(Object.assign({},c),{items:b==null?void 0:b.map((f,$)=>{var{key:I,title:B,label:N,path:u}=f,E=J(f,["key","title","label","path"]);let O=N??B;return u&&(O=l.createElement("a",{href:`${s}${u}`},O)),Object.assign(Object.assign({},E),{key:I??$,label:O})})})}else i&&(x.overlay=i);return l.createElement(Q,Object.assign({placement:"bottom"},x),l.createElement("span",{className:`${t}-overlay-link`},y,l.createElement(Le,null)))}return y})(r);return h!=null?l.createElement(l.Fragment,null,l.createElement("li",null,h),n&&l.createElement(q,null,n)):null},be=e=>{const{prefixCls:t,children:n,href:r}=e,o=J(e,["prefixCls","children","href"]),{getPrefixCls:i}=l.useContext(W),a=i("breadcrumb",t);return l.createElement(ge,Object.assign({},o,{prefixCls:a}),pe(a,o,n,r))};be.__ANT_BREADCRUMB_ITEM=!0;const rt=e=>{const{componentCls:t,iconCls:n,calc:r}=e;return{[t]:Object.assign(Object.assign({},ie(e)),{color:e.itemColor,fontSize:e.fontSize,[n]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.linkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${j(e.paddingXXS)}`,borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",marginInline:r(e.marginXXS).mul(-1).equal(),"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},Y(e)),"li:last-child":{color:e.lastItemColor},[`${t}-separator`]:{marginInline:e.separatorMargin,color:e.separatorColor},[`${t}-link`]:{[`
          > ${n} + span,
          > ${n} + a
        `]:{marginInlineStart:e.marginXXS}},[`${t}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",padding:`0 ${j(e.paddingXXS)}`,marginInline:r(e.marginXXS).mul(-1).equal(),[`> ${n}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}},ot=e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS}),at=ce("Breadcrumb",e=>{const t=de(e,{});return rt(t)},ot);var ae=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function lt(e){const{breadcrumbName:t,children:n}=e,r=ae(e,["breadcrumbName","children"]),o=Object.assign({title:t},r);return n&&(o.menu={items:n.map(i=>{var{breadcrumbName:a}=i,s=ae(i,["breadcrumbName"]);return Object.assign(Object.assign({},s),{title:a})})}),o}function it(e,t){return l.useMemo(()=>e||(t?t.map(lt):null),[e,t])}var st=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const ct=(e,t)=>{if(t===void 0)return t;let n=(t||"").replace(/^\//,"");return Object.keys(e).forEach(r=>{n=n.replace(`:${r}`,e[r])}),n},k=e=>{const{prefixCls:t,separator:n="/",style:r,className:o,rootClassName:i,routes:a,items:s,children:m,itemRender:h,params:y={}}=e,x=st(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:g,direction:b,breadcrumb:c}=l.useContext(W);let f;const $=g("breadcrumb",t),[I,B,N]=at($),u=it(s,a),E=nt($,h);if(u&&u.length>0){const C=[],w=s||a;f=u.map((p,R)=>{const{path:G,key:v,type:M,menu:X,overlay:A,onClick:L,className:T,separator:H,dropdownProps:Z}=p,S=ct(y,G);S!==void 0&&C.push(S);const V=v??R;if(M==="separator")return l.createElement(q,{key:V},H);const _={},U=R===u.length-1;X?_.menu=X:A&&(_.overlay=A);let{href:D}=p;return C.length&&S!==void 0&&(D=`#/${C.join("/")}`),l.createElement(ge,Object.assign({key:V},_,me(p,{data:!0,aria:!0}),{className:T,dropdownProps:Z,href:D,separator:U?"":n,onClick:L,prefixCls:$}),E(p,y,w,C,D))})}else if(m){const C=ne(m).length;f=ne(m).map((w,p)=>{if(!w)return w;const R=p===C-1;return ue(w,{separator:R?"":n,key:p})})}const O=z($,c==null?void 0:c.className,{[`${$}-rtl`]:b==="rtl"},o,i,B,N),F=Object.assign(Object.assign({},c==null?void 0:c.style),r);return I(l.createElement("nav",Object.assign({className:O,style:F},x),l.createElement("ol",null,f)))};k.Item=be;k.Separator=q;var dt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"},ut=function(t,n){return l.createElement(se,le({},t,{ref:n,icon:dt}))},mt=l.forwardRef(ut);const pt=({className:e})=>{const n=Oe().pathname.split("/").filter(o=>o),r=[{href:"/",title:P.jsx(te,{to:"/",children:P.jsx(mt,{})})},...n.map((o,i)=>{const a=`/${n.slice(0,i+1).join("/")}`;return{title:P.jsx(te,{to:a,className:"text-xs lg:text-base text-center",children:o})}})];return P.jsx(k,{items:r,className:e})};function Ct({title:e,backgroundImage:t,backgroundPosition:n="center"}){return P.jsxs("div",{className:"relative min-h-[350px] flex flex-col items-center justify-center pt-[100px]",style:{backgroundImage:`url(${t})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:`${n}`},children:[P.jsx("div",{className:"absolute top-0 w-full h-full bg-black inset-0 opacity-50 z-[1]"}),P.jsx("h1",{className:"text-white text-center text-2xl lg:text-4xl font-bold z-[2]",children:e}),P.jsx(pt,{className:"mt-2 z-[2]"})]})}export{Ct as P};