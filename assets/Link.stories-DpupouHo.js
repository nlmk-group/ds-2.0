import{j as r}from"./jsx-runtime-DFnSfiB4.js";import{a8 as o,w as v,u as T}from"./index-BGpPsu4k.js";import"./generateUUID-C8XntvAg.js";import"./index-ByiRgrzj.js";import"./index-Cd-Fhxqm.js";import{B as b}from"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-ehXB0alm.js";import{I as c}from"./index-CFeGFBie.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CTg4GkBi.js";import"./32-CkcGOl0S.js";import"./index-DQ2WTIsS.js";import{s as z}from"./styles.module-Chmqxc13.js";import{a as D}from"./argsTypes-BE7yF4bE.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-BKbm6zW0.js";const O="Link по умолчанию",_="Link с разными параметрами target",B="Link с разными размерами",R="Не активный Link",S="Link с иконками",E=e=>r.jsx("div",{className:z.wrapper,children:e()}),te={title:"Components/Link/Stories",component:o,decorators:[E],argTypes:D},s=e=>r.jsx(b,{width:"200px",children:r.jsx(o,{...e,children:e.children})});s.storyName=O;s.args={children:"W3Schools & Power of knowledge",href:"https://www.w3schools.com/"};const n=e=>r.jsx(o,{...e,children:e.children});n.storyName=R;n.args={children:"W3Schools",href:"https://www.w3schools.com/",disabled:!0};const t=e=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:Object.values(v).map(p=>r.jsx(o,{target:p,...e,children:p}))});t.storyName=_;t.args={href:"https://www.lipsum.com/"};const a=e=>r.jsx(o,{...e,children:e.children});a.storyName=S;a.args={children:S,href:"https://www.lipsum.com/",size:T.h1,disabled:!1,leftIcon:r.jsx(c,{name:"IconBunkerOutlined16"}),rightIcon:r.jsx(c,{name:"IconBunkerOutlined16"})};const i=e=>r.jsx("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:Object.values(T).map(p=>r.jsx(o,{size:p,...e,children:p}))});i.storyName=B;i.args={href:"https://www.lipsum.com/",disabled:!1};var m,l,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Box width="200px">
      <Link {...argTypes} children={argTypes.children} />
    </Box>;
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,u,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var L,k,x;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {Object.values(targetMapping).map((target: targetMapping) => <Link target={target} {...argTypes}>
          {target}
        </Link>)}
    </div>;
}`,...(x=(k=t.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var y,f,w;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...(w=(f=a.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var I,j,N;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      {Object.values(sizeMapping).map((size: sizeMapping) => <Link size={size} {...argTypes}>
          {size}
        </Link>)}
    </div>;
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const ae=["DefaultLink","DisabledLink","LinkTargets","IconLink","LinkSizes"];export{s as DefaultLink,n as DisabledLink,a as IconLink,i as LinkSizes,t as LinkTargets,ae as __namedExportsOrder,te as default};
