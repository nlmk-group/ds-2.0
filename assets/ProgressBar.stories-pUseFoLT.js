import{j as s}from"./jsx-runtime-BTJTZTIL.js";import{aH as t}from"./TreeList-CgatSFr0.js";import{a as d}from"./argsTypes-BsnBMKlz.js";import"./index-ChsGqxH_.js";import"./index-BcJSXhQi.js";import"./clsx-B-dksMZM.js";import"./generateUUID-CpKhmTry.js";import"./32-icvDJE6i.js";import"./index-DmffzHLE.js";import"./index-CzNzGEue.js";import"./index-CaDFz05s.js";import"./index-D8WlRtvM.js";import"./index-D-jyRV5V.js";import"./index-WHoiTdKD.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./index-VmJK6twV.js";import"./index-CRm92gKC.js";import"./index-DxgC_uyg.js";import"./index-BZ5zMSTm.js";import"./index-C5rKoyII.js";import"./tiny-invariant-CopsF_GD.js";const g="_wrapper_1v29i_1",l={wrapper:g},P=e=>s.jsx("div",{className:l.wrapper,children:s.jsx(e,{})}),O={title:"Components/ProgressBar/Stories",component:t,argTypes:d,decorators:[P]},o=e=>s.jsx("div",{style:{width:"400px"},children:s.jsx(t,{...e})});o.storyName="ProgressBar по умолчанию";const r=e=>s.jsx("div",{style:{width:"400px"},children:s.jsx(t,{label:"Общий прогресс",...e})});r.storyName="ProgressBar с лейблом";r.args={percentage:50};var a,p,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`(argsTypes: IProgressBarProps): JSX.Element => {
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
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const R=["ProgressBarDefault","ProgressBarWithLabel"];export{o as ProgressBarDefault,r as ProgressBarWithLabel,R as __namedExportsOrder,O as default};
