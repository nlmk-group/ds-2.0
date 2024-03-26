import{j as e,a as z}from"./clsx.m-CcuEzMhP.js";import{r as R}from"./index-CBqU2yxZ.js";import{g as t,i as y,s as h,a as i,v as j}from"./generateUUID-BkPc_NdJ.js";import{a as X}from"./argsTypes-FQnKGSLd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-fbTu1Hcf.js";import"./32-BmhDzcbC.js";const k="_wrapper_1tr2v_1",J="_table_1tr2v_12",p={wrapper:k,table:J},g=[{id:t(),title:"First accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:t(),title:"2nd accordion item",content:"Lorem ipsum"},{id:t(),title:"Last accordion item",content:"Lorem ipsum"}],K=[{id:t(),title:"Vestibulum finibus tortor",content:"Lorem ipsum",initiallyExpanded:!0},{id:t(),title:"Sed vitae pretium elit",content:"Lorem ipsum"},{id:t(),title:"Donec aliquam ornare nunc",content:"Lorem ipsum"}],U=[{id:t(),title:"Vestibulum ante ipsum primis",content:"Lorem ipsum",initiallyExpanded:!0},{id:t(),title:"Proin vulputate ultrices ante",content:"Lorem ipsum"},{id:t(),title:"Curabitur imperdiet tempus felis",content:"Lorem ipsum"}],H=[{id:t(),title:"Maecenas in magna at nunc",content:"Lorem ipsum",initiallyExpanded:!0},{id:t(),title:"Praesent scelerisque maximus",content:"Lorem ipsum"},{id:t(),title:"Maecenas a sapien consectetur",content:"Lorem ipsum"}],A={startIcon:y.plus,size:h.xs},q=[{id:1,title:"First accordion item",initiallyExpanded:!0,content:e(i,{...A,items:[{id:1,title:"First accordion item",initiallyExpanded:!0,content:e(i,{...A,items:[{id:1,title:"First accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:2,title:"2nd accordion item",content:"Lorem ipsum"},{id:3,title:"Last accordion item",content:"Lorem ipsum"}]})}]})}],V=[{id:1,title:"First accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:2,title:"2nd accordion item",content:"Lorem ipsum",initiallyExpanded:!0},{id:3,title:"Last accordion item",content:"Lorem ipsum",initiallyExpanded:!0}],W=r=>e("div",{style:{minHeight:80},children:r()}),re={title:"Components/Accordion/Stories",component:i,decorators:[W],argTypes:X},u=[g,K,U,H],n=r=>e("div",{className:p.wrapper,children:e(i,{...r})});n.storyName="Аккордеон по умолчанию";n.args={items:g};const d=r=>e("div",{className:p.wrapper,children:Object.values(h).map((l,s)=>e(i,{...r,size:l,items:u[s]},s))});d.storyName="Варианты размеров аккордеона";const m=r=>e("div",{className:p.wrapper,children:Object.values(y).map((l,s)=>z(R.Fragment,{children:[e(i,{...r,startIcon:l,items:u[s]}),e(i,{...r,startIcon:null,endIcon:l,items:u[s+2]})]},s))});m.storyName="Варианты аккордеона с иконками";const o=r=>e("div",{className:p.wrapper,children:e(i,{...r,variant:j.paper})});o.storyName="Paper аккордеон";o.args={items:g};const a=r=>e("div",{className:p.wrapper,children:e(i,{...r,startIcon:y.plus})});a.storyName="Аккордеон с мультивложенностью";a.args={items:q};const c=r=>e("div",{className:p.wrapper,children:e(i,{...r,multipleExpanded:!0})});c.storyName="Аккордеон с возможностью раскрытия нескольких секций";c.args={items:V};var v,I,E;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} />
    </div>;
}`,...(E=(I=n.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var O,_,x;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      {Object.values(sizesMapping).map((size, index) => <Accordion key={index} {...argTypes} size={size} items={mockArr[index]} />)}
    </div>;
}`,...(x=(_=d.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var N,L,M;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      {Object.values(iconsMapping).map((icon, index) => <Fragment key={index}>
          <Accordion {...argTypes} startIcon={icon} items={mockArr[index]} />
          <Accordion {...argTypes} startIcon={null} endIcon={icon} items={mockArr[index + 2]} />
        </Fragment>)}
    </div>;
}`,...(M=(L=m.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var T,S,C;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} variant={variantsMapping.paper} />
    </div>;
}`,...(C=(S=o.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var w,D,P;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} startIcon={iconsMapping.plus} />
    </div>;
}`,...(P=(D=a.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var F,b,f;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`(argTypes: IAccordionProps): JSX.Element => {
  return <div className={styles.wrapper}>
      <Accordion {...argTypes} multipleExpanded />
    </div>;
}`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const te=["AccordionDefault","AccordionSizes","AccordionIcons","AccordionPaper","FoldedAccordion","MultiExpandedAccordion"];export{n as AccordionDefault,m as AccordionIcons,o as AccordionPaper,d as AccordionSizes,a as FoldedAccordion,c as MultiExpandedAccordion,te as __namedExportsOrder,re as default};
