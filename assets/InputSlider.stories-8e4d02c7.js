import{j as n}from"./clsx.m-3764cf42.js";import{r as S}from"./index-f1f749bf.js";import{I as u}from"./index-2cdebf62.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-c1da5c13.js";import"./index-fb030d50.js";const I="_wrapper_xqc5m_1",h={wrapper:I},b={title:"Components/InputSlider/Stories",component:u},e=()=>{const[r,t]=S.useState(20),s=l=>{t(l)};return n("div",{className:h.wrapper,children:n(u,{min:0,max:100,step:1,value:r,onChange:s})})};e.storyName="Слайдер по умолчанию";const a=()=>{const[r,t]=S.useState(500),s=l=>{t(l)};return n("div",{className:h.wrapper,children:n(u,{min:100,max:1e3,step:10,value:r,onChange:s,disabled:!0})})};a.storyName="Неактивный слайдер";var o,p,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const f=["InputSliderDefault","InputSliderDisabled"];export{e as InputSliderDefault,a as InputSliderDisabled,f as __namedExportsOrder,b as default};
