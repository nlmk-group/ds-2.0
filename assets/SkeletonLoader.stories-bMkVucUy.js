import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{J as t}from"./index-Bult1pSm.js";import{g as s}from"./styles.module-CfbNvgm1.js";import{a as h}from"./argsTypes-ChPN6PXR.js";import"./generateUUID-DAuIdu-p.js";import"./index-B0lWqv5F.js";import"./index-DPg--y1u.js";import{B as i}from"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-BVI3RfDi.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BXzk8UvY.js";import"./32-CMOOVZNy.js";import"./index-Bnop-kX6.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-CT8gBKwQ.js";const c=l=>e.jsx("div",{style:{minHeight:80},children:e.jsx(l,{})}),C={title:"Components/SkeletonLoader/Stories",component:t,decorators:[c],argTypes:h},o=()=>e.jsx("div",{className:s.wrapper,children:e.jsx("div",{className:s.row,children:e.jsx(t,{width:"900px"})})});o.storyName="Skeleton loader состояние по умолчанию";const r=()=>e.jsxs("div",{className:s.wrapper,children:[e.jsxs(i,{gap:20,children:[e.jsx(t,{width:"50px",count:2,height:"50px"}),e.jsx(t,{width:"50px",count:2,height:"50px"}),e.jsx(t,{width:"780px",count:2,height:"50px"})]}),e.jsxs(i,{gap:20,children:[e.jsx(t,{width:"600px",count:4,height:"50px"}),e.jsx(t,{width:"230px",count:4,height:"50px"}),e.jsx(t,{width:"50px",count:4,height:"50px"})]})]});r.storyName="Skeleton loader с множественными блоками";var n,p,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <div className={styles.row}>
        <SkeletonLoader width="900px" />
      </div>
    </div>;
}`,...(a=(p=o.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};var d,x,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(m=(x=r.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};const H=["SkeletonLoaderDefault","SkeletonLoaderMulti"];export{o as SkeletonLoaderDefault,r as SkeletonLoaderMulti,H as __namedExportsOrder,C as default};
