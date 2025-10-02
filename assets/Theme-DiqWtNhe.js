import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as m}from"./index-D2yTtfOz.js";import"./index-DO87yDOI.js";import{DecoratorDefault as n}from"./Decorator.stories-D7iJJ_iz.js";import{s as o,H as p,E as a}from"./Header-DUNaK4Qm.js";/* empty css               */import{ah as i}from"./TreeList-c_Bstqqa.js";import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import"./index-BcJSXhQi.js";import"./32-CkUgnIrf.js";import{c,S as d,U as h}from"./DocsRenderer-CFRXHY34-C9sYjUx3.js";import"./index-ChsGqxH_.js";import"./preview-BAwTbP2x.js";import"./iframe-DG-4aaVo.js";import"./types-CpBSVUgC.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const u=()=>t.jsxs("div",{className:o.wrapper,children:[t.jsx(p,{title:"Theme Switching",description:"Переключение темы между светлой и темной важно для удобства пользователя, снижения напряжения глаз при различных условиях освещенности, энергосбережения на OLED/AMOLED экранах, улучшения доступности для людей с нарушениями зрения, эстетической адаптации интерфейса к разным стилям и контекстам, а также для улучшения общего пользовательского опыта и восприятия бренда.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/blob/main/src/components/ThemeSwitcher"}),t.jsx("div",{className:o.tabs,children:t.jsx(i,{children:t.jsx(i.Tab,{label:"Разработчику",active:!0})})}),t.jsx(t.Fragment,{children:t.jsx(a,{description:"Хук useThemeSwitcher управляет состоянием темы и переключением тем в приложении. Он динамически добавляет и удаляет стили из заголовка документа на основе текущей темы и предоставляет функциональность для переключения тем с сохранением предпочтений пользователя в sessionStorage.",height:700,code:`import { Switch, useThemeSwitcher, Grid, Box, Button } from '@nlmk/ds-2.0';

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
      <Button type="button">Кнопка</Button>
    </>
  );
}`})})]});function s(r){return t.jsxs(t.Fragment,{children:[t.jsx(c,{title:"Introduction/Theme"}),`
`,t.jsx(d,{of:n}),`
`,t.jsx(h,{children:t.jsx(u,{})})]})}function P(r={}){const{wrapper:e}={...m(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(s,{...r})}):s()}export{P as default};
