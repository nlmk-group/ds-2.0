import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{_ as o,Z as j}from"./TreeList-BjeWiidJ.js";import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-WHoiTdKD.js";import{B as p}from"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import"./index-BcJSXhQi.js";import"./32-CkUgnIrf.js";import{a as A}from"./argsTypes-C14v2AK_.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const y=r=>e.jsx("div",{style:{minHeight:80},children:e.jsx(r,{})}),K={title:"Components/SkeletonLoader/Stories",component:o,decorators:[y],argTypes:A},s=r=>e.jsx(o,{width:"900px",...r});s.storyName="Skeleton loader состояние по умолчанию";const n=r=>e.jsx(s,{...r});n.storyName="Skeleton loader c анимацией пульсации";n.args={animation:"pulse"};const a=r=>{const t={height:"50px",...r};return e.jsxs("div",{style:{width:"900px"},children:[e.jsxs(p,{gap:20,children:[e.jsx(o,{width:"50px",count:2,...t}),e.jsx(o,{width:"50px",count:2,...t}),e.jsx(o,{width:"780px",count:2,...t})]}),e.jsxs(p,{gap:20,children:[e.jsx(o,{width:"600px",count:4,...t}),e.jsx(o,{width:"230px",count:4,...t}),e.jsx(o,{width:"50px",count:4,...t})]})]})};a.storyName="Skeleton loader с множественными блоками";const i=r=>{const t={height:"50px",animation:j.pulse,...r};return e.jsxs("div",{style:{width:"900px"},children:[e.jsxs(p,{gap:20,children:[e.jsx(o,{width:"50px",count:2,...t}),e.jsx(o,{width:"50px",count:2,...t}),e.jsx(o,{width:"780px",count:2,...t})]}),e.jsxs(p,{gap:20,children:[e.jsx(o,{width:"600px",count:4,...t}),e.jsx(o,{width:"230px",count:4,...t}),e.jsx(o,{width:"50px",count:4,...t})]})]})};i.storyName="Skeleton loader с множественными блоками и анимацией пульсации";var d,l,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`(argTypes: ISkeletonLoadingProps): JSX.Element => {
  return <SkeletonLoader width="900px" {...argTypes} />;
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var x,m,u;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`(argsTypes: ISkeletonLoadingProps): JSX.Element => {
  return <SkeletonLoaderDefault {...argsTypes} />;
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var k,g,h;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`(argTypes: ISkeletonLoadingProps): JSX.Element => {
  const skeletonArgs = {
    height: '50px',
    ...argTypes
  };
  return <div style={{
    width: '900px'
  }}>
      <Box gap={20}>
        <SkeletonLoader width="50px" count={2} {...skeletonArgs} />
        <SkeletonLoader width="50px" count={2} {...skeletonArgs} />
        <SkeletonLoader width="780px" count={2} {...skeletonArgs} />
      </Box>
      <Box gap={20}>
        <SkeletonLoader width="600px" count={4} {...skeletonArgs} />
        <SkeletonLoader width="230px" count={4} {...skeletonArgs} />
        <SkeletonLoader width="50px" count={4} {...skeletonArgs} />
      </Box>
    </div>;
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,w,L;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`(argTypes: ISkeletonLoadingProps): JSX.Element => {
  const skeletonArgs = {
    height: '50px',
    animation: ESkeletonAnimation.pulse,
    ...argTypes
  };
  return <div style={{
    width: '900px'
  }}>
      <Box gap={20}>
        <SkeletonLoader width="50px" count={2} {...skeletonArgs} />
        <SkeletonLoader width="50px" count={2} {...skeletonArgs} />
        <SkeletonLoader width="780px" count={2} {...skeletonArgs} />
      </Box>
      <Box gap={20}>
        <SkeletonLoader width="600px" count={4} {...skeletonArgs} />
        <SkeletonLoader width="230px" count={4} {...skeletonArgs} />
        <SkeletonLoader width="50px" count={4} {...skeletonArgs} />
      </Box>
    </div>;
}`,...(L=(w=i.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};const Q=["SkeletonLoaderDefault","SkeletonLoaderPulseAnimation","SkeletonLoaderMulti","SkeletonLoaderMultiPulseAnimation"];export{s as SkeletonLoaderDefault,a as SkeletonLoaderMulti,i as SkeletonLoaderMultiPulseAnimation,n as SkeletonLoaderPulseAnimation,Q as __namedExportsOrder,K as default};
