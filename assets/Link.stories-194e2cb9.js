import{j as r}from"./clsx.m-3764cf42.js";import{L as o,V as b,U as x}from"./index-d664667a.js";import"./index-a4c35820.js";import"./index-63601013.js";import"./index-e99519f1.js";import"./index-cd305b84.js";import"./index-147655d7.js";import"./index-fb030d50.js";import{I as c}from"./index-ed56af28.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import"./index-f1f749bf.js";import{s as z}from"./styles.module-caf3a80a.js";import{a as D}from"./argsTypes-12f0ef18.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./IconArticle24-414bfa4c.js";import"./IconsList.module-e4fe8555.js";import"./IconPanTool24-f1398bf1.js";import"./get-78cac09e.js";import"./index-c1da5c13.js";const _="Link по умолчанию",j="Link с разными параметрами target",M="Link с разными размерами",O="Не активный Link",v="Link с иконками",R=e=>r("div",{className:z.wrapper,children:e()}),ae={title:"Components/Link/Stories",component:o,decorators:[R],argTypes:D},s=e=>r(o,{...e,children:e.children});s.storyName=_;s.args={children:"W3Schools",href:"https://www.w3schools.com/"};const t=e=>r(o,{...e,children:e.children});t.storyName=O;t.args={children:"W3Schools",href:"https://www.w3schools.com/",disabled:!0};const a=e=>r("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:Object.values(b).map(p=>r(o,{target:p,...e,children:p}))});a.storyName=j;a.args={href:"https://www.lipsum.com/"};const n=e=>r(o,{...e,children:e.children});n.storyName=v;n.args={children:v,href:"https://www.lipsum.com/",size:x.h1,disabled:!1,leftIcon:r(c,{name:"IconStorage16"}),rightIcon:r(c,{name:"IconStorage16"})};const i=e=>r("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:Object.values(x).map(p=>r(o,{size:p,...e,children:p}))});i.storyName=M;i.args={href:"https://www.lipsum.com/",disabled:!1};var m,l,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,u,L;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...(L=(u=t.parameters)==null?void 0:u.docs)==null?void 0:L.source}}};var h,k,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {Object.values(targetMapping).map((target: targetMapping) => <Link target={target} {...argTypes}>
          {target}
        </Link>)}
    </div>;
}`,...(y=(k=a.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var I,f,w;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...(w=(f=n.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var N,T,S;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      {Object.values(sizeMapping).map((size: sizeMapping) => <Link size={size} {...argTypes}>
          {size}
        </Link>)}
    </div>;
}`,...(S=(T=i.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const ne=["DefaultLink","DisabledLink","LinkTargets","IconLink","LinkSizes"];export{s as DefaultLink,t as DisabledLink,n as IconLink,i as LinkSizes,a as LinkTargets,ne as __namedExportsOrder,ae as default};
