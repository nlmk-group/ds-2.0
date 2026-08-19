import{j as r,r as l}from"./iframe-CiFytELZ.js";import{B as d}from"./index-BCkmK5YD.js";import{I as m}from"./index-ageiqw5d.js";import{L as t,t as u,s as g}from"./index-BtEyOEDh.js";import{g as k}from"./styles.module-P9JyAdOG.js";import{a as L}from"./argsTypes-nAOuqtTC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BUE7duXK.js";import"./32-dCVSFMeK.js";import"./24-CEYPuBp0.js";import"./24-DMYK_POk.js";import"./24-Bt83Uokx.js";import"./24-Cg37IYki.js";import"./24-URZj1P3S.js";import"./24-C7n6mi1f.js";import"./24-B6ivgZpd.js";import"./24-RrFXbNlX.js";import"./24-DG7ZIblO.js";import"./16-DE4viI8O.js";import"./24-C2S-g5KW.js";import"./24-r-rrcgWc.js";import"./16-BfVH5IGj.js";import"./16-CdjU_4JV.js";import"./16-BT9sIG7U.js";import"./16-CqiQVPWz.js";import"./16-D7g-PMEy.js";import"./index-AScBX7ch.js";const x="Link по умолчанию",y="Link с разными параметрами target",w="Link с разными размерами",f="Не активный Link",h="Link с иконками",I="Link с коллбеком",N=e=>r.jsx("div",{className:k.wrapper,children:r.jsx(e,{})}),$={title:"Components/Link/Stories",component:t,decorators:[N],argTypes:L},n=e=>r.jsx(d,{width:"200px",children:r.jsx(t,{...e,children:e.children})});n.storyName=x;n.args={children:"W3Schools & Power of knowledge",href:"https://www.w3schools.com/"};const a=e=>r.jsx(t,{...e,children:e.children});a.storyName=f;a.args={children:"W3Schools",href:"https://www.w3schools.com/",disabled:!0};const o=e=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:Object.values(u).map(s=>l.createElement(t,{target:s,...e,key:s},s))});o.storyName=y;o.args={href:"https://www.lipsum.com/"};const i=e=>r.jsx(t,{...e,children:e.children});i.storyName=h;i.args={children:h,href:"https://www.lipsum.com/",size:g.h1,disabled:!1,leftIcon:r.jsx(m,{name:"IconBunkerOutlined16"}),rightIcon:r.jsx(m,{name:"IconBunkerOutlined16"})};const c=e=>r.jsx("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:Object.values(g).map(s=>l.createElement(t,{size:s,...e,key:s},s))});c.storyName=w;c.args={href:"https://www.lipsum.com/",disabled:!1};const p=e=>r.jsx(d,{width:"200px",children:r.jsx(t,{...e,children:e.children})});p.storyName=I;p.args={children:"W3Schools",href:"https://www.w3schools.com/",onClick:e=>{e.preventDefault(),alert("Обработка клика по ссылке")}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
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
