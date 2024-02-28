import{j as e,a as z,F as b}from"./clsx.m-CcuEzMhP.js";import{i as u,s as D,a as s,v as f}from"./index-ehJh3wQv.js";import{a as j}from"./argsTypes-CG4gzsAD.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-fbTu1Hcf.js";import"./32-UdY5WLK9.js";const X="_wrapper_1tr2v_1",J="_table_1tr2v_12",d={wrapper:X,table:J},l=[{id:1,title:"First accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:2,title:"2nd accordion item",content:"Lorem ipsum"},{id:3,title:"Last accordion item",content:"Lorem ipsum"}],y={startIcon:u.plus,size:D.xs},k=[{id:1,title:"First accordion item",initiallyExpanded:!0,content:e(s,{...y,items:[{id:1,title:"First accordion item",initiallyExpanded:!0,content:e(s,{...y,items:[{id:1,title:"First accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:2,title:"2nd accordion item",content:"Lorem ipsum"},{id:3,title:"Last accordion item",content:"Lorem ipsum"}]})}]})}],K=[{id:1,title:"First accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:2,title:"2nd accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:3,title:"Last accordion item",content:"Lorem ipsum",initiallyExpanded:!0}],R=r=>e("div",{style:{minHeight:80},children:r()}),W={title:"Components/Accordion/Stories",component:s,decorators:[R],argTypes:j},t=r=>e("div",{className:d.wrapper,children:e(s,{...r})});t.storyName="Аккордеон по умолчанию";t.args={items:l};const a=r=>e("div",{className:d.wrapper,children:Object.values(D).map((p,m)=>e(s,{...r,size:p},m))});a.storyName="Варианты размеров аккордеона";a.args={items:l};const o=r=>e("div",{className:d.wrapper,children:Object.values(u).map((p,m)=>z(b,{children:[e(s,{...r,startIcon:p},m),e(s,{...r,startIcon:null,endIcon:p},m)]}))});o.storyName="Варианты аккордеона с иконками";o.args={items:l};const i=r=>e("div",{className:d.wrapper,children:e(s,{...r,variant:f.paper})});i.storyName="Paper аккордеон";i.args={items:l};const n=r=>e("div",{className:d.wrapper,children:e(s,{...r,startIcon:u.plus})});n.storyName="Аккордеон с мультивложенностью";n.args={items:k};const c=r=>e("div",{className:d.wrapper,children:e(s,{...r,multipleExpanded:!0})});c.storyName="Аккордеон с возможностью раскрытия нескольких секций";c.args={items:K};var g,A,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} />
    </div>;
}`,...(v=(A=t.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var E,I,N;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      {Object.values(sizesMapping).map((size, index) => <Accordion key={index} {...argTypes} size={size} />)}
    </div>;
}`,...(N=(I=a.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var x,S,T;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      {Object.values(iconsMapping).map((icon, index) => <>
          <Accordion key={index} {...argTypes} startIcon={icon} />
          <Accordion key={index} {...argTypes} startIcon={null} endIcon={icon} />
        </>)}
    </div>;
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var _,w,M;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} variant={variantsMapping.paper} />
    </div>;
}`,...(M=(w=i.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var O,L,P;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} startIcon={iconsMapping.plus} />
    </div>;
}`,...(P=(L=n.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var h,C,F;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} multipleExpanded />
    </div>;
}`,...(F=(C=c.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const Y=["AccordionDefault","AccordionSizes","AccordionIcons","AccordionPaper","FoldedAccordion","MultiExpandedAccordion"];export{t as AccordionDefault,o as AccordionIcons,i as AccordionPaper,a as AccordionSizes,n as FoldedAccordion,c as MultiExpandedAccordion,Y as __namedExportsOrder,W as default};
