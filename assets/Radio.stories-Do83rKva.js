import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{r as l}from"./index-DQ2WTIsS.js";import{T as m}from"./index-DJXOh8UI.js";import{s as h}from"./styles.module-C4SoDQaA.js";import{ae as a}from"./index-De6xVjfl.js";import{a as g}from"./argsTypes-Bb6CK8cT.js";import"./clsx-B-dksMZM.js";import"./index-B8KuQLf-.js";import"./generateUUID-i9L7EtYg.js";import"./32-C4VDZHit.js";import"./index-bLIWCpda.js";import"./index-DB41iIPt.js";import"./index-B_c816qF.js";import"./index-BgyuaCKK.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./index-wNTT8eSr.js";import"./index-0sbKER3h.js";import"./index-S3KjbRnp.js";import"./index-CpIRsoAz.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";const y=t=>e.jsx("div",{className:h.wrapper,children:t()}),M={title:"Components/Radio/Stories",component:a,decorators:[y],argTypes:g},o=t=>{const[r,d]=l.useState(""),s=c=>{d(c.target.value)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{...t,checked:r===t.value,onChange:s}),e.jsx(a,{checked:r==="option 2",onChange:s,value:"option 2",label:"Привет мир!"}),e.jsx("div",{style:{color:"var(--text-grey-900)"},children:e.jsxs(m,{variant:"Body1-Bold",children:["Выбранная опция: ",r]})})]})};o.storyName="Дефолтное переключение Radio";o.args={value:"option 1"};var i,p,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`(argTypes: IRadioProps): JSX.Element => {
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
}`,...(n=(p=o.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const O=["RadioDefault"];export{o as RadioDefault,O as __namedExportsOrder,M as default};
