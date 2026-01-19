import{r as c,j as e,m as l,S as m,U as p}from"./iframe-DUDunD5j.js";import{useMDXComponents as d}from"./index-CDbv5Jgm.js";import{a as u,L as v}from"./argsTypes-GGdp3kjC.js";import{DecoratorDefault as g}from"./Decorator.stories-DJdCAXEf.js";import{s,H as C,E as n}from"./Header-BrZEypuE.js";import{F as h}from"./FigmaEmbed-DovFRgvJ.js";import{P as f}from"./Properties-CcP2VO-p.js";import{T as b}from"./Tests-CSK3RYMm.js";/* empty css               */import{T as t}from"./index-DntXJei4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-r-uICxAh.js";import"./index-BS4wiMYT.js";import"./generateUUID-M57HTP56.js";import"./clsx-B-dksMZM.js";import"./index-DyX2qzoz.js";import"./index-BpbvmvtH.js";import"./types-TdnjS80C.js";import"./index-DdmbHqmW.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BB59z0Rt.js";import"./24-tbbQM-dv.js";import"./24-BLuChUkw.js";import"./24-BGpvFgfj.js";import"./24-BGrLeqpw.js";import"./24-CAewpWgK.js";import"./24-BoEjxhhs.js";import"./24-BAIQ796Q.js";import"./24-BwgIJwEH.js";import"./24-C99UGV7O.js";import"./16-CfofIm8-.js";import"./24-CoSTS1kQ.js";import"./24-C5ui32Ki.js";import"./16-DEDu0dyt.js";import"./16-BarbOM5u.js";import"./16-4gnAFB8p.js";import"./index-rc7u3FmU.js";import"./index-z_YeHj0K.js";import"./index-YMfOmFJ1.js";import"./sizesMapping-D8QavrGc.js";import"./index-BixcmxoL.js";import"./index-aoSKrGJR.js";import"./index-BE6Pvktf.js";import"./index-BjTLv_jS.js";const a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=316-3599",x=()=>{const[r,o]=c.useState(0);return e.jsxs("div",{className:s.wrapper,children:[e.jsx(C,{title:"Legend",description:"Компонент Legend используется для настройки цветов в таблицах/графике, и их отображение списком",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Legend",figmaLink:a}),e.jsx("div",{className:s.tabs,children:e.jsxs(t,{children:[e.jsx(t.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>o(0)}),e.jsx(t.Tab,{label:"Дизайнеру",active:Number(r)===1,onClick:()=>o(1)}),e.jsx(t.Tab,{label:"Тестирование",active:Number(r)===2,onClick:()=>o(2)})]})}),Number(r)===0&&e.jsxs(e.Fragment,{children:[e.jsx(n,{height:450,description:"Для выбора цвета при помощи компонента Legend, нужно указать в тип Legend 'EDIT' и передать в свойство colorList массив объектов с интерфейсом ILegendColor.",code:`import { useState } from 'react';
import { Legend } from '@nlmk/ds-2.0';

const color = {
  default: 'var(--spectrum-red-20)', hover: 'var(--spectrum-red-30)', active: 'var(--spectrum-red-10)'
}

const colorList = [
  { default: 'var(--spectrum-red-20)', hover: 'var(--spectrum-red-30)', active: 'var(--spectrum-red-10)' },
  { default: 'var(--spectrum-green-20)', hover: 'var(--spectrum-green-30)', active: 'var(--spectrum-green-10)' },
  { default: 'var(--spectrum-orange-20)', hover: 'var(--spectrum-orange-30)', active: 'var(--spectrum-orange-10)' }
]

const App = () => {
  const [currentColor, setCurrentColor] = useState(color);

  const onChange = (val) => {
    setCurrentColor(val);
  }

  return (
    <Legend color={currentColor} type="EDIT" colorList={colorList} onColorChange={onChange} />
  );
}

export default App;`}),e.jsx(n,{height:650,description:"Чтобы настроить кастомные компоненты выбора цвета в Legend, передайте viewColor и editColor — функциональные компоненты с соответствующими props для отображения и редактирования, включая ref.",code:`import { useState } from 'react';
import { Legend, Typography } from '@nlmk/ds-2.0';

const containerColor = {
  default: 'var(--spectrum-sky-20)',
  hover: 'var(--spectrum-sky-30)',
  active: 'var(--spectrum-sky-10)'
};

const color = {
  default: 'var(--spectrum-red-20)',
  hover: 'var(--spectrum-red-30)',
  active: 'var(--spectrum-red-10)'
};

const colorList = [
  { default: 'var(--spectrum-red-20)', hover: 'var(--spectrum-red-30)', active: 'var(--spectrum-red-10)' },
  {
    default: 'container',
    viewColor: ({ className, isActive, onColorChange, color }) => {
      const [isHover, setHover] = useState(false);

      const conditions = [
          { check: isHover, result: containerColor.hover },
          { check: isActive, result: containerColor.active }
      ];

      const backgroundColor = conditions.find(cond => cond.check)?.result ?? containerColor.default;

      return (
        <div
          onClick={() => onColorChange?.(color)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={className}
          style={{ backgroundColor, border: isActive ? '1px solid var(--steel-90)' : 'none', boxSizing: 'border-box' }}
        >
          <Typography color="var(--steel-90)" variant="Caption-Bold">PT-23</Typography>
        </div>
      );
    },
    editColor: ({ className, onClick, isDisabled, isOpen }) => {
      const [isHover, setHover] = useState(false);

      const conditions = [
        { check: isDisabled, result: containerColor.default },
        { check: isOpen, result: containerColor.active },
        { check: isHover, result: containerColor.hover }
      ];

      const backgroundColor = conditions.find(cond => cond.check)?.result ?? containerColor.default;

      return (
        <div
          onClick={onClick}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={className}
          style={{ backgroundColor, border: '1px solid var(--steel-90)', boxSizing: 'border-box' }}
        >
          <Typography color="var(--steel-90)" variant="Caption-Bold">PT-23</Typography>
        </div>
      );
    }
  },
  { default: 'var(--spectrum-orange-20)', hover: 'var(--spectrum-orange-30)', active: 'var(--spectrum-orange-10)' }
];

const App = () => {
  const [currentColor, setCurrentColor] = useState(color);

  const onChange = val => {
    setCurrentColor(val);
  };

  return <Legend color={currentColor} colorList={colorList} type="EDIT" onColorChange={onChange} />;
};

export default App;`}),e.jsx(f,{argsTypes:u})]}),Number(r)===1&&e.jsx(h,{url:a}),Number(r)===2&&e.jsx(b,{componentName:"Legend"})]})};function i(r){return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Components/Legend/Info",component:v,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=316-3599"},jest:["Legend.test.tsx"]}}),`
`,e.jsx(m,{of:g}),`
`,e.jsx(p,{children:e.jsx(x,{})})]})}function ue(r={}){const{wrapper:o}={...d(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(i,{...r})}):i()}export{ue as default};
