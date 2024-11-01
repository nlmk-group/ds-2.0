import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as n}from"./index-CbmgEnq2.js";import{am as p,an as a,ao as c}from"./chunk-NUUEMKO5-zybvIu1X.js";import{$ as o,A as d}from"./index-Bult1pSm.js";import{DecoratorDefault as f}from"./Decorator.stories-B1hjNCvN.js";import{r as u}from"./index-Bnop-kX6.js";import{s,H as x,E as i}from"./Header-Cqd_i1aV.js";import{F as A}from"./FigmaEmbed-Dv_1tmkq.js";import{P as j}from"./Properties-Bv2rjfL_.js";import{T as b}from"./Tests-cYn1xz5o.js";/* empty css               */import"./generateUUID-DAuIdu-p.js";import"./index-B0lWqv5F.js";import"./index-DPg--y1u.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-BVI3RfDi.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BXzk8UvY.js";import"./32-CMOOVZNy.js";import{a as k}from"./argsTypes-C9dLEcGu.js";import"./iframe-Bqux-A90.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-DNyW-qLm.js";import"./index-CT8gBKwQ.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=41-2&t=HhCDuaOuzHu5rgyf-1",g=()=>{const[e,r]=u.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx(x,{title:"Alert",description:"Компонент Alert представляет собой компонент уведомления или предупреждения. Он используется для отображения важных сообщений пользователю с цветовой кодировкой в зависимости от уровня серьёзности ситуации. Поддерживает несколько вариантов отображения: стандартный, заполненный и с обведённым контуром.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/AttachFiles",figmaLink:m}),t.jsx("div",{className:s.tabs,children:t.jsxs(o,{children:[t.jsx(o.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>r(0)}),t.jsx(o.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>r(1)}),t.jsx(o.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>r(2)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{description:"Компонент Alert разработан в разных вариантах: успешным, с ошибкой, с предупреждением и в качестве информационного оповещения. Для собственных вариантов используйте className.",code:`import { Alert } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Alert title="Оповещение по умолчанию" />
    <Alert severity="error" title="Оповещение об ошибке" />
    <Alert severity="warning" title="Оповещение предупреждения" />
    <Alert severity="info" title="Информационное оповещение" />
  </>
)`}),t.jsx(i,{description:"Компонент Alert можно использовать с описанием, которое можно добавить к оповещению.",code:`import { Alert } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
  <Alert
    severity="error"
    title="Оповещение с контентом"
  >
    <p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности прекрасно подходит для реализации существующих финансовых и административных условий.</p>
  </Alert>
  </>
)`}),t.jsx(i,{description:"Компонент Alert может быть добавлен с встроенной кнопкой закрытия",code:`
import { Alert } from '@nlmk/ds-2.0';

const App = () => (
  <Alert severity="info"
    close={ () => alert('Я закрыл!') }
    title="Оповещение с кнопкой закрытия"/>
)
export default App
`}),t.jsx(i,{description:"Компонент Alert может быть добавлен с другими кнопками",code:`
import { Alert, Button, IconDeleteBinOutlined24 } from '@nlmk/ds-2.0';

const App = () => (
  <Alert severity="info"
    action={
      <Button fill="clear"
        iconButton={
          <IconDeleteBinOutlined24
            htmlColor='var(--ac-alert-info-text)' />
        }
        onClick={() => confirm('Подтвердите удаление!')} />
    }
    title="Оповещение с кнопкой удаления" />
)
export default App
`}),t.jsx(j,{argsTypes:k})]}),Number(e)==1&&t.jsx(A,{url:m}),Number(e)==2&&t.jsx(b,{componentName:"Alert"})]})};function l(e){return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Components/Alert/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/file/GkHk2iakNrk5m9wZDQZ8zz/DS2.0-Alerts?node-id=1001%3A5914&mode=dev"},jest:["Alert.test.tsx"]}}),`
`,t.jsx(a,{of:f}),`
`,t.jsx(c,{children:t.jsx(g,{})})]})}function et(e={}){const{wrapper:r}={...n(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(l,{...e})}):l()}export{et as default};
