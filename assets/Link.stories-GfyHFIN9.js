import{j as r,r as l}from"./iframe-D1ppCfJL.js";import{B as d}from"./index-D1MtTpbs.js";import{I as m}from"./index-1Ia9d37J.js";import{L as t,t as u,s as g}from"./index-CZz4O3t8.js";import{g as k}from"./styles.module-P9JyAdOG.js";import{a as L}from"./argsTypes-CS3SLMlM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-DzcHwvay.js";import"./24-Cp8l4Ntb.js";import"./24-CXzdah1X.js";import"./24-eQHncE30.js";import"./24-CRTRQ8Ly.js";import"./24-C2zrmoH8.js";import"./24-DvGStvE4.js";import"./24-DEoWbW1a.js";import"./24-DTwfOo-x.js";import"./24-Dwzv70HG.js";import"./24-hEGWduDH.js";import"./16-CJBceTE3.js";import"./24-BoJlH0P7.js";import"./24-DeVNRByj.js";import"./16-DDpVoX5v.js";import"./16-DyMPAZyw.js";import"./16-Dg_oBXFF.js";import"./16-m76_vWtK.js";import"./16-CtdeCqSX.js";import"./index-B8OV2sj9.js";const x="Link по умолчанию",y="Link с разными параметрами target",w="Link с разными размерами",f="Не активный Link",h="Link с иконками",I="Link с коллбеком",N=e=>r.jsx("div",{className:k.wrapper,children:r.jsx(e,{})}),$={title:"Components/Link/Stories",component:t,decorators:[N],argTypes:L},n=e=>r.jsx(d,{width:"200px",children:r.jsx(t,{...e,children:e.children})});n.storyName=x;n.args={children:"W3Schools & Power of knowledge",href:"https://www.w3schools.com/"};const a=e=>r.jsx(t,{...e,children:e.children});a.storyName=f;a.args={children:"W3Schools",href:"https://www.w3schools.com/",disabled:!0};const o=e=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:Object.values(u).map(s=>l.createElement(t,{target:s,...e,key:s},s))});o.storyName=y;o.args={href:"https://www.lipsum.com/"};const i=e=>r.jsx(t,{...e,children:e.children});i.storyName=h;i.args={children:h,href:"https://www.lipsum.com/",size:g.h1,disabled:!1,leftIcon:r.jsx(m,{name:"IconBunkerOutlined16"}),rightIcon:r.jsx(m,{name:"IconBunkerOutlined16"})};const c=e=>r.jsx("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:Object.values(g).map(s=>l.createElement(t,{size:s,...e,key:s},s))});c.storyName=w;c.args={href:"https://www.lipsum.com/",disabled:!1};const p=e=>r.jsx(d,{width:"200px",children:r.jsx(t,{...e,children:e.children})});p.storyName=I;p.args={children:"W3Schools",href:"https://www.w3schools.com/",onClick:e=>{e.preventDefault(),alert("Обработка клика по ссылке")}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Box width="200px">
      <Link {...argTypes} children={argTypes.children} />
    </Box>;
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {Object.values(targetMapping).map((target: targetMapping) => <Link target={target} {...argTypes} key={target}>
          {target}
        </Link>)}
    </div>;
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      {Object.values(sizeMapping).map((size: sizeMapping) => <Link size={size} {...argTypes} key={size}>
          {size}
        </Link>)}
    </div>;
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Box width="200px">
      <Link {...argTypes} children={argTypes.children} />
    </Box>;
}`,...p.parameters?.docs?.source}}};const ee=["DefaultLink","DisabledLink","LinkTargets","IconLink","LinkSizes","LinkCallback"];export{n as DefaultLink,a as DisabledLink,i as IconLink,p as LinkCallback,c as LinkSizes,o as LinkTargets,ee as __namedExportsOrder,$ as default};
