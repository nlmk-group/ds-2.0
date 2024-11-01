import{j as n}from"./jsx-runtime-BRNY0I4F.js";import{r as o}from"./index-Bnop-kX6.js";import{T as h}from"./index-Bult1pSm.js";import"./generateUUID-DAuIdu-p.js";import"./index-B0lWqv5F.js";import"./index-DPg--y1u.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-BVI3RfDi.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BXzk8UvY.js";import{p as f}from"./32-CMOOVZNy.js";import{a as v}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{g as W}from"./styles.module-CfbNvgm1.js";import{a as _,D,b as H,S as L,c as O}from"./constants-DMmkSKKj.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-CT8gBKwQ.js";import"./v4-CQkTLCs1.js";const R=e=>n.jsx("div",{className:W.wrapper,children:n.jsx(e,{})}),oe={title:"Components/Switch/Stories",component:h,decorators:[R],argTypes:_},k=v("onChange"),r=e=>{const[c,s]=o.useState(e.checked||!1);return o.useEffect(()=>{e.checked!==c&&s(e.checked||!1)},[e.checked]),n.jsx(h,{...e,checked:c,onChange:t=>{s(t),typeof e.onChange=="function"&&e.onChange(t)}})};r.storyName=D;r.args={checked:!1,onChange:k};const i=e=>{const[c,s]=o.useState(e.checked||!1);return o.useEffect(()=>{e.checked!==c&&s(e.checked||!1)},[e.checked]),n.jsx(h,{...e,checked:c,onChange:t=>{s(t),typeof e.onChange=="function"&&e.onChange(t)}})};i.storyName=H;i.args={checked:!1,onChange:k,disabled:!0};const d=e=>{const[c,s]=o.useState(!1),[t,j]=o.useState(!0),[E,N]=o.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(h,{...e,checked:c,onChange:a=>{s(a),typeof e.onChange=="function"&&e.onChange(a)},label:"Не активный Switch"}),n.jsx(h,{...e,checked:t,onChange:a=>{j(a),typeof e.onChange=="function"&&e.onChange(a)},label:"Активный Switch"}),n.jsx(h,{...e,checked:E,onChange:a=>{N(a),typeof e.onChange=="function"&&e.onChange(a)},label:"Заблокированный Switch",disabled:!0})]})};d.storyName=L;d.args={onChange:k};const C=e=>{const[c,s]=o.useState(e.checked||!1);return o.useEffect(()=>{e.checked!==c&&s(e.checked||!1)},[e.checked]),n.jsx(h,{...e,checked:c,onChange:t=>{s(t),typeof e.onChange=="function"&&e.onChange(t)},activeIcon:n.jsx(f,{htmlColor:"var(--unique-white)"}),inactiveIcon:n.jsx(f,{htmlColor:"var(--steel-60)"})})};C.storyName=O;C.args={checked:!1,onChange:k};var l,p,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`(argTypes: ISwitchProps): ReactNode => {
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
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,S,m;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`(argTypes: ISwitchProps): ReactNode => {
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
}`,...(m=(S=i.parameters)==null?void 0:S.docs)==null?void 0:m.source}}};var w,I,b;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`(argTypes: ISwitchProps): ReactNode => {
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
}`,...(b=(I=d.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var y,T,x;C.parameters={...C.parameters,docs:{...(y=C.parameters)==null?void 0:y.docs,source:{originalSource:`(argTypes: ISwitchProps): ReactNode => {
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
}`,...(x=(T=C.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const ae=["DefaultSwitch","DisabledSwitch","SwitchWithLabel","IconsSwitch"];export{r as DefaultSwitch,i as DisabledSwitch,C as IconsSwitch,d as SwitchWithLabel,ae as __namedExportsOrder,oe as default};
