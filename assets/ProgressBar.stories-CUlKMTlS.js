import{j as o}from"./jsx-runtime-2xDJh5tt.js";import{a5 as t}from"./index-DgIw7IGB.js";import{a as u}from"./argsTypes-BsnBMKlz.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./generateUUID-DLndrDCe.js";import"./clsx.m-CH7BE6MN.js";import"./index-CkVMA9Py.js";import"./32-DVSD7kw1.js";import"./index-B9xZgPEK.js";import"./index-DWzUtgDv.js";import"./index-DAa4i1Qv.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./index-Dd2IALEV.js";import"./index-4J70fF5O.js";import"./index-BGOHbkSJ.js";import"./index-Dp7-Jy-a.js";import"./index-Rnr0z56Y.js";import"./get-DbIoSxMH.js";const d="_wrapper_1mm44_1",g={wrapper:d},l=s=>o("div",{className:g.wrapper,children:s()}),X={title:"Components/ProgressBar/Stories",component:t,argTypes:u,decorators:[l]},e=s=>o("div",{style:{width:"400px"},children:o(t,{...s})});e.storyName="ProgressBar по умолчанию";const r=s=>o("div",{style:{width:"400px"},children:o(t,{label:"Общий прогресс",...s})});r.storyName="ProgressBar с лейблом";r.args={percentage:50};var a,p,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(argsTypes: IProgressBarProps): JSX.Element => {
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
