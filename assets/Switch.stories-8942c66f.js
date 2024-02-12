import{j as t,a as _,F as x}from"./clsx.m-3764cf42.js";import{r as a}from"./index-f1f749bf.js";import{a0 as o}from"./index-d664667a.js";import"./index-a4c35820.js";import"./index-63601013.js";import"./index-e99519f1.js";import"./index-cd305b84.js";import"./index-147655d7.js";import"./index-fb030d50.js";import{I as f}from"./index-ed56af28.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import{a as N}from"./chunk-WFFRPTHA-a68c42c5.js";import{s as A}from"./styles.module-caf3a80a.js";import{c as B,D as H,a as L,S as F,b as z}from"./constants-17052e8f.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./IconArticle24-414bfa4c.js";import"./IconsList.module-e4fe8555.js";import"./IconPanTool24-f1398bf1.js";import"./get-78cac09e.js";import"./index-c1da5c13.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const M=e=>t("div",{className:A.wrapper,children:e()}),Ce={title:"Components/Switch/Stories",component:o,decorators:[M],argTypes:B},u=()=>N("onChange"),h=e=>{const[n,c]=a.useState(e.checked||!1);return a.useEffect(()=>{e.checked!==n&&c(e.checked||!1)},[e.checked]),t(o,{...e,checked:n,onChange:s=>{c(!n),typeof e.onChange=="function"&&e.onChange(s)}})};h.storyName=H;h.args={checked:!1,onChange:u()};const r=e=>{const[n,c]=a.useState(e.checked||!1);return a.useEffect(()=>{e.checked!==n&&c(e.checked||!1)},[e.checked]),t(o,{...e,checked:n,onChange:s=>{c(!n),typeof e.onChange=="function"&&e.onChange(s)}})};r.storyName=L;r.args={checked:!1,onChange:N("onChange"),disabled:!0};const i=e=>{const[n,c]=a.useState(!1),[s,v]=a.useState(!0),[k,W]=a.useState(!1);return _(x,{children:[t(o,{...e,checked:n,onChange:C=>{c(!n),typeof e.onChange=="function"&&e.onChange(C)},label:"Не активный Switch"}),t(o,{...e,checked:s,onChange:C=>{v(!s),typeof e.onChange=="function"&&e.onChange(C)},label:"Активный Switch"}),t(o,{...e,checked:k,onChange:C=>{W(!k),typeof e.onChange=="function"&&e.onChange(C)},label:"Заблокированный Switch",disabled:!0})]})};i.storyName=F;i.args={onChange:u()};const d=e=>{const[n,c]=a.useState(e.checked||!1);return a.useEffect(()=>{e.checked!==n&&c(e.checked||!1)},[e.checked]),t(o,{...e,checked:n,onChange:s=>{c(!n),typeof e.onChange=="function"&&e.onChange(s)},activeIcon:t(f,{name:"IconMetallalomScrapFilled16",containerSize:16,htmlColor:"var(--text-grey-100)"}),inactiveIcon:t(f,{name:"IconMetallalomScrap16",containerSize:16,htmlColor:"var(--primary-blue-600)"})})};d.storyName=z;d.args={checked:!1,onChange:u()};var l,p,m;h.parameters={...h.parameters,docs:{...(l=h.parameters)==null?void 0:l.docs,source:{originalSource:`(argTypes: ISwitch): ReactNode => {
  const [isChecked, setIsChecked] = useState<boolean>(argTypes.checked || false);
  useEffect(() => {
    if (argTypes.checked !== isChecked) {
      setIsChecked(argTypes.checked || false);
    }
  }, [argTypes.checked]);
  return <Switch {...argTypes} checked={isChecked} onChange={(e: any) => {
    setIsChecked(!isChecked);
    if (typeof argTypes.onChange === 'function') {
      argTypes.onChange(e);
    }
  }} />;
}`,...(m=(p=h.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var S,g,I;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`(argTypes: ISwitch): ReactNode => {
  const [isChecked, setIsChecked] = useState<boolean>(argTypes.checked || false);
  useEffect(() => {
    if (argTypes.checked !== isChecked) {
      setIsChecked(argTypes.checked || false);
    }
  }, [argTypes.checked]);
  return <Switch {...argTypes} checked={isChecked} onChange={(e: any) => {
    setIsChecked(!isChecked);
    if (typeof argTypes.onChange === 'function') {
      argTypes.onChange(e);
    }
  }} />;
}`,...(I=(g=r.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var y,w,T;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`(argTypes: ISwitch): ReactNode => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isSecondChecked, setIsSecondChecked] = useState<boolean>(true);
  const [isThirdChecked, setIsThirdChecked] = useState<boolean>(false);
  return <>
      <Switch {...argTypes} checked={isChecked} onChange={(e: any) => {
      setIsChecked(!isChecked);
      if (typeof argTypes.onChange === 'function') {
        argTypes.onChange(e);
      }
    }} label={'Не активный Switch'} />
      <Switch {...argTypes} checked={isSecondChecked} onChange={(e: any) => {
      setIsSecondChecked(!isSecondChecked);
      if (typeof argTypes.onChange === 'function') {
        argTypes.onChange(e);
      }
    }} label={'Активный Switch'} />
      <Switch {...argTypes} checked={isThirdChecked} onChange={(e: any) => {
      setIsThirdChecked(!isThirdChecked);
      if (typeof argTypes.onChange === 'function') {
        argTypes.onChange(e);
      }
    }} label={'Заблокированный Switch'} disabled />
    </>;
}`,...(T=(w=i.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var b,D,E;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`(argTypes: ISwitch): ReactNode => {
  const [isChecked, setIsChecked] = useState<boolean>(argTypes.checked || false);
  useEffect(() => {
    if (argTypes.checked !== isChecked) {
      setIsChecked(argTypes.checked || false);
    }
  }, [argTypes.checked]);
  return <Switch {...argTypes} checked={isChecked} onChange={(e: any) => {
    setIsChecked(!isChecked);
    if (typeof argTypes.onChange === 'function') {
      argTypes.onChange(e);
    }
  }} activeIcon={<Icon name="IconMetallalomScrapFilled16" containerSize={16} htmlColor={'var(--text-grey-100)'} />} inactiveIcon={<Icon name="IconMetallalomScrap16" containerSize={16} htmlColor={'var(--primary-blue-600)'} />} />;
}`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const ue=["DefaultSwitch","DisabledSwitch","SwitchWithLabel","IconsSwitch"];export{h as DefaultSwitch,r as DisabledSwitch,d as IconsSwitch,i as SwitchWithLabel,ue as __namedExportsOrder,Ce as default};
