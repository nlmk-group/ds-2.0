import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as m}from"./index-D2yTtfOz.js";import"./index-C29aix7i.js";import{af as r}from"./TreeList-ChHEVmCs.js";import{DecoratorDefault as p}from"./Decorator.stories-D7iJJ_iz.js";import{r as n}from"./index-BcJSXhQi.js";import{s as o,H as b,E as c}from"./Header-z3o1OyRv.js";import{F as T}from"./FigmaEmbed-DpsoEybb.js";import{T as l}from"./Tests-COXNRsD6.js";/* empty css               */import"./generateUUID-306HU3fz.js";import"./index-CeXAN7vm.js";import"./index-Dd1OPmdN.js";import"./index-vbXA6nr0.js";import"./index-PY2fm1mi.js";import"./index-DmffzHLE.js";import"./index-C431fSij.js";import"./index-VmJK6twV.js";import"./index-BPWT-JIL.js";import"./index-BAYgGaKw.js";import"./index-C1EIKtiR.js";import"./32-DmJYGC0n.js";import{c as u,S as d,U as v}from"./DocsRenderer-CFRXHY34-DGBzxuyv.js";import"./index-ChsGqxH_.js";import"./preview-dU7hj7XT.js";import"./iframe-BNNnwtEP.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-CPf5TK1W.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=45-1167&t=EnvIMGos3m33avAX-1",x=()=>{const[e,a]=n.useState(0);return t.jsxs("div",{className:o.wrapper,children:[t.jsx(b,{title:"Tabs",description:"Компонент Tabs, который объединил в себя Tab элементы. Компонент использует подход compound pattern.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Tabs",figmaLink:i}),t.jsx("div",{className:o.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>a(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>a(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>a(2)})]})}),Number(e)==0&&t.jsx(t.Fragment,{children:t.jsx(c,{height:400,description:"Обычное использование компонента.",code:`import { Tabs, Typography, Box } from '@nlmk/ds-2.0';
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
`})}),Number(e)==1&&t.jsx(T,{url:i}),Number(e)==2&&t.jsx(l,{componentName:"Tabs"})]})};function s(e){return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Components/Tabs/Info",component:r,parameters:{jest:["Tabs.test.tsx"]}}),`
`,t.jsx(d,{of:p}),`
`,t.jsx(v,{children:t.jsx(x,{})})]})}function tt(e={}){const{wrapper:a}={...m(),...e.components};return a?t.jsx(a,{...e,children:t.jsx(s,{...e})}):s()}export{tt as default};
