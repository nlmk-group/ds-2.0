import{r as h,j as t,m as l,S as u,U as S}from"./iframe-C2j-UzJI.js";import{useMDXComponents as k}from"./index-CnUiOmhK.js";import{S as C}from"./index-CC1rooLK.js";import{DecoratorDefault as f}from"./Decorator.stories-DBUaiF2k.js";import{s as p,H as x,E as o}from"./Header-CS8Ul-7Z.js";import{F as w}from"./FigmaEmbed-BXpMjOC7.js";import{P as g,T as b}from"./Tests-BzXlcuiS.js";/* empty css               */import{T as i}from"./index-j_056LZh.js";import{a as j}from"./argsTypes-CzhBl8i2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-P9-ONPUI.js";import"./clsx-B-dksMZM.js";import"./index-B6CIWydZ.js";import"./16-049IwUhX.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-BI-uMOwr.js";import"./index-EKbY0pty.js";import"./index-D3z7S9ph.js";import"./index-Cgs4mkOo.js";import"./32-BI8xtbsU.js";import"./32-CJ0o-VIC.js";import"./24-CuDIHvWX.js";import"./24-Cva_JBwh.js";import"./24-KVke6soD.js";import"./24-BrI2by3D.js";import"./24-B5ODlOpD.js";import"./24-OjUQZVfT.js";import"./24-CeOxJPqx.js";import"./24-CHP3BsWo.js";import"./24-CKMbmC7d.js";import"./24-nYvLFNAE.js";import"./24-fUQbig4h.js";import"./16-BMa1J7tj.js";import"./16-SQC_C9px.js";import"./16-BuZexhOR.js";import"./16-DPV7Mbm7.js";import"./16-ChsbLgyw.js";import"./index-D9e0IWV-.js";import"./index-yGzPLeeo.js";import"./index-Cm_Ba9v7.js";import"./index-CtJ4Gng-.js";import"./index-DQwYpJV-.js";import"./index-Cdr1B_yf.js";import"./colorsMapping-C6bFIk14.js";import"./index-DRJdSF_u.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-DubnQ8iR.js";import"./useFloatingReferenceSync-B9wLGTQm.js";import"./index-DniZBuyb.js";import"./index-mz-Fux1b.js";import"./types-TdnjS80C.js";import"./index-DJNN3joX.js";import"./MenuItem-2rBr_5IO.js";import"./floating-ui.react-B-hVAgIp.js";import"./sizesMapping-D8QavrGc.js";import"./index-BlB3gbyn.js";import"./index-BxD8CrGk.js";import"./index-D--QrFHf.js";import"./index-CNN_3_D-.js";import"./index-DKRZUTnz.js";import"./index-BIghOfGk.js";import"./index-BCWSZamI.js";import"./index-dafhDTNg.js";import"./index-DBzDQ-ch.js";import"./index-AnGV7slG.js";import"./index-Dw3c2VVg.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-DZ9AfOMR.js";import"./index-ClEzh6W5.js";import"./index-BpckL99B.js";import"./index-DxVRZIMU.js";import"./index-BYk4kF2r.js";import"./index-p4R0JKbs.js";import"./index-DX43l6l8.js";import"./index-BYjJWpD4.js";import"./index-D_f15RZF.js";import"./index-dHWQfCU4.js";import"./index-B9O-LOtF.js";import"./index-B8k0jrF3.js";import"./index-EikiiVfW.js";import"./index-jAVg74ZN.js";import"./index-DhCmc_-U.js";import"./index-DGfhABU5.js";import"./index-CrdTlCOS.js";import"./index-Cjmo6ss0.js";import"./index-mFyay1Jh.js";import"./index-CWWsFxD8.js";import"./index-CFvqY2-I.js";import"./index-CLjZt-U5.js";import"./index-DxU2rFyU.js";import"./index-BztNwpqP.js";import"./index-C3s3_K12.js";import"./index-BPEi8AAc.js";import"./index-nrqGK399.js";import"./index-D_AdWthx.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DqweFzDp.js";import"./index-BP9NHWE2.js";import"./index-DTAmrxZ5.js";import"./index-Cia1E6ra.js";import"./index-C7GKKkXm.js";import"./index-D5Omujth.js";import"./index-CzeiuUcG.js";import"./index-CBv4Ru4y.js";import"./index-CCMQkG81.js";import"./index-BmhtsoHO.js";import"./ComboBox-DginoVkT.js";import"./index-B_pht6vj.js";import"./constants-C_zUGLqh.js";import"./TreeList-CmR72Klg.js";import"./copyToClipboard-DB_KM_BY.js";const m="Switch",c="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-42988",I=()=>{const[e,r]=h.useState(0),a=`import { useState } from 'react'
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
