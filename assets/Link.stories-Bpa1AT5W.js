import{j as r,r as l}from"./iframe-BYEcINU_.js";import{B as d}from"./index-D6OuuQjE.js";import{I as m}from"./index-aRgZryTI.js";import{L as t,t as u,s as g}from"./index-C39GlgiC.js";import{g as k}from"./styles.module-P9JyAdOG.js";import{a as L}from"./argsTypes-lIcFQ0-u.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BcLCWGHn.js";import"./32-DEU7E1yO.js";import"./24-nElrukLD.js";import"./24-CuYChjrW.js";import"./24-Bg-YkJof.js";import"./24-DOSHn3uj.js";import"./24-qZuYAR8B.js";import"./24-Mxvma0Zx.js";import"./24-wPS-GG8M.js";import"./24-mlyJft-U.js";import"./24-DTKLnnJ8.js";import"./16-BbOPmjLm.js";import"./24-CSKlV1Hw.js";import"./24-BeWDWat7.js";import"./16-DVw9RX5j.js";import"./16-BucT6FLY.js";import"./16-CjgRgEbF.js";import"./16--L8JfMjs.js";import"./16-B5oEirVJ.js";import"./index-CTms4VQ3.js";const x="Link по умолчанию",y="Link с разными параметрами target",w="Link с разными размерами",f="Не активный Link",h="Link с иконками",I="Link с коллбеком",N=e=>r.jsx("div",{className:k.wrapper,children:r.jsx(e,{})}),$={title:"Components/Link/Stories",component:t,decorators:[N],argTypes:L},n=e=>r.jsx(d,{width:"200px",children:r.jsx(t,{...e,children:e.children})});n.storyName=x;n.args={children:"W3Schools & Power of knowledge",href:"https://www.w3schools.com/"};const a=e=>r.jsx(t,{...e,children:e.children});a.storyName=f;a.args={children:"W3Schools",href:"https://www.w3schools.com/",disabled:!0};const o=e=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:Object.values(u).map(s=>l.createElement(t,{target:s,...e,key:s},s))});o.storyName=y;o.args={href:"https://www.lipsum.com/"};const i=e=>r.jsx(t,{...e,children:e.children});i.storyName=h;i.args={children:h,href:"https://www.lipsum.com/",size:g.h1,disabled:!1,leftIcon:r.jsx(m,{name:"IconBunkerOutlined16"}),rightIcon:r.jsx(m,{name:"IconBunkerOutlined16"})};const c=e=>r.jsx("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:Object.values(g).map(s=>l.createElement(t,{size:s,...e,key:s},s))});c.storyName=w;c.args={href:"https://www.lipsum.com/",disabled:!1};const p=e=>r.jsx(d,{width:"200px",children:r.jsx(t,{...e,children:e.children})});p.storyName=I;p.args={children:"W3Schools",href:"https://www.w3schools.com/",onClick:e=>{e.preventDefault(),alert("Обработка клика по ссылке")}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
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
