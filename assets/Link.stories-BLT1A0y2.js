import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{r as z}from"./index-Bnop-kX6.js";import{ak as n,G as O,z as B}from"./index-N7PQoZjI.js";import"./generateUUID-Dz4mOyMt.js";import"./index-BuHkNwZq.js";import"./index-CiiUx5gY.js";import{B as D}from"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import{I as l}from"./index-Dxx-yGvP.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-CG5Hm5ah.js";import"./32-QiGXh8Io.js";import{g as _}from"./styles.module-ox-emdf8.js";import{a as R}from"./argsTypes-CzRr16jz.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-CT8gBKwQ.js";const C="Link по умолчанию",K="Link с разными параметрами target",M="Link с разными размерами",W="Не активный Link",E="Link с иконками",A="Link с коллбеком",G=e=>r.jsx("div",{className:_.wrapper,children:r.jsx(e,{})}),ce={title:"Components/Link/Stories",component:n,decorators:[G],argTypes:R},a=e=>r.jsx(D,{width:"200px",children:r.jsx(n,{...e,children:e.children})});a.storyName=C;a.args={children:"W3Schools & Power of knowledge",href:"https://www.w3schools.com/"};const t=e=>r.jsx(n,{...e,children:e.children});t.storyName=W;t.args={children:"W3Schools",href:"https://www.w3schools.com/",disabled:!0};const o=e=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:Object.values(O).map(s=>z.createElement(n,{target:s,...e,key:s},s))});o.storyName=K;o.args={href:"https://www.lipsum.com/"};const i=e=>r.jsx(n,{...e,children:e.children});i.storyName=E;i.args={children:E,href:"https://www.lipsum.com/",size:B.h1,disabled:!1,leftIcon:r.jsx(l,{name:"IconBunkerOutlined16"}),rightIcon:r.jsx(l,{name:"IconBunkerOutlined16"})};const c=e=>r.jsx("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:Object.values(B).map(s=>z.createElement(n,{size:s,...e,key:s},s))});c.storyName=M;c.args={href:"https://www.lipsum.com/",disabled:!1};const p=e=>r.jsx(D,{width:"200px",children:r.jsx(n,{...e,children:e.children})});p.storyName=A;p.args={children:"W3Schools",href:"https://www.w3schools.com/",onClick:e=>{e.preventDefault(),alert("Обработка клика по ссылке")}};var m,d,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Box width="200px">
      <Link {...argTypes} children={argTypes.children} />
    </Box>;
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var h,u,k;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...(k=(u=t.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var L,x,y;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
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
}`,...(v=(b=p.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const pe=["DefaultLink","DisabledLink","LinkTargets","IconLink","LinkSizes","LinkCallback"];export{a as DefaultLink,t as DisabledLink,i as IconLink,p as LinkCallback,c as LinkSizes,o as LinkTargets,pe as __namedExportsOrder,ce as default};
