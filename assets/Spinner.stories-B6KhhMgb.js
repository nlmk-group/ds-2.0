import{j as e,a as f}from"./jsx-runtime-2xDJh5tt.js";import{a8 as s,a9 as p}from"./index-BNnmgeob.js";import"./generateUUID-DRj9BLoM.js";import"./index-D-cSLjE-.js";import"./index-BqvJ5JrJ.js";import"./index-CkVMA9Py.js";import"./index-00CuFchX.js";import"./index-Dd2IALEV.js";import"./index-BGOHbkSJ.js";import"./index-Dp7-Jy-a.js";import"./index-Cx_RX_rp.js";import{i as T}from"./32-O4MZPT9v.js";import"./index-CBqU2yxZ.js";import{s as r}from"./styles.module-DeLvTIFi.js";import{a as X}from"./argsTypes-CLokJJHQ.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-4J70fF5O.js";const _="Spinner состояние по умолчанию",C="Spinner размера medium",I="Spinner с разными цветами",L="Spinner где Icon, как children (JSX.Element)",M="Spinner c процентом",O=A=>e("div",{style:{minHeight:80},children:A()}),re={title:"Components/Spinner/Stories",component:s,decorators:[O],argTypes:X},n=()=>e("div",{className:r.wrapper,style:{width:40},children:e("div",{className:r.row,children:e(s,{})})});n.storyName=_;const i=()=>e("div",{className:r.wrapper,style:{width:32},children:e("div",{className:r.row,children:e(s,{size:"m"})})});i.storyName=C;const t=()=>e("div",{className:r.wrapper,style:{width:40},children:e("div",{className:r.row,children:e(s,{bgColor:"#ff6e40",color:"#1e3d59"})})});t.storyName=I;const a=()=>e("div",{className:r.wrapper,style:{width:30},children:e("div",{className:r.row,children:e(s,{children:e(T,{})})})});a.storyName=L;const o=()=>e("div",{className:r.wrapper,children:f("div",{className:r.row,style:{width:500,display:"flex",gap:20},children:[e(s,{size:p.EXTRA_EXTRA_LARGE,percent:96}),e(s,{size:p.EXTRA_LARGE,percent:56}),e(s,{size:p.LARGE,percent:40}),e(s,{size:p.MEDIUM,percent:32})]})});o.storyName=M;var c,m,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper} style={{
    width: 40
  }}>
      <div className={styles.row}>
        <Spinner />
      </div>
    </div>;
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,S,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper} style={{
    width: 32
  }}>
      <div className={styles.row}>
        <Spinner size="m" />
      </div>
    </div>;
}`,...(u=(S=i.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};var w,h,v;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper} style={{
    width: 40
  }}>
      <div className={styles.row}>
        <Spinner bgColor="#ff6e40" color="#1e3d59" />
      </div>
    </div>;
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,N,E;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper} style={{
    width: 30
  }}>
      <div className={styles.row}>
        <Spinner>
          <IconAutoRenewReloadOutlined24 />
        </Spinner>
      </div>
    </div>;
}`,...(E=(N=a.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var R,z,g;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(g=(z=o.parameters)==null?void 0:z.docs)==null?void 0:g.source}}};const se=["SpinnerDefault","SpinnerMSize","SpinnerChangeColor","SpinnerWithIcon","SpinnerWithPercent"];export{t as SpinnerChangeColor,n as SpinnerDefault,i as SpinnerMSize,a as SpinnerWithIcon,o as SpinnerWithPercent,se as __namedExportsOrder,re as default};
