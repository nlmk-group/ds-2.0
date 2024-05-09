import{j as e,a}from"./jsx-runtime-2xDJh5tt.js";import{S as t}from"./index-lhFT6koy.js";import{s}from"./styles.module-DeLvTIFi.js";import{a as m}from"./argsTypes-DUt--zaH.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx.m-CH7BE6MN.js";const x=h=>e("div",{style:{minHeight:80},children:h()}),N={title:"Components/SkeletonLoader/Stories",component:t,decorators:[x],argTypes:m},o=()=>e("div",{className:s.wrapper,children:e("div",{className:s.row,children:e(t,{width:"900px"})})});o.storyName="Skeleton loader состояние по умолчанию";const r=()=>a("div",{className:s.wrapper,children:[a("div",{className:s.row,children:[e(t,{width:"50px",count:2,height:"50px"}),e(t,{width:"50px",count:2,height:"50px"}),e(t,{width:"780px",count:2,height:"50px"})]}),a("div",{className:s.row,children:[e(t,{width:"600px",count:4,height:"50px"}),e(t,{width:"230px",count:4,height:"50px"}),e(t,{width:"50px",count:4,height:"50px"})]})]});r.storyName="Skeleton loader с множественными блоками";var n,i,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <div className={styles.row}>
        <SkeletonLoader width="900px" />
      </div>
    </div>;
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <div className={styles.row}>
        <SkeletonLoader width="50px" count={2} height="50px" />
        <SkeletonLoader width="50px" count={2} height="50px" />
        <SkeletonLoader width="780px" count={2} height="50px" />
      </div>
      <div className={styles.row}>
        <SkeletonLoader width="600px" count={4} height="50px" />
        <SkeletonLoader width="230px" count={4} height="50px" />
        <SkeletonLoader width="50px" count={4} height="50px" />
      </div>
    </div>;
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const y=["SkeletonLoaderDefault","SkeletonLoaderMulti"];export{o as SkeletonLoaderDefault,r as SkeletonLoaderMulti,y as __namedExportsOrder,N as default};
