import{r as h,j as t,m as l,S as u,U as S}from"./iframe-DJB5J1Gm.js";import{useMDXComponents as k}from"./index-Ctdy7DcM.js";import{S as C}from"./index-CtT43hFd.js";import{DecoratorDefault as f}from"./Decorator.stories-CLu9BKsp.js";import{s as p,H as x,E as o}from"./Header-DtfMJKVh.js";import{F as w}from"./FigmaEmbed-DChIjyS1.js";import{P as g,T as b}from"./Tests-Dnz3uSUu.js";/* empty css               */import{T as i}from"./index-K-Os3Mkv.js";import{a as j}from"./argsTypes-V1Oo3q7l.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQWz6SQ_.js";import"./clsx-B-dksMZM.js";import"./index-BnjgdTIo.js";import"./16-B11CXHkV.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-BTlJCBjo.js";import"./index-27Xu9hjA.js";import"./index-BcIuHaz8.js";import"./index-CiWWQHM4.js";import"./32-DwqdcbQV.js";import"./32-GoS4XOF1.js";import"./24-OO9CWz_o.js";import"./24-Ds_njt3X.js";import"./24-BJ1WZVGw.js";import"./24-ytII2ozW.js";import"./24-DKN-2bNd.js";import"./24-Bh7XmxMn.js";import"./24-DhKB3mvd.js";import"./24-CU8ORY4X.js";import"./24-Bfhp3VeF.js";import"./24-DGoSPibJ.js";import"./24-DTEPByrl.js";import"./16-DeFHhMUc.js";import"./16-faObEf2T.js";import"./16-CJ_ZU7zi.js";import"./16-CLl9DOT8.js";import"./16-BA4929Um.js";import"./index-DK9ZFXds.js";import"./index-C1EZBTl0.js";import"./index-DL3eBH-P.js";import"./index-Bf78mEfz.js";import"./index-DwnOefxr.js";import"./index-C1y8duee.js";import"./colorsMapping-C6bFIk14.js";import"./index-DRGi1AEL.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-1gFuoChe.js";import"./useFloatingReferenceSync-LO62TbyM.js";import"./index-DcVLIfyB.js";import"./index-aBKmaxH3.js";import"./types-TdnjS80C.js";import"./index-6RvY6v79.js";import"./MenuItem-CYKzA5fc.js";import"./floating-ui.react-BitOEuDU.js";import"./sizesMapping-D8QavrGc.js";import"./index-CsNOcf0o.js";import"./index-CD8aF-OU.js";import"./index-BuTn90Kx.js";import"./index-CHjGJJzX.js";import"./index-DAf--LqM.js";import"./index-1fbwNQxU.js";import"./index-C_3lvTrt.js";import"./index-BiwwAO30.js";import"./index-DFRqr6gV.js";import"./index-BanPx_DE.js";import"./index-srYpiRUO.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-D9jdXbdP.js";import"./index-CWuaVSgJ.js";import"./index-HWoLZMFR.js";import"./index-B-Q4wIzC.js";import"./index-qo-mggsg.js";import"./index-CAA4Qv86.js";import"./index-DrzY2cvO.js";import"./index-B1fAjmi8.js";import"./index-CBalpVvc.js";import"./index-BhKUEEoJ.js";import"./index-CprSx77w.js";import"./index-ySRw8COl.js";import"./index-C3D1rheI.js";import"./index-CC4d2-d6.js";import"./index-BkLOgpm1.js";import"./index-ORro-3F_.js";import"./index-Bn6r3qI-.js";import"./index-DCHl1NWI.js";import"./index-xYIn6EQB.js";import"./index-DvdMLPTa.js";import"./index-CZ9VNNID.js";import"./index-sokDMC8X.js";import"./index-DKSgdMEw.js";import"./index-1lDXSB5o.js";import"./index-BS716PzN.js";import"./index-BoULGum0.js";import"./index-QllAPaHn.js";import"./index-Cem2Ag1w.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DhvmMPlp.js";import"./index-B4DCnhI4.js";import"./index-Wm7yXHG7.js";import"./index-DE9x5FJz.js";import"./index-BU822_AO.js";import"./index-BL3IVkrQ.js";import"./index-C9IwNMpc.js";import"./index-CabIIsyC.js";import"./index-DQOwJSOs.js";import"./index-C7pppfbp.js";import"./ComboBox-_Uzqzogs.js";import"./index-SEGUll7-.js";import"./constants-DzgFZdqM.js";import"./TreeList-BXBmTHhj.js";import"./copyToClipboard-DB_KM_BY.js";const m="Switch",c="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-42988",I=()=>{const[e,r]=h.useState(0),a=`import { useState } from 'react'
import { Switch } from '@nlmk/ds-2.0';

export default App = () => {
  const [brand, setBrand] = useState(true);
  const [success, setSuccess] = useState(true);
  const [warning, setWarning] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div style={{ display: 'grid', gap: '12px' }}>
      <Switch checked={brand} onChange={setBrand} label="Brand" color="brand" />
      <Switch checked={success} onChange={setSuccess} label="Success" color="success" />
      <Switch checked={warning} onChange={setWarning} label="Warning" color="warning" />
      <Switch checked={error} onChange={setError} label="Error" color="error" />
    </div>
  )
}
              `,s=d=>e===d;return t.jsxs("div",{className:p.wrapper,children:[t.jsx(x,{title:m,description:"Switch используется для быстрого включения и выключения параметров. Компонент поддерживает подпись, цветовые состояния, иконки и режим disabled.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${m}`,figmaLink:c}),t.jsx("div",{className:p.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:s(0),onClick:()=>r(0)}),t.jsx(i.Tab,{label:"Дизайнеру",active:s(1),onClick:()=>r(1)}),t.jsx(i.Tab,{label:"Тестирование",active:s(2),onClick:()=>r(2)})]})}),e==0&&t.jsxs(t.Fragment,{children:[t.jsx(o,{description:"Базовый переключатель с управляемым состоянием.",code:`import { useState } from 'react'
import { Switch } from '@nlmk/ds-2.0';

export default App = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <Switch
      checked={isChecked}
      onChange={setIsChecked}
    />
  )
}
              `}),t.jsx(o,{description:"Недоступное состояние переключателя.",code:`import { Switch } from '@nlmk/ds-2.0';

export default App = () => {
  return (
    <Switch
      checked={false}
      onChange={() => {}}
      disabled
    />
  )
}
              `}),t.jsx(o,{description:"Использование подписи через label.",code:`import { useState } from 'react'
import { Switch } from '@nlmk/ds-2.0';

export default App = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isSecondChecked, setIsSecondChecked] = useState(true);
  const [isThirdChecked, setIsThirdChecked] = useState(false);

  return (
    <>
      <Switch
        checked={isChecked}
        onChange={setIsChecked}
        label={'Не активный Switch'}
      />
      <Switch
        checked={isSecondChecked}
        onChange={setIsSecondChecked}
        label={'Активный Switch'}
      />
      <Switch
        checked={isThirdChecked}
        onChange={setIsThirdChecked}
        label={'Заблокированный Switch'}
        disabled
      />
    </>
  )
}
              `}),t.jsx(o,{description:"Цветовые состояния переключателя через prop color.",code:a}),t.jsx(o,{description:"Переключатель с иконками для активного и неактивного состояния.",code:`import { useState } from 'react'
import { Switch, Icon } from '@nlmk/ds-2.0';

export default App = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch
      checked={isChecked}
      onChange={setIsChecked}
      activeIcon={(
        <Icon
          name='IconStarOutlined16'
          containerSize={16}
          htmlColor={'var(--unique-white)'}
        />
      )}
      inactiveIcon={(
        <Icon
          name='IconStarOutlined16'
          containerSize={16}
          htmlColor={'var(--steel-60)'}
        />
      )}
    />
  )
}
              `}),t.jsx(g,{argsTypes:j})]}),e==1&&t.jsx(w,{url:c}),e==2&&t.jsx(b,{componentName:m})]})};function n(e){return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/Switch/Info",component:C,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-42988"},jest:["Switch.test.tsx"]}}),`
`,t.jsx(u,{of:f}),`
`,t.jsx(S,{children:t.jsx(I,{})})]})}function Ae(e={}){const{wrapper:r}={...k(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(n,{...e})}):n()}export{Ae as default};
