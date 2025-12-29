import{j as a,r as h}from"./iframe-CVAHojaF.js";import{a as g,R as s,E as u}from"./argsTypes-CG1EOxa3.js";import{B as d}from"./index-C8HyjBOv.js";import{T as p}from"./index-BHrg75jh.js";import{g as m}from"./styles.module-BGEDXogi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./generateUUID-M57HTP56.js";const x=o=>a.jsx("div",{className:m.wrapper,children:a.jsx(o,{})}),B={title:"Components/Radio/Stories",component:s,decorators:[x],argTypes:g},r=({checked:o,...l})=>{const[n,e]=h.useState(o?l.value:"");h.useEffect(()=>{e(o?l.value:"")},[o,l.value]);const t=i=>{e(i.target.value)};return a.jsxs(d,{flexDirection:"column",gap:"8px",children:[a.jsx(s,{...l,checked:n===l.value,onChange:t}),a.jsx(s,{checked:n==="option 2",onChange:t,value:"option 2",label:"Москва"}),a.jsxs(p,{variant:"Body1-Bold",color:"var(--steel-90)",children:["Выбранная опция: ",n]})]})};r.storyName="Переключение Radio по умолчанию";r.args={value:"option 1",label:"Липецк",checked:!1};const c=()=>{const[o,l]=h.useState(()=>Object.values(u).reduce((e,t)=>({...e,[t]:`${t}-1`}),{})),n=e=>t=>{l(i=>({...i,[e]:t.target.value}))};return a.jsx(d,{flexDirection:"column",gap:"24px",children:Object.values(u).map(e=>a.jsxs(d,{flexDirection:"column",gap:"8px",children:[a.jsx(p,{variant:"Body1-Bold",color:"var(--steel-90)",children:e}),a.jsxs(d,{flexDirection:"column",gap:"8px",children:[a.jsx(s,{color:e,value:`${e}-1`,label:"Анализ содержания углерода",checked:o[e]===`${e}-1`,onChange:n(e)}),a.jsx(s,{color:e,value:`${e}-2`,label:"Коррозионные испытания",checked:o[e]===`${e}-2`,onChange:n(e)}),a.jsx(s,{color:e,value:`${e}-3`,label:"Тест на твердость (disabled)",checked:o[e]===`${e}-3`,onChange:n(e),disabled:!0})]})]},e))})};c.storyName="Варианты цветов Radio";c.parameters={controls:{disable:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
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
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...c.parameters?.docs?.source}}};const E=["RadioDefault","RadioColors"];export{c as RadioColors,r as RadioDefault,E as __namedExportsOrder,B as default};
