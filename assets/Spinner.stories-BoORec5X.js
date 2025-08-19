import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{aN as e,a1 as c}from"./TreeList-BgLkmMSk.js";import"./generateUUID-B0loqD05.js";import"./index-B_7MXUVi.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-CqWNtYbo.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-CBc2nLPm.js";import"./index-C5rKoyII.js";import"./index-BcJSXhQi.js";import{F as b}from"./32-BRZfqcB0.js";import{g as P}from"./styles.module-m0Zsy3Hi.js";import{a as J}from"./argsTypes-ClzfZ7n-.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const X="_wrapper_179d9_1",_={wrapper:X},R=n=>r.jsx("div",{className:_.wrapper,children:r.jsx(n,{})}),ir={title:"Components/Spinner/Stories",component:e,decorators:[R],argTypes:J},s=n=>r.jsx("div",{children:r.jsx(e,{...n})});s.storyName="Spinner по умолчанию";const i=n=>r.jsx("div",{children:r.jsx(e,{size:"m"})});i.storyName="Spinner размера medium";const t=n=>r.jsx("div",{children:r.jsx(e,{bgColor:"#ff6e40",color:"#1e3d59"})});t.storyName="Spinner с разными цветами";const o=n=>r.jsx("div",{children:r.jsx(e,{children:r.jsx(b,{htmlColor:"var(--brand-sapphire-60)"})})});o.storyName="Spinner где Icon, как children (JSX.Element)";const p=n=>r.jsxs("div",{className:P.row,style:{display:"flex",gap:20},children:[r.jsx(e,{size:c.xxl,percent:96}),r.jsx(e,{size:c.xl,percent:56}),r.jsx(e,{size:c.l,percent:40}),r.jsx(e,{size:c.m,percent:32})]});p.storyName="Spinner c процентом";const a=n=>r.jsx("div",{style:{display:"flex",alignItems:"stretch",justifyContent:"center",width:"300px",backgroundColor:"#fff",border:"1px solid var(--unique-divider)"},children:r.jsx(e,{...n})});a.storyName="Spinner в растянутом контейнере";var m,d,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div>
      <Spinner {...args} />
    </div>;
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var S,u,x;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div>
      <Spinner size="m" />
    </div>;
}`,...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,h,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div>
      <Spinner bgColor="#ff6e40" color="#1e3d59" />
    </div>;
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,j,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div>
      <Spinner>
        <IconAutoRenewReloadOutlined24 htmlColor="var(--brand-sapphire-60)" />
      </Spinner>
    </div>;
}`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var z,C,E;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div className={styles.row} style={{
    display: 'flex',
    gap: 20
  }}>
      <Spinner size={ESizesSpinner.xxl} percent={96} />
      <Spinner size={ESizesSpinner.xl} percent={56} />
      <Spinner size={ESizesSpinner.l} percent={40} />
      <Spinner size={ESizesSpinner.m} percent={32} />
    </div>;
}`,...(E=(C=p.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var I,w,N;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div style={{
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '300px',
    backgroundColor: '#fff',
    border: '1px solid var(--unique-divider)'
  }}>
      <Spinner {...args} />
    </div>;
}`,...(N=(w=a.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};const tr=["SpinnerDefault","SpinnerMSize","SpinnerChangeColor","SpinnerWithIcon","SpinnerWithPercent","SpinnerStretchedContainer"];export{t as SpinnerChangeColor,s as SpinnerDefault,i as SpinnerMSize,a as SpinnerStretchedContainer,o as SpinnerWithIcon,p as SpinnerWithPercent,tr as __namedExportsOrder,ir as default};
