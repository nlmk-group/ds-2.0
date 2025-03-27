import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as l}from"./index-CbmgEnq2.js";import{am as p,an as k,ao as f}from"./chunk-NUUEMKO5-DJ1UxXLN.js";import{af as i,ay as u}from"./TreeList-DpY6ft1X.js";import{DecoratorDefault as h}from"./Decorator.stories-B1hjNCvN.js";import{r as x}from"./index-Bnop-kX6.js";import{s as c,H,E as t}from"./Header-BjV9Z2XX.js";import{F as b}from"./FigmaEmbed-BOLm1oIz.js";import{P as g}from"./Properties-ta1-3nhB.js";import{T as j}from"./Tests-BSVicLRy.js";/* empty css               */import"./generateUUID-DcAM5OoX.js";import"./index-BtfGMBzk.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-L_UGJClr.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-nqntSJSg.js";import"./index-DokmLR-l.js";import"./32-X262ygjI.js";import{a as w}from"./argsTypes-DdR6gwuq.js";import"./iframe-DDhOT_gi.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-LRLORaHx.js";import"./index-B5g4YLzC.js";const a="Header",n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-23434&t=HhCDuaOuzHu5rgyf-1",C=()=>{const[o,r]=x.useState(0),s=m=>o===m;return e.jsxs("div",{className:c.wrapper,children:[e.jsx(H,{title:a,description:"Header - это компонент, который отображает настраиваемый верхний колонтитул (шапку) веб-страницы или приложения.",isBeta:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${a}`,figmaLink:n}),e.jsx("div",{className:c.tabs,children:e.jsxs(i,{children:[e.jsx(i.Tab,{label:"Разработчику",active:s(0),onClick:()=>r(0)}),e.jsx(i.Tab,{label:"Дизайнеру",active:s(1),onClick:()=>r(1)}),e.jsx(i.Tab,{label:"Тестирование",active:s(2),onClick:()=>r(2)})]})}),o==0&&e.jsxs(e.Fragment,{children:[e.jsx(t,{height:180,description:"Header по умолчанию",code:`import { Header } from '@nlmk/ds-2.0';

export default App = () => (
  <Header title="Header по умолчанию" />
)`}),e.jsx(t,{height:200,description:"Header с кнопкой возвращения слева",code:`import { Header } from '@nlmk/ds-2.0';

export default App = () => (
  <Header 
    title='Header с кнопкой возвращения слева' 
    showBack 
    onBackClick={() => console.log('Back clicked')} 
  />
)`}),e.jsx(t,{height:180,description:"Header с датой и временем",code:`import { Header } from '@nlmk/ds-2.0';

export default App = () => (
  <Header title='Header с датой и временем' showDate />
)`}),e.jsx(t,{height:180,description:"Header с кнопкой добавления в избранное",code:`import { Header } from '@nlmk/ds-2.0';

export default App = () => (
  <Header 
    title='Header с кнопкой добавления в избранное' 
    showFavorite 
    onFavoriteClick={() => console.log('Favorite clicked')}
  />
)`}),e.jsx(t,{height:180,description:"Header с кнопкой уведомления",code:`import { Header } from '@nlmk/ds-2.0';

export default App = () => (
  <Header 
    title='Header с кнопкой уведомления' 
    showNotification 
    onNotificationClick={() => console.log('Notification clicked')} 
    notificationAmount={9} 
  />
)`}),e.jsx(t,{description:"Header с хлебными крошками",code:`import { Header, Breadcrumbs } from '@nlmk/ds-2.0';

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
)`}),e.jsx(t,{description:"Header с дочерней кнопкой и хлебными крошками",code:`import { Header, Button, IconSettingsAltOutlined24 } from '@nlmk/ds-2.0';

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
)`}),e.jsx(t,{description:"Header со всеми свойствами",code:`import { Header, Breadcrumbs, Link } from '@nlmk/ds-2.0';

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
)`}),e.jsx(g,{argsTypes:w})]}),o==1&&e.jsx(b,{url:n}),o==2&&e.jsx(j,{componentName:a})]})};function d(o){return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Components/Header/Info",component:u,parameters:{jest:["Header.test.tsx"]}}),`
`,e.jsx(k,{of:h}),`
`,e.jsx(f,{children:e.jsx(C,{})})]})}function ae(o={}){const{wrapper:r}={...l(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(d,{...o})}):d()}export{ae as default};
