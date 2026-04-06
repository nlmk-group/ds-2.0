import{r as s,j as o,m as l,S as n,U as a}from"./iframe-adG_7yRG.js";import{useMDXComponents as d}from"./index-Cg8Pf3Pw.js";import{S as g}from"./index-CjWSOjsl.js";import{DecoratorDefault as c}from"./Decorator.stories-Beo23sgK.js";import{s as p,H as T,E as r}from"./Header-cMHYDLeC.js";import{P as f,T as u}from"./Tests-C1XQ0sNC.js";/* empty css               */import{T as e}from"./index-Yehuvb9K.js";import{a as S}from"./argsTypes-D5kFYxeU.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUUID-M57HTP56.js";import"./clsx-B-dksMZM.js";import"./index-TjqOvBrG.js";import"./index-DC_nQVbx.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-B9XnRb5u.js";import"./24-DrBRk2vS.js";import"./24-BuaVNHQi.js";import"./24-C2G2GNsa.js";import"./24-B4fAX0Ec.js";import"./24-Wv8b4C8A.js";import"./24-GH3yabNM.js";import"./24-BDLYxJUB.js";import"./24-DcUw9JWs.js";import"./24-B-tnmrg_.js";import"./16-LI8OsMJg.js";import"./24-BxGqfMjL.js";import"./24-B0jNPX91.js";import"./16-BTp4GQQG.js";import"./16-D-NUuvME.js";import"./16-C5RTlL5k.js";import"./index-CnTjgQRx.js";import"./index-DzN3aT-y.js";import"./index-N0HJx9V2.js";import"./index-y2k2yeKx.js";import"./index-C6st097g.js";import"./index-DSz2Fxi8.js";import"./index-BSzISWDV.js";import"./index-Bw5qm4Ov.js";import"./index-75kOkesn.js";import"./index-Dyd59tUY.js";import"./index-BhxlvnnA.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-COV9g-2Q.js";import"./index-DJrVOycg.js";import"./index-Dy1IE1cv.js";import"./index-DtX9i5FK.js";import"./index-B1pHFt52.js";import"./index-CwSciSyB.js";import"./types-TdnjS80C.js";import"./floating-ui.react-7VA0tf7C.js";import"./sizesMapping-D8QavrGc.js";import"./index-Da_FDSx_.js";import"./index-U_RCd_HH.js";import"./index-CMSErBpE.js";import"./index-CzkpZwDT.js";import"./index-BOTgB3bz.js";import"./index-DFAIDFiK.js";import"./index-CkcKW4Vm.js";import"./index-C0jfxf7x.js";import"./index-Csnb6gHF.js";import"./index-BYkQO_14.js";import"./index-CsSUhH6Q.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-Cl0xhJAL.js";import"./useFloatingReferenceSync-D48fx_Db.js";import"./index-D02QEMLS.js";import"./index-CXTleZNA.js";import"./index-aAdctPR4.js";import"./index-onHurrhQ.js";import"./index-QnhurHRA.js";import"./index--d2ZPp2Q.js";import"./index-44u0uri5.js";import"./index-PgA7KtkC.js";import"./index-CzL7ANP0.js";import"./index-DFN2ZEva.js";import"./index-B97cDh6f.js";import"./index-CZ0fPPTA.js";import"./index-BMxGNkbP.js";import"./index-Bj8TCYsg.js";import"./index-KPC3KFCd.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-x0hwq8uq.js";import"./index-BwyGxYsl.js";import"./index-B9-K2gEf.js";import"./index-BkYL4d7S.js";import"./index-Bikxfajv.js";import"./index-xPNSVzye.js";import"./index-Bh4CHjuX.js";import"./index-DCdHhu1d.js";import"./index-DvU_tOJJ.js";import"./index-DcziJIpL.js";import"./index-CQDvThHr.js";import"./index-BvXrgCCA.js";import"./index-DvSn1Rpa.js";import"./index-DlthScRn.js";import"./index-Dmvi1Ah7.js";import"./index-Bv05uYkg.js";import"./index-Cl4HH77d.js";import"./index-CTk4SyJ7.js";import"./ComboBox-C085h5Nz.js";import"./index-C3nPMNvV.js";import"./TreeList-zjoUqghX.js";import"./copyToClipboard-DB_KM_BY.js";const x=()=>{const[t,i]=s.useState(0);return o.jsxs("div",{className:p.wrapper,children:[o.jsx(T,{title:"SlideToggle",description:"SlideToggle управляет показом и скрытием дополнительного контента. Компонент поддерживает управляемый и неуправляемый режим, размеры и action-блок в заголовке.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SlideToggle"}),o.jsx("div",{className:p.tabs,children:o.jsxs(e,{children:[o.jsx(e.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),o.jsx(e.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)==0&&o.jsxs(o.Fragment,{children:[o.jsx(r,{description:"Управляемый режим через isShow и onToggle.",code:`import { SlideToggle } from '@nlmk/ds-2.0';
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
