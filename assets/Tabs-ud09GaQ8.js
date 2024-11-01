import{j as t}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as m}from"./index-DtGqrCZN.js";import{ag as p,ah as n,ai as b}from"./chunk-NUUEMKO5-Ctn7VFPu.js";import{$ as r}from"./index-ZojCmbpv.js";import{DecoratorDefault as c}from"./Decorator.stories-CffsLfgf.js";import{r as T}from"./index-Cu9bd8lq.js";import{s as o,H as l,E as u}from"./Header-CN10_-75.js";import{F as d}from"./FigmaEmbed-2TZ9ZXkF.js";import{T as v}from"./Tests-CWaY5hDn.js";/* empty css               */import"./generateUUID-CG7VmJJw.js";import"./index-XsxLq1mj.js";import"./index-AXtJih2E.js";import"./index-ED8ccfsJ.js";import"./index-CWQ0GGcJ.js";import"./index-BHxe-dnq.js";import"./index-iWHyAWYR.js";import"./index-BztLnIMF.js";import"./index-Udc0C2Qz.js";import"./index-CPdpS9Jm.js";import"./32-Bjhqu_Pf.js";import"./iframe-DB6xw0G7.js";import"../sb-preview/runtime.js";import"./index-Ckls47V4.js";import"./index-D-8MO0q_.js";import"./get-CeVb1zXw.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-ebfOklXd.js";import"./index-DrFu-skq.js";import"./client-C_RBoFGa.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-mZjneSg7.js";import"./index-7KVZVlDS.js";const i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=45-1167&t=EnvIMGos3m33avAX-1",x=()=>{const[a,e]=T.useState(0);return t.jsxs("div",{className:o.wrapper,children:[t.jsx(l,{title:"Tabs",description:"Компонент Tabs, который объединил в себя Tab элементы. Компонент использует подход compound pattern.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Tabs",figmaLink:i}),t.jsx("div",{className:o.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(a)===0,onClick:()=>e(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(a)===1,onClick:()=>e(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(a)===2,onClick:()=>e(2)})]})}),Number(a)==0&&t.jsx(t.Fragment,{children:t.jsx(u,{height:400,description:"Обычное использование компонента.",code:`import { Tabs, Typography, Box } from '@nlmk/ds-2.0';
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
`,t.jsx(b,{children:t.jsx(x,{})})]})}function W(a={}){const{wrapper:e}={...m(),...a.components};return e?t.jsx(e,{...a,children:t.jsx(s,{...a})}):s()}export{W as default};
