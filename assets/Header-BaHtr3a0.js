import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as l}from"./index-D2yTtfOz.js";import"./index-CN1eQlic.js";import{af as i,aA as p}from"./TreeList-e8j-Ky4T.js";import{DecoratorDefault as k}from"./Decorator.stories-D7iJJ_iz.js";import{r as f}from"./index-BcJSXhQi.js";import{s as c,H as u,E as t}from"./Header-BrWYEqIC.js";import{F as h}from"./FigmaEmbed-BkQST_zI.js";import{P as x}from"./Properties-BoQ2l1w8.js";import{T as H}from"./Tests-DcYMo3_q.js";/* empty css               */import"./generateUUID-D5yDV8CF.js";import"./index-BrUUz505.js";import"./index-Dd1OPmdN.js";import"./index-vbXA6nr0.js";import"./index-PY2fm1mi.js";import"./index-DmffzHLE.js";import"./index-CsQ_b7hm.js";import"./index-VmJK6twV.js";import"./index-BPWT-JIL.js";import"./index-SjOgrvem.js";import"./index-C1EIKtiR.js";import"./32-CiI8XTkU.js";import{a as b}from"./argsTypes-DdR6gwuq.js";import{c as g,S as j,U as w}from"./DocsRenderer-CFRXHY34-BPBVHBN3.js";import"./index-ChsGqxH_.js";import"./preview-D8KYfSLE.js";import"./iframe-D_gWuCK3.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-DXzpFVcb.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const a="Header",n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-23434&t=HhCDuaOuzHu5rgyf-1",C=()=>{const[o,r]=f.useState(0),s=m=>o===m;return e.jsxs("div",{className:c.wrapper,children:[e.jsx(u,{title:a,description:"Header - это компонент, который отображает настраиваемый верхний колонтитул (шапку) веб-страницы или приложения.",isBeta:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${a}`,figmaLink:n}),e.jsx("div",{className:c.tabs,children:e.jsxs(i,{children:[e.jsx(i.Tab,{label:"Разработчику",active:s(0),onClick:()=>r(0)}),e.jsx(i.Tab,{label:"Дизайнеру",active:s(1),onClick:()=>r(1)}),e.jsx(i.Tab,{label:"Тестирование",active:s(2),onClick:()=>r(2)})]})}),o==0&&e.jsxs(e.Fragment,{children:[e.jsx(t,{height:180,description:"Header по умолчанию",code:`import { Header } from '@nlmk/ds-2.0';

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
)`}),e.jsx(x,{argsTypes:b})]}),o==1&&e.jsx(h,{url:n}),o==2&&e.jsx(H,{componentName:a})]})};function d(o){return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Components/Header/Info",component:p,parameters:{jest:["Header.test.tsx"]}}),`
`,e.jsx(j,{of:k}),`
`,e.jsx(w,{children:e.jsx(C,{})})]})}function ne(o={}){const{wrapper:r}={...l(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(d,{...o})}):d()}export{ne as default};
