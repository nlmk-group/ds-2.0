import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{ak as s,al as p}from"./index-Bq8dHBmc.js";import"./generateUUID-i9L7EtYg.js";import"./index-bLIWCpda.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-DJXOh8UI.js";import"./index-DB41iIPt.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CpIRsoAz.js";import{t as z}from"./32-C4VDZHit.js";import"./index-DQ2WTIsS.js";import{s as r}from"./styles.module-C4SoDQaA.js";import{a as A}from"./argsTypes-CLokJJHQ.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-0sbKER3h.js";const f="Spinner состояние по умолчанию",T="Spinner размера medium",X="Spinner с разными цветами",C="Spinner где Icon, как children (JSX.Element)",_="Spinner c процентом",I=g=>e.jsx("div",{style:{minHeight:80},children:g()}),re={title:"Components/Spinner/Stories",component:s,decorators:[I],argTypes:A},n=()=>e.jsx("div",{className:r.wrapper,style:{width:40},children:e.jsx("div",{className:r.row,children:e.jsx(s,{})})});n.storyName=f;const i=()=>e.jsx("div",{className:r.wrapper,style:{width:32},children:e.jsx("div",{className:r.row,children:e.jsx(s,{size:"m"})})});i.storyName=T;const t=()=>e.jsx("div",{className:r.wrapper,style:{width:40},children:e.jsx("div",{className:r.row,children:e.jsx(s,{bgColor:"#ff6e40",color:"#1e3d59"})})});t.storyName=X;const a=()=>e.jsx("div",{className:r.wrapper,style:{width:30},children:e.jsx("div",{className:r.row,children:e.jsx(s,{children:e.jsx(z,{htmlColor:"var(--ac-loader-stroke-progress)"})})})});a.storyName=C;const o=()=>e.jsx("div",{className:r.wrapper,children:e.jsxs("div",{className:r.row,style:{width:500,display:"flex",gap:20},children:[e.jsx(s,{size:p.EXTRA_EXTRA_LARGE,percent:96}),e.jsx(s,{size:p.EXTRA_LARGE,percent:56}),e.jsx(s,{size:p.LARGE,percent:40}),e.jsx(s,{size:p.MEDIUM,percent:32})]})});o.storyName=_;var c,l,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper} style={{
    width: 40
  }}>
      <div className={styles.row}>
        <Spinner />
      </div>
    </div>;
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,S,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper} style={{
    width: 32
  }}>
      <div className={styles.row}>
        <Spinner size="m" />
      </div>
    </div>;
}`,...(u=(S=i.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};var h,v,w;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper} style={{
    width: 40
  }}>
      <div className={styles.row}>
        <Spinner bgColor="#ff6e40" color="#1e3d59" />
      </div>
    </div>;
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var y,E,N;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper} style={{
    width: 30
  }}>
      <div className={styles.row}>
        <Spinner>
          <IconAutoRenewReloadOutlined24 htmlColor="var(--ac-loader-stroke-progress)" />
        </Spinner>
      </div>
    </div>;
}`,...(N=(E=a.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var x,j,R;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(R=(j=o.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};const se=["SpinnerDefault","SpinnerMSize","SpinnerChangeColor","SpinnerWithIcon","SpinnerWithPercent"];export{t as SpinnerChangeColor,n as SpinnerDefault,i as SpinnerMSize,a as SpinnerWithIcon,o as SpinnerWithPercent,se as __namedExportsOrder,re as default};
