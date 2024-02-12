import{M as c,U as d}from"./chunk-HLWAVYOI-66c4847e.js";import{a as o,A as p}from"./index-d664667a.js";import{a as i,j as t,F as l}from"./clsx.m-3764cf42.js";import{r as f}from"./index-f1f749bf.js";import{s,H as A,E as a,T as u}from"./Tests-6cc9a61b.js";import{F as g}from"./FigmaEmbed-379bdd65.js";import{P as y}from"./Properties-7782ab91.js";/* empty css               */import"./index-a4c35820.js";import"./index-63601013.js";import"./index-e99519f1.js";import"./index-cd305b84.js";import"./index-147655d7.js";import{T as b}from"./index-fb030d50.js";import"./index-ed56af28.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import{a as w}from"./argsTypes-8c1dd131.js";import{u as h}from"./index-4fb8b842.js";import"./iframe-d1a001cd.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-a351fc0b.js";import"./index-29c055d1.js";import"./IconArticle24-414bfa4c.js";import"./IconsList.module-e4fe8555.js";import"./IconPanTool24-f1398bf1.js";import"./.jest-test-results-d0862f47.js";import"./index-c1da5c13.js";const k=()=>{const[e,r]=f.useState(0);return i("div",{className:s.wrapper,children:[t(A,{title:"Alert",description:"Компонент Alert представляет собой компонент уведомления или предупреждения. Он используется для отображения важных сообщений пользователю с цветовой кодировкой в зависимости от уровня серьёзности ситуации. Поддерживает несколько вариантов отображения: стандартный, заполненный и с обведённым контуром.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/AttachFiles",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A9739&mode=design&t=awyt3Fzj1XS6th7v-1"}),t("div",{className:s.tabs,children:i(o,{children:[t(o.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>r(0)}),t(o.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>r(1)}),t(o.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>r(2)})]})}),Number(e)==0&&i(l,{children:[t(a,{description:"Компонент Alert разработан в разных вариантах: успешным, с ошибкой, с предупреждением и в качестве информационного оповещения. Для собственных вариантов используйте className.",code:`import { Alert } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Alert title="Оповещение по умолчанию" />
    <Alert severity="error" title="Оповещение об ошибке" />
    <Alert severity="warning" title="Оповещение предупреждения" />
    <Alert severity="info" title="Информационное оповещение" />
  </>
)`}),t(a,{description:"Компонент Alert можно использовать с описанием, которое можно добавить к оповещению.",code:`import { Alert } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
  <Alert
    severity="error"
    title="Оповещение с контентом"
  >
    <p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности прекрасно подходит для реализации существующих финансовых и административных условий.</p>
  </Alert>
  </>
)`}),t(a,{description:"Компонент Alert может быть добавлен с кнопками, которые выполняют различные действия.",code:`import { Alert, Button, Icon } from '@nlmk/ds-2.0';

export default  App = () =>(
  <Alert severity="info"
    action={
      <Button variant="text" onClick={() => alert('Я нажал!')}>
        <Icon
          name="IconClose24"
          containerSize={24}
          htmlColor='var(--ac-alert-info-text)'
        />
      </Button>
    }
    title="Оповещение с кнопкой"/>
)`}),t(y,{argsTypes:w})]}),Number(e)==1&&t(g,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A9739&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(e)==2&&t(b,{variant:"Heading4",color:"primary",children:t(u,{componentName:"Alert"})})]})};function n(e){return i(l,{children:[t(c,{title:"Components/Alert/Info",component:p,parameters:{design:{type:"figma",url:"https://www.figma.com/file/GkHk2iakNrk5m9wZDQZ8zz/DS2.0-Alerts?node-id=1001%3A5914&mode=dev"},jest:["Alert.test.tsx"]}}),`
`,t(d,{children:t(k,{})})]})}function v(e={}){const{wrapper:r}=Object.assign({},h(),e.components);return r?t(r,{...e,children:t(n,{...e})}):n()}const N=()=>{throw new Error("Docs-only story")};N.parameters={docsOnly:!0};const m={title:"Components/Alert/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/GkHk2iakNrk5m9wZDQZ8zz/DS2.0-Alerts?node-id=1001%3A5914&mode=dev"},jest:["Alert.test.tsx"]},component:p,tags:["stories-mdx"],includeStories:["__page"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:v};const lt=["__page"];export{lt as __namedExportsOrder,N as __page,m as default};
