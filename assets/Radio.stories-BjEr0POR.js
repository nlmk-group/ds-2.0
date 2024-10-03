import{j as t}from"./jsx-runtime-DFnSfiB4.js";import{r as n}from"./index-DQ2WTIsS.js";import{R as s}from"./index-BB0QFCoF.js";import"./generateUUID-vFnGh3I6.js";import"./index-CNoQ_QnE.js";import"./index-CSbymPMC.js";import{B as h}from"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import{T as u}from"./index-ehXB0alm.js";import"./index-Cw4KJrZO.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-BvIp-sDO.js";import"./32-MLA202Yz.js";import{s as g}from"./styles.module-BSI8LUpZ.js";import{a as v}from"./argsTypes-Bb6CK8cT.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-BKbm6zW0.js";const k=o=>t.jsx("div",{className:g.wrapper,children:o()}),X={title:"Components/Radio/Stories",component:s,decorators:[k],argTypes:v},e=({checked:o,...a})=>{const[r,i]=n.useState(o?a.value:"");n.useEffect(()=>{i(o?a.value:"")},[o,a.value]);const c=m=>{i(m.target.value)};return t.jsxs(h,{flexDirection:"column",gap:"8px",children:[t.jsx(s,{...a,checked:r===a.value,onChange:c}),t.jsx(s,{checked:r==="option 2",onChange:c,value:"option 2",label:"Привет мир!"}),t.jsxs(u,{variant:"Body1-Bold",color:"var(--steel-90)",children:["Выбранная опция: ",r]})]})};e.storyName="Дефолтное переключение Radio";e.args={value:"option 1",label:"Вариант 1",checked:!1};var p,d,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`({
  checked: initialChecked,
  ...args
}: IRadioProps): JSX.Element => {
  const [checked, setChecked] = useState(initialChecked ? args.value : '');
  useEffect(() => {
    setChecked(initialChecked ? args.value : '');
  }, [initialChecked, args.value]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
  };
  return <Box flexDirection="column" gap="8px">
      <Radio {...args} checked={checked === args.value} onChange={handleChange} />
      <Radio checked={checked === 'option 2'} onChange={handleChange} value="option 2" label="Привет мир!" />
      <Typography variant="Body1-Bold" color="var(--steel-90)">
        Выбранная опция: {checked}
      </Typography>
    </Box>;
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const q=["RadioDefault"];export{e as RadioDefault,q as __namedExportsOrder,X as default};
