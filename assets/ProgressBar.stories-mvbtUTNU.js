import{j as o}from"./jsx-runtime-2xDJh5tt.js";import{a6 as t}from"./index-CnL2Y1yT.js";import{a as u}from"./argsTypes-BsnBMKlz.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./generateUUID-BVRVPcdt.js";import"./clsx.m-CH7BE6MN.js";import"./index-CkVMA9Py.js";import"./32-CH6kctYz.js";import"./index-jIJAWU0x.js";import"./index-BxqmQ_Es.js";import"./index-CjrtVycB.js";import"./index-DGfD3wI4.js";import"./index-B8bUpJH3.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./index-Cs1erf_V.js";import"./index-prZMZXcd.js";import"./index-DFf4wlr3.js";import"./index-lhFT6koy.js";import"./index-fHOzSRtI.js";import"./get-DbIoSxMH.js";const d="_wrapper_1mm44_1",g={wrapper:d},l=s=>o("div",{className:g.wrapper,children:s()}),F={title:"Components/ProgressBar/Stories",component:t,argTypes:u,decorators:[l]},e=s=>o("div",{style:{width:"400px"},children:o(t,{...s})});e.storyName="ProgressBar по умолчанию";const r=s=>o("div",{style:{width:"400px"},children:o(t,{label:"Общий прогресс",...s})});r.storyName="ProgressBar с лейблом";r.args={percentage:50};var a,p,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(argsTypes: IProgressBarProps): JSX.Element => {
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
