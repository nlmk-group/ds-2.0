import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{r as w}from"./index-Bnop-kX6.js";import{I as r,y as l,B as Xe}from"./index-N7PQoZjI.js";import{s as Oe}from"./index-C7kuRPht.js";import"./generateUUID-Dz4mOyMt.js";import"./index-BuHkNwZq.js";import"./index-CiiUx5gY.js";import"./index-wMnNF9Um.js";import"./index-qC5wYQgy.js";import"./index-Dxx-yGvP.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-CG5Hm5ah.js";import{x as _e,y as Fe,z as Ke,a as qe}from"./32-QiGXh8Io.js";import{f as Ge,w as Qe,u as Ue,a as Ye,e as Ze}from"./index-Dk9t04Hp.js";import{a as $e}from"./argsTypes-C9jD7Sa3.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-CT8gBKwQ.js";const et="_wrapper_1e1ov_1",M={wrapper:et,"helper-text-wrapper":"_helper-text-wrapper_1e1ov_8","column-wrapper":"_column-wrapper_1e1ov_13"},ze=()=>e.jsxs("div",{className:M["helper-text-wrapper"],children:[e.jsx(_e,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),tt=()=>e.jsxs("div",{className:M["helper-text-wrapper"],children:[e.jsx(Fe,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),rt=()=>e.jsxs("div",{className:M["helper-text-wrapper"],children:[e.jsx(Ke,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),st=()=>e.jsxs("div",{className:M["helper-text-wrapper"],children:[e.jsx(_e,{}),e.jsx("div",{children:"Etiam ultricies non odio eu interdum"})]}),s="Label",o="Helper text",at=t=>e.jsx("div",{className:M.wrapper,children:e.jsx(t,{})}),Et={title:"Components/Input/Stories",component:r,decorators:[at],argTypes:$e},d=t=>{const[n,a]=w.useState(""),p=m=>{a(m.target.value)},u=m=>{},c=()=>{a("")};return console.log({argTypes:t}),e.jsx(r,{value:n,reset:t.reset,label:s,...t,onBlur:u,onChange:p,onReset:c})};d.storyName="Input по умолчанию";d.args={};const g=t=>e.jsx(r,{...t,label:s});g.storyName="Input с лейблом";g.args={};const x=t=>e.jsx(r,{...t,label:s,helperText:o});x.storyName="Input с лейблом и вспомогательным текстом";x.args={};const T=t=>{const[n,a]=w.useState(""),p=c=>{a(c.target.value)},u=()=>{a("")};return e.jsx(r,{...t,value:n,reset:!0,onChange:p,onReset:u,label:s,helperText:o,icon:e.jsx(qe,{})})};T.storyName="Input с лейблом, вспомогательным текстом и текстовой иконкой и кнопкой сброса";T.args={};const I=t=>{const n={[l.default]:e.jsx(ze,{}),[l.error]:e.jsx(tt,{}),[l.warning]:e.jsx(rt,{}),[l.success]:e.jsx(st,{})};return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:Object.values(l).map(a=>e.jsx(r,{...t,label:s,helperText:n[a],color:a},a))})};I.storyName="Input с лейблом, вспомогательным текстом в виде элемента";I.args={};const h=t=>e.jsx(r,{...t,label:s,helperText:o,disabled:!0,value:"value"});h.storyName="Input в состоянии disabled";h.args={};const b=t=>e.jsx(r,{...t,helperText:o,label:s,color:l.error,id:"InputNLMK"});b.storyName="Input в состоянии error";b.args={};const y=t=>e.jsx(r,{...t,helperText:o,label:s,color:l.warning});y.storyName="Input в состоянии warning";y.args={};const C=t=>e.jsx(r,{...t,helperText:o,label:s,color:l.success});C.storyName="Input в состоянии success";C.args={};const v=t=>e.jsx(r,{...t,size:Oe.s,label:"Label"});v.storyName="Input компактный";v.args={};const S=t=>e.jsx(r,{...t,multiline:!0});S.storyName="Textarea по умолчанию";S.args={};const j=t=>e.jsx(r,{...t,multiline:!0,label:s});j.storyName="Textarea с лейблом";j.args={};const E=t=>e.jsxs("div",{className:M["column-wrapper"],children:[e.jsx(r,{...t,multiline:!0,label:s,helperText:o}),e.jsx(r,{...t,multiline:!0,label:s,helperText:e.jsx(ze,{})})]});E.storyName="Textarea с лейблом и вспомогательным текстом";E.args={};const f=t=>e.jsx(r,{...t,multiline:!0,label:s,resize:!0});f.storyName="Textarea со свойством ресайз";f.args={};const L=t=>e.jsx(r,{...t,multiline:!0,label:s,helperText:o,disabled:!0});L.storyName="Textarea в состоянии disabled";const R=()=>{const[t,n]=w.useState(!1),[a,p]=w.useState(""),u=m=>{p(m.target.value),n(!0)},c=()=>{p(""),n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Label",value:a,colored:t,reset:!0,onChange:u,onReset:c}),e.jsx(Xe,{style:{marginTop:"10px"},onClick:()=>n(!1),children:"Сохранить"})]})};R.storyName="Input с подсветкой";const H=t=>e.jsx(r,{...t,multiline:!0,label:s,helperText:o,color:l.error});H.storyName="Textarea в состоянии error";H.args={};const N=t=>e.jsx(r,{...t,multiline:!0,label:s,helperText:o,color:l.warning});N.storyName="Textarea в состоянии warning";N.args={};const P=t=>e.jsx(r,{...t,multiline:!0,label:s,helperText:o,color:l.success});P.storyName="Textarea в состоянии success";P.args={};const i=t=>{const[n,a]=w.useState(!1),[p,u]=w.useState("value"),c=ke=>{u(ke.target.value)},m=()=>u("");return e.jsxs(e.Fragment,{children:[e.jsx(r,{...t,pseudo:n,value:p,label:s,reset:!0,onChange:c,onReset:m}),e.jsx(Xe,{onClick:()=>a(!n),style:{marginTop:"10px"},children:"Переключить"})]})};i.args={onChange:Ge()};i.storyName="Переключение между Input и PseudoInput";i.play=async({args:t,canvasElement:n})=>{const a=Qe(n);await Ue.click(a.getByRole("button")),t.onChange(),await Ye(()=>Ze(t.onChange).toHaveBeenCalled())};var W,V,A;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`(argTypes: TInputProps): JSX.Element => {
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // какая-нибудь логика после прекращения ввода в input
  };
  const handleReset = () => {
    setValue('');
  };
  console.log({
    argTypes
  });
  return <Input value={value} reset={argTypes.reset} label={labelText} {...argTypes} onBlur={handleBlur} onChange={handleChange} onReset={handleReset} />;
}`,...(A=(V=d.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var D,B,J;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:"(argTypes: TInputProps): JSX.Element => <Input {...argTypes} label={labelText} />",...(J=(B=g.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var X,_,z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:"(argTypes: TInputProps) => <Input {...argTypes} label={labelText} helperText={helperText} />",...(z=(_=x.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var k,O,F;T.parameters={...T.parameters,docs:{...(k=T.parameters)==null?void 0:k.docs,source:{originalSource:`(argTypes: TInputProps) => {
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  const handleReset = () => {
    setValue('');
  };
  return <Input {...argTypes} value={value} reset onChange={handleChange} onReset={handleReset} label={labelText} helperText={helperText} icon={<IconArticleOutlined24 />} />;
}`,...(F=(O=T.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var K,q,G;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`(argTypes: TInputProps) => {
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
      {Object.values(customInputColors).map((color: customInputColors) => <Input key={color} {...argTypes} label={labelText} helperText={messageHelper[color]} color={color} />)}
    </div>;
}`,...(G=(q=I.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var Q,U,Y;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:'(argTypes: TInputProps) => <Input {...argTypes} label={labelText} helperText={helperText} disabled value="value" />',...(Y=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,$,ee;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:'(argTypes: TInputProps) => <Input {...argTypes} helperText={helperText} label={labelText} color={customInputColors.error} id="InputNLMK" />',...(ee=($=b.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,re,se;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:"(argTypes: TInputProps) => <Input {...argTypes} helperText={helperText} label={labelText} color={customInputColors.warning} />",...(se=(re=y.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ae,ne,le;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:"(argTypes: TInputProps) => <Input {...argTypes} helperText={helperText} label={labelText} color={customInputColors.success} />",...(le=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var oe,pe,ue;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:'(argTypes: TInputProps) => <Input {...argTypes} size={sizesMappingInput.s} label="Label" />',...(ue=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ce,ie,me;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:"(argTypes: TInputProps): JSX.Element => <Input {...argTypes} multiline />",...(me=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};var de,ge,xe;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:"(argTypes: TInputProps): JSX.Element => <Input {...argTypes} multiline label={labelText} />",...(xe=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var Te,Ie,he;E.parameters={...E.parameters,docs:{...(Te=E.parameters)==null?void 0:Te.docs,source:{originalSource:`(argTypes: TInputProps): JSX.Element => <div className={styles['column-wrapper']}>
    <Input {...argTypes} multiline label={labelText} helperText={helperText} />
    <Input {...argTypes} multiline label={labelText} helperText={<DefaultHelper />} />
  </div>`,...(he=(Ie=E.parameters)==null?void 0:Ie.docs)==null?void 0:he.source}}};var be,ye,Ce;f.parameters={...f.parameters,docs:{...(be=f.parameters)==null?void 0:be.docs,source:{originalSource:"(argTypes: TInputProps): JSX.Element => <Input {...argTypes} multiline label={labelText} resize />",...(Ce=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:Ce.source}}};var ve,Se,je;L.parameters={...L.parameters,docs:{...(ve=L.parameters)==null?void 0:ve.docs,source:{originalSource:"(argTypes: TInputProps): JSX.Element => <Input {...argTypes} multiline label={labelText} helperText={helperText} disabled />",...(je=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};var Ee,fe,He;R.parameters={...R.parameters,docs:{...(Ee=R.parameters)==null?void 0:Ee.docs,source:{originalSource:`(): JSX.Element => {
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
      <Button style={{
      marginTop: '10px'
    }} onClick={() => setColored(false)}>
        Сохранить
      </Button>
    </>;
}`,...(He=(fe=R.parameters)==null?void 0:fe.docs)==null?void 0:He.source}}};var Ne,Pe,we;H.parameters={...H.parameters,docs:{...(Ne=H.parameters)==null?void 0:Ne.docs,source:{originalSource:"(argTypes: TInputProps): JSX.Element => <Input {...argTypes} multiline label={labelText} helperText={helperText} color={customInputColors.error} />",...(we=(Pe=H.parameters)==null?void 0:Pe.docs)==null?void 0:we.source}}};var Me,Le,Re;N.parameters={...N.parameters,docs:{...(Me=N.parameters)==null?void 0:Me.docs,source:{originalSource:"(argTypes: TInputProps): JSX.Element => <Input {...argTypes} multiline label={labelText} helperText={helperText} color={customInputColors.warning} />",...(Re=(Le=N.parameters)==null?void 0:Le.docs)==null?void 0:Re.source}}};var We,Ve,Ae;P.parameters={...P.parameters,docs:{...(We=P.parameters)==null?void 0:We.docs,source:{originalSource:"(argTypes: TInputProps): JSX.Element => <Input {...argTypes} multiline label={labelText} helperText={helperText} color={customInputColors.success} />",...(Ae=(Ve=P.parameters)==null?void 0:Ve.docs)==null?void 0:Ae.source}}};var De,Be,Je;i.parameters={...i.parameters,docs:{...(De=i.parameters)==null?void 0:De.docs,source:{originalSource:`(argTypes: TInputProps): JSX.Element => {
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
      <Input {...argTypes} pseudo={isPseudo} value={innerValue} label={labelText} reset onChange={handleChange} onReset={handleReset} />
      <Button onClick={() => setIsPseudo(!isPseudo)} style={{
      marginTop: '10px'
    }}>
        Переключить
      </Button>
    </>;
}`,...(Je=(Be=i.parameters)==null?void 0:Be.docs)==null?void 0:Je.source}}};const ft=["InputDefault","InputWithLabel","InputWithLabelAndHelperText","InputWithLabelHelperTextAndTextIcon","InputWithLabelHelperTextElement","InputDisabled","InputError","InputWarning","InputSuccess","InputCompact","InputMultilineDefault","InputMultilineWithLabel","InputMultilineWithLabelAndHelperText","InputMultilineResize","InputMultilineDisabled","InputWithColored","InputMultilineError","InputMultilineWarning","InputMultilineSuccess","InputPseudoDefaultChecking"];export{v as InputCompact,d as InputDefault,h as InputDisabled,b as InputError,S as InputMultilineDefault,L as InputMultilineDisabled,H as InputMultilineError,f as InputMultilineResize,P as InputMultilineSuccess,N as InputMultilineWarning,j as InputMultilineWithLabel,E as InputMultilineWithLabelAndHelperText,i as InputPseudoDefaultChecking,C as InputSuccess,y as InputWarning,R as InputWithColored,g as InputWithLabel,x as InputWithLabelAndHelperText,T as InputWithLabelHelperTextAndTextIcon,I as InputWithLabelHelperTextElement,ft as __namedExportsOrder,Et as default};
