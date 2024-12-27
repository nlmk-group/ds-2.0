import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as m}from"./index-CbmgEnq2.js";import{am as n,an as a,ao as p}from"./chunk-NUUEMKO5-CDWB5etm.js";import{DecoratorDefault as c}from"./Decorator.stories-B1hjNCvN.js";import{s as o,H as d,E as h}from"./Header-DqV-uP_8.js";/* empty css               */import{ah as i}from"./index-C1Xf_hS0.js";import"./generateUUID-1tgHdX0-.js";import"./index-eOH20s0c.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-CXG1awCY.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-qxD0tkeT.js";import"./index-Br4tp0-d.js";import"./32-Bf_1a6Rp.js";import"./index-Bnop-kX6.js";import"./iframe-DZPRoslN.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./types-CpBSVUgC.js";import"./clsx-B-dksMZM.js";import"./index-B5g4YLzC.js";const u=()=>t.jsxs("div",{className:o.wrapper,children:[t.jsx(d,{title:"Theme Switching",description:"Переключение темы между светлой и темной важно для удобства пользователя, снижения напряжения глаз при различных условиях освещенности, энергосбережения на OLED/AMOLED экранах, улучшения доступности для людей с нарушениями зрения, эстетической адаптации интерфейса к разным стилям и контекстам, а также для улучшения общего пользовательского опыта и восприятия бренда.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/blob/main/src/components/ThemeSwitcher"}),t.jsx("div",{className:o.tabs,children:t.jsx(i,{children:t.jsx(i.Tab,{label:"Разработчику",active:!0})})}),t.jsx(t.Fragment,{children:t.jsx(h,{description:"Хук useThemeSwitcher управляет состоянием темы и переключением тем в приложении. Он динамически добавляет и удаляет стили из заголовка документа на основе текущей темы и предоставляет функциональность для переключения тем с сохранением предпочтений пользователя в sessionStorage.",height:700,code:`import { Switch, useThemeSwitcher, Grid, Box, Button } from '@nlmk/ds-2.0';

export default  App = () => {
  const { theme, toggleTheme } = useThemeSwitcher();
  const isDark = theme === 'dark';
  const themeLabel = isDark ? 'Темная тема' : 'Светлая тема';

  const boxes = [
    { background: 'var(--spectrum-red-40)' },
    { background: 'var(--spectrum-yellow-40)' },
    { background: 'var(--spectrum-salad-40)' },
    { background: 'var(--spectrum-orange-40)' }
  ];

  return (
    <>
      <Switch checked={isDark} onChange={toggleTheme} label={themeLabel} />
      <Grid width="100%" height="50vh">
        {boxes.map((box, index) => (
          <Box
            key={index}
            background={box.background}
            borderRadius="4px"
            px="8px"
            py="16px"
            st={{ flex: '1' }}
          />
        ))}
      </Grid>
      <Button>Кнопка</Button>
    </>
  );
}`})})]});function s(e){return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Introduction/Theme"}),`
`,t.jsx(a,{of:c}),`
`,t.jsx(p,{children:t.jsx(u,{})})]})}function z(e={}){const{wrapper:r}={...m(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(s,{...e})}):s()}export{z as default};