import{j as e}from"./clsx.m-3764cf42.js";import{a2 as t}from"./index-f014e98c.js";import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import"./index-fb030d50.js";import{a as f}from"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-bc089e17.js";import"./index-f1f749bf.js";import{s as r}from"./styles.module-caf3a80a.js";import{a as g}from"./argsTypes-c7455bf6.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./get-78cac09e.js";import"./index-c1da5c13.js";const E="Spinner состояние по умолчанию",C="Spinner размера medium",I="Spinner с разными цветами",T="Spinner где Icon, как children (JSX.Element)",X=N=>e("div",{style:{minHeight:80},children:N()}),q={title:"Components/Spinner/Stories",component:t,decorators:[X],argTypes:g},n=()=>e("div",{className:r.wrapper,style:{width:40},children:e("div",{className:r.row,children:e(t,{})})});n.storyName=E;const s=()=>e("div",{className:r.wrapper,style:{width:32},children:e("div",{className:r.row,children:e(t,{size:"m"})})});s.storyName=C;const o=()=>e("div",{className:r.wrapper,style:{width:40},children:e("div",{className:r.row,children:e(t,{bgColor:"#ff6e40",color:"#1e3d59"})})});o.storyName=I;const i=()=>e("div",{className:r.wrapper,style:{width:30},children:e("div",{className:r.row,children:e(t,{children:e(f,{color:"primary",containerSize:32,name:"IconAutorenew24"})})})});i.storyName=T;var a,p,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`(): JSX.Element => {
  return <div className={styles.wrapper} style={{
    width: 40
  }}>
      <div className={styles.row}>
        <Spinner />
      </div>
    </div>;
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,l,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(): JSX.Element => {
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
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const B=["SpinnerDefault","SpinnerMSize","SpinnerChangeColor","SpinnerWithIcon"];export{o as SpinnerChangeColor,n as SpinnerDefault,s as SpinnerMSize,i as SpinnerWithIcon,B as __namedExportsOrder,q as default};
