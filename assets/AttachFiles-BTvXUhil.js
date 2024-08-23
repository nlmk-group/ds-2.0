import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as d}from"./index-CpguRmgc.js";import{ag as c,ah as p,ai as n}from"./chunk-HLWAVYOI-8cSc4A_q.js";import{Y as s,a as F}from"./index-DlGLur7j.js";import{DecoratorDefault as b}from"./Decorator.stories-BP3ijO2B.js";import{r as h}from"./index-DQ2WTIsS.js";import{s as a,H as x,E as l}from"./Header-CCpvyPcu.js";import{F as f}from"./FigmaEmbed-D84Rc2lf.js";import{P as A}from"./Properties-wNTafXk8.js";import{T as v}from"./Tests-yFYV-agI.js";/* empty css               */import"./generateUUID-CY9Prqwy.js";import"./index-BenQYTIH.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-DJXOh8UI.js";import"./index-Dvm_EBHX.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CWVO2cHI.js";import"./32-CCQbJusC.js";import{F as k,c as u,b as t,g as j,i as $,j as r,a as g}from"./text-BlM6NsIu.js";import"./iframe-geO1X4N4.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BPDxFfoz.js";import"./index-0sbKER3h.js";const y=()=>{const[i,o]=h.useState(0);return e.jsxs("div",{className:a.wrapper,children:[e.jsx(x,{title:"AttachFiles",description:`Компонент, используемый для прикрепления файла. Компонент AttachFiles
          собирается из необходимого количества компонентов File.`,isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/master/tree/src/components/AttachFiles",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20840&mode=design&t=awyt3Fzj1XS6th7v-1"}),e.jsx("div",{className:a.tabs,children:e.jsxs(s,{children:[e.jsx(s.Tab,{label:"Разработчику",active:Number(i)===0,onClick:()=>o(0)}),e.jsx(s.Tab,{label:"Тестирование",active:Number(i)===2,onClick:()=>o(2)})]})}),Number(i)==0&&e.jsxs(e.Fragment,{children:[e.jsx(l,{description:"Компонент файла, представляет собой иконку с названием файла.",code:`import { File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <File label="${k}" />
  </>
)
            `}),e.jsx(l,{description:"Компонент файл может содержать дополнительное описание. Дополнительное описание передается при помощи параметра description.",code:`import { File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <File
      description="${u}"
      label="${t}"
    />
  </>
)
            `}),e.jsx(l,{description:"В компоненте файла слева может быть использована иконка файла (по умолчанию), чекбокс (свойство: checked), иконка IconTick24 (свойство: tick) или же не быть ничего.",code:`import { File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <File label="${t}" />
    <File label="${t}" checked />
    <File label="${t}" tick />
    <File label="${t}" empty />
  </>
)
            `}),e.jsx(l,{description:"В компоненте файла справа находится блок управления: до трех кнопок (удалить, загрузить, комментировать) или одна кнопка добавления файла. Добавление кнопок осуществляется при помощи свойств: removed - кнопка удаления, saved - кнопка загрузки, commented - комментировать, addFile - добавить файлы. Для каждой кнопки существует соответствующий ей обработчик события onClick: removedOnClick, savedOnClick, commentedOnClick, addFileOnClick.",code:`import { File } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style={{ width: '600px' }}>
    <File
      label="${t}"
      removed
    />
    <File
      commented
      label="${t}"
    />
    <File
      label="${t}"
      saved
    />
    <File
      commented
      label="${t}"
      removed
    />
    <File
      commented
      label="${t}"
      saved
    />
    <File
      label="${t}"
      removed
      saved
    />
    <File
      commented
      label="${t}"
      removed
      saved
    />
    <File
      addFile
      label="${t}"
    />
  </div>
)
            `}),e.jsx(l,{description:"Компонент AttachFiles может быть без заголовка: несколько файлов, объединенных в один контейнер.",code:`import { AttachFiles, File } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style={{ width: '600px' }}>
    <AttachFiles>
      <File
        commented
        label="${t}"
        removed
        saved
      />
      <File
        addFile
        label="${t}"
      />
    </AttachFiles>
  </div>
)
            `}),e.jsx(l,{description:"Компонент AttachFiles может быть с заголовком. Для передачи заголовка используется свойство - title. В качестве заголовка используется компонент File в любой из возможных вариаций.",code:`import { AttachFiles, File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <AttachFiles title={<File label="${j}" checked />}>
      <File label="${t}" />
      <File label="${t}" checked />
      <File label="${t}" tick />
      <File label="${t}" empty />
    </AttachFiles>
  </>
)
            `}),e.jsx(l,{description:$,code:`import { AttachFiles, File } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style={{ width: '600px' }}>
    <AttachFiles title={<File label="${t}" addFile />}>
      <File label="${t}" />
      <File label="${t}" checked />
      <File label="${t}" tick />
      <File label="${t}" empty />
    </AttachFiles>
  </div>
)
            `}),e.jsx(l,{description:r,code:`import { AttachFiles, File } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style={{ width: '600px' }}>
    <AttachFiles
      title={
        <File
          label="${r}"
          checked
          indeterminate={true}
        />
      }
    >
      <File
        label="${t}"
        checked
        removed
      />
      <File
        label="${t}"
        checked
        removed
      />
    </AttachFiles>
  </div>
)
            `}),e.jsx(A,{argsTypes:g})]}),Number(i)==1&&e.jsx(f,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20840&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(i)==2&&e.jsx(v,{componentName:"AttachFiles"})]})};function m(i){return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Components/AttachFiles/Info",component:F,parameters:{design:{type:"figma",url:"https://www.figma.com/file/QsL7u2PBZMnMhvOvj9MZzd/DS2.0-Attach-Files?node-id=101%3A8416&mode=dev"},actions:{argTypesRegex:"^on.*"},jest:["AttachFiles.test.tsx"]}}),`
`,e.jsx(p,{of:b}),`
`,e.jsx(n,{children:e.jsx(y,{})})]})}function de(i={}){const{wrapper:o}={...d(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(m,{...i})}):m()}export{de as default};
