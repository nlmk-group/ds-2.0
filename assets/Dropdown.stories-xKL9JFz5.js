import{j as e}from"./iframe-BPtLBEuk.js";import{E as v,a as n,b as C}from"./index-C5OaxW6Y.js";import{B as h}from"./index-d_6bz31j.js";import{D as s}from"./index-Br1RxJPP.js";import{D as t}from"./index-Y6SCCDLY.js";import{g as b}from"./styles.module-BGEDXogi.js";import{a as j}from"./argsTypes-BSiRHD63.js";import{I as z}from"./16-DwnwCPW9.js";import{I as y}from"./24-Q7FkUsyZ.js";import{I as k,a as f,b as B,c as S,d as O}from"./24-DOwtHgIx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C9_7xPUt.js";import"./clsx-B-dksMZM.js";import"./index-D-pLh_NR.js";import"./useFloatingReferenceSync-C_yD6V-Z.js";import"./index-C1n_EcZz.js";import"./index-etTcxdeZ.js";import"./index-jNLleeyk.js";import"./types-TdnjS80C.js";import"./floating-ui.react-tm3IGrEk.js";import"./index-C1wwabMN.js";import"./IconsDirectory.module-CEwWgW3i.js";const M=r=>e.jsx(h,{alignItems:"flex-start",justifyContent:"center",st:{minHeight:"300px",marginTop:"40px",borderRadius:"10px",overflow:"visible"},className:b.wrapper,children:e.jsx(r,{})}),no={title:"Components/Dropdown/Stories",component:s,decorators:[M],argTypes:j},w=[{value:"Сталь"},{value:"Железо"},{value:"Чугун",disabled:!0},{value:"Медь"},{value:"Цинк"},{value:"Титан"},{value:"Хром"}],D=[{value:"Ag"},{value:"N"},{value:"Cu",disabled:!0},{value:"Au"},{value:"Fe"},{value:"Ti"},{value:"C"}],T=[{value:"Металлургический комбинат"},{value:"Железо"},{value:"Чугун",disabled:!0},{value:"Медь"},{value:"Цинк"},{value:"Титан"},{value:"Хром"}],I={[n.m]:e.jsx(y,{htmlColor:"var(--brand-sapphire-60)"}),[n.s]:e.jsx(y,{htmlColor:"var(--brand-sapphire-60)"}),[n.xs]:e.jsx(z,{htmlColor:"var(--brand-sapphire-60)"})},W={[n.m]:e.jsx(f,{htmlColor:"var(--spectrum-red-60)"}),[n.s]:e.jsx(f,{htmlColor:"var(--spectrum-red-60)"}),[n.xs]:e.jsx(k,{htmlColor:"var(--spectrum-red-60)"})},A={[n.m]:e.jsx(S,{htmlColor:"var(--brand-sapphire-60)"}),[n.s]:e.jsx(S,{htmlColor:"var(--brand-sapphire-60)"}),[n.xs]:e.jsx(B,{htmlColor:"var(--brand-sapphire-60)"})},l=r=>e.jsx(s,{...r,children:w.map(({value:o,disabled:a})=>{const i=o.includes(" ")?"top":"center";return e.jsx(t,{value:o,disabled:a,onClick:()=>{console.log(o)},children:e.jsxs(h,{display:"flex",alignItems:i,gap:"8px",children:[e.jsx("div",{style:{position:"relative",top:"2px"},children:I[r.size]}),o]},o)},o)})});l.args={buttonChildren:"Dropdown Button",size:n.m,menuStyle:{minWidth:"200px"}};l.storyName="Dropdown по умолчанию";const p=r=>e.jsx(s,{...r,children:w.map(({value:o,disabled:a})=>{const i=o.includes(" ")?"top":"center";return e.jsx(t,{value:o,disabled:a,onClick:()=>{console.log(o)},children:e.jsxs(h,{display:"flex",alignItems:i,gap:"8px",children:[e.jsx("div",{style:{position:"relative",top:"2px"},children:I[r.size]}),o]},o)},o)})});p.args={buttonChildren:"Dropdown Button",size:n.m,menuStyle:{minWidth:"200px"},withPortal:!0};p.storyName="Dropdown с порталом";const d=r=>e.jsx(s,{...r,children:T.map(({value:o,disabled:a})=>{const i=o.includes(" ")?"top":"center";return e.jsx(t,{value:o,disabled:a,onClick:()=>{console.log(o)},children:e.jsxs(h,{display:"flex",alignItems:i,gap:"8px",children:[e.jsx("div",{style:{position:"relative",top:"4px"},children:W[r.size]}),e.jsx("div",{style:{flexGrow:1,width:"150px"},children:o}),e.jsx("div",{style:{position:"relative",top:"2px",marginLeft:"auto"},children:A[r.size]})]},o)},o)})});d.storyName="Dropdown с кастомизированными элементами списка";d.args={buttonChildren:"Dropdown Button",size:n.m,menuStyle:{minWidth:"200px"}};const c=r=>e.jsx(s,{...r,children:D.map(({value:o,disabled:a})=>{const i=o.includes(" ")?"top":"center";return e.jsx(t,{value:o,disabled:a,onClick:()=>{console.log(o)},children:e.jsxs(h,{display:"flex",alignItems:i,gap:"8px",children:[e.jsx("div",{style:{position:"relative",top:"2px"},children:I[r.size]}),o]},o)},o)})});c.args={buttonChildren:"Ед.",size:n.m,menuStyle:{minWidth:"100px"}};c.storyName="Dropdown с короткими значениями";const u=r=>e.jsx(s,{...r,children:w.map(({value:o,disabled:a})=>e.jsx(t,{value:o,disabled:a,onClick:()=>console.log(o),children:o},o))});u.args={buttonChildren:"Фильтр",size:n.m,variant:v.primary,color:C.brand,startIcon:e.jsx(y,{}),startBadge:"3",menuStyle:{minWidth:"150px"},buttonStyle:{fontWeight:"bold"}};u.storyName="Dropdown с Button возможностями";const m=r=>e.jsx(s,{...r,children:w.map(({value:o,disabled:a})=>e.jsx(t,{value:o,disabled:a,onClick:()=>console.log(o),children:o},o))});m.args={iconButton:e.jsx(O,{}),size:n.m,variant:v.secondary,menuStyle:{minWidth:"150px"}};m.storyName="Dropdown с кастомной иконкой";const x=r=>e.jsxs(h,{display:"flex",gap:"16px",flexWrap:"wrap",children:[e.jsx(s,{...r,variant:v.primary,buttonChildren:"Primary",children:D.map(({value:o,disabled:a})=>e.jsx(t,{value:o,disabled:a,children:o},o))}),e.jsx(s,{...r,variant:v.secondary,buttonChildren:"Secondary",children:D.map(({value:o,disabled:a})=>e.jsx(t,{value:o,disabled:a,children:o},o))})]});x.args={size:n.m,menuStyle:{minWidth:"120px"}};x.storyName="Dropdown варианты";l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
  return <Dropdown {...args}>
      {dropdownOptions.map(({
      value,
      disabled
    }) => <DropdownMenuItem key={value} value={value} disabled={disabled} onClick={() => console.log(value)}>
          {value}
        </DropdownMenuItem>)}
    </Dropdown>;
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
  return <Dropdown {...args}>
      {dropdownOptions.map(({
      value,
      disabled
    }) => <DropdownMenuItem key={value} value={value} disabled={disabled} onClick={() => console.log(value)}>
          {value}
        </DropdownMenuItem>)}
    </Dropdown>;
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`(args: IDropdownProps): ReactNode => {
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
}`,...x.parameters?.docs?.source}}};const ao=["DefaultDropdown","PortalDropdown","DropdownWithCustomElements","SmallDropdown","DropdownWithButtonFeatures","DropdownWithCustomIcon","DropdownVariantsShowcase"];export{l as DefaultDropdown,x as DropdownVariantsShowcase,u as DropdownWithButtonFeatures,d as DropdownWithCustomElements,m as DropdownWithCustomIcon,p as PortalDropdown,c as SmallDropdown,ao as __namedExportsOrder,no as default};
