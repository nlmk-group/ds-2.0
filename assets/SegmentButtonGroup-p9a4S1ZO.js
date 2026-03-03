import{r as l,j as t,m as y,S as B,U as v}from"./iframe-B-8SjXGq.js";import{useMDXComponents as S}from"./index-BM0F5ub6.js";import{S as x}from"./index-CZwmGRm1.js";import{DecoratorDefault as h}from"./Decorator.stories-Dr4lnSCK.js";import{s as m,H as T,E as p}from"./Header-Bt2eZ0XI.js";import{F as b}from"./FigmaEmbed-Cp-K0Ho-.js";import{P as f,T as j}from"./Tests-BJxC6M0y.js";/* empty css               */import{T as r}from"./index-lTVAi1na.js";import{a as G}from"./argsTypes-tIiyF-X0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-CVbeuYKL.js";import"./index-DWjwH6nq.js";import"./index-CgN-9tGr.js";import"./index-BRmunlbh.js";import"./index-Dfriq7lO.js";import"./index-DcMeZWW2.js";import"./16-BDcju3io.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-Dnj2eOeL.js";import"./24-CcDcN9Vt.js";import"./index-SApy96bT.js";import"./16-BNHSjjb0.js";import"./index-WkQvqD6p.js";import"./index-DqQiUiOd.js";import"./32-CnDyPHET.js";import"./24-DwPXEH6E.js";import"./24-2N5QtnbH.js";import"./24-nrV1efA2.js";import"./24-CjfWKKEu.js";import"./24-BSP12KOo.js";import"./24-rC0gEzBb.js";import"./24-DxfkYE9X.js";import"./24-CBHgkWPK.js";import"./24-FlXbOQvU.js";import"./16-B09-A838.js";import"./16-Bjal1Kcy.js";import"./index-1sCEIwws.js";import"./index-D81MGMsd.js";import"./index-O63UzFtM.js";import"./index-BG3v9Uex.js";import"./index-DjGSmZX3.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BA-hOJmZ.js";import"./index-C0fhG72W.js";import"./index-CDSure0q.js";import"./index-DLvwH50I.js";import"./index-DHxtbo6p.js";import"./types-TdnjS80C.js";import"./floating-ui.react-D9KZKjfI.js";import"./sizesMapping-D8QavrGc.js";import"./index-aEU1GZqG.js";import"./index-BFb5q96r.js";import"./index-nnfFZ9zh.js";import"./index-CJXb8S3m.js";import"./index-DQp-at3f.js";import"./index-BKV_kQZi.js";import"./index-BsPt_Eeq.js";import"./index-CA4vmu2I.js";import"./index-DmKJBqLb.js";import"./index-BpxvuqRy.js";import"./index-Bwm1RwE7.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CezGHJxo.js";import"./useFloatingReferenceSync-Dse8FenO.js";import"./index-lbMvjW_5.js";import"./index-BQw9APNC.js";import"./index-BIIYwqts.js";import"./index-gTdR2BgD.js";import"./index-BO_pppR1.js";import"./index-CA8coT2V.js";import"./index-BOvyB9Hg.js";import"./index-D0y26aqM.js";import"./index-nMsf_JLJ.js";import"./index-CbDdcaTf.js";import"./index-Bemzq2Pd.js";import"./index-BsUh_WOc.js";import"./index-BiLYqWzA.js";import"./index-CRdPa-5u.js";import"./index-DXDnCKkm.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CHI72_Mb.js";import"./index-6SN77Vs_.js";import"./index-J-DZaU2Z.js";import"./index-DRE2VGwx.js";import"./index-pTCHtkWj.js";import"./index-BistaHJu.js";import"./index-CdcbwH8N.js";import"./index-D7Pw4d7U.js";import"./index-B09XZxaV.js";import"./index-DTtZr5oI.js";import"./index--AS7wYhz.js";import"./index-XCg4i2Qb.js";import"./index-K1Up07vg.js";import"./index-CCVipuRP.js";import"./index-CYq0uzEC.js";import"./index-D9xdw-kV.js";import"./ComboBox-D53aWZPr.js";import"./index-CIaEAtE8.js";import"./TreeList-u3mntEr0.js";import"./copyToClipboard-DB_KM_BY.js";const n="SegmentButtonGroup",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-92301&t=HhCDuaOuzHu5rgyf-1",C=()=>{const[o,e]=l.useState(0),u=`import { useState } from 'react';
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
`,t.jsx(v,{children:t.jsx(C,{})})]})}function jo(o={}){const{wrapper:e}={...S(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(s,{...o})}):s()}export{jo as default};
