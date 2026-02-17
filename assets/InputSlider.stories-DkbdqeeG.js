import{j as s,r as o}from"./iframe-DVMl8sUd.js";import{I as p}from"./index-CphKjyIZ.js";import{a as d}from"./argsTypes-tna66CaQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dpl1hQuk.js";import"./clsx-B-dksMZM.js";import"./index-BiQzV66K.js";const i="InputSlider-module__wrapper___a9F4I",m={wrapper:i},c=r=>s.jsx("div",{className:m.wrapper,children:s.jsx(r,{})}),b={title:"Components/InputSlider/Stories",component:p,decorators:[c],argTypes:d},e=r=>{const[t,n]=o.useState(20),l=u=>{n(u)};return s.jsx(p,{...r,value:t,onChange:l})};e.storyName="InputSlider по умолчанию";e.args={min:20,max:80,step:1,label:"Прозрачность"};const a=r=>{const[t,n]=o.useState(20),l=u=>{n(u)};return s.jsx(p,{...r,value:t,onChange:l,disabled:!0})};a.storyName="InputSlider в состоянии disabled";a.args={min:0,max:80,step:1,label:"Отключено"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(argsTypes: IInputSliderProps): JSX.Element => {
  const [value, setInputSliderValue] = useState(20);
  const handleValuesChange = (newValue: number) => {
    setInputSliderValue(newValue);
  };
  return <InputSlider {...argsTypes} value={value} onChange={handleValuesChange} />;
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(argsTypes: IInputSliderProps): JSX.Element => {
  const [value, setInputSliderValue] = useState(20);
  const handleValuesChange = (newValue: number) => {
    setInputSliderValue(newValue);
  };
  return <InputSlider {...argsTypes} value={value} onChange={handleValuesChange} disabled />;
}`,...a.parameters?.docs?.source}}};const v=["InputSliderDefault","InputSliderDisabled"];export{e as InputSliderDefault,a as InputSliderDisabled,v as __namedExportsOrder,b as default};
