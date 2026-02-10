import{r as m,j as t,m as p,S as n,U as b}from"./iframe-BiRbIEmb.js";import{useMDXComponents as c}from"./index-DFADegm-.js";import{T as r}from"./index-Bc-rzIjC.js";import{DecoratorDefault as l}from"./Decorator.stories-Cq2K7ZK_.js";import{s as o,H as T,E as d}from"./Header-BOuFM4z3.js";import{F as u}from"./FigmaEmbed-DXWxjqCs.js";import{T as v}from"./Tests-u2K_XUZf.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./index-BDGZFkub.js";import"./index-CIk7IDPA.js";import"./clsx-B-dksMZM.js";import"./index-CuPa9ZS_.js";import"./index-t6GndyZ6.js";import"./index-BLKLNOs5.js";import"./generateUUID-M57HTP56.js";import"./index-D4AgSARz.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-Lr1o5q5Y.js";import"./24-BbKUo3HT.js";import"./24-Bp_HhEEU.js";import"./24-A5UfwTSh.js";import"./24-BFTkICnz.js";import"./24-CkBhKuNp.js";import"./24-99ZCpV7Q.js";import"./24-DuGNUhV0.js";import"./24-BSYcdl4j.js";import"./24-3PxmqcmV.js";import"./16-XX98Hoxr.js";import"./24-BLu740_K.js";import"./24-DOr3c8sx.js";import"./16-DUa4Gnlc.js";import"./16-CSBhMP4b.js";import"./16-DMPWLjn6.js";import"./index-CDeU-sH7.js";import"./index-DDnqRqhr.js";import"./sizesMapping-D8QavrGc.js";import"./index-BC1L0GA_.js";import"./index-BbyeJaRT.js";import"./index-17UNxjz6.js";const i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=45-1167&t=EnvIMGos3m33avAX-1",g=()=>{const[e,a]=m.useState(0);return t.jsxs("div",{className:o.wrapper,children:[t.jsx(T,{title:"Tabs",description:"Компонент Tabs, который объединил в себя Tab элементы. Компонент использует подход compound pattern.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Tabs",figmaLink:i}),t.jsx("div",{className:o.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>a(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>a(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>a(2)})]})}),Number(e)==0&&t.jsx(t.Fragment,{children:t.jsx(d,{height:400,description:"Обычное использование компонента.",code:`import { Tabs, Typography, Box } from '@nlmk/ds-2.0';
import { useState } from 'react';

const App = () => {
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

export default App;
`})}),Number(e)==1&&t.jsx(u,{url:i}),Number(e)==2&&t.jsx(v,{componentName:"Tabs"})]})};function s(e){return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Components/Tabs/Info",component:r,parameters:{jest:["Tabs.test.tsx"]}}),`
`,t.jsx(n,{of:l}),`
`,t.jsx(b,{children:t.jsx(g,{})})]})}function ot(e={}){const{wrapper:a}={...c(),...e.components};return a?t.jsx(a,{...e,children:t.jsx(s,{...e})}):s()}export{ot as default};
