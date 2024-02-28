import{j as s,a as _,F as A}from"./clsx.m-CcuEzMhP.js";import{r as t}from"./index-CBqU2yxZ.js";import{E as o}from"./index-CMWTVP_7.js";import"./index-ehJh3wQv.js";import"./index-D-9trSFj.js";import"./index-DjeAniHW.js";import"./index-fOOxcv8w.js";import"./index-fbTu1Hcf.js";import"./index-BhQGQSXE.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-DyFb8FNg.js";import{d as f}from"./32-UdY5WLK9.js";import{a as N}from"./chunk-WFFRPTHA-B5TewAtn.js";import{s as B}from"./styles.module-DeLvTIFi.js";import{a as H,D as L,b as x,S as R,c as j}from"./constants-C-U98RlA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-BO3pQ7ot.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";const F=e=>s("div",{className:B.wrapper,children:e()}),ie={title:"Components/Switch/Stories",component:o,decorators:[F],argTypes:H},u=()=>N("onChange"),h=e=>{const[c,n]=t.useState(e.checked||!1);return t.useEffect(()=>{e.checked!==c&&n(e.checked||!1)},[e.checked]),s(o,{...e,checked:c,onChange:a=>{n(!c),typeof e.onChange=="function"&&e.onChange(a)}})};h.storyName=L;h.args={checked:!1,onChange:u()};const r=e=>{const[c,n]=t.useState(e.checked||!1);return t.useEffect(()=>{e.checked!==c&&n(e.checked||!1)},[e.checked]),s(o,{...e,checked:c,onChange:a=>{n(!c),typeof e.onChange=="function"&&e.onChange(a)}})};r.storyName=x;r.args={checked:!1,onChange:N("onChange"),disabled:!0};const i=e=>{const[c,n]=t.useState(!1),[a,v]=t.useState(!0),[k,W]=t.useState(!1);return _(A,{children:[s(o,{...e,checked:c,onChange:C=>{n(!c),typeof e.onChange=="function"&&e.onChange(C)},label:"Не активный Switch"}),s(o,{...e,checked:a,onChange:C=>{v(!a),typeof e.onChange=="function"&&e.onChange(C)},label:"Активный Switch"}),s(o,{...e,checked:k,onChange:C=>{W(!k),typeof e.onChange=="function"&&e.onChange(C)},label:"Заблокированный Switch",disabled:!0})]})};i.storyName=R;i.args={onChange:u()};const d=e=>{const[c,n]=t.useState(e.checked||!1);return t.useEffect(()=>{e.checked!==c&&n(e.checked||!1)},[e.checked]),s(o,{...e,checked:c,onChange:a=>{n(!c),typeof e.onChange=="function"&&e.onChange(a)},activeIcon:s(f,{htmlColor:"var(--ac-icon-white)"}),inactiveIcon:s(f,{htmlColor:"var(--ac-icon-blue)"})})};d.storyName=j;d.args={checked:!1,onChange:u()};var l,p,m;h.parameters={...h.parameters,docs:{...(l=h.parameters)==null?void 0:l.docs,source:{originalSource:`(argTypes: ISwitch): ReactNode => {
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
}`,...(m=(p=h.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,S,I;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`(argTypes: ISwitch): ReactNode => {
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
}`,...(I=(S=r.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var y,w,T;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`(argTypes: ISwitch): ReactNode => {
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
}`,...(T=(w=i.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var b,E,D;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`(argTypes: ISwitch): ReactNode => {
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
  }} activeIcon={<IconMetallalomScrap16 htmlColor={'var(--ac-icon-white)'} />} inactiveIcon={<IconMetallalomScrap16 htmlColor={'var(--ac-icon-blue)'} />} />;
}`,...(D=(E=d.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const de=["DefaultSwitch","DisabledSwitch","SwitchWithLabel","IconsSwitch"];export{h as DefaultSwitch,r as DisabledSwitch,d as IconsSwitch,i as SwitchWithLabel,de as __namedExportsOrder,ie as default};
