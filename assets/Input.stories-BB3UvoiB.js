import{j as e,r as g}from"./iframe-BPtLBEuk.js";import{c as T}from"./colorsMapping-C6bFIk14.js";import{I as s}from"./index-B8NQmRXS.js";import{B as C}from"./index-C5OaxW6Y.js";import{t as f,u as S}from"./index-CDRf2h9x.js";import{I as _}from"./24-DOwtHgIx.js";import{a as w}from"./argsTypes-DWYKJzs4.js";import"./preload-helper-PPVm8Dsz.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-Dr7AntG3.js";import"./index-D-pLh_NR.js";import"./index-C9_7xPUt.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-DeoBrCvQ.js";import"./24-CrLAaNeG.js";import"./24-CpcywAhj.js";import"./24-Ch6Cnsji.js";import"./24-Q7FkUsyZ.js";import"./24-B4m_3SjA.js";import"./24-CV2ikCuL.js";import"./24-Ba8I7UHN.js";import"./24-BA0GVvoT.js";import"./16-CXoys7qm.js";import"./24-Cxxq2bXd.js";import"./24-8ackLhic.js";import"./16-DwnwCPW9.js";import"./16-BY-nZnBX.js";import"./16-DaMJtJxQ.js";const y="Input-module__wrapper___QF0gL",b={wrapper:y,"helper-text-wrapper":"Input-module__helper-text-wrapper___esfFQ","column-wrapper":"Input-module__column-wrapper___qVKVw"},j=()=>e.jsxs("div",{className:b["helper-text-wrapper"],children:[e.jsx(f,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),H=()=>e.jsxs("div",{className:b["helper-text-wrapper"],children:[e.jsx(_,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),R=()=>e.jsxs("div",{className:b["helper-text-wrapper"],children:[e.jsx(S,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),L=()=>e.jsxs("div",{className:b["helper-text-wrapper"],children:[e.jsx(f,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),{expect:M,fn:V}=__STORYBOOK_MODULE_TEST__,{userEvent:B,waitFor:D,within:N}=__STORYBOOK_MODULE_TEST__,o="Label",E="Helper text",O=t=>e.jsx("div",{className:b.wrapper,children:e.jsx(t,{})}),he={title:"Components/Input/Stories",component:s,decorators:[O],argTypes:w},p=t=>{const[r,n]=g.useState(t.value||""),u=a=>{n(a.target.value),t.onChange?.(a)},I=a=>{console.log("event blur: ",a),t.onBlur?.(a)},v=()=>{n(""),t.onReset?.()};return g.useEffect(()=>{n(t.value||"")},[t.value]),e.jsx(s,{...t,value:r,label:t.label||o,onChange:u,onBlur:I,onReset:t.reset?v:void 0})};p.storyName="Input по умолчанию";p.args={label:o,placeholder:"",value:"",reset:!1};const i=()=>{const t={[T.default]:e.jsx(j,{}),[T.error]:e.jsx(H,{}),[T.warning]:e.jsx(R,{}),[T.success]:e.jsx(L,{})};return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:Object.values(T).map(r=>e.jsx(s,{label:o,helperText:t[r],color:r},r))})};i.storyName="Input с лейблом, разным color и вспомогательным текстом в виде элемента";i.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const c=()=>e.jsx(s,{multiline:!0});c.storyName="Textarea по умолчанию";c.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const m=()=>e.jsxs("div",{className:b["column-wrapper"],children:[e.jsx(s,{multiline:!0,label:o,helperText:E}),e.jsx(s,{multiline:!0,label:o,helperText:e.jsx(j,{})})]});m.storyName="Textarea с лейблом и вспомогательным текстом";m.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const d=()=>e.jsx(s,{multiline:!0,label:o,resize:!0});d.storyName="Textarea со свойством ресайз";d.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const h=()=>e.jsx(s,{multiline:!0,label:o,helperText:E,disabled:!0});h.storyName="Textarea в состоянии disabled";h.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const x=()=>{const[t,r]=g.useState(!1),[n,u]=g.useState(""),I=a=>{u(a.target.value),r(!0)},v=()=>{u(""),r(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(s,{label:"Label",value:n,colored:t,reset:!0,onChange:I,onReset:v}),e.jsx(C,{type:"button",style:{marginTop:"10px"},onClick:()=>r(!1),children:"Сохранить"})]})};x.storyName="Input с подсветкой";x.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const l=()=>{const[t,r]=g.useState(!1),[n,u]=g.useState("value"),I=a=>{u(a.target.value)},v=()=>u("");return e.jsxs(e.Fragment,{children:[e.jsx(s,{pseudo:t,value:n,label:o,reset:!0,onChange:I,onReset:v}),e.jsx(C,{type:"button",onClick:()=>r(!t),style:{marginTop:"10px"},children:"Переключить"})]})};l.args={onChange:V()};l.storyName="Переключение между Input и PseudoInput";l.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};l.play=async({args:t,canvasElement:r})=>{const n=N(r);await B.click(n.getByRole("button")),t.onChange(),await D(()=>M(t.onChange).toHaveBeenCalled())};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: TInputProps): JSX.Element => {
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
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"(): JSX.Element => <Input multiline />",...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(): JSX.Element => <div className={styles['column-wrapper']}>
    <Input multiline label={labelText} helperText={helperText} />
    <Input multiline label={labelText} helperText={<DefaultHelper />} />
  </div>`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"(): JSX.Element => <Input multiline label={labelText} resize />",...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"(): JSX.Element => <Input multiline label={labelText} helperText={helperText} disabled />",...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...x.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...l.parameters?.docs?.source}}};const xe=["InputDefault","InputWithLabelHelperTextElement","InputMultilineDefault","InputMultilineWithLabelAndHelperText","InputMultilineResize","InputMultilineDisabled","InputWithColored","InputPseudoDefaultChecking"];export{p as InputDefault,c as InputMultilineDefault,h as InputMultilineDisabled,d as InputMultilineResize,m as InputMultilineWithLabelAndHelperText,l as InputPseudoDefaultChecking,x as InputWithColored,i as InputWithLabelHelperTextElement,xe as __namedExportsOrder,he as default};
