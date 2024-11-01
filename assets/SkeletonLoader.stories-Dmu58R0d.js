import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{J as t}from"./index-ZojCmbpv.js";import{g as s}from"./styles.module-DyNiVTaI.js";import{a as h}from"./argsTypes-DUt--zaH.js";import"./generateUUID-CG7VmJJw.js";import"./index-XsxLq1mj.js";import"./index-AXtJih2E.js";import{B as i}from"./index-ED8ccfsJ.js";import"./index-CWQ0GGcJ.js";import"./index-BHxe-dnq.js";import"./index-iWHyAWYR.js";import"./index-BztLnIMF.js";import"./index-Udc0C2Qz.js";import"./index-CPdpS9Jm.js";import"./32-Bjhqu_Pf.js";import"./index-Cu9bd8lq.js";import"./clsx-B-dksMZM.js";import"./index-Ckls47V4.js";import"./types-CpBSVUgC.js";import"./get-CeVb1zXw.js";import"./index-7KVZVlDS.js";const c=l=>e.jsx("div",{style:{minHeight:80},children:e.jsx(l,{})}),H={title:"Components/SkeletonLoader/Stories",component:t,decorators:[c],argTypes:h},o=()=>e.jsx("div",{className:s.wrapper,children:e.jsx("div",{className:s.row,children:e.jsx(t,{width:"900px"})})});o.storyName="Skeleton loader состояние по умолчанию";const r=()=>e.jsxs("div",{className:s.wrapper,children:[e.jsxs(i,{gap:20,children:[e.jsx(t,{width:"50px",count:2,height:"50px"}),e.jsx(t,{width:"50px",count:2,height:"50px"}),e.jsx(t,{width:"780px",count:2,height:"50px"})]}),e.jsxs(i,{gap:20,children:[e.jsx(t,{width:"600px",count:4,height:"50px"}),e.jsx(t,{width:"230px",count:4,height:"50px"}),e.jsx(t,{width:"50px",count:4,height:"50px"})]})]});r.storyName="Skeleton loader с множественными блоками";var n,p,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`(): JSX.Element => {
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
