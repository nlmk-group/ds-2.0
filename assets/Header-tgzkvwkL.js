import{r as l,j as e,m as p,S as k,U as u}from"./iframe-DUDunD5j.js";import{useMDXComponents as f}from"./index-CDbv5Jgm.js";import{a as h,H as x}from"./argsTypes-CGL32of4.js";import{DecoratorDefault as H}from"./Decorator.stories-DJdCAXEf.js";import{s as c,H as b,E as o}from"./Header-BrZEypuE.js";import{F as g}from"./FigmaEmbed-DovFRgvJ.js";import{P as j}from"./Properties-CcP2VO-p.js";import{T as w}from"./Tests-CSK3RYMm.js";/* empty css               */import{T as i}from"./index-DntXJei4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DyX2qzoz.js";import"./clsx-B-dksMZM.js";import"./index-aoSKrGJR.js";import"./index-YMfOmFJ1.js";import"./index-DdmbHqmW.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BB59z0Rt.js";import"./24-tbbQM-dv.js";import"./24-BLuChUkw.js";import"./24-BGpvFgfj.js";import"./24-BGrLeqpw.js";import"./24-CAewpWgK.js";import"./24-BoEjxhhs.js";import"./24-BAIQ796Q.js";import"./24-BwgIJwEH.js";import"./24-C99UGV7O.js";import"./16-CfofIm8-.js";import"./24-CoSTS1kQ.js";import"./24-C5ui32Ki.js";import"./16-DEDu0dyt.js";import"./16-BarbOM5u.js";import"./16-4gnAFB8p.js";import"./colorsMapping-C6bFIk14.js";import"./sizesMapping-D8QavrGc.js";import"./index-rc7u3FmU.js";import"./index-z_YeHj0K.js";import"./index-r-uICxAh.js";import"./index-BS4wiMYT.js";import"./generateUUID-M57HTP56.js";import"./index-BixcmxoL.js";import"./index-BE6Pvktf.js";import"./index-BjTLv_jS.js";const a="Header",n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-23434&t=HhCDuaOuzHu5rgyf-1",C=()=>{const[t,r]=l.useState(0),s=d=>t===d;return e.jsxs("div",{className:c.wrapper,children:[e.jsx(b,{title:a,description:"Header - это компонент, который отображает настраиваемый верхний колонтитул (шапку) веб-страницы или приложения.",isBeta:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${a}`,figmaLink:n}),e.jsx("div",{className:c.tabs,children:e.jsxs(i,{children:[e.jsx(i.Tab,{label:"Разработчику",active:s(0),onClick:()=>r(0)}),e.jsx(i.Tab,{label:"Дизайнеру",active:s(1),onClick:()=>r(1)}),e.jsx(i.Tab,{label:"Тестирование",active:s(2),onClick:()=>r(2)})]})}),t==0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{height:180,description:"Header по умолчанию",code:`import { Header } from '@nlmk/ds-2.0';

export default App = () => (
  <Header title="Header по умолчанию" />
)`}),e.jsx(o,{height:200,description:"Header с кнопкой возвращения слева",code:`import { Header } from '@nlmk/ds-2.0';

export default App = () => (
  <Header 
    title='Header с кнопкой возвращения слева' 
    showBack 
    onBackClick={() => console.log('Back clicked')} 
  />
)`}),e.jsx(o,{height:180,description:"Header с датой и временем",code:`import { Header } from '@nlmk/ds-2.0';

export default App = () => (
  <Header title='Header с датой и временем' showDate />
)`}),e.jsx(o,{height:180,description:"Header с кнопкой добавления в избранное",code:`import { Header } from '@nlmk/ds-2.0';

export default App = () => (
  <Header 
    title='Header с кнопкой добавления в избранное' 
    showFavorite 
    onFavoriteClick={() => console.log('Favorite clicked')}
  />
)`}),e.jsx(o,{height:180,description:"Header с кнопкой уведомления",code:`import { Header } from '@nlmk/ds-2.0';

export default App = () => (
  <Header 
    title='Header с кнопкой уведомления' 
    showNotification 
    onNotificationClick={() => console.log('Notification clicked')} 
    notificationAmount={9} 
  />
)`}),e.jsx(o,{description:"Header с хлебными крошками",code:`import { Header, Breadcrumbs } from '@nlmk/ds-2.0';

export default App = () => (
  <Header 
    title='Header с хлебными крошками' 
    breadcrumbs={
      <Breadcrumbs 
        crumbs={[
          { href: 'https://developer.mozilla.org/en-US/', label: 'MDN' },
          { href: 'https://www.lipsum.com/', label: 'Lorem Ipsum' },
          { href: 'https://www.w3schools.com/', label: 'W3 Schools' },
          { href: 'https://css-tricks.com/', label: 'CSS Tricks' },
          { href: 'https://www.geeksforgeeks.org/', label: 'Geeks For Geeks', active: true }
        ]} 
      />
    } 
  />
)`}),e.jsx(o,{description:"Header с дочерней кнопкой и хлебными крошками",code:`import { Header, Button, IconSettingsAltOutlined24 } from '@nlmk/ds-2.0';

export default App = () => (
  <Header title='Header с дочерней кнопкой и хлебными крошками'>
    <Button 
      type="button" 
      style={{ marginRight: '25px' }} 
      color="grey" 
      variant="secondary" 
      startIcon={<IconSettingsAltOutlined24 />}
    >
      Настройки
    </Button>
  </Header>
)`}),e.jsx(o,{description:"Header со всеми свойствами",code:`import { Header, Breadcrumbs, Link } from '@nlmk/ds-2.0';

export default App = () => (
  <Header
    title="Заголовок"
    showDate
    showPrint
    showFavorite
    showBack
    showVideo
    showMessage
    showNotification
    onPrintClick={() => console.log('Print clicked')}
    onVideoClick={() => console.log('Video clicked')}
    onMessageClick={() => console.log('Message clicked')}
    onFavoriteClick={() => console.log('Favorite clicked')}
    onBackClick={() => console.log('Back clicked')}
    onNotificationClick={() => console.log('Notification clicked')}
    notificationAmount={9}
    breadcrumbs={
      <Breadcrumbs>
        {breadcrumbsLinks.map((link, index) => (
          <Breadcrumbs.Crumb key={index}>
            <Link to={link.href}>{link.label}</Link>
          </Breadcrumbs.Crumb>
        ))}
      </Breadcrumbs>
    }
  />
)`}),e.jsx(j,{argsTypes:h})]}),t==1&&e.jsx(g,{url:n}),t==2&&e.jsx(w,{componentName:a})]})};function m(t){return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Components/Header/Info",component:x,parameters:{jest:["Header.test.tsx"]}}),`
`,e.jsx(k,{of:H}),`
`,e.jsx(u,{children:e.jsx(C,{})})]})}function ke(t={}){const{wrapper:r}={...f(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(m,{...t})}):m()}export{ke as default};
