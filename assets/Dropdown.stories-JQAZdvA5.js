import{j as o}from"./jsx-runtime-BTJTZTIL.js";import{y as d,z as m,g as s}from"./TreeList-e8j-Ky4T.js";import"./generateUUID-D5yDV8CF.js";import"./index-BrUUz505.js";import"./index-Dd1OPmdN.js";import{B as c}from"./index-vbXA6nr0.js";import"./index-PY2fm1mi.js";import"./index-DmffzHLE.js";import"./index-CsQ_b7hm.js";import"./index-VmJK6twV.js";import"./index-BPWT-JIL.js";import"./index-SjOgrvem.js";import"./index-C1EIKtiR.js";import"./index-BcJSXhQi.js";import{c as B,d as h,e as O,f as v,g as R,h as g}from"./32-CiI8XTkU.js";import{g as N}from"./styles.module-m0Zsy3Hi.js";import{a as M}from"./argsTypes-Day-DfYT.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const P=r=>o.jsx(c,{alignItems:"flex-start",justifyContent:"center",st:{height:"300px",marginTop:"40px",borderRadius:"10px"},className:N.wrapper,children:o.jsx(r,{})}),mo={title:"Components/Dropdown/Stories",component:d,decorators:[P],argTypes:M},A=[{value:"Сталь"},{value:"Железо"},{value:"Чугун",disabled:!0},{value:"Медь"},{value:"Цинк"},{value:"Титан"},{value:"Хром"}],W=[{value:"Ag"},{value:"N"},{value:"Cu",disabled:!0},{value:"Au"},{value:"Fe"},{value:"Ti"},{value:"C"}],E=[{value:"Металлургический комбинат"},{value:"Железо"},{value:"Чугун",disabled:!0},{value:"Медь"},{value:"Цинк"},{value:"Титан"},{value:"Хром"}],x={[s.m]:o.jsx(h,{htmlColor:"var(--brand-sapphire-60)"}),[s.s]:o.jsx(h,{htmlColor:"var(--brand-sapphire-60)"}),[s.xs]:o.jsx(B,{htmlColor:"var(--brand-sapphire-60)"})},F={[s.m]:o.jsx(v,{htmlColor:"var(--spectrum-red-60)"}),[s.s]:o.jsx(v,{htmlColor:"var(--spectrum-red-60)"}),[s.xs]:o.jsx(O,{htmlColor:"var(--spectrum-red-60)"})},_={[s.m]:o.jsx(g,{htmlColor:"var(--brand-sapphire-60)"}),[s.s]:o.jsx(g,{htmlColor:"var(--brand-sapphire-60)"}),[s.xs]:o.jsx(R,{htmlColor:"var(--brand-sapphire-60)"})},a=r=>o.jsx(d,{...r,children:A.map(({value:e,disabled:t})=>{const n=e.includes(" ")?"top":"center";return o.jsx(m,{value:e,disabled:t,onClick:()=>{console.log(e)},children:o.jsxs(c,{display:"flex",alignItems:n,gap:"8px",children:[o.jsx("div",{style:{position:"relative",top:"2px"},children:x[r.size]}),e]},e)},e)})});a.args={buttonChildren:"Dropdown Button",size:s.m,menuStyle:{minWidth:"200px"}};a.storyName="Dropdown по умолчанию";const i=r=>o.jsx(d,{...r,children:A.map(({value:e,disabled:t})=>{const n=e.includes(" ")?"top":"center";return o.jsx(m,{value:e,disabled:t,onClick:()=>{console.log(e)},children:o.jsxs(c,{display:"flex",alignItems:n,gap:"8px",children:[o.jsx("div",{style:{position:"relative",top:"2px"},children:x[r.size]}),e]},e)},e)})});i.args={buttonChildren:"Dropdown Button",size:s.m,menuStyle:{minWidth:"200px"},withPortal:!0};i.storyName="Dropdown с порталом";const l=r=>o.jsx(d,{...r,children:E.map(({value:e,disabled:t})=>{const n=e.includes(" ")?"top":"center";return o.jsx(m,{value:e,disabled:t,onClick:()=>{console.log(e)},children:o.jsxs(c,{display:"flex",alignItems:n,gap:"8px",children:[o.jsx("div",{style:{position:"relative",top:"4px"},children:F[r.size]}),o.jsx("div",{style:{flexGrow:1,width:"150px"},children:e}),o.jsx("div",{style:{position:"relative",top:"2px",marginLeft:"auto"},children:_[r.size]})]},e)},e)})});l.storyName="Dropdown с кастомизированными элементами списка";l.args={buttonChildren:"Dropdown Button",size:s.m,menuStyle:{minWidth:"200px"}};const p=r=>o.jsx(d,{...r,children:W.map(({value:e,disabled:t})=>{const n=e.includes(" ")?"top":"center";return o.jsx(m,{value:e,disabled:t,onClick:()=>{console.log(e)},children:o.jsxs(c,{display:"flex",alignItems:n,gap:"8px",children:[o.jsx("div",{style:{position:"relative",top:"2px"},children:x[r.size]}),e]},e)},e)})});p.args={buttonChildren:"Ед.",size:s.m,menuStyle:{minWidth:"100px"}};p.storyName="Dropdown с короткими значениями";var w,y,f;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
  return <Dropdown {...args}>
      {dropdownOptions.map(({
      value,
      disabled
    }) => {
      const hasSpace = value.includes(' ');
      const finalAlign = hasSpace ? 'top' : 'center';
      return <DropdownMenuItem key={value} value={value} disabled={disabled} onClick={() => {
        console.log(value);
      }}>
            <Box key={value} display="flex" alignItems={finalAlign} gap="8px">
              <div style={{
            position: 'relative',
            top: '2px'
          }}>
                {sizeToIconStar[args.size as keyof typeof sizeToIconStar]}
              </div>
              {value}
            </Box>
          </DropdownMenuItem>;
    })}
    </Dropdown>;
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var D,I,S;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
  return <Dropdown {...args}>
      {dropdownOptions.map(({
      value,
      disabled
    }) => {
      const hasSpace = value.includes(' ');
      const finalAlign = hasSpace ? 'top' : 'center';
      return <DropdownMenuItem key={value} value={value} disabled={disabled} onClick={() => {
        console.log(value);
      }}>
            <Box key={value} display="flex" alignItems={finalAlign} gap="8px">
              <div style={{
            position: 'relative',
            top: '2px'
          }}>
                {sizeToIconStar[args.size as keyof typeof sizeToIconStar]}
              </div>
              {value}
            </Box>
          </DropdownMenuItem>;
    })}
    </Dropdown>;
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var C,j,z;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
  return <Dropdown {...args}>
      {dropdownOptionsForCustom.map(({
      value,
      disabled
    }) => {
      const hasSpace = value.includes(' ');
      const finalAlign = hasSpace ? 'top' : 'center';
      return <DropdownMenuItem key={value} value={value} disabled={disabled} onClick={() => {
        console.log(value);
      }}>
            <Box key={value} display="flex" alignItems={finalAlign} gap="8px">
              <div style={{
            position: 'relative',
            top: '4px'
          }}>
                {sizeToIconCancel[args.size as keyof typeof sizeToIconCancel]}
              </div>
              <div style={{
            flexGrow: 1,
            width: '150px'
          }}>
                {value}
              </div>
              <div style={{
            position: 'relative',
            top: '2px',
            marginLeft: 'auto'
          }}>
                {sizeToIconChevronRight[args.size as keyof typeof sizeToIconChevronRight]}
              </div>
            </Box>
          </DropdownMenuItem>;
    })}
    </Dropdown>;
}`,...(z=(j=l.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var b,k,T;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
  return <Dropdown {...args}>
      {dropdownOptionsSmall.map(({
      value,
      disabled
    }) => {
      const hasSpace = value.includes(' ');
      const finalAlign = hasSpace ? 'top' : 'center';
      return <DropdownMenuItem key={value} value={value} disabled={disabled} onClick={() => {
        console.log(value);
      }}>
            <Box key={value} display="flex" alignItems={finalAlign} gap="8px">
              <div style={{
            position: 'relative',
            top: '2px'
          }}>
                {sizeToIconStar[args.size as keyof typeof sizeToIconStar]}
              </div>
              {value}
            </Box>
          </DropdownMenuItem>;
    })}
    </Dropdown>;
}`,...(T=(k=p.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const uo=["DefaultDropdown","PortalDropdown","DropdownWithCustomElements","SmallDropdown"];export{a as DefaultDropdown,l as DropdownWithCustomElements,i as PortalDropdown,p as SmallDropdown,uo as __namedExportsOrder,mo as default};
