import{r as l,j as t,m as y,S as B,U as v}from"./iframe-D1ppCfJL.js";import{useMDXComponents as S}from"./index-DUXc5yr1.js";import{S as x}from"./index-CFOhRc1z.js";import{DecoratorDefault as h}from"./Decorator.stories-Ce4quGEU.js";import{s as n,H as T,E as p}from"./Header-CrzktEKM.js";import{F as b}from"./FigmaEmbed-C7Y9lIWu.js";import{P as f,T as j}from"./Tests-ErrWIcVc.js";/* empty css               */import{T as r}from"./index-DlP1k4gA.js";import{a as G}from"./argsTypes-50U0srUM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-D1MtTpbs.js";import"./index-BhAG1mVA.js";import"./index-B8OV2sj9.js";import"./16-CJBceTE3.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-BbmMdiDL.js";import"./index-DQiorVga.js";import"./index-pBOwR2Sr.js";import"./index-1Ia9d37J.js";import"./32-DzcHwvay.js";import"./24-Cp8l4Ntb.js";import"./24-CXzdah1X.js";import"./24-eQHncE30.js";import"./24-CRTRQ8Ly.js";import"./24-C2zrmoH8.js";import"./24-DvGStvE4.js";import"./24-DEoWbW1a.js";import"./24-DTwfOo-x.js";import"./24-Dwzv70HG.js";import"./24-hEGWduDH.js";import"./24-BoJlH0P7.js";import"./24-DeVNRByj.js";import"./16-DDpVoX5v.js";import"./16-DyMPAZyw.js";import"./16-Dg_oBXFF.js";import"./16-m76_vWtK.js";import"./16-CtdeCqSX.js";import"./index-D3y4eWrN.js";import"./index-BkONTIs-.js";import"./index-DTDhhVJl.js";import"./index-BQXeN0eF.js";import"./index-_EnS4SPv.js";import"./index-DCLji6qX.js";import"./colorsMapping-C6bFIk14.js";import"./index-BuboyXZl.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-CskC-lf5.js";import"./useFloatingReferenceSync-_s1uppib.js";import"./index-BAWCPbpv.js";import"./types-TdnjS80C.js";import"./index-dwkJrdOm.js";import"./MenuItem-BiyJ08nY.js";import"./floating-ui.react-DKQvXyy0.js";import"./sizesMapping-D8QavrGc.js";import"./index-CdGiUjLy.js";import"./index-CoVi-s7L.js";import"./index-CYVJgBAK.js";import"./index-BwhgPU9I.js";import"./index-DwwGufnW.js";import"./index-DuvGnr4P.js";import"./index-Cn43EhjI.js";import"./index-Dq_AZ4Gl.js";import"./index-BKgG2BUu.js";import"./index-CZz4O3t8.js";import"./index-DDTzxOqr.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-Ct8-B2RS.js";import"./index-BtqWnsFW.js";import"./index-DZ1-9d6d.js";import"./index-BPCh3R_L.js";import"./index-CEUVPE5x.js";import"./index-Bsj2pXl4.js";import"./index-BFBGSixy.js";import"./index-DBTyYIq5.js";import"./index-B2DrMXcC.js";import"./index-CD-VGwDt.js";import"./index-Dt9QaNhs.js";import"./index-C3RlDP0j.js";import"./index-D9eBI-ul.js";import"./index-DvVC4LD1.js";import"./index-ppwxfrOJ.js";import"./index-CZI9tviC.js";import"./index-BvPqZPcI.js";import"./index-CHKV4Xzj.js";import"./index-BDHI1vN6.js";import"./index-RJYyFZKU.js";import"./index-BYlJK5W5.js";import"./index-BBrdAj2S.js";import"./index-C_PjMrzg.js";import"./index-CV1Omkp3.js";import"./index-BDde93qT.js";import"./index-VSWU4_A4.js";import"./index-BYVv5Ws0.js";import"./index-CRzaLeVS.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-D-Ocfrfd.js";import"./index-CSNQVful.js";import"./index-DrgSnG8u.js";import"./index-BOz-GYvQ.js";import"./index-OW61RsAS.js";import"./index-0w7-TbBZ.js";import"./index-GjSckLp0.js";import"./index-C8eAPz1j.js";import"./index-BZ11wUJ2.js";import"./index-CIHIr33g.js";import"./ComboBox-BIeVukHs.js";import"./index-T1NdoD8u.js";import"./TreeList-COEGgzHL.js";import"./copyToClipboard-DB_KM_BY.js";const m="SegmentButtonGroup",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-92301&t=HhCDuaOuzHu5rgyf-1",C=()=>{const[o,e]=l.useState(0),u=`import { useState } from 'react';
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
`,i=d=>o===d;return t.jsxs("div",{className:n.wrapper,children:[t.jsx(T,{title:m,description:"SegmentButtonGroup объединяет переключаемые кнопки в единый контрол, где активен только один вариант. Компонент поддерживает размеры и блокировку всей группы или отдельных кнопок.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${m}`,figmaLink:a}),t.jsx("div",{className:n.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:i(0),onClick:()=>e(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:i(1),onClick:()=>e(1)}),t.jsx(r.Tab,{label:"Тестирование",active:i(2),onClick:()=>e(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(p,{minHeight:420,description:"Базовое переключение активного сегмента.",code:u}),t.jsx(p,{minHeight:420,description:"Размеры группы сегментов через prop size.",code:c}),t.jsx(p,{minHeight:420,description:"Блокировка всей группы и отдельной кнопки.",code:g}),t.jsx(f,{argsTypes:G})]}),o==1&&t.jsx(b,{url:a}),o==2&&t.jsx(j,{componentName:m})]})};function s(o){return t.jsxs(t.Fragment,{children:[t.jsx(y,{title:"Components/SegmentButtonGroup/Info",component:x,parameters:{design:{type:"figma",url:"https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=1386-40366&t=OsXEWBgtT8y4LBgR-0"},jest:["SegmentButtonGroup.test.tsx"]}}),`
`,t.jsx(B,{of:h}),`
`,t.jsx(v,{children:t.jsx(C,{})})]})}function wo(o={}){const{wrapper:e}={...S(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(s,{...o})}):s()}export{wo as default};
