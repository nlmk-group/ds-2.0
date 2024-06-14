import{j as e,a as f}from"./jsx-runtime-2xDJh5tt.js";import{ag as s,ah as p}from"./index-CfZTnDhX.js";import"./generateUUID-xFqDjoto.js";import"./index-qrvtYV6q.js";import"./index-CTkD9j2t.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import"./index-nWYpQihe.js";import"./index-C6sJWxXv.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-CBS9NtKm.js";import{y as T}from"./32-DtWm84R6.js";import"./index-CBqU2yxZ.js";import{s as r}from"./styles.module-DeLvTIFi.js";import{a as X}from"./argsTypes-CLokJJHQ.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-CMH8wQUv.js";const C="Spinner состояние по умолчанию",_="Spinner размера medium",I="Spinner с разными цветами",L="Spinner где Icon, как children (JSX.Element)",M="Spinner c процентом",O=A=>e("div",{style:{minHeight:80},children:A()}),se={title:"Components/Spinner/Stories",component:s,decorators:[O],argTypes:X},n=()=>e("div",{className:r.wrapper,style:{width:40},children:e("div",{className:r.row,children:e(s,{})})});n.storyName=C;const i=()=>e("div",{className:r.wrapper,style:{width:32},children:e("div",{className:r.row,children:e(s,{size:"m"})})});i.storyName=_;const t=()=>e("div",{className:r.wrapper,style:{width:40},children:e("div",{className:r.row,children:e(s,{bgColor:"#ff6e40",color:"#1e3d59"})})});t.storyName=I;const a=()=>e("div",{className:r.wrapper,style:{width:30},children:e("div",{className:r.row,children:e(s,{children:e(T,{htmlColor:"var(--ac-loader-stroke-progress)"})})})});a.storyName=L;const o=()=>e("div",{className:r.wrapper,children:f("div",{className:r.row,style:{width:500,display:"flex",gap:20},children:[e(s,{size:p.EXTRA_EXTRA_LARGE,percent:96}),e(s,{size:p.EXTRA_LARGE,percent:56}),e(s,{size:p.LARGE,percent:40}),e(s,{size:p.MEDIUM,percent:32})]})});o.storyName=M;var c,l,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper} style={{
    width: 40
  }}>
      <div className={styles.row}>
        <Spinner />
      </div>
    </div>;
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,S,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper} style={{
    width: 32
  }}>
      <div className={styles.row}>
        <Spinner size="m" />
      </div>
    </div>;
}`,...(h=(S=i.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var u,v,w;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper} style={{
    width: 40
  }}>
      <div className={styles.row}>
        <Spinner bgColor="#ff6e40" color="#1e3d59" />
      </div>
    </div>;
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var y,N,E;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper} style={{
    width: 30
  }}>
      <div className={styles.row}>
        <Spinner>
          <IconAutoRenewReloadOutlined24 htmlColor="var(--ac-loader-stroke-progress)" />
        </Spinner>
      </div>
    </div>;
}`,...(E=(N=a.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var g,R,z;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper}>
      <div className={styles.row} style={{
      width: 500,
      display: 'flex',
      gap: 20
    }}>
        <Spinner size={sizes.EXTRA_EXTRA_LARGE} percent={96} />
        <Spinner size={sizes.EXTRA_LARGE} percent={56} />
        <Spinner size={sizes.LARGE} percent={40} />
        <Spinner size={sizes.MEDIUM} percent={32} />
      </div>
    </div>;
}`,...(z=(R=o.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};const ne=["SpinnerDefault","SpinnerMSize","SpinnerChangeColor","SpinnerWithIcon","SpinnerWithPercent"];export{t as SpinnerChangeColor,n as SpinnerDefault,i as SpinnerMSize,a as SpinnerWithIcon,o as SpinnerWithPercent,ne as __namedExportsOrder,se as default};
