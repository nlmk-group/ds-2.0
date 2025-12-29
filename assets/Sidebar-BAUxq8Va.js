import{r as p,j as t,f as u,S as b,U as d}from"./iframe-zk5xXBtA.js";import{useMDXComponents as c}from"./index-CSMoqiIu.js";import{a as h,S}from"./argsTypes-n9WhcW_b.js";import{DecoratorDefault as C}from"./Decorator.stories-XjMTlGWF.js";import{s as n,H as k,E as I}from"./Header-BMqOixcD.js";import{F as g}from"./FigmaEmbed-Bh-YhisY.js";import{P as x}from"./Properties-BH32KsQA.js";import{T as f}from"./Tests-BiRJAIxZ.js";/* empty css               */import{T as i}from"./index-CGZqhooT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CL_1Xbvb.js";import"./index-1zUxKm4P.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-D1ipBNS6.js";import"./24-BU8fW5nS.js";import"./24-CsxFkFpg.js";import"./24-Cg1MPBHI.js";import"./24-BGS-MQmY.js";import"./24-2PvTlRtj.js";import"./24-DyWGmQTd.js";import"./24-DrF3F4Gh.js";import"./24-DXO8B9MT.js";import"./24-CHUQ235a.js";import"./16-D0071456.js";import"./24-CzaQJmC-.js";import"./24-BkbQ4VQu.js";import"./16-D1MigzhA.js";import"./16-J9oiRdzb.js";import"./16-qJIrzOil.js";import"./index-9BCGLlQQ.js";import"./index-CTfBpVCI.js";import"./index-B9FTsAqd.js";import"./index-CsA5WfEK.js";import"./types-TdnjS80C.js";import"./index-BdWcTqef.js";import"./index-DNfPJ41q.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CvJJwzQN.js";import"./index-D9zx9C-F.js";import"./index-6T6AONQH.js";import"./index-DjSUGs5w.js";import"./index-CBNcLMKv.js";import"./generateUUID-M57HTP56.js";import"./sizesMapping-D8QavrGc.js";import"./index-Is2qauMo.js";import"./index-DirQniBD.js";import"./index-cDYWclvM.js";const o="Sidebar",m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2084&t=EnvIMGos3m33avAX-1",P=`import { useState } from 'react';
import { Sidebar } from '@nlmk/ds-2.0';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const path = 'https://images.unsplash.com/photo-1683343946402-85b144e8ecb6?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div style={{
      backgroundColor: "var(--unique-background)",
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
export default App;`,v=()=>{const[e,r]=p.useState(0),a=l=>e===l;return t.jsxs("div",{className:n.wrapper,children:[t.jsx(k,{title:o,description:"Компонент для навигации и организации контента в интерфейсе.",isBeta:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${o}`,figmaLink:m}),t.jsx("div",{className:n.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:a(0),onClick:()=>r(0)}),t.jsx(i.Tab,{label:"Дизайнеру",active:a(1),onClick:()=>r(1)}),t.jsx(i.Tab,{label:"Тестирование",active:a(2),onClick:()=>r(2)})]})}),e==0&&t.jsxs(t.Fragment,{children:[t.jsx(I,{height:800,description:"Пример Sidebar",code:P}),t.jsx(x,{argsTypes:h})]}),e==1&&t.jsx(g,{url:m}),e==2&&t.jsx(f,{componentName:o})]})};function s(e){return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Components/Sidebar/Info",component:S,parameters:{design:{type:"figma",url:"https://www.figma.com/file/NVWvbpDg0KxYpZOlCMFXdy/DS2.0-Sidebar?type=design&node-id=0-1&mode=design&t=Qh3zxP2KDdKIeZpx-0"},jest:["Sidebar.test.tsx"]}}),`
`,t.jsx(b,{of:C}),`
`,t.jsx(d,{children:t.jsx(v,{})})]})}function gt(e={}){const{wrapper:r}={...c(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(s,{...e})}):s()}export{gt as default};
