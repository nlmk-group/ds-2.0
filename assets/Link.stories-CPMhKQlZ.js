import{j as r}from"./jsx-runtime-2xDJh5tt.js";import{a3 as o,n as b,m as S}from"./index-CnL2Y1yT.js";import"./generateUUID-BVRVPcdt.js";import"./index-jIJAWU0x.js";import"./index-B8bUpJH3.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import"./index-CkVMA9Py.js";import{I as c}from"./index-BxqmQ_Es.js";import"./index-Cs1erf_V.js";import"./index-DFf4wlr3.js";import"./index-lhFT6koy.js";import"./index-fHOzSRtI.js";import"./32-CH6kctYz.js";import"./index-CBqU2yxZ.js";import{s as z}from"./styles.module-DeLvTIFi.js";import{a as D}from"./argsTypes-Bt-5a-8J.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-prZMZXcd.js";const O="Link по умолчанию",_="Link с разными параметрами target",j="Link с разными размерами",M="Не активный Link",v="Link с иконками",R=e=>r("div",{className:z.wrapper,children:e()}),te={title:"Components/Link/Stories",component:o,decorators:[R],argTypes:D},s=e=>r(o,{...e,children:e.children});s.storyName=O;s.args={children:"W3Schools",href:"https://www.w3schools.com/"};const n=e=>r(o,{...e,children:e.children});n.storyName=M;n.args={children:"W3Schools",href:"https://www.w3schools.com/",disabled:!0};const t=e=>r("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:Object.values(b).map(p=>r(o,{target:p,...e,children:p}))});t.storyName=_;t.args={href:"https://www.lipsum.com/"};const a=e=>r(o,{...e,children:e.children});a.storyName=v;a.args={children:v,href:"https://www.lipsum.com/",size:S.h1,disabled:!1,leftIcon:r(c,{name:"IconBunkerOutlined16"}),rightIcon:r(c,{name:"IconBunkerOutlined16"})};const i=e=>r("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:Object.values(S).map(p=>r(o,{size:p,...e,children:p}))});i.storyName=j;i.args={href:"https://www.lipsum.com/",disabled:!1};var m,l,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,u,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var L,k,y;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {Object.values(targetMapping).map((target: targetMapping) => <Link target={target} {...argTypes}>
          {target}
        </Link>)}
    </div>;
}`,...(y=(k=t.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var I,f,w;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...(w=(f=a.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var N,T,x;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      {Object.values(sizeMapping).map((size: sizeMapping) => <Link size={size} {...argTypes}>
          {size}
        </Link>)}
    </div>;
}`,...(x=(T=i.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const ae=["DefaultLink","DisabledLink","LinkTargets","IconLink","LinkSizes"];export{s as DefaultLink,n as DisabledLink,a as IconLink,i as LinkSizes,t as LinkTargets,ae as __namedExportsOrder,te as default};
