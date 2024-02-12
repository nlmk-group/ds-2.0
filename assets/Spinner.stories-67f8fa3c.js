import{j as r}from"./clsx.m-3764cf42.js";import{$ as t}from"./index-d664667a.js";import"./index-a4c35820.js";import"./index-63601013.js";import"./index-e99519f1.js";import"./index-cd305b84.js";import"./index-147655d7.js";import"./index-fb030d50.js";import{I as f}from"./index-ed56af28.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import"./index-f1f749bf.js";import{s as e}from"./styles.module-caf3a80a.js";import{a as g}from"./argsTypes-c7455bf6.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./IconArticle24-414bfa4c.js";import"./IconsList.module-e4fe8555.js";import"./IconPanTool24-f1398bf1.js";import"./get-78cac09e.js";import"./index-c1da5c13.js";const E="Spinner состояние по умолчанию",I="Spinner размера medium",C="Spinner с разными цветами",T="Spinner где Icon, как children (JSX.Element)",X=N=>r("div",{style:{minHeight:80},children:N()}),K={title:"Components/Spinner/Stories",component:t,decorators:[X],argTypes:g},n=()=>r("div",{className:e.wrapper,style:{width:40},children:r("div",{className:e.row,children:r(t,{})})});n.storyName=E;const s=()=>r("div",{className:e.wrapper,style:{width:32},children:r("div",{className:e.row,children:r(t,{size:"m"})})});s.storyName=I;const o=()=>r("div",{className:e.wrapper,style:{width:40},children:r("div",{className:e.row,children:r(t,{bgColor:"#ff6e40",color:"#1e3d59"})})});o.storyName=C;const i=()=>r("div",{className:e.wrapper,style:{width:30},children:r("div",{className:e.row,children:r(t,{children:r(f,{color:"primary",containerSize:32,name:"IconAutorenew24"})})})});i.storyName=T;var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper} style={{
    width: 40
  }}>
      <div className={styles.row}>
        <Spinner />
      </div>
    </div>;
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,l,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper} style={{
    width: 32
  }}>
      <div className={styles.row}>
        <Spinner size="m" />
      </div>
    </div>;
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var S,w,u;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper} style={{
    width: 40
  }}>
      <div className={styles.row}>
        <Spinner bgColor="#ff6e40" color="#1e3d59" />
      </div>
    </div>;
}`,...(u=(w=o.parameters)==null?void 0:w.docs)==null?void 0:u.source}}};var y,h,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper} style={{
    width: 30
  }}>
      <div className={styles.row}>
        <Spinner>
          <Icon color="primary" containerSize={32} name="IconAutorenew24" />
        </Spinner>
      </div>
    </div>;
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const Q=["SpinnerDefault","SpinnerMSize","SpinnerChangeColor","SpinnerWithIcon"];export{o as SpinnerChangeColor,n as SpinnerDefault,s as SpinnerMSize,i as SpinnerWithIcon,Q as __namedExportsOrder,K as default};
