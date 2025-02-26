import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{r as u}from"./index-Bnop-kX6.js";import{x as p,B as r,I as t}from"./TreeList-Dj-weB7m.js";import"./generateUUID-DxloPTqA.js";import"./index-CpbWvJzH.js";import"./index-DppSdhCO.js";import{B as n}from"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as m}from"./index-qC5wYQgy.js";import"./index-CzMHMlM5.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-EMjLjg44.js";import"./index-DokmLR-l.js";import"./32-BuOLl5Xl.js";import{a as d}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{a as g}from"./argsTypes-DzglXe4b.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./index-B5g4YLzC.js";import"./v4-CQkTLCs1.js";const I=o=>e.jsx(n,{alignItems:"center",justifyContent:"center",st:{height:"100vh"},children:e.jsx(o,{})}),M={title:"Components/Drawer/Stories",component:p,decorators:[I],argTypes:g,parameters:{layout:"fullscreen"}},c=o=>{const[l,s]=u.useState(!1);return e.jsxs("div",{children:[e.jsx(r,{onClick:()=>s(!0),children:"Открыть Drawer"}),e.jsx(p,{...o,isOpen:l,onClose:()=>{s(!1),d("drawerClosed")()},children:e.jsxs(n,{flexDirection:"column",justifyContent:"center",gap:"var(--20-size)",children:[e.jsx(m,{color:"primary",children:"Содержимое Drawer"}),e.jsx(t,{label:"Имя"}),e.jsx(t,{label:"Номер"}),e.jsx(t,{label:"Почта"}),e.jsxs(n,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(r,{children:"Отправить"}),e.jsx(r,{variant:"secondary",children:"Отменить"})]})]})})]})};c.storyName="Drawer по умолчанию";const a=o=>{const[l,s]=u.useState(!1);return e.jsxs("div",{children:[e.jsx(r,{onClick:()=>s(!0),children:"Открыть Drawer слева"}),e.jsx(p,{...o,isOpen:l,onClose:()=>{s(!1),d("drawerClosed")()},children:e.jsxs(n,{flexDirection:"column",justifyContent:"center",gap:"var(--20-size)",children:[e.jsx(m,{color:"primary",children:"Drawer, открывающийся слева"}),e.jsx(t,{label:"Имя"}),e.jsx(t,{label:"Номер"}),e.jsx(t,{label:"Почта"}),e.jsxs(n,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(r,{children:"Отправить"}),e.jsx(r,{variant:"secondary",children:"Отменить"})]})]})})]})};a.storyName="Drawer слева";a.args={position:"left"};const i=o=>{const[l,s]=u.useState(!1);return e.jsxs("div",{children:[e.jsx(r,{onClick:()=>s(!0),children:"Открыть Drawer слева"}),e.jsx(p,{...o,isOpen:l,onClose:()=>{s(!1),d("drawerClosed")()},children:e.jsxs(n,{flexDirection:"column",justifyContent:"center",gap:"var(--20-size)",children:[e.jsx(n,{alignItems:"center",justifyContent:"center",children:e.jsx(m,{color:"primary",children:"Drawer, открывающийся слева"})}),e.jsx(t,{label:"Имя"}),e.jsx(t,{label:"Номер"}),e.jsx(t,{label:"Почта"}),e.jsxs(n,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(r,{children:"Отправить"}),e.jsx(r,{variant:"secondary",children:"Отменить"})]})]})})]})};i.storyName="Drawer без крестика";i.args={isViewCloseButton:!1};var x,j,f;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`(args: IDrawerProps): ReactNode => {
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
