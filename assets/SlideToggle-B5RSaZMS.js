import{r as s,j as o,m as l,S as n,U as a}from"./iframe-CiNcYurr.js";import{useMDXComponents as d}from"./index-BaUxFINc.js";import{S as g}from"./index-MwaXdhFc.js";import{DecoratorDefault as c}from"./Decorator.stories-CMY6PrD1.js";import{s as p,H as T,E as r}from"./Header-CSF8pD8M.js";import{P as f,T as u}from"./Tests-CuCRZHAs.js";/* empty css               */import{T as e}from"./index-BGUexdM0.js";import{a as S}from"./argsTypes-DwcaRjG2.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUUID-M57HTP56.js";import"./clsx-B-dksMZM.js";import"./index-ChNBy6a5.js";import"./index-KTbM5ka_.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BIZlbf4u.js";import"./24-C4GcDMUE.js";import"./24-BpIVUa9s.js";import"./24-CM41UcFe.js";import"./24-CuMa5vAe.js";import"./24-ByfXT0PC.js";import"./24-Dn2lqm-y.js";import"./24-WK1b6lfV.js";import"./24-CbtCS4aD.js";import"./24-Hf1fmE8D.js";import"./16-Bzi-BRTw.js";import"./24-Bt6gBPsC.js";import"./24-B1PR4U9W.js";import"./16-87YGvwqM.js";import"./16-D_wDoKTV.js";import"./16-DGHcuNOQ.js";import"./index-BK6wfwgJ.js";import"./index-BW3E00_d.js";import"./index-C62Rz3pb.js";import"./index-BgSHXntA.js";import"./index-B5JbKXfP.js";import"./index-Bmplgm43.js";import"./index-Bm9ZTaRK.js";import"./index-DMves0z1.js";import"./index-Cc3zI-Zi.js";import"./index-BTbdo8J6.js";import"./index-DKGBjWfT.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-BAO_EFiP.js";import"./index-nCUMzYDY.js";import"./index-ipRY-F18.js";import"./index-BnnFEDSq.js";import"./index-C0rE8VRv.js";import"./index-5P6wQBGT.js";import"./types-TdnjS80C.js";import"./floating-ui.react-kz-yE5c0.js";import"./sizesMapping-D8QavrGc.js";import"./index-B6F5exii.js";import"./index-WfOI5tKp.js";import"./index-Di3Tf_NZ.js";import"./index-BSCmrBEE.js";import"./index-k-8s0_Jc.js";import"./index-DtsZdW_k.js";import"./index-BASSBPqG.js";import"./index-BDsxwAhX.js";import"./index-7l3FwTp_.js";import"./index-C19bQcdj.js";import"./index-BvLTT0Bc.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-xNLQpI5_.js";import"./useFloatingReferenceSync-N5nxTT3h.js";import"./index-tFFXhZ5g.js";import"./index-CctpJQDv.js";import"./index-BR9FB4KQ.js";import"./index-BPA0dgrp.js";import"./index-CC8vLZx7.js";import"./index-8zO7yMOe.js";import"./index-DGAhwUTe.js";import"./index-DXyu3KnF.js";import"./index-TMf-q5Af.js";import"./index-DwZld9Xy.js";import"./index-Bfa5kPEf.js";import"./index-CWXYOrIJ.js";import"./index-C5ZdoSw6.js";import"./index-G7kzCBo_.js";import"./index-BlcuogSf.js";import"./index-DiIsinIh.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-Vn4Jr9MH.js";import"./index-BSRH1Q8Z.js";import"./index-Djipz1eP.js";import"./index-oG78am6U.js";import"./index-5yXCpVDE.js";import"./index-B5C_MfFj.js";import"./index-CPQDgGpy.js";import"./index-C-OYgTT5.js";import"./index-DpcbdR_F.js";import"./index-Dk716a-C.js";import"./index-BErnz41e.js";import"./index-Cd5eTZd_.js";import"./index-CUllg0k1.js";import"./index-BdhXnQ-k.js";import"./index-C-hD1Qn7.js";import"./index-Dcu3xPiM.js";import"./index-FqvjfKzP.js";import"./ComboBox-moTAJumu.js";import"./index-CLQNWR2i.js";import"./TreeList-Amzwxkac.js";import"./copyToClipboard-DB_KM_BY.js";const x=()=>{const[t,i]=s.useState(0);return o.jsxs("div",{className:p.wrapper,children:[o.jsx(T,{title:"SlideToggle",description:"SlideToggle управляет показом и скрытием дополнительного контента. Компонент поддерживает управляемый и неуправляемый режим, размеры и action-блок в заголовке.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SlideToggle"}),o.jsx("div",{className:p.tabs,children:o.jsxs(e,{children:[o.jsx(e.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),o.jsx(e.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)==0&&o.jsxs(o.Fragment,{children:[o.jsx(r,{description:"Управляемый режим через isShow и onToggle.",code:`import { SlideToggle } from '@nlmk/ds-2.0';
import { useState } from 'react';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <SlideToggle
      title={'Дополнительная информация'}
      isShow={show}
      onToggle={() => setShow(!show)}
    >
      Компонент SlideToggle позволяет показывать и скрывать дополнительный контент по клику на заголовок. Полезно для аккордеонов, раскрывающихся блоков и экономии места на странице.
    </SlideToggle>
  );
};
export default App;`}),o.jsx(r,{description:"Неуправляемый режим с открытием по умолчанию через defaultOpen.",code:`import { SlideToggle } from '@nlmk/ds-2.0';

const App = () => (
  <SlideToggle title="Раздел открыт по умолчанию" defaultOpen>
    Контент отображается сразу после рендера компонента.
  </SlideToggle>
);

export default App;
`}),o.jsx(r,{description:"Компактный режим через size='compact'.",code:`import { SlideToggle, Typography } from '@nlmk/ds-2.0';

const App = () => (
  <SlideToggle
    title={<Typography variant="Body1-Bold">Компактный режим</Typography>}
    size="compact"
    defaultOpen
  >
    Дополнительный контент с компактной высотой заголовка.
  </SlideToggle>
);

export default App;
`}),o.jsx(r,{description:"Дополнительный блок справа через after.",code:`import { Badge, SlideToggle } from '@nlmk/ds-2.0';

const App = () => (
  <SlideToggle
    title="Раздел с action-блоком"
    after={<Badge size="s" color="info">3</Badge>}
    defaultOpen
  >
    Дополнительный контент с бейджем в блоке after.
  </SlideToggle>
);

export default App;
`}),o.jsx(f,{argsTypes:S})]}),Number(t)==2&&o.jsx(u,{componentName:"SlideToggle"})]})};function m(t){return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Components/SlideToggle/Info",component:g,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=212-40498&mode=design&t=xnwi6AfHpoUHB7mg-0"},jest:["SlideToggle.test.tsx"]}}),`
`,o.jsx(n,{of:c}),`
`,o.jsx(a,{children:o.jsx(x,{})})]})}function yt(t={}){const{wrapper:i}={...d(),...t.components};return i?o.jsx(i,{...t,children:o.jsx(m,{...t})}):m()}export{yt as default};
