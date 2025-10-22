import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as I}from"./index-BcJSXhQi.js";import{ay as n,l as j,B as Q,aT as ee}from"./TreeList-DaNCMioE.js";import"./generateUUID-CwHnX0Hw.js";import"./index-BekOEyNL.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-9k2b7QWQ.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-uupel1IP.js";import"./index-C5rKoyII.js";import{K as Y,L as te,e as re}from"./32-BKmqX1Rw.js";import{f as se,w as ne,u as ae,a as le,e as oe}from"./index-Hj-MKuMO.js";import{a as ue}from"./argsTypes-RSrWmA26.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const ie="_wrapper_17w7x_1",v={wrapper:ie,"helper-text-wrapper":"_helper-text-wrapper_17w7x_8","column-wrapper":"_column-wrapper_17w7x_13"},Z=()=>e.jsxs("div",{className:v["helper-text-wrapper"],children:[e.jsx(Y,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),pe=()=>e.jsxs("div",{className:v["helper-text-wrapper"],children:[e.jsx(re,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),ce=()=>e.jsxs("div",{className:v["helper-text-wrapper"],children:[e.jsx(te,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),de=()=>e.jsxs("div",{className:v["helper-text-wrapper"],children:[e.jsx(Y,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),o="Label",$="Helper text",me=t=>e.jsx("div",{className:v.wrapper,children:e.jsx(t,{})}),Pe={title:"Components/Input/Stories",component:n,decorators:[me],argTypes:ue},i=t=>{const[r,a]=I.useState(t.value||""),u=s=>{var C;a(s.target.value),(C=t.onChange)==null||C.call(t,s)},g=s=>{var C;console.log("event blur: ",s),(C=t.onBlur)==null||C.call(t,s)},T=()=>{var s;a(""),(s=t.onReset)==null||s.call(t)};return I.useEffect(()=>{a(t.value||"")},[t.value]),e.jsx(n,{...t,value:r,label:t.label||o,onChange:u,onBlur:g,onReset:t.reset?T:void 0})};i.storyName="Input по умолчанию";i.args={label:o,placeholder:"",value:"",reset:!1};const p=()=>{const t={[j.default]:e.jsx(Z,{}),[j.error]:e.jsx(pe,{}),[j.warning]:e.jsx(ce,{}),[j.success]:e.jsx(de,{})};return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:Object.values(j).map(r=>e.jsx(n,{label:o,helperText:t[r],color:r},r))})};p.storyName="Input с лейблом, разным color и вспомогательным текстом в виде элемента";p.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const c=()=>e.jsx(n,{multiline:!0});c.storyName="Textarea по умолчанию";c.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const d=()=>e.jsxs("div",{className:v["column-wrapper"],children:[e.jsx(n,{multiline:!0,label:o,helperText:$}),e.jsx(n,{multiline:!0,label:o,helperText:e.jsx(Z,{})})]});d.storyName="Textarea с лейблом и вспомогательным текстом";d.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const m=()=>e.jsx(n,{multiline:!0,label:o,resize:!0});m.storyName="Textarea со свойством ресайз";m.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const h=()=>e.jsx(n,{multiline:!0,label:o,helperText:$,disabled:!0});h.storyName="Textarea в состоянии disabled";h.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const x=()=>{const[t,r]=I.useState(!1),[a,u]=I.useState(""),g=s=>{u(s.target.value),r(!0)},T=()=>{u(""),r(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(n,{label:"Label",value:a,colored:t,reset:!0,onChange:g,onReset:T}),e.jsx(Q,{type:"button",style:{marginTop:"10px"},onClick:()=>r(!1),children:"Сохранить"})]})};x.storyName="Input с подсветкой";x.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const l=()=>{const[t,r]=I.useState(!1),[a,u]=I.useState("value"),g=s=>{u(s.target.value)},T=()=>u("");return e.jsxs(e.Fragment,{children:[e.jsx(n,{pseudo:t,value:a,label:o,reset:!0,onChange:g,onReset:T}),e.jsx(Q,{type:"button",onClick:()=>r(!t),style:{marginTop:"10px"},children:"Переключить"})]})};l.args={onChange:se()};l.storyName="Переключение между Input и PseudoInput";l.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};l.play=async({args:t,canvasElement:r})=>{const a=ne(r);await ae.click(a.getByRole("button")),t.onChange(),await le(()=>oe(t.onChange).toHaveBeenCalled())};const b=()=>e.jsx(i,{icon:e.jsx(ee,{unit:"кг"})});b.storyName="Input с иконкой для единиц измерения";b.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};var f,E,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`(args: TInputProps): JSX.Element => {
  const [value, setValue] = useState(args.value || '');
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
    args.onChange?.(e);
  };
  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('event blur: ', e);
    args.onBlur?.(e);
  };
  const handleReset = () => {
    setValue('');
    args.onReset?.();
  };
  useEffect(() => {
    setValue(args.value || '');
  }, [args.value]);
  return <Input {...args} value={value} label={args.label || labelText} onChange={handleChange} onBlur={handleBlur} onReset={args.reset ? handleReset : undefined} />;
}`,...(w=(E=i.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var S,y,H;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(H=(y=p.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};var R,L,M;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:"(): JSX.Element => <Input multiline />",...(M=(L=c.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var N,V,B;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`(): JSX.Element => <div className={styles['column-wrapper']}>
    <Input multiline label={labelText} helperText={helperText} />
    <Input multiline label={labelText} helperText={<DefaultHelper />} />
  </div>`,...(B=(V=d.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var D,W,_;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:"(): JSX.Element => <Input multiline label={labelText} resize />",...(_=(W=m.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var P,k,A;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:"(): JSX.Element => <Input multiline label={labelText} helperText={helperText} disabled />",...(A=(k=h.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var J,X,O;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(O=(X=x.parameters)==null?void 0:X.docs)==null?void 0:O.source}}};var z,U,F;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`(): JSX.Element => {
  const [isPseudo, setIsPseudo] = useState(false);
  const [innerValue, setInnerValue] = useState('value');
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
}`,...(F=(U=l.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var K,q,G;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:'(): JSX.Element => <InputDefault icon={<IconUnit unit="кг" />} />',...(G=(q=b.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const ke=["InputDefault","InputWithLabelHelperTextElement","InputMultilineDefault","InputMultilineWithLabelAndHelperText","InputMultilineResize","InputMultilineDisabled","InputWithColored","InputPseudoDefaultChecking","InputWithIconUnit"];export{i as InputDefault,c as InputMultilineDefault,h as InputMultilineDisabled,m as InputMultilineResize,d as InputMultilineWithLabelAndHelperText,l as InputPseudoDefaultChecking,x as InputWithColored,b as InputWithIconUnit,p as InputWithLabelHelperTextElement,ke as __namedExportsOrder,Pe as default};
