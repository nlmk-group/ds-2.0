import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{r as h}from"./index-DQ2WTIsS.js";import{g as t,i as x,s as f,a as s,v as R}from"./generateUUID-i9L7EtYg.js";import{a as z}from"./argsTypes-BQQ6-1_M.js";import"./clsx-B-dksMZM.js";import"./32-C4VDZHit.js";import"./index-DJXOh8UI.js";const X="_wrapper_5qmcm_1",k="_table_5qmcm_13",p={wrapper:X,table:k},y=[{id:t(),title:"First accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:t(),title:"2nd accordion item",content:"Lorem ipsum"},{id:t(),title:"Last accordion item",content:"Lorem ipsum"}],J=[{id:t(),title:"Vestibulum finibus tortor",content:"Lorem ipsum",initiallyExpanded:!0},{id:t(),title:"Sed vitae pretium elit",content:"Lorem ipsum"},{id:t(),title:"Donec aliquam ornare nunc",content:"Lorem ipsum"}],K=[{id:t(),title:"Vestibulum ante ipsum primis",content:"Lorem ipsum",initiallyExpanded:!0},{id:t(),title:"Proin vulputate ultrices ante",content:"Lorem ipsum"},{id:t(),title:"Curabitur imperdiet tempus felis",content:"Lorem ipsum"}],q=[{id:t(),title:"Maecenas in magna at nunc",content:"Lorem ipsum",initiallyExpanded:!0},{id:t(),title:"Praesent scelerisque maximus",content:"Lorem ipsum"},{id:t(),title:"Maecenas a sapien consectetur",content:"Lorem ipsum"}],g={startIcon:x.plus,size:f.xs},U=[{id:1,title:"First accordion item",initiallyExpanded:!0,content:e.jsx(s,{...g,items:[{id:1,title:"First accordion item",initiallyExpanded:!0,content:e.jsx(s,{...g,items:[{id:1,title:"First accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:2,title:"2nd accordion item",content:"Lorem ipsum"},{id:3,title:"Last accordion item",content:"Lorem ipsum"}]})}]})}],H=[{id:1,title:"First accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:2,title:"2nd accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:3,title:"Last accordion item",content:"Lorem ipsum",initiallyExpanded:!0}],V=r=>e.jsx("div",{style:{minHeight:80},children:r()}),ee={title:"Components/Accordion/Stories",component:s,decorators:[V],argTypes:z},u=[y,J,K,q],n=r=>e.jsx("div",{className:p.wrapper,children:e.jsx(s,{...r})});n.storyName="Аккордеон по умолчанию";n.args={items:y};const d=r=>e.jsx("div",{className:p.wrapper,children:Object.values(f).map((l,i)=>e.jsx(s,{...r,size:l,items:u[i]},i))});d.storyName="Варианты размеров аккордеона";const m=r=>e.jsx("div",{className:p.wrapper,children:Object.values(x).map((l,i)=>e.jsxs(h.Fragment,{children:[e.jsx(s,{...r,startIcon:l,items:u[i]}),e.jsx(s,{...r,startIcon:null,endIcon:l,items:u[i+2]})]},i))});m.storyName="Варианты аккордеона с иконками";const o=r=>e.jsx("div",{className:p.wrapper,children:e.jsx(s,{...r,variant:R.paper})});o.storyName="Paper аккордеон";o.args={items:y};const a=r=>e.jsx("div",{className:p.wrapper,children:e.jsx(s,{...r,startIcon:x.plus})});a.storyName="Аккордеон с мультивложенностью";a.args={items:U};const c=r=>e.jsx("div",{className:p.wrapper,children:e.jsx(s,{...r,multipleExpanded:!0})});c.storyName="Аккордеон с возможностью раскрытия нескольких секций";c.args={items:H};var A,E,I;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} />
    </div>;
}`,...(I=(E=n.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var v,O,_;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      {Object.values(sizesMapping).map((size, index) => <Accordion key={index} {...argTypes} size={size} items={mockArr[index]} />)}
    </div>;
}`,...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var N,j,L;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      {Object.values(iconsMapping).map((icon, index) => <Fragment key={index}>
          <Accordion {...argTypes} startIcon={icon} items={mockArr[index]} />
          <Accordion {...argTypes} startIcon={null} endIcon={icon} items={mockArr[index + 2]} />
        </Fragment>)}
    </div>;
}`,...(L=(j=m.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var M,T,S;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} variant={variantsMapping.paper} />
    </div>;
}`,...(S=(T=o.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var C,w,D;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} startIcon={iconsMapping.plus} />
    </div>;
}`,...(D=(w=a.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var P,F,b;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} multipleExpanded />
    </div>;
}`,...(b=(F=c.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};const re=["AccordionDefault","AccordionSizes","AccordionIcons","AccordionPaper","FoldedAccordion","MultiExpandedAccordion"];export{n as AccordionDefault,m as AccordionIcons,o as AccordionPaper,d as AccordionSizes,a as FoldedAccordion,c as MultiExpandedAccordion,re as __namedExportsOrder,ee as default};
