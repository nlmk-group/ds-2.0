import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{r as n}from"./index-Cu9bd8lq.js";import{R as s}from"./index-ZojCmbpv.js";import"./generateUUID-CG7VmJJw.js";import"./index-XsxLq1mj.js";import"./index-AXtJih2E.js";import{B as h}from"./index-ED8ccfsJ.js";import"./index-CWQ0GGcJ.js";import{T as u}from"./index-BHxe-dnq.js";import"./index-iWHyAWYR.js";import"./index-BztLnIMF.js";import"./index-Udc0C2Qz.js";import"./index-CPdpS9Jm.js";import"./32-Bjhqu_Pf.js";import{g}from"./styles.module-DyNiVTaI.js";import{a as v}from"./argsTypes-Bb6CK8cT.js";import"./clsx-B-dksMZM.js";import"./index-Ckls47V4.js";import"./types-CpBSVUgC.js";import"./get-CeVb1zXw.js";import"./index-7KVZVlDS.js";const k=a=>e.jsx("div",{className:g.wrapper,children:e.jsx(a,{})}),O={title:"Components/Radio/Stories",component:s,decorators:[k],argTypes:v},o=({checked:a,...t})=>{const[r,c]=n.useState(a?t.value:"");n.useEffect(()=>{c(a?t.value:"")},[a,t.value]);const i=m=>{c(m.target.value)};return e.jsxs(h,{flexDirection:"column",gap:"8px",children:[e.jsx(s,{...t,checked:r===t.value,onChange:i}),e.jsx(s,{checked:r==="option 2",onChange:i,value:"option 2",label:"Привет мир!"}),e.jsxs(u,{variant:"Body1-Bold",color:"var(--steel-90)",children:["Выбранная опция: ",r]})]})};o.storyName="Дефолтное переключение Radio";o.args={value:"option 1",label:"Вариант 1",checked:!1};var p,l,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const X=["RadioDefault"];export{o as RadioDefault,X as __namedExportsOrder,O as default};
