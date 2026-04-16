import{j as s}from"./iframe-CHHQDVoX.js";import{P as o}from"./index-DvPBu460.js";import{a as t}from"./argsTypes-BsnBMKlz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5RO9eqh.js";import"./clsx-B-dksMZM.js";const p="Progressar-module__wrapper___J0SmA",i={wrapper:p},n=e=>s.jsx("div",{className:i.wrapper,children:s.jsx(e,{})}),u={title:"Components/ProgressBar/Stories",component:o,argTypes:t,decorators:[n]},a=e=>s.jsx("div",{style:{width:"400px"},children:s.jsx(o,{...e})});a.storyName="ProgressBar по умолчанию";const r=e=>s.jsx("div",{style:{width:"400px"},children:s.jsx(o,{label:"Общий прогресс",...e})});r.storyName="ProgressBar с лейблом";r.args={percentage:50};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(argsTypes: IProgressBarProps): JSX.Element => {
  return <div style={{
    width: '400px'
  }}>
      <ProgressBar {...argsTypes} />
    </div>;
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(argsTypes: IProgressBarProps): JSX.Element => {
  return <div style={{
    width: '400px'
  }}>
      <ProgressBar label="Общий прогресс" {...argsTypes} />
    </div>;
}`,...r.parameters?.docs?.source}}};const x=["ProgressBarDefault","ProgressBarWithLabel"];export{a as ProgressBarDefault,r as ProgressBarWithLabel,x as __namedExportsOrder,u as default};
