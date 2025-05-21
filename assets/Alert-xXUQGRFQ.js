import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as p}from"./index-CbmgEnq2.js";import"./index-Cg4FlZUc.js";import{ag as o,A as l}from"./TreeList-ChyggQS5.js";import{DecoratorDefault as a}from"./Decorator.stories-B1hjNCvN.js";import{r as c}from"./index-Bnop-kX6.js";import{s,H as d,E as i}from"./Header-DoEz7EVi.js";import{F as f}from"./FigmaEmbed-pZ_Xsbw5.js";import{P as u}from"./Properties-BySoTS4I.js";import{T as x}from"./Tests-OdO6CFav.js";/* empty css               */import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{a as A}from"./argsTypes-Bd7AXqIS.js";import{c as j,e as b,U as g}from"./DocsRenderer-CFRXHY34-Bs6YVDKr.js";import"./preview-ft71v16T.js";import"./iframe-CWffINz-.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-mpWeDU2g.js";import"./index-B5g4YLzC.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=41-2&t=HhCDuaOuzHu5rgyf-1",k=()=>{const[e,r]=c.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx(d,{title:"Alert",description:"Компонент Alert представляет собой компонент уведомления или предупреждения. Он используется для отображения важных сообщений пользователю с цветовой кодировкой в зависимости от уровня серьёзности ситуации. Поддерживает несколько вариантов отображения: стандартный, заполненный и с обведённым контуром.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/AttachFiles",figmaLink:m}),t.jsx("div",{className:s.tabs,children:t.jsxs(o,{children:[t.jsx(o.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>r(0)}),t.jsx(o.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>r(1)}),t.jsx(o.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>r(2)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{description:"Компонент Alert разработан в разных вариантах: успешным, с ошибкой, с предупреждением и в качестве информационного оповещения. Для собственных вариантов используйте className.",code:`import { Alert } from '@nlmk/ds-2.0';

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
      <Button 
        type="button"
        color="ghost"
        variant="secondary"
        iconButton={
          <IconDeleteBinOutlined24
            htmlColor='var(--ac-alert-info-text)' />
        }
        onClick={() => confirm('Подтвердите удаление!')} />
    }
    title="Оповещение с кнопкой удаления" />
)
export default App
`}),t.jsx(u,{argsTypes:A})]}),Number(e)==1&&t.jsx(f,{url:m}),Number(e)==2&&t.jsx(x,{componentName:"Alert"})]})};function n(e){return t.jsxs(t.Fragment,{children:[t.jsx(j,{title:"Components/Alert/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/GkHk2iakNrk5m9wZDQZ8zz/DS2.0-Alerts?node-id=1001%3A5914&mode=dev"},jest:["Alert.test.tsx"]}}),`
`,t.jsx(b,{of:a}),`
`,t.jsx(g,{children:t.jsx(k,{})})]})}function ot(e={}){const{wrapper:r}={...p(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(n,{...e})}):n()}export{ot as default};
