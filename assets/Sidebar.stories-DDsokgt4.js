import{U as d,M as C,e as g}from"./chunk-HLWAVYOI-ezXNbOe3.js";import{L as r,ae as u}from"./index-BWU1r0v0.js";import{a as i,j as e,F as b}from"./jsx-runtime-2xDJh5tt.js";import{r as k}from"./index-CBqU2yxZ.js";import{s as m,H as I,E as f,T as P}from"./Tests-BwrYNA6X.js";import{F as y}from"./FigmaEmbed-CsOt3IFB.js";import{P as v}from"./Properties-BTOrmM9C.js";/* empty css               */import"./generateUUID-Cuz4oBdd.js";import"./index-BG0PBiA5.js";import"./index-CTkD9j2t.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as x}from"./index-nWYpQihe.js";import"./index-B0rYwNoJ.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-wBSyW2WA.js";import"./32-Cvin1aiw.js";import{a as M}from"./argsTypes-B3q5i3wE.js";import{useMDXComponents as D}from"./index-DI5IigMn.js";import"./iframe-DXHWjJsc.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-BhGRst0S.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-D1oOZMEU.js";import"./index-CMH8wQUv.js";const s="Sidebar",l="https://www.figma.com/file/NVWvbpDg0KxYpZOlCMFXdy/DS2.0-Sidebar?type=design&node-id=0-1&mode=design&t=Qh3zxP2KDdKIeZpx-0",w=`import { useState } from 'react';
import { Sidebar } from '@nlmk/ds-2.0';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const path = 'https://images.unsplash.com/photo-1683343946402-85b144e8ecb6?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div style={{
      backgroundColor: "var(--background-default)",
      width: "110%",
      margin: "-20px"
    }}>
     <Sidebar
      key="vertical"
      orientation="vertical"
      allowFavorites
      isLoggedIn={isLoggedIn}
      onLogout={() => setIsLoggedIn(false)}
      onLogin={() => setIsLoggedIn(true)}
      currentPath={currentPath}
    >
      <Sidebar.Avatar imageSrc="" />
      <Sidebar.MenuItem
        path="cars"
        label="Задание на добавление"
        position="top"
        icon="IconKovsh32"
        onClick={() => setCurrentPath('cars')}
      >
        <Sidebar.SubmenuItem path="porsche" label="porsche" image={path} onClick={() => setCurrentPath('porsche')} />
        <Sidebar.SubmenuItem
          path="volksvagen"
          label="volksvagen"
          image={path}
          onClick={() => setCurrentPath('volksvagen')}
        >
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
      <Sidebar.MenuItem
        path="bands"
        label="bands"
        position="top"
        icon="IconBunkerOutlined32"
        onClick={() => setCurrentPath('bands')}
      >
        <Sidebar.SubmenuItem path="limp bizkit" label="limp bizkit" onClick={() => setCurrentPath('limp bizkit')} />
        <Sidebar.SubmenuItem path="slipknot" label="slipknot" onClick={() => setCurrentPath('slipknot')}>
          <Sidebar.SubmenuItem
            path="corey taylor"
            label="corey taylor"
            onClick={() => setCurrentPath('corey taylor')}
          />
          <Sidebar.SubmenuItem
            path="mick thompson"
            label="mick thompson"
            onClick={() => setCurrentPath('mick thompson')}
          />
          <Sidebar.SubmenuItem path="jim root" label="jim root" onClick={() => setCurrentPath('jim root')} />
        </Sidebar.SubmenuItem>
        <Sidebar.SubmenuItem path="korn" label="korn" onClick={() => setCurrentPath('korn')} />
      </Sidebar.MenuItem>
      <Sidebar.MenuItem
        path="menu item"
        label="menu item"
        position="top"
        icon="IconLightningStroke32"
        onClick={() => setCurrentPath('menu item')}
      />
      <Sidebar.MenuItem
        path="disabled item"
        label="disabled item"
        position="top"
        icon="IconMapPinaltOutlined32"
        disabled
        onClick={() => setCurrentPath('disabled item')}
      />
      <Sidebar.MenuItem
        path="lorem ipsum"
        label="lorem ipsum"
        position="bottom"
        icon="IconInfoOutlined32"
        onClick={() => setCurrentPath('lorem ipsum')}
      >
        <Sidebar.SubmenuItem path="dolor" label="dolor" onClick={() => setCurrentPath('dolor')} />
        <Sidebar.SubmenuItem path="sit" label="sit" onClick={() => setCurrentPath('sit')} />
        <Sidebar.SubmenuItem path="amet" label="amet" onClick={() => setCurrentPath('amet')} />
      </Sidebar.MenuItem>
    </Sidebar>
    </div>
  );
}
export default App;`,c=()=>{const[t,a]=k.useState(0),n=S=>t===S;return i("div",{className:m.wrapper,children:[e(I,{title:s,description:"Компонент для навигации и организации контента в интерфейсе.",isBeta:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${s}`,figmaLink:l}),e("div",{className:m.tabs,children:i(r,{children:[e(r.Tab,{label:"Разработчику",active:n(0),onClick:()=>a(0)}),e(r.Tab,{label:"Дизайнеру",active:n(1),onClick:()=>a(1)}),e(r.Tab,{label:"Тестирование",active:n(2),onClick:()=>a(2)})]})}),t==0&&i(b,{children:[e(f,{height:800,description:"Пример Sidebar",code:w}),e(v,{argsTypes:M})]}),t==1&&e(y,{url:l}),t==2&&e(x,{variant:"Heading4",color:"primary",children:e(P,{componentName:s})})]})};function p(t){return i(b,{children:[e(C,{title:"Components/Sidebar/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/file/NVWvbpDg0KxYpZOlCMFXdy/DS2.0-Sidebar?type=design&node-id=0-1&mode=design&t=Qh3zxP2KDdKIeZpx-0"},jest:["Sidebar.test.tsx"]}}),`
`,e(g,{name:"Docs",children:e(d,{children:e(c,{})})})]})}function L(t={}){const{wrapper:a}=Object.assign({},D(),t.components);return a?e(a,{...t,children:e(p,{...t})}):p()}const h=()=>e(d,{children:e(c,{})});h.storyName="Docs";h.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const o={title:"Components/Sidebar/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/NVWvbpDg0KxYpZOlCMFXdy/DS2.0-Sidebar?type=design&node-id=0-1&mode=design&t=Qh3zxP2KDdKIeZpx-0"},jest:["Sidebar.test.tsx"]},component:u,tags:["stories-mdx"],includeStories:["docs"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:L};const ue=["docs"];export{ue as __namedExportsOrder,o as default,h as docs};
