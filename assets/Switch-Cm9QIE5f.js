import{r as h,j as t,m as l,S as u,U as S}from"./iframe-DaRyOQD4.js";import{useMDXComponents as k}from"./index-BgkguWCX.js";import{S as C}from"./index-DCWLVNT4.js";import{DecoratorDefault as f}from"./Decorator.stories-Bdka78jy.js";import{s as p,H as x,E as o}from"./Header-DystUPED.js";import{F as w}from"./FigmaEmbed-BGn6m26F.js";import{P as g,T as b}from"./Tests-CYj1CAIQ.js";/* empty css               */import{T as i}from"./index-gu4HNhdT.js";import{a as j}from"./argsTypes-BUBtny34.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dvw5dMma.js";import"./clsx-B-dksMZM.js";import"./index-CkK1Msss.js";import"./16-CvdS6GvX.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CNjWEkXp.js";import"./index-CmkzyLkL.js";import"./index-CBZ_keLy.js";import"./index-7E4T5yQV.js";import"./32-BBsCXdKC.js";import"./32-BjfT3i4e.js";import"./24-CISCaQ63.js";import"./24-60eD6Z-I.js";import"./24-qK0x_3Ma.js";import"./24-B-wOqD5j.js";import"./24-B-h9yLtA.js";import"./24-B_dTG4ub.js";import"./24-D0g0E23x.js";import"./24-gNed2SUN.js";import"./24-C175QdoB.js";import"./24-BGR-3ALd.js";import"./24-DFKe0nyJ.js";import"./16-0E3xB5Tl.js";import"./16-lUiuHRHz.js";import"./16-rE0E2ssb.js";import"./16-BvoUreEM.js";import"./16-BqEOmvvO.js";import"./index-BZ_Hg5x5.js";import"./index-BXFNtNVO.js";import"./index-Chib2uHL.js";import"./index-D8NQ-OjL.js";import"./index-DEiYNjzB.js";import"./index-DdSJm2q8.js";import"./colorsMapping-C6bFIk14.js";import"./index-CcSpOCs_.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-Cf3JpTrJ.js";import"./useFloatingReferenceSync-e0QbxRQz.js";import"./index-B1k1NS-B.js";import"./index-gWNSPh3n.js";import"./types-TdnjS80C.js";import"./index-zgHibT2s.js";import"./MenuItem-DG7Boi2a.js";import"./floating-ui.react-CBGLEHeQ.js";import"./sizesMapping-D8QavrGc.js";import"./index-DU1S_Fke.js";import"./index-BS7WuNoV.js";import"./index-Bhkau184.js";import"./index-BXCEi6ek.js";import"./index-BS3dtI07.js";import"./index-DNRaPIJY.js";import"./index-nmEIrJRc.js";import"./index-XqCM6NuH.js";import"./index--gKAIURH.js";import"./index-C0zJEJdb.js";import"./index-PTZ9yk0y.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-VmrMNmoE.js";import"./index-Bm7gwrWd.js";import"./index-yBLZkpey.js";import"./index-Ct4FpV06.js";import"./index-60xW7gWZ.js";import"./index-CTCWt51c.js";import"./index-Dhp36KE2.js";import"./index-DPciguLF.js";import"./index-WmXQrkmE.js";import"./index-At6H3_hV.js";import"./index-B7ZrQXoO.js";import"./index-Xb4KH60s.js";import"./index-DBz_mHH6.js";import"./index-3og25uON.js";import"./index-BmyIjWMa.js";import"./index-B1-FWV8A.js";import"./index-CzJ2Yzrx.js";import"./index-BOIqM1VF.js";import"./index-Dbbtu5hK.js";import"./index-D3a3kz2n.js";import"./index-DA40l4_1.js";import"./index-C1bYJrqZ.js";import"./index-CM0OZ7FR.js";import"./index-DsgmYFjz.js";import"./index-C-tPqMqK.js";import"./index-97oQTlpb.js";import"./index-C2vyTmKj.js";import"./index-Ce0aIdaY.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DJzDGIrh.js";import"./index-11gloAds.js";import"./index-DQw_TNDK.js";import"./index-olQ11wq4.js";import"./index-B2WtkI7A.js";import"./index-BM0Ab2WA.js";import"./index-BZgFgbpd.js";import"./index-Dxzj7Vk2.js";import"./index-DRVVT9BA.js";import"./index-D3Fscyv-.js";import"./ComboBox-BsvZu-Eq.js";import"./index-NjTwKeYa.js";import"./constants-rrTgojkT.js";import"./TreeList-BR8MQBpg.js";import"./copyToClipboard-DB_KM_BY.js";const m="Switch",c="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-42988",I=()=>{const[e,r]=h.useState(0),a=`import { useState } from 'react'
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
