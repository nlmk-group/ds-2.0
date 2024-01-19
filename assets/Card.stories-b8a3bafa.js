import{M as l,U as c}from"./chunk-HLWAVYOI-3f61a7cc.js";import{a,C as m}from"./index-28aa8d3c.js";import{a as r,j as t,F as d}from"./clsx.m-3764cf42.js";import{r as u}from"./index-f1f749bf.js";import{s as n,H as g,E as p,T as y}from"./Tests-b01304cc.js";import{F as C}from"./FigmaEmbed-cb81cfd0.js";import{P as f}from"./Properties-8db9f8ae.js";/* empty css               */import"./index-a4c35820.js";import"./index-63601013.js";import"./index-e99519f1.js";import"./index-cd305b84.js";import"./index-147655d7.js";import{T as v}from"./index-fb030d50.js";import"./index-ed56af28.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import{D as b,C as h,a as x}from"./text-5d6ac0a1.js";import{u as B}from"./index-4fb8b842.js";import"./iframe-e135f03c.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-01ead064.js";import"./index-29c055d1.js";import"./IconArticle24-414bfa4c.js";import"./IconsList.module-e4fe8555.js";import"./IconPanTool24-f1398bf1.js";import"./.jest-test-results-279ee287.js";import"./index-c1da5c13.js";const T=()=>{const[e,o]=u.useState(0);return r("div",{className:n.wrapper,children:[t(g,{title:"Card",description:"Компонент Card является функциональным компонентом, который предназначен для отображения карточки с различными элементами интерфейса, такими как изображение, заголовок, описание, значки, селектор и группа кнопок.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Card",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20845&mode=design&t=awyt3Fzj1XS6th7v-1"}),t("div",{className:n.tabs,children:r(a,{children:[t(a.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>o(0)}),t(a.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>o(1)}),t(a.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>o(2)})]})}),Number(e)==0&&r(d,{children:[t(p,{height:350,description:b,code:`import { Button, Card, Typography, Select } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <div style={{
      backgroundColor: 'var(--background-default)',
      width: 'fit-content',
      padding: '20px'
  }}>
    <Card>
      <Typography variant='Heading3'>
        Заголовок
      </Typography>

      <Select
        label="Выберите язык программирования"
        options={[
          {
            label: 'C++',
            value: 'C++'
          },
          {
            label: 'C#',
            value: 'C#'
          }]}
      />

      <div style={{ display: 'flex', gap: '8px' }}>
        <Button>
          Button
        </Button>
        <Button variant="secondary">
          Button
        </Button>
      </div>
    </Card>
  </div>
</>
)
`}),t(p,{height:400,description:h,code:`import { Button, Card, Typography, Select } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style={{
    backgroundColor: 'var(--background-default)',
    width: 'fit-content',
    padding: '20px',
    display: 'flex',
    gap: '20px'
  }}>
    <Card>
      <Typography
        variant='Heading3'
      >
        Заголовок
      </Typography>

      <Select
        label="Выберите язык программирования"
        options={[
          {
            label: 'C++',
            value: 'C++'
          },
          {
            label: 'C#',
            value: 'C#'
          }]}
      />

      <div style={{ display: 'flex', gap: '8px' }}>
        <Button>
          Button
        </Button>
        <Button variant="secondary">
          Button
        </Button>
      </div>
    </Card>

    <Card orientation="horizontal">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px'}}>
        <Typography
          variant='Heading3'
        >
          Заголовок
        </Typography>

        <Select
          label="Выберите язык программирования"
          options={[
            {
              label: 'C++',
              value: 'C++'
            },
            {
              label: 'C#',
              value: 'C#'
            }]}
        />

        <div style={{ display: 'flex', gap: '8px' }}>
          <Button>
            Button
          </Button>
          <Button variant="secondary">
            Button
          </Button>
        </div>
      </div>
    </Card>
  </div>
)
`}),t(f,{argsTypes:x})]}),Number(e)==1&&t(C,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20845&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(e)==2&&t(v,{variant:"Heading4",color:"primary",children:t(y,{componentName:"Card"})})]})};function s(e){return r(d,{children:[t(l,{title:"Components/Card/Info",component:m,parameters:{design:{type:"figma",url:"https://www.figma.com/file/lRqssxOK56f8Jjk0E68BlN/DS2.0-Card?node-id=1%3A17&mode=dev"},jest:["Card.test.tsx"]}}),`
`,t(c,{children:t(T,{})})]})}function w(e={}){const{wrapper:o}=Object.assign({},B(),e.components);return o?t(o,{...e,children:t(s,{...e})}):s()}const N=()=>{throw new Error("Docs-only story")};N.parameters={docsOnly:!0};const i={title:"Components/Card/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/lRqssxOK56f8Jjk0E68BlN/DS2.0-Card?node-id=1%3A17&mode=dev"},jest:["Card.test.tsx"]},component:m,tags:["stories-mdx"],includeStories:["__page"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:w};const ct=["__page"];export{ct as __namedExportsOrder,N as __page,i as default};
