import{j as t,a as i}from"./jsx-runtime-2xDJh5tt.js";import{r as u}from"./index-CBqU2yxZ.js";import{T as m}from"./index-CkVMA9Py.js";import{s as h}from"./styles.module-DeLvTIFi.js";import{a5 as r}from"./index-BTGymsfC.js";import{a as g}from"./argsTypes-Bb6CK8cT.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx.m-CH7BE6MN.js";import"./generateUUID-1cqmAxQg.js";import"./32-oKJmtLZM.js";import"./index-D1sOrwww.js";import"./index-BulafiJ9.js";import"./index-BqvJ5JrJ.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./index-Dd2IALEV.js";import"./index-4J70fF5O.js";import"./index-BGOHbkSJ.js";import"./index-Dp7-Jy-a.js";import"./index-D8kVD15d.js";import"./get-DbIoSxMH.js";const y=o=>t("div",{className:h.wrapper,children:o()}),L={title:"Components/Radio/Stories",component:r,decorators:[y],argTypes:g},e=o=>{const[a,c]=u.useState(""),n=l=>{c(l.target.value)};return i("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[t(r,{...o,checked:a===o.value,onChange:n}),t(r,{checked:a==="option 2",onChange:n,value:"option 2",label:"Привет мир!"}),t("div",{style:{color:"var(--text-grey-900)"},children:i(m,{variant:"Body1-Bold",children:["Выбранная опция: ",a]})})]})};e.storyName="Дефолтное переключение Radio";e.args={value:"option 1"};var s,p,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(argTypes: IRadioProps): JSX.Element => {
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
      <Radio checked={checked === 'option 2'} onChange={handleChange} value="option 2" label="Привет мир!" />
      <div style={{
      color: 'var(--text-grey-900)'
    }}>
        <Typography variant="Body1-Bold">Выбранная опция: {checked}</Typography>
      </div>
    </div>;
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const M=["RadioDefault"];export{e as RadioDefault,M as __namedExportsOrder,L as default};
