import{j as s}from"./jsx-runtime-BRNY0I4F.js";import{au as t}from"./index-ByAgZyky.js";import{a as d}from"./argsTypes-BsnBMKlz.js";import"./index-Bnop-kX6.js";import"./clsx-B-dksMZM.js";import"./generateUUID-B22BSTI4.js";import"./32-DCTol8-9.js";import"./index-qC5wYQgy.js";import"./index-DJJ0U8Tt.js";import"./index-BuA7rasS.js";import"./index-C7kuRPht.js";import"./index-wMnNF9Um.js";import"./index-CGzvFf0p.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-CocscvOf.js";import"./index-CT8gBKwQ.js";import"./index-XJ5PfNkm.js";import"./index-BAfSYk8P.js";import"./index-Br4tp0-d.js";const g="_wrapper_1v29i_1",l={wrapper:g},u=e=>s.jsx("div",{className:l.wrapper,children:s.jsx(e,{})}),X={title:"Components/ProgressBar/Stories",component:t,argTypes:d,decorators:[u]},o=e=>s.jsx("div",{style:{width:"400px"},children:s.jsx(t,{...e})});o.storyName="ProgressBar по умолчанию";const r=e=>s.jsx("div",{style:{width:"400px"},children:s.jsx(t,{label:"Общий прогресс",...e})});r.storyName="ProgressBar с лейблом";r.args={percentage:50};var a,p,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`(argsTypes: IProgressBarProps): JSX.Element => {
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
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const C=["ProgressBarDefault","ProgressBarWithLabel"];export{o as ProgressBarDefault,r as ProgressBarWithLabel,C as __namedExportsOrder,X as default};
