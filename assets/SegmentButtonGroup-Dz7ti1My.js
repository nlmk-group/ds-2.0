import{r as l,j as t,m as y,S as B,U as v}from"./iframe-C2j-UzJI.js";import{useMDXComponents as S}from"./index-CnUiOmhK.js";import{S as x}from"./index-nrqGK399.js";import{DecoratorDefault as h}from"./Decorator.stories-DBUaiF2k.js";import{s as n,H as T,E as p}from"./Header-CS8Ul-7Z.js";import{F as b}from"./FigmaEmbed-BXpMjOC7.js";import{P as f,T as j}from"./Tests-BzXlcuiS.js";/* empty css               */import{T as r}from"./index-j_056LZh.js";import{a as G}from"./argsTypes-CmYBYRUW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-DniZBuyb.js";import"./index-B6CIWydZ.js";import"./index-P9-ONPUI.js";import"./16-049IwUhX.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-BI-uMOwr.js";import"./index-EKbY0pty.js";import"./index-D3z7S9ph.js";import"./index-Cgs4mkOo.js";import"./32-BI8xtbsU.js";import"./32-CJ0o-VIC.js";import"./24-CuDIHvWX.js";import"./24-Cva_JBwh.js";import"./24-KVke6soD.js";import"./24-BrI2by3D.js";import"./24-B5ODlOpD.js";import"./24-OjUQZVfT.js";import"./24-CeOxJPqx.js";import"./24-CHP3BsWo.js";import"./24-CKMbmC7d.js";import"./24-nYvLFNAE.js";import"./24-fUQbig4h.js";import"./16-BMa1J7tj.js";import"./16-SQC_C9px.js";import"./16-BuZexhOR.js";import"./16-DPV7Mbm7.js";import"./16-ChsbLgyw.js";import"./index-D9e0IWV-.js";import"./index-yGzPLeeo.js";import"./index-Cm_Ba9v7.js";import"./index-CtJ4Gng-.js";import"./index-DQwYpJV-.js";import"./index-Cdr1B_yf.js";import"./colorsMapping-C6bFIk14.js";import"./index-DRJdSF_u.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-DubnQ8iR.js";import"./useFloatingReferenceSync-B9wLGTQm.js";import"./index-mz-Fux1b.js";import"./types-TdnjS80C.js";import"./index-DJNN3joX.js";import"./MenuItem-2rBr_5IO.js";import"./floating-ui.react-B-hVAgIp.js";import"./sizesMapping-D8QavrGc.js";import"./index-BlB3gbyn.js";import"./index-BxD8CrGk.js";import"./index-D--QrFHf.js";import"./index-CNN_3_D-.js";import"./index-DKRZUTnz.js";import"./index-BIghOfGk.js";import"./index-BCWSZamI.js";import"./index-dafhDTNg.js";import"./index-DBzDQ-ch.js";import"./index-AnGV7slG.js";import"./index-Dw3c2VVg.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-DZ9AfOMR.js";import"./index-ClEzh6W5.js";import"./index-BpckL99B.js";import"./index-DxVRZIMU.js";import"./index-BYk4kF2r.js";import"./index-p4R0JKbs.js";import"./index-DX43l6l8.js";import"./index-BYjJWpD4.js";import"./index-D_f15RZF.js";import"./index-dHWQfCU4.js";import"./index-B9O-LOtF.js";import"./index-B8k0jrF3.js";import"./index-EikiiVfW.js";import"./index-jAVg74ZN.js";import"./index-DhCmc_-U.js";import"./index-DGfhABU5.js";import"./index-CrdTlCOS.js";import"./index-Cjmo6ss0.js";import"./index-mFyay1Jh.js";import"./index-CWWsFxD8.js";import"./index-CFvqY2-I.js";import"./index-CLjZt-U5.js";import"./index-DxU2rFyU.js";import"./index-BztNwpqP.js";import"./index-C3s3_K12.js";import"./index-BPEi8AAc.js";import"./index-D_AdWthx.js";import"./index-CC1rooLK.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DqweFzDp.js";import"./index-BP9NHWE2.js";import"./index-DTAmrxZ5.js";import"./index-Cia1E6ra.js";import"./index-C7GKKkXm.js";import"./index-D5Omujth.js";import"./index-CzeiuUcG.js";import"./index-CBv4Ru4y.js";import"./index-CCMQkG81.js";import"./index-BmhtsoHO.js";import"./ComboBox-DginoVkT.js";import"./index-B_pht6vj.js";import"./constants-C_zUGLqh.js";import"./TreeList-CmR72Klg.js";import"./copyToClipboard-DB_KM_BY.js";const m="SegmentButtonGroup",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-92301",k=()=>{const[o,e]=l.useState(0),u=`import { useState } from 'react';
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
