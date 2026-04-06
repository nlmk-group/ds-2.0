import{r as l,j as t,m as y,S as B,U as v}from"./iframe-adG_7yRG.js";import{useMDXComponents as S}from"./index-Cg8Pf3Pw.js";import{S as x}from"./index-CZ0fPPTA.js";import{DecoratorDefault as h}from"./Decorator.stories-Beo23sgK.js";import{s as m,H as T,E as p}from"./Header-cMHYDLeC.js";import{F as b}from"./FigmaEmbed-BWR-OLCZ.js";import{P as f,T as j}from"./Tests-C1XQ0sNC.js";/* empty css               */import{T as r}from"./index-Yehuvb9K.js";import{a as G}from"./argsTypes-Bv3ppDgY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-Dy1IE1cv.js";import"./index-CnTjgQRx.js";import"./index-DzN3aT-y.js";import"./index-TjqOvBrG.js";import"./index-N0HJx9V2.js";import"./index-y2k2yeKx.js";import"./16-C5RTlL5k.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-C2G2GNsa.js";import"./24-B-tnmrg_.js";import"./index-C6st097g.js";import"./16-LI8OsMJg.js";import"./index-DSz2Fxi8.js";import"./index-DC_nQVbx.js";import"./32-B9XnRb5u.js";import"./24-DrBRk2vS.js";import"./24-BuaVNHQi.js";import"./24-B4fAX0Ec.js";import"./24-Wv8b4C8A.js";import"./24-GH3yabNM.js";import"./24-BDLYxJUB.js";import"./24-DcUw9JWs.js";import"./24-BxGqfMjL.js";import"./24-B0jNPX91.js";import"./16-BTp4GQQG.js";import"./16-D-NUuvME.js";import"./index-BSzISWDV.js";import"./index-Bw5qm4Ov.js";import"./index-75kOkesn.js";import"./index-Dyd59tUY.js";import"./index-BhxlvnnA.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-COV9g-2Q.js";import"./index-DJrVOycg.js";import"./index-DtX9i5FK.js";import"./index-B1pHFt52.js";import"./index-CwSciSyB.js";import"./types-TdnjS80C.js";import"./floating-ui.react-7VA0tf7C.js";import"./sizesMapping-D8QavrGc.js";import"./index-Da_FDSx_.js";import"./index-U_RCd_HH.js";import"./index-CMSErBpE.js";import"./index-CzkpZwDT.js";import"./index-BOTgB3bz.js";import"./index-DFAIDFiK.js";import"./index-CkcKW4Vm.js";import"./index-C0jfxf7x.js";import"./index-Csnb6gHF.js";import"./index-BYkQO_14.js";import"./index-CsSUhH6Q.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-Cl0xhJAL.js";import"./useFloatingReferenceSync-D48fx_Db.js";import"./index-D02QEMLS.js";import"./index-CXTleZNA.js";import"./index-aAdctPR4.js";import"./index-onHurrhQ.js";import"./index-QnhurHRA.js";import"./index--d2ZPp2Q.js";import"./index-44u0uri5.js";import"./index-PgA7KtkC.js";import"./index-CzL7ANP0.js";import"./index-DFN2ZEva.js";import"./index-B97cDh6f.js";import"./index-BMxGNkbP.js";import"./index-Bj8TCYsg.js";import"./index-KPC3KFCd.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CjWSOjsl.js";import"./index-x0hwq8uq.js";import"./index-BwyGxYsl.js";import"./index-B9-K2gEf.js";import"./index-BkYL4d7S.js";import"./index-Bikxfajv.js";import"./index-xPNSVzye.js";import"./index-Bh4CHjuX.js";import"./index-DCdHhu1d.js";import"./index-DvU_tOJJ.js";import"./index-DcziJIpL.js";import"./index-CQDvThHr.js";import"./index-BvXrgCCA.js";import"./index-DvSn1Rpa.js";import"./index-DlthScRn.js";import"./index-Dmvi1Ah7.js";import"./index-Bv05uYkg.js";import"./index-Cl4HH77d.js";import"./index-CTk4SyJ7.js";import"./ComboBox-C085h5Nz.js";import"./index-C3nPMNvV.js";import"./TreeList-zjoUqghX.js";import"./copyToClipboard-DB_KM_BY.js";const n="SegmentButtonGroup",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-92301&t=HhCDuaOuzHu5rgyf-1",C=()=>{const[o,e]=l.useState(0),u=`import { useState } from 'react';
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
`,g=`import { SegmentButtonGroup, SegmentButton, Typography } from '@nlmk/ds-2.0';

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
`,i=d=>o===d;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(T,{title:n,description:"SegmentButtonGroup объединяет переключаемые кнопки в единый контрол, где активен только один вариант. Компонент поддерживает размеры и блокировку всей группы или отдельных кнопок.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${n}`,figmaLink:a}),t.jsx("div",{className:m.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:i(0),onClick:()=>e(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:i(1),onClick:()=>e(1)}),t.jsx(r.Tab,{label:"Тестирование",active:i(2),onClick:()=>e(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(p,{minHeight:420,description:"Базовое переключение активного сегмента.",code:u}),t.jsx(p,{minHeight:420,description:"Размеры группы сегментов через prop size.",code:c}),t.jsx(p,{minHeight:420,description:"Блокировка всей группы и отдельной кнопки.",code:g}),t.jsx(f,{argsTypes:G})]}),o==1&&t.jsx(b,{url:a}),o==2&&t.jsx(j,{componentName:n})]})};function s(o){return t.jsxs(t.Fragment,{children:[t.jsx(y,{title:"Components/SegmentButtonGroup/Info",component:x,parameters:{design:{type:"figma",url:"https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=1386-40366&t=OsXEWBgtT8y4LBgR-0"},jest:["SegmentButtonGroup.test.tsx"]}}),`
`,t.jsx(B,{of:h}),`
`,t.jsx(v,{children:t.jsx(C,{})})]})}function Co(o={}){const{wrapper:e}={...S(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(s,{...o})}):s()}export{Co as default};
