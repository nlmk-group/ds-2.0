import{j as r,a as $}from"./clsx.m-3764cf42.js";import{a1 as c,a0 as d}from"./index-f014e98c.js";import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import"./index-fb030d50.js";import{a as F}from"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-bc089e17.js";import"./index-f1f749bf.js";import{a as o}from"./chunk-WFFRPTHA-a68c42c5.js";import{s as P}from"./styles.module-caf3a80a.js";import{f as W,D as M,S as w,a as K,b as E,c as L,d as z,e as U}from"./constants-38e166eb.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./get-78cac09e.js";import"./index-c1da5c13.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const Y=a=>r("div",{className:P.wrapper,children:a()}),ya={title:"Components/Snackbar/Stories",component:c,decorators:[Y],argTypes:W},n=a=>r(c,{...a});n.storyName=M;n.args={children:M};const s=a=>r(c,{...a});s.storyName=w;s.args={children:w,close:o("onClose")};const t=a=>r(c,{...a});t.storyName=K;t.args={children:K,actionButton:o("onActionClicked")};const i=a=>r("div",{style:{display:"flex",flexDirection:"column",gap:"var(--8-space"},children:Object.values(d).map(e=>r(c,{...a,color:e},e))});i.storyName=E;i.args={children:E,close:o("onClose"),actionButton:o("onActionClicked")};const p=a=>r("div",{style:{display:"flex",flexDirection:"column",gap:"var(--8-space"},children:Object.values(d).map(e=>r(c,{...a,withIcon:!0,color:e},e))});p.storyName=L;p.args={children:L,close:o("onClose"),actionButton:o("onActionClicked")};const l=a=>r(c,{...a,customIcon:r(F,{name:"IconEducationOutlined24",containerSize:24,htmlColor:"var(--default-second)"})});l.storyName=z;l.args={withIcon:!0,children:z,color:d.dark,close:o("onClose"),actionButton:o("onActionClicked")};const m=a=>$("div",{style:{display:"flex",gap:"var(--8-space"},children:[r("div",{style:{display:"flex",flexDirection:"column",gap:"var(--8-space"},children:Object.values(d).map(e=>r(c,{...a,withIcon:!0,color:e},e))}),r("div",{style:{display:"flex",flexDirection:"column",gap:"var(--8-space"},children:Object.values(d).map(e=>r(c,{...a,withIcon:!0,color:e,bgOpacity:70},`${e}_opacity`))})]});m.storyName=U;m.args={children:U,close:o("onClose"),actionButton:o("onActionClicked")};var u,y,S;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`(argTypes: ISnackbar): ReactNode => {
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
}`,...(j=(D=m.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};const Sa=["DefaultSnackbar","SnackbarClose","SnackbarAction","SnackbarColor","SnackbarIcon","SnackbarCustomIcon","SnackbarOpacity"];export{n as DefaultSnackbar,t as SnackbarAction,s as SnackbarClose,i as SnackbarColor,l as SnackbarCustomIcon,p as SnackbarIcon,m as SnackbarOpacity,Sa as __namedExportsOrder,ya as default};
