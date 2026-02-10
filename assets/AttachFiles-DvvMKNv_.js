import{r as d,j as e,m as p,S as n,U as F}from"./iframe-BiRbIEmb.js";import{useMDXComponents as b}from"./index-DFADegm-.js";import{A as h}from"./index-D8VP9hvC.js";import{DecoratorDefault as x}from"./Decorator.stories-Cq2K7ZK_.js";import{s as r,H as A,E as l}from"./Header-BOuFM4z3.js";import{F as f}from"./FigmaEmbed-DXWxjqCs.js";import{P as u}from"./Properties-CTw5qxDW.js";import{T as v}from"./Tests-u2K_XUZf.js";/* empty css               */import{T as s}from"./index-Bc-rzIjC.js";import{a as k}from"./argsTypes-DxsSZR-t.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-CIk7IDPA.js";import"./index-CDeU-sH7.js";import"./index-DDnqRqhr.js";import"./index-t6GndyZ6.js";import"./index-BLKLNOs5.js";import"./generateUUID-M57HTP56.js";import"./24-DOr3c8sx.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CuPa9ZS_.js";import"./sizesMapping-D8QavrGc.js";import"./index-BC1L0GA_.js";import"./index-BDGZFkub.js";import"./index-BbyeJaRT.js";import"./index-17UNxjz6.js";import"./index-D4AgSARz.js";import"./32-Lr1o5q5Y.js";import"./24-BbKUo3HT.js";import"./24-Bp_HhEEU.js";import"./24-A5UfwTSh.js";import"./24-BFTkICnz.js";import"./24-CkBhKuNp.js";import"./24-99ZCpV7Q.js";import"./24-DuGNUhV0.js";import"./24-BSYcdl4j.js";import"./24-3PxmqcmV.js";import"./16-XX98Hoxr.js";import"./24-BLu740_K.js";import"./16-DUa4Gnlc.js";import"./16-CSBhMP4b.js";import"./16-DMPWLjn6.js";const t="Название файла.pdf",j="File по умолчанию",$="File с описанием",T="AttachFiles с заголовком",E="AttachFiles с кнопкой добавления файла",a="AttachFiles с чекбоксами",m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=403-5319&t=HhCDuaOuzHu5rgyf-1",I=()=>{const[i,o]=d.useState(0);return e.jsxs("div",{className:r.wrapper,children:[e.jsx(A,{title:"AttachFiles",description:`Компонент, используемый для прикрепления файла. Компонент AttachFiles
          собирается из необходимого количества компонентов File.`,isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/master/tree/src/components/AttachFiles",figmaLink:m}),e.jsx("div",{className:r.tabs,children:e.jsxs(s,{children:[e.jsx(s.Tab,{label:"Разработчику",active:Number(i)===0,onClick:()=>o(0)}),e.jsx(s.Tab,{label:"Дизайнеру",active:Number(i)===1,onClick:()=>o(1)}),e.jsx(s.Tab,{label:"Тестирование",active:Number(i)===2,onClick:()=>o(2)})]})}),Number(i)==0&&e.jsxs(e.Fragment,{children:[e.jsx(l,{description:"Компонент файла, представляет собой иконку с названием файла.",code:`import { File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <File label="${j}" />
  </>
)
            `}),e.jsx(l,{description:"Компонент файл может содержать дополнительное описание. Дополнительное описание передается при помощи параметра description.",code:`import { File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <File
      description="${$}"
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
    <AttachFiles title={<File label="${T}" checked />}>
      <File label="${t}" />
      <File label="${t}" checked />
      <File label="${t}" tick />
      <File label="${t}" empty />
    </AttachFiles>
  </>
)
            `}),e.jsx(l,{description:E,code:`import { AttachFiles, File } from '@nlmk/ds-2.0';

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
            `}),e.jsx(l,{description:a,code:`import { AttachFiles, File } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style={{ width: '600px' }}>
    <AttachFiles
      title={
        <File
          label="${a}"
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
            `}),e.jsx(u,{argsTypes:k})]}),Number(i)==1&&e.jsx(f,{url:m}),Number(i)==2&&e.jsx(v,{componentName:"AttachFiles"})]})};function c(i){return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Components/AttachFiles/Info",component:h,parameters:{design:{type:"figma",url:"https://www.figma.com/file/QsL7u2PBZMnMhvOvj9MZzd/DS2.0-Attach-Files?node-id=101%3A8416&mode=dev"},actions:{argTypesRegex:"^on.*"},jest:["AttachFiles.test.tsx"]}}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(F,{children:e.jsx(I,{})})]})}function xe(i={}){const{wrapper:o}={...b(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(c,{...i})}):c()}export{xe as default};
