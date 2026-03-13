import{j as r,r as m}from"./iframe-CbS8bInr.js";import{L as t,t as u,s as d}from"./index-CD4Ms4Kk.js";import{B as g}from"./index-B6Qf8jdS.js";import{I as l}from"./index-CA2hv6TN.js";import{g as k}from"./styles.module-BGEDXogi.js";import{a as L}from"./argsTypes-jpBwwt2Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-YseVeHvS.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BZ5ZA3rE.js";import"./24-CiyiO54M.js";import"./24-Di0nu-by.js";import"./24-Sa4UUf3z.js";import"./24-CC9V7_4j.js";import"./24-BfjqGgZ9.js";import"./24-CqnhtF5T.js";import"./24-BWksqsvG.js";import"./24-mlG8Xvhb.js";import"./24-B8ZOnMJQ.js";import"./16-aZBE51Hh.js";import"./24-BGnREA9p.js";import"./24-C_iNukEM.js";import"./16-BMdnWzuc.js";import"./16-CGq2ocz6.js";import"./16-B5g6d240.js";const x="Link по умолчанию",y="Link с разными параметрами target",w="Link с разными размерами",f="Не активный Link",h="Link с иконками",I="Link с коллбеком",N=e=>r.jsx("div",{className:k.wrapper,children:r.jsx(e,{})}),V={title:"Components/Link/Stories",component:t,decorators:[N],argTypes:L},n=e=>r.jsx(g,{width:"200px",children:r.jsx(t,{...e,children:e.children})});n.storyName=x;n.args={children:"W3Schools & Power of knowledge",href:"https://www.w3schools.com/"};const a=e=>r.jsx(t,{...e,children:e.children});a.storyName=f;a.args={children:"W3Schools",href:"https://www.w3schools.com/",disabled:!0};const o=e=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:Object.values(u).map(s=>m.createElement(t,{target:s,...e,key:s},s))});o.storyName=y;o.args={href:"https://www.lipsum.com/"};const i=e=>r.jsx(t,{...e,children:e.children});i.storyName=h;i.args={children:h,href:"https://www.lipsum.com/",size:d.h1,disabled:!1,leftIcon:r.jsx(l,{name:"IconBunkerOutlined16"}),rightIcon:r.jsx(l,{name:"IconBunkerOutlined16"})};const c=e=>r.jsx("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:Object.values(d).map(s=>m.createElement(t,{size:s,...e,key:s},s))});c.storyName=w;c.args={href:"https://www.lipsum.com/",disabled:!1};const p=e=>r.jsx(g,{width:"200px",children:r.jsx(t,{...e,children:e.children})});p.storyName=I;p.args={children:"W3Schools",href:"https://www.w3schools.com/",onClick:e=>{e.preventDefault(),alert("Обработка клика по ссылке")}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
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
}`,...p.parameters?.docs?.source}}};const X=["DefaultLink","DisabledLink","LinkTargets","IconLink","LinkSizes","LinkCallback"];export{n as DefaultLink,a as DisabledLink,i as IconLink,p as LinkCallback,c as LinkSizes,o as LinkTargets,X as __namedExportsOrder,V as default};
