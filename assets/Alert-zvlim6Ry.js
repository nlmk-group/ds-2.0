import{r as n,j as t,m as l,S as a,U as c}from"./iframe-BPtLBEuk.js";import{useMDXComponents as d}from"./index-DY5aY42c.js";import{a as u,A}from"./argsTypes-kpVpAxRS.js";import{DecoratorDefault as f}from"./Decorator.stories-Bt-6wqMy.js";import{s,H as x,E as o}from"./Header-lxb-Wymn.js";import{F as j}from"./FigmaEmbed-IQ2Nn4zn.js";import{P as b}from"./Properties-u6_xeg7P.js";import{T as k}from"./Tests-DUUoQDTR.js";/* empty css               */import{T as i}from"./index-CX87Y9E4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5OaxW6Y.js";import"./index-C9_7xPUt.js";import"./clsx-B-dksMZM.js";import"./index-D-pLh_NR.js";import"./index-CDRf2h9x.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-DeoBrCvQ.js";import"./24-CrLAaNeG.js";import"./24-CpcywAhj.js";import"./24-Ch6Cnsji.js";import"./24-Q7FkUsyZ.js";import"./24-DOwtHgIx.js";import"./24-B4m_3SjA.js";import"./24-CV2ikCuL.js";import"./24-Ba8I7UHN.js";import"./24-BA0GVvoT.js";import"./16-CXoys7qm.js";import"./24-Cxxq2bXd.js";import"./24-8ackLhic.js";import"./16-DwnwCPW9.js";import"./16-BY-nZnBX.js";import"./16-DaMJtJxQ.js";import"./index-DZQvJksB.js";import"./index-BUWLdeqz.js";import"./index-D9G_R1e4.js";import"./index-V5PZJFO3.js";import"./generateUUID-M57HTP56.js";import"./sizesMapping-D8QavrGc.js";import"./index-yAFWEvQV.js";import"./index-CANPVv15.js";import"./index-d_6bz31j.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=41-2&t=HhCDuaOuzHu5rgyf-1",g=()=>{const[r,e]=n.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx(x,{title:"Alert",description:"Компонент Alert представляет собой компонент уведомления или предупреждения. Он используется для отображения важных сообщений пользователю с цветовой кодировкой в зависимости от уровня серьёзности ситуации. Поддерживает несколько вариантов отображения: стандартный, заполненный и с обведённым контуром.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/AttachFiles",figmaLink:m}),t.jsx("div",{className:s.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>e(0)}),t.jsx(i.Tab,{label:"Дизайнеру",active:Number(r)===1,onClick:()=>e(1)}),t.jsx(i.Tab,{label:"Тестирование",active:Number(r)===2,onClick:()=>e(2)})]})}),Number(r)==0&&t.jsxs(t.Fragment,{children:[t.jsx(o,{description:"Компонент Alert разработан в разных вариантах: успешным, с ошибкой, с предупреждением и в качестве информационного оповещения. Для собственных вариантов используйте className.",code:`import { Alert } from '@nlmk/ds-2.0';

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
