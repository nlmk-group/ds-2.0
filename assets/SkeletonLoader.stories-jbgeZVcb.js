import{j as e,a as i}from"./jsx-runtime-2xDJh5tt.js";import{S as t}from"./index-CfZTnDhX.js";import{s as p}from"./styles.module-DeLvTIFi.js";import{a as x}from"./argsTypes-DUt--zaH.js";import"./generateUUID-xFqDjoto.js";import"./index-qrvtYV6q.js";import"./index-CTkD9j2t.js";import{B as a}from"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import"./index-nWYpQihe.js";import"./index-C6sJWxXv.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-CBS9NtKm.js";import"./32-DtWm84R6.js";import"./index-CBqU2yxZ.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-CMH8wQUv.js";const u=c=>e("div",{style:{minHeight:80},children:c()}),b={title:"Components/SkeletonLoader/Stories",component:t,decorators:[u],argTypes:x},o=()=>e("div",{className:p.wrapper,children:e("div",{className:p.row,children:e(t,{width:"900px"})})});o.storyName="Skeleton loader состояние по умолчанию";const r=()=>i("div",{className:p.wrapper,children:[i(a,{gap:20,children:[e(t,{width:"50px",count:2,height:"50px"}),e(t,{width:"50px",count:2,height:"50px"}),e(t,{width:"780px",count:2,height:"50px"})]}),i(a,{gap:20,children:[e(t,{width:"600px",count:4,height:"50px"}),e(t,{width:"230px",count:4,height:"50px"}),e(t,{width:"50px",count:4,height:"50px"})]})]});r.storyName="Skeleton loader с множественными блоками";var n,s,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <div className={styles.row}>
        <SkeletonLoader width="900px" />
      </div>
    </div>;
}`,...(d=(s=o.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var m,h,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <Box gap={20}>
        <SkeletonLoader width="50px" count={2} height="50px" />
        <SkeletonLoader width="50px" count={2} height="50px" />
        <SkeletonLoader width="780px" count={2} height="50px" />
      </Box>
      <Box gap={20}>
        <SkeletonLoader width="600px" count={4} height="50px" />
        <SkeletonLoader width="230px" count={4} height="50px" />
        <SkeletonLoader width="50px" count={4} height="50px" />
      </Box>
    </div>;
}`,...(l=(h=r.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};const q=["SkeletonLoaderDefault","SkeletonLoaderMulti"];export{o as SkeletonLoaderDefault,r as SkeletonLoaderMulti,q as __namedExportsOrder,b as default};
