import{r as l,j as t,m as y,S as B,U as v}from"./iframe-CiFytELZ.js";import{useMDXComponents as S}from"./index-DybNXUjF.js";import{S as x}from"./index-Ce4DEavg.js";import{DecoratorDefault as h}from"./Decorator.stories-BzItgCqc.js";import{s as n,H as T,E as p}from"./Header-X6Kr5SHJ.js";import{F as b}from"./FigmaEmbed-C2oXb4D3.js";import{P as f,T as j}from"./Tests-BcceQP3J.js";/* empty css               */import{T as r}from"./index-BQkij8xm.js";import{a as G}from"./argsTypes-BBp2H93B.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-BCkmK5YD.js";import"./index-yhpuehNm.js";import"./index-AScBX7ch.js";import"./16-DE4viI8O.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-DJEYtQIn.js";import"./index-Caup2jln.js";import"./index-DawP55CX.js";import"./index-ageiqw5d.js";import"./32-BUE7duXK.js";import"./32-dCVSFMeK.js";import"./24-CEYPuBp0.js";import"./24-DMYK_POk.js";import"./24-Bt83Uokx.js";import"./24-Cg37IYki.js";import"./24-URZj1P3S.js";import"./24-C7n6mi1f.js";import"./24-B6ivgZpd.js";import"./24-RrFXbNlX.js";import"./24-DG7ZIblO.js";import"./24-C2S-g5KW.js";import"./24-r-rrcgWc.js";import"./16-BfVH5IGj.js";import"./16-CdjU_4JV.js";import"./16-BT9sIG7U.js";import"./16-CqiQVPWz.js";import"./16-D7g-PMEy.js";import"./index-Cw2HZq9h.js";import"./index-g6EAEksG.js";import"./index-BxUgnl0U.js";import"./index-yVptosnr.js";import"./index-DxDzu7P3.js";import"./index-7UQTagkh.js";import"./colorsMapping-C6bFIk14.js";import"./index-DKkLeCla.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BbS2YyIp.js";import"./useFloatingReferenceSync-BSceUB3Q.js";import"./index-BbXZCDfz.js";import"./types-TdnjS80C.js";import"./index-DVfkSf50.js";import"./MenuItem-DEzF3Wos.js";import"./floating-ui.react-KcrBVsuh.js";import"./sizesMapping-D8QavrGc.js";import"./index-BA4dGRCH.js";import"./index-D7Enchig.js";import"./index-JoZBJQz1.js";import"./index-Y7pOMNss.js";import"./index-CRJtbCyP.js";import"./index-CJaX5efT.js";import"./index-5rbdE4ra.js";import"./index-D2T7B9nx.js";import"./index-DpPQjWyC.js";import"./index-BtEyOEDh.js";import"./index-C-AQ4SnI.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-DH6FMXCn.js";import"./index-DJ0iMoCC.js";import"./index-IX9qaxFo.js";import"./index-BJsQCtoC.js";import"./index-GdPBVw6h.js";import"./index-mDMSBCcD.js";import"./index-BBwGQaN3.js";import"./index-PUDlQz6m.js";import"./index-BKVJajSn.js";import"./index-CtOsqJ6t.js";import"./index-B98CSxRp.js";import"./index-A9JPGDIL.js";import"./index-CswK6oZ4.js";import"./index-BB_iyaOG.js";import"./index-CAlDJVEd.js";import"./index-CdHqNcI6.js";import"./index-B7G0hzPa.js";import"./index-BtVPDrmD.js";import"./index-BFdlLUWB.js";import"./index-C9riXii6.js";import"./index-CwibpBsN.js";import"./index-DQFKTQjB.js";import"./index-DaZRXyVS.js";import"./index-3AXam_x1.js";import"./index-Dhsf1Its.js";import"./index-BBOasYPk.js";import"./index-B-uV3fk6.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-0qRpJbl9.js";import"./index-CTO_m6qR.js";import"./index-Co7ZUFcE.js";import"./index-DoIF5vPd.js";import"./index-DptaoNrR.js";import"./index-C3SBMNpO.js";import"./index-DvWfCBSL.js";import"./index-CcYULIfU.js";import"./index-Daq8v7vG.js";import"./index-Cz_vA1hZ.js";import"./index-BlRSHBC7.js";import"./ComboBox-PS9Y9Xue.js";import"./index-CYnbSGsW.js";import"./constants-ClWdtWAL.js";import"./TreeList-77y535wQ.js";import"./copyToClipboard-DB_KM_BY.js";const m="SegmentButtonGroup",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-92301",k=()=>{const[o,e]=l.useState(0),u=`import { useState } from 'react';
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
