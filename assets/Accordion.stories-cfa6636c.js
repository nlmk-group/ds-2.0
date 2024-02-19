import{j as r,a as u,F as b}from"./clsx.m-3764cf42.js";import{i as y,s as z,A as s,v as f}from"./index-ec455f54.js";import{a as j}from"./argsTypes-47befe6f.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-c9e69acb.js";import"./index-fb030d50.js";const X="_wrapper_1tr2v_1",J="_table_1tr2v_12",d={wrapper:X,table:J},l=[{id:1,title:"First accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:2,title:"2nd accordion item",content:"Lorem ipsum"},{id:3,title:"Last accordion item",content:"Lorem ipsum"}],g={startIcon:y.plus,size:z.xs},k=[{id:1,title:"First accordion item",initiallyExpanded:!0,content:r(s,{...g,items:[{id:1,title:"First accordion item",initiallyExpanded:!0,content:r(s,{...g,items:[{id:1,title:"First accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:2,title:"2nd accordion item",content:"Lorem ipsum"},{id:3,title:"Last accordion item",content:"Lorem ipsum"}]})}]})}],K=[{id:1,title:"First accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:2,title:"2nd accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:3,title:"Last accordion item",content:"Lorem ipsum",initiallyExpanded:!0}],R=e=>r("div",{style:{minHeight:80},children:e()}),W={title:"Components/Accordion/Stories",component:s,decorators:[R],argTypes:j},t=e=>r("div",{className:d.wrapper,children:r(s,{...e})});t.storyName="Аккордеон по умолчанию";t.args={items:l};const a=e=>u("div",{className:d.wrapper,children:[Object.values(z).map((p,m)=>r(s,{...e,size:p},m)),";"]});a.storyName="Варианты размеров аккордеона";a.args={items:l};const o=e=>u("div",{className:d.wrapper,children:[Object.values(y).map((p,m)=>u(b,{children:[r(s,{...e,startIcon:p},m),r(s,{...e,startIcon:null,endIcon:p},m)]})),";"]});o.storyName="Варианты аккордеона с иконками";o.args={items:l};const n=e=>r("div",{className:d.wrapper,children:r(s,{...e,variant:f.paper})});n.storyName="Paper аккордеон";n.args={items:l};const i=e=>r("div",{className:d.wrapper,children:r(s,{...e,startIcon:y.plus})});i.storyName="Аккордеон с мультивложенностью";i.args={items:k};const c=e=>r("div",{className:d.wrapper,children:r(s,{...e,multipleExpanded:!0})});c.storyName="Аккордеон с возможностью раскрытия нескольких секций";c.args={items:K};var A,v,E;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} />
    </div>;
}`,...(E=(v=t.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var I,N,x;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      {Object.values(sizesMapping).map((size, index) => <Accordion key={index} {...argTypes} size={size} />)}
      ;
    </div>;
}`,...(x=(N=a.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var S,T,_;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      {Object.values(iconsMapping).map((icon, index) => <>
          <Accordion key={index} {...argTypes} startIcon={icon} />
          <Accordion key={index} {...argTypes} startIcon={null} endIcon={icon} />
        </>)}
      ;
    </div>;
}`,...(_=(T=o.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var w,M,O;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} variant={variantsMapping.paper} />
    </div>;
}`,...(O=(M=n.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var L,P,h;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} startIcon={iconsMapping.plus} />
    </div>;
}`,...(h=(P=i.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var C,F,D;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} multipleExpanded />
    </div>;
}`,...(D=(F=c.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};const Y=["AccordionDefault","AccordionSizes","AccordionIcons","AccordionPaper","FoldedAccordion","MultiExpandedAccordion"];export{t as AccordionDefault,o as AccordionIcons,n as AccordionPaper,a as AccordionSizes,i as FoldedAccordion,c as MultiExpandedAccordion,Y as __namedExportsOrder,W as default};
