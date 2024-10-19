import{j as r}from"./jsx-runtime-DFnSfiB4.js";import{A as n}from"./index-CZcUCixh.js";import"./generateUUID-DDiDEiZj.js";import"./index-BUicYAu_.js";import"./index-CSbymPMC.js";import{B as p}from"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-BKAatnfy.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CLzAcar6.js";import"./32-sVrGXRAZ.js";import"./index-DQ2WTIsS.js";import{s as a}from"./styles.module-BSI8LUpZ.js";import{a as m}from"./argsTypes-DMFNMsSF.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-oHtgdQEu.js";import"./index-BKbm6zW0.js";const c=e=>r.jsx(p,{justifyContent:"center",alignItems:"center",className:a.wrapper,children:e()}),b={title:"Components/Alert/Stories",component:n,decorators:[c],argTypes:{...m,showChildren:{description:"Показать дополнительный контент в виде списка",control:{type:"boolean"}}}},t=({showChildren:e,...l})=>r.jsx(n,{...l,children:e&&r.jsxs("ul",{style:{paddingLeft:"16px",margin:"unset"},children:[r.jsx("li",{children:"Первый пункт списка"}),r.jsx("li",{children:"Второй пункт списка"}),r.jsx("li",{children:"Третий пункт списка"})]})});t.storyName="Alert по умолчанию";t.args={title:"Alert по умолчанию",showChildren:!1};var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const O=["AlertDefault"];export{t as AlertDefault,O as __namedExportsOrder,b as default};
