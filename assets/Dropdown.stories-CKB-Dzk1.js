import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{y as d,h as s,z as m}from"./TreeList-DRT61K-h.js";import"./generateUUID-CrXn7UDv.js";import"./index-D0pVy71L.js";import"./index-DppSdhCO.js";import{B as c}from"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-B0lFb5_3.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-DE-o7T6l.js";import"./index-DokmLR-l.js";import"./index-Bnop-kX6.js";import{c as h,d as B,e as v,f as O,g,h as R}from"./32-DG26leJo.js";import{g as N}from"./styles.module-ox-emdf8.js";import{a as M}from"./argsTypes-CX9KTFuX.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";const P=r=>e.jsx(c,{alignItems:"flex-start",justifyContent:"center",st:{height:"300px",marginTop:"40px",borderRadius:"10px"},className:N.wrapper,children:e.jsx(r,{})}),pe={title:"Components/Dropdown/Stories",component:d,decorators:[P],argTypes:M},A=[{value:"Сталь"},{value:"Железо"},{value:"Чугун",disabled:!0},{value:"Медь"},{value:"Цинк"},{value:"Титан"},{value:"Хром"}],W=[{value:"Ag"},{value:"N"},{value:"Cu",disabled:!0},{value:"Au"},{value:"Fe"},{value:"Ti"},{value:"C"}],E=[{value:"Металлургический комбинат"},{value:"Железо"},{value:"Чугун",disabled:!0},{value:"Медь"},{value:"Цинк"},{value:"Титан"},{value:"Хром"}],x={[s.m]:e.jsx(h,{htmlColor:"var(--brand-sapphire-60)"}),[s.s]:e.jsx(h,{htmlColor:"var(--brand-sapphire-60)"}),[s.xs]:e.jsx(B,{htmlColor:"var(--brand-sapphire-60)"})},F={[s.m]:e.jsx(v,{htmlColor:"var(--spectrum-red-60)"}),[s.s]:e.jsx(v,{htmlColor:"var(--spectrum-red-60)"}),[s.xs]:e.jsx(O,{htmlColor:"var(--spectrum-red-60)"})},_={[s.m]:e.jsx(g,{htmlColor:"var(--brand-sapphire-60)"}),[s.s]:e.jsx(g,{htmlColor:"var(--brand-sapphire-60)"}),[s.xs]:e.jsx(R,{htmlColor:"var(--brand-sapphire-60)"})},a=r=>e.jsx(d,{...r,children:A.map(({value:o,disabled:t})=>{const n=o.includes(" ")?"top":"center";return e.jsx(m,{value:o,disabled:t,onClick:()=>{console.log(o)},children:e.jsxs(c,{display:"flex",alignItems:n,gap:"8px",children:[e.jsx("div",{style:{position:"relative",top:"2px"},children:x[r.size]}),o]},o)},o)})});a.args={buttonChildren:"Dropdown Button",size:s.m,menuStyle:{minWidth:"200px"}};a.storyName="Dropdown по умолчанию";const i=r=>e.jsx(d,{...r,children:A.map(({value:o,disabled:t})=>{const n=o.includes(" ")?"top":"center";return e.jsx(m,{value:o,disabled:t,onClick:()=>{console.log(o)},children:e.jsxs(c,{display:"flex",alignItems:n,gap:"8px",children:[e.jsx("div",{style:{position:"relative",top:"2px"},children:x[r.size]}),o]},o)},o)})});i.args={buttonChildren:"Dropdown Button",size:s.m,menuStyle:{minWidth:"200px"},withPortal:!0};i.storyName="Dropdown с порталом";const l=r=>e.jsx(d,{...r,children:E.map(({value:o,disabled:t})=>{const n=o.includes(" ")?"top":"center";return e.jsx(m,{value:o,disabled:t,onClick:()=>{console.log(o)},children:e.jsxs(c,{display:"flex",alignItems:n,gap:"8px",children:[e.jsx("div",{style:{position:"relative",top:"4px"},children:F[r.size]}),e.jsx("div",{style:{flexGrow:1,width:"150px"},children:o}),e.jsx("div",{style:{position:"relative",top:"2px",marginLeft:"auto"},children:_[r.size]})]},o)},o)})});l.storyName="Dropdown с кастомизированными элементами списка";l.args={buttonChildren:"Dropdown Button",size:s.m,menuStyle:{minWidth:"200px"}};const p=r=>e.jsx(d,{...r,children:W.map(({value:o,disabled:t})=>{const n=o.includes(" ")?"top":"center";return e.jsx(m,{value:o,disabled:t,onClick:()=>{console.log(o)},children:e.jsxs(c,{display:"flex",alignItems:n,gap:"8px",children:[e.jsx("div",{style:{position:"relative",top:"2px"},children:x[r.size]}),o]},o)},o)})});p.args={buttonChildren:"Ед.",size:s.m,menuStyle:{minWidth:"100px"}};p.storyName="Dropdown с короткими значениями";var w,y,f;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
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
}`,...(T=(k=p.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const de=["DefaultDropdown","PortalDropdown","DropdownWithCustomElements","SmallDropdown"];export{a as DefaultDropdown,l as DropdownWithCustomElements,i as PortalDropdown,p as SmallDropdown,de as __namedExportsOrder,pe as default};
