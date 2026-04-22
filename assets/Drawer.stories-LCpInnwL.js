import{j as e,r as x}from"./iframe-Bo4nALm7.js";import{A as f}from"./index-5mM__hj5.js";import{B as t}from"./index-CptZomEK.js";import{B as o}from"./index-BdFgkFQG.js";import{D as d}from"./index-DCWDgjRo.js";import{I as r}from"./index-rp9NcFhw.js";import{T as u}from"./index-CUIhMP_o.js";import{a as h}from"./argsTypes-2snn11dQ.js";import{I as j}from"./24-85pGpdFN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DUNZSITs.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-DrwGWWyr.js";import"./24-DMCeAA-V.js";import"./24-DO_3r_fK.js";import"./24-BysagIQq.js";import"./24-D5XAI_AH.js";import"./24-BfwlYFIe.js";import"./24-CbRb0MeE.js";import"./24-NHhFZcqx.js";import"./24-gy5ADEN_.js";import"./24-CNhMk3Hk.js";import"./16-aMqW81vf.js";import"./24-Blxmuo2i.js";import"./24-C8hAPZTM.js";import"./16-BT8X9gPM.js";import"./16-CUTQAt8-.js";import"./16-BgwH21Xk.js";import"./16-Bi9OWKG5.js";import"./16-KygOpizh.js";import"./index-DcKSVsFY.js";import"./types-TdnjS80C.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-yK1xfIEO.js";const b="Drawer-module__wrapper___WJ-XD",w={wrapper:b,"profile-drawer":"Drawer-module__profile-drawer___KNY83"},{action:m}=__STORYBOOK_MODULE_ACTIONS__,g=n=>e.jsx(t,{className:w.wrapper,alignItems:"center",justifyContent:"center",children:e.jsx(n,{})}),ne={title:"Components/Drawer/Stories",component:d,decorators:[g],argTypes:h},y={controls:{disable:!0},previewTabs:{controls:{hidden:!0}}},p=n=>{const[a,s]=x.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{type:"button",onClick:()=>s(!0),children:"Открыть Drawer"}),e.jsx(d,{...n,isOpen:a,onClose:()=>{s(!1),m("drawerClosed")()},children:e.jsxs(t,{flexDirection:"column",justifyContent:"center",gap:"20px",children:[e.jsx(u,{color:"primary",children:"Содержимое Drawer"}),e.jsx(r,{label:"Имя"}),e.jsx(r,{label:"Номер"}),e.jsx(r,{label:"Почта"}),e.jsxs(t,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(o,{type:"button",children:"Отправить"}),e.jsx(o,{type:"button",variant:"secondary",children:"Отменить"})]})]})})]})};p.storyName="Drawer по умолчанию";p.args={position:"right",width:"var(--drawer-default-width)",height:"var(--drawer-default-height)",disableBackdropClick:!1,isViewCloseButton:!0,overlay:!0,clickAwayEventType:"click"};const i=n=>{const[a,s]=x.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{type:"button",onClick:()=>s(!0),children:"Открыть Drawer слева"}),e.jsx(d,{...n,isOpen:a,onClose:()=>{s(!1),m("drawerClosed")()},children:e.jsxs(t,{flexDirection:"column",justifyContent:"center",gap:"20px",children:[e.jsx(u,{color:"primary",children:"Drawer, открывающийся слева"}),e.jsx(r,{label:"Имя"}),e.jsx(r,{label:"Номер"}),e.jsx(r,{label:"Почта"}),e.jsxs(t,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(o,{type:"button",children:"Отправить"}),e.jsx(o,{type:"button",variant:"secondary",children:"Отменить"})]})]})})]})};i.storyName="Drawer слева";i.args={position:"left"};i.parameters=y;const l=n=>{const[a,s]=x.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{type:"button",onClick:()=>s(!0),children:"Открыть Drawer слева"}),e.jsx(d,{...n,isOpen:a,onClose:()=>{s(!1),m("drawerClosed")()},children:e.jsxs(t,{flexDirection:"column",justifyContent:"center",gap:"20px",children:[e.jsx(t,{alignItems:"center",justifyContent:"center",children:e.jsx(u,{color:"primary",children:"Drawer, открывающийся слева"})}),e.jsx(r,{label:"Имя"}),e.jsx(r,{label:"Номер"}),e.jsx(r,{label:"Почта"}),e.jsxs(t,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(o,{type:"button",children:"Отправить"}),e.jsx(o,{type:"button",variant:"secondary",children:"Отменить"})]})]})})]})};l.storyName="Drawer без крестика";l.args={isViewCloseButton:!1};l.parameters=y;const c=n=>{const[a,s]=x.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{type:"button",onClick:()=>s(!0),children:"Открыть Drawer c примером профиля"}),e.jsx(d,{...n,isOpen:a,onClose:()=>{s(!1),m("drawerClosed")()},className:w["profile-drawer"],children:e.jsxs(t,{flexDirection:"column",height:"100%",children:[e.jsxs(t,{flexDirection:"column",height:"100%",px:"24px",children:[e.jsx(u,{variant:"Heading3",children:"Профиль пользователя"}),e.jsxs(t,{gap:"16px",alignItems:"center",children:[e.jsx(f,{}),e.jsx(u,{variant:"Body1-Medium",children:"Иван Иванов"})]}),e.jsxs(t,{style:{display:"flex",gap:"24px",flexDirection:"column",flexGrow:"1"},children:[e.jsx(r,{pseudo:!0,label:"Email",value:"maili@mail.com"}),e.jsx(r,{pseudo:!0,label:"Должность",value:"Руководитель проекта"}),e.jsx(r,{pseudo:!0,label:"Отдел",value:"Направление ИТ базовых процессов ТОиР"}),e.jsx(r,{pseudo:!0,label:"Полномочия",value:"Не указано"})]})]}),e.jsxs(t,{style:{display:"flex",gap:"8px",borderTop:"1px solid",borderColor:"var(--unique-divider)",padding:"24px"},children:[e.jsx(o,{startIcon:e.jsx(j,{}),type:"button",children:"Редактировать"}),e.jsx(o,{type:"button",variant:"secondary",children:"Закрыть"})]})]})})]})};c.storyName="Drawer с примером профиля";c.parameters=y;p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: IDrawerProps): ReactNode => {
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
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: IDrawerProps): ReactNode => {
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: IDrawerProps): ReactNode => {
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: IDrawerProps): JSX.Element => {
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
}`,...c.parameters?.docs?.source}}};const ae=["DrawerDefault","DrawerLeft","DrawerWithoutCloseButton","DrawerWithProfile"];export{p as DrawerDefault,i as DrawerLeft,c as DrawerWithProfile,l as DrawerWithoutCloseButton,ae as __namedExportsOrder,ne as default};
