import{j as s}from"./jsx-runtime-BRNY0I4F.js";import{ay as t}from"./index-C1Xf_hS0.js";import{a as d}from"./argsTypes-BsnBMKlz.js";import"./index-Bnop-kX6.js";import"./clsx-B-dksMZM.js";import"./generateUUID-1tgHdX0-.js";import"./32-Bf_1a6Rp.js";import"./index-qC5wYQgy.js";import"./index-eOH20s0c.js";import"./index-CXG1awCY.js";import"./index-CH_Nznxf.js";import"./index-ExEzblsB.js";import"./index-DppSdhCO.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-cR4M_wwG.js";import"./index-B5g4YLzC.js";import"./index-FnAFVao7.js";import"./index-qxD0tkeT.js";import"./index-Br4tp0-d.js";const g="_wrapper_1v29i_1",l={wrapper:g},P=e=>s.jsx("div",{className:l.wrapper,children:s.jsx(e,{})}),X={title:"Components/ProgressBar/Stories",component:t,argTypes:d,decorators:[P]},o=e=>s.jsx("div",{style:{width:"400px"},children:s.jsx(t,{...e})});o.storyName="ProgressBar по умолчанию";const r=e=>s.jsx("div",{style:{width:"400px"},children:s.jsx(t,{label:"Общий прогресс",...e})});r.storyName="ProgressBar с лейблом";r.args={percentage:50};var a,p,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`(argsTypes: IProgressBarProps): JSX.Element => {
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
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const C=["ProgressBarDefault","ProgressBarWithLabel"];export{o as ProgressBarDefault,r as ProgressBarWithLabel,C as __namedExportsOrder,X as default};