import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{aN as e,a1 as c}from"./TreeList-CN2Fuc3O.js";import"./generateUUID-306HU3fz.js";import"./index-CeXAN7vm.js";import"./index-Dd1OPmdN.js";import"./index-vbXA6nr0.js";import"./index-PY2fm1mi.js";import"./index-DmffzHLE.js";import"./index-C431fSij.js";import"./index-VmJK6twV.js";import"./index-BPWT-JIL.js";import"./index-BAYgGaKw.js";import"./index-C1EIKtiR.js";import"./index-BcJSXhQi.js";import{F as b}from"./32-DmJYGC0n.js";import{g as P}from"./styles.module-m0Zsy3Hi.js";import{a as J}from"./argsTypes-DknZkjhd.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const X="_wrapper_179d9_1",_={wrapper:X},R=n=>r.jsx("div",{className:_.wrapper,children:r.jsx(n,{})}),or={title:"Components/Spinner/Stories",component:e,decorators:[R],argTypes:J},s=n=>r.jsx("div",{children:r.jsx(e,{...n})});s.storyName="Spinner по умолчанию";const o=n=>r.jsx("div",{children:r.jsx(e,{size:"m"})});o.storyName="Spinner размера medium";const i=n=>r.jsx("div",{children:r.jsx(e,{bgColor:"#ff6e40",color:"#1e3d59"})});i.storyName="Spinner с разными цветами";const t=n=>r.jsx("div",{children:r.jsx(e,{children:r.jsx(b,{htmlColor:"var(--ac-loader-stroke-progress)"})})});t.storyName="Spinner где Icon, как children (JSX.Element)";const p=n=>r.jsxs("div",{className:P.row,style:{display:"flex",gap:20},children:[r.jsx(e,{size:c.xxl,percent:96}),r.jsx(e,{size:c.xl,percent:56}),r.jsx(e,{size:c.l,percent:40}),r.jsx(e,{size:c.m,percent:32})]});p.storyName="Spinner c процентом";const a=n=>r.jsx("div",{style:{display:"flex",alignItems:"stretch",justifyContent:"center",width:"300px",backgroundColor:"#fff",border:"1px solid var(--ac-border-primary)"},children:r.jsx(e,{...n})});a.storyName="Spinner в растянутом контейнере";var m,d,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div>
      <Spinner {...args} />
    </div>;
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var S,u,x;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div>
      <Spinner size="m" />
    </div>;
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,f,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div>
      <Spinner bgColor="#ff6e40" color="#1e3d59" />
    </div>;
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,y,j;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div>
      <Spinner>
        <IconAutoRenewReloadOutlined24 htmlColor="var(--ac-loader-stroke-progress)" />
      </Spinner>
    </div>;
}`,...(j=(y=t.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var z,C,E;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
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
    border: '1px solid var(--ac-border-primary)'
  }}>
      <Spinner {...args} />
    </div>;
}`,...(N=(w=a.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};const ir=["SpinnerDefault","SpinnerMSize","SpinnerChangeColor","SpinnerWithIcon","SpinnerWithPercent","SpinnerStretchedContainer"];export{i as SpinnerChangeColor,s as SpinnerDefault,o as SpinnerMSize,a as SpinnerStretchedContainer,t as SpinnerWithIcon,p as SpinnerWithPercent,ir as __namedExportsOrder,or as default};
