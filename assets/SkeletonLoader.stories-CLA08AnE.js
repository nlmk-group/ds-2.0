import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{Z as o,Y as j}from"./TreeList-BlowYYWI.js";import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import{B as p}from"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./index-Bnop-kX6.js";import"./32-BTlKmMLd.js";import{a as A}from"./argsTypes-B4JlPUHH.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";const y=r=>e.jsx("div",{style:{minHeight:80},children:e.jsx(r,{})}),z={title:"Components/SkeletonLoader/Stories",component:o,decorators:[y],argTypes:A},s=r=>e.jsx(o,{width:"900px",...r});s.storyName="Skeleton loader состояние по умолчанию";const n=r=>e.jsx(s,{...r});n.storyName="Skeleton loader c анимацией пульсации";n.args={animation:"pulse"};const a=r=>{const t={height:"50px",...r};return e.jsxs("div",{style:{width:"900px"},children:[e.jsxs(p,{gap:20,children:[e.jsx(o,{width:"50px",count:2,...t}),e.jsx(o,{width:"50px",count:2,...t}),e.jsx(o,{width:"780px",count:2,...t})]}),e.jsxs(p,{gap:20,children:[e.jsx(o,{width:"600px",count:4,...t}),e.jsx(o,{width:"230px",count:4,...t}),e.jsx(o,{width:"50px",count:4,...t})]})]})};a.storyName="Skeleton loader с множественными блоками";const i=r=>{const t={height:"50px",animation:j.pulse,...r};return e.jsxs("div",{style:{width:"900px"},children:[e.jsxs(p,{gap:20,children:[e.jsx(o,{width:"50px",count:2,...t}),e.jsx(o,{width:"50px",count:2,...t}),e.jsx(o,{width:"780px",count:2,...t})]}),e.jsxs(p,{gap:20,children:[e.jsx(o,{width:"600px",count:4,...t}),e.jsx(o,{width:"230px",count:4,...t}),e.jsx(o,{width:"50px",count:4,...t})]})]})};i.storyName="Skeleton loader с множественными блоками и анимацией пульсации";var d,l,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`(argTypes: ISkeletonLoadingProps): JSX.Element => {
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
}`,...(L=(w=i.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};const F=["SkeletonLoaderDefault","SkeletonLoaderPulseAnimation","SkeletonLoaderMulti","SkeletonLoaderMultiPulseAnimation"];export{s as SkeletonLoaderDefault,a as SkeletonLoaderMulti,i as SkeletonLoaderMultiPulseAnimation,n as SkeletonLoaderPulseAnimation,F as __namedExportsOrder,z as default};
