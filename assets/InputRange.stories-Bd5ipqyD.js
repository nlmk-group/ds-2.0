import{j as s,r as l}from"./iframe-tXE4xoYc.js";import{a as m,I as o}from"./argsTypes-Bpp8Eg16.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DjNyvPGl.js";import"./clsx-B-dksMZM.js";import"./index-IJbXH1LS.js";const g="InputRange-module__wrapper___KlSAO",c={wrapper:g},i=a=>s.jsx("div",{className:c.wrapper,children:s.jsx(a,{})}),C={title:"Components/InputRange/Stories",component:o,decorators:[i],argTypes:m},e=a=>{const[t,r]=l.useState({min:20,max:80}),u=p=>{r(p)};return s.jsx(o,{...a,value:t,onChange:u})};e.storyName="InputRange по умолчанию";e.args={min:20,max:80,step:1};const n=a=>{const[t,r]=l.useState({min:0,max:80}),u=p=>{r(p)};return s.jsx(o,{...a,value:t,onChange:u,disabled:!0})};n.args={min:0,max:80,step:1};n.storyName="InputRange в состоянии disabled";e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(argsTypes: IInputRangeProps): JSX.Element => {
  const [value, setInputRangeValue] = useState({
    min: 20,
    max: 80
  });
  const handleValuesChange = (newValues: {
    min: number;
    max: number;
  }) => {
    setInputRangeValue(newValues);
  };
  return <InputRange {...argsTypes} value={value} onChange={handleValuesChange} />;
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(argsTypes: IInputRangeProps): JSX.Element => {
  const [value, setInputRangeValue] = useState({
    min: 0,
    max: 80
  });
  const handleValuesChange = (newValues: {
    min: number;
    max: number;
  }) => {
    setInputRangeValue(newValues);
  };
  return <InputRange {...argsTypes} value={value} onChange={handleValuesChange} disabled />;
}`,...n.parameters?.docs?.source}}};const S=["InputRangeDefault","InputRangeDisabled"];export{e as InputRangeDefault,n as InputRangeDisabled,S as __namedExportsOrder,C as default};
