import{j as o}from"./jsx-runtime-BRNY0I4F.js";import{r as C}from"./index-Bnop-kX6.js";import{am as a,j as g}from"./TreeList-xp0hkVtZ.js";import"./generateUUID-B-1dzpB_.js";import"./index-CvUjrmfM.js";import"./index-DppSdhCO.js";import{B as l}from"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as k}from"./index-qC5wYQgy.js";import"./index-DubX4Ptm.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-CLtrYh5C.js";import"./index-DokmLR-l.js";import"./32-BXnIH58b.js";import{a as f}from"./argsTypes-BXWgtZLX.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-B5g4YLzC.js";const j="_wrapper_81sbc_1",y={wrapper:j,"d-flex":"_d-flex_81sbc_9","child-checkboxes":"_child-checkboxes_81sbc_13"},$=r=>o.jsx("div",{className:y.wrapper,children:o.jsx(r,{})}),z={title:"Components/Checkbox/Stories",component:a,argTypes:f,decorators:[$]},s=r=>o.jsx(a,{...r});s.storyName="Checkbox по умолчанию";const c=()=>{const[r,x]=C.useState({}),t=e=>u=>{x(b=>({...b,[e]:u.target.checked}))};return o.jsx(l,{flexDirection:"column",gap:"24px",children:Object.values(g).map(e=>o.jsxs(l,{flexDirection:"column",gap:"8px",children:[o.jsx(k,{variant:"Body1-Bold",color:"var(--steel-90)",children:e}),o.jsxs(l,{flexDirection:"column",gap:"8px",children:[o.jsx(a,{color:e,label:"Производство стальной продукции",checked:r[`${e}-1`],onChange:t(`${e}-1`)}),o.jsx(a,{color:e,label:"Добыча сырьевых материалов",checked:r[`${e}-2`],onChange:t(`${e}-2`)}),o.jsx(a,{color:e,label:"Оптимизация производства (disabled)",checked:r[`${e}-3`],onChange:t(`${e}-3`),disabled:!0}),o.jsx(a,{color:e,label:"Внедрение инновационных технологий (multiple)",checked:r[`${e}-4`],onChange:t(`${e}-4`),multiple:!0})]})]},e))})};c.storyName="Варианты цветов Checkbox";c.parameters={controls:{disable:!0}};var n,p,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:"(argTypes: ICheckboxProps): JSX.Element => <Checkbox {...argTypes} />",...(i=(p=s.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var h,d,m;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:'(): JSX.Element => {\n  const [selectedValues, setSelectedValues] = useState<Record<string, boolean>>({});\n  const handleChange = (color: string) => (event: React.ChangeEvent<HTMLInputElement>) => {\n    setSelectedValues(prev => ({\n      ...prev,\n      [color]: event.target.checked\n    }));\n  };\n  return <Box flexDirection="column" gap="24px">\n      {Object.values(ECheckboxColors).map(color => <Box key={color} flexDirection="column" gap="8px">\n          <Typography variant="Body1-Bold" color="var(--steel-90)">\n            {color}\n          </Typography>\n          <Box flexDirection="column" gap="8px">\n            <Checkbox color={color} label="Производство стальной продукции" checked={selectedValues[`${color}-1`]} onChange={handleChange(`${color}-1`)} />\n            <Checkbox color={color} label="Добыча сырьевых материалов" checked={selectedValues[`${color}-2`]} onChange={handleChange(`${color}-2`)} />\n            <Checkbox color={color} label="Оптимизация производства (disabled)" checked={selectedValues[`${color}-3`]} onChange={handleChange(`${color}-3`)} disabled />\n            <Checkbox color={color} label="Внедрение инновационных технологий (multiple)" checked={selectedValues[`${color}-4`]} onChange={handleChange(`${color}-4`)} multiple />\n          </Box>\n        </Box>)}\n    </Box>;\n}',...(m=(d=c.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const A=["CheckboxDefault","CheckboxColors"];export{c as CheckboxColors,s as CheckboxDefault,A as __namedExportsOrder,z as default};
