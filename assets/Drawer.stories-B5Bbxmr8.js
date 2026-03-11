import{j as e,r as x}from"./iframe-DfRM7LXF.js";import{A as y}from"./index-Bbrpw_Ow.js";import{I as t}from"./index-rkxnOxqa.js";import{B as r}from"./index-wON6kCEo.js";import{B as o}from"./index-BBdLC-OA.js";import{T as u}from"./index--nFqMQdT.js";import{D as d}from"./index-S_twP3Il.js";import{a as f}from"./argsTypes-940CHTRI.js";import{I as j}from"./24-Bx5Ko4Zf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CN5IEPbV.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-Bjn7Co6i.js";import"./24-D-2FQCka.js";import"./24-DPno0QZj.js";import"./24-CWpuPGUf.js";import"./24-CLWtzJRM.js";import"./24-Cp5qlwo7.js";import"./24-LAGNS7eA.js";import"./24-CSBD1goG.js";import"./24-D3pKJ1t3.js";import"./16-fn2TPoua.js";import"./24-DunoRfpD.js";import"./24-WTey2qPh.js";import"./16-B4jpe3eU.js";import"./16-UKcUYuG7.js";import"./16-BAUAAMRf.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BGl-7D4l.js";import"./index-DINl29EL.js";import"./types-TdnjS80C.js";const w={"profile-drawer":"Drawer-module__profile-drawer___KNY83"},{action:m}=__STORYBOOK_MODULE_ACTIONS__,h=n=>e.jsx(n,{}),ee={title:"Components/Drawer/Stories",component:d,decorators:[h],argTypes:f},p=n=>{const[a,s]=x.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{type:"button",onClick:()=>s(!0),children:"Открыть Drawer"}),e.jsx(d,{...n,isOpen:a,onClose:()=>{s(!1),m("drawerClosed")()},children:e.jsxs(r,{flexDirection:"column",justifyContent:"center",gap:"20px",children:[e.jsx(u,{color:"primary",children:"Содержимое Drawer"}),e.jsx(t,{label:"Имя"}),e.jsx(t,{label:"Номер"}),e.jsx(t,{label:"Почта"}),e.jsxs(r,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(o,{type:"button",children:"Отправить"}),e.jsx(o,{type:"button",variant:"secondary",children:"Отменить"})]})]})})]})};p.storyName="Drawer по умолчанию";const i=n=>{const[a,s]=x.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{type:"button",onClick:()=>s(!0),children:"Открыть Drawer слева"}),e.jsx(d,{...n,isOpen:a,onClose:()=>{s(!1),m("drawerClosed")()},children:e.jsxs(r,{flexDirection:"column",justifyContent:"center",gap:"20px",children:[e.jsx(u,{color:"primary",children:"Drawer, открывающийся слева"}),e.jsx(t,{label:"Имя"}),e.jsx(t,{label:"Номер"}),e.jsx(t,{label:"Почта"}),e.jsxs(r,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(o,{type:"button",children:"Отправить"}),e.jsx(o,{type:"button",variant:"secondary",children:"Отменить"})]})]})})]})};i.storyName="Drawer слева";i.args={position:"left"};const l=n=>{const[a,s]=x.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{type:"button",onClick:()=>s(!0),children:"Открыть Drawer слева"}),e.jsx(d,{...n,isOpen:a,onClose:()=>{s(!1),m("drawerClosed")()},children:e.jsxs(r,{flexDirection:"column",justifyContent:"center",gap:"20px",children:[e.jsx(r,{alignItems:"center",justifyContent:"center",children:e.jsx(u,{color:"primary",children:"Drawer, открывающийся слева"})}),e.jsx(t,{label:"Имя"}),e.jsx(t,{label:"Номер"}),e.jsx(t,{label:"Почта"}),e.jsxs(r,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(o,{type:"button",children:"Отправить"}),e.jsx(o,{type:"button",variant:"secondary",children:"Отменить"})]})]})})]})};l.storyName="Drawer без крестика";l.args={isViewCloseButton:!1};const c=n=>{const[a,s]=x.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{type:"button",onClick:()=>s(!0),children:"Открыть Drawer c примером профиля"}),e.jsx(d,{...n,isOpen:a,onClose:()=>{s(!1),m("drawerClosed")()},className:w["profile-drawer"],children:e.jsxs(r,{flexDirection:"column",height:"100%",children:[e.jsxs(r,{flexDirection:"column",height:"100%",px:"24px",children:[e.jsx(u,{variant:"Heading3",children:"Профиль пользователя"}),e.jsxs(r,{gap:"16px",alignItems:"center",children:[e.jsx(y,{}),e.jsx(u,{variant:"Body1-Medium",children:"Иван Иванов"})]}),e.jsxs(r,{style:{display:"flex",gap:"24px",flexDirection:"column",flexGrow:"1"},children:[e.jsx(t,{pseudo:!0,label:"Email",value:"maili@mail.com"}),e.jsx(t,{pseudo:!0,label:"Должность",value:"Руководитель проекта"}),e.jsx(t,{pseudo:!0,label:"Отдел",value:"Направление ИТ базовых процессов ТОиР"}),e.jsx(t,{pseudo:!0,label:"Полномочия",value:"Не указано"})]})]}),e.jsxs(r,{style:{display:"flex",gap:"8px",borderTop:"1px solid",borderColor:"var(--unique-divider)",padding:"24px"},children:[e.jsx(o,{startIcon:e.jsx(j,{}),type:"button",children:"Редактировать"}),e.jsx(o,{type:"button",variant:"secondary",children:"Закрыть"})]})]})})]})};c.storyName="Drawer с примером профиля";p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: IDrawerProps): ReactNode => {
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
}`,...c.parameters?.docs?.source}}};const te=["DrawerDefault","DrawerLeft","DrawerWithoutCloseButton","DrawerWithProfile"];export{p as DrawerDefault,i as DrawerLeft,c as DrawerWithProfile,l as DrawerWithoutCloseButton,te as __namedExportsOrder,ee as default};
