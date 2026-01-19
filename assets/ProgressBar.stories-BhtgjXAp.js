import{j as s}from"./iframe-tXE4xoYc.js";import{a as t,P as o}from"./argsTypes-ko57jjqe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-IJbXH1LS.js";import"./clsx-B-dksMZM.js";const p="Progressar-module__wrapper___J0SmA",n={wrapper:p},i=e=>s.jsx("div",{className:n.wrapper,children:s.jsx(e,{})}),P={title:"Components/ProgressBar/Stories",component:o,argTypes:t,decorators:[i]},a=e=>s.jsx("div",{style:{width:"400px"},children:s.jsx(o,{...e})});a.storyName="ProgressBar по умолчанию";const r=e=>s.jsx("div",{style:{width:"400px"},children:s.jsx(o,{label:"Общий прогресс",...e})});r.storyName="ProgressBar с лейблом";r.args={percentage:50};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(argsTypes: IProgressBarProps): JSX.Element => {
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
}`,...r.parameters?.docs?.source}}};const u=["ProgressBarDefault","ProgressBarWithLabel"];export{a as ProgressBarDefault,r as ProgressBarWithLabel,u as __namedExportsOrder,P as default};
