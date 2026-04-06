import{j as t,m as p,S as n,U as s}from"./iframe-adG_7yRG.js";import{useMDXComponents as a}from"./index-Cg8Pf3Pw.js";import{DecoratorDefault as c}from"./Decorator.stories-Beo23sgK.js";import{s as e,H as d,E as u}from"./Header-cMHYDLeC.js";/* empty css               */import{T as i}from"./index-Yehuvb9K.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-CnTjgQRx.js";import"./index-DzN3aT-y.js";import"./index-TjqOvBrG.js";import"./index-N0HJx9V2.js";import"./index-y2k2yeKx.js";import"./16-C5RTlL5k.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-C2G2GNsa.js";import"./24-B-tnmrg_.js";import"./index-C6st097g.js";import"./16-LI8OsMJg.js";import"./index-DSz2Fxi8.js";import"./index-DC_nQVbx.js";import"./32-B9XnRb5u.js";import"./24-DrBRk2vS.js";import"./24-BuaVNHQi.js";import"./24-B4fAX0Ec.js";import"./24-Wv8b4C8A.js";import"./24-GH3yabNM.js";import"./24-BDLYxJUB.js";import"./24-DcUw9JWs.js";import"./24-BxGqfMjL.js";import"./24-B0jNPX91.js";import"./16-BTp4GQQG.js";import"./16-D-NUuvME.js";import"./index-BSzISWDV.js";import"./index-Bw5qm4Ov.js";import"./index-75kOkesn.js";import"./index-Dyd59tUY.js";import"./index-BhxlvnnA.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-COV9g-2Q.js";import"./index-DJrVOycg.js";import"./index-Dy1IE1cv.js";import"./index-DtX9i5FK.js";import"./index-B1pHFt52.js";import"./index-CwSciSyB.js";import"./types-TdnjS80C.js";import"./floating-ui.react-7VA0tf7C.js";import"./sizesMapping-D8QavrGc.js";import"./index-Da_FDSx_.js";import"./index-U_RCd_HH.js";import"./index-CMSErBpE.js";import"./index-CzkpZwDT.js";import"./index-BOTgB3bz.js";import"./index-DFAIDFiK.js";import"./index-CkcKW4Vm.js";import"./index-C0jfxf7x.js";import"./index-Csnb6gHF.js";import"./index-BYkQO_14.js";import"./index-CsSUhH6Q.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-Cl0xhJAL.js";import"./useFloatingReferenceSync-D48fx_Db.js";import"./index-D02QEMLS.js";import"./index-CXTleZNA.js";import"./index-aAdctPR4.js";import"./index-onHurrhQ.js";import"./index-QnhurHRA.js";import"./index--d2ZPp2Q.js";import"./index-44u0uri5.js";import"./index-PgA7KtkC.js";import"./index-CzL7ANP0.js";import"./index-DFN2ZEva.js";import"./index-B97cDh6f.js";import"./index-CZ0fPPTA.js";import"./index-BMxGNkbP.js";import"./index-Bj8TCYsg.js";import"./index-KPC3KFCd.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CjWSOjsl.js";import"./index-x0hwq8uq.js";import"./index-BwyGxYsl.js";import"./index-B9-K2gEf.js";import"./index-BkYL4d7S.js";import"./index-Bikxfajv.js";import"./index-xPNSVzye.js";import"./index-Bh4CHjuX.js";import"./index-DCdHhu1d.js";import"./index-DvU_tOJJ.js";import"./index-DcziJIpL.js";import"./index-CQDvThHr.js";import"./index-BvXrgCCA.js";import"./index-DvSn1Rpa.js";import"./index-DlthScRn.js";import"./index-Dmvi1Ah7.js";import"./index-Bv05uYkg.js";import"./index-Cl4HH77d.js";import"./index-CTk4SyJ7.js";import"./ComboBox-C085h5Nz.js";import"./index-C3nPMNvV.js";import"./TreeList-zjoUqghX.js";import"./copyToClipboard-DB_KM_BY.js";const l=()=>t.jsxs("div",{className:e.wrapper,children:[t.jsx(d,{title:"Theme Switching",description:"Переключение темы между светлой и темной важно для удобства пользователя, снижения напряжения глаз при различных условиях освещенности, энергосбережения на OLED/AMOLED экранах, улучшения доступности для людей с нарушениями зрения, эстетической адаптации интерфейса к разным стилям и контекстам, а также для улучшения общего пользовательского опыта и восприятия бренда.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/blob/main/src/components/ThemeSwitcher"}),t.jsx("div",{className:e.tabs,children:t.jsx(i,{children:t.jsx(i.Tab,{label:"Разработчику",active:!0})})}),t.jsx(t.Fragment,{children:t.jsx(u,{description:"Хук useThemeSwitcher управляет состоянием темы и переключением тем в приложении. Он динамически добавляет и удаляет стили из заголовка документа на основе текущей темы и предоставляет функциональность для переключения тем с сохранением предпочтений пользователя в sessionStorage.",minHeight:700,code:`import { Switch, Grid, Box, Button } from '@nlmk/ds-2.0';

export default App = () => {
  const THEME_KEY = 'nlmk-storybook-theme';

  const getIsDark = () =>
    document.documentElement.getAttribute('data-theme')?.includes('dark') ?? false;

  const [isDark, setIsDark] = useState(getIsDark);

  useEffect(() => {
    const observer = new MutationObserver(() => setIsDark(getIsDark()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const handleToggle = () => {
    const btn = (
      window.parent?.document?.getElementById('nlmk-theme-toggle-btn') ||
      window.parent?.document?.querySelector('[title*="тему"]')
    ) as HTMLButtonElement | null;
    if (btn) {
      btn.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    } else {
      const newIsDark = !isDark;
      localStorage.setItem(THEME_KEY, newIsDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', newIsDark ? 'dark-theme' : 'light-theme');
    }
  };

  const boxes = [
    { background: 'var(--spectrum-red-40)' },
    { background: 'var(--spectrum-yellow-40)' },
    { background: 'var(--spectrum-salad-40)' },
    { background: 'var(--spectrum-orange-40)' }
  ];

  return (
    <>
      <Switch checked={isDark} onChange={handleToggle} label={isDark ? 'Тёмная тема' : 'Светлая тема'} />
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
}`})})]});function m(r){return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Introduction/Theme"}),`
`,t.jsx(n,{of:c}),`
`,t.jsx(s,{children:t.jsx(l,{})})]})}function ar(r={}){const{wrapper:o}={...a(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(m,{...r})}):m()}export{ar as default};
