import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{$ as t}from"./index-C1Xf_hS0.js";import{g as s}from"./styles.module-ox-emdf8.js";import{a as h}from"./argsTypes-ChPN6PXR.js";import"./generateUUID-1tgHdX0-.js";import"./index-eOH20s0c.js";import"./index-DppSdhCO.js";import{B as i}from"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-CXG1awCY.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-qxD0tkeT.js";import"./index-Br4tp0-d.js";import"./32-Bf_1a6Rp.js";import"./index-Bnop-kX6.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-B5g4YLzC.js";const c=l=>e.jsx("div",{style:{minHeight:80},children:e.jsx(l,{})}),H={title:"Components/SkeletonLoader/Stories",component:t,decorators:[c],argTypes:h},o=()=>e.jsx("div",{className:s.wrapper,children:e.jsx("div",{className:s.row,children:e.jsx(t,{width:"900px"})})});o.storyName="Skeleton loader состояние по умолчанию";const r=()=>e.jsxs("div",{className:s.wrapper,children:[e.jsxs(i,{gap:20,children:[e.jsx(t,{width:"50px",count:2,height:"50px"}),e.jsx(t,{width:"50px",count:2,height:"50px"}),e.jsx(t,{width:"780px",count:2,height:"50px"})]}),e.jsxs(i,{gap:20,children:[e.jsx(t,{width:"600px",count:4,height:"50px"}),e.jsx(t,{width:"230px",count:4,height:"50px"}),e.jsx(t,{width:"50px",count:4,height:"50px"})]})]});r.storyName="Skeleton loader с множественными блоками";var n,p,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <div className={styles.row}>
        <SkeletonLoader width="900px" />
      </div>
    </div>;
}`,...(a=(p=o.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};var d,m,x;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(x=(m=r.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const O=["SkeletonLoaderDefault","SkeletonLoaderMulti"];export{o as SkeletonLoaderDefault,r as SkeletonLoaderMulti,O as __namedExportsOrder,H as default};