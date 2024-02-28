import{j as r}from"./clsx.m-CcuEzMhP.js";import{_ as o,z,y as S}from"./index-CMWTVP_7.js";import"./index-ehJh3wQv.js";import"./index-D-9trSFj.js";import"./index-DjeAniHW.js";import"./index-fOOxcv8w.js";import"./index-fbTu1Hcf.js";import{I as p}from"./index-BhQGQSXE.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-DyFb8FNg.js";import"./32-UdY5WLK9.js";import"./index-CBqU2yxZ.js";import{s as b}from"./styles.module-DeLvTIFi.js";import{a as _}from"./argsTypes-DgIFlyxZ.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-BO3pQ7ot.js";const D="Link по умолчанию",O="Link с разными параметрами target",j="Link с разными размерами",M="Не активный Link",v="Link с иконками",R=e=>r("div",{className:b.wrapper,children:e()}),se={title:"Components/Link/Stories",component:o,decorators:[R],argTypes:_},s=e=>r(o,{...e,children:e.children});s.storyName=D;s.args={children:"W3Schools",href:"https://www.w3schools.com/"};const n=e=>r(o,{...e,children:e.children});n.storyName=M;n.args={children:"W3Schools",href:"https://www.w3schools.com/",disabled:!0};const t=e=>r("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:Object.values(z).map(c=>r(o,{target:c,...e,children:c}))});t.storyName=O;t.args={href:"https://www.lipsum.com/"};const a=e=>r(o,{...e,children:e.children});a.storyName=v;a.args={children:v,href:"https://www.lipsum.com/",size:S.h1,disabled:!1,leftIcon:r(p,{name:"IconBunkerOutlined16"}),rightIcon:r(p,{name:"IconBunkerOutlined16"})};const i=e=>r("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:Object.values(S).map(c=>r(o,{size:c,...e,children:c}))});i.storyName=j;i.args={href:"https://www.lipsum.com/",disabled:!1};var m,l,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,u,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var L,k,y;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {Object.values(targetMapping).map((target: targetMapping) => <Link target={target} {...argTypes}>
          {target}
        </Link>)}
    </div>;
}`,...(y=(k=t.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var I,f,w;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...(w=(f=a.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var N,T,x;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      {Object.values(sizeMapping).map((size: sizeMapping) => <Link size={size} {...argTypes}>
          {size}
        </Link>)}
    </div>;
}`,...(x=(T=i.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const ne=["DefaultLink","DisabledLink","LinkTargets","IconLink","LinkSizes"];export{s as DefaultLink,n as DisabledLink,a as IconLink,i as LinkSizes,t as LinkTargets,ne as __namedExportsOrder,se as default};
