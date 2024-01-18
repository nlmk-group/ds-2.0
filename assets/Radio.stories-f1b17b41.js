import{j as t,a as s}from"./clsx.m-3764cf42.js";import{r as u}from"./index-f1f749bf.js";import{T as l}from"./index-fb030d50.js";import{R as n}from"./index-e99519f1.js";import{a as m}from"./argsTypes-9bdc84ff.js";import"./_commonjsHelpers-042e6b4d.js";const g=a=>t("div",{style:{minHeight:80},children:a()}),f={title:"Components/Radio/Stories",component:n,decorators:[g],argTypes:m},e=a=>{const[o,p]=u.useState(""),r=h=>{p(h.target.value)};return s("div",{className:"wrapper",children:[t(n,{...a,checked:o===a.value,onChange:r}),t(n,{checked:o==="option 2",onChange:r,value:"option 2"}),s(l,{variant:"Body1-Bold",children:["Выбранная опция: ",o]})]})};e.storyName="Дефолтное переключение Radio";e.args={value:"option 1"};var d,c,i;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`(argTypes: IRadioProps): JSX.Element => {
  const [checked, setChecked] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
  };
  return <div className="wrapper">
      <Radio {...argTypes} checked={checked === argTypes.value} onChange={handleChange} />
      <Radio checked={checked === 'option 2'} onChange={handleChange} value="option 2" />
      <Typography variant="Body1-Bold">Выбранная опция: {checked}</Typography>
    </div>;
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const E=["RadioDefault"];export{e as RadioDefault,E as __namedExportsOrder,f as default};
