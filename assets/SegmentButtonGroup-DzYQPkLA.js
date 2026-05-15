import{r as l,j as t,m as y,S as B,U as v}from"./iframe-D_LYy3fl.js";import{useMDXComponents as S}from"./index-BGCmU5NS.js";import{S as x}from"./index-CeTCku7Z.js";import{DecoratorDefault as h}from"./Decorator.stories-BO1qjJJ1.js";import{s as n,H as T,E as p}from"./Header-BLbLqtI-.js";import{F as b}from"./FigmaEmbed-DSb0w-ZX.js";import{P as f,T as j}from"./Tests-BJKeRIHR.js";/* empty css               */import{T as r}from"./index-B0cY82zJ.js";import{a as G}from"./argsTypes-B4k3A78i.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-BtP4eAFz.js";import"./index-BiOm7QyS.js";import"./index-B1PU1CNi.js";import"./16-DkYOHGQf.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-R8QHUFR1.js";import"./index-C_cRJjro.js";import"./index-BU_GnhDV.js";import"./index-Y_-eDXu7.js";import"./32-BBjrBt_R.js";import"./32-B1ex1Qfl.js";import"./24-BzTqzIQp.js";import"./24-b_koWyIs.js";import"./24-XaiESbAO.js";import"./24-SvF-uGUY.js";import"./24-DBpiE5RN.js";import"./24-C31X8Df1.js";import"./24-DjRuCPMC.js";import"./24-owNDVSH-.js";import"./24-BoWyYuma.js";import"./24-ZwSrW1fV.js";import"./24-D4x4T2Vm.js";import"./16-BrwH80oO.js";import"./16-CXgWdZwH.js";import"./16-C70VLwWe.js";import"./16-DJp-l2qz.js";import"./16-8C7xLZBI.js";import"./index-BkmiSUDO.js";import"./index-Q5YcqIYP.js";import"./index-Bj6Bthvm.js";import"./index-BDsANEzD.js";import"./index-yDzNc95d.js";import"./index-B95bsGI0.js";import"./colorsMapping-C6bFIk14.js";import"./index-5PnItkP7.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-oJloIZca.js";import"./useFloatingReferenceSync-DtnNKvIM.js";import"./index-BWcODPGj.js";import"./types-TdnjS80C.js";import"./index-CzXcIb-j.js";import"./MenuItem-CMiMvsFX.js";import"./floating-ui.react-XEmCJJOr.js";import"./sizesMapping-D8QavrGc.js";import"./index-CLHUbwEU.js";import"./index-BRXpQ6Hr.js";import"./index-D0zaiIGb.js";import"./index-BsdBWJ3a.js";import"./index-CAVMCCtJ.js";import"./index-CMQId7KD.js";import"./index-DqUjQ6V8.js";import"./index-S_LgkFS5.js";import"./index-D3lr74sg.js";import"./index-C3TSEdgN.js";import"./index-B1rmkdDL.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-Cus-K6LR.js";import"./index-BIF_MlAn.js";import"./index-DReekAV_.js";import"./index-P7ZTb--l.js";import"./index-BZOhfber.js";import"./index-CtdZrVFs.js";import"./index-zXTcph7i.js";import"./index-DQYYPt0I.js";import"./index-C3JMqomg.js";import"./index-C_UiSZZG.js";import"./index-lR55cdNn.js";import"./index-D0qqrzz7.js";import"./index-C4C0VBq-.js";import"./index-D0bJ_vk5.js";import"./index-BJJ_y91S.js";import"./index-Bm_nqkYB.js";import"./index-C9OsoAfb.js";import"./index-Bg0Nv3pS.js";import"./index-DPxKDXZx.js";import"./index-BrBqwFe2.js";import"./index-C1VUP76c.js";import"./index-B68SVRmH.js";import"./index-D2Bt9vO-.js";import"./index-BJHfEa9h.js";import"./index-BvNJt26d.js";import"./index-BPOlQxyv.js";import"./index-EATrCG3U.js";import"./index-BNXMfZxy.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-hZhhfzT2.js";import"./index-Dm1Av42Y.js";import"./index-D-Ucr6ou.js";import"./index-DK6KR7s9.js";import"./index-Br2zG6qh.js";import"./index-B32oSB5V.js";import"./index-DVf28Hrl.js";import"./index-DmvA6fX4.js";import"./index-uifo1Fcm.js";import"./index-CTJfTsFr.js";import"./ComboBox-D7VaQLp6.js";import"./index-BUSsu5Rl.js";import"./constants-DVt2R2sY.js";import"./TreeList-B_Os3dVZ.js";import"./copyToClipboard-DB_KM_BY.js";const m="SegmentButtonGroup",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-92301",k=()=>{const[o,e]=l.useState(0),u=`import { useState } from 'react';
import { SegmentButtonGroup, SegmentButton, Typography } from '@nlmk/ds-2.0';

