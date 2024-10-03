import{j as r}from"./jsx-runtime-DFnSfiB4.js";import{r as z}from"./index-DQ2WTIsS.js";import{ac as n,w as O,u as B}from"./index-BNUKZqmp.js";import"./generateUUID-vFnGh3I6.js";import"./index-CNoQ_QnE.js";import"./index-CSbymPMC.js";import{B as D}from"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import{I as l}from"./index-Cw4KJrZO.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-BvIp-sDO.js";import"./32-MLA202Yz.js";import{s as _}from"./styles.module-BSI8LUpZ.js";import{a as R}from"./argsTypes-C0s5fh6x.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-BKbm6zW0.js";const C="Link по умолчанию",K="Link с разными параметрами target",M="Link с разными размерами",W="Не активный Link",E="Link с иконками",A="Link с коллбеком",F=e=>r.jsx("div",{className:_.wrapper,children:e()}),le={title:"Components/Link/Stories",component:n,decorators:[F],argTypes:R},t=e=>r.jsx(D,{width:"200px",children:r.jsx(n,{...e,children:e.children})});t.storyName=C;t.args={children:"W3Schools & Power of knowledge",href:"https://www.w3schools.com/"};const a=e=>r.jsx(n,{...e,children:e.children});a.storyName=W;a.args={children:"W3Schools",href:"https://www.w3schools.com/",disabled:!0};const o=e=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:Object.values(O).map(s=>z.createElement(n,{target:s,...e,key:s},s))});o.storyName=K;o.args={href:"https://www.lipsum.com/"};const i=e=>r.jsx(n,{...e,children:e.children});i.storyName=E;i.args={children:E,href:"https://www.lipsum.com/",size:B.h1,disabled:!1,leftIcon:r.jsx(l,{name:"IconBunkerOutlined16"}),rightIcon:r.jsx(l,{name:"IconBunkerOutlined16"})};const c=e=>r.jsx("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:Object.values(B).map(s=>z.createElement(n,{size:s,...e,key:s},s))});c.storyName=M;c.args={href:"https://www.lipsum.com/",disabled:!1};const p=e=>r.jsx(D,{width:"200px",children:r.jsx(n,{...e,children:e.children})});p.storyName=A;p.args={children:"W3Schools",href:"https://www.w3schools.com/",onClick:e=>{e.preventDefault(),alert("Обработка клика по ссылке")}};var m,d,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Box width="200px">
      <Link {...argTypes} children={argTypes.children} />
    </Box>;
}`,...(h=(d=t.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var u,g,k;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...(k=(g=a.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var L,x,y;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
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
}`,...(j=(T=c.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var S,v,b;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Box width="200px">
      <Link {...argTypes} children={argTypes.children} />
    </Box>;
}`,...(b=(v=p.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const me=["DefaultLink","DisabledLink","LinkTargets","IconLink","LinkSizes","LinkCallback"];export{t as DefaultLink,a as DisabledLink,i as IconLink,p as LinkCallback,c as LinkSizes,o as LinkTargets,me as __namedExportsOrder,le as default};
