import{r as s,j as t,m as l,S as m,U as d}from"./iframe-DUDunD5j.js";import{useMDXComponents as u}from"./index-CDbv5Jgm.js";import{C as c}from"./index-BgGADeXN.js";import{DecoratorDefault as x}from"./Decorator.stories-DJdCAXEf.js";import{s as i,H as y,E as a}from"./Header-BrZEypuE.js";import{F as g}from"./FigmaEmbed-DovFRgvJ.js";import{P as C}from"./Properties-CcP2VO-p.js";import{T as b}from"./Tests-CSK3RYMm.js";/* empty css               */import{T as r}from"./index-DntXJei4.js";import{D as f,C as v,a as h}from"./text-Dw9TBZ5N.js";import"./preload-helper-PPVm8Dsz.js";import"./sizesMapping-D8QavrGc.js";import"./clsx-B-dksMZM.js";import"./index-DyX2qzoz.js";import"./index-rc7u3FmU.js";import"./index-z_YeHj0K.js";import"./index-r-uICxAh.js";import"./index-BS4wiMYT.js";import"./generateUUID-M57HTP56.js";import"./24-C5ui32Ki.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-YMfOmFJ1.js";import"./index-BixcmxoL.js";import"./index-aoSKrGJR.js";import"./index-BE6Pvktf.js";import"./index-BjTLv_jS.js";import"./index-DdmbHqmW.js";import"./32-BB59z0Rt.js";import"./24-tbbQM-dv.js";import"./24-BLuChUkw.js";import"./24-BGpvFgfj.js";import"./24-BGrLeqpw.js";import"./24-CAewpWgK.js";import"./24-BoEjxhhs.js";import"./24-BAIQ796Q.js";import"./24-BwgIJwEH.js";import"./24-C99UGV7O.js";import"./16-CfofIm8-.js";import"./24-CoSTS1kQ.js";import"./16-DEDu0dyt.js";import"./16-BarbOM5u.js";import"./16-4gnAFB8p.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-46302&t=HhCDuaOuzHu5rgyf-1",j=()=>{const[o,e]=s.useState(0);return t.jsxs("div",{className:i.wrapper,children:[t.jsx(y,{title:"Card",description:"Компонент Card является функциональным компонентом, который предназначен для отображения карточки с различными элементами интерфейса, такими как изображение, заголовок, описание, значки, селектор и группа кнопок.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Card",figmaLink:p}),t.jsx("div",{className:i.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>e(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>e(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>e(2)})]})}),Number(o)==0&&t.jsxs(t.Fragment,{children:[t.jsx(a,{height:350,description:f,code:`import { Button, Card, Typography, Select } from '@nlmk/ds-2.0';

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
`}),t.jsx(a,{height:400,description:v,code:`import { Button, Card, Typography, Select } from '@nlmk/ds-2.0';

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
`}),t.jsx(C,{argsTypes:h})]}),Number(o)==1&&t.jsx(g,{url:p}),Number(o)==2&&t.jsx(b,{componentName:"Card"})]})};function n(o){return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/Card/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/lRqssxOK56f8Jjk0E68BlN/DS2.0-Card?node-id=1%3A17&mode=dev"},jest:["Card.test.tsx"]}}),`
`,t.jsx(m,{of:x}),`
`,t.jsx(d,{children:t.jsx(j,{})})]})}function ut(o={}){const{wrapper:e}={...u(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(n,{...o})}):n()}export{ut as default};
