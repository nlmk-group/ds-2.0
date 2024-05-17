import{j as a}from"./jsx-runtime-2xDJh5tt.js";import{r as g}from"./index-CBqU2yxZ.js";import{I as m}from"./index-BLysk004.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CMH8wQUv.js";import"./index-nWYpQihe.js";import"./clsx.m-CH7BE6MN.js";const I="_wrapper_1tuvd_1",h={wrapper:I},b={title:"Components/InputRange/Stories",component:m},e=()=>{const[t,s]=g.useState({min:20,max:80}),r=u=>{s(u)};return a("div",{className:h.wrapper,children:a(m,{min:0,max:100,step:1,value:t,onChange:r})})};e.storyName="Слайдер по умолчанию";const n=()=>{const[t,s]=g.useState({min:500,max:800}),r=u=>{s(u)};return a("div",{className:h.wrapper,children:a(m,{min:100,max:1e3,step:10,value:t,onChange:r,disabled:!0})})};n.storyName="Неактивный слайдер";var o,p,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var i,c,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const f=["InputRangeDefault","InputRangeDisabled"];export{e as InputRangeDefault,n as InputRangeDisabled,f as __namedExportsOrder,b as default};
