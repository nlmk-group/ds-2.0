import{U as p,M as l,e as d}from"./chunk-HLWAVYOI-fgu-XDft.js";import{L as r}from"./index-C0aanJC7.js";import{a as i,j as t,F as c}from"./jsx-runtime-2xDJh5tt.js";import{r as u}from"./index-CBqU2yxZ.js";import{s,H as y,E as v,T as g}from"./Tests-DMUGGc3Q.js";import{F as h}from"./FigmaEmbed-CeBv5TJ0.js";/* empty css               */import"./generateUUID-Cuz4oBdd.js";import"./index-BG0PBiA5.js";import"./index-D60oXbFF.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as N}from"./index-nWYpQihe.js";import"./index-B0rYwNoJ.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-wBSyW2WA.js";import"./32-Cvin1aiw.js";import{useMDXComponents as f}from"./index-DI5IigMn.js";import"./iframe-DPWU-LGg.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-YaPniO6T.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-CsZ9GDgK.js";import"./index-CMH8wQUv.js";const m="https://www.figma.com/file/byZZI6bYz2Iv2Jst7ycZ7M/DS2.0-Navigation?type=design&node-id=1-10&mode=design&t=Oysvun6QjDqPZDKX-0",b=()=>{const[e,a]=u.useState(0);return i("div",{className:s.wrapper,children:[t(y,{title:"Tabs",description:"Компонент Tabs, который объединил в себя Tab элементы. Компонент использует подход compound pattern.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Tabs",figmaLink:m}),t("div",{className:s.tabs,children:i(r,{children:[t(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>a(0)}),t(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>a(1)}),t(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>a(2)})]})}),Number(e)==0&&t(c,{children:t(v,{height:400,description:"Обычное использование компонента.",code:`import { Tabs, Typography, Box } from '@nlmk/ds-2.0';
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
          <Typography variant="Heading4" color="primary">
            Входящие
          </Typography>
        )}
        {Number(activeTab) == 1 && (
          <Typography variant="Heading4" color="primary">
            Мои папки
          </Typography>
        )}
        {Number(activeTab) == 2 && (
          <Typography variant="Heading4" color="primary">
            Папка с спамом
          </Typography>
        )}
        {Number(activeTab) == 3 && (
          <Typography variant="Heading4" color="primary">
            Черновики
          </Typography>
        )}
      </Box>
    </>
  )
}
`})}),Number(e)==1&&t(h,{url:m}),Number(e)==2&&t(N,{variant:"Heading4",color:"primary",children:t(g,{componentName:"Tabs"})})]})};function n(e){return i(c,{children:[t(l,{title:"Components/Tabs/Info",component:r,parameters:{jest:["Tabs.test.tsx"]}}),`
`,t(d,{name:"Docs",children:t(p,{children:t(b,{})})})]})}function x(e={}){const{wrapper:a}=Object.assign({},f(),e.components);return a?t(a,{...e,children:t(n,{...e})}):n()}const T=()=>t(p,{children:t(b,{})});T.storyName="Docs";T.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const o={title:"Components/Tabs/Info",parameters:{jest:["Tabs.test.tsx"]},component:r,tags:["stories-mdx"],includeStories:["docs"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:x};const rt=["docs"];export{rt as __namedExportsOrder,o as default,T as docs};
