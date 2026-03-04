import{r as s,j as o,m as l,S as n,U as a}from"./iframe-CE_JzATH.js";import{useMDXComponents as d}from"./index--LKfDmxm.js";import{S as g}from"./index-tXN-kzru.js";import{DecoratorDefault as c}from"./Decorator.stories-Cj-tg-7N.js";import{s as p,H as T,E as e}from"./Header-CEastCIP.js";import{P as f,T as u}from"./Tests-BOPY5pZ5.js";/* empty css               */import{T as r}from"./index-DR6oWFtr.js";import{a as S}from"./argsTypes-C3RP0Tnm.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUUID-M57HTP56.js";import"./clsx-B-dksMZM.js";import"./index-Vjux8dVh.js";import"./index-MfvAP8aB.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-CrxSrIcc.js";import"./24-0Dk1wnnD.js";import"./24-BBq2cK-Y.js";import"./24-DEt0-nuC.js";import"./24-Cd5pTj28.js";import"./24-DGYmTzFV.js";import"./24-HbFaW7H_.js";import"./24-BQMnublh.js";import"./24-DzFwSmYQ.js";import"./24-J6XSru0N.js";import"./16-DWPiS2iU.js";import"./24-CjAn70IH.js";import"./24-D38MhcLh.js";import"./16-BIs1fvk9.js";import"./16-p0CPjrKD.js";import"./16-BkTHhwnS.js";import"./index-D_aCbd9C.js";import"./index-BBICZI1L.js";import"./index-CuFOreg9.js";import"./index-BmicXPVL.js";import"./index-vmgVWNov.js";import"./index-14rW-JY7.js";import"./index-DqQz5Bh6.js";import"./index-DYU6s7CX.js";import"./index-CLTGTTU8.js";import"./index-BGKZjWkn.js";import"./index-C9knVUuX.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-BFAgnURa.js";import"./index-BzyAc0E-.js";import"./index-2jg-3oeM.js";import"./index-Dg5Lxpt5.js";import"./index-BiitYh94.js";import"./index-DTnW7Fop.js";import"./types-TdnjS80C.js";import"./floating-ui.react-BU5fnxMH.js";import"./sizesMapping-D8QavrGc.js";import"./index-Dlf_Ao8T.js";import"./index-DCIzctxN.js";import"./index-D9YxWY4C.js";import"./index-Os9u-Jz6.js";import"./index-BaSH6PPb.js";import"./index-Bz3uj4QG.js";import"./index-BvCaACBB.js";import"./index-1zCxhXDP.js";import"./index-C1XFyCw_.js";import"./index-3C1lTiZm.js";import"./index-zLxCaNl1.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-B7kzxF9t.js";import"./useFloatingReferenceSync-B_aNqrAc.js";import"./index-e5L8QLyK.js";import"./index-GJu7X8CR.js";import"./index-CIwcf8Lj.js";import"./index-B98ISFmk.js";import"./index-Bd3jAiyn.js";import"./index-Dg1nWoIh.js";import"./index-DFbFAj2G.js";import"./index-Y_CVE_H3.js";import"./index-8oyMVyrk.js";import"./index-QZq9zOpZ.js";import"./index-CT3rs89l.js";import"./index-CAijYJEe.js";import"./index-CEXEVLrc.js";import"./index-pURGVU60.js";import"./index-D1Sci6D5.js";import"./index-kWQnP7zC.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DCIrx6NW.js";import"./index-DHVZe4vO.js";import"./index-DuLnj-te.js";import"./index-C7v9s-B0.js";import"./index-y0ewvpMP.js";import"./index-OcscY6If.js";import"./index-DjVMJKcc.js";import"./index-TCeJA5jN.js";import"./index-DtSKDO7f.js";import"./index-DPX3eImA.js";import"./index-DNC3PuSz.js";import"./index-CIs5j9YL.js";import"./index-Bie4xbHL.js";import"./index-WRw5KxXj.js";import"./index-DYl6OFvJ.js";import"./ComboBox-KBNGbY8a.js";import"./index-BdsesjiO.js";import"./TreeList-t_ASH-u2.js";import"./copyToClipboard-DB_KM_BY.js";const x=()=>{const[t,i]=s.useState(0);return o.jsxs("div",{className:p.wrapper,children:[o.jsx(T,{title:"SlideToggle",description:"SlideToggle управляет показом и скрытием дополнительного контента. Компонент поддерживает управляемый и неуправляемый режим, размеры и action-блок в заголовке.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SlideToggle"}),o.jsx("div",{className:p.tabs,children:o.jsxs(r,{children:[o.jsx(r.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),o.jsx(r.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)==0&&o.jsxs(o.Fragment,{children:[o.jsx(e,{description:"Управляемый режим через isShow и onToggle.",code:`import { SlideToggle } from '@nlmk/ds-2.0';
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
`,o.jsx(a,{children:o.jsx(x,{})})]})}function jt(t={}){const{wrapper:i}={...d(),...t.components};return i?o.jsx(i,{...t,children:o.jsx(m,{...t})}):m()}export{jt as default};
