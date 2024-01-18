import{j as a}from"./clsx.m-3764cf42.js";import{r as g}from"./index-f1f749bf.js";import{I as m}from"./index-5196d16d.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-c1da5c13.js";import"./index-fb030d50.js";const I="_wrapper_xqc5m_1",h={wrapper:I},S={title:"Components/InputRange/Stories",component:m},e=()=>{const[s,t]=g.useState({min:20,max:80}),r=u=>{t(u)};return a("div",{className:h.wrapper,children:a(m,{min:0,max:100,step:1,value:s,onChange:r})})};e.storyName="Слайдер по умолчанию";const n=()=>{const[s,t]=g.useState({min:500,max:800}),r=u=>{t(u)};return a("div",{className:h.wrapper,children:a(m,{min:100,max:1e3,step:10,value:s,onChange:r,disabled:!0})})};n.storyName="Неактивный слайдер";var o,p,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`(): JSX.Element => {
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
  return <div className={styles.wrapper}>
      <InputRange min={0} max={100} step={1} value={value} onChange={handleValuesChange} />
    </div>;
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var c,i,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`(): JSX.Element => {
  const [value, setInputRangeValue] = useState({
    min: 500,
    max: 800
  });
  const handleValuesChange = (newValues: {
    min: number;
    max: number;
  }) => {
    setInputRangeValue(newValues);
  };
  return <div className={styles.wrapper}>
      <InputRange min={100} max={1000} step={10} value={value} onChange={handleValuesChange} disabled />
    </div>;
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const b=["InputRangeDefault","InputRangeDisabled"];export{e as InputRangeDefault,n as InputRangeDisabled,b as __namedExportsOrder,S as default};
