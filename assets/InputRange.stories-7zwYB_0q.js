import{j as s}from"./jsx-runtime-BRNY0I4F.js";import{r as I}from"./index-Bnop-kX6.js";import{I as p}from"./index-cR4M_wwG.js";import{a as R}from"./argsTypes-ClHr9njU.js";import"./index-B5g4YLzC.js";import"./index-qC5wYQgy.js";import"./clsx-B-dksMZM.js";const h="_wrapper_6or3u_1",x={wrapper:h},V=a=>s.jsx("div",{className:x.wrapper,children:s.jsx(a,{})}),j={title:"Components/InputRange/Stories",component:p,decorators:[V],argTypes:R},e=a=>{const[t,r]=I.useState({min:20,max:80}),u=o=>{r(o)};return s.jsx(p,{...a,value:t,onChange:u})};e.storyName="InputRange по умолчанию";e.args={min:20,max:80,step:1};const n=a=>{const[t,r]=I.useState({min:0,max:80}),u=o=>{r(o)};return s.jsx(p,{...a,value:t,onChange:u,disabled:!0})};n.args={min:0,max:80,step:1};n.storyName="InputRange в состоянии disabled";var m,l,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`(argsTypes: IInputRangeProps): JSX.Element => {
  const [value, setInputRangeValue] = useState({
    min: 20,
    max: 80
  });
  const handleValuesChange = (newValues: {
    min: number;
    max: number;
  }) => {
    setInputRangeValue(newValues);
  };
  return <InputRange {...argsTypes} value={value} onChange={handleValuesChange} />;
}`,...(g=(l=e.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var c,i,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`(argsTypes: IInputRangeProps): JSX.Element => {
  const [value, setInputRangeValue] = useState({
    min: 0,
    max: 80
  });
  const handleValuesChange = (newValues: {
    min: number;
    max: number;
  }) => {
    setInputRangeValue(newValues);
  };
  return <InputRange {...argsTypes} value={value} onChange={handleValuesChange} disabled />;
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const T=["InputRangeDefault","InputRangeDisabled"];export{e as InputRangeDefault,n as InputRangeDisabled,T as __namedExportsOrder,j as default};
