import{r as l,j as t,m as y,S as B,U as v}from"./iframe-CbS8bInr.js";import{useMDXComponents as S}from"./index-FQFA8fbo.js";import{S as x}from"./index-Bu3gBpCD.js";import{DecoratorDefault as h}from"./Decorator.stories-B_ZhqKNm.js";import{s as m,H as T,E as p}from"./Header-DtwNtocj.js";import{F as b}from"./FigmaEmbed-DlxN5nCc.js";import{P as f,T as j}from"./Tests-CELr3Suj.js";/* empty css               */import{T as r}from"./index-BZODxpmY.js";import{a as G}from"./argsTypes-Dr5PG_3e.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-B6Qf8jdS.js";import"./index-CKjhTvOz.js";import"./index-DFlE0BoX.js";import"./index-YseVeHvS.js";import"./index-BmJKslqM.js";import"./index-CrvMY39-.js";import"./16-B5g6d240.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-Sa4UUf3z.js";import"./24-B8ZOnMJQ.js";import"./index-8cX9WAIH.js";import"./16-aZBE51Hh.js";import"./index-OI82wUv3.js";import"./index-CA2hv6TN.js";import"./32-BZ5ZA3rE.js";import"./24-CiyiO54M.js";import"./24-Di0nu-by.js";import"./24-CC9V7_4j.js";import"./24-BfjqGgZ9.js";import"./24-CqnhtF5T.js";import"./24-BWksqsvG.js";import"./24-mlG8Xvhb.js";import"./24-BGnREA9p.js";import"./24-C_iNukEM.js";import"./16-BMdnWzuc.js";import"./16-CGq2ocz6.js";import"./index-ZFz_t-ha.js";import"./index-Bl1t28dV.js";import"./index-BYj-taLQ.js";import"./index-DsMC7Zj7.js";import"./index-CjORfByN.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-DgZPBMQ0.js";import"./index-BRRvAv7x.js";import"./index-CD4Ms4Kk.js";import"./index-CF1r-WqF.js";import"./index-4JwXcQ6W.js";import"./types-TdnjS80C.js";import"./floating-ui.react-CCPXVVQu.js";import"./sizesMapping-D8QavrGc.js";import"./index-CNVtutNW.js";import"./index-DNdNd9K1.js";import"./index-BseawL0q.js";import"./index-BR8A-Tk7.js";import"./index-CxpitsSn.js";import"./index-ClICwiNM.js";import"./index-rEDSKjd0.js";import"./index-ef9lu6Ja.js";import"./index-D4khgXsL.js";import"./index-DkJpm8py.js";import"./index-CdD_sciz.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-B-JpRLL-.js";import"./useFloatingReferenceSync-CLFAbrLx.js";import"./index-DskViU9t.js";import"./index-DL8dHQVX.js";import"./index-DjEFd8p0.js";import"./index-DuRcBvNr.js";import"./index-CDdYNhVB.js";import"./index-CTYy3ATz.js";import"./index-RC84cX2N.js";import"./index-1okAfVDI.js";import"./index-BZnrPoK4.js";import"./index-Bb6ai6CK.js";import"./index-B-o2ielS.js";import"./index-sRzOyYuW.js";import"./index-OTRnbLNR.js";import"./index-DQhvKMWh.js";import"./index-CqrliyN6.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-QP3zFYLY.js";import"./index-fm5omEVd.js";import"./index-DT6Z4PFF.js";import"./index-DmffHaCi.js";import"./index-CR0-Vswk.js";import"./index-Bmek4GOF.js";import"./index-IW_o2CdI.js";import"./index-C7nQdULz.js";import"./index-0rd4srWV.js";import"./index-CXElAOzz.js";import"./index-WNdB1hMv.js";import"./index-C3xH0iq7.js";import"./index-DfNwsgKQ.js";import"./index-C-2db-Xh.js";import"./index-DhhLArOn.js";import"./index-DInBiNnO.js";import"./index-7qjhDsEe.js";import"./ComboBox-BZRB6Qpf.js";import"./index-DfGlJ-l6.js";import"./TreeList-BbNfEBTC.js";import"./copyToClipboard-DB_KM_BY.js";const n="SegmentButtonGroup",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-92301&t=HhCDuaOuzHu5rgyf-1",C=()=>{const[o,e]=l.useState(0),u=`import { useState } from 'react';
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
`,t.jsx(v,{children:t.jsx(C,{})})]})}function Go(o={}){const{wrapper:e}={...S(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(s,{...o})}):s()}export{Go as default};
