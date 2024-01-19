import{M as F,U as b}from"./chunk-HLWAVYOI-d631769f.js";import{a,b as d}from"./index-28aa8d3c.js";import{a as r,j as t,F as n}from"./clsx.m-3764cf42.js";import{r as h}from"./index-f1f749bf.js";import{s as m,H as f,E as l,T as A}from"./Tests-90dff33a.js";import{F as u}from"./FigmaEmbed-6e417b82.js";import{P as k}from"./Properties-88568f40.js";/* empty css               */import"./index-a4c35820.js";import"./index-63601013.js";import"./index-e99519f1.js";import"./index-cd305b84.js";import"./index-147655d7.js";import{T as g}from"./index-fb030d50.js";import"./index-ed56af28.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import{F as v,L as $,a as y,b as e,c as T,d as L,e as p,f as x}from"./text-fc1a5ad7.js";import{u as C}from"./index-4fb8b842.js";import"./iframe-abf28b65.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-8a8a28ec.js";import"./index-29c055d1.js";import"./IconArticle24-414bfa4c.js";import"./IconsList.module-e4fe8555.js";import"./IconPanTool24-f1398bf1.js";import"./.jest-test-results-551c368c.js";import"./index-c1da5c13.js";const E=()=>{const[i,o]=h.useState(0);return r("div",{className:m.wrapper,children:[t(f,{title:"AttachFiles",description:`Компонент, используемый для прикрепления файла. Компонент AttachFiles
          собирается из необходимого количества компонентов File.`,isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/master/tree/src/components/AttachFiles",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20840&mode=design&t=awyt3Fzj1XS6th7v-1"}),t("div",{className:m.tabs,children:r(a,{children:[t(a.Tab,{label:"Разработчику",active:Number(i)===0,onClick:()=>o(0)}),t(a.Tab,{label:"Дизайнеру",active:Number(i)===1,onClick:()=>o(1)}),t(a.Tab,{label:"Тестирование",active:Number(i)===2,onClick:()=>o(2)})]})}),Number(i)==0&&r(n,{children:[t(l,{description:"Компонент файла, представляет собой иконку с названием файла.",code:`import { File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <File label="${v}" />
  </>
)
            `}),t(l,{description:"Файл может содержать длинный заголовок, если это было указано.",code:`import { File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <File
      label="${$}"
      longTitle
    />
  </>
)
            `}),t(l,{description:"Компонент файл может содержать дополнительное описание. Дополнительное описание передается при помощи параметра description.",code:`import { File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <File
      description="${y}"
      label="${e}"
    />
  </>
)
            `}),t(l,{description:"В компоненте файла слева может быть использована иконка файла (по умолчанию), чекбокс (свойство: checked), иконка IconTick24 (свойство: tick) или же не быть ничего.",code:`import { File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <File label="${e}" />
    <File label="${e}" checked />
    <File label="${e}" tick />
    <File label="${e}" empty />
  </>
)
            `}),t(l,{description:"В компоненте файла справа находится блок управления: до трех кнопок (удалить, загрузить, комментировать) или одна кнопка добавления файла. Добавление кнопок осуществляется при помощи свойств: removed - кнопка удаления, saved - кнопка загрузки, commented - комментировать, addFile - добавить файлы. Для каждой кнопки существует соответствующий ей обработчик события onClick: removedOnClick, savedOnClick, commentedOnClick, addFileOnClick.",code:`import { File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <File
      label="${e}"
      removed
    />
    <File
      commented
      label="${e}"
    />
    <File
      label="${e}"
      saved
    />
    <File
      commented
      label="${e}"
      removed
    />
    <File
      commented
      label="${e}"
      saved
    />
    <File
      label="${e}"
      removed
      saved
    />
    <File
      commented
      label="${e}"
      removed
      saved
    />
    <File
      addFile
      label="${e}"
    />
  </>
)
            `}),t(l,{description:"Компонент AttachFiles может быть без заголовка: несколько файлов, объединенных в один контейнер.",code:`import { AttachFiles, File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <AttachFiles>
      <File
        commented
        label="${e}"
        removed
        saved
      />
      <File
        addFile
        label="${e}"
      />
    </AttachFiles>
  </>
)
            `}),t(l,{description:"Компонент AttachFiles может быть с заголовком. Для передачи заголовка используется свойство - title. В качестве заголовка используется компонент File в любой из возможных вариаций.",code:`import { AttachFiles, File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <AttachFiles title={<File label="${T}" checked />}>
      <File label="${e}" />
      <File label="${e}" checked />
      <File label="${e}" tick />
      <File label="${e}" empty />
    </AttachFiles>
  </>
)
            `}),t(l,{description:L,code:`import { AttachFiles, File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <AttachFiles title={<File label="${e}" addFile />}>
      <File label="${e}" />
      <File label="${e}" checked />
      <File label="${e}" tick />
      <File label="${e}" empty />
    </AttachFiles>
  </>
)
            `}),t(l,{description:p,code:`import { AttachFiles, File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <AttachFiles
      title={
        <File
          label="${p}"
          checked
          indeterminate={true}
        />
      }
    >
      <File
        label="${e}"
        checked
        removed
      />
      <File
        label="${e}"
        checked
        removed
      />
    </AttachFiles>
  </>
)
            `}),t(k,{argsTypes:x})]}),Number(i)==1&&t(u,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20840&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(i)==2&&t(g,{variant:"Heading4",color:"primary",children:t(A,{componentName:"AttachFiles"})})]})};function c(i){return r(n,{children:[t(F,{title:"Components/AttachFiles/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/file/QsL7u2PBZMnMhvOvj9MZzd/DS2.0-Attach-Files?node-id=101%3A8416&mode=dev"},actions:{argTypesRegex:"^on.*"},jest:["AttachFiles.test.tsx"]}}),`
`,t(b,{children:t(E,{})})]})}function M(i={}){const{wrapper:o}=Object.assign({},C(),i.components);return o?t(o,{...i,children:t(c,{...i})}):c()}const _=()=>{throw new Error("Docs-only story")};_.parameters={docsOnly:!0};const s={title:"Components/AttachFiles/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/QsL7u2PBZMnMhvOvj9MZzd/DS2.0-Attach-Files?node-id=101%3A8416&mode=dev"},actions:{argTypesRegex:"^on.*"},jest:["AttachFiles.test.tsx"]},component:d,tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:M};const Ae=["__page"];export{Ae as __namedExportsOrder,_ as __page,s as default};
