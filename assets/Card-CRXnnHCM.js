import{j as t}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as n}from"./index-DtGqrCZN.js";import{ag as l,ah as d,ai as m}from"./chunk-NUUEMKO5-Ctn7VFPu.js";import{$ as a,a2 as u}from"./index-ZojCmbpv.js";import{DecoratorDefault as c}from"./Decorator.stories-CffsLfgf.js";import{r as x}from"./index-Cu9bd8lq.js";import{s as r,H as g,E as i}from"./Header-CN10_-75.js";import{F as y}from"./FigmaEmbed-2TZ9ZXkF.js";import{P as C}from"./Properties-Btz1YxCe.js";import{T as f}from"./Tests-CWaY5hDn.js";/* empty css               */import"./generateUUID-CG7VmJJw.js";import"./index-XsxLq1mj.js";import"./index-AXtJih2E.js";import"./index-ED8ccfsJ.js";import"./index-CWQ0GGcJ.js";import"./index-BHxe-dnq.js";import"./index-iWHyAWYR.js";import"./index-BztLnIMF.js";import"./index-Udc0C2Qz.js";import"./index-CPdpS9Jm.js";import"./32-Bjhqu_Pf.js";import{D as v,C as h,a as b}from"./text-13Vkzztn.js";import"./iframe-DB6xw0G7.js";import"../sb-preview/runtime.js";import"./index-Ckls47V4.js";import"./index-D-8MO0q_.js";import"./get-CeVb1zXw.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-ebfOklXd.js";import"./index-DrFu-skq.js";import"./client-C_RBoFGa.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-mZjneSg7.js";import"./index-7KVZVlDS.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-46302&t=HhCDuaOuzHu5rgyf-1",j=()=>{const[o,e]=x.useState(0);return t.jsxs("div",{className:r.wrapper,children:[t.jsx(g,{title:"Card",description:"Компонент Card является функциональным компонентом, который предназначен для отображения карточки с различными элементами интерфейса, такими как изображение, заголовок, описание, значки, селектор и группа кнопок.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Card",figmaLink:p}),t.jsx("div",{className:r.tabs,children:t.jsxs(a,{children:[t.jsx(a.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>e(0)}),t.jsx(a.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>e(1)}),t.jsx(a.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>e(2)})]})}),Number(o)==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{height:350,description:v,code:`import { Button, Card, Typography, Select } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <div style={{
      backgroundColor: 'var(--steel-20)',
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
`}),t.jsx(i,{height:400,description:h,code:`import { Button, Card, Typography, Select } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style={{
    backgroundColor: 'var(--steel-20)',
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
`}),t.jsx(C,{argsTypes:b})]}),Number(o)==1&&t.jsx(y,{url:p}),Number(o)==2&&t.jsx(f,{componentName:"Card"})]})};function s(o){return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/Card/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/file/lRqssxOK56f8Jjk0E68BlN/DS2.0-Card?node-id=1%3A17&mode=dev"},jest:["Card.test.tsx"]}}),`
`,t.jsx(d,{of:c}),`
`,t.jsx(m,{children:t.jsx(j,{})})]})}function it(o={}){const{wrapper:e}={...n(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(s,{...o})}):s()}export{it as default};
