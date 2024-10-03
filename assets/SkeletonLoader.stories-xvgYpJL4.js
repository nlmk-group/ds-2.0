import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{K as t}from"./index-BB0QFCoF.js";import{s}from"./styles.module-BSI8LUpZ.js";import{a as l}from"./argsTypes-DUt--zaH.js";import"./generateUUID-vFnGh3I6.js";import"./index-CNoQ_QnE.js";import"./index-CSbymPMC.js";import{B as i}from"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-Cw4KJrZO.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-BvIp-sDO.js";import"./32-MLA202Yz.js";import"./index-DQ2WTIsS.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-BKbm6zW0.js";const c=h=>e.jsx("div",{style:{minHeight:80},children:h()}),O={title:"Components/SkeletonLoader/Stories",component:t,decorators:[c],argTypes:l},o=()=>e.jsx("div",{className:s.wrapper,children:e.jsx("div",{className:s.row,children:e.jsx(t,{width:"900px"})})});o.storyName="Skeleton loader состояние по умолчанию";const r=()=>e.jsxs("div",{className:s.wrapper,children:[e.jsxs(i,{gap:20,children:[e.jsx(t,{width:"50px",count:2,height:"50px"}),e.jsx(t,{width:"50px",count:2,height:"50px"}),e.jsx(t,{width:"780px",count:2,height:"50px"})]}),e.jsxs(i,{gap:20,children:[e.jsx(t,{width:"600px",count:4,height:"50px"}),e.jsx(t,{width:"230px",count:4,height:"50px"}),e.jsx(t,{width:"50px",count:4,height:"50px"})]})]});r.storyName="Skeleton loader с множественными блоками";var p,n,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <div className={styles.row}>
        <SkeletonLoader width="900px" />
      </div>
    </div>;
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var d,m,x;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(x=(m=r.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const P=["SkeletonLoaderDefault","SkeletonLoaderMulti"];export{o as SkeletonLoaderDefault,r as SkeletonLoaderMulti,P as __namedExportsOrder,O as default};
