import{j as r}from"./clsx.m-3764cf42.js";import{L as o,Y as b,X as S}from"./index-f014e98c.js";import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import"./index-fb030d50.js";import{a as p}from"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-bc089e17.js";import"./index-f1f749bf.js";import{s as z}from"./styles.module-caf3a80a.js";import{a as D}from"./argsTypes-1a2e7907.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./get-78cac09e.js";import"./index-c1da5c13.js";const O="Link по умолчанию",_="Link с разными параметрами target",j="Link с разными размерами",M="Не активный Link",v="Link с иконками",R=e=>r("div",{className:z.wrapper,children:e()}),ee={title:"Components/Link/Stories",component:o,decorators:[R],argTypes:D},s=e=>r(o,{...e,children:e.children});s.storyName=O;s.args={children:"W3Schools",href:"https://www.w3schools.com/"};const n=e=>r(o,{...e,children:e.children});n.storyName=M;n.args={children:"W3Schools",href:"https://www.w3schools.com/",disabled:!0};const a=e=>r("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:Object.values(b).map(c=>r(o,{target:c,...e,children:c}))});a.storyName=_;a.args={href:"https://www.lipsum.com/"};const t=e=>r(o,{...e,children:e.children});t.storyName=v;t.args={children:v,href:"https://www.lipsum.com/",size:S.h1,disabled:!1,leftIcon:r(p,{name:"IconBunkerOutlined16"}),rightIcon:r(p,{name:"IconBunkerOutlined16"})};const i=e=>r("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:Object.values(S).map(c=>r(o,{size:c,...e,children:c}))});i.storyName=j;i.args={href:"https://www.lipsum.com/",disabled:!1};var m,l,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,u,L;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...(L=(u=n.parameters)==null?void 0:u.docs)==null?void 0:L.source}}};var h,k,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {Object.values(targetMapping).map((target: targetMapping) => <Link target={target} {...argTypes}>
          {target}
        </Link>)}
    </div>;
}`,...(y=(k=a.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var f,I,w;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...(w=(I=t.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var N,T,x;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      {Object.values(sizeMapping).map((size: sizeMapping) => <Link size={size} {...argTypes}>
          {size}
        </Link>)}
    </div>;
}`,...(x=(T=i.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const re=["DefaultLink","DisabledLink","LinkTargets","IconLink","LinkSizes"];export{s as DefaultLink,n as DisabledLink,t as IconLink,i as LinkSizes,a as LinkTargets,re as __namedExportsOrder,ee as default};
