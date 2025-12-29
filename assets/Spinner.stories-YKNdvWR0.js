import{j as e}from"./iframe-CxLN9ksd.js";import{S as r,E as c}from"./index-Ck8f73vE.js";import{g as d}from"./styles.module-BGEDXogi.js";import{a as l}from"./argsTypes-C-YaHaq-.js";import{I as m}from"./24-CJ9IDGZV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CORENSTS.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";const S="Spinner-stories-module__wrapper___omDsz",u={wrapper:S},x=n=>e.jsx("div",{className:u.wrapper,children:e.jsx(n,{})}),I={title:"Components/Spinner/Stories",component:r,decorators:[x],argTypes:l},s=n=>e.jsx("div",{children:e.jsx(r,{...n})});s.storyName="Spinner по умолчанию";const i=n=>e.jsx("div",{children:e.jsx(r,{size:"m"})});i.storyName="Spinner размера medium";const o=n=>e.jsx("div",{children:e.jsx(r,{bgColor:"#ff6e40",color:"#1e3d59"})});o.storyName="Spinner с разными цветами";const t=n=>e.jsx("div",{children:e.jsx(r,{children:e.jsx(m,{htmlColor:"var(--brand-sapphire-60)"})})});t.storyName="Spinner где Icon, как children (JSX.Element)";const a=n=>e.jsxs("div",{className:d.row,style:{display:"flex",gap:20},children:[e.jsx(r,{size:c.xxl,percent:96}),e.jsx(r,{size:c.xl,percent:56}),e.jsx(r,{size:c.l,percent:40}),e.jsx(r,{size:c.m,percent:32})]});a.storyName="Spinner c процентом";const p=n=>e.jsx("div",{style:{display:"flex",alignItems:"stretch",justifyContent:"center",width:"300px",backgroundColor:"#fff",border:"1px solid var(--unique-divider)"},children:e.jsx(r,{...n})});p.storyName="Spinner в растянутом контейнере";s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div>
      <Spinner {...args} />
    </div>;
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div>
      <Spinner size="m" />
    </div>;
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div>
      <Spinner bgColor="#ff6e40" color="#1e3d59" />
    </div>;
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div>
      <Spinner>
        <IconAutoRenewReloadOutlined24 htmlColor="var(--brand-sapphire-60)" />
      </Spinner>
    </div>;
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
  return <div className={styles.row} style={{
    display: 'flex',
    gap: 20
  }}>
      <Spinner size={ESizesSpinner.xxl} percent={96} />
      <Spinner size={ESizesSpinner.xl} percent={56} />
      <Spinner size={ESizesSpinner.l} percent={40} />
      <Spinner size={ESizesSpinner.m} percent={32} />
    </div>;
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: ISpinnerProps): JSX.Element => {
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
}`,...p.parameters?.docs?.source}}};const w=["SpinnerDefault","SpinnerMSize","SpinnerChangeColor","SpinnerWithIcon","SpinnerWithPercent","SpinnerStretchedContainer"];export{o as SpinnerChangeColor,s as SpinnerDefault,i as SpinnerMSize,p as SpinnerStretchedContainer,t as SpinnerWithIcon,a as SpinnerWithPercent,w as __namedExportsOrder,I as default};
