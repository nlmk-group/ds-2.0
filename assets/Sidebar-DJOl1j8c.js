import{r as l,j as t,m as u,S as b,U as d}from"./iframe-DVMl8sUd.js";import{useMDXComponents as c}from"./index-CAw1kPaN.js";import{S as h}from"./index-DESvXwG_.js";import{DecoratorDefault as S}from"./Decorator.stories-CV1kor5g.js";import{s as m,H as C,E as k}from"./Header-CsvOsVxR.js";import{F as I}from"./FigmaEmbed-BhcSTkWa.js";import{P as g}from"./Properties-D_4CcFrq.js";import{T as x}from"./Tests-BBMIGr6p.js";/* empty css               */import{T as i}from"./index-BKzSZHPo.js";import{a as f}from"./argsTypes-BEmY9FiQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DyUq_Ha8.js";import"./index-DXlbLt0r.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-DlVlhRBC.js";import"./24-Dxm6iXAZ.js";import"./24-BpU9xG6s.js";import"./24-B6TQx9cH.js";import"./24-B8I_S3Z2.js";import"./24-CWuMWKc-.js";import"./24-dsfZEEjk.js";import"./24-wxW4P8Ns.js";import"./24-C_f6t1jh.js";import"./24-zy_Eb8yW.js";import"./16-B_-dTBZH.js";import"./24-IUyK1JcU.js";import"./24-CEGSM-Jk.js";import"./16-CGhI_ilc.js";import"./16-BX8-DyZt.js";import"./16-DS6pkd6h.js";import"./index-BiQzV66K.js";import"./index-Bp2By6__.js";import"./index-DBP40flF.js";import"./index-BAf8pb65.js";import"./types-TdnjS80C.js";import"./index-BDf5uUdD.js";import"./localeMapping-Cf4j9Ek8.js";import"./index-IJGfvyRE.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DmVjcjny.js";import"./index-c_cWNEvj.js";import"./index-B6wmWkKl.js";import"./index-ckEmqNWl.js";import"./index-BkEnu_9U.js";import"./index-CJD9gF_1.js";import"./index-D9mSQM-g.js";import"./index-DFTiKKVp.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-qgNwGWRd.js";import"./index-BT2IFx4q.js";import"./index-CxKYaCMZ.js";import"./index-JdG74ms_.js";import"./index-C9A9Gets.js";import"./floating-ui.react-DI7kI9D-.js";import"./sizesMapping-D8QavrGc.js";import"./index-B9DaXCaB.js";import"./index-FpPixloK.js";import"./index-0BERZfC3.js";import"./index-CLCIgSqb.js";import"./index-DSj7G5qX.js";import"./index-DSuX4nuo.js";import"./index-iSEbVQin.js";import"./index-iQSHIB6o.js";import"./index-B85_aTFp.js";import"./index-BkR2z-Xc.js";import"./index-vUoPUndJ.js";import"./hook-C0GcVDfG.js";import"./useFloatingReferenceSync-7YTNcl0h.js";import"./index-B08U8Eji.js";import"./index-Ek0LlI95.js";import"./index-C45P8Ih7.js";import"./index-Dpl1hQuk.js";import"./index-CphKjyIZ.js";import"./index-Db0U5WML.js";import"./index-CQVR9uK0.js";import"./index-b7tpmXVt.js";import"./index-DAfqaa2G.js";import"./index-DTcCV-Je.js";import"./index-Cn8Pdxua.js";import"./index-CPDTjkl_.js";import"./index-Bg1GYGiZ.js";import"./index-yBXS77Dw.js";import"./index-D1p2RRKl.js";import"./index-q_lPpOLF.js";import"./index-CYrbOrYX.js";import"./index-CAzTY8lY.js";import"./index-Dkm8jcwi.js";import"./index-C6xjJOKz.js";import"./index-wSRpoQej.js";import"./index-Du6dXHHd.js";import"./index-DiVXqmN1.js";import"./index-CBUFRF6B.js";import"./index-DMJQuZMx.js";import"./index-B3TyGJqx.js";import"./index-DqRlCSI9.js";import"./index-CD2cCXFu.js";import"./ComboBox-BKCir-_v.js";import"./index-BYHclbdr.js";import"./TreeList-WfFaeHrC.js";import"./copyToClipboard-DB_KM_BY.js";const a="Sidebar",n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2084&t=EnvIMGos3m33avAX-1",P=`import { useState } from 'react';
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
export default App;`,v=()=>{const[e,r]=l.useState(0),o=s=>e===s;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(C,{title:a,description:"Компонент для навигации и организации контента в интерфейсе.",isBeta:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${a}`,figmaLink:n}),t.jsx("div",{className:m.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:o(0),onClick:()=>r(0)}),t.jsx(i.Tab,{label:"Дизайнеру",active:o(1),onClick:()=>r(1)}),t.jsx(i.Tab,{label:"Тестирование",active:o(2),onClick:()=>r(2)})]})}),e==0&&t.jsxs(t.Fragment,{children:[t.jsx(k,{height:800,description:"Пример Sidebar",code:P}),t.jsx(g,{argsTypes:f})]}),e==1&&t.jsx(I,{url:n}),e==2&&t.jsx(x,{componentName:a})]})};function p(e){return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Components/Sidebar/Info",component:h,parameters:{design:{type:"figma",url:"https://www.figma.com/file/NVWvbpDg0KxYpZOlCMFXdy/DS2.0-Sidebar?type=design&node-id=0-1&mode=design&t=Qh3zxP2KDdKIeZpx-0"},jest:["Sidebar.test.tsx"]}}),`
`,t.jsx(b,{of:S}),`
`,t.jsx(d,{children:t.jsx(v,{})})]})}function xe(e={}){const{wrapper:r}={...c(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(p,{...e})}):p()}export{xe as default};
