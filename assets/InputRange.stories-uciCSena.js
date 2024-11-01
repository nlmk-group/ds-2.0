import{j as a}from"./jsx-runtime-BRNY0I4F.js";import{r as g}from"./index-Bnop-kX6.js";import{I as m}from"./index-CocscvOf.js";import"./index-CT8gBKwQ.js";import"./index-qC5wYQgy.js";import"./clsx-B-dksMZM.js";const h="_wrapper_1k2qd_1",x={wrapper:h},S={title:"Components/InputRange/Stories",component:m},e=()=>{const[s,t]=g.useState({min:20,max:80}),r=u=>{t(u)};return a.jsx("div",{className:x.wrapper,children:a.jsx(m,{min:0,max:100,step:1,value:s,onChange:r})})};e.storyName="Слайдер по умолчанию";const n=()=>{const[s,t]=g.useState({min:500,max:800}),r=u=>{t(u)};return a.jsx("div",{className:x.wrapper,children:a.jsx(m,{min:100,max:1e3,step:10,value:s,onChange:r,disabled:!0})})};n.storyName="Неактивный слайдер";var o,p,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const b=["InputRangeDefault","InputRangeDisabled"];export{e as InputRangeDefault,n as InputRangeDisabled,b as __namedExportsOrder,S as default};
