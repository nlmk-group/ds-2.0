import{r as c,j as e,m as l,S as m,U as p}from"./iframe-BPtLBEuk.js";import{useMDXComponents as d}from"./index-DY5aY42c.js";import{a as u,L as v}from"./argsTypes-BOgXorTk.js";import{DecoratorDefault as g}from"./Decorator.stories-Bt-6wqMy.js";import{s,H as C,E as n}from"./Header-lxb-Wymn.js";import{F as h}from"./FigmaEmbed-IQ2Nn4zn.js";import{P as f}from"./Properties-u6_xeg7P.js";import{T as b}from"./Tests-DUUoQDTR.js";/* empty css               */import{T as t}from"./index-CX87Y9E4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D9G_R1e4.js";import"./index-V5PZJFO3.js";import"./generateUUID-M57HTP56.js";import"./clsx-B-dksMZM.js";import"./index-C9_7xPUt.js";import"./index-jNLleeyk.js";import"./types-TdnjS80C.js";import"./index-CDRf2h9x.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-DeoBrCvQ.js";import"./24-CrLAaNeG.js";import"./24-CpcywAhj.js";import"./24-Ch6Cnsji.js";import"./24-Q7FkUsyZ.js";import"./24-DOwtHgIx.js";import"./24-B4m_3SjA.js";import"./24-CV2ikCuL.js";import"./24-Ba8I7UHN.js";import"./24-BA0GVvoT.js";import"./16-CXoys7qm.js";import"./24-Cxxq2bXd.js";import"./24-8ackLhic.js";import"./16-DwnwCPW9.js";import"./16-BY-nZnBX.js";import"./16-DaMJtJxQ.js";import"./index-DZQvJksB.js";import"./index-BUWLdeqz.js";import"./index-D-pLh_NR.js";import"./sizesMapping-D8QavrGc.js";import"./index-yAFWEvQV.js";import"./index-C5OaxW6Y.js";import"./index-CANPVv15.js";import"./index-d_6bz31j.js";const a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=316-3599",x=()=>{const[r,o]=c.useState(0);return e.jsxs("div",{className:s.wrapper,children:[e.jsx(C,{title:"Legend",description:"Компонент Legend используется для настройки цветов в таблицах/графике, и их отображение списком",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Legend",figmaLink:a}),e.jsx("div",{className:s.tabs,children:e.jsxs(t,{children:[e.jsx(t.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>o(0)}),e.jsx(t.Tab,{label:"Дизайнеру",active:Number(r)===1,onClick:()=>o(1)}),e.jsx(t.Tab,{label:"Тестирование",active:Number(r)===2,onClick:()=>o(2)})]})}),Number(r)===0&&e.jsxs(e.Fragment,{children:[e.jsx(n,{height:450,description:"Для выбора цвета при помощи компонента Legend, нужно указать в тип Legend 'EDIT' и передать в свойство colorList массив объектов с интерфейсом ILegendColor.",code:`import { useState } from 'react';
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
