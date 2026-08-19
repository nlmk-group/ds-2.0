import{r as h,j as t,m as l,S as u,U as S}from"./iframe-CiFytELZ.js";import{useMDXComponents as k}from"./index-DybNXUjF.js";import{S as C}from"./index-0qRpJbl9.js";import{DecoratorDefault as f}from"./Decorator.stories-BzItgCqc.js";import{s as p,H as x,E as o}from"./Header-X6Kr5SHJ.js";import{F as w}from"./FigmaEmbed-C2oXb4D3.js";import{P as g,T as b}from"./Tests-BcceQP3J.js";/* empty css               */import{T as i}from"./index-BQkij8xm.js";import{a as j}from"./argsTypes-B7K1dP-k.js";import"./preload-helper-PPVm8Dsz.js";import"./index-AScBX7ch.js";import"./clsx-B-dksMZM.js";import"./index-yhpuehNm.js";import"./16-DE4viI8O.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-DJEYtQIn.js";import"./index-Caup2jln.js";import"./index-DawP55CX.js";import"./index-ageiqw5d.js";import"./32-BUE7duXK.js";import"./32-dCVSFMeK.js";import"./24-CEYPuBp0.js";import"./24-DMYK_POk.js";import"./24-Bt83Uokx.js";import"./24-Cg37IYki.js";import"./24-URZj1P3S.js";import"./24-C7n6mi1f.js";import"./24-B6ivgZpd.js";import"./24-RrFXbNlX.js";import"./24-DG7ZIblO.js";import"./24-C2S-g5KW.js";import"./24-r-rrcgWc.js";import"./16-BfVH5IGj.js";import"./16-CdjU_4JV.js";import"./16-BT9sIG7U.js";import"./16-CqiQVPWz.js";import"./16-D7g-PMEy.js";import"./index-Cw2HZq9h.js";import"./index-g6EAEksG.js";import"./index-BxUgnl0U.js";import"./index-yVptosnr.js";import"./index-DxDzu7P3.js";import"./index-7UQTagkh.js";import"./colorsMapping-C6bFIk14.js";import"./index-DKkLeCla.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BbS2YyIp.js";import"./useFloatingReferenceSync-BSceUB3Q.js";import"./index-BCkmK5YD.js";import"./index-BbXZCDfz.js";import"./types-TdnjS80C.js";import"./index-DVfkSf50.js";import"./MenuItem-DEzF3Wos.js";import"./floating-ui.react-KcrBVsuh.js";import"./sizesMapping-D8QavrGc.js";import"./index-BA4dGRCH.js";import"./index-D7Enchig.js";import"./index-JoZBJQz1.js";import"./index-Y7pOMNss.js";import"./index-CRJtbCyP.js";import"./index-CJaX5efT.js";import"./index-5rbdE4ra.js";import"./index-D2T7B9nx.js";import"./index-DpPQjWyC.js";import"./index-BtEyOEDh.js";import"./index-C-AQ4SnI.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-DH6FMXCn.js";import"./index-DJ0iMoCC.js";import"./index-IX9qaxFo.js";import"./index-BJsQCtoC.js";import"./index-GdPBVw6h.js";import"./index-mDMSBCcD.js";import"./index-BBwGQaN3.js";import"./index-PUDlQz6m.js";import"./index-BKVJajSn.js";import"./index-CtOsqJ6t.js";import"./index-B98CSxRp.js";import"./index-A9JPGDIL.js";import"./index-CswK6oZ4.js";import"./index-BB_iyaOG.js";import"./index-CAlDJVEd.js";import"./index-CdHqNcI6.js";import"./index-B7G0hzPa.js";import"./index-BtVPDrmD.js";import"./index-BFdlLUWB.js";import"./index-C9riXii6.js";import"./index-CwibpBsN.js";import"./index-DQFKTQjB.js";import"./index-DaZRXyVS.js";import"./index-3AXam_x1.js";import"./index-Dhsf1Its.js";import"./index-BBOasYPk.js";import"./index-Ce4DEavg.js";import"./index-B-uV3fk6.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CTO_m6qR.js";import"./index-Co7ZUFcE.js";import"./index-DoIF5vPd.js";import"./index-DptaoNrR.js";import"./index-C3SBMNpO.js";import"./index-DvWfCBSL.js";import"./index-CcYULIfU.js";import"./index-Daq8v7vG.js";import"./index-Cz_vA1hZ.js";import"./index-BlRSHBC7.js";import"./ComboBox-PS9Y9Xue.js";import"./index-CYnbSGsW.js";import"./constants-ClWdtWAL.js";import"./TreeList-77y535wQ.js";import"./copyToClipboard-DB_KM_BY.js";const m="Switch",c="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-42988",I=()=>{const[e,r]=h.useState(0),a=`import { useState } from 'react'
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
