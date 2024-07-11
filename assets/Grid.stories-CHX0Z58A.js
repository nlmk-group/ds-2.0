import{U as n,M as l,e as x}from"./chunk-HLWAVYOI-BhaQKYpd.js";import{G as v}from"./index-CjrtVycB.js";import{a as i,j as r,F as t}from"./jsx-runtime-2xDJh5tt.js";import{r as y}from"./index-CBqU2yxZ.js";import{s as u,H as G,E as o,T as g}from"./Tests-0a3mgZzX.js";import{F as R}from"./FigmaEmbed-CTL1VPoD.js";import{P as k}from"./Properties-CCsHXnFP.js";/* empty css               */import{L as e}from"./index-DUR5naaP.js";import"./generateUUID-BitdulAq.js";import"./index-D_z3tN8U.js";import"./index-CTkD9j2t.js";import"./index-DGfD3wI4.js";import{T as C}from"./index-nWYpQihe.js";import"./index-CZmYKfHv.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-BDxIiU-V.js";import"./32-D4qDQhsJ.js";import{a as B}from"./argsTypes-CszzgEaZ.js";import{useMDXComponents as f}from"./index-DI5IigMn.js";import"./iframe-BB4JqNP5.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-B6tYwWtt.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./types-CpBSVUgC.js";import"./clsx.m-CH7BE6MN.js";import"./.jest-test-results-C7Ayhe-E.js";import"./index-CMH8wQUv.js";const p="https://www.figma.com/file/UrNaiI72SjVg0aHW6NYVCi/DS2.0-Grid?type=design&node-id=207-40301&mode=design&t=H6uAggyoryLoFprh-0",w=`import { Grid, Box } from '@nlmk/ds-2.0';

const App = () => (
    <Grid borderRadius="var(--4-border)" st={{ width: "100%", padding: 0 }}>
      {Array.from({ length: 3 }, (_, index) => (
        <Box
          key={index}
          px="var(--8-space)"
          py="var(--16-space)"
          borderRadius="var(--4-border)"
          background="var(--primary-blue-400)"
          st={{ flex: '1' }}
        >
          Контент {index + 1}
        </Box>
      ))}
    </Grid>
);
export default App;
`,h=`import { Grid, Box } from '@nlmk/ds-2.0';

const App = () => (
    <Grid borderRadius="var(--4-border)">
      <Grid.Row borderRadius="var(--4-border)" background="var(--error-red-100)">
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            1 из 2
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            2 из 2
          </Box>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row borderRadius="var(--4-border)" background="var(--error-red-100)">
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            1 из 3
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            2 из 3
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            3 из 3
          </Box>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);
export default App;
`,A=`import { Grid, Box } from '@nlmk/ds-2.0';

const App = () => (
    <Grid borderRadius="var(--4-border)">
      <Grid.Row borderRadius="var(--4-border)" background="var(--error-red-100)">
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            1 из 3
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            2 из 3 (шире)
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            3 из 3
          </Box>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row borderRadius="var(--4-border)" background="var(--error-red-100)">
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            1 из 3
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="58.33%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            2 из 3 (шире)
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            3 из 3
          </Box>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);
export default App;
`,N=`import { Grid, Box } from '@nlmk/ds-2.0';

const App = () => (
    <Grid borderRadius="var(--4-border)">
      <Grid.Row borderRadius="var(--4-border)" background="var(--error-red-100)">
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="16.67%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            1 из 3
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="auto">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Переменная ширина контента
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="16.67%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            3 из 3
          </Box>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row borderRadius="var(--4-border)" background="var(--error-red-100)">
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            1 из 3
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="auto">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Переменная ширина контента
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="16.67%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            3 из 3
          </Box>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);
export default App;
`,S=`import { Grid, Box } from '@nlmk/ds-2.0';

const App = () => (
    <Grid borderRadius="var(--4-border)">
      <Grid.Row borderRadius="var(--4-border)" background="var(--error-red-100)">
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Колонка
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Колонка
          </Box>
        </Grid.Column>
        <Grid.Row borderRadius="var(--4-border)" background="var(--error-red-100)" width="100%" />
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Колонка
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Колонка
          </Box>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);
export default App;
`,j=`import { Grid, Box } from '@nlmk/ds-2.0';

const App = () => (
    <Grid borderRadius="var(--4-border)">
      <Grid.Row borderRadius="var(--4-border)" background="var(--error-red-100)" alignItems="start">
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row borderRadius="var(--4-border)" background="var(--error-red-100)" alignItems="center">
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row borderRadius="var(--4-border)" background="var(--error-red-100)" alignItems="end">
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);
export default App;
`,T=`import { Grid, Box } from '@nlmk/ds-2.0';

const App = () => (
    <Grid borderRadius="var(--4-border)">
      <Grid.Row borderRadius="var(--4-border)" background="var(--error-red-100)" justifyContent="center">
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из двух колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из двух колонок
          </Box>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row borderRadius="var(--4-border)" background="var(--error-red-100)" justifyContent="space-around">
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из двух колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из двух колонок
          </Box>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row borderRadius="var(--4-border)" background="var(--error-red-100)" justifyContent="space-between">
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из двух колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из двух колонок
          </Box>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);
export default App;
`,I=`import { Grid, Box } from '@nlmk/ds-2.0';

const App = () => (
    <Grid borderRadius="var(--4-border)">
      <Grid.Row borderRadius="var(--4-border)" background="var(--error-red-100)">
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="75%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            .col-9
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            .col-4
          </Box>
          <br />
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Поскольку 9 + 4 = 13 &gt; 12, этот div шириной 4 колонки переносится на новую строку как единое целое.
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            .col-6
          </Box>
          <br />
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Последующие колонки продолжаются на новой строке.
          </Box>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);
export default App;
`,H=`import { Grid, Box } from '@nlmk/ds-2.0';

const App = () => (
    <Grid borderRadius="var(--4-border)">
      <Grid.Row borderRadius="var(--4-border)" background="var(--error-red-100)">
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            .col-6
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            .col-6
          </Box>
        </Grid.Column>
        <Grid.Row borderRadius="var(--4-border)" background="var(--error-red-100)" width="100%" />
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            .col-6
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            .col-6
          </Box>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);
export default App;
`,m=()=>{const[a,d]=y.useState(0);return i("div",{className:u.wrapper,children:[r(G,{title:"Grid",description:"Компонент Grid представляет собой универсальный контейнер, используемый для позиционирования внутренних компонентов/элементов: горизонтальный или вертикальный. Он обладает различными пропсами, что делает Grid инструментом для создания структурированного и адаптивного интерфейса.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Grid",figmaLink:p}),r("div",{className:u.tabs,children:i(e,{children:[r(e.Tab,{label:"Разработчику",active:Number(a)===0,onClick:()=>d(0)}),r(e.Tab,{label:"Дизайнеру",active:Number(a)===1,onClick:()=>d(1)}),r(e.Tab,{label:"Тестирование",active:Number(a)===2,onClick:()=>d(2)})]})}),Number(a)===0&&i(t,{children:[r(o,{height:500,description:"Большинство свойств стилей можно настраивать через пропсы компонента. Также все свойства доступны через пропс st.",code:w}),r(o,{height:500,description:"Колонки равной ширины",code:h}),r(o,{height:500,description:"Установка ширины одной колонки",code:A}),r(o,{height:500,description:"Переменная ширина контента",code:N}),r(o,{height:500,description:"Колонки равной ширины с несколькими строками",code:S}),r(o,{height:500,description:"Вертикальное выравнивание",code:j}),r(o,{height:500,description:"Горизонтальное выравнивание",code:T}),r(o,{height:500,description:"Перенос колонок",code:I}),r(o,{height:500,description:"Разрывы колонок",code:H}),r(k,{argsTypes:B})]}),Number(a)===1&&r(R,{url:p}),Number(a)===2&&r(C,{variant:"Heading4",color:"primary",children:r(g,{componentName:"Grid"})})]})};function s(a){return i(t,{children:[r(l,{title:"Components/Grid/Info",component:v,parameters:{design:{type:"figma",url:"https://www.figma.com/file/UrNaiI72SjVg0aHW6NYVCi/DS2.0-Grid?type=design&node-id=207-40301&mode=design&t=H6uAggyoryLoFprh-0"},jest:["Grid.test.tsx"]}}),`
`,r(x,{name:"Docs",children:r(n,{children:r(m,{})})})]})}function M(a={}){const{wrapper:d}=Object.assign({},f(),a.components);return d?r(d,{...a,children:r(s,{...a})}):s()}const c=()=>r(n,{children:r(m,{})});c.storyName="Docs";c.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const b={title:"Components/Grid/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/UrNaiI72SjVg0aHW6NYVCi/DS2.0-Grid?type=design&node-id=207-40301&mode=design&t=H6uAggyoryLoFprh-0"},jest:["Grid.test.tsx"]},component:v,tags:["stories-mdx"],includeStories:["docs"]};b.parameters=b.parameters||{};b.parameters.docs={...b.parameters.docs||{},page:M};const yr=["docs"];export{yr as __namedExportsOrder,b as default,c as docs};
