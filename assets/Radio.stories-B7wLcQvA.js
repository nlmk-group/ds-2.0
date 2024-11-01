import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{r as n}from"./index-Bnop-kX6.js";import{R as s}from"./index-kyLNX40n.js";import"./generateUUID-DAuIdu-p.js";import"./index-B0lWqv5F.js";import"./index-DPg--y1u.js";import{B as h}from"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import{T as u}from"./index-qC5wYQgy.js";import"./index-BVI3RfDi.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BXzk8UvY.js";import"./32-CMOOVZNy.js";import{g}from"./styles.module-CfbNvgm1.js";import{a as v}from"./argsTypes-Bb6CK8cT.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-CT8gBKwQ.js";const k=a=>e.jsx("div",{className:g.wrapper,children:e.jsx(a,{})}),M={title:"Components/Radio/Stories",component:s,decorators:[k],argTypes:v},o=({checked:a,...t})=>{const[r,c]=n.useState(a?t.value:"");n.useEffect(()=>{c(a?t.value:"")},[a,t.value]);const i=m=>{c(m.target.value)};return e.jsxs(h,{flexDirection:"column",gap:"8px",children:[e.jsx(s,{...t,checked:r===t.value,onChange:i}),e.jsx(s,{checked:r==="option 2",onChange:i,value:"option 2",label:"Привет мир!"}),e.jsxs(u,{variant:"Body1-Bold",color:"var(--steel-90)",children:["Выбранная опция: ",r]})]})};o.storyName="Дефолтное переключение Radio";o.args={value:"option 1",label:"Вариант 1",checked:!1};var p,l,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const O=["RadioDefault"];export{o as RadioDefault,O as __namedExportsOrder,M as default};
