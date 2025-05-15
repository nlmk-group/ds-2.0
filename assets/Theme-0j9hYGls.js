import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as m}from"./index-CbmgEnq2.js";import"./index-CDNBfPUD.js";import{DecoratorDefault as n}from"./Decorator.stories-B1hjNCvN.js";import{s as o,H as a,E as p}from"./Header-C1-O-XnO.js";/* empty css               */import{ag as i}from"./TreeList-KafSWxD5.js";import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./index-Bnop-kX6.js";import"./32-BTlKmMLd.js";import{c,e as d,U as h}from"./DocsRenderer-CFRXHY34-D9cGPbCT.js";import"./preview-B_gHuUAG.js";import"./iframe-Bi6NeCl1.js";import"./types-CpBSVUgC.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";const u=()=>t.jsxs("div",{className:o.wrapper,children:[t.jsx(a,{title:"Theme Switching",description:"Переключение темы между светлой и темной важно для удобства пользователя, снижения напряжения глаз при различных условиях освещенности, энергосбережения на OLED/AMOLED экранах, улучшения доступности для людей с нарушениями зрения, эстетической адаптации интерфейса к разным стилям и контекстам, а также для улучшения общего пользовательского опыта и восприятия бренда.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/blob/main/src/components/ThemeSwitcher"}),t.jsx("div",{className:o.tabs,children:t.jsx(i,{children:t.jsx(i.Tab,{label:"Разработчику",active:!0})})}),t.jsx(t.Fragment,{children:t.jsx(p,{description:"Хук useThemeSwitcher управляет состоянием темы и переключением тем в приложении. Он динамически добавляет и удаляет стили из заголовка документа на основе текущей темы и предоставляет функциональность для переключения тем с сохранением предпочтений пользователя в sessionStorage.",height:700,code:`import { Switch, useThemeSwitcher, Grid, Box, Button } from '@nlmk/ds-2.0';

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
}`})})]});function s(e){return t.jsxs(t.Fragment,{children:[t.jsx(c,{title:"Introduction/Theme"}),`
`,t.jsx(d,{of:n}),`
`,t.jsx(h,{children:t.jsx(u,{})})]})}function J(e={}){const{wrapper:r}={...m(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(s,{...e})}):s()}export{J as default};
