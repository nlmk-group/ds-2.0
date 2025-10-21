import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as x}from"./index-BcJSXhQi.js";import{ax as d,B as o,ay as t}from"./TreeList-DLKvZc0E.js";import"./generateUUID-CwHnX0Hw.js";import{A as O}from"./index-BekOEyNL.js";import"./index-WHoiTdKD.js";import{B as r}from"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import{T as u}from"./index-DmffzHLE.js";import"./index-9k2b7QWQ.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-uupel1IP.js";import"./index-C5rKoyII.js";import{z as T}from"./32-BKmqX1Rw.js";import{a as m}from"./index-B-lxVbXh.js";import{a as S}from"./argsTypes-DeUvYDI9.js";import"./index-ChsGqxH_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";import"./v4-CtRu48qb.js";const N={"profile-drawer":"_profile-drawer_j0i5j_1"},k=n=>e.jsx(n,{}),oe={title:"Components/Drawer/Stories",component:d,decorators:[k],argTypes:S},p=n=>{const[a,s]=x.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{type:"button",onClick:()=>s(!0),children:"Открыть Drawer"}),e.jsx(d,{...n,isOpen:a,onClose:()=>{s(!1),m("drawerClosed")()},children:e.jsxs(r,{flexDirection:"column",justifyContent:"center",gap:"20px",children:[e.jsx(u,{color:"primary",children:"Содержимое Drawer"}),e.jsx(t,{label:"Имя"}),e.jsx(t,{label:"Номер"}),e.jsx(t,{label:"Почта"}),e.jsxs(r,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(o,{type:"button",children:"Отправить"}),e.jsx(o,{type:"button",variant:"secondary",children:"Отменить"})]})]})})]})};p.storyName="Drawer по умолчанию";const i=n=>{const[a,s]=x.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{type:"button",onClick:()=>s(!0),children:"Открыть Drawer слева"}),e.jsx(d,{...n,isOpen:a,onClose:()=>{s(!1),m("drawerClosed")()},children:e.jsxs(r,{flexDirection:"column",justifyContent:"center",gap:"20px",children:[e.jsx(u,{color:"primary",children:"Drawer, открывающийся слева"}),e.jsx(t,{label:"Имя"}),e.jsx(t,{label:"Номер"}),e.jsx(t,{label:"Почта"}),e.jsxs(r,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(o,{type:"button",children:"Отправить"}),e.jsx(o,{type:"button",variant:"secondary",children:"Отменить"})]})]})})]})};i.storyName="Drawer слева";i.args={position:"left"};const l=n=>{const[a,s]=x.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{type:"button",onClick:()=>s(!0),children:"Открыть Drawer слева"}),e.jsx(d,{...n,isOpen:a,onClose:()=>{s(!1),m("drawerClosed")()},children:e.jsxs(r,{flexDirection:"column",justifyContent:"center",gap:"20px",children:[e.jsx(r,{alignItems:"center",justifyContent:"center",children:e.jsx(u,{color:"primary",children:"Drawer, открывающийся слева"})}),e.jsx(t,{label:"Имя"}),e.jsx(t,{label:"Номер"}),e.jsx(t,{label:"Почта"}),e.jsxs(r,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(o,{type:"button",children:"Отправить"}),e.jsx(o,{type:"button",variant:"secondary",children:"Отменить"})]})]})})]})};l.storyName="Drawer без крестика";l.args={isViewCloseButton:!1};const c=n=>{const[a,s]=x.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{type:"button",onClick:()=>s(!0),children:"Открыть Drawer c примером профиля"}),e.jsx(d,{...n,isOpen:a,onClose:()=>{s(!1),m("drawerClosed")()},className:N["profile-drawer"],children:e.jsxs(r,{flexDirection:"column",height:"100%",children:[e.jsxs(r,{flexDirection:"column",height:"100%",px:"24px",children:[e.jsx(u,{variant:"Heading3",children:"Профиль пользователя"}),e.jsxs(r,{gap:"16px",alignItems:"center",children:[e.jsx(O,{}),e.jsx(u,{variant:"Body1-Medium",children:"Иван Иванов"})]}),e.jsxs(r,{style:{display:"flex",gap:"24px",flexDirection:"column",flexGrow:"1"},children:[e.jsx(t,{pseudo:!0,label:"Email",value:"maili@mail.com"}),e.jsx(t,{pseudo:!0,label:"Должность",value:"Руководитель проекта"}),e.jsx(t,{pseudo:!0,label:"Отдел",value:"Направление ИТ базовых процессов ТОиР"}),e.jsx(t,{pseudo:!0,label:"Полномочия",value:"Не указано"})]})]}),e.jsxs(r,{style:{display:"flex",gap:"8px",borderTop:"1px solid",borderColor:"var(--unique-divider)",padding:"24px"},children:[e.jsx(o,{startIcon:e.jsx(T,{}),type:"button",children:"Редактировать"}),e.jsx(o,{type:"button",variant:"secondary",children:"Закрыть"})]})]})})]})};c.storyName="Drawer с примером профиля";var y,j,f;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`(args: IDrawerProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  return <div>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Открыть Drawer
      </Button>
      <Drawer {...args} isOpen={isOpen} onClose={() => {
      setIsOpen(false);
      action('drawerClosed')();
    }}>
        <Box flexDirection="column" justifyContent="center" gap="20px">
          <Typography color="primary">Содержимое Drawer</Typography>
          <Input label="Имя" />
          <Input label="Номер" />
          <Input label="Почта" />
          <Box justifyContent="space-between" alignItems="center">
            <Button type="button">Отправить</Button>
            <Button type="button" variant="secondary">
              Отменить
            </Button>
          </Box>
        </Box>
      </Drawer>
    </div>;
}`,...(f=(j=p.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var w,h,b;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`(args: IDrawerProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  return <div>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Открыть Drawer слева
      </Button>
      <Drawer {...args} isOpen={isOpen} onClose={() => {
      setIsOpen(false);
      action('drawerClosed')();
    }}>
        <Box flexDirection="column" justifyContent="center" gap="20px">
          <Typography color="primary">Drawer, открывающийся слева</Typography>
          <Input label="Имя" />
          <Input label="Номер" />
          <Input label="Почта" />
          <Box justifyContent="space-between" alignItems="center">
            <Button type="button">Отправить</Button>
            <Button type="button" variant="secondary">
              Отменить
            </Button>
          </Box>
        </Box>
      </Drawer>
    </div>;
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var g,B,D;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`(args: IDrawerProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  return <div>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Открыть Drawer слева
      </Button>
      <Drawer {...args} isOpen={isOpen} onClose={() => {
      setIsOpen(false);
      action('drawerClosed')();
    }}>
        <Box flexDirection="column" justifyContent="center" gap="20px">
          <Box alignItems="center" justifyContent="center">
            <Typography color="primary">Drawer, открывающийся слева</Typography>
          </Box>
          <Input label="Имя" />
          <Input label="Номер" />
          <Input label="Почта" />
          <Box justifyContent="space-between" alignItems="center">
            <Button type="button">Отправить</Button>
            <Button type="button" variant="secondary">
              Отменить
            </Button>
          </Box>
        </Box>
      </Drawer>
    </div>;
}`,...(D=(B=l.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var I,C,v;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`(args: IDrawerProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  return <div>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Открыть Drawer c примером профиля
      </Button>
      <Drawer {...args} isOpen={isOpen} onClose={() => {
      setIsOpen(false);
      action('drawerClosed')();
    }} className={styles['profile-drawer']}>
        <Box flexDirection="column" height="100%">
          <Box flexDirection="column" height="100%" px="24px">
            <Typography variant="Heading3">Профиль пользователя</Typography>
            <Box gap="16px" alignItems="center">
              <Avatar />
              <Typography variant="Body1-Medium">Иван Иванов</Typography>
            </Box>
            <Box style={{
            display: 'flex',
            gap: '24px',
            flexDirection: 'column',
            flexGrow: '1'
          }}>
              <Input pseudo label="Email" value="maili@mail.com" />
              <Input pseudo label="Должность" value="Руководитель проекта" />
              <Input pseudo label="Отдел" value="Направление ИТ базовых процессов ТОиР" />
              <Input pseudo label="Полномочия" value="Не указано" />
            </Box>
          </Box>
          <Box style={{
          display: 'flex',
          gap: '8px',
          borderTop: '1px solid',
          borderColor: 'var(--unique-divider)',
          padding: '24px'
        }}>
            <Button startIcon={<IconEditPenOutlined24 />} type="button">
              Редактировать
            </Button>
            <Button type="button" variant="secondary">
              Закрыть
            </Button>
          </Box>
        </Box>
      </Drawer>
    </div>;
}`,...(v=(C=c.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const se=["DrawerDefault","DrawerLeft","DrawerWithoutCloseButton","DrawerWithProfile"];export{p as DrawerDefault,i as DrawerLeft,c as DrawerWithProfile,l as DrawerWithoutCloseButton,se as __namedExportsOrder,oe as default};
