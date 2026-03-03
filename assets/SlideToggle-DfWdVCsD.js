import{r as s,j as o,m as l,S as n,U as a}from"./iframe-B-8SjXGq.js";import{useMDXComponents as d}from"./index-BM0F5ub6.js";import{S as g}from"./index-CHI72_Mb.js";import{DecoratorDefault as c}from"./Decorator.stories-Dr4lnSCK.js";import{s as p,H as T,E as e}from"./Header-Bt2eZ0XI.js";import{P as f,T as u}from"./Tests-BJxC6M0y.js";/* empty css               */import{T as r}from"./index-lTVAi1na.js";import{a as S}from"./argsTypes-DCnIsD6V.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUUID-M57HTP56.js";import"./clsx-B-dksMZM.js";import"./index-BRmunlbh.js";import"./index-DqQiUiOd.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-CnDyPHET.js";import"./24-DwPXEH6E.js";import"./24-2N5QtnbH.js";import"./24-Dnj2eOeL.js";import"./24-nrV1efA2.js";import"./24-CjfWKKEu.js";import"./24-BSP12KOo.js";import"./24-rC0gEzBb.js";import"./24-DxfkYE9X.js";import"./24-CcDcN9Vt.js";import"./16-BNHSjjb0.js";import"./24-CBHgkWPK.js";import"./24-FlXbOQvU.js";import"./16-B09-A838.js";import"./16-Bjal1Kcy.js";import"./16-BDcju3io.js";import"./index-DWjwH6nq.js";import"./index-CgN-9tGr.js";import"./index-Dfriq7lO.js";import"./index-DcMeZWW2.js";import"./index-SApy96bT.js";import"./index-WkQvqD6p.js";import"./index-1sCEIwws.js";import"./index-D81MGMsd.js";import"./index-O63UzFtM.js";import"./index-BG3v9Uex.js";import"./index-DjGSmZX3.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-BA-hOJmZ.js";import"./index-C0fhG72W.js";import"./index-CVbeuYKL.js";import"./index-CDSure0q.js";import"./index-DLvwH50I.js";import"./index-DHxtbo6p.js";import"./types-TdnjS80C.js";import"./floating-ui.react-D9KZKjfI.js";import"./sizesMapping-D8QavrGc.js";import"./index-aEU1GZqG.js";import"./index-BFb5q96r.js";import"./index-nnfFZ9zh.js";import"./index-CJXb8S3m.js";import"./index-DQp-at3f.js";import"./index-BKV_kQZi.js";import"./index-BsPt_Eeq.js";import"./index-CA4vmu2I.js";import"./index-DmKJBqLb.js";import"./index-BpxvuqRy.js";import"./index-Bwm1RwE7.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CezGHJxo.js";import"./useFloatingReferenceSync-Dse8FenO.js";import"./index-lbMvjW_5.js";import"./index-BQw9APNC.js";import"./index-BIIYwqts.js";import"./index-gTdR2BgD.js";import"./index-BO_pppR1.js";import"./index-CA8coT2V.js";import"./index-BOvyB9Hg.js";import"./index-D0y26aqM.js";import"./index-nMsf_JLJ.js";import"./index-CbDdcaTf.js";import"./index-Bemzq2Pd.js";import"./index-CZwmGRm1.js";import"./index-BsUh_WOc.js";import"./index-BiLYqWzA.js";import"./index-CRdPa-5u.js";import"./index-DXDnCKkm.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-6SN77Vs_.js";import"./index-J-DZaU2Z.js";import"./index-DRE2VGwx.js";import"./index-pTCHtkWj.js";import"./index-BistaHJu.js";import"./index-CdcbwH8N.js";import"./index-D7Pw4d7U.js";import"./index-B09XZxaV.js";import"./index-DTtZr5oI.js";import"./index--AS7wYhz.js";import"./index-XCg4i2Qb.js";import"./index-K1Up07vg.js";import"./index-CCVipuRP.js";import"./index-CYq0uzEC.js";import"./index-D9xdw-kV.js";import"./ComboBox-D53aWZPr.js";import"./index-CIaEAtE8.js";import"./TreeList-u3mntEr0.js";import"./copyToClipboard-DB_KM_BY.js";const x=()=>{const[t,i]=s.useState(0);return o.jsxs("div",{className:p.wrapper,children:[o.jsx(T,{title:"SlideToggle",description:"SlideToggle управляет показом и скрытием дополнительного контента. Компонент поддерживает управляемый и неуправляемый режим, размеры и action-блок в заголовке.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SlideToggle"}),o.jsx("div",{className:p.tabs,children:o.jsxs(r,{children:[o.jsx(r.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),o.jsx(r.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)==0&&o.jsxs(o.Fragment,{children:[o.jsx(e,{description:"Управляемый режим через isShow и onToggle.",code:`import { SlideToggle } from '@nlmk/ds-2.0';
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
