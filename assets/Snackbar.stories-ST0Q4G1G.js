import{j as r,a as q}from"./jsx-runtime-2xDJh5tt.js";import{ah as c,ag as u,ai as G}from"./index-B_lQn97I.js";import"./generateUUID-BitdulAq.js";import"./index-D_z3tN8U.js";import"./index-CTkD9j2t.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import"./index-nWYpQihe.js";import{I as H}from"./index-CZmYKfHv.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-BDxIiU-V.js";import"./32-D4qDQhsJ.js";import"./index-CBqU2yxZ.js";import{a as o}from"./chunk-WFFRPTHA-B5TewAtn.js";import{s as J}from"./styles.module-DeLvTIFi.js";import{f as Q,D as L,S as z,a as U,b as $,g as F,c as P,d as W,e as Y}from"./constants-B6QQz9WF.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-CMH8wQUv.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";const V="_bg_1xxov_1",X={bg:V},Z=a=>r("div",{className:J.wrapper,children:a()}),Aa={title:"Components/Snackbar/Stories",component:c,decorators:[Z],argTypes:Q},n=a=>r(c,{...a});n.storyName=L;n.args={children:L};const s=a=>r(c,{...a});s.storyName=z;s.args={children:z,close:o("onClose")};const t=a=>r(c,{...a});t.storyName=U;t.args={children:U,actionButton:o("onActionClicked")};const i=a=>r("div",{style:{display:"flex",flexDirection:"column",gap:"var(--8-space)"},children:Object.values(u).map(e=>r(c,{...a,color:e},e))}),p=a=>r("div",{style:{display:"flex",flexDirection:"column",gap:"var(--8-space)"},children:Object.values(G).map(e=>r(c,{...a,indicator:e,className:X.bg},e))});i.storyName=$;i.args={children:$,close:o("onClose"),actionButton:o("onActionClicked")};p.storyName=F;p.args={children:F,close:o("onClose"),actionButton:o("onActionClicked")};const l=a=>r("div",{style:{display:"flex",flexDirection:"column",gap:"var(--8-space"},children:Object.values(u).map(e=>r(c,{...a,withIcon:!0,color:e},e))});l.storyName=P;l.args={children:P,close:o("onClose"),actionButton:o("onActionClicked")};const d=a=>r(c,{...a,customIcon:r(H,{name:"IconEducationOutlined24",containerSize:24,htmlColor:"var(--default-second)"})});d.storyName=W;d.args={withIcon:!0,children:W,color:u.dark,close:o("onClose"),actionButton:o("onActionClicked")};const m=a=>q("div",{style:{display:"flex",gap:"var(--8-space"},children:[r("div",{style:{display:"flex",flexDirection:"column",gap:"var(--8-space"},children:Object.values(u).map(e=>r(c,{...a,withIcon:!0,color:e},e))}),r("div",{style:{display:"flex",flexDirection:"column",gap:"var(--8-space"},children:Object.values(u).map(e=>r(c,{...a,withIcon:!0,color:e,bgOpacity:70},`${e}_opacity`))})]});m.storyName=Y;m.args={children:Y,close:o("onClose"),actionButton:o("onActionClicked")};var g,y,S;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`(argTypes: ISnackbar): ReactNode => {
  return <Snackbar {...argTypes} />;
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var b,k,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`(argTypes: ISnackbar): ReactNode => {
  return <Snackbar {...argTypes} />;
}`,...(v=(k=s.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var C,f,I;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`(argTypes: ISnackbar): ReactNode => {
  return <Snackbar {...argTypes} />;
}`,...(I=(f=t.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var N,x,A;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: ISnackbar): ReactNode => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--8-space)'
  }}>
      {Object.values(colorMapping).map((color: colorMapping) => <Snackbar key={color} {...argTypes} color={color} />)}
    </div>;
}`,...(A=(x=i.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var h,O,T;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`(argTypes: ISnackbar): ReactNode => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--8-space)'
  }}>
      {Object.values(indicatorMapping).map((color: indicatorMapping) => <Snackbar key={color} {...argTypes} indicator={color} className={storiesStyles.bg} />)}
    </div>;
}`,...(T=(O=p.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var R,_,D;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`(argTypes: ISnackbar): ReactNode => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--8-space'
  }}>
      {Object.values(colorMapping).map((color: colorMapping) => <Snackbar key={color} {...argTypes} withIcon color={color} />)}
    </div>;
}`,...(D=(_=l.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var B,j,M;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`(argTypes: ISnackbar): ReactNode => {
  return <Snackbar {...argTypes} customIcon={<Icon name="IconEducationOutlined24" containerSize={24} htmlColor={'var(--default-second)'} />} />;
}`,...(M=(j=d.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var w,K,E;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`(argTypes: ISnackbar): ReactNode => {
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
}`,...(E=(K=m.parameters)==null?void 0:K.docs)==null?void 0:E.source}}};const ha=["DefaultSnackbar","SnackbarClose","SnackbarAction","SnackbarColor","SnackbarIndicator","SnackbarIcon","SnackbarCustomIcon","SnackbarOpacity"];export{n as DefaultSnackbar,t as SnackbarAction,s as SnackbarClose,i as SnackbarColor,d as SnackbarCustomIcon,l as SnackbarIcon,p as SnackbarIndicator,m as SnackbarOpacity,ha as __namedExportsOrder,Aa as default};
