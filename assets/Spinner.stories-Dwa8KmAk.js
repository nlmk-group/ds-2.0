import{j as r}from"./jsx-runtime-DFnSfiB4.js";import{aq as e,O as a}from"./index-LmI_Dv35.js";import"./generateUUID-DDiDEiZj.js";import"./index-BUicYAu_.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-BKAatnfy.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CLzAcar6.js";import{z as C}from"./32-sVrGXRAZ.js";import"./index-DQ2WTIsS.js";import{g as I}from"./styles.module-DyNiVTaI.js";import{a as N}from"./argsTypes-MraCgthT.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-oHtgdQEu.js";import"./index-BKbm6zW0.js";const _="_wrapper_13k5q_1",w={wrapper:_},O="Spinner состояние по умолчанию",P="Spinner размера medium",T="Spinner с разными цветами",X="Spinner где Icon, как children (JSX.Element)",R="Spinner c процентом",J=n=>r.jsx("div",{className:w.wrapper,children:r.jsx(n,{})}),nr={title:"Components/Spinner/Stories",component:e,decorators:[J],argTypes:N},s=n=>r.jsx("div",{children:r.jsx(e,{...n})});s.storyName=O;const o=n=>r.jsx("div",{children:r.jsx(e,{size:"m"})});o.storyName=P;const i=n=>r.jsx("div",{children:r.jsx(e,{bgColor:"#ff6e40",color:"#1e3d59"})});i.storyName=T;const t=n=>r.jsx("div",{children:r.jsx(e,{children:r.jsx(C,{htmlColor:"var(--ac-loader-stroke-progress)"})})});t.storyName=X;const p=n=>r.jsxs("div",{className:I.row,style:{display:"flex",gap:20},children:[r.jsx(e,{size:a.xxl,percent:96}),r.jsx(e,{size:a.xl,percent:56}),r.jsx(e,{size:a.l,percent:40}),r.jsx(e,{size:a.m,percent:32})]});p.storyName=R;var c,m,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div>
      <Spinner {...args} />
    </div>;
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var S,d,u;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div>
      <Spinner size="m" />
    </div>;
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var x,g,E;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div>
      <Spinner bgColor="#ff6e40" color="#1e3d59" />
    </div>;
}`,...(E=(g=i.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var j,v,z;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div>
      <Spinner>
        <IconAutoRenewReloadOutlined24 htmlColor="var(--ac-loader-stroke-progress)" />
      </Spinner>
    </div>;
}`,...(z=(v=t.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var h,f,y;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div className={styles.row} style={{
    display: 'flex',
    gap: 20
  }}>
      <Spinner size={ESizesSpinner.xxl} percent={96} />
      <Spinner size={ESizesSpinner.xl} percent={56} />
      <Spinner size={ESizesSpinner.l} percent={40} />
      <Spinner size={ESizesSpinner.m} percent={32} />
    </div>;
}`,...(y=(f=p.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const sr=["SpinnerDefault","SpinnerMSize","SpinnerChangeColor","SpinnerWithIcon","SpinnerWithPercent"];export{i as SpinnerChangeColor,s as SpinnerDefault,o as SpinnerMSize,t as SpinnerWithIcon,p as SpinnerWithPercent,sr as __namedExportsOrder,nr as default};
