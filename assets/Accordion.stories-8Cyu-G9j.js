import{j as e,r as g}from"./iframe-zk5xXBtA.js";import{A as s,E,a as A,c as I,b as v}from"./argsTypes-DmfnC3pZ.js";import{g as t}from"./generateUUID-M57HTP56.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-9BCGLlQQ.js";import"./16-D0071456.js";import"./IconsDirectory.module-CEwWgW3i.js";const O="Accordion-module__wrapper___pVELg",d={wrapper:O},x=[{id:t(),title:"First accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:t(),title:"2nd accordion item",content:"Lorem ipsum"},{id:t(),title:"Last accordion item",content:"Lorem ipsum"}],N=[{id:t(),title:"Vestibulum finibus tortor",content:"Lorem ipsum",initiallyExpanded:!0},{id:t(),title:"Sed vitae pretium elit",content:"Lorem ipsum"},{id:t(),title:"Donec aliquam ornare nunc",content:"Lorem ipsum"}],_=[{id:t(),title:"Vestibulum ante ipsum primis",content:"Lorem ipsum",initiallyExpanded:!0},{id:t(),title:"Proin vulputate ultrices ante",content:"Lorem ipsum"},{id:t(),title:"Curabitur imperdiet tempus felis",content:"Lorem ipsum"}],j=[{id:t(),title:"Maecenas in magna at nunc",content:"Lorem ipsum",initiallyExpanded:!0},{id:t(),title:"Praesent scelerisque maximus",content:"Lorem ipsum"},{id:t(),title:"Maecenas a sapien consectetur",content:"Lorem ipsum"}],y={startIcon:A.plus,size:E.xs},L=[{id:1,title:"First accordion item",initiallyExpanded:!0,content:e.jsx(s,{...y,items:[{id:1,title:"First accordion item",initiallyExpanded:!0,content:e.jsx(s,{...y,items:[{id:1,title:"First accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:2,title:"2nd accordion item",content:"Lorem ipsum"},{id:3,title:"Last accordion item",content:"Lorem ipsum"}]})}]})}],S=[{id:1,title:"First accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:2,title:"2nd accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:3,title:"Last accordion item",content:"Lorem ipsum",initiallyExpanded:!0}],T=r=>e.jsx("div",{style:{minHeight:80},children:e.jsx(r,{})}),f={title:"Components/Accordion/Stories",component:s,decorators:[T],argTypes:I},u=[x,N,_,j],o=r=>e.jsx("div",{className:d.wrapper,children:e.jsx(s,{...r})});o.storyName="Аккордеон по умолчанию";o.args={items:x};const m=r=>e.jsx("div",{className:d.wrapper,children:Object.values(E).map((l,i)=>e.jsx(s,{...r,size:l,items:u[i]},i))});m.storyName="Варианты размеров аккордеона";const p=r=>e.jsx("div",{className:d.wrapper,children:Object.values(A).map((l,i)=>e.jsxs(g.Fragment,{children:[e.jsx(s,{...r,startIcon:l,items:u[i]}),e.jsx(s,{...r,endIcon:l,items:u[i+2]})]},i))});p.storyName="Варианты аккордеона с иконками";const n=r=>e.jsx("div",{className:d.wrapper,children:e.jsx(s,{...r,variant:v.paper})});n.storyName="Paper аккордеон";n.args={items:x};const c=r=>e.jsx("div",{className:d.wrapper,children:e.jsx(s,{...r,startIcon:A.plus})});c.storyName="Аккордеон с мультивложенностью";c.args={items:L};const a=r=>e.jsx("div",{className:d.wrapper,children:e.jsx(s,{...r,multipleExpanded:!0})});a.storyName="Аккордеон с возможностью раскрытия нескольких секций";a.args={items:S};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} />
    </div>;
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      {Object.values(ESizesAccordion).map((size, index) => <Accordion key={index} {...argTypes} size={size} items={mockArr[index]} />)}
    </div>;
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      {Object.values(EIconsAccordion).map((icon, index) => <Fragment key={index}>
          <Accordion {...argTypes} startIcon={icon} items={mockArr[index]} />
          <Accordion {...argTypes} endIcon={icon} items={mockArr[index + 2]} />
        </Fragment>)}
    </div>;
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} variant={EVariantsAccordion.paper} />
    </div>;
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} startIcon={EIconsAccordion.plus} />
    </div>;
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} multipleExpanded />
    </div>;
}`,...a.parameters?.docs?.source}}};const R=["AccordionDefault","AccordionSizes","AccordionIcons","AccordionPaper","FoldedAccordion","MultiExpandedAccordion"];export{o as AccordionDefault,p as AccordionIcons,n as AccordionPaper,m as AccordionSizes,c as FoldedAccordion,a as MultiExpandedAccordion,R as __namedExportsOrder,f as default};
