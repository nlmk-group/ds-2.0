import{j as t}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as n}from"./index-CpguRmgc.js";import"./chunk-HLWAVYOI-BpCf8szX.js";import{ae as p,af as a,ag as l}from"./index-CY6AFN3F.js";import{Q as o,A as c}from"./index-De6xVjfl.js";import{DecoratorDefault as d}from"./Decorator.stories-BP3ijO2B.js";import{r as f}from"./index-DQ2WTIsS.js";import{s,H as u,E as i}from"./Header-LklIFrOQ.js";import{F as x}from"./FigmaEmbed-oiCkEjTf.js";import{P as A}from"./Properties-DzW4XCsL.js";import{T as j}from"./Tests-BNc6kC-d.js";/* empty css               */import"./generateUUID-i9L7EtYg.js";import"./index-bLIWCpda.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-DJXOh8UI.js";import"./index-DB41iIPt.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CpIRsoAz.js";import"./32-C4VDZHit.js";import{b}from"./argsTypes-AdwF7d1F.js";import"./iframe-DmgkbAwY.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BgRDMNuH.js";import"./index-0sbKER3h.js";const g=()=>{const[e,r]=f.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx(u,{title:"Alert",description:"Компонент Alert представляет собой компонент уведомления или предупреждения. Он используется для отображения важных сообщений пользователю с цветовой кодировкой в зависимости от уровня серьёзности ситуации. Поддерживает несколько вариантов отображения: стандартный, заполненный и с обведённым контуром.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/AttachFiles",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A9739&mode=design&t=awyt3Fzj1XS6th7v-1"}),t.jsx("div",{className:s.tabs,children:t.jsxs(o,{children:[t.jsx(o.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>r(0)}),t.jsx(o.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>r(2)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{description:"Компонент Alert разработан в разных вариантах: успешным, с ошибкой, с предупреждением и в качестве информационного оповещения. Для собственных вариантов используйте className.",code:`import { Alert } from '@nlmk/ds-2.0';

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
)`}),t.jsx(i,{description:"Компонент Alert может быть добавлен с кнопками, которые выполняют различные действия.",code:`
import { Alert, Button, IconCloseOutlined24 } from '@nlmk/ds-2.0';

const App = () =>(
  <Alert severity="info"
    action={
      <Button fill="clear" onClick={() => alert('Я нажал!')}>
        <IconCloseOutlined24
          htmlColor='var(--ac-alert-info-text)'
        />
      </Button>
    }
    title="Оповещение с кнопкой"/>
)
export default App
`}),t.jsx(A,{argsTypes:b})]}),Number(e)==1&&t.jsx(x,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A9739&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(e)==2&&t.jsx(j,{componentName:"Alert"})]})};function m(e){return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Components/Alert/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/GkHk2iakNrk5m9wZDQZ8zz/DS2.0-Alerts?node-id=1001%3A5914&mode=dev"},jest:["Alert.test.tsx"]}}),`
`,t.jsx(a,{of:d}),`
`,t.jsx(l,{children:t.jsx(g,{})})]})}function it(e={}){const{wrapper:r}={...n(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(m,{...e})}):m()}export{it as default};
