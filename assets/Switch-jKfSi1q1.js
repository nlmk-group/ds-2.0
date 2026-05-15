import{r as h,j as t,m as l,S as u,U as S}from"./iframe-D_LYy3fl.js";import{useMDXComponents as k}from"./index-BGCmU5NS.js";import{S as C}from"./index-BNXMfZxy.js";import{DecoratorDefault as f}from"./Decorator.stories-BO1qjJJ1.js";import{s as p,H as x,E as o}from"./Header-BLbLqtI-.js";import{F as w}from"./FigmaEmbed-DSb0w-ZX.js";import{P as g,T as b}from"./Tests-BJKeRIHR.js";/* empty css               */import{T as i}from"./index-B0cY82zJ.js";import{a as j}from"./argsTypes-DheawqTV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B1PU1CNi.js";import"./clsx-B-dksMZM.js";import"./index-BiOm7QyS.js";import"./16-DkYOHGQf.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-R8QHUFR1.js";import"./index-C_cRJjro.js";import"./index-BU_GnhDV.js";import"./index-Y_-eDXu7.js";import"./32-BBjrBt_R.js";import"./32-B1ex1Qfl.js";import"./24-BzTqzIQp.js";import"./24-b_koWyIs.js";import"./24-XaiESbAO.js";import"./24-SvF-uGUY.js";import"./24-DBpiE5RN.js";import"./24-C31X8Df1.js";import"./24-DjRuCPMC.js";import"./24-owNDVSH-.js";import"./24-BoWyYuma.js";import"./24-ZwSrW1fV.js";import"./24-D4x4T2Vm.js";import"./16-BrwH80oO.js";import"./16-CXgWdZwH.js";import"./16-C70VLwWe.js";import"./16-DJp-l2qz.js";import"./16-8C7xLZBI.js";import"./index-BkmiSUDO.js";import"./index-Q5YcqIYP.js";import"./index-Bj6Bthvm.js";import"./index-BDsANEzD.js";import"./index-yDzNc95d.js";import"./index-B95bsGI0.js";import"./colorsMapping-C6bFIk14.js";import"./index-5PnItkP7.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-oJloIZca.js";import"./useFloatingReferenceSync-DtnNKvIM.js";import"./index-BtP4eAFz.js";import"./index-BWcODPGj.js";import"./types-TdnjS80C.js";import"./index-CzXcIb-j.js";import"./MenuItem-CMiMvsFX.js";import"./floating-ui.react-XEmCJJOr.js";import"./sizesMapping-D8QavrGc.js";import"./index-CLHUbwEU.js";import"./index-BRXpQ6Hr.js";import"./index-D0zaiIGb.js";import"./index-BsdBWJ3a.js";import"./index-CAVMCCtJ.js";import"./index-CMQId7KD.js";import"./index-DqUjQ6V8.js";import"./index-S_LgkFS5.js";import"./index-D3lr74sg.js";import"./index-C3TSEdgN.js";import"./index-B1rmkdDL.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-Cus-K6LR.js";import"./index-BIF_MlAn.js";import"./index-DReekAV_.js";import"./index-P7ZTb--l.js";import"./index-BZOhfber.js";import"./index-CtdZrVFs.js";import"./index-zXTcph7i.js";import"./index-DQYYPt0I.js";import"./index-C3JMqomg.js";import"./index-C_UiSZZG.js";import"./index-lR55cdNn.js";import"./index-D0qqrzz7.js";import"./index-C4C0VBq-.js";import"./index-D0bJ_vk5.js";import"./index-BJJ_y91S.js";import"./index-Bm_nqkYB.js";import"./index-C9OsoAfb.js";import"./index-Bg0Nv3pS.js";import"./index-DPxKDXZx.js";import"./index-BrBqwFe2.js";import"./index-C1VUP76c.js";import"./index-B68SVRmH.js";import"./index-D2Bt9vO-.js";import"./index-BJHfEa9h.js";import"./index-BvNJt26d.js";import"./index-BPOlQxyv.js";import"./index-CeTCku7Z.js";import"./index-EATrCG3U.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-hZhhfzT2.js";import"./index-Dm1Av42Y.js";import"./index-D-Ucr6ou.js";import"./index-DK6KR7s9.js";import"./index-Br2zG6qh.js";import"./index-B32oSB5V.js";import"./index-DVf28Hrl.js";import"./index-DmvA6fX4.js";import"./index-uifo1Fcm.js";import"./index-CTJfTsFr.js";import"./ComboBox-D7VaQLp6.js";import"./index-BUSsu5Rl.js";import"./constants-DVt2R2sY.js";import"./TreeList-B_Os3dVZ.js";import"./copyToClipboard-DB_KM_BY.js";const m="Switch",c="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-42988",I=()=>{const[e,r]=h.useState(0),a=`import { useState } from 'react'
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
