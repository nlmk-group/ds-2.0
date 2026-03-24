import{j as c,r as l}from"./iframe-auckHHdj.js";import{B as d}from"./index-CXN1ldU3.js";import{S as p,a as i,E as S}from"./index-DjEbf1Sc.js";import{g as b}from"./styles.module-BGEDXogi.js";import{a as k}from"./argsTypes-C74tXg-6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-Bi3cHAEE.js";import"./index-DVSj14ZC.js";import"./index-p7YOrb6p.js";import"./24-BbN_tXia.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-Gcxv2DAi.js";import"./24-BC-oV7QY.js";const y=r=>c.jsx(d,{p:"0",justifyContent:"center",alignItems:"center",className:b.wrapper,children:c.jsx(r,{})}),R={title:"Components/Snackbar/Stories",component:p,decorators:[y],argTypes:k},t=r=>c.jsx(p,{...r,children:"Snackbar по умолчанию"});t.storyName="Snackbar по умолчанию";const e=r=>{const s=Object.values(i);return c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:s.map(a=>l.createElement(p,{...r,color:a,key:a},"Текст"))})};e.storyName="Snackbar с разными вариантами цветов";e.args={startIcon:!0,actionButton:!0};e.parameters={controls:{disable:!0}};const o=r=>{const s=Object.values(i);return c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:s.map(a=>l.createElement(p,{...r,color:a,key:a,type:S.indication},"Текст"))})};o.storyName="Snackbar с разными вариантами цветов и типом indication";o.args={startIcon:!0,actionButton:!0};o.parameters={controls:{disable:!0}};const n=r=>{const[s,a]=l.useState(0),m=()=>{a(u=>u+1)};return l.createElement(p,{...r,showCountdown:!0,onClose:m,key:s,autoHideDuration:1e4},"Snackbar с таймером")};n.storyName="Snackbar с таймером";n.parameters={controls:{disable:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(argTypes: ISnackbarProps): ReactNode => {
  return <Snackbar {...argTypes}>Snackbar по умолчанию</Snackbar>;
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(argTypes: ISnackbarProps): ReactNode => {
  const colors = Object.values(ESnackbarColors);
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      {colors.map(color => <Snackbar {...argTypes} color={color} key={color}>
          Текст
        </Snackbar>)}
    </div>;
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(argTypes: ISnackbarProps): ReactNode => {
  const colors = Object.values(ESnackbarColors);
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      {colors.map(color => <Snackbar {...argTypes} color={color} key={color} type={ESnackbarTypes.indication}>
          Текст
        </Snackbar>)}
    </div>;
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(argTypes: ISnackbarProps): ReactNode => {
  const [key, setKey] = useState(0);
  const handleClose = () => {
    setKey(prev => prev + 1);
  };
  return <Snackbar {...argTypes} showCountdown onClose={handleClose} key={key} autoHideDuration={10000}>
      Snackbar с таймером
    </Snackbar>;
}`,...n.parameters?.docs?.source}}};const B=["DefaultSnackbar","SnackbarColors","SnackbarIndicationColors","SnackbarTimer"];export{t as DefaultSnackbar,e as SnackbarColors,o as SnackbarIndicationColors,n as SnackbarTimer,B as __namedExportsOrder,R as default};
