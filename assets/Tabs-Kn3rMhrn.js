import{r as a,j as t,m as s,S as n,U as b}from"./iframe-DVMl8sUd.js";import{useMDXComponents as c}from"./index-CAw1kPaN.js";import{T as i}from"./index-BKzSZHPo.js";import{DecoratorDefault as l}from"./Decorator.stories-CV1kor5g.js";import{s as m,H as T,E as d}from"./Header-CsvOsVxR.js";import{F as u}from"./FigmaEmbed-BhcSTkWa.js";import{T as v}from"./Tests-BBMIGr6p.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./index-Bp2By6__.js";import"./index-BiQzV66K.js";import"./clsx-B-dksMZM.js";import"./index-DBP40flF.js";import"./index-iQSHIB6o.js";import"./index-B85_aTFp.js";import"./generateUUID-M57HTP56.js";import"./index-DXlbLt0r.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-DlVlhRBC.js";import"./24-Dxm6iXAZ.js";import"./24-BpU9xG6s.js";import"./24-B6TQx9cH.js";import"./24-B8I_S3Z2.js";import"./24-CWuMWKc-.js";import"./24-dsfZEEjk.js";import"./24-wxW4P8Ns.js";import"./24-C_f6t1jh.js";import"./24-zy_Eb8yW.js";import"./16-B_-dTBZH.js";import"./24-IUyK1JcU.js";import"./24-CEGSM-Jk.js";import"./16-CGhI_ilc.js";import"./16-BX8-DyZt.js";import"./16-DS6pkd6h.js";import"./index-c_cWNEvj.js";import"./index-B6wmWkKl.js";import"./index-ckEmqNWl.js";import"./index-BkEnu_9U.js";import"./index-CJD9gF_1.js";import"./index-D9mSQM-g.js";import"./index-BDf5uUdD.js";import"./index-DyUq_Ha8.js";import"./index-DFTiKKVp.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-qgNwGWRd.js";import"./index-BT2IFx4q.js";import"./index-CxKYaCMZ.js";import"./index-JdG74ms_.js";import"./index-C9A9Gets.js";import"./index-BAf8pb65.js";import"./types-TdnjS80C.js";import"./floating-ui.react-DI7kI9D-.js";import"./sizesMapping-D8QavrGc.js";import"./index-B9DaXCaB.js";import"./index-FpPixloK.js";import"./index-0BERZfC3.js";import"./index-CLCIgSqb.js";import"./index-DSj7G5qX.js";import"./index-DSuX4nuo.js";import"./index-iSEbVQin.js";import"./index-BkR2z-Xc.js";import"./index-vUoPUndJ.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-C0GcVDfG.js";import"./useFloatingReferenceSync-7YTNcl0h.js";import"./index-B08U8Eji.js";import"./index-Ek0LlI95.js";import"./index-C45P8Ih7.js";import"./index-Dpl1hQuk.js";import"./index-CphKjyIZ.js";import"./index-Db0U5WML.js";import"./index-CQVR9uK0.js";import"./index-b7tpmXVt.js";import"./index-IJGfvyRE.js";import"./index-DAfqaa2G.js";import"./index-DTcCV-Je.js";import"./index-Cn8Pdxua.js";import"./index-DmVjcjny.js";import"./index-CPDTjkl_.js";import"./index-DESvXwG_.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-Bg1GYGiZ.js";import"./index-yBXS77Dw.js";import"./index-D1p2RRKl.js";import"./index-q_lPpOLF.js";import"./index-CYrbOrYX.js";import"./index-CAzTY8lY.js";import"./index-Dkm8jcwi.js";import"./index-C6xjJOKz.js";import"./index-wSRpoQej.js";import"./index-Du6dXHHd.js";import"./index-DiVXqmN1.js";import"./index-CBUFRF6B.js";import"./index-DMJQuZMx.js";import"./index-B3TyGJqx.js";import"./index-DqRlCSI9.js";import"./index-CD2cCXFu.js";import"./ComboBox-BKCir-_v.js";import"./index-BYHclbdr.js";import"./TreeList-WfFaeHrC.js";import"./copyToClipboard-DB_KM_BY.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=45-1167&t=EnvIMGos3m33avAX-1",g=()=>{const[r,o]=a.useState(0);return t.jsxs("div",{className:m.wrapper,children:[t.jsx(T,{title:"Tabs",description:"Компонент Tabs, который объединил в себя Tab элементы. Компонент использует подход compound pattern.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Tabs",figmaLink:p}),t.jsx("div",{className:m.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>o(0)}),t.jsx(i.Tab,{label:"Дизайнеру",active:Number(r)===1,onClick:()=>o(1)}),t.jsx(i.Tab,{label:"Тестирование",active:Number(r)===2,onClick:()=>o(2)})]})}),Number(r)==0&&t.jsx(t.Fragment,{children:t.jsx(d,{height:400,description:"Обычное использование компонента.",code:`import { Tabs, Typography, Box } from '@nlmk/ds-2.0';
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
`})}),Number(r)==1&&t.jsx(u,{url:p}),Number(r)==2&&t.jsx(v,{componentName:"Tabs"})]})};function e(r){return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Components/Tabs/Info",component:i,parameters:{jest:["Tabs.test.tsx"]}}),`
`,t.jsx(n,{of:l}),`
`,t.jsx(b,{children:t.jsx(g,{})})]})}function lr(r={}){const{wrapper:o}={...c(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e()}export{lr as default};
