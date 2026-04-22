import{r as h,j as t,m as l,S as u,U as S}from"./iframe-Bo4nALm7.js";import{useMDXComponents as C}from"./index-CNvPJL2u.js";import{S as k}from"./index-CXj-YKM1.js";import{DecoratorDefault as f}from"./Decorator.stories-C3iA9RHT.js";import{s as p,H as g,E as o}from"./Header-Bi47uln5.js";import{F as w}from"./FigmaEmbed-CwaUbb0p.js";import{P as x,T as b}from"./Tests-CBVV_6V2.js";/* empty css               */import{T as i}from"./index-DX_ysYvL.js";import{a as j}from"./argsTypes-COervsJ-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CUIhMP_o.js";import"./clsx-B-dksMZM.js";import"./index-CRs1WgNz.js";import"./16-aMqW81vf.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-BBFxLaJS.js";import"./index-BdFgkFQG.js";import"./index-DcKSVsFY.js";import"./index-DUNZSITs.js";import"./32-DrwGWWyr.js";import"./24-DMCeAA-V.js";import"./24-85pGpdFN.js";import"./24-DO_3r_fK.js";import"./24-BysagIQq.js";import"./24-D5XAI_AH.js";import"./24-BfwlYFIe.js";import"./24-CbRb0MeE.js";import"./24-NHhFZcqx.js";import"./24-gy5ADEN_.js";import"./24-CNhMk3Hk.js";import"./24-Blxmuo2i.js";import"./24-C8hAPZTM.js";import"./16-BT8X9gPM.js";import"./16-CUTQAt8-.js";import"./16-BgwH21Xk.js";import"./16-Bi9OWKG5.js";import"./16-KygOpizh.js";import"./index-cy5tNcXH.js";import"./index-C-nYBGLl.js";import"./index-DMp9sWPh.js";import"./index-D9HYjQb0.js";import"./index-DDZBgTK0.js";import"./index-Bk9qrNZ3.js";import"./colorsMapping-C6bFIk14.js";import"./index-rp9NcFhw.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-yK1xfIEO.js";import"./useFloatingReferenceSync-Bw3HtT9W.js";import"./index-CptZomEK.js";import"./index-BOLRlznn.js";import"./types-TdnjS80C.js";import"./index-i6hjNmeh.js";import"./MenuItem-Bua9EO5H.js";import"./floating-ui.react-C906_DDE.js";import"./sizesMapping-D8QavrGc.js";import"./index-CiQrrBbP.js";import"./index-D1TI5Y5u.js";import"./index-5mM__hj5.js";import"./index-xjOxjbir.js";import"./index-DFP8AFjH.js";import"./index-Yu4XOZcE.js";import"./index-BcObFQTT.js";import"./index-DLmt8FUL.js";import"./index-Cnz5MgXS.js";import"./index-Cb5WN4nC.js";import"./index-CiKGUfYn.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-DLNO0Sc-.js";import"./index-BH32iLo9.js";import"./index-Bi6e8oFp.js";import"./index-DZcyuWQ6.js";import"./index-DCWDgjRo.js";import"./index-R1K1l0qL.js";import"./index-D0KUbv5S.js";import"./index-Cq5dlaEe.js";import"./index-BE9G9-1L.js";import"./index-BMsjPRPD.js";import"./index-BVqpk8_K.js";import"./index-BFSn3M6J.js";import"./index-C-aAOGaG.js";import"./index-B6633_5K.js";import"./index-KMoa1m14.js";import"./index-U5t1T9aa.js";import"./index-BKl3Bi28.js";import"./index-Dg2gdaVK.js";import"./index-DyD8r78B.js";import"./index-t_AVc4Gt.js";import"./index-Bi15G151.js";import"./index-CjPvelGF.js";import"./index-BIa2fxZk.js";import"./index-CVumvtuI.js";import"./index-DF-bDP0l.js";import"./index-BLcxd_1e.js";import"./index-9uW_AGTn.js";import"./index-A-Ir1b2D.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CNR-ofzU.js";import"./index-DZkdzlJ9.js";import"./index-C9Wj5XRW.js";import"./index-B36MGRax.js";import"./index-B9qru-GC.js";import"./index-pRNUvCjI.js";import"./index-BURAcp9Z.js";import"./index-Cs7fUJPF.js";import"./index-C1iGHzcO.js";import"./index-CgLFB2Hb.js";import"./ComboBox-BaEbyY7G.js";import"./index-BWYedRL0.js";import"./index-Xr1AR9qo.js";import"./TreeList-DpVIVhWV.js";import"./copyToClipboard-DB_KM_BY.js";const m="Switch",c="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-42988&t=EnvIMGos3m33avAX-1",I=()=>{const[e,r]=h.useState(0),a=`import { useState } from 'react'
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
`,t.jsx(S,{children:t.jsx(I,{})})]})}function Ae(e={}){const{wrapper:r}={...C(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(n,{...e})}):n()}export{Ae as default};
