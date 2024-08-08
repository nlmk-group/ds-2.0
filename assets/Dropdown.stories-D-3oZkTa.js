import{j as o}from"./jsx-runtime-DFnSfiB4.js";import{a7 as p,a8 as m,d as l}from"./index-De6xVjfl.js";import"./generateUUID-i9L7EtYg.js";import"./index-bLIWCpda.js";import"./index-BgyuaCKK.js";import{B as c}from"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import{T as u}from"./index-DJXOh8UI.js";import"./index-DB41iIPt.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CpIRsoAz.js";import"./32-C4VDZHit.js";import"./index-DQ2WTIsS.js";import{a as w}from"./argsTypes-EoFEwxoB.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-0sbKER3h.js";const _="_wrapper_m6k4t_1",v="_dropdown__container_m6k4t_7",y="_disabled_m6k4t_10",i={wrapper:_,dropdown__container:v,disabled:y},D=t=>o.jsx(c,{alignItems:"center",justifyContent:"center",st:{height:"100vh"},className:i.wrapper,children:o.jsx(t,{})}),F={title:"Components/Dropdown/Stories",component:p,decorators:[D],argTypes:w,parameters:{layout:"fullscreen"}},g=[{value:"Сталь"},{value:"Железо"},{value:"Чугун",disabled:!0},{value:"Медь"},{value:"Цинк"},{value:"Титан"},{value:"Хром"}],r=t=>o.jsx("div",{className:i.dropdown__container,children:o.jsx(p,{...t,children:g.map(({value:e,disabled:d})=>o.jsx(m,{value:e,disabled:d,onClick:()=>{console.log(e)},children:o.jsx(u,{variant:"Body1-Medium",children:e})},e))})});r.args={buttonText:"Dropdown Button",size:l.m};r.storyName="Dropdown по умолчанию";var n,a,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
  return <div className={styles.dropdown__container}>
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
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const G=["DropdownDefault"];export{r as DropdownDefault,G as __namedExportsOrder,F as default};
