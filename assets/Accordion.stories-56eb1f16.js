import{j as r,a as u,F as b}from"./clsx.m-3764cf42.js";import{i as y,s as z,A as s,v as f}from"./index-a4c35820.js";import{a as j}from"./argsTypes-87b49d50.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-ed56af28.js";import"./IconsList.module-e4fe8555.js";import"./IconArticle24-414bfa4c.js";import"./IconPanTool24-f1398bf1.js";import"./index-fb030d50.js";const X="_wrapper_1tr2v_1",J="_table_1tr2v_12",p={wrapper:X,table:J},l=[{id:1,title:"First accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:2,title:"2nd accordion item",content:"Lorem ipsum"},{id:3,title:"Last accordion item",content:"Lorem ipsum"}],g={startIcon:y.plus,size:z.xs},k=[{id:1,title:"First accordion item",initiallyExpanded:!0,content:r(s,{...g,items:[{id:1,title:"First accordion item",initiallyExpanded:!0,content:r(s,{...g,items:[{id:1,title:"First accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:2,title:"2nd accordion item",content:"Lorem ipsum"},{id:3,title:"Last accordion item",content:"Lorem ipsum"}]})}]})}],K=[{id:1,title:"First accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:2,title:"2nd accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:3,title:"Last accordion item",content:"Lorem ipsum",initiallyExpanded:!0}],R=e=>r("div",{style:{minHeight:80},children:e()}),$={title:"Components/Accordion/Stories",component:s,decorators:[R],argTypes:j},t=e=>r("div",{className:p.wrapper,children:r(s,{...e})});t.storyName="Аккордеон по умолчанию";t.args={items:l};const o=e=>u("div",{className:p.wrapper,children:[Object.values(z).map((d,m)=>r(s,{...e,size:d},m)),";"]});o.storyName="Варианты размеров аккордеона";o.args={items:l};const a=e=>u("div",{className:p.wrapper,children:[Object.values(y).map((d,m)=>u(b,{children:[r(s,{...e,startIcon:d},m),r(s,{...e,startIcon:null,endIcon:d},m)]})),";"]});a.storyName="Варианты аккордеона с иконками";a.args={items:l};const i=e=>r("div",{className:p.wrapper,children:r(s,{...e,variant:f.paper})});i.storyName="Paper аккордеон";i.args={items:l};const n=e=>r("div",{className:p.wrapper,children:r(s,{...e,startIcon:y.plus})});n.storyName="Аккордеон с мультивложенностью";n.args={items:k};const c=e=>r("div",{className:p.wrapper,children:r(s,{...e,multipleExpanded:!0})});c.storyName="Аккордеон с возможностью раскрытия нескольких секций";c.args={items:K};var A,v,E;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} />
    </div>;
}`,...(E=(v=t.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var I,N,x;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      {Object.values(sizesMapping).map((size, index) => <Accordion key={index} {...argTypes} size={size} />)}
      ;
    </div>;
}`,...(x=(N=o.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var S,T,_;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      {Object.values(iconsMapping).map((icon, index) => <>
          <Accordion key={index} {...argTypes} startIcon={icon} />
          <Accordion key={index} {...argTypes} startIcon={null} endIcon={icon} />
        </>)}
      ;
    </div>;
}`,...(_=(T=a.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var w,M,O;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} variant={variantsMapping.paper} />
    </div>;
}`,...(O=(M=i.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var L,P,h;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} startIcon={iconsMapping.plus} />
    </div>;
}`,...(h=(P=n.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var C,F,D;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} multipleExpanded />
    </div>;
}`,...(D=(F=c.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};const ee=["AccordionDefault","AccordionSizes","AccordionIcons","AccordionPaper","FoldedAccordion","MultiExpandedAccordion"];export{t as AccordionDefault,a as AccordionIcons,i as AccordionPaper,o as AccordionSizes,n as FoldedAccordion,c as MultiExpandedAccordion,ee as __namedExportsOrder,$ as default};
