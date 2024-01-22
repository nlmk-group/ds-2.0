import{j as o}from"./clsx.m-3764cf42.js";import{V as t}from"./index-dd92ee6a.js";import{a as u}from"./argsTypes-e7b7652f.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-ed56af28.js";import"./IconsList.module-e4fe8555.js";import"./IconArticle24-414bfa4c.js";import"./IconPanTool24-f1398bf1.js";import"./index-a4c35820.js";import"./index-fb030d50.js";import"./index-63601013.js";import"./index-147655d7.js";import"./index-96c5f47c.js";import"./index-e99519f1.js";import"./index-cd305b84.js";import"./index-5196d16d.js";import"./index-c1da5c13.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import"./get-78cac09e.js";const d="_wrapper_1b61r_1",g={wrapper:d},l=s=>o("div",{className:g.wrapper,children:s()}),F={title:"Components/ProgressBar/Stories",component:t,argTypes:u,decorators:[l]},e=s=>o("div",{style:{width:"400px"},children:o(t,{...s})});e.storyName="ProgressBar по умолчанию";const r=s=>o("div",{style:{width:"400px"},children:o(t,{label:"Общий прогресс",...s})});r.storyName="ProgressBar с лейблом";r.args={percentage:50};var a,p,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(argsTypes: IProgressBarProps): JSX.Element => {
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
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const O=["ProgressBarDefault","ProgressBarWithLabel"];export{e as ProgressBarDefault,r as ProgressBarWithLabel,O as __namedExportsOrder,F as default};
