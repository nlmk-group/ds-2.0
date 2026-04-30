import{r as l,j as t,m as y,S as B,U as v}from"./iframe-BYEcINU_.js";import{useMDXComponents as S}from"./index-Bpsqjrzl.js";import{S as x}from"./index-D0MIXxpi.js";import{DecoratorDefault as h}from"./Decorator.stories-BJBADL9m.js";import{s as n,H as T,E as p}from"./Header-QIn0U31P.js";import{F as b}from"./FigmaEmbed-DhnyYYAw.js";import{P as f,T as j}from"./Tests-BIMEJe_y.js";/* empty css               */import{T as r}from"./index-nj7VEw_R.js";import{a as G}from"./argsTypes-DfEzXB1B.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-D6OuuQjE.js";import"./index-XP9rVAlC.js";import"./index-CTms4VQ3.js";import"./16-BbOPmjLm.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CaNWwqgI.js";import"./index-DEnU3uQc.js";import"./index-CrpGn3Cf.js";import"./index-aRgZryTI.js";import"./32-BcLCWGHn.js";import"./32-DEU7E1yO.js";import"./24-nElrukLD.js";import"./24-CuYChjrW.js";import"./24-Bg-YkJof.js";import"./24-DOSHn3uj.js";import"./24-qZuYAR8B.js";import"./24-Mxvma0Zx.js";import"./24-wPS-GG8M.js";import"./24-mlyJft-U.js";import"./24-DTKLnnJ8.js";import"./24-CSKlV1Hw.js";import"./24-BeWDWat7.js";import"./16-DVw9RX5j.js";import"./16-BucT6FLY.js";import"./16-CjgRgEbF.js";import"./16--L8JfMjs.js";import"./16-B5oEirVJ.js";import"./index-BQVhB4iE.js";import"./index-D2JaD0OQ.js";import"./index-U8G7M_Zs.js";import"./index-DH6ASFUC.js";import"./index-si5AuEoF.js";import"./index-COgWJkER.js";import"./colorsMapping-C6bFIk14.js";import"./index-BYOusy-M.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-CK0J7sHo.js";import"./useFloatingReferenceSync-CsYvYhZU.js";import"./index-DzEvNTCJ.js";import"./types-TdnjS80C.js";import"./index-DZzZHuYh.js";import"./MenuItem-DdgCvPH4.js";import"./floating-ui.react-_Zuln8if.js";import"./sizesMapping-D8QavrGc.js";import"./index-Bzsm1X0Z.js";import"./index-CyD8HQ96.js";import"./index-COznie4U.js";import"./index-ZNnHXGDD.js";import"./index-BC0Sks76.js";import"./index-uwXEqcGR.js";import"./index-BBfWv7b0.js";import"./index-C0g5OMD9.js";import"./index-CojpXGg7.js";import"./index-C39GlgiC.js";import"./index-CaLPl1qK.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CA87DmbL.js";import"./index-CkchZA1S.js";import"./index-C3exR97g.js";import"./index-7nLr9Lje.js";import"./index-7AUFuuQ2.js";import"./index-DY9r7tva.js";import"./index-D0bmCGQd.js";import"./index-8w1in6Dy.js";import"./index-CadNeeou.js";import"./index-DEdwYyQK.js";import"./index-dQ62oyVP.js";import"./index-BLillJGO.js";import"./index-BiaIOUue.js";import"./index-BUTff1zv.js";import"./index-D1Kdw1Ur.js";import"./index-CMCaOPVQ.js";import"./index-De9lbcqo.js";import"./index-CkFogjvg.js";import"./index-DNO6SmUQ.js";import"./index-atP-xhLu.js";import"./index-NFm-qVra.js";import"./index-CCZFPEUL.js";import"./index-CgIvrtde.js";import"./index-Ch64POBU.js";import"./index-DCa7h74_.js";import"./index-CWpqocMb.js";import"./index-BQH0MRqt.js";import"./index-Dbavy875.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-2AxAz-gb.js";import"./index-CVi-cyUF.js";import"./index-YYfSsAzR.js";import"./index-YVaISHls.js";import"./index-CQY7sNNS.js";import"./index-Bbvb6W_F.js";import"./index-DOV__V4z.js";import"./index-QJ3E8HAN.js";import"./index-ByTrgoFe.js";import"./index-Brevh8m6.js";import"./ComboBox-4epN55r0.js";import"./index-7YhxVk_9.js";import"./constants-C9-wC4hs.js";import"./TreeList-DI_XRzGG.js";import"./copyToClipboard-DB_KM_BY.js";const m="SegmentButtonGroup",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-92301",k=()=>{const[o,e]=l.useState(0),u=`import { useState } from 'react';
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
