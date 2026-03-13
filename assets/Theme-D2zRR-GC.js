import{j as t,m as p,S as n,U as s}from"./iframe-CbS8bInr.js";import{useMDXComponents as a}from"./index-FQFA8fbo.js";import{DecoratorDefault as c}from"./Decorator.stories-B_ZhqKNm.js";import{s as e,H as d,E as u}from"./Header-DtwNtocj.js";/* empty css               */import{T as i}from"./index-BZODxpmY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-CKjhTvOz.js";import"./index-DFlE0BoX.js";import"./index-YseVeHvS.js";import"./index-BmJKslqM.js";import"./index-CrvMY39-.js";import"./16-B5g6d240.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-Sa4UUf3z.js";import"./24-B8ZOnMJQ.js";import"./index-8cX9WAIH.js";import"./16-aZBE51Hh.js";import"./index-OI82wUv3.js";import"./index-CA2hv6TN.js";import"./32-BZ5ZA3rE.js";import"./24-CiyiO54M.js";import"./24-Di0nu-by.js";import"./24-CC9V7_4j.js";import"./24-BfjqGgZ9.js";import"./24-CqnhtF5T.js";import"./24-BWksqsvG.js";import"./24-mlG8Xvhb.js";import"./24-BGnREA9p.js";import"./24-C_iNukEM.js";import"./16-BMdnWzuc.js";import"./16-CGq2ocz6.js";import"./index-ZFz_t-ha.js";import"./index-Bl1t28dV.js";import"./index-BYj-taLQ.js";import"./index-DsMC7Zj7.js";import"./index-CjORfByN.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-DgZPBMQ0.js";import"./index-BRRvAv7x.js";import"./index-B6Qf8jdS.js";import"./index-CD4Ms4Kk.js";import"./index-CF1r-WqF.js";import"./index-4JwXcQ6W.js";import"./types-TdnjS80C.js";import"./floating-ui.react-CCPXVVQu.js";import"./sizesMapping-D8QavrGc.js";import"./index-CNVtutNW.js";import"./index-DNdNd9K1.js";import"./index-BseawL0q.js";import"./index-BR8A-Tk7.js";import"./index-CxpitsSn.js";import"./index-ClICwiNM.js";import"./index-rEDSKjd0.js";import"./index-ef9lu6Ja.js";import"./index-D4khgXsL.js";import"./index-DkJpm8py.js";import"./index-CdD_sciz.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-B-JpRLL-.js";import"./useFloatingReferenceSync-CLFAbrLx.js";import"./index-DskViU9t.js";import"./index-DL8dHQVX.js";import"./index-DjEFd8p0.js";import"./index-DuRcBvNr.js";import"./index-CDdYNhVB.js";import"./index-CTYy3ATz.js";import"./index-RC84cX2N.js";import"./index-1okAfVDI.js";import"./index-BZnrPoK4.js";import"./index-Bb6ai6CK.js";import"./index-B-o2ielS.js";import"./index-Bu3gBpCD.js";import"./index-sRzOyYuW.js";import"./index-OTRnbLNR.js";import"./index-DQhvKMWh.js";import"./index-CqrliyN6.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-QP3zFYLY.js";import"./index-fm5omEVd.js";import"./index-DT6Z4PFF.js";import"./index-DmffHaCi.js";import"./index-CR0-Vswk.js";import"./index-Bmek4GOF.js";import"./index-IW_o2CdI.js";import"./index-C7nQdULz.js";import"./index-0rd4srWV.js";import"./index-CXElAOzz.js";import"./index-WNdB1hMv.js";import"./index-C3xH0iq7.js";import"./index-DfNwsgKQ.js";import"./index-C-2db-Xh.js";import"./index-DhhLArOn.js";import"./index-DInBiNnO.js";import"./index-7qjhDsEe.js";import"./ComboBox-BZRB6Qpf.js";import"./index-DfGlJ-l6.js";import"./TreeList-BbNfEBTC.js";import"./copyToClipboard-DB_KM_BY.js";const l=()=>t.jsxs("div",{className:e.wrapper,children:[t.jsx(d,{title:"Theme Switching",description:"Переключение темы между светлой и темной важно для удобства пользователя, снижения напряжения глаз при различных условиях освещенности, энергосбережения на OLED/AMOLED экранах, улучшения доступности для людей с нарушениями зрения, эстетической адаптации интерфейса к разным стилям и контекстам, а также для улучшения общего пользовательского опыта и восприятия бренда.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/blob/main/src/components/ThemeSwitcher"}),t.jsx("div",{className:e.tabs,children:t.jsx(i,{children:t.jsx(i.Tab,{label:"Разработчику",active:!0})})}),t.jsx(t.Fragment,{children:t.jsx(u,{description:"Хук useThemeSwitcher управляет состоянием темы и переключением тем в приложении. Он динамически добавляет и удаляет стили из заголовка документа на основе текущей темы и предоставляет функциональность для переключения тем с сохранением предпочтений пользователя в sessionStorage.",minHeight:700,code:`import { Switch, Grid, Box, Button } from '@nlmk/ds-2.0';

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
`,t.jsx(s,{children:t.jsx(l,{})})]})}function sr(r={}){const{wrapper:o}={...a(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(m,{...r})}):m()}export{sr as default};
