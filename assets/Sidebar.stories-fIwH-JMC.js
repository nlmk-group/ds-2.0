import{j as e,a}from"./clsx.m-CcuEzMhP.js";import{r as g}from"./index-CBqU2yxZ.js";import{a8 as u}from"./index-VLfweUxF.js";import{a as w}from"./argsTypes-DE15AmlB.js";import{g as B}from"./index-SiU_55iz.js";import"./_commonjsHelpers-BosuxZz1.js";import"./generateUUID-BkPc_NdJ.js";import"./index-fbTu1Hcf.js";import"./32-BmhDzcbC.js";import"./index-BtM5VmRH.js";import"./index-Dz0_KCIo.js";import"./index-CpJBQeN-.js";import"./types-CpBSVUgC.js";import"./index-hvdSV1r-.js";import"./index-BO3pQ7ot.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-14g2znra.js";import"./get-DbIoSxMH.js";const A="_wrapper_g6opq_1",j={wrapper:A},{Avatar:P,MenuItem:p,SubmenuItem:r}=u,_=o=>e("div",{className:j.wrapper,children:o()}),b="https://images.unsplash.com/photo-1683343946402-85b144e8ecb6?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",ie={title:"Components/Sidebar/Stories",component:u,decorators:[_],argTypes:w,parameters:{layout:"fullscreen"}},E=B(),n=o=>{const[U,c]=g.useState(!1);return g.useEffect(()=>c(!!o.isLoggedIn),[o.isLoggedIn]),a(u,{orientation:"vertical",...o,isLoggedIn:U,onLogout:()=>c(!1),onLogin:()=>c(!0),children:[e(P,{imageSrc:E,userName:o.userName,userSurname:o.userSurname,online:!0}),a(p,{label:"cars",position:"top",icon:"IconHomeOutlined32",children:[e(r,{label:"porsche",image:b}),a(r,{label:"volksvagen",image:b,children:[e(r,{label:"polo"}),e(r,{label:"tiguan"}),e(r,{label:"multivan"})]}),a(r,{label:"toyota",image:b,children:[e(u.SubmenuItem,{label:"supra"}),e(u.SubmenuItem,{label:"tundra"})]}),e(r,{label:"mazda",image:b})]}),a(p,{label:"bands",position:"top",icon:"IconHomeOutlined32",children:[e(r,{label:"limp bizkit"}),a(r,{label:"slipknot",children:[e(r,{label:"corey taylor"}),e(r,{label:"mick thompson"}),e(r,{label:"jim root"})]}),e(r,{label:"korn"})]}),e(p,{label:"menu item",position:"top",icon:"IconInteractionOutlined32"}),a(p,{label:"lorem ipsum",position:"bottom",icon:"IconHomeOutlined32",children:[e(r,{label:"dolor"}),e(r,{label:"sit"}),e(r,{label:"amet"})]})]},o.orientation)};n.storyName="Дефолтный сайдбар";const t=o=>e(n,{variant:"burger",...o,onOpenUser:()=>{},onLogout:()=>{},onLogin:()=>{}});t.storyName="Вертикальный бургер";const i=o=>e(n,{orientation:"horizontal",...o,onOpenUser:()=>{},onLogout:()=>{},onLogin:()=>{}});i.storyName="Горизонтальный сайдбар";const s=o=>e(n,{orientation:"horizontal",variant:"burger",...o,onOpenUser:()=>{},onLogout:()=>{},onLogin:()=>{}});s.storyName="Горизонтальный бургер";const m=o=>e(n,{orientation:"horizontal",submenuVersion:"version2",...o,onOpenUser:()=>{},onLogout:()=>{},onLogin:()=>{}});m.storyName="Горизонтальный сайдбар с сабменю версия 2";const l=o=>e(n,{orientation:"horizontal",submenuVersion:"version3",...o,onOpenUser:()=>{},onLogout:()=>{},onLogin:()=>{}});l.storyName="Горизонтальный сайдбар с сабменю версия 3";var d,S,I;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`(argTypes: ISidebarProps): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => setIsLoggedIn(Boolean(argTypes.isLoggedIn)), [argTypes.isLoggedIn]);
  return <Sidebar key={argTypes.orientation} orientation='vertical' {...argTypes} isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} onLogin={() => setIsLoggedIn(true)}>
      <Avatar imageSrc={AvatarImageMock} userName={argTypes.userName} userSurname={argTypes.userSurname} online />
      <MenuItem label="cars" position="top" icon='IconHomeOutlined32'>
        <SubmenuItem label="porsche" image={path} />
        <SubmenuItem label="volksvagen" image={path}>
          <SubmenuItem label="polo" />
          <SubmenuItem label="tiguan" />
          <SubmenuItem label="multivan" />
        </SubmenuItem>
        <SubmenuItem label="toyota" image={path}>
          <Sidebar.SubmenuItem label="supra" />
          <Sidebar.SubmenuItem label="tundra" />
        </SubmenuItem>
        <SubmenuItem label="mazda" image={path} />
      </MenuItem>
      <MenuItem label="bands" position="top" icon='IconHomeOutlined32'>
        <SubmenuItem label="limp bizkit" />
        <SubmenuItem label="slipknot">
          <SubmenuItem label="corey taylor" />
          <SubmenuItem label="mick thompson" />
          <SubmenuItem label="jim root" />
        </SubmenuItem>
        <SubmenuItem label="korn" />
      </MenuItem>
      <MenuItem label="menu item" position="top" icon='IconInteractionOutlined32' />
      <MenuItem label="lorem ipsum" position="bottom" icon='IconHomeOutlined32'>
        <SubmenuItem label="dolor" />
        <SubmenuItem label="sit" />
        <SubmenuItem label="amet" />
      </MenuItem>
    </Sidebar>;
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var L,f,y;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`(argTypes: ISidebarProps): ReactNode => {
  return <SidebarDefault variant='burger' {...argTypes} onOpenUser={() => {}} onLogout={() => {}} onLogin={() => {}} />;
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,v,z;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`(argTypes: ISidebarProps): ReactNode => {
  return <SidebarDefault orientation='horizontal' {...argTypes} onOpenUser={() => {}} onLogout={() => {}} onLogin={() => {}} />;
}`,...(z=(v=i.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var O,H,N;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`(argTypes: ISidebarProps): ReactNode => {
  return <SidebarDefault orientation='horizontal' variant='burger' {...argTypes} onOpenUser={() => {}} onLogout={() => {}} onLogin={() => {}} />;
}`,...(N=(H=s.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var T,k,M;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`(argTypes: ISidebarProps): ReactNode => {
  return <SidebarDefault orientation='horizontal' submenuVersion='version2' {...argTypes} onOpenUser={() => {}} onLogout={() => {}} onLogin={() => {}} />;
}`,...(M=(k=m.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var x,D,V;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`(argTypes: ISidebarProps): ReactNode => {
  return <SidebarDefault orientation='horizontal' submenuVersion='version3' {...argTypes} onOpenUser={() => {}} onLogout={() => {}} onLogin={() => {}} />;
}`,...(V=(D=l.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};const se=["SidebarDefault","VerticalBurgerSidebar","SidebarHorizontal","HorizontalBurgerSidebar","SidebarHorizontalV2","SidebarHorizontalV3"];export{s as HorizontalBurgerSidebar,n as SidebarDefault,i as SidebarHorizontal,m as SidebarHorizontalV2,l as SidebarHorizontalV3,t as VerticalBurgerSidebar,se as __namedExportsOrder,ie as default};
