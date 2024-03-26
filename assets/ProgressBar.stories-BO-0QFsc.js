import{j as o}from"./clsx.m-CcuEzMhP.js";import{a5 as t}from"./index-eGAKGCMw.js";import{a as u}from"./argsTypes-DUMXDRWR.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./generateUUID-BkPc_NdJ.js";import"./index-fbTu1Hcf.js";import"./32-BmhDzcbC.js";import"./index-SiU_55iz.js";import"./index-CpJBQeN-.js";import"./index-BtM5VmRH.js";import"./index-BzeUb5Di.js";import"./types-CpBSVUgC.js";import"./index-hvdSV1r-.js";import"./index-BO3pQ7ot.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-14g2znra.js";import"./get-DbIoSxMH.js";const d="_wrapper_1b61r_1",g={wrapper:d},l=s=>o("div",{className:g.wrapper,children:s()}),L={title:"Components/ProgressBar/Stories",component:t,argTypes:u,decorators:[l]},e=s=>o("div",{style:{width:"400px"},children:o(t,{...s})});e.storyName="ProgressBar по умолчанию";const r=s=>o("div",{style:{width:"400px"},children:o(t,{label:"Общий прогресс",...s})});r.storyName="ProgressBar с лейблом";r.args={percentage:50};var a,p,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(argsTypes: IProgressBarProps): JSX.Element => {
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
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const X=["ProgressBarDefault","ProgressBarWithLabel"];export{e as ProgressBarDefault,r as ProgressBarWithLabel,X as __namedExportsOrder,L as default};
