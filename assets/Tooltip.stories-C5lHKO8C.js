import{U as m,M as T,e as f}from"./chunk-HLWAVYOI-DDRq0WF_.js";import{y as n,$ as d}from"./index-BTGymsfC.js";import{a as p,j as t,F as c}from"./jsx-runtime-2xDJh5tt.js";import{r as v}from"./index-CBqU2yxZ.js";import{s,H as h,E as e,T as g}from"./Tests-CavNk72r.js";import{F as b}from"./FigmaEmbed-DpzAeUNT.js";import{P as B}from"./Properties-DBC0-V8E.js";/* empty css               */import"./generateUUID-1cqmAxQg.js";import"./index-D1sOrwww.js";import"./index-BqvJ5JrJ.js";import{T as x}from"./index-CkVMA9Py.js";import"./index-BulafiJ9.js";import"./index-Dd2IALEV.js";import"./index-BGOHbkSJ.js";import"./index-Dp7-Jy-a.js";import"./index-D8kVD15d.js";import"./32-oKJmtLZM.js";import{a as C}from"./argsTypes-C6vRXpxN.js";import{useMDXComponents as k}from"./index-DI5IigMn.js";import"./iframe-BgqDqa84.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-B3d5YCLo.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-AB3iwQcc.js";import"./index-4J70fF5O.js";const r=`{{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '12px',
  padding: '30px',
  margin: '0 auto',
  height: '180px'
}}`,u=()=>{const[o,i]=v.useState(0);return p("div",{className:s.wrapper,children:[t(h,{title:"Tooltip",description:"Компонент-подсказка, появляющийся при определенном взаимодействии с дочерним элементом компонента (по умолчанию: при наведении курсора). Tooltip рассчитан не только на работу с простой информацией (текст) с единой стилизацией, но и на визуализацию подсказок, содержащих нестандартную информацию (списки, картинки, таблицы).",isBeta:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A43759&mode=design&t=awyt3Fzj1XS6th7v-1"}),t("div",{className:s.tabs,children:p(n,{children:[t(n.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>i(0)}),t(n.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>i(1)}),t(n.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>i(2)})]})}),Number(o)==0&&p(c,{children:[t(e,{description:"Тултип по умолчанию c описанием.",code:`import { Tooltip, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${r}>
    <Tooltip description="Сюда вы можете добавить текст/подсказу для компонента">
      <Button variant="secondary">Наведи на меня курсор!</Button>
    </Tooltip>
  </div>
)
`}),t(e,{description:"Тултип с разными вариантами расположения.",code:`import { Tooltip, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${r}>
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
  <div style=${r}>
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
  <div style=${r}>
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
  <div style=${r}>
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
        <Icon name="IconDoneCheckOutlined24" color="success"/>
        <Typography variant="Caption-Medium">Первый пункт</Typography>
      </div>
      <div style={{ display: 'flex', gap: '8px'}}>
        <Icon name="IconDoneCheckOutlined24" color="success"/>
        <Typography variant="Caption-Medium">Второй пункт</Typography>
      </div>
      <div style={{ display: 'flex', gap: '8px'}}>
        <Icon name="IconDoneCheckOutlined24" color="success"/>
        <Typography variant="Caption-Medium">Третий пункт</Typography>
      </div>
    </div>
  );
};

export default  App = () =>(
  <div style=${r}>
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
`}),t(B,{argsTypes:C})]}),Number(o)==1&&t(b,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A43759&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(o)==2&&t(x,{variant:"Heading4",color:"primary",children:t(g,{componentName:"Tooltip"})})]})};function l(o){return p(c,{children:[t(T,{title:"Components/Tooltip/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/file/b1fUQ56wJbjzskhCh3oj2C/Web-%2F-Tooltip?node-id=312%3A72159&t=lDQrbcLliB0ImlMQ-0"},jest:["Tooltip.test.tsx"]}}),`
`,t(f,{name:"Docs",children:t(m,{children:t(u,{})})})]})}function w(o={}){const{wrapper:i}=Object.assign({},k(),o.components);return i?t(i,{...o,children:t(l,{...o})}):l()}const y=()=>t(m,{children:t(u,{})});y.storyName="Docs";y.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const a={title:"Components/Tooltip/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/b1fUQ56wJbjzskhCh3oj2C/Web-%2F-Tooltip?node-id=312%3A72159&t=lDQrbcLliB0ImlMQ-0"},jest:["Tooltip.test.tsx"]},component:d,tags:["stories-mdx"],includeStories:["docs"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:w};const at=["docs"];export{at as __namedExportsOrder,a as default,y as docs};
