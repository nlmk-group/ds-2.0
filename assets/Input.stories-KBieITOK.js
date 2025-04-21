import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{r as T}from"./index-Bnop-kX6.js";import{ax as s,H as v,B as F}from"./TreeList-DRT61K-h.js";import"./generateUUID-CrXn7UDv.js";import"./index-D0pVy71L.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-B0lFb5_3.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-DE-o7T6l.js";import"./index-DokmLR-l.js";import{K,f as Q,L as U}from"./32-DG26leJo.js";import{f as Y,w as Z,u as $,a as ee,e as te}from"./index-wHL-mlhK.js";import{a as re}from"./argsTypes-a1z29y5-.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";const se="_wrapper_17w7x_1",g={wrapper:se,"helper-text-wrapper":"_helper-text-wrapper_17w7x_8","column-wrapper":"_column-wrapper_17w7x_13"},q=()=>e.jsxs("div",{className:g["helper-text-wrapper"],children:[e.jsx(K,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),ne=()=>e.jsxs("div",{className:g["helper-text-wrapper"],children:[e.jsx(Q,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),ae=()=>e.jsxs("div",{className:g["helper-text-wrapper"],children:[e.jsx(U,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),le=()=>e.jsxs("div",{className:g["helper-text-wrapper"],children:[e.jsx(K,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),u="Label",G="Helper text",oe=t=>e.jsx("div",{className:g.wrapper,children:e.jsx(t,{})}),Ne={title:"Components/Input/Stories",component:s,decorators:[oe],argTypes:re},p=t=>{const[r,n]=T.useState(""),l=o=>{n(o.target.value)},b=o=>{console.log("event blur: ",o)},I=()=>{n("")};return console.log({argTypes:t}),e.jsx(s,{value:r,reset:t.reset,label:u,...t,onBlur:b,onChange:l,onReset:I})};p.storyName="Input по умолчанию";p.args={};const i=()=>{const t={[v.default]:e.jsx(q,{}),[v.error]:e.jsx(ne,{}),[v.warning]:e.jsx(ae,{}),[v.success]:e.jsx(le,{})};return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:Object.values(v).map(r=>e.jsx(s,{label:u,helperText:t[r],color:r},r))})};i.storyName="Input с лейблом, разным color и вспомогательным текстом в виде элемента";i.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const c=()=>e.jsx(s,{multiline:!0});c.storyName="Textarea по умолчанию";c.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const d=()=>e.jsxs("div",{className:g["column-wrapper"],children:[e.jsx(s,{multiline:!0,label:u,helperText:G}),e.jsx(s,{multiline:!0,label:u,helperText:e.jsx(q,{})})]});d.storyName="Textarea с лейблом и вспомогательным текстом";d.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const m=()=>e.jsx(s,{multiline:!0,label:u,resize:!0});m.storyName="Textarea со свойством ресайз";m.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const h=()=>e.jsx(s,{multiline:!0,label:u,helperText:G,disabled:!0});h.storyName="Textarea в состоянии disabled";h.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const x=()=>{const[t,r]=T.useState(!1),[n,l]=T.useState(""),b=o=>{l(o.target.value),r(!0)},I=()=>{l(""),r(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(s,{label:"Label",value:n,colored:t,reset:!0,onChange:b,onReset:I}),e.jsx(F,{type:"button",style:{marginTop:"10px"},onClick:()=>r(!1),children:"Сохранить"})]})};x.storyName="Input с подсветкой";x.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const a=()=>{const[t,r]=T.useState(!1),[n,l]=T.useState("value"),b=o=>{l(o.target.value)},I=()=>l("");return e.jsxs(e.Fragment,{children:[e.jsx(s,{pseudo:t,value:n,label:u,reset:!0,onChange:b,onReset:I}),e.jsx(F,{type:"button",onClick:()=>r(!t),style:{marginTop:"10px"},children:"Переключить"})]})};a.args={onChange:Y()};a.storyName="Переключение между Input и PseudoInput";a.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};a.play=async({args:t,canvasElement:r})=>{const n=Z(r);await $.click(n.getByRole("button")),t.onChange(),await ee(()=>te(t.onChange).toHaveBeenCalled())};var C,j,f;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`(argTypes: TInputProps): JSX.Element => {
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // какая-нибудь логика после прекращения ввода в input
    console.log('event blur: ', e);
  };
  const handleReset = () => {
    setValue('');
  };
  console.log({
    argTypes
  });
  return <Input value={value} reset={argTypes.reset} label={labelText} {...argTypes} onBlur={handleBlur} onChange={handleChange} onReset={handleReset} />;
}`,...(f=(j=p.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var w,S,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const messageHelper = {
    [customInputColors.default]: <DefaultHelper />,
    [customInputColors.error]: <ErrorHelper />,
    [customInputColors.warning]: <WarningHelper />,
    [customInputColors.success]: <SuccessHelper />
  };
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      {Object.values(customInputColors).map((color: customInputColors) => <Input key={color} label={labelText} helperText={messageHelper[color]} color={color} />)}
    </div>;
}`,...(y=(S=i.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var E,H,R;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:"(): JSX.Element => <Input multiline />",...(R=(H=c.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var N,V,L;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`(): JSX.Element => <div className={styles['column-wrapper']}>
    <Input multiline label={labelText} helperText={helperText} />
    <Input multiline label={labelText} helperText={<DefaultHelper />} />
  </div>`,...(L=(V=d.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var M,B,D;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:"(): JSX.Element => <Input multiline label={labelText} resize />",...(D=(B=m.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var _,P,W;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:"(): JSX.Element => <Input multiline label={labelText} helperText={helperText} disabled />",...(W=(P=h.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var k,A,J;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`(): JSX.Element => {
  const [colored, setColored] = useState(false);
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
    setColored(true);
  };
  const handleReset = () => {
    setValue('');
    setColored(false);
  };
  return <>
      <Input label="Label" value={value} colored={colored} reset onChange={handleChange} onReset={handleReset} />
      <Button type="button" style={{
      marginTop: '10px'
    }} onClick={() => setColored(false)}>
        Сохранить
      </Button>
    </>;
}`,...(J=(A=x.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};var X,O,z;a.parameters={...a.parameters,docs:{...(X=a.parameters)==null?void 0:X.docs,source:{originalSource:`(): JSX.Element => {
  const [isPseudo, setIsPseudo] = useState(false);
  const [innerValue, setInnerValue] = useState('value');
  const handleChange = (e: {
    target: {
      value: SetStateAction<string>;
    };
  }) => {
    setInnerValue(e.target.value);
  };
  const handleReset = () => setInnerValue('');
  return <>
      <Input pseudo={isPseudo} value={innerValue} label={labelText} reset onChange={handleChange} onReset={handleReset} />
      <Button type="button" onClick={() => setIsPseudo(!isPseudo)} style={{
      marginTop: '10px'
    }}>
        Переключить
      </Button>
    </>;
}`,...(z=(O=a.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const Ve=["InputDefault","InputWithLabelHelperTextElement","InputMultilineDefault","InputMultilineWithLabelAndHelperText","InputMultilineResize","InputMultilineDisabled","InputWithColored","InputPseudoDefaultChecking"];export{p as InputDefault,c as InputMultilineDefault,h as InputMultilineDisabled,m as InputMultilineResize,d as InputMultilineWithLabelAndHelperText,a as InputPseudoDefaultChecking,x as InputWithColored,i as InputWithLabelHelperTextElement,Ve as __namedExportsOrder,Ne as default};
