import{j as o}from"./jsx-runtime-DFnSfiB4.js";import{n as a,o as m,d}from"./index-BGpPsu4k.js";import"./generateUUID-C8XntvAg.js";import"./index-ByiRgrzj.js";import"./index-Cd-Fhxqm.js";import{B as l}from"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import{T as u}from"./index-ehXB0alm.js";import"./index-CFeGFBie.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CTg4GkBi.js";import"./32-CkcGOl0S.js";import"./index-DQ2WTIsS.js";import{s as c}from"./styles.module-Chmqxc13.js";import{a as v}from"./argsTypes-DxK5e4wP.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-BKbm6zW0.js";const y=t=>o.jsx(l,{alignItems:"flex-start",justifyContent:"center",st:{height:"300px",marginTop:"40px",borderRadius:"10px"},className:c.wrapper,children:o.jsx(t,{})}),q={title:"Components/Dropdown/Stories",component:a,decorators:[y],argTypes:v},w=[{value:"Сталь"},{value:"Железо"},{value:"Чугун",disabled:!0},{value:"Медь"},{value:"Цинк"},{value:"Титан"},{value:"Хром"}],r=t=>o.jsx("div",{style:{position:"relative"},children:o.jsx(a,{...t,children:w.map(({value:e,disabled:n})=>o.jsx(m,{value:e,disabled:n,onClick:()=>{console.log(e)},children:o.jsx(u,{variant:"Body1-Medium",children:e})},e))})});r.args={buttonChildren:"Dropdown Button",size:d.m,menuStyle:{width:"200px"}};r.storyName="Dropdown по умолчанию";var s,p,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
  return <div style={{
    position: 'relative'
  }}>
      <Dropdown {...args}>
        {positions.map(({
        value,
        disabled
      }) => <DropdownMenuItem key={value} value={value} disabled={disabled} onClick={() => {
        console.log(value);
      }}>
            <Typography variant="Body1-Medium">{value}</Typography>
          </DropdownMenuItem>)}
      </Dropdown>
    </div>;
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const A=["DropdownDefault"];export{r as DropdownDefault,A as __namedExportsOrder,q as default};
