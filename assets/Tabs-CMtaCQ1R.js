import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as m}from"./index-CbmgEnq2.js";import{am as p,an as n,ao as b}from"./chunk-NUUEMKO5-07Vk70i1.js";import{ah as r}from"./TreeList-Dkg9TSoG.js";import{DecoratorDefault as c}from"./Decorator.stories-B1hjNCvN.js";import{r as T}from"./index-Bnop-kX6.js";import{s as o,H as l,E as u}from"./Header-D0bUYppj.js";import{F as d}from"./FigmaEmbed-DVRpXF3r.js";import{T as v}from"./Tests-DnxQ3h5u.js";/* empty css               */import"./generateUUID-Z4ktHL_f.js";import"./index-CkAXh9uP.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-CvRFF9aG.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-D_lYSbi8.js";import"./index-DokmLR-l.js";import"./32-DmPReyKt.js";import"./iframe-4fJfa9Qi.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-Czt5-EC2.js";import"./index-B5g4YLzC.js";const i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=45-1167&t=EnvIMGos3m33avAX-1",x=()=>{const[a,e]=T.useState(0);return t.jsxs("div",{className:o.wrapper,children:[t.jsx(l,{title:"Tabs",description:"Компонент Tabs, который объединил в себя Tab элементы. Компонент использует подход compound pattern.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Tabs",figmaLink:i}),t.jsx("div",{className:o.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(a)===0,onClick:()=>e(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(a)===1,onClick:()=>e(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(a)===2,onClick:()=>e(2)})]})}),Number(a)==0&&t.jsx(t.Fragment,{children:t.jsx(u,{height:400,description:"Обычное использование компонента.",code:`import { Tabs, Typography, Box } from '@nlmk/ds-2.0';
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
          badgeNumber="91"
        >
          <Tabs.Tooltip description="Сюда вы можете добавить текстподсказу для компонента">
            <Tabs.Icon
              name="IconInfoOutlined16"
              containerSize={16}
              htmlColor="var(--text-grey-500)"
            />
          </Tabs.Tooltip>
        </Tabs.Tab>
        <Tabs.Tab
          label="Черновики"
          active={3 === Number(activeTab)}
          onClick={() => setActiveTab(3)}
          badgeNumber="2"
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
            Папка с спамом
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
`})}),Number(a)==1&&t.jsx(d,{url:i}),Number(a)==2&&t.jsx(v,{componentName:"Tabs"})]})};function s(a){return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Components/Tabs/Info",component:r,parameters:{jest:["Tabs.test.tsx"]}}),`
`,t.jsx(n,{of:c}),`
`,t.jsx(b,{children:t.jsx(x,{})})]})}function Z(a={}){const{wrapper:e}={...m(),...a.components};return e?t.jsx(e,{...a,children:t.jsx(s,{...a})}):s()}export{Z as default};
