import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{y as p,z as c,h as w}from"./index-CxYSwmcB.js";import"./generateUUID-BGENHwlB.js";import"./index-CEyYlgyG.js";import"./index-DppSdhCO.js";import{B as g}from"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as y}from"./index-qC5wYQgy.js";import"./index-B79NNBmL.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-B0dtJOWw.js";import"./index-Br4tp0-d.js";import"./32-DySMCdgK.js";import"./index-Bnop-kX6.js";import{g as h}from"./styles.module-ox-emdf8.js";import{a as x}from"./argsTypes-DYmHaGoA.js";import"./index-D0sJu8id.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./index-B5g4YLzC.js";const v=t=>r.jsx(g,{alignItems:"flex-start",justifyContent:"center",st:{height:"300px",marginTop:"40px",borderRadius:"10px"},className:h.wrapper,children:r.jsx(t,{})}),G={title:"Components/Dropdown/Stories",component:p,decorators:[v],argTypes:x},D=[{value:"Сталь"},{value:"Железо"},{value:"Чугун",disabled:!0},{value:"Медь"},{value:"Цинк"},{value:"Титан"},{value:"Хром"}],e=t=>r.jsx(p,{...t,children:D.map(({value:o,disabled:a})=>r.jsx(c,{value:o,disabled:a,onClick:()=>{console.log(o)},children:r.jsx(y,{variant:"Body1-Medium",children:o})},o))});e.args={buttonChildren:"Dropdown Button",size:w.m,menuStyle:{width:"200px"}};e.storyName="Dropdown по умолчанию";const n=t=>r.jsx(p,{...t,children:D.map(({value:o,disabled:a})=>r.jsx(c,{value:o,disabled:a,onClick:()=>{console.log(o)},children:r.jsx(y,{variant:"Body1-Medium",children:o})},o))});n.args={buttonChildren:"Dropdown Button",size:w.m,menuStyle:{width:"200px"},withPortal:!0};n.storyName="Dropdown с порталом";var s,d,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
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
