import{j as t}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as m}from"./index-CpguRmgc.js";import{ag as p,ah as n,ai as b}from"./chunk-HLWAVYOI-DvyrZeHL.js";import{Y as r}from"./index-BGpPsu4k.js";import{DecoratorDefault as c}from"./Decorator.stories-BP3ijO2B.js";import{r as T}from"./index-DQ2WTIsS.js";import{s as o,H as l,E as d}from"./Header-Bt-oxRaL.js";import{F as u}from"./FigmaEmbed-BRi3XZKB.js";import{T as v}from"./Tests-CSfu_vhY.js";/* empty css               */import"./generateUUID-C8XntvAg.js";import"./index-ByiRgrzj.js";import"./index-Cd-Fhxqm.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-ehXB0alm.js";import"./index-CFeGFBie.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CTg4GkBi.js";import"./32-CkcGOl0S.js";import"./iframe-BX8EaEtl.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-FuqlRU2D.js";import"./index-BKbm6zW0.js";const i="https://www.figma.com/file/byZZI6bYz2Iv2Jst7ycZ7M/DS2.0-Navigation?type=design&node-id=1-10&mode=design&t=Oysvun6QjDqPZDKX-0",g=()=>{const[e,a]=T.useState(0);return t.jsxs("div",{className:o.wrapper,children:[t.jsx(l,{title:"Tabs",description:"Компонент Tabs, который объединил в себя Tab элементы. Компонент использует подход compound pattern.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Tabs",figmaLink:i}),t.jsx("div",{className:o.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>a(0)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>a(2)})]})}),Number(e)==0&&t.jsx(t.Fragment,{children:t.jsx(d,{height:400,description:"Обычное использование компонента.",code:`import { Tabs, Typography, Box } from '@nlmk/ds-2.0';
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
              name="IconInfo16"
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
`})}),Number(e)==1&&t.jsx(u,{url:i}),Number(e)==2&&t.jsx(v,{componentName:"Tabs"})]})};function s(e){return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Components/Tabs/Info",component:r,parameters:{jest:["Tabs.test.tsx"]}}),`
`,t.jsx(n,{of:c}),`
`,t.jsx(b,{children:t.jsx(g,{})})]})}function $(e={}){const{wrapper:a}={...m(),...e.components};return a?t.jsx(a,{...e,children:t.jsx(s,{...e})}):s()}export{$ as default};
