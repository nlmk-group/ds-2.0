import{j as s}from"./jsx-runtime-DFnSfiB4.js";import{ak as t}from"./index-LmI_Dv35.js";import{a as d}from"./argsTypes-BsnBMKlz.js";import"./index-DQ2WTIsS.js";import"./index-c1a7ry8u.js";import"./clsx-B-dksMZM.js";import"./generateUUID-DDiDEiZj.js";import"./32-sVrGXRAZ.js";import"./index-ehXB0alm.js";import"./index-BUicYAu_.js";import"./index-BKAatnfy.js";import"./index-rzy6QoZO.js";import"./index-CSbymPMC.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./index-D_J9Vxng.js";import"./index-BKbm6zW0.js";import"./index-D5U3DYwn.js";import"./index-CLzAcar6.js";import"./get-oHtgdQEu.js";const g="_wrapper_16nho_1",l={wrapper:g},P=e=>s.jsx("div",{className:l.wrapper,children:s.jsx(e,{})}),X={title:"Components/ProgressBar/Stories",component:t,argTypes:d,decorators:[P]},o=e=>s.jsx("div",{style:{width:"400px"},children:s.jsx(t,{...e})});o.storyName="ProgressBar по умолчанию";const r=e=>s.jsx("div",{style:{width:"400px"},children:s.jsx(t,{label:"Общий прогресс",...e})});r.storyName="ProgressBar с лейблом";r.args={percentage:50};var a,p,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`(argsTypes: IProgressBarProps): JSX.Element => {
  return <div style={{
    width: '400px'
  }}>
      <ProgressBar {...argsTypes} />
    </div>;
}`,...(i=(p=o.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,n,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`(argsTypes: IProgressBarProps): JSX.Element => {
  return <div style={{
    width: '400px'
  }}>
      <ProgressBar label="Общий прогресс" {...argsTypes} />
    </div>;
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const k=["ProgressBarDefault","ProgressBarWithLabel"];export{o as ProgressBarDefault,r as ProgressBarWithLabel,k as __namedExportsOrder,X as default};
