import{j as e,a as r}from"./jsx-runtime-2xDJh5tt.js";import{r as m}from"./index-CBqU2yxZ.js";import{D as p,B as n,I as t}from"./index-BXHiB0mH.js";import"./generateUUID-C4dJbmAm.js";import"./index-DdUHXjGd.js";import"./index-D60oXbFF.js";import{B as o}from"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as d}from"./index-nWYpQihe.js";import"./index-tm22VGJr.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-D-OkhesI.js";import"./32-CjiFhZy5.js";import{a as C}from"./chunk-WFFRPTHA-B5TewAtn.js";import{a as O}from"./argsTypes-DzglXe4b.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-CMH8wQUv.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";const b=a=>e(o,{alignItems:"center",justifyContent:"center",st:{height:"100vh"},children:e(a,{})}),X={title:"Components/Drawer/Stories",component:p,decorators:[b],argTypes:O,parameters:{layout:"fullscreen"}},c=a=>{const[l,u]=m.useState(!1);return r("div",{children:[e(n,{onClick:()=>u(!0),children:"Открыть Drawer"}),e(p,{...a,isOpen:l,onClose:()=>{u(!1),C("drawerClosed")()},children:r(o,{flexDirection:"column",justifyContent:"center",gap:"var(--20-size)",children:[e(d,{color:"primary",children:"Содержимое Drawer"}),e(t,{label:"Имя"}),e(t,{label:"Номер"}),e(t,{label:"Почта"}),r(o,{justifyContent:"space-between",alignItems:"center",children:[e(n,{children:"Отправить"}),e(n,{variant:"secondary",children:"Отменить"})]})]})})]})};c.storyName="Drawer по умолчанию";const s=a=>{const[l,u]=m.useState(!1);return r("div",{children:[e(n,{onClick:()=>u(!0),children:"Открыть Drawer слева"}),e(p,{...a,isOpen:l,onClose:()=>{u(!1),C("drawerClosed")()},children:r(o,{flexDirection:"column",justifyContent:"center",gap:"var(--20-size)",children:[e(d,{color:"primary",children:"Drawer, открывающийся слева"}),e(t,{label:"Имя"}),e(t,{label:"Номер"}),e(t,{label:"Почта"}),r(o,{justifyContent:"space-between",alignItems:"center",children:[e(n,{children:"Отправить"}),e(n,{variant:"secondary",children:"Отменить"})]})]})})]})};s.storyName="Drawer слева";s.args={position:"left"};const i=a=>{const[l,u]=m.useState(!1);return r("div",{children:[e(n,{onClick:()=>u(!0),children:"Открыть Drawer слева"}),e(p,{...a,isOpen:l,onClose:()=>{u(!1),C("drawerClosed")()},children:r(o,{flexDirection:"column",justifyContent:"center",gap:"var(--20-size)",children:[e(o,{alignItems:"center",justifyContent:"center",children:e(d,{color:"primary",children:"Drawer, открывающийся слева"})}),e(t,{label:"Имя"}),e(t,{label:"Номер"}),e(t,{label:"Почта"}),r(o,{justifyContent:"space-between",alignItems:"center",children:[e(n,{children:"Отправить"}),e(n,{variant:"secondary",children:"Отменить"})]})]})})]})};i.storyName="Drawer без крестика";i.args={isViewCloseButton:!1};var f,B,D;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`(args: IDrawerProps): ReactNode => {
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
}`,...(D=(B=c.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var w,y,h;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`(args: IDrawerProps): ReactNode => {
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
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var g,I,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`(args: IDrawerProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  return <div>
      <Button onClick={() => setIsOpen(true)}>Открыть Drawer слева</Button>
      <Drawer {...args} isOpen={isOpen} onClose={() => {
      setIsOpen(false);
      action('drawerClosed')();
    }}>
        <Box flexDirection="column" justifyContent="center" gap="var(--20-size)">
          <Box alignItems='center' justifyContent="center">
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
}`,...(x=(I=i.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};const Y=["DrawerDefault","DrawerLeft","DrawerWithoutCloseButton"];export{c as DrawerDefault,s as DrawerLeft,i as DrawerWithoutCloseButton,Y as __namedExportsOrder,X as default};
