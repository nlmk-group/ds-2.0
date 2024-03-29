import{U as p,M as f,e as h}from"./chunk-HLWAVYOI-VSo3NTqb.js";import{J as i,a8 as d}from"./index-DWTGGx_t.js";import{a as m,j as e,F as c}from"./jsx-runtime-2xDJh5tt.js";import{r as M}from"./index-CBqU2yxZ.js";import{s,H as x,E as l,T as y}from"./Tests-CMn2Ae2s.js";import{F as D}from"./FigmaEmbed-BZvBpmnf.js";import{P as v}from"./Properties-CxpA6DoR.js";/* empty css               */import"./generateUUID-DZpKhNdB.js";import"./index-C-x6zlLc.js";import"./index-CgSHB1U0.js";import{T as O}from"./index-BR2u5piM.js";import"./index-D3aZeTS2.js";import"./index-pmCx02Kh.js";import"./index-j1olA-rT.js";import"./index-Dp7-Jy-a.js";import"./index-ByRza-M8.js";import"./32-BI8cdrFX.js";import{a as w}from"./argsTypes-H8JnyqtH.js";import{useMDXComponents as k}from"./index-DI5IigMn.js";import"./iframe-D-x5ZCeL.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-C7bqoVJc.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-wp1zFx1N.js";import"./index-Y8Vz1tB_.js";const r="Sidebar",b="https://www.figma.com/file/NVWvbpDg0KxYpZOlCMFXdy/DS2.0-Sidebar?type=design&node-id=0-1&mode=design&t=Qh3zxP2KDdKIeZpx-0",A=`
import { useState } from 'react';
import { Sidebar, MenuItem, SubmenuItem, Avatar } from '@nlmk/ds-2.0';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const path = 'https://images.unsplash.com/photo-1683343946402-85b144e8ecb6?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <Sidebar
      isLoggedIn={isLoggedIn}
      onOpenUser={() => {}}
      onLogout={() => setIsLoggedIn(false)}
      onLogin={() => setIsLoggedIn(true)}
    >
      <Avatar
        userName='User'
        online
      />
      <MenuItem label="cars" position="top" icon='IconHomeOutlined32'>
        <SubmenuItem label="porsche" image={path} />
        <SubmenuItem label="volksvagen" image={path}>
          <SubmenuItem label="polo"/>
          <SubmenuItem label="tiguan"/>
          <SubmenuItem label="multivan"/>
        </SubmenuItem>
        <SubmenuItem label="toyota" image={path}>
          <SubmenuItem label="supra"/>
          <SubmenuItem label="tundra"/>
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
      <MenuItem label="search" position="bottom" icon='IconSearchOutlined32' />
    </Sidebar>
  );
}
export default App;`,C=`
import { Sidebar, MenuItem, SubmenuItem } from '@nlmk/ds-2.0';

const App = () => {
  return (
    <Sidebar>
      <Sidebar.MenuItem label="Продукция" icon='IconBoxOutlined32'>
        <Sidebar.SubmenuItem label="Новинки">
          <Sidebar.SubmenuItem label="Продукт 1" />
          <Sidebar.SubmenuItem label="Продукт 2" />
        </Sidebar.SubmenuItem>
        <Sidebar.SubmenuItem label="Популярные">
          <Sidebar.SubmenuItem label="Продукт 3" />
          <Sidebar.SubmenuItem label="Продукт 4" />
        </Sidebar.SubmenuItem>
      </Sidebar.MenuItem>
      <Sidebar.MenuItem label="Услуги" icon='IconServicesOutlined32'>
        <Sidebar.SubmenuItem label="Консультации" />
        <Sidebar.SubmenuItem label="Доставка" />
      </Sidebar.MenuItem>
      <Sidebar.MenuItem label="Контакты" icon='IconPhoneOutlined32' />
    </Sidebar>
  );
}
export default App;
`,S=()=>{const[t,o]=M.useState(0),n=g=>t===g;return m("div",{className:s.wrapper,children:[e(x,{title:r,description:"Компонент для навигации и организации контента в интерфейсе.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${r}`,figmaLink:b}),e("div",{className:s.tabs,children:m(i,{children:[e(i.Tab,{label:"Разработчику",active:n(0),onClick:()=>o(0)}),e(i.Tab,{label:"Дизайнеру",active:n(1),onClick:()=>o(1)}),e(i.Tab,{label:"Тестирование",active:n(2),onClick:()=>o(2)})]})}),t==0&&m(c,{children:[e(l,{height:400,description:"Пример Sidebar",code:A}),e(l,{height:600,description:"Горизонтальный Sidebar",code:C}),e(v,{argsTypes:w})]}),t==1&&e(D,{url:b}),t==2&&e(O,{variant:"Heading4",color:"primary",children:e(y,{componentName:r})})]})};function u(t){return m(c,{children:[e(f,{title:"Components/Sidebar/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/file/NVWvbpDg0KxYpZOlCMFXdy/DS2.0-Sidebar?type=design&node-id=0-1&mode=design&t=Qh3zxP2KDdKIeZpx-0"},jest:["Sidebar.test.tsx"]}}),`
`,e(h,{name:"Docs",children:e(p,{children:e(S,{})})})]})}function L(t={}){const{wrapper:o}=Object.assign({},k(),t.components);return o?e(o,{...t,children:e(u,{...t})}):u()}const I=()=>e(p,{children:e(S,{})});I.storyName="Docs";I.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const a={title:"Components/Sidebar/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/NVWvbpDg0KxYpZOlCMFXdy/DS2.0-Sidebar?type=design&node-id=0-1&mode=design&t=Qh3zxP2KDdKIeZpx-0"},jest:["Sidebar.test.tsx"]},component:d,tags:["stories-mdx"],includeStories:["docs"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:L};const pe=["docs"];export{pe as __namedExportsOrder,a as default,I as docs};
