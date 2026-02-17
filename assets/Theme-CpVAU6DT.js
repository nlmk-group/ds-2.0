import{j as t,m as e,S as s,U as n}from"./iframe-DVMl8sUd.js";import{useMDXComponents as a}from"./index-CAw1kPaN.js";import{DecoratorDefault as c}from"./Decorator.stories-CV1kor5g.js";import{s as i,H as d,E as h}from"./Header-CsvOsVxR.js";/* empty css               */import{T as m}from"./index-BKzSZHPo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-c_cWNEvj.js";import"./index-Bp2By6__.js";import"./index-BiQzV66K.js";import"./index-DBP40flF.js";import"./index-B6wmWkKl.js";import"./16-DS6pkd6h.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-B6TQx9cH.js";import"./24-zy_Eb8yW.js";import"./index-ckEmqNWl.js";import"./16-B_-dTBZH.js";import"./index-BkEnu_9U.js";import"./index-DXlbLt0r.js";import"./32-DlVlhRBC.js";import"./24-Dxm6iXAZ.js";import"./24-BpU9xG6s.js";import"./24-B8I_S3Z2.js";import"./24-CWuMWKc-.js";import"./24-dsfZEEjk.js";import"./24-wxW4P8Ns.js";import"./24-C_f6t1jh.js";import"./24-IUyK1JcU.js";import"./24-CEGSM-Jk.js";import"./16-CGhI_ilc.js";import"./16-BX8-DyZt.js";import"./index-CJD9gF_1.js";import"./index-D9mSQM-g.js";import"./index-BDf5uUdD.js";import"./index-DyUq_Ha8.js";import"./index-DFTiKKVp.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-qgNwGWRd.js";import"./index-BT2IFx4q.js";import"./index-CxKYaCMZ.js";import"./index-JdG74ms_.js";import"./index-C9A9Gets.js";import"./index-BAf8pb65.js";import"./types-TdnjS80C.js";import"./floating-ui.react-DI7kI9D-.js";import"./sizesMapping-D8QavrGc.js";import"./index-B9DaXCaB.js";import"./index-FpPixloK.js";import"./index-0BERZfC3.js";import"./index-CLCIgSqb.js";import"./index-DSj7G5qX.js";import"./index-DSuX4nuo.js";import"./index-iSEbVQin.js";import"./index-iQSHIB6o.js";import"./index-B85_aTFp.js";import"./index-BkR2z-Xc.js";import"./index-vUoPUndJ.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-C0GcVDfG.js";import"./useFloatingReferenceSync-7YTNcl0h.js";import"./index-B08U8Eji.js";import"./index-Ek0LlI95.js";import"./index-C45P8Ih7.js";import"./index-Dpl1hQuk.js";import"./index-CphKjyIZ.js";import"./index-Db0U5WML.js";import"./index-CQVR9uK0.js";import"./index-b7tpmXVt.js";import"./index-IJGfvyRE.js";import"./index-DAfqaa2G.js";import"./index-DTcCV-Je.js";import"./index-Cn8Pdxua.js";import"./index-DmVjcjny.js";import"./index-CPDTjkl_.js";import"./index-DESvXwG_.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-Bg1GYGiZ.js";import"./index-yBXS77Dw.js";import"./index-D1p2RRKl.js";import"./index-q_lPpOLF.js";import"./index-CYrbOrYX.js";import"./index-CAzTY8lY.js";import"./index-Dkm8jcwi.js";import"./index-C6xjJOKz.js";import"./index-wSRpoQej.js";import"./index-Du6dXHHd.js";import"./index-DiVXqmN1.js";import"./index-CBUFRF6B.js";import"./index-DMJQuZMx.js";import"./index-B3TyGJqx.js";import"./index-DqRlCSI9.js";import"./index-CD2cCXFu.js";import"./ComboBox-BKCir-_v.js";import"./index-BYHclbdr.js";import"./TreeList-WfFaeHrC.js";import"./copyToClipboard-DB_KM_BY.js";const u=()=>t.jsxs("div",{className:i.wrapper,children:[t.jsx(d,{title:"Theme Switching",description:"Переключение темы между светлой и темной важно для удобства пользователя, снижения напряжения глаз при различных условиях освещенности, энергосбережения на OLED/AMOLED экранах, улучшения доступности для людей с нарушениями зрения, эстетической адаптации интерфейса к разным стилям и контекстам, а также для улучшения общего пользовательского опыта и восприятия бренда.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/blob/main/src/components/ThemeSwitcher"}),t.jsx("div",{className:i.tabs,children:t.jsx(m,{children:t.jsx(m.Tab,{label:"Разработчику",active:!0})})}),t.jsx(t.Fragment,{children:t.jsx(h,{description:"Хук useThemeSwitcher управляет состоянием темы и переключением тем в приложении. Он динамически добавляет и удаляет стили из заголовка документа на основе текущей темы и предоставляет функциональность для переключения тем с сохранением предпочтений пользователя в sessionStorage.",height:700,code:`import { Switch, useThemeSwitcher, Grid, Box, Button } from '@nlmk/ds-2.0';

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
`,t.jsx(n,{children:t.jsx(u,{})})]})}function er(r={}){const{wrapper:o}={...a(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(p,{...r})}):p()}export{er as default};
