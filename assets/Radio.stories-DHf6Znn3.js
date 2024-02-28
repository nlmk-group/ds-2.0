import{j as o,a as s}from"./clsx.m-CcuEzMhP.js";import{r as u}from"./index-CBqU2yxZ.js";import{T as h}from"./index-fbTu1Hcf.js";import{s as m}from"./styles.module-DeLvTIFi.js";import{R as t}from"./index-DjeAniHW.js";import{a as g}from"./argsTypes-B3LXWQAZ.js";import"./_commonjsHelpers-BosuxZz1.js";const y=a=>o("div",{className:m.wrapper,children:a()}),D={title:"Components/Radio/Stories",component:t,decorators:[y],argTypes:g},e=a=>{const[n,p]=u.useState(""),r=l=>{p(l.target.value)};return s("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[o(t,{...a,checked:n===a.value,onChange:r}),o(t,{checked:n==="option 2",onChange:r,value:"option 2"}),o("div",{style:{color:"var(--text-grey-900)"},children:s(h,{variant:"Body1-Bold",children:["Выбранная опция: ",n]})})]})};e.storyName="Дефолтное переключение Radio";e.args={value:"option 1"};var d,c,i;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`(argTypes: IRadioProps): JSX.Element => {
  const [checked, setChecked] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
  };
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <Radio {...argTypes} checked={checked === argTypes.value} onChange={handleChange} />
      <Radio checked={checked === 'option 2'} onChange={handleChange} value="option 2" />
      <div style={{
      color: 'var(--text-grey-900)'
    }}>
        <Typography variant="Body1-Bold">Выбранная опция: {checked}</Typography>
      </div>
    </div>;
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const E=["RadioDefault"];export{e as RadioDefault,E as __namedExportsOrder,D as default};
