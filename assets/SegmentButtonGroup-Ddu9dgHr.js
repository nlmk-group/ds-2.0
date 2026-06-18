import{r as l,j as t,m as y,S as B,U as v}from"./iframe-BdOpgzrS.js";import{useMDXComponents as S}from"./index-DJy09qRq.js";import{S as x}from"./index-DLQT8wYk.js";import{DecoratorDefault as h}from"./Decorator.stories-C28-sXLg.js";import{s as n,H as T,E as p}from"./Header-DXi6_hVE.js";import{F as b}from"./FigmaEmbed-Chyrs9ER.js";import{P as f,T as j}from"./Tests-Oc7S5ZKL.js";/* empty css               */import{T as r}from"./index-BSn6HQzr.js";import{a as G}from"./argsTypes-DWffSoqI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-CWizWQ-f.js";import"./index-CLAZw8N4.js";import"./index-CJQtOKfQ.js";import"./16--IL1VHaj.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-DVTrHQKM.js";import"./index-B7PkToN1.js";import"./index-BKLHPlSR.js";import"./index-OONZivDn.js";import"./32-ChopWT_z.js";import"./32-ChxPjCDA.js";import"./24-BmvAwPvh.js";import"./24-CV0PNOey.js";import"./24-CRWfoU4Z.js";import"./24-DOFnqipN.js";import"./24-PBHXpKVH.js";import"./24-CBMXdyoG.js";import"./24-BVmNVZn4.js";import"./24-WjLrdny4.js";import"./24-K0yWzWKj.js";import"./24-BznlLpgc.js";import"./24-VDHIr0Dv.js";import"./16-CEnZ3psN.js";import"./16-C2Q8nrRG.js";import"./16-Du9yZ744.js";import"./16-DeFUxAIB.js";import"./16-Cnsgcg9g.js";import"./index-vv3ZnJjs.js";import"./index-CRHD1rp7.js";import"./index-BYrUxwbP.js";import"./index-Ck-XN-ge.js";import"./index-Eg_8IEpf.js";import"./index-BCWgfUlh.js";import"./colorsMapping-C6bFIk14.js";import"./index-D7hqcCmB.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BO8DxY49.js";import"./useFloatingReferenceSync-DqthvRxQ.js";import"./index-CeyXG_zt.js";import"./types-TdnjS80C.js";import"./index-BGK3vMRu.js";import"./MenuItem-lW_S4VfZ.js";import"./floating-ui.react-B81N47Rb.js";import"./sizesMapping-D8QavrGc.js";import"./index-BXEDdhur.js";import"./index-Bo3DQfvQ.js";import"./index-BAERPvu_.js";import"./index-4jA536FU.js";import"./index-B-NoUIZI.js";import"./index-CL6fgpqk.js";import"./index-CoT1f0LI.js";import"./index-Bua5qXkb.js";import"./index-DDPpfVml.js";import"./index-B43IYv7N.js";import"./index-imlWOh4l.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CYye5MAA.js";import"./index-WpmEvsZB.js";import"./index-C1BAN_9s.js";import"./index-B6XbamL1.js";import"./index-BN5r_AV-.js";import"./index-C8MSIeIN.js";import"./index-B0j95XIR.js";import"./index-CeFYkyd7.js";import"./index-R9IHYOO5.js";import"./index-DPvTpWrG.js";import"./index-DkWAreVa.js";import"./index-1Qe_4yAi.js";import"./index-BH6jN-u0.js";import"./index-CUsaH7j6.js";import"./index-jvRyrw0B.js";import"./index-BRrp3xVQ.js";import"./index-ljDOKoqn.js";import"./index-DHYk6Txp.js";import"./index-D9BCvHbX.js";import"./index-k1EAulh0.js";import"./index-C2cVSUod.js";import"./index-D7Mf3A5i.js";import"./index-9Dq95OiO.js";import"./index-Cl4xrWxE.js";import"./index-CrczCUl4.js";import"./index-DcZWdIUK.js";import"./index-BI0qJ3c6.js";import"./index-B2RalwUT.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-BYJCkP-K.js";import"./index-D-LNKzPH.js";import"./index-C0Y8rlI2.js";import"./index-y60vd0es.js";import"./index-BSXV1Fg-.js";import"./index-G-edGsEt.js";import"./index-BYR3WDA_.js";import"./index-COjirL-c.js";import"./index-B_UPuCF1.js";import"./index-5UE0QfQE.js";import"./ComboBox-C09mBvpI.js";import"./index-Dse-RVNj.js";import"./constants-DdJvlSUO.js";import"./TreeList-CxWBdKx_.js";import"./copyToClipboard-DB_KM_BY.js";const m="SegmentButtonGroup",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-92301",k=()=>{const[o,e]=l.useState(0),u=`import { useState } from 'react';
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
