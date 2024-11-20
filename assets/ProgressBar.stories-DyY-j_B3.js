import{j as s}from"./jsx-runtime-BRNY0I4F.js";import{ao as t}from"./index-CXSd2JwH.js";import{a as d}from"./argsTypes-BsnBMKlz.js";import"./index-Bnop-kX6.js";import"./clsx-B-dksMZM.js";import"./generateUUID-Dz4mOyMt.js";import"./32-QiGXh8Io.js";import"./index-qC5wYQgy.js";import"./index-BuHkNwZq.js";import"./index-Dxx-yGvP.js";import"./index-C7kuRPht.js";import"./index-wMnNF9Um.js";import"./index-CiiUx5gY.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-CocscvOf.js";import"./index-CT8gBKwQ.js";import"./index-XJ5PfNkm.js";import"./index-CG5Hm5ah.js";const g="_wrapper_1v29i_1",l={wrapper:g},P=e=>s.jsx("div",{className:l.wrapper,children:s.jsx(e,{})}),L={title:"Components/ProgressBar/Stories",component:t,argTypes:d,decorators:[P]},o=e=>s.jsx("div",{style:{width:"400px"},children:s.jsx(t,{...e})});o.storyName="ProgressBar по умолчанию";const r=e=>s.jsx("div",{style:{width:"400px"},children:s.jsx(t,{label:"Общий прогресс",...e})});r.storyName="ProgressBar с лейблом";r.args={percentage:50};var a,p,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`(argsTypes: IProgressBarProps): JSX.Element => {
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
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const X=["ProgressBarDefault","ProgressBarWithLabel"];export{o as ProgressBarDefault,r as ProgressBarWithLabel,X as __namedExportsOrder,L as default};
