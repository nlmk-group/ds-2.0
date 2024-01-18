import{M as c,U as u}from"./chunk-HLWAVYOI-efe11a26.js";import{a as r,a6 as l}from"./index-28aa8d3c.js";import{a as n,j as t,F as d}from"./clsx.m-3764cf42.js";import{r as T}from"./index-f1f749bf.js";import{s,H as y,E as e,T as f}from"./Tests-1d807448.js";import{F as v}from"./FigmaEmbed-5df15644.js";import{P as g}from"./Properties-775b83eb.js";/* empty css               */import"./index-a4c35820.js";import"./index-63601013.js";import"./index-e99519f1.js";import"./index-cd305b84.js";import"./index-147655d7.js";import{T as b}from"./index-fb030d50.js";import"./index-ed56af28.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import{a as h}from"./argsTypes-aed4bc4c.js";import{u as B}from"./index-4fb8b842.js";import"./iframe-960583ba.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-c338f20d.js";import"./index-29c055d1.js";import"./IconArticle24-414bfa4c.js";import"./IconsList.module-e4fe8555.js";import"./IconPanTool24-f1398bf1.js";import"./.jest-test-results-c0ac572a.js";import"./index-c1da5c13.js";const p=`{{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '12px',
  padding: '30px',
  margin: '0 auto',
  height: '180px'
}}`,x=()=>{const[o,i]=T.useState(0);return n("div",{className:s.wrapper,children:[t(y,{title:"Tooltip",description:"Компонент-подсказка, появляющийся при определенном взаимодействии с дочерним элементом компонента (по умолчанию: при наведении курсора). Tooltip рассчитан не только на работу с простой информацией (текст) с единой стилизацией, но и на визуализацию подсказок, содержащих нестандартную информацию (списки, картинки, таблицы).",isBeta:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A43759&mode=design&t=awyt3Fzj1XS6th7v-1"}),t("div",{className:s.tabs,children:n(r,{children:[t(r.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>i(0)}),t(r.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>i(1)}),t(r.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>i(2)})]})}),Number(o)==0&&n(d,{children:[t(e,{description:"Тултип по умолчанию c описанием.",code:`import { Tooltip, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${p}>
    <Tooltip description="Сюда вы можете добавить текст/подсказу для компонента">
      <Button variant="secondary">Наведи на меня курсор!</Button>
    </Tooltip>
  </div>
)
`}),t(e,{description:"Тултип с разными вариантами расположения.",code:`import { Tooltip, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${p}>
    <Tooltip placement="top" description="Tooltip on top">
      <Button variant="secondary">Наведи, тултип будет сверху!</Button>
    </Tooltip>
    <Tooltip placement="bottom" description="Tooltip on bottom">
      <Button variant="secondary">Наведи, тултип будет снизу!</Button>
    </Tooltip>
    <Tooltip placement="left" description="Tooltip on left">
      <Button variant="secondary">Наведи, тултип будет слева!</Button>
    </Tooltip>
    <Tooltip placement="right" description="Tooltip on right">
      <Button variant="secondary">Наведи, тултип будет справа!</Button>
    </Tooltip>
  </div>
)
`}),t(e,{description:"Тултип с вариантами поведения на отображение.",code:`import { Tooltip, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${p}>
    <Tooltip
      placement="top"
      behavior="hover"
      description="Tooltip on hover"
    >
      <Button variant="secondary">Тултип появится при наведении!</Button>
    </Tooltip>
    <Tooltip
      placement="top"
      behavior="click"
      description="Tooltip on click"
    >
      <Button variant="secondary">Тултип появится при клике!</Button>
    </Tooltip>
    <Tooltip
      placement="top"
      behavior="focus"
      description="Tooltip on focus"
    >
      <Button variant="secondary">Тултип появится при фокусе!</Button>
    </Tooltip>
  </div>
)
`}),t(e,{description:"Тултип с отображением заголовка, описания и списка.",code:`import { Tooltip, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${p}>
    <Tooltip
      title="Заголовок текста подсказки"
      description="Сюда вы можете добавить текст/подсказу для компонента"
      list={[
        'Здесь, вы можете',
        'добавить нужную вам',
        'информацию по пунктам'
      ]}
    >
      <Button variant="secondary">Наведи на меня курсор!</Button>
    </Tooltip>
  </div>
)
`}),t(e,{description:"По умолчанию Тултип не открывается вокруг disabled элементов. Для того чтобы Тултип открывался корректно в этом случае, нужно оборачиваемый элемент обернуть простым элементом-оберткой, например span.",code:`import { Tooltip, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${p}>
    <Tooltip description="Сюда вы можете добавить текст/подсказу для компонента">
      <span>
        <Button variant="secondary" disabled>
          Наведи на меня курсор!
        </Button>
      </span>
    </Tooltip>
  </div>
)
`}),t(e,{description:"Тултип с кастомной JSX разметкой внутри",code:`import { Tooltip, Button, Typography, Icon } from '@nlmk/ds-2.0';

const RenderCustom = () => {
  return (
    <div>
      <div style={{ display: 'flex', gap: '8px'}}>
        <Icon name="IconDone24" color="success"/>
        <Typography variant="Caption-Medium">Первый пункт</Typography>
      </div>
      <div style={{ display: 'flex', gap: '8px'}}>
        <Icon name="IconDone24" color="success"/>
        <Typography variant="Caption-Medium">Второй пункт</Typography>
      </div>
      <div style={{ display: 'flex', gap: '8px'}}>
        <Icon name="IconDone24" color="success"/>
        <Typography variant="Caption-Medium">Третий пункт</Typography>
      </div>
    </div>
  );
};

export default  App = () =>(
  <div style=${p}>
    <Tooltip
      behavior="click"
      title="Заголовок тултипа с кастомным элементом"
      description="за добавление кастомного элемента отвечает prop - render"
      list={['Внутри вы можете добавить', 'Нужную вам разметку']}
      render={<RenderCustom/>}
    >
      <Button variant="secondary">
        Нажми на меня для появления тултипа!
      </Button>
    </Tooltip>
  </div>
)
`}),t(g,{argsTypes:h})]}),Number(o)==1&&t(v,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A43759&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(o)==2&&t(b,{variant:"Heading4",color:"primary",children:t(f,{componentName:"Tooltip"})})]})};function m(o){return n(d,{children:[t(c,{title:"Components/Tooltip/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/b1fUQ56wJbjzskhCh3oj2C/Web-%2F-Tooltip?node-id=312%3A72159&t=lDQrbcLliB0ImlMQ-0"},jest:["Tooltip.test.tsx"]}}),`
`,t(u,{children:t(x,{})})]})}function C(o={}){const{wrapper:i}=Object.assign({},B(),o.components);return i?t(i,{...o,children:t(m,{...o})}):m()}const w=()=>{throw new Error("Docs-only story")};w.parameters={docsOnly:!0};const a={title:"Components/Tooltip/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/b1fUQ56wJbjzskhCh3oj2C/Web-%2F-Tooltip?node-id=312%3A72159&t=lDQrbcLliB0ImlMQ-0"},jest:["Tooltip.test.tsx"]},component:l,tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:C};const dt=["__page"];export{dt as __namedExportsOrder,w as __page,a as default};
