import{j as r}from"./jsx-runtime-DFnSfiB4.js";import{o as p,p as c,d as w}from"./index-C8yIAa62.js";import"./generateUUID-7LaMQRml.js";import"./index-KO6O_hQW.js";import"./index-CSbymPMC.js";import{B as g}from"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import{T as D}from"./index-ehXB0alm.js";import"./index-StdbG6rE.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-Bl5L39jK.js";import"./32-l5SNSvvS.js";import"./index-DQ2WTIsS.js";import{s as h}from"./styles.module-BSI8LUpZ.js";import{a as x}from"./argsTypes-BqW1pUoR.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-BKbm6zW0.js";const v=t=>r.jsx(g,{alignItems:"flex-start",justifyContent:"center",st:{height:"300px",marginTop:"40px",borderRadius:"10px"},className:h.wrapper,children:r.jsx(t,{})}),H={title:"Components/Dropdown/Stories",component:p,decorators:[v],argTypes:x},y=[{value:"Сталь"},{value:"Железо"},{value:"Чугун",disabled:!0},{value:"Медь"},{value:"Цинк"},{value:"Титан"},{value:"Хром"}],e=t=>r.jsx(p,{...t,children:y.map(({value:o,disabled:a})=>r.jsx(c,{value:o,disabled:a,onClick:()=>{console.log(o)},children:r.jsx(D,{variant:"Body1-Medium",children:o})},o))});e.args={buttonChildren:"Dropdown Button",size:w.m,menuStyle:{width:"200px"}};e.storyName="Dropdown по умолчанию";const n=t=>r.jsx(p,{...t,children:y.map(({value:o,disabled:a})=>r.jsx(c,{value:o,disabled:a,onClick:()=>{console.log(o)},children:r.jsx(D,{variant:"Body1-Medium",children:o})},o))});n.args={buttonChildren:"Dropdown Button",size:w.m,menuStyle:{width:"200px"},withPortal:!0};n.storyName="Dropdown с порталом";var s,d,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
  return <Dropdown {...args}>
      {dropdownOptions.map(({
      value,
      disabled
    }) => <DropdownMenuItem key={value} value={value} disabled={disabled} onClick={() => {
      console.log(value);
    }}>
          <Typography variant="Body1-Medium">{value}</Typography>
        </DropdownMenuItem>)}
    </Dropdown>;
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,l,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
  return <Dropdown {...args}>
      {dropdownOptions.map(({
      value,
      disabled
    }) => <DropdownMenuItem key={value} value={value} disabled={disabled} onClick={() => {
      console.log(value);
    }}>
          <Typography variant="Body1-Medium">{value}</Typography>
        </DropdownMenuItem>)}
    </Dropdown>;
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const J=["DefaultDropdown","PortalDropdown"];export{e as DefaultDropdown,n as PortalDropdown,J as __namedExportsOrder,H as default};
