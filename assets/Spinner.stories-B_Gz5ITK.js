import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{ao as e,N as a}from"./index-kyLNX40n.js";import"./generateUUID-DAuIdu-p.js";import"./index-B0lWqv5F.js";import"./index-DPg--y1u.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-BVI3RfDi.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BXzk8UvY.js";import{z as C}from"./32-CMOOVZNy.js";import"./index-Bnop-kX6.js";import{g as I}from"./styles.module-CfbNvgm1.js";import{a as N}from"./argsTypes-gOLB_-FG.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-CT8gBKwQ.js";const _="_wrapper_13k5q_1",w={wrapper:_},P="Spinner состояние по умолчанию",T="Spinner размера medium",X="Spinner с разными цветами",O="Spinner где Icon, как children (JSX.Element)",R="Spinner c процентом",J=n=>r.jsx("div",{className:w.wrapper,children:r.jsx(n,{})}),er={title:"Components/Spinner/Stories",component:e,decorators:[J],argTypes:N},s=n=>r.jsx("div",{children:r.jsx(e,{...n})});s.storyName=P;const o=n=>r.jsx("div",{children:r.jsx(e,{size:"m"})});o.storyName=T;const i=n=>r.jsx("div",{children:r.jsx(e,{bgColor:"#ff6e40",color:"#1e3d59"})});i.storyName=X;const t=n=>r.jsx("div",{children:r.jsx(e,{children:r.jsx(C,{htmlColor:"var(--ac-loader-stroke-progress)"})})});t.storyName=O;const p=n=>r.jsxs("div",{className:I.row,style:{display:"flex",gap:20},children:[r.jsx(e,{size:a.xxl,percent:96}),r.jsx(e,{size:a.xl,percent:56}),r.jsx(e,{size:a.l,percent:40}),r.jsx(e,{size:a.m,percent:32})]});p.storyName=R;var c,m,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div>
      <Spinner {...args} />
    </div>;
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var S,d,u;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div>
      <Spinner size="m" />
    </div>;
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var x,g,E;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div>
      <Spinner bgColor="#ff6e40" color="#1e3d59" />
    </div>;
}`,...(E=(g=i.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var j,v,z;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div>
      <Spinner>
        <IconAutoRenewReloadOutlined24 htmlColor="var(--ac-loader-stroke-progress)" />
      </Spinner>
    </div>;
}`,...(z=(v=t.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var h,f,y;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div className={styles.row} style={{
    display: 'flex',
    gap: 20
  }}>
      <Spinner size={ESizesSpinner.xxl} percent={96} />
      <Spinner size={ESizesSpinner.xl} percent={56} />
      <Spinner size={ESizesSpinner.l} percent={40} />
      <Spinner size={ESizesSpinner.m} percent={32} />
    </div>;
}`,...(y=(f=p.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const nr=["SpinnerDefault","SpinnerMSize","SpinnerChangeColor","SpinnerWithIcon","SpinnerWithPercent"];export{i as SpinnerChangeColor,s as SpinnerDefault,o as SpinnerMSize,t as SpinnerWithIcon,p as SpinnerWithPercent,nr as __namedExportsOrder,er as default};
