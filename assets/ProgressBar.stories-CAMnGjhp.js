import{j as o}from"./jsx-runtime-DFnSfiB4.js";import{ak as t}from"./index-C8yIAa62.js";import{a as d}from"./argsTypes-BsnBMKlz.js";import"./index-DQ2WTIsS.js";import"./index-c1a7ry8u.js";import"./clsx-B-dksMZM.js";import"./generateUUID-7LaMQRml.js";import"./32-l5SNSvvS.js";import"./index-ehXB0alm.js";import"./index-KO6O_hQW.js";import"./index-StdbG6rE.js";import"./index-rzy6QoZO.js";import"./index-CSbymPMC.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./index-D_J9Vxng.js";import"./index-BKbm6zW0.js";import"./index-D5U3DYwn.js";import"./index-Bl5L39jK.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";const g="_wrapper_16nho_1",l={wrapper:g},P=s=>o.jsx("div",{className:l.wrapper,children:s()}),k={title:"Components/ProgressBar/Stories",component:t,argTypes:d,decorators:[P]},e=s=>o.jsx("div",{style:{width:"400px"},children:o.jsx(t,{...s})});e.storyName="ProgressBar по умолчанию";const r=s=>o.jsx("div",{style:{width:"400px"},children:o.jsx(t,{label:"Общий прогресс",...s})});r.storyName="ProgressBar с лейблом";r.args={percentage:50};var a,p,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(argsTypes: IProgressBarProps): JSX.Element => {
  return <div style={{
    width: '400px'
  }}>
      <ProgressBar {...argsTypes} />
    </div>;
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,n,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`(argsTypes: IProgressBarProps): JSX.Element => {
  return <div style={{
    width: '400px'
  }}>
      <ProgressBar label="Общий прогресс" {...argsTypes} />
    </div>;
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const C=["ProgressBarDefault","ProgressBarWithLabel"];export{e as ProgressBarDefault,r as ProgressBarWithLabel,C as __namedExportsOrder,k as default};
