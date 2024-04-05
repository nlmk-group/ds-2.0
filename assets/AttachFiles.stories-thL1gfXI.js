import{U as p,M as f,e as A}from"./chunk-HLWAVYOI-BfKjnGx9.js";import{y as a,A as n}from"./index-BTGymsfC.js";import{a as r,j as t,F}from"./jsx-runtime-2xDJh5tt.js";import{r as v}from"./index-CBqU2yxZ.js";import{s as m,H as u,E as l,T as k}from"./Tests-H48186Ay.js";import{F as y}from"./FigmaEmbed-BH_QNyGh.js";import{P as g}from"./Properties-uWnm9Trj.js";/* empty css               */import"./generateUUID-1cqmAxQg.js";import"./index-D1sOrwww.js";import"./index-BqvJ5JrJ.js";import{T as $}from"./index-CkVMA9Py.js";import"./index-BulafiJ9.js";import"./index-Dd2IALEV.js";import"./index-BGOHbkSJ.js";import"./index-Dp7-Jy-a.js";import"./index-D8kVD15d.js";import"./32-oKJmtLZM.js";import{F as x,c as S,b as e,g as T,i as w,j as d,a as C}from"./text-BlM6NsIu.js";import{useMDXComponents as M}from"./index-DI5IigMn.js";import"./iframe-CsvrYQR8.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-DCSdqDHf.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-C8gfT0_Y.js";import"./index-4J70fF5O.js";const h=()=>{const[i,o]=v.useState(0);return r("div",{className:m.wrapper,children:[t(u,{title:"AttachFiles",description:`Компонент, используемый для прикрепления файла. Компонент AttachFiles
          собирается из необходимого количества компонентов File.`,isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/master/tree/src/components/AttachFiles",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20840&mode=design&t=awyt3Fzj1XS6th7v-1"}),t("div",{className:m.tabs,children:r(a,{children:[t(a.Tab,{label:"Разработчику",active:Number(i)===0,onClick:()=>o(0)}),t(a.Tab,{label:"Дизайнеру",active:Number(i)===1,onClick:()=>o(1)}),t(a.Tab,{label:"Тестирование",active:Number(i)===2,onClick:()=>o(2)})]})}),Number(i)==0&&r(F,{children:[t(l,{description:"Компонент файла, представляет собой иконку с названием файла.",code:`import { File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <File label="${x}" />
  </>
)
            `}),t(l,{description:"Компонент файл может содержать дополнительное описание. Дополнительное описание передается при помощи параметра description.",code:`import { File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <File
      description="${S}"
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
  <div style={{ width: '600px' }}>
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
  </div>
)
            `}),t(l,{description:"Компонент AttachFiles может быть без заголовка: несколько файлов, объединенных в один контейнер.",code:`import { AttachFiles, File } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style={{ width: '600px' }}>
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
  </div>
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
            `}),t(l,{description:w,code:`import { AttachFiles, File } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style={{ width: '600px' }}>
    <AttachFiles title={<File label="${e}" addFile />}>
      <File label="${e}" />
      <File label="${e}" checked />
      <File label="${e}" tick />
      <File label="${e}" empty />
    </AttachFiles>
  </div>
)
            `}),t(l,{description:d,code:`import { AttachFiles, File } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style={{ width: '600px' }}>
    <AttachFiles
      title={
        <File
          label="${d}"
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
  </div>
)
            `}),t(g,{argsTypes:C})]}),Number(i)==1&&t(y,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20840&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(i)==2&&t($,{variant:"Heading4",color:"primary",children:t(k,{componentName:"AttachFiles"})})]})};function c(i){return r(F,{children:[t(f,{title:"Components/AttachFiles/Info",component:n,parameters:{design:{type:"figma",url:"https://www.figma.com/file/QsL7u2PBZMnMhvOvj9MZzd/DS2.0-Attach-Files?node-id=101%3A8416&mode=dev"},actions:{argTypesRegex:"^on.*"},jest:["AttachFiles.test.tsx"]}}),`
`,t(A,{name:"Docs",children:t(p,{children:t(h,{})})})]})}function E(i={}){const{wrapper:o}=Object.assign({},M(),i.components);return o?t(o,{...i,children:t(c,{...i})}):c()}const b=()=>t(p,{children:t(h,{})});b.storyName="Docs";b.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const s={title:"Components/AttachFiles/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/QsL7u2PBZMnMhvOvj9MZzd/DS2.0-Attach-Files?node-id=101%3A8416&mode=dev"},actions:{argTypesRegex:"^on.*"},jest:["AttachFiles.test.tsx"]},component:n,tags:["stories-mdx"],includeStories:["docs"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:E};const ne=["docs"];export{ne as __namedExportsOrder,s as default,b as docs};
