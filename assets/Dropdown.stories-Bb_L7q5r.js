import{j as r}from"./jsx-runtime-DFnSfiB4.js";import{o as p,p as c,d as w}from"./index-LmI_Dv35.js";import"./generateUUID-DDiDEiZj.js";import"./index-BUicYAu_.js";import"./index-CSbymPMC.js";import{B as y}from"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import{T as D}from"./index-ehXB0alm.js";import"./index-BKAatnfy.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CLzAcar6.js";import"./32-sVrGXRAZ.js";import"./index-DQ2WTIsS.js";import{g as h}from"./styles.module-DyNiVTaI.js";import{a as x}from"./argsTypes-tO6LCu5V.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-oHtgdQEu.js";import"./index-BKbm6zW0.js";const v=t=>r.jsx(y,{alignItems:"flex-start",justifyContent:"center",st:{height:"300px",marginTop:"40px",borderRadius:"10px"},className:h.wrapper,children:r.jsx(t,{})}),G={title:"Components/Dropdown/Stories",component:p,decorators:[v],argTypes:x},g=[{value:"Сталь"},{value:"Железо"},{value:"Чугун",disabled:!0},{value:"Медь"},{value:"Цинк"},{value:"Титан"},{value:"Хром"}],e=t=>r.jsx(p,{...t,children:g.map(({value:o,disabled:a})=>r.jsx(c,{value:o,disabled:a,onClick:()=>{console.log(o)},children:r.jsx(D,{variant:"Body1-Medium",children:o})},o))});e.args={buttonChildren:"Dropdown Button",size:w.m,menuStyle:{width:"200px"}};e.storyName="Dropdown по умолчанию";const n=t=>r.jsx(p,{...t,children:g.map(({value:o,disabled:a})=>r.jsx(c,{value:o,disabled:a,onClick:()=>{console.log(o)},children:r.jsx(D,{variant:"Body1-Medium",children:o})},o))});n.args={buttonChildren:"Dropdown Button",size:w.m,menuStyle:{width:"200px"},withPortal:!0};n.storyName="Dropdown с порталом";var s,d,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
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
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const H=["DefaultDropdown","PortalDropdown"];export{e as DefaultDropdown,n as PortalDropdown,H as __namedExportsOrder,G as default};
