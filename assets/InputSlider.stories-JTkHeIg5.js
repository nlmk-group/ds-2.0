import{j as s}from"./jsx-runtime-BTJTZTIL.js";import{r as I}from"./index-BcJSXhQi.js";import{I as o}from"./index-BPWT-JIL.js";import{a as g}from"./argsTypes-BD4XWrLF.js";import"./index-ChsGqxH_.js";import"./index-CRm92gKC.js";import"./index-DmffzHLE.js";import"./clsx-B-dksMZM.js";const h="_wrapper_6or3u_1",V={wrapper:h},x=a=>s.jsx("div",{className:V.wrapper,children:s.jsx(a,{})}),_={title:"Components/InputSlider/Stories",component:o,decorators:[x],argTypes:g},e=a=>{const[t,n]=I.useState(20),l=u=>{n(u)};return s.jsx(o,{...a,value:t,onChange:l})};e.storyName="InputSlider по умолчанию";e.args={min:20,max:80,step:1,label:"Прозрачность"};const r=a=>{const[t,n]=I.useState(20),l=u=>{n(u)};return s.jsx(o,{...a,value:t,onChange:l,disabled:!0})};r.storyName="InputSlider в состоянии disabled";r.args={min:0,max:80,step:1,label:"Отключено"};var p,d,i;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`(argsTypes: IInputSliderProps): JSX.Element => {
  const [value, setInputSliderValue] = useState(20);
  const handleValuesChange = (newValue: number) => {
    setInputSliderValue(newValue);
  };
  return <InputSlider {...argsTypes} value={value} onChange={handleValuesChange} />;
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,c,S;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`(argsTypes: IInputSliderProps): JSX.Element => {
  const [value, setInputSliderValue] = useState(20);
  const handleValuesChange = (newValue: number) => {
    setInputSliderValue(newValue);
  };
  return <InputSlider {...argsTypes} value={value} onChange={handleValuesChange} disabled />;
}`,...(S=(c=r.parameters)==null?void 0:c.docs)==null?void 0:S.source}}};const E=["InputSliderDefault","InputSliderDisabled"];export{e as InputSliderDefault,r as InputSliderDisabled,E as __namedExportsOrder,_ as default};
