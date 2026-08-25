import{r as l,j as t,m as y,S as B,U as v}from"./iframe-DaRyOQD4.js";import{useMDXComponents as S}from"./index-BgkguWCX.js";import{S as x}from"./index-C2vyTmKj.js";import{DecoratorDefault as h}from"./Decorator.stories-Bdka78jy.js";import{s as n,H as T,E as p}from"./Header-DystUPED.js";import{F as b}from"./FigmaEmbed-BGn6m26F.js";import{P as f,T as j}from"./Tests-CYj1CAIQ.js";/* empty css               */import{T as r}from"./index-gu4HNhdT.js";import{a as G}from"./argsTypes-KjMMgwnY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-B1k1NS-B.js";import"./index-CkK1Msss.js";import"./index-Dvw5dMma.js";import"./16-CvdS6GvX.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CNjWEkXp.js";import"./index-CmkzyLkL.js";import"./index-CBZ_keLy.js";import"./index-7E4T5yQV.js";import"./32-BBsCXdKC.js";import"./32-BjfT3i4e.js";import"./24-CISCaQ63.js";import"./24-60eD6Z-I.js";import"./24-qK0x_3Ma.js";import"./24-B-wOqD5j.js";import"./24-B-h9yLtA.js";import"./24-B_dTG4ub.js";import"./24-D0g0E23x.js";import"./24-gNed2SUN.js";import"./24-C175QdoB.js";import"./24-BGR-3ALd.js";import"./24-DFKe0nyJ.js";import"./16-0E3xB5Tl.js";import"./16-lUiuHRHz.js";import"./16-rE0E2ssb.js";import"./16-BvoUreEM.js";import"./16-BqEOmvvO.js";import"./index-BZ_Hg5x5.js";import"./index-BXFNtNVO.js";import"./index-Chib2uHL.js";import"./index-D8NQ-OjL.js";import"./index-DEiYNjzB.js";import"./index-DdSJm2q8.js";import"./colorsMapping-C6bFIk14.js";import"./index-CcSpOCs_.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-Cf3JpTrJ.js";import"./useFloatingReferenceSync-e0QbxRQz.js";import"./index-gWNSPh3n.js";import"./types-TdnjS80C.js";import"./index-zgHibT2s.js";import"./MenuItem-DG7Boi2a.js";import"./floating-ui.react-CBGLEHeQ.js";import"./sizesMapping-D8QavrGc.js";import"./index-DU1S_Fke.js";import"./index-BS7WuNoV.js";import"./index-Bhkau184.js";import"./index-BXCEi6ek.js";import"./index-BS3dtI07.js";import"./index-DNRaPIJY.js";import"./index-nmEIrJRc.js";import"./index-XqCM6NuH.js";import"./index--gKAIURH.js";import"./index-C0zJEJdb.js";import"./index-PTZ9yk0y.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-VmrMNmoE.js";import"./index-Bm7gwrWd.js";import"./index-yBLZkpey.js";import"./index-Ct4FpV06.js";import"./index-60xW7gWZ.js";import"./index-CTCWt51c.js";import"./index-Dhp36KE2.js";import"./index-DPciguLF.js";import"./index-WmXQrkmE.js";import"./index-At6H3_hV.js";import"./index-B7ZrQXoO.js";import"./index-Xb4KH60s.js";import"./index-DBz_mHH6.js";import"./index-3og25uON.js";import"./index-BmyIjWMa.js";import"./index-B1-FWV8A.js";import"./index-CzJ2Yzrx.js";import"./index-BOIqM1VF.js";import"./index-Dbbtu5hK.js";import"./index-D3a3kz2n.js";import"./index-DA40l4_1.js";import"./index-C1bYJrqZ.js";import"./index-CM0OZ7FR.js";import"./index-DsgmYFjz.js";import"./index-C-tPqMqK.js";import"./index-97oQTlpb.js";import"./index-Ce0aIdaY.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DCWLVNT4.js";import"./index-DJzDGIrh.js";import"./index-11gloAds.js";import"./index-DQw_TNDK.js";import"./index-olQ11wq4.js";import"./index-B2WtkI7A.js";import"./index-BM0Ab2WA.js";import"./index-BZgFgbpd.js";import"./index-Dxzj7Vk2.js";import"./index-DRVVT9BA.js";import"./index-D3Fscyv-.js";import"./ComboBox-BsvZu-Eq.js";import"./index-NjTwKeYa.js";import"./constants-rrTgojkT.js";import"./TreeList-BR8MQBpg.js";import"./copyToClipboard-DB_KM_BY.js";const m="SegmentButtonGroup",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-92301",k=()=>{const[o,e]=l.useState(0),u=`import { useState } from 'react';
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
