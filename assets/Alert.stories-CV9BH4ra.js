import{U as p,M as u,e as A}from"./chunk-HLWAVYOI-CUNbYoBU.js";import{J as o,K as l}from"./index-4w0GPB2W.js";import{a as i,j as t,F as c}from"./clsx.m-CcuEzMhP.js";import{r as y}from"./index-CBqU2yxZ.js";import{s as a,H as g,E as m,T as b}from"./Tests-DLeBDtOW.js";import{F as h}from"./FigmaEmbed-C5HTb5rS.js";import{P as k}from"./Properties-B60pte38.js";/* empty css               */import"./index-ehJh3wQv.js";import"./index-D-9trSFj.js";import"./index-DjeAniHW.js";import{T as v}from"./index-fbTu1Hcf.js";import"./index-BhQGQSXE.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-DyFb8FNg.js";import"./32-UdY5WLK9.js";import{a as w}from"./argsTypes-DQAFH0D0.js";import{useMDXComponents as N}from"./index-DI5IigMn.js";import"./iframe-vZ3FYMC0.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./chunk-EIRT5I3Z-DXochb4c.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-BhBVvAvs.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BMC0l3yZ.js";import"./index-BO3pQ7ot.js";const d=()=>{const[e,r]=y.useState(0);return i("div",{className:a.wrapper,children:[t(g,{title:"Alert",description:"Компонент Alert представляет собой компонент уведомления или предупреждения. Он используется для отображения важных сообщений пользователю с цветовой кодировкой в зависимости от уровня серьёзности ситуации. Поддерживает несколько вариантов отображения: стандартный, заполненный и с обведённым контуром.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/AttachFiles",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A9739&mode=design&t=awyt3Fzj1XS6th7v-1"}),t("div",{className:a.tabs,children:i(o,{children:[t(o.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>r(0)}),t(o.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>r(1)}),t(o.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>r(2)})]})}),Number(e)==0&&i(c,{children:[t(m,{description:"Компонент Alert разработан в разных вариантах: успешным, с ошибкой, с предупреждением и в качестве информационного оповещения. Для собственных вариантов используйте className.",code:`import { Alert } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Alert title="Оповещение по умолчанию" />
    <Alert severity="error" title="Оповещение об ошибке" />
    <Alert severity="warning" title="Оповещение предупреждения" />
    <Alert severity="info" title="Информационное оповещение" />
  </>
)`}),t(m,{description:"Компонент Alert можно использовать с описанием, которое можно добавить к оповещению.",code:`import { Alert } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
  <Alert
    severity="error"
    title="Оповещение с контентом"
  >
    <p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности прекрасно подходит для реализации существующих финансовых и административных условий.</p>
  </Alert>
  </>
)`}),t(m,{description:"Компонент Alert может быть добавлен с кнопками, которые выполняют различные действия.",code:`import { Alert, Button, Icon } from '@nlmk/ds-2.0';

export default  App = () =>(
  <Alert severity="info"
    action={
      <Button variant="text" onClick={() => alert('Я нажал!')}>
        <Icon
          name="IconCloseOutlined24"
          containerSize={24}
          htmlColor='var(--ac-alert-info-text)'
        />
      </Button>
    }
    title="Оповещение с кнопкой"/>
)`}),t(k,{argsTypes:w})]}),Number(e)==1&&t(h,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A9739&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(e)==2&&t(v,{variant:"Heading4",color:"primary",children:t(b,{componentName:"Alert"})})]})};function n(e){return i(c,{children:[t(u,{title:"Components/Alert/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/GkHk2iakNrk5m9wZDQZ8zz/DS2.0-Alerts?node-id=1001%3A5914&mode=dev"},jest:["Alert.test.tsx"]}}),`
`,t(A,{name:"Docs",children:t(p,{children:t(d,{})})})]})}function S(e={}){const{wrapper:r}=Object.assign({},N(),e.components);return r?t(r,{...e,children:t(n,{...e})}):n()}const f=()=>t(p,{children:t(d,{})});f.storyName="Docs";f.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const s={title:"Components/Alert/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/GkHk2iakNrk5m9wZDQZ8zz/DS2.0-Alerts?node-id=1001%3A5914&mode=dev"},jest:["Alert.test.tsx"]},component:l,tags:["stories-mdx"],includeStories:["docs"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:S};const mt=["docs"];export{mt as __namedExportsOrder,s as default,f as docs};
