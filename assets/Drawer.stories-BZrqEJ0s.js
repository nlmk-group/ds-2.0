import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{r as u}from"./index-Cu9bd8lq.js";import{D as p,n as r,I as t}from"./index-ZojCmbpv.js";import"./generateUUID-CG7VmJJw.js";import"./index-XsxLq1mj.js";import"./index-AXtJih2E.js";import{B as n}from"./index-ED8ccfsJ.js";import"./index-CWQ0GGcJ.js";import{T as m}from"./index-BHxe-dnq.js";import"./index-iWHyAWYR.js";import"./index-BztLnIMF.js";import"./index-Udc0C2Qz.js";import"./index-CPdpS9Jm.js";import"./32-Bjhqu_Pf.js";import{a as d}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{a as g}from"./argsTypes-DzglXe4b.js";import"./clsx-B-dksMZM.js";import"./index-Ckls47V4.js";import"./types-CpBSVUgC.js";import"./get-CeVb1zXw.js";import"./index-7KVZVlDS.js";import"./v4-CQkTLCs1.js";const I=o=>e.jsx(n,{alignItems:"center",justifyContent:"center",st:{height:"100vh"},children:e.jsx(o,{})}),M={title:"Components/Drawer/Stories",component:p,decorators:[I],argTypes:g,parameters:{layout:"fullscreen"}},c=o=>{const[l,s]=u.useState(!1);return e.jsxs("div",{children:[e.jsx(r,{onClick:()=>s(!0),children:"Открыть Drawer"}),e.jsx(p,{...o,isOpen:l,onClose:()=>{s(!1),d("drawerClosed")()},children:e.jsxs(n,{flexDirection:"column",justifyContent:"center",gap:"var(--20-size)",children:[e.jsx(m,{color:"primary",children:"Содержимое Drawer"}),e.jsx(t,{label:"Имя"}),e.jsx(t,{label:"Номер"}),e.jsx(t,{label:"Почта"}),e.jsxs(n,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(r,{children:"Отправить"}),e.jsx(r,{variant:"secondary",children:"Отменить"})]})]})})]})};c.storyName="Drawer по умолчанию";const a=o=>{const[l,s]=u.useState(!1);return e.jsxs("div",{children:[e.jsx(r,{onClick:()=>s(!0),children:"Открыть Drawer слева"}),e.jsx(p,{...o,isOpen:l,onClose:()=>{s(!1),d("drawerClosed")()},children:e.jsxs(n,{flexDirection:"column",justifyContent:"center",gap:"var(--20-size)",children:[e.jsx(m,{color:"primary",children:"Drawer, открывающийся слева"}),e.jsx(t,{label:"Имя"}),e.jsx(t,{label:"Номер"}),e.jsx(t,{label:"Почта"}),e.jsxs(n,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(r,{children:"Отправить"}),e.jsx(r,{variant:"secondary",children:"Отменить"})]})]})})]})};a.storyName="Drawer слева";a.args={position:"left"};const i=o=>{const[l,s]=u.useState(!1);return e.jsxs("div",{children:[e.jsx(r,{onClick:()=>s(!0),children:"Открыть Drawer слева"}),e.jsx(p,{...o,isOpen:l,onClose:()=>{s(!1),d("drawerClosed")()},children:e.jsxs(n,{flexDirection:"column",justifyContent:"center",gap:"var(--20-size)",children:[e.jsx(n,{alignItems:"center",justifyContent:"center",children:e.jsx(m,{color:"primary",children:"Drawer, открывающийся слева"})}),e.jsx(t,{label:"Имя"}),e.jsx(t,{label:"Номер"}),e.jsx(t,{label:"Почта"}),e.jsxs(n,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(r,{children:"Отправить"}),e.jsx(r,{variant:"secondary",children:"Отменить"})]})]})})]})};i.storyName="Drawer без крестика";i.args={isViewCloseButton:!1};var x,j,f;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`(args: IDrawerProps): ReactNode => {
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
}`,...(C=(B=i.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const Q=["DrawerDefault","DrawerLeft","DrawerWithoutCloseButton"];export{c as DrawerDefault,a as DrawerLeft,i as DrawerWithoutCloseButton,Q as __namedExportsOrder,M as default};
