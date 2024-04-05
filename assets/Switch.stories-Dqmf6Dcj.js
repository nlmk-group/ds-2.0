import{j as t,a as W,F as _}from"./jsx-runtime-2xDJh5tt.js";import{r as o}from"./index-CBqU2yxZ.js";import{u as a}from"./index-BNnmgeob.js";import"./generateUUID-DRj9BLoM.js";import"./index-D-cSLjE-.js";import"./index-BqvJ5JrJ.js";import"./index-CkVMA9Py.js";import"./index-00CuFchX.js";import"./index-Dd2IALEV.js";import"./index-BGOHbkSJ.js";import"./index-Dp7-Jy-a.js";import"./index-Cx_RX_rp.js";import{I as L,a as O}from"./32-O4MZPT9v.js";import{a as E}from"./chunk-WFFRPTHA-B5TewAtn.js";import{s as A}from"./styles.module-DeLvTIFi.js";import{a as B,D as H,b as x,S as M,c as R}from"./constants-BetdFfGG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-4J70fF5O.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";const j=e=>t("div",{className:A.wrapper,children:e()}),de={title:"Components/Switch/Stories",component:a,decorators:[j],argTypes:B},k=()=>E("onChange"),h=e=>{const[c,n]=o.useState(e.checked||!1);return o.useEffect(()=>{e.checked!==c&&n(e.checked||!1)},[e.checked]),t(a,{...e,checked:c,onChange:s=>{n(!c),typeof e.onChange=="function"&&e.onChange(s,c)}})};h.storyName=H;h.args={checked:!1,onChange:k()};const i=e=>{const[c,n]=o.useState(e.checked||!1);return o.useEffect(()=>{e.checked!==c&&n(e.checked||!1)},[e.checked]),t(a,{...e,checked:c,onChange:s=>{n(!c),typeof e.onChange=="function"&&e.onChange(s,c)}})};i.storyName=x;i.args={checked:!1,onChange:E("onChange"),disabled:!0};const r=e=>{const[c,n]=o.useState(!1),[s,N]=o.useState(!0),[u,v]=o.useState(!1);return W(_,{children:[t(a,{...e,checked:c,onChange:C=>{n(!c),typeof e.onChange=="function"&&e.onChange(C,c)},label:"Не активный Switch"}),t(a,{...e,checked:s,onChange:C=>{N(!s),typeof e.onChange=="function"&&e.onChange(C,s)},label:"Активный Switch"}),t(a,{...e,checked:u,onChange:C=>{v(!u),typeof e.onChange=="function"&&e.onChange(C,u)},label:"Заблокированный Switch",disabled:!0})]})};r.storyName=M;r.args={onChange:k()};const d=e=>{const[c,n]=o.useState(e.checked||!1);return o.useEffect(()=>{e.checked!==c&&n(e.checked||!1)},[e.checked]),t(a,{...e,checked:c,onChange:s=>{n(!c),typeof e.onChange=="function"&&e.onChange(s,c)},activeIcon:t(L,{htmlColor:"var(--ac-icon-white)"}),inactiveIcon:t(O,{htmlColor:"var(--ac-icon-blue)"})})};d.storyName=R;d.args={checked:!1,onChange:k()};var f,l,p;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`(argTypes: ISwitch): ReactNode => {
  const [isChecked, setIsChecked] = useState<boolean>(argTypes.checked || false);
  useEffect(() => {
    if (argTypes.checked !== isChecked) {
      setIsChecked(argTypes.checked || false);
    }
  }, [argTypes.checked]);
  return <Switch {...argTypes} checked={isChecked} onChange={(e: any) => {
    setIsChecked(!isChecked);
    if (typeof argTypes.onChange === 'function') {
      argTypes.onChange(e, isChecked);
    }
  }} />;
}`,...(p=(l=h.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var g,m,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`(argTypes: ISwitch): ReactNode => {
  const [isChecked, setIsChecked] = useState<boolean>(argTypes.checked || false);
  useEffect(() => {
    if (argTypes.checked !== isChecked) {
      setIsChecked(argTypes.checked || false);
    }
  }, [argTypes.checked]);
  return <Switch {...argTypes} checked={isChecked} onChange={(e: any) => {
    setIsChecked(!isChecked);
    if (typeof argTypes.onChange === 'function') {
      argTypes.onChange(e, isChecked);
    }
  }} />;
}`,...(S=(m=i.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var I,y,w;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`(argTypes: ISwitch): ReactNode => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isSecondChecked, setIsSecondChecked] = useState<boolean>(true);
  const [isThirdChecked, setIsThirdChecked] = useState<boolean>(false);
  return <>
      <Switch {...argTypes} checked={isChecked} onChange={(e: any) => {
      setIsChecked(!isChecked);
      if (typeof argTypes.onChange === 'function') {
        argTypes.onChange(e, isChecked);
      }
    }} label={'Не активный Switch'} />
      <Switch {...argTypes} checked={isSecondChecked} onChange={(e: any) => {
      setIsSecondChecked(!isSecondChecked);
      if (typeof argTypes.onChange === 'function') {
        argTypes.onChange(e, isSecondChecked);
      }
    }} label={'Активный Switch'} />
      <Switch {...argTypes} checked={isThirdChecked} onChange={(e: any) => {
      setIsThirdChecked(!isThirdChecked);
      if (typeof argTypes.onChange === 'function') {
        argTypes.onChange(e, isThirdChecked);
      }
    }} label={'Заблокированный Switch'} disabled />
    </>;
}`,...(w=(y=r.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var T,b,D;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`(argTypes: ISwitch): ReactNode => {
  const [isChecked, setIsChecked] = useState<boolean>(argTypes.checked || false);
  useEffect(() => {
    if (argTypes.checked !== isChecked) {
      setIsChecked(argTypes.checked || false);
    }
  }, [argTypes.checked]);
  return <Switch {...argTypes} checked={isChecked} onChange={(e: any) => {
    setIsChecked(!isChecked);
    if (typeof argTypes.onChange === 'function') {
      argTypes.onChange(e, isChecked);
    }
  }} activeIcon={<IconDarkModeOutlined16 htmlColor={'var(--ac-icon-white)'} />} inactiveIcon={<IconLightModeOutlined16 htmlColor={'var(--ac-icon-blue)'} />} />;
}`,...(D=(b=d.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};const Ce=["DefaultSwitch","DisabledSwitch","SwitchWithLabel","IconsSwitch"];export{h as DefaultSwitch,i as DisabledSwitch,d as IconsSwitch,r as SwitchWithLabel,Ce as __namedExportsOrder,de as default};
