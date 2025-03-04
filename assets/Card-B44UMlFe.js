import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as s}from"./index-CbmgEnq2.js";import{am as l,an as d,ao as m}from"./chunk-NUUEMKO5-D6WHLBUX.js";import{ag as e,ai as u}from"./TreeList-nratkZsU.js";import{DecoratorDefault as c}from"./Decorator.stories-B1hjNCvN.js";import{r as x}from"./index-Bnop-kX6.js";import{s as r,H as g,E as i}from"./Header-BTNj6gKe.js";import{F as y}from"./FigmaEmbed-CNAs0AGD.js";import{P as C}from"./Properties-DVs4NaDI.js";import{T as f}from"./Tests-C2SgintH.js";/* empty css               */import"./generateUUID-CKWu6hxV.js";import"./index-GIq1hJAH.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-BDwZaM9Z.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-8bMf8-rB.js";import"./index-DokmLR-l.js";import"./32-DOo0Pdng.js";import{D as v,C as b,a as h}from"./text-C5PZML5s.js";import"./iframe-6e6dWBoL.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-BeG1DPgZ.js";import"./index-B5g4YLzC.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-46302&t=HhCDuaOuzHu5rgyf-1",j=()=>{const[o,a]=x.useState(0);return t.jsxs("div",{className:r.wrapper,children:[t.jsx(g,{title:"Card",description:"Компонент Card является функциональным компонентом, который предназначен для отображения карточки с различными элементами интерфейса, такими как изображение, заголовок, описание, значки, селектор и группа кнопок.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Card",figmaLink:p}),t.jsx("div",{className:r.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>a(0)}),t.jsx(e.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>a(1)}),t.jsx(e.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>a(2)})]})}),Number(o)==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{height:350,description:v,code:`import { Button, Card, Typography, Select } from '@nlmk/ds-2.0';

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
</>
)
`}),t.jsx(i,{height:400,description:b,code:`import { Button, Card, Typography, Select } from '@nlmk/ds-2.0';

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
          <Button>
            Button
          </Button>
          <Button variant="secondary">
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
`}),t.jsx(C,{argsTypes:h})]}),Number(o)==1&&t.jsx(y,{url:p}),Number(o)==2&&t.jsx(f,{componentName:"Card"})]})};function n(o){return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/Card/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/file/lRqssxOK56f8Jjk0E68BlN/DS2.0-Card?node-id=1%3A17&mode=dev"},jest:["Card.test.tsx"]}}),`
`,t.jsx(d,{of:c}),`
`,t.jsx(m,{children:t.jsx(j,{})})]})}function it(o={}){const{wrapper:a}={...s(),...o.components};return a?t.jsx(a,{...o,children:t.jsx(n,{...o})}):n()}export{it as default};
