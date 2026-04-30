import{r as h,j as t,m as l,S as u,U as S}from"./iframe-BYEcINU_.js";import{useMDXComponents as k}from"./index-Bpsqjrzl.js";import{S as C}from"./index-Dbavy875.js";import{DecoratorDefault as f}from"./Decorator.stories-BJBADL9m.js";import{s as p,H as x,E as o}from"./Header-QIn0U31P.js";import{F as w}from"./FigmaEmbed-DhnyYYAw.js";import{P as g,T as b}from"./Tests-BIMEJe_y.js";/* empty css               */import{T as i}from"./index-nj7VEw_R.js";import{a as j}from"./argsTypes-DsHkDOB4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CTms4VQ3.js";import"./clsx-B-dksMZM.js";import"./index-XP9rVAlC.js";import"./16-BbOPmjLm.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CaNWwqgI.js";import"./index-DEnU3uQc.js";import"./index-CrpGn3Cf.js";import"./index-aRgZryTI.js";import"./32-BcLCWGHn.js";import"./32-DEU7E1yO.js";import"./24-nElrukLD.js";import"./24-CuYChjrW.js";import"./24-Bg-YkJof.js";import"./24-DOSHn3uj.js";import"./24-qZuYAR8B.js";import"./24-Mxvma0Zx.js";import"./24-wPS-GG8M.js";import"./24-mlyJft-U.js";import"./24-DTKLnnJ8.js";import"./24-CSKlV1Hw.js";import"./24-BeWDWat7.js";import"./16-DVw9RX5j.js";import"./16-BucT6FLY.js";import"./16-CjgRgEbF.js";import"./16--L8JfMjs.js";import"./16-B5oEirVJ.js";import"./index-BQVhB4iE.js";import"./index-D2JaD0OQ.js";import"./index-U8G7M_Zs.js";import"./index-DH6ASFUC.js";import"./index-si5AuEoF.js";import"./index-COgWJkER.js";import"./colorsMapping-C6bFIk14.js";import"./index-BYOusy-M.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-CK0J7sHo.js";import"./useFloatingReferenceSync-CsYvYhZU.js";import"./index-D6OuuQjE.js";import"./index-DzEvNTCJ.js";import"./types-TdnjS80C.js";import"./index-DZzZHuYh.js";import"./MenuItem-DdgCvPH4.js";import"./floating-ui.react-_Zuln8if.js";import"./sizesMapping-D8QavrGc.js";import"./index-Bzsm1X0Z.js";import"./index-CyD8HQ96.js";import"./index-COznie4U.js";import"./index-ZNnHXGDD.js";import"./index-BC0Sks76.js";import"./index-uwXEqcGR.js";import"./index-BBfWv7b0.js";import"./index-C0g5OMD9.js";import"./index-CojpXGg7.js";import"./index-C39GlgiC.js";import"./index-CaLPl1qK.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CA87DmbL.js";import"./index-CkchZA1S.js";import"./index-C3exR97g.js";import"./index-7nLr9Lje.js";import"./index-7AUFuuQ2.js";import"./index-DY9r7tva.js";import"./index-D0bmCGQd.js";import"./index-8w1in6Dy.js";import"./index-CadNeeou.js";import"./index-DEdwYyQK.js";import"./index-dQ62oyVP.js";import"./index-BLillJGO.js";import"./index-BiaIOUue.js";import"./index-BUTff1zv.js";import"./index-D1Kdw1Ur.js";import"./index-CMCaOPVQ.js";import"./index-De9lbcqo.js";import"./index-CkFogjvg.js";import"./index-DNO6SmUQ.js";import"./index-atP-xhLu.js";import"./index-NFm-qVra.js";import"./index-CCZFPEUL.js";import"./index-CgIvrtde.js";import"./index-Ch64POBU.js";import"./index-DCa7h74_.js";import"./index-CWpqocMb.js";import"./index-D0MIXxpi.js";import"./index-BQH0MRqt.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-2AxAz-gb.js";import"./index-CVi-cyUF.js";import"./index-YYfSsAzR.js";import"./index-YVaISHls.js";import"./index-CQY7sNNS.js";import"./index-Bbvb6W_F.js";import"./index-DOV__V4z.js";import"./index-QJ3E8HAN.js";import"./index-ByTrgoFe.js";import"./index-Brevh8m6.js";import"./ComboBox-4epN55r0.js";import"./index-7YhxVk_9.js";import"./constants-C9-wC4hs.js";import"./TreeList-DI_XRzGG.js";import"./copyToClipboard-DB_KM_BY.js";const m="Switch",c="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-42988",I=()=>{const[e,r]=h.useState(0),a=`import { useState } from 'react'
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
