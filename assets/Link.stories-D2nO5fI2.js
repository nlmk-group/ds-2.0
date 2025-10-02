import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{r as z}from"./index-BcJSXhQi.js";import{aw as n,L as O,M as B}from"./TreeList-c_Bstqqa.js";import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-WHoiTdKD.js";import{B as D}from"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import{I as l}from"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import"./32-CkUgnIrf.js";import{g as _}from"./styles.module-m0Zsy3Hi.js";import{a as R}from"./argsTypes-Dt-l0DYr.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const C="Link по умолчанию",K="Link с разными параметрами target",M="Link с разными размерами",W="Не активный Link",E="Link с иконками",A="Link с коллбеком",F=e=>r.jsx("div",{className:_.wrapper,children:r.jsx(e,{})}),de={title:"Components/Link/Stories",component:n,decorators:[F],argTypes:R},t=e=>r.jsx(D,{width:"200px",children:r.jsx(n,{...e,children:e.children})});t.storyName=C;t.args={children:"W3Schools & Power of knowledge",href:"https://www.w3schools.com/"};const a=e=>r.jsx(n,{...e,children:e.children});a.storyName=W;a.args={children:"W3Schools",href:"https://www.w3schools.com/",disabled:!0};const o=e=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:Object.values(O).map(s=>z.createElement(n,{target:s,...e,key:s},s))});o.storyName=K;o.args={href:"https://www.lipsum.com/"};const i=e=>r.jsx(n,{...e,children:e.children});i.storyName=E;i.args={children:E,href:"https://www.lipsum.com/",size:B.h1,disabled:!1,leftIcon:r.jsx(l,{name:"IconBunkerOutlined16"}),rightIcon:r.jsx(l,{name:"IconBunkerOutlined16"})};const c=e=>r.jsx("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:Object.values(B).map(s=>z.createElement(n,{size:s,...e,key:s},s))});c.storyName=M;c.args={href:"https://www.lipsum.com/",disabled:!1};const p=e=>r.jsx(D,{width:"200px",children:r.jsx(n,{...e,children:e.children})});p.storyName=A;p.args={children:"W3Schools",href:"https://www.w3schools.com/",onClick:e=>{e.preventDefault(),alert("Обработка клика по ссылке")}};var m,d,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Box width="200px">
      <Link {...argTypes} children={argTypes.children} />
    </Box>;
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var h,u,k;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...(k=(u=a.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var L,x,y;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {Object.values(targetMapping).map((target: targetMapping) => <Link target={target} {...argTypes} key={target}>
          {target}
        </Link>)}
    </div>;
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var w,f,I;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...(I=(f=i.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var N,T,j;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      {Object.values(sizeMapping).map((size: sizeMapping) => <Link size={size} {...argTypes} key={size}>
          {size}
        </Link>)}
    </div>;
}`,...(j=(T=c.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var S,b,v;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Box width="200px">
      <Link {...argTypes} children={argTypes.children} />
    </Box>;
}`,...(v=(b=p.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const ge=["DefaultLink","DisabledLink","LinkTargets","IconLink","LinkSizes","LinkCallback"];export{t as DefaultLink,a as DisabledLink,i as IconLink,p as LinkCallback,c as LinkSizes,o as LinkTargets,ge as __namedExportsOrder,de as default};
