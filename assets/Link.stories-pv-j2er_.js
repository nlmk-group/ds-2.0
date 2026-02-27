import{j as r,r as m}from"./iframe-DXeeMUlS.js";import{L as t,t as u,s as d}from"./index-CpO2fZ6u.js";import{B as g}from"./index-BMRC5SOo.js";import{I as l}from"./index-IY4AFwls.js";import{g as k}from"./styles.module-BGEDXogi.js";import{a as L}from"./argsTypes-Sr_Y1PVV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BHI3eI3g.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-CGcqymZX.js";import"./24-DzDWDUmy.js";import"./24-DpK5eddQ.js";import"./24-CBLD6MwG.js";import"./24-BtzwVLrk.js";import"./24-BXEslVYf.js";import"./24-BO1wVPpM.js";import"./24-Bdd9D4Ti.js";import"./24-BEN_WnoL.js";import"./24-CHgX55v6.js";import"./16-eB7nAebF.js";import"./24-yThwR12y.js";import"./24-CsKtuqYo.js";import"./16-DPaGmQaD.js";import"./16-9aNWehyQ.js";import"./16-C_DfNdCf.js";const x="Link по умолчанию",y="Link с разными параметрами target",w="Link с разными размерами",f="Не активный Link",h="Link с иконками",I="Link с коллбеком",N=e=>r.jsx("div",{className:k.wrapper,children:r.jsx(e,{})}),V={title:"Components/Link/Stories",component:t,decorators:[N],argTypes:L},n=e=>r.jsx(g,{width:"200px",children:r.jsx(t,{...e,children:e.children})});n.storyName=x;n.args={children:"W3Schools & Power of knowledge",href:"https://www.w3schools.com/"};const a=e=>r.jsx(t,{...e,children:e.children});a.storyName=f;a.args={children:"W3Schools",href:"https://www.w3schools.com/",disabled:!0};const o=e=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:Object.values(u).map(s=>m.createElement(t,{target:s,...e,key:s},s))});o.storyName=y;o.args={href:"https://www.lipsum.com/"};const i=e=>r.jsx(t,{...e,children:e.children});i.storyName=h;i.args={children:h,href:"https://www.lipsum.com/",size:d.h1,disabled:!1,leftIcon:r.jsx(l,{name:"IconBunkerOutlined16"}),rightIcon:r.jsx(l,{name:"IconBunkerOutlined16"})};const c=e=>r.jsx("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:Object.values(d).map(s=>m.createElement(t,{size:s,...e,key:s},s))});c.storyName=w;c.args={href:"https://www.lipsum.com/",disabled:!1};const p=e=>r.jsx(g,{width:"200px",children:r.jsx(t,{...e,children:e.children})});p.storyName=I;p.args={children:"W3Schools",href:"https://www.w3schools.com/",onClick:e=>{e.preventDefault(),alert("Обработка клика по ссылке")}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
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
