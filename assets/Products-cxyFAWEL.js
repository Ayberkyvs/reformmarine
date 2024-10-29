import{j as e,r as s}from"./index-DXLnaEM4.js";import{P as w}from"./PageHeading-BFBkk9yn.js";import{B as C}from"./products-DMlsQPRf.js";import{G as S}from"./iconBase-BW-olW6_.js";import{S as m,I as K}from"./index-BwJY-Afy.js";import{C as p}from"./index-BhE4z7Qx.js";import"./isVisible-CTlflVrS.js";import"./Compact-D_jVlBut.js";import"./EllipsisOutlined-C3bsjAO8.js";import"./Keyframes-C_JEBHkB.js";import"./Dropdown-C7aCCU9Y.js";import"./index-CXDDEJUm.js";import"./useLocale-C2wSEsGW.js";import"./button-8m4Qff77.js";import"./CloseCircleFilled-Bl0dwGow.js";import"./CloseOutlined-DfBx3HgG.js";import"./Skeleton-BIFVsT6b.js";function z(r){return S({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11 4h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4v-4h4v4zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"},child:[]}]})(r)}const{Meta:b}=p,{Option:i}=m,{Search:k}=K,d=[{id:1,title:"Ürün 1",description:"Açıklama 1",imageUrl:"https://picsum.photos/300/300",category:"Kategori 1"},{id:2,title:"Ürün 2",description:"Açıklama 2",imageUrl:"https://picsum.photos/300/300",category:"Kategori 2"},{id:3,title:"Ürün 3",description:"Açıklama 3",imageUrl:"https://picsum.photos/300/300",category:"Kategori 1"},{id:4,title:"Ürün 4",description:"Açıklama 4",imageUrl:"https://picsum.photos/300/300",category:"Kategori 3"},{id:5,title:"Ürün 1",description:"Açıklama 1",imageUrl:"https://picsum.photos/300/300",category:"Kategori 1"},{id:6,title:"Ürün 2",description:"Açıklama 2",imageUrl:"https://picsum.photos/300/300",category:"Kategori 2"},{id:7,title:"Ürün 3",description:"Açıklama 3",imageUrl:"https://picsum.photos/300/300",category:"Kategori 1"},{id:8,title:"Ürün 4",description:"Açıklama 4",imageUrl:"https://picsum.photos/300/300",category:"Kategori 3"}];function J(){return e.jsxs("section",{children:[e.jsx(w,{title:"Products",backgroundImage:C}),e.jsx("div",{className:"w-full h-fit py-20 border-2",children:e.jsx(A,{})})]})}const A=()=>{const[r,g]=s.useState(""),[o,h]=s.useState(""),[u,x]=s.useState(d),[f,l]=s.useState(!1),v=t=>{g(t),c(t,o)},j=t=>{const a=t.target.value;h(a),l(!0),c(r,a)},c=(t,a)=>{let y=d.filter(n=>n.category.includes(t)&&n.title.toLowerCase().includes(a.toLowerCase()));x(y),l(!1)};return e.jsxs("div",{className:"flex flex-col max-w-screen-xl w-full m-auto p-4 gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between mb-4",children:[e.jsx(k,{placeholder:"Search Product",onChange:j,value:o,loading:f,size:"large"}),e.jsx("div",{className:"flex gap-4 w-full justify-end items-center",children:e.jsxs(m,{onChange:v,value:r,style:{width:200},placeholder:"Select Category",size:"large",children:[e.jsx(i,{value:"",children:"Category"}),e.jsx(i,{value:"Kategori 1",children:"Category 1"}),e.jsx(i,{value:"Kategori 2",children:"Category 2"}),e.jsx(i,{value:"Kategori 3",children:"Category 3"})]})})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:u.map(t=>e.jsx("div",{className:"border rounded-lg overflow-hidden shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-101",children:e.jsx(p,{hoverable:!0,cover:e.jsx("img",{alt:t.title,src:t.imageUrl,className:"object-cover w-full h-40 cursor-pointer"}),actions:[e.jsxs("span",{className:"flex justify-center gap-1 text-center items-center font-semibold",children:[e.jsx(z,{})," ",t.category]})],children:e.jsx(b,{title:t.title,description:t.description,className:"text-sm lg:text-base"})})},t.id))})]})};export{A as ProductList,J as default};