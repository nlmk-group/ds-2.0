import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{r as O}from"./index-Bnop-kX6.js";import{aw as n,O as E,N as z}from"./TreeList-DRh8CIov.js";import"./generateUUID-Z4ktHL_f.js";import"./index-CkAXh9uP.js";import"./index-DppSdhCO.js";import{B}from"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import{I as l}from"./index-CvRFF9aG.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-D_lYSbi8.js";import"./index-DokmLR-l.js";import"./32-DmPReyKt.js";import{g as _}from"./styles.module-ox-emdf8.js";import{a as R}from"./argsTypes-JA3ex1Bs.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";const C="Link по умолчанию",K="Link с разными параметрами target",M="Link с разными размерами",W="Не активный Link",D="Link с иконками",A="Link с коллбеком",F=e=>r.jsx("div",{className:_.wrapper,children:r.jsx(e,{})}),le={title:"Components/Link/Stories",component:n,decorators:[F],argTypes:R},t=e=>r.jsx(B,{width:"200px",children:r.jsx(n,{...e,children:e.children})});t.storyName=C;t.args={children:"W3Schools & Power of knowledge",href:"https://www.w3schools.com/"};const a=e=>r.jsx(n,{...e,children:e.children});a.storyName=W;a.args={children:"W3Schools",href:"https://www.w3schools.com/",disabled:!0};const o=e=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:Object.values(E).map(s=>O.createElement(n,{target:s,...e,key:s},s))});o.storyName=K;o.args={href:"https://www.lipsum.com/"};const i=e=>r.jsx(n,{...e,children:e.children});i.storyName=D;i.args={children:D,href:"https://www.lipsum.com/",size:z.h1,disabled:!1,leftIcon:r.jsx(l,{name:"IconBunkerOutlined16"}),rightIcon:r.jsx(l,{name:"IconBunkerOutlined16"})};const c=e=>r.jsx("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:Object.values(z).map(s=>O.createElement(n,{size:s,...e,key:s},s))});c.storyName=M;c.args={href:"https://www.lipsum.com/",disabled:!1};const p=e=>r.jsx(B,{width:"200px",children:r.jsx(n,{...e,children:e.children})});p.storyName=A;p.args={children:"W3Schools",href:"https://www.w3schools.com/",onClick:e=>{e.preventDefault(),alert("Обработка клика по ссылке")}};var m,d,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
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
}`,...(v=(b=p.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const me=["DefaultLink","DisabledLink","LinkTargets","IconLink","LinkSizes","LinkCallback"];export{t as DefaultLink,a as DisabledLink,i as IconLink,p as LinkCallback,c as LinkSizes,o as LinkTargets,me as __namedExportsOrder,le as default};
