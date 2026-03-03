import{j as t,m as p,S as n,U as s}from"./iframe-B-8SjXGq.js";import{useMDXComponents as a}from"./index-BM0F5ub6.js";import{DecoratorDefault as c}from"./Decorator.stories-Dr4lnSCK.js";import{s as e,H as d,E as u}from"./Header-Bt2eZ0XI.js";/* empty css               */import{T as i}from"./index-lTVAi1na.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-DWjwH6nq.js";import"./index-CgN-9tGr.js";import"./index-BRmunlbh.js";import"./index-Dfriq7lO.js";import"./index-DcMeZWW2.js";import"./16-BDcju3io.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-Dnj2eOeL.js";import"./24-CcDcN9Vt.js";import"./index-SApy96bT.js";import"./16-BNHSjjb0.js";import"./index-WkQvqD6p.js";import"./index-DqQiUiOd.js";import"./32-CnDyPHET.js";import"./24-DwPXEH6E.js";import"./24-2N5QtnbH.js";import"./24-nrV1efA2.js";import"./24-CjfWKKEu.js";import"./24-BSP12KOo.js";import"./24-rC0gEzBb.js";import"./24-DxfkYE9X.js";import"./24-CBHgkWPK.js";import"./24-FlXbOQvU.js";import"./16-B09-A838.js";import"./16-Bjal1Kcy.js";import"./index-1sCEIwws.js";import"./index-D81MGMsd.js";import"./index-O63UzFtM.js";import"./index-BG3v9Uex.js";import"./index-DjGSmZX3.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BA-hOJmZ.js";import"./index-C0fhG72W.js";import"./index-CVbeuYKL.js";import"./index-CDSure0q.js";import"./index-DLvwH50I.js";import"./index-DHxtbo6p.js";import"./types-TdnjS80C.js";import"./floating-ui.react-D9KZKjfI.js";import"./sizesMapping-D8QavrGc.js";import"./index-aEU1GZqG.js";import"./index-BFb5q96r.js";import"./index-nnfFZ9zh.js";import"./index-CJXb8S3m.js";import"./index-DQp-at3f.js";import"./index-BKV_kQZi.js";import"./index-BsPt_Eeq.js";import"./index-CA4vmu2I.js";import"./index-DmKJBqLb.js";import"./index-BpxvuqRy.js";import"./index-Bwm1RwE7.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CezGHJxo.js";import"./useFloatingReferenceSync-Dse8FenO.js";import"./index-lbMvjW_5.js";import"./index-BQw9APNC.js";import"./index-BIIYwqts.js";import"./index-gTdR2BgD.js";import"./index-BO_pppR1.js";import"./index-CA8coT2V.js";import"./index-BOvyB9Hg.js";import"./index-D0y26aqM.js";import"./index-nMsf_JLJ.js";import"./index-CbDdcaTf.js";import"./index-Bemzq2Pd.js";import"./index-CZwmGRm1.js";import"./index-BsUh_WOc.js";import"./index-BiLYqWzA.js";import"./index-CRdPa-5u.js";import"./index-DXDnCKkm.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CHI72_Mb.js";import"./index-6SN77Vs_.js";import"./index-J-DZaU2Z.js";import"./index-DRE2VGwx.js";import"./index-pTCHtkWj.js";import"./index-BistaHJu.js";import"./index-CdcbwH8N.js";import"./index-D7Pw4d7U.js";import"./index-B09XZxaV.js";import"./index-DTtZr5oI.js";import"./index--AS7wYhz.js";import"./index-XCg4i2Qb.js";import"./index-K1Up07vg.js";import"./index-CCVipuRP.js";import"./index-CYq0uzEC.js";import"./index-D9xdw-kV.js";import"./ComboBox-D53aWZPr.js";import"./index-CIaEAtE8.js";import"./TreeList-u3mntEr0.js";import"./copyToClipboard-DB_KM_BY.js";const l=()=>t.jsxs("div",{className:e.wrapper,children:[t.jsx(d,{title:"Theme Switching",description:"Переключение темы между светлой и темной важно для удобства пользователя, снижения напряжения глаз при различных условиях освещенности, энергосбережения на OLED/AMOLED экранах, улучшения доступности для людей с нарушениями зрения, эстетической адаптации интерфейса к разным стилям и контекстам, а также для улучшения общего пользовательского опыта и восприятия бренда.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/blob/main/src/components/ThemeSwitcher"}),t.jsx("div",{className:e.tabs,children:t.jsx(i,{children:t.jsx(i.Tab,{label:"Разработчику",active:!0})})}),t.jsx(t.Fragment,{children:t.jsx(u,{description:"Хук useThemeSwitcher управляет состоянием темы и переключением тем в приложении. Он динамически добавляет и удаляет стили из заголовка документа на основе текущей темы и предоставляет функциональность для переключения тем с сохранением предпочтений пользователя в sessionStorage.",minHeight:700,code:`import { Switch, Grid, Box, Button } from '@nlmk/ds-2.0';

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
`,t.jsx(s,{children:t.jsx(l,{})})]})}function nr(r={}){const{wrapper:o}={...a(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(m,{...r})}):m()}export{nr as default};
