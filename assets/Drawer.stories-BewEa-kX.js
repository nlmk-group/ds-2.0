import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{r as u}from"./index-Bnop-kX6.js";import{x as c,B as t,I as r}from"./VideoWindow-DEkDdpx_.js";import"./generateUUID-Z4ktHL_f.js";import"./index-CkAXh9uP.js";import"./index-DppSdhCO.js";import{B as n}from"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as m}from"./index-qC5wYQgy.js";import"./index-CvRFF9aG.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-D_lYSbi8.js";import"./index-DokmLR-l.js";import"./32-DmPReyKt.js";import{a as d}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{a as C}from"./argsTypes-DzglXe4b.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";import"./v4-CQkTLCs1.js";const g=o=>e.jsx(n,{alignItems:"center",justifyContent:"center",st:{height:"100vh"},children:e.jsx(o,{})}),Q={title:"Components/Drawer/Stories",component:c,decorators:[g],argTypes:C,parameters:{layout:"fullscreen"}},p=o=>{const[l,s]=u.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{type:"button",onClick:()=>s(!0),children:"Открыть Drawer"}),e.jsx(c,{...o,isOpen:l,onClose:()=>{s(!1),d("drawerClosed")()},children:e.jsxs(n,{flexDirection:"column",justifyContent:"center",gap:"var(--20-size)",children:[e.jsx(m,{color:"primary",children:"Содержимое Drawer"}),e.jsx(r,{label:"Имя"}),e.jsx(r,{label:"Номер"}),e.jsx(r,{label:"Почта"}),e.jsxs(n,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(t,{type:"button",children:"Отправить"}),e.jsx(t,{type:"button",variant:"secondary",children:"Отменить"})]})]})})]})};p.storyName="Drawer по умолчанию";const a=o=>{const[l,s]=u.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{type:"button",onClick:()=>s(!0),children:"Открыть Drawer слева"}),e.jsx(c,{...o,isOpen:l,onClose:()=>{s(!1),d("drawerClosed")()},children:e.jsxs(n,{flexDirection:"column",justifyContent:"center",gap:"var(--20-size)",children:[e.jsx(m,{color:"primary",children:"Drawer, открывающийся слева"}),e.jsx(r,{label:"Имя"}),e.jsx(r,{label:"Номер"}),e.jsx(r,{label:"Почта"}),e.jsxs(n,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(t,{type:"button",children:"Отправить"}),e.jsx(t,{type:"button",variant:"secondary",children:"Отменить"})]})]})})]})};a.storyName="Drawer слева";a.args={position:"left"};const i=o=>{const[l,s]=u.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{type:"button",onClick:()=>s(!0),children:"Открыть Drawer слева"}),e.jsx(c,{...o,isOpen:l,onClose:()=>{s(!1),d("drawerClosed")()},children:e.jsxs(n,{flexDirection:"column",justifyContent:"center",gap:"var(--20-size)",children:[e.jsx(n,{alignItems:"center",justifyContent:"center",children:e.jsx(m,{color:"primary",children:"Drawer, открывающийся слева"})}),e.jsx(r,{label:"Имя"}),e.jsx(r,{label:"Номер"}),e.jsx(r,{label:"Почта"}),e.jsxs(n,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(t,{type:"button",children:"Отправить"}),e.jsx(t,{type:"button",variant:"secondary",children:"Отменить"})]})]})})]})};i.storyName="Drawer без крестика";i.args={isViewCloseButton:!1};var y,x,j;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`(args: IDrawerProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  return <div>
      <Button type="button" onClick={() => setIsOpen(true)}>Открыть Drawer</Button>
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
            <Button type="button">Отправить</Button>
            <Button type="button" variant="secondary">Отменить</Button>
          </Box>
        </Box>
      </Drawer>
    </div>;
}`,...(j=(x=p.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var f,w,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`(args: IDrawerProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  return <div>
      <Button type="button" onClick={() => setIsOpen(true)}>Открыть Drawer слева</Button>
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
            <Button type="button">Отправить</Button>
            <Button type="button" variant="secondary">Отменить</Button>
          </Box>
        </Box>
      </Drawer>
    </div>;
}`,...(b=(w=a.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var D,h,B;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`(args: IDrawerProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  return <div>
      <Button type="button" onClick={() => setIsOpen(true)}>Открыть Drawer слева</Button>
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
            <Button type="button">Отправить</Button>
            <Button type="button" variant="secondary">Отменить</Button>
          </Box>
        </Box>
      </Drawer>
    </div>;
}`,...(B=(h=i.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};const U=["DrawerDefault","DrawerLeft","DrawerWithoutCloseButton"];export{p as DrawerDefault,a as DrawerLeft,i as DrawerWithoutCloseButton,U as __namedExportsOrder,Q as default};
