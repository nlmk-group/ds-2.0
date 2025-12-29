import{r as d,j as e,f as p,S as n,U as F}from"./iframe-CxLN9ksd.js";import{useMDXComponents as b}from"./index-CeChe1UL.js";import{A as h}from"./index-mqmvCexN.js";import{DecoratorDefault as x}from"./Decorator.stories-DWPS1QvQ.js";import{s as r,H as f,E as l}from"./Header-B1Tht5jw.js";import{F as A}from"./FigmaEmbed-gwemKUEC.js";import{P as u}from"./Properties-Be6XSfnk.js";import{T as v}from"./Tests-B-cCRdNI.js";/* empty css               */import{T as s}from"./index-Bs6EWGDb.js";import{a as k}from"./argsTypes-DxsSZR-t.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-CORENSTS.js";import"./index-DUSNaC2m.js";import"./index-Bz6VJdOb.js";import"./index-C9nyZABc.js";import"./index-BnDPEMC8.js";import"./generateUUID-M57HTP56.js";import"./24-CbC-8o3Y.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-LyR6p6RN.js";import"./sizesMapping-D8QavrGc.js";import"./index-IRxTPoEY.js";import"./index-D3DoxRCP.js";import"./index-BniRS5vs.js";import"./index-CT_Q_AhL.js";import"./index-M8Uj9-kW.js";import"./32-B2BQHND4.js";import"./24-BGXSSISX.js";import"./24-MJ8JdQQ9.js";import"./24-2IXSosOm.js";import"./24-Dlyxu4_q.js";import"./24-BFZg9aq0.js";import"./24-DMGI7E0m.js";import"./24-voYW8sKN.js";import"./24-DMqNa1pl.js";import"./24-DJtALV7Z.js";import"./16-CchysOzF.js";import"./24-CJ9IDGZV.js";import"./16-kcyE2NZr.js";import"./16-DRyq0qh_.js";import"./16-D_ueUpcb.js";const t="Название файла.pdf",j="File по умолчанию",$="File с описанием",T="AttachFiles с заголовком",E="AttachFiles с кнопкой добавления файла",a="AttachFiles с чекбоксами",m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=403-5319&t=HhCDuaOuzHu5rgyf-1",I=()=>{const[i,o]=d.useState(0);return e.jsxs("div",{className:r.wrapper,children:[e.jsx(f,{title:"AttachFiles",description:`Компонент, используемый для прикрепления файла. Компонент AttachFiles
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
            `}),e.jsx(u,{argsTypes:k})]}),Number(i)==1&&e.jsx(A,{url:m}),Number(i)==2&&e.jsx(v,{componentName:"AttachFiles"})]})};function c(i){return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Components/AttachFiles/Info",component:h,parameters:{design:{type:"figma",url:"https://www.figma.com/file/QsL7u2PBZMnMhvOvj9MZzd/DS2.0-Attach-Files?node-id=101%3A8416&mode=dev"},actions:{argTypesRegex:"^on.*"},jest:["AttachFiles.test.tsx"]}}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(F,{children:e.jsx(I,{})})]})}function xe(i={}){const{wrapper:o}={...b(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(c,{...i})}):c()}export{xe as default};
