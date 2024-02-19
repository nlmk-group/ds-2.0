import{M as l,U as c}from"./chunk-HLWAVYOI-bd2949d1.js";import{a as o,C as d}from"./index-f014e98c.js";import{a as r,j as t,F as m}from"./clsx.m-3764cf42.js";import{r as u}from"./index-f1f749bf.js";import{s as n,H as g,E as p,T as y}from"./Tests-605cd25b.js";import{F as C}from"./FigmaEmbed-6f82f7c8.js";import{P as f}from"./Properties-83346e89.js";/* empty css               */import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import{T as v}from"./index-fb030d50.js";import"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-bc089e17.js";import{D as b,C as h,a as x}from"./text-e32f479b.js";import{u as B}from"./index-4fb8b842.js";import"./iframe-6c91f604.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-12f93142.js";import"./index-29c055d1.js";import"./.jest-test-results-108bf634.js";import"./index-c1da5c13.js";const T=()=>{const[e,a]=u.useState(0);return r("div",{className:n.wrapper,children:[t(g,{title:"Card",description:"Компонент Card является функциональным компонентом, который предназначен для отображения карточки с различными элементами интерфейса, такими как изображение, заголовок, описание, значки, селектор и группа кнопок.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Card",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20845&mode=design&t=awyt3Fzj1XS6th7v-1"}),t("div",{className:n.tabs,children:r(o,{children:[t(o.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>a(0)}),t(o.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>a(1)}),t(o.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>a(2)})]})}),Number(e)==0&&r(m,{children:[t(p,{height:350,description:b,code:`import { Button, Card, Typography, Select } from '@nlmk/ds-2.0';

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
`}),t(f,{argsTypes:x})]}),Number(e)==1&&t(C,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20845&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(e)==2&&t(v,{variant:"Heading4",color:"primary",children:t(y,{componentName:"Card"})})]})};function s(e){return r(m,{children:[t(l,{title:"Components/Card/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/file/lRqssxOK56f8Jjk0E68BlN/DS2.0-Card?node-id=1%3A17&mode=dev"},jest:["Card.test.tsx"]}}),`
`,t(c,{children:t(T,{})})]})}function w(e={}){const{wrapper:a}=Object.assign({},B(),e.components);return a?t(a,{...e,children:t(s,{...e})}):s()}const N=()=>{throw new Error("Docs-only story")};N.parameters={docsOnly:!0};const i={title:"Components/Card/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/lRqssxOK56f8Jjk0E68BlN/DS2.0-Card?node-id=1%3A17&mode=dev"},jest:["Card.test.tsx"]},component:d,tags:["stories-mdx"],includeStories:["__page"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:w};const st=["__page"];export{st as __namedExportsOrder,N as __page,i as default};
