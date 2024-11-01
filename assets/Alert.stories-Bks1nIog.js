import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{A as n}from"./index-Bult1pSm.js";import"./generateUUID-DAuIdu-p.js";import"./index-B0lWqv5F.js";import"./index-DPg--y1u.js";import{B as p}from"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-BVI3RfDi.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BXzk8UvY.js";import"./32-CMOOVZNy.js";import"./index-Bnop-kX6.js";import{g as a}from"./styles.module-CfbNvgm1.js";import{a as m}from"./argsTypes-C9dLEcGu.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-CT8gBKwQ.js";const c=e=>r.jsx(p,{justifyContent:"center",alignItems:"center",className:a.wrapper,children:r.jsx(e,{})}),L={title:"Components/Alert/Stories",component:n,decorators:[c],argTypes:{...m,showChildren:{description:"Показать дополнительный контент в виде списка",control:{type:"boolean"}}}},t=({showChildren:e,...l})=>r.jsx(n,{...l,children:e&&r.jsxs("ul",{style:{paddingLeft:"16px",margin:"unset"},children:[r.jsx("li",{children:"Первый пункт списка"}),r.jsx("li",{children:"Второй пункт списка"}),r.jsx("li",{children:"Третий пункт списка"})]})});t.storyName="Alert по умолчанию";t.args={title:"Alert по умолчанию",showChildren:!1};var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const R=["AlertDefault"];export{t as AlertDefault,R as __namedExportsOrder,L as default};
