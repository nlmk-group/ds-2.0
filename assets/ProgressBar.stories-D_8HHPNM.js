import{j as o}from"./jsx-runtime-2xDJh5tt.js";import{a5 as t}from"./index-DWTGGx_t.js";import{a as u}from"./argsTypes-BsnBMKlz.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./generateUUID-DZpKhNdB.js";import"./clsx.m-CH7BE6MN.js";import"./index-BR2u5piM.js";import"./32-BI8cdrFX.js";import"./index-C-x6zlLc.js";import"./index-D3aZeTS2.js";import"./index-BtM5VmRH.js";import"./index-CgSHB1U0.js";import"./types-CpBSVUgC.js";import"./index-pmCx02Kh.js";import"./index-Y8Vz1tB_.js";import"./index-j1olA-rT.js";import"./index-Dp7-Jy-a.js";import"./index-ByRza-M8.js";import"./get-DbIoSxMH.js";const d="_wrapper_1mm44_1",g={wrapper:d},l=s=>o("div",{className:g.wrapper,children:s()}),X={title:"Components/ProgressBar/Stories",component:t,argTypes:u,decorators:[l]},e=s=>o("div",{style:{width:"400px"},children:o(t,{...s})});e.storyName="ProgressBar по умолчанию";const r=s=>o("div",{style:{width:"400px"},children:o(t,{label:"Общий прогресс",...s})});r.storyName="ProgressBar с лейблом";r.args={percentage:50};var a,p,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(argsTypes: IProgressBarProps): JSX.Element => {
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
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const C=["ProgressBarDefault","ProgressBarWithLabel"];export{e as ProgressBarDefault,r as ProgressBarWithLabel,C as __namedExportsOrder,X as default};
