import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as s}from"./index-D2yTtfOz.js";import"./index-BhfZ6bC3.js";import{af as r,ah as l}from"./TreeList-r95OQsMc.js";import{DecoratorDefault as d}from"./Decorator.stories-D7iJJ_iz.js";import{r as m}from"./index-BcJSXhQi.js";import{s as a,H as u,E as i}from"./Header-BA1sa6FT.js";import{F as c}from"./FigmaEmbed-CkZZIlff.js";import{P as x}from"./Properties-ZScLc5Z8.js";import{T as y}from"./Tests-DiluCRUV.js";/* empty css               */import"./generateUUID-DDeHuJRp.js";import"./index-C3pqwiJi.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-BIIyWenB.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-DRazNneG.js";import"./index-C5rKoyII.js";import"./32-Bdg6aZTc.js";import{D as g,C as f,a as C}from"./text-Cep-W2Kx.js";import{c as b,S as v,U as h}from"./DocsRenderer-CFRXHY34-CEAEn9uu.js";import"./index-ChsGqxH_.js";import"./preview-Crnv5oRk.js";import"./iframe-DVotE8Uy.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-yqvZrnpk.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-46302&t=HhCDuaOuzHu5rgyf-1",j=()=>{const[o,e]=m.useState(0);return t.jsxs("div",{className:a.wrapper,children:[t.jsx(u,{title:"Card",description:"Компонент Card является функциональным компонентом, который предназначен для отображения карточки с различными элементами интерфейса, такими как изображение, заголовок, описание, значки, селектор и группа кнопок.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Card",figmaLink:p}),t.jsx("div",{className:a.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>e(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>e(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>e(2)})]})}),Number(o)==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{height:350,description:g,code:`import { Button, Card, Typography, Select } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <div style={{
      backgroundColor: 'var(--unique-background)',
      width: 'fit-content',
      padding: '20px'
  }}>
    <Card>
      <div
        style={{
          height: '200px',
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
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

        <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
          <Button type="button">
            Button
          </Button>
          <Button type="button" variant="secondary">
            Button
          </Button>
        </div>
      </div>
    </Card>
  </div>
</>
)
`}),t.jsx(i,{height:400,description:f,code:`import { Button, Card, Typography, Select } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style={{
    backgroundColor: 'var(--unique-background)',
    width: 'fit-content',
    padding: '20px',
    display: 'flex',
    gap: '20px'
  }}>
    <Card>
    <div
        style={{
          height: '200px',
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
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

        <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
          <Button type="button">
            Button
          </Button>
          <Button type="button" variant="secondary">
            Button
          </Button>
        </div>
      </div>
    </Card>

    <Card orientation="horizontal">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px'}}>
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
          <Button type="button">
            Button
          </Button>
          <Button type="button" variant="secondary">
            Button
          </Button>
        </div>
      </div>
    </Card>
  </div>
)
`}),t.jsx(x,{argsTypes:C})]}),Number(o)==1&&t.jsx(c,{url:p}),Number(o)==2&&t.jsx(y,{componentName:"Card"})]})};function n(o){return t.jsxs(t.Fragment,{children:[t.jsx(b,{title:"Components/Card/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/lRqssxOK56f8Jjk0E68BlN/DS2.0-Card?node-id=1%3A17&mode=dev"},jest:["Card.test.tsx"]}}),`
`,t.jsx(v,{of:d}),`
`,t.jsx(h,{children:t.jsx(j,{})})]})}function nt(o={}){const{wrapper:e}={...s(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(n,{...o})}):n()}export{nt as default};
