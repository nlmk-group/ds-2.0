import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{r as x}from"./index-Bnop-kX6.js";import{aw as d,B as o,ax as t}from"./TreeList-CL8ODmb6.js";import"./generateUUID-4L6n6RLA.js";import{A as O}from"./index-C8k_JyfR.js";import"./index-DppSdhCO.js";import{B as r}from"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as u}from"./index-qC5wYQgy.js";import"./index-DLbY_Jxu.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-DxaWDDI2.js";import"./index-DokmLR-l.js";import{z as S}from"./32-bzYAI2s2.js";import{a as m}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{a as T}from"./argsTypes-D7P5C376.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";import"./v4-CQkTLCs1.js";const N={"profile-drawer":"_profile-drawer_j0i5j_1"},k=n=>e.jsx(n,{}),te={title:"Components/Drawer/Stories",component:d,decorators:[k],argTypes:T},p=n=>{const[a,s]=x.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{type:"button",onClick:()=>s(!0),children:"Открыть Drawer"}),e.jsx(d,{...n,isOpen:a,onClose:()=>{s(!1),m("drawerClosed")()},children:e.jsxs(r,{flexDirection:"column",justifyContent:"center",gap:"20px",children:[e.jsx(u,{color:"primary",children:"Содержимое Drawer"}),e.jsx(t,{label:"Имя"}),e.jsx(t,{label:"Номер"}),e.jsx(t,{label:"Почта"}),e.jsxs(r,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(o,{type:"button",children:"Отправить"}),e.jsx(o,{type:"button",variant:"secondary",children:"Отменить"})]})]})})]})};p.storyName="Drawer по умолчанию";const i=n=>{const[a,s]=x.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{type:"button",onClick:()=>s(!0),children:"Открыть Drawer слева"}),e.jsx(d,{...n,isOpen:a,onClose:()=>{s(!1),m("drawerClosed")()},children:e.jsxs(r,{flexDirection:"column",justifyContent:"center",gap:"20px",children:[e.jsx(u,{color:"primary",children:"Drawer, открывающийся слева"}),e.jsx(t,{label:"Имя"}),e.jsx(t,{label:"Номер"}),e.jsx(t,{label:"Почта"}),e.jsxs(r,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(o,{type:"button",children:"Отправить"}),e.jsx(o,{type:"button",variant:"secondary",children:"Отменить"})]})]})})]})};i.storyName="Drawer слева";i.args={position:"left"};const l=n=>{const[a,s]=x.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{type:"button",onClick:()=>s(!0),children:"Открыть Drawer слева"}),e.jsx(d,{...n,isOpen:a,onClose:()=>{s(!1),m("drawerClosed")()},children:e.jsxs(r,{flexDirection:"column",justifyContent:"center",gap:"20px",children:[e.jsx(r,{alignItems:"center",justifyContent:"center",children:e.jsx(u,{color:"primary",children:"Drawer, открывающийся слева"})}),e.jsx(t,{label:"Имя"}),e.jsx(t,{label:"Номер"}),e.jsx(t,{label:"Почта"}),e.jsxs(r,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(o,{type:"button",children:"Отправить"}),e.jsx(o,{type:"button",variant:"secondary",children:"Отменить"})]})]})})]})};l.storyName="Drawer без крестика";l.args={isViewCloseButton:!1};const c=n=>{const[a,s]=x.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{type:"button",onClick:()=>s(!0),children:"Открыть Drawer c примером профиля"}),e.jsx(d,{...n,isOpen:a,onClose:()=>{s(!1),m("drawerClosed")()},className:N["profile-drawer"],children:e.jsxs(r,{flexDirection:"column",height:"100%",children:[e.jsxs(r,{flexDirection:"column",height:"100%",px:"24px",children:[e.jsx(u,{variant:"Heading3",children:"Профиль пользователя"}),e.jsxs(r,{gap:"16px",alignItems:"center",children:[e.jsx(O,{}),e.jsx(u,{variant:"Body1-Medium",children:"Иван Иванов"})]}),e.jsxs(r,{style:{display:"flex",gap:"24px",flexDirection:"column",flexGrow:"1"},children:[e.jsx(t,{pseudo:!0,label:"Email",value:"maili@mail.com"}),e.jsx(t,{pseudo:!0,label:"Должность",value:"Руководитель проекта"}),e.jsx(t,{pseudo:!0,label:"Отдел",value:"Направление ИТ базовых процессов ТОиР"}),e.jsx(t,{pseudo:!0,label:"Полномочия",value:"Не указано"})]})]}),e.jsxs(r,{style:{display:"flex",gap:"8px",justifySelf:"flex-end",borderTop:"1px solid",borderColor:"var(--unique-divider)",padding:"24px"},children:[e.jsx(o,{startIcon:e.jsx(S,{}),type:"button",children:"Редактировать"}),e.jsx(o,{type:"button",variant:"secondary",children:"Закрыть"})]})]})})]})};c.storyName="Drawer с примером профиля";var y,f,j;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`(args: IDrawerProps): ReactNode => {
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
}`,...(j=(f=p.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var w,h,b;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`(args: IDrawerProps): ReactNode => {
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
          justifySelf: 'flex-end',
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
}`,...(v=(C=c.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const re=["DrawerDefault","DrawerLeft","DrawerWithoutCloseButton","DrawerWithProfile"];export{p as DrawerDefault,i as DrawerLeft,c as DrawerWithProfile,l as DrawerWithoutCloseButton,re as __namedExportsOrder,te as default};
