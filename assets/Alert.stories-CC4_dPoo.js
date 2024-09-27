import{j as r}from"./jsx-runtime-DFnSfiB4.js";import{A as n}from"./index-CMhB4zJG.js";import"./generateUUID-DB8_0F2G.js";import"./index-C04uUQ85.js";import"./index-CSbymPMC.js";import{B as p}from"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-5BTuYEoj.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-BThqyTlu.js";import"./32-Y-7Ywnum.js";import"./index-DQ2WTIsS.js";import{s as m}from"./styles.module-BSI8LUpZ.js";import{a}from"./argsTypes-rCLFbth_.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-BKbm6zW0.js";const c=e=>r.jsx(p,{justifyContent:"center",alignItems:"center",className:m.wrapper,children:e()}),O={title:"Components/Alert/Stories",component:n,decorators:[c],argTypes:{...a,showChildren:{description:"Показать дополнительный контент в виде списка",control:{type:"boolean"}}}},t=({showChildren:e,...l})=>r.jsx(n,{...l,children:e&&r.jsxs("ul",{style:{paddingLeft:"16px",margin:"unset"},children:[r.jsx("li",{children:"Первый пункт списка"}),r.jsx("li",{children:"Второй пункт списка"}),r.jsx("li",{children:"Третий пункт списка"})]})});t.storyName="Alert по умолчанию";t.args={title:"Alert по умолчанию",showChildren:!1};var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
