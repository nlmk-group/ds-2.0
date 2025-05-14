import{j as s}from"./jsx-runtime-BRNY0I4F.js";import{r as t}from"./index-Bnop-kX6.js";import{a8 as h,a7 as D}from"./TreeList-DdX155Lh.js";import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import{d as u}from"./32-BTlKmMLd.js";import{a as W}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{g as _}from"./styles.module-ox-emdf8.js";import{a as q}from"./argsTypes-DlD-RtiZ.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";import"./v4-CQkTLCs1.js";const L=e=>s.jsx("div",{className:_.wrapper,children:s.jsx(e,{})}),re={title:"Components/Switch/Stories",component:h,decorators:[L],argTypes:q},f=W("onChange"),r=e=>{const[c,n]=t.useState(e.checked||!1);return t.useEffect(()=>{e.checked!==c&&n(e.checked||!1)},[e.checked]),s.jsx(h,{...e,checked:c,onChange:o=>{n(o),typeof e.onChange=="function"&&e.onChange(o)}})};r.storyName="Switch по умолчанию";r.args={checked:!1,onChange:f};const i=e=>{const[c,n]=t.useState(e.checked||!1);t.useEffect(()=>{e.checked!==c&&n(e.checked||!1)},[e.checked]);const o=Object.values(D);return s.jsx("div",{children:o.map(l=>t.createElement(h,{...e,checked:c,onChange:p=>{n(p),typeof e.onChange=="function"&&e.onChange(p)},color:l,key:l}))})};i.storyName="Варианты Switch с различными цветами";i.args={checked:!1,onChange:f};const d=e=>{const[c,n]=t.useState(e.checked||!1);return t.useEffect(()=>{e.checked!==c&&n(e.checked||!1)},[e.checked]),s.jsx(h,{...e,checked:c,onChange:o=>{n(o),typeof e.onChange=="function"&&e.onChange(o)}})};d.storyName="Switch в состоянии disabled";d.args={checked:!1,onChange:f,disabled:!0};const C=e=>{const[c,n]=t.useState(!1),[o,l]=t.useState(!0),[p,P]=t.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(h,{...e,checked:c,onChange:a=>{n(a),typeof e.onChange=="function"&&e.onChange(a)},label:"Не активный Switch"}),s.jsx(h,{...e,checked:o,onChange:a=>{l(a),typeof e.onChange=="function"&&e.onChange(a)},label:"Активный Switch"}),s.jsx(h,{...e,checked:p,onChange:a=>{P(a),typeof e.onChange=="function"&&e.onChange(a)},label:"Заблокированный Switch",disabled:!0})]})};C.storyName="Switch с лейблом и текстом";C.args={onChange:f};const k=e=>{const[c,n]=t.useState(e.checked||!1);return t.useEffect(()=>{e.checked!==c&&n(e.checked||!1)},[e.checked]),s.jsx(h,{...e,checked:c,onChange:o=>{n(o),typeof e.onChange=="function"&&e.onChange(o)},activeIcon:s.jsx(u,{htmlColor:"var(--unique-white)"}),inactiveIcon:s.jsx(u,{htmlColor:"var(--steel-60)"})})};k.storyName="Switch с иконкой";k.args={checked:!1,onChange:f};var g,S,m;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`(argTypes: ISwitchProps): ReactNode => {
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
}`,...(m=(S=r.parameters)==null?void 0:S.docs)==null?void 0:m.source}}};var w,I,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`(argTypes: ISwitchProps): ReactNode => {
  const [isChecked, setIsChecked] = useState<boolean>(argTypes.checked || false);
  useEffect(() => {
    if (argTypes.checked !== isChecked) {
      setIsChecked(argTypes.checked || false);
    }
  }, [argTypes.checked]);
  const colors = Object.values(ESwitchColors);
  return <div>
      {colors.map(color => <Switch {...argTypes} checked={isChecked} onChange={(newChecked: boolean) => {
      setIsChecked(newChecked);
      if (typeof argTypes.onChange === 'function') {
        argTypes.onChange(newChecked);
      }
    }} color={color} key={color} />)}
    </div>;
}`,...(y=(I=i.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var b,T,x;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`(argTypes: ISwitchProps): ReactNode => {
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
}`,...(x=(T=d.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var j,v,E;C.parameters={...C.parameters,docs:{...(j=C.parameters)==null?void 0:j.docs,source:{originalSource:`(argTypes: ISwitchProps): ReactNode => {
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
}`,...(E=(v=C.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var N,O,R;k.parameters={...k.parameters,docs:{...(N=k.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: ISwitchProps): ReactNode => {
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
}`,...(R=(O=k.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const ie=["DefaultSwitch","SwitchShowcase","DisabledSwitch","SwitchWithLabel","IconsSwitch"];export{r as DefaultSwitch,d as DisabledSwitch,k as IconsSwitch,i as SwitchShowcase,C as SwitchWithLabel,ie as __namedExportsOrder,re as default};
