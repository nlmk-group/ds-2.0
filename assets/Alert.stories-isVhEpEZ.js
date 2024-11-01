import{j as r}from"./jsx-runtime-DoxjgJx5.js";import{A as n}from"./index-ZojCmbpv.js";import"./generateUUID-CG7VmJJw.js";import"./index-XsxLq1mj.js";import"./index-AXtJih2E.js";import{B as p}from"./index-ED8ccfsJ.js";import"./index-CWQ0GGcJ.js";import"./index-BHxe-dnq.js";import"./index-iWHyAWYR.js";import"./index-BztLnIMF.js";import"./index-Udc0C2Qz.js";import"./index-CPdpS9Jm.js";import"./32-Bjhqu_Pf.js";import"./index-Cu9bd8lq.js";import{g as a}from"./styles.module-DyNiVTaI.js";import{a as m}from"./argsTypes-CtIcnZsN.js";import"./clsx-B-dksMZM.js";import"./index-Ckls47V4.js";import"./types-CpBSVUgC.js";import"./get-CeVb1zXw.js";import"./index-7KVZVlDS.js";const c=e=>r.jsx(p,{justifyContent:"center",alignItems:"center",className:a.wrapper,children:r.jsx(e,{})}),R={title:"Components/Alert/Stories",component:n,decorators:[c],argTypes:{...m,showChildren:{description:"Показать дополнительный контент в виде списка",control:{type:"boolean"}}}},t=({showChildren:e,...l})=>r.jsx(n,{...l,children:e&&r.jsxs("ul",{style:{paddingLeft:"16px",margin:"unset"},children:[r.jsx("li",{children:"Первый пункт списка"}),r.jsx("li",{children:"Второй пункт списка"}),r.jsx("li",{children:"Третий пункт списка"})]})});t.storyName="Alert по умолчанию";t.args={title:"Alert по умолчанию",showChildren:!1};var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`({
  showChildren,
  ...argTypes
}: IAlertStoryProps): ReactNode => {
  return <Alert {...argTypes}>
      {showChildren && <ul style={{
      paddingLeft: '16px',
      margin: 'unset'
    }}>
          <li>Первый пункт списка</li>
          <li>Второй пункт списка</li>
          <li>Третий пункт списка</li>
        </ul>}
    </Alert>;
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const O=["AlertDefault"];export{t as AlertDefault,O as __namedExportsOrder,R as default};
