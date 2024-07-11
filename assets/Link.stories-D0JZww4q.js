import{j as r}from"./jsx-runtime-2xDJh5tt.js";import{a2 as o,p as b,o as S}from"./index-DUR5naaP.js";import"./generateUUID-BitdulAq.js";import"./index-D_z3tN8U.js";import"./index-CTkD9j2t.js";import{B as z}from"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import"./index-nWYpQihe.js";import{I as c}from"./index-CZmYKfHv.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-BDxIiU-V.js";import"./32-D4qDQhsJ.js";import"./index-CBqU2yxZ.js";import{s as D}from"./styles.module-DeLvTIFi.js";import{a as O}from"./argsTypes-BznijmnJ.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-CMH8wQUv.js";const _="Link по умолчанию",B="Link с разными параметрами target",j="Link с разными размерами",M="Не активный Link",v="Link с иконками",R=e=>r("div",{className:D.wrapper,children:e()}),te={title:"Components/Link/Stories",component:o,decorators:[R],argTypes:O},s=e=>r(z,{width:"200px",children:r(o,{...e,children:e.children})});s.storyName=_;s.args={children:"W3Schools & Power of knowledge",href:"https://www.w3schools.com/"};const n=e=>r(o,{...e,children:e.children});n.storyName=M;n.args={children:"W3Schools",href:"https://www.w3schools.com/",disabled:!0};const t=e=>r("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:Object.values(b).map(p=>r(o,{target:p,...e,children:p}))});t.storyName=B;t.args={href:"https://www.lipsum.com/"};const a=e=>r(o,{...e,children:e.children});a.storyName=v;a.args={children:v,href:"https://www.lipsum.com/",size:S.h1,disabled:!1,leftIcon:r(c,{name:"IconBunkerOutlined16"}),rightIcon:r(c,{name:"IconBunkerOutlined16"})};const i=e=>r("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:Object.values(S).map(p=>r(o,{size:p,...e,children:p}))});i.storyName=j;i.args={href:"https://www.lipsum.com/",disabled:!1};var m,l,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Box width="200px">
      <Link {...argTypes} children={argTypes.children} />
    </Box>;
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
}`,...(y=(k=t.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var f,w,I;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...(I=(w=a.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var x,N,T;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      {Object.values(sizeMapping).map((size: sizeMapping) => <Link size={size} {...argTypes}>
          {size}
        </Link>)}
    </div>;
}`,...(T=(N=i.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const ae=["DefaultLink","DisabledLink","LinkTargets","IconLink","LinkSizes"];export{s as DefaultLink,n as DisabledLink,a as IconLink,i as LinkSizes,t as LinkTargets,ae as __namedExportsOrder,te as default};
