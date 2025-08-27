import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as m}from"./index-D2yTtfOz.js";import"./index-BnkOZ7MR.js";import{af as r}from"./TreeList-BcCsA96L.js";import{DecoratorDefault as p}from"./Decorator.stories-D7iJJ_iz.js";import{r as n}from"./index-BcJSXhQi.js";import{s as o,H as b,E as c}from"./Header-BP0xKFXg.js";import{F as l}from"./FigmaEmbed-6qirh5v-.js";import{T}from"./Tests-CQAFf-zw.js";/* empty css               */import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import"./32-CkUgnIrf.js";import{c as d,S as u,U as v}from"./DocsRenderer-CFRXHY34-j1X9pPGM.js";import"./index-ChsGqxH_.js";import"./preview-C6fup1fX.js";import"./iframe-Bw_9lrO_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-pzZMcVLW.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=45-1167&t=EnvIMGos3m33avAX-1",g=()=>{const[a,e]=n.useState(0);return t.jsxs("div",{className:o.wrapper,children:[t.jsx(b,{title:"Tabs",description:"Компонент Tabs, который объединил в себя Tab элементы. Компонент использует подход compound pattern.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Tabs",figmaLink:i}),t.jsx("div",{className:o.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(a)===0,onClick:()=>e(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(a)===1,onClick:()=>e(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(a)===2,onClick:()=>e(2)})]})}),Number(a)==0&&t.jsx(t.Fragment,{children:t.jsx(c,{height:400,description:"Обычное использование компонента.",code:`import { Tabs, Typography, Box } from '@nlmk/ds-2.0';
import { useState } from 'react';

export default  App = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Tabs>
        <Tabs.Tab
          label="Входящие"
          active={0 === Number(activeTab)}
          onClick={() => setActiveTab(0)}
        />
        <Tabs.Tab
          label="Мои папки"
          active={1 === Number(activeTab)}
          onClick={() => setActiveTab(1)}
        />
        <Tabs.Tab
          label="Спам"
          active={2 === Number(activeTab)}
          onClick={() => setActiveTab(2)}
          hasBadge={true}
          badgeChildren="91"
        >
<Tabs.Tooltip
  render={
    <Typography variant="Caption-Medium" color="var(--steel-90)">Сюда вы можете добавить текст-подсказку для компонента</Typography>
  }
>
  <Tabs.Icon name="IconInfoOutlined16" containerSize={16} htmlColor="var(--steel-90)" />
</Tabs.Tooltip>
        </Tabs.Tab>
        <Tabs.Tab
          label="Черновики"
          active={3 === Number(activeTab)}
          onClick={() => setActiveTab(3)}
          hasBadge={true}
          badgeChildren="2"
        />
      </Tabs>

      <Box width={350}>
        {Number(activeTab) == 0 && (
          <Typography variant="Heading4" color="var(--steel-90)">
            Входящие
          </Typography>
        )}
        {Number(activeTab) == 1 && (
          <Typography variant="Heading4" color="var(--steel-90)">
            Мои папки
          </Typography>
        )}
        {Number(activeTab) == 2 && (
          <Typography variant="Heading4" color="var(--steel-90)">
            Папка со спамом
          </Typography>
        )}
        {Number(activeTab) == 3 && (
          <Typography variant="Heading4" color="var(--steel-90)">
            Черновики
          </Typography>
        )}
      </Box>
    </>
  )
}
`})}),Number(a)==1&&t.jsx(l,{url:i}),Number(a)==2&&t.jsx(T,{componentName:"Tabs"})]})};function s(a){return t.jsxs(t.Fragment,{children:[t.jsx(d,{title:"Components/Tabs/Info",component:r,parameters:{jest:["Tabs.test.tsx"]}}),`
`,t.jsx(u,{of:p}),`
`,t.jsx(v,{children:t.jsx(g,{})})]})}function tt(a={}){const{wrapper:e}={...m(),...a.components};return e?t.jsx(e,{...a,children:t.jsx(s,{...a})}):s()}export{tt as default};
