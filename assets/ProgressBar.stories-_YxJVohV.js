import{j as o}from"./jsx-runtime-2xDJh5tt.js";import{aa as t}from"./index-DUR5naaP.js";import{a as u}from"./argsTypes-BsnBMKlz.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CjrtVycB.js";import"./index-DGfD3wI4.js";import"./clsx.m-CH7BE6MN.js";import"./generateUUID-BitdulAq.js";import"./32-D4qDQhsJ.js";import"./index-nWYpQihe.js";import"./index-D_z3tN8U.js";import"./index-CZmYKfHv.js";import"./index-CTkD9j2t.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./index-BLysk004.js";import"./index-CMH8wQUv.js";import"./index-DHsx0XSp.js";import"./index-BDxIiU-V.js";import"./get-DbIoSxMH.js";const d="_wrapper_1mm44_1",g={wrapper:d},l=s=>o("div",{className:g.wrapper,children:s()}),C={title:"Components/ProgressBar/Stories",component:t,argTypes:u,decorators:[l]},e=s=>o("div",{style:{width:"400px"},children:o(t,{...s})});e.storyName="ProgressBar по умолчанию";const r=s=>o("div",{style:{width:"400px"},children:o(t,{label:"Общий прогресс",...s})});r.storyName="ProgressBar с лейблом";r.args={percentage:50};var a,p,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(argsTypes: IProgressBarProps): JSX.Element => {
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
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const F=["ProgressBarDefault","ProgressBarWithLabel"];export{e as ProgressBarDefault,r as ProgressBarWithLabel,F as __namedExportsOrder,C as default};
