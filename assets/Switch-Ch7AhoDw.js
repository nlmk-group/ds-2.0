import{r as h,j as t,m as l,S as u,U as S}from"./iframe-D1ppCfJL.js";import{useMDXComponents as C}from"./index-DUXc5yr1.js";import{S as k}from"./index-CRzaLeVS.js";import{DecoratorDefault as f}from"./Decorator.stories-Ce4quGEU.js";import{s as p,H as g,E as o}from"./Header-CrzktEKM.js";import{F as w}from"./FigmaEmbed-C7Y9lIWu.js";import{P as x,T as b}from"./Tests-ErrWIcVc.js";/* empty css               */import{T as i}from"./index-DlP1k4gA.js";import{a as j}from"./argsTypes-Ssv48fAr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B8OV2sj9.js";import"./clsx-B-dksMZM.js";import"./index-BhAG1mVA.js";import"./16-CJBceTE3.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-BbmMdiDL.js";import"./index-DQiorVga.js";import"./index-pBOwR2Sr.js";import"./index-1Ia9d37J.js";import"./32-DzcHwvay.js";import"./24-Cp8l4Ntb.js";import"./24-CXzdah1X.js";import"./24-eQHncE30.js";import"./24-CRTRQ8Ly.js";import"./24-C2zrmoH8.js";import"./24-DvGStvE4.js";import"./24-DEoWbW1a.js";import"./24-DTwfOo-x.js";import"./24-Dwzv70HG.js";import"./24-hEGWduDH.js";import"./24-BoJlH0P7.js";import"./24-DeVNRByj.js";import"./16-DDpVoX5v.js";import"./16-DyMPAZyw.js";import"./16-Dg_oBXFF.js";import"./16-m76_vWtK.js";import"./16-CtdeCqSX.js";import"./index-D3y4eWrN.js";import"./index-BkONTIs-.js";import"./index-DTDhhVJl.js";import"./index-BQXeN0eF.js";import"./index-_EnS4SPv.js";import"./index-DCLji6qX.js";import"./colorsMapping-C6bFIk14.js";import"./index-BuboyXZl.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-CskC-lf5.js";import"./useFloatingReferenceSync-_s1uppib.js";import"./index-D1MtTpbs.js";import"./index-BAWCPbpv.js";import"./types-TdnjS80C.js";import"./index-dwkJrdOm.js";import"./MenuItem-BiyJ08nY.js";import"./floating-ui.react-DKQvXyy0.js";import"./sizesMapping-D8QavrGc.js";import"./index-CdGiUjLy.js";import"./index-CoVi-s7L.js";import"./index-CYVJgBAK.js";import"./index-BwhgPU9I.js";import"./index-DwwGufnW.js";import"./index-DuvGnr4P.js";import"./index-Cn43EhjI.js";import"./index-Dq_AZ4Gl.js";import"./index-BKgG2BUu.js";import"./index-CZz4O3t8.js";import"./index-DDTzxOqr.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-Ct8-B2RS.js";import"./index-BtqWnsFW.js";import"./index-DZ1-9d6d.js";import"./index-BPCh3R_L.js";import"./index-CEUVPE5x.js";import"./index-Bsj2pXl4.js";import"./index-BFBGSixy.js";import"./index-DBTyYIq5.js";import"./index-B2DrMXcC.js";import"./index-CD-VGwDt.js";import"./index-Dt9QaNhs.js";import"./index-C3RlDP0j.js";import"./index-D9eBI-ul.js";import"./index-DvVC4LD1.js";import"./index-ppwxfrOJ.js";import"./index-CZI9tviC.js";import"./index-BvPqZPcI.js";import"./index-CHKV4Xzj.js";import"./index-BDHI1vN6.js";import"./index-RJYyFZKU.js";import"./index-BYlJK5W5.js";import"./index-BBrdAj2S.js";import"./index-C_PjMrzg.js";import"./index-CV1Omkp3.js";import"./index-BDde93qT.js";import"./index-VSWU4_A4.js";import"./index-CFOhRc1z.js";import"./index-BYVv5Ws0.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-D-Ocfrfd.js";import"./index-CSNQVful.js";import"./index-DrgSnG8u.js";import"./index-BOz-GYvQ.js";import"./index-OW61RsAS.js";import"./index-0w7-TbBZ.js";import"./index-GjSckLp0.js";import"./index-C8eAPz1j.js";import"./index-BZ11wUJ2.js";import"./index-CIHIr33g.js";import"./ComboBox-BIeVukHs.js";import"./index-T1NdoD8u.js";import"./TreeList-COEGgzHL.js";import"./copyToClipboard-DB_KM_BY.js";const m="Switch",c="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-42988&t=EnvIMGos3m33avAX-1",I=()=>{const[e,r]=h.useState(0),a=`import { useState } from 'react'
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
              `,s=d=>e===d;return t.jsxs("div",{className:p.wrapper,children:[t.jsx(g,{title:m,description:"Switch используется для быстрого включения и выключения параметров. Компонент поддерживает подпись, цветовые состояния, иконки и режим disabled.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${m}`,figmaLink:c}),t.jsx("div",{className:p.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:s(0),onClick:()=>r(0)}),t.jsx(i.Tab,{label:"Дизайнеру",active:s(1),onClick:()=>r(1)}),t.jsx(i.Tab,{label:"Тестирование",active:s(2),onClick:()=>r(2)})]})}),e==0&&t.jsxs(t.Fragment,{children:[t.jsx(o,{description:"Базовый переключатель с управляемым состоянием.",code:`import { useState } from 'react'
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
              `}),t.jsx(x,{argsTypes:j})]}),e==1&&t.jsx(w,{url:c}),e==2&&t.jsx(b,{componentName:m})]})};function n(e){return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/Switch/Info",component:k,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?type=design&node-id=456-4744&mode=design&t=h4BKfYMGmmTseCcg-0"},jest:["Switch.test.tsx"]}}),`
`,t.jsx(u,{of:f}),`
`,t.jsx(S,{children:t.jsx(I,{})})]})}function ye(e={}){const{wrapper:r}={...C(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(n,{...e})}):n()}export{ye as default};
