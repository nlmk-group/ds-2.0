import{j as n}from"./jsx-runtime-DFnSfiB4.js";import{r as o}from"./index-DQ2WTIsS.js";import{Q as a}from"./index-DlGLur7j.js";import"./generateUUID-CY9Prqwy.js";import"./index-BenQYTIH.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-DJXOh8UI.js";import"./index-Dvm_EBHX.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CWVO2cHI.js";import{o as N,p as v}from"./32-CCQbJusC.js";import{a as j}from"./chunk-454WOBUV-CM0pFb8Z.js";import{s as W}from"./styles.module-CTgVy8kC.js";import{a as _,D as L,b as O,S as H,c as R}from"./constants-BetdFfGG.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-0sbKER3h.js";import"./v4-CQkTLCs1.js";const M=e=>n.jsx("div",{className:W.wrapper,children:e()}),ie={title:"Components/Switch/Stories",component:a,decorators:[M],argTypes:_},f=()=>j("onChange"),h=e=>{const[c,s]=o.useState(e.checked||!1);return o.useEffect(()=>{e.checked!==c&&s(e.checked||!1)},[e.checked]),n.jsx(a,{...e,checked:c,onChange:t=>{s(!c),typeof e.onChange=="function"&&e.onChange(t,c)}})};h.storyName=L;h.args={checked:!1,onChange:f()};const i=e=>{const[c,s]=o.useState(e.checked||!1);return o.useEffect(()=>{e.checked!==c&&s(e.checked||!1)},[e.checked]),n.jsx(a,{...e,checked:c,onChange:t=>{s(!c),typeof e.onChange=="function"&&e.onChange(t,c)}})};i.storyName=O;i.args={checked:!1,onChange:j("onChange"),disabled:!0};const r=e=>{const[c,s]=o.useState(!1),[t,E]=o.useState(!0),[k,D]=o.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(a,{...e,checked:c,onChange:C=>{s(!c),typeof e.onChange=="function"&&e.onChange(C,c)},label:"Не активный Switch"}),n.jsx(a,{...e,checked:t,onChange:C=>{E(!t),typeof e.onChange=="function"&&e.onChange(C,t)},label:"Активный Switch"}),n.jsx(a,{...e,checked:k,onChange:C=>{D(!k),typeof e.onChange=="function"&&e.onChange(C,k)},label:"Заблокированный Switch",disabled:!0})]})};r.storyName=H;r.args={onChange:f()};const d=e=>{const[c,s]=o.useState(e.checked||!1);return o.useEffect(()=>{e.checked!==c&&s(e.checked||!1)},[e.checked]),n.jsx(a,{...e,checked:c,onChange:t=>{s(!c),typeof e.onChange=="function"&&e.onChange(t,c)},activeIcon:n.jsx(N,{htmlColor:"var(--ac-icon-white)"}),inactiveIcon:n.jsx(v,{htmlColor:"var(--ac-icon-blue)"})})};d.storyName=R;d.args={checked:!1,onChange:f()};var p,l,u;h.parameters={...h.parameters,docs:{...(p=h.parameters)==null?void 0:p.docs,source:{originalSource:`(argTypes: ISwitch): ReactNode => {
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
}`,...(u=(l=h.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,m,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`(argTypes: ISwitch): ReactNode => {
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
}`,...(w=(y=r.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var T,b,x;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`(argTypes: ISwitch): ReactNode => {
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
}`,...(x=(b=d.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const re=["DefaultSwitch","DisabledSwitch","SwitchWithLabel","IconsSwitch"];export{h as DefaultSwitch,i as DisabledSwitch,d as IconsSwitch,r as SwitchWithLabel,re as __namedExportsOrder,ie as default};
