import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{y as s,z as t,f as v,g as n,h as H}from"./TreeList-BqxVwK_V.js";import"./generateUUID-Cr6BF8sx.js";import"./index-D9qQUMnP.js";import"./index-WHoiTdKD.js";import{B as h}from"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-53N2drcz.js";import"./index-VmJK6twV.js";import"./index-BPWT-JIL.js";import"./index-BQAMZg9d.js";import"./index-C1EIKtiR.js";import"./index-BcJSXhQi.js";import{c as J,d as y,e as K,f as S,g as Q,h as f,i as U}from"./32-DMwn_7G4.js";import{g as X}from"./styles.module-m0Zsy3Hi.js";import{a as Y}from"./argsTypes-Btn9oG6S.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";const Z=r=>e.jsx(h,{alignItems:"flex-start",justifyContent:"center",st:{height:"300px",marginTop:"40px",borderRadius:"10px"},className:X.wrapper,children:e.jsx(r,{})}),zo={title:"Components/Dropdown/Stories",component:s,decorators:[Z],argTypes:Y},w=[{value:"Сталь"},{value:"Железо"},{value:"Чугун",disabled:!0},{value:"Медь"},{value:"Цинк"},{value:"Титан"},{value:"Хром"}],D=[{value:"Ag"},{value:"N"},{value:"Cu",disabled:!0},{value:"Au"},{value:"Fe"},{value:"Ti"},{value:"C"}],$=[{value:"Металлургический комбинат"},{value:"Железо"},{value:"Чугун",disabled:!0},{value:"Медь"},{value:"Цинк"},{value:"Титан"},{value:"Хром"}],I={[n.m]:e.jsx(y,{htmlColor:"var(--brand-sapphire-60)"}),[n.s]:e.jsx(y,{htmlColor:"var(--brand-sapphire-60)"}),[n.xs]:e.jsx(J,{htmlColor:"var(--brand-sapphire-60)"})},oo={[n.m]:e.jsx(S,{htmlColor:"var(--spectrum-red-60)"}),[n.s]:e.jsx(S,{htmlColor:"var(--spectrum-red-60)"}),[n.xs]:e.jsx(K,{htmlColor:"var(--spectrum-red-60)"})},eo={[n.m]:e.jsx(f,{htmlColor:"var(--brand-sapphire-60)"}),[n.s]:e.jsx(f,{htmlColor:"var(--brand-sapphire-60)"}),[n.xs]:e.jsx(Q,{htmlColor:"var(--brand-sapphire-60)"})},l=r=>e.jsx(s,{...r,children:w.map(({value:o,disabled:a})=>{const i=o.includes(" ")?"top":"center";return e.jsx(t,{value:o,disabled:a,onClick:()=>{console.log(o)},children:e.jsxs(h,{display:"flex",alignItems:i,gap:"8px",children:[e.jsx("div",{style:{position:"relative",top:"2px"},children:I[r.size]}),o]},o)},o)})});l.args={buttonChildren:"Dropdown Button",size:n.m,menuStyle:{minWidth:"200px"}};l.storyName="Dropdown по умолчанию";const p=r=>e.jsx(s,{...r,children:w.map(({value:o,disabled:a})=>{const i=o.includes(" ")?"top":"center";return e.jsx(t,{value:o,disabled:a,onClick:()=>{console.log(o)},children:e.jsxs(h,{display:"flex",alignItems:i,gap:"8px",children:[e.jsx("div",{style:{position:"relative",top:"2px"},children:I[r.size]}),o]},o)},o)})});p.args={buttonChildren:"Dropdown Button",size:n.m,menuStyle:{minWidth:"200px"},withPortal:!0};p.storyName="Dropdown с порталом";const d=r=>e.jsx(s,{...r,children:$.map(({value:o,disabled:a})=>{const i=o.includes(" ")?"top":"center";return e.jsx(t,{value:o,disabled:a,onClick:()=>{console.log(o)},children:e.jsxs(h,{display:"flex",alignItems:i,gap:"8px",children:[e.jsx("div",{style:{position:"relative",top:"4px"},children:oo[r.size]}),e.jsx("div",{style:{flexGrow:1,width:"150px"},children:o}),e.jsx("div",{style:{position:"relative",top:"2px",marginLeft:"auto"},children:eo[r.size]})]},o)},o)})});d.storyName="Dropdown с кастомизированными элементами списка";d.args={buttonChildren:"Dropdown Button",size:n.m,menuStyle:{minWidth:"200px"}};const c=r=>e.jsx(s,{...r,children:D.map(({value:o,disabled:a})=>{const i=o.includes(" ")?"top":"center";return e.jsx(t,{value:o,disabled:a,onClick:()=>{console.log(o)},children:e.jsxs(h,{display:"flex",alignItems:i,gap:"8px",children:[e.jsx("div",{style:{position:"relative",top:"2px"},children:I[r.size]}),o]},o)},o)})});c.args={buttonChildren:"Ед.",size:n.m,menuStyle:{minWidth:"100px"}};c.storyName="Dropdown с короткими значениями";const u=r=>e.jsx(s,{...r,children:w.map(({value:o,disabled:a})=>e.jsx(t,{value:o,disabled:a,onClick:()=>console.log(o),children:o},o))});u.args={buttonChildren:"Фильтр",size:n.m,variant:v.primary,color:H.brand,startIcon:e.jsx(y,{}),startBadge:"3",menuStyle:{minWidth:"150px"},buttonStyle:{fontWeight:"bold"}};u.storyName="Dropdown с Button возможностями";const m=r=>e.jsx(s,{...r,children:w.map(({value:o,disabled:a})=>e.jsx(t,{value:o,disabled:a,onClick:()=>console.log(o),children:o},o))});m.args={iconButton:e.jsx(U,{}),size:n.m,variant:v.secondary,menuStyle:{minWidth:"150px"}};m.storyName="Dropdown с кастомной иконкой";const x=r=>e.jsxs(h,{display:"flex",gap:"16px",flexWrap:"wrap",children:[e.jsx(s,{...r,variant:v.primary,buttonChildren:"Primary",children:D.map(({value:o,disabled:a})=>e.jsx(t,{value:o,disabled:a,children:o},o))}),e.jsx(s,{...r,variant:v.secondary,buttonChildren:"Secondary",children:D.map(({value:o,disabled:a})=>e.jsx(t,{value:o,disabled:a,children:o},o))})]});x.args={size:n.m,menuStyle:{minWidth:"120px"}};x.storyName="Dropdown варианты";var C,b,j;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
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
}`,...(j=(b=l.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var z,k,B;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
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
}`,...(B=(k=p.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var O,M,T;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
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
}`,...(T=(M=d.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var W,A,N;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
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
}`,...(N=(A=c.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var R,P,E;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
  return <Dropdown {...args}>
      {dropdownOptions.map(({
      value,
      disabled
    }) => <DropdownMenuItem key={value} value={value} disabled={disabled} onClick={() => console.log(value)}>
          {value}
        </DropdownMenuItem>)}
    </Dropdown>;
}`,...(E=(P=u.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var F,V,_;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
  return <Dropdown {...args}>
      {dropdownOptions.map(({
      value,
      disabled
    }) => <DropdownMenuItem key={value} value={value} disabled={disabled} onClick={() => console.log(value)}>
          {value}
        </DropdownMenuItem>)}
    </Dropdown>;
}`,...(_=(V=m.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var G,L,q;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
  return <Box display="flex" gap="16px" flexWrap="wrap">
      <Dropdown {...args} variant={EButtonVariant.primary} buttonChildren="Primary">
        {dropdownOptionsSmall.map(({
        value,
        disabled
      }) => <DropdownMenuItem key={value} value={value} disabled={disabled}>
            {value}
          </DropdownMenuItem>)}
      </Dropdown>

      <Dropdown {...args} variant={EButtonVariant.secondary} buttonChildren="Secondary">
        {dropdownOptionsSmall.map(({
        value,
        disabled
      }) => <DropdownMenuItem key={value} value={value} disabled={disabled}>
            {value}
          </DropdownMenuItem>)}
      </Dropdown>
    </Box>;
}`,...(q=(L=x.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};const ko=["DefaultDropdown","PortalDropdown","DropdownWithCustomElements","SmallDropdown","DropdownWithButtonFeatures","DropdownWithCustomIcon","DropdownVariantsShowcase"];export{l as DefaultDropdown,x as DropdownVariantsShowcase,u as DropdownWithButtonFeatures,d as DropdownWithCustomElements,m as DropdownWithCustomIcon,p as PortalDropdown,c as SmallDropdown,ko as __namedExportsOrder,zo as default};
