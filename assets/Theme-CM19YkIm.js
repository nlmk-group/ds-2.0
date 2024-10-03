import{j as t}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as m}from"./index-CpguRmgc.js";import{ag as n,ah as a,ai as p}from"./chunk-HLWAVYOI-DzIJkqQk.js";import{DecoratorDefault as c}from"./Decorator.stories-BP3ijO2B.js";import{s as o,H as d,E as h}from"./Header-qJM--RD_.js";/* empty css               */import{a0 as i}from"./index-BB0QFCoF.js";import"./generateUUID-vFnGh3I6.js";import"./index-CNoQ_QnE.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-Cw4KJrZO.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-BvIp-sDO.js";import"./32-MLA202Yz.js";import"./index-DQ2WTIsS.js";import"./iframe-9gfaio-E.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./types-CpBSVUgC.js";import"./clsx-B-dksMZM.js";import"./index-BKbm6zW0.js";const u=()=>t.jsxs("div",{className:o.wrapper,children:[t.jsx(d,{title:"Theme Switching",description:"Переключение темы между светлой и темной важно для удобства пользователя, снижения напряжения глаз при различных условиях освещенности, энергосбережения на OLED/AMOLED экранах, улучшения доступности для людей с нарушениями зрения, эстетической адаптации интерфейса к разным стилям и контекстам, а также для улучшения общего пользовательского опыта и восприятия бренда.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/blob/main/src/components/ThemeSwitcher"}),t.jsx("div",{className:o.tabs,children:t.jsx(i,{children:t.jsx(i.Tab,{label:"Разработчику",active:!0})})}),t.jsx(t.Fragment,{children:t.jsx(h,{description:"Хук useThemeSwitcher управляет состоянием темы и переключением тем в приложении. Он динамически добавляет и удаляет стили из заголовка документа на основе текущей темы и предоставляет функциональность для переключения тем с сохранением предпочтений пользователя в sessionStorage.",height:700,code:`import { Switch, useThemeSwitcher, Grid, Box, Button } from '@nlmk/ds-2.0';

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
}`})})]});function s(r){return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Introduction/Theme"}),`
`,t.jsx(a,{of:c}),`
`,t.jsx(p,{children:t.jsx(u,{})})]})}function K(r={}){const{wrapper:e}={...m(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(s,{...r})}):s()}export{K as default};
