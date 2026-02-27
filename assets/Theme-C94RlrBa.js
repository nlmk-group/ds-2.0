import{j as t,m as e,S as s,U as n}from"./iframe-DXeeMUlS.js";import{useMDXComponents as a}from"./index-CAD-9v6k.js";import{DecoratorDefault as c}from"./Decorator.stories-DJYsOzS0.js";import{s as i,H as d,E as h}from"./Header-BbzYBLL5.js";/* empty css               */import{T as m}from"./index-CfeZzpgs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-PnnjiXFF.js";import"./index-DVWmtr1D.js";import"./index-BHI3eI3g.js";import"./index-DZc_Je-I.js";import"./index-CuRTdhZw.js";import"./16-C_DfNdCf.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-CBLD6MwG.js";import"./24-CHgX55v6.js";import"./index-D5lDtE6T.js";import"./16-eB7nAebF.js";import"./index-BeR8cofE.js";import"./index-IY4AFwls.js";import"./32-CGcqymZX.js";import"./24-DzDWDUmy.js";import"./24-DpK5eddQ.js";import"./24-BtzwVLrk.js";import"./24-BXEslVYf.js";import"./24-BO1wVPpM.js";import"./24-Bdd9D4Ti.js";import"./24-BEN_WnoL.js";import"./24-yThwR12y.js";import"./24-CsKtuqYo.js";import"./16-DPaGmQaD.js";import"./16-9aNWehyQ.js";import"./index-CS-N0axT.js";import"./index-DTjMDcvY.js";import"./index-Dgj4-etr.js";import"./index-C5-mffQZ.js";import"./index-D6zPR6x_.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-DKJTyuxe.js";import"./index-CIN4IkhO.js";import"./index-BMRC5SOo.js";import"./index-CpO2fZ6u.js";import"./index-BXmVr5wC.js";import"./index-BAiw0P9_.js";import"./types-TdnjS80C.js";import"./floating-ui.react-D6vM1ylD.js";import"./sizesMapping-D8QavrGc.js";import"./index-CszhfbMz.js";import"./index-lmS2Z8XU.js";import"./index-DEU_C-CF.js";import"./index-Cd-LHCBs.js";import"./index-CwewWkbt.js";import"./index-Cs5S9q8Y.js";import"./index-CtqkFbMR.js";import"./index-BKA76Ifo.js";import"./index-BO90VTyW.js";import"./index-CM6F5ah0.js";import"./index-zw_MLesm.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CE7G7CXw.js";import"./useFloatingReferenceSync-D1-TZfLV.js";import"./index-njfCmUMO.js";import"./index-B5y6kVop.js";import"./index-5ou-46if.js";import"./index-C27yRONQ.js";import"./index-1AKTzjWH.js";import"./index-BSNOoPXq.js";import"./index-n2Qh6IgR.js";import"./index-Cip2TGbq.js";import"./index-DfF7qLpq.js";import"./index-DEuU-g3N.js";import"./index-PB-RB5Z0.js";import"./index-CI_iOl8v.js";import"./index-dihm09I5.js";import"./index-DNE-7B4q.js";import"./index-DR0r2zXh.js";import"./index-CQ-4hoeh.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DSmhyhqI.js";import"./index-SGPmwNfG.js";import"./index-DnB9MQyQ.js";import"./index-5p4PnV8M.js";import"./index-CocQ4obD.js";import"./index-DyZjUOWl.js";import"./index-BE70tGtN.js";import"./index-DW8OwNMu.js";import"./index-BONO3tZk.js";import"./index-FvFNIRYR.js";import"./index-BSOjBlgq.js";import"./index-aMJa5hfH.js";import"./index-DazVin3p.js";import"./index-6n6_bedz.js";import"./index-BYbdmuaq.js";import"./index-C3_SrVzw.js";import"./ComboBox-DH4E0EfK.js";import"./index-bQdqyENo.js";import"./TreeList-6f3aQ_TB.js";import"./copyToClipboard-DB_KM_BY.js";const u=()=>t.jsxs("div",{className:i.wrapper,children:[t.jsx(d,{title:"Theme Switching",description:"Переключение темы между светлой и темной важно для удобства пользователя, снижения напряжения глаз при различных условиях освещенности, энергосбережения на OLED/AMOLED экранах, улучшения доступности для людей с нарушениями зрения, эстетической адаптации интерфейса к разным стилям и контекстам, а также для улучшения общего пользовательского опыта и восприятия бренда.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/blob/main/src/components/ThemeSwitcher"}),t.jsx("div",{className:i.tabs,children:t.jsx(m,{children:t.jsx(m.Tab,{label:"Разработчику",active:!0})})}),t.jsx(t.Fragment,{children:t.jsx(h,{description:"Хук useThemeSwitcher управляет состоянием темы и переключением тем в приложении. Он динамически добавляет и удаляет стили из заголовка документа на основе текущей темы и предоставляет функциональность для переключения тем с сохранением предпочтений пользователя в sessionStorage.",height:700,code:`import { Switch, useThemeSwitcher, Grid, Box, Button } from '@nlmk/ds-2.0';

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
}`})})]});function p(r){return t.jsxs(t.Fragment,{children:[t.jsx(e,{title:"Introduction/Theme"}),`
`,t.jsx(s,{of:c}),`
`,t.jsx(n,{children:t.jsx(u,{})})]})}function sr(r={}){const{wrapper:o}={...a(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(p,{...r})}):p()}export{sr as default};
