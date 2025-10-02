import{j as c}from"./jsx-runtime-BTJTZTIL.js";import{r as i}from"./index-BcJSXhQi.js";import{a2 as p,a1 as T,a0 as E}from"./TreeList-c_Bstqqa.js";import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-WHoiTdKD.js";import{B as h}from"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import"./32-CkUgnIrf.js";import{g as I}from"./styles.module-m0Zsy3Hi.js";import{a as N}from"./argsTypes-D2y_iBYj.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const D=r=>c.jsx(h,{p:"0",justifyContent:"center",alignItems:"center",className:I.wrapper,children:c.jsx(r,{})}),rr={title:"Components/Snackbar/Stories",component:p,decorators:[D],argTypes:N},s=r=>c.jsx(p,{...r,children:"Snackbar по умолчанию"});s.storyName="Snackbar по умолчанию";const e=r=>{const n=Object.values(T);return c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:n.map(a=>i.createElement(p,{...r,color:a,key:a},"Текст"))})};e.storyName="Snackbar с разными вариантами цветов";e.args={startIcon:!0,actionButton:!0};e.parameters={controls:{disable:!0}};const o=r=>{const n=Object.values(T);return c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:n.map(a=>i.createElement(p,{...r,color:a,key:a,type:E.indication},"Текст"))})};o.storyName="Snackbar с разными вариантами цветов и типом indication";o.args={startIcon:!0,actionButton:!0};o.parameters={controls:{disable:!0}};const t=r=>{const[n,a]=i.useState(0),j=()=>{a(v=>v+1)};return i.createElement(p,{...r,showCountdown:!0,onClose:j,key:n,autoHideDuration:1e4},"Snackbar с таймером")};t.storyName="Snackbar с таймером";t.parameters={controls:{disable:!0}};var l,m,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`(argTypes: ISnackbarProps): ReactNode => {
  return <Snackbar {...argTypes}>Snackbar по умолчанию</Snackbar>;
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,b,k;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`(argTypes: ISnackbarProps): ReactNode => {
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
}`,...(k=(b=e.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var S,y,g;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`(argTypes: ISnackbarProps): ReactNode => {
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
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var x,f,C;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`(argTypes: ISnackbarProps): ReactNode => {
  const [key, setKey] = useState(0);
  const handleClose = () => {
    setKey(prev => prev + 1);
  };
  return <Snackbar {...argTypes} showCountdown onClose={handleClose} key={key} autoHideDuration={10000}>
      Snackbar с таймером
    </Snackbar>;
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const ar=["DefaultSnackbar","SnackbarColors","SnackbarIndicationColors","SnackbarTimer"];export{s as DefaultSnackbar,e as SnackbarColors,o as SnackbarIndicationColors,t as SnackbarTimer,ar as __namedExportsOrder,rr as default};
