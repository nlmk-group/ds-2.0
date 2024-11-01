import{j as n}from"./jsx-runtime-BRNY0I4F.js";import{r as S}from"./index-Bnop-kX6.js";import{I as u}from"./index-XJ5PfNkm.js";import"./index-CT8gBKwQ.js";import"./index-qC5wYQgy.js";import"./clsx-B-dksMZM.js";const I="_wrapper_1k2qd_1",h={wrapper:I},b={title:"Components/InputSlider/Stories",component:u},e=()=>{const[s,t]=S.useState(20),r=l=>{t(l)};return n.jsx("div",{className:h.wrapper,children:n.jsx(u,{min:0,max:100,step:1,value:s,onChange:r})})};e.storyName="Слайдер по умолчанию";const a=()=>{const[s,t]=S.useState(500),r=l=>{t(l)};return n.jsx("div",{className:h.wrapper,children:n.jsx(u,{min:100,max:1e3,step:10,value:s,onChange:r,disabled:!0})})};a.storyName="Неактивный слайдер";var o,p,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`(): JSX.Element => {
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
