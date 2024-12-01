import{j as o}from"./jsx-runtime-BRNY0I4F.js";import{r as p}from"./index-Bnop-kX6.js";import{R as s,N as h}from"./index-DDCCAZkA.js";import"./generateUUID-B22BSTI4.js";import"./index-DJJ0U8Tt.js";import"./index-CiiUx5gY.js";import{B as d}from"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import{T as k}from"./index-qC5wYQgy.js";import"./index-BuA7rasS.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BAfSYk8P.js";import"./32-DCTol8-9.js";import{g as f}from"./styles.module-ox-emdf8.js";import{a as R}from"./argsTypes-BZALzcOz.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-CT8gBKwQ.js";const y=a=>o.jsx("div",{className:f.wrapper,children:o.jsx(a,{})}),q={title:"Components/Radio/Stories",component:s,decorators:[y],argTypes:R},n=({checked:a,...r})=>{const[t,e]=p.useState(a?r.value:"");p.useEffect(()=>{e(a?r.value:"")},[a,r.value]);const l=i=>{e(i.target.value)};return o.jsxs(d,{flexDirection:"column",gap:"8px",children:[o.jsx(s,{...r,checked:t===r.value,onChange:l}),o.jsx(s,{checked:t==="option 2",onChange:l,value:"option 2",label:"Москва"}),o.jsxs(k,{variant:"Body1-Bold",color:"var(--steel-90)",children:["Выбранная опция: ",t]})]})};n.storyName="Переключение Radio по умолчанию";n.args={value:"option 1",label:"Липецк",checked:!1};const c=()=>{const[a,r]=p.useState(()=>Object.values(h).reduce((e,l)=>({...e,[l]:`${l}-1`}),{})),t=e=>l=>{r(i=>({...i,[e]:l.target.value}))};return o.jsx(d,{flexDirection:"column",gap:"24px",children:Object.values(h).map(e=>o.jsxs(d,{flexDirection:"column",gap:"8px",children:[o.jsx(k,{variant:"Body1-Bold",color:"var(--steel-90)",children:e}),o.jsxs(d,{flexDirection:"column",gap:"8px",children:[o.jsx(s,{color:e,value:`${e}-1`,label:"Анализ содержания углерода",checked:a[e]===`${e}-1`,onChange:t(e)}),o.jsx(s,{color:e,value:`${e}-2`,label:"Коррозионные испытания",checked:a[e]===`${e}-2`,onChange:t(e)}),o.jsx(s,{color:e,value:`${e}-3`,label:"Тест на твердость (disabled)",checked:a[e]===`${e}-3`,onChange:t(e),disabled:!0})]})]},e))})};c.storyName="Варианты цветов Radio";c.parameters={controls:{disable:!0}};var u,m,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`({
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
      <Radio checked={checked === 'option 2'} onChange={handleChange} value="option 2" label="Москва" />
      <Typography variant="Body1-Bold" color="var(--steel-90)">
        Выбранная опция: {checked}
      </Typography>
    </Box>;
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,v,C;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`(): JSX.Element => {
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(() => Object.values(ERadioColors).reduce((acc, color) => ({
    ...acc,
    [color]: \`\${color}-1\`
  }), {}));
  const handleChange = (color: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValues(prev => ({
      ...prev,
      [color]: event.target.value
    }));
  };
  return <Box flexDirection="column" gap="24px">
      {Object.values(ERadioColors).map(color => <Box key={color} flexDirection="column" gap="8px">
          <Typography variant="Body1-Bold" color="var(--steel-90)">
            {color}
          </Typography>
          <Box flexDirection="column" gap="8px">
            <Radio color={color} value={\`\${color}-1\`} label="Анализ содержания углерода" checked={selectedValues[color] === \`\${color}-1\`} onChange={handleChange(color)} />
            <Radio color={color} value={\`\${color}-2\`} label="Коррозионные испытания" checked={selectedValues[color] === \`\${color}-2\`} onChange={handleChange(color)} />
            <Radio color={color} value={\`\${color}-3\`} label="Тест на твердость (disabled)" checked={selectedValues[color] === \`\${color}-3\`} onChange={handleChange(color)} disabled />
          </Box>
        </Box>)}
    </Box>;
}`,...(C=(v=c.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const z=["RadioDefault","RadioColors"];export{c as RadioColors,n as RadioDefault,z as __namedExportsOrder,q as default};
