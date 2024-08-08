import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{r as u}from"./index-DQ2WTIsS.js";import{ag as t}from"./index-De6xVjfl.js";import{a as v}from"./argsTypes-D7cltJrh.js";import"./index-B8KuQLf-.js";import"./clsx-B-dksMZM.js";import"./generateUUID-i9L7EtYg.js";import"./32-C4VDZHit.js";import"./index-DJXOh8UI.js";import"./index-bLIWCpda.js";import"./index-DB41iIPt.js";import"./index-B_c816qF.js";import"./index-BgyuaCKK.js";import"./index-B_snx1v7.js";import"./types-CpBSVUgC.js";import"./index-wNTT8eSr.js";import"./index-0sbKER3h.js";import"./index-S3KjbRnp.js";import"./index-CpIRsoAz.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";const L="_wrapper_1jxd0_1",f={wrapper:L},z=o=>e.jsx("div",{className:f.wrapper,children:o()}),l="https://images.unsplash.com/photo-1683343946402-85b144e8ecb6?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",Y={title:"Components/Sidebar/Stories",component:t,decorators:[z],argTypes:v,parameters:{layout:"fullscreen"}},r=o=>{const[j,m]=u.useState(!1),[P,a]=u.useState("");return u.useEffect(()=>m(!!o.isLoggedIn),[o.isLoggedIn]),e.jsxs(t,{orientation:"vertical",allowFavorites:!0,...o,isLoggedIn:j,onLogout:()=>m(!1),onLogin:()=>m(!0),currentPath:P,children:[e.jsx(t.Avatar,{imageSrc:""}),e.jsxs(t.MenuItem,{path:"cars",label:"Задание на добавление",position:"top",icon:"IconKovsh32",onClick:()=>a("cars"),children:[e.jsx(t.SubmenuItem,{path:"porsche",label:"porsche",image:l,onClick:()=>a("porsche")}),e.jsxs(t.SubmenuItem,{path:"volksvagen",label:"volksvagen",image:l,onClick:()=>a("volksvagen"),children:[e.jsx(t.SubmenuItem,{path:"polo",label:"polo",onClick:()=>a("polo")}),e.jsx(t.SubmenuItem,{path:"tiguan",label:"tiguan",onClick:()=>a("tiguan")}),e.jsx(t.SubmenuItem,{path:"multivan",label:"multivan",onClick:()=>a("multivan"),disabled:!0})]}),e.jsxs(t.SubmenuItem,{path:"toyota",label:"toyota",image:l,onClick:()=>a("toyota"),children:[e.jsx(t.SubmenuItem,{path:"supra",label:"supra",onClick:()=>a("supra")}),e.jsx(t.SubmenuItem,{path:"tundra",label:"tundra",onClick:()=>a("tundra")})]}),e.jsx(t.SubmenuItem,{path:"mazda",label:"mazda",image:l,onClick:()=>a("mazda")})]}),e.jsxs(t.MenuItem,{path:"bands",label:"bands",position:"top",icon:"IconBunkerOutlined32",onClick:()=>a("bands"),children:[e.jsx(t.SubmenuItem,{path:"limp bizkit",label:"limp bizkit",onClick:()=>a("limp bizkit")}),e.jsxs(t.SubmenuItem,{path:"slipknot",label:"slipknot",onClick:()=>a("slipknot"),children:[e.jsx(t.SubmenuItem,{path:"corey taylor",label:"corey taylor",onClick:()=>a("corey taylor")}),e.jsx(t.SubmenuItem,{path:"mick thompson",label:"mick thompson",onClick:()=>a("mick thompson")}),e.jsx(t.SubmenuItem,{path:"jim root",label:"jim root",onClick:()=>a("jim root")})]}),e.jsx(t.SubmenuItem,{path:"korn",label:"korn",onClick:()=>a("korn")})]}),e.jsx(t.MenuItem,{path:"menu item",label:"menu item",position:"top",icon:"IconLightningStroke32",onClick:()=>a("menu item")}),e.jsx(t.MenuItem,{path:"disabled item",label:"disabled item",position:"top",icon:"IconMapPinaltOutlined32",disabled:!0,onClick:()=>a("disabled item")}),e.jsxs(t.MenuItem,{path:"lorem ipsum",label:"lorem ipsum",position:"bottom",icon:"IconInfoOutlined32",onClick:()=>a("lorem ipsum"),children:[e.jsx(t.SubmenuItem,{path:"dolor",label:"dolor",onClick:()=>a("dolor")}),e.jsx(t.SubmenuItem,{path:"sit",label:"sit",onClick:()=>a("sit")}),e.jsx(t.SubmenuItem,{path:"amet",label:"amet",onClick:()=>a("amet")})]})]},o.orientation)};r.storyName="Дефолтный сайдбар";r.args={userName:"Иван",userSurname:"Иванов",systemName:"НЛМК"};const n=o=>e.jsx(r,{variant:"burger",...o,onOpenUser:()=>{},onLogout:()=>{},onLogin:()=>{}});n.storyName="Вертикальный бургер";n.args={userName:"Иван",userSurname:"Иванов",systemName:"НЛМК"};const i=o=>e.jsx(r,{orientation:"horizontal",...o,onOpenUser:()=>{},onLogout:()=>{},onLogin:()=>{}});i.storyName="Горизонтальный сайдбар";i.args={userName:"Иван",userSurname:"Иванов",systemName:"НЛМК"};const s=o=>e.jsx(r,{orientation:"horizontal",variant:"burger",...o,onOpenUser:()=>{},onLogout:()=>{},onLogin:()=>{}});s.storyName="Горизонтальный бургер";s.args={userName:"Иван",userSurname:"Иванов",systemName:"НЛМК"};var p,b,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`(argTypes: ISidebarProps): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  useEffect(() => setIsLoggedIn(Boolean(argTypes.isLoggedIn)), [argTypes.isLoggedIn]);
  return <Sidebar key={argTypes.orientation} orientation="vertical" allowFavorites {...argTypes} isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} onLogin={() => setIsLoggedIn(true)} currentPath={currentPath}>
      <Sidebar.Avatar imageSrc="" />
      <Sidebar.MenuItem path="cars" label="Задание на добавление" position="top" icon="IconKovsh32" onClick={() => setCurrentPath('cars')}>
        <Sidebar.SubmenuItem path="porsche" label="porsche" image={path} onClick={() => setCurrentPath('porsche')} />
        <Sidebar.SubmenuItem path="volksvagen" label="volksvagen" image={path} onClick={() => setCurrentPath('volksvagen')}>
          <Sidebar.SubmenuItem path="polo" label="polo" onClick={() => setCurrentPath('polo')} />
          <Sidebar.SubmenuItem path="tiguan" label="tiguan" onClick={() => setCurrentPath('tiguan')} />
          <Sidebar.SubmenuItem path="multivan" label="multivan" onClick={() => setCurrentPath('multivan')} disabled />
        </Sidebar.SubmenuItem>
        <Sidebar.SubmenuItem path="toyota" label="toyota" image={path} onClick={() => setCurrentPath('toyota')}>
          <Sidebar.SubmenuItem path="supra" label="supra" onClick={() => setCurrentPath('supra')} />
          <Sidebar.SubmenuItem path="tundra" label="tundra" onClick={() => setCurrentPath('tundra')} />
        </Sidebar.SubmenuItem>
        <Sidebar.SubmenuItem path="mazda" label="mazda" image={path} onClick={() => setCurrentPath('mazda')} />
      </Sidebar.MenuItem>
      <Sidebar.MenuItem path="bands" label="bands" position="top" icon="IconBunkerOutlined32" onClick={() => setCurrentPath('bands')}>
        <Sidebar.SubmenuItem path="limp bizkit" label="limp bizkit" onClick={() => setCurrentPath('limp bizkit')} />
        <Sidebar.SubmenuItem path="slipknot" label="slipknot" onClick={() => setCurrentPath('slipknot')}>
          <Sidebar.SubmenuItem path="corey taylor" label="corey taylor" onClick={() => setCurrentPath('corey taylor')} />
          <Sidebar.SubmenuItem path="mick thompson" label="mick thompson" onClick={() => setCurrentPath('mick thompson')} />
          <Sidebar.SubmenuItem path="jim root" label="jim root" onClick={() => setCurrentPath('jim root')} />
        </Sidebar.SubmenuItem>
        <Sidebar.SubmenuItem path="korn" label="korn" onClick={() => setCurrentPath('korn')} />
      </Sidebar.MenuItem>
      <Sidebar.MenuItem path="menu item" label="menu item" position="top" icon="IconLightningStroke32" onClick={() => setCurrentPath('menu item')} />
      <Sidebar.MenuItem path="disabled item" label="disabled item" position="top" icon="IconMapPinaltOutlined32" disabled onClick={() => setCurrentPath('disabled item')} />
      <Sidebar.MenuItem path="lorem ipsum" label="lorem ipsum" position="bottom" icon="IconInfoOutlined32" onClick={() => setCurrentPath('lorem ipsum')}>
        <Sidebar.SubmenuItem path="dolor" label="dolor" onClick={() => setCurrentPath('dolor')} />
        <Sidebar.SubmenuItem path="sit" label="sit" onClick={() => setCurrentPath('sit')} />
        <Sidebar.SubmenuItem path="amet" label="amet" onClick={() => setCurrentPath('amet')} />
      </Sidebar.MenuItem>
    </Sidebar>;
}`,...(c=(b=r.parameters)==null?void 0:b.docs)==null?void 0:c.source}}};var d,h,S;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`(argTypes: ISidebarProps): ReactNode => {
  return <SidebarDefault variant="burger" {...argTypes} onOpenUser={() => {}} onLogout={() => {}} onLogin={() => {}} />;
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var g,I,k;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`(argTypes: ISidebarProps): ReactNode => {
  return <SidebarDefault orientation="horizontal" {...argTypes} onOpenUser={() => {}} onLogout={() => {}} onLogin={() => {}} />;
}`,...(k=(I=i.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var C,x,y;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`(argTypes: ISidebarProps): ReactNode => {
  return <SidebarDefault orientation="horizontal" variant="burger" {...argTypes} onOpenUser={() => {}} onLogout={() => {}} onLogin={() => {}} />;
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const Q=["SidebarDefault","VerticalBurgerSidebar","SidebarHorizontal","HorizontalBurgerSidebar"];export{s as HorizontalBurgerSidebar,r as SidebarDefault,i as SidebarHorizontal,n as VerticalBurgerSidebar,Q as __namedExportsOrder,Y as default};
