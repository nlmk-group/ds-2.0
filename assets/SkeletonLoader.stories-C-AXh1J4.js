import{j as e}from"./iframe-zk5xXBtA.js";import{B as i}from"./index-cDYWclvM.js";import{a as l,S as o,E as p}from"./argsTypes-DZqsGvgZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";const c=s=>e.jsx("div",{style:{minHeight:80},children:e.jsx(s,{})}),m={title:"Components/SkeletonLoader/Stories",component:o,decorators:[c],argTypes:l},r=s=>e.jsx(o,{width:"900px",...s});r.storyName="Skeleton loader состояние по умолчанию";const n=s=>e.jsx(r,{...s});n.storyName="Skeleton loader c анимацией пульсации";n.args={animation:"pulse"};const a=s=>{const t={height:"50px",...s};return e.jsxs("div",{style:{width:"900px"},children:[e.jsxs(i,{gap:20,children:[e.jsx(o,{width:"50px",count:2,...t}),e.jsx(o,{width:"50px",count:2,...t}),e.jsx(o,{width:"780px",count:2,...t})]}),e.jsxs(i,{gap:20,children:[e.jsx(o,{width:"600px",count:4,...t}),e.jsx(o,{width:"230px",count:4,...t}),e.jsx(o,{width:"50px",count:4,...t})]})]})};a.storyName="Skeleton loader с множественными блоками";const d=s=>{const t={height:"50px",animation:p.pulse,...s};return e.jsxs("div",{style:{width:"900px"},children:[e.jsxs(i,{gap:20,children:[e.jsx(o,{width:"50px",count:2,...t}),e.jsx(o,{width:"50px",count:2,...t}),e.jsx(o,{width:"780px",count:2,...t})]}),e.jsxs(i,{gap:20,children:[e.jsx(o,{width:"600px",count:4,...t}),e.jsx(o,{width:"230px",count:4,...t}),e.jsx(o,{width:"50px",count:4,...t})]})]})};d.storyName="Skeleton loader с множественными блоками и анимацией пульсации";r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(argTypes: ISkeletonLoadingProps): JSX.Element => {
  return <SkeletonLoader width="900px" {...argTypes} />;
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(argsTypes: ISkeletonLoadingProps): JSX.Element => {
  return <SkeletonLoaderDefault {...argsTypes} />;
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(argTypes: ISkeletonLoadingProps): JSX.Element => {
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
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(argTypes: ISkeletonLoadingProps): JSX.Element => {
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
}`,...d.parameters?.docs?.source}}};const S=["SkeletonLoaderDefault","SkeletonLoaderPulseAnimation","SkeletonLoaderMulti","SkeletonLoaderMultiPulseAnimation"];export{r as SkeletonLoaderDefault,a as SkeletonLoaderMulti,d as SkeletonLoaderMultiPulseAnimation,n as SkeletonLoaderPulseAnimation,S as __namedExportsOrder,m as default};
