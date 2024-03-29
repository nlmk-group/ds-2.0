import{j as a,a as $}from"./jsx-runtime-2xDJh5tt.js";import{S as c,z as d}from"./index-DWTGGx_t.js";import"./generateUUID-DZpKhNdB.js";import"./index-C-x6zlLc.js";import"./index-CgSHB1U0.js";import"./index-BR2u5piM.js";import{I as F}from"./index-D3aZeTS2.js";import"./index-pmCx02Kh.js";import"./index-j1olA-rT.js";import"./index-Dp7-Jy-a.js";import"./index-ByRza-M8.js";import"./32-BI8cdrFX.js";import"./index-CBqU2yxZ.js";import{a as o}from"./chunk-WFFRPTHA-B5TewAtn.js";import{s as P}from"./styles.module-DeLvTIFi.js";import{a as W,D as M,S as w,b as K,c as E,d as z,e as L,f as U}from"./constants-J_szrX7D.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-Y8Vz1tB_.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";const Y=r=>a("div",{className:P.wrapper,children:r()}),gr={title:"Components/Snackbar/Stories",component:c,decorators:[Y],argTypes:W},n=r=>a(c,{...r});n.storyName=M;n.args={children:M};const s=r=>a(c,{...r});s.storyName=w;s.args={children:w,close:o("onClose")};const t=r=>a(c,{...r});t.storyName=K;t.args={children:K,actionButton:o("onActionClicked")};const i=r=>a("div",{style:{display:"flex",flexDirection:"column",gap:"var(--8-space"},children:Object.values(d).map(e=>a(c,{...r,color:e},e))});i.storyName=E;i.args={children:E,close:o("onClose"),actionButton:o("onActionClicked")};const p=r=>a("div",{style:{display:"flex",flexDirection:"column",gap:"var(--8-space"},children:Object.values(d).map(e=>a(c,{...r,withIcon:!0,color:e},e))});p.storyName=z;p.args={children:z,close:o("onClose"),actionButton:o("onActionClicked")};const l=r=>a(c,{...r,customIcon:a(F,{name:"IconEducationOutlined24",containerSize:24,htmlColor:"var(--default-second)"})});l.storyName=L;l.args={withIcon:!0,children:L,color:d.dark,close:o("onClose"),actionButton:o("onActionClicked")};const m=r=>$("div",{style:{display:"flex",gap:"var(--8-space"},children:[a("div",{style:{display:"flex",flexDirection:"column",gap:"var(--8-space"},children:Object.values(d).map(e=>a(c,{...r,withIcon:!0,color:e},e))}),a("div",{style:{display:"flex",flexDirection:"column",gap:"var(--8-space"},children:Object.values(d).map(e=>a(c,{...r,withIcon:!0,color:e,bgOpacity:70},`${e}_opacity`))})]});m.storyName=U;m.args={children:U,close:o("onClose"),actionButton:o("onActionClicked")};var u,y,S;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`(argTypes: ISnackbar): ReactNode => {
  return <Snackbar {...argTypes} />;
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var g,b,k;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`(argTypes: ISnackbar): ReactNode => {
  return <Snackbar {...argTypes} />;
}`,...(k=(b=s.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var v,C,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`(argTypes: ISnackbar): ReactNode => {
  return <Snackbar {...argTypes} />;
}`,...(f=(C=t.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var I,N,A;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`(argTypes: ISnackbar): ReactNode => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--8-space'
  }}>
      {Object.values(colorMapping).map((color: colorMapping) => <Snackbar key={color} {...argTypes} color={color} />)}
    </div>;
}`,...(A=(N=i.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var h,O,x;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`(argTypes: ISnackbar): ReactNode => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--8-space'
  }}>
      {Object.values(colorMapping).map((color: colorMapping) => <Snackbar key={color} {...argTypes} withIcon color={color} />)}
    </div>;
}`,...(x=(O=p.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var T,R,_;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`(argTypes: ISnackbar): ReactNode => {
  return <Snackbar {...argTypes} customIcon={<Icon name="IconEducationOutlined24" containerSize={24} htmlColor={'var(--default-second)'} />} />;
}`,...(_=(R=l.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var B,D,j;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`(argTypes: ISnackbar): ReactNode => {
  return <div style={{
    display: 'flex',
    gap: 'var(--8-space'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--8-space'
    }}>
        {Object.values(colorMapping).map((color: colorMapping) => <Snackbar key={color} {...argTypes} withIcon color={color} />)}
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--8-space'
    }}>
        {Object.values(colorMapping).map((color: colorMapping) => <Snackbar key={\`\${color}_opacity\`} {...argTypes} withIcon color={color} bgOpacity={70} />)}
      </div>
    </div>;
}`,...(j=(D=m.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};const br=["DefaultSnackbar","SnackbarClose","SnackbarAction","SnackbarColor","SnackbarIcon","SnackbarCustomIcon","SnackbarOpacity"];export{n as DefaultSnackbar,t as SnackbarAction,s as SnackbarClose,i as SnackbarColor,l as SnackbarCustomIcon,p as SnackbarIcon,m as SnackbarOpacity,br as __namedExportsOrder,gr as default};
