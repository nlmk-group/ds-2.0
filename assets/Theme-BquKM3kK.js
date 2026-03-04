import{j as t,m as p,S as n,U as s}from"./iframe-CE_JzATH.js";import{useMDXComponents as a}from"./index--LKfDmxm.js";import{DecoratorDefault as c}from"./Decorator.stories-Cj-tg-7N.js";import{s as e,H as d,E as u}from"./Header-CEastCIP.js";/* empty css               */import{T as i}from"./index-DR6oWFtr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-D_aCbd9C.js";import"./index-BBICZI1L.js";import"./index-Vjux8dVh.js";import"./index-CuFOreg9.js";import"./index-BmicXPVL.js";import"./16-BkTHhwnS.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-DEt0-nuC.js";import"./24-J6XSru0N.js";import"./index-vmgVWNov.js";import"./16-DWPiS2iU.js";import"./index-14rW-JY7.js";import"./index-MfvAP8aB.js";import"./32-CrxSrIcc.js";import"./24-0Dk1wnnD.js";import"./24-BBq2cK-Y.js";import"./24-Cd5pTj28.js";import"./24-DGYmTzFV.js";import"./24-HbFaW7H_.js";import"./24-BQMnublh.js";import"./24-DzFwSmYQ.js";import"./24-CjAn70IH.js";import"./24-D38MhcLh.js";import"./16-BIs1fvk9.js";import"./16-p0CPjrKD.js";import"./index-DqQz5Bh6.js";import"./index-DYU6s7CX.js";import"./index-CLTGTTU8.js";import"./index-BGKZjWkn.js";import"./index-C9knVUuX.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BFAgnURa.js";import"./index-BzyAc0E-.js";import"./index-2jg-3oeM.js";import"./index-Dg5Lxpt5.js";import"./index-BiitYh94.js";import"./index-DTnW7Fop.js";import"./types-TdnjS80C.js";import"./floating-ui.react-BU5fnxMH.js";import"./sizesMapping-D8QavrGc.js";import"./index-Dlf_Ao8T.js";import"./index-DCIzctxN.js";import"./index-D9YxWY4C.js";import"./index-Os9u-Jz6.js";import"./index-BaSH6PPb.js";import"./index-Bz3uj4QG.js";import"./index-BvCaACBB.js";import"./index-1zCxhXDP.js";import"./index-C1XFyCw_.js";import"./index-3C1lTiZm.js";import"./index-zLxCaNl1.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-B7kzxF9t.js";import"./useFloatingReferenceSync-B_aNqrAc.js";import"./index-e5L8QLyK.js";import"./index-GJu7X8CR.js";import"./index-CIwcf8Lj.js";import"./index-B98ISFmk.js";import"./index-Bd3jAiyn.js";import"./index-Dg1nWoIh.js";import"./index-DFbFAj2G.js";import"./index-Y_CVE_H3.js";import"./index-8oyMVyrk.js";import"./index-QZq9zOpZ.js";import"./index-CT3rs89l.js";import"./index-CAijYJEe.js";import"./index-CEXEVLrc.js";import"./index-pURGVU60.js";import"./index-D1Sci6D5.js";import"./index-kWQnP7zC.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-tXN-kzru.js";import"./index-DCIrx6NW.js";import"./index-DHVZe4vO.js";import"./index-DuLnj-te.js";import"./index-C7v9s-B0.js";import"./index-y0ewvpMP.js";import"./index-OcscY6If.js";import"./index-DjVMJKcc.js";import"./index-TCeJA5jN.js";import"./index-DtSKDO7f.js";import"./index-DPX3eImA.js";import"./index-DNC3PuSz.js";import"./index-CIs5j9YL.js";import"./index-Bie4xbHL.js";import"./index-WRw5KxXj.js";import"./index-DYl6OFvJ.js";import"./ComboBox-KBNGbY8a.js";import"./index-BdsesjiO.js";import"./TreeList-t_ASH-u2.js";import"./copyToClipboard-DB_KM_BY.js";const l=()=>t.jsxs("div",{className:e.wrapper,children:[t.jsx(d,{title:"Theme Switching",description:"Переключение темы между светлой и темной важно для удобства пользователя, снижения напряжения глаз при различных условиях освещенности, энергосбережения на OLED/AMOLED экранах, улучшения доступности для людей с нарушениями зрения, эстетической адаптации интерфейса к разным стилям и контекстам, а также для улучшения общего пользовательского опыта и восприятия бренда.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/blob/main/src/components/ThemeSwitcher"}),t.jsx("div",{className:e.tabs,children:t.jsx(i,{children:t.jsx(i.Tab,{label:"Разработчику",active:!0})})}),t.jsx(t.Fragment,{children:t.jsx(u,{description:"Хук useThemeSwitcher управляет состоянием темы и переключением тем в приложении. Он динамически добавляет и удаляет стили из заголовка документа на основе текущей темы и предоставляет функциональность для переключения тем с сохранением предпочтений пользователя в sessionStorage.",minHeight:700,code:`import { Switch, Grid, Box, Button } from '@nlmk/ds-2.0';

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
