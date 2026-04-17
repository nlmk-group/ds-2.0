import{j as e,r as l}from"./iframe-GHQjEpsb.js";import{c as E}from"./colorsMapping-C6bFIk14.js";import{B as C}from"./index-BNokyj4D.js";import{B as w}from"./index-ByRS7bpi.js";import{I as s}from"./index-BhXb1I4E.js";import{T as H}from"./index-D5tiDrSz.js";import{x as B,y as W}from"./index-CAqv-5FK.js";import{I as O,d as y}from"./24-BT3VdodN.js";import{a as L}from"./argsTypes-CmUI1f1A.js";import{I as V}from"./24-NYxH4Wn7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-DJb1dn78.js";import"./index-CwMtZ6LD.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-9xxbj185.js";import"./index-DB2EGOHJ.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-Ch8UEd8D.js";import"./24-CvJc9f8d.js";import"./24-V-842Hd4.js";import"./24-BFYJrOCK.js";import"./24-CFV5ODyi.js";import"./24-CD438uYz.js";import"./24-0wMAnnTO.js";import"./24-xN4MxKIZ.js";import"./16-BqW1rNBw.js";import"./24-Ec1WffcD.js";import"./24-Bf3BEapt.js";import"./16-Dc97ioNZ.js";import"./16-CwgMkzPr.js";import"./16-FVLzaVo_.js";const M="Input-module__wrapper___QF0gL",f={wrapper:M,"helper-text-wrapper":"Input-module__helper-text-wrapper___esfFQ","column-wrapper":"Input-module__column-wrapper___qVKVw"},_=()=>e.jsxs("div",{className:f["helper-text-wrapper"],children:[e.jsx(B,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),N=()=>e.jsxs("div",{className:f["helper-text-wrapper"],children:[e.jsx(O,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),D=()=>e.jsxs("div",{className:f["helper-text-wrapper"],children:[e.jsx(W,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),k=()=>e.jsxs("div",{className:f["helper-text-wrapper"],children:[e.jsx(B,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),{expect:J,fn:P}=__STORYBOOK_MODULE_TEST__,{userEvent:X,waitFor:A,within:F}=__STORYBOOK_MODULE_TEST__,u="Label",R="Helper text",z=t=>e.jsx("div",{className:f.wrapper,children:e.jsx(t,{})}),Ee={title:"Components/Input/Stories",component:s,decorators:[z],argTypes:L},p=t=>{const[r,a]=l.useState(t.value||""),i=n=>{a(n.target.value),t.onChange?.(n)},j=n=>{console.log("event blur: ",n),t.onBlur?.(n)},S=()=>{a(""),t.onReset?.()};return l.useEffect(()=>{a(t.value||"")},[t.value]),e.jsx(s,{...t,value:r,label:t.label||u,onChange:i,onBlur:j,onReset:t.reset?S:void 0})};p.storyName="Input по умолчанию";p.args={label:u,placeholder:"",value:"",reset:!1};const c=()=>{const t={[E.default]:e.jsx(_,{}),[E.error]:e.jsx(N,{}),[E.warning]:e.jsx(D,{}),[E.success]:e.jsx(k,{})};return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:Object.values(E).map(r=>e.jsx(s,{label:u,helperText:t[r],color:r},r))})};c.storyName="Input с лейблом, разным color и вспомогательным текстом в виде элемента";c.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const d=()=>e.jsx(s,{multiline:!0});d.storyName="Textarea по умолчанию";d.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const m=()=>e.jsxs("div",{className:f["column-wrapper"],children:[e.jsx(s,{multiline:!0,label:u,helperText:R}),e.jsx(s,{multiline:!0,label:u,helperText:e.jsx(_,{})})]});m.storyName="Textarea с лейблом и вспомогательным текстом";m.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const h=()=>e.jsx(s,{multiline:!0,label:u,resize:!0});h.storyName="Textarea со свойством ресайз";h.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const x=()=>e.jsx(s,{multiline:!0,label:u,helperText:R,disabled:!0});x.storyName="Textarea в состоянии disabled";x.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const I=()=>{const[t,r]=l.useState(!1),[a,i]=l.useState(""),j=n=>{i(n.target.value),r(!0)},S=()=>{i(""),r(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(s,{label:"Label",value:a,colored:t,reset:!0,onChange:j,onReset:S}),e.jsx(w,{type:"button",style:{marginTop:"10px"},onClick:()=>r(!1),children:"Сохранить"})]})};I.storyName="Input с подсветкой";I.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const o=()=>{const[t,r]=l.useState(!1),[a,i]=l.useState("value"),j=n=>{i(n.target.value)},S=()=>i("");return e.jsxs(e.Fragment,{children:[e.jsx(s,{pseudo:t,value:a,label:u,reset:!0,onChange:j,onReset:S}),e.jsx(w,{type:"button",onClick:()=>r(!t),style:{marginTop:"10px"},children:"Переключить"})]})};o.args={onChange:P()};o.storyName="Переключение между Input и PseudoInput";o.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};o.play=async({args:t,canvasElement:r})=>{const a=F(r);await X.click(a.getByRole("button")),t.onChange(),await A(()=>J(t.onChange).toHaveBeenCalled())};const g=()=>{const[t,r]=l.useState("");return e.jsx(s,{label:"Поиск",value:t,startIcon:e.jsx(y,{htmlColor:"var(--steel-70)"}),placeholder:"Введите запрос",onChange:a=>r(a.target.value)})};g.storyName="Input с иконкой слева";g.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const v=()=>{const[t,r]=l.useState("");return e.jsxs(C,{display:"flex",alignItems:"center",gap:8,width:"100%",maxWidth:320,children:[e.jsx(C,{display:"block",gap:0,st:{flex:1,minWidth:0},children:e.jsx(s,{label:"Email",value:t,placeholder:"steel@nlmk.com",onChange:a=>r(a.target.value)})}),e.jsx(C,{display:"flex",st:{lineHeight:0},children:e.jsx(H,{description:"Введите корпоративную почту",children:e.jsx(V,{htmlColor:"var(--steel-70)"})})})]})};v.storyName="Input с иконкой-подсказкой справа";v.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const b=()=>{const[t,r]=l.useState("");return e.jsxs(C,{display:"flex",alignItems:"flex-start",gap:8,width:"100%",maxWidth:320,children:[e.jsx(C,{display:"block",gap:0,st:{flex:1,minWidth:0},children:e.jsx(s,{multiline:!0,label:"Label",value:t,onChange:a=>r(a.target.value)})}),e.jsx(C,{display:"flex",st:{lineHeight:0},children:e.jsx(H,{description:"Подсказка к полю ввода",children:e.jsx(V,{htmlColor:"var(--steel-70)"})})})]})};b.storyName="Textarea с иконкой-подсказкой справа";b.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};const T=()=>{const[t,r]=l.useState("Поисковый запрос");return e.jsx(s,{label:"Поиск",value:t,startIcon:e.jsx(y,{htmlColor:"var(--steel-70)"}),icon:e.jsx(y,{}),reset:!0,onChange:a=>r(a.target.value),onReset:()=>r("")})};T.storyName="Input со всеми иконками";T.parameters={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: TInputProps): JSX.Element => {
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"(): JSX.Element => <Input multiline />",...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(): JSX.Element => <div className={styles['column-wrapper']}>
    <Input multiline label={labelText} helperText={helperText} />
    <Input multiline label={labelText} helperText={<DefaultHelper />} />
  </div>`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"(): JSX.Element => <Input multiline label={labelText} resize />",...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"(): JSX.Element => <Input multiline label={labelText} helperText={helperText} disabled />",...x.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...I.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...o.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  const [value, setValue] = useState('');
  return <Input label="Поиск" value={value} startIcon={<IconSearchOutlined24 htmlColor="var(--steel-70)" />} placeholder="Введите запрос" onChange={e => setValue(e.target.value)} />;
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  const [value, setValue] = useState('');
  return <Box display="flex" alignItems="center" gap={8} width="100%" maxWidth={320}>
      <Box display="block" gap={0} st={{
      flex: 1,
      minWidth: 0
    }}>
        <Input label="Email" value={value} placeholder="steel@nlmk.com" onChange={e => setValue(e.target.value)} />
      </Box>
      <Box display="flex" st={{
      lineHeight: 0
    }}>
        <Tooltip description="Введите корпоративную почту">
          <IconInfoOutlined24 htmlColor="var(--steel-70)" />
        </Tooltip>
      </Box>
    </Box>;
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  const [value, setValue] = useState('');
  return <Box display="flex" alignItems="flex-start" gap={8} width="100%" maxWidth={320}>
      <Box display="block" gap={0} st={{
      flex: 1,
      minWidth: 0
    }}>
        <Input multiline label="Label" value={value} onChange={e => setValue(e.target.value)} />
      </Box>
      <Box display="flex" st={{
      lineHeight: 0
    }}>
        <Tooltip description="Подсказка к полю ввода">
          <IconInfoOutlined24 htmlColor="var(--steel-70)" />
        </Tooltip>
      </Box>
    </Box>;
}`,...b.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`(): JSX.Element => {
  const [value, setValue] = useState('Поисковый запрос');
  return <Input label="Поиск" value={value} startIcon={<IconSearchOutlined24 htmlColor="var(--steel-70)" />} icon={<IconSearchOutlined24 />} reset onChange={e => setValue(e.target.value)} onReset={() => setValue('')} />;
}`,...T.parameters?.docs?.source}}};const ye=["InputDefault","InputWithLabelHelperTextElement","InputMultilineDefault","InputMultilineWithLabelAndHelperText","InputMultilineResize","InputMultilineDisabled","InputWithColored","InputPseudoDefaultChecking","InputWithStartIcon","InputWithExternalHelpIcon","InputMultilineWithExternalHelpIcon","InputWithAllIcons"];export{p as InputDefault,d as InputMultilineDefault,x as InputMultilineDisabled,h as InputMultilineResize,b as InputMultilineWithExternalHelpIcon,m as InputMultilineWithLabelAndHelperText,o as InputPseudoDefaultChecking,T as InputWithAllIcons,I as InputWithColored,v as InputWithExternalHelpIcon,c as InputWithLabelHelperTextElement,g as InputWithStartIcon,ye as __namedExportsOrder,Ee as default};
