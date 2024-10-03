import{j as n}from"./jsx-runtime-DFnSfiB4.js";import{r as o}from"./index-DQ2WTIsS.js";import{U as h}from"./index-BNUKZqmp.js";import"./generateUUID-vFnGh3I6.js";import"./index-CNoQ_QnE.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-Cw4KJrZO.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-BvIp-sDO.js";import{p as f}from"./32-MLA202Yz.js";import{a as v}from"./chunk-454WOBUV-CM0pFb8Z.js";import{s as W}from"./styles.module-BSI8LUpZ.js";import{a as _,D,b as H,S as L,c as O}from"./constants-BetdFfGG.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-BKbm6zW0.js";import"./v4-CQkTLCs1.js";const R=e=>n.jsx("div",{className:W.wrapper,children:e()}),he={title:"Components/Switch/Stories",component:h,decorators:[R],argTypes:_},k=v("onChange"),r=e=>{const[c,s]=o.useState(e.checked||!1);return o.useEffect(()=>{e.checked!==c&&s(e.checked||!1)},[e.checked]),n.jsx(h,{...e,checked:c,onChange:t=>{s(t),typeof e.onChange=="function"&&e.onChange(t)}})};r.storyName=D;r.args={checked:!1,onChange:k};const i=e=>{const[c,s]=o.useState(e.checked||!1);return o.useEffect(()=>{e.checked!==c&&s(e.checked||!1)},[e.checked]),n.jsx(h,{...e,checked:c,onChange:t=>{s(t),typeof e.onChange=="function"&&e.onChange(t)}})};i.storyName=H;i.args={checked:!1,onChange:k,disabled:!0};const d=e=>{const[c,s]=o.useState(!1),[t,j]=o.useState(!0),[E,N]=o.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(h,{...e,checked:c,onChange:a=>{s(a),typeof e.onChange=="function"&&e.onChange(a)},label:"Не активный Switch"}),n.jsx(h,{...e,checked:t,onChange:a=>{j(a),typeof e.onChange=="function"&&e.onChange(a)},label:"Активный Switch"}),n.jsx(h,{...e,checked:E,onChange:a=>{N(a),typeof e.onChange=="function"&&e.onChange(a)},label:"Заблокированный Switch",disabled:!0})]})};d.storyName=L;d.args={onChange:k};const C=e=>{const[c,s]=o.useState(e.checked||!1);return o.useEffect(()=>{e.checked!==c&&s(e.checked||!1)},[e.checked]),n.jsx(h,{...e,checked:c,onChange:t=>{s(t),typeof e.onChange=="function"&&e.onChange(t)},activeIcon:n.jsx(f,{htmlColor:"var(--unique-white)"}),inactiveIcon:n.jsx(f,{htmlColor:"var(--steel-60)"})})};C.storyName=O;C.args={checked:!1,onChange:k};var p,l,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`(argTypes: ISwitchProps): ReactNode => {
  const [isChecked, setIsChecked] = useState<boolean>(argTypes.checked || false);
  useEffect(() => {
    if (argTypes.checked !== isChecked) {
      setIsChecked(argTypes.checked || false);
    }
  }, [argTypes.checked]);
  return <Switch {...argTypes} checked={isChecked} onChange={(newChecked: boolean) => {
    setIsChecked(newChecked);
    if (typeof argTypes.onChange === 'function') {
      argTypes.onChange(newChecked);
    }
  }} />;
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,m,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`(argTypes: ISwitchProps): ReactNode => {
  const [isChecked, setIsChecked] = useState<boolean>(argTypes.checked || false);
  useEffect(() => {
    if (argTypes.checked !== isChecked) {
      setIsChecked(argTypes.checked || false);
    }
  }, [argTypes.checked]);
  return <Switch {...argTypes} checked={isChecked} onChange={(newChecked: boolean) => {
    setIsChecked(newChecked);
    if (typeof argTypes.onChange === 'function') {
      argTypes.onChange(newChecked);
    }
  }} />;
}`,...(S=(m=i.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var w,I,y;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`(argTypes: ISwitchProps): ReactNode => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isSecondChecked, setIsSecondChecked] = useState<boolean>(true);
  const [isThirdChecked, setIsThirdChecked] = useState<boolean>(false);
  return <>
      <Switch {...argTypes} checked={isChecked} onChange={(newChecked: boolean) => {
      setIsChecked(newChecked);
      if (typeof argTypes.onChange === 'function') {
        argTypes.onChange(newChecked);
      }
    }} label={'Не активный Switch'} />
      <Switch {...argTypes} checked={isSecondChecked} onChange={(newChecked: boolean) => {
      setIsSecondChecked(newChecked);
      if (typeof argTypes.onChange === 'function') {
        argTypes.onChange(newChecked);
      }
    }} label={'Активный Switch'} />
      <Switch {...argTypes} checked={isThirdChecked} onChange={(newChecked: boolean) => {
      setIsThirdChecked(newChecked);
      if (typeof argTypes.onChange === 'function') {
        argTypes.onChange(newChecked);
      }
    }} label={'Заблокированный Switch'} disabled />
    </>;
}`,...(y=(I=d.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var b,T,x;C.parameters={...C.parameters,docs:{...(b=C.parameters)==null?void 0:b.docs,source:{originalSource:`(argTypes: ISwitchProps): ReactNode => {
  const [isChecked, setIsChecked] = useState<boolean>(argTypes.checked || false);
  useEffect(() => {
    if (argTypes.checked !== isChecked) {
      setIsChecked(argTypes.checked || false);
    }
  }, [argTypes.checked]);
  return <Switch {...argTypes} checked={isChecked} onChange={(newChecked: boolean) => {
    setIsChecked(newChecked);
    if (typeof argTypes.onChange === 'function') {
      argTypes.onChange(newChecked);
    }
  }} activeIcon={<IconStarOutlined16 htmlColor={'var(--unique-white)'} />} inactiveIcon={<IconStarOutlined16 htmlColor={'var(--steel-60)'} />} />;
}`,...(x=(T=C.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const re=["DefaultSwitch","DisabledSwitch","SwitchWithLabel","IconsSwitch"];export{r as DefaultSwitch,i as DisabledSwitch,C as IconsSwitch,d as SwitchWithLabel,re as __namedExportsOrder,he as default};
