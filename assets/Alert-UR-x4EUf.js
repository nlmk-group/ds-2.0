import{r as n,j as t,m as l,S as a,U as c}from"./iframe-BiRbIEmb.js";import{useMDXComponents as d}from"./index-DFADegm-.js";import{a as u,A}from"./argsTypes-H46RY-HZ.js";import{DecoratorDefault as f}from"./Decorator.stories-Cq2K7ZK_.js";import{s,H as x,E as o}from"./Header-BOuFM4z3.js";import{F as j}from"./FigmaEmbed-DXWxjqCs.js";import{P as b}from"./Properties-CTw5qxDW.js";import{T as k}from"./Tests-u2K_XUZf.js";/* empty css               */import{T as i}from"./index-Bc-rzIjC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDGZFkub.js";import"./index-CIk7IDPA.js";import"./clsx-B-dksMZM.js";import"./index-CuPa9ZS_.js";import"./index-D4AgSARz.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-Lr1o5q5Y.js";import"./24-BbKUo3HT.js";import"./24-Bp_HhEEU.js";import"./24-A5UfwTSh.js";import"./24-BFTkICnz.js";import"./24-CkBhKuNp.js";import"./24-99ZCpV7Q.js";import"./24-DuGNUhV0.js";import"./24-BSYcdl4j.js";import"./24-3PxmqcmV.js";import"./16-XX98Hoxr.js";import"./24-BLu740_K.js";import"./24-DOr3c8sx.js";import"./16-DUa4Gnlc.js";import"./16-CSBhMP4b.js";import"./16-DMPWLjn6.js";import"./index-CDeU-sH7.js";import"./index-DDnqRqhr.js";import"./index-t6GndyZ6.js";import"./index-BLKLNOs5.js";import"./generateUUID-M57HTP56.js";import"./sizesMapping-D8QavrGc.js";import"./index-BC1L0GA_.js";import"./index-BbyeJaRT.js";import"./index-17UNxjz6.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=41-2&t=HhCDuaOuzHu5rgyf-1",g=()=>{const[r,e]=n.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx(x,{title:"Alert",description:"Компонент Alert представляет собой компонент уведомления или предупреждения. Он используется для отображения важных сообщений пользователю с цветовой кодировкой в зависимости от уровня серьёзности ситуации. Поддерживает несколько вариантов отображения: стандартный, заполненный и с обведённым контуром.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/AttachFiles",figmaLink:m}),t.jsx("div",{className:s.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>e(0)}),t.jsx(i.Tab,{label:"Дизайнеру",active:Number(r)===1,onClick:()=>e(1)}),t.jsx(i.Tab,{label:"Тестирование",active:Number(r)===2,onClick:()=>e(2)})]})}),Number(r)==0&&t.jsxs(t.Fragment,{children:[t.jsx(o,{description:"Компонент Alert разработан в разных вариантах: успешным, с ошибкой, с предупреждением и в качестве информационного оповещения. Для собственных вариантов используйте className.",code:`import { Alert } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Alert title="Оповещение по умолчанию" />
    <Alert severity="error" title="Оповещение об ошибке" />
    <Alert severity="warning" title="Оповещение предупреждения" />
    <Alert severity="info" title="Информационное оповещение" />
  </>
)`}),t.jsx(o,{description:"Компонент Alert можно использовать с описанием, которое можно добавить к оповещению.",code:`import { Alert } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
  <Alert
    severity="error"
    title="Оповещение с контентом"
  >
    <p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности прекрасно подходит для реализации существующих финансовых и административных условий.</p>
  </Alert>
  </>
)`}),t.jsx(o,{description:"Компонент Alert может быть добавлен с встроенной кнопкой закрытия",code:`
import { Alert } from '@nlmk/ds-2.0';

const App = () => (
  <Alert severity="info"
    close={ () => alert('Я закрыл!') }
    title="Оповещение с кнопкой закрытия"/>
)
export default App
`}),t.jsx(o,{description:"Компонент Alert может быть добавлен с другими кнопками",code:`
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
            htmlColor='var(--spectrum-sky-60)' />
        }
        onClick={() => confirm('Подтвердите удаление!')} />
    }
    title="Оповещение с кнопкой удаления" />
)
export default App
`}),t.jsx(b,{argsTypes:u})]}),Number(r)==1&&t.jsx(j,{url:m}),Number(r)==2&&t.jsx(k,{componentName:"Alert"})]})};function p(r){return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/Alert/Info",component:A,parameters:{design:{type:"figma",url:"https://www.figma.com/file/GkHk2iakNrk5m9wZDQZ8zz/DS2.0-Alerts?node-id=1001%3A5914&mode=dev"},jest:["Alert.test.tsx"]}}),`
`,t.jsx(a,{of:f}),`
`,t.jsx(c,{children:t.jsx(g,{})})]})}function lt(r={}){const{wrapper:e}={...d(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(p,{...r})}):p()}export{lt as default};
