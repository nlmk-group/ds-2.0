import{j as t,a as i}from"./jsx-runtime-2xDJh5tt.js";import{r as u}from"./index-CBqU2yxZ.js";import{T as m}from"./index-nWYpQihe.js";import{s as h}from"./styles.module-DeLvTIFi.js";import{aa as r}from"./index-CTSkFh7q.js";import{a as g}from"./argsTypes-Bb6CK8cT.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx.m-CH7BE6MN.js";import"./index-CjrtVycB.js";import"./index-DGfD3wI4.js";import"./generateUUID-B5cPxuxR.js";import"./32-C0P3XX_L.js";import"./index-CcmeEFL2.js";import"./index-D_LOBm7Z.js";import"./index-CTkD9j2t.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./index-BLysk004.js";import"./index-CMH8wQUv.js";import"./index-DHsx0XSp.js";import"./index-DkuQRQ9j.js";import"./get-DbIoSxMH.js";const y=o=>t("div",{className:h.wrapper,children:o()}),M={title:"Components/Radio/Stories",component:r,decorators:[y],argTypes:g},e=o=>{const[a,c]=u.useState(""),n=l=>{c(l.target.value)};return i("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[t(r,{...o,checked:a===o.value,onChange:n}),t(r,{checked:a==="option 2",onChange:n,value:"option 2",label:"Привет мир!"}),t("div",{style:{color:"var(--text-grey-900)"},children:i(m,{variant:"Body1-Bold",children:["Выбранная опция: ",a]})})]})};e.storyName="Дефолтное переключение Radio";e.args={value:"option 1"};var s,p,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(argTypes: IRadioProps): JSX.Element => {
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
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const O=["RadioDefault"];export{e as RadioDefault,O as __namedExportsOrder,M as default};
