import{r as d,j as e,m as b,S as v,U as x}from"./iframe-DXgTh6Z1.js";import{useMDXComponents as f}from"./index-D5E0TNiY.js";import{S as j}from"./index-DavKZYHC.js";import{DecoratorDefault as g}from"./Decorator.stories-Dx4VbD6X.js";import{s as m,H as C,E as o}from"./Header-Cx_iqH4o.js";import{F as I}from"./FigmaEmbed-iMMFN0ni.js";import{P as h}from"./Properties-Bo87EZNs.js";import{T as k}from"./Tests-DMr2Ac1b.js";import{T as p}from"./index-9eeKqrVB.js";import{a as N}from"./argsTypes-CnufI8iF.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-DYE4Bi1W.js";import"./index-xDA_A-aD.js";import"./index-CnUkpoWG.js";import"./clsx-B-dksMZM.js";import"./index-Crin4Hk2.js";import"./24-sZrB_4qI.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-C0y4NBi5.js";import"./index-XmWHrheD.js";import"./index-ucJ0GnFn.js";import"./index-jEb4Knwf.js";import"./index-DdxGYpuj.js";import"./32-BZXccBNX.js";import"./24-C30wJjmO.js";import"./24-BbhvzLc-.js";import"./24-CmuppIra.js";import"./24-CHg1C3ZC.js";import"./24-CivDG4N5.js";import"./24-iRhnmlFx.js";import"./24-SIU2poG3.js";import"./24-BhlAG-0S.js";import"./16-BbwgBG1i.js";import"./24-Chag6Oqa.js";import"./24-BHCEpASW.js";import"./16-BY5Rr64R.js";import"./16-CRuPnIyY.js";import"./16-B8cH_bM_.js";import"./useFloatingReferenceSync-DqOI9czm.js";import"./index-Bd4lHRV0.js";import"./index-DPmsdUVY.js";import"./types-TdnjS80C.js";import"./floating-ui.react-CorT-KP5.js";import"./index-DUoRmuKU.js";import"./index-B4LxWNEW.js";import"./index-Bl4_x-Wd.js";import"./index-nfS7job7.js";import"./index-Nm4Qdu1z.js";import"./index-DhFDZi2m.js";import"./index-D5KpWfD5.js";import"./index-ciSDAmyI.js";import"./sizesMapping-D8QavrGc.js";import"./index-BVnvWAgp.js";import"./index-RnR2fccb.js";import"./index-BeCrIpLY.js";import"./index-v0wPdj4d.js";import"./index-gjDbOsdM.js";import"./index-C0IGfKtj.js";import"./index-wJn_BZHg.js";import"./index-BvFe6bW5.js";import"./index-BxMhlDR6.js";import"./index-Nw7Pfvlf.js";import"./index-CT-QPPa4.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-G2u_ACY6.js";import"./index-DJtob4fj.js";import"./index-BX7kJ5B_.js";import"./index-B4fWoCsE.js";import"./index-B61jHTw_.js";import"./index-Ck2v1TJK.js";import"./index-CRivC9UR.js";import"./index-BEPLxOmT.js";import"./index-DVjmoy4g.js";import"./index-BglbQ0D6.js";import"./index-BYuKbTqS.js";import"./index-BhusuGgV.js";import"./index-h3Z4FQnr.js";import"./index-BC9Rp5Jo.js";import"./index-IVdkDpCO.js";import"./index-ilhepyhL.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-D9sJnCBD.js";import"./index-RB1pFFkL.js";import"./index-D6Zu8-bW.js";import"./index-gi2vkf8n.js";import"./index-B7Ar8a4x.js";import"./index-B_BoipIY.js";import"./index-CBxHuoj8.js";import"./index-ByGDn29v.js";import"./index-Ba6RId1F.js";import"./index-MG8YOKfD.js";import"./index-Cgkxu7Qk.js";import"./index-C_JFYl_R.js";import"./index-7iv8Ztsr.js";import"./index-B-LJSldl.js";import"./index-Bxth20eU.js";import"./ComboBox-KK8W0C81.js";import"./index-CdxmqZWy.js";import"./TreeList-CqXttnbr.js";import"./copyToClipboard-DB_KM_BY.js";const r="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397",A="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SimpleSelect",O=()=>{const[t,l]=d.useState(0),i=`const options = [
  { value: 'steel', label: 'High-Strength Low-Alloy Steel' },
  { value: 'aluminum', label: 'Aluminum' },
  { value: 'copper', label: 'Copper', disabled: true },
  { value: 'nickel', label: 'Nickel' },
  { value: 'zinc', label: 'Zinc' },
  { value: 'lead', label: 'Lead' },
  { value: 'tin', label: 'Tin' }
  ];`,s=`
  import { SimpleSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${i}

const App = () => {
  const [value, setValue] = useState('');
  return (
    <SimpleSelect value={value} onChange={setValue} label="Одиночный выбор">
      {options.map(({value, label, disabled}) => (
        <OptionItem key={value} value={value} label={label} disabled={disabled}>
          {label}
        </OptionItem>
      ))}
    </SimpleSelect>
  );
};
export default App;
`,n=`
  import { SimpleSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${i}

const App = () => {
  const [value, setValue] = useState('');
  return (
    <SimpleSelect value={value} onChange={setValue} label="Disabled" disabled>
      {options.map(({value, label, disabled}) => (
        <OptionItem key={value} value={value} label={label}>
          {label}
        </OptionItem>
      ))}
    </SimpleSelect>
  );
};
export default App;
`,c=`
  import { SimpleSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${i}

const App = () => {
  const [value, setValue] = useState('');
  return (
    <SimpleSelect value={value} onChange={setValue} label="Размер xs" size="xs">
      {options.map(({value, label, disabled}) => (
        <OptionItem key={value} value={value} label={label}>
          {label}
        </OptionItem>
      ))}
    </SimpleSelect>
  );
};
export default App;
`,u=`
  import { SimpleSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${i}

const App = () => {
  const [value, setValue] = useState('');
  return (
    <SimpleSelect value={value} onChange={setValue} label="Скролл" scrollingItems={2}>
      {options.map(({value, label, disabled}) => (
        <OptionItem key={value} value={value} label={label}>
          {label}
        </OptionItem>
      ))}
    </SimpleSelect>
  );
};
export default App;
`,S=`
  import { SimpleSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${i}

const App = () => {
  const [value, setValue] = useState('');
  return (
    <SimpleSelect value={value} onChange={setValue} label="Цвет success" color="success">
      {options.map(({value, label, disabled}) => (
        <OptionItem key={value} value={value} label={label}>
          {label}
        </OptionItem>
      ))}
    </SimpleSelect>
  );
};
export default App;
`;return e.jsxs("div",{className:m.wrapper,children:[e.jsx(C,{title:"SimpleSelect",description:"SimpleSelect позволяет пользователям выбирать один элемент из списка. Он поддерживает различные настройки и стили.",isStable:!0,codeLink:A,figmaLink:r}),e.jsx("div",{className:m.tabs,children:e.jsxs(p,{children:[e.jsx(p.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>l(0)}),e.jsx(p.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>l(1)}),e.jsx(p.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>l(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{description:"Компонент SimpleSelect с одиночным выбором",code:s}),e.jsx(o,{description:"SimpleSelect в состоянии disabled",code:n}),e.jsx(o,{description:"Экстра компактный SimpleSelect",code:c}),e.jsx(o,{description:"SimpleSelect с установленным скроллом",code:u}),e.jsx(o,{description:"SimpleSelect с цветом success",code:S}),e.jsx(o,{height:200,description:"Пустой SimpleSelect",code:`
  import { SimpleSelect } from '@nlmk/ds-2.0';
  import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState('');
  return (
    <SimpleSelect value={value} onChange={setValue} label="Пустой select">
      {/* No options */}
    </SimpleSelect>
  );
};
export default App;
`}),e.jsx(h,{argsTypes:N})]}),Number(t)===1&&e.jsx(I,{url:r}),Number(t)===2&&e.jsx(k,{componentName:"SimpleSelect"})]})};function a(t){return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Components/SimpleSelect/Info",component:j,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397"},jest:["SimpleSelect.test.tsx"]}}),`
`,e.jsx(v,{of:g}),`
`,e.jsx(x,{children:e.jsx(O,{})})]})}function kt(t={}){const{wrapper:l}={...f(),...t.components};return l?e.jsx(l,{...t,children:e.jsx(a,{...t})}):a()}export{kt as default};
