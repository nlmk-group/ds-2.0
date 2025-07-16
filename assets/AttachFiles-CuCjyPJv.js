import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as c}from"./index-D2yTtfOz.js";import"./index-BoJ3VS2T.js";import{af as s,a as p}from"./TreeList-BgNZ17Gs.js";import{DecoratorDefault as n}from"./Decorator.stories-D7iJJ_iz.js";import{r as F}from"./index-BcJSXhQi.js";import{s as r,H as b,E as l}from"./Header-B13J54Ql.js";import{F as h}from"./FigmaEmbed-XMv6-p-m.js";import{P as x}from"./Properties-BjQNGjzc.js";import{T as f}from"./Tests-CFiWu12S.js";/* empty css               */import"./generateUUID-CJxgi7Ha.js";import"./index-BG4omi31.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-DcXliXrs.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-t2lirjGB.js";import"./index-C5rKoyII.js";import"./32-BpMTv1cT.js";import{b as A,c as u,F as t,g as v,i as k,j as a,a as j}from"./text-BVOai7OT.js";import{c as $,S as T,U as E}from"./DocsRenderer-CFRXHY34-BwxJCIPq.js";import"./index-ChsGqxH_.js";import"./preview-BMh0uLOu.js";import"./iframe-CDXuiHNu.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-CN3TbABt.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=403-5319&t=HhCDuaOuzHu5rgyf-1",g=()=>{const[i,o]=F.useState(0);return e.jsxs("div",{className:r.wrapper,children:[e.jsx(b,{title:"AttachFiles",description:`Компонент, используемый для прикрепления файла. Компонент AttachFiles
          собирается из необходимого количества компонентов File.`,isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/master/tree/src/components/AttachFiles",figmaLink:m}),e.jsx("div",{className:r.tabs,children:e.jsxs(s,{children:[e.jsx(s.Tab,{label:"Разработчику",active:Number(i)===0,onClick:()=>o(0)}),e.jsx(s.Tab,{label:"Дизайнеру",active:Number(i)===1,onClick:()=>o(1)}),e.jsx(s.Tab,{label:"Тестирование",active:Number(i)===2,onClick:()=>o(2)})]})}),Number(i)==0&&e.jsxs(e.Fragment,{children:[e.jsx(l,{description:"Компонент файла, представляет собой иконку с названием файла.",code:`import { File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <File label="${A}" />
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
    <AttachFiles title={<File label="${v}" checked />}>
      <File label="${t}" />
      <File label="${t}" checked />
      <File label="${t}" tick />
      <File label="${t}" empty />
    </AttachFiles>
  </>
)
            `}),e.jsx(l,{description:k,code:`import { AttachFiles, File } from '@nlmk/ds-2.0';

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
            `}),e.jsx(x,{argsTypes:j})]}),Number(i)==1&&e.jsx(h,{url:m}),Number(i)==2&&e.jsx(f,{componentName:"AttachFiles"})]})};function d(i){return e.jsxs(e.Fragment,{children:[e.jsx($,{title:"Components/AttachFiles/Info",component:p,parameters:{design:{type:"figma",url:"https://www.figma.com/file/QsL7u2PBZMnMhvOvj9MZzd/DS2.0-Attach-Files?node-id=101%3A8416&mode=dev"},actions:{argTypesRegex:"^on.*"},jest:["AttachFiles.test.tsx"]}}),`
`,e.jsx(T,{of:n}),`
`,e.jsx(E,{children:e.jsx(g,{})})]})}function pe(i={}){const{wrapper:o}={...c(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(d,{...i})}):d()}export{pe as default};
