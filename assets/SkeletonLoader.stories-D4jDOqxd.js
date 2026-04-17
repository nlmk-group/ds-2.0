import{j as e}from"./iframe-GHQjEpsb.js";import{B as d}from"./index-BNokyj4D.js";import{S as o,E as l}from"./index-B_r75_Ag.js";import{a as p}from"./argsTypes-DwqvzWlK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";const c=s=>e.jsx("div",{style:{minHeight:80},children:e.jsx(s,{})}),S={title:"Components/SkeletonLoader/Stories",component:o,decorators:[c],argTypes:p},r=s=>e.jsx(o,{width:"900px",...s});r.storyName="Skeleton loader состояние по умолчанию";const n=s=>e.jsx(r,{...s});n.storyName="Skeleton loader c анимацией пульсации";n.args={animation:"pulse"};const a=s=>{const t={height:"50px",...s};return e.jsxs("div",{style:{width:"900px"},children:[e.jsxs(d,{gap:20,children:[e.jsx(o,{width:"50px",count:2,...t}),e.jsx(o,{width:"50px",count:2,...t}),e.jsx(o,{width:"780px",count:2,...t})]}),e.jsxs(d,{gap:20,children:[e.jsx(o,{width:"600px",count:4,...t}),e.jsx(o,{width:"230px",count:4,...t}),e.jsx(o,{width:"50px",count:4,...t})]})]})};a.storyName="Skeleton loader с множественными блоками";const i=s=>{const t={height:"50px",animation:l.pulse,...s};return e.jsxs("div",{style:{width:"900px"},children:[e.jsxs(d,{gap:20,children:[e.jsx(o,{width:"50px",count:2,...t}),e.jsx(o,{width:"50px",count:2,...t}),e.jsx(o,{width:"780px",count:2,...t})]}),e.jsxs(d,{gap:20,children:[e.jsx(o,{width:"600px",count:4,...t}),e.jsx(o,{width:"230px",count:4,...t}),e.jsx(o,{width:"50px",count:4,...t})]})]})};i.storyName="Skeleton loader с множественными блоками и анимацией пульсации";r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(argTypes: ISkeletonLoadingProps): JSX.Element => {
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(argTypes: ISkeletonLoadingProps): JSX.Element => {
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
}`,...i.parameters?.docs?.source}}};const w=["SkeletonLoaderDefault","SkeletonLoaderPulseAnimation","SkeletonLoaderMulti","SkeletonLoaderMultiPulseAnimation"];export{r as SkeletonLoaderDefault,a as SkeletonLoaderMulti,i as SkeletonLoaderMultiPulseAnimation,n as SkeletonLoaderPulseAnimation,w as __namedExportsOrder,S as default};
