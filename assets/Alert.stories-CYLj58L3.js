import{j as r}from"./jsx-runtime-DFnSfiB4.js";import{A as n}from"./index-Bq8dHBmc.js";import"./generateUUID-i9L7EtYg.js";import"./index-bLIWCpda.js";import"./index-BgyuaCKK.js";import{B as p}from"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-DJXOh8UI.js";import"./index-DB41iIPt.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CpIRsoAz.js";import"./32-C4VDZHit.js";import"./index-DQ2WTIsS.js";import{s as m}from"./styles.module-C4SoDQaA.js";import{a}from"./argsTypes-D2N9Q1AR.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-0sbKER3h.js";const c=e=>r.jsx(p,{justifyContent:"center",alignItems:"center",className:m.wrapper,children:e()}),O={title:"Components/Alert/Stories",component:n,decorators:[c],argTypes:{...a,showChildren:{description:"Показать дополнительный контент в виде списка",control:{type:"boolean"}}}},t=({showChildren:e,...l})=>r.jsx(n,{...l,children:e&&r.jsxs("ul",{style:{paddingLeft:"16px",margin:"unset"},children:[r.jsx("li",{children:"Первый пункт списка"}),r.jsx("li",{children:"Второй пункт списка"}),r.jsx("li",{children:"Третий пункт списка"})]})});t.storyName="Alert по умолчанию";t.args={title:"Alert по умолчанию",showChildren:!1};var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const P=["AlertDefault"];export{t as AlertDefault,P as __namedExportsOrder,O as default};
