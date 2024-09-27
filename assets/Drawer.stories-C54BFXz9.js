import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{r as u}from"./index-DQ2WTIsS.js";import{D as p,n as r,I as t}from"./index-CMhB4zJG.js";import"./generateUUID-DB8_0F2G.js";import"./index-C04uUQ85.js";import"./index-CSbymPMC.js";import{B as n}from"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import{T as m}from"./index-ehXB0alm.js";import"./index-5BTuYEoj.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-BThqyTlu.js";import"./32-Y-7Ywnum.js";import{a as d}from"./chunk-454WOBUV-CM0pFb8Z.js";import{a as g}from"./argsTypes-DzglXe4b.js";import"./clsx-B-dksMZM.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./index-BKbm6zW0.js";import"./v4-CQkTLCs1.js";const I=o=>e.jsx(n,{alignItems:"center",justifyContent:"center",st:{height:"100vh"},children:e.jsx(o,{})}),Q={title:"Components/Drawer/Stories",component:p,decorators:[I],argTypes:g,parameters:{layout:"fullscreen"}},c=o=>{const[l,s]=u.useState(!1);return e.jsxs("div",{children:[e.jsx(r,{onClick:()=>s(!0),children:"Открыть Drawer"}),e.jsx(p,{...o,isOpen:l,onClose:()=>{s(!1),d("drawerClosed")()},children:e.jsxs(n,{flexDirection:"column",justifyContent:"center",gap:"var(--20-size)",children:[e.jsx(m,{color:"primary",children:"Содержимое Drawer"}),e.jsx(t,{label:"Имя"}),e.jsx(t,{label:"Номер"}),e.jsx(t,{label:"Почта"}),e.jsxs(n,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(r,{children:"Отправить"}),e.jsx(r,{variant:"secondary",children:"Отменить"})]})]})})]})};c.storyName="Drawer по умолчанию";const a=o=>{const[l,s]=u.useState(!1);return e.jsxs("div",{children:[e.jsx(r,{onClick:()=>s(!0),children:"Открыть Drawer слева"}),e.jsx(p,{...o,isOpen:l,onClose:()=>{s(!1),d("drawerClosed")()},children:e.jsxs(n,{flexDirection:"column",justifyContent:"center",gap:"var(--20-size)",children:[e.jsx(m,{color:"primary",children:"Drawer, открывающийся слева"}),e.jsx(t,{label:"Имя"}),e.jsx(t,{label:"Номер"}),e.jsx(t,{label:"Почта"}),e.jsxs(n,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(r,{children:"Отправить"}),e.jsx(r,{variant:"secondary",children:"Отменить"})]})]})})]})};a.storyName="Drawer слева";a.args={position:"left"};const i=o=>{const[l,s]=u.useState(!1);return e.jsxs("div",{children:[e.jsx(r,{onClick:()=>s(!0),children:"Открыть Drawer слева"}),e.jsx(p,{...o,isOpen:l,onClose:()=>{s(!1),d("drawerClosed")()},children:e.jsxs(n,{flexDirection:"column",justifyContent:"center",gap:"var(--20-size)",children:[e.jsx(n,{alignItems:"center",justifyContent:"center",children:e.jsx(m,{color:"primary",children:"Drawer, открывающийся слева"})}),e.jsx(t,{label:"Имя"}),e.jsx(t,{label:"Номер"}),e.jsx(t,{label:"Почта"}),e.jsxs(n,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(r,{children:"Отправить"}),e.jsx(r,{variant:"secondary",children:"Отменить"})]})]})})]})};i.storyName="Drawer без крестика";i.args={isViewCloseButton:!1};var x,j,f;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`(args: IDrawerProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  return <div>
      <Button onClick={() => setIsOpen(true)}>Открыть Drawer</Button>
      <Drawer {...args} isOpen={isOpen} onClose={() => {
      setIsOpen(false);
      action('drawerClosed')();
    }}>
        <Box flexDirection="column" justifyContent="center" gap="var(--20-size)">
          <Typography color="primary">Содержимое Drawer</Typography>
          <Input label="Имя" />
          <Input label="Номер" />
          <Input label="Почта" />
          <Box justifyContent="space-between" alignItems="center">
            <Button>Отправить</Button>
            <Button variant="secondary">Отменить</Button>
          </Box>
        </Box>
      </Drawer>
    </div>;
}`,...(f=(j=c.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var w,y,D;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`(args: IDrawerProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  return <div>
      <Button onClick={() => setIsOpen(true)}>Открыть Drawer слева</Button>
      <Drawer {...args} isOpen={isOpen} onClose={() => {
      setIsOpen(false);
      action('drawerClosed')();
    }}>
        <Box flexDirection="column" justifyContent="center" gap="var(--20-size)">
          <Typography color="primary">Drawer, открывающийся слева</Typography>
          <Input label="Имя" />
          <Input label="Номер" />
          <Input label="Почта" />
          <Box justifyContent="space-between" alignItems="center">
            <Button>Отправить</Button>
            <Button variant="secondary">Отменить</Button>
          </Box>
        </Box>
      </Drawer>
    </div>;
}`,...(D=(y=a.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var h,B,C;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`(args: IDrawerProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  return <div>
      <Button onClick={() => setIsOpen(true)}>Открыть Drawer слева</Button>
      <Drawer {...args} isOpen={isOpen} onClose={() => {
      setIsOpen(false);
      action('drawerClosed')();
    }}>
        <Box flexDirection="column" justifyContent="center" gap="var(--20-size)">
          <Box alignItems="center" justifyContent="center">
            <Typography color="primary">Drawer, открывающийся слева</Typography>
          </Box>
          <Input label="Имя" />
          <Input label="Номер" />
          <Input label="Почта" />
          <Box justifyContent="space-between" alignItems="center">
            <Button>Отправить</Button>
            <Button variant="secondary">Отменить</Button>
          </Box>
        </Box>
      </Drawer>
    </div>;
}`,...(C=(B=i.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const U=["DrawerDefault","DrawerLeft","DrawerWithoutCloseButton"];export{c as DrawerDefault,a as DrawerLeft,i as DrawerWithoutCloseButton,U as __namedExportsOrder,Q as default};