export default App = () => {
  const [active, setActive] = useState(0);

  return (
    <SegmentButtonGroup>
      <SegmentButton buttonIndex={0} active={active === 0} onClick={() => setActive(0)}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">Сталь</Typography>
      </SegmentButton>
      <SegmentButton buttonIndex={1} active={active === 1} onClick={() => setActive(1)}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">Цинк</Typography>
      </SegmentButton>
      <SegmentButton buttonIndex={2} active={active === 2} onClick={() => setActive(2)}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">Чугун</Typography>
      </SegmentButton>
    </SegmentButtonGroup>
  );
}
`,c=`import { useState } from 'react';
import { SegmentButtonGroup, SegmentButton, Typography } from '@nlmk/ds-2.0';

export default App = () => {
  const [activeM, setActiveM] = useState(0);
  const [activeS, setActiveS] = useState(0);

  return (
    <div style={{ display: 'grid', gap: '16px' }}>
      <SegmentButtonGroup size="m">
        <SegmentButton buttonIndex={0} active={activeM === 0} onClick={() => setActiveM(0)}>
          <Typography variant="Body1-Bold" color="var(--steel-90)">Размер M</Typography>
        </SegmentButton>
        <SegmentButton buttonIndex={1} active={activeM === 1} onClick={() => setActiveM(1)}>
          <Typography variant="Body1-Bold" color="var(--steel-90)">Опция</Typography>
        </SegmentButton>
      </SegmentButtonGroup>

      <SegmentButtonGroup size="s">
        <SegmentButton buttonIndex={0} active={activeS === 0} onClick={() => setActiveS(0)}>
          <Typography variant="Body1-Bold" color="var(--steel-90)">Размер S</Typography>
        </SegmentButton>
        <SegmentButton buttonIndex={1} active={activeS === 1} onClick={() => setActiveS(1)}>
          <Typography variant="Body1-Bold" color="var(--steel-90)">Опция</Typography>
        </SegmentButton>
      </SegmentButtonGroup>
    </div>
  );
}
`,d=`import { SegmentButtonGroup, SegmentButton, Typography } from '@nlmk/ds-2.0';

export default App = () => (
  <div style={{ display: 'grid', gap: '16px' }}>
    <SegmentButtonGroup disabled>
      <SegmentButton buttonIndex={0}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">Группа disabled</Typography>
      </SegmentButton>
      <SegmentButton buttonIndex={1}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">Опция</Typography>
      </SegmentButton>
    </SegmentButtonGroup>

    <SegmentButtonGroup>
      <SegmentButton buttonIndex={0} active>
        <Typography variant="Body1-Bold" color="var(--steel-90)">Активная</Typography>
      </SegmentButton>
      <SegmentButton buttonIndex={1} disabled>
        <Typography variant="Body1-Bold" color="var(--steel-90)">Локально disabled</Typography>
      </SegmentButton>
    </SegmentButtonGroup>
  </div>
);
`,i=g=>o===g;return t.jsxs("div",{className:n.wrapper,children:[t.jsx(T,{title:m,description:"SegmentButtonGroup объединяет переключаемые кнопки в единый контрол, где активен только один вариант. Компонент поддерживает размеры и блокировку всей группы или отдельных кнопок.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${m}`,figmaLink:a}),t.jsx("div",{className:n.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:i(0),onClick:()=>e(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:i(1),onClick:()=>e(1)}),t.jsx(r.Tab,{label:"Тестирование",active:i(2),onClick:()=>e(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(p,{minHeight:420,description:"Базовое переключение активного сегмента.",code:u}),t.jsx(p,{minHeight:420,description:"Размеры группы сегментов через prop size.",code:c}),t.jsx(p,{minHeight:420,description:"Блокировка всей группы и отдельной кнопки.",code:d}),t.jsx(f,{argsTypes:G})]}),o==1&&t.jsx(b,{url:a}),o==2&&t.jsx(j,{componentName:m})]})};function s(o){return t.jsxs(t.Fragment,{children:[t.jsx(y,{title:"Components/SegmentButtonGroup/Info",component:x,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-92301"},jest:["SegmentButtonGroup.test.tsx"]}}),`
`,t.jsx(B,{of:h}),`
`,t.jsx(v,{children:t.jsx(k,{})})]})}function Do(o={}){const{wrapper:e}={...S(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(s,{...o})}):s()}export{Do as default};
