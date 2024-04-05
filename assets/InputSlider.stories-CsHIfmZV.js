import{j as n}from"./jsx-runtime-2xDJh5tt.js";import{r as S}from"./index-CBqU2yxZ.js";import{I as u}from"./index-BGOHbkSJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-4J70fF5O.js";import"./index-CkVMA9Py.js";import"./clsx.m-CH7BE6MN.js";const I="_wrapper_1tuvd_1",h={wrapper:I},f={title:"Components/InputSlider/Stories",component:u},e=()=>{const[t,r]=S.useState(20),s=l=>{r(l)};return n("div",{className:h.wrapper,children:n(u,{min:0,max:100,step:1,value:t,onChange:s})})};e.storyName="Слайдер по умолчанию";const a=()=>{const[t,r]=S.useState(500),s=l=>{r(l)};return n("div",{className:h.wrapper,children:n(u,{min:100,max:1e3,step:10,value:t,onChange:s,disabled:!0})})};a.storyName="Неактивный слайдер";var o,p,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`(): JSX.Element => {
  const [value, setInputSliderValue] = useState(20);
  const handleValuesChange = (newValue: number) => {
    setInputSliderValue(newValue);
  };
  return <div className={styles.wrapper}>
      <InputSlider min={0} max={100} step={1} value={value} onChange={handleValuesChange} />
    </div>;
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var i,m,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`(): JSX.Element => {
  const [value, setInputSliderValue] = useState(500);
  const handleValuesChange = (newValue: number) => {
    setInputSliderValue(newValue);
  };
  return <div className={styles.wrapper}>
      <InputSlider min={100} max={1000} step={10} value={value} onChange={handleValuesChange} disabled />
    </div>;
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const N=["InputSliderDefault","InputSliderDisabled"];export{e as InputSliderDefault,a as InputSliderDisabled,N as __namedExportsOrder,f as default};
