import{j as s,r as o}from"./iframe-DUDunD5j.js";import{S as h,E as p}from"./index-r9tGYK8-.js";import{g as w}from"./styles.module-BGEDXogi.js";import{a as m}from"./argsTypes-ytZk8lrN.js";import{I as g}from"./16-DEDu0dyt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DyX2qzoz.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,y=e=>s.jsx("div",{className:w.wrapper,children:s.jsx(e,{})}),R={title:"Components/Switch/Stories",component:h,decorators:[y],argTypes:m},l=I("onChange"),d=e=>{const[c,n]=o.useState(e.checked||!1);return o.useEffect(()=>{e.checked!==c&&n(e.checked||!1)},[e.checked]),s.jsx(h,{...e,checked:c,onChange:t=>{n(t),typeof e.onChange=="function"&&e.onChange(t)}})};d.storyName="Switch по умолчанию";d.args={checked:!1,onChange:l};const r=e=>{const[c,n]=o.useState(e.checked||!1);o.useEffect(()=>{e.checked!==c&&n(e.checked||!1)},[e.checked]);const t=Object.values(p);return s.jsx("div",{children:t.map(f=>o.createElement(h,{...e,checked:c,onChange:u=>{n(u),typeof e.onChange=="function"&&e.onChange(u)},color:f,key:f}))})};r.storyName="Варианты Switch с различными цветами";r.args={checked:!1,onChange:l};const i=e=>{const[c,n]=o.useState(e.checked||!1);return o.useEffect(()=>{e.checked!==c&&n(e.checked||!1)},[e.checked]),s.jsx(h,{...e,checked:c,onChange:t=>{n(t),typeof e.onChange=="function"&&e.onChange(t)}})};i.storyName="Switch в состоянии disabled";i.args={checked:!1,onChange:l,disabled:!0};const C=e=>{const[c,n]=o.useState(!1),[t,f]=o.useState(!0),[u,S]=o.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(h,{...e,checked:c,onChange:a=>{n(a),typeof e.onChange=="function"&&e.onChange(a)},label:"Не активный Switch"}),s.jsx(h,{...e,checked:t,onChange:a=>{f(a),typeof e.onChange=="function"&&e.onChange(a)},label:"Активный Switch"}),s.jsx(h,{...e,checked:u,onChange:a=>{S(a),typeof e.onChange=="function"&&e.onChange(a)},label:"Заблокированный Switch",disabled:!0})]})};C.storyName="Switch с лейблом и текстом";C.args={onChange:l};const k=e=>{const[c,n]=o.useState(e.checked||!1);return o.useEffect(()=>{e.checked!==c&&n(e.checked||!1)},[e.checked]),s.jsx(h,{...e,checked:c,onChange:t=>{n(t),typeof e.onChange=="function"&&e.onChange(t)},activeIcon:s.jsx(g,{htmlColor:"var(--unique-white)"}),inactiveIcon:s.jsx(g,{htmlColor:"var(--steel-60)"})})};k.storyName="Switch с иконкой";k.args={checked:!1,onChange:l};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(argTypes: ISwitchProps): ReactNode => {
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
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(argTypes: ISwitchProps): ReactNode => {
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
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(argTypes: ISwitchProps): ReactNode => {
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
}`,...i.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`(argTypes: ISwitchProps): ReactNode => {
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
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`(argTypes: ISwitchProps): ReactNode => {
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
}`,...k.parameters?.docs?.source}}};const D=["DefaultSwitch","SwitchShowcase","DisabledSwitch","SwitchWithLabel","IconsSwitch"];export{d as DefaultSwitch,i as DisabledSwitch,k as IconsSwitch,r as SwitchShowcase,C as SwitchWithLabel,D as __namedExportsOrder,R as default};
