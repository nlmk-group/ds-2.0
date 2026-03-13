import{r as s,j as o,m as l,S as n,U as a}from"./iframe-CbS8bInr.js";import{useMDXComponents as d}from"./index-FQFA8fbo.js";import{S as g}from"./index-QP3zFYLY.js";import{DecoratorDefault as c}from"./Decorator.stories-B_ZhqKNm.js";import{s as p,H as T,E as e}from"./Header-DtwNtocj.js";import{P as f,T as u}from"./Tests-CELr3Suj.js";/* empty css               */import{T as r}from"./index-BZODxpmY.js";import{a as S}from"./argsTypes-DGU2vS_u.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUUID-M57HTP56.js";import"./clsx-B-dksMZM.js";import"./index-YseVeHvS.js";import"./index-CA2hv6TN.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BZ5ZA3rE.js";import"./24-CiyiO54M.js";import"./24-Di0nu-by.js";import"./24-Sa4UUf3z.js";import"./24-CC9V7_4j.js";import"./24-BfjqGgZ9.js";import"./24-CqnhtF5T.js";import"./24-BWksqsvG.js";import"./24-mlG8Xvhb.js";import"./24-B8ZOnMJQ.js";import"./16-aZBE51Hh.js";import"./24-BGnREA9p.js";import"./24-C_iNukEM.js";import"./16-BMdnWzuc.js";import"./16-CGq2ocz6.js";import"./16-B5g6d240.js";import"./index-CKjhTvOz.js";import"./index-DFlE0BoX.js";import"./index-BmJKslqM.js";import"./index-CrvMY39-.js";import"./index-8cX9WAIH.js";import"./index-OI82wUv3.js";import"./index-ZFz_t-ha.js";import"./index-Bl1t28dV.js";import"./index-BYj-taLQ.js";import"./index-DsMC7Zj7.js";import"./index-CjORfByN.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-DgZPBMQ0.js";import"./index-BRRvAv7x.js";import"./index-B6Qf8jdS.js";import"./index-CD4Ms4Kk.js";import"./index-CF1r-WqF.js";import"./index-4JwXcQ6W.js";import"./types-TdnjS80C.js";import"./floating-ui.react-CCPXVVQu.js";import"./sizesMapping-D8QavrGc.js";import"./index-CNVtutNW.js";import"./index-DNdNd9K1.js";import"./index-BseawL0q.js";import"./index-BR8A-Tk7.js";import"./index-CxpitsSn.js";import"./index-ClICwiNM.js";import"./index-rEDSKjd0.js";import"./index-ef9lu6Ja.js";import"./index-D4khgXsL.js";import"./index-DkJpm8py.js";import"./index-CdD_sciz.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-B-JpRLL-.js";import"./useFloatingReferenceSync-CLFAbrLx.js";import"./index-DskViU9t.js";import"./index-DL8dHQVX.js";import"./index-DjEFd8p0.js";import"./index-DuRcBvNr.js";import"./index-CDdYNhVB.js";import"./index-CTYy3ATz.js";import"./index-RC84cX2N.js";import"./index-1okAfVDI.js";import"./index-BZnrPoK4.js";import"./index-Bb6ai6CK.js";import"./index-B-o2ielS.js";import"./index-Bu3gBpCD.js";import"./index-sRzOyYuW.js";import"./index-OTRnbLNR.js";import"./index-DQhvKMWh.js";import"./index-CqrliyN6.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-fm5omEVd.js";import"./index-DT6Z4PFF.js";import"./index-DmffHaCi.js";import"./index-CR0-Vswk.js";import"./index-Bmek4GOF.js";import"./index-IW_o2CdI.js";import"./index-C7nQdULz.js";import"./index-0rd4srWV.js";import"./index-CXElAOzz.js";import"./index-WNdB1hMv.js";import"./index-C3xH0iq7.js";import"./index-DfNwsgKQ.js";import"./index-C-2db-Xh.js";import"./index-DhhLArOn.js";import"./index-DInBiNnO.js";import"./index-7qjhDsEe.js";import"./ComboBox-BZRB6Qpf.js";import"./index-DfGlJ-l6.js";import"./TreeList-BbNfEBTC.js";import"./copyToClipboard-DB_KM_BY.js";const x=()=>{const[t,i]=s.useState(0);return o.jsxs("div",{className:p.wrapper,children:[o.jsx(T,{title:"SlideToggle",description:"SlideToggle управляет показом и скрытием дополнительного контента. Компонент поддерживает управляемый и неуправляемый режим, размеры и action-блок в заголовке.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SlideToggle"}),o.jsx("div",{className:p.tabs,children:o.jsxs(r,{children:[o.jsx(r.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),o.jsx(r.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)==0&&o.jsxs(o.Fragment,{children:[o.jsx(e,{description:"Управляемый режим через isShow и onToggle.",code:`import { SlideToggle } from '@nlmk/ds-2.0';
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
export default App;`}),o.jsx(e,{description:"Неуправляемый режим с открытием по умолчанию через defaultOpen.",code:`import { SlideToggle } from '@nlmk/ds-2.0';

const App = () => (
  <SlideToggle title="Раздел открыт по умолчанию" defaultOpen>
    Контент отображается сразу после рендера компонента.
  </SlideToggle>
);

export default App;
`}),o.jsx(e,{description:"Компактный режим через size='compact'.",code:`import { SlideToggle, Typography } from '@nlmk/ds-2.0';

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
`}),o.jsx(e,{description:"Дополнительный блок справа через after.",code:`import { Badge, SlideToggle } from '@nlmk/ds-2.0';

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
`,o.jsx(a,{children:o.jsx(x,{})})]})}function ht(t={}){const{wrapper:i}={...d(),...t.components};return i?o.jsx(i,{...t,children:o.jsx(m,{...t})}):m()}export{ht as default};
