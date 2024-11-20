import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{u as p,w as c,e as w}from"./index-N7PQoZjI.js";import"./generateUUID-Dz4mOyMt.js";import"./index-BuHkNwZq.js";import"./index-CiiUx5gY.js";import{B as y}from"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import{T as D}from"./index-qC5wYQgy.js";import"./index-Dxx-yGvP.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-CG5Hm5ah.js";import"./32-QiGXh8Io.js";import"./index-Bnop-kX6.js";import{g as h}from"./styles.module-ox-emdf8.js";import{a as x}from"./argsTypes-CWrCpbWa.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-CT8gBKwQ.js";const v=t=>r.jsx(y,{alignItems:"flex-start",justifyContent:"center",st:{height:"300px",marginTop:"40px",borderRadius:"10px"},className:h.wrapper,children:r.jsx(t,{})}),F={title:"Components/Dropdown/Stories",component:p,decorators:[v],argTypes:x},g=[{value:"Сталь"},{value:"Железо"},{value:"Чугун",disabled:!0},{value:"Медь"},{value:"Цинк"},{value:"Титан"},{value:"Хром"}],e=t=>r.jsx(p,{...t,children:g.map(({value:o,disabled:a})=>r.jsx(c,{value:o,disabled:a,onClick:()=>{console.log(o)},children:r.jsx(D,{variant:"Body1-Medium",children:o})},o))});e.args={buttonChildren:"Dropdown Button",size:w.m,menuStyle:{width:"200px"}};e.storyName="Dropdown по умолчанию";const n=t=>r.jsx(p,{...t,children:g.map(({value:o,disabled:a})=>r.jsx(c,{value:o,disabled:a,onClick:()=>{console.log(o)},children:r.jsx(D,{variant:"Body1-Medium",children:o})},o))});n.args={buttonChildren:"Dropdown Button",size:w.m,menuStyle:{width:"200px"},withPortal:!0};n.storyName="Dropdown с порталом";var s,d,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
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
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const G=["DefaultDropdown","PortalDropdown"];export{e as DefaultDropdown,n as PortalDropdown,G as __namedExportsOrder,F as default};
