import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{K as t}from"./index-LmI_Dv35.js";import{g as s}from"./styles.module-DyNiVTaI.js";import{a as h}from"./argsTypes-DUt--zaH.js";import"./generateUUID-DDiDEiZj.js";import"./index-BUicYAu_.js";import"./index-CSbymPMC.js";import{B as i}from"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-BKAatnfy.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CLzAcar6.js";import"./32-sVrGXRAZ.js";import"./index-DQ2WTIsS.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-oHtgdQEu.js";import"./index-BKbm6zW0.js";const c=l=>e.jsx("div",{style:{minHeight:80},children:e.jsx(l,{})}),H={title:"Components/SkeletonLoader/Stories",component:t,decorators:[c],argTypes:h},o=()=>e.jsx("div",{className:s.wrapper,children:e.jsx("div",{className:s.row,children:e.jsx(t,{width:"900px"})})});o.storyName="Skeleton loader состояние по умолчанию";const r=()=>e.jsxs("div",{className:s.wrapper,children:[e.jsxs(i,{gap:20,children:[e.jsx(t,{width:"50px",count:2,height:"50px"}),e.jsx(t,{width:"50px",count:2,height:"50px"}),e.jsx(t,{width:"780px",count:2,height:"50px"})]}),e.jsxs(i,{gap:20,children:[e.jsx(t,{width:"600px",count:4,height:"50px"}),e.jsx(t,{width:"230px",count:4,height:"50px"}),e.jsx(t,{width:"50px",count:4,height:"50px"})]})]});r.storyName="Skeleton loader с множественными блоками";var n,p,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(x=(m=r.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const K=["SkeletonLoaderDefault","SkeletonLoaderMulti"];export{o as SkeletonLoaderDefault,r as SkeletonLoaderMulti,K as __namedExportsOrder,H as default};
