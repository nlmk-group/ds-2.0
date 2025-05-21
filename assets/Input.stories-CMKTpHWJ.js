import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{r as C}from"./index-Bnop-kX6.js";import{az as s,H as T,B as G,aT as $}from"./TreeList-ChyggQS5.js";import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import{K as Q,f as ee,L as te}from"./32-BTlKmMLd.js";import{f as re,w as se,u as ne,a as ae,e as le}from"./index-DwcCsWAb.js";import{a as oe}from"./argsTypes-FD4zUbzh.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";const ue="_wrapper_17w7x_1",I={wrapper:ue,"helper-text-wrapper":"_helper-text-wrapper_17w7x_8","column-wrapper":"_column-wrapper_17w7x_13"},Y=()=>e.jsxs("div",{className:I["helper-text-wrapper"],children:[e.jsx(Q,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),ie=()=>e.jsxs("div",{className:I["helper-text-wrapper"],children:[e.jsx(ee,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),pe=()=>e.jsxs("div",{className:I["helper-text-wrapper"],children:[e.jsx(te,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),ce=()=>e.jsxs("div",{className:I["helper-text-wrapper"],children:[e.jsx(Q,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),i="Label",Z="Helper text",de=t=>e.jsx("div",{className:I.wrapper,children:e.jsx(t,{})}),Be={title:"Components/Input/Stories",component:s,decorators:[de],argTypes:oe},u=t=>{const[r,n]=C.useState(""),l=o=>{n(o.target.value)},b=o=>{console.log("event blur: ",o)},v=()=>{n("")};return console.log({argTypes:t}),e.jsx(s,{value:r,reset:t.reset,label:i,...t,onBlur:b,onChange:l,onReset:v})};u.storyName="Input по умолчанию";u.args={};const p=()=>{const t={[T.default]:e.jsx(Y,{}),[T.error]:e.jsx(ie,{}),[T.warning]:e.jsx(pe,{}),[T.success]:e.jsx(ce,{})};return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:Object.values(T).map(r=>e.jsx(s,{label:i,helperText:t[r],color:r},r))})};p.storyName="Input с лейблом, разным color и вспомогательным текстом в виде элемента";p.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const c=()=>e.jsx(s,{multiline:!0});c.storyName="Textarea по умолчанию";c.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const d=()=>e.jsxs("div",{className:I["column-wrapper"],children:[e.jsx(s,{multiline:!0,label:i,helperText:Z}),e.jsx(s,{multiline:!0,label:i,helperText:e.jsx(Y,{})})]});d.storyName="Textarea с лейблом и вспомогательным текстом";d.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const m=()=>e.jsx(s,{multiline:!0,label:i,resize:!0});m.storyName="Textarea со свойством ресайз";m.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const h=()=>e.jsx(s,{multiline:!0,label:i,helperText:Z,disabled:!0});h.storyName="Textarea в состоянии disabled";h.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const x=()=>{const[t,r]=C.useState(!1),[n,l]=C.useState(""),b=o=>{l(o.target.value),r(!0)},v=()=>{l(""),r(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(s,{label:"Label",value:n,colored:t,reset:!0,onChange:b,onReset:v}),e.jsx(G,{type:"button",style:{marginTop:"10px"},onClick:()=>r(!1),children:"Сохранить"})]})};x.storyName="Input с подсветкой";x.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const a=()=>{const[t,r]=C.useState(!1),[n,l]=C.useState("value"),b=o=>{l(o.target.value)},v=()=>l("");return e.jsxs(e.Fragment,{children:[e.jsx(s,{pseudo:t,value:n,label:i,reset:!0,onChange:b,onReset:v}),e.jsx(G,{type:"button",onClick:()=>r(!t),style:{marginTop:"10px"},children:"Переключить"})]})};a.args={onChange:re()};a.storyName="Переключение между Input и PseudoInput";a.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};a.play=async({args:t,canvasElement:r})=>{const n=se(r);await ne.click(n.getByRole("button")),t.onChange(),await ae(()=>le(t.onChange).toHaveBeenCalled())};const g=()=>e.jsx(u,{icon:e.jsx($,{unit:"кг"})});g.storyName="Input с иконкой для единиц измерения";g.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};var j,f,w;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`(argTypes: TInputProps): JSX.Element => {
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('event blur: ', e);
  };
  const handleReset = () => {
    setValue('');
  };
  console.log({
    argTypes
  });
  return <Input value={value} reset={argTypes.reset} label={labelText} {...argTypes} onBlur={handleBlur} onChange={handleChange} onReset={handleReset} />;
}`,...(w=(f=u.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var S,y,E;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(E=(y=p.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var H,R,N;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:"(): JSX.Element => <Input multiline />",...(N=(R=c.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var V,D,L;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`(): JSX.Element => <div className={styles['column-wrapper']}>
    <Input multiline label={labelText} helperText={helperText} />
    <Input multiline label={labelText} helperText={<DefaultHelper />} />
  </div>`,...(L=(D=d.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var M,B,W;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:"(): JSX.Element => <Input multiline label={labelText} resize />",...(W=(B=m.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var _,P,k;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:"(): JSX.Element => <Input multiline label={labelText} helperText={helperText} disabled />",...(k=(P=h.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var A,J,X;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(X=(J=x.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var O,z,U;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(U=(z=a.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var F,K,q;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:'(): JSX.Element => <InputDefault icon={<IconUnit unit="кг" />} />',...(q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};const We=["InputDefault","InputWithLabelHelperTextElement","InputMultilineDefault","InputMultilineWithLabelAndHelperText","InputMultilineResize","InputMultilineDisabled","InputWithColored","InputPseudoDefaultChecking","InputWithIconUnit"];export{u as InputDefault,c as InputMultilineDefault,h as InputMultilineDisabled,m as InputMultilineResize,d as InputMultilineWithLabelAndHelperText,a as InputPseudoDefaultChecking,x as InputWithColored,g as InputWithIconUnit,p as InputWithLabelHelperTextElement,We as __namedExportsOrder,Be as default};
