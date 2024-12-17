import{j as c}from"./jsx-runtime-BRNY0I4F.js";import{r as i}from"./index-Bnop-kX6.js";import{$ as p,Z as T,_ as E}from"./index-ByAgZyky.js";import"./generateUUID-B22BSTI4.js";import"./index-DJJ0U8Tt.js";import"./index-CGzvFf0p.js";import{B as h}from"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-BuA7rasS.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BAfSYk8P.js";import"./index-Br4tp0-d.js";import"./32-DCTol8-9.js";import{g as I}from"./styles.module-ox-emdf8.js";import{a as N}from"./argsTypes-K0y0TRH9.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-CT8gBKwQ.js";const D=r=>c.jsx(h,{p:"0",justifyContent:"center",alignItems:"center",className:I.wrapper,children:c.jsx(r,{})}),V={title:"Components/Snackbar/Stories",component:p,decorators:[D],argTypes:N},s=r=>c.jsx(p,{...r,children:"Snackbar по умолчанию"});s.storyName="Snackbar по умолчанию";const e=r=>{const n=Object.values(T);return c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:n.map(a=>i.createElement(p,{...r,color:a,key:a},"Текст"))})};e.storyName="Snackbar с разными вариантами цветов";e.args={startIcon:!0,actionButton:!0};e.parameters={controls:{disable:!0}};const o=r=>{const n=Object.values(T);return c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:n.map(a=>i.createElement(p,{...r,color:a,key:a,type:E.indication},"Текст"))})};o.storyName="Snackbar с разными вариантами цветов и типом indication";o.args={startIcon:!0,actionButton:!0};o.parameters={controls:{disable:!0}};const t=r=>{const[n,a]=i.useState(0),j=()=>{a(v=>v+1)};return i.createElement(p,{...r,showCountdown:!0,onClose:j,key:n,autoHideDuration:1e4},"Snackbar с таймером")};t.storyName="Snackbar с таймером";t.parameters={controls:{disable:!0}};var l,m,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`(argTypes: ISnackbarProps): ReactNode => {
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
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const X=["DefaultSnackbar","SnackbarColors","SnackbarIndicationColors","SnackbarTimer"];export{s as DefaultSnackbar,e as SnackbarColors,o as SnackbarIndicationColors,t as SnackbarTimer,X as __namedExportsOrder,V as default};
