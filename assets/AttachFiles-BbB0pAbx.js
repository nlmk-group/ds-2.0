import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as c}from"./index-CbmgEnq2.js";import{am as p,an as n,ao as F}from"./chunk-NUUEMKO5-DTJc8g2n.js";import{ai as s,a as b}from"./TreeList-Dj-weB7m.js";import{DecoratorDefault as h}from"./Decorator.stories-B1hjNCvN.js";import{r as x}from"./index-Bnop-kX6.js";import{s as a,H as f,E as l}from"./Header-CFM6m0df.js";import{F as A}from"./FigmaEmbed-DjGVpF7L.js";import{P as u}from"./Properties-Br3JLn3-.js";import{T as v}from"./Tests-55p_x1KJ.js";/* empty css               */import"./generateUUID-DxloPTqA.js";import"./index-CpbWvJzH.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-CzMHMlM5.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-EMjLjg44.js";import"./index-DokmLR-l.js";import"./32-BuOLl5Xl.js";import{F as k,c as j,b as t,g as $,i as T,j as r,a as E}from"./text-CvDLagVv.js";import"./iframe-D5gb8lBD.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-OoQOjY2D.js";import"./index-B5g4YLzC.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=403-5319&t=HhCDuaOuzHu5rgyf-1",g=()=>{const[i,o]=x.useState(0);return e.jsxs("div",{className:a.wrapper,children:[e.jsx(f,{title:"AttachFiles",description:`Компонент, используемый для прикрепления файла. Компонент AttachFiles
          собирается из необходимого количества компонентов File.`,isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/master/tree/src/components/AttachFiles",figmaLink:m}),e.jsx("div",{className:a.tabs,children:e.jsxs(s,{children:[e.jsx(s.Tab,{label:"Разработчику",active:Number(i)===0,onClick:()=>o(0)}),e.jsx(s.Tab,{label:"Дизайнеру",active:Number(i)===1,onClick:()=>o(1)}),e.jsx(s.Tab,{label:"Тестирование",active:Number(i)===2,onClick:()=>o(2)})]})}),Number(i)==0&&e.jsxs(e.Fragment,{children:[e.jsx(l,{description:"Компонент файла, представляет собой иконку с названием файла.",code:`import { File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <File label="${k}" />
  </>
)
            `}),e.jsx(l,{description:"Компонент файл может содержать дополнительное описание. Дополнительное описание передается при помощи параметра description.",code:`import { File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <File
      description="${j}"
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
    <AttachFiles title={<File label="${$}" checked />}>
      <File label="${t}" />
      <File label="${t}" checked />
      <File label="${t}" tick />
      <File label="${t}" empty />
    </AttachFiles>
  </>
)
            `}),e.jsx(l,{description:T,code:`import { AttachFiles, File } from '@nlmk/ds-2.0';

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
            `}),e.jsx(u,{argsTypes:E})]}),Number(i)==1&&e.jsx(A,{url:m}),Number(i)==2&&e.jsx(v,{componentName:"AttachFiles"})]})};function d(i){return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Components/AttachFiles/Info",component:b,parameters:{design:{type:"figma",url:"https://www.figma.com/file/QsL7u2PBZMnMhvOvj9MZzd/DS2.0-Attach-Files?node-id=101%3A8416&mode=dev"},actions:{argTypesRegex:"^on.*"},jest:["AttachFiles.test.tsx"]}}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(F,{children:e.jsx(g,{})})]})}function me(i={}){const{wrapper:o}={...c(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(d,{...i})}):d()}export{me as default};
