import{j as t,m as e,S as s,U as n}from"./iframe-DXgTh6Z1.js";import{useMDXComponents as a}from"./index-D5E0TNiY.js";import{DecoratorDefault as c}from"./Decorator.stories-Dx4VbD6X.js";import{s as i,H as d,E as h}from"./Header-Cx_iqH4o.js";/* empty css               */import{T as m}from"./index-9eeKqrVB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-DUoRmuKU.js";import"./index-xDA_A-aD.js";import"./index-CnUkpoWG.js";import"./index-Crin4Hk2.js";import"./index-B4LxWNEW.js";import"./16-B8cH_bM_.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-CmuppIra.js";import"./24-BhlAG-0S.js";import"./index-Bl4_x-Wd.js";import"./16-BbwgBG1i.js";import"./index-nfS7job7.js";import"./index-DdxGYpuj.js";import"./32-BZXccBNX.js";import"./24-C30wJjmO.js";import"./24-BbhvzLc-.js";import"./24-CHg1C3ZC.js";import"./24-sZrB_4qI.js";import"./24-CivDG4N5.js";import"./24-iRhnmlFx.js";import"./24-SIU2poG3.js";import"./24-Chag6Oqa.js";import"./24-BHCEpASW.js";import"./16-BY5Rr64R.js";import"./16-CRuPnIyY.js";import"./index-DYE4Bi1W.js";import"./index-C0y4NBi5.js";import"./index-XmWHrheD.js";import"./index-Nm4Qdu1z.js";import"./index-ucJ0GnFn.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-jEb4Knwf.js";import"./index-DhFDZi2m.js";import"./index-Bd4lHRV0.js";import"./index-D5KpWfD5.js";import"./index-ciSDAmyI.js";import"./index-DPmsdUVY.js";import"./types-TdnjS80C.js";import"./floating-ui.react-CorT-KP5.js";import"./sizesMapping-D8QavrGc.js";import"./index-BVnvWAgp.js";import"./index-RnR2fccb.js";import"./index-BeCrIpLY.js";import"./index-v0wPdj4d.js";import"./index-gjDbOsdM.js";import"./index-C0IGfKtj.js";import"./index-wJn_BZHg.js";import"./index-BvFe6bW5.js";import"./index-BxMhlDR6.js";import"./index-Nw7Pfvlf.js";import"./index-CT-QPPa4.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-G2u_ACY6.js";import"./useFloatingReferenceSync-DqOI9czm.js";import"./index-DJtob4fj.js";import"./index-BX7kJ5B_.js";import"./index-B4fWoCsE.js";import"./index-B61jHTw_.js";import"./index-Ck2v1TJK.js";import"./index-CRivC9UR.js";import"./index-BEPLxOmT.js";import"./index-DVjmoy4g.js";import"./index-BglbQ0D6.js";import"./index-BYuKbTqS.js";import"./index-BhusuGgV.js";import"./index-h3Z4FQnr.js";import"./index-BC9Rp5Jo.js";import"./index-IVdkDpCO.js";import"./index-ilhepyhL.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-D9sJnCBD.js";import"./index-RB1pFFkL.js";import"./index-D6Zu8-bW.js";import"./index-DavKZYHC.js";import"./index-gi2vkf8n.js";import"./index-B7Ar8a4x.js";import"./index-B_BoipIY.js";import"./index-CBxHuoj8.js";import"./index-ByGDn29v.js";import"./index-Ba6RId1F.js";import"./index-MG8YOKfD.js";import"./index-Cgkxu7Qk.js";import"./index-C_JFYl_R.js";import"./index-7iv8Ztsr.js";import"./index-B-LJSldl.js";import"./index-Bxth20eU.js";import"./ComboBox-KK8W0C81.js";import"./index-CdxmqZWy.js";import"./TreeList-CqXttnbr.js";import"./copyToClipboard-DB_KM_BY.js";const u=()=>t.jsxs("div",{className:i.wrapper,children:[t.jsx(d,{title:"Theme Switching",description:"Переключение темы между светлой и темной важно для удобства пользователя, снижения напряжения глаз при различных условиях освещенности, энергосбережения на OLED/AMOLED экранах, улучшения доступности для людей с нарушениями зрения, эстетической адаптации интерфейса к разным стилям и контекстам, а также для улучшения общего пользовательского опыта и восприятия бренда.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/blob/main/src/components/ThemeSwitcher"}),t.jsx("div",{className:i.tabs,children:t.jsx(m,{children:t.jsx(m.Tab,{label:"Разработчику",active:!0})})}),t.jsx(t.Fragment,{children:t.jsx(h,{description:"Хук useThemeSwitcher управляет состоянием темы и переключением тем в приложении. Он динамически добавляет и удаляет стили из заголовка документа на основе текущей темы и предоставляет функциональность для переключения тем с сохранением предпочтений пользователя в sessionStorage.",height:700,code:`import { Switch, useThemeSwitcher, Grid, Box, Button } from '@nlmk/ds-2.0';

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
