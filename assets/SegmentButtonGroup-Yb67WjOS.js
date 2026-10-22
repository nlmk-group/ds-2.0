import{r as l,j as t,m as y,S as B,U as v}from"./iframe-DJB5J1Gm.js";import{useMDXComponents as S}from"./index-Ctdy7DcM.js";import{S as x}from"./index-QllAPaHn.js";import{DecoratorDefault as h}from"./Decorator.stories-CLu9BKsp.js";import{s as n,H as T,E as p}from"./Header-DtfMJKVh.js";import{F as b}from"./FigmaEmbed-DChIjyS1.js";import{P as f,T as j}from"./Tests-Dnz3uSUu.js";/* empty css               */import{T as r}from"./index-K-Os3Mkv.js";import{a as G}from"./argsTypes-pdNzCJHS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-DcVLIfyB.js";import"./index-BnjgdTIo.js";import"./index-CQWz6SQ_.js";import"./16-B11CXHkV.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-BTlJCBjo.js";import"./index-27Xu9hjA.js";import"./index-BcIuHaz8.js";import"./index-CiWWQHM4.js";import"./32-DwqdcbQV.js";import"./32-GoS4XOF1.js";import"./24-OO9CWz_o.js";import"./24-Ds_njt3X.js";import"./24-BJ1WZVGw.js";import"./24-ytII2ozW.js";import"./24-DKN-2bNd.js";import"./24-Bh7XmxMn.js";import"./24-DhKB3mvd.js";import"./24-CU8ORY4X.js";import"./24-Bfhp3VeF.js";import"./24-DGoSPibJ.js";import"./24-DTEPByrl.js";import"./16-DeFHhMUc.js";import"./16-faObEf2T.js";import"./16-CJ_ZU7zi.js";import"./16-CLl9DOT8.js";import"./16-BA4929Um.js";import"./index-DK9ZFXds.js";import"./index-C1EZBTl0.js";import"./index-DL3eBH-P.js";import"./index-Bf78mEfz.js";import"./index-DwnOefxr.js";import"./index-C1y8duee.js";import"./colorsMapping-C6bFIk14.js";import"./index-DRGi1AEL.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-1gFuoChe.js";import"./useFloatingReferenceSync-LO62TbyM.js";import"./index-aBKmaxH3.js";import"./types-TdnjS80C.js";import"./index-6RvY6v79.js";import"./MenuItem-CYKzA5fc.js";import"./floating-ui.react-BitOEuDU.js";import"./sizesMapping-D8QavrGc.js";import"./index-CsNOcf0o.js";import"./index-CD8aF-OU.js";import"./index-BuTn90Kx.js";import"./index-CHjGJJzX.js";import"./index-DAf--LqM.js";import"./index-1fbwNQxU.js";import"./index-C_3lvTrt.js";import"./index-BiwwAO30.js";import"./index-DFRqr6gV.js";import"./index-BanPx_DE.js";import"./index-srYpiRUO.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-D9jdXbdP.js";import"./index-CWuaVSgJ.js";import"./index-HWoLZMFR.js";import"./index-B-Q4wIzC.js";import"./index-qo-mggsg.js";import"./index-CAA4Qv86.js";import"./index-DrzY2cvO.js";import"./index-B1fAjmi8.js";import"./index-CBalpVvc.js";import"./index-BhKUEEoJ.js";import"./index-CprSx77w.js";import"./index-ySRw8COl.js";import"./index-C3D1rheI.js";import"./index-CC4d2-d6.js";import"./index-BkLOgpm1.js";import"./index-ORro-3F_.js";import"./index-Bn6r3qI-.js";import"./index-DCHl1NWI.js";import"./index-xYIn6EQB.js";import"./index-DvdMLPTa.js";import"./index-CZ9VNNID.js";import"./index-sokDMC8X.js";import"./index-DKSgdMEw.js";import"./index-1lDXSB5o.js";import"./index-BS716PzN.js";import"./index-BoULGum0.js";import"./index-Cem2Ag1w.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CtT43hFd.js";import"./index-DhvmMPlp.js";import"./index-B4DCnhI4.js";import"./index-Wm7yXHG7.js";import"./index-DE9x5FJz.js";import"./index-BU822_AO.js";import"./index-BL3IVkrQ.js";import"./index-C9IwNMpc.js";import"./index-CabIIsyC.js";import"./index-DQOwJSOs.js";import"./index-C7pppfbp.js";import"./ComboBox-_Uzqzogs.js";import"./index-SEGUll7-.js";import"./constants-DzgFZdqM.js";import"./TreeList-BXBmTHhj.js";import"./copyToClipboard-DB_KM_BY.js";const m="SegmentButtonGroup",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-92301",k=()=>{const[o,e]=l.useState(0),u=`import { useState } from 'react';
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
